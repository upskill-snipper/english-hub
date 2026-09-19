import { describe, it, expect, afterAll } from 'vitest'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import {
  analyseAppDir,
  formatReport,
  classifyDynamic,
  isRouteGroup,
  isIntercepting,
  isSlot,
  isPrivate,
  literalUnderscoreSegment,
} from '../../scripts/check-route-conflicts.mjs'

/**
 * The route-conflict gate (scripts/check-route-conflicts.mjs).
 *
 * WHY THESE CASES AND NOT OTHERS. On 14 May 2026 a sibling dynamic-segment
 * collision - `/ks3/[year]/[unit]` next to `/ks3/[year]/[term]` - took 257 of
 * 871 production routes offline. `business-docs/CONTENT_BUILD_SAFETY_MODEL.md`
 * specifies the gate that would have stopped it. This is that gate's test.
 *
 * Every case below is one where a plausible implementation gets the ANSWER
 * BACKWARDS, in one direction or the other:
 *
 *   FALSE NEGATIVE (the gate passes a tree Next.js refuses to build)
 *     - treating `(group)` as a real URL segment, so two pages that both
 *       resolve to /about look like different routes
 *     - comparing dynamic siblings by directory rather than by URL, so a
 *       collision hidden behind two route groups is missed
 *     - ignoring route.ts, so a handler and a page can share a segment
 *
 *   FALSE POSITIVE (the gate blocks a tree Next.js builds happily, which is
 *   worse, because a gate that cries wolf gets deleted)
 *     - lumping `[slug]`, `[...slug]` and `[[...slug]]` into one bucket, so a
 *       legal dynamic-plus-catch-all pair is reported
 *     - collapsing `@slot` the way `(group)` collapses, so every parallel
 *       route is a duplicate
 *     - reading `(..)photo` as a route group, because it also opens with a
 *       bracket
 *     - routing through `_private` folders, which this repository has 22 of,
 *       including `__tests__`
 *
 * Fixtures are throwaway directories in the OS temp dir. Nothing here reads
 * the real src/app - a test bound to the live tree stops testing the analyser
 * and starts testing today's routes.
 */

const PAGE = 'export default function Page() {\n  return null\n}\n'
const ROUTE = 'export function GET() {\n  return new Response("ok")\n}\n'

const made: string[] = []
afterAll(() => {
  for (const dir of made) rmSync(dir, { recursive: true, force: true })
})

/** Build a throwaway app directory from a map of relative path -> contents. */
function fixture(files: Record<string, string>): string {
  const root = mkdtempSync(join(tmpdir(), 'eh-routes-'))
  made.push(root)
  for (const [rel, contents] of Object.entries(files)) {
    const full = join(root, rel)
    mkdirSync(dirname(full), { recursive: true })
    writeFileSync(full, contents)
  }
  return root
}

/** Conflict rules reported for a fixture, sorted for stable comparison. */
function rulesFor(files: Record<string, string>): string[] {
  return analyseAppDir(fixture(files))
    .conflicts.map((c) => c.rule)
    .sort()
}

// ─── Segment classification ───────────────────────────────────────────────
//
// The four folder syntaxes that are not ordinary segments. Getting any of
// these wrong changes the answer for a whole subtree, not one route.

describe('segment classification', () => {
  it('reads a route group, which contributes no URL segment', () => {
    expect(isRouteGroup('(marketing)')).toBe(true)
    expect(isRouteGroup('marketing')).toBe(false)
  })

  it('does not mistake an intercepting route for a route group', () => {
    // Both open with "(", which is the whole trap.
    for (const seg of ['(.)photo', '(..)photo', '(...)photo', '(..)(..)photo']) {
      expect(isIntercepting(seg)).toBe(true)
      expect(isRouteGroup(seg)).toBe(false)
    }
  })

  it('separates the three dynamic kinds, which Next.js bucket separately', () => {
    expect(classifyDynamic('[slug]')).toEqual({ kind: 'dynamic', name: 'slug' })
    expect(classifyDynamic('[...slug]')).toEqual({ kind: 'catch-all', name: 'slug' })
    expect(classifyDynamic('[[...slug]]')).toEqual({ kind: 'optional-catch-all', name: 'slug' })
    expect(classifyDynamic('slug')).toBeNull()
  })

  it('knows @slot and _private from ordinary folders', () => {
    expect(isSlot('@modal')).toBe(true)
    expect(isPrivate('_components')).toBe(true)
    expect(isPrivate('__tests__')).toBe(true)
    expect(isPrivate('components')).toBe(false)
  })

  it('treats %5F as an escaped underscore, not a private folder', () => {
    expect(literalUnderscoreSegment('%5Fnext')).toBe('_next')
    expect(literalUnderscoreSegment('_next')).toBeNull()
  })
})

// ─── Route groups ─────────────────────────────────────────────────────────

describe('route groups collapse', () => {
  it('reports two pages in different groups that both resolve to /about', () => {
    const root = fixture({
      '(marketing)/about/page.tsx': PAGE,
      '(app)/about/page.tsx': PAGE,
    })
    const { conflicts } = analyseAppDir(root)

    expect(conflicts).toHaveLength(1)
    expect(conflicts[0].rule).toBe('duplicate-page')
    expect(conflicts[0].url).toBe('/about')
    // Both offending files, named, as the brief requires.
    const files = conflicts[0].entries.map((e) => e.file)
    expect(files.some((f) => f.includes('(marketing)/about/page.tsx'))).toBe(true)
    expect(files.some((f) => f.includes('(app)/about/page.tsx'))).toBe(true)
  })

  it('collapses nested groups too', () => {
    expect(rulesFor({ '(a)/(b)/about/page.tsx': PAGE, 'about/page.tsx': PAGE })).toEqual([
      'duplicate-page',
    ])
  })

  it('leaves genuinely different routes alone inside groups', () => {
    expect(rulesFor({ '(a)/about/page.tsx': PAGE, '(b)/pricing/page.tsx': PAGE })).toEqual([])
  })
})

// ─── Private folders ──────────────────────────────────────────────────────

describe('private folders are not routes', () => {
  // ASSERTING ON CONFLICTS ALONE IS NOT ENOUGH HERE, and a mutation check
  // proved it: making isPrivate() always false left every "expect no
  // conflict" assertion green, because a walked `_components` simply serves
  // the harmless URL /_components/about instead. The claim being tested is
  // "not a route at all", so the count of routes is what has to be asserted.

  it('ignores a page.tsx inside _components entirely', () => {
    const { conflicts, stats } = analyseAppDir(
      fixture({ 'about/page.tsx': PAGE, '_components/about/page.tsx': PAGE }),
    )
    expect(conflicts).toEqual([])
    expect(stats.pages).toBe(1)
    expect(stats.privateSkipped).toBe(1)
  })

  it('ignores __tests__, which the real tree contains under src/app/api', () => {
    const { conflicts, stats } = analyseAppDir(
      fixture({ 'api/x/route.ts': ROUTE, 'api/x/__tests__/route.ts': ROUTE }),
    )
    expect(conflicts).toEqual([])
    expect(stats.routeHandlers).toBe(1)
    expect(stats.privateSkipped).toBe(1)
  })

  it('but an escaped %5F folder is a real segment', () => {
    const { stats } = analyseAppDir(fixture({ '%5Fnext/page.tsx': PAGE }))
    expect(stats.pages).toBe(1)
    expect(stats.privateSkipped).toBe(0)
  })
})

// ─── Dynamic siblings: the Wave 1 bug ─────────────────────────────────────

describe('dynamic siblings', () => {
  it('reports [term] and [unit] under one parent, the Wave 1 failure', () => {
    const root = fixture({
      'ks3/[year]/[term]/page.tsx': PAGE,
      'ks3/[year]/[unit]/page.tsx': PAGE,
    })
    const { conflicts } = analyseAppDir(root)

    expect(conflicts).toHaveLength(1)
    expect(conflicts[0].rule).toBe('dynamic-siblings')
    expect(conflicts[0].url).toContain('/ks3/[year]/')
    const files = conflicts[0].entries.map((e) => e.file)
    expect(files.some((f) => f.includes('[term]'))).toBe(true)
    expect(files.some((f) => f.includes('[unit]'))).toBe(true)
  })

  it('finds the collision even when the two are hidden behind route groups', () => {
    // On disk these are not siblings at all. In URL space they are, which is
    // the only space that matters. An analyser walking directories misses it.
    expect(rulesFor({ '(a)/blog/[slug]/page.tsx': PAGE, '(b)/blog/[id]/page.tsx': PAGE })).toEqual([
      'dynamic-siblings',
    ])
  })

  it('accepts the same slug name twice at the same level', () => {
    // Same name is not a slug conflict. It is a duplicate page, and should be
    // reported as that and only that.
    expect(
      rulesFor({ '(a)/blog/[slug]/page.tsx': PAGE, '(b)/blog/[slug]/page.tsx': PAGE }),
    ).toEqual(['duplicate-page'])
  })

  it('accepts the same slug name at DIFFERENT levels', () => {
    expect(rulesFor({ 'blog/[slug]/page.tsx': PAGE, 'news/[slug]/page.tsx': PAGE })).toEqual([])
  })

  it('reports the same slug name repeating within one path', () => {
    expect(rulesFor({ 'blog/[id]/comment/[id]/page.tsx': PAGE })).toEqual(['repeated-slug'])
  })
})

// ─── Catch-alls ───────────────────────────────────────────────────────────

describe('catch-all segments', () => {
  it('lets a catch-all and a static sibling coexist', () => {
    expect(rulesFor({ 'docs/[...slug]/page.tsx': PAGE, 'docs/about/page.tsx': PAGE })).toEqual([])
  })

  it('lets a plain dynamic segment and a catch-all coexist', () => {
    // The false positive that kills the gate: three bracket syntaxes, three
    // separate buckets in Next.js. Lumping them together reports this.
    expect(rulesFor({ 'docs/[slug]/page.tsx': PAGE, 'docs/[...rest]/page.tsx': PAGE })).toEqual([])
  })

  it('refuses a required and an optional catch-all at the same level', () => {
    const { conflicts } = analyseAppDir(
      fixture({ 'docs/[...slug]/page.tsx': PAGE, 'docs/[[...other]]/page.tsx': PAGE }),
    )
    expect(conflicts.map((c) => c.rule)).toContain('catch-all-mix')
  })

  it('refuses two catch-alls with different names at the same level', () => {
    expect(rulesFor({ 'docs/[...slug]/page.tsx': PAGE, 'docs/[...other]/page.tsx': PAGE })).toEqual(
      ['dynamic-siblings'],
    )
  })
})

// ─── Parallel routes and interception ─────────────────────────────────────

describe('parallel routes and intercepting routes', () => {
  it('does not treat a @slot page as a duplicate of the page beside it', () => {
    // @modal contributes no URL segment, exactly like a route group, but the
    // two pages are meant to render together. Collapsing slots like groups
    // makes every parallel route a false positive.
    const { conflicts, stats } = analyseAppDir(
      fixture({ 'page.tsx': PAGE, '@modal/page.tsx': PAGE }),
    )
    expect(conflicts).toEqual([])
    // Again, not just "no conflict": the slot has to have been RECOGNISED.
    // Walking @modal as an ordinary folder also yields no conflict, and would
    // pass a weaker assertion while getting the semantics wrong.
    expect(stats.slots).toBe(1)
    expect(stats.pages).toBe(2)
  })

  it('still reports two pages competing for the SAME slot', () => {
    expect(rulesFor({ '(a)/@modal/page.tsx': PAGE, '(b)/@modal/page.tsx': PAGE })).toEqual([
      'duplicate-page',
    ])
  })

  it('does not read an intercepting route as an ordinary segment', () => {
    // `feed/(..)photo/page.tsx` intercepts /photo. It does not claim
    // /feed/photo, and it is not a route group despite the bracket.
    const root = fixture({
      'photo/page.tsx': PAGE,
      'feed/page.tsx': PAGE,
      'feed/(..)photo/page.tsx': PAGE,
    })
    const { conflicts, stats } = analyseAppDir(root)
    expect(conflicts).toEqual([])
    // Counted, not silently swallowed: an excluded subtree must be visible.
    expect(stats.interceptingSkipped).toBe(1)
    // And excluded, not walked: /photo and /feed only.
    expect(stats.pages).toBe(2)
  })
})

// ─── page.tsx against route.ts ────────────────────────────────────────────

describe('pages against route handlers', () => {
  it('reports a page and a handler in one segment', () => {
    const { conflicts } = analyseAppDir(
      fixture({ 'api/thing/page.tsx': PAGE, 'api/thing/route.ts': ROUTE }),
    )
    expect(conflicts.map((c) => c.rule)).toEqual(['page-and-route'])
    expect(conflicts[0].url).toBe('/api/thing')
    expect(conflicts[0].entries).toHaveLength(2)
  })

  it('reports a page and a handler that meet only after groups collapse', () => {
    expect(rulesFor({ '(a)/thing/page.tsx': PAGE, '(b)/thing/route.ts': ROUTE })).toEqual([
      'page-and-route',
    ])
  })

  it('reports page.tsx and page.js in one directory', () => {
    expect(rulesFor({ 'thing/page.tsx': PAGE, 'thing/page.js': PAGE })).toEqual(['duplicate-page'])
  })

  it('leaves a handler and a page on different URLs alone', () => {
    expect(rulesFor({ 'thing/page.tsx': PAGE, 'api/thing/route.ts': ROUTE })).toEqual([])
  })
})

// ─── Reporting ────────────────────────────────────────────────────────────

describe('the report an operator reads', () => {
  it('names both files and the URL they both claim', () => {
    const root = fixture({ '(a)/about/page.tsx': PAGE, '(b)/about/page.tsx': PAGE })
    const result = analyseAppDir(root)
    const text = formatReport(result, root, 12)

    expect(text).toContain('/about')
    expect(text).toContain('(a)/about/page.tsx')
    expect(text).toContain('(b)/about/page.tsx')
    expect(text).toContain('Fix:')
    // Actionable, not a stack trace.
    expect(text).not.toContain('at Object.')
  })

  it('is a single line when the tree is clean', () => {
    const result = analyseAppDir(fixture({ 'page.tsx': PAGE, 'about/page.tsx': PAGE }))
    const text = formatReport(result, 'src/app', 25)
    expect(text.split('\n')).toHaveLength(1)
    expect(text).toContain('route conflicts: none')
    expect(text).toContain('2 pages')
  })

  it('counts an empty tree as zero rather than throwing', () => {
    const { conflicts, stats } = analyseAppDir(fixture({ 'layout.tsx': PAGE }))
    expect(conflicts).toEqual([])
    expect(stats.pages).toBe(0)
  })

  it('refuses a directory that does not exist rather than reporting clean', () => {
    // Fail closed. "No such directory" must never read as "no conflicts".
    expect(() => analyseAppDir(join(tmpdir(), 'eh-routes-does-not-exist-9e3f'))).toThrow(
      /no such directory/i,
    )
  })
})
