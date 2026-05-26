import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { verifyAdmin } from '@/lib/admin-auth'

// ─── GET /api/admin/email-status ────────────────────────────────────────
//
// Diagnostic endpoint that calls Resend's /domains API and returns the
// verification status of every domain on the account. The founder uses
// this to confirm whether `theenglishhub.app` is VERIFIED (DNS records
// in place) or PENDING (DNS records missing - emails will be rejected).
//
// Resend domain status values (from their docs):
//   - "verified"      - all DNS records present, sending works
//   - "pending"       - added but not yet verified
//   - "not_started"   - created but never checked
//   - "failed"        - DNS records missing/wrong; sending rejected
//   - "temporary_failure" - transient
//
// Gated by verifyAdmin().
// ────────────────────────────────────────────────────────────────────────

export const dynamic = 'force-dynamic'

const TARGET_DOMAIN = 'theenglishhub.app'

interface ResendDomain {
  id: string
  name: string
  status: string
  region?: string
  created_at?: string
  records?: Array<{
    record: string
    name: string
    type: string
    value: string
    status?: string
    ttl?: string | number
    priority?: number
  }>
}

interface ResendDomainsResponse {
  data?: ResendDomain[]
  // older shape - defensive parse
  domains?: ResendDomain[]
}

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit: 30 per IP per minute ───────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-email-status:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    // ── Admin auth ─────────────────────────────────────────
    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          reason: 'no-key',
          summary: 'RESEND_API_KEY is not set in this environment.',
          domains: [],
        },
        { status: 200 },
      )
    }

    // ── Call Resend ──────────────────────────────────────
    const res = await fetch('https://api.resend.com/domains', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      // never cache - we want a live read
      cache: 'no-store',
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      return NextResponse.json(
        {
          ok: false,
          reason: 'http-error',
          status: res.status,
          summary:
            res.status === 401
              ? 'Resend rejected the API key (401). Check RESEND_API_KEY value.'
              : `Resend returned HTTP ${res.status}.`,
          detail: detail.slice(0, 500),
          domains: [],
        },
        { status: 200 },
      )
    }

    const json = (await res.json()) as ResendDomainsResponse
    const domains = json.data ?? json.domains ?? []

    const target = domains.find((d) => d.name?.toLowerCase() === TARGET_DOMAIN)
    let summary: string
    if (!target) {
      summary = `${TARGET_DOMAIN}: NOT ADDED - go to https://resend.com/domains and add it.`
    } else if (target.status === 'verified') {
      summary = `${TARGET_DOMAIN}: VERIFIED - sending should work.`
    } else {
      summary = `${TARGET_DOMAIN}: ${target.status?.toUpperCase() ?? 'UNKNOWN'} - DNS records missing or not yet propagated. Verification emails will be rejected until this clears.`
    }

    return NextResponse.json({
      ok: true,
      summary,
      targetDomain: TARGET_DOMAIN,
      target: target ?? null,
      domains,
    })
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'unknown error'
    console.error('[api/admin/email-status] Unexpected error:', detail)
    return NextResponse.json({ error: 'Internal server error', detail }, { status: 500 })
  }
}
