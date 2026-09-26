import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { frankensteinText } from '@/data/full-texts/frankenstein'
import { TEXT_ANNOTATIONS } from '@/data/text-annotations.generated'
import { CHARACTERS, NOTES, THEMES } from '@/app/revision/texts/frankenstein/read/notes'
import { forTheReader } from '@/app/revision/texts/frankenstein/read/for-the-reader'

/**
 * The Frankenstein reader prints the held novel, and its notes land on it.
 *
 * WHAT BROKE (found 26 September 2026). The reader was a hand-typed eighth of
 * the novel that called itself "the 1818 first edition"; a third of its
 * paragraphs matched no edition. It now prints src/data/full-texts/
 * frankenstein.ts, the 1831 text, and its 52 notes were moved onto that text
 * (see the reader's notes.ts). Seventeen of them had not matched the edition,
 * and the viewer shows nothing for a note it cannot find, so nothing looked
 * wrong.
 *
 * So each note must be found in its own section, once, character for
 * character; no note may sit inside or across another, because the viewer
 * cannot draw a highlight inside another and silently drops the inner one;
 * and no generated note may be merged in, because one could cross an authored
 * note and hide it.
 */

/** A section as the viewer searches it: tags deleted, entities decoded. */
const plain = (html: string) =>
  html
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
// What the viewer is given, not the held file: the reader sets the edition's
// underscores as italics first (./read/for-the-reader.ts).
const PRINTED = forTheReader(frankensteinText)
const SECTION_TEXT = new Map(PRINTED.sections.map((s) => [s.title, plain(s.content)]))
const ALL_NOTES = Object.values(NOTES).flat()

describe('the reader is the held edition', () => {
  const page = readFileSync(
    join(process.cwd(), 'src/app/revision/texts/frankenstein/read/page.tsx'),
    'utf8',
  )

  it('imports the held text and types none of its own', () => {
    expect(page).toContain("from '@/data/full-texts/frankenstein'")
    // The old page carried the novel in template literals under `content:`.
    expect(page).not.toMatch(/\bcontent:\s*`/)
  })

  it("prints the edition's italics as italics, not as underscores", () => {
    // Found reviewing the rebuilt reader: forty-six spans printed with
    // Gutenberg's underscores round them, "_To Mrs. Saville, England._" under
    // every letter among them. The page must pass the viewer this, and it must
    // leave no underscore behind.
    expect(page).toContain('forTheReader(frankensteinText)')
    const held = frankensteinText.sections.map((s) => s.content).join('\n')
    const printed = PRINTED.sections.map((s) => s.content).join('\n')
    expect(held.match(/_([^_<>]+)_/g)).toHaveLength(46)
    expect(printed).not.toContain('_')
    expect(printed.match(/<em>/g)).toHaveLength(46)
    expect(printed).toContain('<em>To Mrs. Saville, England.</em>')
    // Only markup was added: the words are the held text's.
    expect(plain(printed).replace(/_/g, '')).toBe(plain(held).replace(/_/g, ''))
  })

  it('and keeps generated notes out, so none can hide an authored one', () => {
    // scripts/generate-text-annotations.mjs generates for a read page only if
    // its source contains the FullTextReader element, and it runs at every
    // build. Frankenstein must be absent from what it wrote.
    expect(page).not.toContain('<FullTextReader')
    expect(TEXT_ANNOTATIONS.frankenstein).toBeUndefined()
  })

  it('names only sections that exist', () => {
    const unknown = Object.keys(NOTES).filter((t) => !SECTION_TEXT.has(t))
    expect(unknown).toEqual([])
  })

  it('has every note the old reader had', () => {
    // An emptied NOTES would pass every check below.
    expect(ALL_NOTES.length).toBeGreaterThanOrEqual(52)
    for (const type of ['quote', 'theme', 'language', 'character', 'context'])
      expect(
        ALL_NOTES.some((a) => a.type === type),
        type,
      ).toBe(true)
  })

  it('offers the character, theme and context panels', () => {
    expect(CHARACTERS.length).toBeGreaterThanOrEqual(7)
    expect(THEMES.length).toBeGreaterThanOrEqual(6)
  })
})

describe('every note is on its line', () => {
  it('occurs verbatim, and exactly once, in its own section', () => {
    // Once, because the viewer highlights every match, ignoring case: the old
    // note anchored on "Devil" would have lit up every "devil" in Chapter X.
    const wrong: string[] = []
    for (const [title, notes] of Object.entries(NOTES)) {
      const text = SECTION_TEXT.get(title) ?? ''
      for (const a of notes) {
        const times = text.toLowerCase().split(a.text.toLowerCase()).length - 1
        if (!text.includes(a.text) || times !== 1)
          wrong.push(`${title}: found ${times} times: ${a.text.slice(0, 50)}`)
      }
    }
    expect(wrong).toEqual([])
  })

  it('and none is hidden inside or across another', () => {
    // The viewer's own rule: spans sorted by start, longest first, and a span
    // that begins before the last one ended is dropped. Identical spans are
    // merged into one tooltip first, so they are allowed.
    const hidden: string[] = []
    for (const [title, notes] of Object.entries(NOTES)) {
      const text = (SECTION_TEXT.get(title) ?? '').toLowerCase()
      const spans = new Map<string, { s: number; e: number; label: string }>()
      for (const a of notes) {
        const needle = a.text.toLowerCase()
        for (let at = text.indexOf(needle); at !== -1; at = text.indexOf(needle, at + 1))
          spans.set(`${at}-${at + needle.length}`, {
            s: at,
            e: at + needle.length,
            label: a.text.slice(0, 40),
          })
      }
      let last = -1
      for (const sp of [...spans.values()].sort((x, y) => x.s - y.s || y.e - x.e)) {
        if (sp.s < last) hidden.push(`${title}: ${sp.label}`)
        else last = sp.e
      }
    }
    expect(hidden).toEqual([])
  })

  it('never gives one span two notes of the same kind', () => {
    // The tooltip keys its entries by kind, so two would collide.
    const dupes: string[] = []
    for (const [title, notes] of Object.entries(NOTES)) {
      const seen = new Set<string>()
      for (const a of notes) {
        const k = `${a.type}|${a.text}`
        if (seen.has(k)) dupes.push(`${title}: ${a.type} ${a.text.slice(0, 40)}`)
        seen.add(k)
      }
    }
    expect(dupes).toEqual([])
  })

  it('stays inside one paragraph', () => {
    // A span across a paragraph break would have to be drawn across two
    // elements. None of the old notes needed one, and a new one that does is
    // more likely a mistake than a choice.
    const across = ALL_NOTES.filter((a) => a.text.includes('\n')).map((a) => a.text.slice(0, 40))
    expect(across).toEqual([])
  })
})
