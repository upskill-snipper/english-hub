# The API surface

Everything a browser, the native app, Stripe, RevenueCat or Vercel Cron can reach lives under [`src/app/api`](../../src/app/api): 199 `route.ts` files at the time of writing. This chapter is a map of that surface by purpose, plus the conventions every route is supposed to share and the places where they do not. Read it before adding a route, because three of those conventions (the CSRF gate, the response envelope, the rate-limit call) are easy to break silently, and one hazard recurs throughout: a handler that looks live, compiles, returns 200, and reads a database object that no migration in this repo creates.

The single most important structural fact: **authentication is by Supabase session cookie, and nothing else**. No route outside `/api/cron/**` and `/api/health/ai` reads an `Authorization` header - stated in [`src/lib/security/csrf-origin.ts:11-14`](../../src/lib/security/csrf-origin.ts) and confirmed by grep across all 199 files.

---

## 1. Shape of the surface

| Prefix                                                             |   Routes | What it is                                                               |
| ------------------------------------------------------------------ | -------: | ------------------------------------------------------------------------ |
| `school/**`                                                        |       47 | B2B: classes, members, invites, assignments, imports, exports, analytics |
| `admin/**`                                                         |       29 | Site-admin console, mostly the human-marker marketplace                  |
| `cron/**`                                                          |       15 | Vercel-scheduled jobs (see chapter 09)                                   |
| `marker/**`                                                        |        7 | The paid human marker's own console                                      |
| `progress/**`, `marking/**`, `ielts/**`, `auth/**`, `affiliate/**` |   6 each |                                                                          |
| `stripe/**`, `privacy/**`, `parent/**`                             |   4 each |                                                                          |
| everything else                                                    | 1-3 each | 37 further prefixes                                                      |

Group boundaries in this chapter are by purpose, not by path prefix, because the paths do not group cleanly. `/api/essay-feedback` and `/api/essay/feedback` are different routes with different callers. `/api/teacher-signup` and `/api/auth/teacher-signup` do unrelated things. `/api/affiliate/*` and `/api/affiliates/*` are two separate commercial programmes.

---

## 2. Shared conventions

### 2.1 Authentication: six mechanisms, one of them not authentication

| Mechanism         | Helper                                                                                                                    | Proves                                                    | Roughly                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| Session cookie    | `createServerSupabaseClient()` then `supabase.auth.getUser()` ([`server.ts:17`](../../src/lib/supabase/server.ts))        | a signed-in Supabase user                                 | 124 routes                                 |
| Site admin        | `verifyAdmin()` ([`admin-auth.ts:8`](../../src/lib/admin-auth.ts))                                                        | session **and** email in `ADMIN_EMAILS` or `isSiteAdmin`  | 29 routes                                  |
| School member     | `verifySchoolMember(userId, roles?)` ([`school-auth.ts:11`](../../src/lib/school-auth.ts))                                | accepted `school_members` row, optionally of a given role | 41 routes                                  |
| Marker            | `requireMarker()` ([`marker-auth.ts:92`](../../src/lib/marker-auth.ts))                                                   | session **and** an `active` row in `markers`              | 4 routes                                   |
| Cron secret       | `authoriseCronRequest()` ([`cron/auth.ts`](../../src/lib/cron/auth.ts)), or hand-rolled                                   | possession of `CRON_SECRET`                               | 15 cron routes + `push/send` + `health/ai` |
| Webhook signature | `stripe.webhooks.constructEvent`, `verifyWebhookSignature` ([`revenuecat/verify.ts`](../../src/lib/revenuecat/verify.ts)) | the third party sent it                                   | 2 routes                                   |

`createServiceRoleClient()` ([`server.ts:52`](../../src/lib/supabase/server.ts)) is **not** in that list and must never be read as authentication. It is the RLS bypass, used by 108 routes to read across users after some other gate has already run. A route that calls it with no preceding gate is a data leak, so when reviewing a diff, find `createServiceRoleClient` and ask what ran before it.

Two traps in the gates themselves:

- `verifySchoolMember` silently grants a **synthetic school membership** to any site admin, for a fictional school id `__site_admin__` ([`school-auth.ts:52-75`](../../src/lib/school-auth.ts)). It bypasses membership, role restriction and school scope in one step. Any school route that trusts `member.school_id` therefore queries a school that does not exist when the caller is an admin.
- `verifyAdmin` reads `ADMIN_EMAILS` from the environment, defaulting to `admin@theenglishhub.app`. Admin authority is an env var, not a database role.

### 2.2 The CSRF gate runs before every handler

[`src/middleware.ts:517`](../../src/middleware.ts) calls `evaluateCsrfAttestation` ([`csrf-origin.ts:159`](../../src/lib/security/csrf-origin.ts)) on every request. For any non-GET, non-HEAD request to `/api/**` that is not exempt, an `Origin` header is **mandatory** and must be in `ALLOWED_ORIGINS` ([`csrf-origin.ts:98`](../../src/lib/security/csrf-origin.ts)); `Sec-Fetch-Site: cross-site` is refused even with an allow-listed origin. The refusal is a 403 emitted by the middleware, so your handler never runs and never logs.

Exempt prefixes ([`csrf-origin.ts:120`](../../src/lib/security/csrf-origin.ts)) are exactly four: `/api/stripe/webhook`, `/api/revenuecat/webhook`, `/api/cron/`, `/api/push/send`. The reasoning is sound and worth preserving: each authenticates with a secret that is not in any browser, so ambient cookie authority cannot reach them.

The consequence nobody has written down: **a non-browser client that does not set `Origin` cannot make any mutating call outside those four paths.** That matters for the mobile app (section 4).

### 2.3 Two response envelopes, and 158 routes that use neither

[`src/lib/api-response.ts`](../../src/lib/api-response.ts) is the intended convention. It is imported by 32 of 199 routes. Its shape is `{ error: string, ...details }` with the status on the response.

| Helper                                                    | Status | Notes                                                                                 |
| --------------------------------------------------------- | -----: | ------------------------------------------------------------------------------------- |
| `successResponse(data)`                                   |    200 | thin wrapper over `NextResponse.json`                                                 |
| `badRequestResponse`                                      |    400 |                                                                                       |
| `unauthorizedResponse`                                    |    401 |                                                                                       |
| `allowanceExhaustedResponse`                              |    402 | carries `code: 'free_allowance_exhausted'`, `used`, `limit`, `resetsAt`, `upgradeUrl` |
| `forbiddenResponse(msg, details)`                         |    403 | `details` exists so a refusal can carry a machine-readable `code`                     |
| `notFoundResponse`                                        |    404 |                                                                                       |
| `unsupportedMediaTypeResponse` / `requireJsonContentType` |    415 |                                                                                       |
| `rateLimitResponse(resetAt)`                              |    429 | sets `Retry-After`                                                                    |
| `serverErrorResponse`                                     |    500 |                                                                                       |
| `serviceUnavailableResponse`                              |    503 | what the AI routes return when the model provider fails                               |

The 402 choice is deliberate and argued at [`api-response.ts:56-71`](../../src/lib/api-response.ts): 403 already means four different things across the AI routes, and 429 would make a converting learner look like an attacker on the dashboards. **Clients switch on `code`, never on the status.**

A second envelope exists for the nine routes written to the mobile spec: `{ ok: true, data }` on success and `{ ok: false, error: { code, message } }` on failure, defined as local `ok()` / `fail()` helpers in each file (for example [`me/route.ts:31-42`](../../src/app/api/me/route.ts)). Those nine also export a local `methodNotAllowed` for every verb they do not implement, so an unsupported method returns 405 with `Allow` rather than Next's default. They are `me`, `me/entitlements`, `me/usage`, `flags`, `mobile/devices`, `mobile/devices/[id]`, `revenuecat/webhook`, `revenuecat/reconcile-self` and `admin/free-allowance`. There is no overlap with the `api-response.ts` set.

The remaining ~158 routes hand-roll `NextResponse.json({ error: '...' }, { status })`. When you touch one, adopt `api-response.ts` rather than adding a third dialect.

### 2.4 Consent refusal codes

[`src/lib/consent-codes.ts:20`](../../src/lib/consent-codes.ts) defines three stable codes. The module deliberately has **no imports** so the server gate and client components can share one source of truth.

| Constant                    | Wire value                       | Meaning                                                  | May the learner self-resolve?     |
| --------------------------- | -------------------------------- | -------------------------------------------------------- | --------------------------------- |
| `AI_PROCESSING_REQUIRED`    | `ai_processing_consent_required` | no active `AI_PROCESSING` consent on the ledger          | yes, at `/dashboard/consent`      |
| `PARENTAL_CONSENT_REQUIRED` | `parental_consent_required`      | a child whose guardian has not approved                  | **no** - never offer a self-grant |
| `DATE_OF_BIRTH_REQUIRED`    | `date_of_birth_required`         | no usable DOB, so age is unknown, and unknown age blocks | yes, add a DOB                    |

The values are part of the API contract: add codes, never rename them. Twelve routes propagate the code onto their 403 with the idiom `consentCheck.code ? { code: consentCheck.code } : undefined` - `mark`, `mark/stream`, `essay-feedback`, `essay/feedback`, `cefr-assess`, `submissions`, `toolkit/generate-notes`, `marking/ielts-writing-task2` and the four `ielts/*-feedback` routes. A 403 **without** a code from one of those routes means "not a subscriber" or "AI switched off for this account", not a consent problem.

### 2.5 The rate-limit call convention

```ts
const rl = await rateLimit(`mark:${user.id}`, { limit: 10, windowSeconds: 86_400 })
if (!rl.success) return rateLimitResponse(rl.resetAt)
```

164 route files import [`src/lib/rate-limit.ts`](../../src/lib/rate-limit.ts). Across `src`, there are 208 awaited `rateLimit(` calls in 165 files, counting `parental-consent.ts` and excluding the 48 in [`src/__tests__/rate-limit.test.ts`](../../src/__tests__/rate-limit.test.ts), which never run in a lambda. Conventions worth following:

- The key is `<route-slug>:<subject>`. Subject is `user.id` on authenticated routes and `getClientIp(request.headers)` on public ones. `getClientIp` ([`rate-limit.ts:914`](../../src/lib/rate-limit.ts)) prefers `x-real-ip` over the spoofable `x-forwarded-for`.
- Raw IPs are never stored. The Postgres backend keys on the sha256 of `salt:limit:window:key`, and refuses to use the database at all if no secret salt is available rather than writing a reversible digest.
- Backends are tried Redis, then Postgres, then a process-local `Map` ([`rate-limit.ts:815`](../../src/lib/rate-limit.ts)). Redis is not configured in production, so Postgres has been the live backend since 18 September 2026. Before that date every one of those 208 call sites was served by a per-lambda `Map`, which is not a limit.
- **`success: false` and `enforced: false` are different things.** A decision carrying `enforced: false` limited nobody, whatever `success` says. Read the field. The module fails **open** on a database error, deliberately: it is an abuse control, not an authorisation control, and the things that must fail closed (auth, entitlement, consent, `consumeAllowance`) run elsewhere.
- `/api/mark` and `/api/mark/stream` share the key namespace `mark:${user.id}`, so they share one bucket. Intentional, but easy to miss when tuning limits.

Representative limits: `contact` 3/hour/IP, `waitlist` 5/hour/IP, `resend-verification` 3/hour/IP **and** 5/day/email, `mark` and `essay-feedback` 10/day/user, `progress/sync` 10/hour/user, `me` 60/min/IP, `me/entitlements` 120/min/IP, `flags` 30/min/IP.

### 2.6 The free-allowance meters

Money-guarding caps live in [`src/lib/usage/`](../../src/lib/usage) and are separate from rate limiting. They fail **closed**: if Postgres is down, `consumeAllowance()` throws, the route returns 503, and no model call is made. Three meters exist ([`free-allowance.ts:67`](../../src/lib/usage/free-allowance.ts)): `ielts_diagnostic`, `trial_ai`, `trial_ai_daily`. Every limit resolves through app config, then env var, then a code fallback ([`limits.ts:47`](../../src/lib/usage/limits.ts)), because an env var change on Vercel needs a redeploy and a limit must be changeable without one.

Metered routes set `X-Free-Allowance-Limit`, `-Remaining` and `-Reset` on success via `applyAllowanceHeaders` ([`free-allowance.ts:497`](../../src/lib/usage/free-allowance.ts)), so the UI meter updates without a second request. `GET /api/me/usage` is the read-only peek that never consumes - if it ever starts consuming, the remaining-uses display would burn the allowance it is reporting.

**Refund discipline is load-bearing.** `enforceTrialAllowance` is called immediately before the first model call; `refundTrialAllowance(gate)` must be called on _every_ non-success exit - provider throw, timeout, content-filter rejection, unparseable response. `/api/mark` calls it at eight distinct exits ([`mark/route.ts`](../../src/app/api/mark/route.ts), lines 200-364). A missed refund silently eats a learner's trial allowance during a provider outage, with no signal to anyone.

---

## 3. The groups

### 3.1 Auth and registration

| Route                                | Auth                          | Notes                                                                                                                                                                                                        |
| ------------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `POST /api/auth/register`            | session required              | **Mobile contract.** Creates the Prisma `User` projection for a Supabase signup. Idempotent, and reads `supabaseUserId` from the verified session rather than the body, so it cannot be used to impersonate. |
| `POST /api/auth/teacher-signup`      | session required              | Same design, accepts only `role: 'TEACHER'`                                                                                                                                                                  |
| `POST /api/auth/record-login`        | session required              | Writes `lastLoginAt`, which the dormancy cron reads. Also an eager projection point for accounts with no Prisma row.                                                                                         |
| `POST /api/auth/validate-age`        | public                        | Pure DOB arithmetic, no persistence                                                                                                                                                                          |
| `POST /api/auth/resend-verification` | public                        | Outbound email with two limits and nothing else in front of it                                                                                                                                               |
| `GET                                 | POST /api/auth/parent-notify` | session required                                                                                                                                                                                             | Self-serve guardian consent email; writes `parental_consents` with `school_id` NULL |
| `POST /api/teacher-signup`           | public                        | **Unrelated to `auth/teacher-signup`.** A marketing lead form writing `teacher_referrals`.                                                                                                                   |

`auth/register`'s own header ([`auth/register/route.ts:35-40`](../../src/app/api/auth/register/route.ts)) carries a TODO saying the client pages must POST to it after signup. Chapter 05 covers why that call frequently does not land, which is the reason `record-login` also projects.

### 3.2 Account, privacy and DSAR: three overlapping surfaces

This is the worst duplication in the API and it has a live correctness defect.

| Route                                    | UI caller                                     | Behaviour                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------- |
| `DELETE /api/account/delete`             | `/account`, `/account/delete`                 | **The correct one.** Handles both account kinds: soft-delete plus a 30-day purge for Prisma-backed accounts, immediate verified erasure for Supabase-only accounts, returning `erasedAt` and no purge date.                                                                                                                |
| `POST /api/privacy/delete-account`       | `/dashboard/privacy`                          | **Broken for most accounts.** Looks up the Prisma row by `supabaseUserId` then by email and returns `404 User not found` when neither hits ([`route.ts:65`](../../src/app/api/privacy/delete-account/route.ts)). Most accounts have no Prisma row, so that is the common path, and nothing on the Supabase side is erased. |
| `POST /api/account/export`               | `/account/data-export`                        | Portability export                                                                                                                                                                                                                                                                                                         |
| `POST /api/privacy/export`               | `/dashboard/privacy`                          | Older parallel export                                                                                                                                                                                                                                                                                                      |
| `GET                                     | POST /api/dsar`, `GET /api/dsar/export`, `GET | PATCH /api/dsar/[id]`                                                                                                                                                                                                                                                                                                      | `/dashboard/data-requests`                     | The formal Art.15 request ledger |
| `DELETE /api/privacy/delete-essay`, `GET | PUT /api/privacy/settings`                    | `/dashboard/privacy`                                                                                                                                                                                                                                                                                                       | Single-essay erasure and the AI opt-out switch |

Do not consolidate blind. Establish which pages are still reachable, then retire the `privacy/*` deletion path in favour of `account/delete`.

### 3.3 Consent

`GET|POST|DELETE /api/consent` is the ledger: record, withdraw, list, validated against `CONSENT_TYPES` with Zod ([`consent/route.ts:19-28`](../../src/app/api/consent/route.ts)). `GET /api/consent/history` is the audit trail. `POST /api/consent/cookie` is a separate PECR record of the cookie-banner choice, keyed on an opaque client-generated visitor id and HMAC'd, so it works for signed-out visitors. The three differ in how they treat a missing session; read the handler rather than assuming.

### 3.4 Marking and AI

Every AI route follows the **same gate order**, and `/api/mark` is the reference implementation ([`mark/route.ts:70-193`](../../src/app/api/mark/route.ts)):

1. `requireJsonContentType` (415)
2. `supabase.auth.getUser()` (401)
3. `hasActiveSubscription` or `hasIeltsAccess` (403)
4. `checkMinorAIConsent` (403 **with `code`**)
5. `isAiOptedOutServer` (403, the Children's Code opt-out)
6. `rateLimit` (429)
7. `contentSafetyCheck` (400, prompt-injection and misuse pre-screen)
8. `enforceTrialAllowance` (402), immediately before the model call
9. model call, then `filterAIResponse`, `logAiDecision`, `applyAllowanceHeaders`

| Route                                     | Purpose                                                                                                                 | Gates                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------- |
| `POST /api/mark`                          | GCSE essay against a mark scheme, returns `MarkingResult`                                                               | full chain                                                                                                                                                                                                                                                                                                                                                                                                             |
| `POST /api/mark/stream`                   | SSE variant, `{"type":"token"                                                                                           | "done"                                                                                                                                                                                                                                                                                                                                                                                                                 | "error"}` frames | full chain, shares the `mark:` bucket. **Mobile contract.** |
| `POST /api/essay-feedback`                | free-text feedback, persists `Essay` + `AIFeedback` through Prisma                                                      | full chain                                                                                                                                                                                                                                                                                                                                                                                                             |
| `POST /api/essay/feedback`                | older feedback route, used only by `AITextArea.tsx`                                                                     | full chain, no persistence                                                                                                                                                                                                                                                                                                                                                                                             |
| `POST /api/cefr-assess`                   | EAL CEFR placement                                                                                                      | full chain                                                                                                                                                                                                                                                                                                                                                                                                             |
| `POST /api/marking/ielts-writing-task2`   | IELTS Task 2 through the marking spine                                                                                  | full chain                                                                                                                                                                                                                                                                                                                                                                                                             |
| `POST /api/submissions`                   | creates a `marking_submissions` row in `submitted`, does **not** run the AI                                             | gate order mirrors `/api/mark` exactly                                                                                                                                                                                                                                                                                                                                                                                 |
| `GET /api/submissions`                    | the signed-in student's own marking history, newest first, `?limit=1..50` (default 50)                                  | auth + rate limit only. **No subscription or consent gate** - it reads the user's own past work, and a lapsed subscriber must not lose sight of essays they already wrote. Reads through the REQUEST-SCOPED client so `marking_submissions_students_select` is the only thing that can widen the result. Never returns `essay_text`. Applies the same grade-visibility safeguard as `GET /api/marking/[submissionId]`. |
| `POST /api/marking/run`                   | runs the AI against an existing submission                                                                              | writes `ai_marked` or `teacher_review_required`, **never** `approved`                                                                                                                                                                                                                                                                                                                                                  |
| `GET /api/marking/[submissionId]`         | read one submission                                                                                                     | session plus scope                                                                                                                                                                                                                                                                                                                                                                                                     |
| `POST /api/marking/[submissionId]/review` | teacher moderation, `handleReview` at [`review/route.ts:325`](../../src/app/api/marking/[submissionId]/review/route.ts) |                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `POST .../approve`, `POST .../reject`     | thin wrappers delegating to `handleReview`                                                                              | they contain no logic and must not grow any                                                                                                                                                                                                                                                                                                                                                                            |

Submission and marking are separate steps on purpose: it keeps the latency-heavy model call off the submission path and lets a B2B submission be marked, then routed to a teacher, before any student sees a grade. `/api/essay-feedback` and `/api/essay/feedback` are both live with different callers; neither is dead, the duplication is historical.

### 3.5 IELTS

| Route                                | Gate                      | Note                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------ | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `POST /api/ielts/diagnostic-assess`  | **not** paywalled         | Top-of-funnel lead magnet, capped by the `ielts_diagnostic` meter (monthly per signed-in user, or per salted IP hash when signed out). Returns a band estimate and one line of justification only, deliberately withholding the per-criterion detail the paid routes give. The `rateLimit` call beside it is a burst guard, not the cap. |
| `POST /api/ielts/writing-feedback`   | `hasIeltsAccess`          | full chain                                                                                                                                                                                                                                                                                                                               |
| `POST /api/ielts/speaking-feedback`  | `hasIeltsAccess`          | transcript-based; pronunciation is an explicit proxy, not acoustic                                                                                                                                                                                                                                                                       |
| `POST /api/ielts/statement-feedback` | `hasIeltsAccess`          | UCAS 2026 three-question personal statement                                                                                                                                                                                                                                                                                              |
| `GET                                 | POST /api/ielts/attempts` | session                                                                                                                                                                                                                                                                                                                                  | GET distinguishes 401, 503 and genuinely-empty rather than answering `[]` to all three |
| `GET /api/ielts/centre/students`     | TEACHER role              | every read of `ielts_attempts` is try/caught and degrades to empty bands                                                                                                                                                                                                                                                                 |

IELTS entitlement is **standalone**: `profiles.ielts_status`, driven off whether a Stripe subscription carries an IELTS price, never off `subscription_status`. A GCSE plan must neither grant nor clear it.

### 3.6 School, teacher and parent

47 school routes, of which **38** gate on `verifySchoolMember` with a role list, plus the site-admin synthetic bypass from 2.1. The other nine do not, and the exceptions are deliberate rather than oversights: `consent`, `consent/details`, `invite/accept`, `contact`, `promo/validate` and `export/template` are public or token-addressed, so they must work for someone with no membership and often no account; `access` and `join` gate on the session alone, because both run before a membership row exists; and `register` is site-admin only via `verifyAdmin` ([`school/register/route.ts:109`](../../src/app/api/school/register/route.ts)). Establish which of the three a route is before copying its header into a new one. Sub-groups:

- **Membership and roster**: `classes`, `classes/[classId]`, `classes/[classId]/students`, `members`, `members/[id]`, `students`, `students/[studentId]`, `students/[studentId]/trends`, `roles`, `join`, `join-codes`, `join-codes/[code]`, `invite`, `invite/[token]`, `invite/accept`.
- **Bulk provisioning**: `import`, `import/[jobId]`, `bulk-upload/validate`, `bulk-upload/commit`, `bulk-upload/latest-status`. These mint temporary passwords that are emailed in plaintext and downloadable as CSV, which is why the middleware carries a forced password-rotation gate ([`supabase/middleware.ts:90+`](../../src/lib/supabase/middleware.ts)).
- **Analytics**: `analytics`, `analytics/class-performance`, `analytics/hardest-questions`, `analytics/student-insights`, `analytics/marking`, `analytics/department-overview`, `classes/[classId]/analytics`, `cefr`.
- **Marking**: `marking` (feed), `marking/override`.
- **Exports**: `export`, `export/logins`, `export/report`, `export/users`, `export/template` (public, static CSV headers).
- **Commercial and admin**: `register` (site-admin only), `settings`, `access`, `promo/validate`, `contact`, `consent`, `consent/details` (public and token-addressed, so a guardian with no account can read it), `interventions`, `reports/generate`, `overview`, `assignments`, `assignments/[id]`.

Parent surface: `parent/invite` and `parent/invite/validate` (the second is public and token-addressed), `parent/link`, `parent/delete-child-data`, `parent-reports`, `parent-reports/[id]`.

### 3.7 The human marker marketplace

`marker/**` is the marker's own console: `me`, `queue`, `board-access`, `apply`, `cv-upload`, `practice`, `practice/check`. Only **four** of the seven sit behind `requireMarker()` - `me`, `queue`, `practice` and `practice/check`. `apply`, `cv-upload` and `board-access` gate on `supabase.auth.getUser()` alone, which is right for `apply` and `cv-upload` (a candidate is by definition not yet an active marker) and worth a second look on `board-access`. Do not assume the prefix implies the gate. `getCurrentMarker`, the softer sibling of `requireMarker`, is used once more outside this tree, by `marking/[submissionId]/review`. The queue is scoped hard by `assigned_marker_id`, and `gold_expected` is deliberately excluded from the select so gold scripts are marked blind ([`marker/queue/route.ts:17-19`](../../src/app/api/marker/queue/route.ts)).

`admin/**` is the operator half: `markers`, `marker-assign`, `marker-batches`, `marker-batches/[batchId]/ingest`, `marker-batches/[batchId]/draft`, `marker-gold`, `marker-qa`, `marker-pay`, `marker-cv`, `marker-board-access`, plus `calibration/run`, `evals`, `model-performance`, `prompts`, `rubrics`, `pricing/backfill`, `stats`, `users`, `users/[id]`, `users/[id]/consents`, `verify-user`, `board-agreement`, `email-status`, `email-test`, `free-allowance`, `ielts-entitlement-check`, `affiliates`, `affiliates/approve`, `affiliates/payout`.

`GET /api/training/export?format=jsonl|csv|eval` streams the approved, anonymised `training_data` corpus as a download. Site-admin only; treat it as the most sensitive read in the product.

### 3.8 Affiliates: two programmes on two paths

The most confusing part of the API, and the naming gives no clue.

| Path                                                    | Programme                                                                  | Tables                                                             |
| ------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `POST /api/affiliates/apply`                            | **Legacy**, Rewardful-era, reviewed applications                           | `affiliates`                                                       |
| `POST /api/affiliates/enrol`                            | Self-serve instant approve, `status='active'`, `tier='bronze'`, idempotent | `affiliate_accounts`                                               |
| `POST /api/affiliate/signup`                            | Percentage-tier programme, `status='pending'` for manual review            | `affiliate_accounts`                                               |
| `/api/affiliate/settings`, `/generate-link`, `/payouts` | Affiliate self-service                                                     | `affiliate_accounts`, `affiliate_links`, `affiliate_payouts`       |
| `/api/affiliate/track-click`, `/track-conversion`       | Public, unauthenticated tracking                                           | `affiliate_clicks`, `affiliate_conversions`, `affiliate_referrals` |
| `/api/cron/affiliate-confirm`, `/affiliate-confirm-v2`  | Two confirmation crons, both scheduled                                     |                                                                    |

So two enrolment paths write the _same_ `affiliate_accounts` table with _different_ default statuses, `active` versus `pending`, and a third writes a different table entirely. `affiliate/signup`'s header points at `supabase/migrations-pending/002_affiliates.sql` - the **pending** directory, not the applied one. Before touching any of this, verify against `information_schema` which tables exist and which enrolment route the live signup page actually calls.

### 3.9 Billing and Stripe

| Route                       | Auth                                                                                                                                                                                         |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST /api/stripe/checkout` | session; resolves the price from the plan and applies grandfathering                                                                                                                         |
| `POST /api/stripe/portal`   | session                                                                                                                                                                                      |
| `POST /api/stripe/cancel`   | session                                                                                                                                                                                      |
| `POST /api/stripe/webhook`  | Stripe signature, CSRF-exempt, `runtime = 'nodejs'` for the raw body                                                                                                                         |
| `POST /api/promo/redeem`    | session; creates a discounted Checkout Session. This is the Apple §3.1.1 anchor - the in-app mobile experience never carries a discount surface, it directs the user to the web redeem page. |
| `GET /api/promo/validate`   | public                                                                                                                                                                                       |

The webhook handles nine event types and carries the most important identity note in the codebase at [`stripe/webhook/route.ts:28-41`](../../src/app/api/stripe/webhook/route.ts): the `userId` a handler resolves is a **Supabase uuid**, while `Subscription.userId` is a Prisma cuid. Passing the uuid straight to Prisma is what silently dropped the subscription row for ~96% of customers. Every Prisma write now goes through `syncStripeSubscriptionToPrisma`, which translates and reports loudly when it cannot. The `profiles` writes correctly keep the uuid, because that is the primary key of `profiles`.

### 3.10 RevenueCat and mobile plumbing

| Route                                | Auth                                                                                             | Notes                                                                                                                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `POST /api/revenuecat/webhook`       | shared-secret Bearer ([`revenuecat/verify.ts`](../../src/lib/revenuecat/verify.ts)), CSRF-exempt | Journals to `RevenueCatEvent` **before** reconciling, idempotent on `event.id`, stamps `processedAt` afterwards. Never logs the full payload - `subscriber` attributes are PII. |
| `GET /api/revenuecat/reconcile-self` | session                                                                                          | Client-triggered re-read after a purchase or restore                                                                                                                            |
| `POST                                | GET /api/mobile/devices`, `DELETE /api/mobile/devices/[id]`                                      | session                                                                                                                                                                         | Expo push token registry |
| `POST /api/push/send`                | `x-cron-secret`, CSRF-exempt                                                                     | Server-to-server fan-out to the Expo Push API. Not exposed to end users.                                                                                                        |

`GET /api/me/entitlements` is the source of truth for paid access. `pickEntitlement` ([`entitlements.ts:187`](../../src/lib/entitlements.ts)) sorts a person's subscription rows by `currentPeriodEnd` and takes the freshest. That matters because `profiles.subscription_status` is one field per person while a person can hold several Stripe subscriptions, so the two can legitimately disagree and the Prisma rows are the better answer.

### 3.11 Progress, analytics and recommendations

`GET /api/progress` is the summary. `POST /api/progress/sync` is the real write path: it bulk-upserts localStorage state across `progress_poems`, `progress_games`, `progress_quizzes` and `progress_reading_age`, stamping `user_id` from the session so a client cannot forge it, and always returns `{ inserted, updated, errors[] }` with per-table best-effort semantics so a partial failure does not lose committed work. The four single-table routes (`progress/games`, `/poems`, `/quizzes`, `/reading-age`) predate it, and only `progress/games` still has a caller.

`GET /api/analytics/aggregate` is public and cached an hour (`revalidate = 3600`). Its engine ([`lib/analytics/aggregate.ts`](../../src/lib/analytics/aggregate.ts)) used to return fabricated numbers - an invented 46,219-student bell curve among them - and was rewritten to the rule "if the schema cannot support the metric honestly, return 0 rather than an inflated mock". Keep that rule. `GET /api/analytics/leaderboards` is public, edge-cached five minutes, uses the anon client so RLS applies, and runs `redactPII` over the response as defence in depth.

`POST /api/quiz/response` exists to populate `quiz_responses`, without which `getQuestionDifficulty` and `getHardestQuestions` return empty arrays. `GET /api/recommendations` returns an empty array unless `profiles.personalised_recommendations` is explicitly true (Children's Code).

### 3.12 Toolkit and content generation

`POST /api/toolkit/generate-notes` is a full AI route with the complete gate chain. `POST /api/toolkit/generate-test` is **not**: session and subscription only, no consent gate, no AI opt-out check, no allowance meter, because it assembles questions from a bank rather than calling a model. `POST /api/generate-pptx` renders a lesson plan to PowerPoint behind session plus subscription. `POST /api/certificates` re-derives score and grade from the stored attempt and never trusts client values, using the service role to bypass the certificates RLS insert policy deliberately.

### 3.13 Public forms and lead capture

`contact`, `school-inquiry`, `waitlist`, `creator-apply`, `teacher-signup`, `board`, `breach` (POST public, GET admin), `affiliate/track-click`, `affiliate/track-conversion`, `promo/validate`, `auth/validate-age`, `parent/invite/validate`, `school/consent/details`, `school/promo/validate`, `school/export/template`, `ga4/track`, `health`. Several send outbound email, so their rate limit is the only brake they have.

`POST /api/ga4/track` is a server-side GA4 Measurement Protocol relay, built because roughly a third of UK browsers block `google-analytics.com` outright and GA4 stayed empty with perfect client config. It reads the `eh-cookie-consent` cookie and returns 204 silently unless the value is `all`.

### 3.14 Cron

All 15 are registered in [`vercel.json`](../../vercel.json) and covered in chapter 09. Two API-surface facts belong here:

- `authoriseCronRequest` ([`cron/auth.ts`](../../src/lib/cron/auth.ts)) describes itself as "one implementation, used by every scheduled route". **It is used by two**: `trustpilot-followup-7d` and `trustpilot-retention-90d`. The other 13 hand-roll a `timingSafeEqual` comparison. All accept `Authorization: Bearer`; three also accept `x-cron-secret`. Consolidating on the helper is safe and overdue, because the hand-rolled comparisons are the ones that historically threw on a length mismatch and returned 500 instead of an honest 401.
- `runCron(name, body)` ([`cron/observability.ts:25`](../../src/lib/cron/observability.ts)) wraps the body, emits a Sentry breadcrumb on success and `captureException` on failure, and returns 500 so Vercel retries. Fourteen of the fifteen cron routes use it; `trustpilot-retention-invite` is the one that does not. A 405 never reaches it, because the handler it wraps is never entered - which is exactly how two Trustpilot crons ran silently dead from April to September 2026 while answering every scheduled call with 405.

### 3.15 Health

`GET /api/health` runs on the **edge** runtime and returns `{ status: 'ok', timestamp, version: '1.0.0' }`. It proves the process is running and nothing else. The version string is hardcoded at [`health/route.ts:10`](../../src/app/api/health/route.ts).

`GET /api/health/ai` is the one that matters. It makes one real 8-token Anthropic call and reports which model ids are configured and whether they answered ([`health/ai/route.ts`](../../src/app/api/health/ai/route.ts)). It exists because the AI product died silently in production twice on retired model pins - found by hand about ten weeks later the first time - while `/api/health` stayed green throughout. Every AI route deliberately catches provider errors and returns a calm 503, which is right for a fifteen-year-old mid-essay and is precisely why the outage was invisible. It is Bearer `CRON_SECRET` gated because the call costs money.

**It is not in `vercel.json`.** Nothing schedules it. The detector for the outage class that has already happened twice runs only when someone curls it by hand.

---

## 4. The mobile contract

The native app lives in `D:/Coding/english-hub-mobile` and targets `EXPO_PUBLIC_API_BASE_URL`, which its own `.env.example` sets to `https://theenglishhub.app/api`, so its paths map one-to-one onto directories under `src/app/api`. Its client sends `Authorization: Bearer <supabase access token>`, `x-client: english-hub-mobile`, and an `Idempotency-Key` on every non-GET.

Routes written to that contract, and to be treated as published interfaces you do not change casually: `me`, `me/entitlements`, `me/usage`, `flags`, `mark`, `mark/stream`, `progress`, `auth/register`, `mobile/devices`, `mobile/devices/[id]`, `revenuecat/webhook`, `revenuecat/reconcile-self`, `school/classes`, `school/assignments`, `school/students/[studentId]`, `school/analytics/class-performance`, `school/analytics/hardest-questions`, `school/analytics/student-insights`, `school/bulk-upload/latest-status`. Their headers cite `english-hub-mobile/docs/API_SPEC.md` section numbers, and that spec is the contract document.

**Two structural problems sit between the app and the API. Neither could be verified against a running system from this repo.**

1. **The Bearer token is never read.** Every one of those routes authenticates with `createServerSupabaseClient()`, which is cookie-only ([`server.ts:17-50`](../../src/lib/supabase/server.ts)), and `updateSession` in the middleware likewise reads only `request.cookies` ([`supabase/middleware.ts:55-58`](../../src/lib/supabase/middleware.ts)). No non-cron route passes a JWT to `auth.getUser(jwt)` or sets `global.headers` on a Supabase client. On the code as written, a Bearer-only caller is anonymous and receives 401.
2. **The CSRF gate requires `Origin` on every mutation** outside the four exempt prefixes (2.2). React Native's `fetch` is not a browser and is not obliged to send one. If it does not, every mobile POST, PUT, PATCH and DELETE is refused 403 by the middleware before the handler runs.

Both need a deliberate decision rather than a patch: either a token-accepting server client plus a mobile CSRF exemption keyed on the token, or a cookie-bearing session for the app.

Separately, the app calls **twenty paths that do not exist in this repo**. Verified by listing the `api.get/post/put/patch/del` call sites in the mobile source against `find src/app/api -name route.ts`:

`/consent/accept`, `/essays`, `/essays/{id}`, `/mark-schemes`, `/mark-schemes/{id}`, `/human-reviews`, `/me/activity`, `/me/saved`, `/me/parent-links`, `/parent-links/{id}/revoke`, `/parent/linked-children`, `/parent/invites/validate`, `/parent/invites/redeem`, `/progress/history`, `/school/analytics/ao-breakdown`, `/school/analytics/class-trend`, `/school/analytics/essay-volume`, `/school/students/{id}/notes`, `/trustpilot/invite/check`, `/trustpilot/invite/schedule`.

Several are flagged `ASSUMPTION(W3)` or `ASSUMPTION(W5)` in the mobile source, so the app's authors knew they were guessing. The nearest existing equivalents are `/api/consent` (POST), `/api/parent/invite/validate`, `/api/parent/link` and `/api/trustpilot/fired-check`, but the shapes differ. Before any mobile release, diff `docs/API_SPEC.md` in that repo against this route list.

---

## 5. Dead, unreferenced and hazardous

### 5.1 No caller anywhere in `src`

Twenty routes have no reference from any `.ts` or `.tsx` outside their own directory. Some are legitimately external - a cron target, a mobile-only endpoint, an operator tool driven by curl - and the rest are probably dead. The list, so you do not have to re-derive it:

`admin/free-allowance`, `admin/ielts-entitlement-check`, `affiliate/generate-link`, `affiliate/payouts`, `feedback`, `mark/stream`, `parent/delete-child-data`, `progress/poems`, `progress/quizzes`, `progress/reading-age`, `recommendations`, `school/analytics/department-overview`, `school/analytics/student-insights`, `school/bulk-upload/latest-status`, `school/export/report`, `school/export/users`, `school/interventions`, `school/promo/validate`, `school/reports/generate`, `school/roles`.

Of these, `mark/stream`, `school/analytics/student-insights` and `school/bulk-upload/latest-status` are called by the **mobile** app and are not dead. `admin/free-allowance` is a deliberate operator tool. The caveat on the method: a route whose URL is assembled from a variable would not be found by this search, so confirm before deleting anything.

### 5.2 Routes that read database objects no migration in this repo creates

Seven table names appear in `.from('…')` calls with no `CREATE TABLE` anywhere in [`supabase/migrations`](../../supabase/migrations) or [`supabase/migrations-pending`](../../supabase/migrations-pending):

| Table                     | Route                       | Line                                                 |
| ------------------------- | --------------------------- | ---------------------------------------------------- |
| `waitlist`                | `POST /api/waitlist`        | [51](../../src/app/api/waitlist/route.ts)            |
| `creator_applications`    | `POST /api/creator-apply`   | [96, 109](../../src/app/api/creator-apply/route.ts)  |
| `teacher_referrals`       | `POST /api/teacher-signup`  | [72, 85](../../src/app/api/teacher-signup/route.ts)  |
| `school_contact_requests` | `POST /api/school/contact`  | [106](../../src/app/api/school/contact/route.ts)     |
| `feedback_entries`        | `/api/feedback`             | [108, 144, 190](../../src/app/api/feedback/route.ts) |
| `assignments`             | `GET /api/school/analytics` | [247](../../src/app/api/school/analytics/route.ts)   |
| `assignment_submissions`  | `GET /api/school/analytics` | [473](../../src/app/api/school/analytics/route.ts)   |

This does **not** prove the tables are absent in production. The database does not match the migration history, because [`scripts/apply-migrations.mjs:42`](../../scripts/apply-migrations.mjs) baselines everything before `20260530` as applied without executing it, and objects have since been created by hand. What it proves is that you cannot answer the question from this repo. Run [`scripts/check-schema-drift.mjs`](../../scripts/check-schema-drift.mjs) or query `information_schema` before trusting any of these routes.

The `assignments` case is the nastier one. Prisma owns `Assignment` and `AssignmentSubmission` models with **no `@@map`** ([`prisma/schema.prisma:563`](../../prisma/schema.prisma), [`:586`](../../prisma/schema.prisma)), so their real table names are `"Assignment"` and `"AssignmentSubmission"`, PascalCase and quoted. `/api/school/assignments` writes through Prisma to those. `/api/school/analytics` reads `assignments` and `assignment_submissions` in snake_case through Supabase. They are different objects. Both analytics reads destructure without checking `error`, so a missing table yields `undefined` and the metric renders as **0** rather than failing - a wrong number presented to a head of department as a fact, which is the failure mode this product can least afford.

### 5.3 Other traps worth knowing before you touch anything

- `/api/marker/queue` and `/api/school/marking` both return an empty list rather than an error when `marking_submissions` is missing, and say so in their headers. Empty means "no rows, or no table"; the caller cannot tell which.
- `/api/board` states in its first line that no client code POSTs to it. It is retained speculatively, and its `POST` and `DELETE` are unauthenticated.
- `/api/analytics/aggregate` still carries a `TODO(Phase-7)` about a mock Supabase client in its header, but the engine beneath it was rewritten to return honest zeroes. Trust the engine, not the TODO.
- `/api/school/export/template` is public and unauthenticated. It returns static CSV headers only, which is fine, but never add anything database-derived to it.
- `/api/toolkit/generate-test` carries no consent gate. That is correct today because it calls no model, but the moment someone adds a model call to it, it becomes an ungated AI route.

---

## 6. What I could not determine

- **Whether the mobile app works against production today.** Both blockers in section 4 are read off the code; neither was exercised against a live request. If the app is in fact working, something reconciles the Bearer token that I did not find.
- **Which of the seven undocumented tables exist in production.** Repo-only analysis cannot answer it.
- **Whether both affiliate programmes are live**, which enrolment route the current signup page calls, and whether `affiliate_accounts` was created from `migrations-pending/002_affiliates.sql` or by hand.
- **Real request volumes per route**, so "unreferenced" in 5.1 means "no static caller in this repo", not "no traffic".
- **The contents of `english-hub-mobile/docs/API_SPEC.md`**, cited as the contract by nine routes here. I confirmed the call sites in that repo but did not read the spec, so section numbers quoted in route headers are unverified.

---

## Correction, 18 September 2026: the tables in §5.2 were verified absent, and five now exist

A read-only `information_schema` check on 18 September found 78 live tables and none of the code-referenced tables that no migration declared. Five of them backed public forms and were created that day by `supabase/migrations/20260918_public_form_tables.sql`, with the column set taken from each route's own insert payload: `creator_applications` (`POST /api/creator-apply`), `school_contact_requests` (`POST /api/school/contact`), `waitlist` (`POST /api/waitlist`), `feedback_entries` (`/api/feedback`) and `teacher_referrals` (`POST /api/teacher-signup`). Until then every one of those routes answered 500 on every submission, except the waitlist route, which caught `42P01` and told the visitor they were on a list that did not exist. Still absent, and left absent until their contracts are decided: `student_progress` (which the mobile app's `GET /api/progress` reads), `assignments`, `assignment_submissions` and `import_jobs`.
