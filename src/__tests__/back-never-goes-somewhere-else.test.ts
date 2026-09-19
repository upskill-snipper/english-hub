import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { textBackLink, ALL_TEXTS_HREF } from '@/lib/revision/text-back-href'
import { SET_TEXTS, textAvailableForBoard } from '@/lib/board/set-texts'
import { BOARDS } from '@/lib/board/board-config'
import type { ExamBoard } from '@/lib/board/board-config'

/**
 * "All your set texts" took a student from Shakespeare into the language
 * anthology.
 *
 * REPORTED FROM THE LIVE SITE. On /revision/texts/the-merchant-of-venice with
 * the board cookie set to Edexcel IGCSE Language, the back link landed on the
 * 4EA1 shelf, which is prose and poetry for a language paper.
 *
 * IT IS NOT THE OBVIOUS BUG. Nothing was broken and the shelf was not empty:
 * 4EA1 genuinely has twenty set texts. The link went to /set-texts/<board>
 * unconditionally, so it answered "what are this student's set texts" when a
 * back link has to answer "where was I". Those coincide only while the text is
 * one the board sets, and The Merchant of Venice is not on 4EA1.
 *
 * So the assertion here is not about one text and one board. It is the rule:
 * for every text and every board on the site, the back link either goes
 * somewhere that contains that text, or to the index that contains all of them.
 * 108 texts across 15 boards is 1,620 journeys, and this checks all of them.
 */

const ROOT = process.cwd()
const BOARD_IDS = BOARDS.map((b) => b.id)

describe('the reported journey', () => {
  it('Merchant of Venice, Edexcel IGCSE Language, no longer lands in language', () => {
    const back = textBackLink('the-merchant-of-venice', 'edexcel-igcse-lang' as ExamBoard)
    expect(back.href).toBe(ALL_TEXTS_HREF)
    expect(back.href).not.toContain('edexcel-igcse-lang')
    expect(back.isBoardShelf).toBe(false)
  })

  it('and the text really is off that board, so the fix is the link and not the data', () => {
    // If Merchant were on 4EA1 the shelf would have been the right answer and
    // this would be a data fix instead.
    expect(textAvailableForBoard('the-merchant-of-venice', 'edexcel-igcse-lang' as ExamBoard)).toBe(
      false,
    )
    expect(textAvailableForBoard('the-merchant-of-venice', 'aqa' as ExamBoard)).toBe(true)
  })

  it('an Edexcel IGCSE Literature student still gets their own shelf', () => {
    // The counterweight. Sending everybody to the all-texts index would pass
    // every assertion above and undo the fix this rail was built for: a student
    // revising one specification does not want the other seventy-four texts.
    const back = textBackLink('the-merchant-of-venice', 'edexcel-igcse' as ExamBoard)
    expect(back.href).toBe('/set-texts/edexcel-igcse')
    expect(back.isBoardShelf).toBe(true)
  })
})

describe('every text, every board', () => {
  const journeys = SET_TEXTS.flatMap((t) => BOARD_IDS.map((b) => [t.slug, b] as const))

  it('there are enough journeys for this to mean something', () => {
    expect(journeys.length).toBeGreaterThan(1000)
  })

  it('back never goes to a board shelf that does not hold the text', () => {
    const wrong = journeys
      .filter(([slug, board]) => {
        const back = textBackLink(slug, board as ExamBoard)
        return back.isBoardShelf && !textAvailableForBoard(slug, board as ExamBoard)
      })
      .map(([slug, board]) => `${slug} @ ${board}`)
    expect(wrong).toEqual([])
  })

  it('and goes to the board shelf whenever the board does hold it', () => {
    const missed = journeys
      .filter(([slug, board]) => {
        const back = textBackLink(slug, board as ExamBoard)
        return textAvailableForBoard(slug, board as ExamBoard) && !back.isBoardShelf
      })
      .map(([slug, board]) => `${slug} @ ${board}`)
    expect(missed).toEqual([])
  })

  it('the label always agrees with the destination', () => {
    // A link that says "your set texts" and goes to all 108 is the same mistake
    // pointing the other way.
    for (const [slug, board] of journeys) {
      const back = textBackLink(slug, board as ExamBoard)
      if (back.isBoardShelf) expect(back.href.startsWith('/set-texts/')).toBe(true)
      else expect(back.href).toBe(ALL_TEXTS_HREF)
    }
  })
})

describe('what happens when we do not know', () => {
  it('no board yet means the all-texts index, not a guess', () => {
    expect(textBackLink('macbeth', null).href).toBe(ALL_TEXTS_HREF)
    expect(textBackLink('macbeth', undefined).href).toBe(ALL_TEXTS_HREF)
  })

  it('an unrecognised slug is not treated as off-course', () => {
    // "We have no record of this" and "your board does not set this" are
    // different statements. Both lead to the index here, but for the right
    // reason: we cannot prove the board holds it.
    const back = textBackLink('not-a-text-at-all', 'aqa' as ExamBoard)
    expect(back.href).toBe(ALL_TEXTS_HREF)
    expect(back.isBoardShelf).toBe(false)
  })

  it('and the revision-notes spelling still resolves to the board shelf', () => {
    // `christmas-carol` rather than `a-christmas-carol`. Without the alias this
    // reads as an unknown text and an AQA student loses their own shelf.
    const back = textBackLink('christmas-carol', 'aqa' as ExamBoard)
    expect(back.isBoardShelf).toBe(true)
    expect(back.href).toBe('/set-texts/aqa')
  })
})

describe('no back link anywhere still builds its own destination', () => {
  const FILES = [
    'src/app/revision/_components/text-scoped-nav.tsx',
    'src/app/revision/_components/revision-shell.tsx',
    'src/app/revision/texts/[slug]/page.tsx',
  ]

  it.each(FILES)('%s asks the resolver', (rel) => {
    const src = readFileSync(join(ROOT, rel), 'utf8')
    expect(src).toContain('textBackLink(')
  })

  it('and none of them still links straight to the board shelf from a text', () => {
    // revision-shell keeps boardShelfHref for the site-wide "Set Texts" nav
    // entry, which is not a back link and is correct. The three back links are
    // the ones that must go through the resolver.
    const rail = readFileSync(
      join(ROOT, 'src/app/revision/_components/text-scoped-nav.tsx'),
      'utf8',
    )
    const page = readFileSync(join(ROOT, 'src/app/revision/texts/[slug]/page.tsx'), 'utf8')
    expect(rail).not.toContain('boardShelfHref')
    expect(page).not.toContain('boardShelfHref')
  })
})

describe('the stale comment that outlived its code', () => {
  it('the dynamic text page no longer claims to redirect', () => {
    // It was headed "Board guard (STRICT) - Redirect to the texts hub if the
    // user's board does not study this text." The redirect was deleted a day
    // earlier. A comment describing code that is not there is the same failure
    // shape as a guard that does not guard.
    const src = readFileSync(join(ROOT, 'src/app/revision/texts/[slug]/page.tsx'), 'utf8')
    const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

    // The claim, not the words: the comment now quotes the old heading in order
    // to explain that it is gone, so searching for the heading finds the
    // correction rather than the defect. What matters is that no redirect
    // survives in the code and that the note is there to say why.
    expect(code).not.toContain('redirect(')
    expect(src).toContain('The redirect went on 19 September 2026')
  })
})

describe('the board ids used here are real', () => {
  it('every id this file tests exists in the board register', () => {
    // Without this the journeys above could be generated from a typo and pass
    // by testing nothing.
    for (const id of ['edexcel-igcse-lang', 'edexcel-igcse', 'aqa']) {
      expect(BOARD_IDS, `${id} is not a board`).toContain(id)
    }
    expect(BOARD_IDS.length).toBeGreaterThanOrEqual(15)
  })

  it('and the set-text register is loaded', () => {
    expect(SET_TEXTS.length).toBeGreaterThan(90)
    expect(readdirSync(join(ROOT, 'src/app/revision/texts')).length).toBeGreaterThan(50)
  })
})

describe('the thirty-three static guides, which had the same link hard-coded', () => {
  // TextGuide renders every one of these and its back button was
  // href="/revision/texts", board-unaware. That destination was honest, so this
  // is not the reported defect - but it sat beside a rail offering the reader
  // their own shelf, so one page gave two different answers to "how do I get
  // out of here".
  const DIR = join(ROOT, 'src/app/revision/texts')
  const pages = readdirSync(DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
    .map((d) => ({ slug: d.name, file: join(DIR, d.name, 'page.tsx') }))
    .filter((p) => {
      try {
        return readFileSync(p.file, 'utf8').includes('const data: TextGuideData = {')
      } catch {
        return false
      }
    })

  it('there are enough of them for this to mean something', () => {
    expect(pages.length).toBeGreaterThanOrEqual(30)
  })

  it.each(pages.map((p) => [p.slug, p.file]))(
    '%s declares its OWN slug, not a copied one',
    (slug, file) => {
      // The real risk in a thirty-three file edit. A page carrying a
      // neighbour's slug still compiles, still renders, and sends the reader to
      // a shelf chosen for a different text - which is the defect this whole
      // change is about, reintroduced one page at a time.
      const declared = readFileSync(file, 'utf8').match(
        /const data: TextGuideData = \{\s+slug: '([^']+)'/,
      )
      expect(declared?.[1], `${slug} declares ${declared?.[1]}`).toBe(slug)
    },
  )

  it('and every declared slug is a real set text', () => {
    const known = new Set(SET_TEXTS.map((t) => t.slug))
    const unknown = pages.filter((p) => !known.has(p.slug)).map((p) => p.slug)
    expect(unknown).toEqual([])
  })

  it('TextGuide resolves the destination rather than hard-coding it', () => {
    const guide = readFileSync(
      join(ROOT, 'src/app/revision/texts/_components/text-guide.tsx'),
      'utf8',
    )
    // Comments stripped: the docblock quotes the old href in order to say it is
    // gone, and a raw search finds the explanation rather than the defect. That
    // has now cost two assertions in this change alone.
    const code = guide.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(code).toContain('textBackLink(data.slug, await getServerBoard())')
    expect(code).not.toContain('href="/revision/texts"')
  })

  it('and the label follows the destination in all three locales', () => {
    const guide = readFileSync(
      join(ROOT, 'src/app/revision/texts/_components/text-guide.tsx'),
      'utf8',
    )
    expect(guide).toMatch(/back\.isBoardShelf/)
    // CHROME_ES is typed as `typeof CHROME_AR`, so a key missing from either
    // map is a compile error rather than a silent English fallback.
    expect((guide.match(/backToBoardTexts:/g) ?? []).length).toBe(2)
  })
})
