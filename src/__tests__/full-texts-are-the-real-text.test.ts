import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { sanitiseHtml, sanitiseOnServer } from '@/lib/html/sanitise'
import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * Twelve complete plays, and the two ways this could have gone wrong.
 *
 * WHAT WAS ASKED FOR: every text "in full", with no fabrication. Those pull
 * against each other, and the resolution is that the text is COPIED and the
 * analysis is not written. A model reproducing Shakespeare from memory would
 * drop a line here and modernise a word there, and no reviewer would catch it
 * before a student revised from it. So the plays are fetched as bytes from a
 * published modern-spelling edition and never pass through anything that could
 * rewrite them.
 *
 * THE FIRST EDITION THE FETCHER WAS POINTED AT WAS WRONG, which is the whole
 * argument for checking. Project Gutenberg 1112 is the old-spelling First Folio
 * Romeo and Juliet with the printers' errors deliberately preserved - "vnfold
 * your selfe" - and its own header discusses Henry VI. The id for every play is
 * now confirmed against that file's own Title line.
 *
 * TWO SILENT PARSE FAILURES WERE CAUGHT THE SAME WAY. Much Ado's edition mixes
 * "SCENE III." and "Scene III." in one body, so four scenes were folded into
 * their predecessors and Act III arrived as one page - 13 scenes where the play
 * has 17. Twelfth Night prints "ACT I." with a trailing period, which the act
 * regex missed, so the parse walked back past the dramatis personae into the
 * table of contents and invented a nineteenth scene. Both were found by
 * cross-checking the parse against the edition's OWN contents list, which the
 * generator now does and refuses to write without.
 *
 * AND THE PAGES RENDERED EMPTY AT FIRST. The viewer sanitises section HTML with
 * DOMPurify, which has no `sanitize` method on the server; the call threw into
 * an error boundary, so each page returned 200 with a title, a byline and no
 * play. It was latent because that branch only runs for a section with NO
 * annotations, and the only full text before this was Macbeth, whose sections
 * all have them.
 */

const ROOT = process.cwd()
const DATA_DIR = join(ROOT, 'src/data/full-texts')
const TEXTS_DIR = join(ROOT, 'src/app/revision/texts')

const ALL = readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.ts'))
  .map((f) => f.replace(/\.ts$/, ''))

/** The prose works, which are chaptered rather than acted. */
const PROSE = [
  'a-christmas-carol',
  'silas-marner',
  'the-sign-of-four',
  'jekyll-and-hyde',
  'the-war-of-the-worlds',
  'the-scarlet-letter',
]
/** The poems, which are one short block rather than chapters. */
const POEMS = ['remember', 'if', 'disabled', 'sonnet-116']
const PLAYS = ALL.filter((slug) => !PROSE.includes(slug) && !POEMS.includes(slug))

/**
 * Match a section id in either the generated form or the committed one.
 *
 * The generator emits JSON - `"id": "acti-scenei"` - and prettier rewrites it
 * on commit to `id: 'acti-scenei'`. A test keyed on the generator's punctuation
 * passed locally and then failed in the pre-push hook, against files it had
 * just reformatted, reporting zero scenes in every play. The repo already
 * documents this shape for the i18n generator: prettier is the step that turns
 * generator output INTO the committed form, so assertions have to match the
 * committed form or accept both.
 */
const SECTION_ID = /["']?id["']?:\s*["']act([ivxlc]+)-scene[ivxlc]+["']/g

/** Scene counts, from the plays themselves. A wrong parse shows up here. */
const EXPECTED_SCENES: Record<string, number> = {
  'romeo-and-juliet': 24,
  'a-midsummer-nights-dream': 9,
  'the-merchant-of-venice': 20,
  'much-ado-about-nothing': 17,
  'henry-v': 23,
  'julius-caesar': 18,
  hamlet: 20,
  'twelfth-night': 18,
  othello: 15,
  'king-lear': 26,
  'antony-and-cleopatra': 42,
  'the-tempest': 9,
}

function dataFor(slug: string): string {
  return readFileSync(join(DATA_DIR, `${slug}.ts`), 'utf8')
}

describe('the texts are there', () => {
  it('has twelve plays, six prose works and four poems', () => {
    expect(PLAYS).toHaveLength(12)
    expect(PROSE).toHaveLength(6)
    expect(POEMS).toHaveLength(4)
  })

  it.each(ALL)('%s has a read route wired to its data', (slug) => {
    const page = join(TEXTS_DIR, slug, 'read/page.tsx')
    expect(existsSync(page), `${slug} has data but no read page`).toBe(true)
    expect(readFileSync(page, 'utf8')).toContain(`@/data/full-texts/${slug}`)
  })

  it.each(ALL)('%s is a set text we actually teach', (slug) => {
    // A full text nobody studies is work in the wrong place.
    expect(
      SET_TEXTS.some((t) => t.slug === slug),
      `${slug} is not in SET_TEXTS`,
    ).toBe(true)
  })
})

describe('the parse matches the play', () => {
  it.each(Object.entries(EXPECTED_SCENES))('%s has %i scenes', (slug, count) => {
    const scenes = [...dataFor(slug).matchAll(SECTION_ID)].length
    expect(scenes).toBe(count)
  })

  it.each(PLAYS)('%s has five acts and no orphan scenes', (slug) => {
    const acts = new Set([...dataFor(slug).matchAll(SECTION_ID)].map((m) => m[1]))
    expect(acts.size, `${slug} has acts: ${[...acts].join(', ')}`).toBe(5)
  })

  it.each([...PLAYS, ...PROSE])('%s carries a substantial amount of text', (slug) => {
    // A generator that writes an empty structure and reports success is the
    // failure this codebase is full of. Poems are excluded and checked on
    // their own terms below - Sonnet 116 is fourteen lines and would fail a
    // threshold written for a novel, which says nothing about the poem.
    expect(dataFor(slug).length).toBeGreaterThan(80_000)
  })
})

describe('it is the real text, not a reproduction', () => {
  // Lines chosen because a paraphrase or a reproduction from memory would get
  // them subtly wrong, and because they sit in different acts of each play.
  it.each([
    ['romeo-and-juliet', 'wherefore art thou Romeo'],
    ['hamlet', 'To be, or not to be'],
    ['othello', 'put money in thy purse'],
    ['king-lear', 'Blow, winds'],
    ['the-tempest', 'such stuff'],
    ['julius-caesar', 'Friends, Romans, countrymen'],
    ['the-merchant-of-venice', 'quality of mercy'],
    ['twelfth-night', 'If music be the food of love'],
    ['a-midsummer-nights-dream', 'course of true love'],
    ['henry-v', 'Once more unto the breach'],
  ])('%s contains "%s"', (slug, line) => {
    expect(dataFor(slug)).toContain(line)
  })

  it('keeps the edition typography rather than flattening it', () => {
    // Curly apostrophes survive the pipeline. Mojibake here would mean the
    // fetch or the write mangled the encoding.
    const raw = readFileSync(join(DATA_DIR, 'romeo-and-juliet.ts'))
    expect(raw.includes(Buffer.from([0xe2, 0x80, 0x99]))).toBe(true)
    expect(raw.includes(Buffer.from([0xef, 0xbf, 0xbd])), 'replacement characters').toBe(false)
  })

  it('carries no Project Gutenberg branding into what we publish', () => {
    for (const slug of ALL) {
      const data = dataFor(slug)
      const body = data.slice(data.indexOf('sections:'))
      expect(body.toLowerCase(), `${slug} still carries the source branding`).not.toContain(
        'gutenberg',
      )
    }
  })

  it('invents no analysis to fill the viewer panels', () => {
    // The panels exist for characters, themes and context. Generating twelve
    // sets of those to make the pages look complete is the fabrication this
    // work exists to avoid.
    for (const slug of PLAYS) {
      const data = dataFor(slug)
      expect(data, `${slug} has invented characters`).not.toMatch(/\bcharacters:/)
      expect(data, `${slug} has invented themes`).not.toMatch(/\bthemes:/)
      expect(data, `${slug} has invented context`).not.toMatch(/\bcontextNotes:/)
    }
  })
})

describe('the prose works parse to their real chapter counts', () => {
  // Counted in each edition's body before the fetcher was configured. Both
  // Silas Marner and The Sign of the Four parsed at exactly DOUBLE on the first
  // run, because each lists every chapter heading in a contents block that the
  // heading rule matched. The count check refused to write them, which is why
  // it is a refusal and not a warning.
  it.each([
    ['a-christmas-carol', 5],
    ['silas-marner', 22],
    ['the-sign-of-four', 12],
    ['jekyll-and-hyde', 10],
    ['the-war-of-the-worlds', 27],
    ['the-scarlet-letter', 24],
  ])('%s has %i sections', (slug, count) => {
    const sections = [...dataFor(slug).matchAll(/["']?id["']?:\s*["']section-\d+["']/g)].length
    expect(sections).toBe(count)
  })

  it('keeps the Conclusion, which is part of Silas Marner', () => {
    expect(dataFor('silas-marner')).toContain('Conclusion')
  })

  it('reads the stave titles as titles, not as shouting', () => {
    // The edition prints "MARLEY'S GHOST". Small words stay lower case unless
    // they open the title, so "The End of It" keeps its pronoun capitalised.
    const data = dataFor('a-christmas-carol')
    // Either apostrophe. Gutenberg's Romeo and Juliet uses the curly one and
    // its Christmas Carol uses the straight one; asserting the wrong character
    // fails on a title that is perfectly correct.
    expect(data).toMatch(/Stave I: Marley['’]s Ghost/)
    expect(data).toContain('Stave II: The First of the Three Spirits')
    expect(data).toContain('Stave V: The End of It')
    expect(data).not.toContain('The First Of The Three Spirits')
  })

  it.each([
    ['a-christmas-carol', 'Marley was dead'],
    ['silas-marner', 'In the days when the spinning-wheels hummed'],
    ['the-sign-of-four', 'Sherlock Holmes'],
    ['jekyll-and-hyde', 'Mr. Utterson the lawyer'],
    ['the-war-of-the-worlds', 'no one would have believed'],
    ['the-scarlet-letter', 'A throng of bearded men'],
  ])('%s opens with the real text', (slug, line) => {
    expect(dataFor(slug).toLowerCase()).toContain(line.toLowerCase())
  })

  it('names Jekyll by its ten chapter titles, not by a pattern', () => {
    // This edition numbers nothing and prints chapter titles alone. An all-caps
    // rule also matches "HASTIE LANYON.", the signature at the end of Lanyon's
    // narrative, which would have produced an eleventh chapter of one line.
    const data = dataFor('jekyll-and-hyde')
    expect(data).toContain('Story of the Door')
    expect(data).toContain('Search for Mr. Hyde')
    expect(data).toContain('Henry Jekyll’s Full Statement of the Case')
    expect(data).not.toContain('Hastie Lanyon')
  })

  it('carries the book division where the numbering restarts', () => {
    // The War of the Worlds restarts at Book Two. Without the part marker a
    // reader would be offered two Chapter Is and the second ten chapters would
    // carry the first book's numbers.
    const data = dataFor('the-war-of-the-worlds')
    expect(data).toContain('Book One, Chapter I:')
    expect(data).toContain('Book Two, Chapter I:')
    expect(data).toContain('Book Two, Chapter X:')
  })

  it('strips the trailing stop from a chapter title', () => {
    // The edition prints "The Eve of the War." - a full stop that reads as a
    // typo in a sidebar.
    expect(dataFor('the-war-of-the-worlds')).toContain('The Eve of the War')
    expect(dataFor('the-war-of-the-worlds')).not.toContain('The Eve of the War.')
  })

  it('uses the title the specification prints, not the edition', () => {
    // Gutenberg prints "The Sign of the Four"; the boards print "The Sign of
    // Four", and that is the title a student is searching for.
    // Either quoting: the generator emits JSON and prettier rewrites it on
    // commit, and this test runs in both states.
    expect(dataFor('the-sign-of-four')).toMatch(/["']?title["']?:\s*["']The Sign of Four["']/)
  })
})

describe('the poems are whole, and are the poem', () => {
  // A poem is not a chapter. It sits inside a collected volume with dozens of
  // others, has no chapter marker, and its HEADING IS OFTEN NOT ITS NAME -
  // Rossetti's "Remember" is printed in her collected Poems as "SONNET.". So
  // each is anchored on its own first and last line and the count between them
  // is asserted. A blank-line heuristic was tried first and ran Sonnet 116 on
  // for ninety lines into the sonnets that follow it.

  it.each([
    ['remember', 14],
    ['sonnet-116', 14],
  ])('%s is exactly %i lines', (slug, count) => {
    // Counted from the file rather than by parsing the escaped JSON string out
    // of it: the data file holds exactly one poem, so every line break in it
    // belongs to that poem, and a regex over escaped content is one more thing
    // to get subtly wrong.
    const breaks = (dataFor(slug).match(/<br \/>/g) ?? []).length
    expect(breaks + 1).toBe(count)
  })

  it.each([
    ['remember', 'Remember me when I am gone away', 'Than that you should remember and be sad'],
    ['sonnet-116', 'Let me not to the marriage of true minds', 'I never writ, nor no man ever'],
    ['if', 'If you can keep your head when all about you', 'be a Man, my son'],
    ['disabled', 'He sat in a wheeled chair, waiting for dark', 'Why don'],
  ])('%s opens and closes with the real lines', (slug, first, last) => {
    const data = dataFor(slug)
    expect(data, `${slug} opening`).toContain(first)
    expect(data, `${slug} closing`).toContain(last)
  })

  it('keeps the line breaks, which are the form', () => {
    // Collapsing a poem into flowing prose destroys the thing being studied.
    expect(dataFor('sonnet-116')).toContain('<br />')
  })

  it('keeps the stanza breaks too', () => {
    // If— is four stanzas; Disabled is five. A single paragraph would mean the
    // stanza structure had been lost.
    const paras = (dataFor('if').match(/<p>/g) ?? []).length
    expect(paras).toBe(4)
    expect((dataFor('disabled').match(/<p>/g) ?? []).length).toBe(5)
  })

  it.each(POEMS)('%s has a read route', (slug) => {
    expect(existsSync(join(TEXTS_DIR, slug, 'read/page.tsx'))).toBe(true)
  })
})

describe('the sanitiser works where the page renders', () => {
  it('does not throw wherever it runs', () => {
    expect(() => sanitiseHtml('<p>Hello</p>')).not.toThrow()
    expect(sanitiseHtml('<p>Hello</p>')).toContain('Hello')
  })

  it('falls back to the server strip rather than passing HTML through', () => {
    // THIS ASSERTION IS STRUCTURAL ON PURPOSE, and a surviving mutant is why.
    // Vitest runs under jsdom, so DOMPurify.sanitize IS a function here and the
    // fallback branch never executes - a behavioural test of sanitiseHtml
    // cannot reach it, and one written as though it could passed happily while
    // the fallback was replaced with `return html`.
    //
    // The branch is unreachable in this environment and load-bearing in the
    // other one, so it is pinned by reading the source.
    const src = readFileSync(join(ROOT, 'src/lib/html/sanitise.ts'), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*/g, '')
    const at = src.indexOf('export function sanitiseHtml')
    expect(at).toBeGreaterThan(-1)
    const body = src.slice(at)
    expect(body, 'the fallback no longer sanitises').toContain('return sanitiseOnServer(html)')
    expect(body.replace(/\s+/g, ' '), 'the fallback returns the input unchecked').not.toContain(
      'return html }',
    )
  })

  it('strips anything that can execute', () => {
    expect(sanitiseOnServer('<script>alert(1)</script><p>ok</p>')).toBe('<p>ok</p>')
    expect(sanitiseOnServer('<img src=x onerror=alert(1)>')).toBe('')
    expect(sanitiseOnServer('<a href="javascript:alert(1)">x</a>')).toBe('x')
  })

  it('drops every attribute except class', () => {
    expect(sanitiseOnServer('<p onclick="x()" class="italic">hi</p>')).toBe(
      '<p class="italic">hi</p>',
    )
    expect(sanitiseOnServer('<p style="color:red">hi</p>')).toBe('<p>hi</p>')
  })

  it('keeps the markup the plays actually use', () => {
    const html =
      '<p class="italic text-muted-foreground">Enter Hamlet.</p>\n<p><strong>HAMLET</strong>\nAy.</p>'
    const out = sanitiseOnServer(html)
    expect(out).toContain('<p class="italic text-muted-foreground">')
    expect(out).toContain('<strong>HAMLET</strong>')
    expect(out).toContain('Enter Hamlet.')
  })
})
