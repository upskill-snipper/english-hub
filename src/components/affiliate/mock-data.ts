// Supabase: replace entire file with database queries when backend is ready

import type { AffiliateTier } from './TierBadge'

export const STORAGE_KEYS = {
  account: 'english-hub-affiliate-account',
  clicks: 'english-hub-affiliate-clicks',
  conversions: 'english-hub-affiliate-conversions',
} as const

export interface AffiliateAccount {
  id: string
  name: string
  email: string
  website?: string
  audienceSize?: string
  niche?: string
  tier: AffiliateTier
  createdAt: string
  paymentMethod?: {
    type: 'paypal' | 'bank'
    details: string
  }
}

export interface AffiliateClick {
  id: string
  linkId: string
  source: string
  timestamp: string
}

export interface AffiliateConversion {
  id: string
  linkId: string
  planName: string
  amount: number
  commission: number
  status: 'pending' | 'approved' | 'paid'
  date: string
}

function safeRead<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function safeWrite(key: string, value: unknown) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // swallow
  }
}

export function getAccount(): AffiliateAccount | null {
  return safeRead<AffiliateAccount | null>(STORAGE_KEYS.account, null)
}

export function setAccount(account: AffiliateAccount) {
  safeWrite(STORAGE_KEYS.account, account)
}

export function clearAccount() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(STORAGE_KEYS.account)
}

export function getClicks(): AffiliateClick[] {
  return safeRead<AffiliateClick[]>(STORAGE_KEYS.clicks, [])
}

export function getConversions(): AffiliateConversion[] {
  return safeRead<AffiliateConversion[]>(STORAGE_KEYS.conversions, [])
}

export function seedMockData() {
  if (typeof window === 'undefined') return
  // Seed sample clicks/conversions if empty — purely for demo
  if (!window.localStorage.getItem(STORAGE_KEYS.clicks)) {
    const sampleClicks: AffiliateClick[] = Array.from({ length: 142 }, (_, i) => ({
      id: `click-${i}`,
      linkId: i % 3 === 0 ? 'homepage' : i % 3 === 1 ? 'pricing' : 'igcse',
      source: ['twitter', 'instagram', 'blog', 'youtube'][i % 4],
      timestamp: new Date(Date.now() - i * 3_600_000).toISOString(),
    }))
    safeWrite(STORAGE_KEYS.clicks, sampleClicks)
  }

  if (!window.localStorage.getItem(STORAGE_KEYS.conversions)) {
    const sampleConversions: AffiliateConversion[] = Array.from(
      { length: 12 },
      (_, i) => ({
        id: `conv-${i}`,
        linkId: i % 3 === 0 ? 'homepage' : i % 3 === 1 ? 'pricing' : 'igcse',
        planName: i % 2 === 0 ? 'Premium Monthly' : 'Premium Yearly',
        amount: i % 2 === 0 ? 12.99 : 129.0,
        commission: i % 2 === 0 ? 1.95 : 19.35,
        status: i < 3 ? 'pending' : i < 8 ? 'approved' : 'paid',
        date: new Date(Date.now() - i * 86_400_000 * 2).toISOString(),
      })
    )
    safeWrite(STORAGE_KEYS.conversions, sampleConversions)
  }
}

export function createDefaultAccount(
  overrides: Partial<AffiliateAccount> = {}
): AffiliateAccount {
  return {
    id: `aff_${Math.random().toString(36).slice(2, 10)}`,
    name: overrides.name ?? 'Demo Affiliate',
    email: overrides.email ?? 'demo@example.com',
    website: overrides.website,
    audienceSize: overrides.audienceSize,
    niche: overrides.niche,
    tier: overrides.tier ?? 'bronze',
    createdAt: new Date().toISOString(),
    paymentMethod: overrides.paymentMethod,
  }
}
