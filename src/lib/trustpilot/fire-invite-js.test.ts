/**
 * fireTrustpilotInvite — client-side dispatch guarded by the fired-check API.
 */

import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest'
import { fireTrustpilotInvite } from './fire-invite-js'

type TpFn = (...args: unknown[]) => void

declare global {
  interface Window {
    tp?: TpFn
  }
}

afterEach(() => {
  vi.restoreAllMocks()
  delete (window as unknown as { tp?: TpFn }).tp
})

describe('fireTrustpilotInvite', () => {
  beforeEach(() => {
    ;(window as unknown as { tp?: TpFn }).tp = vi.fn()
  })

  it('happy path — fires tp.createInvitation after canFire:true', async () => {
    const fetchSpy = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(
        new Response(JSON.stringify({ canFire: true }), { status: 200 }),
      )
    const res = await fireTrustpilotInvite({
      email: 'a@b.com',
      name: 'Adult',
      referenceId: 'u1',
    })
    expect(fetchSpy).toHaveBeenCalledWith(
      '/api/trustpilot/fired-check',
      expect.objectContaining({ method: 'POST' }),
    )
    expect(window.tp).toHaveBeenCalledWith('createInvitation', expect.any(Object))
    expect(res.fired).toBe(true)
  })

  it('no-op when window.tp is missing', async () => {
    delete (window as unknown as { tp?: TpFn }).tp
    const res = await fireTrustpilotInvite({
      email: 'a@b.com',
      name: 'A',
      referenceId: 'u1',
    })
    expect(res).toEqual({ fired: false, reason: 'tp_not_loaded' })
  })

  it('no-op when fired-check denies', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(
      new Response(
        JSON.stringify({ canFire: false, reason: 'duplicate_trigger_12m' }),
        { status: 200 },
      ),
    )
    const res = await fireTrustpilotInvite({
      email: 'a@b.com',
      name: 'A',
      referenceId: 'u1',
    })
    expect(res.fired).toBe(false)
    expect(res.reason).toBe('duplicate_trigger_12m')
    expect(window.tp).not.toHaveBeenCalled()
  })
})
