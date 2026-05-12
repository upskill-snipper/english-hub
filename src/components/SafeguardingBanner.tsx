import Link from 'next/link'
import { t } from '@/lib/i18n/t'

/**
 * A small, persistent safeguarding banner shown across the site.
 * Provides a visible link to the safeguarding report form and Childline.
 *
 * Body copy and CTAs are translated via the master dictionary so the
 * AR ("safeguard.*") variants are surfaced when the visitor is on the
 * Arabic locale. Keep "Childline" + the 0800 1111 number in Latin —
 * it's a UK regulator-recognised brand and the digits must remain
 * dial-able exactly as written.
 */
export async function SafeguardingBanner() {
  const [worried, helpPrefix, reportCta] = await Promise.all([
    t('safeguard.worried_prompt'),
    t('safeguard.childline_prefix'),
    t('safeguard.report_concern_cta'),
  ])

  return (
    <div className="w-full border-t border-primary/10 bg-primary/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2.5 sm:flex-row sm:gap-4">
        <div className="flex items-center gap-2 text-sm text-foreground">
          {/* Shield icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 shrink-0 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <strong className="font-medium">{worried}</strong>
            <span className="hidden sm:inline">
              {' '}
              &mdash; {helpPrefix}{' '}
              <a
                href="tel:08001111"
                className="font-semibold text-primary hover:text-primary/80 underline"
              >
                0800 1111
              </a>
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:08001111"
            className="text-xs font-semibold text-primary hover:text-primary/80 underline sm:hidden"
          >
            {helpPrefix} 0800 1111
          </a>
          <Link
            href="/legal/safeguarding"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {reportCta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
