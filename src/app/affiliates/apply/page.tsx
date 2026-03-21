import { redirect } from 'next/navigation'

// The apply flow is handled on the main /affiliates page
// This route exists for direct links and redirects
export default function AffiliateApplyPage({
  searchParams,
}: {
  searchParams: { status?: string }
}) {
  if (searchParams.status === 'pending') {
    redirect('/affiliates?status=pending')
  }
  redirect('/affiliates#apply')
}
