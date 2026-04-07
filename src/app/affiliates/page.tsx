import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AffiliatePublicPage from '@/components/affiliates/AffiliatePublicPage'

export const metadata = {
  title: 'Partner With Us — The English Hub',
  description:
    'Partner with The English Hub and help students achieve their potential. Earn competitive commission while making a real difference in education.',
}

export default async function AffiliatesPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    const { data: affiliate } = await supabase
      .from('affiliates')
      .select('id, status')
      .eq('user_id', user.id)
      .single()

    if (affiliate?.status === 'active') {
      redirect('/affiliates/dashboard')
    }

    if (
      affiliate?.status === 'pending' ||
      affiliate?.status === 'agreement_sent' ||
      affiliate?.status === 'agreement_signed'
    ) {
      return <AffiliatePublicPage applicationStatus={affiliate.status} isLoggedIn />
    }

    return <AffiliatePublicPage isLoggedIn />
  }

  return <AffiliatePublicPage />
}
