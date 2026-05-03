'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { useRewardful } from '@/hooks/useRewardful'
import { PRICING } from '@/constants/pricing'
import { VAT_LABEL } from '@/lib/copy/pricing'
import { AffiliateCodeField, useAffiliateCodeField } from '@/components/billing/AffiliateCodeField'
import { trackEvent } from '@/lib/gtag'
import { capture as phCapture, EVENTS as PH_EVENTS } from '@/lib/posthog'
import { getCourseName } from '@/lib/utils'
import { fireTrustpilotInvite } from '@/lib/trustpilot/fire-invite-js'
import {
  CreditCard,
  Crown,
  Loader2,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Calendar,
  BookOpen,
  CheckCircle,
} from 'lucide-react'

interface EnrolmentRow {
  id: string
  course_id: string
  enrolled_at: string
  payment_type: 'free' | 'one_time' | 'subscription'
}

export default function BillingPage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
  const { referral: rewardfulReferral } = useRewardful()
  const supabase = createClient()

  const [enrolments, setEnrolments] = useState<EnrolmentRow[]>([])
  const [pageLoading, setPageLoading] = useState(true)
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null)
  const [portalLoading, setPortalLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  // Set when /api/stripe/checkout returns 403 email_verification_required.
  // Rendered as a calm inline notice (separate from the generic red error
  // banner) with a link to /auth/resend-verification. See the
  // soft-verification policy in src/lib/auth/email-verification-policy.ts.
  const [needsEmailVerification, setNeedsEmailVerification] = useState(false)

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/account/billing')
      return
    }

    if (user) {
      loadEnrolments()
    }
  }, [user, router])

  async function loadEnrolments() {
    const { data, error } = await supabase
      .from('enrolments')
      .select('id, course_id, enrolled_at, payment_type')
      .eq('user_id', user!.id)
      .order('enrolled_at', { ascending: false })

    if (!error && data) {
      setEnrolments(data)
    }
    setPageLoading(false)
  }

  const isPro = profile?.subscription_status === 'pro'

  // Trustpilot InviteJS — fire on mount for Premium subscribers returning to
  // the billing page (the Stripe checkout return URL). The server-side
  // `/api/trustpilot/fired-check` gates on age + opt-outs + dedup, so a
  // minor or opted-out user reaching this page is a silent no-op.
  useEffect(() => {
    if (!user || !isPro) return
    void fireTrustpilotInvite({
      email: user.email ?? '',
      // Trustpilot Invite wants a given name, not the full name. Profile
      // stores `full_name` (one string) so we take the first whitespace-
      // delimited token — good enough for Trustpilot's greeting, and empty
      // string is an acceptable fallback per the InviteJS contract.
      name: (profile?.full_name ?? '').trim().split(/\s+/)[0] ?? '',
      referenceId: user.id,
      products: ['subscription'],
      trigger: 'student_90d_retention',
    })
  }, [user, isPro, profile])
  const isCancelled = profile?.subscription_status === 'cancelled'
  const subscriptionEnd = profile?.subscription_end_date
    ? new Date(profile.subscription_end_date)
    : null

  // Plan keys map 1:1 to /api/stripe/checkout's PlanKey type. Student keys
  // resolve to STRIPE_PRICE_STUDENT_* env vars (with PRO_* fallback);
  // Teacher keys resolve to STRIPE_PRICE_TEACHER_* (with PRO_* fallback).
  // Previously both buttons sent `'monthly'` which silently charged every
  // teacher at the student price.
  type CheckoutPlan = 'student_monthly' | 'student_annual' | 'teacher_monthly' | 'teacher_annual'

  // Affiliate / promo code field state — same component shown on /pricing.
  // When a code is applied and the user clicks an eligible plan, we
  // route through /api/promo/redeem instead of /api/stripe/checkout.
  const codeField = useAffiliateCodeField()

  async function handleCheckout(plan: CheckoutPlan) {
    setCheckoutLoading(plan)
    setError(null)
    setNeedsEmailVerification(false)

    // Code-redemption path: only Student Annual qualifies right now.
    if (codeField.appliedCode) {
      if (plan !== 'student_annual') {
        setError(
          `Your code “${codeField.appliedCode}” only applies to Student Annual (£${PRICING.STUDENT_ANNUAL_WITH_CODE}/year). Pick the Student Annual plan, or remove the code to upgrade to ${plan} at the standard price.`,
        )
        setCheckoutLoading(null)
        return
      }
      try {
        const res = await fetch('/api/promo/redeem', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code: codeField.appliedCode,
            productId: 'student_annual',
          }),
        })
        // /api/promo/redeem uses successResponse — payload at top level,
        // no { data: ... } envelope.
        const json = (await res.json().catch(() => ({}))) as {
          url?: string
          error?: string
        }
        if (!res.ok || !json.url) {
          if (res.status === 403 && json.error === 'email_verification_required') {
            setNeedsEmailVerification(true)
            setCheckoutLoading(null)
            return
          }
          setError(json.error || "We couldn't apply that code right now. Please try again.")
          setCheckoutLoading(null)
          return
        }
        trackEvent('begin_checkout', { currency: 'GBP' })
        phCapture(PH_EVENTS.SUBSCRIPTION_STARTED, { plan, promoCode: codeField.appliedCode })
        window.location.href = json.url
        return
      } catch {
        setError('Something went wrong applying the code. Please try again.')
        setCheckoutLoading(null)
        return
      }
    }

    // Standard (no-code) checkout path.
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          mode: 'subscription',
          ...(rewardfulReferral && { rewardful_referral: rewardfulReferral }),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        // Soft email-verification gate (403). Render a calm inline notice
        // with a link to resend the verification email, instead of the
        // generic red error banner — this is the one expected non-error
        // failure mode pre-checkout.
        if (res.status === 403 && data?.error === 'email_verification_required') {
          setNeedsEmailVerification(true)
          setCheckoutLoading(null)
          return
        }
        setError(data.error || 'Failed to create checkout session.')
        setCheckoutLoading(null)
        return
      }

      trackEvent('begin_checkout', { currency: 'GBP' })
      // Funnel: subscription_started — 7-day free trial begins when the
      // user lands on Stripe Checkout. Consent + minor gating happens in
      // src/lib/posthog.ts.
      phCapture(PH_EVENTS.SUBSCRIPTION_STARTED, { plan })
      window.location.href = data.url
    } catch {
      setError('Something went wrong. Please try again.')
      setCheckoutLoading(null)
    }
  }

  async function handleManageSubscription() {
    setPortalLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/stripe/portal', {
        method: 'POST',
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to open billing portal.')
        setPortalLoading(false)
        return
      }

      window.location.href = data.url
    } catch {
      setError('Something went wrong. Please try again.')
      setPortalLoading(false)
    }
  }

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/account"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to account
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Billing &amp; Subscription</h1>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {needsEmailVerification && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6 text-clay-600 text-sm">
            <p className="font-semibold mb-1">Verify your email before upgrading</p>
            <p className="mb-3">
              We&rsquo;ve sent a fresh link to{' '}
              <span className="font-medium">{user?.email ?? 'your inbox'}</span>. Confirm it and
              come back to finish checkout.
            </p>
            <Link
              href="/auth/resend-verification"
              className="inline-flex items-center gap-1.5 text-amber-700 underline underline-offset-2 hover:text-amber-700 transition-colors"
            >
              Resend now
            </Link>
          </div>
        )}

        {profile?.subscription_status === 'past_due' && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6 text-clay-600 text-sm">
            <p className="font-semibold mb-1">Payment failed</p>
            <p>
              We were unable to process your last payment. Please update your payment method to keep
              your Premium access.
            </p>
            <button
              onClick={handleManageSubscription}
              disabled={portalLoading}
              className="mt-3 inline-flex items-center gap-1.5 text-amber-700 underline underline-offset-2 hover:text-amber-700 transition-colors disabled:opacity-50"
            >
              {portalLoading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <ExternalLink className="w-3.5 h-3.5" />
              )}
              Update payment method
            </button>
          </div>
        )}

        {/* Current Plan */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Current Plan</h2>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                isPro
                  ? 'bg-primary/10 text-primary border border-primary/30'
                  : isCancelled
                    ? 'bg-yellow-500/10 text-clay-600 border border-yellow-500/30'
                    : 'bg-border text-muted-foreground border border-border'
              }`}
            >
              {isPro && <Sparkles className="w-3.5 h-3.5" />}
              {isPro ? 'Premium' : isCancelled ? 'Premium (Cancelled)' : 'Free'}
            </span>
          </div>

          {subscriptionEnd && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              {isPro ? 'Renews' : 'Access until'}{' '}
              {subscriptionEnd.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
          )}

          {isPro || isCancelled ? (
            <button
              onClick={handleManageSubscription}
              disabled={portalLoading}
              className="btn-primary"
            >
              {portalLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Loading...
                </>
              ) : (
                <>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Manage Subscription
                </>
              )}
            </button>
          ) : (
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Upgrade to Premium for unlimited access to all courses, practice papers, and premium
                features.
              </p>

              {/* Promo / affiliate code field — same component as /pricing.
                  Renders above the plan options so users can apply a code
                  before clicking Upgrade. Only the Student Annual plan
                  honours codes right now; the field shows a clear error
                  if the user picks a non-eligible plan with a code on. */}
              <AffiliateCodeField {...codeField} className="mb-4" />

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Student Monthly */}
                <div className="border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Student</h3>
                    <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                      Early Access
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-primary mb-1">
                    {PRICING.CURRENCY}
                    {PRICING.STUDENT_MONTHLY}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
                    or {PRICING.CURRENCY}
                    {PRICING.STUDENT_ANNUAL}/year
                  </p>
                  <p className="text-[11px] text-muted-foreground/80 mb-1">
                    Standard{' '}
                    <span className="line-through">
                      {PRICING.CURRENCY}
                      {PRICING.STUDENT_MONTHLY_STANDARD}/month
                    </span>{' '}
                    / {PRICING.CURRENCY}
                    <span className="line-through">
                      {PRICING.STUDENT_ANNUAL_STANDARD}/year
                    </span>{' '}
                    from {PRICING.PRICE_INCREASE_DATE}
                  </p>
                  <p className="text-sm text-emerald-500 font-semibold mb-2">
                    {PRICING.TRIAL_TEXT}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      All courses included
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />3 free uses per feature
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      Cancel anytime
                    </li>
                  </ul>
                  <button
                    onClick={() => handleCheckout('student_monthly')}
                    disabled={checkoutLoading !== null}
                    className="btn-primary w-full text-sm"
                  >
                    {checkoutLoading === 'student_monthly' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Loading...
                      </>
                    ) : (
                      'Upgrade Student'
                    )}
                  </button>
                </div>

                {/* Teacher */}
                <div className="border border-purple-500/30 rounded-xl p-5 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Teacher</h3>
                    <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                      Early Access
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-purple-400 mb-1">
                    {PRICING.CURRENCY}
                    {PRICING.TEACHER_MONTHLY}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
                    or {PRICING.CURRENCY}
                    {PRICING.TEACHER_ANNUAL}/year
                  </p>
                  <p className="text-[11px] text-muted-foreground/80 mb-1">
                    Standard{' '}
                    <span className="line-through">
                      {PRICING.CURRENCY}
                      {PRICING.TEACHER_MONTHLY_STANDARD}/month
                    </span>{' '}
                    / {PRICING.CURRENCY}
                    <span className="line-through">
                      {PRICING.TEACHER_ANNUAL_STANDARD}/year
                    </span>{' '}
                    from {PRICING.PRICE_INCREASE_DATE}
                  </p>
                  <p className="text-sm text-emerald-500 font-semibold mb-2">
                    {PRICING.TRIAL_TEXT}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                      Everything in Student
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                      AI Lesson Builder
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                      Student Analytics
                    </li>
                  </ul>
                  <button
                    onClick={() => handleCheckout('teacher_monthly')}
                    disabled={checkoutLoading !== null}
                    className="btn-primary w-full text-sm bg-purple-600 hover:bg-purple-700"
                  >
                    {checkoutLoading === 'teacher_monthly' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Loading...
                      </>
                    ) : (
                      'Upgrade Teacher'
                    )}
                  </button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/80 mt-4">{VAT_LABEL}</p>
            </div>
          )}
        </section>

        {/* Individual Purchases */}
        <section className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Course Purchases</h2>
          </div>

          {enrolments.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              You have not purchased any individual courses yet.
            </p>
          ) : (
            <div className="divide-y divide-border">
              {enrolments.map((enrolment) => (
                <div
                  key={enrolment.id}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {getCourseName(enrolment.course_id)}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Enrolled{' '}
                      {new Date(enrolment.enrolled_at).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      enrolment.payment_type === 'subscription'
                        ? 'bg-primary/10 text-primary'
                        : enrolment.payment_type === 'one_time'
                          ? 'bg-brand-blue/10 text-brand-blue'
                          : 'bg-border text-muted-foreground'
                    }`}
                  >
                    {enrolment.payment_type === 'subscription'
                      ? 'Subscription'
                      : enrolment.payment_type === 'one_time'
                        ? 'Purchased'
                        : 'Free'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
