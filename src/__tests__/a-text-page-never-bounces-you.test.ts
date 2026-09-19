import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { SET_TEXTS, textAvailableForBoard } from '@/lib/board/set-texts'
import {
  TEXT_SLUG_ALIASES,
  canonicalTextSlug,
  isKnownSetText,
} from '@/lib/revision/text-slug-aliases'

/**
 * Clicking a text and being thrown to a page about having no texts.
 *
 * REPORTED FROM THE LIVE SITE, and reproduced exactly: with the board cookie set
 * to KS3, opening /revision/texts/macbeth landed on /revision/texts under the
 * heading "Your KS3 Set Texts" - which is empty, because KS3 prescribes no set
 * texts at all. So the answer to "show me Macbeth" was a page explaining that
 * there is nothing to show.
 *
 * THE CAUSE WAS IN EIGHTY-TWO FILES. Every dedicated text page carried its own
 * hard-coded board allowlist and redirected anyone outside it:
 *
 *   const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']
 *   if (board && !allowedBoards.includes(board)) redirect('/revision/texts')
 *
 * in five different spellings, including `board !== 'aqa'` on the five Great
 * Expectations pages - which is also simply WRONG, since five boards set that
 * novel, so an Edexcel student was bounced off a text their own exam prescribes.
 *
 * A duplicated allowlist per page cannot help but drift from SET_TEXTS, and
 * these had. That is the second reason to delete them rather than correct them:
 * the data already knows which boards set a text, and one copy of a fact is
 * always better than eighty-two.
 *
 * WHAT REPLACES IT. Nothing, on the page - a student who clicks a text sees the
 * text, which is what they asked for. The rail says plainly that it is not on
 * their course, in ONE place rather than eighty-two, and lets them read it
 * anyway. Silently moving somebody is not a way of telling them something.
 */

const ROOT = process.cwd()
const TEXTS = join(ROOT, 'src/app/revision/texts')

/** Every page.tsx under the set-text tree. */
function everyTextPage(): string[] {
  const out: string[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name === 'page.tsx') out.push(full)
    }
  }
  walk(TEXTS)
  return out
}

const PAGES = everyTextPage()

describe('no text page bounces the reader away', () => {
  it('there are enough pages for this to mean something', () => {
    // 82 carried the guard. If this collapses, the sweep is being checked
    // against almost nothing.
    expect(PAGES.length).toBeGreaterThan(80)
  })

  it.each(PAGES.map((p) => [p.replace(ROOT, '').replace(/\\/g, '/'), p]))(
    '%s does not redirect to the texts index',
    (_label, path) => {
      expect(readFileSync(path, 'utf8')).not.toContain("redirect('/revision/texts')")
    },
  )

  it('and no page keeps a private board allowlist', () => {
    // The allowlists are the thing that drifted. A page that still declares one
    // is a page whose idea of which boards set a text can diverge from the data.
    const offenders = PAGES.filter((p) => /const allowedBoards\s*=/.test(readFileSync(p, 'utf8')))
    expect(offenders.map((p) => p.replace(ROOT, ''))).toEqual([])
  })
})

describe('the data already knew, which is why the copies had to go', () => {
  it('Great Expectations is set by more than one board', () => {
    // Its five pages allowed AQA alone. An Edexcel, OCR or IAL student was
    // bounced off a novel their own specification prescribes.
    const text = SET_TEXTS.find((t) => t.slug === 'great-expectations')
    expect(text?.boards.length).toBeGreaterThan(1)
    expect(text?.boards).toContain('edexcel')
    expect(textAvailableForBoard('great-expectations', 'edexcel')).toBe(true)
  })

  it('KS3 prescribes nothing, which is what made the bounce absurd', () => {
    // Every text is off-course for a KS3 student, so every click bounced, and
    // the destination was a page saying there are no texts.
    const anyKs3 = SET_TEXTS.filter((t) => t.boards.includes('ks3'))
    expect(anyKs3).toEqual([])
    expect(textAvailableForBoard('macbeth', 'ks3')).toBe(false)
  })

  it('but Macbeth is still on the boards that do set it', () => {
    // The counterweight: if textAvailableForBoard returned false for everything
    // the assertions above would pass while the notice showed on every page.
    expect(textAvailableForBoard('macbeth', 'aqa')).toBe(true)
    expect(textAvailableForBoard('macbeth', 'edexcel-igcse')).toBe(true)
  })
})

describe('the rail tells the reader instead of moving them', () => {
  const RAIL = readFileSync(join(ROOT, 'src/app/revision/_components/text-scoped-nav.tsx'), 'utf8')
  const CODE = RAIL.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

  it('works out whether the text is on the reader’s course', () => {
    // Against the CANONICAL slug, not the route segment - see the alias block
    // below for the false claim that cost.
    expect(CODE).toContain('textAvailableForBoard(canonical, board)')
    expect(CODE).toMatch(/const offBoard =/)
  })

  it('waits for hydration, so it cannot flash on a reader whose board is known', () => {
    expect(CODE).toMatch(/isHydrated &&/)
    expect(CODE).toMatch(/const offBoard =[\s\S]{0,160}isHydrated/)
  })

  it('and requires a text it actually recognises before saying anything', () => {
    expect(CODE).toContain('isKnownSetText(slug)')
  })

  it('says so, and says they can still read it', () => {
    expect(CODE).toContain("t('textnav.off_board')")
    expect(CODE).toContain("t('textnav.off_board_hint')")
  })

  it('renders the notice rather than navigating', () => {
    expect(CODE).toMatch(/\{offBoard && \(/)
    expect(CODE).not.toContain('router.replace')
    expect(CODE).not.toContain('redirect(')
  })
})

describe('the revision-notes library had the same bounce', () => {
  const NOTES = join(ROOT, 'src/app/resources/revision-notes')

  it('no layout redirects on board any more', () => {
    const layouts = readdirSync(NOTES, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => join(NOTES, d.name, 'layout.tsx'))
      .filter((p) => existsSync(p))
    // 25 of them called guardTextForBoard. These are the pages the board
    // shelves link to for nine set texts, so the bounce landed exactly where
    // the shelf had just sent the reader.
    expect(layouts.length).toBeGreaterThan(20)
    for (const p of layouts) {
      expect(readFileSync(p, 'utf8'), p.replace(ROOT, '')).not.toContain('guardTextForBoard')
    }
  })

  it('and the guard itself is gone, not just unused', () => {
    // Dead code that redirects is a loaded gun: the next person to see an
    // unused guard is as likely to wire it back up as to delete it.
    expect(existsSync(join(NOTES, '_guard.ts'))).toBe(false)
  })
})

describe('the notice cannot fire on a text it simply does not recognise', () => {
  // THE BUG THIS CAUGHT, in my own change, before it shipped. The
  // revision-notes library uses shorter directory names than the set-text
  // register - `christmas-carol` against `a-christmas-carol` - so resolving the
  // route segment straight against SET_TEXTS finds nothing and
  // textAvailableForBoard returns false. The rail was about to tell an AQA
  // student that A Christmas Carol is not on their course. All four UK boards
  // set it, and it is among the most studied texts on the site.

  it.each(Object.entries(TEXT_SLUG_ALIASES))('%s resolves to %s', (local, canonical) => {
    expect(canonicalTextSlug(local)).toBe(canonical)
    expect(
      SET_TEXTS.some((t) => t.slug === canonical),
      `${canonical} is not a set text`,
    ).toBe(true)
  })

  it('every alias target is a real set text, so none of them can mislead', () => {
    for (const local of Object.keys(TEXT_SLUG_ALIASES)) {
      expect(isKnownSetText(local), `${local} does not resolve to a known text`).toBe(true)
    }
  })

  it('A Christmas Carol is on AQA under its short name too', () => {
    // The specific false claim that was about to be printed.
    expect(textAvailableForBoard(canonicalTextSlug('christmas-carol'), 'aqa')).toBe(true)
  })

  it('and an unknown slug is not treated as off-course', () => {
    // "We have no record of this" and "your board does not set this" are
    // different statements, and only one of them is safe to print.
    expect(isKnownSetText('the-crucible')).toBe(false)
    expect(isKnownSetText('not-a-text-at-all')).toBe(false)
  })
})

describe('the catch-all is covered too', () => {
  it('the dynamic set-text route no longer redirects on board', () => {
    const page = join(TEXTS, '[slug]/page.tsx')
    expect(existsSync(page)).toBe(true)
    const src = readFileSync(page, 'utf8')
    expect(src).not.toContain("redirect('/revision/texts')")
  })
})
