'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  Flame,
  Sparkles,
  X,
} from 'lucide-react'

import type { Recommendation, RecommendationType } from '@/lib/recommendations/engine'

// ─── Icon + colour mapping ──────────────────────────────────────────────────

const TYPE_CONFIG: Record<
  RecommendationType,
  { Icon: typeof AlertTriangle; colour: string; bg: string; ring: string }
> = {
  weakness: {
    Icon: AlertTriangle,
    colour: 'text-amber-500',
    bg: 'bg-amber-500/10',
    ring: 'ring-amber-500/20',
  },
  'next-step': {
    Icon: ArrowRight,
    colour: 'text-blue-500',
    bg: 'bg-blue-500/10',
    ring: 'ring-blue-500/20',
  },
  streak: {
    Icon: Flame,
    colour: 'text-orange-500',
    bg: 'bg-orange-500/10',
    ring: 'ring-orange-500/20',
  },
  'new-content': {
    Icon: Sparkles,
    colour: 'text-violet-500',
    bg: 'bg-violet-500/10',
    ring: 'ring-violet-500/20',
  },
}

const PRIORITY_LABELS: Record<Recommendation['priority'], { label: string; colour: string }> = {
  high: { label: 'High priority', colour: 'text-red-400' },
  medium: { label: 'Suggested', colour: 'text-amber-400' },
  low: { label: 'Optional', colour: 'text-muted-foreground' },
}

// ─── Dismiss helpers ────────────────────────────────────────────────────────

const DISMISSED_KEY = 'english-hub-dismissed-recommendations'

export function getDismissedIds(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(DISMISSED_KEY)
    if (!raw) return new Set()
    const parsed: string[] = JSON.parse(raw)
    return new Set(parsed)
  } catch {
    return new Set()
  }
}

function saveDismissedId(id: string): void {
  if (typeof window === 'undefined') return
  try {
    const current = getDismissedIds()
    current.add(id)
    // Keep list manageable — only store last 100 dismissed IDs
    const arr = [...current].slice(-100)
    localStorage.setItem(DISMISSED_KEY, JSON.stringify(arr))
  } catch {
    // localStorage might be full — fail silently
  }
}

// ─── Component ──────────────────────────────────────────────────────────────

interface RecommendationCardProps {
  recommendation: Recommendation
  onDismiss?: (id: string) => void
}

export function RecommendationCard({ recommendation, onDismiss }: RecommendationCardProps) {
  const [dismissed, setDismissed] = useState(false)
  const { Icon, colour, bg, ring } = TYPE_CONFIG[recommendation.type]
  const priority = PRIORITY_LABELS[recommendation.priority]

  if (dismissed) return null

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    saveDismissedId(recommendation.id)
    setDismissed(true)
    onDismiss?.(recommendation.id)
  }

  return (
    <Link
      href={recommendation.href}
      className={`group relative block rounded-xl border border-border/60 ${bg} p-4 transition-all hover:border-border hover:shadow-sm`}
    >
      {/* Dismiss button */}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-2 rounded-md p-1 text-muted-foreground opacity-0 transition-opacity hover:bg-background/80 hover:text-foreground group-hover:opacity-100"
        aria-label={`Dismiss recommendation: ${recommendation.title}`}
      >
        <X className="size-3.5" />
      </button>

      <div className="flex gap-3">
        {/* Icon */}
        <div
          className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${bg} ring-1 ${ring}`}
        >
          <Icon className={`size-4 ${colour}`} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pr-4">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="text-sm font-semibold text-foreground line-clamp-1">
              {recommendation.title}
            </h3>
            <span className={`text-[10px] font-medium uppercase tracking-wider ${priority.colour}`}>
              {priority.label}
            </span>
          </div>

          <p className="text-xs text-muted-foreground line-clamp-2">
            {recommendation.description}
          </p>

          <p className="mt-1.5 text-[11px] italic text-muted-foreground/80">
            {recommendation.reason}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center">
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  )
}
