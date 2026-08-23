/**
 * Generator for `src/data/mock-exams/index-data.ts`.
 *
 * WHY THIS EXISTS
 * ---------------
 * `/mock-exams` and `/dashboard/mock-exam` are 'use client' pages. They used to
 * import `getMockExamsByBoard` / `mockExamPapers` from `@/data/mock-exams`,
 * whose aggregation block statically imports every paper bank, so ~2.8 MB of
 * reading extracts, question text and mark schemes landed in those routes'
 * First Load JS just to render a list of paper titles.
 *
 * This script walks the same aggregation (identical order, identical
 * first-occurrence-wins dedupe) and emits a small static INDEX carrying only
 * the fields the listing UI renders, plus the `source` key the lazy loader
 * needs to dynamic-import the one module that actually holds the paper.
 *
 * Run after adding or renaming a paper bank, then verify:
 *   npx tsx src/data/mock-exams/_build-index.mjs
 *   npx prettier --write src/data/mock-exams/index-data.ts
 *   npx tsx src/data/mock-exams/_verify-index.mjs
 *
 * The prettier pass is not cosmetic housekeeping: this emitter always writes
 * single-quoted strings and never wraps, which trips the repo's lint-staged
 * prettier hook on titles containing an apostrophe or over 100 characters.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))

/**
 * Ordered exactly as `allSources` in `src/data/mock-exams.ts`, because the
 * dedupe is first-occurrence-wins and the winning occurrence also decides
 * which module the loader will fetch.
 *
 * [sourceKey, moduleSpecifier (relative to this file), namedExport]
 */
const SOURCES = [
  ['base', './base.ts', 'mockExamPapers'],
  ['aqa-lit', '../mock-exams-aqa-lit.ts', 'aqaLitMockExams'],
  ['wjec', '../mock-exams-wjec.ts', 'wjecMockExams'],
  ['edexcel', '../mock-exams-edexcel.ts', 'edexcelMockExams'],
  ['caie', '../mock-exams-caie.ts', 'caieMockExams'],
  // expandedMockExams, flattened to its 24 chunk files in `index.ts` order so
  // that opening one paper loads one chunk instead of all of them.
  ['chunk/aqa-p1-a', './aqa-p1-a.ts', 'aqaP1A'],
  ['chunk/aqa-p1-b', './aqa-p1-b.ts', 'aqaP1B'],
  ['chunk/aqa-p1-c', './aqa-p1-c.ts', 'aqaP1C'],
  ['chunk/aqa-p2-a', './aqa-p2-a.ts', 'aqaP2A'],
  ['chunk/aqa-p2-b', './aqa-p2-b.ts', 'aqaP2B'],
  ['chunk/aqa-p2-c', './aqa-p2-c.ts', 'aqaP2C'],
  ['chunk/edexcel-p1-a', './edexcel-p1-a.ts', 'edexcelP1A'],
  ['chunk/edexcel-p1-b', './edexcel-p1-b.ts', 'edexcelP1B'],
  ['chunk/edexcel-p1-c', './edexcel-p1-c.ts', 'edexcelP1C'],
  ['chunk/edexcel-p2-a', './edexcel-p2-a.ts', 'edexcelP2A'],
  ['chunk/edexcel-p2-b', './edexcel-p2-b.ts', 'edexcelP2B'],
  ['chunk/edexcel-p2-c', './edexcel-p2-c.ts', 'edexcelP2C'],
  ['chunk/ocr-p1-a', './ocr-p1-a.ts', 'ocrP1A'],
  ['chunk/ocr-p1-b', './ocr-p1-b.ts', 'ocrP1B'],
  ['chunk/ocr-p1-c', './ocr-p1-c.ts', 'ocrP1C'],
  ['chunk/ocr-p2-a', './ocr-p2-a.ts', 'ocrP2A'],
  ['chunk/ocr-p2-b', './ocr-p2-b.ts', 'ocrP2B'],
  ['chunk/ocr-p2-c', './ocr-p2-c.ts', 'ocrP2C'],
  ['chunk/wjec-c1-a', './wjec-c1-a.ts', 'wjecC1A'],
  ['chunk/wjec-c1-b', './wjec-c1-b.ts', 'wjecC1B'],
  ['chunk/wjec-c1-c', './wjec-c1-c.ts', 'wjecC1C'],
  ['chunk/wjec-c2-a', './wjec-c2-a.ts', 'wjecC2A'],
  ['chunk/wjec-c2-b', './wjec-c2-b.ts', 'wjecC2B'],
  ['chunk/wjec-c2-c', './wjec-c2-c.ts', 'wjecC2C'],
  ['chunk/aqa-lit-p1-a', './aqa-lit-p1-a.ts', 'aqaLitP1Papers'],
  ['chunk/aqa-lit-p2-a', './aqa-lit-p2-a.ts', 'aqaLitP2Papers'],
  ['chunk/edexcel-lit-a', './edexcel-lit-a.ts', 'edexcelLitPapers'],
  ['chunk/ocr-lit-a', './ocr-lit-a.ts', 'ocrLitPapers'],
  ['chunk/wjec-lit-a', './wjec-lit-a.ts', 'wjecLitPapers'],
  ['ial', '../mock-exams-ial.ts', 'ialMockExams'],
]

const seen = new Set()
const rows = []
const perSource = new Map()

for (const [key, spec, named] of SOURCES) {
  const mod = await import(new URL(spec, import.meta.url).href)
  const papers = mod[named]
  if (!Array.isArray(papers)) {
    throw new Error(`Expected ${named} in ${spec} to be an array`)
  }
  let kept = 0
  for (const p of papers) {
    if (seen.has(p.id)) continue
    seen.add(p.id)
    kept++
    const sections = (p.sections ?? []).map((s) => ({
      id: s.id,
      title: s.title,
      totalMarks: s.totalMarks,
      suggestedTimeMinutes: s.suggestedTimeMinutes,
      questionCount: (s.questions ?? []).length,
    }))
    rows.push({
      id: p.id,
      board: p.board,
      paperNumber: p.paperNumber,
      title: p.title,
      subtitle: p.subtitle,
      code: p.code,
      totalTimeMinutes: p.totalTimeMinutes,
      totalMarks: p.totalMarks,
      questionCount: sections.reduce((a, s) => a + s.questionCount, 0),
      sections,
      source: key,
    })
  }
  perSource.set(key, { total: papers.length, kept })
}

const sourceKeys = SOURCES.map(([k]) => k)

const banner = `// ─── Mock Exam Paper Index (GENERATED - DO NOT EDIT BY HAND) ─────────────────
// Regenerate with:  npx tsx src/data/mock-exams/_build-index.mjs
//
// Listing surfaces (/mock-exams, /dashboard/mock-exam) render from this index
// alone. It deliberately carries NO question text, reading extracts, model
// answers or mark schemes - importing those into a 'use client' page is what
// put ~2.8 MB of exam data into the route bundles. The full paper is fetched
// on demand via \`src/data/mock-exam-loader.ts\` when a student opens it.
//
// Order and dedupe (first occurrence wins) mirror \`allSources\` in
// \`src/data/mock-exams.ts\`, so \`allMockExamPapers\` and this index always
// describe the same papers in the same order.

import type { MockExamSummary } from './types'

`

/** Emit TS source in the repo's prettier style (single quotes, trailing commas). */
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`
const lit = (v, indent) => {
  const pad = '  '.repeat(indent)
  const padIn = '  '.repeat(indent + 1)
  if (typeof v === 'string') return q(v)
  if (typeof v === 'number' || typeof v === 'boolean') return String(v)
  if (v === null || v === undefined) return 'undefined'
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]'
    return `[\n${v.map((x) => padIn + lit(x, indent + 1)).join(',\n')},\n${pad}]`
  }
  const entries = Object.entries(v).filter(([, val]) => val !== undefined)
  return `{\n${entries.map(([k, val]) => `${padIn}${k}: ${lit(val, indent + 1)}`).join(',\n')},\n${pad}}`
}

const body = `export const MOCK_EXAM_INDEX: MockExamSummary[] = ${lit(rows, 0)}\n`

const out = path.join(HERE, 'index-data.ts')
fs.writeFileSync(out, banner + body, 'utf8')

console.log(`papers indexed: ${rows.length}`)
console.log(`index-data.ts bytes: ${fs.statSync(out).size}`)
for (const [k, v] of perSource) {
  if (v.kept !== v.total) console.log(`  ${k}: kept ${v.kept}/${v.total} (deduped)`)
}
console.log('source keys:', JSON.stringify(sourceKeys))
