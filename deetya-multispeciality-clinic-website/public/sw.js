/* Minimal, safe service worker for DEETYA Clinic.
 *
 * Strategy (deliberately conservative):
 *  - Navigations (HTML): network-first, falling back to the cached shell only
 *    when offline — so deploys always go live instantly.
 *  - Same-origin assets (hashed JS/CSS, /images/*, fonts, favicons):
 *    stale-while-revalidate — instant repeat-visit loads from cache while the
 *    network refreshes the cache in the background.
 *  - Cross-origin requests (wa.me, maps) are never cached or intercepted.
 *
 * Bump CACHE below when changing strategies; old caches are purged on
 * activate, so nothing ever goes permanently stale.
 */
const CACHE = 'deetya-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch cross-origin

  // Navigations: network first, cached shell as offline fallback.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('/index.html', copy));
          return res;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Static assets: stale-while-revalidate.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
