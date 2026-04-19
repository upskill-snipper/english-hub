-- ─── Identity convergence PR-2: backfill User.supabaseUserId ────────────
--
-- PR-1 (20260420_user_supabase_user_id.sql) added the column as
-- nullable UUID + partial-unique index. This migration populates it
-- by matching Prisma User rows against auth.users on email.
--
-- Architectural note (Cycle 5 finding): a repo-wide search for
-- `prisma.user.create` / `prisma.user.upsert` returned ZERO hits.
-- Prisma User rows are populated entirely out-of-band today (seeds,
-- manual SQL, or the Phase-7 signup paths that remain stubbed in
-- src/app/api/auth/register/route.ts and
-- src/app/api/auth/teacher-signup/route.ts). This means two things:
--   1. No Prisma User "signup write" code change is needed in PR-2
--      because there is no signup write to amend.
--   2. Any user who signed up through Supabase Auth *without* a
--      parallel Prisma User row is invisible to every Prisma-backed
--      feature (dormancy, data-retention cron, privacy endpoints).
--      That's flagged as a separate P0 in EH_QA_MASTER_LOG.md
--      Cycle 5 and should be addressed with a proper signup handler.
--
-- This backfill is a no-op on a fresh/empty DB and safe to re-run.
-- It never overwrites a non-null supabaseUserId.
--
-- Preflight assertions to run BEFORE applying in prod:
--   SELECT COUNT(*) FROM "User";                          -- how many Prisma rows?
--   SELECT COUNT(*) FROM "User" WHERE "supabaseUserId" IS NULL;
--   SELECT COUNT(*) FROM "User" u
--     WHERE NOT EXISTS (
--       SELECT 1 FROM auth.users au WHERE lower(au.email) = lower(u.email)
--     );
-- If the last query returns > 0, those rows are Prisma users with no
-- Supabase account — they will stay null after this migration. Review
-- before enforcing NOT NULL in PR-4.
-- ──────────────────────────────────────────────────────────────────────

UPDATE "User" u
   SET "supabaseUserId" = au.id
  FROM auth.users au
 WHERE lower(u.email) = lower(au.email)
   AND u."supabaseUserId" IS NULL;

-- Post-backfill audit row — a single-row insert into a public audit
-- table so we can see when and how many were backfilled. Skip if
-- the audit table doesn't exist (safe fallback).
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'migration_audit') THEN
    INSERT INTO public.migration_audit(migration_name, notes)
    VALUES (
      '20260420_user_supabase_user_id_backfill',
      (
        'Backfilled supabaseUserId for ' ||
        (SELECT COUNT(*) FROM "User" WHERE "supabaseUserId" IS NOT NULL) ||
        ' rows; ' ||
        (SELECT COUNT(*) FROM "User" WHERE "supabaseUserId" IS NULL) ||
        ' still null (no matching auth.users row)'
      )
    );
  END IF;
END
$$;
