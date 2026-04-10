import { updateSession } from '@/lib/supabase/middleware'
import { applyAffiliateTracking } from '@/middleware-affiliate'
import { NextResponse, type NextRequest } from 'next/server'

const BOARD_COOKIE = 'english-hub-board'

// Paths that are allowed through without a board cookie.
// Use exact matches and prefix matches (prefixes end with "/").
const BOARD_ALLOWLIST_EXACT = new Set<string>([
  '/',
  '/board-select',
  '/pricing',
  '/about',
  '/terms',
  '/privacy',
  '/safeguarding',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
])

const BOARD_ALLOWLIST_PREFIX: string[] = [
  '/board-select/',
  '/auth/',
  '/school/',
  '/demo/school/',
  '/api/',
  '/_next/',
]

function isStaticAsset(pathname: string): boolean {
  // Common static file extensions that shouldn't gate on board
  return /\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|json|woff|woff2|ttf|otf|eot|mp4|webm|ogg|mp3|wav|pdf)$/i.test(
    pathname
  )
}

function isBoardAllowlisted(pathname: string): boolean {
  if (BOARD_ALLOWLIST_EXACT.has(pathname)) return true
  for (const prefix of BOARD_ALLOWLIST_PREFIX) {
    if (pathname.startsWith(prefix)) return true
  }
  if (isStaticAsset(pathname)) return true
  return false
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Board gate: if no board cookie and path is not allowlisted, redirect to /board-select
  // Run this BEFORE supabase/affiliate so we don't do unnecessary work, but we still
  // preserve those flows for allowlisted paths.
  const hasBoardCookie = Boolean(request.cookies.get(BOARD_COOKIE)?.value)
  if (!hasBoardCookie && !isBoardAllowlisted(pathname)) {
    // Extra guard: never redirect if we're already on /board-select (would loop)
    if (!pathname.startsWith('/board-select')) {
      const url = request.nextUrl.clone()
      url.pathname = '/board-select'
      url.search = ''
      url.searchParams.set('next', pathname + (request.nextUrl.search || ''))
      return NextResponse.redirect(url)
    }
  }

  // Preserve existing behaviour: supabase auth session refresh + affiliate tracking
  const response = await updateSession(request)
  // Annotate the response with affiliate tracking cookie if ?ref=… is present.
  // No-op when no ref param or when the response is a redirect we want to pass through.
  return applyAffiliateTracking(request, response)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
