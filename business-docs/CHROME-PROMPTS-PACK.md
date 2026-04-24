# Claude-for-Chrome Prompts Pack

> **Purpose.** Ready-to-paste prompts for every remaining founder-driven dashboard task before Wave 7. Open the target page in your browser, then paste the matching prompt into Claude-for-Chrome.
> **Version.** 1.0 · **Last updated.** 2026-04-21 · **Owner.** Founder

---

## How to use

1. Open the URL at the top of each section in a Chrome tab.
2. Open the Claude-for-Chrome side panel (keyboard shortcut or extension icon).
3. Copy the prompt between the `>>>>>> START` and `<<<<<< END` markers.
4. Paste into Claude-for-Chrome, hit send.
5. Claude operates the page and either completes the task or tells you what it needs.
6. When Claude asks for a value (e.g. a random 64-char string), generate it per the instructions in the prompt.

Prompts work one at a time — do not queue them. Complete each, tick the tracker at the bottom, move on.

---

## 1. Supabase migrations — consolidated SQL run

**Open first:** https://supabase.com/dashboard/project/_/sql/new

**Pre-requisite:** Have `D:\Coding\english-hub\supabase\migrations\_RUN-ALL-MOBILE-MIGRATIONS.sql` open in VS Code — you'll be asked to paste its contents.

>>>>>> START

You are operating the Supabase SQL Editor tab I have open. Your job is to run one consolidated migration SQL bundle that provisions the mobile schema, then verify the result.

**Preflight.** Confirm the tab shows the Supabase SQL Editor with a query canvas. If the editor has existing SQL, ask me before clobbering it — normally it should be empty or contain a previous migration attempt, both of which are fine to replace.

**Step 1 — paste the SQL.** In my next message I will paste the full contents of `D:\Coding\english-hub\supabase\migrations\_RUN-ALL-MOBILE-MIGRATIONS.sql`. When I do, copy it verbatim into the SQL Editor canvas. Do not modify a single character.

**Step 2 — run.** Click the green "Run" button (bottom-right) or press `Ctrl+Enter`. Wait for the result panel.

**Step 3 — diagnose.**

- If you see a 4-row result table with columns `check_name`, `status`, `detail` — read each row. Every row should say `PASS`. Report back: "4/4 checks passed, migrations complete".
- If any row says `FAIL`, copy the full row back to me.
- If you see a red error banner, copy the error code + hint back to me. Common ones:
  - `42883 operator does not exist: text = uuid` — SQL didn't paste correctly; re-paste and re-run.
  - `42P01 relation "X" does not exist` — a previous failed run rolled back tables; re-running the same SQL will succeed.
  - `25001 ALTER TYPE ADD VALUE cannot run inside a transaction block` — tell me and I'll split the query.
  - `42501 permission denied` — wrong Supabase project or role; tell me.

**Rules.** Do not paste anything other than the SQL I send. Do not run ad-hoc queries. Do not navigate away after Run.

Ready. I'll paste the SQL next.

<<<<<< END

---

## 2. Google Play Console — app record + Data Safety + IAP subscriptions

**Open first:** https://play.google.com/console

**Pre-requisite:** Play Console Developer account active + identity verification complete.

>>>>>> START

You are operating the Google Play Console tab I have open for Upskill Energy Limited. Your job is to create the app record, configure Play App Signing + Billing, create 4 subscription SKUs, and complete the Data Safety form.

**Pre-flight.** Confirm the top of the page shows "Google Play Console" and the account is Upskill Energy Limited. If you're on a different account, stop and tell me.

**Task 1 — create the app record.**

1. Click "Create app" (top-right).
2. App name: **The English Hub**
3. Default language: **English (United Kingdom) – en-GB**
4. App or game: **App**
5. Free or paid: **Free** (the monetisation is in-app subscriptions)
6. Declarations: tick both (Developer Program Policies + US export laws).
7. Click "Create app".
8. On the next page, set the package name to `com.upskillenergy.theenglishhub`. Confirm this package name is not already taken — if it is, stop and tell me.

Report: "App record created: com.upskillenergy.theenglishhub."

**Task 2 — app-level declarations.**

Go to "Policy and programs" > "App content" in the left nav. Complete each of these:

- **Privacy policy:** `https://theenglishhub.app/legal/privacy`
- **App access:** "All functionality is available without special access" → add a reviewer note: "Demo reviewer account credentials are provided in the review notes on the bundle upload."
- **Ads:** "No, my app does not contain ads"
- **Content rating:** Start the IARC questionnaire. Answers:
  - Category: Education
  - Contains violence? No
  - Contains sexual content? No
  - Strong language? No
  - Drug use? No
  - Gambling? No
  - User-generated content? Yes — student essays, moderated by AI + human review
  - Discloses user's location? No
  - Digital purchases? Yes
  - Restricted content? No
- **Target audience and content:** Target age group **13–17 and 18+** (UNTICK "Designed for families"). Teacher Approved programme: **opt out**.
- **News app:** No
- **COVID-19 contact tracing:** No
- **Data Safety:** see Task 4 below (dedicated fill-in).
- **Advertising ID:** "My app does not use advertising ID"
- **Government app:** No
- **Financial features:** No

Report: "App declarations complete."

**Task 3 — Play App Signing + Play Billing.**

1. Left nav > "App integrity" > "Play App Signing" → enable. Let Google generate the app signing key.
2. Left nav > "Monetize" > "Subscriptions" → if prompted, enable Play Billing v7.

Report: "Play App Signing enabled, Play Billing v7 enabled."

**Task 4 — Data Safety form.**

Go to "Policy and programs" > "App content" > "Data safety". I'll paste you a block of pre-answered Data Safety declarations in my next message. Follow the structure and tick boxes accordingly. The answers come from `D:\Coding\english-hub-mobile\docs\STORE_METADATA_PACK.md` § 6.

Ask me to paste the pre-filled answers when you reach this step.

**Task 5 — create the 4 subscription SKUs.**

Go to "Monetize" > "Subscriptions". Create each of:

| Display name | SKU ID | Billing period | Price | Free trial |
|---|---|---|---|---|
| Student Monthly | `eh_student_monthly` | Monthly | £3.99 | 7 days |
| Student Annual | `eh_student_annual` | Yearly | £29.99 | 7 days |
| Teacher Monthly | `eh_teacher_monthly` | Monthly | £6.99 | 7 days |
| Teacher Annual | `eh_teacher_annual` | Yearly | £67.99 | 7 days |

For each:

1. Click "Create subscription".
2. Fill Product ID (use the SKU column above verbatim).
3. Name (Display name column).
4. Description: "Unlimited AI-marked essays, full progress tracking, and all mark schemes. Cancel anytime." (max 80 chars — pad if needed).
5. Set the base plan:
   - Duration: Monthly or Yearly per row.
   - Price: set as per the Price column (GBP as the base currency; accept Google's auto-conversion to other currencies when prompted).
6. Add an "intro offer" → "Free trial, 7 days". First-time subscriber only.
7. Save as **Active** but leave the subscription status as draft (do not publish) until we're ready to submit.

Report: "All 4 subscriptions created in draft."

**Task 6 — generate Google service account JSON.**

Go to "Users and permissions" > "Service accounts" > "Create in Google Cloud". Walk me through the dialogue — when you get to Google Cloud, stop and tell me. I'll guide you through the IAM permissions there (Finance, View financial data, Manage orders, View app information).

**Rules.** Do not publish anything. Do not upload a binary. Do not submit for review. Every step reports back with "Report: <status>".

Begin with Task 1.

<<<<<< END

---

## 3. Google Play — Data Safety form (paste-after-prompt block)

Once Claude prompts you for the Data Safety declarations at Task 4 above, paste this block:

>>>>>> START (paste after Claude asks)

Data Safety declarations for theenglishhub.app (Upskill Energy Limited):

**Data collection and sharing:**
- Collect or share any data: **Yes, data collected**
- All user data collected is encrypted in transit: **Yes**
- Data can be requested to be deleted: **Yes** (via `/legal/data-subject-requests`)

**Data types collected:**

- **Personal info:** Email address, Name, User ID — all "Required", purposes: Account management, App functionality.
- **Financial info:** None collected by us (Play Billing handles).
- **Health and fitness:** None.
- **Messages:** None (user essays stored but treated as "App activity" not "Messages").
- **Photos and videos:** Photos (optional, for essay import) — purpose: App functionality. Optional.
- **Audio files:** None.
- **Files and docs:** None beyond what the user types.
- **Calendar, contacts:** None.
- **App activity:** App interactions, In-app search history, Installed apps → No. User-generated content → **Yes** (essays) purpose: App functionality, AI/ML.
- **Web browsing:** None.
- **App info and performance:** Crash logs, Diagnostics, Other app performance data → **Yes**, purposes: Analytics, App functionality. Data is anonymised.
- **Device or other IDs:** Device or other IDs → **Yes** for push notifications, purposes: App functionality. Not linked to user in third-party analytics beyond PostHog.

**Security practices:**
- Data encrypted in transit: **Yes**
- Users can request data be deleted: **Yes**
- Committed to Play Families Policy: **No** (not a Families app)
- Independently validated security practices: **Not yet** (pending Cyber Essentials)

**Sharing with third parties:** Yes, with:
- Analytics providers (PostHog — anonymised)
- Error monitoring (Sentry — anonymised + PII scrubbed)
- Cloud storage (Supabase EU)
- AI service providers (Anthropic — essay text for marking, SCCs in place)
- Subscription management (RevenueCat, Apple, Google — purchase info only)
- Email service (Resend — for transactional email)

No data sold. No data shared for advertising or marketing by third parties.

Now tick each box in the Play Console form to match the declarations above. Report when complete.

<<<<<< END

---

## 4. RevenueCat — create project + Android app + entitlements + offerings + webhook

**Open first:** https://app.revenuecat.com/signup (if no account) or https://app.revenuecat.com (if signed in)

**Pre-requisite:** Tasks 1–6 from Google Play Console complete. Google service account JSON downloaded. `legal@theenglishhub.app` inbox accessible.

>>>>>> START

You are operating RevenueCat's dashboard. Your job is to create a project, add the Android app, create entitlements + the default offering, and configure the webhook.

**Preflight.** Confirm the URL shows `app.revenuecat.com`. If not, tell me.

**Task 1 — sign up or sign in.**

If signed out, sign up with the email `legal@theenglishhub.app`. Use a strong password from my password manager — I'll paste it when you ask. Enable 2FA when prompted. If already signed in, skip this task.

Report: "Signed in as legal@theenglishhub.app."

**Task 2 — create project.**

1. Click "New project" or "Create project".
2. Project name: **The English Hub**
3. Region: **EU** (for GDPR data residency)
4. Click Create.

Report: "Project 'The English Hub' created in EU region."

**Task 3 — add Android app.**

1. Inside the project, click "Apps" (left nav) > "+ Add app" > Android.
2. App name: **The English Hub (Android)**
3. Google Play package name: `com.upskillenergy.theenglishhub`
4. Google Service Account credentials: upload the JSON file from the Google Play task. Claude, ask me for the file path when you get here; I'll paste the JSON content and you can drag-drop it into the upload dialogue.
5. Click Save.

Report: "Android app added. Service account uploaded."

**Task 4 — capture the Android SDK API key.**

1. Go to "Project settings" > "API Keys".
2. Find the Google Play public key (starts with `goog_…`).
3. Copy it to your clipboard. Tell me the value; I'll store it in 1Password and paste it into EAS later.

Report: "Android SDK API key captured: [first 8 chars + '...']."

**Task 5 — create entitlements.**

1. Go to "Project settings" > "Entitlements".
2. Create a new entitlement:
   - Identifier: `pro`
   - Description: "Full access — AI marking, all mark schemes, progress, teacher tools if teacher."
3. Create a second entitlement:
   - Identifier: `teacher_tools`
   - Description: "Teacher-specific tools — class analytics, assignment creation, bulk marking."

Leave products unattached for now — we'll attach them after creating the offering.

Report: "Entitlements 'pro' and 'teacher_tools' created."

**Task 6 — create products + attach entitlements.**

Under Products (project-level), create 4 products. For each, the Product Identifier must match what we set in Google Play Console:

| Identifier | Type | Entitlements |
|---|---|---|
| `eh_student_monthly` | Subscription | `pro` |
| `eh_student_annual` | Subscription | `pro` |
| `eh_teacher_monthly` | Subscription | `pro`, `teacher_tools` |
| `eh_teacher_annual` | Subscription | `pro`, `teacher_tools` |

For each: "+ Add product" > paste identifier > Subscription > Save > open the product > attach entitlements as per the table.

Report: "4 products created, entitlements attached."

**Task 7 — create the default offering.**

1. Go to "Offerings".
2. "+ Add offering": Identifier `default`, Display name "Default".
3. Inside the offering, add 4 packages:
   - Package identifier `$rc_monthly` → attach `eh_student_monthly`
   - Package identifier `$rc_annual` → attach `eh_student_annual`
   - Package identifier `teacher_monthly` → attach `eh_teacher_monthly`
   - Package identifier `teacher_annual` → attach `eh_teacher_annual`
4. Mark the offering as the **current** offering (tick the "Current" flag).

Report: "Default offering created with 4 packages, marked as current."

**Task 8 — configure the webhook.**

1. Go to "Project settings" > "Integrations" > "Webhooks".
2. URL: `https://theenglishhub.app/api/revenuecat/webhook`
3. Authorization header type: **Bearer Token**.
4. For the token, generate a 64-character random alphanumeric. Ask me; I'll generate one via 1Password and paste it.
5. Test the webhook by clicking "Send test event" — expect a 401 (because the backend hasn't been redeployed with the new secret yet). Tell me the response code.

Report: "Webhook configured. Bearer token [first 8 chars + '...']. Test event returned [status code]."

**Task 9 — capture the server secret API key.**

1. Go to "Project settings" > "API Keys".
2. Find the "Secret API key" (starts with `sk_…`).
3. Copy the value. Tell me so I can put it into Vercel.

Report: "Secret API key captured: [first 8 chars + '...']."

**Rules.** Do not create iOS app yet — that waits for Apple approval. Do not publish or enable any paid Trustpilot tiers. Do not skip the EU region.

Begin with Task 1.

<<<<<< END

---

## 5. Vercel — environment variables (Trustpilot + RevenueCat)

**Open first:** https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables

>>>>>> START

You are operating the Vercel environment variables page for the `english-hub` project. Add the following secrets, each as a **Production**-scoped variable.

For each, click "Add Another", enter the Key + Value, tick only Production (untick Preview and Development), save.

Values I'll paste when you ask:

1. `REVENUECAT_WEBHOOK_SECRET` — 64-char random alphanumeric (I'll generate and paste).
2. `REVENUECAT_SECRET_API_KEY` — starts with `sk_…` (from RevenueCat dashboard).
3. `TRUSTPILOT_INVITE_EMAIL` — value: `theenglishhub.app+45777e1d0c@invite.trustpilot.com`
4. `TRUSTPILOT_ENABLED` — value: `true`
5. `NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY` — value: `v5nUhdVBgegtcCLG`
6. `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` — value: `69e9a869c2bb1d03a6752578`
7. `NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID` — I'll paste if I have it; otherwise leave for Trustpilot domain verification step.

Only `NEXT_PUBLIC_*` variables may also be ticked for Preview if we want TrustBox widgets visible on preview deploys — ask me which, default to Production-only.

After adding all 7, click the "Deployments" tab > latest production deploy > three-dot menu > "Redeploy". Wait for it to go green. Tell me the deployment URL.

Rules: do not delete existing env vars. Do not expose secret values in plain text in the chat — show only first 8 chars + "...".

<<<<<< END

---

## 6. EAS secrets — mobile env vars (run from your terminal, not Chrome)

Not a Chrome prompt — terminal commands. Run in `D:\Coding\english-hub-mobile\`:

```
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_URL --value "https://<your-project>.supabase.co" --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_ANON_KEY --value "<anon-key>" --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_API_BASE_URL --value "https://theenglishhub.app/api" --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY --value "<goog_...>" --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_POSTHOG_API_KEY --value "<phc_...>" --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_POSTHOG_HOST --value "https://eu.i.posthog.com" --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_SENTRY_DSN --value "https://...ingest.sentry.io/..." --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_APP_URL --value "https://app.theenglishhub.app" --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_ENV --value "prod" --visibility plaintext
eas secret:create --scope project --name EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID --value "69e9a869c2bb1d03a6752578" --visibility plaintext
eas secret:create --scope project --name SENTRY_AUTH_TOKEN --value "<sntryu_...>" --visibility secret
```

The iOS RevenueCat key is added after Apple approves (section 9 below).

---

## 7. Trustpilot — domain verification meta tag

**Open first:** https://business.trustpilot.com → Settings → Domain verification

>>>>>> START

You are in Trustpilot Business, on the Domain verification page. Walk me through:

1. Select the "Meta tag" or "HTML tag" verification method.
2. Copy the meta tag shown on screen. Tell me the content value — it looks like `<meta name="trustpilot-one-time-domain-verification-id" content="XXXXX" />`. I'll paste the content value into the web `.env` as `NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID`.
3. Once I've deployed, come back here and click "Verify".

Rules: do not click Verify yet. Just capture the meta content value.

<<<<<< END

---

## 8. Reviewer demo accounts (web sign-up, then SQL grant Pro)

**Open first:** https://theenglishhub.app/auth/register (your own production site)

**Task A — create both accounts via the web sign-up flow.**

Sign up twice, once per reviewer:

| Email | Password (generate, save to 1Password) |
|---|---|
| `reviewer+apple@theenglishhub.app` | (strong random, 16+ chars) |
| `reviewer+google@theenglishhub.app` | (strong random, 16+ chars) |

Complete the consent flow for each. DOB: set to a date 25+ years ago so both are treated as adult for Trustpilot eligibility too.

**Task B — grant Pro entitlement via SQL.**

Open https://supabase.com/dashboard/project/_/sql/new and paste this SQL (replace the two user IDs with the actual cuids from your `User` table — query them first with the first block):

```sql
-- Find the reviewer user ids
select id, email, "createdAt"
from "User"
where email in ('reviewer+apple@theenglishhub.app','reviewer+google@theenglishhub.app')
order by email;
```

Note the two ids. Then:

```sql
-- Grant Pro via a synthetic Subscription row for each reviewer
insert into "Subscription" (
  id, "userId",
  "stripeCustomerId", "stripeSubscriptionId",
  plan, status,
  "currentPeriodStart", "currentPeriodEnd",
  platform,
  "revenuecat_app_user_id", "revenuecat_product_id",
  "isTeacherPlan",
  "createdAt", "updatedAt"
)
values
(
  gen_random_uuid(),
  '<REVIEWER_APPLE_USER_ID>',     -- paste the apple reviewer's cuid here
  null, null,
  'ANNUAL', 'ACTIVE',
  now() - interval '1 day', now() + interval '365 days',
  'IOS',
  '<REVIEWER_APPLE_USER_ID>',
  'com.upskillenergy.theenglishhub.student.annual',
  false,
  now(), now()
),
(
  gen_random_uuid(),
  '<REVIEWER_GOOGLE_USER_ID>',    -- paste the google reviewer's cuid here
  null, null,
  'ANNUAL', 'ACTIVE',
  now() - interval '1 day', now() + interval '365 days',
  'ANDROID',
  '<REVIEWER_GOOGLE_USER_ID>',
  'eh_student_annual',
  false,
  now(), now()
)
on conflict ("userId") do update
  set status = 'ACTIVE',
      "currentPeriodEnd" = excluded."currentPeriodEnd",
      platform = excluded.platform,
      "updatedAt" = now();
```

**Task C — seed 2 essays per reviewer.**

Sign in as each reviewer in an incognito window (or use two browser profiles). Submit 2 essays so the home screen has real content when App Review lands. Don't worry about grade quality — you just need non-empty history.

**Task D — save the passwords.**

Update `D:\Coding\english-hub-mobile\docs\STORE_METADATA_PACK.md` where it says `<<SET_AT_SUBMISSION>>` with the two passwords. Commit.

---

## 9. (When Apple approves) App Store Connect — app record + App-Specific Shared Secret + IAP key

Do not run this until you have Developer Programme access.

**Open first:** https://appstoreconnect.apple.com/apps

>>>>>> START

You are in App Store Connect. Your job is to create the iOS app record, generate the Shared Secret, and generate an In-App Purchase API key.

**Task 1 — create the app record.**

1. Click "+" > "New App".
2. Platform: **iOS**
3. App name: **The English Hub**
4. Primary language: **English (U.K.)**
5. Bundle ID: select `com.upskillenergy.theenglishhub` (if not listed, we need to create the Bundle ID in Certificates, Identifiers & Profiles first — tell me).
6. SKU: `com.upskillenergy.theenglishhub`
7. User Access: **Full Access**
8. Create.

Report: "App record created, Apple ID [shown app id]."

**Task 2 — App Information → App-Specific Shared Secret.**

1. In the app, go to "App Information" > "App-Specific Shared Secret" > Generate.
2. Copy the secret. Tell me the value; I'll paste it into RevenueCat.

Report: "Shared Secret captured: [first 8 chars + '...']."

**Task 3 — IAP API key (`.p8`).**

1. Go to Users and Access > Integrations > "In-App Purchase" > "Create API Key".
2. Name: `RevenueCat IAP`
3. Download the `.p8` file — Apple only lets you download it ONCE. Save to a secure location (1Password, not git).
4. Copy the Key ID and Issuer ID shown. Tell me both.

Report: "IAP .p8 downloaded. Key ID: [id]. Issuer ID: [id]."

**Task 4 — Sign in with Apple capability.**

1. Go to Certificates, Identifiers & Profiles > Identifiers > `com.upskillenergy.theenglishhub`.
2. Enable **Sign In with Apple** capability.
3. Save.

Report: "SIWA enabled on bundle id."

**Task 5 — Associated Domains.**

Still on the identifier page, add Associated Domains capability. Configure:
- `applinks:theenglishhub.app`
- `applinks:app.theenglishhub.app`

Save.

Report: "Associated Domains configured."

**Task 6 — APNs key.**

1. Back on Certificates, Identifiers & Profiles, go to Keys > "+".
2. Name: `APNs — The English Hub`.
3. Tick "Apple Push Notifications service (APNs)".
4. Continue > Register > Download the `.p8`. Save to 1Password.
5. Copy the Key ID. Tell me.

Report: "APNs .p8 downloaded. Key ID: [id]. Team ID: [your Apple Developer Team ID]."

**Task 7 — Sandbox tester.**

1. App Store Connect > Users and Access > Sandbox Testers > "+".
2. Create a tester with an email NOT tied to your real Apple ID — a fresh address like `sandbox+apple1@theenglishhub.app` is ideal (you have the alias forwarding set up).
3. Country/Region: United Kingdom.
4. Set a password, save both to 1Password.

Report: "Sandbox tester created."

Rules: do NOT submit the app for review. Do NOT publish IAPs. These tasks are setup-only.

Begin with Task 1.

<<<<<< END

---

## 10. (When Apple approves) RevenueCat iOS add + iOS IAP product creation

After section 9 is complete.

**Open first:** https://app.revenuecat.com → your project > Apps > "+ Add app" > iOS

>>>>>> START

You are operating RevenueCat. Your job is to add the iOS app now that Apple approved, create iOS IAP products in App Store Connect, and attach them to the existing `default` offering.

**Task 1 — add iOS app to RevenueCat.**

1. Apps > "+ Add app" > iOS.
2. App name: **The English Hub (iOS)**.
3. App Store Connect App ID: [the Apple app id captured in section 9 Task 1].
4. Bundle ID: `com.upskillenergy.theenglishhub`.
5. App-Specific Shared Secret: paste the value from section 9 Task 2.
6. Upload the IAP `.p8` key from section 9 Task 3. Provide Key ID + Issuer ID.
7. Save.

Report: "iOS app added to RevenueCat."

**Task 2 — capture iOS SDK API key.**

1. Project settings > API Keys > Apple.
2. Copy the public key (starts with `appl_…`).
3. Tell me; I'll put it into EAS secrets.

Report: "iOS SDK API key captured: [first 8 chars + '...']."

**Task 3 — create iOS IAP products in App Store Connect.**

Switch to https://appstoreconnect.apple.com, open the app, Features > In-App Purchases. Create 4 auto-renewable subscriptions:

Subscription group: **Student and Teacher Plans** (create if missing).

| Product ID | Reference Name | Duration | Price (GBP) | Free trial |
|---|---|---|---|---|
| `com.upskillenergy.theenglishhub.student.monthly` | Student Monthly | Monthly | £3.99 | 7 days |
| `com.upskillenergy.theenglishhub.student.annual` | Student Annual | Yearly | £29.99 | 7 days |
| `com.upskillenergy.theenglishhub.teacher.monthly` | Teacher Monthly | Monthly | £6.99 | 7 days |
| `com.upskillenergy.theenglishhub.teacher.annual` | Teacher Annual | Yearly | £67.99 | 7 days |

For each: Subscription Group → the group above, Level 1. Localisation en-GB — Display Name and Description (ask me for the description text when prompted, from `STORE_METADATA_PACK.md`).

For each, set an Introductory Offer → Free Trial, 7 days.

Save each as **Ready to Submit** — they will be submitted alongside the app binary.

Report: "4 iOS IAPs in Ready to Submit status."

**Task 4 — attach iOS products to the RevenueCat `default` offering.**

Back in RevenueCat:

1. Products > create 4 iOS products:
   - `com.upskillenergy.theenglishhub.student.monthly` → attach `pro`.
   - `com.upskillenergy.theenglishhub.student.annual` → attach `pro`.
   - `com.upskillenergy.theenglishhub.teacher.monthly` → attach `pro`, `teacher_tools`.
   - `com.upskillenergy.theenglishhub.teacher.annual` → attach `pro`, `teacher_tools`.
2. Offerings > `default` offering > each of the 4 existing packages should now accept BOTH the Android product (already there) AND the matching iOS product. Add the iOS product to each matching package (`$rc_monthly` gets `eh_student_monthly` Android + `com.upskillenergy.theenglishhub.student.monthly` iOS, etc.).

Report: "iOS products live. `default` offering packages now dual-platform."

Rules: do not submit the iOS app binary yet — that's a separate EAS Submit step.

Begin with Task 1.

<<<<<< END

---

## Master tracker

Tick as Claude completes each task. Stop at section 8 until Apple approves.

Before Apple approval (do whenever you have time):

- [ ] 1. Supabase migrations (one big paste) — pending
- [ ] 2. Google Play Console — app record + declarations + signing + billing + 4 SKUs + service account JSON
- [ ] 3. (paste block) Data Safety answers
- [ ] 4. RevenueCat — project + Android + entitlements + offering + webhook
- [ ] 5. Vercel env vars (7 items) + redeploy
- [ ] 6. EAS secrets (terminal, 11 items)
- [ ] 7. Trustpilot domain verification meta tag captured
- [ ] 8. Reviewer demo accounts — signed up + Pro granted + seeded with 2 essays each + passwords saved

When Apple approves (~90 min in one sitting):

- [ ] 9. App Store Connect — app record + Shared Secret + IAP `.p8` + SIWA + Associated Domains + APNs + Sandbox tester
- [ ] 10. RevenueCat iOS add + iOS IAPs

After section 10 → ping me **"Apple setup complete"** → I dispatch Wave 7 and we submit.

---

## Signal-back cadence

Ping me any of the following as you go:

- "Migrations done" → I mark Tier 1 complete + run post-migration doc updates.
- "Play Console ready" → I update ANDROID_REVIEW_GUIDE with real package id.
- "RevenueCat Android live" → I update the MOCK escape hatch default for staging builds.
- "Vercel env vars + redeploy done" → I update LAUNCH_MONITORING_PLAN with the new deploy hash.
- "Trustpilot verification captured = XXXXX" → I paste it into the meta tag path.
- "Reviewer seeded: [ID1], [ID2]" → I update STORE_METADATA_PACK.md with real credentials.
- "Apple setup complete" → Wave 7 dispatch.
