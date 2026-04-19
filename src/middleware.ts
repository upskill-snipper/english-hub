import { updateSession } from '@/lib/supabase/middleware'
import { applyAffiliateTracking } from '@/middleware-affiliate'
import { NextResponse, type NextRequest } from 'next/server'

const BOARD_COOKIE = 'english-hub-board'

// Paths that are allowed through without a board cookie.
// Use exact matches and prefix matches (prefixes end with "/").
//
// Philosophy: ONLY gate content that materially changes by exam board
// (revision/*, practice, mock-exams, games, assessment/*, courses, igcse/*).
// Marketing, policy, compliance, demo, and account pages must be crawlable
// without a board cookie so that Googlebot, social unfurlers, diligence
// reviewers, school DPOs, and paid-ad landers can see real content.
const BOARD_ALLOWLIST_EXACT = new Set<string>([
  // Root + board selector
  '/',
  '/board-select',

  // Marketing / conversion surfaces
  '/pricing',
  '/about',
  '/contact',
  '/for-schools',
  '/for-teachers',
  '/for-parents',
  '/affiliates',
  '/creators',
  '/resources',
  '/help',
  '/faqs',

  // Legal / compliance (must be crawlable for school DPOs and regulators)
  '/terms',
  '/privacy',
  '/privacy-policy',
  '/cookie-policy',
  '/refund-policy',
  '/accessibility',
  '/safeguarding',
  '/data-processing',
  '/legal',

  // Account-adjacent flows that don't depend on board choice
  '/verify',
  '/consent',
  '/certificate',

  // Content-hub ROOTS (no trailing slash — subpages covered by prefix list).
  // Without these, visiting `/games` (no trailing slash) fails the prefix
  // match for `/games/` and redirects to /board-select.
  '/analysis',
  '/revision',
  '/practice',
  '/games',
  '/assessment',
  '/mock-exams',
  '/courses',
  '/igcse',
  '/learn',
  '/marking',
  '/toolkit',

  // Technical
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
])

const BOARD_ALLOWLIST_PREFIX: string[] = [
  // Board selector + auth flows
  '/board-select/',
  '/auth/',

  // School, teacher, parent landing flows (board chosen later via school code)
  '/school/',
  '/for-schools/',
  '/for-teachers/',
  '/for-parents/',

  // Demo pages must be public
  '/demo/',

  // Affiliates / creators / resources hubs
  '/affiliates/',
  '/creators/',
  '/resources/',

  // Compliance sub-pages
  '/legal/',

  // Long-tail SEO content hub — board-agnostic analysis pages
  '/analysis/',

  // Revision content hub — must be crawlable by Googlebot even without a
  // board cookie. Board-specific UI filtering happens client-side once the
  // cookie is set; non-logged-in visitors see the generic rendered version.
  '/revision/',

  // Practice, games, assessment, mock exams — content surfaces that must
  // be crawlable. Each page handles the no-board case with a friendly
  // fallback (see e.g. QuoteMatchGame's empty-board branch).
  '/practice/',
  '/games/',
  '/assessment/',
  '/mock-exams/',
  '/courses/',
  '/igcse/',
  '/learn/',
  '/marking/',
  '/toolkit/',

  // API + Next.js internals
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

// Allowed origins for mutation requests (CSRF mitigation via Origin check)
const ALLOWED_ORIGINS = new Set([
  'https://theenglishhub.app',
  'https://www.theenglishhub.app',
  ...(process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL] : []),
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : []),
])

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── CSRF: Origin header validation for API mutations ─────────────
  if (pathname.startsWith('/api/') && request.method !== 'GET' && request.method !== 'HEAD') {
    // Stripe webhooks come from Stripe servers — skip origin check
    if (!pathname.startsWith('/api/stripe/webhook') && !pathname.startsWith('/api/cron/')) {
      const origin = request.headers.get('origin')
      if (origin && !ALLOWED_ORIGINS.has(origin)) {
        return NextResponse.json(
          { error: 'Forbidden: invalid origin' },
          { status: 403 }
        )
      }
    }
  }

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
