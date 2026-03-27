'use client'

import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import DOMPurify from 'dompurify'
import { useParams, useRouter, notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Menu,
  X,
  CheckCircle,
  Circle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Award,
  ChevronRight,
  BookOpen,
  Loader2,
  Lock,
} from 'lucide-react'
import { loadCourseById } from '@/data/course-loader'
import type { CourseData, CourseModule, CourseQuiz } from '@/data/courses'
import { createClient } from '@/lib/supabase/client'
import { useAuthUserProfile } from '@/store/auth-store'
import { useCourseStore, useCourseProgress, useCourseActions } from '@/store/course-store'
import { useSelectedBoard } from '@/store/board-store'
import { matchesBoard } from '@/lib/board-filter'

// ─── Quiz Card ───────────────────────────────────────────────────────────────

function QuizCard({
  quiz,
  index,
  total,
  onAnswer,
}: {
  quiz: CourseQuiz
  index: number
  total: number
  onAnswer: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const isCorrect = selected === quiz.correct

  function handleSelect(optionIndex: number) {
    if (submitted) return
    setSelected(optionIndex)
  }

  function handleSubmit() {
    if (selected === null || submitted) return
    setSubmitted(true)
    onAnswer(selected === quiz.correct)
  }

  return (
    <div className="card p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Question {index + 1} of {total}
        </span>
        {submitted && (
          <span
            className={`text-sm font-semibold ${
              isCorrect ? 'text-primary' : 'text-destructive'
            }`}
          >
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </span>
        )}
      </div>

      <p className="text-foreground font-medium mb-4 text-lg">{quiz.question}</p>

      <div className="space-y-3">
        {quiz.options.map((option, i) => {
          let borderClass = 'border-border hover:border-primary/50'
          let bgClass = 'bg-background'

          if (submitted) {
            if (i === quiz.correct) {
              borderClass = 'border-primary'
              bgClass = 'bg-primary/10'
            } else if (i === selected && !isCorrect) {
              borderClass = 'border-destructive'
              bgClass = 'bg-destructive/10'
            } else {
              borderClass = 'border-border opacity-50'
            }
          } else if (i === selected) {
            borderClass = 'border-primary'
            bgClass = 'bg-primary/10'
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={submitted}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${borderClass} ${bgClass} ${
                !submitted ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                    submitted && i === quiz.correct
                      ? 'border-primary text-primary'
                      : submitted && i === selected
                        ? 'border-destructive text-destructive'
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

      {/* Submit button — shown after selecting an option but before submitting */}
      {selected !== null && !submitted && (
        <button
          onClick={handleSubmit}
          className="mt-4 btn-primary w-full py-3 text-sm font-semibold"
        >
          Check Answer
        </button>
      )}

      {submitted && (
        <div
          className={`mt-4 p-4 rounded-lg border ${
            isCorrect
              ? 'bg-primary/10 border-primary/30'
              : 'bg-destructive/10 border-destructive/30'
          }`}
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="font-semibold text-foreground">Explanation: </span>
            {quiz.explanation}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Progress Dots ───────────────────────────────────────────────────────────

function QuizProgressDots({
  total,
  results,
}: {
  total: number
  results: (boolean | null)[]
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full transition-colors ${
            results[i] === true
              ? 'bg-primary'
              : results[i] === false
                ? 'bg-destructive'
                : 'bg-border'
          }`}
        />
      ))}
    </div>
  )
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({
  course,
  currentModuleId,
  completedModules,
  onSelectModule,
  open,
  onClose,
}: {
  course: CourseData
  currentModuleId: string
  completedModules: Set<string>
  onSelectModule: (moduleId: string) => void
  open: boolean
  onClose: () => void
}) {
  const completedCount = course.moduleList.filter((m) =>
    completedModules.has(m.id)
  ).length
  const progressPercent =
    course.moduleList.length > 0
      ? Math.round((completedCount / course.moduleList.length) * 100)
      : 0

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-5 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-foreground font-bold text-lg leading-tight line-clamp-2">
            {course.title}
          </h2>
          <button
            onClick={onClose}
            className="md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <BookOpen size={14} />
          <span>
            {completedCount} / {course.moduleList.length} modules
          </span>
        </div>
        <div className="w-full h-2 bg-background rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground mt-1 block">
          {progressPercent}% complete
        </span>
      </div>

      {/* Module List */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-1">
          {course.moduleList.map((mod, i) => {
            const isCurrent = mod.id === currentModuleId
            const isCompleted = completedModules.has(mod.id)
            return (
              <li key={mod.id}>
                <button
                  onClick={() => {
                    onSelectModule(mod.id)
                    onClose()
                  }}
                  className={`w-full text-left flex items-start gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                    isCurrent
                      ? 'bg-primary/10 border border-primary/30'
                      : 'hover:bg-background border border-transparent'
                  }`}
                >
                  <span className="flex-shrink-0 mt-0.5">
                    {isCompleted ? (
                      <CheckCircle
                        size={18}
                        className="text-primary"
                      />
                    ) : (
                      <Circle
                        size={18}
                        className={
                          isCurrent
                            ? 'text-primary'
                            : 'text-muted-foreground/70'
                        }
                      />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span
                      className={`block text-sm font-medium leading-snug ${
                        isCurrent
                          ? 'text-primary'
                          : isCompleted
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                      }`}
                    >
                      {i + 1}. {mod.title}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground/60 mt-1">
                      <Clock size={11} />
                      {mod.duration}
                    </span>
                  </div>
                  {isCurrent && (
                    <ChevronRight
                      size={16}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Assessment Link */}
        <div className="mt-4 pt-4 border-t border-border">
          <a
            href={`/learn/${course.id}/assessment`}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
              completedCount === course.moduleList.length
                ? 'bg-primary/10 border border-primary/30 hover:bg-primary/20'
                : 'opacity-50 cursor-not-allowed border border-transparent'
            }`}
            onClick={(e) => {
              if (completedCount < course.moduleList.length) e.preventDefault()
            }}
          >
            <Award
              size={18}
              className={
                completedCount === course.moduleList.length
                  ? 'text-primary'
                  : 'text-muted-foreground/70'
              }
            />
            <span
              className={`text-sm font-medium ${
                completedCount === course.moduleList.length
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              Final Assessment
            </span>
          </a>
        </div>
      </nav>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-[280px] flex-shrink-0 bg-card border-r border-border h-screen sticky top-0 overflow-hidden">
        {sidebarContent}
      </aside>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-[280px] bg-card border-r border-border transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function CoursePlayerPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.courseId as string
  const moduleId = params.moduleId as string

  const { user, profile } = useAuthUserProfile()
  const { completedModules, markModuleComplete } = useCourseProgress()
  const { setCourse, setModule } = useCourseActions()
  const selectedBoard = useSelectedBoard()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)
  const [quizResults, setQuizResults] = useState<(boolean | null)[]>([])
  const [quizScore, setQuizScore] = useState(0)
  const [completing, setCompleting] = useState(false)
  const [moduleCompleted, setModuleCompleted] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(true)
  const [course, setCourseData] = useState<CourseData | null>(null)
  const [courseLoading, setCourseLoading] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef<number>(Date.now())

  // Load course data dynamically
  useEffect(() => {
    loadCourseById(courseId).then((c) => {
      setCourseData(c ?? null)
      setCourseLoading(false)
    })
  }, [courseId])

  // Derive module info from loaded course
  const moduleIndex = course
    ? course.moduleList.findIndex((m) => m.id === moduleId)
    : -1
  const currentModule =
    course && moduleIndex >= 0 ? course.moduleList[moduleIndex] : null
  const prevModule =
    course && moduleIndex > 0 ? course.moduleList[moduleIndex - 1] : null
  const nextModule =
    course && moduleIndex < (course?.moduleList.length ?? 0) - 1
      ? course.moduleList[moduleIndex + 1]
      : null

  // Is this a free preview module? (first module in the course)
  const isPreviewModule = moduleIndex === 0

  // Check if user has access (preview module, pro subscriber, OR enrolled)
  useEffect(() => {
    async function checkAccess() {
      // Free preview modules are accessible to everyone
      if (isPreviewModule) {
        setHasAccess(true)
        return
      }

      // Non-preview modules require authentication
      if (!user) {
        setHasAccess(false)
        return
      }

      try {
        // Pro subscribers have access to everything
        if (profile?.subscription_status === 'pro') {
          setHasAccess(true)
          return
        }

        // Check enrolment
        const supabase = createClient()
        const { data, error } = await supabase
          .from('enrolments')
          .select('id')
          .eq('user_id', user.id)
          .eq('course_id', courseId)
          .single()

        if (error) {
          console.error('Failed to check course access:', error)
          setHasAccess(false)
          return
        }

        setHasAccess(!!data)
      } catch (err) {
        console.error('Error checking course access:', err)
        setHasAccess(false)
      }
    }
    checkAccess()
  }, [user, profile, courseId, moduleId, course, isPreviewModule])

  // Load progress from Supabase
  useEffect(() => {
    if (!user || !course) {
      setLoadingProgress(false)
      return
    }

    const supabase = createClient()

    async function loadProgress() {
      try {
        const { data } = await supabase
          .from('module_progress')
          .select('module_id, completed')
          .eq('user_id', user!.id)
          .eq('course_id', courseId)
          .eq('completed', true)

        if (data) {
          data.forEach((row) => markModuleComplete(row.module_id))
          // Check if current module is already completed
          if (data.some((row) => row.module_id === moduleId)) {
            setModuleCompleted(true)
          }
        }
      } catch (err) {
        console.error('Failed to load progress:', err)
      } finally {
        setLoadingProgress(false)
      }
    }

    loadProgress()
  }, [user, courseId, moduleId, course, markModuleComplete])

  // Update store on course/module change
  useEffect(() => {
    if (course) setCourse(course)
    if (currentModule) setModule(currentModule, moduleIndex)
  }, [course, currentModule, moduleIndex, setCourse, setModule])

  // Reset quiz state when module changes
  useEffect(() => {
    setQuizResults([])
    setQuizScore(0)
    setModuleCompleted(completedModules.has(moduleId))
    startTimeRef.current = Date.now()
    contentRef.current?.scrollTo(0, 0)
  }, [moduleId, completedModules])

  // Initialize quiz results array
  useEffect(() => {
    if (currentModule) {
      setQuizResults(new Array(currentModule.quiz.length).fill(null))
    }
  }, [currentModule])

  const handleQuizAnswer = useCallback(
    (index: number, correct: boolean) => {
      setQuizResults((prev) => {
        const next = [...prev]
        next[index] = correct
        return next
      })
      if (correct) setQuizScore((s) => s + 1)
    },
    []
  )

  const handleCompleteModule = useCallback(async () => {
    if (!user || !course || !currentModule || completing) return

    setCompleting(true)
    const supabase = createClient()
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
    const answeredCount = quizResults.filter((r) => r !== null).length
    const score =
      answeredCount > 0
        ? Math.round((quizScore / currentModule.quiz.length) * 100)
        : null

    try {
      const { error } = await supabase.from('module_progress').upsert(
        {
          user_id: user.id,
          course_id: courseId,
          module_id: moduleId,
          completed: true,
          quiz_score: score,
          quiz_attempts: answeredCount > 0 ? 1 : 0,
          time_spent_seconds: timeSpent,
          completed_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,module_id' }
      )

      if (error) throw error

      markModuleComplete(moduleId)
      setModuleCompleted(true)
    } catch (err) {
      console.error('Failed to save progress:', err)
    } finally {
      setCompleting(false)
    }
  }, [
    user,
    course,
    currentModule,
    completing,
    courseId,
    moduleId,
    quizResults,
    quizScore,
    markModuleComplete,
  ])

  // ─── Render ──────────────────────────────────────────────────────────────────

  const sanitizedContent = useMemo(
    () => DOMPurify.sanitize(currentModule?.content || ''),
    [currentModule?.content]
  )

  if (courseLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!course || !currentModule) {
    notFound()
  }

  if (course && selectedBoard && !matchesBoard(course.board, selectedBoard)) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-background text-foreground">
        <h1 className="text-2xl font-bold">Course not available</h1>
        <p className="text-muted-foreground text-center max-w-md">
          This course is for the <strong>{course.board}</strong> exam board.
        </p>
        <Link href="/courses" className="btn-primary text-sm">
          Browse your courses
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
          <h2 className="text-xl font-bold text-foreground">Course Access Required</h2>
          <p className="text-muted-foreground">You need to purchase this course or subscribe to Pro to access this content.</p>
          <div className="flex gap-3 justify-center">
            <Link href={`/courses/${courseId}`} className="btn-primary">View Course</Link>
            <Link href="/account/billing" className="btn-secondary">Subscribe</Link>
          </div>
        </div>
      </div>
    )
  }

  const completedCount = course.moduleList.filter((m) =>
    completedModules.has(m.id)
  ).length
  const progressPercent = Math.round(
    (completedCount / course.moduleList.length) * 100
  )
  const allQuizAnswered =
    currentModule.quiz.length === 0 ||
    quizResults.every((r) => r !== null)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        course={course}
        currentModuleId={moduleId}
        completedModules={completedModules}
        onSelectModule={(id) => router.push(`/learn/${courseId}/${id}`)}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="flex items-center gap-3 px-4 py-3 md:px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open navigation"
            >
              <Menu size={22} />
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <a
                  href={`/courses/${courseId}`}
                  className="hover:text-primary transition-colors"
                >
                  {course.title}
                </a>
                <ChevronRight size={14} />
                <span className="truncate text-foreground">
                  Module {moduleIndex + 1}
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1.5 bg-card rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:block">
              {completedCount}/{course.moduleList.length} complete
            </span>
          </div>
        </header>

        {/* Module Content */}
        <div className="flex-1 overflow-y-auto" ref={contentRef}>
          <div className="max-w-3xl mx-auto px-4 py-8 md:px-8">
            {/* Module Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-primary">
                  Module {moduleIndex + 1} of {course.moduleList.length}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock size={14} />
                  {currentModule.duration}
                </span>
                {moduleCompleted && (
                  <span className="flex items-center gap-1 text-sm text-primary">
                    <CheckCircle size={14} />
                    Completed
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                {currentModule.title}
              </h1>
            </div>

            {/* HTML Content */}
            <div
              className="course-content"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />

            {/* Quiz Section */}
            {currentModule.quiz.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Knowledge Check
                </h2>
                <p className="text-muted-foreground mb-6">
                  Test your understanding of this module.
                </p>

                <QuizProgressDots
                  total={currentModule.quiz.length}
                  results={quizResults}
                />

                {currentModule.quiz.map((q, i) => (
                  <QuizCard
                    key={q.id}
                    quiz={q}
                    index={i}
                    total={currentModule.quiz.length}
                    onAnswer={(correct) => handleQuizAnswer(i, correct)}
                  />
                ))}

                {allQuizAnswered && (
                  <div className="card p-6 text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {quizScore}/{currentModule.quiz.length}
                    </div>
                    <p className="text-muted-foreground">
                      {quizScore === currentModule.quiz.length
                        ? 'Perfect score! Excellent work.'
                        : quizScore >= currentModule.quiz.length * 0.7
                          ? 'Great job! You have a solid understanding.'
                          : 'Review the material and try again to strengthen your understanding.'}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Complete Module Button */}
            {!moduleCompleted && (
              <div className="mt-8">
                <button
                  onClick={handleCompleteModule}
                  disabled={
                    completing ||
                    !user ||
                    loadingProgress ||
                    (currentModule.quiz.length > 0 && !allQuizAnswered)
                  }
                  className="btn-primary w-full py-4 text-lg"
                >
                  {completing ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={20} className="animate-spin" />
                      Saving progress...
                    </span>
                  ) : !user ? (
                    'Sign in to save progress'
                  ) : currentModule.quiz.length > 0 && !allQuizAnswered ? (
                    'Complete the quiz to finish this module'
                  ) : (
                    <span className="flex items-center gap-2">
                      <CheckCircle size={20} />
                      Complete Module
                    </span>
                  )}
                </button>
              </div>
            )}

            {moduleCompleted && (
              <div className="mt-8 card p-6 text-center border-primary/30">
                <CheckCircle
                  size={32}
                  className="text-primary mx-auto mb-2"
                />
                <p className="text-foreground font-semibold">
                  Module Completed
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Your progress has been saved.
                </p>
              </div>
            )}

            {/* Preview CTA — shown on free preview modules for non-subscribed users */}
            {isPreviewModule && (!user || (profile?.subscription_status !== 'pro')) && (
              <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6 sm:p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Enjoying this? Subscribe for full access — first month free!
                </h3>
                <p className="text-muted-foreground mb-5 max-w-lg mx-auto">
                  Unlock all {course.moduleList.length} modules in this course, plus every course on the platform.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/account/billing" className="btn-primary px-6 py-3 text-base">
                    Start Free Trial
                  </Link>
                  <Link href={`/courses/${courseId}`} className="btn-secondary px-6 py-3 text-base">
                    View Full Course
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border pb-8">
              {prevModule ? (
                <button
                  onClick={() =>
                    router.push(`/learn/${courseId}/${prevModule.id}`)
                  }
                  className="btn-secondary flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  <span className="hidden sm:inline">Previous:</span>
                  <span className="truncate max-w-[150px] sm:max-w-[200px]">
                    {prevModule.title}
                  </span>
                </button>
              ) : (
                <div />
              )}

              {nextModule ? (
                <button
                  onClick={() =>
                    router.push(`/learn/${courseId}/${nextModule.id}`)
                  }
                  className="btn-primary flex items-center gap-2"
                >
                  <span className="hidden sm:inline">Next:</span>
                  <span className="truncate max-w-[150px] sm:max-w-[200px]">
                    {nextModule.title}
                  </span>
                  <ArrowRight size={18} />
                </button>
              ) : completedCount === course.moduleList.length ? (
                <a
                  href={`/learn/${courseId}/assessment`}
                  className="btn-primary flex items-center gap-2"
                >
                  <Award size={18} />
                  Take Final Assessment
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
