// @vitest-environment node
import { describe, it, expect } from 'vitest'
import ts from 'typescript'
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'

import { SET_TEXTS } from '@/lib/board/set-texts'
import { FAIR_DEALING, limitsFor } from '@/lib/study-guides/fair-dealing'
import { wordCount, lineCount } from '@/lib/study-guides/validate'
import {
  ROOT,
  DICT_QUOTES,
  QUOTE_FIELDS,
  keyMentions,
  literalUnit,
  scanSource,
  sourcesUnder,
  type Quotation,
} from './helpers/quotations'
import { POETS, POEM_WORDS, inCopyright } from './helpers/poets'

/**
 * No poetry page quotes a copyrighted poem beyond fair dealing, on any board.
 *
 * WHY. no-quote-over-the-fair-dealing-limit.test.ts holds the quotations on a
 * set-text guide to FAIR_DEALING, but it finds a guide by the slugs in
 * SET_TEXTS, and most poems are not in SET_TEXTS: it reached a poetry page
 * only where a directory happened to share a registered slug, and never a hub,
 * an essay plan or a comparison guide. Where it did reach one, it did not read
 * a language device's `example`, which the poem viewer prints between
 * quotation marks. no-copyrighted-poem-printed-whole.test.ts counts only the
 * lines array of a PoemData. So on 26 September 2026 nothing measured the key
 * quotations, the device examples, the annotation notes, the quiz, the essay
 * plans, the Arabic and Spanish strings or the hub cards on the pages about
 * the poems still in copyright, and nothing measured how much of each poem a
 * page gives up in total.
 *
 * WHAT IT CHECKS. Every page.tsx under src/app/revision/poetry,
 * src/app/igcse/<board>/poetry and src/app/resources/poetry, with the layout,
 * loading and error files beside it, every file it imports from src/app or
 * src/data, and every dictionary string those files name by key. For each poem
 * in UK copyright that a page quotes:
 *  (a) no quotation over FAIR_DEALING.quoteWords words or
 *      FAIR_DEALING.poemQuoteLines lines;
 *  (b) the distinct words the page quotes from it, in every language, no more
 *      than limitsFor('poem', ...).totalWords: FAIR_DEALING.poemShare of the
 *      poem's POEM_WORDS, or 20 words where its length is not recorded.
 *
 * HOW A QUOTATION IS FOUND. By scanSource in helpers/quotations.ts, the sweep
 * test's own scanner, unchanged, given one more whole-value field: a PoemData
 * language device's `example`. An `example` anywhere else is a model sentence
 * and is read only for what it puts in quotation marks. Not quotations, as in
 * the sweep: "[Paraphrase] ..." lines and whole-value notes in [square
 * brackets]; and, because these pages use them for the same purpose, a value
 * that opens with a bracketed label ("[Stanza 2] The speaker ...", "[Paraphrase,
 * final line] ...") or ends by declaring itself one ("... (paraphrase)"). The
 * words inside the one "[Extract: ...]" placeholder are the poem's, as
 * no-copyrighted-poem-printed-whole.test.ts counts them.
 *
 * WHICH POEM A QUOTATION IS FROM. The poem text is not in the repository, so a
 * quotation is placed by where it sits, and every rule errs towards counting:
 *  - inside an object or JSX element that names a poem (a `poet` or `author`,
 *    `poem`, `poems`, `poemA`/`poemB` or `evidenceNpoem` field), it belongs to
 *    that poem, to every poem named by the objects around it, and to the
 *    page's own poem;
 *  - where the field it sits in is paired by name with one of several poems
 *    (`poemAEvidence` with `poemA`, `analysis2` with `evidence2poem`), it
 *    belongs to that poem alone;
 *  - anywhere else, it belongs to the page's own poem: its one PoemData, or
 *    the set text its route is named after;
 *  - on a page with no poem of its own, outside every card, it belongs to each
 *    poem whose quotations elsewhere in these trees share three words running
 *    with it, or, if it is one or two words long, equal it. What is left is
 *    counted, and the count may not rise: a card that loses its poet cannot
 *    drop its quotations out of the measure unseen.
 * A dictionary string belongs wherever its key is named.
 *
 * HOW (b) COUNTS. As quotedTotals in src/lib/study-guides/validate.ts counts a
 * study guide, "counted once": words are lower-cased, a quotation is split at
 * an ellipsis into its spans, and a span that sits inside a longer one, in any
 * string in any language, adds nothing. Only words in the Latin alphabet
 * count, so an Arabic sentence adds the English it quotes and not itself. A
 * quotation that is exactly a poem's title is a name, not a taking.
 *
 * WHAT IT CANNOT SEE. Whether a phrase in quotation marks is the poem's at all:
 * a critic's words, or the site's own, inside a poem's card count against that
 * poem, and a description printed as a device example ("Scattered political
 * vocabulary (...)") counts as quoted. Quotations drawn from src/lib or
 * src/components, other than dictionary strings and the registry entry a stub
 * page prints. Poem quotations held outside these trees (src/data/aqa-poetry-*,
 * the quiz and flashcard banks) unless a poetry page imports them. Two
 * overlapping quotations neither of which contains the other are both counted
 * in full, which over-counts by the overlap.
 *
 * SITE-AUTHORED STATEMENTS. A model sentence the site prints in quotation
 * marks inside a poem's card is listed in SITE_AUTHORED with the reason, as in
 * the sweep, and the list fails if an entry stops matching anything.
 *
 * FAIL-CLOSED. A poet missing from POETS fails the file, as the sibling test
 * fails, and so does a card naming a poem this file cannot match to a poet,
 * and a dynamic route it does not know how to expand.
 *
 * EXPECTED TO FAIL when written, on 26 September 2026: the failures are the
 * work list. Fix a page by cutting or paraphrasing, never by loosening this.
 * Of 103 pages measured, 47 quote a poem in copyright and 28 fail: 63 page
 * and poem pairs over their share, and 35 quotations over the word or line
 * limit on 13 of those pages. The worst was not a guide at all: the resources
 * unseen-poetry page printed two copyrighted poems almost whole as practice
 * texts, 141 of Storm on the Island's 158 words and 127 of Nettles' 136, in a
 * PoemBlock that names its poet as `author`, which no earlier guard read.
 */

// ── Which poet ──────────────────────────────────────────────────────────────

/** Link cards that fill a `poet` slot with something that is not a poet. */
const NOT_A_POET: Record<string, string> = {
  'Love and Relationships cluster': 'a "browse all poems" card on the OCR She Dwelt page',
  'Power and the Natural World cluster': 'a "browse all poems" card on the OCR Eagle page',
}

/** Short forms a surname alone cannot settle. */
const POET_ALIASES: Record<string, string> = {
  browning: 'Robert Browning',
  'barrett browning': 'Elizabeth Barrett Browning',
  'cecil day-lewis': 'C. Day-Lewis',
}

const fold = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const poetKey = (s: string) =>
  fold(s)
    .replace(/\(.*?\)/g, ' ')
    .toLowerCase()
    .replace(/[.,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const BY_KEY = new Map(Object.keys(POETS).map((p) => [poetKey(p), p]))
const BY_SURNAME = new Map<string, string[]>()
for (const p of Object.keys(POETS)) {
  const s = poetKey(p).split(' ').pop()!
  BY_SURNAME.set(s, [...(BY_SURNAME.get(s) ?? []), p])
}

/** The POETS name for a poet as a page writes it, or undefined. */
function canonicalPoet(raw: string): string | undefined {
  const k = poetKey(raw)
  if (POET_ALIASES[k]) return POET_ALIASES[k]
  if (BY_KEY.has(k)) return BY_KEY.get(k)
  const bySurname = BY_SURNAME.get(k)
  return bySurname?.length === 1 ? bySurname[0] : undefined
}

// ── Which poem ──────────────────────────────────────────────────────────────

const titleKey = (s: string) =>
  fold(s)
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/^\s*(?:an\s+)?(?:extracts?|excerpt)\s+from\s+/, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()

type Poem = { key: string; title: string; poet: string }
type Slot = { title?: string; poet?: string; tag?: string }

/** Every poem the scanned trees name with its poet, and the registry's poems. */
const TITLES = new Map<string, Poem>()
const UNKNOWN_POETS = new Set<string>()
const UNKNOWN_TITLES = new Set<string>()

function learn(title: string | undefined, rawPoet: string | undefined) {
  if (!title || !rawPoet || rawPoet in NOT_A_POET) return
  const poet = canonicalPoet(rawPoet)
  const key = titleKey(title)
  if (poet && key && !TITLES.has(key)) TITLES.set(key, { key, title, poet })
}

for (const t of SET_TEXTS) if (t.category === 'poetry-anthology') learn(t.title, t.author)

/** The poem a card names, or undefined, recording why it could not be named. */
function resolve(slot: Slot): Poem | undefined {
  if (slot.poet && slot.poet in NOT_A_POET) return undefined
  let title = slot.title
  let rawPoet = slot.poet
  const by = title ? / by (.+)$/.exec(title) : null
  if (by && canonicalPoet(by[1])) {
    title = title!.slice(0, by.index)
    rawPoet ??= by[1]
  }
  if (rawPoet) {
    const poet = canonicalPoet(rawPoet)
    if (!poet) {
      UNKNOWN_POETS.add(rawPoet)
      return undefined
    }
    if (!title) return { key: `poet:${poet}`, title: `(a poem by ${poet})`, poet }
    return TITLES.get(titleKey(title)) ?? { key: titleKey(title), title, poet }
  }
  if (!title) return undefined
  const known = TITLES.get(titleKey(title))
  if (!known) UNKNOWN_TITLES.add(title)
  return known
}

// ── Reading a file: the cards that name a poem, and what is not a quotation ─

type Owner = { start: number; end: number; slots: Slot[] }
type Field = { name: string; start: number; end: number }
type Range = { start: number; end: number; text: string }

type Props = Map<string, string | string[]>

/**
 * A string a field holds, looking through {...} and through tr(`...`) and its
 * kin, whose argument is the English the reader sees, as the scanner does. A
 * call on a dictionary key (t('a.b.c')) holds no title.
 */
function strOf(e: ts.Node | undefined): string | undefined {
  if (!e) return undefined
  if (ts.isJsxExpression(e)) return strOf(e.expression)
  if (ts.isStringLiteralLike(e)) return e.text
  if (
    ts.isCallExpression(e) &&
    e.arguments.length === 1 &&
    ts.isStringLiteralLike(e.arguments[0])
  ) {
    const s = e.arguments[0].text
    return /^[\w-]+(?:\.[\w-]+)+$/.test(s) ? undefined : s
  }
  return undefined
}

const nameOf = (p: ts.PropertyAssignment | ts.JsxAttribute) =>
  p.name.getText().replace(/^['"]|['"]$/g, '')

function propsOf(n: ts.Node): Props {
  const out: Props = new Map()
  if (ts.isObjectLiteralExpression(n)) {
    for (const p of n.properties) {
      if (!ts.isPropertyAssignment(p)) continue
      const init = p.initializer
      const list = ts.isArrayLiteralExpression(init)
        ? init.elements.map(strOf).filter((s): s is string => s !== undefined)
        : undefined
      out.set(nameOf(p), strOf(init) ?? list ?? '')
    }
  } else if (ts.isJsxOpeningElement(n) || ts.isJsxSelfClosingElement(n)) {
    for (const a of n.attributes.properties)
      if (ts.isJsxAttribute(a)) out.set(nameOf(a), strOf(a.initializer) ?? '')
  }
  return out
}

function slotsOf(props: Props): Slot[] {
  const s = (k: string) => {
    const v = props.get(k)
    return typeof v === 'string' && v.trim() ? v : undefined
  }
  const slots: Slot[] = []
  for (const tag of ['A', 'B'])
    if (s(`poem${tag}`) || s(`poet${tag}`))
      slots.push({ title: s(`poem${tag}`), poet: s(`poet${tag}`), tag })
  for (const k of props.keys()) {
    const m = /^evidence(\d+)poem$/.exec(k)
    if (m && s(k)) slots.push({ title: s(k), tag: m[1] })
  }
  // `author` is a poet's name here: the unseen-poetry PoemBlock takes one.
  const poet = s('poet') ?? s('author')
  if (poet || s('poem')) slots.push({ title: s('poem') ?? s('title'), poet })
  const list = props.get('poems')
  if (Array.isArray(list)) for (const title of list) slots.push({ title })
  return slots
}

/** The slots a field is paired with by its name: poemAEvidence, analysis2. */
function paired(slots: Slot[], field: string): Slot[] {
  return slots.filter(
    (sl) =>
      sl.tag !== undefined &&
      (/^\d+$/.test(sl.tag)
        ? new RegExp(`(?<!\\d)${sl.tag}$`).test(field)
        : field.startsWith(`poem${sl.tag}`) || field.startsWith(`poet${sl.tag}`)),
  )
}

/** A PoemData: an object with a string `poet` and a `lines` array. */
function isPoemData(n: ts.Node): n is ts.ObjectLiteralExpression {
  if (!ts.isObjectLiteralExpression(n)) return false
  const get = (k: string) =>
    n.properties.find(
      (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && nameOf(p) === k,
    )
  const poet = get('poet')
  const lines = get('lines')
  return (
    !!poet &&
    ts.isStringLiteralLike(poet.initializer) &&
    !!lines &&
    ts.isArrayLiteralExpression(lines.initializer)
  )
}

/** Whether an `example` value is a PoemData language device's, which the viewer quotes. */
function isDeviceExample(p: ts.PropertyAssignment): boolean {
  const device = p.parent
  const list = device?.parent
  const field = list?.parent
  return (
    ts.isObjectLiteralExpression(device) &&
    !!list &&
    ts.isArrayLiteralExpression(list) &&
    !!field &&
    ts.isPropertyAssignment(field) &&
    nameOf(field) === 'languageDevices' &&
    isPoemData(field.parent)
  )
}

type Parsed = {
  file: string
  src: string
  owners: Owner[]
  fields: Field[]
  poemData: Slot[]
  extracts: Quotation[]
  modelExamples: Range[]
  imports: string[]
}

function parse(file: string, src: string): Parsed {
  const sf = ts.createSourceFile(
    file,
    src,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  )
  const out: Parsed = {
    file,
    src,
    owners: [],
    fields: [],
    poemData: [],
    extracts: [],
    modelExamples: [],
    imports: [],
  }
  const visit = (n: ts.Node) => {
    if ((ts.isImportDeclaration(n) || ts.isExportDeclaration(n)) && n.moduleSpecifier)
      out.imports.push((n.moduleSpecifier as ts.StringLiteral).text)
    if (
      ts.isCallExpression(n) &&
      n.expression.kind === ts.SyntaxKind.ImportKeyword &&
      n.arguments[0] &&
      ts.isStringLiteralLike(n.arguments[0])
    )
      out.imports.push(n.arguments[0].text)
    if (ts.isPropertyAssignment(n) || ts.isJsxAttribute(n))
      out.fields.push({ name: nameOf(n), start: n.getStart(), end: n.getEnd() })
    if (ts.isPropertyAssignment(n) && nameOf(n) === 'example' && !isDeviceExample(n)) {
      const u = literalUnit(n.initializer, src)
      if (u)
        out.modelExamples.push({
          start: n.initializer.getStart(),
          end: n.initializer.getEnd(),
          text: u.text.trim(),
        })
    }
    if (
      ts.isObjectLiteralExpression(n) ||
      ts.isJsxOpeningElement(n) ||
      ts.isJsxSelfClosingElement(n)
    ) {
      const props = propsOf(n)
      const slots = slotsOf(props)
      for (const sl of slots) learn(sl.title, sl.poet)
      if (slots.length) {
        const region = ts.isJsxOpeningElement(n) ? n.parent : n
        out.owners.push({ start: region.getStart(), end: region.getEnd(), slots })
      }
      if (isPoemData(n))
        out.poemData.push({
          title: props.get('title') as string,
          poet: props.get('poet') as string,
        })
    }
    // "[Extract: ...]" is a placeholder around the poem's own words.
    if (ts.isStringLiteralLike(n)) {
      const m = /^\[Extract:\s*([^\]]*)\]$/i.exec(n.text.trim())
      if (m) {
        const text = m[1].trim()
        out.extracts.push({
          file,
          line: sf.getLineAndCharacterOfPosition(n.getStart()).line + 1,
          text,
          words: wordCount(text),
          lines: lineCount(text),
          srcStart: n.getStart(),
          srcEnd: n.getEnd(),
        })
      }
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  return out
}

/** The poems a quotation at `at` belongs to, by the rules in the docblock. */
function poemsAt(p: Parsed, at: number, own: Poem | undefined): Poem[] {
  const around = (r: { start: number; end: number }) => r.start <= at && at < r.end
  const size = (r: { start: number; end: number }) => r.end - r.start
  const chain = p.owners.filter(around).sort((a, b) => size(a) - size(b))
  const names = p.fields.filter(around).sort((a, b) => size(a) - size(b))
  const slots: Slot[] = []
  let narrowed = false
  for (const o of chain) {
    for (const f of names.filter((f) => f.start >= o.start && f.end <= o.end)) {
      const pair = paired(o.slots, f.name)
      if (pair.length) {
        slots.push(...pair)
        narrowed = true
        break
      }
    }
    if (narrowed) break
    slots.push(...o.slots)
  }
  const out = new Map<string, Poem>()
  for (const sl of slots) {
    const poem = resolve(sl)
    if (poem) out.set(poem.key, poem)
  }
  if (!narrowed && own) out.set(own.key, own)
  return [...out.values()]
}

/** A value that says it is the site's own words, not the poem's. */
const DECLARED_PARAPHRASE =
  /^\[(?:paraphrase|stanza|lines?|penultimate|final|opening)\b[^\]]*\]|(?:\(\s*paraphrase\b[^)]*\)|[-\u2013\u2014]\s*paraphrase\b[^()]*)\s*$/i

/**
 * The site's own sentences in quotation marks inside a poem's card, matched by
 * file and opening words, as SITE_AUTHORED is in the sweep test. The list
 * fails if an entry stops matching, so it cannot outlive what it excuses.
 */
const SITE_AUTHORED: { file: string; opens: string; why: string }[] = [
  {
    file: 'src/app/revision/poetry/power-and-conflict/essay-plans/page.tsx',
    opens: 'Both poems are about people who are affected',
    why: 'a model comparison offered in a grade 5 approach, introduced by "Comment:"',
  },
]

const normal = (s: string) =>
  s
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()

/**
 * Quotations on a poem's page from a DIFFERENT work, which the page resolver
 * would otherwise count against the poem's share: Macbeth's soliloquy on the
 * page for Frost's "Out, Out-", whose title alludes to it. Each names its
 * source, and like SITE_AUTHORED the list fails if an entry stops matching.
 * Only a work out of copyright belongs here; a copyrighted source would need a
 * share of its own.
 */
const OTHER_WORKS: { file: string; opens: string; source: string }[] = [
  {
    file: 'src/app/igcse/edexcel/poetry/out-out/page.tsx',
    opens: 'Out, out, brief candle',
    source: 'Macbeth, Act 5 Scene 5 (Shakespeare, public domain)',
  },
  {
    file: 'src/app/igcse/edexcel/poetry/out-out/page.tsx',
    opens: 'a tale told by an idiot',
    source: 'Macbeth, Act 5 Scene 5 (Shakespeare, public domain)',
  },
]

const excusedBy = (q: Quotation) =>
  SITE_AUTHORED.find((x) => x.file === q.file && normal(q.text).startsWith(normal(x.opens))) ??
  OTHER_WORKS.find((x) => x.file === q.file && normal(q.text).startsWith(normal(x.opens)))

// ── Pages ───────────────────────────────────────────────────────────────────

/** Whole-value quotation fields on a poetry page: the sweep's, and `example`. */
const POEM_FIELDS: ReadonlySet<string> = new Set([...QUOTE_FIELDS, 'example'])

type Source = { file: string; src: string }
type Measured = Quotation & { poems: Poem[] }

/** What SITE_AUTHORED excused, so the list can be shown to excuse something. */
const EXCUSED: Quotation[] = []
type Page = { page: string; files: string[]; poem?: Poem; quotations: Measured[] }

/** Every quotation a page prints, each with the poems it belongs to. */
function measure(
  page: string,
  sources: Source[],
  route: Poem | undefined,
  extra: Measured[] = [],
): Page {
  const parsed = sources.map((s) => parse(s.file, s.src))
  // The page's own poem: its one PoemData, or else the set text its route is named after.
  const data = new Map<string, Poem>()
  for (const p of parsed)
    for (const d of p.poemData) {
      const r = resolve(d)
      if (r) data.set(r.key, r)
    }
  const own = data.size === 1 ? [...data.values()][0] : route
  const byPlace = new Map<string, Measured>()
  const add = (q: Quotation, poems: Poem[]) => {
    if (DECLARED_PARAPHRASE.test(q.text)) return
    if (excusedBy(q)) {
      EXCUSED.push(q)
      return
    }
    const k = `${q.file}:${q.srcStart}:${q.srcEnd}`
    const prior = byPlace.get(k)
    if (!prior) byPlace.set(k, { ...q, poems: [...poems] })
    else
      for (const pm of poems) if (!prior.poems.some((x) => x.key === pm.key)) prior.poems.push(pm)
  }
  for (const q of extra) add(q, q.poems)
  for (const p of parsed) {
    const model = (q: Quotation) =>
      p.modelExamples.some((r) => r.start <= q.srcStart && q.srcEnd <= r.end && r.text === q.text)
    for (const q of [...scanSource(p.file, p.src, POEM_FIELDS), ...p.extracts])
      if (!model(q)) add(q, poemsAt(p, q.srcStart, own))
    for (const { key, at } of keyMentions(p.src))
      for (const q of DICT_QUOTES.get(key) ?? []) add(q, poemsAt(p, at, own))
  }
  return { page, files: sources.map((s) => s.file), poem: own, quotations: [...byPlace.values()] }
}

const read = (file: string): Source => ({ file, src: readFileSync(join(ROOT, file), 'utf8') })

const IGCSE = readdirSync(join(ROOT, 'src/app/igcse'), { withFileTypes: true })
  .filter((e) => e.isDirectory() && existsSync(join(ROOT, 'src/app/igcse', e.name, 'poetry')))
  .map((e) => `src/app/igcse/${e.name}/poetry`)
// The revision-notes library holds guides to poems too: Half-past Two, Hide
// and Seek, Do not go gentle and The Door. Until 26 September 2026 this file
// never looked there, and the first two quoted about a third and a quarter of
// poems still in copyright. Only directories named after a registered poem are
// taken: the rest of the library is novels and plays, which the sweep test
// covers.
const NOTES = 'src/app/resources/revision-notes'
const NOTE_POEMS = readdirSync(join(ROOT, NOTES), { withFileTypes: true })
  .filter(
    (e) =>
      e.isDirectory() &&
      SET_TEXTS.some((t) => t.slug === e.name && t.category === 'poetry-anthology'),
  )
  .map((e) => `${NOTES}/${e.name}`)
const ROOTS = ['src/app/revision/poetry', ...IGCSE, 'src/app/resources/poetry', ...NOTE_POEMS]
const IN_SCOPE = ROOTS.flatMap((r) => sourcesUnder(join(ROOT, r))).sort()

/** A module specifier resolved to a source file under src/app or src/data. */
function resolveImport(from: string, spec: string): string | undefined {
  const base = spec.startsWith('.')
    ? join(dirname(from), spec)
    : /^@\/(app|data)\//.test(spec)
      ? join('src', spec.slice(2))
      : undefined
  if (!base) return undefined
  for (const c of [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    join(base, 'index.ts'),
    join(base, 'index.tsx'),
  ])
    if (existsSync(join(ROOT, c)) && statSync(join(ROOT, c)).isFile())
      return c.split('\\').join('/')
  return undefined
}

/** A page, the route files beside it, and all it imports from src/app or src/data. */
function filesOf(page: string): string[] {
  const out = new Set<string>()
  const dir = dirname(page)
  const beside = ['layout.tsx', 'loading.tsx', 'error.tsx']
    .map((f) => `${dir}/${f}`)
    .filter((f) => existsSync(join(ROOT, f)))
  // The files beside the page are walked for imports too, not only listed.
  // Until 26 September 2026 only the page's imports were followed, so a
  // layout that mounts <GuideSupplement guide={guide} /> from
  // src/data/study-guides/<slug>.ts put the guide's quotations on the route
  // unmeasured: Half-past Two's page and supplement together quoted about 42
  // distinct words of a poem whose share is 29, and Hide and Seek's 54 of 34.
  // The whole guide file is counted, including sections the supplement leaves
  // to the page (its `native` claims), which errs towards counting.
  const stack = [page, ...beside]
  const seen = new Set<string>()
  while (stack.length) {
    const f = stack.pop()!
    if (seen.has(f)) continue
    seen.add(f)
    out.add(f)
    for (const spec of parse(f, readFileSync(join(ROOT, f), 'utf8')).imports) {
      const r = resolveImport(f, spec)
      if (r) stack.push(r)
    }
  }
  return [...out].sort()
}

const REGISTRY = 'src/lib/board/set-texts.ts'

/** The quotations inside one registry entry, which a stub page prints. */
function registryQuotations(slug: string, poem: Poem): Measured[] {
  const src = readFileSync(join(ROOT, REGISTRY), 'utf8')
  const sf = ts.createSourceFile(REGISTRY, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  let range: [number, number] | undefined
  const visit = (n: ts.Node) => {
    if (ts.isObjectLiteralExpression(n) && propsOf(n).get('slug') === slug)
      range = [n.getStart(), n.getEnd()]
    else ts.forEachChild(n, visit)
  }
  visit(sf)
  if (!range) return []
  return scanSource(REGISTRY, src)
    .filter((q) => q.srcStart >= range![0] && q.srcStart < range![1])
    .map((q) => ({ ...q, poems: [poem] }))
}

const registered = (slug: string): Poem | undefined => {
  const t = SET_TEXTS.find((x) => x.slug === slug && x.category === 'poetry-anthology')
  return t ? resolve({ title: t.title, poet: t.author }) : undefined
}

/**
 * The dynamic routes, expanded. Each checks that the page still says what it
 * is taken to say, so this cannot outlive a change to the route.
 */
const DYNAMIC: Record<string, { mustSay: string[]; expand: (page: string) => Page[] }> = {
  'src/app/revision/poetry/pearson-igcse/[slug]/page.tsx': {
    mustSay: [
      "'edexcel-igcse-lang'",
      "slug === 'the-bright-lights-of-sarajevo'",
      '<StubStudyGuide',
    ],
    expand: (page) => {
      const stub = 'src/app/revision/texts/_components/stub-study-guide.tsx'
      return SET_TEXTS.filter(
        (t) => t.category === 'poetry-anthology' && t.boards.includes('edexcel-igcse-lang'),
      ).map(({ slug }) => {
        const poem = registered(slug)
        // The Bright Lights guide is written into the page file itself; every
        // other slug renders the stub, which prints the registry description.
        return slug === 'the-bright-lights-of-sarajevo'
          ? measure(`${page}#${slug}`, filesOf(page).map(read), poem)
          : measure(
              `${page}#${slug}`,
              [read(stub)],
              poem,
              poem ? registryQuotations(slug, poem) : [],
            )
      })
    },
  },
}

// Learn every poem the trees name with its poet before any page is measured,
// so a card naming a poem by title alone resolves whatever order files are read.
for (const f of new Set(IN_SCOPE.flatMap((f) => (f.endsWith('/page.tsx') ? filesOf(f) : [f]))))
  parse(f, readFileSync(join(ROOT, f), 'utf8'))

const PAGE_FILES = IN_SCOPE.filter((f) => f.endsWith('/page.tsx'))
const UNEXPANDED: string[] = []
const PAGES: Page[] = PAGE_FILES.flatMap((page) => {
  if (/\[[^\]]+\]/.test(page)) {
    const d = DYNAMIC[page]
    const src = readFileSync(join(ROOT, page), 'utf8')
    if (!d || !d.mustSay.every((s) => src.includes(s))) {
      UNEXPANDED.push(page)
      return []
    }
    return d.expand(page)
  }
  return [measure(page, filesOf(page).map(read), registered(dirname(page).split('/').pop()!))]
})

// ── Counting ────────────────────────────────────────────────────────────────

/** The word runs a quotation takes: lower-cased, Latin alphabet, split at ellipses. */
function spans(text: string): string[][] {
  return text
    .split(/\.\.\.|\u2026/)
    .map((part) =>
      part
        .replace(/[\u2014\u2013-]/g, ' ')
        .split(/\s+/)
        .map((w) =>
          w
            .toLowerCase()
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''),
        )
        // A lone letter quoted as a sound (the "s" of sibilance) is not a word.
        .filter((w) => /[\p{Script=Latin}\p{N}]/u.test(w) && (w.length > 1 || /^[aio\d]$/.test(w))),
    )
    .filter((s) => s.length)
}

const inside = (small: string[], big: string[]) => {
  outer: for (let i = 0; i + small.length <= big.length; i++) {
    for (let j = 0; j < small.length; j++) if (big[i + j] !== small[j]) continue outer
    return true
  }
  return false
}

// A registered set text's title is a name too, whatever its form. Until
// 26 September 2026 only poem titles were: the Out, Out- guide recommends "The
// Story of an Hour" for comparison, and those five words were counted as five
// words taken from Frost's poem, putting the route one word over its share.
const SET_TEXT_TITLES = new Set(SET_TEXTS.map((t) => titleKey(t.title)))
const isTitle = (text: string) => TITLES.has(titleKey(text)) || SET_TEXT_TITLES.has(titleKey(text))

/** Distinct words taken, counted once: a span inside a longer one adds nothing. */
function countedOnce(texts: string[]): number {
  const all = texts
    .filter((t) => !isTitle(t))
    .flatMap(spans)
    .sort((a, b) => b.length - a.length)
  const kept: string[][] = []
  for (const s of all) if (!kept.some((k) => inside(s, k))) kept.push(s)
  return kept.reduce((n, s) => n + s.length, 0)
}

// ── Placing what sits outside every card ────────────────────────────────────

/** Each poem's quotations anywhere in the trees, as three-word runs and short takings. */
const RUNS = new Map<string, Set<string>>()
const SHORT = new Map<string, Set<string>>()
const POEM_BY_KEY = new Map<string, Poem>()
const note = (m: Map<string, Set<string>>, k: string, poem: string) =>
  m.set(k, (m.get(k) ?? new Set()).add(poem))
for (const q of PAGES.flatMap((p) => p.quotations))
  for (const poem of q.poems) {
    POEM_BY_KEY.set(poem.key, poem)
    if (isTitle(q.text)) continue
    for (const s of spans(q.text)) {
      if (s.length < 3) note(SHORT, s.join(' '), poem.key)
      for (let i = 0; i + 3 <= s.length; i++) note(RUNS, s.slice(i, i + 3).join(' '), poem.key)
    }
  }

/** The poems whose quotations elsewhere a loose quotation matches. */
function matching(text: string): Poem[] {
  const keys = new Set<string>()
  for (const s of spans(text)) {
    if (s.length < 3) for (const k of SHORT.get(s.join(' ')) ?? []) keys.add(k)
    for (let i = 0; i + 3 <= s.length; i++)
      for (const k of RUNS.get(s.slice(i, i + 3).join(' ')) ?? []) keys.add(k)
  }
  return [...keys].map((k) => POEM_BY_KEY.get(k)!)
}

for (const pg of PAGES)
  for (const q of pg.quotations)
    if (!q.poems.length && !isTitle(q.text)) q.poems.push(...matching(q.text))

// ── The measures ────────────────────────────────────────────────────────────

const where = (q: Quotation) => `${q.file}:${q.line} (${q.words} words, ${q.lines} lines)`
const overLong = (q: Quotation) =>
  q.words > FAIR_DEALING.quoteWords || q.lines > FAIR_DEALING.poemQuoteLines

const lengthOf = (poem: Poem) =>
  Object.entries(POEM_WORDS).find(([t]) => titleKey(t) === poem.key)?.[1]

type Row = {
  page: string
  poem: string
  poet: string
  overLong: string[]
  quoted: number
  cap: number
  words?: number
}

/** One row for each copyrighted poem each page quotes. */
function rows(pages: Page[]): Row[] {
  const out: Row[] = []
  for (const pg of pages) {
    const poems = new Map<string, Poem>()
    for (const q of pg.quotations)
      for (const p of q.poems) if (inCopyright(p.poet)) poems.set(p.key, p)
    for (const poem of poems.values()) {
      const mine = pg.quotations.filter((q) => q.poems.some((p) => p.key === poem.key))
      const words = lengthOf(poem)
      out.push({
        page: pg.page,
        poem: poem.title,
        poet: poem.poet,
        overLong: mine.filter(overLong).map(where),
        quoted: countedOnce(mine.map((q) => q.text)),
        cap: limitsFor('poem', words ? { words } : undefined).totalWords,
        words,
      })
    }
  }
  return out
}

const ROWS = rows(PAGES)
const MEASURED = PAGES.flatMap((p) => p.quotations)
const LOOSE = MEASURED.filter((q) => !q.poems.length && !isTitle(q.text) && spans(q.text).length)

describe('every poetry page, on every board', () => {
  it('finds the pages and measures their quotations', () => {
    // Floors from 26 September 2026, so a scanner that stopped finding pages or
    // quotations, or a resolver that stopped placing them, cannot pass by
    // measuring nothing. Cutting quotations to fix a page lowers the fourth
    // figure: lower it to the new count in the same change, and say so.
    expect(IN_SCOPE.length).toBeGreaterThanOrEqual(194)
    expect(PAGE_FILES.length).toBeGreaterThanOrEqual(99)
    expect(PAGES.length).toBeGreaterThanOrEqual(103)
    // 9,484 when this test was written; 8,733 once the same change had cut the
    // pages it found over their share back to it, on 26 September 2026.
    expect(MEASURED.length).toBeGreaterThanOrEqual(8733)
    expect(new Set(ROWS.map((r) => r.page)).size).toBeGreaterThanOrEqual(47)
    // 123 before the same change's cuts; 112 after, where a page now describes
    // a poem it used to quote.
    expect(ROWS.length).toBeGreaterThanOrEqual(112)
  })

  it.each([
    ['src/app/revision/poetry/power-and-conflict/war-photographer/page.tsx', 'War Photographer'],
    ['src/app/revision/poetry/power-and-conflict/remains/page.tsx', 'Remains'],
    ['src/app/revision/poetry/love-and-relationships/follower/page.tsx', 'Follower'],
    ['src/app/igcse/edexcel/poetry/half-caste/page.tsx', 'Half-caste'],
    ['src/app/revision/poetry/power-and-conflict/essay-plans/page.tsx', 'Kamikaze'],
    ['src/app/resources/poetry/love-and-relationships/page.tsx', 'Winter Swans'],
    ['src/app/resources/poetry/unseen-poetry/page.tsx', 'Nettles'],
  ])('measures %s for %s', (page, title) => {
    const row = ROWS.find((r) => r.page === page && titleKey(r.poem) === titleKey(title))
    expect(row?.quoted ?? 0).toBeGreaterThanOrEqual(10)
  })

  it('reaches the poem guides in the revision-notes library', () => {
    // What this file reported before it looked there: nothing, and two pages
    // over their share.
    expect(NOTE_POEMS).toEqual(
      expect.arrayContaining([`${NOTES}/half-past-two`, `${NOTES}/hide-and-seek`]),
    )
    for (const dir of NOTE_POEMS)
      expect(
        PAGES.some((p) => p.page.startsWith(`${dir}/`)),
        dir,
      ).toBe(true)
  })

  it('reaches every source file under the poetry trees', () => {
    const reached = new Set(PAGES.flatMap((p) => p.files))
    expect(IN_SCOPE.filter((f) => !reached.has(f))).toEqual([])
  })

  it('expands every dynamic route', () => {
    expect(UNEXPANDED).toEqual([])
  })

  it('knows every poet, so none is judged by being unknown', () => {
    expect([...UNKNOWN_POETS].sort(), 'add each to POETS in helpers/poets.ts').toEqual([])
  })

  it('can name the poet of every poem a card names', () => {
    expect([...UNKNOWN_TITLES].sort(), 'put the poet on the card').toEqual([])
  })

  it('leaves no more quotations unplaced than it did', () => {
    // A quotation outside every card, sharing no three words with any poem's
    // quotations elsewhere. On 26 September 2026 the 177 were tips, model
    // sentences, sentence frames and public-domain examples, and four
    // fragments of three or four words on the resources unseen-poetry page.
    // If a new one is the site's own words, raise the ceiling; if it quotes a
    // poem, name the poem on its card.
    expect(LOOSE.length).toBeLessThanOrEqual(177)
  })

  it('excuses nothing that is not there', () => {
    const stale = [...SITE_AUTHORED, ...OTHER_WORKS].filter(
      (x) => !EXCUSED.some((q) => excusedBy(q) === x),
    )
    expect(stale.map((x) => `${x.file}: ${x.opens}`)).toEqual([])
  })

  it(`prints no quotation of a copyrighted poem over ${FAIR_DEALING.quoteWords} words or ${FAIR_DEALING.poemQuoteLines} lines`, () => {
    expect(ROWS.flatMap((r) => r.overLong.map((w) => `${w}: ${r.poem} (${r.poet})`))).toEqual([])
  })

  it(`quotes no more than ${FAIR_DEALING.poemShare * 100} per cent of any copyrighted poem on one page`, () => {
    expect(
      ROWS.filter((r) => r.quoted > r.cap).map(
        (r) => `${r.page}: ${r.poem} (${r.poet}) quotes ${r.quoted} distinct words, cap ${r.cap}`,
      ),
    ).toEqual([])
  })
})

// ── The reverse test ────────────────────────────────────────────────────────

/**
 * A page for a copyrighted poem, written in made-up words so that it quotes
 * nothing real, run through the same measure. Remains is 201 words in
 * POEM_WORDS, so its cap is 30. What the page quotes from it, counted once:
 *  - a 15-word key quotation, over the word limit               15
 *  - a three-line device example, over the line limit             6
 *  - the words in an "[Extract: ...]" placeholder                 3
 *  - a compare card's quotation, which counts for both poems      3
 *  - an 8-word quotation in a plain string                        8
 * = 35, over the cap. The same three words again inside an Arabic string, a
 * paraphrased line, a labelled line, a declared paraphrase, an editorial note
 * and the title in quotation marks each add nothing.
 */
const FIXTURE = [
  'const poem: PoemData = {',
  "  title: 'Remains',",
  "  poet: 'Simon Armitage',",
  '  lines: [',
  "    { text: '[Paraphrase] The speaker recalls a patrol through the town.' },",
  "    { text: '[Stanza 2] The speaker describes the street again.' },",
  "    { text: '[Extract: amber basalt cobalt]' },",
  '  ],',
  '  keyQuotes: [',
  "    { quote: 'alpha bravo charlie delta echo foxtrot golf hotel india juliet kilo lima mike november oscar', analysis: 'Made up.' },",
  "    { quote: 'The opening image of the patrol (paraphrase)', analysis: 'The site paraphrasing.' },",
  "    { quote: '[Quotation withheld pending source verification.]', analysis: 'A note.' },",
  '  ],',
  '  languageDevices: [',
  "    { device: 'Enjambment', example: 'papa quebec / romeo sierra / tango uniform', effect: 'Made up.' },",
  '  ],',
  `  contextAr: 'نص "alpha bravo charlie" نص',`,
  '}',
  "const comparisons = [{ title: 'Exposure', poet: 'Wilfred Owen', reason: 'Both poems: \"victor whiskey xray\".' }]",
  'const aside = \'The title "Remains" is a name, not a taking.\'',
  'const more = \'He writes "yankee zulu ember flint garnet hazel iris jade" here.\'',
].join('\n')

/** An essay plan on a hub, where each evidence field is paired with one poem. */
const PLAN = [
  'const PLANS = [{',
  "  poemA: 'Remains', poetA: 'Armitage', poemB: 'Exposure', poetB: 'Owen',",
  '  paragraphs: [{ poemAEvidence: \'"one two three"\', poemBEvidence: \'"four five six seven"\' }],',
  '}]',
].join('\n')

describe('the measure itself', () => {
  const fixture = measure(
    'fixture/page.tsx',
    [{ file: 'fixture/page.tsx', src: FIXTURE }],
    undefined,
  )
  const [remains, ...others] = rows([fixture])

  it('fails a fixture page that quotes too much, and counts it exactly', () => {
    expect(remains?.poem).toBe('Remains')
    expect(others.map((r) => r.poem)).toEqual([])
    expect(remains.overLong).toEqual([
      'fixture/page.tsx:10 (15 words, 1 lines)',
      'fixture/page.tsx:15 (6 words, 3 lines)',
    ])
    expect(remains.quoted).toBe(35)
    expect(remains.cap).toBe(30)
    // The same comparison the check above makes.
    expect(remains.quoted > remains.cap).toBe(true)
  })

  it('gives each evidence field to its own poem', () => {
    const plan = measure('plan/page.tsx', [{ file: 'plan/page.tsx', src: PLAN }], undefined)
    expect(rows([plan]).map((r) => [r.poem, r.quoted])).toEqual([['Remains', 3]])
    const b = plan.quotations.find((q) => q.text === 'four five six seven')
    expect(b?.poems.map((p) => p.title)).toEqual(['Exposure'])
  })

  it("reads a guide's section paths as routes, and its quotations as quotations", () => {
    // A study guide's `native` map is keyed by section name, keyQuotes among
    // them, and its values are paths. Until 26 September 2026 each path was
    // measured as words of the poem.
    const src = [
      'export const guide = {',
      "  native: { keyQuotes: '/resources/revision-notes/the-door' },",
      "  keyQuotes: ['alpha bravo charlie'],",
      '}',
    ].join('\n')
    expect(scanSource('guide.ts', src, POEM_FIELDS).map((q) => q.text)).toEqual([
      'alpha bravo charlie',
    ])
  })

  it('does not know a poet it has not been told about', () => {
    expect(canonicalPoet('A. Nonymous Versifier')).toBeUndefined()
    expect(canonicalPoet('Lord Byron (1816)')).toBe('Lord Byron')
    expect(canonicalPoet('Barrett Browning')).toBe('Elizabeth Barrett Browning')
  })
})
