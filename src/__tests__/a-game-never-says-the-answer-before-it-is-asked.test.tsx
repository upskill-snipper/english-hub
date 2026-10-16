// @vitest-environment jsdom
//
// Two EAL games spoke the answer before the student had answered
// (16 October 2026). In the Classroom shows a picture and asks for its word,
// and said that word aloud 0.3 seconds after the picture appeared. Numbers and
// Time shows "7", "1st" or "1999" and asks how to say it, and read the prompt
// aloud as it appeared, which is the answer. Both now speak those only once the
// question is answered, as part of the feedback, and keep their Listen button
// hidden until then. A prompt that gives nothing away ("Where is it?",
// "quarter past seven") is still read at once.
//
// What is asserted (nothing spoken before an answer, the word spoken after it)
// exists only once the real page runs its effects, so it is rendered here with
// speech mocked and the clock faked, through whole rounds.
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'

vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))
vi.mock('@/hooks/useBoard', () => ({ useBoard: () => ({ board: null }) }))
vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}))

const Classroom = (await import('@/app/games/classroom-objects/page')).default
const NumbersAndTime = (await import('@/app/games/numbers-and-time/page')).default

let spoken: string[] = []

/**
 * Both pages deal their questions at random. A seeded generator makes every
 * run deal the same rounds, so the counts below cannot fall short by chance
 * (they did, three runs in ten, with Math.random).
 */
function seeded(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const wait = (ms: number) =>
  act(async () => {
    vi.advanceTimersByTime(ms)
  })

beforeEach(() => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockImplementation(seeded(20261016))
  spoken = []
  class Utterance {
    text: string
    lang = ''
    rate = 1
    constructor(text: string) {
      this.text = text
    }
  }
  vi.stubGlobal('SpeechSynthesisUtterance', Utterance)
  Object.defineProperty(window, 'speechSynthesis', {
    configurable: true,
    value: { cancel: () => {}, speak: (u: Utterance) => spoken.push(u.text) },
  })
  vi.stubGlobal(
    'fetch',
    vi.fn(() => Promise.resolve({ ok: true, status: 200 })),
  )
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
  vi.useRealTimers()
})

function button(label: string): HTMLButtonElement {
  const b = [...document.querySelectorAll('button')].find((x) => x.textContent?.trim() === label)
  if (!b) throw new Error(`no ${label} button`)
  return b as HTMLButtonElement
}

const options = (c: HTMLElement) => [...c.querySelectorAll('.grid button')] as HTMLButtonElement[]

describe('In the Classroom', () => {
  it('says a picture word only after the answer, and reads a Where-is-it question at once', async () => {
    let pictures = 0
    let wheres = 0
    for (let round = 0; round < 6; round++) {
      const { container } = render(<Classroom />)
      fireEvent.click(screen.getByRole('button', { name: 'games.shell.start_game' }))
      for (let q = 1; q <= 15; q++) {
        const isWhere = screen.queryByText('Where is it?') !== null
        const prompt = container.querySelector('p.text-base')?.textContent ?? ''
        const before = spoken.length
        await wait(400)
        if (isWhere) {
          wheres++
          expect(spoken.slice(before), `q${q}: the question is read`).toEqual([prompt])
        } else {
          pictures++
          expect(spoken.slice(before), `q${q}: nothing said before the answer`).toEqual([])
          expect(button('Listen').disabled).toBe(true)
        }
        const opts = options(container)
        fireEvent.click(opts[q % 2 ? 0 : 3])
        const after = spoken.length
        await wait(400)
        if (!isWhere) {
          const right = opts.find((b) => b.className.includes('border-emerald-500'))?.textContent
          expect(spoken.slice(after), `q${q}: the word after the answer`).toEqual([right])
          expect(button('Listen').disabled).toBe(false)
        }
        fireEvent.click(button(q === 15 ? 'See your results' : 'Next question'))
        await wait(5)
      }
      cleanup()
    }
    expect(pictures).toBeGreaterThan(40)
    expect(wheres).toBeGreaterThanOrEqual(3)
  })
})

describe('Numbers and Time', () => {
  it('reads a prompt in figures only after the answer, and a prompt in words at once', async () => {
    let figures = 0
    let words = 0
    for (let round = 0; round < 6; round++) {
      const { container } = render(<NumbersAndTime />)
      fireEvent.click(screen.getByRole('button', { name: 'games.shell.start_game' }))
      for (let q = 1; q <= 15; q++) {
        const prompt = container.querySelector('p.text-4xl')?.textContent?.trim() ?? ''
        const givesAnswer = /\d/.test(prompt)
        const before = spoken.length
        await wait(400)
        if (givesAnswer) {
          figures++
          expect(spoken.slice(before), `"${prompt}": nothing said before the answer`).toEqual([])
          expect(button('Hear it').disabled).toBe(true)
        } else {
          words++
          expect(spoken.slice(before), `"${prompt}" is read at once`).toEqual([prompt])
        }
        fireEvent.click(options(container)[q % 2 ? 0 : 3])
        const after = spoken.length
        await wait(400)
        if (givesAnswer) {
          expect(spoken.slice(after), `"${prompt}" read with the feedback`).toEqual([prompt])
          expect(button('Hear it').disabled).toBe(false)
        }
        fireEvent.click(button(q === 15 ? 'See your results' : 'Next question'))
        await wait(5)
      }
      cleanup()
    }
    expect(figures).toBeGreaterThan(50)
    expect(words).toBeGreaterThan(5)
  })
})
