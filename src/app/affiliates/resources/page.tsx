import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AffiliateResources from '@/components/affiliates/AffiliateResources'

export const metadata = {
  title: 'Affiliate Resources — The English Hub',
  description:
    'Ready-made content, brand guidelines, and tips for The English Hub affiliates.',
}

export default async function AffiliateResourcesPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login?redirect=/affiliates/resources')

  const { data: affiliate } = await supabase
    .from('affiliates')
    .select('id, status, full_name, rewardful_link_token, rewardful_affiliate_id, tier')
    .eq('user_id', user.id)
    .single()

  if (!affiliate || affiliate.status !== 'active') {
    redirect('/affiliates')
  }

  const viaToken =
    affiliate.rewardful_link_token ?? affiliate.rewardful_affiliate_id ?? 'YOUR_CODE'
  const affiliateUrl = `https://theenglishhub.app?via=${viaToken}`

  return (
    <AffiliateResources
      affiliateUrl={affiliateUrl}
      viaToken={viaToken}
      affiliateName={affiliate.full_name}
    />
  )
}
