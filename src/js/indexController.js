import {checkStatus} from './utils.js';
import {toJson} from './utils.js';
import {qs} from './utils.js';
import Template from './template.js';
import {$on} from './utils.js';
import {$prepend} from './utils.js';
import idb from 'idb';

export default class IndexController {
    constructor() {
        this.template = new Template();
        this.feedsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=a9f426d48c7b4c6192affe4ce2c18b2c';
        this.container = qs('.feeds-list', qs('.feeds'));
        this._getFeeds();
        this._clickToRefresh();
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
        if (this.latestfeed) {
            let feeds = data.articles;
            let latestfeed = this.latestfeed;
            data.articles = feeds.filter((item) => {
                return Date.parse(item.publishedAt) > Date.parse(latestfeed.publishedAt);
            });
        }
        return Promise.resolve(data);
    }

    _renderFeeds(data) {
        let feeds = data.articles;
        if (feeds.length) {
            this.latestfeed = feeds[0];
        }
        $prepend(this.container, this.template.feedsList(feeds));
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
        sw.postMessage('skipWaiting');
    }

}