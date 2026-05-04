-- Email subscribers table — captures email + magnet_slug pairs from
-- <EmailCaptureCard /> across study guides, blog posts, and lead-magnet
-- landing pages.
--
-- Designed to be GDPR/UK-DPA compliant out of the box:
--   - explicit consent_marketing flag with consent_at timestamp
--   - source_path captured for audit + analytics
--   - utm_* fields for campaign attribution
--   - UNIQUE(email, magnet_slug) prevents duplicates per magnet
--
-- See business-docs/EMAIL-CAPTURE-RUNBOOK.md for usage and deletion patterns.

CREATE TABLE IF NOT EXISTS public.email_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  magnet_slug TEXT,
  source_path TEXT,
  consent_marketing BOOLEAN NOT NULL DEFAULT false,
  consent_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (email, magnet_slug)
);

CREATE INDEX IF NOT EXISTS idx_email_subscribers_email
  ON public.email_subscribers (email);

CREATE INDEX IF NOT EXISTS idx_email_subscribers_magnet_slug
  ON public.email_subscribers (magnet_slug);

CREATE INDEX IF NOT EXISTS idx_email_subscribers_created_at
  ON public.email_subscribers (created_at);

-- RLS — only the service role can read/write. The /api/email/capture
-- endpoint uses the service role key to insert.
ALTER TABLE public.email_subscribers ENABLE ROW LEVEL SECURITY;

-- (No public SELECT/INSERT policy — table is service-role only.)

COMMENT ON TABLE public.email_subscribers IS
  'Email captures from <EmailCaptureCard />. Service-role-only RLS.';
