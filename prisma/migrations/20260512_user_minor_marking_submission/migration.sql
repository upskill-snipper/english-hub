-- ─── User.is_minor + MarkingSubmission table ──────────────────────────────
--
-- 1. Adds `is_minor` (BOOLEAN) to `User`. The /api/auth/register handler
--    has been writing to this column since 2026-04 but the column was
--    never created — so every signup currently silently drops the value.
--    DEFAULT FALSE so existing rows back-fill safely (most accounts are
--    adult / have already passed the age check elsewhere).
--
-- 2. Creates `marking_submissions` — one row per student essay flowing
--    through the school marking pipeline. Read/written by
--    `/api/school/marking` and `/api/school/marking/override`.
--    The Prisma model lives in schema.prisma; the route uses Supabase
--    directly so RLS (Supabase mirror migration) does the auth work.
-- ──────────────────────────────────────────────────────────────────────

-- 1. is_minor column on User --------------------------------------------------

ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS "is_minor" BOOLEAN NOT NULL DEFAULT FALSE;

-- 2. marking_submissions ------------------------------------------------------

CREATE TABLE IF NOT EXISTS "marking_submissions" (
    "id"                  UUID            NOT NULL DEFAULT gen_random_uuid(),
    "school_id"           UUID            NOT NULL,
    "student_id"          UUID            NOT NULL,
    "class_id"            UUID,
    "exam_board"          TEXT            NOT NULL,
    "essay_title"         TEXT,
    "essay_text"          TEXT            NOT NULL,
    "ai_grade"            TEXT,
    "ai_confidence"       DOUBLE PRECISION,
    "ai_feedback"         TEXT,
    "ai_band_marks"       JSONB           NOT NULL DEFAULT '[]'::jsonb,
    "status"              TEXT            NOT NULL DEFAULT 'pending',
    "submitted_at"        TIMESTAMPTZ(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teacher_grade"       TEXT,
    "teacher_comment"     TEXT,
    "teacher_reviewed_by" UUID,
    "teacher_reviewed_at" TIMESTAMPTZ(6),

    CONSTRAINT "marking_submissions_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "marking_submissions_status_check"
      CHECK ("status" IN ('pending', 'ai_marked', 'teacher_reviewed')),
    CONSTRAINT "marking_submissions_ai_confidence_check"
      CHECK ("ai_confidence" IS NULL OR ("ai_confidence" >= 0 AND "ai_confidence" <= 1))
);

-- Foreign keys against Supabase-managed tables. Wrapped in DO blocks so
-- the migration is replay-safe and tolerant of out-of-order applies on
-- a fresh DB where the school tables haven't been created yet.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'schools') THEN
    EXECUTE 'ALTER TABLE "marking_submissions"
      ADD CONSTRAINT "marking_submissions_school_id_fkey"
      FOREIGN KEY ("school_id") REFERENCES public.schools("id") ON DELETE CASCADE';
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'classes') THEN
    EXECUTE 'ALTER TABLE "marking_submissions"
      ADD CONSTRAINT "marking_submissions_class_id_fkey"
      FOREIGN KEY ("class_id") REFERENCES public.classes("id") ON DELETE SET NULL';
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'school_members') THEN
    EXECUTE 'ALTER TABLE "marking_submissions"
      ADD CONSTRAINT "marking_submissions_teacher_reviewed_by_fkey"
      FOREIGN KEY ("teacher_reviewed_by") REFERENCES public.school_members("id") ON DELETE SET NULL';
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Indexes -------------------------------------------------------------------

CREATE INDEX IF NOT EXISTS "marking_submissions_school_id_submitted_at_idx"
  ON "marking_submissions"("school_id", "submitted_at" DESC);

CREATE INDEX IF NOT EXISTS "marking_submissions_student_id_idx"
  ON "marking_submissions"("student_id");

CREATE INDEX IF NOT EXISTS "marking_submissions_class_id_idx"
  ON "marking_submissions"("class_id");
