import { redirect } from 'next/navigation'

// Legacy URL: /privacy-policy is preserved as a permanent redirect to the
// canonical privacy page at /legal/privacy. The same redirect is also
// configured in next.config.js so HTTP clients (and crawlers) get a 308 at
// the edge before this server component renders. This file remains as a
// belt-and-braces fallback in case the next.config redirect is ever removed.
export default function PrivacyPolicyRedirect(): never {
  redirect('/legal/privacy')
}
