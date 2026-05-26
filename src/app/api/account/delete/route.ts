import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { sendViaResend, escapeHtml } from '@/lib/email/resend'

/**
 * DELETE /api/account/delete
 *
 * Soft-deletes the authenticated user's account under GDPR Art.17
 * (right to erasure). The actual hard purge is handled by the existing
 * data-retention cron sweep (`cleanupExpiredData()` in
 * `src/lib/data-retention.ts`) which runs daily and hard-deletes any
 * `User` rows where `accountStatus = 'DELETED'` and `deletedAt` is more
 * than 30 days old. Children's accounts are processed first under
 * Children's Code Standard 8, so this same flow grants minors the same
 * 30-day restore window with priority cleanup once the grace period
 * elapses.
 *
 * Flow:
 *   1. Rate-limit (1 attempt / 5 min / user)
 *   2. Verify Supabase session
 *   3. Verify confirmation token in body
 *   4. Set User.accountStatus = 'DELETED' + deletedAt = now()
 *      (the dormancy/purge cron picks this up)
 *   5. Sign the user out
 *   6. Best-effort confirmation email via Resend
 */
export async function DELETE(request: NextRequest) {
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

    // 4. Soft-delete the Prisma row. The dormancy cron
    //    (cleanupExpiredData) will hard-delete the user, anonymise
    //    aggregate analytics, and purge the Supabase auth row 30 days
    //    after `deletedAt`. Minors are processed with priority.
    const prismaUser = await prisma.user.findFirst({
      where: {
        OR: [
          { supabaseUserId: sessionUser.id },
          ...(sessionUser.email ? [{ email: sessionUser.email.toLowerCase() }] : []),
        ],
      },
      select: { id: true, email: true, firstName: true, accountStatus: true },
    })

    if (!prismaUser) {
      // No Prisma row - nothing app-side to soft-delete. Still sign the
      // user out so the session is invalidated and surface success: the
      // user's request to be erased is honoured.
      await supabase.auth.signOut().catch(() => {})
      return NextResponse.json({
        success: true,
        scheduledPurgeAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      })
    }

    const now = new Date()
    const scheduledPurgeAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)

    if (prismaUser.accountStatus !== 'DELETED') {
      await prisma.user.update({
        where: { id: prismaUser.id },
        data: {
          accountStatus: 'DELETED',
          deletedAt: now,
        },
      })

      await prisma.auditLog
        .create({
          data: {
            userId: null,
            action: 'USER_REQUESTED_DELETION',
            resource: 'User',
            resourceId: prismaUser.id,
            details: {
              source: 'self-service',
              softDeletedAt: now.toISOString(),
              scheduledPurgeAt: scheduledPurgeAt.toISOString(),
              gracePeriodDays: 30,
            },
            ipAddress:
              request.headers.get('x-real-ip') ||
              request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
              'unknown',
          },
        })
        .catch((err) => {
          console.error('[account-delete] failed to write audit log', err)
        })
    }

    // 5. Sign the user out. Done before the email so a slow Resend call
    //    never delays session invalidation.
    await supabase.auth.signOut().catch(() => {})

    // 6. Best-effort confirmation email via Resend. We have a helper at
    //    src/lib/email/resend.ts so use it directly. The helper is safe
    //    when RESEND_API_KEY is missing - it just logs and returns.
    const recipient = prismaUser.email || sessionUser.email
    if (recipient) {
      const purgeDateLabel = scheduledPurgeAt.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      const firstNameSafe = escapeHtml(prismaUser.firstName || 'there')
      const purgeDateSafe = escapeHtml(purgeDateLabel)
      sendViaResend({
        to: recipient,
        subject: 'Your English Hub account has been scheduled for deletion',
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
            <h1 style="font-size: 20px; margin: 0 0 12px;">Hi ${firstNameSafe},</h1>
            <p style="line-height: 1.6; font-size: 15px;">
              Your English Hub account has been scheduled for deletion.
              All personal data - your profile, scores, and history - will be
              permanently removed on <strong>${purgeDateSafe}</strong>.
            </p>
            <p style="line-height: 1.6; font-size: 15px;">
              Aggregate analytics will be anonymised and retained for service
              improvement only - they cannot be linked back to you.
            </p>
            <p style="line-height: 1.6; font-size: 15px;">
              <strong>Changed your mind?</strong> Sign in any time before
              ${purgeDateSafe} and contact
              <a href="mailto:dpo@theenglishhub.app" style="color: #0f766e;">dpo@theenglishhub.app</a>
              to restore your account.
            </p>
            <p style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
              Sent under UK GDPR Art.17 (right to erasure). The English Hub ·
              Upskill Energy Limited · ICO ZC016690.
            </p>
          </div>
        `.trim(),
        text: [
          `Hi ${prismaUser.firstName || 'there'},`,
          ``,
          `Your English Hub account has been scheduled for deletion.`,
          `All personal data (profile, scores, history) will be permanently`,
          `removed on ${purgeDateLabel}.`,
          ``,
          `Aggregate analytics will be anonymised and retained for service`,
          `improvement only - they cannot be linked back to you.`,
          ``,
          `Changed your mind? Sign in before ${purgeDateLabel} and contact`,
          `dpo@theenglishhub.app to restore your account.`,
          ``,
          `Sent under UK GDPR Art.17 (right to erasure).`,
          `The English Hub · Upskill Energy Limited · ICO ZC016690`,
        ].join('\n'),
        replyTo: 'dpo@theenglishhub.app',
        tags: [
          { name: 'category', value: 'account' },
          { name: 'event', value: 'deletion-scheduled' },
        ],
      }).catch((err) => {
        console.error('[account-delete] confirmation email failed', err)
      })
    }

    return NextResponse.json({
      success: true,
      scheduledPurgeAt: scheduledPurgeAt.toISOString(),
    })
  } catch (err) {
    console.error('[account-delete] unexpected error', err)
    return NextResponse.json(
      {
        error: 'Something went wrong. Please try again or contact dpo@theenglishhub.app.',
      },
      { status: 500 },
    )
  }
}
