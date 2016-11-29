const staticCacheName = 'TechNews-static-v1';
const contentImageCache = 'TechNews-image-cache';

// 安装时缓存资源
self.addEventListener('install', (event) => {
    console.log('installing');
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            return cache.addAll([
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
                    return cacheName.startsWith('TechNews-static-') && cacheName !== staticCacheName;
                }).map((cacheName) => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

// 劫持页面的网络请求
self.addEventListener('fetch', (event) => {
    console.log(event.request);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// self.addEventListener('message', (event) => {

// });
