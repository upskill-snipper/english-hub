'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Settings,
  School,
  ChevronRight,
  ArrowLeft,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { School as SchoolType } from '@/lib/types'

interface SchoolSidebarProps {
  school: SchoolType | null
}

const NAV_ITEMS = [
  { label: 'Overview', href: '/school', icon: LayoutDashboard },
  { label: 'Classes', href: '/school/classes', icon: Users },
  { label: 'Settings', href: '/school/settings', icon: Settings },
]

export function SchoolSidebar({ school }: SchoolSidebarProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  function isActive(href: string) {
    if (href === '/school') return pathname === '/school'
    return pathname.startsWith(href)
  }

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* School identity */}
      <div className="border-b border-border px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <School className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-foreground">
              {school?.name ?? 'School Dashboard'}
            </p>
            <p className="text-xs text-muted-foreground capitalize">
              {school?.subscription_plan ?? 'school'} plan
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <item.icon
                className={cn(
                  'h-4 w-4',
                  active
                    ? 'text-primary'
                    : 'text-muted-foreground group-hover:text-foreground'
                )}
              />
              <span className="flex-1">{item.label}</span>
              {active && (
                <ChevronRight className="h-3.5 w-3.5 text-primary/60" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Seat usage */}
      {school && (
        <div className="border-t border-border px-5 py-4">
          <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
            <span>Seats Used</span>
            <span className="font-medium text-foreground">
              {school.seats_used} / {school.seat_limit}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{
                width: `${Math.min((school.seats_used / school.seat_limit) * 100, 100)}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Back to Dashboard */}
      <div className="border-t border-border px-3 py-3">
        <Link
          href="/dashboard"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile hamburger toggle */}
      <div className="lg:hidden fixed top-[3.75rem] left-0 z-40">
        <Button
          variant="ghost"
          size="icon"
          className="m-2 bg-card/80 backdrop-blur-sm border border-border/40"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside
        className={cn(
          'lg:hidden fixed top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-64 bg-card border-r border-border transition-transform duration-200 ease-in-out',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:border-r lg:border-border bg-card/30">
        {sidebarContent}
      </aside>
    </>
  )
}
