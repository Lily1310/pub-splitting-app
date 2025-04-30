self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('pub-splitter-cache')
        .then(cache => {
          return cache.addAll([
            'index.html',
            'manifest.json',
            'sw.js',
            'icon-192.png',
            'icon-512.png'
          ]);
        })
        .catch(err => {
          console.error('Cache addAll failed:', err);
        })
    );
  });
