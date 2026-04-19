-- ─── Human review requests — durable store (P1) ─────────────────────────
--
-- `/api/review/route.ts` previously appended to an in-memory `reviews`
-- array at `src/app/api/review/store.ts:21`. Every Vercel lambda cold
-- start or redeploy wiped the array, silently losing student review
-- requests. Cycle 2 regression sweep flagged this as P1 data-loss.
--
-- This migration adds a Supabase table that the route now writes to
-- and reads from. The Prisma `HumanReviewRequest` model (in
-- prisma/schema.prisma) is a richer representation keyed on
-- Prisma User / Essay / AIFeedback cuids, but those cuids don't
-- exist for Supabase-signed-up users (see the architectural note
-- in 20260420_user_supabase_user_id_backfill.sql). So we use a
-- Supabase-native table keyed on `auth.users(id)` instead, matching
-- the shape of the in-memory record in `src/app/api/review/store.ts`.
-- Prisma HumanReviewRequest can coexist for the Prisma-side flow
-- whenever that ships.
--
-- RLS: students can read/write only their own rows. Admin queries go
-- through the service role.
-- ──────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.human_review_requests (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_number    TEXT        UNIQUE NOT NULL,
  user_id             UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  essay_id            TEXT        NOT NULL,
  essay_title         TEXT        NOT NULL,
  reason              TEXT        NOT NULL
                      CHECK (reason IN ('inaccurate', 'unclear', 'unfair-score', 'missed-points', 'other')),
  detail              TEXT        NOT NULL,
  self_assessment     TEXT,
  status              TEXT        NOT NULL DEFAULT 'submitted'
                      CHECK (status IN ('submitted', 'under-review', 'completed')),
  reviewer_response   TEXT,
  timeline            JSONB       NOT NULL DEFAULT '[]'::jsonb,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_human_review_requests_user_id
  ON public.human_review_requests(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_human_review_requests_status
  ON public.human_review_requests(status);

-- RLS: deny-by-default; users see only their own.
ALTER TABLE public.human_review_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own review requests"
  ON public.human_review_requests FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own review requests"
  ON public.human_review_requests FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users cannot UPDATE or DELETE; admin moderation goes through service
-- role (bypasses RLS). This prevents a student from flipping their
-- request to 'completed' and writing their own reviewer_response.

-- updated_at trigger — reuses update_updated_at() helper from 001.
CREATE TRIGGER human_review_requests_updated_at
  BEFORE UPDATE ON public.human_review_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

COMMENT ON TABLE public.human_review_requests IS
  'Student-initiated review requests for AI essay feedback. Wired from /api/review. RLS-scoped to the submitting user for read/insert; admin updates via service role.';
