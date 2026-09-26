// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render } from '@testing-library/react'

import { LazyPlate, PLATE_LOAD_MARGIN } from '@/components/comics/linocut/lazy-plate'
import { PLATE_WAIT_MS, PlayOnView } from '@/components/comics/linocut/play-on-view'
import type { PlateRef } from '@/lib/comics/types'

/**
 * A linocut piece plays its motion with its drawing, not before it.
 *
 * WHAT BROKE (26 September 2026). When the drawings became files fetched as
 * they near the screen (src/components/comics/linocut/lazy-plate.tsx), a
 * piece could scroll into view before its file had arrived, and PlayOnView
 * played it at once: measured at 50 KB/s, the frame's wipe, caption and
 * quotation played over an empty sheet, and the drawing appeared whole 1.3
 * seconds later with its own motion out of step. Now the LazyPlate holds the
 * piece armed until the file is here, and lets go if the file fails or has
 * not come within PLATE_WAIT_MS of the piece coming into view.
 *
 * What each check would report if the hold were missing: the first would see
 * lc-play before the drawing; the last two would see a piece armed for ever,
 * its caption never shown, if the hold were never released.
 *
 * The browser is simulated: IntersectionObserver is a fake the test drives,
 * and fetch returns promises the test settles.
 */

type Settle = { resolve: (text: string) => void; reject: (e: Error) => void }
const inFlight = new Map<string, Settle>()

class FakeObserver {
  static all: FakeObserver[] = []
  targets = new Set<Element>()
  constructor(
    public cb: IntersectionObserverCallback,
    public opts: IntersectionObserverInit = {},
  ) {
    FakeObserver.all.push(this)
  }
  observe(el: Element) {
    this.targets.add(el)
  }
  unobserve(el: Element) {
    this.targets.delete(el)
  }
  disconnect() {
    this.targets.clear()
  }
  takeRecords() {
    return []
  }
}

/** Bring the piece near the screen (the plate's own observer) or into view (PlayOnView's). */
function reach(which: 'near' | 'in view') {
  for (const io of [...FakeObserver.all]) {
    const isPlate = io.opts.rootMargin === PLATE_LOAD_MARGIN
    if ((which === 'near') !== isPlate) continue
    const entries = [...io.targets].map((target) => ({ isIntersecting: true, target }))
    if (entries.length) io.cb(entries as IntersectionObserverEntry[], io as never)
  }
}

let n = 0
/** A plate with a URL of its own, so lazy-plate's module cache never carries one test into the next. */
function plate(): PlateRef {
  n++
  return {
    src: `/comics/test/piece-${n}.000000000000.svg`,
    width: 860,
    height: 340,
    alt: `Piece ${n}`,
  }
}
const drawing = (p: PlateRef) =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="lc-plate" viewBox="0 0 ${p.width} ${p.height}" role="img" aria-label="${p.alt}"><g class="lc-push"></g></svg>`

function mount(p: PlateRef) {
  const { container } = render(
    <PlayOnView>
      <figure className="lc-sheet">
        <LazyPlate plate={p} />
      </figure>
    </PlayOnView>,
  )
  const wrapper = container.firstElementChild as HTMLElement
  const box = container.querySelector('.lc-art') as HTMLElement
  return { wrapper, box }
}

beforeEach(() => {
  FakeObserver.all = []
  vi.stubGlobal('IntersectionObserver', FakeObserver)
  vi.stubGlobal(
    'fetch',
    vi.fn(
      (src: string) =>
        new Promise((resolve, reject) => {
          inFlight.set(src, {
            resolve: (text) => resolve({ ok: true, status: 200, text: async () => text }),
            reject,
          })
        }),
    ),
  )
  vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => {
  cleanup()
  vi.useRealTimers()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
  inFlight.clear()
})

describe('a linocut piece and its drawing', () => {
  it('stays armed in view until its drawing arrives, then plays with it', async () => {
    const p = plate()
    const { wrapper, box } = mount(p)
    // The accessible box and its shape are there before anything loads.
    expect(box.getAttribute('role')).toBe('img')
    expect(box.getAttribute('aria-label')).toBe(p.alt)
    expect(box.style.aspectRatio).toBe('860 / 340')
    expect(box.querySelector('img')?.getAttribute('src')).toBe(p.src)

    await act(async () => reach('near'))
    expect(inFlight.has(p.src), 'the file is fetched as the piece nears the screen').toBe(true)
    await act(async () => reach('in view'))
    expect(wrapper.className, 'in view, drawing not here yet').toBe('lc-armed')

    await act(async () => inFlight.get(p.src)!.resolve(drawing(p)))
    expect(box.querySelector('svg.lc-plate'), 'the drawing is inlined').not.toBeNull()
    expect(box.querySelector('img')).toBeNull()
    expect(wrapper.className, 'and the piece plays').toBe('lc-play')
    expect(box.getAttribute('aria-label')).toBe(p.alt)
  })

  it('plays at once when its drawing arrived before it came into view', async () => {
    const p = plate()
    const { wrapper, box } = mount(p)
    await act(async () => reach('near'))
    await act(async () => inFlight.get(p.src)!.resolve(drawing(p)))
    expect(box.querySelector('svg.lc-plate')).not.toBeNull()
    expect(wrapper.className, 'off screen, it waits for the reader').toBe('lc-armed')
    await act(async () => reach('in view'))
    expect(wrapper.className).toBe('lc-play')
  })

  it('plays with the <img> when its drawing cannot be fetched', async () => {
    const p = plate()
    const { wrapper, box } = mount(p)
    await act(async () => reach('near'))
    await act(async () => reach('in view'))
    expect(wrapper.className).toBe('lc-armed')
    await act(async () => inFlight.get(p.src)!.reject(new TypeError('Failed to fetch')))
    expect(wrapper.className, 'a failure must not hold the caption back').toBe('lc-play')
    expect(box.querySelector('img')?.getAttribute('src')).toBe(p.src)
    expect(box.getAttribute('aria-label')).toBe(p.alt)
  })

  it('does not inline a response that is not a plate', async () => {
    const p = plate()
    const { wrapper, box } = mount(p)
    await act(async () => reach('near'))
    await act(async () => reach('in view'))
    await act(async () => inFlight.get(p.src)!.resolve('<!DOCTYPE html><html>Not found</html>'))
    expect(box.querySelector('svg')).toBeNull()
    expect(box.querySelector('img')).not.toBeNull()
    expect(wrapper.className).toBe('lc-play')
  })

  it(`plays anyway ${PLATE_WAIT_MS} ms after coming into view if its drawing is still on its way`, async () => {
    vi.useFakeTimers()
    const p = plate()
    const { wrapper, box } = mount(p)
    await act(async () => reach('near'))
    await act(async () => reach('in view'))
    await act(async () => vi.advanceTimersByTime(PLATE_WAIT_MS - 100))
    expect(wrapper.className).toBe('lc-armed')
    await act(async () => vi.advanceTimersByTime(200))
    expect(wrapper.className, 'the caption is never held back for long').toBe('lc-play')
    // And the drawing, when it does come, is inlined without the piece re-arming.
    await act(async () => inFlight.get(p.src)!.resolve(drawing(p)))
    expect(box.querySelector('svg.lc-plate')).not.toBeNull()
    expect(wrapper.className).toBe('lc-play')
  })
})
