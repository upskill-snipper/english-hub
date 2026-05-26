import type { Metadata } from 'next'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AffiliateSettingsClient, { type AffiliateAccountSettings } from './AffiliateSettingsClient'
import { t } from '@/lib/i18n/t'

// 2026-05-13: metadata wired to i18n - document title resolves through
// `affiliates.settings.meta.title` so the AR locale serves Khaleeji copy.
export async function generateMetadata(): Promise<Metadata> {
  return { title: await t('affiliates.settings.meta.title') }
}

// ─── /affiliates/settings ──────────────────────────────────────────────────
//
// Reads from the NEW affiliate_accounts system (commit 20260420_affiliates_v2).
// The legacy affiliates table path has been retired here - every self-serve
// enrolment via /api/affiliate/signup writes to affiliate_accounts.
//
// Fixes the redirect-loop that bounced new-system affiliates to
// /affiliates/apply because the previous query was looking in the legacy
// `public.affiliates` table where their row does not exist.
// ────────────────────────────────────────────────────────────────────────────

export default async function AffiliateSettingsPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login?redirect=/affiliates/settings')

  const admin = createServiceRoleClient()

  const { data: account } = await admin
    .from('affiliate_accounts')
    .select(
      'id, user_id, code, status, tier, full_name, email, website, social_handle, audience_size, audience_description, promo_strategy, payout_method, payout_email, bank_account_name, bank_sort_code, bank_account_number, stripe_connect_account_id, created_at, updated_at, approved_at',
    )
    .eq('user_id', user.id)
    .maybeSingle()

  // No row - send the user to the enrolment form (NOT /affiliates/apply,
  // which historically caused the redirect loop documented on the dashboard).
  if (!account) {
    redirect('/affiliates#apply')
  }

  // Only active / approved affiliates may edit their settings. Pending
  // applicants see the apply page status banner.
  const isActive = account.status === 'active' || account.status === 'approved'
  if (!isActive) {
    redirect('/affiliates/apply?status=pending')
  }

  const settings: AffiliateAccountSettings = {
    id: account.id,
    code: account.code,
    status: account.status,
    tier: (account.tier ?? 'bronze') as 'bronze' | 'silver' | 'gold',
    full_name: account.full_name,
    email: account.email,
    website: account.website ?? null,
    social_handle: account.social_handle ?? null,
    audience_size: account.audience_size ?? null,
    audience_description: account.audience_description ?? null,
    promo_strategy: account.promo_strategy ?? null,
    payout_method: (account.payout_method ?? 'bank_transfer') as
      | 'bank_transfer'
      | 'paypal'
      | 'stripe_connect',
    payout_email: account.payout_email ?? null,
    bank_account_name: account.bank_account_name ?? null,
    bank_sort_code: account.bank_sort_code ?? null,
    bank_account_number: account.bank_account_number ?? null,
    stripe_connect_account_id: account.stripe_connect_account_id ?? null,
    approved_at: account.approved_at ?? null,
    created_at: account.created_at,
  }

  return <AffiliateSettingsClient affiliate={settings} />
}
