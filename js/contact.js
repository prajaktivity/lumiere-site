/* Contact form (opens email), WhatsApp button, Instagram link and footer year. */
App.register("contact", function () {
  const { $ } = App, C = App.config;
  $("#ig").href = C.instagram;
  $("#y").textContent = new Date().getFullYear();
  $("#wa").href = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent("Hi Lumière the Shine, I'd like to book a food shoot.");
  $("#f").addEventListener("submit", e => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${$("#n").value}\nContact: ${$("#e").value}\n\n${$("#m").value}`);
    location.href = `mailto:${C.email}?subject=${encodeURIComponent("Shoot enquiry — Lumière the Shine")}&body=${body}`;
  });
});
