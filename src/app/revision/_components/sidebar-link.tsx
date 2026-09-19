'use client'

/**
 * The one sidebar row.
 *
 * Extracted from revision-shell.tsx when the text-scoped navigation was added,
 * so the site-wide register and a text's own sections render identically rather
 * than drifting into two slightly different lists in the same column. The
 * markup below is exactly what `NavLink` rendered before the extraction; only
 * the props changed shape, from a NavItem to primitives, because the two callers
 * carry their icons differently.
 */

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export function SidebarLink({
  href,
  label,
  icon,
  isActive,
  iconColour,
  onNavigate,
}: {
  href: string
  label: string
  /** Rendered inside the icon tile. Sized by the caller to size-3.5. */
  icon: React.ReactNode
  isActive: boolean
  /** Tailwind text colour for the icon when the row is not active. */
  iconColour?: string
  onNavigate?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group relative flex items-center gap-2.5 rounded-lg ps-2.5 pe-2 py-1.5 text-sm font-medium transition-all duration-150',
        isActive
          ? 'bg-primary/10 text-foreground ring-1 ring-primary/20 shadow-sm shadow-primary/5'
          : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
      )}
    >
      {/* Active left-edge accent bar - subtler than a full background flood
          and helps the eye scan-locate the current page in a long list. */}
      {isActive && (
        <span
          aria-hidden="true"
          className="absolute start-0 top-2 bottom-2 w-[3px] rounded-full bg-primary"
        />
      )}
      {/* Icon tile - lifts every link into a uniform two-part composition
          (tile + label) so the long list reads as a single column instead
          of icon-text-icon-text noise. */}
      <span
        className={cn(
          'flex size-7 shrink-0 items-center justify-center rounded-md transition-colors',
          isActive ? 'bg-primary/15 ring-1 ring-primary/20' : 'bg-muted/30 group-hover:bg-accent',
        )}
      >
        <span className={cn(isActive ? 'text-primary' : iconColour)}>{icon}</span>
      </span>
      <span className="flex-1 truncate">{label}</span>
      {isActive && (
        <ChevronRight aria-hidden="true" className="size-3.5 shrink-0 text-primary opacity-70" />
      )}
    </Link>
  )
}
