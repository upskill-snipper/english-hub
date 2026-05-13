'use client'

/**
 * Plain text link to the Trustpilot consumer review page. Always renders,
 * even without the business unit ID env — used in the footer so the page
 * never has a dead slot.
 *
 * Label resolves through the i18n dictionary so AR mode renders the
 * Khaleeji string (with "Trustpilot" itself staying Latin per the brand
 * policy). Callers can still pass an explicit `label` to override.
 */

import { useT } from '@/lib/i18n/use-t'

export function TrustpilotReviewLink({ className, label }: { className?: string; label?: string }) {
  const t = useT()
  const resolved = label ?? t('trustpilot.read_reviews')
  return (
    <a
      href="https://uk.trustpilot.com/review/theenglishhub.app"
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ?? 'text-sm text-[#B5B8B3]/80 transition-colors duration-200 hover:text-[#FBF7F0]'
      }
    >
      {resolved}
    </a>
  )
}

export default TrustpilotReviewLink
