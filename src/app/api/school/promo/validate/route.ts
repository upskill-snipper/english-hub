import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// POST /api/school/promo/validate
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest): Promise<NextResponse> {
  // ── Rate limit: 20 checks per IP per minute ──────────────────────────────
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`promo-validate:${ip}`, {
    limit: 20,
    windowSeconds: 60,
  })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
        },
      },
    )
  }

  let body: { promoCode?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const { promoCode } = body

  if (!promoCode || typeof promoCode !== 'string' || !promoCode.trim()) {
    return NextResponse.json({ error: 'promoCode is required.' }, { status: 422 })
  }

  const normalized = promoCode.trim().toUpperCase()

  // ── FOUNDER code — hardcoded special case ────────────────────────────────
  if (normalized === 'FOUNDER') {
    return NextResponse.json({
      valid: true,
      discount: '100%',
      description: 'Free access until August 2026',
      accessUntil: '2026-08-31',
    })
  }

  // ── Look up promo_codes table ────────────────────────────────────────────
  const admin = createServiceRoleClient()

  // P1 (Cycle 2 data model): the committed `promo_codes` schema
  // (supabase/migrations/20260404_school_promo_and_access.sql) has
  // `discount_type`, `discount_value`, and `free_until_date` columns —
  // NOT `discount_percent` or `access_until`. Earlier versions of this
  // route read the non-existent columns and always returned the "Discount
  // applied" fallback plus `undefined` for `accessUntil`. Corrected below.
  const { data: promo, error } = await admin
    .from('promo_codes')
    .select(
      'id, code, discount_type, discount_value, free_until_date, description, is_active, max_uses, uses',
    )
    .eq('code', normalized)
    .maybeSingle()

  if (error) {
    console.error('[promo/validate] DB error:', error)
    return NextResponse.json(
      { error: 'Failed to validate promo code. Please try again.' },
      { status: 500 },
    )
  }

  if (!promo || !promo.is_active) {
    return NextResponse.json({ valid: false, discount: '', description: '' })
  }

  if (promo.max_uses !== null && promo.uses >= promo.max_uses) {
    return NextResponse.json({
      valid: false,
      discount: '',
      description: 'This promo code has reached its usage limit.',
    })
  }

  let discountLabel = 'Discount applied'
  if (promo.discount_type === 'percent' && promo.discount_value != null) {
    discountLabel = `${promo.discount_value}% off`
  } else if (promo.discount_type === 'fixed' && promo.discount_value != null) {
    discountLabel = `£${promo.discount_value} off`
  } else if (promo.discount_type === 'free_until_date' && promo.free_until_date) {
    discountLabel = `Free until ${promo.free_until_date}`
  }

  const response: {
    valid: boolean
    discount: string
    description: string
    accessUntil?: string
  } = {
    valid: true,
    discount: discountLabel,
    description: promo.description ?? 'Promotional discount',
  }

  if (promo.free_until_date) {
    response.accessUntil = promo.free_until_date
  }

  return NextResponse.json(response)
}
