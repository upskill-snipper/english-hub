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

const SECTIONS = [
  { title: 'Platform', match: (r) => ['/', '/pricing', '/schools', '/school-pilot', '/teachers', '/students', '/for-parents', '/about', '/demo', '/demo/school', '/demo/teacher', '/demo/student', '/exam-boards', '/board-select'].includes(r) },
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

for (const section of SECTIONS) {
  const members = routes.filter((r) => !used.has(r) && section.match(r))
  if (members.length === 0) continue
  members.forEach((r) => used.add(r))
  out += `\n## ${section.title}\n\n`
  for (const r of members) {
    out += `- [${label(r)}](${BASE}${r === '/' ? '' : r})\n`
  }
}

const rest = routes.filter((r) => !used.has(r))
if (rest.length) {
  out += `\n## Other pages\n\n`
  for (const r of rest) out += `- [${label(r)}](${BASE}${r})\n`
}

writeFileSync('public/llms.txt', out)
console.log(`llms.txt: ${routes.length} routes across ${SECTIONS.length} sections`)
