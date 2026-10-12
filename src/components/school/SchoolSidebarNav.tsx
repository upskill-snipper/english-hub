'use client'

// ─── School portal sidebar ──────────────────────────────────────────────────
//
// FIXED 12 OCTOBER 2026, four ways:
//   * The marking queue (/school/marking) was not listed, so the page where
//     every pupil's essay reaches its teacher could not be found.
//   * No item was filtered by role. A teacher was shown Users, Import,
//     Billing, Permissions and Settings and was refused by the API behind
//     each one. Each item now names the roles its own API admits.
//   * Users, Permissions and the Setup Guide were mock or wrong and are
//     gone; Import pointed at the legacy importer, which queries a table that
//     does not exist (import_jobs), and now points at the bulk upload.
//   * "Log out" was a link to /auth/login and signed nobody out. On a shared
//     classroom computer the next person to sit down inherited the teacher's
//     session and their pupils' work. It now ends the session.
// ────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart3,
  BookOpen,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  ExternalLink,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  School,
  Settings,
  Target,
  Upload,
  X,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import { useAuthStore } from '@/store/auth-store'

export type PortalRole = 'admin' | 'head_of_department' | 'teacher' | 'student'

interface SchoolSidebarNavProps {
  schoolName?: string
  adminName?: string
  founderAccess?: boolean
  accessUntil?: string
  userEmail?: string
  accessType?: 'founder' | 'paid' | 'trial' | 'expired' | null
  /** The viewer's school role. Items their role cannot use are not shown. */
  userRole: PortalRole
}

interface NavItem {
  labelKey: string
  href: string
  icon: typeof LayoutDashboard
  roles: readonly PortalRole[]
}

const STAFF: readonly PortalRole[] = ['admin', 'head_of_department', 'teacher']

/**
 * Each item's roles are the roles its API admits, so nobody is shown a page
 * that refuses them:
 *   invite        POST /api/school/invite                 admin
 *   bulk upload   /api/school/bulk-upload/*               admin
 *   billing       page gate (requireSchoolAdmin)          admin, head of department
 *   settings      PUT /api/school/settings                admin
 */
export const NAV_ITEMS: readonly NavItem[] = [
  {
    labelKey: 'school.sidebar.dashboard',
    href: '/school/dashboard',
    icon: LayoutDashboard,
    roles: STAFF,
  },
  {
    labelKey: 'school.portal.nav.marking_queue',
    href: '/school/marking',
    icon: ClipboardCheck,
    roles: STAFF,
  },
  { labelKey: 'school.sidebar.classes', href: '/school/classes', icon: BookOpen, roles: STAFF },
  {
    labelKey: 'school.sidebar.analytics',
    href: '/school/analytics',
    icon: BarChart3,
    roles: STAFF,
  },
  {
    labelKey: 'school.portal.nav.objectives',
    href: '/school/analytics/marking',
    icon: Target,
    roles: STAFF,
  },
  {
    labelKey: 'school.sidebar.invite_teachers',
    href: '/school/invite',
    icon: Mail,
    roles: ['admin'],
  },
  {
    labelKey: 'school.portal.nav.import_pupils',
    href: '/school/admin/bulk-upload',
    icon: Upload,
    roles: ['admin'],
  },
  {
    labelKey: 'school.portal.nav.billing',
    href: '/school/billing',
    icon: CreditCard,
    roles: ['admin', 'head_of_department'],
  },
  {
    labelKey: 'school.sidebar.settings',
    href: '/school/settings',
    icon: Settings,
    roles: ['admin'],
  },
]

/** The items a role may see. */
export function navItemsFor(role: PortalRole): NavItem[] {
  return NAV_ITEMS.filter((item) => item.roles.includes(role))
}

/**
 * The one item to highlight: the longest href the path sits under, so
 * /school/analytics/marking lights "Assessment objectives" and not also
 * "Analytics".
 */
export function activeHref(pathname: string, items: readonly NavItem[]): string | null {
  let best: string | null = null
  for (const { href } of items) {
    if (pathname === href || pathname.startsWith(`${href}/`)) {
      if (!best || href.length > best.length) best = href
    }
  }
  return best
}

export function SchoolSidebarNav({
  schoolName,
  adminName,
  founderAccess,
  accessUntil,
  userEmail,
  accessType,
  userRole,
}: SchoolSidebarNavProps) {
  const t = useT()
  const fmt = useFormatDate()
  const pathname = usePathname() ?? ''
  const clearAuth = useAuthStore((s) => s.clear)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)

  const items = navItemsFor(userRole)
  const current = activeHref(pathname, items)
  const isFounder = founderAccess ?? accessType === 'founder'

  // The date was printed as the raw timestamp ("2026-08-31T23:59:59+00:00").
  // Provisioning stores the end of the last day in UTC, so it is shown as
  // that calendar date, read at noon UTC to stay the same date everywhere.
  const founderActivePrefix = t('school.sidebar.founder_active_until')
  const founderLabel = accessUntil
    ? `${founderActivePrefix} ${fmt(`${accessUntil.slice(0, 10)}T12:00:00Z`)}`
    : `${founderActivePrefix} ${t('school.sidebar.founder_default_until')}`

  function closeMobile() {
    setMobileOpen(false)
  }

  async function signOut() {
    setSigningOut(true)
    try {
      const { createClient } = await import('@/lib/supabase/client')
      await createClient().auth.signOut()
    } finally {
      // Leave the portal even if the network call failed: the local session
      // is cleared by signOut before it calls the server, and staying on a
      // page full of pupils' work is the worse outcome.
      clearAuth()
      window.location.href = '/'
    }
  }

  function renderSidebarContent() {
    return (
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-5 py-5">
          <div className="flex items-center gap-2">
            <School className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-base font-bold tracking-tight text-white">The English Hub</span>
          </div>
          <p className="mt-0.5 ps-7 text-[11px] font-medium uppercase tracking-widest text-white/40">
            {t('school.portal.nav.subtitle')}
          </p>
          {schoolName ? (
            <p className="mt-3 truncate text-sm font-semibold text-white/90">{schoolName}</p>
          ) : null}
          {adminName || userEmail ? (
            <p className="mt-0.5 truncate text-xs text-white/40">{adminName ?? userEmail}</p>
          ) : null}
          {isFounder ? (
            <div className="mt-3 flex items-center gap-1.5 rounded-md bg-amber-400/15 px-3 py-1.5">
              <ChevronRight className="h-3 w-3 shrink-0 text-clay-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold leading-snug text-amber-700">
                {founderLabel}
              </span>
            </div>
          ) : null}
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
          {items.map((item) => {
            const active = item.href === current
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'border-s-2 border-primary bg-primary/10 text-primary'
                    : 'border-s-2 border-transparent text-white/60 hover:bg-white/5 hover:text-white',
                )}
              >
                <Icon
                  className={cn(
                    'h-4 w-4 shrink-0 transition-colors',
                    active ? 'text-primary' : 'text-white/40 group-hover:text-white',
                  )}
                  aria-hidden="true"
                />
                {t(item.labelKey)}
              </Link>
            )
          })}
        </nav>

        <div className="space-y-0.5 border-t border-white/10 px-3 py-4">
          <Link
            href="/"
            onClick={closeMobile}
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ExternalLink
              className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-white"
              aria-hidden="true"
            />
            {t('school.sidebar.back_to_site')}
          </Link>

          {schoolName ? (
            <div className="flex items-center gap-2 px-3 py-2">
              <Badge
                variant="secondary"
                className="max-w-full truncate bg-white/10 text-[10px] text-white/50 hover:bg-white/10"
              >
                {schoolName}
              </Badge>
            </div>
          ) : null}

          <button
            type="button"
            onClick={signOut}
            disabled={signingOut}
            className="group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/50 transition-colors hover:bg-red-500/10 hover:text-red-400 disabled:opacity-60"
          >
            <LogOut
              className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-red-400"
              aria-hidden="true"
            />
            {t('school.sidebar.logout')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <button
        type="button"
        className="fixed start-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar text-sidebar-foreground shadow-md lg:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? t('school.sidebar.close_nav') : t('school.sidebar.open_nav')}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      ) : null}

      <aside
        className={cn(
          'fixed inset-y-0 start-0 z-40 w-[240px] bg-sidebar transition-transform duration-200 ease-in-out lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-label={t('school.sidebar.nav_label')}
      >
        {renderSidebarContent()}
      </aside>

      <aside
        className="hidden w-[240px] shrink-0 bg-sidebar lg:flex lg:flex-col"
        aria-label={t('school.sidebar.nav_label')}
      >
        {renderSidebarContent()}
      </aside>
    </>
  )
}
