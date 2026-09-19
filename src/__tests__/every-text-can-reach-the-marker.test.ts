import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { markingLink, resolvePrefill } from '@/lib/marking/submit-prefill'

/**
 * "If the AI part is even connected."
 *
 * THE DEFECT, reported from the live site on 19 September 2026. Counted after
 * reading it: ZERO of the 54 pages under /revision/texts linked to the marking
 * tool. Macbeth - the most complete guide on the site, eleven sub-pages and
 * 10,200 lines - did not either. Ten of the 26 anthology and poetry guides did.
 *
 * So a student could study a text in full and never once be offered the thing
 * the product is actually for. From inside a guide there was no evidence the AI
 * marker existed, let alone that it was connected. That is not a discovery
 * problem, it is an absence.
 *
 * THE FIX IS IN THE RAIL, NOT ON THE PAGES, and that choice is the point. The
 * text-scoped rail now renders on every guide in all five trees. Editing 80
 * pages would have put the same link in 80 places to drift independently, and
 * the next text written would not have one at all.
 *
 * IT CARRIES THE TEXT, NOT A PAPER. Mapping a set text to a mark scheme would
 * mean inventing a board-to-paper table - there is no such resolver in the
 * codebase, and guessing one would put a student in front of the wrong mark
 * scheme with our name on it. The marking form already resolves the board from
 * the stored cookie, so the honest link names the text and lets the student
 * confirm the rest.
 */

const ROOT = process.cwd()
const RAIL = readFileSync(join(ROOT, 'src/app/revision/_components/text-scoped-nav.tsx'), 'utf8')
const CODE = RAIL.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('the rail offers the marker', () => {
  it('links to it through the helper, not a hand-built query', () => {
    // A hand-assembled query is how twelve mark-scheme links went silently
    // inert earlier in this backlog when a parameter was renamed.
    expect(CODE).toContain('markingLink(')
    expect(CODE).not.toMatch(/href=\{`\/marking\/submit\?/)
  })

  it('sends the text it is scoped to', () => {
    expect(CODE).toMatch(/markingLink\(\{ text: title, title \}\)/)
  })

  it('names the action and says what it does', () => {
    expect(CODE).toContain("t('textnav.mark_essay')")
    expect(CODE).toContain("t('textnav.mark_essay_hint')")
  })
})

describe('the link the rail builds actually prefills', () => {
  const link = markingLink({ text: 'Macbeth', title: 'Macbeth' })

  it('is a marking-submit URL', () => {
    expect(link.startsWith('/marking/submit?')).toBe(true)
  })

  it('carries no paper, because the rail does not know one', () => {
    expect(link).not.toContain('paper=')
  })

  it('round-trips into the form as the studied text', () => {
    // The end-to-end assertion. A link that looks right and prefills nothing is
    // the failure this codebase is full of.
    const params = new URLSearchParams(link.split('?')[1])
    const prefill = resolvePrefill(params, [], [])
    expect(prefill.studiedText).toBe('Macbeth')
    expect(prefill.title).toBe('Macbeth')
  })

  it('still carries a paper when the caller knows one', () => {
    // Making schemeId optional must not break the callers that do pass it.
    const withPaper = markingLink({ schemeId: 'aqa-lit-paper1', text: 'Macbeth' })
    expect(withPaper).toContain('paper=aqa-lit-paper1')
  })
})

describe('how bad it was, so the fix is not undone quietly', () => {
  const TEXTS_DIR = join(ROOT, 'src/app/revision/texts')

  it('none of the text pages links to the marker on its own', () => {
    // Recorded rather than fixed page by page. If this ever stops being true
    // someone has started adding the link per page, which is the drift the rail
    // exists to prevent - and they should remove it from the rail, not both.
    const dirs = readdirSync(TEXTS_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
      .map((d) => d.name)
    expect(dirs.length).toBeGreaterThan(40)

    const linking = dirs.filter((slug) => {
      const page = join(TEXTS_DIR, slug, 'page.tsx')
      if (!existsSync(page)) return false
      return /\/marking\/submit|markingLink/.test(readFileSync(page, 'utf8'))
    })
    expect(linking).toEqual([])
  })

  it('and Macbeth is one of them, which is the whole point', () => {
    const page = readFileSync(join(TEXTS_DIR, 'macbeth/page.tsx'), 'utf8')
    expect(/\/marking\/submit|markingLink/.test(page)).toBe(false)
  })
})
