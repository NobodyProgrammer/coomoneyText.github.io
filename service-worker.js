importScripts("precache-manifest.e1e390e4d412c1f39f9ca57dc331df76.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// __precacheManifest = [ array of items to precache ]

self.addEventListener("install", function(event) {
  console.log("[PWA] Installing service worker");
  self.skipWaiting();
});

self.addEventListener("push", function(event) {
  let data = JSON.parse(event.data.text());
  self.registration.showNotification(data.title, {
    icon: "/static/favicon.png",
    badge: "/static/app_icon_512.png",
    body: data.body
  });
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache the Google Fonts webfont files
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365
      })
    ]
  })
);

