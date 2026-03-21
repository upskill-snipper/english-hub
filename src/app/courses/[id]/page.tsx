'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  BookOpen,
  Clock,
  GraduationCap,
  CheckCircle,
  ArrowLeft,
  Lock,
  Play,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { useBoardStore } from '@/store/board-store'
import { matchesBoard } from '@/lib/board-filter'
import { allCourses as courses } from '@/data/courses'
import type { CourseData } from '@/data/courses'

export default function CourseDetailPage() {
  const params = useParams<{ id: string }>()
  const { user, profile } = useAuthStore()
  const { selectedBoard } = useBoardStore()

  const [course] = useState<CourseData | null>(
    () => courses.find((c) => c.id === params.id) ?? null
  )
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [loading, setLoading] = useState(true)

  const isPro = profile?.subscription_status === 'pro'

  /* ---- Check enrolment ---- */
  useEffect(() => {
    if (!user || !course) {
      setLoading(false)
      return
    }

    async function checkEnrolment() {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from('enrolments')
          .select('id')
          .eq('user_id', user!.id)
          .eq('course_id', course!.id)
          .maybeSingle()

        setIsEnrolled(!!data)
      } catch {
        // fail silently — user simply sees buy button
      } finally {
        setLoading(false)
      }
    }

    checkEnrolment()
  }, [user, course])

  /* ---- 404 ---- */
  if (!course) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-brand-bg text-brand-text">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link href="/courses" className="btn-primary text-sm">
          Back to courses
        </Link>
      </div>
    )
  }

  // Board mismatch — course belongs to a different exam board
  if (course && selectedBoard && !matchesBoard(course.board, selectedBoard)) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-brand-bg text-brand-text">
        <h1 className="text-2xl font-bold">Course not available</h1>
        <p className="text-brand-muted text-center max-w-md">
          This course is for the <strong>{course.board}</strong> exam board. You currently have <strong>{selectedBoard}</strong> selected.
        </p>
        <Link href="/courses" className="btn-primary text-sm">
          Browse your courses
        </Link>
      </div>
    )
  }

  const hasAccess = isEnrolled || isPro
  const ctaLabel = hasAccess ? 'Start Learning' : 'Subscribe to Access'
  const ctaHref = hasAccess
    ? `/learn/${course.id}/${course.moduleList[0]?.id}`
    : '/account/billing'

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* ============== HEADER ============== */}
      <section className="border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-brand-muted hover:text-brand-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All courses
          </Link>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold"
                  style={{
                    backgroundColor: `${course.color}20`,
                    color: course.color,
                  }}
                >
                  {course.tier}
                </span>
                <span className="inline-flex items-center rounded-md bg-brand-card px-2.5 py-0.5 text-xs font-medium text-brand-muted border border-brand-border">
                  {course.level}
                </span>
                {course.board && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">
                    {course.board}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
                {course.title}
              </h1>
              <p className="mt-2 text-lg text-brand-muted">{course.subtitle}</p>

              {/* Stats row */}
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-brand-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand-accent" />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-brand-accent" />
                  {course.moduleList.length} modules
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-brand-accent" />
                  {course.level}
                </span>
              </div>
            </div>

            {/* Desktop sidebar subscription card */}
            <div className="hidden lg:block">
              <SubscriptionCard
                ctaLabel={ctaLabel}
                ctaHref={ctaHref}
                hasAccess={hasAccess}
                loading={loading}
                moduleCount={course.moduleList.length}
                duration={course.duration}
                level={course.level}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== BODY ============== */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Main content */}
          <div className="flex-1">
            {/* Description */}
            <div className="card p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-bold text-brand-text">
                About This Course
              </h2>
              <p className="leading-relaxed text-brand-muted">
                {course.description}
              </p>
            </div>

            {/* Module list */}
            <div className="card mt-6 p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-brand-text">
                What You&apos;ll Learn
              </h2>

              <ol className="space-y-3">
                {course.moduleList.map((mod, idx) => {
                  const isFreePreview = idx === 0
                  const locked = !hasAccess && !isFreePreview

                  return (
                    <li
                      key={mod.id}
                      className={`group flex items-center gap-4 rounded-lg border px-4 py-3.5 transition-colors duration-200 ${
                        locked
                          ? 'border-brand-border bg-brand-bg/50'
                          : 'border-brand-border hover:border-brand-accent/30 hover:bg-brand-accent/5'
                      }`}
                    >
                      {/* Number circle */}
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: locked
                            ? '#1a2840'
                            : `${course.color}20`,
                          color: locked ? '#94a3b8' : course.color,
                        }}
                      >
                        {idx + 1}
                      </span>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-medium text-brand-text">
                            {mod.title}
                          </span>
                          {isFreePreview && (
                            <span className="shrink-0 rounded bg-brand-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-accent">
                              Free Preview
                            </span>
                          )}
                        </div>
                        <span className="mt-0.5 block text-xs text-brand-muted">
                          {mod.duration}
                        </span>
                      </div>

                      {/* Icon */}
                      {locked ? (
                        <Lock className="h-4 w-4 shrink-0 text-brand-muted/50" />
                      ) : (
                        <Play className="h-4 w-4 shrink-0 text-brand-accent opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>

          {/* Desktop sidebar (sticky) — subscription card for scroll */}
          <aside className="hidden w-80 shrink-0 lg:block">
            <div className="sticky top-24">
              <SubscriptionCard
                ctaLabel={ctaLabel}
                ctaHref={ctaHref}
                hasAccess={hasAccess}
                loading={loading}
                moduleCount={course.moduleList.length}
                duration={course.duration}
                level={course.level}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* ============== MOBILE STICKY BAR ============== */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-brand-bg/95 backdrop-blur p-4 lg:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
          <div>
            <span className="text-sm font-medium text-brand-text">
              First month free!
            </span>
            <span className="ml-1.5 text-xs text-brand-muted">Then £5.99/mo</span>
          </div>

          {loading ? (
            <div className="h-11 w-36 animate-pulse rounded-lg bg-brand-card" />
          ) : (
            <Link href={ctaHref} className="btn-primary text-sm">
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>

      {/* Bottom spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </div>
  )
}

/* ================================================================== */
/* Subscription card component                                         */
/* ================================================================== */

interface SubscriptionCardProps {
  ctaLabel: string
  ctaHref: string
  hasAccess: boolean
  loading: boolean
  moduleCount: number
  duration: string
  level: string
}

function SubscriptionCard({
  ctaLabel,
  ctaHref,
  hasAccess,
  loading,
  moduleCount,
  duration,
  level,
}: SubscriptionCardProps) {
  return (
    <div className="card w-full overflow-hidden lg:w-80">
      <div className="p-6">
        <div className="mb-2">
          <span className="text-lg font-bold text-brand-accent">
            First month free!
          </span>
        </div>
        <div className="mb-6">
          <span className="text-3xl font-bold text-brand-text">£5.99</span>
          <span className="ml-2 text-sm text-brand-muted">/month after trial</span>
        </div>

        {loading ? (
          <div className="h-12 w-full animate-pulse rounded-lg bg-brand-bg" />
        ) : (
          <Link
            href={ctaHref}
            className="btn-primary w-full justify-center text-base"
          >
            {ctaLabel}
          </Link>
        )}

        <p className="mt-3 text-center text-xs text-brand-muted">
          Annual subscription also available — £79/year (save 34%)
        </p>
        {!hasAccess && (
          <p className="mt-1 text-center text-xs text-brand-muted">
            Cancel anytime. All courses included.
          </p>
        )}
      </div>

      <div className="border-t border-brand-border px-6 py-4">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">
          This course includes
        </h4>
        <ul className="space-y-2.5 text-sm text-brand-muted">
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-brand-accent" />
            {moduleCount} structured modules
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-brand-accent" />
            {duration} of content
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-brand-accent" />
            {level} level
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-brand-accent" />
            Quizzes & practice questions
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-brand-accent" />
            Certificate on completion
          </li>
        </ul>
      </div>
    </div>
  )
}
