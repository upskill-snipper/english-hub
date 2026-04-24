-- ─── Wave 4 prerequisite — RevenueCat + mobile device schema delta ──────
--
-- Source of truth: `D:\Coding\english-hub-mobile\docs\DB_SCHEMA.md`.
--
-- Adds the additive, non-breaking schema needed by the mobile app:
--   • RevenueCat reconciliation fields on `Subscription`
--   • `SubscriptionPlatform` enum (WEB / IOS / ANDROID)
--   • Mobile telemetry columns on `User`
--   • `MobileDevice` — one row per (user, device); immutable identity
--   • `RevenueCatEvent` — append-only webhook journal for idempotent replay
--   • `OfflineEssayQueueItem` — on-device drafts awaiting reconnection
--
-- Everything here is idempotent: re-running the migration is a no-op. Every
-- new column is nullable or has a safe default, so existing web code paths
-- (Stripe checkout, cron renewal reminders, admin dashboards) are untouched.
--
-- `FeatureFlag` is intentionally deferred to a later wave — see DB_SCHEMA.md
-- §4.3. Triggers to maintain `User.mobile_device_count`, the `app_user_id()`
-- RLS helper, and pg_cron retention jobs are separate migrations that land
-- after this one. This file covers tables, columns, enum, indexes, and the
-- baseline RLS policies so the mobile client can be wired up end-to-end.
--
-- Prisma side is kept in sync in the same PR — see `prisma/schema.prisma`.
-- ──────────────────────────────────────────────────────────────────────────

-- ============================================================================
-- 1. SubscriptionPlatform enum — guarded create
-- ============================================================================
-- Using a DO block + EXCEPTION handler is the canonical idempotent enum
-- pattern in Postgres (CREATE TYPE has no IF NOT EXISTS). Re-running is safe.
DO $$ BEGIN
  CREATE TYPE "SubscriptionPlatform" AS ENUM ('WEB', 'IOS', 'ANDROID');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- ============================================================================
-- 2. Subscription — additive columns for RevenueCat reconciliation
-- ============================================================================
ALTER TABLE "Subscription"
  ADD COLUMN IF NOT EXISTS "revenuecat_app_user_id"  TEXT;

ALTER TABLE "Subscription"
  ADD COLUMN IF NOT EXISTS "revenuecat_product_id"   TEXT;

ALTER TABLE "Subscription"
  ADD COLUMN IF NOT EXISTS "platform"                "SubscriptionPlatform" NOT NULL DEFAULT 'WEB';

ALTER TABLE "Subscription"
  ADD COLUMN IF NOT EXISTS "original_purchase_date"  TIMESTAMPTZ;

COMMENT ON COLUMN "Subscription"."revenuecat_app_user_id" IS
  'RevenueCat stable subscriber identity (typically Supabase user UUID). Null for web-only Stripe rows.';
COMMENT ON COLUMN "Subscription"."revenuecat_product_id" IS
  'RevenueCat product id (e.g. eh_student_monthly_iap). Null for web-only Stripe rows.';
COMMENT ON COLUMN "Subscription"."platform" IS
  'Billing rail that owns the entitlement. WEB = Stripe (default), IOS/ANDROID = RevenueCat.';
COMMENT ON COLUMN "Subscription"."original_purchase_date" IS
  'RevenueCat original_purchase_date — used for lifetime-value reporting. Null for web-only rows.';

-- ============================================================================
-- 3. User — additive columns for mobile telemetry
-- ============================================================================
ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS "mobile_device_count"  INTEGER NOT NULL DEFAULT 0;

ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS "push_tokens"          JSONB   NOT NULL DEFAULT '[]'::jsonb;

ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS "last_mobile_version"  TEXT;

COMMENT ON COLUMN "User"."mobile_device_count" IS
  'Cached count of active (non-revoked) MobileDevice rows. Maintained by trigger in a follow-up migration.';
COMMENT ON COLUMN "User"."push_tokens" IS
  'Denormalised array of { token, platform, deviceId, addedAt } for Expo push fan-out. Authoritative per-device record lives in MobileDevice.';
COMMENT ON COLUMN "User"."last_mobile_version" IS
  'Most recent mobile app expo.version observed on login (e.g. 1.3.0).';

-- ============================================================================
-- 4. DevicePlatform enum — guarded create
-- ============================================================================
-- Mobile-only enum for `MobileDevice.platform`. Kept separate from
-- `SubscriptionPlatform` because a device is never "WEB" in practice, but
-- we retain WEB as a value for parity should the mobile app ever ship
-- a web PWA wrapper that registers itself as a device.
DO $$ BEGIN
  CREATE TYPE "DevicePlatform" AS ENUM ('IOS', 'ANDROID', 'WEB');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- ============================================================================
-- 5. MobileDevice — one row per (user, device), revoke-never-mutate identity
-- ============================================================================
CREATE TABLE IF NOT EXISTS "MobileDevice" (
  "id"             UUID             PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id"        TEXT             NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "device_id"      TEXT             NOT NULL,
  "platform"       "DevicePlatform" NOT NULL,
  "os_version"     TEXT,
  "app_version"    TEXT,
  "push_token"     TEXT,
  "last_active_at" TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  "created_at"     TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  "revoked_at"     TIMESTAMPTZ,
  CONSTRAINT "MobileDevice_user_device_unique" UNIQUE ("user_id", "device_id")
);

CREATE INDEX IF NOT EXISTS "MobileDevice_user_lastactive_idx"
  ON "MobileDevice" ("user_id", "last_active_at");

-- Partial index for the "active devices per user" hot path (paywall, push fan-out).
CREATE INDEX IF NOT EXISTS "MobileDevice_user_lastactive_active_idx"
  ON "MobileDevice" ("user_id", "last_active_at" DESC)
  WHERE "revoked_at" IS NULL;

COMMENT ON TABLE "MobileDevice" IS
  'Registered mobile devices per user. Reinstalls produce new deviceId (new row); revoke never mutates identity.';

-- ============================================================================
-- 6. RevenueCatEvent — append-only webhook journal
-- ============================================================================
CREATE TABLE IF NOT EXISTS "RevenueCatEvent" (
  "id"                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  "event_type"        TEXT        NOT NULL,
  "app_user_id"       TEXT        NOT NULL,
  "product_id"        TEXT,
  "payload"           JSONB       NOT NULL,
  "received_at"       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "processed_at"      TIMESTAMPTZ,
  "processing_error"  TEXT
);

CREATE INDEX IF NOT EXISTS "RevenueCatEvent_appuser_type_idx"
  ON "RevenueCatEvent" ("app_user_id", "event_type");

-- Partial index for the worker scan: pick up unprocessed events in order.
CREATE INDEX IF NOT EXISTS "RevenueCatEvent_unprocessed_idx"
  ON "RevenueCatEvent" ("received_at")
  WHERE "processed_at" IS NULL;

COMMENT ON TABLE "RevenueCatEvent" IS
  'Immutable journal for every inbound RevenueCat webhook. Persist BEFORE processing; enables idempotent replay on handler crash.';

-- ============================================================================
-- 7. OfflineEssayQueueItem — on-device drafts awaiting reconnection
-- ============================================================================
CREATE TABLE IF NOT EXISTS "OfflineEssayQueueItem" (
  "id"            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id"       TEXT        NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "device_id"     TEXT        NOT NULL,
  "payload"       JSONB       NOT NULL,
  "attempts"      INTEGER     NOT NULL DEFAULT 0,
  "created_at"    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "submitted_at"  TIMESTAMPTZ,
  "failed_at"     TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS "OfflineEssayQueueItem_user_created_idx"
  ON "OfflineEssayQueueItem" ("user_id", "created_at");

-- Partial index for the forwarding cron: pending rows only.
CREATE INDEX IF NOT EXISTS "OfflineEssayQueueItem_pending_idx"
  ON "OfflineEssayQueueItem" ("created_at")
  WHERE "submitted_at" IS NULL AND "failed_at" IS NULL;

COMMENT ON TABLE "OfflineEssayQueueItem" IS
  'Essays drafted on-device while offline. Server cron forwards submitted_at IS NULL rows to /api/mark.';

-- ============================================================================
-- 8. Indexes on Subscription additive columns (hot-path reads)
-- ============================================================================
-- Partial unique-ish index on RevenueCat app user id — nulls allowed; used
-- by the webhook handler to look up an existing row for upsert.
CREATE INDEX IF NOT EXISTS "Subscription_revenuecat_appuser_idx"
  ON "Subscription" ("revenuecat_app_user_id")
  WHERE "revenuecat_app_user_id" IS NOT NULL;

CREATE INDEX IF NOT EXISTS "Subscription_platform_status_idx"
  ON "Subscription" ("platform", "status");

-- ============================================================================
-- 9. Enable RLS on new tables + Subscription (deny-by-default baseline)
-- ============================================================================
ALTER TABLE "Subscription"           ENABLE ROW LEVEL SECURITY;
ALTER TABLE "MobileDevice"           ENABLE ROW LEVEL SECURITY;
ALTER TABLE "RevenueCatEvent"        ENABLE ROW LEVEL SECURITY;
ALTER TABLE "OfflineEssayQueueItem"  ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 10. RLS policies — Subscription
-- ============================================================================
-- Authenticated user can read their own subscription row; service role does
-- everything (web API routes run with service_role — unaffected).
-- `app_user_id()` helper resolves the Prisma User.id from auth.uid(); it is
-- installed by a paired migration (`20260420_rls_app_user_id_fn.sql`) in the
-- migration plan. DROP POLICY IF EXISTS keeps re-runs idempotent.
DROP POLICY IF EXISTS "subscription_select_own" ON "Subscription";
CREATE POLICY "subscription_select_own" ON "Subscription"
  FOR SELECT TO authenticated
  USING ("userId" = app_user_id());

DROP POLICY IF EXISTS "subscription_service_all" ON "Subscription";
CREATE POLICY "subscription_service_all" ON "Subscription"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ============================================================================
-- 11. RLS policies — MobileDevice
-- ============================================================================
-- Users can read/insert their own rows and UPDATE to set revoked_at. A trigger
-- landed in a later migration rejects updates to any column other than
-- revoked_at from the authenticated role — belt-and-braces defence against
-- a compromised client rewriting platform / push_token.
DROP POLICY IF EXISTS "mobiledevice_select_own" ON "MobileDevice";
CREATE POLICY "mobiledevice_select_own" ON "MobileDevice"
  FOR SELECT TO authenticated
  USING ("user_id" = app_user_id());

DROP POLICY IF EXISTS "mobiledevice_insert_own" ON "MobileDevice";
CREATE POLICY "mobiledevice_insert_own" ON "MobileDevice"
  FOR INSERT TO authenticated
  WITH CHECK ("user_id" = app_user_id());

DROP POLICY IF EXISTS "mobiledevice_revoke_own" ON "MobileDevice";
CREATE POLICY "mobiledevice_revoke_own" ON "MobileDevice"
  FOR UPDATE TO authenticated
  USING ("user_id" = app_user_id())
  WITH CHECK ("user_id" = app_user_id() AND "revoked_at" IS NOT NULL);

DROP POLICY IF EXISTS "mobiledevice_service_all" ON "MobileDevice";
CREATE POLICY "mobiledevice_service_all" ON "MobileDevice"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ============================================================================
-- 12. RLS policies — RevenueCatEvent (service role only)
-- ============================================================================
-- No authenticated policy — webhook ingestion and replay is entirely
-- server-side. RLS enabled with only the service_role policy means anon /
-- authenticated get deny-by-default, which is the intent.
DROP POLICY IF EXISTS "revenuecatevent_service_only" ON "RevenueCatEvent";
CREATE POLICY "revenuecatevent_service_only" ON "RevenueCatEvent"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ============================================================================
-- 13. RLS policies — OfflineEssayQueueItem
-- ============================================================================
-- User can read / insert / update / delete their own rows; service role full.
-- Rate-limiting the INSERT path (to prevent a malicious client flooding the
-- queue) is tracked as open question §11.5 in DB_SCHEMA.md.
DROP POLICY IF EXISTS "offlinequeue_select_own" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_select_own" ON "OfflineEssayQueueItem"
  FOR SELECT TO authenticated
  USING ("user_id" = app_user_id());

DROP POLICY IF EXISTS "offlinequeue_insert_own" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_insert_own" ON "OfflineEssayQueueItem"
  FOR INSERT TO authenticated
  WITH CHECK ("user_id" = app_user_id());

DROP POLICY IF EXISTS "offlinequeue_update_own" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_update_own" ON "OfflineEssayQueueItem"
  FOR UPDATE TO authenticated
  USING ("user_id" = app_user_id())
  WITH CHECK ("user_id" = app_user_id());

DROP POLICY IF EXISTS "offlinequeue_delete_own" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_delete_own" ON "OfflineEssayQueueItem"
  FOR DELETE TO authenticated
  USING ("user_id" = app_user_id());

DROP POLICY IF EXISTS "offlinequeue_service_all" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_service_all" ON "OfflineEssayQueueItem"
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- ──────────────────────────────────────────────────────────────────────────
-- Rollback block (commented — execute manually if needed)
-- ──────────────────────────────────────────────────────────────────────────
-- DROP TABLE IF EXISTS "OfflineEssayQueueItem";
-- DROP TABLE IF EXISTS "RevenueCatEvent";
-- DROP TABLE IF EXISTS "MobileDevice";
-- DROP TYPE  IF EXISTS "DevicePlatform";
-- ALTER TABLE "User"         DROP COLUMN IF EXISTS "last_mobile_version";
-- ALTER TABLE "User"         DROP COLUMN IF EXISTS "push_tokens";
-- ALTER TABLE "User"         DROP COLUMN IF EXISTS "mobile_device_count";
-- ALTER TABLE "Subscription" DROP COLUMN IF EXISTS "original_purchase_date";
-- ALTER TABLE "Subscription" DROP COLUMN IF EXISTS "platform";
-- ALTER TABLE "Subscription" DROP COLUMN IF EXISTS "revenuecat_product_id";
-- ALTER TABLE "Subscription" DROP COLUMN IF EXISTS "revenuecat_app_user_id";
-- DROP TYPE  IF EXISTS "SubscriptionPlatform";
