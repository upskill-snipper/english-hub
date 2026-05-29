# Design: Marking Engine service shape + Router (§1, §1.1)

Status: DRAFT design doc. No code is changed by this document.
Scope: the single Marking Engine **service shape** and the **Router** (architecture-source §1, §1.1; IELTS spec §9). Specifically: how an exam area "plugs in", how a submission is tagged with board / task-type / level, how the right Knowledge Pack is selected, and the low-confidence "ask the student to confirm" behaviour.
Sibling docs (owned by other agents, referenced not duplicated here): Knowledge Pack format, Retrieval, Marker tool schema, Validator+Confidence, Feedback Generator, Persistence/analytics. This doc defines the **seams** between Router and those components and stops at each seam.

Traceability:
- `00-architecture-source.md` §0 (one engine, four areas, only the Knowledge Pack changes), §1 (six components, build in order), §1.1 (Router), §1.2 (Pack resolve-by-(area,taskType,level)→highest published, fail closed).
- `01-ielts-writing-task2-spec.md` §9 (Router / pack selection, confidence-gated confirm), build note lines ~268–273 (IELTS may land greenfield alongside GCSE; reconcile model ids in Phase 0).

---

## 1. Current state in THIS codebase

The repo already has a **working, board-grounded GCSE/IGCSE English marking stack** under `src/lib/marking/`, plus **partially-grounded EAL and IELTS markers** under `src/lib/eal/` and `src/app/api/ielts/`. None of these is a "Marking Engine service" and **there is no Router**. The relevant facts:

### 1.1 There is no Router and no engine façade
- `src/lib/marking/mark-schemes/index.ts` exposes `getMarkScheme(id: string): MarkScheme | null` — a bare, opaque-string lookup that **returns `null` on miss (soft fail)**. There is no resolve-by-`(board, subject, qualification, questionType)`, no version selection, no fail-closed behaviour.
- Both live entry points — `POST /api/mark` (`src/app/api/mark/route.ts`) and `POST /api/marking/run` (`src/app/api/marking/run/route.ts`) — are **caller-supplied-routing**: the request carries `markSchemeId` + `questionId` (B2C) or the submission row already has `mark_scheme_id` + `rubric_ref` (B2B). The classification decision ("what is this submission?") has already been made by the UI/teacher before the API is reached.
- The two routes **duplicate the same orchestration** inline: `getMarkScheme` → `buildMarkingPrompt` → one `anthropic.messages.create` → `generateFeedback`. `/api/mark` hardcodes the model literal `'claude-sonnet-4-20250514'`; `/api/marking/run` uses `ANTHROPIC_MODEL` from `src/lib/anthropic-client.ts`. This is a confirmed inconsistency.
- There is **no confidence-gated "ask the student to confirm" path** anywhere. Ambiguity is handled by hard rejects (`INVALID_SUBMISSION` / `OFF_TOPIC` error sentinels), not by a clarify-and-retry loop.

### 1.2 The pieces a Router would plug into already exist (in GCSE-specific form)
- **Pack-ish data**: `src/lib/marking/mark-schemes/*.ts` (20 schemes, board-keyed) is the de-facto Knowledge Pack content for GCSE. `MarkScheme` type (`mark-schemes/types.ts`) carries `board`, `subject` (`'English Literature' | 'English Language'` hard union), `paper`, `questions[]` (each with `questionType`), optional free-text `version`. There is **no `qualification` field** and **no `area` field**; GCSE vs IGCSE is encoded only in ad-hoc ids (`edexcel-lit` vs `edexcel-igcse-lit`; `cambridge-0500` vs `cambridge-0990`).
- **DB board enum**: the Prisma `ExamBoard` enum + `mark-schemes-coverage.test.ts` confirm persistence keys on 7 boards (`AQA, EDEXCEL, OCR, EDUQAS, EDEXCEL_IGCSE, CAMBRIDGE_0500, CAMBRIDGE_0990`). **No IELTS, no EAL** in this enum.
- **Provenance capture**: `versioning-capture.ts` (`captureVersions`) records model/prompt/rubric versions per mark, best-effort, never throws (EU AI Act Art.12). This is where a resolved `packVersion` must be recorded.
- **EAL placement signal**: `src/lib/eal/cefr.ts` `calculateCEFRLevel(...)` is a deterministic CEFR placement engine — a ready-made **target-level signal source** a Router could consume, but it is not wired as one.
- **IELTS objective rounding**: `src/lib/ielts/bands.ts` `overallBand([...])` already implements the spec's exact half-band rounding. (Validator concern, noted for the seam only.)
- **Submission spine**: `marking_submissions` (Supabase, mirrored in Prisma) already has `exam_board`, `qualification?`, `paper?`, `question_type?`, `mark_scheme_id?`, `rubric_ref?`, `source` (`'b2c_self' | 'b2b_class'`), `status` state machine — i.e. **the fields a routing decision would write are mostly already there.**

### 1.3 What "plug in" means today
Today an area does not "plug in" — each area is a **separate route tree** with its own hardcoded descriptors and its own bespoke parser:
- GCSE: `/api/mark`, `/api/marking/run`, descriptors injected from `mark-schemes/*.ts`.
- IELTS: `/api/ielts/writing-feedback`, `/api/ielts/speaking-feedback`, `/api/ielts/statement-feedback`, descriptors hardcoded as paraphrased prose in the route + `src/lib/ielts/band-descriptors.ts`.
- EAL: `/api/cefr-assess`, descriptors from `src/lib/eal/cefr.ts`.

All three share the same shape (auth → premium → consent → AI-opt-out → rate-limit → content-safety → one `messages.create` → JSON-in-prose parse → audit log) but **none calls a shared engine**. Adding a new area means copying a route.

---

## 2. Target state

One **Marking Engine service** with a **Router** as its front door. The engine is area-agnostic; only the Knowledge Pack changes per area (arch §0). The Router is the *only* component that knows how to turn a raw submission + metadata into a `RoutingDecision` and the subsequent components (Retrieval → Marker → Validator → Feedback) operate purely on `(RoutingDecision, KnowledgePack, submission)`.

### 2.1 The engine façade
A single callable entry — `markSubmission(input): EngineResult` — living in `src/lib/marking/engine/` that internally runs the six components in order. Both existing routes (`/api/mark`, `/api/marking/run`) and the future IELTS route become **thin adapters** that build an `EngineInput`, call `markSubmission`, and shape the HTTP response + persistence. The per-route orchestration (model call, parse, grade) is deleted from the routes and lives once in the engine.

```
EngineInput
  ├─ rawSubmission: { questionText, answerText, studiedText?, taskTypeHint?, areaHint?, levelHint?, packPin? }
  ├─ context:       { userId, source: 'b2c_self'|'b2b_class', locale, isMinor }
  └─ caps:          { allowClarify: boolean }   // UI can opt out of the confirm loop (e.g. batch B2B)

markSubmission(input):
  1. routingDecision = route(rawSubmission, context, caps)      ← §1.1, THIS DOC
       └─ may return { status: 'needs_confirmation', candidates[] } (low-confidence path)
  2. pack            = resolvePack(routingDecision)             ← Knowledge Pack doc (seam A)
  3. context         = retrieve(pack, routingDecision)          ← Retrieval doc (seam B)
  4. raw             = mark(pack, context, submission)          ← Marker doc (seam C)
  5. validated       = validate(raw, submission, pack)          ← Validator doc (seam D)
  6. feedback        = generateFeedback(validated, pack)        ← Feedback doc (seam E)
  → EngineResult { routingDecision, result, provenance{ packVersion, modelVersion, promptVersion } }
```

This doc fully specifies **steps 0–2** (Router + the resolve seam contract) and the data types that cross every seam. Steps 3–6 are owned by sibling docs; this doc only fixes their **input contract**.

### 2.2 The Router (§1.1)

**Job:** Given a submission + metadata, produce `RoutingDecision { area, taskType, level, packVersion, confidence, basis }` — or, when confidence is low, a `NeedsConfirmation` asking the student to pick.

**Inputs:** raw submission text + any caller metadata (area, paper, question, level if known) + a `packPin` override.

**Routing modes (in priority order):**

1. **Explicit / metadata-driven (the common case).** If the caller supplies enough metadata to uniquely identify an area+taskType (UI dropdown "IELTS Writing Task 2"; or a B2B submission row with `exam_board` + `mark_scheme_id` + `rubric_ref`), the Router **trusts it and skips classification**. `confidence = 1.0`, `basis = 'explicit'`. This preserves the existing GCSE behaviour exactly — current callers continue to work unchanged.
2. **Classify-from-text (ambiguous case).** If metadata is missing or partial, the Router classifies `area`, `taskType`, and `level` from the submission itself, using a tiered, cheap-first cascade:
   - **(a) Deterministic heuristics first** (no model call): word count + structure cues, question-text pattern match against registered packs' task descriptors, and — for level — reuse `calculateCEFRLevel` (EAL) and the IELTS objective tables where a recent placement exists. Heuristics that produce a single high-confidence candidate short-circuit the classifier.
   - **(b) LLM classifier fallback** only when heuristics are ambiguous: a small forced-tool call (`classify_submission`) returning ranked `{area, taskType, level, confidence}` candidates. Uses the cheap model tier, not the marker tier.
3. **Pin override.** A `packPin` (e.g. `ielts_writing_v2025.1`) in the input bypasses version resolution (still validates the pin exists and is loadable). `basis = 'pinned'`.

**Confidence gate ("ask the student to confirm", §1.1 / spec §9):**
- Each candidate carries a confidence in `[0,1]`. The Router computes a top-candidate confidence and the **margin** to the runner-up.
- If `topConfidence >= ROUTE_CONFIRM_THRESHOLD` **and** `margin >= ROUTE_MARGIN_THRESHOLD`, route directly.
- Otherwise return `NeedsConfirmation { candidates: top-N (area+taskType+level, human-readable label), reason }`. The engine **does not mark**; the UI asks the student "Is this IELTS Writing Task 2? Or GCSE AQA Paper 2?" The student's pick comes back as **explicit metadata** on the next call → mode 1 → mark.
- If `caps.allowClarify === false` (e.g. server-side B2B batch where no human is in the loop), a low-confidence route does **not** silently guess: it returns a typed `RoutingError('AMBIGUOUS_SUBMISSION')` so the batch flags the item for a human rather than marking it against the wrong pack. (This matches the existing "AI mark is always a draft → teacher_review" posture for B2B.)
- Thresholds live in one config module so they are tunable against the calibration set (arch §8), not scattered as literals.

**Output → seam A (pack resolution, §1.2):** `RoutingDecision` is handed to `resolvePack(decision)`, which:
- resolves by `(area, taskType, level)` → **highest published semver**, unless `packPin` overrides;
- **fails closed**: if no published pack matches, throws `RoutingError('NO_PACK')` — the engine refuses to mark (arch §1.2). This is the single biggest behavioural change vs today's `getMarkScheme(...) ?? null` soft-fail.
- The resolved `packVersion` is threaded into `provenance` and persisted via `versioning-capture` so every historical mark is traceable to its exact ruleset.

**The Router does NOT:** load descriptors/exemplars (Retrieval), call the marker, compute bands, or generate feedback. It stops at "which pack, at what version, and is confidence high enough to proceed."

### 2.3 How an area "plugs in"

An area is fully described by **its Knowledge Pack + a Router registration entry**. To add an area (e.g. IELTS), with **zero changes to engine/router core logic**:
1. Ship a versioned Knowledge Pack (owned by the Pack doc) under `knowledge-packs/<area>/.../<version>/` with a `manifest.json` (area, taskType, level coverage, semver, status, checksum).
2. Add a **Router area descriptor** to a single registry (`src/lib/marking/engine/areas.ts`): `{ area, displayName, taskTypes[], levelScale, classifyHeuristics, resolverKey }`. This is the only place the Router learns a new area exists; the classifier and resolver read from it generically.
3. (If the area needs DB persistence under a new `exam_board`/area value) extend the enum + `marking_submissions` mapping — a Persistence-doc concern, flagged here as a cross-cutting dependency.

No new route is required to *teach the engine* an area; a route is only an HTTP adapter. (IELTS will still get its own route for the distinct request/response shape, but it calls the same `markSubmission`.)

---

## 3. The gap (target − current)

| # | Gap | Current | Target |
|---|-----|---------|--------|
| G1 | No engine façade | Orchestration duplicated inline in 2 GCSE routes + 3 IELTS/EAL routes | One `markSubmission()` the routes adapt to |
| G2 | No Router | `getMarkScheme(id)` opaque lookup, caller-supplied routing | `route()` → `RoutingDecision` with explicit / classify / pin modes |
| G3 | Soft-fail pack lookup | `getMarkScheme(...) ?? null` | `resolvePack()` resolve-by-(area,taskType,level)→highest published, **fail closed** |
| G4 | No version resolution | `version` is optional free text; no semver/published gate | resolve highest published semver, pin override, record `packVersion` in provenance |
| G5 | No confidence-gated confirm | hard `INVALID/OFF_TOPIC` rejects only | `NeedsConfirmation` clarify loop (or typed `AMBIGUOUS_SUBMISSION` when no human in loop) |
| G6 | No `area`/`qualification`/`level` dimension at resolve | board+subject+paper only | area-first routing key; reuse CEFR/IELTS level signals |
| G7 | Model-string inconsistency | `/api/mark` hardcodes literal; `/run` uses `ANTHROPIC_MODEL` | single model source-of-truth, tier per step (classifier=cheap, marker=marker tier) |
| G8 | Areas don't plug in | copy-a-route per area | area registry + pack; engine core untouched |

Out of scope for this doc (other agents): the pack file format & manifest schema; retrieval/exemplar selection; the marker forced-tool schema; validator/evidence/self-consistency/confidence math; feedback rewrites; analytics store. This doc only fixes the **contracts** at those seams.

---

## 4. Ordered build steps

Each step is independently shippable and behaviour-preserving until the cut-over step. **No production behaviour changes** until Step 8.

### Step 1 — Engine types + seam contracts (types only)
- **Files:** create `src/lib/marking/engine/types.ts`.
- **Do:** define `Area`, `TaskType`, `Level` (discriminated by area), `RoutingDecision`, `NeedsConfirmation`, `RoutingError` (typed: `NO_PACK | AMBIGUOUS_SUBMISSION | INVALID_METADATA`), `EngineInput`, `EngineResult`, and the five seam input interfaces (`PackResolveRequest`, `RetrievalRequest`, `MarkRequest`, `ValidateRequest`, `FeedbackRequest`). Re-export existing `MarkScheme`/`MarkingResult` so engine types compose with them rather than fork them.
- **Depends on:** nothing.
- **Acceptance:** `tsc` passes; a unit test imports every type and constructs a fixture of each; no runtime code added; `npm run lint` clean.

### Step 2 — Area registry
- **Files:** create `src/lib/marking/engine/areas.ts`.
- **Do:** define `AREA_REGISTRY: Record<Area, AreaDescriptor>` with one entry for `gcse` (wrapping the existing 20 mark-schemes via `resolverKey`) and a placeholder entry for `ielts` (taskTypes, level scale 0–9). Export `listAreas()`, `getAreaDescriptor(area)`.
- **Depends on:** Step 1.
- **Acceptance:** unit test asserts every registered area has a non-empty `taskTypes`, a `levelScale`, and a `resolverKey`; `gcse` entry resolves to the existing scheme ids; test fails closed if an area lacks a resolver.

### Step 3 — Pack resolver (fail-closed) wrapping existing lookup
- **Files:** create `src/lib/marking/engine/resolve-pack.ts`; **do not modify** `mark-schemes/index.ts` yet.
- **Do:** implement `resolvePack(req: PackResolveRequest): ResolvedPack` that, for `area==='gcse'`, delegates to `getMarkScheme(resolverKey)` and **throws `RoutingError('NO_PACK')` on null** (converting soft-fail → fail-closed at the engine boundary). For `packPin`, validate-and-load. Return `{ packVersion, ... }`. IELTS branch returns `NO_PACK` until the IELTS pack lands (separate doc) — proves fail-closed.
- **Depends on:** Steps 1–2.
- **Acceptance:** unit tests: known GCSE id resolves with a `packVersion`; unknown id throws `NO_PACK` (not null); pin to a non-existent pack throws `INVALID_METADATA`; IELTS (no pack yet) throws `NO_PACK`.

### Step 4 — Router: explicit + pin modes (no classifier yet)
- **Files:** create `src/lib/marking/engine/router.ts`, `src/lib/marking/engine/router-config.ts` (thresholds).
- **Do:** implement `route()` handling **only** mode 1 (explicit metadata) and mode 3 (pin). Explicit GCSE inputs (`{areaHint:'gcse', markSchemeId, questionId}`) produce `RoutingDecision{ basis:'explicit', confidence:1 }`. Missing/ambiguous metadata returns a `NeedsConfirmation` stub (candidates from heuristics added in Step 5).
- **Depends on:** Steps 1–3.
- **Acceptance:** unit tests reproduce today's GCSE routing 1:1 (same scheme chosen for the same request); pin override path covered; invalid metadata → `INVALID_METADATA`.

### Step 5 — Router: classifier cascade + confidence gate
- **Files:** create `src/lib/marking/engine/classify.ts`; extend `router.ts`.
- **Do:** implement (a) deterministic heuristics (word-count/structure/question-text match, CEFR via `calculateCEFRLevel`, IELTS objective level reuse) and (b) the `classify_submission` forced-tool LLM fallback on the cheap tier. Wire the confidence gate: `topConfidence`/`margin` vs `ROUTE_CONFIRM_THRESHOLD`/`ROUTE_MARGIN_THRESHOLD` → route or `NeedsConfirmation`; respect `caps.allowClarify=false` → `AMBIGUOUS_SUBMISSION`.
- **Depends on:** Step 4.
- **Acceptance:** unit tests with stubbed classifier: high-confidence single candidate routes directly; two near-tie candidates return `NeedsConfirmation` with both labels; `allowClarify:false` + low confidence throws `AMBIGUOUS_SUBMISSION`; thresholds read from config, not literals. The LLM fallback is mocked (no live call in unit tests).

### Step 6 — Engine façade wiring (behind a flag, not yet on routes)
- **Files:** create `src/lib/marking/engine/index.ts` (`markSubmission`).
- **Do:** compose `route → resolvePack → retrieve → mark → validate → generateFeedback`. For steps 3–6, **call the existing functions** (`buildMarkingPrompt`, the model call, `generateFeedback`) so GCSE marking is reproduced end-to-end through the engine. Thread `packVersion`/model/prompt versions into `provenance`. Reconcile the model string here to a single source (`ANTHROPIC_MODEL`), with a classifier tier constant — closing G7.
- **Depends on:** Steps 1–5.
- **Acceptance:** an engine-level test marks a known GCSE fixture through `markSubmission` and produces a `MarkingResult` byte-identical (modulo provenance) to the current `/api/marking/run` path; model string asserted to come from one constant.

### Step 7 — Confirm-loop contract test (Router ↔ UI)
- **Files:** create `src/lib/marking/engine/__tests__/confirm-loop.test.ts`.
- **Do:** assert the round-trip: ambiguous input → `NeedsConfirmation` → student pick re-submitted as explicit metadata → mode 1 → marks. Documents the API contract the UI/route layer must honour.
- **Depends on:** Step 6.
- **Acceptance:** the two-call round trip is green; no marking happens on the first (ambiguous) call.

### Step 8 — Cut routes over to the engine (the only behaviour change)
- **Files:** modify `src/app/api/marking/run/route.ts` then `src/app/api/mark/route.ts`.
- **Do:** replace inline orchestration with an `EngineInput` build + `markSubmission` call; map `NeedsConfirmation` → a `409 needs_confirmation` JSON body, `RoutingError('NO_PACK')` → `422`, `AMBIGUOUS_SUBMISSION` → `409`. Preserve every existing gate (auth/premium/consent/opt-out/rate-limit/content-safety) and persistence/draft-status behaviour. Cut `/api/marking/run` first (lower blast radius, already persists + drafts), validate, then `/api/mark`.
- **Depends on:** Steps 6–7.
- **Acceptance:** the existing `smart-ip` route tests (`marking-run-route.test.ts`, etc.) pass unchanged; manual smoke: a GCSE submit produces the same grade as before; an ambiguous B2C submit returns `needs_confirmation` instead of a wrong-pack mark; an unknown scheme returns `422` (fail-closed) instead of a 500/`null` crash.

### Step 9 — Register IELTS area (proves the plug-in seam)
- **Files:** modify `areas.ts` (flip IELTS placeholder to active once the IELTS pack exists); no engine/router core edits.
- **Do:** point the IELTS area descriptor at the IELTS pack `resolverKey`; the IELTS route (separate doc) calls `markSubmission` with `areaHint:'ielts'`.
- **Depends on:** Step 8 + the IELTS Knowledge Pack (other doc).
- **Acceptance:** routing an IELTS request resolves the IELTS pack version and fails closed before the pack ships; after the pack ships, an explicit "IELTS Writing Task 2" request routes with `basis:'explicit'`, `confidence:1`, **with no change to router/engine core** — demonstrating an area plugged in via registry + pack only.

---

## 5. Risks

- **R1 — Fail-closed regressions.** Converting `getMarkScheme(...) ?? null` soft-fail to `resolvePack` throwing `NO_PACK` could turn previously-silent misses into hard 4xx for callers passing stale/wrong ids. Mitigate: keep the throw at the engine boundary, map to a clear `422` with the offending key, and audit existing callers/ids before Step 8.
- **R2 — Classifier accuracy & cost.** A mis-classifying Router marks against the wrong pack — worse than the status quo. Mitigate: heuristics-first (no model cost on the common path), explicit-metadata short-circuit (most real traffic), conservative thresholds tuned against the calibration set, and `allowClarify:false`→flag-for-human for unattended batches. The classifier never *silently* guesses below threshold.
- **R3 — Confirm-loop UX leak.** `NeedsConfirmation` requires UI cooperation; a route that ignores it (treats 409 as error) breaks marking. Mitigate: contract test (Step 7), `caps.allowClarify` opt-out so non-interactive callers get a deterministic error not a stuck flow, and a default of routing-direct whenever metadata is explicit (today's callers never hit the loop).
- **R4 — Model id / effort tier mismatch (spec build note ~268–273).** Spec names `claude-sonnet-4-6 @xhigh` + `claude-opus-4-8`; live SDK 0.90.0 standardises on `claude-sonnet-4-20250514` with no effort-tier param. The Router needs a *classifier* tier too. Mitigate: Phase 0 confirms the exact callable id before Step 6; introduce `MARKING_MODELS = { classifier, marker, escalation }` constants rather than literals; do not hardcode `claude-sonnet-4-6` or an `effort` field until verified.
- **R5 — Two persistence behaviours.** `/api/mark` does not persist; `/api/marking/run` does. The engine must not force persistence on the B2C inline path. Mitigate: persistence stays a route-adapter concern *after* `markSubmission` returns; the engine returns provenance but does not write rows.
- **R6 — Type fork between engine and existing `MarkingResult`.** A parallel result type would split the codebase. Mitigate: engine types **compose** existing `MarkScheme`/`MarkingResult` (re-export, extend with `routingDecision`+`provenance`) rather than replacing them; the IELTS-shaped result is added as a discriminated variant by the Marker/Validator docs, not here.
- **R7 — Level signal staleness.** Reusing `calculateCEFRLevel`/IELTS placement for the `level` dimension assumes a recent placement exists; a stale level mis-selects exemplar retrieval. Mitigate: treat level as a *soft* input to Retrieval (nearest-band), never as a hard gate in the Router; absence of a level signal lowers confidence (may trigger confirm), it does not block routing.
- **R8 — Scope creep across seams.** This doc defines contracts for Retrieval/Marker/Validator/Feedback that those docs must honour; divergence breaks `markSubmission`. Mitigate: the seam interfaces live in `engine/types.ts` as the single source of truth; sibling docs import them.
