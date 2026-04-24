import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient, createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { sendAffiliateWelcomeEmail } from '@/lib/email/affiliate-welcome'

// ─── POST /api/affiliates/enrol ────────────────────────────────────────────
// Self-serve, instant-approve affiliate enrolment. No review queue.
//
// User must be signed in. They can optionally pick their own referral code;
// if they don't, we generate one from a URL-safe alphabet. The new affiliate
// row is inserted into public.affiliate_accounts with status='active' and
// tier='bronze' so they can start sharing immediately.
//
// Idempotent: if the user already has an affiliate_accounts row, we return it
// instead of creating a duplicate.
// ──────────────────────────────────────────────────────────────────────────

interface EnrolBody {
  chosen_code?: string
  display_name?: string
  understands_disclosure: boolean
  is_18_or_over: boolean
  guardian_name?: string
  guardian_email?: string
}

// Normalise a user-chosen code: uppercase, strip everything except A-Z/0-9/-.
function normaliseCode(raw: string): string {
  return raw.trim().toUpperCase().replace(/[^A-Z0-9-]/g, '')
}

// Must be 4-20 chars, alphanumeric + hyphen, can't start/end with hyphen.
function isValidCode(code: string): boolean {
  if (code.length < 4 || code.length > 20) return false
  if (code.startsWith('-') || code.endsWith('-')) return false
  return /^[A-Z0-9][A-Z0-9-]*[A-Z0-9]$/.test(code)
}

// Friendly random code: two syllables-ish so it's easy to say.
function generateRandomCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no 0/O, 1/I — avoids confusion
  let out = ''
  for (let i = 0; i < 7; i++) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  return out
}

// Reserved codes we never hand out.
const RESERVED_CODES = new Set([
  'ADMIN', 'TEST', 'DEMO', 'FREE', 'VOID', 'NULL',
  '2026ENGLISH', // public discount code — already in use
  'STAFF', 'TEAM', 'ENGLISH', 'THEHUB',
])

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 10 per IP per hour to prevent abuse.
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`affiliate-enrol:${ip}`, { limit: 10, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    let body: EnrolBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // ── Must be signed in — we lift name + email from the session ─────────
    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user?.email) {
      return NextResponse.json(
        { error: 'Please sign in or create an account to enrol.' },
        { status: 401 }
      )
    }

    // ── Basic consent gates — these are checkboxes, not review criteria ───
    if (!body.understands_disclosure) {
      return NextResponse.json(
        { error: 'You must acknowledge the #ad disclosure requirement.' },
        { status: 400 }
      )
    }
    if (!body.is_18_or_over) {
      // Minors can still participate but need guardian contact.
      if (!body.guardian_name?.trim() || !body.guardian_email?.trim()) {
        return NextResponse.json(
          { error: 'If you are under 18, please provide a parent or guardian name and email.' },
          { status: 400 }
        )
      }
    }

    const supabaseAdmin = createServiceRoleClient()

    // ── Idempotency: already enrolled? Return existing row ─────────────────
    const { data: existing } = await supabaseAdmin
      .from('affiliate_accounts')
      .select('id, code, status')
      .eq('user_id', user.id)
      .maybeSingle()

    if (existing) {
      return NextResponse.json({
        success: true,
        already_enrolled: true,
        code: existing.code,
        status: existing.status,
        referral_url: `https://theenglishhub.app/?ref=${existing.code}`,
        dashboard_url: '/affiliates/dashboard',
      })
    }

    // ── Determine the referral code ────────────────────────────────────────
    let code: string
    if (body.chosen_code && body.chosen_code.trim().length > 0) {
      code = normaliseCode(body.chosen_code)
      if (!isValidCode(code)) {
        return NextResponse.json(
          {
            error:
              'Code must be 4-20 characters, letters/numbers/hyphen only, and cannot start or end with a hyphen.',
          },
          { status: 400 }
        )
      }
      if (RESERVED_CODES.has(code)) {
        return NextResponse.json(
          { error: 'That code is reserved. Please choose another.' },
          { status: 400 }
        )
      }

      const { data: codeTaken } = await supabaseAdmin
        .from('affiliate_accounts')
        .select('id')
        .eq('code', code)
        .maybeSingle()
      if (codeTaken) {
        return NextResponse.json(
          { error: 'That code is already taken. Please choose another.' },
          { status: 409 }
        )
      }
    } else {
      // Generate + retry up to 5 times to avoid collisions.
      let generated = ''
      for (let attempt = 0; attempt < 5; attempt++) {
        generated = generateRandomCode()
        const { data: taken } = await supabaseAdmin
          .from('affiliate_accounts')
          .select('id')
          .eq('code', generated)
          .maybeSingle()
        if (!taken) break
        generated = ''
      }
      if (!generated) {
        return NextResponse.json(
          { error: 'Could not allocate a code. Please try again.' },
          { status: 500 }
        )
      }
      code = generated
    }

    // ── Insert active affiliate row ────────────────────────────────────────
    const display =
      body.display_name?.trim() ||
      (user.user_metadata?.full_name as string | undefined) ||
      user.email.split('@')[0]

    const { data: inserted, error: insertError } = await supabaseAdmin
      .from('affiliate_accounts')
      .insert({
        user_id: user.id,
        code,
        full_name: display,
        email: user.email.toLowerCase(),
        audience_description: 'Self-enrolled via /affiliates',
        promo_strategy: 'Self-enrolled — partner chose their own code via the public page.',
        status: 'active',
        tier: 'bronze',
        approved_at: new Date().toISOString(),
      })
      .select('id, code, status')
      .single()

    if (insertError || !inserted) {
      console.error('[affiliates/enrol] insert failed', insertError)
      return NextResponse.json(
        { error: 'Could not complete enrolment. Please try again.' },
        { status: 500 }
      )
    }

    const referralUrl = `https://theenglishhub.app/?ref=${inserted.code}`
    const dashboardUrl = '/affiliates/dashboard'

    // Fire-and-forget welcome email. Never await — a mail-service outage
    // must not block the user from seeing their code. Logs delivery
    // outcomes inside sendViaResend.
    void sendAffiliateWelcomeEmail({
      toEmail: user.email,
      displayName: display,
      code: inserted.code,
      referralUrl,
      dashboardUrl,
    }).catch((err) => {
      console.warn('[affiliates/enrol] welcome email failed', err)
    })

    return NextResponse.json({
      success: true,
      already_enrolled: false,
      code: inserted.code,
      status: inserted.status,
      referral_url: referralUrl,
      dashboard_url: dashboardUrl,
    })
  } catch (error) {
    console.error('[affiliates/enrol] unexpected', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
