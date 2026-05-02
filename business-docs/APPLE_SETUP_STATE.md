# Apple App Store setup — live state

Single source of truth for what's been registered with Apple as part of
the iOS launch. British English. Last updated 2026-05-01.

---

## Apple Developer Program — active

| Field                      | Value                                  |
| -------------------------- | -------------------------------------- |
| Legal entity               | Upskill Energy Limited                 |
| Apple Team ID              | `645XBAPVHK`                           |
| Apple Developer enrollment | Approved 2026-04-21                    |
| £79 annual fee             | Paid via iPhone Apple Developer app    |
| Membership active          | Yes (synced 2026-05-01)                |
| Apple Developer Agreement  | Accepted 2026-04-21                    |
| Program License Agreement  | Accepted 2026-05-01 (auto on activation) |
| Paid Applications Agreement | Pending (founder must sign in App Store Connect with tax + banking info) |

---

## App ID identifier — registered

| Field                | Value                                  |
| -------------------- | -------------------------------------- |
| Description          | The English Hub                        |
| Bundle ID            | `app.theenglishhub.mobile`             |
| Type                 | Explicit (not wildcard)                |
| Platform             | iOS, iPadOS, macOS, tvOS, watchOS, visionOS |
| Capabilities enabled | Push Notifications, Associated Domains, In-App Purchase |

The same string is the Android `package` in `mobile/app.json`, so a
future Play Store submission re-uses the bundle.

---

## APNs auth key — generated

| Field          | Value                                  |
| -------------- | -------------------------------------- |
| Name           | The English Hub APNs                   |
| Key ID         | `J748RK82Z7`                           |
| Services       | Apple Push Notifications service (APNs) |
| Environment    | Sandbox & Production                   |
| Key Restriction | Team Scoped (All Topics)              |
| Issued         | 2026-05-01                             |

### Status of the .p8 file

The private key file (`AuthKey_J748RK82Z7.p8`, ~1 KB) has **not yet been
downloaded**. Apple keeps the server copy until the first download is
performed; once downloaded, Apple deletes their copy and the file
cannot be retrieved again.

**Action required**: founder downloads the .p8 from the Apple
Developer "Download Your Key" page and saves it to:

  `D:\Coding\english-hub\secrets\AuthKey_J748RK82Z7.p8`

`secrets/` is gitignored. Keep a backup copy in 1Password and
on offline storage. Without this file we cannot send push
notifications from any backend.

---

## Environment variables — already filled in

The following env-vars have been written into `.env.example` so the
codebase has documented placeholders:

| Variable                         | Value                                           |
| -------------------------------- | ----------------------------------------------- |
| `APPLE_TEAM_ID`                  | `645XBAPVHK`                                    |
| `APPLE_APNS_KEY_ID`              | `J748RK82Z7`                                    |
| `APPLE_APNS_KEY_PATH`            | `./secrets/AuthKey_J748RK82Z7.p8`               |
| `APPLE_ID`                       | `cj@upskillenergy.com`                          |
| `APPLE_ASC_APP_ID`               | `6765644554`                                    |
| `REVENUECAT_APPLE_SHARED_SECRET` | (pending — generated after IAP products exist)  |

The same values are mirrored into `mobile/eas.json` under
`submit.production.ios`. Both `appleTeamId` (`645XBAPVHK`) and
`ascAppId` (`6765644554`) are now live.

---

## App Store Connect app record — created

| Field            | Value                                          |
| ---------------- | ---------------------------------------------- |
| App name         | The English Hub                                |
| Bundle ID        | `app.theenglishhub.mobile`                     |
| ASC App ID       | `6765644554`                                   |
| SKU              | `theenglishhub-ios-2026`                       |
| Primary Language | English (U.K.)                                 |
| Platform         | iOS                                            |
| User Access      | Full Access                                    |
| Created          | 2026-05-01                                     |

---

## Subscription groups + IAP products — created

Two subscription groups, four auto-renewing subscription products,
all status **Missing Metadata** (price + localization + review screenshot
not yet added).

### Group: English Hub Student — `22062585`

| Reference Name  | Apple ID    | Product ID                                         | Duration |
| --------------- | ----------- | -------------------------------------------------- | -------- |
| Student Monthly | `6765647636` | `com.upskillenergy.theenglishhub.student.monthly` | 1 month  |
| Student Annual  | `6765648055` | `com.upskillenergy.theenglishhub.student.annual`  | 1 year   |

### Group: English Hub Teacher — `22062689`

| Reference Name  | Apple ID    | Product ID                                         | Duration |
| --------------- | ----------- | -------------------------------------------------- | -------- |
| Teacher Monthly | `6765648839` | `com.upskillenergy.theenglishhub.teacher.monthly` | 1 month  |
| Teacher Annual  | `6765649241` | `com.upskillenergy.theenglishhub.teacher.annual`  | 1 year   |

### Metadata complete on all four products (2026-05-01)

All four products now status **Prepare for Submission**:

| Product         | Apple ID    | Display Name (en-GB)              | Description (en-GB)                          | Price  |
| --------------- | ----------- | --------------------------------- | -------------------------------------------- | ------ |
| Student Monthly | `6765647636` | The English Hub Student          | AI marking and GCSE/IGCSE English revision. | £3.99  |
| Student Annual  | `6765648055` | The English Hub Student (Annual) | Save vs monthly. Unlimited AI feedback.     | £29.99 |
| Teacher Monthly | `6765648839` | The English Hub Teacher          | AI marking, lessons, and class progress.    | £6.99  |
| Teacher Annual  | `6765649241` | The English Hub Teacher (Annual) | Save vs monthly. AI marking + lesson tools. | £67.99 |

**Availability**: all 175 territories. Apple has auto-calculated
non-GBP prices using current FX (US $4.99/$29.99/$6.99/$69.99 etc.).

**App Review screenshot** — still optional and not yet attached. Can
add later when we have a working build.

**Family Sharing** — off (correct: education subscriptions shouldn't
mix multiple pupils' work in one account).

---

## App-Specific Shared Secret — generated 2026-05-01

The secret was generated under App Store Connect → My Apps → The
English Hub → App Information → App-Specific Shared Secret →
Generate.

The value is **not stored in this repository or any chat history**.
Founder is responsible for:

1. Saving the 32-character hex string in 1Password.
2. Pasting it into RevenueCat → Project Settings → iOS app →
   "App Store Connect Shared Secret" field.
3. Setting `REVENUECAT_APPLE_SHARED_SECRET` in the Vercel production
   environment.

If the secret is ever exposed (e.g. accidentally pasted into a chat
or commit), regenerate it via the same Manage button — Apple
invalidates the old value immediately and replaces it with a new
32-character string.

---

## Other ASC items observed during setup

- **Digital Services Act trader status**: ✅ Declared as a trader
  (visible on App Information page).
- **App-Specific Shared Secret**: ✅ Generated.
- **App Privacy questionnaire**: pending — needs to be filled in
  before submission. See `docs/REVIEWER_NOTES_APPLE.md` for the
  data-collection answers.
- **Age Rating questionnaire**: ✅ Saved at 13+ (calculated by Apple's
  questionnaire from literary depictions of violence/addiction in GCSE
  set texts: *Macbeth*, *An Inspector Calls*, *Of Mice and Men*).
  Korea shows 12+, Brazil A14, 13+ in 173 other territories.
- **App Store Server Notifications URL**: pending — RevenueCat will
  receive these via their own notification URL once the iOS app is
  configured in RC. Do NOT set Apple's "Production Server URL" to
  point at our backend; let RevenueCat own this channel.
- **Subtitle**: pending. Use "GCSE & IGCSE English revision" (29 chars).
- **Primary Category**: pending. Use Education / Reference.
- **Promotional Text + Description**: pending. Paste from
  `docs/ASC_METADATA.md`.
- **Screenshots**: pending. Need 1290×2796 (iPhone 6.7"), 2048×2732
  (iPad 12.9") at minimum. Cannot generate without a working build.
- **App icon 1024×1024 opaque PNG**: pending. The current
  `mobile/assets/icon.png` placeholder must be replaced.
- **App Review demo account credentials**: pending. Create the
  `apple-reviewer@upskillenergy.com` account in production Supabase
  with a Teacher Annual entitlement, paste creds into App Review →
  Sign-In Information.

---

## 2026-05-01 final session push — what landed

This session went much further than the original "set up Apple" ask.
Captured here so the next session knows exactly where we are.

| ASC area                       | Status                                                                 |
| ------------------------------ | ---------------------------------------------------------------------- |
| Apple Developer Program        | ✅ Active. Team `645XBAPVHK`.                                          |
| Both Developer Agreements      | ✅ Auto-accepted on payment.                                           |
| App ID `app.theenglishhub.mobile` | ✅ Registered with Push, Associated Domains, IAP capabilities.       |
| APNs auth key `J748RK82Z7`     | ✅ Generated, .p8 saved to `secrets/`, gitignored.                     |
| App Store Connect app record   | ✅ Created. ASC App ID `6765644554`.                                   |
| Subscription groups            | ✅ English Hub Student `22062585` + English Hub Teacher `22062689`.    |
| 4 IAP products                 | ✅ All "Prepare for Submission". Price + availability + en-GB locale.  |
| App-Specific Shared Secret     | ✅ Generated; founder rotated after a chat-paste leak; saved to env.   |
| Mobile RevenueCat code         | ✅ `purchases.ts`, `paywall.tsx`, account CTA, `_layout` init, auth wiring; `npm install react-native-purchases` done. |
| WebView auth bridge            | ✅ `lib/webview-bridge.ts` + `learn.tsx` parses `auth`/`logout` postMessages. |
| App Information                | ✅ Subtitle "GCSE & IGCSE English revision", Education / Reference, Content Rights = Yes-with-rights. Saved. |
| Age Rating                     | ✅ 13+ calculated (12+ Korea, A14 Brazil, 13+ in 173 others). Saved.   |
| App Privacy                    | 🟡 Privacy Policy URL set; 8 data types declared; per-type detail dialogs handed off — see `docs/APP_PRIVACY_ANSWERS.md`. |
| Pricing & Availability         | ✅ App price Free, available in all 175 territories.                   |
| DSA EU Trader                  | ✅ Founder declared as trader.                                         |
| Free Apps Agreement            | ✅ Active.                                                             |
| Paid Apps Agreement            | 🟡 Pending User Info (banking processing 24h, tax form outstanding).   |

### Founder action items remaining

1. Finish ASC tax form (in `business/Agreements`).
2. Finish App Privacy per-type details (5 minutes,
   `docs/APP_PRIVACY_ANSWERS.md`).
3. Create the RevenueCat project (free tier),
   - add iOS app with bundle `app.theenglishhub.mobile`, team `645XBAPVHK`
   - paste the Apple Shared Secret saved in 1Password
   - copy the iOS public SDK key (`appl_…`) into `mobile/app.json`
     `extra.revenuecatIosApiKey`
   - configure entitlement `premium` and offering `default` with the
     four packages mapped to the four ASC product IDs (see
     `docs/IAP_PRODUCT_SPEC.md`).
4. Build first TestFlight via `eas build --profile production --platform ios`.
5. Replace the placeholder app icon (1024×1024 opaque PNG) and add
   screenshots (1290×2796 iPhone 6.7″, 2048×2732 iPad 12.9″).
6. Create the `apple-reviewer@upskillenergy.com` demo account in
   production Supabase, grant Teacher Annual entitlement, paste creds
   into App Review → Sign-In Information.
7. Paste version 1.0 metadata (description, keywords, support URL,
   marketing URL, promotional text) from `docs/ASC_METADATA.md` into
   the version page.
8. Submit for review.

### What's NOT in this push (future, separate sessions)

- Web-side bug list / commercial review items (deferred; founder asked
  to focus on Apple).
- Stripe verification / pricing audit (separate ask).
- Email pipe end-to-end test with a fresh signup.

---

## Pending Apple actions

In the order they need to happen:

1. ~~Download the .p8~~ — done 2026-05-01.
2. ~~Create the App Store Connect app record~~ — done, ASC App ID
   `6765644554`.
3. **Sign Paid Applications Agreement + Tax + Banking** in App Store
   Connect (founder action — financial data, cannot be automated).
   Plus: **DSA EU Trader Compliance** (declare Upskill Energy is a
   trader for EU consumers).
4. **Configure four IAP products** under My Apps → The English Hub →
   In-App Purchases (see `docs/IAP_PRODUCT_SPEC.md` for exact field
   values). **Blocked until step 3 is complete.**
5. **Generate App-Specific Shared Secret** under My Apps → The English
   Hub → App Information. Paste into `REVENUECAT_APPLE_SHARED_SECRET`.
6. **Configure RevenueCat** offerings, entitlement (`premium`),
   webhook URL, and link to both stores.
7. **Create sandbox testers** for QA before submission.
8. **EAS Build production iOS** + **EAS Submit** to TestFlight.
9. **App Review** (Apple's queue is 24–72 hours typical for new apps).

---

## Critical pre-submission risk — mobile app has no IAP code

The mobile shell currently uses `react-native-webview` to render
authenticated views of `https://theenglishhub.app`. It **does not**
have `react-native-purchases` (the RevenueCat SDK) installed and
**there is no IAP code** anywhere under `mobile/`. The web app sells
subscriptions via Stripe; the mobile app simply shows the same
pages.

**Apple's likely position**: Apps that show paid content acquired
externally must either (a) sell that content via IAP, or (b) qualify
as a "Reader App" (App Review Guideline 3.1.3(a)) — defined as apps
that "allow a user to access previously purchased content or content
subscriptions" specifically in *magazines, newspapers, books, audio,
music, video, access to professional databases, VoIP, cloud
storage, and approved services such as classroom management apps*.

Education apps where pupils buy subscriptions to access lessons and
practice questions sit in a grey area. We have three options:

### Option A — implement IAP (safest)
- `npm install react-native-purchases` in `mobile/`
- Initialise on app launch with the iOS RevenueCat API key
- Call `Purchases.logIn(supabaseUserId)` after auth
- Show a native paywall (or hide pricing in WebView and rely on the
  RevenueCat paywall component) for any user without `premium`
  entitlement
- Cost: ~1 day of Expo work + IAP testing through TestFlight

### Option B — submit as a Reader App
- Set `App Review Information → App is a Reader App` checkbox in
  App Store Connect
- Hide all "subscribe" / "upgrade" / pricing CTAs from the WebView
  via the `TheEnglishHubNative/1.0` user-agent feature flag the
  WebView already injects
- Reviewer notes must explain that purchases happen on the web and
  the app only displays already-paid content
- Risk: Apple may still reject — the reader-app category was
  tightened in 2023 and 2024

### Option C — submit as-is and react to rejection
- Push the current WebView-only build to TestFlight
- See whether App Review accepts or rejects
- If rejected, fall back to Option A or B
- Not recommended — wastes a review cycle (typically 1–3 days)

**Recommendation**: Option A. The web pricing paths stay live for
desktop/laptop users and Stripe customers; the iOS app uses IAP
exclusively for purchase, which is what Apple expects.

**Decision (2026-05-01)**: Option A selected — IAP code now in
`mobile/`. See `docs/MOBILE_IAP_INTEGRATION.md` for full integration
notes, founder action items (RevenueCat dashboard config + env-var
keys), and the manual test plan.

Outstanding work for IAP-on-device to be live:

1. ~~Add `react-native-purchases` + write the SDK wrapper, paywall
   screen, and account-screen CTA~~ — done 2026-05-01.
2. `npm install` in `mobile/` (founder runs locally).
3. Create RevenueCat project, add iOS app, paste Apple Shared Secret
   (only available after IAP products exist in ASC).
4. Drop iOS + Android public SDK keys into `mobile/app.json`
   `extra.revenuecat*ApiKey` (or EAS env vars).
5. Configure the `premium` entitlement and `default` offering in
   RevenueCat dashboard, mapped to the four ASC SKUs.
6. Wire up the WebView `auth` postMessage handler in `learn.tsx` /
   `games.tsx` to call `setAuthToken(token)` + `setUserId(userId)`.
   This is a pre-existing gap, not introduced by IAP.

---

## Reference docs in this repo

- `docs/REVIEWER_NOTES_APPLE.md` — what to paste into the App Review
  form's Notes field, plus reviewer demo account guidance.
- `docs/ASC_METADATA.md` — every text field on the App Store Connect
  app metadata page, ready to paste.
- `docs/IAP_PRODUCT_SPEC.md` — the four IAP products with all required
  ASC field values.
- `mobile/eas.json` — EAS Build / Submit config; production profile
  uses `645XBAPVHK` as the team id.
- `.env.example` — every Apple-related env-var documented.
