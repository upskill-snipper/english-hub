import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          const secureOpts = {
            ...options,
            secure: process.env.NODE_ENV === 'production',
            sameSite: options.sameSite ?? ('lax' as const),
          }
          request.cookies.set({ name, value, ...secureOpts })
          response = NextResponse.next({ request: { headers: request.headers } })
          response.cookies.set({ name, value, ...secureOpts })
        },
        remove(name: string, options: CookieOptions) {
          const secureOpts = {
            ...options,
            secure: process.env.NODE_ENV === 'production',
            sameSite: options.sameSite ?? ('lax' as const),
          }
          request.cookies.set({ name, value: '', ...secureOpts })
          response = NextResponse.next({ request: { headers: request.headers } })
          response.cookies.set({ name, value: '', ...secureOpts })
        },
      },
    },
  )

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
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users away from auth pages
  const authRoutes = ['/auth/login', '/auth/register']
  const isAuthPage = authRoutes.some((route) => request.nextUrl.pathname === route)
  if (isAuthPage && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}
