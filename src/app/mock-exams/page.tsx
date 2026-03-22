'use client'

import { useState, useRef, useEffect, useMemo, useCallback, memo } from 'react'
import Link from 'next/link'
import {
  Clock,
  FileText,
  Lock,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Award,
  BookOpen,
  Eye,
  Sparkles,
  GraduationCap,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  getMockExamsByBoard,
  getAvailableBoards,
  formatExamTime,
  type MockExamPaper,
} from '@/data/mock-exams'
import { useBoardStore } from '@/store/board-store'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// ─── Board Config ────────────────────────────────────────────────────────────

const BOARD_CONFIG: Record<string, {
  color: string
  bg: string
  gradient: string
  border: string
  badge: string
}> = {
  AQA: {
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    gradient: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/30',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  },
  Edexcel: {
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    gradient: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/30',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  },
  OCR: {
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    gradient: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/30',
    badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  },
  WJEC: {
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    gradient: 'from-red-500/20 to-red-600/5',
    border: 'border-red-500/30',
    badge: 'bg-red-500/15 text-red-300 border-red-500/30',
  },
}

// ─── Inline Paper Preview ────────────────────────────────────────────────────

const InlinePaperPreview = memo(function InlinePaperPreview({ paper }: { paper: MockExamPaper }) {
  const config = BOARD_CONFIG[paper.board]
  const FREE_QUESTION_LIMIT = 2

  return (
    <div className="space-y-6 pt-4">
      {/* Paper metadata */}
      <div className={cn('rounded-xl p-6 bg-gradient-to-br border', config.border, config.gradient)}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge className={cn('mb-3', config.badge)}>{paper.board}</Badge>
            <h3 className="text-xl font-bold text-foreground mb-1">{paper.title}</h3>
            <p className="text-sm text-muted-foreground">{paper.subtitle}</p>
          </div>
          <Badge variant="outline" className="bg-emerald-500/15 text-emerald-300 border-emerald-500/30">
            Free Preview
          </Badge>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {formatExamTime(paper.totalTimeMinutes)}</span>
          <span className="flex items-center gap-1.5"><Award className="h-4 w-4" /> {paper.totalMarks} marks</span>
          <span className="flex items-center gap-1.5"><FileText className="h-4 w-4" /> {paper.sections.length} sections</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {paper.code}</span>
        </div>
      </div>

      {/* Sections & Questions */}
      {paper.sections.map((section, sIdx) => (
        <div key={section.id}>
          <div className="flex items-center gap-3 mb-4">
            <div className={cn('h-8 w-8 rounded-lg flex items-center justify-center text-sm font-bold', config.bg, config.color)}>
              {sIdx + 1}
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <p className="text-sm text-muted-foreground">{section.description}</p>
            </div>
            <div className="ml-auto text-sm text-muted-foreground hidden sm:block">
              {section.totalMarks} marks &middot; {section.suggestedTimeMinutes} min
            </div>
          </div>

          <div className="space-y-4 ml-0 sm:ml-11">
            {section.questions.map((question, qIdx) => {
              const globalQIdx = paper.sections
                .slice(0, sIdx)
                .reduce((sum, s) => sum + s.questions.length, 0) + qIdx
              const isFree = globalQIdx < FREE_QUESTION_LIMIT

              if (!isFree) {
                return (
                  <div key={question.id} className="relative">
                    <div className="rounded-lg border border-border/50 p-5 select-none" style={{ filter: 'blur(4px)' }}>
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-medium">Q{question.questionNumber}.</span>
                        <Badge variant="outline" className="text-xs">{question.marks} marks</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{question.questionText}</p>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 rounded-lg">
                      <Lock className="h-5 w-5 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium text-muted-foreground">Sign up to access</p>
                    </div>
                  </div>
                )
              }

              return (
                <Card key={question.id} className="border-border/50">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className={cn('font-bold', config.color)}>Q{question.questionNumber}.</span>
                        <Badge variant="outline" className="text-xs">{question.questionType}</Badge>
                      </div>
                      <Badge variant="outline">{question.marks} marks</Badge>
                    </div>

                    {question.extract && (
                      <div className="mb-4 rounded-lg bg-muted/50 p-4 border border-border/50">
                        <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Extract</p>
                        <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
                          {question.extract.length > 500 ? question.extract.slice(0, 500) + '...' : question.extract}
                        </p>
                        {question.extractSource && (
                          <p className="text-xs text-muted-foreground mt-2 italic">{question.extractSource}</p>
                        )}
                      </div>
                    )}

                    <p className="text-sm text-foreground mb-4">{question.questionText}</p>

                    {/* Model Answer */}
                    <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-4">
                      <p className="text-xs font-medium text-emerald-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5" /> Model Answer (Top Grade)
                      </p>
                      {Object.entries(question.modelAnswers).slice(0, 1).map(([grade, answer]) => (
                        <div key={grade}>
                          <Badge className="mb-2 bg-emerald-500/15 text-emerald-300 border-emerald-500/30 text-xs">{grade}</Badge>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            {answer.length > 400 ? answer.slice(0, 400) + '...' : answer}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Mark Scheme */}
                    {question.markScheme.length > 0 && (
                      <div className="mt-3 rounded-lg bg-blue-500/5 border border-blue-500/20 p-4">
                        <p className="text-xs font-medium text-blue-400 mb-2 uppercase tracking-wider">Mark Scheme</p>
                        <ul className="space-y-1">
                          {question.markScheme.slice(0, 4).map((point, i) => (
                            <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-blue-400 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {sIdx < paper.sections.length - 1 && <Separator className="mt-6" />}
        </div>
      ))}

      {/* CTA after preview */}
      <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] to-violet-500/[0.06] p-8 text-center">
        <GraduationCap className="h-10 w-10 mx-auto mb-3 text-primary" />
        <h3 className="text-xl font-bold text-foreground mb-2">Want the Full Paper?</h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Sign up for free to access all questions, timed exam mode, and 120+ more papers across every board.
        </p>
        <Button size="lg" render={<Link href="/auth/register" />}>
          Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
})

// ─── Board Section with Expandable Preview ──────────────────────────────────

function BoardSection({ board }: { board: string }) {
  const config = BOARD_CONFIG[board]
  const papers = getMockExamsByBoard(board)
  const freePaper = papers[0]
  const [expanded, setExpanded] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const paper1Count = useMemo(() => papers.filter(p => p.paperNumber === 1).length, [papers])
  const paper2Count = useMemo(() => papers.filter(p => p.paperNumber === 2).length, [papers])

  useEffect(() => {
    if (expanded && previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [expanded])

  return (
    <div className={cn('rounded-2xl border p-6 sm:p-8 transition-all duration-300', expanded ? config.border : 'border-border/40')}>
      {/* Board Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={cn('h-12 w-12 rounded-xl flex items-center justify-center', config.bg)}>
            <GraduationCap className={cn('h-6 w-6', config.color)} />
          </div>
          <div>
            <h2 className={cn('text-xl font-bold', config.color)}>{board}</h2>
            <p className="text-sm text-muted-foreground">{papers.length} papers &middot; Paper 1 ({paper1Count}) &middot; Paper 2 ({paper2Count})</p>
          </div>
        </div>
        <Button
          variant={expanded ? 'secondary' : 'default'}
          size="lg"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>Hide Preview <ChevronUp className="ml-2 h-4 w-4" /></>
          ) : (
            <>Free Preview <Eye className="ml-2 h-4 w-4" /></>
          )}
        </Button>
      </div>

      {/* Expanded Preview */}
      {expanded && freePaper && (
        <div ref={previewRef}>
          <Separator className="my-6" />
          <InlinePaperPreview paper={freePaper} />
        </div>
      )}
    </div>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function MockExamsPage() {
  const allBoards = useMemo(() => getAvailableBoards(), [])
  const { selectedBoard } = useBoardStore()

  // If a specific GCSE board is selected (not null, not KS3), filter to just that board
  const boards = useMemo(
    () =>
      (selectedBoard && selectedBoard !== 'KS3')
        ? allBoards.filter((b) => b === selectedBoard)
        : allBoards,
    [selectedBoard, allBoards]
  )

  const totalPapers = useMemo(
    () => boards.reduce((sum, b) => sum + getMockExamsByBoard(b).length, 0),
    [boards]
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-violet-500/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <Badge variant="outline" className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 gap-2 px-4 py-1.5">
            <Sparkles className="w-4 h-4" /> Free Preview — No Sign-Up Required
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
            {totalPapers}+ GCSE Mock Exams
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Full-length timed exam papers for AQA, Edexcel, OCR & WJEC — with model answers at every grade band and detailed mark schemes. Preview a free paper for each board below.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {allBoards.map((board) => {
              const config = BOARD_CONFIG[board]
              const count = getMockExamsByBoard(board).length
              const isActive = selectedBoard === board
              return (
                <a
                  key={board}
                  href={`#${board.toLowerCase()}`}
                  className={cn(
                    'flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors hover:opacity-80 min-h-[44px]',
                    config.badge,
                    isActive && 'ring-2 ring-offset-2 ring-offset-background ring-primary'
                  )}
                >
                  {board}
                  <span className="text-xs opacity-70">{count} papers</span>
                </a>
              )
            })}
          </div>

          <div className="flex gap-3 justify-center">
            <Button size="lg" className="shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" render={<a href="#boards" />}>
              Browse Papers <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-b border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, label: `${totalPapers}+ papers`, desc: 'Full exam-style papers' },
              { icon: Eye, label: 'Model Answers', desc: '3 grade bands per question' },
              { icon: Award, label: 'Mark Schemes', desc: 'Official examiner criteria' },
              { icon: Clock, label: 'Timed Mode', desc: 'Real exam conditions' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Sections */}
      <section id="boards" className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Choose Your Exam Board</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Click &ldquo;Free Preview&rdquo; on any board to see a full paper with questions, model answers, and mark schemes — no sign-up needed.
          </p>
        </div>

        <div className="space-y-6">
          {boards.map((board) => (
            <div key={board} id={board.toLowerCase()}>
              <BoardSection board={board} />
            </div>
          ))}
        </div>
      </section>

      {/* What You Get Section */}
      <section className="border-t border-border bg-card/20">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            What&rsquo;s Included with Every Paper
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Timed Exam Mode', desc: 'Sit the paper under real exam conditions with countdown timer, section navigation, and pause controls.', icon: Clock },
              { title: 'Model Answers (3 Grades)', desc: 'See what Grade 4-5, 6-7, and 8-9 answers look like for every single question.', icon: Eye },
              { title: 'Detailed Mark Schemes', desc: 'Examiner-style mark schemes showing exactly what examiners are looking for.', icon: CheckCircle },
              { title: 'AI Essay Feedback', desc: 'Submit your writing and get instant AI-powered feedback with grade estimates.', icon: Sparkles },
              { title: 'Progress Tracking', desc: 'Track your scores over time and identify your strengths and weaknesses.', icon: Award },
              { title: 'All 4 Exam Boards', desc: 'AQA, Edexcel, OCR and WJEC — every major GCSE English board covered.', icon: GraduationCap },
            ].map(({ title, desc, icon: Icon }) => (
              <Card key={title} className="p-6 border-border/40">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <div className="relative p-10 sm:p-14 rounded-2xl border border-border/40 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/[0.06] rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Ready to Ace Your GCSE English?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of students. Get unlimited access to all {totalPapers}+ mock papers, AI essay feedback, courses, flashcards, and more.
              </p>
              <div className="flex gap-3 justify-center">
                <Button size="lg" className="shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary" size="lg" render={<Link href="/auth/login" />}>
                  Sign In
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                First month free &middot; Cancel anytime &middot; No commitment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
