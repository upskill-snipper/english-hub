// @vitest-environment jsdom
//
// This file needs a DOM; the suite's default environment is node.
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

/**
 * The one-step date-of-birth page a first Google or Apple sign-in passes
 * through (12 October 2026).
 *
 * Those providers collect no date of birth, and the AI gate refuses every
 * request until one is held, so three in four new accounts met a refusal on
 * their first AI request. /auth/callback now sends a first session with no
 * date of birth to /auth/complete-profile, carrying its destination. These
 * pin the page's side of that: it saves through the shared endpoint, goes on
 * to the destination, can be skipped, and never sends anyone off the site.
 *
 * MUTATIONS RUN, each verified to have altered the file first: dropping
 * validateRedirect fails the off-site case; posting to any other endpoint
 * fails the save case.
 */

const replace = vi.fn()
let params = new URLSearchParams()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace }),
  useSearchParams: () => params,
}))
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

const { default: CompleteProfilePage } = await import('@/app/auth/complete-profile/page')

const fetchMock = vi.fn()

beforeEach(() => {
  replace.mockReset()
  fetchMock.mockReset().mockResolvedValue(new Response('{}', { status: 200 }))
  vi.stubGlobal('fetch', fetchMock)
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

function open(next: string | null) {
  params = new URLSearchParams(next === null ? '' : `next=${encodeURIComponent(next)}`)
  render(<CompleteProfilePage />)
}

describe('the complete-profile page', () => {
  it('saves the date through /api/profile/dob and goes on to the destination', async () => {
    open('/dashboard/teacher?welcome=true')
    fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: '1985-04-12' } })
    fireEvent.submit(screen.getByRole('button', { name: /continue/i }).closest('form')!)
    await waitFor(() => expect(replace).toHaveBeenCalledWith('/dashboard/teacher?welcome=true'))
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/profile/dob',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ dateOfBirth: '1985-04-12' }),
      }),
    )
  })

  it('can be skipped, straight to the destination', () => {
    open('/pricing?welcome=true')
    expect(screen.getByRole('link', { name: /not now/i }).getAttribute('href')).toBe(
      '/pricing?welcome=true',
    )
  })

  it('never sends anyone off the site, whatever next says', () => {
    open('https://example.com/phish')
    expect(screen.getByRole('link', { name: /not now/i }).getAttribute('href')).toBe('/dashboard')
  })

  it('stays put and says so when the date is refused', async () => {
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ error: 'Invalid date of birth' }), { status: 400 }),
    )
    open('/dashboard')
    fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: '2025-01-01' } })
    fireEvent.submit(screen.getByRole('button', { name: /continue/i }).closest('form')!)
    await waitFor(() => expect(screen.getByText(/check that date of birth/i)).toBeTruthy())
    expect(replace).not.toHaveBeenCalled()
  })
})
