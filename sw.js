self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  var r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||(u.origin!==location.origin&&u.hostname!=='www.gstatic.com'))return;
  e.respondWith(fetch(r).then(function(res){var c=res.clone();caches.open('tj1').then(function(k){k.put(r,c)});return res}).catch(function(){return caches.match(r)}))});
