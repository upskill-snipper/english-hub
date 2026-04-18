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
import { FileText, Brain, PenLine, Quote, Users, BookOpen, Sparkles, ChevronRight } from 'lucide-react'

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
    label: 'AI Revision Notes',
    description: 'Generate personalised revision notes tailored to your grade and weak areas',
    icon: FileText,
    color: 'text-clay-600',
    bg: 'bg-clay-500/5',
    border: 'border-clay-500/20',
    href: '/toolkit/revision-builder',
  },
  {
    id: 'test-builder',
    label: 'Practice Quiz',
    description: 'Build a timed quiz on this text with instant marking and feedback',
    icon: Brain,
    color: 'text-teal-700',
    bg: 'bg-teal-800/5',
    border: 'border-teal-800/20',
    href: '/toolkit/test-builder',
  },
  {
    id: 'essay-plan',
    label: 'Essay Planner',
    description: 'Get a structured essay plan with thesis, paragraphs, and embedded quotes',
    icon: PenLine,
    color: 'text-teal-700',
    bg: 'bg-teal-800/5',
    border: 'border-teal-800/20',
    href: '/toolkit/revision-builder',
  },
  {
    id: 'key-quotes',
    label: 'Quote Bank',
    description: 'Curated key quotes with analysis, context, and exam technique tips',
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

  return (
    <section className={`rounded-2xl border border-ink-200 bg-white overflow-hidden ${className}`}>
      {/* Header */}
      <div className="border-b border-ink-200 bg-cream-50 px-6 py-5">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-4 w-4 text-clay-500" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-clay-600">
            AI Study Tools
          </span>
        </div>
        <h3 className="font-serif text-xl font-normal text-ink-900 tracking-tight">
          Study <em className="italic text-clay-600">{textName}</em> with AI
        </h3>
        <p className="text-sm text-ink-500 mt-1">
          Generate personalised revision materials, quizzes, and essay plans for this text.
        </p>
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
                  {tool.label}
                </p>
                <p className="text-xs text-ink-500 mt-0.5 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-ink-300 mt-1 shrink-0 group-hover:text-teal-700 transition-colors" />
            </Link>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-ink-100 bg-cream-50/50 px-6 py-3 flex items-center justify-between">
        <p className="text-xs text-ink-400">
          All outputs use The English Hub Anthology template
        </p>
        <Link
          href={`/toolkit?text=${encodeURIComponent(textName)}`}
          className="text-xs font-medium text-teal-700 hover:text-teal-800 transition-colors"
        >
          All tools &rarr;
        </Link>
      </div>
    </section>
  )
}

// ─── Compact variant ───────────────────────────────────────────────────────

function StudyToolsCompact(props: StudyToolsProps) {
  const { textName, className = '' } = props

  return (
    <div className={`rounded-xl border border-ink-200 bg-white p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="h-3.5 w-3.5 text-clay-500" />
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-clay-600">
          AI Study Tools · {textName}
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
              {tool.label}
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

  return (
    <div className={`rounded-xl border border-teal-800/15 bg-teal-800/5 px-5 py-4 ${className}`}>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-teal-800/10 p-2">
            <Sparkles className="h-4 w-4 text-teal-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-ink-900">
              Revise <em className="font-serif italic text-clay-600">{textName}</em> with AI
            </p>
            <p className="text-xs text-ink-500 mt-0.5">
              Revision notes, quizzes, essay plans &mdash; personalised to your grade
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/toolkit/revision-builder?${buildQueryString(props, 'revision-notes')}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2 text-xs font-medium text-cream-50 hover:bg-teal-700 transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            Generate Notes
          </Link>
          <Link
            href={`/toolkit/test-builder?${buildQueryString(props, 'test-builder')}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-4 py-2 text-xs font-medium text-ink-700 hover:bg-cream-50 transition-colors"
          >
            <Brain className="h-3.5 w-3.5" />
            Practice Quiz
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
