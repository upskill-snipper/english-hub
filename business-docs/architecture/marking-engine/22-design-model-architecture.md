# Model Architecture — the model layer of the grounded Marking Engine

> **Resolves OQ-1 (model strings).** The founder's instruction (2026-05-29):
> "design me the best new system rather than Sonnet 4 — I'll provide whatever
> is needed." So this doc designs the *optimal* model layer (not constrained to
> the currently-pinned `claude-sonnet-4-20250514`), behind a single swap-point,
> and ends with the exact provisioning list the founder fulfils.

---

## 0. The one principle that makes this safe to upgrade

**Model ids are configuration, never code.** Every model call in the engine
resolves its model id + parameters from **one** typed constant, `MARKING_MODELS`
(built in Phase-0 `src/lib/marking/engine/models.ts`). No route, marker, judge,
or feedback module ever names a model string inline. Consequence: swapping
Sonnet→Opus, raising thinking budget, or adopting a new model release is a
**one-file change**, re-validated against the calibration set — not a rewrite.

This is *why* the grounded architecture (doc 00 §0) lets us do this freely: the
rubric lives in the Knowledge Pack and the prompt, not in the weights, so a
model upgrade changes *judgement quality*, never *what the rubric is*. We can
always roll a model back and the marks stay defined.

---

## 1. Roles need different models — one model everywhere is the mistake

The engine makes six distinct kinds of model call. They have opposite
requirements, so they get different tiers. Capability matters most where
*judgement* happens (marking, calibration), least where the task is mechanical
(routing). Spending Opus tokens on routing is waste; spending Haiku tokens on
marking is the cardinal sin (IELTS §1: *never mark on Haiku*).

| Role | What it does | Hardness | Tier | Why |
|------|--------------|----------|------|-----|
| **Router / classifier** | Tag board + task-type + level; load the right pack | Easy, high-volume | **Fast/cheap** (Haiku-class) — *and* heuristics-first so most calls cost £0 | A wrong rubric is catastrophic, but the *classification* is easy; pair a cheap model with rules + a "confirm rather than guess" gate (doc 10). |
| **Marker (primary)** | Criterion-by-criterion grounded mark, forced tool-use, evidence-cited | **The hardest task in the system** | **Strongest production model at high reasoning effort** | Multi-criterion rule-following judgement is exactly where capability buys accuracy + consistency + lower confabulation. This is where the money goes. |
| **Escalation re-mark** | Re-mark borderline/flagged/low-confidence scripts | Hardest, low-volume | **Highest available model, max thinking** | Only fires on the ~5–15% of scripts the validator flags, so cost is bounded. The strongest model resolves the genuinely hard ones. |
| **Self-consistency runs** | N parallel marks on high-stakes scripts to measure spread | Hard, bounded | **Same as marker** (N copies) | Agreement across runs is the signal; must be the marker tier to be meaningful. |
| **Feedback generator** | Turn the *validated* mark into teaching prose | Medium (it's writing, grounded in a fixed mark) | **Mid tier** (Sonnet-class) | The hard judgement is already done + validated; this is constrained generation. Mid tier is plenty and keeps latency/cost down. |
| **Calibration judge** (optional) | Compare AI mark vs human mark / adjudicate exemplar disagreements | Hard, offline | **Highest model** | It's the trust anchor; runs offline/nightly so latency is irrelevant — use the best. (Primary calibration is still AI-vs-*human*; the judge only assists triage.) |
| **Speaking: ASR** (§6, deferred) | Transcribe audio | Specialist | **Whisper-class ASR**, not an LLM | Different modality; the LLM marks the *transcript*, not the audio. |
| **Speaking: pronunciation/fluency** (§6, deferred) | Phoneme scoring, fluency metrics | Specialist acoustic | **Dedicated acoustic model** | The one place a specialist model is right from day one (doc 00 §6). |

---

## 2. The recommended model assignment (the "best system")

Target tiers, with the **candidate Claude ids** to confirm callable on the
production key. Where an id is unconfirmed, the abstraction defaults it safely
and the provisioning list (§7) is what makes the strong id live.

```ts
// src/lib/marking/engine/models.ts  — the SINGLE swap-point (target state)
export const MARKING_MODELS = {
  // Routing: cheapest fast model; most calls never reach it (heuristics first).
  classifier: { id: HAIKU_ID,  thinking: 'none',   maxTokens: 256 },

  // Primary marker: strongest *production* model, high reasoning effort.
  marker:     { id: SONNET_ID, thinking: 'high',   maxTokens: 8000, temperature: 0.2 },

  // Escalation / borderline re-mark: the strongest model available, max thinking.
  escalation: { id: OPUS_ID,   thinking: 'max',    maxTokens: 12000, temperature: 0.2 },

  // Feedback: mid tier; the judgement is already validated upstream.
  feedback:   { id: SONNET_ID, thinking: 'low',    maxTokens: 4000, temperature: 0.4 },

  // Calibration judge: best model, offline, latency irrelevant.
  judge:      { id: OPUS_ID,   thinking: 'high',   maxTokens: 8000, temperature: 0.0 },
} as const
```

**Recommended concrete assignment** (pending §7 confirmation on the prod key):

- `classifier` → **Claude Haiku (latest)** — fast, cheap, routing only.
- `marker` → **Claude Sonnet (latest, e.g. Sonnet 4.5/4.6)** at **high extended-thinking** — the workhorse; best capability-per-cost for the high-volume judgement task.
- `escalation` → **Claude Opus (latest, e.g. Opus 4.x)** at **max thinking** — only for flagged scripts.
- `feedback` → **Claude Sonnet** at low thinking.
- `judge` → **Claude Opus** offline.

> **Why Sonnet-primary, Opus-escalation rather than Opus-everywhere?** Marking is
> high-volume; Opus on every script is expensive and slower with marginal
> accuracy gain *once grounded* on rubric + exemplars. The grounded design means
> Sonnet-at-high-thinking already marks against the *real* descriptors — Opus
> earns its cost only on the genuinely borderline minority, which the validator
> identifies precisely. If a future calibration run shows Sonnet-primary missing
> the within-half-band floor, the swap-point makes "promote marker to Opus" a
> one-line change — re-validated, reversible. **We let the calibration data, not
> a guess, decide the final tier.**

---

## 3. Parameters that matter as much as the model

The model id is half the system. These are the other half, all set per-role in
`MARKING_MODELS`:

- **Extended thinking (reasoning effort).** Marking is exactly the deliberative,
  multi-step judgement extended thinking is built for. Marker = high, escalation
  = max, feedback = low, routing = none. This is a bigger accuracy lever than
  Sonnet-vs-Opus for this task.
- **Forced tool-use (`tool_choice`).** The marker is *forced* to emit the
  structured assessment tool (IELTS §4) — output can't drift to prose. Confirm
  the SDK version supports forced tool-use + thinking together (§7).
- **Temperature.** Low-but-nonzero (≈0.2) on the marker so self-consistency runs
  are meaningfully comparable (true 0.0 makes N runs identical and the
  agreement signal meaningless — doc 15). Feedback slightly higher (≈0.4) for
  natural prose. Judge at 0.0 (determinism for calibration).
- **Prompt caching.** The system prompt + the *stable rubric prefix* of the
  Knowledge Pack are cached; only the per-submission essay + nearest exemplars
  vary (doc 12, cache-boundary risk R-CACHE). On a high-volume marker this is
  the single biggest cost reduction — often the difference between viable and
  not. **Exemplars must sit *after* the cache breakpoint** or every call
  re-pays for the rubric.
- **max_tokens** sized per role (marker needs room for criterion-by-criterion +
  evidence; routing needs almost none).

---

## 4. Fallback + resilience tiering

Marking children's work cannot hard-fail silently. The model layer degrades
gracefully, in order:

1. **Primary marker** (Sonnet @ high) → if the API errors/times out →
2. **Retry once** (bounded, via the inherited `getAnthropicClient()` retry) →
3. **Escalation model** (Opus) as a *capability* fallback for flagged scripts →
4. **If still no valid, validated mark → route to human review**, never show a
   guessed mark. (This is the validator's job, doc 14 — the model layer just
   feeds it.)

Every tier routes through the **single `getAnthropicClient()`** so the
no-training / minimisation posture is inherited and there's never a bespoke
client (plan DP-7).

---

## 5. What this is NOT (honouring doc 00 §0)

- **Not** per-board fine-tuned small models. The architecture settled this:
  grounding + retrieval gives the specialist-per-board *experience* with lower
  hallucination and same-day updatability. Fine-tuning is a *much-later*
  cost/latency optimisation (doc 00 §8 step 8), only after thousands of
  human-marked submissions, and *still* grounded via retrieval for facts.
- **Not** a single model for every role.
- **Not** model ids hardcoded anywhere but `models.ts`.

---

## 6. Migration path (safe, reversible, calibration-gated)

1. **Phase-0 today:** `MARKING_MODELS` ships with all tiers defaulting to the
   one confirmed-callable id (`claude-sonnet-4-20250514`) so the build is never
   blocked. (Already specced; the parallel Phase-0-foundations workflow builds
   this file.)
2. **On provisioning (§7):** flip the constants to the real per-role ids. One
   file. No other code changes.
3. **Before any tier goes live to learners:** run the calibration harness
   (Phase 6) on the new triple; the fail-closed `assertCalibrationGreen` gate
   (G-LIVE) refuses to promote a model triple that doesn't clear the
   within-half-band floor. **A model change can never silently degrade marks** —
   the gate catches it.
4. **Rollback** = revert the one-line id change; marks stay defined because the
   rubric is in the pack, not the weights.

---

## 7. PROVISIONING LIST — what the founder provides

Give me these and I wire the strong system in (one file + re-calibration):

### A. The callable model ids (the core answer to OQ-1)
For the **production Anthropic account/key**, confirm the exact callable model
strings for each tier (the latest available on your account at build time):
- [ ] **Marker (Sonnet-class):** the latest Sonnet id callable on the prod key
      (e.g. `claude-sonnet-4-5-…` / `4-6` — whatever your account actually
      serves). *This is the most important one.*
- [ ] **Escalation + Judge (Opus-class):** the latest Opus id callable on the
      prod key (e.g. `claude-opus-4-…`). If none is available on the prod key
      yet, escalation defaults to the marker model and we note it.
- [ ] **Classifier (Haiku-class):** the latest Haiku id (routing only).
- [ ] Confirm **extended thinking** and **forced `tool_choice`** are both
      enabled for these ids on your account/plan.

> I will **not invent** a model id. If you paste the ids your account serves (or
> confirm "use whatever the SDK's latest aliases resolve to"), I wire them
> exactly. The earlier session ran on an `opus-4-8` tool alias — that confirms
> strong models exist in *this* tooling, but the **production app key** is a
> separate fact only you can confirm.

### B. SDK + access
- [ ] Authorise upgrading **`@anthropic-ai/sdk`** from the pinned `^0.90.0` to
      the latest (needed if a newer model id or thinking/tool-use combo requires
      it). I'll do the upgrade + run the full regression suite; you just approve
      the bump. *(Also: the current `package.json` has a duplicated/garbled
      dependency block — I'll clean that in the same PR.)*
- [ ] Confirm the **rate limits / spend tier** on the prod key are enough for:
      marker (high-volume, cached prefix) + bounded Opus escalation + nightly
      calibration runs. Rough cost model below.
- [ ] An **`ANTHROPIC_API_KEY`** with access to all three tiers (you likely
      already have this; just confirm the tiers).

### C. Optional, for the strongest possible system (later phases)
- [ ] **Speaking (deferred, §6):** a Whisper-class ASR provider + a
      pronunciation/fluency model — only when speaking ships.
- [ ] **Embeddings provider** *if* retrieval (doc 12) outgrows simple lookup and
      needs vector search for nearest-exemplar selection. (Start without; add
      only if the exemplar bank gets large.)

### D. The non-model long-pole (still the real gate — from OQ-7)
The model layer is the *easy* upgrade. The thing that actually determines mark
quality is **exemplars + a calibration set**: ≥50 expert-marked IELTS essays
(bands 4–9) + ≥1 expert-marked exemplar per band, from a credentialled IELTS
marker. **No model, however strong, hits examiner-grade without these** — the
exemplars are the anchors and the calibration set is the proof. Best model +
strong exemplars = the system you asked for; best model alone is not.

---

## 8. Rough cost model (to size the spend tier in §7-B)

Illustrative, per marked essay, *with prompt caching on the rubric prefix*:
- Routing: ~£0 (heuristics) to a few cached Haiku tokens.
- Marker (Sonnet @ high thinking, cached rubric, ~600-word essay + nearest
  exemplars): the dominant cost; caching the stable prefix cuts it
  substantially vs uncached.
- Self-consistency (N=3) + Opus escalation: only on high-stakes/borderline
  scripts → a *minority*, so blended cost stays close to the single-Sonnet
  cost.
- Feedback (Sonnet @ low): modest.
- Calibration: nightly batch over the calibration set — fixed, predictable.

I'll produce a real £/essay figure once you confirm the tier ids (the numbers
depend on the exact models) — but the architecture is deliberately built so the
*high-volume* path is the cheaper Sonnet+cache, and the *expensive* Opus path is
gated to the few scripts that need it.

---

## 9. Decision summary (what I recommend you approve)

1. **Tiered, not uniform:** Haiku routing · **Sonnet-latest @ high-thinking
   marker** · **Opus-latest escalation + judge** · Sonnet feedback.
2. **Single swap-point** (`MARKING_MODELS`) — already being built; flipping to
   the strong ids is a one-line change.
3. **Calibration-gated upgrades** — no model triple reaches learners without
   clearing the within-half-band floor (G-LIVE).
4. **You provide:** the callable Sonnet/Opus/Haiku ids on the prod key (§7-A),
   SDK-bump approval (§7-B), spend-tier confirmation, and — the real
   long-pole — the expert-marked exemplars + calibration set (§7-D).

Paste the model ids (or say "use the latest the SDK resolves") and I flip the
constants + re-run calibration. The build does not wait on this — every other
phase proceeds on the safe default and inherits the upgrade the moment you
confirm.
