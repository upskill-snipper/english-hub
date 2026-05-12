'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  Clock,
  Loader2,
  ShieldOff,
  Trash2,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore, useAuthUserLoading } from '@/store/auth-store'

/**
 * /account/delete — GDPR Art.17 self-service erasure flow.
 *
 * Children's Code expects deletion to be obvious and easy: this page is a
 * single, focused view (separate from the Account settings page) so a
 * minor user can find and complete it without hunting through tabs.
 */
export default function DeleteAccountPage() {
  const router = useRouter()
  const supabase = createClient()
  const { user, isLoading: authLoading } = useAuthUserLoading()

  const [confirmText, setConfirmText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [scheduledPurgeAt, setScheduledPurgeAt] = useState<string | null>(null)

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/auth/login?redirect=/account/delete')
    }
  }, [authLoading, user, router])

  async function handleDelete(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (confirmText !== 'DELETE') {
      setError('Please type DELETE in the confirmation field to continue.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/account/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ confirm: 'DELETE' }),
      })

      const data = (await res.json().catch(() => ({}))) as {
        error?: string
        scheduledPurgeAt?: string
      }

      if (!res.ok) {
        setError(
          data.error ||
            'We could not process your request. Please try again or email dpo@theenglishhub.app.',
        )
        setSubmitting(false)
        return
      }

      setScheduledPurgeAt(data.scheduledPurgeAt ?? null)
      // Server already invalidated the Supabase session; clear the
      // client-side store and redirect after a short moment so the user
      // can read the confirmation copy.
      await supabase.auth.signOut().catch(() => {})
      useAuthStore.getState().clear()
      window.setTimeout(() => router.replace('/'), 6000)
    } catch {
      setError(
        'Network error. Please check your connection and try again, or email dpo@theenglishhub.app.',
      )
      setSubmitting(false)
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  // Success state — request accepted, grace period has begun.
  if (scheduledPurgeAt) {
    const purgeDateLabel = new Date(scheduledPurgeAt).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    return (
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <section
            aria-labelledby="account-delete-success-heading"
            className="bg-card border border-emerald-500/30 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <h1
                id="account-delete-success-heading"
                className="text-xl font-semibold text-foreground"
              >
                Account scheduled for deletion
              </h1>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Your English Hub account will be permanently deleted on{' '}
              <span className="font-semibold text-foreground">{purgeDateLabel}</span>. Until then,
              you can email{' '}
              <a href="mailto:dpo@theenglishhub.app" className="text-primary hover:underline">
                dpo@theenglishhub.app
              </a>{' '}
              to restore your account.
            </p>
            <p className="text-sm text-muted-foreground">
              You have been signed out. We&rsquo;ll send a confirmation email shortly. Returning to
              the home page&hellip;
            </p>
          </section>
        </div>
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

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Trash2 className="w-6 h-6 text-red-600" />
            <h1 className="text-3xl font-bold text-foreground">Delete my account</h1>
          </div>
          <p className="text-muted-foreground">
            You can ask us to remove your account and personal data at any time. This page walks you
            through what happens next.
          </p>
        </header>

        {/* What gets deleted */}
        <section
          aria-labelledby="delete-explainer-heading"
          className="bg-card border border-border rounded-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldOff className="w-5 h-5 text-primary" />
            <h2 id="delete-explainer-heading" className="text-xl font-semibold text-foreground">
              What gets deleted
            </h2>
          </div>
          <ul className="space-y-2 text-sm text-foreground mb-4">
            <li className="flex gap-2">
              <span aria-hidden className="text-red-600">
                &bull;
              </span>
              <span>
                <span className="font-semibold">Your profile</span> — name, email, school, year
                group, exam board, password.
              </span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-red-600">
                &bull;
              </span>
              <span>
                <span className="font-semibold">Your scores and grades</span> — every quiz attempt,
                predicted grade, and progress record tied to your account.
              </span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-red-600">
                &bull;
              </span>
              <span>
                <span className="font-semibold">Your essay history</span> — essays you submitted, AI
                feedback, and saved drafts.
              </span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Aggregate analytics</span> (e.g.
            &ldquo;how many users completed Lesson 3 this month&rdquo;) are kept in{' '}
            <em>anonymised</em> form so we can keep improving the product. They cannot be linked
            back to you. Payment records are kept separately for 7 years where HMRC requires it.
          </p>
        </section>

        {/* 30-day grace period */}
        <section
          aria-labelledby="delete-grace-heading"
          className="bg-card border border-amber-500/30 rounded-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-amber-600" />
            <h2 id="delete-grace-heading" className="text-xl font-semibold text-foreground">
              30-day grace period
            </h2>
          </div>
          <p className="text-sm text-foreground mb-2">
            We hold your data for <span className="font-semibold">30 days</span> before permanently
            deleting it. During that time you can email{' '}
            <a href="mailto:dpo@theenglishhub.app" className="text-primary hover:underline">
              dpo@theenglishhub.app
            </a>{' '}
            and we&rsquo;ll restore your account.
          </p>
          <p className="text-sm text-muted-foreground">
            After 30 days, deletion is permanent and cannot be undone.
          </p>
        </section>

        {/* Confirmation form */}
        <section
          aria-labelledby="delete-confirm-heading"
          className="bg-card border border-red-500/30 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h2 id="delete-confirm-heading" className="text-xl font-semibold text-red-600">
              Confirm deletion
            </h2>
          </div>

          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="flex items-start gap-2 rounded-lg p-3 mb-4 text-sm bg-red-500/10 border border-red-500/30 text-red-600"
            >
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleDelete} className="space-y-4">
            <div>
              <label htmlFor="confirmText" className="label">
                Type <span className="font-mono font-bold text-red-600">DELETE</span> to confirm
              </label>
              <input
                id="confirmText"
                name="confirmText"
                type="text"
                inputMode="text"
                autoComplete="off"
                autoCapitalize="characters"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="DELETE"
                className="input-field"
                aria-describedby="confirmText-help"
                disabled={submitting}
              />
              <p id="confirmText-help" className="text-xs text-muted-foreground mt-1">
                We require this so accidental clicks can&rsquo;t delete your account.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={submitting || confirmText !== 'DELETE'}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm bg-red-500/10 text-red-600 border border-red-500/30 hover:bg-red-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting&hellip;
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    Delete my account
                  </>
                )}
              </button>
              <Link
                href="/account"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors"
                aria-disabled={submitting}
              >
                Cancel
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
