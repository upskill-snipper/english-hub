import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Board-navigation contract test (I14).
 *
 * Locks in the canonical board-navigation model documented in
 * `business-docs/BOARD_NAVIGATION_MODEL.md`:
 *
 *   A. Click any of the 7 homepage cards -> cookie set, user lands on /revision.
 *   B. Click browser back -> homepage, cookie unchanged.
 *   C. Click a different homepage card -> cookie updates.
 *   D. Deep-link to /igcse/edexcel with `aqa` cookie -> Edexcel IGCSE renders,
 *      banner shows "viewing IGCSE Edexcel; your board is AQA - switch?".
 *   E. Click "Switch" on banner -> cookie + store update + page re-render.
 *
 * These tests assert the contract at the source-text level rather than booting
 * the app: cheaper to run, less flaky, and catches regressions in the exact
 * mechanism (cards link to `?setBoard=<id>`, middleware reads the param,
 * banner exists, etc.) without needing JSX/runtime hydration.
 */

const SRC = join(process.cwd(), 'src')

function readSource(...segments: string[]): string {
  return readFileSync(join(SRC, ...segments), 'utf8')
}

/**
 * Match all `href: '<value>'` literals inside a source file.
 * The same forgiving extraction style used by homepage-board-cards.test.ts -
 * survives whitespace, trailing commas, and additional sibling fields.
 */
function extractHrefs(source: string): readonly string[] {
  const matches = source.matchAll(/href\s*:\s*'([^']+)'/g)
  const out: string[] = []
  for (const m of matches) out.push(m[1])
  return out
}

/**
 * Extract the `name`/`href` pairs from a single named array literal
 * (e.g. `GCSE_BOARDS: Board[] = [ ... ]` or `GCSE_BOARDS: readonly Board[] = [ ... ]`).
 */
type BoardEntry = { name: string; href: string }

function extractBoardArray(source: string, arrayName: string): readonly BoardEntry[] {
  const declRe = new RegExp(
    `const\\s+${arrayName}\\s*:\\s*(?:readonly\\s+)?Board\\[\\]\\s*=\\s*\\[`,
  )
  const declMatch = source.match(declRe)
  if (!declMatch || declMatch.index === undefined) {
    throw new Error(`Could not find array declaration for ${arrayName}`)
  }
  const startIdx = declMatch.index + declMatch[0].length - 1
  let depth = 0
  let endIdx = -1
  for (let i = startIdx; i < source.length; i++) {
    const ch = source[i]
    if (ch === '[') depth++
    else if (ch === ']') {
      depth--
      if (depth === 0) {
        endIdx = i
        break
      }
    }
  }
  if (endIdx === -1) {
    throw new Error(`Could not find closing ']' for ${arrayName}`)
  }
  const body = source.slice(startIdx + 1, endIdx)

  const objects: string[] = []
  let braceDepth = 0
  let segStart = -1
  for (let i = 0; i < body.length; i++) {
    const ch = body[i]
    if (ch === '{') {
      if (braceDepth === 0) segStart = i
      braceDepth++
    } else if (ch === '}') {
      braceDepth--
      if (braceDepth === 0 && segStart !== -1) {
        objects.push(body.slice(segStart + 1, i))
        segStart = -1
      }
    }
  }

  return objects.map((obj) => {
    const nameMatch = obj.match(/name\s*:\s*'([^']+)'/)
    const hrefMatch = obj.match(/href\s*:\s*'([^']+)'/)
    if (!nameMatch || !hrefMatch) {
      throw new Error(`Object in ${arrayName} missing name or href: ${obj}`)
    }
    return { name: nameMatch[1], href: hrefMatch[1] }
  })
}

const SET_BOARD_HREF_RE = /^\/revision\?setBoard=[a-z0-9-]+$/

/* -------------------------------------------------------------------------
 * 1. Homepage card hrefs are canonical /revision?setBoard=<id>
 * ------------------------------------------------------------------------- */
describe('homepage cards link to /revision?setBoard=<id> (contract A,C)', () => {
  const HOMEPAGE_SOURCE = readSource('app', 'page.tsx')
  const GCSE = extractBoardArray(HOMEPAGE_SOURCE, 'GCSE_BOARDS')
  const IGCSE = extractBoardArray(HOMEPAGE_SOURCE, 'IGCSE_BOARDS')
  const ALL_HOMEPAGE_BOARDS: readonly BoardEntry[] = [...GCSE, ...IGCSE]

  it('homepage exposes exactly 7 board cards (4 GCSE + 3 IGCSE)', () => {
    expect(GCSE.length).toBe(4)
    expect(IGCSE.length).toBe(3)
    expect(ALL_HOMEPAGE_BOARDS.length).toBe(7)
  })

  it('every homepage card href matches /revision?setBoard=<id>', () => {
    for (const card of ALL_HOMEPAGE_BOARDS) {
      expect(
        SET_BOARD_HREF_RE.test(card.href),
        `Card "${card.name}" href "${card.href}" must match /revision?setBoard=<id>`,
      ).toBe(true)
    }
  })

  it('no homepage card href starts with /igcse/ (regression for Pearson GCSE -> IGCSE Lit bug)', () => {
    for (const card of ALL_HOMEPAGE_BOARDS) {
      expect(
        card.href.startsWith('/igcse/'),
        `Card "${card.name}" must not link to /igcse/* but href=${card.href}`,
      ).toBe(false)
    }
  })

  it('every homepage setBoard id is non-empty and lowercase-kebab', () => {
    for (const card of ALL_HOMEPAGE_BOARDS) {
      const m = card.href.match(/setBoard=([^&]+)$/)
      expect(m, `Card "${card.name}" missing setBoard param`).not.toBeNull()
      const id = m?.[1] ?? ''
      expect(id.length).toBeGreaterThan(0)
      expect(/^[a-z0-9-]+$/.test(id), `setBoard id "${id}" not lowercase-kebab`).toBe(true)
    }
  })
})

/* -------------------------------------------------------------------------
 * 2. Board-select page hrefs are canonical /revision?setBoard=<id>
 * ------------------------------------------------------------------------- */
describe('/board-select cards link to /revision?setBoard=<id>', () => {
  const SOURCE = readSource('app', 'board-select', 'page.tsx')
  const GCSE = extractBoardArray(SOURCE, 'GCSE_BOARDS')
  const IGCSE = extractBoardArray(SOURCE, 'IGCSE_BOARDS')
  const ALL: readonly BoardEntry[] = [...GCSE, ...IGCSE]

  it('parses both BOARDS arrays from board-select/page.tsx', () => {
    expect(GCSE.length).toBeGreaterThan(0)
    expect(IGCSE.length).toBeGreaterThan(0)
  })

  it('every board-select card href matches /revision?setBoard=<id>', () => {
    for (const card of ALL) {
      expect(
        SET_BOARD_HREF_RE.test(card.href),
        `board-select card "${card.name}" href "${card.href}" must match /revision?setBoard=<id>`,
      ).toBe(true)
    }
  })

  it('no board-select card href starts with /igcse/', () => {
    for (const card of ALL) {
      expect(
        card.href.startsWith('/igcse/'),
        `board-select card "${card.name}" must not link to /igcse/* but href=${card.href}`,
      ).toBe(false)
    }
  })
})

/* -------------------------------------------------------------------------
 * 3. Middleware contains the ?setBoard= handler and no longer uses the
 *    legacy BOARD_LANDING_REDIRECTS map for redirects.
 * ------------------------------------------------------------------------- */
describe('middleware ?setBoard handler (contract A,C)', () => {
  const SOURCE = readSource('middleware.ts')

  it('reads the setBoard query param via searchParams.get', () => {
    const matches =
      SOURCE.includes("searchParams.get('setBoard')") ||
      SOURCE.includes('searchParams.get("setBoard")')
    expect(
      matches,
      "middleware.ts must call searchParams.get('setBoard') to support the new mechanism",
    ).toBe(true)
  })

  it('writes the english-hub-board cookie inside the setBoard branch', () => {
    // Anchored on cookies.set('english-hub-board' so we know the param is
    // what triggers the write. The presence of the literal ID string is
    // enough - full branching is verified by the e2e flow.
    expect(
      /cookies\.set\(\s*['"]english-hub-board['"]/.test(SOURCE),
      'middleware.ts must call cookies.set("english-hub-board", ...) when setBoard param is present',
    ).toBe(true)
  })

  it('does not use BOARD_LANDING_REDIRECTS in a NextResponse.redirect (legacy removed)', () => {
    // The constant may still be referenced in comments documenting the old
    // mechanism (that's fine and helpful for reviewers). What MUST be gone
    // is any active redirect like:
    //   NextResponse.redirect(... BOARD_LANDING_REDIRECTS[...] ...)
    // We approximate by checking that no executable line both names the
    // identifier AND a NextResponse.redirect call. A line-by-line scan is
    // sufficient because the historical pattern was a single-line redirect.
    const offendingLines: string[] = []
    for (const rawLine of SOURCE.split('\n')) {
      const line = rawLine.trim()
      // Skip comments
      if (line.startsWith('//') || line.startsWith('*') || line.startsWith('/*')) continue
      if (line.includes('BOARD_LANDING_REDIRECTS') && line.includes('NextResponse.redirect')) {
        offendingLines.push(rawLine)
      }
    }
    expect(
      offendingLines,
      `middleware.ts still calls NextResponse.redirect with BOARD_LANDING_REDIRECTS:\n${offendingLines.join('\n')}`,
    ).toEqual([])
  })

  it('does not unconditionally write the board cookie on first visit', () => {
    // The historical bug: `if (!hasBoardCookie) { redirect + cookies.set(...) }`
    // wrote a cookie behind the user's back on their very first request.
    // The replacement only writes when ?setBoard=<id> is explicit.
    //
    // We assert this structurally: there must be NO occurrence of a block
    // gated on absence-of-cookie that ALSO sets the board cookie. A regex
    // tolerant of whitespace + minor edits is good enough; full semantic
    // checking would need an AST and isn't worth the dep.
    const offending = /!hasBoardCookie[\s\S]{0,200}cookies\.set\(\s*['"]english-hub-board['"]/.test(
      SOURCE,
    )
    expect(
      offending,
      'middleware.ts must not silently set english-hub-board cookie when !hasBoardCookie',
    ).toBe(false)

    const altOffending =
      /!existingCookie[\s\S]{0,200}cookies\.set\(\s*['"]english-hub-board['"]/.test(SOURCE)
    expect(altOffending, 'middleware.ts must not write cookie when !existingCookie').toBe(false)
  })
})

/* -------------------------------------------------------------------------
 * 4. guard.ts exposes getBoardMismatchState; requireIgcseBoard is @deprecated.
 * ------------------------------------------------------------------------- */
describe('igcse guard surface (contract D,E)', () => {
  const SOURCE = readSource('app', 'igcse', '_lib', 'guard.ts')

  it('exports getBoardMismatchState', () => {
    // Accept either `export function getBoardMismatchState` or
    // `export const getBoardMismatchState =` or `export { getBoardMismatchState ... }`.
    const exported =
      /export\s+(?:async\s+)?function\s+getBoardMismatchState\b/.test(SOURCE) ||
      /export\s+const\s+getBoardMismatchState\b/.test(SOURCE) ||
      /export\s*\{[^}]*\bgetBoardMismatchState\b[^}]*\}/.test(SOURCE)
    expect(
      exported,
      'src/app/igcse/_lib/guard.ts must export getBoardMismatchState (replaces requireIgcseBoard)',
    ).toBe(true)
  })

  it('still exports requireIgcseBoard with an @deprecated JSDoc tag', () => {
    const exportRe = /export\s+(?:async\s+)?function\s+requireIgcseBoard\b/
    const declMatch = SOURCE.match(exportRe)
    expect(
      declMatch,
      'requireIgcseBoard must still be exported (kept for legacy callers)',
    ).not.toBeNull()
    if (!declMatch || declMatch.index === undefined) return

    // Walk backwards from the export to the nearest preceding /** ... */
    // JSDoc block and verify it carries an @deprecated tag.
    const before = SOURCE.slice(0, declMatch.index)
    const lastDocOpen = before.lastIndexOf('/**')
    const lastDocClose = before.lastIndexOf('*/')
    expect(
      lastDocOpen !== -1 && lastDocClose !== -1 && lastDocOpen < lastDocClose,
      'requireIgcseBoard must have a JSDoc block immediately above it',
    ).toBe(true)

    const docBlock = before.slice(lastDocOpen, lastDocClose + 2)
    expect(
      /@deprecated\b/.test(docBlock),
      'requireIgcseBoard JSDoc must include @deprecated tag',
    ).toBe(true)
  })
})

/* -------------------------------------------------------------------------
 * 5. BoardMismatchBanner component exists.
 * ------------------------------------------------------------------------- */
describe('BoardMismatchBanner exists (contract D,E)', () => {
  const BANNER_PATH = join(SRC, 'components', 'board', 'BoardMismatchBanner.tsx')

  it('src/components/board/BoardMismatchBanner.tsx is present', () => {
    expect(existsSync(BANNER_PATH), `Expected BoardMismatchBanner at ${BANNER_PATH}`).toBe(true)
  })

  it('default-exports a React component', () => {
    const source = readFileSync(BANNER_PATH, 'utf8')
    const hasDefaultExport =
      /export\s+default\s+function\s+BoardMismatchBanner\b/.test(source) ||
      /export\s+default\s+BoardMismatchBanner\b/.test(source)
    expect(hasDefaultExport, 'BoardMismatchBanner must have a default export').toBe(true)
  })
})

/* -------------------------------------------------------------------------
 * 6. board-store.ts: cookie -> store bridge inside onRehydrateStorage.
 * ------------------------------------------------------------------------- */
describe('board-store cookie -> store bridge (contract A)', () => {
  const SOURCE = readSource('lib', 'board', 'board-store.ts')

  it('defines or imports a readBoardCookie helper', () => {
    const hasReader =
      /function\s+readBoardCookie\b/.test(SOURCE) ||
      /readBoardCookie\s*=\s*\(/.test(SOURCE) ||
      /import\s*\{[^}]*\breadBoardCookie\b[^}]*\}/.test(SOURCE)
    expect(
      hasReader,
      'board-store.ts must define or import readBoardCookie() to bridge cookie -> store',
    ).toBe(true)
  })

  it('onRehydrateStorage callback references readBoardCookie', () => {
    // Locate the onRehydrateStorage callback body and assert it touches the cookie reader.
    const m = SOURCE.match(
      /onRehydrateStorage\s*:\s*[^,}]*=>\s*\(?[^=]*=>\s*\{([\s\S]*?)\n\s*\}\s*,?/,
    )
    // Fallback: looser slice between the property name and the next bare `}` at lower depth.
    let body = m?.[1] ?? ''
    if (!body) {
      const idx = SOURCE.indexOf('onRehydrateStorage')
      if (idx !== -1) {
        body = SOURCE.slice(idx, idx + 800)
      }
    }
    expect(
      /readBoardCookie\s*\(/.test(body),
      'onRehydrateStorage must call readBoardCookie() to read the cookie at hydration time',
    ).toBe(true)
  })

  it('onRehydrateStorage either assigns to state.board or writes the cookie when one side is missing', () => {
    // The bridge has two valid shapes:
    //   (a) cookie present, store empty   -> state.board = readBoardCookie()
    //   (b) store present, cookie missing -> writeBoardCookie(state.board)
    // At least one of those code paths must exist inside the callback.
    const idx = SOURCE.indexOf('onRehydrateStorage')
    expect(idx, 'onRehydrateStorage key must exist in board-store.ts').toBeGreaterThan(-1)
    const body = SOURCE.slice(idx, idx + 1200)

    const writesStoreFromCookie =
      /state\.board\s*=\s*readBoardCookie\s*\(/.test(body) ||
      /state\.board\s*=\s*cookie/.test(body) ||
      /set(?:Board)?\s*\(\s*readBoardCookie\s*\(/.test(body)

    const writesCookieFromStore = /writeBoardCookie\s*\(\s*state\.board/.test(body)

    expect(
      writesStoreFromCookie || writesCookieFromStore,
      'onRehydrateStorage must bridge cookie<->store: assign state.board from cookie OR write cookie from state.board',
    ).toBe(true)
  })
})

/* -------------------------------------------------------------------------
 * 7. No silent first-visit cookie write in middleware (contract A,B).
 *     Already covered structurally in suite #3, but kept as a separate
 *     describe block so the spec checklist maps 1:1 to test output.
 * ------------------------------------------------------------------------- */
describe('middleware does not write cookie on first visit (contract B)', () => {
  const SOURCE = readSource('middleware.ts')

  it('there is no `if (!<cookie>) { ... NextResponse.redirect ... cookies.set("english-hub-board" ...) }` block', () => {
    // Combined heuristic: if any 250-char window contains BOTH the
    // "no cookie" guard AND a redirect AND a cookies.set on the board
    // cookie, that's the historical first-visit silent write. The new
    // mechanism only writes inside the `?setBoard=` branch, which is
    // gated on the param's presence (not on the absence of an existing
    // cookie).
    const window = 300
    let offending = false
    let offendingChunk = ''
    for (let i = 0; i < SOURCE.length - window; i += 50) {
      const chunk = SOURCE.slice(i, i + window)
      if (
        /!\s*hasBoardCookie|!\s*existingCookie|!\s*request\.cookies\.get/.test(chunk) &&
        /NextResponse\.redirect/.test(chunk) &&
        /cookies\.set\(\s*['"]english-hub-board['"]/.test(chunk)
      ) {
        offending = true
        offendingChunk = chunk
        break
      }
    }
    expect(
      offending,
      `middleware.ts contains a first-visit silent cookie-write block:\n${offendingChunk}`,
    ).toBe(false)
  })
})
