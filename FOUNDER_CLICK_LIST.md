# Founder Click List — Ship Day

The 10 physical clicks/types you personally must do tomorrow. Claude (in the new session) handles everything else. Do these in order.

---

## 1. Vercel — paste `REVENUECAT_WEBHOOK_SECRET`

- **Where**: https://vercel.com/<team>/english-hub/settings/environment-variables
- **Click**: `Add New`
- **Type**:
  - Name: `REVENUECAT_WEBHOOK_SECRET`
  - Value: paste the contents of `secrets/revenuecat-webhook-secret.txt` (no quotes, no whitespace)
  - Environment: tick `Production`
  - Save
- **Verify**: row appears in the Production env list with that exact name.

---

## 2. Vercel — paste `REVENUECAT_APPLE_SHARED_SECRET`

- **Where**: same page (https://vercel.com/<team>/english-hub/settings/environment-variables)
- **Click**: `Add New`
- **Type**:
  - Name: `REVENUECAT_APPLE_SHARED_SECRET`
  - Value: `<from 1Password — "Apple Shared Secret — The English Hub" (the rotated value)>`
  - Environment: tick `Production`
  - Save
- **Verify**: row appears in the Production env list with that exact name.

---

## 3. Vercel — redeploy main

- **Where**: https://vercel.com/<team>/english-hub/deployments
- **Click**: latest production deployment row → `⋯` (three dots) → `Redeploy` → confirm `Redeploy` (leave "Use existing build cache" unchecked)
- **Type**: nothing
- **Verify**: build status reaches `Ready`, the new commit SHA shows as the live production deployment.

---

## 4. Apple ID — generate app-specific password

- **Where**: https://appleid.apple.com/account/manage → `Sign-In and Security` → `App-Specific Passwords`
- **Click**: `Generate Password` → name it `EAS Submit — The English Hub` → `Create`
- **Type**: nothing — Apple shows a 19-character password (format `xxxx-xxxx-xxxx-xxxx`).
- **Verify**:
  1. Copy the password to clipboard before closing the dialog (it is shown ONCE).
  2. Open 1Password → new login item titled `EAS Submit App-Specific Password` → paste into password field → save.

---

## 5. Expo — sign up (skip if you already have an account)

- **Where**: https://expo.dev/signup
- **Click**: `Sign up`
- **Type**:
  - Email: `cj@upskillenergy.com`
  - Username: anything available
  - Password: generate a strong password in 1Password and save as `Expo (EAS) — cj@upskillenergy.com`
- **Verify**: email verification link clicked, you land on the Expo dashboard logged in. (If you already have an account, just have email + password from 1Password ready for step 6.)

---

## 6. Terminal — `eas login`

- **Where**: terminal, in `D:\Coding\english-hub\mobile`
  ```
  cd D:\Coding\english-hub\mobile
  eas login
  ```
- **Click**: nothing — paste credentials when prompted.
- **Type**:
  - Email or username: `<from 1Password — Expo (EAS)>`
  - Password: `<from 1Password — Expo (EAS)>`
- **Verify**: terminal prints `Logged in as <username>`.

---

## 7. Apple — answer 2FA prompt during `eas credentials`

Claude will run `eas credentials` in the next session. When it does, your Apple devices will buzz.

- **Where**: your iPhone (or Mac/iPad signed into the same Apple ID).
- **Click**: `Allow` on the "Apple ID Sign In Requested" sheet → read the 6-digit code.
- **Type**: the 6-digit code into the terminal where Claude is running `eas credentials`.
- **Verify**: terminal moves past the 2FA prompt and into the credentials menu (no `invalid code` message).

---

## 8. Supabase — create reviewer auth user

- **Where**: https://supabase.com/dashboard/project/arjjzkudncwqprpyamkw/auth/users
- **Click**: `Add user` → `Create new user`
- **Type**:
  - Email: `apple-reviewer@upskillenergy.com`
  - Password: 1Password → `Generate password` → `Strong (20 chars)` → copy. Save as new 1Password item `Apple Reviewer — The English Hub`.
  - Tick `Auto Confirm User`
  - Click `Create user`
- **Verify**: new row appears in the Users list. Click it → copy the `UUID` value → paste into the same 1Password item under a custom field `user_id`.

---

## 9. iPhone — install TestFlight build + capture 5 screenshots

You need a 6.7" or 6.9" iPhone (iPhone 14 Pro Max / 15 Plus / 15 Pro Max / 16 Pro Max). Resolution must be 1290×2796.

- **Where**: TestFlight app on the iPhone.
- **Click**:
  1. Open TestFlight → `The English Hub` → `Install` (or `Update`) → wait for download.
  2. Open the app, log in with the reviewer account from step 8.
  3. Capture screenshots of these 5 surfaces — press `Volume Up + Side button` simultaneously for each:
     1. Onboarding / welcome screen
     2. Lesson list (home)
     3. Inside a lesson (mid-exercise)
     4. Progress / streak screen
     5. Paywall (tap upgrade)
- **Type**: nothing.
- **Verify**: open Photos → 5 new screenshots, each `1290 × 2796` (tap a photo → swipe up → check `Pixels`). Leave them in Photos — Claude will pull them next session via iCloud Photos / AirDrop instructions.

---

## 10. App Store Connect — final submit click

Do this LAST, after Claude confirms in the new session that the build is processed, metadata is filled, and screenshots are uploaded.

- **Where**: https://appstoreconnect.apple.com/apps/6765644554/distribution/ios/version/inflight
- **Click**:
  1. Scroll to `App Privacy` and `Export Compliance` sections — confirm both show green ticks.
  2. In `Export Compliance Information`, when prompted: encryption = `No`.
  3. Top right → `Add for Review` → review the summary → `Submit to App Review`.
- **Type**: nothing.
- **Verify**: version `1.0` status badge changes to `Waiting for Review` (top of the page, under the version number). You will receive a confirmation email from Apple within ~10 minutes.

---

## That's it. 10 actions. Hand back to Claude after each step.

If anything in steps 1–10 doesn't match what you see on screen, STOP and paste the screen into the Claude session — do not improvise. Everything else (RevenueCat config, EAS build/submit, ASC metadata, screenshot upload, App Privacy answers, review notes, demo account wiring) is Claude's job in the new session.
