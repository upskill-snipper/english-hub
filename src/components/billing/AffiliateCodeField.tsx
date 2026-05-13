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
 * TWO USAGE PATTERNS:
 *
 * 1. Full state-managed field (on direct-checkout surfaces like
 *    /pricing and /account/billing):
 *      const codeField = useAffiliateCodeField({ initialCode: searchParams.get('code') })
 *      <AffiliateCodeField {...codeField} />
 *      // pass `codeField.appliedCode` into handleCheckout to route
 *      // through /api/promo/redeem when set.
 *
 * 2. Compact "redirect to /pricing?code=X" prompt (on link-to-pricing
 *    surfaces — homepage, for-teachers, modals, lockout cards):
 *      <PromoCodePrompt />
 *    User types code → clicks Apply → navigates to
 *    /pricing?code=<NORMALIZED> where pattern (1) auto-applies it.
 */

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tag, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PRICING } from '@/constants/pricing'
import { useT } from '@/lib/i18n/use-t'

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

export function useAffiliateCodeField(opts?: {
  /**
   * Optional initial code to validate on mount. Used by /pricing to
   * auto-apply a `?code=` URL param so the pattern-2 prompt on
   * upstream surfaces (homepage, modals) carries the code through.
   */
  initialCode?: string | null
}): AffiliateCodeFieldState {
  const t = useT()
  const initial = (opts?.initialCode ?? '').toUpperCase().trim()
  const [code, setCode] = useState(initial)
  const [appliedCode, setAppliedCode] = useState<string | null>(null)
  const [appliedDiscount, setAppliedDiscount] = useState<ValidationResult | null>(null)
  const [validating, setValidating] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [bootstrapped, setBootstrapped] = useState(false)

  async function apply() {
    const trimmed = code.trim().toUpperCase()
    if (!trimmed) {
      setErrorMessage(t('billing.affiliate.error.empty'))
      return
    }
    setValidating(true)
    setErrorMessage(null)
    try {
      const res = await fetch(`/api/promo/validate?code=${encodeURIComponent(trimmed)}`)
      // /api/promo/validate uses successResponse(data, status) which puts
      // the payload at the TOP LEVEL of the response body — there's no
      // `{ data: ... }` envelope. An earlier draft of this code expected
      // an envelope and silently treated every valid code as invalid.
      const result = (await res.json().catch(() => null)) as ValidationResult | null

      if (!result || !result.valid) {
        setAppliedCode(null)
        setAppliedDiscount(null)
        setErrorMessage(t('billing.affiliate.error.invalid'))
        return
      }

      setAppliedCode(trimmed)
      setAppliedDiscount(result)
      setErrorMessage(null)
    } catch (err) {
      console.error('[AffiliateCodeField] validate failed:', err)
      setAppliedCode(null)
      setAppliedDiscount(null)
      setErrorMessage(t('billing.affiliate.error.network'))
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

  // Auto-apply the initialCode on mount (e.g. /pricing?code=2026ENGLISH).
  // We run this once via the bootstrapped flag so a re-render with a
  // different initialCode doesn't keep retriggering.
  useEffect(() => {
    if (bootstrapped || !initial) return
    setBootstrapped(true)
    void apply()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bootstrapped, initial])

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

/**
 * Compact prompt for surfaces that don't own checkout state — homepage
 * pricing tiles, modals, in-page lockouts, /for-teachers. The user
 * types a code → clicks Apply → we navigate to
 * `/pricing?code=NORMALIZED_CODE` where the full <AffiliateCodeField>
 * picks the code up via useAffiliateCodeField({ initialCode }) and
 * auto-applies. This is the simplest way to be "site-wide" without
 * duplicating checkout state on every page.
 *
 * Usage: drop next to any "Upgrade" / "Start trial" button.
 *   <PromoCodePrompt />
 *   <Button render={<Link href="/pricing" />}>Start 7-day free trial</Button>
 *
 * `pricingHref` is overridable for surfaces that route to a different
 * pricing-equivalent page (e.g. /account/billing for signed-in users).
 */
export function PromoCodePrompt({
  pricingHref = '/pricing',
  compact = false,
  className = '',
}: {
  pricingHref?: string
  /** When true, renders a single-row layout suitable for modal footers. */
  compact?: boolean
  className?: string
}) {
  const t = useT()
  const router = useRouter()
  const [code, setCode] = useState('')
  const trimmed = code.trim().toUpperCase()
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trimmed) return
    const url = `${pricingHref}?code=${encodeURIComponent(trimmed)}`
    router.push(url)
  }

  if (compact) {
    return (
      <form
        onSubmit={submit}
        className={`flex items-center gap-2 ${className}`}
        aria-label={t('billing.affiliate.aria_apply')}
      >
        <Input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder={t('billing.affiliate.placeholder_compact')}
          maxLength={64}
          autoCapitalize="characters"
          spellCheck={false}
          className="h-9 flex-1 font-mono text-sm uppercase tracking-wider"
        />
        <Button type="submit" size="sm" variant="outline" disabled={!trimmed}>
          {t('billing.affiliate.apply_short')}
        </Button>
      </form>
    )
  }

  return (
    <div
      className={`mx-auto max-w-md rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 ${className}`}
    >
      <div className="mb-2 flex items-center gap-2">
        <Tag className="h-3.5 w-3.5 text-amber-700" />
        <p className="text-xs font-semibold text-foreground">
          {t('billing.affiliate.prompt_heading')}
        </p>
      </div>
      <form onSubmit={submit} className="flex gap-2">
        <Input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder={`${t('billing.affiliate.eg_prefix')} ${PRICING.AFFILIATE_PROMO_CODE}`}
          maxLength={64}
          autoCapitalize="characters"
          spellCheck={false}
          className="h-9 flex-1 font-mono text-sm uppercase tracking-wider"
        />
        <Button type="submit" size="sm" disabled={!trimmed} className="whitespace-nowrap">
          {t('billing.affiliate.apply_short')}
        </Button>
      </form>
      <p className="mt-2 text-[11px] text-muted-foreground">
        {t('billing.affiliate.compact_blurb_saves')} {PRICING.CURRENCY}
        {PRICING.STUDENT_ANNUAL_SAVINGS} {t('billing.affiliate.compact_blurb_on_annual')}:{' '}
        {t('billing.affiliate.label_student_annual')} ({PRICING.CURRENCY}
        {PRICING.STUDENT_ANNUAL_WITH_CODE}
        {t('billing.affiliate.per_year_short')}) {t('billing.affiliate.or')}{' '}
        {t('billing.affiliate.label_teacher_annual')} ({PRICING.CURRENCY}
        {PRICING.TEACHER_ANNUAL_WITH_CODE}
        {t('billing.affiliate.per_year_short')}). {t('billing.affiliate.no_monthly_discount')}
      </p>
    </div>
  )
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
  heading,
  subheading,
  className = '',
}: AffiliateCodeFieldProps) {
  const t = useT()
  const resolvedHeading = heading ?? t('billing.affiliate.heading')
  // Subheading is a long sentence interleaved with PRICING constants. We
  // translate the static fragments and splice the numeric values inline
  // so the dictionary key set stays free of locale-specific number
  // formatting.
  const defaultSubheading =
    `${t('billing.affiliate.subheading_intro')} ${PRICING.AFFILIATE_PROMO_CODE} ` +
    `${t('billing.affiliate.subheading_save_prefix')} £${PRICING.STUDENT_ANNUAL_SAVINGS} ` +
    `${t('billing.affiliate.subheading_on_student_annual')} (£${PRICING.STUDENT_ANNUAL_WITH_CODE}` +
    `${t('billing.affiliate.per_year_short')} ${t('billing.affiliate.instead_of')} £${PRICING.STUDENT_ANNUAL}) ` +
    `${t('billing.affiliate.or')} ${t('billing.affiliate.subheading_on_teacher_annual')} ` +
    `(£${PRICING.TEACHER_ANNUAL_WITH_CODE}${t('billing.affiliate.per_year_short')} ` +
    `${t('billing.affiliate.instead_of')} £${PRICING.TEACHER_ANNUAL}).`

  return (
    <div
      className={`mx-auto mb-8 max-w-2xl rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-lg bg-amber-500/15 p-2">
          <Tag className="h-4 w-4 text-amber-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">{resolvedHeading}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{subheading ?? defaultSubheading}</p>
        </div>
      </div>

      {appliedCode && appliedDiscount ? (
        <div className="mt-4 flex items-center justify-between rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                {t('billing.affiliate.applied_prefix')}{' '}
                <span className="font-mono">{appliedCode}</span>{' '}
                {t('billing.affiliate.applied_suffix')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('billing.affiliate.saves_prefix')} {PRICING.CURRENCY}
                {PRICING.STUDENT_ANNUAL_SAVINGS} {t('billing.affiliate.on_annual_label')}:{' '}
                {t('billing.affiliate.label_student')}{' '}
                <span className="font-semibold text-foreground">
                  {PRICING.CURRENCY}
                  {PRICING.STUDENT_ANNUAL_WITH_CODE}
                  {t('billing.affiliate.per_year_short')}
                </span>{' '}
                · {t('billing.affiliate.label_teacher')}{' '}
                <span className="font-semibold text-foreground">
                  {PRICING.CURRENCY}
                  {PRICING.TEACHER_ANNUAL_WITH_CODE}
                  {t('billing.affiliate.per_year_short')}
                </span>
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
            {t('billing.affiliate.remove')}
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
            placeholder={`${t('billing.affiliate.eg_prefix')} ${PRICING.AFFILIATE_PROMO_CODE}`}
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
                {t('billing.affiliate.checking')}
              </>
            ) : (
              t('billing.affiliate.apply_code')
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
