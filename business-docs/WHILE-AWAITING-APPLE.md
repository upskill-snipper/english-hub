# While Awaiting Apple — What To Do Now

> **Version.** 1.0 · **Status.** Live · **Owner.** Founder — Upskill Energy Limited · **Last updated.** 2026-04-21

You are blocked only on Apple Developer Programme enrolment approval. **Everything else can run in parallel.** This checklist sequences those parallel tasks so that the moment Apple approves you can do the iOS-specific items in a single short session and submit.

Total founder effort while you wait: **~4–6 hours over 3–5 days**, spread as you have time. After Apple approves: **~90 minutes** to finish iOS-specific setup and submit.

---

## Legend

- 🟢 **Do now** — no blockers
- 🟡 **Do now if comfortable** — can be done now but also fine to defer
- 🔒 **Waits for Apple** — do NOT attempt until you have Developer Programme access
- ⏱ **Time estimate** for the founder's hands-on portion
- 💷 **Cost** if any

Every task references an existing doc in this repo — nothing here is new reading material.

---

## Tier 0 — Local environment set-up (do this first)

Before anything else, get the mobile repo running locally so you can smoke-test as you go.

### 0.1 · 🟢 Install pnpm and boot the mobile repo

**Time:** 20 min · **Cost:** £0

```
cd D:\Coding\english-hub-mobile
npm install -g pnpm@9.12.0
pnpm install
pnpm typecheck
pnpm test:ci
```

Fix any TypeScript or test failures surfaced here before continuing. If `pnpm typecheck` flags missing Prisma types, that's expected — it resolves after you run the migrations (Tier 1).

### 0.2 · 🟢 Copy env example to .env.local

**Time:** 5 min

```
copy .env.example .env.local
```

Populate the dev values. The Supabase URL + anon key are safe to reuse from your web repo's `.env`. RevenueCat + Sentry keys can stay empty for now — Tier 3 fills them in.

Set `EXPO_PUBLIC_ENV=dev` and `EXPO_PUBLIC_REVENUECAT_MOCK=true` for local development. That escape hatch lets the app boot on Expo Go without RevenueCat keys.

### 0.3 · 🟢 Boot on your phone via Expo Go

**Time:** 10 min

```
pnpm start
```

Scan the QR code with the Expo Go app. Confirm the splash clears, the welcome carousel renders, and you can tap through to register → consent → home. Anything broken here is a boot blocker — ping me.

---

## Tier 1 — Supabase migrations (unblocks everything downstream)

Nothing ships without these landing. Five new migration files in order.

### 1.1 · 🟢 Run the 5 Wave 4 + 5 migrations

**Time:** 20 min · **Cost:** £0 · **Unlocks:** Prisma client re-generation, mobile boot

**Link:** https://supabase.com/dashboard/project/_/sql/new

Run them **in this exact order** — the ordering matters because `app_user_id()` is referenced by later migrations.

1. `supabase/migrations/20260420_00_app_user_id_fn.sql`
2. `supabase/migrations/20260420_01_revenuecat_mobile.sql`
3. `supabase/migrations/20260420_02_stripe_columns_nullable.sql`
4. `supabase/migrations/20260420_03_revenuecatevent_index.sql`
5. `supabase/migrations/20260420_04_bulk_upload_job.sql` (if present from Wave 5)
6. `supabase/migrations/20260421_00_app_user_id_fn_text_return.sql` (hotfix — changes `app_user_id()` return type to text for Prisma `User.id` compatibility)

**Canonical one-shot variant:** `supabase/migrations/_RUN-ALL-MOBILE-MIGRATIONS.sql` consolidates steps 1–6 in order and is the recommended apply path for a clean environment.

Copy each file content into the SQL editor → Run. Each is idempotent (uses `IF NOT EXISTS`) so re-running is safe.

**Then in the web repo locally:**

```
cd D:\Coding\english-hub
pnpm prisma generate
pnpm typecheck
```

The TypeScript errors flagged by the web-side webhook agent will resolve on `prisma generate`.

**Do this on staging first, verify, then production.** Vercel runs prod on Supabase prod project — make sure you migrate prod before the next EAS deploy of mobile.

### 1.2 · 🟢 Verify RLS is live

**Time:** 5 min

In Supabase SQL editor:

```sql
select tablename, rowsecurity
from pg_tables
where schemaname = 'public'
  and tablename in ('Subscription','MobileDevice','RevenueCatEvent','OfflineEssayQueueItem','BulkUploadJob');
```

Expect `t` (true) for every row. If any return `f`, re-run the ENABLE RLS block in the corresponding migration.

---

## Tier 2 — Google Play Console (runs independently of Apple)

Get the Android side fully wired while Apple approves you.

### 2.1 · 🟢 Create Play Console app record

**Time:** 30 min · **Cost:** £0 (assumes Developer account exists)

**Link:** https://play.google.com/console

1. Create app → Package name `com.upskillenergy.theenglishhub`.
2. App name **The English Hub** · Default language **en-GB** · Type **App** · Category **Education**.
3. Set yourself as owner on behalf of **Upskill Energy Limited**.
4. Complete the **App access** section (reviewer credentials placeholder for now — populated in Tier 4).
5. Complete the **Ads** declaration — No (we don't serve ads).
6. Complete the **Content rating** questionnaire — expected outcome **IARC 3+ / PEGI 3 / ESRB Everyone**.
7. Complete the **Target audience and content** declaration — 13+, **NOT Designed for Families**, Teacher Approved opt-**OUT**.

### 2.2 · 🟢 Data Safety form

**Time:** 20 min

Paste from `D:\Coding\english-hub-mobile\docs\STORE_METADATA_PACK.md` §6 — everything is pre-filled (data categories, purposes, sharing destinations, encryption, deletion mechanism).

### 2.3 · 🟢 Enable Play App Signing + Play Billing

**Time:** 15 min

Play Console → App integrity → Play App Signing → **Enable**. Let Google generate the app signing key; keep a local copy of the upload key.

Play Console → Monetisation → Subscriptions → enable Play Billing v7.

### 2.4 · 🟢 Create the 4 Android IAP subscriptions

**Time:** 25 min

Source: `D:\Coding\english-hub\business-docs\REVENUECAT-SETUP.md` §D2. Pre-filled table — copy display names, SKU IDs, billing periods, prices (Early Access), and the 7-day intro offers.

SKUs (Android product IDs — note `eh_` prefix):
- `eh_student_monthly` — £3.99/mo · 7-day free trial
- `eh_student_annual` — £29.99/yr · 7-day free trial
- `eh_teacher_monthly` — £6.99/mo · 7-day free trial
- `eh_teacher_annual` — £67.99/yr · 7-day free trial

Save each as **Active** but leave unpublished until you submit.

### 2.5 · 🟢 Generate Google service account JSON

**Time:** 20 min

Play Console → Users and permissions → Service accounts → **Create in Google Cloud**. Grant: Finance · View financial data · Manage orders · View app information. Download JSON. Keep it in 1Password — never commit to git.

---

## Tier 3 — RevenueCat account + Android-side setup

Do the parts that don't need Apple now. Finish Sections A, C, D2, E, F, G, H of REVENUECAT-SETUP.md. Skip Section B (iOS) until Apple approves.

### 3.1 · 🟢 Create RevenueCat project

**Time:** 15 min · **Cost:** £0

**Link:** https://app.revenuecat.com/signup

Follow `REVENUECAT-SETUP.md` §A in full. Sign up with `legal@theenglishhub.app` (must be working — see Tier 4.1). EU region. Project name **The English Hub**. Enable 2FA.

### 3.2 · 🟢 Add the Android app to RevenueCat

**Time:** 15 min

Follow `REVENUECAT-SETUP.md` §C. Upload the Google service account JSON from Tier 2.5. Capture the Android SDK API key.

### 3.3 · 🟢 Create entitlements + offerings

**Time:** 10 min

Per §E: create entitlements `pro` (attaches all 4 products, iOS+Android once iOS side lands) and `teacher_tools` (attaches 2 teacher products).

Per §F: create the `default` offering. Package identifiers: `$rc_monthly`, `$rc_annual`, `teacher_monthly`, `teacher_annual`. For now only the Android packages attach; iOS packages join once Apple unblocks.

### 3.4 · 🟢 Configure the webhook

**Time:** 10 min

Per §G:
- Generate 64-char random at https://1password.com/password-generator (letters + digits only).
- RevenueCat → Project settings → Integrations → Webhooks → URL `https://theenglishhub.app/api/revenuecat/webhook`, Bearer token = that random string.
- Vercel → english-hub → Settings → Environment Variables (Production) → add `REVENUECAT_WEBHOOK_SECRET` = that same string.
- Also add `REVENUECAT_SECRET_API_KEY` = RevenueCat's server-side API key (Project → API Keys → Server).
- Redeploy production for env vars to take effect.

### 3.5 · 🟢 Add the Android SDK key to EAS

**Time:** 5 min

```
eas secret:create --name EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY --value <key> --visibility public
```

Public visibility is correct — the SDK key is safe for client bundle.

---

## Tier 4 — Web + ops prep

Things on the web repo + operational housekeeping.

### 4.1 · 🟢 Confirm Cloudflare email aliases are live

**Status: Complete 2026-04-21** — all 8 aliases live and forwarding to `info@upskillenergy.com`.

**Time:** 5 min

Per `business-docs/CLOUDFLARE-EMAIL-SETUP.md`. Specifically verify these aliases forward correctly to `info@upskillenergy.com`:
- `legal@theenglishhub.app` (used for RevenueCat login)
- `reviews@theenglishhub.app` (Trustpilot)
- `dpo@theenglishhub.app` (DPIA contact per `docs/DPIA_MOBILE.md`)
- `security@theenglishhub.app` (cyber essentials correspondence)

If any are missing, fix before continuing. Send a test email to each.

### 4.2 · 🟢 Claim Trustpilot Business profile

**Status: Complete 2026-04-21.** Profile claimed; BCC-invite email `theenglishhub.app+45777e1d0c@invite.trustpilot.com` (`TRUSTPILOT_INVITE_EMAIL`); InviteJS integration key `v5nUhdVBgegtcCLG` (`NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY`); Business Unit ID `69e9a869c2bb1d03a6752578` (`NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` web + `EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` mobile). Verification ID pending. Values captured in env but still need populating in Vercel + EAS.

**Time:** 15 min · **Cost:** £0 (free tier)

**Link:** https://business.trustpilot.com/signup

Sign up with `reviews@theenglishhub.app`. Claim profile for `theenglishhub.app`. Capture the **Business Unit ID** from Settings → Company Info.

Then:
- Vercel → env vars → Production: `TRUSTPILOT_ENABLED=true`, `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=<value>`.
- EAS secret: `EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=<value>` (visibility: public).
- Redeploy Vercel.

### 4.3 · 🟢 Provision reviewer demo accounts

**Time:** 25 min

Create two accounts via the web sign-up flow:
- `reviewer+apple@theenglishhub.app` · password (generate, save to 1Password)
- `reviewer+google@theenglishhub.app` · password (same)

Then grant them Pro entitlement manually. In Supabase SQL editor:

```sql
-- Find user ids
select id, email from "User" where email like 'reviewer+%';

-- Create a synthetic active subscription for each
insert into "Subscription" (
  id, "userId", "stripeCustomerId", "stripeSubscriptionId",
  plan, status,
  "currentPeriodStart", "currentPeriodEnd",
  platform, "revenuecatAppUserId", "revenuecatProductId",
  "createdAt", "updatedAt"
)
values
(
  gen_random_uuid(), '<reviewer_apple_user_id>',
  null, null,
  'ANNUAL', 'ACTIVE',
  now() - interval '1 day', now() + interval '365 days',
  'IOS',
  '<reviewer_apple_user_id>',
  'com.upskillenergy.theenglishhub.student.annual',
  now(), now()
);
-- Repeat for reviewer+google with platform='ANDROID' and product id 'eh_student_annual'
```

Then seed each account with a sample essay history — sign in as each reviewer once and submit 2-3 essays so the home screen has real content when App Review lands.

### 4.4 · 🟢 Set reviewer passwords into `STORE_METADATA_PACK.md`

**Time:** 3 min

Replace `<<SET_AT_SUBMISSION>>` in `docs/STORE_METADATA_PACK.md` with the two passwords (document them in-repo; the repo is private, and App Review notes need them paste-ready).

### 4.5 · 🟡 Publish `/press` and `/brand` pages

**Time:** 2–3 hours (designed + drafted content)

Listed in `STORE_METADATA_PACK.md` as TODO. If you want, I can draft the content as a follow-up agent — say the word and it lands in the web repo alongside the other legal pages.

### 4.6 · 🟡 EAS environment variables (the non-Apple ones)

**Time:** 15 min

```
eas secret:create --name EXPO_PUBLIC_SUPABASE_URL --value <value> --visibility public
eas secret:create --name EXPO_PUBLIC_SUPABASE_ANON_KEY --value <value> --visibility public
eas secret:create --name EXPO_PUBLIC_API_BASE_URL --value "https://theenglishhub.app/api" --visibility public
eas secret:create --name EXPO_PUBLIC_POSTHOG_API_KEY --value <value> --visibility public
eas secret:create --name EXPO_PUBLIC_POSTHOG_HOST --value "https://eu.i.posthog.com" --visibility public
eas secret:create --name EXPO_PUBLIC_SENTRY_DSN --value <value> --visibility public
eas secret:create --name EXPO_PUBLIC_APP_URL --value "https://app.theenglishhub.app" --visibility public
eas secret:create --name EXPO_PUBLIC_ENV --value "prod" --visibility public
eas secret:create --name SENTRY_AUTH_TOKEN --value <value> --visibility secret
```

The last one (`SENTRY_AUTH_TOKEN`, SECRET visibility) enables source-map upload at build time — flagged as a Partial in the W6 observability audit.

### 4.7 · 🟢 Hand the 18-ticket web backlog to the web team

**Time:** 10 min

Share `D:\Coding\english-hub-mobile\docs\WEB_TEAM_BACKLOG.md` with whoever owns web. Ticket IDs `BE-W5-01` through `BE-W5-18` with per-ticket acceptance criteria, severity, and a suggested delivery order (Wave A / B / C). **Wave A (5.5 person-days) are pre-submission blockers** — make sure those are scheduled before you submit.

Specifically, the 3 Critical-path Wave A tickets that I'd push for this week:
- `BE-W5-01` GET /parent/linked-children
- `BE-W5-02` GET /parent-reports[/:id]
- `BE-W5-04` POST /parent/invites/validate + /redeem

---

## Tier 5 — When Apple approves (do in one sitting, ~90 min)

The moment you receive the email.

### 5.1 · 🔒 Create App Store Connect app record

**Time:** 15 min

**Link:** https://appstoreconnect.apple.com/apps

New App → iOS → Bundle ID `com.upskillenergy.theenglishhub`. SKU = same. Primary language **English (U.K.)**. User Access **Full Access**.

### 5.2 · 🔒 Generate App-Specific Shared Secret

**Time:** 3 min

App Store Connect → My Apps → The English Hub → App Information → **App-Specific Shared Secret** → Generate (one per app). Copy it. This goes into RevenueCat in step 5.4.

### 5.3 · 🔒 Generate In-App Purchase `.p8` key

**Time:** 5 min

App Store Connect → Users and Access → Integrations → App Store Connect API → In-App Purchase → **Create key**. Download the `.p8` **once only** — Apple will not let you download it again. Store in 1Password.

### 5.4 · 🔒 Finish RevenueCat iOS setup (REVENUECAT-SETUP §B)

**Time:** 15 min

Per §B: Add iOS app to the RevenueCat project. Paste the Shared Secret from 5.2. Upload the `.p8` from 5.3. Capture the iOS SDK API key.

Then add to EAS:

```
eas secret:create --name EXPO_PUBLIC_REVENUECAT_IOS_API_KEY --value <key> --visibility public
```

### 5.5 · 🔒 Create the 4 iOS IAP products

**Time:** 25 min

Source: `REVENUECAT-SETUP.md` §D1. Mirror the Android SKUs but with iOS product IDs:
- `com.upskillenergy.theenglishhub.student.monthly`
- `com.upskillenergy.theenglishhub.student.annual`
- `com.upskillenergy.theenglishhub.teacher.monthly`
- `com.upskillenergy.theenglishhub.teacher.annual`

All at Early Access prices (see SHARED-CONTEXT.md). All with 7-day free trial as intro offer. Attach each to its corresponding RevenueCat package in `default` offering.

### 5.6 · 🔒 Generate APNs `.p8` key

**Time:** 10 min

Apple Developer Portal → Certificates, Identifiers & Profiles → Keys → **Create key** → enable **Apple Push Notifications service (APNs)**. Download `.p8` (one-time). Upload to EAS:

```
eas credentials
```

Select iOS → The English Hub → Push Notifications → Upload your APNs key.

### 5.7 · 🔒 Create Apple sandbox tester

**Time:** 5 min

App Store Connect → Users and Access → Sandbox Testers → **+**. Create one tester email not tied to your real Apple ID. Save credentials.

### 5.8 · 🔒 Signal me "Apple setup complete"

**Ping me** when all of 5.1–5.7 are done. I then dispatch Wave 7 to:
- Produce a production EAS build (iOS + Android).
- Run the regression-critical Maestro suite on the build.
- Run sandbox IAP smoke tests using your sandbox tester + Google internal tester.
- Generate final screenshots on the real build via Fastlane-style config.
- Paste the pre-filled metadata from `STORE_METADATA_PACK.md` into both consoles.
- Submit.
- Monitor.

---

## Master tracker

Tick as you complete. Aim for Tier 0–4 done before Apple approves.

- [ ] 0.1 Install pnpm + boot mobile repo (20 min)
- [ ] 0.2 .env.local populated (5 min)
- [ ] 0.3 Expo Go boot verified (10 min)
- [ ] 1.1 5 Supabase migrations run (staging + prod) (20 min)
- [ ] 1.2 RLS verified (5 min)
- [ ] 2.1 Play Console app record created (30 min)
- [ ] 2.2 Data Safety form submitted (20 min)
- [ ] 2.3 Play App Signing + Billing enabled (15 min)
- [ ] 2.4 Android IAP subscriptions created (25 min)
- [ ] 2.5 Google service account JSON downloaded (20 min)
- [ ] 3.1 RevenueCat project created (15 min)
- [ ] 3.2 Android app added to RC (15 min)
- [ ] 3.3 Entitlements + offering created (10 min)
- [ ] 3.4 Webhook configured + Vercel env vars set (10 min)
- [ ] 3.5 Android SDK key to EAS (5 min)
- [x] 4.1 Cloudflare aliases verified (completed 2026-04-21)
- [x] 4.2 Trustpilot Business profile claimed (completed 2026-04-21; BCC invite, InviteJS key, Business Unit ID all captured)
- [ ] 4.3 Reviewer demo accounts provisioned (25 min)
- [ ] 4.4 Reviewer passwords saved into STORE_METADATA_PACK (3 min)
- [ ] 4.5 /press + /brand pages published (2–3 hours — optional pre-submit)
- [ ] 4.6 EAS non-Apple secrets set (15 min)
- [ ] 4.7 Web backlog handed over (10 min)

**When Apple approves:**

- [ ] 5.1 App Store Connect app record (15 min)
- [ ] 5.2 Shared Secret generated (3 min)
- [ ] 5.3 IAP .p8 downloaded (5 min)
- [ ] 5.4 RevenueCat iOS complete (15 min)
- [ ] 5.5 iOS IAP products created (25 min)
- [ ] 5.6 APNs .p8 uploaded to EAS (10 min)
- [ ] 5.7 Sandbox tester created (5 min)
- [ ] 5.8 Ping me → Wave 7 kicks off

**Total hands-on time before Apple approves:** ~4 hours (or ~6 with press + brand).
**Total hands-on time after Apple approves, before I can start Wave 7:** ~90 minutes.

---

## Signal-back cadence

Once any of these complete, ping me with a one-liner and I'll do the corresponding codebase update:

- "Migrations run" → I verify Prisma types, update docs, mark R-033 closed.
- "Play Console ready" → I update ANDROID_REVIEW_GUIDE with real package identifier.
- "RevenueCat Android live" → I update the MOCK escape-hatch to default to false in staging.
- "Trustpilot live" → I update Maestro `trustpilot-invite-sheet.yaml` to hit the real invite URL.
- "Reviewers seeded" → I update STORE_METADATA_PACK with verbatim reviewer credentials.
- "Apple setup complete" → Wave 7 dispatch.

Everything you're unblocked on here is in this checklist. Everything else waits for Apple.
