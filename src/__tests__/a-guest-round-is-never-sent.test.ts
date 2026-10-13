// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useAuthStore } from '@/store/auth-store'
import { sendRound, toItem, toKind } from '@/components/games/game-round'
import { itemId } from '@/lib/game-results/types'

/**
 * The guest rule and the typed-text rule of src/components/games/game-round.tsx.
 *
 * Every game page tells a guest their scores stay in the browser and nothing
 * is sent. The old GameShell save posted a guest's score anyway and took the
 * server's 401 as the answer. sendRound sends nothing at all without a
 * signed-in student, checked in the one place every round passes.
 *
 * And a row about a child holds no text the child typed, no name and no
 * quotation: question ids are hashes, and a chosen option survives only as a
 * short label from a list.
 */

const fetchSpy = vi.fn(async () => new Response(null, { status: 204 }))

beforeEach(() => {
  fetchSpy.mockClear()
  vi.stubGlobal('fetch', fetchSpy)
})
afterEach(() => {
  vi.unstubAllGlobals()
  useAuthStore.setState({ user: null })
})

const ROUND = {
  source: 'skills' as const,
  activity: 'speed-analysis',
  items: [{ i: itemId('extract one'), k: 'metaphor', c: 1 as const }],
}

describe('sendRound', () => {
  it('sends nothing for a guest', () => {
    useAuthStore.setState({ user: null })
    expect(sendRound(ROUND)).toBeNull()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('sends a signed-in student’s round, with a round id the server can de-duplicate on', () => {
    useAuthStore.setState({ user: { id: 'u1' } as never })
    const id = sendRound(ROUND)
    expect(id).toMatch(/^[A-Za-z0-9-]{8,64}$/)
    expect(fetchSpy).toHaveBeenCalledOnce()
    const [url, init] = fetchSpy.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe('/api/games/rounds')
    const body = JSON.parse(String(init.body))
    expect(body).toMatchObject({ clientRoundId: id, source: 'skills', activity: 'speed-analysis' })
    // The same id when the caller passes it back: stored once.
    expect(sendRound({ ...ROUND, clientRoundId: id! })).toBe(id)
  })

  it('never throws, even when the network does', () => {
    useAuthStore.setState({ user: { id: 'u1' } as never })
    fetchSpy.mockRejectedValueOnce(new Error('offline'))
    expect(() => sendRound(ROUND)).not.toThrow()
  })
})

describe('an answer as it is stored', () => {
  it('carries a hash of the question, never its words', () => {
    const item = toItem(
      { question: 'Fair is foul, and foul is fair', correct: true },
      'literary-devices',
    )
    expect(item.i).toBe(itemId('Fair is foul, and foul is fair'))
    expect(JSON.stringify(item)).not.toContain('foul')
  })

  it('keeps a chosen label only on a wrong answer, and only if it looks like a label', () => {
    expect(toItem({ question: 'q', correct: false, chose: 'Simile' }, 'x').w).toBe('Simile')
    expect(toItem({ question: 'q', correct: true, chose: 'Simile' }, 'x').w).toBeUndefined()
    // A sentence a student typed is not a label from a list.
    const typed = 'i think its the one where he says the knocking at the gate bit'
    expect(toItem({ question: 'q', correct: false, chose: typed }, 'x').w).toBeUndefined()
    expect(toItem({ question: 'q', correct: false, chose: '<b>x</b>' }, 'x').w).toBeUndefined()
  })

  it('turns a tag into a stored kind, or falls back', () => {
    expect(toKind('Apostrophe for possession', 'f')).toBe('apostrophe-for-possession')
    expect(toKind(undefined, 'literary-devices')).toBe('literary-devices')
    expect(toKind('   ', 'f')).toBe('f')
  })
})
