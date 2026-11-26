# Launch checklist

Everything Rich needs to do or decide before the site goes live. Tick as you go.

## Decisions (Rich to update)
- [x] **Brand name.** Mendip Drainage (chosen 25 Nov 2026, base moved from Yeovil to Wells; replaced Yeo Drainage).
- [ ] Check "Mendip Drainage" on Companies House and the IPO trade mark search before registering the company.
- [x] **Domain.** mendipdrainage.com bought on Cloudflare (25 Nov 2026).
- [ ] Optional: buy mendipdrainage.co.uk if free and redirect it to the .com.
- [ ] **Prices.** Confirm or change every figure in `src/config.js` → `prices` against real supplier quotes and labour costs. Confirm they include VAT.
- [ ] **Claims on the site to confirm are true:** "usually 3 to 5 working days on site", "Part P registered electrician" for the power supply, "we prepare and submit the building control application" and the opening hours.
- [ ] **Guarantee terms** for installs and workmanship, then add them to the site.

## Business setup
- [ ] Company registration; add name and number to `src/config.js`.
- [ ] Business phone number (a local 01935 number builds trust); add to `src/config.js`.
- [x] Business email on the new domain: hello@mendipdrainage.com (and any other address) forwards to Gmail via Cloudflare Email Routing. Receive only.
- [ ] Optional: to reply as hello@, set up Gmail "Send mail as" with an SMTP service, then add it to the SPF record.
- [ ] Public liability insurance (and employer's liability if hiring).
- [ ] Waste carrier registration with the Environment Agency, if you will carry any waste yourself. Otherwise use a registered tanker firm.
- [ ] British Water accreditation: optional. Their service engineer course is mainly for servicing, which we do not offer; check whether an installer route exists.
- [ ] Manufacturer approved installer status (Klargester, Marsh, Tricel, Graf, WPL).
- [ ] Trade accounts with local merchants (see `research/suppliers-and-costs.md`).
- [ ] Call Somerset Council and Dorset Council building control: fee for a treatment plant replacement, and how they like applications submitted.
- [ ] ICO data protection fee registration; update the privacy page.

## Website
- [x] Contact form: Web3Forms (free, 250 enquiries a month), account mendipdrainage@richietaylor.net, set up 26 Nov 2026. Enquiries are emailed there, then on to Gmail. After sending, visitors land on /thank-you/.
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
- [x] mendipdrainage.com and www attached to the mendipdrainage Pages project (25 Nov 2026).
- [ ] Optional: make updates automatic. Delete yeodrainage, create a new Git-connected project, attach the domain to it, then delete the direct-upload project.
- [x] HTTPS forced, mendipdrainage.com redirects to https://www.mendipdrainage.com (matches `url`).
- [x] Cloudflare Web Analytics on for mendipdrainage.com (automatic setup, no script in the code). The unused yeodrainage.pages.dev entry can be deleted.
- [x] Google Search Console: domain verified by DNS, sitemap submitted (25 Nov 2026). Check back in a few days that it shows Success, then request indexing for the home page.
- [ ] Bing Webmaster Tools: import from Search Console.

## Local SEO (the biggest win for a local trade)
- [ ] **Google Business Profile**: category "Septic system service" (plus "Drainage service"), service area set to the towns in `research/service-area.md`, not a shop address if run from home. Add services, photos, opening hours, website link.
- [ ] Ask every customer for a Google review (a printed card in the handover pack).
- [ ] Citations: Checkatrade, TrustATrader, Yell, Thomson Local, Bing Places, Apple Business Connect, British Water register. Name, address and phone must be identical everywhere.
- [ ] Introduce yourself to estate agents and conveyancers in Wells, Glastonbury, Street, Shepton Mallet and Cheddar (selling-a-house is the main lead source).
- [ ] Run the keyword map head terms through Google Keyword Planner and add volumes to `seo/keyword-map.md`.
