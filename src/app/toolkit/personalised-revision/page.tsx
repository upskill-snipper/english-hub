'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Target,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Brain,
  Trophy,
  ChevronRight,
  Flame,
  Zap,
  BarChart3,
  Star,
} from 'lucide-react'

import { useBoard } from '@/hooks/useBoard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import {
  buildStudentProfile,
  getGradeAdvice,
  getTopicRevisionContent,
  getModelParagraph,
  generateStudyPlan,
  type StudentProfile,
  type StudyPlanItem,
} from '@/lib/revision/personalise'

// ─── Personalised Revision Guide ─────────────────────────────────────────────
// Reads the student's quiz, essay, and study data from localStorage, builds a
// profile, and generates a deeply personalised revision guide that targets gaps,
// consolidates strengths, and pushes for higher grades.
// ──────────────────────────────────────────────────────────────────────────────

export default function PersonalisedRevisionPage() {
  const { board } = useBoard()
  const [profile, setProfile] = useState<StudentProfile | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const p = buildStudentProfile(board)
    setProfile(p)
    setLoaded(true)
  }, [board])

  // Derived data
  const gradeAdvice = useMemo(
    () => (profile ? getGradeAdvice(profile.predictedGrade) : null),
    [profile],
  )
  const modelParagraph = useMemo(
    () => (profile ? getModelParagraph(profile.predictedGrade) : null),
    [profile],
  )
  const studyPlan = useMemo(() => (profile ? generateStudyPlan(profile) : []), [profile])

  if (!loaded) {
    return (
      <main className="min-h-screen bg-background">
        <div className="border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
            <h1 className="font-serif text-3xl font-medium tracking-tight">
              Personalised Revision
            </h1>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <div className="animate-pulse space-y-4">
            <div className="mx-auto h-8 w-64 rounded bg-muted" />
            <div className="mx-auto h-4 w-96 rounded bg-muted" />
          </div>
        </div>
      </main>
    )
  }

  // No data fallback
  if (!profile || !profile.hasData) {
    return (
      <main className="min-h-screen bg-background">
        <div className="border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
            <Link
              href="/toolkit"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Toolkit
            </Link>
            <h1 className="font-serif text-3xl font-medium tracking-tight">
              Personalised Revision
            </h1>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted/50 mb-6">
            <Brain className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="font-serif text-2xl font-medium mb-3">We need your data first</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            Take some quizzes, study some poems, or submit an essay for marking. Once we have data
            on your performance, we can build a revision guide tailored specifically to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button render={<Link href="/revision/quiz" />}>
              <Zap className="h-4 w-4 mr-2" />
              Take a Quiz
            </Button>
            <Button variant="outline" render={<Link href="/marking" />}>
              <BookOpen className="h-4 w-4 mr-2" />
              Submit an Essay
            </Button>
          </div>
        </div>
      </main>
    )
  }

  const nextGrade = Math.min(9, profile.predictedGrade + 1)

  return (
    <main className="min-h-screen bg-background">
      {/* ── Header ──────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Toolkit
          </Link>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
                  Your Personalised Revision Guide
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Built from your quiz scores, essays, and study history. Updated every time you
                learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 space-y-12">
        {/* ── Quick Stats Bar ───────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <QuickStat
            icon={Trophy}
            label="Predicted Grade"
            value={`Grade ${profile.predictedGrade}`}
            colour={gradeColourClass(profile.predictedGrade)}
            bgColour={gradeBgClass(profile.predictedGrade)}
          />
          <QuickStat
            icon={BarChart3}
            label="Quizzes Taken"
            value={String(profile.totalQuizzes)}
            colour="text-blue-500"
            bgColour="bg-blue-500/10"
          />
          <QuickStat
            icon={BookOpen}
            label="Essays Marked"
            value={String(profile.totalEssays)}
            colour="text-violet-500"
            bgColour="bg-violet-500/10"
          />
          <QuickStat
            icon={Flame}
            label="Study Streak"
            value={`${profile.streak} day${profile.streak !== 1 ? 's' : ''}`}
            colour="text-amber-500"
            bgColour="bg-amber-500/10"
          />
        </div>

        {/* ═══════════════════════════════════════════════════════════
            Section 1: "Why we built this for you"
            ═══════════════════════════════════════════════════════════ */}
        <section className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              Why we built this for you
            </h2>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed">
              Based on your{' '}
              <strong className="font-semibold">
                {profile.totalQuizzes} quiz{profile.totalQuizzes !== 1 ? ' attempts' : ' attempt'}
              </strong>
              {profile.totalEssays > 0 && (
                <>
                  ,{' '}
                  <strong className="font-semibold">
                    {profile.totalEssays} essay{profile.totalEssays !== 1 ? 's' : ''} marked
                  </strong>
                </>
              )}
              {profile.totalPoems > 0 && (
                <>
                  , and{' '}
                  <strong className="font-semibold">
                    {profile.totalPoems} poem{profile.totalPoems !== 1 ? 's' : ''} studied
                  </strong>
                </>
              )}
              , your current predicted grade is{' '}
              <span className={`font-bold ${gradeColourClass(profile.predictedGrade)}`}>
                Grade {profile.predictedGrade}
              </span>
              {profile.boardName !== 'Unknown' && <> on the {profile.boardName} specification</>}.
              Here is what the data tells us:
            </p>

            {/* Data insights */}
            {profile.weakTopics.length > 0 && (
              <div className="mt-4 space-y-2">
                {profile.weakTopics.slice(0, 3).map((weak) => (
                  <div
                    key={weak.topic}
                    className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900/50 dark:bg-red-950/30"
                  >
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold text-red-700 dark:text-red-400">
                        {weak.label}
                      </span>{' '}
                      scores average{' '}
                      <span className="font-mono font-semibold text-red-700 dark:text-red-400">
                        {weak.score}%
                      </span>{' '}
                      across {weak.attempts} attempt{weak.attempts !== 1 ? 's' : ''}.{' '}
                      {weak.score < 40
                        ? 'This is significantly pulling your grade down.'
                        : 'Improving this would have the biggest impact on your grade.'}{' '}
                      If you can lift this to 65%, your predicted grade could move from a{' '}
                      {profile.predictedGrade} to a {Math.min(9, profile.predictedGrade + 1)}.
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* AO gaps */}
            {profile.aoGaps.length > 0 && profile.aoGaps[0].percentage < 65 && (
              <div className="mt-4">
                <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/50 dark:bg-amber-950/30">
                  <BarChart3 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Your{' '}
                    <span className="font-semibold text-amber-700 dark:text-clay-600">
                      {profile.aoGaps[0].ao}
                    </span>{' '}
                    ({profile.aoGaps[0].label}) is consistently your weakest assessment objective at{' '}
                    <span className="font-mono font-semibold text-amber-700 dark:text-clay-600">
                      {profile.aoGaps[0].percentage}%
                    </span>
                    . This affects every essay you write.
                  </p>
                </div>
              </div>
            )}

            {/* Encouragement */}
            <p className="mt-4 text-base leading-relaxed">
              {profile.predictedGrade >= 7
                ? `You are performing well. This guide will help you push from Grade ${profile.predictedGrade} towards Grade ${nextGrade} with more sophisticated analytical techniques.`
                : profile.predictedGrade >= 5
                  ? `You are closer than you think. Targeted work on your weakest areas could move you from Grade ${profile.predictedGrade} to Grade ${nextGrade}. Let us close these gaps.`
                  : `Every grade counts, and there is real room for improvement here. This guide focuses on the fundamentals that will have the biggest impact. Let us get started.`}
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 2: "Close the gaps"
            ═══════════════════════════════════════════════════════════ */}
        {(profile.weakTopics.length > 0 || profile.aoGaps.some((g) => g.percentage < 65)) && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <h2 className="font-serif text-2xl font-medium tracking-tight">Close the Gaps</h2>
              <Badge className="bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-900 text-xs font-mono ml-2">
                Priority 1
              </Badge>
            </div>

            <div className="space-y-6">
              {profile.weakTopics.map((weak) => {
                const content = getTopicRevisionContent(
                  weak.topic,
                  profile.predictedGrade,
                  profile.board,
                )
                return (
                  <GapRevisionCard
                    key={weak.topic}
                    topic={weak}
                    content={content}
                    grade={profile.predictedGrade}
                  />
                )
              })}

              {/* AO-specific gap advice */}
              {profile.aoGaps
                .filter((g) => g.percentage < 65)
                .map((gap) => (
                  <div
                    key={gap.ao}
                    className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 sm:p-6 dark:border-amber-900/50 dark:bg-amber-950/20"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/50">
                        <BarChart3 className="h-4 w-4 text-amber-600 dark:text-clay-600" />
                      </div>
                      <h3 className="font-serif text-lg font-medium">
                        {gap.ao}: {gap.label}
                      </h3>
                      <Badge className="bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900 dark:text-clay-600 dark:border-amber-800 font-mono text-xs ml-auto">
                        {gap.percentage}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {getAOAdvice(gap.ao, gap.percentage)}
                    </p>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            Section 3: "Secure your target grade"
            ═══════════════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="h-5 w-5 text-amber-500" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              Secure Grade {profile.predictedGrade}
            </h2>
            <Badge className="bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-clay-600 dark:border-amber-900 text-xs font-mono ml-2">
              Priority 2
            </Badge>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-soft space-y-6">
            {/* Grade-specific advice */}
            <div>
              <h3 className="font-serif text-lg font-medium mb-2">
                What Grade {profile.predictedGrade} looks like
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {gradeAdvice?.current}
              </p>
            </div>

            {/* 5 key revision points */}
            <div>
              <h3 className="font-serif text-lg font-medium mb-3">5 Key Revision Points</h3>
              <ol className="space-y-2">
                {getGradeTips(profile.predictedGrade).map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold dark:bg-amber-900 dark:text-clay-600">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Model paragraph */}
            {modelParagraph && (
              <div>
                <h3 className="font-serif text-lg font-medium mb-3">
                  Model Paragraph - Grade {profile.predictedGrade}
                </h3>
                <div className="rounded-lg border border-border bg-muted/30 p-4 mb-3">
                  <p className="text-sm leading-relaxed italic">
                    &ldquo;{modelParagraph.paragraph}&rdquo;
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Annotations
                  </p>
                  {modelParagraph.annotations.map((note, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 4: "Push for the next grade"
            ═══════════════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-emerald-500" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              Push for Grade {nextGrade}
            </h2>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-900 text-xs font-mono ml-2">
              Priority 3
            </Badge>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-soft space-y-6">
            <div>
              <h3 className="font-serif text-lg font-medium mb-2">
                What you need to reach Grade {nextGrade}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{gradeAdvice?.next}</p>
            </div>

            {/* Stretch Questions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="h-4 w-4 text-yellow-500" />
                <h3 className="font-serif text-lg font-medium">Challenge Questions</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                These are designed to make you think beyond surface-level analysis. Do not look for
                a &ldquo;right answer&rdquo; - the thinking process is what matters.
              </p>
              <div className="space-y-3">
                {gradeAdvice?.stretch.map((q, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50/50 p-4 dark:border-yellow-900/50 dark:bg-yellow-950/20"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold dark:bg-yellow-900">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed font-medium">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grade 9 conceptualised response tip */}
            {profile.predictedGrade >= 6 && (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                  Grade 9 Tip: Conceptualised Responses
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A conceptualised response is one where every paragraph connects to a central
                  thesis. Instead of writing about the text chronologically, organise your response
                  around an argument. For example, rather than &ldquo;In Act 1, Macbeth...&rdquo;,
                  try &ldquo;Shakespeare constructs ambition as a force that operates simultaneously
                  on the political, psychological, and supernatural planes...&rdquo;
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 5: "Your personalised study plan"
            ═══════════════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              Your Personalised Study Plan
            </h2>
          </div>

          <div className="space-y-3">
            {studyPlan.map((item, i) => (
              <StudyPlanCard key={i} item={item} />
            ))}
          </div>

          {/* Quick links */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <QuickLink href="/revision/quiz" icon={Zap} label="Take a Quiz" />
            <QuickLink href="/marking" icon={BookOpen} label="Submit an Essay" />
            <QuickLink href="/toolkit/progress" icon={BarChart3} label="View Progress" />
          </div>
        </section>
      </div>
    </main>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function QuickStat({
  icon: Icon,
  label,
  value,
  colour,
  bgColour,
}: {
  icon: typeof Trophy
  label: string
  value: string
  colour: string
  bgColour: string
}) {
  return (
    <div className={`rounded-xl border border-border p-4 ${bgColour}`}>
      <div className="flex items-center gap-2 mb-1">
        <Icon className={`h-4 w-4 ${colour}`} />
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
      <p className={`text-xl font-bold ${colour}`}>{value}</p>
    </div>
  )
}

function GapRevisionCard({
  topic,
  content,
  grade,
}: {
  topic: { topic: string; label: string; score: number; attempts: number; suggestion: string }
  content: {
    title: string
    explanation: string
    examples: string[]
    quickTest: string[]
    revisionLink: { href: string; label: string }
  }
  grade: number
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-xl border border-red-200 bg-card p-5 sm:p-6 shadow-soft dark:border-red-900/50">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/50">
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium">{content.title}</h3>
            <p className="text-xs text-muted-foreground font-mono">
              {topic.score}% avg across {topic.attempts} attempt{topic.attempts !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <Badge className="bg-red-100 text-red-700 border-red-200 dark:bg-red-900 dark:text-red-400 dark:border-red-800 font-mono text-xs shrink-0">
          {topic.score}%
        </Badge>
      </div>

      {/* Explanation */}
      <p className="text-sm leading-relaxed mb-4">{content.explanation}</p>

      {/* Expand/collapse for detail */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mb-4"
      >
        {expanded ? 'Hide' : 'Show'} worked examples & practice questions
        <ChevronRight
          className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-90' : ''}`}
        />
      </button>

      {expanded && (
        <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Worked examples */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Worked Examples
            </p>
            <div className="space-y-2">
              {content.examples.map((ex, i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/30 p-3">
                  <p className="text-sm leading-relaxed">{ex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick test */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Quick Test
            </p>
            <div className="space-y-2">
              {content.quickTest.map((q, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-border p-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Link to revision page */}
      <Link
        href={content.revisionLink.href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-2"
      >
        {content.revisionLink.label}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  )
}

function StudyPlanCard({ item }: { item: StudyPlanItem }) {
  const impactColour =
    item.impact === 'high'
      ? 'text-red-600 bg-red-100 border-red-200 dark:text-red-400 dark:bg-red-900/50 dark:border-red-800'
      : item.impact === 'medium'
        ? 'text-amber-600 bg-amber-100 border-amber-200 dark:text-clay-600 dark:bg-amber-900/50 dark:border-amber-800'
        : 'text-emerald-600 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-900/50 dark:border-emerald-800'

  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-soft">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
        {item.priority}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-relaxed mb-1">{item.task}</p>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-xs font-mono">
            <Clock className="h-3 w-3 mr-1" />
            {item.timeEstimate}
          </Badge>
          <Badge className={`text-xs font-mono border ${impactColour}`}>{item.impact} impact</Badge>
        </div>
      </div>
      <Link
        href={item.link.href}
        className="shrink-0 text-primary hover:text-primary/80"
        title={item.link.label}
      >
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

function QuickLink({ href, icon: Icon, label }: { href: string; icon: typeof Zap; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-all hover:shadow-medium hover:border-primary/25"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <span className="text-sm font-medium group-hover:text-primary transition-colors">
        {label}
      </span>
      <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
    </Link>
  )
}

// ─── Helper functions ────────────────────────────────────────────────────────

function gradeColourClass(grade: number): string {
  if (grade >= 9) return 'text-yellow-500'
  if (grade >= 7) return 'text-emerald-500'
  if (grade >= 5) return 'text-amber-500'
  return 'text-red-500'
}

function gradeBgClass(grade: number): string {
  if (grade >= 9) return 'bg-yellow-500/10'
  if (grade >= 7) return 'bg-emerald-500/10'
  if (grade >= 5) return 'bg-amber-500/10'
  return 'bg-red-500/10'
}

function getAOAdvice(ao: string, percentage: number): string {
  switch (ao) {
    case 'AO1':
      return percentage < 50
        ? 'Your AO1 (understanding and responding to the text) needs significant work. Focus on reading the question carefully, selecting relevant evidence, and making clear points. Practise writing topic sentences that directly answer the question.'
        : 'Your AO1 is developing but needs strengthening. Make sure you are selecting the most relevant quotations and explaining how they support your point. Avoid retelling the plot.'
    case 'AO2':
      return percentage < 50
        ? 'Your AO2 (language analysis) is your biggest area for improvement. Start with the What-How-Why framework: What technique is used? How does it work? Why did the writer choose it? Practise identifying techniques in short extracts before writing full paragraphs.'
        : 'Your AO2 is developing but needs more depth. Move beyond naming techniques - analyse the connotations of specific words and explore how multiple techniques work together to create effects.'
    case 'AO3':
      return percentage < 50
        ? 'Your AO3 (context) needs attention. Learn 3-4 key contextual facts for each set text and practise weaving them into your analysis rather than adding them as separate paragraphs.'
        : 'Your AO3 is developing. Focus on integrating context naturally - instead of "In Victorian times...", try "Dickens, writing in a society where..." This shows understanding rather than just knowledge.'
    case 'AO4':
      return percentage < 50
        ? "Your AO4 (spelling, punctuation, and grammar) is holding you back. Read your work aloud to catch errors. Focus on the most common mistakes: there/their/they're, affect/effect, and comma splices."
        : 'Your AO4 is reasonable but could be improved. Focus on using a range of punctuation (semicolons, colons, dashes) and vary your sentence structures for a more sophisticated style.'
    default:
      return 'Focus on improving this assessment objective by reviewing the marking criteria and practising targeted exercises.'
  }
}

function getGradeTips(grade: number): string[] {
  if (grade <= 3) {
    return [
      'Write in full sentences and paragraphs. Every paragraph should make one clear point.',
      'Include at least one quotation per paragraph - even a short phrase like "brave Macbeth" counts.',
      'Use the PEE framework: Point, Evidence, Explain. This gives your writing clear structure.',
      'Read the question at least twice before writing. Underline the key words.',
      'Save 5 minutes at the end to check your spelling, punctuation, and grammar.',
    ]
  }
  if (grade <= 5) {
    return [
      'Use the PEEL framework: Point, Evidence, Explain, Link back to the question.',
      'Embed quotations into your sentences rather than using standalone quotes.',
      'Analyse specific word choices - explain what individual words suggest, connote, or imply.',
      'Include contextual knowledge linked to your analysis, not as a separate paragraph.',
      'Use the writer\'s name frequently: "Shakespeare presents..." to show awareness of the text as a construct.',
    ]
  }
  if (grade <= 7) {
    return [
      'Structure your response around a clear thesis - an argument that runs through every paragraph.',
      'Explore alternative interpretations: "While this could suggest X, it might also imply Y..."',
      "Analyse structure and form alongside language - how does the writer's structure reinforce their themes?",
      'Use precise academic vocabulary and subject terminology naturally, not forced.',
      'Integrate context as an analytical tool: explain how context shapes meaning, not just what the context is.',
    ]
  }
  // Grade 8-9
  return [
    'Write conceptualised responses where every paragraph advances your central argument.',
    'Engage with critical perspectives: consider feminist, Marxist, or post-colonial readings where appropriate.',
    'Explore ambiguity and tension within the text - the best literature resists simple interpretation.',
    'Show how form enacts meaning: a fragmented structure mirrors fragmentation, a circular narrative suggests entrapment.',
    'Write with an assured scholarly voice - demonstrate sophisticated thinking, not just sophisticated vocabulary.',
  ]
}
