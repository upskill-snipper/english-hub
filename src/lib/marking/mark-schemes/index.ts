// ─── Mark Scheme Registry ────────────────────────────────────────────────────
// Central export for all available mark schemes. Add new boards and papers
// here so they can be resolved by the marking engine via a single lookup.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme } from "./types"
import { aqaLitPaper1 } from "./aqa-lit-paper1"
import { aqaLangPaper1 } from "./aqa-lang-paper1"
import { aqaLangPaper2 } from "./aqa-lang-paper2"

export type { MarkScheme, AssessmentObjective, BandDescriptor, QuestionScheme, AOScore, FeedbackItem, MarkingResult } from "./types"

/**
 * All mark schemes registered with the marking engine, keyed by id.
 */
export const MARK_SCHEMES: Readonly<Record<string, MarkScheme>> = {
  [aqaLitPaper1.id]: aqaLitPaper1,
  [aqaLangPaper1.id]: aqaLangPaper1,
  [aqaLangPaper2.id]: aqaLangPaper2,
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
