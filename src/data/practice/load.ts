// ─── Practice bank loader ────────────────────────────────────────────────────
//
// DEFECT THIS FIXES (Aug 2026 performance remediation):
// `/practice` is a 'use client' route and used to `import { practiceQuestions }
// from '@/data/practice-data'` at module scope. That single module was 636 KB
// of question text, so every student downloaded the ENTIRE cross-board bank -
// AQA, Edexcel, OCR, WJEC and Cambridge - as part of the route's First Load JS,
// before they had chosen a board and before a single question was displayed.
//
// The bank is now one module per board (./aqa, ./edexcel, ...) and this loader
// dynamic-imports only the slice the student's board can actually see. Nothing
// here may be imported eagerly by a client page: keep the imports below inside
// the async functions or the whole point is lost.

import type { ExamBoard } from '@/lib/board/board-config'
import type { PracticeQuestion } from './types'

export type PracticeSliceKey = 'aqa' | 'edexcel' | 'ocr' | 'wjec' | 'caie'

const SLICE_LOADERS: Record<PracticeSliceKey, () => Promise<PracticeQuestion[]>> = {
  aqa: () => import('./aqa').then((m) => m.aqaPracticeQuestions),
  edexcel: () => import('./edexcel').then((m) => m.edexcelPracticeQuestions),
  ocr: () => import('./ocr').then((m) => m.ocrPracticeQuestions),
  wjec: () => import('./wjec').then((m) => m.wjecPracticeQuestions),
  caie: () => import('./caie').then((m) => m.caiePracticeQuestions),
}

export const ALL_SLICE_KEYS = Object.keys(SLICE_LOADERS) as PracticeSliceKey[]

// Which authored slices a student's exam board can legitimately be shown.
//
// This MIRRORS `legacyDisplayNamesForBoard()` in `src/lib/board-filter.ts`,
// which is module-private there. It is deliberately a hint, not the gate:
// `matchesPracticeBoard()` still runs over whatever this returns, so an
// over-broad entry here cannot leak another board's syllabus to a student.
// An entry that is too NARROW would silently shrink a student's question pool,
// so when adding a board, check the display-name list in board-filter.ts.
//
// 'ks3' maps to no slice because no question in the bank is tagged 'KS3' -
// matching the previous behaviour, where a KS3 student filtered the full bank
// down to zero and saw the empty state.
const BOARD_TO_SLICES: Record<ExamBoard, PracticeSliceKey[]> = {
  ks3: [],
  aqa: ['aqa'],
  edexcel: ['edexcel'],
  ocr: ['ocr'],
  eduqas: ['wjec'], // WJEC and Eduqas share a spec lineage; bank is tagged 'WJEC'
  'edexcel-igcse': ['edexcel'],
  'edexcel-igcse-lang': ['edexcel'],
  'cambridge-0500': ['caie'],
  'cambridge-0990': ['caie'],
  'cambridge-0475': ['caie'],
  'ial-edexcel': ['edexcel'],
  'aqa-a-level': ['aqa'],
  'edexcel-a-level': ['edexcel'],
  'ocr-a-level': ['ocr'],
  'eduqas-a-level': ['wjec'],
}

export function slicesForBoard(board: ExamBoard | null): PracticeSliceKey[] {
  // No board chosen yet (fresh visitor, cleared cookie): `matchesPracticeBoard`
  // lets everything through in that state, so load everything to match.
  if (!board) return ALL_SLICE_KEYS
  return BOARD_TO_SLICES[board] ?? ALL_SLICE_KEYS
}

/**
 * Fetch just the practice questions the given board needs.
 *
 * Rejects if a chunk fails to download - callers must surface a real error
 * state rather than falling back to placeholder questions.
 */
export async function loadPracticeQuestions(board: ExamBoard | null): Promise<PracticeQuestion[]> {
  const keys = slicesForBoard(board)
  if (keys.length === 0) return []
  const slices = await Promise.all(keys.map((key) => SLICE_LOADERS[key]()))
  return slices.flat()
}

/**
 * The question-type filter options for a set of questions.
 *
 * Derived from the LOADED slice, not from the whole bank. Deriving it from the
 * full bank (as the page used to) would have kept every board's module in the
 * route's import graph and cancelled out the split entirely.
 */
export function questionTypesFor(questions: PracticeQuestion[]): string[] {
  const types = new Set(questions.map((q) => q.questionType || q.type || 'Other').filter(Boolean))
  return ['All', ...Array.from(types).sort()]
}
