/**
 * GET|POST /api/affiliate/track-click
 *
 * Tracking beacon for affiliate clicks. Writes/updates the teh_aff tracking
 * cookie and records a row in `affiliate_clicks`. This endpoint exists as a
 * backup to the middleware-based cookie write - it lets client code fire an
 * explicit tracking call (e.g. from a landing-page hero CTA) and is the
 * canonical place where clicks are persisted to the DB.
 *
 * GET query params: ?ref=<code>&link=<link_id_or_token>
 * POST JSON body:   { ref, link?, landing_path?, referrer? }
 *
 * Responses are intentionally minimal so this can be fetched as an image/
 * sendBeacon target without CORS issues.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  readAffiliateCookieFromRequest,
  writeAffiliateCookieOnResponse,
} from '@/lib/affiliate/tracking-cookie'
import { applyNewClick } from '@/lib/affiliate/attribution-v2'

const REF_REGEX = /^[A-Za-z0-9_-]{3,64}$/
const LINK_REGEX = /^[A-Za-z0-9_-]{3,64}$/

interface ClickPayload {
  ref: string
  link?: string
  landing_path?: string
  referrer?: string
}

async function parsePayload(request: NextRequest): Promise<ClickPayload | null> {
  if (request.method === 'GET') {
    const { searchParams } = request.nextUrl
    const ref = searchParams.get('ref')
    if (!ref) return null
    return {
      ref,
      link: searchParams.get('link') ?? undefined,
      landing_path: searchParams.get('path') ?? undefined,
      referrer: request.headers.get('referer') ?? undefined,
    }
  }

  try {
    const body = (await request.json()) as Partial<ClickPayload>
    if (!body || typeof body.ref !== 'string') return null
    return {
      ref: body.ref,
      link: typeof body.link === 'string' ? body.link : undefined,
      landing_path: typeof body.landing_path === 'string' ? body.landing_path : undefined,
      referrer:
        typeof body.referrer === 'string'
          ? body.referrer
          : (request.headers.get('referer') ?? undefined),
    }
  } catch {
    return null
  }
}

async function handle(request: NextRequest): Promise<NextResponse> {
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`affiliate-click:${ip}`, {
    limit: 100,
    windowSeconds: 60,
  })
  if (!rl.success) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  const payload = await parsePayload(request)
  if (!payload) {
    return NextResponse.json({ ok: false, error: 'missing_ref' }, { status: 400 })
  }

  if (!REF_REGEX.test(payload.ref)) {
    return NextResponse.json({ ok: false, error: 'invalid_ref' }, { status: 400 })
  }
  if (payload.link && !LINK_REGEX.test(payload.link)) {
    return NextResponse.json({ ok: false, error: 'invalid_link' }, { status: 400 })
  }

  const admin = createServiceRoleClient()

  // Look up affiliate by code. If not found, we still write the cookie so
  // we can debug bad links without leaking enumeration data - but we do NOT
  // write a click row.
  const { data: account } = await admin
    .from('affiliate_accounts')
    .select('id, status')
    .eq('code', payload.ref)
    .maybeSingle()

  let linkId: string | null = null
  if (payload.link && account?.id) {
    const { data: linkRow } = await admin
      .from('affiliate_links')
      .select('id, token')
      .eq('affiliate_id', account.id)
      .or(`id.eq.${payload.link},token.eq.${payload.link}`)
      .maybeSingle()
    linkId = linkRow?.id ?? null
  }

  // Prepare response and rotate cookie
  const response = NextResponse.json({ ok: true }, { status: 200 })
  const existing = readAffiliateCookieFromRequest(request)
  const newPayload = applyNewClick(existing, payload.ref, linkId ?? undefined)
  writeAffiliateCookieOnResponse(response, newPayload)

  // Fire-and-forget insert - don't block the beacon response on DB writes
  if (account && account.status === 'active') {
    const insertP = admin.from('affiliate_clicks').insert({
      affiliate_id: account.id,
      link_id: linkId,
      ip_hash: ip ? hashIp(ip) : null,
      user_agent: request.headers.get('user-agent')?.slice(0, 500) ?? null,
      referrer: payload.referrer?.slice(0, 500) ?? null,
      landing_path: payload.landing_path?.slice(0, 500) ?? null,
    })
    // Await but swallow errors - we never want to 500 a tracking beacon
    try {
      await insertP
    } catch (err) {
      console.error('[affiliate/track-click] insert failed:', err)
    }
  }

  return response
}

/**
 * Hash IP addresses before storing. We only need rough uniqueness for
 * click-fraud / deduplication, never the raw IP. Uses HMAC-SHA256 truncated
 * to 16 hex chars (64 bits) - cryptographically secure and resistant to
 * rainbow-table attacks across the IPv4 space (fix for Cycle 2 security
 * deep-dive P2: previous DJB2 implementation was not cryptographically
 * secure).
 *
 * The secret MUST be set via `AFFILIATE_IP_HASH_SECRET` in production.
 * In dev, an unset secret falls back to a placeholder so the feature does
 * not hard-fail - but IP deduplication is not secure until the env var is
 * configured.
 */
function hashIp(ip: string): string {
  let secret = process.env.AFFILIATE_IP_HASH_SECRET
  if (!secret) {
    console.error(
      '[affiliate/track-click] AFFILIATE_IP_HASH_SECRET not set - using placeholder; IP deduplication is insecure until configured',
    )
    secret = 'teh-aff-dev-placeholder-configure-in-prod'
  }
  return createHmac('sha256', secret).update(ip).digest('hex').slice(0, 16)
}

export async function GET(request: NextRequest) {
  return handle(request)
}

export async function POST(request: NextRequest) {
  return handle(request)
}
