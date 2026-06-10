// Generates src/lib/seo/static-routes.json — the full list of indexable
// static routes derived from the filesystem (src/app/**/page.tsx), minus a
// single explicit exclusion policy. Run via `npm run build` (prebuild hook)
// or directly: node scripts/generate-sitemap-routes.mjs
//
// This replaces the hand-maintained URL list in src/app/sitemap.ts, which
// drifted ~200 pages behind the real route tree. The JSON is committed so a
// bare `npx next build` (without the npm prebuild hook) still ships a
// complete sitemap; the prebuild hook keeps it fresh on every npm build.
//
// Policy: a route is in the sitemap iff it is
//   - a static route (no [dynamic] segments — those are appended from their
//     data sources inside sitemap.ts),
//   - not in a robots-disallowed section,
//   - not a redirect source (next.config.js redirects / middleware retired
//     pages / www host rules),
//   - not a noindex surface (user tools, portals, internal design demos).
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

// ── Exclusion policy ──────────────────────────────────────────────────
// Robots-disallowed sections (see src/app/robots.ts).
const DISALLOWED_PREFIXES = [
  '/api', '/dashboard', '/school', '/admin', '/account', '/learn',
  '/auth', '/consent', '/verify', '/certificate', '/parent',
]

// Redirect sources — listing a 3xx URL in a sitemap is an SEO error.
// Mirrors next.config.js `redirects()` + middleware RETIRED_PAGE_REDIRECTS.
const REDIRECT_SOURCES = new Set([
  '/for-schools', '/for-schools/pilot', '/for-teachers', '/for-students',
  '/privacy-policy', '/resources/revision', '/resources/games',
  '/igcse/edexcel/syllabus', '/igcse/cambridge/0500/syllabus',
  '/igcse/cambridge/0990/syllabus',
  '/revision/texts/127-hours', '/resources/revision-notes/127-hours',
  '/legal/safeguarding', '/legal/privacy-qatar-supplement',
  '/toolkit',
  // In-page redirect() stubs (return 307 with no body).
  '/ks3/ilowersecondary/reading', '/ks3/ilowersecondary/writing',
  '/ks3/ilowersecondary/writing-forms',
])

// Noindex surfaces — user-specific tools, auth-gated portals and internal
// design experiments. Each of these carries (or now carries) a layout-level
// robots noindex; they must never appear in the sitemap.
const NOINDEX_PREFIXES = [
  '/affiliate', // singular = the affiliate portal app (plural /affiliates marketing IS indexable)
  '/affiliates/apply', '/affiliates/dashboard', '/affiliates/payouts',
  '/affiliates/resources', '/affiliates/settings',
  '/marker', // examiner workspace (noindex layout)
  '/settings', '/redeem', '/join-school',
  '/marking/submit', '/marking/history',
  '/revision/analytics', '/revision/study-plan',
  '/toolkit', // index 308s to /revision; sub-tools are account surfaces
  '/demo/design-1', '/demo/design-2', '/demo/design-3', '/demo/design-4', '/demo/design-5',
  '/ielts/centre', '/ielts/dashboard', '/ielts/plan', '/ielts/planner', '/ielts/progress',
  '/for-schools/register/success', // post-conversion thank-you page
  '/eal/progress', '/eal/assess', // user-specific EAL surfaces if present
  '/board-select', // page carries robots noindex (utility chooser)
  '/legal/cancellation-form', // page carries robots noindex (form step)
]
// NOTE: /assessment/reading/test, /resources/study-tools/tester and
// /for-schools/register ship their own SEO layouts with self-canonicals —
// they are intentionally indexable and stay in the sitemap.

// /marking root is a client-side tool hub (no metadata) — excluded from the
// sitemap, but /marking/sample/** and /marking/ai-explainer are public
// marketing/demo content and stay in.
const EXACT_EXCLUDE = new Set(['/marking'])

const matchesPrefix = (route, prefixes) =>
  prefixes.some((p) => route === p || route.startsWith(p + '/'))

// ── Filesystem enumeration ────────────────────────────────────────────
function walk(d, acc) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const fp = join(d, e.name)
    if (e.isDirectory()) walk(fp, acc)
    else if (e.name === 'page.tsx') acc.push(fp)
  }
  return acc
}

const pages = walk('src/app', [])
const routes = new Set()
for (const f of pages) {
  let r = f.replaceAll('\\', '/').replace(/^src\/app/, '').replace(/\/page\.tsx$/, '')
  // Strip route groups — (group) segments don't appear in the URL.
  r = r.split('/').filter((s) => !(s.startsWith('(') && s.endsWith(')'))).join('/')
  if (r === '') r = '/'
  routes.add(r)
}

const included = [...routes]
  .filter((r) => !r.includes('[')) // dynamic routes appended from data sources in sitemap.ts
  .filter((r) => !matchesPrefix(r, DISALLOWED_PREFIXES))
  .filter((r) => !REDIRECT_SOURCES.has(r))
  .filter((r) => !matchesPrefix(r, NOINDEX_PREFIXES))
  .filter((r) => !EXACT_EXCLUDE.has(r))
  .sort()

mkdirSync('src/lib/seo', { recursive: true })
writeFileSync(
  'src/lib/seo/static-routes.json',
  JSON.stringify(included, null, 2) + '\n',
)
console.log(`static-routes.json: ${included.length} routes (from ${routes.size} filesystem routes)`)
