-- Migration: widen certificates.grade CHECK to accept GCSE-style grades
-- Date: 2026-08-18
--
-- 001_initial_schema.sql constrained grade to ('Pass','Merit','Distinction'),
-- but /api/certificates has always written 'Grade 9'..'Grade 4'. Every
-- issuance therefore violated the CHECK, the upsert returned 500, and
-- students who passed a final assessment never received their certificate.
--
-- Guarded and idempotent: drops the old CHECK if present (the inline column
-- CHECK in 001 gets the default name certificates_grade_check) and recreates
-- it accepting BOTH the GCSE-style values the API writes and the legacy
-- Pass/Merit/Distinction values, so any existing rows remain valid.
-- NULL grade continues to pass, matching the nullable column.
--
-- Name drift is handled by definition-match, not by an assumed name: if a
-- hand-managed database carries the same CHECK under a different
-- auto-generated name, DROP IF EXISTS on one name would miss it, the ADD
-- below would create a SECOND constraint, and the old narrow CHECK would
-- still reject 'Grade 9' - a silently half-applied migration. So every
-- check constraint on the grade column is dropped by inspection first
-- (same pattern as 20260818_school_members_student_role.sql).

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
      AND rel.relname = 'certificates'
      AND con.contype = 'c'
      AND pg_get_constraintdef(con.oid) LIKE 'CHECK ((grade %'
  LOOP
    EXECUTE format('ALTER TABLE public.certificates DROP CONSTRAINT %I', c.conname);
  END LOOP;

  ALTER TABLE public.certificates
    ADD CONSTRAINT certificates_grade_check
    CHECK (grade ~ '^(Grade [1-9]|Pass|Merit|Distinction)$');
END $$;
