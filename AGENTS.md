# AGENTS.md

Instructions for any AI coding agent (Claude Code, Codex, Cursor, Copilot and others) working in this repository. Claude Code also reads `CLAUDE.md`; both files agree, so if they ever conflict, follow `CLAUDE.md` and tell Rich.

## Project
A static website for a Yeovil-based septic tank replacement business (working name **Hamstone Drainage**, not final). It targets local search across Somerset, Dorset, east Devon and south-west Wiltshire with service pages, guides and one page per town.

## Before you change anything
1. Read `brand/brand-context.md` (business, audience, content and privacy rules).
2. Read `research/regulations.md` if your change mentions any rule, distance, standard, volume or date.
3. Read `seo/keyword-map.md` if you are adding or retitling a page.

## Setup and commands
- Requires Node 18+. No `npm install`; there are no dependencies.
- Build: `node build.js` → writes `site/`
- Test: `node scripts/check.js` → must exit 0 (0 errors)
- Preview: `python -m http.server 8080 --directory site`

## Code layout
```
build.js               page generation, core pages, sitemap, robots
src/config.js          brand, contact details, prices (single source of truth)
src/layout.js          HTML shell, header, footer, schema helpers
src/data/services.js   service pages
src/data/guides.js     guide articles
src/data/areas.js      town pages (unique local copy each)
static/                copied as-is into site/ (CSS, SVG logo, OG image, _headers)
scripts/check.js       SEO and quality checks
site/                  build output, committed (do not edit by hand)
research/ brand/ seo/  research and decisions; source of truth for content
```

## Rules
- Never edit `site/` by hand. Change `src/` or `static/`, then rebuild.
- Never invent facts, prices, reviews, testimonials, accreditations or business history. Mark gaps "Rich to update:".
- Legal and technical statements must match `research/regulations.md` (England only).
- No third-party scripts, fonts or CDNs. No tracking beyond Cloudflare Web Analytics.
- Keep the voice plain, calm and honest (see `brand/branding.md`). UK spelling.
- One main keyword per page; update `seo/keyword-map.md` when adding pages.
- Commit only after `node build.js` and `node scripts/check.js` pass. Do not commit secrets.
