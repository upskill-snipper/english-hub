/**
 * The confidence gate for `MarkingResultV2` (doc 13 §2.9 / §5.4).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Doc 13 build-step 3 names `src/lib/marking/engine/result/confidence.ts` as the
 * home for `computeNeedsHumanReview` — a PURE function that decides whether a
 * mark must be routed to a human reviewer. It is CODE-OWNED: the model never sets
 * `needsHumanReview`. B2B always routes to teacher review regardless (spec §9);
 * this gate is the additional B2C-honest check.
 *
 * The EXACT thresholds (overall < 0.7, any criterion < 0.6) are the analytics/
 * routing contract and are exported as {@link NEEDS_HUMAN_REVIEW_THRESHOLDS} so a
 * guard test can PIN them — changing either number must be a deliberate, reviewed
 * product decision, not an accident.
 *
 * Phase 1 is ADDITIVE: pure functions only; no SDK calls, no I/O.
 */

import type { IntegrityFlags, ValidationFlags } from '../result-schema'

/**
 * The confidence-gate thresholds (doc 13 §2.9). Exported so the guard test can
 * PIN the exact 0.7 / 0.6 values.
 */
export const NEEDS_HUMAN_REVIEW_THRESHOLDS = {
  /** Overall confidence strictly below this routes to a human. */
  overall: 0.7,
  /** Any single criterion confidence strictly below this routes to a human. */
  criterion: 0.6,
} as const

/**
 * The confidence gate (doc 13 §2.9, spec §5.4) — a pure function.
 *
 * Returns `true` (route to a human) when ANY of the five conditions hold:
 *   1. overall confidence < {@link NEEDS_HUMAN_REVIEW_THRESHOLDS.overall} (0.7)
 *   2. any criterion confidence < {@link NEEDS_HUMAN_REVIEW_THRESHOLDS.criterion} (0.6)
 *   3. any integrity flag is raised
 *   4. the validator flagged an overall proposed-vs-computed disagreement
 *   5. self-consistency diverged across runs
 *
 * Mirrors the doc-13 §2.9 reference function exactly. A `MarkingResultV2`
 * structurally satisfies the parameter shape.
 *
 * @param r The minimal inputs the gate needs.
 * @returns `true` when the mark must be routed to a human reviewer.
 */
export function computeNeedsHumanReview(r: {
  readonly overallConfidence: number
  readonly criteria: readonly { readonly confidence: number }[]
  readonly integrityFlags: IntegrityFlags
  readonly validationFlags: Pick<ValidationFlags, 'overallDisagreement' | 'selfConsistencyDiverged'>
}): boolean {
  if (r.overallConfidence < NEEDS_HUMAN_REVIEW_THRESHOLDS.overall) return true
  if (r.criteria.some((c) => c.confidence < NEEDS_HUMAN_REVIEW_THRESHOLDS.criterion)) return true
  if (Object.values(r.integrityFlags).some(Boolean)) return true
  if (r.validationFlags.overallDisagreement) return true
  if (r.validationFlags.selfConsistencyDiverged) return true
  return false
}
