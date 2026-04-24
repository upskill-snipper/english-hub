-- ─── Subscription — drop NOT NULL on Stripe columns + add refundedAt + PAUSED
--
-- This migration finishes what `20260420_01_revenuecat_mobile.sql` could not
-- express without destabilising existing Stripe-originated rows:
--
--   1. `stripeSubscriptionId` and `stripeCustomerId` become NULLABLE. Mobile
--      (RevenueCat-reconciled) Subscription rows have no Stripe identity;
--      the earlier workaround synthesised `rc_*` sentinels so the NOT NULL
--      + UNIQUE constraints did not block the upsert. With nullable columns
--      the reconciler writes NULL and the sentinel code path is removed
--      (see `src/lib/revenuecat/reconcile.ts`).
--   2. `refundedAt TIMESTAMPTZ NULL` — distinct from `cancelledAt` so the
--      webhook REFUND branch does not overload the cancellation semantics.
--   3. `PAUSED` is added to the `SubscriptionStatus` enum. Google Play's
--      `SUBSCRIPTION_PAUSED` maps here directly; previously it was forced
--      into `PAST_DUE`, which conflated distinct states.
--
-- Everything below is idempotent (IF NOT EXISTS / DROP IF EXISTS / guarded
-- enum addition). Rerunning the migration is a no-op.
-- ──────────────────────────────────────────────────────────────────────────

-- ============================================================================
-- 1. Relax NOT NULL on Stripe identity columns
-- ============================================================================
-- Postgres has no `DROP NOT NULL IF SET` so we run these unconditionally;
-- they are already idempotent — running on an already-nullable column is a
-- no-op, not an error.
ALTER TABLE "Subscription"
  ALTER COLUMN "stripeSubscriptionId" DROP NOT NULL;

ALTER TABLE "Subscription"
  ALTER COLUMN "stripeCustomerId"     DROP NOT NULL;

COMMENT ON COLUMN "Subscription"."stripeSubscriptionId" IS
  'Stripe subscription id. NULL for mobile (RevenueCat-reconciled) rows — see SubscriptionPlatform.';
COMMENT ON COLUMN "Subscription"."stripeCustomerId" IS
  'Stripe customer id. NULL for mobile (RevenueCat-reconciled) rows — see SubscriptionPlatform.';

-- ============================================================================
-- 2. Add refundedAt — distinct lifecycle column from cancelledAt
-- ============================================================================
ALTER TABLE "Subscription"
  ADD COLUMN IF NOT EXISTS "refunded_at" TIMESTAMPTZ NULL;

COMMENT ON COLUMN "Subscription"."refunded_at" IS
  'Set when a RevenueCat REFUND / CHARGEBACK event is reconciled. Distinct from cancelledAt (user-initiated auto-renew off) so refund-driven revocation is queryable.';

-- ============================================================================
-- 3. Add PAUSED to SubscriptionStatus — guarded idempotent ALTER TYPE
-- ============================================================================
-- `ALTER TYPE ... ADD VALUE IF NOT EXISTS` cannot run inside a transaction
-- block on some Postgres versions; wrapping in a DO-block with an EXCEPTION
-- handler is the canonical pattern. Re-running is safe.
DO $$ BEGIN
  ALTER TYPE "SubscriptionStatus" ADD VALUE IF NOT EXISTS 'PAUSED';
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- ──────────────────────────────────────────────────────────────────────────
-- Rollback block (commented — execute manually if needed)
-- ──────────────────────────────────────────────────────────────────────────
-- -- Re-imposing NOT NULL will FAIL if any mobile row has been reconciled
-- -- with NULL; restore sentinel values first if you truly need to roll back.
-- ALTER TABLE "Subscription" ALTER COLUMN "stripeSubscriptionId" SET NOT NULL;
-- ALTER TABLE "Subscription" ALTER COLUMN "stripeCustomerId"     SET NOT NULL;
-- ALTER TABLE "Subscription" DROP COLUMN IF EXISTS "refunded_at";
-- -- Postgres cannot DROP a single enum value; a rollback requires recreating
-- -- the enum. Left as a manual procedure.
