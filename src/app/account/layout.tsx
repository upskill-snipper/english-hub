import type { Metadata } from 'next'

// Belt-and-braces noindex for the entire /account/* tree. The primary
// defense is the Disallow rule in robots.txt; this metadata is a
// defense-in-depth backup so any crawler that ignores robots.txt still
// sees a clear noindex directive.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
