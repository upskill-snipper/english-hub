/**
 * /redeem/success - post-Stripe-Checkout confirmation page.
 *
 * Stripe redirects here after a successful promo-coded Checkout Session
 * completes on `/redeem`. We do not do any reconciliation work in the
 * browser - that is the job of the Stripe webhook at `/api/stripe/webhook`,
 * which updates the `Subscription` row that both web and mobile read.
 *
 * The page's two jobs:
 *   1. Reassure the user that the redemption worked.
 *   2. Offer a deep link back into the mobile app via
 *      `theenglishhub://paywall?redeemed=1`. If the app is installed, iOS
 *      / Android honour the custom scheme and the app opens with a success
 *      toast (the app reads the `redeemed=1` flag on mount). If the app
 *      is not installed, the link silently fails and the user stays on
 *      this page - we do not prompt an App Store install since Apple
 *      § 3.1.1 treats steering-to-install less strictly than steering-to-
 *      external-payment, but we err on the side of not adding any such
 *      banner here.
 *
 * British English in copy.
 */

import type * as React from 'react'
import Link from 'next/link'

interface RedeemSuccessPageProps {
  /**
   * Next.js app router passes searchParams as a Promise in async server
   * components. We intentionally do not read it here - the Stripe session
   * ID is available via `{CHECKOUT_SESSION_ID}` in the success URL but it
   * is webhook reconciliation, not this page, that acts on it.
   */
  readonly searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function RedeemSuccessPage(
  _props: RedeemSuccessPageProps,
): Promise<React.JSX.Element> {
  const deepLink = 'theenglishhub://paywall?redeemed=1'

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">You&rsquo;re all set</h1>
        <p className="text-muted-foreground">
          Your subscription is now active. If you use the English Hub mobile app, the new
          entitlement will appear automatically the next time you open the app.
        </p>
      </header>

      <div className="space-y-4 rounded-lg border border-border bg-card p-6">
        <h2 className="text-base font-semibold">Using the mobile app?</h2>
        <p className="text-sm text-muted-foreground">
          Tap the button below to return to the app. Your Premium access will be reflected in the
          app within a few seconds - no in-app purchase is required.
        </p>
        <a
          href={deepLink}
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Open the English Hub app
        </a>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Prefer to keep using the web?{' '}
        <Link href="/dashboard" className="underline">
          Head to your dashboard.
        </Link>
      </p>

      <p className="mt-4 text-xs text-muted-foreground">
        You will receive an email receipt from Stripe shortly.
      </p>
    </div>
  )
}
