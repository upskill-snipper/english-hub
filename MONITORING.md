# Monitoring & Observability

Overview of monitoring, error tracking, and analytics for **The English Hub** (`theenglishhub.app`).

---

## Services in Use

### 1. Sentry (Error Tracking)

**Status:** Installed and wired via `@sentry/nextjs` v10.44+

- `next.config.js` wraps the config with `withSentryConfig()`.
- Error boundaries in `src/app/global-error.tsx` and per-route `error.tsx` files (dashboard, courses, mock-exams, school) call `Sentry.captureException(error)`.
- **No `sentry.client.config.ts`, `sentry.server.config.ts`, or `sentry.edge.config.ts` files exist.** Sentry SDK init relies on the DSN env var and `withSentryConfig` defaults.

**Env vars:**

| Variable | Scope | Required |
|---|---|---|
| `NEXT_PUBLIC_SENTRY_DSN` | Client-side | Optional (listed in env-validation) |
| `SENTRY_DSN` | Server-side | Optional (listed in env-validation) |

**Known limitation:** Source-map upload is disabled on Vercel builds. `next.config.js` sets `disableServerWebpackPlugin: true` and `disableClientWebpackPlugin: true` when `process.env.VERCEL === '1'`. This means Sentry stack traces in production will reference minified code. `hideSourceMaps: true` is also set to prevent public exposure.

### 2. Google Analytics 4

**Status:** Active

- GA4 snippet injected in `src/app/layout.tsx` via inline `<script>` tags, conditional on `NEXT_PUBLIC_GA4_ID` being set.
- Custom event helper at `src/lib/gtag.ts` exposes `trackEvent(action, params)`.

**Env vars:**

| Variable | Scope | Required |
|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | Client-side | Optional |

### 3. Vercel Analytics & Speed Insights

**Status:** Active

- `<Analytics />` from `@vercel/analytics/react` rendered in `src/app/layout.tsx`.
- `<SpeedInsights />` from `@vercel/speed-insights/next` rendered in `src/app/layout.tsx`.
- Zero-config; automatically active on Vercel deployments.

### 4. PostHog

**Status:** Not installed. No PostHog dependency, no `NEXT_PUBLIC_POSTHOG` env var, no PostHog provider component. If product analytics beyond GA4 are needed, PostHog would need to be added from scratch.

---

## Environment Variables

All monitoring-related env vars are listed in `.env.example` and validated at startup by `src/lib/env-validation.ts`:

```
# Sentry (error tracking)
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_DSN=your_sentry_dsn_here

# Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

Sentry and GA4 vars are classified as **optional** in `env-validation.ts` -- the app will start without them but will log warnings.

---

## Cron Jobs

Defined in `vercel.json` (4 jobs). All run in the `lhr1` (London) region.

| Path | Schedule | Source file exists? |
|---|---|---|
| `/api/cron/affiliate-confirm` | `0 3 * * *` (daily 03:00 UTC) | Yes -- `src/app/api/cron/affiliate-confirm/route.ts` |
| `/api/cron/expire-invites` | `0 2 * * *` (daily 02:00 UTC) | Yes -- `src/app/api/cron/expire-invites/route.ts` |
| `/api/cron/data-retention` | `0 4 * * *` (daily 04:00 UTC) | Yes -- `src/app/api/cron/data-retention/route.ts` |
| `/api/cron/weekly-reports` | `0 7 * * 1` (Mondays 07:00 UTC) | Yes -- `src/app/api/cron/weekly-reports/route.ts` |

All four cron routes are protected by `CRON_SECRET` (set automatically by Vercel, or manually for local testing).

**Note:** A fifth cron route exists at `src/app/api/cron/school-access/route.ts` but is **not** registered in `vercel.json`, so it will not run automatically on Vercel.

---

## Known Limitations

1. **Sentry source maps disabled on Vercel** -- both client and server Webpack plugins are disabled when `VERCEL === '1'`. Stack traces in production will reference minified code. To enable source maps, remove the `disableServerWebpackPlugin` / `disableClientWebpackPlugin` guards, but be aware this may increase build times.

2. **No Sentry SDK init files** -- `sentry.client.config.ts`, `sentry.server.config.ts`, and `sentry.edge.config.ts` do not exist. The SDK initializes via env var defaults only. Adding these files would allow configuring sample rates, integrations, and environment tags.

3. **No uptime monitoring** -- there is no external uptime check for `theenglishhub.app`.

4. **Unregistered cron route** -- `school-access` has a route handler but no `vercel.json` entry.

---

## Recommended: Uptime Monitoring

Add [UptimeRobot](https://uptimerobot.com/) free-tier monitoring for `https://theenglishhub.app`:

1. Create a free account at uptimerobot.com.
2. Add an HTTP(S) monitor for `https://theenglishhub.app` with a 5-minute check interval.
3. Configure alert contacts (email, Slack, or webhook).
4. Optionally add a status page at a subdomain (e.g., `status.theenglishhub.app`).

The free tier provides 50 monitors with 5-minute intervals, which is sufficient for a single-domain app.
