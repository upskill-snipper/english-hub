import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { runCron } from '@/lib/cron/observability'
import { authoriseCronRequest } from '@/lib/cron/auth'

export const dynamic = 'force-dynamic'

/**
 * Cron: the daily operator digest (REL-4).
 *
 * THE PROBLEM THIS EXISTS TO FIX
 *
 * Several failure signals in this product exist only as rows that nothing
 * reads. The operator guide's daily loop asks a human to check them by hand
 * before 07:00, which means they are checked when somebody remembers.
 *
 * `prisma.auditLog` is written by nineteen different actions and read in two
 * places, neither of which aggregates: a DSAR export of one user's own rows,
 * and a retention timestamp. So `USER_ERASURE_FAILED` - a GDPR erasure that
 * did not happen - is a row in a table nobody queries. The safeguarding
 * delivery failure has its own cron since 19 September; nothing else does.
 *
 * WHAT IT REPORTS, AND WHY EACH ONE
 *
 * Every figure below is a count this application can compute from its own
 * database. Nothing here calls Stripe, and nothing here is estimated.
 *
 *   • Safeguarding reports still OPEN, and the oldest one's age. A child's
 *     disclosure sitting unread is the worst thing on this list.
 *   • Safeguarding alert deliveries that failed. Duplicated from that cron
 *     deliberately: two independent paths to the same fact is the right amount
 *     of redundancy for this particular fact.
 *   • Erasures that failed. A GDPR obligation that silently did not happen.
 *   • Data access requests still PENDING, and the oldest. The statutory clock
 *     is one month.
 *   • Account deletion requests still outstanding.
 *
 * WHAT IT DELIBERATELY DOES NOT REPORT, stated so a quiet digest is not read
 * as more than it is:
 *
 *   • Stripe reconciliation. That needs live Stripe reads and belongs with the
 *     billing work; a digest that half-checked it would be worse than one that
 *     says it does not.
 *   • AI and marking health. `/api/health/ai`, `/api/health/marking` and
 *     `/api/health/schema` already run as their own crons at 06:30, 06:35 and
 *     06:40 and fail loudly on their own. Re-running them here would double
 *     the cost and add a second place for the result to disagree.
 *   • Webhook freshness. There is no stored last-event timestamp to read, and
 *     inventing one is a schema change rather than a digest.
 *
 * THE EMAIL IS OPT-IN, following the safeguarding cron's precedent. It sends
 * only when `OPERATOR_DIGEST_EMAIL` is set. Wiring an automatic send to a real
 * address is the owner's call, and an unset variable must mean silence rather
 * than a guess at who should receive it.
 *
 * It does NOT throw on findings. Unlike the safeguarding cron, whose whole
 * point is that a failure must turn the run red, this is a summary: an OPEN
 * safeguarding report is normal operations, and a cron that failed every
 * morning would be a cron nobody looked at. It throws only when it cannot
 * gather the numbers, which is a real fault.
 */

/** Rows written when a safeguarding alert reached nobody. */
const DELIVERY_FAILED = 'SAFEGUARDING_ALERT_DELIVERY_FAILED'
/** Rows written when an erasure could not be completed. */
const ERASURE_FAILED = 'USER_ERASURE_FAILED'

const DAY_MS = 24 * 60 * 60 * 1000

function daysOld(from: Date | null | undefined, now: number): number | null {
  if (!from) return null
  return Math.floor((now - from.getTime()) / DAY_MS)
}

export interface DigestFigures {
  openSafeguarding: number
  oldestSafeguardingDays: number | null
  deliveryFailures24h: number
  erasureFailures24h: number
  pendingDsar: number
  oldestDsarDays: number | null
  erasureRequestsOpen: number
}

/** Everything the digest reports, gathered in one place so it can be tested. */
export async function gatherDigest(now: number): Promise<DigestFigures> {
  const since = new Date(now - DAY_MS)

  const [openSafeguarding, oldestSafeguarding, deliveryFailures, erasureFailures, pendingDsarRows] =
    await Promise.all([
      prisma.safeguardingReport.count({ where: { status: 'OPEN' } }),
      prisma.safeguardingReport.findFirst({
        where: { status: 'OPEN' },
        orderBy: { createdAt: 'asc' },
        select: { createdAt: true },
      }),
      prisma.auditLog.count({ where: { action: DELIVERY_FAILED, timestamp: { gte: since } } }),
      prisma.auditLog.count({ where: { action: ERASURE_FAILED, timestamp: { gte: since } } }),
      prisma.dataAccessRequest.findMany({
        where: { status: 'PENDING' },
        orderBy: { requestedAt: 'asc' },
        select: { requestedAt: true, type: true },
      }),
    ])

  return {
    openSafeguarding,
    oldestSafeguardingDays: daysOld(oldestSafeguarding?.createdAt, now),
    deliveryFailures24h: deliveryFailures,
    erasureFailures24h: erasureFailures,
    pendingDsar: pendingDsarRows.length,
    oldestDsarDays: daysOld(pendingDsarRows[0]?.requestedAt, now),
    // 'ERASURE', not 'DELETION'. The enum has ACCESS, PORTABILITY, ERASURE and
    // RECTIFICATION; guessing the name would have compiled to a constant zero
    // under a looser type and reported "no deletion requests" for ever.
    erasureRequestsOpen: pendingDsarRows.filter((r) => r.type === 'ERASURE').length,
  }
}

/**
 * Does anything here need a human today?
 *
 * Used for the subject line only. A digest whose subject never changes is one
 * that stops being opened, and the whole point is that somebody reads it on the
 * morning it matters.
 */
export function needsAttention(f: DigestFigures): boolean {
  return (
    f.deliveryFailures24h > 0 ||
    f.erasureFailures24h > 0 ||
    f.openSafeguarding > 0 ||
    (f.oldestDsarDays !== null && f.oldestDsarDays >= 21)
  )
}

export function renderDigestText(f: DigestFigures, isoDate: string): string {
  const lines = [
    `The English Hub - operator digest for ${isoDate}`,
    '',
    'SAFEGUARDING',
    `  Open reports: ${f.openSafeguarding}${
      f.oldestSafeguardingDays !== null ? ` (oldest ${f.oldestSafeguardingDays} days)` : ''
    }`,
    `  Alert deliveries that failed in the last 24h: ${f.deliveryFailures24h}`,
    '',
    'DATA RIGHTS',
    `  Access requests pending: ${f.pendingDsar}${
      f.oldestDsarDays !== null
        ? ` (oldest ${f.oldestDsarDays} days; statutory limit is one month)`
        : ''
    }`,
    `  Of those, erasure requests: ${f.erasureRequestsOpen}`,
    `  Erasures that failed in the last 24h: ${f.erasureFailures24h}`,
    '',
    'NOT COVERED BY THIS DIGEST',
    '  Stripe reconciliation - needs live Stripe reads, tracked separately.',
    '  AI, marking and schema health - their own crons at 06:30, 06:35 and 06:40.',
    '  Webhook freshness - no stored last-event timestamp to read.',
    '',
    'These are counts from our own database. A quiet digest means these',
    'particular numbers are quiet, not that everything is well.',
  ]
  return lines.join('\n')
}

export async function GET(request: NextRequest) {
  const auth = authoriseCronRequest(request, 'operator-digest')
  if (!auth.ok) return auth.response

  return runCron('operator-digest', async () => {
    const now = Date.now()
    const figures = await gatherDigest(now)
    const isoDate = new Date(now).toISOString().slice(0, 10)
    const text = renderDigestText(figures, isoDate)

    // Always in the log, whether or not anybody has configured an address.
    console.log(`[operator-digest] ${isoDate}`, JSON.stringify(figures))

    const to = process.env.OPERATOR_DIGEST_EMAIL
    let emailed = false
    if (to) {
      const subject = needsAttention(figures)
        ? `Operator digest ${isoDate} - needs attention`
        : `Operator digest ${isoDate} - nothing outstanding`
      const result = await sendEmail(to, subject, `<pre>${text}</pre>`, text)
      emailed = result.success
      if (!result.success) {
        // Not a throw. The digest's job is to report; failing to post it is
        // worth a loud line, but turning the run red would hide the figures
        // behind an error page.
        console.error('[operator-digest] could not send:', result.error)
      }
    }

    return { ...figures, emailed, recipientConfigured: Boolean(to) }
  })
}
