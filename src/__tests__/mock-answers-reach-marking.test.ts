import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  resolveHandoffQuestion,
  resolveHandoffTarget,
  resolveMarkingBoard,
} from '@/lib/marking/mock-handoff'
import { MARK_SCHEMES, getMarkScheme } from '@/lib/marking/mark-schemes'
import { findSchemeQuestion } from '@/lib/marking/scheme-question'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { resolveDraftQuestion } from '@/lib/marking/submit-prefill'

/**
 * A finished mock had nowhere to go (SF-4).
 *
 * THE DEFECT. The 178 mock papers are the biggest free surface in the product.
 * A written answer on one is never scored - the results view calls it
 * "self-marked against the mark scheme", the submit handler keeps the answers
 * in component state and writes them nowhere, and every link on the results
 * view goes back to /mock-exams. A student finishes a paper at the exact moment
 * they most want a mark, and the product shows them the way out.
 *
 * THE MECHANISM ALREADY EXISTED. `draft-store.ts` carries an essay through a
 * sign-in round trip in sessionStorage - tab-scoped, consumed on read, because
 * it is a child's schoolwork on a possibly shared machine. Reusing it means one
 * way of moving an essay about, not two.
 *
 * WHAT THE RESOLVER IS CAREFUL ABOUT, and why the care is the point. The mock
 * papers and the mark schemes are separate corpora with different board
 * spellings: `AQA`, `WJEC`, `Pearson Edexcel`, `AQA / Edexcel IGCSE`, `All`,
 * `IAL`. Marking a Literature answer against a Language grid scores it on the
 * wrong objectives and hands a student a number they may act on. So:
 *
 *   - a subject mismatch offers NO scheme, rather than the nearest one
 *   - a paper-number mismatch offers the nearest and SAYS so
 *   - a paper naming two boards is never reported as an exact match
 *   - an unrecognised spelling pre-selects nothing
 */

const ROOT = process.cwd()
const PAGE = readFileSync(join(ROOT, 'src/app/mock-exams/[id]/page.tsx'), 'utf8')
const code = PAGE.replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
  .replace(/\/\/.*/g, '')

describe('board spellings', () => {
  it.each([
    ['AQA', 'AQA'],
    ['Edexcel', 'Edexcel'],
    ['Pearson Edexcel', 'Edexcel'],
    ['OCR', 'OCR'],
    ['WJEC', 'Eduqas'],
    ['Eduqas', 'Eduqas'],
  ])('maps %s to %s', (spelling, expected) => {
    expect(resolveMarkingBoard(spelling)).toBe(expected)
  })

  it.each(['All', 'IAL', 'General (cross-board)'])(
    'refuses to guess a board from "%s"',
    (spelling) => {
      // These name no single board. Pre-selecting one would mark the answer
      // against a grid the student does not sit.
      expect(resolveMarkingBoard(spelling)).toBeNull()
    },
  )
})

describe('choosing a mark scheme', () => {
  it('finds the exact paper when there is one', () => {
    const target = resolveHandoffTarget({
      examBoard: 'AQA',
      paperType: 'language',
      paperNumber: 1,
    })
    expect(target.exact).toBe(true)
    expect(target.note).toBeNull()
    expect(MARK_SCHEMES[target.schemeId!]).toBeTruthy()
  })

  it('never crosses subjects, even to offer something', () => {
    // AO2 in Literature and AO2 in Language are different objectives. A mark
    // from the wrong one is not a rough guide, it is wrong. Cambridge has four
    // LANGUAGE schemes and no Literature one, so a Literature answer gets no
    // scheme rather than a Language grid.
    const target = resolveHandoffTarget({
      examBoard: '0500',
      paperType: 'literature',
      paperNumber: 1,
    })
    expect(target.schemeId).toBeNull()
    expect(target.note).toMatch(/literature/i)
  })

  it('finds the Cambridge schemes, which the marking page could not', () => {
    // THE LIVE DEFECT THIS UNCOVERED. The four Cambridge schemes carry
    // `board: 'Cambridge'` and `'Cambridge (9-1)'`. Neither contains 0500 or
    // 0990 - the only tokens that tell the syllabuses apart - so the marking
    // page's board picker matched zero schemes for both, rendered them
    // `disabled`, and told the reader they were "coming soon". They have
    // existed all along, and Cambridge IGCSE is the Gulf wedge.
    for (const [spelling, expectedId] of [
      ['0500', 'cambridge-0500-paper1'],
      ['0990', 'cambridge-0990-paper1'],
    ] as const) {
      const target = resolveHandoffTarget({
        examBoard: spelling,
        paperType: 'language',
        paperNumber: 1,
      })
      expect(target.schemeId, `${spelling} resolved to nothing`).toBe(expectedId)
      expect(MARK_SCHEMES[target.schemeId!]).toBeTruthy()
    }
  })

  it('says so when it has fallen back to the nearest paper', () => {
    // Offering another paper silently would put the answer against the wrong
    // grid. This used AQA Literature Paper 2, which had no scheme until
    // 9 October 2026; since then every board's Papers 1 and 2 have one, so the
    // fallback is reached here with a paper number the type does not allow.
    const target = resolveHandoffTarget({
      examBoard: 'AQA',
      paperType: 'literature',
      paperNumber: 3 as unknown as 1 | 2,
    })
    expect(target.exact).toBe(false)
    expect(target.note).toBeTruthy()
    expect(target.note).toMatch(/Check it fits/)
  })

  it('finds AQA Literature Paper 2 exactly, now that it has a scheme', () => {
    const target = resolveHandoffTarget({
      examBoard: 'AQA',
      paperType: 'literature',
      paperNumber: 2,
    })
    expect(target.exact).toBe(true)
    expect(target.schemeId).toBe('aqa-lit-paper2')
  })

  it.each([
    ['literature', 1, 'ocr-lit-component01'],
    ['literature', 2, 'ocr-lit-component02'],
    ['language', 1, 'ocr-lang-component01'],
    ['language', 2, 'ocr-lang-component02'],
  ] as const)('finds OCR %s Paper %i exactly, though OCR calls it a component', (type, n, id) => {
    // Until 9 October 2026 "\b2\b" never matched "Component 02", and an OCR
    // Paper 2 answer went to the Component 01 scheme.
    const target = resolveHandoffTarget({ examBoard: 'OCR', paperType: type, paperNumber: n })
    expect(target.exact).toBe(true)
    expect(target.schemeId).toBe(id)
  })

  it('never calls a two-board paper an exact match', () => {
    // "AQA / Edexcel IGCSE" matches an AQA scheme, but the paper is not
    // necessarily AQA's.
    const target = resolveHandoffTarget({
      examBoard: 'AQA / Edexcel IGCSE',
      paperType: 'language',
      paperNumber: 1,
    })
    expect(target.exact).toBe(false)
    expect(target.note).toMatch(/Change it if that is not yours/)
  })

  it('pre-selects nothing at all for an unrecognised board', () => {
    const target = resolveHandoffTarget({
      examBoard: 'All',
      paperType: 'language',
      paperNumber: 1,
    })
    expect(target.board).toBeNull()
    expect(target.schemeId).toBeNull()
    expect(target.note).toMatch(/Choose the board and paper yourself/)
  })
})

describe('the results view', () => {
  it('offers the button, which it did not', () => {
    expect(code).toContain('onGetMarked')
    expect(code).toContain("t('mock.get_this_marked')")
  })

  it('offers it only on written answers', () => {
    // A multiple-choice question is already marked on the same screen, and
    // sending one to an essay marker would spend a trial use on a question
    // that has an objective answer.
    expect(code).toMatch(/!q\.isMultipleChoice && hasAnswer/)
  })

  it('reuses the existing draft store rather than inventing a second one', () => {
    expect(code).toContain('saveMarkingDraft')
    expect(code).not.toMatch(/localStorage\.setItem/)
  })

  it('carries the inexact-match note where the reader will see it', () => {
    // The note goes into the title field, which /marking/submit renders back.
    // A silent pre-selection of the wrong paper is the failure this avoids.
    expect(code).toMatch(/handoff\.note \? ` \(\$\{handoff\.note\}\)` : ''/)
  })

  it('sends the question prompt as the question answered, and the scheme id as the question', () => {
    // "Q3" tells the marker nothing, so the prompt travels. Until 23 October
    // 2026 it travelled as `question`, the question's id on the mark scheme,
    // and this test asserted exactly that line. The marker could not resolve
    // it: the essay was saved and never marked.
    expect(code).toContain('questionText: question.prompt || question.label')
    expect(code).toContain("question: resolveHandoffQuestion(handoff, question) ?? ''")
    expect(code).not.toMatch(/\bquestion: question\.prompt/)
  })
})

// ─── Which question the answer is marked against ─────────────────────────────
//
// 19 September to 23 October 2026: every answer handed over carried the
// question's wording as its id. The marking form saved it, and marking stopped
// at the prompt builder with "Unknown question" before any AI call, so nothing
// recorded it. A new learner's AQA Paper 1 answer was saved three times on
// 23 October and none of the three could be marked. These checks run over the
// papers the mock page actually defines, so a paper added later is held to the
// same rule.

const MOCK_Q1_PROMPT =
  'Read again the first part of the source, from lines 1 to 5.\n\nList four things about the setting from this part of the source.'

interface ParsedPaper {
  id: string
  examBoard: string
  paperType: 'language' | 'literature'
  paperNumber: 1 | 2
  questions: { number: number; marks: number; mc: boolean }[]
}

/** EXAM_PAPERS as the page writes it: papers at two spaces, fields at four, question fields at eight. */
function parseMockPapers(source: string): ParsedPaper[] {
  const start = source.indexOf('const EXAM_PAPERS')
  const block = source.slice(start, source.indexOf('\n}\n', start))
  const heads = [...block.matchAll(/^ {2}'([a-z0-9-]+)': \{$/gm)]
  return heads.map((head, i) => {
    const chunk = block.slice(head.index, heads[i + 1]?.index ?? block.length)
    const field = (name: string) =>
      chunk.match(new RegExp(`\\n {4}${name}: '?([^',\\n]+)'?,`))?.[1] ?? ''
    return {
      id: head[1],
      examBoard: field('examBoard'),
      paperType: field('paperType') as ParsedPaper['paperType'],
      paperNumber: Number(field('paperNumber')) as ParsedPaper['paperNumber'],
      questions: chunk
        .split(/\n {8}number: /)
        .slice(1)
        .map((q) => ({
          number: Number(q.match(/^(\d+),/)?.[1]),
          marks: Number(q.match(/\n {8}marks: (\d+),/)?.[1]),
          mc: /\n {8}isMultipleChoice: true/.test(q),
        })),
    }
  })
}

describe('which question the answer is marked against', () => {
  const papers = parseMockPapers(PAGE)

  it('reads every mock paper the page defines', () => {
    // A parse that found nothing would let every check below pass.
    expect(papers.length).toBeGreaterThanOrEqual(8)
    expect(papers.map((p) => p.id)).toEqual(
      expect.arrayContaining(['aqa-lang-p1', 'aqa-lang-p2', 'aqa-lit-p1', 'aqa-lit-p2']),
    )
    for (const p of papers) {
      expect(p.questions.length, p.id).toBeGreaterThan(0)
      for (const q of p.questions) {
        expect(Number.isFinite(q.number) && Number.isFinite(q.marks), `${p.id}`).toBe(true)
      }
    }
  })

  it('hands every written answer to a question the marker accepts, or to none', () => {
    let handed = 0
    for (const paper of papers) {
      const target = resolveHandoffTarget(paper)
      for (const q of paper.questions.filter((x) => !x.mc)) {
        const id = resolveHandoffQuestion(target, q)
        if (id === null) continue
        handed++
        const scheme = getMarkScheme(target.schemeId!)!
        const found = findSchemeQuestion(scheme, id)
        expect(found, `${paper.id} Q${q.number}`).toBeTruthy()
        expect(found!.totalMarks, `${paper.id} Q${q.number} marks`).toBe(q.marks)
        // The marker itself, not a copy of its rule.
        expect(() =>
          buildMarkingPrompt({ scheme, questionId: id, questionText: 'Q', essay: 'E' }),
        ).not.toThrow()
      }
    }
    expect(handed).toBeGreaterThanOrEqual(13)
  })

  it.each([
    ['aqa-lang-p1', { 1: 'Q1', 2: 'Q2', 3: 'Q3', 4: 'Q4', 5: 'Q5' }],
    ['aqa-lang-p2', { 2: 'Q2', 3: 'Q3', 4: 'Q4', 5: 'Q5' }],
    ['aqa-lit-p1', { 1: 'Section A', 2: 'Section B' }],
    // Question 3 is unseen poetry for 32 marks. The scheme splits it into
    // Section C (a) and (b), so neither is chosen for the learner.
    ['aqa-lit-p2', { 1: 'Section A', 2: 'Section B', 3: null }],
  ] as const)('%s', (paperId, expected) => {
    const paper = papers.find((p) => p.id === paperId)!
    const target = resolveHandoffTarget(paper)
    const got = Object.fromEntries(
      paper.questions
        .filter((q) => !q.mc)
        .map((q) => [q.number, resolveHandoffQuestion(target, q)]),
    )
    expect(got).toEqual(expected)
  })

  it('chooses nothing on a paper with no scheme of its own', () => {
    for (const paper of papers.filter((p) => p.examBoard === 'IAL')) {
      const target = resolveHandoffTarget(paper)
      for (const q of paper.questions) expect(resolveHandoffQuestion(target, q)).toBeNull()
    }
  })

  it('chooses nothing on the nearest paper, only on the paper’s own', () => {
    const target = resolveHandoffTarget({
      examBoard: 'AQA',
      paperType: 'literature',
      paperNumber: 3 as unknown as 1 | 2,
    })
    expect(target.exact).toBe(false)
    expect(resolveHandoffQuestion(target, { number: 1, marks: 34 })).toBeNull()
  })

  it('on a numbered paper, needs the number and the marks, never the marks alone', () => {
    const target = resolveHandoffTarget({ examBoard: 'AQA', paperType: 'language', paperNumber: 1 })
    expect(resolveHandoffQuestion(target, { number: 2, marks: 12 })).toBeNull()
    // Q2 and Q3 are both worth 8; a Q7 must not be given either.
    expect(resolveHandoffQuestion(target, { number: 7, marks: 8 })).toBeNull()
  })

  it('the wording itself was never a question the marker knows', () => {
    expect(findSchemeQuestion(getMarkScheme('aqa-lang-paper1')!, MOCK_Q1_PROMPT)).toBeUndefined()
  })
})

describe('restoring a handed-over answer on the marking form', () => {
  const schemes = Object.values(MARK_SCHEMES)

  it('keeps a question the paper holds, with the wording sent beside it', () => {
    expect(
      resolveDraftQuestion(
        { paper: 'aqa-lang-paper1', question: 'Q1', questionText: MOCK_Q1_PROMPT },
        schemes,
      ),
    ).toEqual({ question: 'Q1', questionText: MOCK_Q1_PROMPT })
  })

  it('moves wording found in the question slot to the question answered', () => {
    // The shape every handoff had until 23 October 2026.
    expect(
      resolveDraftQuestion({ paper: 'aqa-lang-paper1', question: MOCK_Q1_PROMPT }, schemes),
    ).toEqual({ question: '', questionText: MOCK_Q1_PROMPT })
  })

  it('leaves a sign-in round trip as it was', () => {
    expect(resolveDraftQuestion({ paper: 'aqa-lang-paper1', question: 'Q3' }, schemes)).toEqual({
      question: 'Q3',
      questionText: '',
    })
  })

  it('drops a question that belongs to another paper', () => {
    // Section A is a Literature question; this paper is Language.
    expect(
      resolveDraftQuestion(
        { paper: 'aqa-lang-paper1', question: 'Section A', questionText: 'Some wording' },
        schemes,
      ),
    ).toEqual({ question: '', questionText: 'Some wording' })
  })
})

describe('the label', () => {
  it('exists in all three languages', () => {
    const dict = readFileSync(join(ROOT, 'src/lib/i18n/dictionary.ts'), 'utf8')
    const at = dict.indexOf("'mock.get_this_marked'")
    expect(at).toBeGreaterThan(-1)
    const entry = dict.slice(at, at + 220)
    for (const locale of ['en:', 'ar:', 'es:']) expect(entry).toContain(locale)
  })
})

describe('the marking page’s own board picker', () => {
  const SUBMIT = readFileSync(join(ROOT, 'src/app/marking/submit/page.tsx'), 'utf8')

  it('matches on the scheme ID as well as the board name', () => {
    // Without this, both Cambridge boards render disabled and say "coming
    // soon" while four Cambridge schemes sit in the code.
    const fn = SUBMIT.slice(SUBMIT.indexOf('function buildBoardOptions'))
    expect(fn.slice(0, 1600)).toMatch(/scheme\.id\.toLowerCase\(\)/)
  })

  it('would still mark every board unavailable if the schemes went', () => {
    // The guard must not be satisfiable by an empty catalogue: if MARK_SCHEMES
    // were empty the picker would disable everything and this file should say
    // so rather than pass.
    expect(Object.keys(MARK_SCHEMES).length).toBeGreaterThan(15)
  })
})
