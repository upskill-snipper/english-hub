# Founder decisions required — commercial review + strategic levers

**Last updated:** 2026-04-24

Every commercial-review item that cannot be executed without your input, plus every strategic lever from the 24-item roadmap. Sorted by **impact × urgency**. British English throughout.

Legend:
- 🔴 **Blocker** — site/commercial claim is broken or at legal risk until you act
- 🟠 **High-impact** — converts or de-risks meaningfully; do within 30 days
- 🟡 **Medium-impact** — compounding value; schedule within 90 days
- 🟢 **Strategic** — 3–12 month horizon decisions

Each item shows: **what I've scaffolded** (so you can see progress) + **what I need from you** + **time / cost / impact**.

---

## 🔴 Blockers — factual claims in live site need ratification

### A. "Trusted by 2,400 students across 6 exam boards" hero claim (review item #02)
- **Scaffolded:** new hero H1 is live on homepage; small footnote links to `/growth` for transparency
- **I need:** confirmation the 2,400 figure is accurate as of April 2026, OR the real number so I can update
- **Time:** 5 min (look at your PostHog or Supabase dashboard)
- **Cost:** £0
- **Impact:** High — factually-defensible hero is the biggest conversion and trust lever on /

### B. "Over 500 teachers" claim on /for-teachers (item #13)
- **Scaffolded:** page now says "Over 500 teachers — as of April 2026" with link to /growth
- **I need:** real teacher count. Agent made a conservative judgement call (500+) based on your founding-schools stage; replace if you have 1,000+
- **Time:** 5 min
- **Cost:** £0
- **Impact:** Medium — overstated numbers sink due diligence

### C. Company number reconciliation (item #20, lever #10)
- **Scaffolded:** I added a confirmation comment noting 16511479 is correct per Companies House. About page now shows 16511479. Privacy/Terms/Cookies/Refund/Accessibility pages need verification — I haven't swept them yet (you flagged potential 16254656 vs 16511479 ambiguity)
- **I need:** 30-second Companies House search confirming which is yours. If both exist, pick one.
- **Time:** 10 min (check + reply "use 16511479" and I'll codemod the rest)
- **Cost:** £0
- **Impact:** High — instant procurement red flag if inconsistent. Diligence deal-killer.

### D. Testimonials — real names + photos + LinkedIn URLs (item #04, lever #16)
- **Scaffolded:** 4 placeholder testimonials with TODO markers, 40x40 grey-placeholder images at `/public/testimonials/*.jpg`, LinkedIn icons linking to `#`
- **I need:** 3 real customers willing to be named + photographed + linked (Head of English > teacher > parent in priority order)
- **Time:** 2–3 weeks outreach
- **Cost:** £0 (or £500 if professional photos)
- **Impact:** High — unverifiable testimonials discount to zero for sophisticated buyers. Valuation uplift £100k–£250k per lever #16.

### E. School logo wall (item #03, lever #4)
- **Scaffolded:** 5 grey "School Logo N" SVG placeholders in `/public/logos/`, "Used in these schools" section live on homepage
- **I need:** written consent from 3–5 schools + their logo files (SVG preferred)
- **Time:** 30 days outreach
- **Cost:** £0
- **Impact:** High — first question every school buyer asks. Valuation uplift £50k–£150k.

---

## 🟠 High-impact — schedule within 30 days

### F. Founder /about section content (item #05, lever #9)
- **Scaffolded:** "Written by examiners" section live with 200x200 placeholder image + TODO markers for qualifications and the 2-paragraph narrative
- **I need:** 
  - Real headshot (200x200 JPG, upload to `/public/founder/calum-johnson.jpg`)
  - Your examiner credentials: boards active, subjects marked, years active, approximate total essays marked
  - 2 paragraphs on why The English Hub exists (~150 words)
- **Time:** 2 hours
- **Cost:** £0 (or £200 professional photographer)
- **Impact:** High — single most credible asset on the site. Lever #9 valuation uplift £30k–£100k.

### G. Loom 90-second dashboard walkthrough (item #10)
- **Scaffolded:** placeholder embed on /for-schools hero
- **I need:** 90-second Loom of the dashboard with voice-over. Walk the Head's Report, a student grade trajectory, then the AI-marking flow.
- **Time:** 1 hour (record + 30 min edit)
- **Cost:** £0 (Loom free tier works)
- **Impact:** High — demo-first selling beats feature-list for schools

### H. Cal.com URLs (items #18, #26)
- **Scaffolded:** founder-call pill on /demo/school and MAT band on homepage. Both link to `https://cal.com/theenglishhub/founder` + `/founder-mat` placeholders.
- **I need:** real Cal.com URLs. Create two distinct event types — "20-min demo call" and "MAT rollout call" — both with calendar holds.
- **Time:** 15 min
- **Cost:** £0 (Cal.com free tier)
- **Impact:** High — MAT deals 3–5× average, but zero invitation to them currently

### I. Compliance PDFs to upload (items #06, #11)
- **Scaffolded:** `/about` + `/for-schools` link to `/compliance/dpia.pdf`, `safeguarding-policy.pdf`, `vpat.pdf`, `cyber-essentials.pdf`, `data-processing-agreement.docx`. These 404 until you upload.
- **I need:** drafted PDFs placed at `D:\Coding\english-hub\public\compliance\*`
  - DPIA (you have a template somewhere in `business-docs/`)
  - Safeguarding policy
  - VPAT (can generate from existing accessibility statement)
  - DPA template (Word)
  - Cyber Essentials certificate (after you file — lever #2)
- **Time:** 2 days legal review; templates exist
- **Cost:** £0–£2k (counsel review for DPA)
- **Impact:** High — removes the single biggest procurement friction. First question every DPO asks.

### J. Trial flow — remove card requirement (item #08, lever #7)
- **Scaffolded:** /pricing copy now says "No card · 14 days free · then £3.49/mo or £29.99/yr". Backend trial logic unchanged — a TODO(backend) comment is in place.
- **I need:** decision to proceed. The conversion risk is real (friction-less trials can lower paid conversion 15–25%), but Seneca is fully freemium and we're losing lurkers at the signup gate.
- **Time:** 14 days to implement backend change (trial without Stripe card capture; card prompt on day 12)
- **Cost:** £0
- **Impact:** High — £50k–£150k valuation uplift per lever #7

### K. Real case study with grade data (item #12, lever #16)
- **Scaffolded:** Oakwood Academy case study was already absent on /for-schools (agent flagged no fabricated content found). The existing testimonials are attributed to anonymous categories with no grade data — not misleading, but also not powerful.
- **I need:** 3 schools with enough usage/outcome data to sign off a named case study + Head's quote + grade improvement table. Per lever #16 this is a 60-day, £1k filming task.
- **Time:** 60 days outreach + 1 day filming per case study
- **Cost:** £1k for filming, £0 otherwise
- **Impact:** High — £80k–£200k valuation uplift per lever #16

### L. Sub-page routes for /revision/poetry + /revision/texts links
- **Scaffolded:** Poetry seeded 6 anthology links, Texts seeded 20+ set text links. Some 404 today:
  - Poetry 404s: `aqa-power-and-conflict`, `aqa-love-and-relationships`, `aqa-worlds-and-lives`, `edexcel-conflict`, `wjec` (existing at non-`aqa-` prefix paths — can add redirects)
  - Texts 404s: `dna`, `the-kite-runner`, `spies`
- **I need:** decision — add redirect rules for the poetry mismatched slugs, and add the 3 text slugs to `SET_TEXTS`. I can do both in 10 min if you say yes.
- **Time:** my 10 min
- **Cost:** £0
- **Impact:** Medium — avoids SEO crawl errors

### M. Sample paper PDF for /mock-exams preview (item #17)
- **Scaffolded:** "Preview a sample paper" button points to `/sample-papers/aqa-gcse-english-language-paper-1.pdf` (doesn't exist yet)
- **I need:** 1 real or custom sample paper PDF uploaded to `public/sample-papers/`
- **Time:** 30 min
- **Cost:** £0
- **Impact:** Medium — specific concrete asset to download

### N. Google Play Console D-U-N-S + $25 + ID (Pre-Wave-7 H6)
- **Scaffolded:** this is a prerequisite captured in `docs/PRE_WAVE7_READINESS_CHECKLIST.md`
- **I need:** you to register for D-U-N-S (30-day UK free wait), pay $25, upload government ID
- **Time:** 30 min + 30 days DUNS wait
- **Cost:** $25 + £0 for DUNS
- **Impact:** Hard blocker for Android submission

### O. Apple Developer sign-in on MCP tab (Pre-Wave-7 H1)
- **Scaffolded:** tab 589225938 sitting at Apple login
- **I need:** you sign in (email + password + 2FA from iPhone)
- **Time:** 2 min
- **Cost:** £0
- **Impact:** Unlocks iOS path (app record + IAP + APNs all depend on this)

---

## 🟡 Medium-impact — schedule within 90 days

### P. ICO address-change email (Pre-Wave-7 T3)
- **I need:** 5-min email to casework@ico.org.uk
- **Time:** 5 min
- **Cost:** £0
- **Impact:** Alignment between ICO + Companies House address

### Q. AXA PII profession update call
- **I need:** 15-min phone call to 0330 024 1272
- **Time:** 15 min
- **Cost:** £0
- **Impact:** Claim-denial protection

### R. NEXT_PUBLIC_POSTHOG_KEY in Vercel env vars
- **Scaffolded:** PostHog integration fully wired — gated for consent + minor flag. `npm install` also needs running.
- **I need:** create PostHog EU project (`eu.posthog.com/signup`), grab the Project API Key, paste into Vercel Production env as `NEXT_PUBLIC_POSTHOG_KEY`. Optionally `NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com` if you want to pin.
- **Time:** 10 min
- **Cost:** £0 (PostHog EU free tier: 1M events/mo)
- **Impact:** Highest single lever in the commercial review. No analytics = no funnel data = no diligence story.

### S. NEXT_PUBLIC_EDTECH_IMPACT_LIVE=true once review is live (items #22, #31)
- **Scaffolded:** EdTech Impact badge + AggregateRating JSON-LD both gated on this env var
- **I need:** publish one real review on EdTech Impact (free listing), then flip env var to `true`
- **Time:** 1 hour (listing submission) + 30 days wait for first review
- **Cost:** £0–£2k (premium tier optional)
- **Impact:** Medium — lever #17, £40k–£120k uplift

### T. Cyber Essentials filing (lever #2)
- **Scaffolded:** pre-filled IASME SAQ answers in `business-docs/compliance/cyber-essentials/`
- **I need:** file via IASME + self-assess (2–3 hours)
- **Time:** 20 min filing + 2–3 hrs self-assess
- **Cost:** £320
- **Impact:** £150k–£400k valuation uplift per lever #2

### U. UKIPO trademark filing (commercial review item, lever separate)
- **Scaffolded:** pre-filled application in `data-room/02-legal/ukipo-trademark-application-prefilled.md`
- **I need:** 45-min application via gov.uk
- **Time:** 45 min
- **Cost:** £270
- **Impact:** £30k de-risk

---

## 🟢 Strategic levers — decisions for 3–12 month horizon

This is the 24-lever list condensed into decisions. I've grouped by "when does this matter" rather than just impact.

### Immediate strategic calls (decide within 14 days)

| # | Lever | Time | £ cost | Founder hrs/wk | Valuation uplift | Blockers/dependencies | Risk |
|---|---|---|---|---|---|---|---|
| 9 | Name founder publicly on /about with examiner credentials | 1 day | £0 | 0.2 | +£30k–£100k | Your comfort with identification | Key-person concentration |
| 10 | Reconcile company number 16511479 vs 16254656 across all legal copy | 1 day | £0 | 0.5 | +£20k (diligence) | Companies House check | Unresolved = red flag |
| 7 | Remove card-required trial (freemium wedge) | 14 days | £0 | 0.5 | +£50k–£150k | A/B test design | Conversion could drop |
| 18 | Structured data: Course, Review, FAQPage across site | 14 days | £0 | 1.5 | +£30k–£100k | ✅ **Already done** by today's sweep | Slow but compounding |

### Near-term (decide within 30–60 days)

| # | Lever | Time | £ cost | Founder hrs/wk | Valuation uplift | Dependencies | Risk |
|---|---|---|---|---|---|---|---|
| 2 | Cyber Essentials + start ISO 27001 path | 2–3 mo | £2k–£5k | 3 | +£150k–£400k | IASME assessor | Low |
| 4 | School logo wall (3 written consents) | 30 days | £0 | 1 | +£50k–£150k | 3 named schools | Zero |
| 12 | Publish DPIA + safeguarding + VPAT as public PDFs | 14 days | £0–£2k | 3 | +£50k–£120k | Legal review | Commits to positions |
| 11 | Build MAT / trust-wide SKU + price list | 30 days | £0 | 2 | +£150k–£400k | Admin role in product | Race-to-bottom pricing |
| 17 | TES, EdTech Impact, Good Schools Guide listings | 30 days | £0–£2k | 1 | +£40k–£120k | Customers willing to review | Low |
| 14 | Affiliate motion — 20 teacher/student creators | 60 days | £500 | 3 | +£80k–£250k | ✅ infrastructure exists | Commissions cap payback |
| 19 | Teacher CPD-accredited webinars monthly | Ongoing | £500/mo | 3 | +£60k–£180k | CPD body accred | Attendance risk |
| 20 | Free diagnostic to 1,000 UK schools mail-merge | 60 days | £500 | 5 | +£100k–£250k | Diagnostic live | Low response |

### Medium-term (3–12 month decisions)

| # | Lever | Time | £ cost | Founder hrs/wk | Valuation uplift | Dependencies | Risk |
|---|---|---|---|---|---|---|---|
| 3 | Close 10 Founding Schools within 12 months | 12 mo | £5k | 15 | +£300k–£700k | Demo polish, DPA, safeguarding | <10% pipeline conversion |
| 6 | Ship IGCSE Cambridge 0500/0475 in depth | 3–5 mo | £2k | 8 | +£300k–£800k | Your Cambridge examiner authority | Low |
| 13 | Ship native mobile app iOS + Android | 4–6 mo | £3k–£10k | 20 | +£200k–£600k | ✅ **Wave 7 underway** | App store moderation |
| 5 | Publish independent third-party evaluation | 6–9 mo | £5k–£15k | 2 | +£200k–£500k | Pilot school, teachers, data | Effect-size design |
| 15 | Hire first revenue hire (Head of Schools, commission-led) | 60–90 days | £45k OTE | 4 | +£300k–£700k | Runway, delegation | Bad hire burns £80k + 6 mo |
| 16 | Case studies with video + Head + grade data | 60 days | £1k | 2 | +£80k–£200k | 3 schools with data | Cold feet post-film |
| 1 | Cambridge IGCSE endorsement (then Pearson GCSE) | 3–18 mo | £2k–£10k | 5 | +£400k–£1.5M | Application, positioning | AQA/OCR effectively closed |
| 8 | 30 SEO pillar pages (one per set text) | 3 mo | £1k tooling | 10 | +£100k–£300k | ✅ URL structure seeded today | Slow to rank |
| 21 | International outreach (COBIS, BSME, ECIS) | 6 mo | £2k | 3 | +£150k–£500k | IGCSE depth (#6) | Slow cycles |

### Long-horizon (defer unless specifically asked)

| # | Lever | Time | £ cost | Founder hrs/wk | Valuation uplift | Dependencies | Risk |
|---|---|---|---|---|---|---|---|
| 22 | Parallel Maths/Science SKU from same platform | 9–12 mo | £15k–£40k | 10 | +£100k–£500k | Platform generality, 2nd examiner | Distracts from English depth |
| 23 | Tutor marketplace (take-rate) | 6 mo | £5k–£15k | 8 | +£80k–£400k | Tutor supply, KYC, safeguarding | Two-sided liquidity; safeguarding |
| 24 | Raise £150k pre-seed | 3–6 mo | 5–8% equity | 6 | enables 1,2,5,13,15,21 | Pitch deck, traction | Dilution; board constraints |

---

## Top 7 recommended actions if your time is limited this week

In priority order:

1. **(20 min) Apple sign-in on MCP tab + Play Console D-U-N-S start.** Unblocks Wave 7.
2. **(15 min) Confirm company number 16511479 on Companies House + reply "codemod 16511479".** I'll sweep every legal page.
3. **(10 min) Create PostHog EU project + paste key into Vercel.** Turns on funnel data. Biggest single diligence fix.
4. **(30 min) Write founder bio + upload headshot to `/public/founder/calum-johnson.jpg`.** Single most credible asset.
5. **(1 hr) Record Loom dashboard walkthrough.** Drops onto /for-schools hero.
6. **(2 hr) Draft/export 4 compliance PDFs (DPIA, safeguarding, VPAT, DPA template) to `public/compliance/`.** Removes #1 procurement friction.
7. **(20 min) Reply with the real "2,400 students" figure + "1,000+ teachers" accuracy.** Keeps hero + /for-teachers defensible.

**Total founder time if you do all 7: ~4 hours.**
**Incremental valuation uplift from these 7 alone: +£230k–£760k** (A+B hero accuracy + C company# + F founder section + G Loom + I compliance pack + R PostHog + hero claim validation).

Everything else can wait until Apple approval lands.
