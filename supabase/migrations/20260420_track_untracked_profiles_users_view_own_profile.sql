-- ============================================================================
-- Capture-only migration: previously-untracked RLS policy
-- Discovered: 2026-04-20 RLS drift audit
-- Table:  public.profiles
-- Policy: "Users view own profile"
--
-- This policy existed in production but was NOT present in any prior committed
-- migration. It appears to have been created via the Supabase dashboard or
-- drifted from its original DDL (e.g. renamed in-place after a dashboard edit).
--
-- Purpose of this file: reproducibility only. If prod is ever rebuilt from
-- migrations (disaster recovery, fresh staging env), this guarantees the
-- policy is re-created with the exact predicate that is currently live.
-- This file does NOT alter production state on its own — the policy already
-- exists there, so the DROP + CREATE is a no-op re-apply.
-- ============================================================================

DROP POLICY IF EXISTS "Users view own profile" ON public.profiles;

CREATE POLICY "Users view own profile" ON public.profiles
  AS PERMISSIVE
  FOR SELECT
  TO public
  USING ((auth.uid() = id));
