# Control status: API rate limiting

**Status: NOT ENFORCED in production.**
**Date of this statement: 17 September 2026.**
**Owner: Founder (environment configuration) and Engineering (code).**
**Canonical source. Every other compliance document must cite this file rather than restate the control.**

---

## 1. The statement

The English Hub applies a rate limit in code on 208 call sites across 165 files
(164 API route handlers and `src/lib/parental-consent.ts`). None of those limits
is enforced in production today.

`src/lib/rate-limit.ts` is written against Upstash Redis, which is the only
backend that can hold a count shared by every serverless instance.
`UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are not set in the
production environment. The limiter therefore falls back to a `Map` held inside
a single serverless instance.

On Vercel that fallback is not a limit:

- each concurrent instance keeps its own counter, so parallel requests are
  spread across instances and no instance sees the whole traffic;
- instances are created and recycled with load, and a new instance starts the
  count at zero;
- the counter does not survive a cold start.

The effective global limit is "the configured limit, multiplied by however many
instances happen to be warm, reset whenever they recycle". A 429 from this code
today means one caller happened to reuse one warm instance. The absence of a 429
means nothing at all.

## 2. Evidence

| Evidence | Where |
|---|---|
| The limiter and its documented fallback | `src/lib/rate-limit.ts` |
| Production state reported at runtime | `getRateLimitHealth()` in the same file: `status: 'degraded'`, `enforcement: 'per-instance-only'` |
| Startup banner and Sentry error raised whenever the control is not enforced | `src/lib/rate-limit.ts`, `markDegraded()` / `reportToSentry()` |
| Tests covering the degraded contract | `src/__tests__/rate-limit.test.ts` |
| The variables that are missing | `business-docs/ENV-VAR-INVENTORY.md`, rows `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` |

## 3. What is affected, and what is not

**Affected (the limit does not hold):** every route that calls `rateLimit()`.
The exposures that have no other brake in this codebase are:

- `/api/auth/resend-verification`. The 3 per IP per hour and 5 per email per day
  limits are not enforced. Whatever the email provider applies at its own edge is
  not evidenced here and must not be claimed as our control.
- Unauthenticated writes: `/api/contact` and `/api/school-inquiry` (both send
  outbound email), `/api/waitlist`, `/api/creator-apply`, `/api/teacher-signup`,
  `/api/auth/validate-age`, `/api/promo/validate`, `/api/board`, `/api/breach`,
  `/api/affiliate/track-click`, `/api/affiliate/track-conversion`.

**Not affected (these controls are real and independent of Redis):**

- The free and trial allowance meters in `src/lib/usage/**`. These are backed by
  Postgres, so they are shared across instances and durable. They are the only
  quantitative cap on AI spend that currently holds.
- The Premium subscription gate on the AI marking routes.
- Authentication and authorisation on the admin, school, marker and account
  surfaces. For those routes the rate limit was only ever defence in depth.
- The durable guardian-consent throttle in `src/lib/parental-consent.ts`
  (`last_sent_at` cooldown and `send_count` lifetime cap, both in Postgres).
  That database backstop, not the rate limit, is what prevents a guardian's
  inbox being used as a relay.

## 4. What may and may not be said

| May be said | May not be said |
|---|---|
| "Rate limiting is implemented in code on substantially all API routes." | "API requests are rate limited." |
| "The control is not enforced in production pending Redis configuration." | "Redis-backed sliding window." (There is no Redis.) |
| "AI usage is capped per account by a database-backed allowance meter." | "10 essays per day per user is enforced." |
| "Guardian consent emails are throttled by a durable database cooldown and lifetime cap." | "Guardian consent emails are rate limited per IP." |
| "Rate-limit keys are derived from IP addresses and user ids and held in process memory." | "Rate-limit counters are stored in Upstash Redis." |

## 5. Remediation

This is an environment change, not a code change.

1. Create an Upstash Redis database in the region closest to the Vercel
   production deployment.
2. In the Vercel project, set `UPSTASH_REDIS_REST_URL` and
   `UPSTASH_REDIS_REST_TOKEN` for the Production environment (and Preview, so
   that staging behaves like production).
3. Redeploy.
4. Verify. `getRateLimitHealth()` must return `status: 'ok'` and
   `enforcement: 'cross-instance'`, and the Sentry issue
   "Rate limiting is not enforced (Redis unavailable)" must stop recurring.
5. Set `RATE_LIMIT_REQUIRE_REDIS=true` once step 4 passes. From then on any
   environment that loses the credentials fails at startup instead of quietly
   serving traffic with a control that does not work. The flag is off by
   default so that it cannot take production down before it has been proved.
6. Update this file, and only then the documents listed in section 7.

Until step 4 is verified, no document may claim an enforced rate limit.

## 6. Residual gap after remediation

Configuring Redis fixes enforcement. It does not by itself give an operator a
dashboard. The limiter exposes `getRateLimitHealth()` for that purpose; wiring
it into `/api/health` is a one-line change owned by whoever next edits that
route, and is recommended.

The in-memory fallback is bounded at 20,000 keys so that it cannot exhaust
instance memory. That bound is itself a bypass, because a caller who sprays
enough distinct keys evicts their own counter. Evictions are counted and
reported in the health payload. This is acceptable only while the fallback is
not being relied on as a security control.

## 7. Documents corrected against this statement on 17 September 2026

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
- `business-docs/ENV-VAR-INVENTORY.md` (Upstash rows escalated to red, `RATE_LIMIT_REQUIRE_REDIS` documented)
- `DEPLOYMENT.md` (the go-live check now verifies configuration and health, not a 429 from one client)
- `api-rate-limit-audit.md` (marked as a coverage map, not evidence of enforcement)
