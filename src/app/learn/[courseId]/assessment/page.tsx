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
import { allCourses } from '@/data/courses'
import type { CourseQuiz } from '@/data/courses'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { useBoardStore } from '@/store/board-store'
import { matchesBoard } from '@/lib/board-filter'
import { shuffleArray, formatTime } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────

interface AssessmentQuestion extends CourseQuiz {
  moduleTitle: string
}

type AssessmentPhase = 'intro' | 'active' | 'submitting' | 'results'

interface AssessmentResult {
  score: number
  total: number
  percentage: number
  grade: 'Fail' | 'Pass' | 'Merit' | 'Distinction'
  passed: boolean
  answers: { questionId: string; selected: number; correct: boolean }[]
}

function getGrade(
  percentage: number
): 'Fail' | 'Pass' | 'Merit' | 'Distinction' {
  if (percentage >= 85) return 'Distinction'
  if (percentage >= 70) return 'Merit'
  if (percentage >= 50) return 'Pass'
  return 'Fail'
}

function getGradeColor(grade: string): string {
  switch (grade) {
    case 'Distinction':
      return 'text-brand-accent'
    case 'Merit':
      return 'text-brand-blue'
    case 'Pass':
      return 'text-brand-warning'
    default:
      return 'text-brand-error'
  }
}

function getGradeBg(grade: string): string {
  switch (grade) {
    case 'Distinction':
      return 'bg-brand-accent/10 border-brand-accent/30'
    case 'Merit':
      return 'bg-brand-blue/10 border-brand-blue/30'
    case 'Pass':
      return 'bg-brand-warning/10 border-brand-warning/30'
    default:
      return 'bg-brand-error/10 border-brand-error/30'
  }
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AssessmentPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.courseId as string
  const { user, profile } = useAuthStore()
  const { selectedBoard } = useBoardStore()

  const course = allCourses.find((c) => c.id === courseId) ?? null
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)

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
      return course.assessmentQuestions.map(q => ({ ...q, moduleTitle: 'Assessment' }))
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
      const confirm = window.confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)
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

        // If passed, create or update certificate (keep highest score)
        // Requires UNIQUE(user_id, course_id) constraint on certificates table
        if (passed && attemptData) {
          const { data: existingCert } = await supabase
            .from('certificates')
            .select('id, score')
            .eq('user_id', user.id)
            .eq('course_id', courseId)
            .single()

          if (!existingCert || percentage > existingCert.score) {
            const { data: certData, error: certError } = await supabase
              .from('certificates')
              .upsert({
                user_id: user.id,
                course_id: courseId,
                assessment_attempt_id: attemptData.id,
                score: percentage,
                grade: grade === 'Fail' ? null : grade,
              }, { onConflict: 'user_id,course_id' })
              .select('id')
              .single()

            if (certError) {
              console.error('Failed to create/update certificate:', certError)
            } else if (certData) {
              setCertificateId(certData.id)
            }
          } else if (existingCert) {
            setCertificateId(existingCert.id)
          }
        }
      } catch (err) {
        console.error('Failed to save assessment:', err)
        setError('Your results were calculated but could not be saved. Please try again.')
      }
    }

    setResult(assessmentResult)
    setPhase('results')
  }, [phase, questions, answers, user, courseId])

  // Keep handleSubmitRef in sync so the timer never uses a stale closure
  handleSubmitRef.current = handleSubmit

  // ─── Render: Not Found ───────────────────────────────────────────────────────

  if (!course) {
    notFound()
  }

  if (course && selectedBoard && !matchesBoard(course.board, selectedBoard)) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-brand-bg text-brand-text">
        <h1 className="text-2xl font-bold">Course not available</h1>
        <p className="text-brand-muted text-center max-w-md">
          This course is for the <strong>{course.board}</strong> exam board.
        </p>
        <Link href="/courses" className="btn-primary text-sm">
          Browse your courses
        </Link>
      </div>
    )
  }

  if (hasAccess === false) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center p-4">
        <div className="card max-w-md w-full text-center space-y-4 p-8">
          <Lock className="w-12 h-12 text-brand-muted mx-auto" />
          <h2 className="text-xl font-bold text-brand-text">Course Access Required</h2>
          <p className="text-brand-muted">You need to purchase this course or subscribe to Pro to access this content.</p>
          <div className="flex gap-3 justify-center">
            <Link href={`/courses/${courseId}`} className="btn-primary">View Course</Link>
            <Link href="/account/billing" className="btn-secondary">Subscribe</Link>
          </div>
        </div>
      </div>
    )
  }

  // ─── Render: Intro ─────────────────────────────────────────────────────────

  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
        <div className="card max-w-lg w-full p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-brand-accent" />
            </div>
            <h1 className="text-2xl font-bold text-brand-text mb-2">
              Final Assessment
            </h1>
            <p className="text-brand-muted">{course.title}</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between py-3 border-b border-brand-border">
              <span className="text-brand-muted">Questions</span>
              <span className="text-brand-text font-medium">
                {Math.min(20, allQuestions.length)}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-brand-border">
              <span className="text-brand-muted">Time Limit</span>
              <span className="text-brand-text font-medium">30 minutes</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-brand-border">
              <span className="text-brand-muted">Pass Mark</span>
              <span className="text-brand-text font-medium">50%</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-brand-muted">Grading</span>
              <div className="text-right text-sm">
                <p className="text-brand-warning">Pass: 50-69%</p>
                <p className="text-brand-blue">Merit: 70-84%</p>
                <p className="text-brand-accent">Distinction: 85%+</p>
              </div>
            </div>
          </div>

          {allQuestions.length === 0 ? (
            <div className="text-center p-4 bg-brand-warning/10 border border-brand-warning/30 rounded-lg">
              <AlertTriangle
                size={20}
                className="text-brand-warning mx-auto mb-2"
              />
              <p className="text-brand-muted text-sm">
                No quiz questions available for this course.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={startAssessment}
                disabled={!user}
                className="btn-primary w-full py-4 text-lg"
              >
                {user ? 'Start Assessment' : 'Sign in to take assessment'}
              </button>
              <button
                onClick={() =>
                  router.push(
                    `/learn/${courseId}/${course.moduleList[0]?.id ?? ''}`
                  )
                }
                className="btn-secondary w-full"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Course
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
      <div className="min-h-screen bg-brand-bg flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-border">
          <div className="max-w-3xl mx-auto px-4 py-3 md:px-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-brand-muted">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span
                aria-live="polite"
                className={`flex items-center gap-1.5 text-sm font-mono font-semibold ${
                  isTimeLow ? 'text-brand-error animate-pulse' : 'text-brand-text'
                }`}
              >
                <Clock size={16} />
                {formatTime(timeLeft)}
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-brand-card rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-accent rounded-full transition-all duration-300"
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
                  <span className="text-xs text-brand-muted">
                    From: {currentQ.moduleTitle}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-brand-text mb-6 leading-relaxed">
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
                            ? 'border-brand-accent bg-brand-accent/10'
                            : 'border-brand-border bg-brand-card hover:border-brand-accent/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                              isSelected
                                ? 'border-brand-accent text-brand-accent bg-brand-accent/20'
                                : 'border-brand-muted/40 text-brand-muted'
                            }`}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="text-brand-text pt-0.5">
                            {option}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) => Math.max(0, prev - 1))
                    }
                    disabled={currentIndex === 0 || phase === 'submitting'}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Previous
                  </button>

                  {currentIndex < questions.length - 1 ? (
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          Math.min(questions.length - 1, prev + 1)
                        )
                      }
                      disabled={phase === 'submitting'}
                      className="btn-primary flex items-center gap-2"
                    >
                      Next
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Assessment
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
                          ? 'bg-brand-accent text-white'
                          : answers[i] !== undefined
                            ? 'bg-brand-accent/20 text-brand-accent'
                            : 'bg-brand-card text-brand-muted hover:bg-brand-border'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <p className="text-center text-sm text-brand-muted mt-4">
                  {answeredCount} of {questions.length} answered
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
      <div className="min-h-screen bg-brand-bg px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Result Card */}
          <div className="card p-8 text-center mb-8">
            <div
              className={`w-20 h-20 rounded-full border-4 flex items-center justify-center mx-auto mb-4 ${
                result.passed
                  ? 'border-brand-accent bg-brand-accent/10'
                  : 'border-brand-error bg-brand-error/10'
              }`}
            >
              {result.passed ? (
                <Trophy size={36} className="text-brand-accent" />
              ) : (
                <XCircle size={36} className="text-brand-error" />
              )}
            </div>

            <h1 className="text-3xl font-bold text-brand-text mb-1">
              {result.passed ? 'Congratulations!' : 'Assessment Complete'}
            </h1>
            <p className="text-brand-muted mb-6">
              {result.passed
                ? `You passed with a ${result.grade}!`
                : 'You did not meet the pass mark. Review the modules and try again.'}
            </p>

            {/* Score */}
            <div className="flex items-center justify-center gap-8 mb-6">
              <div>
                <div className="text-5xl font-bold text-brand-text">
                  {result.percentage}%
                </div>
                <div className="text-sm text-brand-muted mt-1">Score</div>
              </div>
              <div
                className={`px-4 py-2 rounded-lg border ${getGradeBg(
                  result.grade
                )}`}
              >
                <div className={`text-2xl font-bold ${getGradeColor(result.grade)}`}>
                  {result.grade}
                </div>
                <div className="text-xs text-brand-muted">Grade</div>
              </div>
            </div>

            <div className="text-sm text-brand-muted">
              {result.score} correct out of {result.total} questions
            </div>

            {error && (
              <div className="mt-4 p-3 bg-brand-error/10 border border-brand-error/30 rounded-lg text-sm text-brand-error">
                <AlertTriangle size={16} className="inline mr-1" />
                {error}
              </div>
            )}
          </div>

          {/* Breakdown */}
          <div className="card p-6 mb-8">
            <h2 className="text-lg font-semibold text-brand-text mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              Question Breakdown
            </h2>
            <div className="space-y-3">
              {questions.map((q, i) => {
                const answer = result.answers[i]
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border ${
                      answer?.correct
                        ? 'bg-brand-accent/5 border-brand-accent/20'
                        : 'bg-brand-error/5 border-brand-error/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">
                        {answer?.correct ? (
                          <CheckCircle
                            size={18}
                            className="text-brand-accent"
                          />
                        ) : (
                          <XCircle
                            size={18}
                            className="text-brand-error"
                          />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-brand-text text-sm font-medium mb-1">
                          {q.question}
                        </p>
                        {!answer?.correct && (
                          <div className="text-xs text-brand-muted mt-1 space-y-1">
                            <p>
                              <span className="text-brand-error">
                                Your answer:{' '}
                              </span>
                              {answer?.selected >= 0
                                ? q.options[answer.selected]
                                : 'Not answered'}
                            </p>
                            <p>
                              <span className="text-brand-accent">
                                Correct:{' '}
                              </span>
                              {q.options[q.correct]}
                            </p>
                          </div>
                        )}
                        {q.explanation && (
                          <p className="text-xs text-brand-muted/70 mt-2 italic">
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
                View Certificate
              </a>
            )}
            {!result.passed && (
              <button
                onClick={startAssessment}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                Try Again
              </button>
            )}
            <button
              onClick={() =>
                router.push(
                  `/learn/${courseId}/${course.moduleList[0]?.id ?? ''}`
                )
              }
              className="btn-secondary flex-1 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Course
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
