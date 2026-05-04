# SEO Implementation Roadmap

**Site:** https://theenglishhub.app
**Date:** 04 May 2026
**Owner:** Founder (Calum) + delivery team
**Companion docs:** `seo-audit-report.md`, `seo-backlog-for-claude-code.md`, `seo-cost-estimate.csv`

---

## How to read this roadmap

Each item below has:

- **What** — the change
- **Why it matters** — commercial impact
- **Where** — file paths or surfaces
- **Effort** — engineer-days (1 day = 6h focused work)
- **Cost band** — DIY (founder) / Freelancer (UK contractor £45-75/h) / Agency (UK SEO/dev agency £85-150/h)
- **Priority score** — 1-10 (10 = ship today)
- **Expected impact** — qualitative ranking + revenue signal

Priority scoring formula:

```
priority = (seo_impact × 2) + conversion_impact + (1 / cost_band) + speed_to_benefit
```

Top of the list = best ratio of impact to cost + quickest to compound.

---

## PHASE 1: Quick wins (0-2 weeks)

These items either fix integrity / measurement gaps, or unlock subsequent compounding work. Most cost £0 in real cash if the founder does them.

### Q1. Strip fabricated testimonials and unverified claims [PRIORITY: 10]

**What:** Delete the `testimonials` array (and rendering JSX) from `src/app/for-teachers/page.tsx` lines 97-116. Replace with the same `EmptyTestimonials` component used on `/for-schools` after the prior session removed similar content. Replace "300+ Resources" and "Save 5+ hours per week" claims on `/for-teachers` and `/for-schools` with verifiable copy.

**Why it matters:** these violate the project's own brand-voice guidelines (`.claude/brand-voice-guidelines.md` §11.5), risk an ASA complaint or a teacher-Twitter trust collapse, and damage E-E-A-T scoring with Google.

**Where:**

- `src/app/for-teachers/page.tsx` — testimonials array, `timeSavers` array, "300+ Ready Resources" feature card
- `src/app/for-schools/page.tsx` — "Lesson Builder & 300+ Resources" feature card
- `src/components/marketing/InfographicBanner.tsx` — verify the banner alt-text doesn't include unverified numerical claims; fix the infographic image asset itself if it shows a "300+" callout
- `src/app/for-students/page.tsx` — verify "Aanya, Student" testimonial in alt text is real (from a verified user with consent); if not, strip

**Effort:** 4 hours
**Cost:** £0 (founder)
**Impact:** Trust + E-E-A-T + zero legal risk. Required pre-condition for any marketing push.

---

### Q2. Verify Google Search Console + Bing Webmaster + submit sitemap [PRIORITY: 10]

**What:**

1. Add the DNS TXT record (or HTML meta verification) for `theenglishhub.app` to Google Search Console.
2. Submit `https://theenglishhub.app/sitemap.xml` to GSC.
3. Set the international targeting to United Kingdom.
4. Repeat for Bing Webmaster.

**Why it matters:** without this, you cannot see queries, impressions, indexed-page count, mobile usability errors, structured-data errors, or sitemap errors. Search Console is a 30-min job that unlocks all subsequent measurement.

**Where:**

- DNS settings (Vercel domain → Cloudflare or whichever DNS provider)
- Optional: add `google-site-verification` meta in `src/app/layout.tsx` `<head>`

**Effort:** 1 hour total (both tools)
**Cost:** £0
**Impact:** Required baseline. No SEO measurement without it.

---

### Q3. Migrate three Google Fonts to `next/font/google` [PRIORITY: 9]

**What:** the root layout currently does `<link href="https://fonts.googleapis.com/css2?family=Newsreader:...&family=Geist:...&family=JetBrains+Mono:..." rel="stylesheet">` which is render-blocking. Replace with `next/font/google` so Next.js can self-host and inline.

**Why it matters:** render-blocking external CSS adds 200-500ms of LCP time. Search uses Core Web Vitals as a ranking factor.

**Where:** `src/app/layout.tsx` lines 72-77

**Code change (sketch):**

```ts
import { Newsreader, Geist, JetBrains_Mono } from 'next/font/google'

const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

// In <html>:
<html className={`${monaSans.variable} ${newsreader.variable} ${geist.variable} ${jetbrainsMono.variable}`}>
// Remove the <link> tags from <head>
```

**Effort:** 1 day (test all surfaces)
**Cost:** £0 (DIY) / £350-500 (freelancer)
**Impact:** PageSpeed score +5-15 points. LCP improvement 100-400ms. Indirect ranking benefit.

---

### Q4. Wire FAQPageJsonLd to 6 audience pages [PRIORITY: 9]

**What:** every page with an inline FAQ array should emit `FAQPageJsonLd` so Google can render rich-result FAQ in search results (the expandable accordion).

**Where:**

- `src/app/pricing/page.tsx` — has `FAQ_ITEMS` array (line ~83)
- `src/app/for-teachers/page.tsx` — has `faqs` array
- `src/app/for-schools/page.tsx` — has FAQs in `<FAQItem />` arrays
- `src/app/for-parents/page.tsx` — audit; add if absent
- `src/app/affiliates/page.tsx` — audit
- `src/app/faqs/page.tsx` — audit (probably already has it)

**Code pattern:**

```tsx
import { FAQPageJsonLd } from '@/components/seo/json-ld'

// In page body
;<FAQPageJsonLd faqs={FAQ_ITEMS.map((i) => ({ question: i.q, answer: i.a }))} />
```

**Effort:** 1 day (6 pages × ~30 min each)
**Cost:** £0 (DIY) / £300-500 (freelancer)
**Impact:** Eligibility for "People also ask" rich-result placement. Estimated CTR uplift +10-30% on the FAQ-bearing pages.

---

### Q5. Rewrite 8 audience-page H1s and titles for query intent [PRIORITY: 9]

**What:** replace marketing-slogan H1s with query-aligned phrases.

| Page            | Current H1                          | Recommended H1                                                          | Recommended `<title>`                                                   |
| --------------- | ----------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `/`             | "Pick your exam board to start."    | "GCSE and IGCSE English revision, AI marked against the AO mark scheme" | (current good)                                                          |
| `/for-students` | "Learn English. Build your future." | "Your GCSE or IGCSE English revision, in one place"                     | "GCSE and IGCSE English revision for students — The English Hub"        |
| `/for-teachers` | (verify)                            | "English department tools for AQA, Edexcel, OCR and WJEC teachers"      | "English teacher tools and AI marking — The English Hub"                |
| `/for-schools`  | (verify)                            | "Whole-department English platform for UK schools"                      | "English platform for schools — The English Hub"                        |
| `/for-parents`  | (verify)                            | "Help your child pass GCSE or IGCSE English"                            | "GCSE and IGCSE English help for parents — The English Hub"             |
| `/affiliates`   | (verify)                            | "Earn 20% recurring commission promoting GCSE English revision"         | "Affiliate programme — The English Hub"                                 |
| `/about`        | (verify)                            | "About The English Hub — built by a teacher, calibrated to AOs"         | (verify the brand-voice rule on the teacher claim — only if defensible) |
| `/igcse`        | (verify)                            | "IGCSE English revision — Pearson Edexcel and Cambridge specs covered"  | "IGCSE English revision — The English Hub"                              |

**Effort:** 1 day
**Cost:** £0 (DIY) / £300-500 (freelancer)
**Impact:** ranking lift on the primary query for each page. Estimated +5-15% organic traffic to each within 60 days.

---

### Q6. Build a reusable `<EmailCaptureCard />` component [PRIORITY: 8]

**What:** create `src/components/marketing/EmailCaptureCard.tsx` that takes a `magnetTitle` ("Free Macbeth quote bank"), `magnetDescription`, `magnetSlug`, and on submit writes to a list (Supabase `email_subscribers` table or Resend audience). Show on every set-text and poem study guide.

**Why it matters:** organic visitors to study pages currently leave with no relationship. Even a 2% capture rate at scale becomes the highest-ROI marketing channel.

**Where:**

- New: `src/components/marketing/EmailCaptureCard.tsx`
- New: `supabase/migrations/2026XXXX_email_subscribers.sql`
- New: `src/app/api/email/capture/route.ts` (POST endpoint, rate-limited, Resend audience subscription)
- Integration: bottom of every `/revision/texts/<text>/page.tsx`, `/revision/poetry/<cluster>/<poem>/page.tsx`, eventually `/blog/<slug>/page.tsx`

**Effort:** 1 day component + 0.5 day backend wiring + 0.5 day audit & integrate
**Cost:** £0-200 internal (Resend audience already on free tier) / £700-1,200 freelancer
**Impact:** assuming 5,000 organic visitors/month at 3% capture rate = 150 emails/month, compounding into 1,800 emails/year. Each email subscriber is worth £10-30/year in renewal/upsell at typical EdTech LTV.

---

### Q7. Run PageSpeed Insights baseline against 5 priority URLs [PRIORITY: 8]

**What:** run https://pagespeed.web.dev against:

1. `/` (homepage)
2. `/pricing`
3. `/for-students`
4. `/igcse/edexcel`
5. `/revision/poetry/power-and-conflict`

Document baseline LCP / INP / CLS / TBT / Performance score in `business-docs/CWV-baseline-2026-05.md`.

**Effort:** 30 minutes
**Cost:** £0
**Impact:** required baseline. Without it, you cannot detect performance regressions or measure improvement.

---

### Q8. Add per-page metadata to top 50 leaf pages [PRIORITY: 7]

**What:** many leaf pages currently inherit only the root metadata template (`%s — The English Hub`) which means they're left with the default description. Each priority leaf page should have its own `metadata` export with unique title and description.

**Where:** the 50 highest-traffic-priority pages (by sitemap priority 0.6-0.8):

- All set-text root pages (Macbeth, R&J, ACC, AIC, J&H, etc. — ~25 pages)
- All anthology-cluster hubs (P&C, L&R, AQA W&L, Edexcel C/T, Eduqas, OCR ×4 — ~10)
- IGCSE Lit deep pages (Drama, Prose, Shakespeare, Unseen Poetry — 4)
- IGCSE Cambridge core (0500, 0990, Composition, Reading — 4)
- Resource hubs (English Lit/Lang per board — 10)

**Effort:** 2-3 days (templated where possible)
**Cost:** £0-500 (DIY) / £800-1,500 (freelancer to copywrite all 50)
**Impact:** snippet quality + CTR. Estimated +10-25% CTR uplift on these pages once Search Console data flows.

---

### Q9. Add `<meta name="google-site-verification" />` for Search Console [PRIORITY: 7]

**What:** if you choose HTML meta verification (faster than DNS), add the verification tag to root layout.

**Where:** `src/app/layout.tsx` `<head>`

**Effort:** 5 minutes
**Cost:** £0
**Impact:** speeds up GSC verification.

---

### Q10. Document conversion event taxonomy [PRIORITY: 7]

**What:** create `business-docs/EVENT-TAXONOMY.md` listing every PostHog/GA4 event the site fires, with semantic naming, parameters, and where it fires.

**Why it matters:** without a documented taxonomy, events accumulate inconsistently and analytics decay over time.

**Effort:** 0.5 day
**Cost:** £0
**Impact:** measurement integrity for the lifetime of the product.

---

## PHASE 2: Short-term (2-6 weeks)

The compounding-content phase. Once the integrity gaps from Phase 1 are closed, build the content engine that gives The English Hub a defensible moat.

### S1. Launch `/blog` with 12 launch posts [PRIORITY: 9]

**What:** create the blog architecture (`src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, MDX content under `content/blog/<slug>.mdx`), and write 12 launch posts.

**Suggested 12 posts (intent + cluster mix):**

1. "How to analyse Macbeth like a Grade 9 student" — high-intent
2. "The fastest way to remember Power & Conflict poems" — high-intent
3. "What examiners actually look for in AO2 (with examples)" — teacher-shareable
4. "How to write a Grade 9 GCSE English Literature essay" — top-of-funnel
5. "The full Pearson Edexcel IGCSE 4ET1 anthology, explained" — high-intent niche
6. "How to revise An Inspector Calls in 5 days" — exam-prep timing
7. "Macbeth vs Romeo & Juliet — character comparisons that work" — comparison
8. "Why so many GCSE English students drop a grade in mocks (and how to fix it)" — parent-shareable
9. "The 30-minute essay plan: GCSE English Literature" — practical
10. "How AI marking actually works (and what it can't yet do)" — thought-leadership
11. "AQA Power & Conflict: every poem ranked for difficulty" — listicle
12. "Cambridge IGCSE 0500 vs 0990 — what's the actual difference?" — comparison

**Where:**

- New: `src/app/blog/page.tsx` (index)
- New: `src/app/blog/[slug]/page.tsx` (article with MDX rendering, `Article` schema, `BreadcrumbList` schema, related posts)
- New: `content/blog/<slug>.mdx` × 12
- New: `src/app/sitemap.ts` — add `blog` routes
- New: `<Article />` schema component in `src/components/seo/json-ld.tsx`
- Optional: `next-mdx-remote` for MDX rendering (already in deps?)

**Effort:** 1 week dev (architecture + first post template) + 4 weeks content (12 posts at 2-3 days each)
**Cost (DIY):** £2,000-4,000 (founder + Lauren writing 12 posts)
**Cost (freelancer):** £6,000-12,000 (12 posts × £500-1,000 each from a UK education-content writer)
**Cost (agency):** £15,000-30,000
**Impact:** the highest-leverage organic SEO investment. Realistic 6-month return: 12 posts × 200-1,000 organic visits/month each = 30,000+ monthly organic visits compounding.

---

### S2. Build 30 downloadable PDF revision packs [PRIORITY: 9]

**What:** create 30 free PDF revision packs (10-30 pages each) gated behind email capture, hosted on Cloudflare R2 or Vercel Blob, downloadable via signed URLs from your email-capture confirmation page.

**Suggested 30 packs:**

| Pack                                       | Audience | Lead-magnet category |
| ------------------------------------------ | -------- | -------------------- |
| Macbeth quote bank (50 quotes + analysis)  | Student  | Set text             |
| Macbeth essay-plan workbook                | Student  | Skill                |
| Macbeth themes flashcard pack              | Student  | Quick-reference      |
| AIC quote bank                             | Student  | Set text             |
| AIC characters one-pager                   | Student  | Quick-reference      |
| ACC quote bank                             | Student  | Set text             |
| ACC themes flashcard pack                  | Student  | Quick-reference      |
| J&H quote bank                             | Student  | Set text             |
| Lord of the Flies key quotes               | Student  | Set text             |
| Animal Farm chapter summaries              | Student  | Set text             |
| Power & Conflict comparison grid           | Student  | Anthology            |
| Power & Conflict essay-plan workbook       | Student  | Anthology            |
| Love & Relationships comparison grid       | Student  | Anthology            |
| Love & Relationships essay-plan workbook   | Student  | Anthology            |
| AO1, AO2, AO5 cheat sheet                  | Student  | Skill                |
| Grade 9 essay structure template           | Student  | Skill                |
| Unseen poetry approach guide               | Student  | Skill                |
| Language Paper 1 walkthrough               | Student  | Past paper           |
| Language Paper 2 walkthrough               | Student  | Past paper           |
| AQA AO weighting reference                 | Teacher  | Reference            |
| Edexcel IGCSE Lit set-text overview        | Student  | Set text             |
| Cambridge IGCSE 0500/0990 difference guide | Student  | Reference            |
| 30-day GCSE English revision plan          | Student  | Schedule             |
| 14-day pre-mock revision plan              | Student  | Schedule             |
| Lesson-starter pack: Macbeth Act 1         | Teacher  | Lesson plan          |
| Lesson-starter pack: AIC Act 1             | Teacher  | Lesson plan          |
| AQA P&C lesson-starter pack                | Teacher  | Lesson plan          |
| Department-meeting Ofsted-prep template    | Teacher  | Operational          |
| Whole-class essay-mark sheet               | Teacher  | Operational          |
| Parent's guide to GCSE English             | Parent   | Reference            |

**Where:**

- New: `content/lead-magnets/<slug>.pdf` (committed)
- New: `src/app/free-resources/page.tsx` (index of all lead magnets)
- New: `src/app/free-resources/[slug]/page.tsx` (individual lead-magnet landing page with email capture)
- New: `src/app/api/email/capture/route.ts` (endpoint, also serves the signed download URL)
- Schema: `LearningResource` per page

**Effort (PDF authoring):** 6-8 weeks at 1-2 packs per week (founder + Lauren)
**Cost (DIY):** £1,500-3,000 (mostly time)
**Cost (freelancer):** £6,000-15,000 (£200-500 per pack from a designer + content collaborator)
**Cost (agency):** £20,000-40,000
**Impact:** each pack downloads = 1 email captured. At 30 packs averaging 100 downloads/month each = 3,000 emails/month. Compounds. Each is also a backlink-worthy asset.

---

### S3. Build 6 board-comparison pages [PRIORITY: 8]

**What:** comparison-intent queries (e.g. "AQA vs Edexcel English Literature") convert at 2-3× the rate of generic queries. Build 6 pages.

**Pages to build:**

1. `/compare/aqa-vs-edexcel-gcse-english-literature`
2. `/compare/aqa-vs-ocr-gcse-english-literature`
3. `/compare/aqa-vs-eduqas-gcse-english-literature`
4. `/compare/edexcel-igcse-vs-cambridge-igcse-english`
5. `/compare/cambridge-igcse-0500-vs-0990`
6. `/compare/gcse-english-vs-igcse-english`

Each ~1,500-2,500 words, with a comparison table, "Which one am I sitting?" decision tree, and a "Find your spec" CTA → homepage board picker.

**Where:**

- New: `src/app/compare/page.tsx` (index)
- New: `src/app/compare/[slug]/page.tsx`
- Schema: `Article` + `BreadcrumbList`

**Effort:** 2-3 weeks
**Cost (DIY):** £1,000-2,000
**Cost (freelancer):** £3,000-6,000
**Impact:** mid-funnel conversion magnet. Should rank within 90 days for the comparison terms.

---

### S4. Rewrite the 8 audience pages with new H1/copy + FAQ schema [PRIORITY: 8]

**What:** combined work from Q4 + Q5 + the deeper conversion improvements identified in §6 of the audit report.

**Effort:** 3-5 days
**Cost (DIY):** £0
**Cost (freelancer):** £1,500-3,000 (copywriter + design polish)
**Impact:** see Q5.

---

### S5. Add `Article` and `LearningResource` schema components + integrate [PRIORITY: 7]

**What:** extend `src/components/seo/json-ld.tsx` with new components, integrate across:

- `Article` → blog posts, comparison pages
- `LearningResource` → set-text pages, anthology poems, lesson-plan PDFs
- `HowTo` → revision technique pages

**Effort:** 2-3 days dev + 2 days integration
**Cost:** £0-500 (DIY) / £1,200-2,500 (freelancer)
**Impact:** rich-result eligibility across 100+ pages. Estimated indirect CTR uplift +5-10% per page.

---

### S6. Onboard EdTech Impact directory + first verified reviews [PRIORITY: 7]

**What:** self-list at https://edtechimpact.com (UK education-tool directory), encourage founding teachers and schools to leave reviews, then flip `NEXT_PUBLIC_EDTECH_IMPACT_LIVE=true` to enable the `AggregateRating` schema in `CourseJsonLd`.

**Effort:** 0.5 day to list + 4-8 weeks to gather reviews
**Cost:** £0
**Impact:** rich-result star ratings in search results. CTR uplift +15-30% once 5+ reviews syndicate.

---

## PHASE 3: Medium-term (6-12 weeks)

Authority-building and depth.

### M1. 50 more blog posts (continuing the publishing cadence) [PRIORITY: 8]

**What:** continue at 4-6 posts/month from the launch cadence. Expand topical clusters: writing skills, exam technique, parent help, teacher CPD, set-text deep-dives.

**Effort:** ongoing — 1-2 days per post
**Cost (DIY):** £4,000-8,000 over 12 weeks
**Cost (freelancer):** £15,000-30,000
**Impact:** topical authority. By Month 6 you've published ~60 posts; Save My Exams has thousands but you'd own enough niches to rank in the top 5 for 30-50 long-tail terms.

---

### M2. Set-text page enrichment [PRIORITY: 7]

**What:** the ~25 set-text root pages currently have basic structures. Enrich each with:

- 3-5 paragraphs of summary intro
- "Top 5 quotes for AO2" widget
- "Compare with: <other text>" cross-link panel
- `LearningResource` schema
- An `EmailCaptureCard` for the matching lead magnet

**Effort:** 4-6 weeks
**Cost (DIY):** £1,500-3,000
**Cost (freelancer):** £5,000-10,000
**Impact:** these pages are already in the sitemap with priority 0.7 — they're being crawled but not converting. Enrichment turns them into ranked organic-traffic engines.

---

### M3. Local landing pages: Qatar, GCC, International schools [PRIORITY: 6]

**What:** 3 pages — `/for-schools/qatar`, `/for-schools/gcc`, `/igcse/international-schools` — targeting British-curriculum-school markets.

**Why it matters:** the founder mentioned Qatar exposure in prior sessions. International-school market has 2-3× the willingness-to-pay of UK state schools.

**Effort:** 2 weeks
**Cost (DIY):** £500-1,000
**Cost (freelancer):** £2,000-4,000
**Impact:** niche but high-margin. 5 international school deals at £4-8k/year each = £20-40k ARR.

---

### M4. Exam-board comparison hub [PRIORITY: 6]

**What:** `/exam-boards` index page linking to all 6 board hubs and the 6 comparison pages from S3. Internal-link strength is reinforced.

**Effort:** 1 week
**Cost:** £200-500 (DIY) / £800-1,500 (freelancer)
**Impact:** internal-link signal — boosts every individual board hub's ranking.

---

### M5. Directory listings and citations [PRIORITY: 6]

**What:** self-list on:

- EdTech Impact (already in S6)
- BESA (British Educational Suppliers Association) member directory
- TES Resources contributor profile (if you make TES-licensed content)
- BSO (British Schools Overseas) directory
- CIS (Council of International Schools) directory
- Crunchbase (founder profile)
- LinkedIn company page (active posting)
- Common Sense Education directory (US-aligned)

**Effort:** 3-5 days total
**Cost:** £0-500 (some directories charge a listing fee)
**Impact:** authority backlinks (DR 50-80) + B2B discoverability.

---

## PHASE 4: Long-term (3-6 months)

Compounding authority and digital PR.

### L1. Q1 Digital PR campaign — "How to revise English in 30 days" [PRIORITY: 8]

**What:** the asset already in your roadmap. Time it for the start of January 2027 — peak exam-revision-search timing. Pitch to TES, Schools Week, the Guardian, Mumsnet.

**Effort:** 4-6 weeks pre-campaign, 4 weeks campaign
**Cost (DIY):** £500-1,500
**Cost (freelancer or boutique PR agency):** £3,000-8,000
**Cost (full PR agency):** £10,000-25,000
**Impact:** 10-30 quality backlinks (DR 60-90). Realistic spike of 20,000-100,000 organic visits during peak revision window.

---

### L2. "GCSE English Grade Distribution Report" [PRIORITY: 7]

**What:** scrape published AQA/Edexcel/OCR/WJEC public exam data, visualise grade-trends 2017-2026, write a 4-5 page report. Publish in Q2 2027 (post-results timing).

**Effort:** 2-3 weeks
**Cost:** £1,000-3,000 (DIY) / £5,000-10,000 (freelancer + designer)
**Impact:** designed to be the "data report Schools Week and TES will quote you on". One report can attract 30+ backlinks.

---

### L3. Video content series [PRIORITY: 6]

**What:** 30-60 short videos (YouTube + TikTok + IG + embedded on landing pages) — "Macbeth in 60 seconds", "How to PEEL a paragraph", "What examiners think when they read your essay". Founder has DM creator outreach in flight.

**Effort:** 6-12 months ongoing
**Cost (DIY):** £500-1,500 setup + ongoing time
**Cost (freelancer/creator):** £3,000-15,000 over 6 months
**Impact:** distribution. YouTube ranks in Google. Embedded on landing pages helps conversion.

---

### L4. Founder thought-leadership: LinkedIn + podcasts [PRIORITY: 6]

**What:** founder publishes 1 LinkedIn post/week + appears on 4-6 EdTech podcasts in 6 months.

**Effort:** ongoing (~2-4 hours/week)
**Cost:** £0
**Impact:** brand-building, B2B credibility, school-procurement lubricant.

---

## Priority-ranked summary

| #   | Item                              | Phase | DIY £    | Freelancer £ | Priority |
| --- | --------------------------------- | ----- | -------- | ------------ | -------- |
| 1   | Strip fabricated testimonials     | Quick | 0        | 200          | 10       |
| 2   | Verify GSC + Bing                 | Quick | 0        | 50           | 10       |
| 3   | Migrate Google Fonts              | Quick | 0        | 350-500      | 9        |
| 4   | FAQPageJsonLd on 6 pages          | Quick | 0        | 300-500      | 9        |
| 5   | Rewrite 8 audience H1s/titles     | Quick | 0        | 300-500      | 9        |
| 6   | EmailCaptureCard component        | Quick | 200      | 700-1,200    | 8        |
| 7   | PageSpeed baseline                | Quick | 0        | 50           | 8        |
| 8   | 50 leaf-page metadata             | Quick | 500      | 800-1,500    | 7        |
| 9   | GSC verification meta             | Quick | 0        | 50           | 7        |
| 10  | Event taxonomy doc                | Quick | 0        | 200          | 7        |
| 11  | Blog launch (12 posts)            | Short | 2-4k     | 6-12k        | 9        |
| 12  | 30 PDF lead magnets               | Short | 1.5-3k   | 6-15k        | 9        |
| 13  | 6 board-comparison pages          | Short | 1-2k     | 3-6k         | 8        |
| 14  | Audience-page rewrites (S4)       | Short | 0        | 1.5-3k       | 8        |
| 15  | Article/LearningResource schema   | Short | 0-500    | 1.2-2.5k     | 7        |
| 16  | EdTech Impact directory + reviews | Short | 0        | 0            | 7        |
| 17  | 50 more blog posts (M1)           | Med   | 4-8k     | 15-30k       | 8        |
| 18  | Set-text page enrichment (M2)     | Med   | 1.5-3k   | 5-10k        | 7        |
| 19  | Qatar/GCC/Intl school pages (M3)  | Med   | 500-1k   | 2-4k         | 6        |
| 20  | Exam-board comparison hub (M4)    | Med   | 200-500  | 800-1.5k     | 6        |
| 21  | Directory listings (M5)           | Med   | 0-500    | 0-500        | 6        |
| 22  | Q1 Digital PR campaign (L1)       | Long  | 500-1.5k | 3-8k         | 8        |
| 23  | Grade distribution report (L2)    | Long  | 1-3k     | 5-10k        | 7        |
| 24  | Video content series (L3)         | Long  | 500-1.5k | 3-15k        | 6        |
| 25  | Founder LinkedIn + podcasts (L4)  | Long  | 0        | 0            | 6        |

---

## Total cost envelope (12 months)

| Track                 | DIY (founder + Lauren writing) | Freelancer-led      | Agency-led           |
| --------------------- | ------------------------------ | ------------------- | -------------------- |
| Phase 1 (Quick wins)  | £200-1,000                     | £2,000-4,000        | £5,000-10,000        |
| Phase 2 (Short-term)  | £4,000-9,000                   | £18,000-35,000      | £45,000-90,000       |
| Phase 3 (Medium-term) | £6,000-12,000                  | £25,000-50,000      | £60,000-120,000      |
| Phase 4 (Long-term)   | £2,000-6,000                   | £15,000-40,000      | £40,000-80,000       |
| **Total 12-month**    | **£12,000-28,000**             | **£60,000-130,000** | **£150,000-300,000** |

---

## Decision framework for the founder

**If you have £0-2k of cash and 15-20h/week of personal time:** ship Phase 1 in week 1, then publish 1 blog post/week and 1 PDF/fortnight. By Month 6 you've laid the foundations cheaply.

**If you have £5-15k of cash:** ship Phase 1 quickly, hire a UK education-content writer (£500-800/post) for 12 posts, and a designer for 30 PDFs. By Month 6 you have the content moat.

**If you have £30k+ of cash:** hire a boutique EdTech content+SEO agency for 6 months. By Month 12 you're top-3 ranking for "GCSE English revision".

The integrity fixes in Phase 1 are non-negotiable regardless of budget.
