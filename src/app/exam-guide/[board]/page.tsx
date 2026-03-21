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

const boardMap: Record<string, string> = {
  aqa: 'AQA',
  edexcel: 'Edexcel',
  ocr: 'OCR',
  wjec: 'WJEC',
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
    <div className="border border-brand-border rounded-xl overflow-hidden bg-brand-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-brand-bg/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-brand-accent">{icon}</span>}
          <h3 className="font-semibold text-brand-text text-lg">{title}</h3>
          {badge}
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-muted" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-muted" />
        )}
      </button>
      {open && <div className="px-5 pb-5 border-t border-brand-border">{children}</div>}
    </div>
  )
}

// ─── AO Progress Bar ────────────────────────────────────────────────────────

function AOCard({ ao }: { ao: AssessmentObjective }) {
  const weightNum = parseInt(ao.weighting) || 0

  return (
    <div className="p-4 rounded-lg border border-brand-border bg-brand-bg">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-brand-accent text-sm tracking-wide">{ao.code}</span>
        <span className="text-xs font-semibold bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded-full">
          {ao.weighting}
        </span>
      </div>
      <p className="text-sm text-brand-text mb-3">{ao.description}</p>
      <div className="w-full bg-brand-border rounded-full h-2.5">
        <div
          className="bg-brand-accent rounded-full h-2.5 transition-all duration-500"
          style={{ width: `${Math.min(weightNum, 100)}%` }}
        />
      </div>
    </div>
  )
}

// ─── Paper Question Row ─────────────────────────────────────────────────────

function QuestionCard({ q, idx }: { q: PaperQuestion; idx: number }) {
  return (
    <div className="p-4 rounded-lg border border-brand-border bg-brand-bg">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <span className="shrink-0 w-8 h-8 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-sm font-bold">
          {idx + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-brand-text font-medium mb-2">{q.question}</p>
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
          <div className="flex items-start gap-2 p-3 rounded-lg bg-brand-accent/5 border border-brand-accent/10">
            <Lightbulb className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
            <p className="text-sm text-brand-muted">{q.advice}</p>
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
    <div className="border border-brand-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-brand-bg/50 hover:bg-brand-bg transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          {open ? (
            <ChevronDown className="w-4 h-4 text-brand-accent" />
          ) : (
            <ChevronRight className="w-4 h-4 text-brand-accent" />
          )}
          <span className="font-medium text-brand-text">{section.title}</span>
        </div>
        <span className="text-xs font-semibold bg-brand-accent/10 text-brand-accent px-2.5 py-1 rounded-full">
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
    <div className="border border-brand-border rounded-xl overflow-hidden bg-brand-card">
      <div className="p-5" style={{ borderTop: `4px solid ${boardColor}` }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h4 className="font-bold text-brand-text text-lg">{paper.title}</h4>
            <p className="text-brand-muted text-sm">{paper.code}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-brand-bg border border-brand-border text-brand-muted">
              <Clock className="w-3 h-3" /> {paper.time}
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-brand-bg border border-brand-border text-brand-muted">
              <Target className="w-3 h-3" /> {paper.marks} marks
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-brand-bg border border-brand-border text-brand-muted">
              <TrendingUp className="w-3 h-3" /> {paper.weighting}
            </span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-brand-accent/10 text-brand-accent mb-4">
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
          <tr className="border-b border-brand-border">
            <th className="text-left py-3 px-4 text-brand-muted font-semibold">Level</th>
            <th className="text-left py-3 px-4 text-brand-muted font-semibold">Descriptor</th>
            <th className="text-left py-3 px-4 text-brand-muted font-semibold">AO1</th>
            <th className="text-left py-3 px-4 text-brand-muted font-semibold">AO2</th>
            <th className="text-left py-3 px-4 text-brand-muted font-semibold">AO3</th>
          </tr>
        </thead>
        <tbody>
          {bands.map((b) => {
            const isTarget = b.level >= 5
            return (
              <tr
                key={b.level}
                className={`border-b border-brand-border transition-colors ${
                  isTarget
                    ? 'bg-emerald-500/5 hover:bg-emerald-500/10'
                    : 'hover:bg-brand-bg/50'
                }`}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-bold ${isTarget ? 'text-emerald-400' : 'text-brand-text'}`}
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
                <td className="py-3 px-4 text-brand-text">{b.descriptor}</td>
                <td className="py-3 px-4 text-brand-muted">{b.ao1}</td>
                <td className="py-3 px-4 text-brand-muted">{b.ao2}</td>
                <td className="py-3 px-4 text-brand-muted">{b.ao3 ?? '—'}</td>
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
          <tr className="border-b border-brand-border">
            <th className="text-left py-3 px-3 text-brand-muted font-semibold">Year</th>
            <th className="text-left py-3 px-3 text-brand-muted font-semibold">Max</th>
            <th className="text-center py-3 px-3 font-semibold text-amber-400">Grade 9</th>
            <th className="text-center py-3 px-3 text-brand-muted font-semibold">8</th>
            <th className="text-center py-3 px-3 text-brand-muted font-semibold">7</th>
            <th className="text-center py-3 px-3 text-brand-muted font-semibold">6</th>
            <th className="text-center py-3 px-3 text-brand-muted font-semibold">5</th>
            <th className="text-center py-3 px-3 font-semibold text-emerald-400">Grade 4</th>
          </tr>
        </thead>
        <tbody>
          {boundaries.map((b) => (
            <tr key={b.year} className="border-b border-brand-border hover:bg-brand-bg/50">
              <td className="py-3 px-3 font-medium text-brand-text">{b.year}</td>
              <td className="py-3 px-3 text-brand-muted">{b.max}</td>
              <td className="py-3 px-3 text-center">
                <span className="inline-block px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-xs">
                  {b.grade9}
                </span>
              </td>
              <td className="py-3 px-3 text-center text-brand-muted">{b.grade8}</td>
              <td className="py-3 px-3 text-center text-brand-muted">{b.grade7}</td>
              <td className="py-3 px-3 text-center text-brand-muted">{b.grade6}</td>
              <td className="py-3 px-3 text-center text-brand-muted">{b.grade5}</td>
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
    <div className="border border-brand-border rounded-xl overflow-hidden bg-brand-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-brand-bg/50 transition-colors"
      >
        <div>
          <h4 className="font-bold text-brand-text">{text.title}</h4>
          <p className="text-brand-muted text-sm">{text.author}</p>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-brand-muted" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-muted" />
        )}
      </button>
      {expanded && (
        <div className="px-5 pb-5 border-t border-brand-border space-y-5 pt-4">
          {/* Themes */}
          <div>
            <h5 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              Themes
            </h5>
            <div className="flex flex-wrap gap-2">
              {text.themes.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Context */}
          <div>
            <h5 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              Context
            </h5>
            <p className="text-sm text-brand-text">{text.context}</p>
          </div>

          {/* Characters */}
          {text.characters && text.characters.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
                <Users className="w-4 h-4 inline mr-1" />
                Characters
              </h5>
              <div className="grid gap-2">
                {text.characters.map((c) => (
                  <div
                    key={c.name}
                    className="p-3 rounded-lg bg-brand-bg border border-brand-border"
                  >
                    <span className="font-semibold text-brand-accent text-sm">{c.name}</span>
                    <p className="text-sm text-brand-muted mt-1">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Quotations */}
          <div>
            <h5 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              <Quote className="w-4 h-4 inline mr-1" />
              Key Quotations
            </h5>
            <div className="space-y-3">
              {text.quotations.map((q, i) => (
                <div key={i} className="p-4 rounded-lg bg-brand-bg border border-brand-border">
                  <blockquote className="text-brand-accent font-medium italic mb-2 text-sm border-l-2 border-brand-accent pl-3">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm text-brand-muted">{q.analysis}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Strategy */}
          <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
            <h5 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" /> Exam Strategy
            </h5>
            <p className="text-sm text-brand-text">{text.examStrategy}</p>
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
    <div className="border border-brand-border rounded-xl overflow-hidden bg-brand-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-brand-bg/50 transition-colors"
      >
        <div>
          <h4 className="font-bold text-brand-text">{poem.title}</h4>
          <p className="text-brand-muted text-sm">
            {poem.poet} &middot; {poem.era}
          </p>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-brand-muted" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-muted" />
        )}
      </button>
      {expanded && (
        <div className="px-5 pb-5 border-t border-brand-border space-y-4 pt-4">
          {/* Themes */}
          <div>
            <h5 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              Themes
            </h5>
            <div className="flex flex-wrap gap-2">
              {poem.themes.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Top Comparison */}
          <div>
            <h5 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              Top Comparison
            </h5>
            <p className="text-sm text-brand-text">{poem.topComparison}</p>
          </div>

          {/* Form Analysis */}
          <div>
            <h5 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              Form &amp; Structure
            </h5>
            <p className="text-sm text-brand-text">{poem.formAnalysis}</p>
          </div>

          {/* Key Quotation */}
          <div className="p-4 rounded-lg bg-brand-bg border border-brand-border">
            <blockquote className="text-brand-accent font-medium italic text-sm border-l-2 border-brand-accent pl-3">
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
    <main className="min-h-screen bg-brand-bg">
      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <nav className="border-b border-brand-border bg-brand-card" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-muted">
            <li>
              <Link href="/" className="hover:text-brand-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link href="/exam-guide" className="hover:text-brand-accent transition-colors">
                Exam Guide
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-brand-text font-medium">{guide.boardName}</li>
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
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-4">
                {guide.boardName}{' '}
                <span className="text-brand-accent">GCSE English Exam Guide</span>
              </h1>
              <div
                className="text-brand-muted leading-relaxed prose prose-sm max-w-none
                  [&_strong]:text-brand-text [&_em]:text-brand-accent [&_a]:text-brand-accent"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(guide.overview) }}
              />
            </div>
          </div>

          {/* Spec Codes */}
          <div className="flex flex-wrap gap-2 mt-6">
            {guide.specCodes.map((sc) => (
              <span
                key={sc.code}
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-brand-border bg-brand-card text-brand-text"
              >
                <FileText className="w-4 h-4 text-brand-accent" />
                <span className="font-semibold">{sc.subject}</span>
                <span className="text-brand-muted">{sc.code}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
        {/* ── Section 1: Assessment Objectives ──────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-brand-accent" />
            Assessment Objectives
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Language AOs */}
            <div>
              <h3 className="font-semibold text-brand-text mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-accent" />
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
              <h3 className="font-semibold text-brand-text mb-3 flex items-center gap-2">
                <Feather className="w-5 h-5 text-brand-accent" />
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
          <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-brand-accent" />
            Paper Breakdown
          </h2>

          {/* Language Papers */}
          {guide.languagePapers.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-brand-text mb-4 text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-accent" />
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
              <h3 className="font-semibold text-brand-text mb-4 text-lg flex items-center gap-2">
                <Feather className="w-5 h-5 text-brand-accent" />
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
          <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-amber-400" />
            Examiner Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {guide.examinerTips.map((tip, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-brand-border bg-brand-card hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-brand-text text-sm">{tip.question}</h4>
                </div>
                <ul className="space-y-2 ml-8">
                  {tip.tips.map((t, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-brand-muted">
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
            <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-brand-accent" />
              Key Changes
            </h2>
            <div className="relative ml-4 border-l-2 border-brand-border pl-8 space-y-6">
              {guide.keyChanges.map((kc, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-card" />
                  </div>
                  <div className="p-4 rounded-xl border border-brand-border bg-brand-card">
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                      {kc.year}
                    </span>
                    <p className="text-sm text-brand-text mt-1">{kc.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Section 7: Set Texts (if present) ────────────────────────────── */}
        {guide.setTexts && guide.setTexts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-brand-accent" />
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
            <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
              <Feather className="w-6 h-6 text-brand-accent" />
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
          <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-brand-accent" />
            What Makes {guide.boardName} Distinctive
          </h2>
          <div className="p-6 rounded-xl border border-brand-border bg-brand-card">
            <ul className="space-y-3">
              {guide.uniqueFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-brand-accent shrink-0 mt-1" />
                  <span className="text-brand-text text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
