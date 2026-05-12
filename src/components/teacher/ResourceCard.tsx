'use client'

import React from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

/* ─── Types ───────────────────────────────────────────────────── */

type ResourceKind =
  | 'Lesson Plan'
  | 'Worksheet'
  | 'Mark Scheme'
  | 'Revision Pack'
  | 'Starter'
  | 'Homework'

interface TeacherResourceCardProps {
  title: string
  description: string
  href: string
  kind: ResourceKind
  yearGroup?: string
  duration?: string
  examBoard?: string
  tag?: string
  className?: string
}

const KIND_LABEL_KEYS: Record<ResourceKind, string> = {
  'Lesson Plan': 'teacher.resource.kind.lesson_plan',
  Worksheet: 'teacher.resource.kind.worksheet',
  'Mark Scheme': 'teacher.resource.kind.mark_scheme',
  'Revision Pack': 'teacher.resource.kind.revision_pack',
  Starter: 'teacher.resource.kind.starter',
  Homework: 'teacher.resource.kind.homework',
}

/* ─── Kind badge styling (theme tokens only) ─────────────────── */

const KIND_STYLES: Record<ResourceKind, string> = {
  'Lesson Plan': 'bg-primary/10 text-primary ring-primary/20',
  Worksheet: 'bg-success-50 text-success-700 ring-success-200',
  'Mark Scheme': 'bg-warn-50 text-warn-700 ring-warn-200',
  'Revision Pack': 'bg-primary/10 text-primary ring-primary/20',
  Starter: 'bg-accent/10 text-accent ring-accent/20',
  Homework: 'bg-muted text-foreground ring-border',
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

/* ─── Component ───────────────────────────────────────────────── */

export function TeacherResourceCard({
  title,
  description,
  href,
  kind,
  yearGroup,
  duration,
  examBoard,
  tag,
  className = '',
}: TeacherResourceCardProps) {
  const t = useT()
  return (
    <Link
      href={href}
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
      <div className="flex items-start justify-between gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${KIND_STYLES[kind]}`}
        >
          {t(KIND_LABEL_KEYS[kind])}
        </span>
        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
          {t('teacher.resource.for_teachers')}
        </span>
      </div>

      {tag && (
        <span className="mt-3 inline-flex self-start items-center rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">
          {tag}
        </span>
      )}

      <h3
        className={`${tag ? 'mt-2' : 'mt-4'} text-base font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary`}
      >
        {title}
      </h3>

      <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="flex-1" />

      <div className="mt-4 flex flex-col gap-3">
        {(yearGroup || duration || examBoard) && (
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
            {yearGroup && (
              <span className="inline-flex items-center rounded-md bg-muted px-1.5 py-0.5">
                {yearGroup}
              </span>
            )}
            {duration && (
              <span className="inline-flex items-center rounded-md bg-muted px-1.5 py-0.5">
                {duration}
              </span>
            )}
            {examBoard && (
              <span className="inline-flex items-center rounded-md bg-muted px-1.5 py-0.5">
                {examBoard}
              </span>
            )}
          </div>
        )}

        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors duration-200 group-hover:text-primary">
          {t('teacher.resource.open')} <ArrowRight />
        </span>
      </div>
    </Link>
  )
}

/* ─── Grid wrapper ────────────────────────────────────────────── */

export function TeacherResourceGrid({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={['grid gap-5 sm:grid-cols-2 lg:grid-cols-3', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}

export type { TeacherResourceCardProps, ResourceKind }
