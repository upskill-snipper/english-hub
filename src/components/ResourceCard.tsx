'use client'

import React from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

/* ─── Types ───────────────────────────────────────────────────── */

type ResourceTypeBadge = 'Study Guide' | 'Practice' | 'Notes'
type ExamBoardLabel = 'AQA' | 'Edexcel' | 'Cambridge' | 'OCR'
type DifficultyLevel = 1 | 2 | 3 | 4 | 5

interface ResourceCardData {
  id: string
  title: string
  description?: string
  type: ResourceTypeBadge
  examBoard: ExamBoardLabel
  subject: 'English Language' | 'English Literature'
  difficulty: DifficultyLevel
  href: string
  tag?: string
}

interface ResourceCardProps {
  resource: ResourceCardData
  className?: string
}

/* ─── Constants ───────────────────────────────────────────────── */

const TYPE_STYLES: Record<ResourceTypeBadge, { bg: string; text: string; ring: string }> = {
  'Study Guide': {
    bg: 'bg-primary/10',
    text: 'text-primary',
    ring: 'ring-primary/20',
  },
  Practice: {
    bg: 'bg-success-50',
    text: 'text-success-700',
    ring: 'ring-success-200',
  },
  Notes: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    ring: 'ring-yellow-200',
  },
}

/** @deprecated Board colours removed - kept for type compat */
const BOARD_COLORS: Record<ExamBoardLabel, string> = {
  AQA: 'bg-primary/10 text-primary',
  Edexcel: 'bg-success-50 text-success-700',
  Cambridge: 'bg-warn-50 text-warn-700',
  OCR: 'bg-purple-50 text-purple-700',
}

/* ─── Icons ───────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

/* ─── Difficulty dots ─────────────────────────────────────────── */

const DIFFICULTY_KEYS: readonly string[] = [
  'resource.difficulty.beginner',
  'resource.difficulty.easy',
  'resource.difficulty.intermediate',
  'resource.difficulty.challenging',
  'resource.difficulty.advanced',
]

function DifficultyIndicator({ level }: { level: DifficultyLevel }) {
  const t = useT()
  const label = t(DIFFICULTY_KEYS[level - 1])
  const aria = t('resource.difficulty.aria')
    .replace('{label}', label)
    .replace('{level}', String(level))

  return (
    <div className="flex items-center gap-1.5" title={label}>
      <span className="sr-only">{aria}</span>
      {[1, 2, 3, 4, 5].map((dot) => (
        <span
          key={dot}
          className={`inline-block h-1.5 w-1.5 rounded-full transition-colors ${
            dot <= level ? 'bg-primary' : 'bg-muted'
          }`}
          aria-hidden="true"
        />
      ))}
      <span className="ml-1 text-xs text-muted-foreground" aria-hidden="true">
        {label}
      </span>
    </div>
  )
}

/* ─── ResourceCard component ──────────────────────────────────── */

const TYPE_KEYS: Record<ResourceTypeBadge, string> = {
  'Study Guide': 'resource.type.study_guide',
  Practice: 'resource.type.practice',
  Notes: 'resource.type.notes',
}

const SUBJECT_KEYS: Record<ResourceCardData['subject'], string> = {
  'English Language': 'resource.subject.english_language',
  'English Literature': 'resource.subject.english_literature',
}

function ResourceCard({ resource, className = '' }: ResourceCardProps) {
  const t = useT()
  const typeStyle = TYPE_STYLES[resource.type]

  return (
    <Link
      href={resource.href}
      className={[
        'group relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm',
        'transition-all duration-300 ease-out',
        'hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Top row: type badge */}
      <div className="flex items-start justify-between gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${typeStyle.bg} ${typeStyle.text} ${typeStyle.ring}`}
        >
          {t(TYPE_KEYS[resource.type])}
        </span>
      </div>

      {/* Tag ribbon */}
      {resource.tag && (
        <span className="mt-3 inline-flex self-start items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          {resource.tag}
        </span>
      )}

      {/* Title */}
      <h3
        className={`${resource.tag ? 'mt-2' : 'mt-4'} text-base font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary`}
      >
        {resource.title}
      </h3>

      {/* Description */}
      {resource.description && (
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {resource.description}
        </p>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom row: subject, difficulty, CTA */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">
            {t(SUBJECT_KEYS[resource.subject])}
          </span>
          <DifficultyIndicator level={resource.difficulty} />
        </div>

        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors duration-200 group-hover:text-primary">
          {t('resource.cta.start_revising')} <ArrowRight />
        </span>
      </div>
    </Link>
  )
}

/* ─── Grid wrapper ────────────────────────────────────────────── */

interface ResourceGridProps {
  children: React.ReactNode
  className?: string
}

function ResourceGrid({ children, className = '' }: ResourceGridProps) {
  return (
    <div
      className={['grid gap-5 sm:grid-cols-2 lg:grid-cols-3', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}

export {
  ResourceCard,
  ResourceGrid,
  type ResourceCardProps,
  type ResourceCardData,
  type ResourceTypeBadge,
  type ExamBoardLabel,
  type DifficultyLevel,
}
