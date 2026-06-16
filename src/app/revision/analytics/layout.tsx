import type { Metadata } from 'next'
import { requireSubscription } from '@/lib/auth/require-subscription'

// /revision/analytics is a user-specific tool surface (not public study content) —
// kept out of search indexes and the sitemap so crawl budget goes to
// indexable pages. See scripts/generate-sitemap-routes.mjs policy.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
}

// 2026-06-08 Option C paywall. Wave 1 gated this route to require LOGIN
// (middleware protectedRoutes). This adds the subscription/trial layer:
// a signed-in user whose trial has lapsed (no 'pro') is sent to /pricing
// rather than shown their personal progress analytics. Trial users pass.
export default async function Layout({ children }: { children: React.ReactNode }) {
  await requireSubscription('/revision/analytics')
  return children
}
