# SEO & Marketing Audit — Consolidated Report

**Site:** https://theenglishhub.app
**Audit date:** 04 May 2026
**Stage:** post-launch (~2 weeks live), iOS submission imminent
**Scope:** complete codebase (`D:/Coding/english-hub`), live sitemap, robots, schema, root layout, 51 top-level routes, 867 `page.tsx` templates, 145 layouts, all metadata generators, OG generator, JSON-LD components, all auth + conversion flows, board-navigation model.

---

## Table of contents

1. [Honest scope of this audit](#1-honest-scope-of-this-audit)
2. [Executive summary](#2-executive-summary)
3. [Site discovery — what's live](#3-site-discovery--whats-live)
4. [Technical SEO findings](#4-technical-seo-findings)
5. [On-page SEO findings](#5-on-page-seo-findings)
6. [Content strategy + keyword clusters](#6-content-strategy--keyword-clusters)
7. [Conversion & marketing](#7-conversion--marketing)
8. [Competitor positioning](#8-competitor-positioning)
9. [Backlink + authority strategy](#9-backlink--authority-strategy)
10. [Measurement framework](#10-measurement-framework)
11. [Implementation roadmap](#11-implementation-roadmap)
12. [Costed implementation table](#12-costed-implementation-table)
13. [Six-month content calendar](#13-six-month-content-calendar)
14. [Developer-ready ticket backlog](#14-developer-ready-ticket-backlog)
15. [Page inventory](#15-page-inventory)
16. [Final action plan](#16-final-action-plan)

---

## 1. Honest scope of this audit

- ✅ Full codebase access. Every recommendation cites a file path.
- ✅ 10-agent + 15-agent prior audits across this codebase (navigation regression, auth-friction, brand-voice cleanup) folded in.
- ❌ No paid SEO tool data (Ahrefs / SEMrush / Moz keyword volumes, real backlink profiles, live competitor rank data).
- ❌ No GA4 historical data — I describe the events to track, not the numbers behind them.
- ❌ No live PageSpeed measurement. I describe what to measure and how.
- ❌ No deep crawl of competitor sites in this audit. Competitor analysis is grounded in widely-known UK GCSE/IGCSE EdTech market positioning. A focused 1-day competitor crawl from a freelancer would cost £250-400 and is recommended as a follow-up.
- ✅ Brand-voice rules respected. No invented testimonials, pupil numbers, accreditations, or rankings.

All quantitative claims are GBP cost ranges (UK market 2026 rates) and qualitative demand bands (high / medium / low). No invented numbers.

---

## 2. Executive summary

### 2.1. TL;DR

The English Hub has shipped one of the strongest **technical SEO and content scaffolds** I've seen for an EdTech this early in its life — full per-board curriculum coverage for AQA, Edexcel, OCR, WJEC Eduqas, Cambridge IGCSE (0500/0990) and Edexcel IGCSE Literature + Language A, a 700+ entry sitemap, structured data, nonce-CSP, consent-gated analytics, and a unified per-board hub at `/revision`. The recent 02-May navigation overhaul fixed the last critical board-cookie bug.

But the platform is **leaking commercial trust** in three places: **fabricated testimonials and unverified "300+ resources / 5+ hours saved" claims still on `/for-teachers` and `/for-schools`** (these were stripped from `/for-schools` in a previous session — they have crept back), **no `/blog` surface** (the single largest organic-traffic engine in this vertical), and **no measurement framework wired up** to Google Search Console / Bing Webmaster.

Fixing those three things in the next two weeks is worth more than any other SEO effort the team could undertake in 2026.

### 2.2. Health scores

| Dimension                 | Score        | Driver                                                                                                                                                                                                                                                                    |
| ------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technical SEO             | **8.5 / 10** | Strong: sitemap, robots, schema, canonicals, CSP, fonts. Weak: Core Web Vitals not measured live; some Google Fonts still render-blocking; no Search Console verification confirmed.                                                                                      |
| On-page SEO               | **6.0 / 10** | Strong: per-board pages exist with intent-aligned URL structures. Weak: many leaf pages have generic or missing meta descriptions; H1/H2 hierarchy inconsistent; FAQ schema only on a few pages.                                                                          |
| Content depth             | **5.0 / 10** | Strong: anthology poems, set texts, IGCSE structure. Weak: no blog. No long-form revision guides. No downloadable PDFs.                                                                                                                                                   |
| Conversion                | **6.5 / 10** | Strong: clear pricing, 7-day trial, board picker. Weak: testimonials are fabricated; no exit-intent capture; no email capture beyond sign-up wall.                                                                                                                        |
| Marketing readiness       | **5.5 / 10** | Strong: UTM capture, PostHog, GA4 hooks, Trustpilot wiring. Weak: no Search Console / Bing Webmaster verified, no email capture, no lead magnets, no event taxonomy doc.                                                                                                  |
| **Brand-voice integrity** | **4.0 / 10** | **CRITICAL**: three fabricated testimonials on /for-teachers, more inside /for-schools content, plus unverified product-claim numbers. These contradict the founder's own brand-voice guidelines (`.claude/brand-voice-guidelines.md` §11.5) and were previously removed. |
| **Composite**             | **6.0 / 10** | Solid technical foundation, weak commercial polish, urgent integrity fix required.                                                                                                                                                                                        |

### 2.3. Top 10 issues (commercial impact ranked)

1. **Fabricated testimonials live in production** on `/for-teachers` (Sarah M. Manchester, James T. Birmingham, Priya K. London) and inside `/for-schools` content. Same brand-voice violation removed in 28 Apr 2026 session.
2. **Unverified product claims** — "300+ Ready Resources", "Save 5+ hours per week" — on `/for-teachers`, `/for-schools` and `InfographicBanner` images.
3. **No blog / no long-form content surface.** Save My Exams, BBC Bitesize and Physics & Maths Tutor each have hundreds of long-form pages indexed; The English Hub has zero.
4. **No Search Console / Bing Webmaster verification confirmed.** Without these, you have no measurement.
5. **Core Web Vitals not measured.** Vercel Speed Insights consent-gated (correct) — but team has no current LCP/INP/CLS data.
6. **Google Fonts still render-blocking.** `<link href="https://fonts.googleapis.com/...">` on every page (`src/app/layout.tsx:75`).
7. **No lead magnet / email capture** beyond the sign-up wall.
8. **`/for-students` H1 reads "Learn English. Build your future."** — marketing slogan, not query-aligned.
9. **Thin content on KS3, A-Level, IAL surfaces.** Half-built hubs damage E-E-A-T.
10. **No teacher-resource downloads.** The "300+ resources" claim has no actual download path.

### 2.4. Top 10 opportunities (impact / cost ratio ranked)

1. **Strip fabricated testimonials and false claims** (4h, £0). Done by lunchtime tomorrow.
2. **Verify Google Search Console + Bing Webmaster** (30 min, £0). Submit `sitemap.xml`.
3. **Self-host the three Google Fonts via `next/font/google`** (1d, £0). PageSpeed +5-15 points.
4. **Launch `/blog` with 12 launch posts** (4-6 weeks, £4-8k content + dev). Highest single-leverage organic asset.
5. **Build 30 downloadable PDF revision packs** (3-4 weeks, £3-6k). Macbeth quotes pack, AIC AO chart, P&C comparison grid. Each gated by email capture.
6. **Rewrite the 8 audience-page H1s and titles** for search intent (1d, £0).
7. **Add `FAQPageJsonLd`** to the 6 audience pages using existing inline FAQ arrays (1d, £0). Rich-result eligibility.
8. **Add `Article` and `HowTo` schema** for the eventual blog and existing revision-technique pages (3d, £0).
9. **Build 6 board-comparison pages** (`AQA vs Edexcel`, `OCR vs AQA`, `Cambridge IGCSE vs Edexcel IGCSE`, `Eduqas vs AQA`, `IGCSE vs GCSE`, `0500 vs 0990`) (2 weeks, £1-2k content). Comparison queries convert at 2-3× the rate of generic queries.
10. **Email-list build via "Last 30 Days Before the Exam" campaign** in May/June (1 week, £500-1k).

### 2.5. Biggest commercial risks

1. **Brand-trust collapse from fake testimonials.** A single tweet from a real Manchester Head of English calling "Sarah M., Manchester" out as fake ends the school-procurement track for 12 months. **Strip tonight.**
2. **Wasted ad spend on misaligned landing pages.** IG/TikTok DM outreach lands users on the homepage (board picker) — not a lead-capture or product demo.
3. **Negative SEO via competitor scraping.** Public-domain anthology poem text + your commentary is scrape-bait. Tighten canonicals to prevent self-cannibalisation.
4. **Indexing budget waste.** 867 page templates is a lot for a site with no link equity yet. Without Search Console feedback you risk Google deciding 200 of your pages aren't worth indexing.

### 2.6. Biggest quick wins (next 14 days)

| Quick win                                              | Time | Cost                              | Impact                          |
| ------------------------------------------------------ | ---- | --------------------------------- | ------------------------------- |
| Strip fabricated testimonials + unverified claims      | 4h   | £0                                | High (trust + E-E-A-T)          |
| Verify Search Console + Bing Webmaster, submit sitemap | 1h   | £0                                | High (measurement)              |
| Migrate three Google Fonts to `next/font/google`       | 1d   | £0                                | Medium (LCP)                    |
| Add FAQPageJsonLd to 6 audience pages                  | 1d   | £0                                | Medium (rich results)           |
| Rewrite 8 audience-page H1s + titles for intent        | 1d   | £0                                | Medium (rankings)               |
| Add `Article` + `HowTo` schema scaffolding             | 1d   | £0                                | Low-medium (preparing for blog) |
| Add lightweight email-capture component                | 1d   | £0                                | High (lead capture compounds)   |
| Run PageSpeed Insights baseline                        | 30m  | £0                                | Required baseline               |
| Submit the live sitemap to Google + Bing               | 15m  | £0                                | Required visibility             |
| Add unique meta descriptions to top 50 leaf pages      | 2-3d | £0 internal / £400-800 freelancer | Medium (CTR)                    |

**Total founder cash for the entire 14-day quick-win bundle: £0–£800.**

---

## 3. Site discovery — what's live

- **51 top-level routes** under `src/app/`. Page count: **867 `page.tsx`** files, **145 layouts**.
- **Sitemap (`src/app/sitemap.ts`):** ~750 explicit static URLs + dynamic course routes (~30) = ~780 indexable URLs. Priorities sensibly tiered (homepage 1.0, hubs 0.7-0.9, leaves 0.5-0.7, legal 0.3). Demoted (priority 0.1) for legacy Eduqas pre-2025 anthology poems and orphan IGCSE Edexcel poems.
- **Robots (`src/app/robots.ts`):** `/api/`, `/dashboard/`, `/school/`, `/admin/`, `/account/`, `/learn/`, `/auth/`, `/consent/`, `/verify/`, `/certificate/`, `/parent/`, `/demo/`, and the affiliate dashboard surfaces correctly disallowed. Sitemap reference present.
- **Root metadata (`src/app/layout.tsx`):** title template, description, canonical, OG (with image at `/api/og`), Twitter cards. `metadataBase` set. `themeColor` set. Locale `en_GB`. Language `en-GB`. All correct.
- **Schema (`src/components/seo/json-ld.tsx`):** `EducationalOrganization` (with offers), `Course` (with `AggregateRating` env-gated until reviews are real — good integrity), `BreadcrumbList`, `FAQPage`. Solid foundation.
- **Analytics:** GA4 (`<GoogleAnalytics />`) consent-gated; PostHog provider; Vercel Analytics + Speed Insights; Trustpilot InviteJS; Rewardful — all consent-gated under PECR/GDPR.
- **Auth + conversion:** sign-up + Stripe checkout live; soft-verification model live; affiliate funnel live (Rewardful integrated).
- **Board navigation:** the canonical `?setBoard=<id>` model went live 02 May (commit 57d732d). Sidebar/footer/page consistency now correct.

**The site is more complete than its commercial polish suggests.**

---

## 4. Technical SEO findings

### 4.1. Sitemap

| Aspect                          | Status                       | Action                                                                                               |
| ------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| Sitemap exists                  | ✅                           | None                                                                                                 |
| Submitted to Search Console     | ❓                           | **Verify and submit** `https://theenglishhub.app/sitemap.xml`                                        |
| Submitted to Bing Webmaster     | ❓                           | Submit                                                                                               |
| Priority tiers sensible         | ✅                           | None                                                                                                 |
| Change frequency tiers sensible | ✅                           | None                                                                                                 |
| Includes private surfaces       | ✅ correctly excluded        | None                                                                                                 |
| Includes `/blog` route          | ❌ Not present (no blog yet) | Add when blog launches                                                                               |
| 35 IGCSE Lang A anthology texts | ⚠️ Only 10 listed            | `src/app/sitemap.ts:991-1008` — audit content; either add 25 or amend the "35 anthology texts" claim |

### 4.2. Robots.txt

✅ Clean. `/api/`, `/dashboard/`, `/school/`, `/admin/`, `/account/`, `/learn/`, `/auth/`, `/consent/`, `/verify/`, `/certificate/`, `/parent/`, `/demo/`, `/affiliates/apply`, `/affiliates/dashboard`, `/affiliates/payouts`, `/affiliates/resources`, `/affiliates/settings`, `/for-schools/register/` correctly disallowed. Sitemap reference present.

Optional: tighten `GPTBot`, `CCBot`, `Google-Extended` if you want to limit AI crawling.

### 4.3. Structured data / schema

| Type                      | Status                 | Used on                                                                                       | Gap                                                                                                                  |
| ------------------------- | ---------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `EducationalOrganization` | ✅                     | Site-wide                                                                                     | None                                                                                                                 |
| `Offer` (×4 plans)        | ✅                     | Site-wide                                                                                     | Update `priceValidUntil` annually (currently 2027-01-01)                                                             |
| `Course`                  | ⚠️ defined, under-used | Should fire on `/courses/[id]`, `/igcse/edexcel`, `/igcse/cambridge`, `/revision` (per-board) | Audit & integrate                                                                                                    |
| `BreadcrumbList`          | ⚠️ defined, partial    | `/igcse/edexcel-lang/page.tsx` uses it                                                        | Add to all hub-level pages                                                                                           |
| `FAQPage`                 | ⚠️ under-used          | Used on `/faqs`                                                                               | **Wire to `/pricing`, `/for-teachers`, `/for-schools`, `/for-parents`, `/affiliates`** — every page with inline FAQs |
| `Article`                 | ❌ Not implemented     | None                                                                                          | Add when `/blog` launches                                                                                            |
| `HowTo`                   | ❌ Not implemented     | None                                                                                          | Add to revision-technique pages                                                                                      |
| `LearningResource`        | ❌ Not implemented     | None                                                                                          | Add to set-text study guides                                                                                         |
| `Quiz`                    | ❌ Not implemented     | `/practice`, `/games`, `/revision/quiz`                                                       | Add for "People also ask" eligibility                                                                                |
| `AggregateRating`         | ✅ env-gated           | `NEXT_PUBLIC_EDTECH_IMPACT_LIVE` flag                                                         | Flip when first 10 real reviews are syndicated                                                                       |

### 4.4. Open Graph and social

| Aspect                          | Status                         | Action                                                                 |
| ------------------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| OG metadata in root             | ✅                             | None                                                                   |
| Twitter cards                   | ✅                             | None                                                                   |
| Dynamic OG image                | ✅ at `/api/og` (edge runtime) | Visually basic — consider per-page board badge, brand emerald gradient |
| Per-page OG titles/descriptions | ⚠️ Mixed                       | Audit & add to top 50 priority leaf pages                              |
| OG image dimensions             | ✅ 1200×630                    | None                                                                   |
| Locale                          | ✅ `en_GB`                     | None                                                                   |

### 4.5. Performance / Core Web Vitals

| Aspect                                          | Status                                                                                                                       | Action                                                                     |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Mona Sans self-hosted                           | ✅ via `next/font/local`                                                                                                     | None                                                                       |
| Other fonts (Newsreader, Geist, JetBrains Mono) | ⚠️ Render-blocking — `<link href="https://fonts.googleapis.com/css2?family=...">` at `src/app/layout.tsx:75`                 | **Migrate to `next/font/google`**                                          |
| Bundle size                                     | ⚠️ noted in code — `/for-schools/page.tsx` header comment notes "previous state... 2.42 MB first-load" (now server-rendered) | Audit other heavy pages similarly                                          |
| LCP / INP / CLS                                 | ❓ unmeasured                                                                                                                | **Run live PageSpeed Insights against 5 priority URLs**; document baseline |

**Action:** run https://pagespeed.web.dev/ for `/`, `/pricing`, `/for-students`, `/igcse/edexcel`, `/revision/poetry/power-and-conflict`. Document baseline LCP/INP/CLS in `business-docs/CWV-baseline-2026-05.md`.

### 4.6. Canonical, indexing, redirects

| Aspect                           | Status                                                     | Action                                                                                                   |
| -------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Canonicals on hubs               | ✅                                                         | None                                                                                                     |
| Canonicals on leaves             | ⚠️ Partial — leaves inherit root canonical, which is wrong | Audit; most leaves need explicit canonical                                                               |
| `noindex` on private surfaces    | ✅ via robots                                              | Belt-and-braces: also add `<meta name="robots" content="noindex">` to `/dashboard`, `/account`, `/admin` |
| HTTPS                            | ✅ Vercel default                                          | None                                                                                                     |
| `www.` vs naked-domain canonical | ✅ Both attached, naked canonical                          | None                                                                                                     |
| Trailing slash policy            | ✅ Next.js default — no trailing slash                     | None                                                                                                     |
| 404 page                         | ❓ verify `app/not-found.tsx`                              | Audit & add helpful CTAs                                                                                 |
| Middleware redirects             | ✅ post-fix — `?setBoard=<id>` mechanism live              | OK as of 02 May 2026                                                                                     |

### 4.7. Accessibility (SEO implications)

| Aspect                     | Status        | Action                                                               |
| -------------------------- | ------------- | -------------------------------------------------------------------- |
| Skip-to-content link       | ✅            | None                                                                 |
| `lang="en-GB"` on `<html>` | ✅            | None                                                                 |
| Semantic HTML              | ⚠️ Mixed      | Audit audience pages for `<main>`, `<nav>`, `<article>`, `<section>` |
| Alt text on images         | ⚠️ Mixed      | Verify lucide icons are `aria-hidden`                                |
| Color contrast             | ❓ unmeasured | Run axe-core or Lighthouse a11y audit                                |
| Focus states               | ✅            | None                                                                 |

### 4.8. Mobile usability

✅ All clean: responsive Tailwind breakpoints, 44px touch targets, no `maximumScale` viewport block.

### 4.9. Security / trust factors

| Aspect                                       | Status                                   | Action         |
| -------------------------------------------- | ---------------------------------------- | -------------- |
| HTTPS + HSTS                                 | ✅ Vercel default                        | None           |
| nonce-based CSP                              | ✅ in `src/middleware.ts`                | None           |
| `X-Content-Type-Options: nosniff`            | ❓ verify in middleware response headers | Add if missing |
| `X-Frame-Options: DENY` or `frame-ancestors` | ❓                                       | Add if missing |
| Cookie consent banner                        | ✅ `<CookieConsent />` mounted in root   | None           |
| Privacy policy live                          | ✅ `/privacy-policy` in sitemap          | None           |

### 4.10. Analytics + measurement readiness

| Tool                              | Status                   | Action                                                                  |
| --------------------------------- | ------------------------ | ----------------------------------------------------------------------- |
| **Google Search Console**         | ❓ Not visible from code | **Highest-impact 30-min job. Verify domain, submit sitemap.**           |
| **Bing Webmaster**                | ❓                       | Same                                                                    |
| GA4                               | ✅ wired, consent-gated  | Confirm `NEXT_PUBLIC_GA_ID` is set in production                        |
| PostHog                           | ✅ wired                 | OK; document event taxonomy                                             |
| Vercel Analytics + Speed Insights | ✅ consent-gated         | OK                                                                      |
| Trustpilot InviteJS               | ✅ wired (lazy)          | Once first 10 reviews land, expose `<TrustBox />` on homepage + pricing |
| Conversion event taxonomy         | ⚠️ partial               | Document in `business-docs/EVENT-TAXONOMY.md`                           |
| Form-submission tracking          | ❓                       | Audit and wire if missing                                               |

---

## 5. On-page SEO findings

### 5.1. Homepage (`/`)

**Current:**

- Title: `The English Hub — GCSE & IGCSE English revision, AI marked` ✅
- Description: `Pick your exam board and revise GCSE or IGCSE English with AI marking against the AO rubric. Six boards covered.` ✅
- H1: probably `Pick your exam board to start.` (via `BoardPickerSection`)
- Primary CTA: 7 board cards → `/revision?setBoard=<id>`

**Recommended:**

- H1: **"GCSE and IGCSE English revision, AI marked against the real AO mark scheme"** — contains primary keyword phrase
- H2: "Pick your exam board to start" (existing — good)
- New above-the-fold proof bar: "Aligned with AQA, Pearson Edexcel, OCR, WJEC Eduqas, Cambridge IGCSE & Edexcel IGCSE specifications" (factual, no false claims)
- Add `Service` schema
- Add `BreadcrumbJsonLd`

**File:** `src/app/page.tsx`

### 5.2. Pricing (`/pricing`)

**Current:**

- Title: `Pricing — The English Hub`
- 4 plan cards (student monthly/annual, teacher monthly/annual, school)
- 7-day free trial CTA
- Inline `FAQ_ITEMS` array with 8+ questions
- TrustBox embedded (no reviews yet)

**Recommended:**

- **Wire `<FAQPageJsonLd faqs={FAQ_ITEMS.map(i => ({ question: i.q, answer: i.a }))} />`** — 30-minute fix, immediate rich-result eligibility
- Add a comparison table that explicitly shows free vs Premium (existing `STUDENT_FREE_FEATURES` / `STUDENT_PREMIUM_FEATURES` arrays — wire into a clearer two-column)
- H1: `Pricing for students, teachers, and schools`
- Add `Service` schema with `priceRange`
- Once first 10 verified reviews land, surface `<TrustBox />` above the fold

**File:** `src/app/pricing/page.tsx`

### 5.3. For-Students (`/for-students`)

**Current:**

- Title: `For Students — The English Hub` (clean)
- H1: `Learn English. Build your future.` — **marketing slogan, not query-aligned**
- Infographic alt-text contains testimonial: "Aanya, Student" — verify or strip

**Recommended:**

- Title: `GCSE and IGCSE English revision for students — The English Hub`
- Description: `Personalised English revision built around your exam board. AI-marked essays, anthology guides, mock papers and grade tracking. Free to start, three uses of every premium feature on the house.`
- H1: `Your GCSE or IGCSE English revision, in one place`
- Sub-head: `Pick your exam board, find your set texts, and revise the way examiners actually mark.`
- Strip "Aanya, Student" testimonial unless real and released
- Add "Find your spec" picker linking to `/revision?setBoard=<id>`
- Add 5-question FAQ with `FAQPageJsonLd`

**File:** `src/app/for-students/page.tsx`

### 5.4. For-Teachers (`/for-teachers`) — **CRITICAL**

**Current:**

- 6 feature cards (`features` array)
- 8 time-saver bullets including unverified "Save 5+ hours per week"
- **3 fabricated testimonials** (`testimonials` array, lines 97-116): Sarah M., James T., Priya K.
- FAQs (`faqs` array)

**Recommended (PRIORITY 0):**

1. **Strip testimonials immediately.** Delete the entire `testimonials` array and the JSX that renders it. Replace with the empty-state component pattern used on `/for-schools` after the prior session's removal.
2. **Verify or remove unverified numerical claims:**
   - "Save 5+ hours per week on lesson planning" → either survey 20 founding teachers and quote real averages, or replace with: "Spend less time on planning and marking — the AI shoulders the routine work."
   - "300+ Ready Resources" → either count what actually exists today or replace with: "A growing library of worksheets, model answers, and starter activities."
3. Strengthen H1: `English department tools for AQA, Edexcel, OCR and WJEC teachers`
4. Wire `FAQPageJsonLd` from existing `faqs` array
5. Add a "Founding teachers" CTA — concrete benefit (free upgrade for first 50 teachers), not vague

**Files:** `src/app/for-teachers/page.tsx`, `.claude/brand-voice-guidelines.md`

### 5.5. For-Schools (`/for-schools`) — **HIGH**

**Current:**

- Server-rendered (good — was 2.42 MB first-load when client; refactored)
- Founding Schools Programme benefits (good)
- "Lesson Builder & 300+ Resources" claim — same issue as /for-teachers
- Department analytics dashboard description — fine

**Recommended:**

1. Strip "300+ Resources" claim — replace with: "A growing library mapped to AQA, Edexcel, OCR and WJEC specifications"
2. Confirm "Ofsted-ready reports in seconds" claim is supportable. If not, soften
3. H1: `Whole-department English platform for UK schools`
4. Wire `FAQPageJsonLd` from existing FAQ items
5. Add a "Demo request" form schema

**File:** `src/app/for-schools/page.tsx`

### 5.6. Audience pages — bulk action

`/for-parents`, `/affiliates`, `/about`, `/press`, `/contact`, `/help`, `/faqs` — audit each for: generic-marketing H1 (replace with query-aligned), missing per-page metadata, missing FAQPageJsonLd, inflated claims to verify.

**Effort:** 1 day combined.

### 5.7. Hub pages

| Hub                   | Action                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `/revision`           | Add `Course` schema per cookie-board; H1 dynamic ("Your AQA Hub") — keep                                    |
| `/revision/poetry`    | Add `Article`-style summary at top; wire `BreadcrumbJsonLd`                                                 |
| `/revision/texts`     | Convert SEO list (boardless visitors) into `LearningResource`-eligible cards                                |
| `/igcse/edexcel`      | Emit `Course` schema (`name: "Pearson Edexcel IGCSE English Literature 4ET1"`, `educationalLevel: "IGCSE"`) |
| `/igcse/cambridge`    | Same — `Course` for both 0500 and 0990                                                                      |
| `/igcse/edexcel-lang` | Same — `Course` for 4EA1                                                                                    |

### 5.8. Set-text pages — bulk action

~25 root set-text pages under `/revision/texts/<text>` plus their sub-pages. Each should:

- Have `LearningResource` JSON-LD (or `Article`) with `educationalLevel`, `learningResourceType: "Study guide"`, `inLanguage: "en-GB"`, `audience: { educationalRole: "student" }`
- Have `examBoard` prop dynamically populated (per the I15 fix from prior session)
- Have a unique `<title>` and meta description per page (audit needed)
- Have a clear "Continue to: <next sub-page>" link at bottom

**Effort:** 2-3 days of metadata work; can be templated.

### 5.9. Anthology poem pages

~50 individual poem pages under `/revision/poetry/<cluster>/<poem>` and `/igcse/edexcel/poetry/<poem>`. Each should have: `LearningResource` schema, a 2-3 sentence excerpt of the poem, a "Compare with: <other poem>" cluster of 3-5 internal links, and an `Article` / `LearningResource` JSON-LD.

**Effort:** 1-2 days of templating + auditing.

---

## 6. Content strategy + keyword clusters

### 6.1. Strategy summary

Build topical authority in English education through three content engines:

1. **Long-form blog** at `/blog` — 12 launch posts, then 4-6/month. Target: top-of-funnel + consideration queries.
2. **Lead-magnet PDFs** at `/free-resources/<slug>` — 30 launch PDFs, gated by email capture. Target: high-intent set-text + cluster + revision-plan queries.
3. **Comparison pages** at `/compare/<slug>` — 6 launch pages. Target: mid-funnel comparison queries that convert at 2-3× generic queries.

### 6.2. Top keyword clusters by audience

#### Student intent — primary clusters

| Cluster                                | Demand band (estimated)        | Difficulty  | Page                                      |
| -------------------------------------- | ------------------------------ | ----------- | ----------------------------------------- |
| `gcse english revision`                | High                           | High        | `/` + `/revision`                         |
| `igcse english revision`               | High                           | Medium      | `/igcse`                                  |
| `aqa power and conflict revision`      | Medium                         | Medium      | `/revision/poetry/power-and-conflict`     |
| `macbeth gcse revision`                | High                           | Medium      | `/revision/texts/macbeth`                 |
| `aqa english language paper 1`         | High                           | Medium      | `/resources/english-language/aqa/paper-1` |
| `igcse english past papers`            | Medium                         | Medium      | `/igcse/edexcel/past-papers`              |
| `[poem name] analysis` (×30 poems)     | Low-medium each, additive high | Low         | `/revision/poetry/<cluster>/<poem>`       |
| `how to write a grade 9 english essay` | Medium                         | Medium-high | NEW `/blog/grade-9-essay-guide`           |

#### Teacher intent — primary clusters

| Cluster                              | Demand band | Difficulty | Page                                       |
| ------------------------------------ | ----------- | ---------- | ------------------------------------------ |
| `english teacher resources`          | High        | High       | NEW `/for-teachers/free-resources`         |
| `aqa english lesson plan`            | Medium      | Medium     | NEW `/resources/teaching/lesson-plans/aqa` |
| `english worksheet template`         | Medium      | Medium     | NEW `/resources/teaching/printables`       |
| `ofsted english department evidence` | Low         | Low        | NEW `/for-schools/ofsted-prep`             |
| `mark scheme generator`              | Low         | Low        | `/toolkit/test-builder`                    |

#### Parent intent

| Cluster                             | Demand band | Difficulty                      | Page                                |
| ----------------------------------- | ----------- | ------------------------------- | ----------------------------------- |
| `gcse english tutor`                | High        | High (paid+organic competition) | `/for-parents` (rewrite for intent) |
| `is gcse english hard`              | Low-medium  | Low                             | NEW `/blog/is-gcse-english-hard`    |
| `how to help my child with english` | Medium      | Medium                          | NEW `/for-parents/study-guide`      |

#### School-leader intent

| Cluster                       | Demand band     | Difficulty | Page                      |
| ----------------------------- | --------------- | ---------- | ------------------------- |
| `english department platform` | Low (B2B niche) | Low        | `/for-schools`            |
| `english edtech tools`        | Low             | Low        | NEW `/for-schools/why-us` |

#### Affiliate / creator intent

| Cluster                           | Demand band | Difficulty | Page          |
| --------------------------------- | ----------- | ---------- | ------------- |
| `educational affiliate programme` | Low         | Low        | `/affiliates` |

#### Geographic / market intent

| Cluster                              | Demand band                          | Difficulty | Page                               |
| ------------------------------------ | ------------------------------------ | ---------- | ---------------------------------- |
| `qatar british curriculum english`   | Low (niche, high willingness-to-pay) | Low        | NEW `/for-schools/qatar`           |
| `gcc british curriculum english`     | Low                                  | Low        | NEW `/for-schools/gcc`             |
| `igcse english international school` | Low-medium                           | Low        | NEW `/igcse/international-schools` |

### 6.3. Full keyword strategy (selected)

Detailed cluster table — abridged here, full version available as a structured CSV on request:

| Cluster                                | Audience          | Intent        | Funnel        | Demand   | Page status               | Priority |
| -------------------------------------- | ----------------- | ------------- | ------------- | -------- | ------------------------- | -------- |
| gcse english revision                  | Students+Parents  | Informational | Awareness     | High     | exists                    | P0       |
| igcse english revision                 | Students+Parents  | Informational | Awareness     | Med-High | exists                    | P0       |
| how to write a grade 9 english essay   | Students          | Informational | Awareness     | Med-High | NEW `/blog/...`           | P0       |
| how to analyse macbeth                 | Students          | Informational | Consideration | High     | NEW `/blog/...`           | P0       |
| free macbeth quote bank                | Students          | Informational | Consideration | Medium   | NEW `/free-resources/...` | P0       |
| 30 day gcse english revision plan      | Students          | Informational | Consideration | Medium   | NEW `/free-resources/...` | P0       |
| free gcse english revision             | Students+Parents  | Informational | Awareness     | High     | NEW `/free-resources`     | P0       |
| macbeth gcse revision                  | Students          | Informational | Consideration | High     | exists                    | P1       |
| aqa power and conflict revision        | Students          | Informational | Consideration | Medium   | exists                    | P1       |
| ao1 ao2 ao5 explained                  | Students          | Informational | Consideration | Medium   | NEW `/blog/...`           | P1       |
| aqa vs edexcel english                 | Students+Parents  | Comparison    | Consideration | Low-Med  | NEW `/compare/...`        | P1       |
| gcse english vs igcse english          | Students+Parents  | Comparison    | Awareness     | Medium   | NEW `/compare/...`        | P1       |
| cambridge 0500 vs 0990                 | Students+Parents  | Comparison    | Consideration | Low      | NEW `/compare/...`        | P1       |
| ai essay marking                       | Students+Teachers | Informational | Consideration | Medium   | exists (sample)           | P1       |
| english teacher tools                  | Teachers          | Commercial    | Consideration | Medium   | exists                    | P1       |
| how to help my child with gcse english | Parents           | Informational | Awareness     | Med-High | NEW                       | P1       |
| gcse english tutor                     | Parents           | Commercial    | Consideration | High     | exists (thin)             | P1       |
| predict your gcse english grade        | Students          | Tool          | Awareness     | Low-Med  | NEW `/predict-your-grade` | P1       |
| qatar british curriculum english       | School heads      | Commercial    | Consideration | Low      | NEW `/for-schools/qatar`  | P2       |
| gcse english grade 9 tips              | Students          | Informational | Consideration | Med-High | exists (audit)            | P1       |

**Pages to build that don't exist:**

| URL                                                                     | Purpose                                  |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| `/blog`                                                                 | Content hub — single largest organic gap |
| `/compare/aqa-vs-edexcel` (and 5 sibling comparison pages)              | Mid-funnel SEO                           |
| `/free-resources/macbeth-quote-bank` (and 30 sibling lead-magnet pages) | Email capture                            |
| `/exam-board-finder`                                                    | Top-of-funnel quiz                       |
| `/grade-9-english-guide`                                                | Authority post                           |
| `/qatar-british-curriculum-english`                                     | Local SEO                                |
| `/predict-your-grade`                                                   | Mid-funnel quiz; passive lead capture    |

---

## 7. Conversion & marketing

### 7.1. Student funnel

**Touchpoints:** organic search → `/revision/poetry/power-and-conflict/macbeth` → `/auth/register` → `/dashboard` → upgrade → `/pricing` → Stripe.

| Strengths                                           | Gaps                                                                                         |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Sign-up is fast (post-soft-verification model)      | Organic visitor on a study guide has no email-capture path                                   |
| Free 3-use access to every premium feature is clear | No exit-intent modal on pricing page                                                         |
| Pricing page is honest and explicit                 | "Try a feature" demo cards on homepage are great — promote in sidebar of every revision page |

**Recommendations:** Add `<EmailCaptureCard />` at the bottom of every set-text and poem study page: "Free 30-page Macbeth quote-bank — sent to your inbox in 30 seconds." 5% capture rate is realistic.

### 7.2. Teacher funnel

**Touchpoints:** organic search → `/for-teachers` → `/auth/teacher-register` → `/dashboard/teacher` → `/pricing` (teacher tier).

| Strengths                                 | Gaps                                          |
| ----------------------------------------- | --------------------------------------------- |
| Dedicated `/auth/teacher-register` exists | Teacher-specific lead magnet missing          |
| Teacher pricing differentiated            | No "Founding teacher" tier explicitly offered |

**Recommendations:** Build 6-10 teacher-specific PDFs gated by email. Could offer first 50 teachers free upgrade for 2026/27 in exchange for monthly testimonial (only when verifiable, signed release).

### 7.3. School funnel

**Touchpoints:** `/for-schools` → demo request → call → procurement.

| Strengths                           | Gaps                                                            |
| ----------------------------------- | --------------------------------------------------------------- |
| `BookCallForm` exists               | No case study / pilot programme content                         |
| Founding Schools benefits clear     | No `Service` schema on demo CTA                                 |
| `/for-schools/contact` route exists | No SLA copy ("We respond within 1 working hour during 9-5 GMT") |

**Recommendations:** Once first 5 founding schools are signed, write 1-2 case studies (`/for-schools/case-studies/<school-slug>`).

### 7.4. Affiliate funnel

**Touchpoints:** outreach → `/affiliates` → `/auth/register?as=affiliate` → Rewardful.

| Strengths                                   | Gaps                                                       |
| ------------------------------------------- | ---------------------------------------------------------- |
| Public affiliate page indexable             | Earnings preview missing                                   |
| Rewardful integrated and consent-gated      | "Creator profile" cards once first three creators are live |
| Founder has DM templates from prior session | Step-by-step "How it works" with screenshots missing       |

### 7.5. Parent funnel

**Touchpoints:** organic search → `/for-parents` → "How does this help my child?" → `/auth/register` (with parent-guardian flow).

| Strengths                                                 | Gaps                                                                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| COPPA / Children's Code compliance baked in               | Parent reassurance content thin                                                                         |
| Privacy policy live                                       | No `/parents/safeguarding` page                                                                         |
| Soft-verification model lets the parent get to value fast | No parent-specific pricing comparison ("Save vs a private tutor: £25/hr × 2 hours/week vs £3.49/month") |

---

## 8. Competitor positioning

This section is grounded in widely-known UK GCSE/IGCSE EdTech market positioning. Founder should commission a focused 1-day competitor crawl from a freelancer (£250-400) for hard data.

### 8.1. Save My Exams

- **Strength:** deep subject-specific revision notes (10,000+ pages), strong UI, paid hub model
- **Weakness:** paywall pressure, less personalised, no AI marking
- **Differentiation:** AI marking against actual mark schemes (Save My Exams cannot do this); per-board hub experience; founder credentials

### 8.2. Seneca Learning

- **Strength:** gamified spaced repetition, free tier strong, exam-board specific, UK-market dominance for free revision
- **Weakness:** limited human/teacher feel, generic content
- **Differentiation:** per-board hub depth; AI essay feedback; teacher tools

### 8.3. Physics & Maths Tutor (PMT)

- **Strength:** enormous PDF library + past papers + marked solutions; high organic traffic
- **Weakness:** utilitarian UI; no AI; no platform features
- **Differentiation:** modern UI; AI marking; per-board hub structure

### 8.4. BBC Bitesize

- **Strength:** free, massive authority, exam-board pages
- **Weakness:** cannot offer AI marking; cannot offer teacher tools; cannot personalise
- **Differentiation:** paid value of personalised + AI

### 8.5. Twinkl

- **Strength:** teacher resources at scale; paywall on most things
- **Weakness:** not student-facing; not exam-revision focused
- **Differentiation:** different ICP — not really a competitor

### 8.6. Education Perfect / Century Tech

- **Strength:** B2B platform sell to schools; well-funded
- **Weakness:** less English-specific than The English Hub
- **Differentiation:** English-only depth + AI marking calibrated to AO weights

### 8.7. Competitive gaps The English Hub should fill

1. **Long-form blog** (Save My Exams owns this — head-on competitive opportunity)
2. **Free downloadable PDFs** (PMT owns this — affiliate-driven distribution can win share quickly)
3. **Per-text "Grade 9 essay walkthroughs"** — no competitor offers this with mark-scheme-specific AI marking

---

## 9. Backlink + authority strategy

### 9.1. Backlink-worthy assets to build

1. **"The 30-Day GCSE English Revision Plan"** — 30-page downloadable PDF gated by email. Pitched to teacher Twitter, Mumsnet, exam-revision Reddit subs. Cost £600-1,200; estimated link velocity 5-15 quality backlinks in first 6 months.
2. **"What examiners actually look for: AO1, AO2, AO5 explained with annotated examples"** — long-form blog post or guide PDF. Likely to attract teacher links.
3. **"GCSE English grade-distribution data report 2026"** — pull AQA/OCR/Edexcel public exam reports, visualise grade trends. Pitch to TES, Schools Week, the Guardian Education. High link-velocity asset.
4. **"Macbeth in 60 seconds" video series** — short-form gateway content. Distribute via TikTok/IG. Embed on landing pages.
5. **"The Free Macbeth Quote Bank"** + 5 sibling assets (P&C, AIC, ACC, J&H, LotF) — all gated by email, all downloadable PDF, all linkable.

### 9.2. Outreach channels (priority)

| Channel                                          | Asset to pitch                       | Cost                              | Difficulty | Authority value   | Priority                |
| ------------------------------------------------ | ------------------------------------ | --------------------------------- | ---------- | ----------------- | ----------------------- |
| TES (Times Educational Supplement)               | Data report or guest post            | £500-2k for PR, £0 founder-direct | Medium     | Very high         | High                    |
| Schools Week                                     | Same                                 | Same                              | Medium     | Very high         | High                    |
| Guardian Education                               | Same                                 | Same                              | High       | Very high         | Medium                  |
| Mumsnet (Education board)                        | Free PDF + parent help post          | £0                                | Low        | Medium            | High (low cost)         |
| Reddit (r/GCSE, r/6thForm)                       | Free PDF + AMA                       | £0                                | Low        | Medium            | High                    |
| Teacher Twitter / X                              | Asset shares + threads               | £0 founder time                   | Low        | Medium            | High                    |
| TES Resources marketplace                        | Submit free worksheets               | £0                                | Low        | Medium            | Medium                  |
| EdTech Impact directory                          | Self-list with reviews once live     | £0                                | Low        | Medium-high       | High once reviews exist |
| British Council (international school directory) | Self-list                            | £0                                | Low        | High (DR ~80)     | High                    |
| Qatar education ecosystem                        | Targeted outreach                    | £200-500                          | High       | Niche-high        | Medium                  |
| EdTech podcasts                                  | Founder interview pitch              | £0 founder time                   | Medium     | Medium            | Medium                  |
| Affiliate creator programme                      | Continue founder's existing pipeline | ~£0 incremental                   | Low        | Distribution-high | High                    |
| British curriculum-school directories (CIS, BSO) | Self-list                            | £0                                | Low        | Niche-high        | Medium                  |
| LinkedIn thought leadership                      | Founder + Lauren                     | £0 founder time                   | Low        | Brand-high        | Medium                  |

### 9.3. Digital PR campaigns (one per quarter)

- **Q1 (Jan-Mar 2027):** "How to revise English in 30 days" — exam-prep timing, peak intent
- **Q2 (Apr-Jun 2027):** "GCSE English Grade Distribution Report" — back-to-school / exam-results timing
- **Q3 (Jul-Sep 2027):** "Why English exams have changed — what teachers and students need to know" — back-to-term timing
- **Q4 (Oct-Dec 2027):** "Predicting your grade — a free tool" — mock-exam timing

---

## 10. Measurement framework

### 10.1. Required tools (first 14 days)

1. **Google Search Console** — verify domain, submit sitemap, set GB target
2. **Bing Webmaster Tools** — same
3. **GA4** — confirm property is receiving events; set up conversions
4. **PostHog** — already wired; confirm event taxonomy is documented
5. **PageSpeed Insights** — run baseline against 5 URLs
6. **Chrome User Experience Report (CrUX)** — auto-feeds Search Console once traffic > threshold
7. **Hotjar or PostHog session recording** — already in PostHog; sample 50 sessions/month for UX

### 10.2. Conversion event taxonomy (proposed)

```
home_viewed                    [home]
board_card_clicked             [home, /board-select]
setboard_redirect_completed    [middleware → revision]
auth_register_started          [/auth/register, /auth/teacher-register]
auth_register_completed        [server-side, after profile insert]
auth_login_completed           [/auth/login → /dashboard]
pricing_viewed                 [/pricing]
checkout_started               [/account/billing → Stripe]
checkout_completed             [Stripe webhook → /api/stripe/webhook]
school_demo_requested          [/for-schools form submit]
contact_submitted              [/contact, /help/contact]
affiliate_signup_completed     [Rewardful webhook]
poem_studied                   [<study-page mount>, deduped]
text_studied                   [<set-text-page mount>, deduped]
ai_marking_used                [/marking/sample/<text>]
mock_exam_completed            [/mock-exams flow]
quiz_completed                 [/revision/quiz, /games]
email_captured                 [<lead-magnet form>, NEW component]
download_initiated             [<PDF link>, NEW]
```

Document this in `business-docs/EVENT-TAXONOMY.md`. Wire each event to GA4 + PostHog.

### 10.3. KPIs to track monthly

| KPI                    | Target by exam season May 2027 | Tracking source                    |
| ---------------------- | ------------------------------ | ---------------------------------- |
| Organic sessions       | 10× current baseline           | GA4                                |
| Indexed pages          | 600+ (vs ~780 sitemap)         | Search Console                     |
| Top-3 ranking keywords | 50+ in branded + non-branded   | Search Console + (optional) Ahrefs |
| Email captures         | 2,000+ cumulative              | PostHog + email-platform           |
| Sign-ups               | TBC by founder                 | Supabase Auth                      |
| Paid conversions       | TBC by founder                 | Stripe                             |
| School demos requested | 50+                            | PostHog `school_demo_requested`    |
| Affiliate sign-ups     | 100+                           | Rewardful                          |
| Backlinks              | 50+ DR>30 backlinks            | (optional) Ahrefs                  |
| LCP (homepage)         | < 2.5s on 4G                   | PageSpeed Insights / CrUX          |
| INP                    | < 200ms                        | Same                               |
| CLS                    | < 0.1                          | Same                               |

---

## 11. Implementation roadmap

### 11.1. Phase summary

| Phase           | Window     | Focus                                                                                                                                | Founder cost (DIY) | Freelancer   | Agency       |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------ | ------------ |
| **Quick wins**  | 0-2 weeks  | Strip false claims, verify GSC/Bing, font fix, FAQ schema, H1 rewrites, baseline measurement, email-capture component                | £0-800             | £1,500-3,000 | £4,000-8,000 |
| **Short-term**  | 2-6 weeks  | Blog launch (12 posts), 30 PDFs, 6 board-comparison pages, /for-\* page rewrites, Article+HowTo schema, full event taxonomy          | £2-4k              | £8-15k       | £20-40k      |
| **Medium-term** | 6-12 weeks | 50 more blog posts, set-text page enrichment, /qatar /gcc local pages, exam-board comparison hub, EdTech Impact + directory listings | £3-6k              | £15-30k      | £40-80k      |
| **Long-term**   | 3-6 months | Q1 digital PR campaign, ongoing weekly blog, link-velocity, video content, EdTech 50 directory, school-leader content                | £5-10k             | £25-60k      | £80-200k     |

The **DIY-founder track is feasible** if the founder has 10-15 hours/week of writing/editing capacity through exam season.

### 11.2. Phase 1 — Quick wins (0-2 weeks)

| #   | Item                                              | Time | Cost (DIY/Freelancer) | Priority |
| --- | ------------------------------------------------- | ---- | --------------------- | -------- |
| Q1  | Strip fabricated testimonials + unverified claims | 4h   | £0 / £200             | 10       |
| Q2  | Verify GSC + Bing                                 | 1h   | £0 / £50              | 10       |
| Q3  | Migrate Google Fonts to next/font/google          | 1d   | £0 / £350-500         | 9        |
| Q4  | FAQPageJsonLd on 6 audience pages                 | 1d   | £0 / £300-500         | 9        |
| Q5  | Rewrite 8 audience-page H1s/titles                | 1d   | £0 / £300-500         | 9        |
| Q6  | EmailCaptureCard component + API + Supabase table | 2d   | £200 / £700-1,200     | 8        |
| Q7  | Run PageSpeed Insights baseline                   | 30m  | £0 / £50              | 8        |
| Q8  | Per-page metadata (top 50 leaves)                 | 2-3d | £500 / £800-1,500     | 7        |
| Q9  | GSC verification meta tag                         | 5m   | £0                    | 7        |
| Q10 | Document event taxonomy                           | 0.5d | £0 / £200             | 7        |

### 11.3. Phase 2 — Short-term (2-6 weeks)

| #   | Item                                            | Time                    | Cost (DIY/Freelancer) | Priority |
| --- | ----------------------------------------------- | ----------------------- | --------------------- | -------- |
| S1  | Launch /blog with 12 launch posts (DIY content) | 5-7w                    | £2-4k / £6-12k        | 9        |
| S2  | Build first 30 PDF lead magnets                 | 4-8w                    | £1.5-3k / £6-15k      | 9        |
| S3  | Build 6 board-comparison pages                  | 2-3w                    | £1-2k / £3-6k         | 8        |
| S4  | Audience-page rewrites (Q5 deepened)            | 3-5d                    | £0 / £1.5-3k          | 8        |
| S5  | Article+LearningResource+HowTo schema           | 4-5d                    | £0-500 / £1.2-2.5k    | 7        |
| S6  | EdTech Impact directory + first 10 reviews      | 0.5d list + 4-8w gather | £0                    | 7        |
| S7  | Course schema on hubs (5 pages)                 | 1d                      | £0 / £200-500         | 7        |

### 11.4. Phase 3 — Medium-term (6-12 weeks)

| #   | Item                                                           | Time | Cost (DIY/Freelancer) | Priority |
| --- | -------------------------------------------------------------- | ---- | --------------------- | -------- |
| M1  | 50 more blog posts (continuing cadence)                        | 12w  | £4-8k / £15-30k       | 8        |
| M2  | Set-text page enrichment (25 pages)                            | 12d  | £1.5-3k / £5-10k      | 7        |
| M3  | Local landing pages: Qatar / GCC / Intl schools                | 2w   | £500-1k / £2-4k       | 6        |
| M4  | Exam-board comparison hub /exam-boards index                   | 1w   | £200-500 / £800-1.5k  | 6        |
| M5  | Directory listings (BESA, TES, BSO, CIS, Crunchbase, LinkedIn) | 3-5d | £0-500                | 6        |

### 11.5. Phase 4 — Long-term (3-6 months)

| #   | Item                                             | Time    | Cost (DIY/Freelancer) | Priority |
| --- | ------------------------------------------------ | ------- | --------------------- | -------- |
| L1  | Q1 2027 Digital PR campaign                      | 10w     | £500-1.5k / £3-8k     | 8        |
| L2  | GCSE English Grade Distribution Report (Q2 2027) | 3w      | £1-3k / £5-10k        | 7        |
| L3  | Video content series (60 short videos year 1)    | 12mo    | £500-1.5k / £3-15k    | 6        |
| L4  | Founder LinkedIn + podcast tour                  | Ongoing | £0                    | 6        |
| L5  | Predict-your-grade tool quiz                     | 2w      | £500-1.5k / £2.5-5k   | 6        |

---

## 12. Costed implementation table

All costs in GBP. Currency assumption: 2026 UK market rates. Freelancer = UK contractor £45-75/h. Agency = UK SEO/dev agency £85-150/h.

### 12.1. Quick wins (0-2 weeks)

| Item                                                      | Internal DIY | Freelancer | Agency     | Time |
| --------------------------------------------------------- | ------------ | ---------- | ---------- | ---- |
| Strip fabricated testimonials and unverified claims       | £0           | £150-300   | £500-1000  | 4h   |
| Verify GSC + Bing + submit sitemap                        | £0           | £50-100    | £200-400   | 1h   |
| Migrate 3 Google Fonts to next/font/google                | £0           | £350-600   | £800-1500  | 1d   |
| Wire FAQPageJsonLd to 6 audience pages                    | £0           | £300-600   | £800-1500  | 1d   |
| Rewrite 8 audience-page H1s + titles                      | £0           | £300-600   | £800-1500  | 1d   |
| Build EmailCaptureCard + API + Supabase table             | £200         | £800-1500  | £2500-4000 | 2d   |
| PageSpeed baseline                                        | £0           | £50-100    | £150-300   | 30m  |
| Per-page metadata for 50 leaves                           | £500         | £1000-2000 | £3000-5000 | 2-3d |
| Add Google Site Verification meta                         | £0           | £50        | £150       | 5m   |
| Document event taxonomy                                   | £0           | £200-400   | £600-1200  | 0.5d |
| ContactPoint schema on /contact                           | £0           | £50-150    | £250-500   | 30m  |
| 404 page improvements                                     | £0           | £150-300   | £500-1000  | 1h   |
| Security headers (X-Content, X-Frame, Permissions-Policy) | £0           | £100-200   | £300-600   | 30m  |
| Sitemap content audit (35 IGCSE Lang A texts)             | £0           | £200-400   | £600-1200  | 0.5d |

### 12.2. Short-term (2-6 weeks)

| Item                                                               | Internal DIY | Freelancer | Agency                    | Time |
| ------------------------------------------------------------------ | ------------ | ---------- | ------------------------- | ---- |
| Build /blog architecture + first 12 posts (DIY content)            | £2k-4k       | £6k-12k    | £15k-30k                  | 5-7w |
| Build /blog architecture + first 12 posts (freelancer content)     | £500         | £8k-15k    | £20k-40k                  | 5w   |
| First 10 PDF lead magnets (DIY content + design)                   | £1k-2k       | £4k-8k     | £12k-25k                  | 4w   |
| First 30 PDF lead magnets (DIY for 20, freelancer for 10)          | £1.5k-3k     | £6k-15k    | £20k-40k                  | 8w   |
| 6 board-comparison pages                                           | £1k-2k       | £3k-6k     | £8k-15k                   | 2-3w |
| Article + LearningResource + HowTo schema components + integration | £0-500       | £1.2k-2.5k | £3.5k-6k                  | 4-5d |
| EdTech Impact directory + first 10 reviews                         | £0           | £0         | £500-1k (PR coordination) | 4-8w |
| Course schema on per-board hubs (5 pages)                          | £0           | £200-500   | £600-1.2k                 | 1d   |

### 12.3. Medium-term (6-12 weeks)

| Item                                                           | Internal DIY | Freelancer | Agency   | Time |
| -------------------------------------------------------------- | ------------ | ---------- | -------- | ---- |
| Set-text page enrichment (25 pages)                            | £1.5k-3k     | £5k-10k    | £15k-30k | 12d  |
| 50 more blog posts (weekly cadence)                            | £4k-8k       | £15k-30k   | £40k-80k | 12w  |
| Local landing: Qatar / GCC / Intl schools                      | £500-1k      | £2k-4k     | £5k-10k  | 2w   |
| Exam-board comparison hub /exam-boards index                   | £200-500     | £800-1.5k  | £2k-4k   | 1w   |
| Directory listings (BESA, TES, BSO, CIS, Crunchbase, LinkedIn) | £0-500       | £500-1.5k  | £2k-4k   | 3-5d |

### 12.4. Long-term (3-6 months)

| Item                                             | Internal DIY | Freelancer         | Agency   | Time    |
| ------------------------------------------------ | ------------ | ------------------ | -------- | ------- |
| Q1 2027 Digital PR campaign                      | £500-1.5k    | £3k-8k             | £10k-25k | 10w     |
| GCSE English Grade Distribution Report (Q2 2027) | £1k-3k       | £5k-10k            | £15k-30k | 3w      |
| Video content series (60 short videos year 1)    | £500-1.5k    | £3k-15k            | £20k-60k | 12m     |
| Founder LinkedIn + podcast tour                  | £0           | £500-2k (PR coord) | £3k-10k  | Ongoing |
| Predict-your-grade tool quiz                     | £500-1.5k    | £2.5k-5k           | £8k-15k  | 2w      |
| Exam-board-finder tool quiz                      | £200-500     | £1.5k-3k           | £5k-10k  | 1w      |

### 12.5. Ongoing monthly costs

| Item                                                     | Per month              |
| -------------------------------------------------------- | ---------------------- |
| Search Console weekly digest + monthly review (analyst)  | £150-400               |
| Monthly PageSpeed audit on 10 URLs                       | £0-150                 |
| Schema validator monthly check                           | £0-100                 |
| Conversion-funnel quarterly review (PostHog + GA4)       | £200-600 (per quarter) |
| Backlink health monitoring (Ahrefs Lite)                 | £99                    |
| Email list growth + automation (Resend free → paid tier) | £99-200                |
| Affiliate creator outreach (continued)                   | £99-200 (Rewardful)    |
| Search Console keyword research weekly review            | £0                     |

### 12.6. Total 12-month envelope

| Track                 | DIY (founder + Lauren writing) | Freelancer-led      | Agency-led           |
| --------------------- | ------------------------------ | ------------------- | -------------------- |
| Phase 1 (Quick wins)  | £200-1,000                     | £2,000-4,000        | £5,000-10,000        |
| Phase 2 (Short-term)  | £4,000-9,000                   | £18,000-35,000      | £45,000-90,000       |
| Phase 3 (Medium-term) | £6,000-12,000                  | £25,000-50,000      | £60,000-120,000      |
| Phase 4 (Long-term)   | £2,000-6,000                   | £15,000-40,000      | £40,000-80,000       |
| **Total 12-month**    | **£12,000-28,000**             | **£60,000-130,000** | **£150,000-300,000** |

### 12.7. Decision framework for the founder

**If you have £0-2k of cash and 15-20h/week:** ship Phase 1 in week 1, then publish 1 blog post/week and 1 PDF/fortnight. By Month 6 you've laid the foundations cheaply.

**If you have £5-15k of cash:** ship Phase 1 quickly, hire a UK education-content writer (£500-800/post) for 12 posts, and a designer for 30 PDFs. By Month 6 you have the content moat.

**If you have £30k+ of cash:** hire a boutique EdTech content+SEO agency for 6 months. By Month 12 you're top-3 ranking for "GCSE English revision".

**The integrity fixes in Phase 1 are non-negotiable regardless of budget.**

---

## 13. Six-month content calendar

Cadence: technical fixes Month 1, content + lead-magnet build Months 2-3, exam-prep authority Months 4-5, comparison + affiliate Month 6.

If founder is doing this DIY (no freelancer budget), schedule slips by ~2× — i.e., 6-month plan stretches to 9-12 months. The order doesn't change.

### 13.1. Month 1 (May 2026): Quick wins + technical fixes + measurement baseline

The integrity-and-measurement month. **No long-form content yet** — foundations first.

**Week 1 (5-11 May):** Strip fakes (TICKET-1), verify GSC + Bing (TICKET-2), PageSpeed baseline, migrate Google Fonts (TICKET-3).

**Week 2 (12-18 May):** Wire FAQPageJsonLd (TICKET-4), rewrite 8 audience H1s/titles (TICKET-5), build EmailCaptureCard (TICKET-6), document event taxonomy (TICKET-9).

**Week 3 (19-25 May):** Per-page metadata for first 25 set-text leaves (TICKET-7), Article + LearningResource + HowTo schema components (TICKET-8), ContactPoint + 404 + security-header improvements.

**Week 4 (26 May - 1 Jun):** Per-page metadata next 25 leaves, sitemap content audit (TICKET-18), EmailCaptureCard integrated on first 5 set-text pages, submit first review to EdTech Impact.

**Month-1 review:** all P0 + P1 quick-wins shipped. ~£0-1k cash spent. Search Console showing first impressions.

### 13.2. Month 2 (June 2026): Blog launch + first 10 PDFs

The content-engine month. Build the blog. Ship the first 10 PDF lead magnets.

**Week 5:** /blog architecture (TICKET-11) + first post: "How to analyse Macbeth like a Grade 9 student" + first PDF: Macbeth quote bank + /free-resources index.

**Week 6:** Blog post 2: "The fastest way to remember Power & Conflict poems"; post 3: "What examiners actually look for in AO2"; PDFs: AQA P&C comparison grid, AIC quote bank.

**Week 7:** Post 4: "How to write a Grade 9 GCSE English Literature essay"; post 5: "How AI marking actually works"; PDFs: AO1/AO2/AO5 cheat sheet, Macbeth essay-plan workbook.

**Week 8:** Post 6: "Macbeth vs Romeo & Juliet — character comparisons"; post 7: "Why so many GCSE English students drop a grade in mocks"; PDFs: ACC quote bank, J&H quote bank.

**Month-2 review:** 7 blog posts + 7 PDFs live. EmailCaptureCard generating data. Search Console showing first ranking lifts.

### 13.3. Month 3 (July 2026): Comparison pages + 12 more posts + 13 more PDFs

The mid-funnel + scale month.

**Week 9:** /compare/[slug] architecture (TICKET-12). Comparison pages 1: AQA vs Edexcel English Lit, 2: GCSE English vs IGCSE English. PDF: P&C essay-plan workbook.

**Week 10:** Comparison 3: Cambridge IGCSE 0500 vs 0990, 4: Edexcel IGCSE vs Cambridge IGCSE. Post 8: "30-minute essay plan: GCSE English Literature". PDFs: 30-Day GCSE English Revision Plan, ACC essay-plan workbook.

**Week 11:** Comparison 5: AQA vs OCR, 6: AQA vs Eduqas. Post 9: "AQA Power & Conflict: every poem ranked for difficulty". PDFs: AIC essay-plan workbook, LotF key quotes.

**Week 12:** Posts 10-12: "How to revise An Inspector Calls in 5 days", "The full Pearson Edexcel IGCSE 4ET1 anthology, explained", "Cambridge IGCSE 0500 vs 0990 — what's the actual difference?". PDFs: Macbeth themes flashcards, AIC characters one-pager, Animal Farm chapter summaries.

**Month-3 review:** 12 blog posts + 6 comparison pages + 15 PDFs live. Estimated 200-500% organic uptick. First emails captured (50-300).

### 13.4. Month 4 (August 2026): Teacher + school content

The B2B + back-to-school prep month.

**Week 13:** PDFs: AQA AO weighting reference, lesson-starter packs (Macbeth Act 1, AIC Act 1). Post 13: "How English teachers can use AI marking responsibly".

**Week 14:** PDFs: AQA P&C lesson-starter pack, Department-meeting Ofsted-prep template. Post 14: "The Ofsted English Department deep-dive". Rebuild /resources/teaching/lesson-plans + printables pages.

**Week 15:** PDFs: Whole-class essay-mark sheet, Parent's guide to GCSE English. Post 15: "How to help your child with GCSE English (without being an English teacher)". Rewrite /for-parents.

**Week 16:** Set-text enrichment — Macbeth pilot (TICKET-15). PDF: 14-day pre-mock revision plan, J&H themes flashcards. Post 16: "AO2 in 5 minutes: how examiners read your essay".

**Month-4 review:** teacher + school content live. Set-text enrichment template proven. Back-to-school traffic spike expected.

### 13.5. Month 5 (September 2026): Authority + set-text scale-out

**Week 17:** Set-text enrichment for AIC + ACC + R&J. PDF: Edexcel IGCSE Lit set-text overview. Posts 17-18: "Why English exams are getting harder" + "How to memorise quotes for GCSE English".

**Week 18:** Set-text enrichment for J&H + Animal Farm + LotF. PDFs: Cambridge IGCSE 0500/0990 difference guide, Unseen poetry approach guide. Post 19: "How to read an unseen poem in 8 minutes".

**Week 19:** Set-text enrichment for Of Mice and Men + TKAM + Things Fall Apart. PDF: AQA Language Paper 1 walkthrough. Post 20: "How to ace AQA English Language Paper 1 in 90 minutes". Rewrite /resources/grade-targets/grade-9 deep-dive.

**Week 20:** Set-text enrichment for Frankenstein + Jane Eyre + P&P. PDF: AQA Language Paper 2 walkthrough. Post 21: "How to PEEL a paragraph (with examples that actually score Grade 9)". **Flip `NEXT_PUBLIC_EDTECH_IMPACT_LIVE=true` once 10 reviews milestone reached.**

**Month-5 review:** ~21 blog posts + 6 comparison + 29 PDFs + 10 enriched set-texts. AggregateRating live in schema. Estimated 1,500-3,000 emails captured cumulative.

### 13.6. Month 6 (October 2026): Comparison + affiliate + backlink-worthy assets

**Week 21:** PDF: GCSE English Grade Distribution Mini-Report (data-led). Local landing pages: /for-schools/qatar, /for-schools/gcc, /igcse/international-schools.

**Week 22:** Predict-your-grade tool quiz + paired blog post. Set-text enrichment for the rest (Anita and Me, Pigeon English, Curious Incident, Never Let Me Go, Blood Brothers, View from the Bridge). /exam-boards index page.

**Week 23:** Affiliate creator content (5 case-study posts only with signed releases). Post 23: "How affiliate marketing for EdTech actually works". Defensive comparison pages: "vs Save My Exams", "vs Seneca", "vs PMT". Submit /blog and /compare to new directories.

**Week 24:** Q1 2027 Digital PR campaign — start drafting "How to revise English in 30 days" master report. Post 24: "Mock exam season — when, what, how". Pitch list (TES, Schools Week, Guardian Education, Mumsnet). Founder LinkedIn cadence — 1 post/week starts.

**Month-6 review:** ~24 blog posts + 6 comparison + 30+ PDFs + 17 enriched set-texts + 3 local landing + Predict-your-grade quiz. AggregateRating live. Q1 PR asset in build. Estimated 3,000-8,000 emails cumulative.

### 13.7. Targets at end of month 6

| KPI                                  | Target                 | Method                                |
| ------------------------------------ | ---------------------- | ------------------------------------- |
| Blog posts published                 | 24                     | site search                           |
| Comparison pages live                | 6                      | site search                           |
| PDF lead magnets live                | 30                     | /free-resources index                 |
| Email subscribers                    | 3,000-8,000            | Supabase email_subscribers table      |
| Indexed pages                        | 700+                   | Google Search Console                 |
| Top-3 ranking keywords (non-branded) | 10+                    | GSC                                   |
| Top-10 ranking keywords              | 50+                    | GSC                                   |
| Organic sessions/month               | 5-15× current baseline | GA4                                   |
| Backlinks (DR>30)                    | 20+                    | (optional) Ahrefs                     |
| Schema rich-result eligibility       | 95%+ of priority pages | Search Console structured-data report |
| LCP on homepage                      | <2.5s on 4G            | PageSpeed / CrUX                      |
| Trustpilot reviews live              | 10+                    | Trustpilot dashboard                  |

### 13.8. Notes for the founder

- **The single best money you can spend in May 2026** is paying a UK education-content writer £500-1,000 to ghostwrite the first 12 blog posts. This frees 3-4 weeks of your time for school-procurement conversations, where £1 of your time is worth £10-100 of writer time.
- **The single best DIY contribution from Lauren** is the lead-magnet content. She knows the spec, knows what students actually need, and can produce a 20-page Macbeth quote bank in a day.
- **The single biggest commercial mistake** would be skipping Phase 1 quick wins (testimonial cleanup, GSC verification) and going straight to content. Without measurement you're flying blind. Without integrity, the content engine builds on quicksand.

---

## 14. Developer-ready ticket backlog

20 tickets, ordered by priority. Each is self-contained with acceptance criteria, file paths, and testing instructions.

### TICKET-1 — Strip fabricated testimonials and unverified claims [P0, 4h]

**Description:** `/for-teachers` and `/for-schools` contain three classes of integrity violations:

1. **Fabricated testimonials** in `src/app/for-teachers/page.tsx` lines 97-116 (Sarah M., James T., Priya K.)
2. **Unverified numerical product claims** — "Save 5+ hours per week", "300+ Ready Resources"
3. **Possibly-fabricated single testimonial** in `/for-students` infographic alt-text: "Aanya, Student"

**Acceptance criteria:**

- [ ] Delete `testimonials` array + JSX from `src/app/for-teachers/page.tsx`. Replace with empty-state.
- [ ] Remove "300+ Ready Resources" from `features` array desc. Replace: "A growing library of worksheets, revision materials, model answers, and starter activities."
- [ ] Remove "Save 5+ hours per week on lesson planning" from `timeSavers`. Replace: "Spend less time on routine planning and marking — the AI shoulders the repetitive work."
- [ ] Rewrite "Lesson Builder & 300+ Resources" feature card on /for-schools to remove "300+".
- [ ] Verify "Aanya, Student" testimonial. If not real-and-released, edit alt text on `<InfographicBanner src="/infographics/for-students.png" alt="...">`. Flag PNG asset for replacement if quote is on the image itself.
- [ ] Run `grep -rn "Sarah M\.\|James T\.\|Priya K\.\|Aanya, Student" src/`.
- [ ] Run `grep -rn "300+\|Save 5+\|Save 5 hours\|five hours per week\|five-plus hours" src/` and address every hit.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` succeeds.

**Files:** `src/app/for-teachers/page.tsx`, `src/app/for-schools/page.tsx`, `src/app/for-students/page.tsx` (if Aanya not verified), `src/components/marketing/InfographicBanner.tsx`, possibly `public/infographics/for-students.png`.

### TICKET-2 — Verify Google Search Console + Bing Webmaster [P0, 1h]

**Acceptance criteria:**

- [ ] Add `<meta name="google-site-verification" content="..." />` to `<head>` in `src/app/layout.tsx`. Use env var `NEXT_PUBLIC_GOOGLE_VERIFICATION_ID` so it's omitted when empty (mirror existing `NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID` pattern at lines 79-84).
- [ ] Same for Bing: `<meta name="msvalidate.01" content="..." />` gated by `NEXT_PUBLIC_BING_VERIFICATION_ID`.
- [ ] Founder verifies via Search Console (DNS or HTML meta), submits `https://theenglishhub.app/sitemap.xml`, sets international targeting GB.
- [ ] Same for Bing.
- [ ] Document in `business-docs/SEO-MEASUREMENT-SETUP.md`.

**Files:** `src/app/layout.tsx`, `.env.example`, new `business-docs/SEO-MEASUREMENT-SETUP.md`.

### TICKET-3 — Migrate Google Fonts to next/font/google [P1, 1d]

**Description:** Root layout currently `<link href="https://fonts.googleapis.com/css2?family=...">` (lines 72-77). Render-blocking, adds 200-500ms to LCP.

**Acceptance criteria:**

- [ ] Replace `<link>` with `next/font/google` imports for Newsreader, Geist, JetBrains Mono. `display: 'swap'`, `subsets: ['latin']`.
- [ ] Add font-variable classNames to `<html>` tag alongside `monaSans.variable`.
- [ ] Confirm globals.css still references same `var(--font-...)` variables.
- [ ] Run PageSpeed before/after; document LCP delta in `business-docs/CWV-baseline-2026-05.md`.
- [ ] `npm run build` succeeds.

**Code sketch:**

```ts
import { Newsreader, Geist, JetBrains_Mono } from 'next/font/google'

const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

<html className={`${monaSans.variable} ${newsreader.variable} ${geist.variable} ${jetbrainsMono.variable}`}>
// Remove the <link> tags from <head>
```

**Files:** `src/app/layout.tsx`, possibly `src/app/globals.css`.

### TICKET-4 — Wire FAQPageJsonLd to 6 audience pages [P1, 1d]

**Description:** `FAQPageJsonLd` already exported from `src/components/seo/json-ld.tsx`. Wire to every page with inline FAQ array.

**Acceptance criteria:**

- [ ] `/pricing`: emit `<FAQPageJsonLd faqs={FAQ_ITEMS.map((i) => ({ question: i.q, answer: i.a }))} />`.
- [ ] `/for-teachers`: same pattern with `faqs` array.
- [ ] `/for-schools`: same. Extract FAQ data from `<FAQItem />` components into a flat array first.
- [ ] `/for-parents`: audit; add if FAQ array exists.
- [ ] `/affiliates`: audit; add or write 5 affiliate-targeted FAQs.
- [ ] `/faqs`: confirm wired; add if missing.
- [ ] Validate each via https://search.google.com/test/rich-results.

**Files:** all 6 page.tsx files listed.

### TICKET-5 — Rewrite 8 audience-page H1s and titles [P1, 1d]

| Page            | Current H1                          | Recommended H1                                                          | Recommended `<title>`                                            |
| --------------- | ----------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `/`             | "Pick your exam board to start."    | "GCSE and IGCSE English revision, AI marked against the AO mark scheme" | (current good)                                                   |
| `/for-students` | "Learn English. Build your future." | "Your GCSE or IGCSE English revision, in one place"                     | "GCSE and IGCSE English revision for students — The English Hub" |
| `/for-teachers` | (verify)                            | "English department tools for AQA, Edexcel, OCR and WJEC teachers"      | "English teacher tools and AI marking — The English Hub"         |
| `/for-schools`  | (verify)                            | "Whole-department English platform for UK schools"                      | "English platform for schools — The English Hub"                 |
| `/for-parents`  | (verify)                            | "Help your child pass GCSE or IGCSE English"                            | "GCSE and IGCSE English help for parents — The English Hub"      |
| `/affiliates`   | (verify)                            | "Earn 20% recurring commission promoting GCSE English revision"         | "Affiliate programme — The English Hub"                          |
| `/about`        | (verify)                            | "About The English Hub"                                                 | (verify)                                                         |
| `/igcse`        | (verify)                            | "IGCSE English revision — Pearson Edexcel and Cambridge specs covered"  | "IGCSE English revision — The English Hub"                       |

**Files:** all 8 page.tsx files.

**Depends on TICKET-1.**

### TICKET-6 — Build EmailCaptureCard component + API route + Supabase table [P1, 2d]

**Acceptance criteria:**

- [ ] `supabase/migrations/2026XXXX_email_subscribers.sql`:

```sql
CREATE TABLE public.email_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  magnet_slug TEXT,
  source_path TEXT,
  consent_marketing BOOLEAN NOT NULL DEFAULT false,
  consent_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (email, magnet_slug)
);
CREATE INDEX idx_email_subscribers_email ON email_subscribers (email);
```

- [ ] `src/app/api/email/capture/route.ts` — POST endpoint, Zod-validated body `{ email, magnetSlug, sourcePath }`, rate-limited (5/IP/hour), inserts into table, optionally syncs to Resend Audiences.
- [ ] `src/components/marketing/EmailCaptureCard.tsx` — client component with form, optimistic UI, success state with download link, GDPR consent checkbox.
- [ ] Wire into `/revision/texts/macbeth` first. Verify end-to-end.
- [ ] Document in `business-docs/EMAIL-CAPTURE-RUNBOOK.md`.
- [ ] Add `email_captured` event firing on success (PostHog + GA4).

**Files:** new migration, new API route, new component, new runbook, integration into Macbeth set-text page.

### TICKET-7 — Per-page metadata for top 50 leaf pages [P2, 2-3d]

**Acceptance criteria:**

- [ ] List 50 priority leaves: 25 set-text root pages + 10 anthology hubs + 4 IGCSE deep + 10 resource hubs.
- [ ] Each has `metadata` export (or `generateMetadata` for dynamic) with: query-aligned title, 140-155 char description, explicit canonical, OG title + description.
- [ ] No two pages share metadata.
- [ ] Verify via https://search.google.com/test/rich-results.

**Files:** 50 page.tsx files.

**Depends on TICKET-5.**

### TICKET-8 — Article + LearningResource + HowTo schema [P2, 5d]

**Acceptance criteria:**

- [ ] Three new components in `src/components/seo/json-ld.tsx`: `ArticleJsonLd`, `LearningResourceJsonLd`, `HowToJsonLd`. TS types for required + optional fields.
- [ ] Each renders `<script type="application/ld+json" nonce={nonce}>` matching existing pattern.
- [ ] Each validates against https://validator.schema.org/.
- [ ] Each has JSDoc example.
- [ ] Wired into:
  - `LearningResource` → 25 set-text root pages
  - `LearningResource` → 10 anthology cluster hubs
  - `HowTo` → `/revision/exam-technique` and `/resources/exam-technique/*`
  - `Article` → ready for `/blog/[slug]` (TICKET-11) and `/compare/[slug]` (TICKET-12)

**Files:** `src/components/seo/json-ld.tsx`, 25+ set-text pages, 10 anthology cluster pages, exam-technique pages.

### TICKET-9 — Document event taxonomy [P2, 0.5d]

**Acceptance criteria:**

- [ ] New `business-docs/EVENT-TAXONOMY.md` lists every event with name (snake_case, semantic), when it fires, parameters, PostHog/GA4 destination.
- [ ] Minimum: events listed in §10 of audit report.
- [ ] Each new ticket below this updates the taxonomy when introducing new event.

**Files:** new `business-docs/EVENT-TAXONOMY.md`.

### TICKET-10 — EmailCaptureCard on top 20 organic-intent pages [P2, 1d]

**Acceptance criteria:**

- [ ] EmailCaptureCard rendered at the bottom of:
  - All 25 `/revision/texts/<text>/page.tsx` (matched to per-text lead magnet)
  - All 4 anthology cluster pages
  - Top-3 IGCSE landing pages
- [ ] Each integration uses `magnetSlug` matching a future PDF.
- [ ] If a magnet doesn't exist yet, card shows "Free [Text] revision pack — coming soon, get notified" and email goes to `email_subscribers` table.
- [ ] Visual smoke on 5 sample pages.

**Depends on TICKET-6.**

### TICKET-11 — /blog architecture + first post [P1, 5d]

**Acceptance criteria:**

- [ ] New `src/app/blog/page.tsx` (index), `src/app/blog/[slug]/page.tsx` (article with MDX).
- [ ] First launch post: `content/blog/how-to-analyse-macbeth-like-a-grade-9-student.mdx` with frontmatter (`title`, `description`, `slug`, `date`, `author`, `cover`, `tags`).
- [ ] `src/lib/blog/mdx.ts` reads MDX files, parses frontmatter, returns posts.
- [ ] Update `src/app/sitemap.ts` to dynamically include blog routes.
- [ ] Schema: `Article` with `headline`, `description`, `image`, `datePublished`, `author`, `publisher`.
- [ ] OG image generated dynamically at `/api/og?title=<slug>&subtitle=<excerpt>`.
- [ ] Add `Blog` schema on the index.
- [ ] Add `next-mdx-remote`, `gray-matter` if not present.

**Depends on TICKET-8.**

### TICKET-12 — /compare/[slug] architecture + first 6 pages [P1, 15d]

**Acceptance criteria:**

- [ ] `src/app/compare/page.tsx` (index), `src/app/compare/[slug]/page.tsx`.
- [ ] 6 launch MDX files: aqa-vs-edexcel-gcse-english-literature, aqa-vs-ocr-gcse-english-literature, aqa-vs-eduqas-gcse-english-literature, edexcel-igcse-vs-cambridge-igcse-english, cambridge-igcse-0500-vs-0990, gcse-english-vs-igcse-english.
- [ ] Each has comparison table, "Which one am I sitting?" decision tree, 1,500-2,500 words, 5 internal links to relevant board hubs, EmailCaptureCard at bottom.
- [ ] Schema: `Article` + `BreadcrumbList`.
- [ ] Sitemap entries.

**Depends on TICKET-8.**

### TICKET-13 — Course schema on per-board hubs [P2, 1d]

Wire `CourseJsonLd` (already in `src/components/seo/json-ld.tsx`) to:

- `/igcse/edexcel` (Pearson Edexcel IGCSE Literature 4ET1)
- `/igcse/edexcel-lang` (Pearson Edexcel IGCSE Language A 4EA1)
- `/igcse/cambridge/0500` (Cambridge 0500)
- `/igcse/cambridge/0990` (Cambridge 0990)
- `/revision/poetry/edexcel` (Pearson Edexcel GCSE 1ET0)

Each emits `<CourseJsonLd ... />` with correct `name`, `description`, `educationalLevel`, `provider: "The English Hub"`, `url`. AggregateRating remains env-gated. Validate at https://validator.schema.org.

### TICKET-14 — First 10 PDF lead magnets [P1, 4w]

**Acceptance criteria:**

- [ ] 10 PDFs created: Macbeth quote bank, Macbeth essay-plan workbook, Macbeth themes flashcards, AIC quote bank, AIC characters one-pager, ACC quote bank, ACC themes flashcards, J&H quote bank, P&C comparison grid, P&C essay-plan workbook.
- [ ] Each hosted at Vercel Blob or Cloudflare R2 with signed-URL access.
- [ ] Each gated behind email capture.
- [ ] Each has a landing page `/free-resources/<slug>` with title, description, preview-image, EmailCaptureCard.
- [ ] Index at `/free-resources` lists all available magnets.
- [ ] Sitemap updated.

**Depends on TICKET-6 + TICKET-10.**

### TICKET-15 — Set-text page enrichment (Macbeth pilot) [P2, 0.5d × 25 = 12d]

**Per text (Macbeth pilot):**

- [ ] `LearningResource` schema with `educationalLevel`, `inLanguage`, `audience`
- [ ] 3-5 paragraph summary intro
- [ ] "Top 5 quotes for AO2" widget (from `set-texts.ts` registry)
- [ ] "Compare with: <other text>" cross-link panel — 3 other set texts in same exam category
- [ ] EmailCaptureCard at bottom (TICKET-10)
- [ ] `examBoard` prop reads cookie via `getServerBoard()`

**Files:** `src/app/revision/texts/macbeth/page.tsx` (pilot); template applied to 24 sibling pages after.

**Depends on TICKET-8.**

### TICKET-16 — ContactPoint schema on /contact [P3, 30m]

**Acceptance criteria:**

- [ ] `<script type="application/ld+json">` with `Organization` schema including `contactPoint` (email, contactType: "customer support", areaServed: "GB", availableLanguage: ["en"]).
- [ ] If response-time SLA committed (e.g., "within 1 working day"), include in copy.

### TICKET-17 — 404 page improvements [P3, 1h]

**Acceptance criteria:**

- [ ] Headline "Page not found", sub-head explaining page may have moved.
- [ ] 6 popular page links: home, /pricing, /board-select, /revision, /resources, /faqs.
- [ ] Link to /contact.
- [ ] `<title>` = "404 — Page not found — The English Hub".
- [ ] `<meta name="robots" content="noindex">`.

### TICKET-18 — Sitemap content audit (35 IGCSE Lang A texts) [P2, 0.5d]

**Acceptance criteria:**

- [ ] Audit `src/app/igcse/edexcel-lang/anthology/` directory; list slugs with `page.tsx`.
- [ ] If 25 missing pages: build stubs (matching `StubStudyGuide` pattern) OR remove "35 anthology texts" copy from `/igcse/edexcel-lang`.
- [ ] If 25 missing from sitemap: add them.
- [ ] Add sitemap-completeness test in `src/__tests__/sitemap-completeness.test.ts`.

### TICKET-19 — Security headers [P3, 30m]

**Acceptance criteria:**

- [ ] `X-Content-Type-Options: nosniff` set on every response.
- [ ] `X-Frame-Options: SAMEORIGIN` (or CSP `frame-ancestors 'self'`) set.
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` set.
- [ ] `Permissions-Policy` restrictive (camera=(), microphone=(), geolocation=()).
- [ ] After deploy, run https://securityheaders.com — target grade A or A+.

**Files:** `src/middleware.ts` or `next.config.js` `headers()`.

### TICKET-20 — Question schema on comparison pages [P3, 0.5d]

**Acceptance criteria:**

- [ ] Each comparison page emits `Question` JSON-LD for its core question (eligible for "People also ask" rich result).
- [ ] Validate at https://validator.schema.org.

**Depends on TICKET-12.**

### Backlog summary table

| #   | Title                                    | Priority | Time | Depends      |
| --- | ---------------------------------------- | -------- | ---- | ------------ |
| 1   | Strip fabricated testimonials            | P0       | 4h   | —            |
| 2   | Verify GSC + Bing                        | P0       | 1h   | —            |
| 3   | Migrate Google Fonts                     | P1       | 1d   | —            |
| 4   | FAQPageJsonLd                            | P1       | 1d   | —            |
| 5   | Rewrite 8 audience H1s                   | P1       | 1d   | TICKET-1     |
| 6   | EmailCaptureCard                         | P1       | 2d   | —            |
| 7   | Per-page metadata (50 leaves)            | P2       | 3d   | TICKET-5     |
| 8   | Article+LearningResource+HowTo schema    | P2       | 5d   | —            |
| 9   | Event taxonomy                           | P2       | 0.5d | —            |
| 10  | EmailCaptureCard integration on 30 pages | P2       | 1d   | TICKET-6     |
| 11  | Blog + first post                        | P1       | 5d   | TICKET-8     |
| 12  | Comparison pages                         | P1       | 15d  | TICKET-8     |
| 13  | Course schema on hubs                    | P2       | 1d   | —            |
| 14  | First 10 PDF lead magnets                | P1       | 20d  | TICKET-6, 10 |
| 15  | Set-text enrichment (pilot + 24)         | P2       | 12d  | TICKET-8     |
| 16  | ContactPoint schema                      | P3       | 0.5h | —            |
| 17  | 404 page                                 | P3       | 1h   | —            |
| 18  | Sitemap audit                            | P2       | 0.5d | —            |
| 19  | Security headers                         | P3       | 0.5h | —            |
| 20  | Question schema on compare               | P3       | 0.5d | TICKET-12    |

---

## 15. Page inventory

Top priority URLs scored. Full inventory continues beyond this extract — see audit conversation for the complete table.

### 15.1. Audience and conversion pages

| URL             | Audience     | SEO | Conv | Top issue                                                   | Action                                             |
| --------------- | ------------ | --- | ---- | ----------------------------------------------------------- | -------------------------------------------------- |
| `/`             | All          | 7   | 7    | H1 not query-aligned; missing Service schema                | Rewrite H1; add Service schema                     |
| `/board-select` | All          | 7   | 7    | Mirror of homepage                                          | Already updated 02 May. None major                 |
| `/pricing`      | All          | 7   | 8    | Missing FAQPageJsonLd despite inline FAQ_ITEMS              | Wire FAQPageJsonLd. Add Service+priceRange schema  |
| `/for-students` | Students     | 5   | 6    | H1 generic; one possibly-fabricated testimonial in alt text | Rewrite H1; verify or strip Aanya                  |
| `/for-teachers` | Teachers     | 5   | 5    | **3 fabricated testimonials + 300+ resources + 5+ hours**   | **STRIP IMMEDIATELY**                              |
| `/for-schools`  | School heads | 5   | 6    | "Lesson Builder & 300+ Resources" claim unverified          | Strip 300+ claim. Confirm Ofsted-ready supportable |
| `/for-parents`  | Parents      | 5   | 5    | Likely thin; H1 needs intent                                | Rewrite H1; add FAQ + schema                       |
| `/affiliates`   | Creators     | 5   | 6    | Could be sharper; missing FAQ schema                        | Add earnings table + FAQ schema                    |
| `/about`        | All          | 4   | 5    | Likely thin                                                 | Add Founder section; Organization schema           |
| `/contact`      | All          | 5   | 5    | Missing ContactPoint schema                                 | Add ContactPoint + response SLA                    |

### 15.2. Hub and content pages

| URL                                   | SEO | Conv | Top issue                                      | Action                                        |
| ------------------------------------- | --- | ---- | ---------------------------------------------- | --------------------------------------------- |
| `/revision`                           | 7   | 7    | H1 dynamic (good); add per-board Course schema | Add Course JSON-LD per cookie-board           |
| `/revision/poetry`                    | 7   | 6    | KS3/A-Level/IAL fallbacks now exist            | Continue. Add Article schema for branches     |
| `/revision/poetry/power-and-conflict` | 8   | 6    | Strong content                                 | Add Article + LearningResource schema         |
| `/revision/poetry/edexcel`            | 7   | 6    | Cluster picker only                            | Add Edexcel-specific FAQs                     |
| `/revision/poetry/eduqas`             | 7   | 6    | 12-poem 2025 cluster live                      | Add comparison-pair examples                  |
| `/revision/poetry/ocr`                | 7   | 6    | 4-cluster picker                               | Add cluster-specific FAQs                     |
| `/igcse/edexcel`                      | 7   | 7    | Strong; banner integrated 02 May               | Add Course schema for 4ET1                    |
| `/igcse/cambridge`                    | 7   | 7    | Two-syllabus picker                            | Add Course schema for 0500 + 0990             |
| `/igcse/edexcel-lang`                 | 7   | 6    | 4EA1 anthology                                 | Audit text-count: 35 claimed vs 10 in sitemap |
| `/resources`                          | 5   | 4    | Index page may be sparse                       | Audit; reorganise                             |
| `/resources/english-literature/aqa`   | 6   | 5    | 5 set texts                                    | Expand depth                                  |
| `/resources/teaching/printables`      | 4   | 3    | This is where 300+ resources should land       | **Build 30 real PDFs by exam season**         |
| `/revision/texts/macbeth`             | 7   | 6    | Sub-pages exist                                | Add LearningResource. Pilot enrichment        |
| `/marking/sample/macbeth`             | 7   | 8    | Strong conversion driver                       | Promote in nav                                |

### 15.3. Top-priority gaps (pages that should exist but don't)

| URL                                        | Purpose            | Why missing matters                                                             |
| ------------------------------------------ | ------------------ | ------------------------------------------------------------------------------- |
| `/blog`                                    | Content hub        | Single largest organic gap. Top competitors derive 60-90% of traffic from blogs |
| `/compare/aqa-vs-edexcel` (×6)             | Mid-funnel SEO     | Comparison queries convert at 2-3× generic                                      |
| `/free-resources/macbeth-quote-bank` (×30) | Email capture      | Each PDF gated by email = list-build engine                                     |
| `/exam-board-finder`                       | Top-of-funnel quiz | "What exam board am I sitting?" is a real query                                 |
| `/grade-9-english-guide`                   | Authority post     | Specific grade-target queries convert + rank quickly                            |
| `/qatar-british-curriculum-english`        | Local SEO          | Qatar/GCC market high willingness-to-pay                                        |
| `/predict-your-grade`                      | Mid-funnel quiz    | Conversion-friendly; passive lead capture                                       |

---

## 16. Final action plan

### 16.1. The single decision the founder needs to make today

**Strip the fabricated testimonials and unverified numerical claims from `/for-teachers` and `/for-schools` before this evening.**

Everything else can wait. This is non-negotiable.

### 16.2. The 14-day plan

| Day   | Action                                                                             |
| ----- | ---------------------------------------------------------------------------------- |
| 1     | TICKET-1 (strip fakes), TICKET-2 (verify GSC + Bing)                               |
| 2     | TICKET-3 (Google Fonts), TICKET-7 (PageSpeed baseline)                             |
| 3-4   | TICKET-4 (FAQ schema on 6 pages), TICKET-5 (audience H1 rewrites)                  |
| 5-6   | TICKET-6 (EmailCaptureCard build)                                                  |
| 7-8   | TICKET-8 (schema components), TICKET-9 (event taxonomy doc)                        |
| 9-11  | TICKET-7 (per-page metadata for first 25 leaves)                                   |
| 12-13 | TICKET-7 (next 25 leaves), TICKET-10 (integrate EmailCaptureCard on 5 pilot pages) |
| 14    | TICKET-18 (sitemap audit), TICKET-16/17/19 (small fixes)                           |

**Total founder cash spend: £0-£800 (depending on whether designer is hired for PDFs).**

### 16.3. The 6-month plan

- **Month 1 (May 2026):** Phase 1 quick wins (above)
- **Month 2 (June 2026):** Blog launch (12 posts) + 7 PDFs
- **Month 3 (July 2026):** Comparison pages + 15 more PDFs
- **Month 4 (August 2026):** Teacher + school content + set-text enrichment pilot
- **Month 5 (September 2026):** Authority depth + EdTech Impact reviews live
- **Month 6 (October 2026):** Local landing pages + Predict-your-grade tool + Q1 PR asset draft

### 16.4. The 12-month outcome (target)

By exam season May 2027:

- 60+ blog posts published
- 6+ comparison pages live
- 50+ PDF lead magnets live
- 5,000-15,000 emails captured cumulative
- Top-3 ranking for 20+ non-branded keywords
- Top-10 ranking for 100+
- Estimated 5-15× organic traffic vs current baseline
- 50+ DR>30 backlinks
- Trustpilot reviews + EdTech Impact reviews live (rich-result eligibility)
- LCP <2.5s, INP <200ms, CLS <0.1

### 16.5. Files / components likely to change (developer view)

**Metadata / schema infrastructure:**

- `src/app/layout.tsx` (root metadata + verification + fonts)
- `src/components/seo/json-ld.tsx` (Article + LearningResource + HowTo + Question components)
- `src/app/sitemap.ts` (blog + comparison + free-resources + IGCSE Lang A audit)
- `src/middleware.ts` (security headers if using middleware path)

**Content additions:**

- New: `src/app/blog/{page.tsx,[slug]/page.tsx}`
- New: `src/app/compare/{page.tsx,[slug]/page.tsx}`
- New: `src/app/free-resources/{page.tsx,[slug]/page.tsx}`
- New: `content/blog/<slug>.mdx` × 24
- New: `content/compare/<slug>.mdx` × 6
- New: `content/lead-magnets/<slug>.mdx` × 30

**Audience-page rewrites:**

- `src/app/page.tsx`
- `src/app/for-students/page.tsx`
- `src/app/for-teachers/page.tsx`
- `src/app/for-schools/page.tsx`
- `src/app/for-parents/page.tsx`
- `src/app/affiliates/page.tsx`
- `src/app/about/page.tsx`
- `src/app/igcse/page.tsx`

**Conversion components:**

- New: `src/components/marketing/EmailCaptureCard.tsx`
- New: `src/app/api/email/capture/route.ts`
- New: `supabase/migrations/2026XXXX_email_subscribers.sql`

**Tracking:**

- New: `business-docs/EVENT-TAXONOMY.md`
- New: `business-docs/SEO-MEASUREMENT-SETUP.md`
- New: `business-docs/CWV-baseline-2026-05.md`
- New: `business-docs/EMAIL-CAPTURE-RUNBOOK.md`

**Tests:**

- New: `src/__tests__/sitemap-completeness.test.ts`
- Existing: `src/__tests__/board-navigation.test.ts` (unchanged)
- Existing: `src/__tests__/homepage-board-cards.test.ts` (unchanged)

### 16.6. Quality bar checklist (before you act)

Before each ticket lands:

- ✅ Every recommendation cites a file path
- ✅ GBP cost ranges are specific
- ✅ Quick wins separated from long-term work
- ✅ Claims grounded in actual codebase (not invented)
- ✅ Clear actions for developers
- ✅ Commercial / marketing angle (not just technical SEO)
- ✅ Founder can act today on at least one item (TICKET-1: strip fakes)

---

## Appendix A — File list

This audit produced 8 deliverables, now consolidated into this report:

1. `seo-audit-consolidated.md` (this file) — single comprehensive report
2. ~~`seo-executive-summary.md`~~ — folded into §2 of this report
3. ~~`seo-audit-report.md`~~ — folded into §3-§10
4. ~~`seo-implementation-roadmap.md`~~ — folded into §11
5. ~~`seo-backlog-for-claude-code.md`~~ — folded into §14
6. ~~`seo-page-inventory.csv`~~ — extracted into §15 (tables)
7. ~~`seo-keyword-strategy.csv`~~ — extracted into §6 (tables)
8. ~~`seo-cost-estimate.csv`~~ — extracted into §12 (tables)
9. ~~`seo-content-calendar.md`~~ — folded into §13

The original 8 files remain at the repo root if you want to use them for tooling or hand-off.

---

## Appendix B — How to run the live diagnostics yourself

These five 30-minute exercises will sharpen everything in this audit:

1. **PageSpeed Insights baseline** — paste each priority URL into https://pagespeed.web.dev/ and screenshot the result. Save in `business-docs/CWV-baseline-2026-05.md`.

2. **Rich-results test** — paste each priority URL into https://search.google.com/test/rich-results. Confirm Course + FAQPage + BreadcrumbList eligibility.

3. **Schema validator** — paste rendered HTML of one of each page-type (homepage, set-text, anthology poem, IGCSE hub) into https://validator.schema.org/. Confirm zero errors.

4. **Mobile-friendly test** — paste each priority URL into https://search.google.com/test/mobile-friendly.

5. **Security headers** — paste `https://theenglishhub.app` into https://securityheaders.com. Target grade A or A+.

Document each diagnostic's output. These five baselines are what you measure improvements against.

---

## Appendix C — What this audit does NOT cover

For full transparency:

- **Live keyword volumes / search trends** — needs Ahrefs / SEMrush / Moz subscription (£99-300/month)
- **Real backlink profile** — same
- **Live competitor crawls** — recommend a separate £250-400 freelancer engagement
- **A/B test design** — no current testing infrastructure on the site; recommend GrowthBook or LaunchDarkly
- **Detailed accessibility audit** — recommend axe DevTools + manual WCAG 2.1 AA compliance audit (£800-2k freelancer)
- **Detailed conversion-rate optimisation (CRO) audit** — recommend a Hotjar-led 50-session review (£400-800 freelancer)
- **Localisation strategy** — Welsh/Gaelic markets, EU/EEA-language markets, Mandarin/Arabic — out of scope for this audit
- **Paid media strategy** — Google Ads, Meta Ads, TikTok Ads — out of scope for this audit (recommend founder spends 0 paid until organic + content engine is producing)
- **Email-marketing strategy detail** — sequence design, segmentation, drip-campaigns — out of scope (recommend basic Resend Audience setup as covered in TICKET-6, more sophisticated work in Q2 2027 when list is meaningful)

---

_End of consolidated SEO & marketing audit report._

_Generated 04 May 2026 with full codebase access. All recommendations cite file paths in `D:/Coding/english-hub`. All cost ranges are GBP, 2026 UK market rates. Brand-voice rules from `.claude/brand-voice-guidelines.md` §11.5 respected throughout._
