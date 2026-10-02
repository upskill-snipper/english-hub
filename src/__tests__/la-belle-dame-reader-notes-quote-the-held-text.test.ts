import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { laBelleDameSansMerciText } from '@/data/full-texts/la-belle-dame-sans-merci'
import { TEXT_ANNOTATIONS } from '@/data/text-annotations.generated'
import { setSectionForTheViewer } from '@/components/study/set-play-for-the-viewer'

/**
 * The La Belle Dame reader's notes quote the text the reader prints.
 *
 * WHAT BROKE (found 2 October 2026). The reader prints Colvin's text of the
 * poem, the one held in src/data/full-texts. Its notes are generated from the
 * Edexcel IGCSE course, which quotes the anthology's text, as its version note
 * says it does. One of the course's sentences, counting the syllables of the
 * first stanza, was attached to the poem's first two lines and quoted the
 * third as "The sedge has wither'd from the lake", beside Colvin's line "The
 * sedge is withered from the lake,". Every highlight was checked against the
 * text; the quotations inside a note never were. The generator now puts a
 * note from such a course into our text's words, or refuses it
 * (OTHER_PRINTINGS in scripts/generate-text-annotations.mjs).
 *
 * Words are compared as the quotation scanner compares them: lower case, split
 * at anything that is not a letter or digit, so punctuation and the style of
 * quotation mark do not count, and a word changed, added, dropped or spelt
 * otherwise does.
 */

const ROOT = process.cwd()
const words = (s: string) =>
  s
    .normalize('NFC')
    .toLowerCase()
    .match(/[\p{L}\p{N}]+/gu) ?? []

/** The poem as the reader prints it, tags gone. */
const PRINTED = laBelleDameSansMerciText.sections
  .map((s) =>
    setSectionForTheViewer(laBelleDameSansMerciText.type, s.content).replace(/<[^>]*>/g, ''),
  )
  .join('\n')
const POEM = ` ${words(PRINTED).join(' ')} `
const LINES = PRINTED.split('\n')
  .map((l) => l.trim())
  .filter(Boolean)

type Ann = { type: string; text: string; note: string }
const NOTES = Object.values(TEXT_ANNOTATIONS['la-belle-dame-sans-merci'] ?? {}).flat() as Ann[]

/** A note's quotations: spans in double quotation marks, which is how the course quotes. */
const quotationsIn = (note: string) => [...note.matchAll(/["“]([^"“”]+)["”]/g)].map((m) => m[1])

describe("the reader's notes on La Belle Dame quote the held text", () => {
  it('there are notes to check', () => {
    // Were the course's notes no longer attached, everything below would pass
    // by checking nothing.
    expect(NOTES.length).toBeGreaterThanOrEqual(5)
    expect(NOTES.flatMap((a) => quotationsIn(a.note)).length).toBeGreaterThanOrEqual(5)
  })

  it('every quotation in every note is the held text, word for word', () => {
    const wrong: string[] = []
    for (const a of NOTES) {
      for (const q of quotationsIn(a.note)) {
        const w = words(q).join(' ')
        // Eight words at most in a failure: these are quotations of a poem.
        if (w && !POEM.includes(` ${w} `)) wrong.push(q.split(/\s+/).slice(0, 8).join(' '))
      }
    }
    expect(wrong).toEqual([])
  })

  it('and the syllable count of the first stanza is put right, not dropped', () => {
    // The note counts the four lines of the first stanza, so its third line
    // must be the third line the reader prints, cut from the held text here
    // rather than typed.
    const third = LINES[2].replace(/[,.;:!?]+$/, '')
    const compare = NOTES.filter((a) => a.note.startsWith('Compare:'))
    expect(compare.length).toBeGreaterThan(0)
    for (const a of compare) expect(a.note).toContain(`"${third}" (8 syllables)`)
  })

  it('no note analyses a punctuation mark the lines beside it do not print', () => {
    // WHAT BROKE (found 2 October 2026, reviewing the fix above). Every word a
    // note quoted was the held text's, so the check above passed, but one note
    // said "the dash before 'a faery's child' creates a moment of revelation"
    // beside Colvin's "Full beautiful, a faery's child", which has a comma
    // there; the dash is the anthology's. The generator now refuses such a
    // note (PUNCTUATION_BY_NAME); this holds the published file to the same
    // rule, with the marks the generator names. The lines are the whole lines
    // the highlight touches, since a mark may stand just past the quoted words.
    const MARKS: [RegExp, RegExp][] = [
      [/\bdash(?:es)?\b/i, /[—–]|--|\s-\s/],
      [/\bexclamation marks?\b/i, /!/],
      [/\bquestion marks?\b/i, /\?/],
      [/\bsemi-?colons?\b/i, /;/],
      [/(?<!semi-)\bcolons?\b/i, /:/],
      [/\bcommas?\b/i, /,/],
      [/\bellips(?:is|es)\b/i, /…|\.\.\./],
      [/\b(?:brackets?|parenthes[ie]s)\b/i, /[()[\]]/],
    ]
    const wrong: string[] = []
    for (const a of NOTES) {
      const at = PRINTED.indexOf(a.text)
      expect(at, `a highlight is not in the text: ${a.text.slice(0, 40)}`).toBeGreaterThan(-1)
      const end = PRINTED.indexOf('\n', at + a.text.length)
      const lines = PRINTED.slice(
        PRINTED.lastIndexOf('\n', at - 1) + 1,
        end === -1 ? PRINTED.length : end,
      )
      const prose = a.note.replace(/["“][^"“”]*["”]/g, ' ')
      for (const [name, mark] of MARKS) {
        const named = prose.match(name)
        if (named && !mark.test(lines)) wrong.push(`${named[0]}: ${a.text.slice(0, 30)}`)
      }
    }
    expect(wrong).toEqual([])
  })

  it("and the reader's page description counts the notes it has", () => {
    // The description said eight language notes when the dash note above was
    // left out and seven remained: a page asserting what it does not do.
    const layout = readFileSync(
      join(ROOT, 'src/app/revision/texts/la-belle-dame-sans-merci/read/layout.tsx'),
      'utf8',
    )
    const said = layout.match(/with (\w+) inline language notes and a context note/)
    expect(said, 'the description no longer states its counts').not.toBeNull()
    const NUMBER = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    expect(NUMBER.indexOf(said![1])).toBe(NOTES.filter((a) => a.type === 'language').length)
    expect(NOTES.filter((a) => a.type === 'context').length).toBe(1)
  })
})

describe('the generator holds a course that quotes another printing to our text', () => {
  const GEN = readFileSync(join(ROOT, 'scripts/generate-text-annotations.mjs'), 'utf8')
  const COURSE = readFileSync(join(ROOT, 'src/data/edexcel-igcse-lit-poetry-courses-2.ts'), 'utf8')

  it('declares the La Belle Dame course, which says it quotes the anthology', () => {
    expect(GEN).toContain("from: 'src/data/edexcel-igcse-lit-poetry-courses-2.ts'")
    expect(COURSE).toContain('Always quote from the anthology version')
  })

  it('and refuses a note it cannot put into our words, saying so', () => {
    expect(GEN).toContain('its note quotes words our text does not print')
    expect(GEN).toContain("note(s) put into our text's words")
  })

  it('and refuses one that names punctuation the lines beside it do not print', () => {
    expect(GEN).toContain('const PUNCTUATION_BY_NAME = [')
    expect(GEN).toContain('the lines beside it do not print')
  })
})
