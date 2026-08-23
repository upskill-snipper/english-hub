// ─── Exam board ID -> guide key map ──────────────────────────────────────────
//
// Extracted from ./index.ts (Aug 2026) so the LAZY loader (./load-guide) and
// the eager barrel (./index) share one mapping. Duplicating it would let the
// two drift, and a board missing from one copy silently loses its examiner
// tips rather than failing loudly.
//
// This module holds no guide data, so importing it costs a client bundle
// nothing.

export type GuideKey = 'aqa' | 'edexcel' | 'ocr' | 'wjec' | 'igcse'

// Map current `ExamBoard` IDs (cookie values like 'cambridge-0990') onto the
// short legacy guide keys. Without this, a Pearson IGCSE / Cambridge / Eduqas
// / IAL student gets `undefined` back from getGuideByBoard and silently loses
// contextual examiner tips on /practice and any other page that calls it.
export const BOARD_ID_TO_GUIDE_KEY: Record<string, GuideKey> = {
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
  // IAL / A-Level - fall back to the closest exam-board guide we have
  'ial-edexcel': 'edexcel',
  'aqa-a-level': 'aqa',
  'edexcel-a-level': 'edexcel',
  'ocr-a-level': 'ocr',
  'eduqas-a-level': 'wjec',
}

export const GUIDE_KEYS: readonly GuideKey[] = ['aqa', 'edexcel', 'ocr', 'wjec', 'igcse']

/**
 * Resolve any board identifier - a short legacy guide key or a current
 * `ExamBoard` cookie value - to the guide key that serves it.
 */
export function resolveGuideKey(boardId: string): GuideKey | undefined {
  const id = boardId.toLowerCase()
  // Direct hit on the old short keys (aqa, ocr, wjec, igcse).
  if ((GUIDE_KEYS as readonly string[]).includes(id)) return id as GuideKey
  return BOARD_ID_TO_GUIDE_KEY[id]
}
