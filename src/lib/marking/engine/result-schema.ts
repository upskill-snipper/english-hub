/**
 * Canonical structured marking-result schema for the grounded Marking Engine.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The legacy marking path (`mark-schemes/types.ts`, `MarkingResult` / `FeedbackItem`)
 * produces a loosely-structured, board-specific result that was good enough for the
 * first GCSE flow but cannot express the guarantees the architecture now requires
 * (see business-docs/architecture/marking-engine/00-architecture-source.md §2 and
 * 13-design-result-schema-and-taxonomy.md):
 *
 *   1. GROUNDING  — every score and every error must be anchored to a verbatim quote
 *                   from the candidate's submission, so feedback is auditable and not
 *                   hallucinated.
 *   2. CONFIDENCE — each criterion and the overall result carry a calibrated
 *                   confidence so the pipeline can route low-confidence work to a
 *                   human (`needs_human_review`).
 *   3. INTEGRITY  — under-length / off-topic / memorised / prompt-copied signals are
 *                   first-class booleans, not buried in free-text feedback or hard
 *                   error sentinels (the exact four flags are fixed by the spec).
 *   4. PORTABILITY — criterion identity is a free string (`name`), NOT an IELTS-only
 *                    enum, so the same shape serves IELTS, Cambridge, GCSE boards,
 *                    CEFR/EAL, etc. The numeric `band` is likewise generic (an IELTS
 *                    0–9 half-band, a 0–100 score, a CEFR ordinal — the engine that
 *                    emits the result owns the scale; consumers read `pack_version`
 *                    to interpret it).
 *
 * Phase 1 is ADDITIVE: this module is pure types with no runtime logic and does not
 * replace the legacy schema. It lives under `engine/` and is the target shape the
 * grounded pipeline will populate going forward.
 *
 * RECONCILIATION WITH `mark-schemes/types.ts`
 * -------------------------------------------
 * The legacy `FeedbackItem` (a per-criterion comment) and `MarkingResult` (criterion
 * scores + overall band + feedback) are intentionally NOT re-exported or extended
 * here, because their fields are not grounded (no required `quote`) and not confident
 * (no `confidence`). Forcing this richer schema to `extends` the legacy one would drag
 * optional, ungrounded fields into the canonical contract and weaken the guarantees
 * above. Instead, the two schemas are kept side-by-side; a thin adapter (a later
 * phase — design doc 13 build step 7) will down-convert a {@link GroundedMarkingResult}
 * into the legacy `MarkingResult` for any UI still consuming the old shape. The field
 * names here deliberately mirror the legacy concepts (criteria, band, overall band) so
 * that adapter is mechanical. Note one type mismatch the adapter must bridge: the
 * legacy `MarkingResult.predictedGrade` is a `string` ("1".."9"), whereas
 * {@link GroundedMarkingResult.overall_grade} is `number` per the architecture §2
 * schema — the adapter stringifies. This divergence is intentional.
 *
 * RELATIONSHIP TO THE DESIGN DOC's `MarkingResultV2` (13 §2.8)
 * -----------------------------------------------------------
 * Design doc 13 §2.8 sketches a richer, discriminated-union `MarkingResultV2`
 * (BandCriterionScore | MarksCriterionScore, an `Overall` union, `ValidationFlags`,
 * provenance, etc.). This file deliberately implements the simpler "workable result
 * schema" from architecture 00 §2 — a flat board-agnostic shape — as the Phase 1
 * canonical type. It is a compatible precursor/subset: the discriminated richer shape
 * can be layered on later without contradicting these field names.
 */

import type { ErrorType } from './error-taxonomy'

/**
 * A verbatim, grounded reference into the candidate's submission.
 *
 * `quote` MUST be copied character-for-character from the source text so that a
 * reviewer (or the validator's substring check) can locate and verify it. This is the
 * core grounding primitive used by both criterion scores and marked errors.
 *
 * Diverges from the legacy `FeedbackItem`, which carried free-text comments with no
 * obligation to quote the source. NOTE: design doc 13 §2.2 additionally specifies a
 * validator-owned `verified: boolean` (and optional char offsets) set once the quote
 * is confirmed verbatim. Those validator-stage fields are deliberately omitted from
 * this Phase 1 model shape and should be added when the Validator is built.
 */
export interface EvidenceSpan {
  /** Exact substring lifted from the submission. Must appear verbatim in the source. */
  readonly quote: string
  /** Why this quote supports the associated score or claim. */
  readonly explanation: string
}

/**
 * The score for a single rubric criterion, grounded in evidence.
 *
 * `name` is an open string (e.g. "Task Response", "Coherence and Cohesion",
 * "Grammatical Range and Accuracy", or a non-IELTS criterion such as "Content" /
 * "Communicative Achievement" / a GCSE "AO1") so the schema is board-agnostic.
 * `band` is a generic numeric on the scale implied by `pack_version` on the enclosing
 * {@link GroundedMarkingResult}.
 *
 * Reconciles with the legacy per-criterion shapes (IELTS `criteria[]` and GCSE
 * `AOScore`) by unifying them around grounding (`evidence`), the matched rubric
 * language (`descriptor_matched`) and a calibrated `confidence`.
 */
export interface CriterionScore {
  /** Board-agnostic criterion identifier (free text, not an IELTS-only enum). */
  readonly name: string
  /** Numeric score on the scale defined by the result's `pack_version`. */
  readonly band: number
  /** The specific rubric/descriptor language this score was matched against. */
  readonly descriptor_matched: string
  /** Verbatim quotes that justify the awarded band. */
  readonly evidence: readonly EvidenceSpan[]
  /** Calibrated confidence in this criterion's score, in [0, 1]. */
  readonly confidence: number
}

/**
 * A single, grounded error identified in the submission.
 *
 * `type` is drawn from the shared, closed error taxonomy (see `./error-taxonomy`),
 * which is what makes errors aggregatable into the §4 learner-model analytics. `quote`
 * is the verbatim offending text and `correction` is the suggested fix.
 *
 * Supersedes the legacy schema's lack of a tagged error list by requiring a typed,
 * quoted, correctable error rather than free-text feedback.
 */
export interface MarkedError {
  /** Category of the error, from the canonical closed taxonomy. */
  readonly type: ErrorType
  /** Verbatim offending text copied from the submission. */
  readonly quote: string
  /** Suggested corrected text. */
  readonly correction: string
  /** Human-readable rationale for why this is an error and how the fix helps. */
  readonly explanation: string
  /**
   * Optional relative seriousness of the error (spec §4 tool `severity` enum).
   * Omitted when the engine does not differentiate severity (e.g. a flat error list).
   */
  readonly severity?: 'minor' | 'moderate' | 'major'
}

/**
 * First-class integrity signals computed during marking.
 *
 * These exist so that under-length / off-topic / memorised / prompt-copying conditions
 * can gate scoring and routing explicitly, rather than being inferred from prose
 * feedback or, as in the legacy path, surfaced only as hard error sentinels
 * (`{"error":"OFF_TOPIC"}`). All four flags are present (not optional) so consumers can
 * rely on a complete picture: a `false` flag is a positive assertion that the check ran
 * and passed.
 *
 * The exact field set is fixed by the canonical spec — see 00-architecture-source.md
 * §2, 01-ielts-writing-task2-spec.md §4 (the `submit_ielts_writing_assessment` tool's
 * `integrity_flags`), and 13-design-result-schema-and-taxonomy.md §2.5. The model
 * proposes these; the validator re-asserts them. Do not add/remove keys without
 * updating the spec, the tool schema and the validator together — these four are the
 * contract.
 */
export interface IntegrityFlags {
  /** Submission is below the required minimum length for its task. */
  readonly under_length: boolean
  /** Submission does not address the prompt / question. */
  readonly off_topic: boolean
  /** Submission appears partly or fully memorised / templated rather than original. */
  readonly likely_memorised: boolean
  /** Submission reproduces wording lifted directly from the task prompt. */
  readonly copied_from_prompt: boolean
}

/**
 * The canonical, top-level grounded marking result (architecture §2).
 *
 * This is the single object the grounded pipeline produces per submission. Every
 * scored claim is traceable: criteria carry evidence, errors carry quotes, and the
 * overall result carries a confidence plus an explicit human-review gate.
 *
 * Reconciliation: this is the grounded successor to the legacy `MarkingResult`. It
 * keeps the same mental model (a list of criterion scores plus an overall figure) but
 * upgrades it with grounding, confidence, integrity flags and review routing. A
 * later-phase adapter will project this down to the legacy `MarkingResult` for
 * backward-compatible consumers.
 */
export interface GroundedMarkingResult {
  /** Identifier of the submission being marked. */
  readonly submission_id: string
  /**
   * Version of the marking pack (rubric + descriptors + scale) used. The foreign key
   * back to the exact ruleset that produced this mark. Consumers read this to interpret
   * the numeric scale of `band` / `overall_band`. e.g. "ielts_writing_v2025.1".
   */
  readonly pack_version: string
  /** The task type marked (e.g. "IELTS_Writing_Task2"); board-agnostic free text. */
  readonly task_type: string
  /** Per-criterion grounded scores. */
  readonly criteria: readonly CriterionScore[]
  /** All grounded, taxonomy-tagged errors found in the submission. */
  readonly errors: readonly MarkedError[]
  /** Structured integrity signals for the submission. */
  readonly integrity_flags: IntegrityFlags
  /**
   * Human-readable reasons the result sits near a band boundary (e.g.
   * "TR borderline 6/7: addresses all parts but development thin"). Empty when no
   * criterion is borderline. Explains and helps inform `needs_human_review`.
   */
  readonly borderline_flags: readonly string[]
  /**
   * Aggregate numeric band on the scale defined by `pack_version`. Always computed in
   * code by the validator (never trusted from the model) — e.g. the IELTS half-band
   * rounding in `src/lib/ielts/bands.ts:overallBand`.
   */
  readonly overall_band: number
  /**
   * Aggregate result expressed as a numeric grade. Distinct from `overall_band`:
   * `overall_band` is the rubric-scale figure, `overall_grade` is the normalised grade
   * some boards/UI surface alongside it. Both are numeric per the architecture §2
   * schema. (The legacy GCSE `predictedGrade` is a string; the down-conversion adapter
   * stringifies this number.)
   */
  readonly overall_grade: number
  /** Calibrated, code-owned confidence in the overall result, in [0, 1]. */
  readonly overall_confidence: number
  /**
   * True when the engine cannot stand behind the result unaided (low confidence,
   * any raised integrity flag, or borderline scores) and a human should review.
   * Set by code (the confidence gate), not the model.
   */
  readonly needs_human_review: boolean
  /** A short holistic, prose summary of the submission's performance. */
  readonly holistic_note: string
}
