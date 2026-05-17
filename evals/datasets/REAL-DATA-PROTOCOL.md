# REAL-DATA INGESTION PROTOCOL — Art. 15 Accuracy Gold Set

**Status:** THIS IS THE EXPLICIT HUMAN HANDOFF.
The harness (code) is complete and CI-gated. It can validate that the accuracy
_instrument_ works on synthetic data, but it **cannot and must not certify the
system's accuracy** until real, licensed, dual-marked, senior-adjudicated
scripts are ingested per this protocol. Everything below requires a human:
sourcing/licensing the scripts, running the live evaluation, and signing off the
resulting figure.

> Regulatory basis: EU AI Act Art. 15(1)/(3) (declared accuracy on a
> representative set), Art. 10 (representative, relevant data), Art. 14
> (human oversight of the figure). Cross-refs: `business-docs/compliance/eu-ai-act/06-accuracy-robustness-cybersecurity-art15.md` §A2,
> doc 05 §5.1 (bias corpus, shared set), doc 13 (Declaration of Conformity).

---

## 1. What counts as a valid REAL case

A case may set `"synthetic": false` (or omit the flag → treated as synthetic;
**only an explicit `false` makes it real**) **only if ALL** of the following
hold:

1. **Authentic candidate work.** A genuine GCSE/IGCSE English response actually
   produced by a candidate under the relevant board's conditions (or a
   licensed past script). No paraphrase, no AI-generated text, no reconstruction.
2. **Licensed.** Written licence/permission from the rights holder (awarding
   body, school, or via a data-sharing agreement) covering: storage, processing
   by The English Hub, transfer to Anthropic for the evaluation call, and use
   for conformity assessment. Licence reference recorded in `provenance`.
3. **Dual-marked.** Independently marked by **≥2 qualified examiners for that
   specific board** against the **same AO scheme** the system uses
   (`src/lib/marking/mark-schemes/<board>...`).
4. **Senior-adjudicated.** Where the two markers disagree, a **senior/principal
   examiner for that board** adjudicates; the adjudicated per-AO marks and
   overall grade are the gold label (`examinerMarks`, `examinerGrade`).
5. **Anonymised** per §3 before it ever enters the eval store.

A case failing any item stays `synthetic` (or is rejected) and the CI gate will
**refuse to certify a numeric accuracy figure for that board**.

## 2. Volume, stratification & per-board sign-off

- **≥150 scripts per board/paper in scope** (AQA Lang P1/P2 & Lit P1; Edexcel
  Lang/Lit; OCR Lang/Lit; WJEC Eduqas Lang/Lit; Cambridge IGCSE 0500 & 0990 —
  i.e. every board registered at `src/lib/marking/mark-schemes/index.ts`).
- **Stratified across the full grade range U–9** and across question types
  (extract/essay, analysis, evaluation, creative/transactional, comprehension).
- A board is only certifiable once its **≥150-script set is complete, the LLM
  adapter has been run live against it, and the figure is signed off** (§6).
  Until then the gate hard-suppresses that board's numeric verdict and prints
  `NOT YET VALID FOR <board> — synthetic only`.

## 3. Anonymisation / GDPR rules (candidates are MINORS — UK GDPR + Children's Code)

These scripts are children's personal data and special-category-adjacent.
Before a script enters the eval store:

1. **Strip all direct identifiers**: candidate name, candidate/centre number,
   UCI, school name, teacher name, dates of birth, handwriting images, any
   signatures. Replace with a non-reversible opaque case id (e.g.
   `aqa-lit-p1-real-0001`).
2. **Scrub in-text identifiers**: redact any self-identifying content the
   candidate wrote (names, addresses, schools, recognisable personal anecdotes)
   from `studentAnswer`. Redaction must not alter the markable qualities.
3. **No identity ↔ cohort linkage in the eval store.** `cohort` attributes
   (`eal`, `send`, `dialect`, `firstLanguage`, `isMinor`) are coarse,
   non-identifying flags only, attached **separately** from any identity key.
   They must not be sufficient to single out a candidate (suppress/aggregate any
   slice where a flag combination could re-identify, e.g. very small cells).
4. **Storage & access.** Real scripts live **outside this repo** in an
   access-controlled store (never committed to git; `evals/datasets/` ships
   synthetic only). Loaded by path at eval time via an env var
   (e.g. `EVAL_REAL_DATASET=/secure/path/aqa-lit-p1-real.jsonl`).
5. **Lawful basis & DPIA.** Confirm lawful basis (legitimate interest /
   contractual + the licence in §1.2) and that the existing DPIA covers this
   processing of minors' data; update the ROPA. Data-minimisation: keep only
   what the schema needs.
6. **Retention.** Delete the real scripts (and any derived fixtures containing
   their text) **after each evaluation cycle** unless the licence requires
   longer; record deletion. Do not retain raw child work indefinitely.
7. **No training.** This data is for **evaluation only** — never used to train
   or fine-tune any model. The Anthropic call is a stateless inference.

## 4. Schema (same `GoldStandardCase`, real-data field values)

One JSON object per line (JSONL), matching `evals/types.ts → GoldStandardCase`:

```jsonc
{
  "id": "aqa-lit-p1-real-0001", // opaque, non-reversible
  "board": "AQA",
  "paper": "Paper 1",
  "question": "Section A", // a REAL question id from the scheme
  "markSchemeId": "aqa-lit-paper1", // a REAL id from mark-schemes/index.ts
  "studentAnswer": "<anonymised verbatim response>",
  "questionText": "<the verbatim exam question shown to candidates>",
  "studiedText": "Macbeth", // if applicable
  "examinerMarks": [
    // ADJUDICATED per-AO marks (gold)
    { "id": "AO1", "marks": 10, "maxMarks": 12 },
    { "id": "AO2", "marks": 9, "maxMarks": 12 },
    { "id": "AO3", "marks": 5, "maxMarks": 6 },
    { "id": "AO4", "marks": 3, "maxMarks": 4 },
  ],
  "examinerGrade": "8", // ADJUDICATED overall grade (gold)
  "questionMaxMarks": 34,
  "synthetic": false, // MUST be explicit false
  "provenance": "Licence#TEH-AQA-2026-014; dual-marked examiners E1,E2; adjudicated by senior examiner S1 2026-07-12",
  "cohort": { "eal": true, "firstLanguage": "Polish", "isMinor": true },
}
```

`examinerMarks` AO `id`s must match the real AO codes for that scheme/question
(verified against `src/lib/marking/mark-schemes/<board>`). `provenance` must
record the licence reference, the marker ids/roles, and the adjudication date.

## 5. Running the real evaluation (live LLM, per board)

```bash
# Real scripts are NEVER committed; load by secure path.
EVAL_REAL_DATASET=/secure/aqa-lit-p1-real.jsonl \
EVAL_ADAPTER=llm \
EVAL_LLM_LIVE=1 \
ANTHROPIC_API_KEY=sk-... \
EVAL_RUNS=3 \                       # N>=3 for test-retest variance
npm run eval:marking
```

- `EVAL_ADAPTER=llm` runs the **exact production path** (`buildMarkingPrompt` →
  `claude-sonnet-4-20250514` → `generateFeedback` → `predictGrade`).
- `EVAL_LLM_LIVE=1` permits the network call (off by default; CI stays offline).
- `EVAL_RUNS=3` re-runs each script 3× to measure grade instability
  (model sampling is not pinned in production — doc 06 §A2).
- Optionally also `EVAL_LLM_RECORD=1` to snapshot raw responses as fixtures for
  a frozen, replayable regression set (mind §3.6 retention for any fixture that
  embeds real child text — prefer recording fixtures only from synthetic data).
- The harness then reports per-board + per-cohort exact/adjacent/QWK (+bootstrap
  95% CI), AO-MAE, the band confusion matrix, disparate-impact deltas and the
  test-retest instability rate, and **enforces `evals/thresholds.json`**.

## 6. Who must sign off (human accountability)

The numeric accuracy figure is **not valid until signed off**. Required:

| Step                                                                                 | Accountable                                                  | Evidence                                                      |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Licence/permission to use scripts                                                    | Founder / Provider accountable person (cj@upskillenergy.com) | Signed licence/DSA, reference in `provenance`                 |
| Examiner marking + adjudication quality                                              | Lead Examiner / qualified senior examiner per board          | Marker credentials; adjudication record                       |
| Anonymisation & DPIA/ROPA update                                                     | DPO / Founder                                                | DPIA addendum; ROPA entry; deletion log                       |
| Statistical methodology & threshold ratification (vs examiner–examiner baseline QWK) | Engineering + Founder                                        | Recorded baseline; `thresholds.json` version bump + rationale |
| **Final accuracy declaration** (per board)                                           | **Provider accountable person (Calum Jardine)**              | Signed figure in doc 06 §A5 + doc 04 Annex IV; doc 13         |

Until **all** rows are satisfied for a board, doc 06 §A5 must continue to state
"**Declared accuracy: NOT ESTABLISHED for the LLM marker**" for that board, and
product copy must not imply validated accuracy.

## 7. Hard rules (non-negotiable)

- **Synthetic data can never certify accuracy.** Enforced in code: the gate
  suppresses numeric verdicts for any board with zero `synthetic:false` cases.
- **No real child work in this repo / git.** Synthetic only in `evals/datasets/`.
- **Evaluation-only.** No training/fine-tuning on these scripts, ever.
- **Ratchet thresholds.** `evals/thresholds.json` may be raised, never quietly
  lowered to pass a run (written justification + Provider sign-off required).
