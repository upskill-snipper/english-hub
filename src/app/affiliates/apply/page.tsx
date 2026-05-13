import { redirect } from 'next/navigation'

// The apply flow is handled on the main /affiliates page
// This route exists for direct links and redirects.
//
// i18n: no user-facing strings to translate — this is a pure
// server-side redirect. Localised copy lives on the target route
// (/affiliates) under the `affiliates.public.*` keyspace.
export default async function AffiliateApplyPage(props: {
  searchParams: Promise<{ status?: string }>
}) {
  const searchParams = await props.searchParams
  if (searchParams.status === 'pending') {
    redirect('/affiliates?status=pending')
  }
  redirect('/affiliates#apply')
}
