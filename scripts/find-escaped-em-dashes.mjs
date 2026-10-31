// ─── Escaped em dashes in the site's own prose ───────────────────────────────
//
// House style is no em dashes in the site's own voice: a spaced hyphen ( - )
// instead (CLAUDE.md; the "em-dash" rule in scripts/check-copy-quality.mjs).
// That rule tests for the character itself, so a dash written as an escape
// never matched it:
//
//   <p>Scrooge&apos;s redemption is not passive &mdash; he must choose</p>
//   analysis: 'Orwell places this commandment last \u2014 structurally ...'
//
// FOUND 31 October 2026: 4,814 of them in the strings and JSX text of 277
// files under src, 4,668 of them (in 273 files) prose the site wrote.
// None was visibly broken (an-entity-in-a-js-string-renders-literally keeps
// entities out of JS strings, where React would print them); they were
// simply invisible to the one check that looks for em dashes.
//
// An author's punctuation is not ours to change. A dash inside quotation
// marks stays as printed, whether the author's ("The thing is \u2014 fear
// can't hurt you") or a model sentence shown as one: telling those two apart
// would mean matching every quotation to a held text, and many set texts are
// in copyright and not held, so the line is drawn at the quotation mark. So
// does a dash a page is discussing ("Dash (&mdash;)", "The dash extends the
// moment"), the dash in a title that has one (Frost's "Out, Out\u2014"), and
// a dash that is a value in code rather than text (`split('\u2014')`).
//
// Every decision is made from the string's own text, never from the JSX
// around it, so a page's tr(`...`) literal and the content.ts key that finds
// its Arabic always come out the same: changing one without the other is how
// a page silently loses its Arabic (editing-english-copy-does-not-orphan-the-arabic).
//
//   node scripts/find-escaped-em-dashes.mjs           report, by kind
//   node scripts/find-escaped-em-dashes.mjs --list    every one left in, with its kind
//   node scripts/find-escaped-em-dashes.mjs --apply   rewrite the site's prose
//
// src/__tests__/the-site-writes-no-escaped-em-dash.test.ts keeps it at none.

import { readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import ts from 'typescript'

/** An em dash written so that a search for the character misses it. */
export const ESCAPED_EM_DASH = /&mdash;|&#0*8212;|&#x0*2014;|\\u2014|\\u\{0*2014\}/gi

/**
 * Properties whose string is a quotation from a text. A dash inside one is
 * the author's.
 */
const QUOTATION_KEYS =
  /^(quote|quotes|quotation|quotations|keyQuote|keyQuotes|line|lines|extract|excerpt|passage|verse|stanza|original|sourceText|heldText|epigraph)$/i

/** Opening and closing quotation marks, as characters, entities or JS escapes. */
const QUOTE_TOKEN =
  /“|&ldquo;|&#8220;|\\u201[cC]|”|&rdquo;|&#8221;|\\u201[dD]|‘|&lsquo;|&#8216;|\\u2018|’|&rsquo;|&#8217;|\\u2019|&quot;|\\"|"/g
const OPEN_DOUBLE = /^(“|&ldquo;|&#8220;|\\u201[cC])$/
const CLOSE_DOUBLE = /^(”|&rdquo;|&#8221;|\\u201[dD])$/
const OPEN_SINGLE = /^(‘|&lsquo;|&#8216;|\\u2018)$/
const CLOSE_SINGLE = /^(’|&rsquo;|&#8217;|\\u2019)$/

/** HTML tags inside a string or a JSX text run, which carry their own quotes. */
const TAG = /<[^<>]*>/g

/**
 * Is a quotation open at the end of `text`? Curly quotes open and close;
 * straight double quotes toggle; a closing single quote followed by a letter
 * is an apostrophe ("don’t"), not the end of a quotation.
 */
export function quotationOpenAt(text) {
  let double = false
  let single = false
  // A template part can start inside a tag (`;">Privacy Policy</a>` after a
  // `${...}`): its attribute quotes are not quotation marks either.
  const plain = text.replace(/^[^<>]*>/, ' ').replace(TAG, ' ')
  for (const m of plain.matchAll(QUOTE_TOKEN)) {
    const q = m[0]
    if (OPEN_DOUBLE.test(q)) double = true
    else if (CLOSE_DOUBLE.test(q)) double = false
    else if (OPEN_SINGLE.test(q)) single = true
    else if (CLOSE_SINGLE.test(q)) {
      const next = plain[m.index + q.length] ?? ''
      if (single && !/[A-Za-z]/.test(next)) single = false
    } else double = !double
  }
  return double || single
}

/**
 * Why this dash is left as it is, or 'prose' if it is the site's own. A dash
 * alone in JSX text or in a `{' \u2014 '}` child is a visible separator
 * ("{speaker} &mdash; {act}"), so it is prose; alone in any other string it
 * is a value the code uses, and is left.
 */
function kindOf(segment, offset, token, ctx) {
  const before = segment.slice(0, offset)
  const after = segment.slice(offset + token.length)
  if (/^(\s|&nbsp;)*$/.test(before + after)) return ctx.shown ? 'prose' : 'code'
  if (ctx.quotationField) return 'quotation'
  if (/Out,\s*Out\s*$/.test(before)) return 'title'
  // "Dash (&mdash;)": the character named, not used. And a dash the text
  // goes straight on to discuss ("autumn has its own music. The dash
  // extends the moment"), which is the analysis's subject.
  if (/\(\s*$/.test(before) && /^\s*\)/.test(after)) return 'mention'
  if (/\b(the|this|that|a|an|each|em)\s+dash(es)?\b/i.test(after.slice(0, 60).replace(TAG, ' ')))
    return 'mention'
  if (quotationOpenAt(before)) return 'quotation'
  return 'prose'
}

/** The raw source range inside a string-like node, without its delimiters. */
function innerRange(node, sf) {
  const start = node.getStart(sf)
  switch (node.kind) {
    case ts.SyntaxKind.StringLiteral:
    case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
    case ts.SyntaxKind.TemplateTail:
      return [start + 1, node.end - 1]
    case ts.SyntaxKind.TemplateHead:
    case ts.SyntaxKind.TemplateMiddle:
      return [start + 1, node.end - 2]
    case ts.SyntaxKind.JsxText:
      return [node.pos, node.end]
    default:
      return null
  }
}

/** Is this string a direct JSX child, `<p>{' \u2014 '}</p>`, and so shown as written? */
function isJsxChild(node) {
  let p = node.parent
  while (p && (ts.isParenthesizedExpression(p) || ts.isConditionalExpression(p) || ts.isBinaryExpression(p)))
    p = p.parent
  return !!(p && ts.isJsxExpression(p) && !ts.isJsxAttribute(p.parent))
}

/**
 * Is this the text between a template's substitutions, `${a} ... ${b}`? A
 * dash alone there joins two values in text that is shown (the teaching
 * PDF's "speaker - context" citation), not a value the code compares.
 */
function isTemplatePart(node) {
  return (
    node.kind === ts.SyntaxKind.TemplateHead ||
    node.kind === ts.SyntaxKind.TemplateMiddle ||
    node.kind === ts.SyntaxKind.TemplateTail
  )
}

/** Is this string the value, or an item of the value, of a quotation property? */
function inQuotationField(node, sf) {
  let p = node.parent
  while (p && (ts.isTemplateSpan(p) || ts.isTemplateExpression(p) || ts.isParenthesizedExpression(p)))
    p = p.parent
  if (p && ts.isArrayLiteralExpression(p)) p = p.parent
  return !!(p && ts.isPropertyAssignment(p) && QUOTATION_KEYS.test(p.name.getText(sf).replace(/['"]/g, '')))
}

/**
 * Every escaped em dash in one file's strings and JSX text (comments are not
 * prose and are skipped), each with its kind: 'prose' (the site's own, to be
 * a spaced hyphen) or why it stays: 'quotation', 'mention', 'title',
 * 'code'.
 */
export function findEscapedEmDashes(source, fileName) {
  const sf = ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true,
    fileName.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  )
  const found = []
  const visit = (node) => {
    const range = innerRange(node, sf)
    if (range) {
      const [a, b] = range
      const segment = source.slice(a, b)
      const jsxText = node.kind === ts.SyntaxKind.JsxText
      const ctx = {
        quotationField: !jsxText && inQuotationField(node, sf),
        shown: jsxText || isJsxChild(node) || isTemplatePart(node),
      }
      for (const m of segment.matchAll(ESCAPED_EM_DASH)) {
        const start = a + m.index
        found.push({
          start,
          end: start + m[0].length,
          token: m[0],
          kind: kindOf(segment, m.index, m[0], ctx),
          line: source.slice(0, start).split('\n').length,
          segmentStart: a,
          segmentEnd: b,
        })
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return found
}

/**
 * The spaced hyphen that replaces a dash, adding only the spaces the source
 * does not already have; between two digits it is a plain hyphen (1914-1918).
 */
function hyphenFor(source, d) {
  const before = d.start === d.segmentStart ? ' ' : source[d.start - 1]
  const after = d.end === d.segmentEnd ? ' ' : source[d.end]
  if (/\d/.test(before) && /\d/.test(after)) return '-'
  const spacedBefore = /\s/.test(before) || source.slice(d.start - 6, d.start) === '&nbsp;'
  const spacedAfter = /\s/.test(after) || source.startsWith('&nbsp;', d.end)
  return (spacedBefore ? '' : ' ') + '-' + (spacedAfter ? '' : ' ')
}

/** The file with every 'prose' dash replaced by a spaced hyphen. */
export function rewriteEscapedEmDashes(source, fileName) {
  const prose = findEscapedEmDashes(source, fileName).filter((d) => d.kind === 'prose')
  let out = source
  for (const d of prose.sort((x, y) => y.start - x.start))
    out = out.slice(0, d.start) + hyphenFor(source, d) + out.slice(d.end)
  return { source: out, replaced: prose.length }
}

/** The files this applies to: tracked TypeScript under src, less tests and held texts. */
export function sourceFiles(root = process.cwd()) {
  return execFileSync('git', ['ls-files', 'src'], { cwd: root, encoding: 'utf8' })
    .split('\n')
    .filter((f) => /\.tsx?$/.test(f))
    .filter((f) => !/__tests__\/|\.test\.tsx?$|\.spec\.tsx?$/.test(f))
    .filter((f) => !f.startsWith('src/data/full-texts/'))
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const apply = process.argv.includes('--apply')
  const list = process.argv.includes('--list')
  const skip = process.argv
    .filter((a) => a.startsWith('--skip='))
    .map((a) => new RegExp(a.slice('--skip='.length)))
  const counts = {}
  let files = 0
  let replaced = 0
  for (const f of sourceFiles()) {
    if (skip.some((re) => re.test(f))) continue
    const src = readFileSync(f, 'utf8')
    if (!ESCAPED_EM_DASH.test(src)) continue
    ESCAPED_EM_DASH.lastIndex = 0
    const found = findEscapedEmDashes(src, f)
    for (const d of found) counts[d.kind] = (counts[d.kind] ?? 0) + 1
    if (list)
      for (const d of found.filter((x) => x.kind !== 'prose')) {
        const text = src.slice(Math.max(d.segmentStart, d.start - 70), Math.min(d.segmentEnd, d.end + 50))
        console.log(`${d.kind.padEnd(11)} ${f}:${d.line}  ${text.replace(/\s+/g, ' ')}`)
      }
    if (apply) {
      const r = rewriteEscapedEmDashes(src, f)
      if (r.replaced) {
        writeFileSync(f, r.source)
        files += 1
        replaced += r.replaced
      }
    }
  }
  console.log('escaped em dashes by kind:', counts)
  if (apply) console.log(`replaced ${replaced} in ${files} files`)
}
