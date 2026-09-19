/**
 * What the daily operator digest reports, and how it reads.
 *
 * WHY THIS IS NOT IN THE ROUTE (20 September 2026). It was, and the build
 * failed. A Next.js App Router `route.ts` may export only the HTTP method
 * handlers and a short list of config values; anything else is rejected by the
 * generated type in `.next/types`. Exporting `gatherDigest` so a test could
 * import it broke `next build` with
 *
 *   Property 'gatherDigest' is incompatible with index signature.
 *
 * `npx tsc --noEmit` passes on that code, because the constraint lives in a
 * file that only exists after a build. Three green gates and a red build, which
 * is the exact shape this repository keeps finding: the check that ran was not
 * the check that mattered.
 *
 * So the logic lives here, where it can be imported and tested, and the route
 * is the handler and nothing else.
 *
 * See the route for what the digest covers and what it deliberately does not.
 */

import { prisma } from '@/lib/prisma'

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
