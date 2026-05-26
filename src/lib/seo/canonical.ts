/**
 * Canonical URL helpers.
 *
 * Usage (SEO item #29 - self-referential canonicals):
 *
 *   export const metadata: Metadata = {
 *     title: '...',
 *     alternates: { canonical: selfCanonical('/revision/flashcards') },
 *   }
 *
 * Every leaf route that is intended to rank independently MUST set its own
 * self-referential canonical. Do NOT rely on a parent `layout.tsx` to set a
 * canonical - Next.js inherits it down the tree, which produces
 * parent-pointing canonicals on every sub-page and suppresses their rankings.
 */

export const SITE_ORIGIN = 'https://theenglishhub.app'

export function selfCanonical(pathname: string): string {
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${SITE_ORIGIN}${clean}`
}
