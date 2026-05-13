'use client'

import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import { useParams, useRouter, notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Award,
  CheckCircle,
  XCircle,
  Trophy,
  Loader2,
  AlertTriangle,
  BarChart3,
  Lock,
} from 'lucide-react'
import { loadCourseById } from '@/data/course-loader'
import type { CourseData } from '@/data/courses'
import type { CourseQuiz } from '@/data/courses'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { useBoard } from '@/hooks/useBoard'
import { matchesBoard } from '@/lib/board-filter'
import { shuffleArray, formatTime } from '@/lib/utils'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'

// ─── Gender helper ──────────────────────────────────────────────────────────
// Binary M/F policy: when `profile.gender === 'f'` we swap to the .f variant
// of the dictionary key for the few strings where the verb conjugation
// genuinely differs in Khaleeji. Profile.gender is not (yet) a typed field
// on Profile, so we soft-read it via Record to avoid a type-system churn.
function pickGenderedKey(base: string, gender: string | undefined | null): string {
  return gender === 'f' ? `${base}.f` : base
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface AssessmentQuestion extends CourseQuiz {
  moduleTitle: string
}

type AssessmentPhase = 'intro' | 'active' | 'submitting' | 'results'

interface AssessmentResult {
  score: number
  total: number
  percentage: number
  grade: string
  passed: boolean
  answers: { questionId: string; selected: number; correct: boolean }[]
}

function getGrade(percentage: number): string {
  if (percentage >= 90) return 'Grade 9'
  if (percentage >= 80) return 'Grade 8'
  if (percentage >= 70) return 'Grade 7'
  if (percentage >= 60) return 'Grade 6'
  if (percentage >= 50) return 'Grade 5'
  if (percentage >= 40) return 'Grade 4'
  if (percentage >= 30) return 'Grade 3'
  if (percentage >= 20) return 'Grade 2'
  return 'Grade 1'
}

function getGradeColor(grade: string): string {
  const num = parseInt(grade.replace('Grade ', ''))
  if (num >= 8) return 'text-primary'
  if (num >= 6) return 'text-brand-blue'
  if (num >= 4) return 'text-brand-warning'
  return 'text-destructive'
}

function getGradeBg(grade: string): string {
  const num = parseInt(grade.replace('Grade ', ''))
  if (num >= 8) return 'bg-primary/10 border-primary/30'
  if (num >= 6) return 'bg-brand-blue/10 border-brand-blue/30'
  if (num >= 4) return 'bg-brand-warning/10 border-brand-warning/30'
  return 'bg-destructive/10 border-destructive/30'
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AssessmentPage() {
  const t = useT()
  const params = useParams()
  const router = useRouter()
  const courseId = params.courseId as string
  const { user, profile } = useAuthStore()
  const { board: selectedBoard } = useBoard()
  // Binary M/F: profile.gender isn't yet typed on Profile — soft-read.
  const gender = (profile as unknown as { gender?: string } | null)?.gender ?? null

  const [course, setCourseData] = useState<CourseData | null>(null)
  const [courseLoading, setCourseLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)

  // Load course data dynamically
  useEffect(() => {
    loadCourseById(courseId).then((c) => {
      setCourseData(c ?? null)
      setCourseLoading(false)
    })
  }, [courseId])

  // Check if user has access (pro subscriber OR enrolled in this course)
  useEffect(() => {
    async function checkAccess() {
      if (!user) {
        setHasAccess(false)
        return
      }

      // Pro subscribers have access to everything
      if (profile?.subscription_status === 'pro') {
        setHasAccess(true)
        return
      }

      // Check enrolment
      const supabase = createClient()
      const { data } = await supabase
        .from('enrolments')
        .select('id')
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .single()

      setHasAccess(!!data)
    }
    checkAccess()
  }, [user, profile, courseId])

  // Build question pool: prefer curated assessment questions, fall back to module quizzes
  const allQuestions: AssessmentQuestion[] = useMemo(() => {
    if (!course) return []

    if (course.assessmentQuestions && course.assessmentQuestions.length > 0) {
      return course.assessmentQuestions.map((q) => ({ ...q, moduleTitle: 'Assessment' }))
    }

    const questions: AssessmentQuestion[] = []
    for (const mod of course.moduleList) {
      for (const q of mod.quiz) {
        questions.push({ ...q, moduleTitle: mod.title })
      }
    }
    return questions
  }, [course])

  const [phase, setPhase] = useState<AssessmentPhase>('intro')
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [certificateId, setCertificateId] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(0)
  const handleSubmitRef = useRef<() => void>(() => {})

  // Timer
  useEffect(() => {
    if (phase !== 'active') return

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          handleSubmitRef.current()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [phase])

  const startAssessment = useCallback(() => {
    const maxQuestions = 20
    const selected =
      allQuestions.length <= maxQuestions
        ? shuffleArray(allQuestions)
        : shuffleArray(allQuestions).slice(0, maxQuestions)

    setQuestions(selected)
    setCurrentIndex(0)
    setAnswers({})
    setTimeLeft(30 * 60)
    setResult(null)
    setError(null)
    startTimeRef.current = Date.now()
    setPhase('active')
  }, [allQuestions])

  const handleSubmit = useCallback(async () => {
    if (phase === 'submitting') return

    // Check for unanswered questions and confirm
    const unanswered = questions.length - Object.keys(answers).length
    if (unanswered > 0) {
      const confirm = window.confirm(
        t('learn.assessment.active.confirm_unanswered').replace('{n}', String(unanswered)),
      )
      if (!confirm) return
    }

    setPhase('submitting')

    if (timerRef.current) clearInterval(timerRef.current)

    const timeTaken = Math.round((Date.now() - startTimeRef.current) / 1000)

    // Calculate results
    let correct = 0
    const answeredList: AssessmentResult['answers'] = []

    questions.forEach((q, i) => {
      const selected = answers[i] ?? -1
      const isCorrect = selected === q.correct
      if (isCorrect) correct++
      answeredList.push({
        questionId: q.id,
        selected,
        correct: isCorrect,
      })
    })

    const percentage = Math.round((correct / questions.length) * 100)
    const grade = getGrade(percentage)
    const passed = percentage >= 50

    const assessmentResult: AssessmentResult = {
      score: correct,
      total: questions.length,
      percentage,
      grade,
      passed,
      answers: answeredList,
    }

    // Save to Supabase
    if (user) {
      const supabase = createClient()

      try {
        // Save assessment attempt
        const { data: attemptData, error: attemptError } = await supabase
          .from('assessment_attempts')
          .insert({
            user_id: user.id,
            course_id: courseId,
            score: percentage,
            passed,
            questions_answered: answeredList.map((a) => ({
              question_id: a.questionId,
              selected: String(a.selected),
              correct: a.correct,
            })),
            time_taken_seconds: timeTaken,
          })
          .select('id')
          .single()

        if (attemptError) throw attemptError

        // If passed, issue certificate via server-side API route
        // (certificates table has no client INSERT policy by design)
        if (passed && attemptData) {
          try {
            const certRes = await fetch('/api/certificates', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                assessment_attempt_id: attemptData.id,
                course_id: courseId,
              }),
            })

            if (certRes.ok) {
              const certJson = await certRes.json()
              if (certJson.certificate_id) {
                setCertificateId(certJson.certificate_id)
              }
            } else {
              console.error('Failed to issue certificate:', await certRes.text())
            }
          } catch (certErr) {
            console.error('Failed to issue certificate:', certErr)
          }
        }
      } catch (err) {
        console.error('Failed to save assessment:', err)
        setError(t('learn.assessment.result.save_error'))
      }
    }

    setResult(assessmentResult)
    setPhase('results')
  }, [phase, questions, answers, user, courseId, t])

  // Keep handleSubmitRef in sync so the timer never uses a stale closure
  handleSubmitRef.current = handleSubmit

  // ─── Render: Not Found ───────────────────────────────────────────────────────

  if (courseLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!course) {
    notFound()
  }

  if (course && selectedBoard && !matchesBoard(course.board, selectedBoard)) {
    const boardBody = t('learn.board.unavailable.body').split('{board}')
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-background text-foreground">
        <h1 className="text-2xl font-bold">{t('learn.board.unavailable.title')}</h1>
        <p className="text-muted-foreground text-center max-w-md">
          {boardBody[0]}
          <strong>{course.board}</strong>
          {boardBody[1] ?? ''}
        </p>
        <Link href="/courses" className="btn-primary text-sm">
          {t('learn.board.unavailable.browse')}
        </Link>
      </div>
    )
  }

  if (hasAccess === null) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (hasAccess === false) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="card max-w-md w-full text-center space-y-4 p-8">
          <Lock className="w-12 h-12 text-muted-foreground mx-auto" />
          <h2 className="text-xl font-bold text-foreground">
            {t('learn.assessment.access.title')}
          </h2>
          <p className="text-muted-foreground">{t('learn.assessment.access.body')}</p>
          <div className="flex gap-3 justify-center">
            <Link href={`/courses/${courseId}`} className="btn-primary">
              {t('learn.assessment.access.view_course')}
            </Link>
            <Link href="/account/billing" className="btn-secondary">
              {t('learn.assessment.access.subscribe')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ─── Render: Intro ─────────────────────────────────────────────────────────

  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="card max-w-lg w-full p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {t('learn.assessment.intro.title')}
            </h1>
            <p className="text-muted-foreground">{course.title}</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">{t('learn.assessment.intro.questions')}</span>
              <span className="text-foreground font-medium">
                {Math.min(20, allQuestions.length)}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">
                {t('learn.assessment.intro.time_limit')}
              </span>
              <span className="text-foreground font-medium">
                {t('learn.assessment.intro.time_value')}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">{t('learn.assessment.intro.pass_mark')}</span>
              <span className="text-foreground font-medium">
                {t('learn.assessment.intro.pass_value')}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-muted-foreground">
                {t('learn.assessment.intro.grading_label')}
              </span>
              <div className="text-right text-sm">
                <p className="text-brand-warning">{t('learn.assessment.intro.grade_band.low')}</p>
                <p className="text-brand-blue">{t('learn.assessment.intro.grade_band.mid')}</p>
                <p className="text-primary">{t('learn.assessment.intro.grade_band.high')}</p>
              </div>
            </div>
          </div>

          {allQuestions.length === 0 ? (
            <div className="text-center p-4 bg-brand-warning/10 border border-brand-warning/30 rounded-lg">
              <AlertTriangle size={20} className="text-brand-warning mx-auto mb-2" />
              <p className="text-muted-foreground text-sm">
                {t('learn.assessment.intro.no_questions')}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={startAssessment}
                disabled={!user || allQuestions.length === 0}
                className="btn-primary w-full py-4 text-lg"
              >
                {user
                  ? t('learn.assessment.intro.start')
                  : t('learn.assessment.intro.signin_required')}
              </button>
              <button
                onClick={() => router.push(`/learn/${courseId}/${course.moduleList[0]?.id ?? ''}`)}
                className="btn-secondary w-full"
              >
                <ArrowLeft size={16} className="mr-2" />
                {t('learn.assessment.intro.back')}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ─── Render: Active Assessment ─────────────────────────────────────────────

  if (phase === 'active' || phase === 'submitting') {
    const currentQ = questions[currentIndex]
    const selectedAnswer = answers[currentIndex]
    const answeredCount = Object.keys(answers).length
    const isTimeLow = timeLeft <= 300 // 5 minutes

    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-3xl mx-auto px-4 py-3 md:px-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                {t('learn.assessment.active.question_label')
                  .replace('{current}', String(currentIndex + 1))
                  .replace('{total}', String(questions.length))}
              </span>
              <span
                aria-live="polite"
                className={`flex items-center gap-1.5 text-sm font-mono font-semibold ${
                  isTimeLow ? 'text-destructive animate-pulse' : 'text-foreground'
                }`}
              >
                <Clock size={16} />
                {formatTime(timeLeft)}
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-card rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </header>

        {/* Question */}
        <main className="flex-1 flex items-start justify-center px-4 py-8">
          <div className="max-w-2xl w-full">
            {currentQ && (
              <>
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground">
                    {t('learn.assessment.active.from').replace(
                      '{moduleTitle}',
                      currentQ.moduleTitle,
                    )}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                  {currentQ.question}
                </h2>

                <div className="space-y-3 mb-8">
                  {currentQ.options.map((option, i) => {
                    const isSelected = selectedAnswer === i
                    return (
                      <button
                        key={i}
                        onClick={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [currentIndex]: i,
                          }))
                        }
                        disabled={phase === 'submitting'}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                          isSelected
                            ? 'border-primary bg-primary/10'
                            : 'border-border bg-card hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                              isSelected
                                ? 'border-primary text-primary bg-primary/20'
                                : 'border-muted-foreground/40 text-muted-foreground'
                            }`}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="text-foreground pt-0.5">{option}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0 || phase === 'submitting'}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    {t('learn.assessment.active.prev')}
                  </button>

                  {currentIndex < questions.length - 1 ? (
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))
                      }
                      disabled={phase === 'submitting'}
                      className="btn-primary flex items-center gap-2"
                    >
                      {t('learn.assessment.active.next')}
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={phase === 'submitting'}
                      className="btn-primary flex items-center gap-2"
                    >
                      {phase === 'submitting' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          {t('learn.assessment.active.submitting')}
                        </>
                      ) : (
                        <>
                          {t('learn.assessment.active.submit')}
                          <CheckCircle size={18} />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Question dots */}
                <div className="flex items-center justify-center gap-1.5 mt-8 flex-wrap">
                  {questions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      disabled={phase === 'submitting'}
                      className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                        i === currentIndex
                          ? 'bg-primary text-white'
                          : answers[i] !== undefined
                            ? 'bg-primary/20 text-primary'
                            : 'bg-card text-muted-foreground hover:bg-border'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  {t('learn.assessment.active.answered_count')
                    .replace('{answered}', String(answeredCount))
                    .replace('{total}', String(questions.length))}
                </p>
              </>
            )}
          </div>
        </main>
      </div>
    )
  }

  // ─── Render: Results ───────────────────────────────────────────────────────

  if (phase === 'results' && result) {
    return (
      <div className="min-h-screen bg-background px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Result Card */}
          <div className="card p-8 text-center mb-8">
            <div
              className={`w-20 h-20 rounded-full border-4 flex items-center justify-center mx-auto mb-4 ${
                result.passed
                  ? 'border-primary bg-primary/10'
                  : 'border-destructive bg-destructive/10'
              }`}
            >
              {result.passed ? (
                <Trophy size={36} className="text-primary" />
              ) : (
                <XCircle size={36} className="text-destructive" />
              )}
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-1">
              {result.passed
                ? t('learn.assessment.result.passed_title')
                : t('learn.assessment.result.failed_title')}
            </h1>
            {/* Translate the "Grade N" label through the dictionary so AR
                renders with the correct number formatting. `result.grade`
                is always shaped "Grade N" with a 1-digit N. */}
            {(() => {
              const gradeNum = parseInt(result.grade.replace('Grade ', ''), 10)
              const localisedGrade = t('learn.assessment.result.grade_n').replace(
                '{n}',
                String(gradeNum),
              )
              return (
                <>
                  <p className="text-muted-foreground mb-6">
                    {result.passed
                      ? t(pickGenderedKey('learn.assessment.result.passed_body', gender)).replace(
                          '{grade}',
                          localisedGrade,
                        )
                      : t(pickGenderedKey('learn.assessment.result.failed_body', gender))}
                  </p>

                  {/* Score */}
                  <div className="flex items-center justify-center gap-8 mb-6">
                    <div>
                      <div
                        className={`text-5xl font-bold ${gcseGradeColor(percentageToGCSEGrade(result.percentage))}`}
                      >
                        {t('learn.assessment.result.grade_n').replace(
                          '{n}',
                          String(percentageToGCSEGrade(result.percentage)),
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {result.percentage}% ({localisedGrade})
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-lg border ${getGradeBg(result.grade)}`}>
                      <div className={`text-2xl font-bold ${getGradeColor(result.grade)}`}>
                        {localisedGrade}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t('learn.assessment.result.grade_label')}
                      </div>
                    </div>
                  </div>
                </>
              )
            })()}

            <div className="text-sm text-muted-foreground">
              {t('learn.assessment.result.score_line')
                .replace('{score}', String(result.score))
                .replace('{total}', String(result.total))}
            </div>

            {error && (
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-sm text-destructive">
                <AlertTriangle size={16} className="inline mr-1" />
                {error}
              </div>
            )}
          </div>

          {/* Breakdown */}
          <div className="card p-6 mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              {t('learn.assessment.breakdown.title')}
            </h2>
            <div className="space-y-3">
              {questions.map((q, i) => {
                const answer = result.answers[i]
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border ${
                      answer?.correct
                        ? 'bg-primary/5 border-primary/20'
                        : 'bg-destructive/5 border-destructive/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">
                        {answer?.correct ? (
                          <CheckCircle size={18} className="text-primary" />
                        ) : (
                          <XCircle size={18} className="text-destructive" />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-foreground text-sm font-medium mb-1">{q.question}</p>
                        {!answer?.correct && (
                          <div className="text-xs text-muted-foreground mt-1 space-y-1">
                            <p>
                              <span className="text-destructive">
                                {t('learn.assessment.breakdown.your_answer')}
                              </span>
                              {answer?.selected >= 0
                                ? q.options[answer.selected]
                                : t('learn.assessment.breakdown.not_answered')}
                            </p>
                            <p>
                              <span className="text-primary">
                                {t('learn.assessment.breakdown.correct_answer')}
                              </span>
                              {q.options[q.correct]}
                            </p>
                          </div>
                        )}
                        {q.explanation && (
                          <p className="text-xs text-muted-foreground/70 mt-2 italic">
                            {q.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {result.passed && certificateId && (
              <a
                href={`/certificate/${certificateId}`}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <Award size={18} />
                {t('learn.assessment.actions.view_cert')}
              </a>
            )}
            {!result.passed && (
              <button
                onClick={startAssessment}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                {t('learn.assessment.actions.try_again')}
              </button>
            )}
            <button
              onClick={() => router.push(`/learn/${courseId}/${course.moduleList[0]?.id ?? ''}`)}
              className="btn-secondary flex-1 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              {t('learn.assessment.actions.back_to_course')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
