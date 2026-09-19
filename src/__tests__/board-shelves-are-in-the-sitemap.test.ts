import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { BOARDS } from '@/lib/board/board-config'
import { buildShelf } from '@/lib/revision/shelf'
import { shelfIsVerified, unverifiedShelves } from '@/lib/board/shelf-provenance'

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

describe('every VERIFIED board shelf with texts is submitted', () => {
  const withTexts = BOARDS.filter((b) => buildShelf(b.id).length > 0 && shelfIsVerified(b.id))

  it('there are enough of them for this to mean something', () => {
    // Seven, not twelve: the four A-Level boards and Edexcel IAL are excluded
    // because their set-text lists have never been read from a specification.
    // If this number rises, somebody has read one - which is the point.
    expect(withTexts.length).toBe(7)
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

describe('an unverified shelf is not submitted, and that is a correction', () => {
  // THIS LOOP ORIGINALLY SUBMITTED EVERY BOARD WITH TEXTS, including five whose
  // lists nobody has read. The four A-Level boards carry a BYTE-IDENTICAL
  // nine-text list - A Doll's House, A Streetcar Named Desire, Antony and
  // Cleopatra, Hamlet, King Lear, Othello, The Great Gatsby, The Handmaid's
  // Tale, The Waste Land - which is one list copied four times, not four
  // researched ones. Edexcel IAL's twelve have never been read from its
  // specification either.
  //
  // Asking Google to rank a page whose content we already know is unverified is
  // worse than not asking, and worse still for having been introduced while
  // fixing something else. The pages still render; we stop requesting traffic.

  it('the five are still unverified, so this is not vacuous', () => {
    expect(unverifiedShelves()).toHaveLength(5)
    for (const board of unverifiedShelves()) {
      expect(shelfIsVerified(board), `${board} is now verified`).toBe(false)
    }
  })

  it('and the verified ones still pass, so it is not refusing everything', () => {
    // The counterweight. A predicate that returned false for every board would
    // satisfy every assertion in this block and empty the sitemap.
    for (const board of ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'] as const) {
      expect(shelfIsVerified(board), `${board} should be verified`).toBe(true)
    }
  })

  it('and they really do carry the same nine texts', () => {
    // The evidence for the claim above, asserted rather than asserted-in-prose.
    const aLevel = ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'] as const
    const lists = aLevel.map((b) =>
      buildShelf(b)
        .map((e) => e.text.slug)
        .sort()
        .join(','),
    )
    expect(new Set(lists).size, 'the four A-Level lists differ, so re-check this').toBe(1)
    expect(buildShelf('aqa-a-level')).toHaveLength(9)
  })

  it('none of them is in the sitemap', async () => {
    const { default: sitemap } = await import('@/app/sitemap')
    const paths = new Set(
      (await sitemap()).map((e) => e.url.replace('https://theenglishhub.app', '')),
    )
    for (const board of unverifiedShelves()) {
      expect(paths.has(`/set-texts/${board}`), `${board} is unverified but submitted`).toBe(false)
    }
  }, 30_000)

  it('none of them is cited in llms.txt either', () => {
    const llms = readFileSync(join(process.cwd(), 'public/llms.txt'), 'utf8')
    for (const board of unverifiedShelves()) {
      expect(llms, `${board} is unverified but cited`).not.toContain(
        `https://theenglishhub.app/set-texts/${board}`,
      )
    }
  })

  it('but the pages are not deleted - they still have texts on them', () => {
    // The correction is about what we ASK for, not about hiding the page from
    // a student who lands on it.
    for (const board of unverifiedShelves()) {
      expect(buildShelf(board).length, `${board} shelf is empty`).toBeGreaterThan(0)
    }
  })
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

  it('lists every VERIFIED board that has texts', () => {
    for (const board of BOARDS) {
      if (buildShelf(board.id).length === 0) continue
      if (!shelfIsVerified(board.id)) continue
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
