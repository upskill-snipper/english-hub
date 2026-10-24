// ─── Trial Lifecycle Email Templates (M2 and M3) ─────────────────────────
//
// Defect being fixed (2026-08-23 conversion audit): the 7-day no-card
// signup trial (Option C paywall, see /api/auth/register) is ended silently
// by `/api/cron/trial-expiry`. Nothing warned the user beforehand and
// nothing followed up afterwards, so the entire main trial population lost
// premium access with no notice at all.
//
// Two builders live here:
//   • buildTrialEndingEmail  (M2) - service notice, ~2 days before the end.
//   • buildTrialEndedEmail   (M3) - service notice after the trial has ended.
//
// CORRECTED 23 October 2026, before either had ever been switched on:
//
//   • "What you will lose" listed mock exam papers. The claim sheet (§5) says
//     mock papers are free with an account while
//     src/app/mock-exams/[id]/layout.tsx still gates them, so the founder has
//     to decide which is true; until then these emails say nothing about them.
//   • "What stays free" said courses remain free. Only the first module of
//     each course is (§2, §5). The line now comes from lifecycle-shell.ts.
//   • The opt-out pointed at /dashboard/privacy. It is now the signed
//     /unsubscribe?token= link, and the cron adds List-Unsubscribe headers.
//   • M3 was winback, gated on marketing consent, so a trialist who had never
//     switched marketing on (nearly all of them) was never told the trial had
//     ended. It is now a service notice to every trialist; the price and the
//     plan link go to adults only, and a child gets the service copy.
//   • Both greeted the reader by the first name typed at sign-up. That is
//     free text, so they now say "Hi," as every lifecycle email does.
//
// Copy rules (2026-08 claims-honesty sweep, still in force): no statistics,
// grade promises, testimonials or scale claims beyond the claim sheet's; no
// urgency and no deadline other than the account's real trial end; the
// no-card fact stated plainly; British English, no em dashes.
// ─────────────────────────────────────────────────────────────────────────

import {
  MARKED_ESSAYS_STAY_LINE,
  STAYS_FREE_LINE,
  formatEmailDate,
  paidFeatures,
  priceLine,
  renderLifecycleEmail,
  siteLink,
  type BuiltEmail,
  type LifecycleBlock,
} from './lifecycle-shell'

export type { BuiltEmail } from './lifecycle-shell'

export interface TrialEmailData {
  /**
   * The real trial boundary from `Subscription.currentPeriodEnd`. Used for
   * the only date shown in the email - never a made-up deadline.
   */
  trialEndsAt: Date
  /**
   * 'adult' only for an account the email age group resolves to ADULT. Every
   * other account, unknown age included, is 'minor' and gets no price and no
   * plan link.
   */
  audience: 'adult' | 'minor'
  /** A teacher sees the Teacher price and the examiner tool in the list. */
  isTeacher?: boolean
  /** The signed `/unsubscribe?token=` link, or bare `/unsubscribe`. */
  unsubscribeUrl: string
}

/**
 * The no-card fact, derived from the Option C paywall: signup takes no
 * payment details, so an expiring trial cannot produce a charge (§5). Stated
 * explicitly because "your trial is ending" reads as "you are about to be
 * billed" unless it is contradicted.
 */
const NO_CHARGE_LINE =
  'We never took your card details, so nothing will be charged when the trial ends.'

const p = (text: string): LifecycleBlock => ({ kind: 'p', text })

/**
 * M2. Trial-ending reminder, sent while the trial is still running.
 *
 * A service message about a change to the recipient's own account access: what
 * changes, when, and that nothing is charged.
 */
export function buildTrialEndingEmail(data: TrialEmailData): BuiltEmail {
  const endDate = formatEmailDate(data.trialEndsAt)
  const adult = data.audience === 'adult'
  const isTeacher = Boolean(data.isTeacher)

  return renderLifecycleEmail({
    subject: `Your free trial ends on ${endDate}`,
    preheader: `Your trial ends on ${endDate}. Your account stays open on the free plan.`,
    heading: 'Your free trial ends soon',
    blocks: [
      p(
        `Your 7-day free trial of The English Hub ends on ${endDate}. Your account stays open after that and moves to the free plan.`,
      ),
      p(NO_CHARGE_LINE),
      { kind: 'list', heading: 'What you will lose access to', items: paidFeatures(isTeacher) },
      { kind: 'box', heading: 'What stays free', text: STAYS_FREE_LINE },
      ...(adult
        ? [
            p(
              `If you would like to keep the paid features, you can choose a plan at any time. ${priceLine(isTeacher)}`,
            ),
          ]
        : []),
      p('If the free plan suits you, there is nothing to do.'),
    ],
    cta: adult
      ? { label: 'See plans', url: siteLink('/pricing', 'em-d6') }
      : { label: 'Open the study guides', url: siteLink('/revision/texts', 'em-d6') },
    footer: 'service',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}

/**
 * M3. Sent after the trial has ended, to every trialist.
 *
 * The facts (on the free plan, nothing charged, marked essays kept) go to
 * everyone. The price and the plan link go to adults only.
 */
export function buildTrialEndedEmail(data: TrialEmailData): BuiltEmail {
  const endDate = formatEmailDate(data.trialEndsAt)
  const adult = data.audience === 'adult'
  const isTeacher = Boolean(data.isTeacher)

  return renderLifecycleEmail({
    subject: 'Your free trial has ended - your account is still open',
    preheader: 'Your trial has ended. Your account is still open on the free plan.',
    heading: 'Your free trial has ended',
    blocks: [
      p(
        `Your 7-day free trial of The English Hub ended on ${endDate}. Your account is still open and is now on the free plan.`,
      ),
      p('Nothing was charged for the trial: we never took your card details.'),
      p(MARKED_ESSAYS_STAY_LINE),
      { kind: 'box', heading: 'What stays free', text: STAYS_FREE_LINE },
      ...(adult
        ? [
            {
              kind: 'list' as const,
              heading: 'What a plan adds back',
              items: paidFeatures(isTeacher),
            },
            p(priceLine(isTeacher)),
          ]
        : // A child gets the facts and the link to what stays free, and no
          // suggestion beyond it: nudges are off for under-18s (§8).
          []),
    ],
    cta: adult
      ? { label: 'See plans', url: siteLink('/pricing', 'em-d8') }
      : { label: 'Play a quest', url: siteLink('/games/texts', 'em-d8') },
    footer: 'service',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}
