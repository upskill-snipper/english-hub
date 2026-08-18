-- =========================================================================
-- School membership schema fixes (2026-08-18)
-- Applied automatically on deploy by scripts/apply-migrations.mjs.
-- ADDITIVE + IDEMPOTENT ONLY: nothing here drops data, and every statement
-- is guarded so a double-run is harmless.
-- =========================================================================

-- -------------------------------------------------------------------------
-- 1. Widen the school_members.role CHECK to include 'student'.
--
-- WHY: 003_school_analytics.sql constrained role to
-- ('admin','head_of_department','teacher'), but the student counting in
-- /api/school/students, /api/school/analytics, /api/school/cefr,
-- /api/school/export/report and the bulk import all read or write
-- role='student'. Every such INSERT violated the CHECK, so a school that
-- imported hundreds of pupils still reported zero students.
--
-- Mechanics: the original constraint was created inline so its name is
-- auto-generated (normally school_members_role_check, but we cannot rely
-- on that in a database that may have been hand-managed). We therefore
-- drop ANY check constraint on school_members whose definition begins
-- with a check on the role column, then recreate it with the widened
-- value list under a stable name. Drop-then-add makes the block
-- idempotent: a re-run drops our own constraint and recreates it
-- identically. Existing rows all hold values from the old (narrower)
-- list, so validation of the new constraint can never fail.
-- -------------------------------------------------------------------------
DO $$
DECLARE
  c RECORD;
BEGIN
  FOR c IN
    SELECT con.conname
    FROM pg_constraint con
    JOIN pg_class rel ON rel.oid = con.conrelid
    JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
    WHERE nsp.nspname = 'public'
      AND rel.relname = 'school_members'
      AND con.contype = 'c'
      AND pg_get_constraintdef(con.oid) LIKE 'CHECK ((role %'
  LOOP
    EXECUTE format('ALTER TABLE public.school_members DROP CONSTRAINT %I', c.conname);
  END LOOP;

  ALTER TABLE public.school_members
    ADD CONSTRAINT school_members_role_check
    CHECK (role IN ('admin', 'head_of_department', 'teacher', 'student'));
END $$;

-- -------------------------------------------------------------------------
-- 2. Make school_members.full_name nullable.
--
-- WHY: full_name was NOT NULL with no default, yet the teacher invite flow
-- legitimately creates a membership row when only an email address is
-- known (the invitee has not signed up yet). Every invite INSERT therefore
-- failed at the database layer. We choose nullable rather than DEFAULT ''
-- because a missing name should read as missing, not as an empty string
-- that display code renders as a blank cell; API callers now derive a
-- fallback display name from the email local-part.
--
-- No backfill is needed: relaxing NOT NULL never touches existing rows,
-- and DROP NOT NULL on an already-nullable column is a silent no-op, so
-- this line is idempotent.
-- -------------------------------------------------------------------------
ALTER TABLE public.school_members ALTER COLUMN full_name DROP NOT NULL;

-- -------------------------------------------------------------------------
-- 3. Add school_members.year_group.
--
-- WHY: no migration ever created this column, but /api/school/students
-- (GET select + POST insert), /api/school/analytics and
-- /api/school/export/report all reference school_members.year_group.
-- Selecting a non-existent column makes PostgREST reject the WHOLE query,
-- which is why those endpoints returned zero members. Free-text to match
-- the existing write sites (they store values like 'Year 10'), consistent
-- with school_students.year_group which is also unconstrained TEXT.
-- -------------------------------------------------------------------------
ALTER TABLE public.school_members ADD COLUMN IF NOT EXISTS year_group TEXT;
