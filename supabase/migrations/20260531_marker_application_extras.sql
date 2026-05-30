-- ─── Marker Application Extras ─────────────────────────────────────────────
--
-- Adds three optional fields captured during the self-service marker/examiner
-- application (src/app/marker/page.tsx → /api/marker/apply):
--   • linkedin_url          — applicant's LinkedIn profile (optional)
--   • cv_path               — storage key of the uploaded CV in the PRIVATE
--                             'marker-cvs' bucket (optional)
--   • marketing_consent     — OPT-IN consent (default false) for using the
--                             marker's anonymised performance/feedback for
--                             quality + marketing / proof-of-quality purposes
--   • marketing_consent_at  — timestamp consent was given (NULL if not given)
--
-- Also provisions a PRIVATE storage bucket for CVs. Uploads and reads happen
-- ONLY through the service-role client (which bypasses RLS), so NO storage RLS
-- policies are added — CVs must never be readable by anon/authenticated roles.
--
-- Style: idempotent / replay-safe. Safe to run before/after the markers table
-- exists (the ALTERs are no-ops if the table is missing — guarded below).
-- ──────────────────────────────────────────────────────────────────────────

-- 1. Extend public.markers with the three new application fields.
DO $$ BEGIN
  IF to_regclass('public.markers') IS NULL THEN
    RAISE NOTICE 'markers absent — run 20260519_marker_drive.sql first';
    RETURN;
  END IF;

  EXECUTE 'ALTER TABLE public.markers
    ADD COLUMN IF NOT EXISTS linkedin_url text';
  EXECUTE 'ALTER TABLE public.markers
    ADD COLUMN IF NOT EXISTS cv_path text';
  EXECUTE 'ALTER TABLE public.markers
    ADD COLUMN IF NOT EXISTS marketing_consent boolean NOT NULL DEFAULT false';
  EXECUTE 'ALTER TABLE public.markers
    ADD COLUMN IF NOT EXISTS marketing_consent_at timestamptz';
END $$;

COMMENT ON COLUMN public.markers.linkedin_url IS
  'Applicant''s LinkedIn profile URL (optional, captured at application).';
COMMENT ON COLUMN public.markers.cv_path IS
  'Storage key of the uploaded CV in the PRIVATE marker-cvs bucket (optional). Read via service-role signed URLs only.';
COMMENT ON COLUMN public.markers.marketing_consent IS
  'OPT-IN consent (default false) to use anonymised marking performance/feedback for quality + marketing purposes.';
COMMENT ON COLUMN public.markers.marketing_consent_at IS
  'Timestamp the marketing_consent was granted; NULL if never granted / withdrawn.';

-- 2. PRIVATE storage bucket for CVs. No public access, no RLS policies — all
--    access is via the service-role client which bypasses RLS.
INSERT INTO storage.buckets (id, name, public)
VALUES ('marker-cvs', 'marker-cvs', false)
ON CONFLICT (id) DO NOTHING;
