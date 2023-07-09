self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/css/pico.classless.min.css',
        '/favicon-512x512.png',
        '/favicon.svg',
        '/manifest.json',
        '/komayo-souriant-au-dessus-de-l-adversaire-endormi.png',
        '/komayo-souriant-au-dessus-de-l-adversaire-endormi.webp',
        '/la-partie-inachevee/',
            '/la-partie-inachevee/travail-prolonge-apres-heure-reglementaire.webp',
            '/la-partie-inachevee/depart-brusque-bureau-atmosphere-confinee.webp',
            '/la-partie-inachevee/paysage-nocturne-osaka-lumieres-astres.webp',
            '/la-partie-inachevee/parties-shogi-bar-regence-soir.webp',
            '/la-partie-inachevee/femme-kimono-bleu-bar-regence.webp',
            '/la-partie-inachevee/plateau-ogi-pieces-configurations.webp',
            '/la-partie-inachevee/mysterieuse-adversaire-presente-princesse-ogi.webp',
            '/la-partie-inachevee/duel-ogi-determination-defi.webp',
            '/la-partie-inachevee/miroirs-clartelunaire-adversaire-ogi.webp',
            '/la-partie-inachevee/sourire-triomphant-lune-lointaine.webp',
            '/la-partie-inachevee/temps-evapore-sommeil-plateau-jeu.webp',
            '/la-partie-inachevee/piece-silencieuse-feuille-papier.webp',
            '/la-partie-inachevee/deambulation-rues-desertes-melancolie-espoir.webp',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
