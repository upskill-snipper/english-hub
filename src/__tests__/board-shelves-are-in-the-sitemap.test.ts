import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { BOARDS } from '@/lib/board/board-config'
import { buildShelf } from '@/lib/revision/shelf'

/**
 * The page every board picker points at, submitted to nobody.
 *
 * THE DEFECT (SEO-2, 19 September 2026). `/set-texts/<board>` is where a
 * student lands after answering "which board do you study?" - the homepage
 * cards, /exam-boards, /board-select and the three-step wizard all point there.
 * Fifteen pages, each naming a specification and listing its set texts, and not
 * one of them was in the sitemap. "AQA English" and "Edexcel English" are the
 * entry queries for our two largest cohorts and we were submitting nothing for
 * them.
 *
 * WHAT WAS NOT BUILT, AND WHY IT MATTERS MORE THAN WHAT WAS. The backlog item
 * proposed four new pages - /gcse/aqa-english and siblings - with the board's
 * papers, its set texts, AO mapping and an FAQ block. That was the right call
 * when it was written: the board picker then went to /revision?setBoard=aqa, a
 * query parameter the middleware converts to a cookie and strips, so choosing a
 * board genuinely left no indexable URL behind.
 *
 * It does not any more. /set-texts/<board> was built earlier the same day and
 * already carries the set texts filtered by board, a self-canonical, breadcrumb
 * JSON-LD and generateStaticParams. Adding four more board hubs would put a
 * second page in front of Google competing with a first one that is better -
 * which is precisely the defect SEO-10 fixed three items earlier, where twenty
 * boilerplate stubs were bidding against our own full guides. Committing it
 * again deliberately, in the name of an SEO item, would be worse than leaving
 * the gap.
 *
 * So the shelves are submitted and the four pages are not built. This test
 * pins both halves.
 */

describe('every board shelf with texts is submitted', () => {
  const withTexts = BOARDS.filter((b) => buildShelf(b.id).length > 0)

  it('there are enough of them for this to mean something', () => {
    expect(withTexts.length).toBeGreaterThanOrEqual(10)
  })

  it('lists each one', async () => {
    const { default: sitemap } = await import('@/app/sitemap')
    const paths = new Set(
      (await sitemap()).map((e) => e.url.replace('https://theenglishhub.app', '')),
    )
    for (const board of withTexts) {
      expect(paths.has(`/set-texts/${board.id}`), `${board.id} shelf is not in the sitemap`).toBe(
        true,
      )
    }
  }, 30_000)

  it('gives them a priority that reflects being a top-of-funnel hub', async () => {
    const { default: sitemap } = await import('@/app/sitemap')
    const entries = await sitemap()
    const shelf = entries.find((e) => e.url.endsWith('/set-texts/aqa'))
    expect(shelf?.priority).toBe(0.9)
  }, 30_000)
})

describe('a board with nothing on its shelf is not submitted', () => {
  it('skips the empty ones rather than listing a blank page', async () => {
    // Cambridge 0500 and 0990 prescribe no set texts at all - verified against
    // both syllabuses, and correct by design rather than a gap. KS3 has none
    // either. An empty page is still not a page worth ranking.
    const { default: sitemap } = await import('@/app/sitemap')
    const paths = new Set(
      (await sitemap()).map((e) => e.url.replace('https://theenglishhub.app', '')),
    )
    const empty = BOARDS.filter((b) => buildShelf(b.id).length === 0)
    expect(empty.length, 'no empty boards left, so this proves nothing').toBeGreaterThan(0)
    for (const board of empty) {
      expect(paths.has(`/set-texts/${board.id}`), `${board.id} is empty but submitted`).toBe(false)
    }
  }, 30_000)
})

describe('the four pages the item proposed were deliberately not built', () => {
  it.each(['aqa-english', 'edexcel-english', 'ocr-english', 'eduqas-english'])(
    '/gcse/%s does not exist',
    async (slug) => {
      // If someone adds these later they must first decide what happens to
      // /set-texts/<board>, because two board hubs is the SEO-10 defect.
      const { existsSync } = await import('node:fs')
      const { join } = await import('node:path')
      expect(existsSync(join(process.cwd(), 'src/app/gcse', slug))).toBe(false)
    },
  )
})

describe('llms.txt cites the board shelves too', () => {
  const LLMS = readFileSync(join(process.cwd(), 'public/llms.txt'), 'utf8')

  it('has a section for them', () => {
    expect(LLMS).toContain('## Set texts by exam board')
  })

  it('lists every board that has texts', () => {
    for (const board of BOARDS) {
      if (buildShelf(board.id).length === 0) continue
      expect(LLMS, `${board.id} is missing from llms.txt`).toContain(
        `https://theenglishhub.app/set-texts/${board.id}`,
      )
    }
  })

  it('labels them by qualification, not by URL segment', () => {
    // The generator's first output read "Set Texts > Aqa", which tells an
    // answer engine nothing about which qualification the page covers. The
    // label now comes from the board's own name in board-config.
    expect(LLMS).toContain('Edexcel IGCSE Literature (4ET1): prescribed set texts')
    expect(LLMS).not.toContain('Set Texts › Aqa')
  })

  it('does not cite a board with an empty shelf', () => {
    for (const board of BOARDS) {
      if (buildShelf(board.id).length > 0) continue
      expect(LLMS, `${board.id} is empty but cited`).not.toContain(
        `https://theenglishhub.app/set-texts/${board.id}`,
      )
    }
  })
})
