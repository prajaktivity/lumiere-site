/* All content lives here. Add photos, prices, reviews and FAQs without touching other files. */
App.data = {
  categories: [{ name: "Food", live: true }, { name: "Models" }, { name: "Portfolio" }, { name: "Newborns" }],
  // src: "images/yourphoto.jpg" (leave "" for a placeholder). cat must match a category name.
  photos: [
    { t: "Creamy Penne, Rustic Wood", cat: "Food", src: "images/pasta-topdown.jpg", h: "0.67", hue: 30 },
    { t: "Cheese Melt Sandwich", cat: "Food", src: "images/sandwich-cheese-melt.jpg", h: "0.67", hue: 30 },
    { t: "Chocolate Shake Bottles", cat: "Food", src: "images/chocolate-bottles.jpg", h: "1.78", hue: 30 },
    { t: "Penne in Blush Sauce", cat: "Food", src: "images/pasta-moody.jpg", h: "0.67", hue: 30 },
    { t: "Appam with Fresh Coconut", cat: "Food", src: "images/appam-banana-leaf.jpg", h: "0.67", hue: 30 }
  ],
  pricing: [ // sample prices, change to your own
    { n: "Starter", p: "₹4,999", f: ["10 edited photos", "1 dish style / setup", "2-day delivery", "Web & social sizes"] },
    { n: "Signature", p: "₹9,999", f: ["25 edited photos", "Props & styling", "3 Reels / clips", "Commercial usage"], pop: true },
    { n: "Brand Story", p: "₹19,999", f: ["50+ edited photos", "Full menu coverage", "Reels + product video", "Priority delivery"] }
  ],
  reviews: [ // sample reviews, replace with real ones
    { q: "Our menu has never looked this good. Orders went up within a week.", a: "Café Owner" },
    { q: "She makes every dish glow. Professional, quick and so creative.", a: "Home Baker" },
    { q: "The photos felt alive, exactly the mood our brand needed.", a: "Restaurant Manager" }
  ],
  faqs: [
    ["How long does a shoot take?", "Most food shoots take 2–4 hours depending on the number of dishes."],
    ["How soon will I get my photos?", "Edited photos are delivered within 2–5 days, based on your package."],
    ["Do you shoot at my location?", "Yes, at your restaurant, café or kitchen, or at our setup."],
    ["Can I use the photos commercially?", "Yes. Signature and Brand Story packages include commercial usage."],
    ["How do I book?", "Send an enquiry below or message us on WhatsApp or Instagram."]
  ]
};
