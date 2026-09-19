#!/usr/bin/env node
/**
 * Fetch a public-domain prose work and write it as a data module.
 *
 * WHY THIS IS SEPARATE FROM THE PLAY FETCHER, AND CONFIGURED PER BOOK. Plays in
 * these editions share one shape: ACT, then SCENE, then dialogue. Prose does
 * not. Of the works checked on 19 September 2026:
 *
 *   A Christmas Carol      STAVE I:  MARLEY'S GHOST
 *   Silas Marner           CHAPTER I.
 *   The Sign of the Four   Chapter I
 *   Jekyll and Hyde        bare capitalised titles, no chapter marker at all
 *   War of the Worlds,     numeral on one line, title on the next; and the
 *   The Scarlet Letter     numbering restarts at Book Two in the first
 *
 * A generic prose parser that guessed at this would fold chapters together
 * silently, which is exactly what the play fetcher did to Much Ado before its
 * contents cross-check was added. So every book carries its own heading pattern
 * and its own expected section count, both read off the edition first, and the
 * script refuses to write when the parse disagrees.
 *
 * WORKS NOT YET HERE, and why: Jane Eyre, Great Expectations and Pride and
 * Prejudice. All three are 120,000 to 185,000 words and would ship as a single
 * client bundle, which wants a per-chapter route before it is reasonable.
 * Listing them here rather than leaving them unmentioned.
 *
 * Jekyll and Hyde, The War of the Worlds and The Scarlet Letter were in that
 * list until their editions were read. Each needed a heading rule none of the
 * others uses, which is the whole argument for configuring per book.
 *
 * The text is copied, never reproduced from memory, for the same reason as the
 * plays: a model retyping Dickens would drop a clause and nobody would catch it
 * before a student revised from it.
 *
 *   node scripts/fetch-public-domain-prose.mjs [slug]
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const OUT_DIR = join(ROOT, 'src/data/full-texts')

/**
 * One entry per book, with the heading rule read off that edition.
 *
 * `title` is the edition's own Title line and is asserted on fetch, so a
 * renumbered id fails loudly. `displayTitle` is what we show, which is not
 * always the same: Gutenberg prints "The Sign of the Four" and the
 * specifications print "The Sign of Four".
 *
 * `expect` is the section count, counted in the body before this was written.
 */
const BOOKS = [
  {
    slug: 'a-christmas-carol',
    id: 46,
    title: 'A Christmas Carol in Prose; Being a Ghost Story of Christmas',
    displayTitle: 'A Christmas Carol',
    author: 'Charles Dickens',
    type: 'novella',
    heading: /^STAVE\s+([IVXLC]+):\s*(.*)$/,
    label: (n) => `Stave ${n}`,
    expect: 5,
  },
  {
    slug: 'silas-marner',
    id: 550,
    title: 'Silas Marner',
    displayTitle: 'Silas Marner',
    author: 'George Eliot',
    type: 'novel',
    // 21 chapters and a Conclusion, which is a section of the book and is kept.
    heading: /^(?:CHAPTER\s+([IVXLC]+)\.?|(CONCLUSION))\s*(.*)$/,
    label: (n) => (n === 'CONCLUSION' ? 'Conclusion' : `Chapter ${n}`),
    expect: 22,
  },
  {
    slug: 'jekyll-and-hyde',
    id: 43,
    title: 'The strange case of Dr. Jekyll and Mr. Hyde',
    displayTitle: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    type: 'novella',
    // This edition numbers NOTHING - it prints the chapter titles alone. See
    // parseSections for why they are named rather than pattern-matched.
    titles: [
      'STORY OF THE DOOR',
      'SEARCH FOR MR. HYDE',
      'DR. JEKYLL WAS QUITE AT EASE',
      'THE CAREW MURDER CASE',
      'INCIDENT OF THE LETTER',
      'INCIDENT OF DR. LANYON',
      'INCIDENT AT THE WINDOW',
      'THE LAST NIGHT',
      'DR. LANYON’S NARRATIVE',
      'HENRY JEKYLL’S FULL STATEMENT OF THE CASE',
    ],
    label: (n) => titleCase(n),
    expect: 10,
  },
  {
    slug: 'the-war-of-the-worlds',
    id: 36,
    title: 'The war of the worlds',
    displayTitle: 'The War of the Worlds',
    author: 'H. G. Wells',
    type: 'novel',
    numeralThenTitle: true,
    heading: /^([IVXLC]+)\.$/,
    part: /^BOOK (ONE|TWO)$/,
    label: (n, part) => (part ? `Book ${titleCase(part)}, Chapter ${n}` : `Chapter ${n}`),
    expect: 27,
  },
  {
    slug: 'the-scarlet-letter',
    id: 33,
    title: 'The Scarlet Letter',
    displayTitle: 'The Scarlet Letter',
    author: 'Nathaniel Hawthorne',
    type: 'novel',
    numeralThenTitle: true,
    heading: /^([IVXLC]+)\.$/,
    label: (n) => `Chapter ${n}`,
    expect: 24,
  },
  {
    slug: 'the-sign-of-four',
    id: 2097,
    title: 'The Sign of the Four',
    displayTitle: 'The Sign of Four',
    author: 'Arthur Conan Doyle',
    type: 'novel',
    heading: /^Chapter\s+([IVXLC]+)\s*(.*)$/,
    label: (n) => `Chapter ${n}`,
    expect: 12,
  },
]

const MIN_CHARS = 8000

function stripGutenberg(raw) {
  const start = raw.indexOf('*** START OF THE PROJECT GUTENBERG')
  const end = raw.indexOf('*** END OF THE PROJECT GUTENBERG')
  if (start === -1 || end === -1) throw new Error('no Gutenberg markers - edition changed shape')
  let body = raw.slice(raw.indexOf('\n', start) + 1, end)
  body = body.replace(/\n\s*\*{3,}[\s\S]*$/, '')
  if (/gutenberg/i.test(body.slice(-4000))) {
    body = body.replace(/\n[^\n]*gutenberg[^\n]*/gi, '\n')
  }
  return body
}

/**
 * Split on this book's own heading rule.
 *
 * THREE SHAPES, because these editions genuinely have three and a parser that
 * guessed between them would fold chapters silently:
 *
 *   `heading`     one line carrying the numeral and any title
 *                 (Silas Marner "CHAPTER I.", The Sign of the Four "Chapter I")
 *   `titles`      an explicit list, for a book that numbers nothing. Jekyll and
 *                 Hyde prints "STORY OF THE DOOR" and no chapter numbers at
 *                 all, and an all-caps rule also matches "HASTIE LANYON." - the
 *                 signature at the end of Lanyon's narrative - which would have
 *                 produced an eleventh chapter one line long. The ten headings
 *                 are named rather than pattern-matched.
 *   `numeralThenTitle`  the numeral on one line, the title on the next
 *                 (The War of the Worlds, The Scarlet Letter)
 *
 * `part` is optional and carries a division above the chapter. The War of the
 * Worlds restarts its numbering at Book Two, so without it a reader would be
 * offered two Chapter Is and the second ten chapters would carry the first
 * book's numbers.
 *
 * Anything before the FIRST heading is front matter - a contents list, a
 * preface, a transcriber's note - and is dropped rather than folded into
 * chapter one.
 */
function parseSections(body, book) {
  const lines = body.split('\n')
  const out = []
  let current = null
  let part = null

  const titleSet = book.titles ? new Set(book.titles) : null

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()

    if (book.part) {
      const partMatch = book.part.exec(trimmed)
      if (partMatch) {
        part = partMatch[1]
        continue
      }
    }

    let numeral = null
    let subtitle = ''
    let consumed = 0

    if (titleSet) {
      if (titleSet.has(trimmed)) numeral = trimmed
    } else if (book.numeralThenTitle) {
      const m = book.heading.exec(trimmed)
      // The title must be on the next non-blank line and must be capitalised.
      // Requiring it means a stray numeral in the prose cannot open a chapter.
      if (m) {
        let j = i + 1
        while (j < lines.length && !lines[j].trim()) j++
        const next = (lines[j] ?? '').trim()
        if (next && next === next.toUpperCase() && /[A-Z]/.test(next)) {
          numeral = m[1]
          subtitle = next
          consumed = j - i
        }
      }
    } else {
      const m = book.heading.exec(trimmed)
      if (m) {
        numeral = m[1] ?? m[2]
        const rest = (m[3] ?? m[2] ?? '').trim()
        subtitle = numeral === rest ? '' : rest
      }
    }

    if (numeral !== null) {
      if (current) out.push(current)
      current = { numeral, subtitle, part, lines: [] }
      i += consumed
      continue
    }
    if (current) current.lines.push(lines[i])
  }
  if (current) out.push(current)
  return out
}

/** Plain text to the HTML the viewer renders. Prose is paragraphs. */
function toHtml(sectionLines) {
  return sectionLines
    .join('\n')
    .replace(/^\n+/, '')
    .trimEnd()
    .split(/\n\s*\n/)
    .map((block) => {
      const text = block.replace(/\s+$/gm, '').trim()
      if (!text) return ''
      const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      return `<p>${escaped.replace(/\n\s*/g, ' ')}</p>`
    })
    .filter(Boolean)
    .join('\n\n')
}

async function build(book) {
  const url = `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.txt`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const raw = await res.text()

  const titleLine = /^Title:\s*(.+)$/m.exec(raw)
  if (!titleLine) throw new Error('no Title line')
  if (titleLine[1].trim() !== book.title) {
    throw new Error(`expected "${book.title}", got "${titleLine[1].trim()}" - id now points elsewhere`)
  }
  if (/PROOFING METHODS AND TOOLS WERE NOT WELL DEVELOPED/.test(raw)) {
    throw new Error(`Gutenberg marks id ${book.id} as poorly proofed`)
  }

  const all = parseSections(stripGutenberg(raw), book)

  // DROP THE TABLE OF CONTENTS, by substance rather than by position.
  //
  // Silas Marner and The Sign of the Four both list every chapter heading in a
  // contents block before the body, indented by a space that `trim()` removes,
  // so each listing matched the heading rule and produced an empty section.
  // Both parsed at exactly double and the count check refused to write them -
  // which is the guard working, and the reason it is not a warning.
  //
  // Filtering on content length is the honest rule: a chapter is a chapter
  // because it has text in it. It also cannot mask the opposite failure, where
  // chapters are folded TOGETHER, because that yields too few sections and the
  // count check below still catches it.
  const FRONT_MATTER = 400
  const parsed = all.filter((s) => s.lines.join('').trim().length >= FRONT_MATTER)
  if (parsed.length !== book.expect) {
    throw new Error(
      `parsed ${parsed.length} sections (${all.length} before front matter), expected ${book.expect} - refusing to write`,
    )
  }

  const sections = parsed.map((s, i) => ({
    id: `section-${i + 1}`,
    // The War of the Worlds prints its chapter titles with a closing full
    // stop - "The Eve of the War." - which reads as a typo in a sidebar.
    title:
      book.label(s.numeral, s.part) +
      (s.subtitle ? `: ${titleCase(s.subtitle).replace(/\.$/, '')}` : ''),
    content: toHtml(s.lines),
  }))

  const totalChars = sections.reduce((n, s) => n + s.content.length, 0)
  if (totalChars < MIN_CHARS) throw new Error(`only ${totalChars} characters - refusing to write`)
  const thin = sections.filter((s) => s.content.trim().length < 200)
  if (thin.length > 0) throw new Error(`${thin.length} near-empty sections - parse is wrong`)

  const varName = book.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + 'Text'
  const file = `// AUTO-GENERATED by scripts/fetch-public-domain-prose.mjs - do not edit by hand.
//
// ${book.displayTitle}, by ${book.author}. Out of UK copyright.
//
// The text is a byte copy of a published edition, not typed and not reproduced
// from memory, so it cannot contain invented sentences. Source edition: Project
// Gutenberg #${book.id}, whose branding and licence text are stripped per their
// terms; the underlying work is out of copyright.
//
// Re-run the generator to refresh. It refuses to write if the edition's own
// Title line stops matching, if Gutenberg has flagged the edition as poorly
// proofed, or if the section count is not exactly ${book.expect}.

import type { TextData } from '@/components/study/InteractiveTextViewer'

export const ${varName}: TextData = {
  title: ${JSON.stringify(book.displayTitle)},
  author: ${JSON.stringify(book.author)},
  type: ${JSON.stringify(book.type)},
  sections: ${JSON.stringify(sections, null, 2).replace(/\n/g, '\n  ')},
}
`
  mkdirSync(OUT_DIR, { recursive: true })
  writeFileSync(join(OUT_DIR, `${book.slug}.ts`), file, 'utf8')
  return { slug: book.slug, sections: sections.length, chars: totalChars }
}

/**
 * "MARLEY'S GHOST" reads badly in a sidebar; "Marley's Ghost" does not.
 *
 * Small words stay lower case unless they open the title, so the staves read
 * "The First of the Three Spirits" rather than "The First Of The Three Spirits".
 */
const SMALL_WORDS = new Set(['of', 'the', 'a', 'an', 'and', 'or', 'in', 'on', 'to', 'at', 'for', 'with', 'from'])

function titleCase(s) {
  if (s !== s.toUpperCase()) return s
  return s
    .toLowerCase()
    .split(/(\s+)/)
    .map((word, i) => {
      if (!word.trim()) return word
      if (i > 0 && SMALL_WORDS.has(word)) return word
      return word.replace(/^([(‘“])?([a-z])/, (_m, pre, c) => (pre ?? '') + c.toUpperCase())
    })
    .join('')
    .replace(/’S\b/g, '’s')
}

const only = process.argv[2]
const wanted = only ? BOOKS.filter((b) => b.slug === only) : BOOKS
if (wanted.length === 0) {
  console.error(`No book with slug "${only}". Known: ${BOOKS.map((b) => b.slug).join(', ')}`)
  process.exitCode = 1
} else {
  let failed = 0
  for (const book of wanted) {
    try {
      const r = await build(book)
      console.log(`  ok   ${r.slug.padEnd(24)} ${String(r.sections).padStart(2)} sections, ${r.chars} chars`)
    } catch (err) {
      failed++
      console.error(`  FAIL ${book.slug.padEnd(24)} ${err.message}`)
    }
  }
  console.log(failed === 0 ? `\n${wanted.length} works written.` : `\n${failed} failed.`)
  if (failed > 0) process.exitCode = 1
}
