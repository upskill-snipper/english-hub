# The English Hub - Runbook

Operational guide for onboarding, running, deploying, and maintaining The English Hub.

---

## Architecture Overview

- **Framework:** Next.js 14 (App Router) monolith
- **Database:** Supabase (PostgreSQL) + Prisma ORM
- **Payments:** Stripe (subscriptions + one-time course purchases, 30-day free trial)
- **AI:** Anthropic Claude (essay feedback)
- **Hosting:** Vercel, region `lhr1` (London)
- **Email:** Resend (transactional emails)
- **Error tracking:** Sentry (`@sentry/nextjs`)
- **Analytics:** Google Analytics 4, Vercel Analytics, Vercel Speed Insights
- **Rate limiting:** Upstash Redis
- **Affiliates:** Rewardful
- **Auth:** Supabase Auth (email/password)

---

## Development Setup

### Prerequisites

- Node.js >= 20
- npm
- A Supabase project (or local Supabase CLI)
- Stripe account (test mode for development)

### Install

```bash
git clone <repo-url> && cd english-hub
npm install          # runs prisma generate via postinstall
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

At minimum for local dev you need:
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`
- `ANTHROPIC_API_KEY` (for AI essay feedback)
- `DATABASE_URL` (Prisma needs this -- your Supabase PostgreSQL connection string)

See `.env.example` for the full list with comments.

### Run Locally

```bash
npm run dev          # starts Next.js dev server on http://localhost:3000
```

### Run Tests

```bash
npm test             # vitest (unit/integration)
npm run test:watch   # vitest watch mode
npm run test:e2e     # playwright end-to-end
npm run test:e2e:ui  # playwright with UI
```

### Lint & Type Check

```bash
npx next lint        # ESLint
npx tsc --noEmit     # TypeScript checking
```

These run in CI (`.github/workflows/ci.yml`) but are **skipped during Vercel builds** to avoid OOM -- see Known Issues below.

---

## Database

### Dual Database Layer

The app uses **both** Supabase client SDK (for auth, RLS-protected queries) and **Prisma** (for server-side operations that bypass RLS via service role).

- **Supabase migrations:** `supabase/migrations/` (numbered SQL files, run via Supabase dashboard SQL editor or `psql`)
- **Prisma schema:** `prisma/schema.prisma` (PostgreSQL, uses `DATABASE_URL` env var)

### Running Migrations

Applied migrations are in `supabase/migrations/`. Run them in order via the Supabase SQL editor or psql:

```bash
psql "$DATABASE_URL" -f supabase/migrations/001_initial_schema.sql
psql "$DATABASE_URL" -f supabase/migrations/002_affiliate_system.sql
# ... continue in filename order
```

### Pending Migrations

Unapplied migrations live in `supabase/migrations-pending/`. These need review before applying:

| File | Purpose |
|------|---------|
| `001_parent_accounts.sql` | Parent account tables |
| `002_affiliates.sql` | Affiliate system extensions |
| `003_exam_board_enum_update.sql` | Exam board enum changes |
| `004_progress_tables.sql` | Student progress tracking |
| `005_analytics_tables.sql` | Analytics tables |
| `006_recommendation_cache.sql` | Recommendation caching |

### Prisma

```bash
npx prisma generate   # regenerate client (runs automatically on npm install)
npx prisma db push    # push schema to database (development only)
```

---

## Deployment

### Platform: Vercel

The app deploys to Vercel, region `lhr1` (London). Deployment is triggered by push to `main`.

### Build Command

```bash
prisma generate && next build
```

### Environment Variables

All env vars must be set in **Vercel Dashboard > Settings > Environment Variables**. See `.env.example` for the full list. Required vars will crash the production build if missing (enforced by `src/lib/env-validation.ts`).

### Stripe Webhook

Register the production webhook endpoint in Stripe Dashboard > Developers > Webhooks:

- **URL:** `https://theenglishhub.app/api/stripe/webhook`
- **Events:** `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`, `invoice.paid`, `charge.succeeded`

### Post-Deploy Checklist

1. Homepage loads
2. Auth flow works (register, login, logout)
3. Stripe checkout works (test card `4242 4242 4242 4242`)
4. AI essay feedback returns results
5. Cron jobs appear in Vercel dashboard

---

## Cron Jobs

Defined in `vercel.json`. All protected by `CRON_SECRET` (Bearer token). Requires Vercel Pro plan.

| Path | Schedule | What It Does |
|------|----------|--------------|
| `/api/cron/expire-invites` | `0 2 * * *` (daily 02:00 UTC) | Marks pending school invites as expired past their `invite_expires_at` date |
| `/api/cron/affiliate-confirm` | `0 3 * * *` (daily 03:00 UTC) | Confirms pending affiliate referrals older than 30 days if subscription still active; voids if cancelled |
| `/api/cron/dormancy-check` | `30 3 * * *` (daily 03:30 UTC) | Sends dormancy warning emails to accounts inactive beyond retention threshold (children + adults) |
| `/api/cron/data-retention` | `0 4 * * *` (daily 04:00 UTC) | UK GDPR/Children's Code cleanup: deletes expired accounts, anonymises old data, archives old tickets, cleans expired consent |
| `/api/cron/school-access` | `0 5 * * *` (daily 05:00 UTC) | Checks school subscription access expiry, sends warning emails, revokes expired access |
| `/api/cron/weekly-reports` | `0 7 * * 1` (Mondays 07:00 UTC) | Sends weekly parent progress report emails for opted-in parents |

Source files: `src/app/api/cron/<name>/route.ts`

---

## Monitoring

### Sentry (Error Tracking)

- SDK: `@sentry/nextjs` v10.44+
- Config: `sentry.client.config.ts`, `sentry.server.config.ts`, `next.config.js` wraps with `withSentryConfig()`
- PII scrubbing enabled (strips emails, usernames, request bodies, cookies from events)
- Source map upload disabled on Vercel builds (stack traces show minified code in production)
- Env vars: `NEXT_PUBLIC_SENTRY_DSN` (client), `SENTRY_DSN` (server) -- both optional

### Error Boundaries

15+ route-level `error.tsx` files catch and report errors via `Sentry.captureException()`. Global error boundary at `src/app/global-error.tsx`.

### Google Analytics 4

- Injected via `<script>` tags in `src/app/layout.tsx` when `NEXT_PUBLIC_GA4_ID` is set
- Custom events via `src/lib/gtag.ts`

### Vercel Analytics & Speed Insights

- Zero-config, auto-active on Vercel via `<Analytics />` and `<SpeedInsights />` in layout

### PostHog

Not installed. No dependency, no env vars, no provider. Would need to be added from scratch if needed.

---

## Key File Locations

| What | Where |
|------|-------|
| App routes | `src/app/` (53 top-level route directories) |
| API routes | `src/app/api/` (30+ endpoints) |
| Cron jobs | `src/app/api/cron/` (6 jobs) |
| Shared components | `src/components/` |
| Library/utilities | `src/lib/` (60+ modules) |
| Prisma schema | `prisma/schema.prisma` |
| Supabase migrations | `supabase/migrations/` |
| Pending migrations | `supabase/migrations-pending/` |
| Middleware | `src/middleware.ts` (auth + board cookie + affiliate tracking) |
| Env validation | `src/lib/env-validation.ts` |
| Next.js config | `next.config.js` |
| Vercel config | `vercel.json` |
| CI pipeline | `.github/workflows/ci.yml` |
| Sentry configs | `sentry.client.config.ts`, `sentry.server.config.ts` |
| Test files | `src/__tests__/` |
| Constants/pricing | `src/constants/` |
| Type definitions | `src/types/`, `src/types.ts`, `src/global.d.ts` |

---

## Secrets Management

All secrets are stored as environment variables in Vercel Dashboard (production) or `.env.local` (development). Never commit `.env.local`.

**Required** (app crashes without these in production):
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `ANTHROPIC_API_KEY`

**Required for features to work** (app starts but features degrade):
- `DATABASE_URL` -- Prisma needs this for any Prisma-based queries
- `CRON_SECRET` -- cron jobs reject requests without it
- `RESEND_API_KEY` -- transactional emails fail without it
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` -- rate limiting disabled without these
- `CSRF_SECRET`, `IP_HASH_SALT` -- security features required in production

**Optional** (app works without, logs warnings):
- `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_DSN` -- error tracking disabled
- `NEXT_PUBLIC_GA4_ID` -- analytics disabled
- `REWARDFUL_API_SECRET`, `NEXT_PUBLIC_REWARDFUL_KEY` -- affiliate tracking disabled
- `ADMIN_EMAILS`, `SITE_ADMIN_EMAILS` -- admin access controls
- `AFFILIATE_ADMIN_EMAIL` -- affiliate notification email
- Stripe price IDs -- individual course/subscription pricing

---

## Known Issues & Troubleshooting

### OOM on Vercel Build

TypeScript checking and ESLint are disabled during Vercel builds (`next.config.js`) because running them on 600+ files causes out-of-memory errors on the build container. Both run in CI instead (`.github/workflows/ci.yml`).

### Sentry Source Maps

Source map upload is disabled on Vercel (`disableServerWebpackPlugin: true`, `disableClientWebpackPlugin: true` when `VERCEL === '1'`). Production stack traces reference minified code.

### Weekly Reports Cron Uses POST

The weekly-reports cron endpoint uses `POST` with `x-cron-secret` header (not `GET` with `Authorization: Bearer` like the other 5 cron jobs). Vercel cron triggers `GET` by default. Verify this works correctly or update to match the other cron patterns.

### Prisma + Supabase Dual Layer

The app uses both Supabase JS client (with RLS) and Prisma (bypassing RLS via service role). When debugging data issues, check which client is being used for the query in question.

### Board Cookie Required

Middleware enforces an exam board cookie (`english-hub-board`) on most routes. Users without it are redirected to `/board-select`. API routes, auth routes, and static assets are exempt.

### Node.js Version

Requires Node.js >= 20 (specified in `package.json` engines field).

---

## Bundle Analysis

Run `npm run analyze` to produce a visual bundle breakdown (opens in browser). This builds the app with `@next/bundle-analyzer` enabled.

Use this to verify that server-only dependencies (`docx`, `pptxgenjs`) are not leaking into client bundles. If they appear in the client report, check the import site -- these should only be imported in Server Components or API routes.

```bash
npm run analyze
```

The analyzer opens three reports: one for the Node.js server bundle, one for the Edge runtime bundle, and one for the client bundle.

---

## Sentry Source Maps

### Current State

Source map upload to Sentry is **disabled on Vercel builds**. In `next.config.js`:

```js
disableServerWebpackPlugin: process.env.VERCEL === '1',
disableClientWebpackPlugin: process.env.VERCEL === '1',
```

This was done because the Sentry Webpack plugin causes the Vercel build to hang indefinitely. As a result, production stack traces in Sentry reference minified code. This is the single biggest observability gap.

### Re-enabling (if Sentry fixes the hang)

Remove the conditional disable in `next.config.js`:

```js
// Change from:
disableServerWebpackPlugin: process.env.VERCEL === '1',
disableClientWebpackPlugin: process.env.VERCEL === '1',
// To:
disableServerWebpackPlugin: false,
disableClientWebpackPlugin: false,
```

Ensure `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, and `SENTRY_PROJECT` are set in Vercel environment variables.

### Alternative: Upload Source Maps via CLI

Instead of re-enabling the Webpack plugin, upload source maps in a post-build step using `@sentry/cli`:

```bash
npm run sentry:sourcemaps
```

This runs:

```bash
sentry-cli sourcemaps inject ./.next && sentry-cli sourcemaps upload ./.next
```

To use this on Vercel, override the build command in `vercel.json` or the Vercel dashboard:

```bash
prisma generate && next build && npx sentry-cli sourcemaps inject ./.next && npx sentry-cli sourcemaps upload ./.next
```

Required environment variables for `sentry-cli`: `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT`.

---

## Content Security Policy (CSP)

### Current Configuration

CSP is set via the `Content-Security-Policy` response header in `next.config.js` `headers()`. It applies to all routes (`/(.*)`).

**Directives:**

| Directive | Value | Purpose |
|-----------|-------|---------|
| `default-src` | `'self'` | Fallback: only allow same-origin resources |
| `script-src` | `'self' 'unsafe-inline' https://js.stripe.com https://r.wdfl.co https://www.googletagmanager.com` | App scripts, Stripe.js, Rewardful, Google Tag Manager |
| `style-src` | `'self' 'unsafe-inline'` | App styles (inline required by Next.js) |
| `img-src` | `'self' data: https:` | App images, data URIs, any HTTPS image (Supabase storage) |
| `font-src` | `'self' data:` | Local fonts and data URI fonts |
| `connect-src` | `'self' https://*.supabase.co https://api.stripe.com https://r.wdfl.co https://*.ingest.sentry.io` | API calls to Supabase, Stripe, Rewardful, Sentry |
| `frame-src` | `https://js.stripe.com https://hooks.stripe.com` | Stripe payment iframes |
| `object-src` | `'none'` | Blocks Flash/Java plugins (XSS vector) |
| `base-uri` | `'self'` | Prevents `<base>` tag hijacking |

### Why `unsafe-inline`

Next.js App Router injects inline `<script>` and `<style>` tags at build time for hydration and critical CSS. There is no clean way to apply a nonce to these in Next.js 14. Using `unsafe-inline` is the standard workaround.

**Risk:** `unsafe-inline` in `script-src` weakens XSS protection because any injected inline script will execute. The other CSP directives (especially `object-src 'none'`, `base-uri 'self'`, and strict `connect-src`) mitigate the most common exploitation paths.

### Path to Nonce-Based CSP

Next.js has experimental nonce support (see `next.config.js` `experimental` options). When Next.js stabilises nonce-based CSP for the App Router:

1. Enable nonce generation in Next.js config
2. Replace `'unsafe-inline'` with `'nonce-<value>'` in both `script-src` and `style-src`
3. Test thoroughly -- Stripe.js and Google Tag Manager scripts may need `'strict-dynamic'` as a fallback
4. The TODO comment in `next.config.js` marks the exact line to update
