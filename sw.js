const CACHE='emom-reps-v5-3';
const ASSETS=['./round.wav','./warning.wav','./finish.wav','./icon_pushups.jpg','./icon_pullups.jpg','./icon_australian.jpg','./icon_squats.jpg','./icon_knee.jpg','./icon_leg.jpg','./icon_dips.jpg','./icon_plank.jpg','./','./index.html','./manifest.webmanifest','./gym.jpg','./prison.jpg','./concrete.jpg','./dark.jpg','./minimal.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
