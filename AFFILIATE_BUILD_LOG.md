# Affiliate System Build Log

## Pre-Flight Audit — 21 March 2026

### 1. Rewardful Package
- `npm show rewardful` → **E404 Not Found**. No npm package exists.
- Rewardful is a SaaS product, not an npm library. Integration is via:
  - Client-side: `<Script src="https://r.wdfl.co/rw.js">` loaded in layout
  - Server-side: REST API at `https://api.getrewardful.com/v1/` using `REWARDFUL_API_SECRET`
- **Decision:** No package to install. Use `fetch()` for server-side Rewardful API calls. Create `src/lib/rewardful.ts` as a thin API wrapper.

### 2. Existing Stripe Webhook Handler
- Location: `src/app/api/stripe/webhook/route.ts`
- Handles: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
- Uses `createServiceRoleClient()` for Supabase admin operations
- `checkout.session.completed` reads `session.metadata.userId` — will add `rewardful_referral` to metadata
- **Decision:** Extend existing handler with affiliate attribution logic. Add new case content, not new files.

### 3. Existing Stripe Checkout Handler
- Location: `src/app/api/stripe/checkout/route.ts`
- Accepts `{ priceId, courseId?, mode }` as POST body
- Creates Stripe customer if needed, stores `stripe_customer_id` on profile
- Validates `priceId` against `PRICE_IDS` and `COURSE_PRICE_MAP`
- Sets `metadata.userId` and optionally `metadata.courseId`
- **Decision:** Add `rewardful_referral` to accepted body fields and pass to session metadata.

### 4. Existing Supabase Migrations
- Single migration: `supabase/migrations/001_initial_schema.sql`
- Tables: `profiles`, `courses`, `modules`, `quiz_questions`, `enrolments`, `module_progress`, `assessment_attempts`, `certificates`, `practice_sessions`
- `profiles` table has: `id`, `email`, `full_name`, `year_group`, `exam_board`, `subscription_status`, `subscription_end_date`, `stripe_customer_id`, `created_at`, `updated_at`
- RLS enabled on all tables with user-scoped policies
- **Decision:** Create `002_affiliate_system.sql` migration.

### 5. Environment Variables
- No existing `REWARDFUL` or `AFFILIATE` references in codebase
- Existing Stripe vars: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_*` (11 price IDs)
- Supabase vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- Admin emails: `NEXT_PUBLIC_ADMIN_EMAILS`
- **Decision:** Add `REWARDFUL_API_SECRET`, `NEXT_PUBLIC_REWARDFUL_KEY`, `AFFILIATE_ADMIN_EMAIL` to `.env.example`

### 6. Existing Auth Middleware
- Location: `src/middleware.ts` → delegates to `src/lib/supabase/middleware.ts`
- Protected routes: `/dashboard`, `/learn`, `/practice`, `/revision`, `/account`, `/admin`
- Redirects unauthenticated users to `/auth/login?redirect=...`
- Redirects authenticated users away from auth pages
- **Decision:** Add `/affiliates/dashboard` to protected routes.

### 7. Admin System
- Admin check: email-based via `NEXT_PUBLIC_ADMIN_EMAILS` env var
- Admin page: `src/app/admin/page.tsx` — client component with stats dashboard
- Admin API: `src/app/api/admin/stats/route.ts` — server-side admin verification
- **Decision:** Add affiliate management as sub-routes under `/admin/affiliates/*`

### 8. App Structure
- No route groups (`(dashboard)`, `(marketing)`, `(admin)`) — flat structure
- **Decision:** Keep flat structure consistent. Add routes at `src/app/affiliates/*` and `src/app/admin/affiliates/*`

### 9. Tech Stack Confirmed
- Next.js 14.2.29 (App Router)
- React 18, TypeScript
- Supabase SSR (@supabase/ssr 0.9.0)
- Stripe (stripe 20.4.1, @stripe/stripe-js 8.11.0)
- Tailwind CSS 3.4.19
- Zustand 5.0.12
- Lucide React for icons
- Vitest for testing
- Vercel deployment (lhr1 region)

### 10. Price ID → Plan Type Mapping Needed
From `src/lib/stripe.ts`:
- `PRICE_IDS.PRO_MONTHLY` → 'monthly'
- `PRICE_IDS.PRO_ANNUAL` → 'annual'
- Individual course prices → 'one_time' (no affiliate commission on these)
- No 'crammer' price currently exists — will map when added
- **Decision:** Create `determinePlanType()` in `src/lib/affiliate/utils.ts`

---

## Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Rewardful integration | Script tag + REST API | No npm package exists |
| Affiliate routes | `/affiliates/*` (flat) | Matches existing flat structure |
| Admin affiliate routes | `/admin/affiliates/*` | Extends existing admin area |
| Migration file | `002_affiliate_system.sql` | Sequential after 001 |
| Affiliate lib | `src/lib/affiliate/` | Isolated module for all affiliate logic |
| Plan type mapping | Utility function | Centralised price → plan type resolution |
| Commission calculation | Postgres function | Keeps logic in DB, callable via RPC |
| Protected routes | Extend middleware matcher | Consistent with existing auth pattern |

---

## Phase Execution Log

### Phase 1: Rewardful Integration — COMPLETE
- Created `src/lib/rewardful.ts` — server-side API wrapper (fetchRewardfulReferral, createRewardfulAffiliate)
- Created `src/hooks/useRewardful.ts` — client hook with retry polling at 500/1500/3000ms
- Modified `src/app/layout.tsx` — conditional Rewardful script tag
- Modified `src/app/api/stripe/checkout/route.ts` — rewardful_referral in body and session metadata
- Modified `.env.example` — added REWARDFUL_API_SECRET, NEXT_PUBLIC_REWARDFUL_KEY, AFFILIATE_ADMIN_EMAIL

### Phase 2: Database Schema — COMPLETE
- Created `supabase/migrations/002_affiliate_system.sql`
- 4 tables: affiliates, affiliate_referrals, affiliate_payouts, affiliate_commission_defaults
- RLS policies, indexes, get_commission_amount() Postgres function, default commission tiers

### Phase 3: Stripe Webhook Attribution — COMPLETE
- Created `src/lib/affiliate/attribution.ts` — attributeAffiliateReferral() function
- Created `src/lib/affiliate/utils.ts` — determinePlanType(), isCommissionEligible()
- Modified `src/app/api/stripe/webhook/route.ts` — attribution on checkout, void on cancellation

### Phase 4: Creator Dashboard — COMPLETE
- Created `src/app/affiliates/dashboard/page.tsx` — server component with auth/redirect
- Created `src/components/affiliates/AffiliateDashboard.tsx` — full dashboard with stats, link copy, referrals/payouts tables
- Modified `src/lib/supabase/middleware.ts` — added /affiliates/dashboard to protected routes

### Phase 5 + 9: Application Flow & Public Page — COMPLETE
- Created `src/app/affiliates/page.tsx` — public page with redirect logic
- Created `src/components/affiliates/AffiliatePublicPage.tsx` — marketing page with application form, under-18 guardian consent
- Created `src/app/api/affiliates/apply/route.ts` — POST handler with full validation
- Created `src/app/affiliates/apply/page.tsx` — redirect handler

### Phase 6: Admin Affiliate Management — COMPLETE
- Created `src/app/api/admin/affiliates/route.ts` — GET all affiliates with computed stats
- Created `src/app/api/admin/affiliates/approve/route.ts` — approve/reject with Rewardful account creation
- Created `src/app/api/admin/affiliates/payout/route.ts` — calculate payouts, status transitions with disclosure gate
- Created `src/app/admin/affiliates/page.tsx` — full admin UI with pending queue, affiliates table, payout calculator

### Phase 7: Commission Confirmation Cron — COMPLETE
- Created `src/app/api/cron/affiliate-confirm/route.ts` — daily cron checking 30-day-old pending referrals against Stripe subscription status
- Modified `vercel.json` — added cron schedule (daily at 09:00 UTC)
- Modified `.env.example` — added CRON_SECRET

### Phase 8: Subscription Cancellation Handling — COMPLETE
- Implemented in Phase 3 within webhook handler — handleSubscriptionDeleted voids pending/confirmed commissions

### Types — COMPLETE
- Modified `src/lib/types.ts` — added AffiliateStatus, CommissionStatus, PayoutStatus, AffiliatePlanType, Affiliate, AffiliateReferral, AffiliatePayout, AffiliateCommissionDefaults, AffiliateWithRelations

---

## Build Verification

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Generating static pages (30/30)
✓ All affiliate routes present in build output
```

All 9 phases complete. Zero TypeScript errors. Zero build warnings.
