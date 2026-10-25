# Lumière the Shine — website

Open `index.html` in a browser. No install needed.

css/style.css   all styling (colours at the top under :root)
js/config.js    Instagram, WhatsApp, email
js/data.js      photos, categories, prices, reviews, FAQs
js/utils.js     helpers + event bus (App.on / App.emit) + App.register
js/gallery.js   filters and photo grid
js/lightbox.js  full-screen viewer
js/sections.js  pricing, reviews, FAQ, Instagram strip
js/contact.js   enquiry form, WhatsApp, footer
js/main.js      starts all modules
images/         put your photos here

## Add a new feature
1. Create js/yourfeature.js:
   App.register("yourfeature", function () { /* your code */ });
2. Add <script src="js/yourfeature.js"></script> in index.html before main.js.
Listen to events with App.on("photo:open", fn), App.on("category:change", fn).

## Add photos
In js/data.js add { t:"Title", cat:"Food", src:"images/file.jpg", h:"1.2", hue:30 }
(h = height/width ratio, e.g. 1.25 for portrait, 0.8 for landscape)
