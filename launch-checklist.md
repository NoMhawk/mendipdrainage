# Launch checklist

Everything Rich needs to do or decide before the site goes live. Tick as you go.

## Decisions (Rich to update)
- [x] **Brand name.** Mendip Drainage (chosen 25 Nov 2026, base moved from Yeovil to Wells; replaced Yeo Drainage).
- [ ] Check "Mendip Drainage" on Companies House and the IPO trade mark search before registering the company.
- [ ] **Domain.** Buy mendipdrainage.com now (it was unregistered on 25 Nov 2026), plus mendipdrainage.co.uk if free, pointed at the .com.
- [ ] **Prices.** Confirm or change every figure in `src/config.js` → `prices` against real supplier quotes and labour costs. Confirm they include VAT.
- [ ] **Claims on the site to confirm are true:** "usually 3 to 5 working days on site", "Part P registered electrician" for the power supply, "we prepare and submit the building control application" and the opening hours.
- [ ] **Guarantee terms** for installs and workmanship, then add them to the site.

## Business setup
- [ ] Company registration; add name and number to `src/config.js`.
- [ ] Business phone number (a local 01935 number builds trust); add to `src/config.js`.
- [ ] Business email on the new domain.
- [ ] Public liability insurance (and employer's liability if hiring).
- [ ] Waste carrier registration with the Environment Agency, if you will carry any waste yourself. Otherwise use a registered tanker firm.
- [ ] British Water accreditation: optional. Their service engineer course is mainly for servicing, which we do not offer; check whether an installer route exists.
- [ ] Manufacturer approved installer status (Klargester, Marsh, Tricel, Graf, WPL).
- [ ] Trade accounts with local merchants (see `research/suppliers-and-costs.md`).
- [ ] Call Somerset Council and Dorset Council building control: fee for a treatment plant replacement, and how they like applications submitted.
- [ ] ICO data protection fee registration; update the privacy page.

## Website
- [ ] Contact form endpoint: set `formAction` in `src/config.js` (Formspree, Web3Forms or a Cloudflare Pages Function). Test it.
- [ ] Re-run the competitor research for the Wells area (it was done for Yeovil).
- [ ] Confirm the phosphate catchment for Cheddar, Wedmore, Burnham-on-Sea and Weston-super-Mare on the Natural England / MAGIC map, then set `catchment` in `src/data/areas.js` (they currently say "not certain").
- [ ] Check every town's road miles in Google Maps and fix `miles` in `src/data/areas.js`.
- [ ] About page: add the real founder story and team photo (no invented history).
- [ ] Have a designer refine the Mendip logo mark before printing vans and signs.
- [ ] Replace or add to the SVG illustrations with real job photos once jobs are done.
- [ ] Real photos of jobs (with customer permission, no house numbers).
- [ ] `node build.js` shows no placeholder warnings, and `node scripts/check.js` shows 0 errors.

## Go live
- [x] Cloudflare Pages project "yeodrainage" connected to GitHub NoMhawk/soakaway, output folder `site` (done 25 Nov 2026). https://yeodrainage.pages.dev, redeploys on every push to main.
- [x] Cloudflare Pages project "mendipdrainage" (direct upload, 25 Nov 2026). https://mendipdrainage.pages.dev is the address to use until the domain is bought. It does not update from GitHub: see CLAUDE.md for the refresh steps.
- [ ] When the domain is bought: attach mendipdrainage.com to the Pages project that should serve it. Ideally move the GitHub connection to that project (delete yeodrainage, then connect the repo to a Git-connected project) so updates are automatic again.
- [ ] Custom domain on Cloudflare, HTTPS on, redirect the non-www to the www version (or the other way round; it must match `url`).
- [ ] Cloudflare Web Analytics on. Do this after the domain is bought. A Web Analytics entry for yeodrainage.pages.dev was started but its script is not on the site yet: add the new domain to it (or replace it), then add the beacon script to `src/layout.js`.
- [ ] Google Search Console: verify the domain, submit `sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console.

## Local SEO (the biggest win for a local trade)
- [ ] **Google Business Profile**: category "Septic system service" (plus "Drainage service"), service area set to the towns in `research/service-area.md`, not a shop address if run from home. Add services, photos, opening hours, website link.
- [ ] Ask every customer for a Google review (a printed card in the handover pack).
- [ ] Citations: Checkatrade, TrustATrader, Yell, Thomson Local, Bing Places, Apple Business Connect, British Water register. Name, address and phone must be identical everywhere.
- [ ] Introduce yourself to estate agents and conveyancers in Wells, Glastonbury, Street, Shepton Mallet and Cheddar (selling-a-house is the main lead source).
- [ ] Run the keyword map head terms through Google Keyword Planner and add volumes to `seo/keyword-map.md`.
