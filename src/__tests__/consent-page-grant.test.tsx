import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react'

/**
 * /dashboard/consent - the grant control.
 *
 * Before 2026-09-17 this page could only GET and DELETE. There was no
 * control anywhere in the product for GIVING AI-processing consent, while
 * every AI route refused the learner for not having it and told them to
 * "update your consent preferences in settings". These tests cover the path
 * a blocked learner actually walks: open the page, give consent, see it on
 * record, withdraw it again.
 */

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

// The page renders through the i18n hook. Returning the key keeps the test
// about behaviour rather than copy, except where the copy is the point.
vi.mock('@/lib/i18n/use-t', async () => {
  const { EN_MESSAGES } =
    await vi.importActual<typeof import('@/lib/i18n/generated/en')>('@/lib/i18n/generated/en')
  return { useT: () => (key: string) => EN_MESSAGES[key] ?? key }
})

interface ConsentApiState {
  consents: unknown[]
  grantable: { consentType: string; version: string; granted: boolean }[]
}

let apiState: ConsentApiState
const posted: Record<string, unknown>[] = []
const deleted: Record<string, unknown>[] = []

const GRANTED_RECORD = {
  id: 'cns_1',
  consentType: 'AI_PROCESSING',
  version: '1.0',
  granted: true,
  grantedAt: '2026-09-17T10:00:00.000Z',
  withdrawnAt: null,
  method: 'EXPLICIT',
  isEssential: false,
}

beforeEach(() => {
  posted.length = 0
  deleted.length = 0
  apiState = {
    consents: [],
    grantable: [{ consentType: 'AI_PROCESSING', version: '1.0', granted: false }],
  }

  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string, init?: RequestInit) => {
      if (url === '/api/consent' && (!init || init.method === undefined)) {
        return { ok: true, json: async () => apiState } as Response
      }
      if (url === '/api/consent' && init?.method === 'POST') {
        const body = JSON.parse(String(init.body))
        posted.push(body)
        // The server is the source of truth; the page re-reads after writing.
        apiState = {
          consents: [GRANTED_RECORD],
          grantable: [{ consentType: 'AI_PROCESSING', version: '1.0', granted: true }],
        }
        return { ok: true, json: async () => ({ consent: GRANTED_RECORD }) } as Response
      }
      if (url === '/api/consent' && init?.method === 'DELETE') {
        deleted.push(JSON.parse(String(init.body)))
        apiState = {
          consents: [],
          grantable: [{ consentType: 'AI_PROCESSING', version: '1.0', granted: false }],
        }
        return { ok: true, json: async () => ({ message: 'withdrawn' }) } as Response
      }
      if (url === '/api/consent/history') {
        return { ok: true, json: async () => ({ history: [] }) } as Response
      }
      throw new Error(`unexpected fetch: ${url}`)
    }),
  )
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('consent page grant control', () => {
  it('offers a way to give AI-processing consent, records it, and offers withdrawal', async () => {
    const { default: ConsentManagementPage } = await import('@/app/dashboard/consent/page')

    render(<ConsentManagementPage />)

    // 1. The control exists, and it is about AI essay analysis.
    const grantButton = await screen.findByRole('button', { name: /give consent/i })
    expect(screen.getByText(/AI Essay Analysis/i)).toBeInTheDocument()

    // 2. Giving consent posts the grant, at the version the server supplied.
    fireEvent.click(grantButton)

    await waitFor(() => expect(posted).toHaveLength(1))
    expect(posted[0]).toEqual({
      consentType: 'AI_PROCESSING',
      version: '1.0',
      granted: true,
      method: 'EXPLICIT',
    })

    // 3. The learner can see it is on record.
    expect(await screen.findByRole('status')).toHaveTextContent(/Consent recorded/i)
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /^withdraw$/i })).toBeInTheDocument(),
    )

    // 4. And can withdraw it again - as easy as giving it (Art.7(3)).
    vi.spyOn(window, 'confirm').mockReturnValue(true)
    fireEvent.click(screen.getByRole('button', { name: /^withdraw$/i }))

    await waitFor(() => expect(deleted).toEqual([{ consentType: 'AI_PROCESSING' }]))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /give consent/i })).toBeInTheDocument(),
    )
  })

  it('claims nothing was recorded when the server refuses', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string, init?: RequestInit) => {
        if (url === '/api/consent' && init?.method === 'POST') {
          return {
            ok: false,
            json: async () => ({ error: 'Nothing has been saved. Contact dpo@theenglishhub.app.' }),
          } as Response
        }
        return { ok: true, json: async () => apiState } as Response
      }),
    )

    const { default: ConsentManagementPage } = await import('@/app/dashboard/consent/page')
    render(<ConsentManagementPage />)

    fireEvent.click(await screen.findByRole('button', { name: /give consent/i }))

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(/nothing has been saved/i)
    // No success message may appear alongside the failure.
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('tells an under-16 that a guardian is also needed', async () => {
    const { default: ConsentManagementPage } = await import('@/app/dashboard/consent/page')
    render(<ConsentManagementPage />)

    expect(await screen.findByText(/parent or guardian to approve it/i)).toBeInTheDocument()
  })
})
