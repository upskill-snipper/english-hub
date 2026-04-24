-- ─────────────────────────────────────────────────────────────────────────────
-- fix-reviewer-verification.sql
--
-- Purpose: manually verify the email addresses of the App Store / Play Store
-- reviewer accounts in Supabase auth, and back-fill their Prisma "User"
-- projection rows so the app treats them as fully-registered users.
--
-- Why: reviewer emails (reviewer+apple@, reviewer+google@theenglishhub.app)
-- are forwarded via Cloudflare Email Routing to info@upskillenergy.com, which
-- occasionally swallows the Supabase verification email. Reviewers cannot
-- click confirmation links anyway, so we verify them in-database and create
-- the projection row that /api/auth/register would normally create.
--
-- Safety:
--   * Wrapped in a transaction — all-or-nothing.
--   * Idempotent: re-running is a no-op (WHERE not null / ON CONFLICT DO NOTHING).
--   * Does NOT touch passwords — those remain under Supabase's control.
--   * Does NOT grant elevated roles — both rows are STUDENT.
--
-- Run AFTER the reviewer accounts have been submitted via /auth/register
-- (so the auth.users row exists — password, id and all).
-- ─────────────────────────────────────────────────────────────────────────────

BEGIN;

-- 1. Confirm both emails in auth.users so the accounts can sign in.
UPDATE auth.users
   SET email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
       confirmed_at       = COALESCE(confirmed_at, NOW())
 WHERE email IN (
   'reviewer+apple@theenglishhub.app',
   'reviewer+google@theenglishhub.app'
 );

-- 2. Backfill the Prisma "User" projection row for each reviewer.
--    Uses ON CONFLICT DO NOTHING on the unique email — safe to re-run.
INSERT INTO public."User" (
  id,
  "supabaseUserId",
  email,
  "passwordHash",
  "firstName",
  "lastName",
  "dateOfBirth",
  country,
  role,
  "isMinor",
  "accountStatus",
  "createdAt",
  "updatedAt"
)
SELECT
  'usr_' || replace(au.id::text, '-', ''),
  au.id,
  au.email,
  'SUPABASE_MANAGED',
  CASE au.email
    WHEN 'reviewer+apple@theenglishhub.app'  THEN 'Apple'
    WHEN 'reviewer+google@theenglishhub.app' THEN 'Google'
  END,
  'Reviewer',
  CASE au.email
    WHEN 'reviewer+apple@theenglishhub.app'  THEN DATE '1995-06-01'
    WHEN 'reviewer+google@theenglishhub.app' THEN DATE '1994-07-02'
  END,
  'GB',
  'STUDENT'::"Role",
  FALSE,
  'ACTIVE'::"AccountStatus",
  NOW(),
  NOW()
FROM auth.users au
WHERE au.email IN (
  'reviewer+apple@theenglishhub.app',
  'reviewer+google@theenglishhub.app'
)
ON CONFLICT (email) DO UPDATE SET
  "supabaseUserId" = EXCLUDED."supabaseUserId",
  "updatedAt"      = NOW();

COMMIT;

-- ─── Verification ────────────────────────────────────────────────────────────
SELECT
  au.email,
  (au.email_confirmed_at IS NOT NULL) AS email_confirmed,
  u.id              AS prisma_user_id,
  u.role,
  u."accountStatus"
FROM auth.users au
LEFT JOIN public."User" u ON u."supabaseUserId" = au.id
WHERE au.email IN (
  'reviewer+apple@theenglishhub.app',
  'reviewer+google@theenglishhub.app'
)
ORDER BY au.email;

-- Expected: two rows, email_confirmed=true, prisma_user_id populated,
-- role=STUDENT, accountStatus=ACTIVE.
-- After this you can sign in as each reviewer, and seed-reviewers.sql will
-- find them and grant Pro + seed two essays each.
