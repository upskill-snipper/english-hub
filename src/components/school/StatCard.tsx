'use client'

import { type LucideIcon, ArrowUp, ArrowDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
} from '@/components/ui/card'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: LucideIcon
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  color?: 'green' | 'amber' | 'red' | 'blue' | 'purple' | 'primary'
  className?: string
}

/* ── Color map ─────────────────────────────────────────────────────────────── */

const borderColors: Record<string, string> = {
  green: 'border-l-green-500',
  amber: 'border-l-amber-500',
  red: 'border-l-red-500',
  blue: 'border-l-blue-500',
  purple: 'border-l-purple-500',
  primary: 'border-l-primary',
}

const iconBgColors: Record<string, string> = {
  green: 'bg-green-500/10 text-green-400',
  amber: 'bg-amber-500/10 text-clay-600',
  red: 'bg-red-500/10 text-red-400',
  blue: 'bg-blue-500/10 text-blue-400',
  purple: 'bg-purple-500/10 text-purple-400',
  primary: 'bg-primary/10 text-primary',
}

const trendColors = {
  up: 'text-green-400',
  down: 'text-red-400',
  neutral: 'text-muted-foreground',
}

const TrendIcon = {
  up: ArrowUp,
  down: ArrowDown,
  neutral: Minus,
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  color = 'primary',
  className,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        'border-l-4',
        borderColors[color],
        className,
      )}
    >
      <CardContent className="flex items-start gap-4">
        {/* Icon */}
        {Icon && (
          <div
            className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
              iconBgColors[color],
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-foreground leading-none">
            {value}
          </p>
          <div className="mt-1 flex items-center gap-2">
            {trend && (
              <span
                className={cn(
                  'inline-flex items-center gap-0.5 text-xs font-medium',
                  trendColors[trend],
                )}
              >
                {(() => {
                  const TIcon = TrendIcon[trend]
                  return <TIcon className="h-3 w-3" />
                })()}
                {trendValue && <span>{trendValue}</span>}
              </span>
            )}
            {subtitle && (
              <span className="text-xs text-muted-foreground truncate">
                {subtitle}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
