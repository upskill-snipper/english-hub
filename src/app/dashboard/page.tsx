'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  TrendingUp,
  Flame,
  AlertCircle,
  BarChart3,
  Timer,
  School,
  UserPlus,
  Loader2,
  Gift,
  X,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useSearchParams } from 'next/navigation'
import { trackEvent } from '@/lib/gtag'
import { capture as phCapture, EVENTS as PH_EVENTS } from '@/lib/posthog'
import { useAuthStore } from '@/store/auth-store'
import { loadAllCourses } from '@/data/course-loader'
import { cn, formatDate } from '@/lib/utils'
import { percentageToGCSEGradeLabel } from '@/lib/grades'
import type { Enrolment, ModuleProgress, Certificate, CourseData } from '@/lib/types'
import { DobNudge } from '@/components/profile/DobNudge'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { LearningTip } from '@/components/ui/learning-tip'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'

// ── Helpers ────────────────────────────────────────────────────────────────

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

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

// courseMap is now built dynamically inside the component — see useMemo below

// ── Skeleton Components ────────────────────────────────────────────────────

function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <Skeleton className="h-3 w-20" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-14 mb-1" />
        <Skeleton className="h-3 w-16" />
      </CardContent>
    </Card>
  )
}

function CourseCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-5 w-48" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-3 w-32 mb-3" />
        <Skeleton className="h-1 w-full rounded-full mb-3" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-8 w-28 rounded-lg" />
      </CardFooter>
    </Card>
  )
}

function ActivitySkeleton() {
  return (
    <div className="flex items-center gap-3 py-3">
      <Skeleton className="h-9 w-9 rounded-lg shrink-0" />
      <div className="flex-1">
        <Skeleton className="h-4 w-40 mb-1.5" />
        <Skeleton className="h-3 w-28" />
      </div>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { user, profile, isLoading } = useAuthStore()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [allCourses, setAllCourses] = useState<CourseData[]>([])
  const [enrolments, setEnrolments] = useState<Enrolment[]>([])
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress[]>([])
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [recentActivity, setRecentActivity] = useState<ModuleProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [schoolInfo, setSchoolInfo] = useState<{ name: string; role: string } | null>(null)
  const [showWelcome, setShowWelcome] = useState(searchParams.get('welcome') === 'true')

  const courseMap = useMemo(
    () => new Map<string, CourseData>(allCourses.map((c) => [c.id, c])),
    [allCourses],
  )

  // Load course data dynamically
  useEffect(() => {
    loadAllCourses().then(setAllCourses)
  }, [])

  // Auth redirect guard
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login?redirect=' + encodeURIComponent(window.location.pathname))
    }
  }, [isLoading, user, router])

  // Track purchase conversion after Stripe checkout success
  useEffect(() => {
    if (searchParams.get('checkout') === 'success') {
      trackEvent('purchase', { currency: 'GBP' })
      // Funnel: subscription_paid_converted — Stripe redirected back after
      // the first successful payment. Consent-gated in src/lib/posthog.ts.
      phCapture(PH_EVENTS.SUBSCRIPTION_PAID_CONVERTED, { currency: 'GBP' })
    }
  }, [searchParams])

  useEffect(() => {
    if (!user) return

    const supabase = createClient()

    async function fetchDashboardData() {
      try {
        setError(null)
        const userId = user!.id

        const [enrolRes, progressRes, certRes, activityRes, schoolMemberRes] = await Promise.all([
          supabase.from('enrolments').select('*').eq('user_id', userId),
          supabase.from('module_progress').select('*').eq('user_id', userId),
          supabase.from('certificates').select('*').eq('user_id', userId),
          supabase
            .from('module_progress')
            .select('*')
            .eq('user_id', userId)
            .eq('completed', true)
            .order('completed_at', { ascending: false })
            .limit(5),
          supabase
            .from('school_members')
            .select('role, schools(name)')
            .eq('user_id', userId)
            .eq('invite_status', 'accepted')
            .single(),
        ])

        if (enrolRes.error) console.error('Failed to fetch enrolments:', enrolRes.error)
        if (progressRes.error) console.error('Failed to fetch module progress:', progressRes.error)
        if (certRes.error) console.error('Failed to fetch certificates:', certRes.error)
        if (activityRes.error) console.error('Failed to fetch recent activity:', activityRes.error)

        if (enrolRes.data) setEnrolments(enrolRes.data)
        if (progressRes.data) setModuleProgress(progressRes.data)
        if (certRes.data) setCertificates(certRes.data)
        if (activityRes.data) setRecentActivity(activityRes.data)

        if (schoolMemberRes.data) {
          const data = schoolMemberRes.data as unknown as {
            role: string
            schools: { name: string } | null
          }
          const schoolName = data.schools?.name ?? null
          if (schoolName) {
            setSchoolInfo({ name: schoolName, role: schoolMemberRes.data.role })
          }
        }
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err)
        setError('Something went wrong loading your dashboard. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [user])

  // ── Derived data ────────────────────────────────────────────────────────

  const completedModulesCount = useMemo(
    () => moduleProgress.filter((mp) => mp.completed).length,
    [moduleProgress],
  )

  const enrolledCourses = useMemo(() => {
    return enrolments
      .map((e) => {
        const course = courseMap.get(e.course_id)
        if (!course) return null

        const totalModules = course.moduleList.length
        const completedModules = moduleProgress.filter(
          (mp) => mp.course_id === e.course_id && mp.completed,
        ).length

        const completedModuleIds = new Set(
          moduleProgress
            .filter((mp) => mp.course_id === e.course_id && mp.completed)
            .map((mp) => mp.module_id),
        )

        const nextModule = course.moduleList.find((m) => !completedModuleIds.has(m.id))

        return {
          ...e,
          course,
          totalModules,
          completedModules,
          progress: totalModules > 0 ? (completedModules / totalModules) * 100 : 0,
          nextModule,
        }
      })
      .filter(Boolean) as Array<
      {
        course: CourseData
        totalModules: number
        completedModules: number
        progress: number
        nextModule: CourseData['moduleList'][number] | undefined
      } & Enrolment
    >
  }, [enrolments, moduleProgress])

  const firstName = profile?.full_name?.split(' ')[0] ?? 'Student'
  const greeting = getGreeting()

  const activeCourses = enrolledCourses.filter((ec) => ec.progress < 100)
  const completedCourses = enrolledCourses.filter((ec) => ec.progress >= 100)

  // ── Quick Actions ───────────────────────────────────────────────────────

  const quickActions = [
    {
      label: 'Your Hub',
      href: '/revision',
      icon: Layers,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      label: 'Browse Courses',
      href: '/courses',
      icon: BookOpen,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      label: 'Practice Questions',
      href: '/practice',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-500/10',
    },
    {
      label: 'Essay Feedback',
      href: '/dashboard/essay-feedback',
      icon: Sparkles,
      color: 'text-amber-600',
      bg: 'bg-amber-500/10',
    },
    {
      label: 'Mock Exams',
      href: '/dashboard/mock-exam',
      icon: Timer,
      color: 'text-red-600',
      bg: 'bg-red-500/10',
    },
    {
      label: 'Grade Dashboard',
      href: '/dashboard/grades',
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-500/10',
    },
    {
      label: 'Reading Assessment',
      href: '/assessment/reading',
      icon: BookOpen,
      color: 'text-teal-700',
      bg: 'bg-emerald-500/10',
    },
    {
      label: 'Analytics',
      href: '/dashboard/analytics',
      icon: BarChart3,
      color: 'text-cyan-600',
      bg: 'bg-cyan-500/10',
    },
    ...(schoolInfo
      ? [
          {
            label: 'School Dashboard',
            href: '/school',
            icon: School,
            color: 'text-indigo-600',
            bg: 'bg-indigo-500/10',
          },
        ]
      : [
          {
            label: 'Join School',
            href: '/school/join',
            icon: UserPlus,
            color: 'text-indigo-600',
            bg: 'bg-indigo-500/10',
          },
        ]),
  ]

  // ── Initials for Avatar ─────────────────────────────────────────────────

  const initials = (profile?.full_name ?? 'S')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // ── Auth guard renders ─────────────────────────────────────────────────

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect via useEffect
  }

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <DobNudge />
          {/* ── Greeting Header ─────────────────────────────────────────── */}
          <div className="mb-6 flex items-center gap-4 animate-fade-in">
            <Avatar size="lg">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                {greeting}, {firstName}
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  {new Date().toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                {schoolInfo && (
                  <Badge variant="secondary" className="gap-1">
                    <School className="h-3 w-3" />
                    {schoolInfo.name}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* ── Welcome Banner (new users) ────────────────────────────── */}
          {showWelcome && (
            <Alert className="mb-6 border-primary/30 bg-primary/5">
              <Gift className="h-4 w-4 text-primary" />
              <AlertTitle className="text-foreground">Welcome to English Hub!</AlertTitle>
              <AlertDescription className="text-muted-foreground">
                You have 3 free uses of every premium feature. Try AI marking, lesson plans, and
                more. When you&apos;re ready, start a 7-day free trial — card required, cancel
                before day 7.
              </AlertDescription>
              <button
                onClick={() => setShowWelcome(false)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Dismiss welcome banner"
              >
                <X className="h-4 w-4" />
              </button>
            </Alert>
          )}

          {/* ── Teacher Banner ────────────────────────────────────────── */}
          {profile?.role === 'teacher' && (
            <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <School className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Teacher Account</p>
                  <p className="text-sm text-muted-foreground">
                    Access your teaching tools, student analytics, and lesson resources.
                  </p>
                </div>
              </div>
              <Button size="sm" render={<Link href="/dashboard/teacher" />}>
                Open Teacher Hub
              </Button>
            </div>
          )}

          {/* ── Error Banner ─────────────────────────────────────────── */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription className="flex items-center justify-between">
                <span>{error}</span>
                <Button
                  variant="destructive"
                  size="sm"
                  className="ml-4 shrink-0"
                  onClick={() => {
                    setLoading(true)
                    setError(null)
                    window.location.reload()
                  }}
                >
                  Retry
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {/* ── Your Hub CTA ─────────────────────────────────────────── */}
          <Link
            href="/revision"
            className="group mb-6 flex items-center gap-4 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-card to-violet-500/[0.05] p-5 transition-all hover:border-primary/40 hover:shadow-card-hover"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-foreground">Your Hub</h2>
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  Revision · Toolkit · Analytics
                </Badge>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Your unified home for revision, study tools, progress tracking, and exam technique.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>

          {/* ── Stats Row ──────────────────────────────────────────────── */}
          <div className="mb-2 flex items-center gap-1.5">
            <h2 className="text-sm font-medium text-muted-foreground">Your Stats</h2>
            <LearningTip categories={['progress', 'motivation']} side="right" />
          </div>
          <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
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
                  icon={<BookOpen className="h-5 w-5" />}
                  iconBg="bg-primary/10"
                  iconColor="text-primary"
                  label="Enrolled"
                  value={enrolments.length}
                  sub={enrolments.length === 1 ? 'course' : 'courses'}
                  tooltip="Total number of courses you have enrolled in"
                />
                <StatCard
                  icon={<CheckCircle className="h-5 w-5" />}
                  iconBg="bg-blue-500/10"
                  iconColor="text-blue-600"
                  label="Completed"
                  value={completedModulesCount}
                  sub={completedModulesCount === 1 ? 'module' : 'modules'}
                  tooltip="Total modules you have completed across all courses"
                />
                <StatCard
                  icon={<Trophy className="h-5 w-5" />}
                  iconBg="bg-yellow-500/10"
                  iconColor="text-yellow-600"
                  label="Certificates"
                  value={certificates.length}
                  sub={certificates.length === 1 ? 'earned' : 'earned'}
                  tooltip="Certificates earned by passing final assessments"
                />
                <StatCard
                  icon={
                    profile?.subscription_status === 'pro' ? (
                      <Crown className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5" />
                    )
                  }
                  iconBg={profile?.subscription_status === 'pro' ? 'bg-yellow-500/10' : 'bg-muted'}
                  iconColor={
                    profile?.subscription_status === 'pro'
                      ? 'text-yellow-600'
                      : 'text-muted-foreground'
                  }
                  label="Plan"
                  value={<SubscriptionBadge status={profile?.subscription_status ?? 'free'} />}
                  sub="current plan"
                  tooltip="Your current subscription plan"
                />
              </>
            )}
          </div>

          {/* ── Quick Actions ──────────────────────────────────────────── */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-x-visible sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group flex items-center gap-2 shrink-0 rounded-lg bg-card border border-border px-3 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:shadow-card-hover"
              >
                <span
                  className={cn('flex h-6 w-6 items-center justify-center rounded-md', action.bg)}
                >
                  <action.icon className={cn('h-3.5 w-3.5', action.color)} />
                </span>
                {action.label}
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <Separator className="mb-6" />

          {/* ── Courses Tabs ───────────────────────────────────────────── */}
          <section className="mb-6">
            <Tabs defaultValue="continue">
              <div className="mb-3 flex items-center justify-between">
                <TabsList className="bg-transparent gap-1.5 p-0">
                  <TabsTrigger
                    value="continue"
                    className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
                  >
                    Continue Learning
                    {activeCourses.length > 0 && (
                      <Badge variant="secondary" className="ml-1.5">
                        {activeCourses.length}
                      </Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger
                    value="completed"
                    className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
                  >
                    Completed
                    {completedCourses.length > 0 && (
                      <Badge variant="secondary" className="ml-1.5">
                        {completedCourses.length}
                      </Badge>
                    )}
                  </TabsTrigger>
                </TabsList>
                {enrolledCourses.length > 0 && (
                  <Button variant="link" size="sm" render={<Link href="/courses" />}>
                    View all <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>

              <TabsContent value="continue">
                {loading ? (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <CourseCardSkeleton />
                    <CourseCardSkeleton />
                    <CourseCardSkeleton />
                  </div>
                ) : activeCourses.length === 0 ? (
                  <EmptyState
                    icon={<BookOpen className="h-10 w-10 text-muted-foreground" />}
                    title="No courses in progress"
                    description="Browse our catalogue to get started."
                    actionLabel="Browse Courses"
                    actionHref="/courses"
                  />
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {activeCourses.map((ec) => (
                      <CourseCard key={ec.id} ec={ec} />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="completed">
                {loading ? (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <CourseCardSkeleton />
                    <CourseCardSkeleton />
                  </div>
                ) : completedCourses.length === 0 ? (
                  <EmptyState
                    icon={<Trophy className="h-10 w-10 text-muted-foreground" />}
                    title="No completed courses yet"
                    description="Keep learning to complete your first course."
                    actionLabel="Browse Courses"
                    actionHref="/courses"
                  />
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {completedCourses.map((ec) => (
                      <CourseCard key={ec.id} ec={ec} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </section>

          <Separator className="mb-6" />

          {/* ── Two-column: Activity + Certificates ──────────────────────── */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-1.5">
                  <CardTitle>Recent Activity</CardTitle>
                  <LearningTip categories={['study', 'motivation']} side="right" />
                </div>
                <CardDescription>Your latest completed modules</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-0">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <ActivitySkeleton key={i} />
                    ))}
                  </div>
                ) : recentActivity.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <Clock className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    <p className="text-sm">
                      No activity yet. Start a course to track your progress.
                    </p>
                  </div>
                ) : (
                  <ScrollArea className="max-h-80">
                    <div className="space-y-0">
                      {recentActivity.map((activity, index) => {
                        const course = courseMap.get(activity.course_id)
                        const mod = course?.moduleList.find((m) => m.id === activity.module_id)
                        return (
                          <div key={activity.id}>
                            <div className="flex items-center gap-3 py-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <CheckCircle className="h-4 w-4 text-primary" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-foreground">
                                  {mod?.title ?? 'Unknown module'}
                                </p>
                                <p className="truncate text-xs text-muted-foreground">
                                  {course?.title ?? 'Unknown course'}
                                  {activity.completed_at && (
                                    <span className="ml-1.5 opacity-70">
                                      · {formatRelativeDate(activity.completed_at)}
                                    </span>
                                  )}
                                </p>
                              </div>
                              {activity.quiz_score !== null && (
                                <Badge variant="secondary" className="shrink-0">
                                  {percentageToGCSEGradeLabel(activity.quiz_score)}
                                </Badge>
                              )}
                            </div>
                            {index < recentActivity.length - 1 && <Separator />}
                          </div>
                        )
                      })}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-1.5">
                  <CardTitle>
                    {certificates.length > 0 ? 'Your Certificates' : 'Achievements'}
                  </CardTitle>
                  <LearningTip categories={['grade', 'motivation']} side="right" />
                </div>
                <CardDescription>
                  {certificates.length > 0
                    ? `${certificates.length} certificate${certificates.length !== 1 ? 's' : ''} earned`
                    : 'Complete courses to earn certificates'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-3">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-lg" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-36 mb-1.5" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : certificates.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <Award className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    <p className="text-sm">Complete a course to earn your first certificate.</p>
                  </div>
                ) : (
                  <ScrollArea className="max-h-80">
                    <div className="space-y-1">
                      {certificates.map((cert, index) => {
                        const course = courseMap.get(cert.course_id)
                        return (
                          <div key={cert.id}>
                            <div className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                                <Award className="h-5 w-5 text-yellow-600" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h2 className="truncate text-sm font-semibold text-foreground">
                                  {course?.title ?? 'Unknown course'}
                                </h2>
                                <div className="mt-1 flex flex-wrap items-center gap-2">
                                  <GradeBadge grade={cert.grade} />
                                  <span className="text-xs text-muted-foreground">
                                    {percentageToGCSEGradeLabel(cert.score)}
                                  </span>
                                  <span className="text-xs text-muted-foreground opacity-70">
                                    · {formatDate(cert.issued_at)}
                                  </span>
                                </div>
                                <Button
                                  variant="link"
                                  size="xs"
                                  className="mt-1 h-auto p-0"
                                  render={<Link href={cert.verification_url} />}
                                >
                                  View Certificate <ArrowRight className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            {index < certificates.length - 1 && <Separator />}
                          </div>
                        )
                      })}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

// ── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  icon,
  iconBg,
  iconColor,
  label,
  value,
  sub,
  tooltip,
}: {
  icon: React.ReactNode
  iconBg: string
  iconColor: string
  label: string
  value: React.ReactNode
  sub: string
  tooltip: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="text-left">
        <Card className="animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg', iconBg)}>
                <span className={iconColor}>{icon}</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {label}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight text-foreground">{value}</div>
            <p className="mt-0.5 text-sm text-muted-foreground">{sub}</p>
          </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  )
}

function SubscriptionBadge({ status }: { status: string }) {
  const variantMap: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    free: 'secondary',
    pro: 'default',
    cancelled: 'destructive',
    past_due: 'destructive',
    unpaid: 'destructive',
    incomplete: 'outline',
    paused: 'secondary',
  }

  const labels: Record<string, string> = {
    free: 'Free',
    pro: 'Premium',
    cancelled: 'Cancelled',
    past_due: 'Past Due',
    unpaid: 'Unpaid',
    incomplete: 'Incomplete',
    paused: 'Paused',
  }

  return (
    <Badge
      variant={variantMap[status] ?? 'secondary'}
      className={cn(status === 'pro' && 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30')}
    >
      {status === 'pro' && <Crown className="mr-1 h-3.5 w-3.5" />}
      {labels[status] ?? 'Free'}
    </Badge>
  )
}

function GradeBadge({ grade }: { grade: string }) {
  // Parse GCSE numeric grade from strings like "Grade 7" or "7"
  const num = parseInt(grade.replace('Grade ', ''), 10)

  const getVariant = (): 'default' | 'secondary' | 'outline' => {
    if (num >= 8) return 'default'
    if (num >= 6) return 'secondary'
    return 'outline'
  }

  const getColor = (): string => {
    if (num >= 8) return 'bg-yellow-500/15 text-yellow-600 border-yellow-500/30'
    if (num >= 6) return 'bg-blue-500/15 text-blue-600 border-blue-500/30'
    if (num >= 4) return 'bg-primary/15 text-primary border-primary/30'
    return 'bg-muted text-muted-foreground border-border'
  }

  return (
    <Badge variant={getVariant()} className={getColor()}>
      {grade}
    </Badge>
  )
}

function CourseCard({
  ec,
}: {
  ec: {
    id: string
    course_id: string
    course: CourseData
    totalModules: number
    completedModules: number
    progress: number
    nextModule: CourseData['moduleList'][number] | undefined
  }
}) {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: ec.course.color }}
          />
          <Badge variant="outline" className="text-xs uppercase">
            {ec.course.level}
          </Badge>
        </div>
        <CardTitle>{ec.course.title}</CardTitle>
        <CardDescription>
          {ec.completedModules} of {ec.totalModules} modules
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={ec.progress} className="mb-1" />
        <p className="text-xs text-muted-foreground text-right">{Math.round(ec.progress)}%</p>
      </CardContent>
      <CardFooter>
        {ec.nextModule ? (
          <Button size="sm" render={<Link href={`/learn/${ec.course_id}/${ec.nextModule.id}`} />}>
            <Play className="h-3.5 w-3.5" />
            Continue
          </Button>
        ) : (
          <Badge variant="secondary">
            <CheckCircle className="h-3.5 w-3.5 mr-1" />
            Completed
          </Badge>
        )}
      </CardFooter>
    </Card>
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
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-3">{icon}</div>
        <h2 className="mb-1 font-semibold text-foreground">{title}</h2>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Button render={<Link href={actionHref} />}>
          {actionLabel} <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
