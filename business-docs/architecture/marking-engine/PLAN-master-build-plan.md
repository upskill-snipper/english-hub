# Master Build Plan — Grounded Marking Engine + IELTS Writing Task 2

> Lead-architect synthesis of all component designs (docs 10–21) into ONE
> dependency-ordered build plan. Traces to `00-architecture-source.md` (the founder's
> note) and `01-ielts-writing-task2-spec.md` (the first module).
>
> **Founder's explicit instruction:** build these two **sequentially** — the **engine
> first**, then **IELTS Writing Task 2 on top of it**. Not a dozen things at once.
>
> **The hard gate (architecture §8 / IELTS §9):** NO marking is exposed to learners
> before BOTH the Validator (verbatim-evidence backstop) AND the Calibration harness
> (with a green baseline) exist. This plan enforces that as Phase Gate G-LIVE.

---

## How to read this plan

- Work is organised into numbered **PHASES**; each phase is a set of ordered **STEPS**.
- Each step states: **Build** (what), **Files**, **Deps**, **Accept** (tests / proof of
  correctness), and **LIVE?** (does it touch the live marking path; if so the safety /
  regression guard).
- **[PARALLEL]** marks steps that can run concurrently; everything else is sequential
  within its phase.
- Step IDs are `P<phase>.<step>` and are referenced by the dependency graph in §C.
- The component designs are the authoritative detail for each step; this plan sequences
  them and reconciles their seams. Where a design doc and the existing-code map
  conflict, the **code map wins on facts** (e.g. IELTS is NOT greenfield — live
  prose-JSON IELTS routes already exist) and is called out.

---

## A. Global definition of done

The engine + IELTS WT2 module is DONE when ALL of the following hold:

1. `markSubmission(input)` runs the six components in order (Router → resolvePack →
   retrieve → mark → validate → generateFeedback) behind one engine facade, and the
   GCSE routes are cut over to it with **byte-identical grades** (modulo provenance) vs
   today.
2. The IELTS WT2 vertical slice marks via a **forced tool** (`tool_choice`), validates
   in code (overall recomputed, every evidence quote verified verbatim, range-checked,
   >0.5 disagreement gate, re-run-once on fabrication), produces a **real**
   `overall_confidence`, and routes to human review per IELTS §5.4.
3. The **20-value error taxonomy** is one shared constant imported by the marker tool
   schema, the validator, and all analytics — pinned by a guard test.
4. The **calibration harness** exists with a promoted, immutable baseline over a
   populated set (≥50 essays, bands 4–9, ≥5 per populated band) and the fail-closed
   **release gate** (`assertCalibrationGreen`) is wired into version activation + CI.
5. **No marking is exposed to learners** until #2 and #4 both exist (Gate G-LIVE).
6. Data-protection scaffolding is structural and tested: outbound minimisation
   allow-list + guard, single typed posture object bound to all UI/DPIA/register, the
   analytics de-identification projection, and the Children's-Code gate chain on the
   IELTS entrypoint.
7. Every mark persists on the `marking_submissions` spine with `pack_version`
   provenance, re-resolvable to the exact immutable pack.
8. Speaking/Hermes seams exist as **@deferred** type contracts + one module-boundary
   lint rule; no Speaking/Hermes behaviour ships.
9. `tsc --noEmit`, lint, and the full Vitest suite are green; the GCSE regression suite
   (smart-ip, mark-schemes, grade-boundaries) is unchanged-and-green at every phase
   boundary.

---

## B. Data-protection guardrails (apply across ALL phases)

These are invariants, not a phase. Every phase that adds a model call, a payload field,
a persisted row, or a UI claim MUST satisfy them (doc 19; architecture §5).

- **DP-1 Outbound minimisation.** No name/email/DOB/school/userId in any
  `messages.create` body. The essay is the markable signal and goes **verbatim** (NOT
  redacted). Enforced by `assertMinimisedPayload` (built in P0.5, applied from P4.2
  onward) with an essay-is-verbatim carve-out + adversarial test. This guard must land
  **before** any IELTS marker wiring (P4.2). [adjusted per review]
- **DP-2 No claim drift.** Pending guarantees (`no_training`, `zero_retention`) are
  structurally NOT claimable until `isZeroRetentionConfigured()` flips. All marking UI
  privacy copy renders from the single typed posture object (P0.6) — never hardcoded. [adjusted per review]
- **DP-3 Analytics de-identification.** No essay text, no verbatim evidence quotes, no
  identifiers in any analytics projection. The de-identification projection
  (`analytics-projection.ts`) is built in P0.7 (a DP-scaffold step, sibling to P0.5/P0.6)
  so it precedes the first persisted analytics row. Evidence quotes are essay substrings
  and WILL leak if not stripped — adversarial test is the backstop (P0.7, exercised by P9.1). [adjusted per review]
- **DP-4 Children's Code gate chain** runs in the same order as `mark/route.ts` before
  any model call (auth → consent → AI-opt-out → rate limit → content safety → audit).
  Age-gate upgrade rewrites (adults only).
- **DP-5 Retention + deletion** covered by a typed `RETENTION_POLICY` (built in P0.6); the
  deletion/purge routine is implemented + tested in **P5.4** (purges marking_submissions
  row(s) + essay text, ai-audit-log entries, feedback rows, ielts_attempts,
  learner_profiles/review_states, and the analytics projection). Decide ONE persistence
  spine for IELTS MVP (the `marking_submissions` spine — P5/P9) so deletion routes cover
  it. ZDR-pending is surfaced, never implied complete. [adjusted per review]
- **DP-6 DPIA honesty.** The signed DPIA currently overstates ZDR as an active control;
  an immediate honesty correction lands in **P0.7**, and it must be fully reconciled
  (**P7.5**) to "contractual; written confirmation pending" before any IELTS marking UI
  ships. P7.5 is a hard predecessor of P9.5 and a G-LIVE precondition. [adjusted per review]
- **DP-7 Inherited client.** Any model call (incl. any new model id) routes through
  `getAnthropicClient()` so the no-training/minimisation posture is inherited; never a
  bespoke client.

---

## PHASE 0 — Reconciliation & non-negotiable foundations (no live behaviour change)

**Goal:** resolve the cross-cutting unknowns and build the two keystones (error
taxonomy, half-band overall) and the data-protection scaffolding that everything else
imports. Nothing here touches the live marking path.

### P0.1 Model-string + effort-tier reconciliation (BLOCKER for every marker step) [PARALLEL]
- **Build:** Confirm the exact callable model id against the deployed account/SDK
  (`@anthropic-ai/sdk@0.90.0`). Introduce `MARKING_MODELS = { classifier, marker,
  escalation }` constants in `anthropic-client.ts`, all defaulting to `ANTHROPIC_MODEL`
  (`claude-sonnet-4-20250514`). Treat "escalation re-mark" as same-model re-run until a
  stronger callable id exists. Confirm SDK 0.90.0 forced tool-use (`tool_choice`)
  handling. Do NOT hardcode `claude-sonnet-4-6`/`opus-4-8` or an `effort` field.
- **Files:** `src/lib/anthropic-client.ts`.
- **Deps:** none.
- **Accept:** test asserts `MARKING_MODELS.*` resolve to a callable id; a guard asserts
  `MARKING_MODELS.marker` and `.escalation` are never a Haiku-class id (honours IELTS §1
  'Never mark on Haiku'); a node smoke (gated) confirms a `tool_choice`-forced call
  returns a `tool_use` block; no spec model string or `effort` field appears in code.
  **See OPEN QUESTION OQ-1.** [adjusted per review]
- **LIVE?** No.

### P0.2 Shared error taxonomy — THE KEYSTONE (architecture §2) [PARALLEL]
- **Build:** Read `src/lib/learning-profile/taxonomy.ts` FIRST and reconcile. Create
  the single canonical home: `MARKING_ERROR_TYPES` (the 20 verbatim spec-4 strings:
  7 grammar / 5 lexical / 4 discourse / 4 task), `MarkingErrorType`, category map,
  `errorCategory()`, `isMarkingErrorType()`, severities. ONE constant imported by the
  marker tool schema, validator, and analytics. If the learning-profile taxonomy
  diverges, document the mapping; do not fork.
- **Files:** `src/lib/marking/result/taxonomy.ts` (canonical),
  `src/lib/learning-profile/taxonomy.ts` (read/reconcile).
- **Deps:** none.
- **Accept:** guard test asserts exactly 20 types (7/5/4/4) char-for-char vs spec-4,
  four category prefixes, `errorCategory` total over the set; `tsc` clean.
- **LIVE?** No.

### P0.3 IELTS overall half-band wrapper (reuse `bands.ts`) [PARALLEL]
- **Build:** `ieltsOverall()` + `overallDisagreement(proposed, computed)` wrapping the
  EXISTING `src/lib/ielts/bands.ts` `overallBand()` (which already implements the spec
  rounding). No new rounding logic.
- **Files:** `src/lib/marking/result/overall.ts`, `src/lib/ielts/bands.ts` (reuse only).
- **Deps:** none.
- **Accept:** parametrised rounding test proves §5.1 boundaries (6.24→6, 6.25→6.5,
  6.74→6.5, 6.75→7, 8.875→9); `overallDisagreement(6.5,7.0)===0.5`; agrees with
  `bands.ts` on 100 random 4-tuples.
- **LIVE?** No.

### P0.4 Canonical result schema + taxonomy guard (doc 13)
- **Build:** `MarkingResultV2` (schemaVersion:2) discriminated unions
  (`BandCriterionScore | MarksCriterionScore`; `BandOverall | GradeOverall`),
  `EvidenceSpan` (validator-owned `verified`), `MarkingError` (type bound to
  `MARKING_ERROR_TYPES`), `IntegrityFlags`, `ValidationFlags`, `FeedbackBlock`,
  provenance with `packVersion`. `computeNeedsHumanReview()` (§5.4 gate). Re-export
  legacy `MarkScheme`/`MarkingResult` so engine types compose, not fork.
- **Files:** `src/lib/marking/result/types.ts`, `src/lib/marking/result/confidence.ts`,
  `src/__tests__/marking-result-schema.test.ts`.
- **Deps:** P0.2, P0.3.
- **Accept:** hand-written IELTS and GCSE `MarkingResultV2` literals both type-check;
  parametrised gate tests (each of 5 triggers individually flips true; all-clear false);
  guard test fails if any taxonomy value/criterion name/threshold (0.7/0.6) changes.
- **LIVE?** No.

### P0.5 Data-protection scaffolding — outbound allow-list + guard (doc 19 step 1) [PARALLEL]
- **Build:** `OUTBOUND_MARKING_FIELDS` allow-list + `FORBIDDEN_OUTBOUND_KEYS` (superset
  of training `FORBIDDEN_EXPORT_KEYS`) + `assertMinimisedPayload({system,messages})`
  throwing `OutboundPiiError`, with an essay-is-verbatim carve-out.
- **Files:** `src/lib/marking/data-protection/outbound-allowlist.ts`,
  `src/lib/marking/data-protection/assert-minimised.ts`,
  `src/__tests__/marking/outbound-minimisation.test.ts`.
- **Deps:** none.
- **Accept:** clean payload passes; studentId/email/name anywhere throws; an
  email-looking string INSIDE the essay does NOT throw; forbidden-keys superset proven.
- **LIVE?** No (guard is wired onto live calls in later phases).

### P0.6 Data-protection scaffolding — typed posture object + binding (doc 19 step 2) [PARALLEL]
- **Build:** `describeDataPosture()` deriving per-claim `{claimable,tense,text}` from
  `ANTHROPIC_DATA_POLICY` + `isZeroRetentionConfigured()`; `MARKING_PRIVACY_CLAIMS` as
  the ONLY source marking UI may import.
- **Files:** `src/lib/anthropic-client.ts`, `src/lib/marking/data-protection/posture.ts`,
  `src/__tests__/marking/data-posture.test.ts`.
- **Deps:** none.
- **Accept:** while `isZeroRetentionConfigured()===false`, `zero_retention.claimable`
  is false and `no_training.tense!=='present'`; flipping pending flags makes them
  claimable.
- **LIVE?** No.

### P0.7 DP scaffold — analytics de-identification projection + immediate DPIA honesty correction (DP-3) [adjusted per review]
- **Build (a):** Create `analytics-projection.ts` (the de-identification projection) HERE,
  as a sibling DP scaffold to P0.5/P0.6, so it precedes the first persisted analytics row;
  the adversarial no-identifier test is the DP-3 backstop. P9.1 depends on THIS step (not P6.3).
- **Build (b) — IMMEDIATE, standalone (today), independent of the engine build:** Correct
  `dpia-ai-features-v1.md` §2/§4/§5-R6 so it no longer asserts Anthropic zero-retention/
  no-training as ACTIVE while `subprocessors.ts` says `dpaStatus:'unconfirmed'`,
  `zeroRetention:'unconfirmed'` and `isZeroRetentionConfigured()===false`. Re-rate R6
  (children's essays in third-party training data) with ZDR/no-training treated as
  **PENDING (contractual-only, written confirmation not in hand)**; state the residual is
  contingent. (P7.5 remains the 'generate-from-typed-posture' wiring; this honesty
  correction cannot wait for Phase 7.)
- **Build (c):** Obtain a dated DPO signature on the DPIA, reconcile the approver name
  discrepancy (Johnson vs Jardine), and document the DPO/Founder-same-person independence
  limitation (ideally an independent review) for this children's-data DPIA.
- **Files:** `src/lib/marking/data-protection/analytics-projection.ts`,
  `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md`,
  `src/config/subprocessors.ts`.
- **Deps:** P0.2.
- **Accept:** `analytics-projection.ts` exists with a passing adversarial no-identifier
  test; the DPIA no longer claims ZDR/no-training as active and R6 is re-rated PENDING;
  the DPIA carries a dated DPO signature with the name reconciled.
- **LIVE?** No (scaffold + compliance docs).

**Phase 0 Definition of Done:** model strings reconciled (or OQ-1 escalated); the 20-value
taxonomy, the half-band overall, and `MarkingResultV2` exist and are guard-tested; the
two DP scaffolds (allow-list+guard, posture object) exist and pass adversarial tests;
`tsc`/lint/tests green; zero live-path edits.

---

## PHASE 1 — Engine core: types, registry, fail-closed resolver, Router (no live cutover)

**Goal:** stand up the engine seams and the Router behind a flag, calling existing GCSE
functions, with NO route changes yet (doc 10; doc 11 for the pack loader it composes).

### P1.1 Engine types + seam contracts (types only) (doc 10 step 1)
- **Build:** `Area/TaskType/Level`, `RoutingDecision`, `NeedsConfirmation`, typed
  `RoutingError (NO_PACK|AMBIGUOUS_SUBMISSION|INVALID_METADATA)`, `EngineInput`/
  `EngineResult`, the five seam input interfaces; re-export `MarkScheme`/`MarkingResult`
  and compose `MarkingResultV2` from P0.4.
- **Files:** `src/lib/marking/engine/types.ts`.
- **Deps:** P0.4.
- **Accept:** `tsc` + lint clean; fixture constructs every type; no runtime code.
- **LIVE?** No.

### P1.2 Area registry (doc 10 step 2)
- **Build:** `AREA_REGISTRY` with `gcse` (wrapping existing 20 schemes) + `ielts`
  placeholder; `listAreas()`/`getAreaDescriptor()`.
- **Files:** `src/lib/marking/engine/areas.ts`.
- **Deps:** P1.1.
- **Accept:** every area has non-empty `taskTypes`, a `levelScale`, a `resolverKey`;
  gcse resolves to existing ids; fails closed if an area lacks a resolver.
- **LIVE?** No.

### P1.3 Knowledge-Pack types + manifest schema (doc 11 step 1) [PARALLEL with P1.2]
- **Build:** `KnowledgePack`, `PackManifest` (fullId/status/verified/checksums/
  `sourcing.containsBoardSecureMaterial`/`criteriaModel` discriminated union
  `ielts_4criteria|gcse_ao_marks|cefr`).
- **Files:** `src/lib/marking/knowledge-pack/types.ts`,
  `src/lib/marking/knowledge-pack/manifest.schema.json` (optional).
- **Deps:** P0.4 (composes result discriminator).
- **Accept:** strict TS compile; manifest includes every §2.2 field; fixture manifest
  type-checks.
- **LIVE?** No.

### P1.4 Pack resolver (fail-closed) (doc 10 step 3 + doc 11 step 2)
- **Build:** `resolvePack` delegating to `getMarkScheme` for gcse and THROWING `NO_PACK`
  on null (not returning null); validates `packPin` (`INVALID_METADATA` on bad pin);
  ielts branch throws `NO_PACK` until the pack lands. Plus the file-based loader
  primitives (`loadPackByFullId`, `listPacks`, checksum-verify, refuse board-secure)
  for the IELTS pack to come.
- **Files:** `src/lib/marking/engine/resolve-pack.ts`,
  `src/lib/marking/knowledge-pack/loader.ts`, `src/lib/marking/knowledge-pack/index.ts`.
- **Deps:** P1.2, P1.3.
- **Accept:** known GCSE id resolves with `packVersion`; unknown id throws `NO_PACK`;
  bad pin throws `INVALID_METADATA`; board-secure/tampered-checksum refused; ielts throws
  `NO_PACK` (this is the canonical 'fails closed before the pack ships' assertion,
  relocated here from P9.3). [adjusted per review]
- **LIVE?** No (resolver is not yet on a route). **Guard for later:** R1 — fail-closed
  replaces silent null; audit GCSE ids before any cutover (P4.1).

### P1.5 Router explicit + pin modes (doc 10 step 4)
- **Build:** mode 1 explicit metadata → `basis:'explicit' confidence:1` reproducing
  today's GCSE routing 1:1; mode 3 pin; ambiguous returns a `NeedsConfirmation` stub.
  `router-config.ts` thresholds.
- **Files:** `src/lib/marking/engine/router.ts`,
  `src/lib/marking/engine/router-config.ts`.
- **Deps:** P1.4.
- **Accept:** reproduces current GCSE routing 1:1; pin path covered; invalid metadata →
  `INVALID_METADATA`.
- **LIVE?** No.

### P1.6 Router classifier cascade + confidence gate (doc 10 step 5)
- **Build:** deterministic heuristics (word-count/structure/question-text match, CEFR via
  `calculateCEFRLevel`, IELTS objective level reuse) then a **mocked**
  `classify_submission` forced-tool fallback on the cheap tier; gate on
  topConfidence/margin vs config; `allowClarify:false` → `AMBIGUOUS_SUBMISSION`.
- **Files:** `src/lib/marking/engine/classify.ts`, `src/lib/marking/engine/router.ts`.
- **Deps:** P1.5, P0.1.
- **Accept:** high-confidence single candidate routes directly; near-tie returns
  `NeedsConfirmation` with both labels; `allowClarify:false`+low conf throws
  `AMBIGUOUS_SUBMISSION`; thresholds from config; LLM mocked (no live call).
- **LIVE?** No.

**Phase 1 Definition of Done:** engine seam types, area registry, fail-closed pack
resolver + loader primitives, and the Router (explicit/pin/classifier with confidence
gate) all exist and are unit-tested with the LLM mocked; nothing is wired to a route;
`tsc`/lint/tests green; GCSE regression suite unchanged.

---

## PHASE 2 — Engine facade wiring + GCSE cutover (LIVE — guarded)

**Goal:** compose the facade behind a flag, prove byte-identical GCSE output, then cut
the GCSE routes over. This is the first LIVE change and is the riskiest non-IELTS step.

### P2.1 Engine facade wiring behind a flag (doc 10 step 6)
- **Build:** `markSubmission` composing route → resolvePack → retrieve → mark → validate
  → generateFeedback by calling EXISTING GCSE functions, behind a named feature flag
  `MARKING_ENGINE_FACADE` (read server-side; **prod default OFF**); threads
  `packVersion/model/prompt` into provenance; reconciles the model string to one source
  + classifier tier (closes the model-string inconsistency between `/api/mark` literal
  and `/api/marking/run` constant) — first **record BOTH current literals and get explicit
  sign-off** that changing `/api/mark`'s model is acceptable; if they already match, assert
  it with a test so the change is a proven no-op. **Pre-refactor golden corpus:** before any
  change, run the current `/api/marking/run` + `/api/mark` over a representative matrix
  (all 20 registered schemes + INVALID_SUBMISSION/OFF_TOPIC/over-length-30k-truncation/
  b2b-class-vs-b2c-self edge cases) and freeze the outputs as golden files. [adjusted per review]
- **Files:** `src/lib/marking/engine/index.ts`.
- **Deps:** P1.6, P0.1.
- **Accept:** with `MARKING_ENGINE_FACADE` OFF, both routes go through the original inline
  orchestration byte-identically (test); with it ON, the engine diffs **byte-identical
  (modulo provenance)** against the **frozen pre-refactor golden corpus**, preserving
  INVALID_SUBMISSION→400, OFF_TOPIC→400, b2b_class→teacher_review_required vs
  b2c_self→ai_marked, and ai_confidence===null on persist; model string asserted from one
  constant (no-op test if the two literals already match). [adjusted per review]
- **LIVE?** No (behind flag, not on routes yet).

### P2.2 Confirm-loop contract test (Router ↔ UI) (doc 10 step 7)
- **Build:** ambiguous input → `NeedsConfirmation` → student pick re-submitted as
  explicit metadata → mode 1 → marks.
- **Files:** `src/lib/marking/engine/__tests__/confirm-loop.test.ts`.
- **Deps:** P2.1.
- **Accept:** two-call round trip green; no marking on the first ambiguous call.
- **LIVE?** No.

### P2.3 Cut GCSE routes over to the engine (doc 10 step 8)
- **Build:** replace inline orchestration in the routes with `EngineInput` +
  `markSubmission`, gated by `MARKING_ENGINE_FACADE` (**prod default OFF until P5.1's
  additive migration is deployed and proven**); map `NeedsConfirmation`→409, `NO_PACK`→422,
  `AMBIGUOUS_SUBMISSION`→409 (these widen the live contract, which today emits only
  200/400/401/403/404/429); preserve ALL gates + persistence/draft behaviour + the
  two distinct persistence postures (`/api/mark` no-persist; `/api/marking/run`
  persists). Cut `/api/marking/run` FIRST, then `/api/mark`. **Caller-audit sub-task:**
  enumerate every consumer of `/api/marking/run` and `/api/mark` (web marking UI,
  `mobile/`, `src/app/school/marking`) and confirm each tolerates 409/422, OR prove via
  test that a well-formed GCSE request carrying an explicit `markSchemeId` can never reach
  the 409/422 branches (router mode-1 short-circuit, basis:'explicit', confidence:1). [adjusted per review]
- **Files:** `src/app/api/marking/run/route.ts`, `src/app/api/mark/route.ts`.
- **Deps:** P2.1, P2.2; **and the pre-cutover id audit (R1).**
- **Accept:** existing smart-ip route tests pass **unchanged**; GCSE submit yields the
  same grade; a well-formed explicit GCSE request still returns 200, never 409/422;
  ambiguous B2C returns `needs_confirmation` not a wrong-pack mark; unknown
  scheme returns 422 (fail-closed) not a crash; a forward/backward-compat test proves the
  facade yields byte-identical GCSE output whether or not the V2 columns exist yet. [adjusted per review]
- **LIVE? YES.** **Guard:** the smart-ip + mark-schemes + grade-boundaries suites are the
  regression backstop and MUST be unchanged-and-green; cut one route at a time;
  rollback = `set MARKING_ENGINE_FACADE=off, redeploy` (revert path tested: flag-OFF
  preserves today's inline orchestration); audit all caller ids before flipping
  fail-closed. [adjusted per review]

**Phase 2 Definition of Done:** GCSE marking flows through `markSubmission` on both
routes with identical grades and all existing route tests green-unchanged; model string
single-sourced; confirm-loop contract proven; flag-revert available.

---

## PHASE 3 — IELTS Knowledge Pack + Retrieval (no live exposure)

**Goal:** build the IELTS WT2 pack (the team's IP asset) and the deterministic retrieval
layer. Reconciles with the code map: descriptors already exist (paraphrased) in
`src/lib/ielts/band-descriptors.ts` — import, don't duplicate. Exemplars are the biggest
accuracy lever and start as a structural gap (TODO), filled before calibration sign-off.

### P3.1 Author the IELTS WT2 Knowledge Pack content (doc 11 step 3 + doc 20 step 1)
- **Build:** versioned immutable pack `ielts_writing_v2025.1`: manifest, rubric,
  band-descriptors (seeded by importing existing paraphrased `TASK2_DESCRIPTORS`/
  `WRITING_TASK2_CRITERIA` — no duplication), conventions, prompt-template,
  exemplars covering the calibration range **bands 4–9** (own expert-marked; TODO markers
  allowed only pre-baseline, filled before P9.4). `criteriaModel=ielts_4criteria`; exactly
  4 TR/CC/LR/GRA; `containsBoardSecureMaterial=false`,
  `exemplarSource=own_expert_marked`; status draft / verified false at authoring.
- **Files:** `src/marking/knowledge-packs/ielts/writing/academic/task2/v2025.1/*`
  (manifest.json, rubric.json, band-descriptors.json, conventions.json,
  prompt-template.md, exemplars/band-5.md..band-8.md);
  `src/lib/ielts/band-descriptors.ts` (read-only import).
- **Deps:** P1.3, P1.4.
- **Accept:** manifest validates; exactly 4 criteria; a coverage check fails if exemplars
  are absent for any band present in the active calibration set (**4–9**, not merely 5–8)
  — TODO-flagged empty allowed only pre-baseline with the gap recorded (exemplars block
  calibration sign-off, not pack resolution); sourcing asserted. [adjusted per review]
- **LIVE?** No. **Guard:** copyright — descriptors own-paraphrase only; exemplars own
  expert-marked only; machine-checked `containsBoardSecureMaterial===false` (R-Copyright).

### P3.2 Pack retrieval helpers (doc 11 step 4)
- **Build:** `getDescriptorsForCriteria`, `getExemplarsNearBand` feeding the prompt
  placeholders.
- **Files:** `src/lib/marking/knowledge-pack/retrieval.ts`.
- **Deps:** P1.4, P3.1.
- **Accept:** given an estimated band returns nearest N exemplars (band±1) and the
  requested criteria's descriptors; boundary cases (band 9/0/missing) tested.
- **LIVE?** No.

### P3.3 Retrieval module — types + cheap band estimator (doc 12 steps 1–2) [PARALLEL with P3.1]
- **Build:** `RetrievalResult`/`BudgetReport`/`FirstPassEstimate`/`RetrievalOptions`;
  cheap NO-LLM first-pass band estimator (word/paragraph counts, TTR, mean sentence
  length, discourse markers → band 4–8 via pack threshold table; reuse `roundToBand`).
- **Files:** `src/lib/marking/ielts/retrieval/types.ts`,
  `src/lib/marking/ielts/retrieval/estimate-band.ts`.
- **Deps:** P0.3; pack view from P1.3 (or local `KnowledgePackView` stand-in).
- **Accept:** under-length essay caps band low; long/diverse/well-paragraphed estimates
  ≥7; always integer 4–8; deterministic; NO Anthropic/network import.
- **LIVE?** No.

### P3.4 Nearest-band selector + budget/block formatting + orchestration (doc 12 steps 3–5)
- **Build:** nearest-band exemplar selector (round(b̂) and round(b̂)+1, top-of-range &
  empty-bank fallbacks, cap ≤3); `formatRubricBlock` (whole rubric) + `formatExemplarBlock`
  returned as TWO strings for the cache breakpoint; `selectMarkingContext` pure
  orchestration; populate `packVersion`.
- **Files:** `src/lib/marking/ielts/retrieval/select-exemplars.ts`,
  `src/lib/marking/ielts/retrieval/format-blocks.ts`,
  `src/lib/marking/ielts/retrieval/index.ts`.
- **Deps:** P3.3, P3.2.
- **Accept:** estimate 6 → band-6 & band-7; estimate 8 (no band-9) → band-7 & band-8;
  empty bank → rubric only with `exemplarsOmitted=true`, no throw; never >3; rubric block
  byte-identical per pack version (cache-stability); zero network/model calls.
- **LIVE?** No.

**Phase 3 Definition of Done:** the versioned IELTS pack resolves fail-closed with its
exact `pack_version`; retrieval returns the whole rubric + nearest-band exemplars as
two cache-separated strings with a no-LLM band estimate; exemplar gap flagged if unfilled;
no live exposure; tests green.

---

## PHASE 4 — IELTS Marker (forced tool) + Validator + Confidence (THE BACKSTOP)

**Goal:** the forced-tool marker, the code-side trust backstop, and confidence. This
phase + the calibration harness (Phase 6) are the **two halves of Gate G-LIVE**: nothing
is exposed to learners until BOTH exist. Build the validator BEFORE wiring any
learner-facing call.

### P4.1 IELTS forced-tool schema + map-payload (doc 13 step 4 + doc 20 step 2)
- **Build:** `SUBMIT_IELTS_WRITING_ASSESSMENT_TOOL` reproducing spec-4 verbatim (4-criteria
  min/max, full-name criterion enum, band int 0–9, 1–3 evidence, integrity_flags,
  borderline_flags, required holistic_note) but `errors[].type` enum-bound to
  `MARKING_ERROR_TYPES`; `IeltsToolPayload` + `CRITERION_NAME_TO_CODE`; pure
  payload→`MarkingResultV2` mapping. Mirrored Zod parser.
- **Files:** `src/lib/marking/ielts/tool-schema.ts`,
  `src/lib/marking/ielts/map-payload.ts`, `src/lib/marking/ielts/taxonomy.ts`
  (re-export the shared constant — single source).
- **Deps:** P0.2, P0.4.
- **Accept:** model integrity flags are treated as ONE input, not the source of truth —
  code-side deterministic detectors (see P4.4) may override/augment them before the review
  gate; `errors.items.properties.type.enum` is referentially `MARKING_ERROR_TYPES`; [adjusted per review]
  criterion name enum is the 4 full spec strings; fixture payload → 4 criteria
  canonicalised to [TR,CC,LR,GRA], code-computed overall, correct `needsHumanReview`;
  schema rejects wrong criterion count / band 10/-1 / confidence 1.5 / missing
  integrity_flags / unknown error type.
- **LIVE?** No.

### P4.2 IELTS prompt-builder + cache boundary + marker call (doc 20 step 2 + doc 12 step 6)
- **Build:** cacheable system block (persona + 4 criteria + 0–9 meaning + hard rules +
  "output only via the tool" + injected retrieved descriptors); place the
  `cache_control` breakpoint AFTER `rubricBlock`, exemplar block + essay after it / in
  the user turn; marker call uses `MARKING_MODELS.marker` with `tool_choice` forcing the
  named tool; parse via Zod; NO prose-parse fallback (fail hard if no `tool_use`). Do
  NOT touch GCSE `prompt-builder.ts`. **Owns authoritative word-count computation** (per
  IELTS §2/§3) including the prompt-copy-exclusion rule (words copied directly from the
  task prompt do NOT count toward length), feeding both the `{{WORD_COUNT}}` placeholder
  and the `under_length` (<250) determination. [adjusted per review]
- **Files:** `src/lib/marking/ielts/prompt-builder.ts`, `src/lib/marking/ielts/marker.ts`.
- **Deps:** P4.1, P3.4, P0.1, P0.5 (apply `assertMinimisedPayload` on the outbound body).
- **Accept:** prompt names all 4 criteria + the tool-only rule + injects descriptor text;
  cached prefix excludes the exemplar block and is identical across two submissions
  sharing a pack version but differing in b̂; marker test (mock client, node env) asserts
  `tool_choice` forces the named tool and a `tool_use` payload returns; outbound body
  carries no surrounding identifiers (DP-1); a test on an essay padded with copied prompt
  text proves the authoritative count excludes the copied words. [adjusted per review]
- **LIVE?** No (not on a route yet).

### P4.3 Validator — overall, evidence, range, error-taxonomy, confidence (doc 14 steps 1–5)
- **Build:** pure, model-free `src/lib/marking/ielts/` validator pieces: `ieltsOverall`
  + `overallDisagreement` (reuse P0.3); `normaliseForMatch` + `verifyQuote` +
  `verifyAssessmentEvidence` (NFKC + smart-quote/dash + whitespace + lowercase, NO full
  punctuation/diacritic stripping); range/completeness checks (4 criteria, band int 0–9,
  evidence 1–3, integrity_flags present, confidence clamp); error-taxonomy guard (reuse
  shared constant); `confidence = mean(criterion) * evidence_factor * consistency_factor`.
- **Files:** `src/lib/marking/ielts/overall.ts`, `evidence.ts`, `range-check.ts`,
  `error-taxonomy.ts` (re-export shared), `confidence.ts`.
- **Deps:** P0.3, P0.2, P4.1.
- **Accept:** verbatim/whitespace/case/smart-quote matches pass; empty/fabricated/
  ellipsis-spliced/added-period/essay-empty all fail; band 11 clamped+fatal; 6.5→7
  +non-fatal; 5 evidence truncated to 3; missing integrity_flags fatal; half-quotes
  unverified → 0.5 evidence factor; spread>1 → consistencyFactor<1; product clamped.
- **LIVE?** No. **Guard:** R8 — evidence verified against the EXACT essay string sent to
  the marker (post-truncation), never a re-loaded DB copy.

### P4.4 Validator orchestrator + reject/rerun-once + review gate (doc 14 step 6 + doc 20 step 4)
- **Build:** `validateAssessment` / `mark.ts`: range-check → evidence verify (against the
  **single canonical essay string** — the exact bytes sent to the marker, the same string
  used for feedback rewrite-provenance, persistence, and display) → SHARED single rerun
  budget on fabrication OR schema-fatal → overall recompute + disagreement → confidence →
  `needsHumanReview` per §5.4 (overall<0.7 OR any criterion<0.6 OR any integrity flag
  [model OR code] OR >0.5 disagreement OR unresolved evidence miss OR a coerced
  BAND_NOT_INTEGER) with machine-readable reasons → error-quote verification + taxonomy
  drop. **Deterministic code-side integrity detectors run independently of the model and may
  OVERRIDE/augment its flags before the review gate:** (1) recompute word count → force
  `under_length` (don't trust the model's read of `{{WORD_COUNT}}`); (2) n-gram overlap
  essay vs task prompt → set `copied_from_prompt`; (3) a cheap prompt-relevance/off-topic
  corroboration; route to human when code and model disagree. **Enforce §2 band
  consequences:** `under_length`=true must flag/penalise a high Task Response;
  `copied_from_prompt`=true must not credit copied text in LR/GRA (cross-checked). A
  coerced BAND_NOT_INTEGER routes to human review (prefer review/floor over round-up)
  rather than passing silently. On fabricated evidence the return-with-`verified:false`
  behaviour is a **deliberate, documented departure** from IELTS §5.2's 'reject' wording
  (return-with-flags chosen over reject; folded into OQ-3). Sets a REAL `ai_confidence`.
  Documents the intentional divergence from the GCSE `ai_confidence=NULL` posture (this
  path only). [adjusted per review]
- **Files:** `src/lib/marking/ielts/validator.ts`, `src/lib/marking/ielts/mark.ts`,
  `src/lib/marking/ielts/index.ts`, `src/lib/marking/ielts/review-routing.ts`.
- **Deps:** P4.3, P4.2.
- **Accept:** the 10 validator scenarios (clean→ok no review; fabricated+rerun-clean→
  reran once no review; fabricated+rerun-bad→review + quotes `verified:false` + result
  still returned; no rerun cb→review, never reran; proposed off 0.75→disagreement reason,
  overall=recompute; any integrity flag→review; criterion 0.5→review; overall 0.65→
  review; schema-fatal+rerun fixes→ok; 2-band GRA spread→`high_consistency_spread`+review).
- **LIVE?** No. **Guard:** R3 — schema-fatal rerun policy is a documented one-line
  product decision (**OQ-3**); never loops; second failure → human review, never nulled.
  Add a calibration fixture for an under-length / prompt-padded essay to confirm the §2
  consequence; the feedback validator and the marker validator verify against
  byte-identical input (single canonical string). [adjusted per review]

### P4.5 Self-consistency (borderline only) (doc 15 steps 1–3 + doc 20 step 5)
- **Build:** cross-run spread maths (`crossRunSpread`, `medianBand` lower-tie,
  `spreadToConfidence`, `surfaceRange` — reuse `overallBand`/`roundToBand`);
  `runSelfConsistentMark` with injected `markOnce(temperature)` and the N policy ladder
  (1 / 3 high-stakes / escalate 5 on spread>1), parallel `Promise.allSettled`
  proceed-on-≥2, median-run selection (never average); single-run IELTS adapter
  `markIeltsWritingOnce` that finally sets temperature (≤0.4) and reads model from one
  constant with `cache_control` on the system block. Borderline = any criterion
  confidence <0.7 OR overall within 0.25 of a half-band boundary. **High-stakes/borderline
  N-policy is a product decision (OQ-4); resolve before this step.** Decide and document the
  residual deliberately: either run N≥2 for ALL learner-facing high-stakes marks so every
  shipped band carries a cross-run spread signal, or — if cost forbids it — state explicitly
  that single-run (non-borderline) marks carry NO self-consistency backstop (only model
  self-reported confidence + the verbatim-evidence check, which does not catch a wrong band
  'supported' by genuine quotes) and lean the confidence gate + §9 framing accordingly. Do
  not let 'borderline-only' silently become the safety story for the majority of marks. [adjusted per review]
- **Files:** `src/lib/marker-qa/self-consistency.ts`,
  `src/lib/marking/self-consistency-runner.ts`, `src/lib/marking/ielts-marker.ts`
  (or `src/lib/marking/ielts/self-consistency.ts` per doc 20).
- **Deps:** P4.4, P0.1.
- **Accept:** non-borderline → single run (count 1); high-stakes agreeing → 3 calls,
  single numbers, no review; one criterion spread>1 → 5 calls, bandRange present,
  `needsHumanReview=true`; one run throwing → proceeds on ≥2; mass failure → single-run
  fallback + flag; temperature per `markOnce` matches profile; cost guard asserts no
  multi-run for clearly non-borderline input; the single-run residual decision (OQ-4) is
  recorded in the plan. [adjusted per review]
- **LIVE?** No. **Guard:** cost — high-stakes-only gate; cache dependency asserted
  (P4.2); never average disagreeing runs.

**Phase 4 Definition of Done:** the IELTS marker returns a schema-conformant `tool_use`
payload; the validator recomputes overall, verifies every quote verbatim, range-checks,
reruns once on fabrication, produces a real confidence, and routes to human review per
§5.4; self-consistency runs only for borderline cases and surfaces a range never an
average. **This is half of Gate G-LIVE.** No learner-facing exposure yet.

---

## PHASE 5 — Persistence + provenance for the structured result (no live exposure)

**Goal:** persist the IELTS structured, taxonomy-tagged result on the `marking_submissions`
spine with `pack_version` provenance, real confidence, and the new queryable columns —
WITHOUT exposing marks to learners (the route comes in Phase 7, behind Gate G-LIVE).

### P5.1 Result V2 persistence columns + pack-version provenance (doc 13 step 5 + doc 11 step 5)
- **Build:** migration + Prisma fields (`pack_version`, `needs_human_review`,
  `overall_confidence` CHECK 0..1, `proposed_overall_band`, `marking_errors` jsonb,
  `result_schema_version`); `applyAiResult` populates them; keep `ai_result` as full
  `MarkingResultV2`. Wire `pack_version = manifest.fullId` + checksum into
  `versioning-capture.ts` (best-effort, never throws); `loadPackByFullId` re-resolves
  the exact immutable pack.
- **Files:** `supabase/migrations/<date>_marking_result_v2.sql`, `prisma/schema.prisma`,
  `src/lib/marking/persistence.ts`, `src/lib/marking/versioning-capture.ts`.
- **Deps:** P0.4, P3.1, P1.4.
- **Accept:** migration idempotent on fresh DB (down-migration = drop columns); a V2 result
  persists with non-null `overall_confidence`, `needs_human_review`, `pack_version`;
  `marking_errors` contains only taxonomy values; `loadPackByFullId` round-trips the exact
  pack; DB change additive / back-compatible; the existing GCSE FORCES-null test stays
  **byte-unchanged** (still asserts `ai_confidence===null` for the GCSE/legacy path); a
  forward/backward-compat test proves the facade yields byte-identical GCSE output whether
  or not the V2 columns exist yet; existing persistence tests stay green. **Migration lane:**
  all schema.prisma edits + migrations (P5.1 → P5.2 → P6.2 → P9.1) form a single ordered,
  additive/idempotent lane that cannot run in parallel even though their feature work can. [adjusted per review]
- **LIVE? Partial** — touches shared `persistence.ts`/`versioning-capture.ts`. **Guard:**
  additive-only; the GCSE path keeps `ai_confidence=NULL`; the "FORCES null" test is **NOT**
  relaxed — measured confidence is allowed only via the distinct IELTS path (P5.2/P7.4) so
  GCSE `applyAiResult` cannot emit non-null; smart-ip persistence tests
  unchanged-and-green. [adjusted per review]

### P5.2 Self-consistency persistence (doc 15 step 5) [after P5.1]
- **Build:** write MEASURED `consistencyConfidence` into `ai_confidence` on the
  self-consistent path; store per-run bands + agreement record in `ai_result` jsonb (or
  new column); `deriveUncertaintyFlags` emits `SELF_CONSISTENCY_RANGE`; set
  `teacher_review_required` when `needsHumanReview`.
- **Files:** `src/lib/marking/persistence.ts`,
  `supabase/migrations/<new>_self_consistency.sql`.
- **Deps:** P5.1, P4.5.
- **Accept:** `ai_confidence` reflects measured confidence on the self-consistent path
  **only via the distinct IELTS code path** (`src/lib/marking/ielts/persistence.ts`, P7.4);
  range flag persisted; `needsHumanReview`→`teacher_review_required`; the GCSE "FORCES null"
  test is NOT relaxed — a SEPARATE new test allows a measured value on the IELTS path, and
  GCSE `applyAiResult` literally cannot emit non-null `ai_confidence`. [adjusted per review]
- **LIVE? Partial.** **Guard:** as P5.1.

### P5.3 GCSE migration shim + legacy reconciliation (doc 11 step 7 + doc 13 step 7)
- **Build:** document the route for GCSE schemes → `gcse_ao_marks` packs WITHOUT
  behaviour change; mark legacy `MarkingResult` `@deprecated`; add `toResultV2(legacy)`
  adapter (aoScores→criteria(marks), predictedGrade→overall(grade),
  boundary provenance→`validationFlags.gradeIndicativeOnly`).
- **Files:** `src/lib/marking/mark-schemes/index.ts`,
  `src/lib/marking/mark-schemes/types.ts`, `src/lib/marking/feedback-generator.ts`.
- **Deps:** P0.4.
- **Accept:** 20 GCSE schemes untouched and still resolve via `getMarkScheme`;
  `mark-schemes-coverage.test.ts` green; `toResultV2` round-trips a representative GCSE
  result into schemaVersion:2; no behaviour change to the live GCSE path.
- **LIVE? Partial (hygiene).** **Guard:** no behaviour change; existing GCSE tests green.

### P5.4 Retention policy + deletion/purge routine (DP-5) [adjusted per review]
- **Build:** Implement the typed `RETENTION_POLICY` (defined in P0.6) and a deletion/purge
  routine that, for a given submission/user, purges: `marking_submissions` row(s) + essay
  text, ai-audit-log entries, feedback rows, `ielts_attempts`,
  `learner_profiles`/`learner_review_states`, `marker_calibration`, and the analytics
  projection — and cascades into `calibration_set` (or retains only irreversibly-anonymised,
  non-re-identifiable essays). This is the implementer for R-PERSIST's 'deletion routes
  verified' and a UK-GDPR / Children's-Code obligation.
- **Files:** `src/lib/marking/data-protection/retention-policy.ts`,
  `src/lib/marking/data-protection/delete-submission.ts`,
  `src/__tests__/marking/deletion-purge.test.ts`.
- **Deps:** P0.6, P5.1, P5.2.
- **Accept:** a deletion test proves, for a CHILD account, that
  `marking_submissions.essay_text` + AI audit rows + feedback rows + `ielts_attempts` +
  profiles/review-states + the analytics projection are actually purged (verified before
  child essays are persisted at scale); retention/DPIA copy states plainly that
  provider-side retention is contractual-and-unconfirmed (not 'deleted immediately') until
  `writtenZdrConfirmation` flips.
- **LIVE? Partial** (deletion routes on the spine). **Guard:** verify before, not after,
  child essays are persisted at scale.

**Phase 5 Definition of Done:** the IELTS structured result + provenance + measured
confidence persist on the spine, re-resolvable to the exact immutable pack; GCSE path
untouched; legacy adapter exists; all existing persistence/coverage tests green.

---

## PHASE 6 — Calibration harness + release gate (THE OTHER HALF OF G-LIVE)

**Goal:** the human-marked calibration set, scheduled AI-vs-human run, metrics, drift
alerting, dashboard, and the fail-closed release gate. Built criterion-agnostically
against the GCSE pipeline first (per the code map: no IELTS marker existed when the
harness design was written), then the IELTS marker entrypoint is swapped in at the final
baseline step. **No marking ships at scale without a green calibration run.**

### P6.1 Per-criterion + half-band metric layer (doc 17 step 1)
- **Build:** `computeCalibrationMetrics(pairs)` → overall exact/within-half/mean-abs +
  per-criterion `{r, exactRate, withinHalfRate, mae}`, reusing `pearson/QWK/exactAgreement`
  from `evals/stats.ts`; the only new primitive is `withinHalfBand(|a-b|<=0.5)` sharing
  the half-band rounder with P0.3.
- **Files:** `src/lib/marking/calibration/metrics.ts`, `evals/stats.ts` (reuse).
- **Deps:** P0.3, `evals/stats.ts` (exists).
- **Accept:** perfect agreement → all rates 1, every r=1; fixture vectors match to 3dp;
  off-by-0.5 within-half not exact; empty → n:0/null r; asserts stats imported not copied.
- **LIVE?** No.

### P6.2 Calibration set store + runner + baseline compare (doc 17 steps 2–4)
- **Build:** migration for `calibration_set` (anonymised, `human_criteria` jsonb
  criterion-agnostic, marker_count/reconciled/source/active) + `calibration_runs`
  (unique partial index = one baseline per set); `loadCalibrationSet` + coverage;
  `runCalibration(...)` over the SINGLE shared real-marker entrypoint (bounded
  concurrency, AI-vs-human pairs); `persistRun`, `getBaseline`, `compareToBaseline`
  (absolute floor + no-regression), `promoteBaseline`.
- **Files:** `supabase/migrations/<date>_calibration.sql`,
  `src/lib/marking/calibration/{set,run,types,persist,baseline}.ts`.
- **Deps:** P6.1, P5.1 (provenance tables); shared marker entrypoint (GCSE exists; IELTS
  from P4.5).
- **Accept:** migration idempotent; unique-baseline index present; mocked 6-essay set →
  metrics match hand-computed; smoke asserts runner and live route resolve the SAME
  marker fn; `compareToBaseline` emits a reason per floor/regression breach; promote
  idempotent + single-baseline-per-set; first-run empty-baseline handled.
- **LIVE?** No. **Guard:** R-Harness-divergence — single shared marker entrypoint +
  smoke test that runner and route call the same fn.

### P6.3 Scheduled run + drift alerting (doc 17 steps 5–6)
- **Build:** `CRON_SECRET`-guarded cron route + script + `calibration:run` +
  `vercel.json` cron entry; `alertDrift` digest (regressed/below-floor metrics + version
  ids + coverage warning when n<50 or any populated band <5) via existing `sendEmail`.
- **Files:** `src/app/api/cron/calibration-run/route.ts`, `scripts/run-calibration.ts`,
  `package.json`, `vercel.json`, `src/lib/marking/calibration/alert.ts`.
- **Deps:** P6.2.
- **Accept:** 401 without bearer; mocked green run → 200 no alert; mocked regressed run →
  persists `regressed=true` + alerts; cron entry points at the route; no alert on a clean
  well-covered run.
- **LIVE?** No (ops surface).

### P6.4 Admin dashboard + release gate (doc 17 steps 7–8)
- **Build:** admin-gated dashboard (within-half/exact/per-criterion r/mean-abs trends +
  baseline overlay + per-band coverage + promote action; NO raw essays/identifiers);
  `assertCalibrationGreen` fail-closed (no run / regressed / below_floor → throw) wired
  into version activation (`prompt_versions.active`, `model_versions.is_active`, pack
  publish) + a CI step.
- **Files:** `src/app/admin/marking/calibration/page.tsx`,
  `src/app/api/admin/marking/calibration/route.ts`,
  `src/lib/marking/calibration/gate.ts`, `.github/workflows` (or CI config).
- **Deps:** P6.2, P6.3.
- **Accept:** dashboard renders with seeded runs; read API denies non-admins; no essay
  text/identifiers shown; activating a triple with no/regressed/below-floor run is
  rejected; green allowed; CI fails on a deliberately-regressed fixture.
- **LIVE? Partial** — gates version activation. **Guard:** privacy — anonymised/consented
  ingestion only; dashboard surfaces no raw essays.

**Phase 6 Definition of Done:** the calibration harness computes per-criterion + half-band
metrics over the shared real-marker entrypoint, persists runs with one immutable baseline
per set, alerts on drift, surfaces an admin dashboard, and the fail-closed release gate is
wired into version activation + CI. **This is the other half of Gate G-LIVE.**

> ### GATE G-LIVE (architecture §8 / IELTS §9) — HARD STOP
> No marking may be exposed to learners until ALL of the following hold (boxes marked
> [adjusted per review] were added/strengthened by the Phase-0 adversarial review):
> 1. **Validator green** — verbatim-evidence backstop passes; review gate routes correctly
>    (Phase 4 / P4.4).
> 2. **Calibration infrastructure (necessary, NOT sufficient)** — harness + fail-closed
>    release gate `assertCalibrationGreen` exist and are green on GCSE (Phase 6). Phase-6
>    completion ALONE does NOT satisfy the IELTS half of this gate. [adjusted per review]
> 3. **IELTS calibration baseline (the IELTS half — only provable at P9.4)** — an
>    IELTS-marker green baseline over a populated set (≥50 essays, bands 4–9, ≥5 per
>    populated band) with within-half-band ≥0.80 and per-criterion r ≥0.60, AND the IELTS
>    set's `human_criteria` carries TR/CC/LR/GRA with per-criterion metrics computed and
>    meeting floors (not just overall band) (P9.4). [adjusted per review]
> 4. **Exemplar bank non-empty (HARD, machine-checked)** — `assertCalibrationGreen` / P9.4
>    promotion REFUSES to go green if the active IELTS pack resolves zero exemplars for the
>    populated bands (4–9); tied into the knowledge-packs-coverage test AND the gate so 'go
>    live with no anchors' is structurally impossible. [adjusted per review]
> 5. **Gold-mark quality** — the pre-exposure baseline is computed over reconciled,
>    `marker_count`≥2 gold (or a documented majority threshold); promotion blocked if the
>    reconciled fraction is below the stated minimum; OQ-7 resolved before the set is
>    populated. [adjusted per review]
> 6. **Statistical-power sign-off** — the FIRST baseline promotion records the small-n
>    caveat with human sign-off; confidence intervals / n surfaced per metric (not just
>    point estimates); OQ-5 resolved BEFORE go-live. [adjusted per review]
> 7. **Fallback-rate alarm** — gates go-live (not a trailing step): if
>    `consistencyChecksPassed=false` rate exceeds threshold for the active triple, treat as
>    a regression. [adjusted per review]
> 8. **DP-4 gate chain** — auth → consent → AI-opt-out → rate limit → contentSafetyCheck →
>    audit all pass on the IELTS entrypoint (P7.4).
> 9. **DP-1 minimisation** — outbound marker payload carries only essay + task prompt (P0.5).
> 10. **DPIA + legal-page reconciliation (P7.5) complete BEFORE any learner exposure** — the
>    DPIA no longer asserts ZDR as active; `/legal/privacy` + `/data-processing` render from
>    the typed register; all child/parent-facing privacy copy matches `describeDataPosture()`
>    tiers. P7.5 must land before P7.4's flag can be flipped on. [adjusted per review]
> 11. **Children's-essay processor posture** — written no-training + ZDR confirmation from
>    Anthropic is a HARD precondition for sending children's essays at scale (the
>    essay-verbatim carve-out means embedded child PII/special-category data reaches the
>    processor unredacted); until then IELTS child marking is gated/limited, not GA. The DPIA
>    R3 safeguarding free-text disclosure detector runs on the IELTS path before the marker
>    call (or its absence is documented + risk-accepted). [adjusted per review]
> 12. **Deferred-to-UI controls present** — the §6 borderline-range display and the §9 'AI
>    practice feedback / not an official board score' disclaimer are rendered on the learner
>    UI (engine persists the range at P5.2). [adjusted per review]
> The IELTS route (Phase 7) is built but kept OFF / internal-only until ALL the above pass.
> P9.4 — not Phase 6 — flips the IELTS half of G-LIVE to satisfied.

---

## PHASE 7 — Feedback Generator + IELTS route + DP wiring (LIVE — behind G-LIVE)

**Goal:** the separate adult-tone feedback call (consistency-by-construction re-earned in
code), the IELTS route, and the DP guards wired onto the live entrypoint. The route is
deployed OFF/internal until G-LIVE passes (Phase 6 + P9.4).

### P7.1 Feedback types + tool schema + consistency validator + deterministic fallback (doc 16 steps 1–3)
- **Build:** `submit_ielts_feedback` tool schema with NO band/overall/error-enum fields
  (model cannot restate a score); rewrites reference an `error_index` into validated
  `errors[]`; `validateFeedbackAgainstMark` (re-runs verbatim check, rejects any
  contradiction); deterministic fallback computed purely from the mark.
- **Files:** `src/lib/marking/ielts/feedback-types.ts`, `feedback-tool-schema.ts`,
  `feedback-validator.ts`, `feedback-fallback.ts`.
- **Deps:** P4.4 (validated mark type).
- **Accept:** schema has no band/overall/error-type-enum field; wrong/missing criterion,
  non-verbatim rewrite original, out-of-range error_index, smuggled "Band 7", ≠1 next
  action all rejected; clean passes; fallback passes the validator by construction across
  a matrix of marks.
- **LIVE?** No.

### P7.2 Feedback prompt + model call (forced tool, retry, fallback, age-gate) (doc 16 steps 4–5 + doc 20 step 6)
- **Build:** §7-verbatim system prompt (cached) + user message from the VALIDATED
  assessment only; `allowRewrites` defaults false, enabled only for adult IELTS;
  younger-tone toggle from a server-authoritative age signal; `generateIeltsFeedback`
  forces `tool_choice`, parses via Zod, validates, one bounded retry then deterministic
  fallback; outbound minimisation asserted.
- **Files:** `src/lib/marking/ielts/feedback-prompt.ts`,
  `src/lib/marking/ielts/feedback-generator.ts` (or `feedback.ts`).
- **Deps:** P7.1, P0.1, P0.5.
- **Accept:** snapshot proves toggles alter the prompt deterministically; outbound test
  asserts no name/email/school in payload; mocked Anthropic covers clean / retry-then-pass
  / retry-then-fallback; feedback references only criteria/bands in the validated
  assessment (consistency guard); exactly one next action.
- **LIVE?** No (not on the route until P7.4). **Guard:** rewrites adults-only (safeguarding);
  **age-gate fails SAFE** (default minor / rewrites-off unless adulthood is positively
  verified — a missing/ambiguous age signal suppresses rewrites; test required); **OQ-6 must
  be RESOLVED in the plan** (not left open): either record that rewrites are deferred for
  minors with the safeguarding rationale AND specify what younger (foregrounded school-age
  EAL §3) learners get instead (a minor-safe 'show a better version' path, since §3 still
  wants it), or design a safeguarded minor-safe rewrite — do not silently delete a §3 core
  feature for the foregrounded cohort; consistency stack (schema-omission + validator +
  fallback) is one inseparable unit. [adjusted per review]

### P7.3 Micro-lesson catalogue (doc 16 step 7) [PARALLEL with P7.2]
- **Build:** static error-taxonomy-prefix → `MicroLessonRef` map; code attaches lessons
  (model never emits URLs).
- **Files:** `src/lib/marking/ielts/micro-lessons.ts`.
- **Deps:** P0.2.
- **Accept:** every taxonomy type resolves to a lesson or `undefined` (never a fabricated
  link).
- **LIVE?** No.

### P7.4 IELTS route + DP gate chain + persistence + audit (doc 20 step 7 + doc 19 step 5 + doc 16 steps 6,8)
- **Build:** new `POST /api/ielts/writing-task2/mark` reusing the EXACT gating chain from
  `writing-feedback/route.ts` (auth → Premium → `checkMinorAIConsent` →
  `isAiOptedOutServer` → rateLimit → `contentSafetyCheck` → mark.ts → feedback →
  `filterAIResponse` → `logAiDecision('ielts/writing-task2')`); persist
  `IeltsAssessmentResult` into `ai_result` with real `ai_confidence`, status
  `teacher_review_required` when `needsHumanReview` else `ai_marked`; capture
  `pack_version`; send essay verbatim, NO surrounding identifiers; persist feedback linked
  to the same `pack_version` + mark. **Deployed OFF / internal-only until G-LIVE.**
- **Files:** `src/app/api/ielts/writing-task2/mark/route.ts`,
  `src/lib/marking/ielts/persistence.ts`, `src/lib/marking/persistence.ts`,
  `src/lib/marking/versioning-capture.ts`, `src/lib/ai-audit-log.ts`.
- **Deps:** P5.2, P7.2, P7.3, P0.5, P0.6, P6.4 (gate must exist to enforce G-LIVE).
- **Accept:** gating runs in order and blocks an opted-out minor BEFORE any model call;
  clean mark persists `ai_confidence` + status `ai_marked`; flagged mark persists
  `teacher_review_required`; `pack_version` captured; data-minimisation test asserts the
  outbound body carries no name/email/school/userId (only question + essay); feedback
  references the exact mark it was generated from. **Child-cohort additions:** the DPIA R3
  safeguarding free-text disclosure detector (keyword + Haiku classifier, pre-submission,
  routes to human + DSL) runs on the IELTS path BEFORE the marker call (not just
  `contentSafetyCheck`), or its absence is documented + risk-accepted; the DPIA R7 child
  protections (persistent 'AI tutor' label, no first-person human claims, cooling-off
  banner) are present on the IELTS marking UI surface, or it is documented why R7 does not
  apply; written no-training + ZDR confirmation is a HARD precondition for sending children's
  essays at scale (else child marking is gated/limited, not GA); the DPIA names the
  essay-verbatim carve-out as a residual risk for the child cohort. [adjusted per review]
- **LIVE? YES (but flagged OFF until G-LIVE).** **Guard:** the route stays internal-only
  until P9.4 promotes the baseline and the gate is green; DP-4/DP-1 wired and tested.

### P7.5 DPIA + register + public legal pages reconciliation (doc 19 steps 6–7)
- **Build:** rewrite DPIA to "ZDR contractually available; written confirmation PENDING;
  residual contingent"; confirm subprocessors stay unconfirmed/pending; render
  `/data-processing` + `/legal/privacy` from the typed register + `MARKING_PRIVACY_CLAIMS`.
- **Files:** `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md`,
  `src/config/subprocessors.ts`,
  `business-docs/compliance/eu-ai-act/17-anthropic-dpa-zdr-pack.md`,
  `src/app/data-processing/page.tsx`, `src/app/legal/privacy/page.tsx`.
- **Deps:** P0.6.
- **Accept:** DPIA no longer asserts ZDR as an active control; register matches
  `ANTHROPIC_DATA_POLICY` flags; public lists generated from the typed register; no
  hardcoded divergent lists; claims match `describeDataPosture()` tiers.
- **LIVE? (compliance docs + public pages).** **Guard:** DP-2/DP-6 — must land BEFORE the
  IELTS UI ships any privacy copy.

**Phase 7 Definition of Done:** the feedback generator produces consistency-guaranteed
adult-tone feedback (or a deterministic fallback), the IELTS route exists end-to-end with
the full DP gate chain and outbound minimisation, persists the structured result +
feedback + provenance, and the DPIA/register/legal pages are honest — but marks are NOT
exposed to learners until G-LIVE.

---

## PHASE 8 — Speaking + Hermes interface seams (interfaces only, @deferred)

**Goal:** define the future-proofing seams now so the IELTS MVP is built behind the right
boundaries; no Speaking/Hermes behaviour ships (doc 21). Can run in parallel with Phases
4–7 once P4.1/P0.4 land, since it is type-only.

### P8.1 Engine text-input seam + open criterion array (doc 21 steps 1–2)
- **Build:** `Modality`, `MarkerTextInput`, `TextSource`/`AsrProvenance` (@deferred); make
  the IELTS marker accept `MarkerTextInput` (modality:'writing'); add `modality`+`packId`
  to the engine result; type `criteria` as open `CriterionMark[]` but enforce exactly-4
  via the IELTS Writing **pack Zod schema**, not the shared type.
- **Files:** `src/lib/marking/engine/marker-input.ts`,
  `src/lib/marking/engine/result.ts`.
- **Deps:** P4.1 (marker shape), P0.4.
- **Accept:** writing marker param is `MarkerTextInput`; writing result validates to
  exactly 4 named criteria via the pack schema; type admits a larger speaking set; grep
  shows no Speaking impl on the live path.
- **LIVE?** No.

### P8.2 Speaking contracts + Learner-model read port + boundary lint rule (doc 21 steps 3–6)
- **Build:** `Transcript`/`DeliveryAssessment`/`SpeakingMarkRequest`/`AudioRef` (@deferred,
  throw DEFERRED); `LearnerModel`/`LearnerModelReadPort`/`ValidatedMarkRecord`; the
  one-way lint rule (marking cannot import analytics/hermes; hermes may import only
  `analytics/learner-model/contract`); audio privacy note (biometric-adjacent, private
  bucket, transient retention).
- **Files:** `src/lib/marking/speaking/{contracts.ts,README.md}`,
  `src/lib/analytics/learner-model/{contract.ts,ingest.ts}`,
  `.eslintrc`/`eslint.config` (or dependency-cruiser), `business-docs/compliance/` (note).
- **Deps:** P8.1.
- **Accept:** modules compile exporting only types/@deferred stubs; lint FAILS on a
  deliberately-added forbidden import fixture then passes when removed; CI runs the rule;
  no live route imports `marking/speaking/*`.
- **LIVE?** No. **Guard:** R4 — the lint rule is the load-bearing mitigation; ship it with
  the contract.

**Phase 8 Definition of Done:** the modality-agnostic input seam, open criterion array,
@deferred Speaking/Hermes contracts, and the enforced one-way module boundary all exist;
the IELTS MVP is built behind them; no Speaking/Hermes behaviour ships.

---

## PHASE 9 — Learner model + analytics, plug-in proof, first real baseline, GO-LIVE

**Goal:** the criterion-based analytics layer fed by validated marks, prove the area
plug-in seam, populate the calibration set to target, promote the first baseline, and
(only then) expose IELTS marking to learners.

### P9.1 Analytics early wins + store + write-path (doc 18 steps 1–8)
- **Build:** (already have the shared taxonomy from P0.2). Criterion-generic readiness
  engine; AI-vs-human per-criterion agreement/drift; analytics store migration
  (`ielts_attempts` tagged, `learner_profiles`, `learner_review_states`,
  `marker_calibration`, de-identified `ielts_cohort_error_counts` view; owner-RLS +
  deny-by-default calibration); service-role persistence adapter; profile builder +
  generalised spaced-repetition + taxonomy-driven NBA/focusOn; nightly incremental
  aggregation cron; wire the write path (validated mark → one tagged `ielts_attempts`
  row; moderation → calibration pairs). All through the analytics de-identification
  projection (`analytics-projection.ts`, built in P0.7 — NOT P6.3) and existing consent
  gates. Calibration ingestion of CHILDREN's essays requires, BEFORE any child essay enters
  `calibration_set`: (1) the lawful basis + WHO consents for the SECONDARY (calibration/QA)
  purpose specified, parent/guardian consent for under-18s; (2) erasure cascades into
  `calibration_set` (P5.4) or only irreversibly-anonymised essays retained; (3) children's
  calibration/learner data EXCLUDED from the Hermes/GEO marketing-statistic pipeline unless
  a separate documented basis exists. [adjusted per review]
- **Files:** `src/lib/analytics/readiness.ts`, `src/lib/marker-qa/ai-agreement.ts`,
  `supabase/migrations/2026XXXX_ielts_analytics.sql`, `prisma/schema.prisma`,
  `src/lib/marking/learner-store.ts`, `src/lib/marking/learner-profile.ts`,
  `src/lib/spaced-repetition.ts`, `src/lib/marking/next-best-action.ts`,
  `src/app/api/cron/learner-model-aggregate/route.ts`,
  `src/lib/marking/data-protection/analytics-projection.ts`.
- **Deps:** P0.2, P5.1, P4.4 (validated marks exist), P0.7 (de-id projection — built
  earlier, NOT P6.3). [adjusted per review]
- **Accept:** taxonomy guard green; readiness handles improving/flat/at-target/<3-points;
  per-criterion agreement/drift correct; migration idempotent; cross-user read denied;
  calibration unreadable by learners; cohort view exposes only pack_version/error_type/
  occurrences; nightly cron idempotent + 401 unauthorised; marking a fixture → one
  complete attempt row; outbound + stored rows carry no PII; the analytics write path is
  gated to **IELTS-typed validated marks only** and is provably never invoked by
  `/api/marking/run` or `/api/mark` (GCSE routes); `prisma/schema.prisma` edits are additive
  and do not break the documented 'tables never touched via Prisma' rule. [adjusted per review]
- **LIVE? Partial** — write path appends rows. **Guard:** consent gates wired into the new
  path; min-cohort suppression; small-N confidence gating; nightly incremental (not
  per-request).

### P9.2 Analytics read APIs + dashboards + parent variant (doc 18 steps 9–10) [after P9.1]
- **Build:** learner self endpoint (RLS+auth+consent+focusOn+readiness); de-identified
  teacher cohort (min-cohort); AI-vs-human tab on admin marker-qa; IELTS-criterion
  parent-report variant under existing eligibility/minimisation gates; readiness
  prediction-vs-outcome calibration loop.
- **Files:** `src/app/api/learner-model/me/route.ts`,
  `src/app/api/school/analytics/ielts-cohort/route.ts`,
  `src/app/api/admin/marker-qa/route.ts`, `src/app/admin/marker-qa/page.tsx`,
  `src/lib/parent-reports/generate.ts`, `src/lib/marker-qa/readiness-calibration.ts`.
- **Deps:** P9.1.
- **Accept:** learner endpoint caller-only; cohort returns no user_id + suppresses small
  cohorts; QA tab rejects non-admins; parent report renders criterion mastery + one focus
  + readiness, passes existing eligibility/minimisation tests, no essay body/raw quotes.
- **LIVE? Partial** (read surfaces). **Guard:** as P9.1.

### P9.3 Register the IELTS area — prove the plug-in seam (doc 10 step 9)
- **Build:** flip the `ielts` placeholder to active pointing at the IELTS pack
  resolverKey; the IELTS route calls `markSubmission` with `areaHint:'ielts'`. NO
  engine/router core edits.
- **Files:** `src/lib/marking/engine/areas.ts`.
- **Deps:** P2.3 (engine cutover), P3.1 (IELTS pack), P7.4 (IELTS route).
- **Accept:** after the pack ships, an explicit "IELTS Writing Task 2" request routes
  `basis:'explicit' confidence:1` with NO router/engine core change. (The 'fails closed
  before the pack ships' behaviour is asserted at P1.4, where the `ielts` branch genuinely
  has no pack — it is untestable here since P9.3 depends on P3.1, the authored pack.) [adjusted per review]
- **LIVE? Partial** (still behind G-LIVE).

### P9.4 First real baseline + coverage to target — PRE-SCALE GATE (doc 17 step 9 + doc 12 step 7 + doc 20 step 8)
- **Build:** author/import the graded exemplars into the pack (filling the P3.1 gap);
  populate `calibration_set` (≥50 IELTS essays, bands 4–9, ≥5 per populated band) via the
  anonymiser/consent gates; swap the IELTS marker entrypoint into the runner; run
  `calibration:run`; review the dashboard; `promoteBaseline` on the first acceptable run;
  wire the anchor-quality calibration hook (estimate vs final band).
- **Files:** `calibration_set` (data), `src/lib/marking/calibration/run.ts` (IELTS
  entrypoint swap), pack `exemplars/*`, `evals/ielts-writing-task2.eval.ts`.
- **Deps:** P6.4, P4.5, P3.4, P9.3, expert-marked essays.
- **Accept:** an `is_baseline=true` run exists for the active set with n≥50, coverage met,
  all absolute floors passed (documented threshold, e.g. ≥80% within-half-band);
  `assertCalibrationGreen` is live and green for the current prod triple; anchor-quality
  agreement ≥~85% within ±1 band.
- **LIVE? This is the gate.** **Guard:** GATE G-LIVE — only after this passes is marking
  cleared to scale.

### P9.5 GO-LIVE — expose IELTS marking to learners
- **Build:** flip the IELTS route (P7.4) ON now that the validator (Phase 4) AND a green
  calibration baseline + gate (P9.4) exist and the DP chain is wired.
- **Files:** route/flag config.
- **Deps:** P9.4, P7.5 (honest privacy copy), P8.2 (boundary lint).
- **Accept:** end-to-end: a learner submits → routed (explicit) → IELTS pack →
  retrieval → forced-tool marker → validator (real confidence, evidence verified,
  overall recomputed) → self-consistency if borderline → feedback (adult, consistent) →
  persisted with provenance → analytics row appended; low-confidence/flagged marks route
  to human review; privacy copy matches `describeDataPosture()`.
- **LIVE? YES — full exposure.** **Guard:** Gate G-LIVE satisfied; monitor calibration
  drift, fallback-rate, review volume, runs/day cost.

**Phase 9 Definition of Done:** the criterion-based learner model + analytics are fed by
validated marks behind consent/min-cohort gates; the IELTS area plugs in with no
engine/router core change; a green immutable baseline over a populated set exists with the
fail-closed gate live; IELTS marking is exposed to learners through the full grounded
pipeline. **Global definition of done (§A) satisfied.**

---

## C. Dependency graph / critical path

Notation: `→` = must-precede. `[P]` = parallelisable with its siblings.

```
PHASE 0 (foundations, all largely parallel)
  P0.1 model-strings ─┐
  P0.2 taxonomy [P] ──┼─→ P0.4 result schema ─┐
  P0.3 overall [P] ───┘                        │
  P0.5 outbound guard [P]                      │
  P0.6 posture object [P]                      │
                                               ▼
PHASE 1 (engine core)
  P0.4 → P1.1 → P1.2 ─┐
              P1.3 [P]─┴→ P1.4 → P1.5 → (P0.1)→ P1.6
PHASE 2 (LIVE cutover — CRITICAL PATH)
  P1.6 → P2.1 → P2.2 → P2.3*(LIVE, needs R1 id-audit)
PHASE 3 (IELTS pack + retrieval — parallel to Phase 2 after P1.4)
  P1.4 → P3.1 ─┬→ P3.2 ─┐
        P3.3[P]┴────────┴→ P3.4
PHASE 4 (marker + validator — half of G-LIVE)
  P0.2,P0.4 → P4.1 → P4.2(needs P3.4,P0.5) → ...
  P0.3 → P4.3 → P4.4 → P4.5(needs P0.1)
PHASE 5 (persistence)        PHASE 6 (calibration — other half of G-LIVE)
  P0.4,P3.1 → P5.1 → P5.2      P0.3 → P6.1 → P6.2(needs P5.1) → P6.3 → P6.4
  P0.4 → P5.3 [P]                       (criterion-agnostic vs GCSE first)
PHASE 7 (feedback + route + DP)
  P4.4 → P7.1 → P7.2(needs P0.1,P0.5) ─┐  P7.3[P]
  P5.2,P7.2,P7.3,P6.4 → P7.4*(LIVE, flagged OFF) ; P0.6 → P7.5
PHASE 8 (seams — parallel after P4.1/P0.4)
  P4.1,P0.4 → P8.1 → P8.2
PHASE 9 (analytics + plug-in + baseline + GO-LIVE)
  P0.2,P5.1,P4.4,P6.3 → P9.1 → P9.2
  P2.3,P3.1,P7.4 → P9.3
  P6.4,P4.5,P3.4,P9.3 → P9.4(GATE) → P9.5(GO-LIVE)
```

**Critical path to GO-LIVE:**
`P0.2/P0.3 → P0.4 → P4.1 → P4.2/P4.3 → P4.4 → P4.5 → P5.2 → P6.1 → P6.2 → P6.4 →
P7.1 → P7.2 → P7.4 → P9.4 (flips the IELTS half of G-LIVE) → P9.5`. (P5.1 branches off
P3.1/P0.4 in parallel with Phase 4 — it has no Phase-4 dependency — and is NOT chained
after P4.5; only P5.2 needs P4.5.) [adjusted per review]

**Parallelisable tracks (run concurrently to shorten wall-clock):**
- Track A (engine cutover): Phase 1 → Phase 2. Independent of the IELTS marker once P1.4
  lands. Delivers value to GCSE early but is NOT on the GO-LIVE critical path for IELTS.
- Track B (IELTS vertical): Phase 3 → Phase 4 → Phase 5 → Phase 7. The critical path. NOTE:
  P5.1 needs only P0.4+P3.1+P1.4 (parallelisable with Phase 4); only P5.2 needs P4.5. [adjusted per review]
- Track C (calibration): P6.1 parallel from P0.3; P6.2+ requires P5.1 (provenance tables)
  from Track B, so Track C joins Track B at P5.1, not only at P9.4 (then build against GCSE
  first → swap IELTS marker at P9.4). [adjusted per review]
- Track D (seams): Phase 8 — type-only, parallel after P4.1/P0.4.
- Track E (analytics): Phase 9.1/9.2 — early wins (P9.1 readiness/agreement) parallel;
  store/write-path waits on the marker (P4.4). NOTE: all schema.prisma edits + migrations
  (P5.1 → P5.2 → P6.2 → P9.1) form a single ordered migration lane that cannot run in
  parallel even though their feature work can — 'parallel' is scoped to logic, not the
  schema. [adjusted per review]

**Sequential hard edges (cannot be parallelised):**
P2.3 (GCSE cutover) after the id-audit; P4.4 after P4.3 after P4.1; P9.4 after both
halves of G-LIVE; P9.5 after P9.4.

---

## D. Risk register

| ID | Risk | Phase | Mitigation |
|----|------|-------|------------|
| R-MODEL | Spec model strings (`claude-sonnet-4-6`/`opus-4-8` + effort tiers) are NOT callable; SDK 0.90.0 has only `claude-sonnet-4-20250514`, no effort param. | P0.1 | Phase 0 BLOCKER: confirm callable id; `MARKING_MODELS` constants defaulting to `ANTHROPIC_MODEL`; escalation = same-model re-run; never hardcode spec ids/effort. **OQ-1.** |
| R-GLIVE | Marking exposed before validator + calibration exist. | All | Gate G-LIVE hard stop; IELTS route built but flagged OFF until P9.4. |
| R1 | Fail-closed `NO_PACK` replaces silent null → stale/wrong ids become hard 4xx on the live GCSE path. | P2.3 | Throw only at the engine boundary, map to 422 with the offending key; audit all caller ids before cutover; flag-revert. |
| R2 | Router mis-classification marks against the wrong pack. | P1.6 | Heuristics-first (no model cost common path); explicit-metadata short-circuit; conservative thresholds tuned on the calibration set; `allowClarify:false`→error, never silent guess. |
| R3 | Confirm-loop UX leak — a route treating 409 as error breaks marking. | P2.2 | Contract test; `caps.allowClarify` opt-out; route-direct default whenever metadata explicit. |
| R-EVID | Evidence normalisation too loose (fabrications pass) or too strict (false rerun). | P4.3 | Whitespace+case+smart-punctuation only, no full stripping; marker prompt forbids ellipsis splices; calibrate vs the set; verify against the EXACT essay string sent (R8). |
| R-RERUN | Rerun cost/latency (second model call). | P4.4/P4.5 | Hard single shared rerun budget; never loops; `Promise.allSettled` proceed-on-≥2; high-stakes-only self-consistency. |
| R-CONF | Reversing `ai_confidence=NULL` for IELTS could be read as "faking confidence". | P4.4/P5.1/P5.2 | Confidence is a defined function of verifiable signals (criterion×evidence×consistency); written only on the IELTS path; GCSE stays NULL; "FORCES null" test updated to allow measured-not-fabricated; UI labels "AI confidence (auto-checks)". |
| R-COPY | Reproducing boards' copyrighted secure descriptors/exemplars = legal exposure. | P3.1, P9.4 | Own-paraphrase descriptors only; own expert-marked exemplars only; manifest `sourcing` block + publish gate + machine-checked `containsBoardSecureMaterial===false`. |
| R-EXEMPLAR | Empty/weak exemplar bank — the single biggest accuracy lever — anchors the marker wrong or it free-floats. | P3.1, P9.4 | Ship the structure, flag the gap; author graded exemplars + record a credentialed expert marker BEFORE calibration sign-off; anchor-quality hook. |
| R-CACHE | Wrong cache-boundary (exemplars before the breakpoint) invalidates the stable rubric prefix every call. | P3.4/P4.2 | Retrieval returns blocks separately; assembler test asserts the cached prefix excludes exemplars. |
| R-HARNESS | Calibration harness diverges from the prod path. | P6.2 | Single shared real-marker entrypoint + smoke test that runner and live route call the same fn. |
| R-BASELINE | Baseline ratchet erosion / set too small/unrepresentative makes metrics lie. | P6, P9.4 | Coverage warned every run; absolute floor AND no-regression; re-baselining is a logged human act that must still clear the floor; reconciled `marker_count≥2`. |
| R-DP-DRIFT | UI claims "we don't train / instantly deleted" while pending flags are false. | P0.6, P7.5 | Posture object lands BEFORE any IELTS UI; claims render from `MARKING_PRIVACY_CLAIMS`; DPIA reconciled. |
| R-DP-LEAK | Identifier leaks as the prompt grows (Router/retrieval/exemplars/flags); analytics evidence quotes leak raw essay. | P4.2, P6.3, P9.1 | `assertMinimisedPayload` on every outbound body; analytics de-id projection strips quotes; adversarial tests. |
| R-PERSIST | Two persistence paths (`/api/mark` no-persist vs `/api/marking/run` persists); IELTS MVP must land on the deletion-covered spine. | P5, P7.4 | IELTS persists on the `marking_submissions` spine; deletion routes verified against IELTS rows (DP-5). |
| R-FEEDBACK | Separate feedback call breaks consistency-by-construction; rewrite hallucination shown to learners. | P7.1/P7.2 | Inseparable stack: no-band-fields schema + consistency validator + deterministic fallback; rewrites must be verbatim error spans; adults-only; fallback-rate monitored. |
| R-SCOPE | Seam divergence across docs breaks `markSubmission`; premature abstraction slows the MVP. | All | Seam interfaces in `engine/types.ts` as single source; sibling docs import them; Speaking/Hermes strictly @deferred + one lint rule. |
| R-TAXONOMY | The 20-value taxonomy desyncs across tool schema / prompt / analytics, or forks the learner model. | P0.2 | ONE `MARKING_ERROR_TYPES` constant imported by all three + guard test; reconcile `learning-profile/taxonomy.ts` to one home first. |

---

## E. OPEN QUESTIONS for the founder

These are unresolved unknowns the plan must NOT guess on. Each blocks or shapes a step.

- **OQ-1 (model strings — BLOCKER for every marker step).** The IELTS spec names
  `claude-sonnet-4-6 @ xhigh` (marker) and `claude-opus-4-8` (escalation re-mark), but
  the installed `@anthropic-ai/sdk@0.90.0` exposes only `claude-sonnet-4-20250514` with
  **no effort-tier parameter**, and there is no callable Opus id confirmed. **What is the
  exact callable marker model id, and is there any callable stronger model for
  escalation/borderline re-marks?** Until answered, the plan uses `MARKING_MODELS`
  defaulting all tiers to `ANTHROPIC_MODEL` and treats escalation as a same-model re-run.
  (architecture §9; IELTS §9; doc 10 R4; doc 20 highest risk.)

- **OQ-2 (Academic vs General Training).** The pack path is `ielts/writing/academic/task2`
  and the descriptors include `TASK2_GENERAL` variants in the existing code. **Is the MVP
  Academic Task 2 only, or must General Training Task 2 ship at GO-LIVE too?** This
  changes the pack count, the exemplar bank size, and the calibration coverage target.

- **OQ-3 (schema-fatal rerun policy).** The validator design chose ONE shared rerun budget
  across BOTH fabricated-evidence AND schema-fatal outputs. **Product decision: should a
  schema-fatal model output (e.g. wrong criterion count) be hard-rejected with NO rerun,
  or share the single rerun budget?** One-line policy change; must be agreed before P4.4.
  (doc 14 R3.)

- **OQ-4 (high-stakes definition for self-consistency).** Self-consistency (N=3, escalate
  5) triggers only for "high-stakes" / borderline scripts to control cost. The spec's
  borderline rule (any criterion conf <0.7 OR overall within 0.25 of a half-band) covers
  borderline, but "high-stakes" (B2B vs B2C, paid mock vs practice) is a separate cost
  lever, AND the single-run (non-borderline) residual decision. **What counts as
  high-stakes for the N=3 path, and is there a per-tier cost cap?** *Blocks P4.5; resolve
  before go-live.* (doc 15 cost risk.) [adjusted per review]

- **OQ-5 (real confidence vs the "never fake confidence / always draft" posture).** The
  live product deliberately sets `ai_confidence=NULL` and routes every AI mark to a human
  draft. IELTS introduces a real `overall_confidence` + threshold routing (auto `ai_marked`
  when confidence is high and no flags). **Confirm IELTS B2C marks may be shown to the
  learner as `ai_marked` (not teacher-drafted) when confidence ≥0.7 and no flags — i.e.
  the IELTS path legitimately diverges from the GCSE always-drafted posture?** (doc 14 R7;
  doc 20 intentional divergence; persistence map confidence-posture conflict.)

- **OQ-6 (upgrade rewrites = adults-only; age signal source).** Rewrites are enabled only
  for adult IELTS and forbidden for minors. **Is the IELTS Writing Task 2 audience
  guaranteed adult, and what is the server-authoritative age signal the feedback toggle
  reads?** If minors can reach this route, `allowRewrites` must default false there too.
  (architecture §3; doc 16 safeguarding risk; doc 19 step 5.)

- **OQ-7 (calibration set sourcing + consent + expert markers).** The pre-scale gate needs
  ≥50 expert-marked IELTS essays (bands 4–9, ≥5 per band) AND ≥1 expert-marked exemplar
  per band 5–8, all anonymised + consented, with a credentialed expert marker recorded.
  **Where do these essays + expert marks come from (existing moderated marks, paid marker
  drive, licensed set), and who is the credentialed IELTS expert marker for the
  exemplars?** This is the long-pole dependency for GO-LIVE (P9.4). (IELTS §8; doc 11/17
  risks.)

- **OQ-8 (pending DPAs / ZDR written confirmations).** No-training and zero-retention are
  contractual but the three written confirmations (DPA countersigned, ZDR, no-training)
  are PENDING; `isZeroRetentionConfigured()` is false. **Is obtaining these confirmations
  in scope/critical-path for GO-LIVE, or does IELTS launch on the contractual-only posture
  with the honest (pending) UI copy?** The plan currently assumes the latter. (doc 19 R;
  data-protection map.)

---

## Phase-0 adversarial review findings (2026-05-24)

*All findings from the Phase-0 adversarial review, grouped by dimension. Severity -> issue -> fix. Where a critical/high finding required it, the relevant plan step above has been adjusted in place and marked `[adjusted per review]`.*

### Dimension: Completeness

**[HIGH] DP-5 (Retention + deletion) has no implementer.**
- **Issue:** DP-5 is a declared cross-cutting invariant in section B and architecture section 5 ('honor deletion requests'; typed `RETENTION_POLICY`; 'deletion purges essay text + audit + analytics projection'), and R-PERSIST says 'deletion routes verified against IELTS rows (DP-5)'. But NO concrete build step in Phases 0-9 built `RETENTION_POLICY` or a deletion/purge routine. P5.x and P9.1 ADD persistence surfaces (marking_submissions columns, ielts_attempts, learner_profiles, learner_review_states, marker_calibration, ai-audit-log, feedback rows, cohort view) yet nothing deletes any of them. R-PERSIST's 'deletion routes verified' had no implementer. This is a UK-GDPR / Children's-Code legal obligation and the IELTS spine widens the deletion surface every phase.
- **Fix:** Add an explicit step that (a) defines typed `RETENTION_POLICY` and (b) implements + tests a deletion routine purging, for a given submission/user: marking_submissions row(s) + essay text, ai-audit-log entries, feedback rows, ielts_attempts, learner_profiles/review_states, and the analytics projection.
- **Adjusted:** Added **P5.4** (retention policy + deletion/purge routine, DP-5); DP-5 back-reference corrected to (P0.6 / P5.4).

**[HIGH] No learner-facing rendering of the section-6 borderline RANGE or the section-9 'practice feedback / not an official score' disclaimer.**
- **Issue:** Two source requirements are about what the learner SEES and are framed as liability controls, not polish. (1) IELTS section 6 mandates surfacing a RANGE rather than a false-precision single band for borderline marks - P4.5 computes bandRange and P5.2 persists it, but no step renders it; P9.5's accept criterion never mentions showing the range. (2) Architecture section 9 mandates marks be framed as 'AI practice feedback ... clearly distinct from an official board score, with appropriate disclaimers' - P9.5 goes to full learner exposure with no step building this framing/disclaimer. The plan ships an API + persistence but the section-6 range display and section-9 disclaimer have no home.
- **Fix:** Either state in section A that learner UI is out of scope and list section-6 range-display + section-9 disclaimer as deferred-to-UI requirements, OR add a step that renders the borderline range and the section-9 disclaimer. section-9 framing is a stated regulatory/trust control.
- **Disposition:** section A scopes the engine + persistence + API; learner-facing UI is the consuming surface. Recorded here as **deferred-to-UI requirements that the learner UI MUST satisfy before learner exposure**: the section-6 borderline-range display (engine persists the range at P5.2 so the UI can render it) and the section-9 'AI practice feedback / not an official board score' disclaimer. P4.5's residual note and the reworked G-LIVE gate (box 12) carry this forward explicitly rather than letting it fall through the gap between P7.4 (API) and P9.5 (GO-LIVE). (No engine step added - the requirement is named and carried forward, not dropped.)

**[MEDIUM] Integrity-flag -> band CONSEQUENCES (section 2) are unverified.**
- **Issue:** IELTS section 2 ties four mandatory integrity checks to scoring consequences, not just flags: under_length (<250 words) limits Task Response; copied-from-prompt words must not inflate Lexical/Grammatical and do not count toward length; off-topic/memorised severely limits TR. P4.1 captures the flags as booleans and P4.4 routes 'any flag true -> review', but no step enforced/tested the behavioural consequence - a mark could set under_length=true yet award high TR, or copied_from_prompt=true while crediting copied text in LR/GRA, with no check catching it.
- **Fix:** Add validator assertions and/or calibration scenarios tying integrity flags to band consequences per section 2; at minimum add a calibration fixture for an under-length / prompt-padded essay.
- **Adjusted:** P4.4 now enforces section-2 band consequences + adds the under-length/prompt-padded calibration fixture to accept.

**[MEDIUM] Authoritative WORD_COUNT + prompt-copy-exclusion rule have no owner.**
- **Issue:** IELTS section 2/section 3 require `{{WORD_COUNT}}` computed and injected, the under_length flag keyed off the 250-word threshold, AND 'words copied directly from the task prompt do NOT count toward length'. P3.3's cheap estimator counts words for band-estimation only. No step owned computing the displayed/under-length word count or stripping prompt-copied words.
- **Fix:** Assign an explicit owner for authoritative word-count computation incl. prompt-copy exclusion, feeding both `{{WORD_COUNT}}` and under_length, with a test for an essay padded with copied prompt text.
- **Adjusted:** P4.2 now owns authoritative word-count + prompt-copy exclusion, with the padded-essay test in accept.

**[MEDIUM] Rewrites (a section-3 core feature) are structurally OFF for the foregrounded minor cohort with no specified alternative.**
- **Issue:** Architecture section 3 / IELTS section 3+section 7 make 'rewrite two of the learner's actual weak sentences' the core teaching move ('most of the product's value'). P7.2 + R-FEEDBACK make rewrites adults-only (default false, adult IELTS only; OQ-6). But section 3 foregrounds school-age EAL learners - so the highest-value feature is off for exactly the minor cohort the architecture centres, with no minor-safe 'show a better version' path. This is a real scope reduction of a section-3 core requirement, surfaced only as an open question.
- **Fix:** Resolve OQ-6 into the plan: either defer rewrites for minors WITH safeguarding rationale AND specify what younger learners get instead, or design a safeguarded minor-safe rewrite.
- **Adjusted:** P7.2 now requires OQ-6 to be resolved in-plan (minor-safe alternative or documented deferral with rationale) rather than left open.

**[MEDIUM] section-5.2 'reject' vs the plan's 'return-with-verified:false' divergence is not explicit/traceable.**
- **Issue:** IELTS section 5.2 says fabricated evidence -> 'reject the mark and re-run; persistent fabrication -> human review' (reject, not return). P4.4 instead returns the result with quotes verified:false on rerun failure and invents a 'no rerun callback' branch not in the spec. Defensible, but it diverges from section-5.2's 'reject' wording and is parked in OQ-3 (which actually asks about schema-fatal rerun budget). The return-vs-reject divergence itself was not an explicit open question.
- **Fix:** Make the section-5.2 divergence explicit and traceable; confirm return-with-flags (not reject) is intentional, trace it to section 5.2, fold into OQ-3, and document it in P4.4 accept as a deliberate departure.
- **Adjusted:** P4.4 build now states the return-with-flags choice is a deliberate, documented departure from section 5.2, folded into OQ-3.

**[LOW] Spec model tiering ('Never mark on Haiku') has no guard test.**
- **Issue:** P0.1 correctly forbids hardcoding spec model strings and defers callable-id resolution to OQ-1, defaulting MARKING_MODELS.* to ANTHROPIC_MODEL. But P0.1 accept did not assert MARKING_MODELS.marker/escalation are never a Haiku-class id, so the spec's one hard model rule was unenforced.
- **Fix:** Add to P0.1 a cheap guard asserting MARKING_MODELS.marker and .escalation are not a Haiku-class id (IELTS section 1).
- **Adjusted:** P0.1 accept now includes the Haiku-class guard.

**[LOW] Per-criterion IELTS metric validation end-to-end is not pinned.**
- **Issue:** IELTS section 8 / architecture section 2 require per-criterion correlation tracked TR/CC/LR/GRA separately. P6.1 builds per-criterion metrics but P6.2's human_criteria is criterion-agnostic (GCSE-first) and IELTS criteria are only swapped in at P9.4. P9.4 accept asserted within-half-band floor + anchor quality but NOT that human_criteria carries TR/CC/LR/GRA and that per-criterion metrics are computed/meet floors for the IELTS set - so the IELTS path could reach go-live validating overall-band agreement only.
- **Fix:** Add to P9.4 accept an assertion that the IELTS calibration set's human_criteria carries TR/CC/LR/GRA and that per-criterion metrics are computed and meet floors for the IELTS set.
- **Adjusted:** Folded into the reworked G-LIVE 'IELTS calibration baseline' box (box 3: per-criterion TR/CC/LR/GRA computed and meeting floors at P9.4).

**[LOW] Exemplar bank band-coverage mismatch (5-8) vs calibration range (4-9).**
- **Issue:** Architecture section 1.2/section 2 call exemplar anchoring 'one of the single biggest levers'. P3.1 only required exemplars for bands 5-8 (TODO-empty permitted), P3.4 degrades to rubric-only - but the calibration set spans bands 4-9. A band-4 or band-9 calibration essay may have no nearest-band exemplar anchor, and nothing failed if a band present in the calibration set lacked exemplars.
- **Fix:** Align exemplar band coverage with the calibration range (4-9) and add a coverage check that fails if exemplars are absent for any band present in the active calibration set.
- **Adjusted:** P3.1 now targets bands 4-9 with a coverage check in accept.

### Dimension: Hallucination / Correctness (adversarial)

*(Residual ways a wrong mark could still reach a learner. The plan is strong on the five headline axes - verbatim-evidence backstop with reject/rerun-once; overall band recomputed in code via spec-exact `ielts/bands.ts` rounding with model `proposed_overall` used only for a >0.5 disagreement flag; self-consistency with median-run-never-average + range surfacing; confidence/human-review gate at 0.7/0.6/integrity/disagreement/spread; G-LIVE hard-stops exposure until BOTH validator AND a promoted calibration baseline over a populated set exist, calibration gated BEFORE exposure.)*

**[HIGH] Calibration baseline can be promoted / gate turned green WITHOUT exemplars in the pack.**
- **Issue:** Exemplars are "the single biggest accuracy lever" yet a TODO that "blocks calibration sign-off" only by convention: P3.1 accepts a TODO-empty bank, retrieval degrades to "rubric only, exemplarsOmitted=true, no throw", and assertCalibrationGreen / P9.4 checks metrics + coverage + floors but had NO machine check that the active pack's exemplar bank is non-empty. A human could promote a baseline that cleared floors on a thin set while the marker free-floated descriptor-only, then mis-band real learners outside the calibration distribution.
- **Fix:** Make exemplar-bank-non-empty (populated bands) a HARD, machine-checked precondition of assertCalibrationGreen / P9.4 promotion for the IELTS pack - refuse to go green if the active pack resolves zero exemplars; tie into the knowledge-packs-coverage test AND the gate so "go live with no anchors" is structurally impossible.
- **Adjusted:** G-LIVE now has a HARD machine-checked "exemplar bank non-empty" box (box 4) wired into assertCalibrationGreen / P9.4; P3.1 coverage check added.

**[HIGH] Self-consistency is borderline-ONLY - a confidently-wrong non-borderline single-run mark ships with consistencyFactor=1.0 and no instability detection.**
- **Issue:** The high-stakes/self-consistency gate keys on isHighStakes AND borderline. A mid-band, high-confidence, evidence-verified mark gets ONE generation. Model confidence is itself an LLM output and can be high while wrong; one greedy/low-temp run gives no cross-run signal. The verbatim-evidence check does not catch this class (a wrong band can be "supported" by genuine quotes that do not justify it). So the learner-facing number for the common case rests on one sample + self-reported confidence.
- **Fix:** Decide deliberately (OQ-4) and document the residual: either run N>=2 for ALL learner-facing high-stakes marks, or state explicitly that single-run marks carry no self-consistency backstop and lean the confidence gate + framing accordingly. Do not let "borderline-only" silently become the safety story for the majority of marks.
- **Adjusted:** P4.5 now requires the single-run residual decision (OQ-4) to be recorded in-plan; OQ-4 note updated.

**[MEDIUM] Integrity flags are MODEL-SELF-REPORTED booleans with no deterministic backstop, yet load-bearing for the review gate.**
- **Issue:** range-check only asserts the integrity_flags object + four boolean keys are PRESENT; it never independently verifies them. If the model fails to flag a memorised/off-topic/prompt-copied essay (exactly what an LLM marker is weakest at and what gaming learners probe), all four read false, the review gate sees no integrity trigger, and a high TR on an off-topic/memorised essay can auto-release. under_length has WORD_COUNT in the prompt but no code-side recomputation or copied-from-prompt overlap check.
- **Fix:** Add deterministic, code-side detectors that run independently and can OVERRIDE/augment the model's flags before the gate: (1) recompute word count -> force under_length; (2) n-gram overlap essay vs prompt -> copied_from_prompt; (3) a cheap prompt-relevance/off-topic check. Route to human when code and model disagree. Treat model integrity flags as one input, not the source of truth.
- **Adjusted:** P4.4 now adds code-side deterministic integrity detectors that override/augment model flags; P4.1 accept notes flags are one input, not truth.

**[MEDIUM] Calibration coverage floor (>=50 essays, >=5/band) is below statistical reliability for per-criterion r / exact-band rates, and the floors are un-tuned.**
- **Issue:** The design concedes "set too small/unrepresentative -> metrics lie" and small-n is "advisory (warn), not blocking". CALIBRATION_TOLERANCES (minCriterionR 0.60, minWithinHalfRate 0.80, minExactBandRate 0.45) are "initial - tune after the first real baseline". So the FIRST promoted baseline - the gate authorising first learner exposure - is set against un-tuned thresholds on a set small enough that a green run can be noise.
- **Fix:** Before P9.4 promotion, require a larger pre-exposure set or a documented statistical-power justification that 50/>=5-per-band detects a meaningful shortfall at the floors; surface confidence intervals / n per metric (not just point estimates); make the FIRST baseline require human sign-off recording the small-n caveat; resolve OQ-5 BEFORE go-live.
- **Adjusted:** G-LIVE now has a "Statistical-power sign-off" box (box 6: CIs/n surfaced, first-baseline human sign-off, OQ-5 resolved before go-live).

**[MEDIUM] Gold marks may be single-marker, unreconciled - poisoning the gate in both directions.**
- **Issue:** The plan permits single-marker gold (calibration_set.marker_count default 1, reconciled default false; OQ-7 open). A wrong "gold" band can fail a correct engine (needless review) OR pass a miscalibrated engine that happens to agree with a wrong human. The gate did not REQUIRE reconciled/marker_count>=2 gold for the pre-exposure baseline.
- **Fix:** Require the pre-exposure baseline (P9.4) over reconciled, marker_count>=2 gold (or a documented majority threshold); resolve OQ-7 before populating the set; block promotion if the reconciled fraction is below a stated minimum.
- **Adjusted:** G-LIVE now has a "Gold-mark quality" box (box 5: reconciled, marker_count>=2, OQ-7 resolved, minimum reconciled fraction).

**[MEDIUM] Learner-facing feedback can drift below the mark's integrity guarantees (GCSE path) and IELTS deterministic-fallback quality is unmonitored at go-live.**
- **Issue:** (a) The strong feedback-consistency stack (schema with no band fields + validateFeedbackAgainstMark + deterministic fallback) is IELTS-only; the live GCSE path keeps consistency "by construction" (feedback shares the marker JSON) - fine now, but any future GCSE second-call would be unguarded. (b) For IELTS, on second validation failure the system degrades to a deterministic template; consistencyChecksPassed records the path, but there is no go-live gate on fallback RATE, so a prompt/model regression could silently push most learners onto bland fallback feedback (consistent with the band but no longer teaching) - invisible until the trailing calibration hook.
- **Fix:** Add a fallback-rate alarm to the same drift/calibration surface that gates go-live (not a trailing step): if consistencyChecksPassed=false rate exceeds threshold for the active triple, alert and treat as a regression. Confirm no future GCSE second-call feedback ships without the same schema-omission + validator + fallback stack.
- **Adjusted:** G-LIVE now has a "Fallback-rate alarm" box (box 7) gating go-live.

**[LOW] Criterion non-integer coercion is round-to-nearest, which can round a borderline band UP and inflate the overall.**
- **Issue:** range-check coerces a model-emitted 6.5 to 7 by rounding to nearest, emitting only a non-fatal BAND_NOT_INTEGER. Since the overall is the mean of the four criterion integers, a single upward coercion can lift the code-computed overall half a band for a borderline candidate - a too-high mark. The doc itself flags this as a judgement call.
- **Fix:** When the model returned a non-integer criterion (a contract violation the schema should already prevent), prefer routing to human review or floor-coercing rather than rounding up; at minimum make BAND_NOT_INTEGER contribute a review reason rather than passing silently.
- **Adjusted:** P4.4 now routes a coerced BAND_NOT_INTEGER to human review (prefer review/floor over round-up).

**[LOW] No explicit single-canonical-essay-string guarantee across marker verification, feedback rewrite-provenance, persistence, and display.**
- **Issue:** Evidence verification correctly verifies against the exact essay string sent to the marker (R8), but the plan did not require that the SAME post-normalisation string is also persisted/displayed and re-checked by the feedback validator's rewrite-provenance step (doc 16 step 5.3). Two verification sites that must use one identical string, or a rewrite could pass marker-side verification but mismatch the displayed essay - surfacing a "verbatim" quote that is not verbatim against what the learner sees.
- **Fix:** Pin a single canonical essay string (the exact bytes sent to the marker) as the one source for marker-side evidence verification, feedback rewrite-provenance verification, persistence, and display; add a test that both validators verify against byte-identical input.
- **Adjusted:** P4.4 now pins the single canonical essay string across all four sites, with a byte-identical-input test in accept.

### Dimension: Children's-Data / Compliance (adversarial)

**[CRITICAL] DPIA-v1 overstates the no-train/zero-retention posture NOW, and the fix was parked until P7.5.**
- **Issue:** dpia-ai-features-v1.md section 2 asserts "Zero-retention configuration with Anthropic API" as an active control; section 4 R3/R6 assert "Anthropic zero-retention endpoint + no-training contractual term"; section 5 rates R6 (children's essays in third-party training data) residual LOW because "Contractual + ZDR endpoints are the standard remedy". But subprocessors.ts sets Anthropic dpaStatus:'unconfirmed' and zeroRetention:'unconfirmed', and doc 19 confirms isZeroRetentionConfigured()===false (dpaCountersigned/writtenZdrConfirmation/writtenNoTrainingConfirmation all false) and the SDK has NO ZDR endpoint. So the 11-17 cohort (lowered from 13 by decision B5) has its single highest child-specific risk (R6) rated Low on a control the company's own code says is not in place - and the plan did not require fixing this before the rest of the build.
- **Fix:** Pull the DPIA section 2/section 4/section 5-R6 reconciliation OUT of P7.5 and make it an immediate, standalone correction (today), independent of the engine build: re-rate R6 with ZDR/no-training treated as PENDING (contractual-only, written confirmation not in hand), residual contingent. Keep P7.5 as the "generate-from-typed-posture" wiring, but the honesty correction cannot wait for Phase 7.
- **Adjusted:** Added **P0.7** (immediate DPIA R6 honesty correction + DPO signature reconciliation) in Phase 0, independent of the engine build.

**[HIGH] Gate G-LIVE did not make the DPIA correction / public-legal-page reconciliation (P7.5) a precondition for learner exposure.**
- **Issue:** G-LIVE only added DP-4 (gate chain) and DP-1 (minimisation). P7.4 (IELTS route) and P7.5 (DPIA + register + /legal/privacy + /data-processing) sit in the same phase with no ordering guarantee that honest privacy copy ships BEFORE any learner (incl. a minor) can see marking. DP-2 protects in-product marking-UI strings from MARKING_PRIVACY_CLAIMS but NOT the standalone /legal/privacy + /data-processing pages or the DPIA - those are reconciled only by P7.5, which was not a G-LIVE gate.
- **Fix:** Add to G-LIVE: "P7.5 complete - DPIA no longer asserts ZDR as active; /legal/privacy + /data-processing render from the typed register; all child/parent-facing privacy copy matches describeDataPosture() tiers" BEFORE any learner exposure. Sequence P7.5 to land before P7.4's flag can be flipped on.
- **Adjusted:** G-LIVE now has the "DPIA + legal-page reconciliation (P7.5) complete before any learner exposure" box (box 10); DP-6 corrected to P7.5.

**[HIGH] DP-1 minimisation sends the child's essay VERBATIM to a US sub-processor whose DPA + no-training/ZDR are BOTH unconfirmed, with an essay-internal-PII carve-out.**
- **Issue:** DP-1 / P0.5 / P6.1 deliberately send the essay verbatim to Anthropic (US; transfer = DPA + SCCs) with the essay carved out of PII scanning ("an email-looking string INSIDE the essay does NOT throw"). For 11-17-year-olds this is the highest-volume PII flow; children's free-text essays routinely contain self-identifying and special-category content (DPIA R3: "mental health, family, safeguarding-relevant"). The guard strips surrounding identifiers but by design does nothing about identifiers/special-category data embedded in the essay body, sent to a processor with no confirmed no-training/ZDR term. The DPIA's R3 safeguarding-disclosure detector exists on the live GCSE path but is NOT in this plan's IELTS gate chain (DP-4 lists contentSafetyCheck, a prompt-injection/safety pre-screen, not the safeguarding free-text classifier).
- **Fix:** (1) Make written no-training + ZDR confirmation a HARD precondition for sending children's essays at scale; until then treat IELTS child marking as gated/limited, not GA. (2) Confirm the DPIA R3 safeguarding free-text disclosure detector runs on the IELTS path before the marker call (not just contentSafetyCheck), or document + risk-accept its absence. (3) Have the DPIA acknowledge the essay-verbatim carve-out as a named residual risk for the child cohort.
- **Adjusted:** P7.4 accept now adds the R3 safeguarding detector, the child-essay processor precondition (ZDR/no-training confirmation), and the essay-verbatim carve-out as a named DPIA residual; G-LIVE "Children's-essay processor posture" box added (box 11).

**[HIGH] Calibration-set ingestion of CHILDREN's essays as a long-lived, append-only "core asset" is under-specified for the child cohort and the unconfirmed-DPA reality.**
- **Issue:** P6.2 creates calibration_set (anonymised, human_criteria) and P9.4/G-LIVE require >=50 essays bands 4-9, "anonymised + consented, expert-marked". Architecture section 2/section 4 frame calibration data as "a core asset you own"/"a moat"; section 7 (Hermes) proposes turning learner-derived statistics into MARKETING citations. For an 11-17 cohort under the Children's Code: (a) "consented" never specifies WHO consents (child vs parent) or that calibration re-use is a distinct purpose needing its own lawful basis beyond the marking contract; (b) retention in an append-only immutable corpus collides with storage-limitation and erasure (DP-5 covers marking_submissions but not whether deletion purges the child's essay from calibration_set); (c) the commercial framing risks repurposing children's data for marketing/GEO without a clear basis.
- **Fix:** Before any child essay enters calibration_set: (1) specify the lawful basis + WHO consents for the SECONDARY purpose (parent/guardian consent for under-18s); (2) confirm erasure cascades into calibration_set (or only irreversibly-anonymised, non-re-identifiable essays are retained - and prove the anonymiser achieves that for free text); (3) explicitly EXCLUDE children's calibration/learner data from the Hermes/GEO marketing pipeline unless a separate documented basis exists.
- **Adjusted:** P9.1 build now gates child-essay calibration ingestion on secondary-purpose lawful basis + parent/guardian consent, erasure cascade into calibration_set (P5.4), and Hermes/GEO exclusion.

**[MEDIUM] DP-5 deletion + provider-side retention caveat left partly open while children's essay text is persisted.**
- **Issue:** doc 19 notes two divergent paths (/api/mark no-persist; /api/marking/run persists essay_text) and that deletion routes are "not verified to actually purge marking_submissions.essay_text". The plan resolves the spine to marking_submissions but Supabase dpaStatus is "pending" and Anthropic processor-side retention "unconfirmed", so the end-to-end deletion guarantee (incl. provider-side copies) cannot yet be honestly asserted for the child cohort.
- **Fix:** Ensure the DP-5 deletion test proves marking_submissions.essay_text + AI audit rows + analytics projection are purged for a CHILD account, and that DPIA/retention copy states provider-side retention is contractual-and-unconfirmed (not "deleted immediately") until writtenZdrConfirmation flips. Verify before, not after, child essays are persisted at scale.
- **Adjusted:** P5.4 accept proves child-account purge and pins the provider-side "contractual-and-unconfirmed" wording.

**[MEDIUM] Marking-UI / output claims may exceed what is true for the child cohort (age-gate + DPIA R7 protections).**
- **Issue:** (a) The IELTS feedback generator enables upgrade rewrites for "adult IELTS candidates" and age-gates them off for minors, but the age signal is "server-authoritative" without proving an 11-17 candidate cannot be mis-classified as adult - a wrong age flag shows model-authored rewrites to a child. (b) DPIA R7 (bot-impersonation / parasocial reliance) mitigations - persistent "AI tutor" label, cooling-off banner, no first-person human claims - are NOT referenced in this plan's IELTS UI steps, so a child using the IELTS marker may not get the R7 protections the DPIA promises.
- **Fix:** (1) Require the rewrite age-gate to fail SAFE (default minor / rewrites-off unless adulthood positively verified) + a test that a missing/ambiguous age signal suppresses rewrites. (2) Add the DPIA R7 mitigations to the IELTS marking UI steps, or document why R7 does not apply.
- **Adjusted:** P7.2 now fails safe on the age-gate (test required); P7.4 accept now requires R7 mitigations on the IELTS surface or documented non-applicability.

**[LOW] DPIA sign-off / ownership integrity issues weaken its evidentiary value.**
- **Issue:** dpia-ai-features-v1.md section 6 shows the DPO signature line BLANK while the same person (Calum Johnson) is named Founder and DPO in the header - and the Founder sign-off line reads a DIFFERENT surname ("Calum Jardine"). With the v1.0 "metadata refresh ... no material processing changes" note, the FINAL DPIA relied on for an 11-17 cohort is unsigned by the DPO and internally inconsistent on the approver's identity.
- **Fix:** Obtain a dated DPO signature, reconcile the name discrepancy (Johnson vs Jardine), and document the DPO/Founder-same-person independence limitation (ideally an independent review).
- **Adjusted:** Folded into P0.7 build (c).

### Dimension: Live-path / Regression

**[HIGH] P2.3 names no flag / read site / prod default for its rollback.**
- **Issue:** P2.3 (the only LIVE GCSE cutover step) named its regression guard and a rollback ("keep the flag to revert") but did NOT name the flag, where it is read, or its production default. A "flip a flag" rollback is only real if the flag exists, defaults OFF in prod, and the revert path is itself tested. No step defined the flag constant, its env/config source, or a test that flag-OFF preserves today's exact inline orchestration on /api/marking/run and /api/mark.
- **Fix:** Add to P2.1/P2.3: name the flag (MARKING_ENGINE_FACADE), read server-side, prod default OFF, plus a test proving flag-OFF routes through the original inline orchestration byte-identically while flag-ON routes through markSubmission. P2.3's rollback line must read "set MARKING_ENGINE_FACADE=off, redeploy".
- **Adjusted:** P2.1 + P2.3 now name MARKING_ENGINE_FACADE (server-side, prod default OFF) with flag-OFF parity test and explicit rollback line.

**[HIGH] P2.1's "byte-identical" guard tests against a FIXTURE, not a pre-refactor golden corpus from the live routes.**
- **Issue:** The accept said "byte-identical to current /api/marking/run" but defined no frozen golden corpus snapshotted pre-change. A fixture the new engine is built to satisfy proves self-consistency, not parity with today's production output across the real input distribution (all 20 schemes, INVALID_SUBMISSION/OFF_TOPIC rejection, 30k-char truncation, b2b vs b2c status branching).
- **Fix:** Insert a pre-refactor step: run the current routes over a representative matrix (all 20 schemes + INVALID/OFF_TOPIC/over-length/b2b-vs-b2c) and freeze outputs as golden files; P2.1's byte-identical assertion diffs against THAT frozen corpus. Preserve: INVALID_SUBMISSION->400, OFF_TOPIC->400, b2b_class->teacher_review_required vs b2c_self->ai_marked, ai_confidence===null on persist.
- **Adjusted:** P2.1 now includes the pre-refactor golden-corpus capture and diffs against it, preserving the named behaviours.

**[HIGH] API contract widening (409/422) on live endpoints with no caller audit.**
- **Issue:** P2.3 adds NeedsConfirmation->409, NO_PACK->422, AMBIGUOUS_SUBMISSION->409 to routes that today emit only 200/400/401/403/404/429. R1/R3 acknowledge the risk and mitigate the server side, but no step audited EXISTING callers (web marking UI, mobile/, src/app/school/marking) to confirm they tolerate 409/422. A correct server contract still breaks a client that renders any non-2xx as a generic failure.
- **Fix:** Add a caller-audit sub-task to P2.3: enumerate every consumer and confirm each handles 409/422, OR prove a well-formed GCSE request with an explicit markSchemeId can NEVER reach the 409/422 branches (router mode-1 short-circuit, basis:'explicit', confidence:1). Assert existing GCSE request still returns 200, never 409/422.
- **Adjusted:** P2.3 now includes the caller-audit sub-task + the "never 409/422 for explicit GCSE" assertion.

**[HIGH] P5.1/P5.2 relax the live GCSE "FORCES null" confidence test on a shared file.**
- **Issue:** persistence.ts applyAiResult hard-codes ai_confidence: null ("We no longer fake confidence") with a test the plan calls "FORCES null". P5.1/P5.2 said they would "update" that test "to allow measured-not-fabricated values". Relaxing the very test that protects the live no-fake-confidence posture is a regression vector: if the IELTS-vs-GCSE discriminator is wrong/missing, a GCSE row could persist non-null ai_confidence.
- **Fix:** Do NOT mutate the GCSE FORCES-null test; keep it byte-unchanged asserting ai_confidence===null for the GCSE/legacy path, and add a SEPARATE test for the new IELTS path. Route measured confidence only through the distinct src/lib/marking/ielts/persistence.ts so GCSE applyAiResult cannot emit non-null. Migration rollback: new columns additive/nullable, down = drop columns.
- **Adjusted:** P5.1 keeps the FORCES-null test byte-unchanged; P5.2 routes measured confidence only via the IELTS path with a separate test; down-migration = drop columns.

**[MEDIUM] Model-string unification is a disguised live behaviour change, landing before any GCSE baseline exists.**
- **Issue:** /api/marking/run uses model: ANTHROPIC_MODEL; the plan says P2.1 "reconciles the model string ... closes the model-string inconsistency between /api/mark literal and /api/marking/run constant" - implying /api/mark sends a different literal. Unifying changes the model one live GCSE route calls, which can shift live GCSE grades, and Phase 2 runs BEFORE any GCSE calibration baseline (Phase 6), so the change is unmeasurable for drift when it lands.
- **Fix:** P0.1/P2.1 document both current literals and get explicit sign-off that changing /api/mark's model is acceptable. If they match, assert with a test (no-op, safe). If they differ, fold into the golden-corpus diff and flag that GCSE grades may move; consider deferring unification until a GCSE behavioural baseline exists. (OQ-1/R-MODEL concern IELTS spec ids, not this divergence.)
- **Adjusted:** P2.1 now requires recording both literals + explicit sign-off, and a no-op test if they already match.

**[MEDIUM] Sequencing compounds two live risk surfaces: Phase 2 cuts live routes onto the engine, then Phase 5 migrates the shared persistence layer underneath them.**
- **Issue:** Phase 2 cuts live GCSE routes onto the facade, then P5.1 migrates shared persistence.ts / versioning-capture.ts and adds DB columns underneath the already-cut-over routes. The plan marks P5.1 "additive/back-compatible" but provided no test that the Phase-2 engine yields identical GCSE output with vs without the new V2 columns present.
- **Fix:** Either keep the Phase-2 facade flag OFF in prod until P5.1's additive migration is deployed and proven, OR add a forward/backward-compat test: the facade produces byte-identical GCSE output whether or not the V2 columns exist yet; confirm captureVersions/applyAiResult tolerate the pre-migration schema.
- **Adjusted:** P2.3 keeps the flag OFF in prod until P5.1 is deployed/proven; P5.1 accept adds the forward/backward-compat test.

**[MEDIUM] P5.3 / P0.4 "hygiene" edits touch the live GCSE parser feedback-generator.ts.**
- **Issue:** feedback-generator.ts is the live GCSE JSON->MarkingResult parser invoked on every /api/marking/run and /api/mark request; its INVALID_SUBMISSION/OFF_TOPIC gating is a load-bearing safety rail. P5.3 edits it for hygiene (mark legacy MarkingResult @deprecated; add toResultV2 adapter) with the only guard "existing GCSE tests green" - no explicit constraint that live generateFeedback signature/behaviour is untouched or that no live route imports toResultV2.
- **Fix:** Constrain P5.3 edits to annotation/new-export only; add a test asserting generateFeedback output is byte-unchanged on a fixture and INVALID_SUBMISSION/OFF_TOPIC still reject; add a grep/test that no live route imports toResultV2 until the Phase-2 cutover is proven.
- **Disposition:** P5.3's existing accept already constrains edits to deprecation + adapter and asserts "no behaviour change to the live GCSE path". Recorded here as a standing constraint: P5.3 edits to feedback-generator.ts are annotation/new-export ONLY; generateFeedback output byte-unchanged + INVALID_SUBMISSION/OFF_TOPIC still reject (test), and a no-live-import grep/test holds until the Phase-2 cutover is proven. (No step edit required - existing P5.3 accept already encodes no-behaviour-change.)

**[MEDIUM] P6.4 wires the fail-closed gate into GENERIC version-activation tables, newly risking a block on routine GCSE releases.**
- **Issue:** assertCalibrationGreen blocks prompt_versions.active / model_versions.is_active / pack publish + CI. Because the harness is built criterion-agnostically against GCSE first but GCSE has NO promoted baseline (and ships today with no calibration gate), a missing/red calibration run could newly BLOCK a routine GCSE prompt/model activation - a new operational failure mode on the live GCSE release path. The cross-area blast radius was not scoped.
- **Fix:** Scope assertCalibrationGreen to fail-closed ONLY for areas with a promoted baseline (IELTS once P9.4 lands) and fail-OPEN-with-warning for GCSE until a GCSE baseline is deliberately promoted. Tests: (a) activating a GCSE-only prompt/model with no IELTS baseline is ALLOWED; (b) activating the IELTS triple without a green baseline is REJECTED.
- **Disposition (flagged for builder - no auto-edit):** P6.4 should be scoped per-area (fail-closed only where a baseline is promoted; fail-open-with-warning for GCSE) with the two tests above, so the first red IELTS run cannot freeze GCSE releases. Recorded here; P6.4 build text left intact pending the builder's per-area scoping decision (the change to P6.4 acceptance is non-trivial and should be made deliberately, not via a mechanical swap).

**[LOW] P9.1 write-path could fire on the GCSE path.**
- **Issue:** P9.1 appends an ielts_attempts row + calibration pairs from the validated mark, sharing migrations and prisma/schema.prisma with the GCSE spine. The guard names consent gates + de-identification but did not assert the new analytics write CANNOT fire on the GCSE path (the analytics layer is "criterion-generic"). A criterion-generic writer accidentally triggered by a GCSE mark would create new rows / PII exposure on the live GCSE flow.
- **Fix:** Assert the analytics write path is gated to IELTS-typed validated marks only and is never invoked by /api/marking/run or /api/mark; confirm prisma/schema.prisma edits are additive and the GCSE spine's queries are unaffected (Prisma client not regenerated locally - verify new models do not break the "tables never touched via Prisma" rule).
- **Adjusted:** P9.1 accept now gates the write path to IELTS-typed validated marks only (provably never invoked by the GCSE routes) and pins the additive/Prisma-rule constraints.

### Dimension: Sequencing

**[HIGH] Broken section-B prerequisite references (DP-1, DP-2) point at the wrong steps.**
- **Issue:** DP-1 said outbound minimisation is "Enforced by assertMinimisedPayload (P6.1)" and "must land before any new IELTS marker wiring (P9+)". But assertMinimisedPayload is BUILT in P0.5 and first APPLIED in P4.2; P6.1 is the calibration metric layer. "(P9+)" is wrong - the first new IELTS marker wiring is P4.2. DP-2 said privacy copy "renders from the single typed posture object (P6.2)" but the posture object is built in P0.6; P6.2 is the calibration set store. A builder following section B literally would think the DP guards do not exist until Phase 6 and could wire the marker (P4.2) before the guard - defeating the invariant.
- **Fix:** DP-1 -> "assertMinimisedPayload (P0.5), applied from P4.2 onward; must land before any IELTS marker wiring (P4.2)". DP-2 -> "typed posture object (P0.6)". Re-grep section B for every P6.x reference and fix to the real P0.5/P0.6 ids.
- **Adjusted:** DP-1 and DP-2 back-references corrected; DP-3 back-reference also corrected (now points to P0.7).

**[HIGH] Dangling section-B DP-6 prerequisite names a non-existent step (P6.6).**
- **Issue:** DP-6 said the DPIA "must be reconciled (P6.6)" before any IELTS marking UI ships. There is no P6.6 - Phase 6 ends at P6.4. The DPIA reconciliation lives in P7.5. Because DP-6 is a hard precondition naming a non-existent step, the DoD for "IELTS UI may ship" was unverifiable. P7.5 is sequenced in Phase 7 with deps only on P0.6, while the actual go-live consumer is P9.5 (deps include P7.5).
- **Fix:** Change DP-6's "(P6.6)" to "(P7.5)"; confirm P7.5 is a hard predecessor of P9.5; add P7.5 to the G-LIVE gate prose.
- **Adjusted:** DP-6 -> P7.5 (and the immediate honesty correction -> P0.7); P7.5 added to G-LIVE (box 10).

**[HIGH] Wrong open-question binding at the validator orchestrator (P4.4 / P4.5).**
- **Issue:** P4.4's guard said "schema-fatal rerun policy is a documented one-line product decision (OQ-4)". But OQ-4 is the high-stakes/self-consistency cost lever, which governs P4.5. The OQ that actually governs P4.4's schema-fatal-rerun decision is OQ-3 ("must be agreed before P4.4"). So P4.4 cited the wrong blocker and P4.5 cited no OQ despite OQ-4 being about it.
- **Fix:** In P4.4 change "(OQ-4)" to "(OQ-3)". In P4.5 add a guard "high-stakes/borderline N-policy is a product decision (OQ-4); resolve before this step".
- **Adjusted:** P4.4 guard -> OQ-3; P4.5 build -> OQ-4 guard added; OQ-4 note updated.

**[MEDIUM] Cross-phase dependency-order vs phase numbering: P5.1 needs no Phase-4 output.**
- **Issue:** P5.1 (Phase 5) lists deps P0.4, P3.1, P1.4 - i.e. it needs only the authored pack + foundations, NOT any Phase-4 output. But phase numbering (5 after 4) plus the critical path serialise P5.1 AFTER P4.5, needlessly lengthening the path and hiding that persistence columns could be built in parallel with the marker. (P5.2 genuinely needs P4.5.)
- **Fix:** Mark P5.1 as parallelisable with Phase 4 (deps P0.4 + P3.1 + P1.4); correct the critical-path line to branch P5.1 off P3.1/P0.4 rather than chaining it after P4.5; keep only P5.2 on the post-P4.5 chain.
- **Adjusted:** Track B + critical-path lines now branch P5.1 off P3.1/P0.4 in parallel with Phase 4.

**[MEDIUM] False/unguarded parallelism on shared mutable files + a single migration spine.**
- **Issue:** P5.1, P5.2, P7.4 all edit persistence.ts and versioning-capture.ts (fine within sequential Track B). But P9.1 ALSO appends to the write path / persistence + prisma/schema.prisma and section C puts P9.1 on Track E ("parallel"). prisma/schema.prisma is edited by BOTH P5.1 and P9.1, and both migrations touch the marking spine. If Track E runs concurrently with late Track B persistence work, two tracks mutate schema.prisma and the migration chain simultaneously - migration ordering on a single DB spine cannot be parallelised safely.
- **Fix:** Add an explicit serialisation note: all migrations + schema.prisma edits (P5.1, P5.2, P6.2, P9.1) form a single ordered migration lane that cannot run in parallel even though their feature work can; state the order (P5.1 -> P5.2 -> P6.2 -> P9.1), each additive/idempotent against the prior; scope Track E's "parallel" claim to logic, not the schema.
- **Adjusted:** Migration-lane note added to P5.1 and to Track E.

**[MEDIUM] P9.1 depends on a de-identification projection that the named step (P6.3) does not build.**
- **Issue:** P9.1 deps read "P6.3 (de-id projection)" and the build text says "through the analytics de-identification projection (P6.3 of doc 19)". But P6.3 in this plan is the drift cron + alerting; it builds no projection. DP-3 also mis-numbers the projection as "P6.3". The projection file analytics-projection.ts is actually created in P9.1 itself - so P9.1 lists a dependency on a projection that does not exist until P9.1: a self-referential / missing-prerequisite defect, with the de-id backstop created in the same step that first writes rows.
- **Fix:** Decide where the projection truly lives. Since it must precede the write path (DP-3 "adversarial test is the backstop"), promote analytics-projection.ts into a Phase-0 / early-Phase-6 DP-scaffold step (sibling to P0.5/P0.6) and make P9.1 depend on THAT step; fix DP-3 and P9.1's "(P6.3)" references to the real id.
- **Adjusted:** Created **P0.7** (DP scaffold, builds analytics-projection.ts); P9.1 deps + DP-3 now reference P0.7, not P6.3.

**[MEDIUM] Gate G-LIVE DoD partially unverifiable: the IELTS calibration baseline is only provable at P9.4, not at Phase-6 completion.**
- **Issue:** G-LIVE required "a promoted baseline over a populated set". But the harness is built against the GCSE pipeline first, and assertCalibrationGreen (P6.4) is wired/tested against a GCSE/regressed fixture; the IELTS-marker entrypoint is swapped in only at P9.4. So at the moment Phase 6 is declared "the other half of G-LIVE complete", no IELTS calibration run can have occurred. A builder could read "Phase 6 done = half of G-LIVE satisfied for IELTS" and proceed.
- **Fix:** Reword G-LIVE into two distinct conditions: (a) harness + release-gate infrastructure exist and are green on GCSE (Phase 6); (b) an IELTS-marker green baseline over the populated set exists (P9.4). Make P9.4 - not Phase 6 - flip the IELTS half of G-LIVE; have assertCalibrationGreen's acceptance include an IELTS-marker run before P9.5.
- **Adjusted:** G-LIVE now splits the calibration condition into "infrastructure (Phase 6, necessary-not-sufficient)" (box 2) and "IELTS baseline (only provable at P9.4)" (box 3); critical path notes P9.4 flips the IELTS half.

**[LOW] Track C "parallel, joins at P9.4" understates the P6.2->P5.1 coupling.**
- **Issue:** P6.2 has a backward cross-track dependency on P5.1 (Track B / Phase 5). Track C is described as runnable "in parallel with Track B" joining only at P9.4, but P6.2 onward cannot start until Track B reaches P5.1.
- **Fix:** Amend Track C to: "P6.1 parallel from P0.3; P6.2+ requires P5.1 (provenance tables) from Track B, so Track C joins Track B at P5.1, not only at P9.4."
- **Adjusted:** Track C description corrected.

**[LOW] P9.3 acceptance straddles pre- and post-pack states; the "fails closed before the pack ships" clause is untestable given its deps.**
- **Issue:** P9.3 depends on P7.4, P2.3, and P3.1 (pack authored). Its accept says "IELTS routing resolves the pack version and fails closed before the pack ships; after the pack ships ..." - but by P9.3's own dependencies the pack already exists, so the fail-closed-before-pack behaviour cannot be exercised here. That behaviour is actually a P1.4 property ("ielts throws NO_PACK").
- **Fix:** Move the "fails closed before the pack ships" assertion to P1.4's acceptance and keep P9.3's acceptance to the post-pack "explicit request routes basis:explicit confidence:1 with no core change" only.
- **Adjusted:** P9.3 accept reduced to post-pack only; the fail-closed-before-pack assertion relocated to P1.4.
