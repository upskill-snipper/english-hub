// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { BOARDS } from '@/lib/board/board-config'
import { buildShelf, groupShelf } from '@/lib/revision/shelf'
import {
  SHELFLESS_BOARD_HUBS,
  boardHasShelf,
  boardLandingHref,
  boardShelfHref,
  shelflessBoardHub,
  specHubHref,
} from '@/lib/board/board-landing'

/**
 * Choosing a board that sets no texts landed on a page about having no texts.
 *
 * REPORTED BY THE FOUNDER, 26 September 2026. Choosing Cambridge First Language
 * English (0500) took the student to /set-texts/cambridge-0500: "Your set
 * texts", then "This specification has no prescribed set texts". His words: "If
 * there is no texts for this, why is it there? Remove it if not serving any
 * purpose."
 *
 * IT WAS NOT BROKEN, WHICH IS WHY IT SURVIVED. The page was accurate - 0500 and
 * 0990 set no texts by design, and KS3 sets none either - and it had its own
 * honest empty state. But every board picker sent the student there
 * unconditionally, so the first thing a Cambridge student saw after choosing
 * their board was a page with nothing on it. The page's own comment said four
 * boards were empty; measured, it is three.
 *
 * THE RULE NOW. A board with an empty shelf never shows it: the pickers, the
 * wizard and every "your set texts" link send it to the specification's hub,
 * and a direct visit to the old URL is permanently redirected there. Which
 * boards, and which hub, is decided once, in board-landing.ts. This file checks
 * that decision against the shelves themselves in both directions, and drives
 * the real middleware to see what a browser receives.
 *
 * MUTATIONS RUN, each restored afterwards. Reverting boardLandingHref to the
 * unconditional `/set-texts/<board>?setBoard=<board>` fails six: "does not
 * point ... at /set-texts" and "lands ... on its hub" for all three boards.
 * Disabling the middleware redirect fails six more, every 308 assertion below.
 * The cookie assertion survives that one, correctly: the shelf page's own tail
 * remembers the board too, and the point is that the redirect does not lose it.
 */

const ROOT = process.cwd()

/** The boards whose shelf is empty, measured the way the shelf page measures it. */
const EMPTY = BOARDS.filter((b) => groupShelf(buildShelf(b.id)).length === 0).map((b) => b.id)

describe('which boards have no shelf', () => {
  it('there are some, so none of this is theoretical', () => {
    expect(EMPTY.length).toBeGreaterThan(0)
    expect(EMPTY).toContain('cambridge-0500')
  })

  it('and most boards do have one, so the normal path still matters', () => {
    expect(EMPTY.length).toBeLessThan(BOARDS.length / 2)
  })

  it('the shared list is exactly the measured one, in both directions', () => {
    // A board missing from the list would show an empty shelf again; a board
    // on the list that has texts would hide its shelf behind a hub. Both are
    // failures, so this is an equality, not a subset.
    expect(Object.keys(SHELFLESS_BOARD_HUBS).sort()).toEqual([...EMPTY].sort())
    for (const board of BOARDS) {
      expect(boardHasShelf(board.id), board.id).toBe(!EMPTY.includes(board.id))
    }
  })

  it('every hub it names is a real page', () => {
    for (const hub of Object.values(SHELFLESS_BOARD_HUBS)) {
      expect(existsSync(join(ROOT, 'src/app', hub, 'page.tsx')), `${hub} has no page.tsx`).toBe(
        true,
      )
    }
  })
})

describe('choosing a board with no shelf', () => {
  it.each(EMPTY)('does not point %s at /set-texts', (board) => {
    // The test that fails on the old helper.
    expect(boardLandingHref(board).startsWith('/set-texts/')).toBe(false)
    expect(boardShelfHref(board).startsWith('/set-texts/')).toBe(false)
  })

  it.each(EMPTY)('lands %s on its hub, still carrying the board', (board) => {
    // ?setBoard= is what makes the middleware write the cookie. Dropping it
    // would land the student on the right page with no board remembered.
    const hub = shelflessBoardHub(board)
    expect(boardLandingHref(board)).toBe(`${hub}?setBoard=${board}`)
    expect(boardShelfHref(board)).toBe(hub)
    expect(specHubHref(board)).toBe(hub)
  })
})

describe('choosing a board that has a shelf is unchanged', () => {
  const withShelf = BOARDS.map((b) => b.id).filter((id) => !EMPTY.includes(id))

  it.each(withShelf)('%s still lands on its own shelf', (board) => {
    expect(boardLandingHref(board)).toBe(`/set-texts/${board}?setBoard=${board}`)
    expect(boardShelfHref(board)).toBe(`/set-texts/${board}`)
  })

  it('and the spec hub links the shelf page offered before are still offered', () => {
    expect(specHubHref('edexcel-igcse')).toBe('/igcse/edexcel')
    expect(specHubHref('edexcel-igcse-lang')).toBe('/igcse/edexcel-lang')
    expect(specHubHref('ial-edexcel')).toBe('/revision/ial')
    expect(specHubHref('aqa')).toBeNull()
  })

  it('an inherited property name is not mistaken for a board', () => {
    // The middleware passes an unvalidated URL segment straight in.
    for (const junk of ['constructor', 'toString', '__proto__', 'hasOwnProperty']) {
      expect(shelflessBoardHub(junk), junk).toBeNull()
      expect(specHubHref(junk), junk).toBeNull()
    }
  })
})

describe('no link anywhere still sends a shelfless board to its shelf', () => {
  // The pickers used to write the destination out as a literal, which is how
  // every one of them pointed at /set-texts/cambridge-0500. They now call
  // boardLandingHref; this catches a literal coming back, in any file.
  function sourceFiles(dir: string): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
      const path = join(dir, d.name)
      if (d.isDirectory()) {
        if (d.name === '__tests__' || d.name === 'i18n') return []
        return sourceFiles(path)
      }
      return /\.(tsx?|mjs|json)$/.test(d.name) ? [path] : []
    })
  }
  const files = sourceFiles(join(ROOT, 'src'))

  it('scans enough of the tree to mean something', () => {
    expect(files.length).toBeGreaterThan(500)
  })

  // Comments are stripped: the docblocks that record this defect quote the old
  // URL in order to say it is gone. `(^|\s)//` spares the `//` inside https://.
  const code = (f: string) =>
    readFileSync(f, 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/(^|\s)\/\/.*$/gm, '$1')

  it.each(EMPTY)('nothing links to /set-texts/%s', (board) => {
    const offenders = files.filter((f) =>
      new RegExp(`/set-texts/${board}(?![a-z0-9-])`).test(code(f)),
    )
    expect(offenders).toEqual([])
  })
})

describe('the shelf page no longer has an empty state', () => {
  const page = readFileSync(join(ROOT, 'src/app/set-texts/[board]/page.tsx'), 'utf8')
  const code = page.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

  it('asks the shared decision rather than keeping its own list', () => {
    expect(code).toContain("from '@/lib/board/board-landing'")
    expect(code).not.toContain('LANGUAGE_ONLY')
    expect(code).not.toContain('const SPEC_HUBS')
  })

  it('and renders no "no set texts" branch', () => {
    expect(code).not.toContain('shelf.none.')
  })
})

// ── What a browser actually receives ──────────────────────────────────────

vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: {
      getClaims: async () => ({ data: null, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
    },
  }),
}))

const { middleware } = await import('@/middleware')
const { NextRequest } = await import('next/server')

function req(path: string, cookie?: string) {
  const headers = cookie ? { cookie } : undefined
  return new NextRequest(new URL(`https://theenglishhub.app${path}`), { headers })
}

beforeEach(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL ??= 'https://example.supabase.co'
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??= 'anon-key-for-tests'
})

describe('an old link to a shelfless shelf', () => {
  it.each(EMPTY)('/set-texts/%s is a permanent redirect to the hub', async (board) => {
    const res = await middleware(req(`/set-texts/${board}`))
    expect(res.status).toBe(308)
    expect(new URL(res.headers.get('location') ?? '').pathname).toBe(shelflessBoardHub(board))
  })

  it('keeps the query, so an old picker link still has its board written', async () => {
    const res = await middleware(req('/set-texts/cambridge-0500?setBoard=cambridge-0500'))
    const location = new URL(res.headers.get('location') ?? '')
    expect(location.pathname).toBe('/igcse/cambridge/0500')
    expect(location.searchParams.get('setBoard')).toBe('cambridge-0500')
  })

  it('keeps an Arabic reader on the Arabic surface', async () => {
    const res = await middleware(req('/ar/set-texts/cambridge-0990'))
    expect(res.status).toBe(308)
    expect(new URL(res.headers.get('location') ?? '').pathname).toBe('/ar/igcse/cambridge/0990')
  })

  it('remembers the board for a visitor who has none, as the shelf URL always did', async () => {
    const res = await middleware(req('/set-texts/ks3'))
    expect(res.cookies.get('english-hub-board')?.value).toBe('ks3')
  })

  it('but never overwrites a board the visitor already has', async () => {
    const res = await middleware(req('/set-texts/cambridge-0500', 'english-hub-board=aqa'))
    expect(res.status).toBe(308)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })
})

describe('a shelf with texts is not redirected', () => {
  it.each(['aqa', 'edexcel-igcse', 'cambridge-0475'])('/set-texts/%s renders', async (board) => {
    // The counterweight: a redirect that caught every board would pass every
    // assertion above and remove the shelf the founder asked for.
    const res = await middleware(req(`/set-texts/${board}`))
    expect(res.status).toBe(200)
    expect(res.headers.get('location')).toBeNull()
  })
})
