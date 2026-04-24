-- ─── app_user_id() RLS helper ─────────────────────────────────────────────
--
-- Returns the authenticated caller's Supabase user id as a uuid. Used in
-- RLS policies across mobile-originated tables (Subscription, MobileDevice,
-- OfflineEssayQueueItem) so a policy expression can be written as
-- `"userId" = app_user_id()` without duplicating the `auth.uid()` cast
-- everywhere.
--
-- Ordering: this file sorts BEFORE `20260420_01_revenuecat_mobile.sql` so
-- the helper exists at the moment the mobile migration references it in
-- its RLS policy bodies.
--
-- Security notes:
--   • STABLE so the planner can fold calls to a single evaluation per row.
--   • SECURITY DEFINER with `SET search_path = ''` to neutralise search-
--     path injection — the body fully-qualifies every reference (none here
--     beyond `auth.uid()`, which Postgres resolves via the `auth` schema
--     that lives outside `search_path`).
--   • `auth.uid()` already returns uuid in Supabase; we return it verbatim.
--
-- British English throughout; idempotent via CREATE OR REPLACE.
-- ──────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.app_user_id()
  RETURNS uuid
  LANGUAGE sql
  STABLE
  SECURITY DEFINER
  SET search_path = ''
AS $$
  SELECT auth.uid();
$$;

COMMENT ON FUNCTION public.app_user_id() IS
  'Returns the authenticated caller''s Supabase user id (auth.uid()) as uuid. Used by RLS policies on mobile-originated tables. STABLE + SECURITY DEFINER with empty search_path.';

GRANT EXECUTE ON FUNCTION public.app_user_id() TO authenticated, service_role;

-- ──────────────────────────────────────────────────────────────────────────
-- Rollback block (commented — execute manually if needed)
-- ──────────────────────────────────────────────────────────────────────────
-- REVOKE EXECUTE ON FUNCTION public.app_user_id() FROM authenticated, service_role;
-- DROP FUNCTION IF EXISTS public.app_user_id();
