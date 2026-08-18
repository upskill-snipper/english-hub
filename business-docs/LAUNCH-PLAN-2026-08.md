# The English Hub - Official Launch Plan

Doc code: TEH-LP-2026-08. Owner: Calum Johnson. Drafted: 18 August 2026. Status: DRAFT FOR APPROVAL.
Canonical home: `D:\Coding\english-hub\business-docs\LAUNCH-PLAN-2026-08.md` (per TEHC-010, strategy lives in the repo; working instances and records live in the business root).

Related: `LAUNCH-READINESS-2026-08-18.md` (repo root - what was fixed and what remains), `GTM_Strategy_The_English_Hub.md`, `CONTENT_STRATEGY_PLAYBOOK.md`, business root `07 Schools & B2B\2026-08-18-Launch-BD-Plan.md`.

---

## 1. What we are launching

The English Hub (theenglishhub.app) moves from soft-open to official launch. The product as it stands, every claim verified against the codebase on 18 August 2026:

- English revision platform for KS3, GCSE and IGCSE, with A-Level practice surfaces and a separate IELTS track.
- 5 exam boards covered by name: AQA, Edexcel, OCR, WJEC Eduqas, Cambridge (14 specifications).
- 80+ structured courses (87 in the catalogue), 172+ mock exam papers (178 unique), 2,000+ revision flashcards (2,094), ~40 published blog guides, 850+ free revision and analysis pages.
- AI essay marking against exam-board assessment objectives, with feedback in plain English (fair-use limit of 10 marked essays per user per day - never say "unlimited").
- Teacher tools: AI lesson plans, worksheet builder, homework generator, PowerPoint and Word export, class analytics. School portal with classes, assignments, bulk import and department reporting.
- Parent dashboard with weekly Sunday email reports, weak-area alerts and progress tracking.
- Pricing (Early Access / Founding, live now): Student £3.99/mo or £29.99/yr (£20/yr with code 2026ENGLISH). Teacher £6.99/mo or £67.99/yr. Founding Schools £4,000/yr, first 10 schools. 7-day free trial, no card required to start.
- Trust posture: UK company (Upskill Energy Limited, Co. 16511479, ICO ZC016690), GDPR and Children's Code aligned, safeguarding page, AI-content labelling, no fabricated numbers anywhere on the site.

What is NOT ready to sell (do not market until closed): IELTS checkout (Stripe prices not yet created), parent-specific plan (scaffold only). See the readiness doc.

## 2. Timing recommendation

- **Warm-up: results week.** GCSE results land Thursday this week. Support-toned content only (what to do next, resits, moving into Year 11/13). No selling on results day itself - kind beats commercial, and it earns trust.
- **Official launch: Monday 1 September 2026** - back-to-school week, the natural "new school year, new revision habit" story, and the start of the strongest acquisition season (September to May).
- Fallback: any Monday in September works; the season matters more than the day. Calum picks the date; everything below is date-relative.

## 3. Message house

**Roof line:** Revision that marks your work like an examiner would - for every board, at pocket-money price.

**Pillar 1 - Exam-board exact.** You revise for YOUR board: AQA, Edexcel, OCR, Eduqas or Cambridge. Proof: board picker, 14 specifications, board-filtered mocks and set-text guides.

**Pillar 2 - Feedback, not just content.** Essays get AI feedback against the real assessment objectives, in plain English, in moments. Proof: the marking tool, sample marked essays for Macbeth, Jekyll and Hyde, An Inspector Calls, A Christmas Carol.

**Pillar 3 - Honest and safe.** A children's product that behaves like one: no card to try it, cancel anytime, no invented reviews, no grade promises, safeguarding first. Proof: the whole site.

**Never say:** any invented number, "guaranteed grades", "unlimited" for AI features, "revolutionary", "AI-powered" as a hook, "TEH". Follow brand voice: clear, confident, kind. One trailing emoji allowed on social; none in the newsletter.

## 4. Channel plan (production via the TEH Office crew, everything draft-first)

The crew's standing cadence already covers: daily TikTok, Instagram and X; YouTube Short Mon/Wed/Fri; YouTube outline Sunday; LinkedIn Tuesday; blog Thursday; newsletter Friday. Launch adds a coordinated arc on top; every piece lands in `03 Social Media\Queue\01 Drafts` headed "DRAFT FOR APPROVAL, not posted" and moves only by Calum's hand (POSTING-SOP).

**Launch week arc (Mon 1 Sep to Sun 7 Sep):**
- Mon - Announcement day. All platforms: "The English Hub is officially open" - what it is in one breath, the no-card trial, the £3.99 founding price. LinkedIn: founder letter (why I built this).
- Tue - Board-exact day. Carousel/short: "Your board is not the same as their board" - AQA vs Edexcel differences students lose marks on.
- Wed - Marking demo day. Screen-recorded YouTube Short: a real essay paragraph marked in front of you, AOs explained.
- Thu - Blog + teachers. Blog post: "How AI marking actually works" refresh push. LinkedIn/X for teachers: lesson-plan and worksheet tools, £6.99 early access.
- Fri - Newsletter + parents. Newsletter issue: launch letter. Facebook/Instagram for parents: weekly Sunday reports, no-card trial, what a tutor costs vs £3.99.
- Sat - Student proof day. Flashcards/mock library tour; study-with-me tone.
- Sun - Founding Schools day. LinkedIn: the first-10-schools founding offer, £4,000/yr against planned £8,000 standard, pilot from £2,500.

**Standing rules for the arc:** results-week content stays supportive; every product claim in every draft must be one of the verified facts in section 1; affiliate templates (now corrected to "no card needed to start") may be reissued to creators after launch day.

## 5. Business development motion (detail in the BD plan)

- **Founding Schools sprint (Sep-Oct):** fill the 10 founding slots. Warm cycle: pilot offer letter -> 20-minute call -> free pilot period -> founding agreement. All outreach drafted by the crew, sent by Calum.
- **Affiliates and creators:** reopen outreach from `02 Audience & Community` registers (age-check column enforced); 20% recurring commission, 30-day cookie, sign-up at /creators.
- **Gulf angle (existing landers /gcc-igcse-english, /qatar-igcse-english, /international-school-igcse-english):** British-curriculum international schools; Arabic surface exists (/ar) and the blog now emits proper hreflang for its 40 Arabic articles.
- **IELTS:** hold all IELTS marketing until Stripe prices exist and checkout is verified; then it becomes its own mini-launch (adult market, separate tone).

## 6. Measurement

- Funnel: PostHog `pricing_viewed` -> register -> trial -> subscription (events exist in code). GA4 for traffic mix; GSC for the de-index recovery (expect the 19 repaired blog posts and de-duplicated titles to re-index over 2-6 weeks).
- Weekly: Stripe MRR and trial-to-paid rate into `10 Growth & Analytics`; growth report by the crew each Monday.
- Launch KPIs (first 30 days, targets are working hypotheses, not public claims): 1,000 registered trials, 3-5% trial-to-paid, 2 founding schools in pilot, 10 active affiliates.

## 7. Risks and mitigations

- Anthropic/API cost spike on free-trial marking: fair-use caps are in place (10/day marking); watch spend weekly.
- A pricing-page mistake is now the biggest brand risk after the honesty pass: any future price change goes through `src/constants/pricing.ts` + the checklist in `LAUNCH-READINESS-2026-08-18.md` (Stripe envs + grandfather date + copy move together).
- Safeguarding remains the hard line: no DMs to students, no invented people or numbers, complaints and safeguarding reports answered first.
