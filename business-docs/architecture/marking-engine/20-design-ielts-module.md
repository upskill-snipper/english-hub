# Design: IELTS Writing Task 2 Module (first engine instantiation)

> Status: design doc. No code is changed by this document. It specifies the
> concrete IELTS Writing Task 2 vertical slice as the FIRST module built on the
> grounded Marking Engine, per `00-architecture-source.md` §8 step 1 and
> `01-ielts-writing-task2-spec.md` §9.
>
> Sources read for this design: both specs above (in full); `src/lib/anthropic-client.ts`,
> `src/lib/ielts/bands.ts`, `src/lib/ielts/band-descriptors.ts`, `src/lib/marking/prompt-builder.ts`,
> `src/app/api/ielts/writing-feedback/route.ts` (and the verified area maps for marking-lib,
> mark-schemes, grade-boundaries, api-routes, anthropic-client, persistence-db, learner-model,
> eal-ielts, tests, data-protection).

---

## 0. Confirmed-at-build facts (read before anything else)

These are verified against the codebase, not assumed from the spec:

- **Callable model string is `claude-sonnet-4-20250514`.** It is the single
  exported constant `ANTHROPIC_MODEL` in `src/lib/anthropic-client.ts:32`
  (`AI_AUDIT_MODEL` aliases it). The spec's `claude-sonnet-4-6` (marker) and
  `claude-opus-4-8` (escalation) are **at-draft names and are NOT callable** in
  this codebase. The file header explicitly says so. **Do not write
  `claude-sonnet-4-6` or an `effort: 'xhigh'` field anywhere** — the installed
  SDK (`@anthropic-ai/sdk@^0.90.0`) exposes no effort-tier surface. This design
  uses `ANTHROPIC_MODEL` for both marker and feedback calls, with the model
  pinned per IELTS constant so a future map swap is a one-line change. The
  "escalation re-mark on a stronger model" reduces, for now, to "re-run the same
  model" plus a TODO + a single `IELTS_ESCALATION_MODEL` constant defaulting to
  `ANTHROPIC_MODEL`.
- **The exact IELTS half-band rounding already exists** as `roundToBand(value)`
  and `overallBand(bands)` in `src/lib/ielts/bands.ts:20-35`. Its logic is
  byte-for-byte the spec §5 rule (`frac < 0.25 → whole`, `< 0.75 → +0.5`,
  `else → +1`). **Reuse it. Do not re-implement.** The validator's
  `recomputeOverall(tr,cc,lr,gra)` is `roundToBand(mean)` over exactly those four.
- **The four-criterion type already exists**: `IELTSWritingCriterion` and
  `WRITING_TASK2_CRITERIA` in `src/lib/ielts/band-descriptors.ts:8-25`, with
  paraphrased (non-copyright) `TASK2_DESCRIPTORS` keyed by band 4–9. These are
  the seed content for the Knowledge Pack; they are currently hardcoded in the
  module, not a versioned pack.
- **There is already a live, non-grounded IELTS writing marker**:
  `src/app/api/ielts/writing-feedback/route.ts`. It is JSON-in-prose, single
  call, trusts the model's overall band (only falls back to mean if it diverges
  by >1), has no evidence verification, no tool-use, no confidence, no taxonomy.
  This module is a **refactor onto the grounded engine, not a greenfield build**.
  It already carries the full compliance gating chain we will reuse verbatim.
- **The forced-tool path is new for this codebase.** No current marking route
  uses `tools` / `tool_choice`; all use raw-JSON-text + lenient parse. SDK 0.90.0
  supports tool use; this module introduces the first forced-tool call.

---

## 1. Current state in THIS codebase

### What exists and is reusable
- **Compliance + audit chain** (reuse wholesale, do not rebuild): every IELTS/EAL/GCSE
  route runs auth → `hasActiveSubscription` → `checkMinorAIConsent` →
  `isAiOptedOutServer` (Children's Code) → `rateLimit` → `contentSafetyCheck`
  (prompt-injection/safeguarding pre-screen) → model call → `filterAIResponse` →
  `logAiDecision` (EU AI Act Art.12/19; stores only SHA-256 hash + length of input).
  Seen in `src/app/api/ielts/writing-feedback/route.ts`.
- **Half-band rounding**: `src/lib/ielts/bands.ts` (`roundToBand`, `overallBand`).
- **Criteria + paraphrased descriptors**: `src/lib/ielts/band-descriptors.ts`
  (`IELTSWritingCriterion`, `WRITING_TASK2_CRITERIA`, `TASK2_DESCRIPTORS` bands 4–9).
- **Prompt-builder pattern**: `src/lib/marking/prompt-builder.ts` returns
  `{ systemPrompt, userMessage, cacheKey }` and injects descriptors at runtime —
  the structural template the IELTS prompt-builder should mirror.
- **Provenance capture**: `src/lib/marking/versioning-capture.ts` content-hashes
  and upserts model/prompt/rubric versions per mark (best-effort, never throws).
- **Persistence spine**: `marking_submissions` (+ `model_versions`, `prompt_versions`,
  `rubric_versions`, `teacher_moderations`) via `src/lib/marking/persistence.ts`
  (Supabase, snake_case, service-role). `ai_confidence` column exists (CHECK 0..1)
  but is deliberately written NULL today. Status state-machine + B2B→teacher_review
  routing already present.
- **Calibration maths seed**: `src/lib/marker-qa/metrics.ts` (+ test) — exact-band,
  within-1, MAE, QWK, drift. The agreement maths §8 needs.
- **Existing IELTS attempt store**: Prisma `IELTSAttempt` (band Float, criteria Json)
  via `src/lib/ielts/store.ts` — a thin practice log, NOT the §4 structured schema.

### What does NOT exist (the engine pieces)
- No Router, no versioned Knowledge Pack abstraction, no Retrieval/exemplar bank.
- No forced tool-use anywhere; no `submit_ielts_writing_assessment` tool.
- No verbatim evidence-span verification (the spec's core anti-hallucination backstop).
- No code-side overall recompute **with a model-disagreement gate** (IELTS).
- No self-consistency multi-run.
- No fixed 20-value error taxonomy; no `errors[]` on any result.
- No confidence number and no confidence-threshold human-review routing.
- No separate feedback-generator model call for IELTS (the existing route refuses
  rewrites; the spec §3/§7 **requires** upgrade rewrites for adult candidates).
- No IELTS calibration set.

---

## 2. Target state

A vertical slice in `src/lib/marking/ielts/` (new subdir, alongside the GCSE stack,
**not** a refactor of the GCSE types — the build note in 01-spec §0/§9 explicitly
permits IELTS to stand up greenfield beside GCSE) plus one new API route, that:

1. Loads a **versioned IELTS Writing Task 2 Knowledge Pack** (descriptors +
   conventions + graded exemplars) from a single immutable pack object with a
   `pack_version` (e.g. `ielts_writing_v2025.1`).
2. **Retrieves** the relevant band descriptors and 1–2 nearest-band exemplars for
   the prompt (selective, cost-bounded).
3. Calls the marker with a **forced tool** `submit_ielts_writing_assessment` so
   output always conforms to the §4 schema (no free-text parsing).
4. **Validates in code**: recompute overall via `overallBand`, verify every
   evidence/error quote appears verbatim (whitespace-normalised) in the essay,
   range-check bands/confidence/criteria, derive `needs_human_review` from the
   §5.4 thresholds.
5. Runs **self-consistency only for borderline cases** (2–3×, median per criterion,
   surface a range + human-review if spread >1 band).
6. Runs a **separate feedback-generator call** producing adult-tone teaching
   feedback with one upgrade rewrite per weak criterion and a single next action,
   built from the validated assessment (never a fresh read).
7. Persists the structured result + provenance (`pack_version`, model/prompt
   versions) on the `marking_submissions` spine, with a real `ai_confidence` and
   `needs_human_review`.
8. Is gated by a **calibration set + agreement metrics** before scale, reusing
   `marker-qa/metrics.ts`.
9. Reuses the existing compliance gating chain unchanged.

Router (§1.1) is **out of scope for the MVP**: this module is invoked on an
explicit "IELTS Writing Task 2" path, so board/task/level are known. A stub
`resolveIeltsTask2Pack(track)` (academic | general) stands in for routing.

---

## 3. The gap (target − current)

| Engine component | Current | Gap to close in this module |
|---|---|---|
| Router §1.1 | none | Out of MVP scope; explicit path + track param |
| Knowledge Pack §1.2 | descriptors hardcoded in `band-descriptors.ts`; no version, no exemplars | Build a versioned pack object with descriptors + conventions + graded exemplars + `pack_version` |
| Retrieval §1.3 | whole grid injected | Select descriptors for plausible bands + nearest-band exemplars |
| Marker §1.4 | JSON-in-prose, single model call (`writing-feedback/route.ts`) | Forced-tool call `submit_ielts_writing_assessment` |
| Validator §1.5 | trusts model overall; no evidence check | Recompute via `overallBand`; verbatim quote verify; range checks; disagreement gate |
| Confidence §1.5/§5.4 | `ai_confidence` NULL by design | Real per-criterion + overall confidence; threshold routing |
| Self-consistency §6 | none | Borderline-only 2–3× with median + range |
| Feedback §1.6/§7 | parsed from same JSON; rewrites refused | Separate call; adult tone; upgrade rewrites allowed |
| Error taxonomy §2 | none | Fixed 20-value enum + `errors[]` in schema + persisted |
| Calibration §8 | maths seed only | IELTS calibration set + agreement run |
| Provenance §2 | model/prompt/rubric versions | Add `pack_version` capture |

---

## 4. Concrete build steps (ordered, per 01-spec §9)

> Build order mirrors spec §9: pack → forced-tool marker → validator → confidence
> routing → self-consistency → feedback → calibration → analytics wiring. Each
> step lists the files it touches and its acceptance criteria. Steps are
> test-first where a pure function exists to test.

### Step 1 — IELTS Writing Task 2 Knowledge Pack (descriptors + conventions + exemplars)
- **Files (new):**
  - `src/lib/marking/ielts/pack/types.ts` — `IeltsWritingPack` type:
    `{ packVersion: string; track: 'academic'|'general'|'both'; criteria: readonly IELTSWritingCriterion[]; descriptors: Record<band, Record<criterion, string>>; conventions: string[]; pitfalls: string[]; exemplars: IeltsExemplar[] }`;
    `IeltsExemplar = { id; band: number; perCriterionBand: Record<criterion, number>; essayText: string; rationale: string }`.
  - `src/lib/marking/ielts/pack/ielts-writing-v2025_1.ts` — the immutable pack
    object (`as const`), `packVersion: 'ielts_writing_v2025.1'`. Descriptors
    seeded by re-exporting/adapting `TASK2_DESCRIPTORS` + `WRITING_TASK2_CRITERIA`
    from `src/lib/ielts/band-descriptors.ts` (do NOT duplicate the prose; import it).
    Exemplars start empty `[]` with a `// TODO: add graded exemplars` and a content
    note that they are the single biggest accuracy lever (§1.3).
  - `src/lib/marking/ielts/pack/index.ts` — `resolveIeltsTask2Pack(track): IeltsWritingPack`
    (fail-closed: throws if no pack), `getIeltsPackVersion()`.
- **Touches (read-only import):** `src/lib/ielts/band-descriptors.ts`.
- **Acceptance:** new unit test `src/__tests__/ielts/pack.test.ts` asserts:
  pack resolves for both tracks; `packVersion` is the exact string; exactly 4
  criteria matching `WRITING_TASK2_CRITERIA`; every descriptor band 4–9 present
  and non-empty; pack object is frozen/`as const` (mutation is a type error).
- **Depends on:** nothing.

### Step 2 — Forced-tool schema + marker call
- **Files (new):**
  - `src/lib/marking/ielts/tool-schema.ts` — the `submit_ielts_writing_assessment`
    tool definition (Anthropic `Tool` shape) AND a Zod schema mirroring it for
    code-side validation. Schema per §4: `criteria` (exactly 4, name enum =
    `WRITING_TASK2_CRITERIA`, `band` int 0–9, `descriptor_matched` string,
    `evidence` 1–3 × `{quote, explanation}`, `confidence` 0–1); `errors[]`
    (`{type: ErrorTaxonomy, quote, correction, explanation}`); `integrity_flags`
    (`under_length, off_topic, likely_memorised, copied_from_prompt`);
    `borderline_flags` (per-criterion bool); `proposed_overall_band` number;
    `overall_confidence` 0–1; `holistic_note` string.
  - `src/lib/marking/ielts/taxonomy.ts` — the fixed 20-value `ErrorTaxonomy`
    enum (`grammar.*`×7, `lexical.*`×5, `discourse.*`×4, `task.*`×4) as a
    `readonly` tuple + type. (Exact members per architecture §2.)
  - `src/lib/marking/ielts/prompt-builder.ts` — `buildIeltsMarkingPrompt(pack, question, essay, retrieval)`
    → `{ systemPrompt, userMessage, cacheKey }`, mirroring
    `src/lib/marking/prompt-builder.ts`. System prompt = examiner persona + 4
    criteria + 0–9 meaning + hard rules (mark only against descriptors; cite
    evidence; never invent; **output only via the tool**) + injected retrieved
    descriptors/exemplars. This is the cacheable block.
  - `src/lib/marking/ielts/marker.ts` — `runMarker(client, pack, input)`:
    `messages.create({ model: ANTHROPIC_MODEL, max_tokens, system: <cacheable, cache_control set>, messages, tools: [tool], tool_choice: { type: 'tool', name: 'submit_ielts_writing_assessment' } })`,
    extract the single `tool_use` block, return its `input` parsed through the Zod schema.
- **Touches (read-only):** `src/lib/anthropic-client.ts` (`ANTHROPIC_MODEL`),
  `src/lib/marking/prompt-builder.ts` (pattern only).
- **Acceptance:** `src/__tests__/ielts/tool-schema.test.ts` pins the taxonomy at
  exactly 20 members (exhaustiveness guard) and validates a good tool payload,
  rejects: wrong criterion count, band 10 / band -1, confidence 1.5, missing
  `integrity_flags`, unknown error type. `prompt-builder` test asserts the system
  prompt names all 4 criteria, contains the "output only via the tool" rule, and
  injects the retrieved descriptor text. Marker test mocks the client and asserts
  `tool_choice` forces the named tool and that a `tool_use` payload is returned
  (no prose parsing path). `@vitest-environment node` where a mock client is used.
- **Depends on:** Step 1.

### Step 3 — Code-side validator (recompute, evidence-verify, range-check)
- **Files (new):**
  - `src/lib/marking/ielts/validator.ts`:
    - `recomputeOverall(c)` = `overallBand([tr,cc,lr,gra])` (import from `src/lib/ielts/bands.ts` — **reuse, no new rounding**).
    - `verifyEvidence(essay, spans)` — whitespace-normalised verbatim substring
      check for every `evidence[].quote` and every `errors[].quote`. Returns the
      set of misses.
    - `rangeChecks(assessment)` — bands int 0–9, confidence 0–1, exactly 4 criteria one-per-name.
    - `validate(assessment, essay)` → `{ computedOverall, disagreesWithModel: |computed - proposed| > 0.5, evidenceMisses, rangeErrors }`.
- **Touches (read-only):** `src/lib/ielts/bands.ts`.
- **Acceptance:** `src/__tests__/ielts/validator.test.ts`: parametrised rounding
  test confirming `recomputeOverall` matches §5 exactly (6.0,6.0,6.5,7.0 → 6.5;
  the .25/.75 boundaries); evidence verify rejects a fabricated quote and a
  whitespace-only-different quote passes; disagreement gate flips at >0.5;
  range checks reject band 10 / 3 criteria.
- **Depends on:** Step 2 (schema type).

### Step 4 — Confidence + human-review routing + re-run-once
- **Files:**
  - `src/lib/marking/ielts/review-routing.ts` (new) —
    `needsHumanReview({ integrityFlags, overallConfidence, criterionConfidences, evidenceMisses, modelDisagreement })`:
    true if any integrity flag true OR `overall_confidence < 0.7` OR any
    criterion confidence `< 0.6` OR model-vs-code disagreement >0.5 OR evidence
    misses remain after a re-run (§5.2/§5.4).
  - `src/lib/marking/ielts/mark.ts` (new) — the orchestrator: marker → validate →
    if evidence misses, **re-run marker once**; if still missing → human review;
    assemble `IeltsAssessmentResult` (validated, with `computedOverall`,
    `needsHumanReview`, `packVersion`). This is the single callable entry point
    for the route and tests.
- **Acceptance:** `src/__tests__/ielts/review-routing.test.ts` covers each
  trigger independently and a clean pass (no review). `mark.test.ts` (mock
  client) asserts: a fabricated-evidence first response triggers exactly one
  re-run; a second failure sets `needsHumanReview=true`; a clean response routes
  no review and sets `ai_confidence` to the model's overall_confidence.
- **Depends on:** Steps 2, 3. **This step reconciles the "confidence is NULL"
  posture**: IELTS introduces a real, model-supplied-then-code-gated confidence;
  document that this diverges from the GCSE `ai_confidence=NULL` design and is
  intentional for IELTS only.

### Step 5 — Self-consistency (borderline only)
- **Files (new):** `src/lib/marking/ielts/self-consistency.ts` —
  `isBorderline(assessment)` (any `borderline_flags` true OR overall within 0.25
  of a half-band boundary); `consensus(runs)` (median per criterion; if any
  criterion spread >1 band → surface a `{min,max}` range + `needsHumanReview`).
  Orchestrator `mark.ts` calls 2–3× **only when** `isBorderline`.
- **Acceptance:** `src/__tests__/ielts/self-consistency.test.ts`: non-borderline
  → single run (assert call count 1); borderline with tight agreement → median
  taken; borderline with >1-band spread → range + review. Cost guard: assert
  no multi-run for clearly-non-borderline input.
- **Depends on:** Step 4.

### Step 6 — Feedback generator (second call)
- **Files (new):**
  - `src/lib/marking/ielts/feedback-prompt.ts` — builds the feedback system/user
    message from the **validated assessment only** (not the essay re-read,
    except quoting the candidate's own sentences for rewrites). Adult tone;
    per-criterion good/improve + one upgrade rewrite of a weak sentence; one
    prioritised next action; micro-lesson links per criterion (slugs, not URLs).
  - `src/lib/marking/ielts/feedback.ts` — `generateFeedback(client, validated)`
    second `messages.create` on `ANTHROPIC_MODEL`; returns structured
    `IeltsFeedback`. **Upgrade rewrites are allowed here** (adult candidates) —
    explicitly opposite to the GCSE/EAL no-rewrite policy; document per-area policy.
- **Acceptance:** `src/__tests__/ielts/feedback.test.ts` (mock client): feedback
  references only criteria/bands present in the validated assessment; never
  asserts a band different from the validated mark (consistency guard); produces
  exactly one next action. A guard test confirms feedback input is the validated
  object, not raw model JSON.
- **Depends on:** Step 4.

### Step 7 — API route + persistence + provenance
- **Files:**
  - `src/app/api/ielts/writing-task2/mark/route.ts` (new) — POST. Reuse the
    **exact** gating chain from `src/app/api/ielts/writing-feedback/route.ts`
    (auth → subscription → `checkMinorAIConsent` → `isAiOptedOutServer` →
    `rateLimit` → `contentSafetyCheck`), then `mark.ts` → `feedback.ts` →
    `filterAIResponse` → `logAiDecision` (feature `'ielts/writing-task2'` —
    add to the `AiAuditFeature` union). Returns `{ assessment, feedback,
    needsHumanReview }`. Sends essay verbatim (the markable signal); sends NO
    surrounding identifiers (name/email/school/ids) — the load-bearing
    data-minimisation invariant.
  - `src/lib/marking/ielts/persistence.ts` (new, thin) or extend
    `src/lib/marking/persistence.ts` — write the IELTS result into
    `marking_submissions.ai_result` (full `IeltsAssessmentResult` jsonb), set
    `ai_confidence` = overall_confidence, `ai_uncertainty_flags` =
    integrity/borderline flags, status = `teacher_review_required` when
    `needsHumanReview` else `ai_marked`.
  - Extend `src/lib/marking/versioning-capture.ts` call site to also capture
    `pack_version` (store in `rubric_versions.scheme_version` or a `settings`
    field; document choice).
  - `src/lib/ai-audit-log.ts` — add `'ielts/writing-task2'` to `AiAuditFeature`.
- **Touches:** `src/lib/ai-audit-log.ts`, `src/lib/marking/versioning-capture.ts`,
  `src/lib/marking/persistence.ts`.
- **Acceptance:** route test (mock client + mock Supabase) asserts: gating chain
  runs in order and blocks an opted-out minor before any model call; a clean mark
  persists with `ai_confidence` set and status `ai_marked`; a flagged mark
  persists status `teacher_review_required`; `pack_version` is captured. A
  data-minimisation test asserts the outbound `messages.create` body contains no
  name/email/school/userId (only question + essay). `@vitest-environment node`.
- **Depends on:** Steps 4, 6.

### Step 8 — Calibration set + agreement metrics
- **Files (new):**
  - `src/__tests__/ielts/fixtures/calibration.ts` — small set of IELTS Task 2
    essays with known human bands (per criterion + overall), plus edge fixtures
    (under-250-words, off-topic, copied-from-prompt).
  - `evals/ielts-writing-task2.eval.ts` (or under existing `evals/`) — runs the
    marker over the calibration set and computes, via `src/lib/marker-qa/metrics.ts`,
    exact-band, within-half-band, per-criterion correlation (TR/CC/LR/GRA), and
    drift. Wired to an `eval:ielts` script.
- **Touches (read-only):** `src/lib/marker-qa/metrics.ts`.
- **Acceptance:** eval runs and emits the three agreement metrics + per-criterion
  correlation; a documented threshold (e.g. ≥80% within-half-band) gates rollout.
  Fixture-shape unit test confirms each calibration item has 4 criterion bands +
  overall consistent with `overallBand`.
- **Depends on:** Step 4 (the validated mark path).

### Step 9 — Wire into the learner model / analytics (per §4)
- **Files:** feed the persisted `errors[]` (taxonomy-tagged) + per-criterion bands
  into the analytics layer. Decide between extending `src/lib/learning-profile/`
  (error profile) and a new IELTS criterion-mastery series. **Scoped as a
  follow-on**, not the MVP slice; documented here for completeness per spec §9.8.
- **Acceptance:** out of MVP; tracked as next phase.

---

## 5. Risks

- **Model-string / effort-tier mismatch (highest).** Spec names
  `claude-sonnet-4-6 @xhigh` / `claude-opus-4-8`; only `claude-sonnet-4-20250514`
  is callable and the SDK has no effort tier. Mitigation: use `ANTHROPIC_MODEL`
  via a single `IELTS_MARKER_MODEL`/`IELTS_ESCALATION_MODEL` constant; treat
  "escalation re-mark" as same-model re-run until a stronger callable id exists.
  Do not invent identifiers.
- **Exemplar bank is empty at MVP.** The pack ships with `exemplars: []`. The
  spec calls exemplar anchoring the single biggest accuracy lever; without it the
  marker free-floats on descriptors. Mitigation: ship the structure, flag the
  gap, prioritise authoring graded exemplars before calibration sign-off.
- **Confidence is model-supplied.** A model's `overall_confidence` is itself an
  LLM output and may be poorly calibrated. The code-side disagreement gate,
  evidence verification, and self-consistency are the real backstops; treat the
  numeric confidence as one signal among several, and validate calibration of the
  confidence→review thresholds against the §8 set.
- **Posture divergence from GCSE.** GCSE deliberately writes `ai_confidence=NULL`
  ("never fake confidence") and always drafts to a human. IELTS introduces a real
  confidence + threshold routing. This is an intentional per-module divergence and
  must be documented so the two don't get "reconciled" by accident.
- **DPIA / UI privacy overstatement.** The DPIA asserts ZDR as active, but
  `isZeroRetentionConfigured()` is false (written ZDR/DPA/no-training confirmations
  pending). Any "we don't train on your work" copy on the IELTS UI must match the
  contractual-and-pending posture, not the DPIA wording.
- **Copyright on descriptors.** Official IELTS band descriptors are copyright; the
  pack must use the existing paraphrased prose (`band-descriptors.ts`), not verbatim
  official text.
- **Greenfield-vs-refactor drift.** Building in `src/lib/marking/ielts/` beside the
  GCSE stack risks two parallel marking stacks. Accepted for the MVP (per build
  note); the shared spine (`marking_submissions`, versioning-capture, marker-qa)
  keeps them convergent. A later unification of the result contract is a separate task.
- **Forced tool-use is new ground here.** No existing route uses `tool_choice`;
  confirm SDK 0.90.0 `tool_use` block handling in the marker before relying on it,
  and keep a hard failure (not a silent prose fallback) if no `tool_use` block returns.
- **Prompt caching unproven.** Spec §2 wants the system block cached; no current
  route emits `cache_control`. Adding it is new; verify cache hits in practice and
  treat caching as a cost optimisation, not a correctness dependency.

---

## 6. Out of scope for this MVP slice
- The Router (§1.1) — replaced by an explicit IELTS path + `track` param.
- Full learner-model/analytics wiring (§4) — Step 9 is a follow-on phase.
- A stronger escalation model — blocked on a callable model id.
- Speaking / Task 1 — this module is Writing Task 2 only.
