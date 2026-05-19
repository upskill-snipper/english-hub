// Institutional benefit card — server component. Used across /schools,
// /teachers, /eal and the homepage to present a single value proposition
// in a calm, leadership-focused style (icon + title + supporting line).

import type { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface BenefitCardProps {
  icon: LucideIcon
  title: string
  body: string
  className?: string
}

export function BenefitCard({ icon: Icon, title, body, className }: BenefitCardProps) {
  return (
    <Card className={cn('p-6 border-border/50 h-full', className)}>
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </Card>
  )
}

export interface BenefitGridProps {
  items: Array<{ icon: LucideIcon; title: string; body: string }>
  className?: string
  columns?: 2 | 3
}

export function BenefitGrid({ items, className, columns = 3 }: BenefitGridProps) {
  return (
    <div
      className={cn(
        'grid gap-4 sm:gap-5',
        columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
        className,
      )}
    >
      {items.map((it) => (
        <BenefitCard key={it.title} icon={it.icon} title={it.title} body={it.body} />
      ))}
    </div>
  )
}
