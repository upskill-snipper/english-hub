'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { getBoardType } from '@/lib/board/board-filter'
import {
  BookOpen,
  Feather,
  GraduationCap,
  Clock,
  Sparkles,
  Target,
  FileText,
  RefreshCcw,
  ArrowRight,
  History,
} from 'lucide-react'

type QuickLink = {
  title: string
  description: string
  href: string
  icon: typeof BookOpen
  color: string
}

type RecentActivityItem = {
  title: string
  href: string
  timestamp: number
}

const RECENT_ACTIVITY_KEY = 'english-hub-recent-activity'
const MAX_RECENT = 4

function getQuickLinks(board: ExamBoard): QuickLink[] {
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
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'Resources',
          description: 'Worksheets, guides and study materials for KS3',
          href: '/resources',
          icon: FileText,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'aqa':
      return [
        {
          title: 'Power & Conflict Poetry',
          description: '15 AQA anthology poems with line-by-line analysis',
          href: '/revision/poetry/power-and-conflict',
          icon: Feather,
          color: 'text-rose-400 bg-rose-500/10',
        },
        {
          title: 'Love & Relationships',
          description: '15 AQA anthology poems with themes and context',
          href: '/revision/poetry/love-and-relationships',
          icon: Feather,
          color: 'text-pink-400 bg-pink-500/10',
        },
        {
          title: 'Set Texts',
          description: 'Macbeth, An Inspector Calls, Jekyll & Hyde and more',
          href: '/revision/texts',
          icon: BookOpen,
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'AQA Exam Technique',
          description: 'Paper 1 & Paper 2 walkthroughs with expert tips',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'edexcel':
      return [
        {
          title: 'Edexcel Poetry Anthology',
          description: '15 Edexcel Conflict/Relationships/Time and Place poems',
          href: '/revision/poetry/edexcel',
          icon: Feather,
          color: 'text-violet-400 bg-violet-500/10',
        },
        {
          title: 'Set Texts',
          description: 'A Christmas Carol, An Inspector Calls, Romeo & Juliet and more',
          href: '/revision/texts',
          icon: BookOpen,
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'Edexcel Exam Technique',
          description: 'Paper 1 & Paper 2 strategies for Pearson Edexcel',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'ocr':
      return [
        {
          title: 'OCR Poetry Anthology',
          description: 'Towards a World Unknown, Conflict, Love and Relationships',
          href: '/revision/poetry/ocr',
          icon: Feather,
          color: 'text-orange-400 bg-orange-500/10',
        },
        {
          title: 'Set Texts',
          description: 'Shakespeare, 19th-century prose and modern texts for OCR',
          href: '/revision/texts',
          icon: BookOpen,
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'OCR Exam Technique',
          description: 'Component 01 & 02 walkthroughs and mark schemes',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'eduqas':
      return [
        {
          title: 'Eduqas Poetry Anthology',
          description: 'All 18 Eduqas anthology poems with context and themes',
          href: '/revision/poetry/eduqas',
          icon: Feather,
          color: 'text-red-400 bg-red-500/10',
        },
        {
          title: 'Set Texts',
          description: 'A Christmas Carol, Blood Brothers, Macbeth and more',
          href: '/revision/texts',
          icon: BookOpen,
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'Eduqas Exam Technique',
          description: 'Component 1 & 2 strategies for WJEC Eduqas',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'edexcel-igcse':
      return [
        {
          title: 'Edexcel IGCSE Hub',
          description: 'Paper 1 & Paper 2 preparation for Edexcel IGCSE Literature',
          href: '/igcse/edexcel',
          icon: BookOpen,
          color: 'text-emerald-400 bg-emerald-500/10',
        },
        {
          title: 'Set Texts & Anthology',
          description: 'Unseen passages, anthology texts and writing for real purposes',
          href: '/revision/texts',
          icon: Feather,
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'IGCSE Exam Technique',
          description: 'Paper structure, timing and band descriptors',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'cambridge-0500':
      return [
        {
          title: 'Cambridge First Language Hub',
          description: 'First Language English (A*-G) reading and writing',
          href: '/igcse/cambridge/0500',
          icon: BookOpen,
          color: 'text-sky-400 bg-sky-500/10',
        },
        {
          title: 'Reading & Composition',
          description: 'Directed writing, composition and reading for understanding',
          href: '/igcse/cambridge/reading',
          icon: Feather,
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'Cambridge Exam Technique',
          description: 'Paper 1 & Paper 2 walkthroughs for Cambridge First Language',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    case 'cambridge-0990':
      return [
        {
          title: 'Cambridge First Language (9-1) Hub',
          description: 'First Language English 9-1 reading and writing',
          href: '/igcse/cambridge/0990',
          icon: BookOpen,
          color: 'text-sky-400 bg-sky-500/10',
        },
        {
          title: 'Reading & Composition',
          description: 'Directed writing, composition and reading for understanding',
          href: '/igcse/cambridge/reading',
          icon: Feather,
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'Cambridge Exam Technique',
          description: 'Paper 1 & Paper 2 walkthroughs for Cambridge First Language (9-1)',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
    // TODO: add dedicated quick links when content is built for these boards
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
          href: '/igcse/cambridge/0500',
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
          color: 'text-amber-400 bg-amber-500/10',
        },
        {
          title: 'Exam Technique',
          description: 'IAL English exam preparation and strategies',
          href: '/revision/exam-technique',
          icon: GraduationCap,
          color: 'text-primary bg-primary/10',
        },
      ]
  }
}

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

export default function BoardDashboardHero({ board }: { board: ExamBoard }) {
  const config = getBoardConfig(board)
  const quickLinks = getQuickLinks(board)
  const recent = useRecentActivity()

  if (!config) return null

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
              {config.shortName.toUpperCase().includes(config.type.toUpperCase()) ? config.shortName : `${config.shortName} ${config.type.toUpperCase()}`}
            </Badge>
            <h1 className="text-foreground">
              Welcome back.
              <br />
              <span className="text-primary">You are studying {config.name.toUpperCase().includes(config.type.toUpperCase()) ? config.name : `${config.name} ${config.type.toUpperCase()}`} English.</span>
            </h1>
            <p className="mt-5 text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
              {config.description} — jump back in where you left off or explore your board&rsquo;s toolkit below.
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

        {/* ━━━ Quick links to board-specific content ━━━ */}
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
            {quickLinks.map((link) => (
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
                    Open a poem, course or mock paper from your toolkit and it will appear here next time you visit.
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
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/mock-exams" />}>
              <FileText className="w-4 h-4" />
              Mock exams
            </Button>
          )}
          <Button variant="outline" size="lg" className="text-base px-8 h-12 gap-2" render={<Link href="/games" />}>
            <Sparkles className="w-4 h-4" />
            {getBoardType(board) === 'ks3' ? 'English games' : 'Exam-prep games'}
          </Button>
          {getBoardType(board) === 'ks3' && (
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/resources" />}>
              <FileText className="w-4 h-4" />
              Resources
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
