'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Link2,
  FolderOpen,
  Wallet,
  LogOut,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Supabase: replace localStorage account with auth session

const NAV_ITEMS = [
  { href: '/affiliate/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/affiliate/links', label: 'Tracking Links', icon: Link2 },
  { href: '/affiliate/resources', label: 'Resources', icon: FolderOpen },
  { href: '/affiliate/payouts', label: 'Payouts', icon: Wallet },
]

export function AffiliateSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-full lg:w-64 lg:min-h-[calc(100vh-4rem)] border-r border-border/60 bg-sidebar text-sidebar-foreground lg:sticky lg:top-16">
      <div className="p-5 border-b border-border/60">
        <Link
          href="/affiliate"
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <span>Affiliate Hub</span>
        </Link>
      </div>

      <nav className="flex flex-row lg:flex-col gap-1 p-3 overflow-x-auto lg:overflow-visible">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const active =
            pathname === item.href || pathname?.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap',
                active
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="hidden lg:block p-3 mt-auto border-t border-border/60">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2 text-muted-foreground"
          render={<Link href="/affiliate" />}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </div>
    </aside>
  )
}
