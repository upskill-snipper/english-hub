import { updateSession } from '@/lib/supabase/middleware'
import { applyAffiliateTracking } from '@/middleware-affiliate'
import { NextResponse, type NextRequest } from 'next/server'
import { computeJsonLdHashes, extractAnalysisSlugKey } from '@/lib/seo/json-ld-hashes'
// Note: the previous `import crypto from 'crypto'` worked on Vercel but
// trips an edge-runtime warning in dev. We use the Web Crypto API
// (`globalThis.crypto.randomUUID()` / `crypto.subtle.digest`) instead —
// available in both Node 20+ and the Vercel edge runtime.

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
  '/a-level',
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

  // Public cert + consent + verify flows — these can be landed on by
  // external visitors (Ofqual moderators, parents checking a student's
  // certificate) who have no board cookie. Must not bounce to /board-select.
  '/verify/',
  '/consent/',
  '/certificate/',

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
  '/a-level/',
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
    pathname,
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

// ── CSP nonce generation (P1 #6 follow-up) ─────────────────────────────
//
// Generate a fresh base64 nonce per request. Thread it via the `x-nonce`
// request header (so server components can read it via `headers()` and
// attach to <script> tags), and bake it into the Content-Security-Policy
// response header so browsers match inline scripts against the same value.
//
// `extraScriptHashes` lets callers append content-addressed `'sha256-...'`
// sources for scripts that can't carry a per-request nonce. The canonical
// use case is `/analysis/[...slug]` — that route is `force-static` + 24 h
// ISR, so `headers()` (and hence the nonce) is unavailable at render time.
// Instead the middleware computes the SHA-256 of each JSON-LD body and
// adds the hash here.
//
// NB — `'strict-dynamic'` was evaluated and dropped: older iOS Safari
// (≤ 15.6) has known bugs where a script-src containing 'strict-dynamic'
// is treated as malformed, causing every script on the page to be
// blocked. Without strict-dynamic, modern browsers enforce the
// nonce + explicit host allow-list (Stripe, Rewardful, GTM) and older
// browsers fall back to the host allow-list + `'unsafe-inline'`. We
// lose the "strict-dynamic" property that nonced scripts can load
// further scripts transparently; in practice every external script we
// load comes from a known host and is already allow-listed, so the
// security drop is marginal. Re-introduce strict-dynamic once Next 15
// ships server-side user-agent CSP tailoring, or once iOS 15.6 drops
// below the support floor.
function buildCsp(nonce: string, extraScriptHashes: string[] = []): string {
  const extraSrc = extraScriptHashes.length ? ' ' + extraScriptHashes.join(' ') : ''
  return [
    `default-src 'self'`,
    // 'unsafe-inline' is a FALLBACK for browsers that don't honour nonces.
    // Modern browsers ignore 'unsafe-inline' when a 'nonce-' is present on
    // the same directive.
    `script-src 'self' 'nonce-${nonce}' 'unsafe-inline'${extraSrc} https://js.stripe.com https://r.wdfl.co https://www.googletagmanager.com`,
    `style-src 'self' 'unsafe-inline'`, // Tailwind JIT inlines styles; acceptable.
    `img-src 'self' data: https:`,
    `font-src 'self' data:`,
    `connect-src 'self' https://*.supabase.co https://api.stripe.com https://r.wdfl.co https://*.ingest.sentry.io`,
    `frame-src https://js.stripe.com https://hooks.stripe.com`,
    `frame-ancestors 'self'`,
    `form-action 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
  ].join('; ')
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  // Web Crypto `randomUUID()` + `btoa` — edge-runtime safe, avoids the
  // node:crypto / Buffer imports which the edge runtime flags.
  const nonce = btoa(globalThis.crypto.randomUUID())

  // ── CSRF: Origin header validation for API mutations ─────────────
  if (pathname.startsWith('/api/') && request.method !== 'GET' && request.method !== 'HEAD') {
    // Stripe webhooks come from Stripe servers — skip origin check
    if (!pathname.startsWith('/api/stripe/webhook') && !pathname.startsWith('/api/cron/')) {
      const origin = request.headers.get('origin')
      const secFetchSite = request.headers.get('sec-fetch-site')

      // P2-SEC-3: require a same-origin attestation for API mutations.
      //
      // Case 1 — Origin header present: it MUST be in the allow-list.
      // Case 2 — Origin header absent: accept only if Sec-Fetch-Site
      //   signals same-origin (set by all modern browsers on SPA fetches
      //   and form submissions). Values 'same-origin' and 'none' are
      //   safe; 'cross-site' / 'same-site' / missing are not.
      //
      // Previously the check passed silently when Origin was absent,
      // which left a CSRF bypass for CLI-style requests. Known
      // same-app callers (Stripe webhooks, Vercel cron) are exempted
      // in the outer `if` above.
      if (origin) {
        if (!ALLOWED_ORIGINS.has(origin)) {
          return NextResponse.json({ error: 'Forbidden: invalid origin' }, { status: 403 })
        }
      } else if (secFetchSite !== 'same-origin' && secFetchSite !== 'none') {
        return NextResponse.json(
          { error: 'Forbidden: missing same-origin attestation' },
          { status: 403 },
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

  // Propagate nonce to downstream so server components can read it via
  // `headers()` and stamp it on inline <script> tags (e.g. JSON-LD).
  // Mutating request.headers directly is the simplest working pattern:
  // updateSession reads request.headers to build its NextResponse.next(),
  // so the nonce is visible to server components without reconstructing
  // the NextRequest (which doesn't have a safe clone constructor).
  request.headers.set('x-nonce', nonce)

  // Preserve existing behaviour: supabase auth session refresh + affiliate tracking
  const response = await updateSession(request)

  // For the `/analysis/[category]/[slug]` catch-all route we can't use the
  // nonce (the page is `force-static`), so we append content hashes of the
  // three JSON-LD scripts to the CSP instead. The helper memoises after the
  // first hit per slug, so the crypto work runs at most 2–3 SHA-256 digests
  // per cold slug and zero on warm paths.
  let scriptHashes: string[] = []
  const analysisSlug = extractAnalysisSlugKey(pathname)
  if (analysisSlug) {
    try {
      scriptHashes = await computeJsonLdHashes(analysisSlug)
    } catch {
      // Hash compute should never throw for a registered slug, but if it
      // does we degrade gracefully: the `'unsafe-inline'` fallback still
      // carries old browsers, and we'd rather serve the page than 500.
      scriptHashes = []
    }
  }

  // Attach the per-request nonce + CSP to the response. Setting CSP here
  // lets us emit a fresh nonce per request; next.config.js only supports
  // static headers.
  response.headers.set('Content-Security-Policy', buildCsp(nonce, scriptHashes))
  response.headers.set('x-nonce', nonce)

  // Annotate the response with affiliate tracking cookie if ?ref=… is present.
  // No-op when no ref param or when the response is a redirect we want to pass through.
  return applyAffiliateTracking(request, response)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
