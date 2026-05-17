-- ─── Smart IP — Teacher-in-the-loop AI Marking & Training Data ────────────
--
-- Foundation schema for the controlled, auditable, human-reviewed marking
-- intelligence layer. DESIGN DECISION (see audit): this EXTENDS the existing
-- `public.marking_submissions` spine — it does NOT create a parallel
-- student_submissions/ai_marking_results/teacher_moderations stack. The
-- existing table already has Prisma model + RLS + the /school/marking UI +
-- the /api/school/marking/override writer; its only missing piece is an
-- INSERT path (added as POST /api/submissions in a later phase).
--
-- This migration:
--   1. Extends marking_submissions with the unified-submission, structured
--      AI-result, moderation and versioning columns + the full status set.
--   2. Adds the genuinely-new lookup/label tables: model_versions,
--      prompt_versions, rubric_versions, teacher_moderations, training_data.
--
-- Style: idempotent / replay-safe (IF NOT EXISTS, DROP POLICY IF EXISTS,
-- DROP CONSTRAINT IF EXISTS). RLS deny-by-default: explicit service_role ALL
-- policy + scoped SELECT policies mirroring marking_submissions. All writes
-- flow through service-role-backed, role-guarded API routes. training_data
-- is service-role-ONLY (never client-readable) and stores no PII.
--
-- NOTE: this migration is SELF-BOOTSTRAPPING. The `marking_submissions`
-- base table (originally `20260512_marking_submissions.sql`) is not
-- guaranteed to have been applied on every environment (migrations run
-- out-of-band). Section 0 creates it (in its final, extended form, with
-- FK-guarded refs + base RLS) IF it is absent, so this file applies
-- cleanly whether or not the prerequisite ran, and stays idempotent.
-- ──────────────────────────────────────────────────────────────────────────

-- ===========================================================================
-- 0. Bootstrap public.marking_submissions if the prerequisite never ran
-- ===========================================================================
-- Created here in its FINAL shape: school_id NULLABLE (B2C self-study has no
-- school), status CHECK = the full Smart-IP lifecycle set. The Section 2
-- ALTERs below are then idempotent no-ops on a freshly-created table and
-- still apply the deltas on a DB where the original migration DID run.

-- Defensive User backfill (mirrors the original 20260512 migration's own
-- comment: "absence causes silent data loss"). The `is_minor` column is
-- declared in the Prisma schema and read by consent/minor-handling code;
-- on DBs where the user-minor migration never ran out-of-band, any
-- Prisma query selecting it throws. Idempotent.
ALTER TABLE IF EXISTS public."User"
  ADD COLUMN IF NOT EXISTS is_minor BOOLEAN NOT NULL DEFAULT FALSE;

CREATE TABLE IF NOT EXISTS public.marking_submissions (
  id                  UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id           UUID,
  student_id          UUID            NOT NULL,
  class_id            UUID,
  exam_board          TEXT            NOT NULL,
  essay_title         TEXT,
  essay_text          TEXT            NOT NULL,
  ai_grade            TEXT,
  ai_confidence       DOUBLE PRECISION CHECK (ai_confidence IS NULL OR (ai_confidence >= 0 AND ai_confidence <= 1)),
  ai_feedback         TEXT,
  ai_band_marks       JSONB           NOT NULL DEFAULT '[]'::jsonb,
  status              TEXT            NOT NULL DEFAULT 'pending',
  submitted_at        TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
  teacher_grade       TEXT,
  teacher_comment     TEXT,
  teacher_reviewed_by UUID,
  teacher_reviewed_at TIMESTAMPTZ
);

-- FK-guarded refs — added only if the target table exists and the FK is
-- not already present (matches this repo's order-robust migration style).
DO $$ BEGIN
  IF to_regclass('public.schools') IS NOT NULL THEN
    ALTER TABLE public.marking_submissions
      ADD CONSTRAINT marking_submissions_school_id_fkey
      FOREIGN KEY (school_id) REFERENCES public.schools(id) ON DELETE CASCADE;
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE public.marking_submissions
    ADD CONSTRAINT marking_submissions_student_id_fkey
    FOREIGN KEY (student_id) REFERENCES auth.users(id) ON DELETE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  IF to_regclass('public.classes') IS NOT NULL THEN
    ALTER TABLE public.marking_submissions
      ADD CONSTRAINT marking_submissions_class_id_fkey
      FOREIGN KEY (class_id) REFERENCES public.classes(id) ON DELETE SET NULL;
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  IF to_regclass('public.school_members') IS NOT NULL THEN
    ALTER TABLE public.marking_submissions
      ADD CONSTRAINT marking_submissions_teacher_reviewed_by_fkey
      FOREIGN KEY (teacher_reviewed_by) REFERENCES public.school_members(id) ON DELETE SET NULL;
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE INDEX IF NOT EXISTS idx_marking_submissions_school_submitted
  ON public.marking_submissions(school_id, submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_marking_submissions_student
  ON public.marking_submissions(student_id);
CREATE INDEX IF NOT EXISTS idx_marking_submissions_class
  ON public.marking_submissions(class_id);

ALTER TABLE public.marking_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "marking_submissions_service_role_all"      ON public.marking_submissions;
DROP POLICY IF EXISTS "marking_submissions_school_admins_select"  ON public.marking_submissions;
DROP POLICY IF EXISTS "marking_submissions_teachers_select"       ON public.marking_submissions;
DROP POLICY IF EXISTS "marking_submissions_students_select"       ON public.marking_submissions;

CREATE POLICY "marking_submissions_service_role_all"
  ON public.marking_submissions FOR ALL TO service_role
  USING (true) WITH CHECK (true);

DO $$ BEGIN
  IF to_regclass('public.school_members') IS NOT NULL THEN
    EXECUTE $p$
      CREATE POLICY "marking_submissions_school_admins_select"
        ON public.marking_submissions FOR SELECT TO authenticated
        USING (EXISTS (
          SELECT 1 FROM public.school_members sm
          WHERE sm.school_id = marking_submissions.school_id
            AND sm.user_id = auth.uid()
            AND sm.invite_status = 'accepted'
            AND sm.role IN ('admin','head_of_department')))
    $p$;
    EXECUTE $p$
      CREATE POLICY "marking_submissions_teachers_select"
        ON public.marking_submissions FOR SELECT TO authenticated
        USING (EXISTS (
          SELECT 1 FROM public.school_members sm
          JOIN public.classes c ON c.school_id = sm.school_id AND c.teacher_id = sm.id
          JOIN public.class_students cs ON cs.class_id = c.id
            AND cs.student_id = marking_submissions.student_id AND cs.is_active = TRUE
          WHERE sm.user_id = auth.uid() AND sm.role = 'teacher'
            AND sm.invite_status = 'accepted' AND sm.school_id = marking_submissions.school_id
            AND (marking_submissions.class_id IS NULL OR c.id = marking_submissions.class_id)))
    $p$;
  END IF;
END $$;

CREATE POLICY "marking_submissions_students_select"
  ON public.marking_submissions FOR SELECT TO authenticated
  USING (auth.uid() = student_id);

-- ===========================================================================
-- 1. model_versions / prompt_versions / rubric_versions  (config lookups)
-- ===========================================================================

CREATE TABLE IF NOT EXISTS public.model_versions (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  provider      TEXT        NOT NULL,
  model_name    TEXT        NOT NULL,
  model_version TEXT        NOT NULL,
  temperature   DOUBLE PRECISION,
  settings      JSONB       NOT NULL DEFAULT '{}'::jsonb,
  is_active     BOOLEAN     NOT NULL DEFAULT TRUE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (provider, model_name, model_version)
);

CREATE TABLE IF NOT EXISTS public.rubric_versions (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  mark_scheme_id TEXT        NOT NULL,
  scheme_version TEXT        NOT NULL DEFAULT 'v1.0',
  content_hash   TEXT        NOT NULL,
  exam_board     TEXT,
  qualification  TEXT,
  source_url     TEXT,
  is_active      BOOLEAN     NOT NULL DEFAULT TRUE,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (mark_scheme_id, content_hash)
);

CREATE TABLE IF NOT EXISTS public.prompt_versions (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_key        TEXT        NOT NULL,
  subject           TEXT,
  exam_board        TEXT,
  question_type     TEXT,
  prompt_text       TEXT        NOT NULL,
  content_hash      TEXT        NOT NULL,
  rubric_version_id UUID        REFERENCES public.rubric_versions(id) ON DELETE SET NULL,
  active            BOOLEAN     NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (content_hash)
);

CREATE INDEX IF NOT EXISTS idx_prompt_versions_key ON public.prompt_versions(prompt_key, active);

-- Seed the currently-live model so every historical/new mark can reference a
-- row. ON CONFLICT keeps the migration replay-safe.
INSERT INTO public.model_versions (provider, model_name, model_version, temperature, settings, is_active)
VALUES ('anthropic', 'claude-sonnet-4-20250514', 'claude-sonnet-4-20250514', NULL,
        '{"max_tokens":4096,"timeout_ms":50000}'::jsonb, TRUE)
ON CONFLICT (provider, model_name, model_version) DO NOTHING;

-- ===========================================================================
-- 2. Extend marking_submissions — unified submission spine
-- ===========================================================================

-- B2C self-study has no school; allow NULL (FK stays, NULL permitted).
ALTER TABLE public.marking_submissions ALTER COLUMN school_id DROP NOT NULL;

-- Source discriminator: who/what created the submission.
ALTER TABLE public.marking_submissions
  ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'b2b_class';
DO $$ BEGIN
  ALTER TABLE public.marking_submissions
    ADD CONSTRAINT marking_submissions_source_check
    CHECK (source IN ('b2c_self', 'b2b_class'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Structured submission inputs (essay_text already holds the student answer).
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS qualification    TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS paper            TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS question_text    TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS question_type    TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS studied_text     TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS target_grade     TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS mark_scheme_id   TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS rubric_ref       TEXT;

-- Structured AI result (full MarkingResult JSON + denormalised hot fields).
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS ai_result            JSONB;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS ai_score             INTEGER;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS ai_max_marks         INTEGER;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS ai_grade_band        TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS ai_ao_breakdown      JSONB;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS ai_uncertainty_flags JSONB;

-- Versioning provenance (every AI mark records what produced it).
ALTER TABLE public.marking_submissions
  ADD COLUMN IF NOT EXISTS model_version_id  UUID REFERENCES public.model_versions(id)  ON DELETE SET NULL;
ALTER TABLE public.marking_submissions
  ADD COLUMN IF NOT EXISTS prompt_version_id UUID REFERENCES public.prompt_versions(id) ON DELETE SET NULL;
ALTER TABLE public.marking_submissions
  ADD COLUMN IF NOT EXISTS rubric_version_id UUID REFERENCES public.rubric_versions(id) ON DELETE SET NULL;

-- Final teacher decision (single-override inline; full history in
-- teacher_moderations). teacher_grade/teacher_comment/teacher_reviewed_*
-- already exist from the original migration.
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS final_teacher_mark        TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS final_teacher_feedback    TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS teacher_adjustment_reason TEXT;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS approved_by               UUID REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS approved_at               TIMESTAMPTZ;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS training_eligible         BOOLEAN;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS moderation_notes          TEXT;

-- Extend the status set. Old values (pending/ai_marked/teacher_reviewed) are
-- KEPT so existing rows stay valid; spec lifecycle values added.
ALTER TABLE public.marking_submissions
  DROP CONSTRAINT IF EXISTS marking_submissions_status_check;
ALTER TABLE public.marking_submissions
  ADD CONSTRAINT marking_submissions_status_check CHECK (status IN (
    'submitted', 'pending', 'ai_marked', 'teacher_review_required',
    'teacher_reviewed', 'approved', 'rejected',
    'training_ready', 'excluded_from_training'
  ));

CREATE INDEX IF NOT EXISTS idx_marking_submissions_status ON public.marking_submissions(status);
CREATE INDEX IF NOT EXISTS idx_marking_submissions_source ON public.marking_submissions(source);

-- ===========================================================================
-- 3. teacher_moderations — full reviewer-action history (training labels)
-- ===========================================================================

CREATE TABLE IF NOT EXISTS public.teacher_moderations (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id     UUID        NOT NULL REFERENCES public.marking_submissions(id) ON DELETE CASCADE,
  reviewer_user_id  UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewer_member_id UUID       REFERENCES public.school_members(id) ON DELETE SET NULL,
  decision          TEXT        NOT NULL
                    CHECK (decision IN ('approved', 'rejected', 'corrected', 'sent_back')),
  ai_grade          TEXT,
  teacher_grade     TEXT,
  ai_score          INTEGER,
  teacher_score     INTEGER,
  ao_corrections    JSONB,
  feedback_before   TEXT,
  feedback_after    TEXT,
  adjustment_reason TEXT,
  moderation_notes  TEXT,
  training_eligible BOOLEAN,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_teacher_moderations_submission ON public.teacher_moderations(submission_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_teacher_moderations_reviewer   ON public.teacher_moderations(reviewer_user_id);

-- ===========================================================================
-- 4. training_data — anonymised, consent-gated, service-role-only corpus
-- ===========================================================================
-- Stores NO student/teacher names, emails, DOB or raw school identifiers.
-- IDs are hashed. Rows are written only by prepareTrainingRecord() after a
-- teacher approval + consent check. Never client-readable.

CREATE TABLE IF NOT EXISTS public.training_data (
  id                       UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  anon_submission_id       TEXT        NOT NULL UNIQUE,
  source_submission_id     UUID        REFERENCES public.marking_submissions(id) ON DELETE SET NULL,
  exam_board               TEXT,
  qualification            TEXT,
  paper                    TEXT,
  question                 TEXT,
  question_type            TEXT,
  rubric_version           TEXT,
  student_answer           TEXT        NOT NULL,
  ai_predicted_mark        INTEGER,
  teacher_final_mark       INTEGER,
  mark_delta               INTEGER,
  ai_feedback              TEXT,
  teacher_final_feedback   TEXT,
  teacher_correction_reason TEXT,
  grade_band               TEXT,
  ao_scores                JSONB,
  confidence_score         DOUBLE PRECISION,
  approved_at              TIMESTAMPTZ,
  model_version            TEXT,
  prompt_version           TEXT,
  anon_school_id           TEXT,
  anon_class_id            TEXT,
  source                   TEXT,
  created_at               TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_training_data_board   ON public.training_data(exam_board, question_type);
CREATE INDEX IF NOT EXISTS idx_training_data_created ON public.training_data(created_at DESC);

-- ===========================================================================
-- 5. RLS — deny by default; service_role ALL; scoped SELECT where safe
-- ===========================================================================

ALTER TABLE public.model_versions      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prompt_versions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rubric_versions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_moderations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_data       ENABLE ROW LEVEL SECURITY;

DO $$
DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY['model_versions','prompt_versions','rubric_versions','teacher_moderations','training_data']
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', t || '_service_role_all', t);
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR ALL TO service_role USING (true) WITH CHECK (true)',
      t || '_service_role_all', t);
  END LOOP;
END $$;

-- teacher_moderations: reviewers/admins of the submission's school may read
-- (mirrors marking_submissions teacher/admin SELECT). training_data and the
-- *_versions tables have NO authenticated policy — service-role / admin
-- routes only.
DROP POLICY IF EXISTS "teacher_moderations_school_select" ON public.teacher_moderations;
CREATE POLICY "teacher_moderations_school_select"
  ON public.teacher_moderations
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.marking_submissions ms
      JOIN public.school_members sm
        ON sm.school_id = ms.school_id
       AND sm.user_id = auth.uid()
       AND sm.invite_status = 'accepted'
       AND sm.role IN ('admin', 'head_of_department', 'teacher')
      WHERE ms.id = teacher_moderations.submission_id
    )
  );

COMMENT ON TABLE public.model_versions      IS 'Smart IP: AI model/provider/settings provenance for every mark.';
COMMENT ON TABLE public.prompt_versions     IS 'Smart IP: versioned marking prompts (content-hash keyed) — improvable over time.';
COMMENT ON TABLE public.rubric_versions     IS 'Smart IP: rubric/mark-scheme version pointer (content-hash of the in-code scheme).';
COMMENT ON TABLE public.teacher_moderations IS 'Smart IP: full teacher review-action history per submission; the labelled training signal.';
COMMENT ON TABLE public.training_data       IS 'Smart IP: anonymised, consent-gated, teacher-approved fine-tuning corpus. Service-role only; no PII.';
