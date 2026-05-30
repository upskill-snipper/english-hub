-- Board-aware human marks: one additive nullable JSONB column on the existing
-- marking_submissions spine (plan: no parallel table). Holds the structured
-- non-GCSE human mark (IELTS criterion+overall bands, or KS3/EAL level) that
-- does not fit the TEXT `final_teacher_mark` grade. Additive only — no existing
-- column/type/default/NOT-NULL is touched, so the live GCSE write path is
-- byte-identical. Mirrors supabase/migrations/20260530_teacher_band_marks.sql.
ALTER TABLE "marking_submissions" ADD COLUMN IF NOT EXISTS "teacher_band_marks" jsonb;
