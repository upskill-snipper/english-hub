-- ╔══════════════════════════════════════════════════════════════════════════╗
-- ║ CONSOLIDATED ONE-SHOT: Wave 4 + Wave 5 mobile migration bundle          ║
-- ║                                                                          ║
-- ║ Paste this ENTIRE file into the Supabase SQL Editor and click Run.      ║
-- ║ Contains, in order:                                                      ║
-- ║   0.  DROP + recreate `app_user_id()` returning TEXT (hotfix)           ║
-- ║   1.  RevenueCat + mobile schema delta (tables, enums, RLS)             ║
-- ║   2.  Subscription Stripe columns nullable + refundedAt + PAUSED         ║
-- ║   3.  RevenueCatEvent idempotency-key index                             ║
-- ║   4.  Verification diagnostic (returns 4 rows with all checks)          ║
-- ║                                                                          ║
-- ║ Every statement is idempotent — safe to re-run on an already-migrated   ║
-- ║ database. Expected result: "Success" + the final 4 verification rows.   ║
-- ╚══════════════════════════════════════════════════════════════════════════╝

-- ============================================================================
-- SECTION 0 — app_user_id() helper (TEXT return, resolves via User lookup)
-- ============================================================================
-- Must drop first because CREATE OR REPLACE cannot change return type.
DROP FUNCTION IF EXISTS public.app_user_id();

CREATE OR REPLACE FUNCTION public.app_user_id()
  RETURNS text
  LANGUAGE sql
  STABLE
  SECURITY DEFINER
  SET search_path = 'public'
AS $$
  SELECT u."id"
  FROM public."User" u
  WHERE u."supabaseUserId"::text = auth.uid()::text
  LIMIT 1;
$$;

GRANT EXECUTE ON FUNCTION public.app_user_id() TO authenticated, service_role;

COMMENT ON FUNCTION public.app_user_id() IS
  'Returns the Prisma User.id (TEXT cuid) for the authenticated caller, resolved via supabaseUserId = auth.uid(). STABLE + SECURITY DEFINER.';

-- ============================================================================
-- SECTION 1 — RevenueCat + mobile schema delta
-- ============================================================================

-- 1.1 SubscriptionPlatform enum
DO $$ BEGIN
  CREATE TYPE "SubscriptionPlatform" AS ENUM ('WEB', 'IOS', 'ANDROID');
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- 1.2 Subscription — additive columns
ALTER TABLE "Subscription" ADD COLUMN IF NOT EXISTS "revenuecat_app_user_id" TEXT;
ALTER TABLE "Subscription" ADD COLUMN IF NOT EXISTS "revenuecat_product_id"  TEXT;
ALTER TABLE "Subscription" ADD COLUMN IF NOT EXISTS "platform" "SubscriptionPlatform" NOT NULL DEFAULT 'WEB';
ALTER TABLE "Subscription" ADD COLUMN IF NOT EXISTS "original_purchase_date" TIMESTAMPTZ;

-- 1.3 User — mobile telemetry columns
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "mobile_device_count" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "push_tokens"         JSONB   NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "last_mobile_version" TEXT;

-- 1.4 DevicePlatform enum
DO $$ BEGIN
  CREATE TYPE "DevicePlatform" AS ENUM ('IOS', 'ANDROID', 'WEB');
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- 1.5 MobileDevice
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
CREATE INDEX IF NOT EXISTS "MobileDevice_user_lastactive_active_idx"
  ON "MobileDevice" ("user_id", "last_active_at" DESC) WHERE "revoked_at" IS NULL;

-- 1.6 RevenueCatEvent
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
CREATE INDEX IF NOT EXISTS "RevenueCatEvent_unprocessed_idx"
  ON "RevenueCatEvent" ("received_at") WHERE "processed_at" IS NULL;

-- 1.7 OfflineEssayQueueItem
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
CREATE INDEX IF NOT EXISTS "OfflineEssayQueueItem_pending_idx"
  ON "OfflineEssayQueueItem" ("created_at") WHERE "submitted_at" IS NULL AND "failed_at" IS NULL;

-- 1.8 Subscription indexes
CREATE INDEX IF NOT EXISTS "Subscription_revenuecat_appuser_idx"
  ON "Subscription" ("revenuecat_app_user_id") WHERE "revenuecat_app_user_id" IS NOT NULL;
CREATE INDEX IF NOT EXISTS "Subscription_platform_status_idx"
  ON "Subscription" ("platform", "status");

-- 1.9 Enable RLS
ALTER TABLE "Subscription"          ENABLE ROW LEVEL SECURITY;
ALTER TABLE "MobileDevice"          ENABLE ROW LEVEL SECURITY;
ALTER TABLE "RevenueCatEvent"       ENABLE ROW LEVEL SECURITY;
ALTER TABLE "OfflineEssayQueueItem" ENABLE ROW LEVEL SECURITY;

-- 1.10 RLS policies — Subscription
DROP POLICY IF EXISTS "subscription_select_own" ON "Subscription";
CREATE POLICY "subscription_select_own" ON "Subscription"
  FOR SELECT TO authenticated USING ("userId" = app_user_id());

DROP POLICY IF EXISTS "subscription_service_all" ON "Subscription";
CREATE POLICY "subscription_service_all" ON "Subscription"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 1.11 RLS policies — MobileDevice
DROP POLICY IF EXISTS "mobiledevice_select_own" ON "MobileDevice";
CREATE POLICY "mobiledevice_select_own" ON "MobileDevice"
  FOR SELECT TO authenticated USING ("user_id" = app_user_id());

DROP POLICY IF EXISTS "mobiledevice_insert_own" ON "MobileDevice";
CREATE POLICY "mobiledevice_insert_own" ON "MobileDevice"
  FOR INSERT TO authenticated WITH CHECK ("user_id" = app_user_id());

DROP POLICY IF EXISTS "mobiledevice_revoke_own" ON "MobileDevice";
CREATE POLICY "mobiledevice_revoke_own" ON "MobileDevice"
  FOR UPDATE TO authenticated
  USING ("user_id" = app_user_id())
  WITH CHECK ("user_id" = app_user_id() AND "revoked_at" IS NOT NULL);

DROP POLICY IF EXISTS "mobiledevice_service_all" ON "MobileDevice";
CREATE POLICY "mobiledevice_service_all" ON "MobileDevice"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 1.12 RLS policies — RevenueCatEvent (service role only)
DROP POLICY IF EXISTS "revenuecatevent_service_only" ON "RevenueCatEvent";
CREATE POLICY "revenuecatevent_service_only" ON "RevenueCatEvent"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 1.13 RLS policies — OfflineEssayQueueItem
DROP POLICY IF EXISTS "offlinequeue_select_own" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_select_own" ON "OfflineEssayQueueItem"
  FOR SELECT TO authenticated USING ("user_id" = app_user_id());

DROP POLICY IF EXISTS "offlinequeue_insert_own" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_insert_own" ON "OfflineEssayQueueItem"
  FOR INSERT TO authenticated WITH CHECK ("user_id" = app_user_id());

DROP POLICY IF EXISTS "offlinequeue_update_own" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_update_own" ON "OfflineEssayQueueItem"
  FOR UPDATE TO authenticated
  USING ("user_id" = app_user_id()) WITH CHECK ("user_id" = app_user_id());

DROP POLICY IF EXISTS "offlinequeue_delete_own" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_delete_own" ON "OfflineEssayQueueItem"
  FOR DELETE TO authenticated USING ("user_id" = app_user_id());

DROP POLICY IF EXISTS "offlinequeue_service_all" ON "OfflineEssayQueueItem";
CREATE POLICY "offlinequeue_service_all" ON "OfflineEssayQueueItem"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- ============================================================================
-- SECTION 2 — Subscription Stripe nullable + refundedAt + PAUSED
-- ============================================================================

ALTER TABLE "Subscription" ALTER COLUMN "stripeSubscriptionId" DROP NOT NULL;
ALTER TABLE "Subscription" ALTER COLUMN "stripeCustomerId"     DROP NOT NULL;

ALTER TABLE "Subscription" ADD COLUMN IF NOT EXISTS "refunded_at" TIMESTAMPTZ NULL;

DO $$ BEGIN
  ALTER TYPE "SubscriptionStatus" ADD VALUE IF NOT EXISTS 'PAUSED';
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- ============================================================================
-- SECTION 3 — RevenueCatEvent idempotency-key index
-- ============================================================================

CREATE INDEX IF NOT EXISTS "RevenueCatEvent_payload_id_idx"
  ON "RevenueCatEvent" USING btree ((payload->>'id'));

-- ============================================================================
-- SECTION 4 — Verification diagnostic (expect 4 rows all PASS)
-- ============================================================================

WITH
fn_check AS (
  SELECT
    'app_user_id() returns text' AS check_name,
    CASE WHEN pg_typeof(app_user_id())::text = 'text' THEN 'PASS' ELSE 'FAIL' END AS status,
    pg_typeof(app_user_id())::text AS detail
),
tables_check AS (
  SELECT
    'new mobile tables exist' AS check_name,
    CASE WHEN COUNT(*) = 3 THEN 'PASS' ELSE 'FAIL' END AS status,
    COUNT(*)::text || '/3 tables' AS detail
  FROM pg_tables
  WHERE schemaname = 'public'
    AND tablename IN ('MobileDevice','RevenueCatEvent','OfflineEssayQueueItem')
),
rls_check AS (
  SELECT
    'RLS enabled on all 4 tables' AS check_name,
    CASE WHEN COUNT(*) FILTER (WHERE rowsecurity) = 4 THEN 'PASS' ELSE 'FAIL' END AS status,
    COUNT(*) FILTER (WHERE rowsecurity)::text || '/4 rls_on' AS detail
  FROM pg_tables
  WHERE schemaname = 'public'
    AND tablename IN ('Subscription','MobileDevice','RevenueCatEvent','OfflineEssayQueueItem')
),
enum_check AS (
  SELECT
    'PAUSED in SubscriptionStatus' AS check_name,
    CASE WHEN 'PAUSED' = ANY(ARRAY_AGG(enumlabel)) THEN 'PASS' ELSE 'FAIL' END AS status,
    string_agg(enumlabel, ',') AS detail
  FROM pg_enum
  WHERE enumtypid = (SELECT oid FROM pg_type WHERE typname = 'SubscriptionStatus')
)
SELECT * FROM fn_check
UNION ALL SELECT * FROM tables_check
UNION ALL SELECT * FROM rls_check
UNION ALL SELECT * FROM enum_check;
