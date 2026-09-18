# Control status: API rate limiting

**Status: NOT YET ENFORCED in production. The code that enforces it is written and
tested; it is not deployed, and the migration that creates its table has not been
applied. This document becomes a statement of enforcement only when section 6 has
been carried out against production and the result recorded here.**
**Date of this statement: 18 September 2026.**
**Does NOT yet supersede the statement of 17 September 2026. That statement - that
this control is not enforced - remains the true one until section 6 is signed off,
and every compliance document repeating it is correct in the meantime.**
**Owner: Engineering (code and database), Founder (optional Upstash configuration).**
**Canonical source. Every other compliance document must cite this file rather than restate the control.**

---

## 1. The statement

The English Hub applies a rate limit in code on 208 call sites across 165 files
(164 API route handlers and `src/lib/parental-consent.ts`). On the 18 September
2026 change those limits *become* enforceable across every serverless instance,
because the limiter gains a shared Postgres backend that does not depend on the
Upstash environment variables.

**Two things must both be true in production before that is a fact rather than a
plan**, and neither is true as this is written:

1. the change is deployed; and
2. `supabase/migrations/20260918_rate_limit_counter.sql` has been applied, so the
   `rate_limit_counter` table exists.

Order matters. `databaseStatus()` proves only that `DATABASE_URL` and a key salt
are present; it cannot prove the table exists. If the code ships before the
migration lands, every limited request issues a failing insert and fails open,
and the control is exactly as absent as it was on 17 September. That is why
`getRateLimitHealth()` reports `enforcement: 'unproven'` until a decision has
actually come back enforced, and why `describeRateLimitHealth()` says
`NOT PROVEN` rather than "enforced with a recent fault" in that window. Read
that line, not this document, to find out what is true right now.

`src/lib/rate-limit.ts` now tries three backends in order:

| Order | Backend | Enforced across instances? | Cost |
|---|---|---|---|
| 1 | Upstash Redis, sliding window | Yes | None to us. Not configured today. |
| 2 | Postgres, `rate_limit_counter`, fixed window | Yes | One row write per limited request. |
| 3 | Process-local `Map` | **No** | None. Local development only. |

`UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are still not set, so
production will run on backend 2. That is a working control, not a degraded one:
Postgres is shared by every instance, so the count is not lost when an instance
recycles, and a caller spread across instances is counted once.

### What changed, and why it was worth changing

Before this change the only shared backend was Redis, and the fallback was a
`Map` inside one serverless instance. On Vercel that fallback was not a limit:
each concurrent instance kept its own counter, instances were created and
recycled with load, and a cold start began at zero. The effective global limit
was "the configured limit, multiplied by however many instances happen to be
warm, reset whenever they recycle".

Closing that gap was recorded as an environment change that only the founder
could make. It was left open for as long as that took. It is now closed in code,
using the database the application already depends on, so the control no longer
waits on anyone. Configuring Upstash remains worthwhile - it removes a database
write per limited request and restores the sliding window - but it is now an
optimisation, not a remediation.

## 2. Evidence

| Evidence | Where |
|---|---|
| The limiter, its backend order and its documented trade-offs | `src/lib/rate-limit.ts` |
| The shared counter table, its index design and its privacy note | `supabase/migrations/20260918_rate_limit_counter.sql` |
| Production state reported at runtime | `getRateLimitHealth()`: `backend: 'postgres'`, `enforcement: 'cross-instance'`, `databaseStatus: 'ready'` |
| Banner and Sentry error raised if no shared backend is available | `markDegraded()` / `reportToSentry()` in the same file |
| Tests: cross-instance persistence, single-statement increment, fail open, salted key | `src/__tests__/rate-limit.test.ts` |
| The variables that remain unset (now an optimisation, not a gap) | `business-docs/ENV-VAR-INVENTORY.md`, rows `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` |

## 3. Design decisions a reader must know about

These are deliberate. None of them is a defect, and each is stated here so that
nobody has to discover it during an incident or an audit.

**It is a fixed window, not a sliding one.** A sliding window in Postgres needs
either one row per request or a second read per decision. For a window measured
in seconds or minutes, neither cost is worth the accuracy. The consequence is
the standard fixed-window boundary: a caller can send `limit` requests at the end
of one window and `limit` more at the start of the next, so a burst of up to
twice the limit is possible once. Sustained abuse, which is what the control
exists to stop, is still capped at the configured rate.

**It fails OPEN on a database error.** If the increment throws, the request is
allowed, the result is labelled `enforced: false` with
`degradedReason: 'database-error'`, and the fault is counted and announced. This
is an abuse control, not an authorisation control. A limiter that refused
everyone during a database blip would turn a brief fault into a total outage for
every learner on the site. The controls that must not fail open are elsewhere and
are unaffected: authentication, authorisation, subscription and consent gates all
refuse on error, and the allowance meter in `src/lib/usage/free-allowance.ts`
fails closed because it guards spend. The two compose: if Postgres is down, the
limiter lets the request through and the allowance meter then refuses it, so the
route returns 503 and no model call is made.

**No raw IP address is written.** Rate-limit keys routinely contain a client IP.
The stored `bucket_key` is the sha256 digest of
`salt : limit : windowSeconds : key`; the raw key never leaves the request scope.
The salt is secret (`RATE_LIMIT_KEY_SALT`, `IP_HASH_SALT`, or derived from
`CRON_SECRET`), because with a known salt the whole IPv4 space could be hashed in
minutes and the digest would be reversible, so it would remain personal data
under UK GDPR. If no secret salt is available in production the database backend
declares itself unavailable and the limiter falls to the loud in-memory state
rather than writing a guessable key.

**Retention.** A row holds one counter and nothing else - no user id, no route,
no user agent. Rows are deleted an hour after their window ends, by an
opportunistic sweep in the application. The table is not in scope for the
data-retention cron and holds nothing a DSAR could match, because a person's row
cannot be found without their raw key.

## 4. What is affected, and what is not

**Now genuinely protected.** Every route that calls `rateLimit()`. The two groups
that previously had no other brake at all are the ones that gain:

- `/api/auth/resend-verification`. The 3 per IP per hour and 5 per email per day
  limits are now enforced. Note that this is our control; whatever the email
  provider applies at its own edge is still not evidenced here and must not be
  claimed.
- Unauthenticated writes: `/api/contact` and `/api/school-inquiry` (both send
  outbound email), `/api/waitlist`, `/api/creator-apply`, `/api/teacher-signup`,
  `/api/auth/validate-age`, `/api/promo/validate`, `/api/board`, `/api/breach`,
  `/api/affiliate/track-click`, `/api/affiliate/track-conversion`.

**Independent controls, unchanged by this work.** These never depended on the
rate limiter and still do not:

- The free and trial allowance meters in `src/lib/usage/**`. Postgres backed,
  shared, durable, and fail-closed. They remain the quantitative cap on AI spend.
- The Premium subscription gate on the AI marking routes.
- Authentication and authorisation on the admin, school, marker and account
  surfaces. For those routes the rate limit was, and remains, defence in depth -
  the difference is that it is now real defence in depth.
- The durable guardian-consent throttle in `src/lib/parental-consent.ts`
  (`last_sent_at` cooldown and `send_count` lifetime cap, both in Postgres). That
  backstop, not the rate limit, is what prevents a guardian's inbox being used as
  a relay.

## 5. What may and may not be said

| May be said | May not be said |
|---|---|
| "API requests are rate limited, enforced across all instances by a shared Postgres counter." | "Redis-backed sliding window." (There is no Redis in production.) |
| "Rate limiting uses a fixed window; a burst of up to twice the limit is possible across a window boundary." | "Requests are limited to exactly N per window at all times." |
| "The limiter fails open on a database error, by design, because it is an abuse control." | "Rate limiting is enforced under all conditions." |
| "Rate-limit counters are keyed by a salted sha256 digest; no raw IP address is stored." | "Rate-limit counters are stored against IP addresses." |
| "AI usage is capped per account by a database-backed allowance meter." | "The AI marking limit is enforced by the rate limiter." (It is enforced by the allowance meter; the rate limit is a second layer.) |
| "Guardian consent emails are throttled by a durable database cooldown and lifetime cap, and rate limited per IP." | "Guardian consent emails are protected by rate limiting alone." |

## 6. Verification

Anyone can confirm the live state without reading logs:

1. `getRateLimitHealth()` must return `enforcement: 'cross-instance'`,
   `backend: 'postgres'` (or `'redis'` once Upstash is configured),
   `databaseStatus: 'ready'` and `status: 'ok'`.
2. `describeRateLimitHealth()` must return a line beginning
   "Rate limiting: enforced across instances".
3. The Sentry issue "Rate limiting is not enforced (no shared backend)" must not
   recur. If it does, the database backend has become unavailable and this
   document is no longer true.
4. `failOpenDecisions` in the health payload counts requests let through by a
   database fault. A rising number is a database problem, not a limiter problem.

Wiring `getRateLimitHealth()` into `/api/health` is a one-line change, owned by
whoever next edits that route, and is recommended so the state is visible without
a deploy.

## 7. Optional improvement: configure Upstash

Not remediation. The control works without it. It is worth doing because it
removes one database write per limited request and restores the sliding window.

1. Create an Upstash Redis database in the region closest to the Vercel
   production deployment.
2. Set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` for Production
   (and Preview, so staging behaves like production).
3. Redeploy. `getRateLimitHealth().backend` becomes `'redis'`. The Postgres path
   is then never touched, and `rate_limit_counter` drains itself within an hour.
4. Only after step 3 is verified, `RATE_LIMIT_REQUIRE_REDIS=true` makes a
   deployment without the Upstash credentials fail at startup. It is off by
   default and should stay off unless Redis is being treated as mandatory,
   because Postgres alone is a sufficient backend.

`RATE_LIMIT_DB_BACKEND=off` disables the Postgres backend, for a local run that
should not write to the database. It must never be set in production: it would
return the control to the per-instance `Map` and make this document false.

## 8. Residual risks

- **Fixed-window boundary burst**, as described in section 3. Accepted.
- **Fail open during a database outage.** Accepted, and bounded: the allowance
  meter fails closed on the same outage, so AI spend stays capped.
- **The in-memory fallback is still present** for local development, bounded at
  20,000 keys. That bound is itself a bypass, because a caller who sprays enough
  distinct keys evicts their own counter. It is acceptable only because the
  fallback is never a production backend, and any decision it makes is labelled
  `enforced: false` and counted in the health payload.
- **A clock skew between instances** shifts a window boundary by the size of the
  skew. Vercel instance clocks agree to within milliseconds, against windows
  measured in seconds.

## 9. Document history

- **18 September 2026.** Rewritten after the Postgres backend was written and
  tested. The control moves from "not enforced, pending a Vercel environment
  change" to "not enforced, pending a deploy and a migration" - a change of
  blocker, not a change of status.

  **The documents listed below are therefore still correct and must not be
  edited yet.** An earlier draft of this section said they were now out of date;
  that was wrong, and it was wrong in the dangerous direction - it would have
  had eighteen compliance documents claiming an enforced control on the strength
  of code sitting in a working tree. They are re-checked only after section 6
  has been carried out against production and the status line at the top of this
  file has been changed to match.
- **17 September 2026.** First statement. Recorded the control as NOT ENFORCED
  and corrected these documents accordingly:
  - `business-docs/compliance/eu-ai-act/04-technical-documentation-annex-iv.md`
  - `business-docs/compliance/eu-ai-act/05-data-governance-art10.md`
  - `business-docs/compliance/eu-ai-act/06-accuracy-robustness-cybersecurity-art15.md`
  - `business-docs/compliance/eu-ai-act/15-dpia-reconciled.md`
  - `business-docs/compliance/cyber-essentials/02-policies/secure-configuration-policy.md`
  - `business-docs/compliance/cyber-essentials/02-policies/firewall-configuration-policy.md`
  - `business-docs/compliance/childrens-code/02-policies/data-minimisation-for-children.md`
  - `business-docs/compliance/childrens-code/02-policies/default-privacy-settings.md`
  - `business-docs/compliance/rfc/ropa-v1.md`
  - `data-room/03-privacy/legitimate-interest-assessments.md`
  - `dd-07-compliance.md`
  - `dd-02-technical.md`
  - `business-docs/SAFETY_AND_COMPLIANCE_NOTE_AUTH.md`
  - `business-docs/compliance/eu-ai-act/03-quality-management-system-art17.md`
  - `business-docs/compliance/eu-ai-act/11-post-market-monitoring-plan-art72.md`
  - `business-docs/ENV-VAR-INVENTORY.md`
  - `DEPLOYMENT.md`
  - `api-rate-limit-audit.md`

  Those files are owned by other work and are not edited by this change. Until
  each is re-checked, this file is the canonical statement and overrides them.
