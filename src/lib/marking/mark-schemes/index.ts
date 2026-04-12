// ─── Mark Scheme Registry ────────────────────────────────────────────────────
// Central export for all available mark schemes. Add new boards and papers
// here so they can be resolved by the marking engine via a single lookup.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme } from "./types"
import { aqaLitPaper1 } from "./aqa-lit-paper1"
import { aqaLangPaper1 } from "./aqa-lang-paper1"
import { aqaLangPaper2 } from "./aqa-lang-paper2"
import { eduqasLitComp1, eduqasLitComp2 } from "./eduqas-lit"
import { eduqasLangComp1, eduqasLangComp2 } from "./eduqas-lang"
import { ocrLitComponent01, ocrLitComponent02 } from "./ocr-lit"
import { ocrLangComponent01, ocrLangComponent02 } from "./ocr-lang"
import { edexcelLitPaper1, edexcelLitPaper2 } from "./edexcel-lit"
import { edexcelLangPaper1, edexcelLangPaper2 } from "./edexcel-lang"

export type { MarkScheme, AssessmentObjective, BandDescriptor, QuestionScheme, AOScore, FeedbackItem, MarkingResult } from "./types"

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
  [edexcelLangPaper1.id]: edexcelLangPaper1,
  [edexcelLangPaper2.id]: edexcelLangPaper2,
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
export { eduqasLitComp1, eduqasLitComp2 } from "./eduqas-lit"
export { eduqasLangComp1, eduqasLangComp2 } from "./eduqas-lang"
export { ocrLitComponent01, ocrLitComponent02 } from "./ocr-lit"
export { ocrLangComponent01, ocrLangComponent02 } from "./ocr-lang"
export { edexcelLitPaper1, edexcelLitPaper2 } from "./edexcel-lit"
export { edexcelLangPaper1, edexcelLangPaper2 } from "./edexcel-lang"
