// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import ts from 'typescript'

import { allMockExamPapers } from '@/data/mock-exams'
import { mockExamPapers } from '@/data/mock-exams/base'
import { expandedMockExams } from '@/data/mock-exams/index'
import { aqaLitP2Papers } from '@/data/mock-exams/aqa-lit-p2-a'
import { aqaLitMockExams } from '@/data/mock-exams-aqa-lit'
import { caieMockExams } from '@/data/mock-exams-caie'
import { edexcelMockExams } from '@/data/mock-exams-edexcel'
import { ialMockExams } from '@/data/mock-exams-ial'
import { wjecMockExams } from '@/data/mock-exams-wjec'
import { limitsFor } from '@/lib/study-guides/fair-dealing'
import { wordCount } from '@/lib/study-guides/validate'
import { POEM_WORDS } from './helpers/poets'
import { quotationsOn } from './helpers/quotations'

/**
 * The AQA Literature Paper 2 mocks students are given are set as AQA sets
 * 8702/2, print the anthology as AQA prints it, and quote truly.
 *
 * WHY IT EXISTS (9 October 2026). src/data/mock-exams/aqa-lit-p2-a.ts held
 * five papers in AQA's shape, but three shared their ids with 100-mark papers
 * in src/data/mock-exams-aqa-lit.ts, which the aggregator kept instead, so
 * students were given those. Checking the five before serving them found
 * Remains, Poppies and Exposure misquoted in their model answers, lines of An
 * Inspector Calls that are not in the play, nine quotations of the play over
 * the house limit for a text in copyright, and an editor's note to the writer
 * printed in five answers. The docblock of that file lists them.
 *
 * WIDENED the same day, when correcting those misquotations into the poets'
 * real words was found to have taken more of Remains, Poppies and Bayonet
 * Charge than the house rule allows a page (FAIR_DEALING.poemShare), which no
 * guard measured on a mock paper. Every quotation in Section B is now placed:
 * in the printed poem, a title, NAMED, or TAKEN under the poem in copyright
 * it is from; and each poem's TAKEN list, counted once, is held to its share.
 *
 * WHAT IT CANNOT SEE. Remains, Poppies, Bayonet Charge, Storm on the Island and
 * An Inspector Calls are in copyright and not held, so their quotations are
 * checked here only for length, share and the misquotations already found;
 * they were checked against AQA's anthology and a published script of the play
 * by hand on 9 October 2026. For the same reason it cannot see a poem's words
 * used without quotation marks, or tell whether a quotation listed under one
 * poem is really from it. The hand check counted both against the anthology.
 */

const PAPERS = aqaLitP2Papers.map((p) => p.id)

/** The `lines` of a poem page's data object, read with the TypeScript parser. */
function pageLines(file: string, dataName: string): string[] {
  const src = readFileSync(join(process.cwd(), file), 'utf8')
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const out: string[] = []
  const visit = (n: ts.Node) => {
    if (
      ts.isVariableDeclaration(n) &&
      n.name.getText() === dataName &&
      n.initializer &&
      ts.isObjectLiteralExpression(n.initializer)
    ) {
      const prop = n.initializer.properties.find(
        (p) => ts.isPropertyAssignment(p) && p.name.getText() === 'lines',
      ) as ts.PropertyAssignment
      for (const el of (prop.initializer as ts.ArrayLiteralExpression).elements) {
        const text = (el as ts.ObjectLiteralExpression).properties.find(
          (p) => ts.isPropertyAssignment(p) && p.name.getText() === 'text',
        ) as ts.PropertyAssignment
        const init = text.initializer
        out.push(ts.isStringLiteralLike(init) ? init.text : init.getText())
      }
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  return out.filter((l) => l.trim())
}

const HELD: Record<string, string[]> = {
  Exposure: pageLines(
    'src/app/revision/poetry/power-and-conflict/exposure/page.tsx',
    'exposureData',
  ),
  Ozymandias: pageLines(
    'src/app/revision/poetry/power-and-conflict/ozymandias/page.tsx',
    'ozymandias',
  ),
}
const IN_COPYRIGHT = ['Remains', 'Poppies', 'Bayonet Charge', 'Storm on the Island']

/** Case, punctuation and apostrophe shapes forgiven; words not. */
const words = (s: string) =>
  ` ${s
    .toLowerCase()
    .replace(/(\p{L})-(?=\p{L})/gu, '$1')
    .replace(/['‘’]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()} `

const quotes = (t: string) => [...t.matchAll(/"([^"]+)"/g)].map((m) => m[1]!.trim())

/** A quotation that borrows three running words from `poem` but is not in it. */
function misquotes(answers: string[], poem: string): string[] {
  const hay = words(poem)
  const bad: string[] = []
  for (const a of answers)
    for (const q of quotes(a)) {
      const parts = q.split(/\s*(?:\.\.\.|\s\/\s)\s*/).map(words)
      if (parts.every((p) => hay.includes(p))) continue
      const w = words(q).trim().split(' ')
      const borrows = w.some(
        (_, i) => i + 3 <= w.length && hay.includes(` ${w.slice(i, i + 3).join(' ')} `),
      )
      if (borrows) bad.push(q)
    }
  return bad
}

const sectionB = (id: string) => aqaLitP2Papers.find((p) => p.id === id)!.sections[1]!.questions[0]!

/**
 * Every quotation each paper's Section B takes from a poem in copyright, under
 * the poem it is from, checked against AQA's anthology on 9 October 2026. A
 * quotation listed here is counted here even if the printed poem also has it:
 * the "we" in 01 is Armitage's pronoun, though Owen uses the word too.
 */
const TAKEN: Record<string, Record<string, string[]>> = {
  'aqa-lit-p2-01': {
    Remains: [
      'On another occasion',
      'probably armed, possibly not',
      'we',
      'I',
      'blood-shadow',
      'dug in behind enemy lines',
      'here and now',
      'my bloody hands',
    ],
  },
  'aqa-lit-p2-02': {
    'Storm on the Island': [
      'We are prepared',
      'we',
      'you might think',
      'pummels',
      'strafes',
      'salvo',
      'bombarded',
      'huge nothing',
      'huge nothing that we fear',
    ],
  },
  'aqa-lit-p2-03': {
    Poppies: [
      'pinned',
      'crimped petals',
      'bias binding',
      'Sellotape',
      'Sellotape bandaged',
      'cat hairs',
      'being Eskimos',
      'you were little',
      'like a wishbone',
    ],
    'Bayonet Charge': [
      'Suddenly he awoke',
      'awoke',
      'patriotic tear',
      'yellow hare',
      'rolled like a flame',
      'like a flame',
      'King, honour, human dignity, etcetera',
      'etcetera',
      'Dropped like luxuries',
      'touchy dynamite',
    ],
  },
  'aqa-lit-p2-04': {
    Remains: [
      'we',
      'legs it',
      'somebody else',
      'all three of us',
      'I',
      'flush',
      'here in my head',
      'Dug in',
      'dug in behind enemy lines',
      'bloody',
    ],
    'Bayonet Charge': [
      'Suddenly he awoke and was running',
      'Suddenly he awoke',
      'he',
      'plunged past',
      'King, honour, human dignity, etcetera',
      'etcetera',
      'Dropped like luxuries',
      'luxuries',
      'blue crackling air',
    ],
  },
  'aqa-lit-p2-05': {
    Poppies: [
      'Sellotape',
      'Sellotape bandaged',
      'white cat hairs',
      'cat hairs',
      'you',
      'like a treasure chest',
    ],
  },
}

/** Words in quotation marks that name something rather than quote a poem. */
const NAMED: Record<string, string> = {
  Stormont: 'the parliament the title "Storm on the Island" is read as hiding',
  storm: 'a word of the title "Storm on the Island", named as a symbol',
  island: 'a word of the title "Storm on the Island", named as a symbol',
}

const TITLES = [
  'Exposure',
  'Ozymandias',
  'Remains',
  'Poppies',
  'Bayonet Charge',
  'Storm on the Island',
  'Power and conflict',
]

type Section = (typeof aqaLitP2Papers)[number]['sections'][number]

/** Every string in a section but the printed poem itself. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v)
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out))
  else if (v && typeof v === 'object')
    for (const [k, x] of Object.entries(v)) if (k !== 'extract') strings(x, out)
  return out
}

/** Section B's quotations sorted: those TAKEN, by poem, and those placed nowhere. */
function place(section: Section, lists: Record<string, string[]>) {
  const printed = words(section.questions[0]!.extract ?? '')
  const taken = new Map<string, Set<string>>()
  const unplaced: string[] = []
  for (const q of strings(section).flatMap(quotes)) {
    const key = words(q)
    const poem = Object.keys(lists).find((p) => lists[p]!.some((t) => words(t) === key))
    if (poem) {
      taken.set(poem, (taken.get(poem) ?? new Set()).add(key))
      continue
    }
    if ([...TITLES, ...Object.keys(NAMED)].some((t) => words(t) === key)) continue
    const parts = q.split(/\s*(?:\.\.\.|…|\s\/\s)\s*/).map(words)
    if (printed.trim() && parts.every((p) => printed.includes(p))) continue
    unplaced.push(q)
  }
  return { taken, unplaced }
}

/**
 * The words a list of quotations takes from a poem, counted once, as
 * quotedTotals in src/lib/study-guides/validate.ts counts a study guide: a
 * quotation inside a longer one adds nothing. Containment is by whole words
 * here, so that "I" is not found inside "possibly".
 */
function countedOnce(list: string[]): number {
  const flat = (s: string) =>
    ` ${s
      .toLowerCase()
      .replace(/['‘’]/g, '')
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .trim()} `
  const spans = [...new Set(list.flatMap((q) => q.split(/\s*(?:\.\.\.|…)\s*/)))].sort(
    (a, b) => wordCount(b) - wordCount(a),
  )
  const kept: string[] = []
  for (const s of spans) if (!kept.some((k) => flat(k).includes(flat(s)))) kept.push(s)
  return kept.reduce((t, s) => t + wordCount(s), 0)
}

const SHARES = Object.entries(TAKEN).flatMap(([id, poems]) =>
  Object.keys(poems).map((poem) => [id, poem] as const),
)

describe('AQA Literature Paper 2 mocks (8702/2)', () => {
  it('are the papers students are given, whatever other bank holds an id', () => {
    for (const p of aqaLitP2Papers) expect(allMockExamPapers.find((x) => x.id === p.id)).toBe(p)
  })

  it('share no id with any other paper in any bank', () => {
    const ids = [
      ...mockExamPapers,
      ...aqaLitMockExams,
      ...wjecMockExams,
      ...edexcelMockExams,
      ...caieMockExams,
      ...expandedMockExams,
      ...ialMockExams,
    ].map((p) => p.id)
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([])
  })

  it.each(PAPERS)('%s is 96 marks in 135 minutes: 34, 30, and 24 + 8', (id) => {
    const p = aqaLitP2Papers.find((x) => x.id === id)!
    expect(p.code).toBe('8702/2')
    expect(p.totalMarks).toBe(96)
    expect(p.totalTimeMinutes).toBe(135)
    expect(p.sections.map((s) => s.questions.map((q) => q.marks))).toEqual([[34], [30], [24, 8]])
    expect(p.sections.map((s) => s.totalMarks)).toEqual([34, 30, 32])
  })

  it.each(PAPERS)('%s asks Section B as AQA does, printing the named poem only if it may', (id) => {
    const q = sectionB(id)
    const named =
      /^Compare how poets present .+ in "([^"]+)" and in one other poem from "Power and conflict"\.\n\n\[30 marks\]$/.exec(
        q.questionText,
      )?.[1]
    expect(named, q.questionText).toBeTruthy()
    if (HELD[named!]) {
      const printed = (q.extract ?? '')
        .split('\n')
        .slice(3)
        .filter((l) => l.trim())
      expect(printed).toEqual(HELD[named!])
      expect(q.extractSource).toContain(`"${named}", as printed in AQA's Past and present`)
    } else {
      expect(IN_COPYRIGHT).toContain(named)
      expect(q.extract).toBeUndefined()
      expect(aqaLitP2Papers.find((p) => p.id === id)!.sections[1]!.description).toContain(
        `"${named}" is still in copyright`,
      )
    }
    expect(q.markScheme).toContainEqual(expect.stringMatching(/^These model answers choose "/))
  })

  it('quotes each printed poem as printed', () => {
    let checked = 0
    for (const id of PAPERS) {
      const q = sectionB(id)
      if (!q.extract) continue
      checked++
      expect(misquotes(Object.values(q.modelAnswers ?? {}).flat(), q.extract)).toEqual([])
    }
    expect(checked).toBe(3)
  })

  it('catches a misquotation of a printed poem, and passes the real line', () => {
    const oz = sectionB('aqa-lit-p2-05').extract!
    expect(misquotes(['"The lone and level sands stretches far away"'], oz)).toHaveLength(1)
    expect(misquotes(['"The lone and level sands stretch far away"'], oz)).toEqual([])
  })

  it('quotes no text in copyright at 15 words or more', () => {
    const printed = aqaLitP2Papers
      .flatMap((p) => p.sections.flatMap((s) => s.questions.map((q) => q.extract ?? '')))
      .map(words)
    const long = quotationsOn('src/data/mock-exams/aqa-lit-p2-a.ts').filter(
      (q) => q.words >= 15 && !printed.some((t) => t.includes(words(q.text))),
    )
    expect(long.map((q) => `${q.line}: ${q.text}`)).toEqual([])
  })

  it('keeps out the misquotations found on 9 October 2026', () => {
    const data = JSON.stringify(aqaLitP2Papers)
    for (const wrong of [
      'dug in behind my eyes',
      'we got sent out',
      'smoothed down your collar',
      'bandaged around his hand',
      'lean against it like a wishbone',
      'playing at being Eskimos',
      'glowing coals',
      'plastic toys',
      'the poppy petals',
      'the ones I knew are the ones who died',
      'her own people',
      'It burnt her inside out',
      'war is inevitable',
      'gave herself ridiculous airs',
      'Look on my Works',
      'colossal Wreck',
      'cite exactly as printed',
      '(King, honour',
      'yelling alarm)',
    ])
      expect(data, wrong).not.toContain(wrong)
  })

  it('keeps out the claims about the poems found untrue on 9 October 2026', () => {
    const data = JSON.stringify(aqaLitP2Papers)
    for (const wrong of [
      'The parenthetical',
      'parentheses themselves',
      "around her son's finger",
      'The final image - the mother',
      'straddling a line break',
      'from past tense narration',
      'hidden acrostic',
    ])
      expect(data, wrong).not.toContain(wrong)
  })

  it.each(PAPERS)('%s marks with AQA’s levels', (id) => {
    const p = aqaLitP2Papers.find((x) => x.id === id)!
    const ms = p.sections.flatMap((s) =>
      s.questions.map((q) =>
        Array.isArray(q.markScheme) ? q.markScheme.join(' | ') : (q.markScheme ?? ''),
      ),
    )
    expect(ms[0]).toContain('Level 6 (26-30)')
    expect(ms[0]).toContain('AO4: high performance 4 marks, intermediate 2-3, threshold 1')
    expect(ms[1]).toContain('Level 1 (1-5)')
    expect(ms[2]).toContain('Level 6 (21-24)')
    expect(ms[3]).toContain('Level 4 (7-8)')
    expect(ms.join(' ')).not.toMatch(/\bBand \d/)
    for (const s of p.sections)
      for (const q of s.questions)
        expect(Object.keys(q.modelAnswers ?? {})).toEqual(['Grade 4-5', 'Grade 6-7', 'Grade 8-9'])
  })
})

describe('AQA Literature Paper 2 mocks take no more of a poem in copyright than its share', () => {
  const secB = (id: string) => aqaLitP2Papers.find((p) => p.id === id)!.sections[1]!

  it.each(PAPERS)('%s places every quotation in Section B', (id) => {
    expect(place(secB(id), TAKEN[id] ?? {}).unplaced).toEqual([])
  })

  it.each(PAPERS)('%s still contains every quotation TAKEN lists for it', (id) => {
    const { taken } = place(secB(id), TAKEN[id] ?? {})
    for (const [poem, list] of Object.entries(TAKEN[id] ?? {}))
      expect(
        list.filter((t) => !taken.get(poem)?.has(words(t))),
        poem,
      ).toEqual([])
  })

  it.each(SHARES)('%s takes no more of %s than FAIR_DEALING.poemShare', (id, poem) => {
    expect(IN_COPYRIGHT).toContain(poem)
    expect(POEM_WORDS[poem]).toBeGreaterThan(0)
    const limit = limitsFor('poem', { words: POEM_WORDS[poem] }).totalWords
    expect(countedOnce(TAKEN[id]![poem]!)).toBeLessThanOrEqual(limit)
  })

  it('fails a quotation nobody has placed, and counts each word once', () => {
    const section = structuredClone(secB('aqa-lit-p2-01'))
    const q = section.questions[0]!
    q.modelAnswers = {
      ...q.modelAnswers,
      'Grade 4-5': `${q.modelAnswers!['Grade 4-5']} "a line nobody placed"`,
    }
    expect(place(section, TAKEN['aqa-lit-p2-01']!).unplaced).toEqual(['a line nobody placed'])
    expect(countedOnce(['probably armed, possibly not', 'possibly not', 'I'])).toBe(5)
    expect(countedOnce(['blood-shadow', 'blood-shadow', 'here and now'])).toBe(5)
  })
})
