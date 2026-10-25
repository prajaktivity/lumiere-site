/* Starts every registered module. A failing module won't break the others. */
document.addEventListener("DOMContentLoaded", function () {
  App.modules.forEach(m => {
    try { m.init(); } catch (err) { console.error("Module failed:", m.name, err); }
  });
});
