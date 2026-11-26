# SEO checklist for every page

`node scripts/check.js` checks the starred (*) items automatically. The rest need a human or the `seo-auditor` agent.

## Technical
- * Unique `<title>`, 25–65 characters, main keyword near the front, brand at the end.
- * Unique meta description, 70–160 characters, with a reason to click.
- * Exactly one `<h1>`, containing the main keyword in natural words.
- * Canonical URL matching the page's own address (with trailing slash).
- * Listed in `sitemap.xml`.
- * Valid JSON-LD: LocalBusiness on every page, plus BreadcrumbList, and Service / FAQPage / Article where relevant.
- * No broken internal links. Internal links use absolute paths with a trailing slash.
- * No visible placeholder text.
- `lang="en-GB"`, viewport meta, Open Graph tags.
- Fast: no web fonts, no third-party scripts, one small CSS file.
- Accessible: skip link, focus styles, labelled form fields, good colour contrast.

## Content
- One main keyword per page, recorded in `seo/keyword-map.md`. No two pages chase the same keyword.
- Answer the searcher's question in the first paragraph.
- H2s use the supporting keywords and real questions people ask.
- At least 3 internal links to related pages; every page reachable within 3 clicks of home.
- * Town pages are not near-duplicates (check reports similarity; keep under 80%, aim under 60%).
- Every rule matches `research/regulations.md`. Every price comes from `src/config.js`.
- FAQ answers are short, direct and true.
- No keyword stuffing. Write for the reader.

## How the site looks in search results
- * `/favicon.ico` (a multiple of 48 px) and the icon links are on every page. This is the small icon next to the result.
- * The business schema `logo` is a square PNG of at least 112 px on this site (`/assets/logo-512.png`), not an SVG.
- * The home page has `WebSite` schema with the brand name. Google uses it for the site name above the result.
- * Every page has og:title, og:description, og:image (1200x630) and twitter:card, for link previews.
- Google picks up a new icon on its own schedule, often a few weeks. Requesting indexing of the home page can speed it up.

## Local SEO
- Business name, area and phone (once set) identical to the Google Business Profile.
- Town pages name the council, river or catchment, real nearby villages and the distance from Wells.
- Get links from local sources: estate agents, conveyancers, parish newsletters, local business directories, suppliers' "find an installer" pages.

## After publishing
- Request indexing in Google Search Console.
- Check Search Console after 4 weeks: impressions, queries, any pages "crawled but not indexed" (usually means thin or duplicate content).
