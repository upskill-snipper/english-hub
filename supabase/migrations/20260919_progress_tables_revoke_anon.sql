-- ─── progress_*: take the anon grants away ──────────────────────────────────
--
-- CONTEXT (19 September 2026)
--
-- `20260512_progress_tables.sql` was one of the 66 files that
-- `scripts/apply-migrations.mjs` inserted into `_migrations_applied` without
-- executing, under its BASELINE_CUTOFF. So four tables the product actively
-- queries - progress_poems, progress_games, progress_quizzes and
-- progress_reading_age - did not exist in the database while the tracker said
-- they did. `/api/progress/poems` and its siblings query them on every call,
-- and 48 references across src/ point at them.
--
-- That is why "Progress tracking and revision insights" was listed on the
-- cancellation page as something a customer would lose: the feature has never
-- worked in production. It is the third confirmed instance of CLAUDE.md's
-- structural fact 3 in two days.
--
-- The migration has now genuinely been run, and the tables exist with RLS
-- enabled and owner-scoped policies.
--
-- WHAT THIS FILE ADDS
--
-- Supabase's default is to grant `anon` and `authenticated` the full table
-- privilege set on anything in `public` and rely on RLS to filter rows. The
-- progress policies are scoped to `authenticated` and `service_role` only, so
-- `anon` matches no policy and can already read and write nothing. The grant
-- is therefore inert - but it is also the exact shape that made
-- `ielts_attempts` a live exposure yesterday, where RLS happened to be off.
--
-- These tables hold a named child's reading age, quiz scores and game history.
-- The publishable anon key is handed to every visitor's browser and should not
-- reach them under any circumstances, including a future change that switches
-- RLS off for a migration and forgets to switch it back.
--
-- `authenticated` keeps exactly the four verbs its policies use. TRUNCATE and
-- REFERENCES are removed: no browser-side code truncates a table.
--
-- Verified before writing: zero rows in all five tables, and no policy names
-- `anon`, so nothing depends on the grant being there.
--
-- Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

DO $$
DECLARE
  t text;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'progress_poems',
    'progress_games',
    'progress_quizzes',
    'progress_reading_age',
    'progress_cefr'
  ]
  LOOP
    IF EXISTS (
      SELECT 1 FROM pg_class c
      JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = 'public' AND c.relname = t AND c.relkind = 'r'
    ) THEN
      EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
      EXECUTE format('REVOKE ALL ON public.%I FROM anon', t);
      EXECUTE format('REVOKE ALL ON public.%I FROM authenticated', t);
      EXECUTE format(
        'GRANT SELECT, INSERT, UPDATE, DELETE ON public.%I TO authenticated', t
      );
    END IF;
  END LOOP;
END
$$;
