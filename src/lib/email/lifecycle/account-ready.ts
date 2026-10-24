// ─── M0: the account-ready email, sent once when the trial is provisioned ───
//
// THE GAP THIS CLOSES (23 October 2026). provisionSignupTrial returns what it
// did, "so the callers can count outcomes", and every caller threw the result
// away: /auth/callback twice and /api/auth/record-login once. So the moment a
// trial actually began, nobody was told when it ended or that no card had been
// taken, and the only email a new account ever received was Supabase's
// confirmation link.
//
// announceTrialReady hands the result to this sender after the response, so a
// slow mail provider can never delay a sign-in, and the LifecycleEmail ledger
// (unique on user and kind) makes it once per account however many callbacks
// race.
//
// WHO RECEIVES IT. Every no-card trialist: it is a service message about their
// own account and sells nothing, so a child receives it too, with the
// approval line §6.1 requires for under-16s. An account whose date of birth
// says under 13 is bad data (registration refuses them) and gets nothing.
//
// ONLY A CONFIRMED ADDRESS (added 24 October 2026). record-login provisions a
// trial at any sign-in, and whether Supabase lets an unconfirmed address sign
// in depends on its "Confirm email" setting, which nobody has checked
// (document 08, B3 item 3). With it off, a mistyped or someone else's address
// would have been sent this email. The callers pass the session's
// email_confirmed_at, and nothing goes without it.
// ────────────────────────────────────────────────────────────────────────────

import { prisma } from '@/lib/prisma'
import { keepAlive } from '@/lib/keep-alive'
import { emailAgeGroup, findExistingUser, readIdentityProfile } from '@/lib/identity'
import type { TrialProvisionResult } from '@/lib/billing/provision-signup-trial'
import { buildAccountReadyEmail } from '@/lib/email-templates/lifecycle-emails'
import {
  LIFECYCLE_DISABLED_REASON,
  LIFECYCLE_KIND,
  claimThenSendLifecycle,
  lifecycleEmailsEnabled,
  unsubscribeLinkFor,
  type LifecycleSendOutcome,
} from './send'

const LOG = '[lifecycle:account-ready]'

export type AccountReadyOutcome =
  | { status: 'skipped'; reason: string }
  | { status: LifecycleSendOutcome }

export interface AccountReadyArgs {
  supabaseUserId: string
  /** The Prisma id provisionSignupTrial wrote the trial row against. */
  prismaUserId: string
  /** The address from the auth session. */
  email: string | null | undefined
  /**
   * `auth.users.email_confirmed_at` from the same session. Nothing is sent
   * unless it is set: see the header.
   */
  emailConfirmedAt: string | null | undefined
  now?: Date
}

/** Send M0 for one account. Never throws. */
export async function sendAccountReadyEmail(args: AccountReadyArgs): Promise<AccountReadyOutcome> {
  if (!lifecycleEmailsEnabled()) {
    console.info(`${LOG} skipped - ${LIFECYCLE_DISABLED_REASON}`)
    return { status: 'skipped', reason: LIFECYCLE_DISABLED_REASON }
  }
  try {
    const now = args.now ?? new Date()
    if (!args.email) return { status: 'skipped', reason: 'no-email' }
    if (!args.emailConfirmedAt) return { status: 'skipped', reason: 'email-unconfirmed' }

    // The date comes from the row, not from the provisioner's return value:
    // an existing row is never overwritten by the provisioner's upsert, so its
    // own end date is the one that is true.
    const sub = await prisma.subscription.findUnique({
      where: { userId: args.prismaUserId },
      select: {
        status: true,
        currentPeriodEnd: true,
        stripeSubscriptionId: true,
        isTeacherPlan: true,
      },
    })
    if (
      !sub ||
      sub.status !== 'TRIALING' ||
      sub.stripeSubscriptionId !== null ||
      sub.currentPeriodEnd.getTime() <= now.getTime()
    ) {
      return { status: 'skipped', reason: 'not-a-live-no-card-trial' }
    }

    const profile = await readIdentityProfile(args.supabaseUserId)
    let row: Awaited<ReturnType<typeof findExistingUser>> = null
    try {
      row = await findExistingUser(args.supabaseUserId)
    } catch {
      row = null
    }
    if (row && row.accountStatus !== 'ACTIVE') {
      return { status: 'skipped', reason: 'account-not-active' }
    }

    const ageGroup = emailAgeGroup(
      {
        profileDob: profile?.date_of_birth ?? null,
        prismaDob: row?.dateOfBirth ?? null,
        profileIsMinor: profile?.is_minor ?? null,
        prismaIsMinor: row?.isMinor ?? null,
        roles: [profile?.role ?? null],
      },
      now,
    )
    if (ageGroup === 'UNDER_13') return { status: 'skipped', reason: 'under-13' }

    const isTeacher = sub.isTeacherPlan || (profile?.role ?? '').toLowerCase() === 'teacher'
    const unsubscribe = unsubscribeLinkFor(args.supabaseUserId, now.getTime())
    const email = buildAccountReadyEmail({
      trialEndsAt: sub.currentPeriodEnd,
      ageGroup,
      isTeacher,
      unsubscribeUrl: unsubscribe.pageUrl,
    })

    const status = await claimThenSendLifecycle({
      userId: args.prismaUserId,
      kind: LIFECYCLE_KIND.ACCOUNT_READY,
      to: args.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
      headers: unsubscribe.headers,
      logPrefix: LOG,
    })
    return { status }
  } catch (err) {
    console.error(`${LOG} failed: ${err instanceof Error ? err.message : String(err)}`)
    return { status: 'send-failed' }
  }
}

/**
 * What every caller of provisionSignupTrial does with its result: when a
 * trial was provisioned, send M0 after the response. Accepts anything,
 * because the auth paths that call it must never fail on it.
 */
export function announceTrialReady(
  result: TrialProvisionResult | null | undefined,
  ctx: {
    supabaseUserId: string
    email: string | null | undefined
    emailConfirmedAt: string | null | undefined
  },
): void {
  if (!result || result.provisioned !== true || !result.prismaUserId) return
  keepAlive(
    sendAccountReadyEmail({
      supabaseUserId: ctx.supabaseUserId,
      prismaUserId: result.prismaUserId,
      email: ctx.email,
      emailConfirmedAt: ctx.emailConfirmedAt,
    }).then((outcome) => {
      if (outcome.status !== 'skipped' && outcome.status !== 'sent') {
        console.warn(`${LOG} outcome ${outcome.status}`)
      }
    }),
    `${LOG} M0`,
  )
}
