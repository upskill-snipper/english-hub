'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
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

const PRO_MONTHLY_PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID || ''
const PRO_ANNUAL_PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRO_ANNUAL_PRICE_ID || ''

export default function BillingPage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
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

  async function handleCheckout(priceId: string) {
    setCheckoutLoading(priceId)
    setError(null)

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, mode: 'subscription' }),
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
        <Loader2 className="w-8 h-8 animate-spin text-brand-accent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/account"
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to account
        </Link>

        <h1 className="text-3xl font-bold text-brand-text mb-8">
          Billing &amp; Subscription
        </h1>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Current Plan */}
        <section className="bg-brand-card border border-brand-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-5 h-5 text-brand-accent" />
            <h2 className="text-xl font-semibold text-brand-text">
              Current Plan
            </h2>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                isPro
                  ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/30'
                  : isCancelled
                  ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                  : 'bg-brand-border text-brand-muted border border-brand-border'
              }`}
            >
              {isPro && <Sparkles className="w-3.5 h-3.5" />}
              {isPro ? 'Pro' : isCancelled ? 'Pro (Cancelled)' : 'Free'}
            </span>
          </div>

          {subscriptionEnd && (
            <div className="flex items-center gap-2 text-sm text-brand-muted mb-4">
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
              <p className="text-brand-muted text-sm">
                Upgrade to Pro for unlimited access to all courses, practice
                papers, and premium features.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Monthly */}
                <div className="border border-brand-border rounded-xl p-5 hover:border-brand-accent/50 transition-colors">
                  <h3 className="text-lg font-semibold text-brand-text mb-1">
                    Pro Monthly
                  </h3>
                  <p className="text-2xl font-bold text-brand-accent mb-1">
                    &pound;9.99
                    <span className="text-sm font-normal text-brand-muted">
                      /month
                    </span>
                  </p>
                  <ul className="text-sm text-brand-muted space-y-1 mb-4">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-accent" />
                      All courses included
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-accent" />
                      Cancel anytime
                    </li>
                  </ul>
                  <button
                    onClick={() => handleCheckout(PRO_MONTHLY_PRICE_ID)}
                    disabled={checkoutLoading !== null}
                    className="btn-primary w-full text-sm"
                  >
                    {checkoutLoading === PRO_MONTHLY_PRICE_ID ? (
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
                <div className="border border-brand-accent/40 rounded-xl p-5 relative">
                  <span className="absolute -top-3 left-4 bg-brand-accent text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Save 33%
                  </span>
                  <h3 className="text-lg font-semibold text-brand-text mb-1">
                    Pro Annual
                  </h3>
                  <p className="text-2xl font-bold text-brand-accent mb-1">
                    &pound;79.99
                    <span className="text-sm font-normal text-brand-muted">
                      /year
                    </span>
                  </p>
                  <ul className="text-sm text-brand-muted space-y-1 mb-4">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-accent" />
                      All courses included
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-accent" />
                      Best value
                    </li>
                  </ul>
                  <button
                    onClick={() => handleCheckout(PRO_ANNUAL_PRICE_ID)}
                    disabled={checkoutLoading !== null}
                    className="btn-primary w-full text-sm"
                  >
                    {checkoutLoading === PRO_ANNUAL_PRICE_ID ? (
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
        <section className="bg-brand-card border border-brand-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-brand-accent" />
            <h2 className="text-xl font-semibold text-brand-text">
              Course Purchases
            </h2>
          </div>

          {enrolments.length === 0 ? (
            <p className="text-brand-muted text-sm">
              You have not purchased any individual courses yet.
            </p>
          ) : (
            <div className="divide-y divide-brand-border">
              {enrolments.map((enrolment) => (
                <div
                  key={enrolment.id}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="text-brand-text text-sm font-medium">
                      {getCourseName(enrolment.course_id)}
                    </p>
                    <p className="text-brand-muted text-xs">
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
                        ? 'bg-brand-accent/10 text-brand-accent'
                        : enrolment.payment_type === 'one_time'
                        ? 'bg-brand-blue/10 text-brand-blue'
                        : 'bg-brand-border text-brand-muted'
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
