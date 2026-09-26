import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { boardToRememberFromPath } from '@/lib/board/remember-shelf-board'
import { BOARDS } from '@/lib/board/board-config'

/**
 * Arriving at a board's shelf, and being asked which board you study.
 *
 * THE DEFECT. Choosing a board sends a student to /set-texts/<id>?setBoard=<id>,
 * and the middleware writes the cookie from that parameter. Arriving at
 * /set-texts/aqa DIRECTLY - from Google, a shared link, a bookmark - carried no
 * parameter, so nothing was written. Confirmed on production: the cookie was
 * absent on the shelf, so the student saw the right texts, clicked one, and met
 * a full-screen "which exam board do you study?" modal while looking at it.
 *
 * WHAT THIS FILE IS REALLY GUARDING, which is not the fix but its blast radius.
 * The middleware's own docblock records that a previous version of this idea,
 * BOARD_LANDING_REDIRECTS, was removed for causing two bugs: it redirected deep
 * links away from the page the visitor clicked, and it wrote cookies from
 * surfaces that were not choices. So the three limits below matter more than the
 * feature:
 *
 *   - it never redirects (asserted against the middleware source; the one
 *     redirect near it, for boards with no set texts, is pinned separately)
 *   - it never overwrites a board the visitor already has
 *   - it validates against the canonical BOARDS list
 *
 * The middle one is the one that would hurt. A student with AQA stored who opens
 * a friend's Edexcel link would have their whole account silently refiltered -
 * sidebar, texts, mark schemes - by following a link.
 */

describe('a fresh visitor on a shelf URL', () => {
  it.each(BOARDS.map((b) => b.id))('remembers %s', (id) => {
    expect(boardToRememberFromPath(`/set-texts/${id}`, null)).toBe(id)
  })

  it('checks every board, so this is not one lucky case', () => {
    expect(BOARDS.length).toBe(15)
  })

  it('tolerates a trailing slash', () => {
    expect(boardToRememberFromPath('/set-texts/aqa/', null)).toBe('aqa')
  })

  it('treats an empty cookie as no cookie', () => {
    expect(boardToRememberFromPath('/set-texts/aqa', '')).toBe('aqa')
  })
})

describe('a visitor who already has a board', () => {
  it('keeps it, even on another board’s shelf', () => {
    // The one that would really hurt. Following a shared link must not
    // resilently reassign the board the whole account is filtered by.
    expect(boardToRememberFromPath('/set-texts/edexcel-igcse', 'aqa')).toBeNull()
  })

  it('writes nothing when the cookie already matches', () => {
    expect(boardToRememberFromPath('/set-texts/aqa', 'aqa')).toBeNull()
  })
})

describe('anything that is not a shelf URL', () => {
  it.each([
    ['/set-texts', 'the bare prefix'],
    ['/set-texts/', 'prefix with a slash'],
    ['/set-texts/aqa/extra', 'a deeper path'],
    ['/revision/texts/macbeth', 'a text page'],
    ['/', 'the homepage'],
    ['/igcse/edexcel', 'a board hub'],
  ])('writes nothing for %s (%s)', (path) => {
    expect(boardToRememberFromPath(path, null)).toBeNull()
  })

  it.each([
    ['/set-texts/not-a-board', 'an unknown id'],
    ['/set-texts/aqa-a-level-extra', 'a near miss'],
    ['/set-texts/../admin', 'a traversal attempt'],
  ])('writes nothing for %s (%s)', (path) => {
    // A crawler must not be able to put an arbitrary value in a cookie jar.
    expect(boardToRememberFromPath(path, null)).toBeNull()
  })

  it.each([null, undefined, ''])('writes nothing for a missing path (%s)', (path) => {
    expect(boardToRememberFromPath(path as string | null | undefined, null)).toBeNull()
  })
})

describe('the middleware uses it, and does not redirect', () => {
  const SRC = readFileSync(join(process.cwd(), 'src/middleware.ts'), 'utf8')
  const code = SRC.split('\n')
    .filter((l) => !l.trim().startsWith('//') && !l.trim().startsWith('*'))
    .join('\n')

  // Anchored on the tail call by name. Since 26 September 2026 there is a
  // second call, earlier in the file, for the one redirect described below; a
  // bare indexOf would find that one and test the wrong block.
  const TAIL = 'const rememberBoard = boardToRememberFromPath('

  it('calls the resolver rather than matching the path inline', () => {
    expect(code).toContain(TAIL)
  })

  it('sets the cookie on the response for the page that was requested', () => {
    // Not a redirect. The removed BOARD_LANDING_REDIRECTS map redirected, and
    // that was its bug: the visitor lost the page they clicked.
    const at = code.indexOf(TAIL)
    expect(at).toBeGreaterThan(-1)
    const block = code.slice(at, at + 400)
    expect(block).toContain("response.cookies.set('english-hub-board'")
    expect(block).not.toContain('NextResponse.redirect')
    expect(block).not.toContain('rewrite')
  })

  it('passes the existing cookie in, so the resolver can decline', () => {
    const at = code.indexOf(TAIL)
    const block = code.slice(at, at + 200)
    expect(block).toContain("request.cookies.get('english-hub-board')")
  })
})

describe('the one redirect, and why it is not the old bug', () => {
  // 26 September 2026. KS3, Cambridge 0500 and 0990 set no texts, and their
  // shelf said so and nothing else, so /set-texts/<board> for those three is
  // now permanently redirected to the board's hub. That is a redirect in the
  // file whose history is a redirect bug, so its limits are pinned here: it
  // fires only for a board with no shelf, and it remembers the board under the
  // same never-overwrite rule as the tail. The behaviour itself is driven
  // through the real middleware in a-board-with-no-texts-lands-on-its-hub.
  const SRC = readFileSync(join(process.cwd(), 'src/middleware.ts'), 'utf8')
  const code = SRC.split('\n')
    .filter((l) => !l.trim().startsWith('//') && !l.trim().startsWith('*'))
    .join('\n')
  const at = code.indexOf('shelflessBoardHub(')
  const block = code.slice(at, at + 900)

  it('is gated on the shared shelfless decision, not on the path alone', () => {
    expect(at).toBeGreaterThan(-1)
    expect(block).toContain('if (shelflessMatch && shelflessHub)')
  })

  it('remembers the board through the same resolver, passing the existing cookie', () => {
    expect(block).toContain('boardToRememberFromPath(')
    expect(block).toContain('request.cookies.get(BOARD_COOKIE)')
  })
})
