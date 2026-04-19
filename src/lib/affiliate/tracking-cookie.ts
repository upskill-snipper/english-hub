/**
 * Affiliate tracking cookie helpers.
 *
 * Cookie schema (JSON, base64 URL encoded to survive transit):
 *   {
 *     ref: string           // affiliate code (public)
 *     linkId?: string       // specific link UUID, if ?ref=… came via a generated link
 *     firstTouchAt: string  // ISO timestamp of earliest click
 *     lastTouchAt: string   // ISO timestamp of most recent click
 *     clickCount: number
 *   }
 *
 * Used by both the middleware (which writes it on ?ref=…) and the
 * API routes under /api/affiliate/* (which read it at conversion time).
 */

import type { NextRequest, NextResponse } from 'next/server'

export const AFFILIATE_COOKIE_NAME = 'teh_aff'
export const AFFILIATE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30 // 30 days

export interface AffiliateCookiePayload {
  ref: string
  linkId?: string
  firstTouchAt: string
  lastTouchAt: string
  clickCount: number
}

// ---------------------------------------------------------------------------
// Encoding
// ---------------------------------------------------------------------------

function encode(payload: AffiliateCookiePayload): string {
  const json = JSON.stringify(payload)
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(json, 'utf8').toString('base64url')
  }
  // Edge runtime fallback
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const b64 = (globalThis as any).btoa(unescape(encodeURIComponent(json)))
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decode(raw: string): AffiliateCookiePayload | null {
  try {
    let json: string
    if (typeof Buffer !== 'undefined') {
      json = Buffer.from(raw, 'base64url').toString('utf8')
    } else {
      const b64 = raw.replace(/-/g, '+').replace(/_/g, '/')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      json = decodeURIComponent(escape((globalThis as any).atob(b64)))
    }
    const parsed = JSON.parse(json) as AffiliateCookiePayload
    if (!parsed || typeof parsed.ref !== 'string') return null
    return parsed
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// Shared cookie options
// ---------------------------------------------------------------------------

const BASE_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: AFFILIATE_COOKIE_MAX_AGE_SECONDS,
}

// ---------------------------------------------------------------------------
// Middleware / NextResponse flavour (edge-safe, used by middleware.ts)
// ---------------------------------------------------------------------------

export function readAffiliateCookieFromRequest(
  request: NextRequest
): AffiliateCookiePayload | null {
  const raw = request.cookies.get(AFFILIATE_COOKIE_NAME)?.value
  if (!raw) return null
  return decode(raw)
}

export function writeAffiliateCookieOnResponse(
  response: NextResponse,
  payload: AffiliateCookiePayload
): void {
  response.cookies.set({
    name: AFFILIATE_COOKIE_NAME,
    value: encode(payload),
    ...BASE_COOKIE_OPTIONS,
  })
}

export function clearAffiliateCookieOnResponse(response: NextResponse): void {
  response.cookies.set({
    name: AFFILIATE_COOKIE_NAME,
    value: '',
    ...BASE_COOKIE_OPTIONS,
    maxAge: 0,
  })
}

// ---------------------------------------------------------------------------
// Server component / route handler flavour
//
// These helpers use `next/headers`, which must be imported dynamically —
// importing at the top of the file would break the edge-runtime middleware
// that also consumes the NextRequest/NextResponse flavours above.
// ---------------------------------------------------------------------------

async function getCookieStore() {
  const mod = await import('next/headers')
  // Next 15: `cookies()` is async and must be awaited.
  return await mod.cookies()
}

export async function readAffiliateCookie(): Promise<AffiliateCookiePayload | null> {
  const store = await getCookieStore()
  const raw = store.get(AFFILIATE_COOKIE_NAME)?.value
  if (!raw) return null
  return decode(raw)
}

export async function writeAffiliateCookie(
  payload: AffiliateCookiePayload
): Promise<void> {
  const store = await getCookieStore()
  try {
    store.set({
      name: AFFILIATE_COOKIE_NAME,
      value: encode(payload),
      ...BASE_COOKIE_OPTIONS,
    })
  } catch {
    // Called from a context where cookies are read-only (e.g. RSC) — ignore
  }
}

export async function clearAffiliateCookie(): Promise<void> {
  const store = await getCookieStore()
  try {
    store.set({
      name: AFFILIATE_COOKIE_NAME,
      value: '',
      ...BASE_COOKIE_OPTIONS,
      maxAge: 0,
    })
  } catch {
    // ignore in read-only contexts
  }
}

/**
 * Build a fresh cookie payload for a first-ever click.
 */
export function buildInitialPayload(
  ref: string,
  linkId?: string
): AffiliateCookiePayload {
  const now = new Date().toISOString()
  return {
    ref,
    linkId,
    firstTouchAt: now,
    lastTouchAt: now,
    clickCount: 1,
  }
}
