/**
 * Backward-compatibility shim for the `MarkingResultV2` code-owned helpers.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The doc-13 helpers now live in their task-owned homes:
 *   • `./result/confidence.ts` — `computeNeedsHumanReview` +
 *     `NEEDS_HUMAN_REVIEW_THRESHOLDS` (doc 13 §2.9 / §5.4).
 *   • `./result/overall.ts`    — `computeOverallBand` (thin wrapper over
 *     `src/lib/ielts/bands.ts:overallBand`, doc 13 §1.2) + `overallDisagreement`
 *     + `OVERALL_DISAGREEMENT_THRESHOLD` (doc 13 §5.1 / §3.3).
 *
 * This module is retained ONLY as a thin re-export so earlier imports of
 * `@/lib/marking/engine/result-helpers` keep compiling. Prefer importing from
 * `./result/confidence` or `./result/overall` in new code.
 */

export { computeNeedsHumanReview, NEEDS_HUMAN_REVIEW_THRESHOLDS } from './result/confidence'
export {
  computeOverallBand,
  overallDisagreement,
  OVERALL_DISAGREEMENT_THRESHOLD,
} from './result/overall'
