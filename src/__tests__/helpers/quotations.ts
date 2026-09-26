import ts from 'typescript'
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
import { wordCount, lineCount } from '@/lib/study-guides/validate'

/**
 * The quotation scanner the fair-dealing guards share.
 *
 * Moved here on 26 September 2026, unchanged, from
 * no-quote-over-the-fair-dealing-limit.test.ts, so that
 * no-poem-quoted-beyond-fair-dealing.test.ts measures poetry pages with the
 * same scanner rather than a second, weaker one. That file's docblock says
 * what the scanner finds and what it cannot see; it is the specification for
 * everything below. Change the scanner here and both guards are re-measured.
 *
 * One addition, which changes nothing for existing callers: scanSource takes
 * the set of whole-value quotation fields as an optional argument, defaulting
 * to QUOTE_FIELDS. The poem viewer prints a language device's `example`
 * between quotation marks it adds itself, so the poetry guard passes a set
 * with `example` in it.
 */

export const ROOT = process.cwd()
export const posix = (p: string) => relative(ROOT, p).split('\\').join('/')

// ── The scanner ─────────────────────────────────────────────────────────────

/**
 * A run of decoded text and, for each character, the source offset it came
 * from. `map` has one extra entry, the offset just past the last character, so
 * a span that ends on an escape (\u2019, &rdquo;) still reports its true end.
 */
export type Unit = { text: string; map: number[]; field?: string; paraphrase?: boolean }

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

export function literalUnit(node: ts.Node, src: string): Unit | null {
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

export const DQ = /["\u201C\u201D\u00AB\u00BB]/
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

export type Quotation = {
  file: string
  line: number
  text: string
  words: number
  lines: number
  srcStart: number
  srcEnd: number
}

/** Fields whose whole value is printed as a quotation, with marks or without. */
export const QUOTE_FIELDS: ReadonlySet<string> = new Set([
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

export function scanSource(
  file: string,
  src: string,
  fields: ReadonlySet<string> = QUOTE_FIELDS,
): Quotation[] {
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
      fields.has(u.field) &&
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
      !/^\[Paraphrase\]/i.test(t) &&
      // "/resources/revision-notes/the-door" is a route. A study guide's
      // `native` map names each section the page already teaches (keyQuotes
      // among them) and gives the path that teaches it, so the field name
      // matched. Until 26 September 2026 each path was measured as words
      // taken from the poem: The Door's route quoted 18 distinct words against
      // a share of 20 and was reported as 21.
      !/^\/[a-z0-9/-]*$/.test(t)
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

// ── The dictionary ──────────────────────────────────────────────────────────

export const I18N = join(ROOT, 'src/lib/i18n')
export const SHARDS = readdirSync(I18N)
  .filter((n) => /^dictionary.*\.ts$/.test(n))
  .map((n) => `src/lib/i18n/${n}`)

export type Entry = {
  key: string
  file: string
  strings: { lang: string; text: string; line: number }[]
}

/** Every dictionary entry, with its en/ar/es strings decoded, and its quotations. */
export const ENTRIES = new Map<string, Entry>()
export const DICT_QUOTES = new Map<string, Quotation[]>()
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
export function keysNamed(src: string): string[] {
  const keys = new Set<string>()
  for (const m of src.matchAll(/['"`]([\w-]+(?:\.[\w-]+)+)['"`]/g))
    if (ENTRIES.has(m[1])) keys.add(m[1])
  return [...keys]
}

/**
 * Each mention of a dictionary key in a file, with its offset, found exactly as
 * keysNamed finds them, so a key's quotations can be placed where it is used.
 */
export function keyMentions(src: string): { key: string; at: number }[] {
  const out: { key: string; at: number }[] = []
  for (const m of src.matchAll(/['"`]([\w-]+(?:\.[\w-]+)+)['"`]/g))
    if (ENTRIES.has(m[1])) out.push({ key: m[1], at: m.index })
  return out
}

/** Every quotation a file prints: its own, and the dictionary strings it names. */
export function quotationsOn(file: string): Quotation[] {
  const src = readFileSync(join(ROOT, file), 'utf8')
  return [...scanSource(file, src), ...keysNamed(src).flatMap((k) => DICT_QUOTES.get(k) ?? [])]
}

export function sourcesUnder(dir: string): string[] {
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
