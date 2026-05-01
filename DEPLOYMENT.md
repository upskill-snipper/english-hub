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

### Rate Limiting (required for production)

| Variable                   | Client-exposed | Description                     |
| -------------------------- | :------------: | ------------------------------- |
| `UPSTASH_REDIS_REST_URL`   |       No       | Upstash Redis REST endpoint URL |
| `UPSTASH_REDIS_REST_TOKEN` |       No       | Upstash Redis REST auth token   |

### Error Tracking (optional)

| Variable                 | Client-exposed | Description                                      |
| ------------------------ | :------------: | ------------------------------------------------ |
| `NEXT_PUBLIC_SENTRY_DSN` |      Yes       | Sentry DSN for client and server error reporting |

---

## 3. Database Migrations

Migrations live in `supabase/migrations/` and must be run **in order**.

| #   | File                        | Description                                                                                                                                                                  |
| --- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `001_initial_schema.sql`    | Core tables: profiles, courses, modules, quiz_questions, enrolments, module_progress, assessment_attempts, certificates, practice_sessions. RLS policies, triggers, indexes. |
| 2   | `002_affiliate_system.sql`  | Affiliate programme: affiliates, affiliate_referrals, affiliate_payouts, affiliate_commission_defaults.                                                                      |
| 3   | `003_school_analytics.sql`  | Schools platform: schools, school_members, classes, class_students, school_join_codes, analytics_snapshots.                                                                  |
| 4   | `20260322_new_features.sql` | Parental consents (GDPR), invite expiration, contact submissions, date_of_birth on profiles.                                                                                 |

### How to run

**Supabase CLI (recommended):**

```bash
supabase db push
```

**SQL Editor:** Copy each `.sql` file into the Supabase dashboard SQL editor and execute in order.

**psql:**

```bash
psql "$DATABASE_URL" -f supabase/migrations/001_initial_schema.sql
psql "$DATABASE_URL" -f supabase/migrations/002_affiliate_system.sql
psql "$DATABASE_URL" -f supabase/migrations/003_school_analytics.sql
psql "$DATABASE_URL" -f supabase/migrations/20260322_new_features.sql
```

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
- [ ] Rate limiting is active (rapid requests return 429)
- [ ] Sentry receives errors (trigger a test error if configured)

---

## Quick Reference: Deployment Order

1. Run database migrations on Supabase
2. Set all environment variables in Vercel
3. Register Stripe webhook endpoint and events
4. Deploy to Vercel (`git push` to main, or `vercel --prod`)
5. Verify domain and SSL
6. Run through post-deployment checklist above
