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

const PLAYS = readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.ts'))
  .map((f) => f.replace(/\.ts$/, ''))

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

describe('the plays are there', () => {
  it('has twelve of them', () => {
    expect(PLAYS).toHaveLength(12)
  })

  it.each(PLAYS)('%s has a read route wired to its data', (slug) => {
    const page = join(TEXTS_DIR, slug, 'read/page.tsx')
    expect(existsSync(page), `${slug} has data but no read page`).toBe(true)
    expect(readFileSync(page, 'utf8')).toContain(`@/data/full-texts/${slug}`)
  })

  it.each(PLAYS)('%s is a set text we actually teach', (slug) => {
    // A full text nobody studies is work in the wrong place.
    expect(
      SET_TEXTS.some((t) => t.slug === slug),
      `${slug} is not in SET_TEXTS`,
    ).toBe(true)
  })
})

describe('the parse matches the play', () => {
  it.each(Object.entries(EXPECTED_SCENES))('%s has %i scenes', (slug, count) => {
    const scenes = (dataFor(slug).match(/"id": "act/g) ?? []).length
    expect(scenes).toBe(count)
  })

  it.each(PLAYS)('%s has five acts and no orphan scenes', (slug) => {
    const acts = new Set(
      [...dataFor(slug).matchAll(/"id": "act([ivxlc]+)-scene/g)].map((m) => m[1]),
    )
    expect(acts.size, `${slug} has acts: ${[...acts].join(', ')}`).toBe(5)
  })

  it.each(PLAYS)('%s carries a substantial amount of text', (slug) => {
    // A generator that writes an empty structure and reports success is the
    // failure this codebase is full of.
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
    for (const slug of PLAYS) {
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
