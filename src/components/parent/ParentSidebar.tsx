'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  TrendingUp,
  FileText,
  Settings,
  Trash2,
  Menu,
  X,
  GraduationCap,
  ArrowLeft,
  LogOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

// Supabase: derive session & signed-in state from auth
export interface ParentSidebarProps {
  parentName?: string
  childName?: string
}

const NAV_ITEMS = [
  { labelKey: 'parent.nav.dashboard', href: '/parent/dashboard', icon: LayoutDashboard },
  { labelKey: 'parent.nav.progress', href: '/parent/progress', icon: TrendingUp },
  { labelKey: 'parent.nav.reports', href: '/parent/reports', icon: FileText },
  { labelKey: 'parent.nav.settings', href: '/parent/settings', icon: Settings },
  { labelKey: 'parent.nav.delete_data', href: '/parent/delete-data', icon: Trash2 },
]

export function ParentSidebar({ parentName, childName }: ParentSidebarProps) {
  const pathname = usePathname()
  const t = useT()
  const [mobileOpen, setMobileOpen] = useState(false)

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/')
  }

  function handleSignOut() {
    // Supabase: replace with supabase.auth.signOut()
    try {
      localStorage.removeItem('english-hub-parent-account')
    } catch {
      // ignore
    }
    window.location.href = '/parent/login'
  }

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-border px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-foreground">{t('parent.portal')}</p>
            <p className="truncate text-xs text-muted-foreground">
              {parentName ?? t('brand.name')}
            </p>
          </div>
        </div>
        {childName && (
          <div className="mt-3 rounded-lg border border-border bg-background px-3 py-2">
            <p className="text-xs text-muted-foreground">{t('parent.viewing_for')}</p>
            <p className="truncate text-sm font-semibold text-foreground">{childName}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground',
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {t(item.labelKey)}
            </Link>
          )
        })}
      </nav>

      {/* Footer actions */}
      <div className="space-y-1 border-t border-border px-3 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          {t('parent.back_home')}
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {t('form.sign_out')}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card lg:block">
        <div className="sticky top-0 h-screen overflow-y-auto">{sidebarContent}</div>
      </aside>

      {/* Mobile header */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-14 items-center border-b border-border bg-card px-4 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mr-3"
          aria-label={mobileOpen ? t('nav.close') : t('nav.open')}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold text-foreground">{t('parent.portal')}</span>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-foreground/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-card shadow-lg lg:hidden">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  )
}
