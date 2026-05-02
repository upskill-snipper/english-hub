-- ─────────────────────────────────────────────────────────────────────────────
-- 20260501_apple_reviewer_account.sql
--
-- Provision the Apple App Review demo account (apple-reviewer@upskillenergy.com)
-- and grant it a Teacher Annual entitlement so Apple's reviewer can evaluate
-- every paid surface (AI marking, lesson builder, class progress, homework
-- setter) without going through the StoreKit purchase flow.
--
-- Account details (mirrors docs/REVIEWER_NOTES_APPLE.md):
--   Email:        apple-reviewer@upskillenergy.com
--   Display:      Apple Reviewer
--   Role:         TEACHER  (so they see all teacher features end-to-end)
--   Plan:         ANNUAL, isTeacherPlan=TRUE
--   Status:       ACTIVE, currentPeriodEnd = NOW + 365 days
--   Locked flag:  marketing/analytics/research disabled in PrivacySettings,
--                 lastLoginAt held in the future so the dormancy sweep won't
--                 touch it. (See lib/dormancy logic — driven by lastLoginAt.)
--
-- Two-step provisioning (passwords go through Supabase Auth's hashing, not SQL):
--
--   STEP 1 — Founder: Supabase Dashboard → Auth → Users → Add user
--            email:    apple-reviewer@upskillenergy.com
--            password: <set in 1Password, then paste into App Store Connect>
--            Confirm "Auto Confirm User" so no email-verify link is needed.
--            Copy the resulting UUID.
--
--   STEP 2 — Founder runs scripts/grant-reviewer-entitlement.ts <UUID>
--            That TS script does the prisma upserts: User row (TEACHER),
--            Subscription (Teacher Annual ACTIVE), PrivacySettings (locked),
--            and consent rows. It also calls scripts/seed-reviewers.ts under
--            the hood (or the founder runs it separately) for the demo
--            essays + feedback so the reviewer sees a populated UI.
--
-- This SQL migration itself is INTENTIONALLY MINIMAL: it only PRE-DECLARES the
-- application-level User shell row IFF the auth user has already been created
-- AND IFF the corresponding Prisma User row has not. In practice the migration
-- is a no-op the first time it runs (because the Supabase auth user does not
-- exist yet) and a safety net in subsequent re-runs after STEP 1 has been
-- performed but STEP 2 has not. Idempotent via ON CONFLICT DO NOTHING.
--
-- Rollback: see end of file.
-- ─────────────────────────────────────────────────────────────────────────────

BEGIN;

-- ── Pre-declare the application User row if (and only if) the founder has
--    already created the Supabase auth user but has not yet run the grant
--    script. We use an INSERT ... SELECT FROM auth.users so this becomes a
--    silent no-op on first run.

INSERT INTO "User" (
  id,
  "supabaseUserId",
  email,
  "passwordHash",
  "firstName",
  "lastName",
  "dateOfBirth",
  role,
  "isMinor",
  country,
  "accountStatus",
  -- Hold lastLoginAt in the future so dormancy / re-engagement sweeps skip
  -- this account. Founder can clear it once the App Review window closes.
  "lastLoginAt",
  "createdAt",
  "updatedAt"
)
SELECT
  'usr_apple_reviewer',                                  -- stable synthetic id
  au.id,                                                  -- auth.users UUID
  'apple-reviewer@upskillenergy.com',
  '__SUPABASE_AUTH_OWNS_PASSWORD__',                     -- sentinel; never used
  'Apple',
  'Reviewer',
  '1990-01-01'::timestamp,                                -- adult, not minor
  'TEACHER'::"Role",
  FALSE,
  'GB',
  'ACTIVE'::"AccountStatus",
  NOW() + INTERVAL '400 days',                            -- locked: future-dated
  NOW(),
  NOW()
FROM auth.users au
WHERE au.email = 'apple-reviewer@upskillenergy.com'
ON CONFLICT (email) DO NOTHING;

-- Verification: show whether the row landed. If the founder runs this BEFORE
-- creating the Supabase auth user, the SELECT below returns 0 rows — that's
-- expected. After STEP 1 + STEP 2 the row should be present with role=TEACHER
-- and a Subscription joined.

COMMIT;

-- ── Verification query (read-only, run manually if desired) ────────────────
-- SELECT u.email, u.role, u."accountStatus", s.status, s.plan, s."isTeacherPlan",
--        s."currentPeriodEnd"::date AS renews_on
--   FROM "User" u
--   LEFT JOIN "Subscription" s ON s."userId" = u.id
--  WHERE u.email = 'apple-reviewer@upskillenergy.com';

-- ── Rollback (manual; not run automatically) ───────────────────────────────
-- BEGIN;
-- DELETE FROM "AIFeedback"      WHERE id LIKE 'aif_apple_reviewer_%';
-- DELETE FROM "Essay"           WHERE id LIKE 'ess_apple_reviewer_%';
-- DELETE FROM "Consent"         WHERE id LIKE 'cns_apple_reviewer_%';
-- DELETE FROM "PrivacySettings" WHERE id  =  'prv_apple_reviewer';
-- DELETE FROM "Subscription"    WHERE id  =  'sub_apple_reviewer';
-- DELETE FROM "User"            WHERE id  =  'usr_apple_reviewer';
-- -- Note: the auth.users row is deleted via the Supabase dashboard, not SQL.
-- COMMIT;
