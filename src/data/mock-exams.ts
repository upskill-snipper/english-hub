// ─── Mock Exam Aggregator ────────────────────────────────────────────────────
// Combines every paper bank into one in-memory list.
//
// DO NOT IMPORT THIS FROM A 'use client' PAGE.
//
// Importing anything from this module pulls the whole ~2.8 MB paper bank -
// every reading extract, question, model answer and mark scheme - into the
// importing route's bundle, because the aggregation below is a static import
// of every bank. That is exactly the defect that put 2.4-3.6 MB of First Load
// JS on the mock-exam routes.
//
// Use instead:
//   - listing / browse UI  ->  '@/data/mock-exams/paper-index' (metadata only)
//   - opening one paper    ->  `loadMockExamPaper` in '@/data/mock-exam-loader'
//   - types                ->  '@/data/mock-exams/types'
//
// This module remains for server-side and offline use (scripts, tests, the
// index generator), and re-exports the old public surface so that any
// remaining non-client importer keeps compiling.

import type { MockExamPaper } from './mock-exams/types'
import { mockExamPapers } from './mock-exams/base'
import { wjecMockExams } from './mock-exams-wjec'
import { caieMockExams } from './mock-exams-caie'
import { edexcelMockExams } from './mock-exams-edexcel'
import { expandedMockExams } from './mock-exams/index'
import { aqaLitMockExams } from './mock-exams-aqa-lit'
import { ialMockExams } from './mock-exams-ial'

export type {
  QuestionType,
  MockExamQuestion,
  MockExamSection,
  MockExamPaper,
  MockExamSummary,
  MockExamSectionSummary,
  MockExamSourceKey,
} from './mock-exams/types'

export { mockExamPapers } from './mock-exams/base'
// Re-exported from the index so callers get the same formatter whether or not
// they can afford to import the paper bank.
export { formatExamTime } from './mock-exams/paper-index'

/**
 * All mock exam papers, deduplicated by id (first occurrence wins).
 *
 * The aqa-lit-p2-* papers reach this list twice - once via
 * `aqaLitMockExams` and again inside `expandedMockExams` - which doubled
 * three cards on /mock-exams and made /mock-exams/[id] ambiguous. Sources
 * may legitimately overlap as banks grow, so dedupe here at the
 * aggregation point rather than chasing the import graph.
 *
 * Order and dedupe must stay in step with `SOURCES` in
 * `src/data/mock-exams/_build-index.mjs`, which generates the listing index
 * from the same sequence.
 */
const allSources: MockExamPaper[] = [
  ...mockExamPapers,
  ...aqaLitMockExams,
  ...wjecMockExams,
  ...edexcelMockExams,
  ...caieMockExams,
  ...expandedMockExams,
  ...ialMockExams,
]

export const allMockExamPapers: MockExamPaper[] = (() => {
  const seen = new Set<string>()
  const unique: MockExamPaper[] = []
  for (const paper of allSources) {
    if (seen.has(paper.id)) continue
    seen.add(paper.id)
    unique.push(paper)
  }
  return unique
})()

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getMockExamsByBoard(board: string): MockExamPaper[] {
  return allMockExamPapers.filter((p) => p.board === board)
}

export function getMockExamById(id: string): MockExamPaper | undefined {
  return allMockExamPapers.find((p) => p.id === id)
}

export function getAvailableBoards(): string[] {
  return Array.from(new Set(allMockExamPapers.map((p) => p.board)))
}
