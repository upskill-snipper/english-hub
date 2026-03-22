'use client'

import { cn } from '@/lib/utils'
import { AlertTriangle, AlertCircle, Info, ArrowRight } from 'lucide-react'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface RecommendationCardProps {
  priority: 1 | 2 | 3
  title: string
  description: string
  affectedStudents: number
  suggestedAction: string
  onAction?: () => void
  actionLabel?: string
  actionHref?: string
  className?: string
}

/* ── Priority config ───────────────────────────────────────────────────────── */

const priorityConfig = {
  1: {
    label: 'P1',
    badgeClass: 'bg-red-500/10 text-red-400 border-red-500/30',
    borderClass: 'border-l-red-500',
    Icon: AlertTriangle,
  },
  2: {
    label: 'P2',
    badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    borderClass: 'border-l-amber-500',
    Icon: AlertCircle,
  },
  3: {
    label: 'P3',
    badgeClass: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    borderClass: 'border-l-blue-500',
    Icon: Info,
  },
} as const

/* ── Component ─────────────────────────────────────────────────────────────── */

export function RecommendationCard({
  priority,
  title,
  description,
  affectedStudents,
  suggestedAction,
  onAction,
  actionLabel = 'Take action',
  actionHref,
  className,
}: RecommendationCardProps) {
  const config = priorityConfig[priority]
  const { Icon } = config

  const actionButton = (onAction || actionHref) && (
    <Button
      variant="ghost"
      size="sm"
      onClick={onAction}
      {...(actionHref ? { asChild: true } : {})}
      className="mt-3 gap-1.5"
    >
      {actionHref ? (
        <a href={actionHref}>
          {actionLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <>
          {actionLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </>
      )}
    </Button>
  )

  return (
    <Card
      className={cn(
        'border-l-4',
        config.borderClass,
        className,
      )}
    >
      <CardContent>
        {/* Header: priority badge + title */}
        <div className="flex items-start gap-3">
          <div
            className={cn(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
              config.badgeClass,
            )}
          >
            <Icon className="h-4 w-4" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className={cn(
                  'inline-flex h-5 items-center rounded-full border px-2 text-[10px] font-bold uppercase',
                  config.badgeClass,
                )}
              >
                {config.label}
              </span>
              <h3 className="font-semibold text-foreground text-sm leading-snug truncate">
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Affected students */}
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {affectedStudents}
              </span>{' '}
              student{affectedStudents !== 1 ? 's' : ''} affected
            </p>

            {/* Suggested action */}
            <div className="mt-2 rounded-md bg-muted/50 px-3 py-2">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  Suggested:
                </span>{' '}
                {suggestedAction}
              </p>
            </div>

            {/* Action button */}
            {actionButton}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
