-- ─── Marker Marketing Anonymity ───────────────────────────────────────────
--
-- Adds an opt-in anonymity flag to the self-service marker/examiner application.
-- When a marker gives marketing_consent, they may ALSO choose to stay anonymous:
-- their qualifications and experience may be used for marketing / proof-of-
-- quality, but their name and identifying details must NOT be shown.
--
--   • marketing_anonymous  — when true (only meaningful alongside
--                            marketing_consent), marketing surfaces must use the
--                            marker's qualifications/experience WITHOUT their
--                            name or identifying details. Default false.
--
-- Style: idempotent / replay-safe. No-op if the markers table is absent.
-- ──────────────────────────────────────────────────────────────────────────

DO $$ BEGIN
  IF to_regclass('public.markers') IS NULL THEN
    RAISE NOTICE 'markers absent — run 20260519_marker_drive.sql first';
    RETURN;
  END IF;

  EXECUTE 'ALTER TABLE public.markers
    ADD COLUMN IF NOT EXISTS marketing_anonymous boolean NOT NULL DEFAULT false';
END $$;

COMMENT ON COLUMN public.markers.marketing_anonymous IS
  'OPT-IN (only with marketing_consent): use the marker''s qualifications/experience for marketing but NOT their name/identifying details. Default false.';
