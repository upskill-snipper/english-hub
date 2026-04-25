// ─── Exam Guide Data Index ───────────────────────────────────────────────────

import type { BoardExamGuide } from './types'
import { aqaGuide } from './aqa-guide'
import { edexcelGuide } from './edexcel-guide'
import { ocrGuide } from './ocr-guide'
import { wjecGuide } from './wjec-guide'
import { igcseGuide } from './igcse-guide'

export { aqaGuide, edexcelGuide, ocrGuide, wjecGuide, igcseGuide }
export { ks3Guide } from './ks3-guide'
export type { KS3Guide } from './ks3-guide'
export { genericOverview } from './generic-overview'
export { terminologyList } from './terminology'
export { grade9Strategy } from './grade9-strategy'
export { contextPeriods } from './context-periods'
export type * from './types'

// ─── Guide lookup helpers ────────────────────────────────────────────────────

const guides: Record<string, BoardExamGuide> = {
  aqa: aqaGuide,
  edexcel: edexcelGuide,
  ocr: ocrGuide,
  wjec: wjecGuide,
  igcse: igcseGuide,
}

// Map current `ExamBoard` IDs (cookie values like 'cambridge-0990') onto the
// short legacy guide keys above. Without this, a Pearson IGCSE / Cambridge /
// Eduqas / IAL student gets `undefined` back from getGuideByBoard and silently
// loses contextual examiner tips on /practice and any other page that calls
// this helper.
const BOARD_ID_TO_GUIDE_KEY: Record<string, string> = {
  // GCSE
  aqa: 'aqa',
  edexcel: 'edexcel',
  ocr: 'ocr',
  eduqas: 'wjec',
  // IGCSE
  'edexcel-igcse': 'igcse',
  'edexcel-igcse-lang': 'igcse',
  'cambridge-0500': 'igcse',
  'cambridge-0990': 'igcse',
  'cambridge-0475': 'igcse',
  // IAL / A-Level — fall back to the closest exam-board guide we have
  'ial-edexcel': 'edexcel',
  'aqa-a-level': 'aqa',
  'edexcel-a-level': 'edexcel',
  'ocr-a-level': 'ocr',
  'eduqas-a-level': 'wjec',
}

export function getGuideByBoard(boardId: string): BoardExamGuide | undefined {
  const id = boardId.toLowerCase()
  // Direct hit on the old short keys (aqa, ocr, wjec, igcse).
  if (guides[id]) return guides[id]
  // Map newer ExamBoard IDs onto the short keys.
  const mapped = BOARD_ID_TO_GUIDE_KEY[id]
  if (mapped && guides[mapped]) return guides[mapped]
  return undefined
}

export function getAllGuides(): BoardExamGuide[] {
  return Object.values(guides)
}

export function getGuideIds(): string[] {
  return Object.keys(guides)
}
