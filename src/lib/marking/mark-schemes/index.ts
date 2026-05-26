// ─── Mark Scheme Registry ────────────────────────────────────────────────────
// Central export for all available mark schemes. Add new boards and papers
// here so they can be resolved by the marking engine via a single lookup.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme } from './types'
import { aqaLitPaper1 } from './aqa-lit-paper1'
import { aqaLangPaper1 } from './aqa-lang-paper1'
import { aqaLangPaper2 } from './aqa-lang-paper2'
import { eduqasLitComp1, eduqasLitComp2 } from './eduqas-lit'
import { eduqasLangComp1, eduqasLangComp2 } from './eduqas-lang'
import { ocrLitComponent01, ocrLitComponent02 } from './ocr-lit'
import { ocrLangComponent01, ocrLangComponent02 } from './ocr-lang'
import { edexcelLitPaper1, edexcelLitPaper2 } from './edexcel-lit'
import { edexcelLangPaper1, edexcelLangPaper2 } from './edexcel-lang'
import { edexcelIgcseLit, edexcelIgcseLitMarkSchemes } from './edexcel-igcse-lit'
import {
  cambridge0500Paper1,
  cambridge0500Paper2,
  cambridge0500MarkSchemes,
} from './cambridge-0500'
import {
  cambridge0990Paper1,
  cambridge0990Paper2,
  cambridge0990MarkSchemes,
} from './cambridge-0990'

export type {
  MarkScheme,
  AssessmentObjective,
  BandDescriptor,
  QuestionScheme,
  AOScore,
  FeedbackItem,
  MarkingResult,
} from './types'

/**
 * All mark schemes registered with the marking engine, keyed by id.
 */
export const MARK_SCHEMES: Readonly<Record<string, MarkScheme>> = {
  [aqaLitPaper1.id]: aqaLitPaper1,
  [aqaLangPaper1.id]: aqaLangPaper1,
  [aqaLangPaper2.id]: aqaLangPaper2,
  [eduqasLitComp1.id]: eduqasLitComp1,
  [eduqasLitComp2.id]: eduqasLitComp2,
  [eduqasLangComp1.id]: eduqasLangComp1,
  [eduqasLangComp2.id]: eduqasLangComp2,
  [ocrLitComponent01.id]: ocrLitComponent01,
  [ocrLitComponent02.id]: ocrLitComponent02,
  [ocrLangComponent01.id]: ocrLangComponent01,
  [ocrLangComponent02.id]: ocrLangComponent02,
  [edexcelLitPaper1.id]: edexcelLitPaper1,
  [edexcelLitPaper2.id]: edexcelLitPaper2,
  [edexcelIgcseLit.id]: edexcelIgcseLit,
  [edexcelLangPaper1.id]: edexcelLangPaper1,
  [edexcelLangPaper2.id]: edexcelLangPaper2,
  [cambridge0500Paper1.id]: cambridge0500Paper1,
  [cambridge0500Paper2.id]: cambridge0500Paper2,
  [cambridge0990Paper1.id]: cambridge0990Paper1,
  [cambridge0990Paper2.id]: cambridge0990Paper2,
}

/**
 * Mark schemes grouped by ExamBoard id (from src/lib/board/board-config.ts).
 * Used by board-aware features to surface only the schemes relevant to a
 * student's selected qualification.
 */
export const MARK_SCHEMES_BY_BOARD: Readonly<Record<string, readonly MarkScheme[]>> = {
  'cambridge-0500': cambridge0500MarkSchemes,
  'cambridge-0990': cambridge0990MarkSchemes,
}

/**
 * Resolve a mark scheme by id, or return null if unknown.
 */
export function getMarkScheme(id: string): MarkScheme | null {
  return MARK_SCHEMES[id] ?? null
}

/**
 * List the ids of all available mark schemes.
 */
export function listMarkSchemeIds(): string[] {
  return Object.keys(MARK_SCHEMES)
}

export { aqaLitPaper1, aqaLangPaper1, aqaLangPaper2 }
export { eduqasLitComp1, eduqasLitComp2 } from './eduqas-lit'
export { eduqasLangComp1, eduqasLangComp2 } from './eduqas-lang'
export { ocrLitComponent01, ocrLitComponent02 } from './ocr-lit'
export { ocrLangComponent01, ocrLangComponent02 } from './ocr-lang'
export { edexcelLitPaper1, edexcelLitPaper2 } from './edexcel-lit'
export { edexcelIgcseLit, edexcelIgcseLitMarkSchemes } from './edexcel-igcse-lit'
export { edexcelLangPaper1, edexcelLangPaper2 } from './edexcel-lang'
export {
  cambridge0500Paper1,
  cambridge0500Paper2,
  cambridge0500MarkSchemes,
} from './cambridge-0500'
export {
  cambridge0990Paper1,
  cambridge0990Paper2,
  cambridge0990MarkSchemes,
} from './cambridge-0990'
