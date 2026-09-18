import Link from 'next/link'
import { PRICING } from '@/constants/pricing'
import { t } from '@/lib/i18n/t'

/**
 * What a trialist sees on day 8.
 *
 * THE DEFECT THIS FIXES (19 September 2026). The trial countdown banner hides
 * the moment the trial end is in the past - `TrialCountdownBannerServer`
 * short-circuits on `!trialEndsAt` - and nothing replaced it. So at 04:15 on
 * day 8 the expiry cron flips the account to free and the dashboard simply
 * goes quiet: no banner, no explanation, and the AI marking link still sitting
 * there ungated, ready to refuse them.
 *
 * That is the exact moment a trialist decides whether to pay. The product had
 * nothing to say.
 *
 * WHAT IT DELIBERATELY DOES NOT SAY. No countdown, no "last chance", no
 * scarcity: the offer architecture bans unevidenced urgency, and there is no
 * deadline here to be honest about. It states what happened, what they keep,
 * and what it costs. Prices come from src/constants/pricing.ts so they cannot
 * drift from the checkout.
 */
export async function NotOnProCard({
  kind,
  endedAt,
  className = '',
}: {
  kind: 'trial-ended' | 'never-trialed'
  endedAt: Date | null
  className?: string
}) {
  const [title, endedTitle, body, cta, keeps] = await Promise.all([
    t('billing.notpro.title'),
    t('billing.notpro.ended_title'),
    t('billing.notpro.body'),
    t('billing.notpro.cta'),
    t('billing.notpro.keeps'),
  ])

  // Only claim a date when there is one. A card that reads "your trial ended
  // on Invalid Date" is worse than one that does not mention the date at all.
  const showDate =
    kind === 'trial-ended' && endedAt instanceof Date && !Number.isNaN(endedAt.getTime())

  const heading = showDate
    ? endedTitle.replace(
        '{date}',
        endedAt!.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }),
      )
    : title

  return (
    <div
      className={`rounded-xl border border-primary/30 bg-primary/5 p-5 ${className}`}
      data-testid="not-on-pro-card"
    >
      <h2 className="text-base font-semibold text-foreground">{heading}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      <p className="mt-1 text-sm text-muted-foreground">{keeps}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Link
          href="/pricing?plan=student_monthly"
          className="inline-flex items-center rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          {cta}
        </Link>
        <span className="text-xs text-muted-foreground">
          &pound;{PRICING.STUDENT_MONTHLY}/month, or &pound;{PRICING.STUDENT_ANNUAL}/year.
        </span>
      </div>
    </div>
  )
}
