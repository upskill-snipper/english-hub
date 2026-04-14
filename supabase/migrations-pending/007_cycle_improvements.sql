-- ──────────────────────────────────────────────────────────────────────────────
-- 007_cycle_improvements.sql
--
-- Schema changes introduced during Cycles 1-2:
--
--   1. Child privacy columns on `profiles`
--      ICO Children's Code compliance — all behavioural nudges and personalised
--      recommendations are OFF by default for minors. The app layer (see
--      src/lib/privacy/child-defaults.ts) enforces these defaults at registration
--      time; the columns store the per-user overrides.
--
--   2. CookieConsent table
--      GDPR cookie consent audit log. One row per consent event (accept/reject/
--      custom). Keyed by a hashed visitor ID so we never store raw identifiers.
--
--   3. PrivacySettings.ai_opt_out column
--      Allows users to opt out of AI-powered features (essay marking,
--      recommendations). Required for ICO Children's Code Standard 11.
--
-- All statements use IF NOT EXISTS / DO $$ guards for idempotent re-runs.
-- ──────────────────────────────────────────────────────────────────────────────

-- ═══════════════════════════════════════════════════════════════════════════════
-- 1. Child privacy columns on profiles
-- ═══════════════════════════════════════════════════════════════════════════════

-- is_minor: derived at registration from date_of_birth; cached for fast RLS checks
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_minor BOOLEAN DEFAULT FALSE;

-- Streaks / gamification nudges — OFF by default for children
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS streaks_enabled BOOLEAN DEFAULT TRUE;

-- Personalised content recommendations — OFF by default for children
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS personalised_recommendations BOOLEAN DEFAULT TRUE;

-- Streak notifications (daily reminders)
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS streak_notifications BOOLEAN DEFAULT TRUE;

-- "Come back" / engagement nudge notifications
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS nudge_notifications BOOLEAN DEFAULT TRUE;

-- Analytics beyond strictly necessary
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS analytics_opt_in BOOLEAN DEFAULT FALSE;

-- Marketing emails and promotional messages
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS marketing_opt_in BOOLEAN DEFAULT FALSE;

-- Social share nudges after quiz completion — OFF for children (GAP-13B)
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS social_share_nudge BOOLEAN DEFAULT TRUE;

-- Index for RLS predicates that filter on is_minor
CREATE INDEX IF NOT EXISTS idx_profiles_is_minor ON public.profiles(is_minor) WHERE is_minor = TRUE;

-- ═══════════════════════════════════════════════════════════════════════════════
-- 2. CookieConsent table
-- ═══════════════════════════════════════════════════════════════════════════════
--
-- Mirrors Prisma model CookieConsent. Append-only audit log — no UPDATE/DELETE
-- policies for authenticated users.

CREATE TABLE IF NOT EXISTS public.cookie_consent (
  id          TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  visitor_id  TEXT NOT NULL,
  user_id     TEXT,                                          -- nullable (anonymous visitors)
  choice      TEXT NOT NULL CHECK (choice IN ('accept_all', 'reject_all', 'custom')),
  analytics   BOOLEAN NOT NULL DEFAULT FALSE,
  marketing   BOOLEAN NOT NULL DEFAULT FALSE,
  ip_hash     TEXT NOT NULL,                                 -- SHA-256 hash only, never raw IP
  user_agent  TEXT,
  consented_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  version     TEXT NOT NULL                                  -- consent UI version string
);

CREATE INDEX IF NOT EXISTS idx_cookie_consent_visitor  ON public.cookie_consent(visitor_id);
CREATE INDEX IF NOT EXISTS idx_cookie_consent_user     ON public.cookie_consent(user_id);
CREATE INDEX IF NOT EXISTS idx_cookie_consent_date     ON public.cookie_consent(consented_at);

-- RLS: users can read their own consent records; inserts via service role
ALTER TABLE public.cookie_consent ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS cookie_consent_select_own ON public.cookie_consent;
CREATE POLICY cookie_consent_select_own ON public.cookie_consent
  FOR SELECT TO authenticated
  USING (user_id = auth.uid()::TEXT);

-- Service role inserts (app-layer consent API uses service role client)
-- No INSERT policy for authenticated — consent is recorded server-side only.

-- ═══════════════════════════════════════════════════════════════════════════════
-- 3. PrivacySettings — add ai_opt_out column
-- ═══════════════════════════════════════════════════════════════════════════════
--
-- The privacy_settings table may already exist from the Prisma-managed schema.
-- We use DO $$ to check before altering.

DO $$ BEGIN
  -- Only add if the table exists (Prisma may have created it)
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'privacy_settings'
  ) THEN
    -- Add ai_opt_out if it doesn't already exist
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'privacy_settings'
        AND column_name = 'ai_opt_out'
    ) THEN
      ALTER TABLE public.privacy_settings ADD COLUMN ai_opt_out BOOLEAN NOT NULL DEFAULT FALSE;
    END IF;
  END IF;
END $$;

-- Also handle the Prisma-style camelCase table name if it was created that way
DO $$ BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'PrivacySettings'
  ) THEN
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'PrivacySettings'
        AND column_name = 'aiOptOut'
    ) THEN
      ALTER TABLE public."PrivacySettings" ADD COLUMN "aiOptOut" BOOLEAN NOT NULL DEFAULT FALSE;
    END IF;
  END IF;
END $$;

-- ═══════════════════════════════════════════════════════════════════════════════
-- Done
-- ═══════════════════════════════════════════════════════════════════════════════
COMMENT ON COLUMN public.profiles.is_minor IS 'TRUE for users under 16 at registration (ICO Children''s Code).';
COMMENT ON COLUMN public.profiles.streaks_enabled IS 'Gamification streaks. OFF by default for minors.';
COMMENT ON COLUMN public.profiles.personalised_recommendations IS 'AI-driven content recs. OFF by default for minors.';
COMMENT ON TABLE  public.cookie_consent IS 'GDPR cookie consent audit log — append-only.';
