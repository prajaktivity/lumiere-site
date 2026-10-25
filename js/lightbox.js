/* Full-screen photo viewer. Listens for "photo:open". Keys: Esc, left and right arrows. */
App.register("lightbox", function () {
  const { $ } = App, S = App.state, box = $("#lb");
  let idx = 0;
  const isOpen = () => box.classList.contains("open");
  const close = () => box.classList.remove("open");
  function open(i) {
    if (!S.list.length) return;
    idx = (i + S.list.length) % S.list.length;
    const p = S.list[idx];
    $("#lbi").innerHTML = App.photoHTML(p);
    $("#lbt").textContent = p.t;
    box.classList.add("open");
  }
  App.on("photo:open", open);
  $("#x").onclick = close;
  $("#pv").onclick = () => open(idx - 1);
  $("#nx").onclick = () => open(idx + 1);
  box.addEventListener("click", e => { if (e.target.id === "lb") close(); });
  document.addEventListener("keydown", e => {
    if (!isOpen()) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") open(idx - 1);
    if (e.key === "ArrowRight") open(idx + 1);
  });
});
