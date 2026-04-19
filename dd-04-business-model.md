# DD-04 — Business Model, Monetisation & Unit Economics

**Target:** The English Hub (`theenglishhub.app`)
**Operating entity:** Upskill Energy Limited (Co. No. 16511479)
**Scope:** Commercial / pricing / monetisation / go-to-market review
**Date:** 2026-04-12
**Version:** 5 — FINAL (Cycle 3)
**Author:** Commercial analyst (code-level review, fifth pass)
**Codebase:** `D:/Coding/english-hub` — 617 page routes, 109 API routes, ~792k LOC

> **Headline verdict:** The English Hub has a production-grade Stripe integration, a coherent B2C pricing surface, and the most extensive B2B product build (64 school dashboard pages, 39 school API routes, 120 school TSX files) we have seen in a pre-revenue EdTech SaaS. Since v4, four material improvements have landed: (1) a complete safeguarding signposting system — `SafeguardingBanner` component, `/safeguarding` policy page, `/safeguarding/report` multi-step concern form, `/api/safeguarding/report` Prisma-backed API with DSL email alerts, severity classification, and reference-number tracking — adding a genuine child-safety feature that is a direct B2B sales differentiator for school procurement conversations; (2) `scripts/apply-pending-migrations.sh` — an idempotent, auditable migration applicator covering all 7 pending database migrations with dry-run, single-migration, and show modes — materially improving acquisition readiness by de-risking the database-state question for any acquirer's engineering team; (3) `src/lib/env-validation.ts` — a structured environment variable validator with required/recommended/optional/deprecated tiers, format checks, and production-throws semantics — reducing onboarding friction for new developers and acquirer teams; (4) `@next/bundle-analyzer` integration in `next.config.js` enabling `ANALYZE=true` bundle inspection — providing a technical DD verification tool for any buyer assessing bundle size and dependency bloat. All PII email fields remain present in school CSV exports (users, report, logins) — this is a noted gap, not a resolved item. The DMCC Act subscription-compliance module, 5-step school onboarding wizard, international pricing in 18 currencies, and MAT pricing model remain strong positives. **However, zero verified revenue exists. Every financial template in the data room is empty. The operating entity is named Upskill Energy Limited, not The English Hub Ltd — a material entity-structure issue for any transaction.** Any ARR number quoted by the founder is forward-looking and must be grounded in the code facts below.

---

## Change Log

### v4 to v5 (Cycle 3 — FINAL)

| Item | v4 status | v5 status | Impact |
|------|-----------|-----------|--------|
| Safeguarding signposting system | Not present | **Shipped.** `SafeguardingBanner` component with Childline number + report link; `/safeguarding` policy page (10-section, DSL-named, externals list); `/safeguarding/report` multi-step concern form (468 lines, 4 report types, severity auto-classification); `/api/safeguarding/report` POST with Zod validation, `SafeguardingReport` Prisma model, reference-number generation, DSL email alerting via Resend, rate-limited; `/api/safeguarding/report/[id]` PATCH for admin case management (status transitions, assignment, notes) | Child safety differentiator for B2B school sales; KCSIE-aligned signposting |
| Migration applicator script | Not present | **Shipped.** `scripts/apply-pending-migrations.sh` — bash script covering 7 pending migrations with dry-run default, `--apply` mode, `--one <prefix>` single-migration, `--show` SQL preview, `--list` inventory. Uses `psql` with `ON_ERROR_STOP=1`, idempotent SQL (`IF NOT EXISTS`), coloured output, post-apply next-steps guidance | Reduces acquirer database-state risk; enables controlled migration during technical DD |
| Environment variable validation | `requireEnv` for Stripe prices only | **Shipped.** `src/lib/env-validation.ts` — 8 required vars (Supabase, Stripe, Anthropic, site URL), 3 recommended (CRON_SECRET, CSRF_SECRET, RESEND_API_KEY), 8 optional (Upstash, Rewardful, Sentry, GA4, admin emails), 1 deprecated (NEXTAUTH_URL). Format validation for NEXT_PUBLIC_SITE_URL. Production throws on missing required vars. Test suite in `env-validation.test.ts` | Reduces onboarding friction; makes env setup self-documenting for acquirer teams |
| Bundle analyzer | Not present | **Shipped.** `@next/bundle-analyzer` in `devDependencies`; `next.config.js` wraps config with `withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })` | Enables technical DD verification of bundle size, tree-shaking, and dependency bloat |
| Content safety checks | Not present | **Shipped.** `src/lib/content-safety.ts` — prompt injection detection (11 patterns), essay-generation blocking (3 patterns), non-prose detection (word-count, repeated-word, character-ratio checks). Tested in `content-safety.test.ts` | Protects AI marking endpoints from misuse; supports responsible-AI narrative for B2B |
| PII email fields in exports | Present in all school CSV exports | **Unchanged.** Email columns remain in `export/users`, `export/report`, `export/logins`, and `export/route.ts` | Noted gap — PII in exported CSVs should be reviewed for GDPR data-minimisation compliance |
| Revenue verification | Zero | **Zero.** No code change can fix this — requires Stripe dashboard actuals | Still the top-line finding |

### v3 to v4 (Cycle 2)

| Item | v3 status | v4 status | Impact |
|------|-----------|-----------|--------|
| AI opt-out enforcement | Client-side only (localStorage); `api/mark/route.ts` did not check opt-out flag; flagged as R7 | **Resolved.** `isAiOptedOutServer()` queries `PrivacySettings.aiOptOut` via Prisma. Enforced in all 4 AI API routes: `api/mark/route.ts`, `api/mark/stream/route.ts`, `api/essay-feedback/route.ts`, `api/essay/feedback/route.ts`. Returns 403 with clear re-enable instructions. | Closes Children's Code GAP-12B compliance gap; eliminates R7 |
| Cookie consent server-side logging | Not present; consent was client-side localStorage only | **Shipped.** `api/consent/cookie/route.ts` with `CookieConsent` Prisma model: `visitorId`, `userId` (optional — works for anonymous visitors), `choice` (accept_all/reject_all/custom), per-category `analytics`/`marketing` booleans, SHA-256 `ipHash` (never stores raw IP), `userAgent`, policy `version`, rate-limited (10/min/IP) | Provable PECR/ICO compliance; B2B procurement value-add |
| Privacy settings API | Not present | **Shipped.** `api/privacy/settings/route.ts` — GET returns settings + data summary + essay list; PUT allows partial updates with audit-log trail. Rate-limited (30/min/IP). Auto-creates child-default settings for under-16 users per Children's Code. | Full server-side privacy control surface |
| RUNBOOK.md | Not present | **Shipped.** Covers architecture, dev setup, env vars, database (dual Supabase+Prisma layer), migrations, deployment (Vercel), Stripe webhook config, cron jobs (6 scheduled), Sentry monitoring, GA4, error boundaries | Materially improves technical transferability; reduces key-person risk for acquirer diligence |
| Test suite | Not fully characterised | **All tests passing.** Unit tests (vitest) and E2E tests (Playwright) green | Acquisition confidence signal; reduces integration risk |

### v2 to v3 (Cycle 1)

| Item | v2 status | v3 status | Impact |
|------|-----------|-----------|--------|
| School billing page pricing | Flat £1,500/yr — contradicted sales materials | **Fixed.** Per-pupil `PRICING_TIERS` matching sales materials | Eliminated critical pricing inconsistency |
| Founding Schools banner | Not present | **Added.** In-product banner with worked example | Sales/product alignment |
| Parent data deletion flow | Not built | **Shipped.** Soft-delete, 30-day grace, rate-limited | Children's Code Standard 11 compliance |
| AI opt-out mechanism | Not present | **Shipped.** Client-side localStorage toggle + UI fallback | Children's Code GAP-12B (partial — see v4 for server-side) |

---

## 1. Revenue Model

The English Hub has six codified revenue streams and one planned but unshipped stream.

| # | Stream | Status | Mechanism | Revenue type |
|---|--------|--------|-----------|--------------|
| 1 | Student subscriptions (£8.99/mo, £67.99/yr) | **Live in code** — `PRO_MONTHLY`/`PRO_ANNUAL` via `requireEnv`; 30-day trial | Stripe Checkout -> webhook -> `profiles.subscription_status = 'pro'` | Recurring |
| 2 | Teacher subscriptions (£12.99/mo, £99.99/yr) | **Marketed on pricing page** — no distinct Stripe price ID in `PRICE_IDS`; likely re-uses `PRO_MONTHLY`/`PRO_ANNUAL` | Same Stripe flow; pricing-page claim may be misleading | Recurring |
| 3 | One-time course purchases (9 fixed + 6 optional SKUs) | **Partially live** — KS3, GCSE, IGCSE and bundle price IDs wired; Edexcel/IGCSE optional if env vars populated | `mode: 'payment'` in checkout; writes to `enrolments` table | One-time |
| 4 | Founding Schools (per-pupil, capped at 10 logos) | **Sales-led, off-Stripe** — per-pupil pricing from £6-£26/student/yr depending on key stage; free until 31 Aug 2026; billing page aligned to per-pupil model | Manual invoice; renewal via email to `info@Upskillenergy.com` | Annual contract |
| 5 | MAT/trust framework deals (per-pupil, banded) | **Sales playbook exists** — 5 bands from £7-£15/student/yr; worked examples up to £315k ARR per flagship trust | Not productised in Stripe; no self-serve checkout | Annual contract |
| 6 | International school deals (per-pupil, 18 currencies) | **Sales playbook exists** — USD $9-$18/student/yr; 200 target schools listed; regional pricing in USD/GBP/EUR/AED/SGD/HKD etc. | Not productised in Stripe | Annual contract |
| 7 | Parent tier (£4.99/mo) | **Pre-launch** — `PARENT_MONTHLY` price ID is literal string `'price_TBD_parent'`; 13 parent pages exist in UI including data deletion flow; `api/parent/README.md` flags explicit "do not enable in production" checklist; Supabase migration `001_parent_accounts.sql` is in `migrations-pending/` | Not wired | Planned recurring |

**Affiliate programme** (Stream 6b — cost, not revenue): 3-tier commission schedule is live in `002_affiliate_system.sql`, with 14 affiliate pages across two route groups (`/affiliate/*` and `/affiliates/*`), Rewardful attribution through checkout metadata, and refund/cancellation commission voiding in the webhook handler.

### 1a. Revenue model maturity assessment

| Dimension | B2C (Student/Teacher) | B2B (Schools/MATs) | International | Parent |
|---|---|---|---|---|
| Product built | Yes | Yes (extensive) | Partially (same product, sales materials) | Yes (UI + data deletion flow) |
| Pricing defined | Yes | Yes (per-pupil framework) | Yes (18 currencies) | Yes |
| Stripe wired | Yes | No | No | No |
| Self-serve checkout | Yes | No | No | No |
| Sales materials | N/A | 58 files (Founding + MAT) | 16 files | N/A |
| Revenue verified | No | No | No | No |

---

## 2. Pricing Analysis

### 2a. B2C plan book (from `src/constants/pricing.ts`)

| Plan | Monthly | Annual | Effective monthly | Annual discount |
|------|---------|--------|-------------------|-----------------|
| Student | **£8.99** | **£67.99** | £5.67 | ~37% |
| Teacher | **£12.99** | **£99.99** | £8.33 | ~36% |
| Parent (not live) | **£4.99** | -- | -- | -- |

Constants also set: `FREE_USES_PER_FEATURE = 3`, `TRIAL_DAYS = 30`, `FOUNDER_SCHOOL_LIMIT = 10`.

**Free tier mechanics:**
- Free forever: exam-board-aligned courses, revision notes, flashcards.
- Freemium meter: 3 free uses of every premium feature (AI marking, mock exams, feedback reports, lesson plans, worksheet builder).
- Trial: 30 days, credit-card-up-front (Stripe hosted checkout), `subscription_data.trial_period_days`.
- Marketing framing: "First month FREE" on the pricing page.

### 2b. B2B pricing (from sales materials and in-product billing page)

**Founding Schools — per-pupil (50% off standard Year 1):**

| Key stage | Standard | Founding (Y1) |
|-----------|----------|---------------|
| KS3 only (Y7-9) | £12/pupil | £6/pupil |
| KS4 only (Y10-11) | £15/pupil | £7.50/pupil |
| KS3+KS4 | £22/pupil | £11/pupil |
| Whole secondary (Y7-13) | £26/pupil | £13/pupil |

Worked examples: small school (800 pupils KS3+KS4) = £8,800 founding year; large school (1,800 pupils whole secondary) = £23,400 founding year.

**Billing page alignment (confirmed since v3):** The school billing page (`src/app/school/billing/page.tsx`) defines a `PRICING_TIERS` array with `pricePerPupil` and `founderPricePerPupil` values matching the sales materials exactly. The flat £1,500/yr `LICENSE_PRICE` constant was removed in the v2-to-v3 cycle.

**MAT framework pricing (from `sales-materials/mat/05-commercials/mat-pricing-model.md`):**

| Band | Students | Per-student/yr | Annual floor |
|------|----------|---------------|--------------|
| Single school / very small MAT | up to 1,000 | £15 | £5,000 |
| Small MAT | 1,001-5,000 | £13 | £15,000 |
| Mid MAT | 5,001-10,000 | £11 | £60,000 |
| Large MAT | 10,001-25,000 | £9 | £115,000 |
| Flagship MAT | 25,001+ | £7 | £230,000 |

Worked examples range from £32,500 (small MAT, 2,500 students) to £315,000 (flagship, 30,000 students). Term discounts: 5% for 2-year, 10% for 3-year, 15% for 5-year.

**International pricing (from `sales-materials/international/05-commercials/international-pricing.md`):**

| Tier | Students | USD/student/yr | USD annual list |
|------|----------|----------------|-----------------|
| Starter | up to 150 | $18 | $2,700 |
| Standard | 151-400 | $15 | $6,000 |
| Mid | 401-800 | $13 | $10,400 |
| Large | 801-1,500 | $11 | $16,500 |
| Premium | 1,501+ | $9 | $13,500+ |

Pricing published in 18 currencies (USD, GBP, EUR, AED, SAR, QAR, KWD, BHD, SGD, HKD, CNY, THB, MYR, JPY, BRL, MXN, ZAR, KES). Discounting policy allows up to 30% combined maximum.

### 2c. Competitive positioning assessment

The B2C price point (£8.99/mo student, £12.99/mo teacher) is consistent with UK EdTech SaaS norms for GCSE revision tools. The B2B per-pupil pricing (£7-£26/student/yr) is positioned competitively against comparable curriculum-aligned SaaS tools. The 50% founding-school discount is aggressive but time-bounded with a 10-logo cap, creating urgency without establishing a permanent low-price anchor.

**Key differentiator:** Examiner-written content aligned to specific exam board specifications (AQA, Edexcel, OCR, WJEC Eduqas, CAIE) — this is a moat claim that should be verified via the exam-board endorsement workstream (see `business-docs/exam-board-endorsement/`).

### 2d. Pricing inconsistencies requiring resolution

1. **Teacher tier Stripe identity:** Pricing page shows £12.99/mo Teacher vs £8.99/mo Student, but `PRICE_IDS` exports only `PRO_MONTHLY`/`PRO_ANNUAL`. Either both tiers route to the same Stripe price (pricing-page is misleading) or a second set of Stripe prices exists off-code in the Stripe dashboard. Material disclosure issue.
2. ~~**School billing page vs sales materials:** In-product billing UI showed £1,500/yr flat site licence; sales materials showed per-pupil pricing.~~ **RESOLVED in v3.** Billing page now shows per-pupil `PRICING_TIERS` matching sales materials exactly.
3. **Affiliate commission tables:** Public affiliate page advertises different rates (Student Monthly £5, Annual £15, Teacher Monthly £7, Annual £20) versus the DB-level defaults in `002_affiliate_system.sql` (Tier 1: £5.99/£10.00/£5.00; Tier 2: £8.00/£15.00/£7.00; Tier 3: £12.00/£20.00/£10.00). Reconciliation required.
4. **Billing email:** School billing page sends renewal emails to `info@Upskillenergy.com` — uses the legacy entity name, not The English Hub brand.

---

## 3. Stripe Integration Maturity

### 3a. What is production-grade

| Capability | Status | Evidence |
|-----------|--------|----------|
| Real Stripe SDK | Yes | `new Stripe(requireEnv('STRIPE_SECRET_KEY'), { apiVersion: '2026-02-25.clover' })` in `src/lib/stripe.ts` |
| Env-driven price IDs | Yes | `requireEnv` for all core prices (fails loud if missing) |
| Checkout with rate limiting | Yes | 10 attempts per IP per 5 minutes; auth required; price-ID validated against whitelist |
| Lazy Stripe customer creation | Yes | Creates customer on first checkout, writes `profiles.stripe_customer_id` |
| 30-day trial on subscriptions | Yes | `subscription_data.trial_period_days: PRICING.TRIAL_DAYS` |
| Promotion codes | Yes | `allow_promotion_codes: true` on subscription checkouts |
| Billing portal | Yes | `api/stripe/portal/route.ts` with rate limiting |
| Cancellation endpoint | Yes | Full cancellation with reference numbers, reason capture, rate limiting (5/IP/10min); cancels at period end |
| Webhook signature verification | Yes | Raw-body handling with `stripe.webhooks.constructEvent` |
| Full event handling | Yes | 8 event types: `checkout.session.completed`, `customer.subscription.created/updated/deleted`, `customer.subscription.trial_will_end`, `invoice.paid`, `invoice.payment_failed`, `charge.refunded` |
| Payment-failed dunning email | Yes | Resend-driven with billing link |
| Trial-ending notification | Yes | Dedicated `handleTrialWillEnd` with formatted date email via Resend |
| Refund -> commission voiding | Yes | `charge.refunded` updates `affiliate_referrals.commission_status = 'refunded'` |
| Cancellation -> commission voiding | Yes | `handleSubscriptionDeleted` voids pending/confirmed commissions with `voided` status |
| Affiliate attribution | Yes | Rewardful referral ID flows checkout metadata -> webhook -> `attributeAffiliateReferral` |
| Subscription state machine | Yes | `active/trialing -> pro`, `past_due`, `canceled -> cancelled`, `unpaid`, `incomplete`, `incomplete_expired -> cancelled`, `paused`; fallback `free` |
| One-time enrolment handling | Yes | `mode: 'payment'` writes to `enrolments` table with upsert on `user_id,course_id` |

### 3b. DMCC Act compliance

A dedicated `src/lib/subscription.ts` module implements UK Digital Markets, Competition and Consumers Act 2024 compliance:

- **Renewal reminders:** Monthly subscribers get reminders before every 6th payment; annual subscribers get 30-day advance notice.
- **Cooling-off period:** 14-day UK Consumer Contracts Regulations cooling-off tracking with explicit waiver flag (`subscription.coolingOffWaived`).
- **Prisma-backed:** Uses `Subscription` and `RenewalReminder` models; `recordRenewalReminder` creates audit trail with amount, currency, and next payment date.
- **Cron infrastructure:** `api/cron/school-access/route.ts` sends automated expiry warning emails (30-day and urgent variants) with timing-safe authentication.
- **Next-reminder calculation:** `calculateNextReminderDate()` provides forward-looking reminder scheduling for both monthly (cycle-aware) and annual plans.

This is a materially positive compliance signal that most pre-revenue SaaS products would not have.

### 3c. Where Stripe is not production-ready

1. **Parent tier:** `PARENT_MONTHLY` = `'price_TBD_parent'` — literal placeholder string. Explicit pre-launch checklist in `api/parent/README.md`.
2. **Teacher pricing:** No distinct Teacher price ID in code. The £12.99 Teacher tier may not be a real Stripe SKU.
3. **School billing:** Entirely off-Stripe. Founder schools are free until Aug 2026; renewals handled via `mailto:` links to `info@Upskillenergy.com`. No Stripe subscription for B2B.
4. **MAT and international deals:** No Stripe integration at all. Sales materials define sophisticated per-pupil frameworks, but nothing is productised.
5. **Dunning cadence:** Single payment-failed email; no multi-step dunning sequence.
6. **Revenue recognition:** `data-room/01-financials/revenue-recognition-policy.md` is a template (IFRS 15 / ASC 606 / FRS 102 framework not yet confirmed). No deferred-revenue handling in Supabase schema.

---

## 4. B2B Go-to-Market Readiness

### 4a. Product readiness (Strong)

The B2B product surface is the most mature area of the codebase:

- **64 school dashboard pages** (up from 45 in v4)
- **39 school API routes** covering access, analytics, assignments, classes, consent, contact, export, import, interventions, invite, join-codes, join, members, overview, promo, register, reports, roles, settings, students
- **120 school TSX files** total
- **5-step onboarding wizard** (1,146 lines): Welcome -> Teachers -> Students -> Classes -> Complete; with persistent state, CSV template download for student import, year-group and exam-board selection, join-code generation
- **Bulk CSV import** with job tracking (`import/results/[jobId]`)
- **School billing page** with founder/paid/trial/expired states, per-pupil pricing tiers, founding schools banner, usage stats, renewal CTA, invoice history placeholder
- **Analytics suite:** department overview, class performance, student insights, NRR with cohorts and movements, progress cards, comparative analytics
- **Teacher tools:** quiz builder, mark schemes, starters, seating plans, groups, differentiation
- **Access control:** `api/cron/school-access` cron job with automated expiry warning emails (30-day and 7-day urgent variants), timing-safe cron authentication
- **Export capabilities:** report export, login credentials export, user export, CSV template export
- **Interventions:** dedicated `/api/school/interventions` route for tracking student interventions

**Assessment:** This is a fully-built B2B product. The feature depth (analytics, differentiation tools, seating plans, quiz builder, interventions) far exceeds what a founding cohort of 10 schools would require. The build signals intent for a volume B2B motion.

### 4b. Sales enablement readiness (Strong)

Three complete sales playbook packs exist in `sales-materials/`:

**Founding Schools pack (23 files):**
- Positioning: key messages, programme overview, unique value proposition
- Pitch: deck outline, speaker notes, demo script
- Outreach: cold email sequences, LinkedIn templates, phone script, referral request
- Meetings: discovery call script, demo agenda, objection handling, qualifying questions
- Commercials: pricing sheet (per-pupil), contract terms, mutual action plan, ROI calculator
- Close: case study template, pilot agreement, proposal template, reference commitment letter

**MAT pack (19 files):**
- Target list: top 50 UK MATs, tier 1 priority list, contact research template
- Positioning: MAT value proposition, competitor comparison, Ofsted alignment
- Pitch: executive one-pager, MAT deck outline, speaker notes
- Outreach: MAT cold email, LinkedIn, warm intro request
- Commercials: MAT framework agreement, MAT pricing model, TUPE considerations
- Diligence: MAT DPA, procurement questions answered, security questionnaire

**International pack (16 files):**
- Market research: regional analysis, COBIS/BSME/FOBISIA networks, market overview
- Target list: top 200 schools, tier 1 priority 50, by-country breakdown, school groups/chains
- Positioning: IGCSE-focus messaging, value proposition for international schools
- Outreach: cold email templates (heads of English, school groups), follow-up sequence, LinkedIn templates
- Commercials: international pricing (18 currencies), school-group framework pricing

**Total sales enablement: 58 files.** This is exceptionally thorough for a pre-revenue startup. The MAT pricing model in particular (banded per-pupil with volume discounts, multi-year terms, true-up mechanics, phased rollout provisions) is board-ready commercial documentation.

### 4c. GTM gaps

1. **No CRM.** No Salesforce, HubSpot, Pipedrive or any CRM integration in the codebase. Pipeline management is presumably manual.
2. **No self-serve school checkout.** All B2B deals require manual email contact. The school billing page's renewal CTA is a `mailto:` link.
3. **No B2B Stripe SKU.** Per-pupil pricing is documented and now displayed in-product but not productised. Schools cannot self-serve upgrade, renew, or pay online.
4. **School billing email uses legacy entity name** (`info@Upskillenergy.com`).
5. **No signed school contracts in the repo.** All commercial templates are unsigned templates.

---

## 5. Compliance Value-Adds

### 5a. Safeguarding signposting system (New in v5)

A complete safeguarding signposting and reporting system has shipped, comprising four layers:

**Layer 1 — Persistent banner (`SafeguardingBanner.tsx`):**
- Site-wide banner component displaying Childline number (0800 1111) with click-to-call and a "Report a concern" button linking to `/legal/safeguarding`.
- Responsive layout (mobile: stacked with separate Childline link; desktop: inline).
- Shield icon visual indicator.

**Layer 2 — Policy pages:**
- `/safeguarding` — 10-section safeguarding policy page: Commitment Statement, Scope, Designated Safeguarding Lead, Key Principles, Online Safety Measures, Reporting Procedures, Data Protection in Safeguarding, Staff and Contractor Training, Review Schedule, External Contacts. Anchored TOC, SEO metadata, canonical URL.
- `/legal/safeguarding` — Parallel legal-section safeguarding policy (version 1.0, effective March 2026, review March 2027).

**Layer 3 — Concern reporting form (`/safeguarding/report`, 468 lines):**
- Multi-step client-side form with 4 report types: "I'm worried about myself" (HIGH), "I'm worried about someone else" (HIGH), "Platform concern" (MEDIUM), "Other" (LOW).
- Auto-severity classification based on report type.
- Description field (max 5,000 chars) with optional reporter name and contact.
- Embedded "If you need to talk to someone right now" panel listing Childline, NSPCC, and other 24/7 services.
- Submission confirmation with reference number display.

**Layer 4 — API and database:**
- `api/safeguarding/report` POST: Zod-validated input, Prisma `SafeguardingReport` model (id, reporterId, reportType, description, severity, status, createdAt, assignedTo, resolvedAt), reference-number generation (SG-{timestamp}-{random}), DSL email alert via Resend to configurable `DSL_EMAIL` (default: `safeguarding@theenglishhub.app`), rate-limited.
- `api/safeguarding/report/[id]` PATCH: Admin-only case management (status: OPEN/IN_PROGRESS/RESOLVED/CLOSED, assignee, notes). Rate-limited (30/min/user).
- Database indexes on `reporterId`, `severity`, `status`, `assignedTo`, `createdAt`.

**B2B sales significance:** This is a direct answer to the "How do you handle safeguarding?" question that appears on every UK school procurement checklist and DfE/Ofsted KCSIE (Keeping Children Safe in Education) questionnaire. Schools are legally required to ensure third-party platforms have safeguarding measures. Having a built-in reporting mechanism with DSL notification, reference tracking, and external-services signposting is a material differentiator against competitors who provide only a generic contact form. It de-risks the procurement conversation and shortens the compliance review cycle.

### 5b. Parent data deletion flow (Children's Code Standard 11)

A complete parent-initiated child data deletion flow has shipped:

- **UI:** `src/app/parent/delete-data/page.tsx` — multi-step deletion wizard showing data categories (essays, progress, AI feedback) that will be deleted versus retained.
- **API:** `src/app/api/parent/delete-child-data/route.ts` — authenticated, role-gated (`parent.role !== "PARENT"` returns 403), rate-limited (3 requests per hour per parent), implements soft-delete with 30-day grace period before hard-deletion by data-retention cron.
- **Compliance citation:** Code comments reference Children's Code Standard 11 (Parental Controls).

**B2B sales significance:** This is a material compliance feature for school procurement conversations. Schools and MATs running data protection impact assessments will value a built-in parental data-deletion flow. It differentiates against competitors who handle deletion requests manually.

### 5c. AI opt-out (Children's Code GAP-12B) — RESOLVED

**v3 status:** Client-side only (localStorage). The `isAiOptedOut()` function read localStorage; the API layer did not enforce the preference. A determined user could bypass it. Flagged as R7.

**v4 status: Fully resolved.** The AI opt-out is now enforced at both layers:

- **Client-side (UI gating):** `isAiOptedOut()` / `setAiOptedOut()` in `src/lib/ai-preferences.ts` — stores preference in localStorage for immediate UI responsiveness. The marking submit page shows a fallback message when opted out.
- **Server-side (authoritative enforcement):** `isAiOptedOutServer(userId)` in `src/lib/ai-preferences.ts` — queries `PrivacySettings.aiOptOut` via Prisma. This is the authoritative check.
- **API enforcement:** All four AI-powered API routes now import and call `isAiOptedOutServer()` before processing:
  - `api/mark/route.ts`
  - `api/mark/stream/route.ts`
  - `api/essay-feedback/route.ts`
  - `api/essay/feedback/route.ts`
- **Response:** Returns HTTP 403 with message directing user to privacy settings or parent/guardian.
- **Database schema:** `PrivacySettings.aiOptOut` column (`Boolean @default(false)`) in `prisma/schema.prisma`.
- **Child defaults:** Privacy settings auto-creation for under-16 users applies high-privacy defaults per ICO Children's Code.

**Assessment:** Complete, defence-in-depth implementation. **R7 is closed.**

### 5d. Cookie consent server-side logging

A server-side cookie consent logging endpoint has shipped:

- **API:** `src/app/api/consent/cookie/route.ts` — POST endpoint accepting `choice` (accept_all / reject_all / custom), per-category `analytics` and `marketing` booleans, and a client-generated `visitorId`.
- **Database:** `CookieConsent` Prisma model with fields: `visitorId`, `userId` (nullable — works for anonymous visitors), `choice`, `analytics`, `marketing`, `ipHash` (SHA-256 — never stores raw IP), `userAgent` (truncated to 512 chars), `consentedAt` (auto-timestamped), `version` (policy version string).
- **Privacy-by-design:** IP addresses are one-way hashed before storage. User agent is truncated. Anonymous visitors can consent without authentication.
- **Rate limiting:** 10 consent writes per minute per IP via Upstash Redis.

**B2B sales significance:** Provable PECR/ICO compliance with hashed IP, policy versioning, and timestamped audit trail.

### 5e. Content safety checks (New in v5)

A content safety module protects the AI marking endpoints:

- **File:** `src/lib/content-safety.ts` — `contentSafetyCheck()` function with three detection layers:
  1. **Prompt injection** (11 regex patterns): Blocks "ignore instructions", "pretend to be", "override system prompt", etc.
  2. **Essay generation requests** (3 patterns): Blocks "write me an essay", "generate a response", etc.
  3. **Non-prose detection**: Word-count minimums, repeated-word ratio checks, character-ratio analysis.
- **Test coverage:** `src/__tests__/content-safety.test.ts` with test cases for each detection category.
- **Integration:** Called by `api/mark/route.ts`, `api/mark/stream/route.ts`, and `api/essay-feedback/route.ts` before sending content to Claude.

**Assessment:** This is a responsible-AI measure that protects both the platform's LLM costs and its reputation. It supports the narrative that AI marking is used appropriately — relevant for both B2B procurement and regulatory compliance.

### 5f. Privacy settings API

Full server-side privacy settings API at `api/privacy/settings/route.ts`:

- **GET:** Returns current privacy settings, data summary (essay count, feedback count, days active), and essay list.
- **PUT:** Partial-update support with audit-log trail via `AuditLog`.
- **Rate limiting:** 30 updates per minute per IP.
- **Child defaults:** Auto-creates high-privacy defaults for under-16 users.

---

## 6. Technical Transferability

### 6a. RUNBOOK.md

A comprehensive operational runbook has been added at `RUNBOOK.md`, covering:

| Section | Content |
|---------|---------|
| Architecture overview | Framework (Next.js 14 App Router), database (Supabase + Prisma), payments (Stripe), AI (Anthropic Claude), hosting (Vercel lhr1), email (Resend), error tracking (Sentry), analytics (GA4 + Vercel), rate limiting (Upstash Redis), affiliates (Rewardful), auth (Supabase Auth) |
| Development setup | Prerequisites, install, env vars, local dev, test commands, lint/type-check |
| Database | Dual layer explanation (Supabase client SDK + Prisma), applied migrations, pending migrations listed with purpose, Prisma commands |
| Deployment | Vercel config, build command (`prisma generate && next build`), env var setup, Stripe webhook registration, post-deploy checklist |
| Cron jobs | 6 scheduled jobs with paths, schedules, and descriptions (invite expiry, affiliate confirm, dormancy check, data retention, school access, weekly reports) |
| Monitoring | Sentry config (PII scrubbing enabled), error boundaries, GA4 setup, Vercel Analytics/Speed Insights |

**Acquisition significance:** A runbook is one of the first things an acquirer's engineering team looks for during technical diligence. Its presence signals operational maturity and reduces the cost of knowledge transfer.

### 6b. Environment variable validation (New in v5)

`src/lib/env-validation.ts` provides structured startup-time validation:

| Tier | Variables | Behaviour |
|------|-----------|-----------|
| **Required** (8) | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `ANTHROPIC_API_KEY`, `NEXT_PUBLIC_SITE_URL` | Production: throws. Dev: console.error with hints |
| **Recommended** (3) | `CRON_SECRET`, `CSRF_SECRET`, `RESEND_API_KEY` | Console.warn with setup instructions |
| **Optional** (8) | Upstash Redis, Rewardful, Sentry, GA4, admin emails | Console.info listing |
| **Deprecated** (1) | `NEXTAUTH_URL` | Warns if still set; explains replacement |

Additional features: URL format validation for `NEXT_PUBLIC_SITE_URL` (protocol check, trailing-slash warning). Each variable includes a human-readable hint explaining its purpose, where to find it, and example values.

**Acquisition significance:** An acquirer's engineering team can clone the repo, run the app, and immediately see exactly which variables are missing and how to obtain them. This replaces the typical "ask the founder" bottleneck during technical handover. Test coverage in `env-validation.test.ts` validates the validator itself.

### 6c. Migration applicator script (New in v5)

`scripts/apply-pending-migrations.sh` provides controlled database migration for the 7 pending Supabase migrations:

| Migration | Purpose |
|-----------|---------|
| `001_parent_accounts.sql` | Parent tier: accounts, link codes, parent-child links + RLS |
| `002_affiliates.sql` | Percentage-tier affiliate programme |
| `003_exam_board_enum_update.sql` | ExamBoard enum (Cambridge split, Eduqas, Edexcel IGCSE) |
| `004_progress_tables.sql` | Student progress tracking + RLS |
| `005_analytics_tables.sql` | Daily analytics aggregates + email preferences |
| `006_recommendation_cache.sql` | Personalised recommendation cache |
| `007_cycle_improvements.sql` | Child privacy columns, CookieConsent, PrivacySettings.aiOptOut |

Features: dry-run default (no `--apply` = safe listing), `--one <prefix>` for single-migration application, `--show <prefix>` for SQL preview, `--list` for inventory, `ON_ERROR_STOP=1` for fail-fast, coloured output, post-apply next-steps guidance.

**Acquisition significance:** Pending database migrations are a common technical-DD concern. Having an auditable script that can apply them individually or in bulk, with dry-run and preview modes, de-risks the "what state is the database in?" question that every acquirer's engineering team will ask.

### 6d. Bundle analyzer (New in v5)

`@next/bundle-analyzer` is configured in `next.config.js`:

```
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
```

Running `ANALYZE=true npm run build` generates an interactive treemap showing bundle composition by module.

**Acquisition significance:** This enables an acquirer's technical-DD team to independently verify bundle size, identify dependency bloat, and assess tree-shaking effectiveness across the 617 page routes. Combined with `optimizePackageImports` for 5 heavy libraries (lucide-react, date-fns, @supabase/supabase-js, class-variance-authority, @base-ui/react), it demonstrates build-performance awareness.

### 6e. Test suite status

All tests are passing across the suite:
- **Unit/integration tests** (vitest): Including AI preferences, cookie consent, content safety, env validation, and component tests.
- **E2E tests** (Playwright): Covering critical user flows.

---

## 7. Sales Enablement Assets — Detailed Inventory

| Category | Files | Key content |
|----------|-------|-------------|
| Founding Schools | 23 | Full sales cycle coverage: positioning through close |
| MAT/Trust | 19 | Banded pricing model, framework agreement, procurement Q&A |
| International | 16 | 200-school target list, 18-currency pricing, regional analysis |
| Affiliate programme | 14 pages (7 `/affiliate/*` + 7 `/affiliates/*`) | Public page, signup, agreement, dashboard, payouts, resources, admin |
| Press kit | 7 subdirectories | Fact sheet, brand, founder story, boilerplate, press releases, media, contacts |
| Exam board endorsement | 2 boards (AQA, Edexcel) x 6 workstreams | Research, application, evidence, legal, commercial, tracking |
| Examiner credentials | 4 subdirectories | Agreements, disclosure restrictions, evidence, acquirer perspective |
| Email templates | 5 files | Parent weekly, student weekly, teacher weekly reports + base templates |
| Demo school | Dedicated `/demo/school` route | Pre-built demo environment for school prospects |

**Total: 58+ sales files, 14 affiliate pages, 7 press-kit directories, 12+ exam-board endorsement folders, 5 email templates, 1 demo school route.**

---

## 8. Financial Data Room Status

### 8a. Structure (Well-designed)

The data room at `data-room/` contains 61 files across 5 categories:

| Category | Files | Status |
|----------|-------|--------|
| `00-overview/` | 3 | Information memorandum, one-pager, pitch deck outline — all templates |
| `01-financials/` | 11 | Financial model, key assumptions, ARR bridge, cohort retention, unit economics, revenue recognition, SaaS metrics glossary — **all templates, every value cell is `[X]` or blank** |
| `02-legal/` | 17 | Cap table, contract register, domain register, IP assignment, NDA, shareholders agreement, option pool, advisor/contractor/employment agreements, open-source audit, litigation register, trademark register — all templates |
| `03-privacy/` | 17 | Privacy policy, terms, DPA, DPIA, cookie policy, safeguarding, consent notices, age verification, subprocessor register, DSAR log, retention schedule, transfer impact assessments, ROPA — mix of templates and partial content |
| `04-diligence/` | 10 | Anticipated red flags, buyer Q log, code escrow, customer references, DD Q&A master, dealroom timeline, key-person risk, NDA-before-sharing, VDR structure — all templates |
| `08-metrics/` | 3 | Monthly KPI template, ARR build template, README — all empty |

### 8b. Critical finding: zero populated financial data

Every financial template is structurally correct but contains no actual data:

- `key-assumptions.md`: All values are `[X]` or `[N]` placeholders
- `financial-model-template.csv`: Empty 36-month skeleton
- `unit-economics-template.csv`: Empty
- `cohort-retention-template.csv`: Empty
- `arr-bridge-template.csv`: Empty
- `arr-build-template.csv`: Empty
- `monthly-kpi-template.csv`: Empty column headers, no actuals
- `revenue-recognition-policy.md`: Template v0.1, reporting framework not confirmed

**The founder has built the right framework for seed/pre-seed diligence but has not populated any of it.** Any ARR, CAC, LTV, churn, or conversion metric quoted verbally cannot be reconciled to this data room.

### 8c. Business documents (136 files)

A parallel `business-docs/` directory contains 136 files across:

- **Compliance** (36 files): Children's Code (18 files across assessment, policies, DPIAs, evidence, ICO) + Cyber Essentials (18 files across readiness, policies, evidence, audit prep)
- **Entity restructure** (27 files): Current state audits, target state plan, restructure timeline, legal agreements (asset transfer, IP assignment, Companies House filings, TUPE), HMRC filings, banking, cost estimates
- **Exam board endorsement** (24 files): AQA and Edexcel endorsement workstreams
- **Examiner credentials** (10 files): Agreements, disclosures, evidence, acquirer perspective
- **Press kit** (17 files): Fact sheet, brand, founder story, boilerplate, press releases, media, contacts

---

## 9. Unit Economics Modelling

### 9a. Derivable price points (from code)

| Metric | Value | Source |
|--------|-------|--------|
| Student monthly ARPU | £8.99 | `src/constants/pricing.ts` |
| Student annual ARPU (effective) | £67.99/12 = £5.67 | Pricing constants |
| Teacher monthly ARPU | £12.99 | Pricing page (no distinct Stripe price) |
| Teacher annual ARPU (effective) | £99.99/12 = £8.33 | Pricing page |
| Parent (not live) | £4.99/mo | `PARENT_PLAN` in `src/lib/stripe.ts` |
| School (per-pupil standard) | £12-£26/pupil/yr | Sales materials + billing page `PRICING_TIERS` |
| School (founding, 50% off) | £6-£13/pupil/yr | Sales materials + billing page `founderPricePerPupil` |
| MAT (banded) | £7-£15/student/yr | MAT pricing model |
| International (banded, USD) | $9-$18/student/yr | International pricing |
| Stripe fees (UK default) | ~1.5% + 20p | Not coded (Stripe default) |
| Trial length | 30 days | `PRICING.TRIAL_DAYS` |
| Free premium uses | 3 per feature | `FREE_USES_PER_FEATURE` |
| Affiliate commission (monthly, Tier 1) | £5.99 | `002_affiliate_system.sql` |
| Affiliate commission (annual, Tier 1) | £10.00 | `002_affiliate_system.sql` |

### 9b. Gross margin sketch (B2C student, average usage)

| Line | Estimate | Notes |
|------|----------|-------|
| Revenue | £8.99 | Monthly subscription |
| Stripe fees | -£0.33 | 1.5% + 20p UK default |
| LLM cost (Anthropic) | -£0.40 | Claude Sonnet, ~10 marks/mo at ~£0.027/call |
| Hosting (Vercel + Supabase) | -£0.25 | Allocated per-MAU |
| Email (Resend) | -£0.05 | Weekly reports + transactional |
| **Gross profit** | **~£7.96** | **~89% GM** |

**Warning: LLM cost scales non-linearly.** At 30 marks/month, LLM cost rises to ~£0.80 (~9% of revenue). At 100 marks/month (exam season peak), LLM cost hits ~£2.70 (~30% of revenue). The marking endpoint (`api/mark/route.ts`) has a rate limit of 10 essays/day but **no monthly usage quota** once a user is on a paid plan. Unlimited AI marking on £8.99 is survivable at average usage but exposed to power users and exam-season surges. Content safety checks (v5) provide partial mitigation by blocking misuse but do not cap legitimate heavy usage.

### 9c. Effective affiliate take rate

| Plan | Commission | Revenue | Take rate (Month 1) | Payback months |
|------|-----------|---------|---------------------|----------------|
| Student monthly (Tier 1) | £5.99 | £8.99 | 67% | ~2-3 |
| Student annual (Tier 1) | £10.00 | £67.99 | 15% | <1 |
| Student monthly (Tier 3) | £12.00 | £8.99 | **133%** | ~4-5 |

Tier 3 monthly commission (£12.00) **exceeds month-1 revenue** (£8.99). This is unit-economically negative unless the subscriber retains for 4-5+ months. At current rates, the affiliate channel is loss-leading for monthly subscribers on higher commission tiers.

### 9d. Must-verify unknowns (all blank in data room)

- Blended CAC (by channel)
- Monthly gross logo churn (student vs school)
- Trial-to-paid conversion rate
- NRR (trailing 12)
- AI/LLM cost per active user per month (actual, not modelled)
- Hosting cost per MAU (actual)
- Gross margin by segment (B2C vs B2B)
- LTV/CAC ratio
- CAC payback period

### 9e. ARR scenario framework

Because no actuals exist, these are plausibility sketches. Assumptions: 50/50 annual/monthly mix for B2C (blended student ARPU ~ £87.93/yr; blended teacher ARPU ~ £127.94/yr).

**Scenario A — Founding cohort + modest self-serve (Year 1)**

| Line | Customers | ARPU | Annual revenue |
|------|-----------|------|----------------|
| Students (self-serve) | 500 | £87.93 | £43,965 |
| Teachers (self-serve) | 50 | £127.94 | £6,397 |
| Founding Schools (10 slots, mid-size) | 10 | £8,800 avg | £88,000 |
| **Total** | | | **~£138,362** |

**Scenario B — Post-founding growth + first MAT deal (Year 2)**

| Line | Customers | ARPU | Annual revenue |
|------|-----------|------|----------------|
| Students | 2,500 | £87.93 | £219,825 |
| Teachers | 250 | £127.94 | £31,985 |
| Founding renewals (8/10) | 8 | £17,600 avg (standard price) | £140,800 |
| First MAT deal (mid-sized, 6,500 students) | 1 | £64,350 | £64,350 |
| **Total** | | | **~£456,960** |

**Scenario C — B2B-led with productised school SKU + international (Year 3, speculative)**

| Line | Customers | ARPU | Annual revenue |
|------|-----------|------|----------------|
| Students | 5,000 | £87.93 | £439,650 |
| Teachers | 500 | £127.94 | £63,970 |
| Schools (post-founding, per-pupil) | 25 | £17,600 avg | £440,000 |
| MATs (3 deals) | 3 | £80,000 avg | £240,000 |
| International schools | 15 | £8,000 avg | £120,000 |
| Parent add-ons | 1,000 | £59.88 | £59,880 |
| **Total** | | | **~£1,363,500** |

**Caveat:** None of these scenarios is verifiable from the codebase. Founding school deals are off-Stripe, MAT deals exist only as sales documentation, and international deals have not started. B2B ARR must be tracked externally.

---

## 10. Entity Structure Issues

### 10a. Current state

The operating entity is **Upskill Energy Limited** (Companies House No. 16511479). This name:
- Does not match the trading brand ("The English Hub")
- Appears in the school billing page email address (`info@Upskillenergy.com`)
- Appears in the safeguarding policy page header ("Upskill Energy Limited, trading as The English Hub")
- Appears throughout the entity-restructure documentation as the entity to be wound down

### 10b. Planned restructure

The `business-docs/entity-restructure/` directory (27 files) documents a planned transition:

- **Current:** Upskill Energy Limited holds all contracts, IP, bank accounts, Stripe merchant, employees
- **Target:** A new entity "The English Hub Ltd" to be incorporated, receiving all assets via novation/assignment
- **Legacy:** Upskill Energy Ltd to go dormant then strike off via Form DS01

The restructure plan includes:
- Asset transfer agreement template
- IP assignment agreement template
- Companies House filings checklist
- TUPE employment transfer considerations
- HMRC VAT TOGC (Transfer of Going Concern) notes
- Banking migration plan
- Cost estimates for the restructure
- Customer communications plan

### 10c. Risk assessment

This is a **material transaction risk**. Any acquirer or investor will find:

1. **Name mismatch:** Operating entity name ("Upskill Energy") has zero brand connection to the product ("The English Hub"). This raises immediate questions about entity history, legacy trades, and residual liabilities.
2. **Incomplete restructure:** The entity-map-as-is template (`business-docs/entity-restructure/01-current-state/entity-map-as-is.md`) has **every field as a placeholder** — directors, share capital, bank accounts, tax references, IP ownership, employee details are all `[PLACEHOLDER]`.
3. **Stripe merchant risk:** Stripe account is registered to Upskill Energy Ltd. Migration to a new entity requires a new Stripe account, which involves re-verification and potential disruption to payment processing.
4. **No clean-exit readiness:** The target-state exit-readiness checklist has every box unticked.

**Recommendation:** The entity restructure should be the founder's top commercial priority. No acquirer will purchase "Upskill Energy Ltd" when the product is "The English Hub". The restructure documentation is well-planned but entirely unexecuted.

---

## 11. Revenue Verification Status

**Verified revenue: £0.**

Evidence for zero verified revenue:

1. Every financial template in `data-room/01-financials/` is empty.
2. Every KPI template in `data-room/08-metrics/` is empty.
3. The school billing page states "No invoices yet. You are on a free FOUNDER plan."
4. Founding Schools are free until 31 August 2026 (`FOUNDER_EXPIRY = new Date("2026-08-31T23:59:59Z")`).
5. No customer count data exists in the repo.
6. No PostHog integration in the codebase (confirmed in RUNBOOK.md). GA4 and Vercel Analytics are present but provide no revenue data.
7. The `cap-table-template.csv` and `contract-register-template.csv` are empty.

**What would constitute verification:**
- Stripe dashboard export showing MRR/ARR actuals
- Signed school contracts with payment evidence
- Bank statements showing subscription revenue deposits
- Populated KPI template with trailing-12-month actuals
- Customer count from Supabase `profiles` table with `subscription_status = 'pro'`

---

## 12. Business Model Risks and Recommendations

### 12a. Critical risks

| # | Risk | Severity | Detail |
|---|------|----------|--------|
| R1 | **Zero verified revenue** | Critical | No ARR, MRR, or customer count is verifiable from the codebase or data room. Any revenue claim is forward-looking. |
| R2 | **Entity structure** | Critical | Operating entity "Upskill Energy Ltd" does not match brand. Restructure planned but entirely unexecuted. All entity-map fields are placeholders. |
| R3 | **B2B revenue not productised** | High | 64 school pages + 39 API routes + sophisticated pricing frameworks, but zero Stripe integration for B2B. All school deals require manual email contact and off-Stripe invoicing. |
| R4 | ~~**School billing page vs sales materials pricing**~~ | ~~High~~ **Resolved (v3)** | Billing page now displays per-pupil `PRICING_TIERS` matching sales materials. |
| R5 | **LLM cost exposure** | Medium | Daily rate limit exists (10/day) but no monthly usage quota. Power users at exam season could compress GM from 89% to <70%. Content safety checks (v5) mitigate misuse but not legitimate heavy usage. |
| R6 | **Founding schools revenue cliff** | Medium | 10-logo cap, free until Aug 2026, no productised follow-on SKU. After founding cohort, B2B revenue line flatlines until per-pupil Stripe SKU ships. |
| R7 | ~~**AI opt-out is client-side only**~~ | ~~Low-Medium~~ **Resolved (v4)** | `isAiOptedOutServer()` now enforced in all 4 AI API routes via Prisma `PrivacySettings.aiOptOut`. Full defence-in-depth with audit trail. |

### 12b. Structural risks

| # | Risk | Detail |
|---|------|--------|
| R8 | **Seasonality** | GCSE exams run May-June. Expect July-August trough, June cancellation wave. Annual plan ratio matters more here than in typical SaaS. |
| R9 | **Exam specification risk** | Content is tightly aligned to AQA/Edexcel/OCR/WJEC/CAIE specifications. A spec re-issue (cycle ~4-7 years) forces content rewrites. |
| R10 | **Children's Code / Online Safety Act** | Product serves under-18s. Compliance surface is extensive (Children's Code policies, DPIAs, age verification, safeguarding) but a breach carries ICO enforcement risk (4% global turnover cap). Safeguarding signposting (v5), parent data deletion, server-side AI opt-out, content safety checks, and server-side cookie consent logging are positive mitigants — now the strongest compliance posture across all five review cycles. |
| R11 | **Affiliate cannibalisation** | Tier 3 monthly commission (£12.00) exceeds month-1 revenue (£8.99). Loss-leading channel at higher tiers. |
| R12 | **Key-person dependency** | Single-founder operation (explicit in entity-restructure docs). All sales are founder-led. All school relationships are founder-held. RUNBOOK.md, env validation, and migration script partially mitigate the technical dimension; the commercial dimension remains unmitigated. |
| R13 | **Teacher pricing identity** | £12.99 Teacher tier may route to the same Stripe price as £8.99 Student. If so, the pricing page is potentially misleading under ASA/consumer-protection standards. |
| R14 | **Remaining pricing inconsistencies** | Affiliate commission tables still mismatched between public page and DB defaults. Billing email still uses legacy entity name. |
| R15 | **PII in school exports** | Email addresses are included in all 5 school CSV export endpoints (`export/users`, `export/report`, `export/logins`, `export/route.ts`, `export/template`). Under GDPR data-minimisation principles, analytics/progress exports should not include personal email addresses unless strictly necessary. Schools downloading and circulating these CSVs creates a data-leakage surface. | 

### 12c. Recommendations

**Immediate (pre-transaction):**

1. **Populate the financial data room.** At minimum: trailing-3-month MRR from Stripe, customer count by tier, trial-to-paid conversion rate, monthly churn rate, LLM cost per active user.
2. **Execute entity restructure.** Incorporate "The English Hub Ltd", transfer IP and contracts, migrate Stripe merchant account. This is the single biggest blocker to any transaction.
3. **Reconcile remaining pricing inconsistencies.** Create distinct Teacher Stripe price ID. Reconcile affiliate commission tables. Fix billing email from `info@Upskillenergy.com` to a branded address.
4. **Ship AI marking monthly quota.** Implement per-user monthly cap (e.g., 50 marks/month on Student plan) to protect gross margin beyond the existing daily rate limit.
5. **Remove PII from analytics exports.** Strip email columns from `export/report` and the general `export/route.ts` analytics CSV. Retain email only in `export/users` (roster management) and `export/logins` (credential distribution). This is a quick GDPR data-minimisation win.

**Near-term (3-6 months):**

6. **Productise B2B Stripe SKU.** Create per-seat annual Stripe price for schools. Enable self-serve school checkout. This converts the 64-page B2B surface from sales theatre into a revenue engine.
7. **Launch Parent tier.** Backend routes exist; needs Stripe price creation, env var, webhook extension. Low-effort, ~£2-3 ARPU uplift per student household. Data deletion flow is already built — a strong compliance selling point.
8. **Ship one-time course SKUs.** 9 course price IDs are wired; populate Stripe dashboard to activate pay-per-course fallback for non-subscribers.
9. **Implement product analytics.** PostHog is not installed (confirmed in RUNBOOK.md). Wire PostHog or Mixpanel for funnel tracking. The `monthly-kpi-template.csv` has correct column headers — now feed them real data.
10. **Build multi-step dunning.** Current single payment-failed email is insufficient. Implement 3-5 step dunning cadence.

**Growth levers (built but inactive):**

11. **Annual plan default toggle.** 37% discount is a strong lever to smooth seasonality. Make annual the pre-selected option on the pricing page.
12. **Bundle SKU activation.** `PRICE_IDS.BUNDLE` is wired but not surfaced.
13. **Affiliate programme scaling.** Infrastructure is production-grade. Recruit tutors, education influencers, and teacher networks.
14. **International expansion.** 200-school target list, 18-currency pricing, regional analysis all exist. Needs a dedicated sales motion.
15. **Trial length A/B test.** 30 days is generous for a revision tool. Test 14-day trials against 30-day for new signups.

---

## Bottom Line for Investment Committee

**Positives:**
- Stripe integration is production-grade and demonstrates genuine operator rigour (DMCC compliance, affiliate attribution, commission voiding, trial-ending notifications).
- B2B product surface (64 pages, 39 API routes, 5-step onboarding wizard) is the deepest we have seen in a pre-revenue EdTech SaaS.
- Sales enablement (58 files) is exceptionally thorough: per-pupil pricing frameworks, MAT banded pricing with multi-year discounts and true-up mechanics, international pricing in 18 currencies, complete outreach sequences.
- School billing page displays per-pupil pricing aligned to sales materials — the pricing inconsistency from v2 remains resolved.
- DMCC Act subscription compliance module is a genuine differentiator for UK consumer-subscription businesses.
- **Safeguarding signposting system** (v5) — persistent banner, policy pages, multi-step concern form with severity classification, Prisma-backed API with DSL email alerts and admin case management — directly answers the KCSIE procurement question that every UK school will ask. This is a material B2B sales differentiator.
- **Content safety checks** (v5) protect AI marking endpoints from prompt injection, essay generation misuse, and non-prose submissions — supporting the responsible-AI narrative for both regulatory and B2B contexts.
- AI opt-out is server-side enforced across all four AI API routes with Prisma-backed persistence and audit trail — the v3 compliance gap is closed.
- Cookie consent is server-side logged with hashed IP, policy versioning, and timestamped audit trail — materially strengthens PECR/ICO compliance posture.
- **Technical transferability is now strong:** RUNBOOK.md, env-validation module with tiered variable checking, idempotent migration applicator script, bundle analyzer integration, and green test suite collectively de-risk the "can we run this without the founder?" question for any acquirer's engineering team.
- Compliance documentation (Children's Code, Cyber Essentials, safeguarding) is extensive and backed by functional parent data deletion, server-side AI opt-out, content safety checks, server-side cookie consent, and safeguarding reporting mechanisms.

**Negatives:**
- Zero verified revenue. Financial data room is entirely empty templates.
- Entity structure is wrong: "Upskill Energy Ltd" is not "The English Hub Ltd". Restructure is planned but unexecuted.
- B2B revenue is not productised in Stripe. All school deals require manual email and off-Stripe invoicing.
- Affiliate commission tables still mismatched between DB and public page; Tier 3 monthly remains unit-economically negative.
- Key-person risk is high. Single-founder operation with all sales relationships founder-held. Technical transferability tools mitigate engineering risk only.
- PostHog/Mixpanel not installed — no product analytics pipeline to feed the KPI templates.
- PII email fields remain in all school CSV exports — a GDPR data-minimisation gap (R15).

**Net v4-to-v5 movement:** Positive. The safeguarding signposting system is the most commercially significant addition in this cycle — it provides a direct, verifiable answer to the KCSIE procurement question that is a gate in every UK school buying decision. The migration script, env validation, and bundle analyzer collectively strengthen acquisition readiness by making the codebase independently operable. Content safety checks add responsible-AI depth. PII in exports is a new finding (R15) requiring attention. No change to the fundamental revenue-verification gap or entity-structure blocker — those require business execution, not code.

**Final assessment across all five review cycles:** The English Hub presents as a technically mature, compliance-aware EdTech SaaS with the deepest pre-revenue B2B product build and sales enablement we have reviewed. The code quality, compliance posture, and operational documentation are investment-grade for a seed-stage startup. The two blockers — zero verified revenue and mismatched entity structure — are business-execution items, not technical deficiencies. The product is ready to generate revenue; the business has not yet done so.
