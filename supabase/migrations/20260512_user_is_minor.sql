-- ─── profiles.is_minor — ICO Children's Code age-at-signup flag ──────────
--
-- Adds a boolean column to `public.profiles` that flags accounts whose
-- age-at-signup was under 18. Written by `applyChildDefaults()` in
-- `src/lib/privacy/child-defaults.ts` immediately after registration:
--
--     supabase.from('profiles').update({ ...defaults, is_minor: true })
--
-- Purpose (ICO Children's Code — UK Age-Appropriate Design Code):
--   Flags accounts where age-at-signup < 18. Used by applyChildDefaults()
--   to gate streak / personalisation / analytics. Downstream RLS, growth
--   loops and analytics pipelines read this column to suppress retention
--   nudges, behavioural personalisation and third-party telemetry that
--   would not be lawful for a child user under the Code.
--
-- Idempotent — safe to re-run. If a previous deployment already added
-- the column (e.g. via the never-shipped migrations-pending/007 draft)
-- this becomes a no-op guard.
--
-- A separate `marking_submissions` migration is owned by Agent E1.
-- ──────────────────────────────────────────────────────────────────────────

-- 1. Column ----------------------------------------------------------------
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS is_minor boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.profiles.is_minor IS
  'ICO Children''s Code — flags accounts where age-at-signup < 18. '
  'Used by applyChildDefaults() to gate streak / personalisation / analytics.';

-- 2. Partial index ---------------------------------------------------------
-- The vast majority of rows are `false` (adult learners + teachers).
-- A partial index on the truthy minority keeps the index tiny while still
-- accelerating the only hot read path: "find all minor accounts" sweeps
-- run by privacy / safeguarding jobs and RLS predicates that gate
-- analytics for children.
CREATE INDEX IF NOT EXISTS profiles_is_minor_idx
  ON public.profiles (is_minor)
  WHERE is_minor = true;

-- ─── Rollback (manual, commented) ─────────────────────────────────────────
-- Run only if you need to fully revert this migration. Dropping the column
-- will break `applyChildDefaults()` and any RLS policy that references it,
-- so coordinate with the privacy / app team first.
--
-- BEGIN;
--   DROP INDEX IF EXISTS public.profiles_is_minor_idx;
--   ALTER TABLE public.profiles DROP COLUMN IF EXISTS is_minor;
-- COMMIT;
