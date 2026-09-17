import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { sendViaResend, escapeHtml } from '@/lib/email/resend'
import { DPO_EMAIL, ErasureIncompleteError, eraseSupabaseIdentity } from '@/lib/data-retention'

/**
 * DELETE /api/account/delete
 *
 * Self-service erasure under UK GDPR Art.17. There are two lawful
 * outcomes and no third one: the account is scheduled for purge, or the
 * account is erased now. A request that achieves neither returns an
 * error and the DPO address. It never returns a purge date it cannot
 * honour.
 *
 * Two kinds of account exist in production:
 *
 *   A. Accounts with a Prisma `User` row. Soft-deleted here, then
 *      hard-deleted by the retention cron (`cleanupExpiredData()` in
 *      src/lib/data-retention.ts) 30 days later, which also erases the
 *      Supabase profile and auth row. Children are processed first under
 *      Children's Code Standard 8.
 *
 *   B. Accounts that exist only in Supabase - an `auth.users` row and a
 *      `public.profiles` row, with no Prisma row at all. This route used
 *      to answer these with `{ success: true, scheduledPurgeAt }` having
 *      deleted nothing whatsoever: no auth user, no profile, no audit
 *      entry. The email, full name, date of birth, year group and
 *      guardian email survived indefinitely while the account holder was
 *      told in writing that they would be erased on a named date.
 *      There is no Prisma row to soft-delete and nowhere to record a
 *      30-day grace, so these are erased immediately and verified, and
 *      the response carries `erasedAt` and no purge date.
 *
 * An AuditLog entry is written for every outcome, including failures and
 * repeat requests. It is the only erasure record that survives the
 * erasure itself (`DataAccessRequest` rows cascade away with the user).
 */

const GRACE_PERIOD_DAYS = 30
const GRACE_PERIOD_MS = GRACE_PERIOD_DAYS * 24 * 60 * 60 * 1000

/**
 * Write an audit entry and return its id. Never throws: a failed audit
 * write must not turn into a failed erasure, but it must be visible, and
 * the caller reports whichever reference it actually got.
 */
async function recordAudit(
  request: NextRequest,
  entry: {
    action: string
    resourceId: string
    details: Record<string, unknown>
  },
): Promise<string | null> {
  try {
    const row = await prisma.auditLog.create({
      data: {
        // Deliberately null: the row has to outlive the user it describes.
        userId: null,
        action: entry.action,
        resource: 'User',
        resourceId: entry.resourceId,
        details: { source: 'self-service', ...entry.details },
        ipAddress:
          request.headers.get('x-real-ip') ||
          request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
          'unknown',
      },
      select: { id: true },
    })
    return row.id
  } catch (err) {
    console.error('[account-delete] failed to write audit log', err)
    return null
  }
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Confirmation that a purge has been scheduled. Branch A only. */
function sendScheduledEmail(recipient: string, firstName: string, purgeAt: Date): void {
  const purgeDateLabel = formatDate(purgeAt)
  const firstNameSafe = escapeHtml(firstName || 'there')
  const purgeDateSafe = escapeHtml(purgeDateLabel)

  void sendViaResend({
    to: recipient,
    subject: 'Your English Hub account has been scheduled for deletion',
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
        <h1 style="font-size: 20px; margin: 0 0 12px;">Hi ${firstNameSafe},</h1>
        <p style="line-height: 1.6; font-size: 15px;">
          Your English Hub account has been scheduled for deletion.
          Your profile, your saved work and your marking history will be
          permanently removed on <strong>${purgeDateSafe}</strong>, along with
          your sign-in details.
        </p>
        <p style="line-height: 1.6; font-size: 15px;">
          Aggregate analytics will be anonymised and retained for service
          improvement only - they cannot be linked back to you.
        </p>
        <p style="line-height: 1.6; font-size: 15px;">
          <strong>Changed your mind?</strong> Contact
          <a href="mailto:${DPO_EMAIL}" style="color: #0f766e;">${DPO_EMAIL}</a>
          before ${purgeDateSafe} to restore your account.
        </p>
        <p style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
          Sent under UK GDPR Art.17 (right to erasure). The English Hub ·
          Upskill Energy Limited · ICO ZC016690.
        </p>
      </div>
    `.trim(),
    text: [
      `Hi ${firstName || 'there'},`,
      ``,
      `Your English Hub account has been scheduled for deletion.`,
      `Your profile, your saved work and your marking history will be`,
      `permanently removed on ${purgeDateLabel}, along with your sign-in details.`,
      ``,
      `Aggregate analytics will be anonymised and retained for service`,
      `improvement only - they cannot be linked back to you.`,
      ``,
      `Changed your mind? Contact ${DPO_EMAIL} before ${purgeDateLabel}`,
      `to restore your account.`,
      ``,
      `Sent under UK GDPR Art.17 (right to erasure).`,
      `The English Hub · Upskill Energy Limited · ICO ZC016690`,
    ].join('\n'),
    replyTo: DPO_EMAIL,
    tags: [
      { name: 'category', value: 'account' },
      { name: 'event', value: 'deletion-scheduled' },
    ],
  }).catch((err) => {
    console.error('[account-delete] confirmation email failed', err)
  })
}

/** Confirmation that erasure has already happened. Branch B only. */
function sendErasedEmail(recipient: string, erasedAt: Date): void {
  const erasedLabel = escapeHtml(formatDate(erasedAt))

  void sendViaResend({
    to: recipient,
    subject: 'Your English Hub account has been deleted',
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
        <h1 style="font-size: 20px; margin: 0 0 12px;">Your account has been deleted</h1>
        <p style="line-height: 1.6; font-size: 15px;">
          On ${erasedLabel} we deleted your English Hub account. Your profile,
          your sign-in details and the records linked to your account have been
          permanently removed. This cannot be undone, and there is nothing left
          to restore.
        </p>
        <p style="line-height: 1.6; font-size: 15px;">
          Aggregate analytics will be anonymised and retained for service
          improvement only - they cannot be linked back to you.
        </p>
        <p style="line-height: 1.6; font-size: 15px;">
          If you think we still hold something of yours, write to
          <a href="mailto:${DPO_EMAIL}" style="color: #0f766e;">${DPO_EMAIL}</a>
          and we will check by hand.
        </p>
        <p style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
          Sent under UK GDPR Art.17 (right to erasure). The English Hub ·
          Upskill Energy Limited · ICO ZC016690.
        </p>
      </div>
    `.trim(),
    text: [
      `Your account has been deleted.`,
      ``,
      `On ${formatDate(erasedAt)} we deleted your English Hub account. Your`,
      `profile, your sign-in details and the records linked to your account`,
      `have been permanently removed. This cannot be undone, and there is`,
      `nothing left to restore.`,
      ``,
      `Aggregate analytics will be anonymised and retained for service`,
      `improvement only - they cannot be linked back to you.`,
      ``,
      `If you think we still hold something of yours, write to ${DPO_EMAIL}`,
      `and we will check by hand.`,
      ``,
      `Sent under UK GDPR Art.17 (right to erasure).`,
      `The English Hub · Upskill Energy Limited · ICO ZC016690`,
    ].join('\n'),
    replyTo: DPO_EMAIL,
    tags: [
      { name: 'category', value: 'account' },
      { name: 'event', value: 'deletion-completed' },
    ],
  }).catch((err) => {
    console.error('[account-delete] erasure email failed', err)
  })
}

export async function DELETE(request: NextRequest) {
  let sessionUserId: string | null = null

  try {
    // 1. Auth check first so the rate-limit key can be scoped to the user.
    const supabase = createServerSupabaseClient()
    const {
      data: { user: sessionUser },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !sessionUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    sessionUserId = sessionUser.id

    // 2. Rate-limit: 1 attempt per 5 minutes per user.
    const rl = await rateLimit(`account-delete:${sessionUser.id}`, {
      limit: 1,
      windowSeconds: 300,
    })
    if (!rl.success) {
      return NextResponse.json(
        {
          error:
            'You can only request account deletion once every 5 minutes. Please try again shortly.',
        },
        { status: 429 },
      )
    }

    // 3. Verify confirmation token. The page sends `confirm: 'DELETE'`.
    const body = (await request.json().catch(() => ({}))) as {
      confirm?: unknown
    }
    if (body?.confirm !== 'DELETE') {
      return NextResponse.json(
        {
          error: 'Confirmation required. Please type DELETE to confirm account deletion.',
        },
        { status: 400 },
      )
    }

    const now = new Date()

    const prismaUser = await prisma.user.findFirst({
      where: {
        OR: [
          { supabaseUserId: sessionUser.id },
          ...(sessionUser.email ? [{ email: sessionUser.email.toLowerCase() }] : []),
        ],
      },
      select: { id: true, email: true, firstName: true, accountStatus: true },
    })

    // ── Branch B: Supabase-native account, no Prisma row ───────────────
    if (!prismaUser) {
      try {
        const erasure = await eraseSupabaseIdentity(sessionUser.id)

        const auditId = await recordAudit(request, {
          action: 'USER_ERASED',
          resourceId: sessionUser.id,
          details: {
            supabaseUserId: sessionUser.id,
            store: 'supabase-identity',
            reason: 'Self-service erasure, no Prisma User row existed',
            erasedAt: now.toISOString(),
            profileRowDeleted: erasure.profileRowDeleted,
            authUserDeleted: erasure.authUserDeleted,
            freeAllowanceRowsDeleted: erasure.freeAllowanceRowsDeleted,
            warnings: erasure.warnings,
          },
        })

        // The session's user is gone; sign out so no stale cookie remains.
        await supabase.auth.signOut().catch(() => {})

        if (sessionUser.email) {
          sendErasedEmail(sessionUser.email, now)
        }

        // No `scheduledPurgeAt`: nothing is scheduled, it is already done.
        return NextResponse.json({
          success: true,
          erased: true,
          erasedAt: now.toISOString(),
          reference: auditId,
          warnings: erasure.warnings,
        })
      } catch (err) {
        const partial = err instanceof ErasureIncompleteError ? err.partial : false
        const step = err instanceof ErasureIncompleteError ? err.step : 'unknown'

        const auditId = await recordAudit(request, {
          action: 'USER_ERASURE_FAILED',
          resourceId: sessionUser.id,
          details: {
            supabaseUserId: sessionUser.id,
            store: 'supabase-identity',
            step,
            partial,
            error: err instanceof Error ? err.message : String(err),
            requestedAt: now.toISOString(),
          },
        })

        console.error('[account-delete] supabase-native erasure failed', err)

        // Honest refusal. No purge date, no success flag, and the user is
        // left signed in so they can see the message and try again.
        return NextResponse.json(
          {
            success: false,
            error: auditId
              ? `We could not complete the deletion of your account, so we are not going to ` +
                `tell you that we have. Your request has been logged and our data protection ` +
                `officer will finish it by hand. Please contact ${DPO_EMAIL}, quoting ` +
                `reference ${auditId}.`
              : `We could not complete the deletion of your account, so we are not going to ` +
                `tell you that we have. Please contact ${DPO_EMAIL} and our data protection ` +
                `officer will complete your request by hand.`,
            dpoEmail: DPO_EMAIL,
            reference: auditId,
          },
          { status: 503 },
        )
      }
    }

    // ── Branch A: account with a Prisma row ────────────────────────────
    const scheduledPurgeAt = new Date(now.getTime() + GRACE_PERIOD_MS)
    const alreadyDeleted = prismaUser.accountStatus === 'DELETED'

    if (!alreadyDeleted) {
      await prisma.user.update({
        where: { id: prismaUser.id },
        data: {
          accountStatus: 'DELETED',
          deletedAt: now,
        },
      })
    }

    // Traceability: a DataAccessRequest makes the erasure visible to the
    // subject (GET /api/dsar) and to the DSAR back office while the grace
    // period runs. The route wrote none at all before, on any path.
    let dataRequestId: string | null = null
    let dataRequestError: string | null = null
    try {
      const existing = await prisma.dataAccessRequest.findFirst({
        where: {
          userId: prismaUser.id,
          type: 'ERASURE',
          status: { in: ['PENDING', 'PROCESSING'] },
        },
        select: { id: true },
      })

      dataRequestId =
        existing?.id ??
        (
          await prisma.dataAccessRequest.create({
            data: {
              userId: prismaUser.id,
              type: 'ERASURE',
              status: 'PENDING',
              responseDetails:
                `Self-service erasure requested via /account/delete. Account soft-deleted ` +
                `${now.toISOString()}; scheduled purge ${scheduledPurgeAt.toISOString()} ` +
                `(${GRACE_PERIOD_DAYS}-day grace period).`,
            },
            select: { id: true },
          })
        ).id
    } catch (err) {
      dataRequestError = err instanceof Error ? err.message : String(err)
      console.error('[account-delete] failed to record DataAccessRequest', err)
    }

    // Unconditional: written on repeat requests too, so a second attempt
    // is not an invisible event.
    await recordAudit(request, {
      action: 'USER_REQUESTED_DELETION',
      resourceId: prismaUser.id,
      details: {
        supabaseUserId: sessionUser.id,
        store: 'prisma',
        alreadyDeleted,
        softDeletedAt: now.toISOString(),
        scheduledPurgeAt: scheduledPurgeAt.toISOString(),
        gracePeriodDays: GRACE_PERIOD_DAYS,
        dataAccessRequestId: dataRequestId,
        ...(dataRequestError ? { dataAccessRequestError: dataRequestError } : {}),
      },
    })

    // Sign out before the email so a slow send never delays session
    // invalidation.
    await supabase.auth.signOut().catch(() => {})

    const recipient = prismaUser.email || sessionUser.email
    if (recipient) {
      sendScheduledEmail(recipient, prismaUser.firstName || '', scheduledPurgeAt)
    }

    return NextResponse.json({
      success: true,
      erased: false,
      scheduledPurgeAt: scheduledPurgeAt.toISOString(),
      dataRequestId,
    })
  } catch (err) {
    console.error('[account-delete] unexpected error', err)
    if (sessionUserId) {
      await recordAudit(request, {
        action: 'USER_ERASURE_FAILED',
        resourceId: sessionUserId,
        details: {
          supabaseUserId: sessionUserId,
          step: 'unexpected',
          partial: false,
          error: err instanceof Error ? err.message : String(err),
        },
      })
    }
    return NextResponse.json(
      {
        success: false,
        error: `Something went wrong, and we cannot confirm that your account was deleted. Please try again or contact ${DPO_EMAIL}.`,
        dpoEmail: DPO_EMAIL,
      },
      { status: 500 },
    )
  }
}
