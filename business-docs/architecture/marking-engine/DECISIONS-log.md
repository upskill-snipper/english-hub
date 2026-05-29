# Decisions log — Marking Engine build

Founder decisions, dated, with how each is applied. The plan + designs are
updated to match; this is the quick index.

---

## 2026-05-29 — OQ-1 model strings → **A: "use the latest the SDK resolves"**

- **Decision:** the model layer uses the **latest model aliases the SDK
  resolves**, not pinned dated ids. Per the tiering in
  `22-design-model-architecture.md`: marker = latest Sonnet, escalation/judge =
  latest Opus, router = latest Haiku.
- **How applied:** `MARKING_MODELS` (in `src/lib/marking/engine/models.ts`)
  resolves each tier to the SDK's latest alias for that family (e.g.
  `claude-sonnet-latest` / `claude-opus-latest` / `claude-haiku-latest`, or the
  exact alias the upgraded SDK exposes — confirmed against the SDK at wiring
  time, never invented). All marking calls still flow through
  `getAnthropicClient()` (plan DP-7).
- **Sequencing:** applied **after** the two in-flight Phase-0/Phase-1 workflows
  land — wiring this edits `anthropic-client.ts` + `package.json`, which would
  conflict with the running `models.ts`/taxonomy work if done concurrently. It
  is the first action of the post-merge step, then re-validated.
- **Guard:** any alias chosen is checked callable + run through the calibration
  gate before it can mark for learners (G-LIVE). `assertNotHaiku` keeps Haiku
  off the marker/escalation tiers.

## 2026-05-29 — OQ-1(B) SDK upgrade → **B: Confirmed**

- **Decision:** authorised to bump `@anthropic-ai/sdk` from the pinned
  `^0.90.0` to latest, so the newest aliases + extended-thinking + forced
  `tool_choice` combos are available.
- **How applied:** single PR that (1) bumps the SDK, (2) cleans the
  garbled/duplicated dependency block in `package.json`, (3) wires the latest
  aliases into `MARKING_MODELS`, (4) runs the full regression suite
  (tsc + lint + Vitest incl. the smart-ip/marking suites) before merge.
- **Sequencing:** same post-merge step as A.

## 2026-05-29 — OQ-7 calibration set + exemplars → **D: later; build the space now**

- **Decision:** the expert-marked calibration set + exemplar bank are **not
  needed yet**; build the **ingestion scaffold + a section for them now**.
  Founder may use the **live SaaS paid-marker system** to have markers produce
  these against **synthetic data**.
- **How applied:** see `23-design-calibration-ingestion-and-marker-drive.md` —
  it connects the engine's calibration harness to the EXISTING marker-drive
  models (`Marker`, `MarkerBatch`, `MarkerGoldStandard`, etc.) and adds the
  synthetic-essay generation track + the consent/anonymisation gates, with the
  data tables empty until markers fill them.
- **Gate unchanged:** G-LIVE still requires a populated, promoted calibration
  baseline before IELTS marking is exposed to learners. The scaffold makes
  filling it a data task, not an engineering one.

---

## 2026-05-29 — OQ-2/3/4/5/6/8 → **"yes to all recommendations"**

Founder accepted all six recommended defaults. These are now binding on the
build (Phase 4 marker/validator + later phases). Each is implemented as stated;
any that proves wrong in build resurfaces with evidence rather than silently
drifting.

- **OQ-3 (schema-fatal rerun) → ONE shared retry, then human review.** A
  structurally-broken model output (wrong criterion count, schema-fatal) shares
  the single rerun budget with fabricated-evidence reruns: retry once; if still
  invalid → `needsHumanReview=true`, never show a guessed mark. *Applies P4.4.*
- **OQ-5 (AI-marked vs always-drafted) → IELTS MAY show as labelled AI practice
  feedback at confidence ≥0.7 AND no flags.** This is the intended, documented
  divergence from the GCSE always-teacher-drafted posture. Below 0.7, any
  criterion <0.6, any integrity/borderline flag, or any disagreement →
  human-review route. Every shown mark is labelled "AI practice feedback —
  distinct from an official IELTS score" (architecture §9). *Applies P4.4/P7/P9.*
- **OQ-6 (rewrites adults-only) → IELTS WT2 treated as adults-only; rewrites
  default OFF for any non-adult.** The "upgrade rewrites" feedback feature is
  gated on a server-authoritative adult age signal; if a minor can reach the
  route, `allowRewrites=false` there. *Applies P7 (feedback).*
- **OQ-8 (data posture at go-live) → LAUNCH on the honest contractual posture
  with accurate "pending" UI copy; chase written DPA/ZDR/no-training
  confirmations in parallel.** The `data-posture.ts` object already prevents
  over-claiming while `isZeroRetentionConfigured()` is false, so launch is not
  blocked by paperwork, and copy never overstates. *Applies P7.5/P9.5.*
- **OQ-2 (Academic vs General) → MVP = Academic Task 2 ONLY; General Training as
  a fast-follow** (a second knowledge pack + its own exemplars/calibration, not
  new engineering). *Shapes P3 pack scope + P9.4 calibration coverage.*
- **OQ-4 (high-stakes for N=3 self-consistency) → 3× on BORDERLINE (auto-detected)
  + any PAID MOCK; single-run on free practice.** Per-tier hard cost cap
  deferred until real cost data exists from the first calibration runs (revisit
  at P9.4). *Applies P4.5.*

## All open questions now resolved

OQ-1 (A), OQ-1B (B), OQ-7 (D), and OQ-2/3/4/5/6/8 (above) are all decided.
No open founder questions remain for the marking-engine build.
