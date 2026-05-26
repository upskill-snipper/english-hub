import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Cinematic glass surface - the premium container for the school/teacher
 * dashboards. Translucent, backdrop-blurred, soft inner ring + an
 * optional accent glow blob. Uses the site's own tokens/brand accents,
 * so it reads as "future-tech / elite" while staying on-theme in light
 * and dark. Server-safe (no hooks).
 */
export type GlassAccent = 'teal' | 'clay' | 'ochre' | 'sage' | 'primary'

const ACCENT_GLOW: Record<GlassAccent, string> = {
  teal: 'bg-teal-500/20',
  clay: 'bg-clay-500/20',
  ochre: 'bg-ochre-500/20',
  sage: 'bg-sage-500/20',
  primary: 'bg-primary/20',
}

export function GlassPanel({
  children,
  className,
  accent = 'primary',
  glow = true,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  accent?: GlassAccent
  glow?: boolean
  as?: React.ElementType
}) {
  return (
    <Tag
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border/60',
        'bg-gradient-to-br from-card/80 via-card/60 to-card/80',
        'shadow-[0_1px_0_0_hsl(var(--foreground)/0.04)_inset,0_20px_40px_-24px_hsl(var(--foreground)/0.25)]',
        'backdrop-blur-xl',
        className,
      )}
    >
      {glow && (
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full blur-3xl',
            ACCENT_GLOW[accent],
          )}
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />
      <div className="relative">{children}</div>
    </Tag>
  )
}

/** Small uppercase eyebrow used on every panel header for the elite feel. */
export function PanelEyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground',
        className,
      )}
    >
      {children}
    </p>
  )
}
