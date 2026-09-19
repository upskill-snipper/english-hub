import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { runCron } from '@/lib/cron/observability'
import { authoriseCronRequest } from '@/lib/cron/auth'

export const dynamic = 'force-dynamic'

/**
 * Cron: did any safeguarding alert fail to reach the designated lead?
 *
 * THE DEFECT THIS FIXES (19 September 2026)
 *
 * When a child reports a safeguarding concern, /api/safeguarding/report emails
 * the designated safeguarding lead. If every recipient fails, it writes an
 * audit row - deliberately, and with a comment saying the record exists "so
 * the failure surfaces in the audit log / compliance check rather than
 * vanishing".
 *
 * Nothing reads it. A repo-wide search for SAFEGUARDING_ALERT_DELIVERY_FAILED
 * returns exactly one hit: the line that writes it. `prisma.auditLog` is read
 * in two places, neither of which aggregates - a DSAR export of one user's own
 * rows, and a retention timestamp.
 *
 * So the failure did vanish. A child's disclosure could fail to reach a human
 * and the only trace would be a row nobody queries and a console line in a
 * serverless log. Until 18 September that was not hypothetical: `sendEmail()`
 * was pointed at an unconfigured SMTP host, so EVERY safeguarding alert failed.
 *
 * WHAT THIS DOES, AND WHAT IT DELIBERATELY DOES NOT
 *
 * It counts failures in a rolling window and makes them loud three ways:
 *   • it THROWS, which runCron turns into a Sentry captureException and a 500,
 *     so the Vercel cron dashboard shows the run as FAILED - not a green tick
 *     with bad news inside its JSON;
 *   • console.error with every reference number;
 *   • an email, ONLY when SAFEGUARDING_ESCALATION_EMAIL is set.
 *
 * The email is opt-in because wiring an automatic send is the owner's call,
 * not mine. The first two need no configuration and work today. That ordering
 * is deliberate: a check that stays inert until somebody sets a variable is
 * the same class of defect as the one being fixed.
 *
 * It reads and counts. It sends nothing to the child, touches no report, and
 * changes no state.
 */

/** How far back to look. Longer than the daily cadence, so one missed run does not hide a failure. */
const WINDOW_HOURS = 72

async function executeSafeguardingAlertCheck(): Promise<Response> {
  return runCron('safeguarding-alert-check', async () => {
    const since = new Date(Date.now() - WINDOW_HOURS * 60 * 60 * 1000)

    const failures = await prisma.auditLog.findMany({
      where: {
        action: 'SAFEGUARDING_ALERT_DELIVERY_FAILED',
        timestamp: { gte: since },
      },
      select: { id: true, resourceId: true, timestamp: true, details: true },
      orderBy: { timestamp: 'desc' },
      take: 50,
    })

    if (failures.length === 0) {
      return { ok: true, windowHours: WINDOW_HOURS, failures: 0 }
    }

    // Reference numbers only. The details column carries no free text from the
    // child, and this must not become a second copy of a disclosure.
    const references = failures
      .map((f) => {
        const d = f.details as { referenceNumber?: unknown; severity?: unknown } | null
        const ref = typeof d?.referenceNumber === 'string' ? d.referenceNumber : f.resourceId
        const sev = typeof d?.severity === 'string' ? d.severity : 'unknown'
        return `${ref} (severity ${sev}, ${f.timestamp.toISOString()})`
      })
      .slice(0, 20)

    const summary =
      `${failures.length} safeguarding alert(s) failed to reach the designated lead ` +
      `in the last ${WINDOW_HOURS} hours.`

    console.error(`[cron:safeguarding-alert-check] ${summary}\n  ${references.join('\n  ')}`)

    const escalationTo = process.env.SAFEGUARDING_ESCALATION_EMAIL?.trim()
    let emailed = false
    if (escalationTo) {
      const body =
        `<p><strong>${summary}</strong></p>` +
        `<p>Each one is a report a child submitted that did not reach a human by email. ` +
        `Open the safeguarding records for these references and action them directly.</p>` +
        `<ul>${references.map((r) => `<li>${r}</li>`).join('')}</ul>` +
        `<p>This message lists reference numbers only. It contains nothing the child wrote.</p>`
      const res = await sendEmail(
        escalationTo,
        `[URGENT] ${failures.length} safeguarding alert(s) undelivered`,
        body,
        `${summary}\n\n${references.join('\n')}`,
      )
      emailed = res.success
      if (!res.success) {
        // The escalation path for a failed alert has itself failed. Sentry
        // already has the summary above; say so explicitly so the log makes
        // the double failure obvious.
        console.error(
          `[cron:safeguarding-alert-check] escalation email ALSO failed: ${res.error ?? 'unknown'}`,
        )
      }
    }

    // THROW, rather than return a body saying "ok: false".
    //
    // runCron turns a throw into a Sentry captureException and a 500, which is
    // what makes the Vercel cron dashboard show the run as FAILED. A green
    // tick with undelivered safeguarding alerts inside its JSON is precisely
    // the shape of failure this route exists to remove, and returning one
    // would reproduce it one level up.
    //
    // The message carries the reference numbers so the Sentry event is
    // actionable without opening the database.
    throw new Error(
      `${summary} References: ${references.join('; ')}. ` +
        `Escalation email ${escalationTo ? (emailed ? 'sent' : 'FAILED') : 'not configured'}.`,
    )
  })
}

export async function GET(request: NextRequest): Promise<Response> {
  const auth = authoriseCronRequest(request, 'safeguarding-alert-check')
  if (!auth.ok) return auth.response

  return executeSafeguardingAlertCheck()
}

export async function POST(request: NextRequest): Promise<Response> {
  // Manual invocation uses the same Bearer shape as the scheduled GET.
  return GET(request)
}
