// HTML shell, header, footer and shared building blocks.
const cfg = require('./config');

const isTodo = (v) => !v || String(v).startsWith('TODO');
const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const gbp = (n) => '£' + Number(n).toLocaleString('en-GB');
const abs = (p) => cfg.url + p;

function phoneHref() {
  return isTodo(cfg.phone) ? '/contact/' : 'tel:' + cfg.phone.replace(/\s+/g, '');
}
function phoneLabel() {
  return isTodo(cfg.phone) ? 'Get a free quote' : 'Call ' + cfg.phone;
}

const NAV = [
  ['/how-it-works/', 'How it works'],
  ['/septic-tank-replacement/', 'Septic tank replacement'],
  ['/sewage-treatment-plant-installation/', 'Treatment plants'],
  ['/selling-a-house-with-a-septic-tank/', 'Selling a house'],
  ['/septic-tank-replacement-cost/', 'Prices'],
  ['/areas/', 'Areas'],
  ['/guides/', 'Guides'],
];

const LOGO = `<svg class="logo-mark" viewBox="0 0 52 52" aria-hidden="true" focusable="false"><rect x="2" y="2" width="48" height="48" rx="11" fill="#F6F1E6"/><path d="M26 6.5c-2.6 3.4-5 6.6-5 9.3a5 5 0 0 0 10 0c0-2.7-2.4-5.9-5-9.3z" fill="#C4943B"/><path d="M8.5 32.5Q17.5 18.5 26.5 28Q34.5 20 43.5 32.5" stroke="#1E4D45" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 41q4-3.2 8 0t8 0t8 0t8 0" stroke="#1E4D45" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`;

function header(path) {
  const links = NAV.map(([href, label]) => {
    const current = path === href || (href !== '/' && path.startsWith(href));
    return `<li><a href="${href}"${current ? ' aria-current="page"' : ''}>${label}</a></li>`;
  }).join('');
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="logo" href="/" aria-label="${esc(cfg.brand)} home">${LOGO}<span class="logo-text"><strong>${esc(cfg.brand.split(' ')[0])}</strong><small>DRAINAGE</small></span></a>
    <nav aria-label="Main"><input type="checkbox" id="nav-toggle" class="nav-toggle"><label for="nav-toggle" class="nav-button">Menu</label><ul class="nav">${links}</ul></nav>
    <a class="btn btn-gold header-cta" href="${phoneHref()}">${phoneLabel()}</a>
  </div>
</header>`;
}

function footer(areas) {
  const areaLinks = areas.slice(0, 18).map(a => `<li><a href="/areas/${a.slug}/">${esc(a.name)}</a></li>`).join('');
  const company = isTodo(cfg.companyName) ? '' : `<p>${esc(cfg.companyName)}${isTodo(cfg.companyNumber) ? '' : ', registered in England and Wales no. ' + esc(cfg.companyNumber)}</p>`;
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <p class="footer-brand">${esc(cfg.brand)}</p>
      <p>${esc(cfg.tagline)} Septic tank replacement and sewage treatment plants across Wells, the Mendips and Somerset.</p>
      <p><a class="btn btn-gold" href="${phoneHref()}">${phoneLabel()}</a></p>
      ${isTodo(cfg.email) ? '' : `<p><a href="mailto:${esc(cfg.email)}">${esc(cfg.email)}</a></p>`}
      <p>${esc(cfg.hours)}</p>
    </div>
    <div>
      <p class="footer-head">Services</p>
      <ul>
        <li><a href="/septic-tank-replacement/">Septic tank replacement</a></li>
        <li><a href="/sewage-treatment-plant-installation/">Sewage treatment plants</a></li>
        <li><a href="/septic-tank-to-treatment-plant/">Septic tank conversion</a></li>
        <li><a href="/drainage-field-installation/">Drainage fields</a></li>
        <li><a href="/septic-tank-survey/">Septic tank surveys</a></li>
        <li><a href="/selling-a-house-with-a-septic-tank/">Selling a house</a></li>
        <li><a href="/cesspit-replacement/">Cesspit replacement</a></li>
        <li><a href="/new-build-off-mains-drainage/">New builds</a></li>
        <li><a href="/phosphate-credits-somerset/">Somerset phosphates</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-head">Areas we cover</p>
      <ul class="cols-2">${areaLinks}</ul>
      <p><a href="/areas/">All areas</a></p>
    </div>
    <div>
      <p class="footer-head">Help</p>
      <ul>
        <li><a href="/septic-tank-replacement-cost/">Prices</a></li>
        <li><a href="/guides/">Guides</a></li>
        <li><a href="/guides/general-binding-rules/">General binding rules</a></li>
        <li><a href="/faq/">FAQs</a></li>
        <li><a href="/about/">About us</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/privacy/">Privacy</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-legal">
    ${company}
    <p>Rules on this site apply to England. Regulation content last checked against GOV.UK on ${new Date(cfg.lastReviewed).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.</p>
  </div>
</footer>
<a class="mobile-call" href="${phoneHref()}">${phoneLabel()}</a>`;
}

function breadcrumbHtml(crumbs) {
  if (!crumbs || crumbs.length < 2) return '';
  const items = crumbs.map((c, i) => i === crumbs.length - 1
    ? `<li aria-current="page">${esc(c.name)}</li>`
    : `<li><a href="${c.path}">${esc(c.name)}</a></li>`).join('');
  return `<nav class="crumbs wrap" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
}

function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

function businessSchema(areas) {
  const s = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': abs('/#business'),
    name: cfg.brand,
    slogan: cfg.tagline,
    url: abs('/'),
    logo: abs('/assets/logo.svg'),
    image: abs('/assets/og-image.png'),
    description: 'Septic tank replacement, sewage treatment plant installation, drainage fields and surveys across Wells, the Mendips, Somerset and nearby.',
    address: { '@type': 'PostalAddress', addressLocality: cfg.baseTown, addressRegion: cfg.region, addressCountry: 'GB' },
    areaServed: areas.map(a => ({ '@type': 'City', name: a.name })),
    priceRange: `${gbp(cfg.prices.surveyFrom)}–${gbp(cfg.prices.replacementTypicalHigh)}`,
  };
  if (!isTodo(cfg.phone)) s.telephone = cfg.phone;
  if (!isTodo(cfg.email)) s.email = cfg.email;
  return s;
}

function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
  };
}

function faqHtml(faqs, heading = 'Common questions') {
  if (!faqs || !faqs.length) return '';
  return `<section class="faq"><h2>${heading}</h2>${faqs.map(f => `<details><summary>${esc(f.q)}</summary><div><p>${f.a}</p></div></details>`).join('')}</section>`;
}

function ctaBand(text = 'Get a fixed, written quote') {
  return `<section class="cta-band"><div class="wrap"><h2>${text}</h2><p>Free site visit across Wells and an hour around. We tell you straight what you need, what it costs and how long it takes.</p><p><a class="btn btn-gold" href="/contact/">Book a free site visit</a> <a class="btn btn-ghost" href="${phoneHref()}">${phoneLabel()}</a></p></div></section>`;
}

function relatedHtml(links, heading = 'Related') {
  if (!links || !links.length) return '';
  return `<aside class="related"><h2>${heading}</h2><ul class="card-list">${links.map(l => `<li><a class="card" href="${l.path}"><strong>${esc(l.title)}</strong>${l.text ? `<span>${esc(l.text)}</span>` : ''}</a></li>`).join('')}</ul></aside>`;
}

function page({ path, title, description, h1, lead, body, crumbs, schema = [], areas, hero = false, noindex = false, ogType = 'website' }) {
  const canonical = abs(path);
  const allSchema = [businessSchema(areas), ...(crumbs && crumbs.length > 1 ? [breadcrumbSchema(crumbs)] : []), ...schema];
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(cfg.brand)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${abs('/assets/og-image.png')}">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1E4D45">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/style.css">
${allSchema.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body>
${header(path)}
${breadcrumbHtml(crumbs)}
<main id="main">
${hero ? `<div class="hero"><div class="wrap hero-grid"><div>
<h1>${h1}</h1>
${lead ? `<p class="lead">${lead}</p>` : ''}
<p class="hero-ctas"><a class="btn btn-gold" href="/contact/">Book a free site visit</a> <a class="btn btn-ghost" href="#checker">Is my tank compliant?</a></p>
<ul class="hero-points"><li>${ICONS.tick}Free site visit</li><li>${ICONS.tick}Fixed written quotes</li><li>${ICONS.tick}Building control handled</li></ul>
</div><div class="hero-art"><img src="/assets/img/hero-cottage.svg" alt="A stone cottage with a new sewage treatment plant in the garden and a clean stream running past" width="640" height="440"></div></div></div>` : `<div class="page-head"><div class="wrap">
<h1>${h1}</h1>
${lead ? `<p class="lead">${lead}</p>` : ''}
</div></div>`}
${body}
</main>
${footer(areas)}
<script src="/assets/site.js" defer></script>
</body>
</html>`;
}

// ---------- visual components ----------
const I = (d) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICONS = {
  visit: I('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/><path d="M8 12l3-3 3 3v2H8z"/>'),
  quote: I('<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6"/><path d="M9 13h7M9 17h5"/>'),
  approval: I('<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 2h6v4H9z"/><path d="M9 14l2 2 4-4"/>'),
  dig: I('<path d="M2 18h12v3H2z"/><path d="M4 18v-5h6l2 5"/><path d="M10 13l4-7 5 2-2 5h-3"/>'),
  power: I('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'),
  handover: I('<path d="M3 11l9-7 9 7v10H3z"/><path d="M8 15l3 3 5-6"/>'),
  pound: I('<circle cx="12" cy="12" r="9"/><path d="M15 8.5a3 3 0 0 0-5 2.2V16h6M8.5 13h5"/>'),
  shield: I('<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
  clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  drop: I('<path d="M12 2.5S5 10 5 15a7 7 0 0 0 14 0c0-5-7-12.5-7-12.5z"/><path d="M9 15a3 3 0 0 0 3 3"/>'),
  house: I('<path d="M3 11l9-7 9 7"/><path d="M5 10v11h14V10"/><path d="M10 21v-6h4v6"/>'),
  tick: I('<path d="M5 12l4 4 10-10"/>'),
  cross: I('<path d="M6 6l12 12M18 6L6 18"/>'),
  chat: I('<path d="M4 4h16v12H8l-4 4z"/><path d="M8 9h8M8 12h5"/>'),
};

function figure(src, alt, caption, cls = '') {
  const [w, h] = { 'septic-tank-diagram.svg': [800, 460], 'treatment-plant-diagram.svg': [800, 480], 'before-after.svg': [800, 400], 'drainage-field-plan.svg': [800, 440], 'hero-cottage.svg': [640, 440] }[src] || [800, 450];
  return `<figure class="diagram ${cls}"><a href="/assets/img/${src}" target="_blank" rel="noopener" title="Open full size"><img src="/assets/img/${src}" alt="${esc(alt)}" loading="lazy" decoding="async" width="${w}" height="${h}"></a>${caption ? `<figcaption>${caption} <span class="zoom-hint">Tap to enlarge.</span></figcaption>` : ''}</figure>`;
}

const JOURNEY = [
  ['visit', 'Free site visit', 'We find your tank and where it drains, look at the ground and access, and answer your questions. No obligation.'],
  ['quote', 'Fixed written quote', 'Everything in writing: the plant, where it goes, the electrics, putting the garden back, building control. No surprises.'],
  ['approval', 'Building control', 'We prepare the drawings and handle the building regulations application for you.'],
  ['dig', 'Installation', 'The old tank is emptied and removed or filled, and the new system goes in. A typical house takes about 3 to 5 days on site.'],
  ['power', 'Power and testing', 'A registered electrician connects the plant. We start it up and check it is working properly.'],
  ['handover', 'Handover pack', 'We tidy up and give you a pack: what was fitted, where it is and how to look after it. Keep it for when you sell.'],
];
function journeyHtml(heading = 'What happens, step by step') {
  return `<section class="journey"><h2>${heading}</h2><ol class="journey-list">${JOURNEY.map(([icon, t, d], i) => `<li><span class="journey-icon">${ICONS[icon]}</span><span class="journey-num">Step ${i + 1}</span><strong>${t}</strong><span>${d}</span></li>`).join('')}</ol></section>`;
}

function prosConsHtml() {
  const row = (items, kind) => items.map(t => `<li class="${kind}">${ICONS[kind === 'pro' ? 'tick' : 'cross']}<span>${t}</span></li>`).join('');
  return `<div class="pros-cons">
<div class="pc-card"><h3>Septic tank</h3><p class="pc-sub">Separates the solids. The soil does the cleaning.</p>
<ul>${row(['No electricity needed', 'No moving parts to break', 'Cheaper to buy', 'Fine if your ground drains well'], 'pro')}${row(['Must <strong>not</strong> go to a stream, river or ditch', 'Needs a drainage field and enough garden', 'Struggles on heavy clay or wet ground', 'Many old ones are cracked or too small'], 'con')}</ul></div>
<div class="pc-card pc-best"><h3>Sewage treatment plant</h3><p class="pc-sub">Cleans the water itself, with air and natural bacteria.</p>
<ul>${row(['Much cleaner water out', 'Can go to a stream that flows all year', 'Works where the ground drains badly', 'Often needs less garden than a large drainage field'], 'pro')}${row(['Most need electricity for an air pump', 'Needs a yearly service', 'Costs more to buy'], 'con')}</ul></div>
</div>`;
}

function checkerHtml() {
  const q = (name, legend, opts) => `<fieldset class="ck-q" data-q="${name}"><legend>${legend}</legend>${opts.map(([v, l]) => `<label><input type="radio" name="ck-${name}" value="${v}"><span>${l}</span></label>`).join('')}</fieldset>`;
  return `<section class="checker" id="checker" aria-labelledby="ck-h">
<div class="ck-head"><span class="ck-badge">1-minute check</span><h2 id="ck-h">Is your septic tank compliant?</h2><p>Answer four quick questions for a plain-English answer. Nothing is sent anywhere.</p></div>
<form class="ck-form" novalidate>
${q('type', '1. What do you have?', [['septic', 'Septic tank'], ['plant', 'Treatment plant'], ['cesspit', 'Cesspit (no outlet, emptied often)'], ['unsure', 'Not sure']])}
${q('to', '2. Where does the liquid go?', [['stream', 'A stream or river'], ['ditch', 'A ditch (may dry up in summer)'], ['ground', 'Into the ground (soakaway or drainage field)'], ['unsure', 'Not sure']])}
${q('issue', '3. Any problems?', [['yes', 'Yes: smells, slow drains, wet ground or backing up'], ['no', 'No, it seems fine']])}
${q('sale', '4. Are you buying or selling soon?', [['yes', 'Yes'], ['no', 'No']])}
<p class="ck-error" hidden>Please answer all four questions.</p>
<p><button type="submit" class="btn btn-gold">Show my result</button></p>
</form>
<div class="ck-result" aria-live="polite" hidden></div>
<noscript><p>This check needs JavaScript. <a href="/contact/">Ask us instead</a>, we're happy to help.</p></noscript>
</section>`;
}

module.exports = { ICONS, figure, journeyHtml, prosConsHtml, checkerHtml, page, esc, gbp, abs, isTodo, faqHtml, faqSchema, ctaBand, relatedHtml, phoneHref, phoneLabel, cfg };
