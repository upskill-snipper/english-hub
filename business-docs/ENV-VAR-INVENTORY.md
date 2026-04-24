# Environment variable inventory — The English Hub

**Version** 1.0 · **Last updated** 2026-04-23 · **Owner** Release Engineer · **Audience** Founder (Calum) populating Vercel + EAS before submission.

The single canonical reference for every environment variable consumed by the web app (Vercel) and the mobile app (EAS). Supersedes any scattered notes in `CHROME-PROMPTS-PACK.md §5–§6`, the `.env.example` files, and the `SUBMISSION_DAY_RUNBOOK.md §1.5` checklist for env population. British English throughout.

---

## 1. How to use this doc

Read §3 (tier system) first. Skim §4 (web) + §5 (mobile) to understand shape. Then jump to §7 for values you can paste today and §8 for what's still blocked. §13 has ready-to-run `eas secret:create` + `vercel env add` commands — copy, paste, done. Work §7 first, §8 second, §12 before pressing Submit.

---

## 2. Scope

- `english-hub` (Next.js 15 web app hosted on Vercel — `theenglishhub.app`).
- `english-hub-mobile` (Expo React Native app built and submitted via EAS — bundle `com.upskillenergy.theenglishhub`).
- Does **not** cover local-only values (`.env.local` dev overrides) — those are derived from `.env.example` and not tracked here.
- Does **not** cover Stripe price IDs beyond their presence — see `STRIPE-PRICE-UPDATE.md` for the canonical price creation workflow.

---

## 3. Tier system

Every variable below is tagged with exactly one tier. Populate in this order.

| Tier | Symbol | Meaning | Who sets |
|---|---|---|---|
| Required for prod boot | 🔴 | App fails to start, renders 500s on first request, or the build pipeline rejects the commit. Non-negotiable. | Founder, day 1 |
| Required for specific feature | 🟠 | App starts and most surfaces work, but one named feature (payments, emails, analytics, rate limiting) is broken until populated. | Founder, before that feature goes live |
| Optional | 🟢 | App works without it. A warning is logged at startup; degraded UX is acceptable (e.g. TrustBox falls back to a text link). | Nice-to-have, populate when you can |
| Apple-blocked until approval | 🔒 | Cannot be populated until Apple Developer Programme membership is live and App Store Connect artefacts exist. Leave as empty string in EAS until then. | Founder, after Apple approval |

---

## 4. Web (Vercel) variables

Scope column key: **P** = Production, **Pv** = Preview, **D** = Development. "All" = tick all three in the Vercel dashboard.

| Name | Tier | Scope | Secret | Current value | Source | Purpose | Impact if missing |
|---|---|---|---|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | 🔴 | All | N | `<SET_FROM_SUPABASE_DASHBOARD>` | Supabase → Settings → API → Project URL | Client + server entry to Supabase | Auth + data access dead; app renders blank |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 🔴 | All | N | `<SET_FROM_SUPABASE_DASHBOARD>` | Supabase → Settings → API → anon key | Browser-side Supabase queries gated by RLS | Same — no reads possible |
| `SUPABASE_SERVICE_ROLE_KEY` | 🔴 | All | Y | `<SET_FROM_SUPABASE_DASHBOARD>` | Supabase → Settings → API → service\_role | Server-only privileged access (bypasses RLS) | Cron jobs, admin routes, webhooks fail |
| `DATABASE_URL` | 🔴 | All | Y | `<SET_FROM_SUPABASE_DASHBOARD>` | Supabase → Settings → Database → Connection string (pooled, port 6543) | Prisma ORM connection | Every Prisma call throws; migrations fail |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | 🟠 | All | N | `<SET_FROM_STRIPE>` (`pk_live_…`) | Stripe → Developers → API keys | Checkout session init on client | Web checkout button inert |
| `STRIPE_SECRET_KEY` | 🟠 | All | Y | `<SET_FROM_STRIPE>` (`sk_live_…`) | Stripe → Developers → API keys | Server-side Stripe SDK | `/api/checkout/*` returns 500 |
| `STRIPE_WEBHOOK_SECRET` | 🟠 | P | Y | `<SET_FROM_STRIPE>` (`whsec_…`) | Stripe → Developers → Webhooks → endpoint → Signing secret | HMAC verification on `/api/stripe/webhook` | Subscriptions never activate post-payment |
| `STRIPE_PRICE_PRO_ANNUAL` | 🟠 | P | N | `<SET_FROM_STRIPE>` (`price_…`) | Stripe → Products (Student Annual £20) | Student annual checkout line item | Student annual plan missing from pricing |
| `STRIPE_PRICE_TEACHER_ANNUAL` | 🟠 | P | N | `<SET_FROM_STRIPE>` (`price_…`) | Stripe → Products (Teacher Annual £67.99) | Teacher annual line item | Teacher plan missing |
| `STRIPE_PRICE_PRO_MONTHLY` | 🟢 | P | N | *(retired — legacy monthly removed 2026-04-19, leave unset)* | n/a | Legacy monthly pricing; deprecated | No impact; UI no longer renders monthly |
| `STRIPE_PRICE_KS3_*` / `STRIPE_PRICE_GCSE_*` / `STRIPE_PRICE_EDEXCEL_*` / `STRIPE_PRICE_BUNDLE` | 🟢 | P | N | `<SET_FROM_STRIPE>` each | Stripe → Products | One-time-purchase course SKUs | Course hides from pricing page but app boots fine |
| `ANTHROPIC_API_KEY` | 🔴 | All | Y | `<SET_FROM_CONSOLE_ANTHROPIC>` (`sk-ant-…`) | console.anthropic.com → API Keys | Claude calls for marking + AI features | Essay marking and AI features throw; this is the core value prop |
| `RESEND_API_KEY` | 🟠 | All | Y | `<SET_FROM_RESEND>` (`re_…`) | resend.com → API Keys | All transactional email | Welcome, password-reset, weekly reports, Trustpilot invites all fail silently |
| `NEXT_PUBLIC_APP_URL` | 🟠 | All | N | `https://theenglishhub.app` | Known | Canonical app URL in emails, OG tags | Emails link to `localhost`; OG previews break |
| `NEXT_PUBLIC_SITE_URL` | 🟠 | All | N | `https://theenglishhub.app` | Known | Used by email templates | Same as above |
| `CSRF_SECRET` | 🔴 | All | Y | `<GENERATE: openssl rand -hex 32>` | Generate locally | HMAC secret for CSRF token issuance | All POST routes reject requests; no logins, no purchases |
| `IP_HASH_SALT` | 🟠 | All | Y | `<GENERATE: openssl rand -hex 16>` | Generate locally | Salt for privacy-compliant IP hashing | GDPR-compliant IP recording breaks; rate-limit dedupe degrades |
| `AFFILIATE_IP_HASH_SECRET` | 🟢 | All | Y | `<GENERATE: openssl rand -hex 32>` | Generate locally | Affiliate click dedupe HMAC | Click fraud dedupe weakened but not broken |
| `CONSENT_IP_HASH_SECRET` | 🟢 | All | Y | `<GENERATE: openssl rand -hex 32>` | Generate locally | Cookie-consent IP hash | Consent ledger less robust |
| `CRON_SECRET` | 🟠 | P | Y | *(auto-set by Vercel Pro)* — or `<GENERATE: openssl rand -hex 32>` | Vercel auto / generate for local | Bearer-token auth on `/api/cron/*` | Weekly reports, dormancy warnings, Trustpilot cron never run |
| `UPSTASH_REDIS_REST_URL` | 🟠 | All | N | `<SET_FROM_UPSTASH>` | console.upstash.com → database → REST API | Rate limiting backend | API rate limiting disabled; abuse-vulnerable |
| `UPSTASH_REDIS_REST_TOKEN` | 🟠 | All | Y | `<SET_FROM_UPSTASH>` | Same | Upstash bearer token | Same |
| `ADMIN_EMAILS` | 🟢 | All | N | `cj@upskillenergy.com` | Known | Comma-separated admin access list | Admin dashboard blocked to founder |
| `SITE_ADMIN_EMAILS` | 🟢 | All | N | `cj@upskillenergy.com` | Known | Super-admin list | Super-admin surfaces blocked |
| `REWARDFUL_API_SECRET` | 🟢 | P | Y | `<SET_FROM_REWARDFUL>` if live | Rewardful dashboard | Server-side affiliate sync | Affiliate tracking inert — acceptable until affiliate programme launches |
| `NEXT_PUBLIC_REWARDFUL_KEY` | 🟢 | All | N | `<SET_FROM_REWARDFUL>` if live | Rewardful dashboard | Client-side affiliate snippet | Same |
| `AFFILIATE_ADMIN_EMAIL` | 🟢 | All | N | `affiliates@theenglishhub.app` | Known | Affiliate admin notification inbox | Warnings logged, otherwise harmless |
| `NEXT_PUBLIC_SENTRY_DSN` | 🟠 | All | N | `<SET_FROM_SENTRY>` | sentry.io → Settings → Client Keys | Browser error reporting | Client errors invisible in prod |
| `SENTRY_DSN` | 🟠 | All | N | `<SET_FROM_SENTRY>` | sentry.io → Settings → Client Keys | Server error reporting | Server errors invisible |
| `SENTRY_AUTH_TOKEN` | 🟠 | All | Y | `<SET_FROM_SENTRY>` (`sntrys_…`) | sentry.io → Settings → Auth Tokens | Source-map upload during Vercel build | Stack traces in prod show minified code |
| `NEXT_PUBLIC_GA4_ID` | 🟢 | P | N | `<SET_FROM_GA4>` (e.g. `G-XXXXXXX`) | GA4 admin → Data Streams | Google Analytics 4 injection | GA4 snippet skipped |
| `REVENUECAT_WEBHOOK_SECRET` | 🟠 | P | Y | `<GENERATE: openssl rand -hex 32>` — **must match** value pasted into RevenueCat webhook config | Generate once, paste to both sides | HMAC verify RevenueCat → web webhook | All mobile purchases silently discarded server-side |
| `REVENUECAT_SECRET_API_KEY` | 🟠 | All | Y | `<SET_FROM_REVENUECAT>` (`sk_…`) | RevenueCat → Project settings → API Keys → Secret key | Server-to-RevenueCat reads (manual grants, verification) | Admin reconciliation endpoints fail |
| `TRUSTPILOT_ENABLED` | 🟢 | P | N | `true` | Known | Cron-side master switch for invitation sending | Invitations simply not sent |
| `TRUSTPILOT_INVITE_EMAIL` | 🟢 | P | N | `theenglishhub.app+45777e1d0c@invite.trustpilot.com` | Trustpilot Business → Invitations | BCC address that triggers invites | Review invitations skipped |
| `NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY` | 🟢 | All | N | `v5nUhdVBgegtcCLG` | Trustpilot InviteJS docs | Public InviteJS integration key | Invite UI falls back |
| `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` | 🟢 | All | N | `69e9a869c2bb1d03a6752578` | Trustpilot → Business Unit | TrustBox widget BU identifier | Widget degrades to a plain text link (acceptable) |
| `NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID` | 🟢 | P | N | `<SET_FROM_TRUSTPILOT_DOMAIN_VERIFICATION>` | Trustpilot Business → Settings → Domain verification | Domain-ownership meta tag | Domain unverified; no effect on widget |

### 4.1 Counts (web)

34 variables tracked. 🔴 × 6 · 🟠 × 16 · 🟢 × 12 · 🔒 × 0. The web side has no Apple-blocked vars; everything is either ready or pending a dashboard click.

---

## 5. Mobile (EAS) variables

Platform column: **iOS**, **Android**, or **both**. Every `EXPO_PUBLIC_*` value is baked into the client bundle and is **not** a secret (do not put server keys here). EAS project secrets are scoped per profile (`development`, `preview`, `production`); populate the `production` profile for submission.

| Name | Tier | Platform | Secret | Current value | Source | Purpose | Impact if missing |
|---|---|---|---|---|---|---|---|
| `EXPO_PUBLIC_SUPABASE_URL` | 🔴 | both | N | `<SET_FROM_SUPABASE_DASHBOARD>` — must match web `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API | Mobile Supabase client endpoint | App crashes on auth init |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | 🔴 | both | N | `<SET_FROM_SUPABASE_DASHBOARD>` — must match web | Supabase → Settings → API | Mobile anon key | Same |
| `EXPO_PUBLIC_API_BASE_URL` | 🔴 | both | N | `https://theenglishhub.app/api` | Known | REST calls to web backend | All data fetches fail |
| `EXPO_PUBLIC_APP_URL` | 🟠 | both | N | `https://app.theenglishhub.app` | Known | Deep-link fallback URL | Universal Links degrade to browser home |
| `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY` | 🔴 | Android | N | `<SET_FROM_REVENUECAT>` (`goog_…`) | RevenueCat → Project settings → API Keys → Google | Android paywall SDK init | Paywall never renders; Play build rejected on review |
| `EXPO_PUBLIC_REVENUECAT_IOS_API_KEY` | 🔒 | iOS | N | `<SET_AFTER_APPLE_APPROVAL>` (`appl_…`) | Waits for Apple approval → RevenueCat → API Keys → Apple (added after iOS app registered in RevenueCat) | iOS paywall SDK init | iOS paywall dead; App Review rejection |
| `EXPO_PUBLIC_POSTHOG_API_KEY` | 🟠 | both | N | `<SET_FROM_POSTHOG>` (`phc_…`) | eu.posthog.com → Project settings | Consented analytics | No product analytics; launch monitoring degraded |
| `EXPO_PUBLIC_POSTHOG_HOST` | 🟠 | both | N | `https://eu.i.posthog.com` | Known (EU residency) | PostHog ingest host | Same |
| `EXPO_PUBLIC_SENTRY_DSN` | 🟠 | both | N | `<SET_FROM_SENTRY>` | sentry.io → Settings → Client Keys (mobile project) | Mobile crash reporting | Crashes invisible; launch-monitoring plan breaks |
| `EXPO_PUBLIC_ENV` | 🔴 | both | N | `prod` (production profile) · `staging` · `dev` | Known | Build-target gating | Feature flags + endpoints misrouted |
| `EXPO_PUBLIC_TRUSTPILOT_ENABLED` | 🟢 | both | N | `true` | Known | Client-side Trustpilot surface toggle | Review CTAs hidden |
| `EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` | 🟢 | both | N | `69e9a869c2bb1d03a6752578` | Known | TrustBox widget identity | Widget fallback |
| `SENTRY_AUTH_TOKEN` | 🟠 | both | Y | `<SET_FROM_SENTRY>` (`sntrys_…`) | sentry.io → Settings → Auth Tokens | Upload dSYMs (iOS) and mapping files (Android) during EAS build | Stack traces in Sentry show native-addresses only |
| `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` | 🔴 | Android | Y | `<SET_FROM_GOOGLE_PLAY_CONSOLE>` | Play Console → Users and permissions → Service accounts → Google Cloud IAM | EAS Submit to Play Console | `eas submit --platform android` fails |
| `APPLE_APP_STORE_CONNECT_API_KEY` | 🔒 | iOS | Y | `<SET_AFTER_APPLE_APPROVAL>` (the `.p8` contents) | Waits for Apple approval → ASC → Users and Access → Integrations → In-App Purchase | EAS Submit to App Store Connect | `eas submit --platform ios` fails |
| `APPLE_APP_STORE_CONNECT_KEY_ID` | 🔒 | iOS | N | `<SET_AFTER_APPLE_APPROVAL>` | Waits for Apple approval | IAP key identifier | Same |
| `APPLE_APP_STORE_CONNECT_ISSUER_ID` | 🔒 | iOS | N | `<SET_AFTER_APPLE_APPROVAL>` | Waits for Apple approval | IAP key issuer | Same |
| `APPLE_APNS_KEY` | 🔒 | iOS | Y | `<SET_AFTER_APPLE_APPROVAL>` (the `.p8` contents) | Waits for Apple approval → Certificates, Identifiers & Profiles → Keys | Push notification signing; RevenueCat push receipts | APNs pushes fail; RevenueCat test push never lands on device |
| `APPLE_APNS_KEY_ID` | 🔒 | iOS | N | `<SET_AFTER_APPLE_APPROVAL>` | Waits for Apple approval | APNs key identifier | Same |

### 5.1 Counts (mobile)

19 variables tracked. 🔴 × 5 · 🟠 × 5 · 🟢 × 2 · 🔒 × 7.

---

## 6. Cross-environment variables

Values that must be byte-identical between Vercel and EAS. Mismatches cause subtle failures that survive smoke-testing (auth works, first request works, but a background flow silently drops). Check these with `diff <(vercel env pull) <(eas env:list --format dotenv --profile production)` before submission.

| Web name | Mobile name | Must match because | Verification |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `EXPO_PUBLIC_SUPABASE_URL` | Same Supabase project — session tokens issued web-side must validate mobile-side | Both env files show identical URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Same anon key underpins RLS policies | Identical string |
| `NEXT_PUBLIC_APP_URL` | `EXPO_PUBLIC_APP_URL` | Universal-link / App-link continuation across platforms | `https://app.theenglishhub.app` on mobile, `https://theenglishhub.app` on web (expected divergence — mobile uses the `app.` subdomain) |
| `REVENUECAT_WEBHOOK_SECRET` (Vercel) | same value pasted into RevenueCat dashboard → Webhook → Bearer token | If these drift, every mobile purchase silently 401s and the subscription row never appears in Postgres | Send a test event from RevenueCat dashboard, confirm 200 |
| Bundle ID (`com.upskillenergy.theenglishhub`) | Appears in EAS `app.json`, Play Console package name, App Store Connect bundle ID, RevenueCat Android + iOS app config | Cross-store + cross-processor identity | Manual visual check at submission |

---

## 7. Populated values — ready to paste today

These are safe to commit and can go into Vercel immediately. They are either public-safe IDs, known constants, or values already in the `.env.example`.

| Variable | Value | Goes into |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | `https://theenglishhub.app` | Vercel (all) |
| `NEXT_PUBLIC_SITE_URL` | `https://theenglishhub.app` | Vercel (all) |
| `NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY` | `v5nUhdVBgegtcCLG` | Vercel (all) |
| `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` | `69e9a869c2bb1d03a6752578` | Vercel (all) + EAS |
| `TRUSTPILOT_INVITE_EMAIL` | `theenglishhub.app+45777e1d0c@invite.trustpilot.com` | Vercel (P) |
| `TRUSTPILOT_ENABLED` | `true` | Vercel (P) |
| `EXPO_PUBLIC_TRUSTPILOT_ENABLED` | `true` | EAS |
| `EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` | `69e9a869c2bb1d03a6752578` | EAS |
| `EXPO_PUBLIC_API_BASE_URL` | `https://theenglishhub.app/api` | EAS |
| `EXPO_PUBLIC_APP_URL` | `https://app.theenglishhub.app` | EAS |
| `EXPO_PUBLIC_POSTHOG_HOST` | `https://eu.i.posthog.com` | EAS |
| `EXPO_PUBLIC_ENV` | `prod` (production profile only) | EAS |
| `ADMIN_EMAILS` | `cj@upskillenergy.com` | Vercel (all) |
| `SITE_ADMIN_EMAILS` | `cj@upskillenergy.com` | Vercel (all) |
| `AFFILIATE_ADMIN_EMAIL` | `affiliates@theenglishhub.app` | Vercel (all) |
| Bundle identifier (reference, not an env var) | `com.upskillenergy.theenglishhub` | Play Console, App Store Connect, RevenueCat |
| RevenueCat webhook URL (reference, not an env var) | `https://theenglishhub.app/api/revenuecat/webhook` | RevenueCat dashboard webhook config |

**Generate-yourself secrets** (also ready today — generate once, paste into Vercel, record in 1Password):

- `CSRF_SECRET` — `openssl rand -hex 32`
- `IP_HASH_SALT` — `openssl rand -hex 16`
- `AFFILIATE_IP_HASH_SECRET` — `openssl rand -hex 32`
- `CONSENT_IP_HASH_SECRET` — `openssl rand -hex 32`
- `CRON_SECRET` — Vercel auto-sets on Pro; otherwise `openssl rand -hex 32`
- `REVENUECAT_WEBHOOK_SECRET` — `openssl rand -hex 32` (same value pasted to both Vercel and RevenueCat webhook config)

**Ready-to-populate count: 23** (17 known values + 6 generate-yourself secrets).

---

## 8. Still pending values — grouped by unblocker

### 8.1 Supabase migration + seed unblocks

- `NEXT_PUBLIC_SUPABASE_URL` / `EXPO_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DATABASE_URL`

Blocked on the consolidated SQL run per `CHROME-PROMPTS-PACK.md §1`.

### 8.2 Stripe price objects

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_PRO_ANNUAL`, `STRIPE_PRICE_TEACHER_ANNUAL`
- (Optional course-specific `STRIPE_PRICE_*` values)

Blocked on `STRIPE-PRICE-UPDATE.md` workflow being executed in the live Stripe account.

### 8.3 Upstash / Resend / Anthropic account setup

- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`
- `RESEND_API_KEY`
- `ANTHROPIC_API_KEY`

Create the accounts, click "API key", paste. 15 minutes total.

### 8.4 RevenueCat dashboard setup — Android-safe right now

- `REVENUECAT_SECRET_API_KEY` (`sk_…` from Project settings → API Keys)
- `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY` (`goog_…`)

Unblocked by the `CHROME-PROMPTS-PACK.md §4` walkthrough. Do this today — does not require Apple.

### 8.5 Google Play service account JSON

- `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON`

Unblocked by `CHROME-PROMPTS-PACK.md §2` Task 6.

### 8.6 Sentry account setup

- `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_DSN` (web project)
- `EXPO_PUBLIC_SENTRY_DSN` (mobile project — separate Sentry project)
- `SENTRY_AUTH_TOKEN` (internal integration token, reusable across web + mobile)

Create two Sentry projects (`english-hub-web`, `english-hub-mobile`), copy DSNs, create one internal integration with `project:write` + `release:admin` scope for the auth token.

### 8.7 PostHog account setup

- `EXPO_PUBLIC_POSTHOG_API_KEY`

Create an EU PostHog project; copy public project key.

### 8.8 Trustpilot domain verification

- `NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID`

Unblocked by `CHROME-PROMPTS-PACK.md §7`.

### 8.9 Apple approval (iOS-only keys)

- `EXPO_PUBLIC_REVENUECAT_IOS_API_KEY`
- `APPLE_APP_STORE_CONNECT_API_KEY`, `_KEY_ID`, `_ISSUER_ID`
- `APPLE_APNS_KEY`, `_KEY_ID`

Blocked on Apple Developer Programme enrolment. Nothing you can do pre-approval.

**Pending count: 20** (17 unblocked-on-account-setup + 3 Apple-blocked — though several of the Apple-blocked rows expand into 6 concrete variables).

---

## 9. Secret rotation policy

| Category | Cadence | Trigger for immediate rotation |
|---|---|---|
| Stripe (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`) | Quarterly | Any leak, any employee offboarding, any suspected exposure in logs |
| RevenueCat (`REVENUECAT_WEBHOOK_SECRET`, `REVENUECAT_SECRET_API_KEY`) | Quarterly | Same |
| Sentry (`SENTRY_AUTH_TOKEN`) | Quarterly | Token visible in a build log, any CI compromise |
| Supabase (`SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` password) | Every 6 months | Suspected SQL leak, founder device loss |
| CSRF / IP-hash secrets | Annually | Any server compromise |
| Anthropic API key | Quarterly | Key committed to git, unusual billing spike |
| Apple `.p8` keys | Only on compromise (Apple caps you at 2 active APNs keys) | Device loss, 1Password compromise |

Rotation workflow: generate new value → paste to Vercel (Production only first, validate with a preview deploy) → redeploy → revoke old in the provider's dashboard. Never rotate Stripe webhooks during a live traffic window — pick a Tue–Thu morning.

---

## 10. Where to store values

- **1Password vault `mobile-release`** — single source of truth. Every row in §4 and §5 has a matching 1Password item named exactly after the variable name (e.g. `REVENUECAT_WEBHOOK_SECRET`).
- **`.env.local` convention** — for local development on the founder's Windows machine only. Never committed. `.gitignore` already excludes it. Generate from `.env.example` with dev-tier values (test Stripe keys, dev Supabase project, etc.).
- **Vercel** — Production for everything; Preview ticked only for the `NEXT_PUBLIC_*` values that make preview deploys useful (Supabase URL, TrustBox IDs, GA4 ID). Development scope stays empty in Vercel — that's `.env.local` territory.
- **EAS** — `eas secret:create --scope project` for values shared across profiles; `--scope project --profile production` for prod-only. Use `--visibility secret` on anything non-public (service-account JSON, auth tokens, `.p8` contents); `plaintext` is fine for `EXPO_PUBLIC_*`.
- **Never** — plain-text in Slack, in screenshots, in git commits, in the CI logs pane. Strip any accidental leak within the hour and rotate.

---

## 11. Gotchas + common mistakes

1. **Missing `SENTRY_AUTH_TOKEN`** → source maps never upload. Prod errors show minified stack frames; you cannot debug Sentry issues on launch day. Affects both web build and EAS build.
2. **`EXPO_PUBLIC_REVENUECAT_MOCK=true` left in a production EAS build** → paywall renders the mock packages (`$0.00` debug SKUs). If shipped, App Review will reject under 3.1.1 (non-compliant IAP). Must be `false` or absent. Grep `app.config.ts` and `eas env:list --profile production` before every build.
3. **Trustpilot BU ID empty** → TrustBox widget falls back to a plain text link to our Trustpilot page. Acceptable degradation — homepage still ships, conversion unchanged short-term. Do not treat as a blocker.
4. **Webhook secret mismatch** (Vercel `REVENUECAT_WEBHOOK_SECRET` vs. the Bearer Token pasted in the RevenueCat dashboard) → every purchase POST 401s. Subscription row never materialises in Postgres. Users are charged successfully on Apple/Google but the app never grants entitlement locally because the sync never reaches our DB. **This is the most expensive silent failure in the entire system.** Test with RevenueCat's "Send test event" button after every rotation.
5. **Supabase URL mismatch across platforms** → auth session tokens issued by the web app won't validate in mobile and vice versa. The failure looks like "I logged in, went to mobile, still logged out."
6. **`NEXT_PUBLIC_SITE_URL` set to `http://localhost:3000`** in Production → every password-reset email links to localhost. Seen once in a staging-to-prod promotion; always spot-check after `vercel env pull`.
7. **`CRON_SECRET` missing** → Vercel cron requests get 401'd; `/api/cron/weekly-reports`, `/api/cron/dormancy`, `/api/cron/trustpilot-invites` never run. No error visible to users; just an empty cron dashboard. On Vercel Pro this is auto-set — on Hobby it is not.
8. **Stripe test keys leaked into Production scope** → live checkout flows succeed against test Stripe; user cards aren't actually charged but our DB thinks they are. Disaster scenario. Always check `pk_live_` / `sk_live_` prefix in Production.
9. **Anthropic API key rate limits** on new accounts cap essay marking throughput. Budget 20k output tokens/min; request an increase before launch day.
10. **EAS secret visibility flag** — default is `plaintext`. For `.p8` contents and service-account JSON, pass `--visibility secret` so the value is write-only and doesn't leak into build logs.

---

## 12. Submission pre-flight checklist

Ten boxes. Every one ticked before Release Manager is authorised to press Submit per `SUBMISSION_DAY_RUNBOOK.md §1`.

- [ ] Every 🔴 tier variable set in Production on Vercel (6 web + 5 mobile = 11 rows).
- [ ] No value anywhere in Vercel or `eas env:list --profile production` still reads `<SET_FROM_…>`, `<GENERATE…>`, or `<placeholder>`.
- [ ] Sentry DSN reachable from a prod build — synthetic `throw` at startup produces a Sentry event within 60s, on both web and mobile.
- [ ] `REVENUECAT_WEBHOOK_SECRET` byte-identical in Vercel and the RevenueCat dashboard (test via "Send test event" → expect 200 OK).
- [ ] Supabase URL + anon key byte-identical across Vercel (all scopes) and EAS (production profile).
- [ ] `EXPO_PUBLIC_REVENUECAT_MOCK` is unset or `false` in the production EAS build.
- [ ] Stripe keys in Production begin `pk_live_` / `sk_live_` — not `pk_test_` / `sk_test_`.
- [ ] `SENTRY_AUTH_TOKEN` is present in both the Vercel build environment and the EAS production profile — run one build of each and confirm source maps / dSYMs uploaded to Sentry.
- [ ] Google Play service account JSON uploaded to EAS as `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` with `--visibility secret`.
- [ ] Every Apple 🔒 variable populated in EAS production profile (post-approval only).

---

## 13. Founder copy-paste block

### 13.1 EAS secrets — run from `D:\Coding\english-hub-mobile\`

Paste verbatim. Replace angle-bracketed placeholders as each value becomes available. Safe to re-run — `eas secret:create` will error on duplicate and you can switch to `eas secret:push --force` or delete-then-create if you need to overwrite.

```bash
# --- Known values (run these today) -----------------------------------------
eas secret:create --scope project --name EXPO_PUBLIC_API_BASE_URL --value "https://theenglishhub.app/api" --type string
eas secret:create --scope project --name EXPO_PUBLIC_APP_URL --value "https://app.theenglishhub.app" --type string
eas secret:create --scope project --name EXPO_PUBLIC_POSTHOG_HOST --value "https://eu.i.posthog.com" --type string
eas secret:create --scope project --name EXPO_PUBLIC_ENV --value "prod" --type string
eas secret:create --scope project --name EXPO_PUBLIC_TRUSTPILOT_ENABLED --value "true" --type string
eas secret:create --scope project --name EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID --value "69e9a869c2bb1d03a6752578" --type string

# --- Blocked on Supabase migration (run once migrated) ----------------------
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_URL --value "<SUPABASE_PROJECT_URL>" --type string
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_ANON_KEY --value "<SUPABASE_ANON_KEY>" --type string

# --- Blocked on RevenueCat Android setup ------------------------------------
eas secret:create --scope project --name EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY --value "<goog_...>" --type string

# --- Blocked on PostHog + Sentry accounts -----------------------------------
eas secret:create --scope project --name EXPO_PUBLIC_POSTHOG_API_KEY --value "<phc_...>" --type string
eas secret:create --scope project --name EXPO_PUBLIC_SENTRY_DSN --value "<https://...ingest.sentry.io/...>" --type string
eas secret:create --scope project --name SENTRY_AUTH_TOKEN --value "<sntrys_...>" --type string --visibility secret

# --- Blocked on Google Play service account ---------------------------------
eas secret:create --scope project --name GOOGLE_PLAY_SERVICE_ACCOUNT_JSON --type file --value ./google-play-service-account.json --visibility secret
# (delete the local JSON after this command)

# --- Apple-blocked (run after Apple approval) -------------------------------
eas secret:create --scope project --name EXPO_PUBLIC_REVENUECAT_IOS_API_KEY --value "<appl_...>" --type string
eas secret:create --scope project --name APPLE_APP_STORE_CONNECT_API_KEY --type file --value ./AuthKey_<KEYID>.p8 --visibility secret
eas secret:create --scope project --name APPLE_APP_STORE_CONNECT_KEY_ID --value "<KEYID>" --type string
eas secret:create --scope project --name APPLE_APP_STORE_CONNECT_ISSUER_ID --value "<ISSUER_UUID>" --type string
eas secret:create --scope project --name APPLE_APNS_KEY --type file --value ./AuthKey_APNS_<KEYID>.p8 --visibility secret
eas secret:create --scope project --name APPLE_APNS_KEY_ID --value "<APNS_KEYID>" --type string

# Verify
eas secret:list
```

### 13.2 Vercel CLI — run from `D:\Coding\english-hub\`

Requires `vercel login` and `vercel link` on first run.

```bash
# --- Known values (run these today) -----------------------------------------
printf "https://theenglishhub.app" | vercel env add NEXT_PUBLIC_APP_URL production
printf "https://theenglishhub.app" | vercel env add NEXT_PUBLIC_SITE_URL production
printf "v5nUhdVBgegtcCLG" | vercel env add NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY production
printf "69e9a869c2bb1d03a6752578" | vercel env add NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID production
printf "theenglishhub.app+45777e1d0c@invite.trustpilot.com" | vercel env add TRUSTPILOT_INVITE_EMAIL production
printf "true" | vercel env add TRUSTPILOT_ENABLED production
printf "cj@upskillenergy.com" | vercel env add ADMIN_EMAILS production
printf "cj@upskillenergy.com" | vercel env add SITE_ADMIN_EMAILS production
printf "affiliates@theenglishhub.app" | vercel env add AFFILIATE_ADMIN_EMAIL production

# --- Generate-yourself secrets ----------------------------------------------
printf "$(openssl rand -hex 32)" | vercel env add CSRF_SECRET production
printf "$(openssl rand -hex 16)" | vercel env add IP_HASH_SALT production
printf "$(openssl rand -hex 32)" | vercel env add AFFILIATE_IP_HASH_SECRET production
printf "$(openssl rand -hex 32)" | vercel env add CONSENT_IP_HASH_SECRET production

# --- Shared RevenueCat webhook secret (record same value in 1Password AND
#     paste into RevenueCat dashboard → Webhook → Bearer token) --------------
RCWHSECRET=$(openssl rand -hex 32)
printf "$RCWHSECRET" | vercel env add REVENUECAT_WEBHOOK_SECRET production
echo "REVENUECAT_WEBHOOK_SECRET = $RCWHSECRET  # save to 1Password + RevenueCat dashboard NOW"

# --- Pull and sanity-check --------------------------------------------------
vercel env pull .env.production.local
grep -E "SET_FROM|GENERATE|placeholder" .env.production.local && echo "PLACEHOLDERS REMAIN — STOP" || echo "clean"
```

### 13.3 Trigger prod redeploy after env changes

```bash
vercel --prod
```

End of inventory.
