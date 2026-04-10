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
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { ExamBoard } from '@/lib/board/board-store'
import { isIgcseBoard } from '@/lib/board/board-filter'

/* ── Board-specific paper info ────────────────────────────────────── */

interface PaperInfo {
  paper1: { name: string; focus: string }
  paper2: { name: string; focus: string }
}

const BOARD_PAPERS: Record<Exclude<ExamBoard, 'cambridge-0500' | 'cambridge-0990' | 'edexcel-igcse'>, PaperInfo> = {
  aqa: {
    paper1: {
      name: 'Paper 1: Explorations in Creative Reading and Writing',
      focus: 'Unseen fiction extract (20th/21st century) and creative prose writing.',
    },
    paper2: {
      name: "Paper 2: Writers' Viewpoints and Perspectives",
      focus: 'Two linked non-fiction texts (one 19th century, one 20th/21st) and a transactional writing task.',
    },
  },
  edexcel: {
    paper1: {
      name: 'Paper 1: Fiction and Imaginative Writing',
      focus: '20th/21st century fiction extract and a choice of imaginative writing tasks.',
    },
    paper2: {
      name: 'Paper 2: Non-fiction and Transactional Writing',
      focus: '19th century and 20th/21st century non-fiction, plus a transactional writing task.',
    },
  },
  ocr: {
    paper1: {
      name: 'Paper 1: Communicating Information and Ideas',
      focus: '19th and 21st century non-fiction reading and original non-fiction writing.',
    },
    paper2: {
      name: 'Paper 2: Exploring Effects and Impact',
      focus: '20th and 21st century prose fiction reading and original creative prose writing.',
    },
  },
  eduqas: {
    paper1: {
      name: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
      focus: 'Unseen 20th century prose extract and a creative prose task.',
    },
    paper2: {
      name: 'Component 2: 19th and 21st Century Reading and Transactional Writing',
      focus: 'Two non-fiction texts (19th and 21st century) and two transactional writing tasks.',
    },
  },
}

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

interface LanguageViewProps {
  boardId: ExamBoard | null
  boardName: string
}

export default function LanguageView({ boardId, boardName }: LanguageViewProps) {
  const { progress, toggleSection, completedCount, totalCount, percentage } =
    useLanguageProgress()
  const [expandedTips, setExpandedTips] = useState<string | null>(null)

  const heading = boardId
    ? `${boardName} English Language Revision`
    : 'English Language Revision'

  const papers =
    boardId && boardId in BOARD_PAPERS
      ? BOARD_PAPERS[boardId as keyof typeof BOARD_PAPERS]
      : null

  const showIgcseBanner = isIgcseBoard(boardId)

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
              {heading}
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Reading, writing, and SPaG mastery tailored to your exam board
            </p>
          </div>
        </div>
      </div>

      {/* IGCSE redirect banner */}
      {showIgcseBanner && (
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5 flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-400" />
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-foreground">
              Your board uses a different paper structure
            </h2>
            <p className="mt-1 text-body-sm text-muted-foreground">
              {boardId === 'cambridge-0500' &&
                'Cambridge IGCSE 0500 has its own reading and directed writing papers. The generic reading, writing, and SPaG guidance below still applies to your learning, but for exam-specific guidance see your Cambridge 0500 hub.'}
              {boardId === 'cambridge-0990' &&
                'Cambridge IGCSE 0990 uses 9-1 grading and its own paper structure. The generic reading, writing, and SPaG guidance below still applies to your learning, but for exam-specific guidance see your Cambridge 0990 hub.'}
              {boardId === 'edexcel-igcse' &&
                'Edexcel IGCSE uses a different paper structure to UK GCSE. The generic reading, writing, and SPaG guidance below still applies, but the exam format is different.'}
            </p>
            <div className="mt-3">
              <Button
                variant="outline"
                size="sm"
                render={
                  <Link
                    href={
                      boardId === 'cambridge-0500'
                        ? '/igcse/cambridge/0500'
                        : boardId === 'cambridge-0990'
                        ? '/igcse/cambridge/0990'
                        : '/igcse/edexcel'
                    }
                  />
                }
              >
                Go to your IGCSE hub
                <ArrowRight className="size-3.5" />
              </Button>
            </div>
          </div>
        </div>
      )}

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

      {/* Exam tip banner -- board-specific paper info */}
      {papers && (
        <div className="rounded-2xl border border-border/60 bg-gradient-to-r from-violet-500/[0.06] via-card to-blue-500/[0.04] p-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="size-5 text-violet-400" />
            <h2 className="text-heading-md font-heading text-foreground">
              {boardName} Language Papers at a Glance
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <Badge variant="outline" className="mb-2 text-xs">Paper 1</Badge>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {papers.paper1.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {papers.paper1.focus}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <Badge variant="outline" className="mb-2 text-xs">Paper 2</Badge>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {papers.paper2.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {papers.paper2.focus}
              </p>
            </div>
          </div>
          <p className="mt-3 text-caption text-muted-foreground">
            Both papers carry equal weight and both test SPaG in the writing section.
          </p>
        </div>
      )}

      {!papers && !showIgcseBanner && (
        <div className="rounded-2xl border border-border/60 bg-gradient-to-r from-violet-500/[0.06] via-card to-blue-500/[0.04] p-6 text-center">
          <Lightbulb className="mx-auto mb-3 size-7 text-violet-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Language Paper Quick Reminder
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
            Select your exam board to see paper-specific guidance. Paper 1 and
            Paper 2 structures vary by board, but reading, writing, and SPaG
            skills are universal.
          </p>
          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              render={<Link href="/board-select" />}
            >
              Select your exam board
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
