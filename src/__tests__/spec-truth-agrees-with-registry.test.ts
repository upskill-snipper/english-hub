import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { BOARDS, getDisplayName, type ExamBoard } from '@/lib/board/board-config'
import { SET_TEXTS, getSetTextsForBoard } from '@/lib/board/set-texts'
import { SPEC_TRUTH, KNOWN_GAPS, UNVERIFIED_SPECS } from '@/lib/board/spec-truth'
import { LITERATURE_4ET1 } from '@/lib/board/edexcel-igcse-literature'
import { buildShelf, groupShelfForBoard } from '@/lib/revision/shelf'

/**
 * The spec-truth file and the registry agree, and the pages read from them.
 *
 * WHY (23 October 2026). The 20 October verification found the registry's
 * whole-text lists mostly sound and the hand-written claims beside it wrong:
 * a shelf labelling The Kite Runner and Spies "Cambridge IGCSE 0475", an IAL
 * unit table for a qualification Pearson does not run, four A-level tags on a
 * board whose specification names the texts nowhere. The existing board-tags
 * test reads SET_TEXTS against prescribed-texts.ts and never saw any of it,
 * because none of it was in SET_TEXTS.
 *
 * src/lib/board/spec-truth.ts now records, per qualification, what the
 * awarding body's document sets and on which page. This file holds the
 * registry to it in both directions, holds the pages that used to carry
 * literal board lists to the derived helper, and ages every entry out after a
 * year. Nothing is mocked: the real modules are imported.
 *
 * MUTATION RUN, verified to have altered the data first: re-adding
 * 'aqa-a-level' to Hamlet fails 3 of these (the gap ratchet, the named
 * correction and the badge check); restoring "AQA only" to the texts index
 * fails 1.
 */

const ROOT = process.cwd()
const read = (p: string) => readFileSync(join(ROOT, p), 'utf8')
const DAY = 24 * 60 * 60 * 1000
const BY_SLUG = new Map(SET_TEXTS.map((t) => [t.slug, t]))

/** Whether a dated text is set in the series the flat tags describe. */
function setInShelfSeries(
  text: { firstAssessment?: string; lastAssessment?: string },
  series: string | undefined,
): boolean {
  if (!series) return true
  if (text.firstAssessment && text.firstAssessment > series) return false
  if (text.lastAssessment && text.lastAssessment < series) return false
  return true
}

describe('the truth file is worth measuring against', () => {
  it('names every board exactly once, as verified or as unverified', () => {
    const verified = SPEC_TRUTH.map((s) => s.boardId)
    const unverified = UNVERIFIED_SPECS.map((s) => s.boardId)
    expect(new Set([...verified, ...unverified]).size).toBe(verified.length + unverified.length)
    expect([...verified, ...unverified].sort()).toEqual(BOARDS.map((b) => b.id).sort())
  })

  it('is big enough that a pass means something', () => {
    const texts = SPEC_TRUTH.flatMap((s) => s.texts)
    expect(texts.length).toBeGreaterThan(150)
    expect(SPEC_TRUTH.length).toBeGreaterThanOrEqual(9)
  })

  it('cites a document, a version, a URL, a page and a date for everything', () => {
    for (const spec of SPEC_TRUTH) {
      expect(spec.documentTitle, spec.boardId).toBeTruthy()
      expect(spec.documentVersion, spec.boardId).toBeTruthy()
      expect(spec.documentUrl, spec.boardId).toMatch(/^https:\/\//)
      expect(spec.checkedOn, spec.boardId).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      for (const text of spec.texts) {
        expect(text.sourcePage, `${spec.boardId}/${text.slug}`).toBeTruthy()
        expect(text.component, `${spec.boardId}/${text.slug}`).toBeTruthy()
      }
    }
  })

  it('is no more than a year old', () => {
    // Boards re-issue specifications and Cambridge rotates every year. An
    // entry older than this is a claim nobody has checked recently. The
    // founder is to confirm the window; 365 days is the design's proposal.
    for (const spec of SPEC_TRUTH) {
      const age = (Date.now() - new Date(spec.checkedOn).getTime()) / DAY
      expect(age, `${spec.boardId} was checked ${Math.round(age)} days ago`).toBeLessThanOrEqual(
        365,
      )
    }
  })

  it('names no slug twice within one specification', () => {
    for (const spec of SPEC_TRUTH) {
      const slugs = spec.texts.map((t) => t.slug)
      expect(new Set(slugs).size, spec.boardId).toBe(slugs.length)
    }
  })
})

describe('every truth text has a registry row tagged to its board', () => {
  for (const spec of SPEC_TRUTH) {
    it(`${spec.boardId}`, () => {
      const missingRow: string[] = []
      const untagged: string[] = []
      const wronglyTagged: string[] = []
      for (const text of spec.texts) {
        const row = BY_SLUG.get(text.slug)
        if (!row) {
          missingRow.push(text.slug)
          continue
        }
        const tagged = row.boards.includes(spec.boardId)
        if (setInShelfSeries(text, spec.shelfSeries)) {
          if (!tagged) untagged.push(text.slug)
        } else if (tagged) {
          // A text whose window excludes the shelf's series must not be on
          // the shelf: that is a withdrawn or not-yet-set text in front of a
          // student.
          wronglyTagged.push(text.slug)
        }
      }
      expect(missingRow, 'in the truth file but with no SET_TEXTS row').toEqual([])
      expect(untagged, `set by ${spec.boardId} but not tagged to it`).toEqual([])
      expect(wronglyTagged, `tagged to ${spec.boardId} outside its series`).toEqual([])
    })
  }
})

describe('every row tagged to a verified board has a truth entry, or a recorded gap', () => {
  for (const spec of SPEC_TRUTH) {
    it(`${spec.boardId}`, () => {
      const known = new Set(spec.texts.map((t) => t.slug))
      const actualGap = getSetTextsForBoard(spec.boardId)
        .map((t) => t.slug)
        .filter((slug) => !known.has(slug))
        .sort()
      const recordedGap = KNOWN_GAPS.filter((g) => g.boardId === spec.boardId)
        .map((g) => g.slug)
        .sort()
      // The ratchet: a new gap fails, and a closed gap still listed fails.
      expect(actualGap, `tagged to ${spec.boardId} and not in the truth file`).toEqual(recordedGap)
    })
  }

  it('records a reason for every known gap', () => {
    for (const gap of KNOWN_GAPS) {
      expect(gap.why.length, `${gap.boardId}/${gap.slug}`).toBeGreaterThan(20)
      expect(
        SPEC_TRUTH.some((s) => s.boardId === gap.boardId),
        gap.boardId,
      ).toBe(true)
    }
  })
})

describe('the corrections of 23 October 2026 hold', () => {
  it.each([
    ['hamlet', 'aqa-a-level'],
    ['king-lear', 'aqa-a-level'],
    ['a-dolls-house', 'aqa-a-level'],
    ['my-last-duchess', 'aqa-a-level'],
    ['the-waste-land', 'ocr-a-level'],
  ])('%s is no longer tagged to %s', (slug, board) => {
    expect(BY_SLUG.get(slug)?.boards, slug).not.toContain(board)
    // And not deleted: each is a real set text elsewhere.
    expect(BY_SLUG.get(slug)?.boards.length, slug).toBeGreaterThan(0)
  })

  it('marks the OCR suggested texts as suggested, not set', () => {
    const ocr = SPEC_TRUTH.find((s) => s.boardId === 'ocr-a-level')!
    const suggested = ocr.texts.filter((t) => t.suggestedOnly).map((t) => t.slug)
    expect(suggested.sort()).toEqual([
      'frankenstein',
      'jane-eyre',
      'oranges-are-not-the-only-fruit',
    ])
    for (const slug of ['the-great-gatsby', 'the-handmaids-tale', 'hamlet']) {
      expect(ocr.texts.find((t) => t.slug === slug)?.suggestedOnly, slug).toBeFalsy()
    }
  })

  it('dates every Cambridge text that leaves or arrives', () => {
    const cam = SPEC_TRUTH.find((s) => s.boardId === 'cambridge-0475')!
    const by = (slug: string) => cam.texts.find((t) => t.slug === slug)!
    expect(by('the-war-of-the-worlds').lastAssessment).toBe('2026')
    expect(by('antony-and-cleopatra').lastAssessment).toBe('2027')
    expect(by('an-inspector-calls').firstAssessment).toBe('2028')
    expect(by('princess-and-the-hustler').firstAssessment).toBe('2027')
    // The shelf is the 2027 series, so the 2028 arrivals must not be tagged
    // and the 2026 leavers must not be tagged. Both checked above per board;
    // named here so a regression says which text.
    expect(BY_SLUG.get('an-inspector-calls')!.boards).not.toContain('cambridge-0475')
    expect(BY_SLUG.get('the-war-of-the-worlds')!.boards).not.toContain('cambridge-0475')
    expect(BY_SLUG.get('antony-and-cleopatra')!.boards).toContain('cambridge-0475')
  })

  it('records the editions Eduqas excludes and AQA requires for Blood Brothers', () => {
    const eduqas = SPEC_TRUTH.find((s) => s.boardId === 'eduqas')!
    expect(eduqas.texts.find((t) => t.slug === 'blood-brothers')?.editionNote).toMatch(
      /not Stanley Thorne edition/,
    )
    const aqa = SPEC_TRUTH.find((s) => s.boardId === 'aqa')!
    expect(aqa.texts.find((t) => t.slug === 'blood-brothers')?.editionNote).toMatch(
      /musical version/,
    )
    expect(BY_SLUG.get('blood-brothers')?.ukRightsNotice).toMatch(/Stanley Thorne/)
  })

  it('names the Edexcel GCSE collection for each tagged poem', () => {
    const edexcel = SPEC_TRUTH.find((s) => s.boardId === 'edexcel')!
    const poems = edexcel.texts.filter((t) => t.collection)
    expect(poems.map((p) => [p.slug, p.collection]).sort()).toEqual([
      ['half-caste', 'Conflict'],
      ['la-belle-dame-sans-merci', 'Relationships'],
      ['my-last-duchess', 'Relationships'],
    ])
  })
})

describe('the pages read board lists from the registry, not from their own text', () => {
  const INDEX = 'src/app/revision/texts/page.tsx'

  it('the set-text index carries no literal board list', () => {
    // Comments are stripped first: the docblock quotes the old labels.
    const code = read(INDEX)
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    expect(code).not.toMatch(/\b(AQA|Edexcel|OCR|Eduqas) only\b/)
    expect(code).not.toMatch(/\b(AQA|Edexcel|OCR|Eduqas) \/ (AQA|Edexcel|OCR|Eduqas)\b/)
    expect(code).not.toMatch(/Cambridge IGCSE 0475/)
    expect(code).not.toMatch(/IGCSE \+/)
    expect(code).not.toMatch(/Kite Runner|\bSpies\b/)
    // The counterweight: the labels did not simply vanish.
    expect(code.match(/boardsLabel\('/g)?.length ?? 0).toBeGreaterThanOrEqual(18)
  })

  it('every slug the index derives a label for is in the registry', () => {
    const slugs = [...read(INDEX).matchAll(/boardsLabel\('([^']+)'\)/g)].map((m) => m[1]!)
    for (const slug of slugs) expect(BY_SLUG.has(slug), slug).toBe(true)
  })

  it.each(['hamlet', 'king-lear', 'othello', 'a-streetcar-named-desire', 'the-great-gatsby'])(
    'the %s guide badge names the boards on its registry row',
    (slug) => {
      // These A-level guides hand-write a badge in text-guide.tsx's format,
      // board display names joined by " / ". It has to equal the row. (The GCSE
      // and IGCSE badges use short forms the display names do not, so they are
      // not held here yet; deriving the badge is the design's step 6.)
      const src = read(`src/app/revision/texts/${slug}/page.tsx`)
      const badge = src.match(/^\s*badge: '([^']+)',/m)?.[1]
      expect(badge, `${slug} has no badge`).toBeTruthy()
      const expected = BY_SLUG.get(slug)!.boards.map(getDisplayName)
      expect(badge!.split(' / ').sort()).toEqual([...expected].sort())
    },
  )

  it('the Hamlet guide no longer says it is on every A-level specification', () => {
    expect(read('src/app/revision/texts/hamlet/page.tsx')).not.toMatch(
      /every major A-Level specification/,
    )
  })
})

describe('the 4ET1 shelf is grouped as the specification groups it', () => {
  const groups = groupShelfForBoard('edexcel-igcse', buildShelf('edexcel-igcse'))

  it('is the three choice lists and the anthology, nothing else', () => {
    expect(groups.map((g) => g.category)).toEqual([
      '4et1-modern-prose',
      '4et1-modern-drama',
      '4et1-literary-heritage',
      '4et1-anthology',
    ])
  })

  it('puts every text in the list the specification puts it in', () => {
    const [prose, drama, heritage, poems] = groups
    const slugs = (g: (typeof groups)[number]) => g.entries.map((e) => e.text.slug).sort()
    expect(slugs(prose!)).toEqual(LITERATURE_4ET1[0]!.entries.map((e) => e.slug).sort())
    expect(slugs(drama!)).toEqual(LITERATURE_4ET1[1]!.entries.map((e) => e.slug).sort())
    expect(slugs(heritage!)).toEqual(LITERATURE_4ET1[2]!.entries.map((e) => e.slug).sort())
    expect(poems!.entries).toHaveLength(16)
  })

  it('and the headings carry the choice rule', () => {
    for (const g of groups) expect(g.labelKey).toMatch(/^shelf\.4et1\./)
  })

  it('leaves every other board on the category grouping', () => {
    const boards: ExamBoard[] = ['aqa', 'cambridge-0475', 'ial-edexcel']
    for (const board of boards) {
      for (const g of groupShelfForBoard(board, buildShelf(board))) {
        expect(g.labelKey, board).toMatch(/^analysis\.deep\.set_text\.cat\./)
      }
    }
  })
})
