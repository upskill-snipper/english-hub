-- Marking Engine V2 (plan P5.1): structured-result provenance columns on the
-- EXISTING marking_submissions spine (plan R-PERSIST — no parallel table).
--
-- ADDITIVE + IDEMPOTENT ONLY. Every column is nullable or defaulted, so:
--   * existing rows are untouched (no backfill, no rewrite, no lock-heavy change);
--   * the live GCSE write path (which never sets these) keeps working byte-for-byte;
--   * re-running the migration is safe (ADD COLUMN IF NOT EXISTS).
-- NO drops, NO NOT NULL on existing data, NO type changes to existing columns.
-- Mirrors supabase/migrations/20260529_marking_result_v2.sql.
--
-- The full MarkingResultV2 continues to live in ai_result (jsonb) and the
-- code-owned overall confidence in ai_confidence; the columns below are the new
-- *queryable* projections the V2 result needs that did not already exist.

ALTER TABLE "marking_submissions" ADD COLUMN IF NOT EXISTS "result_schema_version" integer;
ALTER TABLE "marking_submissions" ADD COLUMN IF NOT EXISTS "pack_version" text;
ALTER TABLE "marking_submissions" ADD COLUMN IF NOT EXISTS "needs_human_review" boolean;
ALTER TABLE "marking_submissions" ADD COLUMN IF NOT EXISTS "proposed_overall_band" double precision;
ALTER TABLE "marking_submissions" ADD COLUMN IF NOT EXISTS "band_range" jsonb;
ALTER TABLE "marking_submissions" ADD COLUMN IF NOT EXISTS "marking_errors" jsonb NOT NULL DEFAULT '[]'::jsonb;

-- Re-resolve marks to their exact pack version + slice analytics by it.
CREATE INDEX IF NOT EXISTS "marking_submissions_pack_version_idx"
  ON "marking_submissions" ("pack_version");
