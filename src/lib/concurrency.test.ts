// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { mapWithConcurrency } from './concurrency'

/** A call that resolves on a later tick, so several can be in flight at once. */
const later = <T>(value: T) => new Promise<T>((resolve) => setTimeout(() => resolve(value), 1))

describe('mapWithConcurrency', () => {
  it('returns the results in input order, whatever order they finish in', async () => {
    const delays = [5, 1, 3, 1, 4, 2]
    const out = await mapWithConcurrency(
      delays,
      3,
      (ms, i) => new Promise<number>((resolve) => setTimeout(() => resolve(i), ms)),
    )
    expect(out).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('never has more than `limit` calls in flight, and does use the room', async () => {
    let inFlight = 0
    let most = 0
    await mapWithConcurrency(
      Array.from({ length: 20 }, (_, i) => i),
      5,
      async (i) => {
        inFlight += 1
        most = Math.max(most, inFlight)
        await later(i)
        inFlight -= 1
      },
    )
    expect(most).toBe(5)
  })

  it('starts nothing new once shouldStart says no, and leaves those results undefined', async () => {
    let started = 0
    const out = await mapWithConcurrency(
      Array.from({ length: 10 }, (_, i) => i),
      2,
      async (i) => {
        started += 1
        return later(i * 10)
      },
      () => started < 4,
    )
    expect(started).toBe(4)
    expect(out.slice(0, 4)).toEqual([0, 10, 20, 30])
    expect(out.slice(4)).toEqual(Array(6).fill(undefined))
  })

  it('handles an empty list', async () => {
    expect(await mapWithConcurrency([], 5, async () => 1)).toEqual([])
  })
})
