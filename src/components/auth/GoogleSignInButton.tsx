'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface GoogleSignInButtonProps {
  /** Where to redirect after successful Google sign-in. Validated by the existing validateRedirect helper at the consuming site. Defaults to /dashboard */
  redirectTo?: string
  /** Visual variant. Default 'outline'. The 'primary' variant uses the brand emerald gradient. */
  variant?: 'outline' | 'primary'
  /** Optional className passthrough for layout */
  className?: string
  /** Render label text — default 'Continue with Google' */
  label?: string
}

/**
 * One-click Google OAuth sign-in. Delegates to Supabase's
 * `signInWithOAuth` and routes the OAuth callback through
 * `/auth/callback`, preserving the caller's `redirectTo` via the
 * `next` query parameter.
 *
 * The consuming page is expected to validate `redirectTo` with
 * `validateRedirect` from `@/lib/utils` before passing it in, so this
 * component does not re-validate.
 *
 * Gated by the `NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED` env flag — if the
 * flag is not set to `'true'`, the component renders nothing. Hide
 * the surrounding "or sign in with email" divider on the consumer
 * page using the same flag to keep the layout coherent.
 */
export default function GoogleSignInButton({
  redirectTo,
  variant = 'outline',
  className,
  label = 'Continue with Google',
}: GoogleSignInButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Hard guard: if the env flag isn't explicitly 'true', render nothing.
  // This prevents the raw Supabase 'provider is not enabled' error from
  // ever reaching the user when Google OAuth hasn't been wired up in
  // the Supabase project.
  if (process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED !== 'true') {
    return null
  }

  async function handleClick() {
    setError(null)
    setLoading(true)

    const supabase = createClient()
    const siteUrl = window.location.origin
    const next = encodeURIComponent(redirectTo ?? '/dashboard')

    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${siteUrl}/auth/callback?next=${next}`,
      },
    })

    if (oauthError) {
      // Map known Supabase errors to friendly copy. The
      // 'provider is not enabled' case can still happen if the env
      // flag was flipped on before Google was actually enabled in
      // the Supabase dashboard — surface a clear message rather
      // than the raw JSON.
      const raw = oauthError.message?.toLowerCase() ?? ''
      const friendly = raw.includes('provider is not enabled')
        ? 'Google sign-in is not available right now. Please sign in with your email and password instead.'
        : 'We could not start Google sign-in. Please try again, or sign in with your email and password instead.'
      setError(friendly)
      setLoading(false)
      return
    }

    // On success the browser is redirected by Supabase, so we leave
    // the loading state set — the page is about to unload.
  }

  const baseStyles =
    'inline-flex w-full items-center justify-center gap-2.5 rounded-lg border px-5 text-[0.9375rem] font-semibold transition-all duration-200 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-60'

  const variantStyles =
    variant === 'primary'
      ? 'min-h-11 border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/85 hover:shadow-md hover:shadow-primary/15 focus-visible:border-ring'
      : 'min-h-11 border-border bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring'

  return (
    <div className={cn('w-full', className)}>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-label="Sign in with Google"
        className={cn(baseStyles, variantStyles)}
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
        ) : (
          <GoogleLogo aria-hidden="true" />
        )}
        <span>{loading ? 'Redirecting…' : label}</span>
      </button>

      {error && (
        <Alert variant="destructive" role="alert" className="mt-3">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

/**
 * Official multi-coloured Google "G" mark.
 * Source: Google branding guidelines (the same SVG path used across
 * the ecosystem — Stripe, Linear, Vercel, etc.).
 */
function GoogleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  )
}
