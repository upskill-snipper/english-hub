// ─── Exam Guide Data Index ───────────────────────────────────────────────────
//
// WARNING: this barrel eagerly imports every guide (~349 KB). Importing it
// from a 'use client' component puts all of that into the route's First Load
// JS - which is exactly the defect fixed on /practice in Aug 2026. Client
// components should import `loadGuideByBoard` from './load-guide' instead,
// which dynamic-imports one board's guide on demand.

import type { BoardExamGuide } from './types'
import { resolveGuideKey } from './board-guide-map'
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

// The board ID -> guide key mapping now lives in ./board-guide-map so the
// lazy loader (./load-guide) and this eager barrel cannot drift apart.
export { BOARD_ID_TO_GUIDE_KEY, resolveGuideKey } from './board-guide-map'
export type { GuideKey } from './board-guide-map'

export function getGuideByBoard(boardId: string): BoardExamGuide | undefined {
  const key = resolveGuideKey(boardId)
  return key ? guides[key] : undefined
}

export function getAllGuides(): BoardExamGuide[] {
  return Object.values(guides)
}

export function getGuideIds(): string[] {
  return Object.keys(guides)
}
