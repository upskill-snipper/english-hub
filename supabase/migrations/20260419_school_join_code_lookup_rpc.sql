-- ─── School join code lookup — minimum-field SECURITY DEFINER RPC ────────
--
-- Context (P1-SEC-4 in QA Cycle 1 Wave A):
-- Migration 004_fix_school_rls.sql line 322 established:
--
--   CREATE POLICY "anyone_can_read_active_join_codes"
--     ON public.school_join_codes FOR SELECT USING (is_active = TRUE);
--
-- which lets any authenticated user `select *` across school_join_codes,
-- returning `school_id`, `class_id`, `max_uses`, `uses`, `expires_at`,
-- and `created_by` for every active code. That exceeds data minimisation
-- and turns the table into an enumerable roster of active school links.
--
-- This migration is SAFE and ADDITIVE: it only creates an RPC that takes
-- a single `code` string and returns the narrow row a join UI needs to
-- validate the code and proceed to a server-side join. After the client
-- (join page) switches to this RPC, a follow-up migration can drop the
-- overly permissive SELECT policy.
--
-- The RPC also enforces the runtime checks that the policy didn't:
--   - is_active = TRUE
--   - expires_at IS NULL OR expires_at > now()
--   - uses < max_uses
-- so the caller can't rely on a stale snapshot.
-- ──────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.lookup_school_join_code(code_input text)
RETURNS TABLE (
  school_id   uuid,
  class_id    uuid,
  remaining   int
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    c.school_id,
    c.class_id,
    (c.max_uses - c.uses) AS remaining
  FROM public.school_join_codes c
  WHERE c.code = code_input
    AND c.is_active = TRUE
    AND (c.expires_at IS NULL OR c.expires_at > now())
    AND c.uses < c.max_uses
  LIMIT 1;
$$;

GRANT EXECUTE ON FUNCTION public.lookup_school_join_code(text) TO anon, authenticated;

COMMENT ON FUNCTION public.lookup_school_join_code(text) IS
  'Validates a school join code and returns only the minimum fields the join UI needs (school_id, class_id, remaining uses). Hides max_uses, uses count, expires_at, and created_by from the caller. Equality-only lookup — does not support enumeration. After the client switches to this RPC the "anyone_can_read_active_join_codes" policy can be dropped from school_join_codes.';
