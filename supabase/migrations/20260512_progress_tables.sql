-- ─── Progress tracking tables — localStorage → Supabase migration ────────
--
-- Migrates the four progress-tracking domains that previously lived only in
-- the browser's localStorage to first-class Postgres tables. This unlocks:
--   • Cross-device continuity (a pupil starts on a school PC, finishes on an
--     iPad at home)
--   • Teacher / parent dashboards that read authoritative server state
--   • A real data moat: aggregated learning telemetry that no competitor has
--
-- Tables added (all idempotent — safe to re-run):
--   • progress_poems         ← localStorage key: 'eh:poems:*'
--   • progress_games         ← localStorage key: 'eh:games:*'
--   • progress_quizzes       ← localStorage key: 'eh:quizzes:*'
--   • progress_reading_age   ← localStorage key: 'eh:readingAge:sessions'
--
-- user_id is TEXT to match the Prisma User.id cuid that `app_user_id()`
-- (see `20260421_00_app_user_id_fn_text_return.sql`) returns. RLS policies
-- mirror the OfflineEssayQueueItem pattern from
-- `20260420_01_revenuecat_mobile.sql`: per-row owner gate on every verb,
-- plus a service_role full-access policy for server-side jobs and the
-- one-shot client-side localStorage backfill that the web app will run on
-- first authenticated load.
--
-- All `created_at` / `last_*_at` timestamps are TIMESTAMPTZ for tz safety.
-- Indexes cover the obvious read paths: per-user lookup and recency sorts
-- for the "recently active" dashboard widgets.
--
-- British English throughout; Prisma side will be regenerated with
-- `prisma db pull` in the same PR.
-- ──────────────────────────────────────────────────────────────────────────

-- ============================================================================
-- 1. progress_poems — per-user poem study state
-- ============================================================================
-- Source: localStorage 'eh:poems:<slug>' = { board, status, annotatedLines,
-- lastSeenAt }. Composite PK (user_id, poem_slug) gives idempotent upsert
-- semantics from the client backfill loop.
CREATE TABLE IF NOT EXISTS "progress_poems" (
  "user_id"          TEXT        NOT NULL,
  "poem_slug"        TEXT        NOT NULL,
  "board"            TEXT,
  "status"           TEXT        NOT NULL CHECK ("status" IN ('seen', 'studied', 'memorised')),
  "annotated_lines"  INTEGER     NOT NULL DEFAULT 0,
  "last_seen_at"     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("user_id", "poem_slug")
);

CREATE INDEX IF NOT EXISTS "progress_poems_user_idx"
  ON "progress_poems" ("user_id");

CREATE INDEX IF NOT EXISTS "progress_poems_user_lastseen_idx"
  ON "progress_poems" ("user_id", "last_seen_at" DESC);

COMMENT ON TABLE "progress_poems" IS
  'Per-user poem study progress. Migrated from localStorage key eh:poems:<slug>. Composite PK on (user_id, poem_slug) supports idempotent client backfill upsert.';

-- ============================================================================
-- 2. progress_games — per-user mini-game telemetry
-- ============================================================================
-- Source: localStorage 'eh:games:<slug>' = { bestScore, totalPlays,
-- totalTimeSeconds, lastPlayedAt }. Aggregated counters; no per-play row.
CREATE TABLE IF NOT EXISTS "progress_games" (
  "user_id"             TEXT        NOT NULL,
  "game_slug"           TEXT        NOT NULL,
  "best_score"          INTEGER     NOT NULL DEFAULT 0,
  "total_plays"         INTEGER     NOT NULL DEFAULT 0,
  "total_time_seconds"  INTEGER     NOT NULL DEFAULT 0,
  "last_played_at"      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("user_id", "game_slug")
);

CREATE INDEX IF NOT EXISTS "progress_games_user_idx"
  ON "progress_games" ("user_id");

CREATE INDEX IF NOT EXISTS "progress_games_user_lastplayed_idx"
  ON "progress_games" ("user_id", "last_played_at" DESC);

COMMENT ON TABLE "progress_games" IS
  'Per-user mini-game progress (best score, total plays, total time). Migrated from localStorage key eh:games:<slug>. Aggregated counters only — no per-play row.';

-- ============================================================================
-- 3. progress_quizzes — per-user quiz attempts summary
-- ============================================================================
-- Source: localStorage 'eh:quizzes:<id>' = { attempts, bestScore, lastScore,
-- completedAt }. Detailed per-question responses live in `quiz_responses`.
CREATE TABLE IF NOT EXISTS "progress_quizzes" (
  "user_id"       TEXT        NOT NULL,
  "quiz_id"       TEXT        NOT NULL,
  "attempts"      INTEGER     NOT NULL DEFAULT 0,
  "best_score"    INTEGER     NOT NULL DEFAULT 0,
  "last_score"    INTEGER     NOT NULL DEFAULT 0,
  "completed_at"  TIMESTAMPTZ,
  PRIMARY KEY ("user_id", "quiz_id")
);

CREATE INDEX IF NOT EXISTS "progress_quizzes_user_idx"
  ON "progress_quizzes" ("user_id");

CREATE INDEX IF NOT EXISTS "progress_quizzes_user_completed_idx"
  ON "progress_quizzes" ("user_id", "completed_at" DESC);

COMMENT ON TABLE "progress_quizzes" IS
  'Per-user quiz attempt summary. Migrated from localStorage key eh:quizzes:<id>. Per-question responses live in quiz_responses.';

-- ============================================================================
-- 4. progress_reading_age — per-session reading-age assessment results
-- ============================================================================
-- Source: localStorage 'eh:readingAge:sessions' = [{ passageId,
-- readingAgeYears, comprehensionScore, timeSeconds, completedAt }, ...].
-- Append-only: each session is a new row; the trend over time is the data
-- moat. session_id is the PK so multiple sessions per (user, passage) are
-- preserved.
CREATE TABLE IF NOT EXISTS "progress_reading_age" (
  "user_id"              TEXT        NOT NULL,
  "session_id"           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  "passage_id"           TEXT        NOT NULL,
  "reading_age_years"    NUMERIC,
  "comprehension_score"  INTEGER,
  "time_seconds"         INTEGER,
  "completed_at"         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS "progress_reading_age_user_idx"
  ON "progress_reading_age" ("user_id");

CREATE INDEX IF NOT EXISTS "progress_reading_age_user_completed_idx"
  ON "progress_reading_age" ("user_id", "completed_at" DESC);

COMMENT ON TABLE "progress_reading_age" IS
  'Append-only per-session reading-age assessment results. Migrated from localStorage key eh:readingAge:sessions. Trend over time is the analytical value — never UPDATE in place.';

-- ============================================================================
-- 5. Enable RLS on all four tables (deny-by-default baseline)
-- ============================================================================
ALTER TABLE "progress_poems"        ENABLE ROW LEVEL SECURITY;
ALTER TABLE "progress_games"        ENABLE ROW LEVEL SECURITY;
ALTER TABLE "progress_quizzes"      ENABLE ROW LEVEL SECURITY;
ALTER TABLE "progress_reading_age"  ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 6. RLS policies — progress_poems
-- ============================================================================
-- Owner-gated SELECT/INSERT/UPDATE/DELETE plus full-access service_role for
-- server-side jobs (analytics aggregations, teacher dashboard reads).
-- `app_user_id()` is the TEXT-returning helper installed by
-- `20260421_00_app_user_id_fn_text_return.sql`.
DROP POLICY IF EXISTS "progress_poems_select_own" ON "progress_poems";
CREATE POLICY "progress_poems_select_own" ON "progress_poems"
  FOR SELECT TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_poems_insert_own" ON "progress_poems";
CREATE POLICY "progress_poems_insert_own" ON "progress_poems"
  FOR INSERT TO authenticated
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_poems_update_own" ON "progress_poems";
CREATE POLICY "progress_poems_update_own" ON "progress_poems"
  FOR UPDATE TO authenticated
  USING ("user_id" = (SELECT app_user_id()))
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_poems_delete_own" ON "progress_poems";
CREATE POLICY "progress_poems_delete_own" ON "progress_poems"
  FOR DELETE TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_poems_service_all" ON "progress_poems";
CREATE POLICY "progress_poems_service_all" ON "progress_poems"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ============================================================================
-- 7. RLS policies — progress_games
-- ============================================================================
DROP POLICY IF EXISTS "progress_games_select_own" ON "progress_games";
CREATE POLICY "progress_games_select_own" ON "progress_games"
  FOR SELECT TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_games_insert_own" ON "progress_games";
CREATE POLICY "progress_games_insert_own" ON "progress_games"
  FOR INSERT TO authenticated
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_games_update_own" ON "progress_games";
CREATE POLICY "progress_games_update_own" ON "progress_games"
  FOR UPDATE TO authenticated
  USING ("user_id" = (SELECT app_user_id()))
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_games_delete_own" ON "progress_games";
CREATE POLICY "progress_games_delete_own" ON "progress_games"
  FOR DELETE TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_games_service_all" ON "progress_games";
CREATE POLICY "progress_games_service_all" ON "progress_games"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ============================================================================
-- 8. RLS policies — progress_quizzes
-- ============================================================================
DROP POLICY IF EXISTS "progress_quizzes_select_own" ON "progress_quizzes";
CREATE POLICY "progress_quizzes_select_own" ON "progress_quizzes"
  FOR SELECT TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_quizzes_insert_own" ON "progress_quizzes";
CREATE POLICY "progress_quizzes_insert_own" ON "progress_quizzes"
  FOR INSERT TO authenticated
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_quizzes_update_own" ON "progress_quizzes";
CREATE POLICY "progress_quizzes_update_own" ON "progress_quizzes"
  FOR UPDATE TO authenticated
  USING ("user_id" = (SELECT app_user_id()))
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_quizzes_delete_own" ON "progress_quizzes";
CREATE POLICY "progress_quizzes_delete_own" ON "progress_quizzes"
  FOR DELETE TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_quizzes_service_all" ON "progress_quizzes";
CREATE POLICY "progress_quizzes_service_all" ON "progress_quizzes"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ============================================================================
-- 9. RLS policies — progress_reading_age
-- ============================================================================
DROP POLICY IF EXISTS "progress_reading_age_select_own" ON "progress_reading_age";
CREATE POLICY "progress_reading_age_select_own" ON "progress_reading_age"
  FOR SELECT TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_reading_age_insert_own" ON "progress_reading_age";
CREATE POLICY "progress_reading_age_insert_own" ON "progress_reading_age"
  FOR INSERT TO authenticated
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_reading_age_update_own" ON "progress_reading_age";
CREATE POLICY "progress_reading_age_update_own" ON "progress_reading_age"
  FOR UPDATE TO authenticated
  USING ("user_id" = (SELECT app_user_id()))
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_reading_age_delete_own" ON "progress_reading_age";
CREATE POLICY "progress_reading_age_delete_own" ON "progress_reading_age"
  FOR DELETE TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_reading_age_service_all" ON "progress_reading_age";
CREATE POLICY "progress_reading_age_service_all" ON "progress_reading_age"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ──────────────────────────────────────────────────────────────────────────
-- Rollback block (commented — execute manually if needed)
-- ──────────────────────────────────────────────────────────────────────────
-- DROP TABLE IF EXISTS "progress_reading_age";
-- DROP TABLE IF EXISTS "progress_quizzes";
-- DROP TABLE IF EXISTS "progress_games";
-- DROP TABLE IF EXISTS "progress_poems";
