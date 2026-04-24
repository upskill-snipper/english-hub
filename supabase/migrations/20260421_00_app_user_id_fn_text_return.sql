-- ─── Hotfix: app_user_id() must return TEXT, not uuid ────────────────────────
--
-- Fixes `ERROR 42883: operator does not exist: text = uuid` thrown while
-- applying the mobile RLS policies in `20260420_01_revenuecat_mobile.sql`.
--
-- Root cause:
--   The original `20260420_00_app_user_id_fn.sql` returned `auth.uid()` as
--   uuid. The mobile tables (Subscription, MobileDevice, OfflineEssayQueueItem)
--   reference `User.id`, which is a Prisma TEXT cuid — not a uuid. The RLS
--   policy expression `"userId" = app_user_id()` therefore compared text
--   to uuid, with no implicit operator.
--
-- Fix:
--   Redefine the helper to resolve the Prisma `User.id` via
--   `User.supabaseUserId = auth.uid()`, returning TEXT. Every RLS policy
--   body stays identical.
--
-- Apply order:
--   1. Run this file.
--   2. Re-run `20260420_01_revenuecat_mobile.sql` — it is idempotent
--      (DROP POLICY IF EXISTS everywhere) so the previously-failed policy
--      block completes cleanly.
--
-- Security / perf notes:
--   • STABLE + SECURITY DEFINER so the planner folds the lookup per query.
--   • search_path = 'public' because the body now references public."User".
--   • The inner SELECT is LIMIT 1 — User.supabaseUserId is unique so this
--     is a single-row index probe in practice.
-- ──────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.app_user_id()
  RETURNS text
  LANGUAGE sql
  STABLE
  SECURITY DEFINER
  SET search_path = 'public'
AS $$
  SELECT u."id"
  FROM public."User" u
  WHERE u."supabaseUserId"::text = auth.uid()::text
  LIMIT 1;
$$;

GRANT EXECUTE ON FUNCTION public.app_user_id() TO authenticated, service_role;

COMMENT ON FUNCTION public.app_user_id() IS
  'Returns the Prisma User.id (TEXT cuid) for the authenticated caller, resolved via supabaseUserId = auth.uid(). STABLE + SECURITY DEFINER with search_path=public.';

-- ──────────────────────────────────────────────────────────────────────────
-- Rollback block (commented — execute manually if reverting):
-- ──────────────────────────────────────────────────────────────────────────
-- CREATE OR REPLACE FUNCTION public.app_user_id()
--   RETURNS uuid
--   LANGUAGE sql
--   STABLE
--   SECURITY DEFINER
--   SET search_path = ''
-- AS $$
--   SELECT auth.uid();
-- $$;
