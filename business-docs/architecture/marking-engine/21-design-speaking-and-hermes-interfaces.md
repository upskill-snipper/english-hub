# 21 — Design: Speaking Pipeline & Hermes Data-Flow Interfaces (DEFERRED)

> Status: DESIGN ONLY. Interfaces are defined now so the IELTS Writing MVP and the
> learner model are built behind boundaries that will not require re-architecture when
> Speaking (§6) and Hermes (§7) land later. **No implementation in this phase.** Both
> features are explicitly **DEFERRED** per the build sequence in `00-architecture-source.md`
> §8 (Speaking = step 7, Hermes = step 8). Read `00-architecture-source.md` and
> `01-ielts-writing-task2-spec.md` first.
>
> Scope of this doc: define the **interface boundaries** (type contracts + module
> seams) for (A) the Speaking pipeline feeding the same grounded engine on a transcript,
> and (B) the marking → analytics → Hermes one-way data-flow contract. The goal is that
> the engine we build for IELTS Writing Task 2 has the *right shape* so adding audio in
> front, and a teaching layer behind, are additive — not surgical.

---

## 1. Current State (this codebase)

What exists today that is relevant to Speaking and Hermes:

### Speaking
- **`src/app/api/ielts/speaking-feedback/route.ts`** (≈545 lines) — a live LLM speaking-feedback
  route. It takes an already-produced **text transcript** in the request body (the client/user
  supplies text, not audio), hardcodes `claude-sonnet-4-20250514`, single call, JSON-in-prose
  output (no forced tool-use), no evidence-span verification, no self-consistency, no error
  taxonomy, no confidence/human-review gate. It deliberately refuses better-version rewrites.
- **No ASR anywhere.** There is no Whisper-class transcription, no audio upload/storage path on
  the marking side, no pronunciation/fluency scoring, no delivery-feature model. Speaking is
  scored purely off a supplied text string.
- **`src/lib/ielts/band-descriptors.ts`** holds `SPEAKING_BAND_PROSE` / `SPEAKING_CRITERIA`
  (paraphrased IP, hardcoded — not a versioned pack).
- **`src/app/api/ielts/attempts/route.ts`** persists IELTS practice attempts (thin log:
  `band` float, `criteria` json) — `IELTSAttempt` Prisma model. Not the §2 structured schema.
- **Reusable now:** `src/lib/ielts/bands.ts` — `roundToBand()` and `overallBand()` already
  implement the spec's exact IELTS half-band rule (`.25→.5`, `.75→next whole`). The Speaking
  overall-band computation must reuse these, not duplicate.
- Compliance scaffolding the speaking route already runs (reusable for an audio front-end):
  auth → Premium → `checkMinorAIConsent` → `isAiOptedOutServer` (Children's Code) → rate limit
  → `contentSafetyCheck` → `filterAIResponse` → `logAiDecision` (EU AI Act Art.12/19 audit,
  stores SHA-256 hash + length only).

### Hermes
- **Hermes does not exist in code.** No module, route, or type references it.
- The would-be *upstream* of Hermes — analytics / learner model — exists but is **two parallel,
  GCSE-shaped stacks** (`src/lib/analytics/*` and `src/lib/parent-reports` +
  `src/lib/learning-profile` + `src/lib/recommendations`), keyed on GCSE % / AO1–AO4, **not**
  on the IELTS 0–9 band + TR/CC/LR/GRA criterion model or the fixed error taxonomy. There is
  no single, criterion-agnostic "learner model" object that a downstream consumer could read.
- The marking output type today (`src/lib/marking/mark-schemes/types.ts` `MarkingResult`) is
  GCSE/AO-shaped and is **not** the §2/§4 structured result a learner model would aggregate.
- There is therefore **no data-flow contract** between marking, analytics, and any downstream
  teaching layer. Nothing enforces the one-way `marking → analytics → Hermes` direction.

### Net
The engine being built for IELTS Writing (docs 01–20) is text-in / structured-mark-out. Today
nothing in front of it produces a transcript-from-audio, and nothing behind it exposes a stable
learner-model read contract. Both Speaking and Hermes are greenfield, but the IELTS MVP must be
built so they bolt on without refactoring the marker, validator, or persistence.

---

## 2. Target State

### 2.1 Speaking (§6) — audio front-end → SAME grounded engine on the transcript
The text marking engine (Router → Pack → Retrieval → Marker → Validator → Feedback) is
**unchanged**. Speaking adds a **modular audio front-end** that:
1. Transcribes audio with a Whisper-class ASR into a `Transcript` (text + timing).
2. Scores **delivery features** (pace, pauses, stress, intonation) with pronunciation/fluency
   models → `DeliveryAssessment`.
3. Feeds the transcript text into the **same** Marker for the language/content criteria.
4. Joins the delivery scores into the criterion set for the **speaking pack** (Pronunciation,
   plus Fluency contributing to the fluency/coherence criterion).
5. Computes overall band in code (reusing `overallBand`) over the combined criterion set.

The marker never knows whether its input text came from a keyboard or from ASR. The audio
pipeline is a **pre-processor** that produces a `MarkerTextInput` the existing engine consumes,
plus a side-channel `DeliveryAssessment` that the speaking pack's validator merges as extra
criteria. The transcript is the only learner free-text the marker sees.

### 2.2 Hermes (§7) — one-way marking → analytics → Hermes
- **Marking** emits validated, structured marks + tagged errors (the §2/§4 result).
- **Analytics** aggregates those into a versioned, read-only **`LearnerModel`** (per-criterion
  mastery over time, error-profile aggregation against the taxonomy, next-best-action,
  readiness).
- **Hermes** reads the `LearnerModel` only. It never imports marking internals and never reads
  raw marks; marking never imports Hermes. The dependency graph is strictly one-way and enforced
  at module-boundary level (a published read port + a lint/architecture rule).

---

## 3. The Gap

| # | Gap | Consequence if not boundary-proofed now |
|---|-----|------------------------------------------|
| G1 | No `MarkerTextInput` seam — the Marker is being designed for an essay request shape, not an abstract "graded text + source metadata". | Adding ASR later forces edits inside the marker call. |
| G2 | No `Modality`/`source` discriminator on the structured result. | Speaking marks can't be told apart from writing marks downstream; analytics can't segment. |
| G3 | Speaking pack needs extra criteria (Pronunciation/Fluency) the IELTS Writing 4-criterion schema can't hold. | The criterion array would need re-typing later. Define it as an open, pack-driven criterion set now. |
| G4 | No `DeliveryAssessment` type or seam for non-text (audio) signals to join the criterion set. | Pronunciation/fluency scores would be bolted onto the writing schema awkwardly. |
| G5 | No `LearnerModel` read contract — analytics output is GCSE-shaped and internal. | Hermes would reach into marking/analytics internals → bidirectional coupling, the exact thing §7 forbids. |
| G6 | No enforced one-way dependency boundary (marking ⇏ Hermes, Hermes ⇏ marking internals). | Coupling creep; a later refactor to separate them. |
| G7 | No audio storage/retention/consent contract (audio is biometric-adjacent PII). | Privacy posture (§9, Children's Code) would be retrofitted onto live audio. |

The fix is **interface-only**: introduce a small set of deferred, documented type contracts and
one module-boundary rule, all marked `@deferred`, so the MVP code is written against the right
seams without shipping any Speaking/Hermes behaviour.

---

## 4. Interface Contracts (define now, implement later)

All of the following land as **types + JSDoc-`@deferred` stubs only**, in clearly-flagged files.
Nothing in the IELTS Writing MVP path imports the *implementations*; the MVP only conforms to the
*shapes* (e.g. the structured result carries a `modality` field, the validator emits a result the
`LearnerModel` aggregator can read).

### 4.1 Speaking — `MarkerTextInput` seam (the engine's text entry point)
```ts
// src/lib/marking/engine/marker-input.ts  (NEW, shared by writing + speaking)
export type Modality = 'writing' | 'speaking';

/** What the grounded Marker actually consumes. Modality-agnostic. */
export interface MarkerTextInput {
  packId: string;            // e.g. 'ielts_writing_v2025.1' | 'ielts_speaking_v2025.1'
  modality: Modality;
  questionText: string;
  /** The only learner free-text the marker sees. For speaking, this is the ASR transcript. */
  answerText: string;
  /** Provenance of answerText. Absent ⇒ typed by candidate. */
  source?: TextSource;       // @deferred — populated only by the speaking front-end
}

/** @deferred (Speaking, §6) — how answerText was produced. */
export interface TextSource {
  kind: 'typed' | 'asr';
  asr?: AsrProvenance;
}
```

### 4.2 Speaking — ASR + delivery contracts (`@deferred`)
```ts
// src/lib/marking/speaking/contracts.ts  (NEW — all @deferred, no impl)

/** @deferred — output of the Whisper-class ASR step. */
export interface Transcript {
  text: string;                       // feeds MarkerTextInput.answerText
  language: string;
  durationSec: number;
  segments: ReadonlyArray<{ startSec: number; endSec: number; text: string; confidence: number }>;
  asr: AsrProvenance;
}

export interface AsrProvenance {
  engine: string;                     // e.g. 'whisper-large-v3'
  engineVersion: string;
  confidenceMean: number;             // 0..1
}

/** @deferred — pronunciation/fluency/delivery scoring (joins the criterion set). */
export interface DeliveryAssessment {
  // Raw delivery features (model/heuristic output)
  features: {
    speechRateWpm: number;
    articulationRateWpm: number;
    pauseCount: number;
    meanPauseSec: number;
    fillerRatio: number;              // fillers / words
    pitchVariationSemitones: number;  // intonation proxy
    stressRegularity: number;         // 0..1
  };
  /** Delivery features mapped onto pack criteria (e.g. Pronunciation 0-9, Fluency 0-9). */
  criterionContributions: ReadonlyArray<{
    criterion: string;               // pack-defined criterion name
    band: number;                    // 0..9, integer or half per pack rule
    confidence: number;              // 0..1
    evidence: ReadonlyArray<{ startSec: number; endSec: number; note: string }>;
  }>;
  model: { name: string; version: string };
}

/** @deferred — top-level speaking pipeline contract. */
export interface SpeakingMarkRequest {
  packId: string;
  questionText: string;
  audioRef: AudioRef;                 // pointer to stored audio (never inline blobs in the result)
  consent: { aiOptOut: boolean; isMinor: boolean; parentalConsent: boolean };
}

export interface AudioRef {
  storageKey: string;                 // private bucket key; NOT a public URL
  mimeType: string;
  durationSec: number;
  retention: 'transient' | 'retained';// transient = delete after transcription
}
```

### 4.3 Speaking — pack criterion set must be open (writing & speaking share the schema)
The IELTS Writing structured result (doc 01 §4) fixes "exactly 4 criteria". To avoid re-typing
when Pronunciation/Fluency arrive, the **engine-level** result type uses a pack-driven criterion
array; the *IELTS-Writing pack* enforces exactly-4 via its own schema, while the *Speaking pack*
enforces its own criterion list. Concretely, the shared result carries `criteria:
CriterionMark[]` (open) and `packId` + `modality`; per-pack Zod/JSON schemas constrain the set.
This is a **design constraint on the MVP result type**, not new Speaking code.

```ts
// constraint on the MVP structured result (src/lib/marking/engine/result.ts)
export interface CriterionMark {
  name: string;            // pack-defined: TR/CC/LR/GRA for writing; +Pronunciation/Fluency for speaking
  band: number;            // 0..9
  descriptorMatched: string;
  evidence: ReadonlyArray<{ quote: string; explanation: string }>;
  confidence: number;      // 0..1
  /** @deferred — set only for criteria derived from audio delivery, not transcript text. */
  deliverySource?: boolean;
}
```

### 4.4 Hermes — the `LearnerModel` read port (the only thing Hermes may consume)
```ts
// src/lib/analytics/learner-model/contract.ts  (NEW)

/** Stable, versioned, read-only learner model. Hermes consumes ONLY this. */
export interface LearnerModel {
  schemaVersion: string;             // semver of THIS contract, decoupled from pack versions
  learnerId: string;                 // opaque/pseudonymous id, never raw PII
  modality: Modality | 'mixed';
  updatedAt: string;                 // ISO; produced by the §4.1 daily aggregation cron
  /** Per-criterion mastery over time (criterion-agnostic; works for TR/CC/LR/GRA + speaking). */
  criterionMastery: ReadonlyArray<{
    criterion: string;
    currentBand: number;
    trend: 'improving' | 'stable' | 'declining';
    series: ReadonlyArray<{ at: string; band: number }>;
  }>;
  /** Error profile aggregated against the FIXED taxonomy (grammar.*/lexical.*/discourse.*/task.*). */
  errorProfile: ReadonlyArray<{ type: string; count: number; lastSeenAt: string }>;
  nextBestAction: { action: string; rationale: string } | null;
  readiness: { targetBand: number; etaWeeks: number | null; confidence: number } | null;
}

/** The ONLY interface Hermes is allowed to import. Implemented by analytics, never by marking. */
export interface LearnerModelReadPort {
  getLearnerModel(learnerId: string): Promise<LearnerModel | null>;
}
```

### 4.5 Hermes — the marking → analytics ingest contract (one-way)
```ts
// src/lib/analytics/learner-model/ingest.ts  (NEW)
/** Analytics consumes validated structured marks. Marking does NOT import analytics; it persists,
 *  and the §4.1 cron reads the persisted marks. This type pins the shape analytics reads. */
export interface ValidatedMarkRecord {
  learnerId: string;
  packId: string;
  modality: Modality;
  overallBand: number;               // code-computed (validator), never the model's proposed
  criteria: ReadonlyArray<CriterionMark>;
  errors: ReadonlyArray<{ type: string; severity: 'minor' | 'major' }>;
  createdAt: string;
}
```

### 4.6 The one-way boundary rule
- `src/lib/marking/**` MUST NOT import from `src/lib/analytics/**` or any `hermes` path.
- A future `src/lib/hermes/**` MUST import only `src/lib/analytics/learner-model/contract.ts`
  (the `LearnerModelReadPort` + `LearnerModel`), never `src/lib/marking/**`.
- Enforced by an ESLint `no-restricted-imports` rule (or dependency-cruiser) added in the step
  below. This makes the §7 "clean one-way contract; Hermes reads the learner model, not raw
  marks" non-negotiable structurally, not by convention.

---

## 5. Build Steps (ordered; interface-only this phase)

> Every step is **types + `@deferred` JSDoc + boundary rule only**. No runtime Speaking/Hermes
> behaviour ships. Acceptance is "compiles, is imported only where allowed, and the MVP path
> conforms to the shape" — not "feature works".

### Step 1 — Engine text-input seam
- **Files:** `src/lib/marking/engine/marker-input.ts` (new).
- **Do:** add `Modality`, `MarkerTextInput`, `TextSource`, `AsrProvenance` (the last two
  `@deferred`). Ensure the IELTS Writing marker call is written to accept `MarkerTextInput`
  (with `modality:'writing'`, `source` undefined) rather than a bespoke essay request shape.
- **Depends on:** the MVP marker design (docs 01/§4 implementation docs).
- **Acceptance:** `tsc` passes; the writing marker entry point's parameter type is
  `MarkerTextInput`; grep shows no Speaking impl imported on the live path.

### Step 2 — Result carries `modality` + open criterion array
- **Files:** `src/lib/marking/engine/result.ts` (the MVP structured-result type), `CriterionMark`.
- **Do:** add `modality: Modality` and `packId` to the engine result; type `criteria` as
  `CriterionMark[]` (open) with the per-pack Zod schema enforcing exactly-4 for IELTS Writing.
  Add `deliverySource?: boolean` (`@deferred`) on `CriterionMark`.
- **Depends on:** Step 1.
- **Acceptance:** IELTS Writing result still validates to exactly 4 named criteria via the
  writing pack schema; the *type* admits a future speaking pack's larger set; a unit test asserts
  the writing Zod schema rejects ≠4 criteria.

### Step 3 — Speaking contracts module (deferred stubs)
- **Files:** `src/lib/marking/speaking/contracts.ts` (new), `src/lib/marking/speaking/README.md`.
- **Do:** add `Transcript`, `DeliveryAssessment`, `SpeakingMarkRequest`, `AudioRef`, all
  `@deferred`, with no functions (or functions that `throw new Error('DEFERRED: §6 speaking')`).
  README states: reuse `overallBand`/`roundToBand` from `src/lib/ielts/bands.ts`; transcript
  text flows through `MarkerTextInput.answerText`; delivery criteria merge via
  `criterionContributions`; audio referenced by `AudioRef`, never inlined.
- **Depends on:** Steps 1–2.
- **Acceptance:** module compiles, exports only types/`@deferred` stubs; nothing in
  `src/app/api/**` imports it; a guard test asserts no live route imports `marking/speaking/*`.

### Step 4 — Learner-model read contract (Hermes port)
- **Files:** `src/lib/analytics/learner-model/contract.ts` (new),
  `src/lib/analytics/learner-model/ingest.ts` (new).
- **Do:** add `LearnerModel`, `LearnerModelReadPort`, `ValidatedMarkRecord`. Document that
  `schemaVersion` is independent of pack semver, ids are pseudonymous (no raw PII), and the §4.1
  cron is the producer.
- **Depends on:** Step 2 (`CriterionMark`, `Modality` are shared).
- **Acceptance:** `tsc` passes; `LearnerModel` fields map 1:1 to arch §4 (mastery-over-time,
  error profile vs taxonomy, next-best-action, readiness); no marking module imports it.

### Step 5 — Enforce the one-way boundary
- **Files:** `.eslintrc` / `eslint.config.*` (`no-restricted-imports`), or
  `dependency-cruiser` config; `business-docs/architecture/marking-engine/` ADR note.
- **Do:** rule 1: `src/lib/marking/**` cannot import `src/lib/analytics/**` or `**/hermes/**`.
  rule 2: any `src/lib/hermes/**` may import only `analytics/learner-model/contract`.
- **Depends on:** Step 4.
- **Acceptance:** lint fails on a deliberately-added forbidden import in a throwaway fixture, then
  passes when removed; CI runs the rule.

### Step 6 — Audio privacy/retention contract note (deferred, paper only)
- **Files:** `business-docs/compliance/...` note (no code); `AudioRef.retention` field doc.
- **Do:** record that stored audio is biometric-adjacent PII: private bucket only, `transient`
  default (delete post-transcription), consent gates identical to existing IELTS routes, deletion
  must be covered by the data-retention cron, and any "we don't train on your voice" UI claim must
  match the contractual-only posture (`ANTHROPIC_DATA_POLICY`), like the writing claim.
- **Depends on:** Step 3.
- **Acceptance:** doc exists and is linked from this file; no code change; no UI claim made yet.

---

## 6. Risks

- **R1 — ASR model strings unverified.** Like the marker model strings (spec §9), the Whisper-class
  engine + pronunciation/fluency models are not pinned to a callable provider/SDK. `AsrProvenance`
  is a placeholder; a future Phase-0-equivalent must confirm the real engine before implementing.
- **R2 — Criterion-set openness vs strictness.** Making the engine result's `criteria` array open
  (to admit speaking criteria) weakens the "exactly 4" guarantee at the *engine* level. Mitigation:
  enforce exactly-4 in the **IELTS Writing pack Zod schema**, not the shared type, and unit-test it.
- **R3 — Learner-model schema churn.** If `LearnerModel` changes after Hermes ships, Hermes breaks.
  Mitigation: `schemaVersion` semver on the contract, additive-only changes, contract test.
- **R4 — Boundary erosion.** Without the lint rule (Step 5), developers will import marking from a
  future Hermes for convenience. The rule is the load-bearing mitigation; ship it with the contract.
- **R5 — Delivery↔language double-counting.** Pronunciation/fluency (audio) and Coherence/LR
  (transcript) can overlap. Mitigation: `deliverySource` flag + pack-level mapping defines which
  criterion each signal owns; calibrate against human speaking marks (arch §8) before scaling.
- **R6 — Audio PII/biometric exposure.** Voice is more sensitive than text. Mitigation: `AudioRef`
  (never inline audio in results/logs), `transient` retention default, existing consent chain,
  deletion via retention cron (Step 6).
- **R7 — Premature abstraction.** Over-generalising the engine for two unbuilt features could slow
  the MVP. Mitigation: scope is deliberately minimal — one input seam, one `modality` field, one
  open criterion array, one read port, one lint rule. Everything else is `@deferred` stubs.
- **R8 — Transcript ≠ essay assumptions.** Spoken transcripts lack punctuation/paragraphing the
  writing marker/validator may assume (e.g. evidence-quote verbatim matching across ASR
  artefacts). Mitigation: note that the speaking pack's validator must whitespace/punctuation-
  normalise transcript quotes; flagged as a speaking-pack concern, not an MVP change.

---

## 7. What this explicitly does NOT do now
- No ASR, pronunciation, or fluency implementation.
- No audio upload/storage route or bucket.
- No Hermes module, route, or conversational logic.
- No analytics rewrite — only the read contract + ingest shape are added; the GCSE-vs-IELTS
  analytics consolidation is owned by the learner-model build doc, not here.
- No change to the IELTS Writing marker/validator behaviour — only the *shapes* it conforms to.
