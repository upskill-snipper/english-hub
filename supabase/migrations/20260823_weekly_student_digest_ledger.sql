-- Weekly student digest send ledger.
--
-- Defect: `/api/cron/weekly-student-reports` had no idempotency record of any
-- kind. Any second invocation of the Sunday schedule - a manual retry, a
-- Vercel cron retry after a function timeout, or a duplicated schedule entry -
-- re-sent the weekly digest to every eligible student. `WeeklyReport` could
-- not be reused as the ledger: it is parent-shaped (NOT NULL "parentId" plus a
-- report body), while the student digest is sent to the student directly
-- whether or not a parent account is linked.
--
-- This creates the minimal purpose-built ledger: one row per (student, week),
-- inserted only after a confirmed successful send. It records THAT a digest
-- went out, never its contents (Children's Code data minimisation).
--
-- Additive and idempotent: safe to re-run, creates nothing that existing code
-- reads, and touches no existing table.
--
-- RLS follows the repo convention (20260506_enable_rls_on_prisma_tables):
-- enabled, with a service-role-only policy. The cron reaches this table
-- through Prisma on the service-role connection; there is deliberately no
-- anon/authenticated read path.

CREATE TABLE IF NOT EXISTS public."WeeklyStudentDigest" (
  id            TEXT PRIMARY KEY,
  student_id    TEXT NOT NULL,
  week_starting TIMESTAMPTZ(6) NOT NULL,
  sent_at       TIMESTAMPTZ(6) NOT NULL DEFAULT now()
);

-- FK added separately so the migration stays re-runnable on a database where
-- the table already exists (ADD CONSTRAINT has no IF NOT EXISTS in Postgres).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'WeeklyStudentDigest_student_id_fkey'
  ) THEN
    ALTER TABLE public."WeeklyStudentDigest"
      ADD CONSTRAINT "WeeklyStudentDigest_student_id_fkey"
      FOREIGN KEY (student_id) REFERENCES public."User"(id)
      ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;

-- The unique constraint is the actual double-send guarantee; the cron's
-- pre-check is only a cheap fast path that avoids doing the work at all.
CREATE UNIQUE INDEX IF NOT EXISTS "WeeklyStudentDigest_student_id_week_starting_key"
  ON public."WeeklyStudentDigest" (student_id, week_starting);

CREATE INDEX IF NOT EXISTS "WeeklyStudentDigest_week_starting_idx"
  ON public."WeeklyStudentDigest" (week_starting);

ALTER TABLE public."WeeklyStudentDigest" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."WeeklyStudentDigest";
CREATE POLICY "service_role_full_access" ON public."WeeklyStudentDigest"
  FOR ALL TO service_role USING (true) WITH CHECK (true);
