'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ExamBoard } from '@/lib/board/board-config'
import {
  getPapersForBoard,
  type Paper,
  type PaperSection,
  type LinkType,
} from '@/data/paper-structures'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Clock,
  Feather,
  FileText,
  GraduationCap,
  Layers,
  Target,
} from 'lucide-react'

/* ─── Colour mappings for paper accent ────────────────────────────── */

const COLOUR_MAP = {
  teal: {
    card: 'border-teal-600/30 hover:border-teal-500/50',
    headerBg: 'bg-teal-800',
    headerText: 'text-cream-50',
    badge: 'bg-teal-600/15 text-teal-400 border-teal-500/25',
    accentText: 'text-teal-400',
    sectionBg: 'bg-teal-900/20',
    sectionBorder: 'border-teal-700/20',
    dotBg: 'bg-teal-500',
    linkHover: 'hover:text-teal-400',
    iconBg: 'bg-teal-600/15 text-teal-400',
  },
  clay: {
    card: 'border-clay-500/30 hover:border-clay-400/50',
    headerBg: 'bg-clay-700',
    headerText: 'text-cream-50',
    badge: 'bg-clay-500/15 text-clay-400 border-clay-500/25',
    accentText: 'text-clay-400',
    sectionBg: 'bg-clay-700/10',
    sectionBorder: 'border-clay-600/20',
    dotBg: 'bg-clay-500',
    linkHover: 'hover:text-clay-400',
    iconBg: 'bg-clay-500/15 text-clay-400',
  },
  sage: {
    card: 'border-sage-500/30 hover:border-sage-400/50',
    headerBg: 'bg-sage-600',
    headerText: 'text-cream-50',
    badge: 'bg-sage-500/15 text-sage-400 border-sage-500/25',
    accentText: 'text-sage-400',
    sectionBg: 'bg-sage-600/10',
    sectionBorder: 'border-sage-500/20',
    dotBg: 'bg-sage-500',
    linkHover: 'hover:text-sage-400',
    iconBg: 'bg-sage-500/15 text-sage-400',
  },
  ochre: {
    card: 'border-ochre-500/30 hover:border-ochre-400/50',
    headerBg: 'bg-ochre-600',
    headerText: 'text-cream-50',
    badge: 'bg-ochre-500/15 text-ochre-400 border-ochre-500/25',
    accentText: 'text-ochre-400',
    sectionBg: 'bg-ochre-500/10',
    sectionBorder: 'border-ochre-500/20',
    dotBg: 'bg-ochre-500',
    linkHover: 'hover:text-ochre-400',
    iconBg: 'bg-ochre-500/15 text-ochre-400',
  },
  ink: {
    card: 'border-ink-500/30 hover:border-ink-400/50',
    headerBg: 'bg-ink-700',
    headerText: 'text-cream-50',
    badge: 'bg-ink-500/15 text-ink-400 border-ink-500/25',
    accentText: 'text-ink-400',
    sectionBg: 'bg-ink-700/10',
    sectionBorder: 'border-ink-600/20',
    dotBg: 'bg-ink-500',
    linkHover: 'hover:text-ink-400',
    iconBg: 'bg-ink-500/15 text-ink-400',
  },
} as const

/* ─── Type icons ──────────────────────────────────────────────────── */

function linkIcon(type: LinkType) {
  switch (type) {
    case 'text':
      return BookOpen
    case 'poetry':
      return Feather
    case 'technique':
      return GraduationCap
    case 'practice':
      return Target
    case 'mock':
      return FileText
  }
}

function linkTypeLabel(type: LinkType, t: (key: string) => string) {
  switch (type) {
    case 'text':
      return t('dash.papers.type.text')
    case 'poetry':
      return t('dash.papers.type.poetry')
    case 'technique':
      return t('dash.papers.type.technique')
    case 'practice':
      return t('dash.papers.type.practice')
    case 'mock':
      return t('dash.papers.type.mock')
  }
}

/* ─── Section component ───────────────────────────────────────────── */

function PaperSectionCard({
  section,
  colour,
  defaultOpen,
}: {
  section: PaperSection
  colour: keyof typeof COLOUR_MAP
  defaultOpen: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const t = useT()
  const c = COLOUR_MAP[colour]

  return (
    <div
      className={cn(
        'rounded-xl border transition-colors duration-200',
        c.sectionBorder,
        c.sectionBg,
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left group"
      >
        <span className={cn('w-2.5 h-2.5 rounded-full shrink-0', c.dotBg)} />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground text-[15px] leading-snug">
            {section.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
            {section.description}
          </p>
        </div>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {section.links.map((link) => {
              const Icon = linkIcon(link.type)
              return (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={cn(
                    'group/link flex items-center gap-3 rounded-lg px-3.5 py-3 bg-card/60 border border-border/40',
                    'hover:border-primary/30 hover:-translate-y-px hover:shadow-sm transition-all duration-200',
                  )}
                >
                  <span
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                      c.iconBg,
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-foreground group-hover/link:text-primary transition-colors duration-200 line-clamp-1">
                      {link.label}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {linkTypeLabel(link.type, t)}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 shrink-0" />
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Paper card ──────────────────────────────────────────────────── */

function PaperCard({ paper, defaultExpanded }: { paper: Paper; defaultExpanded: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const t = useT()
  const c = COLOUR_MAP[paper.colour]
  const totalLinks = paper.sections.reduce((sum, s) => sum + s.links.length, 0)

  return (
    <div
      className={cn(
        'rounded-2xl border bg-card overflow-hidden transition-all duration-300',
        expanded && 'shadow-lg shadow-black/5',
        c.card,
      )}
    >
      {/* Paper header */}
      <div className={cn('px-6 py-6 sm:px-8 sm:py-7', c.headerBg)}>
        {/* Diagonal line pattern (matching anthology style) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, transparent, transparent 14px, currentColor 14px, currentColor 15px)',
            color: '#FBF7F0',
          }}
        />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="outline" className={cn('text-xs font-mono border', c.badge)}>
              {paper.examCode}
            </Badge>
            <Badge variant="outline" className={cn('text-xs font-mono border', c.badge)}>
              <Clock className="w-3 h-3 mr-1" />
              {paper.duration}
            </Badge>
            <Badge variant="outline" className={cn('text-xs font-mono border', c.badge)}>
              {paper.totalMarks} {t('dash.papers.marks_suffix')}
            </Badge>
          </div>

          <h3
            className={cn(
              'font-serif text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-1.5',
              c.headerText,
            )}
          >
            {paper.name}
          </h3>
          <p className={cn('text-sm sm:text-base opacity-80', c.headerText)}>{paper.subtitle}</p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm opacity-70">
              <Layers className="w-4 h-4" />
              <span className={c.headerText}>
                {paper.sections.length}{' '}
                {paper.sections.length !== 1
                  ? t('dash.papers.section_many')
                  : t('dash.papers.section_one')}{' '}
                &middot; {totalLinks}{' '}
                {totalLinks !== 1 ? t('dash.papers.resource_many') : t('dash.papers.resource_one')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle expand */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 border-b border-border/40"
      >
        {expanded ? t('dash.papers.collapse') : t('dash.papers.expand')}
        <ChevronDown
          className={cn('w-4 h-4 transition-transform duration-200', expanded && 'rotate-180')}
        />
      </button>

      {/* Sections */}
      {expanded && (
        <div className="p-5 sm:p-6 space-y-4">
          {paper.sections.map((section, i) => (
            <PaperSectionCard
              key={section.title}
              section={section}
              colour={paper.colour}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Main dashboard ──────────────────────────────────────────────── */

type Props = {
  board: ExamBoard
  boardName: string
  boardFullName: string
}

export default function PapersDashboard({ board, boardName, boardFullName }: Props) {
  const t = useT()
  const papers = getPapersForBoard(board)

  if (papers.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-muted/40 flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
          {t('dash.papers.empty_title')}
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          {t('dash.papers.empty_body').replace('{board}', boardName)}
        </p>
        <Button variant="default" render={<Link href="/revision" />}>
          <BookOpen className="w-4 h-4" />
          {t('dash.papers.go_revision')}
        </Button>
      </section>
    )
  }

  return (
    <section className="relative overflow-x-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 sm:pt-14 sm:pb-24">
        {/* Back link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('dash.papers.back')}
        </Link>

        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="outline"
              className="border-primary/25 bg-primary/[0.06] text-primary text-xs font-mono px-3 py-1"
            >
              {boardName}
            </Badge>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
            {t('dash.papers.title')}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            {t('dash.papers.intro').replace('{board}', boardFullName)}
          </p>
        </div>

        {/* Paper cards */}
        <div className="space-y-6">
          {papers.map((paper, i) => (
            <PaperCard key={paper.id} paper={paper} defaultExpanded={i === 0} />
          ))}
        </div>

        {/* Bottom actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="text-base px-8 h-12 shadow-lg shadow-primary/20"
            render={<Link href="/mock-exams" />}
          >
            <FileText className="w-4 h-4" />
            {t('dash.papers.all_mocks')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="text-base px-8 h-12"
            render={<Link href="/revision" />}
          >
            <BookOpen className="w-4 h-4" />
            {t('dash.papers.full_revision')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 h-12 gap-2"
            render={<Link href="/revision/flashcards" />}
          >
            <Layers className="w-4 h-4" />
            {t('dash.papers.flashcards')}
          </Button>
        </div>
      </div>
    </section>
  )
}
