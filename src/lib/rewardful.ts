/**
 * Rewardful Server-Side API Client
 *
 * Thin wrapper around the Rewardful REST API (https://developers.rewardful.com).
 * Used for creating affiliates, fetching referral details, and managing the
 * affiliate programme server-side.
 */

const REWARDFUL_API_BASE = 'https://api.getrewardful.com/v1'

function getApiSecret(): string {
  const secret = process.env.REWARDFUL_API_SECRET
  if (!secret) {
    throw new Error('REWARDFUL_API_SECRET environment variable is not set')
  }
  return secret
}

function authHeaders(): HeadersInit {
  return {
    Authorization: `Bearer ${getApiSecret()}`,
    'Content-Type': 'application/json',
  }
}

// ── Referrals ──────────────────────────────────────────────

export interface RewardfulReferral {
  id: string
  affiliate: {
    id: string
    email: string
    first_name: string | null
    last_name: string | null
  } | null
  visitor: { id: string } | null
  conversion: { id: string } | null
  created_at: string
}

export async function fetchRewardfulReferral(
  referralId: string,
): Promise<RewardfulReferral | null> {
  try {
    const res = await fetch(`${REWARDFUL_API_BASE}/referrals/${referralId}`, {
      headers: authHeaders(),
    })
    if (!res.ok) {
      console.error(`Rewardful API error (referral ${referralId}): ${res.status}`)
      return null
    }
    return (await res.json()) as RewardfulReferral
  } catch (error) {
    console.error('Failed to fetch Rewardful referral:', error)
    return null
  }
}

// ── Affiliates ─────────────────────────────────────────────

export interface CreateRewardfulAffiliateParams {
  email: string
  first_name: string
  last_name?: string
  stripe_customer_id?: string
}

export interface RewardfulAffiliate {
  id: string
  email: string
  first_name: string
  last_name: string | null
  links: { id: string; url: string; token: string }[]
  created_at: string
}

export async function createRewardfulAffiliate(
  params: CreateRewardfulAffiliateParams,
): Promise<RewardfulAffiliate | null> {
  try {
    const res = await fetch(`${REWARDFUL_API_BASE}/affiliates`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({
        email: params.email,
        first_name: params.first_name,
        last_name: params.last_name ?? '',
        stripe_customer_id: params.stripe_customer_id,
      }),
    })
    if (!res.ok) {
      const body = await res.text()
      console.error(`Rewardful API error creating affiliate: ${res.status} - ${body}`)
      return null
    }
    return (await res.json()) as RewardfulAffiliate
  } catch (error) {
    console.error('Failed to create Rewardful affiliate:', error)
    return null
  }
}

export async function fetchRewardfulAffiliate(
  affiliateId: string,
): Promise<RewardfulAffiliate | null> {
  try {
    const res = await fetch(`${REWARDFUL_API_BASE}/affiliates/${affiliateId}`, {
      headers: authHeaders(),
    })
    if (!res.ok) return null
    return (await res.json()) as RewardfulAffiliate
  } catch {
    return null
  }
}
