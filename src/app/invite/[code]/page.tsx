import type { Metadata } from 'next'
import { InviteLanding } from './invite-landing'

// Public landing for a parent invite link. The student "Invite a parent" flow
// e-mails `${baseUrl}/invite/<code>`, but this route never existed, so every
// invitation 404'd - the parent's first touch with the product was a dead
// page. This page validates the code and funnels the parent into the correct
// flow (register as a parent, or - if already signed in - straight to linking).

export const metadata: Metadata = {
  title: 'Link to your child on The English Hub',
  description:
    'You have been invited to link a parent account to your child on The English Hub, so you can follow their English revision progress.',
  robots: { index: false, follow: false },
}

export default async function InvitePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[70vh] w-full max-w-lg flex-col justify-center px-4 py-16"
    >
      <InviteLanding code={code} />
    </main>
  )
}
