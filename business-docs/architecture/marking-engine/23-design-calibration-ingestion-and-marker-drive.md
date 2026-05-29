# Calibration set + Exemplar ingestion — the "space for D"

> **Resolves OQ-7 (D).** Founder decision (2026-05-29): the expert-marked
> calibration set + exemplar bank come **later**; build the **space + pipeline
> now**. The founder may use the **live SaaS paid-marker system** to have
> markers produce these — potentially against **synthetic essays**.
>
> Key finding: this codebase **already has a paid-marker corpus system**. D does
> NOT build a new one — it **connects the Marking Engine's calibration harness
> to the existing marker-drive**, and adds the synthetic-essay track + the gates
> that make the output safe to use as calibration/exemplar data.

---

## 1. What already exists (build on this, don't duplicate)

The Prisma schema + admin routes already implement a marker drive:

| Existing model | Role | Reused for D as |
|---|---|---|
| `Marker` | Paid marker: status, qualifications, exam boards, rate | The **credentialled IELTS expert marker** (OQ-7) — add IELTS to `examBoards`, record creds in `qualifications` |
| `MarkerBatch` | A batch of scripts (board, paper, status, count) | A **calibration batch** or an **exemplar-authoring batch** (new `purpose` field) |
| `MarkerAssignment` | Marker ↔ script assignment | Who marks which calibration script |
| `MarkerSubmission` | A marker's submitted mark | The **human reference mark** for a calibration script |
| `MarkerGoldStandard` | `expectedMarks` JSON per script per marker | **Gold-standard / exemplar marks** — the anchor data the engine needs |
| `MarkerQAReview` | QA of a marker's marks | **Inter-marker agreement / adjudication** before a mark is trusted |
| `MarkerPayment` | Pence-per-script payment | Paying markers for calibration + exemplar work (the founder's "pay markers") |
| `MarkerConsent` | Marker consent record | Consent that their marks may be used as engine calibration data |
| `MarkerDraft` | Draft marks | In-progress marker work |

Existing admin routes: `admin/marker-batches` (+ `/ingest`, `/draft`),
`marker-assign`, `marker-gold`, `marker-qa`, `marker-pay`; marker-facing:
`marker/queue`, `marker/me`. **The drive is the supply side; the engine's
calibration harness (design doc 17) is the demand side. D is the bridge.**

---

## 2. The bridge — how marker-drive output becomes engine calibration data

```
                 SYNTHETIC ESSAYS                 REAL (consented, anonymised) ESSAYS
                 (generated, §4)                  (from live submissions, opt-in)
                        │                                   │
                        └──────────────┬────────────────────┘
                                       ▼
                          ┌────────────────────────┐
                          │  MarkerBatch            │  purpose = 'calibration' | 'exemplar'
                          │  (board=IELTS, paper=WT2)│  level/band coverage targets
                          └───────────┬─────────────┘
                                      ▼ assign (marker-assign)
                          ┌────────────────────────┐
                          │  Paid IELTS markers     │  ≥2 markers/script for agreement
                          │  mark each script       │  → MarkerSubmission + MarkerGoldStandard
                          └───────────┬─────────────┘
                                      ▼ QA + adjudication (marker-qa)
                          ┌────────────────────────┐
                          │  Agreed human mark      │  inter-marker agreement gate;
                          │  (the reference truth)  │  disagreements adjudicated/dropped
                          └───────────┬─────────────┘
                                      ▼  promote (NEW: calibration ingest)
        ┌──────────────────────────────────────────────────────────────┐
        │  calibration_set   (engine-owned, design doc 17)              │  the human-reference corpus
        │  exemplar_bank     (Knowledge Pack, design doc 11)            │  the per-band anchors
        └──────────────────────────────────────────────────────────────┘
                                      ▼
              engine calibration run → AI-vs-human agreement → G-LIVE gate
```

**The new glue (the only net-new build):** a promotion step that takes
QA-passed `MarkerGoldStandard` rows for a `calibration`/`exemplar` batch and
writes them into the engine's `calibration_set` and the IELTS Knowledge Pack's
`exemplar_bank`, carrying provenance (which markers, agreement level, consent
ref, synthetic-or-real flag).

---

## 3. Schema additions (the "space", empty until filled)

Additive, non-breaking. Add to the existing marker models rather than new
parallel tables:

```prisma
// Add to MarkerBatch — what this batch is FOR.
model MarkerBatch {
  // ... existing fields ...
  purpose       String   @default("production") // production | calibration | exemplar
  taskType      String?  // e.g. "IELTS_Writing_Task2"
  bandCoverage  String?  // JSON: target essays per band, e.g. {"4":5,"5":8,...}
  dataSource    String   @default("real")       // real | synthetic   (§4)
  packVersion   String?  // which Knowledge Pack version this calibrates
}

// NEW — the engine-side calibration corpus (design doc 17 demand side).
model CalibrationScript {
  id              String   @id @default(cuid())
  taskType        String   // "IELTS_Writing_Task2"
  essayText       String   // synthetic, OR consented+anonymised real
  taskPrompt      String
  dataSource      String   // real | synthetic
  syntheticSpec   String?  // JSON: how it was generated (band target, error profile) — §4
  humanReference  String?  // JSON: agreed human criterion bands + overall (from MarkerGoldStandard)
  markerAgreement Float?   // inter-marker agreement for this script
  consentRef      String?  // MarkerConsent / data-subject consent id (null OK for synthetic)
  isBaseline      Boolean  @default(false)
  sourceBatchId   String?  // → MarkerBatch
  createdAt       DateTime @default(now())
}

// NEW — exemplar anchors for the Knowledge Pack (design doc 11; the single
// biggest accuracy lever, currently EMPTY per the Phase-0 map).
model ExemplarResponse {
  id            String   @id @default(cuid())
  packVersion   String   // immutable pack this anchors
  taskType      String
  band          Int      // the anchored band (e.g. 5,6,7,8)
  essayText     String   // OWN expert-marked exemplar (NOT a board's secure script)
  annotation    String   // why it sits at this band, per criterion
  dataSource    String   // real | synthetic
  markerId      String?  // credentialled author
  consentRef    String?
  createdAt     DateTime @default(now())
}
```

**All three tables start empty.** G-LIVE (the gate) stays closed until
`CalibrationScript` has a promoted baseline (≥50, bands 4–9, ≥5/band) and
`ExemplarResponse` has ≥1 per band 5–8 — exactly as the plan requires. The
scaffold means hitting that is a **data/marker-ops task**, not engineering.

---

## 4. Synthetic-essay track (the founder's "synthetic data")

Why synthetic is the right call for the **calibration bootstrap** (not the
marks): real student IELTS essays carry consent + copyright + child-data weight;
synthetic essays carry none, so you can build the *initial* calibration corpus
fast and cleanly, then blend in consented real essays over time.

**Generation (engine-side, offline, never in the live marking path):**
- A `synthetic-essays/generate.ts` job uses the **strongest model** (Opus tier
  from doc 22) to write IELTS WT2 essays **to a target band + error profile**
  — e.g. "a band-6 essay that addresses the task but with thin development and
  3–4 article errors". The *target* is recorded in `syntheticSpec`.
- **Critical guardrail:** the model's *intended* band is a **generation target,
  NOT** the human reference. A synthetic essay is still **marked by paid human
  markers** through the drive — you never calibrate the AI marker against
  another AI's opinion (that would be circular and would bake in the marker's
  own bias). The synthetic step only produces *essays*; humans produce *marks*.
- Diversity controls: vary topic, length, L1-transfer profile (incl. Gulf
  Arabic, matching the EAL audience), register, and deliberate error mix so the
  corpus spans the band range and the error taxonomy.
- Each synthetic essay is tagged `dataSource:'synthetic'` end-to-end so
  analytics, calibration reports, and any published statistic can always
  separate synthetic-bootstrap from real-learner evidence (honesty: never
  imply a synthetic-derived metric is a real-learner outcome).

**Blend plan:** bootstrap calibration on synthetic → as consented real essays
accrue, the harness reports agreement on *both* and the baseline migrates to
real-weighted. The `dataSource` flag makes this auditable.

---

## 5. The paid-marker workflow (using the live SaaS)

End-to-end, all on existing rails plus the §3 additions:

1. **Recruit/activate IELTS markers.** Existing `Marker` model; set
   `examBoards` to include IELTS, record IELTS credentials in `qualifications`,
   `status:'active'` after screening. (The drive already has applied→screening→
   active→paused→removed.)
2. **Create a batch.** `MarkerBatch` with `purpose:'calibration'` (or
   `'exemplar'`), `taskType:'IELTS_Writing_Task2'`, `bandCoverage` targets,
   `dataSource:'synthetic'` (bootstrap) or `'real'`.
3. **Load scripts.** Synthetic from §4, or consented+anonymised real essays via
   the existing `marker-batches/ingest` route + the engine's anonymiser.
4. **Assign ≥2 markers per script** (`marker-assign`) — agreement needs two
   independent marks.
5. **Markers mark** through `marker/queue` → `MarkerSubmission` +
   `MarkerGoldStandard` (`expectedMarks` JSON = per-criterion bands + overall).
6. **QA + adjudicate** (`marker-qa`): compute inter-marker agreement; agreed
   marks pass, disagreements get a third marker or are dropped. Only agreed
   marks become reference truth.
7. **Pay markers** (`marker-pay`, pence-per-script) — the founder's "pay markers
   to do this".
8. **Promote to engine** (NEW step): QA-passed gold-standards → `CalibrationScript`
   (reference corpus) and curated ones → `ExemplarResponse` (pack anchors), with
   provenance + consent refs carried over.
9. **Calibrate** (doc 17 harness): the engine marks the calibration scripts,
   compares to the human reference, reports exact-band / within-half-band /
   per-criterion agreement, and — when the populated baseline clears the floor —
   flips the IELTS half of G-LIVE.

---

## 6. Consent, anonymisation, copyright (non-negotiable, doc 19 + plan §B)

- **Synthetic essays:** no data-subject, no consent needed; tag `synthetic`.
- **Real essays as calibration data:** require explicit opt-in (separate from
  the marking consent), anonymisation (strip name/email/DOB/school before a
  marker ever sees them — the engine anonymiser), and a `consentRef`. No real
  child essay enters the calibration set without this.
- **Marker consent:** `MarkerConsent` records that a marker's marks may be used
  as engine calibration/exemplar data + paid terms.
- **Exemplars are OURS:** `ExemplarResponse.essayText` must be **own
  expert-marked exemplars**, never a board's secure/copyright script (plan
  R-COPY). The synthetic track is perfect for this — synthetic exemplars are
  copyright-clean by construction, then expert-marked.

---

## 7. What gets built when

| Now (with this doc) | Later (when founder runs the marker drive) |
|---|---|
| The schema additions (§3) — empty tables | Recruit/activate IELTS markers |
| The promotion step (drive → engine) | Generate synthetic essays to band targets |
| The synthetic-essay generator (§4), offline | Run calibration + exemplar batches, pay markers |
| `dataSource` flag plumbed through analytics | Promote QA-passed marks → calibration_set + exemplar_bank |
| Honest "synthetic vs real" separation everywhere | Hit the populated baseline → open G-LIVE |

This work slots into the master plan at **Phase 5/6/9** (persistence +
calibration + baseline) as the *supply* side; nothing here changes the G-LIVE
gate. The engine is built to run the moment the data lands.

---

## 8. One honesty rule that protects the whole thing

Every metric, dashboard, and any **published statistic** (the Hermes/GEO claim
in doc 00 §7) MUST state whether it is derived from **synthetic** or **real
learner** data. A calibration figure built on synthetic essays is a valid
*engineering* proof that the marker agrees with human markers; it is **not** a
real-learner outcome and must never be presented as one. The `dataSource` flag
is the mechanism that keeps this impossible to get wrong.
