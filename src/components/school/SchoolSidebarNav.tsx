'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Upload,
  Mail,
  BookOpen,
  BarChart3,
  CreditCard,
  Shield,
  HelpCircle,
  Settings,
  ExternalLink,
  LogOut,
  School,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

// ── Types ────────────────────────────────────────────────────────────────────

interface SchoolSidebarNavProps {
  schoolName?: string
  adminName?: string
  founderAccess?: boolean
  accessUntil?: string
  // Legacy props forwarded from the server layout
  userEmail?: string
  accessType?: 'founder' | 'paid' | 'trial' | 'expired' | null
}

// ── Navigation items ─────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { labelKey: 'school.sidebar.dashboard', href: '/school/dashboard', icon: LayoutDashboard },
  { labelKey: 'school.sidebar.users', href: '/school/users', icon: Users },
  { labelKey: 'school.sidebar.import_users', href: '/school/import', icon: Upload },
  { labelKey: 'school.sidebar.invite_teachers', href: '/school/invite', icon: Mail },
  { labelKey: 'school.sidebar.classes', href: '/school/classes', icon: BookOpen },
  { labelKey: 'school.sidebar.analytics', href: '/school/analytics', icon: BarChart3 },
  { labelKey: 'school.sidebar.billing', href: '/school/billing', icon: CreditCard },
  { labelKey: 'school.sidebar.permissions', href: '/school/permissions', icon: Shield },
  { labelKey: 'school.sidebar.setup_guide', href: '/school/guide', icon: HelpCircle },
  { labelKey: 'school.sidebar.settings', href: '/school/settings', icon: Settings },
] as const

// ── Component ────────────────────────────────────────────────────────────────

export function SchoolSidebarNav({
  schoolName,
  adminName,
  founderAccess,
  accessUntil,
  userEmail,
  accessType,
}: SchoolSidebarNavProps) {
  const t = useT()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Resolve founder status from either the explicit prop or the legacy accessType
  const isFounder = founderAccess ?? accessType === 'founder'

  // Resolve the "active until" label
  const founderActivePrefix = t('school.sidebar.founder_active_until')
  const founderLabel = accessUntil
    ? `${founderActivePrefix} ${accessUntil}`
    : `${founderActivePrefix} ${t('school.sidebar.founder_default_until')}`

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/')
  }

  function closeMobile() {
    setMobileOpen(false)
  }

  function renderSidebarContent() {
    return (
      <div className="flex h-full flex-col">
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="border-b border-white/10 px-5 py-5">
          {/* Wordmark */}
          <div className="flex items-center gap-2">
            <School className="h-5 w-5 shrink-0 text-primary" />
            <span className="text-base font-bold tracking-tight text-white">The English Hub</span>
          </div>

          {/* Subtitle */}
          <p className="mt-0.5 pl-7 text-[11px] font-medium uppercase tracking-widest text-white/40">
            {t('school.sidebar.admin_portal')}
          </p>

          {/* School name */}
          {schoolName && (
            <p className="mt-3 truncate text-sm font-semibold text-white/90">{schoolName}</p>
          )}

          {/* Admin name */}
          {(adminName || userEmail) && (
            <p className="mt-0.5 truncate text-xs text-white/40">{adminName ?? userEmail}</p>
          )}

          {/* FOUNDER badge */}
          {isFounder && (
            <div className="mt-3 flex items-center gap-1.5 rounded-md bg-amber-400/15 px-3 py-1.5">
              <ChevronRight className="h-3 w-3 shrink-0 text-clay-600" />
              <span className="text-[11px] font-semibold leading-snug text-amber-700">
                {founderLabel}
              </span>
            </div>
          )}
        </div>

        {/* ── Navigation ──────────────────────────────────────────────── */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={cn(
                  'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'border-l-2 border-primary bg-primary/10 text-primary'
                    : 'border-l-2 border-transparent text-white/60 hover:bg-white/5 hover:text-white',
                )}
              >
                <Icon
                  className={cn(
                    'h-4 w-4 shrink-0 transition-colors',
                    active ? 'text-primary' : 'text-white/40 group-hover:text-white',
                  )}
                />
                {t(item.labelKey)}
              </Link>
            )
          })}
        </nav>

        {/* ── Bottom section ──────────────────────────────────────────── */}
        <div className="border-t border-white/10 px-3 py-4 space-y-0.5">
          {/* Back to site */}
          <Link
            href="/"
            onClick={closeMobile}
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ExternalLink className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-white" />
            {t('school.sidebar.back_to_site')}
          </Link>

          {/* School name footer chip */}
          {schoolName && (
            <div className="flex items-center gap-2 px-3 py-2">
              <Badge
                variant="secondary"
                className="max-w-full truncate bg-white/10 text-[10px] text-white/50 hover:bg-white/10"
              >
                {schoolName}
              </Badge>
            </div>
          )}

          {/* Logout */}
          <Link
            href="/auth/login"
            onClick={closeMobile}
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/50 transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-red-400" />
            {t('school.sidebar.logout')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ── Mobile hamburger ──────────────────────────────────────────── */}
      <button
        type="button"
        className="fixed left-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar text-sidebar-foreground shadow-md lg:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? t('school.sidebar.close_nav') : t('school.sidebar.open_nav')}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* ── Mobile overlay ────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile drawer ─────────────────────────────────────────────── */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-[240px] bg-sidebar transition-transform duration-200 ease-in-out lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-label={t('school.sidebar.nav_label')}
      >
        {renderSidebarContent()}
      </aside>

      {/* ── Desktop sidebar ───────────────────────────────────────────── */}
      <aside
        className="hidden w-[240px] shrink-0 bg-sidebar lg:flex lg:flex-col"
        aria-label={t('school.sidebar.nav_label')}
      >
        {renderSidebarContent()}
      </aside>
    </>
  )
}
