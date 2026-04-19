-- ─── Stripe webhook idempotency table (P0-DATA-3) ────────────────────────
--
-- Referenced by `src/app/api/stripe/webhook/route.ts:58` (idempotency
-- lookup) and `:346` (insert on successful processing). No CREATE TABLE
-- existed anywhere in committed migrations — the idempotency check has
-- been silently no-op (the `try/catch` in the handler swallows the
-- resulting error). That means:
--   1. A Stripe event delivered twice (e.g. retry after 503) could be
--      processed twice, double-granting pro access / double-recording
--      affiliate commissions / double-voiding refunds.
--   2. The "event already processed" short-circuit at :62-63 returns
--      `received: true` for an empty-table lookup, so nothing breaks
--      visibly — the regression is invisible until a duplicate fires.
--
-- Fix: create the table. The .select('event_id').single() call at :57-60
-- starts working correctly; the .insert at :346 also persists so future
-- deliveries of the same event_id short-circuit at :62-63.
--
-- The event_id PRIMARY KEY (Stripe event ids are unique strings like
-- `evt_1Nxyz...`) also gives us atomic idempotency: a concurrent second
-- delivery that also tries to INSERT will fail on the unique
-- constraint, which is the correct behaviour.
-- ──────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.webhook_events (
  event_id      TEXT PRIMARY KEY,
  event_type    TEXT NOT NULL,
  processed_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for housekeeping / reporting on event volume by type.
CREATE INDEX IF NOT EXISTS idx_webhook_events_type_processed
  ON public.webhook_events(event_type, processed_at DESC);

-- RLS: only the service role (which bypasses RLS) writes here; no
-- authenticated user ever needs to read this table. Enabling RLS with
-- no policies = deny-by-default for anon and authenticated.
ALTER TABLE public.webhook_events ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.webhook_events IS
  'Idempotency log for Stripe webhook deliveries. event_id is Stripe''s event id. A row here means the event has been fully processed and must not be processed again. Written only via service role in /api/stripe/webhook.';
