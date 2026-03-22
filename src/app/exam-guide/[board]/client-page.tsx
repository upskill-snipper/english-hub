'use client'

import { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Lightbulb,
  BookOpen,
  FileText,
  Target,
  Award,
  Clock,
  Star,
  TrendingUp,
  AlertCircle,
  Feather,
  Sparkles,
  Calendar,
  CheckCircle2,
  Quote,
  Users,
  Layers,
} from 'lucide-react'
import DOMPurify from 'dompurify'
import {
  getGuideByBoard,
  type BoardExamGuide,
  type ExamPaper,
  type PaperSection,
  type PaperQuestion,
  type MarkBand,
  type GradeBoundary,
  type ExaminerTip,
  type AssessmentObjective,
  type SetTextAnalysis,
  type PoemAnalysis,
} from '@/data/exam-guides'
import { useBoardStore } from '@/store/board-store'

// ─── Board slug to proper name mapping ──────────────────────────────────────

export const boardMap: Record<string, string> = {
  aqa: 'AQA',
  edexcel: 'Edexcel',
  ocr: 'OCR',
  wjec: 'WJEC',
  igcse: 'IGCSE',
}

// ─── Collapsible Section Component ──────────────────────────────────────────

function Collapsible({
  title,
  icon,
  defaultOpen = false,
  children,
  badge,
}: {
  title: string
  icon?: React.ReactNode
  defaultOpen?: boolean
  children: React.ReactNode
  badge?: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-background/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-primary">{icon}</span>}
          <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          {badge}
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {open && <div className="px-5 pb-5 border-t border-border">{children}</div>}
    </div>
  )
}

// ─── AO Progress Bar ────────────────────────────────────────────────────────

function AOCard({ ao }: { ao: AssessmentObjective }) {
  const weightNum = parseInt(ao.weighting) || 0

  return (
    <div className="p-4 rounded-lg border border-border bg-background">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-primary text-sm tracking-wide">{ao.code}</span>
        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
          {ao.weighting}
        </span>
      </div>
      <p className="text-sm text-foreground mb-3">{ao.description}</p>
      <div className="w-full bg-border rounded-full h-2.5">
        <div
          className="bg-primary rounded-full h-2.5 transition-all duration-500"
          style={{ width: `${Math.min(weightNum, 100)}%` }}
        />
      </div>
    </div>
  )
}

// ─── Paper Question Row ─────────────────────────────────────────────────────

function QuestionCard({ q, idx }: { q: PaperQuestion; idx: number }) {
  return (
    <div className="p-4 rounded-lg border border-border bg-background">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
          {idx + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-foreground font-medium mb-2">{q.question}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Target className="w-3 h-3" /> {q.marks} marks
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Layers className="w-3 h-3" /> {q.ao}
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-3 h-3" /> {q.skill}
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Clock className="w-3 h-3" /> {q.time}
            </span>
          </div>
          <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{q.advice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Paper Section ──────────────────────────────────────────────────────────

function PaperSectionBlock({ section }: { section: PaperSection }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-background/50 hover:bg-background transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          {open ? (
            <ChevronDown className="w-4 h-4 text-primary" />
          ) : (
            <ChevronRight className="w-4 h-4 text-primary" />
          )}
          <span className="font-medium text-foreground">{section.title}</span>
        </div>
        <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
          {section.marks} marks
        </span>
      </button>
      {open && (
        <div className="p-4 space-y-3">
          {section.questions.map((q, i) => (
            <QuestionCard key={i} q={q} idx={i} />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Single Paper Card ──────────────────────────────────────────────────────

function PaperCard({ paper, boardColor }: { paper: ExamPaper; boardColor: string }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <div className="p-5" style={{ borderTop: `4px solid ${boardColor}` }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h4 className="font-bold text-foreground text-lg">{paper.title}</h4>
            <p className="text-muted-foreground text-sm">{paper.code}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground">
              <Clock className="w-3 h-3" /> {paper.time}
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground">
              <Target className="w-3 h-3" /> {paper.marks} marks
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground">
              <TrendingUp className="w-3 h-3" /> {paper.weighting}
            </span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary mb-4">
          <FileText className="w-3.5 h-3.5" />
          {paper.textType}
        </div>
        <div className="space-y-2">
          {paper.sections.map((s, i) => (
            <PaperSectionBlock key={i} section={s} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Mark Band Table ────────────────────────────────────────────────────────

function MarkBandTable({ bands }: { bands: MarkBand[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Level</th>
            <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Descriptor</th>
            <th className="text-left py-3 px-4 text-muted-foreground font-semibold">AO1</th>
            <th className="text-left py-3 px-4 text-muted-foreground font-semibold">AO2</th>
            <th className="text-left py-3 px-4 text-muted-foreground font-semibold">AO3</th>
          </tr>
        </thead>
        <tbody>
          {bands.map((b) => {
            const isTarget = b.level >= 5
            return (
              <tr
                key={b.level}
                className={`border-b border-border transition-colors ${
                  isTarget
                    ? 'bg-emerald-500/5 hover:bg-emerald-500/10'
                    : 'hover:bg-background/50'
                }`}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-bold ${isTarget ? 'text-emerald-400' : 'text-foreground'}`}
                    >
                      {b.level}
                    </span>
                    {isTarget && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold uppercase tracking-wider">
                        Target
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4 text-foreground">{b.descriptor}</td>
                <td className="py-3 px-4 text-muted-foreground">{b.ao1}</td>
                <td className="py-3 px-4 text-muted-foreground">{b.ao2}</td>
                <td className="py-3 px-4 text-muted-foreground">{b.ao3 ?? '—'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// ─── Grade Boundary Table ───────────────────────────────────────────────────

function GradeBoundaryTable({ boundaries }: { boundaries: GradeBoundary[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-3 text-muted-foreground font-semibold">Year</th>
            <th className="text-left py-3 px-3 text-muted-foreground font-semibold">Max</th>
            <th className="text-center py-3 px-3 font-semibold text-amber-400">Grade 9</th>
            <th className="text-center py-3 px-3 text-muted-foreground font-semibold">8</th>
            <th className="text-center py-3 px-3 text-muted-foreground font-semibold">7</th>
            <th className="text-center py-3 px-3 text-muted-foreground font-semibold">6</th>
            <th className="text-center py-3 px-3 text-muted-foreground font-semibold">5</th>
            <th className="text-center py-3 px-3 font-semibold text-emerald-400">Grade 4</th>
          </tr>
        </thead>
        <tbody>
          {boundaries.map((b) => (
            <tr key={b.year} className="border-b border-border hover:bg-background/50">
              <td className="py-3 px-3 font-medium text-foreground">{b.year}</td>
              <td className="py-3 px-3 text-muted-foreground">{b.max}</td>
              <td className="py-3 px-3 text-center">
                <span className="inline-block px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-xs">
                  {b.grade9}
                </span>
              </td>
              <td className="py-3 px-3 text-center text-muted-foreground">{b.grade8}</td>
              <td className="py-3 px-3 text-center text-muted-foreground">{b.grade7}</td>
              <td className="py-3 px-3 text-center text-muted-foreground">{b.grade6}</td>
              <td className="py-3 px-3 text-center text-muted-foreground">{b.grade5}</td>
              <td className="py-3 px-3 text-center">
                <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold text-xs">
                  {b.grade4}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Set Text Card ──────────────────────────────────────────────────────────

function SetTextCard({ text }: { text: SetTextAnalysis }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-background/50 transition-colors"
      >
        <div>
          <h4 className="font-bold text-foreground">{text.title}</h4>
          <p className="text-muted-foreground text-sm">{text.author}</p>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {expanded && (
        <div className="px-5 pb-5 border-t border-border space-y-5 pt-4">
          {/* Themes */}
          <div>
            <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Themes
            </h5>
            <div className="flex flex-wrap gap-2">
              {text.themes.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Context */}
          <div>
            <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Context
            </h5>
            <p className="text-sm text-foreground">{text.context}</p>
          </div>

          {/* Characters */}
          {text.characters && text.characters.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                <Users className="w-4 h-4 inline mr-1" />
                Characters
              </h5>
              <div className="grid gap-2">
                {text.characters.map((c) => (
                  <div
                    key={c.name}
                    className="p-3 rounded-lg bg-background border border-border"
                  >
                    <span className="font-semibold text-primary text-sm">{c.name}</span>
                    <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Quotations */}
          <div>
            <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              <Quote className="w-4 h-4 inline mr-1" />
              Key Quotations
            </h5>
            <div className="space-y-3">
              {text.quotations.map((q, i) => (
                <div key={i} className="p-4 rounded-lg bg-background border border-border">
                  <blockquote className="text-primary font-medium italic mb-2 text-sm border-l-2 border-primary pl-3">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm text-muted-foreground">{q.analysis}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Strategy */}
          <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
            <h5 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" /> Exam Strategy
            </h5>
            <p className="text-sm text-foreground">{text.examStrategy}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Poem Card ──────────────────────────────────────────────────────────────

function PoemCard({ poem }: { poem: PoemAnalysis }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-background/50 transition-colors"
      >
        <div>
          <h4 className="font-bold text-foreground">{poem.title}</h4>
          <p className="text-muted-foreground text-sm">
            {poem.poet} &middot; {poem.era}
          </p>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {expanded && (
        <div className="px-5 pb-5 border-t border-border space-y-4 pt-4">
          {/* Themes */}
          <div>
            <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Themes
            </h5>
            <div className="flex flex-wrap gap-2">
              {poem.themes.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Top Comparison */}
          <div>
            <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Top Comparison
            </h5>
            <p className="text-sm text-foreground">{poem.topComparison}</p>
          </div>

          {/* Form Analysis */}
          <div>
            <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Form &amp; Structure
            </h5>
            <p className="text-sm text-foreground">{poem.formAnalysis}</p>
          </div>

          {/* Key Quotation */}
          <div className="p-4 rounded-lg bg-background border border-border">
            <blockquote className="text-primary font-medium italic text-sm border-l-2 border-primary pl-3">
              &ldquo;{poem.keyQuotation}&rdquo;
            </blockquote>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Page Component ────────────────────────────────────────────────────

export default function BoardExamGuidePage() {
  const params = useParams<{ board: string }>()
  const boardSlug = params.board

  // Map slug to proper casing
  const boardName = boardMap[boardSlug]
  if (!boardName) {
    notFound()
  }

  const guide = getGuideByBoard(boardName)
  if (!guide) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <nav className="border-b border-border bg-card" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link href="/exam-guide" className="hover:text-primary transition-colors">
                Exam Guide
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-foreground font-medium">{guide.boardName}</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ backgroundColor: guide.boardColor }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                {guide.boardName}{' '}
                <span className="text-primary">GCSE English Exam Guide</span>
              </h1>
              <div
                className="text-muted-foreground leading-relaxed prose prose-sm max-w-none
                  [&_strong]:text-foreground [&_em]:text-primary [&_a]:text-primary"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(guide.overview) }}
              />
            </div>
          </div>

          {/* Spec Codes */}
          <div className="flex flex-wrap gap-2 mt-6">
            {guide.specCodes.map((sc) => (
              <span
                key={sc.code}
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border bg-card text-foreground"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span className="font-semibold">{sc.subject}</span>
                <span className="text-muted-foreground">{sc.code}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
        {/* ── Section 1: Assessment Objectives ──────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-primary" />
            Assessment Objectives
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Language AOs */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Language AOs
              </h3>
              <div className="space-y-3">
                {guide.languageAOs.map((ao) => (
                  <AOCard key={ao.code} ao={ao} />
                ))}
              </div>
            </div>

            {/* Literature AOs */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Feather className="w-5 h-5 text-primary" />
                Literature AOs
              </h3>
              <div className="space-y-3">
                {guide.literatureAOs.map((ao) => (
                  <AOCard key={ao.code} ao={ao} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Paper Breakdown ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            Paper Breakdown
          </h2>

          {/* Language Papers */}
          {guide.languagePapers.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Language Papers
              </h3>
              <div className="space-y-6">
                {guide.languagePapers.map((paper, i) => (
                  <PaperCard key={i} paper={paper} boardColor={guide.boardColor} />
                ))}
              </div>
            </div>
          )}

          {/* Literature Papers */}
          {guide.literaturePapers.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
                <Feather className="w-5 h-5 text-primary" />
                Literature Papers
              </h3>
              <div className="space-y-6">
                {guide.literaturePapers.map((paper, i) => (
                  <PaperCard key={i} paper={paper} boardColor={guide.boardColor} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── Section 3: Mark Band Descriptors ──────────────────────────────── */}
        <Collapsible
          title="Mark Band Descriptors"
          icon={<Award className="w-5 h-5" />}
          defaultOpen={false}
          badge={
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold uppercase tracking-wider">
              Levels 5-6 = Target Zone
            </span>
          }
        >
          <div className="pt-4">
            <MarkBandTable bands={guide.markBands} />
          </div>
        </Collapsible>

        {/* ── Section 4: Grade Boundaries ───────────────────────────────────── */}
        <Collapsible
          title="Grade Boundaries"
          icon={<TrendingUp className="w-5 h-5" />}
          defaultOpen={false}
        >
          <div className="pt-4">
            <GradeBoundaryTable boundaries={guide.gradeBoundaries} />
          </div>
        </Collapsible>

        {/* ── Section 5: Examiner Tips ──────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-amber-400" />
            Examiner Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {guide.examinerTips.map((tip, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-border bg-card hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-foreground text-sm">{tip.question}</h4>
                </div>
                <ul className="space-y-2 ml-8">
                  {tip.tips.map((t, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: Key Changes (if present) ──────────────────────────── */}
        {guide.keyChanges && guide.keyChanges.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              Key Changes
            </h2>
            <div className="relative ml-4 border-l-2 border-border pl-8 space-y-6">
              {guide.keyChanges.map((kc, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-card" />
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {kc.year}
                    </span>
                    <p className="text-sm text-foreground mt-1">{kc.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Section 7: Set Texts (if present) ────────────────────────────── */}
        {guide.setTexts && guide.setTexts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Set Texts
            </h2>
            <div className="space-y-4">
              {guide.setTexts.map((text, i) => (
                <SetTextCard key={i} text={text} />
              ))}
            </div>
          </section>
        )}

        {/* ── Section 8: Poetry (if present) ───────────────────────────────── */}
        {guide.poems && guide.poems.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Feather className="w-6 h-6 text-primary" />
              Poetry Anthology
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {guide.poems.map((poem, i) => (
                <PoemCard key={i} poem={poem} />
              ))}
            </div>
          </section>
        )}

        {/* ── Section 9: Unique Features ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-primary" />
            What Makes {guide.boardName} Distinctive
          </h2>
          <div className="p-6 rounded-xl border border-border bg-card">
            <ul className="space-y-3">
              {guide.uniqueFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
