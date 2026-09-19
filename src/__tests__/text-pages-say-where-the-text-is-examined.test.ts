import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { examPlacements, hasExamPlacement } from '@/lib/board/exam-placement'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { ANTHOLOGY } from '@/lib/board/edexcel-igcse-anthology'
import { literature4et1Slugs } from '@/lib/board/edexcel-igcse-literature'

/**
 * The four study tips that were the same on all 108 set-text pages.
 *
 * THE DEFECT, reported from the live site on 19 September 2026 as "waste pages".
 * Every set-text page ended with a "How to revise X" block of four tips -
 * memorise short quotations, read the whole text, and two more of the same -
 * rendered byte-identical on every one of the 108 texts. For the 75 texts with
 * no guide written, that boilerplate WAS the page. It told a student nothing
 * they could not have guessed and nothing whatever about their own exam.
 *
 * WHAT REPLACED IT, and why it is not more filler. Four specifications were read
 * in full the same day, so we can now print the thing a specification says and
 * almost nobody publishes: which paper this text is on, which section, what it
 * is worth, and whether the student chose it. 57 of the 108 texts have that
 * today.
 *
 * THE RULE THAT MAKES IT SAFE. Nothing is inferred. Every placement comes from a
 * module that records the document and its version string, and a text with no
 * verified placement renders a sentence saying we have not checked - not a
 * hedge, and not a guess. "We have not checked your board" and "your board does
 * not set this" are different statements, and a student acting on the wrong one
 * loses a paper.
 */

const PAGE = readFileSync(join(process.cwd(), 'src/app/revision/texts/[slug]/page.tsx'), 'utf8')
const CODE = PAGE.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('the identical boilerplate is gone', () => {
  it.each(['tip1_h3', 'tip1_body', 'tip2_body', 'tip3_body', 'tip4_body'])(
    'no longer renders %s',
    (key) => {
      expect(CODE).not.toContain(key)
    },
  )

  it('and the block that held them is gone with it', () => {
    expect(CODE).not.toMatch(/tHowToRevise/)
  })

  it('renders the placement card instead', () => {
    expect(CODE).toContain('<ExamPlacementCard slug={text.slug} />')
  })
})

describe('what the placement actually says', () => {
  it('puts an anthology poem on the right paper, with its page number', () => {
    const [p] = examPlacements('war-photographer')
    expect(p?.board).toBe('edexcel-igcse')
    expect(p?.assessedIn).toContain('Component 1')
    expect(p?.selection).toContain('compulsory')
    expect(p?.detail).toContain('page 63')
  })

  it('tells a student when they had a choice, and of how many', () => {
    const [p] = examPlacements('klara-and-the-sun')
    expect(p?.selection).toBe('You study 1 of these 7 texts.')
  })

  it('warns when a text was not assessable in an earlier series', () => {
    // Klara and the Sun and Western Lane are first assessment May 2026. A resit
    // candidate must not be told they could have answered on them.
    const [p] = examPlacements('western-lane')
    expect(p?.detail).toContain('May 2026')
  })

  it('carries the exam year for Cambridge, which rotates every year', () => {
    const cambridge = examPlacements('antony-and-cleopatra').find(
      (p) => p.board === 'cambridge-0475',
    )
    expect(cambridge?.examYear).toBe(2027)
  })

  it('shows both placements for a text two boards set', () => {
    // To Kill a Mockingbird is Edexcel IGCSE modern prose and a Cambridge 0475
    // prose text. A student on either board needs their own line.
    const boards = examPlacements('to-kill-a-mockingbird').map((p) => p.board)
    expect(boards).toContain('edexcel-igcse')
    expect(boards).toContain('cambridge-0475')
  })
})

describe('every claim carries the document it came from', () => {
  it.each(SET_TEXTS.filter((t) => hasExamPlacement(t.slug)).map((t) => t.slug))(
    '%s cites a versioned source',
    (slug) => {
      for (const p of examPlacements(slug)) {
        expect(p.source.title, `${slug} has no source title`).toBeTruthy()
        expect(p.source.version, `${slug} has no document version`).toBeTruthy()
        expect(p.source.readOn, `${slug} has no read date`).toBe('2026-09-19')
      }
    },
  )
})

describe('it covers what was verified and claims nothing more', () => {
  it('places every anthology text', () => {
    for (const part of ANTHOLOGY) {
      for (const entry of part.entries) {
        expect(hasExamPlacement(entry.slug), `${entry.slug} has no placement`).toBe(true)
      }
    }
  })

  it('places every 4ET1 whole text', () => {
    for (const slug of literature4et1Slugs()) {
      expect(hasExamPlacement(slug), `${slug} has no placement`).toBe(true)
    }
  })

  it('places more than half the corpus, so the page is usually useful', () => {
    const placed = SET_TEXTS.filter((t) => hasExamPlacement(t.slug))
    expect(placed.length).toBeGreaterThan(SET_TEXTS.length / 2)
  })

  it('claims nothing for the UK GCSE boards, whose components were not read', () => {
    // prescribed-texts.ts records WHICH texts AQA, Edexcel, OCR and Eduqas set,
    // and not where on the paper. Inventing a component for them would undo the
    // whole point of this file, so a UK-GCSE-only text gets no placement.
    const ukOnly = SET_TEXTS.filter(
      (t) =>
        t.boards.length > 0 &&
        t.boards.every((b) => ['aqa', 'edexcel', 'ocr', 'eduqas'].includes(b)),
    )
    expect(ukOnly.length, 'no UK-only texts, so this proves nothing').toBeGreaterThan(5)
    for (const text of ukOnly) {
      expect(hasExamPlacement(text.slug), `${text.slug} claims a component we never read`).toBe(
        false,
      )
    }
  })

  it('claims nothing for a text with no board at all', () => {
    expect(hasExamPlacement('the-yellow-wallpaper')).toBe(false)
  })
})
