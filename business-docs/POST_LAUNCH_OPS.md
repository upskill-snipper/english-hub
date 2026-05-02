# Post-Launch Operations Runbook

For the founder. Read this when Apple emails "Ready for Sale". Day 1 to day 30 — what to do, in order, with the commands and URLs you need.

---

## Hour 1 (Apple just approved)

Work through these in order. The goal is to confirm the live pipe end-to-end before any organic user finds a broken flow.

1. **Confirm the listing is live.** Open https://apps.apple.com/gb/app/the-english-hub/id6765644554. You should see the app, price Free, and a "Get" button. If the page shows "App is not available in your country" wait 15 minutes — Apple's CDN propagation lags the email by up to 30 mins.

2. **Install on a real iPhone via the App Store** (not TestFlight — TestFlight uses sandbox StoreKit and proves nothing about the live receipt path). Sign in with the demo reviewer account and verify Premium is active by opening a paid lesson.

3. **Buy a real Student Monthly subscription with a different Apple ID.** Use a personal Apple ID, not the reviewer one. This is the only way to test the live StoreKit pipe. Cancel within an hour through Settings → [Your Name] → Subscriptions to avoid the charge.

4. **Verify RevenueCat shows the live customer.** Log into https://app.revenuecat.com → Customers, search for the App User ID. You should see the customer record and an `INITIAL_PURCHASE` event. If the customer does not appear within 5 minutes, the App Store Server Notifications V2 URL in ASC may be wrong.

5. **Verify the production webhook hit Vercel.** Vercel dashboard → Logs, filter by path `/api/revenuecat/webhook`. You should see a `200` response within 60 seconds. If you see `401`, the bearer token mismatch is the cause — check `REVENUECAT_WEBHOOK_BEARER` in Vercel env vars matches RevenueCat Integrations → Webhooks.

---

## Day 1

- **Monitor RevenueCat for first organic INITIAL_PURCHASE.** The first organic sale (not yours) is your real launch signal.
- **Tweet / LinkedIn the launch.** Use the hero copy: "Built by a teacher. Marked by AI." Link directly to the App Store page. Pin the post.
- **Email the Founding Schools list.** Short note about iOS availability with the App Store link. Under 150 words.
- **Watch the crash dashboard** (Sentry if wired, otherwise Expo). Anything in the first 24 hours is statistically signal — three crashes from three users on day 1 is a real bug.
- **Reply to the first 5 user reviews personally.** ASC → My Apps → Ratings and Reviews → Respond. Friendly, signed by name.

---

## Week 1 monitoring metrics

Pull these every morning for 7 days:

- **Apple App Analytics**: impressions, product page views, taps, downloads, conversion rate.
- **RevenueCat**: free → paid conversion, trial-to-paid conversion, day-7 churn.
- **Web vs iOS purchase split**: cross-reference Stripe MRR (web) vs RevenueCat MRR (iOS).
- **Top 5 crashes by frequency.** Fix anything affecting more than 0.5% of sessions immediately.
- **Top 5 Apple Search Ads keywords** (if running). Pause anything over £5 cost-per-tap with zero conversions after 200 taps.

---

## Common day-1/2 issues + fixes

- **"Receipt validation failed" in RevenueCat**: `REVENUECAT_APPLE_SHARED_SECRET` env var doesn't match ASC. Go to ASC → App Information → App-Specific Shared Secret, copy, paste into RevenueCat → Project Settings → Apple App Store. Rotate if mismatch is unexplained.

- **"Cannot connect to App Store" in StoreKit**: usually Apple's StoreKit 2 cache lag during the first hours after release. Wait 4 hours and retry.

- **WebView shows the Stripe pricing page even though the user is on iOS**: the web app needs to detect the `__ENGLISH_HUB_NATIVE__` flag injected by the React Native WebView and either hide the Stripe pricing or replace the CTA with `postNativeMessage({type:'purchase'})` to open the native paywall. Single biggest Apple-rejection risk after launch — track in `web-side TODO.md`.

- **Apple review-rejection patterns and stock responses** (for future update reviews):
  - **Guideline 3.1.1 — "Found purchase outside IAP"**: respond that all subscriptions ARE delivered through StoreKit IAP, the Stripe path is web-only, and the iOS app does not link out.
  - **Guideline 3.1.2 — "Demo account doesn't show paid features"**: grant a RevenueCat promotional entitlement to the reviewer account. RC → Customers → reviewer ID → Grant Promotional Entitlement → Premium → 1 month.
  - **Guideline 4.0 — "Privacy policy doesn't match data collection"**: cross-check App Privacy answers in ASC against the live policy at https://theenglishhub.app/privacy.

---

## Pricing experiments (week 2-4)

Wait until you have at least 100 paid subscribers before running tests — sample sizes under that are noise.

- **A/B test trial length: 7 days vs 14 days.** RevenueCat supports per-package introductory offers via dashboard → Products → Introductory Offers. Run 4 weeks minimum.
- **A/B test monthly price: £3.99 vs £4.99.** Apple lets you change price tiers per region; RevenueCat handles the migration cleanly (existing subscribers keep their old price). Run sequentially, not simultaneously.
- **Defer the Standard rollover** (Founding Price → Standard Price) until at least 1,000 active paid subscribers. Trigger by subscriber count, not by date.

---

## Refund / customer support flow

- **Subscription refunds**: handled by Apple. Apple sends `REFUND` to RevenueCat → RC fires the webhook → reconciler stamps `refundedAt` and revokes access. No manual action.
- **Cancellation**: handled by Apple's iOS Settings. We do NOT surface a cancel button in-app — that violates Guideline 3.1.2.
- **Support inbox**: support@theenglishhub.app (already in the privacy policy).
- **"I bought on iOS but the website still shows me as free"**: ask the user to tap "Restore purchases" inside the iOS app first. If still failing, look up the customer in RevenueCat by email or App User ID and check entitlement status.

---

## Compliance checklist (monthly)

- **ICO ZC016690** — re-verify registration before annual renewal.
- **Companies House filing for Upskill Energy Limited 16511479** — confirmation statement and accounts on schedule.
- **Apple Developer Program £79 renewal** — auto-renew is on; check card on file annually.
- **Trustpilot review responses** within 7 days.

---

## Rotation reminders

- **Apple Shared Secret**: rotate every 12 months unless leaked. ASC → App Information → App-Specific Shared Secret → Manage. Update RevenueCat immediately after.
- **ASC API key**: doesn't expire; rotate only if compromised.
- **APNs key**: doesn't expire; rotate only if compromised. Replace at Developer → Keys → +.
- **RevenueCat webhook bearer token**: every 12 months. Generate with `openssl rand -base64 48`, then update Vercel env var `REVENUECAT_WEBHOOK_BEARER` and the RevenueCat dashboard webhook config simultaneously — any gap drops events.

---

## When to scale

- **Server side**: until ~5,000 paid subscribers, current Vercel + Supabase + RevenueCat tier is plenty. Bump Supabase when DB CPU sustained > 60% for more than a week.
- **RevenueCat**: free tier covers up to $10K MRR; after that they take 1%. At £4.99/month average, you hit $10K MRR around 2,500 paid users — budget for it, don't panic.

---

End of runbook. If something is on fire and not in this document, the answer is almost always: check Vercel logs, check RevenueCat events, check ASC notifications.
