-- Free-allowance metering: a shared, cross-instance usage counter.
--
-- WHY
-- The free IELTS diagnostic (/api/ielts/diagnostic-assess) is a deliberately
-- ungated lead magnet whose only throttle was
-- `rateLimit(key, { limit: 12, windowSeconds: 86_400 })`. `src/lib/rate-limit.ts`
-- falls back to an in-memory Map when Upstash Redis is not configured, and it is
-- not configured in production - the runtime logs carry
-- "[rate-limit] CRITICAL: Redis not configured - rate limiting is non-functional
-- in production". Each serverless instance kept its own Map, so the cap was
-- per-instance and effectively unlimited. This table moves the count into
-- Postgres, which every instance already shares, and makes the increment atomic.
--
-- Mirrors the FreeAllowanceUsage and AppConfigSetting models in
-- prisma/schema.prisma. Idempotent: safe to re-run (the build-time runner in
-- scripts/apply-migrations.mjs may execute it more than once).
--
-- Privacy: `subject_key` holds either a Supabase auth uuid or the full 64-char
-- sha256(IP_HASH_SALT + ':' + ip) digest. A raw IP is NEVER written here.
-- Rows are swept at 90 days by /api/cron/data-retention, well inside the
-- published 12-month USAGE_DATA_MONTHS policy.
--
-- RLS is enabled with NO permissive policies, matching the repo convention in
-- 20260506_enable_rls_on_prisma_tables: these tables are reachable only through
-- the server-side Prisma connection, never from an anon/authenticated client.

CREATE TABLE IF NOT EXISTS public.free_allowance_usage (
  id            TEXT PRIMARY KEY,
  subject_type  VARCHAR(8)   NOT NULL,
  subject_key   VARCHAR(128) NOT NULL,
  meter         VARCHAR(48)  NOT NULL,
  period_key    VARCHAR(64)  NOT NULL,
  count         INTEGER      NOT NULL DEFAULT 0,
  limit_applied INTEGER      NOT NULL,
  first_used_at TIMESTAMP(3) NOT NULL DEFAULT now(),
  last_used_at  TIMESTAMP(3) NOT NULL DEFAULT now()
);

-- Load-bearing: the ON CONFLICT target for the single-statement atomic
-- increment in consumeAllowance(). Without this unique index the increment
-- degrades to read-modify-write and the cap leaks under concurrency - the same
-- class of bug as the per-instance Map it replaces.
CREATE UNIQUE INDEX IF NOT EXISTS free_allowance_bucket
  ON public.free_allowance_usage (subject_type, subject_key, meter, period_key);

-- Retention sweep (90-day delete).
CREATE INDEX IF NOT EXISTS free_allowance_usage_last_used_at_idx
  ON public.free_allowance_usage (last_used_at);

-- Founder reporting: spend per meter per period.
CREATE INDEX IF NOT EXISTS free_allowance_usage_meter_period_idx
  ON public.free_allowance_usage (meter, period_key);

-- Account deletion and DSAR lookup.
CREATE INDEX IF NOT EXISTS free_allowance_usage_subject_idx
  ON public.free_allowance_usage (subject_type, subject_key);

ALTER TABLE public.free_allowance_usage ENABLE ROW LEVEL SECURITY;

-- Runtime-editable configuration.
--
-- Changing a Vercel environment variable does NOT affect an existing deployment
-- until it is redeployed, so env vars alone cannot deliver "change the free
-- allowance without shipping". This key/value table is read through a 60-second
-- in-process cache by src/lib/usage/limits.ts and takes precedence over env.
CREATE TABLE IF NOT EXISTS public.app_config_setting (
  key        VARCHAR(80)  PRIMARY KEY,
  value      VARCHAR(200) NOT NULL,
  updated_at TIMESTAMP(3) NOT NULL DEFAULT now(),
  updated_by VARCHAR(128)
);

ALTER TABLE public.app_config_setting ENABLE ROW LEVEL SECURITY;
