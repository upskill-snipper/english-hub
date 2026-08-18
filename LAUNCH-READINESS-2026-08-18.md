# Launch Readiness Review - 18 August 2026

Full-site review, repair and launch-preparation pass. Everything below was verified against the codebase and, where stated, the live site. Companion docs: `business-docs/LAUNCH-PLAN-2026-08.md` (launch plan), business root `07 Schools & B2B\2026-08-18-Launch-BD-Plan.md` (BD plan), launch-week drafts in the social queue.

Verification state at time of writing: **production build green** (next build exit 0, 1,058 routes), **typecheck green**, **unit tests green** (1,701 passing).

---

## A. Critical defects found and FIXED

### Content-serving bugs

1. **19 of ~42 blog posts served empty shells in production.** Root cause: HTML `<!-- -->` comments are invalid MDX; because the blog renders dynamically, compilation failed per-request (never at build) and the error boundary swallowed the article. Verified live on `/blog/ao5-gcse-english-literature` before the fix. Fixed the 19 files; added `scripts/check-mdx-compile.mjs` to `prebuild` (bad MDX now fails the build); added an HTML-comment + raw-brace gate to the blog-generation cron so a bad auto-post can never reach a PR.
2. **40 phantom `/blog/<slug>.ar` URLs** (Arabic body inside English chrome) were generated, listed on the blog index (every card doubled), and sitemapped. Root cause: `listMdxSlugs()` treated `.ar.mdx` translations as standalone slugs. Fixed the listing; phantom URLs now 308-redirect to the real Arabic surface `/ar/blog/<slug>`; blog metadata is locale-aware with self-canonical + hreflang pairs; EN/AR articles cross-link; the 40 Arabic articles are now in the sitemap (previously invisible to crawlers).
3. **Unknown blog slugs returned indexable 200 shells.** A true 404 is not achievable on this dynamically-rendered route (Next 15 streams the shell and metadata with a committed 200 - verified against the built server), so unknown slugs now return an explicit `noindex,nofollow` with the not-found UI - the soft-404 form GSC treats as benign. Documented in the route for a post-launch middleware-manifest upgrade if ever needed.
4. **88 analysis pages double-branded their titles** ("X | The English Hub - The English Hub") because the records bake the brand in and the root template appends it again. Metadata now strips the baked suffix (OG keeps the branded form).
5. **3 mock-exam papers appeared twice** (duplicate ids via overlapping data sources) - aggregation now dedupes by id.
6. **Two route directories with no page** (`/resources/revision-notes/prayer-before-birth`, `.../the-story-of-an-hour`) - deleted (stubs from an interrupted session; the other six new revision-notes pages are complete and remain).
7. **186 broken internal links** found by the June crawl - repaired in this pass (conditional tiles for text-hub subpages that only exist for some texts, marking-sample links limited to the four texts that have samples, blog MDX phantom links repointed to real pages, AQA/OCR poetry links corrected, 18 redirect-chasing hrefs updated).

### Truth-in-marketing defects (the site now says only things that are true)

8. **The entire site anchored on "Prices increasing August 2026" - a deadline that passed 18 days ago with no price change.** Every dated urgency line, strikethrough anchor and terms clause (about 20 surfaces, EN/AR/ES) reframed to date-neutral "Founding-member pricing / planned standard pricing". The Terms section that legally committed to the August rollover now describes reality.
9. **Functional mismatch: since 1 Aug the Stripe webhook has RECORDED new subscriptions as standard-tier (£7.99-equivalent) while checkout CHARGED early-access prices.** The rollover constant now tracks reality (moved out, loudly documented that it must move only with the real Stripe price change); tests updated to derive from the constant, including a canary that fails when the clock crosses it.
10. **Stale prices**: £3.49 in the for-students FAQ (and its JSON-LD), in the sitewide WebSite JSON-LD offer, and in the refund worked example; teacher plan advertised "from £7.99/month" (that is the student standard anchor; teacher early access is £6.99). All corrected.
11. **Trial contradictions on the same pages** ("no card required" vs "card required"). Truth: account signup = 7-day full trial, NO card; a paid plan started at checkout = 7 free days WITH card on file, auto-converts unless cancelled. ~45 strings unified to that two-mechanic truth across EN/AR/ES, FAQs, Terms, refund policy, upgrade prompts, demo pages and all 15 affiliate creator templates.
12. **Fabricated statistics removed**: the three marketing infographic PNGs baked in invented numbers ("68% of students on track", "predicted +5-15% YoY improvement", "4.5 hrs saved per week") and an invented student testimonial ("Aanya") - images and component deleted. Dashboard mockups with invented pupil names now carry "Illustrative sample data" labels and the "Live" badge on sample metrics now reads "Sample". Six invented testimonials (dormant but shipped in the client bundle) deleted with their components.
13. **Grade promises softened** (children's-product hard rule): "Hit your top grade", "Help your child pass GCSE" (H1 + OG image), "push toward the grade you want", "moved up two grades", "students improve faster" and similar - all reworded to skill/feedback framing. No outcome guarantees remain.
14. **"Unlimited" AI claims corrected to real allowances**: marking is 10 essays/day, IELTS writing 10/day, IELTS speaking 30/day, lesson notes 5/hr, tests 10/hr, slides 20/hr. School-licence "unlimited students/teachers" seat claims kept (structurally true).
15. **Unverifiable claims softened per the code's own founder-TODO**: "Ofsted-aligned department reporting" → "whole-department progress reporting" (4 surfaces + resource blurbs); "generated in under 30 seconds" → "in moments"; "Response within 24 hours is guaranteed" (safeguarding complaints) → firm aim with absolute priority (matching the online-safety page).
16. **Wrong numbers replaced by verified ones**: "15+ courses" → "80+" (87 in the catalogue, counted by executing the real loader); "all 13 courses" → number-free phrasing; "295 flashcards" → "2,000+" (2,094 counted); board counts unified to 5 named boards ("Six boards" removed from root metadata); "172+ mock papers" verified TRUE (178 unique) and kept.
17. **Cross-brand leaks fixed**: two FAQ answers pointed school leads at info@upskillenergy.com - now support@theenglishhub.app (the operator entity remains correctly disclosed in legal/footer).
18. **Expired promo copy**: "Free access until August 2026" (FOUNDER school code, expires 31 Aug) - copy neutralised; the entitlement date itself is a founder decision (below).
19. **Wave-1 "£3,000 grandfathered schools" claims removed** everywhere (implies customers we cannot evidence; reinstate only if a real wave-1 school exists).

### Dead/misleading surfaces removed

20. **Mock affiliate portal deleted** - `/affiliate/**` (9 pages, singular) rendered seeded fake earnings data and was publicly routable next to the real `/affiliates/**` portal; one real-dashboard button that pointed into the mock tree now points at the real resources page. Dead `components/home` marketing kit (16 files), the dead school-comparison dictionary, and 4.3 MB of orphaned generated dictionaries also deleted. Typecheck, tests and build all green after removal.

## B. Verified working (no action needed)

- Sunday parent report emails: cron `0 16 * * 0` (Sunday 5pm UK) matches the "every Sunday evening" claim. 15 crons present and authenticated.
- Checkout: student/teacher plans resolve to env price IDs, with 7-day `trial_period_days`, promo flow intact; parent "plan" is dormant scaffolding (rendered nowhere - not a broken funnel).
- Spanish/Arabic dictionaries are ~100% co-complete (19,071/19,127 keys have es:) - the three-language toggle stays.
- No secrets tracked in git (only `.env.example`); `backend/node_modules` not tracked.
- robots.txt clean (Cloudflare AI-crawler block remains OFF); EdTech Impact rating properly env-gated OFF.
- Safeguarding pages, legal suite, AI-content labels, cookie consent: present and consistent with the corrected claims.

## C. CALUM-ONLY ACTIONS (blocking or near-blocking for launch)

1. **Pricing decision** - the founding/early-access story is now honest and undated, but decide deliberately: keep £3.99/£6.99 early access running, or execute the rollover. If rolling over: change the Stripe price env vars, `PRICE_INCREASE_DATE` in `src/lib/pricing/grandfather.ts`, and the copy in `src/constants/pricing.ts` on the same day.
2. **Backfill check** - any subscription created 1-18 Aug 2026 was recorded standard-tier while charged early-access. If any real signups exist in that window, run `/api/admin/pricing/backfill` (or correct rows manually) so recorded price = charged price.
3. **IELTS sellability** - the site markets IELTS (£39/mo, £249/yr) but `STRIPE_PRICE_IELTS_MONTHLY/ANNUAL` are unset, so the buy buttons error. Create the two Stripe prices and set the env vars in Vercel, or hold all IELTS marketing (the launch plan already holds it).
4. **FOUNDER promo code** - grants access only until 31 Aug 2026 (13 days). Extend the date in `/api/school/promo/validate` or retire the code before quoting it to any school.
5. **Rotate the GitHub token** - the git remote URL embeds a personal-access token in plain text in `.git/config`. Rotate it on GitHub and re-add the remote using credential-manager auth (no token in the URL).
6. **Deploy + verify** - commit is prepared locally; push to main deploys via Vercel. After deploy spot-check: `/blog/ao5-gcse-english-literature` (renders full article), `/blog/how-to-peel-a-paragraph.ar` (308 → `/ar/blog/...`), `/pricing` (no dated urgency), `/for-schools` (no infographic), `/affiliate` (404), sitemap.xml (no `.ar` phantoms, 40 `/ar/blog/` entries).
7. **Google Search Console** - after deploy, request indexing for the 19 repaired posts and submit the sitemap; expect the de-index backlog to clear over 2-6 weeks.
8. **Launch date** - recommendation Monday 1 September 2026 (launch plan section 2); approve the 8 queue drafts or edit them.
9. Optional: finish the two deleted stub poem pages (Prayer Before Birth, The Story of an Hour) - content exists for the sibling six.

## D. Known non-blockers (parked deliberately)

- The whole site renders dynamically (root layout reads the language header). Costly but stable; converting to static-per-locale is a post-launch project.
- CSP runs with 'unsafe-inline' (nonce plumbing is dead code pending a Next fix) - documented in middleware.
- Two entitlement sources of truth (Supabase profiles vs Prisma Subscription) - documented drift risk, post-launch consolidation.
- `/api/toolkit/generate-notes` bypasses the shared Anthropic client (raw fetch) - works, but should adopt the shared client's retry/timeout posture post-launch.
- Repo-root audit/strategy documents and `mobile/`, `backend/` subprojects remain in the repo (private); tidy post-launch.
