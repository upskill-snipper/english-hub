-- ─── RevenueCatEvent — idempotency-key index on payload->>'id' ───────────
--
-- The webhook route (`/api/revenuecat/webhook`) performs a $queryRaw-based
-- dedupe lookup keyed on the RevenueCat event id extracted from the JSON
-- payload — `payload->>'id'`. Without this index that lookup is a full
-- table scan; as the journal grows the dedupe path becomes the hottest
-- write-path bottleneck in the handler.
--
-- A btree index on the JSON extraction expression keeps the lookup at
-- O(log n) without requiring a separate dedupe column or a schema change.
-- See webhook route agent ASSUMPTION(W4) #6.
--
-- `IF NOT EXISTS` keeps re-runs idempotent.
-- ──────────────────────────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS "RevenueCatEvent_payload_id_idx"
  ON "RevenueCatEvent"
  USING btree ((payload->>'id'));

COMMENT ON INDEX "RevenueCatEvent_payload_id_idx" IS
  'Supports idempotent webhook dedupe by RevenueCat event id (payload->>''id''). Read by $queryRaw in /api/revenuecat/webhook.';

-- ──────────────────────────────────────────────────────────────────────────
-- Rollback block (commented — execute manually if needed)
-- ──────────────────────────────────────────────────────────────────────────
-- DROP INDEX IF EXISTS "RevenueCatEvent_payload_id_idx";
