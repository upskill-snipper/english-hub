// Feature grid - server component. A denser list-style grid used to
// present platform capabilities (solution section). Distinct from
// BenefitGrid: this is for "what the platform does", not "why it helps".

import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FeatureItem {
  icon: LucideIcon
  title: string
  body: string
}

export interface FeatureGridProps {
  items: FeatureItem[]
  className?: string
  columns?: 2 | 3
}

export function FeatureGrid({ items, className, columns = 3 }: FeatureGridProps) {
  return (
    <div
      className={cn(
        'grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60',
        columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
        className,
      )}
    >
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="bg-card p-6">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      ))}
    </div>
  )
}
