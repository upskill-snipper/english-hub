/**
 * POST /api/email/capture
 *
 * Receives email captures from <EmailCaptureCard /> across study guides,
 * blog posts, and lead-magnet landing pages. Inserts into
 * `email_subscribers` (service-role-only RLS) and is idempotent on
 * (email, magnet_slug) — the same magnet/email pair can be re-submitted
 * without error.
 *
 * Designed to be GDPR/UK-DPA compliant: the `consent_marketing` boolean
 * is captured explicitly, the source path is logged for audit, and
 * UTM parameters are persisted for attribution. Right-to-erasure is
 * handled out-of-band via the runbook (see
 * business-docs/EMAIL-CAPTURE-RUNBOOK.md).
 *
 * Rate limit: 5 captures per IP per hour. Uses the project's shared
 * `rateLimit` helper, which talks to Upstash Redis when configured and
 * falls back to a per-process in-memory limiter for local dev. The
 * in-memory fallback is only acceptable here because the volume on this
 * endpoint is bounded by lead-magnet traffic; if that grows, the
 * Upstash backend should always be configured in production (it
 * already is — `UPSTASH_REDIS_REST_*` env vars in Vercel).
 *
 * Privacy: server logs only ever record a one-character prefix of the
 * email address ("c…") so plain-text addresses never hit the log
 * sink in production.
 */
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ─── Validation ─────────────────────────────────────────────────────────

const captureSchema = z.object({
  email: z.string().email().max(255),
  magnetSlug: z.string().max(120).optional(),
  sourcePath: z.string().max(500).optional(),
  consentMarketing: z.boolean().default(false),
  utm: z
    .object({
      source: z.string().max(120).optional(),
      medium: z.string().max(120).optional(),
      campaign: z.string().max(120).optional(),
    })
    .optional(),
})

// ─── Helpers ────────────────────────────────────────────────────────────

/**
 * One-letter prefix only — enough to correlate failures in logs without
 * persisting a plain-text email anywhere outside the database.
 */
function emailPrefix(email: string): string {
  if (!email) return '?'
  return `${email[0]}…`
}

// ─── POST /api/email/capture ────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // ── 1. Rate limit: 5 per IP per hour ───────────────────────────────────
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`email-capture:${ip}`, {
    limit: 5,
    windowSeconds: 60 * 60,
  })
  if (!rl.success) {
    const retryAfter = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000))
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(retryAfter) },
      },
    )
  }

  // ── 2. Parse + validate body ───────────────────────────────────────────
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = captureSchema.safeParse(body)
  if (!parsed.success) {
    // Sanitised Zod errors — only the field-level messages, never the
    // input value itself, so a malformed email never gets echoed back
    // into a response that may be cached or logged elsewhere.
    const fieldErrors: Record<string, string[]> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path.join('.') || '_root'
      if (!fieldErrors[key]) fieldErrors[key] = []
      fieldErrors[key].push(issue.message)
    }
    return NextResponse.json({ error: 'Invalid input', errors: fieldErrors }, { status: 400 })
  }

  const { email, magnetSlug, sourcePath, consentMarketing, utm } = parsed.data
  const normalisedEmail = email.toLowerCase().trim()

  // ── 3. Insert into email_subscribers ───────────────────────────────────
  const supabase = createServiceRoleClient()

  const { error } = await supabase.from('email_subscribers').insert({
    email: normalisedEmail,
    magnet_slug: magnetSlug ?? null,
    source_path: sourcePath ?? null,
    consent_marketing: consentMarketing,
    utm_source: utm?.source ?? null,
    utm_medium: utm?.medium ?? null,
    utm_campaign: utm?.campaign ?? null,
  })

  if (error) {
    // Postgres unique-violation = same (email, magnet_slug) already exists.
    // Treat as idempotent success so the UI shows the same "thanks" state
    // a returning visitor would have hit anyway.
    if (error.code === '23505') {
      return NextResponse.json({
        success: true,
        already_subscribed: true,
        // signed_download_url is intentionally null in the initial
        // implementation. A future ticket will look up the magnetSlug
        // against a hosted-PDF table and mint a Supabase signed URL
        // here so the EmailCaptureCard can offer an immediate download.
        signed_download_url: null,
      })
    }

    console.error(
      '[email-capture] insert failed for',
      emailPrefix(normalisedEmail),
      'magnet=',
      magnetSlug ?? 'none',
      'code=',
      error.code,
    )
    return NextResponse.json(
      { error: 'Could not save your details. Please try again.' },
      { status: 500 },
    )
  }

  // ── 4. Success ─────────────────────────────────────────────────────────
  // signed_download_url: future ticket will replace `null` with a Supabase
  // Storage signed URL when `magnetSlug` matches a row in a yet-to-be-built
  // `lead_magnets` table. For now the UI falls back to "check your inbox".
  return NextResponse.json({
    success: true,
    already_subscribed: false,
    signed_download_url: null,
  })
}
