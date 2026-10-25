/* Data-driven sections: pricing, reviews, FAQ, Instagram strip. Each is its own module. */
App.register("pricing", function () {
  App.$("#prices").innerHTML = App.data.pricing.map(x =>
    `<div class="price ${x.pop ? "pop" : ""}"><h3>${x.n}</h3><b>${x.p}</b><ul>${x.f.map(i => `<li>${i}</li>`).join("")}</ul><a href="#contact" class="btn ${x.pop ? "fill" : ""}">Book Now</a></div>`).join("");
});
App.register("reviews", function () {
  App.$("#revs").innerHTML = App.data.reviews.map(r => `<div class="rev"><q>${r.q}</q><small>— ${r.a}</small></div>`).join("");
});
App.register("faq", function () {
  App.$("#faqs").innerHTML = App.data.faqs.map(f => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("");
});
App.register("instagram-strip", function () {
  App.$("#igs").innerHTML = [28, 18, 345, 100, 48, 310].map(h =>
    `<a href="${App.config.instagram}" target="_blank" rel="noopener" style="--h:${h}"></a>`).join("");
});
