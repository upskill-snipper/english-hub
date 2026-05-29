import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

// Audit remediation H1 H7: safeguarding content is consolidated onto the
// single authoritative page at /safeguarding. The 308 permanent redirect
// is also configured in next.config.js so HTTP clients (and crawlers) get
// the redirect at the edge before this server component renders. This file
// remains as a belt-and-braces fallback in case the next.config redirect
// is ever removed, mirroring the pattern in src/app/privacy-policy/page.tsx.
//
// Metadata is preserved (with noindex) so the route stays buildable and
// no stale title/description leaks to crawlers if the edge redirect ever
// fails to fire.
export const metadata: Metadata = {
  title: 'Safeguarding Policy',
  description: 'The Safeguarding Policy has moved to /safeguarding.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://theenglishhub.app/safeguarding' },
}

export default function LegalSafeguardingRedirect(): never {
  redirect('/safeguarding')
}
