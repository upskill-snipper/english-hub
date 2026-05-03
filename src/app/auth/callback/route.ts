import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const rawNext = searchParams.get('next') ?? '/dashboard'
  // Validate redirect to prevent open redirect attacks. We re-derive the
  // sanitised target lazily inside `redirectTo()` so callers can override
  // it (e.g. the recovery flow below always sends users to
  // /auth/reset-password regardless of `next`).
  const safeNext =
    rawNext.startsWith('/') && !rawNext.startsWith('//') && !rawNext.includes(':')
      ? rawNext
      : '/dashboard'

  // ── Cookie writes must land on the response, not on next/headers' cookie
  // store. Pre-create the redirect response and let `setAll` mutate
  // `response.cookies` directly so the `Set-Cookie` headers ride along on
  // the 3xx we return at the end.
  //
  // Why this matters: in Next.js 15 route handlers, cookies written via
  // `cookies().set(...)` are NOT consistently applied to a response that's
  // built separately with `NextResponse.redirect(...)`. The session
  // cookies from `exchangeCodeForSession` would silently get dropped, so
  // the browser landed on /dashboard with no session and the middleware
  // (`updateSession` → `getUser()` returns null) bounced them straight to
  // /auth/login. This produced the "I logged in / clicked the reset link
  // but I'm back at the login page" symptom for both PKCE-confirmation
  // signups, OAuth, and password recovery.
  let response = NextResponse.redirect(`${origin}${safeNext}`)

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            // Mirror onto the request so subsequent reads inside this
            // handler see the new value, then write to the response so
            // the browser receives Set-Cookie.
            request.cookies.set({ name, value, ...options })
            response.cookies.set({
              name,
              value,
              ...options,
              secure: process.env.NODE_ENV === 'production',
              sameSite: options?.sameSite ?? 'lax',
            })
          })
        },
      },
    },
  )

  // Helper to swap the redirect target while preserving any cookies that
  // have already been written to `response.cookies`.
  const redirectTo = (target: string) => {
    const next = NextResponse.redirect(`${origin}${target}`)
    response.cookies.getAll().forEach((c) => next.cookies.set(c))
    response = next
    return response
  }

  // Handle PKCE flow (code exchange) — covers email-confirmed signup,
  // OAuth, magic links and password reset when the project uses PKCE.
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Password recovery via PKCE: Supabase tags the session as a
      // recovery session, but we still need to land the user on
      // /auth/reset-password rather than the default `next` (which the
      // browser-side `resetPasswordForEmail` call sets to
      // /auth/reset-password anyway, but be defensive). We detect the
      // recovery intent two ways:
      //   1. `type=recovery` query param (some Supabase versions set it)
      //   2. The `next` path itself starts with /auth/reset-password
      // and override the destination accordingly.
      if (type === 'recovery' || safeNext.startsWith('/auth/reset-password')) {
        return redirectTo('/auth/reset-password')
      }
      // For signup verification, add welcome flag so dashboard shows onboarding
      if (type === 'signup') {
        const separator = safeNext.includes('?') ? '&' : '?'
        return redirectTo(`${safeNext}${separator}welcome=true`)
      }
      return redirectTo(safeNext)
    }
  }

  // Handle token_hash flow (email verification, magic links, recovery via
  // the legacy non-PKCE flow that some Supabase email templates still use).
  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: type as 'signup' | 'email' | 'recovery' | 'invite',
    })

    if (!error) {
      if (type === 'recovery') {
        return redirectTo('/auth/reset-password')
      }
      if (type === 'signup') {
        const separator = safeNext.includes('?') ? '&' : '?'
        return redirectTo(`${safeNext}${separator}welcome=true`)
      }
      return redirectTo(safeNext)
    }
  }

  // If no code/token_hash or exchange failed, redirect to login with error.
  // Use `redirectTo` so any cookies Supabase set during a partial failure
  // (e.g. cleared session cookies) still reach the browser.
  return redirectTo('/auth/login?error=auth_callback_error')
}
