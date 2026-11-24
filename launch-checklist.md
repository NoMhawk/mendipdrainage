# Launch checklist

Everything Rich needs to do or decide before the site goes live. Tick as you go.

## Decisions (Rich to update)
- [x] **Brand name.** Yeo Drainage (chosen 24 Nov 2026).
- [ ] Check "Yeo Drainage" on Companies House and the IPO trade mark search before registering the company.
- [ ] **Domain.** Buy yeodrainage.com now (it was unregistered on 24 Nov 2026), plus yeodrainage.co.uk if free, pointed at the .com.
- [ ] **Prices.** Confirm or change every figure in `src/config.js` → `prices` against real supplier quotes and labour costs. Confirm they include VAT.
- [ ] **Claims on the site to confirm are true:** "usually 3 to 5 working days on site", "Part P registered electrician" for the power supply, "we prepare and submit the building control application", "service plans available", and the opening hours.
- [ ] **Guarantee terms** for installs and workmanship, then add them to the site.
- [ ] **Service plan prices** (the servicing page currently says they are being finalised).

## Business setup
- [ ] Company registration; add name and number to `src/config.js`.
- [ ] Business phone number (a local 01935 number builds trust); add to `src/config.js`.
- [ ] Business email on the new domain.
- [ ] Public liability insurance (and employer's liability if hiring).
- [ ] Waste carrier registration with the Environment Agency, if you will carry any waste yourself. Otherwise use a registered tanker firm.
- [ ] British Water accredited service engineer course (big trust signal; only one competitor shows it).
- [ ] Manufacturer approved installer status (Klargester, Marsh, Tricel, Graf, WPL).
- [ ] Trade accounts with local merchants (see `research/suppliers-and-costs.md`).
- [ ] Call Somerset Council and Dorset Council building control: fee for a treatment plant replacement, and how they like applications submitted.
- [ ] ICO data protection fee registration; update the privacy page.

## Website
- [ ] Contact form endpoint: set `formAction` in `src/config.js` (Formspree, Web3Forms or a Cloudflare Pages Function). Test it.
- [ ] Check every town's road miles in Google Maps and fix `miles` in `src/data/areas.js`.
- [ ] About page: add the real founder story and team photo (no invented history).
- [ ] Have a designer refine the Yeo logo mark before printing vans and signs.
- [ ] Replace or add to the SVG illustrations with real job photos once jobs are done.
- [ ] Real photos of jobs (with customer permission, no house numbers).
- [ ] `node build.js` shows no placeholder warnings, and `node scripts/check.js` shows 0 errors.

## Go live
- [ ] Cloudflare Pages project connected to GitHub NoMhawk/soakaway, output folder `site`.
- [ ] Custom domain on Cloudflare, HTTPS on, redirect the non-www to the www version (or the other way round; it must match `url`).
- [ ] Cloudflare Web Analytics on.
- [ ] Google Search Console: verify the domain, submit `sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console.

## Local SEO (the biggest win for a local trade)
- [ ] **Google Business Profile**: category "Septic system service" (plus "Drainage service"), service area set to the towns in `research/service-area.md`, not a shop address if run from home. Add services, photos, opening hours, website link.
- [ ] Ask every customer for a Google review (a printed card in the handover pack).
- [ ] Citations: Checkatrade, TrustATrader, Yell, Thomson Local, Bing Places, Apple Business Connect, British Water register. Name, address and phone must be identical everywhere.
- [ ] Introduce yourself to estate agents and conveyancers in Yeovil, Sherborne, Crewkerne, Castle Cary and Somerton (selling-a-house is the main lead source).
- [ ] Run the keyword map head terms through Google Keyword Planner and add volumes to `seo/keyword-map.md`.
