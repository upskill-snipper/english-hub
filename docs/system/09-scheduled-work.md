# Cron jobs, background work and data lifecycle

Twenty Vercel Cron entries - seventeen `/api/cron/*` jobs plus three health probes, `/api/health/ai`, `/api/health/marking` and `/api/health/schema` - in [`vercel.json`](../../vercel.json) drive everything this product does when nobody is looking: ending trials, confirming affiliate commissions, expiring school invites, sending weekly digests, generating blog drafts, and - the part that deserves the most care - deleting people's accounts. Four of those jobs destroy data, three of them irreversibly, and two of the three target child accounts. This chapter tells you what each job does, what it writes, which ones delete, and where the deletion logic will fire on the wrong person.

There is no queue, no worker process and no job table. A cron job here is an HTTP GET to a Next.js route handler, authenticated by a shared secret, running for at most a minute. If it fails, it fails quietly unless you go and look.

---

## The schedule at a glance

All times are UTC. Vercel cron never sends a body and never sends anything but `GET`.

| Path                                    | Schedule                 | Deletes data          | Wrapped in `runCron` | What it writes                                 |
| --------------------------------------- | ------------------------ | --------------------- | -------------------- | ---------------------------------------------- |
| `/api/cron/affiliate-confirm-v2`        | `0 2 * * *` (02:00)      | no                    | yes                  | `affiliate_conversions.status`                 |
| `/api/cron/expire-invites`              | `20 2 * * *` (02:20)     | no                    | yes                  | `school_members.invite_status`                 |
| `/api/cron/affiliate-confirm`           | `0 3 * * *` (03:00)      | no                    | yes                  | `affiliate_referrals.commission_status`        |
| `/api/cron/dormancy-check`              | `30 3 * * *` (03:30)     | **yes, indirectly**   | yes                  | `User.accountStatus`, `AuditLog`, emails       |
| `/api/cron/trustpilot-followup-7d`      | `45 3 * * *` (03:45)     | no                    | yes                  | `trustpilot_invite`, emails                    |
| `/api/cron/trial-expiry`                | `15 4 * * *` (04:15)     | no                    | yes                  | `profiles.subscription_status`, `Subscription` |
| `/api/cron/trustpilot-retention-90d`    | `30 4 * * *` (04:30)     | no                    | yes                  | `trustpilot_invite`, emails                    |
| `/api/cron/data-retention`              | `0 4 * * *` (04:00)      | **yes, irreversibly** | yes                  | many; see below                                |
| `/api/cron/dormancy-purge`              | `0 6 * * 0` (Sun 06:00)  | **yes, irreversibly** | yes                  | `User` PII overwrite, `Consent` delete         |
| `/api/cron/school-access`               | `0 5 * * *` (05:00)      | no                    | yes                  | `schools.access_type`, emails                  |
| `/api/cron/trial-ending`                | `0 9 * * *` (09:00)      | no                    | yes (after a flag)   | `RenewalReminder`, emails                      |
| `/api/cron/trustpilot-retention-invite` | `0 15 * * *` (15:00)     | no                    | **no**               | `trustpilot_invite`, emails                    |
| `/api/cron/weekly-parent-reports`       | `0 16 * * 0` (Sun 16:00) | no                    | yes (after a flag)   | `WeeklyReport`, emails, push                   |
| `/api/cron/weekly-student-reports`      | `0 17 * * 0` (Sun 17:00) | no                    | yes                  | `WeeklyStudentDigest`, emails                  |
| `/api/cron/blog-generate`               | `0 */12 * * *`           | no                    | yes                  | a GitHub branch and PR                         |
| `/api/cron/operator-digest`             | `0 7 * * *` (07:00)      | no                    | yes                  | a log line, and an email only if configured    |

Two docstrings disagree with the schedule they describe: [`trustpilot-followup-7d/route.ts:7`](../../src/app/api/cron/trustpilot-followup-7d/route.ts) says 03:30 (it is 03:45) and [`trustpilot-retention-90d/route.ts:9`](../../src/app/api/cron/trustpilot-retention-90d/route.ts) says 04:00 (it is 04:30). Trust `vercel.json`.

**Fixed 19 September 2026 (REL-8).** `data-retention` and `dormancy-purge` both fired at 04:00 on Sundays, both touched child accounts, and nothing serialised them - `purgeDormantAccount` uses a transaction while `processChildDormancy` does not. Two things changed: `dormancy-purge` moved to Sunday 06:00, and both now take the same run lock (`child-account-deletion`), so they cannot overlap even if one runs long. Three schedule collisions were resolved in total; the other two were `trial-expiry` against `trustpilot-retention-90d` at 04:15, and `affiliate-confirm-v2` against `expire-invites` at 02:00, which the item's own evidence had not noticed.

The structural test asserts no two entries can fire in the same minute, comparing expanded cron fields rather than schedule strings - `0 4 * * *` and `0 4 * * 0` are different strings and collided every Sunday.

### The operator digest

Added 20 September 2026 (REL-4). `GET /api/cron/operator-digest` runs at 07:00,
after the three health probes, and counts the things that previously existed
only as rows nothing read: safeguarding reports still open and the age of the
oldest, safeguarding alert deliveries that failed, erasures that failed, and
data access requests still pending against the one-month statutory clock.

`prisma.auditLog` is written by nineteen actions and read in two places, neither
of which aggregates, so `USER_ERASURE_FAILED` was a GDPR obligation failing into
a table nobody queries.

**It does not check Stripe reconciliation, AI or marking health, or webhook
freshness, and it says so in its own body.** The health probes already run and
fail on their own; reconciliation needs live Stripe reads; there is no stored
last-event timestamp to read for webhooks. A digest covering five things reads
exactly like one covering everything when both say "nothing outstanding", so it
names its own gaps every morning.

**The email is opt-in.** It sends only when `OPERATOR_DIGEST_EMAIL` is set,
following the safeguarding cron's precedent, and the route contains no address
of any kind - a test asserts that, because a fallback would mean the product
started emailing somebody nobody chose. Unset means the figures go to the log
and nowhere else.

Unlike the safeguarding cron it does not throw on findings. An open safeguarding
report is normal operations, and a cron that ran red every morning is a cron
nobody looks at. It throws only when it cannot gather the numbers.

---

## How a cron route is wired

### Authentication

Every scheduled route checks `CRON_SECRET` through **one** implementation, [`src/lib/cron/auth.ts`](../../src/lib/cron/auth.ts). It accepts `Authorization: Bearer <secret>` (what Vercel Cron sends) or `x-cron-secret: <secret>` (what the older hand-run scripts and internal callers send), length-checks before `timingSafeEqual`, returns 500 when `CRON_SECRET` is unset and 401 otherwise, and hands the verified secret back so a route that has to forward it does not read the environment a second time.

Until 19 September 2026 there were **four** implementations - the helper on two routes, a whole-header compare copied into eleven, and two one-off slices. All four were correct; they were just duplicated, which meant a fix to one of them fixed one of them. `scripts/migrate-cron-auth.mjs` moved the remaining sixteen onto the helper in one pass (REL-8) and is idempotent, so it can be re-run to check.

**If you add a cron route, export `GET` and call `authoriseCronRequest`.** This is now enforced over every scheduled path rather than over two of them: [`src/__tests__/scheduled-work-has-one-shape.test.ts`](../../src/__tests__/scheduled-work-has-one-shape.test.ts) walks `vercel.json` and `src/app/api/cron/` in both directions and asserts each route exports `GET`, uses the helper, calls no `timingSafeEqual` of its own, and reports through `runCron`. The earlier guard covered only the two Trustpilot routes - two of sixteen - which is why the other fourteen drifted.

The header comment in `auth.ts` records why the helper exists. Two routes shipped with only a `POST` export and only an `x-cron-secret` read, so Vercel's `GET` was answered `405` by the framework and **every scheduled run between 19 April and 17 September 2026 sent nothing**. A 405 is produced before the handler is entered, so the observability wrapper never saw it and no alert fired.

`/api/push/send` is also `CRON_SECRET`-gated but is not itself scheduled - it is the internal fan-out endpoint the parent-report cron calls when that cron is enabled ([`push/send/route.ts:36-49`](../../src/app/api/push/send/route.ts)), and it reads only `x-cron-secret`.

### Rotating `CRON_SECRET` breaks every outstanding unsubscribe link

Added 19 September 2026 (RET-7). `CRON_SECRET` is no longer only a cron credential: it is also the HMAC key for unsubscribe tokens ([`src/lib/email/unsubscribe-token.ts`](../../src/lib/email/unsubscribe-token.ts)). Those tokens are embedded in the `List-Unsubscribe` header and the footer link of every marketing email we send, and they are valid for about thirteen months.

**Rotating the secret invalidates all of them at once**, including links in mail that was delivered months ago and has not been opened yet. Nothing anywhere will report this.

It was keyed this way deliberately - the alternative was a new production environment variable, which only the owner can set, and an unsubscribe route that waits on one is an unsubscribe route that does not exist. The consequence is survivable rather than harmless: an unverifiable token does **not** show an error, it renders the neutral "manage your preferences" page at `/unsubscribe`, which still lets a signed-in reader opt out by hand.

If you rotate `CRON_SECRET` - after an incident, or on a schedule - assume every unsubscribe link in flight has silently degraded to that fallback. Giving the tokens their own key (`UNSUBSCRIBE_TOKEN_SECRET`, falling back to `CRON_SECRET` when unset) removes the coupling in about ten lines, and is the right fix the first time the secret genuinely needs rotating.

### Observability

[`src/lib/cron/observability.ts`](../../src/lib/cron/observability.ts) is a 59-line wrapper. `runCron(name, body)` times the body, adds a Sentry breadcrumb and a `console.info` on success, and on a throw calls `Sentry.captureException` with tag `cron: <name>` and returns HTTP 500.

**All seventeen cron routes now use it.** `trustpilot-retention-invite` was the exception until 19 September 2026: it returned `NextResponse.json` directly from `handle()`, so it emitted no breadcrumb, no duration, and an unhandled throw inside it reached Next.js rather than Sentry. If that job had stopped working you would have found out from Trustpilot review volume.

Two routes - `trial-ending` and `weekly-parent-reports` - only reach `runCron` past an env-var flag that is off by default. Both are deliberate and documented in place (`trial-ending` waits on the founder reviewing the copy; `weekly-parent-reports` waited on a real unsubscribe path, which RET-7 has since built, so that one is now waiting only on the environment variable). A disabled run used to emit nothing at all, making it indistinguishable in the log from a schedule that never fired; both now log one `[cron:<name>] skipped` line.

### The run lock

Added 19 September 2026 (REL-8). `runCron` claims a lease in `public.cron_runs` before entering the body and releases it on both paths. A contended run answers 200 with `skipped: 'already-running'` and a Sentry warning; a lock that cannot be reached at all answers **500**, because an unreachable lock must never be mistaken for a held one - that would stop every cron in the product and report success for ever.

It is a lease row and not `pg_try_advisory_xact_lock`, which is what the proposal asked for. Measured against production: called through a bare `$queryRaw`, the second `pg_try_advisory_xact_lock` on the same key returns `true`, because the statement is its own implicit transaction and the transaction-scoped lock dies with it. The session-scoped variant is worse - `DATABASE_URL` is pgBouncer on 6543 in transaction pooling mode, so lock and unlock can land on different backends and the job wedges shut permanently. See [`supabase/migrations/20260919_cron_run_locks.sql`](../../supabase/migrations/20260919_cron_run_locks.sql).

`data-retention` and `dormancy-purge` share the lock name `child-account-deletion` rather than each taking their own. The per-name lease stops Vercel running one job twice; only a shared name stops those two running at once, and they are the pair that delete dormant children's accounts - one of them inside a transaction, the other not. Their schedules were also moved apart, but moving schedules only narrows the window.

Two things to understand about failure:

- **Sentry only reports in production.** [`sentry.server.config.ts:5`](../../sentry.server.config.ts) sets `enabled: process.env.NODE_ENV === 'production'` and the DSN comes from `SENTRY_DSN`. A local or preview run captures nothing.
- **A 500 does not guarantee a retry.** The comment at `observability.ts:49` says "500 so Vercel retries per its cron policy". I could not verify from this repository that Vercel Cron retries failed invocations, and several routes are written on the assumption that it does (the weekly digests deliberately throw on a total delivery failure so the run is "retried"). Treat the retry as unproven until you check the Vercel account's plan behaviour. The idempotency ledgers described below make a retry safe either way, which is the part that actually matters.

Several routes deliberately do not throw on partial failure. `affiliate-confirm` and `affiliate-confirm-v2` tolerate up to 10% per-item failures and only throw past that ([`affiliate-confirm/route.ts:117-132`](../../src/app/api/cron/affiliate-confirm/route.ts)). `weekly-student-reports` throws only when _every_ attempted send failed ([`route.ts:415-421`](../../src/app/api/cron/weekly-student-reports/route.ts)). The rule across the codebase is: one bad row must never abort a batch, but a whole-run outage must be loud.

### The schema probe

Added 19 September 2026 (DATA-1). `GET /api/health/schema` runs at 06:40 daily and compares 529 things this repository claims about the database against `information_schema` and the `pg_*` catalogues: every table and column the migrations declare, every `.from('x')` in `src/`, every Prisma model, and the policies, indexes, triggers and functions.

The half that did not exist before is the **code** scan. `scripts/check-schema-drift.mjs` compared only migrations against reality, which is structurally blind to a table that code reads and no migration declares - and that is the failure that actually happens here. Five public forms wrote to nothing for months while the checker reported no drift, because none of them had a migration to be missing from. Seven more tables are still in that state.

It answers **503 on NEW drift and 200 on known drift**. The 31 findings already recorded against DATA-3 to DATA-9 live in [`scripts/schema-drift-known.json`](../../scripts/schema-drift-known.json), each with the reason it is there. Without that split the endpoint would be red on its first run and every run after, which is indistinguishable from being broken - and it is exactly how `email_subscribers` taught everyone to skim the old report. If it cannot read the schema at all it answers **500**, never "no drift".

It answers from a committed manifest, [`src/lib/schema/expected-schema.json`](../../src/lib/schema/expected-schema.json), because the migration files and the `src/` tree are not in the serverless bundle: a route that scanned them there would parse zero files and report a clean schema for ever. `src/__tests__/schema-drift-guard.test.ts` regenerates the manifest and fails when it is stale.

Locally: `npm run schema:check` (add `--all` to list the known findings).

### Duration

`vercel.json:7-11` caps every `src/app/api/**/*.ts` function at `maxDuration: 60`. Three cron routes export a larger segment value: `maxDuration = 300` in both Trustpilot 7d/90d routes and `= 120` in `trustpilot-retention-invite`. **Which value wins is unresolved.** Next.js route segment config and the `vercel.json` `functions` block both claim the setting, and I did not find anything in this repo that settles it. If a Trustpilot cron is being cut off at 60 seconds, this is the first thing to check.

---

## The jobs that delete data

This is the part to read twice. Three routes remove personal data and two of them cannot be undone.

### What each deletion path actually does

| Path                                               | Trigger                                                                 | Effect                                                             |
| -------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `processChildDormancy` → `deleteDormantChild`      | `isMinor` and `accountStatus = SUSPENDED` and `updatedAt` ≥ 30 days old | `hardDeleteUser` - row gone, `auth.users` gone, `profiles` gone    |
| `cleanupExpiredData` step 1 and 2                  | `accountStatus = DELETED` and `deletedAt` ≥ 30 days old                 | `hardDeleteUser`                                                   |
| `findDormantChildAccounts` → `purgeDormantAccount` | inactive 12 months **and** SUSPENDED **and** `updatedAt` ≥ 30 days old  | PII overwritten in place, `Consent` rows deleted, row soft-deleted |
| `cleanupExpiredData` step 4b                       | `FreeAllowanceUsage.lastUsedAt` ≥ 90 days old                           | `deleteMany` - rows gone                                           |
| `cleanupExpiredData` step 6                        | `Consent` with `MARKETING`, `granted = false`, `withdrawnAt` ≥ 2 years  | `deleteMany`                                                       |

`hardDeleteUser` ([`src/lib/data-retention.ts:843`](../../src/lib/data-retention.ts)) is the irreversible one. In one Prisma transaction it deletes AI feedback, essays, consents, privacy settings, DSAR records, the subscription row and cookie consents, nulls the `userId` on audit rows so the trail survives, deletes safeguarding reports **unless** the minor retention hold applies (`checkSafeguardingRetention`, line 1059), and deletes the `User` row. Outside the transaction it deletes `free_allowance_usage` rows (no foreign key, so nothing cascades - line 954) and then calls `eraseSupabaseIdentity` (line 238) which deletes the `profiles` row, deletes the `auth.users` row, and **verifies both are gone**, throwing `ErasureIncompleteError` if either survives. A Supabase-side failure is swallowed but audited as `USER_SUPABASE_ERASURE_FAILED` so an operator can finish the job.

`purgeDormantAccount` ([`src/lib/privacy/dormancy.ts:424`](../../src/lib/privacy/dormancy.ts)) is gentler in form but the PII is equally gone: email becomes `purged-<id>@deleted.invalid`, names become `[purged]`, DOB is stamped `1900-01-01`, `passwordHash` is emptied, push tokens cleared, consents deleted, then `deletedAt` set and `accountStatus = DELETED`. Note the comment at line 456 says "DOB is required (non-null)" - that is stale, `dateOfBirth` is `DateTime?` in [`prisma/schema.prisma:173`](../../prisma/schema.prisma). Writing a 1900 sentinel where `null` would be honest is a small lie in the data.

A purged row then becomes a `cleanupExpiredData` step 1 candidate 30 days later (`isMinor`, `DELETED`, `deletedAt` old), so the purge is followed by full row deletion about a month afterwards.

### `lastLoginAt` is not recorded for every sign-in method

**This is the single most important finding in this chapter, and it is a live false-positive generator.**

The dormancy clocks read `User.lastLoginAt`. That column is written in exactly one place: [`src/app/api/auth/record-login/route.ts:65`](../../src/app/api/auth/record-login/route.ts). That endpoint is called from exactly one place: [`src/app/auth/login/page.tsx:71`](../../src/app/auth/login/page.tsx), fire-and-forget, immediately after `signInWithPassword` succeeds.

Every other way into the product leaves `lastLoginAt` untouched:

- **Google and Apple OAuth.** `GoogleSignInButton` and `AppleSignInButton` call `supabase.auth.signInWithOAuth` and land on [`src/app/auth/callback/route.ts`](../../src/app/auth/callback/route.ts), which exchanges the code and redirects. It never calls `record-login`. I checked the whole file; there is no such call.
- **Magic links and email-confirmation sign-in**, which take the same `/auth/callback` path.
- **The mobile app.** The only routes under `src/app/api/mobile/` are `devices` and `devices/[id]`. Nothing there or anywhere else stamps `lastLoginAt`.
- **A session that is simply still valid.** Returning with a live cookie is not a sign-in and calls nothing.

The consequence, in `dormancy-check`'s adult pass at [`route.ts:97-110`](../../src/app/api/cron/dormancy-check/route.ts): the query matches `lastLoginAt <= cutoff` **or** (`lastLoginAt IS NULL` and `createdAt <= cutoff`). A Google-only adult who has used the product every day since signing up has `lastLoginAt = NULL` for ever, so on the 730th day after account creation they are emailed "we noticed you have not logged in for over two years" and flipped to `SUSPENDED`. The child path is worse because it reads a different column entirely (see below).

The fallback comment at line 93-96 claims the `createdAt` branch "errs on the side of NOT deleting them until they log in once". That was true when password login was the only route in. It is not true now.

Before you reach for the obvious fix, note the shape of the endpoint. `record-login` exports **only `POST`** ([`route.ts:32`](../../src/app/api/auth/record-login/route.ts)) and it takes no user identifier: it authenticates from the session cookie, calling `supabase.auth.getUser()` through `createServerSupabaseClient()` and returning 401 if that yields nothing ([`route.ts:33-41`](../../src/app/api/auth/record-login/route.ts)). It is also rate-limited to 20 calls per hour per user. So it can only be driven by something that already holds the browser's session cookies, and it cannot be triggered by a redirect.

That rules out the naive version of the fix. `/auth/callback` is a `GET` route handler that ends in a 3xx, and at the moment it runs, the new session cookies exist only on the response it is building - they are not yet on the browser and an outbound server-side `fetch` would not carry them. **The fix is therefore one of two shapes: either `/auth/callback` stamps directly after a successful `exchangeCodeForSession`, reusing the same `tryPrismaUserId` + `user.update({ lastLoginAt })` pair the endpoint uses, or the page it redirects to fires the same fire-and-forget `POST` that [`login/page.tsx:71`](../../src/app/auth/login/page.tsx) already does.** The mobile session bootstrap needs the same treatment. Until one of those lands, no dormancy deletion should be trusted without a manual cross-check against `auth.users.last_sign_in_at`, which Supabase does maintain for every method.

### The two dormancy clocks disagree

There are two inactivity clocks and they measure different things.

- **Warning** uses `updatedAt`. `findDormantChildren` ([`dormancy.ts:103-117`](../../src/lib/privacy/dormancy.ts)) selects `isMinor`, `ACTIVE`, `updatedAt <= 12 months ago`. `cleanupExpiredData` step 3b ([`data-retention.ts:600-606`](../../src/lib/data-retention.ts)) selects `ACTIVE`, `updatedAt <= 730 days ago`.
- **Purge** uses `lastLoginAt`. `findDormantChildAccounts` ([`dormancy.ts:354-377`](../../src/lib/privacy/dormancy.ts)) selects on `lastLoginAt` with a `createdAt` fallback.

`updatedAt` is `@updatedAt`, so any write to the row resets it: a preference toggle, a Stripe customer id write, an identity projection adoption, or `record-login` itself. This is the exact defect the `lastLoginAt` column was added to fix, and it was fixed only in `dormancy-check`'s adult pass. `data-retention` step 3b still runs the old `updatedAt` query, daily, half an hour later, and **without an `isMinor` filter** - so it can send the _adult_ two-year inactivity email to a child account.

The code is honest about this. `dormancy.ts:340-345` states plainly that the two paths read different clocks and that both remain open items.

### `SUSPENDED` is overloaded, and that is dangerous

There is no `dormancyWarnedAt` column. The schema was never extended, so "we warned this person" is encoded as `accountStatus = 'SUSPENDED'` plus a stale `updatedAt`. The TODOs are still in place at `dormancy.ts:107`, `146` and `195`.

Three consequences, all real:

1. **An admin suspension is indistinguishable from a dormancy warning.** [`src/lib/admin.ts:317`](../../src/lib/admin.ts) sets `accountStatus: 'SUSPENDED'` for moderation. Thirty days later `cleanupExpiredData` step 3a ([`data-retention.ts:564-570`](../../src/lib/data-retention.ts)) soft-deletes every `SUSPENDED` row whose `updatedAt` is 30 days old, with no check that the suspension came from a dormancy warning and no `isMinor` filter. Thirty days after that, step 2 hard-deletes it. **Suspending a user for abuse schedules their permanent deletion in 60 days.** If the suspended account is a minor, `findChildrenPastGracePeriod` ([`dormancy.ts:148-156`](../../src/lib/privacy/dormancy.ts)) gets there first: it hard-deletes any `isMinor` + `SUSPENDED` row with `updatedAt` 30 days old, with **no inactivity condition at all** and no `deletedAt` filter, twice a day.
2. **Logging in does not cancel the deletion.** The dormancy warning emails tell the user "Keep your account - simply log in before this date" ([`dormancy.ts:531`](../../src/lib/privacy/dormancy.ts), [`dormancy-check/route.ts:235`](../../src/app/api/cron/dormancy-check/route.ts)). Nothing in the sign-in path resets `accountStatus` to `ACTIVE`. The only writer of `ACTIVE` outside projection and cron code is the admin unsuspend at [`admin.ts:363`](../../src/lib/admin.ts). A user who does exactly what the email asks is still deleted. Logging in _does_ bump `updatedAt`, which pushes the 30-day grace window out by another 30 days each time, so in practice a daily user is repeatedly reprieved and never freed - and a user who logs in once, on the day they get the email, buys themselves 30 days and no more.
3. **`SUSPENDED` silently mutes the product.** `trial-ending`, `weekly-parent-reports` and `weekly-student-reports` all filter `accountStatus: 'ACTIVE'`. A warned user stops receiving digests. Nothing tells them why. Of the three only `weekly-student-reports` is currently enabled, so today this costs a warned user the student digest, and it will cost them the other two the moment those flags are set. Separately, `SUSPENDED` is **not** enforced anywhere at login or in `src/middleware.ts` - I grepped every use of `accountStatus` and found no session gate - so an admin "suspension" does not actually suspend anything. It only starts a deletion timer.

### Unknown date of birth means "treat as a child"

[`src/lib/identity/projection.ts:217`](../../src/lib/identity/projection.ts) sets `isMinor = knownDob ? isMinorFromDob(knownDob) : true`. The protective default is right for consent gating. It interacts badly with dormancy: an adult with no DOB on file is invisible to the adult pass (`isMinor: false`) and fully visible to the child pass, so they get the child dormancy email addressed to a parent, then the 12-month child purge instead of the 24-month adult one.

`findDormantChildAccounts` reinforces this deliberately at [`dormancy.ts:384-393`](../../src/lib/privacy/dormancy.ts): it computes age-at-signup from `dateOfBirth` and `createdAt`, and falls through to `isMinor` when the date is unknown, on the reasoning that the Children's Code protects anyone who was a child when the data was collected. That is the correct posture for a deletion duty. It is still a false positive for the adult it deletes a year early.

### The purge is warned-first, but only since September 2026

`findDormantChildAccounts` originally selected on inactivity alone, with no warned-status condition and no grace period, so `WARNING_GRACE_DAYS` gated nothing and the Sunday purge could strip a child's account without the 30-day warning the design promises. The fix and its full reasoning are at [`dormancy.ts:324-346`](../../src/lib/privacy/dormancy.ts). It was latent - the product launched in March 2026, so no account was yet 12 months dormant - and would have become live behaviour around March 2027 with no further code change. **The first real dormancy cohort arrives in spring 2027.** Everything in this section is untested against production data.

### The coverage gap: these jobs cannot see most accounts

Every retention and dormancy query enumerates `prisma.user`. On 17 September 2026 that table held 8 rows against roughly 200 Supabase auth users, because nothing created the Prisma projection after email confirmation. The crons returned 200 with tiny counts, which reads as "nothing to do" rather than "I am blind to 96% of my duty".

[`src/lib/cron/coverage.ts`](../../src/lib/cron/coverage.ts) does not fix this. It counts `prisma.user` and `profiles`, reports the difference in the cron's own JSON result, and logs `RETENTION COVERAGE INCOMPLETE` as an error when they diverge. A read failure reports `null`, never `0`. It never throws - a coverage check must not be able to fail a retention run. `data-retention`, `dormancy-check` and `dormancy-purge` all call it.

Accounts are now projected eagerly at sign-in via `record-login`, but that converges only for people who come back, and the accounts a retention job exists to act on are exactly the ones that do not. **Read `coverage.incomplete` in every retention run's output before believing its counts.**

### Dead code in `data-retention.ts`

Steps 4 (usage/analytics anonymisation) and 5 (support ticket archival) in `cleanupExpiredData` are comment-only placeholders marked `[PHASE:schema-extension]` - the models do not exist. `summary.usageDataAnonymised` and `summary.supportTicketsArchived` are therefore always `0`, and the cron route faithfully reports those zeros as if work happened. `getAccountsApproachingDeletion` (line 1276) and `generateComplianceReport` (line 1341) have no callers anywhere in `src/`. `anonymiseUser` in `data-retention.ts` (line 753) also has no caller; the live one is the separate implementation in [`src/lib/dsar.ts:193`](../../src/lib/dsar.ts).

---

## The jobs that move money and entitlement

### `trial-expiry` - the job that makes the paywall real

[`src/app/api/cron/trial-expiry/route.ts`](../../src/app/api/cron/trial-expiry/route.ts). Signup provisions a 7-day no-card trial by writing `profiles.subscription_status = 'pro'`. The web entitlement gates read only that field and never look at `subscription_end_date`, so **without this cron a signup trial grants pro for ever and nobody has to pay**. It is load-bearing revenue infrastructure disguised as a housekeeping job.

The safety discriminator is three conditions ANDed: `status = TRIALING`, `stripeSubscriptionId = null`, `currentPeriodEnd < now`. A Stripe-managed trial or a paid subscription always carries a `stripeSubscriptionId`, so a paying customer is structurally excluded. The profile downgrade is additionally guarded with `.eq('subscription_status', 'pro')` so it can only flip a row still sitting on the trial value. A failed profile write `continue`s without flipping the Prisma row, so the next run reconciles it.

### `trial-ending` - default off

[`src/app/api/cron/trial-ending/route.ts`](../../src/app/api/cron/trial-ending/route.ts) sends a warning 2 days before the trial ends and a winback within 3 days after. **It is a no-op returning 200 unless `TRIAL_LIFECYCLE_EMAILS_ENABLED === 'true'`** ([route.ts:136](../../src/app/api/cron/trial-ending/route.ts)). The flag check sits before `runCron`, so a disabled run produces no breadcrumb either.

Two details worth carrying forward. First, the idempotency ledger is a `RenewalReminder` row written **before** the send and deleted again if the send fails (`claimThenSend`, line 343) - a claim-first design that makes retries safe while keeping genuine delivery failures retryable. Second, the docstring at lines 44-55 contains a correction you should read: `paymentCount` is incremented in exactly one file, `src/lib/revenuecat/reconcile.ts`, so it is `0` for every web customer no matter how many Stripe invoices they have paid. **Never treat `paymentCount` as proof that nobody has paid.** The load-bearing filter is `stripeSubscriptionId = null`.

### The two affiliate confirm crons

Both exist, both are scheduled, and they operate on different tables.

- [`affiliate-confirm`](../../src/app/api/cron/affiliate-confirm/route.ts) (03:00) works the legacy `affiliate_referrals` table on a 30-day clearance window.
- [`affiliate-confirm-v2`](../../src/app/api/cron/affiliate-confirm-v2/route.ts) (02:00) works `affiliate_conversions` on a 60-day window (14-day UK statutory refund plus a 46-day clawback buffer) and afterwards calls the `recount_affiliate_referrals(uuid)` RPC so `confirmed_referral_count`, which drives tier advancement, stays in sync.

v2 exists because v1 only ever touched the legacy table, so rows inserted into `affiliate_conversions` at `status='pending'` sat there for ever and the dashboard's all-time earnings showed zero after a real sale. Do not delete either until you have confirmed the legacy table is empty.

v2 treats `past_due` as confirmed rather than voided, on the reasoning that a dunning retry is not a refund request (line 151). It also confirms a conversion when no Stripe subscription can be found at all (line 137) - conservative in the affiliate's favour, and worth knowing before you debug an unexpected payout.

---

## The jobs that only send email

`expire-invites` is the simplest job in the repo and a good template: authenticate, one `update` with a `.select('id')` to count rows, return `{ expired }`. Thirty-eight lines.

`school-access` ([route.ts:191-330](../../src/app/api/cron/school-access/route.ts)) walks every `founder` school with a non-null `access_until`, emails a 30-day warning, a 7-day urgent warning or an expiry notice, and bulk-updates expired schools to `access_type = 'expired'`. **There is no dedup ledger.** The 30-day branch matches every day the school sits inside the window, so a school on a 30-day runway receives roughly 23 warning emails and then 7 urgent ones. Expiry is idempotent only because the row flips out of `founder` on the first pass.

The three Trustpilot crons overlap and one of them is broken:

- `trustpilot-followup-7d` nudges students whose first-mark invite fired 7 (± 0.5) days ago and who have submitted at least 2 essays. Correct identity handling: it works in Supabase uuids throughout.
- `trustpilot-retention-90d` targets users whose `User.createdAt` is 90 days old and whose subscription has `paymentCount >= 1`. Given the `paymentCount` caveat above, **this filter probably matches nothing for web customers**, which would make the job a permanent no-op independently of the 405 problem that was fixed. Worth verifying against the table before assuming it works.
- `trustpilot-retention-invite` keys off `Subscription.currentPeriodStart + 90 days` instead, and is the newer of the two.

**`trustpilot-retention-invite` writes the wrong identifier.** [`supabase/migrations/20260419_trustpilot_invites.sql:12`](../../supabase/migrations/20260419_trustpilot_invites.sql) declares `user_id uuid not null references auth.users(id)`. The route passes the Prisma cuid: the pre-filter at [route.ts:97](../../src/app/api/cron/trustpilot-retention-invite/route.ts) does `.eq('user_id', user.id)` and the send at line 116 passes `userId: user.id`, while `SendEmailOptions.userId` is documented as the Supabase auth uuid at [`src/lib/email.ts:41`](../../src/lib/email.ts). A cuid cannot cast to `uuid`, so both the dedup read and the `trustpilot_invite` insert should error - and both errors are discarded (`const { data: prior }` ignores `error`; `recordTrustpilotOutcome` at `email.ts:120` ignores the insert result and its caller swallows the rejection at line 101). The observable effect is an email that sends, a dedup that never matches, and no row recorded. I have not run this against the database, so confirm it with `information_schema` before acting - but the schema and the code cannot both be right.

The two weekly report crons are the most carefully built jobs here.

**`weekly-parent-reports` is default off.** It returns `200 {skipped: 'disabled - no unsubscribe mechanism yet'}` unless `WEEKLY_PARENT_REPORTS_ENABLED === 'true'` ([route.ts:99](../../src/app/api/cron/weekly-parent-reports/route.ts)), because the report email's unsubscribe link points at a stub settings page and the cron honours no per-parent preference. The kill switch sits before `runCron`, so a disabled run leaves no breadcrumb either. No parent report is being sent today. If you are told parents are not receiving reports, check the env var before you go near deliverability, the ledger or the `parentId` query.

When it is enabled, it enumerates `User.parentId` links, skips under-13s, skips unknown DOB, skips `aiOptOut` and `profileVisibility = PRIVATE`, generates through the pure function in `src/lib/parent-reports/generate.ts`, persists a `WeeklyReport` row, emails the parent and fires a push through `/api/push/send`. **The `WeeklyReport` row is created before the email** ([route.ts:276](../../src/app/api/cron/weekly-parent-reports/route.ts)), so a send failure is logged and the ledger permanently suppresses that week for that family. That ordering defect is latent until the flag is set, and should be fixed before it is.

`weekly-student-reports` fixed exactly that ordering: the `WeeklyStudentDigest` row is written **after** a confirmed send ([route.ts:368-381](../../src/app/api/cron/weekly-student-reports/route.ts)), and a send-succeeded-but-ledger-failed outcome is counted separately as `unrecorded` so the duplicate risk on the next run is visible rather than hidden. Its audience filter is `PrivacySettings.marketingEnabled = true`, which defaults to `false` for everyone ([`prisma/schema.prisma:490`](../../prisma/schema.prisma)), so the realistic candidate count is small. Streaks are suppressed entirely for under-18s under Children's Code guidance on detrimental use.

---

## `blog-generate`

[`src/app/api/cron/blog-generate/route.ts`](../../src/app/api/cron/blog-generate/route.ts) runs every 12 hours, picks the first `pending` topic from `content/blog/_queue.json`, generates an MDX post with Anthropic, runs the same quality checks as `scripts/check-blog-quality.mjs` in-process, and - on a pass - creates a branch, commits the post and the updated queue, and opens a PR. It never writes to `main`. That gating is deliberate: an ungated high-frequency generator produces thin near-duplicate posts that Google's scaled-content-abuse systems penalise.

**The queue is read from the deployed bundle, which is immutable.** `tryWriteQueueLocally` ([route.ts:454](../../src/app/api/cron/blog-generate/route.ts)) catches and ignores the read-only filesystem error, and the comment is explicit that the durable queue change rides in the PR. So the queue state only advances when the PR is merged and the app redeploys. Until then the same topic is selected again 12 hours later. The slug guard checks `content/blog/<slug>.mdx` on disk, which is still absent pre-merge, so generation reruns; branch creation tolerates a 422, but the `PUT /contents` for a file that already exists on the branch has no `sha` and should fail, and that failure `throw`s ([route.ts:417](../../src/app/api/cron/blog-generate/route.ts)). **Expect this cron to 500 every 12 hours while an auto-blog PR sits unmerged.** I have inferred this from the code rather than observed it; check the Sentry `cron: blog-generate` tag to confirm.

Missing env vars produce a thrown error and a 500 rather than a crash at import time. A queue with no pending topics returns 200 and does nothing.

---

## The AuditLog, and how to prove what actually ran

`AuditLog` ([`prisma/schema.prisma:467`](../../prisma/schema.prisma)) is the only durable record that scheduled work happened. There is no `@@map`, so the Postgres table is `"AuditLog"`, case-sensitive and quoted.

| Column       | Meaning for cron rows                                                          |
| ------------ | ------------------------------------------------------------------------------ |
| `userId`     | Always `null` for automated actions, so the FK survives the subject's deletion |
| `action`     | The event name, see the list below                                             |
| `resource`   | `'DataRetention'` or `'ChildDormancy'` for scheduled work                      |
| `resourceId` | The affected `User.id`, or the literal `'system'` for cycle summaries          |
| `details`    | JSON; always carries `automated: true` and `timestamp`                         |
| `ipAddress`  | The literal string `'system'`                                                  |

Twenty-one files call `prisma.auditLog.create`. The ones written by scheduled work are:

| `action`                               | Written by                                                                |
| -------------------------------------- | ------------------------------------------------------------------------- |
| `DATA_RETENTION_CLEANUP_COMPLETED`     | `cleanupExpiredData`, end of every daily run                              |
| `INACTIVE_ACCOUNT_WARNING_SENT`        | `cleanupExpiredData` step 3b                                              |
| `INACTIVE_ACCOUNT_SOFT_DELETED`        | `cleanupExpiredData` step 3a                                              |
| `FREE_ALLOWANCE_COUNTERS_PURGED`       | `cleanupExpiredData` step 4b, only when count > 0                         |
| `MARKETING_CONSENT_RECORDS_PURGED`     | `cleanupExpiredData` step 6, only when count > 0                          |
| `USER_HARD_DELETED`                    | inside the `hardDeleteUser` transaction                                   |
| `USER_SUPABASE_IDENTITY_NOT_FOUND`     | `hardDeleteUser`, when no `auth.users` row matched                        |
| `USER_SUPABASE_ERASURE_FAILED`         | `hardDeleteUser`, Supabase erasure threw                                  |
| `DORMANCY_CHECK_COMPLETED`             | `dormancy-check`, end of every run                                        |
| `ADULT_DORMANCY_WARNING_SENT`          | `dormancy-check` adult pass, per user                                     |
| `CHILD_DORMANCY_CYCLE_COMPLETED`       | `processChildDormancy` - fires **twice daily**, from both 03:30 and 04:00 |
| `CHILD_DORMANCY_WARNING_SENT`          | `sendDormancyWarning`, per child                                          |
| `CHILD_DORMANCY_ACCOUNT_DELETED`       | `deleteDormantChild`, per child                                           |
| `CHILD_DORMANCY_ACCOUNT_PURGED`        | `purgeDormantAccount`, inside its transaction                             |
| `CHILD_DORMANCY_PURGE_CYCLE_COMPLETED` | `dormancy-purge`, end of every weekly run                                 |

Only the deletion and dormancy jobs write audit rows. **`trial-expiry`, `trial-ending`, both affiliate crons, `expire-invites`, `school-access`, all three Trustpilot crons, both weekly reports and `blog-generate` write nothing to `AuditLog`.** For those, the only evidence a run happened is the `[cron:<name>] ok` line in Vercel function logs, the Sentry breadcrumb, and whatever state the job changed.

### Using it

There is no admin UI over `AuditLog`: nothing under [`src/app/admin/`](../../src/app/admin) reads it, and the only `auditLog.findMany` in the whole of `src/app` is in `GET /api/dsar` ([`route.ts:352`](../../src/app/api/dsar/route.ts)), which reads back a single subject's unlinked `DSAR_CREATED_UNLINKED` rows. For everything else you query the database directly.

- **Did the daily retention cycle run?** One `DATA_RETENTION_CLEANUP_COMPLETED` row per day. A gap is a missed or failed run. `details.summary` carries the counts.
- **Did the weekly purge run?** One `CHILD_DORMANCY_PURGE_CYCLE_COMPLETED` per Sunday, with `details.candidates`, `details.purged` and `details.errors`.
- **Two `CHILD_DORMANCY_CYCLE_COMPLETED` rows a day is correct, not a bug.** `processChildDormancy` is invoked by both `dormancy-check` and `cleanupExpiredData`.
- **What happened to this person?** Filter on `resourceId = '<User.id>'` and `resource IN ('DataRetention','ChildDormancy')`. The `@@index([resource, resourceId])` covers it. `USER_HARD_DELETED` is your proof of erasure; `USER_SUPABASE_ERASURE_FAILED` is your proof that erasure is unfinished and needs a manual sweep of `auth.users`.
- **Absence proves nothing about a warning.** `sendDormancyWarning` audits after the email send and the status update; if the process dies between the update and the audit, the account is marked warned with no row saying so.

Before trusting any query against these tables, remember the baselining problem: [`scripts/apply-migrations.mjs`](../../scripts/apply-migrations.mjs) records migrations before `BASELINE_CUTOFF` as applied **without executing them**, so `_migrations_applied` records an intention and `information_schema` records reality. Run [`scripts/check-schema-drift.mjs`](../../scripts/check-schema-drift.mjs) before you conclude a column is missing or present. Note its limit: it parses `supabase/migrations/` only. The Prisma-owned tables in this chapter - `AuditLog`, `User`, `Consent`, `RenewalReminder`, `WeeklyReport`, `WeeklyStudentDigest`, `FreeAllowanceUsage` - come from `prisma/migrations/` and are outside its coverage entirely.

---

## What I could not determine

- Whether Vercel Cron retries a 500 on this account's plan. Several routes are written as if it does.
- Whether the route-segment `maxDuration` (300/120) or the `vercel.json` value (60) wins for the three Trustpilot routes.
- Whether the `trustpilot_invite.user_id` cuid/uuid mismatch actually errors in production, or whether the deployed column differs from the migration. The migration says `uuid`; verify against `information_schema`.
- Whether `trustpilot-retention-90d` has ever matched a candidate, given its `paymentCount >= 1` filter and the RevenueCat-only nature of that counter.
- The real current value of `coverage.unprojectedAccounts`. The 8-of-200 figure is from the 17 September 2026 audit comment in `coverage.ts`, not from a reading I took.
