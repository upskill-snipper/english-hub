-- ============================================================================
-- Capture-only migration: previously-untracked RLS policy
-- Discovered: 2026-04-20 RLS drift audit
-- Table:  public.quiz_questions
-- Policy: "Enrolled users view questions"
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

DROP POLICY IF EXISTS "Enrolled users view questions" ON public.quiz_questions;

CREATE POLICY "Enrolled users view questions" ON public.quiz_questions
  AS PERMISSIVE
  FOR SELECT
  TO public
  USING ((EXISTS ( SELECT 1
   FROM enrolments
  WHERE ((enrolments.user_id = auth.uid()) AND (enrolments.course_id = quiz_questions.course_id)))));
