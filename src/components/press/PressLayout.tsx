import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Reusable section wrapper for editorial pages such as /press and /brand.
 * Keeps serif headlines, generous whitespace, and British English copy
 * consistent with the rest of the marketing surface.
 */
export function PressSection({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string
  eyebrow?: string
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 border-b border-border/40', className)}>
      <div className="max-w-4xl mx-auto px-6">
        {eyebrow ? (
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-4">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-8">
            {title}
          </h2>
        ) : null}
        <div className="prose prose-neutral max-w-none text-foreground/90 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  )
}

export function PressHero({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 border-b border-border/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-4">
          {eyebrow}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{lede}</p>
      </div>
    </section>
  )
}

/**
 * Honest placeholder for a numeric stat. Renders a clearly marked
 * "coming in 2026" tile so we never publish fabricated numbers.
 */
export function StatPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border/60 bg-card/40 p-5">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-2">
        {label}
      </p>
      <p className="text-sm font-medium text-foreground/70">Stat coming in 2026</p>
      <p className="mt-1 text-xs text-muted-foreground">
        We will only publish figures once they are verifiable.
      </p>
    </div>
  )
}
