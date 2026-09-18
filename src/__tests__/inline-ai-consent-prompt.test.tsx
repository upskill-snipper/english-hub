import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react'

/**
 * The inline AI consent prompt.
 *
 * A learner who pressed "get feedback" used to be answered with a 403 and a
 * sentence telling them to go and change a setting somewhere else. This
 * panel replaces that dead end with the decision itself, shown where the
 * block happened. The rules it must never break are the subject of these
 * tests:
 *
 *   1. consent is an ACTIVE act - nothing pre-ticked, nothing implied by
 *      dismissing the panel, and the grant is recorded as EXPLICIT against
 *      the version the SERVER reports;
 *   2. a child without guardian approval is NEVER offered a self-grant;
 *   3. an unknown date of birth is asked for, not guessed at;
 *   4. the panel appears for a consent refusal and for no other 403.
 */

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

import { InlineAIConsentPrompt } from '@/components/consent/InlineAIConsentPrompt'
import { readConsentRefusal } from '@/components/consent/ai-consent-refusal'
import { CONSENT_REFUSAL_CODES } from '@/lib/consent-codes'

// ─── fetch double ───────────────────────────────────────────────────────

interface Call {
  url: string
  method: string
  body: Record<string, unknown> | null
}

let calls: Call[]
let grantableVersion: string | null
let grantOk: boolean
let dobOk: boolean

function installFetch() {
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string, init?: RequestInit) => {
      const method = init?.method ?? 'GET'
      const body = init?.body ? (JSON.parse(String(init.body)) as Record<string, unknown>) : null
      calls.push({ url, method, body })

      if (url === '/api/consent' && method === 'GET') {
        if (grantableVersion === null) {
          return { ok: false, status: 500, json: async () => ({ error: 'nope' }) } as Response
        }
        return {
          ok: true,
          status: 200,
          json: async () => ({
            consents: [],
            grantable: [
              { consentType: 'AI_PROCESSING', version: grantableVersion, granted: false },
              { consentType: 'MARKETING', version: '1.0', granted: false },
            ],
          }),
        } as Response
      }

      if (url === '/api/consent' && method === 'POST') {
        return grantOk
          ? ({
              ok: true,
              status: 201,
              json: async () => ({ consent: { id: 'cns_1' } }),
            } as Response)
          : ({
              ok: false,
              status: 503,
              json: async () => ({ error: 'Nothing has been saved.' }),
            } as Response)
      }

      if (url === '/api/profile/dob' && method === 'POST') {
        return dobOk
          ? ({ ok: true, status: 200, json: async () => ({ ok: true, rows: 1 }) } as Response)
          : ({
              ok: false,
              status: 400,
              json: async () => ({ error: 'Invalid date of birth' }),
            } as Response)
      }

      throw new Error(`unexpected fetch: ${method} ${url}`)
    }),
  )
}

beforeEach(() => {
  calls = []
  grantableVersion = '1.0'
  grantOk = true
  dobOk = true
  installFetch()
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

const consentPosts = () => calls.filter((c) => c.url === '/api/consent' && c.method === 'POST')

// ─── The self-grant path (an adult, or a 16+ learner) ───────────────────

describe('InlineAIConsentPrompt - AI processing consent', () => {
  const refusal = {
    code: CONSENT_REFUSAL_CODES.AI_PROCESSING_REQUIRED,
    message: 'You have not given consent for AI processing yet.',
  }

  it('explains what AI is used for, what is sent, and that it is not a certified grade', async () => {
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={vi.fn()} />)

    await waitFor(() => expect(screen.getByRole('button', { name: /I agree/i })).toBeTruthy())

    const text = document.body.textContent ?? ''
    expect(text).toMatch(/mark(ing)? the work you submit/i)
    expect(text).toMatch(/the answer you submit/i)
    expect(text).toMatch(/not a certified grade/i)

    const hrefs = Array.from(document.querySelectorAll('a')).map((a) => a.getAttribute('href'))
    expect(hrefs).toContain('/legal/ai-transparency')
    expect(hrefs).toContain('/legal/privacy')
    // Withdrawal must stay as easy as granting.
    expect(hrefs).toContain('/dashboard/consent')
  })

  it('offers nothing pre-ticked and nothing switched on before the click', async () => {
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={vi.fn()} />)
    await waitFor(() => expect(screen.getByRole('button', { name: /I agree/i })).toBeTruthy())

    expect(document.querySelectorAll('input[type="checkbox"]').length).toBe(0)
    expect(document.querySelectorAll('input[type="radio"]').length).toBe(0)
    // Rendering the panel must not write anything.
    expect(consentPosts()).toHaveLength(0)
  })

  it('records an EXPLICIT grant against the server version, then retries the action', async () => {
    const onResolved = vi.fn()
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={onResolved} />)

    const button = await screen.findByRole('button', { name: /I agree/i })
    fireEvent.click(button)

    await waitFor(() => expect(onResolved).toHaveBeenCalledTimes(1))

    expect(consentPosts()).toHaveLength(1)
    expect(consentPosts()[0].body).toEqual({
      consentType: 'AI_PROCESSING',
      version: '1.0',
      granted: true,
      method: 'EXPLICIT',
    })
  })

  it('never invents a policy version: with none from the server it records nothing', async () => {
    grantableVersion = null
    const onResolved = vi.fn()
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={onResolved} />)

    await waitFor(() => expect(document.body.textContent).toMatch(/could not load/i))

    expect(screen.queryByRole('button', { name: /I agree/i })).toBeNull()
    expect(consentPosts()).toHaveLength(0)
    expect(onResolved).not.toHaveBeenCalled()
    // It names the control that can still record it.
    const hrefs = Array.from(document.querySelectorAll('a')).map((a) => a.getAttribute('href'))
    expect(hrefs).toContain('/dashboard/consent')
  })

  it('dismissing records nothing and does not retry', async () => {
    const onResolved = vi.fn()
    const onDismiss = vi.fn()
    render(
      <InlineAIConsentPrompt refusal={refusal} onResolved={onResolved} onDismiss={onDismiss} />,
    )

    const notNow = await screen.findByRole('button', { name: /not now/i })
    fireEvent.click(notNow)

    expect(onDismiss).toHaveBeenCalledTimes(1)
    expect(onResolved).not.toHaveBeenCalled()
    expect(consentPosts()).toHaveLength(0)
  })

  it('does not claim a grant the server refused', async () => {
    grantOk = false
    const onResolved = vi.fn()
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={onResolved} />)

    fireEvent.click(await screen.findByRole('button', { name: /I agree/i }))

    await waitFor(() => expect(screen.getByRole('alert').textContent).toMatch(/Nothing has been/i))
    expect(onResolved).not.toHaveBeenCalled()
  })
})

// ─── A minor without guardian consent ───────────────────────────────────

describe('InlineAIConsentPrompt - a child without guardian approval', () => {
  const refusal = {
    code: CONSENT_REFUSAL_CODES.PARENTAL_CONSENT_REQUIRED,
    message:
      'Parental consent is required before you can use this feature. We have emailed your parent or guardian at l***@example.com.',
  }

  it('offers no self-grant of any kind', async () => {
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={vi.fn()} onDismiss={vi.fn()} />)

    expect(screen.queryByRole('button', { name: /I agree/i })).toBeNull()
    expect(document.querySelectorAll('input[type="checkbox"]').length).toBe(0)

    // Press everything the panel offers. None of it may write a consent.
    for (const button of screen.queryAllByRole('button')) fireEvent.click(button)
    await waitFor(() => expect(consentPosts()).toHaveLength(0))
    expect(calls.filter((c) => c.url === '/api/consent')).toHaveLength(0)
  })

  it('shows the guardian route and keeps the learner where they are', () => {
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={vi.fn()} />)

    expect(document.body.textContent).toContain('l***@example.com')
    const hrefs = Array.from(document.querySelectorAll('a')).map((a) => a.getAttribute('href'))
    expect(hrefs).toContain('/consent/status')
    expect(document.body.textContent).toMatch(/parent or guardian/i)
  })
})

// ─── An account with no date of birth ───────────────────────────────────

describe('InlineAIConsentPrompt - no date of birth held', () => {
  const refusal = {
    code: CONSENT_REFUSAL_CODES.DATE_OF_BIRTH_REQUIRED,
    message: 'We do not hold your date of birth.',
  }

  it('asks for the date instead of offering a grant', () => {
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={vi.fn()} />)

    expect(screen.queryByRole('button', { name: /I agree/i })).toBeNull()
    expect(document.querySelector('input[type="date"]')).toBeTruthy()
    expect(consentPosts()).toHaveLength(0)
  })

  it('saves the date and retries, without recording any consent', async () => {
    const onResolved = vi.fn()
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={onResolved} />)

    const input = document.querySelector('input[type="date"]') as HTMLInputElement
    fireEvent.change(input, { target: { value: '2010-05-01' } })
    fireEvent.click(screen.getByRole('button', { name: /save date of birth/i }))

    await waitFor(() => expect(onResolved).toHaveBeenCalledTimes(1))

    const dobCalls = calls.filter((c) => c.url === '/api/profile/dob')
    expect(dobCalls).toHaveLength(1)
    expect(dobCalls[0].body).toEqual({ dateOfBirth: '2010-05-01' })
    expect(consentPosts()).toHaveLength(0)
  })

  it('does not claim a save the server refused', async () => {
    dobOk = false
    const onResolved = vi.fn()
    render(<InlineAIConsentPrompt refusal={refusal} onResolved={onResolved} />)

    const input = document.querySelector('input[type="date"]') as HTMLInputElement
    fireEvent.change(input, { target: { value: '2010-05-01' } })
    fireEvent.click(screen.getByRole('button', { name: /save date of birth/i }))

    await waitFor(() => expect(screen.getByRole('alert').textContent).toMatch(/Invalid date/i))
    expect(onResolved).not.toHaveBeenCalled()
  })
})

// ─── Reading the refusal off a response ─────────────────────────────────

describe('readConsentRefusal', () => {
  it('recognises each consent refusal code on a 403', () => {
    for (const code of Object.values(CONSENT_REFUSAL_CODES)) {
      expect(readConsentRefusal(403, { error: 'blocked', code })).toEqual({
        code,
        message: 'blocked',
      })
    }
  })

  it('returns null for a 403 that is not about consent', () => {
    // The subscription paywall, the AI opt-out and anything else: all 403.
    expect(
      readConsentRefusal(403, { error: 'This is a Premium feature. Please upgrade.' }),
    ).toBeNull()
    expect(
      readConsentRefusal(403, { error: 'AI features are disabled for your account.' }),
    ).toBeNull()
    expect(readConsentRefusal(403, { error: 'blocked', code: 'something_else' })).toBeNull()
  })

  it('returns null for any other status, even carrying a consent code', () => {
    expect(
      readConsentRefusal(402, { error: 'x', code: CONSENT_REFUSAL_CODES.AI_PROCESSING_REQUIRED }),
    ).toBeNull()
    expect(
      readConsentRefusal(500, { error: 'x', code: CONSENT_REFUSAL_CODES.AI_PROCESSING_REQUIRED }),
    ).toBeNull()
    expect(readConsentRefusal(403, null)).toBeNull()
    expect(readConsentRefusal(403, 'not json')).toBeNull()
  })
})

// ─── An unknown code must not fall through to the self-grant ────────────

describe('InlineAIConsentPrompt - unknown code', () => {
  it('renders nothing rather than offering consent', () => {
    const { container } = render(
      <InlineAIConsentPrompt
        refusal={{ code: 'invented_code', message: 'x' } as never}
        onResolved={vi.fn()}
      />,
    )
    expect(container.innerHTML).toBe('')
    expect(consentPosts()).toHaveLength(0)
  })
})
