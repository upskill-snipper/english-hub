# 12 — Design: Retrieval Layer (§1.3)

**Component:** Retrieval (Grounded Marking Engine, architecture §1.3).
**Scope of this doc:** the IELTS Writing Task 2 (WT2) MVP retrieval layer, designed to generalise to other packs later.
**Status:** design only — no code in this phase.
**Traces to:** `00-architecture-source.md` §1.2 (Knowledge Pack), §1.3 (Retrieval), §1.4 (Marker), §2 ("Anchor, don't free-float" / structured output), §8 (build sequence, drift); `01-ielts-writing-task2-spec.md` §1 (assemble user message, inject descriptors + exemplars from pack), §2 (cache the stable system block), §4 (forced tool schema), §6 (self-consistency), §9.1 (Knowledge Pack loader), build notes (model strings).

---

## 0. What "Retrieval" means here (and what it is NOT)

Architecture §1.3 defines Retrieval narrowly:

> For each submission, pull only the relevant descriptors (the criteria for that task) and the nearest exemplars (e.g. bands around where the essay seems to land) into context.

So Retrieval makes exactly two selections from the loaded Knowledge Pack:

1. **Descriptor selection** — which rubric / band-descriptor text goes into the marker prompt.
2. **Exemplar selection** — which *graded sample answers* go in as calibration anchors (the §2 "anchor, don't free-float" lever, called "one of the single biggest levers on marking accuracy and consistency").

For a single well-scoped task like IELTS WT2, the rubric is **small enough to include whole**, so descriptor selection is trivial and **exemplar (nearest-band) selection is the only part that needs real logic**. The spec's example is explicit: "showing the model what a band 6 vs band 7 response actually looks like." This design keeps the entire MVP retrieval layer as **deterministic in-memory lookup over a versioned pack** — no DB, no vector store, no embeddings (justified in §2.6).

Retrieval is **pure and stateless**: `(KnowledgePack, submission, opts?) -> RetrievalResult`. It does not call persistence, does not call the model to mark, and does not decide the final band. It only pre-positions the grounding/anchors. The Router (§1.1, separate doc) has already chosen the pack; the Knowledge Pack loader (§1.2, separate doc) has already loaded it; the Marker (§1.4, separate doc) consumes the blocks Retrieval returns.

---

## 1. Current state in THIS codebase

There is **no retrieval layer**, and there is **no exemplar data anywhere in the repo**. Context is assembled by wholesale injection in three places.

### 1.1 GCSE path (`src/lib/marking/prompt-builder.ts`) — the closest analogue
- `buildMarkingPrompt()` (line 44) builds the system prompt by mapping **every** Assessment Objective and, inside `formatAOForPrompt` (line 129) → `formatBandForPrompt` (line 139), **every** band of the selected `QuestionScheme` into the prompt. There is **no selection** — the whole AO/band grid is dumped in.
- It returns `cacheKey = ${scheme.id}:${question.id}` (line 52) which is an **identity/log key only** — no Anthropic `cache_control` is emitted, so the stable rubric block is re-sent uncached on every call (§2 "cache the system block" is unmet).
- **Zero exemplars** in the data layer. `BandDescriptor.indicators[]` are short bullets, not graded sample answers; `AOScore.evidence` is a runtime quote from the marked essay, not a stored anchor.

### 1.2 Live IELTS path (`src/app/api/ielts/writing-feedback/route.ts`)
- The route holds `TASK2_DESCRIPTORS: Record<WritingCriterion, string>` (line ~170) — a **per-criterion map of band-listing prose** (e.g. "- Band 6: … / - Band 7: …" for each of TR/CC/LR/GRA). It injects the **entire** map wholesale into a prose system prompt (the `.map((c) => descriptors[c.key])` join at line ~225). No selection, **no exemplars**.
- The descriptor prose is explicitly "original, paraphrased IP (NOT the official public band descriptors copied verbatim)" (route comment lines 23–24) — the correct posture to preserve (§8 copyright caution).
- `src/lib/ielts/band-descriptors.ts` does **not** hold per-band descriptor data — it only holds criterion *labels/summaries* (`WRITING_TASK2_CRITERIA`, line 19) and a `BAND_SUMMARY` learner-facing one-liner per whole band (line 91). The actual band-descriptor prose lives inside the route.
- `src/lib/ielts/bands.ts` already implements `overallBand()` (line 124) with the **exact** IELTS half-band rounding the spec §5 requires, plus `roundToBand()` (line 105) and the valid `BAND_STEPS` array. These belong to the Validator, but Retrieval **reuses `roundToBand`** for the cheap first-pass estimate (§2.4).

### 1.3 Infrastructure facts that shape this design
- **No embeddings, no pgvector, no vector store** anywhere in `src/`, `prisma/schema.prisma`, or `supabase/` (confirmed by repo-wide search for `embedding|pgvector|vector(`). Any vector work would be greenfield — which makes "simplest thing that works" the obvious MVP choice.
- **No `knowledge-packs/` directory** and **no exemplar/anchor files** exist (confirmed by directory listing and `*exemplar*`/`*anchor*` search).
- Versioning scaffolding exists (`src/lib/marking/versioning-capture.ts` content-hashes model/prompt/rubric versions). Retrieval must surface a `packVersion` so the captured `rubric_version` reflects the exact pack used (provenance, §2 "version every pack").

---

## 2. Target state

A small, pure, deterministic **Retrieval module** for IELTS WT2 that, given the loaded Knowledge Pack and a submission, returns exactly the context blocks the marker needs, plus a budget report and provenance:

```
selectMarkingContext(pack, submission, opts?) -> {
  rubricBlock:        string             // ALL four criteria descriptors (whole rubric)
  exemplarBlock:      string             // nearest-band exemplars only (1–3 scripts)
  firstPassEstimate:  { band, source }   // the cheap estimate that drove exemplar selection
  packVersion:        string             // e.g. "ielts_writing_v2025.1" — for provenance
  budget:             BudgetReport       // token accounting + any trimming applied
}
```

These map onto the spec §2 prompt placeholders: `rubricBlock` fills `{{BAND_DESCRIPTORS}}`, `exemplarBlock` fills `{{EXEMPLARS}}`.

### 2.1 Descriptor selection — include the WHOLE rubric
Per §1.3, the WT2 rubric is tiny (4 criteria × ~6 bands × 1–2 sentences ≈ well under 2k tokens). **Do not** sub-select descriptors by criterion or by estimated band. Inject all four criteria's full band tables every time. Rationale:
- Narrowing descriptors to the estimated band would save almost nothing and would **introduce anchoring bias** toward a first-pass estimate that is itself cheap/approximate — the marker should be free to award above or below it.
- The whole rubric keeps the marker grounded across the full 0–9 scale and lets it disagree with the chosen exemplars.
- A whole, stable rubric block is **cacheable** (§2.5), which selective injection would defeat.

Descriptor "selection" is therefore just: emit `pack.rubric` in full. The only retrieval work that matters is exemplars.

### 2.2 Pack must carry criterion-specific descriptors (data dependency, not retrieval logic)
The target IELTS Knowledge Pack (its schema is owned by the Knowledge-Pack design doc; this doc only **consumes** it) must hold **per-criterion** band descriptors so the rubric block reads as four distinct criterion tables (TR/CC/LR/GRA). The current `TASK2_DESCRIPTORS` is already a per-criterion map, so the data shape exists — it just needs to move out of the route into the versioned pack. Retrieval consumes `pack.rubric.criteria[name].bands[]`; it does not author the descriptor text.

### 2.3 Exemplar selection — nearest-band anchoring (the core of this layer)
- Each pack ships an **exemplar bank**: a small set of graded WT2 scripts, each tagged with its overall band (and, ideally, per-criterion bands), plus a one-line examiner rationale and a `sourceTag`. MVP target: ~2 scripts per whole band across bands 5–8 (the realistic learner range), ~8 scripts total. These are **own-IP / expert-marked or licensed** scripts (§8), never copyrighted official scripts.
- Given a cheap **first-pass band estimate** `b̂` (§2.4), select the **nearest-band exemplars**: the exemplar(s) at `round(b̂)` **and** at `round(b̂)+1` — the band the marker is most likely deciding between, plus a concrete "what the next band up looks like" anchor (which also feeds Feedback §7 "show a better version"). This is exactly the spec's "band 6 vs band 7" framing.
- **Cap at the 1–2 nearest bands → at most 2–3 scripts.** Never inject the whole bank.
- **Fallbacks:** if `b̂` is at the top of the available range (e.g. estimate 8 with no band-9 exemplar), select `b̂-1` and `b̂` so two anchors still bracket the decision. If the bank has no exemplars for the needed bands, emit no exemplar block and set `budget.exemplarsOmitted = true` — the marker still works descriptor-grounded; the omission is logged for calibration.

### 2.4 First-pass estimate — cheap, NO extra model call
"Nearest band" must be estimated **cheaply**, *before* the expensive marking call, without paying for a second model call. Options in MVP preference order:

1. **No-LLM heuristic estimate (chosen for MVP).** Compute a coarse band from signals available in code with no model:
   - word count vs. the 250-word WT2 expectation (under-length strongly caps the band — mirrors the spec's integrity check);
   - lexical diversity (type/token ratio) and mean sentence length as a rough LR/GRA proxy;
   - paragraph count and discourse-marker hits as a coarse CC proxy.
   Map these through a small fixed threshold table **carried by the pack** (`pack.estimator`) to a conservative band clamped to **4–8**, then `roundToBand` (reuse `src/lib/ielts/bands.ts`). It only needs to land within ±1 band to pick useful anchors; the marker re-decides from scratch.
2. **Single cheap band-only model call (fallback / future, config-gated).** If calibration (§5 step 7) shows the heuristic too noisy, replace it with one low-token call ("return only a single integer overall band 0–9, no rationale"). Far cheaper than marking. MVP ships heuristic-only.

The estimate is **never shown to the user, never persisted as a mark, never passed to the marker as a "suggested band."** It exists solely to select anchors. Record `firstPassEstimate.source` (`'heuristic' | 'cheap-model'`) for calibration.

### 2.5 Prompt-size budget
Design targets for the WT2 marker call (numbers to verify in calibration, not hard SDK limits):

| Block | Target | Cacheable? |
|---|---|---|
| System: persona + instructions + forced-tool schema | ~1.0k tok | yes (stable across all WT2 calls) |
| System: full rubric (4 criteria × bands) | ~1.5–2.0k tok | yes (stable per pack version) |
| System: exemplar block (1–3 nearest-band scripts + rationale) | ≤ **1.2k tok** | **no** — varies per submission |
| User: task prompt (question) | ≤ 0.3k tok | no |
| User: candidate essay | ≤ 1.2k tok | no |
| **Total marker input** | **~5–6k tok** | tokens are not the constraint; *relevance* is |

Budget rules Retrieval enforces:
- **Hard cap on the exemplar block** (default 1200 tokens, pack-overridable via `opts.exemplarTokenCap`). If the nearest-band exemplars exceed it: first trim to the single nearest-band exemplar; if still over, truncate each exemplar's essay body (keep its band tag + rationale intact) and set `budget.exemplarTrimmed = true`.
- **Cache-boundary discipline (§2 "cache it — it's stable").** The cacheable prefix = persona + instructions + tool schema + **full rubric** (all stable per pack version). The exemplar block is **submission-specific** (depends on `b̂`) and must therefore sit **after** the `cache_control` breakpoint (or in the user turn) so it never invalidates the cached rubric prefix. **Retrieval returns `rubricBlock` and `exemplarBlock` as two separate strings precisely so the prompt assembler can place the cache breakpoint between them.**
- Token counting for the budget report uses a cheap `chars/4` approximation for MVP (no SDK token-counter dependency). Exact counting can be added if calibration shows the approximation drifting.

### 2.6 When simple lookup suffices vs. when embeddings/vector search is justified
**MVP and well beyond it: simple deterministic lookup is sufficient. Prefer the simplest thing that works.**
- The selection key is `band` (optionally `(criterion, band)`) over a bank of <20 exemplars. An in-memory `Map<band, Exemplar[]>` built once per pack load answers every query in O(1). Embeddings would add a model dependency, a vector store, index maintenance, and **non-determinism** (hurting consistency §0.18 "scoring the same essay differently on two runs" and §8 drift reproducibility) for **zero** benefit at this scale.

**Embeddings / vector search become justified ONLY when ALL of these hold (revisit at §8-step-6 "expand to more boards"):**
1. Exemplar banks grow large (hundreds+ per pack) — e.g. broad GCSE Literature with many set texts, or pooled multi-exam banks.
2. Selection needs **semantic** matching beyond band — e.g. "find the exemplar whose argument structure / topic most resembles this essay." For IELTS WT2 the *band* is the only axis that matters, so semantic search adds nothing.
3. A reusable retrieval-augmentation need appears elsewhere that would amortise the infrastructure (e.g. retrieving relevant micro-lessons for Feedback §3/§7).

Until then, keep the `Exemplar` shape and the `selectExemplars()` boundary stable so a vector-backed implementation can be swapped in later **behind the same interface**, without touching the marker or orchestrator.

---

## 3. How it fits the marking flow

### 3.1 Cheap inputs for `b̂` (no extra model call)
`wordCount`, `paragraphCount`, type/token ratio, mean sentence length, discourse-marker hits — all computable in code from the essay string. The pack supplies the threshold table mapping these to a coarse band.

### 3.2 Two-call orchestration (owned by the Marker orchestrator; shown for context)
1. `selectMarkingContext(pack, submission)` → compute `b̂` (heuristic) → select nearest-band exemplars → return `rubricBlock` + `exemplarBlock` + `budget` + `packVersion`.
2. Assemble marker prompt: `[cached: persona + instructions + toolSchema + rubricBlock] [cache breakpoint] [exemplarBlock] [user: task prompt + essay]`.
3. Forced-tool marker call (spec §4) → Validator (spec §5) → Feedback (spec §7). Those are separate components/docs.

Retrieval runs once per marking attempt. For self-consistency (spec §6, 3× marking), the **same** `RetrievalResult` is reused across the 3 runs — the anchors must be identical so the runs are comparable.

---

## 4. The gap (current → target)

| Aspect | Current | Target |
|---|---|---|
| Descriptor selection | Whole AO/band grid dumped (GCSE) / whole `TASK2_DESCRIPTORS` map dumped (IELTS) with no module boundary | Explicit `rubricBlock` (whole rubric, by design) returned from a pure retrieval fn |
| Exemplar anchoring | **None anywhere in the repo** | Nearest-band exemplar selection from a versioned bank |
| "Nearest band" estimate | n/a | Cheap no-LLM heuristic (`b̂`), pack-tunable, optional cheap-model fallback |
| Descriptor location | Inside the route / GCSE data modules | Consumed from the versioned pack (`pack.rubric`) |
| Prompt-size budget | Unbounded; whole grid always sent | Explicit budget + exemplar hard cap + trim logic + `BudgetReport` |
| Cache boundary | `cacheKey` is log-only; no `cache_control` | Rubric/exemplar blocks returned **separately** so the assembler caches the rubric and not the exemplars |
| Vector/embeddings | None (correct for MVP) | Stay simple; documented trigger conditions for later |
| Provenance | Pack version not surfaced to retrieval | Retrieval returns `packVersion` for `versioning-capture` |

---

## 5. Ordered build steps

> No code is written in this phase. Tests use Vitest (`*.test.ts`, jsdom default). All steps below are **pure unit logic** (no Prisma/live DB), so none need `@vitest-environment node`.

### Step 1 — Define retrieval types + Exemplar shape
- **Files:** `src/lib/marking/ielts/retrieval/types.ts` (new).
- **Content:** `Exemplar { id; overallBand; perCriterionBands?; essay; rationale; sourceTag }`; `RetrievalResult` (per §2); `BudgetReport { estTokens; exemplarTokens; exemplarTrimmed; exemplarsOmitted; cacheableTokens }`; `FirstPassEstimate { band; source: 'heuristic' | 'cheap-model' }`; `RetrievalOptions { exemplarTokenCap?; forceEstimateSource? }`. Import the IELTS criterion types from `src/lib/ielts/types` rather than redefining.
- **Acceptance:** `tsc` passes; types referenced by later steps compile; no runtime code yet.
- **Depends on:** Knowledge-Pack design doc's pack schema. If not finalised, define a minimal local `KnowledgePackView` interface (`{ version; rubric; exemplars; estimator }`) that the real pack will satisfy.

### Step 2 — Cheap first-pass band estimator
- **Files:** `src/lib/marking/ielts/retrieval/estimate-band.ts` (new); reuse `roundToBand` from `src/lib/ielts/bands.ts`.
- **Content:** `estimateFirstPassBand(essay, packEstimator): FirstPassEstimate` — pure, **no model call**. Computes word/paragraph counts, TTR, mean sentence length, discourse-marker hits; maps via the pack's threshold table to a band clamped to 4–8; `source: 'heuristic'`.
- **Acceptance:** `estimate-band.test.ts` — an under-length essay (<250 words) caps the band low; a long, lexically diverse, well-paragraphed essay estimates ≥7; output is always an integer 4–8; deterministic (same input → same output); the module imports no Anthropic client / network.
- **Depends on:** Step 1.

### Step 3 — Nearest-band exemplar selector
- **Files:** `src/lib/marking/ielts/retrieval/select-exemplars.ts` (new).
- **Content:** build `Map<band, Exemplar[]>` from `pack.exemplars`; `selectExemplars(bank, b̂): Exemplar[]` returns exemplars at `round(b̂)` and `round(b̂)+1` (top-of-range fallback to `b̂-1`,`b̂`; empty-bank → `[]`); cap to ≤3, preferring the two nearest bands.
- **Acceptance:** `select-exemplars.test.ts` — estimate 6 → band-6 and band-7 exemplars (matches the spec example); estimate 8 with no band-9 → band-7 and band-8; empty bank → `[]` with no throw; never returns >3.
- **Depends on:** Steps 1–2.

### Step 4 — Budget + block formatting (with cache-boundary separation)
- **Files:** `src/lib/marking/ielts/retrieval/format-blocks.ts` (new).
- **Content:** `formatRubricBlock(pack.rubric)` (all four criteria, full bands) and `formatExemplarBlock(exemplars, cap)` (band tag + rationale + essay body, trimmed to the token cap, keeping band/rationale on trim). `chars/4` token approximation. Returns the `BudgetReport`. **Two separate strings** so the assembler can put a cache breakpoint between them.
- **Acceptance:** `format-blocks.test.ts` — rubric block contains all four criterion names and every band; an oversized exemplar set is trimmed and sets `exemplarTrimmed`; `BudgetReport.exemplarTokens ≤ cap`; the rubric block is byte-identical for the same pack version (cache-stability invariant).
- **Depends on:** Steps 1, 3.

### Step 5 — Public `selectMarkingContext` orchestration fn
- **Files:** `src/lib/marking/ielts/retrieval/index.ts` (new).
- **Content:** compose Steps 2–4: `selectMarkingContext(pack, submission, opts?) -> RetrievalResult`; populate `packVersion` from `pack.version`; pure, no I/O.
- **Acceptance:** `retrieval.index.test.ts` — given a fixture pack + a mid-band essay, returns the whole rubric + the two nearest-band exemplar scripts + a populated budget + the correct `packVersion`; given an empty exemplar bank, returns rubric only with `exemplarsOmitted = true`; performs **zero** network/model calls (Anthropic client not imported anywhere in the retrieval dir — assert by test + import inspection).
- **Depends on:** Steps 2–4.

### Step 6 — Wire into the IELTS marker prompt assembler (consumer; coordinate with Marker doc)
- **Files:** the new IELTS marker prompt assembler (e.g. `src/lib/marking/ielts/prompt-builder.ts`) — **consumes** `rubricBlock`/`exemplarBlock`. This doc specifies only the retrieval boundary; the forced-tool call is the Marker component's responsibility. **Do NOT modify `src/lib/marking/prompt-builder.ts` (GCSE)** — IELTS is greenfield beside it per spec build notes.
- **Content:** place the `cache_control` breakpoint after the rubric block; the exemplar block goes after the breakpoint (or in the user turn).
- **Acceptance:** assembler unit test confirms the cached prefix **excludes** the exemplar block and is identical across two submissions that share a pack version but differ in `b̂`.
- **Depends on:** Step 5 + Marker design doc.

### Step 7 — Calibration hook for anchor quality
- **Files:** extend the eval harness under `evals/` (and/or `src/lib/marker-qa/`); add IELTS WT2 fixtures under `evals/`.
- **Content:** record `firstPassEstimate.band` vs. the marker's final overall band on the golden set, to measure heuristic accuracy (target: within ±1 band ≥ ~85% — enough to pick good anchors). If the heuristic underperforms, flip the pack flag to the cheap-model estimator (§2.4 option 2).
- **Acceptance:** the harness emits an estimate-vs-final agreement number on the golden set; feeds the §8 drift watch.
- **Depends on:** Steps 5–6 + the IELTS Knowledge Pack exemplar bank existing.

---

## 6. Risks

- **Exemplar copyright (§8).** Official IELTS scripts are copyrighted (British Council / IDP / Cambridge). Mitigation: own-IP / expert-marked or licensed exemplars only, each `sourceTag`-labelled, mirroring the existing "original paraphrased IP" posture in `writing-feedback/route.ts`. Retrieval must never embed copyrighted scripts.
- **Anchoring bias from a wrong `b̂`.** A bad first-pass estimate selects the wrong anchors and could nudge the marker. Mitigations: (a) always include the band-above anchor so two bands bracket the decision; (b) keep the **whole** rubric in context so the model can disagree with the anchors; (c) never reveal `b̂` to the marker as a "suggested band"; (d) calibrate `b̂` accuracy (Step 7) and escalate to the cheap-model estimator if needed.
- **Exemplar bank too small / missing bands.** With ~8 scripts, some band pairs may be thin. Mitigation: graceful fallback (§2.3) + `exemplarsOmitted` flag; the marker stays descriptor-grounded. Grow the bank during calibration (§8 step 2).
- **Cache-boundary mistake re-sends the rubric every call.** If the assembler accidentally places the submission-specific exemplar block *before* the cache breakpoint, the stable rubric prefix is invalidated on every call (cost + latency). Mitigation: Retrieval returns the blocks **separately** and the assembler test (Step 6) asserts the cached prefix excludes exemplars.
- **Premature embeddings.** Reaching for a vector store now adds infra, non-determinism (hurts consistency §0 and drift reproducibility §8), and a model dependency for no MVP gain. Mitigation: documented trigger conditions (§2.6); keep the `selectExemplars` interface swappable.
- **Token-budget approximation drift.** `chars/4` estimates can diverge from real tokenisation. Low stakes at ~5–6k total (far from limits), but if exemplar trimming becomes load-bearing, switch to exact token counting.
- **Descriptor data debt.** The pack must supply criterion-specific descriptors. The shape already exists (`TASK2_DESCRIPTORS` is a per-criterion map) but must move from the route into the versioned pack; if it ships generic/duplicated, the rubric block degrades. Flagged here as a Knowledge-Pack dependency.
