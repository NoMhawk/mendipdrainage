#!/usr/bin/env node
// Builds the static site into ./site. No dependencies. Run: node build.js
const fs = require('fs');
const path = require('path');
const L = require('./src/layout');
const { page, esc, gbp, isTodo, faqHtml, faqSchema, ctaBand, relatedHtml, phoneHref, phoneLabel, cfg, ICONS, figure, journeyHtml, prosConsHtml, checkerHtml } = L;
const services = require('./src/data/services');
const guides = require('./src/data/guides');
const areas = require('./src/data/areas');

const OUT = path.join(__dirname, 'site');
const p = cfg.prices;
const pages = []; // { path, html, priority }

// ---------- helpers ----------
function write(urlPath, html) {
  const file = urlPath.endsWith('.html') ? path.join(OUT, urlPath) : path.join(OUT, urlPath, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
function add(urlPath, html, priority = 0.6, inSitemap = true) {
  write(urlPath, html);
  if (inSitemap) pages.push({ path: urlPath, priority });
}
const byPath = {};
services.forEach(s => { byPath[s.slug] = { path: `/${s.slug}/`, title: s.h1, text: s.lead.split('. ')[0] + '.' }; });
guides.forEach(g => { byPath['guides/' + g.slug] = { path: `/guides/${g.slug}/`, title: g.h1, text: g.lead.split('. ')[0] + '.' }; });
byPath['septic-tank-replacement-cost'] = { path: '/septic-tank-replacement-cost/', title: 'Septic tank replacement cost', text: `Typical ${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)}, and what changes the price.` };
const rel = (keys) => keys.map(k => { if (!byPath[k]) throw new Error('Unknown related link: ' + k); return byPath[k]; });

function glanceHtml(rows) {
  if (!rows) return '';
  return `<dl class="glance">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
}
function sectionsHtml(sections) {
  const comp = { journey: () => journeyHtml(), proscons: () => prosConsHtml(), checker: () => checkerHtml() };
  return sections.map(s => `<section><h2>${s.h2}</h2>${s.fig ? (Array.isArray(s.fig) ? `<div class="diagram-pair">${s.fig.map(f => figure(f.src, f.alt, f.caption)).join('')}</div>` : figure(s.fig.src, s.fig.alt, s.fig.caption)) : ''}${s.html}${s.add ? comp[s.add]() : ''}</section>`).join('\n');
}
function dist(a, b) { // straight-line miles
  const R = 3958.8, toR = (d) => d * Math.PI / 180;
  const dLat = toR(b.lat - a.lat), dLng = toR(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a.lat)) * Math.cos(toR(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
const yeovil = areas.find(a => a.slug === 'yeovil');
const nearest = (town, n = 6) => areas.filter(a => a !== town).sort((a, b) => dist(town, a) - dist(town, b)).slice(0, n);

// ---------- clean output ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.cpSync(path.join(__dirname, 'static'), OUT, { recursive: true });

// ---------- home ----------
{
  const featured = [
    ['septic-tank-replacement', 'house'], ['sewage-treatment-plant-installation', 'drop'], ['selling-a-house-with-a-septic-tank', 'handover'],
    ['septic-tank-survey', 'visit'], ['drainage-field-installation', 'dig'], ['treatment-plant-servicing', 'shield'],
  ].map(([k, icon]) => ({ s: services.find(x => x.slug === k), icon }));
  const homeFaqs = [
    { q: 'Do I need to replace my septic tank?', a: 'If it discharges to a stream, river or ditch, yes: under the general binding rules a septic tank must not discharge to a watercourse. If it goes to a working drainage field and is in good order, it may be fine. A survey will tell you.' },
    { q: 'How much does it cost to replace a septic tank?', a: `For a normal house, a full replacement with a treatment plant typically costs ${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)}. We give a fixed written quote after a free site visit.` },
    { q: 'I don\'t know anything about septic tanks. Is that a problem?', a: 'Not at all. Most people with a septic tank have never had to think about where their drains go. We explain everything in plain English, show you where everything is, and give you a simple guide to looking after it.' },
    { q: 'How much mess will it make?', a: 'There will be a digger and some open ground for a few days. We plan the route to keep disruption down, protect drives and paths where we can, and put the ground back when we finish. Your quote says exactly what reinstatement is included.' },
    { q: 'Which areas do you cover?', a: 'Yeovil and everywhere within about an hour: south Somerset, north and west Dorset, east Devon and the edge of Wiltshire.' },
    { q: 'I am selling my house. Can you help quickly?', a: 'Yes. We can survey the system, give you a written report for the buyer and a fixed quote if work is needed. Tell us your completion date when you call.' },
  ];
  const body = `
<section class="wrap trust-strip" aria-label="Why choose us">
  <ul>
    <li><strong>Local to Yeovil</strong><span>Working within about an hour of the town</span></li>
    <li><strong>Prices up front</strong><span>Typical costs published, then a fixed written quote</span></li>
    <li><strong>One team, start to finish</strong><span>Survey, design, building control, install, paperwork</span></li>
    <li><strong>Plain English</strong><span>No jargon, and honest about when you don't need us</span></li>
  </ul>
</section>

<div class="wrap">${checkerHtml()}</div>

<section class="wrap two-col">
  <div>
    <h2>Why old septic tanks are being replaced</h2>
    <p>Under the Environment Agency's general binding rules, a septic tank in England must not discharge to a stream, river or ditch. Thousands of older rural homes still do, often without the owner knowing.</p>
    <p>It usually comes to light when a house is sold: the buyer's solicitor asks where the waste water goes. If the answer is "the ditch", it needs upgrading, usually to a modern <a href="/sewage-treatment-plant-installation/">sewage treatment plant</a>.</p>
    <p><a href="/guides/general-binding-rules/">Read the rules in plain English</a></p>
  </div>
  <div>${figure('before-after.svg', 'Before: an old septic tank sending dirty liquid into a ditch, marked not allowed. After: a new treatment plant sending clean water to a flowing stream, marked allowed.', 'Before and after: the most common upgrade.')}</div>
</section>

<section class="band"><div class="wrap">
  <h2>Never seen inside a septic tank? Here's how it all works</h2>
  <p class="section-lead">Most people have never had to think about where their toilet goes. These two diagrams explain the difference in about 30 seconds.</p>
  <div class="diagram-pair">
    ${figure('septic-tank-diagram.svg', 'Cutaway of a septic tank: waste comes in, solids sink as sludge, scum floats, and the liquid flows out to a drainage field where the soil cleans it.', '<strong>Septic tank:</strong> separates solids. The soil does the cleaning.')}
    ${figure('treatment-plant-diagram.svg', 'Cutaway of a sewage treatment plant: solids settle, an air pump feeds bacteria that clean the water, it settles again and clean water flows out to a stream.', '<strong>Treatment plant:</strong> cleans the water itself, so it can go to a stream.')}
  </div>
  ${prosConsHtml()}
  <p><a class="btn btn-green" href="/how-it-works/">See the full explainer</a></p>
</div></section>

<section class="wrap">
  <h2>What we do</h2>
  <ul class="card-grid">${featured.map(({ s, icon }) => `<li><a class="card" href="/${s.slug}/"><span class="card-icon">${ICONS[icon]}</span><strong>${esc(s.h1)}</strong><span>${esc(s.lead.split('. ')[0])}.</span></a></li>`).join('')}</ul>
</section>

<section class="band"><div class="wrap">${journeyHtml('What happens when you call us')}</div></section>

<section class="wrap two-col">
  <div>
    <h2>Typical prices</h2>
    <p>Most firms won't publish prices. We think you should know roughly what to expect before you pick up the phone.</p>
    <ul class="price-list">
      <li><span>Full septic tank to treatment plant replacement</span><strong>${gbp(p.replacementTypicalLow)}–${gbp(p.replacementTypicalHigh)}</strong></li>
      <li><span>New drainage field</span><strong>${gbp(p.drainageFieldLow)}–${gbp(p.drainageFieldHigh)}</strong></li>
      <li><span>Septic tank survey</span><strong>from ${gbp(p.surveyFrom)}</strong></li>
      <li><span>Treatment plant service</span><strong>from ${gbp(p.serviceFrom)}</strong></li>
    </ul>
    <p><a href="/septic-tank-replacement-cost/">What's included, and what changes the price</a></p>
  </div>
  <div>
    <h2>What you can expect from us</h2>
    <ul class="promise">
      <li>${ICONS.quote}<div><strong>A fixed price in writing</strong><span>Before any work starts.</span></div></li>
      <li>${ICONS.chat}<div><strong>Plain-English advice</strong><span>We explain your options, including the cheaper ones.</span></div></li>
      <li>${ICONS.approval}<div><strong>Done to the rules</strong><span>Designed to the general binding rules and building regulations.</span></div></li>
      <li>${ICONS.handover}<div><strong>Paperwork for your sale</strong><span>A handover pack with everything a buyer will ask for.</span></div></li>
    </ul>
  </div>
</section>

<section class="wrap two-col">
  <div>
    <h2>Selling a house with a septic tank?</h2>
    <p>A non-compliant septic tank can hold up a sale. We survey quickly, give you a written report for the buyer, and a fixed quote if work is needed, so everyone can agree a way forward.</p>
    <p><a class="btn btn-green" href="/selling-a-house-with-a-septic-tank/">Help for sellers and buyers</a></p>
  </div>
  <div>
    <h2>Somerset phosphate schemes</h2>
    <p>Yeovil and most of south Somerset drain to the Somerset Levels and Moors. Some homeowners may qualify for a funded upgrade. <a href="/phosphate-credits-somerset/">We'll tell you honestly if a scheme suits you better</a>.</p>
  </div>
</section>

<section class="wrap">
  <h2>Areas we cover</h2>
  <p>Yeovil and about an hour around, across Somerset, Dorset, east Devon and south-west Wiltshire.</p>
  <ul class="area-pills">${areas.map(a => `<li><a href="/areas/${a.slug}/">${esc(a.name)}</a></li>`).join('')}</ul>
</section>
<section class="wrap">${faqHtml(homeFaqs)}</section>
${ctaBand()}`;
  add('/', page({
    path: '/', areas, hero: true,
    title: `Septic Tank Replacement Yeovil, Somerset & Dorset | ${cfg.brand}`,
    description: 'Septic tank replacement and sewage treatment plant installation in Yeovil, Somerset and Dorset. Clear prices, free site visit, fixed written quotes.',
    h1: 'Old septic tank? We\'ll replace it properly.',
    lead: 'Yeo Drainage replaces old and non-compliant septic tanks with modern sewage treatment plants, across Yeovil, Somerset and Dorset. We explain everything in plain English, publish our prices, and handle it all from survey to sign-off.',
    body, crumbs: null, schema: [faqSchema(homeFaqs)],
  }), 1.0);
}

// ---------- how it works ----------
{
  const pth = '/how-it-works/';
  const faqs = [
    { q: 'How do I know if I have a septic tank or a treatment plant?', a: 'Most treatment plants need electricity, so there is usually a small air pump in a box or kiosk nearby, and you may hear a gentle hum. A septic tank has no power and no moving parts. Old septic tanks are often brick or concrete with heavy lids.' },
    { q: 'Where does my toilet waste actually go?', a: 'Into the tank in your garden. Solids stay in the tank until it is emptied by a tanker. The liquid flows out, either into the ground through a drainage field, or, for a treatment plant, sometimes into a stream.' },
    { q: 'Do treatment plants smell?', a: 'A working, serviced plant should not smell beyond a faint earthy odour when the lid is open. A strong smell usually means the air pump has failed or it needs emptying.' },
    { q: 'How long do they last?', a: 'The tank itself is built to last many years. Moving parts such as air pumps wear out and are replaced from time to time, which is part of why a yearly service matters.' },
  ];
  const body = `
<div class="wrap content">
<section><h2>The short version</h2>
<p>If your home isn't on the mains sewer, everything from your toilets, sinks and showers goes into a tank in your garden. That tank does one of two jobs:</p>
<ul>
<li>A <strong>septic tank</strong> lets the solids settle out, then sends the still-dirty liquid into the ground, where the soil cleans it.</li>
<li>A <strong>sewage treatment plant</strong> cleans the liquid itself, using air and natural bacteria, so much cleaner water comes out.</li>
</ul>
<p>The difference matters because of where the water is allowed to go. That's what decides whether your system meets the rules.</p></section>

<section><h2>How a septic tank works</h2>
${figure('septic-tank-diagram.svg', 'Cutaway of a two-chamber septic tank: waste in from the house, scum floating on top, sludge settling at the bottom, liquid flowing out to a drainage field where the soil cleans it.', 'A septic tank only separates the solids. The liquid that leaves it still needs cleaning by the soil.')}
<ol>
<li><strong>Waste flows in</strong> from the house through an underground pipe.</li>
<li><strong>Fats and oils float</strong> to the top as a crust called scum.</li>
<li><strong>Solids sink</strong> to the bottom as sludge. This builds up and has to be pumped out by a tanker, usually at least once a year.</li>
<li><strong>A second chamber</strong> lets more solids settle.</li>
<li><strong>The liquid</strong> (called effluent) flows out into a <a href="/drainage-field-installation/">drainage field</a>: perforated pipes in gravel trenches, where the soil filters and cleans it.</li>
</ol>
<p>Because the liquid is still dirty, a septic tank <strong>must not</strong> discharge straight to a stream, river or ditch in England. That's the rule that catches out so many older homes.</p></section>

<section><h2>How a sewage treatment plant works</h2>
${figure('treatment-plant-diagram.svg', 'Cutaway of a sewage treatment plant in three stages: settling, aeration with an air pump and bacteria, and final settling, with clean treated water flowing out to a stream.', 'A treatment plant cleans the water itself, so it can discharge to a stream that flows all year.')}
<ol>
<li><strong>Settle:</strong> like a septic tank, solids sink to the bottom of the first chamber.</li>
<li><strong>Air and bacteria:</strong> a small electric air pump bubbles air through the liquid. Natural bacteria thrive on it and break down the waste. This is the clever bit.</li>
<li><strong>Settle again:</strong> any remaining bits settle out and are returned to the start.</li>
<li><strong>Clean water out:</strong> the treated water is clean enough to go to a stream that flows all year round, or into a drainage field.</li>
</ol>
<p>Most plants need electricity, and all need a yearly service and regular emptying. In return, you get far cleaner water and more choice about where it can go. See <a href="/sewage-treatment-plant-installation/">treatment plant installation</a>.</p></section>

<section><h2>Septic tank or treatment plant: pros and cons</h2>
${prosConsHtml()}
<p>Neither is "better" for everyone. If your ground drains well and there's room for a drainage field, a septic tank can still be a good, legal option. If your only outlet is a stream, or your ground is heavy clay, a treatment plant is usually the answer. More detail: <a href="/guides/septic-tank-vs-treatment-plant/">septic tank vs treatment plant</a>.</p></section>

<section><h2>Why so many septic tanks need replacing</h2>
${figure('before-after.svg', 'Before: an old septic tank sending dirty liquid into a ditch, marked not allowed. After: a treatment plant sending clean water to a flowing stream, marked allowed.', 'The most common upgrade: same outlet, new plant, clean water.')}
<p>Many homes built before modern rules had septic tanks piped straight to the nearest ditch or stream. Under the general binding rules this isn't allowed, and the old deadline of 1 January 2020 has passed. Replacing the tank with a treatment plant often means the same outlet can be used, because the water leaving it is now clean, provided the stream flows all year. See <a href="/septic-tank-replacement/">septic tank replacement</a>.</p></section>

<section><h2>What a drainage field looks like</h2>
${figure('drainage-field-plan.svg', 'Plan of a garden showing house, tank and a drainage field of parallel perforated pipes in gravel trenches, at least 15 metres from the house and 10 metres from a stream, with the tank within 30 metres of tanker access.', 'Key distances from Approved Document H, the building regulations guidance.')}
<p>If the water is going into the ground, it needs a properly designed drainage field, not just a rubble-filled hole. The field must be at least 15m from any building and 10m from any watercourse, and the ground must pass a <a href="/guides/percolation-test/">percolation test</a>.</p></section>
</div>
<div class="band"><div class="wrap">${journeyHtml('What a replacement involves')}</div></div>
<div class="wrap content">
${checkerHtml()}
${faqHtml(faqs)}
${relatedHtml(rel(['septic-tank-replacement', 'sewage-treatment-plant-installation', 'septic-tank-replacement-cost', 'guides/general-binding-rules']))}
</div>
${ctaBand('Want us to take a look?')}`;
  add(pth, page({
    path: pth, areas,
    title: 'How Septic Tanks & Treatment Plants Work, with Diagrams',
    description: 'How does a septic tank work? How does a sewage treatment plant work? Simple diagrams, pros and cons, and why so many old tanks are being replaced.',
    h1: 'How septic tanks and treatment plants work',
    lead: 'Never had to think about where your toilet goes? You\'re not alone. Here\'s how it all works, with simple diagrams, in about three minutes.',
    body, crumbs: [{ name: 'Home', path: '/' }, { name: 'How it works', path: pth }], schema: [faqSchema(faqs)],
  }), 0.9);
}

// ---------- compliance checker ----------
{
  const pth = '/septic-tank-checker/';
  const body = `
<div class="wrap content">
${checkerHtml()}
<section><h2>What the checker looks at</h2>
<p>The check is based on the Environment Agency's general binding rules for small sewage discharges in England. The big questions are:</p>
<ul>
<li><strong>What kind of system you have.</strong> Septic tanks and treatment plants are treated differently.</li>
<li><strong>Where the liquid goes.</strong> A septic tank must go to ground through a drainage field. A treatment plant can go to a stream that flows all year.</li>
<li><strong>Whether it is working.</strong> The rules say a system that isn't in good working order must be repaired or replaced.</li>
<li><strong>Whether you're selling.</strong> Sellers must give buyers a written description of the system.</li>
</ul>
<p>It can't check everything. A nearby public sewer, a protected wildlife site, or a private drinking water supply can all change the answer. A <a href="/septic-tank-survey/">septic tank survey</a> gives you a definite answer in writing.</p></section>
<section><h2>Don't know where yours goes?</h2>
<p>That's very common. Clues to look for:</p>
<ul>
<li>A pipe coming out into a ditch or stream bank near the tank</li>
<li>A patch of extra-green or soggy grass in the garden (often a drainage field or soakaway)</li>
<li>Old deeds or sale paperwork mentioning an "outfall"</li>
<li>A small electric box or kiosk near the lids (likely a treatment plant)</li>
</ul>
<p>See <a href="/how-it-works/">how septic tanks and treatment plants work</a> for diagrams.</p></section>
${relatedHtml(rel(['guides/general-binding-rules', 'guides/can-a-septic-tank-discharge-to-a-ditch', 'septic-tank-survey', 'selling-a-house-with-a-septic-tank']))}
</div>
${ctaBand()}`;
  add(pth, page({
    path: pth, areas,
    title: 'Is My Septic Tank Compliant? 1-Minute Check | ' + cfg.brand,
    description: 'Is your septic tank legal? Answer four quick questions for a plain-English answer based on the general binding rules for England. Free, and nothing is sent anywhere.',
    h1: 'Is my septic tank compliant?',
    lead: 'Four quick questions, a plain-English answer. Based on the Environment Agency\'s general binding rules for England.',
    body, crumbs: [{ name: 'Home', path: '/' }, { name: 'Septic tank checker', path: pth }],
  }), 0.8);
}

// ---------- service pages ----------
for (const s of services) {
  const pth = `/${s.slug}/`;
  const crumbs = [{ name: 'Home', path: '/' }, { name: s.h1, path: pth }];
  const body = `
<div class="wrap content">
${glanceHtml(s.glance)}
${sectionsHtml(s.sections)}
${faqHtml(s.faqs)}
${relatedHtml(rel(s.related))}
</div>
${ctaBand()}`;
  const schema = [{
    '@context': 'https://schema.org', '@type': 'Service', name: s.h1, serviceType: s.keyword,
    provider: { '@id': L.abs('/#business') }, areaServed: areas.map(a => a.name), url: L.abs(pth),
  }];
  if (s.faqs.length) schema.push(faqSchema(s.faqs));
  add(pth, page({ path: pth, title: s.title, description: s.description, h1: s.h1, lead: s.lead, body, crumbs, schema, areas }), 0.9);
}

// ---------- cost page ----------
{
  const pth = '/septic-tank-replacement-cost/';
  const faqs = [
    { q: 'Why don\'t other firms publish prices?', a: 'Every site is different, so a fixed price needs a visit. But ranges help you plan, so we publish ours and then give a fixed written quote after a free site visit.' },
    { q: 'Is VAT included?', a: 'Our ranges include VAT. Your written quote will show it clearly.' },
    { q: 'Are there grants?', a: 'There is no general national grant. In parts of Somerset, phosphate credit schemes may fund upgrades for some homeowners. See our phosphate credits page.' },
  ];
  const body = `
<div class="wrap content">
<dl class="glance">
<div><dt>Full replacement (typical house)</dt><dd>${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)}</dd></div>
<div><dt>Treatment plant unit only</dt><dd>about ${gbp(p.plantOnlyLow)} to ${gbp(p.plantOnlyHigh)}</dd></div>
<div><dt>New drainage field</dt><dd>${gbp(p.drainageFieldLow)} to ${gbp(p.drainageFieldHigh)}</dd></div>
<div><dt>Survey</dt><dd>from ${gbp(p.surveyFrom)}</dd></div>
</dl>
<section><h2>What's in a typical replacement price</h2>
<ul>
<li>Site survey and design, including plant sizing to British Water <em>Flows and Loads</em></li>
<li>The treatment plant (BS EN 12566-3)</li>
<li>Emptying and removing or filling the old tank</li>
<li>Digging, bedding, backfill and pipe connections</li>
<li>Power supply and controls by a registered electrician</li>
<li>Building regulations application</li>
<li>Commissioning, maintenance notice and handover pack</li>
<li>Basic reinstatement of the ground</li>
</ul></section>
<section><h2>What pushes the price up or down</h2>
<table>
<thead><tr><th>Factor</th><th>Lower cost</th><th>Higher cost</th></tr></thead>
<tbody>
<tr><td>Where the treated water goes</td><td>Existing outfall to a stream that flows all year</td><td>New drainage field or a pumped outfall</td></tr>
<tr><td>Plant size</td><td>2 to 3 bedrooms</td><td>5+ bedrooms, annexes, holiday lets</td></tr>
<tr><td>Ground</td><td>Easy digging, low water table</td><td>Rock, high water table, unstable ground</td></tr>
<tr><td>Access</td><td>Open access for a digger and a tanker</td><td>Narrow access, steep slopes, long pipe runs</td></tr>
<tr><td>Old tank</td><td>Filled in place</td><td>Full removal required</td></tr>
<tr><td>Reinstatement</td><td>Rough lawn</td><td>Drives, patios, landscaped gardens</td></tr>
</tbody></table></section>
<section><h2>Running costs to budget for</h2>
<ul>
<li>Emptying: typically ${gbp(p.desludgeLow)} to ${gbp(p.desludgeHigh)}, at least yearly or as the maker says</li>
<li>Yearly service: from ${gbp(p.serviceFrom)}</li>
<li>Electricity for the plant's air pump or motor</li>
</ul></section>
<section><h2>Where our figures come from</h2>
<p>Our ranges are based on published UK trade cost guides and online plant prices, checked in November 2026. They are a guide, not a quote. You get a fixed written price after a free site visit.</p></section>
${faqHtml(faqs)}
${relatedHtml(rel(['septic-tank-replacement', 'sewage-treatment-plant-installation', 'drainage-field-installation', 'phosphate-credits-somerset']))}
</div>
${ctaBand('Get your fixed price')}`;
  add(pth, page({
    path: pth, areas,
    title: 'Septic Tank Replacement Cost UK (2026 Prices) | ' + cfg.brandShort,
    description: `How much does it cost to replace a septic tank? Typical ${gbp(p.replacementTypicalLow)}–${gbp(p.replacementTypicalHigh)} for a house in Somerset and Dorset. What's included and what changes the price.`,
    h1: 'Septic tank replacement cost',
    lead: `For a normal three or four bedroom house, replacing a septic tank with a sewage treatment plant typically costs ${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)}, all in. Here is what is included and what moves the price.`,
    body, crumbs: [{ name: 'Home', path: '/' }, { name: 'Prices', path: pth }], schema: [faqSchema(faqs)],
  }), 0.9);
}

// ---------- guides ----------
{
  const pth = '/guides/';
  const body = `<div class="wrap content"><ul class="card-grid">${guides.map(g => `<li><a class="card" href="/guides/${g.slug}/"><strong>${esc(g.h1)}</strong><span>${esc(g.description)}</span></a></li>`).join('')}</ul></div>${ctaBand()}`;
  add(pth, page({ path: pth, areas, title: 'Septic Tank & Treatment Plant Guides | ' + cfg.brand,
    description: 'Plain-English guides to septic tanks and sewage treatment plants: the general binding rules, selling and buying, drainage fields, percolation tests and more.',
    h1: 'Guides', lead: 'Straight answers on septic tanks, treatment plants and the rules, written for homeowners, not engineers.',
    body, crumbs: [{ name: 'Home', path: '/' }, { name: 'Guides', path: pth }] }), 0.7);
}
for (const g of guides) {
  const pth = `/guides/${g.slug}/`;
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides/' }, { name: g.h1, path: pth }];
  const body = `
<div class="wrap content">
${sectionsHtml(g.sections)}
${faqHtml(g.faqs)}
<p class="updated">Checked against GOV.UK guidance: ${new Date(cfg.lastReviewed).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}. Rules apply to England.</p>
${relatedHtml(rel(g.related))}
</div>
${ctaBand()}`;
  const schema = [{ '@context': 'https://schema.org', '@type': 'Article', headline: g.h1, description: g.description, dateModified: cfg.lastReviewed, author: { '@id': L.abs('/#business') }, publisher: { '@id': L.abs('/#business') }, mainEntityOfPage: L.abs(pth) }];
  if (g.faqs.length) schema.push(faqSchema(g.faqs));
  add(pth, page({ path: pth, areas, title: g.title, description: g.description, h1: g.h1, lead: g.lead, body, crumbs, schema, ogType: 'article' }), 0.7);
}

// ---------- areas ----------
const CATCH = {
  slm: (a) => `<p>${esc(a.name)} is on ${esc(a.river)}, which we understand drains to the <strong>Somerset Levels and Moors</strong>, an internationally protected wetland (Ramsar site). That matters in two ways:</p>
<ul>
<li><strong>New homes</strong> in the catchment have to be "nutrient neutral" for phosphorus, which can affect the drainage design for self-builds and conversions.</li>
<li><strong>Existing homes</strong> may be able to get an upgrade funded through a phosphate credit scheme. <a href="/phosphate-credits-somerset/">How the Somerset schemes work</a>.</li>
</ul>
<p>Catchment lines don't follow town boundaries, so check your exact property with ${esc(a.council)}.</p>`,
  poole: (a) => `<p>${esc(a.name)} is on ${esc(a.river)}, which flows to <strong>Poole Harbour</strong>. New development in the Poole Harbour catchment is subject to nutrient rules, which can affect drainage design for new homes and conversions. Check your property with ${esc(a.council)}. The Somerset phosphate schemes do not apply here.</p>`,
  axe: (a) => `<p>${esc(a.name)} is on ${esc(a.river)}, a protected river with its own nutrient rules for new development. This can affect drainage design for new homes and conversions. Check your property with ${esc(a.council)}.</p>`,
  avon: (a) => `<p>${esc(a.name)} is on ${esc(a.river)}, part of the Hampshire Avon system, which has nutrient rules for new development. This can affect drainage design for new homes and conversions. Check your property with ${esc(a.council)}.</p>`,
  none: (a) => `<p>${esc(a.name)} is on ${esc(a.river)}, which we understand is outside the Somerset Levels and Moors catchment, so the Somerset phosphate credit schemes are unlikely to apply. The Environment Agency's general binding rules apply in full, as they do everywhere in England.</p>`,
};
const countyGroups = [
  { slug: 'somerset', name: 'Somerset', filter: a => a.county === 'Somerset' },
  { slug: 'dorset', name: 'Dorset', filter: a => a.county === 'Dorset' },
  { slug: 'devon-and-wiltshire', name: 'Devon and Wiltshire', filter: a => a.county === 'Devon' || a.county === 'Wiltshire' },
];
for (const a of areas) {
  const pth = `/areas/${a.slug}/`;
  const group = countyGroups.find(g => g.filter(a));
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas/' }, { name: group.name, path: `/areas/${group.slug}/` }, { name: a.name, path: pth }];
  const near = nearest(a);
  const villages = a.villages.slice(0, 6).join(', ');
  const isBase = a.slug === 'yeovil';
  const faqs = [
    { q: `Do I need to replace my septic tank when selling a house in ${a.name}?`, a: `If it discharges to a stream, river or ditch, it needs upgrading, and the buyer and seller should agree who will do the work as a condition of sale. If it goes to a working drainage field, it may be fine. A survey will tell you.` },
    { q: `Is ${a.name} in the Somerset phosphate area?`, a: a.catchment === 'slm' ? `We understand ${a.name} drains to the Somerset Levels and Moors, so phosphate rules and credit schemes may be relevant. Check your exact property with ${a.council}.` : `We understand ${a.name} is outside the Somerset Levels and Moors catchment, so the Somerset schemes are unlikely to apply.${a.catchment !== 'none' ? ' Other nutrient rules may apply to new development here.' : ''}` },
    { q: `How quickly can you get to ${a.name}?`, a: isBase ? 'We are based in Yeovil, so usually very quickly. Call and we will book a free site visit.' : `${a.name} is roughly ${a.miles} miles from our Yeovil base. Call and we will book a free site visit.` },
  ];
  const body = `
<div class="wrap content">
<dl class="glance">
<div><dt>Council</dt><dd>${esc(a.council)}</dd></div>
<div><dt>Postcodes</dt><dd>${esc(a.postcode)}</dd></div>
<div><dt>From Yeovil</dt><dd>${isBase ? 'Our base' : `about ${a.miles} miles`}</dd></div>
<div><dt>Typical replacement</dt><dd>${gbp(p.replacementTypicalLow)}–${gbp(p.replacementTypicalHigh)}</dd></div>
</dl>
<section><h2>Septic tanks and off-mains drainage around ${esc(a.name)}</h2>
<p>${esc(a.local)}</p>
<p>We work across ${esc(a.name)} and nearby villages including ${esc(villages)}.</p></section>
<section><h2>Local rules: ${esc(a.river.replace(/^the /, ''))} and the catchment</h2>
${CATCH[a.catchment](a)}
${a.catchmentNote ? `<p>${esc(a.catchmentNote)}</p>` : ''}
<p>Building regulations approval for a new treatment plant or septic tank goes through <a href="${a.councilUrl}" rel="noopener">${esc(a.council)}</a> building control or a registered building control approver. We prepare and submit the application as part of the job.</p></section>
<section><h2>What we do in ${esc(a.name)}</h2>
<ul>
<li><a href="/septic-tank-replacement/">Septic tank replacement</a>: old or non-compliant tanks out, compliant systems in</li>
<li><a href="/sewage-treatment-plant-installation/">Sewage treatment plant installation</a>, correctly sized</li>
<li><a href="/drainage-field-installation/">Drainage fields</a> with proper percolation tests</li>
<li><a href="/septic-tank-survey/">Septic tank surveys</a> for buyers and sellers</li>
<li><a href="/selling-a-house-with-a-septic-tank/">Help with house sales</a>, including the written description the rules require</li>
<li><a href="/cesspit-replacement/">Cesspit replacement</a> and <a href="/new-build-off-mains-drainage/">new-build drainage</a></li>
<li><a href="/treatment-plant-servicing/">Treatment plant servicing</a></li>
</ul></section>
<section><h2>Septic tank replacement cost in ${esc(a.name)}</h2>
<p>For a typical house, a full replacement with a treatment plant usually costs ${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)}. ${a.catchment === 'slm' ? 'Before paying, check whether a phosphate credit scheme could fund your upgrade. ' : ''}See <a href="/septic-tank-replacement-cost/">what changes the price</a>.</p></section>
${faqHtml(faqs)}
<aside class="related"><h2>Nearby areas</h2><ul class="area-pills">${near.map(n => `<li><a href="/areas/${n.slug}/">${esc(n.name)}</a></li>`).join('')}</ul></aside>
</div>
${ctaBand(`Free site visit in ${esc(a.name)}`)}`;
  const title = `Septic Tank Replacement ${a.name} | ${cfg.brand}`.length <= 62 ? `Septic Tank Replacement ${a.name} | ${cfg.brand}` : `Septic Tank Replacement ${a.name} | ${cfg.brandShort}`;
  add(pth, page({
    path: pth, areas, title,
    description: `Septic tank replacement and treatment plants in ${a.name} and villages like ${a.villages[0]}. Yeovil-based team, free site visit, fixed written quotes.`,
    h1: `Septic tank replacement in ${a.name}`,
    lead: isBase ? 'Yeovil is our home. We replace old septic tanks with modern treatment plants across the town and the villages around it, with a free site visit and a fixed written quote.' : `We replace old and failing septic tanks with modern treatment plants in ${a.name} and the surrounding villages, about ${a.miles} miles from our Yeovil base.`,
    body, crumbs, schema: [faqSchema(faqs)],
  }), isBase ? 0.9 : 0.7);
}
for (const g of countyGroups) {
  const pth = `/areas/${g.slug}/`;
  const list = areas.filter(g.filter).sort((x, y) => x.miles - y.miles);
  const intro = {
    somerset: 'South and central Somerset is our core area. Much of it drains to the Somerset Levels and Moors, which brings phosphate rules for new homes and funded upgrade schemes for some existing ones.',
    dorset: 'North and west Dorset, from Sherborne and the Blackmore Vale to Bridport and Dorchester. Ground ranges from heavy vale clay to fast-draining chalk, so every design starts with a proper test.',
    'devon-and-wiltshire': 'East Devon around Axminster and Honiton, and south-west Wiltshire around Mere and Warminster, are within an hour of our Yeovil base. Both areas have a lot of isolated farms and cottages a long way from any sewer. The River Axe in Devon and the Hampshire Avon system in Wiltshire (which includes the Wylye at Warminster) have their own nutrient rules for new development, so new homes and conversions need careful drainage design. The general binding rules for existing septic tanks and treatment plants are the same here as anywhere in England.',
  }[g.slug];
  const body = `<div class="wrap content"><p>${intro}</p><ul class="card-grid">${list.map(a => `<li><a class="card" href="/areas/${a.slug}/"><strong>${esc(a.name)}</strong><span>${a.slug === 'yeovil' ? 'Our base' : `About ${a.miles} miles from Yeovil`}. ${esc(a.villages.slice(0, 3).join(', '))} and nearby.</span></a></li>`).join('')}</ul></div>${ctaBand()}`;
  add(pth, page({ path: pth, areas, title: `Septic Tank Replacement ${g.name} | ${cfg.brand}`,
    description: `Septic tank replacement and sewage treatment plant installation across ${g.name}. ${list.length} towns covered from our Yeovil base. Free site visits, fixed quotes.`,
    h1: `Septic tank replacement in ${g.name}`, lead: `Towns and villages we cover in ${g.name}, within about an hour of Yeovil.`,
    body, crumbs: [{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas/' }, { name: g.name, path: pth }] }), 0.7);
}
{
  const pth = '/areas/';
  const body = `<div class="wrap content">
<p>We are based in Yeovil and cover towns and villages within about an hour's drive. If you are not sure whether we cover you, <a href="/contact/">just ask</a>.</p>
<p>Each town page explains the local picture: which council handles building control, which river the area drains to, and whether phosphate or other nutrient rules are likely to apply. That matters because the right system for a cottage on the Somerset Levels is often very different from one on the Dorset chalk or the Mendip limestone.</p>
${countyGroups.map(g => `<section><h2><a href="/areas/${g.slug}/">${g.name}</a></h2><ul class="area-pills">${areas.filter(g.filter).sort((x, y) => x.miles - y.miles).map(a => `<li><a href="/areas/${a.slug}/">${esc(a.name)}</a></li>`).join('')}</ul></section>`).join('')}
</div>${ctaBand()}`;
  add(pth, page({ path: pth, areas, title: 'Areas We Cover: Somerset, Dorset, Devon, Wiltshire | ' + cfg.brand,
    description: 'Septic tank replacement within an hour of Yeovil: Somerset, north and west Dorset, east Devon and south-west Wiltshire. Find your town.',
    h1: 'Areas we cover', lead: 'Yeovil and about an hour around.', body, crumbs: [{ name: 'Home', path: '/' }, { name: 'Areas', path: pth }] }), 0.8);
}

// ---------- FAQ ----------
{
  const pth = '/faq/';
  const all = [...services.flatMap(s => s.faqs), ...guides.flatMap(g => g.faqs)];
  const seen = new Set();
  const faqs = all.filter(f => !seen.has(f.q) && seen.add(f.q));
  const body = `<div class="wrap content">${faqHtml(faqs, 'All questions')}</div>${ctaBand('Question not answered?')}`;
  add(pth, page({ path: pth, areas, title: 'Septic Tank & Treatment Plant FAQs | ' + cfg.brand,
    description: 'Answers to common questions about septic tank replacement, treatment plants, selling a house with a septic tank, costs and the general binding rules.',
    h1: 'Frequently asked questions', lead: 'Straight answers to the questions we are asked most.', body,
    crumbs: [{ name: 'Home', path: '/' }, { name: 'FAQs', path: pth }], schema: [faqSchema(faqs)] }), 0.5);
}

// ---------- about ----------
{
  const pth = '/about/';
  const body = `<div class="wrap content">
<section><h2>Who we are</h2><p>${esc(cfg.brand)} is a Yeovil-based firm that specialises in replacing old septic tanks with modern sewage treatment plants and drainage fields, across Somerset, Dorset and the edges of Devon and Wiltshire.</p>
<!-- Rich to update: the founder's story, experience and team. Do not publish invented history. --></section>
<section><h2>How we work</h2>
<ul>
<li><strong>Honest first.</strong> If you can connect to the sewer, keep your existing system, or get a funded upgrade, we will say so.</li>
<li><strong>Fixed written quotes.</strong> After a free site visit.</li>
<li><strong>Done properly.</strong> Designed to the general binding rules, British Standards and Approved Document H, with building control sign-off.</li>
<li><strong>Tidy.</strong> We protect your garden as far as we can and reinstate it when we finish.</li>
<li><strong>Paperwork.</strong> A handover pack with everything you need to run the system and to sell your home one day.</li>
</ul></section>
<section><h2>Why "Yeo"?</h2><p>The River Yeo runs through Yeovil, and gave the town its name. Our job is getting clean water back into rivers like it, so it felt like the right name for a Yeovil firm.</p></section>
</div>${ctaBand()}`;
  add(pth, page({ path: pth, areas, title: 'About Us | ' + cfg.brand + ', Yeovil',
    description: `${cfg.brand} is a Yeovil-based septic tank replacement and treatment plant specialist covering Somerset, Dorset, east Devon and south-west Wiltshire.`,
    h1: 'About us', lead: 'A local team that does one job well: replacing old septic tanks with systems that meet today\'s rules.', body,
    crumbs: [{ name: 'Home', path: '/' }, { name: 'About', path: pth }] }), 0.5);
}

// ---------- contact ----------
{
  const pth = '/contact/';
  const formReady = !isTodo(cfg.formAction);
  const form = `<form class="quote-form" method="post" action="${formReady ? esc(cfg.formAction) : '#'}"${formReady ? '' : ' data-disabled="true"'}>
<p><label for="f-name">Name</label><input id="f-name" name="name" autocomplete="name" required></p>
<p><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required></p>
<p><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email"></p>
<p><label for="f-town">Town or village</label><input id="f-town" name="town" autocomplete="address-level2" required></p>
<p><label for="f-need">What do you need?</label><select id="f-need" name="need">
<option>Septic tank replacement</option><option>Treatment plant installation</option><option>Survey for a house sale</option><option>Drainage field</option><option>Cesspit replacement</option><option>New build / conversion</option><option>Servicing</option><option>Not sure</option></select></p>
<p><label for="f-sale">Are you buying or selling?</label><select id="f-sale" name="sale"><option>No</option><option>Selling</option><option>Buying</option></select></p>
<p><label for="f-msg">Anything else?</label><textarea id="f-msg" name="message" rows="5" placeholder="Where does your tank discharge, if you know? Any completion date?"></textarea></p>
<p class="small">We only use your details to reply to your enquiry. See our <a href="/privacy/">privacy notice</a>.</p>
<p><button class="btn btn-gold" type="submit"${formReady ? '' : ' disabled'}>Request a free site visit</button></p>
${formReady ? '' : '<p class="small notice">Online form coming soon. Please call or email us for now.</p>'}
</form>`;
  const body = `<div class="wrap two-col content">
<div>${form}</div>
<div>
<h2>Call or email</h2>
<p><a class="btn btn-green" href="${phoneHref()}">${phoneLabel()}</a></p>
${isTodo(cfg.email) ? '' : `<p><a href="mailto:${esc(cfg.email)}">${esc(cfg.email)}</a></p>`}
<p>${esc(cfg.hours)}</p>
<h2>What happens next</h2>
<ol><li>We call you back to ask a few questions.</li><li>We book a free site visit at a time that suits you.</li><li>You get a fixed written quote.</li></ol>
<h2>Where we work</h2>
<p>Yeovil and about an hour around. <a href="/areas/">See all areas</a>.</p>
</div></div>`;
  add(pth, page({ path: pth, areas, title: 'Contact Us: Free Site Visit & Quote | ' + cfg.brand,
    description: 'Book a free site visit for septic tank replacement or a treatment plant in Yeovil, Somerset or Dorset. Call or send your details and we will get back to you.',
    h1: 'Book a free site visit', lead: 'Tell us a little about your property and we will call you back.', body,
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Contact', path: pth }] }), 0.6);
}

// ---------- privacy ----------
{
  const pth = '/privacy/';
  const body = `<div class="wrap content">
<p><strong>Draft. Rich to update with the registered company name, address and ICO registration before launch.</strong></p>
<h2>Who we are</h2><p>${esc(cfg.brand)}, Yeovil, Somerset.</p>
<h2>What we collect</h2><p>If you contact us, we collect the details you give us (name, phone, email, town and your message) to reply to your enquiry and, if you go ahead, to carry out the work.</p>
<h2>Analytics</h2><p>We use privacy-friendly analytics that do not use cookies or track you across sites. We do not use advertising trackers.</p>
<h2>How long we keep it</h2><p>Enquiries that don't lead to work are deleted after 12 months. Customer records are kept as long as needed for guarantees, tax and legal reasons.</p>
<h2>Your rights</h2><p>You can ask to see, correct or delete your data. Contact us using the details on our <a href="/contact/">contact page</a>. You can also complain to the Information Commissioner's Office (ico.org.uk).</p>
</div>`;
  add(pth, page({ path: pth, areas, title: 'Privacy Notice | ' + cfg.brand, description: `How ${cfg.brand} collects, uses and stores the personal details you give us when you get in touch.`, h1: 'Privacy notice', body,
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Privacy', path: pth }] }), 0.2);
}

// ---------- 404 ----------
write('/404.html', page({ path: '/404.html', areas, noindex: true, title: 'Page not found | ' + cfg.brand, description: 'Page not found.', h1: 'Page not found',
  lead: 'Sorry, that page doesn\'t exist. Try one of these:',
  body: `<div class="wrap content"><ul><li><a href="/">Home</a></li><li><a href="/septic-tank-replacement/">Septic tank replacement</a></li><li><a href="/areas/">Areas we cover</a></li><li><a href="/contact/">Contact</a></li></ul></div>` }));

// ---------- sitemap, robots, headers ----------
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(pg => `  <url><loc>${L.abs(pg.path)}</loc><lastmod>${today}</lastmod><priority>${pg.priority.toFixed(1)}</priority></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${L.abs('/sitemap.xml')}\n`);

// ---------- warnings ----------
const todos = Object.entries(cfg).filter(([, v]) => typeof v === 'string' && v.startsWith('TODO')).map(([k]) => k);
console.log(`Built ${pages.length} pages into site/`);
if (todos.length) console.warn(`WARNING: placeholders still set in src/config.js: ${todos.join(', ')}`);
const farOff = areas.filter(a => a.slug !== 'yeovil').filter(a => { const d = dist(yeovil, a); return a.miles < d * 0.95 || a.miles > d * 1.7; });
if (farOff.length) console.warn('WARNING: road miles look wrong vs straight-line distance for: ' + farOff.map(a => `${a.name} (${a.miles} vs ${dist(yeovil, a).toFixed(1)} straight)`).join(', '));
