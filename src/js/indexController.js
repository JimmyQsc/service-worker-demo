import {checkStatus} from './utils.js';
import {toJson} from './utils.js';
import {qs} from './utils.js';
import Template from './template.js';
import {$on} from './utils.js';
import {$prepend} from './utils.js';
import idb from 'idb';
import Toast from './toast.js';


export default class IndexController {
    constructor() {
        this.template = new Template();
        this.feedsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=a9f426d48c7b4c6192affe4ce2c18b2c';
        this.container = qs('.feeds-list', qs('.feeds'));
        this.toastContainer = qs('.toast-container');
        this._detectFeature();
        this._openDatabase();
        this._showCachedArticles();
        this._getFeeds();
        this._clickToRefresh();
        this._registerServiceWorker();
    }

    _detectFeature() {
        let unsupports = [];

        if (!navigator.serviceWorker) {
            unsupports.push('Service worker');
        }

        if (!window.fetch) {
            unsupports.push('fetch API');
        }

        if (!window.caches) {
            unsupports.push('cache API');
        }

        if (unsupports.length) {
            new Toast({
                message: '你的浏览器不支持' + unsupports.join(',')
            });
        }
    }

    _openDatabase() {
        // 有service worker再创建数据库
        if (!navigator.serviceWorker) {
            this._dbPromise = Promise.resolve();
            return;
        }

        this._dbPromise = idb.open('TechNews', 1, upgradeDB => {
            let store = upgradeDB.createObjectStore('articles', {
                keyPath: 'title'
            });
            store.createIndex('time', 'publishedAt');
        });
    }

    _clickToRefresh() {
        let self = this;
        $on(qs('.refresh-button'), 'click', () => {
            self._getFeeds();
        });
    }

    _getFeeds() {
        let self = this;
        fetch(this.feedsUrl)
            .then(checkStatus)
            .then(toJson)
            .then((data) => self._extractNew(data))
            .then((data) => self._renderFeeds(data))
            .catch();
    }

    _extractNew(data) {
        if (this._latestfeed) {
            let feeds = data.articles;
            let latestfeed = this._latestfeed;
            data.articles = feeds.filter((item) => {
                return Date.parse(item.publishedAt) > Date.parse(latestfeed.publishedAt);
            });
        }
        this._cacheArticles(data.articles);
        return Promise.resolve(data.articles);
    }

    _renderFeeds(data) {
        let feeds = data;
        if (!feeds.length) {
            new Toast({
                message: '还没有新文章'
            });
            return;
        }
        this._latestfeed = feeds[0];
        $prepend(this.container, this.template.feedsList(feeds));
    }

    _cacheArticles(articles) {
        // cache the new articles in indexedDB
        this._dbPromise.then((db) => {
            if (!db) return;

            var tx = db.transaction('articles', 'readwrite');
            var store = tx.objectStore('articles');
            articles.forEach(function(article) {
                store.put(article);
            });

            store.index('time').openCursor(null, 'prev').then((cursor) => {
                return cursor.advance(50);
            }).then(function deleteRest(cursor) {
                if (!cursor) return;
                cursor.delete();
                return cursor.continue().then(deleteRest);
            });
        });

        this._syncImageCache();
    }

    _showCachedArticles() {
        let self = this;
        this._dbPromise.then((db) => {
            if (!db || self.container.children.length) {
                return;
            }
            let index = db.transaction('articles').objectStore('articles').index('time');

            index.getAll().then((articles) => {
                articles.sort((a, b) => {
                    return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
                });
                self._renderFeeds(articles);
            });
        });
    }

    // 使文章缓存和图片缓存一直
    _syncImageCache() {
        return this._dbPromise.then(function(db) {
            if (!db) return;

            let imagesNeeded = [];

            let tx = db.transaction('articles');
            return tx.objectStore('articles').getAll().then((articles) => {
                articles.forEach((article) => {
                    if (article.urlToImage) {
                        const imageUrl = new URL(article.urlToImage);
                        const cacheUrl = imageUrl.origin + imageUrl.pathname;
                        imagesNeeded.push(cacheUrl);
                    }
                });

                return caches.open('TechNews-image-cache').then((cache) => {
                    return cache.keys().then((requests) => {
                        requests.forEach((request) => {
                            console.log(request);
                            if (!imagesNeeded.includes(request.url)) {
                                cache.delete(request);
                            }
                        });
                    });
                });
            });
        });
    }
    /****************** service worker related *******************/
    // 注册serviceWorker
    _registerServiceWorker() {
        // 功能检测
        if (!navigator.serviceWorker) {
            return;
        }

        let self = this;

        navigator.serviceWorker.register('/serviceWorker.js').then(function(reg) {
            // 如果当前页面没有被service worker控制，也就不必处理更新了
            if (!navigator.serviceWorker.controller) {
                return;
            }

            // 如果有 service worker正在等待被激活，说明新的service worker安装成功，update ready
            if (reg.waiting) {
                self._updateWorker(reg.waiting);
                return;
            }

            // 如果有 service worker正在被安装，跟踪安装状态
            if (reg.installing) {
                self._trackInstalling(reg.installing);
                return;
            }

            // 监听updatefound事件，跟踪更新的安装状态
            reg.addEventListener('updatefound', function() {
                self._trackInstalling(reg.installing);
            });
        });

        // 当控制页面的service worker发生改变，刷新页面以加载更新的资源
        var refreshing;
        navigator.serviceWorker.addEventListener('controllerchange', function() {
            if (refreshing) return;
            window.location.reload();
            refreshing = true;
        });
    }

    _trackInstalling(sw) {
        let self = this;
        sw.addEventListener('statechange', function() {
            if (sw.state == 'installed') {
                self._updateWorker(sw);
            }
        });
    }

    _updateWorker(sw) {
        new Toast({
            message: '检测到更新。点击更新刷新页面',
            type: 'success',
            customButtons: [
                {
                    text: '更新',
                    onClick: function() {
                        sw.postMessage('skipWaiting');
                    }
                }
            ]
        });
    }

}