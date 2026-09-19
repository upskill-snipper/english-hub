// Regenerates public/llms.txt from src/lib/seo/static-routes.json (the
// policy-filtered indexable route list produced by
// generate-sitemap-routes.mjs). Runs in the npm prebuild chain so the file
// can never list redirecting or noindex URLs again.
//
// llms.txt convention: https://llmstxt.org — a curated markdown map of the
// site for AI answer engines (ChatGPT, Claude, Perplexity, Google AI
// Overviews). Section ordering puts the commercial + highest-authority
// content first.
import { readFileSync, writeFileSync } from 'node:fs'

const BASE = 'https://theenglishhub.app'
const routes = JSON.parse(readFileSync('src/lib/seo/static-routes.json', 'utf8'))

/**
 * The board shelves, /set-texts/<board>.
 *
 * SEO-2 (19 September 2026). These are the pages every board picker on the site
 * points at, and they were in neither the sitemap nor this file. They cannot
 * come from static-routes.json because the route is dynamic, so the board list
 * is read from the data rather than written out here - a hand-kept list of
 * thirteen ids is exactly what drifts, and an answer engine citing a board hub
 * that no longer exists is worse than not citing one.
 *
 * A board is listed only if some set text is tagged to it. Cambridge 0500 and
 * 0990 prescribe none at all, which is their specification rather than a gap,
 * and KS3 has none either. An empty shelf is not worth citing.
 */
function boardShelfRoutes() {
  const setTexts = readFileSync('src/lib/board/set-texts.ts', 'utf8')
  const tagged = new Set()
  for (const block of setTexts.matchAll(/boards: \[([^\]]*)\]/g)) {
    for (const id of block[1].matchAll(/'([a-z0-9-]+)'/g)) tagged.add(id[1])
  }
  const config = readFileSync('src/lib/board/board-config.ts', 'utf8')
  // id and the name printed next to it, so the label can say "AQA GCSE English"
  // rather than "Set Texts > Aqa". An answer engine citing the second learns
  // nothing about which qualification the page covers.
  const pairs = [...config.matchAll(/id: '([a-z0-9-]+)',\s*\n\s*name: '([^']*)',/g)]
  const named = new Map(pairs.map((m) => [m[1], m[2]]))
  const ordered = pairs.map((m) => m[1])
  // Unverified shelves are cited to nobody, for the same reason they are not in
  // the sitemap: the four A-Level lists are one list copied four times and the
  // IAL list has never been read from its specification. An answer engine
  // repeating an unverified set-text list as fact is worse than one that has
  // nothing to repeat. Kept in step with src/lib/board/shelf-provenance.ts.
  const UNVERIFIED = new Set([
    'aqa-a-level',
    'edexcel-a-level',
    'ocr-a-level',
    'eduqas-a-level',
    'ial-edexcel',
  ])
  return ordered
    .filter((id) => tagged.has(id) && !UNVERIFIED.has(id))
    .map((id) => ({ route: `/set-texts/${id}`, name: named.get(id) }))
}

const BOARD_SHELF_ENTRIES = boardShelfRoutes()
const BOARD_SHELVES = BOARD_SHELF_ENTRIES.map((e) => e.route)
const BOARD_SHELF_LABELS = new Map(
  BOARD_SHELF_ENTRIES.map((e) => [e.route, `${e.name}: prescribed set texts and study guides`]),
)

const SECTIONS = [
  { title: 'Platform', match: (r) => ['/', '/pricing', '/schools', '/school-pilot', '/teachers', '/students', '/for-parents', '/about', '/demo', '/demo/school', '/demo/teacher', '/demo/student', '/exam-boards', '/board-select'].includes(r) },
  { title: 'Set texts by exam board', match: (r) => r.startsWith('/set-texts') },
  { title: 'GCSE revision', match: (r) => r.startsWith('/revision') },
  { title: 'IGCSE (Cambridge + Pearson Edexcel)', match: (r) => r.startsWith('/igcse') },
  { title: 'IELTS Academic', match: (r) => r.startsWith('/ielts') },
  { title: 'KS3 and iLowerSecondary', match: (r) => r.startsWith('/ks3') },
  { title: 'EAL (English as an Additional Language)', match: (r) => r.startsWith('/eal') },
  { title: 'A-Level English', match: (r) => r.startsWith('/a-level') },
  { title: 'Free resources library', match: (r) => r.startsWith('/resources') || r.startsWith('/free-resources') },
  { title: 'Analysis and study guides', match: (r) => r.startsWith('/analysis') },
  { title: 'Practice, games and assessment', match: (r) => r.startsWith('/games') || r.startsWith('/practice') || r.startsWith('/assessment') || r.startsWith('/mock-exams') || r.startsWith('/courses') },
  { title: 'AI marking', match: (r) => r.startsWith('/marking') },
  { title: 'Local and regional', match: (r) => ['/qatar-igcse-english', '/gcc-igcse-english', '/international-school-igcse-english'].includes(r) },
  { title: 'Trust, policies and company', match: (r) => r.startsWith('/legal') || r.startsWith('/safeguarding') || ['/security', '/growth', '/press', '/accessibility', '/terms', '/cookie-policy', '/refund-policy', '/data-processing', '/about/content-verification', '/about/verified-content', '/examiners', '/creators', '/affiliates', '/contact', '/faqs'].includes(r) },
]

function label(route) {
  if (route === '/') return 'Homepage: platform overview for students, parents, teachers and schools'
  const board = BOARD_SHELF_LABELS.get(route)
  if (board) return board
  return route
    .slice(1)
    .split('/')
    .map((seg) => seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(' › ')
}

const today = new Date().toISOString().slice(0, 10)
const used = new Set()
let out = `# The English Hub

> The English Hub is an independent GCSE, IGCSE, KS3, IELTS and EAL English learning platform for students, parents, teachers and schools. It provides exam-board-aligned revision (AQA, Pearson Edexcel, OCR, WJEC Eduqas, Cambridge IGCSE), AI-assisted essay feedback against real mark schemes, exam-style practice, mock exams, teacher tools and school-level analytics. The interface is available in English, Gulf Arabic and Spanish; study content is English. The platform is exam-board aligned, not exam-board endorsed. Content accuracy is governed by a published content-verification methodology with human review of high-stakes material.

Last generated: ${today}. Canonical host: ${BASE}

This file follows the llms.txt convention so AI answer engines can cite accurate, exam-board-specific English education content. The English Hub is independent and exam-board aligned, not endorsed.
`

const allRoutes = [...routes, ...BOARD_SHELVES]

for (const section of SECTIONS) {
  const members = allRoutes.filter((r) => !used.has(r) && section.match(r))
  if (members.length === 0) continue
  members.forEach((r) => used.add(r))
  out += `\n## ${section.title}\n\n`
  for (const r of members) {
    out += `- [${label(r)}](${BASE}${r === '/' ? '' : r})\n`
  }
}

const rest = allRoutes.filter((r) => !used.has(r))
if (rest.length) {
  out += `\n## Other pages\n\n`
  for (const r of rest) out += `- [${label(r)}](${BASE}${r})\n`
}

writeFileSync('public/llms.txt', out)
console.log(
  `llms.txt: ${allRoutes.length} routes (${BOARD_SHELVES.length} board shelves) across ${SECTIONS.length} sections`,
)
