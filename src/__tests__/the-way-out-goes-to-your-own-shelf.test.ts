import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { BOARDS } from '@/lib/board/board-config'
import { boardShelfHref } from '@/lib/board/board-landing'
import { buildShelf } from '@/lib/revision/shelf'
import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * "All set texts" meant all one hundred and eight of them.
 *
 * THE DEFECT. The text-scoped rail's only upward link went to
 * /revision/texts - every set text on the site, across fifteen specifications.
 * A student revising Edexcel IGCSE Literature clicked the way out of a text and
 * landed on a list where seventy-four of the hundred and eight belong to
 * somebody else's exam. From inside their own course, the only route back was
 * to a page that does not know what course they are on.
 *
 * WHY HYDRATION IS PART OF THE FIX AND NOT AN AFTERTHOUGHT. The board lives in
 * a cookie read on the client, so on the first render it is null. Linking to a
 * board shelf before that resolves would either guess a board or flash the
 * wrong one; linking to the all-texts index is the correct answer while the
 * answer is genuinely unknown. The label changes with the destination, so the
 * link never says "all your set texts" while pointing at everyone's.
 *
 * ── AND THEN THE RULE TURNED OUT TO BE HALF RIGHT ────────────────────────────
 *
 * Reported the next day: on /revision/texts/the-merchant-of-venice with the
 * board set to Edexcel IGCSE Language, the back link landed in the language
 * anthology. The fix above sent the reader to their board shelf whenever the
 * board was known, which answers "what are this student's set texts" - but a
 * back link has to answer "where was I", and those are the same page only while
 * the board actually sets the text. The Merchant of Venice is not on 4EA1.
 *
 * So the condition is no longer "is the board known" but "is this text on that
 * board", and it lives in `textBackLink`. The structural assertions below moved
 * with it. Everything else in this file still holds, and still matters: it is
 * what stops the correction being made by sending everybody back to all 108.
 * See back-never-goes-somewhere-else.test.ts for the rule itself.
 */

function sourceOf(rel: string): string {
  return readFileSync(join(process.cwd(), rel), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '')
}

const CODE = sourceOf('src/app/revision/_components/text-scoped-nav.tsx')
const SHELL = sourceOf('src/app/revision/_components/revision-shell.tsx')
const PAGE = sourceOf('src/app/revision/texts/[slug]/page.tsx')

describe('the rail', () => {
  it('no longer hard-codes the all-texts index as the way out', () => {
    expect(CODE).not.toContain('href="/revision/texts"')
  })

  it('resolves the destination through the shared helper', () => {
    // Not a template string and no longer boardShelfHref directly: one place
    // knows both the shape of the URL and the condition for using it, and a
    // second copy of either is how these drift.
    expect(CODE).toContain('textBackLink(')
    expect(CODE).not.toContain('boardShelfHref')
    expect(CODE).not.toMatch(/`\/set-texts\/\$\{/)
  })

  it('waits for hydration before claiming to know the board', () => {
    expect(CODE).toMatch(/textBackLink\(slug, isHydrated \? board : null\)/)
  })

  it('changes the label with the destination', () => {
    // A link reading "all your set texts" that goes to everyone's is worse than
    // the bug it replaced. The label now follows the resolver's own answer
    // rather than re-deciding, so the two cannot disagree.
    expect(CODE).toContain("t('textnav.back_to_board_shelf')")
    expect(CODE).toContain("t('textnav.back_to_shelf')")
    expect(CODE).toMatch(/back\.isBoardShelf \? t\('textnav\.back_to_board_shelf'\)/)
  })
})

describe('the other two ways out, which the first pass missed', () => {
  // Found by opening the page in a browser with a board cookie set and listing
  // every anchor. The rail was fixed and five links still went to the
  // all-texts index. Reading the source would not have shown that; rendering it
  // did.

  it('the MOBILE rail resolves through the helper too', () => {
    // This is the rail most of these students actually use. It was missed on
    // the first pass because the browser window was wide.
    expect(SHELL).toContain('textBackLink(textSlug, isHydrated ? board : null)')
  })

  it('the mobile rail has the board hook it needs', () => {
    const at = SHELL.indexOf('function MobileScrollRail')
    expect(at).toBeGreaterThan(-1)
    expect(SHELL.slice(at, at + 400)).toContain('useBoard()')
  })

  it('the site-wide Set Texts nav entry still points at the board shelf', () => {
    // That one is not a back link. It means "your set texts" in the register of
    // everything, where the board shelf is exactly right, so it keeps
    // boardShelfHref and must not be swept up in the correction.
    expect(SHELL).toContain('hrefForBoard: boardShelfHref')
  })

  it('the text page back button resolves through the helper', () => {
    expect(PAGE).toContain('textBackLink(slug, board)')
    expect(PAGE).not.toContain('boardShelfHref')
  })

  it('and the page needs no hydration guard, because it renders on the server', () => {
    // getServerBoard reads the cookie during the render, so unlike the rail
    // there is no window where the board is unknown and no fallback flicker.
    expect(PAGE).toContain('getServerBoard()')
    const at = PAGE.indexOf('textBackLink(slug, board)')
    expect(PAGE.slice(Math.max(0, at - 120), at)).not.toContain('isHydrated')
  })
})

describe('the destination it points at when the board does hold the text', () => {
  it.each(BOARDS.map((b) => b.id))('%s resolves to its own shelf URL', (id) => {
    expect(boardShelfHref(id)).toBe(`/set-texts/${id}`)
  })

  it('is a genuinely smaller list than the all-texts index', () => {
    // The point of the original change. If a board shelf held everything, this
    // would be a cosmetic rename.
    const everything = SET_TEXTS.length
    expect(everything).toBeGreaterThan(100)
    for (const board of BOARDS) {
      const shelf = buildShelf(board.id)
      if (shelf.length === 0) continue
      expect(shelf.length, `${board.id} shelf is not narrower`).toBeLessThan(everything)
    }
  })

  it('is much smaller for the board this was reported on', () => {
    // Edexcel IGCSE Literature: 34 prescribed texts against 108 on the site.
    const shelf = buildShelf('edexcel-igcse')
    expect(shelf).toHaveLength(34)
    expect(SET_TEXTS.length - shelf.length).toBeGreaterThan(60)
  })

  it('and the language board that started the second report has its own, different shelf', () => {
    // 4EA1 is not empty, which is why this was not a broken link: it has twenty
    // anthology texts. It simply does not have The Merchant of Venice.
    const lang = buildShelf('edexcel-igcse-lang')
    expect(lang.length).toBeGreaterThan(0)
    expect(lang.some((t) => t.slug === 'the-merchant-of-venice')).toBe(false)
  })
})
