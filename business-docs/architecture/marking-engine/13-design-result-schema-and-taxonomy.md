# Design: Result Schema & Error Taxonomy

Phase 1 design doc for the grounded Marking Engine. Defines (a) the **canonical structured result schema** that every marking module produces and persists, (b) the **fixed, closed error taxonomy** that all analytics aggregate on (§4 of `00-architecture-source.md`), and (c) the **IELTS forced-tool-use schema** (`submit_ielts_writing_assessment`) from §4 of `01-ielts-writing-task2-spec.md`.

This is a **design-only** document. No code changes in this phase. The TypeScript types below are the authoritative target; the build steps name the files that will later hold them.

It depends on the contract in `12-design-router-and-knowledge-pack.md`: every mark records a single `pack_version` string (e.g. `ielts_writing_v2025.1`) that is the foreign key back to the exact ruleset that produced it.

---

## 0. Where this sits in the six components

| Component | Relationship to this doc |
|---|---|
| Router (§1.1) | Produces the `pack_version` that this schema records. |
| Knowledge Pack (§1.2) | Source of the descriptors the model cites; its id is `pack_version`. |
| Retrieval (§1.3) | Not shaped here. |
| **Marker (§1.4)** | Emits the **forced-tool payload** (the raw model output) defined in §4 below. |
| **Validator + Confidence (§1.5)** | Transforms the raw tool payload + validation outcomes into the **canonical `MarkingResultV2`** defined in §3 below. |
| Feedback Generator (§1.6) | Reads `MarkingResultV2` read-only; never mutates marks. |
| Learner model (§4) | Aggregates exclusively on the **`MarkingErrorType` taxonomy** (§2). |

The key distinction this doc draws and that the build steps enforce:

- **Tool payload** = what the model returns (untrusted, model arithmetic, unverified quotes). Defined per-module (IELTS shape in §4).
- **Canonical result** = what the validator produces and what we persist (`MarkingResultV2`, §3). Overall band is recomputed in code; evidence is verified; confidence and `needs_human_review` are set by code, not the model.

---

## 1. Current state in THIS codebase

### 1.1 The existing result type

`src/lib/marking/mark-schemes/types.ts` defines the live result shape (GCSE/IGCSE, AO-based):

```ts
interface AOScore { id; label; marks; maxMarks; band: string; justification; evidence?: readonly string[]; }
interface FeedbackItem { point; suggestion?; quote?; }
interface MarkingResult {
  markSchemeId; questionId; totalMarks; maxMarks;
  predictedGrade: string;   // GCSE "1".."9"
  gradeBand: string;        // "Grade 8-9"
  aoScores: readonly AOScore[];
  strengths; improvements: readonly FeedbackItem[];
  nextStepsToNextGrade: readonly string[];
  summary;
  boundarySource?; gradeIsIndicativeOnly?; boundaryDetail?;  // EU AI Act Art.12/15 provenance
}
```

Characteristics verified in code:

- **No error list.** There is no `errors[]` array anywhere in the result. `AOScore.evidence` is runtime quotes from the marked essay, not tagged errors. The §4 analytics that aggregate on an error taxonomy are therefore impossible today.
- **No confidence.** `persistence.ts` deliberately writes `ai_confidence = NULL` ("we no longer fake confidence"). No per-criterion confidence anywhere.
- **No `needs_human_review` field.** Human routing is approximated by `marking_submissions.status = 'teacher_review_required'` (B2B, structural) plus an `ai_uncertainty_flags` jsonb that currently only ever carries `GRADE_INDICATIVE_ONLY`.
- **No `pack_version`.** Provenance is split across three tables (`model_versions`, `rubric_versions`, `prompt_versions`) captured post-hoc by `versioning-capture.ts`; `rubric_versions.scheme_version` is the nearest field but is not a single bundled pack id.
- **No integrity flags as structured data.** `under_length` is enforced as an 80-char floor in `validateBody`; `off_topic`/invalid are hard error sentinels (`{"error":"OFF_TOPIC"}`), not booleans on the result.
- **Overall is code-computed (good).** `grade-predictor.predictGrade()` is pure/deterministic and never trusts model arithmetic — this is the §5 principle already applied to GCSE and is the pattern the IELTS validator copies.
- **Output is free JSON-in-prose, not forced tool use.** `prompt-builder.ts` ships a "RESPONSE CONTRACT"; `feedback-generator.tryParseJSON` parses it leniently. No `tools`/`tool_choice`.

### 1.2 Adjacent shapes worth reconciling (not extending blindly)

- `src/lib/ielts/bands.ts` already exports `overallBand(bands[])` implementing the **exact** IELTS half-band rounding the spec §5 requires (frac < .25 → floor, < .75 → +0.5, else +1). **Reuse it; do not re-implement.**
- `src/lib/ielts/band-descriptors.ts` + the live `/api/ielts/writing-feedback` route already emit a `{overallBand, criteria[], strengths[], improvements[], modelPointers[]}` JSON-in-prose shape with **no** tagged errors, **no** confidence, **no** evidence verification, and the model's `overallBand` trusted unless it diverges from the mean by > 1. This is the shape `MarkingResultV2` supersedes.
- `Prisma IELTSAttempt` (`band: Float`, `criteria: Json`) is a thin practice-attempt log, not the §2 schema.
- `src/lib/learning-profile/taxonomy.ts` exists (unread this session) and may already define an error taxonomy. **Build step 1 must read it first** and either adopt/extend it or reconcile names, rather than create a second competing taxonomy.

### 1.3 Persistence target (already present)

`marking_submissions` (Prisma `MarkingSubmission` / `supabase/migrations/20260518_smart_ip_marking.sql`) is the unified spine. It already has: `ai_result` (jsonb — full result), `ai_confidence` (double, CHECK 0..1, written NULL today), `ai_uncertainty_flags` (jsonb string[]), `ai_ao_breakdown` (jsonb), and the three `*_version_id` FKs. The IELTS-shaped `MarkingResultV2` lands in `ai_result`; this doc specifies the additional first-class columns needed so §4 analytics can query without jsonb gymnastics.

---

## 2. Target state — the canonical types

### 2.1 The fixed error taxonomy (single source of truth)

This is the closed 20-value set from spec §3. It is the **only** thing the §4 learner model aggregates on, so it must be a closed TypeScript union (not `string`) and guarded by an exhaustiveness test.

```ts
// src/lib/marking/result/taxonomy.ts

// These 20 strings are VERBATIM from 01-ielts-writing-task2-spec.md §2 prompt
// and §4 tool schema. They are the contract: the forced-tool enum, the marker
// prompt's ERROR TAGGING list, and the analytics keys MUST all be this exact set.
// Do not rename without updating the spec, the prompt, and the guard test together.
export const MARKING_ERROR_TYPES = [
  // grammar.* (7)
  'grammar.subject_verb_agreement',
  'grammar.article',
  'grammar.tense',
  'grammar.preposition',
  'grammar.word_order',
  'grammar.sentence_structure',
  'grammar.punctuation',
  // lexical.* (5)
  'lexical.word_choice',
  'lexical.collocation',
  'lexical.register',
  'lexical.spelling',
  'lexical.word_formation',
  // discourse.* (4)
  'discourse.cohesion',
  'discourse.referencing',
  'discourse.paragraphing',
  'discourse.coherence',
  // task.* (4)
  'task.relevance',
  'task.completeness',
  'task.position',
  'task.development',
] as const;

export type MarkingErrorType = (typeof MARKING_ERROR_TYPES)[number];

/** Top-level taxonomy families — the axis cohort analytics roll up to. */
export const MARKING_ERROR_CATEGORIES = ['grammar', 'lexical', 'discourse', 'task'] as const;
export type MarkingErrorCategory = (typeof MARKING_ERROR_CATEGORIES)[number];

export function errorCategory(t: MarkingErrorType): MarkingErrorCategory {
  return t.split('.')[0] as MarkingErrorCategory;
}

export function isMarkingErrorType(s: string): s is MarkingErrorType {
  return (MARKING_ERROR_TYPES as readonly string[]).includes(s);
}

// Spec §4 tool schema severity enum is minor | moderate | major.
export const MARKING_ERROR_SEVERITIES = ['minor', 'moderate', 'major'] as const;
export type MarkingErrorSeverity = (typeof MARKING_ERROR_SEVERITIES)[number];
```

**Rationale for it being closed and central:**

- Analytics (`error profile aggregated against the taxonomy`, §4) require a fixed key space; a free-string `type` would let the model invent categories and silently break cohort rollups.
- It is taxonomy-of-the-engine, not taxonomy-of-IELTS: GCSE/EAL modules tag against the **same** 20 values so the learner model is cross-module. The taxonomy lives in `src/lib/marking/result/`, not under `ielts/`, for exactly this reason.
- Module-specific mapping is allowed: e.g. an IELTS `task.position` maps to TR; a GCSE module may never emit `task.position`. Modules emit a **subset**; none invent values outside the set.

### 2.2 Evidence spans

```ts
// src/lib/marking/result/types.ts

/** A verbatim quote from the candidate's answer that grounds a band or error. */
export interface EvidenceSpan {
  /** Quote that MUST appear verbatim (whitespace-normalised) in the answer. */
  quote: string;
  /** Why this quote supports the band / illustrates the error. */
  explanation: string;
  /**
   * Set by the Validator, not the model. true once verified verbatim in the
   * source answer. Unverified spans are dropped or flagged before persistence.
   */
  verified: boolean;
  /** Optional char offsets into the normalised answer, set by the validator. */
  startOffset?: number;
  endOffset?: number;
}
```

`verified` is code-owned. The model never sets it. The validator (§5.2 of the spec) verifies each quote; the canonical result only persists `verified: true` spans (misses are dropped and counted into a flag — see §2.5).

### 2.3 A tagged error

```ts
export interface MarkingError {
  type: MarkingErrorType;          // closed taxonomy
  quote: string;                   // verbatim span from the answer
  correction: string;              // a corrected version of the quote
  explanation?: string;            // optional teaching note
  severity: MarkingErrorSeverity;  // 'minor' | 'moderate' | 'major'
  verified: boolean;               // validator-owned, same rule as EvidenceSpan
}
```

### 2.4 Per-criterion score (criterion-agnostic)

The architecture serves four areas (IELTS, Cambridge, AQA/Edexcel boards, EAL) through one engine, so the per-criterion type must hold both a **band-scale** criterion (IELTS 0–9) and a **marks-based** criterion (GCSE AO) without forcing one into the other. We model this as a discriminated union on `scale`:

```ts
/** Stable criterion code. IELTS: 'TR'|'CC'|'LR'|'GRA'. GCSE: 'AO1'..'AO6'|'R1'..'W5'. */
export type CriterionCode = string;

interface CriterionScoreBase {
  code: CriterionCode;
  label: string;
  /** The pack band-descriptor text the answer was matched to (grounding). */
  descriptorMatched: string;
  /** 1-3 verified evidence spans supporting this criterion's band/mark. */
  evidence: readonly EvidenceSpan[];
  /** Model-reported per-criterion confidence in [0,1]. Used by the gate. */
  confidence: number;
  /** Short rationale tying the score to the descriptor. */
  rationale: string;
}

/** IELTS / band-scale criterion (integer 0-9). */
export interface BandCriterionScore extends CriterionScoreBase {
  scale: 'band';
  band: number;          // integer 0-9
  maxBand: number;       // 9 for IELTS
}

/** GCSE / marks-based criterion. */
export interface MarksCriterionScore extends CriterionScoreBase {
  scale: 'marks';
  awardedMarks: number;
  maxMarks: number;
  band: string;          // descriptor band label, e.g. "Level 4"
}

export type CriterionScore = BandCriterionScore | MarksCriterionScore;
```

This unifies the spec's IELTS `criteria[]` (band, descriptor_matched, evidence, confidence) and the existing `AOScore` (marks, maxMarks, band, justification, evidence) under one shape. `AOScore.justification → rationale`, `evidence: string[] → EvidenceSpan[]`.

### 2.5 Integrity & borderline flags

```ts
/** Structured integrity signals — first-class booleans, not error sentinels. */
export interface IntegrityFlags {
  under_length: boolean;
  off_topic: boolean;
  likely_memorised: boolean;
  copied_from_prompt: boolean;
}

/** Validator-derived flags (NOT from the model). */
export interface ValidationFlags {
  /** Count of evidence/error quotes the validator could not verify verbatim. */
  unverifiedEvidenceCount: number;
  /** |proposed_overall - recomputed_overall| > 0.5 (spec §5.1). */
  overallDisagreement: boolean;
  /** Self-consistency was triggered for this mark (spec §6). */
  selfConsistencyRun: boolean;
  /** Bands diverged > 1 across self-consistency runs (spec §6). */
  selfConsistencyDiverged: boolean;
  /** GCSE-only: grade is from the AQA proxy curve, not a verified board table. */
  gradeIndicativeOnly?: boolean;
}
```

### 2.6 Overall score (discriminated, code-computed)

```ts
/** IELTS / band overall. */
export interface BandOverall {
  kind: 'band';
  /** Code-recomputed mean-of-criteria, half-band rounded (ielts_overall). */
  overallBand: number;
  /** What the MODEL proposed — retained for audit/disagreement only. */
  proposedOverallBand: number;
  /** Optional [min,max] band range surfaced when self-consistency diverges. */
  bandRange?: readonly [number, number];
}

/** GCSE / grade overall. */
export interface GradeOverall {
  kind: 'grade';
  totalMarks: number;
  maxMarks: number;
  predictedGrade: string;   // "1".."9"
  gradeBand: string;        // "Grade 8-9"
  boundarySource?: string;
  boundaryDetail?: string;
}

export type Overall = BandOverall | GradeOverall;
```

`overallBand` and `predictedGrade` are **always** computed in code (`src/lib/ielts/bands.ts:overallBand` for IELTS; `grade-predictor` for GCSE). `proposedOverallBand` is stored only to power the §5.1 disagreement check and the audit trail.

### 2.7 Feedback block

```ts
export interface FeedbackPoint {
  point: string;
  /** Optional upgrade rewrite (spec §3 / §7). Policy-gated per module. */
  upgradeRewrite?: string;
  /** Optional micro-lesson link keyed by error type (spec §7). */
  microLessonErrorType?: MarkingErrorType;
  quote?: string;
}

export interface FeedbackBlock {
  strengths: readonly FeedbackPoint[];
  improvements: readonly FeedbackPoint[];
  /** A single prioritised next action (spec §3 "one clear next action"). */
  nextAction: string;
  /** GCSE legacy multi-step list; optional so IELTS can omit it. */
  nextStepsToNextGrade?: readonly string[];
  summary: string;
}
```

Feedback policy (rewrites yes/no) is per-module, not encoded in the type: adult IELTS candidates may receive upgrade rewrites; school-age GCSE minors deliberately do not (current integrity choice). `upgradeRewrite` is therefore optional.

### 2.8 The canonical result — `MarkingResultV2`

```ts
export interface MarkingResultV2 {
  /** Schema discriminator for safe migration alongside legacy MarkingResult. */
  schemaVersion: 2;
  /** Single FK back to the exact ruleset (see doc 12). e.g. "ielts_writing_v2025.1". */
  packVersion: string;
  /** Module discriminator: 'ielts_writing' | 'gcse_english' | 'eal_cefr' | ... */
  module: string;

  /** Routing context (echoed from the Router for audit). */
  board: string;
  subject?: string;
  qualification?: string;
  taskType: string;
  questionId?: string;

  /** Per-criterion marks (4 for IELTS; AO set for GCSE). */
  criteria: readonly CriterionScore[];

  /** Code-computed overall (discriminated). */
  overall: Overall;

  /** Tagged, verified errors — the taxonomy backbone for §4. */
  errors: readonly MarkingError[];

  /** Structured integrity signals from the model (re-asserted by validator). */
  integrityFlags: IntegrityFlags;
  /** Validator-derived flags. */
  validationFlags: ValidationFlags;

  /** Confidence — code-owned. overall is min(model overall, gate adjustments). */
  overallConfidence: number;          // [0,1]
  /** True if the §5.4 gate fired (low confidence OR any integrity flag etc.). */
  needsHumanReview: boolean;

  /** Student-facing teaching, generated FROM the validated mark. */
  feedback: FeedbackBlock;

  /** Short overall comment from the model (holistic_note). */
  holisticNote?: string;
  /** Free-text borderline notes from the model (spec §4 borderline_flags). */
  borderlineFlags?: readonly string[];

  /** Provenance for EU AI Act Art.12/15 traceability. */
  provenance: {
    modelVersionId?: string;
    promptVersionId?: string;
    rubricVersionId?: string;
    markedAt: string;       // ISO8601
    runCount: number;       // 1, or 3 when self-consistency ran
  };
}
```

This is a **superset** of the existing `MarkingResult`: every GCSE field maps onto it (`aoScores → criteria` (marks scale), `predictedGrade/gradeBand → overall` (grade kind), `strengths/improvements/nextStepsToNextGrade/summary → feedback`, the boundary provenance → `overall` + `validationFlags.gradeIndicativeOnly`). The legacy type is retained behind `schemaVersion` so the GCSE path can migrate incrementally.

### 2.9 The confidence gate (spec §5.4) — code, expressed as a pure function

```ts
export function computeNeedsHumanReview(r: {
  overallConfidence: number;
  criteria: readonly { confidence: number }[];
  integrityFlags: IntegrityFlags;
  validationFlags: Pick<ValidationFlags, 'overallDisagreement' | 'selfConsistencyDiverged'>;
}): boolean {
  if (r.overallConfidence < 0.7) return true;
  if (r.criteria.some((c) => c.confidence < 0.6)) return true;
  if (Object.values(r.integrityFlags).some(Boolean)) return true;
  if (r.validationFlags.overallDisagreement) return true;
  if (r.validationFlags.selfConsistencyDiverged) return true;
  return false;
}
```

B2B always routes to teacher review regardless (spec §9); `needsHumanReview` is the additional B2C-honest gate.

---

## 3. The IELTS forced-tool-use schema (spec §4)

The Marker forces this tool via `tool_choice: { type: 'tool', name: 'submit_ielts_writing_assessment' }`. This is the **raw model payload** — untrusted — that the validator turns into a `MarkingResultV2`.

### 3.1 The tool definition (Anthropic `tools` entry)

```ts
// src/lib/marking/ielts/tool-schema.ts
export const SUBMIT_IELTS_WRITING_ASSESSMENT_TOOL = {
  name: 'submit_ielts_writing_assessment',
  description: 'Submit the structured assessment for an IELTS Writing Task 2 essay.',
  input_schema: {
    type: 'object',
    properties: {
      criteria: {
        type: 'array',
        minItems: 4,
        maxItems: 4,
        description: 'Exactly four criteria in order: Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.',
        items: {
          type: 'object',
          properties: {
            // Spec §4 uses the full names verbatim. The mapper canonicalises to
            // CriterionCode TR/CC/LR/GRA via CRITERION_NAME_TO_CODE.
            name: { type: 'string', enum: ['Task Response', 'Coherence and Cohesion', 'Lexical Resource', 'Grammatical Range and Accuracy'] },
            band: { type: 'integer', minimum: 0, maximum: 9 },
            descriptor_matched: { type: 'string' },
            evidence: {
              type: 'array',
              minItems: 1,
              maxItems: 3,
              items: {
                type: 'object',
                properties: {
                  quote: { type: 'string' },
                  explanation: { type: 'string' },
                },
                required: ['quote', 'explanation'],
              },
            },
            confidence: { type: 'number', minimum: 0, maximum: 1 },
          },
          required: ['name', 'band', 'descriptor_matched', 'evidence', 'confidence'],
        },
      },
      errors: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: { type: 'string', enum: MARKING_ERROR_TYPES },  // closed taxonomy
            quote: { type: 'string' },
            correction: { type: 'string' },
            explanation: { type: 'string' },
            severity: { type: 'string', enum: MARKING_ERROR_SEVERITIES },  // minor|moderate|major
          },
          required: ['type', 'quote', 'correction', 'explanation'],
        },
      },
      integrity_flags: {
        type: 'object',
        properties: {
          under_length: { type: 'boolean' },
          off_topic: { type: 'boolean' },
          likely_memorised: { type: 'boolean' },
          copied_from_prompt: { type: 'boolean' },
        },
        required: ['under_length', 'off_topic', 'likely_memorised', 'copied_from_prompt'],
      },
      borderline_flags: {
        type: 'array',
        items: { type: 'string' },  // e.g. "TR borderline 6/7: addresses all parts but development thin"
      },
      proposed_overall_band: { type: 'number' },
      overall_confidence: { type: 'number', minimum: 0, maximum: 1 },
      holistic_note: { type: 'string' },
    },
    // Matches spec §4 required set verbatim.
    required: ['criteria', 'errors', 'integrity_flags', 'proposed_overall_band', 'overall_confidence', 'holistic_note'],
  },
} as const;
```

**Note on fidelity to spec §4.** The schema above is the spec §4 tool JSON reproduced as a TS const (same property names, same `required` set, same `minItems`/`maxItems` 4 on criteria, 1–3 evidence, full criterion `name` enum, `borderline_flags`, required `holistic_note`, severity `minor|moderate|major`). One deliberate hardening: **`errors[].type` is `enum: MARKING_ERROR_TYPES`** sourced from the shared constant rather than re-listed inline in the tool file — this guarantees the tool enum, the marker prompt's ERROR TAGGING list, and the analytics keys are byte-identical and cannot drift. (The 20 strings themselves are unchanged from spec §4.)

**Two limits the schema cannot enforce — the validator (§5) closes both:**

1. JSON Schema's `minItems`/`maxItems: 4` caps the *count* but cannot enforce that the four are *distinct* and *ordered* `[Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy]`. The validator asserts presence of all four distinct names and reorders to canonical `[TR, CC, LR, GRA]` codes; the prompt also instructs the order.
2. The schema cannot verify evidence quotes are verbatim in the essay. The validator does the substring/whitespace-normalised check (spec §5.2) and sets `EvidenceSpan.verified`.

### 3.2 The parsed payload type (pre-validation)

```ts
/** Full criterion names exactly as the model returns them (spec §4 enum). */
export type IeltsCriterionName =
  | 'Task Response'
  | 'Coherence and Cohesion'
  | 'Lexical Resource'
  | 'Grammatical Range and Accuracy';

/** Canonical short codes used everywhere downstream. */
export const CRITERION_NAME_TO_CODE: Record<IeltsCriterionName, 'TR' | 'CC' | 'LR' | 'GRA'> = {
  'Task Response': 'TR',
  'Coherence and Cohesion': 'CC',
  'Lexical Resource': 'LR',
  'Grammatical Range and Accuracy': 'GRA',
};

export interface IeltsToolPayload {
  criteria: ReadonlyArray<{
    name: IeltsCriterionName;
    band: number;
    descriptor_matched: string;
    evidence: ReadonlyArray<{ quote: string; explanation: string }>;
    confidence: number;
  }>;
  errors: ReadonlyArray<{
    type: MarkingErrorType;
    quote: string;
    correction: string;
    explanation?: string;
    severity: MarkingErrorSeverity;
  }>;
  integrity_flags: IntegrityFlags;
  borderline_flags?: readonly string[];
  proposed_overall_band: number;
  overall_confidence: number;
  holistic_note: string;
}
```

### 3.3 Payload → `MarkingResultV2` mapping (validator contract)

| Tool payload | Canonical result | Transform |
|---|---|---|
| `criteria[].name` | `criteria[].code` | `CRITERION_NAME_TO_CODE[name]` → TR/CC/LR/GRA |
| `criteria[].band` | `criteria[].band` (`scale:'band'`, `maxBand:9`) | assert integer 0–9 |
| `criteria[].descriptor_matched` | `criteria[].descriptorMatched` | direct |
| `criteria[].evidence[]` | `criteria[].evidence[]` | verify verbatim → set `verified`; drop misses |
| `criteria[].confidence` | `criteria[].confidence` | assert [0,1] |
| `errors[]` | `errors[]` | verify quote; assert `type ∈ taxonomy`; drop unverified, count |
| `integrity_flags` | `integrityFlags` | direct |
| `proposed_overall_band` | `overall.proposedOverallBand` | audit only |
| (computed) | `overall.overallBand` | `ielts_overall(TR,CC,LR,GRA)` in code |
| `overall_confidence` | `overallConfidence` | input to gate |
| `holistic_note` | `holisticNote` | direct |
| `borderline_flags` | `borderlineFlags` | direct |
| (computed) | `validationFlags.overallDisagreement` | `|proposed - computed| > 0.5` |
| (computed) | `needsHumanReview` | `computeNeedsHumanReview(...)` |

---

## 4. How analytics aggregate on the taxonomy (the §4 dependency)

The learner model (§4) reads **only** `MarkingResultV2.errors[].type` (and `.severity`, `.module`, `criteria[].code/band`). It never reads free text. Concretely:

- **Per-learner error profile** = histogram over `MarkingErrorType` (and rollup to `MarkingErrorCategory` via `errorCategory()`), summed across that learner's validated marks.
- **Per-criterion mastery over time** = time series of `criteria[].band` per `code` per learner.
- **Cohort rollups** = same histograms aggregated by class/school.
- **Next-best-action / micro-lesson links** = keyed by the dominant `MarkingErrorType` (and the lowest-confidence / lowest-band criterion).

Because the taxonomy is a closed union shared by the tool schema and the analytics keys, the schema is the single source the analytics aggregate on — satisfying §2's "consistent error taxonomy ... the backbone of the learner model." A guard test (build step 6) pins the 20 values so a future edit cannot silently desync the tool enum from the analytics key space.

---

## 5. The gap

| # | Gap | Target |
|---|---|---|
| G1 | No closed error taxonomy; no `errors[]` on the result. | `MarkingErrorType` union + `MarkingError` on `MarkingResultV2`. |
| G2 | No forced-tool schema; output is free JSON-in-prose. | `SUBMIT_IELTS_WRITING_ASSESSMENT_TOOL` with enum-pinned taxonomy. |
| G3 | No per-criterion or overall confidence (forced NULL). | `confidence` on `CriterionScore`; `overallConfidence` on result. |
| G4 | No `needs_human_review` field or gate. | `needsHumanReview` + `computeNeedsHumanReview()` (spec §5.4). |
| G5 | No evidence-span verification; no `verified`. | `EvidenceSpan.verified` set by validator; misses dropped + flagged. |
| G6 | No structured integrity flags. | `IntegrityFlags` object on the result. |
| G7 | No single `pack_version`; provenance split across 3 tables. | `packVersion` on the result (contract from doc 12). |
| G8 | Result is GCSE-only; cannot express IELTS bands/half-band overall. | Discriminated `CriterionScore` + `Overall`; reuse `ielts/bands.overallBand`. |
| G9 | `proposed_overall` vs code-computed disagreement not modelled. | `BandOverall.proposedOverallBand` + `validationFlags.overallDisagreement`. |
| G10 | Self-consistency not modelled. | `validationFlags.selfConsistency*` + `bandRange` + `provenance.runCount`. |
| G11 | Persistence has no taxonomy-queryable columns. | New first-class columns (build step 5). |

---

## 6. Build steps (ordered)

### Step 1 — Reconcile / adopt the error taxonomy
- **Files:** read `src/lib/learning-profile/taxonomy.ts` first; then create `src/lib/marking/result/taxonomy.ts`.
- Define `MARKING_ERROR_TYPES`, `MarkingErrorType`, categories, `errorCategory`, `isMarkingErrorType`, severities. If `learning-profile/taxonomy.ts` already holds a compatible set, re-export from there instead of duplicating; if it diverges, document the mapping and pick one canonical home.
- **Acceptance:** the module exports exactly 20 types (7/5/4/4); a unit test asserts the count, the four category prefixes, and that `errorCategory` returns a valid category for every type. `tsc` passes.

### Step 2 — Canonical result types
- **Files:** create `src/lib/marking/result/types.ts` (`EvidenceSpan`, `MarkingError`, `CriterionScore` union, `IntegrityFlags`, `ValidationFlags`, `Overall` union, `FeedbackPoint`, `FeedbackBlock`, `MarkingResultV2`). Re-export the taxonomy.
- **Acceptance:** `tsc --noEmit` passes; a type-level test (or `expectTypeOf`) confirms a hand-written IELTS `MarkingResultV2` literal and a GCSE one both type-check; `depends_on: Step 1`.

### Step 3 — Confidence gate + overall reconciliation helpers
- **Files:** create `src/lib/marking/result/confidence.ts` (`computeNeedsHumanReview`) and `src/lib/marking/result/overall.ts` (thin re-export/wrapper around `src/lib/ielts/bands.ts:overallBand` plus an `overallDisagreement(proposed, computed)` helper `> 0.5`).
- **Acceptance:** parametrised tests for the gate (each of the five trigger conditions individually flips the result to `true`; an all-clear case returns `false`); a parametrised half-band rounding test covering .0/.25/.5/.75 fractions; `depends_on: Step 2`.

### Step 4 — IELTS forced-tool schema + payload type + mapping
- **Files:** create `src/lib/marking/ielts/tool-schema.ts` (`SUBMIT_IELTS_WRITING_ASSESSMENT_TOOL` importing `MARKING_ERROR_TYPES` for the enum, `IeltsToolPayload`) and `src/lib/marking/ielts/map-payload.ts` (pure payload→`MarkingResultV2` transform, accepting validator-supplied verified-evidence + computed overall + gate result).
- **Acceptance:** a unit test asserts the tool `input_schema.properties.errors.items.properties.type.enum` is referentially the same array as `MARKING_ERROR_TYPES` (no drift); a test feeds a fixture payload through `map-payload` and asserts the resulting `MarkingResultV2` has 4 criteria in `[TR,CC,LR,GRA]` order, code-computed `overallBand`, and `needsHumanReview` per the gate; `depends_on: Steps 1–3`. (Wiring the actual `tools`/`tool_choice` call and the verbatim-verification logic is the Marker/Validator doc's build, not this one.)

### Step 5 — Persistence columns for taxonomy-queryable analytics
- **Files:** new migration `supabase/migrations/<date>_marking_result_v2.sql` + matching Prisma fields in `prisma/schema.prisma` (`MarkingSubmission`); update `src/lib/marking/persistence.ts` `applyAiResult` to populate them.
- Add first-class columns: `pack_version text`, `needs_human_review boolean`, `overall_confidence double precision` (now actually written, CHECK 0..1), `proposed_overall_band double precision` (IELTS), `marking_errors jsonb` (the tagged `errors[]`), and `result_schema_version int`. Keep `ai_result` as the full `MarkingResultV2`.
- **Acceptance:** migration is idempotent and applies cleanly on a fresh DB; `persistence.test.ts` extended to assert a V2 result persists with `overall_confidence` non-null, `needs_human_review` set, `pack_version` set, and `marking_errors` containing only taxonomy values; `depends_on: Step 2`.

### Step 6 — Taxonomy & schema guard tests (regression backbone)
- **Files:** create `src/__tests__/marking-result-schema.test.ts`.
- Pin: the exact 20 taxonomy strings (snapshot), the criterion-name enum `[TR,CC,LR,GRA]`, the gate thresholds (0.7 / 0.6), and the half-band rounding rule. These are the analytics contract; a change must be a deliberate, reviewed edit.
- **Acceptance:** test fails if any taxonomy value is added/removed/renamed or a threshold changes without updating the test; runs under Vitest (`jsdom`, no DB); `depends_on: Steps 1, 3, 4`.

### Step 7 — Reconcile legacy `MarkingResult` (non-breaking)
- **Files:** `src/lib/marking/mark-schemes/types.ts` (add a `// @deprecated migrate to MarkingResultV2` note + a mapping helper `toResultV2(legacy): MarkingResultV2`), `src/lib/marking/feedback-generator.ts` (unchanged behaviour; document the eventual switch).
- **Acceptance:** `toResultV2` round-trips a representative GCSE `MarkingResult` into a `schemaVersion:2` value with `overall.kind:'grade'` and `criteria[].scale:'marks'`, asserted by a unit test; no behaviour change to the live GCSE path; `depends_on: Step 2`.

---

## 7. Risks

- **R1 — Taxonomy desync.** The tool-schema `enum` and the analytics key space can drift if the constant is duplicated. Mitigation: one constant (`MARKING_ERROR_TYPES`) imported by both; guard test (step 6).
- **R2 — Existing `learning-profile/taxonomy.ts` may already define a (different) taxonomy.** Building a second one would fork the learner model. Mitigation: step 1 reads it first and reconciles to one canonical home before any new code.
- **R3 — JSON Schema cannot enforce "exactly 4 criteria in order."** The model can return 3, 5, or out-of-order criteria. Mitigation: validator asserts/normalises (named explicitly in step 4 acceptance); not relied upon at the schema layer.
- **R4 — Confidence is currently deliberately NULL ("we don't fake confidence").** Introducing a real `overallConfidence` reverses that posture and must be a conscious product decision; the value is model-reported and only *gates* (never shown as a precise score without the uncertainty framing of §5). Mitigation: document the reversal; persistence step writes it only for V2 results, leaving the legacy GCSE path's NULL behaviour untouched until migrated.
- **R5 — Model-string / effort-tier uncertainty (spec §9).** The schema is model-agnostic, but `provenance.modelVersionId` must record whatever is actually callable; do not bake `claude-sonnet-4-6`/effort tiers into types. Mitigation: provenance is free-form ids resolved at call time (Phase 0).
- **R6 — Discriminated unions add caller branching.** Every consumer of `Overall`/`CriterionScore` must switch on `kind`/`scale`. Mitigation: provide narrow helper getters; keep the union small (2 variants each).
- **R7 — Double schema (`schemaVersion` 1 vs 2) during migration.** Readers of `ai_result` must handle both. Mitigation: `schemaVersion` discriminator + `toResultV2` adapter (step 7); analytics read only V2 columns (step 5).
- **R8 — Upgrade-rewrites policy conflict.** `FeedbackPoint.upgradeRewrite` is required by spec §3/§7 for IELTS but forbidden for GCSE minors. Mitigation: field is optional and gated per-module by the Feedback Generator, not by the type.
