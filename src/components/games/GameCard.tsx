'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { gcseGradeColor, gcseGradeBg, type GCSEGrade } from '@/lib/grades'
import { getHighScore, getLastPlayed } from '@/lib/game-scores'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface GameCardProps {
  /** Unique identifier matching the gameId used in GameShell */
  gameId: string
  /** Display title */
  title: string
  /** Short description */
  description: string
  /** Href to the game page */
  href: string
  /** Emoji or text icon displayed prominently */
  icon: string
  /** Difficulty label */
  difficulty?: 'Foundation' | 'Crossover' | 'Higher'
  /** Optional extra className */
  className?: string
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const DIFFICULTY_COLORS: Record<string, string> = {
  Foundation: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Crossover: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Higher: 'bg-red-500/10 text-red-400 border-red-500/20',
}

function formatRelativeTime(timestamp: number): string {
  const diff = Date.now() - timestamp
  const minutes = Math.floor(diff / 60_000)
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  const weeks = Math.floor(days / 7)
  if (weeks < 4) return `${weeks}w ago`
  return new Date(timestamp).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })
}

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function GameCard({
  gameId,
  title,
  description,
  href,
  icon,
  difficulty,
  className,
}: GameCardProps) {
  const [bestGrade, setBestGrade] = useState<GCSEGrade | null>(null)
  const [lastPlayed, setLastPlayed] = useState<number | null>(null)

  useEffect(() => {
    const hs = getHighScore(gameId)
    if (hs) setBestGrade(hs.grade)
    setLastPlayed(getLastPlayed(gameId))
  }, [gameId])

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm',
        'transition-all duration-300 ease-out',
        'hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className
      )}
    >
      {/* Top row: icon + best grade badge */}
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-2xl">
          {icon}
        </span>

        {bestGrade && (
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold',
              gcseGradeBg(bestGrade),
              gcseGradeColor(bestGrade),
              bestGrade >= 8
                ? 'border-emerald-500/20'
                : bestGrade >= 6
                  ? 'border-blue-500/20'
                  : bestGrade >= 4
                    ? 'border-amber-500/20'
                    : 'border-red-500/20'
            )}
          >
            Grade {bestGrade}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-base font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom row: metadata + CTA */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {difficulty && (
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium',
                DIFFICULTY_COLORS[difficulty] ?? 'bg-white/5 text-neutral-400 border-white/10'
              )}
            >
              {difficulty}
            </span>
          )}
          {lastPlayed && (
            <span className="text-xs text-muted-foreground">
              {formatRelativeTime(lastPlayed)}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors duration-200 group-hover:text-primary">
          Play <ArrowRight />
        </span>
      </div>
    </Link>
  )
}
