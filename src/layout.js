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
  ['/septic-tank-replacement/', 'Septic tank replacement'],
  ['/sewage-treatment-plant-installation/', 'Treatment plants'],
  ['/selling-a-house-with-a-septic-tank/', 'Selling a house'],
  ['/septic-tank-replacement-cost/', 'Prices'],
  ['/areas/', 'Areas'],
  ['/guides/', 'Guides'],
  ['/contact/', 'Contact'],
];

const LOGO = `<svg class="logo-mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><rect x="3" y="7" width="42" height="34" rx="7" fill="#C4943B"/><path d="M3 27c6-5 11-5 17 0s11 5 17 0 6-3 8-2v9a7 7 0 0 1-7 7H10a7 7 0 0 1-7-7z" fill="#1E4D45"/><path d="M9 20c4-3 8-3 12 0" stroke="#F6F1E6" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`;

function header(path) {
  const links = NAV.map(([href, label]) => {
    const current = path === href || (href !== '/' && path.startsWith(href));
    return `<li><a href="${href}"${current ? ' aria-current="page"' : ''}>${label}</a></li>`;
  }).join('');
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="logo" href="/" aria-label="${esc(cfg.brand)} home">${LOGO}<span class="logo-text"><strong>${esc(cfg.brandShort)}</strong><small>DRAINAGE</small></span></a>
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
      <p>${esc(cfg.tagline)} Septic tank replacement and sewage treatment plants across Yeovil, Somerset and Dorset.</p>
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
        <li><a href="/treatment-plant-servicing/">Servicing</a></li>
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
    description: 'Septic tank replacement, sewage treatment plant installation, drainage fields and surveys across Yeovil, Somerset, Dorset and nearby.',
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
  return `<section class="cta-band"><div class="wrap"><h2>${text}</h2><p>Free site visit across Yeovil and an hour around. We tell you straight what you need, what it costs and how long it takes.</p><p><a class="btn btn-gold" href="/contact/">Book a free site visit</a> <a class="btn btn-ghost" href="${phoneHref()}">${phoneLabel()}</a></p></div></section>`;
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
<div class="${hero ? 'hero' : 'page-head'}"><div class="wrap">
<h1>${h1}</h1>
${lead ? `<p class="lead">${lead}</p>` : ''}
${hero ? `<p class="hero-ctas"><a class="btn btn-gold" href="/contact/">Book a free site visit</a> <a class="btn btn-ghost" href="/septic-tank-replacement-cost/">See typical prices</a></p>` : ''}
</div></div>
${body}
</main>
${footer(areas)}
</body>
</html>`;
}

module.exports = { page, esc, gbp, abs, isTodo, faqHtml, faqSchema, ctaBand, relatedHtml, phoneHref, phoneLabel, cfg };
