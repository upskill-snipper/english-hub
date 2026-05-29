/**
 * Engine SEAM interfaces — the single source every Marking-Engine component imports.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Design doc 10 (§2.1) defines one façade — `markSubmission(input)` — that runs six
 * components in a fixed order:
 *
 *   route → resolvePack → retrieve → mark → validate → generateFeedback
 *
 * Each arrow is a SEAM: a typed boundary owned by a different design doc and built by a
 * different Stage-3 agent (doc 10 = Router/façade, doc 11 = Knowledge Pack, doc 12 =
 * Retrieval, doc 14 = Validator, doc 16 = Feedback). Doc 10 §5 R8 ("scope creep across
 * seams") makes the consequence explicit: if those agents each invent their own input
 * shapes, the façade cannot compose them and `markSubmission` breaks. So the seam
 * contracts live HERE, in ONE module, and every component imports them rather than
 * re-declaring them. This is the authority Stage-3 implements against.
 *
 * WHAT THIS FILE IS NOT
 * ---------------------
 *   • Not runtime logic. This is types ONLY (doc 10 build Step 1: "types only; no
 *     runtime code added"). The Router/resolver/retrieval/validator/feedback bodies
 *     live in their own modules and IMPORT from here.
 *   • Not a second result schema. The marking RESULT shape is already settled in
 *     `./result-schema` (Stage 1). We IMPORT {@link MarkingResultV2} and its parts and
 *     never redefine them — doc 10 §5 R6 forbids forking the result type.
 *   • Not a model registry. The model tiers are settled in `./models`. We IMPORT
 *     {@link MarkingModelTier} and never re-list model ids — doc 10 §5 R4 / R7.
 *
 * COMPOSITION, NOT FORK (doc 10 §5 R6)
 * ------------------------------------
 * Engine types COMPOSE the existing pieces: the result types come from `./result-schema`,
 * the model tier from `./models`, and the legacy GCSE `MarkScheme` is referenced as a
 * type-only import (re-exported as {@link LegacyMarkScheme}) so the GCSE `resolvePack`
 * branch can return it without this module taking a runtime dependency on the
 * scheme-registry barrel.
 *
 * NAMING / CASING
 * ---------------
 * Engine-layer fields are camelCase (matching {@link MarkingResultV2} and doc 10's
 * pseudocode). The only snake_case in the engine is INSIDE the imported result schema
 * (e.g. {@link IntegrityFlags}), which we do not touch.
 */

import type { MarkingModelTier } from './models'
import type {
  MarkingResultV2,
  CriterionScoreV2,
  Overall,
  MarkingError,
  IntegrityFlags,
  ValidationFlags,
  FeedbackBlock,
  ResultProvenance,
  EvidenceSpanV2,
} from './result-schema'
// Type-only import: referencing the legacy scheme shape for the GCSE resolve branch
// WITHOUT pulling the scheme-registry barrel (and its 20 object literals) into the
// type module's runtime graph. `import type` is fully erased at compile time.
import type { MarkScheme } from '../mark-schemes/types'

// ════════════════════════════════════════════════════════════════════════════════
// §0 — Re-exports so the engine composes the settled schemas (doc 10 build Step 1)
// ════════════════════════════════════════════════════════════════════════════════

// Re-export the result types the seams traffic in, so a Stage-3 component can import
// EVERYTHING it needs from `engine/types` (the single seam module) without also having
// to reach into `engine/result-schema`. These are RE-EXPORTS, not redefinitions —
// `result-schema.ts` remains the sole source of truth (doc 10 §5 R6).
export type {
  MarkingResultV2,
  CriterionScoreV2,
  Overall,
  MarkingError,
  IntegrityFlags,
  ValidationFlags,
  FeedbackBlock,
  ResultProvenance,
  EvidenceSpanV2,
  MarkingModelTier,
}

/**
 * The legacy GCSE `MarkScheme` shape, re-exported under an explicit "legacy" alias.
 *
 * WHY ALIASED: doc 10 §1.2 keeps the existing 20 GCSE schemes resolving through the old
 * `getMarkScheme` lookup during migration; the GCSE branch of {@link PackResolveResult}
 * carries one. Aliasing to `LegacyMarkScheme` signals at the type level that this is the
 * pre-pack representation, distinct from the versioned {@link KnowledgePack} (doc 11)
 * that new areas (IELTS) use.
 */
export type LegacyMarkScheme = MarkScheme

// ════════════════════════════════════════════════════════════════════════════════
// §1 — Routing dimensions: Area / TaskType / Level (doc 10 §2.2, §2.3)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * An exam area — the top-level routing dimension (doc 10 §0, §2.3). One Marking Engine
 * serves all areas; only the Knowledge Pack changes per area. Open string union with
 * the known areas listed for editor help: a new area "plugs in" via the area registry
 * + a pack (doc 10 §2.3), so the type must not be a closed enum that needs editing for
 * every new area. The `(string & {})` member keeps autocompletion for the listed
 * literals while still admitting future areas.
 */
export type Area = 'gcse' | 'ielts' | 'eal' | (string & {})

/**
 * The task type within an area, e.g. `"IELTS_Writing_Task2"` or a GCSE question type
 * (doc 10 §2.2). Board-agnostic free text — the same openness rationale as {@link Area};
 * matches the free-string `taskType` on {@link MarkingResultV2}.
 */
export type TaskType = string

/**
 * The candidate's working level on the area's own scale (doc 10 §2.2, §6 R7).
 *
 * `area` discriminates the scale: an IELTS level is a 0–9 band, a CEFR/EAL level is an
 * ordinal label ("B1"), a GCSE level is a tier/target grade. `value` is the raw scale
 * point; `scaleHint` names the scale for downstream interpretation. Level is a SOFT
 * signal (doc 10 §6 R7): it nudges exemplar retrieval (nearest-band) but never hard-
 * gates routing, and its absence merely lowers routing confidence.
 */
export interface Level {
  /** The area whose scale `value` is expressed on (discriminator for interpretation). */
  readonly area: Area
  /** Raw scale point: a band number (IELTS 0–9), a CEFR ordinal, a GCSE target grade. */
  readonly value: string | number
  /** Optional human/machine label of the scale, e.g. "ielts_band" | "cefr" | "gcse_grade". */
  readonly scaleHint?: string
}

// ════════════════════════════════════════════════════════════════════════════════
// §2 — Engine input (doc 10 §2.1 EngineInput)
// ════════════════════════════════════════════════════════════════════════════════

/** Where a submission originated — mirrors the `marking_submissions.source` spine (doc 10 §1.2). */
export type SubmissionSource = 'b2c_self' | 'b2b_class'

/**
 * The raw submission plus any caller-supplied routing hints (doc 10 §2.1, §2.2).
 *
 * Hints are OPTIONAL: when the caller supplies enough to uniquely identify area+taskType
 * (the GCSE UI passes `markSchemeId`+`questionId`; a B2B row carries `exam_board`), the
 * Router trusts them (mode 1, `basis:'explicit'`, confidence 1) and skips classification
 * — preserving today's behaviour exactly. When they are missing/partial, the Router
 * classifies from the text (mode 2). A `packPin` (mode 3) bypasses version resolution.
 */
export interface RawSubmission {
  /** The task prompt / question the candidate answered. */
  readonly questionText: string
  /** The candidate's answer — the text being marked. */
  readonly answerText: string
  /** Optional studied text/extract (GCSE Literature responses reference a set text). */
  readonly studiedText?: string
  /** Optional caller hint: the area (skips area classification when trusted). */
  readonly areaHint?: Area
  /** Optional caller hint: the task type. */
  readonly taskTypeHint?: TaskType
  /** Optional caller hint: the candidate's level (soft signal, doc 10 §6 R7). */
  readonly levelHint?: Level
  /** Legacy GCSE explicit-routing key — the opaque mark-scheme id (doc 10 §1.1, mode 1). */
  readonly markSchemeId?: string
  /** Legacy GCSE explicit-routing key — the question id within the scheme (mode 1). */
  readonly questionId?: string
  /**
   * Exact pack pin, e.g. "ielts_writing_v2025.1" (doc 10 §2.2 mode 3). Bypasses version
   * resolution for re-marks / reproducibility; the resolver still validates it loads.
   */
  readonly packPin?: string
}

/**
 * Caller/identity context for the marking call (doc 10 §2.1 `context`).
 *
 * `isMinor` is load-bearing downstream: the Feedback Generator policy-gates upgrade
 * rewrites on it (doc 13 §2.7 — adult IELTS candidates may get rewrites, school-age
 * GCSE minors do not). `source` selects B2C-inline vs B2B-batch behaviour (doc 10 §5 R5).
 */
export interface EngineContext {
  /** Authenticated user id. */
  readonly userId: string
  /** B2C self-serve vs B2B class submission (doc 10 §1.2). */
  readonly source: SubmissionSource
  /** UI locale for any localisable strings. */
  readonly locale: string
  /** True when the candidate is a minor — gates feedback rewrite policy (doc 13 §2.7). */
  readonly isMinor: boolean
}

/**
 * Engine capability switches the caller can toggle per call (doc 10 §2.1 `caps`).
 *
 * `allowClarify=false` (server-side B2B batch, no human in the loop) turns a low-
 * confidence route into a typed {@link RoutingError} `'AMBIGUOUS_SUBMISSION'` instead
 * of a {@link NeedsConfirmation} — the batch flags the item for a human rather than
 * marking it against the wrong pack (doc 10 §2.2 confidence gate).
 */
export interface EngineCaps {
  /** When false, the engine never asks the student to confirm — it errors instead. */
  readonly allowClarify: boolean
}

/**
 * The single input to the façade {@link markSubmission} (doc 10 §2.1 EngineInput).
 * Bundles the raw submission, identity context, and capability switches.
 */
export interface MarkSubmissionInput {
  /** The submission text + routing hints. */
  readonly rawSubmission: RawSubmission
  /** Identity / caller context. */
  readonly context: EngineContext
  /** Per-call capability switches. */
  readonly caps: EngineCaps
}

// ════════════════════════════════════════════════════════════════════════════════
// §3 — Router output: RouterResult (doc 10 §2.2)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * How the Router arrived at its decision (doc 10 §2.2 `basis`).
 *   • 'explicit'   — trusted caller metadata uniquely identified area+taskType (mode 1).
 *   • 'pinned'     — a {@link RawSubmission.packPin} fixed the pack (mode 3).
 *   • 'classified' — heuristics and/or the LLM classifier inferred it (mode 2).
 */
export type RoutingBasis = 'explicit' | 'pinned' | 'classified'

/**
 * One ranked candidate the Router considered (doc 10 §2.2 confidence gate). Carries a
 * human-readable `label` so a {@link NeedsConfirmation} can render the choice to the
 * student ("Is this IELTS Writing Task 2? Or GCSE AQA Paper 2?").
 */
export interface RoutingCandidate {
  /** Inferred area. */
  readonly area: Area
  /** Inferred task type. */
  readonly taskType: TaskType
  /** Inferred level, if the heuristics produced one (soft, doc 10 §6 R7). */
  readonly level?: Level
  /** Calibrated confidence in this candidate, in [0, 1]. */
  readonly confidence: number
  /** Human-readable label for the confirm UI, e.g. "IELTS Writing — Task 2". */
  readonly label: string
}

/**
 * A confident routing decision (doc 10 §2.2). The Router stops here: it has chosen the
 * area/taskType/level and the pack version, but does NOT load descriptors, call the
 * marker, compute bands, or generate feedback (doc 10 §2.2 "The Router does NOT").
 *
 * `status:'routed'` discriminates this from {@link NeedsConfirmation} on the union.
 */
export interface RoutingDecision {
  readonly status: 'routed'
  /** Chosen area. */
  readonly area: Area
  /** Chosen task type. */
  readonly taskType: TaskType
  /** Chosen level (soft; may be absent if no signal — doc 10 §6 R7). */
  readonly level?: Level
  /**
   * The resolved pack version this decision points at, e.g. "ielts_writing_v2025.1".
   * Threaded into provenance and persisted (doc 10 §2.2 → seam A; doc 11 §2.5).
   */
  readonly packVersion: string
  /** Calibrated confidence of the chosen route, in [0, 1]. 1.0 for explicit/pinned. */
  readonly confidence: number
  /** How the route was decided. */
  readonly basis: RoutingBasis
}

/**
 * The low-confidence "ask the student to confirm" outcome (doc 10 §2.2 / spec §9).
 *
 * Returned when `topConfidence < ROUTE_CONFIRM_THRESHOLD` OR the margin to the runner-up
 * is too small (and `caps.allowClarify` is true). The engine DOES NOT MARK; the UI shows
 * `candidates` and the student's pick comes back as explicit metadata on the next call
 * → mode 1 → mark. `status:'needs_confirmation'` discriminates the union.
 */
export interface NeedsConfirmation {
  readonly status: 'needs_confirmation'
  /** Top-N candidates for the student to choose between (each with a `label`). */
  readonly candidates: readonly RoutingCandidate[]
  /** Human-readable reason routing was not confident enough to proceed. */
  readonly reason: string
}

/**
 * The Router's result: either a confident {@link RoutingDecision} or a
 * {@link NeedsConfirmation} clarify request (doc 10 §2.2). Discriminated on `status`.
 *
 * The third low-confidence outcome — when `caps.allowClarify === false` — is NOT a
 * member of this union: it is thrown/returned as a {@link RoutingError}
 * `'AMBIGUOUS_SUBMISSION'` (doc 10 §2.2) so unattended batches get a deterministic
 * error rather than a stuck confirm loop.
 */
export type RouterResult = RoutingDecision | NeedsConfirmation

// ════════════════════════════════════════════════════════════════════════════════
// §4 — Typed errors: RoutingError (doc 10 §2.2, Step 1)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * The closed set of engine-level routing/resolution failures (doc 10 build Step 1).
 *   • 'NO_PACK'              — no published pack matches (fail-closed; doc 10 §2.2, §1.2).
 *   • 'AMBIGUOUS_SUBMISSION' — low confidence with no human in the loop (allowClarify=false).
 *   • 'INVALID_METADATA'     — caller metadata / packPin is malformed or unresolvable.
 */
export type RoutingErrorCode = 'NO_PACK' | 'AMBIGUOUS_SUBMISSION' | 'INVALID_METADATA'

/**
 * A typed, throwable routing/resolution error (doc 10 §2.2). The HTTP adapters map
 * `code` to a status (NO_PACK→422, AMBIGUOUS_SUBMISSION→409, doc 10 Step 8).
 *
 * This is an INTERFACE describing the public shape, not a class declaration, so the
 * seam module stays runtime-free (types only, doc 10 Step 1). The implementing module
 * (`router.ts` / `resolve-pack.ts`) provides the concrete `class RoutingError extends
 * Error implements RoutingErrorShape`; this contract pins the fields it MUST expose.
 */
export interface RoutingErrorShape extends Error {
  /** Discriminant the route adapters switch on to choose an HTTP status. */
  readonly code: RoutingErrorCode
  /** The offending key (mark-scheme id, packPin, area+taskType) for a clear 4xx body. */
  readonly offendingKey?: string
}

// ════════════════════════════════════════════════════════════════════════════════
// §5 — Knowledge Pack: KnowledgePackRef + KnowledgePack (doc 11 §2.2–§2.4)
// ════════════════════════════════════════════════════════════════════════════════

/** Pack publication lifecycle (doc 11 §2.2). Only `published` (+ verified) packs resolve. */
export type PackStatus = 'draft' | 'published' | 'deprecated'

/**
 * The criteria-scale discriminator a pack declares (doc 11 §2.2 `criteriaModel`, §2.6).
 * Lets one loader serve IELTS (4 band criteria), GCSE (AO marks) and EAL/CEFR.
 */
export type CriteriaModel = 'ielts_4criteria' | 'gcse_ao_marks' | 'cefr' | (string & {})

/**
 * A lightweight, immutable POINTER to a specific pack version (doc 11 §2.3 `fullId`).
 *
 * This is what crosses the Router → resolver → provenance boundary when the full parsed
 * pack is not needed — e.g. the `packVersion` on {@link RoutingDecision}, or the value
 * persisted as `pack_version` (doc 11 §2.5). `fullId` is the single FK back to the exact
 * immutable pack directory; `checksum` pins integrity for the audit trail.
 */
export interface KnowledgePackRef {
  /** Stable pack id WITHOUT version, e.g. "ielts_writing_task2_academic" (doc 11 §2.2). */
  readonly packId: string
  /** Path/version, e.g. "v2025.1" (doc 11 §2.3 vYYYY.N). */
  readonly version: string
  /** The persisted `pack_version` value, e.g. "ielts_writing_v2025.1" (doc 11 §2.3). */
  readonly fullId: string
  /** Owning area/board, e.g. "ielts" (matches {@link Area}). */
  readonly board: Area
  /** Optional manifest checksum for integrity pinning in provenance (doc 11 §2.5). */
  readonly checksum?: string
}

/**
 * The pack identity + sourcing/integrity metadata (doc 11 §2.2 `manifest.json`).
 *
 * Mirrors the manifest fields the loader validates and the coverage test asserts. The
 * `sourcing` block is the copyright guardrail (doc 11 §6): a pack with
 * `containsBoardSecureMaterial !== false` MUST NOT load, and `status:'published'`
 * requires `verified:true`.
 */
export interface PackManifest {
  /** Stable id without version (doc 11 §2.2). */
  readonly packId: string
  /** Version directory token "vYYYY.N" (doc 11 §2.3). */
  readonly version: string
  /** Persisted `pack_version`, e.g. "ielts_writing_v2025.1" (doc 11 §2.3). */
  readonly fullId: string
  /** Owning area/board. */
  readonly board: Area
  /** Subject or exam, e.g. "writing". */
  readonly subjectOrExam: string
  /** Qualification, e.g. "academic" | "general" | GCSE tier. */
  readonly qualification: string
  /** Task type, e.g. "task2". */
  readonly taskType: TaskType
  /** Criteria-scale discriminator (doc 11 §2.2, §2.6). */
  readonly criteriaModel: CriteriaModel
  /** Publication lifecycle status. */
  readonly status: PackStatus
  /** Version of the manifest FORMAT (doc 11 §2.3) so the loader can evolve the schema. */
  readonly specVersion: string
  /** Human verification gate, mirrors grade-boundaries.verified (doc 11 §1.3, §2.2). */
  readonly verified: boolean
  /** Where the descriptors were sourced. */
  readonly sourceUrl?: string
  /** ISO date the source was retrieved. */
  readonly retrievedAt?: string
  /** ISO timestamp the pack was published (null/absent while draft). */
  readonly publishedAt?: string | null
  /** Per-file sha256 checksums recorded at publish time (doc 11 §2.2). */
  readonly checksums: Readonly<Record<string, string>>
  /** Copyright / sourcing guardrail (doc 11 §6). */
  readonly sourcing: PackSourcing
}

/**
 * The copyright/sourcing record on a pack manifest (doc 11 §2.2, §6).
 * `containsBoardSecureMaterial` MUST be false to publish — machine-checked by the
 * coverage test and refused by the loader.
 */
export interface PackSourcing {
  /** Provenance of the descriptor language. */
  readonly descriptorSource: 'own_paraphrase' | 'licensed' | 'public_domain' | (string & {})
  /** Provenance of the exemplars — NEVER board-secure scripts (doc 11 §6, doc 12 §6). */
  readonly exemplarSource: 'own_expert_marked' | 'licensed' | (string & {})
  /** Hard guardrail: must be false to load/publish (doc 11 §2.4, §6). */
  readonly containsBoardSecureMaterial: boolean
  /** Free-text licence note. */
  readonly licenceNote?: string
  /** Credentialed expert marker who produced the exemplars (doc 11 §6). */
  readonly expertMarker?: {
    readonly name: string
    readonly credential: string
    readonly markedAt: string
  }
}

/**
 * One band's descriptor language for one criterion (doc 11 §2.4 band-descriptors.json).
 * The {@link Retrieval} layer emits these as the `{{BAND_DESCRIPTORS}}` rubric block
 * (doc 12 §2.1).
 */
export interface PackBandDescriptor {
  /** Band/level this descriptor applies to (IELTS 0–9; GCSE level ordinal). */
  readonly band: number
  /** The descriptor prose for this criterion at this band. */
  readonly descriptor: string
}

/**
 * One rubric criterion within a pack (doc 11 §2.4). For IELTS the four are TR/CC/LR/GRA;
 * `bands` holds the per-band descriptor language Retrieval injects whole (doc 12 §2.1).
 */
export interface PackCriterion {
  /** Stable criterion code, e.g. "TR" (IELTS) or "AO1" (GCSE). */
  readonly code: string
  /** Human-readable label. */
  readonly label: string
  /** Per-band descriptor table (doc 12 consumes `criteria[].bands[]`). */
  readonly bands: readonly PackBandDescriptor[]
}

/**
 * One expert-marked exemplar script (doc 11 §1.5, doc 12 §2.3 — the single biggest
 * accuracy lever). Tagged with its overall band so Retrieval can do nearest-band
 * selection; `sourceTag` records own-IP provenance (NEVER copyrighted official scripts).
 */
export interface PackExemplar {
  /** Unique id within the pack. */
  readonly id: string
  /** Overall band this exemplar was expert-marked at — the selection key (doc 12 §2.3). */
  readonly overallBand: number
  /** Optional per-criterion bands (richer anchoring). */
  readonly perCriterionBands?: Readonly<Record<string, number>>
  /** The exemplar essay body. */
  readonly essay: string
  /** One-line examiner rationale for the band. */
  readonly rationale: string
  /** Own-IP provenance label (doc 12 §6 copyright guardrail). */
  readonly sourceTag: string
}

/**
 * The pack's cheap first-pass band-estimator threshold table (doc 12 §2.4).
 *
 * Retrieval reads this to compute `b̂` from code-only signals (word count, lexical
 * diversity, paragraph/discourse cues) WITHOUT a model call, then clamps to a band
 * range. Carried BY the pack so the thresholds are tunable per area/version. The exact
 * field set is owned by the Retrieval implementation (doc 12 Step 2); the seam only
 * guarantees a (de)serialisable record is present.
 */
export interface PackEstimator {
  /** Lower clamp for the estimate (IELTS MVP: 4). */
  readonly minBand: number
  /** Upper clamp for the estimate (IELTS MVP: 8). */
  readonly maxBand: number
  /** Opaque, pack-tunable threshold table consumed by the estimator (doc 12 §2.4). */
  readonly thresholds: Readonly<Record<string, number>>
}

/**
 * A parsed, validated, in-memory Knowledge Pack (doc 11 §2.4). This is what the loader
 * returns and what {@link EngineComponents.retrieve} consumes. Immutable per version
 * (doc 11 §2.3). Composed of: the manifest (identity/sourcing), the rubric criteria
 * (+ per-band descriptors), the exemplar bank, conventions, the prompt template, and
 * the first-pass estimator table.
 *
 * `version` is surfaced at the top level for the common provenance read (doc 12 §2 —
 * Retrieval returns `packVersion` from `pack.version`).
 */
export interface KnowledgePack {
  /** The persisted pack_version, e.g. "ielts_writing_v2025.1" (== manifest.fullId). */
  readonly version: string
  /** Pack identity, integrity and sourcing metadata. */
  readonly manifest: PackManifest
  /** The rubric criteria with their per-band descriptor language (doc 12 §2.1/§2.2). */
  readonly criteria: readonly PackCriterion[]
  /** The expert-marked exemplar bank for nearest-band anchoring (doc 12 §2.3). */
  readonly exemplars: readonly PackExemplar[]
  /** Board-specific conventions & common pitfalls (anti-drift guidance, doc 11 §2.1). */
  readonly conventions: Readonly<Record<string, unknown>>
  /** The system-prompt template WITH {{…}} placeholders (doc 11 §2.1). */
  readonly promptTemplate: string
  /** The cheap first-pass band-estimator table (doc 12 §2.4). */
  readonly estimator: PackEstimator
}

// ════════════════════════════════════════════════════════════════════════════════
// §6 — Retrieval: RetrievalResult (doc 12 §2)
// ════════════════════════════════════════════════════════════════════════════════

/** How the first-pass band estimate was produced (doc 12 §2.4). MVP ships `'heuristic'`. */
export type FirstPassSource = 'heuristic' | 'cheap-model'

/**
 * The cheap, pre-marking band estimate that drives exemplar selection (doc 12 §2.4).
 * NEVER shown to the user, NEVER persisted as a mark, NEVER passed to the marker as a
 * "suggested band" — it exists solely to pick anchors (doc 12 §2.4, §6 anchoring-bias).
 */
export interface FirstPassEstimate {
  /** The estimated overall band (integer, clamped to the pack's estimator range). */
  readonly band: number
  /** Provenance of the estimate, for calibration (doc 12 §2.4). */
  readonly source: FirstPassSource
}

/**
 * Token accounting + any trimming Retrieval applied (doc 12 §2.5 BudgetReport).
 * Uses a cheap chars/4 approximation for MVP (doc 12 §2.5).
 */
export interface BudgetReport {
  /** Approx total marker-input tokens (chars/4). */
  readonly estTokens: number
  /** Approx tokens in the exemplar block (subject to the hard cap). */
  readonly exemplarTokens: number
  /** True if exemplar essays were truncated to fit the cap (band/rationale kept). */
  readonly exemplarTrimmed: boolean
  /** True if no exemplars were available for the needed bands (marker stays descriptor-grounded). */
  readonly exemplarsOmitted: boolean
  /** Approx tokens in the cacheable prefix (persona + instructions + tool schema + rubric). */
  readonly cacheableTokens: number
}

/** Per-call tuning knobs for Retrieval (doc 12 §2.5, Step 1 RetrievalOptions). */
export interface RetrievalOptions {
  /** Override the pack's default exemplar-block token cap (doc 12 §2.5). */
  readonly exemplarTokenCap?: number
  /** Force the first-pass estimate source (testing/calibration, doc 12 §2.4). */
  readonly forceEstimateSource?: FirstPassSource
}

/**
 * What Retrieval pre-positions for the marker (doc 12 §2): the selected descriptors,
 * the nearest exemplars, the cache-boundary marker, the estimate that drove selection,
 * the pack version (provenance) and a budget report.
 *
 * CACHE-BOUNDARY MARKER (doc 12 §2.5, §6): `rubricBlock` and `exemplarBlock` are returned
 * as TWO SEPARATE strings precisely so the prompt assembler can place the Anthropic
 * `cache_control` breakpoint BETWEEN them — the rubric prefix is stable per pack version
 * (cacheable), the exemplar block is submission-specific (must sit after the breakpoint).
 * `cacheableBoundary` names where the cached prefix ends so the assembler and its test
 * agree on the breakpoint without re-deriving it.
 *
 * `rubricBlock` fills the prompt's `{{BAND_DESCRIPTORS}}` placeholder; `exemplarBlock`
 * fills `{{EXEMPLARS}}` (doc 12 §2).
 */
export interface RetrievalResult {
  /** ALL four criteria's full band descriptors (whole rubric — doc 12 §2.1). Cacheable. */
  readonly rubricBlock: string
  /** Nearest-band exemplars only (1–3 scripts — doc 12 §2.3). NOT cacheable. */
  readonly exemplarBlock: string
  /** The selected exemplars (structured), for downstream "show a better version" feedback. */
  readonly selectedExemplars: readonly PackExemplar[]
  /**
   * The cache-boundary marker (doc 12 §2.5): which logical block the cacheable prefix
   * ends at. The assembler places `cache_control` immediately AFTER this block so the
   * submission-specific exemplar block never invalidates the cached rubric prefix.
   */
  readonly cacheableBoundary: 'after-rubric'
  /** The cheap estimate that drove exemplar selection (doc 12 §2.4). */
  readonly firstPassEstimate: FirstPassEstimate
  /** The pack version, e.g. "ielts_writing_v2025.1" — surfaced for provenance (doc 12 §2). */
  readonly packVersion: string
  /** Token accounting + trimming applied (doc 12 §2.5). */
  readonly budget: BudgetReport
}

// ════════════════════════════════════════════════════════════════════════════════
// §7 — Per-seam request shapes (doc 10 build Step 1: the five seam input interfaces)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Seam A input — pack resolution (doc 10 §2.2 → resolvePack; doc 11 §2.4).
 * Built from the {@link RoutingDecision}; resolves to the highest published+verified
 * version unless `packPin` overrides. Fails closed with {@link RoutingErrorShape}
 * `'NO_PACK'` when nothing matches.
 */
export interface PackResolveRequest {
  /** The area to resolve within. */
  readonly area: Area
  /** The task type to resolve. */
  readonly taskType: TaskType
  /** Soft level signal for the resolver (doc 10 §6 R7). */
  readonly level?: Level
  /** Exact pin overriding version resolution (doc 10 §2.2 mode 3). */
  readonly packPin?: string
  /** Legacy GCSE resolver key passed through for the `getMarkScheme` branch (doc 10 §1.2). */
  readonly resolverKey?: string
}

/**
 * Seam A output — what the resolver returns (doc 10 §2.2; doc 11 §2.4).
 *
 * Discriminated on `kind`: a new-style `'pack'` carries the parsed {@link KnowledgePack}
 * (IELTS and migrated boards); a `'legacy'` carries the existing {@link LegacyMarkScheme}
 * for un-migrated GCSE (doc 10 §1.2 keeps `getMarkScheme` working during migration). Both
 * carry a {@link KnowledgePackRef} so provenance is uniform regardless of branch.
 */
export type PackResolveResult =
  | {
      readonly kind: 'pack'
      readonly ref: KnowledgePackRef
      readonly pack: KnowledgePack
    }
  | {
      readonly kind: 'legacy'
      readonly ref: KnowledgePackRef
      readonly scheme: LegacyMarkScheme
      /** The question id selected within the legacy scheme (GCSE mode 1). */
      readonly questionId?: string
    }

/**
 * Seam B input — retrieval (doc 10 §2.1 step 3 → retrieve; doc 12 §2).
 * Retrieval is pure over `(pack, submission, opts?)`; it does NOT see routing hints or
 * caller context (doc 12 §0 — it only pre-positions grounding/anchors).
 */
export interface RetrievalRequest {
  /** The loaded pack to select descriptors + exemplars from. */
  readonly pack: KnowledgePack
  /** The submission whose answer drives the first-pass estimate (doc 12 §2.4). */
  readonly submission: RawSubmission
  /** Optional per-call tuning. */
  readonly opts?: RetrievalOptions
}

/**
 * Seam C input — the marker (doc 10 §2.1 step 4 → mark; doc 12 §3.2).
 *
 * The marker receives the pack (for the prompt template + tool schema), the retrieval
 * blocks (rubric + exemplars, kept separate for the cache boundary), the submission, and
 * the model TIER to call (doc 10 §5 R4/R7 — a tier key from {@link MarkingModelTier},
 * never an inline model id). For self-consistency (doc 12 §3.2) the SAME
 * {@link RetrievalResult} is reused across runs so the anchors are identical.
 */
export interface MarkRequest {
  /** The loaded pack (prompt template, criteria, tool schema source). */
  readonly pack: KnowledgePack
  /** The pre-positioned grounding/anchors from Retrieval (reused across SC runs). */
  readonly retrieval: RetrievalResult
  /** The submission being marked. */
  readonly submission: RawSubmission
  /** Which model tier to call — a key into MARKING_MODELS, NOT an inline id (doc 10 §5 R7). */
  readonly modelTier: MarkingModelTier
}

/**
 * Seam C output — the marker's RAW (un-validated) result (doc 10 §2.1 step 4; doc 14).
 *
 * The marker proposes scores, evidence quotes, errors and integrity flags, plus a
 * model-proposed overall — but quotes are UNVERIFIED, the overall is NOT yet code-
 * recomputed, and confidence/`needsHumanReview` are NOT yet code-owned. The Validator
 * (seam D) turns this into a {@link MarkingResultV2}. Kept structurally close to the
 * canonical result so validation is mechanical, but deliberately a DISTINCT type so the
 * type system prevents an un-validated mark being persisted as canonical.
 */
export interface RawMarkResult {
  /** Per-criterion proposed scores with (still-unverified) evidence quotes. */
  readonly criteria: readonly CriterionScoreV2[]
  /** Proposed tagged errors with (still-unverified) quotes. */
  readonly errors: readonly MarkingError[]
  /** Model-proposed integrity flags (the validator re-asserts these — doc 13 §2.5). */
  readonly integrityFlags: IntegrityFlags
  /** What the model proposed as the overall — retained for the §5.1 disagreement check. */
  readonly proposedOverall: Overall
  /** Free-text borderline notes from the model (spec §4). */
  readonly borderlineFlags?: readonly string[]
  /** Short holistic comment from the model. */
  readonly holisticNote?: string
  /** Model-reported overall confidence before code gating, in [0, 1]. */
  readonly proposedConfidence: number
}

/**
 * Seam D input — the validator (doc 10 §2.1 step 5 → validate; doc 14).
 *
 * The validator needs the raw mark, the original submission (to verify every quote
 * appears verbatim), and the pack (to recompute the overall against the scale + reorder
 * criteria). It produces the canonical {@link MarkingResultV2}.
 */
export interface ValidateRequest {
  /** The marker's raw, un-validated output. */
  readonly raw: RawMarkResult
  /** The original submission, for verbatim quote verification. */
  readonly submission: RawSubmission
  /** The pack, for scale-aware overall recomputation + criterion ordering. */
  readonly pack: KnowledgePack
}

/**
 * Seam E input — the feedback generator (doc 10 §2.1 step 6 → generateFeedback; doc 16).
 *
 * Reads the VALIDATED result read-only (never mutates marks — doc 13 §2.7) and the pack
 * (for "show a better version" exemplars). `isMinor` policy-gates upgrade rewrites
 * (doc 13 §2.7), so it is threaded from {@link EngineContext} into this seam.
 */
export interface FeedbackRequest {
  /** The validated, canonical result feedback is generated FROM (read-only). */
  readonly result: MarkingResultV2
  /** The pack, for exemplar-backed rewrites/anchors. */
  readonly pack: KnowledgePack
  /** Minor flag — policy-gates upgrade rewrites (doc 13 §2.7). */
  readonly isMinor: boolean
}

// ════════════════════════════════════════════════════════════════════════════════
// §8 — The façade result + the EngineComponent contracts (doc 10 §2.1)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Provenance threaded through the façade and persisted (doc 10 §2.1 → EngineResult;
 * doc 11 §2.5). Distinct from the result-embedded {@link ResultProvenance} in that this
 * is the ENGINE-LEVEL record the route adapter hands to `versioning-capture`.
 */
export interface EngineProvenance {
  /** The resolved pack version, e.g. "ielts_writing_v2025.1" (doc 11 §2.5). */
  readonly packVersion: string
  /** Optional pack checksum for integrity pinning (doc 11 §2.5). */
  readonly packChecksum?: string
  /** The model id actually called (resolved at call time from the tier — doc 10 §5 R4). */
  readonly modelVersion?: string
  /** The prompt version/hash used (versioning-capture, doc 10 §1.2). */
  readonly promptVersion?: string
}

/**
 * The successful façade output (doc 10 §2.1 EngineResult): the routing decision that was
 * taken, the canonical validated+feedback result, and the engine-level provenance.
 *
 * The engine returns provenance but does NOT write rows — persistence stays a route-
 * adapter concern after `markSubmission` returns (doc 10 §5 R5).
 */
export interface EngineResult {
  /** The confident routing decision that produced this mark. */
  readonly routingDecision: RoutingDecision
  /** The canonical, validated marking result with feedback attached. */
  readonly result: MarkingResultV2
  /** Engine-level provenance for `versioning-capture`. */
  readonly provenance: EngineProvenance
}

/**
 * The façade outcome (doc 10 §2.1): either a finished {@link EngineResult}, or a
 * {@link NeedsConfirmation} when routing was ambiguous and `caps.allowClarify` is true
 * (in which case NO marking happened — doc 10 §2.2 / Step 7 confirm-loop contract).
 * The {@link RoutingErrorShape} failures (NO_PACK / AMBIGUOUS_SUBMISSION / INVALID_METADATA)
 * are thrown, not returned, so they are not members of this union.
 */
export type MarkSubmissionOutcome = EngineResult | NeedsConfirmation

/**
 * The per-component function contracts (doc 10 §2.1 — "the five seam input interfaces"
 * + the Router + the façade). This is the authority Stage-3 components IMPLEMENT against:
 * each component module exports a function assignable to the matching member here, and
 * the façade {@link MarkSubmissionFn} wires them in order.
 *
 * Async-by-contract: `mark` calls the model and `resolvePack` reads the file tree, so the
 * seams that may do I/O return `Promise<…>`. `retrieve` is documented as pure/sync
 * (doc 12 §0) but is typed `Promise`-tolerant via the façade so the orchestration can
 * `await` uniformly; the concrete retrieval fn may be synchronous and still satisfy a
 * caller that awaits it.
 */
export interface EngineComponents {
  /** Router (doc 10 §2.2): submission+context+caps → routed | needs_confirmation (or throws RoutingError). */
  readonly route: (input: MarkSubmissionInput) => Promise<RouterResult>
  /** Seam A — pack resolution (doc 10 §2.2 / doc 11 §2.4): fails closed with NO_PACK. */
  readonly resolvePack: (req: PackResolveRequest) => Promise<PackResolveResult>
  /** Seam B — retrieval (doc 12 §2): pure selection of descriptors + nearest exemplars. */
  readonly retrieve: (req: RetrievalRequest) => RetrievalResult
  /** Seam C — marker (doc 10 §2.1 step 4): forced-tool model call → raw mark. */
  readonly mark: (req: MarkRequest) => Promise<RawMarkResult>
  /** Seam D — validator (doc 14): raw mark → canonical, code-owned MarkingResultV2. */
  readonly validate: (req: ValidateRequest) => MarkingResultV2
  /** Seam E — feedback generator (doc 16): validated result → result + feedback block. */
  readonly generateFeedback: (req: FeedbackRequest) => MarkingResultV2
}

/** The Router function contract on its own (doc 10 §2.2), for modules that only need it. */
export type RouteFn = EngineComponents['route']
/** Seam A resolver contract (doc 11 §2.4). */
export type ResolvePackFn = EngineComponents['resolvePack']
/** Seam B retrieval contract (doc 12 §2). */
export type RetrieveFn = EngineComponents['retrieve']
/** Seam C marker contract (doc 10 §2.1 step 4). */
export type MarkFn = EngineComponents['mark']
/** Seam D validator contract (doc 14). */
export type ValidateFn = EngineComponents['validate']
/** Seam E feedback contract (doc 16). */
export type GenerateFeedbackFn = EngineComponents['generateFeedback']

/**
 * The single façade entry (doc 10 §2.1 `markSubmission`). Runs route → resolvePack →
 * retrieve → mark → validate → generateFeedback and returns either a finished
 * {@link EngineResult} or a {@link NeedsConfirmation}; throws {@link RoutingErrorShape}
 * on fail-closed conditions.
 */
export type MarkSubmissionFn = (input: MarkSubmissionInput) => Promise<MarkSubmissionOutcome>
