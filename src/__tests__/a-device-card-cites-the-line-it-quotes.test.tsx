// @vitest-environment node
import { describe, it, expect, vi } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
import ts from 'typescript'
import { createElement, type ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import {
  isDeviceNote,
  poemLineNumbers,
  type PoemData,
} from '@/components/study/InteractivePoemViewer'
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
 * Later that day the check was widened to every part of an example and the
 * marks between them, and found 32 more cards. 25 joined lines that do not
 * follow each other with " / ", the mark for the next line (Crossing the
 * Bar's lines 1 and 9, When We Two Parted's 2 and 32), where an ellipsis marks
 * a gap; four listed the poem's words out of its order; two misquoted
 * (Dulce et Decorum Est's "blood gargling from froth-corrupted lungs", Porphyria's
 * Lover's "her throat"); and one printed pairs of rhyme words as a quotation.
 *
 * WHAT IT CHECKS, for every PoemData under src/app that has language devices:
 *  1. lineRef is a row of the poem that is a line, or a part heading the poem
 *     prints (`heading: true`, which the viewer shows unnumbered), not a
 *     stanza break.
 *  2. Where that row prints the poem's words, the example's opening words are on
 *     it: its first part, up to an ellipsis, a " / ", an arrow or "vs", as whole
 *     words. Where that part is in no line of the poem, the example is a list of
 *     words ("mingle, mix, meet, clasp, kiss"), and its first item, up to a
 *     comma or semicolon, must be on the row instead.
 *  3. Where an example says which lines or stanzas it is from, in a label
 *     opening a bracket ("[Line 15]", "[Stanzas 2 to 5: ...]") or a whole
 *     parenthesis ("(lines 1 to 5)", "inn (stanza 1)"), the card's line is one
 *     of them, counted as the viewer counts. A reference in passing, "(echoing
 *     stanza 1)", is about another place and is not read.
 *  4. Its later parts are the poem's words too, and follow as the marks
 *     between them say: after " / ", on the next line, a stanza break between
 *     allowed; after an ellipsis, later in the poem; after an arrow or "vs", a
 *     comparison, anywhere in it. Asides in round brackets ("(line 3)",
 *     "(memory)") are the site's, and are left out.
 * An example that is the site's own words is held to 1 and 3 only. That is
 * isDeviceNote in the viewer, which prints such a note without quotation
 * marks: the conventions the fair-dealing guards read
 * (no-poem-quoted-beyond-fair-dealing.test.ts), an example that opens with a
 * square bracket ("[Line 27: ...]", "[See anthology: ...]") or ends
 * "(paraphrase)". So is any example on a row that opens with one ("[Paraphrase]
 * ...", "[Extract: ...]"), the site's stand-in for a line of a poem in
 * copyright that it does not print.
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
 * moved. On a page that prints such a poem only in part, a later part from a
 * line it does not print. Which of several lines holding the same words was
 * meant. Punctuation, which it forgives; scripts/check-quotations.mjs compares
 * it for the poems the site holds.
 *
 * WHERE THE DATA COMES FROM. Each page's PoemData is read from its source with
 * the TypeScript parser, as the If- test reads it. A page that builds its rows
 * or devices at runtime cannot be read that way, so it is rendered instead,
 * with the viewer replaced by one that records the poem it is given. COMPUTED
 * lists those pages; a page that can be read neither way fails.
 *
 * EXCUSED is for a card these rules misjudge and a reader would judge right,
 * with the reason. An entry must name a card that still fails without it. It
 * holds one: Sonnet 116's scansion of line 1, whose " / " marks divide the
 * feet. Some cards had pointed on purpose at the later of the lines they quote
 * (Piano's circular structure at its last line, Crossing the Bar's parallelism
 * at "Twilight"); they now name the line their quotation starts on, so that the
 * number a card shows is where a reader finds its first words.
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
const EXCUSED: Record<string, Record<string, string>> = {
  'src/app/igcse/edexcel/poetry/sonnet-116/page.tsx': {
    'Let ME / not TO / the MAR / riage OF / true MINDS':
      'a scansion of line 1: each " / " divides a metrical foot, not a line',
  },
}

// ── Reading the pages ───────────────────────────────────────────────────────

type Device = { device: string; example: string; lineRef: number }
/** `headings`: the rows that are part headings, which the viewer does not number. */
type Poem = { file: string; rows: string[]; headings: number[]; devices: Device[] }

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
  const headings: number[] = []
  for (const e of lines.elements) {
    const text = ts.isObjectLiteralExpression(e) ? literal(prop(e, 'text')) : undefined
    if (text === undefined) return null
    if (prop(e as ts.ObjectLiteralExpression, 'heading')?.kind === ts.SyntaxKind.TrueKeyword)
      headings.push(rows.length)
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
  return { file, rows, headings, devices: out }
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
  return {
    file,
    rows: poem.lines.map((l) => l.text),
    headings: poem.lines.flatMap((l, i) => (l.heading ? [i] : [])),
    devices: poem.languageDevices,
  }
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

/** The words of a line or a phrase, a hyphen inside a word read as `hyphen`. */
const tokens = (s: string, hyphen: '' | ' ') =>
  words(norm(s, hyphen)).trim().split(' ').filter(Boolean)

/**
 * The row a phrase ends on, if it starts on row `i` as whole words, reading a
 * hyphen either way; otherwise -1. It may run on into the lines after
 * ("lustily / I dipped" quoted as "lustily I dipped"), but must begin on this
 * one.
 */
function endRow(rows: string[], i: number, phrase: string): number {
  if (!rows[i]?.trim()) return -1
  const span = [i]
  for (let k = i + 1; k < rows.length && span.length < 4; k++) if (rows[k].trim()) span.push(k)
  for (const h of ['', ' '] as const) {
    const p = tokens(phrase, h)
    if (!p.length) continue
    const run = span.flatMap((k) => tokens(rows[k], h).map((word) => ({ word, row: k })))
    for (let s = 0; s < run.length && run[s].row === i; s++)
      if (p.every((w, j) => run[s + j]?.word === w)) return run[s + p.length - 1].row
  }
  return -1
}

const startsOn = (rows: string[], i: number, phrase: string) => endRow(rows, i, phrase) >= 0

/** The rows the phrase starts on. */
const startRows = (rows: string[], phrase: string) =>
  rows.flatMap((r, i) => (r.trim() !== '' && startsOn(rows, i, phrase) ? [i] : []))

/**
 * The example's parts, its asides in round brackets ("(line 3)", "(memory)")
 * left out, each with the mark that joins it to the part before: " / " for the
 * next line, an ellipsis for words left out (so it comes later in the poem), an
 * arrow or "vs" for a comparison, whose parts may come in any order.
 */
type Part = { text: string; join: '/' | '…' | 'vs' | null }
function partsOf(example: string): Part[] {
  const pieces = example
    .replace(/\s*\([^)]*\)/g, ' ')
    .split(/(\s*(?:\.\.\.|…|\/|→)(?:\s*(?:\.\.\.|…|\/))*\s*|\s+vs\.?\s+)/)
  const out: Part[] = []
  let join: Part['join'] = null
  pieces.forEach((piece, i) => {
    if (i % 2) join = /\.\.\.|…/.test(piece) ? '…' : piece.includes('/') ? '/' : 'vs'
    else if (/[\p{L}\p{N}]/u.test(piece)) out.push({ text: piece, join: out.length ? join : null })
  })
  return out
}

/** A list's first item, up to a comma or semicolon. */
const firstItem = (part: string) => part.split(/[,;]/)[0]

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

/** The number the viewer shows on each row: none on a stanza break or a part heading. */
const numbers = (p: Poem) =>
  poemLineNumbers(p.rows.map((text, i) => ({ text, heading: p.headings.includes(i) })))

/** A row as a reader would name it. */
const lineName = (p: Poem, i: number) => {
  const n = numbers(p)[i]
  return n === null ? 'a heading' : `line ${n}`
}

function where(p: Poem, phrase: string): string {
  const at = startRows(p.rows, phrase).map((i) => `row ${i} (${lineName(p, i)})`)
  return `its opening words are on ${at.join(', ')}`
}

/** The next row after `k` that is a line, not a stanza break or a part heading. */
const nextLine = (p: Poem, k: number) =>
  p.rows.findIndex((r, j) => j > k && r.trim() !== '' && !p.headings.includes(j))

const few = (s: string) => s.replace(/["“”]/g, '').trim().split(/\s+/).slice(0, 4).join(' ')

/** What is wrong with the way an example's later parts follow its first, or null. */
function joins(p: Poem, start: number, parts: Part[]): string | null {
  let end = endRow(p.rows, start, parts[0].text)
  for (const { text, join } of parts.slice(1)) {
    const at = startRows(p.rows, text)
    // A page that prints a poem in copyright only in part may quote a line it
    // does not print, so a part it cannot find there is not judged.
    if (!at.length && p.rows.some((r) => /^\s*\[/.test(r))) return null
    if (!at.length) return `quotes "${few(text)}", which is in no line of the poem`
    if (join === 'vs') continue
    if (join === '/') {
      const next = nextLine(p, end)
      if (at.includes(next)) {
        end = endRow(p.rows, next, text)
        continue
      }
      const to = at.find((k) => k > end) ?? at[0]
      return `" / " joins ${lineName(p, end)} to ${lineName(p, to)}, which do not follow each other; an ellipsis marks a gap`
    }
    const later = at.filter((k) => k >= end)
    if (!later.length) return `puts "${few(text)}" after words that come later in the poem`
    end = endRow(p.rows, later[0], text)
  }
  return null
}

/** What is wrong with a card, or null. */
function fault(p: Poem, d: Device): string | null {
  const row = p.rows[d.lineRef]
  if (!Number.isInteger(d.lineRef) || row === undefined) return 'points past the poem'
  if (row.trim() === '') return 'points at a stanza break'
  const line = numbers(p)[d.lineRef]
  const lines = named(d.example, 'line')
  if (lines.length && (line === null || !lines.includes(line)))
    return `shows ${line === null ? 'no line' : `line ${line}`}, names ${lines.join(', ')}`
  const stanza = stanzas(p.rows)[d.lineRef]
  const inStanzas = named(d.example, 'stanza')
  if (inStanzas.length && !inStanzas.includes(stanza))
    return `is in stanza ${stanza}, names ${inStanzas.join(', ')}`
  if (isDeviceNote(d.example) || /^\s*\[/.test(row)) return null
  const parts = partsOf(d.example)
  const first = parts[0]?.text ?? ''
  if (startsOn(p.rows, d.lineRef, first)) return joins(p, d.lineRef, parts)
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
      headings: [],
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
    // A " / " is a line break: the part after it starts on the next line, across a
    // stanza break if need be. Lines further apart are joined by an ellipsis, and
    // every part is the poem's, in the poem's order.
    expect(check('I met a traveller / Who said / Nothing beside', 0)).toBeNull()
    expect(check('I met a traveller from an antique land, / Nothing beside.', 0)).toMatch(
      /joins line 1 to line 3, which do not follow/,
    )
    expect(check('I met a traveller from an antique land, … Nothing beside.', 0)).toBeNull()
    expect(check('Nothing beside. … I met a traveller', 3)).toMatch(/after words that come later/)
    expect(check('I met a traveller … a vast desert', 0)).toMatch(/"a vast desert", which is in no/)
    expect(check('Nothing beside vs I met a traveller', 3)).toBeNull()
    // A part heading is not numbered, so a line after it keeps its own number.
    const parts: Poem = {
      file: 'fixture',
      rows: [
        'I - The Tragedy',
        'She sits in the tawny vapour',
        '',
        'II - The Irony',
        'Tis the morrow',
      ],
      headings: [0, 3],
      devices: [],
    }
    const card = (example: string, lineRef: number) =>
      fault(parts, { device: 'x', example, lineRef })
    expect(card('I - The Tragedy … II - The Irony', 0)).toBeNull()
    expect(card('I - The Tragedy / II - The Irony', 0)).toMatch(/joins a heading to a heading/)
    expect(card('[Line 2] the morrow', 4)).toBeNull()
    expect(card('[Line 3] the morrow', 4)).toBe('shows line 2, names 3')
    expect(card('[Line 1] the heading', 0)).toBe('shows no line, names 1')
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
