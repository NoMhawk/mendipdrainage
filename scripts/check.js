#!/usr/bin/env node
// Quality checks on the built site. Run after build: node scripts/check.js
// Exits with code 1 if any ERROR is found. WARN lines are for review.
const fs = require('fs');
const path = require('path');
const cfg = require('../src/config');

const SITE = path.join(__dirname, '..', 'site');
const errors = [], warns = [];
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : files.push(p); } })(SITE);
const htmlFiles = files.filter(f => f.endsWith('.html'));
const urlOf = (f) => { const rel = '/' + path.relative(SITE, f).replace(/\\/g, '/'); return rel.endsWith('/index.html') ? rel.slice(0, -10) : rel; };
const exists = (u) => {
  const clean = u.split('#')[0].split('?')[0];
  if (clean === '' ) return true;
  const p = path.join(SITE, clean);
  return (fs.existsSync(p) && fs.statSync(p).isFile()) || fs.existsSync(path.join(p, 'index.html'));
};
const text = (html) => html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

const titles = {}, descs = {}, mains = {};
const sitemap = fs.readFileSync(path.join(SITE, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(cfg.url, '')));

for (const f of htmlFiles) {
  const u = urlOf(f);
  const html = fs.readFileSync(f, 'utf8');
  const is404 = u === '/404.html' || html.includes('<meta name="robots" content="noindex">'); // noindex pages (404, thank-you) stay out of the sitemap
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (!title) errors.push(`${u}: no <title>`);
  else {
    const t = title.replace(/&amp;/g, '&');
    if (t.length > 65) warns.push(`${u}: title ${t.length} chars (aim <= 65): ${t}`);
    if (t.length < 25) warns.push(`${u}: title short (${t.length})`);
    (titles[t] = titles[t] || []).push(u);
  }
  if (!desc) errors.push(`${u}: no meta description`);
  else {
    const d = desc.replace(/&amp;/g, '&').replace(/&#39;|&quot;/g, "'");
    if (!is404 && (d.length > 165 || d.length < 70)) warns.push(`${u}: description ${d.length} chars (aim 70-160)`);
    (descs[d] = descs[d] || []).push(u);
  }
  if (h1s !== 1) errors.push(`${u}: ${h1s} <h1> tags`);
  if (!canon) errors.push(`${u}: no canonical`);
  else if (canon !== cfg.url + u) errors.push(`${u}: canonical ${canon} does not match`);
  if (!is404 && !sitemapUrls.has(u)) errors.push(`${u}: missing from sitemap`);
  if (!/<html lang="en-GB">/.test(html)) errors.push(`${u}: missing lang`);
  if (!/name="viewport"/.test(html)) errors.push(`${u}: missing viewport`);
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { errors.push(`${u}: bad JSON-LD (${e.message})`); }
  }
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const h = m[1];
    if (/^(https?:|mailto:|tel:|#)/.test(h)) continue;
    if (!h.startsWith('/')) { errors.push(`${u}: relative link ${h}`); continue; }
    if (!exists(h)) errors.push(`${u}: broken link ${h}`);
    if (!h.includes('.') && !h.endsWith('/') && !h.includes('#')) warns.push(`${u}: link without trailing slash ${h}`);
  }
  const visible = text(html);
  if (/\bTODO\b/.test(visible)) errors.push(`${u}: visible TODO text`);
  if (/undefined|NaN|\[object Object\]/.test(visible)) errors.push(`${u}: template error text (undefined/NaN/object)`);
  if (/â€|Â|Ã|�/.test(html)) errors.push(`${u}: garbled characters (encoding problem, e.g. "â€“")`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]+"/.test(m[0])) errors.push(`${u}: image without alt text`);
    const src = (m[0].match(/src="([^"]+)"/) || [])[1];
    if (src && src.startsWith('/') && !exists(src)) errors.push(`${u}: missing image ${src}`);
  }
  if (/<p>\s*<\/p>/.test(html)) warns.push(`${u}: empty <p>`);
  const main = (html.match(/<main[\s\S]*<\/main>/) || [''])[0];
  mains[u] = text(main);
  const words = mains[u].split(' ').length;
  if (!is404 && words < 250) warns.push(`${u}: thin content (${words} words in main)`);
}
for (const u of sitemapUrls) if (!exists(u)) errors.push(`sitemap: ${u} has no page`);
for (const [t, us] of Object.entries(titles)) if (us.length > 1) errors.push(`duplicate title "${t}": ${us.join(', ')}`);
for (const [d, us] of Object.entries(descs)) if (us.length > 1) errors.push(`duplicate description: ${us.join(', ')}`);

// Near-duplicate check for town pages (doorway risk): Jaccard on 5-word shingles.
const shingles = (s) => { const w = s.toLowerCase().split(' '); const set = new Set(); for (let i = 0; i + 5 <= w.length; i++) set.add(w.slice(i, i + 5).join(' ')); return set; };
const towns = Object.keys(mains).filter(u => /^\/areas\/[^/]+\/$/.test(u) && !['/areas/somerset/', '/areas/dorset/', '/areas/devon-and-wiltshire/'].includes(u));
const sh = Object.fromEntries(towns.map(u => [u, shingles(mains[u])]));
let maxSim = 0, maxPair = '';
for (let i = 0; i < towns.length; i++) for (let j = i + 1; j < towns.length; j++) {
  const a = sh[towns[i]], b = sh[towns[j]]; let inter = 0; for (const x of a) if (b.has(x)) inter++;
  const sim = inter / (a.size + b.size - inter);
  if (sim > maxSim) { maxSim = sim; maxPair = `${towns[i]} vs ${towns[j]}`; }
}
console.log(`Checked ${htmlFiles.length} HTML files, ${sitemapUrls.size} sitemap URLs.`);
console.log(`Town pages: highest 5-word-shingle similarity ${(maxSim * 100).toFixed(0)}% (${maxPair}).`);
if (maxSim > 0.8) warns.push(`town pages very similar (${(maxSim * 100).toFixed(0)}%): add more unique local copy`);
warns.forEach(w => console.log('WARN  ' + w));
errors.forEach(e => console.log('ERROR ' + e));
console.log(`${errors.length} errors, ${warns.length} warnings.`);
process.exit(errors.length ? 1 : 0);
