```javascript
const CACHE_NAME = "sansli-sayim-v1";

const DOSYALAR = [
    "./",
    "./index.html",
    "./manifest.json"
];

self.addEventListener("install", function(event) {

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(DOSYALAR);
        })
    );

});

self.addEventListener("fetch", function(event) {

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );

});
```
