-- Stop the child (and their school) reading the guardian's consent token.
--
-- Defect this fixes (QA, 2026-08-23)
-- ---------------------------------
-- 20260823_self_serve_parental_consent.sql moved the self-serve guardian
-- token into `parental_consents`, which is the right store: it is the table
-- checkParentalConsent() reads. But `parental_consents` carries two
-- permissive SELECT policies from 20260322_new_features.sql:
--
--   "Students can view own consent"      USING (student_user_id = auth.uid())
--   "School admins can view consent records"
--
-- and Supabase's default grants give the `authenticated` role SELECT on
-- every column. `consent_token` is a bearer credential: anyone holding it
-- can open /consent?token=... and record an approval, with no auth, because
-- the guardian has no account. So a 13-15 year-old could read their own
-- token with the shipped anon key and approve their own parental consent -
-- and a school admin could approve on any pupil's behalf. That defeats the
-- entire guardian gate on a product for children.
--
-- Row visibility is left exactly as it was; only the token column is taken
-- out of reach. Every code path that needs the token
-- (/api/school/consent, /api/school/consent/details, src/lib/parental-consent.ts)
-- uses the service role, which is unaffected by these grants.
--
-- Idempotent and additive: REVOKE and GRANT are both re-runnable, and no
-- data, column or policy is changed.
--
-- FILENAME / ORDER IS LOAD-BEARING (renamed by QA, 2026-08-23)
-- ------------------------------------------------------------
-- This was authored as `20260823_parental_consent_token_column_privileges.sql`.
-- scripts/apply-migrations.mjs applies files in LEXICAL order, and
-- "…_parental_consent_token…" sorts BEFORE "…_self_serve_parental_consent.sql"
-- ('p' < 's'), so this file ran first - and the GRANT below names
-- `expires_at`, `last_sent_at` and `send_count`, which that earlier-named
-- file is the one that adds. Postgres errors on a GRANT naming a column that
-- does not exist, the runner wraps each file in a transaction, and a real
-- migration error fails the Vercel build. The rename makes it sort
-- immediately AFTER `20260823_self_serve_parental_consent.sql` ('.' < '_'),
-- which is the only order in which both files can succeed. Do not rename it
-- back, and keep any future column grant behind the migration that adds the
-- column.

-- Postgres cannot subtract a single column from a table-level SELECT grant,
-- so the table-level grant is removed first and the readable columns are
-- granted back explicitly.
REVOKE SELECT ON public.parental_consents FROM anon;
REVOKE SELECT ON public.parental_consents FROM authenticated;

-- Deliberately no grant to `anon`: an unauthenticated caller has no row
-- visible under either policy, and a consent record is never public data.
--
-- IF YOU ADD A COLUMN to parental_consents, add it here too when students
-- and school admins are meant to see it. Leaving it out is the safe default;
-- omitting a column hides it, it does not break a write.
GRANT SELECT (
  id,
  student_user_id,
  school_id,
  parent_email,
  status,
  consented_at,
  created_at,
  updated_at,
  expires_at,
  last_sent_at,
  send_count
) ON public.parental_consents TO authenticated;

COMMENT ON COLUMN public.parental_consents.consent_token IS
  'Single-use bearer token emailed to the guardian, cleared on decision. '
  'Service-role only: SELECT on this column is revoked from anon and '
  'authenticated (20260823_self_serve_parental_consent_token_privileges.sql) '
  'because whoever can read it can approve the consent without signing in.';
