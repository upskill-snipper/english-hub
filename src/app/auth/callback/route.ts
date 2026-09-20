import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { provisionSignupTrial } from '@/lib/billing/provision-signup-trial'

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

  /**
   * Where a freshly confirmed account should actually land, and with which
   * board already chosen.
   *
   * THE DEFECT THIS FIXES (19 September 2026). Both signup branches sent
   * everyone to /dashboard?welcome=true. The middleware then bounced any
   * /dashboard request with no board cookie to /board-select?next=..., and
   * /board-select never read `next` - every card linked to
   * /revision?setBoard=<id>. So the destination and the welcome flag were
   * both discarded and every new account, whatever its role, landed on the
   * student revision hub.
   *
   * Teachers are the higher-value segment and the examiner tool is the reason
   * they sign up. None of them saw the teacher hub on their first visit.
   *
   * Two writes here:
   *   • route by profiles.role, which the 18 September trigger now populates
   *     correctly (before it, every profile read 'student');
   *   • seed the board cookie from profiles.exam_board when the signup form
   *     captured one, so the middleware's board gate never fires at all.
   *
   * Best-effort throughout: a failure here must never cost someone the sign-in
   * they just completed, so it falls back to /dashboard.
   */
  const landingFor = async (userId: string): Promise<string> => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role, exam_board')
        .eq('id', userId)
        .single()

      if (profile?.exam_board) {
        // Same attributes as every other writer of this cookie (middleware
        // line ~445), so a later change to one is visible against the others.
        response.cookies.set('english-hub-board', String(profile.exam_board), {
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
          sameSite: 'lax',
        })
      }

      const role = String(profile?.role ?? '').toLowerCase()
      if (role === 'teacher') return '/dashboard/teacher'
      if (role === 'parent') return '/dashboard/parent'
      return '/dashboard'
    } catch (err) {
      console.error('[auth/callback] could not resolve landing for', userId, err)
      return '/dashboard'
    }
  }

  // Handle PKCE flow (code exchange) - covers email-confirmed signup,
  // OAuth, magic links and password reset when the project uses PKCE.
  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

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

      // ── The trial, for EVERY session this branch establishes ───────────
      //
      // THE DEFECT THIS FIXES (20 September 2026, counted against production).
      // This call used to sit inside the `type === 'signup'` block below. The
      // comment above this branch says it "covers email-confirmed signup,
      // OAuth, magic links and password reset" - and it does, but a Google or
      // Apple return carries only `?code=` and `?next=`, never `type=signup`,
      // because Supabase does not set it on an OAuth redirect. So no OAuth
      // account has ever been provisioned a trial.
      //
      // /api/auth/record-login is documented as the second net and has the
      // same hole: it is called from src/app/auth/login/page.tsx, the
      // email-and-password form, which an OAuth user never submits.
      //
      // Measured before changing it: of the five accounts created since the
      // trial fix shipped on 18 September, four are Google sign-ups that
      // confirmed and signed in, and none holds a Subscription row. The one
      // TRIALING row in production starts 2026-09-18T17:28, before that fix
      // landed. The provisioner had never successfully run.
      //
      // Safe to call on a returning user: provisionSignupTrial reads the
      // profile, returns early for anyone already entitled, and refuses any
      // account older than the trial window, so a Google user signing in for
      // the hundredth time gets one profile read and nothing else. It cannot
      // throw into this flow.
      if (data?.user?.id) {
        await provisionSignupTrial(data.user.id)
      }

      // For signup verification, add welcome flag so dashboard shows onboarding
      if (type === 'signup') {
        let target = safeNext
        if (data?.user?.id) {
          // Only override the default. An explicit `next` was asked for by
          // whoever built the confirmation link and must win.
          if (rawNext === '/dashboard' || !searchParams.get('next')) {
            target = await landingFor(data.user.id)
          }
        }
        const separator = target.includes('?') ? '&' : '?'
        return redirectTo(`${target}${separator}welcome=true`)
      }
      return redirectTo(safeNext)
    }
  }

  // Handle token_hash flow (email verification, magic links, recovery via
  // the legacy non-PKCE flow that some Supabase email templates still use).
  if (token_hash && type) {
    const { data, error } = await supabase.auth.verifyOtp({
      token_hash,
      type: type as 'signup' | 'email' | 'recovery' | 'invite',
    })

    if (!error) {
      if (type === 'recovery') {
        return redirectTo('/auth/reset-password')
      }

      // Same rule as the PKCE branch: provision for every non-recovery
      // session this establishes, not only for `type === 'signup'`. Supabase's
      // own email templates still use this legacy flow, and an `invite` or
      // `email` confirmation is just as much a first session as a `signup`.
      if (data?.user?.id) {
        await provisionSignupTrial(data.user.id)
      }

      if (type === 'signup') {
        // Routing for a confirmed signup: the welcome flag and the role-aware
        // landing page.
        let target = safeNext
        if (data?.user?.id) {
          if (rawNext === '/dashboard' || !searchParams.get('next')) {
            target = await landingFor(data.user.id)
          }
        }
        const separator = target.includes('?') ? '&' : '?'
        return redirectTo(`${target}${separator}welcome=true`)
      }
      return redirectTo(safeNext)
    }
  }

  // If no code/token_hash or exchange failed, redirect to login with error.
  // Use `redirectTo` so any cookies Supabase set during a partial failure
  // (e.g. cleared session cookies) still reach the browser.
  return redirectTo('/auth/login?error=auth_callback_error')
}
