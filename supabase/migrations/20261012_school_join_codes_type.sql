-- ─── school_join_codes.type: the column the join-code routes already use ────
--
-- CONTEXT (12 October 2026)
--
-- THIS FILE CHANGES THE PRODUCTION DATABASE and needs Calum's approval before
-- it is pushed. It adds one column with a default and a CHECK; existing rows
-- (there are none) would become 'student' codes.
--
-- /api/school/join-codes inserts `type` ('student' or 'teacher') and the
-- portal reads code.type, but no migration created the column and production
-- does not have it (information_schema, 12 October). So creating any join
-- code failed. /api/school/join reads a `role` column that does not exist
-- either, so a teacher code could never have worked; making it read `type`
-- is part of the same school pilot work.

ALTER TABLE public.school_join_codes
  ADD COLUMN IF NOT EXISTS type text NOT NULL DEFAULT 'student';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'school_join_codes_type_check'
      AND conrelid = 'public.school_join_codes'::regclass
  ) THEN
    ALTER TABLE public.school_join_codes
      ADD CONSTRAINT school_join_codes_type_check CHECK (type IN ('student', 'teacher'));
  END IF;
END $$;
