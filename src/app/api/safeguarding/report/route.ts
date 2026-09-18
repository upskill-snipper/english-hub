import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { tryPrismaUserId } from '@/lib/identity'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// ─── Environment ────────────────────────────────────────────────────────

// Default to a MONITORED interim mailbox, not the not-yet-provisioned
// safeguarding@ address (the privacy page itself notes safeguarding@ is
// pending). Set DSL_EMAIL in production to the designated DSL inbox; until
// then alerts must still reach a human. FALLBACK is the last resort if the
// primary send fails - it must always be a live, monitored inbox.
const DSL_EMAIL = process.env.DSL_EMAIL || 'cj@upskillenergy.com'
const FALLBACK_DSL_EMAIL = process.env.DSL_FALLBACK_EMAIL || 'cj@upskillenergy.com'

// ─── Alert transport ────────────────────────────────────────────────────
//
// This route used to carry its own Resend fallback, added on 18 September 2026
// when production was found to have no SMTP settings. `sendEmail()` now makes
// that choice for every caller (see src/lib/email.ts), so the special case is
// gone and there is one transport rule for the whole codebase.
//
// ─── Request validation ─────────────────────────────────────────────────

const reportSchema = z.object({
  reportType: z.enum([
    'WORRIED_ABOUT_MYSELF',
    'WORRIED_ABOUT_SOMEONE',
    'PLATFORM_CONCERN',
    'OTHER',
  ]),
  description: z.string().min(1, 'Description is required').max(5000, 'Description is too long'),
  severity: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  reporterName: z.string().max(100).optional(),
  reporterContact: z.string().max(200).optional(),
})

// ─── Reference number generator ─────────────────────────────────────────

function generateReferenceNumber(): string {
  const prefix = 'SG'
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

// ─── DSL alert email ────────────────────────────────────────────────────

function buildAlertEmail(
  referenceNumber: string,
  reportType: string,
  severity: string,
  description: string,
  reporterName?: string,
  reporterContact?: string,
): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: ${severity === 'CRITICAL' ? '#E74C3C' : '#E74C3C'}; color: white; padding: 16px 24px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 18px;">
          URGENT: Safeguarding Report - ${severity}
        </h1>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
        <p style="margin: 0 0 16px; color: #374151; font-size: 14px;">
          A new safeguarding report requires your immediate attention.
        </p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 140px;">Reference</td>
            <td style="padding: 8px 0; color: #111827; font-weight: 600;">${referenceNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Type</td>
            <td style="padding: 8px 0; color: #111827;">${reportType.replace(/_/g, ' ')}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Severity</td>
            <td style="padding: 8px 0; color: #E74C3C; font-weight: 600;">${severity}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Reporter</td>
            <td style="padding: 8px 0; color: #111827;">${reporterName || 'Anonymous'}</td>
          </tr>
          ${
            reporterContact
              ? `<tr>
            <td style="padding: 8px 0; color: #6b7280;">Contact</td>
            <td style="padding: 8px 0; color: #111827;">${reporterContact}</td>
          </tr>`
              : ''
          }
        </table>
        <div style="margin-top: 16px; padding: 12px; background: #f9fafb; border-radius: 6px; border: 1px solid #e5e7eb;">
          <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px;">Description</p>
          <p style="margin: 0; color: #111827; font-size: 14px; white-space: pre-wrap;">${description}</p>
        </div>
        <p style="margin: 20px 0 0; color: #6b7280; font-size: 12px;">
          Log in to the admin safeguarding dashboard to manage this report.
        </p>
      </div>
    </div>
  `
}

// ─── POST /api/safeguarding/report ──────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 10 reports per hour per IP ─────────────────────────
    // Intentionally generous to avoid blocking genuine safeguarding reports
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`safeguarding-report:${ip}`, {
      limit: 10,
      windowSeconds: 3600,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. If this is urgent, please call Childline on 0800 1111.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const body = await request.json()
    const parsed = reportSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const { reportType, description, severity, reporterName, reporterContact } = parsed.data

    // Check for logged-in user (optional - reports can be anonymous)
    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser()
    const sessionUserId = authUser?.id ?? null
    // SafeguardingReport.reporterId and AuditLog.userId are foreign keys to
    // Prisma User.id (a cuid). Until 18 September 2026 this route wrote the
    // Supabase uuid into both, so with the constraints present in production
    // a signed-in child's report failed at insert (P2003) and the child was
    // told to call Childline instead. Resolve the Prisma id; null when the
    // account has no projection row, which keeps the report anonymous rather
    // than lost.
    const prismaUserId = sessionUserId ? await tryPrismaUserId(sessionUserId) : null

    const referenceNumber = generateReferenceNumber()

    // Build the description with optional reporter info appended
    const fullDescription = [
      description,
      reporterName ? `\n\n---\nReporter name: ${reporterName}` : '',
      reporterContact ? `\nReporter contact: ${reporterContact}` : '',
    ].join('')

    // Create the safeguarding report
    const report = await prisma.safeguardingReport.create({
      data: {
        reporterId: prismaUserId,
        reportType,
        description: fullDescription,
        severity: severity as 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL',
        status: 'OPEN',
      },
    })

    // Create audit log entry
    const ipAddress =
      request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    await prisma.auditLog.create({
      data: {
        userId: prismaUserId,
        action: 'SAFEGUARDING_REPORT_CREATED',
        resource: 'safeguarding_report',
        resourceId: report.id,
        details: {
          referenceNumber,
          reportType,
          severity,
          anonymous: !sessionUserId,
          hasReporterName: !!reporterName,
          hasReporterContact: !!reporterContact,
        },
        ipAddress,
      },
    })

    // Alert the DSL for EVERY report. Previously only HIGH/CRITICAL alerted,
    // so LOW/MEDIUM reports - a child disclosing harm they may have understated
    // - sat OPEN with nobody notified. On a children's product every report
    // must reach a human. sendEmail returns {success} and NEVER throws, so the
    // old .catch() was dead code: a failed alert looked like a success. We now
    // check the flag, retry once, fall back to a second monitored inbox, and
    // record an audit row if delivery still fails, so an undelivered
    // child-safety alert can never pass silently.
    {
      const emailHtml = buildAlertEmail(
        referenceNumber,
        reportType,
        severity,
        description,
        reporterName,
        reporterContact,
      )
      const subject = `[${severity}] Safeguarding Report ${referenceNumber}`

      let delivered = false
      let lastError = ''
      // Primary inbox twice (retry), then the fallback inbox if it is
      // actually a different address. With neither variable set both default
      // to the same interim mailbox, and pretending that is a fallback hid
      // the fact that there was none.
      const primaryInbox = DSL_EMAIL
      const recipients =
        FALLBACK_DSL_EMAIL === primaryInbox
          ? [primaryInbox, primaryInbox]
          : [primaryInbox, primaryInbox, FALLBACK_DSL_EMAIL]
      for (const recipient of recipients) {
        const result = await sendEmail(recipient, subject, emailHtml)
        if (result.success) {
          delivered = true
          break
        }
        lastError = result.error || 'unknown'
        console.error(
          `[safeguarding] DSL alert to ${recipient} failed for ${referenceNumber}: ${lastError}`,
        )
      }

      if (!delivered) {
        // Cannot email out - persist an unmistakable, queryable record so the
        // failure surfaces in the audit log / compliance check rather than
        // vanishing.
        await prisma.auditLog
          .create({
            data: {
              userId: prismaUserId,
              action: 'SAFEGUARDING_ALERT_DELIVERY_FAILED',
              resource: 'safeguarding_report',
              resourceId: report.id,
              details: { referenceNumber, severity, lastError },
              ipAddress,
            },
          })
          .catch((err) =>
            console.error('[safeguarding] failed to record alert-failure audit row:', err),
          )
      }
    }

    return NextResponse.json({
      success: true,
      referenceNumber,
      reportId: report.id,
    })
  } catch (error) {
    console.error('[safeguarding] Report submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit report. Please try again or call Childline on 0800 1111.' },
      { status: 500 },
    )
  }
}

// ─── GET /api/safeguarding/report (Admin: list reports) ─────────────────

export async function GET(request: NextRequest) {
  try {
    // Auth check: must be ADMIN
    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    // ── Identity: the session gives a SUPABASE uuid, Prisma is keyed on a cuid
    // This lookup used to be `prisma.user.findUnique({ where: { id: authUser.id } })`,
    // passing the Supabase auth uuid as a Prisma primary key. It matched nothing,
    // for anyone, ever - the same defect that silently broke the consent ledger,
    // erasure, DSAR export and the Stripe subscription record. Here it meant the
    // safeguarding queue answered 403 to every request including a genuine
    // administrator's. See src/lib/identity/.
    const prismaUserId = await tryPrismaUserId(authUser.id)
    const user = prismaUserId
      ? await prisma.user.findUnique({ where: { id: prismaUserId }, select: { role: true } })
      : null

    if (!user || user.role !== 'ADMIN') {
      // A safeguarding queue nobody can open is not a permissions outcome, it is
      // an operational failure, and on a children's product it must not be
      // silent. Reports still reach the DSL by email either way (see the POST
      // handler) - this is about whether anyone can triage what has arrived.
      const adminCount = await prisma.user
        .count({ where: { role: 'ADMIN', accountStatus: 'ACTIVE' } })
        .catch(() => -1)
      if (adminCount === 0) {
        console.error(
          '[safeguarding] SAFEGUARDING_QUEUE_UNREACHABLE no active Prisma User has role ADMIN, ' +
            'so this queue cannot be opened by anybody. Reports are still emailed to the DSL, but ' +
            'nothing can be assigned, tracked or closed. Grant ADMIN to the designated safeguarding ' +
            'lead, or decide deliberately that this surface authorises on ADMIN_EMAILS the way ' +
            'src/lib/admin-auth.ts does - that is a widening of access to child safeguarding data ' +
            'and is an owner decision, not a tidy-up.',
        )
      }
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 })
    }

    // Parse filters
    const { searchParams } = new URL(request.url)
    const statusParam = searchParams.get('status')
    const severityParam = searchParams.get('severity')

    const where: Prisma.SafeguardingReportWhereInput = {}
    if (statusParam) where.status = statusParam
    if (severityParam) where.severity = severityParam as 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'

    // Fetch reports (newest first)
    const reports = await prisma.safeguardingReport.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        reporter: {
          select: { firstName: true, lastName: true, email: true },
        },
        assignee: {
          select: { firstName: true, lastName: true },
        },
      },
    })

    // Fetch admin users for assignment dropdown
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN', accountStatus: 'ACTIVE' },
      select: { id: true, firstName: true, lastName: true },
      orderBy: { firstName: 'asc' },
    })

    return NextResponse.json({ reports, admins })
  } catch (error) {
    console.error('[safeguarding] List reports error:', error)
    return NextResponse.json({ error: 'Failed to load reports' }, { status: 500 })
  }
}
