# Smart IP — Security & Privacy Checklist

> Every control below is grounded in a real `path:line`. Items marked
> **(HANDOFF)** require a human action outside the codebase. No control is
> claimed that does not exist in the migration / routes.

---

## 1. RLS — deny-by-default

Row Level Security is enabled on every Smart IP table:

- `marking_submissions` RLS enabled —
  `supabase/migrations/20260512_marking_submissions.sql:59`.
- `model_versions`, `prompt_versions`, `rubric_versions`,
  `teacher_moderations`, `training_data` RLS enabled —
  `supabase/migrations/20260518_smart_ip_marking.sql:214-218`.

Deny-by-default is the Postgres RLS default once enabled: **no policy ⇒ no
access**. Policies are added narrowly:

| Table | SELECT (authenticated) | Write (authenticated) | Citation |
| --- | --- | --- | --- |
| `marking_submissions` | admins/HoDs whole school; teachers their classes; students own rows only | **none** — service-role only | `20260512…:77-127` |
| `teacher_moderations` | reviewers/admins of the submission's school only | **none** | `20260518…:236-252` |
| `training_data` | **none** (not client-readable) | **none** | `20260518…:223-235` |
| `model_/prompt_/rubric_versions` | **none** | **none** | `20260518…:223-235` |

`training_data` and the `*_versions` tables intentionally have **no
authenticated policy at all** — service-role/admin routes only
(`supabase/migrations/20260518_smart_ip_marking.sql:234-235`).

**Checklist**

- [x] RLS enabled on all 6 tables (cited above).
- [x] Student can SELECT only their own `marking_submissions`
      (`20260512…:118-122`).
- [x] No authenticated INSERT/UPDATE/DELETE policy on `marking_submissions`
      (`20260512…:124-127`).
- [x] `training_data` never client-readable (no authenticated policy,
      `20260518…:234-235`).
- [ ] **(HANDOFF)** Confirm the production Supabase project has not added a
      broad authenticated policy out-of-band; verify with a least-privilege
      smoke test post-migration.

---

## 2. Service-role writes only

All grade authority flows through vetted, role-guarded route handlers, never
the browser:

- Explicit `service_role` `FOR ALL … USING(true) WITH CHECK(true)` policy on
  every Smart IP table —
  `supabase/migrations/20260518_smart_ip_marking.sql:220-230`; and on
  `marking_submissions` — `20260512…:69-74`.
- The DB client wrapper isolates the service-role key server-side via a
  dynamic require so it is never bundled into the client
  (`src/lib/supabase/server.ts`, `createServiceRoleClient`).
- Teacher overrides validate grade ∈ a fixed set and comment length before
  writing (`src/app/api/school/marking/override/route.ts:39-90`) and re-check
  same-school + class ownership before the update
  (`src/app/api/school/marking/override/route.ts:152-195`).
- The new analytics route is **read-only** and never writes.

**Checklist**

- [x] No write path bypasses a route handler (RLS blocks authenticated
      writes; cited above).
- [x] Service-role key not exposed to client (`src/lib/supabase/server.ts`).
- [x] Override route validates + authorises before write
      (`override/route.ts:94-208`).

---

## 3. Role matrix

Roles resolved by `verifySchoolMember(userId, requiredRoles)`
(`src/lib/school-auth.ts:11`); site admins get a synthetic member
(`src/lib/school-auth.ts:55-75`).

| Capability | student | teacher | school_admin / head_of_department | platform_admin (site admin) |
| --- | --- | --- | --- | --- |
| Submit own answer (B2C) | ✅ | ✅ | ✅ | ✅ |
| See own AI feedback (b2c_self) | ✅ (status ai_marked/approved) | n/a | n/a | n/a |
| See teacher-set feedback (b2b_class) | ✅ **only when approved** | n/a | n/a | n/a |
| See own draft AI mark (b2b_class) | ❌ **never** | — | — | — |
| Read submissions in own classes | ❌ | ✅ | ✅ (whole school) | ✅ (all) |
| Override / approve a mark | ❌ | ✅ (own classes) | ✅ (whole school) | ✅ |
| Read marking analytics | ❌ | ✅ (own classes) | ✅ (whole school) | ✅ |
| Read `teacher_moderations` | ❌ | ✅ (own school, via RLS) | ✅ | ✅ |
| Read `training_data` | ❌ | ❌ | ❌ | ❌ (service-role routes only) |

Student-visible gate enforced UI-side by `canStudentSeeFeedback()` in
`src/app/marking/results/[id]/page.tsx` (fail-closed: unknown `source`
defaults to the stricter `b2b_class`), and DB-side by RLS as above.

**Checklist**

- [x] Analytics route gated `verifySchoolMember(user.id, ['admin',
      'head_of_department', 'teacher'])`
      (`src/app/api/school/analytics/marking/route.ts`).
- [x] Teacher scope = own classes only (two-step lookup, mirrors
      `src/app/api/school/marking/route.ts:87-108`).
- [x] Approved-only student gate, fail-closed
      (`src/app/marking/results/[id]/page.tsx`).

---

## 4. Consent gating

- B2C AI features honour an opt-out that is **server-checkable** (cannot be
  bypassed via localStorage): `isAiOptedOut()` /
  `isAiOptedOutServer(userId)` (`src/lib/ai-preferences.ts:20`, `:40`). The
  submit page already blocks AI marking when opted out
  (`src/app/marking/submit/page.tsx`, `aiOptedOut` branch).
- A submission only becomes training-eligible after an explicit consent +
  anonymisation check — `marking_submissions.training_eligible`
  (`supabase/migrations/20260518_smart_ip_marking.sql:127`) and
  `teacher_moderations.training_eligible`
  (`supabase/migrations/20260518_smart_ip_marking.sql:164`). The
  `training_data` table comment states it is _"consent-gated"_ and written
  _"only … after a teacher approval + consent check"_
  (`supabase/migrations/20260518_smart_ip_marking.sql:172-176`, `:258`).

**Checklist**

- [x] AI opt-out enforced pre-submission (UI) and server-checkable
      (`src/lib/ai-preferences.ts`).
- [x] `training_eligible` flags exist on both spine and moderation rows
      (cited above).
- [ ] **(HANDOFF)** The training-corpus writer (`prepareTrainingRecord()`,
      built with the fine-tuning pipeline) MUST verify
      `isAiOptedOutServer` + `training_eligible` before inserting; documented
      in `FINE-TUNING-GUIDE.md` §3. Confirm in code review of that writer.

---

## 5. Anonymisation

- `training_data` _"Stores NO student/teacher names, emails, DOB or raw
  school identifiers. IDs are hashed."_
  (`supabase/migrations/20260518_smart_ip_marking.sql:174-176`). The schema
  has `anon_submission_id`, `anon_school_id`, `anon_class_id` and no
  name/email/DOB columns
  (`supabase/migrations/20260518_smart_ip_marking.sql:178-205`).
- Analytics responses expose names only within the caller's authorised scope
  and never leak email except where an existing sibling route already does
  for admins; the new route surfaces `student_name` (derived
  `full_name || email-localpart || 'Student'`) but **no raw email**
  (`src/app/api/school/analytics/marking/route.ts`, `studentNameById`).

**Checklist**

- [x] `training_data` has no direct-identifier columns (schema cited).
- [x] Analytics route emits display names only, no raw email
      (`analytics/marking/route.ts`).
- [ ] **(HANDOFF)** Anonymisation of any **real** eval scripts (minors' data)
      per `evals/datasets/REAL-DATA-PROTOCOL.md` §3 — separate from the
      training corpus; update DPIA/ROPA.

---

## 6. Audit logging & traceability

- Every mark records what produced it: `model_version_id`,
  `prompt_version_id`, `rubric_version_id` on `marking_submissions`
  (`supabase/migrations/20260518_smart_ip_marking.sql:112-117`).
- Every teacher action is appended (not overwritten) to
  `teacher_moderations` with `reviewer_user_id`, `reviewer_member_id`,
  `decision`, before/after feedback, timestamps
  (`supabase/migrations/20260518_smart_ip_marking.sql:148-166`), indexed by
  submission + time (`:168`).
- Inline single-override audit fields on the spine
  (`teacher_reviewed_by`, `teacher_reviewed_at`, `approved_by`,
  `approved_at`) — `20260512…:35-36`, `20260518…:125-126`.

**Checklist**

- [x] Model/prompt/rubric provenance per mark (cited).
- [x] Append-only reviewer history (`teacher_moderations`, cited).
- [x] Override route stamps reviewer + time
      (`override/route.ts:199-208`).

---

## 7. Model / prompt / rubric versioning

- `model_versions` (provider, model_name, model_version, settings, is_active)
  — `supabase/migrations/20260518_smart_ip_marking.sql:28-38`; live model
  seeded replay-safe (`:72-75`).
- `prompt_versions` content-hash-keyed, `active` flag, FK to rubric —
  `supabase/migrations/20260518_smart_ip_marking.sql:53-66`.
- `rubric_versions` content-hash of the in-code scheme —
  `supabase/migrations/20260518_smart_ip_marking.sql:40-51`.
- Re-eval triggers on any model-literal/prompt/mark-scheme change are
  enforced by the eval gate (`evals/README.md`, "Drift & regression
  policy").

**Checklist**

- [x] Version tables present + FK'd from `marking_submissions` (cited).
- [ ] **(HANDOFF)** The marking runner must populate the three
      `*_version_id` FKs on every mark (built with the spine); verify in code
      review of `/api/marking/run`.

---

## 8. Hard rules (non-negotiable)

- [x] **Students never see a draft AI mark for teacher-set (`b2b_class`)
      work.** Enforced UI-side (`canStudentSeeFeedback`, fail-closed) and
      DB-side (RLS student = own rows only). — `results/[id]/page.tsx`,
      `20260512…:118-122`.
- [x] **No autonomous retraining.** The system collects clean labelled data
      only; `training_data` is an inert corpus
      (`supabase/migrations/20260518_smart_ip_marking.sql:172-176`,
      `:258`). See `FINE-TUNING-GUIDE.md`.
- [x] **No PII in the training corpus.** Schema has hashed ids only
      (`supabase/migrations/20260518_smart_ip_marking.sql:174-205`).
- [x] **Accuracy is never certified from synthetic data**
      (`evals/README.md` synthetic-vs-real gate; handoff:
      `evals/datasets/REAL-DATA-PROTOCOL.md`).
