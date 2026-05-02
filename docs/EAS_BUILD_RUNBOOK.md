# EAS Build & Submit Runbook — iOS Production

End-to-end runbook for shipping `app.theenglishhub.mobile` to TestFlight via
EAS Build. This document is the single source of truth for the founder when
running the production iOS pipeline.

---

## 0. Prerequisites (one-time, host machine)

- **Node.js**: project pins `20.11.1` for builds (set in `eas.json`). Local
  install can be any LTS — EAS uses the pinned version on its workers.
- **`eas-cli`**: not currently installed on this machine. Install it globally:

  ```bash
  npm install -g eas-cli
  ```

  Verify with `eas --version` (should print 18.x or later).

- **Expo account**: must have access to the `theenglishhub` org (set as
  `expo.owner` in `mobile/app.json`).
- **Apple Developer account**: Team ID `645XBAPVHK`, signed in as
  `cj@upskillenergy.com`. Must have an active paid membership.
- **App Store Connect record**: app must exist with bundle id
  `app.theenglishhub.mobile` and ASC App ID `6765644554`.

### Files that must be present before running the build

| Path                              | Purpose                                      | Status                                                                                                                                 |
| --------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `mobile/assets/icon.png`          | App icon (1024×1024)                         | present                                                                                                                                |
| `mobile/assets/splash.png`        | Splash screen image                          | **MISSING — see blockers**                                                                                                             |
| `mobile/assets/adaptive-icon.png` | Android only, but referenced in `app.json`   | **MISSING** (iOS-only build will still fail validation if `app.json` references it — Expo allows missing for iOS-only platform target) |
| `mobile/assets/favicon.png`       | Web favicon                                  | present                                                                                                                                |
| `secrets/AuthKey_3ZUP487476.p8`   | App Store Connect API key (for `eas submit`) | present                                                                                                                                |
| `secrets/AuthKey_J748RK82Z7.p8`   | APNs key (for push notifications)            | present                                                                                                                                |

---

## 1. The five-command shipping sequence

After clearing the blockers in §3, this is the entire flow:

```bash
cd mobile
eas login                                         # interactive — Expo creds
eas init --id <project-id>                        # OR `eas init` to create new
eas credentials                                   # interactive — sets up signing
eas build --platform ios --profile production     # 15–30 min on EAS workers
eas submit --platform ios --profile production    # uploads .ipa to TestFlight
```

Detailed notes on each step below.

---

## 2. Step-by-step

### 2a. `cd mobile`

All EAS commands run from the project that contains `eas.json`. The repo root
does **not** have one — only `mobile/` does.

### 2b. `eas login`

Interactive. Use the Expo account that owns the `theenglishhub` org. If you
get an "owner mismatch" error during build, the logged-in account is wrong.

### 2c. `eas init` — link or create the EAS project

`mobile/app.json` currently has `extra.eas.projectId: "REPLACE_WITH_EAS_PROJECT_ID"`.
This must be a real UUID before any build runs.

**Two options:**

- **If an EAS project already exists** (check at https://expo.dev under the
  `theenglishhub` org):

  ```bash
  eas init --id <existing-project-uuid>
  ```

  This writes the UUID into `app.json`'s `extra.eas.projectId`.

- **If no EAS project exists yet**:

  ```bash
  eas init
  ```

  Prompts to create a new project under the owner. Note the printed UUID and
  confirm it landed in `mobile/app.json` `extra.eas.projectId`. **Commit this
  file** — without the UUID, future `eas build` calls won't know which project
  to attach builds to.

### 2d. `eas credentials` — Apple signing material

EAS can manage everything for you. When prompted:

- **Distribution Certificate**: let EAS generate one (it stores it on
  Apple's portal under the team). If you've previously made one in Xcode,
  EAS can import it.
- **Provisioning Profile**: let EAS create an App Store profile bound to
  `app.theenglishhub.mobile`.
- **Push Notification Key (APNs)**: when prompted, choose "Upload an existing
  key" and supply `secrets/AuthKey_J748RK82Z7.p8` plus the Key ID printed on
  the file (`J748RK82Z7`) and Team ID `645XBAPVHK`. This is required for
  `expo-notifications` to deliver pushes in production.
- **App Store Connect API Key**: choose "Upload existing" and supply
  `secrets/AuthKey_3ZUP487476.p8`. Key ID `3ZUP487476`. You will also need
  the **Issuer ID** — find it at
  https://appstoreconnect.apple.com/access/integrations/api (top of the page).
  This unlocks non-interactive `eas submit`.

EAS stores all of this server-side; you do **not** need a Mac.

### 2e. EAS environment secrets — RevenueCat

`eas.json` references two env vars at build time:

```
EXPO_PUBLIC_REVENUECAT_IOS_API_KEY     ← $EAS_REVENUECAT_IOS_API_KEY
EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY ← $EAS_REVENUECAT_ANDROID_API_KEY
```

The iOS key is also embedded directly in `app.json` under
`extra.revenuecatIosApiKey`, so the build will succeed without the env vars,
but **you should still register the secret** so the build env doesn't print a
warning and so future Android builds work:

```bash
eas secret:create --scope project --name EAS_REVENUECAT_IOS_API_KEY \
  --value "appl_zQIYhRvQeIbiNRmjjpMTUphLgxzMay" --type string
```

Add the Android one when the Android key is provisioned.

### 2f. `eas build --platform ios --profile production`

- Uses the `production` profile from `eas.json`: `m-medium` worker,
  `appVersionSource: remote` so EAS controls the build number,
  `autoIncrement: true` so each build bumps `buildNumber`.
- 15–30 min wall-clock. CLI streams logs and prints a URL you can monitor in
  the browser.
- Output is an `.ipa` artifact stored on EAS servers.

### 2g. `eas submit --platform ios --profile production`

- Uses the `submit.production.ios` block in `eas.json` (Apple Team `645XBAPVHK`,
  ASC App `6765644554`, language `en-GB`).
- Picks up the most recent successful build automatically. To target a
  specific build pass `--id <build-id>`.
- Apple will email a "build is processing" notification ~5 min after upload,
  then "build is ready to test" ~15–30 min later (export compliance review).

---

## 3. Pre-flight blockers (fix before running step 2f)

These will cause the build or submission to fail. Fix them up front:

### Blocker 1 — `mobile/assets/splash.png` missing

`app.json` references `./assets/splash.png` but only `icon.png` and
`favicon.png` exist on disk. The Metro bundler will throw at build time.

**Fix**: drop a 1284×2778 PNG (or any image — Expo scales) at
`mobile/assets/splash.png`. Even a flat-blue placeholder unblocks the build;
real artwork can ship in a follow-up `buildNumber: 2`.

### Blocker 2 — `mobile/assets/adaptive-icon.png` missing

Same situation. Android-only, but `app.json` lists it under `android.adaptiveIcon`.
For an iOS-only build EAS will skip it; for the unified build it fails.
Provide a 1024×1024 PNG to be safe.

### Blocker 3 — `extra.eas.projectId` is the placeholder string

`"REPLACE_WITH_EAS_PROJECT_ID"` will fail at the `eas build` upload step.
Resolved by step 2c (`eas init`).

### Non-blockers worth noting

- **`react-native-purchases` v8 config plugin**: not required. The native
  module auto-links via Expo's autolinking; no entry in `app.json` `plugins`
  is needed for SDK 51 + EAS Build. Confirmed by RevenueCat's Expo docs.
- **`NSUserTrackingUsageDescription`**: present. RevenueCat v8 does **not**
  require any additional Info.plist keys beyond what's already there.
  StoreKit purchases need no usage strings.
- **Bundle identifier**: matches ASC (`app.theenglishhub.mobile`).
- **Build number**: starts at `1`; `autoIncrement: true` in the production
  profile means EAS will manage future bumps.
- **APNs key**: file present at `secrets/AuthKey_J748RK82Z7.p8`. Uploaded
  via `eas credentials` in step 2d, **not** referenced from `app.json` or
  `eas.json` directly.
- **`google-play-service-account.json`**: referenced in `submit.production.android`
  in `eas.json`. Not present on disk — **only blocks Android submission**, not
  the iOS pipeline this runbook covers.

---

## 4. Reference

- EAS Build: https://docs.expo.dev/eas/
- EAS Submit: https://docs.expo.dev/submit/ios/
- RevenueCat + Expo: https://www.revenuecat.com/docs/getting-started/installation/expo
- App Store Connect: https://appstoreconnect.apple.com/

## 5. Quick rebuild after a code change

Once everything above is wired up, future ships are:

```bash
cd mobile
eas build --platform ios --profile production && \
eas submit --platform ios --profile production
```
