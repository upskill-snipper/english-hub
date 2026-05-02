# Mobile Observability Setup Runbook

**Audience:** Founder, post-launch (week 2 onward)
**Time investment:** ~2 hours total (1 hour Sentry account + project setup, 1 hour mobile wiring + verification)
**Status as of 2026-05-01:** Web is fully wired. Mobile has zero crash reporting.

---

## 1. Audit summary (what exists today)

### Web (`@sentry/nextjs` — fully wired)
- `@sentry/nextjs ^10.44.0` in root `package.json`.
- `sentry.client.config.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts` — all three runtimes covered with PII scrubbing in `beforeSend` / `beforeBreadcrumb` (strips emails, usernames, request bodies, cookies).
- `next.config.js` wraps the export in `withSentryConfig(...)` and includes `@sentry/nextjs` in `optimizePackageImports`.
- `npm run sentry:sourcemaps` script for symbolicated stack traces.
- 15+ route-level `error.tsx` boundaries plus `src/app/global-error.tsx` all call `Sentry.captureException(error)`.
- Cron jobs use `src/lib/cron/observability.ts` to tag errors per route.
- Webhook routes (`/api/stripe/webhook`, `/api/revenuecat/webhook`, `/api/auth/register`, `/api/auth/teacher-signup`, `/api/cron/affiliate-confirm`) explicitly call `Sentry.captureException` with route tags.
- Required env vars (already in production): `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_DSN`.

### Mobile (`mobile/`) — NOT WIRED
- `mobile/package.json`: no `@sentry/react-native`, no `sentry-expo`, no Crashlytics, no Bugsnag.
- `mobile/app.json`: no Sentry plugin in the `plugins` array.
- `mobile/README.md` line 141 references "monitor crash reports (Sentry or Expo's built-in dashboard)" as a TODO — never actioned.
- PostHog is not used in the mobile app, and is analytics-only on the web side (no `captureException` calls via PostHog).

### Will Apple's built-in TestFlight crash reports be enough for week 1?
**Yes — for week 1 only.** Apple aggregates crash reports under App Store Connect → TestFlight → Build → Crashes (and the same view exists for production builds under App Store Connect → Apps → Metrics → Crashes). You will see:
- Crash counts per build with stack traces.
- Symbolicated stack traces if you upload the dSYM (EAS does this automatically when you opt in).
- Affected device / iOS version breakdowns.

**What you will NOT see without Sentry:**
- JavaScript errors that don't crash the native shell (unhandled promise rejections inside the WebView host, expo-router navigation errors, network failures in `lib/auth.ts` / `lib/notifications.ts` / `lib/offline-cache.ts`).
- Errors users hit but never report (TestFlight crash submission is opt-in per device).
- Breadcrumbs — what the user did before the crash.
- Release-tagged grouping (Apple groups by build number; Sentry groups by stack signature).

For a closed TestFlight build with <50 testers, Apple's reports will catch the critical native crashes. Wire Sentry before opening the App Store listing to the public.

---

## 2. Recommended post-launch wiring (target: end of week 2)

### Option A: `@sentry/react-native` (recommended)
- Officially maintained, supports Expo SDK 51 via the config plugin.
- Free tier: 5,000 errors/month, 10,000 performance units/month, 50 replays/month.
- Same Sentry org as the web — so all errors land in one dashboard.

> **Note:** `sentry-expo` was deprecated in late 2023 and folded into `@sentry/react-native`. Use the latter.

### Step-by-step (≈1 hour for the wiring, after the account is set up)

#### 2.1 Sentry account + project (≈30 min)
1. Log into the existing Sentry org used by the web app (the DSN in production env vars will tell you which org).
2. Create a new project: Platform = **React Native**, name = `english-hub-mobile`, team = same team as the web project.
3. Copy the new DSN — this is **separate** from the web DSN. Keep both.
4. In Settings → Projects → english-hub-mobile → Client Keys, confirm the DSN. In Settings → Projects → english-hub-mobile → Source Maps, generate an auth token for sourcemap uploads. Save it as `SENTRY_AUTH_TOKEN` in your password manager.

#### 2.2 Install the SDK in `mobile/` (≈10 min)
```bash
cd mobile
npx expo install @sentry/react-native
```
This adds the dependency and runs the Sentry wizard if available. If it does not auto-configure, do the next two steps manually.

#### 2.3 Add the config plugin to `mobile/app.json` (≈5 min)
Edit `mobile/app.json`. In the `expo.plugins` array, add the Sentry plugin entry. The final array should look like:
```json
"plugins": [
  "expo-router",
  "expo-secure-store",
  ["expo-notifications", { "color": "#1e40af" }],
  ["@sentry/react-native/expo", {
    "organization": "REPLACE_WITH_SENTRY_ORG_SLUG",
    "project": "english-hub-mobile",
    "url": "https://sentry.io/"
  }]
]
```

#### 2.4 Initialise Sentry in `mobile/app/_layout.tsx` (≈10 min)
At the top of the root layout file, before any other imports that might throw:
```ts
import * as Sentry from '@sentry/react-native'
import Constants from 'expo-constants'

Sentry.init({
  dsn: Constants.expoConfig?.extra?.sentryDsn as string,
  enabled: !__DEV__,
  tracesSampleRate: 0.1,
  // Mirror the web PII-scrubbing rules — student data must not leave the device
  beforeSend(event) {
    if (event.user) {
      delete event.user.email
      delete event.user.username
    }
    if (event.request?.cookies) delete event.request.cookies
    return event
  },
})
```

Wrap the default export of `_layout.tsx` with `Sentry.wrap(...)` so navigation breadcrumbs are captured automatically:
```ts
export default Sentry.wrap(RootLayout)
```

#### 2.5 Add the DSN to `mobile/app.json > extra` (≈5 min)
```json
"extra": {
  "eas": { "projectId": "..." },
  "webUrl": "https://theenglishhub.app",
  "revenuecatIosApiKey": "...",
  "revenuecatAndroidApiKey": "",
  "sentryDsn": "REPLACE_WITH_MOBILE_SENTRY_DSN"
}
```
The DSN is a public client key — committing it to source is fine and is the documented Sentry pattern. The `SENTRY_AUTH_TOKEN` (used only to upload sourcemaps) is the value that must stay secret.

#### 2.6 Configure EAS to upload sourcemaps (≈10 min)
In `mobile/eas.json`, add the auth token to the build env for both iOS and Android profiles:
```json
"production": {
  "env": {
    "SENTRY_AUTH_TOKEN": "$SENTRY_AUTH_TOKEN"
  }
}
```
Then store the token as an EAS secret so it does not need to be in the local environment:
```bash
eas secret:create --scope project --name SENTRY_AUTH_TOKEN --value <paste-the-token>
```

#### 2.7 Verify (≈10 min)
1. In `mobile/app/account.tsx`, temporarily add a debug button:
   ```tsx
   <Button title="Throw test error" onPress={() => { throw new Error('Sentry verify') }} />
   ```
2. Run `cd mobile && npx expo start`, open on a device, tap the button.
3. Within 60 seconds, the error should appear in Sentry → Issues for the `english-hub-mobile` project.
4. Remove the debug button before committing.
5. Build a TestFlight build (`npm run build:ios`) and confirm the build appears in Sentry → Releases with a sourcemap attached.

---

## 3. Dashboard setup (≈15 min, do once)

In Sentry → english-hub-mobile project:
1. **Alerts** → New Alert Rule → "When an issue is first seen" → Notify via email to `cj@upskillenergy.com`. Set to fire on issues with `level >= error`.
2. **Alerts** → second rule → "When an event count exceeds 50 in 1 hour" → Notify by email. This catches a regression spike without per-issue spam.
3. **Releases** → confirm releases are auto-created from EAS builds (they will be once `SENTRY_AUTH_TOKEN` is wired).
4. **Settings → Data Scrubbing** → confirm "Prevent storing of IP addresses" and "Use default scrubbers" are both ON. The `beforeSend` hook gives belt-and-braces, but this is the server-side safety net.

---

## 4. Cost ceiling

Free tier covers the launch traffic comfortably:
- 5,000 errors/month (mobile + web combined if you reuse the org's quota; or use the per-project allotment).
- A typical pre-PMF launch sees fewer than 200 errors/month across both surfaces.
- If volume spikes, the Team plan is $26/month for 50K errors. Set a spend cap in Sentry → Subscription → Spend Allowance to avoid surprise bills.

---

## 5. Action items (in priority order)

| # | Action | When | Effort | Owner |
| - | --- | --- | --- | --- |
| 1 | Confirm Apple TestFlight crash reports are visible in App Store Connect for the week-1 build | Day 1 of TestFlight | 5 min | Founder |
| 2 | Wire `@sentry/react-native` in `mobile/` (sections 2.2–2.7 above) | Before public App Store listing | 1 hr | Founder |
| 3 | Set up Sentry alerts (section 3) | Same day as #2 | 15 min | Founder |
| 4 | Add a `Sentry.captureException` call in `mobile/lib/auth.ts`, `mobile/lib/notifications.ts`, `mobile/lib/offline-cache.ts` for any caught-and-swallowed errors | Same day as #2 | 20 min | Founder |
| 5 | Decide whether to enable Session Replay on mobile (free tier: 50/month). Useful for one-off debugging, off by default in this runbook | Post-launch | 5 min | Founder |

---

## 6. Files referenced

- `D:/Coding/english-hub/mobile/package.json`
- `D:/Coding/english-hub/mobile/app.json`
- `D:/Coding/english-hub/mobile/eas.json`
- `D:/Coding/english-hub/mobile/app/_layout.tsx`
- `D:/Coding/english-hub/mobile/README.md` (line 141 — the original TODO)
- `D:/Coding/english-hub/sentry.client.config.ts` (web PII-scrubbing pattern to mirror)
- `D:/Coding/english-hub/MONITORING.md` (web monitoring overview — extend after step 2.7)
