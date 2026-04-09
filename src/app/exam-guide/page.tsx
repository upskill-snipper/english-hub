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
  FileCheck,
  FileText,
  GraduationCap,
  Info,
  Layers,
  Lightbulb,
  PenTool,
  ScrollText,
  Sparkles,
  Star,
  Target,
  Timer,
  Trophy,
  ArrowRight,
  Search,
  BookMarked,
  Settings,
} from 'lucide-react'
import { useBoardStore } from '@/store/board-store'
import { useAuthStore } from '@/store/auth-store'
import {
  getGuideByBoard,
  terminologyList,
  grade9Strategy,
  contextPeriods,
} from '@/data/exam-guides'

// ─── Board style lookup ──────────────────────────────────────────────────────

const BOARD_STYLES: Record<
  string,
  { accent: string; dot: string; badge: string; border: string }
> = {
  AQA: {
    accent: 'text-blue-400',
    dot: 'bg-blue-500',
    badge: 'bg-blue-500/15 text-blue-400',
    border: 'border-blue-500/40',
  },
  Edexcel: {
    accent: 'text-violet-400',
    dot: 'bg-violet-500',
    badge: 'bg-violet-500/15 text-violet-400',
    border: 'border-violet-500/40',
  },
  OCR: {
    accent: 'text-orange-400',
    dot: 'bg-orange-500',
    badge: 'bg-orange-500/15 text-orange-400',
    border: 'border-orange-500/40',
  },
  WJEC: {
    accent: 'text-red-400',
    dot: 'bg-red-500',
    badge: 'bg-red-500/15 text-red-400',
    border: 'border-red-500/40',
  },
  IGCSE: {
    accent: 'text-purple-400',
    dot: 'bg-purple-500',
    badge: 'bg-purple-500/15 text-purple-400',
    border: 'border-purple-500/40',
  },
}

// ─── Board Card Config (for no-board-selected state) ─────────────────────────

const BOARD_CARDS = [
  {
    id: 'AQA' as const,
    slug: 'aqa',
    color: 'border-blue-500/50',
    hoverColor: 'hover:border-blue-500/80 hover:bg-blue-500/10',
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
    accent: 'text-purple-400',
    dot: 'bg-purple-500',
    badge: 'bg-purple-500/15 text-purple-400',
    description:
      'Edexcel International GCSE English Language (4EA1). Widely used in international and independent schools with a 45-poem anthology.',
  },
]

// ─── Terminology Tab Config ──────────────────────────────────────────────────

const TERM_TABS = [
  { key: 'figurative', label: 'Figurative', icon: Sparkles },
  { key: 'sound', label: 'Sound', icon: ScrollText },
  { key: 'structural', label: 'Structural', icon: Layers },
  { key: 'sentence', label: 'Sentence', icon: FileText },
  { key: 'poetry', label: 'Poetry', icon: BookOpen },
] as const

// ─── Collapsible Panel ───────────────────────────────────────────────────────

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

// ─── Page Component ──────────────────────────────────────────────────────────

export default function ExamGuidePage() {
  const { selectedBoard } = useBoardStore()
  const { user } = useAuthStore()
  const [activeTermTab, setActiveTermTab] = useState<string>('figurative')
  const [termSearch, setTermSearch] = useState('')

  const isGCSEBoard =
    selectedBoard != null &&
    selectedBoard !== 'KS3' &&
    ['AQA', 'Edexcel', 'OCR', 'WJEC', 'IGCSE'].includes(selectedBoard)

  const guide = isGCSEBoard ? getGuideByBoard(selectedBoard!) : null
  const style = isGCSEBoard ? BOARD_STYLES[selectedBoard!] : null

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
            {isGCSEBoard ? `${selectedBoard} Exam Guide` : 'Complete GCSE Exam Guide'}
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {isGCSEBoard ? `${selectedBoard} Exam Guide` : 'Exam Guide'}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {isGCSEBoard
              ? `Everything you need for your ${selectedBoard} GCSE English exams: papers breakdown, timing, mark schemes, grade boundaries, and examiner tips.`
              : 'Comprehensive exam board guides, assessment objectives, mark schemes, grade boundaries, and proven strategies for achieving top grades.'}
          </p>

          {isGCSEBoard && guide && (
            <div className="mt-6 flex flex-wrap gap-2">
              {guide.specCodes.map((spec) => (
                <span
                  key={spec.code}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${style!.badge}`}
                >
                  {spec.subject}: {spec.code}
                </span>
              ))}
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
                Select a GCSE exam board to see exam-specific guidance
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You currently have KS3 selected. The terminology reference and
                historical context sections below are useful at any level, but
                the detailed exam board breakdowns require a GCSE board.
              </p>
              <Link
                href="/dashboard/settings"
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                <Settings className="h-4 w-4" />
                Change your board
              </Link>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            NO BOARD SELECTED — Show board picker
           ════════════════════════════════════════════════════════════════════ */}
        {!isGCSEBoard && selectedBoard !== 'KS3' && (
          <section>
            <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
              Choose Your Exam Board
            </h2>
            <p className="mb-6 text-muted-foreground">
              Each guide covers the full specification, papers, mark schemes,
              grade boundaries, and examiner tips.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {BOARD_CARDS.map((board) => {
                const boardGuide = getGuideByBoard(board.id)
                return (
                  <Link
                    key={board.id}
                    href={`/exam-guide/${board.slug}`}
                    className={`group flex flex-col rounded-xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${board.color} ${board.hoverColor}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 shrink-0 rounded-full ${board.dot}`} />
                      <h3
                        className={`text-lg font-bold ${board.accent} transition-colors group-hover:underline`}
                      >
                        {board.id}
                      </h3>
                    </div>

                    {boardGuide && boardGuide.specCodes.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {boardGuide.specCodes.map((spec) => (
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
        )}

        {/* ════════════════════════════════════════════════════════════════════
            BOARD-SPECIFIC GUIDE CONTENT (when a GCSE board is selected)
           ════════════════════════════════════════════════════════════════════ */}
        {isGCSEBoard && guide && style && (
          <>
            {/* ── Overview ──────────────────────────────────────────────── */}
            <section>
              <Collapsible title="Specification Overview" icon={BookOpen} defaultOpen>
                <div
                  className="prose-brand max-w-none text-sm leading-relaxed text-muted-foreground [&_em]:text-primary/80 [&_li]:ml-4 [&_li]:text-muted-foreground [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_p+p]:mt-3 [&_p]:text-muted-foreground [&_strong]:text-foreground [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5"
                  dangerouslySetInnerHTML={{ __html: sanitize(guide.overview) }}
                />

                {guide.uniqueFeatures.length > 0 && (
                  <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
                      What makes {selectedBoard} unique
                    </p>
                    <ul className="space-y-2">
                      {guide.uniqueFeatures.map((feat, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Collapsible>
            </section>

            {/* ── Assessment Objectives ─────────────────────────────────── */}
            <section>
              <Collapsible title="Assessment Objectives" icon={Target} defaultOpen>
                {guide.languageAOs.length > 0 && (
                  <>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
                      <ScrollText className="h-4 w-4 text-primary" />
                      English Language AOs
                    </h4>
                    <div className="mb-6 space-y-2">
                      {guide.languageAOs.map((ao) => (
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
                  </>
                )}

                {guide.literatureAOs.length > 0 && (
                  <>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
                      <BookMarked className="h-4 w-4 text-violet-400" />
                      English Literature AOs
                    </h4>
                    <div className="space-y-2">
                      {guide.literatureAOs.map((ao) => (
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
                  </>
                )}
              </Collapsible>
            </section>

            {/* ── Language Papers Breakdown ─────────────────────────────── */}
            {guide.languagePapers.length > 0 && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Language Papers
                  </h2>
                </div>
                <div className="space-y-4">
                  {guide.languagePapers.map((paper) => (
                    <Collapsible
                      key={paper.code}
                      title={`${paper.title} (${paper.code})`}
                      icon={FileText}
                      defaultOpen
                    >
                      <div className="mb-4 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <Timer className="h-3 w-3" />
                          {paper.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <Target className="h-3 w-3" />
                          {paper.marks} marks
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {paper.weighting} of total
                        </span>
                        <span className="rounded-full bg-border px-3 py-1 text-xs text-muted-foreground">
                          {paper.textType}
                        </span>
                      </div>

                      {paper.sections.map((section) => (
                        <div key={section.title} className="mb-5">
                          <h4 className="mb-3 text-sm font-bold text-foreground">
                            {section.title}{' '}
                            <span className="font-normal text-muted-foreground">
                              ({section.marks} marks)
                            </span>
                          </h4>
                          <div className="space-y-2">
                            {section.questions.map((q, qi) => (
                              <div
                                key={qi}
                                className="rounded-lg border border-border bg-background/50 p-3"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <p className="text-sm font-medium text-foreground">
                                    {q.question}
                                  </p>
                                  <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                                    {q.marks}m
                                  </span>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                  <span className="rounded bg-border/50 px-1.5 py-0.5">
                                    {q.ao}
                                  </span>
                                  <span className="rounded bg-border/50 px-1.5 py-0.5">
                                    {q.skill}
                                  </span>
                                  <span className="rounded bg-border/50 px-1.5 py-0.5">
                                    {q.time}
                                  </span>
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                  {q.advice}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </Collapsible>
                  ))}
                </div>
              </section>
            )}

            {/* ── Literature Papers Breakdown ──────────────────────────── */}
            {guide.literaturePapers.length > 0 && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <BookMarked className="h-6 w-6 text-violet-400" />
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Literature Papers
                  </h2>
                </div>
                <div className="space-y-4">
                  {guide.literaturePapers.map((paper) => (
                    <Collapsible
                      key={paper.code}
                      title={`${paper.title} (${paper.code})`}
                      icon={BookMarked}
                      defaultOpen
                    >
                      <div className="mb-4 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                          <Timer className="h-3 w-3" />
                          {paper.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                          <Target className="h-3 w-3" />
                          {paper.marks} marks
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                          {paper.weighting} of total
                        </span>
                        <span className="rounded-full bg-border px-3 py-1 text-xs text-muted-foreground">
                          {paper.textType}
                        </span>
                      </div>

                      {paper.sections.map((section) => (
                        <div key={section.title} className="mb-5">
                          <h4 className="mb-3 text-sm font-bold text-foreground">
                            {section.title}{' '}
                            <span className="font-normal text-muted-foreground">
                              ({section.marks} marks)
                            </span>
                          </h4>
                          <div className="space-y-2">
                            {section.questions.map((q, qi) => (
                              <div
                                key={qi}
                                className="rounded-lg border border-border bg-background/50 p-3"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <p className="text-sm font-medium text-foreground">
                                    {q.question}
                                  </p>
                                  <span className="shrink-0 rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-semibold text-violet-400">
                                    {q.marks}m
                                  </span>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                  <span className="rounded bg-border/50 px-1.5 py-0.5">
                                    {q.ao}
                                  </span>
                                  <span className="rounded bg-border/50 px-1.5 py-0.5">
                                    {q.skill}
                                  </span>
                                  <span className="rounded bg-border/50 px-1.5 py-0.5">
                                    {q.time}
                                  </span>
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                  {q.advice}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </Collapsible>
                  ))}
                </div>
              </section>
            )}

            {/* ── Mark Scheme Bands ─────────────────────────────────────── */}
            {guide.markBands.length > 0 && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <Layers className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Mark Scheme Bands
                  </h2>
                </div>
                <p className="mb-5 text-sm text-muted-foreground">
                  How your responses are assessed across the marking levels.
                  Aim for the top bands by demonstrating perceptive analysis and
                  sophisticated expression.
                </p>
                <div className="space-y-3">
                  {guide.markBands.map((band) => (
                    <div
                      key={band.level}
                      className="rounded-xl border border-border bg-card/40 p-4"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                          L{band.level}
                        </span>
                        <p className="text-sm font-semibold text-foreground">
                          {band.descriptor}
                        </p>
                      </div>
                      <div className="grid gap-2 text-xs sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-background/50 p-2.5">
                          <span className="font-semibold text-primary">AO1:</span>{' '}
                          <span className="text-muted-foreground">{band.ao1}</span>
                        </div>
                        <div className="rounded-lg bg-background/50 p-2.5">
                          <span className="font-semibold text-violet-400">AO2:</span>{' '}
                          <span className="text-muted-foreground">{band.ao2}</span>
                        </div>
                        {band.ao3 && (
                          <div className="rounded-lg bg-background/50 p-2.5">
                            <span className="font-semibold text-orange-400">AO3:</span>{' '}
                            <span className="text-muted-foreground">{band.ao3}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── Grade Boundaries ──────────────────────────────────────── */}
            {guide.gradeBoundaries.length > 0 && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-amber-400" />
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Grade Boundaries
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Year
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Max
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-primary">
                          Grade 9
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Grade 8
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Grade 7
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Grade 6
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Grade 5
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Grade 4
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {guide.gradeBoundaries.map((row) => (
                        <tr
                          key={row.year}
                          className="border-b border-border/50 transition-colors hover:bg-card/40"
                        >
                          <td className="px-3 py-3 font-medium text-foreground">
                            {row.year}
                          </td>
                          <td className="px-3 py-3 text-center text-muted-foreground">
                            {row.max}
                          </td>
                          <td className="px-3 py-3 text-center font-semibold text-primary">
                            {row.grade9}
                          </td>
                          <td className="px-3 py-3 text-center text-foreground">
                            {row.grade8}
                          </td>
                          <td className="px-3 py-3 text-center text-foreground">
                            {row.grade7}
                          </td>
                          <td className="px-3 py-3 text-center text-muted-foreground">
                            {row.grade6}
                          </td>
                          <td className="px-3 py-3 text-center text-muted-foreground">
                            {row.grade5}
                          </td>
                          <td className="px-3 py-3 text-center text-muted-foreground">
                            {row.grade4}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* ── Examiner Tips ─────────────────────────────────────────── */}
            {guide.examinerTips.length > 0 && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-amber-400" />
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Examiner Tips
                  </h2>
                </div>
                <p className="mb-5 text-sm text-muted-foreground">
                  Advice drawn directly from examiner reports for your exam board.
                  These are the things that examiners consistently flag.
                </p>
                <div className="space-y-4">
                  {guide.examinerTips.map((tip, i) => (
                    <Collapsible
                      key={i}
                      title={tip.question}
                      icon={Lightbulb}
                      defaultOpen={i === 0}
                    >
                      <ul className="space-y-2">
                        {tip.tips.map((t, j) => (
                          <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/60" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </Collapsible>
                  ))}
                </div>
              </section>
            )}

            {/* ── Key Changes ──────────────────────────────────────────── */}
            {guide.keyChanges && guide.keyChanges.length > 0 && (
              <section>
                <Collapsible title="Recent Specification Changes" icon={Info}>
                  <div className="space-y-3">
                    {guide.keyChanges.map((change, i) => (
                      <div
                        key={i}
                        className="flex gap-3 rounded-lg border border-border bg-background/50 p-3"
                      >
                        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {change.year}
                        </span>
                        <p className="text-sm text-muted-foreground">{change.change}</p>
                      </div>
                    ))}
                  </div>
                </Collapsible>
              </section>
            )}
          </>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            GRADE 9 STRATEGY (universal)
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
                    className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed [&_h4]:text-foreground [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-muted-foreground [&_em]:text-primary/80 [&_p]:mb-3"
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
            MORE EXAM RESOURCES
           ════════════════════════════════════════════════════════════════════ */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              More Exam Resources
            </h2>
          </div>
          <p className="mb-6 text-muted-foreground">
            Sharpen every aspect of your exam performance with these focused guides.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                href: '/resources/exam-technique',
                icon: Timer,
                title: 'Exam Technique',
                description:
                  'Strategies for timing, planning, and maximising marks',
              },
              {
                href: '/resources/grade-targets',
                icon: Trophy,
                title: 'Grade Targets',
                description:
                  "Understand what's needed for each grade boundary",
              },
              {
                href: '/resources/model-answers',
                icon: FileCheck,
                title: 'Model Answers',
                description:
                  'See expert responses at Grade 5, 7, and 9',
              },
              {
                href: '/resources/writing-skills',
                icon: PenTool,
                title: 'Writing Skills',
                description:
                  'Master creative, persuasive, and analytical writing',
              },
            ].map((resource) => {
              const ResourceIcon = resource.icon
              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/40 transition-all group flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <ResourceIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-primary" />
                </Link>
              )
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            TERMINOLOGY QUICK REFERENCE (universal)
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
            HISTORICAL CONTEXT TIMELINE (universal)
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
                    Start your free trial today — first month free.
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
      </div>
    </main>
  )
}

// ─── Timeline Period Component ───────────────────────────────────────────────

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
