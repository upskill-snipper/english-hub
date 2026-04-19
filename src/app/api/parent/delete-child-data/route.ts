// Cycle 7 / Identity PR-3: lookups prefer supabaseUserId over email.
import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'
import { RETENTION_PERIODS } from '@/lib/data-retention'

// ─── POST: Parent requests deletion of their child's account data ─────────
//
// Children's Code Standard 11 — Parental Controls
// Parents/guardians can request deletion of their child's data.
// This triggers a soft-delete with a 30-day grace period before
// hard-deletion is carried out by the data-retention cron.

export async function POST(request: NextRequest) {
  try {
    // ── Authenticate ───────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 })
    }

    const parentBySupabaseId = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: {
        id: true,
        role: true,
        accountStatus: true,
        email: true,
        firstName: true,
      },
    })
    // Fallback for pre-backfill or mismatched rows — logged as a warning.
    const parent =
      parentBySupabaseId ??
      (await prisma.user.findUnique({
        where: { email: authUser.email!.toLowerCase() },
        select: {
          id: true,
          role: true,
          accountStatus: true,
          email: true,
          firstName: true,
        },
      }))
    if (parent && !parentBySupabaseId) {
      console.warn('[identity] Prisma row matched by email, not supabaseUserId', {
        supabaseUserId: authUser.id,
        prismaUserId: parent.id,
      })
    }

    if (!parent || parent.accountStatus !== 'ACTIVE') {
      return NextResponse.json({ error: 'Session expired. Please log in again.' }, { status: 401 })
    }

    // Only parents can initiate child data deletion
    if (parent.role !== 'PARENT') {
      return NextResponse.json(
        { error: 'Only parent accounts can request child data deletion.' },
        { status: 403 },
      )
    }

    // ── Rate limit ─────────────────────────────────────────────────────
    const rl = await rateLimit(`parent-delete-child:${parent.id}`, {
      limit: 3,
      windowSeconds: 3600,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          },
        },
      )
    }

    // ── Parse body ─────────────────────────────────────────────────────
    const body = await request.json().catch(() => ({}))
    const { childId } = body as { childId?: string }

    if (!childId || typeof childId !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid childId.' }, { status: 400 })
    }

    // ── Verify parent is linked to the child account ───────────────────
    const child = await prisma.user.findUnique({
      where: { id: childId },
      select: {
        id: true,
        parentId: true,
        role: true,
        accountStatus: true,
        isMinor: true,
        firstName: true,
        email: true,
      },
    })

    if (!child) {
      return NextResponse.json({ error: 'Child account not found.' }, { status: 404 })
    }

    if (child.parentId !== parent.id) {
      return NextResponse.json(
        { error: 'You are not linked to this child account.' },
        { status: 403 },
      )
    }

    if (child.accountStatus === 'DELETED') {
      return NextResponse.json(
        { error: 'This account has already been scheduled for deletion.' },
        { status: 409 },
      )
    }

    // ── Soft-delete the child account (30-day grace period) ────────────
    const now = new Date()
    const gracePeriodEndsAt = new Date(now)
    gracePeriodEndsAt.setDate(
      gracePeriodEndsAt.getDate() + RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS,
    )

    await prisma.$transaction(async (tx) => {
      // 1. Soft-delete the child account
      await tx.user.update({
        where: { id: childId },
        data: {
          accountStatus: 'DELETED',
          deletedAt: now,
        },
      })

      // 2. Log the request for compliance audit trail
      await tx.auditLog.create({
        data: {
          userId: parent.id,
          action: 'PARENT_INITIATED_CHILD_DATA_DELETION',
          resource: 'User',
          resourceId: childId,
          details: {
            parentId: parent.id,
            parentEmail: parent.email,
            childId: childId,
            childIsMinor: child.isMinor,
            childFirstName: child.firstName,
            gracePeriodDays: RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS,
            gracePeriodEndsAt: gracePeriodEndsAt.toISOString(),
            deletionMethod: 'parent_portal',
            complianceStandard: "Children's Code Standard 11 – Parental Controls",
            requestedAt: now.toISOString(),
          },
          ipAddress:
            request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown',
        },
      })
    })

    // ── Send confirmation email to parent ───────────────────────────────
    const formattedDate = gracePeriodEndsAt.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    try {
      await sendEmail(
        parent.email,
        `Data deletion request confirmed for ${child.firstName}'s account`,
        buildParentDeletionConfirmationEmail(parent.firstName, child.firstName, formattedDate),
      )
    } catch (emailErr) {
      // Email failure should not block the deletion request
      console.error('[parent/delete-child-data] Failed to send confirmation email:', emailErr)
    }

    return NextResponse.json(
      {
        message: 'Deletion request submitted successfully.',
        childId,
        gracePeriodDays: RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS,
        gracePeriodEndsAt: gracePeriodEndsAt.toISOString(),
        deletionScheduledFor: gracePeriodEndsAt.toISOString(),
      },
      { status: 200 },
    )
  } catch (err) {
    console.error('[parent/delete-child-data] Error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

// ─── Email template ────────────────────────────────────────────────────────

function buildParentDeletionConfirmationEmail(
  parentName: string,
  childName: string,
  deletionDate: string,
): string {
  return `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background-color: #1A5276; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">The English Hub</h1>
      </div>
      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <p>Dear ${parentName},</p>

        <p>We have received your request to delete <strong>${childName}'s</strong>
           account data from The English Hub.</p>

        <h3 style="margin-top: 24px; color: #1A5276;">What happens next</h3>
        <ul style="line-height: 1.8; padding-left: 20px;">
          <li>${childName}'s account has been deactivated immediately.</li>
          <li>All personal data (essays, progress, AI feedback, and profile information)
              will be permanently deleted on or after:</li>
        </ul>

        <p style="font-weight: 600; color: #1A5276; font-size: 18px; text-align: center;">
          ${deletionDate}
        </p>

        <h3 style="margin-top: 24px; color: #1A5276;">Data retained for legal reasons</h3>
        <ul style="line-height: 1.8; padding-left: 20px; color: #555;">
          <li><strong>Safeguarding records</strong> &ndash; retained until age 25 or 7 years
              (whichever is longer), as required by UK safeguarding legislation.</li>
          <li><strong>Payment records</strong> &ndash; retained for 7 years as required
              by HMRC.</li>
          <li><strong>Anonymised audit logs</strong> &ndash; retained for compliance
              but cannot be linked back to ${childName}.</li>
        </ul>

        <h3 style="margin-top: 24px; color: #1A5276;">Changed your mind?</h3>
        <p>You can cancel this request at any time during the 30-day grace period
           by contacting our Data Protection Officer at
           <a href="mailto:dpo@theenglishhub.app" style="color: #2E86C1;">dpo@theenglishhub.app</a>.</p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 12px; color: #9ca3af;">
          This data deletion was requested via the Parent Portal under the
          ICO Children's Code (Age Appropriate Design Code), Standard 11 &ndash;
          Parental Controls, and UK GDPR Article 17 (Right to Erasure).
          If you did not make this request, please contact us immediately at
          <a href="mailto:dpo@theenglishhub.app" style="color: #2E86C1;">dpo@theenglishhub.app</a>.
        </p>
      </div>
    </div>
  `
}
