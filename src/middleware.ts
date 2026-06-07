import { updateSession } from '@/lib/supabase/middleware'
import { applyAffiliateTracking } from '@/middleware-affiliate'
import { NextResponse, type NextRequest } from 'next/server'
import { computeJsonLdHashes, extractAnalysisSlugKey } from '@/lib/seo/json-ld-hashes'
import { BOARDS } from '@/lib/board/board-config'
// Note: the previous `import crypto from 'crypto'` worked on Vercel but
// trips an edge-runtime warning in dev. We use the Web Crypto API
// (`globalThis.crypto.randomUUID()` / `crypto.subtle.digest`) instead -
// available in both Node 20+ and the Vercel edge runtime.

const BOARD_COOKIE = 'english-hub-board'

// ── Language mode cookie (en | ar) ──────────────────────────────────
//
// Two-mode toggle surfaced in the site header:
//   en  → English only (default; SEO-indexable content)
//   ar  → Arabic only (RTL layout, Khaleeji)
//
// Bilingual mode ('bi') was removed in May 2026 - the stacked EN+AR
// layout didn't render reliably on dense pages and Arabic-speaking users
// asked for a simpler toggle. Legacy `bi` cookie values are coerced to
// 'en' so old sessions upgrade cleanly on next request.
//
// Cookie-based for the first iteration so the toggle is user-controlled
// and persists across visits. SEO caveat is documented in the governance
// page: Googlebot crawls cookieless, so a cookie-only AR mode is not
// indexed for Arabic queries. Follow-up will mirror Arabic content under
// `/ar/...` paths with hreflang alternates for actual Arabic indexing.
const LANG_COOKIE = 'eh-lang'
const LANG_VALUES = new Set(['en', 'ar', 'es'])

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
  // 2026-05-20: new canonical marketing routes (institutional repositioning).
  // The /for-* routes 308-redirect to these in next.config.js. All five
  // MUST be guest-accessible - they are the primary public conversion
  // surface, and gating them behind a board cookie or auth wall sends
  // school leaders to /board-select before they can read a single line.
  '/schools',
  '/school-pilot',
  '/teachers',
  '/students',
  '/eal',
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

  // Content-hub ROOTS (no trailing slash - subpages covered by prefix list).
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
  // KS3 root - the full KS3 English curriculum (Y7/Y8/Y9 tree).
  // The trailing-slash prefix is already in BOARD_ALLOWLIST_PREFIX
  // below; we add the exact `/ks3` here so the landing page doesn't
  // hit the BoardGate without a cookie. KS3 sits BEFORE students
  // pick a GCSE/IGCSE board, so it must be guest-accessible.
  '/ks3',

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

  // Public cert + consent + verify flows - these can be landed on by
  // external visitors (Ofqual moderators, parents checking a student's
  // certificate) who have no board cookie. Must not bounce to /board-select.
  '/verify/',
  '/consent/',
  '/certificate/',

  // KS3 + IAL prefix allowlists so sub-routes don't loop to /board-select.
  // (/ks3 and /ial root paths are caught by the BOARD_LANDING_REDIRECTS
  // above; these prefixes let future sub-pages breathe.)
  '/ks3/',
  '/ial/',

  // Long-tail SEO content hub - board-agnostic analysis pages
  '/analysis/',

  // Revision content hub - must be crawlable by Googlebot even without a
  // board cookie. Board-specific UI filtering happens client-side once the
  // cookie is set; non-logged-in visitors see the generic rendered version.
  '/revision/',

  // Practice, games, assessment, mock exams - content surfaces that must
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

// ── Paths that REQUIRE a board cookie (item #30 - soft-404 fix) ─────────
//
// Previously the middleware redirected ANY non-allowlisted path to
// /board-select, which converted genuinely unknown URLs into 307→200
// responses (soft-404s). That hurt SEO and failed security scans.
//
// Only paths inside this allowlist should ever bounce to /board-select.
// Anything else falls through and Next.js can return a proper 404 via
// `src/app/not-found.tsx`.
const BOARD_REQUIRED_PREFIXES: string[] = [
  '/revision/',
  '/revision',
  '/practice/',
  '/practice',
  '/mock-exams/',
  '/mock-exams',
  '/games/',
  '/games',
  '/assessment/',
  '/assessment',
  '/courses/',
  '/courses',
  '/igcse/',
  '/igcse',
  '/a-level/',
  '/a-level',
  '/learn/',
  '/learn',
  '/marking/',
  '/marking',
  '/toolkit/',
  '/toolkit',
  '/dashboard',
  '/dashboard/',
]

export function getBoardRequiredPaths(): readonly string[] {
  return BOARD_REQUIRED_PREFIXES
}

function isBoardRequired(pathname: string): boolean {
  for (const p of BOARD_REQUIRED_PREFIXES) {
    if (p.endsWith('/')) {
      if (pathname.startsWith(p)) return true
    } else if (pathname === p) {
      return true
    }
  }
  return false
}

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
// use case is `/analysis/[...slug]` - that route is `force-static` + 24 h
// ISR, so `headers()` (and hence the nonce) is unavailable at render time.
// Instead the middleware computes the SHA-256 of each JSON-LD body and
// adds the hash here.
//
// NB - `'strict-dynamic'` was evaluated and dropped: older iOS Safari
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
  // 02 May 2026 - dropped the `'nonce-${nonce}'` source from script-src.
  //
  // Modern browsers (Chrome, Firefox, Safari ≥15.4) ignore `'unsafe-inline'`
  // whenever a `'nonce-...'` source is present on the same directive. That
  // means every Next.js framework chunk in `/_next/static/chunks/*` and
  // every inline `self.__next_f.push(...)` RSC-streaming script needs an
  // explicit `nonce` attribute, OR they get blocked.
  //
  // Bundle inspection on the rolled-back broken production deployment
  // (dpl_3PuGJe6549aZjLN7kwMBwnWvqpSL, commit 09204b8) showed 0 nonce
  // attributes on the rendered scripts versus 96 on the green
  // dpl_7hjsyaxXuMHm5E5T592CUe9J5gnA (commit 07e89e3) - same code path,
  // same middleware, but Next 15.5 + React 19 stopped reading `x-nonce`
  // off the request headers and stamping it onto the framework scripts.
  // (Open question: caused by an upstream Next change, the Sentry config
  // drift warnings logged at build time, or our `instrumentation-client.ts`
  // racing the page bootstrap. Won't be debugged in this hot-fix.)
  //
  // Scripts now run under `'self' 'unsafe-inline' + explicit host
  // allowlist (Stripe / Rewardful / GTM)` - same security envelope as
  // before nonce-CSP, with the JSON-LD content-hash channel preserved
  // for the `/analysis/[slug]` static route via `extraSrc`.
  //
  // The unused `nonce` parameter is retained because callers still pass
  // it - re-introduce it once Next 15+ gives us reliable nonce stamping
  // on framework chunks.
  void nonce
  return [
    `default-src 'self'`,
    // script-src - third-party JS we load:
    //   googletagmanager.com → GA4 gtag.js bundle
    //   *.i.posthog.com      → PostHog SDK config + asset CDN
    //                          (eu-assets.i.posthog.com / us-assets.i.posthog.com)
    //   js.stripe.com        → Stripe Checkout SDK
    //   r.wdfl.co            → Rewardful affiliate tracker
    `script-src 'self' 'unsafe-inline'${extraSrc} https://js.stripe.com https://r.wdfl.co https://www.googletagmanager.com https://*.i.posthog.com`,
    `style-src 'self' 'unsafe-inline'`, // Tailwind JIT inlines styles; acceptable.
    `img-src 'self' data: https:`,
    `font-src 'self' data:`,
    // connect-src - third-party endpoints we POST/fetch from at runtime:
    //   *.supabase.co               → auth + db
    //   api.stripe.com              → checkout sessions, customer portal
    //   r.wdfl.co                   → Rewardful conversion attribution
    //   *.ingest.sentry.io          → error reporting
    //   *.google-analytics.com      → GA4 event collection (/g/collect)
    //   *.analytics.google.com      → GA4 alternate collection endpoint
    //   *.googletagmanager.com      → GA4 server-side container fallback
    //   *.i.posthog.com             → PostHog capture (eu.i / us.i)
    //   *.posthog.com               → PostHog feature flags + decide endpoint
    `connect-src 'self' https://*.supabase.co https://api.stripe.com https://r.wdfl.co https://*.ingest.sentry.io https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.i.posthog.com https://*.posthog.com`,
    `frame-src https://js.stripe.com https://hooks.stripe.com`,
    `frame-ancestors 'self'`,
    `form-action 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
  ].join('; ')
}

// `/toolkit` is retired - every toolkit feature is surfaced from the
// unified Your Hub at `/revision`. Landing on any toolkit URL sends the
// user to the hub so the nav + analytics render consistently. Deep-link
// sub-routes under `/toolkit/*` still work (the individual tools live
// there); only the `/toolkit` index itself redirects.
const RETIRED_PAGE_REDIRECTS: Record<string, string> = {
  '/toolkit': '/revision',
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── Canonical-host enforcement (2026-05-16) ───────────────────────
  // www → apex as a PERMANENT (308) redirect. A next.config.js
  // `has:host` rule proved unreliable here (the edge serves the www
  // alias before the Next route layer evaluates it), so the redirect
  // is enforced in middleware where the real Host header is available.
  // This runs FIRST so every other concern (board cookie, auth, CSP)
  // only ever operates on the canonical host. Caught + verified by
  // site_health_monitor.
  // Read the USER-FACING host. On Vercel the bare `host` header is often
  // the internal deployment host; the real requested host is in
  // `x-forwarded-host`. The 2026-05-16 exact `host === 'www…'` check
  // therefore never matched in prod, so this 308 block was dead code.
  // Scoped to the production www host only - preview/branch deployments
  // (*.vercel.app) must NEVER be redirected (would loop).
  //
  // CAVEAT (verified 2026-05-18 via live probe): a Vercel *platform*
  // domain redirect currently intercepts www at the edge BEFORE this
  // middleware runs and serves a 307 (Temporary). No app code (this
  // middleware, nor a next.config `has:host` rule) can override a
  // platform-level domain redirect - making it PERMANENT (308) is a
  // Vercel Domains dashboard setting. This block is the correct fallback
  // and will emit 308 the moment that platform redirect is removed.
  const fwdHost = (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '')
    .split(',')[0]
    .trim()
    .split(':')[0]
    .toLowerCase()
  if (fwdHost === 'www.theenglishhub.app') {
    const target = request.nextUrl.clone()
    target.host = 'theenglishhub.app'
    target.protocol = 'https:'
    target.port = ''
    return NextResponse.redirect(target, 308)
  }

  // Web Crypto `randomUUID()` + `btoa` - edge-runtime safe, avoids the
  // node:crypto / Buffer imports which the edge runtime flags.
  const nonce = btoa(globalThis.crypto.randomUUID())

  // ── Explicit board choice via `?setBoard=<id>` ─────────────────────
  //
  // 02 May 2026 - see business-docs/BOARD_NAVIGATION_MODEL.md.
  //
  // The cookie now reflects the user's currently-selected board, and is
  // ONLY written on explicit board choices (homepage cards, board-select
  // cards, BoardSwitcher menu, BoardSelectorSection wizard). Every such
  // surface navigates to a URL carrying `?setBoard=<board-id>`; this
  // handler validates the id against the canonical BOARDS list, sets
  // the cookie, then redirects to the same URL with the param stripped.
  //
  // The previous `BOARD_LANDING_REDIRECTS` map (which silently set the
  // cookie + bounced to /revision on first visit to /igcse/edexcel,
  // /a-level/aqa, etc.) was removed. It produced two bugs:
  //   1. First-visit deep links got rewritten to /revision, so the user
  //      saw the unified hub instead of the page they clicked.
  //   2. Six of the seven homepage cards bypassed the map entirely (they
  //      pointed at content URLs, not landing URLs), so the cookie never
  //      got written and the sidebar/footer fell out of sync with the
  //      rendered page.
  //
  // Deep-link visits to /igcse/edexcel, /a-level/aqa, /ks3 etc. now
  // render their pages directly. Cross-board mismatch (cookie says X,
  // page renders Y) is handled by `<BoardMismatchBanner>` per page,
  // not by the middleware.
  const setBoardParam = request.nextUrl.searchParams.get('setBoard')
  if (setBoardParam) {
    const validBoardIds = BOARDS.map((b) => b.id) as readonly string[]
    const cleanUrl = new URL(request.nextUrl)
    cleanUrl.searchParams.delete('setBoard')
    if (validBoardIds.includes(setBoardParam)) {
      const response = NextResponse.redirect(cleanUrl)
      response.cookies.set('english-hub-board', setBoardParam, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
      })
      return response
    }
    // Invalid board id - strip the param and continue without setting
    // the cookie. Avoids leaking a bogus value into the user's storage
    // while still cleaning the URL so it doesn't sit in their address
    // bar / share links.
    return NextResponse.redirect(cleanUrl)
  }

  // ── Reset board via `?resetBoard=1` ────────────────────────────────
  //
  // 2026-05-20 - the header BoardSwitcher's "Reset" item now points at
  // `/board-select?resetBoard=1`. Previously Reset and Change both linked
  // to the same `?change=1` URL, so Reset did nothing different from
  // Change and the cookie was never actually cleared - users complained
  // the header dropdown "got stuck" because the same board kept showing
  // after they thought they had cleared it. This handler honours the
  // intent: it expires the board cookie, strips the param, and returns a
  // clean URL. The destination page (typically /board-select) then loads
  // without a board cookie and the BoardSwitcher renders the "Choose
  // board" empty-state link instead of the dropdown.
  const resetBoardParam = request.nextUrl.searchParams.get('resetBoard')
  if (resetBoardParam === '1') {
    const cleanUrl = new URL(request.nextUrl)
    cleanUrl.searchParams.delete('resetBoard')
    const response = NextResponse.redirect(cleanUrl)
    response.cookies.set('english-hub-board', '', {
      path: '/',
      maxAge: 0, // expire immediately
      sameSite: 'lax',
    })
    return response
  }

  // ── Retired-page redirect (e.g. /toolkit → /revision) ──────────────
  const retiredTarget = RETIRED_PAGE_REDIRECTS[pathname]
  if (retiredTarget) {
    return NextResponse.redirect(new URL(retiredTarget, request.url))
  }

  // ── CSRF: Origin header validation for API mutations ─────────────
  if (pathname.startsWith('/api/') && request.method !== 'GET' && request.method !== 'HEAD') {
    // Stripe + RevenueCat webhooks come from third-party servers - skip origin check.
    // Both webhooks authenticate via their own bearer-token / signature mechanism
    // (Stripe-Signature header, Authorization: Bearer for RC), so the same-origin
    // attestation below would (correctly) reject them. Vercel cron jobs are also
    // exempted because they originate inside Vercel's infrastructure.
    if (
      !pathname.startsWith('/api/stripe/webhook') &&
      !pathname.startsWith('/api/revenuecat/webhook') &&
      !pathname.startsWith('/api/cron/')
    ) {
      const origin = request.headers.get('origin')
      const secFetchSite = request.headers.get('sec-fetch-site')

      // P2-SEC-3: require a same-origin attestation for API mutations.
      //
      // Case 1 - Origin header present: it MUST be in the allow-list.
      // Case 2 - Origin header absent: accept only if Sec-Fetch-Site
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
  // Only redirect to /board-select for KNOWN board-gated routes. Previously
  // we redirected any non-allowlisted path, which soft-404'd unknown URLs
  // (item #30). Genuinely unknown URLs now fall through to Next.js's
  // `not-found.tsx` with a real 404 status.
  if (!hasBoardCookie && isBoardRequired(pathname) && !isBoardAllowlisted(pathname)) {
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

  // Propagate language mode so the root layout can set <html lang dir="...">
  // on first paint (no flicker).
  //
  // Resolution order:
  //   1. URL prefix `/ar/...` - explicit Arabic locale (indexable by Google).
  //   2. `eh-lang` cookie - user's persisted toggle choice (en | bi | ar).
  //   3. Default 'en' - cold visitors land in English.
  //
  // The URL prefix takes precedence over the cookie because a `/ar/...`
  // URL is the canonical, shareable Arabic surface. The middleware also
  // rewrites `/ar/foo` to `/foo` internally so we don't have to
  // duplicate every route - the page renders the same component, just
  // with `x-lang=ar` stamped on the request headers so localised copy
  // renders in Arabic and `<html dir="rtl">` is applied.
  let lang: string
  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    lang = 'ar'
    const rewriteUrl = request.nextUrl.clone()
    rewriteUrl.pathname = pathname === '/ar' ? '/' : pathname.slice(3) // strip leading '/ar'
    // Rewrite preserves the URL the browser sees while serving the
    // underlying page from the language-neutral route. Stamp x-lang
    // BEFORE the rewrite so server components see the right locale.
    request.headers.set('x-lang', 'ar')
    request.headers.set('x-lang-source', 'url')
    const res = NextResponse.rewrite(rewriteUrl, { request: { headers: request.headers } })
    res.headers.set('Content-Language', 'ar')
    return res
  } else {
    const rawLang = request.cookies.get(LANG_COOKIE)?.value
    // Coerce legacy 'bi' (bilingual, removed May 2026) to 'en' so old
    // sessions upgrade transparently. LANG_VALUES only contains 'en'|'ar'
    // now, so any unknown value also falls through to 'en'.
    lang = rawLang && LANG_VALUES.has(rawLang) ? rawLang : 'en'
  }
  request.headers.set('x-lang', lang)

  // Preserve existing behaviour: supabase auth session refresh + affiliate tracking
  const response = await updateSession(request)

  // For the `/analysis/[category]/[slug]` catch-all route we can't use the
  // nonce (the page is `force-static`), so we append content hashes of the
  // three JSON-LD scripts to the CSP instead. The helper memoises after the
  // first hit per slug, so the crypto work runs at most 2-3 SHA-256 digests
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

  // Standard security headers (complement the CSP above). These target
  // securityheaders.com grade A and harden against MIME sniffing,
  // referrer leakage, and unwanted device-API access.
  //
  // X-Frame-Options is intentionally omitted - the CSP above already sets
  // `frame-ancestors 'self'`, which supersedes XFO in modern browsers.
  // Adding XFO would be redundant (and can cause edge-case conflicts).
  //
  // Permissions-Policy disables camera/microphone/geolocation outright,
  // and restricts Payment Request API to same-origin so Stripe's
  // Apple Pay / Google Pay flows continue to work from our own origin.
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(self)',
  )

  // Annotate the response with affiliate tracking cookie if ?ref=… is present.
  // No-op when no ref param or when the response is a redirect we want to pass through.
  return applyAffiliateTracking(request, response)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
