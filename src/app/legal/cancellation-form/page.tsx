import { permanentRedirect } from 'next/navigation'

export const metadata = {
  alternates: { canonical: 'https://theenglishhub.app/legal/cancellation-form' },
  // Hide from search index - old SEO traffic is preserved via the 308.
  robots: { index: false, follow: false },
}

/**
 * Legacy cancellation form - superseded by the Stripe Customer Portal.
 *
 * Subscription cancellations are now self-served via the hosted Stripe
 * portal (opened from `/account/billing` → "Manage Subscription"), which
 * handles cancel-at-period-end, payment-method updates, and invoice
 * history.
 *
 * For UK Consumer Contracts (Information, Cancellation and Additional
 * Charges) Regulations 2013 compliance, the model cancellation form is
 * still rendered inline on `/legal/cancellation`.
 */
export default function CancellationFormRedirect(): never {
  // 308 permanent redirect so search engines update their index. We send
  // the user to /account/billing where the "Manage Subscription" button
  // launches the Stripe Customer Portal.
  permanentRedirect('/account/billing')
}
