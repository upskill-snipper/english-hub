-- ─── Drop untracked "Public verify certs" policy on public.certificates ──
--
-- Discovered on 2026-04-20: after applying 20260420_drop_permissive_certificate_policy.sql
-- (which correctly dropped the migration-tracked `"Public can verify certificates"`
-- policy), `pg_policies` still reported a separate permissive policy named
-- `"Public verify certs"` with `USING (true)`.
--
-- That shorter-named policy does NOT appear in any committed migration in
-- `supabase/migrations/`. It was created out-of-band (likely via the
-- Supabase dashboard) and is a functional duplicate of the tracked
-- permissive policy. Until dropped, it re-exposed `certificates.*` to
-- anon callers — which was supposed to be closed by the move to the
-- `verify_certificate` RPC.
--
-- Idempotent (IF EXISTS) so safe to re-apply and safe on environments
-- that never had the untracked policy.
-- ──────────────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "Public verify certs" ON public.certificates;
