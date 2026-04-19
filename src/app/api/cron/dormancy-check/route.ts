import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { prisma } from '@/lib/prisma'
import { processChildDormancy } from '@/lib/privacy/dormancy'
import { sendEmail } from '@/lib/email'
import { RETENTION_PERIODS } from '@/lib/data-retention'
import { runCron } from '@/lib/cron/observability'

export const dynamic = 'force-dynamic'

// ─── Types ────────────────────────────────────────────────────────────────

interface AdultDormancyResult {
  warningsSent: { userId: string; email: string }[]
  errors: { userId?: string; step: string; message: string }[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────

function daysAgo(days: number): Date {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d
}

/**
 * GET /api/cron/dormancy-check
 *
 * Dedicated dormancy-warning endpoint. Identifies accounts that have been
 * inactive beyond their retention threshold and sends warning emails:
 *
 *   - Children (isMinor): >12 months inactivity (Children's Code Standard 8)
 *   - Adults: >24 months (730 days) inactivity
 *
 * Warnings are sent to account holders (and to parents for child accounts).
 * Accounts are marked as warned (SUSPENDED status) so they are not warned
 * twice. Actual deletion is handled by the /api/cron/data-retention endpoint.
 *
 * Runs daily at 3:30 AM (configured in vercel.json).
 * Protected by CRON_SECRET to prevent unauthorized invocation.
 */
export async function GET(request: NextRequest) {
  // ── Auth: verify CRON_SECRET ──────────────────────────────────────
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  const authHeader = request.headers.get('authorization')
  const incoming = Buffer.from(authHeader ?? '')
  const expected = Buffer.from(`Bearer ${cronSecret}`)
  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return runCron('dormancy-check', async () => {
    // ── 1. Child dormancy (12-month threshold) ────────────────────────
    // Uses the dedicated Children's Code Standard 8 logic which both
    // sends warnings and processes deletions for the grace period.

    let childDormancy = null
    try {
      childDormancy = await processChildDormancy(prisma)
    } catch (err) {
      console.error('[dormancy-check] Child dormancy processing failed:', err)
    }

    // ── 2. Adult dormancy (24-month / 730-day threshold) ──────────────
    // Identify active adult accounts that have not logged in for 2+ years
    // and send them a warning email. The account status is set to SUSPENDED
    // so the data-retention cron can soft-delete after the 30-day grace.

    const adultResult: AdultDormancyResult = {
      warningsSent: [],
      errors: [],
    }

    try {
      const inactiveCutoff = daysAgo(RETENTION_PERIODS.INACTIVE_ACCOUNT_DAYS)

      // P1 (Cycle 2): was `updatedAt: { lte: inactiveCutoff }` — any row
      // update (email change, preference toggle, Stripe customer id write)
      // reset dormancy, and conversely a user who logged in daily but
      // never triggered a write-path would be wrongly flagged. Now
      // querying on `lastLoginAt` which is populated by the login
      // handler. Fall back to `createdAt` when `lastLoginAt` is null —
      // that's the case for pre-migration accounts that haven't logged
      // in since the column was introduced; the fallback errs on the
      // side of NOT deleting them until they log in once.
      const inactiveAdults = await prisma.user.findMany({
        where: {
          isMinor: false,
          accountStatus: 'ACTIVE',
          OR: [
            { lastLoginAt: { lte: inactiveCutoff } },
            {
              AND: [{ lastLoginAt: null }, { createdAt: { lte: inactiveCutoff } }],
            },
          ],
        },
        select: { id: true, email: true, firstName: true },
        take: 100, // Rate-limit per run
      })

      for (const user of inactiveAdults) {
        try {
          // Mark as warned (SUSPENDED)
          await prisma.user.update({
            where: { id: user.id },
            data: { accountStatus: 'SUSPENDED' },
          })

          // Calculate deletion date (30 days from now)
          const deletionDate = new Date()
          deletionDate.setDate(
            deletionDate.getDate() + RETENTION_PERIODS.INACTIVE_WARNING_GRACE_DAYS,
          )

          const formattedDate = deletionDate.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })

          await sendEmail(
            user.email,
            'Your English Hub account will be deleted due to inactivity',
            buildAdultDormancyWarningEmail(user.firstName, formattedDate),
          )

          // Audit
          await prisma.auditLog.create({
            data: {
              userId: null,
              action: 'ADULT_DORMANCY_WARNING_SENT',
              resource: 'DataRetention',
              resourceId: user.id,
              details: {
                automated: true,
                reason: `No activity for ${RETENTION_PERIODS.INACTIVE_ACCOUNT_DAYS}+ days`,
                deletionScheduledFor: deletionDate.toISOString(),
                timestamp: new Date().toISOString(),
              },
              ipAddress: 'system',
            },
          })

          adultResult.warningsSent.push({ userId: user.id, email: user.email })
        } catch (err) {
          adultResult.errors.push({
            userId: user.id,
            step: 'adult_dormancy_warning',
            message: err instanceof Error ? err.message : String(err),
          })
        }
      }
    } catch (err) {
      adultResult.errors.push({
        step: 'adult_dormancy_query',
        message: err instanceof Error ? err.message : String(err),
      })
    }

    // ── Audit summary ─────────────────────────────────────────────────

    await prisma.auditLog.create({
      data: {
        userId: null,
        action: 'DORMANCY_CHECK_COMPLETED',
        resource: 'DataRetention',
        resourceId: 'system',
        details: {
          automated: true,
          childWarningsSent: childDormancy?.warningsSent.length ?? 0,
          childDeletions: childDormancy?.deletions.length ?? 0,
          childErrors: childDormancy?.errors.length ?? 0,
          adultWarningsSent: adultResult.warningsSent.length,
          adultErrors: adultResult.errors.length,
          timestamp: new Date().toISOString(),
        },
        ipAddress: 'system',
      },
    })

    return {
      childDormancy: childDormancy
        ? {
            warningsSent: childDormancy.warningsSent.length,
            deletions: childDormancy.deletions.length,
            errors: childDormancy.errors.length,
          }
        : null,
      adultDormancy: {
        warningsSent: adultResult.warningsSent.length,
        errors: adultResult.errors.length,
      },
    }
  })
}

// ─── Email template ───────────────────────────────────────────────────────

function buildAdultDormancyWarningEmail(firstName: string, deletionDate: string): string {
  return `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background-color: #1A5276; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">The English Hub</h1>
      </div>
      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <p>Dear ${firstName},</p>

        <p>We noticed that you have not logged in to your English Hub account
           for over two years.</p>

        <p>In line with our
           <a href="https://theenglishhub.app/privacy-policy" style="color: #2E86C1;">data retention policy</a>,
           we will automatically delete your account and all associated data on:</p>

        <p style="font-weight: 600; color: #1A5276; font-size: 18px; text-align: center;">
          ${deletionDate}
        </p>

        <h3 style="margin-top: 24px;">What can you do?</h3>
        <ul style="line-height: 1.8;">
          <li><strong>Keep your account</strong> &ndash;
              simply <a href="https://theenglishhub.app/auth/login" style="color: #2E86C1;">log in</a>
              before this date.</li>
          <li><strong>Download your data</strong> &ndash;
              visit your <a href="https://theenglishhub.app/dashboard/privacy" style="color: #2E86C1;">privacy settings</a>
              to export your essays and feedback before deletion.</li>
        </ul>

        <p>If you have any questions, please email us at
           <a href="mailto:dpo@theenglishhub.app" style="color: #2E86C1;">dpo@theenglishhub.app</a>.</p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 12px; color: #9ca3af;">
          This email was sent in accordance with our data retention policy under the
          UK General Data Protection Regulation (UK GDPR). If you believe you received
          this email in error, please contact
          <a href="mailto:dpo@theenglishhub.app" style="color: #2E86C1;">dpo@theenglishhub.app</a>.
        </p>
      </div>
    </div>
  `
}
