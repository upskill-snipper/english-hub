-- ─── cancellation_feedback: why people leave ────────────────────────────────
--
-- WHY THIS EXISTS (19 September 2026)
--
-- The four-step cancel page asks the customer why they are leaving and offers
-- a free-text box. Until today that answer went nowhere: /api/stripe/cancel
-- could not succeed at all (it demanded four fields the page never sent), and
-- once that was fixed the reason was written only into Stripe subscription
-- metadata, where it is capped, unqueryable and invisible to anyone not
-- opening the Stripe dashboard subscription by subscription.
--
-- Monthly GBP 3.99 and GBP 6.99 subscribers churn through exactly this door,
-- and the reasons they give are the only churn data this business will have
-- for months. Discarding them is the expensive part.
--
-- SHAPE
--
-- Additive: a new table, created with row-level security enabled from the
-- start. It touches no existing table and rewrites no existing policy.
--
-- `user_id` is the Supabase auth uuid, matching profiles.id, because this is
-- written from a route that has the session. It is NOT a Prisma cuid - see
-- CLAUDE.md structural fact 1.
--
-- WHAT IS DELIBERATELY NOT HERE: no email, no name, no Stripe customer id.
-- A churn reason joined to an identity is more personal data than the question
-- "why do people leave" requires, and this table will be read by a weekly
-- summary. The uuid is enough to join when there is a lawful reason to.
--
-- Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.cancellation_feedback (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- The chosen option from the cancel page's list.
  reason                 text,
  -- The free-text box. Capped so a paste cannot fill the table.
  feedback               text CHECK (feedback IS NULL OR length(feedback) <= 2000),
  -- Which subscription was being cancelled, for reconciliation against Stripe.
  stripe_subscription_id text,
  -- When their access actually ends, so a win-back can be timed off this table
  -- without going back to Stripe.
  access_ends_at         timestamptz,
  created_at             timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS cancellation_feedback_user_id_idx
  ON public.cancellation_feedback (user_id);
CREATE INDEX IF NOT EXISTS cancellation_feedback_created_at_idx
  ON public.cancellation_feedback (created_at DESC);

ALTER TABLE public.cancellation_feedback ENABLE ROW LEVEL SECURITY;

-- The publishable anon key must not reach this table at all.
REVOKE ALL ON public.cancellation_feedback FROM anon;

-- A signed-in person may read what they themselves submitted, and nothing
-- else. Writes come from the cancel route, which runs service-role and applies
-- its own authorisation, so `authenticated` gets no INSERT.
REVOKE ALL ON public.cancellation_feedback FROM authenticated;
GRANT SELECT ON public.cancellation_feedback TO authenticated;

DROP POLICY IF EXISTS "cancellation_feedback_service_role_all" ON public.cancellation_feedback;
DROP POLICY IF EXISTS "cancellation_feedback_owner_select"     ON public.cancellation_feedback;

CREATE POLICY "cancellation_feedback_service_role_all"
  ON public.cancellation_feedback FOR ALL TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "cancellation_feedback_owner_select"
  ON public.cancellation_feedback FOR SELECT TO authenticated
  USING (user_id = auth.uid());
