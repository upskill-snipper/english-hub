// @vitest-environment jsdom
//
// This renders the real rail, because the defect is a MISSING LINK rather than
// a wrong value: asserting on a returned string would not have caught it.
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TEXT_SLUG_ALIASES, canonicalTextSlug } from '@/lib/revision/text-slug-aliases'
import { getSetText } from '@/lib/board/set-texts'
import { buildTextNav } from '@/lib/revision/text-nav'

/**
 * The rail did not know which text it was standing in.
 *
 * Six revision-notes guides are filed under a directory that drops the leading
 * article - `christmas-carol` against `a-christmas-carol`, `inspector-calls`
 * against `an-inspector-calls`, and four more. A shared alias map exists for
 * exactly this, and `TextScopedNav` imported it.
 *
 * It then applied it to ONE of the five places that need it: the off-board
 * notice, which was the bug its author was chasing. Everything else took the
 * raw route segment, so on those six routes:
 *
 *   - `getSetText('christmas-carol')` found nothing, so `title` was null - and
 *     `title` gates both the text's name in the rail and the "MARK MY ESSAY"
 *     link. The AI marking call-to-action, put in the rail precisely so it
 *     would "reach every guide in all five trees at once", was absent from the
 *     revision notes for six texts including A Christmas Carol.
 *   - `buildTextNav('christmas-carol')` built /revision/texts/christmas-carol.
 *     VERIFIED ON PRODUCTION before the fix: that URL serves "Set Text Not
 *     Found" while the real guide sits at /revision/texts/a-christmas-carol.
 *     Same for merchant-of-venice and sign-of-four.
 *
 * A fix applied at one of five call sites is the shape this codebase keeps
 * producing: the author solved the symptom in front of them and the same
 * mistake stayed live four lines away.
 *
 * MUTATIONS RUN, each verified to have altered the file first: reverting
 * `buildTextNav(canonical)` to the raw slug fails 1 of these 17, and reverting
 * `getSetText(canonical)` fails 3 - the name, the hub link and the marking
 * link, which is the blast radius of that one argument.
 */

vi.mock('@/hooks/useBoard', () => ({
  useBoard: () => ({ board: null, isHydrated: false }),
}))
vi.mock('next/navigation', () => ({
  usePathname: () => '/resources/revision-notes/christmas-carol',
}))

// The rail is a client component that reads the dictionary; the real hook needs
// a provider this test has no reason to stand up.
vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))

const { TextScopedNav } = await import('@/app/revision/_components/text-scoped-nav')

describe('every aliased directory resolves to a real text', () => {
  it('there are aliases to check, so this is not vacuous', () => {
    expect(Object.keys(TEXT_SLUG_ALIASES).length).toBeGreaterThan(4)
  })

  it.each(Object.keys(TEXT_SLUG_ALIASES))('%s resolves to a set text we hold', (dir) => {
    const text = getSetText(canonicalTextSlug(dir))
    expect(text, `${dir} resolves to nothing`).toBeTruthy()
    // And the raw segment does NOT, which is why the alias has to be applied.
    expect(getSetText(dir), `${dir} needs no alias - has the register changed?`).toBeFalsy()
  })

  it.each(Object.keys(TEXT_SLUG_ALIASES))(
    '%s builds a hub link that is not the raw segment',
    (dir) => {
      expect(buildTextNav(canonicalTextSlug(dir)).hubHref).toBe(
        `/revision/texts/${canonicalTextSlug(dir)}`,
      )
      expect(buildTextNav(canonicalTextSlug(dir)).hubHref).not.toBe(`/revision/texts/${dir}`)
    },
  )
})

describe('the rail, standing on an aliased route', () => {
  it('names the text', () => {
    render(<TextScopedNav slug="christmas-carol" />)
    expect(screen.getByRole('link', { name: 'A Christmas Carol' })).toBeTruthy()
  })

  it('links to the guide that exists, not the one that 404s', () => {
    render(<TextScopedNav slug="christmas-carol" />)
    const hub = screen.getByRole('link', { name: 'A Christmas Carol' })
    expect(hub.getAttribute('href')).toBe('/revision/texts/a-christmas-carol')
  })

  it('and offers the marking link, which was missing entirely', () => {
    // THE ASSERTION THAT MATTERS. This link is gated on `title`, so a null
    // title removed the AI marking call-to-action from six guides silently.
    render(<TextScopedNav slug="christmas-carol" />)
    const marking = screen
      .getAllByRole('link')
      .find((a) => (a.getAttribute('href') ?? '').startsWith('/marking/submit'))
    expect(marking, 'no marking link in the rail').toBeTruthy()
    expect(marking!.getAttribute('href')).toContain('Christmas')
  })

  it('and an unaliased slug still behaves, so the fix is not a special case', () => {
    // The counterweight: hard-coding the six would pass everything above.
    render(<TextScopedNav slug="macbeth" />)
    const hub = screen.getByRole('link', { name: 'Macbeth' })
    expect(hub.getAttribute('href')).toBe('/revision/texts/macbeth')
  })
})

describe('"Play this text", added 10 October 2026', () => {
  // The rail offers a text's guided games beside the marker, and only for a
  // text the games cover. Rendered here, in the file that already renders the
  // rail, because the defect would be a link that is there or is not. Which
  // texts those are is tested in text-games-are-offered-only-where-they-exist.
  const playHrefs = () =>
    screen
      .queryAllByRole('link')
      .filter((a) => (a.textContent ?? '').includes('textnav.play_text'))
      .map((a) => a.getAttribute('href'))

  it('goes to the real text on a route that drops the article', () => {
    render(<TextScopedNav slug="christmas-carol" />)
    expect(playHrefs()).toEqual(['/games/texts/a-christmas-carol'])
  })

  it('is offered on a text whose guide has few sub-pages as well', () => {
    render(<TextScopedNav slug="hamlet" />)
    expect(playHrefs()).toEqual(['/games/texts/hamlet'])
  })

  it('is offered on a text in copyright, which has games from 10 October 2026', () => {
    // An Inspector Calls was the example of a text with no games until texts
    // in copyright were given paths, held to the fair-dealing limits.
    render(<TextScopedNav slug="an-inspector-calls" />)
    expect(playHrefs()).toEqual(['/games/texts/an-inspector-calls'])
  })

  it('is not offered on do-not-go-gentle-into-that-good-night, which has no games', () => {
    const { container } = render(<TextScopedNav slug="do-not-go-gentle-into-that-good-night" />)
    expect(container.querySelector('a[href^="/games/texts"]')).toBeNull()
  })
})
