/**
 * The public dynamic routes whose real pages can be listed in advance, where
 * each list comes from, and the computation that turns them into the list the
 * middleware checks (src/lib/seo/known-pages.generated.json, through
 * known-pages.ts).
 *
 * Read by scripts/generate-known-pages.mjs, which writes that list before
 * every build, and by src/__tests__/a-missing-page-answers-404.test.ts, which
 * fails when the committed list is stale. NOT imported by the app or the
 * middleware: it loads route modules and data and reads the filesystem.
 *
 * THE RULE FOR EVERY ENTRY. Its list must hold every parameter the route serves
 * a real page for. A list that is too long only leaves a soft 404 where one
 * already was; a list that is too short turns a real page into a 404. So each
 * list is the route's own generateStaticParams or, where the route has none,
 * the same data the page itself looks the parameter up in, and `basis` says
 * which. Where a page also accepts a non-canonical spelling of a parameter
 * that nothing links to, the list holds the canonical one only, and `basis`
 * says so.
 *
 * NOT COVERED, on purpose: routes whose pages sit behind a sign-in or depend
 * on stored data (/dashboard, /school, /certificate, /verify, /invite, /parent,
 * /marking/results, /learn), the /demo pages, and two routes whose lists live
 * inside client components (/mock-exams/[id], /ielts/learn/[skill]/[slug]).
 * They keep the behaviour they had. (/eal/[slug] is a client page too, but the
 * topics it searches are shared data, so it is covered.)
 */

import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

import { ANALYSIS_PAGES } from '@/data/analysis'
import { getBlogSlugs } from '@/lib/blog/posts'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { CEFR_LEVEL_SLUGS } from '@/lib/eal/cefr'
import { EAL } from '@/lib/eal/curriculum'
import { modelEssayRoutes } from '@/lib/revision/model-essays'
import { TEXT_SLUG_ALIASES } from '@/lib/revision/text-slug-aliases'

type Params = Record<string, string | string[]>

/** What the generator and the test need from a route's page module. */
export type RouteModule = { generateStaticParams?: () => Params[] | Promise<Params[]> }

export interface KnownRoute {
  /** The route as src/app spells it, e.g. '/revision/texts/[slug]'. */
  route: string
  /** Where its list comes from, and why that list is exactly its real pages. */
  basis: string
  /** For a route without generateStaticParams: the parameters its page serves. */
  params?: () => Params[] | Promise<Params[]>
}

const FROM_GSP = "the route's own generateStaticParams"

export const KNOWN_ROUTES: readonly KnownRoute[] = [
  {
    route: '/revision/texts/[slug]',
    basis: `${FROM_GSP}: every set text; the page renders getSetText(slug) and 404s anything else`,
  },
  {
    route: '/revision/texts/great-expectations/read/[chapter]',
    basis: `${FROM_GSP}: one per chapter served (src/lib/revision/served-by-chapter.ts)`,
  },
  {
    route: '/revision/texts/jane-eyre/read/[chapter]',
    basis: `${FROM_GSP}: one per chapter served (src/lib/revision/served-by-chapter.ts)`,
  },
  {
    route: '/revision/texts/pride-and-prejudice/read/[chapter]',
    basis: `${FROM_GSP}: one per chapter served (src/lib/revision/served-by-chapter.ts)`,
  },
  {
    route: '/games/texts/[slug]',
    basis: `${FROM_GSP}: textGameSlugs(), which loadTextGame() also asks`,
  },
  {
    route: '/set-texts/[board]',
    basis: `${FROM_GSP}: the boards with a shelf; the middleware has already redirected a board without one`,
  },
  {
    route: '/ks3/[year]',
    basis: `${FROM_GSP}: the KS3 curriculum's years`,
  },
  {
    route: '/ks3/[year]/[term]',
    basis: `${FROM_GSP}: the KS3 curriculum's terms`,
  },
  {
    route: '/ks3/[year]/[term]/[week]',
    basis: `${FROM_GSP}: the KS3 curriculum's weeks. The page's parser also accepts a zero-padded week ("week-02") for the same page; nothing links to it, so only the canonical "week-2" is listed`,
  },
  {
    route: '/resources/teaching/lesson-plans/[slug]',
    basis: `${FROM_GSP}: getAllLessonPlans(), the list getLessonPlan() searches`,
  },
  {
    route: '/resources/teaching/printables/[slug]',
    basis: `${FROM_GSP}: getPrintableSlugs(), the list getPrintable() reads`,
  },
  {
    route: '/revision/poetry/pearson-igcse/[slug]',
    basis: `${FROM_GSP}: PEARSON_POEM_SLUGS, which the page checks first`,
  },
  {
    route: '/courses/[id]',
    basis: `${FROM_GSP}: allCourses, which the page searches`,
  },
  {
    route: '/blog/[slug]',
    basis:
      'getBlogSlugs(), the catalogue the page checks first (drafts excluded). /ar/blog/<slug> serves the same route, falling back to English, so the list is the same',
    params: () => getBlogSlugs().map((slug) => ({ slug })),
  },
  {
    route: '/resources/revision-notes/[slug]',
    basis:
      'every set text, and the six older spellings in TEXT_SLUG_ALIASES. The page renders a "notes in production" placeholder for ANY slug (2 May 2026, so that a link to notes not yet written never 404s); a slug that names no set text at all is now a 404 rather than a placeholder for a text that does not exist',
    params: () => [
      ...SET_TEXTS.map((t) => ({ slug: t.slug })),
      ...Object.keys(TEXT_SLUG_ALIASES).map((slug) => ({ slug })),
    ],
  },
  {
    route: '/revision/model-essays/[text]/[slug]',
    basis:
      'modelEssayRoutes(), the catalogue the sitemap reads. The route has no generateStaticParams on purpose (8 June 2026: it froze paywalled pages for subscribers)',
    params: async () =>
      (await modelEssayRoutes()).map((href) => {
        const [text, slug] = href.split('/').slice(-2)
        return { text, slug }
      }),
  },
  {
    route: '/analysis/[...slug]',
    basis: 'ANALYSIS_PAGES, the list the page looks each path up in (ANALYSIS_PAGE_MAP)',
    params: () => ANALYSIS_PAGES.map((p) => ({ slug: p.slug })),
  },
  {
    route: '/eal/[slug]',
    basis: 'EAL.topics, which findEALTopic() searches',
    params: () => EAL.topics.map((t) => ({ slug: t.id })),
  },
  {
    route: '/eal/[slug]/level/[cefr]',
    basis:
      'every EAL topic at each level in CEFR_LEVEL_SLUGS, the list the page checks. The page lower-cases the level, so it also serves "B1"; every link and the canonical use "b1", so only that is listed',
    params: () => EAL.topics.flatMap((t) => CEFR_LEVEL_SLUGS.map((cefr) => ({ slug: t.id, cefr }))),
  },
]

/** One route, compiled for the middleware. See known-pages.ts for how it is read. */
export interface KnownRoutePattern {
  route: string
  /**
   * For each dynamic segment in order, the folders beside it that Next routes
   * to instead (a static segment wins over a dynamic one). A path naming one of
   * them is left to Next.
   */
  escapes: string[][]
  /** Every real page's parameters, joined by "/" in segment order. */
  known: string[]
}

/** The dynamic segments of a route, in order: ['slug'], or ['year', 'term']. */
export function dynamicSegments(route: string): string[] {
  return route
    .split('/')
    .filter((p) => p.startsWith('['))
    .map((p) => p.replace(/^\[(\.\.\.)?/, '').replace(/\]$/, ''))
}

/** One parameter set as the middleware compares it: segment values joined by "/". */
export function paramKey(route: string, params: Params): string {
  return dynamicSegments(route)
    .map((name) => {
      const v = params[name]
      if (v === undefined) throw new Error(`${route}: a parameter set has no "${name}"`)
      return Array.isArray(v) ? v.join('/') : v
    })
    .join('/')
}

/**
 * The URL segments the folders in `dir` give, as Next routes them: a private
 * folder (_x), a dynamic one ([x]) and a slot (@x) give none, and a route group
 * ((x)) is transparent, so the folders inside it count at this level.
 */
function staticSegmentsIn(dir: string): string[] {
  if (!existsSync(dir)) return []
  const out: string[] = []
  for (const d of readdirSync(dir, { withFileTypes: true })) {
    if (!d.isDirectory()) continue
    if (/^\(.*\)$/.test(d.name)) out.push(...staticSegmentsIn(join(dir, d.name)))
    else if (!/^[_[@]/.test(d.name)) out.push(d.name)
  }
  return out
}

/**
 * The folders beside each dynamic segment of `route`, under `appDir`. Folders
 * of dynamic segments are entered as Next names them on disk ("[year]").
 */
export function escapesOf(appDir: string, route: string): string[][] {
  const parts = route.split('/').filter(Boolean)
  const escapes: string[][] = []
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i].startsWith('[')) continue
    escapes.push([...new Set(staticSegmentsIn(join(appDir, ...parts.slice(0, i))))].sort())
  }
  return escapes
}

/**
 * Every covered route, compiled. `loadRoute` imports a route's page module by
 * its route ("/revision/texts/[slug]"): the generator passes Vite's SSR loader,
 * the test passes vitest's import. Throws, so the build fails, when a route has
 * no page, no list, or an empty list.
 */
export async function computeKnownPages(
  loadRoute: (route: string) => Promise<RouteModule>,
  appDir: string,
): Promise<KnownRoutePattern[]> {
  const out: KnownRoutePattern[] = []
  for (const r of KNOWN_ROUTES) {
    const dir = join(appDir, ...r.route.split('/').filter(Boolean))
    if (!existsSync(join(dir, 'page.tsx'))) throw new Error(`${r.route}: no page.tsx at ${dir}`)
    let list: Params[]
    if (r.params) {
      list = await r.params()
    } else {
      const mod = await loadRoute(r.route)
      if (typeof mod.generateStaticParams !== 'function') {
        throw new Error(`${r.route}: no generateStaticParams, and no params source given`)
      }
      list = await mod.generateStaticParams()
    }
    const known = [...new Set(list.map((p) => paramKey(r.route, p)))].sort()
    if (known.length === 0) throw new Error(`${r.route}: its list of real pages is empty`)
    out.push({ route: r.route, escapes: escapesOf(appDir, r.route), known })
  }
  return out
}
