-- ─── Scheduled-run locks ────────────────────────────────────────────────────
--
-- WHY THIS IS A TABLE AND NOT AN ADVISORY LOCK (19 September 2026, REL-8)
--
-- The proposal for this item was `pg_try_advisory_xact_lock` called through
-- `prisma.$queryRaw`. Measured against production on 19 September, that call
-- returns TRUE on the second invocation of the same key -- because a bare
-- `$queryRaw` is its own implicit transaction, so the transaction-scoped lock
-- is released the instant the statement returns. A guard built on it would
-- have answered "lock acquired" to every concurrent run, for ever, while
-- reporting that overlapping crons were now impossible.
--
-- The session-scoped variant (`pg_try_advisory_lock`) is worse here, not
-- better: DATABASE_URL points at pgBouncer on port 6543 in transaction pooling
-- mode, so the lock would be taken on one backend and the matching unlock sent
-- to another. The lock would never be released and the cron would be dead
-- permanently.
--
-- A lease row survives both problems. It is claimed and released by ordinary
-- statements that do not care which backend runs them, and it expires on its
-- own if a run dies mid-flight, so a crashed cron cannot wedge itself shut.
--
-- The lock is advisory in the ordinary sense -- it protects against a second
-- CONCURRENT run, not against a second run later. `claim_cron_lock` is the only
-- thing that should ever write `locked_until`.
-- ────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.cron_runs (
  name         text PRIMARY KEY,
  locked_until timestamptz NOT NULL,
  started_at   timestamptz NOT NULL DEFAULT now(),
  finished_at  timestamptz,
  run_count    bigint NOT NULL DEFAULT 0,
  skip_count   bigint NOT NULL DEFAULT 0
);

COMMENT ON TABLE public.cron_runs IS
  'One row per scheduled job name. Holds the run lease claimed by claim_cron_lock. No personal data.';
COMMENT ON COLUMN public.cron_runs.skip_count IS
  'Times a run found the lock held. A number that climbs means crons are genuinely overlapping.';

ALTER TABLE public.cron_runs ENABLE ROW LEVEL SECURITY;

-- No policies: nothing but the service role touches this table, and the
-- service role bypasses RLS. Enabling RLS with zero policies is the fail-closed
-- state -- anon and authenticated can read nothing even if a grant is added by
-- accident later.
REVOKE ALL ON public.cron_runs FROM anon, authenticated;

-- ─── Claim ──────────────────────────────────────────────────────────────────
--
-- Returns true when this caller now owns the lease, false when another run
-- holds it.
--
-- The atomicity rests on `INSERT ... ON CONFLICT DO UPDATE ... WHERE`: on a
-- conflict Postgres takes a row lock, so a second concurrent statement blocks
-- until the first commits and then re-evaluates the WHERE against the row as
-- updated. It therefore sees `locked_until` in the future and updates nothing.
-- Two simultaneous callers cannot both be told true.
CREATE OR REPLACE FUNCTION public.claim_cron_lock(p_name text, p_lease_seconds integer)
RETURNS boolean
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $$
DECLARE
  claimed boolean;
BEGIN
  INSERT INTO public.cron_runs AS c (name, locked_until, started_at, finished_at, run_count)
  VALUES (p_name, now() + make_interval(secs => p_lease_seconds), now(), NULL, 1)
  ON CONFLICT (name) DO UPDATE
     SET locked_until = now() + make_interval(secs => p_lease_seconds),
         started_at   = now(),
         finished_at  = NULL,
         run_count    = c.run_count + 1
   WHERE c.locked_until < now()
  RETURNING true INTO claimed;

  IF claimed IS NULL THEN
    -- Contended. Record it, so a repeatedly skipped weekly job is countable
    -- rather than merely absent from the log.
    UPDATE public.cron_runs SET skip_count = skip_count + 1 WHERE name = p_name;
    RETURN false;
  END IF;

  RETURN true;
END;
$$;

-- ─── Release ────────────────────────────────────────────────────────────────
--
-- Expires the lease immediately. Safe to call when the lease was never held or
-- has already expired: it simply rewrites a timestamp that is already past.
CREATE OR REPLACE FUNCTION public.release_cron_lock(p_name text)
RETURNS void
LANGUAGE sql
SET search_path = public, pg_temp
AS $$
  UPDATE public.cron_runs
     SET locked_until = now() - interval '1 second',
         finished_at  = now()
   WHERE name = p_name;
$$;

REVOKE ALL ON FUNCTION public.claim_cron_lock(text, integer) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.release_cron_lock(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.claim_cron_lock(text, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.release_cron_lock(text) TO service_role;
