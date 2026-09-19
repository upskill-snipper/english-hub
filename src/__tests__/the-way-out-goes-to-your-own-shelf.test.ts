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
 * The board is already known - the shell reads it two components away, and
 * `boardShelfHref` already existed - so the shelf that means something was one
 * import away the whole time.
 *
 * WHY HYDRATION IS PART OF THE FIX AND NOT AN AFTERTHOUGHT. The board lives in
 * a cookie read on the client, so on the first render it is null. Linking to a
 * board shelf before that resolves would either guess a board or flash the
 * wrong one; linking to the all-texts index is the correct answer while the
 * answer is genuinely unknown. The label changes with the destination, so the
 * link never says "all your set texts" while pointing at everyone's.
 */

const RAIL = readFileSync(
  join(process.cwd(), 'src/app/revision/_components/text-scoped-nav.tsx'),
  'utf8',
)
const CODE = RAIL.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('the rail', () => {
  it('no longer hard-codes the all-texts index as the way out', () => {
    expect(CODE).not.toContain('href="/revision/texts"')
  })

  it('links to the board shelf through the shared helper', () => {
    // Not a template string. `boardShelfHref` is the one place that knows the
    // shape of that URL, and a second copy is how these drift.
    expect(CODE).toContain('boardShelfHref(board)')
    expect(CODE).not.toMatch(/`\/set-texts\/\$\{/)
  })

  it('waits for hydration before claiming to know the board', () => {
    expect(CODE).toMatch(/board && isHydrated \? boardShelfHref\(board\) : '\/revision\/texts'/)
  })

  it('changes the label with the destination', () => {
    // A link reading "all your set texts" that goes to everyone's is worse than
    // the bug it replaced.
    expect(CODE).toContain("t('textnav.back_to_board_shelf')")
    expect(CODE).toContain("t('textnav.back_to_shelf')")
    expect(CODE).toMatch(/board && isHydrated \? t\('textnav\.back_to_board_shelf'\)/)
  })
})

describe('the destination it now points at', () => {
  it.each(BOARDS.map((b) => b.id))('%s resolves to its own shelf URL', (id) => {
    expect(boardShelfHref(id)).toBe(`/set-texts/${id}`)
  })

  it('is a genuinely smaller list than the all-texts index', () => {
    // The point of the change. If a board shelf held everything, this would be
    // a cosmetic rename.
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
})
