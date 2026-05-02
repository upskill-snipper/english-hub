# Founder handoff — read this first tomorrow

You're tired. This is the only doc you need to open. Everything else hangs off `business-docs/SHIP_RUNBOOK.md`.

## 1. What we got done today

- Apple Developer Program £79 paid — membership active, Team ID `645XBAPVHK`
- App Store Connect app record created — ASC App ID `6765644554`
- 4 IAP products live in ASC, each in "Prepare for Submission"
- App Privacy questionnaire published
- Age Rating set: 13+ across 173 territories
- App pricing: Free (with IAPs)
- Paid Applications Agreement, Bank, Tax form: all Active
- ASC API Key issued: `3ZUP487476` (.p8 in `secrets/`)
- APNs Key issued: `J748RK82Z7` (.p8 in `secrets/`)
- RevenueCat project + iOS app linked — "Valid credentials" confirmed
- RC entitlement `premium` + offering `default` with all 4 packages mapped
- RC webhook configured at `https://theenglishhub.app/api/revenuecat/webhook`
- Mobile app fully wired: `react-native-purchases` SDK, paywall screen, restore flow, WebView auth bridge, RC API key in `app.json`
- Brand assets generated: 1024×1024 icon, 2048×2048 splash, 1024×1024 adaptive icon
- TypeScript clean, audit blockers fixed, race condition resolved
- 8+ runbook docs in `business-docs/` and `docs/`

## 2. What you do next, in order

Single source of truth: **`business-docs/SHIP_RUNBOOK.md`**. Follow it line by line.

The first three concrete commands:

```
1. Set Vercel env var REVENUECAT_WEBHOOK_SECRET to the contents of secrets/revenuecat-webhook-secret.txt
2. cd mobile && npm install -g eas-cli
3. cd mobile && eas login   (interactive)
```

Then keep going through `SHIP_RUNBOOK.md`.

## 3. Critical files to know about

| File                                      | What it is                                                           |
| ----------------------------------------- | -------------------------------------------------------------------- |
| `secrets/AuthKey_J748RK82Z7.p8`           | APNs key — gitignored. Backup to 1Password.                          |
| `secrets/AuthKey_3ZUP487476.p8`           | ASC API key — gitignored. Backup to 1Password.                       |
| `secrets/revenuecat-webhook-secret.txt`   | RC webhook bearer token — gitignored. Paste into Vercel env.         |
| `mobile/app.json` `extra.eas.projectId`   | Still says `REPLACE_WITH_EAS_PROJECT_ID` — `eas init` fixes this.    |
| `business-docs/SHIP_RUNBOOK.md`           | Your launch checklist, top to bottom.                                |
| `docs/APP_PRIVACY_ANSWERS.md`             | Already used — App Privacy is published. Kept for reference.         |
| `docs/APPLE_REVIEWER_ACCOUNT.md`          | How to create the demo reviewer Supabase user.                       |
| `docs/ASC_METADATA.md`                    | Description, keywords, promo text — paste into ASC version 1.0 page. |
| `business-docs/REVENUECAT_SETUP_STATE.md` | Live RC config snapshot.                                             |
| `business-docs/APPLE_SETUP_STATE.md`      | Live Apple config snapshot.                                          |

## 4. Open risks / known gaps

- **Apple receipt validation Shared Secret**: separate from the RC webhook secret. You must paste the value (rotated after the chat-paste leak earlier) into the RC iOS app config and into Vercel env `REVENUECAT_APPLE_SHARED_SECRET`. The current ASC API key path (Admin .p8) covers most flows; Shared Secret is the legacy belt-and-braces path.
- **Mobile auth ↔ WebView bridge**: `mobile/lib/webview-bridge.ts` listens for `auth` and `logout` postMessages, but the WebView pages on the web side may not yet emit them. Until they do, mobile users hit native screens with no Supabase token. Fix: add `window.postNativeMessage({type: 'auth', token, userId})` from the web sign-in success handler.
- **Demo reviewer entitlement on native screens**: per `docs/APPLE_REVIEWER_ACCOUNT.md`, the native Account tab will show "Upgrade to Premium" instead of "Premium active" because RC reads from device storefront, not our DB. Either grant a RC promotional entitlement to the reviewer's UUID or accept the cosmetic ding.
- **Stripe side**: not touched in this session. Web Stripe path is whatever state it was in before. Verify the existing pricing page still works for desktop users.

## 5. If something breaks during build

- `eas build` failure on credentials: re-run `eas credentials` and re-upload the `.p8` files.
- TypeScript compilation error: `cd mobile && npx tsc --noEmit` shows you exactly what's wrong.
- `eas submit` rejected: usually means version-1.0 metadata is incomplete in ASC — see `docs/ASC_METADATA.md`.
- App Review rejection: Apple emails the Account Holder. Common reasons + responses are in `business-docs/SHIP_RUNBOOK.md` § "Rollback / panic".

## 6. After App Review approves

- The app auto-releases to the App Store unless you set "Manual Release". Recommended: keep it manual for 1.0 so you can test the purchase flow on the live store before users land.
- Monitor the RC dashboard for the first real `INITIAL_PURCHASE` event. It should arrive seconds after the first paying customer.
- Web Stripe path remains live for desktop and laptop users; iOS users go through StoreKit only.

---

That's it. Coffee, then `SHIP_RUNBOOK.md`. You're closer than it feels.
