-- ─── IELTS entitlement — a distinct paid access flag ──────────────────────
--
-- IELTS is sold as its own subscription (separate price point from the general
-- Student/GCSE plan). The platform's existing entitlement is ONE global
-- profiles.subscription_status='pro' flag that unlocks everything; if IELTS rode
-- on that, a £3.99 Student subscriber would get premium IELTS feedback free and
-- a dedicated IELTS subscriber would get all GCSE marking. So IELTS gets its own
-- entitlement column.
--
-- profiles.ielts_status:
--   'free'   — no IELTS entitlement (default)
--   'active' — a live/ trialing IELTS subscription (set by the Stripe webhook
--              when the subscribed price is an IELTS price; cleared to 'free'
--              on cancellation)
--
-- GRANDFATHERING: hasIeltsAccess() (course-access.ts) treats EITHER
-- ielts_status='active' OR the legacy global subscription_status='pro' as IELTS
-- access, so every existing all-access 'pro' customer keeps IELTS — nobody loses
-- a feature. New IELTS-only subscribers get access via ielts_status without
-- being granted GCSE access (their subscription_status stays non-'pro').
--
-- Additive + idempotent: ADD COLUMN IF NOT EXISTS, default 'free'. No existing
-- column/row is changed, so every current gate behaves exactly as before.

ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS ielts_status TEXT NOT NULL DEFAULT 'free';

COMMENT ON COLUMN public.profiles.ielts_status IS
  'IELTS-specific paid entitlement: ''free'' | ''active''. Distinct from the '
  'global subscription_status. Set ''active'' by the Stripe webhook for IELTS '
  'prices; hasIeltsAccess() also honours legacy subscription_status=''pro''.';
