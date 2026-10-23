-- ─── class_coach_reports: AI feedback on a class's game results, for its teacher ─
--
-- WHY THIS FILE EXISTS (23 October 2026)
--
-- The founder asked on 13 October for "AI generated feedback to teachers and
-- the students themselves on areas of strength and weakness and suggested next
-- revision steps". The student's side went live on 16 October as coach_reports
-- (20261013_game_rounds.sql). The teacher's side waited for his decision on
-- how a report for a teacher should treat the pupils' own settings, since most
-- pupils are children. He decided on 23 October: a report about the CLASS,
-- written from the class's pooled figures only, with no names; only for a
-- school whose access is live and that has recorded its authorisation for AI
-- processing (schools.ai_authorised_at); and leaving out any pupil who has
-- switched AI off. A report about one named pupil, for their teacher, is not
-- built: that is a separate question still with him.
--
-- WHAT IT HOLDS. One row per report: the class and school it is about, who
-- asked, how many pupils and answered questions the figures came from, the
-- window of rounds, the model's reply as checked JSON, and the model id. It
-- holds no pupil id and no name, because the report is written from pooled
-- figures and names nobody. Reports about ONE student stay in coach_reports.
--
-- SERVER-ONLY. Row-level security on, no policy for anon or authenticated, and
-- their grants revoked: POST /api/school/classes/[classId]/coach writes and
-- GET /api/school/classes/[classId]/games reads, through the service role,
-- after checking that the caller is staff with the class in scope.
--
-- RETENTION. The data-retention cron deletes reports older than 12 months, as
-- for coach_reports. A report also goes with its class or school
-- (ON DELETE CASCADE). It is nobody's personal record, so it is not in the
-- subject-access export.
--
-- Idempotent, like every file after the runner's BASELINE_CUTOFF.

CREATE TABLE IF NOT EXISTS public.class_coach_reports (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id      uuid NOT NULL REFERENCES public.classes(id) ON DELETE CASCADE,
  school_id     uuid NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  -- Who asked (kept as null if that account goes).
  requested_by  uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  -- How many pupils' figures, and how many answered questions, it was written from.
  pupils_used   integer NOT NULL DEFAULT 0 CHECK (pupils_used >= 0),
  answers_used  integer NOT NULL DEFAULT 0 CHECK (answers_used >= 0),
  window_start  timestamptz,
  window_end    timestamptz,
  report        jsonb NOT NULL CHECK (jsonb_typeof(report) = 'object'),
  model         text,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS class_coach_reports_class_created_idx
  ON public.class_coach_reports (class_id, created_at DESC);

CREATE INDEX IF NOT EXISTS class_coach_reports_created_idx
  ON public.class_coach_reports (created_at);

ALTER TABLE public.class_coach_reports ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public.class_coach_reports;
CREATE POLICY "service_role_full_access" ON public.class_coach_reports
  FOR ALL TO service_role USING (true) WITH CHECK (true);
REVOKE ALL ON public.class_coach_reports FROM anon, authenticated;
