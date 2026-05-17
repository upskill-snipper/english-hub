# Smart IP — Teacher-in-the-Loop AI Marking & Training Data System

> Architecture of record for the controlled, auditable, human-reviewed GCSE/IGCSE
> marking intelligence layer. Every claim below cites a real `path:line`. Nothing
> here describes a control that does not exist in the codebase.

---

## 1. Design decision: ONE submission spine, not a parallel stack

The system **extends the existing `public.marking_submissions` table** rather
than creating a parallel `student_submissions` / `ai_marking_results` /
`teacher_moderations` triad. This is explicit in the frozen migration header:

- `supabase/migrations/20260518_smart_ip_marking.sql:4` — _"This EXTENDS the
  existing `public.marking_submissions` spine — it does NOT create a parallel
  … stack."_

Rationale (same header, lines 6–9): `marking_submissions` already has a Prisma
model, RLS, the `/school/marking` teacher UI, and the
`/api/school/marking/override` writer; its only missing piece was a B2C INSERT
path (added as `POST /api/submissions` in the parallel submission-spine work).

The original table is defined at
`supabase/migrations/20260512_marking_submissions.sql:18` and the Smart IP
migration adds, idempotently:

- Source discriminator `source` (`b2c_self` | `b2b_class`),
  `supabase/migrations/20260518_smart_ip_marking.sql:85-91`.
- Structured inputs (`qualification`, `paper`, `question_text`,
  `question_type`, `studied_text`, `target_grade`, `mark_scheme_id`,
  `rubric_ref`), lines `94-101`.
- Structured AI result (`ai_result`, `ai_score`, `ai_max_marks`,
  `ai_grade_band`, `ai_ao_breakdown`, `ai_uncertainty_flags`), lines `104-109`.
- Versioning provenance FKs (`model_version_id`, `prompt_version_id`,
  `rubric_version_id`), lines `112-117`.
- Final teacher decision columns (`final_teacher_mark`,
  `final_teacher_feedback`, `teacher_adjustment_reason`, `approved_by`,
  `approved_at`, `training_eligible`, `moderation_notes`), lines `122-128`.
- `school_id` made nullable so B2C self-study (no school) is valid:
  `supabase/migrations/20260518_smart_ip_marking.sql:82`.

---

## 2. Tables (the complete data model)

| Table | Defined at | Purpose |
| --- | --- | --- |
| `marking_submissions` | `20260512_marking_submissions.sql:18` (+ `20260518_smart_ip_marking.sql:82-142` extensions) | The unified submission spine — one row per student answer, AI result, teacher decision, versioning provenance. |
| `model_versions` | `20260518_smart_ip_marking.sql:28-38` | AI model/provider/settings provenance for every mark; live model seeded at `:72-75`. |
| `rubric_versions` | `20260518_smart_ip_marking.sql:40-51` | Content-hash-keyed rubric/mark-scheme version pointer. |
| `prompt_versions` | `20260518_smart_ip_marking.sql:53-66` | Versioned marking prompts (content-hash keyed); FK to `rubric_versions`. |
| `teacher_moderations` | `20260518_smart_ip_marking.sql:148-166` | Full reviewer-action history per submission — the labelled training signal (`decision`, `ai_score`, `teacher_score`, `ao_corrections`, `feedback_before/after`, `training_eligible`). |
| `training_data` | `20260518_smart_ip_marking.sql:178-205` | Anonymised, consent-gated, teacher-approved fine-tuning corpus. Service-role only; stores no PII (hashed ids only). |

Status set (extended, old values kept so existing rows stay valid):
`submitted, pending, ai_marked, teacher_review_required, teacher_reviewed,
approved, rejected, training_ready, excluded_from_training` —
`supabase/migrations/20260518_smart_ip_marking.sql:134-139`.

---

## 3. Lifecycle / status diagram

```
                 POST /api/submissions
 (b2c_self self-study)  │   (b2b_class — teacher-set)
                         ▼
                  status = submitted
                         │  POST /api/marking/run
                         ▼
                  status = ai_marked ──────────────────────────┐
                         │                                      │
        ┌────────────────┴───────────────┐                      │
        │ source = b2c_self              │ source = b2b_class    │
        ▼                                ▼                       │
  STUDENT SEES AI FEEDBACK         status = teacher_review_      │
  (ai_marked | approved)           required                     │
        │                                │                      │
        │                  teacher reviews via                  │
        │                  /school/marking + POST               │
        │                  /api/school/marking/override         │
        │                  (writes a teacher_moderations row)    │
        │                                │                       │
        │              ┌─────────────────┼─────────────────┐     │
        │              ▼                 ▼                 ▼     │
        │        teacher_reviewed     rejected          approved │
        │              │                                  │     │
        │              │   (only `approved` is shown to    │     │
        │              │    the B2B student — SAFEGUARD)    ▼     │
        │              │                          STUDENT SEES   │
        │              │                          APPROVED       │
        │              │                          FEEDBACK       │
        │              └────────────┬─────────────────┘          │
        │                           ▼                            │
        │             consent + anonymisation check              │
        │                           ▼                            │
        │              training_ready / excluded_from_training ◄──┘
        │                           ▼
        └────────────►  training_data row (anon, no PII)
```

The **student-visible gate** is enforced in the UI at
`src/app/marking/results/[id]/page.tsx` — see §6.

---

## 4. Data flow: student → AI → teacher → training

1. **Student submits.** B2C self-study uses the submit page
   (`src/app/marking/submit/page.tsx`), which POSTs the documented contract to
   `/api/submissions` (`trySubmissionSpine`,
   `src/app/marking/submit/page.tsx:199-280`), then `POST /api/marking/run`
   with the returned `submissionId`. B2B class submissions enter the same
   `marking_submissions` spine via the school flow.
2. **AI marks.** `/api/marking/run` produces the structured `MarkingResult`
   and denormalised hot fields (`ai_result`, `ai_score`, `ai_ao_breakdown`,
   `ai_uncertainty_flags`) plus a `model_version_id` / `prompt_version_id` /
   `rubric_version_id` so every mark is reproducible.
3. **Student views.** `GET /api/marking/[submissionId]` returns the row.
   `src/app/marking/results/[id]/page.tsx` renders the AI result for
   `b2c_self` once `status ∈ {ai_marked, approved}`; for `b2b_class` it
   renders **only** when `status = approved`, otherwise an "awaiting teacher
   review" state (`canStudentSeeFeedback`,
   `src/app/marking/results/[id]/page.tsx`).
4. **Teacher moderates.** Teachers see their scope at `/school/marking`
   (feed: `src/app/api/school/marking/route.ts`) and override via
   `POST /api/school/marking/override`
   (`src/app/api/school/marking/override/route.ts:94`), which sets
   `teacher_grade/teacher_comment/teacher_reviewed_by/teacher_reviewed_at` and
   `status='teacher_reviewed'`
   (`src/app/api/school/marking/override/route.ts:199-208`). The full
   reviewer-action history (the training label) is the
   `teacher_moderations` table (`…20260518…:148`).
5. **Analytics.** `GET /api/school/analytics/marking`
   (`src/app/api/school/analytics/marking/route.ts`) aggregates
   `teacher_moderations.ao_corrections` + `marking_submissions.ai_ao_breakdown`
   into the metrics in §5.
6. **Training corpus.** Only after teacher approval **and** a consent /
   anonymisation check does a row enter `training_data` (PII-free, hashed
   ids) — see `FINE-TUNING-GUIDE.md`. **No autonomous retraining happens** —
   the system only collects clean, labelled data.

---

## 5. Analytics endpoint (`/api/school/analytics/marking`)

Additive sibling to `/api/school/analytics` (the existing dashboard route at
`src/app/api/school/analytics/route.ts:96`). Auth mirrors
`/api/school/marking`: admin / head_of_department see the whole school;
teacher sees only students in classes they own (two-step
`classes`→`class_students` lookup, identical pattern to
`src/app/api/school/marking/route.ts:87-108`). It is **empty-table-safe** —
on any missing table/column or error it returns a well-formed all-zero payload
(`emptyResponse()`), never a 500.

| Metric (response field) | Source columns | Derivation |
| --- | --- | --- |
| `commonWeaknesses.{school,byClass,byStudent}` | `teacher_moderations.ao_corrections` + `marking_submissions.ai_ao_breakdown` | AO correction occurrences + mean signed delta, grouped by school/class/student. |
| `mostCommonAoGaps` | `teacher_moderations.ao_corrections` (downgrades) + AI-flagged weak AOs | AOs the teacher most often LOWERED. |
| `improvementOverTime` | `marking_submissions` (`teacher_grade` else `ai_score`, `ai_max_marks`, `submitted_at`) | Per-student ordered score series (normalised %). |
| `mostImprovedStudents` | same series | Least-squares slope of % over the period; ranked positive. |
| `averageMarkMovement` | `teacher_moderations.{ai_score,teacher_score}` (fallback: submission inline) | Mean & mean-abs `teacher − ai`, plus upheld/raised/lowered counts. |
| `hardestQuestions` | `marking_submissions` (`question_text`/`essay_title`, `mark_scheme_id`, `teacher_grade`, `ai_score`) | Lowest avg teacher score keyed by `mark_scheme_id::question_text`. |
| `teacherOverridePatterns` | `teacher_moderations.decision` + movement samples | Override rate, decision histogram, avg adjustment when changed. |
| `aiConfidenceReliability` | `marking_submissions.ai_uncertainty_flags` + movement samples | Bucketed agreement: `flagged_uncertain` vs `not_flagged` (avg abs delta, exact-agreement rate). |

All numeric outputs pass through `round2()`; series payloads are capped (30
students for `improvementOverTime`, 10 for `hardestQuestions`/
`mostImprovedStudents`) to bound response size.

---

## 6. The student approved-only safeguard (where & how)

**Hard rule:** a student on a teacher-linked (`b2b_class`) submission may
ONLY ever see feedback once a teacher has APPROVED it. They must NEVER see a
draft AI mark for teacher-set work.

Enforcement points (defence in depth):

1. **API/RLS layer.** All writes flow through service-role-backed,
   role-guarded routes; `marking_submissions` RLS lets a student SELECT only
   their own rows (`…20260512…:118-122`) and there are **no authenticated
   write policies** (`…20260512…:124-127`). The Smart IP tables are
   service-role-ALL with scoped reads only
   (`…20260518…:220-252`); `training_data` and the `*_versions` tables have
   **no authenticated policy at all** (`…20260518…:234-235`).
2. **UI layer (this work).** `canStudentSeeFeedback()` in
   `src/app/marking/results/[id]/page.tsx` returns `true` for `b2b_class`
   **only** when `status === 'approved'`; for any non-b2b source it returns
   `true` when `status ∈ {ai_marked, approved}`. The default `source` when
   unknown is the **stricter** `b2b_class` (fail-closed). When the gate is
   closed the page renders `<AwaitingReviewState>` (no AI mark, no grade) and
   only a "back" action.
3. **Disclosure layer (reused).** When feedback IS shown it carries the
   accurate AI disclosure `<AiMarkingNotice>`
   (`src/components/ai/AiMarkingNotice.tsx`) and the Article-14 human-oversight
   control `<RequestHumanReviewButton>`
   (`src/components/ai/RequestHumanReviewButton.tsx`), both already on the
   results page and preserved.

The legacy localStorage path is preserved: a server-backed history stub is
tagged `serverBacked` so the page never short-circuits a server submission to
a stale local render (`src/app/marking/results/[id]/page.tsx`,
`resolveFromLocalStorage`). Legacy `mk_…` / `sample` ids 404 on the spine and
fall through to localStorage / the sample fallback unchanged.

---

## 7. Endpoints & pages (full inventory)

| Surface | Path | Ownership | Role |
| --- | --- | --- | --- |
| Submit (B2C) | `src/app/marking/submit/page.tsx` | extended here | POSTs `/api/submissions` → `/api/marking/run`; legacy `/api/mark`+localStorage fallback kept. |
| Results | `src/app/marking/results/[id]/page.tsx` | extended here | Resolves `GET /api/marking/[id]`; approved-only safeguard; legacy localStorage path kept. |
| Marking analytics | `src/app/api/school/analytics/marking/route.ts` | created here | Marking-derived metrics (§5). |
| Submission spine | `POST /api/submissions`, `POST /api/marking/run`, `GET /api/marking/[submissionId]` | built in parallel (NOT here) | Contract consumed by the UI above. |
| Teacher feed | `src/app/api/school/marking/route.ts` | pre-existing (read-only reuse) | Reverse-chron submissions for the caller's scope. |
| Teacher override | `src/app/api/school/marking/override/route.ts` | pre-existing (read-only reuse) | Writes teacher decision + status. |
| Existing analytics | `src/app/api/school/analytics/route.ts` (+ `class-performance`, `department-overview`, `hardest-questions`, `student-insights`) | pre-existing (untouched) | General school analytics — extended ADDITIVELY by the new sibling, not modified. |

---

## 8. Reuse decisions

- **No new auth.** `verifySchoolMember` (`src/lib/school-auth.ts:11`) reused
  for the analytics route — same role matrix and site-admin synthetic-member
  bypass as every other school route.
- **No new DB client.** Supabase `createServiceRoleClient()` /
  `createServerSupabaseClient()` (`src/lib/supabase/server.ts`) only — Prisma
  is deliberately **not** used for these tables (client not regenerated;
  Windows EPERM), matching the house style of
  `src/app/api/school/marking/route.ts`.
- **No new response helpers.** `next/server` `NextResponse.json` + the
  existing `@/lib/api-response` helpers, same as siblings.
- **No new i18n system.** New strings added to the curated
  `AI_ACT_DICTIONARY` (`src/lib/i18n/dictionary-ai-act.ts`), resolved via the
  existing `useT()` hook (`src/lib/i18n/use-t.ts:38`); no change to the
  fragile `lookup()` ordering in `dictionary.ts`.
- **No new UI components.** Results page reuses `GradePredictionCard`,
  `AOBreakdown`, `AnnotatedEssay` (`src/components/marking/*`),
  `AiMarkingNotice` and `RequestHumanReviewButton` (`src/components/ai/*`).
- **No schema change.** Schema is FROZEN (git `689eaa0a`); all reads/writes
  use only columns present in
  `supabase/migrations/20260518_smart_ip_marking.sql`.

---

## 9. Accuracy / robustness (cross-reference)

The accuracy instrument for the marking model lives in `evals/`
(`evals/README.md`) and is CI-gated under EU AI Act Article 15. It **refuses
to certify accuracy from synthetic data**; the single human handoff is
`evals/datasets/REAL-DATA-PROTOCOL.md`. The Smart IP corpus and the eval gold
set are distinct: see `FINE-TUNING-GUIDE.md` §6.
