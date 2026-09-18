// ─── The transport that carries safeguarding mail ───────────────────────────
//
// Production had no SMTP_* variables, so `sendEmail()` built a nodemailer
// transport with `host: undefined`, every send failed, and the callers of the
// safeguarding alert, the DSAR acknowledgement, the parent-link notice and the
// school invitation all reported success to the user regardless. This test
// exists so that regression cannot happen silently again: it pins which
// transport is chosen in each configuration, including the one where nothing
// is configured at all.
// ────────────────────────────────────────────────────────────────────────────

import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { activeEmailTransport, __resetEmailTransportForTests } from '@/lib/email'

const KEYS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'RESEND_API_KEY'] as const
const saved: Record<string, string | undefined> = {}

beforeEach(() => {
  for (const k of KEYS) {
    saved[k] = process.env[k]
    delete process.env[k]
  }
  __resetEmailTransportForTests()
})

afterEach(() => {
  for (const k of KEYS) {
    if (saved[k] === undefined) delete process.env[k]
    else process.env[k] = saved[k]
  }
  __resetEmailTransportForTests()
})

describe('email transport selection', () => {
  it('uses SMTP when a host is configured', () => {
    process.env.SMTP_HOST = 'smtp.example.com'
    process.env.RESEND_API_KEY = 're_test'
    expect(activeEmailTransport()).toBe('smtp')
  })

  it('falls back to Resend when SMTP is absent, which is production today', () => {
    process.env.RESEND_API_KEY = 're_test'
    expect(activeEmailTransport()).toBe('resend')
  })

  it('treats an empty or whitespace SMTP_HOST as absent', () => {
    process.env.RESEND_API_KEY = 're_test'
    process.env.SMTP_HOST = '   '
    expect(activeEmailTransport()).toBe('resend')
  })

  it('reports none when neither is configured, rather than pretending', () => {
    expect(activeEmailTransport()).toBe('none')
  })

  it('reads the environment per call, so setting SMTP in Vercel needs no deploy', () => {
    expect(activeEmailTransport()).toBe('none')
    process.env.SMTP_HOST = 'smtp.example.com'
    expect(activeEmailTransport()).toBe('smtp')
    delete process.env.SMTP_HOST
    expect(activeEmailTransport()).toBe('none')
  })
})
