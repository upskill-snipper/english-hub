-- ============================================================
-- AFFILIATE TIERS — relax tier CHECK constraints to allow the
-- modern flat-rate tier names alongside the legacy ones.
-- ============================================================
--
-- Background:
--   - supabase/migrations/20260420_affiliates_v2.sql introduced two
--     CHECK constraints that locked tier values to ('bronze', 'silver',
--     'gold'):
--       affiliate_accounts.tier
--       affiliate_conversions.tier_at_conversion
--   - On 19 April 2026 the codebase migrated from the percentage-based
--     bronze/silver/gold ladder to a flat-rate per-signup ladder using
--     the names tier-1..tier-5 (see src/lib/affiliate/tiers.ts).
--   - The CHECK constraints were never updated to match. As of today
--     (3 May 2026) the application code has been worked around to keep
--     writing 'bronze'/'silver'/'gold' (matching the schema), but the
--     tier-1..tier-5 names from `getCurrentTierInfo()` are kept in
--     scope only for log lines.
--
-- This migration is OPTIONAL. Apply it only if you want to loosen the
-- constraints so future code that writes tier-1..tier-5 doesn't fail.
-- The application currently does not require this — every insert
-- already uses the schema-permitted values.
--
-- Safe to run on a database that already has the constraints (we use
-- DROP CONSTRAINT IF EXISTS) or one that doesn't.
-- ============================================================

ALTER TABLE public.affiliate_accounts
  DROP CONSTRAINT IF EXISTS affiliate_accounts_tier_check;

ALTER TABLE public.affiliate_accounts
  ADD CONSTRAINT affiliate_accounts_tier_check
  CHECK (
    tier IN (
      -- Legacy percentage-based names — still in use as of 3 May 2026.
      'bronze', 'silver', 'gold',
      -- Modern flat-rate ladder names — see src/lib/affiliate/tiers.ts.
      'tier-1', 'tier-2', 'tier-3', 'tier-4', 'tier-5'
    )
  );

ALTER TABLE public.affiliate_conversions
  DROP CONSTRAINT IF EXISTS affiliate_conversions_tier_at_conversion_check;

ALTER TABLE public.affiliate_conversions
  ADD CONSTRAINT affiliate_conversions_tier_at_conversion_check
  CHECK (
    tier_at_conversion IN (
      'bronze', 'silver', 'gold',
      'tier-1', 'tier-2', 'tier-3', 'tier-4', 'tier-5'
    )
  );

-- ============================================================
-- Verification queries (run these after applying):
--
--   -- 1. Confirm both constraints now permit both naming systems
--   SELECT conname, pg_get_constraintdef(oid)
--   FROM pg_constraint
--   WHERE conname IN (
--     'affiliate_accounts_tier_check',
--     'affiliate_conversions_tier_at_conversion_check'
--   );
--
--   -- 2. Confirm no existing rows violate the new constraint
--   SELECT tier, count(*) FROM public.affiliate_accounts GROUP BY tier;
--   SELECT tier_at_conversion, count(*) FROM public.affiliate_conversions GROUP BY tier_at_conversion;
-- ============================================================
