# The English Hub — Mobile

Expo SDK 51 React Native wrapper around the [theenglishhub.app](https://theenglishhub.app) web application. The app uses `react-native-webview` to render the main product surfaces inside native tabs, plus a small native layer for push notifications, secure token storage, and offline reading.

## Stack

- Expo SDK 51 (Managed workflow)
- expo-router 3 (file-based routing, Tabs navigator)
- react-native-webview
- expo-secure-store (auth token storage)
- expo-notifications (push + local notifications)
- @react-native-async-storage/async-storage (offline content cache)
- TypeScript

## Project layout

```
mobile/
  app/
    _layout.tsx      Root Tabs navigator (Home / Learn / Games / Saved / Account)
    index.tsx        Home WebView -> https://theenglishhub.app
    learn.tsx        Learn WebView -> https://theenglishhub.app/revision
    games.tsx        Games WebView -> https://theenglishhub.app/games
    saved.tsx        Offline reader backed by AsyncStorage
    account.tsx      Native settings / links
  lib/
    auth.ts          SecureStore helpers (getToken / setToken / clearToken)
    notifications.ts Push registration + local notifications
    offline-cache.ts AsyncStorage wrapper for saved content
  assets/            Icon / splash / adaptive-icon / notification-icon
  App.tsx            Legacy entry (expo-router uses expo-router/entry)
  app.json           Expo config
  babel.config.js    Babel + expo-router plugin
  package.json       Deps + scripts
  tsconfig.json      TS config extending expo/tsconfig.base
```

## Getting started

```bash
cd mobile
npm install
npx expo start
```

- Press `i` to launch iOS simulator (requires Xcode)
- Press `a` to launch Android emulator (requires Android Studio)
- Scan the QR code with Expo Go on a physical device for a quick smoke test

## Environment / configuration

Configuration lives in `app.json` under `expo.extra`. The important values:

| Key | Purpose |
| --- | --- |
| `extra.webAppUrl` | Base URL the WebViews load (`https://theenglishhub.app`) |
| `extra.eas.projectId` | EAS project id — replace `REPLACE_WITH_EAS_PROJECT_ID` before first build |
| `ios.bundleIdentifier` | `app.theenglishhub.mobile` |
| `android.package` | `app.theenglishhub.mobile` |

There are no `.env` files. If you later introduce environment-specific base URLs (e.g. staging), add them to `app.json > extra` and read them via `expo-constants`.

## Native-to-web bridge

Every WebView screen passes a custom `User-Agent` string containing the token `TheEnglishHubNative/1.0`. The web app can feature-detect this to show mobile-only UI or hide download banners.

Each WebView also injects a small bridge on page load:

```js
window.__ENGLISH_HUB_NATIVE__ = true;
window.__ENGLISH_HUB_TAB__ = 'home' | 'learn' | 'games';
window.postNativeMessage({ type: '...' });
```

The web app can call `window.postNativeMessage(...)` to hand messages back to native. Current handlers (see `app/index.tsx`):

- `{ type: 'auth', token }` — persists a session token in SecureStore
- `{ type: 'logout' }` — clears the stored token
- `{ type: 'navigate', route }` — pushes a native route
- `{ type: 'openSaved' }` — opens the Saved tab
- `{ type: 'ready' }` — hides the loading spinner

## Icons and splash

Before submitting to the stores, replace the placeholder assets in `./assets/`:

- `icon.png` — 1024x1024, opaque, no alpha (iOS)
- `adaptive-icon.png` — 1024x1024 foreground layer (Android)
- `splash.png` — 2048x2048 (or 1242x2436 for 4:3) centred logo on white
- `notification-icon.png` — 96x96 monochrome PNG (Android notification tray)
- `favicon.png` — 48x48 (web)

`npx expo prebuild` regenerates native projects using these assets if you go bare.

## Building for the stores

Install EAS CLI once globally: `npm install -g eas-cli`, then `eas login`.

```bash
# one-time project link
eas build:configure

# iOS (App Store)
npm run build:ios
npm run submit:ios

# Android (Play Store)
npm run build:android
npm run submit:android
```

### Apple App Store checklist

- [ ] Replace `extra.eas.projectId` in `app.json`
- [ ] Bump `ios.buildNumber` for every TestFlight upload
- [ ] App icon 1024x1024 opaque, no transparency
- [ ] Screenshots: 6.7", 6.5", 5.5" (iPhone) and 12.9" (iPad, if supporting tablet)
- [ ] App Store Connect entry created with `app.theenglishhub.mobile` bundle id
- [ ] Privacy policy URL filled in (required)
- [ ] Data collection disclosure (App Privacy) reflects web analytics + push tokens
- [ ] Sign in with Apple if any third-party login is offered (App Review Guideline 4.8)
- [ ] Export compliance: `ITSAppUsesNonExemptEncryption` is set to `false` in `app.json`
- [ ] Paid Apple Developer account enrolled ($99/year)

### Google Play Store checklist

- [ ] Bump `android.versionCode` for every upload
- [ ] AAB upload via `eas submit`
- [ ] Adaptive icon 1024x1024 foreground + background colour
- [ ] Screenshots: phone + tablet (7" and 10")
- [ ] Feature graphic 1024x500
- [ ] Privacy policy URL filled in (required)
- [ ] Data safety form completed (push token, analytics)
- [ ] Content rating questionnaire
- [ ] Target API level meets Play's current requirement (Expo SDK 51 satisfies this)
- [ ] Google Play Console account created ($25 one-time)

### Post-release

- [ ] Verify push notifications via Expo push tool (https://expo.dev/notifications)
- [ ] Monitor crash reports (Sentry or Expo's built-in dashboard)
- [ ] OTA updates via `eas update` for JS-only changes

## Troubleshooting

- `Unable to resolve module ...`: run `npx expo start -c` to clear Metro cache
- WebView shows blank screen: check `originWhitelist` and that the target URL has valid TLS
- Push token not returned: must be on a physical device, not the simulator/emulator
- iOS build fails on `expo-secure-store`: ensure Xcode command line tools are installed
