'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  PenTool,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Edit3,
  CheckCircle2,
  Lightbulb,
  SpellCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Section data ─────────────────────────────────────────────────── */

interface LanguageSection {
  title: string
  description: string
  href: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
  stats: string
  tips: string[]
}

const SECTIONS: LanguageSection[] = [
  {
    title: 'Reading Skills',
    description:
      'How to approach unseen extracts, inference and deduction, language analysis using What-How-Why, comparison techniques, and model responses at every grade.',
    href: '/revision/language/reading',
    icon: BookOpen,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    stats: '7 key topics',
    tips: [
      'Always re-read the extract at least twice before answering',
      'Highlight key words in the question to stay focused',
      'Use short, embedded quotations rather than long block quotes',
    ],
  },
  {
    title: 'Writing Skills',
    description:
      'Creative writing techniques for narrative and descriptive pieces, transactional writing for articles, letters, and speeches, plus planning and vocabulary strategies.',
    href: '/revision/language/writing',
    icon: Edit3,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    stats: '6 key topics',
    tips: [
      'Spend 5 minutes planning before you write a single sentence',
      'Vary your sentence lengths deliberately for effect',
      'End with a circular structure that links back to your opening',
    ],
  },
  {
    title: 'SPaG',
    description:
      'Spelling rules and common errors, punctuation mastery (semicolons, colons, dashes, apostrophes), grammar essentials, and the mistakes that cost marks.',
    href: '/revision/language/spag',
    icon: SpellCheck,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    stats: '4 key areas',
    tips: [
      'Semicolons join two complete sentences that are closely related',
      'Apostrophes show possession or contraction, never plurals',
      'Read your work aloud to catch awkward grammar naturally',
    ],
  },
]

/* ── Progress tracking ────────────────────────────────────────────── */

const PROGRESS_KEY = 'english-hub-language-progress'

interface SectionProgress {
  [key: string]: boolean
}

function useLanguageProgress() {
  const [progress, setProgress] = useState<SectionProgress>({})

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY)
      if (stored) setProgress(JSON.parse(stored))
    } catch {
      /* ignore */
    }
  }, [])

  const toggleSection = (key: string) => {
    setProgress((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
      return next
    })
  }

  const completedCount = Object.values(progress).filter(Boolean).length
  const totalCount = SECTIONS.length
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return { progress, toggleSection, completedCount, totalCount, percentage }
}

/* ── Component ────────────────────────────────────────────────────── */

export default function LanguagePage() {
  const { progress, toggleSection, completedCount, totalCount, percentage } =
    useLanguageProgress()
  const [expandedTips, setExpandedTips] = useState<string | null>(null)

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Revision Hub
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <PenTool className="size-5 text-violet-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Language Skills
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Reading, writing, and SPaG mastery for GCSE English Language
            </p>
          </div>
        </div>
      </div>

      {/* Progress overview */}
      <div className="rounded-2xl border border-border/60 bg-card p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Your Progress
            </span>
          </div>
          <Badge variant="secondary">
            {completedCount}/{totalCount} sections
          </Badge>
        </div>
        <div className="h-2 w-full rounded-full bg-muted/60">
          <div
            className="h-2 rounded-full bg-primary transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="mt-2 text-caption text-muted-foreground">
          Click the checkbox on each section card to track what you have revised
        </p>
      </div>

      {/* Section cards */}
      <div className="space-y-4">
        {SECTIONS.map((section) => {
          const key = section.href
          const isComplete = !!progress[key]
          const tipsOpen = expandedTips === key

          return (
            <div
              key={key}
              className="rounded-2xl border border-border/60 bg-card transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <button
                    type="button"
                    onClick={() => toggleSection(key)}
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                      isComplete
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary/50'
                    }`}
                    aria-label={
                      isComplete
                        ? `Mark ${section.title} as incomplete`
                        : `Mark ${section.title} as complete`
                    }
                  >
                    {isComplete && <CheckCircle2 className="size-3" />}
                  </button>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className={`flex size-8 items-center justify-center rounded-lg ${section.bgColour}`}
                      >
                        <section.icon className={`size-4 ${section.colour}`} />
                      </div>
                      <div>
                        <h2 className="text-heading-md font-heading text-foreground">
                          {section.title}
                        </h2>
                        <span className="text-caption text-muted-foreground">
                          {section.stats}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>

                    {/* Quick tips toggle */}
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedTips(tipsOpen ? null : key)
                      }
                      className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    >
                      <Lightbulb className="size-3" />
                      {tipsOpen ? 'Hide quick tips' : 'Show quick tips'}
                    </button>

                    {tipsOpen && (
                      <ul className="mt-2 space-y-1.5 pl-1">
                        {section.tips.map((tip, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <span className="mt-0.5 text-primary">*</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        render={<Link href={section.href} />}
                      >
                        Start revising
                        <ArrowRight className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Exam tip banner */}
      <div className="rounded-2xl border border-border/60 bg-gradient-to-r from-violet-500/[0.06] via-card to-blue-500/[0.04] p-6 text-center">
        <Lightbulb className="mx-auto mb-3 size-7 text-violet-400" />
        <h2 className="text-heading-md font-heading text-foreground">
          Language Paper Quick Reminder
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Paper 1 focuses on fiction (creative reading and writing). Paper 2
          focuses on non-fiction (reading comprehension and transactional
          writing). Both papers carry equal weight and both test SPaG in the
          writing section.
        </p>
      </div>
    </div>
  )
}
