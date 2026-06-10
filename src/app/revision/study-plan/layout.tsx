import type { Metadata } from 'next'

// /revision/study-plan is a user-specific tool surface (not public study content) —
// kept out of search indexes and the sitemap so crawl budget goes to
// indexable pages. See scripts/generate-sitemap-routes.mjs policy.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
