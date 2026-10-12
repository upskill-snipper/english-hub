# Schools, teachers, parents and roles

This chapter covers everything that is not the single learner working alone: the B2B school portal at `/school`, the guardian surface, the paid-marker console and the operator admin panel. All four are structurally different from the consumer product - they are multi-tenant, they are gated on a Supabase table rather than on a Prisma row, and they are far less exercised than the consumer paths. Treat every claim you find in a comment or a README here as a hypothesis until you have checked it against the database, because several of these surfaces write to columns and tables that no migration in this repo creates.

Read this before you touch [`src/lib/school-access.ts`](../../src/lib/school-access.ts), [`src/lib/school-auth.ts`](../../src/lib/school-auth.ts), [`src/lib/marker-auth.ts`](../../src/lib/marker-auth.ts) or anything under [`src/app/api/school/`](../../src/app/api/school).

---

## 1. There are four role registers and they do not agree

This is the single most important thing in the chapter. "Role" means four different things depending on which file you are in, and no code synchronises them.

| Register                   | Where it lives                                                                             | Allowed values                                                                                                                                  | Who writes it                                              | Who reads it                                                |
| -------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------- |
| **School membership role** | `public.school_members.role` (Supabase)                                                    | `admin`, `head_of_department`, `teacher`, `student`                                                                                             | invite, join-code, bulk upload, `/api/school/roles`        | the entire `/school` portal and every `/api/school/*` route |
| **Profile role**           | `public.profiles.role` (Supabase)                                                          | CHECK: `student`, `teacher`, `parent`, `admin` ([`20260327_add_profile_role.sql:3-5`](../../supabase/migrations/20260327_add_profile_role.sql)) | signup, `/api/school/register`                             | the identity projection, and almost nothing else            |
| **Application role**       | Prisma `User.role`, enum `Role` ([`prisma/schema.prisma:175`](../../prisma/schema.prisma)) | `STUDENT`, `ADMIN`, `REVIEWER`, `TEACHER`, `PARENT`                                                                                             | `/api/auth/register`, the identity projection, bulk upload | parent linking, `/api/admin/users*`, `requireAdmin`         |
| **Marker status**          | `public.markers.status` + `marker_board_access`                                            | `active`/`paused`/`offboarded`, plus per-board `requested`/`approved`/`rejected`/`revoked`                                                      | `/api/marker/apply`, admin approval                        | the marker console and the review API                       |

Consequences you will actually hit:

- A school teacher normally has `school_members.role = 'teacher'` and Prisma `User.role = 'STUDENT'` (the default), because nothing writes `TEACHER` when a teacher accepts a school invite. The portal works anyway, because the portal never reads the Prisma role.
- [`/api/school/register`](../../src/app/api/school/register/route.ts) wrote `profiles.role = 'school_admin'`, which the profiles CHECK constraint rejects, so the profile upsert always failed and the failure was swallowed as non-fatal. Since 12 October 2026 it writes `'teacher'`: the administrator's school role lives in `school_members`, and `profiles.role = 'admin'` would mean a site admin. `user_metadata.role` still says `school_admin`, because that is free-form JSON, and the signup trigger maps any unknown role there to `student`.
- [`src/lib/identity/projection.ts:111-118`](../../src/lib/identity/projection.ts) maps `profiles.role` to the Prisma enum and treats anything it does not recognise - including `school_admin` - as `STUDENT`. `ADMIN` and `REVIEWER` are deliberately never assignable from a profile.
- `REVIEWER` exists in the Prisma enum and is filterable in [`/api/admin/users`](../../src/app/api/admin/users/route.ts) (line 54), but nothing assigns it and there is no reviewer UI. It is vestigial. The human-review-request tables it implies are read only through `getUserDetails` in [`src/lib/admin.ts`](../../src/lib/admin.ts).

### The `.single()` trap: one school per person

[`getSchoolAccess`](../../src/lib/school-access.ts) (line 29-34), [`getSchoolForUser`](../../src/lib/school-access.ts) (line 152) and [`verifySchoolMember`](../../src/lib/school-auth.ts) (line 14-20) all query `school_members` filtered only by `user_id` and `invite_status = 'accepted'`, then call `.single()`. A person with accepted memberships at **two** schools makes that query return multiple rows: `getSchoolAccess` returns `null` (locked out of the portal entirely) and `verifySchoolMember` **throws** `SchoolAuthError` (line 30) rather than returning null, which most callers do not catch as a 403.

The staff invitation used to reach it: it added an already-registered email straight in as `invite_status: 'accepted'` without checking whether that person already belonged to another school, so inviting a teacher who already worked at another client school silently broke both accounts. **Since 12 October 2026** the invitation ([`src/lib/school/invite-staff.ts`](../../src/lib/school/invite-staff.ts), used by `/api/school/invite` and the operator's `/api/admin/schools/[schoolId]/staff`) skips anyone with an accepted membership at a different school, checked by email and again by account id, writes nothing, sends nothing, and reports them.

Two paths still reach it. [`/api/school/invite/accept`](../../src/app/api/school/invite/accept/route.ts) accepts a pending invitation without the check, so someone invited by school A who is accepted at school B before they open A's link ends up in both. And the pupil upload links a pupil by email without it, so a pupil accepted at one school and uploaded by another ends up in both.

---

## 2. Site admin: the master key

[`src/lib/site-admin.ts`](../../src/lib/site-admin.ts) reads `SITE_ADMIN_EMAILS` (comma-separated, lower-cased, no default). `isSiteAdmin(email)` is threaded through every school guard and manufactures a **synthetic membership** rather than bypassing the check:

- [`school-access.ts:37-47`](../../src/lib/school-access.ts) returns a fake `SchoolAccess` with `schoolId: '__site_admin__'` and `userRole: 'admin'`.
- [`school-auth.ts:55-75`](../../src/lib/school-auth.ts) returns a fake `school_members` row with the same sentinel id.
- [`school-middleware.ts:64-76`](../../src/lib/school-middleware.ts) does the same again - but that module has no importers, so this third copy never runs. Only the first two are live guards.

`'__site_admin__'` is not a uuid and is not a real `schools.id`. Any route that takes `member.school_id` and uses it in a query will get zero rows or a Postgres `22P02` invalid-uuid error. A site admin can therefore reach every school screen and see nothing on most of them. That is a design consequence, not a bug you can fix by casting: there is no "all schools" data path.

---

## 3. Admin is two incompatible systems

There are two admin checks, they use different sources of truth, and they disagree.

|                           | [`verifyAdmin()`](../../src/lib/admin-auth.ts)                              | [`requireAdmin()`](../../src/lib/admin.ts)                                                   |
| ------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Source                    | `ADMIN_EMAILS` env (default `admin@theenglishhub.app`) **or** `isSiteAdmin` | Prisma `User.role === 'ADMIN'` **or** `isSiteAdmin(user.email)`                              |
| Needs a Prisma `User` row | no                                                                          | **yes** - `if (!user) throw AdminAuthError('User not found', 404)` at line 136               |
| Returns                   | `{ user, error: 'Unauthorized' \| 'Forbidden' \| null }`                    | throws `AdminAuthError`; returns `{id,email,role}`                                           |
| Used by                   | 26 routes: every `/api/admin/*` except users, plus `/api/school/register`   | 3 routes only: `/api/admin/users`, `/api/admin/users/[id]`, `/api/admin/users/[id]/consents` |

The concrete failure: `requireAdmin` checks `!user` **before** it checks `isSiteAdmin`. Because most accounts have no Prisma `User` row (see chapter 05), a site admin who is in `SITE_ADMIN_EMAILS` but unprojected gets **404 "User not found"** from `/api/admin/users`, while every other admin screen works for them. Conversely, someone whose Prisma row is `role = 'ADMIN'` but whose email is in neither env list is refused by all 26 `verifyAdmin` routes. Neither list is derivable from the other, and nothing reconciles them.

Do not "fix" this by making one call the other without deciding which is authoritative. `ADMIN_EMAILS` is effectively the live one - it guards the entire admin panel and school provisioning.

### The admin pages have no server-side gate

Every page under [`src/app/admin/`](../../src/app/admin) is `'use client'` except [`training-data/page.tsx`](../../src/app/admin/training-data/page.tsx), which is a server component that calls `verifyAdmin()` directly (lines 61, 99). The rest, including [`admin/page.tsx`](../../src/app/admin/page.tsx), render a spinner, call their data API, and `router.push('/dashboard')` on a 403 (lines 84-92). The protection is real - it lives in the APIs - but the HTML shell, the tool names and the layout are served to any signed-in user. `/admin` is in the middleware `protectedRoutes` list ([`src/lib/supabase/middleware.ts:170-184`](../../src/lib/supabase/middleware.ts)), so it is at least behind sign-in, and the layout sets `robots: noindex`.

Admin tools reachable from the dashboard: examiner board approvals, marker drive, marker QA, board agreement, marker pay, the marker console, training data, model performance, prompt management, rubric management, AI marking config, verify user, school provisioning, school setup (`/admin/schools`, section 4), email diagnostics. [`/admin/affiliates`](../../src/app/admin/affiliates/page.tsx) exists but is linked from nowhere.

---

## 4. How a school gets into the product

There is exactly one code path that creates a tenant, and it is operator-driven.

1. **Enquiry.** The `/schools` and `/school-pilot` lead forms POST to `/api/school-inquiry`, inserting into `school_inquiries` ([`20260823_school_inquiries.sql`](../../supabase/migrations/20260823_school_inquiries.sql)). That table had no migration until August 2026 and leads were being dropped with a `42P01`. RLS is on with no policies - service-role reads only, and there is no admin UI that lists these leads.
2. **Provisioning.** A site admin opens [`/admin/school-provisioning`](../../src/app/admin/school-provisioning/page.tsx), which generates a random temporary password in the browser and POSTs to `/api/school/register`. The page header (lines 3-22) records why it exists: the product sold school registration in several places but nothing ever called the only handler that creates a school, so signed schools had no route in at all.
3. **`POST /api/school/register`** ([route](../../src/app/api/school/register/route.ts)) is gated by `verifyAdmin()` at line 109. It was public until 2026-08-23, protected only by an IP rate limit, which meant any visitor could mint a privileged account plus a paying-school row (the comment at lines 96-108 is the incident note). It then: resolves the promo code, generates a unique slug, creates an email-confirmed Supabase auth user, inserts `schools`, inserts the admin's `school_members` row as `accepted`, upserts `profiles`, and rolls back the earlier steps on any later failure.

4. **Setup.** From 12 October 2026 the operator then sets the school up from the spreadsheet it returns, at [`/admin/schools`](../../src/app/admin/schools/page.tsx) (linked from the admin dashboard as "School setup"). The page for one school, `/admin/schools/[schoolId]`, has four steps in order: the school's AI authorisation (the statement in [`src/lib/school/ai-authorisation.ts`](../../src/lib/school/ai-authorisation.ts) word for word, plus a note saying where the school's written confirmation is held, which goes to the `AuditLog` as `SCHOOL_AI_AUTHORISED`), then its Staff, Classes and Pupils sheets, each pasted or uploaded and answered row by row. The routes are under [`src/app/api/admin/schools/`](../../src/app/api/admin/schools): every one is `verifyAdmin`-gated, takes the school from the path and checks it exists, and uses the service-role client, because a site admin's only "school" is `'__site_admin__'` (section 2). Staff go through the same invitation as the school's own (section 5); classes set `teacher_id` to the teacher's `school_members.id` (section 7); pupils go through the same upload as the school's own (section 9), with the operator recorded as the uploader.

**Fixed 12 October 2026:** the `schools` insert writes `exam_board` and `curriculum`, and production had neither column (checked in `information_schema`), so every provisioning attempt would have failed. Nobody had noticed, because production held no schools at all. [`20261012_schools_pilot_columns.sql`](../../supabase/migrations/20261012_schools_pilot_columns.sql) adds them. It also adds `website` and `timezone`, which the settings route reads, and `ai_authorised_at` / `ai_authorised_by`. Those last two record a school's confirmation, as data controller, that its privacy notice covers AI marking and that parents have been told.

### Access and expiry

`schools.access_type` is `trial | founder | paid | expired`; `schools.subscription_status` is `trialing | active | past_due | cancelled`. Whether a school is live is decided in one place: `resolveSchoolAccessType` / `isSchoolAccessActive` in [`src/lib/school-access.ts`](../../src/lib/school-access.ts), which `getSchoolAccess` (the portal gate) and `checkSchoolAccessActive` both call, and which pupil entitlement is to import. Do not write a second copy.

The rule reads `access_type ?? subscription_status ?? 'standard'`:

- **Live.** `founder`, `paid`, `active`, `standard`, `trial` and `trialing` are live until `access_until`.
- **Expired.** Once `access_until` passes, the school is expired, whatever its type.
- **Fail closed.** An `access_until` that does not parse, and any other value (`expired`, `cancelled`, `past_due`, anything new), counts as expired.

**A defect, fixed 12 October 2026.** The old mapping recognised only `founder`, `trialing`, `active` and `standard`. Provisioning writes `trial` (also the column default), so `trial` and `paid` both fell through to `expired`, and every school provisioned through `/api/school/register` would have been locked out of its own portal. The two copies of the rule also disagreed about `access_until` on paid plans.

**How provisioning sets access now:**

- A paid pilot or founding place is provisioned with `accessType: 'paid'` and its last day (`/admin/school-provisioning` asks for both). The route stores the end of that day, 23:59:59 UTC, with `subscription_status: 'active'`.
- A promo code whose access date has passed is refused with a 422. Before, it would have created a school that was locked out at once.
- The FOUNDER code's date is `2026-08-31`, so FOUNDER is now always refused.
- Without an access type the route still creates a `trial` school with no end date.

The opposite rule - defaulting a NULL `access_until` to `2026-08-31` and expiring the school - exists only in [`src/lib/school-middleware.ts:154`](../../src/lib/school-middleware.ts), which nothing in the repo imports (see [chapter 01](01-architecture.md)). Do not reason about live behaviour from that file, and do not "fix" `school-access.ts` to match it.

One display inconsistency follows from the same split: [`SchoolAccessBanner.tsx:206`](../../src/components/school/SchoolAccessBanner.tsx) uses the dead module's rule, falling back to `'2026-08-31'` when `access_until` is null. A NULL-dated founder school that the gate correctly admits is shown the urgent "expires in 0 days" banner anyway.

#### Every site that hard-codes the date

Extending or retiring FOUNDER is not a three-line change. The repo mentions `2026-08-31` eleven times. Eight are live sites that have to move together:

| Site                                                                                                                            | What it does                                                                |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`src/app/api/school/register/route.ts:56`](../../src/app/api/school/register/route.ts)                                         | `resolvePromoCode` returns it; line 393 writes it to `schools.access_until` |
| [`src/app/api/school/promo/validate/route.ts:55`](../../src/app/api/school/promo/validate/route.ts)                             | the `accessUntil` quoted to an enquirer before registration                 |
| [`src/lib/school-middleware.ts:154`](../../src/lib/school-middleware.ts)                                                        | default expiry for a NULL `access_until` - dead module                      |
| [`src/lib/school-middleware.ts:188`](../../src/lib/school-middleware.ts)                                                        | `getFounderDaysRemaining()` - dead module                                   |
| [`src/components/school/SchoolAccessBanner.tsx:39`](../../src/components/school/SchoolAccessBanner.tsx)                         | the "active until" date rendered when `access_until` is null                |
| [`src/components/school/SchoolAccessBanner.tsx:206`](../../src/components/school/SchoolAccessBanner.tsx)                        | `effectiveUntil`, which decides the banner variant                          |
| [`src/data/demo/school.ts:16`](../../src/data/demo/school.ts)                                                                   | `DEMO_SCHOOL.accessUntil`, read by the `/demo/school/*` surfaces            |
| [`supabase/migrations/20260404_school_promo_and_access.sql:19`](../../supabase/migrations/20260404_school_promo_and_access.sql) | the `promo_codes` seed row, as `free_until_date`                            |

Three further mentions are comments that go stale with them: [`register/route.ts:375`](../../src/app/api/school/register/route.ts), [`school-access.ts:105`](../../src/lib/school-access.ts) and [`school-middleware.ts:152`](../../src/lib/school-middleware.ts). The note at [`promo/validate/route.ts:46-49`](../../src/app/api/school/promo/validate/route.ts) already records the open decision - extend the date or retire the code - and that the customer-facing copy was made date-neutral in the meantime.

`register` writes `subscription_status: 'active'` for a paid school and `'trialing'` otherwise. `'founder'` is not in the `subscription_status` CHECK, so the founder distinction lives only in `access_type`.

---

## 5. Getting staff in

Two routes, plus one that is admin-only bookkeeping.

| Route                                      | Guard                                          | Effect                                                                                                                 |
| ------------------------------------------ | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `POST /api/school/invite`                  | `verifySchoolMember(['admin'])`                | up to 50 emails, role `teacher` or `head_of_department` only ([invite-staff.ts](../../src/lib/school/invite-staff.ts)) |
| `POST /api/admin/schools/[schoolId]/staff` | `verifyAdmin()`                                | the operator's Staff sheet, through the same invitation, up to 100 people a run                                        |
| `GET /api/school/invite`                   | `verifySchoolMember(['admin'])`                | lists pending invites                                                                                                  |
| `DELETE /api/school/invite/[token]`        | `verifySchoolMember(['admin'])`                | revokes                                                                                                                |
| `POST /api/school/members`                 | any member, but 403s teachers inline (line 24) | older invite path; HoDs cannot invite admins (line 51)                                                                 |
| `POST/DELETE /api/school/roles`            | `verifySchoolMember(['admin'])`                | change role, remove member; cannot demote/remove self                                                                  |

Invite mechanics live in [`src/lib/school/invite-staff.ts`](../../src/lib/school/invite-staff.ts) since 12 October 2026, shared by the school's route and the operator's. A 7-day `crypto.randomUUID()` token goes in `school_members.invite_token` with `invite_expires_at` ([added by `20260322_new_features.sql:68`](../../supabase/migrations/20260322_new_features.sql)). First, anyone with an accepted membership at a different school is skipped and reported (section 1). Then three branches:

- Existing pending/expired invite for that email → new token, status back to `pending`, re-send.
- **Email already has a `profiles` row → inserted directly as `invite_status: 'accepted'`**, after the same cross-school check on the account id. No consent from the invitee.
- New email → `user_id: null`, `full_name` the name the caller gave (the operator's Staff sheet has one) or derived from the email local-part, status `pending`.

Each person's result says whether their email went. Until 12 October an invitation whose email failed was counted as sent, and the re-issue's database update was never checked.

Acceptance is [`/api/school/invite/accept`](../../src/app/api/school/invite/accept/route.ts): `GET` is unauthenticated (so the landing page can show the school name), `POST` requires a session and requires `user.email` to match `member.email` exactly (line 144). On success it sets `user_id`, `invite_status: 'accepted'`, `invite_token: null` and `last_active_at` - but **never sets `accepted_at`**, so that column is null for every invited teacher and is not a usable signal.

`school_members.full_name` was `NOT NULL` with no default until [`20260818_school_members_student_role.sql:65`](../../supabase/migrations/20260818_school_members_student_role.sql), which means every invite INSERT failed at the database layer before that migration. The same migration added `year_group` and widened the role CHECK to include `student`; its header is the best single description of what was broken in this table.

---

## 6. Getting pupils in - and four definitions of "a student"

There are three enrolment paths and they write to different tables.

| Path                                    | Writes                                                                                            | Produces a `school_members` row?       |
| --------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Join code, `POST /api/school/join`      | `school_students` (+ `class_students` if the code carries a class)                                | **no**                                 |
| `POST /api/school/students`             | `school_members` with `role: 'student'`                                                           | yes                                    |
| Bulk upload commit (school or operator) | Prisma `User` + Supabase auth user, then `school_members`, `class_students` and `school_students` | yes, since 12 October 2026 (section 9) |

[`src/lib/school-students.ts`](../../src/lib/school-students.ts) exists to paper over this. Its header (lines 1-21) names the four competing definitions - `school_members role='student'`, `school_students`, `class_students`, and the Prisma `User` row - and `getSchoolStudents()` unions the first two, deduplicating on `user_id` and preferring the `school_members` row because it carries name and email. It is used by `/api/school/students`, `/api/school/analytics` and `/api/school/export/report`. **If you add a new "how many pupils" surface, use `getSchoolStudents`, not a direct table read.** `class_students` is deliberately a class roster, not a membership source.

Note that a join-code pupil has no `school_members` row, so `getSchoolAccess` returns `null` for them and they can never reach `/school`. That is correct - the portal is staff-only - but it also means `school_students` rows carry no name or email, which is why the union prefers the other table.

### The join-code column mismatch

[`/api/school/join-codes`](../../src/app/api/school/join-codes/route.ts) creates a code with a **`type`** column, and the portal reads `code.type`. [`/api/school/join`](../../src/app/api/school/join/route.ts) branches on **`joinCode.role`**, defaulting to `'student'`.

**Settled on 12 October 2026: production had neither column**, so creating any join code failed. The `information_schema` check showed this. [`20261012_school_join_codes_type.sql`](../../supabase/migrations/20261012_school_join_codes_type.sql) adds `type`, a text column that is either `student` or `teacher` and defaults to `student`.

**Fixed 12 October 2026:** `/api/school/join` now reads `type`. Before that every code redeemed as a pupil code, so a teacher join code enrolled the teacher as a pupil. Only an exact `'teacher'` takes the staff path; anything else, a missing value included, is a pupil code. Note that this lands with the pupil-side school work: until it is deployed, teacher codes still redeem as pupil codes.

**Enrolment no longer writes a subscription (12 October 2026).** The join route and `POST /api/school/classes/[classId]/students` used to write `'pro'` to a pupil's `profiles.subscription_status`; neither does now, because a pupil's access comes from the school's live pilot, checked at use (chapter 06). The class-students route is also staff-only now (admin, head of department, teacher): enrolment confers AI access and, at a school that has recorded its AI authorisation, stands in for a parent's consent, and it used to admit any member, pupils included.

Join-code mechanics that are correct and worth keeping: the use counter is incremented through the `increment_join_code_uses` RPC ([`20260419_school_join_code_atomic_increment.sql`](../../supabase/migrations/20260419_school_join_code_atomic_increment.sql)) rather than read-then-write, and both paths roll back the membership they created if the cap was hit in between. Seat accounting uses a `.lt('seats_used', seat_limit)` guard on the update so two concurrent joins cannot both win.

---

## 7. Classes and cohorts

`classes` ([`003:41-53`](../../supabase/migrations/003_school_analytics.sql)) belongs to a school and has a **`teacher_id` that references `school_members.id`, not `auth.users.id`**. Get that wrong and every teacher-scoped query silently returns nothing. `class_students` links `class_id` to `auth.users.id` with an `is_active` soft-delete and a `removed_at`. `classes.student_count` is a denormalised counter maintained by hand in the join route and the class-students route; nothing reconciles it, so treat it as advisory.

There is no separate cohort or year-group entity. "Year group" is free text on `school_members.year_group` and `school_students.year_group`, written as strings like `Year 10`. `academic_year` on `classes` defaults to the literal `'2025-2026'`.

Class CRUD: create is admin/HoD ([`classes/route.ts:154`](../../src/app/api/school/classes/route.ts)), read and update are any member, delete is admin only.

---

## 8. Teacher visibility, and what RLS actually enforces

The portal gate ([`src/app/school/layout.tsx:20-26`](../../src/app/school/layout.tsx)) admits `admin`, `head_of_department` **and** `teacher`. It did not until 2026-08-18; the old admin-only gate locked out the role the marking queue and analytics were built for and bounced signed-in users into a login loop. Admin-only pages are expected to carry their own inline check via [`requireSchoolAdmin`](../../src/lib/school-access.ts) - "expected to" is the layout's own wording, and you should verify per page rather than assume.

The gate is a client component ([`school-portal-gate.tsx`](../../src/app/school/school-portal-gate.tsx)) purely because it needs the pathname: `/school/join` and `/school/invite/[token]` bypass the role check entirely so people with no membership yet can get in (lines 99-107). Note that `/school/invite` without a token is the admin invite page and stays gated, and that middleware only allow-lists `/school/invite` - `/school/join` still requires a session ([`middleware.ts:193`](../../src/lib/supabase/middleware.ts)).

Teacher scoping to pupil work happens in three places and they are consistent, which is unusual for this codebase:

| Layer                                                                                                                         | Rule                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `GET /api/school/marking` and the other portal routes ([`_lib/staff-scope.ts`](../../src/app/api/school/_lib/staff-scope.ts)) | teachers are filtered to `class_id IN (classes where teacher_id = member.id)`; admins and HoDs see the whole school |
| RLS `marking_submissions_teachers_select` ([`20260518:130-140`](../../supabase/migrations/20260518_smart_ip_marking.sql))     | teacher must be an accepted member of the row's school **and** own a class containing that student                  |
| `POST /api/marking/[submissionId]/review` ([lines 459-523](../../src/app/api/marking/[submissionId]/review/route.ts))         | same two-step `classes` → `class_students` lookup; B2C rows (`school_id` null) require `isSiteAdmin`                |

**Since 12 October 2026 the portal does not depend on RLS for any of this.** `/api/school/marking` used to read through the teacher's own session and turn any error into `{ submissions: [] }`, so an RLS denial, a missing table and a teacher with no work all looked the same. Every portal route now reads with the service role and scopes explicitly through [`src/app/api/school/_lib/staff-scope.ts`](../../src/app/api/school/_lib/staff-scope.ts) (membership from `verifySchoolMember`, the same check the review route uses), and a failed read answers 500. The queue lists by class rather than by active enrolment, so a pupil who has left a teacher's class still appears in that teacher's queue for the essays they wrote there, and the review route then refuses the decision; that edge case is deliberate. Those routes read pupils' names server-side from `school_members` and `profiles`, and read whole result sets in pages ([`_lib/reads.ts`](../../src/app/api/school/_lib/reads.ts) `readAllPages`), because PostgREST stops at 1,000 rows without an error.

Two asymmetries to know about:

- `teacher_moderations_school_select` ([`20260518:360-376`](../../supabase/migrations/20260518_smart_ip_marking.sql)) reads as if any accepted teacher could see moderation rows for any submission in the school. In practice it is class-scoped. Its subquery reads `marking_submissions` under that table's own RLS, so a teacher matches only the submissions they can already see. A local Postgres test of the 12 October rules confirmed this: a second teacher saw none of the first teacher's moderations.
- `anyone_can_read_active_join_codes` from [`004_fix_school_rls.sql:322-325`](../../supabase/migrations/004_fix_school_rls.sql) let every authenticated user enumerate every school's live join codes. It was dropped again by [`20260419_drop_school_join_codes_select_policy.sql`](../../supabase/migrations/20260419_drop_school_join_codes_select_policy.sql). If you re-apply 004 wholesale you will reintroduce it.

### 12 October 2026: the school tables' RLS, proved broken and repaired

Read on production with `pg_policies` and probed read-only. Each table was counted as role `authenticated`, inside a rolled-back READ ONLY transaction, using the method in `.tmp-rls/school-rls-probe.mjs` in the main checkout. Three faults:

1. **Infinite recursion (42P17).** Signed-in reads of `school_members`, `school_students`, `school_join_codes`, `classes`, `class_students`, `marking_submissions`, `teacher_moderations`, `bulk_import_jobs` and `import_results` all failed. Two policies caused it:
   - `school_members` had a SELECT policy that queried `school_members`;
   - the `classes` and `class_students` policies queried each other.

   The portal gate reads with the service role, so it still worked. But every browser-side read of these tables failed. So did `/api/school/marking`, which reads with the user's session and turns any error into an empty list.

2. **A pupil could make themselves a school admin.** `members_update_own_row` let any member update every column of their own `school_members` row, role included. Only the recursion blocked it; fixing the recursion alone would have opened it.
3. **Pupils saw the staff view.** Any member could read every member's name and email, every class enrolment and every join code in their school, including teacher codes, and could add anyone to any class.

[`20261012_school_access_rules.sql`](../../supabase/migrations/20261012_school_access_rules.sql) replaces those policies. The rule it follows: **no policy reads its own table, or a table whose policies read back.** Membership is checked through SECURITY DEFINER functions:

- `get_user_school_role` and `get_user_school_ids`, which already existed;
- `get_class_school_id` and `is_active_class_student`, which are new.

Staff means an accepted `admin`, `head_of_department` or `teacher`. Under the new policies:

- **school_members:** staff read their school's members; anyone reads their own row. There is no self-update policy; writes go through the service role.
- **classes:** staff read their school's classes; a pupil reads the classes they are actively enrolled in.
- **class_students:** staff read, add and update; an admin removes; a pupil reads only their own enrolments.
- **school_join_codes:** staff read; pupils do not, because redeeming a code uses the service role.

The rules were tested before they were written down. A local Postgres 17 (PGlite) held the production policies verbatim and reproduced the recursion on the same nine tables. After the migration, 73 read and write checks passed, across two schools, pupils, teachers, a head of department, admins, an outsider and anon. The test harness is not in the repo.

**After deploy,** repeat the read-only probe. It should report counts, not 42P17.

### The RLS you are reading may not be the RLS that is deployed

[`scripts/apply-migrations.mjs:42`](../../scripts/apply-migrations.mjs) sets `BASELINE_CUTOFF = '20260530'`. On its first run it inserted every file sorting before that into `_migrations_applied` **without executing it**. Numeric-prefixed files sort before `2`, so `003_school_analytics.sql` and `004_fix_school_rls.sql` - which between them create the whole school schema and all of its RLS - were baselined, not run. They were presumably applied by hand first; `20260512_user_is_minor.sql` was baselined the same way and had **not** been, which is the incident [`scripts/check-schema-drift.mjs`](../../scripts/check-schema-drift.mjs) was written to catch.

The drift checker explicitly does not check constraints, indexes or policies (its lines 37-45). So for any table not covered above, **you cannot establish the deployed RLS state from this repo**: query `pg_policies` before you rely on it. For the school tables it was read on 12 October 2026. No `FOR ALL USING (true)` policy from 003 was present. The live set mixed some of 004's policies with several that no migration creates, for example "Users can view members of their schools". The faults were the three above.

---

## 9. Bulk upload, and the legacy importer

There are two importers. Both are admin-only, both accept CSV, and only one is in the navigation.

**Legacy: `POST /api/school/import`** ([route](../../src/app/api/school/import/route.ts)), UI at [`/school/import`](../../src/app/school/import/page.tsx). Multipart upload, handles students _and_ teachers, writes `bulk_import_jobs` and `import_results` ([`20260404:36-65`](../../supabase/migrations/20260404_school_promo_and_access.sql)) including a plaintext `temporary_password` per row for the credentials export at `/api/school/export/logins`. This is the one in the sidebar (`school.sidebar.import_users`).

**Current: `POST /api/school/bulk-upload/validate` then `/commit`** ([commit route](../../src/app/api/school/bulk-upload/commit/route.ts)), UI at [`/school/admin/bulk-upload`](../../src/app/school/admin/bulk-upload/page.tsx). Students only, idempotency-keyed, 500 rows max, writes the Prisma `BulkUploadJob` table, and is genuinely transactional - a Prisma failure deletes the Supabase auth users it created outside the transaction. It is **not linked from the sidebar**; only its own log page links to it.

Since 12 October 2026 the commit's work is [`commitBulkUpload`](../../src/lib/school/bulk-upload-commit.ts), which the operator's Pupils step (`/api/admin/schools/[schoolId]/pupils`) also calls; each route does its own auth and names the school. For each pupil with an account it now:

- links them in `school_members`, upserting on `(school_id, email)`;
- places them in the class whose `classes.name` matches their class code (trimmed, any case, the school's active classes only): a `class_students` row on `(class_id, student_id)` and a `school_students` row on `(school_id, user_id)`, then recounts each touched class's `student_count` from its active places;
- reports, per row, every link and place that failed and every class code that matched no class, in the response and on the job, so the upload log counts them. The done screen lists every category.

It does **not** move `schools.seats_used` (the module says why), and it refuses a row whose email belongs to a member of staff at the school: with the corrected key, the upsert would otherwise rewrite that person's membership as a pupil's.

What was broken until then, all of it quietly:

1. The `school_members` upsert passed `{ onConflict: 'school_id,user_id' }`. `school_members` has `UNIQUE(school_id, email)`, not `(school_id, user_id)` ([`003:37`](../../supabase/migrations/003_school_analytics.sql)). Postgres refused every row with `42P10`, so no pupil was ever linked.
2. The same payload once wrote `class_code`, a column `school_members` does not have (removed 19 September).
3. A pupil Prisma already knew was linked by their Prisma cuid (fixed 11 October).
4. The class code was required on every row and then ignored: no pupil was placed in a class, so no teacher saw an uploaded pupil's work.
5. The welcome email linked `https://theenglishhub.app/login`, a 404; it is `/auth/login`.
6. The validate route selected a `classes.code` column that does not exist, ignored the error, and let any class code through.
7. A site admin reaching the school route uploaded against the synthetic school `'__site_admin__'`; that is now refused with a pointer to `/admin/schools`.

Also note the placeholder identity written for each new pupil: `dateOfBirth: new Date('2000-01-01')` with `isMinor: true` hard-coded. The `User` model comment at [`prisma/schema.prisma:161-173`](../../prisma/schema.prisma) explains at length why exactly that placeholder is dangerous - it computes to age 26 and switches the parental-consent gate off. Here the two fields contradict each other; the DOB is a lie and `isMinor` happens to be the safe lie.

Temporary passwords are rotation-gated: `user_metadata.needs_password_change` is set on create and [`src/lib/supabase/middleware.ts:94-100`](../../src/lib/supabase/middleware.ts) holds the account on `/auth/set-password`. The welcome-email copy was corrected in August 2026 because it claimed the password was single-use, which it is not (commit route lines 87-95).

---

## 10. Parents

The parent portal you will find in the route tree is a tombstone. [`src/app/parent/[[...slug]]/page.tsx`](../../src/app/parent/[[...slug]]/page.tsx) is fifteen lines that `permanentRedirect('/dashboard/parent')`; the old `/parent/**` portal was a localStorage mock with no auth and was removed in August 2026.

The real surface is [`/dashboard/parent`](../../src/app/dashboard/parent/page.tsx), backed by:

| Route                                | Actor                                 | Effect                                                               |
| ------------------------------------ | ------------------------------------- | -------------------------------------------------------------------- |
| `POST /api/parent/invite`            | student (Prisma `role === 'STUDENT'`) | creates an 8-char code, 7-day expiry, invalidates prior unused codes |
| `GET /api/parent/invite/validate`    | anyone with the code                  | shows what is being accepted                                         |
| `POST /api/parent/link`              | parent (Prisma `role === 'PARENT'`)   | redeems the code                                                     |
| `GET`/`DELETE /api/parent/link`      | parent or student                     | list / unlink                                                        |
| `GET /api/parent-reports`            | parent                                | persisted `WeeklyReport` rows                                        |
| `POST /api/parent/delete-child-data` | parent                                | soft-delete with 30-day grace, Children's Code standard 11           |

The link itself is `User.parentId` - a single self-relation on the Prisma `User` table. `getLinkedParents` returns an array "for future extensibility" but the schema supports exactly one parent per child ([`parent-linking.ts:132-169`](../../src/lib/parent-linking.ts)). `linkParentToStudent` (line 149-205) requires both sides to be `ACTIVE` and to hold exactly the right Prisma roles.

Because the whole flow keys on Prisma `User.id`, it needs both parties to have Prisma rows - which most accounts do not. Every route in this group does the `supabaseUserId` lookup then falls back to an email lookup with a `[identity]` warning ([`link/route.ts:42-70`](../../src/app/api/parent/link/route.ts)); if neither hits, the user is told "Session expired. Please log in again", which is not what happened.

### Parent linking is not parental consent

These are separate systems and it matters. Parental **consent** is `parental_consents` plus [`src/lib/consent-check.ts`](../../src/lib/consent-check.ts), which unblocks AI features for under-16s. `checkParentalConsent` accepts **either** a non-null `User.parentId` **or** an approved `parental_consents` row ([lines 146-154](../../src/lib/consent-check.ts)) - so completing a parent link does grant consent, but consent can also exist with no link. Both checks are reached only after `resolveAgeBand` returns something other than `UNKNOWN`; an unknown age blocks, with one exception since 12 October 2026: a pupil of a live school that has recorded `schools.ai_authorised_at` passes the parental step at any band, `UNKNOWN` included (chapter 05, section 6).

Two consent entry points write to the same table:

- School flow: `POST /api/school/consent` requires `school_id`, emails a token to the parent, lands on `/consent?token=…`.
- Self-serve: [`20260823_self_serve_parental_consent.sql`](../../supabase/migrations/20260823_self_serve_parental_consent.sql) made `school_id` nullable and added `expires_at`/`last_sent_at`/`send_count`. Its header records the defect it fixed: the direct-signup flow wrote tokens to `consent_tokens` while the parent-facing page read `parental_consents.consent_token`, so **every guardian who clicked the emailed link saw "invalid or already used"**, and even a successful approval could not unblock the student. `consent_tokens` is now dead for writes but may hold historic rows.

Note that `parental_consents` rows with `school_id IS NULL` are invisible to the school-admin SELECT policy by design - a direct signup is not a school's data.

The join flow computes a consent status for under-16s (join route lines 376-407) and returns it as `parental_consent_status`, but it only reports; it creates nothing and blocks nothing.

### [`src/app/api/parent/README.md`](../../src/app/api/parent/README.md) is fiction - do not act on it

It documents `POST /api/parent/link-child`, `GET /api/parent/progress/[childId]` and `DELETE /api/parent/unlink`; tables `parent_accounts` and `parent_child_links`; a helper `src/lib/parent/access-control.ts`; and a £4.99/month tier capped at 3 children. **None of those exist.** The only file in `src/lib/parent/` is `link-codes.ts`, which is imported by nothing except its own test. `supabase/migrations-pending/001_parent_accounts.sql` is still sitting in the pending directory. The comment in [`004_fix_school_rls.sql:30`](../../supabase/migrations/004_fix_school_rls.sql) referring to `parent_child_links` is from the same abandoned design.

---

## 11. Markers and human review

The paid-marker console at [`/marker`](../../src/app/marker/page.tsx) is a keyboard-driven queue for contracted external examiners: one assigned, AI-drafted script at a time, with the marker setting a final mark and - required whenever they change the AI's mark or feedback - an adjustment reason, which is the training signal.

Authorisation is deliberately narrow and lives in exactly two places:

- [`src/lib/marker-auth.ts`](../../src/lib/marker-auth.ts): `getCurrentMarker` / `requireMarker` resolve `markers` rows by `user_id = auth.uid() AND status = 'active'` using the service-role client. A paused or offboarded marker resolves to `null` and is locked out. It never throws - a missing table degrades to "not a marker".
- [`src/lib/marker-board-access.ts`](../../src/lib/marker-board-access.ts): "may this marker work this board" is **an approved row in `marker_board_access`**, never membership of the legacy `markers.boards[]` array. The header (lines 8-12) says why: self-service onboarding needs a request/approval lifecycle, and a self-registered marker must be able to mark nothing until approved.

`POST /api/marker/apply` creates the `markers` row with `status: 'active'` plus one `requested` board row each. `active` there means "a real applicant", not "may mark" - the guard is `canMarkSubmission`, checked again inside the review route at lines 441-447.

`/marker` is **not** in the middleware `protectedRoutes` list, so the shell renders for signed-out visitors; the console then calls `/api/marker/me`, gets a 401, and shows the "not a marker" state. `markers` RLS lets a marker read only their own row; `marking_submissions_marker_select` lets them read only rows assigned to them ([`20260519_marker_drive.sql:130-155`](../../supabase/migrations/20260519_marker_drive.sql)).

Practice mode (`/marker/practice`) serves only `is_gold = true AND source = 'specimen'` scripts and withholds `gold_expected` until the marker commits an answer, so practice cannot be used to look up live QA answers. Nothing is written.

The admin side of this is five screens (`marker-board-access`, `marker-drive`, `marker-qa`, `marker-pay`, `board-agreement`) all behind `verifyAdmin`, all client-rendered.

**Human review is not the marker system.** `HumanReviewRequest` is a Prisma table read at `/dashboard/review/[id]` and surfaced in `getUserDetails`; the `REVIEWER` role that would staff it is never assigned and has no console. Do not confuse the two when someone says "human review".

---

## 12. Built but unreachable, or assuming data that does not exist

Since 12 October 2026 the sidebar ([`SchoolSidebarNav.tsx`](../../src/components/school/SchoolSidebarNav.tsx), `NAV_ITEMS`) filters by role, each item naming the roles its own API admits: every member of staff sees Dashboard, Marking queue, Classes, Analytics and Assessment objectives; admins also see Invite teachers, Import pupils (the bulk upload) and Settings; admins and heads of department see Access and billing. Its "Log out" was a link to `/auth/login` that signed nobody out and now ends the session. Users, Permissions, the Setup Guide, Calendar and Notifications were mock or wrong and are now redirects to the dashboard (each file's header says what it was); Billing states the school's real access and that schools are invoiced. Still linked from nowhere:

| Page                                                         | Lines | State                                                                                                                                    |
| ------------------------------------------------------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `/school/students`                                           | 1121  | real - `GET /api/school/students`. Unreachable from any nav; each pupil's own page is reached from class rosters and the objectives view |
| `/school/teachers`                                           | 1047  | real - `GET /api/school/members`. Unreachable                                                                                            |
| `/school/resources`, `/school/worksheets`, `/school/tools/*` | ~1600 | teacher tooling, browser-local, no API                                                                                                   |
| `/school/progress-cards`                                     | 495   | real - reads `/api/school/classes`                                                                                                       |
| `/school/onboarding`                                         | ~1080 | reads `GET /api/school/summary` (it read school tables from the browser until 12 October 2026). Unreachable                              |
| `/school/import`                                             | 921   | the legacy importer, which queries `import_jobs`, a table that does not exist. Unlinked since 12 October 2026                            |
| `/school/planner`, `/school/department`, `/school/compare`   | small | wrappers; `department` reads the `useSchool` store                                                                                       |

Surfaces that assume columns nothing creates:

- `GET/PUT /api/school/settings` selected `website, timezone, subscription_expires_at, max_members` from `schools`, and none of the four existed. PostgREST rejects the **whole** SELECT when one column is missing, so the settings page could never load. **Fixed 12 October 2026:** `website` and `timezone` are now real columns, and the other two are read as the existing `access_until` and `seat_limit` under the names the page expects.
- `/api/school/register` and `exam_board`/`curriculum` on `schools` (section 4).
- Bulk-upload commit and `school_members.class_code` (section 9, removed 19 September 2026), and the validate route's `classes.code` (section 9, fixed 12 October 2026).
- `school_join_codes.type` versus `.role` (section 6).

Check all of these against `information_schema.columns` before changing code. In this repo a missing column is a much more likely explanation for a dead feature than a logic bug.

---

## 13. What I could not determine from the code

- **The deployed RLS state, beyond the school tables.** Settled for `schools`, `school_members`, `school_students`, `school_join_codes`, `classes`, `class_students`, `marking_submissions` and `teacher_moderations` on 12 October 2026 (section 8). Other tables still need `pg_policies` read before anything relies on them.
- **Which of the missing columns exist in production.** Settled on 12 October 2026: none of them did. `schools.exam_board`, `curriculum`, `website` and `timezone`, and `school_join_codes.type`, are added by the 20261012 migrations. `max_members` and `subscription_expires_at` are read as `seat_limit` and `access_until`. `school_members.class_code` is no longer written. `school_join_codes.role` does not exist; `/api/school/join` must read `type`.
- **Whether any school has ever been provisioned.** Settled: on 12 October 2026 production's `schools` table held no rows, and provisioning could not have succeeded (section 4).
- **Whether `profiles.role` accepts `school_admin`.** It does not (production CHECK, 12 October 2026). The register route now writes `teacher` (section 1).
- **Which of the FOUNDER cohort carry an explicit `access_until`.** The ones that do are already expired out of the portal, because the date is past; the ones with a NULL `access_until` are still active. Provisioning through `/api/school/register` writes the explicit date, so the split is really "provisioned by the route" versus "inserted by hand", and only the `schools` table can tell you which is which.
- **Whether `class_students.is_active` is ever reconciled with `classes.student_count`.** The counter is maintained by hand in two routes and I found no reconciliation job.
