// ─── Lazy single-board exam guide loader ─────────────────────────────────────
//
// DEFECT THIS FIXES (Aug 2026 performance remediation):
// `/practice` is a 'use client' route and imported `getGuideByBoard` from
// '@/data/exam-guides' at module scope. That barrel eagerly imports every
// board guide plus the terminology list, the grade 9 strategy notes, the
// context periods and the KS3 guide - roughly 349 KB - so all of it landed in
// the route's First Load JS purely to render one examiner tip for the ONE
// board the student is studying.
//
// This module reaches the same guide through a dynamic import, so a student
// downloads only their own board's guide, and only after the page is
// interactive. Import THIS from client components, never './index'.

import type { BoardExamGuide } from './types'
import { resolveGuideKey, type GuideKey } from './board-guide-map'

const GUIDE_LOADERS: Record<GuideKey, () => Promise<BoardExamGuide>> = {
  aqa: () => import('./aqa-guide').then((m) => m.aqaGuide),
  edexcel: () => import('./edexcel-guide').then((m) => m.edexcelGuide),
  ocr: () => import('./ocr-guide').then((m) => m.ocrGuide),
  wjec: () => import('./wjec-guide').then((m) => m.wjecGuide),
  igcse: () => import('./igcse-guide').then((m) => m.igcseGuide),
}

/**
 * Async twin of `getGuideByBoard()`. Resolves to `undefined` for a board we
 * hold no guide for, exactly as the synchronous helper returns `undefined`.
 */
export async function loadGuideByBoard(boardId: string): Promise<BoardExamGuide | undefined> {
  const key = resolveGuideKey(boardId)
  if (!key) return undefined
  return GUIDE_LOADERS[key]()
}
