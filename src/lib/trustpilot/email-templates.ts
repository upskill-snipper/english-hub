/**
 * Trustpilot review-solicitation email templates.
 *
 * Source copy: business-docs/content/trustpilot-review-email-sequence.md
 *
 * Each template is paired with a trigger in `TRUSTPILOT_TRIGGERS` below. The
 * actual send path is gated behind `TRUSTPILOT_ENABLED` — until a Trustpilot
 * Business account + API key + SendGrid `reviews@` mailbox are configured,
 * `sendTrustpilotInvite` no-ops and logs.
 *
 * British English, under 200 words per body, subjects under 50 chars.
 * All invitations sent via Trustpilot AFS (Automatic Feedback Service) or
 * BGL (Business Generated Link) so reviews carry the verified badge.
 */

export type TrustpilotTrigger =
  | 'student_first_mark'
  | 'student_first_mark_followup_7d'
  | 'student_first_mock'
  | 'student_90d_retention'
  | 'teacher_first_bulk_mark'
  | 'parent_30d_dashboard'

export type TrustpilotVars = {
  first_name: string
  trustpilot_invite_link: string
  essays_submitted_count?: number
  mock_board?: string
  mock_paper?: string
  mock_duration_minutes?: number
  modules_completed?: number
  mock_exams_taken?: number
  grade_start?: string
  grade_current?: string
  child_first_name?: string
}

type EmailTemplate = {
  subject: string
  preview: string
  body: (v: TrustpilotVars) => string
  fromName: string
  fromEmail: string
  replyTo: string
}

const FROM = {
  fromName: 'The English Hub',
  fromEmail: 'reviews@theenglishhub.app',
  replyTo: 'info@upskillenergy.com',
}

export const TRUSTPILOT_TEMPLATES: Record<TrustpilotTrigger, EmailTemplate> = {
  /** Sent 24 hours after first successful AI essay mark (≥ 200 words submitted). */
  student_first_mark: {
    subject: 'How did your first feedback feel?',
    preview: 'Quick thought on what you just tried — takes 60 seconds to share.',
    body: (v) => `Hi ${v.first_name},

Yesterday you submitted your first essay to our AI feedback tool and got your AO-by-AO breakdown back. Nice one — that's the hardest first step done.

We're genuinely curious: did the feedback land the way you expected? Was the AO1 score fair? Did the suggested improvements make sense?

If you've got 60 seconds, we'd really appreciate a quick Trustpilot review. Honest feedback — good or bad — helps us improve the tool for every student behind you.

Leave a quick review: ${v.trustpilot_invite_link}

No pressure at all if now isn't the right moment. If anything about the feedback felt off, just reply to this email and a real person will look into it.

Cheers,
The English Hub Team

P.S. Your review will appear publicly on Trustpilot with your first name and the date. You stay in control of what you share.`,
    ...FROM,
  },

  /** Sent 7 days after first mark if no review left AND at least one more mark submitted. */
  student_first_mark_followup_7d: {
    subject: 'A week in — quick nudge',
    preview: 'Only if you\u2019ve got a minute. Your perspective helps the next student.',
    body: (v) => `Hi ${v.first_name},

A week on from your first essay mark and you've submitted ${v.essays_submitted_count ?? 'more'} more. That's the kind of repeat use that genuinely changes grades.

If the AI feedback has been useful — or if anything's been frustrating — a short Trustpilot review would mean a lot. The next Year 11 looking at us before their mocks will read what you wrote.

Share your experience: ${v.trustpilot_invite_link}

It takes about two minutes, and you can stay anonymous beyond your first name. No incentive offered for good reviews — we just want honest ones.

Thanks for being here,
The English Hub Team`,
    ...FROM,
  },

  /** Sent 2 hours after first mock exam submission. */
  student_first_mock: {
    subject: 'How did that mock feel?',
    preview: 'You\u2019ve just done a real thing. Tell the next student about it.',
    body: (v) => `Hi ${v.first_name},

You just sat a timed ${v.mock_board ?? ''} ${v.mock_paper ?? 'mock'} exam — ${v.mock_duration_minutes ?? 'a full'} minutes of real exam-condition writing. That takes actual effort.

We'd love to know: did the mock feel like the real thing? Was the timing right? Did the feedback afterwards help you see where your grade came from?

If yes — or even if no — a 2-minute Trustpilot review would genuinely help other students deciding whether to trust us with their revision time.

Share your honest take: ${v.trustpilot_invite_link}

If the mock felt off in any way, reply to this email directly. Our content team reads every response.

Onwards,
The English Hub Team`,
    ...FROM,
  },

  /** Sent 90 days after first payment (retention milestone). */
  student_90d_retention: {
    subject: '3 months in — worth a review?',
    preview: 'You\u2019re part of a smaller group than you might think.',
    body: (v) => `Hi ${v.first_name},

You've been with The English Hub for 90 days. That puts you in the group of students who stick with revision past the first-month novelty, which is a smaller group than most people think.

In that time you've:
- Completed ${v.modules_completed ?? '_'} modules
- Submitted ${v.essays_submitted_count ?? '_'} essays for AI feedback
- Sat ${v.mock_exams_taken ?? '_'} mock exams
- Your predicted grade has moved from ${v.grade_start ?? '_'} to ${v.grade_current ?? '_'}

If that progress has felt real — or if any bit of the platform hasn't earned its place — a 3-month review on Trustpilot would be genuinely valuable. You've got more context than any student leaving a review after one lesson.

Leave a 3-month review: ${v.trustpilot_invite_link}

As ever, no incentive attached. Just honest perspective.

Thanks for sticking with us,
The English Hub Team`,
    ...FROM,
  },

  /** Sent 48 hours after first teacher bulk mark (\u2265 5 essays in one session). */
  teacher_first_bulk_mark: {
    subject: 'Your first batch — how was the marking?',
    preview: 'Teachers who share take-home time feedback help other HoDs.',
    body: (v) => `Hi ${v.first_name},

You've just bulk-marked a class set of essays through The English Hub — 5 or more in one session. If the AO breakdown and the PowerPoint export saved you the usual evening at the kitchen table, we'd love to hear it.

More importantly, if anything about the marking felt off — a specific essay where the AO judgement was wrong, or a formatting issue in the export — we want to know before the next Head of English reads a review.

Share your teacher perspective: ${v.trustpilot_invite_link}

Mentioning your role and school phase (secondary independent / state comprehensive / international school) in the review is what helps other teachers most.

No incentive — honest only.

Cheers,
The English Hub Team`,
    ...FROM,
  },

  /** Sent 30 days after first parent dashboard view. Deferred until Parent Plan ships. */
  parent_30d_dashboard: {
    subject: '30 days of weekly summaries',
    preview: 'Parents rarely write reviews \u2014 which is why yours would count.',
    body: (v) => `Hi ${v.first_name},

You've been receiving weekly summaries for ${v.child_first_name ?? 'your child'} for about a month now. Have they been useful? Are you seeing the progress you hoped for?

Other parents weighing up revision tools read Trustpilot specifically for parent perspectives, and there just aren't many. Yours would count.

Leave a parent review: ${v.trustpilot_invite_link}

If the summaries have been unclear or the predicted grade has seemed off, please reply directly and we'll investigate.

Thanks,
The English Hub Team`,
    ...FROM,
  },
}

/**
 * Fetches the right template for a trigger and renders it with variables.
 * Returns the full email payload ready to hand to SendGrid.
 */
export function renderTrustpilotEmail(trigger: TrustpilotTrigger, vars: TrustpilotVars) {
  const tpl = TRUSTPILOT_TEMPLATES[trigger]
  if (!tpl) throw new Error(`Unknown Trustpilot trigger: ${trigger}`)
  return {
    from: { name: tpl.fromName, email: tpl.fromEmail },
    replyTo: tpl.replyTo,
    subject: tpl.subject,
    preview: tpl.preview,
    body: tpl.body(vars),
    trigger,
  }
}
