-- ─── One queue of record for social posts ───────────────────────────────────
--
-- WHY (19 September 2026, AUTO-3). There are two posting calendars and they
-- disagree. `03 Social Media/Posting-Calendar.csv` holds 42 July rows and none
-- of the campaign; `12 Launch Campaign 2026/.../02-90-Day-Posting-Calendar.csv`
-- holds 408 rows, every one still marked Planned, 52 of them already lapsed.
-- The queue itself is a folder of markdown files. Nothing reconciles the three,
-- so the calendar drifts from the queue and the SOP's instruction to correct it
-- the same day is a manual job nobody has time for.
--
-- This table is the record. The CSVs are regenerated from it, so they cannot
-- disagree with it again.
--
-- IT HOLDS NO PERSONAL DATA. Platform, slug, body, schedule, status and the
-- claim report. No pupil, no teacher, no school, no email. That is why this
-- migration touches no RLS policy on any table holding children's data: it
-- creates a new one that has none.
--
-- NOTHING POSTS ITSELF. There is no `published` transition any code here can
-- make on its own. `status` moves to `approved` only through a human action,
-- and the publish step does not exist yet by design.
-- ────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.social_posts (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  platform        text NOT NULL,
  calendar_slug   text NOT NULL,
  pillar          text,
  audience        text,
  scheduled_at    timestamptz,

  status          text NOT NULL DEFAULT 'draft'
                  CHECK (status IN ('draft', 'approved', 'scheduled', 'published', 'failed', 'rejected')),

  body            text NOT NULL,
  alt_text        text,
  media_paths     text[] NOT NULL DEFAULT '{}',
  link_url        text,

  -- The output of `src/lib/social/claim-lint.ts`, stored so an approval has
  -- evidence behind it rather than a memory of one. The prose line "Claims
  -- check: verified 18 Aug 2026" is what this replaces.
  claim_report    jsonb,
  spec_check      text,

  created_by      text,
  approved_by     text,
  approved_at     timestamptz,
  rejection_reason text,

  external_id     text,
  published_url   text,
  metrics         jsonb,

  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),

  -- One row per slot. Re-drafting a slot updates it rather than adding a
  -- second row, which is what stops the queue growing a duplicate of every
  -- post the way the two CSVs did.
  CONSTRAINT social_posts_slot_unique UNIQUE (platform, calendar_slug)
);

COMMENT ON TABLE public.social_posts IS
  'Queue of record for social drafts (AUTO-3). Holds no personal data. Nothing in this schema publishes.';
COMMENT ON COLUMN public.social_posts.claim_report IS
  'Result of the deterministic claim lint at the moment of drafting. Evidence for an approval.';

CREATE INDEX IF NOT EXISTS social_posts_status_scheduled_idx
  ON public.social_posts (status, scheduled_at);
CREATE INDEX IF NOT EXISTS social_posts_platform_idx
  ON public.social_posts (platform);

-- Fail closed: RLS on, no policies, so only the service role reads or writes.
ALTER TABLE public.social_posts ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.social_posts FROM anon, authenticated;

-- `updated_at` maintained in the database rather than by every caller. Four of
-- the five `*_updated_at` triggers this repository declares were never actually
-- created (DATA-7), so this one is created here and verified after.
CREATE OR REPLACE FUNCTION public.social_posts_set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS social_posts_updated_at ON public.social_posts;
CREATE TRIGGER social_posts_updated_at
  BEFORE UPDATE ON public.social_posts
  FOR EACH ROW EXECUTE FUNCTION public.social_posts_set_updated_at();
