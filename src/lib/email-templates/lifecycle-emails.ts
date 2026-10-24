// ─── The lifecycle emails other than M2 and M3 ──────────────────────────────
//
// ADDED 23 October 2026, from document 08 (the email campaign brief, Part B).
// M2 and M3 live in trial-lifecycle.ts; the shell and the shared claim-sheet
// lines live in lifecycle-shell.ts.
//
//   M0  account ready       sent once when the no-card trial is provisioned
//   M1  first marked essay  day 3 of the trial, adults, no essay yet
//   M4  quests are free     7 days after the trial ended, consented adults
//   M5  one essay from      30 days after the trial ended, consented adults
//       class
//   M6  payment failed      invoice.payment_failed
//   M7  cancelled / ended   /api/stripe/cancel, customer.subscription.deleted
//
// Who may receive which is decided by the callers, not here, but each builder
// takes only the inputs its audience allows: the ones a child can receive
// accept no price, and the ones only an adult can receive are never built for
// anyone else (the tests in src/__tests__/lifecycle-emails-copy.test.ts and
// the cron's audience tests hold both).
//
// Never wire welcomeEmail, trialStartEmail or the card trialEndingEmail from
// src/lib/email-templates.ts for a no-card trialist: "you'll be charged
// automatically" is false for a trial that took no card (§5).
// ────────────────────────────────────────────────────────────────────────────

import type { EmailAgeGroup } from '@/lib/identity/age'
import {
  AI_MARKING_SENTENCE,
  MARKED_ESSAYS_STAY_LINE,
  STAYS_FREE_LINE,
  formatEmailDate,
  priceLine,
  renderLifecycleEmail,
  siteLink,
  type BuiltEmail,
  type LifecycleBlock,
} from './lifecycle-shell'

const p = (text: string): LifecycleBlock => ({ kind: 'p', text })

// ─── M0: account ready ──────────────────────────────────────────────────────

export interface AccountReadyData {
  /** From the Subscription row the provisioner wrote, never computed here. */
  trialEndsAt: Date
  /** Never UNDER_13: the sender refuses those before building anything. */
  ageGroup: Exclude<EmailAgeGroup, 'UNDER_13'>
  /** A teacher account (by role or by the trial row's isTeacherPlan). */
  isTeacher: boolean
  unsubscribeUrl: string
}

/**
 * M0. A service message: the trial is on the account, and one first thing to
 * do. No price for anyone. The first line says the trial "has started" rather
 * than "started when you confirmed your email", because a Google or Apple
 * sign-up confirms nothing and the record-login net can provision at a later
 * sign-in; "has started" is true on every path.
 */
export function buildAccountReadyEmail(data: AccountReadyData): BuiltEmail {
  const endDate = formatEmailDate(data.trialEndsAt)
  const teacherCopy = data.isTeacher && data.ageGroup === 'ADULT'

  const opening = p(
    `Your 7-day free trial has started and runs until ${endDate}. We took no card details.`,
  )

  if (teacherCopy) {
    return renderLifecycleEmail({
      subject: 'Your English Hub account is ready: start with the examiner marking tool',
      preheader: `Your free trial runs until ${endDate}. No card details were taken.`,
      heading: 'Your account is ready',
      blocks: [
        opening,
        // §6.3, in the sheet's words.
        p(
          "Your trial includes the examiner marking tool. It marks typed or photographed scripts against the paper's level grid, flagging doubtful words. The AI mark is a second opinion, never the award.",
        ),
        // §5: what the trial covers.
        p('The trial also covers AI essay marking, model answers and courses.'),
      ],
      cta: { label: 'Open the examiner tool', url: siteLink('/toolkit/examiner', 'em-d0') },
      footer: 'service',
      unsubscribeUrl: data.unsubscribeUrl,
    })
  }

  // §6.1 consent: 13 to 15 need a parent's approval or the school's recorded
  // authorisation. An unknown age may be either side of 16, so it is told the
  // rule rather than told it applies.
  const approval: LifecycleBlock[] =
    data.ageGroup === 'MINOR_UNDER_16'
      ? [p("AI feedback needs a parent's or school's approval first.")]
      : data.ageGroup === 'UNKNOWN'
        ? [p("If you are under 16, AI feedback needs a parent's or school's approval first.")]
        : []

  return renderLifecycleEmail({
    subject: 'Your English Hub account is ready: start with your set text',
    preheader: `Your free trial runs until ${endDate}. No card details were taken.`,
    heading: 'Your account is ready',
    blocks: [
      opening,
      // §2 and §6.5.
      p(
        'Start with your set text: open its study guide. The study guides and the quests for 100+ set texts are free, and most quest answers come with the reason.',
      ),
      p(`Your trial also covers AI essay marking. ${AI_MARKING_SENTENCE}`),
      ...approval,
    ],
    cta: { label: 'Open the study guides', url: siteLink('/revision/texts', 'em-d0') },
    footer: 'service',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}

// ─── M1: the first marked essay (adults only) ───────────────────────────────

export interface FirstEssayData {
  trialEndsAt: Date
  unsubscribeUrl: string
}

/**
 * M1. Day 3, to an adult whose trial has no essay yet. There is no minor
 * variant: nudges are off for under-18s (§8), so the cron never builds this for
 * anyone the age group does not call ADULT.
 */
export function buildFirstEssayEmail(data: FirstEssayData): BuiltEmail {
  const endDate = formatEmailDate(data.trialEndsAt)
  return renderLifecycleEmail({
    subject: 'Your first marked essay: a mark for each assessment objective',
    preheader: `Your free trial runs until ${endDate}.`,
    heading: 'Your first marked essay',
    blocks: [
      p(`Your free trial runs until ${endDate} and no essay has been marked yet.`),
      // The submit page refuses fewer than 50 words (src/app/marking/submit/page.tsx).
      p('Paste in an essay of at least 50 words and choose the paper and question it answers.'),
      // §6.1 "What comes back".
      {
        kind: 'list',
        heading: 'What comes back',
        items: [
          'A mark for each assessment objective',
          'Strengths, areas to improve, and targets for the next grade',
          'The lowest-scoring objective named, with a link to practise it',
          'A redraft link',
        ],
      },
      p(
        'Written by AI and labelled as AI; the grade is a practice estimate, not an official result.',
      ),
    ],
    cta: { label: 'Mark an essay', url: siteLink('/marking/submit', 'em-d3') },
    footer: 'service',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}

// ─── M4 and M5: consented adults only ───────────────────────────────────────

export interface WinbackData {
  /** When the trial ended: `Subscription.currentPeriodEnd`. */
  trialEndedAt: Date
  isTeacher: boolean
  unsubscribeUrl: string
}

/** M4. Seven days after the trial ended. Marketing: consented adults only. */
export function buildQuestsFreeEmail(data: WinbackData): BuiltEmail {
  const endDate = formatEmailDate(data.trialEndedAt)
  return renderLifecycleEmail({
    subject: 'Quests for your set text are free with your account',
    preheader: 'Your account is open, and the quests for 100+ set texts are free with it.',
    heading: 'Quests are free with your account',
    blocks: [
      // §2.
      p(
        `Your trial ended on ${endDate}. Your account is open, and the quests for 100+ set texts are free with it: 600+ levels, most answers with the reason.`,
      ),
      // §6.5.
      p('When you are signed in, your answers are saved to your account.'),
      // §4, once and unlinked.
      p(
        `If you would like AI essay marking again, a plan brings it back. ${priceLine(data.isTeacher)}`,
      ),
    ],
    cta: { label: 'Play a quest', url: siteLink('/games/texts', 'em-d14') },
    footer: 'marketing',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}

/**
 * M5. Thirty days after the trial ended, so "a month since your trial ended"
 * is true when it is read. The series ends here. Marketing: consented adults
 * only.
 */
export function buildOneEssayEmail(data: WinbackData): BuiltEmail {
  return renderLifecycleEmail({
    subject: 'One essay from class, marked against each assessment objective',
    preheader: 'If you have an essay from class, a plan marks it.',
    heading: 'One essay from class',
    blocks: [
      p(
        `It is a month since your trial ended. If you have an essay from class, a plan marks it. ${AI_MARKING_SENTENCE}`,
      ),
      p(priceLine(data.isTeacher)),
      { kind: 'box', heading: 'What stays free', text: STAYS_FREE_LINE },
    ],
    cta: { label: 'See plans', url: siteLink('/pricing', 'em-d30') },
    footer: 'marketing',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}

// ─── M6: payment failed ─────────────────────────────────────────────────────

export interface PaymentFailedData {
  /** `invoice.amount_due`, in the currency's minor unit. */
  amountMinor: number | null | undefined
  /** `invoice.currency`, for example 'gbp'. */
  currency: string | null | undefined
  /**
   * True only when this event moved the account off its paid features (the
   * webhook wrote `past_due` to the profile). The wording follows the code:
   * "paused" when access was removed, "stays active for now" when it was not.
   */
  accessPaused: boolean
  unsubscribeUrl: string
}

/** "£6.99", or null when Stripe sent nothing usable. */
export function formatAmount(
  amountMinor: number | null | undefined,
  currency: string | null | undefined,
): string | null {
  if (typeof amountMinor !== 'number' || !Number.isFinite(amountMinor) || amountMinor <= 0) {
    return null
  }
  if (!currency) return null
  try {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amountMinor / 100)
  } catch {
    return null
  }
}

/**
 * M6. Replaces the webhook's "Action Required: Payment Failed" email, whose
 * "To avoid any interruption to your subscription" was false: the handler had
 * already written `past_due`, and the web gate reads 'pro' only, so the
 * interruption had happened by the time it was read.
 */
export function buildPaymentFailedEmail(data: PaymentFailedData): BuiltEmail {
  const amount = formatAmount(data.amountMinor, data.currency)
  const tried = amount
    ? `We tried to take ${amount} for your English Hub plan and the payment did not go through`
    : 'We tried to take the payment for your English Hub plan and it did not go through'

  const blocks: LifecycleBlock[] = data.accessPaused
    ? [
        p(
          `${tried}, so AI marking and the other paid features are paused until a payment succeeds.`,
        ),
        p('To restart them, update your payment details on your billing page.'),
      ]
    : [
        p(
          `${tried}. Your plan stays active for now. If no payment succeeds, the plan will end and AI marking and the other paid features will stop.`,
        ),
        p('To keep your plan, update your payment details on your billing page.'),
      ]

  return renderLifecycleEmail({
    subject: data.accessPaused
      ? 'Your payment did not go through, so your plan is paused'
      : 'Your payment did not go through',
    preheader: 'Update your payment details on your billing page.',
    heading: 'Your payment did not go through',
    blocks,
    cta: { label: 'Update payment details', url: siteLink('/account/billing', 'em-pf') },
    footer: 'billing',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}

// ─── M7: cancelled, and ended ───────────────────────────────────────────────
//
// Built from cancellationConfirmEmail (src/lib/email-templates.ts) without its
// refund block, its access date and its ICO number. No date is stated: the
// cancel route reads `current_period_end` from the subscription's top level,
// which the pinned Stripe API version no longer carries there, so the date it
// holds can be missing (the payments audit's item 11). When that is fixed a
// date can be added here.

export interface PlanCancelledData {
  /** The subscription was still in its free days when it was cancelled. */
  inTrial: boolean
  unsubscribeUrl: string
}

/** M7, at the moment the customer cancels in the product. */
export function buildPlanCancelledEmail(data: PlanCancelledData): BuiltEmail {
  const first = data.inTrial
    ? p(
        'We have cancelled your English Hub plan, as you asked. You keep the paid features until your free trial ends, and you will not be charged.',
      )
    : p(
        'We have cancelled your English Hub plan, as you asked. You keep the paid features until the end of the period you have already paid for, and this plan will not charge you again.',
      )

  return renderLifecycleEmail({
    subject: data.inTrial
      ? 'Your plan is cancelled: access continues until your free trial ends'
      : 'Your plan is cancelled: access continues until the end of the period you have paid for',
    preheader: 'Your account stays open on the free plan after that.',
    heading: 'Your plan is cancelled',
    blocks: [
      first,
      p('After that your account stays open on the free plan.'),
      { kind: 'box', heading: 'What stays free', text: STAYS_FREE_LINE },
    ],
    cta: { label: 'Open your billing page', url: siteLink('/account/billing', 'em-cx') },
    footer: 'billing',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}

export interface PlanEndedData {
  unsubscribeUrl: string
}

/** M7, when Stripe ends the subscription and the entitlement is revoked. */
export function buildPlanEndedEmail(data: PlanEndedData): BuiltEmail {
  return renderLifecycleEmail({
    subject: 'Your plan has ended',
    preheader: 'Your account stays open on the free plan.',
    heading: 'Your plan has ended',
    blocks: [
      p('Your English Hub plan has ended. Your account stays open on the free plan.'),
      p('AI marking and the other paid features have stopped.'),
      p(MARKED_ESSAYS_STAY_LINE),
      { kind: 'box', heading: 'What stays free', text: STAYS_FREE_LINE },
    ],
    cta: { label: 'Open your billing page', url: siteLink('/account/billing', 'em-cx') },
    footer: 'billing',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}
