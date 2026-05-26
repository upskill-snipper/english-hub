'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { getBoardType } from '@/lib/board/board-filter'
import { getPapersForBoard, type Paper } from '@/data/paper-structures'
import {
  BookOpen,
  GraduationCap,
  Clock,
  Sparkles,
  Target,
  FileText,
  RefreshCcw,
  ArrowRight,
  History,
} from 'lucide-react'

/* ─── Paper card colour mapping ─────────────────────────────────── */

const PAPER_COLOUR = {
  teal: {
    bg: 'bg-teal-800',
    border: 'border-teal-600/40 hover:border-teal-500/60',
    badge: 'bg-teal-600/20 text-teal-300 border-teal-500/30',
    text: 'text-cream-50',
    sub: 'text-cream-200/70',
    arrow: 'text-teal-300',
    glow: 'shadow-teal-900/30',
  },
  clay: {
    bg: 'bg-clay-700',
    border: 'border-clay-500/40 hover:border-clay-400/60',
    badge: 'bg-clay-500/20 text-clay-200 border-clay-400/30',
    text: 'text-cream-50',
    sub: 'text-cream-200/70',
    arrow: 'text-clay-300',
    glow: 'shadow-clay-700/30',
  },
  sage: {
    bg: 'bg-sage-600',
    border: 'border-sage-500/40 hover:border-sage-400/60',
    badge: 'bg-sage-500/20 text-sage-200 border-sage-400/30',
    text: 'text-cream-50',
    sub: 'text-cream-200/70',
    arrow: 'text-sage-200',
    glow: 'shadow-sage-600/30',
  },
  ochre: {
    bg: 'bg-ochre-600',
    border: 'border-ochre-500/40 hover:border-ochre-400/60',
    badge: 'bg-ochre-500/20 text-ochre-200 border-ochre-400/30',
    text: 'text-cream-50',
    sub: 'text-cream-200/70',
    arrow: 'text-ochre-200',
    glow: 'shadow-ochre-600/30',
  },
  ink: {
    bg: 'bg-ink-700',
    border: 'border-ink-500/40 hover:border-ink-400/60',
    badge: 'bg-ink-500/20 text-ink-200 border-ink-400/30',
    text: 'text-cream-50',
    sub: 'text-cream-200/70',
    arrow: 'text-ink-200',
    glow: 'shadow-ink-700/30',
  },
} as const

/* ─── Quick-link fallback for boards without papers (KS3, IAL, etc.) */

type QuickLink = {
  title: string
  description: string
  href: string
  icon: typeof BookOpen
  color: string
}

function getFallbackQuickLinks(board: ExamBoard): QuickLink[] {
  switch (board) {
    case 'ks3':
      return [
        {
          title: 'Year 7 Courses',
          description: 'Foundation English skills for Year 7 students',
          href: '/courses?year=7',
          icon: BookOpen,
          color: 'text-emerald-400 bg-emerald-500/10',
        },
        {
          title: 'Year 8 Courses',
          description: 'Building on foundations with Year 8 English',
          href: '/courses?year=8',
          icon: BookOpen,
          color: 'text-blue-400 bg-blue-500/10',
        },
        {
          title: 'Year 9 Courses',
          description: 'Preparing for GCSE with Year 9 English',
          href: '/courses?year=9',
          icon: BookOpen,
          color: 'text-violet-400 bg-violet-500/10',
        },
        {
          title: 'Games',
          description: 'Fun English language and literacy games',
          href: '/games',
          icon: Sparkles,
          color: 'text-clay-600 bg-amber-500/10',
        },
        {
          title: 'Resources',
          description: 'Worksheets, guides and study materials for KS3',
          href: '/resources',
          icon: FileText,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'edexcel-igcse-lang':
      return [
        {
          title: 'Edexcel IGCSE Hub',
          description: 'IGCSE English Language preparation',
          href: '/igcse/edexcel',
          icon: BookOpen,
          color: 'text-sky-400 bg-sky-500/10',
        },
        {
          title: 'Exam Technique',
          description: 'Paper structure, timing and band descriptors',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'cambridge-0475':
      return [
        {
          title: 'Cambridge Literature Hub',
          description: 'IGCSE Literature in English (0475)',
          href: '/resources/english-literature/caie',
          icon: BookOpen,
          color: 'text-purple-400 bg-purple-500/10',
        },
        {
          title: 'Exam Technique',
          description: 'Paper walkthroughs for Cambridge Literature',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'ial-edexcel':
      return [
        {
          title: 'Courses',
          description: 'International A-Level English courses',
          href: '/courses',
          icon: BookOpen,
          color: 'text-clay-600 bg-amber-500/10',
        },
        {
          title: 'Exam Technique',
          description: 'IAL English exam preparation and strategies',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    default:
      return []
  }
}

/* ─── Recent activity hook ────────────────────────────────────────── */

type RecentActivityItem = {
  title: string
  href: string
  timestamp: number
}

const RECENT_ACTIVITY_KEY = 'english-hub-recent-activity'
const MAX_RECENT = 4

function useRecentActivity() {
  const [items, setItems] = useState<RecentActivityItem[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const raw = window.localStorage.getItem(RECENT_ACTIVITY_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as unknown
      if (!Array.isArray(parsed)) return
      const valid = parsed
        .filter(
          (entry): entry is RecentActivityItem =>
            !!entry &&
            typeof entry === 'object' &&
            typeof (entry as RecentActivityItem).title === 'string' &&
            typeof (entry as RecentActivityItem).href === 'string' &&
            typeof (entry as RecentActivityItem).timestamp === 'number',
        )
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, MAX_RECENT)
      setItems(valid)
    } catch {
      /* ignore malformed localStorage */
    }
  }, [])

  return items
}

function formatRelative(timestamp: number): string {
  const diff = Date.now() - timestamp
  if (diff < 60_000) return 'just now'
  const mins = Math.floor(diff / 60_000)
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  const weeks = Math.floor(days / 7)
  return `${weeks}w ago`
}

/* ─── Paper hero card ─────────────────────────────────────────────── */

function PaperHeroCard({ paper }: { paper: Paper }) {
  const c = PAPER_COLOUR[paper.colour]
  const sectionNames = paper.sections.map((s) => s.title).join(' / ')

  return (
    <Link href="/dashboard/papers" className="block group">
      <div
        className={cn(
          'relative rounded-2xl border overflow-hidden transition-all duration-300',
          'hover:-translate-y-1 hover:shadow-xl',
          c.border,
          c.glow,
        )}
      >
        {/* Coloured header */}
        <div className={cn('px-6 py-6 sm:px-7 sm:py-7', c.bg)}>
          {/* Diagonal line overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, transparent, transparent 14px, currentColor 14px, currentColor 15px)',
              color: '#FBF7F0',
            }}
          />

          <div className="relative">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="outline" className={cn('text-xs font-mono border', c.badge)}>
                {paper.examCode}
              </Badge>
              <Badge variant="outline" className={cn('text-xs font-mono border', c.badge)}>
                <Clock className="w-3 h-3 mr-1" />
                {paper.duration}
              </Badge>
              <Badge variant="outline" className={cn('text-xs font-mono border', c.badge)}>
                {paper.totalMarks} marks
              </Badge>
            </div>

            {/* Paper name */}
            <h3
              className={cn(
                'font-serif text-xl sm:text-2xl font-bold tracking-tight leading-tight mb-1',
                c.text,
              )}
            >
              {paper.name}
            </h3>
            <p className={cn('text-sm leading-relaxed mb-3', c.sub)}>{paper.subtitle}</p>

            {/* Section summary */}
            <p className={cn('text-xs font-mono leading-relaxed', c.sub)}>{sectionNames}</p>

            {/* Explore arrow */}
            <div className={cn('mt-4 flex items-center gap-1.5 text-sm font-semibold', c.arrow)}>
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

/* ─── Main component ──────────────────────────────────────────────── */

export default function BoardDashboardHero({ board }: { board: ExamBoard }) {
  const config = getBoardConfig(board)
  const papers = getPapersForBoard(board)
  const fallbackLinks = papers.length === 0 ? getFallbackQuickLinks(board) : []
  const recent = useRecentActivity()

  if (!config) return null

  const hasPapers = papers.length > 0

  return (
    <section className="relative overflow-x-hidden pt-16 pb-20 sm:pt-24 sm:pb-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ━━━ Header row: badge + change board ━━━ */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <Badge
              variant="outline"
              className="border-primary/25 bg-primary/[0.06] text-primary text-sm font-semibold mb-5 gap-2 px-4 py-1.5"
            >
              <Target className="w-4 h-4" />
              {config.shortName.toUpperCase().includes(config.type.toUpperCase())
                ? config.shortName
                : `${config.shortName} ${config.type.toUpperCase()}`}
            </Badge>
            <h1 className="text-foreground">
              Welcome back.
              <br />
              <span className="text-primary">
                You are studying{' '}
                {config.name.toUpperCase().includes(config.type.toUpperCase())
                  ? config.name
                  : `${config.name} ${config.type.toUpperCase()}`}{' '}
                English.
              </span>
            </h1>
            <p className="mt-5 text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
              {hasPapers ? (
                <>
                  Your exam is split into {papers.length} papers. Pick one to find every study
                  guide, poem, practice question and mock exam you need.
                </>
              ) : (
                <>
                  {config.description} - jump back in where you left off or explore your
                  board&rsquo;s toolkit below.
                </>
              )}
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              render={<Link href="/board-select?change=1" />}
            >
              <RefreshCcw className="w-4 h-4" />
              Change board
            </Button>
          </div>
        </div>

        {/* ━━━ PAPER CARDS - the hero element ━━━ */}
        {hasPapers && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-foreground text-xl sm:text-2xl font-bold tracking-tight">
                Your papers
              </h2>
              <Button
                variant="link"
                size="sm"
                className="text-primary font-semibold gap-1"
                render={<Link href="/dashboard/papers" />}
              >
                View all papers
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div
              className={cn(
                'grid gap-5',
                papers.length <= 2 && 'grid-cols-1 sm:grid-cols-2',
                papers.length === 3 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
                papers.length >= 4 && 'grid-cols-1 sm:grid-cols-2',
              )}
            >
              {papers.map((paper) => (
                <PaperHeroCard key={paper.id} paper={paper} />
              ))}
            </div>
          </div>
        )}

        {/* ━━━ Fallback quick links for boards without papers (KS3, IAL) ━━━ */}
        {!hasPapers && fallbackLinks.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-foreground text-xl sm:text-2xl font-bold tracking-tight">
                Your {config.shortName} toolkit
              </h2>
              <Button
                variant="link"
                size="sm"
                className="text-primary font-semibold gap-1"
                render={<Link href="/dashboard" />}
              >
                Open full dashboard
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {fallbackLinks.map((link) => (
                <Link key={link.href + link.title} href={link.href} className="block group">
                  <Card className="p-6 h-full flex flex-col border-border/40 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300">
                    <div
                      className={cn(
                        'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                        link.color,
                      )}
                    >
                      <link.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {link.description}
                    </p>
                    <span className="mt-4 text-sm text-primary font-semibold group-hover:underline inline-flex items-center gap-1">
                      Start now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ━━━ Recent activity row (client-only from localStorage) ━━━ */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <History className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-foreground text-lg sm:text-xl font-bold tracking-tight">
              Recent activity
            </h2>
          </div>

          {recent.length === 0 ? (
            <Card className="p-6 border-dashed border-border/50 bg-card/30">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-muted/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Nothing here yet</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Open a poem, course or mock paper from your toolkit and it will appear here next
                    time you visit.
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recent.map((item) => (
                <Link key={item.href + item.timestamp} href={item.href} className="block group">
                  <Card className="p-4 h-full border-border/40 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      {formatRelative(item.timestamp)}
                    </div>
                    <p className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ━━━ Secondary action row ━━━ */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="text-base px-8 h-12 shadow-lg shadow-primary/20"
            render={<Link href="/courses" />}
          >
            <BookOpen className="w-4 h-4" />
            Browse {config.shortName} courses
          </Button>
          {getBoardType(board) !== 'ks3' && (
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/mock-exams" />}
            >
              <FileText className="w-4 h-4" />
              Mock exams
            </Button>
          )}
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 h-12 gap-2"
            render={<Link href="/games" />}
          >
            <Sparkles className="w-4 h-4" />
            {getBoardType(board) === 'ks3' ? 'English games' : 'Exam-prep games'}
          </Button>
          {getBoardType(board) === 'ks3' && (
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/resources" />}
            >
              <FileText className="w-4 h-4" />
              Resources
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
