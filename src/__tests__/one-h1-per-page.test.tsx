// @vitest-environment jsdom
//
// Both defects are about what ends up in the DOM, and neither is visible in
// source text: one component's heading level depends on a prop its caller
// passes, the other on which component the page happens to mount.
import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { readFileSync } from 'node:fs'
import { InteractiveTextViewer, type TextData } from '@/components/study/InteractiveTextViewer'

/**
 * Thirty-seven pages had no h1, and twenty-six had the same h1 twice.
 *
 * MEASURED 20 September 2026 by fetching all 1,329 sitemap URLs. 48 pages had
 * no h1 at all and 26 had more than one, and both groups had a single cause
 * each.
 *
 * NO H1: every one of the 37 game pages. They all render `GameShell`, which put
 * the game's name in an `<h2>` and nothing above it, so the page's only heading
 * was a second-level one. /games itself has an h1 and does not use the shell,
 * so promoting it creates no duplicate. The classes carry the styling, so
 * nothing looks different.
 *
 * TWO H1s: the 26 read pages that use `FullTextReader`. It renders a display
 * `<h1>` with the text's title and then mounts `InteractiveTextViewer`, which
 * rendered its own `<h1>` with the SAME string. Verified live on
 * /revision/texts/hamlet/read: two h1 elements, both reading "Hamlet".
 * /revision/texts/macbeth/read mounts the viewer directly and was correct,
 * which is why the viewer keeps h1 as its default and the READER passes h2.
 *
 * Neither is a ranking catastrophe on its own. Both are the kind of thing an
 * audit tool reports on every page of a section, and a missing h1 is a real
 * failure for a screen reader, which announces the page with no heading at all.
 *
 * MUTATIONS RUN, each verified to have altered the file first: reverting
 * GameShell to h2 fails; removing `titleAs="h2"` from FullTextReader fails;
 * changing the viewer's default from h1 to h2 fails.
 */

vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (k: string) => k }))

const GAMESHELL = readFileSync('src/components/games/GameShell.tsx', 'utf8')
const READER = readFileSync('src/components/study/FullTextReader.tsx', 'utf8')
const GAMES_HUB = readFileSync('src/app/games/page.tsx', 'utf8')
const PICKER = readFileSync('src/components/board/BoardSelectorSection.tsx', 'utf8')
const GATE = readFileSync('src/components/board/BoardGate.tsx', 'utf8')

const text: TextData = {
  title: 'Hamlet',
  author: 'William Shakespeare',
  type: 'play',
  sections: [{ id: 's1', title: 'Act 1, Scene 1', content: '<p>Who’s there?</p>' }],
}

describe('a page has exactly one h1', () => {
  it('the text viewer is an h1 when it is the page heading', () => {
    const { container } = render(<InteractiveTextViewer data={text} storageKey="hamlet" />)
    const h1s = container.querySelectorAll('h1')
    expect(h1s).toHaveLength(1)
    expect(h1s[0]!.textContent).toBe('Hamlet')
  })

  it('and an h2 when the page already has one above it', () => {
    const { container } = render(
      <InteractiveTextViewer data={text} storageKey="hamlet" titleAs="h2" />,
    )
    expect(container.querySelectorAll('h1')).toHaveLength(0)
    const h2 = [...container.querySelectorAll('h2')].find((n) => n.textContent === 'Hamlet')
    expect(h2, 'the title vanished instead of changing level').toBeTruthy()
  })

  it('and FullTextReader actually passes it', () => {
    // The prop is worthless if the one caller that needs it does not use it.
    expect(READER).toMatch(/titleAs="h2"/)
    expect(READER, 'the reader lost its own page heading').toMatch(/as="h1"/)
  })

  it('a game names itself with an h1', () => {
    expect(GAMESHELL, 'the game title is back to an h2').toMatch(
      /<h1 className="text-lg font-bold text-foreground">\{title\}<\/h1>/,
    )
  })

  it('and the games hub keeps its own, so nothing gains a second', () => {
    // The counterweight. /games renders its own h1 and does NOT use GameShell;
    // if it ever did, promoting the shell's heading would put two on it.
    expect(GAMES_HUB).toMatch(/<h1/)
    expect(GAMES_HUB, '/games now uses GameShell and would have two h1s').not.toMatch(/<GameShell/)
  })

  it('the board picker adds no h1 to the page it gates', () => {
    // Found 26 September 2026: a visitor with no board chosen, and any
    // rendering crawler, got the page's own h1 plus the picker's step h1 on
    // board-gated pages (/revision/texts/macbeth, /igcse/edexcel/poetry). The
    // picker only renders inside BoardGate, under the gate's h2, so its steps
    // are h3s.
    expect(PICKER, 'the picker renders an h1 again').not.toMatch(/<h1[\s>]/)
    expect(GATE).toMatch(/<h2\s[^>]*id="board-gate-title"/)
    expect(GATE.indexOf('id="board-gate-title"')).toBeLessThan(
      GATE.indexOf('<BoardSelectorSection'),
    )
  })
})
