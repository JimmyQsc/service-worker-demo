const staticCache = 'TechNews-static-v21';
const contentImageCache = 'TechNews-image-cache';

// 安装时缓存资源
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCache).then((cache) => {
            return cache.addAll([
                './favicons/favicon-16x16.png',
                './favicons/android-chrome-192x192.png',
                './favicons/android-chrome-512x512.png',
                './favicons/favicon.ico',
                './favicons/manifest.json',
                './favicons/favicon-32x32.png',
                './index.html',
                './builds/bundle.js'
            ]);
        })
    );
});

// 激活时清理之前版本的缓存
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => {
                    return cacheName.startsWith('TechNews-static-') && cacheName !== staticCache;
                }).map((cacheName) => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

// 劫持页面的网络请求
self.addEventListener('fetch', (event) => {
    var requestUrl = new URL(event.request.url);
    console.log(event.request);
    console.log(requestUrl);
    // 缓存图片
    if (/\.(gif|jpe?g|png|bmp)$/i.test(requestUrl.pathname)) {
        event.respondWith(cacheImage(event.request));
        return;
    }

    // 先从缓存中找，找不到再网络请求
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data == 'skipWaiting') {
        self.skipWaiting();
    }
});

// 缓存图片
function cacheImage(request) {
    const requestUrl = new URL(request.url);
    const cacheUrl = requestUrl.origin + requestUrl.pathname;

    return caches.open(contentImageCache).then((cache) => {
        return cache.match(cacheUrl).then((response) => {
            if (response) {
                return response;
            }

            return fetch(request).then((response) => {
                cache.put(cacheUrl, response.clone());
                return response;
            });
        });
    });
}