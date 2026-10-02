// ─── Is an HTML entity sitting in a JavaScript string? ───────────────────────
//
// React decodes `&apos;` when it is written in JSX markup:
//
//   <h3>The Witches&apos; Opening</h3>          renders  The Witches' Opening
//   <Card title="Q1 &amp; Q2" />                renders  Q1 & Q2
//
// and does NOT decode it anywhere else, because there it is only a string:
//
//   <h3>{tr(`The Witches&apos; Opening`)}</h3>  renders  The Witches&apos; Opening
//   <h3>{'Q1 &amp; Q2'}</h3>                    renders  Q1 &amp; Q2
//
// FOUND 26 September 2026 on the live site: 563 literal entities across 70
// pages, 52 on Macbeth Act 1 alone. The copy was written as JSX text and later
// wrapped in the local tr() helper for Arabic, which moved every entity from a
// place that decodes it to a place that does not. The page still built, the
// English still read correctly in the source, and the Arabic lookup still
// matched, because the content.ts key carried the same entity.
//
// This reports every JS string that carries an entity in a position where it
// is rendered as text. Positions, not files: the same file can hold correct
// JSX text and a broken string one line apart.
//
//   node scripts/check-entities-in-js-strings.mjs

import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import ts from 'typescript'

/**
 * Real entity names only. `&wla;` in a garbled translation is not an entity,
 * reaches the page as written whichever way it is rendered, and is a
 * different defect.
 */
const NAMES = new Set(
  (
    'amp lt gt quot apos nbsp rsquo lsquo rdquo ldquo sbquo bdquo mdash ndash hellip ' +
    'middot bull rarr larr uarr darr harr laquo raquo lsaquo rsaquo copy reg trade ' +
    'times divide deg pound euro cent yen sect para plusmn minus le ge ne asymp prime ' +
    'dagger shy thinsp ensp emsp zwj zwnj ' +
    'aacute agrave acirc atilde auml aring aelig ccedil eacute egrave ecirc euml ' +
    'iacute igrave icirc iuml ntilde oacute ograve ocirc otilde ouml oslash szlig ' +
    'uacute ugrave ucirc uuml yacute yuml sup1 sup2 sup3 frac12 frac14 frac34 iexcl iquest'
  ).split(' '),
)

const ENTITY = /&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z][a-zA-Z0-9]*);/g

export function entitiesIn(text) {
  const found = []
  for (const m of text.matchAll(ENTITY)) {
    const ref = m[1]
    if (ref[0] === '#' || NAMES.has(ref.toLowerCase())) found.push(m[0])
  }
  return found
}

/** Helpers whose argument is rendered as text: the local tr()/_tr() and t(). */
const TEXT_HELPERS = /^_?tr?$/

/**
 * Walk up from a string node through the expressions that pass its value on
 * unchanged: a ternary branch, the right of && / || / ??, brackets, a template
 * the string is a part of. Returns the first node that does something else.
 */
function valueParent(node) {
  let child = node
  let p = node.parent
  for (;;) {
    if (ts.isTemplateSpan(p) || ts.isTemplateExpression(p) || ts.isParenthesizedExpression(p)) {
      child = p
      p = p.parent
    } else if (ts.isConditionalExpression(p) && p.condition !== child) {
      child = p
      p = p.parent
    } else if (
      ts.isBinaryExpression(p) &&
      p.right === child &&
      [
        ts.SyntaxKind.AmpersandAmpersandToken,
        ts.SyntaxKind.BarBarToken,
        ts.SyntaxKind.QuestionQuestionToken,
      ].includes(p.operatorToken.kind)
    ) {
      child = p
      p = p.parent
    } else return p
  }
}

function insideMetadataExport(node) {
  for (let p = node.parent; p; p = p.parent) {
    if (
      ts.isVariableDeclaration(p) &&
      ts.isIdentifier(p.name) &&
      p.name.text === 'metadata' &&
      p.parent?.parent &&
      ts.isVariableStatement(p.parent.parent) &&
      p.parent.parent.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    )
      return true
  }
  return false
}

/**
 * Why a string node is rendered as text, or null if it is not (JSX markup, a
 * JSX attribute written in quotes, HTML handed to dangerouslySetInnerHTML).
 */
function renderedAs(node, sf) {
  const p = valueParent(node)
  if (
    ts.isCallExpression(p) &&
    ts.isIdentifier(p.expression) &&
    TEXT_HELPERS.test(p.expression.text)
  )
    return `argument of ${p.expression.text}()`
  if (ts.isJsxExpression(p)) {
    const owner = p.parent
    if (ts.isJsxAttribute(owner)) {
      const name = owner.name.getText(sf)
      return name === 'dangerouslySetInnerHTML' ? null : `JSX attribute ${name}={...}`
    }
    return 'JSX child {...}'
  }
  if (ts.isPropertyAssignment(p) && /^(en|ar)$/.test(p.name.getText(sf)))
    return `bilingual ${p.name.getText(sf)}: value`
  if (insideMetadataExport(node)) return 'page metadata'
  return null
}

/**
 * Attributes whose value never reaches the reader. `key={t}` beside
 * `dangerouslySetInnerHTML={{ __html: t }}` is War Photographer's themes list,
 * which is HTML and correct.
 */
const NOT_SHOWN = new Set(['key', 'ref', 'id', 'className', 'style', 'dangerouslySetInnerHTML'])

/** Is this expression's value put on the page as text? */
function renderedAsText(expr, sf) {
  const p = valueParent(expr)
  if (
    ts.isCallExpression(p) &&
    ts.isIdentifier(p.expression) &&
    TEXT_HELPERS.test(p.expression.text)
  )
    return true
  if (!ts.isJsxExpression(p)) return false
  return !(ts.isJsxAttribute(p.parent) && NOT_SHOWN.has(p.parent.name.getText(sf)))
}

/**
 * Data rendered through a variable, which the positional rules above cannot
 * see. Two shapes, both found on the live site:
 *
 *   const THEMES = [{ detail: 'The narrator&rsquo;s struggle' }]
 *   ... <p>{t.detail}</p>                         (Rebecca, 36 on one page)
 *
 *   {['against your exam board&#39;s mark scheme'].map((f) => <li>{f}</li>)}
 *
 * Returns the property names this file renders as `{x.NAME}` text, and the
 * array literals whose items it renders as text through .map(). Same-file
 * only, which is where every instance found so far lives. Data imported from
 * another module and rendered here is not traced.
 */
function dataRenderedAsText(sf) {
  const props = new Set()
  const arrays = new Set()
  const arrayNamed = new Map()
  const visit = (n) => {
    if (ts.isVariableDeclaration(n) && ts.isIdentifier(n.name) && n.initializer) {
      let init = n.initializer
      while (ts.isAsExpression(init) || ts.isSatisfiesExpression?.(init)) init = init.expression
      if (ts.isArrayLiteralExpression(init)) arrayNamed.set(n.name.text, init)
    }
    if (ts.isPropertyAccessExpression(n) && renderedAsText(n, sf)) props.add(n.name.text)
    if (
      ts.isCallExpression(n) &&
      ts.isPropertyAccessExpression(n.expression) &&
      n.expression.name.text === 'map'
    ) {
      const fn = n.arguments[0]
      const param =
        fn && (ts.isArrowFunction(fn) || ts.isFunctionExpression(fn)) && fn.parameters[0]
      if (param && ts.isIdentifier(param.name)) {
        const name = param.name.text
        let used = false
        const find = (m) => {
          if (
            !used &&
            ts.isIdentifier(m) &&
            m.text === name &&
            m !== param.name &&
            renderedAsText(m, sf)
          )
            used = true
          ts.forEachChild(m, find)
        }
        find(fn.body)
        if (used) arrays.add(n.expression.expression)
      }
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  const literals = new Set()
  for (const a of arrays) {
    if (ts.isArrayLiteralExpression(a)) literals.add(a)
    else if (ts.isIdentifier(a) && arrayNamed.has(a.text)) literals.add(arrayNamed.get(a.text))
  }
  return { props, arrays: literals }
}

/** Every rendered-as-text string in one source file that carries an entity. */
export function scanSource(fileName, text) {
  const out = []
  if (!/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/.test(text)) return out
  const sf = ts.createSourceFile(
    fileName,
    text,
    ts.ScriptTarget.Latest,
    true,
    fileName.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  )
  const data = fileName.endsWith('x')
    ? dataRenderedAsText(sf)
    : { props: new Set(), arrays: new Set() }
  const viaData = (node) => {
    const p = valueParent(node)
    if (ts.isPropertyAssignment(p) && data.props.has(p.name.getText(sf)))
      return `data field ${p.name.getText(sf)}, rendered as {x.${p.name.getText(sf)}}`
    if (ts.isArrayLiteralExpression(p) && data.arrays.has(p)) return 'array item rendered by .map()'
    return null
  }
  const visit = (node) => {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node) ||
      ts.isTemplateHead(node) ||
      ts.isTemplateMiddle(node) ||
      ts.isTemplateTail(node)
    ) {
      // A quoted JSX attribute (title="Q1 &amp; Q2") is JSX, and decoded.
      const quotedAttribute = ts.isStringLiteral(node) && ts.isJsxAttribute(node.parent)
      const entities = quotedAttribute ? [] : entitiesIn(node.text)
      if (entities.length) {
        const why = renderedAs(node, sf) ?? viaData(node)
        if (why) {
          const line = sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1
          out.push({
            file: fileName,
            line,
            why,
            entities,
            text: node.text,
            start: node.getStart(sf),
            end: node.end,
            kind: ts.SyntaxKind[node.kind],
          })
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return out
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== '__tests__' && entry.name !== 'node_modules') walk(full, out)
    } else if (/\.(ts|tsx)$/.test(entry.name) && !/\.(test|spec)\.tsx?$/.test(entry.name)) {
      out.push(full)
    }
  }
  return out
}

/**
 * Every offending string under src, plus how much was looked at, so a test can
 * tell "nothing wrong" from "nothing scanned".
 */
export function findEntityStrings(root = 'src') {
  const files = walk(root)
  let helperCalls = 0
  const offenders = []
  for (const file of files) {
    const text = readFileSync(file, 'utf8')
    helperCalls += (text.match(/\b_?tr\(/g) || []).length
    offenders.push(...scanSource(file.split('\\').join('/'), text))
  }
  return { files: files.length, helperCalls, offenders }
}

/**
 * The characters the named references stand for. Every name in NAMES is here,
 * so a reported string can always be fixed; an unknown name is left as written.
 */
const CHARS = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: '\u00A0',
  rsquo: '\u2019',
  lsquo: '\u2018',
  rdquo: '\u201D',
  ldquo: '\u201C',
  sbquo: '\u201A',
  bdquo: '\u201E',
  hellip: '\u2026',
  middot: '\u00B7',
  bull: '\u2022',
  rarr: '\u2192',
  larr: '\u2190',
  uarr: '\u2191',
  darr: '\u2193',
  harr: '\u2194',
  laquo: '\u00AB',
  raquo: '\u00BB',
  lsaquo: '\u2039',
  rsaquo: '\u203A',
  copy: '\u00A9',
  reg: '\u00AE',
  trade: '\u2122',
  times: '\u00D7',
  divide: '\u00F7',
  deg: '\u00B0',
  pound: '\u00A3',
  euro: '\u20AC',
  cent: '\u00A2',
  yen: '\u00A5',
  sect: '\u00A7',
  para: '\u00B6',
  plusmn: '\u00B1',
  minus: '\u2212',
  le: '\u2264',
  ge: '\u2265',
  ne: '\u2260',
  asymp: '\u2248',
  prime: '\u2032',
  dagger: '\u2020',
  shy: '\u00AD',
  thinsp: '\u2009',
  ensp: '\u2002',
  emsp: '\u2003',
  zwj: '\u200D',
  zwnj: '\u200C',
  aacute: '\u00E1',
  agrave: '\u00E0',
  acirc: '\u00E2',
  atilde: '\u00E3',
  auml: '\u00E4',
  aring: '\u00E5',
  aelig: '\u00E6',
  ccedil: '\u00E7',
  eacute: '\u00E9',
  egrave: '\u00E8',
  ecirc: '\u00EA',
  euml: '\u00EB',
  iacute: '\u00ED',
  igrave: '\u00EC',
  icirc: '\u00EE',
  iuml: '\u00EF',
  ntilde: '\u00F1',
  oacute: '\u00F3',
  ograve: '\u00F2',
  ocirc: '\u00F4',
  otilde: '\u00F5',
  ouml: '\u00F6',
  oslash: '\u00F8',
  szlig: '\u00DF',
  uacute: '\u00FA',
  ugrave: '\u00F9',
  ucirc: '\u00FB',
  uuml: '\u00FC',
  yacute: '\u00FD',
  yuml: '\u00FF',
  sup1: '\u00B9',
  sup2: '\u00B2',
  sup3: '\u00B3',
  frac12: '\u00BD',
  frac14: '\u00BC',
  frac34: '\u00BE',
  iexcl: '\u00A1',
  iquest: '\u00BF',
}

/** The delimiters around a string or template piece, as written in source. */
const DELIMITERS = {
  StringLiteral: null, // its own quote, read from the source
  NoSubstitutionTemplateLiteral: ['`', '`'],
  TemplateHead: ['`', '${'],
  TemplateMiddle: ['}', '${'],
  TemplateTail: ['}', '`'],
}

/**
 * The fix, for `--fix`: every reported string is rewritten in place with the
 * characters themselves, and nothing else in the file is touched.
 *
 * Added 2 October 2026, when the fix of 26 September (commit 837ff53c, made in
 * a background session) turned out never to have reached main: the Macbeth act
 * pages were still printing "&amp;" and "&apos;" a week later, and the copies
 * of six files had moved on too far for the old edits to apply. Rewriting from
 * the report means the fix can be run again on whatever the files are now.
 *
 * Two rules beyond decoding. House style has no em dashes, so a dash reference
 * between two numbers becomes a hyphen ("Chapters 1-7") and any other becomes a
 * spaced hyphen, as the site's headings and its Arabic strings already write
 * it. And a decoded character that would end the string early is escaped: an
 * apostrophe inside '...', a double quote inside "...", a backtick, or a "${"
 * inside a template. Because the same rule runs on a tr() argument and on the
 * content.ts `en` key that looks it up, the two stay identical and the Arabic
 * still resolves.
 */
export function fixSource(fileName, text) {
  const found = scanSource(fileName, text)
  if (!found.length) return { text, fixed: 0 }
  let out = text
  for (const o of [...found].sort((a, b) => b.start - a.start)) {
    const raw = out.slice(o.start, o.end)
    const delims = DELIMITERS[o.kind] ?? [raw[0], raw[raw.length - 1]]
    const [open, close] = delims
    if (!raw.startsWith(open) || !raw.endsWith(close)) {
      throw new Error(`${fileName}:${o.line}: unexpected ${o.kind} shape, not rewritten`)
    }
    const inner = raw.slice(open.length, raw.length - close.length)
    const quote = o.kind === 'StringLiteral' ? open : '`'
    const escape = (ch) => {
      if (ch === '\\') return '\\\\'
      if (ch === quote) return '\\' + ch
      // In a template, a decoded "$" could start "${"; "\$" is just "$".
      if (quote === '`' && ch === '$') return '\\$'
      return ch
    }
    let next = inner
      .replace(/(\d)\s*&(?:ndash|mdash|#8211|#8212);\s*(\d)/g, '$1-$2')
      .replace(/[ \t]*&(?:mdash|ndash|#8211|#8212);[ \t]*/g, ' - ')
      .replace(ENTITY, (whole, ref) => {
        let ch
        if (ref[0] === '#') {
          const hex = ref[1] === 'x' || ref[1] === 'X'
          const code = parseInt(ref.slice(hex ? 2 : 1), hex ? 16 : 10)
          ch =
            Number.isFinite(code) && code > 0 && code <= 0x10ffff
              ? String.fromCodePoint(code)
              : null
        } else
          ch = Object.prototype.hasOwnProperty.call(CHARS, ref.toLowerCase())
            ? CHARS[ref.toLowerCase()]
            : null
        return ch === null ? whole : escape(ch)
      })
    out = out.slice(0, o.start) + open + next + close + out.slice(o.end)
  }
  return { text: out, fixed: found.length }
}

// CLI only when run directly, so importing this from a test runs nothing.
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href &&
  process.argv.includes('--fix')
) {
  const targets = process.argv.slice(2).filter((a) => a !== '--fix')
  const files = targets.length ? targets : walk('src')
  let total = 0
  for (const file of files) {
    const text = readFileSync(file, 'utf8')
    const { text: next, fixed } = fixSource(file.split('\\').join('/'), text)
    if (fixed) {
      writeFileSync(file, next, 'utf8')
      total += fixed
      console.log(`${file}: ${fixed} string(s) rewritten`)
    }
  }
  console.log(`${total} string(s) rewritten in ${files.length} file(s) scanned.`)
} else if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { files, helperCalls, offenders } = findEntityStrings()
  for (const o of offenders) {
    const shown = o.text.length > 90 ? o.text.slice(0, 90) + '...' : o.text
    console.log(`${o.file}:${o.line}  [${o.why}]  ${o.entities.join(' ')}\n   ${shown}`)
  }
  console.log('')
  console.log(
    `${files} files, ${helperCalls} tr() calls scanned; ${offenders.length} string(s) would render an entity literally.`,
  )
  process.exitCode = offenders.length ? 1 : 0
}
