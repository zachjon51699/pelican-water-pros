const WATER_HEATER_NAV = [
  ["/water-heaters/", "All Water Heater Services"],
  ["/water-heater-replacement-baton-rouge/", "Water Heater Replacement"],
  ["/water-heater-installation-baton-rouge/", "Water Heater Installation"],
  ["/water-heater-repair-baton-rouge/", "Water Heater Repair"],
  ["/tankless-water-heater-installation-baton-rouge/", "Tankless Water Heater Installation"],
  ["/electric-water-heater-replacement-baton-rouge/", "Electric Water Heaters"],
  ["/gas-water-heater-replacement-baton-rouge/", "Gas Water Heaters"],
  ["/emergency-water-heater-replacement-baton-rouge/", "Emergency Water Heater Replacement"],
];

const SITE = {
  name: "Capital Water Co.",
  phone: "(225)-831-7583",
  phoneHref: "tel:+12258317583",
  email: "support@capitalwaterco.com",
  city: "Baton Rouge, LA",
  wiki: "https://en.wikipedia.org/wiki/Baton_Rouge,_Louisiana",
};

const AREAS = [
  {
    name: "East Baton Rouge Parish, LA",
    slug: "east-baton-rouge-parish/",
    cities: [
      ["Baton Rouge, LA", "/baton-rouge-water-filtration/"],
      ["Zachary, LA", "east-baton-rouge-parish/zachary/"],
      ["Baker, LA", "east-baton-rouge-parish/baker/"],
      ["Central, LA", "east-baton-rouge-parish/central/"],
    ],
  },
  {
    name: "West Baton Rouge Parish, LA",
    slug: "west-baton-rouge-parish/",
    cities: [
      ["Port Allen, LA", "west-baton-rouge-parish/port-allen/"],
      ["Brusly, LA", "west-baton-rouge-parish/brusly/"],
      ["Addis, LA", "west-baton-rouge-parish/addis/"],
      ["Erwinville, LA", "west-baton-rouge-parish/erwinville/"],
    ],
  },
  {
    name: "Ascension Parish, LA",
    slug: "ascension-parish/",
    cities: [
      ["Prairieville, LA", "ascension-parish/prairieville/"],
      ["Gonzales, LA", "ascension-parish/gonzales/"],
      ["Donaldsonville, LA", "ascension-parish/donaldsonville/"],
      ["St. Amant, LA", "ascension-parish/st-amant/"],
    ],
  },
  {
    name: "Livingston Parish, LA",
    slug: "livingston-parish/",
    cities: [
      ["Denham Springs, LA", "livingston-parish/denham-springs/"],
      ["Walker, LA", "livingston-parish/walker/"],
    ],
  },
  {
    name: "Iberville Parish, LA",
    slug: "iberville-parish/",
    cities: [
      ["St. Gabriel, LA", "iberville-parish/st-gabriel/"],
      ["Plaquemine, LA", "iberville-parish/plaquemine/"],
    ],
  },
  {
    name: "Orleans Parish, LA",
    slug: "orleans-parish/",
    cities: [
      ["New Orleans, LA", "/new-orleans-water-filtration/"],
    ],
  },
  {
    name: "St. Tammany Parish, LA",
    slug: "st-tammany-parish/",
    cities: [
      ["Covington, LA", "st-tammany-parish/covington/"],
      ["Mandeville, LA", "st-tammany-parish/mandeville/"],
    ],
  },
];

const ICONS = {
  phone:
    '<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>',
  mail:
    '<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>',
  pin:
    '<svg viewBox="0 0 384 512" aria-hidden="true"><path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>',
  arrow:
    '<svg viewBox="0 0 448 512" aria-hidden="true"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>',
  check:
    '<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>',
};

function root() {
  return document.body.dataset.root || "./";
}

function isLanding() {
  return document.body.classList.contains("is-landing") || document.body.dataset.landing === "true";
}

function loadChatWidget() {
  if (document.getElementById("hero-form")) return;

  const widgetId = "6aa6a32b8eb25ab4ca154be1";
  if (window.__pwpChatScheduled) return;
  window.__pwpChatScheduled = true;

  const start = () => {
    if (window.__pwpChatLoaded) return;
    window.__pwpChatLoaded = true;
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", widgetId);
    script.setAttribute("data-source", "WEB_USER");
    document.body.appendChild(script);
  };

  const onInteract = () => {
    ["pointerdown", "keydown", "scroll", "touchstart"].forEach((eventName) => {
      window.removeEventListener(eventName, onInteract);
    });
    start();
  };

  ["pointerdown", "keydown", "scroll", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, onInteract, { once: true, passive: true });
  });

  if ("requestIdleCallback" in window) {
    requestIdleCallback(start, { timeout: 4000 });
  } else {
    setTimeout(start, 2500);
  }
}

function headerHTML() {
  const r = root();
  const home = "/";
  if (isLanding()) {
    return `
  <div class="topbar">
    <a href="${SITE.phoneHref}">${ICONS.phone}<span data-phone>${SITE.phone}</span></a>
  </div>
  <header class="site-header">
    <div class="wrap nav-row">
      <span class="logo"><img src="${r}images/logo.png?v=12" alt="Capital Water Co." width="248" height="68" decoding="async"></span>
      <a class="btn header-cta" href="${SITE.phoneHref}">${ICONS.phone} Call ${SITE.phone}</a>
    </div>
  </header>`;
  }
  return `
  <div class="topbar">
    <a href="${SITE.phoneHref}">${ICONS.phone}<span data-phone>${SITE.phone}</span></a>
  </div>
  <header class="site-header">
    <div class="wrap nav-row">
      <a class="logo" href="${home}"><img src="${r}images/logo.png?v=12" alt="Capital Water Co." width="248" height="68" decoding="async"></a>
      <button class="menu-toggle" aria-label="Menu Toggle" aria-expanded="false"><span></span><span></span><span></span></button>
      <div class="nav-wrap">
        <ul class="nav">
          <li><a href="${home}">Home</a></li>
          <li>
            <a href="/services/">Water Filtration <svg class="caret" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg></a>
            <ul class="dropdown">
              <li><a href="${r}services/whole-home-water-filtration.html">Whole-Home Water Filtration Services</a></li>
              <li><a href="${r}services/reverse-osmosis.html">Reverse Osmosis Drinking Water Systems</a></li>
              <li><a href="${r}services/well-water-treatment.html">Well Water Treatment Systems</a></li>
              <li><a href="${r}services/water-softener.html">Water Softener Systems</a></li>
              <li><a href="${r}services/carbon-filtration.html">Carbon Filtration Systems</a></li>
              <li><a href="${r}services/city-water-treatment.html">City Water Treatment Systems</a></li>
            </ul>
          </li>
          <li>
            <a href="/water-heaters/">Water Heaters <svg class="caret" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg></a>
            <ul class="dropdown heater-dropdown">
              ${WATER_HEATER_NAV.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
            </ul>
          </li>
          <li><a href="${home}#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a class="btn mobile-cta" href="#contact">${ICONS.arrow} Get A Free Consultation</a>
      </div>
      <a class="btn header-cta" href="#contact">${ICONS.arrow} Get A Free Consultation</a>
    </div>
  </header>`;
}

function footerHTML() {
  const r = root();
  const home = "/";
  if (isLanding()) {
    return `
  <section class="contact-section" id="contact">
    <div class="wrap contact-panel contact-panel-solo">
      <div class="contact-copy">
        <h2>Get In Touch With Us</h2>
        <p>${document.body.classList.contains("ads-page") ? "Call us or use the form above to request a free consultation." : "Call us or use the chat to request a free consultation. We're here to help!"}</p>
        <div class="contact-meta">
          <a class="contact-item" href="${SITE.phoneHref}">
            <span class="contact-icon">${ICONS.phone}</span>
            <span>
              <strong>Phone Number</strong>
              <span class="contact-value" data-phone>${SITE.phone}</span>
            </span>
          </a>
          <a class="contact-item" href="mailto:${SITE.email}">
            <span class="contact-icon">${ICONS.mail}</span>
            <span>
              <strong>Email</strong>
              <span class="contact-value">${SITE.email}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="wrap">
      <div class="legal">
        <span>© ${new Date().getFullYear()} Capital Water Co. All rights reserved.</span>
        <span><a href="${r}privacy.html">Privacy Policy</a> · <a href="${r}terms.html">Terms &amp; Conditions</a></span>
      </div>
    </div>
  </footer>`;
  }
  return `
  <section class="contact-section" id="contact">
    <div class="wrap contact-panel">
      <div class="contact-copy">
        <h2>Get In Touch With Us</h2>
        <p>Feel free to reach out to us anytime. We're here to help!</p>
        <div class="contact-meta">
          <a class="contact-item" href="${SITE.phoneHref}">
            <span class="contact-icon">${ICONS.phone}</span>
            <span>
              <strong>Phone Number</strong>
              <span class="contact-value" data-phone>${SITE.phone}</span>
            </span>
          </a>
          <a class="contact-item" href="mailto:${SITE.email}">
            <span class="contact-icon">${ICONS.mail}</span>
            <span>
              <strong>Email</strong>
              <span class="contact-value">${SITE.email}</span>
            </span>
          </a>
        </div>
      </div>
      <form class="contact-form js-form" data-form="footer">
        <h2>Send Us a Message</h2>
        <label class="field">
          <span>Name <em>*</em></span>
          <input type="text" name="name" placeholder="Name *" required>
        </label>
        <label class="field">
          <span>Enter Full Address <em>*</em></span>
          <input type="text" name="address" placeholder="Enter Full Address *" required>
        </label>
        <label class="field field-full">
          <span>Email <em>*</em></span>
          <input type="email" name="email" placeholder="Email *" required>
        </label>
        <label class="field field-full">
          <span>Choose Service <em>*</em></span>
          <select name="service" required>
            <option value="">- Choose Service -</option>
            <option>Whole-Home Water Filtration</option>
            <option>Reverse Osmosis Drinking Water</option>
            <option>Water Softener Systems</option>
            <option>Carbon Filtration Systems</option>
            <option>Well Water Treatment Systems</option>
            <option>City Water Treatment Systems</option>
          </select>
        </label>
        <label class="field field-full">
          <span>Message <em>*</em></span>
          <textarea name="message" placeholder="Message *" required></textarea>
        </label>
        <input class="hp" type="text" name="crm_hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="form-actions">
          <button class="btn" type="submit">Submit</button>
        </div>
        <div class="form-success" role="status">
          <strong>Thank you for submitting</strong>
          <span>We’ll be in touch shortly.</span>
        </div>
        <div class="form-error">We could not send your request. Please call us or try again.</div>
      </form>
    </div>
  </section>
  <footer class="footer">
    <div class="wrap">
      <div class="footer-links">
        <div>
          <h6>Quick Links</h6>
          <ul>
            <li><a href="/services/">Services</a></li>
            <li><a href="/service-areas/">Service Areas</a></li>
            <li><a href="${home}#about">About Us</a></li>
            <li><a href="${home}#process">How It Works</a></li>
            <li><a href="${home}#reviews">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h6>Services</h6>
          <ul>
            <li><a href="${r}services/whole-home-water-filtration.html">Whole-Home Water Filtration Services</a></li>
            <li><a href="${r}services/reverse-osmosis.html">Reverse Osmosis Drinking Water Systems</a></li>
            <li><a href="${r}services/well-water-treatment.html">Well Water Treatment Systems</a></li>
            <li><a href="${r}services/water-softener.html">Water Softener Systems</a></li>
            <li><a href="${r}services/carbon-filtration.html">Carbon Filtration Systems</a></li>
            <li><a href="${r}services/city-water-treatment.html">City Water Treatment Systems</a></li>
          </ul>
        </div>
        <div>
          <h6>Water Heater Services</h6>
          <ul>
            ${WATER_HEATER_NAV.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h6>Service Areas</h6>
          <ul class="city-cols">
            <li><a href="/baton-rouge-water-filtration/">Baton Rouge Water Filtration</a></li>
            <li><a href="/new-orleans-water-filtration/">New Orleans Water Filtration</a></li>
            ${AREAS.map((parish) => `<li><a href="${r}service-areas/${parish.slug}">${parish.name}</a></li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="legal">
        <span>© ${new Date().getFullYear()} Capital Water Co. All rights reserved.</span>
        <div class="socials">
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91V127.89c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8s-26.8-12-26.8-26.8 12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9S356.6 9 320.7 7.3C284.6 5.5 163.5 5.5 127.4 7.3 91.5 9 59.7 17.2 33.5 43.4S1.7 98.4 0 134.3C-1.8 170.4-1.8 291.5 0 327.6c1.7 35.9 9.9 67.7 36.2 93.9s58 34.5 93.9 36.2c36.1 1.8 157.2 1.8 193.3 0 35.9-1.7 67.7-9.9 93.9-36.2s34.5-58 36.2-93.9c1.8-36.1 1.8-157.2 0-193.3z"/></svg></a>
          <a href="#" aria-label="Google"><svg viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></a>
        </div>
        <span><a href="${r}privacy.html">Privacy Policy</a> · <a href="${r}terms.html">Terms &amp; Conditions</a></span>
      </div>
    </div>
  </footer>`;
}

function captureAttribution() {
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid"];
  let stored = {};
  try {
    stored = JSON.parse(sessionStorage.getItem("cwc_attrib") || "{}");
  } catch {
    stored = {};
  }
  const params = new URLSearchParams(window.location.search);
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) stored[key] = value;
  });
  try {
    sessionStorage.setItem("cwc_attrib", JSON.stringify(stored));
  } catch {
    /* ignore private-mode storage errors */
  }
  return stored;
}

function heroFormHTML() {
  return `
    <div class="form-card">
      <p class="kicker">Request A <span>FREE</span></p>
      <p class="form-title">Consultation Today!</p>
      <form class="js-form" data-form="hero">
        <select name="service" required>
          <option value="">- Choose Service -</option>
          <option>Whole-Home Water Filtration</option>
          <option>Reverse Osmosis Drinking Water</option>
          <option>Water Softener Systems</option>
          <option>Carbon Filtration Systems</option>
          <option>Well Water Treatment Systems</option>
          <option>City Water Treatment Systems</option>
        </select>
        <label class="form-field">
          <span class="form-field-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.4 7-11.2A7 7 0 0 0 5 9.8C5 15.6 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.2"/></svg></span>
          <input type="text" name="address" placeholder="Enter Full Address*" required>
        </label>
        <label class="form-field">
          <span class="form-field-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5.4 19.2c.8-3.2 3.4-5 6.6-5s5.8 1.8 6.6 5"/></svg></span>
          <input type="text" name="name" placeholder="Name" required>
        </label>
        <label class="form-field">
          <span class="form-field-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7.2 4.8h3.1l1.2 3.1-2 1.2a12.4 12.4 0 0 0 5.4 5.4l1.2-2 3.1 1.2v3.1c0 .7-.6 1.4-1.4 1.4C10.8 18.2 5.8 13.2 5.8 6.2c0-.8.7-1.4 1.4-1.4z"/></svg></span>
          <input type="tel" name="phone" placeholder="Phone" required>
        </label>
        <label class="form-field">
          <span class="form-field-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="m5 8 7 5 7-5"/></svg></span>
          <input type="email" name="email" placeholder="Email" required>
        </label>
        <div class="form-consent">
          <label class="consent-option">
            <input type="checkbox" name="smsTransactionalConsent" value="true">
            <span>I consent to receive non-marketing text messages from Capital Water Co. regarding my inquiry, appointments, estimates, and service updates. Message frequency varies. Message &amp; data rates may apply. Reply STOP to opt out or HELP for help.</span>
          </label>
          <label class="consent-option">
            <input type="checkbox" name="smsMarketingConsent" value="true">
            <span>I consent to receive marketing text messages from Capital Water Co. about special offers, promotions, and services. Message frequency varies. Message &amp; data rates may apply. Reply STOP to opt out or HELP for help.</span>
          </label>
        </div>
        <input class="hp" type="text" name="crm_hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <button class="btn" type="submit">${ICONS.arrow} Get A Free Consultation</button>
        <p class="disclaimer">By submitting this form, you agree to our <a href="${root()}terms.html">Terms &amp; Conditions</a> and acknowledge our <a href="${root()}privacy.html">Privacy Policy</a>.</p>
        <div class="form-success" role="status">
          <strong>Thank you for submitting</strong>
          <span>We’ll be in touch shortly.</span>
        </div>
        <div class="form-error">We could not send your request. Please call us or try again.</div>
      </form>
      <div class="trust-row">
        <span>GOOGLE</span>
        <span>LOCAL SERVICE</span>
        <span>5-STAR RATED</span>
      </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  const formMount = document.getElementById("hero-form");
  if (headerMount) headerMount.innerHTML = headerHTML();
  if (footerMount) footerMount.innerHTML = footerHTML();
  if (formMount) formMount.innerHTML = heroFormHTML();

  const toggle = document.querySelector(".menu-toggle");
  const navWrap = document.querySelector(".nav-wrap");
  if (toggle && navWrap) {
    toggle.addEventListener("click", () => {
      const open = navWrap.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const closeMenu = () => {
    if (navWrap && toggle && window.innerWidth <= 860) {
      navWrap.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  };

  document.querySelectorAll(".nav > li > a").forEach((link) => {
    if (link.nextElementSibling && link.nextElementSibling.classList.contains("dropdown")) {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 860) {
          e.preventDefault();
          link.parentElement.classList.toggle("open");
        }
      });
    } else {
      link.addEventListener("click", closeMenu);
    }
  });

  document.querySelectorAll(".dropdown a, .mobile-cta").forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href") || "";
      if (href.startsWith("#")) closeMenu();
    });
  });

  document.querySelectorAll(".js-form").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const success = form.querySelector(".form-success");
      const error = form.querySelector(".form-error");
      const button = form.querySelector("button[type=submit]");
      if (success) success.style.display = "none";
      if (error) error.style.display = "none";
      if (button) button.disabled = true;

      const payload = Object.fromEntries(new FormData(form).entries());
      const pageSource = (document.body.dataset.formSource || "").trim();
      payload.formName = form.dataset.form || "website";
      payload.formPlacement = form.classList.contains("contact-form") ? "footer" : "hero";
      payload.source = pageSource || payload.formName;
      payload.pagePath = window.location.pathname;
      payload.pageUrl = window.location.href;
      Object.assign(payload, captureAttribution());
      const transactional = form.querySelector('input[name="smsTransactionalConsent"]');
      const marketing = form.querySelector('input[name="smsMarketingConsent"]');
      if (transactional) payload.smsTransactionalConsent = transactional.checked;
      if (marketing) payload.smsMarketingConsent = marketing.checked;

      try {
        const res = await fetch("/.netlify/functions/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.error) {
          throw new Error(data.error || "We could not send your request. Please call us or try again.");
        }
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "lead_submit",
          form: payload.source,
          service: payload.service || "",
        });
        form.classList.add("is-sent");
        if (success) {
          success.style.display = "";
          success.focus?.();
        }
        form.querySelectorAll("input, select, textarea, button").forEach((el) => {
          el.disabled = true;
        });
      } catch (err) {
        if (error) {
          error.textContent = err.message || "We could not send your request. Please call us or try again.";
          error.style.display = "block";
        }
        if (button) button.disabled = false;
      }
    });
  });

  captureAttribution();
  loadChatWidget();
  initScrollEffects();
});

function initScrollEffects() {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onScroll = () => {
    const y = window.scrollY || 0;
    if (header) header.classList.toggle("is-scrolled", y > 18);
    if (hero && !reduceMotion && window.innerWidth > 860) {
      hero.style.setProperty("--hero-shift", `${Math.round(Math.min(y * 0.16, 72))}px`);
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  const watch = (nodes, stagger = 0, extraClass = "") => {
    nodes.forEach((el, i) => {
      if (el.closest(".hero")) return;
      el.classList.add("reveal");
      if (extraClass) el.classList.add(extraClass);
      if (stagger) el.style.setProperty("--reveal-delay", `${Math.min(i * stagger, 420)}ms`);
      io.observe(el);
    });
  };

  watch(document.querySelectorAll(".section .eyebrow, .section h2, .section .lede, .section .center-cta"));
  watch(document.querySelectorAll(".process-card"), 110);
  watch(document.querySelectorAll(".card"), 90);
  watch(document.querySelectorAll(".review"), 100);
  watch(document.querySelectorAll(".faq details"), 70);
  watch(document.querySelectorAll(".photo"));
  watch(document.querySelectorAll(".contact-copy"), 0, "from-left");
  watch(document.querySelectorAll(".content-block, .contact-form"), 0, "from-right");
  watch(document.querySelectorAll(".checks-block li, .bullets li"), 45);
}
