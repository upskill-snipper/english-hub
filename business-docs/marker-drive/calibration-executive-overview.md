# Marking Calibration — Executive Overview & Rollout Plan

**For:** Calum Johnson (founder)
**Date:** 2026-05-29
**Purpose:** what it takes to switch the AI marker from "built but dark" to "live for learners" — across every board and offering — people, scope, sequence and time. Pay is **project-based** (agreed up front per marker), so this plans **scope and sequencing**, not fixed budgets.

---

## 1. The one-paragraph summary

The AI marking engine is built and safe, but it is **deliberately locked per area** until we can prove it agrees with real human examiners *for that board and level*. To unlock each area we need a **calibration set**: real student scripts for that qualification, each independently marked by **two qualified markers**, plus a small set of **annotated exemplars**. The engine marks the same scripts, we measure agreement, and an area only goes live when the AI lands **within half a band/mark of the human markers on at least 80% of scripts**. This is a **per-area data build**, run as **scoped projects** with markers whose fee is **agreed up front**. We roll the areas out in sequence rather than all at once.

---

## 2. Why this is needed (and why it's non-negotiable)

The platform marks children's and fee-paying candidates' work. A confidently-wrong mark damages a learner's exam prep and our reputation. So the engine has a **hard gate in code** (`assertCalibrationGreen`): a live marking route returns "not yet calibrated" (HTTP 503) and shows **nothing** to a learner until a green calibration baseline exists **for that area**. This is not optional polish — it is the trust foundation, and it's already enforced in the request path. The calibration data is the **only** thing standing between "built" and "live", and it is gathered **per board/offering**.

---

## 3. What we are building (per area)

Two assets, both produced by human markers, **for each board/offering we light up**:

| Asset | What it is | Why the engine needs it |
|---|---|---|
| **Calibration set** | A bank of scripts for that qualification, each marked **independently by 2 markers** against that board's mark scheme / descriptors | The engine marks the same scripts; we compare AI-vs-human to **prove accuracy** for that area and catch drift. This is the gate. |
| **Exemplar bank** | A small set of scripts across the mark/band range, each with a short **expert annotation** explaining *why* it sits there | These are the "anchors" injected into the AI at marking time — the single biggest lever on accuracy. Currently zero exist for any area. |

**Important:** the scripts themselves can be **synthetic** (the platform generates them across the mark range — copyright-clean, no real-student data). The **marks must be human** — we never calibrate the AI against another AI's opinion. Markers grade synthetic scripts exactly as they would real ones.

---

## 4. The gate — the same bar for every area

These are the **real, code-enforced thresholds** (`src/lib/marking/engine/calibration/gate.ts`). An area cannot go live until its calibration set clears all of them:

| Gate rule | Minimum |
|---|---|
| Scripts in the calibration set | **≥ 50** |
| Mark/band levels covered | **≥ 2 populated**, spread across the range |
| Scripts per level | **≥ 5** |
| Marks per script | **2 (independently double-marked)** |
| Within-half-band/mark agreement | **≥ 0.80** (we aim higher) |

**Recommended commission per area:** mark slightly **above** the minimums — around **60 scripts × 2 markers (120 marks)**, full mark/band range, **~10–12 exemplars** — so each baseline is robust, not borderline. Scale up for high-volume flagship areas (e.g. AQA GCSE), trim toward the minimum for lower-volume ones.

---

## 5. The offerings to calibrate (each is its own area)

Every board/level/paper combination is a **separate calibration area** — the AI must be proven for each, because mark schemes differ.

| Offering | Boards / scope | Notes |
|---|---|---|
| **GCSE English Language** | AQA, Edexcel, OCR, Eduqas | Highest volume; AQA is the priority flagship |
| **GCSE English Literature** | AQA, Edexcel, OCR, Eduqas | Set-text essays + unseen poetry/prose |
| **IGCSE English** | Cambridge 0500/0990, Edexcel IGCSE (4ET1) | Language + Literature |
| **KS3 English** | Criteria-based (no external board) | Extended writing + comprehension |
| **IELTS** | Academic + General Training | Writing Task 1 & 2 — the pilot area |
| **EAL** | English-as-an-Additional-Language | Writing + language work |

You do **not** calibrate all of these at once. Each is a scoped project (or set of projects) with the right qualified markers.

---

## 6. How many markers, and who they need to be

**Per area: ~3 qualified markers + 1 senior lead** (the lead can be one of the 3 if budget is tight → effectively a 3-person team per area). Markers can cover **multiple areas** if they're qualified for them, so the same people may staff several rollouts.

| Role | What they do | Skill set required |
|---|---|---|
| **Markers** (×~3) | The bulk double-marking — each marks ~40 scripts so every script gets 2 of the 3 | **Current/recent examiner** for the relevant board (AQA, Edexcel, OCR, Eduqas, Cambridge 0500/0990, Edexcel IGCSE 4ET1), **or** equivalent expert (experienced English teacher marking to that scheme; for IELTS a certified Writing examiner or DELTA/CELTA + IELTS-prep marking; for KS3/EAL an experienced specialist). Native/near-native English, reliable, detail-oriented. |
| **Senior lead** | Adjudicates disagreements, writes the exemplar annotations, sanity-checks the set | As above **plus** senior/examiner-trainer judgement to write authoritative per-level annotations. |

**Why qualified markers specifically:** the whole point is to prove the AI matches *examiner* judgement for that board. Marks from a non-examiner aren't a valid reference — they'd give us a green light we couldn't trust. This is the one place we cannot cut the skill bar.

---

## 7. Per-area workload & time

| | Per marker (×~3) | Senior lead |
|---|---|---|
| Scripts to mark | ~40 calibration scripts | ~40 (as a marker) + ~15 adjudications + ~10–12 exemplar annotations |
| Time per script | ~12–18 min (marks/bands + brief evidence notes via the form) | same, + ~20 min per exemplar annotation |
| **Total time** | **~10–12 hours** each | **~15–18 hours** |
| Spread | comfortably part-time over **1–2 weeks** | over **~2 weeks** |

For a marker, calibrating one area is **less than two normal working days**, done flexibly from home.

---

## 8. Cost — project-based, agreed up front

We pay **per project, not a fixed per-script rate.** For each area we scope a defined **quota of scripts and/or services** (e.g. "double-mark a 60-script AQA GCSE Language set + 10 exemplar annotations") and **agree the fee individually, in writing, with each marker before they start.** Once a marker is approved they can mark as much as they like, but are **paid only for the agreed quota and services** per project.

What drives each project fee: the marker's experience, the qualification, and the **volume and complexity** of the scoped work. As a planning anchor, expect **one area ≈ ~135 marks + ~12 annotations** of expert work (Section 7), split across ~3 markers + a lead — sized like a small, well-defined freelance engagement per person.

**Ongoing (after an area goes live):** a small **top-up** project periodically — a handful of fresh double-marked scripts — keeps that area's calibration honest as the model/prompt evolves. Optional but recommended; it's the early-warning system for drift.

---

## 9. End-to-end process (per area)

```
1. GENERATE scripts     → platform's synthetic generator produces scripts across the
                          mark/band range for the target board/paper (copyright-clean)
2. RECRUIT + APPROVE    → markers onboarded into /admin/marker-drive; their qualified
                          boards/offerings approved; confidentiality/consent agreed;
                          PROJECT SCOPE + FEE agreed up front per marker
3. CREATE BATCH         → a calibration batch (board + paper) loaded with the scripts
4. ASSIGN (double)      → each script assigned to 2 of the ~3 markers
5. MARK                 → markers grade via their queue: marks/bands per the scheme +
                          brief evidence notes (the structured form)
6. QA + ADJUDICATE      → system computes inter-marker agreement; significant
                          disagreements go to the senior lead; the agreed mark becomes
                          the "human truth"
7. PROMOTE              → QA-passed marks promoted into that area's calibration set;
                          the lead's annotated exemplars promoted into the knowledge pack
8. CALIBRATE + GO-LIVE  → engine marks the set; agreement is measured; when within-half
                          ≥0.80 the gate flips green and THAT area opens to learners
```

You (or an ops person) drive steps 1–4 and 7–8 from the admin console; the markers do 5–6. **Repeat per area.**

---

## 10. Recommended rollout sequence

Light areas up in order of value and readiness, one (or a few) at a time:

| Phase | Area(s) | Why this order |
|---|---|---|
| **1 (pilot)** | **IELTS** (Academic + GT, Writing) | Already scoped; proves the whole pipeline end-to-end |
| **2** | **GCSE English Language + Literature — AQA** | Highest learner volume; biggest single unlock |
| **3** | **GCSE — Edexcel, OCR, Eduqas** | Same qualification, additional boards; markers may overlap |
| **4** | **IGCSE** (Cambridge 0500/0990, Edexcel 4ET1) | International reach |
| **5** | **KS3 and EAL** | Broaden coverage to the remaining first-class offerings |

Each phase is independent: a later area being un-calibrated never blocks an earlier one that's already green. The gate is per-area, so you can ship value incrementally.

---

## 11. What you need to decide / provide

1. **Confirm the rollout sequence** (Section 10) — or re-prioritise by your commercial focus.
2. **Source markers per area** — your network, examiner freelance pools, or marking agencies. (The send-out doc, `marker-brief.md`, recruits across all areas.)
3. **For each project: agree the scope + fee up front** with each marker (quota of scripts/services for an agreed fee).
4. **Approve credentials in the system** — only approved markers, in their approved areas, can mark.

Everything else — the generator, the marker console, the QA maths, the per-area gate — is built and waiting.
