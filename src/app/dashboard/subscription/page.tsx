'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PRICING } from '@/constants/pricing'
import { useT } from '@/lib/i18n/use-t'

// ─── Types ──────────────────────────────────────────────────────────────

interface SubscriptionData {
  plan: 'MONTHLY'
  status: 'ACTIVE' | 'CANCELLED' | 'PAST_DUE' | 'TRIALING'
  currentPeriodEnd: string
  currentPeriodStart: string
  cancelledAt: string | null
  paymentCount: number
  coolingOffWaived: boolean
}

// ─── Subscription Management Page ───────────────────────────────────────

export default function SubscriptionPage() {
  const t = useT()
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSubscription()
  }, [])

  async function fetchSubscription() {
    try {
      const response = await fetch('/api/user/subscription')
      if (!response.ok) {
        if (response.status === 404) {
          setSubscription(null)
          setLoading(false)
          return
        }
        throw new Error(t('dash.subscription.err.load'))
      }
      const data = await response.json()
      setSubscription(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : t('dash.subscription.err.load'))
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">{t('dash.subscription.loading')}</div>
      </div>
    )
  }

  // No subscription
  if (!subscription) {
    return (
      <div className="min-h-screen bg-muted">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-card rounded-2xl shadow-sm border border-border p-8 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {t('dash.subscription.none_title')}
            </h1>
            <p className="text-muted-foreground mb-8">{t('dash.subscription.none_body')}</p>
            <Link
              href="/account/billing"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t('dash.subscription.view_plans')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const periodEnd = new Date(subscription.currentPeriodEnd)
  const isCancelled = subscription.cancelledAt !== null
  const isTrialing = subscription.status === 'TRIALING'
  const isPastDue = subscription.status === 'PAST_DUE'

  const monthlyPrice = PRICING.STUDENT_MONTHLY
  const currentPrice = monthlyPrice

  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-foreground mb-8">{t('dash.subscription.title')}</h1>

        {/* Status banner */}
        {isPastDue && (
          <div className="bg-red-950/20 border border-red-900/40 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-400 font-medium">
              {t('dash.subscription.past_due_banner')}
            </p>
          </div>
        )}

        {isCancelled && (
          <div className="bg-amber-950/20 border border-amber-900/40 rounded-lg p-4 mb-6">
            <p className="text-sm text-clay-600">
              {t('dash.subscription.cancelled_banner_a')}{' '}
              <strong>{periodEnd.toLocaleDateString('en-GB')}</strong>.
            </p>
          </div>
        )}

        {isTrialing && (
          <div className="bg-blue-950/20 border border-blue-900/40 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-400">
              {t('dash.subscription.trial_banner_a')}{' '}
              <strong>{periodEnd.toLocaleDateString('en-GB')}</strong>.{' '}
              {t('dash.subscription.trial_banner_b')} &pound;{currentPrice.toFixed(2)}/
              {t('dash.subscription.month')}.
            </p>
          </div>
        )}

        {/* Current plan card */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {t('dash.subscription.monthly_plan')}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {isTrialing
                  ? t('dash.subscription.status.free_trial')
                  : isCancelled
                    ? t('dash.subscription.status.cancelled')
                    : t('dash.subscription.status.active')}
              </p>
            </div>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                isPastDue
                  ? 'bg-red-950/30 text-red-300'
                  : isCancelled
                    ? 'bg-muted text-foreground'
                    : isTrialing
                      ? 'bg-blue-950/30 text-blue-700 dark:text-blue-300'
                      : 'bg-green-950/30 text-green-300'
              }`}
            >
              {isPastDue
                ? t('dash.subscription.badge.past_due')
                : isCancelled
                  ? t('dash.subscription.badge.cancelled')
                  : isTrialing
                    ? t('dash.subscription.badge.trial')
                    : t('dash.subscription.badge.active')}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">
                {isCancelled
                  ? t('dash.subscription.access_ends')
                  : t('dash.subscription.next_billing')}
              </span>
              <span className="text-sm font-medium text-foreground">
                {periodEnd.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>

            {!isCancelled && (
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  {isTrialing
                    ? t('dash.subscription.amount_after_trial')
                    : t('dash.subscription.billing_amount')}
                </span>
                <span className="text-sm font-medium text-foreground">
                  &pound;{currentPrice.toFixed(2)}/{t('dash.subscription.month')}
                </span>
              </div>
            )}

            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">
                {t('dash.subscription.payments_made')}
              </span>
              <span className="text-sm font-medium text-foreground">
                {subscription.paymentCount}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          {/* Cancel subscription */}
          {!isCancelled && (
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
              <h3 className="text-base font-semibold text-foreground mb-2">
                {t('dash.subscription.cancel_title')}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('dash.subscription.cancel_body')}
              </p>
              <Link
                href="/dashboard/subscription/cancel"
                className="inline-block px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              >
                {t('dash.subscription.cancel_title')}
              </Link>
            </div>
          )}

          {/* Resubscribe */}
          {isCancelled && (
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6 text-center">
              <h3 className="text-base font-semibold text-foreground mb-2">
                {t('dash.subscription.resub_title')}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('dash.subscription.resub_body')}
              </p>
              <Link
                href="/account/billing"
                className="inline-block px-6 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                {t('dash.subscription.view_plans')}
              </Link>
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 bg-red-950/20 border border-red-900/40 rounded-lg p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}
