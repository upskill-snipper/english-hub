# Mobile IAP integration — RevenueCat (Option A)

Implements in-app purchase via RevenueCat in `mobile/`. Status:
**code-complete, awaiting native install + RevenueCat dashboard config**.

## What landed in this session

| File                      | Change                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mobile/lib/purchases.ts` | New. RevenueCat SDK wrapper — init, login, logout, offerings, purchase, restore, entitlement check, listener.                                                     |
| `mobile/lib/auth.ts`      | `setUserId()` now calls `loginToRevenueCat(userId)`. `setAuthToken(null)` now calls `logoutFromRevenueCat()`.                                                     |
| `mobile/app/_layout.tsx`  | `initPurchases()` runs once onboarding finishes; if a prior user id is in SecureStore, `loginToRevenueCat()` runs immediately. Hidden `paywall` route registered. |
| `mobile/app/paywall.tsx`  | New. Native paywall screen — lists the four packages from the default offering, runs StoreKit purchase, restore-purchases button, auto-renew legal copy.          |
| `mobile/app/account.tsx`  | "Upgrade to Premium" CTA when free, "Manage on App Store" when premium, restore-purchases link.                                                                   |
| `mobile/package.json`     | Adds `react-native-purchases` ^8.0.0.                                                                                                                             |
| `mobile/app.json`         | `extra.revenuecatIosApiKey` + `extra.revenuecatAndroidApiKey` placeholders.                                                                                       |

## Founder action items before TestFlight

### 1. `npm install` in `mobile/`

```bash
cd mobile
npm install
```

EAS Build will pick up `react-native-purchases` automatically when
the next `eas build --profile production --platform ios` runs (it
installs from `package.json`).

### 2. Create a RevenueCat account + project

1. Sign up at https://app.revenuecat.com (free tier covers our launch
   volume — RevenueCat takes 1% above $10K MRR, $0 below).
2. Create a project: **The English Hub**.
3. Add iOS app:
   - Bundle ID: `app.theenglishhub.mobile`
   - Apple Team ID: `645XBAPVHK`
   - App Store Connect Shared Secret: paste the value generated in
     ASC → My Apps → The English Hub → App Information → App-Specific
     Shared Secret. (Generated **after** the four IAP products exist.)
   - App Store Connect API key: optional but recommended — paste the
     `.p8` from ASC → Users and Access → Integrations.
4. Add Android app (when ready):
   - Package name: `app.theenglishhub.mobile`
   - Service Account JSON for receipt validation.

### 3. Set the public SDK keys

Once the RevenueCat project exists, copy the **public** SDK keys from
RevenueCat → Project Settings → Apps → API Keys:

- iOS public key (starts with `appl_…`)
- Android public key (starts with `goog_…`)

Drop them into `mobile/app.json` `extra.revenuecatIosApiKey` /
`revenuecatAndroidApiKey`. **OR** set them as EAS env vars on the
production profile:

```bash
eas env:create --environment production \
  --name EXPO_PUBLIC_REVENUECAT_IOS_API_KEY \
  --value appl_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

The same pattern for Android. The SDK reads from `expo.extra` first,
then falls back to `process.env`, so either mechanism works.

### 4. Configure the offering + entitlement in RevenueCat

Once the four IAP products exist in App Store Connect:

- **Entitlement** named exactly `premium` (lower-case, no spaces).
  Both student and teacher products grant `premium`.
- **Offering** named `default`. Add four packages:
  - `student_monthly` → iOS `com.upskillenergy.theenglishhub.student.monthly`
  - `student_annual` → iOS `com.upskillenergy.theenglishhub.student.annual`
  - `teacher_monthly` → iOS `com.upskillenergy.theenglishhub.teacher.monthly`
  - `teacher_annual` → iOS `com.upskillenergy.theenglishhub.teacher.annual`
- **Webhook** → `https://theenglishhub.app/api/revenuecat/webhook`
  with the shared secret stored in `REVENUECAT_WEBHOOK_SECRET`.

### 5. Pre-existing follow-up — WebView ↔ native auth bridge

The mobile app's WebView screens (`mobile/app/learn.tsx`,
`mobile/app/games.tsx`) inject a JS bridge that lets the web post
messages back to native, but the `handleMessage` callback only logs
in dev — there is no handler for the `{ type: 'auth', token, userId }`
message type that the README documents.

This is **out of scope for IAP** but is the gap that wires the whole
sign-in flow together. When that handler is added, it should call
`setAuthToken(token)` AND `setUserId(userId)`, which will then
auto-trigger `loginToRevenueCat(userId)` via the changes in this
session.

## Apple App Review checklist (already covered by code)

- [x] Subscriptions are auto-renewing — disclosed in paywall body
- [x] Privacy Policy + Terms of Service reachable from paywall
- [x] Restore Purchases button always visible
- [x] No external purchase links — all checkout via StoreKit
- [x] Trial period stated next to price ("7-day free trial · then £…")
- [x] Auto-renew terms in legal copy below price list
- [x] Cancel-via-Apple-ID instructions in legal copy
- [x] No reader-app exemption claimed (we sell IAP in-app)

## Manual test plan (before TestFlight upload)

1. Open the app on a device with a sandbox tester signed in (Settings
   → Apple ID → Media & Purchases → Sandbox Account on iOS 17+).
2. Tap Profile → Account → Upgrade to Premium.
3. Choose Student Monthly. Verify the StoreKit sheet shows £3.99,
   "7-day free trial".
4. Tap Subscribe. Verify the alert "Welcome to Premium" appears.
5. Close + reopen the app. Verify Account screen now shows the
   Premium block + "Manage on App Store" link.
6. Tap Restore purchases. Verify "Subscription restored" alert.
7. Sign out. Verify the upgrade CTA reappears.
8. Cancel the subscription in iOS Settings → Apple ID →
   Subscriptions. Verify after expiry the entitlement clears and
   the upgrade CTA returns.
