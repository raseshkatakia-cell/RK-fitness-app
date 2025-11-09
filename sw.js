const CACHE = "rk-fitness-cache-v1";
const FILES = [
  "index.html","style.css","script.js","manifest.json","privacy.html",
  "logo-192.png","logo-512.png"
];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
