// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { EN_MESSAGES } from '@/lib/i18n/generated/en'

/**
 * School portal pages that were mock or wrong (removed or corrected
 * 12 October 2026).
 *
 * Users saved nothing; Permissions was a static table that contradicted the
 * code; the Setup Guide described features that do not exist; Calendar held
 * invented assignments; Notifications could only ever be empty. Each is now
 * a redirect to the dashboard. Billing quoted per-pupil prices nobody sells
 * and now states the school's real access and that schools are invoiced.
 */

const redirect = vi.hoisted(() =>
  vi.fn((to: string) => {
    throw new Error(`NEXT_REDIRECT:${to}`)
  }),
)
vi.mock('next/navigation', () => ({ redirect }))

const access = vi.hoisted(() => ({ value: null as unknown }))
vi.mock('@/lib/school-access', () => ({ requireSchoolAdmin: vi.fn(async () => access.value) }))
vi.mock('@/lib/i18n/t', () => ({
  t: vi.fn(async (key: string) => EN_MESSAGES[key] ?? `[[${key}]]`),
  getLocale: vi.fn(async () => 'en'),
}))

beforeEach(() => {
  redirect.mockClear()
  access.value = null
})

describe('the pages that were mock or wrong', () => {
  it.each([
    ['users', () => import('./users/page')],
    ['permissions', () => import('./permissions/page')],
    ['guide', () => import('./guide/page')],
    ['calendar', () => import('./calendar/page')],
    ['notifications', () => import('./notifications/page')],
  ])('/school/%s sends the visitor to the dashboard', async (_name, load) => {
    const Page = (await load()).default as () => unknown
    expect(() => Page()).toThrow('NEXT_REDIRECT:/school/dashboard')
  })
})

describe('/school/billing', () => {
  const load = async () => (await import('./billing/page')).default

  it("states the school's real access and that schools are invoiced, with no prices", async () => {
    access.value = {
      schoolId: 'school-1',
      schoolName: 'Test Academy',
      accessType: 'paid',
      accessUntil: '2026-12-18T23:59:59Z',
      isActive: true,
      daysRemaining: 60,
      userRole: 'admin',
    }
    const html = renderToStaticMarkup(await (await load())())
    expect(html).toContain('Test Academy')
    expect(html).toContain('2026')
    expect(html).toMatch(/invoiced/i)
    expect(html).toContain('mailto:')
    expect(html).not.toContain('£')
    expect(html).not.toMatch(/per pupil/i)
    expect(html).not.toContain('[[')
  })

  it('tells a teacher it is not for them', async () => {
    access.value = null
    const html = renderToStaticMarkup(await (await load())())
    expect(html).toMatch(/administrators and heads of department/i)
    expect(html).not.toContain('[[')
  })
})
