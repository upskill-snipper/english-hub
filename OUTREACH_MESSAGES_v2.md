# The English Hub — Outreach Messages v2 (Ship-Ready)

**Last updated:** 2026-04-24
**Replaces:** `outreach_messages.py`, `english_hub_outreach.py`, and the `outreach_batch_*.py` files — those were drafted in March 2026 against pricing and trial terms that have since changed.
**Use for:** cold email to UK schools, UK teachers, UK English teacher creators, UK student micro-influencers, UK parent bloggers/podcasters, international British curriculum schools, UK tutoring companies.

---

## 0. Why this rewrite exists — old vs new facts

The March 2026 playbooks and batch scripts assumed pricing and trial terms that are **no longer accurate**. Any message that quotes the old figures will either under-promise or look like it came from a cold list. Refresh before sending.

| Field               | OLD (in existing drafts)                     | NEW (live on site today)                                                                                                                                   |
| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Student monthly     | £9.99                                        | **£3.49**                                                                                                                                                  |
| Student annual      | £79.99                                       | **£29.99** (or **£20** with code `2026ENGLISH`)                                                                                                            |
| Teacher monthly     | not in old copy                              | **£7.99**                                                                                                                                                  |
| Teacher annual      | not in old copy                              | **£67.99**                                                                                                                                                 |
| Free trial          | 30 days, no card                             | **7 days, card required**                                                                                                                                  |
| Free-no-card option | none                                         | **3 free uses of most premium features** before paywall                                                                                                    |
| School pricing      | Class £199 / Dept £599 / Whole School £1,499 | **Founding Schools Programme: £3k–£7k/yr, first 10 schools only, rates locked 2–3 years**                                                                  |
| Affiliate cookie    | 30 or 90 days (docs disagreed)               | **30 days** (authoritative, per /creators)                                                                                                                 |
| Hero line           | "Your AI English tutor. £9.99/month."        | **"Start your anthology."** (the "join thousands of students raising their grade" follow-on is **WITHDRAWN 2026-04-25** — number not currently verifiable) |
| Social proof        | "none yet"                                   | **WITHDRAWN — pupil count and rating not currently verifiable; do not quote in any outreach**                                                              |

**Do not quote the old figures.** The improved templates below all use live numbers.

---

## 1. The facts sender identity + product

Before the first send, lock these. Each template references the bits in bold — swap placeholders once, save as the canonical version in your sending tool.

**Company:** Upskill Energy Limited · Company number 16511479 · ICO ZC016690 · Registered in England & Wales
**Product URL:** https://theenglishhub.app
**Founder angle (press-verified):** built by a serving UK secondary English teacher. AI feedback is trained on real examiner mark schemes, not generic writing heuristics.
**Exam boards covered:** AQA, Edexcel, OCR, WJEC, Edexcel IGCSE, Cambridge IGCSE (0500 and 0990)

**Feature shortlist (pick 3–4 per message — don't list them all):**

- 470+ structured lessons aligned to the specification
- 130+ mock papers graded against real mark schemes
- AI essay feedback with AO (Assessment Objective) breakdown
- Annotated set texts + model answers
- Flashcards and revision games
- Grade 1–9 tracking and prediction per student
- Teacher tools: AI lesson plan, worksheet and presentation generator, homework auto-marking
- School tools: department analytics dashboard with year-group and class-level visibility, Ofsted-ready reports, bulk Excel onboarding

**Social proof to reference:** teacher testimonials from UK secondary schools in Birmingham, Kent, Manchester, and Leeds (verify each is publishable before quoting). **Pupil counts and ratings withdrawn** as of 2026-04-25 — not currently verifiable, do not quote in any outreach.

**Founding Schools Programme (for SLT/MAT outreach only):** £3,000–£7,000/yr depending on department size · first 10 schools only · rates locked for 2–3 years post-launch · strategic partnership terms with shared roadmap input.

**Affiliate / Creator programme (for creator outreach only):** 20% recurring · 30-day cookie · paid on the 1st of each month via PayPal or bank transfer · custom discount codes · applications reviewed within 48 hours at /creators.

**Sender addresses (confirm which is monitored — see §9 ship-today checklist):**

- `hello@theenglishhub.app` — suggested for school and teacher outreach
- `partnerships@theenglishhub.app` — suggested for creator outreach
- `press@theenglishhub.app` — live, for journalists only
- `info@upskillenergy.com` — live footer contact, falls back to founder

---

## 2. Social media account status (as of 2026-04-24)

> Verified by: (a) live site — no social links in header, footer, or body on `/`, `/for-schools`, or `/pricing`; (b) GTM tracker — all four platform set-up tasks marked "Not Started"; (c) footer component `src/components/layout/footer.tsx` has no social icons array at all.

| Platform                  | Planned handle      | Status        | Action before outreach goes live                                                                                                                                                                                            |
| ------------------------- | ------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TikTok**                | `@theenglishhubapp` | ❌ Not set up | Register handle, upload logo + hero still, set bio + linktree, pin 1 video (can be silent teaser). Needed because influencer replies will Google you and expect to see content.                                             |
| **Instagram**             | `@theenglishhubapp` | ❌ Not set up | Same as TikTok. Reserve handle today regardless — squatters are fast. Minimum viable: 3 grid posts + link in bio to the trial.                                                                                              |
| **YouTube**               | `@theenglishhub`    | ❌ Not set up | Register channel, upload banner, write About, create 2 placeholder playlists (GCSE / IGCSE). Can launch without videos if /about page on-brand.                                                                             |
| **Twitter / X**           | unreserved          | ❌ Not set up | Low priority for student audience; **high priority for teacher audience** — teacher creators live on X (see #21 Ross McGill, #22 Tom Sherrington). Register `@theenglishhubapp`, post 3 tweets, follow 100 target teachers. |
| **LinkedIn company page** | not in GTM plan     | ❌ Not set up | **Add before school/MAT outreach.** SLT decision-makers will check LinkedIn. Takes 30 min: page, logo, About copy lifted from /press, founder listed as employee.                                                           |
| **Threads**               | not in GTM plan     | ❌ Not set up | Skip for v1. Can auto-mirror from Instagram later.                                                                                                                                                                          |
| **Facebook Page**         | not in GTM plan     | ❌ Not set up | Skip for student audience. **Add only if running parent-blogger sponsored posts** — parent audiences still click FB links.                                                                                                  |
| **Pinterest**             | not in GTM plan     | ❌ Not set up | Skip for v1. Worth revisiting when you have quote-graphic assets — studygram audience pins revision visuals heavily.                                                                                                        |

**What IS ready to ship conversations:**

- `theenglishhub.app` — production, trial working, pricing correct, creator application form live at `/creators`, press page live at `/press`, accessibility statement at `/accessibility`
- Contact email routes — `press@theenglishhub.app` confirmed live, `info@upskillenergy.com` confirmed live
- Trustpilot link rendered in footer (confirm listing is live before pointing people at it)

**What is NOT ready and will bite you in replies:**

- Every social handle above
- LinkedIn company page
- `affiliates@theenglishhub.co.uk` appears in the affiliate assets doc but the canonical domain is `.app` — pick one and stick with it
- No case-study PDF or one-pager to attach to school emails (the 4 testimonials on `/for-schools` are the extent of public social proof)
- No sender domain warmup — cold email from a brand-new `hello@theenglishhub.app` will land in spam. See §9.

---

## 3. Master templates

All templates use British English, short paragraphs, a single CTA, and a light footer. Every personalisation slot is in `[SQUARE BRACKETS]` — fill these per recipient; do not leave any bracket in a sent message. Subject lines in §4 are tested options per template.

### T1 — UK School, English Head of Department (volume cold outreach)

Use for: the 100 English HoDs from the `uk_english_subject_associations` and `uk_primary_school_networks` lists, plus HoDs scraped from secondary school websites.

**Body (~200 words):**

> Hi [FIRST NAME],
>
> I'm [SENDER], from The English Hub — a GCSE and IGCSE English revision platform built by a serving UK secondary English teacher. I'm writing because I'd like to offer [SCHOOL NAME]'s English department free use of our teacher and classroom tools for the rest of this academic year.
>
> We cover AQA, Edexcel, OCR, WJEC, and both Cambridge and Edexcel IGCSE. What tends to land with HoDs:
>
> - 470+ structured lessons and 130+ mocks mapped to the specification you actually teach
> - AI essay feedback that marks against the real AO mark scheme and gives pupils a grade 1–9 prediction
> - An AI lesson-plan and worksheet generator — saves the Sunday-night build
> - A dashboard showing which questions your Year 11s are getting wrong, at class level
>
> Teachers in Birmingham, Kent, Manchester, and Leeds are quoted on [https://theenglishhub.app/for-schools](https://theenglishhub.app/for-schools). We're early in our journey and we say so plainly.
>
> Would it be useful if I set up a free teacher account for you this week? No card, no obligation — if it isn't an improvement on what you're already using, bin it.
>
> Best wishes,
> [SENDER NAME]
> The English Hub · Upskill Energy Limited · Company 16511479

---

### T2 — UK School, SLT / Deputy Head / MAT central team (Founding Schools angle)

Use for: the `uk_multi_academy_trusts`, `uk_school_leadership_influencers`, and larger secondary schools that warrant a whole-department conversation.

**Body (~230 words):**

> Hi [FIRST NAME],
>
> I'm reaching out about something short-lived. The English Hub is running a Founding Schools Programme — 10 schools in total, locked rates for 2–3 years, and a direct line into our roadmap. We have [X] places left and I'd like to put [SCHOOL / TRUST NAME] forward.
>
> Why it may be worth a 20-minute conversation:
>
> - Whole-department pricing is £3,000–£7,000/yr depending on size — significantly below what you'll pay post-launch, and fixed for the partnership period
> - The product is built by a serving UK secondary English teacher, so the pedagogy isn't grafted on; AI feedback is trained on real AQA / Edexcel / OCR / WJEC mark schemes
> - You get department-level analytics down to the question, Ofsted-ready progress reports, and bulk Excel onboarding so IT don't have to lift a finger
> - As a Founding School, the English team can shape what we build next — we're not looking for logo-beta partners, we're looking for four or five departments who'll tell us what's missing
>
> A short call would tell you whether this is a fit. I can do 20 minutes any time this week or next — would Thursday or Friday work better?
>
> Best,
> [SENDER NAME]
> Founder, The English Hub
> [https://theenglishhub.app/for-schools](https://theenglishhub.app/for-schools) · [CALENDLY OR MEETING LINK]

---

### T3 — UK English teacher creators (affiliate + free account)

Use for: teacher creators with an audience — e.g. Mr Salles, Stacey Reay, Sarah Teaches GCSE English, Miss K English, First Rate Tutors, the `uk_ks3_english_teacher_creators` and `uk_teacher_canva_creators` lists. Tone: peer-to-peer, not vendor-to-influencer.

**Body (~210 words):**

> Hi [FIRST NAME],
>
> I'm [SENDER] — I've been watching [SPECIFIC VIDEO / POST / RESOURCE] and it's exactly the pitch-and-tone I wish I'd had when I was revising. [ONE SPECIFIC CALLOUT, e.g. "the way you unpack context in 90 seconds for An Inspector Calls is close to how we teach it on the app."]
>
> I'm writing because you're one of the teachers we'd most like to have as a Creator Partner on The English Hub. The shape:
>
> - A free teacher account — £7.99/mo plan, yours permanently, no strings
> - 20% recurring commission on any student who signs up through your link, paid on the 1st of every month
> - A custom discount code you can give your audience (pupils pay as little as £20/yr with a code — meaningful for families)
> - 30-day cookie, so you're credited even when someone clicks, thinks about it for a week, and buys later
>
> The product itself: 470+ lessons, 130+ mocks, AI essay feedback against the real AO mark schemes, Grade 1–9 prediction. All exam boards.
>
> Application form is at [https://theenglishhub.app/creators](https://theenglishhub.app/creators) — takes two minutes, we review within 48 hours. Happy to answer anything first.
>
> [SENDER NAME]
> The English Hub

---

### T4 — UK student micro-influencers (TikTok / Instagram DM)

Use for: account holders on `uk_student_study_influencers`, "StudyTok" creators, GCSE revision nano/micro accounts. Tone: student-to-student, not teacher-to-student.

**Short version (~90 words, DM-friendly):**

> Hey [FIRST NAME] — [ONE LINE ABOUT A SPECIFIC POST, not generic praise]. I'm from The English Hub, a GCSE / IGCSE English revision app. We'd love to set you up with a free account + 20% recurring on anyone who signs up through your code. Students pay £3.49/mo or £20/yr with a code, so it's actually affordable for your audience. Creator form is at theenglishhub.app/creators — 2 mins, 48-hour review. If you'd rather just try the free account first no strings, reply "free" and I'll send it.

**Long version (~150 words, for bio-link or email):**

> Hi [FIRST NAME],
>
> Loved [SPECIFIC CONTENT] — the [SPECIFIC DETAIL] bit especially. I'm [SENDER] from The English Hub — a GCSE and IGCSE English revision app built by a secondary English teacher.
>
> Our Creator Partner programme would fit your audience pretty neatly:
>
> - Free account to try it (normally £3.49/mo student / £7.99/mo teacher)
> - 20% recurring commission on anyone who joins via your link, paid monthly
> - Custom code — with a code students pay as little as £20/yr, so it's something your followers will actually use
> - 30-day cookie window
>
> Exam boards: AQA, Edexcel, OCR, WJEC, Cambridge + Edexcel IGCSE. We're early in our journey and we say so plainly.
>
> Apply at [https://theenglishhub.app/creators](https://theenglishhub.app/creators) or just reply here and I'll send the free account over.
>
> [SENDER NAME]

---

### T5 — UK parent bloggers / podcasters / parent influencers

Use for: the `uk_mum_education_bloggers`, `uk_dad_bloggers`, `uk_parent_influencers_education` lists, and the parent podcasters (Teenagers Untangled, Actually Mummy, etc.).

**Body (~200 words):**

> Hi [FIRST NAME],
>
> I came across your [SPECIFIC POST / EPISODE / COLUMN] — it landed because it's the honest version of a conversation we hear all the time: parents who want to support their teenager through GCSE English and don't know where to plug in.
>
> I'm [SENDER] from The English Hub, a GCSE and IGCSE English revision platform built by a serving secondary English teacher. The thing parents tell us they value most isn't another 2-hour tutor on a Tuesday night — it's a single place their child can actually do the work: 470+ structured lessons, 130+ mocks, AI essay feedback that marks against the real AQA / Edexcel / OCR / WJEC mark schemes, and a grade prediction their child can see move over time.
>
> Pricing: £3.49/mo or £29.99/yr (£20/yr with a code). 7-day free trial.
>
> I'd love to set you up with a free family account first, genuinely no commitment. If it's something you'd want to mention to your audience, we also run a Creator Partner programme — 20% recurring with a 30-day cookie and a custom code.
>
> Reply "yes" and I'll send the access link within the hour.
>
> [SENDER NAME]
> The English Hub

---

### T6 — International British curriculum schools (GCC + Africa + Asia)

Use for: `MENA British Curriculum Schools`, `GCC Schools B2B`, `ANZ British & International Schools`, `SE Asia British Curriculum Schools`, `India British Curriculum Schools`, `African British Curriculum Schools`, `Caribbean & LatAm British Schools`, and the associated school groups / chains.

**Body (~230 words):**

> Dear [TITLE + LAST NAME],
>
> I'm writing from The English Hub, a UK-built GCSE and IGCSE English revision platform. We support both Cambridge IGCSE (0500 and 0990) and Edexcel IGCSE alongside the UK boards, so a department running a mixed cohort — as most British curriculum schools in [COUNTRY / REGION] do — can put every Year 10 and 11 on a single system.
>
> A few things that may be relevant for [SCHOOL NAME]:
>
> - 470+ lessons and 130+ mocks, built by a serving UK secondary English teacher, aligned to the actual specification and mark scheme
> - AI essay feedback with AO breakdown in under a minute — useful where departments carry high marking loads across several cohorts
> - Department analytics so Heads of English can see, at class level, which AOs students are losing marks on
> - Works across both May/June and October/November IGCSE series
>
> We are running a Founding Schools Programme at the moment — 10 schools, locked rates for 2–3 years, direct input into our roadmap. Pricing is £3,000–£7,000 per year depending on department size, and several places remain.
>
> Would a short call in the week commencing [DATE] be useful? I can walk you through the platform in 15 minutes and leave you with a free teacher account either way.
>
> Kind regards,
> [SENDER NAME]
> The English Hub · Upskill Energy Limited, UK · [https://theenglishhub.app/for-schools](https://theenglishhub.app/for-schools)

---

### T7 — UK tutoring companies, tutor directories, home-ed platforms

Use for: the `uk_english_tutoring_companies`, `uk_private_tutor_directories`, `uk_home_education_online_schools`, `uk_gcse_revision_apps` lists. Angle: wholesale / integration / partner, not creator.

**Body (~200 words):**

> Hi [FIRST NAME],
>
> Short one — I run The English Hub, a GCSE and IGCSE English platform built by a UK secondary English teacher. All UK boards plus Cambridge and Edexcel IGCSE.
>
> There are three ways companies like [COMPANY NAME] typically work with us, and I'd like to know which, if any, fits:
>
> 1. **Tutor seats:** discounted teacher accounts (£7.99/mo retail) for your tutors so they can send pupils to lessons, set homework, and get AI-marked essay feedback back.
> 2. **Pupil licensing:** bulk pupil seats for the students you already serve — Founding Schools pricing for larger volumes, negotiated case by case.
> 3. **Referral partnership:** your tutors or your students join our Creator Partner programme (20% recurring, 30-day cookie, paid monthly) and recommend us where it fits, with a custom code that discounts the annual plan to £20.
>
> Which of those three is closest to how you're currently thinking about English resources? Happy to jump on a 15-minute call to dig into whichever one you pick.
>
> Best,
> [SENDER NAME]
> The English Hub · [https://theenglishhub.app](https://theenglishhub.app)

---

## 4. Subject lines — tested options per template

Pick one A and one B per template, send 50/50, measure open rate after 60 sends per variant.

| Template                             | Option A (value-led)                                      | Option B (curiosity-led)                                         |
| ------------------------------------ | --------------------------------------------------------- | ---------------------------------------------------------------- |
| T1 Schools HoD                       | Free teacher account for [SCHOOL NAME] English department | A question about how [SCHOOL NAME] is using AI essay feedback    |
| T2 SLT / MAT                         | Founding Schools Programme — [X] places left              | Two decisions the [TRUST NAME] English leads might want sight of |
| T3 Teacher creators                  | Free teacher account + 20% recurring — The English Hub    | Is your [PLATFORM] audience ready for this?                      |
| T4 Student creators (email fallback) | Free account — The English Hub                            | Quick one for your [PLATFORM] followers                          |
| T5 Parent bloggers                   | Something practical for parents of Year 10s and 11s       | What I'd want as a parent during GCSE English                    |
| T6 International schools             | IGCSE English revision — Founding Schools programme       | For [SCHOOL NAME]'s English department, 15 minutes               |
| T7 Tutoring / directories            | Three ways to work with The English Hub                   | Is [COMPANY NAME] already recommending an English app?           |

**Subject-line rules:** no emoji, no `RE:` tricks, no all-caps, keep under 60 characters so it isn't truncated on mobile.

---

## 5. Follow-up sequence

Never more than two follow-ups. The mention rule: if they **read** the email and didn't reply, the Day 7 follow-up is a different angle, not a restatement of Day 0.

### Day 3 follow-up — same thread, shorter, same ask

> Hi [FIRST NAME],
>
> Just floating this back to the top in case it slipped — offer still stands. The one-sentence version:
>
> [ONE LINE FROM THE ORIGINAL CTA — e.g. "Free teacher account for [SCHOOL NAME], no card, good until end of summer term."]
>
> Happy to send the access link today if useful.
>
> [SENDER NAME]

### Day 7 follow-up — drop the ask, just offer the free account

> Hi [FIRST NAME],
>
> Last one from me, promise. Forget the partnership / programme framing — I'd just like to set you up with a free [TEACHER / PARENT / CREATOR] account on The English Hub. No commitment, no obligation to post anything or promote anything. Your feedback as a [ROLE] would be more useful to us than another sign-up.
>
> Reply "yes" and I'll send the link within the hour.
>
> [SENDER NAME]

### Rules

1. **Never a third follow-up.** If there's no response to two, remove from sequence. Don't re-add for 90 days.
2. **Negative reply = remove immediately + thank them.** One-line reply, no recovery attempt.
3. **Positive reply = answer within one working day.** Every day past that halves the close rate.
4. **Track in Notion or the GTM tracker xlsx** — at minimum: contact name, date sent, variant, opened (if tracked), replied, outcome.

---

## 6. Per-category notes (what to watch for)

- **UK Primary School Networks, Primary Literacy Orgs, Phonics lists:** The product is **KS3 + GCSE + IGCSE**, not KS1/KS2. Do not send T1 to primary HoDs — it will bounce back. Only send to primary when they operate a through-school to Year 11 (some MATs, prep schools). Filter the primary-only rows out of the master list before sending.
- **DfE English Hubs (list entry #19):** Unrelated to us despite the name. Do not include in sends — reply rate is near zero and the name collision looks amateurish.
- **MAT central teams (50+ schools):** Always T2, never T1. The HoD angle dilutes the Founding Schools pitch.
- **Mr Bruff, Save My Exams, Seneca, Tutor2u, Cognito:** Do not use T3 cold. These are macro-tier — they get 20 of these a week. Only approach after you have (a) a social presence and (b) 2–3 mid-tier creators already posting. Warm intro preferred.
- **Student creators under 18:** The Creator Partner FAQ says applications under 18 are reviewed differently. Flag any under-18 creators to the founder before sending — there's a safeguarding angle and it should come from the founder, not a BD alias.
- **International schools (T6):** Send in the school's **working week** — Sunday–Thursday in GCC, not Mon–Fri. Tuesday 9am local time is the sweet spot. Set `send at recipient timezone` in your sending tool.
- **Parent podcasters:** T5 + an offer of a 30-minute founder interview for the podcast. The founder-is-a-serving-teacher angle plays unusually well on teen-parent podcasts.
- **Tutoring companies (T7):** Many will ghost if you lead with "tutor seats." Lead with option 3 (referral) — it requires no integration work from them and opens the others in reply.

---

## 7. What not to do

- **Don't send from a domain you set up this week.** New sender domains go to spam. Either use an already-warmed address (`info@upskillenergy.com` has history) or spend 14 days warming `hello@theenglishhub.app` through Instantly / Lemwarm before the first outreach send.
- **Don't quote the old £9.99 / 30-day trial numbers.** It will look like you didn't check your own site.
- **Don't link to social channels that don't exist yet.** Replies will 404. Link the site and the creator form only until social accounts are live.
- **Don't promise a free 30-day trial in email.** The live trial is 7 days with card. The free alternative is the 3-uses-of-premium-features path, or a comped account provisioned manually for partners.
- **Don't attach a PDF one-pager.** There isn't one yet — writing it is a separate task. Link to the relevant page (`/for-schools`, `/for-teachers`, `/creators`) instead.
- **Don't send more than 30 cold emails per sending inbox per day** during week one. Ramp by 10/day to 80/day over three weeks.

---

## 8. Volume + sequencing for the first four weeks

| Week | Template(s)                                                                          | Volume                            | Channel              | Expected outcomes                                                |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------- | -------------------- | ---------------------------------------------------------------- |
| 1    | T3 (teacher creators — Wave 1 nano/micro) + T5 (parent bloggers — Wave 1 nano/micro) | 25 T3 + 15 T5 = 40 emails, 10 DMs | Email + Instagram DM | 6–8 free accounts claimed, 1–2 creators onboarded                |
| 2    | T1 (school HoDs — Wave 1)                                                            | 60 emails                         | Email                | 3–5 HoD calls booked, 1–2 free teacher accounts actively used    |
| 3    | T2 (SLT / MAT) + T6 (international)                                                  | 20 T2 + 20 T6 = 40 emails         | Email                | 2–3 discovery calls booked for Founding Schools                  |
| 4    | T4 (student creators — Wave 1) + T7 (tutoring)                                       | 30 T4 DMs + 15 T7 emails          | DM + email           | 3–5 student creators onboarded, 1 tutoring partnership in motion |

Total week 1–4: **~180 emails, ~40 DMs, ~10 serious conversations, ~3 Founding School discussions.** That's the ceiling; under-resourced outreach will hit half of that.

---

## 9. Ship-today checklist (do these in order before the first send)

Rough order of operations — a half-day of work if you move.

**Sender infrastructure**

- [ ] Confirm SPF, DKIM, DMARC on `theenglishhub.app` — required for cold email to land in inbox
- [ ] Create `hello@theenglishhub.app` and `partnerships@theenglishhub.app` mailboxes, auto-forward to a monitored inbox
- [ ] Decide: is the creator email `affiliates@theenglishhub.co.uk` (as in the affiliate assets doc) or `@theenglishhub.app`? Canonicalise; update `AFFILIATE_MARKETING_ASSETS.md` to match
- [ ] Start 14-day warmup on both new addresses (Instantly, Lemwarm, Warmy — any of them)
- [ ] If not waiting 14 days, send week 1 from `info@upskillenergy.com` instead — it has sending history

**Brand presence replies can check**

- [ ] **Reserve handles today** on TikTok, Instagram, YouTube, X, Threads, LinkedIn — even unpublished. Squatters are the immediate risk
- [ ] Stand up a LinkedIn company page (30 min) — SLT recipients will check this before replying
- [ ] Upload a logo + hero image + bio + link to the site on Instagram and TikTok, minimum viable
- [ ] Confirm Trustpilot review link in the footer points to a live listing, not a 404

**Tracking**

- [ ] CRM of some form — Notion database using the `influencer-outreach-playbook.md` schema, or the existing `The_English_Hub_Master_GTM_Campaign_Tracker.xlsx`
- [ ] UTM conventions for every link in every message: `utm_source=[tier]&utm_medium=[email|dm]&utm_campaign=outreach_wave1&utm_content=[template_code]`
- [ ] Rewardful (or equivalent) confirmed live-mode and tracking — if a creator signs up and the link doesn't track, the whole programme loses credibility on day one

**Content ready to hand over on reply**

- [ ] 60-second walkthrough video (unlisted Loom or YouTube) — send on positive reply to all templates
- [ ] One-page school fact sheet (PDF) — for T1, T2, T6 positive replies
- [ ] Creator resource page is live at `/affiliates/resources` per the code — verify banner assets and swipe copy are actually there, not a stub

**Legal sense-check**

- [ ] Pricing, VAT disclosure, refund policy, cookie banner all match across email copy and site
- [ ] For anyone under 18 in the creator outreach — flag to founder, different process

**Cadence + monitoring**

- [ ] 30 sends per inbox per day maximum, week 1; ramp by 10/day weekly
- [ ] Mon–Thurs for UK sends, Sun–Wed for GCC; no Friday sends
- [ ] Weekly review every Friday: open rate, reply rate, onboarded count, revenue attributed via Rewardful

Once the boxes in "Sender infrastructure" and "Brand presence" are ticked, you're ready to send the first wave. Everything else can land in parallel.

---

## Appendix — stale files to retire

These files in `D:\Coding\english-hub\` contain March 2026 pricing and trial terms and should not be used for sends without a manual refresh. Move to an `/archive` folder or delete.

- `outreach_messages.py` (132 templates, all use £9.99 / 30-day trial)
- `outreach_all_missing.py`
- `outreach_batch_a.py`, `outreach_batch_b.py`, `outreach_batch_c.py`
- `english_hub_outreach.py` (creator-focused, same issues)
- `email-marketing-sequences.md` — verify before reusing; trial copy needs a 30→7 edit

The **influencer target list** in `influencer-outreach-playbook.md` §1 is still valid — the 55 accounts are fine. It's only the message templates A–E in §2 that need replacing with T1–T7 above.
