// @vitest-environment node
import { describe, it, expect, vi } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
import ts from 'typescript'
import { createElement, type ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { poemLineNumbers, type PoemData } from '@/components/study/InteractivePoemViewer'
import DoNotGoGentlePage from '@/app/resources/revision-notes/do-not-go-gentle-into-that-good-night/page'

/**
 * Every language-device card in the poem viewer names, and highlights, the line
 * its example comes from.
 *
 * THE DEFECT, found site-wide on 2 October 2026. The viewer shows each device
 * card with "Line N", where N is poemLineNumbers(poem.lines)[d.lineRef], and
 * highlights row d.lineRef when the Language tab is open. Since 26 September
 * `lineRef` has been an index into poem.lines, the blank rows between stanzas
 * included (see poemLineNumbers). Many pages had been written with lineRef as a
 * line number counted from 1, or as an index that skipped the stanza breaks, so
 * their cards named and lit the line after the one they quoted, or a later
 * one, or a stanza break, which shows no number at all. That day the If- page
 * was found with four of six cards wrong and fixed alone
 * (if-pages-quote-the-held-text.test.ts pins it). This test, written the same
 * day, found 118 more on 39 of the other 63 pages. 97 named or lit the wrong
 * row, 14 of them a stanza break and 4 a row past the end of the poem: every
 * card on the IGCSE Ozymandias page was a line late, and the AQA Prelude's
 * were up to seventeen lines out. The other 21 printed words that are in no
 * line of the poem. Twenty were the site's descriptions ("Traditional
 * Petrarchan sonnet", "the entire poem") between the quotation marks the
 * viewer adds, as if they were the poet's words; they are now in square
 * brackets, the mark the copyright pages use for the site's own words. The
 * last, "the ash tree", is not Hardy's: he wrote "an ash".
 *
 * WHAT IT CHECKS, for every PoemData under src/app that has language devices:
 *  1. lineRef is a row of the poem that is a line, not a stanza break.
 *  2. Where that row prints the poem's words, the example's opening words are on
 *     it: its first part, up to an ellipsis, a " / ", an arrow or "vs", as whole
 *     words. Where that part is in no line of the poem, the example is a list of
 *     words ("mingle, mix, meet, clasp, kiss"), and its first item, up to a
 *     comma, semicolon or bracket, must be on the row instead.
 *  3. Where an example says which lines or stanzas it is from, in a label
 *     opening a bracket ("[Line 15]", "[Stanzas 2 to 5: ...]") or a whole
 *     parenthesis ("(lines 1 to 5)", "inn (stanza 1)"), the card's line is one
 *     of them, counted as the viewer counts. A reference in passing, "(echoing
 *     stanza 1)", is about another place and is not read.
 * An example that is the site's own words by the conventions the fair-dealing
 * guards read (no-poem-quoted-beyond-fair-dealing.test.ts) is held to 1 and 3
 * only: one that opens with a square bracket ("[Line 27: ...]", "[See
 * anthology: ...]") or ends "(paraphrase)". So is any example on a row that
 * opens with one ("[Paraphrase] ...", "[Extract: ...]"), the site's stand-in
 * for a line of a poem in copyright that it does not print.
 *
 * HOW WORDS ARE COMPARED, as if-pages-quote-the-held-text.test.ts compares them:
 * case, punctuation, quotation marks and dash forms are forgiven, words are
 * not. A hyphen inside a word may join or divide it, so a scansion
 * ("Re-MEM-ber") matches "Remember", and "more-you'll", the anthology's dash
 * set as a hyphen, matches "more you'll".
 *
 * WHAT IT CANNOT SEE. Whether a quotation of a poem in copyright is on the line
 * its card names: those pages print a paraphrase of each line, so the words
 * are not here to compare. On 2 October 2026 their 106 quotation cards were
 * judged by hand against each row's paraphrase and the poem, and four were
 * moved. Which of several lines holding the same opening words was meant.
 * Whether the example is quoted word for word beyond its opening, which is
 * scripts/check-quotations.mjs's work for the poems the site holds.
 *
 * WHERE THE DATA COMES FROM. Each page's PoemData is read from its source with
 * the TypeScript parser, as the If- test reads it. A page that builds its rows
 * or devices at runtime cannot be read that way, so it is rendered instead,
 * with the viewer replaced by one that records the poem it is given. COMPUTED
 * lists those pages; a page that can be read neither way fails.
 *
 * EXCUSED is for a card these rules misjudge and a reader would judge right,
 * with the reason. An entry must name a card that still fails without it. It
 * is empty. Some cards had pointed on purpose at the later of the lines they
 * quote (Piano's circular structure at its last line, Crossing the Bar's
 * parallelism at "Twilight"); they now name the line their quotation starts
 * on, so that the number a card shows is where a reader finds its first words.
 */

const ROOT = process.cwd()
const posix = (p: string) => relative(ROOT, p).split('\\').join('/')

// ── The viewer, recording what a computed page gives it ─────────────────────

const given = vi.hoisted(() => [] as PoemData[])
vi.mock('@/components/study/InteractivePoemViewer', async (importOriginal) => {
  const real = await importOriginal<typeof import('@/components/study/InteractivePoemViewer')>()
  return {
    ...real,
    InteractivePoemViewer: ({ poem }: { poem: PoemData }) => {
      given.push(poem)
      return null
    },
  }
})

/** Pages whose poem is built at runtime, and the page component that builds it. */
const COMPUTED: Record<string, ComponentType> = {
  // Rows cut from the held edition by poemLines; every lineRef is row(n).
  'src/app/resources/revision-notes/do-not-go-gentle-into-that-good-night/page.tsx':
    DoNotGoGentlePage,
}

/** Cards excused, by page and then by example, with the reason. */
const EXCUSED: Record<string, Record<string, string>> = {}

// ── Reading the pages ───────────────────────────────────────────────────────

type Device = { device: string; example: string; lineRef: number }
type Poem = { file: string; rows: string[]; devices: Device[] }

function sourcesUnder(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? sourcesUnder(join(dir, e.name))
      : /\.tsx?$/.test(e.name)
        ? [posix(join(dir, e.name))]
        : [],
  )
}

const literal = (e: ts.Expression | undefined): string | undefined =>
  e && (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e)) ? e.text : undefined

const prop = (o: ts.ObjectLiteralExpression, name: string) =>
  o.properties.find(
    (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && p.name.getText() === name,
  )?.initializer

/** A PoemData literal as plain data, or null if its rows or devices are not literals. */
function read(file: string, o: ts.ObjectLiteralExpression): Poem | null {
  const lines = prop(o, 'lines')
  const devices = prop(o, 'languageDevices')
  if (!lines || !devices || !ts.isArrayLiteralExpression(lines)) return null
  if (!ts.isArrayLiteralExpression(devices)) return null
  const rows: string[] = []
  for (const e of lines.elements) {
    const text = ts.isObjectLiteralExpression(e) ? literal(prop(e, 'text')) : undefined
    if (text === undefined) return null
    rows.push(text)
  }
  const out: Device[] = []
  for (const e of devices.elements) {
    if (!ts.isObjectLiteralExpression(e)) return null
    const ref = prop(e, 'lineRef')
    const example = literal(prop(e, 'example'))
    if (!ref || !ts.isNumericLiteral(ref) || example === undefined) return null
    out.push({ device: literal(prop(e, 'device')) ?? '', example, lineRef: Number(ref.text) })
  }
  return { file, rows, devices: out }
}

/** Every object literal in the file with both `lines` and `languageDevices`. */
function poemsIn(file: string): (Poem | null)[] {
  const src = readFileSync(join(ROOT, file), 'utf8')
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const out: (Poem | null)[] = []
  const visit = (n: ts.Node) => {
    if (ts.isObjectLiteralExpression(n) && prop(n, 'lines') && prop(n, 'languageDevices')) {
      out.push(read(file, n))
      return
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  return out
}

/** A computed page's poem, as the viewer would be given it. */
function rendered(file: string): Poem {
  given.length = 0
  renderToStaticMarkup(createElement(COMPUTED[file]))
  if (given.length !== 1) throw new Error(`${file} gave the viewer ${given.length} poems`)
  const poem = given[0]
  return { file, rows: poem.lines.map((l) => l.text), devices: poem.languageDevices }
}

const FILES = sourcesUnder(join(ROOT, 'src/app')).filter((f) =>
  readFileSync(join(ROOT, f), 'utf8').includes('languageDevices'),
)
const READ = FILES.flatMap((file) => poemsIn(file).map((poem) => ({ file, poem })))
const UNREAD = [...new Set(READ.filter((r) => !r.poem).map((r) => r.file))]
const POEMS: Poem[] = [
  ...READ.flatMap((r) => (r.poem ? [r.poem] : [])),
  ...UNREAD.filter((f) => COMPUTED[f]).map(rendered),
]

// ── Comparing words ─────────────────────────────────────────────────────────

/** Normalised as the If- test normalises, a hyphen inside a word read as `hyphen`. */
function norm(s: string, hyphen: '' | ' '): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/g, ' ')
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/(?<=\p{L})-(?=\p{L})/gu, hyphen)
    .replace(/[—–-]+/g, ' ')
    .replace(/[^\p{L}\p{N}' ]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

/** As whole words, padded, with any apostrophe at the edge of a word dropped. */
const words = (s: string) => ` ${s.replace(/(^| )'+|'+(?= |$)/g, '$1').trim()} `

/**
 * Whether `phrase` starts on row `i` as whole words, reading a hyphen either
 * way. It may run on into the lines after ("lustily / I dipped" quoted as
 * "lustily I dipped"), but must begin on this one.
 */
function startsOn(rows: string[], i: number, phrase: string): boolean {
  const after = rows
    .slice(i + 1)
    .filter((r) => r.trim() !== '')
    .slice(0, 3)
  return (['', ' '] as const).some((h) => {
    const p = words(norm(phrase, h))
    const head = words(norm(rows[i], h))
    const at = words(norm([rows[i], ...after].join(' '), h)).indexOf(p)
    return p.trim() !== '' && at >= 0 && at < head.length - 1
  })
}

/** The rows the phrase starts on. */
const startRows = (rows: string[], phrase: string) =>
  rows.flatMap((r, i) => (r.trim() !== '' && startsOn(rows, i, phrase) ? [i] : []))

/** The example's first part, up to an ellipsis, a slash, an arrow or "vs". */
const opening = (example: string) =>
  example.split(/\s*(?:\.\.\.|…|\/|→|\s+vs\.?\s+)\s*/).find((p) => /[\p{L}\p{N}]/u.test(p)) ?? ''

/** A list's first item, up to a comma, semicolon or bracket. */
const firstItem = (part: string) => part.split(/[,;(]/)[0]

/** The site's own words, by the fair-dealing guards' conventions. */
const isNote = (s: string) => /^\s*\[/.test(s) || /\(paraphrase\)\s*$/i.test(s)

/**
 * The lines, or stanzas, an example says it is from, in a label opening a
 * bracket ("[Lines 8, 25 and 39] ...", "[Paraphrase, line 18] ...", "[Stanzas 2
 * to 5: ...]") or a whole parenthesis ("(line 6)", "(lines 1--5)"). Not a
 * reference made in passing: "(echoing stanza 1)" is about another stanza.
 */
function named(example: string, what: 'line' | 'stanza'): number[] {
  const out: number[] = []
  const list = `(\\d+(?:\\s*(?:,|and|to|-+|–)\\s*\\d+)*)`
  const re = new RegExp(
    `(?:^\\s*\\[(?:Paraphrase,\\s*)?${what}s?\\s+${list}|\\(${what}s?\\s+${list}\\))`,
    'gi',
  )
  for (const m of example.matchAll(re)) {
    for (const part of (m[1] ?? m[2]).split(/\s*(?:,|and)\s*/i)) {
      const [a, b] = part.split(/\s*(?:to|-+|–)\s*/i).map(Number)
      for (let n = a; n <= (b ?? a); n++) out.push(n)
    }
  }
  return out
}

/** The stanza each row is in, counted from 1 as the blank rows divide them. */
function stanzas(rows: string[]): number[] {
  let s = 1
  return rows.map((r, i) => {
    if (r.trim() === '' && i > 0 && rows[i - 1].trim() !== '') s++
    return s
  })
}

const numbers = (p: Poem) => poemLineNumbers(p.rows.map((text) => ({ text })))

function where(p: Poem, phrase: string): string {
  const n = numbers(p)
  const at = startRows(p.rows, phrase).map((i) => `row ${i} (line ${n[i]})`)
  return `its opening words are on ${at.join(', ')}`
}

/** What is wrong with a card, or null. */
function fault(p: Poem, d: Device): string | null {
  const row = p.rows[d.lineRef]
  if (!Number.isInteger(d.lineRef) || row === undefined) return 'points past the poem'
  if (row.trim() === '') return 'points at a stanza break'
  const line = numbers(p)[d.lineRef]!
  const lines = named(d.example, 'line')
  if (lines.length && !lines.includes(line)) return `shows line ${line}, names ${lines.join(', ')}`
  const stanza = stanzas(p.rows)[d.lineRef]
  const inStanzas = named(d.example, 'stanza')
  if (inStanzas.length && !inStanzas.includes(stanza))
    return `is in stanza ${stanza}, names ${inStanzas.join(', ')}`
  if (isNote(d.example) || /^\s*\[/.test(row)) return null
  const first = opening(d.example)
  if (startsOn(p.rows, d.lineRef, first)) return null
  if (startRows(p.rows, first).length) return where(p, first)
  const item = firstItem(first)
  if (!startRows(p.rows, item).length) return 'quotes words that are in no line of the poem'
  return startsOn(p.rows, d.lineRef, item) ? null : where(p, item)
}

const CARDS = POEMS.flatMap((p) => p.devices.map((d) => ({ p, d })))
type Card = (typeof CARDS)[number]
const label = ({ p, d }: Card) =>
  `${p.file}  [${d.device}] lineRef ${d.lineRef}: "${d.example.slice(0, 50)}"`
const excused = ({ p, d }: Card) => EXCUSED[p.file]?.[d.example] !== undefined

// ── The tests ───────────────────────────────────────────────────────────────

describe('a language-device card', () => {
  it('is found on every poem page, and read', () => {
    // The vacuity guards: a reader that found nothing would pass everything.
    expect(FILES.length).toBeGreaterThan(60)
    expect(POEMS.length).toBeGreaterThan(60)
    expect(CARDS.length).toBeGreaterThan(400)
    expect(
      UNREAD.filter((f) => !COMPUTED[f]),
      'built at runtime, not in COMPUTED',
    ).toEqual([])
    expect(
      Object.keys(COMPUTED).filter((f) => !UNREAD.includes(f)),
      'readable',
    ).toEqual([])
    expect(POEMS.filter((p) => COMPUTED[p.file]).map((p) => p.devices.length)).toEqual([12])
  })

  it('is judged wrong where it is wrong, and right where it is right', () => {
    // Shapes these pages printed: each must fail, and its fix must pass.
    const poem: Poem = {
      file: 'fixture',
      rows: [
        'I met a traveller from an antique land,',
        'Who said: Two vast',
        '',
        'Nothing beside.',
      ],
      devices: [],
    }
    const check = (example: string, lineRef: number) =>
      fault(poem, { device: 'x', example, lineRef })
    // A line number written as an index, and the index it should have been.
    expect(check('I met a traveller from an antique land, / Who said…', 1)).toMatch(/row 0 /)
    expect(check('I met a traveller from an antique land, / Who said…', 0)).toBeNull()
    expect(check('Nothing beside.', 4)).toBe('points past the poem')
    expect(check('Nothing beside.', 2)).toBe('points at a stanza break')
    expect(check('Nothing beside.', 3)).toBeNull()
    // A description in quotation marks, and the same as the site's note.
    expect(check('Traditional Petrarchan sonnet', 0)).toMatch(/in no line/)
    expect(check('[Traditional Petrarchan sonnet]', 0)).toBeNull()
    // A list of words is placed by its first.
    expect(check('traveller, said, beside', 3)).toMatch(/row 0 /)
    expect(check('traveller, said, beside', 0)).toBeNull()
    // A quotation may run on over a line break unmarked, but starts where it starts.
    expect(check('antique land, Who said', 0)).toBeNull()
    expect(check('antique land, Who said', 1)).toMatch(/row 0 /)
    // A scansion is the line; a changed word is not.
    expect(check('I MET a TRAV-el-ler', 0)).toBeNull()
    expect(check('I MET a TRAV-el-ler from an AN-cient land', 0)).toMatch(/in no line/)
    // A note that names its line or stanza is held to it, and only to its own.
    expect(check('[Line 3] the volta', 1)).toBe('shows line 2, names 3')
    expect(check('[Line 3] the volta', 3)).toBeNull()
    expect(check('[Lines 1 to 2: the frame]', 1)).toBeNull()
    expect(check('Nothing (line 2)', 3)).toBe('shows line 3, names 2')
    expect(check('[Stanza 2: the ruin]', 0)).toBe('is in stanza 1, names 2')
    expect(check('[Stanza 2: the ruin]', 3)).toBeNull()
    expect(check('Nothing beside (echoing stanza 1)', 3)).toBeNull()
  })

  it('cites the line its example comes from', () => {
    const wrong = CARDS.filter((c) => !excused(c) && fault(c.p, c.d)).map(
      (c) => `${label(c)}  ${fault(c.p, c.d)}`,
    )
    expect(wrong).toEqual([])
  })

  it('is excused only while it would fail', () => {
    const stale = Object.entries(EXCUSED).flatMap(([file, byExample]) =>
      Object.keys(byExample).filter(
        (example) =>
          !CARDS.some((c) => c.p.file === file && c.d.example === example && fault(c.p, c.d)),
      ),
    )
    expect(stale).toEqual([])
  })
})
