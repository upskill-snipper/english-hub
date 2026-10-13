-- ─── game_rounds and coach_reports: the record behind game analytics ────────
--
-- WHY THIS FILE EXISTS (13 October 2026)
--
-- The founder asked for every game to be "tracked and scored as detailed
-- analytics" for students and their schools, with AI feedback on strengths,
-- weaknesses and next revision steps. Until now no game result had ever
-- reached the database. GameShell posted {slug, score, time} to
-- /api/progress/games, which wrote the Supabase auth uuid into progress_games,
-- whose row rule admits only app_user_id(), the Prisma cuid. Every write since
-- May was refused and the browser ignored the refusal (CLAUDE.md structural
-- fact 1; production held 0 rows on 10 and 13 October). And a working save
-- would still have learned nothing about which questions were missed.
--
-- WHAT game_rounds HOLDS. One row per finished round of a skills game, or per
-- level or review of a set-text quest, for SIGNED-IN accounts only (a guest's
-- games stay in the browser and nothing is sent): which activity, when, how
-- many questions were answered and how many right, and per question a stable
-- id, the kind of skill it tests, whether it was right first time and, for a
-- wrong choice from a fixed list of options, the option chosen. Never anything
-- a student typed.
--
-- WHAT coach_reports HOLDS. AI-written feedback on those rounds: strengths,
-- what to work on and next steps, about one student, asked for by that student
-- or by one of their teachers. The model's reply as checked JSON, the window of
-- rounds it was written from and the model id. No grade.
--
-- KEYED ON THE AUTH UUID, as quiz_responses and practice_sessions are, with
-- ON DELETE CASCADE, so erasing the account (eraseSupabaseIdentity deletes
-- profiles and then auth.users) removes every row without a separate step.
--
-- SERVER-ONLY. Row-level security on, no policy for anon or authenticated, and
-- their grants revoked: the API routes read and write through the service role
-- after checking who is asking (a student reads their own; a teacher reads a
-- pupil in their scope). Nothing in a browser can reach these tables directly.
--
-- RETENTION. The data-retention cron deletes rounds older than 24 months (a
-- GCSE course is two years) and reports older than 12 months.
--
-- Idempotent, like every file after the runner's BASELINE_CUTOFF.
-- ────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.game_rounds (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- The browser's own id for the round, so a round sent twice (on finishing
  -- and again on leaving) is stored once.
  client_round_id  text NOT NULL CHECK (client_round_id ~ '^[A-Za-z0-9-]{8,64}$'),
  source           text NOT NULL CHECK (source IN ('skills', 'quest')),
  activity         text NOT NULL CHECK (activity ~ '^[a-z0-9][a-z0-9-]{0,79}$'),
  level            text CHECK (level IS NULL OR level ~ '^[A-Za-z0-9_.:-]{1,80}$'),
  answered         smallint NOT NULL CHECK (answered BETWEEN 0 AND 200),
  correct          smallint NOT NULL CHECK (correct BETWEEN 0 AND 200 AND correct <= answered),
  score            integer CHECK (score IS NULL OR score BETWEEN 0 AND 100000),
  max_score        integer CHECK (max_score IS NULL OR max_score BETWEEN 0 AND 100000),
  duration_seconds integer CHECK (duration_seconds IS NULL OR duration_seconds BETWEEN 0 AND 14400),
  items            jsonb NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(items) = 'array'),
  finished_at      timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS game_rounds_user_client_round_key
  ON public.game_rounds (user_id, client_round_id);

CREATE INDEX IF NOT EXISTS game_rounds_user_finished_idx
  ON public.game_rounds (user_id, finished_at DESC);

-- For the retention sweep.
CREATE INDEX IF NOT EXISTS game_rounds_finished_idx
  ON public.game_rounds (finished_at);

ALTER TABLE public.game_rounds ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public.game_rounds;
CREATE POLICY "service_role_full_access" ON public.game_rounds
  FOR ALL TO service_role USING (true) WITH CHECK (true);
REVOKE ALL ON public.game_rounds FROM anon, authenticated;

CREATE TABLE IF NOT EXISTS public.coach_reports (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  -- The student the report is about.
  user_id       uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- Who it was written for: the student themself, or their teacher.
  audience      text NOT NULL CHECK (audience IN ('student', 'teacher')),
  -- Who asked: the student, or the teacher (kept as null if that account goes).
  requested_by  uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  -- The school a teacher asked from; null when the student asked.
  school_id     uuid REFERENCES public.schools(id) ON DELETE CASCADE,
  window_start  timestamptz,
  window_end    timestamptz,
  answers_used  integer NOT NULL DEFAULT 0 CHECK (answers_used >= 0),
  report        jsonb NOT NULL CHECK (jsonb_typeof(report) = 'object'),
  model         text,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS coach_reports_user_created_idx
  ON public.coach_reports (user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS coach_reports_created_idx
  ON public.coach_reports (created_at);

ALTER TABLE public.coach_reports ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public.coach_reports;
CREATE POLICY "service_role_full_access" ON public.coach_reports
  FOR ALL TO service_role USING (true) WITH CHECK (true);
REVOKE ALL ON public.coach_reports FROM anon, authenticated;
