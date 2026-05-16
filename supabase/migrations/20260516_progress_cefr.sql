-- ─── progress_cefr — append-only CEFR placement-test results ──────────────
--
-- ⚠️  REVIEWABLE MIGRATION — DO NOT AUTO-APPLY.
--     This file is committed for human review and is applied manually by a
--     maintainer against Supabase/Postgres after sign-off. No tooling in
--     this repo runs it automatically.
--
-- Adds the durable home for the EAL CEFR diagnostic (Phase 3). Phase 1
-- shipped the deterministic placement test at /eal/diagnostic whose result
-- was only kept in sessionStorage — lost on tab close, invisible to
-- teacher/parent dashboards, and absent from the longitudinal data moat.
--
-- Modelled EXACTLY on `progress_reading_age` from
-- `20260512_progress_tables.sql` (the canonical reading-assessment table):
--   • Append-only — every diagnostic attempt is a new row. The trend over
--     time (did the learner climb A2 → B1 → B2?) is the analytical value;
--     rows are NEVER updated in place, so there is no per-user UPDATE/DELETE
--     policy (matching the reading-age convention).
--   • `user_id` is TEXT — the Prisma `User.id` cuid that `app_user_id()`
--     returns (see `20260421_00_app_user_id_fn_text_return.sql`), NOT a uuid.
--   • `session_id` is the UUID primary key (default gen_random_uuid()), so
--     multiple placements for the same learner are all preserved.
--   • RLS enabled with per-user owner-gated SELECT/INSERT via
--     `app_user_id()`, plus a full-access `service_role` policy for
--     server-side jobs (analytics aggregation, dashboard reads, the
--     client-side localStorage/sessionStorage backfill).
--   • Index style mirrors the reading-age table: per-user lookup and a
--     per-user recency index for "latest placement" / trend widgets.
--
-- Idempotent (CREATE TABLE IF NOT EXISTS / DROP POLICY IF EXISTS) — safe to
-- re-run. British English throughout; the Prisma schema will be regenerated
-- with `prisma db pull` in the same PR that applies this migration.
-- ──────────────────────────────────────────────────────────────────────────

-- ============================================================================
-- 1. progress_cefr — per-session CEFR placement results
-- ============================================================================
-- Source: sessionStorage 'eal-cefr-result' = { level, band, confidence,
-- compositePercentage, skills, ... , takenAt } produced by
-- src/lib/eal/cefr.ts calculateCEFRLevel(). Append-only: each completed
-- diagnostic is a new row keyed by session_id, exactly like
-- progress_reading_age.
CREATE TABLE IF NOT EXISTS "progress_cefr" (
  "user_id"        TEXT        NOT NULL,
  "session_id"     UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Honest placement on the full ladder (A1..C2).
  "cefr_level"     TEXT        NOT NULL,
  -- Placement clamped to a product band that has content (A2..C1).
  "band"           TEXT        NOT NULL,
  -- Difficulty-weighted composite, 0–100.
  "composite_pct"  INTEGER,
  -- 0–100 confidence (consistency × coverage).
  "confidence"     INTEGER,
  -- Per-skill sub-scores (SkillBreakdown[]) as returned by the engine.
  "skills"         JSONB       NOT NULL DEFAULT '[]'::jsonb,
  -- When the learner completed the diagnostic (client clock).
  "taken_at"       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  -- When the row was written server-side.
  "created_at"     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS "progress_cefr_user_idx"
  ON "progress_cefr" ("user_id");

CREATE INDEX IF NOT EXISTS "progress_cefr_user_taken_idx"
  ON "progress_cefr" ("user_id", "taken_at" DESC);

COMMENT ON TABLE "progress_cefr" IS
  'Append-only per-session CEFR placement results. Source: sessionStorage eal-cefr-result (src/lib/eal/cefr.ts). Trend over time is the analytical value — never UPDATE in place. Mirrors progress_reading_age.';

-- ============================================================================
-- 2. Enable RLS (deny-by-default baseline)
-- ============================================================================
ALTER TABLE "progress_cefr" ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 3. RLS policies — progress_cefr
-- ============================================================================
-- Append-only owner gate: SELECT + INSERT for the row owner only, plus a
-- full-access service_role policy for server-side jobs and the one-shot
-- client backfill. NO UPDATE/DELETE policy for `authenticated` — the
-- longitudinal trend must be immutable (same as progress_reading_age, whose
-- append-only nature is enforced here by simply omitting those verbs).
-- `app_user_id()` is the TEXT-returning helper from
-- `20260421_00_app_user_id_fn_text_return.sql`.
DROP POLICY IF EXISTS "progress_cefr_select_own" ON "progress_cefr";
CREATE POLICY "progress_cefr_select_own" ON "progress_cefr"
  FOR SELECT TO authenticated
  USING ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_cefr_insert_own" ON "progress_cefr";
CREATE POLICY "progress_cefr_insert_own" ON "progress_cefr"
  FOR INSERT TO authenticated
  WITH CHECK ("user_id" = (SELECT app_user_id()));

DROP POLICY IF EXISTS "progress_cefr_service_all" ON "progress_cefr";
CREATE POLICY "progress_cefr_service_all" ON "progress_cefr"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ──────────────────────────────────────────────────────────────────────────
-- Rollback block (commented — execute manually if needed)
-- ──────────────────────────────────────────────────────────────────────────
-- DROP TABLE IF EXISTS "progress_cefr";
