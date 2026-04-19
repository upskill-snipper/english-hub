/**
 * POST /api/affiliate/track-conversion
 *
 * Records an affiliate conversion. Typically called from:
 *   1. A Stripe webhook handler on `checkout.session.completed`, via an
 *      internal fetch using the service role.
 *   2. A server action that wraps post-payment / post-signup logic.
 *
 * Pipeline:
 *   1. Read the teh_aff cookie and run attribution (30-day last-touch default).
 *   2. Look up the affiliate_accounts row for the resolved ref.
 *   3. Compute commission from tier ladder (Bronze/Silver/Gold).
 *   4. Insert a row into affiliate_conversions. Idempotent on `external_id`.
 *
 * Request body:
 *   {
 *     external_id: string          // e.g. Stripe session ID — unique key
 *     order_value_pence: number    // sale amount in minor units
 *     currency?: 'gbp'             // default gbp
 *     product_type?: 'subscription' | 'one_time' | 'course'
 *     referred_user_id?: string    // supabase auth user.id, if available
 *     metadata?: object
 *   }
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { readAffiliateCookieFromRequest } from '@/lib/affiliate/tracking-cookie'
import { resolveAttribution, DEFAULT_ATTRIBUTION } from '@/lib/affiliate/attribution-v2'
import { calculateCommissionPence, getCurrentTierInfo } from '@/lib/affiliate/tiers'

interface ConversionBody {
  external_id: string
  order_value_pence: number
  currency?: string
  product_type?: 'subscription' | 'one_time' | 'course'
  referred_user_id?: string
  metadata?: Record<string, unknown>
}

const EXTERNAL_ID_REGEX = /^[A-Za-z0-9_.:-]{3,200}$/

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`affiliate-convert:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
    }

    let body: ConversionBody
    try {
      body = (await request.json()) as ConversionBody
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    if (!body.external_id || !EXTERNAL_ID_REGEX.test(body.external_id)) {
      return NextResponse.json({ error: 'Invalid external_id' }, { status: 400 })
    }
    if (
      typeof body.order_value_pence !== 'number' ||
      !Number.isFinite(body.order_value_pence) ||
      body.order_value_pence < 0 ||
      body.order_value_pence > 100_000_000
    ) {
      return NextResponse.json({ error: 'Invalid order_value_pence' }, { status: 400 })
    }

    // ── Attribution ──────────────────────────────────────────
    const cookie = readAffiliateCookieFromRequest(request)
    const attribution = resolveAttribution(cookie, DEFAULT_ATTRIBUTION)

    if (!attribution.attributed || !attribution.ref) {
      return NextResponse.json(
        {
          success: true,
          attributed: false,
          reason: attribution.reason ?? 'no_attribution',
        },
        { status: 200 },
      )
    }

    const admin = createServiceRoleClient()

    // Idempotency guard — we must never double-count a conversion.
    const { data: existing } = await admin
      .from('affiliate_conversions')
      .select('id')
      .eq('external_id', body.external_id)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        { success: true, attributed: true, conversion_id: existing.id, deduplicated: true },
        { status: 200 },
      )
    }

    // Resolve affiliate account
    const { data: account, error: accountErr } = await admin
      .from('affiliate_accounts')
      .select('id, status, confirmed_referral_count')
      .eq('code', attribution.ref)
      .maybeSingle()

    if (accountErr) {
      console.error('[affiliate/track-conversion] account lookup failed:', accountErr)
      return NextResponse.json({ error: 'Failed to resolve affiliate' }, { status: 500 })
    }

    if (!account || account.status !== 'active') {
      return NextResponse.json(
        { success: true, attributed: false, reason: 'affiliate_not_active' },
        { status: 200 },
      )
    }

    // Commission calculation — flat-rate tiered by lifetime signup count.
    // 19 April 2026: migrated from percentage-based to flat-rate (see
    // src/lib/affiliate/tiers.ts). order_value_pence is logged but no
    // longer used in the commission calculation; kept for accounting.
    const referralCount = Number(account.confirmed_referral_count ?? 0)
    const tierInfo = getCurrentTierInfo(referralCount + 1)
    const commissionPence = calculateCommissionPence(referralCount)

    const { data: inserted, error: insertErr } = await admin
      .from('affiliate_conversions')
      .insert({
        affiliate_id: account.id,
        link_id: attribution.linkId,
        external_id: body.external_id,
        order_value_pence: body.order_value_pence,
        commission_pence: commissionPence,
        // Flat-rate system has no percentage rate; store 0 for backwards compat.
        commission_rate: 0,
        tier_at_conversion: tierInfo.tier,
        currency: (body.currency ?? 'gbp').toLowerCase(),
        product_type: body.product_type ?? null,
        referred_user_id: body.referred_user_id ?? null,
        attribution_model: attribution.model,
        touched_at: attribution.touchAt,
        metadata: body.metadata ?? null,
        status: 'pending',
      })
      .select('id')
      .single()

    if (insertErr || !inserted) {
      console.error('[affiliate/track-conversion] insert failed:', insertErr)
      return NextResponse.json({ error: 'Failed to record conversion' }, { status: 500 })
    }

    return NextResponse.json(
      {
        success: true,
        attributed: true,
        conversion_id: inserted.id,
        commission_pence: commissionPence,
        tier: tierInfo.tier,
      },
      { status: 201 },
    )
  } catch (err) {
    console.error('[affiliate/track-conversion] unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
