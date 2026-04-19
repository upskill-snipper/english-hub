import { redirect } from 'next/navigation'

// The apply flow is handled on the main /affiliates page
// This route exists for direct links and redirects
export default async function AffiliateApplyPage(props: {
  searchParams: Promise<{ status?: string }>
}) {
  const searchParams = await props.searchParams
  if (searchParams.status === 'pending') {
    redirect('/affiliates?status=pending')
  }
  redirect('/affiliates#apply')
}
