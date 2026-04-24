# RevenueCat — Step-by-Step Setup (30 minutes, £0)

---

Version 1.0 · Status Draft · Last updated 21/04/2026 · Owner Founder — Upskill Energy Limited

**Why this doc.** Mobile (iOS + Android) bills through RevenueCat, which fronts Apple IAP + Google Play Billing and posts reconciled events to the web backend. I cannot log into your Apple, Google, RevenueCat or Vercel accounts. This gets you from zero to a live sandbox IAP in ~30 minutes. £0 (RevenueCat free to $2,500 MTR).

---

## Pre-requisites — all eight must be true before you start

- [ ] Apple Developer Programme membership active as **Upskill Energy Limited** (paid, not personal).
- [ ] **D-U-N-S Number** confirmed on the Apple Developer account.
- [ ] Google Play Developer Console account active as **Upskill Energy Limited** (organisation, identity-verified).
- [ ] App Store Connect record for Bundle ID `com.upskillenergy.theenglishhub` exists (skeleton with Bundle ID reserved).
- [ ] Google Play Console app record for package `com.upskillenergy.theenglishhub` exists (skeleton OK).
- [ ] Access to Vercel → `upskill-snippers-projects/english-hub` → Environment Variables.
- [x] `legal@theenglishhub.app` is live (forwards to `info@upskillenergy.com`) — Cloudflare Email Routing complete 2026-04-21.
- [ ] EAS account linked to `english-hub-mobile` (`eas whoami` returns your email).

If any box is not ticked, stop and fix the prerequisite.

---

## Section A — RevenueCat account and project (4 min)

**A1. Sign up.** Open https://app.revenuecat.com/signup.

| Field | Value |
|---|---|
| Email | `legal@theenglishhub.app` |
| Password | 32-char from https://1password.com/password-generator/ → 1Password under `Mobile/RevenueCat/Admin` |
| Company | Upskill Energy Limited |

**Create account**. Verification email forwards to `info@upskillenergy.com` via Cloudflare. Click the link.

**A2. 2FA.** Top-right → **Account settings → Security → Two-factor authentication → Enable**. Scan QR. Save recovery codes in 1Password.

**A3. Create project.**

| Field | Value |
|---|---|
| Project name | `The English Hub` |
| Region | **EU** (GDPR — irreversible) |
| Industry | Education |
| Billing contact | `info@upskillenergy.com` |

Click **Create project**.

**Success criterion.** Breadcrumb "The English Hub"; Settings → General → Region EU.

---

## Section B — Add the iOS app (7 min)

**B1. Create the app row.** **Project settings → Apps → + New → App Store**.

| Field | Value |
|---|---|
| App name | `The English Hub — iOS` |
| Bundle ID | `com.upskillenergy.theenglishhub` |

**Save**. An iOS row appears (amber "Configuration incomplete").

**B2. App-Specific Shared Secret.** https://appstoreconnect.apple.com → **My Apps → The English Hub → App Information** → **App-Specific Shared Secret**. If "Not generated", click **Generate**. Apple shows a 32-char hex string **once** — copy to 1Password under `Mobile/Apple/AppSpecificSharedSecret`. Paste it into RevenueCat → your iOS app → **App-Specific Shared Secret** → **Save**.

**Success criterion.** Green tick next to "App-Specific Shared Secret".

**B3. In-App Purchase `.p8` key.** App Store Connect → **Users and Access → Integrations → In-App Purchase** (separate from APNs keys) → **Generate In-App Purchase Key** → Name `RevenueCat IAP Server`. Apple returns a `.p8` + **Key ID** (10 chars) + **Issuer ID** (UUID). **Download the `.p8` once** (no second download). Upload to 1Password under `Mobile/Apple/RevenueCatIAPKey`. In RevenueCat → your iOS app → **App Store Server API** → paste Key ID, Issuer ID, upload the `.p8` → **Save**.

**Success criterion.** iOS row badge turns green "Active".

**B4. iOS SDK public key.** RevenueCat → your iOS app → **API keys** → copy the **Public app-specific API key** (starts with `appl_`). 1Password under `Mobile/RevenueCat/iOS_PublicKey`. Used in Section H.

---

## Section C — Add the Android app (8 min)

**C1. Create the app row.** Project settings → Apps → **+ New → Play Store**.

| Field | Value |
|---|---|
| App name | `The English Hub — Android` |
| Package name | `com.upskillenergy.theenglishhub` |

**Save**. Amber badge appears.

**C2. Create the Google Cloud service account.** https://play.google.com/console → **Users and permissions → Invite new users → Service accounts → Learn how** (deep-links to Google Cloud). Cloud Console → select the project linked to Play Console (or create `english-hub-play-iap`) → **IAM & Admin → Service Accounts → + Create**. Name `revenuecat-iap`. Description `RevenueCat IAP reconciliation`. **Create and continue** → skip Grant → **Done**.

**C3. Generate the JSON key.** Click `revenuecat-iap@...iam.gserviceaccount.com` → **Keys → Add key → Create new key → JSON → Create**. Save the downloaded JSON to 1Password under `Mobile/Google/PlayServiceAccountJSON`. Do not commit to git.

**C4. Grant Play Console permissions.** Play Console → **Users and permissions → Invite new users** → paste the service account email → App permissions tab → select `The English Hub` → tick:

- View app information and download bulk reports
- View financial data, orders, and cancellation survey responses
- Manage orders and subscriptions
- Manage store presence

Click **Invite user → Send invitation** (service accounts auto-accept).

**C5. Upload the JSON to RevenueCat.** Your Android app → **Google Service Account Credentials → Upload credentials** → select the JSON → **Save**. Wait 30–60s; badge turns green.

**C6. Android SDK public key.** Same tab → **API keys** → copy the **Public app-specific API key** (starts with `goog_`). 1Password under `Mobile/RevenueCat/Android_PublicKey`.

**Success criterion.** Both iOS and Android rows show green "Active".

---

## Section D — Create the four subscription products (6 min)

Product IDs match `D:\Coding\english-hub-mobile\docs\SUBSCRIPTION_AND_ENTITLEMENTS.md` — paste verbatim.

### D1. App Store Connect — four auto-renewable subscriptions

My Apps → **The English Hub → Subscriptions → + Create Subscription Group** → name `EnglishHub Primary` → **Create**. All four products must sit in this one group so App Store Connect enforces one-active-at-a-time.

Inside the group, **+ Create Subscription** four times. Prices below are the Early Access — Founding Price tier (current IAP). Canonical values live in `D:\Coding\english-hub\src\constants\pricing.ts`. When the August 2026 Standard-pricing pivot lands, submit new IAPs at the Standard price and deprecate the Early Access SKUs — existing subscribers grandfather.

| Display name | Product ID | Duration | Price (GBP, Early Access) | Intro offer |
|---|---|---|---:|---|
| Student Monthly | `com.upskillenergy.theenglishhub.student.monthly` | 1 month | £3.99 | 7-day free trial |
| Student Annual | `com.upskillenergy.theenglishhub.student.annual` | 1 year | £29.99 | 7-day free trial |
| Teacher Monthly | `com.upskillenergy.theenglishhub.teacher.monthly` | 1 month | £6.99 | 7-day free trial |
| Teacher Annual | `com.upskillenergy.theenglishhub.teacher.annual` | 1 year | £67.99 | 7-day free trial |

For each:

- **Reference name** — same as Display name. **Duration** — `1 month` or `1 year` from dropdown.
- **Price Tier** — pick the UK-column tier at the GBP figure (£3.99 ≈ Tier 4). **Warning:** Apple's matrix is fixed per country; EEA local prices are FX/VAT-derived and drift from pure GBP conversion. The app renders the store-localised price at runtime — do not hand-edit per country.
- **Localisation → English (UK)** → Display Name + Description (required or Apple blocks review).
- **Introductory Offer → Create → Type: Free → Duration: 7 days → Territories: All → Eligibility: New Subscribers → Save**.
- **Review Information** → upload a paywall screenshot (mockup OK at this stage).

**Save** each. All four show "Ready to Submit".

### D2. Google Play Console — four subscriptions

Play Console → **The English Hub → Monetise → Products → Subscriptions → Create subscription** four times. Prices below are the Early Access — Founding Price tier (current IAP). Standard pricing (from August 2026) will be submitted as new SKUs nearer the date; existing subscribers grandfather.

| Display name | Product ID | Base plan ID | Duration | Price (GBP, Early Access) | Intro offer |
|---|---|---|---|---:|---|
| Student Monthly | `eh_student_monthly` | `monthly-autorenewing` | Monthly | £3.99 | 7-day free trial |
| Student Annual | `eh_student_annual` | `annual-autorenewing` | Yearly | £29.99 | 7-day free trial |
| Teacher Monthly | `eh_teacher_monthly` | `monthly-autorenewing` | Monthly | £6.99 | 7-day free trial |
| Teacher Annual | `eh_teacher_annual` | `annual-autorenewing` | Yearly | £67.99 | 7-day free trial |

For each SKU:

- **Product ID** — verbatim from column 2. **Immutable after save**; typo = delete and recreate.
- **Name** + **Description** — British English. **Base plan → Add base plan → Auto-renewing** → Monthly or Yearly → **Set price** → GBP → amount from column 5. Accept Play's auto-convert.
- **Offers → Add offer → Type: Free trial → Duration: 7 days → Eligibility: New customers only** (blocks trial-stacking). **Activate** base plan and offer.

**Success criterion.** Four SKUs in Play, each with one active base plan + one active free-trial offer.

---

## Section E — Create RevenueCat entitlements (2 min)

**Project settings → Entitlements → + New entitlement** twice.

| Identifier | Attach products |
|---|---|
| `pro` | All eight: the four App Store IDs + the four Play IDs |
| `teacher_tools` | Four only: `com.upskillenergy.theenglishhub.teacher.monthly`, `.teacher.annual`, `eh_teacher_monthly`, `eh_teacher_annual` |

For each: **+ New entitlement** → identifier verbatim (lowercase, underscore) → **Create** → detail page → **Attach products** → tick each → **Save**.

**Success criterion.** `pro` attaches 8; `teacher_tools` attaches 4.

---

## Section F — Create the RevenueCat offering (3 min)

The mobile SDK calls `Purchases.getOfferings()` and expects `default`. **Project settings → Offerings → + New offering**:

| Field | Value |
|---|---|
| Identifier | `default` |
| Is current | ON |

**Create**. Then **+ New package** four times with these exact identifiers — the SDK keys off them:

| Package identifier | iOS product | Android product |
|---|---|---|
| `$rc_monthly` | `com.upskillenergy.theenglishhub.student.monthly` | `eh_student_monthly` |
| `$rc_annual` | `com.upskillenergy.theenglishhub.student.annual` | `eh_student_annual` |
| `teacher_monthly` | `com.upskillenergy.theenglishhub.teacher.monthly` | `eh_teacher_monthly` |
| `teacher_annual` | `com.upskillenergy.theenglishhub.teacher.annual` | `eh_teacher_annual` |

`$rc_monthly` / `$rc_annual` are RevenueCat **reserved** — select from the dropdown with the dollar prefix intact. `teacher_monthly` / `teacher_annual` are **Custom** strings — type verbatim, **no** dollar prefix.

**Success criterion.** Offering `default` marked "Current" with four packages.

---

## Section G — Configure the webhook (5 min)

The webhook POSTs subscription events (INITIAL_PURCHASE, RENEWAL, REFUND, etc.) to the Next.js backend, which upserts Supabase `Subscription`.

**G1. Generate the bearer secret.** https://1password.com/password-generator/ → **Length: 64, Letters: on, Digits: on, Symbols: off** (header-safe). Save to 1Password under `Mobile/RevenueCat/WebhookBearerSecret`.

**G2. Configure the webhook.** **Project settings → Integrations → Webhooks → + New webhook**.

| Field | Value |
|---|---|
| URL | `https://theenglishhub.app/api/revenuecat/webhook` |
| Authorization header | `Bearer <paste the 64-char secret from G1>` |
| Event types | **All events** |
| Environment | Tick both Sandbox and Production |

**Save**. Click **Send test event** — expect `200 OK` if the route is live, `404` acceptable if not yet deployed (URL persists regardless).

**G3. Vercel env vars.** https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables. **Add new** twice, Production only:

| Key | Value |
|---|---|
| `REVENUECAT_WEBHOOK_SECRET` | the 64-char secret from G1 (just the secret, NOT the word `Bearer`) |
| `REVENUECAT_SECRET_API_KEY` | the `sk_...` server secret from RevenueCat → your app → **API keys → Secret key → Reveal** (NOT the `appl_`/`goog_` public keys). Save to 1Password under `Mobile/RevenueCat/ServerSecretKey`. |

**Save**.

**G4. Redeploy.** Vercel env changes need a redeploy. **Deployments → latest Production → kebab → Redeploy** → untick "Use existing Build Cache" → **Redeploy**. Wait ~2 min.

**Success criterion.** Integrations → Webhooks shows green "Last delivery: 200 OK" after a second **Send test event** post-redeploy.

---

## Section H — Wire the two public SDK keys into the mobile app (2 min)

The `appl_` and `goog_` keys from B4 and C6 ship in the mobile binary. Public-by-design — the secret key stays server-side. NOT for Vercel (Vercel runs the Stripe web app). They go into EAS secrets. Terminal in `D:\Coding\english-hub-mobile\`:

```bash
eas secret:create --name EXPO_PUBLIC_REVENUECAT_IOS_API_KEY --value appl_YOUR_IOS_KEY --visibility public
eas secret:create --name EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY --value goog_YOUR_ANDROID_KEY --visibility public
```

Replace placeholders with the keys from 1Password. `--visibility public` is correct — these are client-embedded SDK keys.

**Success criterion.** `eas secret:list` shows both names with visibility "public".

---

## Section I — Sandbox test plan (6 min — after mobile build installed)

Skip if the mobile build does not yet exist on a test device. Return in Wave 4.

**I1. iOS sandbox tester.** App Store Connect → **Users and Access → Sandbox Testers → +**:

| Field | Value |
|---|---|
| Name | Sandbox Tester 01 |
| Email | `eh-sandbox-01@upskillenergy.test` (invented — Apple does not send) |
| Password | 8-char → 1Password |
| Territory | United Kingdom |

**I2. Sign out of the real Apple ID.** iOS Settings → [name] → **Media & Purchases → Sign Out**. Leave iCloud signed in.

**I3. Purchase in-app.** Launch → tap Mark three times → paywall → **Start 7-day free trial** on Student Annual. Sign in with the sandbox tester. Sheet shows "[Sandbox]" in grey. Confirm.

**I4. Confirm webhook fired.** RevenueCat → **Customers** → your row (match by Supabase UUID) → **Events** → `INITIAL_PURCHASE` appears ≤30s, delivery `200 OK`.

**I5. Confirm Supabase reconciliation.** Supabase SQL editor:

```sql
SELECT "userId", plan, status, "isTeacherPlan", "currentPeriodEnd", source
FROM "Subscription"
WHERE "userId" = '<supabase user uuid>'
ORDER BY "createdAt" DESC LIMIT 1;
```

Expect `plan = 'ANNUAL'`, `status = 'TRIALING'`, `isTeacherPlan = false`, `source = 'revenuecat'`, `currentPeriodEnd` ~7 days ahead.

**I6. Android internal testing track.** Play Console → **Testing → Internal testing → Testers → Create email list** → paste real Gmail addresses (Play actually delivers) → **Save** → copy opt-in URL → open on the test device's Chrome signed into the tester Google account → accept → wait ~10 min → install → subscribe to Student Annual → repeat I4 + I5 (`source = 'revenuecat'`, platform `android`).

**Success criterion.** Both platforms produce a Subscription row in Supabase within 60s of purchase and a matching `200 OK` delivery on the RevenueCat customer page.

---

## Section J — Going live

No `REVENUECAT_ENABLED` flag exists. The SDK is wired unconditionally. Going live =

> **Two-tier pricing note.** Submit IAPs at the Early Access — Founding Price (the four SKUs in §D). When the August 2026 Standard-pricing increase lands (`PRICE_INCREASE_DATE` in `D:\Coding\english-hub\src\constants\pricing.ts`), submit new IAPs at the Standard price (Student £7.99/£69.99, Teacher £11.99/£99) and deprecate the Early Access SKUs for new signups — existing subscribers grandfather at their signup price. Do NOT edit the price of a live SKU; create a new SKU and migrate at renewal.

1. **Submit each IAP alongside the app binary**, not after — Apple's top rejection on subscription apps is IAPs not submitted with the binary. App Store Connect → Subscriptions → each of the four → **Submit for Review**, attached to the same App Submission. Products move Ready → Waiting → Approved in lock-step.
2. **Play:** each SKU must be **Active** (not Draft) before the release promotes to production.
3. **Build:** `eas build --platform all --profile production`. EAS Submit pushes to both stores.
4. **Rollout:** staged per `PLAY_STORE_SUBMISSION_READINESS.md` §18; TestFlight → App Review per `IOS_REVIEW_GUIDE.md` §19–20.

**Gotcha.** The submission UI asks "Add In-App Purchases to this submission?" — answer **Yes** and tick all four. Missing this forces resubmission and costs 24–48h.

---

## Section K — Ongoing maintenance

- **Monthly** (first Monday): RevenueCat → Overview → **MRR, Active subs, Trial conversion, Churn**. Flag trial conversion < 40% or churn > 8%. Customer Center → `REFUND` events last 30d → each must match a `status = 'REVOKED'` row in Supabase; drift = webhook failure.
- **Semi-annual** (each major release): redo Section I sandbox test on both platforms.
- **On any SKU change:** update `SUBSCRIPTION_AND_ENTITLEMENTS.md` first, then the stores, then the RevenueCat offering. Never change a live SKU's product ID — create a new SKU and migrate at renewal.
- **Secrets:** rotate `REVENUECAT_SECRET_API_KEY` and `REVENUECAT_WEBHOOK_SECRET` every 12 months.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Webhook delivery shows `401 Unauthorized` | Vercel `REVENUECAT_WEBHOOK_SECRET` doesn't match the webhook Authorization header. Common: you pasted `Bearer <secret>` into Vercel instead of just the secret. | Paste the secret alone (no `Bearer ` prefix) → redeploy → **Send test event** again. Middleware expects `Authorization: Bearer <env_var_value>`. |
| iOS sandbox: "Cannot Connect to iTunes Store" | Device still signed into a real Apple ID in Media & Purchases, or sandbox tester missing / outside the Territory. | iOS Settings → [name] → Media & Purchases → **Sign Out**. Re-attempt; sign in as sandbox tester. Confirm tester exists with Territory United Kingdom. |
| Google Play: "The item you requested is not available" | SKU still in **Draft**, tester not on the internal-testing opt-in list, or build `versionCode` < active internal-track release. | Subscriptions → confirm **Active** on SKU + base plan + offer. Testing → Internal testing → confirm tester email on list and opted in. Upload a build whose `versionCode` matches the active internal release. |
| Purchase succeeds but app shows no `pro` entitlement | RevenueCat `appUserId` mismatch — SDK attached to an anonymous ID, not the Supabase user ID. | Confirm the app calls `Purchases.logIn(supabaseUserId)` immediately after Supabase auth, before any purchase. Customers → search by UUID; if a ghost customer holds the purchase, use **Transfer**. |
| Paywall shows `$3.99` instead of `£3.99` | Store account is in a non-UK region; StoreKit returns USD. Correct behaviour — app renders the user's region-localised price. | Verify Apple ID Region = United Kingdom (Media & Purchases → View Account → Country/Region). On Android, check Play region. Non-UK users see Apple's matrix-derived local price — expected. |
| Refund not reflected 2h later | RevenueCat receives Apple/Google refund events on a 12–24h delay — not real-time. | Wait up to 24h. If entitlement persists, Customers → Events → look for `REFUND`. If absent, file a RevenueCat support ticket with the transaction ID. Meanwhile set the Supabase row `status = 'REVOKED'` to demote access. |

---

## Authoritative values — paste-ready

| Key | Value |
|---|---|
| Bundle ID (iOS) / Package (Android) | `com.upskillenergy.theenglishhub` |
| App Store Connect team | Upskill Energy Limited |
| RevenueCat project | The English Hub · Region EU · Admin `legal@theenglishhub.app` · Billing `info@upskillenergy.com` |
| Subscription Group (Apple) | `EnglishHub Primary` |
| Entitlements | `pro`, `teacher_tools` |
| Offering | `default` |
| Package identifiers | `$rc_monthly`, `$rc_annual`, `teacher_monthly`, `teacher_annual` |
| iOS product IDs | `com.upskillenergy.theenglishhub.student.monthly`, `.student.annual`, `.teacher.monthly`, `.teacher.annual` |
| Android product IDs | `eh_student_monthly`, `eh_student_annual`, `eh_teacher_monthly`, `eh_teacher_annual` |
| Webhook URL | `https://theenglishhub.app/api/revenuecat/webhook` |
| Vercel env vars (Production) | `REVENUECAT_WEBHOOK_SECRET`, `REVENUECAT_SECRET_API_KEY` |
| EAS public secrets | `EXPO_PUBLIC_REVENUECAT_IOS_API_KEY`, `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY` |
| 1Password paths | `Mobile/RevenueCat/{Admin,iOS_PublicKey,Android_PublicKey,ServerSecretKey,WebhookBearerSecret}`; `Mobile/Apple/{AppSpecificSharedSecret,RevenueCatIAPKey}`; `Mobile/Google/PlayServiceAccountJSON` |

---

## After this is done — update me

Paste me:

> "RevenueCat live. iOS + Android configured, 4 SKUs each store, 2 entitlements, offering `default`, webhook 200 OK."

And I will:

1. Flip `SUBSCRIPTION_AND_ENTITLEMENTS.md` status from Draft to Live.
2. Wire `D:\Coding\english-hub-mobile\src\services\revenuecat.ts` to read the EAS public keys and call `Purchases.configure()` on boot.
3. Stand up `/api/revenuecat/webhook` with bearer-check middleware and Supabase upsert logic.
4. Add RevenueCat to the sub-processor register + ICO prefill.
5. Run an end-to-end sandbox purchase on each platform against a staging build and post the trace.

---

**Total time ~30 minutes. Total cost £0 through $2,500 MTR.**
