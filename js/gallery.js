/* Category filters + masonry grid. Emits: "gallery:rendered", "category:change", "photo:open". */
App.register("gallery", function () {
  const { $ } = App, S = App.state, D = App.data;

  function filters() {
    $("#filters").innerHTML = D.categories.map(c =>
      c.live || D.photos.some(p => p.cat === c.name)
        ? `<button class="chip ${c.name === S.category ? "on" : ""}" data-c="${c.name}">${c.name}</button>`
        : `<span class="chip soon">${c.name}<small>soon</small></span>`).join("");
  }
  function grid() {
    S.list = D.photos.filter(p => p.cat === S.category);
    $("#grid").innerHTML = S.list.map((p, i) =>
      `<div class="card ${+p.h > 1.2 ? "tall" : ""}" data-i="${i}">${App.photoHTML(p)}<div class="cap"><small>${p.cat}</small><h3>${p.t}</h3></div></div>`).join("");
    reveal();
    App.emit("gallery:rendered", S.list);
  }
  function reveal() {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: .1 });
    App.$$(".card").forEach((c, i) => { c.style.transitionDelay = (i % 3) * .12 + "s"; io.observe(c); });
  }

  $("#filters").addEventListener("click", e => {
    const c = e.target.closest(".chip");
    if (!c || c.classList.contains("soon")) return;
    S.category = c.dataset.c; filters(); grid();
    App.emit("category:change", S.category);
  });
  $("#grid").addEventListener("click", e => {
    const c = e.target.closest(".card");
    if (c) App.emit("photo:open", +c.dataset.i);
  });
  filters(); grid();
});
