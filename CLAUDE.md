# Soakaway project: onboarding guide

This folder is the workspace for a local business website. The business replaces old septic tanks with modern sewage treatment plants, for homes within about an hour of Wells, Somerset. Brand: Mendip Drainage (mendipdrainage.com). The site is built to win local search traffic, with many SEO subpages.

## Read first
Before any job, read `brand/brand-context.md`. It covers what the business is, who it's for, the brand, the content rules and the privacy rules. If something is marked **NOT DECIDED** or **Rich to update**, ask Rich. Never guess.

Other key files:
- `research/regulations.md`: the rules (GOV.UK general binding rules and Approved Document H). **Every legal or technical claim on the site must match this file.**
- `research/competitors.md`, `research/suppliers-and-costs.md`, `research/service-area.md`: market research.
- `brand/branding.md`: name, colours, logo, voice.
- `seo/keyword-map.md`: which page targets which keyword. One main keyword per page.
- `seo/seo-checklist.md`: the rules every page must pass.
- `launch-checklist.md`: everything Rich must do or decide before going live.

## Always
- Never invent facts, numbers, prices, reviews, testimonials, accreditations, years in business, job counts or case studies.
- Rules are England only. Say so where it matters.
- Never promise a free upgrade or guaranteed compliance.
- Prices come only from `src/config.js` and are always shown as ranges or "from" prices.
- Mark gaps as "Rich to update:", never "Owner to add".
- Never put personal data (customer names, addresses, house numbers) on the site.

## Working style
- Plain English, short sentences, UK spelling.
- Ask before big decisions: the brand name, prices, guarantees, anything that commits the business.
- Keep it low cost and simple. Static HTML, no frameworks, no third-party scripts.

## Website
- Source: `src/` (data and templates) and `static/` (CSS, logo, diagrams in `static/assets/img/`, the checker script `static/assets/site.js`, Cloudflare `_headers`).
- Diagrams: add to a page section with `fig: { src, alt, caption }` (or an array of two). Reusable blocks: `add: 'journey' | 'proscons' | 'checker'`. Diagrams and checker answers must match `research/regulations.md`.
- Audience: homeowners 30+ with no trade knowledge. Explain every technical word, and lead with diagrams, prices and what happens next.
- Build: `node build.js` writes the whole site to `site/`. No npm packages needed (Node 18+).
- Check: `node scripts/check.js`. Must show **0 errors** before any commit. It checks titles, descriptions, one H1, canonicals, sitemap, JSON-LD, broken internal links, visible TODOs and near-duplicate town pages.
- Preview: `python -m http.server 8080 --directory site` (or the `site` entry in `.claude/launch.json`).
- `site/` is committed so the host can serve it with no build step. Always rebuild before committing.
- Hosting: Cloudflare Pages. Live site: **https://www.mendipdrainage.com** (domain bought on Cloudflare, 25 Nov 2026).
  - Code: GitHub **NoMhawk/mendipdrainage** (public). Moved from NoMhawk/soakaway on 26 Nov 2026.
  - **mendipdrainage** Pages project is connected to that repo (branch `main`, no build command, output folder `site`). It serves www.mendipdrainage.com and mendipdrainage.com (and mendipdrainage.pages.dev). Every push to main goes live in about a minute, so: `node build.js`, `node scripts/check.js` (0 errors), commit, push.
  - Domain setup (all in Cloudflare): redirect rule "Bare domain to www" (301, keeps the path and query), Always Use HTTPS on, Web Analytics with automatic setup (no script in the code, no cookies), Email Routing: hello@ and a catch-all forward to Rich's Gmail. Replies go out as hello@ through Gmail "Send mail as" via SMTP2GO (account smtp2go@richietaylor.net, SMTP user `mendipdrainage`, server mail-eu.smtp2go.com:587). SMTP2GO's DNS records (CNAMEs em1267897, s1267897._domainkey, link) must stay, set to DNS only. DMARC (`_dmarc` TXT, p=none) reports go to Cloudflare DMARC Management.
  - Google Search Console: domain property `mendipdrainage.com`, verified by a TXT record in Cloudflare DNS (do not delete it), sitemap `https://www.mendipdrainage.com/sitemap.xml` submitted.

### Adding or changing pages
- Service pages: `src/data/services.js`. Guides: `src/data/guides.js`. Towns: `src/data/areas.js`. Core pages (home, prices, about, contact, FAQ, hubs): `build.js`.
- New pages are added to the sitemap automatically and get a canonical, breadcrumbs and schema.
- Before adding a page, check `seo/keyword-map.md` so it doesn't target a keyword another page already owns. Add the new page to the map.
- Each town page needs its own `local` paragraph and real villages. Never copy one town's text to another.
- After a page goes live, request indexing in Google Search Console.

## Agents
Agents live in `.claude/agents/`:
- `seo-page-writer`: writes a new service page or guide from the research files.
- `town-page-writer`: adds or improves a town page with real local detail.
- `fact-checker`: checks site content against `research/regulations.md` and the config. Read-only report.
- `seo-auditor`: builds, runs the checks, reviews keyword coverage and cannibalisation. Report only.
- `competitor-researcher`: refreshes `research/competitors.md` from the web.
