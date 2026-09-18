-- Rate limiting: a shared, cross-instance counter in Postgres.
--
-- WHY
-- `src/lib/rate-limit.ts` was written against Upstash Redis and fell back to a
-- process-local Map when Redis was not configured. Redis is NOT configured in
-- production, so all 208 `rateLimit()` call sites were served by that Map. On
-- Vercel each concurrent instance keeps its own Map, instances recycle with
-- traffic, and a cold start begins at zero, so the effective limit was "the
-- configured limit, times however many instances happen to be warm". That is
-- not a limit, and the fix was blocked on a Vercel environment change.
--
-- The free-allowance meter (20260917_free_allowance_usage.sql) had already
-- solved the same problem with Postgres, which every instance shares. This
-- table applies that pattern to rate limiting, so the control holds without
-- waiting on Upstash. Redis remains the PREFERRED backend: when it is
-- configured, this table is not touched at all.
--
-- Idempotent: safe to re-run (scripts/apply-migrations.mjs may execute it more
-- than once).
--
-- PRIVACY
-- `bucket_key` is sha256(salt : limit : windowSeconds : caller key). Caller
-- keys routinely contain an IP address (`getClientIp()`), so the raw key is
-- NEVER written. The salt must be secret, or the digest would be reversible in
-- minutes across the whole IPv4 space and would remain personal data under UK
-- GDPR; when no secret salt is available the application declares this backend
-- unavailable rather than writing a guessable key. Nothing else about the
-- caller is stored: no user id, no route, no user agent, no timestamps beyond
-- the end of the current window.
--
-- RETENTION
-- A row lives only as long as its counter is useful. Rows are swept by the
-- application an hour after `window_end` (opportunistically, roughly one call
-- in 500), so this table needs no entry in the data-retention cron and holds
-- nothing of interest to a DSAR - there is no way to find a person's rows
-- without their raw key, by design.
--
-- RLS is enabled with NO permissive policies, matching the repo convention in
-- 20260506_enable_rls_on_prisma_tables: this table is reachable only through
-- the server-side Prisma connection, never from an anon/authenticated client.

CREATE TABLE IF NOT EXISTS public.rate_limit_counter (
  -- sha256 hex digest. 64 characters; VARCHAR(96) leaves room for a future
  -- algorithm change without a migration.
  bucket_key VARCHAR(96)              NOT NULL,
  -- When the current fixed window ends. The window rolls over IN PLACE: once
  -- this has passed, the next increment resets `count` to 1 and moves this
  -- forward, in the same statement and the same row.
  window_end TIMESTAMPTZ(3)           NOT NULL,
  count      INTEGER                  NOT NULL DEFAULT 0,

  -- Load-bearing: this is the ON CONFLICT target for the atomic single
  -- statement increment in dbRateLimit(). Without it the increment degrades to
  -- read-modify-write and the limit leaks under concurrency - the same class of
  -- bug as the per-instance Map it replaces.
  --
  -- It is also the ONLY index the hot path could touch, and it does not: the
  -- common update writes `count`, which appears in no index, so Postgres takes
  -- the heap-only-tuple path and writes no index entry. Index maintenance
  -- happens twice per caller per window (row creation, and the rollover that
  -- moves `window_end`), not once per request. Keeping one row per caller for
  -- its whole life, rather than one row per caller per window, is what makes
  -- that true.
  CONSTRAINT rate_limit_counter_pkey PRIMARY KEY (bucket_key)
);

-- Supports the expiry sweep (DELETE ... WHERE window_end < cutoff) only. It is
-- maintained on insert and on rollover, never on a plain increment.
CREATE INDEX IF NOT EXISTS rate_limit_counter_window_end_idx
  ON public.rate_limit_counter (window_end);

ALTER TABLE public.rate_limit_counter ENABLE ROW LEVEL SECURITY;

-- There is deliberately NO Prisma model for this table. It is written only by
-- two hand-written raw statements in src/lib/rate-limit.ts, and that module
-- imports Prisma dynamically so that 164 route bundles do not each pull in the
-- client for a backend they skip whenever Redis is configured. A model would
-- add a generated type nothing uses. `prisma db pull` will report this table as
-- unmodelled; that is expected, and this comment is the record of why.
