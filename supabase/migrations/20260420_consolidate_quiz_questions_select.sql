-- Consolidate two overlapping SELECT policies on public.quiz_questions into one.
-- Before: "Enrolled users can view quiz questions" (from 20260322_rls_hardening.sql, tracked)
--         "Enrolled users view questions" (captured 2026-04-20 audit, untracked-but-live)
-- Both gate SELECT on an EXISTS over enrolments — redundant.
-- After: one policy "Enrolled users view quiz questions" joining enrolments via modules.course_id.

DROP POLICY IF EXISTS "Enrolled users can view quiz questions" ON public.quiz_questions;
DROP POLICY IF EXISTS "Enrolled users view questions" ON public.quiz_questions;

CREATE POLICY "Enrolled users view quiz questions" ON public.quiz_questions FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.enrolments e
    WHERE e.user_id = auth.uid()
      AND e.course_id = (
        SELECT m.course_id FROM public.modules m WHERE m.id = quiz_questions.module_id
      )
  )
);
