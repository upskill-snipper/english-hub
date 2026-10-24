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
//     ended. It is now a service notice to every trialist.
//
// CORRECTED AGAIN 24 October 2026. The first rebuild gave the price line and
// the "See plans" /pricing button to every adult, on age alone. An adult who
// had never consented, or had just pressed "Unsubscribe from marketing email"
// in the footer of M2 (which promises that only messages about the account
// will still reach them), still got the price in M3. Promotional content in a
// service message is direct marketing (ICO), the soft opt-in is closed for
// this base (document 08, fact 2), and an objection under UK GDPR Art 21(3) is
// absolute. So the price and the plan link now need an adult who may receive
// marketing ('consented-adult'); everyone else gets the service copy. Whether
// the day-8 price line is service or marketing is still the founder's open
// question 8: this is the answer that is safe until he gives his.
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
   * 'consented-adult' only for an account the email age group resolves to
   * ADULT AND that may receive marketing (isMarketingAllowed). It alone gets
   * the price and the plan link. Everyone else, every child, unknown age, and
   * every adult who never switched marketing on or has since withdrawn it, is
   * 'service': the facts about their own account and nothing for sale.
   */
  audience: 'consented-adult' | 'service'
  /** A teacher sees the Teacher price and the examiner tool in the list. */
  isTeacher?: boolean
  /** The signed `/unsubscribe?token=` link, or bare `/unsubscribe`. */
  unsubscribeUrl: string
}

/**
 * The no-card fact, derived from the Option C paywall: signup takes no
 * payment details, so an expiring trial cannot produce a charge (§5). Stated
 * explicitly because "your trial is ending" reads as "you are about to be
 * billed" unless it is contradicted. The cron sends neither email to anyone
 * with a Stripe customer id, since that person may have left card details at
 * checkout and the trial row may simply not know it yet.
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
  const offer = data.audience === 'consented-adult'
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
      ...(offer
        ? [
            p(
              `If you would like to keep the paid features, you can choose a plan at any time. ${priceLine(isTeacher)}`,
            ),
          ]
        : []),
      p('If the free plan suits you, there is nothing to do.'),
    ],
    cta: offer
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
 * everyone. The price and the plan link go to consented adults only.
 */
export function buildTrialEndedEmail(data: TrialEmailData): BuiltEmail {
  const endDate = formatEmailDate(data.trialEndsAt)
  const offer = data.audience === 'consented-adult'
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
      ...(offer
        ? [
            {
              kind: 'list' as const,
              heading: 'What a plan adds back',
              items: paidFeatures(isTeacher),
            },
            p(priceLine(isTeacher)),
          ]
        : // Everyone else gets the facts and the link to what stays free, and
          // no suggestion beyond it: nudges are off for under-18s (§8), and an
          // adult who has not consented is not sold to in a service notice.
          []),
    ],
    cta: offer
      ? { label: 'See plans', url: siteLink('/pricing', 'em-d8') }
      : { label: 'Play a quest', url: siteLink('/games/texts', 'em-d8') },
    footer: 'service',
    unsubscribeUrl: data.unsubscribeUrl,
  })
}
