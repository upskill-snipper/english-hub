#!/usr/bin/env node
/**
 * Link the authored analysis to where it actually occurs in the text.
 *
 * WHAT WAS REPORTED, TWICE. The full-text reader offers five annotation
 * overlays - Context, Key Quotes, Language, Themes, Characters - and highlights
 * nothing. The first version of this script fixed a third of that: it located
 * the guide's key quotations, so the Key Quotes overlay began working. The
 * other four still highlighted nothing on every text, because this script only
 * ever emitted `type: 'quote'`.
 *
 * Measured on the live site before this rewrite, on A Christmas Carol:
 * 28,862 words, 136 of them highlighted, seven annotations, all of one type.
 * Reading the novella you would see nothing for pages at a time, and the
 * Language and Themes toggles were controls for an empty set on all
 * twenty-six texts.
 *
 * THE PRINCIPLE, unchanged and the whole point: THIS INVENTS NO ANALYSIS. Every
 * note is a sentence a person wrote in the study guide. Every highlighted span
 * is cut verbatim out of our own edition. What this does is find where the
 * author's own quotation sits in the text and attach the author's own sentence
 * about it.
 *
 * FIVE AUTHORED SOURCES, one per overlay. Each guide at
 * src/app/revision/texts/<slug>/ carries all of them already:
 *
 *   quotations[]        -> quote      the key quotations and their commentary
 *   key-quotes/page.tsx -> quote      a far longer authored list where it exists
 *                          theme      from that page's own `themes` array
 *                          language   where the authored analysis NAMES a technique
 *   themes[].body       -> theme      the quotations the author embedded in it
 *   characters[].body   -> character  likewise
 *   historicalContext[] -> context    likewise
 *
 * The embedded-quotation sources work because a guide that says Polonius
 * "registers the ambiguity" quotes him while doing it. That quotation is in our
 * text, so the theme can be anchored to the line that evidences it. The note is
 * the sentence the author wrote around the quotation, not a summary of it.
 *
 * TWO MATCHING DEFECTS FIXED, both of which silently lost whole texts:
 *
 *   - `whoAr` between `who` and `analysis` broke the extraction regex, so a
 *     guide that had been translated into Arabic produced ZERO annotations and
 *     simply did not appear in this script's own report. Jekyll and Hyde has
 *     twenty-four authored quotations and was contributing none. Fields are now
 *     read per object, so an added key cannot break the read.
 *   - The fold kept word boundaries, so the guide's "grindstone" never matched
 *     the edition's "grind-stone". Matching now ignores every non-alphanumeric
 *     character, spaces included, which is safe for a needle of this length and
 *     fixes the whole hyphenation-and-spacing class at once.
 *
 * THREE REFUSALS, all printed rather than passed over quietly:
 *
 *   - a quotation that cannot be located is skipped. Some are genuine edition
 *     differences - "Are there no prisons? Are there no workhouses?" is two
 *     separate speeches in the text we publish - and a fuzzy match would
 *     highlight the wrong line, which is worse than highlighting none.
 *   - a match shorter than MIN_CHARS is skipped, because a short common phrase
 *     highlights half the play.
 *   - a text with no guide produces nothing, and says so.
 *
 * ONE EXCEPTION TO "AS WRITTEN" (2 October 2026). A course that says it quotes
 * another printing of the text (OTHER_PRINTINGS) has each quotation in its
 * notes put into our edition's words, cut from the text, or the note is
 * refused: beside our text a note must quote our text. A note of its that
 * names a punctuation mark the highlighted lines do not print (the anthology's
 * dash where our edition has a comma) is refused too (PUNCTUATION_BY_NAME).
 *
 *   node scripts/generate-text-annotations.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { pathToFileURL } from 'node:url'

const ROOT = process.cwd()
const DATA_DIR = join(ROOT, 'src/data/full-texts')

// The viewer's own layout for every held text (a play set out as a play, a
// novel's italics, a poem's verse), so each note is cut from the text as the
// reader prints it. Compiled with TypeScript's transpileModule rather than
// imported as .ts: that needs Node 22.18 or later, and this script runs in
// prebuild on whatever Node the build uses (.nvmrc and CI say 20, package.json
// says >=20). The first version imported the .ts directly and would have failed
// every build on Node 20 (26 September 2026). The module has no imports, so it
// compiles alone.
async function loadSetForTheViewer() {
  const ts = (await import('typescript')).default
  const source = readFileSync(join(ROOT, 'src/components/study/set-play-for-the-viewer.ts'), 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  })
  const dir = mkdtempSync(join(tmpdir(), 'teh-set-play-'))
  try {
    const file = join(dir, 'set-play-for-the-viewer.mjs')
    writeFileSync(file, outputText, 'utf8')
    return (await import(pathToFileURL(file).href)).setSectionForTheViewer
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}
const setSectionForTheViewer = await loadSetForTheViewer()
const PAGES_DIR = join(ROOT, 'src/app/revision/texts')
const OUT = join(ROOT, 'src/data/text-annotations.generated.ts')

/**
 * Shorter than this and a match is a coincidence, not a quotation.
 *
 * Counted in LETTERS AND DIGITS, because the fold drops spaces. Twenty here is
 * the same strictness as the twenty-four this was before: a twenty-four
 * character phrase carries about four spaces. Left at twenty-four it silently
 * became a stricter test than it had ever been, which showed up as poems -
 * whose lines are short - matching almost nothing.
 */
const MIN_CHARS = 20

/**
 * Shorter than this and a note is not commentary.
 *
 * `sentenceAround` returns the sentence containing the quotation, and a short
 * one can be little more than the quotation with a verb attached: "Fred calls
 * it 'a good time'." is true, authored, and tells a student nothing the
 * highlighted line does not already say. The note has to earn its tooltip.
 *
 * Sixty is the bar an existing test had already set for this. The generator
 * enforces it rather than emitting notes that fail it, which is the right way
 * round: the test was catching something real.
 */
const MIN_NOTE = 60

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

/* ─── Reading authored prose out of a guide page ─────────────────────────── */

/**
 * A single-quoted JS string literal -> its value.
 *
 * Control characters are escaped before the parse rather than assumed absent.
 * Prettier wraps a long entry across lines, so a literal newline really does
 * turn up inside a matched span, and `JSON.parse` rejects it outright - which
 * took the whole generator down rather than skipping one paragraph.
 */
function decodeLiteral(raw) {
  const jsonReady = raw
    .replace(/\\'/g, "'")
    .replace(/"/g, '\\"')
    .replace(/[ -]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'))
  try {
    return JSON.parse(`"${jsonReady}"`)
  } catch {
    return null
  }
}

/**
 * The source of the array literal that follows `<name>: [`, brace-balanced.
 *
 * Counting brackets rather than searching for a closing marker is what lets an
 * entry contain a `]` inside its prose, which several historical-context
 * paragraphs do.
 */
function arrayBlock(src, name) {
  const at = src.indexOf(`${name}: [`)
  if (at === -1) return null
  return blockFrom(src, src.indexOf('[', at))
}

/** The brace-balanced contents of the array starting at `open`. */
function blockFrom(src, open) {
  if (open === -1) return null
  let depth = 0
  for (let i = open; i < src.length; i++) {
    if (src[i] === '[') depth++
    else if (src[i] === ']') {
      depth--
      if (depth === 0) return src.slice(open + 1, i)
    }
  }
  return null
}

/**
 * The top-level data array of a key-quotes page.
 *
 * These pages come in two shapes and a helper that knew only one silently read
 * nothing from the other. A Christmas Carol declares
 * `const quotes: KeyQuote[] = [...]`; Jekyll and Hyde and Romeo and Juliet
 * declare `const QUOTES_BY_THEME: ThemeQuotes[] = [...]`, grouping quotations
 * under a theme. Matching on `quotes: [` found the first shape not at all - the
 * type annotation sits between the name and the bracket - and found only the
 * FIRST group of the second, which is why two pages contributed a handful of
 * annotations and the third contributed none.
 */
function dataArray(src) {
  const m = src.match(/const\s+\w+\s*(?::\s*[\w<>[\]|\s]+?)?\s*=\s*\[/)
  // The opening bracket is the LAST character of the match, not the first `[`
  // after it: `const quotes: KeyQuote[] = [` contains a `[]` in its type
  // annotation, and scanning from the match start balanced that pair instead
  // and returned an empty block. Silently, of course.
  return m ? blockFrom(src, m.index + m[0].length - 1) : null
}

/** Split an array block into its top-level `{ ... }` objects. */
function objectsIn(block) {
  const out = []
  let depth = 0
  let start = -1
  for (let i = 0; i < block.length; i++) {
    if (block[i] === '{') {
      if (depth === 0) start = i
      depth++
    } else if (block[i] === '}') {
      depth--
      if (depth === 0 && start !== -1) out.push(block.slice(start, i + 1))
    }
  }
  return out
}

/**
 * One single-quoted field's value out of an object's source.
 *
 * Read per field rather than as one fixed sequence. The previous version
 * matched `quote` then `who` then `analysis` as adjacent lines, so inserting
 * `whoAr` between two of them made the whole guide unreadable and the text
 * vanished from the output without an error.
 */
function field(objSrc, name) {
  const m = objSrc.match(new RegExp(`(?:^|[{,]\\s*)${name}:\\s*\\n?\\s*'((?:[^'\\\\]|\\\\.)*)'`))
  return m ? decodeLiteral(m[1]) : null
}

/** Every plain string in an array of bare string literals. */
function stringsIn(block) {
  return [...block.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => decodeLiteral(m[1])).filter(Boolean)
}

/* ─── Normalising, with a map back to the original offsets ──────────────── */

/**
 * Fold `text` to lower-case letters and digits ONLY - no spaces, no
 * punctuation - recording for each folded character the offset it came from.
 * The map is what lets a match on the folded string be cut back out of the
 * original, so the viewer highlights the edition's exact characters.
 *
 * Dropping spaces as well as punctuation is deliberate. The guide writes
 * "grindstone" and the edition prints "grind-stone"; a fold that turned the
 * hyphen into a space still failed to match. At twenty-four characters or more
 * a cross-word coincidence is not a realistic risk, and this retires the entire
 * hyphenation-and-spacing class of miss.
 */
function fold(text) {
  let out = ''
  const map = []
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (/[A-Za-z0-9]/.test(ch)) {
      out += ch.toLowerCase()
      map.push(i)
    }
  }
  return { folded: out, map }
}

/** The guide's quotation, reduced to the same alphabet. */
function foldQuote(q) {
  return fold(q).folded
}

/* ─── Harvesting authored candidates ────────────────────────────────────── */

/**
 * Technique words. A `language` annotation is emitted ONLY when the author's
 * own analysis names one of these, and the note is that analysis. The list is
 * the vocabulary of the mark schemes this site teaches; it is a filter on
 * authored prose, never a source of it.
 */
const TECHNIQUES = [
  'simile',
  'metaphor',
  'personification',
  'pathetic fallacy',
  'alliteration',
  'sibilance',
  'assonance',
  'onomatopoeia',
  'imagery',
  'symbolism',
  'symbol',
  'juxtaposition',
  'oxymoron',
  'paradox',
  'irony',
  'dramatic irony',
  'foreshadow',
  'repetition',
  'anaphora',
  'listing',
  'tricolon',
  'rule of three',
  'hyperbole',
  'euphemism',
  'caesura',
  'enjambment',
  'iambic',
  'pentameter',
  'blank verse',
  'rhyme',
  'sonnet',
  'soliloquy',
  'aside',
  'monologue',
  'motif',
  'allusion',
  'semantic field',
  'connotation',
  'imperative',
  'modal verb',
  'superlative',
  'sentence structure',
  'syntax',
  'pun',
  'antithesis',
  'apostrophe',
  'volta',
  'stage direction',
  'narrative voice',
  'first person',
  'third person',
  'free indirect',
  'foil',
  'allegory',
  'parallelism',
  'rhetorical question',
]

/** Does this authored analysis name a technique? Returns the one it names. */
function techniqueNamed(analysis) {
  const low = analysis.toLowerCase()
  // Longest first, so "dramatic irony" is reported rather than "irony".
  for (const t of [...TECHNIQUES].sort((a, b) => b.length - a.length)) {
    if (low.includes(t)) return t
  }
  return null
}

/**
 * The authored commentary inside a note, with any attribution label removed.
 *
 * Notes are composed as "<who or what>. <the sentence somebody wrote>". The
 * label is ours; the sentence is theirs. Only the sentence should be measured
 * for length, and only the sentence is traceable to a source file - the label
 * and the sentence are separate fields wherever they came from.
 *
 * A separator is only treated as a label boundary if it falls early, so a note
 * that is simply two sentences of prose is left whole.
 */
function noteBody(note) {
  const at = note.indexOf('. ')
  return at > 0 && at < 80 ? note.slice(at + 2) : note
}

/** The sentence of `prose` containing `needle`, trimmed. */
function sentenceAround(prose, needle) {
  const at = prose.indexOf(needle)
  if (at === -1) return prose.slice(0, 300)
  let from = prose.lastIndexOf('. ', at)
  from = from === -1 ? 0 : from + 2
  let to = prose.indexOf('. ', at + needle.length)
  to = to === -1 ? prose.length : to + 1
  return prose.slice(from, to).trim()
}

/**
 * Which overlay each study-guide sub-page feeds.
 *
 * `essay-plans` is missing on purpose: a plan is advice about answering a
 * question rather than analysis of a line.
 */
const SUBPAGE_OVERLAY = {
  themes: 'theme',
  characters: 'character',
  context: 'context',
  'extract-walkthrough': 'language',
}

/**
 * The per-section pages - staves, chapters, acts - and the FIELD each kind of
 * analysis sits under.
 *
 * These are the pages that matter most for coverage, because they are organised
 * by the part of the text they discuss, which is exactly where highlighting was
 * thinnest: The Scarlet Letter has four annotations across twenty-four
 * chapters, so most screens show nothing.
 *
 * Three texts have such a page and all three shape it differently - A Christmas
 * Carol has `quotes[]`, `languageAnalysis[]` and `thematicSignificance`; Jekyll
 * and Hyde has `characterDevelopment` and `structuralSignificance`; Romeo and
 * Juliet nests everything under `scenes[]`. Rather than hand-code three
 * readers, this harvests by the author's own FIELD NAME, which is the same
 * principle used everywhere else here: the label a person filed the analysis
 * under decides the overlay, and the prose is never read for intent.
 *
 * `summary`, `keyMoments`, `keyEvents` and `overview` are absent deliberately.
 * They retell the plot. A plot summary anchored to a line is not analysis of it.
 */
const SECTION_PAGES = ['staves', 'chapters', 'acts']
const SECTION_FIELD_OVERLAY = {
  quotes: 'quote',
  // Romeo and Juliet nests a per-scene `language` string under `scenes[]`
  // rather than a `languageAnalysis` array, which is why the acts page
  // contributed nothing until this line existed.
  language: 'language',
  languageAnalysis: 'language',
  structuralSignificance: 'language',
  characterDevelopment: 'character',
  thematicSignificance: 'theme',
}

/**
 * The authored prose inside a page, as single-quoted or backtick literals.
 *
 * These are TSX files, so most short strings are class names and import paths.
 * A literal has to be long enough to be a sentence and contain a space before
 * it counts, which drops `text-heading-md font-heading` without needing a list
 * of things to ignore.
 */
function proseLiterals(src) {
  const out = []
  for (const m of src.matchAll(/'((?:[^'\\\n]|\\.){60,2000})'/g)) {
    const v = decodeLiteral(m[1])
    if (v && v.includes(' ')) out.push(v)
  }
  for (const m of src.matchAll(/`([^`]{60,4000})`/g)) {
    if (m[1].includes(' ') && !m[1].includes('${')) out.push(m[1])
  }
  return out
}

/**
 * Every piece of authored prose stored under `name:`, wherever it appears.
 *
 * A field may hold a string, an array of strings, or an array of objects - the
 * three section pages use all three shapes for the same kind of analysis - so
 * this takes the value however it is written and returns the prose inside it.
 */
function valuesOfField(src, name) {
  const out = []
  const re = new RegExp(`(?:^|[{,[]\\s*)${name}:\\s*`, 'g')
  for (const m of src.matchAll(re)) {
    const at = m.index + m[0].length
    const ch = src[at]
    if (ch === "'" || ch === '`') {
      const lit = src.slice(at).match(ch === "'" ? /^'((?:[^'\\]|\\.)*)'/ : /^`([^`]*)`/)
      if (lit) {
        const v = ch === "'" ? decodeLiteral(lit[1]) : lit[1]
        if (v && v.length >= 40) out.push(v)
      }
    } else if (ch === '[' || ch === '{') {
      const block = ch === '[' ? blockFrom(src, at) : src.slice(at, at + 20_000)
      if (block) out.push(...proseLiterals(block))
    }
  }
  return out
}

/**
 * A SECOND guide directory, and by some distance the largest source here.
 *
 * Twelve of the texts have a second, longer guide under
 * `src/app/resources/revision-notes/<slug>/` - between 577 and 1,641 lines
 * each - on a completely different route from `revision/texts/<slug>/`. Nothing
 * had ever read it. Antony and Cleopatra's is 1,490 lines and the play had
 * annotations on none of its forty-two scenes.
 *
 * These pages store their analysis in four JSX components with plain
 * attributes, which is a cleaner source than prose: the quotation and the
 * commentary are already separate fields.
 */
const NOTE_COMPONENTS = {
  // <Quote text= speaker= act= analysis= />
  Quote: { type: 'quote', quote: 'text', note: 'analysis', who: ['speaker', 'act'] },
  // <QuoteCard quote= speaker= analysis= />
  QuoteCard: { type: 'quote', quote: 'quote', note: 'analysis', who: ['speaker'] },
  // <CharacterCard name= description /> - quotations embedded in the prose.
  CharacterCard: { type: 'character', prose: 'description', label: 'name' },
  // <ThemeCard title= description />
  ThemeCard: { type: 'theme', prose: 'description', label: 'title' },
}

const ENTITIES = {
  '&ldquo;': '"',
  '&rdquo;': '"',
  '&lsquo;': "'",
  '&rsquo;': "'",
  '&apos;': "'",
  '&quot;': '"',
  '&mdash;': '-',
  '&ndash;': '-',
  '&amp;': '&',
  '&nbsp;': ' ',
}
const decodeEntities = (s) => s.replace(/&[a-z]+;/g, (e) => ENTITIES[e] ?? e)

/**
 * Where a text's revision-notes guide lives, if it has one.
 *
 * The directory is usually the slug, but not always: the guides for A Christmas
 * Carol, The Merchant of Venice and The Sign of Four are filed under
 * `christmas-carol`, `merchant-of-venice` and `sign-of-four`, without the
 * article. Matching on the slug alone missed all three - including the second
 * guide for the very text this whole item was reported against.
 *
 * Only the leading article is dropped, and only when that directory exists, so
 * this cannot quietly attach one text's guide to another.
 */
function revisionNotePath(slug) {
  const base = join(ROOT, 'src/app/resources/revision-notes')
  for (const name of [slug, slug.replace(/^(a|an|the)-/, '')]) {
    const p = join(base, name, 'page.tsx')
    if (existsSync(p)) return p
  }
  return null
}

/** Every authored candidate in a revision-notes guide. */
function revisionNoteCandidates(slug) {
  const path = revisionNotePath(slug)
  if (!path) return []
  const src = readFileSync(path, 'utf8')
  const out = []

  for (const [name, cfg] of Object.entries(NOTE_COMPONENTS)) {
    for (const m of src.matchAll(new RegExp(`<${name}\\b([\\s\\S]*?)/>`, 'g'))) {
      const attrs = {}
      for (const a of m[1].matchAll(/(\w+)="([^"]*)"/g)) attrs[a[1]] = decodeEntities(a[2])

      if (cfg.quote) {
        const quote = attrs[cfg.quote]
        const analysis = attrs[cfg.note]
        if (!quote || !analysis) continue
        const who = (cfg.who ?? [])
          .map((k) => attrs[k])
          .filter(Boolean)
          .join(' - ')
        out.push({ type: cfg.type, quote, note: who ? `${who}. ${analysis}` : analysis })
      } else {
        const prose = attrs[cfg.prose]
        const label = attrs[cfg.label]
        if (!prose) continue
        // These are JSX attributes, so the attribute itself is double-quoted
        // and every quotation INSIDE it is single-quoted - "Laertes vows to
        // 'cut his throat i' the church'". Matching only double quotes here
        // found nothing at all in the character and theme cards.
        //
        // Single quotes are the riskier delimiter because of apostrophes, and
        // that example has one inside the quotation. It is safe here only
        // because of what happens next: a span that is not in our edition,
        // character for character, is dropped. A sloppy extraction costs a
        // miss, never a wrong highlight.
        const inner = [
          ...embeddedQuotations(prose),
          ...[...prose.matchAll(/'([^']{20,300})'/g)].map((x) => x[1]),
        ]
        for (const q of inner) {
          out.push({
            type: cfg.type,
            quote: q,
            note: label ? `${label}. ${sentenceAround(prose, q)}` : sentenceAround(prose, q),
          })
        }
      }
    }
  }
  return out
}

/** Quotations a author embedded inside their own prose. */
function embeddedQuotations(prose) {
  return [...prose.matchAll(/["“]([^"“”]{12,400})["”]/g)].map((m) => m[1])
}

/**
 * Every authored candidate for one text, across all five sources.
 *
 * Returns `{ type, quote, note }`. Locating happens later; this only decides
 * what a person wrote and which overlay it belongs to.
 */
function candidatesFor(slug) {
  const out = []
  const guidePath = join(PAGES_DIR, slug, 'page.tsx')
  if (existsSync(guidePath)) {
    const src = readFileSync(guidePath, 'utf8')

    // 1. The key quotations, with their commentary.
    const qBlock = arrayBlock(src, 'quotations')
    if (qBlock) {
      for (const obj of objectsIn(qBlock)) {
        const quote = field(obj, 'quote')
        const analysis = field(obj, 'analysis')
        if (!quote || !analysis) continue
        const who = field(obj, 'who')
        out.push({ type: 'quote', quote, note: who ? `${who}. ${analysis}` : analysis })
      }
    }

    // 2. Themes, anchored to the quotations the author used as evidence.
    const tBlock = arrayBlock(src, 'themes')
    if (tBlock) {
      for (const obj of objectsIn(tBlock)) {
        const title = field(obj, 'title')
        const body = field(obj, 'body')
        if (!title || !body) continue
        for (const q of embeddedQuotations(body)) {
          out.push({ type: 'theme', quote: q, note: `${title}. ${sentenceAround(body, q)}` })
        }
      }
    }

    // 3. Characters, likewise.
    const cBlock = arrayBlock(src, 'characters')
    if (cBlock) {
      for (const obj of objectsIn(cBlock)) {
        const name = field(obj, 'name')
        const body = field(obj, 'body')
        if (!name || !body) continue
        for (const q of embeddedQuotations(body)) {
          out.push({ type: 'character', quote: q, note: `${name}. ${sentenceAround(body, q)}` })
        }
      }
    }

    // 4. Historical context, likewise. A bare array of paragraphs.
    const hBlock = arrayBlock(src, 'historicalContext')
    if (hBlock) {
      for (const para of stringsIn(hBlock)) {
        for (const q of embeddedQuotations(para)) {
          out.push({ type: 'context', quote: q, note: sentenceAround(para, q) })
        }
      }
    }
  }

  // 4b. The study-guide SUB-PAGES, where a text has them. Three texts do, and
  //     they are the three deepest guides on the site: a themes page, a
  //     characters page, a context page and an extract walkthrough, each many
  //     hundred lines of authored prose quoting the text as it goes.
  //
  //     The page the author filed the analysis under picks the overlay, the
  //     same rule the course modules use. `essay-plans` is deliberately absent
  //     for the same reason "Exam Practice" is: a plan is advice about
  //     answering a question, not analysis of a line, and anchoring it to a
  //     quotation would misfile it.
  for (const [dir, type] of Object.entries(SUBPAGE_OVERLAY)) {
    const path = join(PAGES_DIR, slug, dir, 'page.tsx')
    if (!existsSync(path)) continue
    for (const prose of proseLiterals(readFileSync(path, 'utf8'))) {
      for (const q of embeddedQuotations(prose)) {
        out.push({ type, quote: q, note: sentenceAround(prose, q) })
      }
    }
  }

  // 4c. The per-section pages, harvested by field name.
  // 4d. The second guide directory, which nothing had ever read.
  out.push(...revisionNoteCandidates(slug))

  for (const dir of SECTION_PAGES) {
    const path = join(PAGES_DIR, slug, dir, 'page.tsx')
    if (!existsSync(path)) continue
    const src = readFileSync(path, 'utf8')
    for (const [name, type] of Object.entries(SECTION_FIELD_OVERLAY)) {
      for (const prose of valuesOfField(src, name)) {
        for (const q of embeddedQuotations(prose)) {
          out.push({ type, quote: q, note: sentenceAround(prose, q) })
        }
      }
    }
  }

  // 5. The key-quotes page, where one exists. Richer than the guide's own list
  //    - A Christmas Carol has twenty-nine here against eleven in the guide -
  //    and the only source that carries an explicit per-quotation theme.
  //    Since 24 October 2026 the data is in src/data/key-quotes/<slug>.ts,
  //    moved out of the page so the text quests can read it too; it is
  //    declared there exactly as it was in the page, so it is read the same
  //    way. The page is still read where no module exists. Reading the page
  //    alone after the move would have found no data array and dropped every
  //    key-quotes annotation without a word.
  const kqData = join(ROOT, 'src/data/key-quotes', `${slug}.ts`)
  const kqPath = existsSync(kqData) ? kqData : join(PAGES_DIR, slug, 'key-quotes', 'page.tsx')
  if (existsSync(kqPath)) {
    const src = readFileSync(kqPath, 'utf8')
    const block = dataArray(src)
    if (block) {
      for (const top of objectsIn(block)) {
        // A group carries a theme and nests its quotations; a bare entry is a
        // quotation in its own right. Both shapes are in the repository.
        const nested = /(?:^|[{,]\s*)quotes:\s*\[/.test(top)
        const groupTheme = nested ? field(top, 'theme') : null
        const entries = nested
          ? objectsIn(blockFrom(top, top.indexOf('[', top.indexOf('quotes:'))) ?? '')
          : [top]

        for (const obj of entries) {
          const quote = field(obj, 'quote')
          const analysis = field(obj, 'analysis')
          if (!quote || !analysis) continue
          const speaker = field(obj, 'speaker')
          const where = field(obj, 'stave') || field(obj, 'act') || field(obj, 'chapter')
          const attribution = [speaker, where].filter(Boolean).join(' - ')
          out.push({
            type: 'quote',
            quote,
            note: attribution ? `${attribution}. ${analysis}` : analysis,
          })

          // The author's own theme tags: an entry's own `themes` array, or the
          // theme of the group the author filed it under.
          const themesBlock = obj.match(/themes:\s*\[([^\]]*)\]/)
          const themes = themesBlock ? stringsIn(themesBlock[1]) : groupTheme ? [groupTheme] : []
          for (const theme of themes) {
            out.push({ type: 'theme', quote, note: `${theme}. ${analysis}` })
          }

          // A language note only where the author named a technique.
          const technique = techniqueNamed(analysis)
          if (technique) {
            out.push({ type: 'language', quote, note: `${technique}. ${analysis}` })
          }
        }
      }
    }
  }

  return out
}

/* ─── A sixth source: the poem and classic course modules ───────────────── */

/**
 * Which overlay a course module's analysis belongs to, decided by the heading
 * the AUTHOR filed it under rather than by reading the prose.
 *
 * Every one of these courses is four modules with the same four titles. Exam
 * practice is deliberately absent: it is advice about answering a question, not
 * analysis of a line, and anchoring it to a quotation would misfile it.
 */
const MODULE_OVERLAY = {
  // The poetry courses.
  'Context & Overview': 'context',
  'Language & Imagery Analysis': 'language',
  'Structure & Form': 'language',
  // The prose and drama courses, which carry a richer set of headings and so
  // reach four of the five overlays from one source.
  'Context & Author Background': 'context',
  'Language & Style': 'language',
  'Plot & Structure': 'language',
  'Themes & Ideas': 'theme',
  'Character Analysis': 'character',
  // The drama courses use their own heading for the same thing.
  'Language, Stagecraft & Dramatic Techniques': 'language',
}

/**
 * slug -> [{ type, quote, note }] harvested from the course modules.
 *
 * Built once. These courses are where the analysis of the poems lives: eight of
 * the twelve texts that had no annotations at all are poems with a full course
 * written about them, and nothing connected that course to the poem's own text.
 *
 * A course whose id does not resolve to a text we publish is skipped, and a
 * quotation from a poem OTHER than this one simply fails to locate - the
 * matcher only ever cuts from the text it was given, so a mis-mapped course
 * produces nothing rather than something wrong.
 */
function courseCandidates() {
  const bySlug = {}
  // Title -> slug, for the courses whose id does not contain the slug.
  const TEXT_TITLES = new Map()
  for (const f of readdirSync(DATA_DIR).filter((n) => n.endsWith('.ts'))) {
    const slug = f.replace(/\.ts$/, '')
    const m = readFileSync(join(DATA_DIR, f), 'utf8').match(/\btitle:\s*'((?:[^'\\]|\\.)*)'/)
    if (m) {
      const decoded = decodeLiteral(m[1])
      if (decoded) TEXT_TITLES.set(decoded.toLowerCase(), slug)
    }
  }
  for (const file of readdirSync(join(ROOT, 'src/data')).filter((f) => f.endsWith('.ts'))) {
    const src = readFileSync(join(ROOT, 'src/data', file), 'utf8')
    if (!src.includes('CourseModule[]')) continue

    for (const m of src.matchAll(/moduleList:\s*(\w+)\s*,/g)) {
      const varName = m[1]
      // The course object this moduleList belongs to, read backwards to its id.
      const before = src.slice(0, m.index)
      const idMatch = [...before.matchAll(/id:\s*'([\w-]+)'/g)].pop()
      if (!idMatch) continue
      // The id usually contains the slug, but not always: the La Belle Dame
      // course is `igcse-lit-poem-la-belle-dame` against the text
      // `la-belle-dame-sans-merci`, so an id-only rule skipped a poem that has
      // a whole course written about it. Falling back to the course's own
      // TITLE is self-verifying - it reads `"La Belle Dame sans Merci" - John
      // Keats` and the text is titled the same - where a hand-written alias
      // list would be one more thing to drift.
      let slug = idMatch[1].replace(/^igcse-lit-(?:poem|classic|drama|prose)-/, '')
      if (!existsSync(join(DATA_DIR, `${slug}.ts`))) {
        // The `\b` matters. Without it this matches `subtitle:` as well, whose
        // value is the same boilerplate on every course in the file, so the
        // lookup missed every time and the fallback appeared to do nothing.
        const titleMatch = [...before.matchAll(/\btitle:\s*'((?:[^'\\]|\\.)*)'/g)].pop()
        const courseTitle = titleMatch ? decodeLiteral(titleMatch[1]) : null
        const bare = courseTitle
          ? courseTitle
              .replace(/\s+-\s+[^-]*$/, '')
              .replace(/^["'“]|["'”]$/g, '')
              .trim()
          : null
        const found = bare ? TEXT_TITLES.get(bare.toLowerCase()) : null
        if (!found) continue
        slug = found
      }

      const declAt = src.search(
        new RegExp(`const\\s+${varName}\\s*:\\s*CourseModule\\[\\]\\s*=\\s*\\[`),
      )
      if (declAt === -1) continue
      const decl = src.slice(declAt).match(/=\s*\[/)
      const block = blockFrom(src, declAt + decl.index + decl[0].length - 1)
      if (!block) continue

      for (const obj of objectsIn(block)) {
        const title = field(obj, 'title')
        const type = MODULE_OVERLAY[title]
        if (!type) continue
        // `content` is a backtick template literal of HTML.
        const content = obj.match(/content:\s*`([\s\S]*?)`\s*,?\s*\}?\s*$/m)
        if (!content) continue
        const prose = content[1]
          .replace(/<[^>]*>/g, ' ')
          .replace(/&[a-z]+;/g, ' ')
          .replace(/\s+/g, ' ')
        for (const q of embeddedQuotations(prose)) {
          // `from` is which file the course is in, so that a course that says
          // it quotes another printing (OTHER_PRINTINGS, below) can be told apart.
          ;(bySlug[slug] ??= []).push({
            type,
            quote: q,
            note: sentenceAround(prose, q),
            from: `src/data/${file}`,
          })
        }
      }
    }
  }
  return bySlug
}

const COURSE_CANDIDATES = courseCandidates()

/* ─── A source that quotes another printing ─────────────────────────────── */

/**
 * Sources that say they quote ANOTHER PRINTING of a text we hold, and where
 * each says so.
 *
 * WHAT BROKE (found 2 October 2026). The Edexcel IGCSE course on La Belle Dame
 * sans Merci quotes the anthology's text of the poem, as its version note says
 * it does. The reader prints the held text, Sidney Colvin's, which words some
 * lines otherwise (the header of src/data/study-guides/la-belle-dame-sans-merci.ts
 * lists the places). The course's sentence counting the syllables of the first
 * stanza was attached to the poem's first two lines, so just above the line
 * "The sedge is withered from the lake," the student was shown a note quoting
 * it as "The sedge has wither'd from the lake". Nothing here could see it: the
 * highlighted span is cut from our text and checked, and the quotations inside
 * a note were never compared with anything.
 *
 * So a note from one of these sources must quote our text. A quotation in it
 * (in double quotation marks, which is how these courses quote) that our text
 * prints word for word is left as written. One that our text prints in other
 * words, a word changed, added, dropped or spelt otherwise, is replaced by our
 * text's words for that passage, cut from the text as every highlight is; the
 * punctuation round it and the rest of the note are the author's. Any other
 * quotation refuses the note: it may be another printing's wording that this
 * failed to match, and a note missing is better than a note misquoting the
 * line beside it.
 *
 * The same sources are OTHER_PRINTINGS in scripts/check-quotations.mjs, which
 * reports their own differences from the held text apart and holds the
 * reader's notes to the held text. Add one only where the source itself says
 * which printing it quotes, and say where it says so.
 */
const OTHER_PRINTINGS = [
  {
    text: 'la-belle-dame-sans-merci',
    // Its first module's version note: "The Edexcel IGCSE anthology prints
    // Keats's original 1819 version of the poem ... Always quote from the
    // anthology version when answering Edexcel questions".
    from: 'src/data/edexcel-igcse-lit-poetry-courses-2.ts',
  },
]

/** A passage's words as the quotation scanner compares them: lower case, split at anything else. */
const wordsAsPrinted = (s) =>
  s
    .normalize('NFC')
    .toLowerCase()
    .match(/[\p{L}\p{N}]+/gu) ?? []

/**
 * A passage's words for finding it in another printing, each with where it
 * stands in `s`: lower case, accents gone ("gapèd" is "gaped") and an elided
 * -'d read as -ed ("wither'd" is "withered"), so that a spelling alone does
 * not hide the passage. What is put in the note is cut from our text, so this
 * looseness decides only where to cut.
 */
function wordsLoosely(s) {
  const out = []
  for (const m of s.matchAll(/[\p{L}\p{N}][\p{L}\p{N}\p{M}]*(?:['’]d(?![\p{L}\p{N}]))?/gu)) {
    const w = m[0]
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
      .toLowerCase()
      .replace(/['’]d$/, 'ed')
    out.push({ w, from: m.index, to: m.index + m[0].length })
  }
  return out
}

/** How many words must be changed, added or dropped to turn one list of words into the other. */
function wordEdits(a, b) {
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    prev = cur
  }
  return prev[b.length]
}

/**
 * Our text's words for a passage another printing words otherwise: the run of
 * our words fewest edits from `quote`, at most one word in four, cut from the
 * text, with " / " where a line ends. Null when no run is that close, when the
 * quotation is too short to say which passage it is, or when two runs with
 * different words are equally close, since then it is not known which was meant.
 */
function ourPassage(quote, plainSections) {
  const q = wordsLoosely(quote).map((x) => x.w)
  if (q.length < 4) return null
  const allowed = Math.floor(q.length / 4)
  let best = null
  for (const plain of plainSections) {
    const ws = wordsLoosely(plain)
    for (let i = 0; i < ws.length; i++) {
      for (let len = q.length - allowed; len <= q.length + allowed; len++) {
        if (len < 1 || i + len > ws.length) continue
        const run = ws.slice(i, i + len)
        const edits = wordEdits(
          q,
          run.map((x) => x.w),
        )
        if (edits > allowed) continue
        const words = run.map((x) => x.w).join(' ')
        // Fewest edits, then the length nearest the quotation's, then the
        // first in the text. The same words twice (the poem's first and last
        // stanzas share a line) are one passage, not a doubt.
        const rank = edits * 1000 + Math.abs(len - q.length)
        if (!best || rank < best.rank) best = { rank, words, plain, run, doubt: false }
        else if (rank === best.rank && words !== best.words) best.doubt = true
      }
    }
  }
  if (!best || best.doubt) return null
  return best.plain
    .slice(best.run[0].from, best.run[best.run.length - 1].to)
    .replace(/\s*\n\s*/g, ' / ')
}

/**
 * `note` with every quotation in it in our text's words (see OTHER_PRINTINGS),
 * and how many it changed; or null when a quotation can be neither found in
 * our text nor matched to one passage of it.
 */
function inOurWords(note, plainSections) {
  const printed = plainSections.map((p) => ` ${wordsAsPrinted(p).join(' ')} `)
  let changed = 0
  let refused = false
  const out = note.replace(/(["“])([^"“”]+)(["”])/g, (whole, open, inner, close) => {
    const words = wordsAsPrinted(inner).join(' ')
    if (refused || !words || printed.some((p) => p.includes(` ${words} `))) return whole
    // From the quotation's first word to its last, so the author's own
    // punctuation either side (a list's comma, the line's question mark) stays.
    const span = /[\p{L}\p{N}](?:[\s\S]*[\p{L}\p{N}])?/u.exec(inner)
    const ours = ourPassage(span[0], plainSections)
    if (!ours) {
      refused = true
      return whole
    }
    changed++
    return `${open}${inner.slice(0, span.index)}${ours}${inner.slice(span.index + span[0].length)}${close}`
  })
  return refused ? null : { note: out, changed }
}

/**
 * Punctuation a note can point to by name, and the marks that are it. A dash
 * is "--" in our editions as often as a dash character; a hyphen inside a word
 * ("knight-at-arms") is not one.
 *
 * WHAT BROKE (found 2 October 2026, reviewing the change above). Printings of
 * a poem differ in their punctuation more than in their words, and inOurWords
 * compares words only. The La Belle Dame course quotes the anthology's "Full
 * beautiful - a faery's child" and says that the dash before "a faery's child"
 * creates a moment of revelation. Colvin prints a comma there, so the reader
 * highlighted a line with no dash in it beside a note analysing its dash, and
 * every check passed, because every word the note quoted was the held text's.
 */
const PUNCTUATION_BY_NAME = [
  { name: /\bdash(?:es)?\b/i, mark: /[—–]|--|\s-\s/ },
  { name: /\bexclamation marks?\b/i, mark: /!/ },
  { name: /\bquestion marks?\b/i, mark: /\?/ },
  { name: /\bsemi-?colons?\b/i, mark: /;/ },
  { name: /(?<!semi-)\bcolons?\b/i, mark: /:/ },
  { name: /\bcommas?\b/i, mark: /,/ },
  { name: /\bellips(?:is|es)\b/i, mark: /…|\.\.\./ },
  { name: /\b(?:brackets?|parenthes[ie]s)\b/i, mark: /[()[\]]/ },
]

/**
 * The first punctuation mark `note` names that `passage` does not print, or
 * null. The note's own quotations are left out, so that a quoted word is not
 * taken for the note naming a mark.
 */
function punctuationNotPrinted(note, passage) {
  const prose = note.replace(/["“][^"“”]*["”]/g, ' ')
  for (const p of PUNCTUATION_BY_NAME) {
    const named = prose.match(p.name)
    if (named && !p.mark.test(passage)) return named[0].toLowerCase()
  }
  return null
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
let totalCandidates = 0
const report = []
const printingReport = []

for (const slug of slugs) {
  // Only for a reader that shows them. Macbeth's reader carries 88 notes of its
  // own (src/app/revision/texts/macbeth/read/notes.ts) and mounts the viewer
  // itself, so notes generated for it would be read by nobody and still sent,
  // with every other text's, to every reader page that imports this file.
  const readPage = join(PAGES_DIR, slug, 'read/page.tsx')
  if (existsSync(readPage) && !readFileSync(readPage, 'utf8').includes('<FullTextReader')) {
    report.push({ slug, found: 0, total: 0, missed: [], byType: {}, ownNotes: true })
    continue
  }
  const candidates = [...candidatesFor(slug), ...(COURSE_CANDIDATES[slug] ?? [])]
  if (candidates.length === 0) {
    report.push({ slug, found: 0, total: 0, missed: [], byType: {}, noGuide: true })
    continue
  }
  const data = await loadTextData(slug)
  // Each text is printed as setSectionForTheViewer sets it out, so each span is
  // cut from that: the words are the edition's, but the italic underscores are
  // gone, and a span that ran over one ("_Et tu, Brute?_") would otherwise never
  // be found on the page. A play's place is left off, so no span is cut from
  // it. Novels joined the plays on 26 September 2026, when the reader began
  // printing their italics too.
  const printed = (section) => setSectionForTheViewer(data.type, section.content)
  totalCandidates += candidates.length

  const perSection = {}
  const seen = new Set()
  let found = 0
  const missed = []
  const byType = {}

  // The work's own title, to refuse below.
  const ownTitle = fold(data.title ?? '').folded

  // The sources that say they quote another printing of this text, and the
  // text as the reader prints it, for putting their notes into its words.
  const otherPrintings = OTHER_PRINTINGS.filter((o) => o.text === slug).map((o) => o.from)
  const plainSections = otherPrintings.length
    ? data.sections.map((section) => printed(section).replace(/<[^>]*>/g, ''))
    : []
  let reworded = 0
  let refused = 0

  for (const c of candidates) {
    const needle = foldQuote(c.quote)
    if (needle.length < MIN_CHARS) {
      missed.push(`${c.quote.slice(0, 40)} (too short)`)
      continue
    }
    // A fourth refusal. Prose about a text quotes its TITLE constantly, and on
    // a poem the title is also its first line, so the matcher locates it and
    // highlights the heading. La Belle Dame sans Merci opened with its own
    // title underlined and a note about which anthology edition we used - the
    // first thing a reader of that poem met, and not analysis of anything.
    if (needle === ownTitle) {
      missed.push(`${c.quote.slice(0, 40)} (the work's own title)`)
      continue
    }
    // A fifth refusal: a note too short to be commentary. The comparison is
    // `<=` because the test this mirrors asks for STRICTLY more than MIN_NOTE,
    // and a generator that emitted exactly sixty would fail a gate it was
    // written to satisfy.
    //
    // It is the COMMENTARY that has to clear the bar, not the label plus the
    // commentary. Most notes read "Utterson. He is the last good influence in
    // Jekyll's life." - a name, then the authored sentence. Measuring the whole
    // string let a short sentence through on the strength of a long name, and
    // the note then failed provenance for a subtle reason: its last sixty
    // characters straddled the join between label and sentence, and that join
    // exists nowhere in the source, where the two are separate fields.
    if (noteBody(c.note).length <= MIN_NOTE) {
      missed.push(`${c.quote.slice(0, 40)} (note too short)`)
      continue
    }
    let placed = false
    for (const section of data.sections) {
      // Exactly what the viewer sees: tags stripped, nothing else changed.
      const plain = printed(section).replace(/<[^>]*>/g, '')
      const { folded, map } = fold(plain)
      const at = folded.indexOf(needle)
      if (at === -1) continue
      const from = map[at]
      const to = map[at + needle.length - 1] + 1
      const verbatim = plain.slice(from, to)

      // One annotation per span per overlay. The same quotation reached from
      // the guide and from the key-quotes page is one highlight, not two.
      const key = `${section.id}|${c.type}|${verbatim}`
      if (seen.has(key)) {
        placed = true
        break
      }
      // A sixth refusal, for a note from a source that quotes another printing:
      // the note in our text's words, or not at all (see OTHER_PRINTINGS).
      // Nor may it name a punctuation mark the highlighted lines do not print
      // (see PUNCTUATION_BY_NAME). Every other note is as its author wrote it.
      let note = c.note
      if (c.from && otherPrintings.includes(c.from)) {
        const ours = inOurWords(c.note, plainSections)
        // The whole lines the highlight touches: a note's mark may stand just
        // outside the quoted words, at the end of the line.
        const lineEnd = plain.indexOf('\n', to)
        const lines = plain.slice(
          plain.lastIndexOf('\n', from - 1) + 1,
          lineEnd === -1 ? plain.length : lineEnd,
        )
        const mark = ours ? punctuationNotPrinted(ours.note, lines) : null
        const why = !ours
          ? 'its note quotes words our text does not print'
          : mark
            ? `its note names punctuation ("${mark}") the lines beside it do not print`
            : noteBody(ours.note).length <= MIN_NOTE
              ? 'note too short'
              : null
        if (why) {
          missed.push(`${c.quote.slice(0, 40)} (${why})`)
          refused++
          placed = true
          break
        }
        note = ours.note
        if (ours.changed) reworded++
      }
      seen.add(key)
      ;(perSection[section.id] ??= []).push({ type: c.type, text: verbatim, note })
      byType[c.type] = (byType[c.type] ?? 0) + 1
      placed = true
      found++
      break
    }
    if (!placed) missed.push(c.quote.slice(0, 50))
  }

  if (found > 0) result[slug] = perSection
  totalFound += found
  report.push({ slug, found, total: candidates.length, missed, byType })
  if (otherPrintings.length) {
    // Said every run, so that a source whose notes stop being put right, or
    // start being refused, shows up here rather than nowhere.
    printingReport.push(
      `  ${slug}: ${reworded} note(s) put into our text's words, ${refused} refused (${otherPrintings.join(', ')})`,
    )
  }
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
// The authored analysis, located in the text we publish, so the reader can
// highlight the line and show the note somebody already wrote about it.
//
// NOTHING HERE IS WRITTEN BY THE GENERATOR. Every \`note\` is a sentence a person
// wrote, in a study guide, one of its pages or a course; every \`text\` is cut
// verbatim out of our own edition. A quotation that cannot be located is absent
// rather than approximated. Where a course says it quotes another printing of
// the text, a quotation in its note that our edition words otherwise is
// replaced by our edition's words, cut from the text, so that a note beside
// our text quotes our text (OTHER_PRINTINGS in the script), and a note of its
// naming punctuation our edition does not print there is left out.
//
// Re-run the script after changing a guide or re-fetching a text.

export interface GeneratedAnnotation {
  /** Which overlay this belongs to. */
  type: 'quote' | 'theme' | 'language' | 'character' | 'context'
  /** The exact span as it appears in the published text. */
  text: string
  /** The authored commentary. */
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
const totals = {}
for (const r of report) {
  if (r.noGuide || r.ownNotes) continue
  const types = Object.entries(r.byType)
    .sort()
    .map(([t, n]) => `${t}:${n}`)
    .join(' ')
  console.log(`  ${r.slug.padEnd(26)} ${String(r.found).padStart(3)}/${r.total}   ${types}`)
  // The misses, named. A generator that reports only what it found is a
  // generator nobody can tell has quietly stopped finding things, which is how
  // a whole translated guide contributed zero without anyone noticing.
  if (process.env.SHOW_MISSES) {
    for (const m of r.missed) console.log(`        not located: ${m}`)
  }
  for (const [t, n] of Object.entries(r.byType)) totals[t] = (totals[t] ?? 0) + n
}

const ownNotes = report.filter((r) => r.ownNotes).map((r) => r.slug)
if (ownNotes.length) {
  console.log('')
  console.log(`${ownNotes.length} text(s) have a reader with its own notes, so none are generated:`)
  for (const s of ownNotes) console.log(`    ${s}`)
}

const noGuide = report.filter((r) => r.noGuide).map((r) => r.slug)
if (noGuide.length) {
  console.log('')
  console.log(`${noGuide.length} text(s) have NO authored guide, so they get no annotations:`)
  for (const s of noGuide) console.log(`    ${s}`)
}

if (printingReport.length) {
  console.log('')
  console.log(
    'Sources that quote another printing, their notes held to our text (OTHER_PRINTINGS):',
  )
  for (const line of printingReport) console.log(line)
}

console.log('')
console.log(
  `annotations: ${totalFound} of ${totalCandidates} authored candidates located across ${Object.keys(result).length} texts`,
)
console.log(
  `by overlay: ${Object.entries(totals)
    .sort()
    .map(([t, n]) => `${t} ${n}`)
    .join(', ')}`,
)
console.log(`written to ${resolve(OUT).replace(ROOT, '')}`)
