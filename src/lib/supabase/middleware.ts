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
 * triplet, which Supabase explicitly warns against - it does not handle
 * chunked-cookie edge cases and was the suspected root cause of
 * intermittent "logged out after sign-in" reports.
 */
// Static files that must never be 307'd to an HTML page by the forced
// password-rotation gate below. The root middleware matcher already excludes
// /_next/static, favicon.ico and common image types; this covers the rest
// (manifest.json, web fonts, audio, .txt / .xml) so a gated pupil's browser
// still loads the shell it needs to render the rotation page.
const ROTATION_ASSET_PATTERN =
  /\.(?:json|webmanifest|txt|xml|css|js|map|woff|woff2|ttf|otf|eot|mp3|mp4|webm|wav|ogg|pdf|ico|svg|png|jpe?g|gif|webp)$/i

/**
 * @param effectivePathname The route to evaluate gates against. Defaults to
 *   the request path, but the `/ar/...` locale surface rewrites to the
 *   language-neutral route, so it passes the STRIPPED path here.
 *
 *   DEFECT this fixes (2026-08-23): src/middleware.ts returned the Arabic
 *   rewrite BEFORE calling updateSession, so `/ar/dashboard`, `/ar/account`,
 *   `/ar/school` and `/ar/admin` skipped this function entirely - no session
 *   refresh, no forced-password-rotation gate, and no protected-route
 *   redirect. The auth wall could be walked around simply by prefixing a URL
 *   with `/ar`. Even once called, the raw path `/ar/dashboard` would not have
 *   matched `/dashboard`, hence this parameter.
 */
export async function updateSession(
  request: NextRequest,
  effectivePathname: string = request.nextUrl.pathname,
) {
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
  // lazy session initialisation - the cookies are not actually read or
  // refreshed until the first auth call. Putting any logic between
  // `createServerClient` and `getUser()` risks the session being
  // committed to the response after the response has already been sent.
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // ── Forced rotation of school-issued temporary passwords ──────────
  //
  // SECURITY (Aug 2026): bulk-provisioned school accounts are created with an
  // auto-generated temporary password (src/app/api/school/import/route.ts and
  // src/app/api/school/bulk-upload/commit/route.ts). That password is emailed
  // in plaintext and downloadable by school admins as a CSV, and until now
  // nothing ever forced the pupil to change it - so a credential that had
  // travelled through email and a spreadsheet stayed valid indefinitely on a
  // CHILD's account.
  //
  // Those accounts now carry `user_metadata.needs_password_change: true`.
  // While the flag is set we hold every signed-in navigation on
  // /auth/set-password, which clears the flag as part of the password update.
  // This runs before the protected-route and auth-page rules below so it wins
  // over every other post-login destination, whichever way the user signed in
  // (password form, OAuth, or the /auth/callback token flows).
  //
  // Exemptions: the rotation page itself (would loop), /auth/callback (the
  // session is still being established there), /api + /_next, and static
  // files, which serve JSON and assets - redirecting those to an HTML page
  // would break the caller rather than gate it. The flag is a UI gate, not an
  // API authorisation check; API-level enforcement is tracked separately.
  //
  // KNOWN LIMITS of this gate, recorded here (QA 2026-08-23) so nobody mistakes
  // it for an access control:
  //   1. `user_metadata` is writable by the signed-in user themselves, so a
  //      pupil could clear the flag from the browser without setting a new
  //      password. That only lets the account holder skip their own rotation
  //      prompt - anyone else would need the password to have a session at all
  //      - but a hard enforcement would need the flag in `app_metadata`
  //      (service-role only) plus a server route to clear it.
  //   2. src/middleware.ts returns the `/ar/...` locale rewrite BEFORE calling
  //      updateSession(), so nothing in this function - this gate, the
  //      protected-route rule, or the session refresh - runs on the Arabic URL
  //      surface. Pre-existing (the auth gate has the same hole), but it means
  //      a flagged pupil browsing /ar/... is not held here.
  const needsPasswordChange = user?.user_metadata?.needs_password_change === true
  if (needsPasswordChange) {
    const path = effectivePathname
    const rotationExempt =
      path === '/auth/set-password' ||
      path.startsWith('/auth/set-password/') ||
      path.startsWith('/auth/callback') ||
      path.startsWith('/api/') ||
      path.startsWith('/_next/') ||
      ROTATION_ASSET_PATTERN.test(path)

    if (!rotationExempt) {
      const url = request.nextUrl.clone()
      url.pathname = '/auth/set-password'
      url.search = ''
      return copyAuthCookies(NextResponse.redirect(url), response)
    }
  }

  // /learn is NOT listed here - it handles its own access control so preview modules stay public.
  //
  // /revision is NOT listed here either - pages in /revision/** are pure server components that
  // render board-agnostic content via getServerBoard() (returns null for anonymous visitors).
  // Personalisation (progress tracking, AI marking, saved notes) is gated inside those pages by
  // checking for a user session in the specific UI elements that need it. This lets Googlebot
  // crawl all ~50 set-text / poetry pages while preserving the signed-in experience.
  //
  // /practice is likewise left public. If individual /practice pages turn out to depend on a
  // user session at runtime, add guards inside those pages rather than re-gating the whole route.
  // 2026-06-08 — Option C paywall, wave 1. Personal "doing" routes with
  // ZERO SEO value are added here so anonymous visitors must sign in
  // (and start their free trial) to use them:
  //   /revision/study-plan  - personal AI study planner
  //   /revision/analytics   - personal progress dashboard
  //   /toolkit              - teacher content-generation tools
  // The crawlable content routes (/revision/texts/**, /revision/poetry/**,
  // /revision/language, /revision/exam-technique, /revision/grade-targets,
  // /practice, /mock-exams index, /games, /learn previews) deliberately
  // STAY public — see the long note above for the SEO rationale. The
  // interactive ACTIONS inside those pages (AI marking, quiz scoring,
  // mock submission) are gated server-side via the entitlements API in a
  // later wave, so Googlebot still crawls the page while the action
  // itself prompts sign-in.
  const protectedRoutes = [
    '/dashboard',
    '/account',
    '/admin',
    '/affiliates/dashboard',
    '/school',
    '/revision/study-plan',
    '/revision/analytics',
    '/toolkit',
    // Forced first-login password rotation. Listed here so a visitor who
    // carries the needs_password_change flag but has NO live session (expired
    // cookie, shared link, signed out mid-flow) is sent to /auth/login rather
    // than stranded on a page that cannot do anything for them.
    '/auth/set-password',
  ]
  // Segment-aware matching: a bare startsWith('/school') also captured the
  // PUBLIC marketing pages /schools and /school-pilot, auth-walling them for
  // every anonymous visitor and for Googlebot (they 307'd to /auth/login).
  const isProtected = protectedRoutes.some(
    (route) => effectivePathname === route || effectivePathname.startsWith(route + '/'),
  )

  // Allow unauthenticated access to invite pages so users can see invite details before logging in
  const publicSchoolRoutes = ['/school/invite']
  const isPublicSchoolRoute = publicSchoolRoutes.some((route) =>
    effectivePathname.startsWith(route),
  )

  if (isProtected && !isPublicSchoolRoute && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    // Send them back to the URL they actually asked for (keeps the /ar
    // prefix, so an Arabic visitor stays on the Arabic surface).
    url.searchParams.set('redirect', request.nextUrl.pathname)
    return copyAuthCookies(NextResponse.redirect(url), response)
  }

  // Redirect authenticated users away from auth pages
  const authRoutes = ['/auth/login', '/auth/register']
  const isAuthPage = authRoutes.some((route) => effectivePathname === route)
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
