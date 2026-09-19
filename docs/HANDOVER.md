# Handover - The English Hub

**Written 18 September 2026**, at the end of a week that started with the AI
product being dead in production and ended with a customer discovering, on our
behalf, that we had revoked the subscription she had paid for.

Read this once, end to end, before your first change. It is long because the
expensive things here are not in the code - they are in what the code _claims_
about itself, and in a database that does not match its own migration history.

Everything below is either verified against production or attributed. Where
something is unchecked, it says so. Treat an unattributed confident sentence
elsewhere in this repo as a hypothesis.

---

## 1. Status right now

`main` is at the identity fix. Working tree clean apart from `public/llms.txt`,
which is a build-generated date stamp - leave it.

**What is healthy:**

- AI marking and feedback work. Models are env-overridable
  (`ANTHROPIC_MODEL`, `MARKING_MARKER_MODEL`, `MARKING_ESCALATION_MODEL`,
  `MARKING_CLASSIFIER_MODEL`); the Anthropic account is in credit.
- All paying subscribers hold `subscription_status = 'pro'`.
- The AI-consent gate has a control that actually grants consent - until
  18 September it told people to change a setting that did not exist anywhere.
- `profiles.is_minor` now exists, so identity reads succeed.
- `rate_limit_counter` exists in production and the Postgres rate-limit backend
  is deployed.

**What is still broken, verified today:**

- **Four `progress_*` tables do not exist** (`progress_poems`, `progress_games`,
  `progress_quizzes`, `progress_reading_age`), while eight files read and write
  them - including the `/api/progress/*` routes the mobile app calls. Progress
  tracking is silently dead.
- **Six `marking_submissions` columns do not exist**
  (`needs_human_review`, `proposed_overall_band`, `pack_version`, `band_range`,
  `marking_errors`, `result_schema_version`), which is the human-review
  escalation path.
- **Rate limiting is deployed but unproven.** `getRateLimitHealth()` reports
  `'unproven'` until a decision has genuinely come back enforced, and it has no
  caller and no route - so you cannot read it against production without
  shipping something first.

Run `node --env-file=.env.local scripts/check-schema-drift.mjs` to see the first
two for yourself. It is read-only.

**Verified 18 September 2026, later the same day, by the incoming operator:**

- `tsc` clean, 2,265 tests passing, schema drift exactly as above plus one
  more: `email_subscribers` (from `20260504120000_email_subscribers.sql`) does
  not exist either. Nothing in `src/` references it, so it is a dead
  migration rather than a dead feature.
- **Production has no `SMTP_HOST`** (checked with `vercel env ls production`,
  names only). `sendEmail()` in `src/lib/email.ts` builds a nodemailer
  transport at module load with `host: undefined`, so every message on that
  path has been failing and returning `{ success: false }` to callers that
  carry on regardless: safeguarding alerts, DSAR acknowledgements, school
  invites, parent-link notices, dormancy and retention warnings. `RESEND_API_KEY`
  is set, so the fix is to route `sendEmail` through Resend when SMTP is
  unconfigured. Not yet done; highest-priority next change.
- Production has no `SENTRY_DSN` or `NEXT_PUBLIC_SENTRY_DSN`. Sentry is a
  silent no-op. No `DSL_EMAIL`, `SCHOOL_INQUIRY_EMAIL`, `IP_HASH_SALT`,
  `CSRF_SECRET`, `UPSTASH_*`, `SENDGRID_API_KEY`, and no `TRIAL_LIFECYCLE_EMAILS_ENABLED`
  or `WEEKLY_PARENT_REPORTS_ENABLED` (both crons therefore off).
- `NEXT_PUBLIC_POSTHOG_KEY` IS set, so PostHog is a live sub-processor and
  decision B17 in `BUSINESS-DECISIONS-NEEDED.md` is answered: yes. `/legal/privacy`
  must name it.
- `STRIPE_PRICE_IELTS_MONTHLY` and `STRIPE_PRICE_IELTS_ANNUAL` ARE set, which
  contradicts `LAUNCH-READINESS-2026-08-18.md` item C3. The buy buttons have
  not been exercised; do that before advertising IELTS.
- The `ANTHROPIC_API_KEY` in `.env.local` was **not** the production key (the
  provider returned 401 on it). It was replaced with the production value on
  18 September; a backup of the old file is outside the repo. Everything else
  in `.env.local` was left alone, including the test-mode Stripe keys.
- The examiner marking tool shipped (chapter 04 §12). `/api/health/ai` now
  probes every configured model and runs daily from `vercel.json`.

**Found and fixed later on 18 September (verified against production):**

- **The signup profile write had never succeeded, for any account.** Both
  signup pages upserted `profiles` from the browser after `signUp()`. With
  email confirmation on there is no session at that moment, and `profiles`
  has no INSERT policy for users in any case, so PostgREST refused every
  upsert; the student page also named ten columns no migration had created.
  Both pages logged it as non-blocking. Result on 206 of 206 accounts:
  `role = 'student'` (teachers included), `date_of_birth` NULL, `is_minor`
  false, no board, year group, school or guardian email, no attribution
  although 11 auth users carried `utm_source` in their metadata. The age
  system fails closed (`resolveAgeBand()` returns UNKNOWN and the AI gate asks
  for a date of birth at the point of use), so no child was treated as an
  adult, but the Children's Code defaults the page computed were never stored
  and `UNKNOWN` does not summon a guardian. Fixed in three parts, all
  additive: `20260918_profiles_signup_privacy_columns.sql` adds the ten
  columns; `20260918_handle_new_user_reads_signup_metadata.sql` makes the
  auth trigger write the whole profile from the signup metadata with
  per-field validation and computes the under-18 defaults itself;
  `20260918_profiles_year_group_check_widen.sql` lets the CHECK accept the
  form's Year 13 and Other. Both pages now pass their fields in
  `signUp({ options: { data } })` via `src/lib/auth/signup-metadata.ts` and
  no longer write `profiles` at all. `src/__tests__/profiles-signup-columns.test.ts`
  is the first schema-contract test: it fails if code names a `profiles`
  column no migration declares. `scripts/backfill-profiles-from-auth-metadata.mjs`
  (report-first) recovered 6 teachers, 1 parent and 11 attribution rows from
  the auth metadata; dates of birth were never in the metadata and cannot be
  recovered.
- **A signed-in safeguarding report would have failed at insert.**
  `SafeguardingReport.reporterId` and `AuditLog.userId` are foreign keys to
  Prisma `User.id` and the constraints exist in production; the route wrote
  the Supabase uuid into both. Zero reports have ever been submitted, so no
  disclosure was lost. The route now resolves the Prisma id with
  `tryPrismaUserId()` (null keeps the report anonymous rather than failing),
  the alert email goes through Resend when `SMTP_HOST` is unset, and the
  "fallback inbox" is only attempted when it is a different address.
- **Attribution signal:** of the 11 recovered `utm_source` values, 9 are
  `chatgpt.com`. AI assistants are already referring learners.
- **Five public forms wrote to tables that did not exist** and no migration
  declared them: `creator_applications` (the /creators form), `school_contact_requests`
  (the schools contact form), `waitlist`, `feedback_entries` and
  `teacher_referrals`. Each route returned 500 on every submission (the
  waitlist route caught the error and told the visitor they were on a list
  that did not exist), so the creator programme had no working entry point
  and no school enquiry or piece of feedback was ever stored. Created by
  `20260918_public_form_tables.sql` from the routes' own insert payloads,
  service-role only; every route's insert shape tested against production in
  a rolled-back transaction. Still missing and deliberately not created here
  because their contracts need a decision first: `student_progress` (mobile
  `GET /api/progress`), `assignments`, `assignment_submissions`, `import_jobs`
  (see chapter 02 §5.2 and the mobile and data-integrity items in the
  improvement backlog). Follow-up: add the five new tables to the retention
  cron on the two-year support-communications clock.

---

## 2. The product

Exam revision and AI marking for GCSE, IGCSE, IAL and IELTS. Free content and a
signed-out IELTS diagnostic at the top of the funnel; a paid tier
(`profiles.subscription_status = 'pro'`) for AI marking and premium material.
Separate IELTS entitlement (`profiles.ielts_status`). Schools, teachers and
parent-linked accounts exist. There is a **live mobile app** in a different
repo, `D:\Coding\english-hub-mobile`, which calls this one's API - treat
`/api/me/entitlements`, `/api/mark/stream`, `/api/progress`, `/api/flags` and
`/api/revenuecat/webhook` as a published contract with a client you cannot see.
The `mobile/` folder _inside_ this repo is a dead prototype; do not develop in it.

**Roughly 206 accounts, 4 paying.** Small enough that one customer's experience
is a meaningful fraction of the business, and large enough that a silent defect
can sit unnoticed for months. Both of those have happened.

**Many users are children.** The age gate, parental consent, retention crons and
the fail-closed defaults exist for that reason.

---

## 3. The three structural facts

### 3.1 A user has two identities

Supabase `auth.users` and `profiles` are keyed on a **uuid**. Prisma `User.id`
is a **cuid**, and every Prisma foreign key references it. Email confirmation is
on, so most signups never reached `/api/auth/register` and have no Prisma row -
**200 auth users, 200 profiles rows, 8 Prisma User rows** when this was found.

Five subsystems keyed on `User.id` while every caller passed the uuid. All five
addressed nothing, and all five failed quietly:

- the consent ledger could not be written, so every signed-in user was locked
  out of every AI feature;
- account deletion returned `{ success: true }` having deleted nothing - an
  Art.17 erasure that erased nothing;
- DSAR export refused Art.15 requests for data demonstrably held;
- the AI decision log could never write a row, which is why two model outages
  went undiagnosed;
- the Stripe webhook never wrote a `Subscription` row for any paying customer.

**The rule:** routes pass the Supabase uuid and never handle a cuid. Anything
needing a Prisma row calls `requirePrismaUserId()` (throws - use where failure
must block) or `tryPrismaUserId()` (returns null - read paths only), both from
`@/lib/identity`. `projectSupabaseUser()` is the only function permitted to
create or adopt a `User` row, and projection is additive-only: no Consent row,
no `parentId` (writing `parentId` _is_ granting parental consent), no
Subscription, no invented date of birth.

**The exception you must not "tidy":** tables referencing `profiles(id)` -
notably `parental_consents.student_user_id` - are keyed on the **Supabase uuid**.
Swapping in the Prisma id there breaks the parental gate.

### 3.2 One entitlement field, one person, several subscriptions

`profiles.subscription_status` is a single column per person, and
`hasActiveSubscription()` grants premium on **exactly** `'pro'`
([`src/lib/course-access.ts`](../src/lib/course-access.ts)). A person can hold
several Stripe subscriptions.

Both Stripe revocation handlers used to write that field keyed on the
**customer**, never asking which subscription the event concerned. A customer
with a paid subscription and a failing duplicate had her paid access revoked
every time the duplicate retried:

```
15 Sept 18:44  duplicate fails           -> past_due
16 Sept 21:15  the paid one settles      -> pro
17 Sept 20:44  duplicate's retry fails   -> past_due
18 Sept 04:18  duplicate's dunning ends  -> cancelled
```

Fixed. Both handlers now check for another live subscription on the same price
before touching the entitlement, via `findDuplicateSubscription` in
[`src/lib/billing/duplicate-subscription-guard.ts`](../src/lib/billing/duplicate-subscription-guard.ts).

**Two traps in the same area.** `handleSubscriptionDeleted` also writes
`subscription_end_date` from `ended_at`, and the stale-event guard on
`customer.subscription.updated` then refuses to re-grant Pro once that date has
passed - so repairing a locked-out customer by touching their good subscription
in the Stripe dashboard **fails silently**, logging `Refusing to re-grant Pro`
while the dashboard shows Active and paid. And there are **two** entitlement
sources: the web gates read `profiles.subscription_status`, while `/api/me` and
`/api/me/entitlements` (the mobile contract) read the Prisma `Subscription` row.
Fixing one does not fix the other.

### 3.3 The migration tracker records intentions, not reality

[`scripts/apply-migrations.mjs`](../scripts/apply-migrations.mjs) has a
`BASELINE_CUTOFF`. Every migration file sorting before it is **inserted into
`_migrations_applied` without being executed**. On 2026-05-30T11:51:47Z it
recorded 66 files in four seconds.

At least one had never actually run. `20260512_user_is_minor.sql` creates
`profiles.is_minor`; the column did not exist.
[`src/lib/identity/profiles.ts`](../src/lib/identity/profiles.ts) selects it on
every identity read, so every read returned Postgres `42703`, the caller
discarded the error, and `resolveAgeBand()` degraded to `UNKNOWN` for all 206
accounts - blocking every consent-gated AI route, on a children's product, for
four months, in silence. The tracker said applied. Checking the tracker, which
is the obvious thing to do, confirmed the wrong answer.

**Verify schema against `information_schema`, never against
`_migrations_applied`.** `scripts/check-schema-drift.mjs` does exactly that.

The runner also **skips silently when no database URL is in the environment**,
which is why a local build cannot touch production - useful, but it means a
local build proves nothing about migrations.

---

## 4. The pattern

Five shapes, every one of them found in production code here:

1. **A swallowed failure with a reassuring comment.** The webhook logged for
   months that a missing subscription row "can be back-filled". It never was.
2. **One field carrying two meanings.** §3.2.
3. **An identifier of one type passed where another was required.** §3.1.
4. **A document or comment asserting what the code does not do.** A compliance
   document declared rate limiting ENFORCED while the code sat undeployed.
5. **A health check that reports green without proving anything.**
   `databaseStatus()` proves `DATABASE_URL` and a salt exist; it cannot prove
   the table does.

Nothing here crashes. Things fail and report success, and **the customer is the
detection mechanism** - which is how a paying subscriber came to tell us that
her account had been cut off.

**Two live examples of shape 5 to fix, not admire:**

- `/api/health` is a hardcoded 200 with no dependency check. Pointing an uptime
  monitor at it buys a monitor that stays green through a total database outage.
- `/api/health/ai` was built so a third model retirement would be a next-morning
  alert. **Nothing calls it** - it is not in `vercel.json`'s 15 crons. It also
  probes `ANTHROPIC_MODEL` only, so if `MARKING_MARKER_MODEL` is retired while
  `ANTHROPIC_MODEL` still resolves, it returns `status: 'ok'` while core marking
  is dead. _(Agent-reported, file:line cited, not personally re-verified.)_

---

## 5. Open items - code

Ordered by what I would do first.

0. **Route `sendEmail()` through Resend when `SMTP_HOST` is unset.** See §1:
   the nodemailer path is dead in production and carries the safeguarding
   alerts. `src/lib/email/resend.ts` already has `sendViaResend()`.
1. ~~**Wire `/api/health/ai` to a cron** and make it probe all four model
   constants.~~ Done 18 September: it probes seven ids (shared, three marking
   tiers, three examiner tiers) and runs at 06:30 UTC daily. What is still
   missing is anyone being told: a failing run is a non-2xx in the Vercel cron
   log and nowhere else. Point an external monitor at it with the
   `CRON_SECRET` bearer, or add a Sentry DSN and raise from the route.
   1b. **Examiner tool follow-ups.** Add `examiner_marking_runs` expiry to
   `/api/cron/data-retention` and both examiner tables to the DSAR export;
   promote AQA 8700 Paper 1 and Paper 2 to exemplar-derived packs (the
   largest UK teacher segment); consider linking saved runs to
   `marking_submissions` for school members so the AO analytics see them.
2. **Apply `20260512_progress_tables.sql` and `20260529_marking_result_v2.sql`.**
   Both are additive but both drop and recreate RLS policies on live tables, so
   schedule them deliberately and verify RLS afterwards. Do not run them
   casually mid-task.
3. **Add a schema-contract test.** `npm test` is 2,265 tests in ten seconds and
   mocks every database call - it passed throughout the outage in §3.3. A test
   asserting that each selected column list exists would have caught it.
4. **Prove rate limiting.** Expose `describeRateLimitHealth()` or write a probe
   that exercises a limited endpoint twice and reads the counter back. Only then
   update `business-docs/compliance/controls/rate-limiting-control-status.md`.
5. **Close the duplicate-checkout race.** The guard runs at _session_ creation;
   the subscription only exists once checkout completes, so two tabs opened
   together still both become subscriptions. Consider a Stripe idempotency key
   or expiring the earlier session.
6. `paymentCount` is never incremented for web customers (only
   `src/lib/revenuecat/reconcile.ts` writes it), so the Trustpilot retention
   cron has never emailed a web payer and retention logic reads them as having
   no financial records. Needs a deliberate decision, not an invented counter.
7. `/api/profile/dob` overwrites an existing date of birth unconditionally, so a
   minor can raise their own age by calling it directly.
8. No `/es` route, deliberately - the decision and the five preconditions are
   recorded in `src/middleware.ts`. Do not route it until Spanish study content
   exists.

## 6. What only the account owner can do

Not a to-do list - a standing boundary. These are outside what you should do
even when you can see exactly what needs doing, and the right output is a
precise set of steps handed over, not an action taken.

**Money.** Only `sk_test_` Stripe keys are on this machine, but the rule is not
about keys. Never cancel, refund, charge, extend or void anything. Prepare the
exact dashboard steps, say what you verified and what you could not, and hand it
over. The same applies to anything that changes what a customer is billed.

**Production environment variables.** Vercel settings are the owner's. Where a
missing variable would break a feature, the code should degrade loudly rather
than wait for the setting - see `resolveIpSalt()` in
[`src/lib/usage/free-allowance.ts`](../src/lib/usage/free-allowance.ts), written
after a missing `IP_HASH_SALT` took the top-of-funnel lead magnet offline.

**Anything that sends to a real customer.** Drafts are yours; sending is not.
Every claim in a customer email must be true at the moment it arrives, which
usually means something has to be done in Stripe or deployed first. Say what the
gates are.

**Schema changes on live tables carrying RLS policies.** Adding a column is one
thing; dropping and recreating row-level security on a table holding children's
data is another. Those get scheduled deliberately, with the owner, and verified
afterwards.

**Publishing or altering compliance and sales collateral.** `business-docs/`
contains statements handed to schools during procurement. Some are already wrong
(see §7). Correcting them is real work with a real audience, not tidying.

## 7. Which documents to trust

**Six are current.** Everything else at the repo root should be read as history.

| Question                          | Read                                                                                            |
| --------------------------------- | ----------------------------------------------------------------------------------------------- |
| Pricing                           | `src/constants/pricing.ts` - the source of truth. Every price in every `.md` has drifted.       |
| Deploying                         | `DEPLOYMENT.md` sections 1, 2, 4, 6                                                             |
| Rate limiting / compliance status | `business-docs/compliance/controls/rate-limiting-control-status.md` - declares itself canonical |
| What is outstanding               | `LAUNCH-READINESS-2026-08-18.md` section C                                                      |
| Decisions needing a human         | `BUSINESS-DECISIONS-NEEDED.md`                                                                  |
| AI accuracy position              | `evals/README.md`, `evals/datasets/REAL-DATA-PROTOCOL.md`                                       |

**Known contradictions** _(agent-reported with file:line; spot-check before
acting):_

- `MONITORING.md` is wrong in most of its specifics - cron count, Sentry config
  files, PostHog. Its one true line is that there is no external uptime monitor.
- `DEPLOYMENT.md` section 3 lists four migrations; there are 81.
- **Thirteen marketing documents promise creators 20% recurring commission.**
  The product pays a flat £5–£10 ladder per confirmed signup
  (`src/lib/affiliate/tiers.ts`) and has since April. The site copy was
  corrected; the documents were not. A recent timestamp is not currency -
  `CAMPAIGN_PACKS_v1.md` and `OUTREACH_MESSAGES_v2.md` were regenerated on
  17 September from a stale claim sheet and still carry both the 20% and a
  £3.49 price scrubbed from the site in August.
- A customer-facing information security statement in
  `business-docs/sales-collateral/deployment-pack/` claims Redis-backed rate
  limiting and per-request CSP nonces. Neither is true, and a PDF of it already
  exists in `dist/`. Check section 5 of the rate-limiting control document - it
  has a "may not be said" table - before quoting any control to a school.

**Do not tidy the eighteen compliance documents** that say rate limiting is not
enforced. The blocker sentence is stale; the status is correct. Section 9 of the
canonical document records that an earlier draft already made this mistake and
was wrong in the dangerous direction.

---

## 8. Your first hour

1. `git log --oneline -5`, `git status --short`. Expect a clean tree apart from
   `public/llms.txt`.
2. `npx tsc --noEmit` and `npx vitest run`. Expect 0 and ~2,265 passing. This is
   your baseline for telling your breakage from inherited breakage - and
   remember it proves nothing about production.
3. `node --env-file=.env.local scripts/check-schema-drift.mjs`. Expect the
   `progress_*` tables and `marking_submissions` columns from §1. If anything
   else appears, that is new and worth raising immediately.
4. Read `.env.local` - **variable names only, never echo values**. It points at
   the production Supabase project with the **service-role key**, so RLS does
   not apply to anything you run.
5. Before running any script, check whether it writes:
   `grep -lE '\.(create|update|upsert|delete)\(|DROP |DELETE FROM' scripts/*.{ts,mjs,js}`.
   `scripts/seed.ts` would put an admin account with a published password into
   the live database. It has no dry-run and no environment guard.
6. Read these six files end to end: `src/lib/identity/age.ts`,
   `src/lib/identity/lookup.ts`, `src/lib/consent-check.ts`,
   `src/lib/course-access.ts`, `src/lib/billing/duplicate-subscription-guard.ts`,
   `src/middleware.ts`. Together they are the actual architecture. The README
   still says Next.js 14; it is 15.5.
7. `cat vercel.json` - 15 crons, region `lhr1`. Note which ones delete data.
8. Write to the owner before writing code. Tell him what you found that this
   document got wrong.

---

## 8a. What the suite proves, and what it costs

**Measured 19 September 2026 (MAINT-9).**

`npx vitest run` is 3,246 passing tests across 185 files in about **7 seconds**.
It was 14 seconds until the default environment was changed from `jsdom` to
`node`: jsdom was being built for all 187 files although 13 use a DOM, costing
200 seconds of cumulative environment setup. Those 13 now carry
`// @vitest-environment jsdom` at the top of the file. If you add a test that
touches `document`, `window` or `localStorage`, add that line or it will fail
immediately and loudly, which is the intended behaviour.

**Statement coverage is 10.82%** (`npx vitest run --coverage`; branch 8.78%,
functions 7%). Treat that as a ratchet, not a target: it should not go down.
It is low because the suite is deliberately made of structural and contract
tests aimed at specific defects rather than line-coverage tests, and because
**every database call is mocked** - that is the limitation named in section 4,
and it is why the suite passed throughout both model-retirement outages.

Two things the suite still does not run, both blocked rather than forgotten:

- **`npm run eval:marking`** makes real Anthropic calls. It needs an API key in
  GitHub Actions secrets, which only the account owner can set.
- **The seven Playwright specs in `e2e/`** run nowhere. Adding them - or the
  evals - to `ci.yml` is pointless until the pipeline itself is repaired: it has
  been failing at `npm ci` on every run and the failing log is not readable from
  this machine (`gh` is not signed in here). See REL-10.

`src/__tests__/TEST_PLAN.md` is from March and describes a much smaller suite.
It carries a banner saying so. It is kept dated rather than refreshed, because
the date is the only honest signal a reader has that it predates almost
everything in the directory around it.

---

## 9. How to work here

- **Verify before you claim.** The single most costly habit in this project's
  history is a confident sentence nobody checked. If you cannot check something,
  say so and say why.
- **Commit by explicit path. Never `git add -A`.**
- **Mutation-check any structural test.** Break the code deliberately and
  confirm the test fails. A test that passes without the fix is worse than none.
- **Money is the owner's.** Prepare exact steps; do not execute.
- **Write the defect into the docblock** when you fix one. Every file you will
  read here that explains a past incident does so because that was done. It is
  the reason this handover could be written at all.
- **British English, no em dashes, no exclamation marks.** Match the file you
  are editing.
