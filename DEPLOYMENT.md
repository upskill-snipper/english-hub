# Deployment Checklist

Practical checklist for deploying The English Hub to production on Vercel.

---

## 1. Pre-deployment

- [ ] `npm run build` succeeds locally
- [ ] `npx tsc --noEmit` produces zero errors
- [ ] `npm test` all tests pass
- [ ] New environment variables added to Vercel dashboard (see section 2)
- [ ] Database migrations run on Supabase (see section 3)

---

## 2. Environment Variables

Configure all of these in the Vercel dashboard under **Settings > Environment Variables**.

### Supabase (required)

| Variable                        | Client-exposed | Description                                           |
| ------------------------------- | :------------: | ----------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      |      Yes       | Supabase project URL                                  |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` |      Yes       | Supabase anonymous/public API key                     |
| `SUPABASE_SERVICE_ROLE_KEY`     |       No       | Supabase service role key (server-only, bypasses RLS) |

### Stripe (required)

| Variable                             | Client-exposed | Description                                                  |
| ------------------------------------ | :------------: | ------------------------------------------------------------ |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` |      Yes       | Stripe publishable key (use live key for production)         |
| `STRIPE_SECRET_KEY`                  |       No       | Stripe secret key                                            |
| `STRIPE_WEBHOOK_SECRET`              |       No       | Webhook signing secret (from Stripe dashboard, per endpoint) |

### Stripe Price IDs (required)

Each maps to a Stripe Price object. Create these in the Stripe dashboard first, then paste the IDs.

| Variable                         | Description                            |
| -------------------------------- | -------------------------------------- |
| `STRIPE_PRICE_PRO_MONTHLY`       | Pro subscription - monthly             |
| `STRIPE_PRICE_PRO_ANNUAL`        | Pro subscription - annual              |
| `STRIPE_PRICE_KS3_READING`       | KS3 Reading one-time course            |
| `STRIPE_PRICE_KS3_WRITING`       | KS3 Writing one-time course            |
| `STRIPE_PRICE_KS3_GRAMMAR`       | KS3 Grammar one-time course            |
| `STRIPE_PRICE_GCSE_LANG_READING` | GCSE Language Reading one-time course  |
| `STRIPE_PRICE_GCSE_LANG_WRITING` | GCSE Language Writing one-time course  |
| `STRIPE_PRICE_GCSE_LIT_POETRY`   | GCSE Literature Poetry one-time course |
| `STRIPE_PRICE_GCSE_LIT_PROSE`    | GCSE Literature Prose one-time course  |
| `STRIPE_PRICE_GCSE_REVISION`     | GCSE Revision one-time course          |
| `STRIPE_PRICE_BUNDLE`            | Course bundle price                    |
| `STRIPE_PRICE_EDEXCEL_LANG_P1`   | Edexcel Language Paper 1               |
| `STRIPE_PRICE_EDEXCEL_LANG_P2`   | Edexcel Language Paper 2               |
| `STRIPE_PRICE_EDEXCEL_LIT_P1`    | Edexcel Literature Paper 1             |
| `STRIPE_PRICE_EDEXCEL_LIT_P2`    | Edexcel Literature Paper 2             |
| `STRIPE_PRICE_EDEXCEL_IGCSE_A`   | Edexcel IGCSE Component A              |
| `STRIPE_PRICE_EDEXCEL_IGCSE_B`   | Edexcel IGCSE Component B              |

### App (required)

| Variable              | Client-exposed | Description                                      |
| --------------------- | :------------: | ------------------------------------------------ |
| `NEXT_PUBLIC_APP_URL` |      Yes       | Production URL, e.g. `https://theenglishhub.app` |

### AI (required)

| Variable            | Client-exposed | Description                             |
| ------------------- | :------------: | --------------------------------------- |
| `ANTHROPIC_API_KEY` |       No       | Anthropic API key for AI essay feedback |

### Admin (required)

| Variable       | Client-exposed | Description                                   |
| -------------- | :------------: | --------------------------------------------- |
| `ADMIN_EMAILS` |       No       | Comma-separated list of admin email addresses |

### Affiliate System (optional -- only if using Rewardful)

| Variable                    | Client-exposed | Description                                       |
| --------------------------- | :------------: | ------------------------------------------------- |
| `REWARDFUL_API_SECRET`      |       No       | Server-side API key from Rewardful dashboard      |
| `NEXT_PUBLIC_REWARDFUL_KEY` |      Yes       | Client-side tracking key from Rewardful dashboard |
| `AFFILIATE_ADMIN_EMAIL`     |       No       | Email for affiliate admin notifications           |

### Cron (required for production)

| Variable      | Client-exposed | Description                                                                                                        |
| ------------- | :------------: | ------------------------------------------------------------------------------------------------------------------ |
| `CRON_SECRET` |       No       | Secret used to authenticate cron job requests. Auto-set by Vercel on Pro/Enterprise plans; set manually otherwise. |

### Rate Limiting (required for production, and CURRENTLY MISSING)

> Neither Upstash variable is set in production today, so no API rate limit is enforced: the limiter falls back to a per-instance map, which on serverless is not a limit. Set both, redeploy, then verify. Full statement and remediation steps: `business-docs/compliance/controls/rate-limiting-control-status.md`.

| Variable                   | Client-exposed | Description                                                                                                                         |
| -------------------------- | :------------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| `UPSTASH_REDIS_REST_URL`   |       No       | Upstash Redis REST endpoint URL                                                                                                     |
| `UPSTASH_REDIS_REST_TOKEN` |       No       | Upstash Redis REST auth token                                                                                                       |
| `RATE_LIMIT_REQUIRE_REDIS` |       No       | Optional deploy gate. When `true`, startup fails if the two variables above are absent. Leave unset until they are set and verified |

### Error Tracking (optional)

| Variable                 | Client-exposed | Description                                      |
| ------------------------ | :------------: | ------------------------------------------------ |
| `NEXT_PUBLIC_SENTRY_DSN` |      Yes       | Sentry DSN for client and server error reporting |

---

## 3. Database Migrations

**Corrected 19 September 2026 (MAINT-5).** This section used to list four
migrations and tell you to run `supabase db push`. There are **89** files in
`supabase/migrations/`, and `supabase db push` is not how this project applies
them. Following the old instructions against the live database would have been
an unforced error at best.

### How migrations are actually applied

```bash
node --env-file=.env.local scripts/apply-migrations.mjs
```

That script is the only supported path. It tracks what it has applied in
`public._migrations_applied`, wraps each file in a transaction unless the file
manages its own, and refuses to re-baseline unless `ALLOW_BASELINE=1` is set
explicitly.

### Read this before you run it

`_migrations_applied` records an INTENTION, not reality. The script has a
`BASELINE_CUTOFF`, and on 30 May 2026 it inserted 66 files as "applied" without
executing any of them — in four seconds. One of those created
`profiles.is_minor`, and that column did not exist for four months while code
selected it on every identity read.

So **verify schema against `information_schema`, never against the tracker**:

```bash
node --env-file=.env.local scripts/check-schema-drift.mjs
```

It still finds real drift. Note its own limit: it parses `supabase/migrations/`
only, so anything declared exclusively in `prisma/migrations/` (the
quoted-camelCase tables such as `"Assignment"`) is invisible to it and has to be
checked by hand.

### What you must not do

- **Do not run `supabase db push`.** It reconciles against its own idea of
  applied state, which is not the state this project tracks.
- **Do not psql individual files by hand** to "catch up". Ordering and the
  baseline interact; use the runner.
- **Do not run anything that drops or recreates RLS** on a live table holding
  children's data without the owner's sign-off.

---

## 4. Stripe Configuration

### Webhook endpoint

**URL:** `https://theenglishhub.app/api/stripe/webhook`

Register this endpoint in the Stripe dashboard under **Developers > Webhooks**.

### Webhook events to register

Subscribe to all of the following events:

- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_failed`
- `invoice.paid`
- `charge.succeeded`

### Trial period

Subscriptions are created with a **7-day free trial** (`trial_period_days: PRICING.TRIAL_DAYS`), configured in `src/constants/pricing.ts`. During the trial, `subscription.status` is `trialing`, which the webhook maps to `pro` access.

---

## 5. Vercel Configuration

### Cron jobs

Defined in `vercel.json`. Requires Vercel Pro or Enterprise plan.

| Cron path                     | Schedule                     | Description                                                         |
| ----------------------------- | ---------------------------- | ------------------------------------------------------------------- |
| `/api/cron/expire-invites`    | `0 2 * * *` (daily 2 AM UTC) | Marks pending school invites as expired if past `invite_expires_at` |
| `/api/cron/affiliate-confirm` | `0 3 * * *` (daily 3 AM UTC) | Confirms or voids pending affiliate commissions older than 30 days  |

Both cron endpoints are protected by `CRON_SECRET` (bearer token auth).

### Region

Configured to deploy to `lhr1` (London) in `vercel.json`.

### Function timeouts

Default Vercel timeouts apply. No custom configuration set. If the AI essay feedback endpoint times out under load, consider increasing the function timeout in `vercel.json`:

```json
{
  "functions": {
    "src/app/api/essay-feedback/**": {
      "maxDuration": 30
    }
  }
}
```

### Domain settings

Configure your custom domain (`theenglishhub.app`) in the Vercel dashboard under **Settings > Domains**.

---

## 6. Post-deployment Verification

- [ ] Homepage loads at production URL
- [ ] Auth flow works: register, login, logout
- [ ] Stripe checkout works in test mode (use Stripe test card `4242 4242 4242 4242`)
- [ ] Stripe webhook receives events (check Stripe dashboard > Webhooks > Recent deliveries)
- [ ] School join code works (create a school, generate a code, join as a student)
- [ ] AI essay feedback works (submit an essay, receive feedback)
- [ ] Cron jobs execute (check Vercel dashboard > Cron Jobs for next scheduled run)
- [ ] Affiliate tracking loads on pages (if Rewardful is configured)
- [ ] Rate limiting is active. Do not test this by sending rapid requests from one client: a single warm instance returns 429 even when the control is not enforced. Confirm instead that both Upstash variables are set, that `getRateLimitHealth()` reports `status: ok` and `enforcement: cross-instance`, and that no "Rate limiting is not enforced" issue is arriving in Sentry
- [ ] Sentry receives errors (trigger a test error if configured)

---

## Quick Reference: Deployment Order

1. Run database migrations on Supabase
2. Set all environment variables in Vercel
3. Register Stripe webhook endpoint and events
4. Deploy to Vercel (`git push` to main, or `vercel --prod`)
5. Verify domain and SSL
6. Run through post-deployment checklist above
