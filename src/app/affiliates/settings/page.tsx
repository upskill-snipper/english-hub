import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { Affiliate } from '@/lib/types'
import AffiliateSettingsClient from './AffiliateSettingsClient'

export const metadata = {
  title: 'Affiliate Settings — The English Hub',
}

export default async function AffiliateSettingsPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login?redirect=/affiliates/settings')

  const { data: affiliate } = await supabase
    .from('affiliates')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (!affiliate) {
    redirect('/affiliates/apply')
  }

  if (affiliate.status !== 'active') {
    redirect('/affiliates/apply?status=pending')
  }

  return <AffiliateSettingsClient affiliate={affiliate as Affiliate} />
}
