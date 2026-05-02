# Apple App Review Demo Account — Runbook

Owner: Founder · Audience: whoever submits the iOS build to App Review · Cross-refs: `REVIEWER_NOTES_APPLE.md`, `../scripts/grant-reviewer-entitlement.ts`, `../scripts/seed-reviewers.ts`, `../supabase/migrations/20260501_apple_reviewer_account.sql`.

Provision the Apple App Review demo account so the reviewer can sign in and see every paid surface (AI marking, lesson builder, class progress, homework setter) without going through the StoreKit purchase flow.

| Field        | Value                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------- |
| Email        | `apple-reviewer@upskillenergy.com`                                                                  |
| Display name | Apple Reviewer                                                                                      |
| Role         | TEACHER                                                                                             |
| Plan         | Teacher Annual, ACTIVE, +365 days from grant                                                        |
| Platform     | IOS (RevenueCat-style entitlement, comped)                                                          |
| Locked flag  | Marketing / analytics / research / AI-training all OFF; `lastLoginAt` future-dated to skip dormancy |

Passwords go through Supabase Auth's hashing — they are NEVER written by SQL or scripts. The founder sets the password in the Supabase Dashboard and pastes it into App Store Connect.

---

## Step 1 — Create the Supabase auth user

In the Supabase Dashboard:

1. Navigate to **Authentication → Users → Add user → Create new user**.
2. Fill in:
   - **Email:** `apple-reviewer@upskillenergy.com`
   - **Password:** generate a 24-char password in 1Password ("App Review — Apple demo"); paste it here.
   - **Auto Confirm User:** **on** (no email verification step).
3. Click **Create user**.
4. The new row appears in the users table. **Copy the UUID** from the `ID` column.

## Step 2 — Copy the UUID

The UUID looks like `8a3f4d7e-0c12-4b1a-9f0e-6a2c3b4d5e6f`. Keep it on your clipboard for Step 3.

## Step 3 — Run the grant script

From the project root (`D:\Coding\english-hub`):

```bash
npx tsx scripts/grant-reviewer-entitlement.ts <UUID>
```

For example:

```bash
npx tsx scripts/grant-reviewer-entitlement.ts 8a3f4d7e-0c12-4b1a-9f0e-6a2c3b4d5e6f
```

This script (idempotent — safe to re-run):

- Upserts the Prisma `User` row keyed on email, role TEACHER, `supabaseUserId` linked to the auth row from Step 1, `lastLoginAt` future-dated.
- Upserts a `Subscription` row — Teacher Annual, ACTIVE, `currentPeriodEnd = NOW + 365 days`, platform IOS, RevenueCat product id `com.upskillenergy.theenglishhub.teacher.annual`. This drives `pickEntitlement()` in `src/lib/entitlements.ts` to return `pro=true`, `teacher_tools=true`, `status=active` on the wire.
- Upserts `PrivacySettings` with marketing, analytics, research-data, AI-training all OFF and `aiOptOut=true`.
- Upserts TERMS + PRIVACY consent rows at version 1.0.

The script ends with a verification block — confirm `subscription: ACTIVE/ANNUAL/IOS teacher=true` is printed.

The companion SQL migration `supabase/migrations/20260501_apple_reviewer_account.sql` is a no-op safety net that pre-declares the User shell row from `auth.users` if the migration runs before Step 3 has been performed — it does not replace the grant script.

## Step 4 — Seed demo content (essays + AI feedback)

So the reviewer doesn't sign in to an empty app, run the existing seed script with the apple-reviewer email override:

```bash
npx tsx scripts/seed-reviewers.ts --emails=apple-reviewer@upskillenergy.com
```

This populates:

- Two pre-marked essays (AQA Language Paper 1 descriptive writing + Edexcel Literature Paper 2 _A Christmas Carol_).
- AIFeedback rows with realistic AO1–AO5 breakdowns and predicted grades.

Note: the schema does not currently include `Class` / `Pupil` models — the "Year 11 demo class with three demo pupils" referenced in `REVIEWER_NOTES_APPLE.md` is a future addition. For this submission, the two pre-marked essays are sufficient to demonstrate AI marking, mock paper review, lesson builder (which works against the published curriculum content), and the teacher dashboard.

## Step 5 — Paste credentials into App Store Connect

In App Store Connect for the iOS app submission:

1. Open the build's **App Review Information** panel.
2. Under **Sign-In Information**:
   - **User name:** `apple-reviewer@upskillenergy.com`
   - **Password:** the password from Step 1 (copy from 1Password).
3. Under **Notes**: paste the contents of `docs/REVIEWER_NOTES_APPLE.md` (the longer block under "Reviewer Notes").
4. Save and submit for review.

## Verification before submission

Sign in via the iOS build (TestFlight) using the credentials above:

1. **Mobile WebView (primary surface)** — the WebView at `https://theenglishhub.app` is signed in (because `mobile/lib/auth.ts` writes the auth token + user id into Keychain via expo-secure-store, then calls `loginToRevenueCat(userId)` to alias the RC anonymous device id to the Supabase UUID). The web `/api/me/entitlements` endpoint reads the Subscription row this script created and returns `pro=true`, `teacher_tools=true`, `status=active`. **Every paid web surface inside the WebView (AI marking, lessons, classes, homework setter) unlocks immediately because that's what gates them.**
2. **Teacher surfaces** — `/teacher` routes (Lessons, Classes, Homework setter) all load without paywall inside the WebView.
3. **AI marking** — submit any short paragraph; feedback returns within ~30 seconds.
4. **Native Account screen — KNOWN LIMITATION:** `mobile/lib/purchases.ts → hasPremiumEntitlement()` calls `Purchases.getCustomerInfo()` on-device, which reads from the **RevenueCat** SDK (not our DB). RevenueCat does not know about a comped server-side entitlement, so the native Account tab may show "Upgrade" instead of "Premium active". This is cosmetic — the reviewer still has full paid access through the WebView surfaces. To suppress the upsell, **also** create a RevenueCat-side promotional grant (see "Optional — RevenueCat promotional entitlement" below).

If any of (1)–(3) fail, re-run Step 3 — the script is idempotent.

### Optional — RevenueCat promotional entitlement

So the native Account tab also reads as "Premium active":

1. RevenueCat dashboard → **Customers → Search** → enter the Supabase UUID (this is the RC `app_user_id`).
2. **Grant Promotional → Entitlement: `premium`** → duration 1 year → reason "App Review demo".
3. The RC SDK on-device will pick this up on next `getCustomerInfo()` call, and `hasPremiumEntitlement()` will return `true`.

## Rollback (after the App Review window closes)

```bash
# 1. SQL — remove application rows (passwords stay in auth.users until you
#    delete the user via the Supabase dashboard).
psql "$DATABASE_URL" <<'SQL'
BEGIN;
DELETE FROM "AIFeedback"      WHERE id LIKE 'aif_reviewer_%';
DELETE FROM "Essay"           WHERE id LIKE 'ess_reviewer_%';
DELETE FROM "Consent"         WHERE id LIKE 'cns_apple_reviewer_%';
DELETE FROM "PrivacySettings" WHERE id  =  'prv_apple_reviewer';
DELETE FROM "Subscription"    WHERE id  =  'sub_apple_reviewer';
DELETE FROM "User"            WHERE email = 'apple-reviewer@upskillenergy.com';
COMMIT;
SQL

# 2. Supabase Dashboard → Auth → Users → row for apple-reviewer@... → Delete user.
```

## Troubleshooting

| Symptom                                                        | Meaning                                               | Fix                                                                  |
| -------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| `Argument is not a valid UUID`                                 | Pasted the email instead of the UUID.                 | Copy the UUID from the `ID` column in the Supabase Auth users table. |
| `Foreign key constraint failed on the field: supabaseUserId`   | The auth.users row was deleted between Steps 1 and 3. | Recreate the auth user (Step 1), copy the new UUID, re-run Step 3.   |
| Reviewer sees paywall after sign-in                            | Entitlement not set, or RC session not aliased.       | Re-run Step 3, then in the app: Account → Restore purchases.         |
| Mobile shows "Premium active" but teacher surfaces still gated | `isTeacherPlan` not set on Subscription.              | Re-run Step 3 (it sets `isTeacherPlan=true` on the upsert).          |
| Reviewer receives a marketing email                            | PrivacySettings not locked.                           | Re-run Step 3 — sets `marketingEnabled=false`. Confirm via DB query. |
