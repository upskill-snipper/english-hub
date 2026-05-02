# SHIP RUNBOOK — The English Hub iOS

The single canonical guide to take The English Hub from "Claude session over"
to "Submitted for App Review". Follow it line by line, top to bottom. Every
step has an exact command (or click path), expected output, and a
**Done when:** checkpoint. Do not skip ahead.

Time budget end-to-end: **3–5 hours of active work**, plus 15–30 min of EAS
build wait, plus 24–72 hours in Apple's review queue.

All commands assume `cwd = D:\Coding\english-hub` unless otherwise noted.
British English. References use absolute paths.

---

## 0. Prerequisites — already done in the prior session

You do **not** need to redo any of this. Verify and move on.

- Apple Developer Program — active. Team `645XBAPVHK`. £79 paid.
- App ID `app.theenglishhub.mobile` — registered with Push, Associated
  Domains, and In-App Purchase capabilities.
- APNs key `J748RK82Z7` — generated, `.p8` saved at
  `D:\Coding\english-hub\secrets\AuthKey_J748RK82Z7.p8`.
- App Store Connect record — created. ASC App ID `6765644554`.
- Subscription groups — `English Hub Student` (`22062585`) and
  `English Hub Teacher` (`22062689`).
- 4 IAP products — all in **Prepare for Submission** with prices (£3.99,
  £29.99, £6.99, £67.99) and en-GB localisation. 7-day free trial set on
  each subscription group.
- App Information — saved (subtitle, primary category Education,
  secondary Reference, Content Rights = Yes, DSA trader declared).
- Age Rating — saved at **13+** (calculated from the questionnaire — do
  not change this; ignore the legacy "12+" reference in
  `docs/ASC_METADATA.md`, the saved-in-ASC value is the source of truth).
- App Privacy — published (8 data types per `docs/APP_PRIVACY_ANSWERS.md`).
- Pricing & Availability — Free, all 175 territories.
- Free Apps Agreement — Active. Paid Apps Agreement — Active (tax +
  banking signed).
- App-Specific Shared Secret — generated; pasted into RevenueCat and into
  `REVENUECAT_APPLE_SHARED_SECRET` in Vercel production env.
- App Store Connect API key — `secrets/AuthKey_3ZUP487476.p8` (Key ID
  `3ZUP487476`, Issuer ID `96c4e333-5841-4a2a-a3c6-731ab3770166`).
- RevenueCat — project, iOS app, entitlement `premium`, offering
  `default` with 4 packages (`student_monthly`, `student_annual`,
  `teacher_monthly`, `teacher_annual`) all wired to ASC product IDs.
  iOS public SDK key (`appl_zQIYhRvQeIbiNRmjjpMTUphLgxzMay`) is in
  `mobile/app.json` `extra.revenuecatIosApiKey`.
- Mobile codebase — `react-native-purchases` v8 installed, `purchases.ts`
  wrapper, paywall screen, account CTA, `_layout` init wiring all done.
- Assets — `mobile/assets/icon.png`, `splash.png`, `adaptive-icon.png`,
  `favicon.png` all present (1024×1024 opaque for icon).

**Done when:** every bullet above is true. If any bullet fails the smell
test, open `business-docs/APPLE_SETUP_STATE.md` and reconcile **before**
running step 1.

---

## 1. Local environment prep

Install the EAS CLI globally and sign in. Verify the EAS project ID is set
inside `mobile/app.json` — it currently still reads
`"REPLACE_WITH_EAS_PROJECT_ID"` and that **must** be a real UUID before
any build runs.

```bash
npm install -g eas-cli
eas --version            # expect: 18.x or later
cd D:\Coding\english-hub\mobile
eas login                # interactive — use the account that owns the `theenglishhub` org
eas whoami               # expect: theenglishhub  (or your user under that org)
```

Now check the project ID:

```bash
grep -n "REPLACE_WITH_EAS_PROJECT_ID" app.json
```

If that line still matches, link or create the project:

```bash
# If a project already exists in the theenglishhub org on https://expo.dev:
eas init --id <existing-project-uuid>

# Otherwise:
eas init
```

Either path writes the UUID into `extra.eas.projectId` in `mobile/app.json`.
Commit that single-line change to git so future builds resolve it.

**Done when:** `eas whoami` prints the right account, and `grep
REPLACE_WITH_EAS_PROJECT_ID app.json` returns no matches.

---

## 2. EAS credentials — upload Apple keys

Run the credentials manager from `mobile/`. EAS will prompt for each
artefact in turn.

```bash
cd D:\Coding\english-hub\mobile
eas credentials
```

Follow the interactive flow:

- Platform: **iOS**.
- Profile: **production**.
- **Distribution Certificate** — let EAS generate one.
- **Provisioning Profile** — let EAS create an App Store profile bound
  to `app.theenglishhub.mobile`.
- **Push Notification Key (APNs)** — choose *Upload an existing key*.
  Path: `D:\Coding\english-hub\secrets\AuthKey_J748RK82Z7.p8`.
  Key ID: `J748RK82Z7`. Team ID: `645XBAPVHK`.
- **App Store Connect API Key** — choose *Upload existing*.
  Path: `D:\Coding\english-hub\secrets\AuthKey_3ZUP487476.p8`.
  Key ID: `3ZUP487476`. Issuer ID:
  `96c4e333-5841-4a2a-a3c6-731ab3770166`.

While you're here, register the public RevenueCat key as an EAS secret so
the build env doesn't warn (the value is also embedded in `app.json`, but
this keeps the env clean):

```bash
eas secret:create --scope project --name EAS_REVENUECAT_IOS_API_KEY \
  --value "appl_zQIYhRvQeIbiNRmjjpMTUphLgxzMay" --type string
```

**Done when:** `eas credentials` for iOS production lists all four items
as configured (Distribution Cert, Provisioning Profile, Push Key, ASC API
Key).

---

## 3. First production iOS build

Run the production build. EAS spins up a remote macOS worker, signs the
binary, and produces an `.ipa`. Wall-clock time is **15–30 min** —
do not close your terminal; CLI streams logs and a browser URL.

```bash
cd D:\Coding\english-hub\mobile
eas build --platform ios --profile production
```

Expected progress:

1. CLI prints "Build queued" and a URL like
   `https://expo.dev/accounts/theenglishhub/projects/english-hub/builds/<uuid>`.
2. Worker installs deps, runs `expo prebuild`, builds, signs.
3. CLI prints **"Build finished"** with a green tick and a link to the
   `.ipa`.

If the build fails, jump to the **Rollback / panic** section.

**Done when:** the CLI and the dashboard both show the build as
**Finished**, and the `Application archive` link resolves.

---

## 4. Submit to TestFlight

This uploads the `.ipa` to App Store Connect and registers it for
TestFlight. Apple sends a "build is processing" email about 5 minutes
later, then "build is ready to test" 15–30 minutes later (after their
export-compliance scan).

```bash
cd D:\Coding\english-hub\mobile
eas submit --platform ios --profile production
```

EAS picks up the most recent successful build automatically. To submit a
specific one, append `--id <build-id>` (UUID from step 3).

Expected output ends with:

```
✔ Successfully uploaded the build to App Store Connect.
   Apple is processing the build — TestFlight tab will populate shortly.
```

**Done when:** App Store Connect → My Apps → The English Hub →
TestFlight tab shows the new build with status **Processing** (within
~5 min) and then **Ready to Test** (within ~30 min).

---

## 5. Generate screenshots from the TestFlight build

Apple requires real device screenshots — simulator captures will be
rejected. Use a personal iPhone 6.7" (e.g. iPhone 15 Pro Max, iPhone 14
Pro Max). If you only have a smaller iPhone, that still works as a 6.5"
set; you can also generate a 6.7" set in Xcode's Simulator after the
fact, but a real device is cleaner.

1. In ASC → TestFlight → **Internal Testing**, add yourself
   (`cj@upskillenergy.com`) as an internal tester. Apple emails the
   invite within ~1 minute.
2. On the iPhone, accept via the TestFlight app and install.
3. Sign in with the **demo account** (you'll create it in step 6 — or do
   step 6 first if you prefer, then come back to this step).
4. Capture screenshots of: AI marking output, mock paper screen, set-text
   revision, paywall, account/Premium screen. Minimum 3, maximum 10.
5. Required size: **1290 × 2796 px** for iPhone 6.7". iPhones at that
   resolution capture this natively. Optional: also capture iPad 12.9" at
   2048 × 2732.
6. Upload via ASC → My Apps → The English Hub → version 1.0 → **iPhone
   6.7" Display** → drag-and-drop the PNGs in display order.

**Done when:** at least 3 screenshots show as uploaded under the iPhone
6.7" display box on the version 1.0 page (no red error icons).

---

## 6. Create the Apple reviewer demo account

Full detail lives in `D:\Coding\english-hub\docs\APPLE_REVIEWER_ACCOUNT.md`.
Three short steps:

### 6a. Create the Supabase auth user

In the Supabase Dashboard → **Authentication → Users → Add user → Create
new user**:

- Email: `apple-reviewer@upskillenergy.com`
- Password: generate a 24-character password in 1Password under entry
  "App Review — Apple demo".
- Auto Confirm User: **on**.

Copy the resulting UUID from the `ID` column.

### 6b. Grant the Teacher Annual entitlement

```bash
cd D:\Coding\english-hub
npx tsx scripts/grant-reviewer-entitlement.ts <UUID-from-6a>
```

Expected output ends with:
`subscription: ACTIVE/ANNUAL/IOS teacher=true`.

### 6c. Seed demo essays

```bash
npx tsx scripts/seed-reviewers.ts --emails=apple-reviewer@upskillenergy.com
```

This creates two pre-marked essays and AIFeedback rows so the reviewer
sees content immediately.

### 6d. (Optional) RevenueCat promotional grant

So the native Account tab also shows "Premium active" rather than the
upgrade CTA: RevenueCat dashboard → **Customers → Search** → enter the
Supabase UUID → **Grant Promotional → Entitlement: `premium`** → 1 year
→ reason "App Review demo".

**Done when:** signing into the TestFlight build with the demo account
unlocks all paid surfaces with no paywall (re-verify by tapping AI
marking + Lessons + Mock papers).

---

## 7. Fill ASC version 1.0 metadata

ASC → My Apps → The English Hub → **iOS App → 1.0 Prepare for
Submission**. Paste verbatim from `D:\Coding\english-hub\docs\ASC_METADATA.md`:

| ASC field             | Source in `ASC_METADATA.md`                |
| --------------------- | ------------------------------------------ |
| Promotional Text      | § Promotional Text (≤ 170 chars)           |
| Description           | § Description (≤ 4,000 chars, paste exact) |
| Keywords              | § Keywords                                 |
| Support URL           | `https://theenglishhub.app/contact`        |
| Marketing URL         | `https://theenglishhub.app`                |
| Privacy Policy URL    | `https://theenglishhub.app/privacy`        |
| What's New            | § What's New in This Version (1.0.0)       |
| Copyright             | `© 2026 Upskill Energy Limited`            |

Then under **App Review Information**:

- First name: `Calum`. Last name: `Johnson`.
- Phone: paste from your founder profile.
- Email: `review@theenglishhub.app`.
- Sign-In required: **Yes**.
- Sign-In credentials: paste the demo email + password from 6a.
- Notes: paste the long block from
  `D:\Coding\english-hub\docs\REVIEWER_NOTES_APPLE.md` § *Reviewer Notes*.

Confirm Encryption export compliance: `ITSAppUsesNonExemptEncryption`
is already `false` in `app.json`. ASC will read this from the build —
no manual answer required.

**Done when:** every field on the 1.0 page has a green tick or "Saved"
confirmation, and the demo password is also saved in 1Password.

---

## 8. Add the build to version 1.0

On the same 1.0 page, scroll to the **Build** section.

1. Click the **+** next to *Build* (becomes available once Apple finishes
   processing the upload from step 4).
2. Select the build that matches the version printed during step 3
   (e.g. `1.0.0 (1)`).
3. Click **Done**.
4. Apple auto-prompts an Export Compliance question — answer **No** (we
   don't use non-exempt encryption).

**Done when:** the version page shows the build attached, with no red
"Missing" warning anywhere on the page.

---

## 9. Submit for App Review

Final click. Apple's queue is typically **24–72 hours** for a new app's
first submission (sometimes faster).

1. Top-right of the 1.0 page → **Add for Review**.
2. Confirm pricing/availability prompts.
3. Pick **Manually release this version** (gives you a one-click go-live
   after approval — see step 11 to flip to Automatic if you prefer).
4. Click **Submit for Review**.

**Done when:** the version status changes to **Waiting for Review**
within ~5 minutes. You will receive an email confirmation from Apple at
the Account Holder address (`cj@upskillenergy.com`).

---

## 10. Rollback / panic

### EAS build fails (step 3)

Read the failed build's logs in the dashboard URL printed by the CLI.
Most failures fall into:

- **Asset missing** — re-check `mobile/assets/{icon,splash,adaptive-icon}.png`
  exist and are valid PNGs.
- **Signing error** — re-run `eas credentials` from step 2; let EAS
  regenerate the offending artefact.
- **Bundle ID mismatch** — confirm `mobile/app.json` `ios.bundleIdentifier`
  is `app.theenglishhub.mobile` (it is).
- **Node version mismatch** — `eas.json` pins `20.11.1` for the worker;
  this is rarely the issue.

Fix the cause, then re-run step 3. EAS auto-increments the build number
each attempt (`autoIncrement: true` in `eas.json`).

### `eas submit` fails (step 4)

The most common cause is a stale ASC API key. Re-run step 2 just for
the ASC key, then retry submit.

### Apple rejects in App Review (after step 9)

Apple sends an email + posts to ASC → Resolution Center. Common reasons
for an education + IAP app:

- **Missing reviewer demo content** — re-check that step 6b returned a
  successful entitlement grant. Re-run the `grant-reviewer-entitlement`
  script if needed.
- **3.1.1 IAP gripe (external purchase links)** — confirm no "subscribe"
  buttons in the WebView point at Stripe checkout when running in the
  iOS UA. The `TheEnglishHubNative/1.0` user-agent flag should hide
  those CTAs.
- **2.1 metadata** — Apple wants something clarified in description or
  reviewer notes. Reply via Resolution Center within the same 1.0
  version; re-submission does **not** require a new build unless they
  ask for a code change.

If they ask for a code change: fix it, bump `mobile/app.json` `version`
to `1.0.1`, run steps 3 → 4 → 8 → 9 again. Build number auto-increments.

### Total panic — pull the submission

ASC → version 1.0 → top-right → **Remove from Review**. The version
flips back to *Prepare for Submission* and you can edit + resubmit.

---

## 11. Post-approval — going live

Apple emails "Your app has been approved."

1. ASC → version 1.0 → **Release this Version** (because we picked
   *Manually release* in step 9). The app appears on the App Store
   within 1–4 hours, but the iTunes URL
   `https://apps.apple.com/gb/app/the-english-hub/id6765644554` will
   start resolving immediately.
2. (Optional) For future versions, switch the release toggle to
   **Automatically release** so approved builds go live at once.
3. Verify the live App Store listing on a real device — search "The
   English Hub" in the App Store app, confirm icon + screenshots +
   description render.
4. Run one real-money sandbox-tester purchase using
   `eh-sandbox-student@upskillenergy.com` (App Store Connect → Users
   and Access → Sandbox Testers) to confirm StoreKit, RevenueCat
   webhook, and our entitlement reconciler all fire end-to-end on a
   production binary. Receipt arrives at the sandbox tester's email.
5. Cancel the test subscription in iOS Settings → Apple ID →
   Subscriptions, and verify the entitlement clears in the next
   `getCustomerInfo()` cycle.

---

## 12. Post-launch ops — where to watch

| What                    | Where                                                                |
| ----------------------- | -------------------------------------------------------------------- |
| Crashes / ANRs (iOS)    | App Store Connect → Analytics → **Crashes**. Also expo.dev → project → **Crashes**. |
| RevenueCat events       | RevenueCat dashboard → **Customers**, **Charts**. Webhook deliveries: **Integrations → Webhooks → Logs**. |
| Webhook receipts (ours) | Vercel logs for `/api/revenuecat/webhook`. Reconciliation drift: query the `Subscription` table by `updatedAt`. |
| App Review responses    | Apple emails the **Account Holder** (`cj@upskillenergy.com`) for every status change. Also surfaced in ASC top-right notification bell. |
| Sales + downloads       | App Store Connect → **App Analytics** (24–48h lag) and **Sales and Trends** (next-day reports). |
| User reports / reviews  | App Store Connect → **Ratings and Reviews**. Reply within 48h. |

Set a calendar nudge for **+72h after submission** to chase if Apple is
silent. Set another for **+1 week post-approval** to scan crash reports
and RevenueCat MRR before the marketing push.

---

## 13. Appendix — referenced files

- `D:\Coding\english-hub\business-docs\APPLE_SETUP_STATE.md` — what
  Apple sees today (single source of truth).
- `D:\Coding\english-hub\docs\EAS_BUILD_RUNBOOK.md` — long-form EAS
  Build/Submit reference (this runbook supersedes its founder-facing
  flow).
- `D:\Coding\english-hub\docs\MOBILE_IAP_INTEGRATION.md` — RevenueCat
  + StoreKit wiring detail.
- `D:\Coding\english-hub\docs\IAP_PRODUCT_SPEC.md` — the four IAP
  products, prices, and group layout.
- `D:\Coding\english-hub\docs\REVIEWER_NOTES_APPLE.md` — paste source
  for App Review Information → Notes.
- `D:\Coding\english-hub\docs\ASC_METADATA.md` — paste source for
  every ASC text field.
- `D:\Coding\english-hub\docs\APP_PRIVACY_ANSWERS.md` — answer key for
  the App Privacy questionnaire (already published).
- `D:\Coding\english-hub\docs\APPLE_REVIEWER_ACCOUNT.md` — full demo
  account runbook.
- `D:\Coding\english-hub\mobile\eas.json` — build/submit config.
- `D:\Coding\english-hub\mobile\app.json` — Expo config + RC key.
- `D:\Coding\english-hub\.env.example` — Apple env-var block.
- `D:\Coding\english-hub\secrets\AuthKey_J748RK82Z7.p8` — APNs key.
- `D:\Coding\english-hub\secrets\AuthKey_3ZUP487476.p8` — ASC API key.

End of runbook. Ship it.
