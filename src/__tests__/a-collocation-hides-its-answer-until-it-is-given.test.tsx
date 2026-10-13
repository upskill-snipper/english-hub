// @vitest-environment jsdom
//
// Renders the real page and plays a whole round: what leaked was text on
// screen while a question was open, so that is what is asserted.
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'

/**
 * A collocation question does not name its answer before it is given.
 *
 * THE DEFECT (found 13 October 2026). /games/collocations-challenge showed the
 * item's collocation family in a badge beside the accuracy figure while each
 * question was open. For the 57 make, do, have and take items the family IS
 * the answer, so "MAKE" sat above "I need to ? a decision" and the student had
 * only to press the button carrying the same word. The badge now appears with
 * the feedback.
 *
 * WHY A RENDERED TEST AND NOT A SOURCE RULE. The leak was in what reached the
 * screen, and only on some items: on the fifteen noun items the same badge
 * said "Noun partner" and gave nothing away. A source rule could forbid the
 * one expression that did it and nothing else. This fails on anything that
 * names the answer early, whatever produces it.
 *
 * THE RULE. While a question is open, no text outside its option buttons names
 * the answer, unless it names every option alike: the shell's description,
 * "Master make, do, have and take", is an instruction, not a hint.
 */

vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))
vi.mock('@/hooks/useBoard', () => ({ useBoard: () => ({ board: null }) }))
vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}))

const { default: CollocationsChallengePage } =
  await import('@/app/games/collocations-challenge/page')

const VERBS = ['make', 'do', 'have', 'take']

/** Whole word, any case: a badge reading "MAKE" names "make". */
function names(text: string, word: string): boolean {
  return new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text)
}

/** The option buttons: every button but the shell's, whose labels are keys here. */
function optionButtons(): HTMLElement[] {
  return screen
    .getAllByRole('button')
    .filter((b) => b.tagName === 'BUTTON' && !b.textContent?.trim().startsWith('games.shell.'))
}

/** Every piece of text on the page that is not inside one of those buttons. */
function textOutside(buttons: HTMLElement[]): string[] {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  const found: string[] = []
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.textContent?.trim()
    if (text && !buttons.some((b) => b.contains(node))) found.push(text)
  }
  return found
}

beforeEach(() => {
  vi.useFakeTimers()
  // The page deals with Math.random. Seeded, every run plays the same round.
  let seed = 20261013
  vi.spyOn(Math, 'random').mockImplementation(() => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  })
  // GameShell posts a finished round to the server. Nothing here may.
  vi.stubGlobal(
    'fetch',
    vi.fn(() => Promise.resolve({ ok: false, status: 401 })),
  )
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('a collocation question', () => {
  it('names its answer only once it has been given', () => {
    render(<CollocationsChallengePage />)
    fireEvent.click(screen.getByRole('button', { name: 'games.shell.start_game' }))
    // Read from the counter's own element: the page's text runs straight on
    // into "0% accuracy", and "of 15" became "of 150".
    const counter = screen.getByText(/^Question 1 of \d+$/).textContent ?? ''
    const roundSize = Number(/of (\d+)$/.exec(counter)?.[1])

    const leaks: string[] = []
    let asked = 0
    let verbItems = 0
    while (!screen.queryByRole('button', { name: 'games.shell.play_again' }) && asked < 50) {
      const buttons = optionButtons()
      const offered = buttons.map((b) => b.textContent?.trim() ?? '')
      expect(offered, `question ${asked + 1}`).toHaveLength(4)
      const before = textOutside(buttons)

      fireEvent.click(buttons[0])
      // The feedback quotes the answer, so this is where the test learns it.
      const answer = /“([^”]+)”/.exec(document.body.textContent ?? '')?.[1] ?? ''
      expect(answer, `question ${asked + 1} gave no feedback`).not.toBe('')
      const singlesOut = (text: string) =>
        names(text, answer) && !offered.every((o) => names(text, o))

      for (const text of before.filter(singlesOut)) leaks.push(`${answer}: "${text}"`)
      // Vacuity guard. Answered, the page does name it (the gap fills in), so
      // a check that found nothing beforehand could have seen it there.
      expect(textOutside(buttons).some(singlesOut), `question ${asked + 1}`).toBe(true)

      asked++
      if (VERBS.every((v) => offered.includes(v))) verbItems++
      // Past the page's pause before the next question.
      act(() => {
        vi.advanceTimersByTime(5000)
      })
    }

    // Vacuity guards: a whole round was played, and it held verb items, the
    // only ones on which the family is the answer.
    expect(asked).toBe(roundSize)
    expect(verbItems).toBeGreaterThan(0)
    expect(leaks).toEqual([])
  })
})
