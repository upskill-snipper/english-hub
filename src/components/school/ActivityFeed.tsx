'use client'

import {
  BookOpen,
  CheckCircle,
  Award,
  FileQuestion,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ── Types ─────────────────────────────────────────────────────────────────── */

export type ActivityType =
  | 'lesson_completed'
  | 'quiz_completed'
  | 'certificate_earned'
  | 'assessment_taken'
  | 'practice_retry'

interface Activity {
  type: ActivityType
  title: string
  description?: string
  timestamp: string // ISO date string
}

interface ActivityFeedProps {
  activities: Activity[]
  maxItems?: number
  className?: string
}

/* ── Icons per type ────────────────────────────────────────────────────────── */

const typeConfig: Record<
  ActivityType,
  { icon: LucideIcon; color: string; bg: string }
> = {
  lesson_completed: {
    icon: BookOpen,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  quiz_completed: {
    icon: CheckCircle,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  certificate_earned: {
    icon: Award,
    color: 'text-clay-600',
    bg: 'bg-amber-500/10',
  },
  assessment_taken: {
    icon: FileQuestion,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  practice_retry: {
    icon: RotateCcw,
    color: 'text-muted-foreground',
    bg: 'bg-muted',
  },
}

/* ── Relative time helper ──────────────────────────────────────────────────── */

function formatRelativeTime(iso: string): string {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHours = Math.floor(diffMin / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffSec < 60) return 'Just now'
  if (diffMin < 60) return `${diffMin} min${diffMin !== 1 ? 's' : ''} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) !== 1 ? 's' : ''} ago`
  return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) !== 1 ? 's' : ''} ago`
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export function ActivityFeed({
  activities,
  maxItems,
  className,
}: ActivityFeedProps) {
  const items = maxItems ? activities.slice(0, maxItems) : activities

  if (items.length === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center py-8 text-sm text-muted-foreground',
          className,
        )}
      >
        No recent activity.
      </div>
    )
  }

  return (
    <div className={cn('max-h-[400px] overflow-y-auto', className)}>
      <div className="relative pl-6">
        {/* Vertical timeline line */}
        <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-4">
          {items.map((activity, i) => {
            const config = typeConfig[activity.type] ?? typeConfig.lesson_completed
            const Icon = config.icon

            return (
              <div key={i} className="relative flex gap-3">
                {/* Dot on timeline */}
                <div
                  className={cn(
                    'absolute -left-6 top-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 border-background',
                    config.bg,
                  )}
                >
                  <Icon className={cn('h-2.5 w-2.5', config.color)} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pb-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {activity.title}
                    </p>
                    <span className="shrink-0 text-[11px] text-muted-foreground tabular-nums">
                      {formatRelativeTime(activity.timestamp)}
                    </span>
                  </div>
                  {activity.description && (
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
