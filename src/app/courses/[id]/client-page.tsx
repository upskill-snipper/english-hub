'use client'

import { useEffect, useState, useMemo, memo } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Clock,
  GraduationCap,
  CheckCircle,
  ArrowLeft,
  Lock,
  Play,
  PenTool,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { PRICING } from '@/constants/pricing'
import { useAuthStore } from '@/store/auth-store'
import type { CourseData } from '@/data/courses'
import { LearningTip } from '@/components/ui/learning-tip'
import { Button } from '@/components/ui/button'

interface CourseDetailPageProps {
  course: CourseData
}

export default function CourseDetailPage({ course }: CourseDetailPageProps) {
  const { user, profile } = useAuthStore()

  const [isEnrolled, setIsEnrolled] = useState(false)
  const [loading, setLoading] = useState(true)

  const isPro = profile?.subscription_status === 'pro'

  /* ---- Check enrolment ---- */
  useEffect(() => {
    if (!user) {
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
          .eq('course_id', course.id)
          .maybeSingle()

        setIsEnrolled(!!data)
      } catch {
        // fail silently — user simply sees buy button
      } finally {
        setLoading(false)
      }
    }

    checkEnrolment()
  }, [user, course.id])

  const hasAccess = isEnrolled || isPro
  const firstModule = course.moduleList[0]
  const firstModuleHref = firstModule ? `/learn/${course.id}/${firstModule.id}` : `/courses`
  const ctaLabel = hasAccess ? 'Start Learning' : 'Try Free Preview'
  const ctaHref = firstModuleHref

  const totalQuizzes = useMemo(
    () =>
      course.moduleList.reduce(
        (sum, mod) => sum + (mod.quiz?.length ?? 0),
        0,
      ),
    [course.moduleList],
  )

  // Stable module numbering: map each module ID to its original 1-based
  // position so the displayed number never shifts when the list is
  // filtered, sorted, or a tab/section is selected.
  const moduleNumberMap = useMemo(() => {
    const map = new Map<string, number>()
    course.moduleList.forEach((mod, i) => map.set(mod.id, i + 1))
    return map
  }, [course.moduleList])

  return (
    <div className="min-h-screen bg-background">
      {/* ============== HEADER ============== */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
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
                <span className="inline-flex items-center rounded-md bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground border border-border">
                  {course.level}
                </span>
                {course.board && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-600">
                    {course.board}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {course.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">{course.subtitle}</p>

              {/* Stats row */}
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-primary" />
                  {course.moduleList.length} modules
                </span>
                {totalQuizzes > 0 && (
                  <span className="inline-flex items-center gap-1.5">
                    <PenTool className="h-4 w-4 text-primary" />
                    {totalQuizzes} quizzes
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  {course.level}
                </span>
              </div>

              {/* Free preview CTA - prominent for non-logged-in users */}
              {!hasAccess && !loading && (
                <div className="mt-6">
                  <Button
                    size="lg"
                    className="shadow-lg shadow-primary/20"
                    render={<Link href={ctaHref} />}
                  >
                    <Play className="h-4 w-4" />
                    Try Free Preview — No Sign-Up Needed
                  </Button>
                </div>
              )}
            </div>

            {/* Desktop sidebar subscription card removed — single CTA in sticky aside below */}
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
              <h2 className="mb-4 text-xl font-bold text-foreground">
                About This Course
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {course.description}
              </p>
            </div>

            {/* Module list */}
            <div className="card mt-6 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <h2 className="text-xl font-bold text-foreground">
                  What You&apos;ll Learn
                </h2>
                <LearningTip categories={['course', 'study']} side="right" />
              </div>

              <ol className="space-y-3">
                {course.moduleList.map((mod) => {
                  const stableNumber = moduleNumberMap.get(mod.id) ?? 1
                  const isFreePreview = stableNumber === 1
                  const locked = !hasAccess && !isFreePreview
                  const moduleHref = `/learn/${course.id}/${mod.id}`

                  const content = (
                    <>
                      {/* Number circle — uses stable original position, not filtered index */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${locked ? 'bg-muted text-muted-foreground' : ''}`}
                        style={locked ? undefined : {
                          backgroundColor: `${course.color}20`,
                          color: course.color,
                        }}
                      >
                        {stableNumber}
                      </span>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-medium text-foreground">
                            {mod.title}
                          </span>
                          {isFreePreview && (
                            <span className="shrink-0 rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-500 ring-1 ring-emerald-500/20">
                              Free Preview
                            </span>
                          )}
                        </div>
                        <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{mod.duration}</span>
                          {mod.quiz?.length > 0 && (
                            <span>{mod.quiz.length} {mod.quiz.length === 1 ? 'quiz' : 'quizzes'}</span>
                          )}
                        </div>
                      </div>

                      {/* Icon */}
                      {locked ? (
                        <Lock className="h-4 w-4 shrink-0 text-muted-foreground/70" />
                      ) : (
                        <Play className="h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </>
                  )

                  return (
                    <li key={mod.id}>
                      {locked ? (
                        <div
                          className="group flex items-center gap-4 rounded-lg border px-4 py-3.5 transition-colors duration-200 border-border bg-background/50"
                        >
                          {content}
                        </div>
                      ) : (
                        <Link
                          href={moduleHref}
                          className="group flex items-center gap-4 rounded-lg border px-4 py-3.5 transition-colors duration-200 border-border hover:border-primary/30 hover:bg-primary/5"
                        >
                          {content}
                        </Link>
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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur p-4 lg:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
          <div>
            {hasAccess ? (
              <span className="text-sm font-medium text-foreground">
                Ready to learn
              </span>
            ) : (
              <>
                <span className="text-sm font-medium text-foreground">
                  Try it free
                </span>
                <span className="ml-1.5 text-xs text-muted-foreground">No sign-up needed</span>
              </>
            )}
          </div>

          {loading ? (
            <div className="h-11 w-36 animate-pulse rounded-lg bg-card" />
          ) : (
            <Button
              size="lg"
              className="shadow-lg shadow-primary/20"
              render={<Link href={ctaHref} />}
            >
              <Play className="h-4 w-4" />
              {ctaLabel}
            </Button>
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
  billingHref?: string
}

const SubscriptionCard = memo(function SubscriptionCard({
  ctaLabel,
  ctaHref,
  hasAccess,
  loading,
  moduleCount,
  duration,
  level,
  billingHref,
}: SubscriptionCardProps) {
  return (
    <div className="card w-full overflow-hidden lg:w-80">
      <div className="p-6">
        {hasAccess ? (
          <>
            {loading ? (
              <div className="h-12 w-full animate-pulse rounded-lg bg-background" />
            ) : (
              <Button
                size="lg"
                className="w-full shadow-lg shadow-primary/20"
                render={<Link href={ctaHref} />}
              >
                <Play className="h-4 w-4" />
                {ctaLabel}
              </Button>
            )}
          </>
        ) : (
          <>
            {loading ? (
              <div className="h-12 w-full animate-pulse rounded-lg bg-background" />
            ) : (
              <Button
                size="lg"
                className="w-full shadow-lg shadow-primary/20"
                render={<Link href={ctaHref} />}
              >
                <Play className="h-4 w-4" />
                {ctaLabel}
              </Button>
            )}

            <div className="mt-4 rounded-lg border border-border/60 bg-background/50 p-3 text-center">
              <p className="text-xs text-muted-foreground">
                Want full access to all courses?
              </p>
              <Link
                href={billingHref ?? '/account/billing'}
                className="mt-1 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Subscribe — first month free
              </Link>
              <p className="mt-0.5 text-[10px] text-muted-foreground">
                {PRICING.CURRENCY}{PRICING.MONTHLY}/mo after trial · Cancel anytime
              </p>
            </div>
          </>
        )}
      </div>

      <div className="border-t border-border px-6 py-4">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          This course includes
        </h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-primary" />
            {moduleCount} structured modules
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-primary" />
            {duration} of content
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-primary" />
            {level} level
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-primary" />
            Quizzes & practice questions
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="h-4 w-4 text-primary" />
            Certificate on completion
          </li>
        </ul>
      </div>
    </div>
  )
})
