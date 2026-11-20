const photographs = [
  { file: "manicure-results.jpeg", alt: "Soft nude manicure with delicate gold accents" },
  { file: "nail-art.jpeg", alt: "Blush pink sculpted floral nail art" },
  { file: "pedicure.jpeg", alt: "A polished blush-pink pedicure" },
  { file: "portfolio.jpeg", alt: "A selection of colorful nail designs" },
  { file: "salon-interior.jpg", alt: "A pink nail studio with manicure stations" },
  { file: "studio-details.jpeg", alt: "A bright beauty studio with neatly arranged polish" },
  { file: "technician-at-work.jpeg", alt: "A nail artist carefully applying a manicure" },
  { file: "working-area.jpeg", alt: "A client receiving a manicure in a calm studio" },
];

const salons = {
  barshie: {
    key: "barshie",
    slug: "barshie-nails",
    name: "Barshie Nails",
    displayName: "Barshie Nails — Imus",
    location: "Imus, Cavite",
    address: "Barshie Nails, Camella Bucandala Phase 4, Block 13, Lot 12, Imus, Cavite, Philippines, 4103.",
    owner: "Miss Ann Barshie",
    apprentice: "Miss Trina",
    specialty: "Certified Nail Technician · Dry Manicure & Pedicure Specialist",
    phone: "+63 915 235 2352",
    tel: "+639152352352",
    facebook: "https://www.facebook.com/profile.php?id=61590840527543",
    messenger: "https://m.me/61590840527543",
    map: "14.29451,120.87699",
    hours: "10:00 AM – 6:00 PM",
    logo: "",
    intro: "A detail-led nail studio in Imus led by Miss Ann Barshie, with dry manicure and pedicure services crafted with care.",
    hero: "nail-art.jpeg",
    heroAlt: "Blush pink floral nail art from the shared salon collection",
    services: [
      {
        title: "Pedicure services",
        note: "Dry pedicure with hard builder gel.",
        items: [["Overlay", "₱1,300"], ["Extension", "₱1,800"], ["Structure", "₱1,500"]],
      },
      {
        title: "Manicure services",
        items: [["Hard Gel Overlay", "₱900"], ["Soft Gel Extension", "₱900"], ["Hard Gel Extension", "₱1,000"], ["Long Dual Form", "₱1,100"], ["Polygel / XL Nails", "₱1,200"], ["XL Full Design", "₱1,500"]],
      },
      {
        title: "Nail art add-ons",
        items: [["Cat Eye Effect", "₱100"], ["Chrome Nails", "₱100"], ["Glitter Nails", "₱100"], ["Ombre Nails", "₱100"], ["Pigmented Gel", "₱100"], ["French Tip", "₱100"]],
      },
    ],
    featured: [
      ["Dry manicure", "Hard gel overlays and extensions for a clean, structured finish."],
      ["Dry pedicure", "Hard builder gel pedicure services, from overlay to extension."],
      ["Nail art", "Cat eye, chrome, glitter, ombré, and French tips."],
    ],
  },
  mherie: {
    key: "mherie",
    slug: "mherie-luxe-nails",
    name: "Mherie Luxe Nails",
    displayName: "Mherie Luxe Nails",
    location: "Tondo, Manila",
    address: "Mherie Luxe Nails, 274 Padre Rada St, Tondo, Manila, Metro Manila, Philippines.",
    owner: "Ms Mherie",
    facebook: "https://www.facebook.com/mherieluxe.nails",
    messenger: "https://m.me/mherieluxe.nails",
    map: "Mherie Luxe Nails, 274 Padre Rada St, Tondo, Manila, Metro Manila, Philippines",
    hours: "10:00 AM – 6:00 PM",
    logo: "mherie-luxe-nails-logo.jpeg",
    intro: "A Manila nail studio by Ms Mherie, offering thoughtfully finished dry manicure, dry pedicure, and nail art services.",
    hero: "portfolio.jpeg",
    heroAlt: "A portfolio of manicure styles in varied colors and finishes",
    notice: "Final bill may vary if you have special designs in your nail inspiration. Kindly send your nail inspiration to know your exact bill.",
    services: [
      {
        title: "Manicure — dry manicure",
        items: [["Hard Gel Overlay", "₱900"], ["Soft Gel Extensions", "₱900"], ["Hard Gel Extensions", "₱1,000"]],
      },
      {
        title: "Pedicure — dry pedicure only with hard builder gel",
        items: [["Overlay", "₱1,200"], ["Structure", "₱1,400"], ["Extension", "₱1,600"]],
      },
      {
        title: "Nail art — full set",
        items: [["French Tip", "₱100"], ["Solid Polish", "₱100"], ["Cat Eye Polish", "₱150"], ["Glitter Nails", "₱100"], ["Ombre Nails", "₱100"], ["Chrome Nails", "₱150"]],
      },
      {
        title: "Removal",
        items: [["From Mherie Luxe Nails", "₱150"], ["Not Our Work", "₱200"]],
      },
    ],
    featured: [
      ["Dry manicure", "Hard gel overlays and soft or hard gel extensions."],
      ["Dry pedicure", "Hard builder gel services for an elegant, durable pedicure."],
      ["Nail art", "French tips, cat eye polish, chrome, ombré, and more."],
    ],
  },
  unailed: {
    key: "unailed",
    slug: "u-nailed-it-girl-lash",
    name: "U Nailed It Girl Lash",
    displayName: "U Nailed It Girl Lash",
    location: "General Trias, Cavite",
    address: "UNAILEDITGIRLASH STUDIO, General Trias, Philippines, 4107.",
    owner: "Miss Cassandra",
    facebook: "https://www.facebook.com/profile.php?id=100089826377646",
    messenger: "https://m.me/100089826377646",
    map: "UNAILEDITGIRLASH STUDIO, General Trias, Philippines, 4107",
    hours: "10:00 AM – 6:00 PM",
    logo: "unaileditgirl-logo.jpeg",
    intro: "A General Trias studio by Miss Cassandra for expressive lash sets, considered nail work, and dry pedicure services.",
    hero: "salon-interior.jpg",
    heroAlt: "A pink salon interior with manicure tables and polish displays",
    services: [
      {
        title: "Lash services",
        items: [["Lash Lift", "₱399"], ["Wet Look Classic", "₱599"], ["Korean Cat Eye", "₱459"], ["Anime Wispy", "₱599"], ["Semi Volume", "₱699"], ["Foxy Cat Eye", "₱599"]],
      },
      {
        title: "Nail services",
        items: [["Soft Gel Extension (Short to Medium)", "Starts at ₱659"], ["BIAB Overlay (Short to Medium)", "Starts at ₱699"], ["Hard Gel Overlay (Short to Medium)", "Starts at ₱799"], ["Hard Gel Extension (Short to Medium)", "Starts at ₱899"]],
      },
      {
        title: "Pedicure services",
        items: [["Gel Polish Only", "Starts at ₱549"]],
      },
      {
        title: "Barbie Toe Nails — dry pedicure + hard builder gel",
        items: [["Overlay", "₱1,200"], ["Structure", "₱1,400"], ["Extension", "₱1,500"]],
      },
      {
        title: "Nail add-ons — per finger",
        items: [["French Tip", "₱25"], ["Ombre", "₱20"], ["Cat Eye", "₱20"], ["Flower Embossed", "₱45"], ["Chrome", "₱15"], ["Full Chrome", "₱20"], ["Line Art", "₱15"], ["Minimal Art", "₱20"], ["Intricate Art", "₱50"], ["Small Rhinestone", "₱5–10"], ["Big Charms", "₱25–30"], ["Foil", "₱20"], ["Blooming Art", "₱15"], ["3D Mermaid", "₱25"]],
      },
      {
        title: "Lash removal",
        items: [["Removal (My Work)", "₱150"], ["Removal (Not My Work)", "₱200"]],
      },
      {
        title: "Nail / pedicure removal",
        items: [["My Work + New Set", "₱15 per finger / ₱150 whole set"], ["Removal Only (My Work)", "₱200"], ["Removal + Cleaning (My Work)", "₱250"], ["Removal (Not My Work)", "₱24 per finger / ₱250 whole set"]],
      },
    ],
    featured: [
      ["Lash services", "From a natural lash lift to wet look, wispy, and volume sets."],
      ["Nail services", "Soft gel, BIAB, and hard gel services for short to medium lengths."],
      ["Pedicure & art", "Gel polish, hard builder gel pedicure, and per-finger nail art."],
    ],
  },
};

const root = "/";
const salonList = Object.values(salons);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}[char]));
const salonURL = (salon, page = "") => `${root}${salon.slug}/${page}`;
const imageURL = (file) => `${root}imgs/${file}`;
const mapURL = (salon) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salon.map)}`;

function header(salon = null) {
  const links = salon
    ? `<a href="${salonURL(salon)}">Studio</a><a href="${salonURL(salon, "services/")}">Services &amp; prices</a><a href="${salonURL(salon, "location/")}">Location</a>`
    : `<a href="${root}#studios">The studios</a><a href="${root}#gallery">Beauty notes</a><a href="${root}#discover">How to explore</a>`;
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="wordmark" href="${root}" aria-label="Barbie Toe Nails home">
          <span>Barbie Toe Nails</span><small>Independent beauty studios</small>
        </a>
        <nav class="main-nav" aria-label="Main navigation">${links}</nav>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Open navigation"><span></span><span></span></button>
        <nav class="mobile-nav" aria-label="Mobile navigation">${links}<a href="${root}#studios">All studios</a></nav>
      </div>
    </header>`;
}

function contactLinks(salon, variant = "") {
  return `<div class="contact-links ${variant}">
    <a class="button button-dark" href="${salon.messenger}" target="_blank" rel="noopener noreferrer">Message the studio <span aria-hidden="true">↗</span></a>
    ${salon.tel ? `<a class="button button-outline" href="tel:${salon.tel}">Call ${escapeHTML(salon.phone)}</a>` : ""}
    <a class="text-link" href="${salon.facebook}" target="_blank" rel="noopener noreferrer">Visit Facebook <span aria-hidden="true">↗</span></a>
  </div>`;
}

function footer(salon = null) {
  if (salon) {
    return `<footer class="salon-footer">
      <div class="footer-inner">
        <div class="footer-intro"><a class="footer-brand" href="${salonURL(salon)}">${escapeHTML(salon.name)}</a><p>${escapeHTML(salon.location)} · Independent studio</p></div>
        <nav aria-label="Studio links"><a href="${salonURL(salon, "services/")}">Services &amp; prices</a><a href="${salonURL(salon, "location/")}">Find the studio</a><a href="${root}#studios">Explore the collective</a></nav>
        <span class="footer-note">Part of Barbie Toe Nails</span>
      </div>
    </footer>`;
  }
  return `<footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-intro"><a class="footer-brand" href="${root}">Barbie Toe Nails</a><p>Three independent studios. One lovely place to begin.</p></div>
      ${salonList.map((item, index) => `<nav aria-label="${escapeHTML(item.name)} links">
        <span class="footer-index">0${index + 1} / ${escapeHTML(item.location)}</span>
        <a class="footer-salon-name" href="${salonURL(item)}">${escapeHTML(item.name)}</a>
        <a href="${salonURL(item, "services/")}">Services &amp; prices</a>
        <a href="${salonURL(item, "location/")}">Location</a>
        <a href="${item.messenger}" target="_blank" rel="noopener noreferrer">Message studio ↗</a>
      </nav>`).join("")}
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Barbie Toe Nails</span><span>Each studio is independently owned and operated.</span></div>
  </footer>`;
}

function gallery(items = photographs) {
  return `<div class="editorial-gallery">${items.map((photo, index) => `
    <figure class="gallery-item gallery-item-${index + 1}">
      <img src="${imageURL(photo.file)}" alt="${escapeHTML(photo.alt)}" loading="lazy">
      ${index === 0 ? '<figcaption>Beauty, in every detail</figcaption>' : ""}
    </figure>`).join("")}</div>`;
}

function homePage() {
  document.title = "Barbie Toe Nails — A collective of independent beauty studios";
  document.querySelector('meta[name="description"]').content = "Discover Barshie Nails, Mherie Luxe Nails, and U Nailed It Girl Lash: three independent beauty studios across Cavite and Manila.";
  document.body.innerHTML = `${header()}
    <main id="main">
      <section class="home-hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-mark"></span> A beauty studio collective · Cavite &amp; Manila</p>
          <h1>Find your<br>kind of <em>lovely.</em></h1>
          <p class="hero-description">Three independent studios, each with a little something of its own. Find the nail, lash, or beauty appointment that feels like you.</p>
          <a class="button button-dark" href="#studios">Meet the studios <span aria-hidden="true">↓</span></a>
          <span class="hero-edition">A little beauty, close to home <span>01 — 03</span></span>
        </div>
        <div class="hero-art" aria-label="A selection of beauty and nail studio photographs">
          <figure class="hero-photo hero-photo-main"><img src="${imageURL("salon-interior.jpg")}" alt="Pink manicure studio with polished salon details" fetchpriority="high"></figure>
          <figure class="hero-photo hero-photo-detail"><img src="${imageURL("nail-art.jpeg")}" alt="Blush floral nail art with sculpted details" fetchpriority="high"></figure>
          <div class="hero-stamp"><span>Good days<br>start here</span><i aria-hidden="true"></i></div>
          <span class="hero-caption">Nails · lashes · little rituals</span>
        </div>
        <div class="hero-side-note" aria-hidden="true">A shared home for independent beauty</div>
      </section>

      <section class="studio-section" id="studios">
        <div class="section-topline"><span>01 / Find your studio</span><span>Three distinct addresses, one easy place to start</span></div>
        <div class="studio-heading"><p class="eyebrow">The collective</p><h2>Three names.<br><em>Three ways to glow.</em></h2><p>Meet the people and places behind your next appointment.</p></div>
        <div class="studio-list">${salonList.map((salon, index) => `
          <article class="studio-entry studio-entry-${index + 1}">
            <a class="studio-image" href="${salonURL(salon)}" aria-label="Discover ${escapeHTML(salon.name)}">
              <img src="${imageURL(salon.hero)}" alt="${escapeHTML(salon.heroAlt)}" loading="lazy">
              <span class="studio-number">0${index + 1}</span>
            </a>
            <div class="studio-entry-copy">
              <p class="eyebrow">${escapeHTML(salon.location)}</p>
              <h3>${escapeHTML(salon.name)}</h3>
              <p>${escapeHTML(salon.intro)}</p>
              <a class="text-link" href="${salonURL(salon)}">Discover this studio <span aria-hidden="true">↗</span></a>
            </div>
            <span class="studio-entry-type">${index === 2 ? "Lash · nail · brow" : "Nails · pedicure · art"}</span>
          </article>`).join("")}</div>
      </section>

      <section class="home-gallery" id="gallery">
        <div class="section-topline"><span>02 / Beauty notes</span><span>Little details worth a closer look</span></div>
        <div class="gallery-heading"><div><p class="eyebrow">A shared moodboard</p><h2>Made for the<br><em>love of lovely.</em></h2></div><p>From soft, barely-there finishes to a little extra sparkle: explore the beauty collection shared by our studios.</p></div>
        ${gallery()}
      </section>

      <section class="discover-section" id="discover">
        <div class="discover-number">03</div>
        <div class="discover-copy"><p class="eyebrow">A simpler way to find your fit</p><h2>All the lovely<br>things, <em>in one place.</em></h2></div>
        <div class="discover-detail"><p>Explore each studio’s services, prices, location, and appointment contact before you decide. Every salon is independent, with its own personality and team.</p><a class="button button-outline" href="#studios">Choose a studio <span aria-hidden="true">↑</span></a></div>
        <div class="discover-ribbon" aria-hidden="true">Browse · compare · say hello · browse · compare · say hello ·</div>
      </section>

      <section class="salon-paths">
        <div class="section-topline"><span>04 / Take your pick</span><span>Go straight to what you need</span></div>
        <div class="salon-paths-list">${salonList.map((salon, index) => `<div class="salon-path">
          <span class="path-index">0${index + 1}</span><a class="path-name" href="${salonURL(salon)}">${escapeHTML(salon.name)}</a>
          <a href="${salonURL(salon, "services/")}">Services <span aria-hidden="true">↗</span></a>
          <a href="${salonURL(salon, "location/")}">Location <span aria-hidden="true">↗</span></a>
        </div>`).join("")}</div>
      </section>
    </main>
    ${footer()}`;
  initNavigation();
}

function salonHero(salon) {
  const brand = salon.logo
    ? `<div class="salon-logo"><img src="${imageURL(salon.logo)}" alt="${escapeHTML(salon.name)} logo"></div>`
    : `<div class="barshie-wordmark"><span>Barshie<br>Nails</span><small>Independent studio<br>Imus, Cavite</small></div>`;
  return `<section class="salon-hero salon-hero-${salon.key}">
    <div class="salon-hero-copy">${brand}<p class="eyebrow">${escapeHTML(salon.location)} <span>·</span> Independent beauty studio</p>
      <h1>${salon.key === "barshie" ? "A little art.<br><em>A lot of care.</em>" : salon.key === "mherie" ? "Your moment<br>of <em>luxe.</em>" : "Come as you are.<br><em>Leave feeling lovely.</em>"}</h1>
      <p class="salon-hero-intro">${escapeHTML(salon.intro)}</p>
      <a class="button ${salon.key === "unailed" ? "button-light" : "button-dark"}" href="${salonURL(salon, "services/")}">Explore services <span aria-hidden="true">↗</span></a>
    </div>
    <div class="salon-hero-visual">
      <img class="salon-hero-image" src="${imageURL(salon.hero)}" alt="${escapeHTML(salon.heroAlt)}" fetchpriority="high">
      ${salon.key === "barshie" ? `<img class="salon-hero-inset" src="${imageURL("manicure-results.jpeg")}" alt="Soft nude manicure with gold details">` : ""}
      ${salon.key === "unailed" ? `<span class="salon-hero-label">Nails <i>+</i> lashes <i>+</i> brows</span>` : ""}
      <span class="salon-image-caption">${escapeHTML(salon.name)} · ${escapeHTML(salon.location)}</span>
    </div>
    <span class="salon-hero-side">${salon.key === "barshie" ? "The art of a thoughtful detail" : salon.key === "mherie" ? "A polished little escape" : "Your beauty, your way"}</span>
  </section>`;
}

function salonHomePage(salon) {
  document.title = `${salon.displayName} | Barbie Toe Nails`;
  document.querySelector('meta[name="description"]').content = `${salon.intro} Explore services, prices, location, and appointment contact.`;
  document.body.classList.add(`page-${salon.key}`);
  document.body.innerHTML = `${header(salon)}
    <main id="main">
      ${salonHero(salon)}
      <section class="salon-about">
        <div class="salon-about-title"><p class="eyebrow">A note from the studio</p><h2>${salon.key === "barshie" ? "Thoughtfully done,<br><em>down to the detail.</em>" : salon.key === "mherie" ? "A little luxury,<br><em>made personal.</em>" : "A fresh little<br><em>confidence boost.</em>"}</h2></div>
        <div class="salon-about-copy"><p>${escapeHTML(salon.intro)}</p><div class="salon-facts"><span>Studio</span><strong>${escapeHTML(salon.location)}</strong>${salon.owner ? `<span>Owner</span><strong>${escapeHTML(salon.owner)}</strong>` : ""}${salon.apprentice ? `<span>Apprentice</span><strong>${escapeHTML(salon.apprentice)}</strong>` : ""}${salon.specialty ? `<span>Specialty</span><strong>${escapeHTML(salon.specialty)}</strong>` : ""}</div></div>
      </section>

      <section class="signature-section">
        <div class="signature-head"><div><p class="eyebrow">A few studio favorites</p><h2>Care in every<br><em>little detail.</em></h2></div><a class="text-link" href="${salonURL(salon, "services/")}">View all services &amp; prices <span aria-hidden="true">↗</span></a></div>
        <div class="signature-list">${salon.featured.map((item, index) => `<article class="signature-item"><span class="signature-index">0${index + 1}</span><h3>${escapeHTML(item[0])}</h3><p>${escapeHTML(item[1])}</p><a href="${salonURL(salon, "services/")}" aria-label="Explore ${escapeHTML(item[0])} services">↗</a></article>`).join("")}</div>
      </section>

      <section class="salon-gallery-section">
        <div class="gallery-heading"><div><p class="eyebrow">Around the studio</p><h2>A little look<br><em>at the lovely.</em></h2></div><p>Browse the shared collection of beauty details and studio moments.</p></div>
        ${gallery()}
      </section>

      <section class="salon-location">
        <div class="location-photo"><img src="${imageURL(salon.key === "mherie" ? "studio-details.jpeg" : salon.key === "unailed" ? "working-area.jpeg" : "technician-at-work.jpeg")}" alt="A beauty appointment in a welcoming studio" loading="lazy"><span>Find your way</span></div>
        <div class="location-note"><p class="eyebrow">Your studio, nearby</p><h2>Meet us in<br><em>${escapeHTML(salon.location)}.</em></h2><p>${escapeHTML(salon.address)}</p><a class="button button-outline" href="${salonURL(salon, "location/")}">Studio details &amp; directions <span aria-hidden="true">↗</span></a></div>
      </section>

      <section class="appointment-section"><div class="appointment-flower" aria-hidden="true"></div><div><p class="eyebrow">Whenever you’re ready</p><h2>Let’s make it<br><em>your next favorite.</em></h2><p>Ask a question, share your inspiration, or get in touch to arrange an appointment.</p></div>${contactLinks(salon)}</section>
    </main>
    ${footer(salon)}`;
  initNavigation();
}

function servicesPage(salon) {
  document.title = `Services & Prices | ${salon.name}`;
  document.querySelector('meta[name="description"]').content = `Browse the complete service menu and prices for ${salon.name} in ${salon.location}.`;
  document.body.classList.add(`page-${salon.key}`);
  const categories = salon.services.map((group, index) => ({ ...group, id: `service-${index + 1}` }));
  document.body.innerHTML = `${header(salon)}
    <main id="main">
      <section class="inner-hero"><div class="inner-hero-inner"><p class="eyebrow">${escapeHTML(salon.name)} <span>·</span> ${escapeHTML(salon.location)}</p><h1>Services<br><em>&amp; prices.</em></h1><p>Take a look through the studio menu, then get in touch with any questions or inspiration.</p></div><span class="inner-hero-number">02 / MENU</span></section>
      <section class="price-content">
        <aside class="price-index" aria-label="Service categories"><span class="eyebrow">On this page</span>${categories.map((group) => `<a href="#${group.id}">${escapeHTML(group.title)}</a>`).join("")}<a class="price-index-contact" href="${salonURL(salon, "location/")}">Location &amp; contact ↗</a></aside>
        <div class="price-menu">${salon.notice ? `<p class="price-notice">${escapeHTML(salon.notice)}</p>` : ""}
          ${categories.map((group, index) => `<section class="price-group" id="${group.id}"><div class="price-group-heading"><span>0${index + 1}</span><div><h2>${escapeHTML(group.title)}</h2>${group.note ? `<p>${escapeHTML(group.note)}</p>` : ""}</div></div><dl>${group.items.map(([label, price]) => `<div class="price-row"><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(price)}</dd></div>`).join("")}</dl></section>`).join("")}
          <div class="price-contact"><p>Have a design in mind?</p><a class="button button-dark" href="${salon.messenger}" target="_blank" rel="noopener noreferrer">Ask the studio <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </main>
    ${footer(salon)}`;
  initNavigation();
}

function locationPage(salon) {
  document.title = `Location & Contact | ${salon.name}`;
  document.querySelector('meta[name="description"]').content = `Find ${salon.name} in ${salon.location} and get in touch about an appointment.`;
  document.body.classList.add(`page-${salon.key}`);
  const mapQuery = encodeURIComponent(salon.map);
  document.body.innerHTML = `${header(salon)}
    <main id="main">
      <section class="inner-hero location-hero"><div class="inner-hero-inner"><p class="eyebrow">${escapeHTML(salon.name)} <span>·</span> ${escapeHTML(salon.location)}</p><h1>A little closer<br><em>to lovely.</em></h1><p>Find the studio and choose the easiest way to get in touch.</p></div><span class="inner-hero-number">03 / FIND US</span></section>
      <section class="location-content">
        <div class="location-details"><p class="eyebrow">Come say hello</p><h2>${escapeHTML(salon.location)}</h2><p class="location-address">${escapeHTML(salon.address)}</p><div class="studio-hours"><span>Studio hours</span><strong>${escapeHTML(salon.hours)}</strong></div><a class="button button-dark" href="${mapURL(salon)}" target="_blank" rel="noopener noreferrer">Open directions <span aria-hidden="true">↗</span></a><div class="location-contact"><span class="eyebrow">Get in touch</span>${contactLinks(salon)}</div></div>
        <div class="map-wrap"><iframe title="Map showing ${escapeHTML(salon.name)} in ${escapeHTML(salon.location)}" src="https://www.google.com/maps?q=${mapQuery}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><span class="map-caption">${escapeHTML(salon.name)} · ${escapeHTML(salon.location)}</span></div>
      </section>
    </main>
    ${footer(salon)}`;
  initNavigation();
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (!toggle || !mobileNav) return;
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    mobileNav.classList.toggle("is-open", !isOpen);
  });
  mobileNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      mobileNav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const page = document.body.dataset.page;
if (page === "home") {
  homePage();
} else if (salons[document.body.dataset.salon]) {
  const salon = salons[document.body.dataset.salon];
  if (page === "salon") salonHomePage(salon);
  if (page === "services") servicesPage(salon);
  if (page === "location") locationPage(salon);
}
