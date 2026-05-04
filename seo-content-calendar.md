# SEO Content Calendar — 6-Month Plan

**Site:** https://theenglishhub.app
**Window:** May 2026 → November 2026 (peak revision lead-up timing)
**Cadence:** technical fixes Month 1, content + lead-magnet build Months 2-3, exam-prep authority Months 4-5, comparison + affiliate Month 6

The audit's full strategic context is in `seo-audit-report.md`. The implementation roadmap is in `seo-implementation-roadmap.md`. The dev backlog is in `seo-backlog-for-claude-code.md`. This calendar tells the founder what gets shipped, week by week.

---

## How to use this calendar

Each item below has:

- **Output** — the asset shipped that week
- **Owner** — Founder (Calum), Lauren (test user / advisor), Dev (Claude Code or contractor), Designer (PDF/asset designer), Writer (content freelancer if hired)
- **Priority** — P0 (must ship that week) / P1 (target that week, slip OK) / P2 (stretch goal)
- **Cluster** — which keyword cluster from `seo-keyword-strategy.csv` this targets

If the founder is doing this DIY (no freelancer budget), the schedule slips by ~2× — i.e., this 6-month plan stretches to 9-12 months. That's fine. The order doesn't change.

---

## MONTH 1 (May 2026): Quick wins + technical fixes + measurement baseline

The integrity-and-measurement month. **No long-form content gets shipped yet** because no compounding asset is built before the foundations are right.

### Week 1 (5 May - 11 May)

| Output                                                                    | Owner         | Priority | Cluster     |
| ------------------------------------------------------------------------- | ------------- | -------- | ----------- |
| Strip fabricated testimonials + unverified claims (TICKET-1)              | Founder + Dev | P0       | Trust       |
| Verify Google Search Console + Bing Webmaster + submit sitemap (TICKET-2) | Founder       | P0       | Measurement |
| Run PageSpeed Insights baseline against 5 URLs (TICKET-7 stage)           | Founder       | P1       | Performance |
| Migrate 3 Google Fonts to next/font/google (TICKET-3)                     | Dev           | P1       | Performance |

**Week-1 deliverable:** integrity restored. Measurement live. PageSpeed score baseline locked.

### Week 2 (12 May - 18 May)

| Output                                                             | Owner            | Priority | Cluster     |
| ------------------------------------------------------------------ | ---------------- | -------- | ----------- |
| Wire FAQPageJsonLd to 6 audience pages (TICKET-4)                  | Dev              | P1       | Schema      |
| Rewrite 8 audience-page H1s + titles (TICKET-5)                    | Founder + Lauren | P1       | On-page     |
| Build EmailCaptureCard component + API + Supabase table (TICKET-6) | Dev              | P1       | Conversion  |
| Document conversion event taxonomy (TICKET-9)                      | Founder          | P2       | Measurement |

**Week-2 deliverable:** rich-results eligible on key pages. Email-capture infrastructure live.

### Week 3 (19 May - 25 May)

| Output                                                                       | Owner            | Priority | Cluster  |
| ---------------------------------------------------------------------------- | ---------------- | -------- | -------- |
| Add per-page metadata to top 50 leaf pages (TICKET-7) — first 25 (set-texts) | Founder + Lauren | P2       | On-page  |
| Add Article + LearningResource + HowTo schema components (TICKET-8)          | Dev              | P2       | Schema   |
| Add ContactPoint schema to /contact (TICKET-16)                              | Dev              | P3       | Schema   |
| Add 404 page improvements (TICKET-17)                                        | Dev              | P3       | UX       |
| Add security headers (TICKET-19)                                             | Dev              | P3       | Security |

**Week-3 deliverable:** schema infrastructure ready for blog launch. Per-page metadata for set-texts.

### Week 4 (26 May - 1 June)

| Output                                                                         | Owner            | Priority | Cluster    |
| ------------------------------------------------------------------------------ | ---------------- | -------- | ---------- |
| Per-page metadata next 25 leaves (anthology hubs + IGCSE deep + resource hubs) | Founder + Lauren | P2       | On-page    |
| Sitemap content audit (TICKET-18)                                              | Dev              | P2       | Crawl      |
| EmailCaptureCard integrated on first 5 set-text pages                          | Dev              | P2       | Conversion |
| Submit first review to EdTech Impact directory (founding teacher request)      | Founder          | P2       | Trust      |

**Month-1 review (1 Jun):** all P0 + P1 quick-wins shipped. ~£0-1,000 cash spent. Search Console showing first impressions data.

---

## MONTH 2 (June 2026): Blog launch + first 10 PDFs

The content-engine month. Build the blog. Ship the first 10 PDF lead magnets. Begin compounding.

### Week 5 (2 Jun - 8 Jun)

| Output                                                                                                                              | Owner                    | Priority | Cluster               |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- | --------------------- |
| /blog architecture (TICKET-11) — index + [slug] + Article schema + MDX                                                              | Dev                      | P0       | Content infra         |
| First blog post: "How to analyse Macbeth like a Grade 9 student" (Article schema, embedded EmailCaptureCard for Macbeth quote bank) | Founder/Lauren or Writer | P0       | macbeth gcse revision |
| First lead magnet: Macbeth quote bank PDF (50 quotes + analysis)                                                                    | Designer + Lauren        | P0       | macbeth quotes        |
| /free-resources index page + first lead-magnet landing                                                                              | Dev                      | P0       | Content infra         |

**Week-5 deliverable:** blog live. First post + first PDF live.

### Week 6 (9 Jun - 15 Jun)

| Output                                                                           | Owner             | Priority | Cluster                         |
| -------------------------------------------------------------------------------- | ----------------- | -------- | ------------------------------- |
| Blog post 2: "The fastest way to remember Power & Conflict poems"                | Writer/Founder    | P1       | aqa power and conflict revision |
| Blog post 3: "What examiners actually look for in AO2 (with annotated examples)" | Writer/Founder    | P1       | ao1 ao2 ao5 explained           |
| Lead magnet 2: AQA P&C comparison grid PDF                                       | Designer + Lauren | P1       | power and conflict comparisons  |
| Lead magnet 3: An Inspector Calls quote bank PDF                                 | Designer + Lauren | P1       | an inspector calls quotes       |

### Week 7 (16 Jun - 22 Jun)

| Output                                                                  | Owner          | Priority | Cluster                              |
| ----------------------------------------------------------------------- | -------------- | -------- | ------------------------------------ |
| Blog post 4: "How to write a Grade 9 GCSE English Literature essay"     | Writer/Founder | P1       | how to write a grade 9 english essay |
| Blog post 5: "How AI marking actually works (and what it can't yet do)" | Founder        | P1       | how ai essay marking works           |
| Lead magnet 4: AO1/AO2/AO5 cheat sheet PDF                              | Designer       | P1       | ao1 ao2 ao5 explained                |
| Lead magnet 5: Macbeth essay-plan workbook PDF                          | Lauren         | P1       | macbeth essay plans                  |

### Week 8 (23 Jun - 29 Jun)

| Output                                                                                     | Owner             | Priority | Cluster                     |
| ------------------------------------------------------------------------------------------ | ----------------- | -------- | --------------------------- |
| Blog post 6: "Macbeth vs Romeo & Juliet — character comparisons that work"                 | Writer/Founder    | P1       | macbeth vs romeo and juliet |
| Blog post 7: "Why so many GCSE English students drop a grade in mocks (and how to fix it)" | Writer/Founder    | P1       | gcse english mock exam tips |
| Lead magnet 6: A Christmas Carol quote bank PDF                                            | Designer + Lauren | P1       | a christmas carol themes    |
| Lead magnet 7: Jekyll and Hyde quote bank PDF                                              | Designer + Lauren | P1       | jekyll and hyde themes      |

**Month-2 review (1 Jul):** 7 blog posts live. 7 PDFs live. EmailCaptureCard generating data. Search Console showing first ranking lifts.

---

## MONTH 3 (July 2026): Comparison pages + 12 more posts + 13 more PDFs

The mid-funnel + scale month. Comparison-intent pages launch. Volume on PDFs builds out.

### Week 9 (30 Jun - 6 Jul)

| Output                                                 | Owner          | Priority | Cluster                         |
| ------------------------------------------------------ | -------------- | -------- | ------------------------------- |
| /compare/[slug] architecture (TICKET-12)               | Dev            | P0       | Content infra                   |
| Comparison page 1: "AQA vs Edexcel English Literature" | Writer/Founder | P0       | aqa vs edexcel english          |
| Comparison page 2: "GCSE English vs IGCSE English"     | Writer/Founder | P0       | gcse vs igcse english           |
| Lead magnet 8: P&C essay-plan workbook PDF             | Lauren         | P1       | aqa power and conflict revision |

### Week 10 (7 Jul - 13 Jul)

| Output                                                           | Owner             | Priority | Cluster                           |
| ---------------------------------------------------------------- | ----------------- | -------- | --------------------------------- |
| Comparison page 3: "Cambridge IGCSE 0500 vs 0990"                | Writer/Founder    | P1       | cambridge 0500 vs 0990            |
| Comparison page 4: "Edexcel IGCSE vs Cambridge IGCSE English"    | Writer/Founder    | P1       | edexcel igcse vs cambridge igcse  |
| Blog post 8: "The 30-minute essay plan: GCSE English Literature" | Writer            | P1       | gcse english essay                |
| Lead magnet 9: 30-Day GCSE English Revision Plan PDF             | Designer + Lauren | P0       | 30 day gcse english revision plan |
| Lead magnet 10: ACC essay-plan workbook PDF                      | Lauren            | P1       | a christmas carol themes          |

### Week 11 (14 Jul - 20 Jul)

| Output                                                                | Owner          | Priority | Cluster                         |
| --------------------------------------------------------------------- | -------------- | -------- | ------------------------------- |
| Comparison page 5: "AQA vs OCR English Literature"                    | Writer/Founder | P2       | aqa vs ocr english              |
| Comparison page 6: "AQA vs Eduqas English Literature"                 | Writer/Founder | P2       | aqa vs eduqas english           |
| Blog post 9: "AQA Power & Conflict: every poem ranked for difficulty" | Writer/Founder | P1       | aqa power and conflict revision |
| Lead magnet 11: AIC essay-plan workbook                               | Lauren         | P1       | an inspector calls themes       |
| Lead magnet 12: Lord of the Flies key quotes PDF                      | Lauren         | P1       | lord of the flies themes        |

### Week 12 (21 Jul - 27 Jul)

| Output                                                                                                            | Owner             | Priority | Cluster                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------- | -------- | ----------------------------- |
| Blog post 10: "How to revise An Inspector Calls in 5 days"                                                        | Writer/Founder    | P1       | an inspector calls themes     |
| Blog post 11: "The full Pearson Edexcel IGCSE 4ET1 anthology, explained"                                          | Writer/Founder    | P1       | 4ET1 anthology poetry         |
| Blog post 12: "Cambridge IGCSE 0500 vs 0990 — what's the actual difference?" (cross-promote with comparison page) | Founder           | P1       | cambridge 0500 vs 0990        |
| Lead magnet 13: Macbeth themes flashcard pack                                                                     | Designer + Lauren | P1       | macbeth themes                |
| Lead magnet 14: AIC characters one-pager                                                                          | Designer + Lauren | P1       | an inspector calls characters |
| Lead magnet 15: Animal Farm chapter summaries PDF                                                                 | Lauren            | P1       | animal farm themes            |

**Month-3 review (1 Aug):** 12 blog posts + 6 comparison pages + 15 PDFs live. Search Console showing organic traffic uptick (estimated 200-500% over baseline). First emails in the list (estimated 50-300).

---

## MONTH 4 (August 2026): Teacher + school content + scale-out

The B2B + September-back-to-school prep month. Audience: teachers and school heads.

### Week 13 (28 Jul - 3 Aug)

| Output                                                              | Owner    | Priority | Cluster                  |
| ------------------------------------------------------------------- | -------- | -------- | ------------------------ |
| Lead magnet 16: AQA AO weighting reference for teachers             | Designer | P1       | english teacher tools    |
| Lead magnet 17: Lesson-starter pack — Macbeth Act 1                 | Lauren   | P1       | gcse english lesson plan |
| Lead magnet 18: Lesson-starter pack — AIC Act 1                     | Lauren   | P1       | gcse english lesson plan |
| Blog post 13: "How English teachers can use AI marking responsibly" | Founder  | P1       | english teacher tools    |

### Week 14 (4 Aug - 10 Aug)

| Output                                                                          | Owner            | Priority | Cluster                            |
| ------------------------------------------------------------------------------- | ---------------- | -------- | ---------------------------------- |
| Lead magnet 19: AQA P&C lesson-starter pack                                     | Lauren           | P1       | gcse english lesson plan           |
| Lead magnet 20: Department-meeting Ofsted-prep template                         | Founder + Lauren | P2       | ofsted english department evidence |
| Blog post 14: "The Ofsted English Department deep-dive — what to prepare"       | Founder          | P2       | ofsted english department evidence |
| /resources/teaching/lesson-plans page rebuild with first 5 lesson plans visible | Dev + Lauren     | P1       | english teacher resources          |
| /resources/teaching/printables page rebuild with first 30 PDFs visible          | Dev              | P1       | english worksheet template         |

### Week 15 (11 Aug - 17 Aug)

| Output                                                                                      | Owner             | Priority | Cluster                                |
| ------------------------------------------------------------------------------------------- | ----------------- | -------- | -------------------------------------- |
| Lead magnet 21: Whole-class essay-mark sheet                                                | Designer + Lauren | P2       | english teacher tools                  |
| Lead magnet 22: Parent's guide to GCSE English                                              | Designer + Lauren | P1       | parents guide to gcse english          |
| Blog post 15: "How to help your child with GCSE English (without being an English teacher)" | Founder           | P1       | how to help my child with gcse english |
| /for-parents page rewrite with new H1, FAQ schema, parent-specific lead-magnet pairing      | Dev + Founder     | P1       | gcse english tutor                     |

### Week 16 (18 Aug - 24 Aug)

| Output                                                          | Owner             | Priority | Cluster                   |
| --------------------------------------------------------------- | ----------------- | -------- | ------------------------- |
| Set-text page enrichment — Macbeth pilot (TICKET-15)            | Dev + Lauren      | P1       | macbeth gcse revision     |
| Lead magnet 23: 14-day pre-mock revision plan                   | Designer + Lauren | P1       | 14 day mock revision plan |
| Lead magnet 24: J&H themes flashcard pack                       | Designer + Lauren | P1       | jekyll and hyde themes    |
| Blog post 16: "AO2 in 5 minutes: how examiners read your essay" | Writer/Founder    | P1       | ao1 ao2 ao5 explained     |

**Month-4 review (1 Sep):** teacher + school content live. Set-text enrichment template proven (Macbeth). Back-to-school traffic spike expected.

---

## MONTH 5 (September 2026): Authority + set-text scale-out

The exam-prep authority month. As schools start the academic year, students search for revision content. Build authority depth.

### Week 17 (25 Aug - 31 Aug)

| Output                                                                    | Owner             | Priority | Cluster                                 |
| ------------------------------------------------------------------------- | ----------------- | -------- | --------------------------------------- |
| Set-text enrichment for AIC + ACC + R&J (template applied)                | Dev + Lauren      | P1       | various set-texts                       |
| Lead magnet 25: Edexcel IGCSE Lit set-text overview pack                  | Designer + Lauren | P2       | edexcel igcse literature revision       |
| Blog post 17: "Why English exams are getting harder (and how to keep up)" | Founder           | P2       | gcse english revision schedule          |
| Blog post 18: "How to memorise quotes for GCSE English"                   | Writer            | P1       | how to memorise quotes for gcse english |

### Week 18 (1 Sep - 7 Sep)

| Output                                                         | Owner             | Priority | Cluster                |
| -------------------------------------------------------------- | ----------------- | -------- | ---------------------- |
| Set-text enrichment for J&H + Animal Farm + LotF               | Dev + Lauren      | P1       | various set-texts      |
| Lead magnet 26: Cambridge IGCSE 0500/0990 difference guide PDF | Designer          | P2       | cambridge 0500 vs 0990 |
| Lead magnet 27: Unseen poetry approach guide PDF               | Designer + Lauren | P2       | unseen poetry analysis |
| Blog post 19: "How to read an unseen poem in 8 minutes"        | Writer            | P1       | unseen poetry analysis |

### Week 19 (8 Sep - 14 Sep)

| Output                                                                                                          | Owner             | Priority | Cluster                      |
| --------------------------------------------------------------------------------------------------------------- | ----------------- | -------- | ---------------------------- |
| Set-text enrichment for Of Mice and Men + TKAM + Things Fall Apart (Edexcel IGCSE focus)                        | Dev + Lauren      | P2       | edexcel igcse prose          |
| Lead magnet 28: AQA Language Paper 1 walkthrough PDF                                                            | Designer + Lauren | P1       | aqa english language paper 1 |
| Blog post 20: "How to ace AQA English Language Paper 1 in 90 minutes"                                           | Writer/Founder    | P1       | aqa english language paper 1 |
| /resources/grade-targets/grade-9 deep-dive — rewrite into a comprehensive Grade 9 essay guide with HowTo schema | Dev + Lauren      | P1       | gcse english grade 9 tips    |

### Week 20 (15 Sep - 21 Sep)

| Output                                                                                | Owner             | Priority | Cluster                      |
| ------------------------------------------------------------------------------------- | ----------------- | -------- | ---------------------------- |
| Set-text enrichment for Frankenstein + Jane Eyre + Pride & Prejudice                  | Dev + Lauren      | P2       | various set-texts            |
| Lead magnet 29: AQA Language Paper 2 walkthrough PDF                                  | Designer + Lauren | P2       | aqa english language paper 2 |
| Blog post 21: "How to PEEL a paragraph (with examples that actually score Grade 9)"   | Writer            | P1       | peel paragraph structure     |
| EdTech Impact + first 10 reviews milestone — flip NEXT_PUBLIC_EDTECH_IMPACT_LIVE=true | Founder + Dev     | P1       | Trust                        |

**Month-5 review (1 Oct):** ~21 blog posts + 6 comparison + 29 PDFs + 10 enriched set-texts. AggregateRating live in schema. Estimated 1,500-3,000 emails captured cumulative.

---

## MONTH 6 (October 2026): Comparison + affiliate + backlink-worthy assets

The authority-amplification month. Polish the storefront. Build the asset for Q1 2027 PR campaign. Push affiliate distribution.

### Week 21 (22 Sep - 28 Sep)

| Output                                                                                      | Owner              | Priority | Cluster                          |
| ------------------------------------------------------------------------------------------- | ------------------ | -------- | -------------------------------- |
| Lead magnet 30: GCSE English Grade Distribution Mini-Report (data-led, exam-board specific) | Founder + Designer | P1       | Backlink-worthy                  |
| Local landing page: /for-schools/qatar                                                      | Dev + Founder      | P2       | qatar british curriculum english |
| Local landing page: /for-schools/gcc                                                        | Dev + Founder      | P2       | gcc british curriculum english   |
| Local landing page: /igcse/international-schools                                            | Dev + Founder      | P2       | international school english     |

### Week 22 (29 Sep - 5 Oct)

| Output                                                                                                                                   | Owner          | Priority | Cluster                         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------- | ------------------------------- |
| Predict-your-grade tool quiz (mid-funnel TOFU)                                                                                           | Dev + Lauren   | P1       | predict your gcse english grade |
| Blog post 22: "Predict your GCSE English grade — what's your real ceiling?" (paired with the tool)                                       | Writer/Founder | P1       | predict your gcse english grade |
| Set-text enrichment for the rest (Anita and Me, Pigeon English, Curious Incident, Never Let Me Go, Blood Brothers, View from the Bridge) | Dev + Lauren   | P2       | various                         |
| /exam-boards index page (TICKET-13 expansion) — internal-link hub                                                                        | Dev            | P2       | Internal link                   |

### Week 23 (6 Oct - 12 Oct)

| Output                                                                                                                 | Owner            | Priority | Cluster                         |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------------------------------- |
| Affiliate creator content — 5 case-study posts of creators who joined the programme (only if signed releases obtained) | Founder + Writer | P2       | educational affiliate programme |
| Blog post 23: "How affiliate marketing for EdTech actually works" — founder thought-leadership                         | Founder          | P3       | educational affiliate programme |
| Comparison page expansion: "The English Hub vs Save My Exams" / "vs Seneca" / "vs PMT" — defensive comparison pages    | Writer/Founder   | P3       | branded comparison              |
| Submit /blog and /compare to new directories (EdTech Hub, Common Sense Education)                                      | Founder          | P2       | Authority                       |

### Week 24 (13 Oct - 19 Oct)

| Output                                                                                                                         | Owner            | Priority | Cluster                     |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------- | -------- | --------------------------- |
| Q1 2027 Digital PR campaign — start drafting "How to revise English in 30 days" master report (50-page asset, December launch) | Founder + Lauren | P1       | Digital PR                  |
| Blog post 24: "Mock exam season — when, what, how (with a checklist)"                                                          | Writer/Founder   | P1       | gcse english mock exam tips |
| Pitch list: TES, Schools Week, the Guardian Education, Mumsnet for the Q1 campaign                                             | Founder          | P1       | Digital PR                  |
| Founder LinkedIn cadence — 1 post/week starts                                                                                  | Founder          | P2       | Brand                       |

**Month-6 review (1 Nov):** ~24 blog posts + 6 comparison pages + 30+ PDFs + 17 enriched set-texts + 3 local landing pages + Predict-your-grade quiz live. AggregateRating live. Q1 PR asset in build. Estimated 3,000-8,000 emails captured cumulative.

---

## Targets at end of month 6 (vs current baseline of 0)

| KPI                                  | Target                 | Method to measure                     |
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

---

## What month 7+ looks like (preview)

- **Month 7 (November 2026):** finalise Q1 PR asset, pre-launch links to teacher Twitter, Mumsnet, Reddit. Push affiliate creators in DM cadence.
- **Month 8 (December 2026):** launch Q1 PR campaign. Pitch TES + Schools Week. Mid-month exam-prep traffic peaks.
- **Months 9-12 (Jan-Apr 2027):** ride the exam-prep traffic wave. 1 post + 1 PDF per week. School demos accelerate. School pilots start.
- **Month 13 (May 2027):** exam season — peak inbound. Conversion focus. Subscription conversions accelerate.
- **Month 14+ (June 2027):** results-day data report (Q2 PR asset). Repeat the cycle.

---

## Notes for the founder

- **The single best money you can spend in May 2026** is paying a UK education-content writer £500-1,000 to ghostwrite the first 12 blog posts. This frees 3-4 weeks of your time for school-procurement conversations, where £1 of your time is worth £10-100 of writer time.
- **The single best DIY contribution from Lauren** is the lead-magnet content. She knows the spec, knows what students actually need, and can produce a 20-page Macbeth quote bank in a day.
- **The single biggest commercial mistake** would be skipping Phase 1 quick wins (testimonial cleanup, GSC verification) and going straight to content. Without measurement, you're flying blind. Without integrity, the content engine builds on quicksand.

This calendar is achievable. It's also tight. If a week slips, slip the lower-priority item (P3) and protect the P0/P1 work.
