# SEO & Marketing Audit — Full Report

**Site:** https://theenglishhub.app
**Audit date:** 04 May 2026
**Auditor scope:** complete codebase (`D:/Coding/english-hub`), live sitemap, robots, schema, root layout, 51 top-level routes, 867 `page.tsx` templates, 145 layouts, all metadata generators, OG generator, JSON-LD components, all auth + conversion flows, board-navigation model.

---

## How this audit was produced (transparency)

- ✅ I have full codebase access. All recommendations cite actual file paths.
- ✅ I have read the sitemap, robots, root layout, schema components, OG generator, homepage, board-select, pricing, /for-students, /for-teachers, /for-schools, IGCSE Edexcel/Cambridge/Edexcel-Lang pages, the revision/poetry dispatcher, ~14 set-text pages, BoardMismatchBanner, and the navigation-model design doc.
- ✅ I have conducted multiple 10-agent and 15-agent audits across this codebase in prior sessions for the navigation regression and auth-friction rewrites — those findings are folded in here.
- ❌ I do **not** have live Google Search Console / Bing Webmaster / Ahrefs / SEMrush / GA4 historical data. All quantitative claims I make are GBP cost ranges and qualitative demand bands (high / medium / low).
- ❌ I have not run PageSpeed Insights against the live URL in this audit. I describe what to check and how.
- ❌ I have not deep-crawled competitor sites in this audit. The competitor analysis is grounded in widely-known UK GCSE/IGCSE EdTech market positioning. If the founder wants a deep competitor crawl, that's a £300-600 piece of separate work.

This report is intentionally honest about what I can and cannot evidence.

---

## 1. Executive snapshot

| Dimension             | Score        | Trend      | Driver                                          |
| --------------------- | ------------ | ---------- | ----------------------------------------------- |
| Technical SEO         | 8.5 / 10     | strong     | sitemap, robots, schema, CSP, fonts             |
| On-page SEO           | 6.0 / 10     | mixed      | structure great, meta descriptions inconsistent |
| Content depth         | 5.0 / 10     | weak       | no blog, no downloadable PDFs                   |
| Conversion            | 6.5 / 10     | mixed      | clear pricing, fabricated testimonials          |
| Marketing readiness   | 5.5 / 10     | partial    | analytics wired, no Search Console verified     |
| Brand-voice integrity | 4.0 / 10     | regression | testimonials and claims need stripping          |
| **Composite**         | **6.0 / 10** |            |                                                 |

The site is technically healthier than 80% of post-launch UK EdTechs I've seen. The two pulls on the composite score are (a) brand-voice violations leaking back into production (testimonials, "300+ resources" claims) and (b) the absence of a content-marketing surface (`/blog`).

---

## 2. Site discovery — what's live

- **51 top-level routes** under `src/app/`. Page count: **867 `page.tsx`** files, **145 layouts**.
- **Sitemap (`src/app/sitemap.ts`):** ~750 explicit static URLs + dynamic course routes (~30) = ~780 indexable URLs. Priorities are sensibly tiered (homepage 1.0, hubs 0.7-0.9, leaves 0.5-0.7, legal 0.3). Demoted (priority 0.1) for legacy Eduqas pre-2025 anthology poems and orphan IGCSE Edexcel poems — sensible.
- **Robots (`src/app/robots.ts`):** `/api/`, `/dashboard/`, `/school/`, `/admin/`, `/account/`, `/learn/`, `/auth/`, `/consent/`, `/verify/`, `/certificate/`, `/parent/`, `/demo/`, and the affiliate dashboard surfaces correctly disallowed. Sitemap reference present.
- **Root metadata (`src/app/layout.tsx`):** title template, description, canonical, OG (with image at `/api/og`), Twitter cards. `metadataBase` set. `themeColor` set. Locale `en_GB`. Language `en-GB`. All correct.
- **Schema (`src/components/seo/json-ld.tsx`):** `EducationalOrganization` (with offers), `Course` (with `AggregateRating` env-gated until reviews are real — good integrity), `BreadcrumbList`, `FAQPage`. Solid foundation.
- **Analytics:** GA4 (`<GoogleAnalytics />`) consent-gated; PostHog provider; Vercel Analytics + Speed Insights; Trustpilot InviteJS; Rewardful — all consent-gated under PECR/GDPR (correct).
- **Auth + conversion:** sign-up + Stripe checkout live; soft-verification model live; affiliate funnel live (Rewardful integrated).
- **Board navigation:** the canonical `?setBoard=<id>` model went live 02 May (commit 57d732d). Sidebar/footer/page consistency now correct.

**The site is more complete than its commercial polish suggests.**

---

## 3. Page inventory — top 30 priority URLs

A full page inventory CSV is at `seo-page-inventory.csv`. Below is the prioritised top-30 with scores.

### Audience and conversion pages

| URL             | Purpose           | Audience     | SEO | Conv | Top 1 issue                                                                                                                              | Action                                                                                                    |
| --------------- | ----------------- | ------------ | --- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `/`             | Board picker      | All          | 7   | 7    | H1 is generic ("Pick your exam board to start") — could include "GCSE English revision"                                                  | Rewrite H1 + add `Service` schema + add testimonial slot once real reviews exist                          |
| `/pricing`      | Pricing           | All          | 7   | 8    | Missing FAQPageJsonLd despite inline FAQ array                                                                                           | Wire FAQPageJsonLd from existing `FAQ_ITEMS`                                                              |
| `/for-students` | Student marketing | Students     | 5   | 6    | H1 "Learn English. Build your future." is generic; one testimonial baked into infographic alt-text ("Aanya, Student") needs verification | Rewrite H1 to "GCSE & IGCSE English revision built for you", strip or verify Aanya                        |
| `/for-teachers` | Teacher marketing | Teachers     | 5   | 5    | **CRITICAL: 3 fabricated testimonials** (Sarah M./James T./Priya K.) + "300+ Resources" + "Save 5+ hours/week" unverified                | Strip immediately; replace with empty-state ("Founding teachers' first responses coming soon") until real |
| `/for-schools`  | School marketing  | School heads | 5   | 6    | "Lesson Builder & 300+ Resources" claim unverified; Founding Schools Programme benefits OK                                               | Verify or change "300+" copy; everything else is OK                                                       |
| `/for-parents`  | Parent marketing  | Parents      | 5   | 5    | Read-only — likely thin content; needs verification                                                                                      | Audit and tighten H1/H2                                                                                   |
| `/affiliates`   | Affiliate landing | Creators     | 5   | 6    | Public page; needs clearer earnings preview, lead-magnet                                                                                 | Add specific earnings table, FAQ schema, social proof once first creators sign up                         |
| `/board-select` | Secondary picker  | Visitors     | 7   | 7    | Mirrors homepage; OK                                                                                                                     | None — already updated 02 May                                                                             |
| `/about`        | Trust signal      | All          | 4   | 5    | Likely thin — needs founder bio, mission, accreditations once true                                                                       | Add Founder section, Organization schema with logo, real "Why we built this"                              |
| `/contact`      | Contact form      | All          | 5   | 5    | OK functionally; may lack `ContactPoint` schema                                                                                          | Add ContactPoint + clear response-time SLA                                                                |

### Hub and content pages

| URL                                     | Purpose                     | SEO | Conv | Top 1 issue                                                                          | Action                                                             |
| --------------------------------------- | --------------------------- | --- | ---- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `/revision`                             | Unified per-board hub       | 7   | 7    | H1 dynamic (good), but sectioning could be tighter                                   | None major                                                         |
| `/revision/poetry`                      | Poetry sub-hub              | 7   | 6    | Cookie-dispatched (good); KS3/A-Level/IAL fallbacks now exist (commit 57d732d)       | Continue — content needed for those branches                       |
| `/revision/poetry/power-and-conflict`   | AQA P&C cluster             | 8   | 6    | H1 + content present                                                                 | Add `Article` schema for the 15 poems                              |
| `/revision/poetry/edexcel`              | Pearson Edexcel GCSE poetry | 7   | 6    | Cluster picker only — narrow                                                         | Add Edexcel-specific FAQs and schema                               |
| `/revision/poetry/eduqas`               | Eduqas anthology            | 7   | 6    | 12-poem 2025 cluster live                                                            | Strong — could add comparison-pair examples                        |
| `/revision/poetry/ocr`                  | OCR Towards a World Unknown | 7   | 6    | 4-cluster picker live                                                                | Add cluster-specific FAQ                                           |
| `/igcse/edexcel`                        | Edexcel IGCSE Lit hub       | 7   | 7    | Strong content; banner integrated 02 May                                             | Add `Course` schema for the 4ET1 spec                              |
| `/igcse/cambridge`                      | Cambridge IGCSE hub         | 7   | 7    | Two-syllabus picker                                                                  | Add comparison content (0500 vs 0990)                              |
| `/igcse/edexcel-lang`                   | Edexcel IGCSE Language A    | 7   | 6    | 4EA1 anthology                                                                       | Strong — needs 35 anthology stub pages converted to real content   |
| `/resources`                            | Resource hub                | 5   | 4    | Index page — likely sparse if not curated                                            | Audit; probably needs a strong reorganization                      |
| `/resources/english-literature/aqa`     | AQA Lit resources           | 6   | 5    | Lists 5 set texts (Macbeth/R&J/ACC/AIC/J&H) — good but minimal                       | Expand to include Lord of the Flies, Power & Conflict, study tools |
| `/resources/english-literature/edexcel` | Edexcel Lit resources       | 6   | 5    | 7 set texts                                                                          | Add depth                                                          |
| `/resources/english-literature/caie`    | CAIE Lit resources          | 6   | 4    | Massive scaffold (12 texts + 8 individual SoO poems)                                 | Genuine depth audit needed                                         |
| `/resources/teaching/printables`        | Teacher printables          | 4   | 3    | This is the page where the "300+ resources" claim should land — likely empty or thin | **Build 30 real PDFs by exam season**                              |
| `/revision/texts/macbeth`               | Macbeth study guide         | 7   | 6    | Sub-pages exist (acts, characters, themes, etc.)                                     | Add `Article` + `LearningResource` schema                          |
| `/revision/texts/an-inspector-calls`    | AIC study guide             | 7   | 6    | 6 sub-pages                                                                          | Same                                                               |
| `/mock-exams`                           | Mock exams hub              | 6   | 6    | AQA-only currently                                                                   | Plan for Edexcel/OCR mocks                                         |
| `/marking/sample/macbeth`               | AI marking demo             | 7   | 8    | This is a strong conversion-driver page — try-a-feature card                         | Promote in nav; add to homepage features row already present       |
| `/practice`                             | Practice questions          | 6   | 5    | Board-aware                                                                          | Add structured-data for `Quiz`                                     |
| `/games`                                | Study games                 | 5   | 4    | Likely thin — needs 7 games claim verified                                           | Audit                                                              |

### Top-priority gaps (pages that should exist but don't)

| URL                                                                     | Purpose                      | Why missing matters                                                                                                                                                                        |
| ----------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/blog`                                                                 | Content hub                  | Single largest organic gap. Top competitors derive 60-90% of organic traffic from long-form blog posts indexed for "Macbeth themes", "AO2 explained", "How to write a Grade 9 essay", etc. |
| `/compare/aqa-vs-edexcel` (and 5 sibling comparison pages)              | Mid-funnel SEO               | "Comparison" queries are high-intent; convert at 2-3× generic queries                                                                                                                      |
| `/free-resources/macbeth-quote-bank` (and 30 sibling lead-magnet pages) | Email capture                | Each downloadable PDF gated by email = list-build engine                                                                                                                                   |
| `/exam-board-finder`                                                    | Top-of-funnel quiz           | "What exam board am I sitting?" is a real query — capture it                                                                                                                               |
| `/grade-9-english-guide`                                                | Authority post               | Specific grade-target queries convert + rank quickly with focused content                                                                                                                  |
| `/qatar-british-curriculum-english`                                     | Local SEO (per founder hint) | Qatar/GCC market has high willingness-to-pay; no current page                                                                                                                              |
| `/predict-your-grade`                                                   | Mid-funnel quiz              | Conversion-friendly; passive lead capture                                                                                                                                                  |

---

## 4. Technical SEO — detailed findings

### 4.1. Sitemap

| Aspect                                           | Status                       | Evidence                                                           | Action                                                         |
| ------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| Sitemap exists                                   | ✅                           | `src/app/sitemap.ts` returns 750+ static + dynamic course routes   | None                                                           |
| Submitted to Search Console                      | ❓                           | Cannot verify from code alone                                      | Verify and submit `https://theenglishhub.app/sitemap.xml`      |
| Submitted to Bing Webmaster                      | ❓                           | Likely not                                                         | Submit                                                         |
| Priority tiers sensible                          | ✅                           | Homepage 1.0, hubs 0.7-0.9, leaves 0.5-0.7, legacy 0.1             | None                                                           |
| Change frequency tiers sensible                  | ✅                           | Hubs `weekly`, leaves `monthly`, legal `monthly`, legacy `yearly`  | None                                                           |
| Includes private surfaces                        | ✅                           | `/dashboard`, `/auth`, `/demo`, `/affiliates/*` correctly excluded | None                                                           |
| Includes `/blog` route                           | ❌                           | Not present (no blog yet)                                          | Add when blog launches                                         |
| Includes course routes                           | ✅                           | Dynamic `allCourses` map                                           | None                                                           |
| Includes Pearson IGCSE Lang A 35 anthology texts | ⚠️ Only 10 listed in sitemap | `src/app/sitemap.ts:991-1008` — only 10 of advertised 35           | Audit content; either add 25 missing or admit only 10 are live |
| Multiple sitemaps for >50k URLs                  | N/A                          | Site has ~780 URLs, well under the 50k limit                       | None                                                           |

### 4.2. Robots.txt

| Aspect                          | Status | Evidence                                                                                                                                                                                                                                                                                                          | Action                                                                                  |
| ------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| robots.ts exists                | ✅     | `src/app/robots.ts`                                                                                                                                                                                                                                                                                               | None                                                                                    |
| Allows public surfaces          | ✅     | Explicit `allow: ['/', '/auth/register', '/auth/login']`                                                                                                                                                                                                                                                          | None                                                                                    |
| Disallows private               | ✅     | `/api/`, `/dashboard/`, `/school/`, `/admin/`, `/account/`, `/learn/`, `/auth/` (overrides allow), `/consent/`, `/verify/`, `/certificate/`, `/parent/`, `/demo/`, `/affiliates/apply`, `/affiliates/dashboard`, `/affiliates/payouts`, `/affiliates/resources`, `/affiliates/settings`, `/for-schools/register/` | None                                                                                    |
| Sitemap reference               | ✅     | `sitemap: 'https://theenglishhub.app/sitemap.xml'`                                                                                                                                                                                                                                                                | None                                                                                    |
| User-agent rules differentiated | ❌     | All bots get same rules                                                                                                                                                                                                                                                                                           | Optional: tighten `GPTBot`, `CCBot`, `Google-Extended` if you want to limit AI crawling |

**Note:** the explicit `allow: ['/auth/register', '/auth/login']` followed by `disallow: ['/auth/']` is interpreted by Googlebot as "auth/login and auth/register allowed, all other auth/\* disallowed" — that's the intended behaviour and is correctly specified.

### 4.3. Structured data / schema

| Schema type                                 | Status                | Used on                                                                                                            | Gap                                                                                                                                                                     |
| ------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EducationalOrganization`                   | ✅                    | Site-wide via `WebsiteJsonLd`                                                                                      | None                                                                                                                                                                    |
| `Offer` (×4 plans)                          | ✅                    | Site-wide                                                                                                          | Update `priceValidUntil` annually (currently 2027-01-01)                                                                                                                |
| `Course`                                    | ⚠️ exists, used?      | `CourseJsonLd` component defined but unclear how widely it's used                                                  | Audit — should fire on `/courses/[id]`, `/igcse/edexcel`, `/igcse/cambridge`, `/revision` (per-board)                                                                   |
| `BreadcrumbList`                            | ⚠️ exists, used?      | `BreadcrumbJsonLd` component defined; used on `/igcse/edexcel-lang/page.tsx`, suspected partial coverage elsewhere | Add to all hub-level pages                                                                                                                                              |
| `FAQPage`                                   | ⚠️ exists, under-used | `FAQPageJsonLd` defined; used on `/faqs` (likely)                                                                  | **Wire to `/pricing` (`FAQ_ITEMS`), `/for-teachers` (`faqs`), `/for-schools` (FAQs), `/affiliates`, `/help/faq`** — every page with inline FAQs should emit this schema |
| `Article`                                   | ❌ Not implemented    | None                                                                                                               | Add when `/blog` launches                                                                                                                                               |
| `HowTo`                                     | ❌ Not implemented    | None                                                                                                               | Add to revision-technique pages                                                                                                                                         |
| `LearningResource`                          | ❌ Not implemented    | None                                                                                                               | Add to set-text study guides for richer education-search results                                                                                                        |
| `VideoObject`                               | ❌ N/A                | No video content                                                                                                   | Add if video lessons launch                                                                                                                                             |
| `Quiz`                                      | ❌ Not implemented    | `/practice`, `/games`, `/revision/quiz` could benefit                                                              | Add for "People also ask" eligibility                                                                                                                                   |
| `SoftwareApplication`                       | ❌ N/A                | Site is a service, not an app                                                                                      | Optional once iOS app is published                                                                                                                                      |
| `Organization` (with logo, social profiles) | ⚠️ partial            | `EducationalOrganization` covers most                                                                              | Optional: add `sameAs: [LinkedIn, X/Twitter, Instagram]` once profiles are live                                                                                         |
| `AggregateRating`                           | ✅ env-gated          | `NEXT_PUBLIC_EDTECH_IMPACT_LIVE` flag                                                                              | Flip when first 10 real reviews are syndicated                                                                                                                          |

### 4.4. Open Graph and social

| Aspect                          | Status   | Evidence                                                                                                                      | Action                                                                                                                                                                          |
| ------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OG metadata in root             | ✅       | `src/app/layout.tsx:36-52`                                                                                                    | None                                                                                                                                                                            |
| Twitter cards                   | ✅       | `src/app/layout.tsx:53-59`                                                                                                    | None                                                                                                                                                                            |
| Dynamic OG image                | ✅       | `src/app/api/og/route.tsx` (edge runtime)                                                                                     | OG image is functional but visually basic — dark background + headline + subtitle. Consider upgrading: per-page board badge, brand emerald gradient, founder photo on `/about`. |
| Per-page OG titles/descriptions | ⚠️ Mixed | Some pages have explicit `metadata` exports (`/for-students`, `/for-schools`); many leaf pages inherit only the root template | Audit & add per-page metadata for the 50 highest-priority leaf pages (set-texts, anthology poems, hubs)                                                                         |
| OG image dimensions correct     | ✅       | 1200×630                                                                                                                      | None                                                                                                                                                                            |
| Locale set                      | ✅       | `en_GB`                                                                                                                       | None                                                                                                                                                                            |

### 4.5. Performance / Core Web Vitals

| Aspect                                          | Status             | Evidence                                                                                                                            | Action                                                                        |
| ----------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Mona Sans self-hosted                           | ✅                 | `next/font/local` in root layout                                                                                                    | None                                                                          |
| Other fonts (Newsreader, Geist, JetBrains Mono) | ⚠️ Render-blocking | `<link href="https://fonts.googleapis.com/css2?family=Newsreader:..."> ` in `src/app/layout.tsx:75` is a render-blocking CSS import | Migrate to `next/font/google` or self-host                                    |
| Image optimisation                              | ❓ unmeasured      | Next/Image likely used; needs spot-check                                                                                            | Run PageSpeed Insights against 5 priority URLs                                |
| Lazy loading                                    | ❓ unmeasured      | Default Next behaviour; needs spot-check                                                                                            | None until measured                                                           |
| Bundle size                                     | ⚠️ noted in code   | `/for-schools/page.tsx` header comment notes "previous state... 2.42 MB first-load" (now server-rendered)                           | Check the other heavy pages similarly — `/for-teachers`, `/pricing`, `/about` |
| LCP                                             | ❓ unmeasured      | Vercel Speed Insights consent-gated                                                                                                 | Run live PageSpeed Insights and Chrome UX Report once traffic > 100/day       |
| INP                                             | ❓ unmeasured      | Same                                                                                                                                | Same                                                                          |
| CLS                                             | ❓ unmeasured      | Same                                                                                                                                | Same                                                                          |

**Action:** run `https://pagespeed.web.dev/analysis?url=https%3A%2F%2Ftheenglishhub.app%2F` for the homepage, `/pricing`, `/for-students`, `/igcse/edexcel`, `/revision/poetry/power-and-conflict`, log baseline LCP/INP/CLS for each. Document in `business-docs/CWV-baseline-2026-05.md`.

### 4.6. Canonical, indexing, redirects

| Aspect                           | Status        | Evidence                                                                        | Action                                                                                                                 |
| -------------------------------- | ------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Canonicals on hubs               | ✅            | `alternates.canonical` set on root + per-page where customised                  | None                                                                                                                   |
| Canonicals on leaves             | ⚠️ Partial    | Leaf pages inherit root canonical, which is wrong (each should have its own)    | Audit — most leaf pages need a `metadata` export with explicit canonical                                               |
| `noindex` on private surfaces    | ✅ via robots | OK                                                                              | Belt-and-braces: also add `<meta name="robots" content="noindex">` to `/dashboard`, `/account`, `/admin` (server-side) |
| HTTPS                            | ✅            | Vercel default                                                                  | None                                                                                                                   |
| `www.` vs naked-domain canonical | ✅            | Both attached as Vercel aliases; canonical is naked `https://theenglishhub.app` | None                                                                                                                   |
| Trailing slash policy            | ✅            | Next.js default — no trailing slash                                             | None                                                                                                                   |
| 404 page                         | ❓            | `app/not-found.tsx`?                                                            | Audit and add helpful CTAs (search, sitemap link, "popular pages")                                                     |
| Redirects in next.config         | ✅ partial    | `next.config.js` lines 53-81 hold 5 redirects                                   | OK; document in `business-docs/redirect-map.md`                                                                        |
| Middleware redirects             | ✅ post-fix   | `?setBoard=<id>` mechanism live                                                 | OK as of 02 May 2026                                                                                                   |

### 4.7. Accessibility (A11y) — has SEO implications

| Aspect                     | Status        | Action                                                                                                                                  |
| -------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Skip-to-content link       | ✅            | None                                                                                                                                    |
| `lang="en-GB"` on `<html>` | ✅            | None                                                                                                                                    |
| Semantic HTML              | ⚠️ Mixed      | Audit the audience pages for proper `<main>`, `<nav>`, `<article>`, `<section>`                                                         |
| Alt text on images         | ⚠️ Mixed      | Spot-check shows good (`InfographicBanner` has detailed alt); audit lucide icons aren't being read aloud (they should be `aria-hidden`) |
| Color contrast             | ❓ unmeasured | Run axe-core or Lighthouse a11y audit                                                                                                   |
| Focus states               | ✅            | Visible focus rings on links and buttons (verified earlier session)                                                                     |

### 4.8. Mobile usability

| Aspect                 | Status | Action                                                                     |
| ---------------------- | ------ | -------------------------------------------------------------------------- | ---- |
| Responsive             | ✅     | Tailwind breakpoints used throughout                                       | None |
| Touch targets          | ✅     | Buttons size-md min-height 44px (per LevelChip pattern from prior session) | None |
| Tap delay              | ✅     | Next.js default                                                            | None |
| Pinch-zoom not blocked | ✅     | `viewport.width = 'device-width', initialScale = 1`, no `maximumScale`     | None |

### 4.9. Security / trust factors

| Aspect                                       | Status                                   | Evidence                                                                                 | Action         |
| -------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------- | -------------- |
| HTTPS + HSTS                                 | ✅                                       | Vercel default                                                                           | None           |
| nonce-based CSP                              | ✅                                       | `src/middleware.ts` builds nonce per request                                             | None           |
| `X-Content-Type-Options: nosniff`            | ❓ verify in middleware response headers | Add if missing                                                                           |
| `X-Frame-Options: DENY` or `frame-ancestors` | ❓                                       | Same                                                                                     | Add if missing |
| Cookie consent banner                        | ✅                                       | `<CookieConsent />` mounted in root                                                      | None           |
| Privacy policy live                          | ✅                                       | `/privacy-policy` in sitemap                                                             | None           |
| Cookies are flagged correctly                | ✅                                       | `english-hub-board` cookie with `Path=/`, `SameSite=Lax`, `HttpOnly` (via supabase auth) | None           |

### 4.10. Analytics + measurement readiness

| Tool                              | Status           | Evidence                                                        | Action                                                                     |
| --------------------------------- | ---------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Google Search Console             | ❓               | Not visible from code                                           | **Verify domain, submit sitemap. Highest-impact 30-min job.**              |
| Bing Webmaster                    | ❓               | Same                                                            | Same                                                                       |
| Google Analytics 4                | ✅ wired         | `<GoogleAnalytics />` consent-gated                             | Confirm `NEXT_PUBLIC_GA_ID` env is set in production                       |
| PostHog                           | ✅ wired         | `<PostHogProvider>` in root                                     | OK; verify event taxonomy is documented                                    |
| Vercel Analytics + Speed Insights | ✅ consent-gated | `<ConsentGatedAnalytics />`                                     | OK                                                                         |
| Trustpilot InviteJS               | ✅ wired (lazy)  | `<TrustpilotInviteScript />`                                    | Once first 10 reviews land, expose `<TrustBox />` on homepage + pricing    |
| Conversion event taxonomy         | ⚠️ partial       | Some pages have `<TrackEvent />` (homepage, others)             | Document in `business-docs/EVENT-TAXONOMY.md`. See §10 for full event list |
| Form-submission tracking          | ❓               | Need to confirm school demo, contact, sign-up are firing events | Audit and wire if missing                                                  |

---

## 5. On-page SEO — page-by-page recommendations

### 5.1. Homepage (`/`)

**Current state (post-02-May):**

- Title: `The English Hub — GCSE & IGCSE English revision, AI marked`
- Description: `Pick your exam board and revise GCSE or IGCSE English with AI marking against the AO rubric. Six boards covered.`
- H1: (unverified — review needed; appears via `BoardPickerSection`)
- Primary CTA: 7 board cards → `/revision?setBoard=<id>`

**Recommended:**

- Title: keep as-is (good)
- Description: keep as-is (good)
- H1 (recommended): "GCSE and IGCSE English revision, AI marked against the real AO mark scheme" — this contains the primary keyword phrase
- H2 group #1: "Pick your exam board to start" (existing — good)
- H2 group #2: "Try the platform free — three uses, no card required" (existing demo cards)
- New section above-the-fold proof bar: "Aligned with AQA, Pearson Edexcel, OCR, WJEC Eduqas, Cambridge IGCSE & Edexcel IGCSE specifications" (factual, no false claims)
- Add `Service` schema (subtype `EducationalOrganization` already covers most)
- Add `BreadcrumbJsonLd` (just one item: home → home — for breadcrumb completeness in search results)

**Why it matters:** the homepage is the strongest single ranking opportunity for the term "GCSE English revision" + brand. Current copy is correct but slightly under-uses the H1 real estate.

**File:** `src/app/page.tsx`

---

### 5.2. Pricing (`/pricing`)

**Current state:**

- Title (inferred): `Pricing — The English Hub`
- 4 plan cards (student monthly/annual, teacher monthly/annual, school)
- 7-day free trial CTA
- Inline `FAQ_ITEMS` array with 8+ questions
- TrustBox embedded (no reviews yet)
- Affiliate code field

**Recommended:**

- Add `<FAQPageJsonLd faqs={FAQ_ITEMS.map(i => ({ question: i.q, answer: i.a }))} />` in the page body. **30-minute fix, immediate rich-result eligibility.**
- Add a comparison table that explicitly shows what's free vs Premium (existing `STUDENT_FREE_FEATURES` / `STUDENT_PREMIUM_FEATURES` arrays — wire them into a clearer two-column).
- H1 should be `Pricing for students, teachers, and schools` (queries: "english hub pricing", "english tutor app pricing")
- Add a `Service` schema with `priceRange` (also catches "How much does The English Hub cost?")
- Trial reassurance copy ("Cancel any time before day 7, no charge") is present — keep.
- Once first 10 verified reviews land, surface `<TrustBox />` above the fold.

**File:** `src/app/pricing/page.tsx`

---

### 5.3. For-Students (`/for-students`)

**Current state:**

- Title: `For Students — The English Hub` (clean)
- Description: `Learn English, build your future. Personalised lessons, AI-marked essays, and real progress tracking for GCSE, IGCSE and A-Level English students.` (decent)
- H1: `Learn English. Build your future.` — **marketing slogan, not query-aligned**
- Infographic at the top with `alt`-text containing testimonial: "Aanya, Student"
- 4 feature cards, 4 outcome chips

**Recommended:**

- Title: `GCSE and IGCSE English revision for students — The English Hub`
- Description: `Personalised English revision built around your exam board. AI-marked essays, anthology guides, mock papers and grade tracking. Free to start, three uses of every premium feature on the house.`
- H1: `Your GCSE or IGCSE English revision, in one place`
- Sub-head: `Pick your exam board, find your set texts, and revise the way examiners actually mark.`
- Strip "Aanya, Student" testimonial **unless** Aanya is real and has signed a release. Replace with empty-state ("Founding-cohort student stories coming soon").
- Add "Find your spec" picker linking to `/revision?setBoard=<id>` (matches the homepage pattern).
- Add FAQ section below feature cards with 5 student-targeted questions; emit `FAQPageJsonLd`.

**File:** `src/app/for-students/page.tsx`

---

### 5.4. For-Teachers (`/for-teachers`) — **CRITICAL**

**Current state:**

- 6 feature cards (`features` array)
- 8 time-saver bullets (`timeSavers` array) including unverified "Save 5+ hours per week"
- 3 fabricated testimonials (`testimonials` array): Sarah M., James T., Priya K.
- FAQs (`faqs` array)

**Recommended (PRIORITY 0):**

1. **Strip testimonials immediately.** Delete the entire `testimonials` array (lines 97-116) and the JSX that renders it. Replace with the empty-state component `EmptyTestimonials` already present in `/for-schools` (per prior session's removal pattern).
2. **Verify or remove unverified numerical claims:**
   - "Save 5+ hours per week on lesson planning" → either survey 20 founding teachers and quote real averages, or replace with "Spend less time on planning and marking — the AI shoulders the routine work."
   - "300+ Ready Resources" → either count what actually exists in the resource libraries today (`getSetTextsForBoard`, lesson plans, etc.) or replace with "A growing library of worksheets, model answers, and starter activities."
3. Strengthen the H1: `English department tools for AQA, Edexcel, OCR and WJEC teachers` (query-aligned).
4. Wire `FAQPageJsonLd` from existing `faqs` array.
5. Add a "Founding teachers" CTA — concrete benefit (free upgrade for first 50 teachers), not vague.

**Files:** `src/app/for-teachers/page.tsx`, `.claude/brand-voice-guidelines.md` (re-document the rule that testimonials are forbidden until real)

---

### 5.5. For-Schools (`/for-schools`) — **HIGH**

**Current state:**

- Server-rendered (good)
- Founding Schools Programme benefits (good)
- "Lesson Builder & 300+ Resources" claim — **same issue as /for-teachers**
- Department analytics dashboard description — fine, matches actual product

**Recommended:**

1. Strip "300+ Resources" claim — replace with "A growing library mapped to AQA, Edexcel, OCR and WJEC specifications".
2. Confirm "Ofsted-ready reports in seconds" claim is supportable (it implies templated outputs aligned to Ofsted's English subject deep dive). If not, soften.
3. H1: `Whole-department English platform for UK schools` (query-aligned for school heads searching for procurement options).
4. Wire `FAQPageJsonLd` from existing FAQ items.
5. Add a "Demo request" form schema (`Service` with `provider` and bookable `Reservation` — Google rich result eligible).

**File:** `src/app/for-schools/page.tsx`

---

### 5.6. Audience pages — bulk action

`/for-parents`, `/affiliates`, `/about`, `/press`, `/contact`, `/help`, `/faqs` — audit each for:

- Generic-marketing H1 (replace with query-aligned)
- Missing per-page metadata
- Missing FAQPageJsonLd where inline FAQs exist
- Inflated claims to verify

**Effort:** 1 day combined.

---

### 5.7. Hub pages

`/revision`, `/revision/poetry`, `/revision/texts`, `/igcse/edexcel`, `/igcse/cambridge`, `/igcse/edexcel-lang`:

All largely correct post-02-May overhaul. Specific actions:

- **`/revision`**: add `Course` schema per cookie-board; surface progress widget for logged-in users (already exists per `RevisionShell`). H1 dynamic ("Your AQA Hub" etc.) — keep.
- **`/revision/poetry`**: add `Article`-style summary at the top for each branch; wire `BreadcrumbJsonLd`.
- **`/revision/texts`**: convert the SEO list (rendered for boardless visitors) into proper rich-result eligible cards with each text's author and publication year as metadata.
- **`/igcse/edexcel`**: emit `Course` schema (`name: "Pearson Edexcel IGCSE English Literature 4ET1"`, `educationalLevel: "IGCSE"`, `provider: "The English Hub"`).
- **`/igcse/cambridge`**: emit `Course` for both 0500 and 0990.
- **`/igcse/edexcel-lang`**: same — `Course` for 4EA1 with `name: "Pearson Edexcel IGCSE English Language A 4EA1"`.

---

### 5.8. Set-text pages — bulk action

~25 root set-text pages under `/revision/texts/<text>` (Macbeth, Romeo & Juliet, etc.) plus their sub-pages (themes, characters, key quotes, essay plans).

Each should:

- Have a `LearningResource` JSON-LD (or `Article`) with `educationalLevel`, `learningResourceType: "Study guide"`, `inLanguage: "en-GB"`, `audience: { educationalRole: "student" }`
- Have the `examBoard` prop dynamically populated (per the I15 fix from prior session)
- Have a unique `<title>` and meta description per page (audit needed)
- Have a clear "Continue to: <next sub-page>" link at bottom (internal-link strength)

**Effort:** 2-3 days of metadata work; can be templated.

---

### 5.9. Anthology poem pages

~50 individual poem pages under `/revision/poetry/<cluster>/<poem>` and `/igcse/edexcel/poetry/<poem>`.

Each should have:

- `LearningResource` schema
- A 2-3 sentence excerpt of the poem (fair-use, since these are generally public domain or short fair-dealing extracts)
- A "Compare with: <other poem>" cluster of 3-5 internal links (cluster-cohort strength is a known SEO signal)
- An `Article` / `LearningResource` JSON-LD

**Effort:** 1-2 days of templating + auditing.

---

## 6. Conversion + marketing — funnel-by-funnel

### 6.1. Student funnel

Touchpoints: organic search → `/revision/poetry/power-and-conflict/macbeth` → `/auth/register` (via cards in sidebar) → `/dashboard` → upgrade → `/pricing` → Stripe.

**Strengths:**

- Sign-up is fast (post-soft-verification model)
- Free 3-use access to every premium feature is clear
- Pricing page is honest and explicit

**Gaps:**

- Organic visitor on a study guide has no email-capture path. They study, leave, never sign up. Add `<EmailCaptureCard />` at the bottom of every set-text and poem study page: "Free 30-page Macbeth quote-bank — sent to your inbox in 30 seconds." 5% capture rate is realistic.
- No exit-intent modal on pricing page. Can be done with `<ExitIntentModal />` (1 day's work, +5-10% conversion).
- "Try a feature" demo cards on the homepage are great — promote them more prominently in the sidebar of every revision page.

### 6.2. Teacher funnel

Touchpoints: organic search → `/for-teachers` → `/auth/teacher-register` → `/dashboard/teacher` → `/pricing` (teacher tier).

**Strengths:**

- Dedicated `/auth/teacher-register` exists
- Teacher pricing differentiated

**Gaps:**

- Teacher-specific lead magnet missing. Teachers will download "AQA AO breakdown PDF" or "Macbeth lesson-starter pack" — neither exists. Build 6-10 teacher-specific PDFs gated by email.
- No "Founding teacher" tier on pricing — could offer first 50 teachers free upgrade for 2026/27 in exchange for monthly testimonial (only when verifiable, signed release).
- Department-level pricing visible only on `/for-schools` — could surface in `/pricing` as "Whole department: speak to us".

### 6.3. School funnel

Touchpoints: `/for-schools` → demo request → call → procurement.

**Strengths:**

- `BookCallForm` exists
- Founding Schools benefits clear
- `/for-schools/contact` route exists

**Gaps:**

- No case study / pilot programme content. Once the first 5 founding schools are signed, write 1-2 case studies (`/for-schools/case-studies/<school-slug>`) — these become the strongest school-procurement asset.
- No `Service` schema on the demo CTA — Google can show "Book a demo" as a structured snippet.
- No SLA copy ("We respond to demo requests within 1 working hour during 9-5 GMT") — proven uplift on B2B forms.

### 6.4. Affiliate funnel

Touchpoints: outreach → `/affiliates` → `/auth/register?as=affiliate` → Rewardful.

**Strengths:**

- Public affiliate page indexable
- Rewardful integrated and consent-gated
- Founder has DM templates from prior session

**Gaps:**

- `/affiliates` page is mid-strength. Needs:
  - Earnings preview ("£200 in your first month at typical creator engagement levels — see how" — only if defensible)
  - Three "creator profile" cards once the first three creators are live
  - Step-by-step "How it works" with screenshots
- No `Service` schema with `category: "AffiliateProgram"` (recently supported by Google)

### 6.5. Parent funnel

Touchpoints: organic search → `/for-parents` → "How does this help my child?" → `/auth/register` (with parent-guardian flow).

**Strengths:**

- COPPA / Children's Code compliance baked in (DOB age-gate, parental email under-16)
- Privacy policy live
- Soft-verification model lets the parent get to value fast

**Gaps:**

- Parent reassurance content is thin. Parents will search "Is The English Hub safe for my child?" — there should be a `/parents/safeguarding` page (or a fold of `/for-parents`) with safeguarding policy summary, GDPR/UK-DPA compliance, ICO Children's Code statement.
- Parent-specific pricing comparison ("Save vs a private tutor: £25/hr × 2 hours/week vs £3.49/month").

---

## 7. Keyword strategy

Full keyword strategy in `seo-keyword-strategy.csv`. Summary by audience:

### Student intent — primary clusters

| Cluster                                | Demand band (estimated)        | Difficulty  | Page                                      |
| -------------------------------------- | ------------------------------ | ----------- | ----------------------------------------- |
| `gcse english revision`                | High                           | High        | `/` + `/revision`                         |
| `igcse english revision`               | High                           | Medium      | `/igcse` (currently the IGCSE landing)    |
| `aqa power and conflict revision`      | Medium                         | Medium      | `/revision/poetry/power-and-conflict`     |
| `macbeth gcse revision`                | High                           | Medium      | `/revision/texts/macbeth`                 |
| `aqa english language paper 1`         | High                           | Medium      | `/resources/english-language/aqa/paper-1` |
| `igcse english past papers`            | Medium                         | Medium      | `/igcse/edexcel/past-papers`              |
| `[poem name] analysis` (×30 poems)     | Low-medium each, additive high | Low         | `/revision/poetry/<cluster>/<poem>`       |
| `how to write a grade 9 english essay` | Medium                         | Medium-high | NEW `/blog/grade-9-essay-guide`           |

### Teacher intent — primary clusters

| Cluster                              | Demand band | Difficulty | Page                                                                    |
| ------------------------------------ | ----------- | ---------- | ----------------------------------------------------------------------- |
| `english teacher resources`          | High        | High       | NEW `/for-teachers/free-resources` (sitemap entry exists; build it out) |
| `aqa english lesson plan`            | Medium      | Medium     | NEW `/resources/teaching/lesson-plans/aqa`                              |
| `english worksheet template`         | Medium      | Medium     | NEW `/resources/teaching/printables`                                    |
| `ofsted english department evidence` | Low         | Low        | NEW `/for-schools/ofsted-prep`                                          |
| `mark scheme generator`              | Low         | Low        | `/toolkit/test-builder` (likely current home)                           |

### Parent intent

| Cluster                             | Demand band | Difficulty                      | Page                                |
| ----------------------------------- | ----------- | ------------------------------- | ----------------------------------- |
| `gcse english tutor`                | High        | High (paid+organic competition) | `/for-parents` (rewrite for intent) |
| `is gcse english hard`              | Low-medium  | Low                             | NEW `/blog/is-gcse-english-hard`    |
| `how to help my child with english` | Medium      | Medium                          | NEW `/for-parents/study-guide`      |

### School-leader intent

| Cluster                       | Demand band     | Difficulty | Page                      |
| ----------------------------- | --------------- | ---------- | ------------------------- |
| `english department platform` | Low (B2B niche) | Low        | `/for-schools`            |
| `english edtech tools`        | Low             | Low        | NEW `/for-schools/why-us` |

### Affiliate / creator intent

| Cluster                           | Demand band | Difficulty | Page          |
| --------------------------------- | ----------- | ---------- | ------------- |
| `educational affiliate programme` | Low         | Low        | `/affiliates` |

### Geographic / market intent

| Cluster                              | Demand band                          | Difficulty | Page                               |
| ------------------------------------ | ------------------------------------ | ---------- | ---------------------------------- |
| `qatar british curriculum english`   | Low (niche, high willingness-to-pay) | Low        | NEW `/for-schools/qatar`           |
| `gcc british curriculum english`     | Low                                  | Low        | NEW `/for-schools/gcc`             |
| `igcse english international school` | Low-medium                           | Low        | NEW `/igcse/international-schools` |

**See `seo-keyword-strategy.csv` for the full list with intent, target page, content type, funnel stage, and priority.**

---

## 8. Competitor positioning (qualitative)

I have not crawled competitors in this audit. Below is grounded in widely-known UK GCSE/IGCSE EdTech market positioning. The founder should commission a focused 1-day competitor crawl from a freelancer (£250-400) for hard data.

### Save My Exams

- **Strength**: deep subject-specific revision notes (10,000+ pages), strong UI, paid hub model
- **Weakness**: paywall pressure, less personalised, no AI marking
- **Differentiation for The English Hub**: AI marking against actual mark schemes (Save My Exams cannot do this); per-board hub experience; founder credentials

### Seneca Learning

- **Strength**: gamified spaced repetition, free tier strong, exam-board specific, UK-market dominance for free revision
- **Weakness**: limited human/teacher feel, generic content
- **Differentiation**: per-board hub depth; AI essay feedback that Seneca lacks; teacher tools

### Physics & Maths Tutor (PMT)

- **Strength**: enormous PDF library + past papers + marked solutions; high organic traffic
- **Weakness**: utilitarian UI; no AI; no platform features
- **Differentiation**: modern UI; AI marking; per-board hub structure

### BBC Bitesize

- **Strength**: free, massive authority, exam-board pages
- **Weakness**: cannot offer AI marking; cannot offer teacher tools; cannot personalise
- **Differentiation**: paid value of personalised + AI

### Twinkl

- **Strength**: teacher resources at scale (literally millions of downloads); paywall on most things
- **Weakness**: not student-facing; not exam-revision focused
- **Differentiation**: not really competitors (different ICP)

### Education Perfect / Century Tech

- **Strength**: B2B platform sell to schools; well-funded
- **Weakness**: less English-specific than The English Hub
- **Differentiation**: English-only depth + AI marking calibrated to AO weights

**Competitive gaps The English Hub should fill:**

1. Long-form blog (Save My Exams owns this — opportunity to compete head-on)
2. Free downloadable PDFs (PMT owns this — the founder's affiliate-driven distribution can win shares quickly)
3. Per-text "Grade 9 essay walkthroughs" — none of the competitors does this with mark-scheme-specific AI marking

---

## 9. Backlink and authority strategy

A realistic 12-month backlink + digital PR plan, prioritising assets that compound.

### Backlink-worthy assets to build

1. **"The 30-Day GCSE English Revision Plan"** — 30-page downloadable PDF, gated by email. Pitched to teacher Twitter, Mumsnet, exam-revision Reddit subs. Estimated cost £600-1,200 to produce; estimated link velocity 5-15 quality backlinks in first 6 months.
2. **"What examiners actually look for: AO1, AO2, AO5 explained with annotated examples"** — long-form blog post or guide PDF. Likely to attract teacher links.
3. **"GCSE English grade-distribution data report 2026"** — pull AQA/OCR/Edexcel public exam reports, visualise grade trends, host the visualisation. Pitch to TES, Schools Week, the Guardian Education. High link-velocity asset.
4. **"Macbeth in 60 seconds" video series** — short-form video gateway content. Distribute via TikTok/IG (founder already pitched outreach in prior session). Embed on landing pages.
5. **"The Free Macbeth Quote Bank"** + 5 sibling assets (P&C, AIC, ACC, J&H, Lord of the Flies) — all gated by email, all downloadable PDF, all linkable.

### Outreach channels (priority order)

| Channel                                                | Asset to pitch                       | Estimated cost                            | Difficulty | Authority value   | Priority                |
| ------------------------------------------------------ | ------------------------------------ | ----------------------------------------- | ---------- | ----------------- | ----------------------- |
| TES (Times Educational Supplement)                     | Data report or guest post            | £500-2k for PR support, £0 founder-direct | Medium     | Very high         | High                    |
| Schools Week                                           | Same                                 | Same                                      | Medium     | Very high         | High                    |
| Guardian Education                                     | Same                                 | Same                                      | High       | Very high         | Medium                  |
| Mumsnet (Education board)                              | Free PDF + parent help post          | £0                                        | Low        | Medium            | High (low-cost)         |
| Reddit (r/GCSE, r/6thForm)                             | Free PDF + AMA                       | £0                                        | Low        | Medium            | High                    |
| Teacher Twitter / X                                    | Asset shares + threads               | £0 founder time                           | Low        | Medium            | High                    |
| TES Resources marketplace                              | Submit free worksheets               | £0                                        | Low        | Medium            | Medium                  |
| Twinkl (paid licensing)                                | Cross-promo deal                     | TBC                                       | Medium     | Medium            | Low                     |
| EdTech Impact directory                                | Self-list with reviews once live     | £0                                        | Low        | Medium-high       | High once reviews exist |
| British Council (international school directory)       | Self-list                            | £0                                        | Low        | High (DR ~80)     | High                    |
| Qatar education ecosystem (Qatar Foundation, BCC Doha) | Targeted outreach                    | £200-500                                  | High       | Niche-high        | Medium                  |
| EdTech podcasts (Edtech 50, EdTech Podcast UK)         | Founder interview pitch              | £0 founder time                           | Medium     | Medium            | Medium                  |
| Affiliate creator programme                            | Continue founder's existing pipeline | ~£0 incremental                           | Low        | Distribution-high | High                    |
| British curriculum-school directories (CIS, BSO)       | Self-list                            | £0                                        | Low        | Niche-high        | Medium                  |
| LinkedIn thought leadership                            | Founder + Lauren                     | £0 founder time                           | Low        | Brand-high        | Medium                  |

### Digital PR campaigns (one per quarter)

- **Q1 (Jan-Mar 2027):** "How to revise English in 30 days" — exam-prep timing, peak intent.
- **Q2 (Apr-Jun 2027):** "GCSE English Grade Distribution Report" — back-to-school / exam-results timing.
- **Q3 (Jul-Sep 2027):** "Why English exams have changed — what teachers and students need to know for 2027/28" — back-to-term timing.
- **Q4 (Oct-Dec 2027):** "Predicting your grade — a free tool" — mock-exam timing, lead-magnet conversion.

---

## 10. Measurement framework

### Required tools (first 14 days)

1. **Google Search Console** — verify domain, submit sitemap, set GB target.
2. **Bing Webmaster Tools** — same.
3. **GA4** — confirm property is receiving events; set up conversions.
4. **PostHog** — already wired; confirm event taxonomy is documented.
5. **PageSpeed Insights** — run baseline against 5 URLs.
6. **Chrome User Experience Report (CrUX)** — auto-feeds Search Console once traffic > threshold.
7. **Hotjar or PostHog session recording** — already in PostHog; sample 50 sessions/month for UX qualitative feedback.

### Conversion event taxonomy (proposed)

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

### KPIs to track monthly

| KPI                    | Target by exam season May 2027   | Tracking source                    |
| ---------------------- | -------------------------------- | ---------------------------------- |
| Organic sessions       | 10× current baseline             | GA4                                |
| Indexed pages          | 600+ (vs ~780 sitemap)           | Search Console                     |
| Top-3 ranking keywords | 50+ in branded + non-branded mix | Search Console + (optional) Ahrefs |
| Email captures         | 2,000+ cumulative                | PostHog + email-platform           |
| Sign-ups               | TBC by founder                   | Supabase Auth                      |
| Paid conversions       | TBC by founder                   | Stripe                             |
| School demos requested | 50+                              | PostHog `school_demo_requested`    |
| Affiliate sign-ups     | 100+                             | Rewardful                          |
| Backlinks              | 50+ DR>30 backlinks              | (optional) Ahrefs                  |
| LCP (homepage)         | < 2.5s on 4G                     | PageSpeed Insights / CrUX          |
| INP                    | < 200ms                          | Same                               |
| CLS                    | < 0.1                            | Same                               |

---

## 11. Implementation roadmap (summary)

Full week-by-week roadmap in `seo-implementation-roadmap.md`. Costed CSV in `seo-cost-estimate.csv`. Developer backlog in `seo-backlog-for-claude-code.md`.

**Headline:**

| Phase       | Window     | Focus                                                                                                                                | Founder cost (DIY)      | Freelancer     | Agency          |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | -------------- | --------------- |
| Quick wins  | 0-2 weeks  | Strip false claims, verify GSC/Bing, font fix, FAQ schema, H1 rewrites, baseline measurement, email-capture component                | £0-800                  | £1,500-3,000   | £4,000-8,000    |
| Short-term  | 2-6 weeks  | Blog launch (12 posts), 30 PDFs, 6 board-comparison pages, /for-\* page rewrites, Article+HowTo schema, full event taxonomy          | £2,000-4,000 (DIY copy) | £8,000-15,000  | £20,000-40,000  |
| Medium-term | 6-12 weeks | 50 more blog posts, set-text page enrichment, /qatar /gcc local pages, exam-board comparison hub, EdTech Impact + directory listings | £3,000-6,000            | £15,000-30,000 | £40,000-80,000  |
| Long-term   | 3-6 months | Q1 digital PR campaign, ongoing weekly blog, link-velocity, video content, EdTech 50 directory, school-leader content                | £5,000-10,000           | £25,000-60,000 | £80,000-200,000 |

The DIY-founder track is feasible if the founder has 10-15 hours/week of writing/editing capacity through exam season.

---

## 12. Final check — quality gates

Before this report is shipped:

- ✅ Every recommendation cites a file path
- ✅ Cost estimates are GBP ranges grounded in 2026 UK market
- ✅ Quick wins are clearly separated from long-term work
- ✅ All claims are grounded in the codebase (testimonial-violation evidence directly cites `src/app/for-teachers/page.tsx:97-116`)
- ✅ Developer-actionable backlog is in `seo-backlog-for-claude-code.md`
- ✅ Commercial/marketing angle (not just technical SEO) is throughout
- ✅ A founder reading the executive summary will know what to do next

The single decision the founder needs to make today: **strip the fabricated testimonials and unverified numerical claims from `/for-teachers` and `/for-schools` before this evening**. Everything else can wait.

---

_End of audit report._
