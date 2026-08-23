import { redirect } from 'next/navigation'

/**
 * The self-registration success page for a flow that no longer exists.
 * Kept only so old bookmarks and inbound links do not 404. Sent to the same
 * place as its parent (/for-schools/register) so both ends of the dead flow
 * land on the real school enquiry form rather than the generic contact page.
 */
export default function SchoolRegistrationSuccessPage() {
  redirect('/school-pilot')
}
