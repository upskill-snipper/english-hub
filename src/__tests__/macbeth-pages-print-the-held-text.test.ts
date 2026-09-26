// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

import { macbethText } from '@/data/full-texts/macbeth'
import { quotationsOn, sourcesUnder } from './helpers/quotations'

/**
 * Every passage of three lines or more printed on a Macbeth page is the held
 * edition's text.
 *
 * WHY (26 September 2026). The Macbeth pages were written from the Folger
 * Shakespeare Library's digital text, which Folger licenses under CC BY-NC 3.0,
 * not for commercial use, and this site sells subscriptions. Shakespeare's
 * words are free and an editor's text is not, so the site now prints Project
 * Gutenberg #1533, held as src/data/full-texts/macbeth.ts. A short quotation
 * for criticism is fair dealing in any edition, but a passage is the edition
 * itself.
 *
 * The passages on these pages were replaced by a script that cut each one out
 * of the held edition, not retyped, and this pins them: a passage typed back in
 * from another edition ("So withered", "Fire burn and cauldron bubble") fails
 * here. The extract walkthrough's 28 lines and the reader's scenes are cut at
 * build time and cannot drift; this covers the passages quoted inside prose.
 *
 * WHAT IS FORGIVEN, because a quotation set into a sentence may do it: the case
 * of the first letter, punctuation after the last word, "..." where lines are
 * left out, and the shape of quotation marks and dashes. Every word, and every
 * comma, semicolon and stop between the first word and the last, must match.
 */

const DIR = join(process.cwd(), 'src/app/revision/texts/macbeth')

function filesUnder(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? filesUnder(p) : /\.tsx?$/.test(f) ? [p] : []
  })
}

/** Both sides are reduced the same way, so an ambiguous mark cannot favour one. */
function unify(s: string): string {
  return (
    s
      .replace(/[‘’ʼ]/g, "'")
      .replace(/[“”"]/g, ' ')
      // A single quotation mark, as against an apostrophe, touches a non-letter.
      .replace(/(^|[^\p{L}])'/gu, '$1 ')
      .replace(/'(?=[^\p{L}]|$)/gu, ' ')
      .replace(/_/g, '')
      .replace(/\s*(?:—|–|--|\s-\s)\s*/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  )
}

/** The held edition as one line of text per scene, speakers dropped, " / " at every line. */
const HELD = macbethText.sections.map((s) =>
  unify(
    s.content
      .split(/<\/p>\s*/)
      .map((b) =>
        b
          .replace(/<strong>[^<]*<\/strong>\s*/g, '')
          .replace(/<[^>]+>/g, '')
          .replace(/&amp;/g, '&')
          .trim(),
      )
      .filter(Boolean)
      .map((b) => {
        const lines = b.split('\n').map((l) => l.trim())
        // Prose is wrapped by the printer, not the author, so its breaks are spaces.
        const prose =
          lines.length > 1 &&
          lines.slice(1).filter((l) => /^[a-z]/.test(l)).length / (lines.length - 1) >= 0.3
        return lines.join(prose ? ' ' : ' / ')
      })
      .join(' / '),
  ),
)

/** Source text with JS escapes and HTML entities read as the page renders them. */
function rendered(src: string): string {
  return src
    .replace(/\n\s*/g, ' ')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&quot;/g, '"')
    .replace(/&lsquo;|&rsquo;|&apos;|&#39;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&amp;/g, '&')
}

/**
 * Quotations of three lines or more: two " / " marks inside one pair of
 * quotation marks.
 *
 * Curly marks open and close unambiguously, so they are read across the whole
 * file, JSX line wraps included. Straight marks are paired line by line, the
 * escaped ones (\") first: paired across the whole file, one stray mark early
 * on shifted every pairing after it, and the first version of this missed
 * "Fire burn and cauldron bubble" in a string it had simply read inside out.
 */
function passagesIn(src: string): string[] {
  const out = new Set<string>()
  const keep = (q: string) => {
    const t = q.trim()
    if ((t.match(/ \/ /g) ?? []).length >= 2) out.add(t)
  }
  for (const m of rendered(src).matchAll(/“([^”]+)”/g)) keep(m[1])
  for (const line of src.split('\n')) {
    let rest = line
    for (const m of line.matchAll(/\\"((?:(?!\\").)+?)\\"/g)) {
      keep(rendered(m[1]))
      rest = rest.replace(m[0], ' ')
    }
    for (const m of rendered(rest).matchAll(/"([^"]+)"/g)) keep(m[1])
  }
  return [...out]
}

function inHeld(q: string): boolean {
  return q
    .split(/\s*(?:\.\.\.|…)\s*/)
    .map((part) => unify(part).replace(/[.,;:!?]+$/, ''))
    .filter((part) => part.split(' ').length >= 2)
    .every((part) => {
      const tail = part.slice(1)
      return HELD.some((h) => {
        for (let at = h.indexOf(tail); at > 0; at = h.indexOf(tail, at + 1))
          if (h[at - 1].toLowerCase() === part[0].toLowerCase()) return true
        return false
      })
    })
}

const FILES = filesUnder(DIR)

describe('the Macbeth pages print the held edition', () => {
  it('finds the pages, and passages on them', () => {
    // An emptied scan would pass the check below by checking nothing.
    expect(FILES.length).toBeGreaterThan(10)
    const all = FILES.flatMap((f) => passagesIn(readFileSync(f, 'utf8')))
    expect(all.length).toBeGreaterThan(50)
  })

  it('in every passage of three lines or more', () => {
    const wrong: string[] = []
    for (const f of FILES)
      for (const q of passagesIn(readFileSync(f, 'utf8')))
        if (!inHeld(q)) wrong.push(`${relative(DIR, f)}: ${q.slice(0, 90)}`)
    expect(wrong).toEqual([])
  })

  it('and would catch the Folger wording it replaced', () => {
    // The check is only worth something if it refuses the text it guards against.
    expect(inHeld('Double, double toil and trouble; / Fire burn and cauldron bubble. / X')).toBe(
      false,
    )
    expect(inHeld('Double, double, toil and trouble; / Fire, burn; and cauldron, bubble.')).toBe(
      true,
    )
    expect(inHeld('So withered and so wild in their attire / That look not like')).toBe(false)
  })
})

/**
 * And every shorter quotation, word for word and mark for mark.
 *
 * WHAT GOT THROUGH (found 26 September 2026, by a review after the move). The
 * check above reads only passages of three lines or more, and forgives dashes,
 * so a quotation in Folger's punctuation passed it whenever the two editions
 * differ only there: "Did you say all? O hell-kite! All?" (Gutenberg: "all?—O
 * hell-kite!—All?"), "the innocent sleep, / Sleep" (Gutenberg: "sleep; /
 * Sleep"), "That way the noise is. Tyrant" and "O worthiest cousin,". So did
 * three misquotations no edition prints: "shrieks that rend the air"
 * (rent), "Nought's had" (Naught's) and "foul is fair, / Hover" (fair:).
 *
 * So every quotation the pages print, found by the shared fair-dealing scanner,
 * that is mostly the play's words (three in five of its three-word runs are in
 * the edition) must be in the edition: every word in order, and every mark
 * between its first word and its last. Case, quotation marks and the marks
 * either side of the quotation are forgiven, and "..." may join two parts.
 * The line mark " / " is not a word or a mark, so it may stand for a break.
 */
function tokens(s: string): string[] {
  const t = s
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/[“”"]/g, ' ')
    .replace(/_/g, '')
    .replace(/—|–|--/g, ' — ')
    .replace(/(\w)-(\w)/g, '$1 $2')
    .toLowerCase()
  const out: string[] = []
  for (const m of t.matchAll(/[a-z0-9']+|[,;:!?.—]/g)) {
    const w = /[a-z0-9]/.test(m[0]) ? m[0].replace(/^'+|'+$/g, '') : m[0]
    if (w) out.push(w)
  }
  return out
}
const isWord = (w: string) => /[a-z0-9]/.test(w)

const HELD_TOKENS = tokens(
  macbethText.sections
    .map((s) =>
      s.content
        .replace(/<strong>[^<]*<\/strong>/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&amp;/g, '&'),
    )
    .join(' '),
)
const HELD_WORDS = ` ${HELD_TOKENS.filter(isWord).join(' ')} `
const HELD_MARKED = ` ${HELD_TOKENS.join(' ')} `
const HELD_TRIGRAMS = new Set(
  HELD_TOKENS.filter(isWord).flatMap((_, i, a) =>
    i + 3 <= a.length ? [a.slice(i, i + 3).join(' ')] : [],
  ),
)

/** Why a quotation is not the edition's, or null if it is (or is not a quotation of it). */
function notHeld(quotation: string): string | null {
  for (const part of quotation.split(/\s*(?:\.\.\.|…|\[\.\.\.\]|\[…\])\s*/)) {
    const all = tokens(part)
    const words = all.filter(isWord)
    if (words.length < 3) continue
    const runs = words.slice(0, -2).map((_, i) => words.slice(i, i + 3).join(' '))
    if (runs.filter((r) => HELD_TRIGRAMS.has(r)).length / runs.length < 0.6) continue
    if (!HELD_WORDS.includes(` ${words.join(' ')} `)) return 'words'
    const first = all.findIndex(isWord)
    const last = all.length - [...all].reverse().findIndex(isWord)
    if (!HELD_MARKED.includes(` ${all.slice(first, last).join(' ')} `)) return 'marks'
  }
  return null
}

describe('the Macbeth pages quote the held edition exactly', () => {
  const files = [
    ...sourcesUnder(join('src', 'app', 'revision', 'texts', 'macbeth')),
    'src/data/study-guides/macbeth.ts',
  ]

  it('finds quotations of the play to check', () => {
    // A scanner that found nothing would pass the check below.
    const found = files
      .flatMap((f) => quotationsOn(f))
      .filter((q) => tokens(q.text).filter(isWord).length >= 3)
    expect(found.length).toBeGreaterThan(300)
  })

  it('in every word and every mark', () => {
    const wrong: string[] = []
    for (const f of files)
      for (const q of quotationsOn(f)) {
        const why = notHeld(q.text)
        if (why) wrong.push(`${f}:${q.line} (${why}) ${q.text.slice(0, 90)}`)
      }
    expect(wrong).toEqual([])
  })

  it('and would refuse what got through before', () => {
    expect(notHeld('All my pretty ones? / Did you say all? O hell-kite! All?')).toBe('marks')
    expect(notHeld('All my pretty ones? / Did you say all?—O hell-kite!—All?')).toBeNull()
    expect(notHeld('sighs and groans and shrieks that rend the air / Are made, not mark’d')).toBe(
      'words',
    )
    expect(notHeld('So withered, and so wild in their attire')).toBe('words')
    expect(notHeld('Fair is foul, and foul is fair, / Hover through the fog')).toBe('marks')
    expect(notHeld('Fair is foul, and foul is fair: / Hover through the fog')).toBeNull()
  })
})
