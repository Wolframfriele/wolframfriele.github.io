!function(){"use strict";const e=1652442006103,r=`cache${e}`,t=["/client/client.67c756b7.js","/client/inject_styles.5607aec6.js","/client/index.a4707be0.js","/client/Intro.976dfd68.js","/client/projects.de9a902d.js","/client/[permalink].4b3ebedb.js","/client/contact.27490b46.js","/client/about.f8c29c6d.js"].concat(["/service-worker-index.html","/CNAME","/favicon-192.png","/favicon-32.png","/favicon-512.png","/global.css","/img/data-object-large.webp","/img/data-object-medium.webp","/img/data-object-mobile.webp","/img/data-object-small.webp","/img/man-in-front-off-mountains-large.webp","/img/man-in-front-off-mountains-medium.webp","/img/man-in-front-off-mountains-small.webp","/img/portrait-wolf-large.webp","/img/portrait-wolf-medium.webp","/img/projects/ripe-alerts/anomaly-detection-large.webp","/img/projects/ripe-alerts/anomaly-detection-small.webp","/img/projects/ripe-alerts/entry-connection-large.webp","/img/projects/ripe-alerts/entry-connection-medium.webp","/img/projects/ripe-alerts/entry-connection-small.webp","/img/projects/ripe-alerts/ripe-alerts-architecture-large.webp","/img/projects/ripe-alerts/ripe-alerts-architecture-medium.webp","/img/projects/ripe-alerts/ripe-alerts-architecture-small.webp","/img/projects/shmove-reservations/appointment-modal-large.webp","/img/projects/shmove-reservations/appointment-modal-small.webp","/img/projects/shmove-reservations/beauty-appointment-modal-large.webp","/img/projects/shmove-reservations/beauty-appointment-modal-small.webp","/img/projects/shmove-reservations/beauty-calendar-overview-large.webp","/img/projects/shmove-reservations/beauty-calendar-overview-medium.webp","/img/projects/shmove-reservations/beauty-calendar-overview-small.webp","/img/projects/shmove-reservations/calendar-overview-large.webp","/img/projects/shmove-reservations/calendar-overview-medium.webp","/img/projects/shmove-reservations/calendar-overview-small.webp","/img/projects/shmove-reservations/choose-appointment-large.webp","/img/projects/shmove-reservations/choose-appointment-medium.webp","/img/projects/shmove-reservations/choose-appointment-small.webp","/img/projects/shmove-reservations/confirmation-large.webp","/img/projects/shmove-reservations/confirmation-small.webp","/img/projects/showreel-2016/showreel-2016-building-large.webp","/img/projects/showreel-2016/showreel-2016-building-medium.webp","/img/projects/showreel-2016/showreel-2016-building-small.webp","/img/projects/showreel-2016/showreel-2016-landscape-large.webp","/img/projects/showreel-2016/showreel-2016-landscape-small.webp","/img/projects/showreel-2016/showreel-intro-large.webp","/img/projects/smart-mirror/compare-methods-large.webp","/img/projects/smart-mirror/compare-methods-medium.webp","/img/projects/smart-mirror/compare-methods-small.webp","/img/projects/smart-mirror/face-recognition-steps-large.webp","/img/projects/smart-mirror/face-recognition-steps-medium.webp","/img/projects/smart-mirror/face-recognition-steps-small.webp","/img/projects/smart-mirror/face-scan-large.webp","/img/projects/smart-mirror/face-scan-small.webp","/img/projects/smart-mirror/open-set-large.webp","/img/projects/smart-mirror/open-set-medium.webp","/img/projects/smart-mirror/open-set-small.webp","/img/radio-telescopes-large.webp","/img/radio-telescopes-medium.webp","/img/radio-telescopes-small.webp","/img/wolfram-friele-logo.svg","/manifest.json"]),s=new Set(t);self.addEventListener("install",(e=>{e.waitUntil(caches.open(r).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==r&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(r=>{if("GET"!==r.request.method||r.request.headers.has("range"))return;const t=new URL(r.request.url),o=t.protocol.startsWith("http"),a=t.hostname===self.location.hostname&&t.port!==self.location.port,i=t.host===self.location.host&&s.has(t.pathname),m="only-if-cached"===r.request.cache&&!i;!o||a||m||r.respondWith((async()=>i&&await caches.match(r.request)||async function(r){const t=await caches.open(`offline${e}`);try{const e=await fetch(r);return t.put(r,e.clone()),e}catch(e){const s=await t.match(r);if(s)return s;throw e}}(r.request))())}))}();
