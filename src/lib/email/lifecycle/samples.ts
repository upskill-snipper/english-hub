// ─── One of every lifecycle email, for the founder's own inbox ──────────────
//
// ADDED 23 October 2026. Document 08 (B4, item 7) asks for "one send of each
// template to Calum's address through /api/admin/email-test" before any switch
// is set. That route could send only a fixed diagnostic message, so the proof
// it asked for could not be carried out. POST /api/admin/email-test with
// `{ to, lifecycle: true }` now sends every variant below, built by the same
// builders and carried by the same transport, with the same one-click headers,
// signed for the admin's own account. Nothing is written to the ledger: these
// are samples, and a sample must never stop the real email reaching anyone.
// ────────────────────────────────────────────────────────────────────────────

import type { BuiltEmail } from '@/lib/email-templates/lifecycle-shell'
import { buildTrialEndedEmail, buildTrialEndingEmail } from '@/lib/email-templates/trial-lifecycle'
import {
  buildAccountReadyEmail,
  buildFirstEssayEmail,
  buildOneEssayEmail,
  buildPaymentFailedEmail,
  buildPlanCancelledEmail,
  buildPlanEndedEmail,
  buildQuestsFreeEmail,
} from '@/lib/email-templates/lifecycle-emails'

const DAY_MS = 24 * 60 * 60 * 1000

export interface LifecycleSample {
  /** For example 'M2 child': which message and which audience. */
  id: string
  email: BuiltEmail
}

/** Every message in every audience variant, with dates relative to `now`. */
export function lifecycleSamples(
  unsubscribeUrl: string,
  now: Date = new Date(),
): LifecycleSample[] {
  const in7 = new Date(now.getTime() + 7 * DAY_MS)
  const in4 = new Date(now.getTime() + 4 * DAY_MS)
  const in1 = new Date(now.getTime() + DAY_MS)
  const ago1 = new Date(now.getTime() - DAY_MS)
  const ago7 = new Date(now.getTime() - 7 * DAY_MS)
  const ago30 = new Date(now.getTime() - 30 * DAY_MS)
  const u = unsubscribeUrl

  return [
    {
      id: 'M0 adult student',
      email: buildAccountReadyEmail({
        trialEndsAt: in7,
        ageGroup: 'ADULT',
        isTeacher: false,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M0 teacher',
      email: buildAccountReadyEmail({
        trialEndsAt: in7,
        ageGroup: 'ADULT',
        isTeacher: true,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M0 under 16',
      email: buildAccountReadyEmail({
        trialEndsAt: in7,
        ageGroup: 'MINOR_UNDER_16',
        isTeacher: false,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M0 unknown age',
      email: buildAccountReadyEmail({
        trialEndsAt: in7,
        ageGroup: 'UNKNOWN',
        isTeacher: false,
        unsubscribeUrl: u,
      }),
    },
    { id: 'M1', email: buildFirstEssayEmail({ trialEndsAt: in4, unsubscribeUrl: u }) },
    {
      id: 'M2 adult',
      email: buildTrialEndingEmail({ trialEndsAt: in1, audience: 'adult', unsubscribeUrl: u }),
    },
    {
      id: 'M2 child',
      email: buildTrialEndingEmail({ trialEndsAt: in1, audience: 'minor', unsubscribeUrl: u }),
    },
    {
      id: 'M3 adult',
      email: buildTrialEndedEmail({ trialEndsAt: ago1, audience: 'adult', unsubscribeUrl: u }),
    },
    {
      id: 'M3 child',
      email: buildTrialEndedEmail({ trialEndsAt: ago1, audience: 'minor', unsubscribeUrl: u }),
    },
    {
      id: 'M4',
      email: buildQuestsFreeEmail({ trialEndedAt: ago7, isTeacher: false, unsubscribeUrl: u }),
    },
    {
      id: 'M5',
      email: buildOneEssayEmail({ trialEndedAt: ago30, isTeacher: false, unsubscribeUrl: u }),
    },
    {
      id: 'M6 paused',
      email: buildPaymentFailedEmail({
        amountMinor: 399,
        currency: 'gbp',
        accessPaused: true,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M6 kept',
      email: buildPaymentFailedEmail({
        amountMinor: 399,
        currency: 'gbp',
        accessPaused: false,
        unsubscribeUrl: u,
      }),
    },
    { id: 'M7 cancelled', email: buildPlanCancelledEmail({ inTrial: false, unsubscribeUrl: u }) },
    {
      id: 'M7 cancelled in trial',
      email: buildPlanCancelledEmail({ inTrial: true, unsubscribeUrl: u }),
    },
    { id: 'M7 ended', email: buildPlanEndedEmail({ unsubscribeUrl: u }) },
  ]
}
