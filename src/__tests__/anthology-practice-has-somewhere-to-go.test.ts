import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { questionIdForPracticeType } from '@/components/marking/PracticeMarkingButton'
import { markingLink, resolvePrefill } from '@/lib/marking/submit-prefill'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'

/**
 * The exam-practice questions on the anthology pages, which had nowhere to go.
 *
 * THE DEFECT. Each of the ten Edexcel IGCSE Language A anthology pages ends with
 * an "Exam practice" section carrying three real questions - a 4-mark retrieval
 * and two 12-mark analysis tasks. They were rendered as text in a grey box. A
 * student who had just read the whole guide to their set text reached a question
 * about it and had nothing to click, while the paid AI marking tool sat two
 * navigations away behind an empty form.
 *
 * TWO THINGS THIS FILE GUARDS, both of which went wrong while building it.
 *
 * 1. THE PAGES ARE NOT THE SAME SHAPE. Six are bilingual with an
 *    `ar ? ... : ...` ternary, four are English-only with no `ar` in scope, and
 *    at least one carries a nested "model outline" list inside the same box. The
 *    first attempt replaced the whole block with a component and would have
 *    silently deleted that outline. TypeScript caught the English-only pages;
 *    nothing would have caught the deleted outline, which is why the button is
 *    now additive.
 *
 * 2. THE TITLES CAME OUT OF HTML. They are lifted from each page's `<h1>`, and
 *    two of them contained `&apos;`. Left undecoded, "The Explorer&apos;s
 *    Daughter" would have travelled to the marker as the name of the text the
 *    student was writing about. The assertion below is on the entity, because
 *    that is the mistake that was actually made.
 */

const BASE = join(process.cwd(), 'src/app/igcse/edexcel-lang/anthology')

const PAGES = readdirSync(BASE, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(BASE, d.name, 'page.tsx')))
  .map((d) => d.name)

describe('the mapping from a practice label to a mark-scheme question', () => {
  it.each([
    ['Retrieval - 4 marks', 'Q2'],
    ['Language analysis - 12 marks', 'Q4'],
    ['Structural analysis - 12 marks', 'Q4'],
  ])('%s maps to %s', (label, expected) => {
    expect(questionIdForPracticeType(label)).toBe(expected)
  })

  it('maps both 12-mark labels to the same question, because Q4 asks for both', () => {
    // Q4's task is "language AND structure". Splitting them across two question
    // ids would mark half of each answer against objectives it was not set on.
    expect(questionIdForPracticeType('Language analysis - 12 marks')).toBe(
      questionIdForPracticeType('Structural analysis - 12 marks'),
    )
  })

  it.each([
    ['Comparison - 22 marks', 'Q5 needs two texts and cannot be set from one page'],
    ['Transactional writing - 45 marks', 'a different section of the paper'],
    ['Some new question type', 'no mark allocation at all'],
    ['', 'empty'],
  ])('refuses to guess for "%s" (%s)', (label) => {
    // Failing safe is the point. A wrong question id would mark a 4-mark
    // retrieval answer against the 12-mark analysis grid and hand a child a
    // number against objectives they were not assessed on.
    expect(questionIdForPracticeType(label)).toBeNull()
  })

  it('only ever returns a question that exists on the 4EA1 scheme', () => {
    const scheme = MARK_SCHEMES['edexcel-igcse-lang-paper1']!
    for (const label of ['Retrieval - 4 marks', 'Language analysis - 12 marks']) {
      const id = questionIdForPracticeType(label)!
      expect(
        scheme.questions.some((q) => q.id === id),
        `${id} is not on the scheme`,
      ).toBe(true)
    }
  })

  it('maps to a question whose mark total matches the label', () => {
    // The mapping is derived FROM the marks, so this closes the loop: 4 marks
    // must land on a 4-mark question and 12 on a 12-mark one.
    const scheme = MARK_SCHEMES['edexcel-igcse-lang-paper1']!
    for (const [label, marks] of [
      ['Retrieval - 4 marks', 4],
      ['Language analysis - 12 marks', 12],
    ] as const) {
      const q = scheme.questions.find((x) => x.id === questionIdForPracticeType(label))!
      expect(q.totalMarks, label).toBe(marks)
    }
  })
})

describe('every anthology page', () => {
  it('there are ten of them, so the loop below is not vacuous', () => {
    expect(PAGES.length).toBe(10)
  })

  it.each(PAGES)('%s offers a way to get the practice marked', (name) => {
    const src = readFileSync(join(BASE, name, 'page.tsx'), 'utf8')
    expect(src).toContain('PracticeMarkingButton')
    // Three practice questions per page, three buttons.
    const calls = src.match(/await PracticeMarkingButton\(/g) ?? []
    expect(calls.length, `${name} has ${calls.length} buttons`).toBe(3)
  })

  it.each(PAGES)('%s names the text it is about, cleanly', (name) => {
    const src = readFileSync(join(BASE, name, 'page.tsx'), 'utf8')
    const m = /const ANTHOLOGY_TEXT_TITLE = (.+)\n/.exec(src)
    expect(m, `${name} has no ANTHOLOGY_TEXT_TITLE`).toBeTruthy()
    const literal = m![1]!
    // The bug that was actually made: the title is lifted from the page's h1,
    // and two of the ten contained &apos;.
    expect(literal, `${name} carries an HTML entity`).not.toMatch(/&[a-z]+;|&#\d+;/i)
    expect(literal.length, `${name} has an empty title`).toBeGreaterThan(4)
  })

  it.each(PAGES)('%s passes the title to every button', (name) => {
    const src = readFileSync(join(BASE, name, 'page.tsx'), 'utf8')
    const passes = src.match(/textTitle: ANTHOLOGY_TEXT_TITLE/g) ?? []
    expect(passes.length).toBe(3)
  })
})

describe('the link the button produces', () => {
  it('resolves back to the right paper, question and text', () => {
    // End to end: what the button builds is what the form reads.
    const href = markingLink({
      schemeId: 'edexcel-igcse-lang-paper1',
      questionId: questionIdForPracticeType('Language analysis - 12 marks')!,
      text: 'A Passage to Africa',
    })
    const boards = [
      {
        value: 'Edexcel',
        schemes: Object.values(MARK_SCHEMES).filter((s) => s.id.includes('edexcel')),
      },
    ]
    const out = resolvePrefill(
      new URLSearchParams(href.slice(href.indexOf('?') + 1)),
      boards,
      Object.values(MARK_SCHEMES),
    )
    expect(out.paper).toBe('edexcel-igcse-lang-paper1')
    expect(out.question).toBe('Q4')
    expect(out.studiedText).toBe('A Passage to Africa')
  })
})
