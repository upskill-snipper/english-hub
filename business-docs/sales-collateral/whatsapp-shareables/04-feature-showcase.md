# The English Hub
## Inside the platform — what your students, teachers, and parents actually see

<br>
<br>

**No mockups. No screenshots from a "design system showcase". Every image below is the live site at theenglishhub.app, captured fresh.**

<br>

theenglishhub.app · dpo@theenglishhub.app

---

> **Before exporting this file to PDF**, replace each `[SCREENSHOT: ...]` placeholder with a real screenshot from the live site at the URL noted underneath. See `screenshots/README.md` in this folder for the take-list.

---

<div style="page-break-after: always;"></div>

## 1. Student dashboard

What a Year 11 student sees the moment they log in. **Practice papers, recent essays with AI marking, AOs to focus on, mock exam scores, working-at grade.**

`[SCREENSHOT: 01-student-dashboard.png]`
*Source URL: https://theenglishhub.app/demo/student · Capture full page, light theme, 1200×900*

**What's on the page (left to right, top to bottom):**

- **Working-at grade banner** — surface-level snapshot, never the headline number; deliberately low-pressure
- **Today's recommended practice** — picked by the platform from the student's weak AOs (only visible if the student has opted in; off-by-default for under-18s under Children's Code Standard 8)
- **Recent essays panel** — each essay shows submitted date, AI-marked band, and "View feedback" button
- **AO weakness heat map** — which assessment objectives the student is consistently scoring below band on
- **Mock exam results** — historic paper-by-paper scores
- **No streaks, no leaderboards, no "you're falling behind" nudges** — these are off by default for any minor account (Standard 6 + Standard 8)

---

<div style="page-break-after: always;"></div>

## 2. AI essay marking — student view

The view a student sees within seconds of submitting a 600-word essay.

`[SCREENSHOT: 02-ai-marking-output.png]`
*Source URL: https://theenglishhub.app/demo/student/practice (submit a sample essay → wait ~60s → screenshot the feedback view)*

**What the AI returns:**

- **Suggested band** against the assessment objectives the mark scheme uses — labelled clearly as a *suggestion*, not a graded mark
- **Paragraph-level annotations** referencing the AOs by name ("AO2 — methods analysis: the metaphor in para 3 is identified but not analysed; what is the writer suggesting by linking X to Y?")
- **Strengths and "next steps"** for the rewrite
- **A "request human review" button** — every AI-marked essay can be escalated to a qualified English teacher; the human review is the final word
- **Bottom-of-page banner** restating that AI marking is **formative practice feedback, not a graded mark**

---

<div style="page-break-after: always;"></div>

## 3. Teacher dashboard — class view

What the Head of English sees logging into the teacher dashboard.

`[SCREENSHOT: 03-teacher-class-view.png]`
*Source URL: https://theenglishhub.app/demo/teacher · Capture top of page, light theme*

**What's on the page:**

- **All classes** at the school the teacher owns or contributes to
- **Per-class adoption rate** — how many students are active week-on-week
- **Marking queue** — essays waiting on optional teacher review (most go straight through AI; teacher review is by exception)
- **Weak-area heatmap** for the class — which AOs the cohort is collectively struggling on, so the next lesson can target the actual gap
- **Class-level mock exam analytics** — which paper, which question, which student, which AO

---

<div style="page-break-after: always;"></div>

## 4. Teacher essay-marking workflow

What happens when a teacher opens an individual student's essay.

`[SCREENSHOT: 04-teacher-essay-marking.png]`
*Source URL: https://theenglishhub.app/demo/teacher/essays · Open any sample essay → screenshot the side-by-side*

**The screen splits three ways:**

1. **Student essay** (left) — original text with AI annotations inline
2. **AI marking + AO breakdown** (middle) — the AI's suggested band and AO-by-AO commentary
3. **Teacher override panel** (right) — teacher can confirm, edit, or override the AI's marking; teacher's decision is the final word and is what appears on the student's record

**Teacher time per essay in this workflow: 1–3 minutes** (vs 15–20 minutes for a fresh manual mark) because the teacher is editing, not generating.

---

<div style="page-break-after: always;"></div>

## 5. School analytics — Head / Deputy Head view

The school-wide analytics dashboard your Deputy Head Academic gets.

`[SCREENSHOT: 05-school-analytics.png]`
*Source URL: https://theenglishhub.app/demo/school/analytics · Capture top of page, light theme*

**What's on the page:**

- **Department-wide adoption** — % of students active this week, this month, this term
- **Marking turnaround trend** — median time from submission to feedback, weekly
- **Cohort progress** — Y10, Y11, Y12, Y13 grade-band distribution over time
- **Mock exam comparison** — class-by-class results on the same paper, with statistical-significance flagging
- **EAL cohort track** — Gulf-Arabic L1 students surfaced as their own segment so progress is measured fairly

---

<div style="page-break-after: always;"></div>

## 6. School reports — what gets sent home

The weekly parent progress email the platform generates for every linked parent account.

`[SCREENSHOT: 06-parent-weekly-email.png]`
*Source URL: open `/dashboard/parent` in demo mode and trigger a sample weekly email render*

**What the parent sees:**

- **Their child's name + week date range**
- **Essays completed this week**
- **Time on platform**
- **Working-at grade** (with the "this is the platform's internal estimate" caveat)
- **Strengths (1–3 bullets)** — pulled from the AI marking
- **Where there's room to grow (1–3 bullets)** — pulled from the AI marking
- **One suggested action for the coming week**
- **Unsubscribe link + Privacy / Terms links in the footer** — Article 22 compliant
- **Sender identified as Upskill Energy Limited (UK)** — Article 22 compliant

**What the parent does NOT see:**

- The text of any essay the child wrote
- Any disclosure the child made in essay content
- Any data not directly relevant to the child's English learning progress

---

<div style="page-break-after: always;"></div>

## 7. School engagement + benchmarking

The progress over time view that lets a Deputy Head benchmark cohort-on-cohort.

`[SCREENSHOT: 07-school-engagement.png]`
*Source URL: https://theenglishhub.app/demo/school/engagement · Capture full page*

**What's on the page:**

- **Engagement by week** — students active, essays submitted, mock papers completed
- **Year-on-year benchmark** — this cohort vs last year's same cohort at the same point in the academic year (only shown once you have a year of data)
- **Cross-class comparison** — Set 1 / Set 2 / Set 3 side by side, weak areas surfaced
- **Intervention queue** — students whose engagement has dropped in the past 2 weeks, flagged for the form tutor / Head of Year

---

<div style="page-break-after: always;"></div>

## 8. Mock exam library

What the student sees when they pick a mock exam paper.

`[SCREENSHOT: 08-mock-exam-library.png]`
*Source URL: https://theenglishhub.app/mock-exams · Capture top of page*

**What's there:**

- **Every paper of every board** — AQA, Edexcel, OCR, Eduqas, WJEC, Cambridge IGCSE
- **Timed mode** — papers run in actual exam conditions with on-screen countdown
- **Mark-scheme-aligned AI marking** at the end of each paper
- **Past performance trending** — across attempts on the same paper

---

<div style="page-break-after: always;"></div>

## 9. KS3 hub — Year 7–9

Pearson Edexcel iLowerSecondary English (LEH11) coverage end to end.

`[SCREENSHOT: 09-ks3-hub.png]`
*Source URL: https://theenglishhub.app/ks3 · Capture top of page*

**Why this matters for Qatar schools:**

Most British schools in Qatar take Year 7 from age 11. The Pearson iLowerSecondary English specification is the de facto standard before students transition to IGCSE in Year 10. Our KS3 hub is **fully end-to-end** on this spec — weekly lesson plans, half-term assessments, key vocabulary, skill codes mapped to GCSE/IGCSE AOs.

---

<div style="page-break-after: always;"></div>

## 10. EAL track

Gulf-Arabic L1 awareness, A2/B1 native bands live.

`[SCREENSHOT: 10-eal-hub.png]`
*Source URL: https://theenglishhub.app/eal · Capture top of page*

**What's there:**

- **10 grammar topics** — word order, articles, verb tenses, modal verbs, prepositions, conjunctions, punctuation, cohesion, vocabulary academic, vocabulary descriptive
- **A2 and B1 native-band content** live
- **B2 and C1 in content authoring** — currently noindexed pending real level-differentiated content (rather than reusing A2 content under different labels — most EAL platforms do not declare this; we do)
- **Structural-transfer error awareness** — Gulf Arabic L1 students are not penalised for word-order patterns that are L1-correct in Arabic

---

<div style="page-break-after: always;"></div>

## 11. Cross-border consent UI (Qatar-specific)

What a Qatar-resident user sees in signup before account creation.

`[SCREENSHOT: 11-pdppl-consent-banner.png]`
*Source URL: https://theenglishhub.app/auth/register · Set country to "Qatar" → screenshot the consent panel that appears*

**What's on the panel:**

- **Title:** "Qatar — explicit cross-border consent (PDPPL Article 17)"
- **Named destinations:** European Union (Frankfurt), United States, United Kingdom, Ireland, Cloudflare global edge
- **What's at each destination** — Supabase / Anthropic / Microsoft Azure / Stripe / etc.
- **Safeguards listed** — DPAs, SCCs, TLS 1.3, AES-256, opaque IDs at the AI boundary, contractual zero-retention for AI
- **Required checkbox** before account creation completes
- **Withdrawal route** in plain text — Settings → Privacy & Data

This banner is **live as of 20 May 2026**. Most EdTech platforms have not shipped this.

---

<div style="page-break-after: always;"></div>

## 12. Privacy dashboard — what the student / parent can see and change

`[SCREENSHOT: 12-privacy-dashboard.png]`
*Source URL: https://theenglishhub.app/dashboard/consent · Capture full page*

**What's there:**

- **Every consent the user has ever granted or withdrawn**, with timestamp + version
- **Per-consent toggle** — withdraw any optional consent immediately
- **Full data export** in one click (UK GDPR Article 15)
- **Account deletion** in one click (with confirm step)
- **Parent-account view** for linked parent accounts — they see their child's consent ledger and can withdraw on behalf

---

<div style="page-break-after: always;"></div>

## Talk to us

**Email:** dpo@theenglishhub.app — subject "Demo walkthrough — [your school name]"
**WhatsApp / DSL:** +974 5187 9582
**Web:** theenglishhub.app/for-schools

We'll do a 20-minute live screen-share walkthrough through any or all of these screens with your students' year-group and exam-board pre-loaded.

---

**The English Hub** — what the live platform looks like
Upskill Energy Limited (UK Companies House 16511479) · ICO ZC016690
