import { NextRequest, NextResponse } from 'next/server'

import { sendEmail } from '@/lib/email'
import { runCron } from '@/lib/cron/observability'
import { authoriseCronRequest } from '@/lib/cron/auth'
import { gatherDigest, needsAttention, renderDigestText } from '@/lib/ops/operator-digest'

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
