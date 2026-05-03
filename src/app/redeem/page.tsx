/**
 * /redeem — public, deep-link-friendly promo-code redemption page.
 *
 * This page is the ONLY place we present promo-coded discount pricing. It
 * lives on the web at `theenglishhub.app/redeem` and is linked from:
 *
 *   - Mobile Settings → "Have a promo code?" (which opens this URL in the
 *     system browser; see `english-hub-mobile/src/features/promo/PromoCodeCopy.tsx`).
 *   - Affiliate-shared URLs.
 *   - The post-paywall "already subscribed via web" helper copy in the app.
 *
 * Apple compliance anchor: Apple § 3.1.1 forbids presenting promo-coded
 * discount pricing inside an app that uses IAP. The redemption surface must
 * therefore live on the web. After Stripe Checkout completes, the Stripe
 * webhook updates the `Subscription` row, and mobile recognises entitlement
 * via `/api/me/entitlements` on next foreground — no app-side UI changes
 * required.
 *
 * Flow:
 *   1. User lands on /redeem (optionally with `?ref=<deviceId>` or `?code=`).
 *   2. User enters or confirms a code and confirms the plan.
 *   3. We call `/api/promo/validate?code=…` to preview the discount.
 *   4. On confirm, we call `/api/promo/redeem` (auth required; unauth users
 *      are routed via sign-up first) and forward to Stripe Checkout.
 *   5. Stripe redirects to `/redeem/success?session_id=…` which then deep-
 *      links back into the app via `theenglishhub://paywall?redeemed=1` —
 *      the app shows a success toast and refreshes entitlements.
 *
 * British English in copy.
 */

'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

/** Matches the regex used by the validate and redeem endpoints. */
const CODE_REGEX = /^[A-Z0-9_-]{3,64}$/
const DEFAULT_PRODUCT_ID = 'student_annual'

interface ValidateApiResponse {
  valid: boolean
  discountPennies: number
  productIds: string[]
  reason?: string
}

interface RedeemApiResponse {
  url?: string
  error?: string
}

/** Convert pence to a £X.XX string for display. No rounding surprises. */
function formatPounds(pennies: number): string {
  return `£${(pennies / 100).toFixed(2)}`
}

/** Explain a validation failure in plain user-facing language. */
function reasonToMessage(reason: string | undefined): string {
  switch (reason) {
    case 'invalid_format':
      return 'That code contains characters we don’t recognise. Please check and try again.'
    case 'unknown_code':
      return 'We don’t recognise that code. Check the spelling and try again.'
    default:
      return 'We could not verify that code right now. Please try again shortly.'
  }
}

export default function RedeemPage() {
  const searchParams = useSearchParams()
  const initialCode = (searchParams.get('code') ?? '').toUpperCase()
  const deviceRef = searchParams.get('ref')
  const cancelled = searchParams.get('cancelled') === '1'

  const [code, setCode] = useState<string>(initialCode)
  const [validation, setValidation] = useState<ValidateApiResponse | null>(null)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [isValidating, setIsValidating] = useState<boolean>(false)
  const [isRedeeming, setIsRedeeming] = useState<boolean>(false)
  const [redeemError, setRedeemError] = useState<string | null>(null)

  /** Quietly validate whenever the user supplies a syntactically valid code. */
  const validateCode = useCallback(async (raw: string): Promise<void> => {
    const normalised = raw.trim().toUpperCase()
    if (!CODE_REGEX.test(normalised)) {
      setValidation(null)
      setValidationError(null)
      return
    }

    setIsValidating(true)
    setValidationError(null)
    try {
      const res = await fetch(`/api/promo/validate?code=${encodeURIComponent(normalised)}`, {
        method: 'GET',
      })
      const payload = (await res.json()) as ValidateApiResponse
      setValidation(payload)
      if (!payload.valid) {
        setValidationError(reasonToMessage(payload.reason))
      }
    } catch {
      setValidationError(
        'We could not reach the server. Please check your connection and try again.',
      )
      setValidation(null)
    } finally {
      setIsValidating(false)
    }
  }, [])

  // Auto-validate on first paint when a code arrives via the URL.
  useEffect(() => {
    if (initialCode.length > 0) {
      void validateCode(initialCode)
    }
  }, [initialCode, validateCode])

  const onBlur = useCallback((): void => {
    if (code.length > 0) {
      void validateCode(code)
    }
  }, [code, validateCode])

  const onRedeem = useCallback(async (): Promise<void> => {
    if (!validation?.valid) return
    const productId = validation.productIds[0] ?? DEFAULT_PRODUCT_ID
    setIsRedeeming(true)
    setRedeemError(null)
    try {
      const res = await fetch('/api/promo/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim().toUpperCase(), productId }),
      })
      const payload = (await res.json()) as RedeemApiResponse
      if (res.status === 401) {
        // Route unauthenticated users through sign-up, preserving the code
        // so they come straight back here afterwards. The `next` param is
        // forward-compatible for when /auth/register starts honouring it;
        // until then users land on register and reach /redeem manually.
        // (Note: the auth route is `/auth/register`, not `/auth/sign-up` —
        // a stale path here previously 404'd promo redemptions for signed-out
        // users.)
        const next = `/redeem?code=${encodeURIComponent(code.trim().toUpperCase())}${deviceRef ? `&ref=${encodeURIComponent(deviceRef)}` : ''}`
        window.location.href = `/auth/register?next=${encodeURIComponent(next)}`
        return
      }
      if (!res.ok || !payload.url) {
        setRedeemError(payload.error ?? 'We could not start checkout. Please try again shortly.')
        return
      }
      window.location.href = payload.url
    } catch {
      setRedeemError('Something went wrong while starting checkout. Please try again.')
    } finally {
      setIsRedeeming(false)
    }
  }, [code, deviceRef, validation])

  const previewPrice = useMemo<string | null>(() => {
    if (!validation?.valid) return null
    // The validate endpoint does not return the final price directly; we
    // compute it against the known base £29.99 for the student annual SKU.
    // Keeping the base figure inline avoids an extra fetch and matches the
    // server-side rule authority in /api/promo/redeem.
    const baseStudentAnnualPennies = 2999
    return formatPounds(baseStudentAnnualPennies - validation.discountPennies)
  }, [validation])

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Redeem your promo code</h1>
        <p className="text-muted-foreground">
          Promo codes are redeemed here on the web. Once you complete checkout, your subscription
          will sync to any mobile device you use automatically — no further action required.
        </p>
      </header>

      {cancelled && (
        <Card className="mb-6 border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Checkout was cancelled. You can try again below, or return to the app and continue with
          the standard plan.
        </Card>
      )}

      <Card className="space-y-5 p-6">
        {/* Annual-only messaging — clarifies which plan the code applies to before the user types. */}
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">
            Affiliate codes apply to Student Annual subscriptions only.
          </p>
          <p className="mt-1 text-amber-800">
            Other plans (Student Monthly, Teacher Monthly and Teacher Annual) aren&apos;t discounted
            with this code.
          </p>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium">Promo code</span>
          <Input
            value={code}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase())
              setValidation(null)
              setValidationError(null)
              setRedeemError(null)
            }}
            onBlur={onBlur}
            placeholder="e.g. 2026ENGLISH"
            autoCapitalize="characters"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Promo code"
            aria-invalid={validation !== null && !validation.valid}
            aria-describedby="promo-helper"
          />
          <p id="promo-helper" className="text-xs text-muted-foreground">
            Codes are case-insensitive.
          </p>
        </label>

        {isValidating && <p className="text-sm text-muted-foreground">Checking…</p>}

        {validationError !== null && (
          <p className="text-sm text-red-600" role="alert">
            {validationError}
          </p>
        )}

        {validation?.valid && previewPrice !== null && (
          <div className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900">
            <strong>Code applied.</strong> Student Annual will be{' '}
            <span className="font-semibold">{previewPrice}</span> for the first year. It then renews
            at our standard price — cancel anytime.
          </div>
        )}

        {redeemError !== null && (
          <p className="text-sm text-red-600" role="alert">
            {redeemError}
          </p>
        )}

        <Button
          type="button"
          disabled={!validation?.valid || isValidating || isRedeeming || code.length === 0}
          onClick={() => {
            void onRedeem()
          }}
          className="w-full"
        >
          {isRedeeming ? 'Opening checkout…' : 'Continue to secure checkout'}
        </Button>

        <p className="text-xs text-muted-foreground">
          You will be redirected to Stripe to complete payment. By continuing, you agree to our{' '}
          <Link href="/terms" className="underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </Card>

      <section className="mt-10 space-y-3 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">What happens next?</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Complete checkout via Stripe using your chosen payment method.</li>
          <li>Your subscription is activated against your English Hub account immediately.</li>
          <li>
            If you use the mobile app, open it and pull to refresh — your new entitlement will
            appear automatically within a few seconds. No in-app purchase is required.
          </li>
        </ol>
      </section>
    </div>
  )
}
