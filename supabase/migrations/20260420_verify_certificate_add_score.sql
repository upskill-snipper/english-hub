-- ─── verify_certificate RPC — add `score` to return shape (P0 #3) ─────────
--
-- Context: OUTSTANDING_ITEMS.md P0 #3. `src/app/verify/[id]/client-page.tsx`
-- renders `formatPercentageWithGrade(certificate.score)` (line 127), but
-- the prior RPC (`20260419_certificate_public_rpc.sql`) only returned
-- { id, course_id, grade, issued_at, student_name }. Result: public
-- certificate pages have been rendering `NaN%` / blank for the Score tile
-- since Wave B deploy.
--
-- `certificates.score` is `INTEGER NOT NULL` (001_initial_schema.sql:129).
-- Exposing it to anon/authenticated is safe — the score is already part of
-- the publicly-shareable certificate artefact the student distributes
-- voluntarily via their verification URL.
--
-- Shape-changing function replacement requires DROP + CREATE (Postgres
-- rejects CREATE OR REPLACE when the RETURNS TABLE shape changes).
--
-- DEPLOY ORDER
-- ------------
-- 1. Apply this migration.
-- 2. No client change needed — client already reads `certificate.score`.
-- 3. Smoke-test `/verify/[id]` against any real certificate id.
--
-- ──────────────────────────────────────────────────────────────────────

DROP FUNCTION IF EXISTS public.verify_certificate(uuid);

CREATE FUNCTION public.verify_certificate(cert_id uuid)
RETURNS TABLE (
  id             uuid,
  course_id      text,
  grade          text,
  issued_at      timestamptz,
  student_name   text,
  score          integer
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    c.id,
    c.course_id,
    c.grade,
    c.issued_at,
    c.student_name,
    c.score
  FROM public.certificates c
  WHERE c.id = cert_id
  LIMIT 1;
$$;

GRANT EXECUTE ON FUNCTION public.verify_certificate(uuid) TO anon, authenticated;

COMMENT ON FUNCTION public.verify_certificate(uuid) IS
  'Public certificate verification for /verify/[id]. Returns minimum fields for the public verification page: id, course_id, grade, issued_at, student_name, score. No user_id / no assessment_attempt_id / no internal fields. After this migration + client rollout, the permissive FOR SELECT USING (TRUE) policy on public.certificates can be dropped (see supabase/migrations-pending/20260420_drop_permissive_certificate_policy.sql).';
