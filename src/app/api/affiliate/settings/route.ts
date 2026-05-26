/**
 * POST /api/affiliate/settings
 *
 * Updates the editable settings for the currently authenticated affiliate's
 * row in `public.affiliate_accounts`.
 *
 * Editable fields (all optional in the request body):
 *  - full_name             - display name (2-120 chars)
 *  - payout_method         - 'bank_transfer' | 'paypal' | 'stripe_connect'
 *  - payout_email          - required when payout_method = 'paypal'
 *  - bank_account_name     - name on the BACS account
 *  - bank_sort_code        - `12-34-56` (validated; stored normalised)
 *  - bank_account_number   - exactly 8 digits
 *
 * Read-only here - handled out of band:
 *  - code (referral code)  → contact support
 *  - email                 → linked to the auth user
 *  - tier / status         → managed by admin / referral counter
 *
 * Auth model: anon-key client used to resolve `auth.uid()`, then a service-role
 * client performs the update with an explicit `user_id` filter so we cannot
 * cross-update someone else's row even if RLS were misconfigured. RLS already
 * restricts UPDATE to `auth.uid() = user_id` (see the migration), so this is
 * defence in depth.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

interface SettingsBody {
  full_name?: string
  payout_method?: 'bank_transfer' | 'paypal' | 'stripe_connect'
  payout_email?: string
  bank_account_name?: string
  bank_sort_code?: string
  bank_account_number?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SORT_CODE_REGEX = /^\d{2}-\d{2}-\d{2}$/
const ACCOUNT_NUMBER_REGEX = /^\d{8}$/
const VALID_PAYOUT_METHODS = ['bank_transfer', 'paypal', 'stripe_connect'] as const

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    // ── Rate limit: 20 saves per 5 minutes per user ──────────────────────
    const rl = await rateLimit(`affiliate-settings:${user.id}`, {
      limit: 20,
      windowSeconds: 300,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    let body: SettingsBody
    try {
      body = (await request.json()) as SettingsBody
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // ── Validate ────────────────────────────────────────────────────────
    const update: Record<string, string | null> = {}

    if (body.full_name !== undefined) {
      const trimmed = body.full_name.trim()
      if (trimmed.length < 2 || trimmed.length > 120) {
        return NextResponse.json(
          { error: 'Display name must be between 2 and 120 characters.' },
          { status: 400 },
        )
      }
      update.full_name = trimmed
    }

    if (body.payout_method !== undefined) {
      if (!VALID_PAYOUT_METHODS.includes(body.payout_method)) {
        return NextResponse.json({ error: 'Invalid payout method.' }, { status: 400 })
      }
      update.payout_method = body.payout_method
    }

    if (body.payout_email !== undefined) {
      const trimmed = body.payout_email.trim()
      if (trimmed && !EMAIL_REGEX.test(trimmed)) {
        return NextResponse.json(
          { error: 'PayPal email is not a valid email address.' },
          { status: 400 },
        )
      }
      update.payout_email = trimmed || null
    }

    if (body.bank_account_name !== undefined) {
      const trimmed = body.bank_account_name.trim()
      if (trimmed.length > 120) {
        return NextResponse.json(
          { error: 'Account name must be 120 characters or fewer.' },
          { status: 400 },
        )
      }
      update.bank_account_name = trimmed || null
    }

    if (body.bank_sort_code !== undefined) {
      const trimmed = body.bank_sort_code.trim()
      if (trimmed && !SORT_CODE_REGEX.test(trimmed)) {
        return NextResponse.json(
          { error: 'Sort code must be 6 digits in the format 12-34-56.' },
          { status: 400 },
        )
      }
      update.bank_sort_code = trimmed || null
    }

    if (body.bank_account_number !== undefined) {
      const trimmed = body.bank_account_number.trim()
      if (trimmed && !ACCOUNT_NUMBER_REGEX.test(trimmed)) {
        return NextResponse.json(
          { error: 'Account number must be exactly 8 digits.' },
          { status: 400 },
        )
      }
      update.bank_account_number = trimmed || null
    }

    // Cross-field check: PayPal payouts require an email (either being set
    // now or already on file).
    if (update.payout_method === 'paypal') {
      const admin = createServiceRoleClient()
      const { data: existing } = await admin
        .from('affiliate_accounts')
        .select('payout_email')
        .eq('user_id', user.id)
        .maybeSingle()
      const newEmail = update.payout_email
      const storedEmail = existing?.payout_email ?? null
      const effectiveEmail = newEmail !== undefined ? newEmail : storedEmail
      if (!effectiveEmail) {
        return NextResponse.json(
          { error: 'A PayPal email address is required for PayPal payouts.' },
          { status: 400 },
        )
      }
    }

    if (Object.keys(update).length === 0) {
      return NextResponse.json({ error: 'No editable fields supplied.' }, { status: 400 })
    }

    // ── Perform the update ───────────────────────────────────────────────
    const admin = createServiceRoleClient()

    const { data: updated, error: updateErr } = await admin
      .from('affiliate_accounts')
      .update(update)
      .eq('user_id', user.id)
      .select('id')
      .maybeSingle()

    if (updateErr) {
      console.error('[affiliate/settings] update failed:', updateErr)
      return NextResponse.json(
        { error: 'Failed to save settings. Please try again.' },
        { status: 500 },
      )
    }

    if (!updated) {
      return NextResponse.json(
        { error: 'No affiliate account found for this user.' },
        { status: 404 },
      )
    }

    return NextResponse.json({ success: true, id: updated.id }, { status: 200 })
  } catch (err) {
    console.error('[affiliate/settings] unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
