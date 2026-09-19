import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * A page description that promised analysis the page does not contain.
 *
 * THE DEFECT. The set-text catch-all route built one meta description for all
 * 73 texts: "In-depth study guide for X by Y: characters, themes, key
 * quotations and exam-ready analysis." The body, four hundred lines below,
 * renders the description only `{text.description && ...}` and the theme chips
 * only `{text.keyThemes && ...}`. So for a text carrying neither, the page was
 * a title, an author and a row of links, while its own metadata advertised
 * four things none of which were on it.
 *
 * It is the house failure mode exactly: a document asserting what the code does
 * not do. It was latent until 19 September 2026, when reading the Edexcel
 * International GCSE anthology against our data found seven prescribed poems
 * missing entirely. All seven were added with no description and no themes,
 * deliberately - inventing seven summaries so the cards looked uniform would
 * have been the fabrication the whole exercise was avoiding - which took the
 * claim from latent to live.
 *
 * WHAT THIS TEST IS FOR. Not the wording. The invariant is that the promise is
 * conditional on there being something to promise, so that adding another
 * content-free row cannot silently republish the claim.
 */

const SRC = readFileSync(join(process.cwd(), 'src/app/revision/texts/[slug]/page.tsx'), 'utf8')
const CODE = SRC.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('the metadata', () => {
  it('decides from whether the text has written content', () => {
    expect(CODE).toMatch(/hasWrittenContent/)
    expect(CODE).toMatch(/hasWrittenContent = Boolean\(text\.description\)/)
  })

  it('makes the analysis promise conditional, not unconditional', () => {
    const at = CODE.indexOf('exam-ready analysis')
    expect(at, 'the promise has gone entirely, which is a different change').toBeGreaterThan(-1)
    // The promise must be the true branch of the guard, not a plain assignment.
    // Anchored on `description:` rather than a character window, because the
    // window version broke once comments were stripped out of CODE.
    expect(CODE, 'the promise is not guarded').toMatch(
      /description: hasWrittenContent[\s\S]{0,20}\?[\s\S]{0,20}`In-depth study guide/,
    )
  })

  it('still says something useful when there is no description', () => {
    expect(CODE).toMatch(/set text details and revision resources/)
  })
})

describe('the body it has to agree with', () => {
  it('renders the description only when there is one', () => {
    expect(CODE).toMatch(/\{text\.description &&/)
  })

  it('renders the theme chips only when there are some', () => {
    expect(CODE).toMatch(/\{text\.keyThemes && text\.keyThemes\.length > 0 &&/)
  })
})

describe('the rows that made this live', () => {
  // Named, because a set-difference assertion would pass just as happily if
  // these seven quietly acquired invented descriptions later.
  const NO_DESCRIPTION = [
    'blessing',
    'search-for-my-tongue',
    'poem-at-thirty-nine',
    'la-belle-dame-sans-merci',
    'the-tyger',
    'half-caste',
    'remember',
  ]

  it.each(NO_DESCRIPTION)('%s has no description, and that is deliberate', (slug) => {
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text, `${slug} is missing from SET_TEXTS`).toBeTruthy()
    expect(text?.description).toBeUndefined()
    expect(text?.keyThemes).toBeUndefined()
  })

  it('and they are still real prescribed texts, not junk rows', () => {
    for (const slug of NO_DESCRIPTION) {
      const text = SET_TEXTS.find((t) => t.slug === slug)
      expect(text?.boards).toContain('edexcel-igcse')
      expect(text?.author, `${slug} has no author`).toBeTruthy()
    }
  })
})
