#!/usr/bin/env node
/**
 * Link the authored key quotations to where they actually occur in the text.
 *
 * WHAT WAS REPORTED. The full-text reader offers five annotation overlays -
 * Context, Key Quotes, Language, Themes, Characters - and highlights nothing,
 * on every text. Checked: all twenty-six full texts carry zero annotations, so
 * the five toggles were controls for a feature with no content behind them.
 *
 * WHAT THIS DOES, AND WHAT IT REFUSES TO DO. It invents no analysis. The
 * quotations and their commentary are already written, by a person, in the
 * study guide at src/app/revision/texts/<slug>/page.tsx. All this does is find
 * where each one occurs in the text we publish and record the span, so the
 * reader can show the note against the line.
 *
 * WHY MATCHING IS HARDER THAN IT LOOKS. The guide's quotation and the published
 * edition rarely agree character for character: the guide modernises
 * punctuation, marks line breaks with "/", and quotes from whichever edition the
 * author had. So the search is done on a normalisation - letters, digits and
 * single spaces, case folded - and then mapped BACK to the exact characters in
 * our own text, which is what the viewer highlights. Emitting the guide's
 * wording instead would highlight nothing, because the viewer matches the
 * annotation text against the rendered text verbatim.
 *
 * Three refusals, all of which print rather than pass quietly:
 *
 *   - a quotation that cannot be located is skipped. Twenty-five of the
 *     hundred and sixty-one are genuine edition differences - "Are there no
 *     prisons? Are there no workhouses?" is two separate speeches in the text
 *     we publish - and a fuzzy match would highlight the wrong line, which is
 *     worse than highlighting none.
 *   - a match shorter than MIN_CHARS is skipped, because a short common phrase
 *     highlights half the play.
 *   - a text with no guide, or a guide with no quotations, produces nothing.
 *
 * The count is printed per text so the misses are visible. If it ever reports
 * zero for a text that used to work, something upstream changed the edition.
 *
 *   node scripts/generate-text-annotations.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { pathToFileURL } from 'node:url'

const ROOT = process.cwd()
const DATA_DIR = join(ROOT, 'src/data/full-texts')
const PAGES_DIR = join(ROOT, 'src/app/revision/texts')
const OUT = join(ROOT, 'src/data/text-annotations.generated.ts')

/** Shorter than this and a match is a coincidence, not a quotation. */
const MIN_CHARS = 24

/* ─── Loading a generated data file without a TypeScript toolchain ───────── */

const scratch = mkdtempSync(join(tmpdir(), 'eh-ann-'))

/**
 * The data files are plain object literals with one type-only import and one
 * type annotation. Removing both leaves valid JavaScript, which node can load
 * directly. Parsing the string literals by hand would mean reimplementing
 * JavaScript escaping, and getting that subtly wrong is how a text ends up with
 * an orphan "n" in the middle of every line that wraps.
 */
async function loadTextData(slug) {
  const src = readFileSync(join(DATA_DIR, `${slug}.ts`), 'utf8')
  const js = src
    .replace(/^import type .*$/m, '')
    .replace(/export const (\w+): TextData = \{/, 'export const data = {')
  const file = join(scratch, `${slug}.mjs`)
  writeFileSync(file, js, 'utf8')
  const mod = await import(pathToFileURL(file).href)
  return mod.data
}

/* ─── Reading the authored quotations out of a guide page ───────────────── */

/** A single-quoted JS string literal -> its value. */
function decodeLiteral(raw) {
  const jsonReady = raw.replace(/\\'/g, "'").replace(/"/g, '\\"')
  return JSON.parse(`"${jsonReady}"`)
}

function quotationsFor(slug) {
  const page = join(PAGES_DIR, slug, 'page.tsx')
  if (!existsSync(page)) return []
  const src = readFileSync(page, 'utf8')
  const start = src.indexOf('quotations: [')
  if (start === -1) return []

  // Each entry is { quote, who, analysis } with single-quoted values that may
  // wrap onto the following line.
  const block = src.slice(start, src.indexOf('\n  ],', start))
  const out = []
  const re =
    /quote:\s*\n?\s*'((?:[^'\\]|\\.)*)',\s*\n\s*who:\s*\n?\s*'((?:[^'\\]|\\.)*)',\s*\n\s*analysis:\s*\n?\s*'((?:[^'\\]|\\.)*)',/g
  for (const m of block.matchAll(re)) {
    out.push({
      quote: decodeLiteral(m[1]),
      who: decodeLiteral(m[2]),
      analysis: decodeLiteral(m[3]),
    })
  }
  return out
}

/* ─── Normalising, with a map back to the original offsets ──────────────── */

const FOLD = {
  '‘': "'",
  '’': "'",
  'ʼ': "'",
  '“': '"',
  '”': '"',
  '–': '-',
  '—': '-',
}

/**
 * Fold `text` to letters, digits and single spaces, recording for each folded
 * character the offset it came from. The map is what lets a match on the folded
 * string be cut back out of the original.
 */
function fold(text) {
  let out = ''
  const map = []
  let lastWasSpace = true
  for (let i = 0; i < text.length; i++) {
    const ch = FOLD[text[i]] ?? text[i]
    const isWord = /[A-Za-z0-9]/.test(ch)
    if (isWord) {
      out += ch.toLowerCase()
      map.push(i)
      lastWasSpace = false
    } else if (!lastWasSpace) {
      out += ' '
      map.push(i)
      lastWasSpace = true
    }
  }
  while (out.endsWith(' ')) {
    out = out.slice(0, -1)
    map.pop()
  }
  return { folded: out, map }
}

/** The guide's quotation, reduced to the same alphabet. */
function foldQuote(q) {
  return fold(
    q
      .replace(/^["“]\s*|\s*["”]$/g, '')
      .replace(/\s*\/\s*/g, ' '),
  ).folded
}

/* ─── Build ─────────────────────────────────────────────────────────────── */

const slugs = readdirSync(DATA_DIR)
  // Every file in this directory is one text. The generated annotations
  // deliberately live OUTSIDE it: two existing suites enumerate this directory
  // and treat each file as a text, and a stray file there is read as a text
  // with no type and no read route.
  .filter((f) => f.endsWith('.ts'))
  .map((f) => f.replace(/\.ts$/, ''))
  .sort()

const result = {}
let totalFound = 0
let totalQuotes = 0
const report = []

for (const slug of slugs) {
  const quotes = quotationsFor(slug)
  if (quotes.length === 0) continue
  const data = await loadTextData(slug)
  totalQuotes += quotes.length

  const perSection = {}
  let found = 0
  const missed = []

  for (const q of quotes) {
    const needle = foldQuote(q.quote)
    if (needle.length < MIN_CHARS) {
      missed.push(`${q.quote.slice(0, 40)} (too short)`)
      continue
    }
    let placed = false
    for (const section of data.sections) {
      // Exactly what the viewer sees: tags stripped, nothing else changed.
      const plain = section.content.replace(/<[^>]*>/g, '')
      const { folded, map } = fold(plain)
      const at = folded.indexOf(needle)
      if (at === -1) continue
      const from = map[at]
      const to = map[at + needle.length - 1] + 1
      const verbatim = plain.slice(from, to)
      ;(perSection[section.id] ??= []).push({
        type: 'quote',
        text: verbatim,
        note: `${q.who}. ${q.analysis}`,
      })
      placed = true
      found++
      break
    }
    if (!placed) missed.push(q.quote.slice(0, 50))
  }

  if (found > 0) result[slug] = perSection
  totalFound += found
  report.push({ slug, found, total: quotes.length, missed })
}

rmSync(scratch, { recursive: true, force: true })

/* ─── Emit ──────────────────────────────────────────────────────────────── */

const body = Object.entries(result)
  .map(([slug, sections]) => {
    const inner = Object.entries(sections)
      .map(
        ([id, anns]) =>
          `    ${JSON.stringify(id)}: [\n` +
          anns.map((a) => `      ${JSON.stringify(a)},`).join('\n') +
          '\n    ],',
      )
      .join('\n')
    return `  ${JSON.stringify(slug)}: {\n${inner}\n  },`
  })
  .join('\n')

const file = `// AUTO-GENERATED by scripts/generate-text-annotations.mjs - do not edit by hand.
//
// Key quotations located in the text we publish, so the reader can highlight
// them and show the note that was already written for them. Nothing here is
// authored by the generator: every note is the \`who\` and \`analysis\` from the
// study guide, and every \`text\` is cut verbatim out of our own edition.
//
// A quotation the generator cannot locate is absent rather than approximated.
// Re-run the script after changing a guide's quotations or re-fetching a text.

export interface GeneratedAnnotation {
  type: 'quote'
  /** The exact span as it appears in the published text. */
  text: string
  /** Who said it, and the authored commentary. */
  note: string
}

/** slug -> section id -> annotations. */
export const TEXT_ANNOTATIONS: Readonly<
  Record<string, Readonly<Record<string, readonly GeneratedAnnotation[]>>>
> = {
${body}
}
`

writeFileSync(OUT, file, 'utf8')

report.sort((a, b) => b.found - a.found)
for (const r of report) {
  console.log(`  ${r.slug.padEnd(28)} ${String(r.found).padStart(3)}/${r.total}`)
  for (const m of r.missed) console.log(`        not located: ${m}`)
}
console.log(
  `\nannotations: ${totalFound} of ${totalQuotes} quotations located across ${Object.keys(result).length} texts`,
)
console.log(`written to ${resolve(OUT).replace(ROOT, '')}`)
