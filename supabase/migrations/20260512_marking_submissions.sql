-- ─── marking_submissions — school marking pipeline storage ────────────────
--
-- Mirror of the Prisma migration at
-- `prisma/migrations/20260512_user_minor_marking_submission/migration.sql`.
--
-- Read by  GET  /api/school/marking
-- Written by POST /api/school/marking          (insert + AI grade)
-- Updated by POST /api/school/marking/override (teacher override)
--
-- All API access goes through the service role — RLS exists as defence in
-- depth so a stray anon/authenticated client (e.g. the future direct-from-
-- browser teacher dashboard) cannot read another school's marking. The
-- write path stays service-role-only (no INSERT/UPDATE policies for
-- authenticated users) because grade authority must flow through the
-- vetted route handler.
-- ──────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.marking_submissions (
  id                  UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id           UUID            NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  student_id          UUID            NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  class_id            UUID            REFERENCES public.classes(id) ON DELETE SET NULL,
  exam_board          TEXT            NOT NULL,
  essay_title         TEXT,
  essay_text          TEXT            NOT NULL,
  ai_grade            TEXT,
  ai_confidence       DOUBLE PRECISION CHECK (ai_confidence IS NULL OR (ai_confidence >= 0 AND ai_confidence <= 1)),
  ai_feedback         TEXT,
  ai_band_marks       JSONB           NOT NULL DEFAULT '[]'::jsonb,
  status              TEXT            NOT NULL DEFAULT 'pending'
                      CHECK (status IN ('pending', 'ai_marked', 'teacher_reviewed')),
  submitted_at        TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
  teacher_grade       TEXT,
  teacher_comment     TEXT,
  teacher_reviewed_by UUID            REFERENCES public.school_members(id) ON DELETE SET NULL,
  teacher_reviewed_at TIMESTAMPTZ
);

-- Indexes -------------------------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_marking_submissions_school_submitted
  ON public.marking_submissions(school_id, submitted_at DESC);

CREATE INDEX IF NOT EXISTS idx_marking_submissions_student
  ON public.marking_submissions(student_id);

CREATE INDEX IF NOT EXISTS idx_marking_submissions_class
  ON public.marking_submissions(class_id);

-- Backfill column on User in case the Prisma migration runs after this one.
-- The auth-register handler writes to it; absence causes silent data loss.
ALTER TABLE IF EXISTS public."User"
  ADD COLUMN IF NOT EXISTS is_minor BOOLEAN NOT NULL DEFAULT FALSE;

-- RLS -----------------------------------------------------------------------
-- Enable, then drop any pre-existing policies of these names so the file is
-- safely re-runnable in dev environments.

ALTER TABLE public.marking_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "marking_submissions_service_role_all" ON public.marking_submissions;
DROP POLICY IF EXISTS "marking_submissions_school_admins_select" ON public.marking_submissions;
DROP POLICY IF EXISTS "marking_submissions_teachers_select"      ON public.marking_submissions;
DROP POLICY IF EXISTS "marking_submissions_students_select"      ON public.marking_submissions;

-- Service role bypasses RLS implicitly, but we add an explicit ALL policy
-- so the supabase dashboard reflects the access path (and so a future
-- migration that drops the bypass for a specific role still works).
CREATE POLICY "marking_submissions_service_role_all"
  ON public.marking_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Admins / heads of department see every submission for their school.
CREATE POLICY "marking_submissions_school_admins_select"
  ON public.marking_submissions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.school_members sm
      WHERE sm.school_id = marking_submissions.school_id
        AND sm.user_id   = auth.uid()
        AND sm.invite_status = 'accepted'
        AND sm.role IN ('admin', 'head_of_department')
    )
  );

-- Teachers see submissions whose student is enrolled in a class they
-- teach. Mirrors the route's two-step lookup but in a single SQL EXISTS.
CREATE POLICY "marking_submissions_teachers_select"
  ON public.marking_submissions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.school_members sm
      JOIN public.classes c
        ON c.school_id  = sm.school_id
       AND c.teacher_id = sm.id
      JOIN public.class_students cs
        ON cs.class_id   = c.id
       AND cs.student_id = marking_submissions.student_id
       AND cs.is_active  = TRUE
      WHERE sm.user_id        = auth.uid()
        AND sm.role           = 'teacher'
        AND sm.invite_status  = 'accepted'
        AND sm.school_id      = marking_submissions.school_id
        AND (marking_submissions.class_id IS NULL OR c.id = marking_submissions.class_id)
    )
  );

-- Students see only their own submissions. student_id references
-- auth.users(id) so the comparison is direct.
CREATE POLICY "marking_submissions_students_select"
  ON public.marking_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = student_id);

-- No INSERT / UPDATE / DELETE policies for authenticated users — those
-- paths must go through the service-role-backed API routes which apply
-- the validation in `/api/school/marking/override` and the AI marking
-- write path. Adding write policies later is a follow-up migration.

COMMENT ON TABLE public.marking_submissions IS
  'School marking pipeline storage. AI-graded essays plus teacher overrides. Read paths gated by RLS (admins/HoDs see whole school; teachers see their classes; students see their own); writes restricted to service role.';
