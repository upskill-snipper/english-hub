'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'
import { DemoShowcase } from '@/components/schools/DemoShowcase'
import { SchoolPricingCards } from '@/components/schools/SchoolPricingCards'
import { TrustBox } from '@/components/trustpilot/TrustBox'
import { VAT_LABEL } from '@/lib/copy/pricing'
import { TrackEvent } from '@/components/analytics/TrackEvent'
import { AffiliateCodeField, useAffiliateCodeField } from '@/components/billing/AffiliateCodeField'
import { FAQPageJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
import {
  CheckCircle,
  X,
  Sparkles,
  GraduationCap,
  BookOpen,
  Users,
  School,
  BarChart3,
  FileText,
  Brain,
  ClipboardList,
  PenTool,
  Presentation,
  Download,
  Zap,
  ChevronDown,
  ArrowRight,
  Gift,
  Target,
  Layers,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

// Feature data lives as i18n keys; the actual EN/AR copy is resolved
// inside <PricingContent /> via useT() so /ar visitors get Arabic strings
// without duplicating structural metadata (icons, included flag).
const STUDENT_FREE_FEATURE_KEYS = [
  { key: 'pricing.feat.student_free.exam_aligned', included: true },
  { key: 'pricing.feat.student_free.revision_notes', included: true },
  { key: 'pricing.feat.student_free.flashcards', included: true },
]

const STUDENT_PREMIUM_FEATURE_KEYS = [
  { key: 'pricing.feat.student_premium.essay_marking', icon: PenTool },
  { key: 'pricing.feat.student_premium.revision_notes', icon: BookOpen },
  { key: 'pricing.feat.student_premium.custom_tests', icon: ClipboardList },
  { key: 'pricing.feat.student_premium.mock_exams', icon: ClipboardList },
  { key: 'pricing.feat.student_premium.feedback_reports', icon: FileText },
  { key: 'pricing.feat.student_premium.study_recs', icon: Brain },
  { key: 'pricing.feat.student_premium.progress_analytics', icon: BarChart3 },
  { key: 'pricing.feat.student_premium.exam_technique', icon: Target },
]

const TEACHER_FREE_FEATURE_KEYS = [
  { key: 'pricing.feat.teacher_free.browse_resources', included: true },
  { key: 'pricing.feat.teacher_free.view_student_list', included: true },
]

const TEACHER_PREMIUM_FEATURE_KEYS = [
  { key: 'pricing.feat.teacher_premium.lesson_plans', icon: Layers },
  { key: 'pricing.feat.teacher_premium.essay_marking', icon: PenTool },
  { key: 'pricing.feat.teacher_premium.worksheet_builder', icon: FileText },
  { key: 'pricing.feat.teacher_premium.mark_scheme_gen', icon: ClipboardList },
  { key: 'pricing.feat.teacher_premium.ppt_word_export', icon: Download },
  { key: 'pricing.feat.teacher_premium.class_analytics', icon: BarChart3 },
  { key: 'pricing.feat.teacher_premium.student_reports', icon: Users },
  { key: 'pricing.feat.teacher_premium.dept_benchmarking', icon: Presentation },
]

const SCHOOL_RECEIVES_KEYS = [
  'pricing.school_receives.1',
  'pricing.school_receives.2',
  'pricing.school_receives.3',
  'pricing.school_receives.4',
  'pricing.school_receives.5',
  'pricing.school_receives.6',
]

// FAQ items resolve their copy at render time inside <PricingContent />
// because answers interpolate PRICING constants. See `buildFaqItems(t)`.
const FAQ_KEY_PAIRS = [
  { q: 'pricing.faq.q1', a: 'pricing.faq.a1' },
  { q: 'pricing.faq.q2', a: 'pricing.faq.a2' },
  { q: 'pricing.faq.q3', a: 'pricing.faq.a3' },
  { q: 'pricing.faq.q4', a: 'pricing.faq.a4' },
  { q: 'pricing.faq.q5', a: 'pricing.faq.a5' },
  { q: 'pricing.faq.q6', a: 'pricing.faq.a6' },
  { q: 'pricing.faq.q7', a: 'pricing.faq.a7' },
  { q: 'pricing.faq.q8', a: 'pricing.faq.a8' },
  { q: 'pricing.faq.q9', a: 'pricing.faq.a9' },
]

function buildFaqItems(t: (k: string) => string): { q: string; a: string }[] {
  const freeUses = PRICING.FREE_USES_PER_FEATURE
  const studentMonthly = PRICING.STUDENT_MONTHLY
  const studentAnnual = PRICING.STUDENT_ANNUAL
  const teacherMonthly = PRICING.TEACHER_MONTHLY
  const teacherAnnual = PRICING.TEACHER_ANNUAL
  const code = PRICING.AFFILIATE_PROMO_CODE
  const withCode = PRICING.STUDENT_ANNUAL_WITH_CODE
  const savings = PRICING.STUDENT_ANNUAL_SAVINGS
  const limit = PRICING.FOUNDER_SCHOOL_LIMIT
  const min = PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')

  return FAQ_KEY_PAIRS.map(({ q, a }, i) => {
    let answer = t(a)
    if (i === 0) {
      answer = answer.replace('{n}', String(freeUses))
    } else if (i === 2) {
      answer = answer
        .replace('{monthly}', String(studentMonthly))
        .replace('{annual}', String(studentAnnual))
        .replace('{code}', String(code))
        .replace('{withCode}', String(withCode))
        .replace('{savings}', String(savings))
    } else if (i === 3) {
      answer = answer
        .replace('{monthly}', String(teacherMonthly))
        .replace('{annual}', String(teacherAnnual))
    } else if (i === 4) {
      answer = answer.replace('{withCode}', String(withCode)).replace('{code}', String(code))
    } else if (i === 7) {
      answer = answer.replace('{limit}', String(limit)).replace('{min}', min)
    }
    return { q: t(q), a: answer }
  })
}

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  as: Tag = 'h2',
}: {
  badge?: string
  badgeIcon?: React.ElementType
  title: string
  subtitle?: string
  as?: 'h1' | 'h2' | 'h3'
}) {
  return (
    <div className="text-center mb-14">
      {badge && (
        <Badge
          variant="outline"
          className="bg-primary/10 border-primary/25 text-primary text-sm font-bold mb-6 gap-2 px-4 py-1.5"
        >
          {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
          {badge}
        </Badge>
      )}
      <Tag className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function FeatureRow({
  feature,
  included,
  free,
}: {
  feature: string
  included: boolean
  free: boolean
}) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
      {included ? (
        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
      ) : (
        <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
      )}
      <span className={included ? 'text-foreground/90' : 'text-muted-foreground/60'}>
        {feature}
      </span>
      {free && included && (
        <Badge
          variant="outline"
          className="text-[10px] px-1.5 py-0 border-emerald-500/30 text-emerald-600 ml-auto"
        >
          Free
        </Badge>
      )}
    </li>
  )
}

function PremiumFeatureRow({ feature, icon: Icon }: { feature: string; icon: React.ElementType }) {
  return (
    <li className="flex items-center gap-2.5 text-sm">
      <div className="w-4 h-4 flex items-center justify-center shrink-0">
        <Icon className="w-3.5 h-3.5 text-primary" />
      </div>
      <span className="text-foreground/90">{feature}</span>
      <Badge
        variant="outline"
        className="text-[10px] px-1.5 py-0 border-primary/30 text-primary/80 ml-auto whitespace-nowrap"
      >
        3 free
      </Badge>
    </li>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="font-semibold text-foreground text-sm sm:text-base pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && <p className="pb-5 text-sm text-muted-foreground leading-relaxed -mt-1">{a}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

type CheckoutPlan = 'student_monthly' | 'student_annual' | 'teacher_monthly' | 'teacher_annual'

// Wrapper page: useSearchParams() requires a Suspense boundary in Next 15.
// The actual content lives in <PricingContent /> below.
export default function PricingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <PricingContent />
    </Suspense>
  )
}

function PricingContent() {
  const t = useT()
  // Auto-apply ?code=XXX from the URL - surfaces upstream of /pricing
  // (homepage tiles, /for-teachers, modals) point users here with the
  // applied code already attached, so there's zero re-typing.
  const searchParams = useSearchParams()
  const initialCode = searchParams.get('code')

  // 21 April 2026 pricing pivot: two-tier Early Access / Standard with anchor.
  //   Students: Early Access £3.99/mo · £29.99/yr · £20/yr with affiliate code or 2026ENGLISH
  //             Standard (from Aug 2026) £7.99/mo · £69.99/yr - shown as strikethrough anchor
  //   Teachers: Early Access £6.99/mo · £67.99/yr
  //             Standard (from Aug 2026) £11.99/mo · £99/yr - shown as strikethrough anchor
  //   Schools:  Founding £4,000 (first 10 only) vs Standard £8,000 (projected, Aug 2026)
  //   Trial:    7-day free trial - card required, auto-converts.
  //   Urgency:  Every banner carries "Prices increasing August 2026".
  const studentAnnualSavingsVsMonthly = Math.max(
    0,
    Math.round((PRICING.STUDENT_MONTHLY * 12 - PRICING.STUDENT_ANNUAL) * 100) / 100,
  )
  const teacherAnnualSavingsVsMonthly = Math.max(
    0,
    Math.round((PRICING.TEACHER_MONTHLY * 12 - PRICING.TEACHER_ANNUAL) * 100) / 100,
  )

  // 03 May 2026 - wire the pricing-card CTAs straight into Stripe Checkout.
  // Pre-fix every Student/Teacher button rendered as <Link href="/auth/register">,
  // so clicking "Start free" took every visitor to /dashboard?welcome=true and
  // never offered a paywall. This is the same flow as /account/billing's
  // handleCheckout - duplicated inline so /pricing is self-contained.
  //
  //   - Authenticated → POST /api/stripe/checkout → Stripe Checkout (with 7-day
  //     trial; `subscription` mode; rewardful referral when present).
  //   - Anonymous (401) → bounce to /auth/register?next=/pricing&plan=<plan> so
  //     the user can register, return, click again. (We can refine this with
  //     auto-fire after register in a follow-up.)
  //   - Email-verification gate (403) → bounce to /auth/resend-verification.
  //   - Any other error → user-visible toast.
  const [checkoutLoading, setCheckoutLoading] = useState<CheckoutPlan | null>(null)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  // Track which plan-group the error belongs to so the message renders
  // under the button the user actually clicked, not under a sibling card.
  const [checkoutErrorPlan, setCheckoutErrorPlan] = useState<CheckoutPlan | null>(null)

  // Affiliate / promo code state - surfaced via the AffiliateCodeField
  // component above the pricing cards. When `appliedCode` is set, the
  // pricing button click below routes through /api/promo/redeem (which
  // bakes the £20/year Student Annual discount into a one-off Stripe
  // Checkout session) instead of /api/stripe/checkout.
  const codeField = useAffiliateCodeField({ initialCode })

  async function handleCheckout(plan: CheckoutPlan) {
    setCheckoutLoading(plan)
    setCheckoutError(null)
    setCheckoutErrorPlan(null)

    // Code-redemption path: Student Annual AND Teacher Annual both
    // qualify (3 May 2026 update - same flat £9.99 saving on each).
    // If a code is applied but the user clicks a Monthly plan, surface
    // a clear inline error directing them to the eligible cards.
    if (codeField.appliedCode) {
      const productIdForPlan: 'student_annual' | 'teacher_annual' | null =
        plan === 'student_annual'
          ? 'student_annual'
          : plan === 'teacher_annual'
            ? 'teacher_annual'
            : null

      if (productIdForPlan === null) {
        setCheckoutError(
          t('pricing.err.code_annual_only')
            .replace('{code}', String(codeField.appliedCode))
            .replace('{studentAnnual}', String(PRICING.STUDENT_ANNUAL_WITH_CODE))
            .replace('{teacherAnnual}', String(PRICING.TEACHER_ANNUAL_WITH_CODE)),
        )
        setCheckoutErrorPlan(plan)
        setCheckoutLoading(null)
        return
      }

      try {
        const res = await fetch('/api/promo/redeem', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code: codeField.appliedCode,
            productId: productIdForPlan,
          }),
        })

        if (res.status === 401) {
          window.location.href = `/auth/register?next=${encodeURIComponent(`/pricing?plan=${plan}&code=${codeField.appliedCode}`)}`
          return
        }

        // /api/promo/redeem returns the payload at top level via
        // successResponse - no { data: ... } envelope.
        const json = (await res.json().catch(() => ({}))) as {
          url?: string
          error?: string
        }

        if (!res.ok || !json.url) {
          if (res.status === 403 && json.error === 'email_verification_required') {
            window.location.href = '/auth/resend-verification'
            return
          }
          setCheckoutError(json.error || t('pricing.err.code_apply_failed'))
          setCheckoutErrorPlan(plan)
          setCheckoutLoading(null)
          return
        }

        window.location.href = json.url
        return
      } catch {
        setCheckoutError(t('pricing.err.code_generic'))
        setCheckoutErrorPlan(plan)
        setCheckoutLoading(null)
        return
      }
    }

    // Standard (no-code) checkout path.
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, mode: 'subscription' }),
      })

      // Anonymous user → send them to register with a return URL that brings
      // them back here so they can complete the purchase.
      if (res.status === 401) {
        window.location.href = `/auth/register?next=${encodeURIComponent(`/pricing?plan=${plan}`)}`
        return
      }

      const data = (await res.json().catch(() => ({}))) as {
        url?: string
        error?: string
        stripeMessage?: string
      }

      if (!res.ok || !data.url) {
        if (res.status === 403 && data.error === 'email_verification_required') {
          window.location.href = '/auth/resend-verification'
          return
        }
        // Translate the most common server-side errors into something a
        // human can act on. The raw `data.error` text from the API is
        // engineering-speak ("Missing required fields", "Invalid price ID")
        // - that confused the founder into thinking the button was simply
        // "doing nothing". When the API returns a `stripeMessage`, append
        // it so the misconfiguration is immediately diagnosable.
        let userMessage: string
        if (data.error === 'Missing required fields: priceId (or plan) and mode') {
          userMessage = t('pricing.err.missing_priceids')
        } else if (data.error === 'Invalid price ID') {
          userMessage = t('pricing.err.invalid_priceid')
        } else if (data.error === 'Payment processing error. Please try again.') {
          userMessage = data.stripeMessage
            ? `${t('pricing.err.stripe_rejected_prefix')} ${data.stripeMessage}`
            : t('pricing.err.stripe_rejected_generic')
        } else {
          userMessage = data.error || t('pricing.err.start_checkout_failed')
        }
        setCheckoutError(userMessage)
        setCheckoutErrorPlan(plan)
        setCheckoutLoading(null)
        return
      }

      // Redirect into Stripe-hosted checkout. The 7-day trial begins on landing.
      window.location.href = data.url
    } catch {
      setCheckoutError(t('pricing.err.generic'))
      setCheckoutErrorPlan(plan)
      setCheckoutLoading(null)
    }
  }

  // Helpers - figures out whether the error message belongs to a given
  // plan group (student vs teacher) so each card only shows its own error.
  const studentError =
    checkoutError &&
    (checkoutErrorPlan === 'student_monthly' || checkoutErrorPlan === 'student_annual')
      ? checkoutError
      : null
  const teacherError =
    checkoutError &&
    (checkoutErrorPlan === 'teacher_monthly' || checkoutErrorPlan === 'teacher_annual')
      ? checkoutError
      : null

  // Resolve FAQ copy once per render - depends on locale via useT().
  const faqItems = buildFaqItems(t)

  return (
    <main className="relative overflow-hidden">
      {/* Funnel: pricing_viewed (consent-gated in src/lib/posthog.ts) */}
      <TrackEvent event="pricing_viewed" />
      {/* FAQPage structured data - emitted as <script type="application/ld+json">.
          Client component, so no nonce is passed (nonce prop is optional;
          middleware handles per-request CSP nonces on the response). */}
      <FAQPageJsonLd faqs={faqItems.map((i) => ({ question: i.q, answer: i.a }))} />
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-[60%] right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* ───────── Hero ───────── */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            as="h1"
            badge={t('pricing.hero.badge')}
            badgeIcon={Sparkles}
            title="AI-supported English revision for GCSE and IGCSE - built by English teachers."
            subtitle="A structured revision platform with instant, criteria-referenced practice feedback. We are at launch stage and onboarding our first Founding Schools now."
          />
          <div className="mt-6 flex justify-center">
            <TrustBox variant="micro-star" />
          </div>
        </div>
      </section>

      {/* ───────── Competitor Comparison ───────── */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {t('pricing.compare.title')}
            </h2>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">
              {t('pricing.compare.subtitle')}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card">
            <table className="w-full text-sm min-w-[720px] table-fixed">
              <colgroup>
                <col className="w-[28%]" />
                <col className="w-[18%]" />
                <col className="w-[18%]" />
                <col className="w-[18%]" />
                <col className="w-[18%]" />
              </colgroup>
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="text-left font-semibold text-foreground px-4 py-3 align-middle">
                    {t('pricing.compare.col.feature')}
                  </th>
                  <th className="text-center font-bold text-primary px-4 py-3 align-middle">
                    {t('brand.name')}
                  </th>
                  <th className="text-center font-semibold text-muted-foreground px-4 py-3 align-middle">
                    Seneca
                  </th>
                  <th className="text-center font-semibold text-muted-foreground px-4 py-3 align-middle">
                    GCSEPod
                  </th>
                  <th className="text-center font-semibold text-muted-foreground px-4 py-3 align-middle">
                    Tassomai
                  </th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-b [&>tr]:border-border/40 [&>tr:last-child]:border-0">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground align-middle">
                    {t('pricing.compare.row.price_per_student')}
                  </td>
                  <td className="px-4 py-3 text-center text-foreground font-semibold align-middle">
                    {PRICING.CURRENCY}
                    {PRICING.STUDENT_MONTHLY}
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground align-middle">
                    {t('pricing.compare.seneca_price')}
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground align-middle">
                    {t('pricing.compare.gcsepod_price')}
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground align-middle">
                    £3.00
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground align-middle">
                    {t('pricing.compare.row.ai_marking')}
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground align-middle">
                    {t('pricing.compare.row.igcse_coverage')}
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center items-center gap-1.5">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span className="text-xs text-foreground">
                        {t('pricing.compare.value.aqa_cambridge')}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground text-xs align-middle">
                    {t('pricing.compare.value.partial')}
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground text-xs align-middle">
                    {t('pricing.compare.value.partial')}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground align-middle">
                    {t('pricing.compare.row.mock_exam_bank')}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-foreground align-middle">
                    172+
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground align-middle">
                    {t('pricing.compare.row.calibrated_ms')}
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center items-center gap-1.5">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span className="text-xs text-foreground">
                        {t('pricing.compare.value.5_boards')}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground align-middle">
                    {t('pricing.compare.row.trial_length')}
                  </td>
                  <td className="px-4 py-3 text-center text-foreground font-semibold align-middle">
                    {t('pricing.compare.value.7_days')}
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground align-middle">
                    {t('pricing.compare.value.no_trial')}
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground align-middle">
                    {t('pricing.compare.value.na')}
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground align-middle">
                    {t('pricing.compare.value.7_days')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground/80 max-w-2xl mx-auto">
            {t('pricing.compare.footnote')}
          </p>
        </div>
      </section>

      {/* ───────── Free Access Banner ───────── */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-emerald-600" />
              <span className="font-bold text-emerald-600 text-sm uppercase tracking-wider">
                {t('pricing.start_free_eyebrow')}
              </span>
            </div>
            <p className="text-foreground font-semibold text-lg sm:text-xl mb-2">
              {t('pricing.try_before_subscribe')}
            </p>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6">
              {t('pricing.free_uses_blurb_prefix')} {PRICING.FREE_USES_PER_FEATURE}{' '}
              {t('pricing.free_uses_blurb_suffix')} {PRICING.TRIAL_TEXT}.
            </p>
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              {t('pricing.cta.create_free_account')}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Student + Teacher Cards ───────── */}
      <section className="relative pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Affiliate / promo code entry - above the pricing cards so
              users see it before clicking any "Start 7-day free trial"
              button. Replaces the previous Stripe-side promo field
              (which exposed `allow_promotion_codes: true` on the
              Stripe Checkout page itself, but only accepted Stripe
              Dashboard coupons - confusing users who tried to enter
              affiliate codes there). */}
          <AffiliateCodeField {...codeField} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Student Card */}
            <Card className="relative flex flex-col p-0 border-primary/30 overflow-visible">
              {/* Gradient top edge */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 shadow-lg shadow-primary/25 whitespace-nowrap">
                <GraduationCap className="w-3.5 h-3.5 mr-1" />
                {t('pricing.plan.student')}
              </Badge>

              <div className="p-8 pb-0">
                <h3 className="text-lg font-bold tracking-tight text-foreground mt-2">
                  {t('pricing.for_students')}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  {t('pricing.student.tagline_exams')}
                </p>

                {/* Early-access label above the price */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                    {PRICING.EARLY_ACCESS_LABEL}
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    · {t('pricing.limited_time')}
                  </span>
                </div>

                {/* ONE primary price line - early-access monthly with standard anchor */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    {PRICING.CURRENCY}
                    {PRICING.STUDENT_MONTHLY}
                  </span>
                  <span className="text-muted-foreground text-base">{t('pricing.per_month')}</span>
                  <span className="text-sm text-muted-foreground line-through decoration-amber-500/60">
                    {PRICING.CURRENCY}
                    {PRICING.STUDENT_MONTHLY_STANDARD}
                  </span>
                </div>

                {/* ONE secondary annual offer */}
                <p className="text-sm text-muted-foreground mb-3">
                  {t('pricing.or_prefix')}{' '}
                  <span className="font-semibold text-foreground">
                    {PRICING.CURRENCY}
                    {PRICING.STUDENT_ANNUAL}
                    {t('pricing.per_year_long')}
                  </span>
                  {studentAnnualSavingsVsMonthly > 0 && (
                    <span className="text-muted-foreground/80">
                      {' '}
                      · {t('pricing.save_vs_monthly_prefix')} {PRICING.CURRENCY}
                      {studentAnnualSavingsVsMonthly.toFixed(2)}{' '}
                      {t('pricing.save_vs_monthly_suffix')}
                    </span>
                  )}
                </p>

                {/* ONE trial line */}
                <p className="text-sm text-emerald-600 font-semibold mb-3">
                  {PRICING.TRIAL_TEXT} · {t('pricing.trial_line_card_required')}
                </p>

                {/* ONE upgrade callout - affiliate code */}
                <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 px-3 py-2 mb-3">
                  <p className="text-xs font-semibold text-emerald-700">
                    {t('pricing.with_any_code_prefix')}{' '}
                    <code className="font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded">
                      {PRICING.AFFILIATE_PROMO_CODE}
                    </code>
                    {': '}
                    {t('pricing.with_any_code_per_year_save')
                      .replace('{currency}', PRICING.CURRENCY)
                      .replace('{annual}', String(PRICING.STUDENT_ANNUAL_WITH_CODE))
                      .replace('{currency}', PRICING.CURRENCY)
                      .replace('{saving}', String(PRICING.STUDENT_ANNUAL_SAVINGS))}
                  </p>
                </div>

                {/* Free features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {t('pricing.always_free_label')}
                  </p>
                  <ul className="space-y-2.5">
                    {STUDENT_FREE_FEATURE_KEYS.map((f) => (
                      <FeatureRow key={f.key} feature={t(f.key)} included={f.included} free />
                    ))}
                  </ul>
                </div>

                {/* Premium features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {t('pricing.premium_label')}
                    <span className="text-primary/70 normal-case ml-1">
                      {t('pricing.premium_then_unlimited_prefix').replace(
                        '{n}',
                        String(PRICING.FREE_USES_PER_FEATURE),
                      )}
                    </span>
                  </p>
                  <ul className="space-y-2.5">
                    {STUDENT_PREMIUM_FEATURE_KEYS.map((f) => (
                      <PremiumFeatureRow key={f.key} feature={t(f.key)} icon={f.icon} />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto p-8 pt-0">
                <Button
                  variant="default"
                  className="w-full shadow-lg shadow-primary/20"
                  size="lg"
                  onClick={() => handleCheckout('student_annual')}
                  disabled={checkoutLoading !== null}
                >
                  {checkoutLoading === 'student_annual'
                    ? t('pricing.starting_checkout')
                    : t('pricing.start_7day_trial')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <button
                  onClick={() => handleCheckout('student_monthly')}
                  disabled={checkoutLoading !== null}
                  className="mt-2 w-full text-center text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline disabled:opacity-50"
                >
                  {t('pricing.prefer_monthly_prefix')} {PRICING.CURRENCY}
                  {PRICING.STUDENT_MONTHLY}
                  {t('pricing.prefer_monthly_suffix')}
                </button>
                {studentError && (
                  <p className="mt-3 text-center text-xs text-red-600">{studentError}</p>
                )}
              </div>
            </Card>

            {/* Teacher Card */}
            <Card className="relative flex flex-col p-0 border-purple-500/30 overflow-visible">
              {/* Gradient top edge */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

              <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 shadow-lg shadow-purple-500/25 whitespace-nowrap">
                <BookOpen className="w-3.5 h-3.5 mr-1" />
                {t('pricing.plan.teacher')}
              </Badge>

              <div className="p-8 pb-0">
                <h3 className="text-lg font-bold tracking-tight text-foreground mt-2">
                  {t('pricing.for_teachers')}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  {t('pricing.teacher.tagline_hours')}
                </p>

                {/* Early-access label above the price */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                    {PRICING.EARLY_ACCESS_LABEL}
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    · {t('pricing.limited_time')}
                  </span>
                </div>

                {/* Price - early-access monthly with standard anchor */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    {PRICING.CURRENCY}
                    {PRICING.TEACHER_MONTHLY}
                  </span>
                  <span className="text-muted-foreground text-base">{t('pricing.per_month')}</span>
                  <span className="text-sm text-muted-foreground line-through decoration-amber-500/60">
                    {PRICING.CURRENCY}
                    {PRICING.TEACHER_MONTHLY_STANDARD}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {t('pricing.or_prefix')}{' '}
                  <span className="font-semibold text-foreground">
                    {PRICING.CURRENCY}
                    {PRICING.TEACHER_ANNUAL}
                    {t('pricing.per_year_long')}
                  </span>{' '}
                  <span className="text-muted-foreground/80">
                    ({t('pricing.was_strikethrough_prefix')}{' '}
                    <span className="line-through decoration-amber-500/60">
                      {PRICING.CURRENCY}
                      {PRICING.TEACHER_ANNUAL_STANDARD}
                      {t('pricing.per_year_long')}
                    </span>
                    )
                  </span>
                  {teacherAnnualSavingsVsMonthly > 0 && (
                    <span className="text-muted-foreground/80">
                      {' '}
                      · {t('pricing.save_vs_monthly_prefix')} {PRICING.CURRENCY}
                      {teacherAnnualSavingsVsMonthly.toFixed(2)}{' '}
                      {t('pricing.save_vs_monthly_suffix')}
                    </span>
                  )}
                </p>
                <p className="text-sm text-emerald-600 font-semibold mb-3 mt-3">
                  {PRICING.TRIAL_TEXT} · {t('pricing.trial_line_card_required')}
                </p>

                {/* Affiliate / promo code callout - mirrors the Student
                    card's pill so Teacher visitors see the same offer
                    surface. Both plans honour 2026ENGLISH and any
                    active affiliate code for a flat £9.99 saving. */}
                <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 px-3 py-2 mb-6">
                  <p className="text-xs font-semibold text-emerald-700">
                    {t('pricing.with_any_code_prefix')}{' '}
                    <code className="font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded">
                      {PRICING.AFFILIATE_PROMO_CODE}
                    </code>
                    {': '}
                    {t('pricing.with_any_code_per_year_save')
                      .replace('{currency}', PRICING.CURRENCY)
                      .replace('{annual}', String(PRICING.TEACHER_ANNUAL_WITH_CODE))
                      .replace('{currency}', PRICING.CURRENCY)
                      .replace('{saving}', String(PRICING.TEACHER_ANNUAL_SAVINGS))}
                  </p>
                </div>

                {/* Free features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {t('pricing.always_free_label')}
                  </p>
                  <ul className="space-y-2.5">
                    {TEACHER_FREE_FEATURE_KEYS.map((f) => (
                      <FeatureRow key={f.key} feature={t(f.key)} included={f.included} free />
                    ))}
                  </ul>
                </div>

                {/* Premium features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {t('pricing.premium_label')}
                    <span className="text-purple-600/70 normal-case ml-1">
                      {t('pricing.premium_then_unlimited_prefix').replace(
                        '{n}',
                        String(PRICING.FREE_USES_PER_FEATURE),
                      )}
                    </span>
                  </p>
                  <ul className="space-y-2.5">
                    {TEACHER_PREMIUM_FEATURE_KEYS.map((f) => (
                      <PremiumFeatureRow key={f.key} feature={t(f.key)} icon={f.icon} />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto p-8 pt-0">
                <Button
                  variant="default"
                  className="w-full bg-purple-500 hover:bg-purple-500/85 shadow-lg shadow-purple-500/20 text-white"
                  size="lg"
                  onClick={() => handleCheckout('teacher_annual')}
                  disabled={checkoutLoading !== null}
                >
                  {checkoutLoading === 'teacher_annual'
                    ? t('pricing.starting_checkout')
                    : t('pricing.start_7day_trial')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <button
                  onClick={() => handleCheckout('teacher_monthly')}
                  disabled={checkoutLoading !== null}
                  className="mt-2 w-full text-center text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline disabled:opacity-50"
                >
                  {t('pricing.prefer_monthly_prefix')} {PRICING.CURRENCY}
                  {PRICING.TEACHER_MONTHLY}
                  {t('pricing.prefer_monthly_suffix')}
                </button>
                {teacherError && (
                  <p className="mt-3 text-center text-xs text-red-600">{teacherError}</p>
                )}
              </div>
            </Card>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground/80 max-w-2xl mx-auto">
            {VAT_LABEL}
          </p>
        </div>
      </section>

      {/* ───────── Schools Section ───────── */}
      <section className="relative py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="bg-primary/10 border-primary/25 text-primary text-sm font-bold mb-6 gap-2 px-4 py-1.5"
            >
              <School className="w-4 h-4" />
              The English Hub for Schools
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
              Structured pilots and annual deployment
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Most schools begin with a structured Founder School Pilot over{' '}
              {PRICING_DISPLAY.schoolPilotLength}, then move to an annual deployment. Founder pilots
              are available for early school partners.
            </p>
          </div>

          <SchoolPricingCards />

          <p className="mt-8 text-center text-xs text-muted-foreground/80 max-w-2xl mx-auto">
            {VAT_LABEL}
          </p>
        </div>
      </section>

      {/* ───────── Demo showcase ───────── */}
      <DemoShowcase />

      {/* ───────── How Free Access Works ───────── */}
      <section className="relative py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            title={t('pricing.how_free_works.title')}
            subtitle={t('pricing.how_free_works.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                icon: Users,
                color: 'text-primary bg-primary/10 border-primary/20',
                title: 'Register',
                desc: 'Create your free account in under a minute. Choose your exam board and role.',
              },
              {
                step: '2',
                icon: Sparkles,
                color: 'text-purple-600 bg-purple-500/10 border-purple-500/20',
                title: 'Explore',
                desc: `Every premium feature includes ${PRICING.FREE_USES_PER_FEATURE} free uses. Try AI marking, mock exams, lesson plans, and more.`,
              },
              {
                step: '3',
                icon: Zap,
                color: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
                title: 'Upgrade',
                desc: 'When you\u2019re ready, start a 7-day free trial. Card required - cancel before day 7 at no cost, or it converts automatically.',
              },
            ].map((item) => (
              <Card key={item.step} className="p-6 text-center border-border/40">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.color}`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Connecting arrows (desktop only) */}
          <div className="hidden md:flex justify-center mt-8">
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Create Free Account
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="md:hidden flex justify-center mt-8">
            <Button
              variant="default"
              size="lg"
              className="w-full max-w-sm text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Create Free Account
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="relative py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading title={t('pricing.faq.title')} />

          <div className="rounded-2xl border border-border/60 bg-card px-6 sm:px-8">
            {faqItems.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 max-w-md mx-auto">
            Still have questions?{' '}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Get in touch
            </Link>{' '}
            and we will get back to you within 24 hours.
          </p>
        </div>
      </section>
    </main>
  )
}
