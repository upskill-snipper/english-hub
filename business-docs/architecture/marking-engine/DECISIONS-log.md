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

## Still open (will resurface at the relevant phase — not blocking now)

- **OQ-2** Academic-only vs +General Training at go-live.
- **OQ-3** schema-fatal rerun policy (before P4.4).
- **OQ-4** "high-stakes" definition for N=3 self-consistency + per-tier cost cap.
- **OQ-5** may IELTS B2C marks show as `ai_marked` (≥0.7, no flags) vs always teacher-drafted.
- **OQ-6** is IELTS WT2 audience guaranteed adult; server-authoritative age signal for rewrites.
- **OQ-8** obtain the written DPA/ZDR/no-training confirmations before go-live, or launch on contractual-only + honest pending UI copy.
