# The English Hub
## Illustrative ROI calculation — the working in full

<br>
<br>

**For the Finance Director / Bursar / Business Manager who needs to defend the spend internally. Honest, transparent, swap-your-own-numbers-in.**

<br>

theenglishhub.app · dpo@theenglishhub.app

---

<div style="page-break-after: always;"></div>

## How to read this document

Most EdTech ROI pitches quote a single big number — "saves teachers 10 hours a week" — and hope nobody pulls on the thread. We do the opposite.

This document **shows every assumption** that feeds into the value calculation, so your finance team can:
1. See exactly where the numbers come from
2. Swap their own school's figures in for any assumption that doesn't fit
3. Recompute the ROI for your specific situation

If the calculation comes out negative after you've swapped your numbers in, **we are not the right tool for your school** — and you should not buy us. The point of this document is to help you decide, not to pressure you.

---

## What we explicitly do NOT claim

Three numbers you might expect to see in an EdTech ROI pitch — that you will not see here:

### ❌ "Students improve their grade by X"

We are launch-stage and do not yet have a validated outcome study. The Founding-cohort programme is partly designed to generate that data. **Anyone in the EdTech AI space who quotes you a specific grade-delta number should be asked to show you the methodology.** Most don't have one.

### ❌ "Saves teachers X hours per week"

The aggregate number is meaningless because it depends entirely on your department size, current marking practice, and adoption depth. The calculation in this document is per-cohort and per-month — you can roll it up to your school's actual scale.

### ❌ "X% of schools renew"

We have not yet completed a single annual cycle. **Anyone in EdTech telling you their renewal rate before they have one year of data is making it up.**

---

<div style="page-break-after: always;"></div>

## The calculation — Lever 1 — Reclaimed teacher marking time

### Inputs

| Input | Default | Your school's number |
|---|---|---|
| Students in the cohort writing practice essays | 80 | ______ |
| Practice essays per student per month | 2 (fortnightly) | ______ |
| Teacher marking time per practice essay (in current process) | 20 minutes | ______ |
| Months in your academic year (excl. exam term where there's no practice marking) | 9 | ______ |
| Fully-loaded teacher cost per hour (GCC mid-range) | £30 | ______ |

### The maths

```
Total practice essays per month
  = Students × Essays per student per month
  = 80 × 2
  = 160 essays / month

Total teacher marking time per month
  = Essays × Time per essay
  = 160 × 20 minutes
  = 3,200 minutes / month
  = 53.3 hours / month

Monthly value of reclaimed time (if AI handles practice marking)
  = Hours × Hourly rate
  = 53.3 × £30
  = £1,600 / month

Annual value (over 9 academic-year months of practice marking)
  = £1,600 × 9
  = £14,400 / year
```

### Compared to the Founding Schools fee

| Item | Annual amount |
|---|---|
| Founding Schools whole-school deployment | £4,000 |
| Annualised value of reclaimed marking time (one year group) | £14,400 |
| **Plausible ROI on Lever 1 alone, for a single year group** | **~3.6×** |

If your department has more than one practice-essay-writing cohort (it does — Y10, Y11, Y12, Y13 all write practice essays), the calculation scales. **For a department covering Y10–Y13 with broadly similar cohort sizes, the £4,000 Founding fee is sized to be recovered ~10× on Lever 1 alone.**

---

<div style="page-break-after: always;"></div>

## The calculation — Lever 2 — Earlier feedback = compounding revision time

### The qualitative argument

Feedback that lands within minutes of writing lets the student act on it **while the work is mentally fresh**. Feedback that lands 7–14 days later requires the student to re-read their own essay, reconstruct what they were trying to say, then process the comments — and almost no Year 11 student actually does this. **The 7–14-day-later feedback is, for most students, lost.**

The platform delivers AO-referenced feedback in under a minute. Whether this translates to a measurable grade delta depends on:
- How many essays the student actually writes (Lever 1)
- How carefully they action the feedback (depends on the student)
- How specifically the feedback is tied to the mark scheme (this is where we invest engineering effort)

### What we are NOT going to do

Multiply a fake "minutes of revision time gained" figure by a fake "grade points per revision hour" figure and call it ROI. That arithmetic is bunk and your finance team will see through it.

### What we WILL say

If the literature on feedback timing is even half right, the qualitative effect of compressing feedback from 14 days to 1 minute is **non-trivial**. **We are not going to monetise it for you.** Treat it as a free option on top of the Lever 1 ROI.

---

<div style="page-break-after: always;"></div>

## The calculation — Lever 3 — Avoided procurement-risk cost

### A cost most ROI pitches ignore

If you procure an EdTech AI tool that turns out not to be PDPPL Article 17 compliant, or trains on student data, or hosts in the wrong jurisdiction, the cost is not just the licence fee — it's:

- **Legal review cost** to extract you from the contract (£3–10k)
- **Parent communications cost** when the issue becomes public (£2–5k of senior staff time)
- **DPA renegotiation cost** with a replacement vendor (£5–15k of legal + procurement time)
- **NCGAA scrutiny cost** if the regulator notices (open-ended)
- **Brand cost** to the school's procurement reputation (open-ended)

### What we save you

By having done the homework before you ask — Article 17 cross-border consent live in signup, three v1.0 DPIAs, separately-appointed DPO + DSL, EU-region primary database, zero AI-training on student data contractually, Article 16 permit dossier shelf-ready — we **eliminate** the procurement-risk-cost line entirely.

**This is worth, conservatively, £10k+ in avoided downside.** Not annually — once, on procurement.

---

<div style="page-break-after: always;"></div>

## The calculation — Lever 4 — Parent engagement uplift

### The qualitative argument

Schools that send well-designed weekly parent progress emails have measurably higher renewal rates, fewer complaints, and a stronger word-of-mouth pipeline for admissions. The platform sends consent-gated weekly parent emails by default — modules completed, time on platform, weak areas identified, working-at grade — without any extra effort from the English department.

### What we are NOT going to do

Quote a "parent NPS uplift of X points" or "admissions enquiry uplift of X%". We have no measured data.

### What we WILL say

The weekly parent email is a parent-engagement asset your school gets effectively for free with the Founding fee. If your school spends any current effort on parent comms specifically about English progress, that effort is partially absorbed by the platform.

---

<div style="page-break-after: always;"></div>

## Summary — the value stack

| Lever | What we credibly evidence | Annual £ value | Notes |
|---|---|---|---|
| 1 — Reclaimed teacher marking time | Per-cohort calculation, full working above | **£14,400 / year for one year group** | Scales linearly with cohorts covered |
| 2 — Earlier feedback timing | Qualitative; research-supported; we do not monetise | "Free option" on top of Lever 1 | Don't put a £ value on it |
| 3 — Avoided procurement-risk cost | One-off saving at procurement | **£10,000+ one-off** | Real cost-of-avoidance |
| 4 — Parent engagement uplift | Qualitative; comms asset thrown in | "Free option" on top of Lever 1 | Don't put a £ value on it |

### Compared to the Founding Schools fee

| Item | Annual amount |
|---|---|
| Founding Schools whole-school deployment | **£4,000 / year** |
| Lever 1 alone (one year group) | £14,400 / year |
| Lever 1 across a typical Y10–Y13 English department | **£40,000–£60,000 / year** |
| Lever 3 (one-off) | £10,000+ |
| Levers 2 + 4 | Free option |

### Plausible whole-school ROI on the Founding fee

**10–15× on Lever 1 alone for a multi-cohort English department. Plus a one-off £10k+ on Lever 3 in Year 1.**

That is the honest range. If your school's marking practice already has 7-day turnaround and the department is fully staffed, the ROI is at the low end. If your school is running 14+ days behind on marking and short-staffed in the English department, it's at the high end.

---

<div style="page-break-after: always;"></div>

## What this document does for the conversation with your CFO

Three things:

1. **It shows every assumption.** Your CFO can challenge any of them and recompute. Most EdTech ROI pitches collapse under this scrutiny; this one is designed to survive it.

2. **It does not over-claim.** We do not promise grade improvements we can't measure. Your CFO will respect this more than a slick pitch with a fabricated number.

3. **It is conservative.** The Lever 1 calculation alone, on one year group, justifies the Founding fee 3.6×. For a multi-cohort English department, the number is closer to 10–15×. We have deliberately not stacked Levers 2 and 4 into the headline number, because they're real but unmeasurable.

If after running this with your school's specific numbers the ROI comes out below 3×, **do not buy us.** Email me back and tell me why; that data is more useful to our roadmap than any sale.

---

## Talk to us

**Email:** dpo@theenglishhub.app — subject "ROI walkthrough — [your school name]"
**WhatsApp / DSL:** +974 5187 9582
**Web:** theenglishhub.app/for-schools

We'll do a 30-minute call walking through this calculation with **your school's actual numbers** in front of us. No pitch — just the maths.

---

**The English Hub** — Illustrative ROI, with the working in full
Upskill Energy Limited (UK Companies House 16511479) · ICO ZC016690
