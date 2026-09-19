import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'
import {
  poemHref,
  textHref,
  quizHref,
  gamesHref,
  POETRY_HUB,
  TEXTS_HUB,
  QUIZ_HUB,
  GAMES_HUB,
  COMPREHENSION,
} from '@/lib/recommendations/hrefs'
import { GUIDE_LOCATIONS } from '@/lib/revision/guide-locations.generated'
import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * The recommendations engine sent students to four routes that do not exist.
 *
 * `getFocusRecommendations` is the feature that tells a struggling student what
 * to do next. Every personalised destination it could produce was a 404:
 *
 *   /poems/<slug>          no /poems tree exists
 *   /texts/<slug>          no /texts tree exists
 *   /revision/quiz/<slug>  /revision/quiz has no dynamic child
 *   /reading/comprehension no /reading tree exists
 *
 * Nothing caught it because nothing downstream of an href ever checks that it
 * resolves. The API returned 200, the payload was well-formed, the priorities
 * were right, and every link was dead. That is the house failure shape exactly:
 * it did not crash, it reported success.
 *
 * So this file does not test the four corrected strings. It builds the real
 * route table out of src/app and asserts that nothing the engine can emit falls
 * outside it - and then does the same for every literal internal link in the
 * whole of src, which is the only way to know the rest of the site is not doing
 * the same thing somewhere nobody has clicked yet.
 */

const ROOT = process.cwd()
const APP = join(ROOT, 'src/app')
const PUBLIC = join(ROOT, 'public')

// ── The routes this application actually serves ────────────────────────────

const staticRoutes = new Set<string>()
const dynamicRoutes: RegExp[] = []

function escapeSeg(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, (c) => '\\' + c)
}

function walkRoutes(dir: string, segs: string[]): void {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue
    const name = e.name
    if (name.startsWith('_') || name.startsWith('@')) continue
    const full = join(dir, name)
    const isGroup = name.startsWith('(') && name.endsWith(')')
    const next = isGroup ? segs : [...segs, name]
    if (readdirSync(full).some((f) => /^(page|route)\.(tsx|ts|jsx|js|mdx)$/.test(f))) {
      if (next.some((s) => s.startsWith('['))) {
        const body = next
          .map((s) =>
            s.startsWith('[[...')
              ? '.*'
              : s.startsWith('[...')
                ? '.+'
                : s.startsWith('[')
                  ? '[^/]+'
                  : escapeSeg(s),
          )
          .join('/')
        dynamicRoutes.push(new RegExp('^/' + body + '$'))
      } else {
        staticRoutes.add('/' + next.join('/'))
      }
    }
    walkRoutes(full, next)
  }
}

staticRoutes.add('/')
walkRoutes(APP, [])

/** A path is reachable if a page, a route handler or a public file serves it. */
function resolves(path: string): boolean {
  const p = path.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'
  if (staticRoutes.has(p)) return true
  if (dynamicRoutes.some((re) => re.test(p))) return true
  return existsSync(join(PUBLIC, p.replace(/^\//, '')))
}

describe('the route table is real enough to test against', () => {
  it('found the routes', () => {
    // If the walk breaks, every assertion below passes vacuously by finding
    // nothing dead. This is the counterweight.
    expect(staticRoutes.size).toBeGreaterThan(900)
    expect(dynamicRoutes.length).toBeGreaterThan(20)
  })

  it('and rejects a path that is definitely not there', () => {
    expect(resolves('/definitely-not-a-route-xyz')).toBe(false)
    expect(resolves('/poems/ozymandias')).toBe(false)
    expect(resolves('/reading/comprehension')).toBe(false)
  })
})

describe('every hub the engine falls back to exists', () => {
  it.each([
    ['POETRY_HUB', POETRY_HUB],
    ['TEXTS_HUB', TEXTS_HUB],
    ['QUIZ_HUB', QUIZ_HUB],
    ['GAMES_HUB', GAMES_HUB],
    ['COMPREHENSION', COMPREHENSION],
  ])('%s -> %s', (_name, href) => {
    expect(resolves(href), `${href} does not resolve`).toBe(true)
  })
})

describe('poemHref can only return somewhere a student can go', () => {
  const slugs = [...GUIDE_LOCATIONS.keys()]

  it('there are poems to check', () => {
    expect(slugs.length).toBeGreaterThan(40)
  })

  it.each(slugs)('%s resolves', (slug) => {
    expect(resolves(poemHref(slug)), `${slug} -> ${poemHref(slug)}`).toBe(true)
  })

  it('a slug we hold no guide for falls back to the hub rather than inventing a URL', () => {
    // The old code built `/poems/${slug}` from whatever the progress row said,
    // so an unrecognised slug produced a 404 with the student's own data in it.
    expect(poemHref('a-poem-we-do-not-have')).toBe(POETRY_HUB)
    expect(resolves(poemHref('a-poem-we-do-not-have'))).toBe(true)
  })

  it('and picks the board-specific guide when a poem sits in two anthologies', () => {
    // War Photographer has an Edexcel IGCSE guide and an AQA Power and Conflict
    // guide. Without the board the reader can land in the wrong anthology.
    const both = GUIDE_LOCATIONS.get('war-photographer')
    expect(both, 'war-photographer is not in the register').toBeDefined()
    if (both && both.length > 1) {
      const boards = both.map((g) => g.board)
      for (const b of boards) {
        expect(poemHref('war-photographer', b)).toBe(both.find((g) => g.board === b)?.href)
      }
    }
  })
})

describe('textHref can only return somewhere a student can go', () => {
  it.each(SET_TEXTS.map((t) => t.slug))('%s resolves', (slug) => {
    expect(resolves(textHref(slug)), `${slug} -> ${textHref(slug)}`).toBe(true)
  })

  it('an unknown slug goes to the set-text hub, because [slug] calls notFound()', () => {
    // /revision/texts/[slug] does not render a placeholder for an unrecognised
    // slug, it 404s. So the slug has to be checked before it goes in the URL.
    expect(textHref('not-a-set-text')).toBe(TEXTS_HUB)
    expect(resolves(textHref('not-a-set-text'))).toBe(true)
  })

  it('and the revision-notes spelling still lands on the text', () => {
    // Progress rows may carry `christmas-carol`, not `a-christmas-carol`.
    expect(textHref('christmas-carol')).toBe('/revision/texts/a-christmas-carol')
    expect(resolves(textHref('christmas-carol'))).toBe(true)
  })
})

describe('quizHref and gamesHref', () => {
  it('a per-quiz URL is never built, because there is no route for one', () => {
    expect(quizHref('macbeth-act-1')).toBe(QUIZ_HUB)
    expect(resolves(quizHref('macbeth-act-1'))).toBe(true)
  })

  it('games carries no search parameter, because nothing reads one', () => {
    // `?text=` was appended for a filter that does not exist anywhere under
    // src/app/games. Not a broken link, but a promise the code does not keep.
    expect(gamesHref()).toBe(GAMES_HUB)
    expect(gamesHref()).not.toContain('?')
  })
})

describe('the engine holds no hard-coded destination of its own', () => {
  const SRC = readFileSync(join(ROOT, 'src/lib/recommendations/focus-on.ts'), 'utf8')
  const CODE = SRC.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

  it('no /poems/, /texts/ or /reading/ path survives in the code', () => {
    expect(CODE).not.toContain('/poems/')
    expect(CODE).not.toContain('`/texts/')
    expect(CODE).not.toContain('/reading/comprehension')
    expect(CODE).not.toContain('/revision/quiz/$')
  })

  it('and destinations come from the resolver', () => {
    expect(CODE).toContain("from './hrefs'")
    expect(CODE).toMatch(/poemHref\(/)
    expect(CODE).toMatch(/textHref\(/)
  })

  it('a missing table is reported rather than swallowed', () => {
    // `?? []` made "this table does not exist" and "this student has no rows"
    // the same value. Two of the five tables do not exist.
    expect(CODE).toMatch(/rowsOf<ProgressPoemRow>/)
    expect(CODE).toContain('PGRST205')
    expect(CODE).toMatch(/console\.error/)
  })
})

// ── The same question, asked of the whole site ─────────────────────────────

describe('no internal link anywhere in src points at a route that does not exist', () => {
  const PATTERNS = [
    /href=["'](\/[^"'#?{}\s]*)["']/g,
    /href=\{["'`](\/[^"'`#?${}\s]*)["'`]\}/g,
    /href:\s*["'`](\/[^"'`#?${}\s]*)["'`]/g,
    /(?:redirect|router\.push|router\.replace)\(\s*["'`](\/[^"'`#?${}\s]*)["'`]/g,
  ]

  /**
   * Links to a text subpage are filtered at render against the generated
   * register (see TextStudyHub and text-nav), so a declaration for a page that
   * does not exist never reaches a reader. Their own test polices that; this
   * one would otherwise report 87 links that nobody can click.
   */
  const PRUNED_AT_RENDER = /^\/revision\/texts\/[^/]+\/[^/]+$/

  const links = new Map<string, Set<string>>()

  function walkSrc(dir: string): void {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, e.name)
      if (e.isDirectory()) {
        walkSrc(full)
        continue
      }
      if (!/\.(tsx|ts)$/.test(e.name) || /\.test\.tsx?$/.test(e.name)) continue
      const s = readFileSync(full, 'utf8')
      for (const re of PATTERNS) {
        for (const m of s.matchAll(re)) {
          const p = m[1].replace(/\/$/, '') || '/'
          if (PRUNED_AT_RENDER.test(p)) continue
          if (!links.has(p)) links.set(p, new Set())
          links.get(p)!.add(relative(ROOT, full).replace(/\\/g, '/'))
        }
      }
    }
  }
  walkSrc(join(ROOT, 'src'))

  it('found a realistic number of links', () => {
    expect(links.size).toBeGreaterThan(500)
  })

  it('and every one of them resolves', () => {
    const dead = [...links.entries()]
      .filter(([p]) => !resolves(p))
      .map(([p, srcs]) => `${p}  <- ${[...srcs].join(', ')}`)
      .sort()
    expect(dead).toEqual([])
  })
})
