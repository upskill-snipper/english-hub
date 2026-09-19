#!/usr/bin/env node
/**
 * Fetch a public-domain poem out of the collection it was published in.
 *
 * WHY POEMS NEEDED A THIRD FETCHER. A poem is not a chapter. It sits inside a
 * collected volume with dozens of others, it has no chapter marker, and its
 * HEADING IS OFTEN NOT ITS NAME. Christina Rossetti's "Remember" is printed in
 * her collected Poems as "SONNET." - so extracting by title would have taken
 * the wrong poem or none at all, and extracting by heading would have been
 * silently wrong on the poem a student is revising.
 *
 * SO EACH POEM IS ANCHORED ON ITS FIRST AND LAST LINE, both read off the source
 * before being written here, and the line count between them is asserted. That
 * is fully deterministic: there is no heuristic to be wrong about. A blank-line
 * heuristic was tried first and ran Sonnet 116 on for ninety lines into the
 * sonnets that follow it.
 *
 * EDITIONS THAT DO NOT WORK, and this is why each is verified rather than
 * assumed. Project Gutenberg 1934, Songs of Innocence and of Experience, is an
 * ILLUSTRATED edition: its poems are page images, so The Tyger cannot be taken
 * from it at all. Gutenberg 23684 is Keats's 1820 volume, which does not
 * contain La Belle Dame sans Merci. Neither is here, and neither is silently
 * missing - see NOT YET SOURCED below.
 *
 * NOT YET SOURCED. La Belle Dame sans Merci (Keats) and Piano (D H Lawrence)
 * are UK public domain and still need an edition that has been checked. Do not go gentle into that good night
 * cannot come from Project Gutenberg at all: Dylan Thomas died in 1953, so the
 * poem is public domain in the UK since 1 January 2024 but remains in copyright
 * in the United States, where Gutenberg publishes.
 *
 *   node scripts/fetch-public-domain-poem.mjs [slug]
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const OUT_DIR = join(ROOT, 'src/data/full-texts')

/**
 * One entry per poem.
 *
 * `first` and `last` are the poem's own opening and closing lines, copied from
 * the source. `lines` is the count between them INCLUSIVE, blank lines between
 * stanzas included, because that is what the extraction returns and a count
 * that ignored them would not detect a dropped stanza.
 */
const POEMS = [
  {
    slug: 'remember',
    id: 19188,
    collection: 'Poems',
    title: 'Remember',
    author: 'Christina Rossetti',
    year: '1862',
    // Printed as "SONNET." in this edition, which is the whole reason for
    // anchoring on lines rather than on a heading.
    first: 'Remember me when I am gone away,',
    last: 'Than that you should remember and be sad.',
    lines: 14,
  },
  {
    slug: 'if',
    id: 556,
    collection: 'Rewards and Fairies',
    title: 'If—',
    author: 'Rudyard Kipling',
    year: '1910',
    first: 'If you can keep your head when all about you',
    last: 'And--which is more--you’ll be a Man, my son!',
    lines: 35,
  },
  {
    slug: 'disabled',
    id: 1034,
    collection: 'Poems',
    title: 'Disabled',
    author: 'Wilfred Owen',
    year: '1917',
    first: 'He sat in a wheeled chair, waiting for dark,',
    last: "And put him into bed?  Why don't they come?",
    lines: 49,
  },
  {
    slug: 'the-tyger',
    id: 574,
    collection: 'Poems of William Blake',
    title: 'The Tyger',
    author: 'William Blake',
    year: '1794',
    // NOT from Gutenberg 1934, Songs of Innocence and of Experience: that is an
    // ILLUSTRATED edition whose poems are page images, so the poem cannot be
    // taken from it at all.
    //
    // EDITIONS DIFFER ON THE OPENING LINE, and it is worth knowing which one we
    // publish. This one prints "Tyger, tyger, burning bright" with a comma and
    // lower case; others print Blake's plate spelling "Tyger Tyger, burning
    // bright". Both are real published readings, and the file names its edition
    // so a teacher comparing against the anthology can see which is which.
    first: 'Tyger, tyger, burning bright',
    last: 'Dare frame thy fearful symmetry?',
    lines: 29,
  },
  {
    slug: 'my-last-duchess',
    id: 28041,
    collection: 'Selections from the Poems and Plays of Robert Browning',
    title: 'My Last Duchess',
    author: 'Robert Browning',
    year: '1842',
    // NOT from Gutenberg 16376, Browning's Shorter Poems: that edition carries
    // editorial gloss markers INSIDE the verse - "Which Claus of Innsbruck deg.
    // cast in bronze for me!" - which are an editor's footnote marks and not
    // Browning's line. This edition is clean apart from marginal line numbers,
    // which stripMarginNumbers removes.
    stripMarginNumbers: true,
    first: "That's my last Duchess painted on the wall,",
    last: 'Which Claus of Innsbruck cast in bronze for me!',
    lines: 56,
  },
  {
    slug: 'la-belle-dame-sans-merci',
    id: 36356,
    collection: 'Life of John Keats: His Life and Poetry, His Friends, Critics and After-Fame',
    title: 'La Belle Dame sans Merci',
    author: 'John Keats',
    year: '1819',
    // WHY THE SOURCE IS A BIOGRAPHY, which is unusual and worth stating rather
    // than hiding. Project Gutenberg has four Keats editions and NONE of them
    // contains this poem: 23684 is the 1820 volume, 8209 is Poems 1817, 2490 is
    // Lamia and 24280 is Endymion. La Belle Dame sans Merci was published in
    // The Indicator in 1820 and appears in none of them. Each was fetched and
    // searched before this one was chosen.
    //
    // Sidney Colvin's 1917 life of Keats prints it complete, and prints it for
    // a reason he states on the page: "in some of the most accessible and
    // authoritative recent editions it is unfortunately given with changes
    // which rob it of half its magic". So this is the 1819 text with
    // "knight-at-arms", not the 1820 Indicator revision with "wretched wight".
    // Both are real, anthologies use the 1819, and the file names its edition so
    // a teacher can see which is which.
    first: 'O what can ail thee, knight-at-arms',
    // The first stanza ends "And no birds sing!" with an exclamation mark and
    // the twelfth ends "And no birds sing." with a full stop. The anchor is the
    // full stop, so the extraction cannot stop after four lines.
    last: 'And no birds sing.',
    lines: 59,
  },
  {
    slug: 'piano',
    id: 22726,
    collection: 'New Poems',
    title: 'Piano',
    author: 'D. H. Lawrence',
    year: '1918',
    // This edition hard-wraps long lines with an indented continuation, so
    // without unwrapping it yields eighteen lines instead of twelve and the
    // wrong lineation. See unwrapContinuations in build().
    unwrapContinuations: true,
    first: 'Softly, in the dusk, a woman is singing to me;',
    last: 'Down in the flood of remembrance, I weep like a child for the past.',
    lines: 14,
  },
  {
    slug: 'sonnet-116',
    id: 1041,
    collection: "Shakespeare's Sonnets",
    title: 'Sonnet 116: Let me not to the marriage of true minds',
    author: 'William Shakespeare',
    year: '1609',
    first: 'Let me not to the marriage of true minds',
    last: 'I never writ, nor no man ever lov’d.',
    lines: 14,
  },
]

function stripGutenberg(raw) {
  const start = raw.indexOf('*** START OF THE PROJECT GUTENBERG')
  const end = raw.indexOf('*** END OF THE PROJECT GUTENBERG')
  if (start === -1 || end === -1) throw new Error('no Gutenberg markers - edition changed shape')
  return raw.slice(raw.indexOf('\n', start) + 1, end)
}

async function build(poem) {
  const url = `https://www.gutenberg.org/cache/epub/${poem.id}/pg${poem.id}.txt`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const raw = await res.text()
  if (/PROOFING METHODS AND TOOLS WERE NOT WELL DEVELOPED/.test(raw)) {
    throw new Error(`Gutenberg marks id ${poem.id} as poorly proofed`)
  }

  let lines = stripGutenberg(raw)
    .split('\n')
    .map((l) => l.replace(/\s+$/, ''))

  if (poem.unwrapContinuations) {
    // SOME EDITIONS HARD-WRAP A LONG LINE and mark the continuation with a deep
    // indent. Lawrence's New Poems does this throughout:
    //
    //   A child sitting under the piano, in the boom of the
    //       tingling strings
    //
    // That is ONE line of verse, not two. Piano is three quatrains; taken
    // literally this edition yields eighteen lines and the wrong lineation,
    // which for a poem is not a cosmetic difference - enjambment and line
    // endings are what a student is asked to analyse.
    //
    // OPT-IN PER POEM, and it has to be. In an edition that indents for rhythm
    // rather than for wrapping - La Belle Dame sans Merci indents its second
    // and fourth lines - this would fuse real lines together. The line count
    // assertion below is what proves the choice was right for a given edition.
    const joined = []
    for (const line of lines) {
      const isContinuation = /^\s{3,}\S/.test(line)
      const previous = joined[joined.length - 1]
      if (isContinuation && previous !== undefined && previous.trim().length > 0) {
        joined[joined.length - 1] = previous.replace(/\s+$/, '') + ' ' + line.trim()
      } else {
        joined.push(line)
      }
    }
    lines = joined
  }

  if (poem.stripMarginNumbers) {
    // Some editions print the line number in the right margin, separated from
    // the verse by a wide run of spaces. Six or more spaces then digits at the
    // end of a line is a margin number, not part of the poem; a line of verse
    // does not end that way.
    lines = lines.map((l) => l.replace(/\s{6,}\d+$/, ''))
  }

  const start = lines.findIndex((l) => l.trim() === poem.first)
  if (start === -1) throw new Error(`opening line not found: "${poem.first}"`)

  const endOffset = lines.slice(start).findIndex((l) => l.trim() === poem.last)
  if (endOffset === -1) throw new Error(`closing line not found after the opening: "${poem.last}"`)

  const body = lines.slice(start, start + endOffset + 1)
  if (body.length !== poem.lines) {
    throw new Error(`extracted ${body.length} lines, expected ${poem.lines} - refusing to write`)
  }

  // A poem is one block. Blank lines separate stanzas and are preserved as
  // paragraph breaks; every other line break is real and must survive, so the
  // stanzas are joined with <br /> rather than collapsed into flowing prose.
  const stanzas = body
    .join('\n')
    .split(/\n\s*\n/)
    .map((s) => s.split('\n').filter((l) => l.trim().length > 0))
    .filter((s) => s.length > 0)

  const content = stanzas
    .map(
      (stanza) =>
        `<p>${stanza
          .map((l) => l.trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'))
          .join('<br />\n')}</p>`,
    )
    .join('\n\n')

  // Digits after a hyphen too: `sonnet-116` was becoming `sonnet-116Text`,
  // which is not an identifier and broke the module it was written into.
  const varName = poem.slug.replace(/-(.)/g, (_, c) => c.toUpperCase()) + 'Text'
  const file = `// AUTO-GENERATED by scripts/fetch-public-domain-poem.mjs - do not edit by hand.
//
// ${poem.title}, by ${poem.author} (${poem.year}). Out of UK copyright.
//
// The text is a byte copy of a published edition, not typed and not reproduced
// from memory. Taken from ${poem.collection}, Project Gutenberg #${poem.id}, by
// anchoring on the poem's own first and last line - this edition does not
// always head a poem with its name. Gutenberg branding and licence text are
// stripped per their terms; the underlying work is out of copyright.
//
// Re-run the generator to refresh. It refuses to write if either anchor line
// has moved or if the extraction is not exactly ${poem.lines} lines.

import type { TextData } from '@/components/study/InteractiveTextViewer'

export const ${varName}: TextData = {
  title: ${JSON.stringify(poem.title)},
  author: ${JSON.stringify(poem.author)},
  // 'poem', not 'novella'. The viewer prints this word under the title and
  // uses it to choose between "scenes", "chapters" and "stanzas", so six poems
  // shipped telling a student that The Tyger is a novella with one chapter.
  type: 'poem',
  sections: [
    {
      id: 'poem',
      title: ${JSON.stringify(poem.title)},
      content: ${JSON.stringify(content)},
    },
  ],
}
`
  mkdirSync(OUT_DIR, { recursive: true })
  writeFileSync(join(OUT_DIR, `${poem.slug}.ts`), file, 'utf8')
  return { slug: poem.slug, lines: body.length, stanzas: stanzas.length }
}

const only = process.argv[2]
const wanted = only ? POEMS.filter((p) => p.slug === only) : POEMS
if (wanted.length === 0) {
  console.error(`No poem with slug "${only}". Known: ${POEMS.map((p) => p.slug).join(', ')}`)
  process.exitCode = 1
} else {
  let failed = 0
  for (const poem of wanted) {
    try {
      const r = await build(poem)
      console.log(`  ok   ${r.slug.padEnd(18)} ${String(r.lines).padStart(2)} lines, ${r.stanzas} stanzas`)
    } catch (err) {
      failed++
      console.error(`  FAIL ${poem.slug.padEnd(18)} ${err.message}`)
    }
  }
  console.log(failed === 0 ? `\n${wanted.length} poems written.` : `\n${failed} failed.`)
  if (failed > 0) process.exitCode = 1
}
