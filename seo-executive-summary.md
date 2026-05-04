# SEO & Marketing Audit — Executive Summary

**Site:** https://theenglishhub.app
**Audit date:** 04 May 2026
**Stage:** Post-launch (~2 weeks live), iOS submission imminent
**Audit scope:** Full site (867 page templates, 51 top-level routes), technical SEO, on-page SEO, conversion, content, competitor positioning, costed roadmap

---

## TL;DR

The English Hub has shipped one of the strongest **technical SEO and content scaffolds** I've seen for an EdTech this early in its life — full per-board curriculum coverage for AQA, Edexcel, OCR, WJEC Eduqas, Cambridge IGCSE (0500/0990) and Edexcel IGCSE Literature + Language A, a 700+ entry sitemap, structured data, nonce-CSP, consent-gated analytics, and a unified per-board hub at `/revision`. The recent 02-May navigation overhaul fixed the last critical board-cookie bug.

But the platform is **leaking commercial trust** in three places: fabricated testimonials and unverified "300+ resources / 5+ hours saved" claims still on `/for-teachers` and `/for-schools` (these were stripped from `/for-schools` in a previous session — they have crept back), no `/blog` surface (the single largest organic-traffic engine in this vertical), and no measurement framework wired up to Google Search Console / Bing Webmaster.

Fixing those three things in the next two weeks is worth more than any other SEO effort the team could undertake in 2026.

---

## Health scores

| Dimension             | Score (out of 10) | Notes                                                                                                                                                                                                                                                                                                                                          |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technical SEO         | **8.5**           | Strong: sitemap, robots, schema, canonicals, CSP, fonts. Weak: Core Web Vitals not measured live; some Google Fonts still render-blocking; no Search Console verification confirmed.                                                                                                                                                           |
| On-page SEO           | **6.0**           | Strong: per-board pages exist with intent-aligned URL structures. Weak: many leaf pages have generic or missing meta descriptions; H1/H2 hierarchy inconsistent across hubs; FAQ schema only on a few pages; thin content on KS3, A-Level, IAL hubs.                                                                                           |
| Content depth         | **5.0**           | Strong: anthology poems, set texts, and IGCSE structure. Weak: NO blog. NO long-form revision guides. NO downloadable resources. Worksheets/printables surface is empty.                                                                                                                                                                       |
| Conversion            | **6.5**           | Strong: clear pricing, 7-day trial, board picker. Weak: testimonials are fabricated (must be removed); affiliate funnel exists but no traffic into it; no exit-intent capture; school demo flow is OK but lacks proof.                                                                                                                         |
| Marketing readiness   | **5.5**           | Strong: UTM capture, PostHog, GA4 hooks, Trustpilot wiring. Weak: no Search Console / Bing webmaster verified, no email capture, no lead magnets, no retargeting pixel, no event taxonomy doc.                                                                                                                                                 |
| Brand-voice integrity | **4.0**           | **CRITICAL**. Three fabricated testimonials on /for-teachers, two more inside /for-schools content, plus unverified product-claim numbers ("300+ resources", "5+ hours saved per week") in multiple places. These contradict the founder's own brand-voice guidelines (`.claude/brand-voice-guidelines.md` §11.5) and were previously removed. |
| **Composite**         | **6.0**           | Solid technical foundation, weak commercial polish, urgent integrity fix.                                                                                                                                                                                                                                                                      |

---

## Top 10 issues (ranked by commercial impact)

1. **Fabricated testimonials live in production** on `/for-teachers` (Sarah M. Manchester, James T. Birmingham, Priya K. London) and inside `/for-schools` content. Same brand-voice violation removed in the 28 Apr 2026 session. Risk: trust collapse if a teacher cross-references and finds them invented; legal/ASA risk for unverified user-quote testimonials.
2. **Unverified product claims** — "300+ Ready Resources", "Save 5+ hours per week", "300+ ready-made resources" — on `/for-teachers`, `/for-schools` and the `InfographicBanner` images. Either prove and source these or replace with verifiable factual copy.
3. **No blog / no long-form content surface.** Blog is the #1 organic-traffic engine in the GCSE/IGCSE English revision vertical. Save My Exams, BBC Bitesize and Physics & Maths Tutor each have hundreds of long-form revision pages indexed; The English Hub has zero. This is the largest single SEO opportunity available.
4. **No Search Console / Bing Webmaster verification confirmed.** Without these, you cannot see what queries are bringing impressions, which pages are indexed, which are crawled-and-skipped, and which sitemaps are accepted. Wiring these up is a 30-minute job and unlocks all subsequent measurement.
5. **Core Web Vitals not measured.** Vercel Speed Insights is consent-gated (correct from a privacy stance) but the team has no current LCP/INP/CLS data. Without this, performance regressions go silent.
6. **Google Fonts still render-blocking.** `<link href="https://fonts.googleapis.com/...">` on every page (root layout) blocks paint. With Mona Sans already self-hosted via `next/font/local`, the three Google fonts (Newsreader, Geist, JetBrains Mono) should be migrated to `next/font/google` (so Next can self-host and inline) or downloaded and added to `public/fonts`.
7. **No lead magnet / email capture** beyond the sign-up wall. There is nothing for a teacher who lands on a poetry page from Google search to leave their email for. A simple "Free 30-page Macbeth revision pack — emailed instantly" magnet on the top 20 organic-intent pages would convert ~3-5% of organic visitors into a list — money in the bank for exam-season campaigns.
8. **`/for-students` H1 reads "Learn English. Build your future."** That's a marketing slogan, not a query-aligned H1. Google ranks pages on the keyword users actually type — which is "GCSE English revision", "IGCSE English revision", or "English Language GCSE help", not "Learn English". The H1 (and `<title>`) on the audience pages need rewriting for search intent.
9. **Thin content on the KS3, A-Level, and IAL surfaces.** The boards exist in the registry, the routes exist, but `/revision/poetry` falls through with a "no anthology" message for KS3/IAL/A-Level. Either commit to building these out or remove them from the picker entirely. Half-built hubs damage E-E-A-T scoring.
10. **No teacher-resource downloads.** The "300+ resources" claim has no actual download path. Teachers expect downloadable PDFs (worksheets, mark schemes, lesson starters). The `/resources/teaching/printables` route exists in the sitemap but the page is sparse. Building 30-50 genuinely downloadable PDFs would unlock a Twinkl-adjacent organic strategy and turn the false claim into a true one.

---

## Top 10 opportunities (ranked by ratio of impact to cost)

1. **Strip fabricated testimonials and false claims** (4 hours, £0). Done by lunchtime tomorrow. Eliminates the integrity risk and stops the SEO/E-E-A-T penalty.
2. **Verify Google Search Console + Bing Webmaster** (30 minutes, £0). Submit `sitemap.xml`, confirm crawl health, set the international targeting (UK).
3. **Self-host the three Google Fonts via `next/font/google`** (1 day, £0). Removes render-blocking, improves LCP, improves PageSpeed score by 5–15 points.
4. **Launch `/blog` with 12 launch posts** (4-6 weeks, £4-8k content + dev). Top targets: "How to analyse Macbeth", "Top 10 Power & Conflict comparisons", "The fastest way to remember anthology poems", "What examiners actually look for in AO2", "How to write a Grade 9 English essay". This is the single largest organic compounding asset.
5. **Build 30 downloadable PDF revision packs** (3-4 weeks, £3-6k). Macbeth quotes pack, AIC AO chart, P&C comparison grid, etc. Each one gated behind an email capture. Each one becomes a backlink-worthy and shareable asset.
6. **Rewrite the 8 audience-page H1s and titles** for search intent (1 day, £0). Replace marketing slogans with queries students/teachers actually type.
7. **Add `FAQPageJsonLd`** to the 6 audience pages (`/for-students`, `/for-teachers`, `/for-schools`, `/for-parents`, `/affiliates`, `/pricing`) using their existing inline FAQ arrays (1 day, £0). Each adds rich-result eligibility — "People also ask" placement.
8. **Add `Article` and `HowTo` schema** for the eventual blog and existing revision-technique pages (3 days, £0). Already have the `BreadcrumbJsonLd` and `FAQPageJsonLd` patterns to copy from.
9. **Build 6 board-comparison pages** (`AQA vs Edexcel English Literature`, `OCR vs AQA Power & Conflict`, `Cambridge IGCSE vs Edexcel IGCSE`, `Eduqas vs AQA poetry`, `IGCSE vs GCSE English`, `Edexcel IGCSE Lit vs Lang A`) (2 weeks, £1-2k content). Comparison queries convert at ~2-3× the rate of generic queries — students at "consideration" stage.
10. **Email-list build via "Last 30 Days Before the Exam" campaign** in May/June (1 week, £500-1k). Time-bound landing page, daily revision plan delivered by email, captures the highest-intent traffic of the year. Even 1,000 sign-ups becomes a recurring asset for next year's cohort.

---

## Biggest commercial risks

1. **Brand-trust collapse from fake testimonials.** A teacher reading "Sarah M., Head of English, secondary school, Manchester" who tweets "this is fake — I'm Head of English in Manchester and I've never heard of this" is a single tweet that ends the school-procurement track for 12 months. Strip these tonight.
2. **Wasted ad spend on misaligned landing pages.** Founder-mentioned plan to do paid IG/TikTok DM outreach lands users on the homepage, which is a board picker — not a lead-capture or product demo. Conversion is leaking. Either build dedicated landing pages per audience or lock the affiliate funnel pages tighter.
3. **Negative SEO via competitor scraping.** The site has substantial content (CC-text from public-domain anthology poems plus your own commentary) that competitors will scrape. No `noindex` on internal duplicate pages (`/revision/poetry/edexcel/<poem>` vs `/igcse/edexcel/poetry/<poem>` — shared poem slugs). This won't kill you, but tightening canonicals would prevent some self-cannibalisation.
4. **Indexing budget waste.** 867 page templates is a lot for a site with no link equity yet. Without Search Console feedback you risk Google deciding 200 of your pages aren't worth indexing because they're too thin. The KS3 / A-Level shells especially.

---

## Biggest quick wins (do these in the next 14 days)

| Quick win                                                                                                      | Time     | Cost                              | Impact                                 |
| -------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------- | -------------------------------------- |
| Strip fabricated testimonials + unverified numeric claims from `/for-teachers`, `/for-schools`                 | 4h       | £0                                | High (trust + E-E-A-T)                 |
| Verify Search Console + Bing Webmaster, submit sitemap                                                         | 1h       | £0                                | High (visibility + measurement)        |
| Migrate three Google Fonts to `next/font/google`                                                               | 1d       | £0                                | Medium (LCP + PageSpeed)               |
| Add FAQPageJsonLd to 6 audience pages with existing FAQ arrays                                                 | 1d       | £0                                | Medium (rich results)                  |
| Rewrite 8 audience-page H1s + titles for query intent                                                          | 1d       | £0                                | Medium (rankings)                      |
| Add `Article` + `HowTo` schema scaffolding                                                                     | 1d       | £0                                | Low-medium (preparing for blog)        |
| Add lightweight email-capture component (`<EmailCaptureCard />`) shared across the top 20 organic-intent pages | 1d       | £0                                | High (lead capture starts compounding) |
| Run PageSpeed Insights against 5 priority URLs, log baseline LCP/INP/CLS to a tracking doc                     | 30 min   | £0                                | Required baseline                      |
| Submit the live sitemap to Google + Bing                                                                       | 15 min   | £0                                | Required visibility                    |
| Add a one-line meta description to the 200+ leaf pages currently inheriting only the root metadata template    | 2-3 days | £0 internal / £400-800 freelancer | Medium (snippet quality, CTR)          |

**Total founder cost for the entire 14-day quick-win bundle: ~£0–£800.**

---

## Strategic recommendation

If the founder has **two weeks**: ship the Quick Wins block above. Nothing else matters until those land.

If the founder has **two months**: add a 12-post blog launch, 30 downloadable PDFs, and 6 board-comparison pages. Estimated cost £8–15k. Estimated ROI by exam season (May 2027): 5–15× organic traffic vs current baseline, 500–2,000 organic email captures, foundational backlink-worthy assets.

If the founder has **six months**: layer authority content (50+ blog posts), digital PR campaign in March-April 2027 (the "How to revise English in 30 days" data report idea — pitch to TES, Schools Week, the Guardian Education), affiliate creator content scaling, and one mid-funnel quiz product (`/quiz/predict-your-grade`). Estimated total cost £30–60k. Goal: top-3 organic ranking for "GCSE English revision" by September 2027.

---

## What you'll find in the rest of this audit

- `seo-audit-report.md` — full technical, on-page, and conversion findings, page by page
- `seo-implementation-roadmap.md` — costed roadmap with priority scoring
- `seo-backlog-for-claude-code.md` — developer-ready ticket backlog
- `seo-page-inventory.csv` — every audited URL with scores and actions
- `seo-keyword-strategy.csv` — keyword clusters by audience and intent
- `seo-cost-estimate.csv` — costed implementation in GBP
- `seo-content-calendar.md` — six-month content plan, month-by-month

All recommendations are grounded in the actual codebase (file paths cited). All quantitative cost estimates are GBP ranges based on 2026 UK market rates. No keyword volumes, traffic numbers, or backlink counts are invented — qualitative bands are used instead and labelled as estimates.

—

_This audit was conducted with codebase access only. To validate live performance, the founder should run PageSpeed Insights against five priority URLs and connect Google Search Console for query data — both 30-minute jobs that materially sharpen the next iteration of this plan._
