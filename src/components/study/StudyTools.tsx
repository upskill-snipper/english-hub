'use client'

/**
 * StudyTools — Reusable AI-powered study aid panel
 *
 * Drop into any text, poem, or play page to give students access to:
 * - AI Revision Notes generator (Anthology-templated output)
 * - Quick Quiz generator
 * - Essay Plan builder
 * - Key Quotes explorer
 * - Character/Theme deep-dive
 *
 * Usage:
 *   <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />
 *   <StudyTools textName="Ozymandias" textType="poem" examBoard="AQA" cluster="Power & Conflict" />
 */

import { useState } from 'react'
import Link from 'next/link'
import {
  FileText,
  Brain,
  PenLine,
  Quote,
  Users,
  BookOpen,
  Sparkles,
  ChevronRight,
} from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

export type TextType = 'play' | 'novel' | 'poem' | 'novella' | 'anthology' | 'language'

interface StudyToolsProps {
  /** Name of the text, poem, or play */
  textName: string
  /** Type of text */
  textType: TextType
  /** Exam board context */
  examBoard?: string
  /** Poetry cluster (for anthology poems) */
  cluster?: string
  /** Additional context for the AI (e.g. specific act, chapter) */
  section?: string
  /** Custom className */
  className?: string
  /** Whether to show the compact inline variant */
  variant?: 'full' | 'compact' | 'banner'
}

const TOOLS = [
  {
    id: 'revision-notes',
    labelKey: 'study_tools.revision_notes_label',
    descriptionKey: 'study_tools.revision_notes_desc',
    icon: FileText,
    color: 'text-clay-600',
    bg: 'bg-clay-500/5',
    border: 'border-clay-500/20',
    href: '/toolkit/revision-builder',
  },
  {
    id: 'test-builder',
    labelKey: 'study_tools.practice_quiz_label',
    descriptionKey: 'study_tools.practice_quiz_desc',
    icon: Brain,
    color: 'text-teal-700',
    bg: 'bg-teal-800/5',
    border: 'border-teal-800/20',
    href: '/toolkit/test-builder',
  },
  {
    id: 'essay-plan',
    labelKey: 'study_tools.essay_planner_label',
    descriptionKey: 'study_tools.essay_planner_desc',
    icon: PenLine,
    color: 'text-teal-700',
    bg: 'bg-teal-800/5',
    border: 'border-teal-800/20',
    href: '/toolkit/revision-builder',
  },
  {
    id: 'key-quotes',
    labelKey: 'study_tools.quote_bank_label',
    descriptionKey: 'study_tools.quote_bank_desc',
    icon: Quote,
    color: 'text-clay-600',
    bg: 'bg-clay-500/5',
    border: 'border-clay-500/20',
    href: '/toolkit/revision-builder',
  },
] as const

function buildQueryString(props: StudyToolsProps, toolId: string): string {
  const params = new URLSearchParams()
  params.set('text', props.textName)
  params.set('type', props.textType)
  if (props.examBoard) params.set('board', props.examBoard)
  if (props.cluster) params.set('cluster', props.cluster)
  if (props.section) params.set('section', props.section)
  params.set('tool', toolId)
  return params.toString()
}

// ─── Full variant ──────────────────────────────────────────────────────────

function StudyToolsFull(props: StudyToolsProps) {
  const { textName, className = '' } = props
  const t = useT()

  return (
    <section className={`rounded-2xl border border-border bg-card overflow-hidden ${className}`}>
      {/* Header */}
      <div className="border-b border-ink-200 bg-cream-50 px-6 py-5">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-4 w-4 text-clay-500" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-clay-600">
            {t('study_tools.eyebrow')}
          </span>
        </div>
        <h3 className="font-serif text-xl font-normal text-ink-900 tracking-tight">
          {t('study_tools.heading_prefix')} <em className="italic text-clay-600">{textName}</em>{' '}
          {t('study_tools.heading_suffix')}
        </h3>
        <p className="text-sm text-ink-500 mt-1">{t('study_tools.subheading')}</p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-ink-100">
        {TOOLS.map((tool) => {
          const Icon = tool.icon
          const qs = buildQueryString(props, tool.id)
          return (
            <Link
              key={tool.id}
              href={`${tool.href}?${qs}`}
              className="group flex items-start gap-3 p-5 transition-colors hover:bg-cream-50"
            >
              <div className={`mt-0.5 rounded-lg ${tool.bg} border ${tool.border} p-2`}>
                <Icon className={`h-4 w-4 ${tool.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink-900 group-hover:text-teal-800 transition-colors">
                  {t(tool.labelKey)}
                </p>
                <p className="text-xs text-ink-500 mt-0.5 leading-relaxed">
                  {t(tool.descriptionKey)}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-ink-300 mt-1 shrink-0 group-hover:text-teal-700 transition-colors" />
            </Link>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-ink-100 bg-cream-50/50 px-6 py-3 flex items-center justify-between">
        <p className="text-xs text-ink-400">{t('study_tools.template_note')}</p>
        <Link
          href={`/toolkit?text=${encodeURIComponent(textName)}`}
          className="text-xs font-medium text-teal-700 hover:text-teal-800 transition-colors"
        >
          {t('study_tools.all_tools')} &rarr;
        </Link>
      </div>
    </section>
  )
}

// ─── Compact variant ───────────────────────────────────────────────────────

function StudyToolsCompact(props: StudyToolsProps) {
  const { textName, className = '' } = props
  const t = useT()

  return (
    <div className={`rounded-xl border border-border bg-card p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="h-3.5 w-3.5 text-clay-500" />
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-clay-600">
          {t('study_tools.eyebrow')} · {textName}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {TOOLS.map((tool) => {
          const Icon = tool.icon
          const qs = buildQueryString(props, tool.id)
          return (
            <Link
              key={tool.id}
              href={`${tool.href}?${qs}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-cream-50 px-3 py-1.5 text-xs text-ink-700 font-medium hover:bg-cream-100 hover:border-ink-300 transition-colors"
            >
              <Icon className={`h-3 w-3 ${tool.color}`} />
              {t(tool.labelKey)}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// ─── Banner variant ────────────────────────────────────────────────────────

function StudyToolsBanner(props: StudyToolsProps) {
  const { textName, className = '' } = props
  const t = useT()

  return (
    <div className={`rounded-xl border border-teal-800/15 bg-teal-800/5 px-5 py-4 ${className}`}>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-teal-800/10 p-2">
            <Sparkles className="h-4 w-4 text-teal-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-ink-900">
              {t('study_tools.banner_prefix')}{' '}
              <em className="font-serif italic text-clay-600">{textName}</em>{' '}
              {t('study_tools.banner_suffix')}
            </p>
            <p className="text-xs text-ink-500 mt-0.5">{t('study_tools.banner_blurb')}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/toolkit/revision-builder?${buildQueryString(props, 'revision-notes')}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2 text-xs font-medium text-cream-50 hover:bg-teal-700 transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            {t('study_tools.generate_notes')}
          </Link>
          <Link
            href={`/toolkit/test-builder?${buildQueryString(props, 'test-builder')}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-ink-700 hover:bg-cream-50 transition-colors"
          >
            <Brain className="h-3.5 w-3.5" />
            {t('study_tools.practice_quiz_label')}
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Exported component ────────────────────────────────────────────────────

export default function StudyTools(props: StudyToolsProps) {
  const variant = props.variant || 'full'

  switch (variant) {
    case 'compact':
      return <StudyToolsCompact {...props} />
    case 'banner':
      return <StudyToolsBanner {...props} />
    default:
      return <StudyToolsFull {...props} />
  }
}
