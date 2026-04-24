-- ─── Subscription — grandfather price columns (R-031, 2026-04-21) ───────────
--
-- Problem:
--   The web repo has pivoted to a two-tier "Early Access / Standard" pricing
--   model. From August 2026 Standard prices take effect. Existing Early
--   Access subscribers must keep their Early Access price FOREVER on renewal.
--   Without a locked price stored on the Subscription row, a renewal after
--   the rollover date would accidentally charge Standard rates or show
--   Standard prices in invoices.
--
-- Fix:
--   Capture the price the user locked in at signup on the Subscription row.
--   Renewal handlers preserve the existing value; invoice / display code
--   reads `grandfathered_price_minor` first, only falling back to the public
--   price for post-rollover brand-new subscribers.
--
-- Columns added:
--   • grandfathered_price_minor  INTEGER  — locked price in minor units
--                                            (pence). Nullable: rows that
--                                            existed pre-migration carry no
--                                            lock until back-filled.
--   • grandfathered_currency     CHAR(3)  — ISO 4217; defaults to GBP.
--   • pricing_tier               TEXT     — one of:
--                                              early_access
--                                              standard
--                                              founding_school
--                                              founding_legacy
--                                            Used for reporting + invoice
--                                            rendering.
--
-- Everything below is idempotent via IF NOT EXISTS. Re-running is a no-op.
-- ──────────────────────────────────────────────────────────────────────────

ALTER TABLE "Subscription"
  ADD COLUMN IF NOT EXISTS "grandfathered_price_minor" INTEGER NULL;

ALTER TABLE "Subscription"
  ADD COLUMN IF NOT EXISTS "grandfathered_currency" CHAR(3) NULL DEFAULT 'GBP';

ALTER TABLE "Subscription"
  ADD COLUMN IF NOT EXISTS "pricing_tier" TEXT NULL;

COMMENT ON COLUMN "Subscription"."grandfathered_price_minor" IS
  'Locked price in minor units (pence) at signup. NULL on rows created before the grandfathering migration; back-filled by src/lib/pricing/backfill-grandfathered.ts. Preserved across RENEWAL events so existing subscribers keep their Early Access price after the Aug 2026 Standard rollover.';

COMMENT ON COLUMN "Subscription"."grandfathered_currency" IS
  'ISO 4217 currency code for grandfathered_price_minor. Defaults to GBP — the reference market.';

COMMENT ON COLUMN "Subscription"."pricing_tier" IS
  'Pricing tier captured at signup: early_access | standard | founding_school | founding_legacy. Drives reporting + invoice rendering.';

-- ──────────────────────────────────────────────────────────────────────────
-- Rollback block (commented — execute manually if needed)
-- ──────────────────────────────────────────────────────────────────────────
-- ALTER TABLE "Subscription" DROP COLUMN IF EXISTS "grandfathered_price_minor";
-- ALTER TABLE "Subscription" DROP COLUMN IF EXISTS "grandfathered_currency";
-- ALTER TABLE "Subscription" DROP COLUMN IF EXISTS "pricing_tier";
