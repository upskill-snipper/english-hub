# Authentication, identity, age and consent

This is the subsystem that decides who a request belongs to, how old that person is, and what they have agreed to. Nearly everything AI in the product sits behind it (section 6 names the one route that escapes), and a material share of the user base are children aged 13 to 17, so a permissive bug here is not a bug - it is processing a child's schoolwork through a third-party model without a lawful basis. The rule this whole chapter encodes is that not knowing something is never the same as knowing it is fine: unknown age blocks, a failed read is not an approval, and a missing row is not consent.

Read this before you touch anything under [`src/lib/identity/`](../../src/lib/identity), [`src/lib/consent-check.ts`](../../src/lib/consent-check.ts) or [`src/lib/parental-consent.ts`](../../src/lib/parental-consent.ts).

---

## 1. The two identities, and why nothing works until you understand them

A person on this platform has **two** ids and they are not interchangeable.

|             | Supabase auth uuid                                                 | Prisma `User.id`                                                                                                 |
| ----------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Shape       | uuid (`a1b2…`)                                                     | cuid (`clx…`)                                                                                                    |
| Owner       | Supabase Auth (`auth.users`), mirrored to `public.profiles.id`     | the Prisma/Postgres application schema                                                                           |
| Holds       | credentials, email confirmation, `user_metadata`, OAuth identities | every application foreign key: `Consent.userId`, `PrivacySettings.userId`, `Essay.userId`, `Subscription.userId` |
| Produced by | `supabase.auth.signUp()` in the browser                            | `prisma.user.create()` - only in the identity module and the two signup routes                                   |

Email/password signup writes a `profiles` row for everyone. It does **not** reliably write a Prisma `User` row, because [`src/app/api/auth/register/route.ts`](../../src/app/api/auth/register/route.ts) requires a verified session and Supabase email confirmation is ON, so the fire-and-forget call at [`src/app/auth/register/page.tsx:381`](../../src/app/auth/register/page.tsx) is answered 403 and dropped. The register page says so itself at lines 369-380. The result, recorded in [`src/lib/identity/projection.ts:13-18`](../../src/lib/identity/projection.ts): **200 Supabase users, 200 `profiles` rows, 8 Prisma `User` rows.** Roughly 96% of real accounts had no row at all.

Three subsystems key on `User.id` while every caller passed the uuid. That single mismatch produced five separate production defects: the consent ledger could not be written (so production held **zero** `AI_PROCESSING` rows and every learner was refused every AI feature), erasure matched nothing, the AI decision log silently dropped rows, `/api/profile/dob` 404'd, and the parental gate answered "User not found" and refused on that basis.

### The bridge

[`src/lib/identity/`](../../src/lib/identity) is the one place a uuid becomes a cuid. Import from [`index.ts`](../../src/lib/identity/index.ts), not the individual files, so the chokepoint stays visible in the import graph.

| File                                                    | Responsibility                                                                     |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`projection.ts`](../../src/lib/identity/projection.ts) | `projectSupabaseUser` (the only creator), `requirePrismaUserId`, `tryPrismaUserId` |
| [`lookup.ts`](../../src/lib/identity/lookup.ts)         | `findExistingUser` - resolves without creating                                     |
| [`age.ts`](../../src/lib/identity/age.ts)               | `resolveAgeBand` and the age vocabulary                                            |
| [`profiles.ts`](../../src/lib/identity/profiles.ts)     | read-only access to the `profiles` columns identity needs                          |

`requirePrismaUserId` throws (`IdentityUnresolved`, `IdentityConflict`) and is for writes; `tryPrismaUserId` returns null and is for reads that should render "nothing on record" rather than 500 ([`projection.ts:330`](../../src/lib/identity/projection.ts), [`:350`](../../src/lib/identity/projection.ts)). Callers that _gate_ must fail closed on the throw; callers that _erase_ must fail loud rather than report success.

### The projection rules - memorise these

`projectSupabaseUser` ([`projection.ts:180`](../../src/lib/identity/projection.ts)) makes an account **addressable**. It is never **permissive**. It writes no `Consent` row of any type, no `parental_consents` row, no `Subscription`, never touches `profiles`, and invents no date of birth.

**Writing `parentId` IS granting parental consent.** `checkParentalConsent` unblocks a minor the moment a linked parent exists ([`consent-check.ts:147`](../../src/lib/consent-check.ts)), so a projection that helpfully copied a parent link would have silently opened the gate for every child it touched. That is why line 240 of `projection.ts` leaves `parentId` and `linkedTeacherId` NULL with a comment rather than a default.

Two more invariants worth stating plainly:

- **Unknown date of birth writes `isMinor: true`** ([`projection.ts:217`](../../src/lib/identity/projection.ts)). This is a _protective posture_, not an assertion. `ProjectedUser.isMinorPosture` is named that deliberately, and it must never be reported as the subject's age in a DSAR.
- **Adoption writes exactly one column.** `adoptByEmail` ([`:270`](../../src/lib/identity/projection.ts)) links a pre-existing Prisma row to a uuid by setting `supabaseUserId` and nothing else. A row already bound to a _different_ uuid throws `IdentityConflict` - merging two people is worse than failing.
- `createdAt` is copied from `profiles.created_at` or the auth record, never left to `@default(now())`, because that would reset the 730-day dormancy clock and misdate the DSAR export.

`passwordHash` is set to the sentinel `'SUPABASE_MANAGED'` ([`projection.ts:46`](../../src/lib/identity/projection.ts)). The column is NOT NULL and there is no real hash; the sentinel cannot parse as bcrypt so any comparison fails closed.

### The guard

[`src/__tests__/identity-guard.test.ts`](../../src/__tests__/identity-guard.test.ts) fails the suite on any `prisma.user.create|upsert` outside the allowlist, and on private `findFirst/findMany/updateMany/deleteMany` keyed on `supabaseUserId`. It is honestly scoped: it does **not** forbid `findUnique({ where: { supabaseUserId } })`, because around twenty-seven routes read that way legitimately. Adding to the `ALLOWED` list at line 35 requires a reason you would defend in an audit.

---

## 2. Sign-in routes, and the one that does the extra work

| Route                                 | Mechanism                                                                                                                                               | Calls `/api/auth/record-login`? | Projects a Prisma row?                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------- |
| Email + password                      | `signInWithPassword` at [`auth/login/page.tsx:61`](../../src/app/auth/login/page.tsx)                                                                   | Yes, line 71, fire-and-forget   | Yes, as a side effect of record-login |
| Google                                | `signInWithOAuth({provider:'google'})` → `/auth/callback` ([`GoogleSignInButton.tsx:71`](../../src/components/auth/GoogleSignInButton.tsx))             | **No**                          | No                                    |
| Apple                                 | `signInWithOAuth({provider:'apple'})` → `/auth/callback` ([`AppleSignInButton.tsx:57`](../../src/components/auth/AppleSignInButton.tsx))                | **No**                          | No                                    |
| Email confirmation                    | PKCE `code` or `token_hash` at [`auth/callback/route.ts`](../../src/app/auth/callback/route.ts)                                                         | **No**                          | No                                    |
| Magic link (resend-verification only) | admin `generateLink({type:'magiclink'})` → `/auth/callback` ([`resend-verification/route.ts:186`](../../src/app/api/auth/resend-verification/route.ts)) | **No**                          | No                                    |
| Password recovery                     | `/auth/callback?type=recovery` → `/auth/reset-password`                                                                                                 | **No**                          | No                                    |

Both OAuth buttons render **nothing** unless `NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED` / `NEXT_PUBLIC_APPLE_OAUTH_ENABLED` is exactly `'true'` (hard guards at `GoogleSignInButton.tsx:59` and `AppleSignInButton.tsx:45`). There is no user-initiated magic-link sign-in surface; the only magic link the product mints is the re-verification one.

### What the record-login gap costs

[`/api/auth/record-login`](../../src/app/api/auth/record-login/route.ts) does two things: it stamps `User.lastLoginAt` (the dormancy-deletion cron reads this column - it used to read `updatedAt`, which any profile write reset), and it is the **eager projection point**. It calls `tryPrismaUserId` first, which creates the missing row, then stamps.

Because only the password form calls it, a person who only ever uses Google or Apple:

1. never gets `lastLoginAt` stamped, so the dormancy cron sees an account that has _never_ logged in;
2. is not projected until something else forces it - the first AI call, a consent write, or a DOB save.

Just-in-time projection covers (2) safely, so this is a data-quality and cron-correctness problem rather than an access-control one. The fix is one fetch in the callback route, and it has not been written. Do not "fix" it by calling `projectSupabaseUser` from the middleware - that runs on every request.

`record-login` never fails a login: an unresolvable identity logs and returns `200 {ok:false}` (line 58), a throw returns `200 {ok:false}` (line 75). Rate limited 20/hour per user.

### Signup, briefly

Signup is browser-driven (`supabase.auth.signUp`, [`register/page.tsx:229`](../../src/app/auth/register/page.tsx)) so Supabase sends the confirmation email itself. Three age checks exist and they do not agree with each other:

- [`/api/auth/validate-age`](../../src/app/api/auth/validate-age/route.ts) - called before signup, unauthenticated, rate limited per IP. Blocks under-13 (403) and demands a guardian email for 13-15. It validates and returns; it stores nothing.
- [`/api/auth/register`](../../src/app/api/auth/register/route.ts) - server-side, re-enforces under-13 (line 197), and writes `isMinor = age < 18`. Also provisions the 7-day trial (`Subscription` + `profiles.subscription_status`). Idempotent on `supabaseUserId`; P2002 returns the existing row.
- The `profiles` upsert at [`register/page.tsx:276`](../../src/app/auth/register/page.tsx) writes `is_minor = age < 18` and the Children's Code high-privacy defaults for under-16s.

With confirmation ON, only the third of those actually runs. Treat `profiles` as the source of truth for what a learner declared at signup; treat the Prisma row as a lagging projection.

---

## 3. Session handling

Sessions are Supabase SSR cookies. [`src/middleware.ts`](../../src/middleware.ts) calls `updateSession` in [`src/lib/supabase/middleware.ts:44`](../../src/lib/supabase/middleware.ts), which:

1. builds a server client wired to `getAll`/`setAll` (never the deprecated `get`/`set`/`remove` triplet - that failed on chunked cookies and was the suspected cause of "logged out right after sign-in");
2. calls `getUser()` immediately. **Keep that call where it is.** The client initialises lazily; anything between `createServerClient` and `getUser()` risks the refreshed session being committed after the response is sent;
3. applies the forced password-rotation gate, then the protected-route gate.

Refreshed cookies are copied onto every redirect by `copyAuthCookies` ([`:222`](../../src/lib/supabase/middleware.ts)) - without it a refresh that coincides with a redirect is lost and the next request looks anonymous.

[`/auth/callback`](../../src/app/auth/callback/route.ts) pre-creates the redirect response at line 33 and has `setAll` mutate `response.cookies` directly. In Next 15 route handlers, cookies written via `cookies().set()` are not reliably applied to a separately-built `NextResponse.redirect`, and the session cookies from `exchangeCodeForSession` were being dropped - which is why users "logged in" and landed back on `/auth/login`. `redirectTo()` at line 64 preserves already-written cookies when the destination changes.

### Gates in the middleware

- **Forced rotation.** School-provisioned pupils get an auto-generated temporary password emailed in plaintext and downloadable as CSV ([`school/import/route.ts:289`](../../src/app/api/school/import/route.ts), [`school/bulk-upload/commit/route.ts:299`](../../src/app/api/school/bulk-upload/commit/route.ts)). Those accounts carry `user_metadata.needs_password_change`, and every signed-in navigation is held on `/auth/set-password` until it clears. **This is a UI gate, not an access control**, and the code says so at lines 114-126: `user_metadata` is writable by the signed-in user, so a pupil can clear the flag from the browser. Hard enforcement needs the flag in `app_metadata` plus a server route.
- **Protected routes** are matched segment-aware (line 188) - a bare `startsWith('/school')` previously auth-walled the public `/schools` and `/school-pilot` marketing pages for Googlebot.
- **The `/ar` hole is closed but only just.** `src/middleware.ts` used to return the Arabic rewrite _before_ calling `updateSession`, so `/ar/dashboard`, `/ar/account`, `/ar/school` and `/ar/admin` skipped session refresh and the auth wall entirely: the gate was walkable by prefixing a URL. It now passes the stripped path as `effectivePathname` and honours a 3xx. If you ever add an `/es` surface, mirror this exactly - `src/middleware.ts:56-71` spells out the five preconditions.

One inconsistency to be aware of: the callback sanitises `next` with its own inline check (line 14) rather than `validateRedirect` from [`src/lib/utils.ts:66`](../../src/lib/utils.ts), which additionally blocks `\`, `@` and `%`. I verified that `/\evil.com` passes the callback's check and `new URL()` normalises it to `https://theenglishhub.app//evil.com` - still same-origin, because the origin is hard-prefixed, so this is not an open redirect. It is still a second, weaker copy of a rule that exists once elsewhere.

---

## 4. Age: four bands, and why UNKNOWN is not an adult

`resolveAgeBand(supabaseUserId)` ([`age.ts:114`](../../src/lib/identity/age.ts)) is **the** age signal. Do not read `User.isMinor` to make a decision.

| Band                 | Meaning                                | Consequence                                     |
| -------------------- | -------------------------------------- | ----------------------------------------------- |
| `UNDER_16`           | age known, under 16                    | guardian consent required                       |
| `SIXTEEN_OR_OVER`    | age known, 16+                         | consents for themselves                         |
| `UNDER_18_IMPRECISE` | known to be a child, precision unknown | fail closed - guardian consent required         |
| `UNKNOWN`            | no usable date of birth held           | **blocked**, with a message asking for the date |

Resolution order, most factual first: `profiles.date_of_birth` → `User.dateOfBirth` → `profiles.is_minor === true` → `UNKNOWN`. Step 4 deliberately swallows `is_minor === false` and "no profiles row": neither is evidence of adulthood. The function never throws - a database failure resolves to `UNKNOWN`, which blocks.

**Why 16 and not 18.** `PARENTAL_CONSENT_AGE = 16` because the published privacy policy requires guardian consent for 13-15, the signup form only collects a guardian email for that band, and UK GDPR sets the digital consent age at 13 (so a 16-17 year-old consents for themselves). `MINOR_AGE = 18` is separate: it is the Children's Code "child" threshold and is what `User.isMinor` means.

**Why a band and not a boolean.** `User.isMinor` was written by three code paths with three different meanings - under 18 at `/api/auth/register`, under 16 at `/api/profile/dob`, under 16 in the 2026-04-20 backfill. A `false` in that column carries no information at all, and `profiles.is_minor` is NOT NULL DEFAULT false whose only writer, `applyChildDefaults()`, ever writes `true`. Treating `false` as "adult" is how a 14-year-old with no recorded date of birth was waved through the parental gate. The old gate's first line was literally `if (!user.isMinor) return { allowed: true }`.

**The 2000-01-01 placeholder.** [`scripts/backfill-prisma-users.mjs`](../../scripts/backfill-prisma-users.mjs) invented `2000-01-01` for every account whose `user_metadata` held no date - and it never looked at `profiles.date_of_birth`, where the real value lives. That date computes to an adult age, wrote `isMinor: false`, and switched the parental gate off for children. `isPlaceholderDob()` ([`age.ts:65`](../../src/lib/identity/age.ts)) makes every reader refuse to derive an age from it; such a row resolves to `UNKNOWN`. A genuine 2000-01-01 learner re-confirms once through the DOB form, which is a same-value no-op. `dateOfBirth` and `country` were widened to nullable on 2026-09-17 (`20260917_identity_nullable_dob_country.sql`) precisely so nothing has to invent them again.

**The four-month silent failure.** [`profiles.ts:37-54`](../../src/lib/identity/profiles.ts) is the most important comment in this subsystem. `COLUMNS` selects `is_minor`; `profiles.is_minor` did not exist in production. Its migration `20260512_user_is_minor.sql` was recorded as applied on 2026-05-30 in a burst of 66 files that [`scripts/apply-migrations.mjs`](../../scripts/apply-migrations.mjs) **baselined rather than executed** (`BASELINE_CUTOFF = '20260530'`, line 42). Postgres answered 42703 on every identity read, the error was discarded, and `resolveAgeBand` degraded to `UNKNOWN` for all 206 accounts - correct behaviour, invisibly, for the wrong reason. The read failure is now reported to console and Sentry under the greppable marker `IDENTITY_PROFILE_READ_FAILED`. The column was created on 2026-09-18; I could not find a migration file for that creation, so it appears to have been applied out of band.

The general lesson, encoded in [`scripts/check-schema-drift.mjs`](../../scripts/check-schema-drift.mjs): `_migrations_applied` records an intention, `information_schema` records reality. Verify the schema against `information_schema`, never against the tracker. A schema-contract test that asserts the columns `profiles.ts` selects would stop the next one; it does not exist yet.

`/api/profile/dob` is the self-service fix ([`route.ts:41`](../../src/app/api/profile/dob/route.ts)). Note that it writes **only** `User.dateOfBirth` and `User.isMinor` - it does not write `profiles.date_of_birth`, which `resolveAgeBand` reads _first_. If a real (but wrong) value sits in `profiles.date_of_birth`, saving a correction here will not change the band. I have not found a case of that in the code, but the asymmetry is real.

---

## 5. The consent ledger

`Consent` ([`prisma/schema.prisma:262`](../../prisma/schema.prisma)) is **append-only**. Nothing is ever mutated: a withdrawal is a new row with `granted: false` and a `withdrawnAt`. Current state is "the most recent row per type" ([`consent.ts:229`](../../src/lib/consent.ts)).

| Type                                   | Class                              | Notes                                                                                                                                                   |
| -------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TERMS`, `PRIVACY`                     | essential                          | cannot be withdrawn without deleting the account                                                                                                        |
| `AI_PROCESSING`                        | optional, **grantable in-product** | gates twelve of the thirteen AI routes (section 6)                                                                                                      |
| `MARKETING`                            | optional, grantable in-product     |                                                                                                                                                         |
| `COOKIE_ANALYTICS`, `COOKIE_MARKETING` | optional                           | owned by the cookie banner and `/api/consent/cookie`; deliberately absent from `GRANTABLE_CONSENT_TYPES` so there are not two controls for one decision |
| `DATA_TRANSFER`, `COOLING_OFF_WAIVER`  | optional                           | no in-product grant control                                                                                                                             |

`AI_PROCESSING` moved from essential to optional on 2026-09-17 ([`consent.ts:66-74`](../../src/lib/consent.ts)). It was listed as essential, so `withdrawConsent` refused it outright and there was no way to turn AI off short of deleting the account - a UK GDPR Art.7(3) failure, since the product plainly works without AI.

`recordConsent` ([`:119`](../../src/lib/consent.ts)) resolves through `requirePrismaUserId` and **throws** on failure. That is deliberate: silently dropping a consent record would leave a person believing they had consented while the ledger held nothing, which is exactly the failure that blocked every learner from AI marking. `POST /api/consent` turns that throw into a `503` with an honest message rather than a false success ([`consent/route.ts:148`](../../src/app/api/consent/route.ts)).

Two things worth knowing:

- **The only writer to the ledger is `POST /api/consent`.** Nothing in the signup path calls `recordConsent`. So although `TERMS` and `PRIVACY` are modelled as essential, in practice no row of either type is ever created for a new account. The register page's own comment at line 305 describes writing them "via /api/auth/register" as a follow-up that was never done. If you are asked what consent you hold for a user, the honest answer today is: whatever they granted from `/dashboard/consent` or the inline panel, and nothing else.
- **Withdrawal cites the right version.** `withdrawConsent` records the version of the _wording being withdrawn from_, from `GRANTABLE_CONSENT_TYPES`, not the terms version ([`:198`](../../src/lib/consent.ts)).

`GET /api/consent` returns a `grantable` array carrying the server's `POLICY_VERSIONS`, so the browser never invents a version to record a grant against.

---

## 6. The AI gate

Twelve of the thirteen AI routes call `checkMinorAIConsent(user.id)` ([`consent-check.ts:219`](../../src/lib/consent-check.ts)), passing the **Supabase uuid**. Callers: `cefr-assess`, `essay/feedback`, `essay-feedback`, `ielts/diagnostic-assess`, `ielts/speaking-feedback`, `ielts/statement-feedback`, `ielts/writing-feedback`, `mark`, `mark/stream`, `marking/ielts-writing-task2`, `submissions`, `toolkit/generate-notes`.

Two qualifications on that list. `ielts/diagnostic-assess` runs the gate only when a session exists ([`route.ts:322`](../../src/app/api/ielts/diagnostic-assess/route.ts)), which is deliberate: an anonymous diagnostic has no account to check, and safeguarding still runs through `contentSafetyCheck` for everyone. The thirteenth route, `marking/run`, does not call it at all - see the end of this section.

`checkMinorAIConsent` runs two legs, and **the order is load-bearing** (changed 2026-08-23, comment at line 220):

1. `checkParentalConsent` - the age band, then a linked parent, then an approved `parental_consents` row.
2. `hasConsent(uuid, AI_PROCESSING)`.

Parental consent runs _first_ because the guardian email is raised as a side effect of that leg. When the AI_PROCESSING check ran first, a 13-15 year-old who signed up directly was told to "consent to AI processing" and returned before any guardian was emailed - for exactly the population the self-serve guardian loop was built for, the trigger fired for nobody. Parental consent is also the only leg with an off-platform dependency (a guardian's inbox and a 7-day link), so it must start at the student's first blocked attempt.

`checkParentalConsent` ([`:131`](../../src/lib/consent-check.ts)) unblocks a child on **either** a linked `parentId` **or** an approved row in `parental_consents` (school-requested or self-serve). The Supabase read is keyed on the **uuid**, because `parental_consents.student_user_id` references `profiles(id)` - do not "helpfully" swap in the Prisma id there (line 61).

An `UNKNOWN` band does **not** raise a guardian request (line 240). We do not know the account belongs to a child and we have no guardian address for it, so the honest ask is self-service.

### Refusal codes

403 is also returned for "not a subscriber" and for the Children's Code AI opt-out, so the client cannot infer a consent problem from the status alone. [`src/lib/consent-codes.ts`](../../src/lib/consent-codes.ts) exists for that, and has **no imports on purpose** so both server and client can use it. The values are an API contract: add codes, never rename them.

| Code                             | Set when                        | Client offer                                 |
| -------------------------------- | ------------------------------- | -------------------------------------------- |
| `ai_processing_consent_required` | no active `AI_PROCESSING` row   | self-grant, in place                         |
| `parental_consent_required`      | child with no guardian approval | guardian route only - **never** a self-grant |
| `date_of_birth_required`         | band `UNKNOWN`                  | ask for the date, then retry                 |

Routes attach the code only if the gate set one: `forbiddenResponse(reason, code ? {code} : undefined)` ([`mark/route.ts:94-102`](../../src/app/api/mark/route.ts)). A client can therefore never be told the wrong reason.

Every refusal message names a control that actually exists. The previous AI-processing message said "update your consent preferences in settings" and no such control existed anywhere - the consent page could only withdraw, and the ledger could not hold the row in any case ([`consent-check.ts:82-88`](../../src/lib/consent-check.ts)).

### A live defect in the leg next door

Immediately after the consent gate, the same twelve routes call `isAiOptedOutServer(user.id)` - the Children's Code AI opt-out. That function queries `prisma.privacySettings.findUnique({ where: { userId } })` ([`ai-preferences.ts:40`](../../src/lib/ai-preferences.ts)), but `PrivacySettings.userId` is a foreign key to `User.id` (a cuid: [`schema.prisma:488`](../../prisma/schema.prisma), relation at [`:497`](../../prisma/schema.prisma)), and every call site passes the Supabase uuid. `PrivacySettings` rows are created with the Prisma id ([`privacy/settings/route.ts:96`](../../src/app/api/privacy/settings/route.ts), where `user` came from `prisma.user.findUnique`). **The lookup therefore never matches and the function returns `false` for everyone**, including a child whose parent has explicitly opted them out of AI. This is the same identity-mismatch class as the five defects the identity module was built for, and this one has not been fixed. It needs `tryPrismaUserId` in front of the query, and it is the highest-value thing in this chapter that is still broken.

### The thirteenth route: `marking/run` has no gate to get wrong

`POST /api/marking/run` ([`route.ts`](../../src/app/api/marking/run/route.ts)) is the second step of the marking spine and it makes a model call, but it calls neither `checkMinorAIConsent` nor `isAiOptedOutServer`. Neither module is imported. Both names appear in the file only inside a comment at [`route.ts:182-183`](../../src/app/api/marking/run/route.ts), which describes the position the trial-allowance gate occupies relative to checks this route does not perform. Its actual gates are content-type, auth, a 30/day rate limit, ownership (`b2c_self`) or accepted school membership (`b2b_class`), an active subscription on the `b2c_self` branch, and the submission state machine.

The consent decision is in fact taken one step earlier: `POST /api/submissions` runs both checks before it inserts the row ([`submissions/route.ts:176`](../../src/app/api/submissions/route.ts) and [`:188`](../../src/app/api/submissions/route.ts)). That is not equivalent to a gate here, for two reasons. Consent withdrawn between submission and run is never seen, and the run step is the one that sends the child's work to Anthropic. And on the `b2b_class` branch the caller is a member of staff, so the session `marking/run` holds is the teacher's - adding the two checks verbatim would test the teacher's consent and the teacher's opt-out, not the student's. Any fix here has to resolve the student from `marking_submissions.student_id` first.

The route then writes an audit entry asserting `consentSnapshot: { aiOptOut: false, aiProcessingConsentOk: true }` ([`route.ts:215-218`](../../src/app/api/marking/run/route.ts)). Nothing in the route established either value. That is a record of a check that did not happen, sitting in the log kept for EU AI Act traceability - the same failure shape as a comment asserting what the code does not do, but written into evidence a regulator would read.

The route-scanning test at [`consent-refusal-codes.test.ts:193`](../../src/__tests__/consent-refusal-codes.test.ts) does not catch this. It skips any file without `consentCheck.allowed`, so a route with no gate at all passes by being empty rather than by being correct.

---

## 7. The inline consent panel (18 September 2026)

Before this shipped, a learner who pressed "get feedback" got a 403 and a sentence telling them to change a setting on another page - a dead end in the middle of a task, and a paying customer wrote in confused by it. [`InlineAIConsentPrompt`](../../src/components/consent/InlineAIConsentPrompt.tsx) renders in place, explains what AI is used for and what is sent to Anthropic, and offers one control that records the consent and retries the original action with the learner's work intact.

Call sites: [`dashboard/essay-feedback`](../../src/app/dashboard/essay-feedback/page.tsx), [`marking/submit`](../../src/app/marking/submit/page.tsx), [`AITextArea`](../../src/components/AITextArea.tsx), [`EssayFeedbackInline`](../../src/components/EssayFeedbackInline.tsx). Each reads the refusal with `readConsentRefusal(status, body)` ([`ai-consent-refusal.ts:30`](../../src/components/consent/ai-consent-refusal.ts)), which returns null for anything that is not a 403 carrying a known code. **It never guesses from the sentence.**

| Variant                                                                                  | Code                             | Behaviour                                                                                                    |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `AIProcessingVariant` ([`:126`](../../src/components/consent/InlineAIConsentPrompt.tsx)) | `ai_processing_consent_required` | fetches the version from `GET /api/consent`, POSTs `{granted:true, method:'EXPLICIT'}`, calls `onResolved()` |
| `GuardianVariant` ([`:283`](../../src/components/consent/InlineAIConsentPrompt.tsx))     | `parental_consent_required`      | links to `/consent/status`. **No grant control at all**                                                      |
| `DateOfBirthVariant` ([`:308`](../../src/components/consent/InlineAIConsentPrompt.tsx))  | `date_of_birth_required`         | POSTs to `/api/profile/dob`, then retries so the _next_ gate answer is the honest one                        |
| unknown code                                                                             | none                             | returns `null` and the caller shows the server's own sentence                                                |

Rules the component must keep ([`:17-40`](../../src/components/consent/InlineAIConsentPrompt.tsx)):

- no pre-ticked box, no default-on, dismissing records **nothing**;
- a child without guardian approval is never offered a self-grant;
- unknown age is asked, never guessed;
- if the server does not report a version, the panel refuses to record anything and points at `/dashboard/consent`.

The withdrawal note deliberately does _not_ claim parity with granting. Granting happens in place; withdrawing means opening the consent page, finding the row and clearing a `confirm()` dialog. Art.7(3) parity is the intent and closing that gap is real work - until then the copy states what is true rather than a parity that has not been built. Behaviour is pinned by [`src/__tests__/inline-ai-consent-prompt.test.tsx`](../../src/__tests__/inline-ai-consent-prompt.test.tsx).

---

## 8. Parental consent, end to end

Two populations converge on one table, `parental_consents`. `school_id` set means a school asked on a student's behalf; `school_id` NULL means a direct signup with no school (nullable since `20260823_self_serve_parental_consent.sql`).

**The token-store decision, which you should not undo** ([`parental-consent.ts:20-31`](../../src/lib/parental-consent.ts)): everything writes `parental_consents`; `consent_tokens` is no longer written by application code. `checkParentalConsent` unblocks only on a linked parent or an approved `parental_consents` row, so keeping tokens elsewhere would have forced approval to write a second row anyway - two stores, two chances to drift, and a consent audit trail split across both. One table also gives one answer when a guardian, a school or the ICO asks what consent you hold for a child and when it was given.

The flow:

1. A blocked minor hits an AI route. `raiseGuardianConsentRequest` ([`consent-check.ts:179`](../../src/lib/consent-check.ts)) calls `sendGuardianConsentRequest({trigger:'ai_gate'})`. This has to happen server-side: the register page fired `parent-notify` immediately after `signUp()`, and with confirmation ON there was no session, so every call was answered 401 and **no guardian was ever emailed for a direct signup**. An AI route is the first server-side moment where a verified session exists.
2. `sendGuardianConsentRequest` ([`parental-consent.ts:410`](../../src/lib/parental-consent.ts)) loads the profile, checks the address is present, valid and **not the student's own** (a student must not approve their own consent), then persists the token _before_ sending.
3. The guardian receives a link to `/consent?token=…`, valid 7 days.
4. [`GET /api/school/consent/details`](../../src/app/api/school/consent/details/route.ts) resolves the token publicly (the guardian has no account). It returns `context: 'school' | 'self_serve'` and **nulls** for missing values - it used to substitute `'Unknown School'`, which put invented detail on a consent form.
5. [`PUT /api/school/consent`](../../src/app/api/school/consent/route.ts) records approve/deny, stamps `consented_at`, and **nulls the token** so a replay falls into the 410 branches before any second email is sent. Expired links are refused here too, not only at the details endpoint.
6. `checkParentalConsent` now finds an approved row and the gate opens.

The student's own view is [`/consent/status`](../../src/app/consent/status/page.tsx), served by `GET /api/auth/parent-notify`; resend is `POST` to the same route ([`parent-notify/route.ts:113`](../../src/app/api/auth/parent-notify/route.ts)), which enforces that a supplied `studentId` matches the session and never accepts a student _name_ from the caller (so nobody can inject text into an email you send).

### Throttles

A guardian's inbox is an address a student types in, so sends are bounded five ways. The database backstop matters because `rateLimit()` degrades to a per-instance in-memory map without Redis, which on serverless is no limit at all.

| Control                                             | Value                              | Where                          |
| --------------------------------------------------- | ---------------------------------- | ------------------------------ |
| Automatic (AI-gate) resend cooldown                 | 24 h                               | `AUTOMATIC_RESEND_COOLDOWN_MS` |
| Manual resend cooldown                              | 15 min                             | `MANUAL_RESEND_COOLDOWN_MS`    |
| Corrected-address floor                             | 60 s                               | `ADDRESS_CHANGE_COOLDOWN_MS`   |
| Lifetime cap per student                            | 10                                 | `MAX_SENDS_PER_STUDENT`        |
| Upstash per account / per address (hashed) / per IP | 5 per 24 h / 5 per 24 h / 10 per h | `sendGuardianConsentRequest`   |

Counters are bumped only after a **confirmed** send, so a provider outage does not lock a student out of retrying. The guardian address is hashed before it becomes a Redis key, and `maskEmail()` means it never reaches a log line or the browser intact.

Two correctness details in the email itself: the body chooses its reason sentence from the age actually held, because a request is raised for any minor under 18 while the legal requirement is under 16 - it previously told every guardian "Because they are under 16", a false statement in the one message asking them to make a data-protection decision ([`parental-consent.ts:296-305`](../../src/lib/parental-consent.ts)). And `deliverGuardianEmail` tries Resend then SMTP, and is exported so the decision confirmation reaches the guardian by the same provider that sent the request.

One stale reference: the header of [`school/consent/route.ts:8`](../../src/app/api/school/consent/route.ts) names `20260823_parental_consent_token_column_privileges.sql`; the file on disk is `20260823_self_serve_parental_consent_token_privileges.sql`.

---

## 9. What this implements, in Children's Code terms

- **Age-appropriate application (Standard 3).** `resolveAgeBand`, with unknown blocking rather than passing. Under-13s cannot self-sign-up: blocked client-side, at `/api/auth/validate-age` and again at `/api/auth/register:197`.
- **Default settings (Standard 8).** High-privacy defaults for under-16s at signup ([`child-defaults.ts`](../../src/lib/privacy/child-defaults.ts), written by [`apply-child-defaults.ts`](../../src/lib/privacy/apply-child-defaults.ts) and by the register page's `profiles` upsert). Note the register API's call site is still a commented-out TODO at [`register/route.ts:263`](../../src/app/api/auth/register/route.ts) - the helper exists, the route does not call it, and only the browser-side path applies the defaults.
- **Detrimental use of data (Standard 6).** Streaks, nudges, personalisation and analytics off by default for minors.
- **Parental controls (Standard 10).** The guardian loop above, plus the AI opt-out a parent can set - which, as section 6 records, currently never takes effect on the twelve routes that read it, and is not read at all by `marking/run`.
- **Transparency.** Refusals name a real control; the inline panel states what is sent and to whom; nothing claims a certified grade.

## 10. The short list of what is still wrong

Stated plainly so nobody has to rediscover them:

1. `isAiOptedOutServer` never matches a row - the parental AI opt-out does nothing (section 6).
2. `POST /api/marking/run` makes a model call behind no consent gate and no AI opt-out check, and logs a `consentSnapshot` claiming both passed (section 6).
3. OAuth and email-confirmation sign-ins never stamp `lastLoginAt`, so the dormancy cron reads them as never-logged-in (section 2).
4. No `TERMS` or `PRIVACY` consent row is ever written for a new account (section 5).
5. `applyChildDefaults` is not called from the server signup route (section 9).
6. There is no schema-contract test asserting the `profiles` columns the identity layer selects, so the next baselined-but-unexecuted migration will fail the same silent way (section 4).
7. The forced password-rotation flag lives in user-writable `user_metadata` (section 3).

None of these is theoretical. Each one was found by reading the code against the database, which is the only method that works here: the repo's root markdown is largely April-May 2026 and several files contradict what is actually deployed. Trust the code, and verify the schema against `information_schema`.
