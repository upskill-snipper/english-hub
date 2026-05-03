import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * Middleware-side Supabase client. Refreshes the session cookie on every
 * request and gates access to protected routes.
 *
 * The cookie wiring uses the modern `getAll` / `setAll` API. Mirroring the
 * official Supabase Next.js 15 pattern is critical: when a token refresh
 * happens, the library calls `setAll` exactly once with every chunk it
 * needs to write. We must:
 *   1. Mirror those writes onto `request.cookies` so subsequent reads in
 *      the same request see the fresh session.
 *   2. Re-create the response from the mutated request, then mirror the
 *      writes onto `response.cookies` so the browser receives the
 *      Set-Cookie headers.
 *
 * The previous implementation used the deprecated `get` / `set` / `remove`
 * triplet, which Supabase explicitly warns against — it does not handle
 * chunked-cookie edge cases and was the suspected root cause of
 * intermittent "logged out after sign-in" reports.
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // Apply every cookie to the request so the rest of this
          // request handler sees the refreshed session…
          for (const { name, value } of cookiesToSet) {
            request.cookies.set(name, value)
          }
          // …then rebuild the response so the mutated request headers
          // propagate, and stamp the cookies on the outgoing response
          // so the browser gets the Set-Cookie headers.
          response = NextResponse.next({ request: { headers: request.headers } })
          for (const { name, value, options } of cookiesToSet) {
            response.cookies.set({
              name,
              value,
              ...options,
              secure: process.env.NODE_ENV === 'production',
              sameSite: options?.sameSite ?? 'lax',
            })
          }
        },
      },
    },
  )

  // IMPORTANT: keep this `getUser()` call here. The Supabase client uses
  // lazy session initialisation — the cookies are not actually read or
  // refreshed until the first auth call. Putting any logic between
  // `createServerClient` and `getUser()` risks the session being
  // committed to the response after the response has already been sent.
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // /learn is NOT listed here — it handles its own access control so preview modules stay public.
  //
  // /revision is NOT listed here either — pages in /revision/** are pure server components that
  // render board-agnostic content via getServerBoard() (returns null for anonymous visitors).
  // Personalisation (progress tracking, AI marking, saved notes) is gated inside those pages by
  // checking for a user session in the specific UI elements that need it. This lets Googlebot
  // crawl all ~50 set-text / poetry pages while preserving the signed-in experience.
  //
  // /practice is likewise left public. If individual /practice pages turn out to depend on a
  // user session at runtime, add guards inside those pages rather than re-gating the whole route.
  const protectedRoutes = ['/dashboard', '/account', '/admin', '/affiliates/dashboard', '/school']
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // Allow unauthenticated access to invite pages so users can see invite details before logging in
  const publicSchoolRoutes = ['/school/invite']
  const isPublicSchoolRoute = publicSchoolRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  )

  if (isProtected && !isPublicSchoolRoute && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    url.searchParams.set('redirect', request.nextUrl.pathname)
    return copyAuthCookies(NextResponse.redirect(url), response)
  }

  // Redirect authenticated users away from auth pages
  const authRoutes = ['/auth/login', '/auth/register']
  const isAuthPage = authRoutes.some((route) => request.nextUrl.pathname === route)
  if (isAuthPage && user) {
    return copyAuthCookies(NextResponse.redirect(new URL('/dashboard', request.url)), response)
  }

  return response
}

/**
 * Copy any Supabase auth cookies that were just refreshed onto a fresh
 * redirect response. Without this, a token refresh that happens during a
 * middleware redirect is lost, and the next request appears unauthenticated.
 */
function copyAuthCookies(target: NextResponse, source: NextResponse): NextResponse {
  for (const cookie of source.cookies.getAll()) {
    target.cookies.set(cookie)
  }
  return target
}
