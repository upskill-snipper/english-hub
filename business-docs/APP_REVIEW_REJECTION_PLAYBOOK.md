# App Review Rejection Playbook

Pre-written Resolution Center responses for the 10 most likely Apple App Review rejection reasons for English Hub (UK education app, full-IAP subscription model). Each response is calibrated to be polite, factual, evidence-led, and ready to paste verbatim.

---

## How to use this playbook

**Where to file a reply:** App Store Connect (ASC) -> My Apps -> [English Hub] -> App Review tab -> Resolution Center. The reviewer's message appears at the top; the reply box is directly underneath. You can attach screenshots, screen recordings (.mp4 / .mov, max 50 MB), and PDFs. Use the "Reply" button, not "Appeal" - appeals go to the Review Board and take longer.

**Apple's typical re-review SLA:** After you reply in the Resolution Center, Apple usually responds within 24-48 hours. If a reviewer asks for a screen recording or a demo account, the clock effectively pauses until you provide it. If you submit a brand-new build, that build re-enters the standard review queue (currently averaging ~24 hours, sometimes longer on Fridays and around WWDC / holiday code freezes).

**When to escalate to a phone call:** If you have had two full round-trips with the same reviewer with no progress (reviewer rejects, you reply with evidence, reviewer rejects again on the same point, you reply again, still rejected), request a phone call via Resolution Center. Use the phrase: "We would welcome a call to walk through the build live." Apple App Review staff will schedule a 15-30 minute call within 2-3 business days. If even that fails, file an appeal with the App Review Board (separate button in Resolution Center) - this triggers a fresh reviewer.

**Tone rules:** Always polite. Never accuse the reviewer of being wrong - say "we may not have demonstrated this clearly." Always cite evidence: a screen recording timestamp, a file path in the build, a URL to the privacy policy. Never argue guideline interpretation in the Resolution Center; if the reviewer is genuinely misreading a guideline, escalate to the App Review Board.

---

## 1. Guideline 2.1 - App Completeness - Bug or Crash on Launch

> Hello App Review,
>
> Thank you for the detailed feedback on Guideline 2.1. We were unable to reproduce the launch crash on our test devices, but we take stability issues very seriously. We have re-tested build 1.0.0 (X) on iPhone 13, iPhone 15 Pro, and iPad (10th gen) running iOS 17.0, 17.5, and 18.0 with both Wi-Fi and cellular, and on a fresh install with no prior data.
>
> To help us reproduce the issue, could you confirm the device model, iOS version, and network conditions, or share the crash log? In the meantime, we have attached a screen recording of a clean launch (recording_clean_launch.mp4). We have also enabled additional Sentry breadcrumb logging on build (X+1), which we will submit immediately if the issue recurs.
>
> Please re-review when convenient.

**Pre-resubmission checklist (do BEFORE you reply):**
- [ ] Test cold launch on at least 3 device classes (oldest supported iPhone, current iPhone, iPad)
- [ ] Test on the lowest iOS version your `Info.plist` `MinimumOSVersion` supports
- [ ] Test with airplane mode on, then off
- [ ] Test as a brand-new install (delete app, reboot device, reinstall from TestFlight)
- [ ] Pull the most recent crash logs from ASC -> Analytics -> Crashes
- [ ] Confirm Sentry / Crashlytics is wired up and reporting

---

## 2. Guideline 2.3.7 - Performance - Accurate Metadata (Screenshot Mismatch)

> Hello App Review,
>
> Thank you for the note on Guideline 2.3.7. You are correct that screenshot 3 in the en-GB localisation shows a UI element (the legacy "Mock Test" tile) that no longer matches the build 1.0.0 (X) we submitted - this was a stale asset from our pre-launch QA cycle.
>
> We have re-recorded screenshot 3 from the current build, retaining the same iPhone 6.7" device frame and copy treatment as the other nine screenshots. The replacement is now uploaded to App Store Connect under the en-GB, en-US, en-CA, and en-AU locales. No marketing copy or feature claims have changed.
>
> No code changes were required, so we have not submitted a new build. Please re-review when convenient.

---

## 3. Guideline 2.3.10 - Performance - Accurate Metadata (Description References Missing Features)

> Hello App Review,
>
> Thank you for flagging the discrepancy under Guideline 2.3.10. You correctly identified that the App Store description referenced "live tutor sessions" - this is on our roadmap but is not in build 1.0.0 (X). The reference was carried over from an earlier marketing draft in error.
>
> We have updated the App Store description in App Store Connect (en-GB, en-US, en-CA, en-AU) to remove the "live tutor sessions" sentence and the corresponding bullet in the "What's New" field. The current description now describes only features actually shipped in this build: B1-C2 lessons, IELTS practice, vocabulary tracking, and progress analytics.
>
> No build change is required. Please re-review when convenient.

---

## 4. Guideline 3.1.1 - Business - In-App Purchase (External Link to Payment)

> Hello App Review,
>
> Thank you for the feedback on Guideline 3.1.1. We want to confirm that English Hub uses Apple In-App Purchase exclusively for all digital subscription purchases on iOS - we do not link out to an external payment page from within the app.
>
> The reviewer may have seen our footer link to englishhub.uk, which is informational (about page, contact, privacy policy) and contains no purchase calls-to-action when accessed from the iOS app's webview. We have audited every screen and confirmed that the only path to purchase a subscription on iOS is the StoreKit-backed paywall (file: app/(paywall)/subscribe.tsx, lines 42-118). A screen recording (recording_iap_flow.mp4) walks through the full subscribe -> StoreKit -> entitlement flow.
>
> If a specific screen prompted the rejection, please share so we can address it directly. Please re-review when convenient.

---

## 5. Guideline 3.1.2 - Subscriptions (Auto-Renew Terms Missing or Unclear)

> Hello App Review,
>
> Thank you for the feedback on Guideline 3.1.2. We have audited the subscription paywall and confirm that all required auto-renewal disclosures are present, but we may not have presented them prominently enough.
>
> Build 1.0.0 (X+1) updates app/(paywall)/subscribe.tsx to display, immediately above the "Subscribe" CTA: subscription title and length, recurring price per period, that the subscription auto-renews unless cancelled at least 24 hours before the end of the current period, that payment is charged to the iTunes account at confirmation, and tappable links to our Terms of Use (EULA) and Privacy Policy. The Terms link points to https://englishhub.uk/terms and the Privacy Policy to https://englishhub.uk/privacy. A screen recording (recording_paywall_disclosures.mp4) is attached.
>
> Please re-review when convenient.

---

## 6. Guideline 3.1.3(a) - Reader Apps (Misclassification)

> Hello App Review,
>
> Thank you for the feedback on Guideline 3.1.3(a). We would respectfully like to clarify that English Hub is not a Reader app and we believe the standard 3.1.1 IAP rules apply.
>
> A Reader app primarily provides access to previously purchased content or content subscriptions. English Hub is a full Apple In-App Purchase app: 100% of subscription revenue on iOS flows through StoreKit, no account or content can be purchased outside the app, and there is no "sign in to access content you bought elsewhere" flow. New users can sign up and subscribe entirely within the iOS app via the StoreKit paywall (recording_full_iap_flow.mp4 attached, demonstrating the end-to-end signup-to-entitlement journey on a fresh device).
>
> We have not enabled the External Link Account entitlement and do not intend to. Please re-review under Guideline 3.1.1 when convenient.

---

## 7. Guideline 4.0 - Design - Spam (Wrapper for a Website)

> Hello App Review,
>
> Thank you for the feedback on Guideline 4.0. We would like to clarify that English Hub is a native iOS application built with React Native (Expo SDK 51), not a wrapper around our website.
>
> The app uses native StoreKit for IAP, native push notifications via APNs, native iOS Keychain for secure credential storage, on-device SQLite for offline lesson access, native iOS speech recognition for pronunciation practice, and native haptics. Our website (englishhub.uk) is a separate marketing site - the iOS app does not load it via WKWebView for primary content. The only webview in the app is for terms/privacy display, which is permitted under 4.0.
>
> A 90-second feature walkthrough (recording_native_features.mp4) shows offline lesson playback, pronunciation scoring, and push notification flows that are not available on the web product. Please re-review when convenient.

---

## 8. Guideline 4.8 - Sign in with Apple (Defending Email-Only Login)

> Hello App Review,
>
> Thank you for the feedback on Guideline 4.8. We would like to clarify that English Hub does not currently offer any third-party social login (no Google Sign-In, no Facebook Login, no Sign in with X, no LinkedIn, no email-link providers like Auth0 social connections). Our only authentication option is email and password, managed by our own Supabase Auth backend.
>
> Per Guideline 4.8, Sign in with Apple is required when an app uses a third-party or social login service. Because English Hub uses only first-party email-and-password authentication, the Sign in with Apple requirement does not apply. The auth implementation is at lib/auth/supabase.ts and the only login UI is at app/(auth)/sign-in.tsx (lines 1-180) - both are attached as references.
>
> If we add a third-party social provider in the future, we will add Sign in with Apple at the same time. Please re-review when convenient.

---

## 9. Guideline 5.1.1 - Privacy - Data Collection and Storage (Privacy Policy Mismatch)

> Hello App Review,
>
> Thank you for the feedback on Guideline 5.1.1. You are right to flag the discrepancy between our App Privacy questionnaire in App Store Connect and our published privacy policy - the questionnaire previously omitted "Identifiers - User ID" and "Usage Data - Product Interaction," which are collected by our analytics provider (PostHog, EU region).
>
> We have updated the App Privacy responses in App Store Connect to declare: Contact Info (email, name) - linked to user, used for App Functionality; Identifiers (user ID) - linked to user, used for App Functionality and Analytics; Usage Data (product interaction) - linked to user, used for Analytics. These now match section 3 of our privacy policy at https://englishhub.uk/privacy (last updated 2026-04-15). We do not collect or share data for tracking purposes.
>
> No build change is required. Please re-review when convenient.

---

## 10. Guideline 5.1.4 - Kids Category / Age-Restricted Content

> Hello App Review,
>
> Thank you for the feedback on Guideline 5.1.4. To clarify our positioning: English Hub is not submitted to the Kids Category. Our age rating in App Store Connect is 12+ to reflect that some IELTS practice passages cover mature topics (current affairs, climate policy, mild references to historical conflict) drawn from authentic Cambridge-style source material.
>
> We do not market to children under 13 (App Store description targets "adult learners and exam candidates"), we do not collect data from users under 13 (UK GDPR / COPPA compliance documented at https://englishhub.uk/privacy section 8), and our paywall and signup flow require self-declaration that the user is 13 or older before account creation (file: app/(auth)/sign-up.tsx, lines 67-94, screenshot attached).
>
> Please re-review under the 12+ rating when convenient.

---

## When NOT to respond - resubmit a new build instead

Some rejections cannot be argued away in the Resolution Center, no matter how well-written the reply. Replying with text alone wastes a round-trip and signals to the reviewer you are not taking the feedback seriously. Submit a new build when:

- **The bug is real.** If the reviewer reproduced a crash and you can reproduce it too, fix it in code, ship build (X+1), and reply with one line: "Build (X+1) ships a fix for the launch crash. Repro steps were [...]; root cause was [...]; fix verified on [devices]." Do not argue.
- **The IAP flow is genuinely broken.** If StoreKit returns an error the reviewer screenshotted, fix the StoreKit configuration in ASC and the client code, then ship a new build. Reviewers will not approve based on "it works on our side."
- **A required disclosure is missing from the UI** (auto-renew terms, EULA link, restore purchases button). These must be visible in the binary - you cannot retrofit them via metadata. Ship build (X+1) with the disclosure UI, then reply.
- **Sign in with Apple is genuinely required** (i.e. you actually do offer Google or Facebook login) - add SIWA to the auth screen, ship a new build.
- **A demo account does not work** or the credentials in the App Review Information field are stale - update the credentials in ASC, optionally ship a build that hardens the demo path, and reply with the new credentials.
- **The privacy manifest (PrivacyInfo.xcprivacy) is missing or incomplete** - this is a binary-level requirement post-Spring 2024; you cannot fix it via metadata.
- **Crash on a specific iOS version** you do not test against - add the device/version to your CI matrix, fix, ship.
- **The reviewer's screenshot shows real UI you cannot defend** - rewriting it as "this is intended" will fail. Fix the UI.

The general rule: if the reviewer's complaint is about something *in the binary or in the live product*, ship a new build. Resolution Center replies are for cases where the binary is correct but the reviewer needs more context, evidence, or an updated metadata field. A clean rule of thumb: text-only reply if the fix is in App Store Connect (screenshots, description, App Privacy questionnaire, demo account credentials, age rating); new build if the fix is in code or assets bundled with the binary.

**One last thing:** keep a log. Every rejection, every reply, every resubmission - record the date, guideline cited, response sent, build number submitted, outcome. Over time this log is the single most valuable artefact you have for shipping faster on the next app, the next major version, and the next platform (Mac, Vision Pro, watchOS) where the same patterns will repeat.
