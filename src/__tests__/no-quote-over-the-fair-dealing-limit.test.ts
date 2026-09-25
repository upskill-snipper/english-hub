import { describe, it, expect } from 'vitest'
import ts from 'typescript'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { FAIR_DEALING } from '@/lib/study-guides/fair-dealing'
import { wordCount, lineCount } from '@/lib/study-guides/validate'

/**
 * No quotation from a text in copyright over the house limit, and no
 * fifteen-word claim that the page printing it does not keep.
 *
 * THE DEFECT. The site's rule for quoting set texts in copyright has long been
 * "under 15 words", and it was printed: "All quotes are 15 words or fewer",
 * "Short quotations (≤15 words each)", "no quotation exceeds fifteen words", in
 * English, Arabic and Spanish. An audit on 25 September 2026 found the pages
 * that printed it breaking it: 396 quotations of 15 words or more across 75
 * guide files, the longest 59 words. They included a novel's final sentence in
 * full, a 1933 song lyric (a separate copyright work, quoted twice), and, on a
 * site used by children, a 29-word passage containing an obscenity. The quiz
 * and game data files that state the rule in a comment broke it 26 times more.
 * Nothing failed: a notice is a sentence, and nothing read the quotations it
 * described. The first scanner written for the audit found 11 of them, because
 * it looked only for `quote:` fields and curly quotation marks.
 *
 * WHAT WAS DONE. Every quotation over the limit was shortened by deletion only:
 * one contiguous verbatim span, or two joined by " ... ", chosen to keep the
 * words the analysis discusses. The explicit passage was removed and its
 * analysis paraphrased. Both copies of the lyric were replaced by editorial
 * notes in square brackets. Where an analysis described structure the shortened card no longer
 * shows ("the triple repetition", "the tricolon"), it now says it is describing
 * the full passage. The notices were kept: once every quotation is under 15
 * words they are true, and this file keeps them true.
 *
 * WHAT IT CHECKS.
 *  1. Every guide page for a set text whose registry copyrightStatus is
 *     'copyright': every directory under src/app named after the slug or a
 *     known alias that holds a page.tsx, and every file beneath it, plus every
 *     dictionary string those files name by key. No quotation may exceed
 *     FAIR_DEALING.quoteWords words; from a poem, none may exceed
 *     FAIR_DEALING.poemQuoteLines lines.
 *  2. Every file under src/app or src/lib/i18n (generated excluded) that states
 *     a fifteen-word rule keeps it on the files it is printed on. A claim is
 *     held to its own words: "15 or fewer" allows 15, "under 15" allows 14. A
 *     dictionary claim is checked on every file that names its key. A comment
 *     counts: "kept to 15 words or fewer" above a data array is a claim about
 *     the array.
 *
 * HOW A QUOTATION IS FOUND. The TypeScript parser reads each file, so the
 * quotation marks that delimit a JS string are never mistaken for quotation
 * marks in it. The shapes these pages use:
 *  - a field or JSX attribute whose whole value is printed as a quotation
 *    (QUOTE_FIELDS), unless its card says `paraphrase` (and renders without
 *    marks) or the value is an editorial note in [square brackets];
 *  - text inside double marks, straight or curly, paired in order whatever
 *    their orientation, because several pages open a quotation with a closing
 *    mark; guillemets too;
 *  - text inside single marks, telling a mark from an apostrophe (Offred's,
 *    'em, runnin');
 *  - JSX text with its entities decoded (&ldquo; &rsquo; &apos;), flattened
 *    across nested elements so a quotation broken by <em> is measured whole,
 *    and tr(`...`) arguments, which are the English the reader sees;
 *  - dictionary strings in all three locales.
 * Words are counted by the study-guide validator's own wordCount, so a word
 * here is the same thing as a word in study-guides.test.ts.
 *
 * WHAT IT CANNOT SEE. Quotations a page imports from outside its route
 * directory, other than dictionary strings. Study guides held in
 * src/data/study-guides are measured by study-guides.test.ts against the same
 * FAIR_DEALING.quoteWords; the component that prints their fair-dealing notice
 * holds no quotations, so claim 2 passes it on that test's strength. A straight
 * double mark used as an inch mark would mis-pair. A dialect elision missing
 * from TRAILING_ELISION reads as a closing mark and under-measures the
 * single-quoted passage it sits in. Sung lines in a musical set text (Blood
 * Brothers) are measured as quotations; whether they may be quoted at all is a
 * separate question.
 *
 * SITE-AUTHORED STATEMENTS. Eight places print the site's own words in
 * quotation marks: model sentences, an exam statement, an examiner's rewrite.
 * They are listed in SITE_AUTHORED with the reason, matched by file and
 * opening words, and the list fails if an entry stops matching anything, so it
 * cannot quietly outlive the sentence it excused.
 *
 * PROVED TO BITE, 25 September 2026. Each mutation was checked by hash to have
 * changed the file before the run, then restored byte for byte, after which
 * all 11 tests passed again:
 *  - quote="Context is all." on
 *    src/app/resources/revision-notes/the-handmaids-tale/page.tsx padded with
 *    twelve filler words: "prints no quotation over 14 words" failed with
 *    "the-handmaids-tale/page.tsx:551 (15 words, 1 lines)".
 *  - "// All quotes are 15 words or fewer." added to the top of
 *    src/app/revision/texts/macbeth/page.tsx, a public-domain guide outside
 *    check 1: "every page that claims a fifteen-word rule keeps it" failed,
 *    naming eight Macbeth quotations of 17 to 26 words.
 *  - "(all quotes are 15 words or fewer)" added to the English string of
 *    rev.texts.macbeth.ao2_reading_label in dictionary-rev-texts.ts: the same
 *    test failed, naming the dictionary line and the same eight quotations on
 *    the one page that prints the key.
 */

const ROOT = process.cwd()
const posix = (p: string) => relative(ROOT, p).split('\\').join('/')

// ── The scanner ─────────────────────────────────────────────────────────────

/**
 * A run of decoded text and, for each character, the source offset it came
 * from. `map` has one extra entry, the offset just past the last character, so
 * a span that ends on an escape (\u2019, &rdquo;) still reports its true end.
 */
type Unit = { text: string; map: number[]; field?: string; paraphrase?: boolean }

const ENTITIES: Record<string, string> = {
  ldquo: '\u201C',
  rdquo: '\u201D',
  lsquo: '\u2018',
  rsquo: '\u2019',
  quot: '"',
  apos: "'",
  amp: '&',
  mdash: '\u2014',
  ndash: '\u2013',
  hellip: '\u2026',
  nbsp: ' ',
  lt: '<',
  gt: '>',
  laquo: '\u00AB',
  raquo: '\u00BB',
}

function decodeEntities(u: Unit): Unit {
  let text = ''
  const map: number[] = []
  const s = u.text
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '&') {
      const m = /^&(#x[0-9a-f]+|#\d+|[a-z]+);/i.exec(s.slice(i, i + 12))
      const k = m?.[1]
      const ch = !k
        ? undefined
        : k.startsWith('#x')
          ? String.fromCodePoint(parseInt(k.slice(2), 16))
          : k.startsWith('#')
            ? String.fromCodePoint(parseInt(k.slice(1), 10))
            : ENTITIES[k.toLowerCase()]
      if (m && ch !== undefined) {
        text += ch
        map.push(u.map[i])
        i += m[0].length - 1
        continue
      }
    }
    text += s[i]
    map.push(u.map[i])
  }
  map.push(u.map[s.length])
  return { ...u, text, map }
}

function decodeJs(src: string, start: number, end: number): Unit {
  let text = ''
  const map: number[] = []
  for (let i = start; i < end; i++) {
    const c = src[i]
    if (c !== '\\') {
      text += c
      map.push(i)
      continue
    }
    const n = src[i + 1]
    const m =
      /^\\u\{([0-9a-f]+)\}/i.exec(src.slice(i, i + 12)) ??
      /^\\u([0-9a-f]{4})/i.exec(src.slice(i, i + 6)) ??
      /^\\x([0-9a-f]{2})/i.exec(src.slice(i, i + 4))
    if (m) {
      text += String.fromCodePoint(parseInt(m[1], 16))
      map.push(i)
      i += m[0].length - 1
    } else if (n === '\r' || n === '\n') {
      i += n === '\r' && src[i + 2] === '\n' ? 2 : 1
    } else {
      text += n === 'n' ? '\n' : n === 't' ? '\t' : n
      map.push(i)
      i += 1
    }
  }
  map.push(end)
  return { text, map }
}

function join2(parts: Unit[]): Unit {
  const map: number[] = []
  for (const p of parts) map.push(...p.map.slice(0, -1))
  const last = parts[parts.length - 1].map
  map.push(last[last.length - 1])
  return { text: parts.map((p) => p.text).join(''), map }
}

/** Something inside a run of text that is not text: an expression, a tag. */
const gap = (n: ts.Node): Unit => ({ text: ' ', map: [n.getStart(), n.getEnd()] })

function literalUnit(node: ts.Node, src: string): Unit | null {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    const s = node.getStart()
    const e = node.getEnd()
    if (ts.isJsxAttribute(node.parent)) {
      // A JSX attribute string is not JS-escaped, but may carry entities.
      const map: number[] = []
      for (let i = s + 1; i <= e - 1; i++) map.push(i)
      return decodeEntities({ text: src.slice(s + 1, e - 1), map })
    }
    return decodeEntities(decodeJs(src, s + 1, e - 1))
  }
  if (ts.isTemplateExpression(node)) {
    const parts: Unit[] = [decodeJs(src, node.head.getStart() + 1, node.head.getEnd() - 2)]
    for (const sp of node.templateSpans) {
      parts.push(gap(sp.expression))
      const l = sp.literal
      parts.push(decodeJs(src, l.getStart() + 1, l.getEnd() - (ts.isTemplateTail(l) ? 1 : 2)))
    }
    return decodeEntities(join2(parts))
  }
  return null
}

const PASS_THROUGH = (n: ts.Node) =>
  ts.isParenthesizedExpression(n) ||
  ts.isAsExpression(n) ||
  ts.isSatisfiesExpression(n) ||
  ts.isArrayLiteralExpression(n) ||
  ts.isJsxExpression(n) ||
  ts.isCallExpression(n) ||
  ts.isConditionalExpression(n) ||
  ts.isBinaryExpression(n)

/** A card that says it is a paraphrase, and so renders without quotation marks. */
function isParaphraseOwner(owner: ts.Node | undefined): boolean {
  if (!owner) return false
  if (ts.isJsxAttributes(owner))
    return owner.properties.some(
      (a) =>
        ts.isJsxAttribute(a) &&
        a.name.getText() === 'paraphrase' &&
        (!a.initializer || !/^\{\s*false\s*\}$/.test(a.initializer.getText())),
    )
  if (ts.isObjectLiteralExpression(owner))
    return owner.properties.some(
      (p) =>
        ts.isPropertyAssignment(p) &&
        p.name.getText() === 'paraphrase' &&
        p.initializer.kind === ts.SyntaxKind.TrueKeyword,
    )
  return false
}

/** The property or attribute a literal is the value of, looking through wrappers. */
function fieldOf(node: ts.Node): { name?: string; paraphrase: boolean } {
  let n: ts.Node = node
  while (n.parent && PASS_THROUGH(n.parent)) n = n.parent
  const p = n.parent
  if (p && ts.isPropertyAssignment(p) && p.initializer === n)
    return { name: p.name.getText().replace(/['"]/g, ''), paraphrase: isParaphraseOwner(p.parent) }
  if (p && ts.isJsxAttribute(p))
    return { name: p.name.getText(), paraphrase: isParaphraseOwner(p.parent) }
  if (p && ts.isVariableDeclaration(p) && p.initializer === n)
    return { name: p.name.getText(), paraphrase: false }
  return { paraphrase: false }
}

/** A JSX element's children as one run of text, nested elements included. */
function flattenJsx(el: ts.JsxElement | ts.JsxFragment, src: string, consumed: Set<ts.Node>): Unit {
  const parts: Unit[] = []
  for (const c of el.children) {
    if (ts.isJsxText(c)) {
      const map: number[] = []
      for (let i = c.pos; i <= c.end; i++) map.push(i)
      parts.push(decodeEntities({ text: src.slice(c.pos, c.end), map }))
    } else if (ts.isJsxElement(c) || ts.isJsxFragment(c)) {
      parts.push(flattenJsx(c, src, consumed))
    } else if (ts.isJsxExpression(c) && c.expression) {
      let ex: ts.Expression = c.expression
      // tr(`...`) and its kin: the argument is the English the reader sees.
      if (ts.isCallExpression(ex) && ex.arguments.length === 1) ex = ex.arguments[0]
      const u = literalUnit(ex, src)
      if (u) consumed.add(ex)
      parts.push(u ?? gap(c))
    } else parts.push(gap(c))
  }
  return parts.length ? join2(parts) : { text: '', map: [el.getEnd()] }
}

const DQ = /["\u201C\u201D\u00AB\u00BB]/
const LETTER = /[\p{L}\p{N}]/u

/** Spans inside double quotation marks, paired in order, either orientation. */
function doubleSpans(t: string): [number, number][] {
  const out: [number, number][] = []
  let open = -1
  for (let i = 0; i < t.length; i++) {
    if (!DQ.test(t[i])) continue
    if (open < 0) open = i
    else {
      out.push([open + 1, i])
      open = -1
    }
  }
  return out
}

/** An apostrophe that opens a word ('em) rather than a quotation. */
const LEADING_ELISION = /^(em|cause|til|bout|tis|twas|n)\b/i
/**
 * An apostrophe that closes a dialect word (runnin') rather than a quotation.
 * A list, not a pattern: "skin'" and "again'" close real quotations.
 */
const TRAILING_ELISION =
  /(?:^|[^\p{L}])(an|shootin|somethin|nothin|lookin|walkin|talkin|runnin|livin|thinkin|readin|goin|comin|doin|sayin|tryin|passin|gettin|makin|takin|tellin|workin|fightin|lyin|waitin|knowin|drinkin|playin|singin|sittin|standin|feelin|killin|dyin)$/iu

/** Spans inside single quotation marks, telling a quotation mark from an apostrophe. */
function singleSpans(t: string): [number, number][] {
  const out: [number, number][] = []
  let i = 0
  while (i < t.length) {
    const c = t[i]
    const opens =
      (c === "'" || c === '\u2018') &&
      (i === 0 || !LETTER.test(t[i - 1])) &&
      /[\p{L}.\u2026[]/u.test(t[i + 1] ?? '') &&
      !(c === "'" && LEADING_ELISION.test(t.slice(i + 1)))
    if (!opens) {
      i++
      continue
    }
    let close = -1
    for (let j = i + 1; j < t.length; j++) {
      const d = t[j]
      if (d !== "'" && d !== '\u2019') continue
      if (/\s/.test(t[j - 1]) || LETTER.test(t[j + 1] ?? '')) continue
      const dialect =
        /^\s+\p{L}/u.test(t.slice(j + 1, j + 3)) &&
        TRAILING_ELISION.test(t.slice(Math.max(i + 1, j - 12), j))
      if (dialect) continue
      close = j
      break
    }
    if (close < 0) {
      i++
      continue
    }
    out.push([i + 1, close])
    i = close + 1
  }
  return out
}

type Quotation = {
  file: string
  line: number
  text: string
  words: number
  lines: number
  srcStart: number
  srcEnd: number
}

/** Fields whose whole value is printed as a quotation, with marks or without. */
const QUOTE_FIELDS = new Set([
  'quote',
  'quotation',
  'keyQuote',
  'quotes',
  'keyQuotes',
  'fragment',
  'line',
  'lines',
  'text',
  'original',
])

function scanSource(file: string, src: string): Quotation[] {
  const kind = file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, kind)
  const units: Unit[] = []
  const consumed = new Set<ts.Node>()
  const visit = (n: ts.Node, inFlat: boolean) => {
    if (ts.isImportDeclaration(n) || ts.isExportDeclaration(n) || ts.isTypeNode(n)) return
    const isJsx = ts.isJsxElement(n) || ts.isJsxFragment(n)
    if (isJsx && !inFlat && n.children.some((c) => ts.isJsxText(c) && c.getText().trim())) {
      units.push(flattenJsx(n, src, consumed))
      ts.forEachChild(n, (c) => visit(c, true))
      return
    }
    const isLiteral =
      ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n) || ts.isTemplateExpression(n)
    if (isLiteral && !consumed.has(n)) {
      const f = fieldOf(n)
      const isKey = ts.isPropertyAssignment(n.parent) && n.parent.name === n
      if (f.name !== 'className' && !isKey) {
        const u = literalUnit(n, src)
        if (u) units.push({ ...u, field: f.name, paraphrase: f.paraphrase })
      }
      if (ts.isTemplateExpression(n)) ts.forEachChild(n, (c) => visit(c, inFlat))
      return
    }
    ts.forEachChild(n, (c) => visit(c, inFlat))
  }
  visit(sf, false)

  const out: Quotation[] = []
  const push = (u: Unit, a: number, b: number) => {
    let s = a
    let e = b
    while (s < e && /\s/.test(u.text[s])) s++
    while (e > s && /\s/.test(u.text[e - 1])) e--
    const text = u.text.slice(s, e)
    const words = wordCount(text)
    if (!words) return
    out.push({
      file,
      line: sf.getLineAndCharacterOfPosition(u.map[s]).line + 1,
      text,
      words,
      lines: lineCount(text),
      srcStart: u.map[s],
      srcEnd: u.map[e],
    })
  }
  for (const u of units) {
    const t = u.text.trim()
    const wholeField =
      u.field !== undefined &&
      QUOTE_FIELDS.has(u.field) &&
      !u.paraphrase &&
      t !== '' &&
      !DQ.test(t[0]) &&
      !/^['\u2018]/.test(t) &&
      // "[Quotation withheld pending source verification.]" is an editorial note.
      !/^\[[\s\S]*\]$/.test(t) &&
      // "[Paraphrase] ..." is a poem line in the site's own words, the form the
      // Emigree page set for a poem in copyright; it is not the poem's text.
      // Its share of the poem is measured by
      // no-copyrighted-poem-printed-whole.test.ts, which counts every verbatim
      // word left in a PoemData lines array.
      !/^\[Paraphrase\]/i.test(t)
    if (wholeField) push(u, 0, u.text.length)
    for (const [a, b] of doubleSpans(u.text)) push(u, a, b)
    for (const [a, b] of singleSpans(u.text)) push(u, a, b)
  }
  // A field quotation that carries its own marks is found twice; count it once.
  const seen = new Set<string>()
  return out.filter((q) => {
    const k = `${q.srcStart}:${q.srcEnd}`
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}

// ── The site's own words in quotation marks ─────────────────────────────────

const SITE_AUTHORED: { file: string; opens: string; why: string }[] = [
  {
    file: 'src/app/resources/english-literature/edexcel/animal-farm/page.tsx',
    opens: "The noun 'comrades' initially",
    why: 'a model sentence of student analysis, introduced by "E.g."',
  },
  {
    file: 'src/app/revision/texts/things-fall-apart/context/page.tsx',
    opens: "Okonkwo's participation in",
    why: 'a model sentence showing context woven into analysis, introduced by "For example:"',
  },
  {
    file: 'src/app/revision/texts/things-fall-apart/context/page.tsx',
    opens: 'The Berlin Conference of',
    why: 'a model of a specific contextual point, set against a vague one',
  },
  {
    file: 'src/app/revision/texts/things-fall-apart/context/page.tsx',
    opens: 'Achebe saturates Part One',
    why: 'a model sentence linking context to technique, introduced by "For example:"',
  },
  {
    file: 'src/app/resources/revision-notes/anita-and-me/page.tsx',
    opens: 'Meena describes herself as',
    why: 'a model paraphrase, offered as what to write when the wording is not remembered',
  },
  {
    file: 'src/app/resources/revision-notes/never-let-me-go/page.tsx',
    opens: 'Never Let Me Go is not',
    why: 'an exam statement for discussion, followed by "How far do you agree?"',
  },
  {
    file: 'src/app/revision/quiz/quiz-questions-poetry-extra.ts',
    opens: 'The enjambment between',
    why: 'a model AO2 sentence offered as an answer option',
  },
  {
    file: 'src/app/marking/sample/inspector-calls/page.tsx',
    opens: 'Priestley, writing for a',
    why: "the examiner's suggested rewrite of a student's sentence",
  },
]

const normal = (s: string) =>
  s
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()

const excusedBy = (q: Quotation) =>
  SITE_AUTHORED.find((x) => x.file === q.file && normal(q.text).startsWith(normal(x.opens)))

// ── The dictionary ──────────────────────────────────────────────────────────

const I18N = join(ROOT, 'src/lib/i18n')
const SHARDS = readdirSync(I18N)
  .filter((n) => /^dictionary.*\.ts$/.test(n))
  .map((n) => `src/lib/i18n/${n}`)

type Entry = { key: string; file: string; strings: { lang: string; text: string; line: number }[] }

/** Every dictionary entry, with its en/ar/es strings decoded, and its quotations. */
const ENTRIES = new Map<string, Entry>()
const DICT_QUOTES = new Map<string, Quotation[]>()
for (const file of SHARDS) {
  const src = readFileSync(join(ROOT, file), 'utf8')
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const ranges: { key: string; s: number; e: number }[] = []
  const visit = (n: ts.Node) => {
    if (ts.isPropertyAssignment(n) && ts.isObjectLiteralExpression(n.initializer)) {
      const props = n.initializer.properties.filter(ts.isPropertyAssignment)
      if (props.some((p) => p.name.getText() === 'en')) {
        const key = n.name.getText().replace(/^['"`]|['"`]$/g, '')
        ranges.push({ key, s: n.getStart(), e: n.getEnd() })
        const strings = props
          .filter((p) => ['en', 'ar', 'es'].includes(p.name.getText()))
          .map((p) => ({
            lang: p.name.getText(),
            text: literalUnit(p.initializer, src)?.text ?? '',
            line: sf.getLineAndCharacterOfPosition(p.getStart()).line + 1,
          }))
        ENTRIES.set(key, { key, file, strings })
        return
      }
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  for (const q of scanSource(file, src)) {
    const r = ranges.find((x) => q.srcStart >= x.s && q.srcStart < x.e)
    if (!r) continue
    if (!DICT_QUOTES.has(r.key)) DICT_QUOTES.set(r.key, [])
    DICT_QUOTES.get(r.key)!.push(q)
  }
}

/** Dictionary keys a file names as string literals. */
function keysNamed(src: string): string[] {
  const keys = new Set<string>()
  for (const m of src.matchAll(/['"`]([\w-]+(?:\.[\w-]+)+)['"`]/g))
    if (ENTRIES.has(m[1])) keys.add(m[1])
  return [...keys]
}

/** Every quotation a file prints: its own, and the dictionary strings it names. */
function quotationsOn(file: string): Quotation[] {
  const src = readFileSync(join(ROOT, file), 'utf8')
  return [...scanSource(file, src), ...keysNamed(src).flatMap((k) => DICT_QUOTES.get(k) ?? [])]
}

// ── The guide pages, found as .tmp-guides/locate.mjs found them ─────────────

/** Other slugs the older trees use for the same text. */
const ALIASES: Record<string, string[]> = {
  'between-a-rock-and-a-hard-place': ['127-hours'],
  'jekyll-and-hyde': ['strange-case-of-dr-jekyll-and-mr-hyde', 'dr-jekyll-and-mr-hyde'],
  'curious-incident': ['the-curious-incident-of-the-dog-in-the-night-time'],
  'much-ado-about-nothing': ['much-ado'],
  'the-merchant-of-venice': ['merchant-of-venice'],
  'a-view-from-the-bridge': ['view-from-the-bridge'],
  'lord-of-the-flies': ['lotf'],
  'to-kill-a-mockingbird': ['tkam'],
  'of-mice-and-men': ['omam'],
}

function directories(root: string): string[] {
  const out: string[] = []
  const walk = (d: string) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (!e.isDirectory() || e.name === 'node_modules' || e.name.startsWith('.')) continue
      const p = join(d, e.name)
      out.push(p)
      walk(p)
    }
  }
  walk(root)
  return out
}

function sourcesUnder(dir: string): string[] {
  const out: string[] = []
  const stack = [dir]
  while (stack.length) {
    const d = stack.pop()!
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name)
      if (e.isDirectory()) stack.push(p)
      else if (/\.tsx?$/.test(e.name)) out.push(posix(p))
    }
  }
  return out
}

const APP_DIRS = directories(join(ROOT, 'src/app'))
const COPYRIGHT = SET_TEXTS.filter((t) => t.copyrightStatus === 'copyright')

const GUIDES = COPYRIGHT.map((t) => {
  const names = [t.slug, ...(ALIASES[t.slug] ?? [])]
  const dirs = APP_DIRS.filter(
    (d) => names.includes(d.split(/[\\/]/).pop()!) && existsSync(join(d, 'page.tsx')),
  )
  const files = [...new Set(dirs.flatMap(sourcesUnder))].sort()
  const poem = t.category === 'poetry-anthology'
  return { slug: t.slug, poem, files, quotations: files.flatMap(quotationsOn) }
})

const MEASURED = GUIDES.flatMap((g) => g.quotations.map((q) => ({ ...q, poem: g.poem })))
const where = (q: Quotation) => `${q.file}:${q.line} (${q.words} words, ${q.lines} lines)`

describe('every guide page for a text in copyright', () => {
  it('finds the guide pages and measures their quotations', () => {
    // Without this the file passes by finding nothing. The first scanner for
    // this audit found 11 quotations over the limit; there were 423.
    expect(COPYRIGHT.length).toBeGreaterThan(50)
    expect(GUIDES.filter((g) => g.files.length).length).toBeGreaterThanOrEqual(40)
    expect(GUIDES.reduce((n, g) => n + g.files.length, 0)).toBeGreaterThanOrEqual(300)
    expect(MEASURED.length).toBeGreaterThanOrEqual(4000)
  })

  it.each([
    'src/app/resources/revision-notes/the-handmaids-tale/page.tsx',
    'src/app/revision/texts/lord-of-the-flies/key-quotes/page.tsx',
    'src/app/revision/texts/curious-incident/page.tsx',
    'src/app/revision/texts/a-streetcar-named-desire/page.tsx',
    'src/app/igcse/edexcel/prose/of-mice-and-men/key-quotes/page.tsx',
  ])('scans %s and finds quotations on it', (file) => {
    expect(MEASURED.filter((q) => q.file === file).length).toBeGreaterThanOrEqual(10)
  })

  it(`prints no quotation over ${FAIR_DEALING.quoteWords} words`, () => {
    const over = MEASURED.filter((q) => q.words > FAIR_DEALING.quoteWords && !excusedBy(q))
    expect(over.map(where)).toEqual([])
  })

  it(`prints no quotation from a poem over ${FAIR_DEALING.poemQuoteLines} lines`, () => {
    const over = MEASURED.filter(
      (q) => q.poem && q.lines > FAIR_DEALING.poemQuoteLines && !excusedBy(q),
    )
    expect(over.map(where)).toEqual([])
  })
})

// ── The fifteen-word claims ─────────────────────────────────────────────────

/** A fifteen-word rule, however it is phrased, in the three locales. */
const CLAIM = new RegExp(
  [
    String.raw`\b(?:15|fifteen)\s+words?\s+or\s+(?:fewer|less)\b`,
    String.raw`\b(?:under|fewer\s+than|less\s+than)\s+(?:15|fifteen)\s+words\b`,
    String.raw`(?:≤|<=|&le;)\s*15[\s-]*words?\b`,
    String.raw`\bno\s+quotation\s+exceeds\s+(?:15|fifteen)\s+words\b`,
    String.raw`\bkept\s+to\s+(?:15|fifteen)\s+words\b`,
    String.raw`\b(?:15|quince)\s+palabras\s+o\s+menos\b`,
    String.raw`(?:≤|<=)\s*15\s*palabras`,
    String.raw`\bmenos\s+de\s+(?:15|quince)\s+palabras\b`,
    String.raw`(?:15|خمس\s+عشرة)\s+كلمة\s+أو\s+أقل`,
    String.raw`أقل\s+من\s+15\s+كلمة`,
  ].join('|'),
  'i',
)

/** The number a claim promises: "15 or fewer" allows 15, "under 15" allows 14. */
const promised = (claim: string) =>
  /under|fewer\s+than|less\s+than|menos\s+de|أقل\s+من/i.test(claim) ? 14 : 15

type Claim = { at: string; words: string; limit: number; printedOn: string[] }

const APP_SOURCES = sourcesUnder(join(ROOT, 'src/app'))
const COMPONENT_SOURCES = sourcesUnder(join(ROOT, 'src/components'))
const readers = (key: string) =>
  [...APP_SOURCES, ...COMPONENT_SOURCES].filter((f) =>
    readFileSync(join(ROOT, f), 'utf8').includes(`'${key}'`),
  )

const CLAIMS: Claim[] = []
// In a page or data file, a claim anywhere counts, comments included.
for (const f of APP_SOURCES) {
  readFileSync(join(ROOT, f), 'utf8')
    .split('\n')
    .forEach((l, i) => {
      const m = l.match(CLAIM)
      if (m)
        CLAIMS.push({ at: `${f}:${i + 1}`, words: m[0], limit: promised(m[0]), printedOn: [f] })
    })
}
// In a dictionary, only a string a reader sees is a claim; a comment about old
// pages is not.
for (const e of ENTRIES.values()) {
  const pages = e.strings.some((s) => CLAIM.test(s.text)) ? readers(e.key) : []
  for (const s of e.strings) {
    const m = s.text.match(CLAIM)
    if (m)
      CLAIMS.push({
        at: `${e.file}:${s.line} ${e.key}.${s.lang}`,
        words: m[0],
        limit: promised(m[0]),
        printedOn: pages,
      })
  }
}

describe('the fifteen-word claims', () => {
  it('finds the claims it checks', () => {
    expect(CLAIMS.length).toBeGreaterThanOrEqual(80)
    const at = CLAIMS.map((c) => c.at)
    expect(at).toContain('src/app/igcse/edexcel/prose/of-mice-and-men/key-quotes/page.tsx:195')
    expect(at).toContain('src/app/marking/sample/inspector-calls/page.tsx:538')
    for (const lang of ['en', 'ar', 'es'])
      expect(at.some((a) => a.endsWith(`rev.texts2.bb.key_quotes.intro.${lang}`))).toBe(true)
    // A dictionary claim is checked where it is printed, so it must be found there.
    const bb = CLAIMS.find((c) => c.at.endsWith('rev.texts2.bb.key_quotes.intro.en'))!
    expect(bb.printedOn).toContain('src/app/revision/texts/blood-brothers/key-quotes/page.tsx')
  })

  it('every page that claims a fifteen-word rule keeps it', () => {
    const broken: string[] = []
    const cache = new Map<string, Quotation[]>()
    for (const c of CLAIMS)
      for (const page of c.printedOn) {
        if (!cache.has(page)) cache.set(page, quotationsOn(page))
        for (const q of cache.get(page)!)
          if (q.words > c.limit && !excusedBy(q))
            broken.push(`"${c.words}" at ${c.at}, but ${where(q)}`)
      }
    expect(broken).toEqual([])
  })
})

describe('the list of site-authored statements', () => {
  it('excuses nothing that is not there', () => {
    const everything = [...MEASURED, ...SITE_AUTHORED.flatMap((x) => quotationsOn(x.file))]
    const stale = SITE_AUTHORED.filter((x) => !everything.some((q) => excusedBy(q) === x))
    expect(stale.map((x) => `${x.file}: ${x.opens}`)).toEqual([])
  })
})
