-- ─────────────────────────────────────────────────────────────────────────
-- 06 May 2026 — enable RLS on the 18 Prisma-managed public tables that
-- Supabase's security scanner flagged as `rls_disabled_in_public`.
--
-- Why this is safe:
--   - The application accesses these tables exclusively from the
--     server (Next.js route handlers, server components, cron jobs)
--     via the Prisma client using `SUPABASE_SERVICE_ROLE_KEY`.
--   - Service role bypasses RLS by design (Postgres `BYPASSRLS`),
--     so server-side code keeps working unchanged.
--   - No client-side code paths use the anon Supabase JS client
--     against any of these tables (verified by grep across `src/`).
--   - With RLS on and zero policies, anon + authenticated PostgREST
--     access becomes deny-all — closing the public-internet hole the
--     scanner reported.
--
-- We also add an explicit "service role full access" policy on each
-- table. Strictly redundant (service role bypasses RLS already) but it
-- documents intent and survives any future Supabase change to that
-- bypass behaviour.
-- ─────────────────────────────────────────────────────────────────────────

-- Helper: enable RLS + service-role policy in one go.
-- Using DO blocks so re-running the migration is idempotent.

-- 1. AIFeedback ---------------------------------------------------------
ALTER TABLE public."AIFeedback" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."AIFeedback";
CREATE POLICY "service_role_full_access" ON public."AIFeedback"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 2. Assignment ---------------------------------------------------------
ALTER TABLE public."Assignment" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."Assignment";
CREATE POLICY "service_role_full_access" ON public."Assignment"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 3. AssignmentSubmission -----------------------------------------------
ALTER TABLE public."AssignmentSubmission" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."AssignmentSubmission";
CREATE POLICY "service_role_full_access" ON public."AssignmentSubmission"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 4. AuditLog -----------------------------------------------------------
ALTER TABLE public."AuditLog" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."AuditLog";
CREATE POLICY "service_role_full_access" ON public."AuditLog"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 5. Consent ------------------------------------------------------------
ALTER TABLE public."Consent" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."Consent";
CREATE POLICY "service_role_full_access" ON public."Consent"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 6. CookieConsent ------------------------------------------------------
ALTER TABLE public."CookieConsent" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."CookieConsent";
CREATE POLICY "service_role_full_access" ON public."CookieConsent"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 7. DataAccessRequest --------------------------------------------------
ALTER TABLE public."DataAccessRequest" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."DataAccessRequest";
CREATE POLICY "service_role_full_access" ON public."DataAccessRequest"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 8. Essay --------------------------------------------------------------
ALTER TABLE public."Essay" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."Essay";
CREATE POLICY "service_role_full_access" ON public."Essay"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 9. HumanReviewRequest -------------------------------------------------
ALTER TABLE public."HumanReviewRequest" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."HumanReviewRequest";
CREATE POLICY "service_role_full_access" ON public."HumanReviewRequest"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 10. ParentInvite ------------------------------------------------------
ALTER TABLE public."ParentInvite" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."ParentInvite";
CREATE POLICY "service_role_full_access" ON public."ParentInvite"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 11. PrivacySettings ---------------------------------------------------
ALTER TABLE public."PrivacySettings" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."PrivacySettings";
CREATE POLICY "service_role_full_access" ON public."PrivacySettings"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 12. RenewalReminder ---------------------------------------------------
ALTER TABLE public."RenewalReminder" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."RenewalReminder";
CREATE POLICY "service_role_full_access" ON public."RenewalReminder"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 13. SafeguardingReport ------------------------------------------------
-- Most sensitive table on the system — child-safety reports.
ALTER TABLE public."SafeguardingReport" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."SafeguardingReport";
CREATE POLICY "service_role_full_access" ON public."SafeguardingReport"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 14. Suggestion --------------------------------------------------------
ALTER TABLE public."Suggestion" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."Suggestion";
CREATE POLICY "service_role_full_access" ON public."Suggestion"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 15. User --------------------------------------------------------------
ALTER TABLE public."User" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."User";
CREATE POLICY "service_role_full_access" ON public."User"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 16. WeeklyReport ------------------------------------------------------
ALTER TABLE public."WeeklyReport" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."WeeklyReport";
CREATE POLICY "service_role_full_access" ON public."WeeklyReport"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 17. _applied_migrations (our local migration ledger) ------------------
ALTER TABLE public."_applied_migrations" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."_applied_migrations";
CREATE POLICY "service_role_full_access" ON public."_applied_migrations"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 18. _prisma_migrations (Prisma migration history) ---------------------
ALTER TABLE public."_prisma_migrations" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."_prisma_migrations";
CREATE POLICY "service_role_full_access" ON public."_prisma_migrations"
  FOR ALL TO service_role USING (true) WITH CHECK (true);
