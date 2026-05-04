'use client'

/**
 * <EmailCaptureCard /> — lead-magnet email capture surface.
 *
 * Drops into study guides, blog posts, and lead-magnet landing pages.
 * Renders an email + consent form, POSTs to /api/email/capture, and
 * shows a confirmation state with a download link when the API returns
 * a `signed_download_url` (currently always null — a future ticket will
 * mint signed Supabase URLs server-side).
 *
 * Brand voice: factual and calm. No exclamation marks, no hype.
 *
 * Analytics: fires the `email_captured` event into both PostHog and
 * GA4 on success. PostHog goes through the consent-gated `capture`
 * helper so events are silently dropped for visitors who haven't
 * accepted analytics cookies and for under-16 accounts. GA4 only fires
 * if gtag has been loaded by the consent banner.
 */

import { useState, useId, type FormEvent } from 'react'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { capture as phCapture } from '@/lib/posthog'
import { trackEvent } from '@/lib/gtag'
import { cn } from '@/lib/utils'

interface EmailCaptureCardProps {
  /** Title of the lead magnet, e.g. "Free Macbeth quote bank". */
  magnetTitle: string
  /** Short description shown under the title. */
  magnetDescription: string
  /** Slug for the magnet, used as the database key. */
  magnetSlug: string
  /** Optional class for layout. */
  className?: string
  /** Optional explicit success message (overrides default). */
  successMessage?: string
}

interface CaptureResponse {
  success?: boolean
  already_subscribed?: boolean
  signed_download_url?: string | null
  error?: string
  errors?: Record<string, string[]>
}

const DEFAULT_SUCCESS_MESSAGE = 'Sent. Check your inbox in the next minute.'

export default function EmailCaptureCard({
  magnetTitle,
  magnetDescription,
  magnetSlug,
  className,
  successMessage,
}: EmailCaptureCardProps) {
  // Stable ids for label/input/aria-describedby pairing across renders.
  const emailId = useId()
  const consentId = useId()
  const errorId = useId()

  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!email) {
      setError('Please enter your email address.')
      return
    }
    if (!consent) {
      setError('Please tick the consent box to continue.')
      return
    }

    setSubmitting(true)

    // Capture the current path for audit + analytics. Only available
    // client-side, hence the typeof window guard.
    const sourcePath =
      typeof window !== 'undefined'
        ? `${window.location.pathname}${window.location.search}`
        : undefined

    try {
      const response = await fetch('/api/email/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          magnetSlug,
          sourcePath,
          consentMarketing: consent,
        }),
      })

      const data: CaptureResponse = await response.json().catch(() => ({}))

      if (!response.ok) {
        if (response.status === 429) {
          setError('Too many requests. Please try again in a few minutes.')
        } else if (response.status === 400) {
          setError(data.error ?? 'Please check your email address and try again.')
        } else {
          setError('Something went wrong. Please try again.')
        }
        setSubmitting(false)
        return
      }

      // Success — show the confirmation panel and fire analytics.
      setDownloadUrl(data.signed_download_url ?? null)
      setSubmitted(true)
      setSubmitting(false)

      // PostHog (consent-gated inside the helper).
      phCapture('email_captured', {
        magnet_slug: magnetSlug,
        source_path: sourcePath ?? null,
      })

      // GA4 — gtag.js no-ops if not loaded by the consent banner.
      trackEvent('email_captured', {
        magnet_slug: magnetSlug,
        source_path: sourcePath,
      })
    } catch {
      setError('Network error. Please check your connection and try again.')
      setSubmitting(false)
    }
  }

  return (
    <Card className={cn('w-full max-w-md', className)}>
      <CardContent className="flex flex-col gap-4 py-2">
        <div className="space-y-1.5">
          <h3 className="font-heading text-lg font-semibold tracking-tight">{magnetTitle}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{magnetDescription}</p>
        </div>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="rounded-lg border border-border/60 bg-muted/30 p-4 space-y-3"
          >
            {downloadUrl ? (
              <>
                <p className="text-sm text-foreground">Your download is ready.</p>
                <a href={downloadUrl} download className={buttonVariants({ variant: 'default' })}>
                  Download {magnetTitle}
                </a>
              </>
            ) : (
              <>
                <p className="text-sm text-foreground">
                  {successMessage ?? DEFAULT_SUCCESS_MESSAGE}
                </p>
                <p className="text-sm text-muted-foreground">
                  In the meantime, browse our{' '}
                  <Link
                    href="/revision"
                    className="underline underline-offset-3 hover:text-foreground"
                  >
                    revision library
                  </Link>
                  .
                </p>
              </>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor={emailId}>Email address</Label>
              <Input
                id={emailId}
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                aria-describedby={error ? errorId : undefined}
                aria-invalid={error ? true : undefined}
              />
            </div>

            <label
              htmlFor={consentId}
              className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground"
            >
              <input
                id={consentId}
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                disabled={submitting}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary cursor-pointer"
                aria-describedby={error ? errorId : undefined}
              />
              <span>
                I&apos;d like email updates from The English Hub. I can unsubscribe any time.
              </span>
            </label>

            {error && (
              <p id={errorId} role="alert" className="text-sm text-destructive">
                {error}
              </p>
            )}

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  <span>Sending</span>
                </>
              ) : (
                <span>Send it to me</span>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
