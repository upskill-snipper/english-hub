/**
 * /redeem - public, deep-link-friendly promo-code redemption page.
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
 * via `/api/me/entitlements` on next foreground - no app-side UI changes
 * required.
 *
 * Flow:
 *   1. User lands on /redeem (optionally with `?ref=<deviceId>` or `?code=`).
 *   2. User enters or confirms a code and confirms the plan.
 *   3. We call `/api/promo/validate?code=…` to preview the discount.
 *   4. On confirm, we call `/api/promo/redeem` (auth required; unauth users
 *      are routed via sign-up first) and forward to Stripe Checkout.
 *   5. Stripe redirects to `/redeem/success?session_id=…` which then deep-
 *      links back into the app via `theenglishhub://paywall?redeemed=1` -
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
import { useT } from '@/lib/i18n/use-t'

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
function reasonToMessage(reason: string | undefined, t: (k: string) => string): string {
  switch (reason) {
    case 'invalid_format':
      return t('redeem.reason.invalid_format')
    case 'unknown_code':
      return t('redeem.reason.unknown_code')
    default:
      return t('redeem.reason.default')
  }
}

export default function RedeemPage() {
  const t = useT()
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
  const validateCode = useCallback(
    async (raw: string): Promise<void> => {
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
          setValidationError(reasonToMessage(payload.reason, t))
        }
      } catch {
        setValidationError(t('redeem.err.unreachable'))
        setValidation(null)
      } finally {
        setIsValidating(false)
      }
    },
    [t],
  )

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
    // If the user typed a code and clicked the button without blurring
    // first, validation hasn't fired yet and the button was previously
    // disabled - leaving the user stuck. Validate inline before
    // proceeding so a single Apply click works regardless of focus.
    let currentValidation = validation
    if (!currentValidation && CODE_REGEX.test(code.trim().toUpperCase())) {
      setIsValidating(true)
      try {
        const res = await fetch(
          `/api/promo/validate?code=${encodeURIComponent(code.trim().toUpperCase())}`,
        )
        currentValidation = (await res.json()) as ValidateApiResponse
        setValidation(currentValidation)
        if (!currentValidation.valid) {
          setValidationError(reasonToMessage(currentValidation.reason, t))
          return
        }
      } catch {
        setValidationError(t('redeem.err.unreachable'))
        return
      } finally {
        setIsValidating(false)
      }
    }
    if (!currentValidation?.valid) return
    const productId = currentValidation.productIds[0] ?? DEFAULT_PRODUCT_ID
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
        // (Note: the auth route is `/auth/register`, not `/auth/sign-up` -
        // a stale path here previously 404'd promo redemptions for signed-out
        // users.)
        const next = `/redeem?code=${encodeURIComponent(code.trim().toUpperCase())}${deviceRef ? `&ref=${encodeURIComponent(deviceRef)}` : ''}`
        window.location.href = `/auth/register?next=${encodeURIComponent(next)}`
        return
      }
      if (!res.ok || !payload.url) {
        setRedeemError(payload.error ?? t('redeem.err.start_checkout'))
        return
      }
      window.location.href = payload.url
    } catch {
      setRedeemError(t('redeem.err.something_wrong'))
    } finally {
      setIsRedeeming(false)
    }
  }, [code, deviceRef, validation, t])

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
        <h1 className="text-3xl font-semibold tracking-tight">{t('redeem.h1')}</h1>
        <p className="text-muted-foreground">{t('redeem.lead')}</p>
      </header>

      {cancelled && (
        <Card className="mb-6 border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          {t('redeem.cancelled')}
        </Card>
      )}

      <Card className="space-y-5 p-6">
        {/* Annual-only messaging - clarifies which plans the code applies to before the user types. */}
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">{t('redeem.annual_only.title')}</p>
          <p className="mt-1 text-amber-800">{t('redeem.annual_only.body')}</p>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium">{t('redeem.field.code')}</span>
          <Input
            value={code}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase())
              setValidation(null)
              setValidationError(null)
              setRedeemError(null)
            }}
            onBlur={onBlur}
            placeholder={t('redeem.field.placeholder')}
            autoCapitalize="characters"
            autoCorrect="off"
            spellCheck={false}
            aria-label={t('redeem.field.code')}
            aria-invalid={validation !== null && !validation.valid}
            aria-describedby="promo-helper"
          />
          <p id="promo-helper" className="text-xs text-muted-foreground">
            {t('redeem.field.helper')}
          </p>
        </label>

        {isValidating && <p className="text-sm text-muted-foreground">{t('redeem.checking')}</p>}

        {validationError !== null && (
          <p className="text-sm text-red-600" role="alert">
            {validationError}
          </p>
        )}

        {validation?.valid && previewPrice !== null && (
          <div className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900">
            <strong>{t('redeem.applied_strong')}</strong> {t('redeem.applied_pre')}{' '}
            <span className="font-semibold">{previewPrice}</span> {t('redeem.applied_post')}
          </div>
        )}

        {redeemError !== null && (
          <p className="text-sm text-red-600" role="alert">
            {redeemError}
          </p>
        )}

        <Button
          type="button"
          disabled={
            isValidating ||
            isRedeeming ||
            code.length === 0 ||
            // Only block submission when we KNOW the code is invalid.
            // If validation hasn't run yet (validation === null) but the
            // format is plausible, keep the button enabled - onRedeem
            // will validate inline and surface the right error if it
            // fails. This prevents the "button stuck disabled until I
            // click somewhere else" UX trap.
            (validation !== null && !validation.valid) ||
            !CODE_REGEX.test(code.trim().toUpperCase())
          }
          onClick={() => {
            void onRedeem()
          }}
          className="w-full"
        >
          {isRedeeming ? t('redeem.opening') : t('redeem.continue')}
        </Button>

        <p className="text-xs text-muted-foreground">
          {t('redeem.legal.pre')}{' '}
          <Link href="/terms" className="underline">
            {t('redeem.legal.terms')}
          </Link>{' '}
          {t('redeem.legal.and')}{' '}
          <Link href="/privacy-policy" className="underline">
            {t('redeem.legal.privacy')}
          </Link>
          .
        </p>
      </Card>

      <section className="mt-10 space-y-3 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">{t('redeem.next.h2')}</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>{t('redeem.next.li1')}</li>
          <li>{t('redeem.next.li2')}</li>
          <li>{t('redeem.next.li3')}</li>
        </ol>
      </section>
    </div>
  )
}
