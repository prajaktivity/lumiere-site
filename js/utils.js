/* Shared helpers: selectors, a tiny event bus, a module registry and the photo template. */
(function () {
  const A = window.App, handlers = {};
  A.$ = (s, r = document) => r.querySelector(s);
  A.$$ = (s, r = document) => [...r.querySelectorAll(s)];
  A.on = (evt, fn) => (handlers[evt] = handlers[evt] || []).push(fn);   // listen
  A.emit = (evt, data) => (handlers[evt] || []).forEach(fn => fn(data)); // announce
  A.modules = [];
  A.register = (name, init) => A.modules.push({ name, init });           // add a feature
  A.photoHTML = p => p.src
    ? `<img class="ph" src="${p.src}" alt="${p.t}" loading="lazy">`
    : `<div class="ph fake" style="--h:${p.hue};aspect-ratio:1/${p.h}"></div>`;
})();
