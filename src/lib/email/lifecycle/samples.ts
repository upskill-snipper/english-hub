// ─── One of every lifecycle email, for the founder's own inbox ──────────────
//
// ADDED 23 October 2026. Document 08 (B4, item 7) asks for "one send of each
// template to Calum's address through /api/admin/email-test" before any switch
// is set. That route could send only a fixed diagnostic message, so the proof
// it asked for could not be carried out. POST /api/admin/email-test with
// `{ to, lifecycle: true }` now sends every variant below, built by the same
// builders and carried by the same transport, with the same one-click headers.
// Nothing is written to the ledger: these are samples, and a sample must never
// stop the real email reaching anyone.
//
// SIGNED FOR NOBODY (changed 24 October 2026). The samples' unsubscribe link
// and header were signed for the admin's own Supabase id, so pressing
// "Unsubscribe" in a sample, the natural thing to try when reading one, really
// switched marketing off on the founder's account in both stores. They are now
// signed for SAMPLE_USER_ID, an id no account can have, the same one the
// welcome-back script's previews use. The unsubscribe page may still say it
// is done, because /api/unsubscribe reports success when its writes raise no
// error, and an update that matches no row raises none.
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

/**
 * The account the samples' unsubscribe token names: a version-4 shaped uuid
 * that no Supabase account can hold. Matches PREVIEW_USER_ID in
 * scripts/send-welcome-back.mjs.
 */
export const SAMPLE_USER_ID = '00000000-0000-4000-8000-000000000000'

export interface LifecycleSample {
  /** For example 'M2 service': which message and which audience. */
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
      id: 'M2 consented adult',
      email: buildTrialEndingEmail({
        trialEndsAt: in1,
        audience: 'consented-adult',
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M2 service',
      email: buildTrialEndingEmail({ trialEndsAt: in1, audience: 'service', unsubscribeUrl: u }),
    },
    {
      id: 'M3 consented adult',
      email: buildTrialEndedEmail({
        trialEndsAt: ago1,
        audience: 'consented-adult',
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M3 service',
      email: buildTrialEndedEmail({ trialEndsAt: ago1, audience: 'service', unsubscribeUrl: u }),
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
        ieltsOnly: false,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M6 not paused',
      email: buildPaymentFailedEmail({
        amountMinor: 399,
        currency: 'gbp',
        accessPaused: false,
        ieltsOnly: false,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M7 cancelled',
      email: buildPlanCancelledEmail({
        status: 'active',
        ieltsOnly: false,
        otherPlanRemains: false,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M7 cancelled in trial',
      email: buildPlanCancelledEmail({
        status: 'trialing',
        ieltsOnly: false,
        otherPlanRemains: false,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M7 cancelled after a failed payment',
      email: buildPlanCancelledEmail({
        status: 'past_due',
        ieltsOnly: false,
        otherPlanRemains: false,
        unsubscribeUrl: u,
      }),
    },
    {
      id: 'M7 cancelled, another plan remains',
      email: buildPlanCancelledEmail({
        status: 'active',
        ieltsOnly: false,
        otherPlanRemains: true,
        unsubscribeUrl: u,
      }),
    },
    { id: 'M7 ended', email: buildPlanEndedEmail({ unsubscribeUrl: u }) },
  ]
}
