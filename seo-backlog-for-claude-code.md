# SEO Implementation Backlog — for Claude Code

**Site:** https://theenglishhub.app
**Date:** 04 May 2026
**Format:** developer-ready tickets — each is self-contained, has acceptance criteria, file paths, and testing instructions.

This backlog is designed to be picked up one ticket at a time by Claude Code (or a human developer). Tickets are ordered by priority. Dependencies are flagged.

---

## TICKET-1 — Strip fabricated testimonials and unverified claims

**Priority:** P0 — must ship before any marketing push
**Estimated time:** 4 hours
**Dependencies:** none

### Description

The pages `/for-teachers` and `/for-schools` contain three classes of integrity violations that contradict `.claude/brand-voice-guidelines.md` §11.5 (verified-claims allowlist):

1. **Fabricated testimonials** in `src/app/for-teachers/page.tsx` lines 97-116 (the `testimonials` array — Sarah M., James T., Priya K.). These are invented and were previously removed from `/for-schools` in the 28 Apr 2026 session.
2. **Unverified numerical product claims** — "Save 5+ hours per week" (`timeSavers` array), "300+ Ready Resources" (in `features` array), "300+ ready-made resources" (in `/for-schools` `PLATFORM_FEATURES`), "Ofsted-ready reports in seconds".
3. **Possibly-fabricated single testimonial** in `/for-students` infographic alt-text: "I'm more confident in English than ever before" — Aanya, Student.

### Acceptance criteria

- [ ] `src/app/for-teachers/page.tsx`: delete the `testimonials` array and the JSX that renders it. Replace with the `EmptyTestimonials` component pattern used on `/for-schools` (or a similar empty-state).
- [ ] `src/app/for-teachers/page.tsx`: remove "300+ Ready Resources" from the `features` array's `desc` field for the Library item. Replace with: "A growing library of worksheets, revision materials, model answers, and starter activities — all ready to print or share digitally."
- [ ] `src/app/for-teachers/page.tsx`: remove "Save 5+ hours per week on lesson planning" from `timeSavers`. Replace with: "Spend less time on routine planning and marking — the AI shoulders the repetitive work." (Or remove the bullet entirely if the founder can't yet evidence any time saving.)
- [ ] `src/app/for-schools/page.tsx`: rewrite the "Lesson Builder & 300+ Resources" feature card title to "Lesson Builder & Resource Library" and update `desc` to remove the "300+ ready-made resources" claim.
- [ ] `src/app/for-students/page.tsx`: verify whether "Aanya, Student" testimonial is real. If not real-and-released, edit the `alt` text on `<InfographicBanner src="/infographics/for-students.png" alt="...">` to remove the testimonial line. If the underlying PNG image also displays the quote, flag the asset for replacement.
- [ ] Verify no other surface ships fabricated testimonials. Run `grep -rn "Sarah M\.\|James T\.\|Priya K\.\|Aanya, Student" src/`.
- [ ] Run `grep -rn "300+\|Save 5+\|Save 5 hours\|five hours per week\|300\+ Resources\|five-plus hours" src/` and address every hit.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` succeeds.

### Files to change

- `src/app/for-teachers/page.tsx`
- `src/app/for-schools/page.tsx`
- `src/app/for-students/page.tsx` (if Aanya not verified)
- `src/components/marketing/InfographicBanner.tsx` (alt-text adjustments)
- Possibly: `public/infographics/for-students.png` (asset replacement — flag for design)

### Testing instructions

```
npm run typecheck
npm run build
```

Visual smoke:

- Visit `/for-teachers` — confirm no testimonial cards render and no "300+" text exists.
- Visit `/for-schools` — confirm no "300+" text.
- Visit `/for-students` — confirm no testimonial in alt-text.

---

## TICKET-2 — Verify Google Search Console + Bing Webmaster

**Priority:** P0
**Estimated time:** 1 hour
**Dependencies:** none (founder needs DNS access)

### Description

Add Google Search Console and Bing Webmaster verification, submit the sitemap, set the international targeting.

### Acceptance criteria

- [ ] Add `<meta name="google-site-verification" content="<verification-code>" />` to `<head>` in `src/app/layout.tsx`. Use environment variable `NEXT_PUBLIC_GOOGLE_VERIFICATION_ID` so it can be omitted when env var is empty (mirror the existing `NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID` pattern at lines 79-84).
- [ ] Same for Bing: `<meta name="msvalidate.01" content="<bing-code>" />` gated by `NEXT_PUBLIC_BING_VERIFICATION_ID`.
- [ ] Founder verifies the domain via Search Console (DNS or HTML meta), submits `https://theenglishhub.app/sitemap.xml`, sets international targeting to United Kingdom.
- [ ] Same for Bing.
- [ ] Document verification status in `business-docs/SEO-MEASUREMENT-SETUP.md`.

### Files to change

- `src/app/layout.tsx` (add the two meta tags, env-gated)
- `.env.example` (add `NEXT_PUBLIC_GOOGLE_VERIFICATION_ID=`, `NEXT_PUBLIC_BING_VERIFICATION_ID=`)
- New: `business-docs/SEO-MEASUREMENT-SETUP.md`

### Testing instructions

After deploy, view-source on the homepage — confirm the meta tags render (with the env var set in production). Confirm verification succeeds in GSC.

---

## TICKET-3 — Migrate Google Fonts to next/font/google

**Priority:** P1
**Estimated time:** 1 day
**Dependencies:** none

### Description

The root layout currently imports three fonts via render-blocking `<link href="https://fonts.googleapis.com/css2?family=...">` (lines 72-77 of `src/app/layout.tsx`). This adds 200-500ms to LCP. Migrate to `next/font/google` so Next.js self-hosts and inlines.

### Acceptance criteria

- [ ] Replace the `<link>` tags in `src/app/layout.tsx <head>` with `next/font/google` imports for `Newsreader`, `Geist`, and `JetBrains Mono`. Use `display: 'swap'`, `subsets: ['latin']`.
- [ ] Add the resulting font-variable className(s) to the `<html>` tag alongside `monaSans.variable`.
- [ ] Confirm globals.css still references the same `var(--font-...)` variables.
- [ ] Run PageSpeed Insights against the homepage before and after; document the LCP delta in `business-docs/CWV-baseline-2026-05.md`.
- [ ] `npm run build` succeeds.

### Files to change

- `src/app/layout.tsx`
- Possibly: `src/app/globals.css` (if font-variable names change)

### Testing instructions

```
npm run build
npm run start
```

Open homepage in an incognito window with DevTools Network tab open. Confirm no requests to `fonts.googleapis.com` or `fonts.gstatic.com`. Check LCP in DevTools Performance.

Run https://pagespeed.web.dev against the deployed URL.

---

## TICKET-4 — Wire FAQPageJsonLd to 6 audience pages

**Priority:** P1
**Estimated time:** 1 day
**Dependencies:** none

### Description

`src/components/seo/json-ld.tsx` already exports `FAQPageJsonLd`. It is currently under-used. Wire it to every page with an inline FAQ array.

### Acceptance criteria

- [ ] `src/app/pricing/page.tsx`: import `FAQPageJsonLd`. After the existing FAQ render JSX, emit `<FAQPageJsonLd faqs={FAQ_ITEMS.map((i) => ({ question: i.q, answer: i.a }))} />`.
- [ ] `src/app/for-teachers/page.tsx`: same pattern with the `faqs` array.
- [ ] `src/app/for-schools/page.tsx`: same. Need to extract the FAQ data into a flat array first if it's currently nested in `<FAQItem />` components.
- [ ] `src/app/for-parents/page.tsx`: audit; add if FAQ array exists.
- [ ] `src/app/affiliates/page.tsx`: audit; add if FAQ exists. If not, write 5 affiliate-targeted FAQs.
- [ ] `src/app/faqs/page.tsx`: confirm `FAQPageJsonLd` is already wired; add if missing.
- [ ] Validate the JSON-LD on each page via https://search.google.com/test/rich-results.

### Files to change

- `src/app/pricing/page.tsx`
- `src/app/for-teachers/page.tsx`
- `src/app/for-schools/page.tsx`
- `src/app/for-parents/page.tsx`
- `src/app/affiliates/page.tsx`
- `src/app/faqs/page.tsx`

### Testing instructions

After deploy, paste each of the 6 URLs into https://search.google.com/test/rich-results and confirm "Page is eligible for rich results: FAQ" appears.

---

## TICKET-5 — Rewrite 8 audience-page H1s and titles for query intent

**Priority:** P1
**Estimated time:** 1 day
**Dependencies:** TICKET-1 must land first (no fake testimonials in the rewritten copy)

### Description

Replace marketing-slogan H1s and titles with phrases users actually search for.

### Acceptance criteria

Per the table in `seo-implementation-roadmap.md` Q5:

- [ ] `src/app/page.tsx` (homepage): update H1 in `BoardPickerSection` to "GCSE and IGCSE English revision, AI marked against the AO mark scheme." Existing copy at "Pick your exam board to start" can become a sub-head.
- [ ] `src/app/for-students/page.tsx`: H1 → "Your GCSE or IGCSE English revision, in one place"; metadata title → "GCSE and IGCSE English revision for students — The English Hub"; metadata description rewrite.
- [ ] `src/app/for-teachers/page.tsx`: H1 → "English department tools for AQA, Edexcel, OCR and WJEC teachers"; metadata title → "English teacher tools and AI marking — The English Hub".
- [ ] `src/app/for-schools/page.tsx`: H1 → "Whole-department English platform for UK schools"; metadata title → "English platform for schools — The English Hub".
- [ ] `src/app/for-parents/page.tsx`: H1 → "Help your child pass GCSE or IGCSE English"; metadata title → "GCSE and IGCSE English help for parents — The English Hub".
- [ ] `src/app/affiliates/page.tsx`: H1 → "Earn 20% recurring commission promoting GCSE English revision"; metadata title → "Affiliate programme — The English Hub". (Verify 20% is current — match `business-docs/AFFILIATE_TERMS.md` if exists.)
- [ ] `src/app/about/page.tsx`: H1 → "About The English Hub". Body copy must comply with brand-voice guidelines (no "built by a teacher" claim unless founder has signed off — see `.claude/brand-voice-guidelines.md` §11.5).
- [ ] `src/app/igcse/page.tsx`: H1 → "IGCSE English revision — Pearson Edexcel and Cambridge specs covered"; metadata title → "IGCSE English revision — The English Hub".

### Files to change

- All 8 page.tsx files listed above

### Testing instructions

```
npm run typecheck
npm run build
```

Visual: visit each of the 8 URLs in production after deploy, verify H1 and tab title.

---

## TICKET-6 — Build EmailCaptureCard component + API route + database

**Priority:** P1
**Estimated time:** 2 days
**Dependencies:** none

### Description

A reusable lead-magnet email-capture card. Drop into any study guide / blog post / landing page. Posts to a new API route, which inserts into a `email_subscribers` Supabase table and (optionally) calls Resend Audiences API.

### Acceptance criteria

- [ ] New: `supabase/migrations/2026XXXX_email_subscribers.sql` with table:
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
- [ ] New: `src/app/api/email/capture/route.ts` — POST endpoint, Zod-validated body `{ email, magnetSlug, sourcePath }`, rate-limited (5/IP/hour), inserts into table, optionally syncs to Resend Audiences.
- [ ] New: `src/components/marketing/EmailCaptureCard.tsx` — client component with form, optimistic UI, success state with download link (if magnet has a downloadable PDF), GDPR consent checkbox.
- [ ] Wire into one trial page first: bottom of `src/app/revision/texts/macbeth/page.tsx`. Verify end-to-end works.
- [ ] Document usage in `business-docs/EMAIL-CAPTURE-RUNBOOK.md`.
- [ ] Add `email_captured` event firing on success (PostHog + GA4).

### Files to change

- New: `supabase/migrations/2026XXXX_email_subscribers.sql`
- New: `src/app/api/email/capture/route.ts`
- New: `src/components/marketing/EmailCaptureCard.tsx`
- New: `business-docs/EMAIL-CAPTURE-RUNBOOK.md`
- Mod: `src/app/revision/texts/macbeth/page.tsx` (integration test)
- Mod: events documented in `business-docs/EVENT-TAXONOMY.md` (new doc — see TICKET-9)

### Testing instructions

```
# Apply migration
supabase migration up

# Build
npm run build

# Manual test
# 1. Visit /revision/texts/macbeth
# 2. Submit email in EmailCaptureCard
# 3. Verify row in email_subscribers
# 4. Verify email_captured event in PostHog
# 5. Verify rate-limit returns 429 after 6th request from same IP within 1h
```

---

## TICKET-7 — Add per-page metadata to top 50 leaf pages

**Priority:** P2
**Estimated time:** 2-3 days
**Dependencies:** TICKET-5 (audience pages) recommended first

### Description

Many leaf pages currently inherit only the root metadata template. Each priority leaf needs a per-page `metadata` export with unique title and description.

### Acceptance criteria

- [ ] List of 50 priority leaves compiled (set-text root pages, anthology cluster hubs, IGCSE deep pages, resource hubs).
- [ ] Each page has a `metadata` export (or `generateMetadata` for dynamic pages) with:
  - `title` — query-aligned
  - `description` — 140-155 chars, page-specific
  - `alternates: { canonical: '<page-url>' }`
  - OG title + description
- [ ] No two pages share the same metadata.
- [ ] Run https://search.google.com/test/rich-results on 5 sample pages; confirm canonical and metadata are correctly extracted.

### Files to change

50 page.tsx files. Suggested order:

1. The 25 set-text root pages: `src/app/revision/texts/<text>/page.tsx`
2. The 10 anthology hubs: `src/app/revision/poetry/<cluster>/page.tsx`
3. The IGCSE deep pages: `src/app/igcse/edexcel/{drama,prose,shakespeare,unseen-poetry}/page.tsx` etc.
4. Resource hubs: `src/app/resources/english-{language,literature}/{aqa,edexcel,ocr,wjec,caie}/page.tsx`

### Testing instructions

After deploy, run a free crawler (e.g., Screaming Frog free tier — up to 500 URLs) and export titles/descriptions. Verify uniqueness.

---

## TICKET-8 — Add Article + LearningResource + HowTo schema components

**Priority:** P2
**Estimated time:** 2-3 days dev + 2 days integration
**Dependencies:** none

### Description

Extend `src/components/seo/json-ld.tsx` with three new components:

1. `ArticleJsonLd` — for blog posts and comparison pages
2. `LearningResourceJsonLd` — for set-text study guides and lesson plans
3. `HowToJsonLd` — for revision technique pages

### Acceptance criteria

- [ ] Each component has TypeScript types for required and optional fields.
- [ ] Each component renders a `<script type="application/ld+json" nonce={nonce}>` (matching the existing pattern at `src/components/seo/json-ld.tsx`).
- [ ] Each component validates against https://validator.schema.org/.
- [ ] Each component has a JSDoc example.
- [ ] Wired into:
  - `LearningResource` → all set-text root pages (25 pages)
  - `LearningResource` → all anthology cluster hubs (10 pages)
  - `HowTo` → `/revision/exam-technique` and any `/resources/exam-technique/*` pages
  - `Article` → ready for the future `/blog/[slug]` (TICKET-11) and `/compare/[slug]` (TICKET-12) pages

### Files to change

- `src/components/seo/json-ld.tsx`
- 25+ set-text page.tsx files (integration)
- 10 anthology cluster page.tsx files
- Exam-technique page.tsx files

### Testing instructions

```
# After integration
# 1. Visit https://validator.schema.org/
# 2. Paste the rendered HTML from a sample integrated page
# 3. Confirm zero errors and zero warnings
```

---

## TICKET-9 — Document event taxonomy

**Priority:** P2
**Estimated time:** 0.5 day
**Dependencies:** none

### Description

Create `business-docs/EVENT-TAXONOMY.md` with every PostHog and GA4 event the site fires.

### Acceptance criteria

- [ ] New file `business-docs/EVENT-TAXONOMY.md` lists every event with:
  - Name (snake_case, semantic)
  - When it fires (URL pattern, user action)
  - Parameters (key/value)
  - Fires in PostHog? GA4? Both?
- [ ] At minimum, the events listed in §10 of `seo-audit-report.md` are documented.
- [ ] Each new ticket below this one updates the taxonomy when introducing a new event.

### Files to change

- New: `business-docs/EVENT-TAXONOMY.md`

### Testing instructions

N/A — documentation.

---

## TICKET-10 — Add `<EmailCaptureCard />` to top 20 organic-intent pages

**Priority:** P2
**Estimated time:** 1 day
**Dependencies:** TICKET-6 must land first

### Description

After the EmailCaptureCard works on `/revision/texts/macbeth`, integrate it onto the next 20 highest-organic-intent pages with a relevant lead magnet.

### Acceptance criteria

- [ ] EmailCaptureCard rendered at the bottom of:
  - All 25 `/revision/texts/<text>/page.tsx` (matched to a per-text lead magnet)
  - All 4 anthology cluster pages
  - Top-3 IGCSE landing pages
- [ ] Each integration uses a `magnetSlug` matching a future PDF lead magnet (TICKET-11+).
- [ ] If a lead magnet doesn't exist yet, the card shows "Free [Text] revision pack — coming soon, get notified" and the email goes into the same `email_subscribers` table for later retargeting.
- [ ] Visual smoke on 5 sample pages — card renders responsively, accessible.

### Files to change

- ~30 page.tsx files (one-liner integration each)

### Testing instructions

Visual smoke. Verify rate-limit and event firing on each.

---

## TICKET-11 — Build /blog architecture + first blog post

**Priority:** P1 (start in week 2-3)
**Estimated time:** 1 week
**Dependencies:** TICKET-8 (Article schema)

### Description

Create the blog infrastructure. Each blog post lives in `content/blog/<slug>.mdx` with frontmatter; rendered via `next-mdx-remote` (already a Next.js standard).

### Acceptance criteria

- [ ] New: `src/app/blog/page.tsx` — index page listing all posts, with cover image, title, excerpt, date, author.
- [ ] New: `src/app/blog/[slug]/page.tsx` — article page with MDX rendering, ArticleJsonLd, BreadcrumbJsonLd, related-posts, EmailCaptureCard at the bottom.
- [ ] New: `content/blog/<slug>.mdx` — first launch post: "How to analyse Macbeth like a Grade 9 student" with frontmatter (`title`, `description`, `slug`, `date`, `author`, `cover`, `tags`).
- [ ] New: `src/lib/blog/mdx.ts` — helper that reads MDX files, parses frontmatter, returns posts.
- [ ] Update: `src/app/sitemap.ts` — dynamically include blog routes.
- [ ] Schema: `Article` with `headline`, `description`, `image`, `datePublished`, `author`, `publisher`.
- [ ] OG image generated dynamically at `/api/og?title=<slug>&subtitle=<excerpt>`.
- [ ] Add `Blog` schema on the index page.

### Files to change

- New: blog routes + components above
- `src/app/sitemap.ts`
- `src/app/api/og/route.tsx` (extend if needed)
- `package.json` (add `next-mdx-remote`, `gray-matter` if not present)

### Testing instructions

```
npm install next-mdx-remote gray-matter
npm run typecheck
npm run build
```

Manual:

- Visit `/blog` — index renders.
- Visit `/blog/how-to-analyse-macbeth-like-a-grade-9-student` — article renders with schema.
- Validate Article JSON-LD at https://validator.schema.org.

---

## TICKET-12 — Build /compare/[slug] comparison-page architecture + first 6 pages

**Priority:** P1 (start week 3-4)
**Estimated time:** 2-3 weeks
**Dependencies:** TICKET-8

### Description

Build the comparison-page architecture for mid-funnel comparison-intent queries.

### Acceptance criteria

- [ ] New: `src/app/compare/page.tsx` — index of all comparison pages.
- [ ] New: `src/app/compare/[slug]/page.tsx` — comparison page template.
- [ ] New: `content/compare/<slug>.mdx` — 6 launch pages:
  1. `aqa-vs-edexcel-gcse-english-literature.mdx`
  2. `aqa-vs-ocr-gcse-english-literature.mdx`
  3. `aqa-vs-eduqas-gcse-english-literature.mdx`
  4. `edexcel-igcse-vs-cambridge-igcse-english.mdx`
  5. `cambridge-igcse-0500-vs-0990.mdx`
  6. `gcse-english-vs-igcse-english.mdx`
- [ ] Each page includes: comparison table (Tailwind table), "Which one am I sitting?" decision tree, 1,500-2,500 words, 5 internal links to relevant board hubs, EmailCaptureCard at bottom.
- [ ] Schema: `Article` + `BreadcrumbList`.
- [ ] Sitemap entries.

### Files to change

- Routes + components
- 6 MDX content files
- Sitemap

### Testing instructions

Same as TICKET-11.

---

## TICKET-13 — Add Course schema to per-board hubs

**Priority:** P2
**Estimated time:** 1 day
**Dependencies:** none

### Description

`src/components/seo/json-ld.tsx` already has `CourseJsonLd`. Wire to:

- `/igcse/edexcel` (Pearson Edexcel IGCSE Literature 4ET1)
- `/igcse/edexcel-lang` (Pearson Edexcel IGCSE Language A 4EA1)
- `/igcse/cambridge/0500` (Cambridge 0500)
- `/igcse/cambridge/0990` (Cambridge 0990)
- `/revision/poetry/edexcel` (Pearson Edexcel GCSE 1ET0 — poetry component)

### Acceptance criteria

- [ ] Each page emits `<CourseJsonLd ... />` with correct `name`, `description`, `educationalLevel` ("IGCSE" or "GCSE"), `provider: "The English Hub"`, `url`.
- [ ] AggregateRating remains env-gated until reviews are live.
- [ ] Validate at https://validator.schema.org.

### Files to change

- 5 page.tsx files

---

## TICKET-14 — Build first 10 PDF lead magnets

**Priority:** P1 (start week 2)
**Estimated time:** 4 weeks (2-3 PDFs/week)
**Dependencies:** TICKET-6 + TICKET-10

### Description

Author and host the first 10 of the 30 lead magnets specified in `seo-implementation-roadmap.md` S2.

### Acceptance criteria

- [ ] 10 PDFs created: Macbeth quote bank, Macbeth essay-plan workbook, Macbeth themes flashcard pack, AIC quote bank, AIC characters one-pager, ACC quote bank, ACC themes flashcard pack, J&H quote bank, P&C comparison grid, P&C essay-plan workbook.
- [ ] Each PDF hosted at Vercel Blob or Cloudflare R2 with signed-URL access.
- [ ] Each is gated behind email capture (TICKET-6 + TICKET-10 integration).
- [ ] Each has a landing page at `/free-resources/<slug>` with title, description, preview-image, EmailCaptureCard.
- [ ] Index at `/free-resources` lists all available magnets.
- [ ] Sitemap updated.

### Files to change

- New: `src/app/free-resources/page.tsx`
- New: `src/app/free-resources/[slug]/page.tsx`
- New: `content/lead-magnets/<slug>.mdx` (frontmatter + landing-page copy)
- 10 PDFs in Cloudflare R2 / Vercel Blob
- New: `src/lib/lead-magnets/list.ts`
- `src/app/sitemap.ts` updated

### Testing instructions

End-to-end: visit landing page, submit email, receive download link, download PDF, verify in `email_subscribers`.

---

## TICKET-15 — Set-text page enrichment (Macbeth as pilot)

**Priority:** P2
**Estimated time:** 0.5 day per text → 12 days for 25 texts
**Dependencies:** TICKET-8 (LearningResource schema)

### Description

The set-text root pages currently have basic structures. Enrich each with a richer information architecture.

### Acceptance criteria (per text — pilot is Macbeth)

- [ ] `LearningResource` schema (with `educationalLevel`, `inLanguage`, `audience`)
- [ ] 3-5 paragraph summary intro at the top
- [ ] "Top 5 quotes for AO2" widget (data already in the `set-texts.ts` registry per text)
- [ ] "Compare with: <other text>" cross-link panel — links to 3 other set texts in the same exam category
- [ ] EmailCaptureCard at bottom (TICKET-10 integration)
- [ ] `examBoard` prop reads from cookie via `getServerBoard()` (already done per the I15 work in prior session)

### Files to change

- `src/app/revision/texts/macbeth/page.tsx` (pilot)
- After pilot: same template applied to 24 sibling pages

### Testing instructions

Build + visual smoke + Lighthouse a11y.

---

## TICKET-16 — Add ContactPoint schema to /contact

**Priority:** P3
**Estimated time:** 30 minutes
**Dependencies:** none

### Description

Add `ContactPoint` schema to `/contact` page so Google can show "Email", "Telephone" structured data in search results.

### Acceptance criteria

- [ ] `<script type="application/ld+json">` with `Organization` schema including `contactPoint` (email, contactType: "customer support", areaServed: "GB", availableLanguage: ["en"]).
- [ ] If response-time SLA is committed (e.g., "within 1 working day"), include in copy.

### Files to change

- `src/app/contact/page.tsx`

---

## TICKET-17 — Add 404 page improvements (helpful links)

**Priority:** P3
**Estimated time:** 1 hour
**Dependencies:** none

### Description

Improve `app/not-found.tsx` with helpful CTAs.

### Acceptance criteria

- [ ] 404 page shows: "Page not found" headline, sub-head explaining the page may have moved, search box (links to `/search` or just internal-link to main hubs), 6 popular page links (homepage, /pricing, /board-select, /revision, /resources, /faqs), link to /contact.
- [ ] Sets `<title>` to "404 — Page not found — The English Hub".
- [ ] Sets `<meta name="robots" content="noindex">`.

### Files to change

- `src/app/not-found.tsx`

---

## TICKET-18 — Sitemap content audit (35 IGCSE Lang A texts)

**Priority:** P2
**Estimated time:** 0.5 day
**Dependencies:** none

### Description

The sitemap `src/app/sitemap.ts` lists 10 of the advertised 35 Pearson Edexcel IGCSE Lang A 4EA1 anthology texts (lines 991-1008). Either the other 25 don't exist, or they need adding to the sitemap.

### Acceptance criteria

- [ ] Audit `src/app/igcse/edexcel-lang/anthology/` directory; list which slugs have a `page.tsx`.
- [ ] If 25 are missing pages: either build stub pages (matching the `StubStudyGuide` pattern from prior sessions) or remove the "35 anthology texts" claim from `/igcse/edexcel-lang` page copy.
- [ ] If 25 are missing from sitemap: add them.
- [ ] Add a sitemap-completeness test in `src/__tests__/sitemap-completeness.test.ts` that asserts every `/igcse/edexcel-lang/anthology/<slug>` route has a sitemap entry.

### Files to change

- `src/app/sitemap.ts` (if entries missing)
- Possibly: 25 stub `page.tsx` files
- New: `src/__tests__/sitemap-completeness.test.ts`

---

## TICKET-19 — Add security headers (X-Content-Type-Options, X-Frame-Options)

**Priority:** P3
**Estimated time:** 30 minutes
**Dependencies:** none

### Description

`src/middleware.ts` builds a CSP with nonce. Confirm `X-Content-Type-Options: nosniff` and `X-Frame-Options: SAMEORIGIN` (or CSP `frame-ancestors`) are set.

### Acceptance criteria

- [ ] `X-Content-Type-Options: nosniff` set on every response.
- [ ] `X-Frame-Options: SAMEORIGIN` (or equivalent CSP `frame-ancestors 'self'`) set.
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` set.
- [ ] `Permissions-Policy` set restrictively (camera=(), microphone=(), geolocation=()).

### Files to change

- `src/middleware.ts` (or `next.config.js` `headers()`)

### Testing instructions

After deploy, run https://securityheaders.com — target grade A or A+.

---

## TICKET-20 — Add `BoardComparison` schema for the 6 comparison pages

**Priority:** P3
**Estimated time:** 0.5 day
**Dependencies:** TICKET-12

### Description

Each `/compare/[slug]` page should also emit a `Question` schema for the "Which one am I sitting?" question, so it can appear as a "People also ask" rich result.

### Acceptance criteria

- [ ] Each comparison page emits `Question` JSON-LD for its core question.
- [ ] Validate at https://validator.schema.org.

### Files to change

- `src/app/compare/[slug]/page.tsx`

---

## Task summary table

| #   | Title                                    | Priority | Time | Phase | Depends on   |
| --- | ---------------------------------------- | -------- | ---- | ----- | ------------ |
| 1   | Strip fabricated testimonials            | P0       | 4h   | Quick | —            |
| 2   | Verify GSC + Bing                        | P0       | 1h   | Quick | —            |
| 3   | Migrate Google Fonts                     | P1       | 1d   | Quick | —            |
| 4   | Wire FAQPageJsonLd                       | P1       | 1d   | Quick | —            |
| 5   | Rewrite 8 audience H1s                   | P1       | 1d   | Quick | TICKET-1     |
| 6   | EmailCaptureCard component               | P1       | 2d   | Quick | —            |
| 7   | Per-page metadata (50 leaves)            | P2       | 3d   | Quick | TICKET-5     |
| 8   | Article+LearningResource+HowTo schema    | P2       | 5d   | Quick | —            |
| 9   | Event taxonomy doc                       | P2       | 0.5d | Quick | —            |
| 10  | EmailCaptureCard integration on 30 pages | P2       | 1d   | Quick | TICKET-6     |
| 11  | Blog architecture + first post           | P1       | 5d   | Short | TICKET-8     |
| 12  | Comparison pages                         | P1       | 15d  | Short | TICKET-8     |
| 13  | Course schema on hubs                    | P2       | 1d   | Short | —            |
| 14  | First 10 PDF lead magnets                | P1       | 20d  | Short | TICKET-6, 10 |
| 15  | Set-text page enrichment (pilot + 24)    | P2       | 12d  | Med   | TICKET-8     |
| 16  | ContactPoint schema                      | P3       | 0.5h | Quick | —            |
| 17  | 404 page improvements                    | P3       | 1h   | Quick | —            |
| 18  | Sitemap content audit                    | P2       | 0.5d | Quick | —            |
| 19  | Security headers                         | P3       | 0.5h | Quick | —            |
| 20  | Question schema on comparison pages      | P3       | 0.5d | Short | TICKET-12    |

---

## How to pick up a ticket

```
# 1. Pick a P0 or P1 ticket from this backlog
# 2. Create a branch:
git checkout -b seo/ticket-<N>-<short-name>
# 3. Implement per the acceptance criteria
# 4. Run:
npm run typecheck
npm run build
# 5. Commit using conventional commits:
git commit -m "feat(seo): <title> [TICKET-<N>]"
# 6. Push, open PR, deploy
```

For batched work (e.g., wiring FAQPageJsonLd to 6 pages), one PR per ticket is fine.
