-- ─── Board-aware human marks — teacher_band_marks ─────────────────────────
--
-- Adds ONE additive, nullable JSONB column to the existing marking_submissions
-- spine so that non-GCSE human marks have a home. The board-aware marker
-- workbench (Stage 1: src/lib/marking/marking-shapes.ts) collects different
-- mark shapes per qualification:
--
--   • GCSE / IGCSE → a 9-1 grade (already stored in final_teacher_mark /
--                    teacher_grade) + per-AO marks (ao_corrections on
--                    teacher_moderations). UNCHANGED — those columns stay the
--                    source of truth for GCSE.
--   • IELTS        → four criterion bands (TR/CC/LR/GRA) + an overall band.
--   • KS3 / EAL    → a named working-level / proficiency stage.
--
-- The non-GCSE shapes don't fit a single TEXT grade, so this column holds the
-- structured human mark as JSON, e.g. for IELTS:
--   { "kind": "band", "overall": 6.5,
--     "criteria": { "TR": 6, "CC": 7, "LR": 6.5, "GRA": 6 } }
-- and for KS3/EAL:
--   { "kind": "level", "overall": "Secure" }
--
-- WHY a new column and not reuse final_teacher_mark: final_teacher_mark is a
-- TEXT grade consumed by the existing GCSE pay/QA/training paths and the 9-1
-- CHECK-style expectations. Overloading it with bands/levels would break those.
-- This column is purely additive: every existing read/write path ignores it,
-- so the live GCSE flow is byte-identical. The calibration loop (Phase 2) reads
-- this column for IELTS overall/criterion bands.
--
-- Style: idempotent / replay-safe (ADD COLUMN IF NOT EXISTS), additive only —
-- no change to any existing column, type, default, or NOT NULL. Depends on
-- marking_submissions (20260512 / 20260518); guarded so it is safe to run in
-- any order relative to them.
-- ──────────────────────────────────────────────────────────────────────────

ALTER TABLE public.marking_submissions
  ADD COLUMN IF NOT EXISTS teacher_band_marks JSONB;

COMMENT ON COLUMN public.marking_submissions.teacher_band_marks IS
  'Board-aware human mark for non-GCSE shapes (IELTS criterion+overall bands, '
  'KS3/EAL level). NULL for GCSE rows, which use final_teacher_mark instead. '
  'Shape: { kind: "band"|"level", overall, criteria? } — see marking-shapes.ts.';
