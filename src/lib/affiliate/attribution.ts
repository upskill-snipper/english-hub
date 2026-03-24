import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { fetchRewardfulReferral } from '@/lib/rewardful'
import { determinePlanType, isCommissionEligible } from './utils'

type SupabaseServiceClient = ReturnType<typeof import('@/lib/supabase/server').createServiceRoleClient>

interface AttributeAffiliateReferralParams {
  rewardfulReferralId: string
  stripeSession: Stripe.Checkout.Session
  supabase: SupabaseServiceClient
}

/**
 * Attribute a successful checkout to an affiliate and create a referral record
 * with the calculated commission amount.
 *
 * Called from the Stripe webhook handler on `checkout.session.completed`.
 */
export async function attributeAffiliateReferral({
  rewardfulReferralId,
  stripeSession,
  supabase,
}: AttributeAffiliateReferralParams): Promise<void> {
  // 1. Guard against duplicate attribution
  const { data: existingReferral } = await supabase
    .from('affiliate_referrals')
    .select('id')
    .eq('rewardful_referral_id', rewardfulReferralId)
    .single()

  if (existingReferral) {
    return
  }

  // 2. Look up the referral in Rewardful to get the affiliate
  const rewardfulData = await fetchRewardfulReferral(rewardfulReferralId)

  if (!rewardfulData?.affiliate?.id) {
    console.error(`Could not find Rewardful affiliate for referral ${rewardfulReferralId}`)
    return
  }

  // 3. Find our affiliate record matching the Rewardful affiliate ID
  const { data: affiliate } = await supabase
    .from('affiliates')
    .select('id, status, tier')
    .eq('rewardful_affiliate_id', rewardfulData.affiliate.id)
    .single()

  if (!affiliate) {
    console.error(`No affiliate record for Rewardful ID ${rewardfulData.affiliate.id}`)
    return
  }

  if (affiliate.status !== 'active') {
    console.error(`Affiliate ${affiliate.id} is not active (status: ${affiliate.status})`)
    return
  }

  // 4. Determine plan type from Stripe line items
  let priceId: string | undefined
  try {
    const lineItems = await stripe.checkout.sessions.listLineItems(stripeSession.id)
    priceId = lineItems.data[0]?.price?.id
  } catch (err) {
    console.error('Failed to fetch line items for session:', err)
    return
  }

  if (!priceId) {
    console.error(`No price ID found in checkout session ${stripeSession.id}`)
    return
  }

  const planType = determinePlanType(priceId)

  // Only subscription plans earn affiliate commission
  if (!isCommissionEligible(planType)) {
    return
  }

  const planAmount = (stripeSession.amount_total ?? 0) / 100

  // 5. Calculate commission via Supabase RPC
  const { data: commissionAmount, error: rpcError } = await supabase
    .rpc('get_commission_amount', {
      p_affiliate_id: affiliate.id,
      p_plan_type: planType,
    })

  if (rpcError) {
    console.error('Failed to calculate commission:', rpcError)
    return
  }

  // 6. Find the referred user (by Stripe customer ID on profile)
  const customerId = stripeSession.customer as string | null
  let referredUserId: string | null = null

  if (customerId) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId)
      .single()
    referredUserId = profile?.id ?? null
  }

  // 7. Insert the referral record
  const { error: insertError } = await supabase
    .from('affiliate_referrals')
    .insert({
      affiliate_id: affiliate.id,
      referred_user_id: referredUserId,
      rewardful_referral_id: rewardfulReferralId,
      signed_up_at: new Date().toISOString(),
      converted_to_paid_at: new Date().toISOString(),
      stripe_checkout_session_id: stripeSession.id,
      stripe_subscription_id: (stripeSession.subscription as string) ?? null,
      stripe_customer_id: customerId,
      plan_type: planType,
      plan_amount_gbp: planAmount,
      commission_amount_gbp: commissionAmount ?? 0,
      commission_status: 'pending',
    })

  if (insertError) {
    console.error('Failed to insert affiliate referral:', insertError)
  }
}
