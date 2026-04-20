-- ============================================================================
-- Capture-only migration: previously-untracked RLS policy
-- Discovered: 2026-04-20 RLS drift audit
-- Table:  public.assessment_attempts
-- Policy: "Users manage own assessments"
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

DROP POLICY IF EXISTS "Users manage own assessments" ON public.assessment_attempts;

CREATE POLICY "Users manage own assessments" ON public.assessment_attempts
  AS PERMISSIVE
  FOR ALL
  TO public
  USING ((auth.uid() = user_id));
