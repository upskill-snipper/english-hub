'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useT } from '@/lib/i18n/use-t'

interface AppleSignInButtonProps {
  /** Where to redirect after successful Apple sign-in. The consuming page is
   *  expected to validate this with validateRedirect before passing it in. */
  redirectTo?: string
  /** Optional className passthrough for layout. */
  className?: string
  /** Override label (rare). Defaults to the dictionary `auth.apple.continue`. */
  label?: string
}

/**
 * One-click Apple OAuth sign-in. Mirrors GoogleSignInButton exactly (same
 * Supabase signInWithOAuth → /auth/callback flow, same env-flag hard guard) but
 * for the 'apple' provider and Apple's black-button branding.
 *
 * Gated by `NEXT_PUBLIC_APPLE_OAUTH_ENABLED` — renders nothing unless the flag
 * is 'true', so the raw Supabase "provider is not enabled" error can never reach
 * a user before Apple is configured in the Supabase dashboard (which itself
 * requires an Apple Developer account → Services ID + key). See
 * business-docs/IELTS-launch-setup.md.
 *
 * The callback route (/auth/callback) already exchanges any OAuth code, so no
 * server change is needed — this is provider-agnostic on the server side.
 */
export default function AppleSignInButton({
  redirectTo,
  className,
  label,
}: AppleSignInButtonProps) {
  const t = useT()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const resolvedLabel = label ?? t('auth.apple.continue')

  // Hard guard: render nothing unless the flag is explicitly 'true'.
  if (process.env.NEXT_PUBLIC_APPLE_OAUTH_ENABLED !== 'true') {
    return null
  }

  async function handleClick() {
    setError(null)
    setLoading(true)

    const supabase = createClient()
    const siteUrl = window.location.origin
    const next = encodeURIComponent(redirectTo ?? '/dashboard')

    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo: `${siteUrl}/auth/callback?next=${next}`,
      },
    })

    if (oauthError) {
      const raw = oauthError.message?.toLowerCase() ?? ''
      const friendly = raw.includes('provider is not enabled')
        ? t('auth.apple.error.not_enabled')
        : t('auth.apple.error.generic')
      setError(friendly)
      setLoading(false)
      return
    }
    // On success the browser is redirected by Supabase; leave loading set.
  }

  // The fallback strings keep the button readable even before the dictionary
  // keys are added (useT returns "[[key]]" for unknown keys).
  const continueLabel =
    resolvedLabel && !resolvedLabel.startsWith('[[') ? resolvedLabel : 'Continue with Apple'
  const redirecting = (() => {
    const v = t('auth.apple.redirecting')
    return v && !v.startsWith('[[') ? v : 'Redirecting…'
  })()
  const ariaLabel = (() => {
    const v = t('auth.apple.aria_signin')
    return v && !v.startsWith('[[') ? v : 'Sign in with Apple'
  })()

  const baseStyles =
    'inline-flex w-full items-center justify-center gap-2.5 rounded-lg border px-5 text-[0.9375rem] font-semibold transition-all duration-200 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-60'
  // Apple Human Interface guidance: black button, white logo + text.
  const appleStyles =
    'min-h-11 border-transparent bg-black text-white shadow-sm hover:bg-black/85 hover:shadow-md focus-visible:border-ring dark:bg-white dark:text-black dark:hover:bg-white/90'

  return (
    <div className={cn('w-full', className)}>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-label={ariaLabel}
        className={cn(baseStyles, appleStyles)}
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
        ) : (
          <AppleLogo aria-hidden="true" />
        )}
        <span>{loading ? redirecting : continueLabel}</span>
      </button>

      {error && (
        <Alert variant="destructive" role="alert" className="mt-3">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

/** The Apple logo mark (single path, inherits currentColor). */
function AppleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M17.05 12.04c-.03-2.7 2.2-3.99 2.3-4.06-1.25-1.83-3.2-2.08-3.89-2.11-1.65-.17-3.23.97-4.07.97-.84 0-2.13-.95-3.5-.92-1.8.03-3.46 1.05-4.39 2.66-1.87 3.25-.48 8.06 1.34 10.7.89 1.29 1.95 2.74 3.34 2.69 1.34-.05 1.85-.87 3.47-.87 1.62 0 2.08.87 3.5.84 1.45-.03 2.36-1.32 3.24-2.62 1.02-1.5 1.44-2.95 1.46-3.03-.03-.01-2.8-1.07-2.83-4.26zM14.4 4.16c.74-.9 1.24-2.15 1.1-3.4-1.07.04-2.36.71-3.13 1.61-.69.8-1.29 2.07-1.13 3.29 1.19.09 2.42-.61 3.16-1.5z" />
    </svg>
  )
}
