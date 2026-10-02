// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import ts from 'typescript'

import { ifText } from '@/data/full-texts/if'
import { pianoText } from '@/data/full-texts/piano'
import { guide } from '@/data/study-guides/if'
import { QUOTE_FIELDS, scanSource, type Quotation } from './helpers/quotations'

/**
 * Every quotation of If- on its page, in its course and in its study guide is
 * Kipling's words, and every line number given with one is the line it is on.
 *
 * WHY (2 October 2026). scripts/check-quotations.mjs reads all three files, and
 * once the course's paraphrase printed as Kipling's sentence ("If you can do all
 * of these things...") had gone, it passed every If- quotation in them. A
 * second reading found what it cannot see. Pinned here:
 *  - Four of the page's six language-device cards cited the wrong line. A
 *    device's `lineRef` is an index into the page's rows, stanza breaks
 *    included, but these had been written as line numbers, so "your heart and
 *    nerve and sinew" was shown and highlighted as line 20, the unforgiving
 *    minute as 27 and "my son" as 30. The checker does not read a device's
 *    `example`, and no test compared a `lineRef` with the row it points at.
 *  - The page printed line 19 with a comma that neither the anthology nor the
 *    held edition has (its note analysed "The repeated commas"), and indented
 *    line 7 like an even-numbered line. The checker compares neither
 *    punctuation nor layout.
 *  - The Arabic of a key quotation put an Arabic verb in quotation marks where
 *    the English quotes "losing"; the checker passes over a span in another
 *    script. Quotations stay in English.
 * Fixed in the same reading but not pinned, being claims in prose rather than
 * quotations: the course called the last line's exclamation mark "the only one
 * in the poem" (the Will's command in line 24 has one), the page and the course
 * called the feminine endings occasional (every odd-numbered line has one, and
 * "too", given as an example, ends on a stress), and a few notes whose analysis
 * did not fit the words, which the page's and the course's comments list.
 *
 * HOW WORDS ARE COMPARED, as frankenstein-pages-quote-the-held-text.test.ts
 * compares them: case, punctuation, dash forms and quotation marks are
 * forgiven, words are not; a fragment matches only as whole words, and one
 * word is a quotation. "..." or " / " may join parts, which must come in the
 * poem's order. A quotation followed by "(line 24)" or "(lines 25 and 26)"
 * must be on those lines, and so must a guide passage or moment that names its
 * stanza and lines. The poem the page prints is held to more: its words line
 * for line, and its marks of punctuation, which are the anthology's.
 *
 * NOT_THE_POEM lists what these files quote that is not If-, checked in both
 * directions as the Frankenstein test checks its list: an entry must still be
 * quoted, and must not be in the poem. An entry ending "..." excuses a
 * quotation that begins with it, so that long model sentences need not be
 * copied here. OTHER_HELD lists quotations of another held text, each checked
 * against that text.
 */

const ROOT = process.cwd()
const PAGE = 'src/app/igcse/edexcel/poetry/if/page.tsx'
const COURSE = 'src/data/edexcel-igcse-lit-poetry-courses.ts'
const GUIDE = 'src/data/study-guides/if.ts'

/** Normalised as the Frankenstein test normalises. */
function norm(s: string): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/g, ' ')
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–-]+/g, ' ')
    .replace(/[^\p{L}\p{N}' ]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

/** As whole words, padded, with any apostrophe at the edge of a word dropped. */
const words = (s: string) => ` ${s.replace(/(^| )'+|'+(?= |$)/g, '$1').trim()} `

/** The parts of a quotation, split at an ellipsis or a " / ". */
const fragments = (q: string) =>
  q
    .split(/\s*(?:\.\.\.|…|\/)\s*/)
    .map(norm)
    .filter((f) => /[\p{L}\p{N}]/u.test(f))
    .map(words)

/** Whether every part is in `held`, each after the one before. */
function inOrder(q: string, held: string): boolean {
  let from = 0
  for (const f of fragments(q)) {
    const at = held.indexOf(f, from)
    if (at < 0) return false
    from = at + f.length - 1
  }
  return true
}

/** The poem's 32 lines as the held edition prints them, and normalised. */
const RAW_LINES = ifText.sections
  .map((s) => s.content)
  .join('\n')
  .split(/<br\s*\/?>|<\/p>/)
  .map((l) => l.replace(/<[^>]+>/g, '').trim())
  .filter(Boolean)
const LINES = RAW_LINES.map(norm)
const HELD = words(LINES.join(' '))

/**
 * Where the anthology's punctuation differs from the held edition's, the last
 * mark of the line, as src/data/study-guides/if.ts records it from Pearson's
 * PDF. The page follows the anthology, which is the copy a student has in the
 * exam. Every other mark is the same in both.
 */
const ANTHOLOGY_ENDS: Record<number, string> = { 2: ',', 8: ':', 10: ';', 16: ':' }
const marks = (s: string) => s.replace(/[^,;:!?.]/g, '')
const PIANO = words(norm(pianoText.sections.map((s) => s.content).join(' ')))

/** Lines a to b (1-based, inclusive) as one run of words. */
const span = (a: number, b: number) => words(LINES.slice(a - 1, b).join(' '))

const NOT_THE_POEM: Record<string, string> = {
  // The page.
  'do X, but not Y': 'a frame for the poem’s balancing pattern',
  'If you can X-and not make X your Y': 'a frame for lines 9 and 10',
  'the meek shall inherit the earth': 'Psalm 37:11, which the note compares',
  'Jameson Raid': 'the name of the raid of 1895-96',
  'If any question why we died, / Tell them, because our fathers lied.':
    'Kipling’s Common Form, one of his Epitaphs of the War',
  'verse essay': 'a description of the form',
  'sermon in verse': 'a description of the form',
  'You will have…': 'the plain phrasing the note sets against Kipling’s',
  // The course.
  'key-term': 'a class name in the module’s HTML',
  'examiner-tip': 'a class name in the module’s HTML',
  'text-extract': 'a class name in the module’s HTML',
  reward: 'scare quotes',
  'If... then': 'the name of the construction',
  then: 'the name for the main clause; Kipling never writes the word',
  'tennis match': 'the name of an essay structure',
  'The delayed resolution of the conditional sentence...': 'a model sentence in a tip',
  'How does Kipling present ideas about...': 'an exam question',
  'Explore how the speaker’s attitude to success...': 'an exam question',
  'Compare how Kipling in...': 'an exam question',
  'The poem says you should be patient, honest, and humble.': 'an example of summary, not analysis',
  // The guide declares its own.
  ...Object.fromEntries(
    (guide.quotesFromElsewhere ?? []).map((q) => [q, 'the guide’s quotesFromElsewhere']),
  ),
}

/** Quotations of another held text, and that text. */
const OTHER_HELD: Record<string, { text: string; held: string }> = {
  'I weep like a child for the past': { text: 'Piano, line 12', held: PIANO },
}

const EXCUSED = Object.keys(NOT_THE_POEM).map((k) => ({
  key: k,
  n: norm(k),
  prefix: k.endsWith('...'),
}))
const excuses = (q: string) =>
  EXCUSED.find((e) => (e.prefix ? norm(q).startsWith(e.n) : norm(q) === e.n))

// ── The quotations ──────────────────────────────────────────────────────────

/** A device's `example` is printed between quotation marks the viewer adds. */
const FIELDS = new Set([...QUOTE_FIELDS, 'example', 'phrase'])
const read = (f: string) => readFileSync(join(ROOT, f), 'utf8')

type Found = { q: Quotation; src: string }
function scan(file: string, src: string, lineOffset = 0): Found[] {
  return scanSource(file, src, FIELDS).map((q) => ({ q: { ...q, line: q.line + lineOffset }, src }))
}

/** Only If-'s part of the course file, which holds eight poems. */
const COURSE_SRC = read(COURSE)
const COURSE_START = COURSE_SRC.indexOf('// 1. "If-" by Rudyard Kipling')
const COURSE_END = COURSE_SRC.indexOf('// 2. "Prayer Before Birth"')
const IF_COURSE = COURSE_SRC.slice(COURSE_START, COURSE_END)

const FOUND: Found[] = [
  ...scan(PAGE, read(PAGE)),
  ...scan(COURSE, IF_COURSE, COURSE_SRC.slice(0, COURSE_START).split('\n').length - 1),
  ...scan(GUIDE, read(GUIDE)),
].filter(({ q }) => fragments(q.text).length > 0)
const where = ({ q }: Found) => `${q.file}:${q.line}  ${q.text.split(/\s+/).slice(0, 8).join(' ')}`

// ── The page's poem, read from its source ───────────────────────────────────

type Device = { device: string; example: string; lineRef: number }
function pagePoem(): { rows: string[]; devices: Device[] } {
  const sf = ts.createSourceFile(PAGE, read(PAGE), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  let poem: ts.ObjectLiteralExpression | undefined
  const visit = (n: ts.Node) => {
    if (
      ts.isVariableDeclaration(n) &&
      n.name.getText() === 'poem' &&
      n.initializer &&
      ts.isObjectLiteralExpression(n.initializer)
    )
      poem = n.initializer
    else ts.forEachChild(n, visit)
  }
  visit(sf)
  const prop = (o: ts.ObjectLiteralExpression, name: string) =>
    o.properties.find(
      (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && p.name.getText() === name,
    )?.initializer
  const items = (name: string) => {
    const arr = poem && prop(poem, name)
    return arr && ts.isArrayLiteralExpression(arr)
      ? arr.elements.filter(ts.isObjectLiteralExpression)
      : []
  }
  const text = (e: ts.Expression | undefined) =>
    e && (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e)) ? e.text : ''
  return {
    rows: items('lines').map((o) => text(prop(o, 'text'))),
    devices: items('languageDevices').map((o) => {
      const ref = prop(o, 'lineRef')
      return {
        device: text(prop(o, 'device')),
        example: text(prop(o, 'example')),
        lineRef: ref && ts.isNumericLiteral(ref) ? Number(ref.text) : -1,
      }
    }),
  }
}
const { rows: ROWS, devices: DEVICES } = pagePoem()

/** "(line 24)", "(lines 9-16)", "(lines 25 and 26)" straight after a quotation. */
function lineRefAfter({ q, src }: Found): [number, number] | null {
  const m = /^["”'’]?\s?\(lines? (\d+)(?:(?:-|–| to | and )(\d+))?\)/.exec(src.slice(q.srcEnd))
  return m ? [Number(m[1]), Number(m[2] ?? m[1])] : null
}

/** "Stanza 2, lines 9-16" in a guide's `where`. */
function stanzaLines(w: string): { stanza: number; a: number; b: number } | null {
  const m = /^Stanza (\d), lines (\d+)-(\d+)$/.exec(w)
  return m ? { stanza: Number(m[1]), a: Number(m[2]), b: Number(m[3]) } : null
}

// ── The tests ───────────────────────────────────────────────────────────────

describe('If- as the site quotes it', () => {
  it('is found: the poem, the course section, and their quotations', () => {
    // The vacuity guards: a parser or scanner that found nothing would pass everything.
    expect(LINES).toHaveLength(32)
    expect(COURSE_START).toBeGreaterThan(-1)
    expect(COURSE_END).toBeGreaterThan(COURSE_START)
    expect(ROWS.filter((r) => r.trim())).toHaveLength(32)
    expect(DEVICES).toHaveLength(6)
    expect(FOUND.filter((f) => f.q.file === PAGE).length).toBeGreaterThan(150)
    expect(FOUND.filter((f) => f.q.file === COURSE).length).toBeGreaterThan(40)
    expect(FOUND.filter((f) => f.q.file === GUIDE).length).toBeGreaterThan(80)
    expect(FOUND.filter((f) => lineRefAfter(f)).length).toBeGreaterThan(20)
  })

  it('matches whole words in order, so a changed word or ending is caught', () => {
    // Misquotations these files have printed, or nearly: each must fail.
    expect(inOrder("If you can do all of these things... you'll be a Man, my son!", HELD)).toBe(
      false,
    )
    expect(inOrder('keep his head', HELD)).toBe(false)
    expect(inOrder('two imposters', HELD)).toBe(false)
    expect(inOrder('weeping like a child', PIANO)).toBe(false)
    expect(inOrder('my son... Yours is the Earth', HELD)).toBe(false)
    // And the quotations they replaced, which must pass.
    expect(inOrder("If you can keep your head... you'll be a Man, my son!", HELD)).toBe(true)
    expect(inOrder('I weep like a child for the past', PIANO)).toBe(true)
  })

  it('prints the poem on its page with the held words and the anthology’s marks', () => {
    const lines = ROWS.filter((r) => r.trim())
    const wrong = lines
      .map((r, i) => (norm(r) === LINES[i] ? null : `line ${i + 1}`))
      .filter(Boolean)
    expect(wrong).toEqual([])
    const misMarked = lines
      .map((r, i) => {
        const held = marks(RAW_LINES[i])
        const want = ANTHOLOGY_ENDS[i + 1] ? held.slice(0, -1) + ANTHOLOGY_ENDS[i + 1] : held
        return marks(r) === want ? null : `line ${i + 1}: ${marks(r)} for ${want}`
      })
      .filter(Boolean)
    expect(misMarked).toEqual([])
    // Stanza breaks after lines 8, 16 and 24; even-numbered lines indented.
    expect(ROWS.map((r, i) => (r.trim() ? null : i)).filter((i) => i !== null)).toEqual([8, 17, 26])
    const indent = lines.map((r, i) => (/^\s/.test(r) === (i % 2 === 1) ? null : `line ${i + 1}`))
    expect(indent.filter(Boolean)).toEqual([])
  })

  it('cites the line each language device quotes', () => {
    const wrong = DEVICES.filter((d) => {
      const first = fragments(d.example)[0]
      return !first || !words(norm(ROWS[d.lineRef] ?? '')).includes(first)
    }).map((d) => `${d.device}: lineRef ${d.lineRef}`)
    expect(wrong).toEqual([])
  })

  it('quotes the held text word for word', () => {
    const wrong = FOUND.filter(({ q }) => !excuses(q.text) && !OTHER_HELD[q.text])
      .filter(({ q }) => !inOrder(q.text, HELD))
      .map(where)
    expect(wrong).toEqual([])
  })

  it('quotes another held text only as that text has it', () => {
    const wrong = Object.entries(OTHER_HELD)
      .filter(([q, o]) => !inOrder(q, o.held))
      .map(([q, o]) => `${o.text}: ${q}`)
    expect(wrong).toEqual([])
    const quoted = new Set(FOUND.map(({ q }) => q.text))
    expect(Object.keys(OTHER_HELD).filter((q) => !quoted.has(q))).toEqual([])
  })

  it('gives the right line with a quotation that names one', () => {
    const wrong = FOUND.filter((f) => {
      const ref = lineRefAfter(f)
      return ref && !excuses(f.q.text) && !inOrder(f.q.text, span(ref[0], ref[1]))
    }).map((f) => `${where(f)}  (line ${lineRefAfter(f)!.join('-')})`)
    expect(wrong).toEqual([])
  })

  it('places each guide passage and moment in the stanza and lines it names', () => {
    const placed = [
      ...(guide.extracts ?? []).map((e) => ({ w: e.where, q: e.text ?? '' })),
      ...guide.timeline.map((m) => ({ w: m.where, q: m.quote ?? '' })),
    ]
    expect(placed.length).toBeGreaterThan(8)
    const wrong = placed
      .filter(({ w, q }) => {
        const s = stanzaLines(w)
        if (!s) return true
        const inStanza = s.a >= 8 * (s.stanza - 1) + 1 && s.b <= 8 * s.stanza
        return !inStanza || !inOrder(q, span(s.a, s.b))
      })
      .map(({ w }) => w)
    expect(wrong).toEqual([])
  })

  it('keeps its quotations in English in the Arabic', () => {
    const translated = FOUND.filter(({ q }) => /[؀-ۿ]/.test(q.text)).map(where)
    expect(translated).toEqual([])
  })

  it('excuses only what is quoted, and only what is not the poem', () => {
    const stale = EXCUSED.filter(
      (e) =>
        !FOUND.some(({ q }) => (e.prefix ? norm(q.text).startsWith(e.n) : norm(q.text) === e.n)),
    ).map((e) => e.key)
    expect(stale, 'excused but no longer quoted').toEqual([])
    const inPoem = EXCUSED.filter((e) => !e.prefix && inOrder(e.key, HELD)).map((e) => e.key)
    expect(inPoem, 'excused but in the poem').toEqual([])
  })
})
