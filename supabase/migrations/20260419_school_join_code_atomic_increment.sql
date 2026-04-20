-- ─── Atomic increment for school_join_codes.uses (P1-DATA-8) ─────────────
--
-- /api/school/join/route.ts line 123 + 238 currently does:
--   await admin.from('school_join_codes')
--     .update({ uses: joinCode.uses + 1 })
--     .eq('id', joinCode.id)
--
-- This is read-then-write: if N students submit concurrently at uses=29
-- with max_uses=30, all N read 29, all N write 30, and the count drifts
-- below the real membership count. The seat-limit check earlier in the
-- handler can pass for more students than the cap allows.
--
-- Same pattern appears on `classes.student_count`, `promo_codes.uses`,
-- and elsewhere.
--
-- This migration adds a SECURITY DEFINER RPC that atomically increments
-- the counter only if it has not yet reached max_uses. It returns the
-- post-increment value (or NULL if the cap was hit). Callers can use
-- this instead of read-then-write to eliminate the race.
--
-- Usage from code:
--   const { data: newUses, error } = await admin.rpc(
--     'increment_join_code_uses',
--     { code_id: joinCode.id }
--   )
--   if (newUses === null) { /* cap reached, reject */ }
--
-- Note: the existing `increment_promo_uses` RPC (referenced in
-- src/app/api/school/register/route.ts) already follows this pattern
-- for promo_codes — we follow the same convention here.
-- ──────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.increment_join_code_uses(code_id uuid)
RETURNS int
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_uses int;
BEGIN
  UPDATE public.school_join_codes
     SET uses = uses + 1
   WHERE id = code_id
     AND is_active = TRUE
     AND (expires_at IS NULL OR expires_at > now())
     AND (max_uses = 0 OR uses < max_uses)
   RETURNING uses INTO new_uses;

  -- If no row updated, the cap was hit or the code is inactive/expired.
  RETURN new_uses; -- may be NULL
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_join_code_uses(uuid)
  TO anon, authenticated;

COMMENT ON FUNCTION public.increment_join_code_uses(uuid) IS
  'Atomically increment school_join_codes.uses. Returns the new uses value, or NULL if the code is inactive, expired, or has hit max_uses. Call this from /api/school/join instead of read-then-write to eliminate the concurrent-join race.';
