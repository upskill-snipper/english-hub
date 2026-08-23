import type { Metadata } from 'next'

// Signed-in surface about a specific child's consent state. robots.ts
// already disallows /consent/, and the sitemap generator excludes the
// section; this makes the noindex explicit at the page level too.
export const metadata: Metadata = {
  title: 'Parental Consent Status',
  robots: { index: false, follow: false },
}

export default function ConsentStatusLayout({ children }: { children: React.ReactNode }) {
  return children
}
