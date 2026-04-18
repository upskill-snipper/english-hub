# Trustpilot Review Solicitation — Email Sequence

**Purpose:** Generate a steady flow of verified, named Trustpilot reviews across three trigger points in the customer lifecycle. Target 150+ reviews in the first 12 months to unlock the Trustpilot widget on homepage + pricing (lever #21 in the Commercial Review).

**Style:** British English. Friendly, encouraging, concise. Under 200 words per email. Subject lines under 50 characters. Matches the tone of the existing `email-marketing-sequences.md`.

**Legal/compliance note:** All solicitation emails must include Trustpilot's "invitation best practice" requirements: no incentive for positive reviews, clear opt-out, and the reviewer can decline without consequence. Reviews must be sent via Trustpilot's Automatic Feedback Service (AFS) or Business Generated Link (BGL) so they carry the verified badge.

**Stripe/Supabase trigger:** Send via Supabase Edge Function on:
- Trigger 1: First successful AI essay mark (≥ 200 words submitted)
- Trigger 2: First mock exam completed (≥ 45 mins, answers submitted)
- Trigger 3: 3 months post-first-payment (retention milestone)

---

## Sequence 1: Post First Essay Mark (2 emails)

### Email 1.1 — Sent 24 hours after first AI essay mark

**Subject line:** How did your first feedback feel?
**Preview text:** Quick thought on what you just tried — takes 60 seconds to share.

**Body:**

Hi {{first_name}},

Yesterday you submitted your first essay to our AI feedback tool and got your AO-by-AO breakdown back. Nice one — that's the hardest first step done.

We're genuinely curious: did the feedback land the way you expected? Was the AO1 score fair? Did the suggested improvements make sense?

If you've got 60 seconds, we'd really appreciate a quick Trustpilot review. Honest feedback — good or bad — helps us improve the tool for every student behind you.

[Leave a quick review →] ({{trustpilot_invite_link}})

No pressure at all if now isn't the right moment. If anything about the feedback felt off, just reply to this email and a real person will look into it.

Cheers,
The English Hub Team

**P.S.** Your review will appear publicly on Trustpilot with your first name and the date. You stay in control of what you share.

---

### Email 1.2 — Sent 7 days after first mark (only if no review left + at least one more mark submitted)

**Subject line:** A week in — quick nudge
**Preview text:** Only if you've got a minute. Your perspective helps the next student.

**Body:**

Hi {{first_name}},

A week on from your first essay mark and you've submitted {{essays_submitted_count}} more. That's the kind of repeat use that genuinely changes grades.

If the AI feedback has been useful — or if anything's been frustrating — a short Trustpilot review would mean a lot. The next Year 11 looking at us before their mocks will read what you wrote.

[Share your experience →] ({{trustpilot_invite_link}})

It takes about two minutes, and you can stay anonymous beyond your first name. No incentive offered for good reviews — we just want honest ones.

Thanks for being here,
The English Hub Team

---

## Sequence 2: Post First Mock Exam (1 email)

### Email 2.1 — Sent 2 hours after mock submission

**Subject line:** How did that mock feel?
**Preview text:** You've just done a real thing. Tell the next student about it.

**Body:**

Hi {{first_name}},

You just sat a timed {{mock_board}} {{mock_paper}} mock exam — {{mock_duration_minutes}} minutes of real exam-condition writing. That takes actual effort.

We'd love to know: did the mock feel like the real thing? Was the timing right? Did the feedback afterwards help you see where your grade came from?

If yes — or even if no — a 2-minute Trustpilot review would genuinely help other students deciding whether to trust us with their revision time.

[Share your honest take →] ({{trustpilot_invite_link}})

If the mock felt off in any way, reply to this email directly. Our content team reads every response.

Onwards,
The English Hub Team

---

## Sequence 3: 3-Month Retention Milestone (1 email)

### Email 3.1 — Sent 90 days after first payment

**Subject line:** 3 months in — worth a review?
**Preview text:** You're part of a smaller group than you might think.

**Body:**

Hi {{first_name}},

You've been with The English Hub for 90 days. That puts you in the group of students who stick with revision past the first-month novelty, which is a smaller group than most people think.

In that time you've:
- Completed {{modules_completed}} modules
- Submitted {{essays_submitted_count}} essays for AI feedback
- Sat {{mock_exams_taken}} mock exams
- Your predicted grade has moved from {{grade_start}} to {{grade_current}}

If that progress has felt real — or if any bit of the platform hasn't earned its place — a 3-month review on Trustpilot would be genuinely valuable. You've got more context than any student leaving a review after one lesson.

[Leave a 3-month review →] ({{trustpilot_invite_link}})

As ever, no incentive attached. Just honest perspective.

Thanks for sticking with us,
The English Hub Team

---

## Sequence 4: Teacher Tier — Post First Class Essay Batch (1 email)

### Email 4.1 — Sent 48 hours after first teacher bulk-mark (≥ 5 essays)

**Subject line:** Your first batch — how was the marking?
**Preview text:** Teachers who share take-home time feedback help other HoDs.

**Body:**

Hi {{first_name}},

You've just bulk-marked a class set of essays through The English Hub — 5 or more in one session. If the AO breakdown and the PowerPoint export saved you the usual evening at the kitchen table, we'd love to hear it.

More importantly, if anything about the marking felt off — a specific essay where the AO judgement was wrong, or a formatting issue in the export — we want to know before the next Head of English reads a review.

[Share your teacher perspective →] ({{trustpilot_invite_link}})

Mentioning your role and school phase (secondary independent / state comprehensive / international school) in the review is what helps other teachers most.

No incentive — honest only.

Cheers,
The English Hub Team

---

## Sequence 5: Parent Tier (1 email) — **deferred until Parent Plan ships**

### Email 5.1 — Sent 30 days after first parent dashboard view

**Subject line:** 30 days of weekly summaries
**Preview text:** Parents rarely write reviews — which is why yours would count.

**Body:**

Hi {{first_name}},

You've been receiving weekly summaries for {{child_first_name}} for about a month now. Have they been useful? Are you seeing the progress you hoped for?

Other parents weighing up revision tools read Trustpilot specifically for parent perspectives, and there just aren't many. Yours would count.

[Leave a parent review →] ({{trustpilot_invite_link}})

If the summaries have been unclear or the predicted grade has seemed off, please reply directly and we'll investigate.

Thanks,
The English Hub Team

---

## Implementation notes

1. **Trustpilot AFS setup:** Configure Automatic Feedback Service with domain `theenglishhub.app`. Use BGL links if starting on the free tier to keep cost at £0. Upgrade to Standard (£199/mo) only once volume justifies it.
2. **Send window:** Trustpilot requires invitations within 90 days of the trigger transaction. All five sequences fit comfortably within that.
3. **Email deliverability:** Send from `reviews@theenglishhub.app` (distinct from `hello@` marketing and `info@` general). Set up SPF / DKIM / DMARC before first send.
4. **Review-gating rule:** Do NOT filter unhappy users out of the invitation flow. Trustpilot's TOS explicitly forbids this, and Google's reviewing algorithm penalises suspicious review patterns.
5. **Dashboard:** track invitations sent, response rate, average star rating, and NPS-equivalent in Supabase table `trustpilot_invites` (one row per user × trigger).
6. **Compliance:** add to the privacy policy that the user's email may be used to send a Trustpilot invitation on these three triggers; provide a clear opt-out in the user account settings.
7. **GDPR/UK GDPR basis:** legitimate interest (marketing of an existing product to an existing customer, with clear opt-out). Document the Legitimate Interest Assessment in `data-room/03-privacy/legitimate-interest-assessments.md`.

---

## Expected output (12 months)

Assuming Base-Case trajectory (500 paid students + 60 teachers + 10 schools × avg 20 teachers = ~760 active users by end of Year 1):

| Trigger | Sent (est.) | Conversion to review | Reviews/yr |
|---|---|---|---|
| Post first essay mark | 450 | 5% | 23 |
| Post first mock | 350 | 6% | 21 |
| 90-day retention | 300 | 8% | 24 |
| Teacher bulk mark | 200 | 10% | 20 |
| Parent dashboard | (deferred) | — | — |
| **Total Year 1** | | | **~88 reviews** |

With a modest retargeting-email approach at 6 months, realistic Year 1 = **150+ reviews**, which unlocks the Trustpilot widget on homepage and pricing with a rating anchored at ~4.5+★ if product quality is sound.

---

**File owner:** Customer Marketing / Growth
**Review cadence:** Quarterly (adjust send windows based on actual star rating trend)
**Last updated:** April 2026
