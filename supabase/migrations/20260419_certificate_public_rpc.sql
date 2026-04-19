-- ─── Public certificate verification — minimal-field RPC ──────────────────
--
-- Context (P1-SEC-3 in QA Cycle 1 Wave A):
-- The existing policy in 001_initial_schema.sql:
--
--   CREATE POLICY "Public can verify certificates"
--     ON public.certificates FOR SELECT USING (TRUE);
--
-- allows any anon caller with a certificate UUID to `select *` from the
-- certificates table, returning `user_id`, `assessment_attempt_id`, and
-- other internal fields alongside the public-facing `student_name` and
-- `grade`. For a platform serving minors this exceeds data minimisation.
--
-- This migration is SAFE and ADDITIVE: it only creates an RPC.
-- After the client is updated to call this RPC (next commit) a follow-up
-- migration will drop the overly-permissive SELECT policy. Deploying
-- this migration before the client update will NOT break anything —
-- the existing verify page will keep working against the old policy.
--
-- ──────────────────────────────────────────────────────────────────────

-- NOTE on column types: `certificates.course_id` is TEXT (see
-- 001_initial_schema.sql:94 — it references `courses(id)` which is a
-- TEXT primary key, not a UUID). An earlier draft of this RPC declared
-- `course_id uuid` here, which would throw "structure of query does
-- not match function result type" on every call. Keep TEXT.
CREATE OR REPLACE FUNCTION public.verify_certificate(cert_id uuid)
RETURNS TABLE (
  id             uuid,
  course_id      text,
  grade          text,
  issued_at      timestamptz,
  student_name   text
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
    c.student_name
  FROM public.certificates c
  WHERE c.id = cert_id
  LIMIT 1;
$$;

-- Explicit grant so anon/authenticated can call this function.
-- (SECURITY DEFINER means execution uses the function owner's
-- privileges; the function body above is tightly scoped to the
-- minimum five public columns.)
GRANT EXECUTE ON FUNCTION public.verify_certificate(uuid) TO anon, authenticated;

COMMENT ON FUNCTION public.verify_certificate(uuid) IS
  'Public certificate verification for the /verify/[id] page. Returns only the minimum fields needed to display a public verification result (no user_id, no assessment_attempt_id, no internal fields). After client code migrates to this RPC, the permissive FOR SELECT USING (TRUE) policy on certificates can be dropped.';
