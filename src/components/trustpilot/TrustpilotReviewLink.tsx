/**
 * Plain text link to the Trustpilot consumer review page. Always renders,
 * even without the business unit ID env — used in the footer so the page
 * never has a dead slot.
 */

export function TrustpilotReviewLink({
  className,
  label = 'Read our reviews on Trustpilot',
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href="https://uk.trustpilot.com/review/theenglishhub.app"
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        'text-sm text-[#B5B8B3]/80 transition-colors duration-200 hover:text-[#FBF7F0]'
      }
    >
      {label}
    </a>
  )
}

export default TrustpilotReviewLink
