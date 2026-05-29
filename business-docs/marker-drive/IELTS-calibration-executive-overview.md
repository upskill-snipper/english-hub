# IELTS Marking Calibration — Executive Overview & Requirements

**For:** Calum Johnson (founder)
**Date:** 2026-05-29
**Purpose:** what it takes to switch the AI IELTS marker from "built but dark" to "live for learners" — people, workload, cost, time.

---

## 1. The one-paragraph summary

The AI marking engine is built and safe, but it is **deliberately locked** until we can prove it agrees with real human examiners. To unlock it we need a **calibration set**: a bank of real IELTS Writing Task 2 essays, each independently marked by **two qualified IELTS examiners**, plus a small set of **annotated exemplars**. The engine marks the same essays, we measure agreement, and the system only goes live when the AI lands **within half a band of the human examiners on at least 80% of essays**. This is a **one-off data-build of roughly 3–4 weeks**, needing **3–4 qualified IELTS markers** for ~**10–15 hours each**, at an estimated **£1,000–£1,800 all-in**. After that, a much smaller "top-up" keeps it honest over time.

---

## 2. Why this is needed (and why it's non-negotiable)

The platform marks children's and fee-paying candidates' work. A confidently-wrong band score damages a learner's exam prep and our reputableness. So the engine has a **hard gate in code** (`assertCalibrationGreen`): the live IELTS route returns "not yet calibrated" (HTTP 503) and shows **nothing** to a learner until a green calibration baseline exists. This is not optional polish — it is the trust foundation, and it's already enforced in the request path. The calibration data is the **only** thing standing between "built" and "live."

---

## 3. What we are actually building

Two assets, both produced by human markers:

| Asset | What it is | Why the engine needs it |
|---|---|---|
| **Calibration set** | ≥50 IELTS Writing Task 2 essays, each marked **independently by 2 examiners** against the 4 criteria (Task Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy) on the 0–9 band scale | The engine marks the same essays; we compare AI-vs-human to **prove accuracy** and catch drift. This is the gate. |
| **Exemplar bank** | A small set of essays at each band (4–9), with a short **expert annotation** explaining *why* it sits at that band per criterion | These are the "anchors" injected into the AI at marking time — the single biggest lever on marking accuracy. Currently zero exist. |

**Important:** the essays themselves can be **synthetic** (the platform generates them to a target band — copyright-clean, no real-student data). The **marks must be human** — we never calibrate the AI against another AI's opinion. Markers grade synthetic essays exactly as they would real ones.

---

## 4. The numbers — what we recommend you commission

We recommend marking slightly **above** the gate minimums so the baseline is robust, not borderline.

| Item | Gate minimum | **Recommended commission** | Why above minimum |
|---|---|---|---|
| Essays in the calibration set | 50 | **60** | Buffer against dropped/disagreed essays |
| Bands covered | 4–9 | **4–9 (all six)** | The gate needs ≥2 populated bands; we want the full range |
| Essays per band | 5 | **10 per band** | Double the floor → statistically trustworthy per-criterion figures |
| Marks per essay | 2 (double-marking) | **2** | Inter-marker agreement is how we trust the "human truth" |
| Exemplars | ≥1 per band 5–8 | **2 per band, 4–9 (12 total)** | A spread of anchors, expert-annotated |
| Within-half-band agreement floor | **0.80** | target **≥0.85** | Aim above the floor so the build passes comfortably |

### Resulting workload

- **Calibration marks:** 60 essays × 2 markers = **120 independent marks**
- **Adjudication:** where the 2 markers disagree by >1 band (expect ~15–25% → ~12–15 essays), a **third (senior) mark** resolves it = **~15 adjudication marks**
- **Exemplar annotations:** 12 exemplars, each written up by the senior examiner = **12 annotations**
- **Total marker-events: ~135 marks + 12 annotations**

---

## 5. How many markers, and who they need to be

**Recommended team: 3 qualified IELTS markers + 1 senior lead** (the lead can be one of the 3, wearing two hats, if budget is tight → effectively a 3-person team).

| Role | How many | What they do | Skill set required |
|---|---|---|---|
| **IELTS Writing markers** | **3** | The bulk double-marking — each marks ~40 essays (so every essay gets 2 of the 3) | Current or recent **certified IELTS examiner** (or equivalent: DELTA/CELTA + IELTS-prep teaching experience marking to the public band descriptors). Native or near-native English. Reliable, detail-oriented, comfortable with a structured online form. |
| **Senior lead examiner** | **1** | Adjudicates disagreements, writes the 12 exemplar annotations, sanity-checks the set. (Can be your strongest marker.) | As above **plus** examiner-trainer / senior-examiner experience and the judgement to write authoritative per-band annotations. |

**Why 3, not 2:** double-marking needs at least 2, but with only 2 markers one person's bias dominates every essay and there's no one independent to adjudicate. Three gives genuine inter-marker agreement, spreads the load, and provides the adjudicator. Four would be slightly more robust but isn't necessary for a 60-essay set.

**Why qualified examiners specifically:** the whole point is to prove the AI matches *examiner* judgement. Marks from a non-examiner are not a valid reference — they'd give us a green light we couldn't trust. This is the one place we cannot cut the skill bar.

---

## 6. Per-person workload & time

| | Per marker (×3) | Senior lead |
|---|---|---|
| Essays to mark | ~40 calibration essays | ~40 (as a marker) + ~15 adjudications + 12 exemplar annotations |
| Time per essay | ~12–18 min (band + 4 criterion sub-marks + brief evidence notes via the form) | same, + ~20 min per exemplar annotation |
| **Total time** | **~10–12 hours** each | **~15–18 hours** |
| Spread | Comfortably part-time over **1–2 weeks** | over **2 weeks** |

For a marker, this is **less than two normal working days**, done flexibly from home.

---

## 7. Cost to you

Marking rates for freelance IELTS examiners vary by market and seniority. The figures below are **planning estimates** — confirm the actual rate when you recruit (the platform pays a configurable **pence-per-approved-script** rate, so you set it).

| Scenario | Rate / script | Calibration (120 marks) | Adjudication (15) | Exemplars (12) | Lead oversight | **Total** |
|---|---|---|---|---|---|---|
| **Lean** | £4 | £480 | £60 | £120 | (lead is a marker) | **~£660** |
| **Base (recommended)** | £6 | £720 | £90 | £180 (£15 ea) | £150 | **~£1,140** |
| **Premium** (senior examiners, higher rate) | £9 | £1,080 | £135 | £300 (£25 ea) | £300 | **~£1,815** |

**Plan for ~£1,000–£1,500 all-in for the one-off calibration build.** This is a *one-time* spend — once green, the engine is live. (For comparison: it's roughly one founding-school pilot fee, and it unlocks the entire IELTS product.)

### Ongoing cost (after go-live)
A small **monthly top-up** keeps calibration honest as the model/prompt evolves: ~10–15 fresh double-marked essays/month ≈ **£150–£250/month**. Optional but recommended — it's the early-warning system if marking quality drifts.

---

## 8. End-to-end process (8 steps)

```
1. GENERATE essays      → platform's synthetic-essay generator produces 60 IELTS WT2
                          essays across bands 4–9 (copyright-clean, no real-student data)
2. RECRUIT + ACTIVATE   → 3 markers + 1 lead onboarded into /admin/marker-drive;
                          IELTS added to their profile; consent + pay rate set
3. CREATE BATCH         → a "calibration" batch (board=IELTS, paper=WT2) loaded with
                          the 60 essays
4. ASSIGN (double)      → each essay assigned to 2 of the 3 markers
5. MARK                 → markers grade via their queue: per-criterion bands + brief
                          evidence notes (the structured form)
6. QA + ADJUDICATE      → system computes inter-marker agreement; >1-band disagreements
                          go to the senior lead for a deciding mark; the agreed mark
                          becomes the "human truth"
7. PROMOTE              → QA-passed marks promoted into the calibration set; the senior
                          lead's annotated exemplars promoted into the knowledge pack
8. CALIBRATE + GO-LIVE  → engine marks the set, agreement is measured; when within-half-band
                          ≥0.80 (we target 0.85) the gate flips green and the IELTS route
                          opens to learners
```

**You (or an ops person) drive steps 1–4 and 7–8 from the admin console; the markers do 5–6.**

---

## 9. Timeline

| Week | Activity | Owner |
|---|---|---|
| **Week 1** | Generate essays · recruit + onboard markers · create batch + assign | You / ops |
| **Weeks 1–2** | Markers complete double-marking (~10 hrs each, flexible) | Markers |
| **Week 3** | QA, adjudication, exemplar annotations | Senior lead |
| **Week 3–4** | Promote → run calibration → green baseline → **go live** | You / ops |

**Realistic end-to-end: 3–4 weeks**, gated mostly by marker availability, not by us. A motivated team could compress to ~2 weeks.

---

## 10. What you need to decide / provide

1. **Approve the budget band** (~£1,000–£1,500 base case).
2. **Set the pence-per-script rate** in the admin console (drives all payments automatically).
3. **Source 3–4 markers** — your network, an IELTS-examiner freelance pool, or a marking agency. (The send-out brief, `IELTS-marker-brief.md`, is written to recruit them.)
4. **Confirm Academic-only** for the MVP (per decision OQ-2) — General Training is a fast-follow that needs its own small set.

Everything else — the generator, the marker console, the QA maths, the gate — is built and waiting.
