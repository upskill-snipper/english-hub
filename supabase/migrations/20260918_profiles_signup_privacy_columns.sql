-- ─── profiles: the ten columns the signup page has always written ──────────
--
-- THE DEFECT (found 18 September 2026, verified against information_schema)
-- src/app/auth/register/page.tsx upserts the new user's profile with
-- date_of_birth, is_minor, role, year_group, exam_board, school_name,
-- parent_guardian_email, the UTM triple, and ten privacy and residency
-- columns. Those ten columns were never created by any migration:
--
--   streaks_enabled, personalised_recommendations, streak_notifications,
--   nudge_notifications, analytics_opt_in, marketing_opt_in,
--   social_share_nudge, country, data_transfer_consent_qa,
--   data_transfer_consent_qa_at
--
-- PostgREST rejects the whole statement when any column is unknown, the page
-- logs the error as "non-blocking" and the signup proceeds. So for every one
-- of the 206 accounts the profile row holds only what the auth trigger
-- inserted (id, email, full_name) plus column defaults: date_of_birth NULL on
-- 206 of 206, is_minor false on 206 of 206, utm_* NULL on 206 of 206 while 11
-- auth.users carry utm_source in their metadata, and role = 'student' (the
-- column default) for everyone, teachers included. The Children's Code
-- high-privacy defaults the page computes for under-18s were never stored.
-- docs/system/11 section 6 predicted this from the code alone.
--
-- THE FIX
-- Additive only. Add the ten columns with IF NOT EXISTS. No RLS policy is
-- touched (the existing "Users update own profile" policy already permits the
-- owner's upsert). Defaults are the adult defaults the page writes for an
-- adult; the page writes the child defaults explicitly for a minor. Backfill
-- of role, date of birth, board and attribution from auth.users metadata is a
-- separate, report-first script: scripts/backfill-profiles-from-auth-metadata.mjs.
--
-- Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS streaks_enabled              BOOLEAN NOT NULL DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS personalised_recommendations BOOLEAN NOT NULL DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS streak_notifications         BOOLEAN NOT NULL DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS nudge_notifications          BOOLEAN NOT NULL DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS analytics_opt_in             BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS marketing_opt_in             BOOLEAN NOT NULL DEFAULT FALSE,
  -- High-privacy default for everyone: a share prompt is opt-in.
  ADD COLUMN IF NOT EXISTS social_share_nudge           BOOLEAN NOT NULL DEFAULT FALSE,
  -- Declared country of residence (ISO 3166-1 alpha-2), for PDPPL (Qatar).
  ADD COLUMN IF NOT EXISTS country                      TEXT,
  ADD COLUMN IF NOT EXISTS data_transfer_consent_qa     BOOLEAN,
  ADD COLUMN IF NOT EXISTS data_transfer_consent_qa_at  TIMESTAMPTZ;

COMMENT ON COLUMN public.profiles.streaks_enabled IS
  'Children''s Code Standard 6: false by default for under-18s, written by the signup page.';
COMMENT ON COLUMN public.profiles.country IS
  'Declared country of residence, ISO 3166-1 alpha-2. Drives the PDPPL consent path when QA.';
