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
 * Design doc 13 §2.8 names a richer, discriminated-union `MarkingResultV2`
 * (BandCriterionScore | MarksCriterionScore, an `Overall` union, `ValidationFlags`,
 * provenance, etc.) as THE canonical result. That full type system is now defined
 * in this same file, BELOW the flat `GroundedMarkingResult` (see the
 * "§2 — Canonical MarkingResultV2" section). The two coexist:
 *   • `GroundedMarkingResult` — the flat architecture-00 §2 precursor (kept so its
 *     existing importers do not break; it is the single home of {@link IntegrityFlags}).
 *   • `MarkingResultV2`        — the doc-13 §2.8 canonical, discriminated result.
 * `result-schema-v2.ts` is retained as a THIN re-export shim of the V2 members
 * below so prior imports of `@/lib/marking/engine/result-schema-v2` keep working.
 */

import type { ErrorType, MarkingErrorType, MarkingErrorSeverity } from './error-taxonomy'

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

// ═══════════════════════════════════════════════════════════════════════════════
// §2 — Canonical MarkingResultV2 (doc 13 §2.1–§2.8)
// ═══════════════════════════════════════════════════════════════════════════════
//
// Design doc 13 §2.8 names `MarkingResultV2` as THE canonical, persisted marking
// result, with the richer discriminated-union shapes in §2.1–§2.7. It supersedes
// the flat `GroundedMarkingResult` above (which is retained as a compatible
// precursor so its existing importers keep compiling).
//
// SOURCES OF TRUTH (change all together or not at all):
//   • 13-design-result-schema-and-taxonomy.md §2.2 (EvidenceSpanV2), §2.3
//     (MarkingError), §2.4 (CriterionScore union), §2.5 (IntegrityFlags +
//     ValidationFlags), §2.6 (Overall union), §2.7 (FeedbackPoint/FeedbackBlock),
//     §2.8 (MarkingResultV2 + provenance). Field names/casing are doc-13-verbatim:
//     camelCase on the result, snake_case ONLY inside {@link IntegrityFlags}.
//   • The error taxonomy is REUSED from `./error-taxonomy` — never re-declared.
//
// `result-schema-v2.ts` re-exports every member below, so prior imports of
// `@/lib/marking/engine/result-schema-v2` keep working.

// ─── §2.2 Evidence spans (V2 — adds validator-owned `verified` + offsets) ─────

/**
 * A verbatim quote from the candidate's answer that grounds a band or an error
 * (doc 13 §2.2). The richer V2 sibling of {@link EvidenceSpan}: it adds the
 * validator-owned `verified` flag (the model never sets it) and optional char
 * offsets into the normalised answer. The canonical result persists only verified
 * spans; misses are counted into {@link ValidationFlags.unverifiedEvidenceCount}.
 */
export interface EvidenceSpanV2 {
  /** Quote that MUST appear verbatim (whitespace-normalised) in the answer. */
  readonly quote: string
  /** Why this quote supports the band / illustrates the error. */
  readonly explanation: string
  /** Validator-owned: true once the quote is confirmed verbatim in the answer. */
  readonly verified: boolean
  /** Optional start char offset into the normalised answer (validator-set). */
  readonly startOffset?: number
  /** Optional end char offset into the normalised answer (validator-set). */
  readonly endOffset?: number
}

// ─── §2.3 A tagged error (V2 — required `severity` + validator `verified`) ────

/**
 * A single tagged, grounded error (doc 13 §2.3). `type` is drawn from the shared
 * closed taxonomy so errors aggregate into the §4 learner model. Unlike the
 * legacy {@link MarkedError} (optional severity, no verified flag), here
 * `severity` is REQUIRED and `verified` is validator-owned (same rule as
 * {@link EvidenceSpanV2.verified}).
 */
export interface MarkingError {
  /** Category of the error, from the canonical closed taxonomy. */
  readonly type: MarkingErrorType
  /** Verbatim offending text copied from the answer. */
  readonly quote: string
  /** A corrected version of the quote. */
  readonly correction: string
  /** Optional teaching note explaining the error and the fix. */
  readonly explanation?: string
  /** Relative seriousness — required on the canonical result (doc 13 §2.3). */
  readonly severity: MarkingErrorSeverity
  /** Validator-owned: true once the quote is confirmed verbatim in the answer. */
  readonly verified: boolean
}

// ─── §2.4 Per-criterion score (discriminated on `scale`) ─────────────────────

/**
 * Stable criterion code (doc 13 §2.4). IELTS: `'TR' | 'CC' | 'LR' | 'GRA'`.
 * GCSE: `'AO1'..'AO6'` / `'R1'..'W5'`. Open string so the engine is board-agnostic.
 */
export type CriterionCode = string

/** Fields shared by both criterion scales (doc 13 §2.4 `CriterionScoreBase`). */
export interface CriterionScoreBase {
  /** Stable, board-specific criterion code. */
  readonly code: CriterionCode
  /** Human-readable criterion label. */
  readonly label: string
  /** The pack band-descriptor text the answer was matched to (grounding). */
  readonly descriptorMatched: string
  /** 1–3 verified evidence spans supporting this criterion's band/mark. */
  readonly evidence: readonly EvidenceSpanV2[]
  /** Model-reported per-criterion confidence in [0, 1]; input to the gate. */
  readonly confidence: number
  /** Short rationale tying the score to the descriptor. */
  readonly rationale: string
}

/** IELTS / band-scale criterion, integer band 0–9 (doc 13 §2.4). */
export interface BandCriterionScore extends CriterionScoreBase {
  readonly scale: 'band'
  /** Integer band 0–9. */
  readonly band: number
  /** Maximum band (9 for IELTS). */
  readonly maxBand: number
}

/** GCSE / marks-based criterion (doc 13 §2.4). */
export interface MarksCriterionScore extends CriterionScoreBase {
  readonly scale: 'marks'
  /** Marks awarded. */
  readonly awardedMarks: number
  /** Maximum marks available. */
  readonly maxMarks: number
  /** Descriptor band label, e.g. "Level 4". */
  readonly band: string
}

/**
 * A per-criterion score (doc 13 §2.4). Discriminated on `scale`: callers narrow
 * on `'band'` (IELTS) vs `'marks'` (GCSE) before reading scale-specific fields.
 */
export type CriterionScoreV2 = BandCriterionScore | MarksCriterionScore

// ─── §2.5 Validator-derived flags ────────────────────────────────────────────

/**
 * Flags derived by the Validator, NOT the model (doc 13 §2.5). These power the
 * confidence gate and the audit trail. `gradeIndicativeOnly` is GCSE-only and
 * optional (the grade came from the AQA proxy curve, not a verified board table).
 */
export interface ValidationFlags {
  /** Count of evidence/error quotes the validator could not verify verbatim. */
  readonly unverifiedEvidenceCount: number
  /** |proposed_overall − recomputed_overall| > 0.5 (spec §5.1). */
  readonly overallDisagreement: boolean
  /** Self-consistency was triggered for this mark (spec §6). */
  readonly selfConsistencyRun: boolean
  /** Bands diverged > 1 across self-consistency runs (spec §6). */
  readonly selfConsistencyDiverged: boolean
  /** GCSE-only: grade is from the AQA proxy curve, not a verified board table. */
  readonly gradeIndicativeOnly?: boolean
}

// ─── §2.6 Overall score (discriminated on `kind`, always code-computed) ───────

/**
 * IELTS / band overall (doc 13 §2.6). `overallBand` is ALWAYS recomputed in code
 * (`src/lib/ielts/bands.ts:overallBand` — never trusted from the model);
 * `proposedOverallBand` retains the model's figure for the §5.1 disagreement
 * check and audit only. `bandRange` is surfaced when self-consistency diverges.
 */
export interface BandOverall {
  readonly kind: 'band'
  /** Code-recomputed mean-of-criteria, half-band rounded. */
  readonly overallBand: number
  /** What the model proposed — retained for audit/disagreement only. */
  readonly proposedOverallBand: number
  /** Optional [min, max] band range when self-consistency diverges. */
  readonly bandRange?: readonly [number, number]
}

/**
 * GCSE / grade overall (doc 13 §2.6). `predictedGrade`/`totalMarks` are always
 * code-computed (`grade-predictor`); the boundary provenance fields satisfy the
 * EU AI Act Art.12/15 traceability the legacy `MarkingResult` already carries.
 */
export interface GradeOverall {
  readonly kind: 'grade'
  /** Total marks awarded across criteria. */
  readonly totalMarks: number
  /** Maximum marks available. */
  readonly maxMarks: number
  /** Predicted GCSE grade, "1".."9". */
  readonly predictedGrade: string
  /** Grade band category, e.g. "Grade 8-9". */
  readonly gradeBand: string
  /** Provenance of the boundary model behind `predictedGrade`. */
  readonly boundarySource?: string
  /** Human-readable boundary provenance (EU AI Act Art.12/15). */
  readonly boundaryDetail?: string
}

/**
 * The overall score (doc 13 §2.6). Discriminated on `kind`: `'band'` (IELTS) vs
 * `'grade'` (GCSE). Always computed in code, never trusted from the model.
 */
export type Overall = BandOverall | GradeOverall

// ─── §2.7 Feedback block ─────────────────────────────────────────────────────

/**
 * A single student-facing feedback point (doc 13 §2.7). `upgradeRewrite` is
 * optional and POLICY-GATED per module by the Feedback Generator (adult IELTS
 * candidates may receive rewrites; school-age GCSE minors deliberately do not).
 * `microLessonErrorType` keys a micro-lesson link to the shared taxonomy.
 */
export interface FeedbackPoint {
  /** The feedback point itself. */
  readonly point: string
  /** Optional upgrade rewrite (spec §3/§7); policy-gated per module. */
  readonly upgradeRewrite?: string
  /** Optional micro-lesson link keyed by error type (spec §7). */
  readonly microLessonErrorType?: MarkingErrorType
  /** Optional supporting verbatim quote. */
  readonly quote?: string
}

/**
 * The student-facing feedback block (doc 13 §2.7), generated FROM the validated
 * mark (the Feedback Generator reads the result read-only and never mutates
 * marks). `nextAction` is the single prioritised next action; the GCSE legacy
 * `nextStepsToNextGrade` list is optional so IELTS can omit it.
 */
export interface FeedbackBlock {
  /** What the candidate did well. */
  readonly strengths: readonly FeedbackPoint[]
  /** Targeted improvements (guidance, not rewrites unless policy allows). */
  readonly improvements: readonly FeedbackPoint[]
  /** A single prioritised next action (spec §3 "one clear next action"). */
  readonly nextAction: string
  /** GCSE legacy multi-step list; optional so IELTS can omit it. */
  readonly nextStepsToNextGrade?: readonly string[]
  /** Holistic summary paragraph. */
  readonly summary: string
}

// ─── §2.8 Provenance ─────────────────────────────────────────────────────────

/**
 * Provenance for EU AI Act Art.12/15 traceability (doc 13 §2.8). The model/
 * prompt/rubric version ids are free-form strings resolved at call time (do NOT
 * bake specific model ids or effort tiers into the type — doc 13 R5). `runCount`
 * is 1 normally, or 3 when self-consistency ran.
 */
export interface ResultProvenance {
  /** Id of the model version that produced the mark (resolved at call time). */
  readonly modelVersionId?: string
  /** Id of the prompt version used. */
  readonly promptVersionId?: string
  /** Id of the rubric/pack version used. */
  readonly rubricVersionId?: string
  /** ISO-8601 timestamp the mark was produced. */
  readonly markedAt: string
  /** 1, or 3 when self-consistency ran. */
  readonly runCount: number
}

// ─── §2.8 The canonical result — `MarkingResultV2` ───────────────────────────

/**
 * The canonical, persisted marking result (doc 13 §2.8).
 *
 * `schemaVersion: 2` is the discriminator that lets readers of `ai_result`
 * distinguish this from the legacy `schemaVersion`-less `MarkingResult` during
 * migration. Every scored claim is traceable: criteria carry verified evidence,
 * errors carry verified quotes + taxonomy type, the overall is code-computed,
 * confidence and `needsHumanReview` are code-owned. The model's free-text
 * `holisticNote` / `borderlineFlags` are retained for the UI and the gate.
 */
export interface MarkingResultV2 {
  /** Schema discriminator for safe migration alongside legacy MarkingResult. */
  readonly schemaVersion: 2
  /** Single FK back to the exact ruleset (doc 12). e.g. "ielts_writing_v2025.1". */
  readonly packVersion: string
  /** Module discriminator: 'ielts_writing' | 'gcse_english' | 'eal_cefr' | ... */
  readonly module: string

  /** Routing context echoed from the Router for audit. */
  readonly board: string
  /** Optional subject (GCSE). */
  readonly subject?: string
  /** Optional qualification. */
  readonly qualification?: string
  /** The task type marked, e.g. "IELTS_Writing_Task2". */
  readonly taskType: string
  /** Optional question id within the scheme. */
  readonly questionId?: string

  /** Per-criterion marks (4 for IELTS; the AO set for GCSE). */
  readonly criteria: readonly CriterionScoreV2[]

  /** Code-computed overall (discriminated on `kind`). */
  readonly overall: Overall

  /** Tagged, verified errors — the taxonomy backbone for §4 analytics. */
  readonly errors: readonly MarkingError[]

  /** Structured integrity signals from the model (re-asserted by the validator). */
  readonly integrityFlags: IntegrityFlags
  /** Validator-derived flags. */
  readonly validationFlags: ValidationFlags

  /** Code-owned overall confidence in [0, 1]. */
  readonly overallConfidence: number
  /** True if the §5.4 gate fired (low confidence, any integrity flag, etc.). */
  readonly needsHumanReview: boolean

  /** Student-facing teaching, generated FROM the validated mark. */
  readonly feedback: FeedbackBlock

  /** Short overall comment from the model. */
  readonly holisticNote?: string
  /** Free-text borderline notes from the model (spec §4 `borderline_flags`). */
  readonly borderlineFlags?: readonly string[]

  /** Provenance for EU AI Act Art.12/15 traceability. */
  readonly provenance: ResultProvenance
}

// ─── Canonical IELTS criterion codes (doc 13 §2.4 / §3.2) ────────────────────

/**
 * The four canonical IELTS short codes, in the order doc 13 §3.3 requires the
 * validator to reorder criteria to: [TR, CC, LR, GRA]. Exported so the
 * mapper/validator and the guard test share ONE ordered tuple.
 */
export const IELTS_CRITERION_CODES = ['TR', 'CC', 'LR', 'GRA'] as const

/** A canonical IELTS criterion short code. */
export type IeltsCriterionCode = (typeof IELTS_CRITERION_CODES)[number]

/** Schema-version discriminator value for {@link MarkingResultV2}. */
export const MARKING_RESULT_SCHEMA_VERSION = 2 as const
