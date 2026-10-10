/**
 * Whether a path names a page that does not exist, decided in the middleware
 * before anything renders, so that a missing page gets a real 404.
 *
 * WHY (10 October 2026). On every dynamic route the live site served the "Page
 * not found" screen for a parameter it does not have under HTTP 200: unknown
 * set texts, games, chapters, blog posts, revision notes, KS3 weeks. Search
 * engines were told noindex, but every such URL was a soft 404, and pages with
 * no noindex of their own could be indexed. The cause, confirmed by experiment
 * on the dev server: src/app/loading.tsx, and 473 more loading files beneath
 * it, wrap each page in a Suspense boundary, so Next sends the page's shell,
 * status 200 included, before the page runs. When the page then calls
 * notFound(), the status has already gone. With the root loading file removed,
 * /set-texts/not-a-board answered 404 at once. Removing loading screens would
 * cost every page its loading state, so the decision is made here instead,
 * where nothing has been sent: the middleware rewrites a missing page to a path
 * no route serves (NOT_FOUND_REWRITE), and Next answers that with its
 * not-found page and a 404.
 *
 * WHAT IT COVERS. The routes in known-pages.sources.ts, each with the full list
 * of its real pages, taken from the route's own generateStaticParams or the
 * data its page looks parameters up in, and generated before every build by
 * scripts/generate-known-pages.mjs. A path none of them claims is left to Next,
 * which already answers a path with no route at all with a 404.
 *
 * THE ONE WAY THIS COULD DO HARM is by calling a real page missing. So a route
 * claims a path only when the depth fits and every static segment matches; a
 * path that names a static folder beside a dynamic segment is left to Next,
 * which routes it there; and src/__tests__/a-missing-page-answers-404.test.ts
 * fails if the committed list is stale, or if any URL in the sitemap or any
 * internal link written in the source would be called missing.
 *
 * Small on purpose: the middleware imports it, and it reads nothing but the
 * generated list.
 */

import type { KnownRoutePattern } from './known-pages.sources'
import KNOWN_PAGES from './known-pages.generated.json'

/**
 * A path no route serves. Next answers a request rewritten to it with
 * src/app/not-found.tsx and status 404. The test checks nothing is ever built
 * at this path.
 */
export const NOT_FOUND_REWRITE = '/page-not-found-404'

interface Compiled {
  /** The route's segments, e.g. ['revision', 'texts', '[slug]']. */
  parts: string[]
  catchAll: boolean
  escapes: ReadonlySet<string>[]
  known: ReadonlySet<string>
}

const ROUTES: Compiled[] = (KNOWN_PAGES as KnownRoutePattern[]).map((r) => {
  const parts = r.route.split('/').filter(Boolean)
  return {
    parts,
    catchAll: parts[parts.length - 1].startsWith('[...'),
    escapes: r.escapes.map((names) => new Set(names)),
    known: new Set(r.known),
  }
})

function decode(segment: string): string {
  try {
    return decodeURIComponent(segment)
  } catch {
    return segment
  }
}

type Verdict = 'real' | 'missing' | 'not-mine'

function judge(r: Compiled, segs: string[]): Verdict {
  const n = r.parts.length
  if (r.catchAll ? segs.length < n : segs.length !== n) return 'not-mine'
  const values: string[] = []
  let dynamic = 0
  for (let i = 0; i < n; i++) {
    const part = r.parts[i]
    if (!part.startsWith('[')) {
      if (segs[i] !== part) return 'not-mine'
      continue
    }
    // A static folder beside this segment wins in Next's routing: not ours.
    if (r.escapes[dynamic]?.has(segs[i])) return 'not-mine'
    dynamic++
    if (part.startsWith('[...')) {
      values.push(segs.slice(i).join('/'))
      break
    }
    values.push(segs[i])
  }
  return r.known.has(values.join('/')) ? 'real' : 'missing'
}

/**
 * Does `pathname`, the route actually served (so without the /ar prefix), name
 * a page that does not exist? True only when a covered route claims the path
 * and none of the routes that claim it has the page.
 */
export function isMissingPage(pathname: string): boolean {
  const segs = pathname.split('/').filter(Boolean).map(decode)
  let claimed = false
  for (const r of ROUTES) {
    const verdict = judge(r, segs)
    if (verdict === 'real') return false
    if (verdict === 'missing') claimed = true
  }
  return claimed
}
