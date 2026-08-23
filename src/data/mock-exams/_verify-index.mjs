/**
 * Drift check for the generated listing index and the lazy paper loader.
 *
 * WHY: the listing pages now render from `index-data.ts` while the exam itself
 * is fetched by `mock-exam-loader.ts`. If either drifts from the aggregator in
 * `src/data/mock-exams.ts` a student sees a paper in the list that will not
 * open, or opens a paper whose marks do not match what the card promised.
 *
 * Run:  npx tsx src/data/mock-exams/_verify-index.mjs
 * Exits non-zero on any mismatch.
 */

import { allMockExamPapers } from '../mock-exams.ts'
import { MOCK_EXAM_INDEX } from './index-data.ts'
import { loadMockExamPaper } from '../mock-exam-loader.ts'

const problems = []

if (allMockExamPapers.length !== MOCK_EXAM_INDEX.length) {
  problems.push(
    `count mismatch: aggregator has ${allMockExamPapers.length}, index has ${MOCK_EXAM_INDEX.length}`,
  )
}

for (let i = 0; i < Math.min(allMockExamPapers.length, MOCK_EXAM_INDEX.length); i++) {
  const paper = allMockExamPapers[i]
  const row = MOCK_EXAM_INDEX[i]
  if (paper.id !== row.id) {
    problems.push(`position ${i}: aggregator '${paper.id}' vs index '${row.id}'`)
    continue
  }
  const expectedQuestions = paper.sections.reduce((a, s) => a + s.questions.length, 0)
  const checks = [
    ['board', paper.board, row.board],
    ['paperNumber', paper.paperNumber, row.paperNumber],
    ['title', paper.title, row.title],
    ['subtitle', paper.subtitle, row.subtitle],
    ['totalTimeMinutes', paper.totalTimeMinutes, row.totalTimeMinutes],
    ['totalMarks', paper.totalMarks, row.totalMarks],
    ['questionCount', expectedQuestions, row.questionCount],
    ['sections.length', paper.sections.length, row.sections.length],
  ]
  for (const [field, expected, actual] of checks) {
    if (expected !== actual) {
      problems.push(`${paper.id}: ${field} expected ${String(expected)}, index has ${String(actual)}`)
    }
  }
}

// The index must never carry paper content - that is what the split removed.
const forbidden = ['questions', 'extract', 'markScheme', 'modelAnswers', 'sourceText']
for (const row of MOCK_EXAM_INDEX) {
  for (const key of forbidden) {
    if (key in row) problems.push(`${row.id}: index row carries forbidden field '${key}'`)
    for (const section of row.sections) {
      if (key in section) problems.push(`${row.id}: index section carries forbidden field '${key}'`)
    }
  }
}

// Every listed paper must actually open.
let loaded = 0
for (const row of MOCK_EXAM_INDEX) {
  const paper = await loadMockExamPaper(row.id)
  if (!paper) {
    problems.push(`${row.id}: loader returned null (source '${row.source}')`)
    continue
  }
  if (paper.id !== row.id) problems.push(`${row.id}: loader returned '${paper.id}'`)
  if (paper.totalMarks !== row.totalMarks) {
    problems.push(`${row.id}: loaded totalMarks ${paper.totalMarks} vs index ${row.totalMarks}`)
  }
  loaded++
}

if (problems.length) {
  console.error(`FAIL - ${problems.length} problem(s):`)
  for (const p of problems.slice(0, 40)) console.error('  - ' + p)
  process.exit(1)
}

console.log(`OK - ${MOCK_EXAM_INDEX.length} papers indexed, ${loaded} loaded through the loader`)
