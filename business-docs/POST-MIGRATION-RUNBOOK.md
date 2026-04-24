# Post-Migration Runbook — Supabase production, 2026-04-21

Version 1.0 · Owner Release Engineer · Last updated 2026-04-23

## Purpose

Step-by-step housekeeping for the founder to run **after** the six Supabase production migrations listed below have already been applied. This is strictly post-migration work: no further SQL is pasted here. If the migrations have not yet been run, stop — this document does not apply.

## Migrations already applied (2026-04-21, production)

Applied via the consolidated bundle `_RUN-ALL-MOBILE-MIGRATIONS.sql` plus the grandfathering paste. All verified 4/4 PASS.

1. `20260420_00_app_user_id_fn.sql` — initial helper, superseded in place by (2).
2. `20260421_00_app_user_id_fn_text_return.sql` — hotfix returning `TEXT` instead of `uuid`; includes `DROP FUNCTION` of (1).
3. `20260420_01_revenuecat_mobile.sql` — three new tables, `Subscription` and `User` columns, eleven RLS policies.
4. `20260420_02_stripe_columns_nullable.sql` — Stripe columns made nullable, `refundedAt` added, `PAUSED` enum value.
5. `20260420_03_revenuecatevent_index.sql` — dedup index on `RevenueCatEvent`.
6. `20260421_01_subscription_grandfather_price.sql` — grandfathering columns for R-031.

Nothing in this runbook modifies the database. Everything below is application-side.

## Step 1 — Regenerate the Prisma client locally

The generated client is stale; it does not yet know about `grandfathered_price_minor`, `pricing_tier`, `platform`, the nullable Stripe columns, or the new RevenueCat tables.

```bash
cd D:\Coding\english-hub
pnpm prisma generate
```

Expected: Prisma writes a fresh `node_modules/.prisma/client` with the new columns and tables reflected in the TypeScript types. No schema pull is required — `prisma/schema.prisma` was hand-edited alongside the SQL and is the source of truth.

## Step 2 — Run the typechecker

```bash
pnpm typecheck
```

Expected: the handful of TypeScript errors that were previously flagged against RevenueCat and grandfathering columns now resolve. Specifically, errors referencing `Subscription.grandfatheredPriceMinor`, `Subscription.pricingTier`, `Subscription.platform`, `RevenueCatEvent.*`, and the nullable Stripe fields should all clear. If any error remains, do **not** proceed — investigate before deploying, as the schema and code have diverged.

## Step 3 — Commit the schema and migration files

Stage only the files that belong to this change. Avoid `git add .` because unrelated local edits may be present.

```bash
git add prisma/schema.prisma
git add prisma/migrations/20260420_00_app_user_id_fn
git add prisma/migrations/20260421_00_app_user_id_fn_text_return
git add prisma/migrations/20260420_01_revenuecat_mobile
git add prisma/migrations/20260420_02_stripe_columns_nullable
git add prisma/migrations/20260420_03_revenuecatevent_index
git add prisma/migrations/20260421_01_subscription_grandfather_price
git commit -m "chore(db): land mobile RevenueCat + grandfathering migrations (prod applied 2026-04-21)"
git push
```

Commit message deliberately flags that production is already ahead of `main`, so `prisma migrate deploy` on Vercel is a no-op (the migration rows already exist).

## Step 4 — Trigger a Vercel redeploy

Push to `main` will trigger Vercel automatically. If a redeploy is needed without a new commit, promote the latest preview or click **Redeploy** on the current production deployment in the Vercel dashboard.

Expected build behaviour:

- `prisma generate` runs during Vercel build (per `postinstall` or `build` hook) — picks up the new schema.
- `prisma migrate deploy` finds no pending migrations (they are already applied on production Supabase). This is the intended state.
- API routes now compile against the new columns and deploy cleanly.

Confirm the deployment is **Ready** before moving on.

## Step 5 — Run the grandfathering backfill (once)

Any `Subscription` row created before the `20260421_01` migration has `NULL` for `grandfathered_price_minor`. The backfill endpoint sets it from `originalPurchaseDate`-driven pricing tier.

Prerequisite: a valid admin token (from 1Password under "EH admin API bearer").

```bash
curl -X POST https://englishhub.app/api/admin/pricing/backfill \
  -H "Authorization: Bearer $EH_ADMIN_TOKEN" \
  -H "Content-Type: application/json"
```

Expected response: JSON body with `{ scanned, updated, skipped }` counters. `updated` should equal the count of pre-2026-04-21 active subscriptions with NULL `grandfathered_price_minor`. Run **once**; re-running is idempotent (skipped count grows, updated count falls to zero) but generates noise in Sentry breadcrumbs.

If the endpoint 401s, regenerate the admin token; if it 500s, inspect Sentry for the request ID and investigate before retrying.

## Step 6 — Smoke test the entitlements endpoint

As an authenticated user (any active mobile test account will do), hit:

```
GET https://englishhub.app/api/me/entitlements
```

Expected shape additions post-migration:

```jsonc
{
  "active": true,
  "tier": "student_monthly",
  "platform": "ios" // or "android" | "web" | "stripe"
  // ...existing fields
}
```

The `platform` field is new and must be present. If it is missing, the deployed bundle has not picked up the regenerated Prisma client — redeploy from scratch (Step 4), don't just reload.

## Step 7 — Sentry watch for 10 minutes

Open the Sentry "Production" project, filter to the last deployment's release tag, and watch for 10 minutes post-deploy. Expected: no new issue groups; no spike in the existing RevenueCat-related groups. Specifically watch for:

- `PrismaClientValidationError` — indicates stale client in a serverless lambda warm instance.
- Any error referencing `grandfathered_price_minor` or `pricing_tier` — indicates code path not updated.
- 5xx spike on `/api/revenuecat/webhook` — the new dedup index may surface latent duplicate-event bugs.

If any of the above appear, roll back the Vercel deployment (previous deployment → **Promote to Production**) and raise an incident. The database migrations themselves do not need to be reverted — the prior application code is forward-compatible with the new columns (nullable additions only).

## Follow-ups (not part of this runbook)

- Grandfathering renewal-webhook preservation (R-031 full mitigation) — tracked separately.
- Grandfathering audit cron — scheduled for W7.
- RevenueCat sandbox soak ≥200 events zero-mismatch (R-029) — tracked on the founder's user-action ticket.

## Sign-off

Release Engineer to tick each step in the `#release` channel as it completes. When Step 7 closes clean, post "Post-migration housekeeping complete 2026-04-21" and link this runbook.
