# Handoff prompt for Claude on Mac

Copy-paste everything between the `---` lines below into Claude (Claude Code or
the Claude desktop app) on your Mac to pick up exactly where the Windows
session left off.

The prompt deliberately does **NOT** contain any actual secret values — those
live in the gitignored `secrets/` folder of the repo, and Claude will read
them from disk on the Mac. Apple/Vercel/Supabase/RevenueCat passwords are
**yours alone** — Claude must never type them. The prompt explicitly tells
Claude to ask you to log in via the browser at the right moments.

---

## START OF PROMPT

You are taking over an in-flight iOS App Store launch for **The English Hub** —
a UK GCSE/IGCSE English revision app. A previous Claude session running on a
Windows machine did the App Store Connect, RevenueCat, and codebase setup. Your
job is to drive the remaining steps to get the app onto TestFlight and submitted
for App Review.

### Project facts (all public, safe to use)

| Field | Value |
| --- | --- |
| Legal entity | Upskill Energy Limited |
| Apple ID (account holder) | `cj@upskillenergy.com` |
| Apple Team ID | `645XBAPVHK` |
| ASC App ID | `6765644554` |
| Bundle ID | `app.theenglishhub.mobile` |
| Primary language | English (U.K.) |
| APNs Key ID | `J748RK82Z7` |
| ASC API Key ID | `3ZUP487476` |
| ASC API Issuer ID | `96c4e333-5841-4a2a-a3c6-731ab3770166` |
| RevenueCat project ID | `af25cb42` |
| RevenueCat iOS public SDK key | `appl_zQIYhRvQeIbiNRmjjpMTUphLgxzMay` |
| RevenueCat entitlement | `premium` |
| RevenueCat offering | `default` |
| iOS product IDs | `com.upskillenergy.theenglishhub.{student,teacher}.{monthly,annual}` |
| Webhook URL | `https://theenglishhub.app/api/revenuecat/webhook` |
| Demo reviewer email | `apple-reviewer@upskillenergy.com` |

### Where things live on disk

The repo is checked out somewhere on this Mac — likely
`~/Coding/english-hub` or wherever you cloned it. Run `pwd` and `ls` to
confirm before doing anything. If you can't find it, ask the user.

Once you're in the repo root, the canonical handoff documents are:

- `FOUNDER_HANDOFF.md` — the one-page overview.
- `business-docs/SHIP_RUNBOOK.md` — line-by-line shipping checklist.
- `business-docs/APPLE_SETUP_STATE.md` — Apple-side state snapshot.
- `business-docs/REVENUECAT_SETUP_STATE.md` — RC-side state snapshot.
- `docs/EAS_BUILD_RUNBOOK.md` — EAS commands and credentials flow.
- `docs/APPLE_REVIEWER_ACCOUNT.md` — demo reviewer setup steps.
- `docs/ASC_METADATA.md` — ASC Version 1.0 copy reference.
- `docs/APP_PRIVACY_ANSWERS.md` — privacy questionnaire reference.
- `docs/IAP_PRODUCT_SPEC.md` — IAP product matrix.
- `docs/MOBILE_IAP_INTEGRATION.md` — mobile RC code reference.
- `docs/REVIEWER_NOTES_APPLE.md` — App Review reviewer notes.

**Read these in order before doing anything else** — start with
`FOUNDER_HANDOFF.md`, then `SHIP_RUNBOOK.md`. Everything else is reference
material when you need it.

### Secrets and credentials

The repo's `secrets/` folder is gitignored and contains:

- `secrets/AuthKey_J748RK82Z7.p8` — APNs auth key for push notifications.
- `secrets/AuthKey_3ZUP487476.p8` — App Store Connect API key for EAS Submit
  and RevenueCat product imports.
- `secrets/revenuecat-webhook-secret.txt` — RevenueCat webhook bearer token,
  the exact value to set as `REVENUECAT_WEBHOOK_SECRET` in Vercel production.

If those files are not on the Mac (the Windows machine generated them), the
user will need to either:
1. Sync the `secrets/` folder from their Windows machine to this Mac via 1Password
   / encrypted USB / scp, or
2. Regenerate them. The APNs key and ASC API key are downloadable **only once**
   from Apple — if regenerated, the old ones are invalidated. The webhook
   token is just a random string; regenerate with `openssl rand -base64 48` and
   update both Vercel env and the RevenueCat dashboard simultaneously.

**You (Claude) must never:**

- Type the user's Apple ID password, RevenueCat password, Vercel password,
  Supabase password, or any cloud-service password. The user logs in via the
  browser themselves and you operate within the authenticated session.
- Enter banking, tax, social security, or any financial-identity data into
  any form. If a flow needs that, stop and let the user complete it.
- Accept Apple legal agreements, paid-apps agreements, or Terms of Service
  on the user's behalf without explicit per-agreement confirmation in chat.
- Paste actual secret values back into chat. When you read a secret from the
  `secrets/` folder, use it via JS injection or a file argument — never echo
  it. If the user asks "what's the secret", point them at the file path.
- Create new accounts on the user's behalf. Account creation is the user's
  job; you assist with config inside an existing logged-in session.

### What's already done (don't redo)

- Apple Developer Program membership: active. Both Developer Agreements
  signed. £79 paid.
- App Store Connect app record created. App Information saved (subtitle:
  "GCSE & IGCSE English revision", category: Education / Reference, content
  rights: yes-with-rights, privacy URL: `https://theenglishhub.app/privacy`).
- Age Rating: 13+ across 173 territories (12+ in Korea, A14 in Brazil),
  saved.
- App Privacy questionnaire: 8 data types declared, all 24 per-type detail
  dialogs filled (every type linked-to-user=YES, used-for-tracking=NO),
  published.
- Pricing & Availability: app price = Free, available in all 175 territories.
- Paid Apps Agreement, Bank, Tax form: all Active.
- 4 IAP products created in ASC under two subscription groups:
  - Group "English Hub Student" (`22062585`): Student Monthly £3.99, Student
    Annual £29.99.
  - Group "English Hub Teacher" (`22062689`): Teacher Monthly £6.99, Teacher
    Annual £67.99.
  - All products have en-GB localization (display name + description), all
    175 territories enabled, status "Prepare for Submission".
- App-Specific Shared Secret generated in ASC (rotated once after a chat
  exposure; the rotated value should be in the user's 1Password under "Apple
  Shared Secret — The English Hub").
- App Store Connect API key generated (Admin role) and the .p8 saved to
  `secrets/AuthKey_3ZUP487476.p8`.
- APNs auth key generated (Sandbox & Production, Team Scoped) and the .p8
  saved to `secrets/AuthKey_J748RK82Z7.p8`.
- RevenueCat: project created, iOS app linked with **Valid credentials**
  status, public iOS SDK key copied into `mobile/app.json`
  `extra.revenuecatIosApiKey`, entitlement `premium` configured with all 4
  products attached, offering `default` configured with 4 packages
  (`student_monthly`, `student_annual`, `teacher_monthly`, `teacher_annual`),
  webhook configured with the bearer token from
  `secrets/revenuecat-webhook-secret.txt`.
- Mobile codebase: `react-native-purchases ^8.x` installed,
  `mobile/lib/purchases.ts` SDK wrapper, `mobile/app/paywall.tsx` paywall
  screen, `mobile/app/account.tsx` Premium CTA + restore button,
  `mobile/app/_layout.tsx` `initPurchases()` on mount, `mobile/lib/auth.ts`
  cascades to `loginToRevenueCat`/`logoutFromRevenueCat`,
  `mobile/lib/webview-bridge.ts` parses the WebView `auth`/`logout`
  postMessages and aliases the user. Audit blockers fixed (theme tokens,
  router cast, race condition, hardcoded entitlement literal).
- Brand assets generated by Pillow scripts (`scripts/generate_app_icon.py`,
  `scripts/generate_brand_assets.py`,
  `scripts/generate_ios_screenshots.py`):
  - `mobile/assets/icon.png` (1024×1024 RGB).
  - `mobile/assets/splash.png` (2048×2048 RGB).
  - `mobile/assets/adaptive-icon.png` (1024×1024 RGB).
  - `mobile/store-assets/ios/screenshot-{1..5}.png` (1290×2796 RGB) — these
    are placeholder stubs; replace with real device captures from a
    TestFlight build.
- ASC Version 1.0 metadata: promotional text, 2360-char description, 92-char
  keyword list, support URL, marketing URL, copyright, App Review reviewer
  notes, contact name + email (`review@theenglishhub.app`), demo account
  email — all saved.

### What's left for you to drive

You're working with the user. Some steps need them to log in via the browser;
some need them to type passwords. Walk through these in order:

1. **Set Vercel production env vars.** Open Vercel in a browser tab. Project
   = `english-hub`. Settings → Environment Variables. Add or update:
   - `REVENUECAT_WEBHOOK_SECRET` = the line in
     `secrets/revenuecat-webhook-secret.txt` (no quotes, no trailing newline).
     The user's existing value (if any) needs replacing.
   - `REVENUECAT_APPLE_SHARED_SECRET` = the rotated Apple Shared Secret from
     1Password. Ask the user to paste it directly into Vercel's UI; do NOT
     have them paste it back into chat.

   Verify by triggering a redeploy of `main` so the new env reaches production
   `/api/revenuecat/webhook`.

2. **Confirm the Mac has the secrets.** If `secrets/AuthKey_J748RK82Z7.p8` and
   `secrets/AuthKey_3ZUP487476.p8` aren't on disk, the user must transfer them
   from their Windows machine. Verify with `ls -la secrets/` and `wc -l` —
   each .p8 should be ~6 lines, ~258 bytes.

3. **EAS Build prep.** The Mac has Xcode and macOS, so this is the right
   place. Run:
   ```
   cd mobile
   npm install -g eas-cli
   eas --version       # confirm 18.x or later
   eas login           # interactive — user types Expo email + password
   ```

4. **Link the EAS project.** `mobile/app.json` `extra.eas.projectId` is the
   placeholder `REPLACE_WITH_EAS_PROJECT_ID`. Run:
   ```
   eas init
   ```
   Pick "Create a new project" and accept the suggested slug `english-hub`.
   The CLI rewrites `app.json` with the real project ID — `git diff` and
   commit that change.

5. **Upload credentials to EAS.** Run:
   ```
   eas credentials
   ```
   Select iOS → Production. EAS will prompt for:
   - Apple ID + app-specific password (the user generates this at
     appleid.apple.com — NOT their Apple account password).
   - Distribution certificate — let EAS generate one for you.
   - Provisioning profile — let EAS generate one for you, bound to bundle
     `app.theenglishhub.mobile`.
   - Push notification key — upload `secrets/AuthKey_J748RK82Z7.p8`. When
     prompted for Key ID, type `J748RK82Z7`. When prompted for Team ID,
     `645XBAPVHK`.
   - App Store Connect API key — upload `secrets/AuthKey_3ZUP487476.p8`. Key
     ID `3ZUP487476`. Issuer ID `96c4e333-5841-4a2a-a3c6-731ab3770166`.

6. **Production build.** Run:
   ```
   eas build --platform ios --profile production
   ```
   Wait 15–30 minutes. EAS will email the user a link to download the IPA;
   you don't need to download it yourself — it lives on EAS's servers.

7. **Submit to TestFlight.** Run:
   ```
   eas submit --platform ios --profile production --latest
   ```
   This uploads the IPA to App Store Connect TestFlight. Wait 5–10 minutes for
   ASC to process the build (it appears under My Apps → The English Hub →
   TestFlight). When prompted "Does this app use Encryption", answer **No**
   (the user has set `ITSAppUsesNonExemptEncryption: false` in `app.json`).

8. **Generate real screenshots.** When the build is on TestFlight, ask the
   user to install the app on their iPhone (must be 6.7" or 6.9" — iPhone 14
   Pro Max, 15 Pro Max, 16 Pro Max). Capture 5 screenshots covering: hero,
   AI marking, mock papers, set texts, progress dashboard. The placeholder
   stubs at `mobile/store-assets/ios/screenshot-{1..5}.png` are 1290×2796 — the
   real screenshots must match. Upload the real ones to App Store Connect →
   My Apps → The English Hub → Distribution → iOS App Version 1.0 →
   Previews and Screenshots.

9. **Demo reviewer Supabase account.** Ask the user to:
   - Open Supabase dashboard → Authentication → Users.
   - Click "Add user" → email `apple-reviewer@upskillenergy.com`, with a
     password they generate and save in 1Password.
   - Copy the resulting UUID.
   - Run from the repo root:
     ```
     npx tsx scripts/grant-reviewer-entitlement.ts <UUID>
     ```
   - Paste the password into App Store Connect → My Apps → The English Hub →
     Distribution → iOS App Version 1.0 → App Review Information → Demo
     Account → Password.

   See `docs/APPLE_REVIEWER_ACCOUNT.md` for the full runbook.

10. **Attach the build to Version 1.0.** In ASC → Version 1.0 → "Build" row,
    click + and select the latest TestFlight build. When prompted about
    encryption export compliance, answer No.

11. **Verify the version is complete.** The yellow "1.0 Prepare for
    Submission" badge in the left sidebar should turn green once Build,
    Screenshots, App Privacy, and all required metadata are present. If
    anything is still red, the missing field is shown inline.

12. **Submit for App Review.** Click "Add for Review" → "Submit to App
    Review". Apple's queue is typically 24–72 hours; the Account Holder
    receives status emails throughout.

### Doing the work

- Use Claude Code (the CLI) or Claude in the Anthropic desktop app — both can
  read and edit files in the repo. If you have access to a browser
  automation MCP (Chrome MCP), use it for Apple/RevenueCat/Vercel/Supabase
  dashboards. If you don't, walk the user through manually with screenshots
  they take and send back.
- Always batch related shell commands when you can — `cd mobile && eas
  build`, etc.
- After every meaningful change to the repo, run `cd mobile && npx tsc
  --noEmit` and (when on the root) `npx tsc --noEmit` again, to catch any
  TypeScript regressions before they hit EAS Build.
- Don't push to GitHub unless the user explicitly asks. If you do push, never
  force-push to `main`, never commit anything from `secrets/`, never strip
  hooks.

### When you're done

The user wants `1.0` of The English Hub on the App Store. The ship state is
complete when:
- `eas build` and `eas submit` both succeed.
- ASC TestFlight shows the latest build "Ready to Submit".
- ASC Version 1.0 is "Waiting for Review".
- Apple emails the user "Approved" 24–72 hours later.

End your final response with a single-line status: `READY FOR APPLE REVIEW` or
`BLOCKED: <reason>` — nothing more.

## END OF PROMPT
