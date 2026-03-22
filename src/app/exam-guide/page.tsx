'use client'

import DOMPurify from 'dompurify'

const sanitize = (html: string) => {
  if (typeof window !== 'undefined') return DOMPurify.sanitize(html)
  return html
}
import { useState } from 'react'
import Link from 'next/link'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  Info,
  Layers,
  Lightbulb,
  ScrollText,
  Sparkles,
  Star,
  Target,
  ArrowRight,
  Search,
  BookMarked,
} from 'lucide-react'
import { useBoardStore } from '@/store/board-store'
import { useAuthStore } from '@/store/auth-store'
import {
  getGuideByBoard,
  getAllGuides,
  genericOverview,
  terminologyList,
  grade9Strategy,
  contextPeriods,
} from '@/data/exam-guides'

// ─── Board Card Config ─────────────────────────────────────────────────────────

const BOARD_CARDS = [
  {
    id: 'AQA' as const,
    slug: 'aqa',
    color: 'border-blue-500/50',
    hoverColor: 'hover:border-blue-500/80 hover:bg-blue-500/10',
    activeRing: 'ring-2 ring-blue-500 ring-offset-2 ring-offset-background',
    accent: 'text-blue-400',
    dot: 'bg-blue-500',
    badge: 'bg-blue-500/15 text-blue-400',
    description:
      'The most popular board in England. Known for clear structure, predictable question formats, and forgiving grade boundaries.',
  },
  {
    id: 'Edexcel' as const,
    slug: 'edexcel',
    color: 'border-violet-500/50',
    hoverColor: 'hover:border-violet-500/80 hover:bg-violet-500/10',
    activeRing: 'ring-2 ring-violet-500 ring-offset-2 ring-offset-background',
    accent: 'text-violet-400',
    dot: 'bg-violet-500',
    badge: 'bg-violet-500/15 text-violet-400',
    description:
      'Pearson Edexcel offers two Language specs (A and B). Broad essay-style questions with emphasis on extended writing.',
  },
  {
    id: 'OCR' as const,
    slug: 'ocr',
    color: 'border-orange-500/50',
    hoverColor: 'hover:border-orange-500/80 hover:bg-orange-500/10',
    activeRing: 'ring-2 ring-orange-500 ring-offset-2 ring-offset-background',
    accent: 'text-orange-400',
    dot: 'bg-orange-500',
    badge: 'bg-orange-500/15 text-orange-400',
    description:
      'OCR English Literature (J352) with distinctive component structure. Strong emphasis on comparative analysis.',
  },
  {
    id: 'WJEC' as const,
    slug: 'wjec',
    color: 'border-red-500/50',
    hoverColor: 'hover:border-red-500/80 hover:bg-red-500/10',
    activeRing: 'ring-2 ring-red-500 ring-offset-2 ring-offset-background',
    accent: 'text-red-400',
    dot: 'bg-red-500',
    badge: 'bg-red-500/15 text-red-400',
    description:
      'WJEC Eduqas for England. Unique paper structures with a focus on reading across both literary and non-literary texts.',
  },
  {
    id: 'IGCSE' as const,
    slug: 'igcse',
    color: 'border-purple-500/50',
    hoverColor: 'hover:border-purple-500/80 hover:bg-purple-500/10',
    activeRing: 'ring-2 ring-purple-500 ring-offset-2 ring-offset-background',
    accent: 'text-purple-400',
    dot: 'bg-purple-500',
    badge: 'bg-purple-500/15 text-purple-400',
    description:
      'Edexcel International GCSE English Language (4EA1). Widely used in international and independent schools with a 45-poem anthology.',
  },
]

// ─── Terminology Tab Config ────────────────────────────────────────────────────

const TERM_TABS = [
  { key: 'figurative', label: 'Figurative', icon: Sparkles },
  { key: 'sound', label: 'Sound', icon: ScrollText },
  { key: 'structural', label: 'Structural', icon: Layers },
  { key: 'sentence', label: 'Sentence', icon: FileText },
  { key: 'poetry', label: 'Poetry', icon: BookOpen },
] as const

// ─── Collapsible Panel ─────────────────────────────────────────────────────────

function Collapsible({
  title,
  icon: Icon,
  defaultOpen = false,
  children,
}: {
  title: string
  icon?: React.ElementType
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/40">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-6 py-4 text-left transition-colors duration-200 hover:bg-card/60"
      >
        {Icon && <Icon className="h-5 w-5 shrink-0 text-primary" />}
        <span className="flex-1 font-semibold text-foreground">{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

// ─── Page Component ────────────────────────────────────────────────────────────

export default function ExamGuidePage() {
  const { selectedBoard } = useBoardStore()
  const { user } = useAuthStore()
  const [activeTermTab, setActiveTermTab] = useState<string>('figurative')
  const [termSearch, setTermSearch] = useState('')

  const allGuides = getAllGuides()
  const isGCSEBoard =
    selectedBoard != null &&
    selectedBoard !== 'KS3' &&
    ['AQA', 'Edexcel', 'OCR', 'WJEC'].includes(selectedBoard)

  // Filter terminology by active tab and search
  const filteredTerms = terminologyList.filter((t) => {
    if (t.category !== activeTermTab) return false
    if (termSearch) {
      const q = termSearch.toLowerCase()
      return (
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      )
    }
    return true
  })

  // Count terms per category
  const termCounts = TERM_TABS.reduce(
    (acc, tab) => {
      acc[tab.key] = terminologyList.filter((t) => t.category === tab.key).length
      return acc
    },
    {} as Record<string, number>
  )

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-border bg-card/50">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <GraduationCap className="h-4 w-4" />
            Complete GCSE Exam Guide
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Exam Guide
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Comprehensive exam board guides, assessment objectives, mark schemes,
            grade boundaries, and proven strategies for achieving top grades.
            Pick your board for a tailored breakdown, or explore the universal
            sections below.
          </p>

          {isGCSEBoard && (
            <div className="mt-8">
              <Link
                href={`/exam-guide/${selectedBoard!.toLowerCase()}`}
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base"
              >
                View {selectedBoard} Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-4 py-10 sm:px-6">
        {/* ════════════════════════════════════════════════════════════════════
            KS3 NOTICE
           ════════════════════════════════════════════════════════════════════ */}
        {selectedBoard === 'KS3' && (
          <div className="flex gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <p className="font-semibold text-foreground">
                You have KS3 selected as your current level
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                The board-specific guides below are tailored for GCSE exam boards
                (AQA, Edexcel, OCR, WJEC). However, the{' '}
                <strong className="text-foreground">Generic Overview</strong>,{' '}
                <strong className="text-foreground">Grade 9 Strategy</strong>{' '}
                sections, and{' '}
                <strong className="text-foreground">
                  Terminology Reference
                </strong>{' '}
                are useful at any level and will help you build a strong
                foundation. Feel free to browse them to get ahead.
              </p>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            BOARD NAVIGATION CARDS
           ════════════════════════════════════════════════════════════════════ */}
        <section>
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Choose Your Exam Board
          </h2>
          <p className="mb-6 text-muted-foreground">
            Each guide covers the full specification, papers, mark schemes, grade
            boundaries, and examiner tips.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {BOARD_CARDS.map((board) => {
              const guide = getGuideByBoard(board.id)
              const isSelected = selectedBoard === (board.id as string) && selectedBoard !== 'KS3'

              return (
                <Link
                  key={board.id}
                  href={`/exam-guide/${board.slug}`}
                  className={`group flex flex-col rounded-xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${board.color} ${board.hoverColor} ${
                    isSelected ? board.activeRing : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 shrink-0 rounded-full ${board.dot}`} />
                      <h3 className={`text-lg font-bold ${board.accent} transition-colors group-hover:underline`}>
                        {board.id}
                      </h3>
                    </div>
                    {isSelected && (
                      <span className="shrink-0 rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        Your board
                      </span>
                    )}
                  </div>

                  {guide && guide.specCodes.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {guide.specCodes.map((spec) => (
                        <span
                          key={spec.code}
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${board.badge}`}
                        >
                          {spec.subject}: {spec.code}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {board.description}
                  </p>

                  <p className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View full guide
                    <ChevronRight className="h-3 w-3" />
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            GENERIC OVERVIEW — The English GCSE Landscape
           ════════════════════════════════════════════════════════════════════ */}
        <Collapsible
          title={genericOverview.landscape.title}
          icon={BookOpen}
          defaultOpen
        >
          <div
            className="prose-brand max-w-none text-sm leading-relaxed text-muted-foreground [&_em]:text-primary/80 [&_li]:ml-4 [&_li]:text-muted-foreground [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_p+p]:mt-3 [&_p]:text-muted-foreground [&_strong]:text-foreground [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5"
            dangerouslySetInnerHTML={{
              __html: sanitize(genericOverview.landscape.content),
            }}
          />

          {/* ── Universal Assessment Objectives ────────────────────────────── */}
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="mb-1 text-lg font-bold text-foreground">
              Universal Assessment Objectives
            </h3>
            <p className="mb-5 text-sm font-medium text-primary">
              {genericOverview.universalAOs.keyPrinciple}
            </p>

            {/* Language AOs */}
            <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
              <ScrollText className="h-4 w-4 text-primary" />
              English Language AOs
            </h4>
            <div className="mb-6 space-y-2">
              {genericOverview.universalAOs.language.map((ao) => (
                <div
                  key={ao.code}
                  className="flex items-start gap-4 rounded-lg border border-border bg-background/50 p-3"
                >
                  <span className="inline-flex h-7 w-14 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                    {ao.code}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-relaxed text-foreground">
                      {ao.description}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Weighting: {ao.weighting}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Literature AOs */}
            <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
              <BookMarked className="h-4 w-4 text-violet-400" />
              English Literature AOs
            </h4>
            <div className="space-y-2">
              {genericOverview.universalAOs.literature.map((ao) => (
                <div
                  key={ao.code}
                  className="flex items-start gap-4 rounded-lg border border-border bg-background/50 p-3"
                >
                  <span className="inline-flex h-7 w-14 shrink-0 items-center justify-center rounded-md bg-violet-500/10 text-xs font-bold text-violet-400">
                    {ao.code}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-relaxed text-foreground">
                      {ao.description}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Weighting: {ao.weighting}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mark Scheme Explainer ───────────────────────────────────────── */}
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="mb-3 text-lg font-bold text-foreground">
              {genericOverview.markSchemeExplainer.title}
            </h3>
            <div
              className="prose-brand max-w-none text-sm leading-relaxed text-muted-foreground [&_em]:text-primary/80 [&_li]:ml-4 [&_li]:text-muted-foreground [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_p+p]:mt-3 [&_p]:text-muted-foreground [&_strong]:text-foreground [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5"
              dangerouslySetInnerHTML={{
                __html: sanitize(genericOverview.markSchemeExplainer.content),
              }}
            />
          </div>

          {/* ── Level 3 to Level 4/5 Comparisons ───────────────────────────── */}
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="mb-1 text-lg font-bold text-foreground">
              {genericOverview.level3ToLevel4.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {genericOverview.level3ToLevel4.subtitle}
            </p>
            <div className="space-y-4">
              {genericOverview.level3ToLevel4.comparisons.map((comp, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-border"
                >
                  <div className="border-b border-border bg-card/60 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-400">
                        Level 3
                      </span>
                      <span className="text-xs text-muted-foreground">Grade 5-6</span>
                    </div>
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;{comp.level3}&rdquo;
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                        Level 4/5
                      </span>
                      <span className="text-xs text-muted-foreground">Grade 8-9</span>
                    </div>
                    <p
                      className="text-sm leading-relaxed text-foreground [&_em]:text-primary/80"
                      dangerouslySetInnerHTML={{
                        __html: sanitize(`&ldquo;${comp.level45}&rdquo;`),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Grade Boundary Summary Table ────────────────────────────────── */}
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="mb-1 text-lg font-bold text-foreground">
              {genericOverview.gradeBoundarySummary.title}
            </h3>
            <p className="mb-4 text-sm font-medium text-primary">
              {genericOverview.gradeBoundarySummary.insight}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Board
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Subject
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Max
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-primary">
                      Grade 9
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Grade 7
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Grade 4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {genericOverview.gradeBoundarySummary.boards.map((row) => (
                    <tr
                      key={`${row.board}-${row.subject}`}
                      className="border-b border-border/50 transition-colors hover:bg-card/40"
                    >
                      <td className="px-3 py-3 font-medium text-foreground">
                        {row.board}
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">{row.subject}</td>
                      <td className="px-3 py-3 text-center text-muted-foreground">
                        {row.max}
                      </td>
                      <td className="px-3 py-3 text-center font-semibold text-primary">
                        {row.grade9}
                      </td>
                      <td className="px-3 py-3 text-center text-foreground">
                        {row.grade7}
                      </td>
                      <td className="px-3 py-3 text-center text-muted-foreground">
                        {row.grade4}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Collapsible>

        {/* ════════════════════════════════════════════════════════════════════
            GRADE 9 STRATEGY
           ════════════════════════════════════════════════════════════════════ */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <Star className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {grade9Strategy.title}
            </h2>
          </div>

          <p className="mb-5 text-sm text-muted-foreground">
            Detailed strategies drawn from examiner reports and top-band
            exemplars. Each section includes worked examples demonstrating the
            difference between competent and exceptional responses.
          </p>

          <div className="space-y-4">
            {grade9Strategy.sections.map((section, i) => (
              <Collapsible
                key={i}
                title={section.heading}
                icon={Target}
                defaultOpen={i === 0}
              >
                <div className="mt-2 space-y-4">
                  <div
                    className="prose prose-sm prose-invert max-w-none text-muted-foreground leading-relaxed [&_h4]:text-foreground [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-muted-foreground [&_em]:text-primary/80 [&_p]:mb-3"
                    dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
                  />
                  {section.examples && section.examples.length > 0 && (
                    <div className="space-y-3">
                      {section.examples.map((ex, j) => (
                        <div
                          key={j}
                          className="rounded-lg border border-primary/20 bg-primary/5 p-4"
                        >
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                            {ex.label}
                          </p>
                          <p className="text-sm italic leading-relaxed text-foreground">
                            {ex.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Collapsible>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            TERMINOLOGY QUICK REFERENCE
           ════════════════════════════════════════════════════════════════════ */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Terminology Quick Reference
            </h2>
          </div>

          {/* Category tabs */}
          <div className="mb-4 flex flex-wrap gap-2">
            {TERM_TABS.map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeTermTab === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTermTab(tab.key)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'border border-border bg-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <TabIcon className="h-3.5 w-3.5" />
                  {tab.label}
                  <span
                    className={`ml-1 rounded-full px-1.5 py-0.5 text-xs ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-border text-muted-foreground'
                    }`}
                  >
                    {termCounts[tab.key] ?? 0}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search within category */}
          <div className="relative mb-5">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search terms in this category..."
              value={termSearch}
              onChange={(e) => setTermSearch(e.target.value)}
              aria-label="Search terminology"
              className="w-full rounded-lg border border-border bg-card py-2.5 pl-9 pr-4 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 sm:max-w-sm"
            />
          </div>

          {/* Term cards */}
          {filteredTerms.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {filteredTerms.map((term) => (
                <div
                  key={term.term}
                  className="rounded-xl border border-border bg-card/30 p-4 transition-colors hover:bg-card/50"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      {term.term}
                    </h3>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {term.category}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {term.definition}
                  </p>
                  {term.example && (
                    <div className="mt-3 rounded-lg bg-primary/5 p-3">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        Example
                      </p>
                      <p className="text-xs italic leading-relaxed text-muted-foreground">
                        {term.example}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border p-12 text-center">
              <Search className="mb-3 h-8 w-8 text-border" />
              <p className="text-sm text-muted-foreground">
                No terms match your search in this category.
              </p>
            </div>
          )}
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            HISTORICAL CONTEXT TIMELINE
           ════════════════════════════════════════════════════════════════════ */}
        <section>
          <div className="mb-2 flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Historical Context Timeline
            </h2>
          </div>
          <p className="mb-8 text-sm text-muted-foreground">
            Essential context for Literature essays. Weave these points into your
            analysis — do not bolt them on as a separate paragraph.
          </p>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-[18px] top-0 w-px bg-border sm:left-[22px]" />

            <div className="space-y-6">
              {contextPeriods.map((period) => (
                <TimelinePeriod key={period.period} period={period} />
              ))}
            </div>
          </div>
        </section>

        {/* Subscription CTA */}
        {!user && (
          <section>
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground sm:text-xl">
                    Love the exam guide? Our courses go even deeper.
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    Structured lessons, practice questions, and model answers.{' '}
                    <span className="font-semibold text-primary">First month FREE!</span>
                    {' '}Then {PRICING_DISPLAY.monthly} on a rolling monthly contract.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Annual subscription also available &mdash; save {PRICING.ANNUAL_SAVE_PERCENT}%.
                  </p>
                </div>
                <Link
                  href="/auth/register"
                  className="inline-flex shrink-0 items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            BOTTOM CTA
           ════════════════════════════════════════════════════════════════════ */}
        <section className="pt-4">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
            <div className="relative">
              <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
                Ready to dive deeper?
              </h2>
              <p className="mx-auto mb-8 max-w-md text-muted-foreground">
                Choose your exam board for a full specification breakdown with
                papers, mark schemes, grade boundaries, and examiner tips.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {BOARD_CARDS.map((board) => (
                  <Link
                    key={board.id}
                    href={`/exam-guide/${board.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
                  >
                    <span className={`h-2 w-2 rounded-full ${board.dot}`} />
                    {board.id}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// ─── Timeline Period Component ─────────────────────────────────────────────────

function TimelinePeriod({
  period,
}: {
  period: {
    period: string
    years: string
    relevantTexts: string
    keyPoints: string[]
  }
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="relative pl-12 sm:pl-14">
      {/* Timeline dot */}
      <div className="absolute left-[12px] top-5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background sm:left-[16px]" />

      <div className="rounded-xl border border-border bg-card/40 transition-colors hover:bg-card/60">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-start justify-between gap-3 p-5 text-left"
        >
          <div>
            <h3 className="text-base font-bold text-foreground">
              {period.period}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-primary">
              {period.years}
            </p>
            <p className="mt-1.5 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">Texts: </span>
              {period.relevantTexts}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 pt-1">
            <span className="rounded-full bg-border px-2 py-0.5 text-xs text-muted-foreground">
              {period.keyPoints.length} points
            </span>
            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        {expanded && (
          <div className="space-y-3 border-t border-border px-5 pb-5 pt-4">
            {period.keyPoints.map((point, j) => (
              <div key={j} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
