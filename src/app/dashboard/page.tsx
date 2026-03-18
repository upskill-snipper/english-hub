'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Award,
  Trophy,
  Crown,
  ArrowRight,
  Clock,
  Play,
  CheckCircle,
  Layers,
  FileText,
  Sparkles,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { allCourses } from '@/data/courses'
import type { Enrolment, ModuleProgress, Certificate, CourseData } from '@/lib/types'

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function formatRelativeDate(iso: string) {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60_000)
  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(iso)
}

const gradeBadgeColors: Record<string, string> = {
  Distinction: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Merit: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Pass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
}

const courseMap = new Map<string, CourseData>(
  allCourses.map((c) => [c.id, c])
)

// ─── Skeleton Components ────────────────────────────────────────────────────

function StatCardSkeleton() {
  return (
    <div className="rounded-xl border border-[#1a2840] bg-[#0f1828] p-5 animate-pulse">
      <div className="h-4 w-24 rounded bg-[#1a2840] mb-3" />
      <div className="h-8 w-16 rounded bg-[#1a2840] mb-2" />
      <div className="h-3 w-20 rounded bg-[#1a2840]" />
    </div>
  )
}

function CourseCardSkeleton() {
  return (
    <div className="rounded-xl border border-[#1a2840] bg-[#0f1828] p-5 animate-pulse">
      <div className="h-5 w-48 rounded bg-[#1a2840] mb-3" />
      <div className="h-3 w-full rounded bg-[#1a2840] mb-4" />
      <div className="h-2 w-full rounded-full bg-[#1a2840] mb-3" />
      <div className="h-9 w-28 rounded bg-[#1a2840]" />
    </div>
  )
}

function ActivitySkeleton() {
  return (
    <div className="flex items-center gap-3 py-3 animate-pulse">
      <div className="h-9 w-9 rounded-full bg-[#1a2840] shrink-0" />
      <div className="flex-1">
        <div className="h-4 w-48 rounded bg-[#1a2840] mb-2" />
        <div className="h-3 w-32 rounded bg-[#1a2840]" />
      </div>
    </div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { user, profile } = useAuthStore()
  const [enrolments, setEnrolments] = useState<Enrolment[]>([])
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress[]>([])
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [recentActivity, setRecentActivity] = useState<ModuleProgress[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const supabase = createClient()

    async function fetchDashboardData() {
      const userId = user!.id

      const [enrolRes, progressRes, certRes, activityRes] = await Promise.all([
        supabase
          .from('enrolments')
          .select('*')
          .eq('user_id', userId),
        supabase
          .from('module_progress')
          .select('*')
          .eq('user_id', userId),
        supabase
          .from('certificates')
          .select('*')
          .eq('user_id', userId),
        supabase
          .from('module_progress')
          .select('*')
          .eq('user_id', userId)
          .eq('completed', true)
          .order('completed_at', { ascending: false })
          .limit(5),
      ])

      if (enrolRes.data) setEnrolments(enrolRes.data)
      if (progressRes.data) setModuleProgress(progressRes.data)
      if (certRes.data) setCertificates(certRes.data)
      if (activityRes.data) setRecentActivity(activityRes.data)
      setLoading(false)
    }

    fetchDashboardData()
  }, [user])

  // ── Derived data ────────────────────────────────────────────────────────

  const completedModulesCount = useMemo(
    () => moduleProgress.filter((mp) => mp.completed).length,
    [moduleProgress]
  )

  const enrolledCourses = useMemo(() => {
    return enrolments.map((e) => {
      const course = courseMap.get(e.course_id)
      if (!course) return null

      const totalModules = course.moduleList.length
      const completedModules = moduleProgress.filter(
        (mp) => mp.course_id === e.course_id && mp.completed
      ).length

      const completedModuleIds = new Set(
        moduleProgress
          .filter((mp) => mp.course_id === e.course_id && mp.completed)
          .map((mp) => mp.module_id)
      )

      const nextModule = course.moduleList.find(
        (m) => !completedModuleIds.has(m.id)
      )

      return {
        ...e,
        course,
        totalModules,
        completedModules,
        progress: totalModules > 0 ? (completedModules / totalModules) * 100 : 0,
        nextModule,
      }
    }).filter(Boolean) as Array<{
      course: CourseData
      totalModules: number
      completedModules: number
      progress: number
      nextModule: CourseData['moduleList'][number] | undefined
    } & Enrolment>
  }, [enrolments, moduleProgress])

  // ── Today's date ────────────────────────────────────────────────────────

  const todayString = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const firstName = profile?.full_name?.split(' ')[0] ?? 'Student'

  // ── Quick Actions ───────────────────────────────────────────────────────

  const quickActions = [
    { label: 'Browse Courses', href: '/courses', icon: BookOpen, color: 'text-emerald-400' },
    { label: 'Practice Questions', href: '/practice', icon: FileText, color: 'text-blue-400' },
    { label: 'Revision Flashcards', href: '/revision', icon: Layers, color: 'text-purple-400' },
    { label: 'View Certificates', href: '/certificate', icon: Award, color: 'text-yellow-400' },
  ]

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#f1f5f9]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ── Welcome Header ─────────────────────────────────────────── */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Welcome back, {firstName}
          </h1>
          <p className="mt-1 text-[#94a3b8]">{todayString}</p>
        </div>

        {/* ── Stats Row ──────────────────────────────────────────────── */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {loading ? (
            <>
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
            </>
          ) : (
            <>
              <StatCard
                icon={<BookOpen className="h-5 w-5 text-emerald-400" />}
                label="Courses Enrolled"
                value={enrolments.length}
                sub={enrolments.length === 1 ? 'course' : 'courses'}
              />
              <StatCard
                icon={<CheckCircle className="h-5 w-5 text-blue-400" />}
                label="Modules Completed"
                value={completedModulesCount}
                sub={completedModulesCount === 1 ? 'module' : 'modules'}
              />
              <StatCard
                icon={<Trophy className="h-5 w-5 text-yellow-400" />}
                label="Certificates Earned"
                value={certificates.length}
                sub={certificates.length === 1 ? 'certificate' : 'certificates'}
              />
              <StatCard
                icon={
                  profile?.subscription_status === 'pro' ? (
                    <Crown className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Sparkles className="h-5 w-5 text-[#94a3b8]" />
                  )
                }
                label="Subscription"
                value={
                  <SubscriptionBadge status={profile?.subscription_status ?? 'free'} />
                }
                sub="current plan"
              />
            </>
          )}
        </div>

        {/* ── Continue Learning ───────────────────────────────────────── */}
        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold sm:text-xl">Continue Learning</h2>
            {enrolledCourses.length > 0 && (
              <Link
                href="/courses"
                className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CourseCardSkeleton />
              <CourseCardSkeleton />
              <CourseCardSkeleton />
            </div>
          ) : enrolledCourses.length === 0 ? (
            <EmptyState
              icon={<BookOpen className="h-10 w-10 text-[#94a3b8]" />}
              title="No courses yet"
              description="Browse our catalogue to get started."
              actionLabel="Browse Courses"
              actionHref="/courses"
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {enrolledCourses.map((ec) => (
                <div
                  key={ec.id}
                  className="group rounded-xl border border-[#1a2840] bg-[#0f1828] p-5 transition-colors hover:border-emerald-500/30"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: ec.course.color }}
                    />
                    <span className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
                      {ec.course.level}
                    </span>
                  </div>
                  <h3 className="mb-1 font-semibold leading-snug">
                    {ec.course.title}
                  </h3>
                  <p className="mb-3 text-sm text-[#94a3b8]">
                    {ec.completedModules} / {ec.totalModules} modules completed
                  </p>

                  {/* Progress bar */}
                  <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-[#1a2840]">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                      style={{ width: `${ec.progress}%` }}
                    />
                  </div>

                  {ec.nextModule ? (
                    <Link
                      href={`/courses/${ec.course_id}/modules/${ec.nextModule.id}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
                    >
                      <Play className="h-4 w-4" />
                      Continue
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-400">
                      <CheckCircle className="h-4 w-4" />
                      Completed
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── Two-column: Recent Activity + Quick Actions ─────────────── */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <section>
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">
              Recent Activity
            </h2>
            <div className="rounded-xl border border-[#1a2840] bg-[#0f1828] p-5">
              {loading ? (
                <div className="divide-y divide-[#1a2840]">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ActivitySkeleton key={i} />
                  ))}
                </div>
              ) : recentActivity.length === 0 ? (
                <div className="py-8 text-center text-[#94a3b8]">
                  <Clock className="mx-auto mb-2 h-8 w-8" />
                  <p className="text-sm">No activity yet. Start a course to track your progress.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#1a2840]">
                  {recentActivity.map((activity) => {
                    const course = courseMap.get(activity.course_id)
                    const mod = course?.moduleList.find(
                      (m) => m.id === activity.module_id
                    )
                    return (
                      <div
                        key={activity.id}
                        className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {mod?.title ?? 'Unknown module'}
                          </p>
                          <p className="truncate text-xs text-[#94a3b8]">
                            {course?.title ?? 'Unknown course'}
                            {activity.completed_at && (
                              <span className="ml-2">
                                {formatRelativeDate(activity.completed_at)}
                              </span>
                            )}
                          </p>
                        </div>
                        {activity.quiz_score !== null && (
                          <span className="shrink-0 rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
                            {activity.quiz_score}%
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-[#1a2840] bg-[#0f1828] p-5 text-center transition-colors hover:border-emerald-500/30"
                >
                  <action.icon className={`h-7 w-7 ${action.color}`} />
                  <span className="text-sm font-medium">{action.label}</span>
                  <ArrowRight className="h-4 w-4 text-[#94a3b8] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* ── Certificates ───────────────────────────────────────────── */}
        {!loading && certificates.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">
              Your Certificates
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert) => {
                const course = courseMap.get(cert.course_id)
                return (
                  <div
                    key={cert.id}
                    className="flex items-start gap-4 rounded-xl border border-[#1a2840] bg-[#0f1828] p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                      <Award className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-semibold">
                        {course?.title ?? 'Unknown course'}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${
                            gradeBadgeColors[cert.grade] ?? gradeBadgeColors.Pass
                          }`}
                        >
                          {cert.grade}
                        </span>
                        <span className="text-xs text-[#94a3b8]">
                          {cert.score}%
                        </span>
                        <span className="text-xs text-[#94a3b8]">
                          {formatDate(cert.issued_at)}
                        </span>
                      </div>
                      <Link
                        href={cert.verification_url}
                        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        View Certificate <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
  sub: string
}) {
  return (
    <div className="rounded-xl border border-[#1a2840] bg-[#0f1828] p-5">
      <div className="mb-2 flex items-center gap-2 text-[#94a3b8]">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <p className="mt-0.5 text-xs text-[#94a3b8]">{sub}</p>
    </div>
  )
}

function SubscriptionBadge({
  status,
}: {
  status: 'free' | 'pro' | 'cancelled'
}) {
  const styles: Record<string, string> = {
    free: 'bg-[#94a3b8]/10 text-[#94a3b8] border-[#94a3b8]/30',
    pro: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    cancelled: 'bg-red-500/10 text-red-400 border-red-500/30',
  }

  const labels: Record<string, string> = {
    free: 'Free',
    pro: 'Pro',
    cancelled: 'Cancelled',
  }

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-sm font-semibold ${
        styles[status] ?? styles.free
      }`}
    >
      {status === 'pro' && <Crown className="mr-1 h-3.5 w-3.5" />}
      {labels[status] ?? 'Free'}
    </span>
  )
}

function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  icon: React.ReactNode
  title: string
  description: string
  actionLabel: string
  actionHref: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#1a2840] bg-[#0f1828]/50 py-12 text-center">
      <div className="mb-3">{icon}</div>
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-[#94a3b8]">{description}</p>
      <Link
        href={actionHref}
        className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
      >
        {actionLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
