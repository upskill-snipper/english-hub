-- Migration: Add student_name to certificates table
-- Date: 2026-03-22
--
-- The public verification page needs the student name but cannot access the
-- profiles table (RLS restricts profile reads to the owning user). Storing the
-- name on the certificate at issuance time also captures the name as it was
-- at the time of completion, which is the correct behavior for a certificate.

ALTER TABLE public.certificates
  ADD COLUMN IF NOT EXISTS student_name TEXT;

-- Backfill existing certificates with current profile names
UPDATE public.certificates c
SET student_name = p.full_name
FROM public.profiles p
WHERE c.user_id = p.id
  AND c.student_name IS NULL;
