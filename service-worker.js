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
          '/rencontre-avec-komayo-au-bar-de-la-regence/',
            '/rencontre-avec-komayo-au-bar-de-la-regence/travail-prolonge-apres-heure-reglementaire.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/depart-brusque-bureau-atmosphere-confinee.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/paysage-nocturne-osaka-lumieres-astres.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/parties-shogi-bar-regence-soir.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/femme-kimono-bleu-bar-regence.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/plateau-ogi-pieces-configurations.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/mysterieuse-adversaire-presente-princesse-ogi.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/duel-ogi-determination-defi.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/miroirs-clartelunaire-adversaire-ogi.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/sourire-triomphant-lune-lointaine.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/temps-evapore-sommeil-plateau-jeu.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/piece-silencieuse-feuille-papier.webp',
            '/rencontre-avec-komayo-au-bar-de-la-regence/deambulation-rues-desertes-melancolie-espoir.webp',
          '/l-orgueil-ou-l-ame-le-sacrifice-de-takeshi/',
            '/l-orgueil-ou-l-ame-le-sacrifice-de-takeshi/voyage-lunaire-en-shinkansen.webp',
            '/l-orgueil-ou-l-ame-le-sacrifice-de-takeshi/femme-mysterieuse-en-bleu.webp',
            '/l-orgueil-ou-l-ame-le-sacrifice-de-takeshi/partie-de-ogi-dans-le-train.webp',
            '/l-orgueil-ou-l-ame-le-sacrifice-de-takeshi/face-a-face.webp',
            '/l-orgueil-ou-l-ame-le-sacrifice-de-takeshi/coup-illegal.webp',
            '/l-orgueil-ou-l-ame-le-sacrifice-de-takeshi/nuit-hantee.webp',
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
