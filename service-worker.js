self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ghcc-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './main.js',
        './icon.png'
      ]);
    })
  );
});
