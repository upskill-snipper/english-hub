/**
 * Server-side GA4 Measurement Protocol relay.
 *
 * Why this exists:
 *   - Roughly 30–40 % of UK browsers run uBlock Origin, Brave Shields,
 *     AdGuard or Privacy Badger — all of which block requests to
 *     googletagmanager.com and google-analytics.com by default.
 *     Result: gtag.js never loads, /g/collect never fires, GA4 stays
 *     empty even with perfect client config.
 *   - PostHog's eu.i.posthog.com isn't on those blocklists, which is
 *     why PostHog received data in this app while GA4 stayed silent.
 *   - This route forwards events from our origin to /g/collect,
 *     bypassing every browser-side blocker.
 *
 * Contract:
 *   POST /api/ga4/track  with JSON body:
 *     { event_name: string, params?: Record<string, unknown> }
 *
 *   Recognised reserved params:
 *     page_path, page_location, page_title, page_referrer
 *     (mapped to GA4's dl/dt/dr fields).
 *
 *   Other params are forwarded as ep.<name> (string) or epn.<name>
 *   (number) per the GA4 v2 protocol.
 *
 * Consent gate:
 *   Reads `eh-cookie-consent` cookie. Returns 204 silently if value
 *   isn't 'all'. The cookie is set by initGA4() in src/lib/gtag.ts
 *   when the visitor accepts cookies.
 *
 * Stable client ID:
 *   Reads `eh_ga_cid` cookie. If absent, generates one in the
 *   `<unix-seconds>.<random-int>` format gtag.js uses for _ga, and
 *   sets it on the response with a 2-year max-age.
 */

import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'edge'

const GA4_COLLECT_ENDPOINT = 'https://www.google-analytics.com/g/collect'
const CID_COOKIE = 'eh_ga_cid'
const CONSENT_COOKIE = 'eh-cookie-consent'
const CID_MAX_AGE = 60 * 60 * 24 * 365 * 2 // 2 years
const RESERVED_PARAM_KEYS = new Set(['page_path', 'page_location', 'page_title', 'page_referrer'])
const ALLOWED_EVENT_NAMES = /^[a-zA-Z][a-zA-Z0-9_]{0,39}$/

function generateCid(): string {
  // Mimic gtag.js `_ga` format: `<unix-seconds>.<random-32-bit>`
  const seconds = Math.floor(Date.now() / 1000)
  const random = Math.floor(Math.random() * 2_147_483_647)
  return `${seconds}.${random}`
}

function safeString(value: unknown, max = 500): string {
  if (typeof value === 'string') return value.slice(0, max)
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  return ''
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const measurementId = process.env.NEXT_PUBLIC_GA4_ID || ''
  if (!measurementId) return new NextResponse(null, { status: 204 })

  // Consent gate — silent 204 if visitor hasn't opted in
  const consent = req.cookies.get(CONSENT_COOKIE)?.value
  if (consent !== 'all') return new NextResponse(null, { status: 204 })

  // Parse body
  let body: { event_name?: unknown; params?: unknown }
  try {
    body = await req.json()
  } catch {
    return new NextResponse(null, { status: 204 })
  }

  // Validate event name
  const eventName = typeof body.event_name === 'string' ? body.event_name : 'page_view'
  if (!ALLOWED_EVENT_NAMES.test(eventName)) {
    return new NextResponse(null, { status: 204 })
  }

  const rawParams =
    body.params && typeof body.params === 'object' && !Array.isArray(body.params)
      ? (body.params as Record<string, unknown>)
      : {}

  // cid — stable per-visitor identifier
  let cid = req.cookies.get(CID_COOKIE)?.value
  let cidIsNew = false
  if (!cid || !/^[0-9]+\.[0-9]+$/.test(cid)) {
    cid = generateCid()
    cidIsNew = true
  }

  // Build GA4 v2 collect URL
  const url = new URL(GA4_COLLECT_ENDPOINT)
  const sp = url.searchParams
  sp.set('v', '2')
  sp.set('tid', measurementId)
  sp.set('cid', cid)
  sp.set('en', eventName)
  sp.set('_s', '1')

  // Reserved page_* params → GA4's compact field names
  if (rawParams.page_location) sp.set('dl', safeString(rawParams.page_location, 1000))
  if (rawParams.page_path && !sp.has('dl')) {
    // If only page_path supplied, synthesise a dl
    const path = safeString(rawParams.page_path, 1000)
    const origin = req.nextUrl.origin
    sp.set(
      'dl',
      path.startsWith('http') ? path : `${origin}${path.startsWith('/') ? '' : '/'}${path}`,
    )
  }
  if (rawParams.page_title) sp.set('dt', safeString(rawParams.page_title, 300))
  if (rawParams.page_referrer) sp.set('dr', safeString(rawParams.page_referrer, 1000))

  // Forward Accept-Language → ul (GA4 user language)
  const acceptLang = req.headers.get('accept-language') || 'en-GB'
  const primaryLang = acceptLang.split(',')[0]?.split(';')[0]?.toLowerCase().slice(0, 10) || 'en-gb'
  sp.set('ul', primaryLang)

  // Custom params → ep.<name> (string) or epn.<name> (number)
  for (const [key, value] of Object.entries(rawParams)) {
    if (RESERVED_PARAM_KEYS.has(key)) continue
    if (value === undefined || value === null || value === '') continue
    if (!/^[a-zA-Z][a-zA-Z0-9_]{0,39}$/.test(key)) continue
    if (typeof value === 'number' && Number.isFinite(value)) {
      sp.set(`epn.${key}`, String(value))
    } else if (typeof value === 'boolean') {
      sp.set(`ep.${key}`, value ? 'true' : 'false')
    } else if (typeof value === 'string') {
      sp.set(`ep.${key}`, value.slice(0, 500))
    }
  }

  // POST to GA4 /g/collect.
  //
  // We `await` this rather than fire-and-forget. In Vercel's Edge
  // runtime, detached promises can be killed when the response
  // returns, so a non-awaited fetch may never actually reach Google.
  // Latency cost is ~100-200ms (Google's edge is fast); analytics
  // calls aren't on a critical user path so the trade-off is right.
  const userAgent = req.headers.get('user-agent') || 'Mozilla/5.0 (compatible; eh-ga4-relay/1.0)'

  await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'User-Agent': userAgent,
      'Accept-Language': acceptLang,
      'Content-Length': '0',
    },
    cache: 'no-store',
    // 5-second cap so a slow Google never times out the visitor's request
    signal: AbortSignal.timeout(5000),
  }).catch(() => {
    // Swallow — analytics failures must not surface to the user
  })

  // Build response, set cid cookie if new
  const response = new NextResponse(null, { status: 204 })
  if (cidIsNew) {
    response.cookies.set({
      name: CID_COOKIE,
      value: cid,
      maxAge: CID_MAX_AGE,
      path: '/',
      sameSite: 'lax',
      secure: true,
      httpOnly: false, // visible to client for debugging / parity with _ga
    })
  }
  return response
}

/**
 * Beacon API uses POST without preflight thanks to the
 * 'application/json' content-type — but some browsers send a quick
 * OPTIONS first. Respond 204 so the relay never blocks on CORS.
 */
export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, { status: 204 })
}
