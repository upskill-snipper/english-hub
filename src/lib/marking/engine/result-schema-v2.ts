/**
 * Backward-compatibility shim for `MarkingResultV2` (doc 13 §2.8).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The canonical `MarkingResultV2` type system (doc 13 §2.1–§2.8) now lives in the
 * sibling `result-schema.ts` (the task-owned home, alongside the flat
 * `GroundedMarkingResult` precursor). This module is retained ONLY as a thin
 * re-export so earlier imports of `@/lib/marking/engine/result-schema-v2` keep
 * compiling — there is exactly ONE definition (in `result-schema.ts`), so the two
 * paths can never drift.
 *
 * Prefer importing from `./result-schema` in new code.
 *
 * NOTE ON ALIASES
 * `result-schema.ts` names the richer V2 evidence span `EvidenceSpanV2` and the
 * V2 criterion union `CriterionScoreV2` (so they do not collide with the flat
 * `EvidenceSpan` / `CriterionScore` already exported there for
 * `GroundedMarkingResult`). This shim re-exports them under the unsuffixed names
 * that the V2 consumers historically used.
 */

export type {
  // §2.2 — evidence span (validator-owned `verified` + offsets)
  EvidenceSpanV2 as EvidenceSpan,
  // §2.3 — tagged error (required severity + verified)
  MarkingError,
  // §2.4 — per-criterion score union
  CriterionCode,
  CriterionScoreBase,
  BandCriterionScore,
  MarksCriterionScore,
  CriterionScoreV2 as CriterionScore,
  // §2.5 — validator-derived flags
  ValidationFlags,
  // §2.6 — overall union
  BandOverall,
  GradeOverall,
  Overall,
  // §2.7 — feedback block
  FeedbackPoint,
  FeedbackBlock,
  // §2.8 — provenance + canonical result
  ResultProvenance,
  MarkingResultV2,
  IeltsCriterionCode,
  // integrity flags (single home is result-schema.ts)
  IntegrityFlags,
} from './result-schema'

export { IELTS_CRITERION_CODES, MARKING_RESULT_SCHEMA_VERSION } from './result-schema'
