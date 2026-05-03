'use client'

/**
 * Affiliate / promo code entry field — shown above any pricing CTA so the
 * code is in plain sight at the moment of decision.
 *
 * Why this exists: previously the Stripe Checkout page exposed its own
 * promo field via `allow_promotion_codes: true`. Customers tried to enter
 * our app-level codes (`2026ENGLISH`, affiliate codes) there and got a
 * cryptic "This code is invalid" from Stripe — which reads as "the
 * site is broken". We now disable Stripe's promo field on standard
 * checkouts and collect codes here instead, on the pricing surface
 * itself. Codes are routed through `/api/promo/redeem` (which bakes
 * the discount into a separate Stripe Checkout Session before the
 * customer ever sees Stripe).
 *
 * Usage:
 *   const codeField = useAffiliateCodeField()
 *   <AffiliateCodeField {...codeField} />
 *   // pass `codeField.appliedCode` into your handleCheckout to route
 *   // through /api/promo/redeem instead of /api/stripe/checkout when set.
 */

import { useState } from 'react'
import { Tag, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PRICING } from '@/constants/pricing'

interface ValidationResult {
  valid: boolean
  discountPennies: number
  productIds: readonly string[]
  reason?: string
}

export interface AffiliateCodeFieldState {
  code: string
  setCode: (s: string) => void
  appliedCode: string | null
  appliedDiscount: ValidationResult | null
  validating: boolean
  errorMessage: string | null
  apply: () => Promise<void>
  remove: () => void
}

export function useAffiliateCodeField(): AffiliateCodeFieldState {
  const [code, setCode] = useState('')
  const [appliedCode, setAppliedCode] = useState<string | null>(null)
  const [appliedDiscount, setAppliedDiscount] = useState<ValidationResult | null>(null)
  const [validating, setValidating] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function apply() {
    const trimmed = code.trim().toUpperCase()
    if (!trimmed) {
      setErrorMessage('Enter a code first.')
      return
    }
    setValidating(true)
    setErrorMessage(null)
    try {
      const res = await fetch(`/api/promo/validate?code=${encodeURIComponent(trimmed)}`)
      const json = (await res.json().catch(() => ({}))) as { data?: ValidationResult }
      const result = json.data ?? null

      if (!result || !result.valid) {
        setAppliedCode(null)
        setAppliedDiscount(null)
        setErrorMessage('Sorry, that code isn’t valid. Check the spelling and try again.')
        return
      }

      setAppliedCode(trimmed)
      setAppliedDiscount(result)
      setErrorMessage(null)
    } catch (err) {
      console.error('[AffiliateCodeField] validate failed:', err)
      setAppliedCode(null)
      setAppliedDiscount(null)
      setErrorMessage('Could not validate the code right now. Please try again.')
    } finally {
      setValidating(false)
    }
  }

  function remove() {
    setCode('')
    setAppliedCode(null)
    setAppliedDiscount(null)
    setErrorMessage(null)
  }

  return {
    code,
    setCode,
    appliedCode,
    appliedDiscount,
    validating,
    errorMessage,
    apply,
    remove,
  }
}

interface AffiliateCodeFieldProps extends AffiliateCodeFieldState {
  /** Heading text — overridable in case the surface needs different copy. */
  heading?: string
  /** Subheading shown below the heading. */
  subheading?: string
  /** Tighter / wider container styling. */
  className?: string
}

export function AffiliateCodeField({
  code,
  setCode,
  appliedCode,
  appliedDiscount,
  validating,
  errorMessage,
  apply,
  remove,
  heading = 'Have an affiliate or promo code?',
  subheading,
  className = '',
}: AffiliateCodeFieldProps) {
  const defaultSubheading = `Enter a creator's code or our public code ${PRICING.AFFILIATE_PROMO_CODE} to unlock the £${PRICING.STUDENT_ANNUAL_WITH_CODE}/year Student Annual rate.`

  return (
    <div
      className={`mx-auto mb-8 max-w-2xl rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-lg bg-amber-500/15 p-2">
          <Tag className="h-4 w-4 text-amber-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">{heading}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{subheading ?? defaultSubheading}</p>
        </div>
      </div>

      {appliedCode && appliedDiscount ? (
        <div className="mt-4 flex items-center justify-between rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                Code <span className="font-mono">{appliedCode}</span> applied
              </p>
              <p className="text-xs text-muted-foreground">
                Student Annual now{' '}
                <span className="font-semibold text-foreground">
                  {PRICING.CURRENCY}
                  {PRICING.STUDENT_ANNUAL_WITH_CODE}
                </span>{' '}
                · saves {PRICING.CURRENCY}
                {PRICING.STUDENT_ANNUAL_SAVINGS}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={remove}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Remove
          </Button>
        </div>
      ) : (
        <form
          className="mt-4 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            void apply()
          }}
        >
          <Input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder={`e.g. ${PRICING.AFFILIATE_PROMO_CODE}`}
            maxLength={64}
            autoCapitalize="characters"
            spellCheck={false}
            className="flex-1 font-mono uppercase tracking-wider"
            disabled={validating}
          />
          <Button type="submit" disabled={validating || !code.trim()} className="whitespace-nowrap">
            {validating ? (
              <>
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
                Checking…
              </>
            ) : (
              'Apply code'
            )}
          </Button>
        </form>
      )}

      {errorMessage && (
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-red-500/5 px-3 py-2 text-xs text-red-700 dark:text-red-400">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  )
}
