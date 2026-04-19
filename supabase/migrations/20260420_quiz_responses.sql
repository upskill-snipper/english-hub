-- ============================================================================
-- Migration: 20260420_quiz_responses.sql
-- Date: 2026-04-20
-- Source: Cycle 6 ANALYTICS follow-up (QA Cycle 1 follow-up, Agent-SCHEMA)
--
-- PURPOSE
-- -------
-- Create the per-question response log that the analytics engine's
-- `getQuestionDifficulty` and `getHardestQuestions` functions read from.
-- The Cycle 6 ANALYTICS agent flagged both as returning empty `[]` results
-- because this table did not exist — the queries had nothing to aggregate,
-- so every question looked equally (un)difficult.
--
-- This migration closes that follow-up by adding the table + supporting
-- indexes + RLS. The column definitions below were derived from the
-- analytics engine's projected shape (see `src/lib/analytics/questions.ts`
-- and related code, which already assumes these column names and types —
-- the functions simply return `[]` today rather than erroring, since they
-- guard against the missing relation).
--
-- DESIGN NOTES
-- ------------
-- * `question_id` is a free-form TEXT key rather than a FK. Quiz questions
--   live in source-code data files (the TypeScript content modules), not
--   in the DB — there is no `quiz_questions.id` on the Supabase side for
--   the product-content quiz bank. The DB-side `quiz_questions` table is
--   only for the course-content quizzes; other question sources use the
--   same key space but are not DB-backed. Keeping this unconstrained is
--   intentional.
-- * `module_id` IS foreign-keyed to `public.modules(id)` because that table
--   exists (defined in 001_initial_schema.sql:32) and not every response
--   belongs to a module (e.g. standalone practice quizzes) — hence nullable
--   + ON DELETE SET NULL so deleting a module doesn't drop the historical
--   response rows needed for long-term difficulty analytics.
-- * Kept Supabase-native (no Prisma model) because it links directly to
--   `auth.users` via FK — introducing a Prisma-side model would re-open the
--   User identity-convergence problem flagged in the Cycle 2 audit.
--
-- FOLLOW-UP (out of scope for this migration)
-- -------------------------------------------
-- A POST /api/quiz/response route handler still needs to be written to
-- INSERT into this table when a user answers a quiz question. Until that
-- handler ships the table will stay empty and analytics will continue
-- returning `[]` — but the schema is now in place so the handler PR is
-- a pure additive change.
-- ============================================================================


CREATE TABLE IF NOT EXISTS public.quiz_responses (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id         TEXT NOT NULL,
  module_id           TEXT REFERENCES public.modules(id) ON DELETE SET NULL,
  is_correct          BOOLEAN NOT NULL,
  time_taken_seconds  INTEGER NOT NULL CHECK (time_taken_seconds >= 0),
  attempted_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- Indexes
-- -------
-- (question_id) — aggregate "how hard is question X" queries across all users
CREATE INDEX IF NOT EXISTS idx_quiz_responses_question
  ON public.quiz_responses(question_id);

-- (user_id, attempted_at DESC) — per-user history / recent-activity timeline
CREATE INDEX IF NOT EXISTS idx_quiz_responses_user_attempted_at
  ON public.quiz_responses(user_id, attempted_at DESC);

-- (module_id, attempted_at DESC) — per-module aggregates
CREATE INDEX IF NOT EXISTS idx_quiz_responses_module_attempted_at
  ON public.quiz_responses(module_id, attempted_at DESC);


-- RLS
-- ---
-- Enable RLS. Policies below allow each user to INSERT and SELECT their own
-- rows. No UPDATE/DELETE policies are defined for anon/authenticated — any
-- admin paths (analytics aggregation, data-request export/erasure) must go
-- through the service role, which bypasses RLS.
ALTER TABLE public.quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users insert their own quiz responses"
  ON public.quiz_responses
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users view their own quiz responses"
  ON public.quiz_responses
  FOR SELECT
  USING (auth.uid() = user_id);


COMMENT ON TABLE public.quiz_responses IS
  'Per-question response log powering the analytics engine''s getQuestionDifficulty / getHardestQuestions. Added in Cycle 6 ANALYTICS follow-up. A POST /api/quiz/response handler must be added in a later PR to populate this table.';
