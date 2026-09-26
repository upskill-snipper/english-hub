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
 * an "Exam practice" section. Its questions were rendered as text in a grey box. A
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
    ['Language and structure - 12 marks', 'Q4'],
    // The Arabic label the bilingual pages show. Until 26 September 2026 the
    // pages passed it to the button and the pattern could not read it, so every
    // button vanished for Arabic readers.
    ['اللغة والبنية - ١٢ درجة', 'Q4'],
    ['Language and structure - 12-mark question', 'Q4'],
  ])('%s maps to %s', (label, expected) => {
    expect(questionIdForPracticeType(label)).toBe(expected)
  })

  it.each([
    ['Comparison - 22 marks', 'Q5 needs the unseen passage and cannot be set from one page'],
    ['المقارنة - ٢٢ درجة', 'the same, in Arabic'],
    // 4EA1 never sets a retrieval question on the anthology text: Q1 to Q3 are
    // on Text One, the unseen extract. This label used to map to Q2 and so
    // marked an answer about the anthology text against a question on another.
    ['Retrieval - 4 marks', 'no such question on the anthology text'],
    ['Transactional writing - 45 marks', 'a different section of the paper'],
    ['Some new question type', 'no mark allocation at all'],
    ['', 'empty'],
  ])('refuses to guess for "%s" (%s)', (label) => {
    // Failing safe is the point. A wrong question id hands a child a mark
    // against objectives they were not assessed on.
    expect(questionIdForPracticeType(label)).toBeNull()
  })

  it('only ever returns Q4, the 12-mark language-and-structure question', () => {
    const scheme = MARK_SCHEMES['edexcel-igcse-lang-paper1']!
    const q = scheme.questions.find(
      (x) => x.id === questionIdForPracticeType('Language and structure - 12 marks'),
    )!
    expect(q.id).toBe('Q4')
    expect(q.totalMarks).toBe(12)
  })
})

/** The label literal of examPractice.qN on a page, or null. */
function labelOf(src: string, q: string): string | null {
  const at = src.indexOf('const examPractice')
  if (at < 0) return null
  const block = src.slice(src.indexOf(`${q}: {`, at))
  const m = /\n\s*type:\s*(['"])((?:\.|(?!\1).)*)\1/.exec(block)
  return m ? m[2]! : null
}

describe('every anthology page', () => {
  it('there are ten of them, so the loop below is not vacuous', () => {
    expect(PAGES.length).toBe(10)
  })

  it.each(PAGES)('%s sets only questions the real paper asks', (name) => {
    // 4EA1 Paper 1 examines the anthology text in Q4 (language and structure
    // together, 12 marks) and Q5 (a comparison with an unseen passage, 22
    // marks), and in no other way. The pages set a 4-mark retrieval question
    // and split Q4 into a language-only and a structure-only question until
    // 26 September 2026. See the mark scheme file for the Pearson papers checked.
    const src = readFileSync(join(BASE, name, 'page.tsx'), 'utf8')
    const labels = ['q1', 'q2', 'q3'].map((q) => labelOf(src, q))
    expect(labels).toEqual([
      'Language and structure - 12 marks',
      'Language and structure - 12 marks',
      'Comparison - 22 marks',
    ])
    expect(src).not.toMatch(/'Retrieval - \d+ marks'|'(?:Language|Structural) analysis - 12 marks'/)
  })

  it.each(PAGES)('%s gives each markable question a button that renders', (name) => {
    // Counting calls is not enough: a call whose label maps to nothing renders
    // nothing, and the page looks finished. So each call's label is resolved
    // through the real mapping.
    const src = readFileSync(join(BASE, name, 'page.tsx'), 'utf8')
    const calls = [...src.matchAll(/await PracticeMarkingButton\(\{([\s\S]*?)\}\)/g)]
    expect(calls.length, `${name} has ${calls.length} buttons`).toBe(2)
    for (const [, args] of calls) {
      const type = /type:\s*([^,\n]+)/.exec(args!)?.[1]?.trim()
      // Always the English label: the displayed label may be Arabic.
      expect(type, `${name} passes ${type}`).toMatch(/^examPractice\.q\d\.type$/)
      const q = /examPractice\.(q\d)\.type/.exec(type!)![1]!
      expect(questionIdForPracticeType(labelOf(src, q) ?? ''), `${name} ${q}`).toBe('Q4')
    }
  })

  it.each(PAGES)('%s names the text it is about, cleanly', (name) => {
    const src = readFileSync(join(BASE, name, 'page.tsx'), 'utf8')
    // `\r?\n`, not `\n`. This repository carries mixed line endings and git
    // normalises them on checkout, so on a CRLF file this matched NOTHING:
    // JavaScript's `.` does not match `\r`, so `(.+)\n` can never reach the
    // newline. It passed on LF and then failed for all ten pages after a merge.
    const m = /const ANTHOLOGY_TEXT_TITLE = (.+?)\r?\n/.exec(src)
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
    expect(passes.length).toBe(2)
  })
})

describe('the link the button produces', () => {
  it('resolves back to the right paper, question and text', () => {
    // End to end: what the button builds is what the form reads.
    const href = markingLink({
      schemeId: 'edexcel-igcse-lang-paper1',
      questionId: questionIdForPracticeType('Language and structure - 12 marks')!,
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
