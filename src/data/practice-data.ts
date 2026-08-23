// ─── Practice question bank (aggregate barrel) ───────────────────────────────
//
// DEFECT THIS FIXES (Aug 2026 performance remediation):
// This file used to hold the entire 636 KB / 3,735-line cross-board practice
// bank inline, and `/practice` - a 'use client' route - imported it at module
// scope. The result was that every student downloaded every board's questions
// in that route's First Load JS before choosing a board.
//
// The data now lives one module per board under `./practice/`, and the page
// pulls in only the slice it needs via `loadPracticeQuestions()` in
// `./practice/load`.
//
// WARNING: this barrel eagerly imports EVERY slice, so it is the expensive
// path. It exists for Node-side consumers that genuinely need the whole bank
// (the data-integrity test). Never import it from a client component - import
// `@/data/practice/load` instead, or you will put the full bank straight back
// into a route bundle.

import { aqaPracticeQuestions } from './practice/aqa'
import { edexcelPracticeQuestions } from './practice/edexcel'
import { ocrPracticeQuestions } from './practice/ocr'
import { wjecPracticeQuestions } from './practice/wjec'
import { caiePracticeQuestions } from './practice/caie'
import type { PracticeQuestion } from './practice/types'

export type { ModelAnswers, PracticeQuestion } from './practice/types'
export { creativeWritingPrompts } from './practice/creative-writing-prompts'

export const practiceQuestions: PracticeQuestion[] = [
  ...aqaPracticeQuestions,
  ...edexcelPracticeQuestions,
  ...ocrPracticeQuestions,
  ...wjecPracticeQuestions,
  ...caiePracticeQuestions,
]

export default practiceQuestions
