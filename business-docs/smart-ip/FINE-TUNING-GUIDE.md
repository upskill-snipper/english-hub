# Smart IP — Fine-Tuning Data Guide

> How teacher-approved marking becomes a clean, anonymised, consent-gated
> corpus. **No model is trained or retrained by this system.** It collects
> labelled data only. Every claim cites a real `path:line`.

---

## 0. Principle: collect clean data, never auto-train

The Smart IP layer is a **data-collection and labelling** system. There is no
training loop, no scheduler, no autonomous retraining anywhere in the
codebase. The `training_data` table is described in the frozen schema as an
inert _"anonymised, consent-gated, teacher-approved fine-tuning corpus"_
written _"only by `prepareTrainingRecord()` after a teacher approval + consent
check"_ (`supabase/migrations/20260518_smart_ip_marking.sql:172-176`, `:258`).

Any actual fine-tuning is a **separate, deliberate, human-initiated** offline
exercise performed against an exported corpus — out of scope for this system
and gated by the eval harness (§6).

---

## 1. From teacher approval to a corpus row

```
marking_submissions (status reaches 'approved', training_eligible = true)
        │
        │  teacher_moderations row exists with the labelled correction
        │  (decision, ai_score, teacher_score, ao_corrections,
        │   feedback_before/after, adjustment_reason)
        ▼
  consent check  ── isAiOptedOutServer(userId) == false  (src/lib/ai-preferences.ts:40)
        │            AND training_eligible == true
        ▼
  anonymisation  ── hash submission/school/class ids; drop all names/emails/DOB
        ▼
  prepareTrainingRecord()  →  INSERT public.training_data  (service-role only)
```

- The eligibility flags live on both the spine
  (`marking_submissions.training_eligible`,
  `supabase/migrations/20260518_smart_ip_marking.sql:127`) and the moderation
  row (`teacher_moderations.training_eligible`,
  `supabase/migrations/20260518_smart_ip_marking.sql:164`).
- The labelled signal is the `teacher_moderations` row — the human's
  correction relative to the AI
  (`supabase/migrations/20260518_smart_ip_marking.sql:148-166`).
- `prepareTrainingRecord()` is the only writer and is built alongside the
  marking-run pipeline (not in this work); this guide specifies its
  preconditions and output shape so that implementation is unambiguous.

---

## 2. The corpus row (what `training_data` stores)

Columns, from `supabase/migrations/20260518_smart_ip_marking.sql:178-205`:

| Column | Meaning |
| --- | --- |
| `anon_submission_id` (UNIQUE) | Hashed submission id — dedupe key, no PII. |
| `source_submission_id` | FK to `marking_submissions` (SET NULL on delete) — internal join only, never exported. |
| `exam_board`, `qualification`, `paper`, `question`, `question_type` | Task framing. |
| `rubric_version` | Rubric/mark-scheme version string (provenance). |
| `student_answer` | The answer text (NOT NULL). |
| `ai_predicted_mark`, `teacher_final_mark`, `mark_delta` | The supervised label: AI prediction, human truth, signed delta. |
| `ai_feedback`, `teacher_final_feedback`, `teacher_correction_reason` | Feedback pair + why the human changed it. |
| `grade_band`, `ao_scores` (JSONB) | Structured per-AO label. |
| `confidence_score` | Model's self-reported confidence. |
| `approved_at`, `model_version`, `prompt_version` | Provenance/timestamps. |
| `anon_school_id`, `anon_class_id`, `source` | Hashed cohort tags + `b2c_self`/`b2b_class`. |

There is **no** name, email, DOB, raw school id, or user id column — by
design (`supabase/migrations/20260518_smart_ip_marking.sql:174-176`).

---

## 3. Preconditions `prepareTrainingRecord()` MUST enforce

A row may be written **only if ALL** hold (else skip + leave the submission
`excluded_from_training`):

1. `marking_submissions.status = 'approved'` and a teacher actually approved
   it (a `teacher_moderations` row with `decision='approved'` or
   `'corrected'`).
2. `marking_submissions.training_eligible = true` **and** the latest
   `teacher_moderations.training_eligible = true`
   (`…20260518…:127`, `:164`).
3. `isAiOptedOutServer(studentUserId) === false`
   (`src/lib/ai-preferences.ts:40`) — consent not withdrawn.
4. Anonymisation applied: ids hashed; **no** direct identifier copied into
   any `training_data` column (schema enforces absence of the columns;
   the writer must not stuff PII into free-text fields either).
5. Provenance present: `model_version`, `prompt_version`, `rubric_version`
   resolved from the spine FKs
   (`marking_submissions.{model,prompt,rubric}_version_id`,
   `…20260518…:112-117`).

`anon_submission_id` is `UNIQUE`
(`supabase/migrations/20260518_smart_ip_marking.sql:180`) so re-running the
writer is idempotent (ON CONFLICT DO NOTHING).

---

## 4. Export: the JSONL training schema

When a human exports the corpus for an offline fine-tune, each
`training_data` row maps to one JSONL line. Recommended shape (instruction /
response with structured label — derived directly from the columns above):

```jsonl
{"anon_id":"<anon_submission_id>","input":{"exam_board":"AQA","qualification":"GCSE","paper":"English Literature — Paper 1","question":"<question>","question_type":"essay","rubric_version":"<rubric_version>","student_answer":"<student_answer>"},"ai":{"predicted_mark":<ai_predicted_mark>,"grade_band":"<grade_band>","ao_scores":<ao_scores>,"feedback":"<ai_feedback>","confidence":<confidence_score>},"label":{"teacher_final_mark":<teacher_final_mark>,"mark_delta":<mark_delta>,"teacher_final_feedback":"<teacher_final_feedback>","teacher_correction_reason":"<teacher_correction_reason>"},"provenance":{"model_version":"<model_version>","prompt_version":"<prompt_version>","approved_at":"<approved_at>","source":"<source>","anon_school_id":"<anon_school_id>","anon_class_id":"<anon_class_id>"}}
```

Rules:

- One row per line; UTF-8; no BOM.
- `source_submission_id` is **never** exported (internal join key only).
- The export is the supervised signal: `label.*` is ground truth,
  `ai.*` is the prediction, `mark_delta = teacher_final_mark −
  ai_predicted_mark`.
- Stratify the export by `exam_board` × `question_type` × `grade_band`
  (indexes exist for this: `idx_training_data_board`,
  `supabase/migrations/20260518_smart_ip_marking.sql:207`).

---

## 5. Consent / anonymisation preconditions (summary)

| Gate | Where enforced | Citation |
| --- | --- | --- |
| Teacher approved | `status='approved'` + `teacher_moderations.decision` | `…20260518…:134-139`, `:153-154` |
| Training-eligible | `training_eligible` flags | `…20260518…:127`, `:164` |
| Consent live | `isAiOptedOutServer` | `src/lib/ai-preferences.ts:40` |
| No PII | `training_data` has hashed ids only | `…20260518…:174-205` |
| Service-role only | RLS: no authenticated policy on `training_data` | `…20260518…:223-235` |

If any gate fails the submission is marked `excluded_from_training`
(`supabase/migrations/20260518_smart_ip_marking.sql:138`) and no corpus row
is written.

---

## 6. The eval harness & the REAL-DATA-PROTOCOL handoff

Collecting a training corpus is **distinct** from *certifying accuracy*. The
accuracy/robustness instrument is `evals/` (`evals/README.md`), CI-gated for
EU AI Act Article 15. Key facts:

- It measures predicted-vs-examiner agreement (exact, ±1, Quadratic Weighted
  Kappa with seeded bootstrap CI, per-AO MAE) per board/cohort
  (`evals/README.md`, "What it computes").
- The `llm` adapter replays the **exact production marking path** offline
  from a fixture cache; live calls require explicit env flags
  (`evals/README.md`, "Offline-CI ↔ live-LLM split").
- **Synthetic data can validate the instrument but can NEVER certify
  accuracy.** A board with zero real cases has its verdict hard-suppressed;
  a run is `certifiable` only with the `llm` adapter **and** real data
  (`evals/README.md`, "The synthetic-vs-real CI gate").

**The single human handoff** is sourcing licensed, dual-marked,
senior-adjudicated **real** scripts, anonymising them (minors' data — UK
GDPR + Children's Code), running the live eval, ratifying `minQwk`, and
signing off the per-board figure — the full spec is
`evals/datasets/REAL-DATA-PROTOCOL.md` (status: _"THIS IS THE EXPLICIT HUMAN
HANDOFF"_, `evals/datasets/REAL-DATA-PROTOCOL.md:3-9`). Real scripts live in
a separate access-controlled store and are loaded by path
(`EVAL_REAL_DATASET=…`), never committed (`evals/README.md`, "Data safety /
GDPR").

> The Smart IP `training_data` corpus and the eval gold set are **separate
> data**: the corpus is teacher-approved production marking for *improving*
> the model; the gold set is licensed external scripts for *certifying* it.
> Neither feeds the other automatically.

---

## 7. What is explicitly NOT in scope here

- No fine-tuning job, training script, or model deployment.
- No scheduler / cron / autonomous trigger.
- No write to `training_data` from this work (the writer ships with the
  marking-run pipeline; this guide specifies its contract).
- No change to the frozen schema (git `689eaa0a`).

The deliverable of the Smart IP system is a **clean, labelled, anonymised,
consent-gated, auditable corpus** — and the documented preconditions a future
human-run fine-tune must satisfy before using it.
