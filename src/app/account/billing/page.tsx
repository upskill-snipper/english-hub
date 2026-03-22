'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { useRewardful } from '@/hooks/useRewardful'
import { PRICING } from '@/constants/pricing'
import { getCourseName } from '@/lib/utils'
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
  const isCancelled = profile?.subscription_status === 'cancelled'
  const subscriptionEnd = profile?.subscription_end_date
    ? new Date(profile.subscription_end_date)
    : null

  async function handleCheckout(plan: 'monthly' | 'annual') {
    setCheckoutLoading(plan)
    setError(null)

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
        setError(data.error || 'Failed to create checkout session.')
        setCheckoutLoading(null)
        return
      }

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

        <h1 className="text-3xl font-bold text-foreground mb-8">
          Billing &amp; Subscription
        </h1>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {profile?.subscription_status === 'past_due' && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6 text-yellow-400 text-sm">
            <p className="font-semibold mb-1">Payment failed</p>
            <p>
              We were unable to process your last payment. Please update your
              payment method to keep your Pro access.
            </p>
            <button
              onClick={handleManageSubscription}
              disabled={portalLoading}
              className="mt-3 inline-flex items-center gap-1.5 text-yellow-300 underline underline-offset-2 hover:text-yellow-200 transition-colors disabled:opacity-50"
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
            <h2 className="text-xl font-semibold text-foreground">
              Current Plan
            </h2>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                isPro
                  ? 'bg-primary/10 text-primary border border-primary/30'
                  : isCancelled
                  ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                  : 'bg-border text-muted-foreground border border-border'
              }`}
            >
              {isPro && <Sparkles className="w-3.5 h-3.5" />}
              {isPro ? 'Pro' : isCancelled ? 'Pro (Cancelled)' : 'Free'}
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
                Upgrade to Pro for unlimited access to all courses, practice
                papers, and premium features.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Monthly */}
                <div className="border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Pro Monthly
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-1">
                    {PRICING.CURRENCY}{PRICING.MONTHLY}
                    <span className="text-sm font-normal text-muted-foreground">
                      /month
                    </span>
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      All courses included
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      Cancel anytime
                    </li>
                  </ul>
                  <button
                    onClick={() => handleCheckout('monthly')}
                    disabled={checkoutLoading !== null}
                    className="btn-primary w-full text-sm"
                  >
                    {checkoutLoading === 'monthly' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Loading...
                      </>
                    ) : (
                      'Upgrade Monthly'
                    )}
                  </button>
                </div>

                {/* Annual */}
                <div className="border border-primary/40 rounded-xl p-5 relative">
                  <span className="absolute -top-3 left-4 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Save {PRICING.ANNUAL_SAVE_PERCENT}%
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Pro Annual
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-1">
                    {PRICING.CURRENCY}{PRICING.ANNUAL}
                    <span className="text-sm font-normal text-muted-foreground">
                      /year
                    </span>
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      All courses included
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      Best value
                    </li>
                  </ul>
                  <button
                    onClick={() => handleCheckout('annual')}
                    disabled={checkoutLoading !== null}
                    className="btn-primary w-full text-sm"
                  >
                    {checkoutLoading === 'annual' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Loading...
                      </>
                    ) : (
                      'Upgrade Annual'
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Individual Purchases */}
        <section className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Course Purchases
            </h2>
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
                      {new Date(enrolment.enrolled_at).toLocaleDateString(
                        'en-GB',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}
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
