/**
 * Affiliate tracking middleware helper for The English Hub.
 *
 * Detects ?ref=<code> on any incoming request and upserts the affiliate
 * tracking cookie (teh_aff). Designed to be called from src/middleware.ts
 * after the Supabase session has been updated so we can annotate the
 * existing NextResponse in place.
 *
 * This file does NOT register its own middleware. Instead, the project's
 * main middleware imports `applyAffiliateTracking` and calls it on the
 * response it is about to return.
 */

import { NextResponse, type NextRequest } from 'next/server'
import {
  readAffiliateCookieFromRequest,
  writeAffiliateCookieOnResponse,
} from '@/lib/affiliate/tracking-cookie'
import { applyNewClick } from '@/lib/affiliate/attribution-v2'

const REF_PARAM = 'ref'
const LINK_PARAM = 'aff_link'
// Reject obvious junk early so we don't write cookies for bots hitting `?ref=<script>`
const REF_REGEX = /^[A-Za-z0-9_-]{3,64}$/

/**
 * Inspect a request and, if it carries ?ref=<code>, persist the affiliate
 * tracking cookie on the provided response. Safe to call on every request
 * - no-ops when there is no ref param.
 *
 * Returns the same response object (mutated) for chaining.
 */
export function applyAffiliateTracking(request: NextRequest, response: NextResponse): NextResponse {
  const { searchParams } = request.nextUrl
  const ref = searchParams.get(REF_PARAM)
  if (!ref) return response

  if (!REF_REGEX.test(ref)) return response

  // PECR reg. 6 (2026-08-23): affiliate attribution is a MARKETING purpose,
  // so its cookie needs consent before it is set - it is not strictly
  // necessary to deliver the service the user requested. Every other
  // non-essential tracker on the site is already gated this way (the GA4
  // relay refuses unless eh-cookie-consent is 'all'; ConsentGatedAnalytics
  // checks hasAnalyticsConsent). This one was writing a 30-day identifier on
  // any ?ref= link with no check at all, on a product used by children.
  // Without consent we simply do not persist the click.
  if (request.cookies.get('eh-cookie-consent')?.value !== 'all') return response

  const linkParam = searchParams.get(LINK_PARAM) ?? undefined

  const existing = readAffiliateCookieFromRequest(request)
  const payload = applyNewClick(existing, ref, linkParam)

  writeAffiliateCookieOnResponse(response, payload)
  return response
}

/**
 * Standalone middleware entrypoint - exported so the file is self-sufficient
 * for tests and for projects that want to run it as a dedicated middleware.
 * Not wired into Next.js directly (src/middleware.ts handles routing).
 */
export function affiliateMiddleware(request: NextRequest): NextResponse {
  const response = NextResponse.next({ request: { headers: request.headers } })
  return applyAffiliateTracking(request, response)
}
