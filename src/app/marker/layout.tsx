import type { Metadata } from 'next'

// The paid-marker console is a private, role-gated staff tool - never
// indexed. Primary defense is robots.txt; this metadata is defense-in-depth
// so any crawler that ignores robots.txt still sees a clear noindex (mirrors
// the /account/* layout pattern).
export const metadata: Metadata = {
  title: 'Marker Console · The English Hub',
  robots: { index: false, follow: false },
}

export default function MarkerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
