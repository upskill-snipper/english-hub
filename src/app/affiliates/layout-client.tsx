'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart3,
  FileText,
  Wallet,
  Settings,
  ArrowLeft,
  Handshake,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/affiliates/dashboard', icon: BarChart3 },
  { label: 'Resources', href: '/affiliates/resources', icon: FileText },
  { label: 'Payouts', href: '/affiliates/payouts', icon: Wallet },
  { label: 'Settings', href: '/affiliates/settings', icon: Settings },
]

/** Pages that should NOT show the sidebar (public / pre-auth pages) */
const PUBLIC_PATHS = ['/affiliates', '/affiliates/apply']

function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.includes(pathname)
}

export default function AffiliateLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Public pages (landing, apply) render without the sidebar
  if (isPublicPath(pathname)) {
    return <>{children}</>
  }

  function isActive(href: string) {
    if (href === '/affiliates/dashboard') return pathname === '/affiliates/dashboard'
    return pathname.startsWith(href)
  }

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Partner Portal header */}
      <div className="border-b border-border px-3 py-4 lg:px-5 lg:py-5">
        <div className="flex items-center gap-3 lg:gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 lg:h-10 lg:w-10">
            <Handshake className="h-4 w-4 text-primary lg:h-5 lg:w-5" />
          </div>
          <div className="hidden min-w-0 lg:block">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-bold text-foreground">
                Partner Portal
              </p>
              <Badge
                variant="secondary"
                className="text-[10px] px-1.5 py-0 h-4 uppercase tracking-wider"
              >
                Affiliate
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              The English Hub
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4 lg:px-3">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              title={item.label}
              className={cn(
                'flex items-center justify-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium transition-colors lg:justify-start lg:px-3',
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-border px-2 py-4 space-y-3 lg:px-3">
        <Link
          href="/"
          title="Back to site"
          className="flex items-center justify-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground lg:justify-start lg:px-3"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span className="hidden lg:inline">Back to site</span>
        </Link>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-14 shrink-0 border-r border-border bg-card md:block lg:w-60">
        <div className="sticky top-0 h-screen overflow-y-auto">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile header */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-14 items-center border-b border-border bg-card px-4 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mr-3"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
        <div className="flex items-center gap-2">
          <Handshake className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold">Partner Portal</span>
          <Badge
            variant="secondary"
            className="text-[10px] px-1.5 py-0 h-4 uppercase tracking-wider"
          >
            Affiliate
          </Badge>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-60 bg-card shadow-xl md:hidden">
            {sidebarContent}
          </aside>
        </>
      )}

      {/* Main content */}
      <main className="flex-1 pt-14 md:pt-0">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
