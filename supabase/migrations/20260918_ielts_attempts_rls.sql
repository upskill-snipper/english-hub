-- ─── ielts_attempts: row-level security, and take the anon grants away ──────
--
-- THE DEFECT (18 September 2026, verified against production)
-- `public.ielts_attempts` had `relrowsecurity = false`, no policies at all,
-- and full INSERT, SELECT, UPDATE, DELETE and TRUNCATE granted to both `anon`
-- and `authenticated`. The table holds `"userId"` and `"responseText"`, which
-- is a learner's own writing, on a product whose users are children. Anyone
-- holding the publishable anon key, which every visitor's browser is given,
-- could have read or written every row.
--
-- It is empty today (0 rows on 18 September), so nothing was exposed, and the
-- IELTS surfaces currently keep results in browser storage instead. That is
-- what makes now the time to fix it: there is no data to migrate and no
-- caller to break.
--
-- THE FIX
-- Enable RLS, revoke the anon and authenticated grants, and add the three
-- policies the rest of the schema uses: service role for everything (the API
-- routes run service-role and apply their own authorisation), and owner-only
-- SELECT and INSERT for a signed-in learner reading their own attempts.
--
-- Note the quoted camelCase identifiers. This table was created by Prisma, so
-- the column is "userId", not user_id, and every policy has to quote it.
--
-- Prisma connects as the table owner over DATABASE_URL, which bypasses RLS,
-- so `src/lib/ielts/store.ts` and the centre route are unaffected.
--
-- Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

ALTER TABLE public.ielts_attempts ENABLE ROW LEVEL SECURITY;

-- The publishable anon key must not reach this table at all.
REVOKE ALL ON public.ielts_attempts FROM anon;

-- A signed-in user reaches their own rows through the policies below, not
-- through a blanket grant. Keep SELECT and INSERT only: nothing in the product
-- edits or deletes an attempt from the browser.
REVOKE ALL ON public.ielts_attempts FROM authenticated;
GRANT SELECT, INSERT ON public.ielts_attempts TO authenticated;

DROP POLICY IF EXISTS "ielts_attempts_service_role_all" ON public.ielts_attempts;
DROP POLICY IF EXISTS "ielts_attempts_owner_select"     ON public.ielts_attempts;
DROP POLICY IF EXISTS "ielts_attempts_owner_insert"     ON public.ielts_attempts;

CREATE POLICY "ielts_attempts_service_role_all"
  ON public.ielts_attempts FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- "userId" holds the Supabase auth uuid as text, so compare against the text
-- form of auth.uid() rather than casting the column.
CREATE POLICY "ielts_attempts_owner_select"
  ON public.ielts_attempts FOR SELECT TO authenticated
  USING ("userId" = auth.uid()::text);

CREATE POLICY "ielts_attempts_owner_insert"
  ON public.ielts_attempts FOR INSERT TO authenticated
  WITH CHECK ("userId" = auth.uid()::text);
