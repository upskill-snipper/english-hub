# EVENT TAXONOMY

_TICKET-9 from the SEO audit. Single source of truth for product analytics events._

---

## 1. TL;DR

This document is the **single source of truth** for every event the English Hub
website fires into PostHog (EU cluster) and Google Analytics 4. If an event
isn't documented here, treat it as undefined — it should either be added to
this doc or removed from the code.

- **Owner**: cj@upskillenergy.com (founder). Engineering reviews on every PR
  that touches `src/lib/posthog.ts`, `src/lib/gtag.ts`, or any component named
  `TrackEvent.tsx`.
- **Update cadence**: any time you wire a new event, rename one, or change its
  payload shape. Update _before_ merging — a missing taxonomy entry is a
  blocker, not a follow-up.
- **Why this matters**: GA4 + PostHog drive funnel reports, paid-ads
  attribution, school-pilot pipeline metrics and the SEO audit's KPI table.
  Inconsistent or undocumented events corrupt every downstream dashboard.

---

## 2. Conventions

| Rule | Spec |
|---|---|
| Naming | `snake_case`, lowercase ASCII only |
| Length | Max 40 characters |
| Verb tense | Past tense for completions (`signup_completed`), past-participle for state (`pricing_viewed`); `_started` for funnel entry |
| Parameter keys | `snake_case`, max 30 chars |
| Parameter types | `string`, `number`, `boolean`, or `null`. No nested objects. No arrays. |
| PII | **Never** send: email, full name, IP, raw DOB, phone number, postcode, parent/guardian email. Use Supabase user IDs (already pseudonymous) or hashed identifiers only. |
| Minor accounts | All PostHog captures are gated by `setMinorFlag(true)` in `src/lib/posthog.ts` — no behavioural profiling of under-16s (ICO Children's Code §15). |
| Cardinality | Avoid free-text params. Bucketed enums (e.g. `accountType: 'student' \| 'teacher'`) only. |
| New params | Add to this doc the same PR. |

The canonical `EVENTS` constant lives in `src/lib/posthog.ts` (lines 154–162).
Import the symbol — never pass a raw string — so typos surface at compile
time:

```ts
import { capture, EVENTS } from '@/lib/posthog'
capture(EVENTS.SIGNUP_COMPLETED, { accountType })
```

---

## 3. Live events

Sorted alphabetically. **PH** = PostHog EU, **GA4** = Google Analytics 4.
**Status: live** = currently emitted from production code.
**Status: planned** = listed in the SEO audit (`seo-audit-consolidated.md`
§10.2) but not yet wired.

| Event | When it fires | Params | PH | GA4 | File | Consent | Status |
|---|---|---|---|---|---|---|---|
| `$pageview` | Every App Router route change | `$current_url: string`, `path: string` | yes | no (GA4 fires its own `page_view` via `gtag('config')`) | `src/components/PostHogProvider.tsx:62` | gated | live |
| `affiliate_signup_completed` | New affiliate confirms email after `/affiliate/signup` | `program: string` | yes | yes | (not yet wired) | gated | planned |
| `ai_marking_used` | User receives AI feedback on `/dashboard/essay-feedback` | `board: string`, `paper: string`, `question_type: string` | yes | no | (not yet wired — currently captured as `first_essay_submitted` only) | gated | planned |
| `auth_login_completed` | Supabase returns a session on `/auth/login` | `method: string` | yes | yes (`login`) | (not yet wired — only `sign_up` is called on register) | gated | planned |
| `auth_register_completed` | Supabase signUp() resolves, user row created | `accountType: string` | yes (`signup_completed`) | yes (`sign_up`) | `src/app/auth/register/page.tsx:287, 289` | gated | live (under names `signup_completed` / `sign_up`) |
| `auth_register_started` | User clicks Submit on `/auth/register` (after client-side validation) | `accountType: string` | yes (`signup_started`) | no | `src/app/auth/register/page.tsx:125` | gated | live (under `signup_started`) |
| `begin_checkout` | User is redirected to Stripe Checkout from `/account/billing` | `currency: 'GBP'` | no (PostHog uses `subscription_started`) | yes | `src/app/account/billing/page.tsx:159, 199` | gated | live |
| `board_card_clicked` | User clicks a board card on the homepage / board picker | `board: string`, `position: number` | yes | yes | (not yet wired — see `BoardSelectorSection.tsx` for related `boardSelected`) | gated | planned |
| `board_selected` | User selects a board in `<BoardSelectorSection>` | `board: string` | no | yes | `src/components/board/BoardSelectorSection.tsx:90` | gated (gtag.js only loads after consent) | live |
| `checkout_completed` | Stripe redirects back with `?checkout=success` | `currency: 'GBP'` | yes (`subscription_paid_converted`) | yes (`purchase`) | `src/app/dashboard/page.tsx:172, 175` | gated | live (under names `subscription_paid_converted` / `purchase`) |
| `checkout_started` | User initiates Stripe Checkout | `plan: string`, `promoCode?: string` | yes (`subscription_started`) | yes (`begin_checkout`) | `src/app/account/billing/page.tsx:159, 160, 199, 203` | gated | live (under `subscription_started`) |
| `contact_submitted` | Visitor submits the contact form on `/contact` | `topic: string` | yes | yes | (not yet wired — no contact form in repo) | gated | planned |
| `document_downloaded` | User clicks a download option in `<DownloadMenu>` | `document_type: string`, `format: string` | no | yes | `src/components/DownloadMenu.tsx:180` | gated | live |
| `download_initiated` | Generic event for any PDF/CSV/printable download | `asset: string`, `format: string`, `source_path: string` | yes | yes | (currently fragmented across `document_downloaded` and email-magnet flow) | gated | planned (consolidation) |
| `email_captured` | Visitor submits the magnet form in `<EmailCaptureCard>` | `magnet_slug: string`, `source_path: string \| null` | yes | yes | `src/components/marketing/EmailCaptureCard.tsx:128, 134` | gated | live |
| `essay_submitted` | User submits an essay (helper exposed in `gtag.ts`) | `text_name: string` | no | yes (helper, no production caller) | `src/lib/gtag.ts:94-95` | gated | helper only — not currently invoked |
| `first_essay_submitted` | Successful AI essay-feedback response | `board: string`, `paper: string`, `questionType: string` | yes | no | `src/app/dashboard/essay-feedback/page.tsx:230` | gated | live |
| `home_viewed` | Visitor lands on `/` (homepage) | none | yes | no (GA4 fires `page_view` instead) | `src/app/page.tsx:16` | gated | live |
| `mock_exam_completed` | User finishes a full mock exam attempt | `paper: string`, `board: string`, `score: number`, `duration_seconds: number` | yes | yes | (not yet wired — `mock_exam` exists as a `progress_type`, not yet a captured event) | gated | planned |
| `pricing_viewed` | Visitor lands on `/pricing` | none | yes | no | `src/app/pricing/page.tsx:446` | gated | live |
| `poem_studied` | User completes a poem study session | `slug: string`, `board: string` | yes | yes | (not yet wired — `poem_studied` is a `progress_type` in `src/lib/progress/sync.ts:6`, not captured into PH/GA4) | gated | planned |
| `quiz_completed` | User finishes the quiz in `<InlineStudyEngine>` | `text_name: string`, `score: number`, `total: number` | no | yes | `src/components/study/InlineStudyEngine.tsx:159` | gated | live |
| `quiz_started` | User begins a quiz in `<InlineStudyEngine>` | `text_name: string` | no | yes | `src/components/study/InlineStudyEngine.tsx:131` | gated | live |
| `school_demo_requested` | School staff submits the demo form on `/schools` | `school_size: string`, `country: string` | yes | yes | (not yet wired — no school demo form in repo) | gated | planned |
| `setboard_redirect_completed` | Middleware finishes the `?setBoard=` flow and redirects to clean URL | `board: string` | yes | no | (not yet wired — middleware sets the cookie but does not capture) | gated | planned |
| `signup_completed` | Alias for `auth_register_completed` (live name) | `accountType: string` | yes | no | `src/app/auth/register/page.tsx:289` | gated | live |
| `signup_started` | Alias for `auth_register_started` (live name) | `accountType: string` | yes | no | `src/app/auth/register/page.tsx:125` | gated | live |
| `subscription_paid_converted` | Stripe returns `?checkout=success` to `/dashboard` | `currency: 'GBP'` | yes | no (GA4 fires `purchase`) | `src/app/dashboard/page.tsx:175` | gated | live |
| `subscription_started` | User redirects to Stripe Checkout | `plan: string`, `promoCode?: string` | yes | no (GA4 fires `begin_checkout`) | `src/app/account/billing/page.tsx:160, 203` | gated | live |
| `text_studied` | User completes a prose / drama study session | `slug: string`, `board: string` | yes | yes | (not yet wired — `text_studied` is a `progress_type` in `src/lib/progress/sync.ts:9`, not captured into PH/GA4) | gated | planned |
| `text_viewed` | Helper exposed in `gtag.ts` | `text_name: string` | no | yes (helper) | `src/lib/gtag.ts:88` | gated | helper only — not currently invoked |

### Naming reconciliation

The SEO audit uses `auth_register_*` / `checkout_*`; the code uses `signup_*` / `subscription_*`. Both rows appear above for traceability. **TICKET-9 follow-up**: pick one canonical set, rename the constants in `src/lib/posthog.ts` in a single PR. Recommendation: adopt the audit's names.

---

## 4. Event lifecycle

**Student funnel**
```
home_viewed
  → board_card_clicked (planned) / board_selected (live, GA4)
  → pricing_viewed
  → signup_started → signup_completed (+ GA4 sign_up)
  → poem_studied / text_studied (planned)
  → quiz_started → quiz_completed (GA4)
  → first_essay_submitted (live) / ai_marking_used (planned)
  → mock_exam_completed (planned)
  → subscription_started (+ GA4 begin_checkout)
  → subscription_paid_converted (+ GA4 purchase)
```

**Teacher funnel**
```
home_viewed
  → signup_started/completed { accountType: 'teacher' }
  → document_downloaded (GA4) / download_initiated (planned)
```

**School funnel**
```
home_viewed → school_demo_requested (planned) → CRM (offline)
```

**Affiliate funnel**
```
home_viewed → affiliate_signup_completed (planned)
```

**Cross-cutting: email capture** — `email_captured { magnet_slug, source_path }` fires on any page hosting `<EmailCaptureCard>`.

---

## 5. How to add a new event

Checklist for engineers — do not skip:

1. **Name it.** snake_case, past tense, max 40 chars. Reuse an existing constant if it's the same funnel step.
2. **Add the constant** to `EVENTS` in `src/lib/posthog.ts` and export it.
3. **Document it here** in §3, alphabetically. Fill every column. PRs without a taxonomy entry must be rejected.
4. **Wire to PostHog** via the exported `capture()` helper in `src/lib/posthog.ts` — never call `posthog.capture()` directly (consent + minor gating lives in the helper).
5. **Wire to GA4** via `trackEvent()` in `src/lib/gtag.ts` (or a typed helper in `events`). For paid-ads conversions, also mark the event as a conversion in GA4 admin.
6. **Add a test.** Mock `capture` / `trackEvent`. Assert it fires once per user action and is a no-op when consent is missing. See existing tests under `src/__tests__/`.
7. **Validate live.** Open PostHog → Live Events and GA4 → Realtime → Events after deploy. Trigger the action in prod, confirm payload.
8. **Update dashboards** the same day for any event in a tracked funnel.

---

## 6. GDPR / consent gating

Every analytics call routes through a helper that is a no-op until the visitor accepts the analytics cookie category:

- **PostHog**: `capture()` in `src/lib/posthog.ts` checks `canCaptureAnalytics()` (lines 53–58), which requires `localStorage['cookie-consent'] === 'all'` AND no `eh-is-minor` flag (ICO Children's Code §15). PostHog is also initialised with `opt_out_capturing_by_default: true`, so even a raw `posthog.capture()` would no-op pre-consent.
- **GA4**: `gtag.js` is not loaded at all until the user accepts cookies via `<CookieConsent />` (`src/components/cookie-consent.tsx`). `trackEvent()` returns silently when `gtag` is undefined.

**Consequence**: events fired pre-consent (e.g. `home_viewed` for a first-time visitor) genuinely do not ship. This is required for PECR + GDPR + Children's Code compliance. Funnel counts start from the cookie-consent moment, not the true visit moment — factor this into top-of-funnel conversion maths. For unconditional pageview signal (Core Web Vitals etc.) use the Vercel Speed Insights pipeline documented in `business-docs/CWV-baseline-2026-05-04.md` and `SEO-MEASUREMENT-SETUP.md`.

---

_Last reviewed: 2026-05-01. Next review: when any item in §3 changes status._
