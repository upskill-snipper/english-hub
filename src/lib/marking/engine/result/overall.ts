/**
 * Overall-band reconciliation helpers for `MarkingResultV2` (doc 13 §5.1 / §3.3).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Doc 13 build-step 3 names `src/lib/marking/engine/result/overall.ts` as the
 * home for two pieces of CODE that the validator owns and must never trust from
 * the model:
 *   1. The authoritative IELTS overall band — a THIN re-export/wrapper around
 *      `src/lib/ielts/bands.ts:overallBand`. Doc 13 §1.2 is explicit: "Reuse it;
 *      do not re-implement." So this module never copies the half-band rounding
 *      rule (frac < .25 → floor, < .75 → +0.5, else +1); it delegates, so the
 *      grounded engine and the live IELTS feedback route can never diverge.
 *   2. `overallDisagreement(proposed, computed)` — the spec §5.1 check that flags
 *      a mark when the model's proposed overall differs from the code-recomputed
 *      one by MORE THAN 0.5. This drives `ValidationFlags.overallDisagreement`,
 *      which in turn is one of the five `computeNeedsHumanReview` triggers.
 *
 * Phase 1 is ADDITIVE: pure functions only; no SDK calls, no I/O.
 */

import { overallBand } from '@/lib/ielts/bands'
import type { Band } from '@/lib/ielts/types'

/**
 * The overall proposed-vs-computed disagreement threshold (doc 13 §5.1 / §3.3).
 * Exported so the guard test can PIN it: a change is a deliberate, reviewed edit.
 */
export const OVERALL_DISAGREEMENT_THRESHOLD = 0.5 as const

/**
 * Authoritative IELTS overall band from the four criterion bands — a THIN
 * wrapper over `src/lib/ielts/bands.ts:overallBand` (doc 13 §1.2: reuse, never
 * re-implement). Applies the official half-band rounding (frac < .25 → floor,
 * < .75 → +0.5, else +1) and returns `null` until all four bands are present.
 *
 * @param bands The four criterion bands (TR, CC, LR, GRA); nulls allowed.
 * @returns The half-band-rounded overall, or `null` if fewer than four present.
 */
export function computeOverallBand(bands: readonly (Band | null)[]): Band | null {
  return overallBand([...bands])
}

/**
 * Whether the model's proposed overall band disagrees with the code-recomputed
 * one by more than 0.5 (doc 13 §5.1 / §3.3). Drives
 * `ValidationFlags.overallDisagreement`. Strictly greater-than: an exact 0.5 gap
 * is NOT a disagreement.
 *
 * @param proposed The model's `proposed_overall_band` (untrusted).
 * @param computed The code-recomputed overall band (authoritative).
 * @returns `true` when |proposed − computed| > {@link OVERALL_DISAGREEMENT_THRESHOLD}.
 */
export function overallDisagreement(proposed: number, computed: number): boolean {
  return Math.abs(proposed - computed) > OVERALL_DISAGREEMENT_THRESHOLD
}
