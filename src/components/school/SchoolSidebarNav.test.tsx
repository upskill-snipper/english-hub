// @vitest-environment node
import { describe, it, expect, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

/**
 * The school portal sidebar (fixed 12 October 2026).
 *
 * It listed eleven destinations to everyone, so a teacher was shown five
 * admin pages that refused them, and it did not list the marking queue at
 * all. Its "Log out" was a link to the login page that signed nobody out.
 *
 * Rendered in node with renderToStaticMarkup, because the question is what
 * HTML a given role receives.
 */

const nav = vi.hoisted(() => ({ pathname: '/school/dashboard' }))
vi.mock('next/navigation', () => ({ usePathname: () => nav.pathname }))

import { SchoolSidebarNav, NAV_ITEMS, activeHref, type PortalRole } from './SchoolSidebarNav'

const render = (role: PortalRole) =>
  renderToStaticMarkup(<SchoolSidebarNav userRole={role} schoolName="Test School" />)

const ADMIN_ONLY = ['/school/invite', '/school/admin/bulk-upload', '/school/settings']
const GONE = ['/school/users', '/school/permissions', '/school/guide', '/school/import']

describe('what each role is shown', () => {
  it('lists the marking queue for every member of staff', () => {
    for (const role of ['teacher', 'head_of_department', 'admin'] as const) {
      const html = render(role)
      expect(html).toContain('href="/school/marking"')
      expect(html).toContain('Marking queue')
      expect(html).toContain('href="/school/analytics/marking"')
    }
  })

  it('does not show a teacher pages whose APIs refuse teachers', () => {
    const html = render('teacher')
    for (const href of [...ADMIN_ONLY, '/school/billing']) {
      expect(html, href).not.toContain(`href="${href}"`)
    }
  })

  it('shows a head of department billing but not the admin-only pages', () => {
    const html = render('head_of_department')
    expect(html).toContain('href="/school/billing"')
    for (const href of ADMIN_ONLY) expect(html, href).not.toContain(`href="${href}"`)
  })

  it('shows an admin the admin pages', () => {
    const html = render('admin')
    for (const href of [...ADMIN_ONLY, '/school/billing'])
      expect(html, href).toContain(`href="${href}"`)
  })

  it('links nobody to the pages that were removed', () => {
    for (const role of ['teacher', 'head_of_department', 'admin'] as const) {
      const html = render(role)
      for (const href of GONE) expect(html, `${role} ${href}`).not.toContain(`href="${href}"`)
    }
  })
})

describe('the active item', () => {
  it('is the deepest match only, so a sub-page does not light its parent too', () => {
    expect(activeHref('/school/analytics/marking', NAV_ITEMS)).toBe('/school/analytics/marking')
    expect(activeHref('/school/analytics', NAV_ITEMS)).toBe('/school/analytics')
    expect(activeHref('/school/marking', NAV_ITEMS)).toBe('/school/marking')
    expect(activeHref('/school/students/abc', NAV_ITEMS)).toBeNull()
  })

  it('is marked for assistive technology', () => {
    nav.pathname = '/school/marking'
    const html = render('teacher')
    expect(html).toMatch(
      /aria-current="page"[^>]*href="\/school\/marking"|href="\/school\/marking"[^>]*aria-current="page"/,
    )
    nav.pathname = '/school/dashboard'
  })
})

describe('logging out', () => {
  it('is a button that ends the session, not a link to the login page', () => {
    const html = render('teacher')
    expect(html).not.toContain('href="/auth/login"')
    expect(html).toMatch(/<button[^>]*>[\s\S]*Log ?out/i)
  })
})
