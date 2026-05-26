/**
 * InviteJS script - no-op without env key, loads once when present.
 */

import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { TrustpilotInviteScript } from './TrustpilotInviteScript'

afterEach(() => {
  cleanup()
  document.body.innerHTML = ''
  delete (window as unknown as { __tpLoaded?: boolean }).__tpLoaded
})

describe('TrustpilotInviteScript', () => {
  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY
  })

  it('no-ops when key is empty', () => {
    render(<TrustpilotInviteScript />)
    expect(document.querySelectorAll('script[src*="invitejs.trustpilot.com"]').length).toBe(0)
  })

  it('appends the invitejs script exactly once across re-renders', () => {
    process.env.NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY = 'v5nUhdVBgegtcCLG'
    const { rerender } = render(<TrustpilotInviteScript />)
    rerender(<TrustpilotInviteScript />)
    rerender(<TrustpilotInviteScript />)
    const scripts = document.querySelectorAll('script[src*="invitejs.trustpilot.com"]')
    expect(scripts.length).toBe(1)
  })
})
