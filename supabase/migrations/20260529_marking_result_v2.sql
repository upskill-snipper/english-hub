-- Marking Engine V2 (plan P5.1): structured-result provenance columns on the
-- EXISTING marking_submissions spine (plan R-PERSIST — no parallel table).
--
-- ADDITIVE + IDEMPOTENT ONLY. Every column is nullable or defaulted, so:
--   * existing rows are untouched (no backfill, no rewrite, no lock-heavy change);
--   * the live GCSE write path (which never sets these) keeps working byte-for-byte;
--   * re-running the migration is safe (ADD COLUMN IF NOT EXISTS).
-- NO drops, NO NOT NULL on existing data, NO type changes to existing columns.
-- Mirrors prisma/migrations/20260529_marking_result_v2/migration.sql.
--
-- The full MarkingResultV2 continues to live in ai_result (jsonb) and the
-- code-owned overall confidence in ai_confidence; the columns below are the new
-- *queryable* projections the V2 result needs that did not already exist.
-- RLS is unchanged: these are additional columns on an already-RLS-protected
-- table, so existing owner/school-scoped policies cover them automatically.

BEGIN;

ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS result_schema_version integer;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS pack_version text;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS needs_human_review boolean;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS proposed_overall_band double precision;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS band_range jsonb;
ALTER TABLE public.marking_submissions ADD COLUMN IF NOT EXISTS marking_errors jsonb NOT NULL DEFAULT '[]'::jsonb;

-- Re-resolve marks to their exact pack version + slice analytics by it.
CREATE INDEX IF NOT EXISTS marking_submissions_pack_version_idx
  ON public.marking_submissions (pack_version);

COMMENT ON COLUMN public.marking_submissions.pack_version IS
  'FK to the exact immutable Knowledge Pack manifest.fullId (e.g. ielts_writing_v2025.1). Marking Engine V2 / P5.1.';
COMMENT ON COLUMN public.marking_submissions.needs_human_review IS
  'Code-owned IELTS spec §5.4 review-gate outcome. Marking Engine V2 / P5.1.';
COMMENT ON COLUMN public.marking_submissions.proposed_overall_band IS
  'Model-proposed overall band, retained for the §5.1 disagreement check + audit only (authoritative band is code-recomputed in ai_result). Marking Engine V2 / P5.1.';
COMMENT ON COLUMN public.marking_submissions.band_range IS
  'OQ-4 surfaced self-consistency [min,max] band range for borderline marks. Marking Engine V2 / P5.2.';
COMMENT ON COLUMN public.marking_submissions.marking_errors IS
  'Taxonomy-tagged errors projected from ai_result.errors for §4 analytics (engine taxonomy). Marking Engine V2 / P5.1.';

COMMIT;
