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
import { useT } from '@/lib/i18n/use-t'

// ── Helpers ────────────────────────────────────────────────────────────────

type Translator = (key: string) => string

function formatRelativeDate(iso: string, t: Translator) {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60_000)
  if (diffMins < 1) return t('dash.time.just_now')
  if (diffMins < 60) return `${diffMins}${t('dash.time.m_ago')}`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}${t('dash.time.h_ago')}`
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 7) return `${diffDays}${t('dash.time.d_ago')}`
  return formatDate(iso)
}

function getGreetingKey() {
  // Routes through the `your_hub.greeting.*` namespace. The fallback in
  // dictionary.ts ensures these still render in English even if the AR
  // entry is missing - see lookup() behaviour.
  const hour = new Date().getHours()
  if (hour < 12) return 'your_hub.greeting.morning'
  if (hour < 17) return 'your_hub.greeting.afternoon'
  return 'your_hub.greeting.evening'
}

// courseMap is now built dynamically inside the component - see useMemo below

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
  const t = useT()
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
      // Funnel: subscription_paid_converted - Stripe redirected back after
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
        setError(t('dash.error_loading'))
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

  const firstName = profile?.full_name?.split(' ')[0] ?? t('dash.student')
  const greeting = t(getGreetingKey())

  const activeCourses = enrolledCourses.filter((ec) => ec.progress < 100)
  const completedCourses = enrolledCourses.filter((ec) => ec.progress >= 100)

  // ── Quick Actions ───────────────────────────────────────────────────────

  const quickActions = [
    {
      label: t('your_hub.cta.title'),
      href: '/revision',
      icon: Layers,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      label: t('dash.qa.browse_courses'),
      href: '/courses',
      icon: BookOpen,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      label: t('dash.qa.practice_questions'),
      href: '/practice',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-500/10',
    },
    {
      label: t('dash.qa.essay_feedback'),
      href: '/dashboard/essay-feedback',
      icon: Sparkles,
      color: 'text-amber-600',
      bg: 'bg-amber-500/10',
    },
    {
      label: t('dash.qa.mock_exams'),
      href: '/dashboard/mock-exam',
      icon: Timer,
      color: 'text-red-600',
      bg: 'bg-red-500/10',
    },
    {
      label: t('dash.qa.grade_dashboard'),
      href: '/dashboard/grades',
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-500/10',
    },
    {
      label: t('dash.qa.reading_assessment'),
      href: '/assessment/reading',
      icon: BookOpen,
      color: 'text-teal-700',
      bg: 'bg-emerald-500/10',
    },
    {
      label: t('dash.qa.analytics'),
      href: '/dashboard/analytics',
      icon: BarChart3,
      color: 'text-cyan-600',
      bg: 'bg-cyan-500/10',
    },
    ...(schoolInfo
      ? [
          {
            label: t('dash.qa.school_dashboard'),
            href: '/school',
            icon: School,
            color: 'text-indigo-600',
            bg: 'bg-indigo-500/10',
          },
        ]
      : [
          {
            label: t('dash.qa.join_school'),
            href: '/join-school',
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
              <AlertTitle className="text-foreground">{t('dash.welcome.title')}</AlertTitle>
              <AlertDescription className="text-muted-foreground">
                {t('dash.welcome.body')}
              </AlertDescription>
              <button
                onClick={() => setShowWelcome(false)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t('dash.welcome.dismiss')}
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
                  <p className="font-medium text-foreground">{t('dash.teacher.account')}</p>
                  <p className="text-sm text-muted-foreground">{t('dash.teacher.blurb')}</p>
                </div>
              </div>
              <Button size="sm" render={<Link href="/dashboard/teacher" />}>
                {t('dash.teacher.open_hub')}
              </Button>
            </div>
          )}

          {/* ── Error Banner ─────────────────────────────────────────── */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{t('dash.error_title')}</AlertTitle>
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
                  {t('dash.retry')}
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
                <h2 className="font-semibold text-foreground">{t('your_hub.cta.title')}</h2>
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  {t('your_hub.cta.badge')}
                </Badge>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{t('your_hub.cta.blurb')}</p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>

          {/* ── Stats Row ──────────────────────────────────────────────── */}
          <div className="mb-2 flex items-center gap-1.5">
            <h2 className="text-sm font-medium text-muted-foreground">{t('dash.your_stats')}</h2>
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
                  label={t('dash.stat.enrolled')}
                  value={enrolments.length}
                  sub={enrolments.length === 1 ? t('dash.stat.course') : t('dash.stat.courses')}
                  tooltip={t('dash.stat.enrolled_tooltip')}
                />
                <StatCard
                  icon={<CheckCircle className="h-5 w-5" />}
                  iconBg="bg-blue-500/10"
                  iconColor="text-blue-600"
                  label={t('dash.stat.completed')}
                  value={completedModulesCount}
                  sub={completedModulesCount === 1 ? t('dash.stat.module') : t('dash.stat.modules')}
                  tooltip={t('dash.stat.completed_tooltip')}
                />
                <StatCard
                  icon={<Trophy className="h-5 w-5" />}
                  iconBg="bg-yellow-500/10"
                  iconColor="text-yellow-600"
                  label={t('dash.stat.certificates')}
                  value={certificates.length}
                  sub={t('dash.stat.earned')}
                  tooltip={t('dash.stat.certs_tooltip')}
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
                  label={t('dash.stat.plan')}
                  value={<SubscriptionBadge status={profile?.subscription_status ?? 'free'} />}
                  sub={t('dash.stat.current_plan')}
                  tooltip={t('dash.stat.plan_tooltip')}
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
                    {t('dash.continue_learning')}
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
                    {t('dash.completed')}
                    {completedCourses.length > 0 && (
                      <Badge variant="secondary" className="ml-1.5">
                        {completedCourses.length}
                      </Badge>
                    )}
                  </TabsTrigger>
                </TabsList>
                {enrolledCourses.length > 0 && (
                  <Button variant="link" size="sm" render={<Link href="/courses" />}>
                    {t('action.view_all')} <ArrowRight className="h-3.5 w-3.5" />
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
                    title={t('dash.empty.no_progress_title')}
                    description={t('dash.empty.no_progress_desc')}
                    actionLabel={t('dash.qa.browse_courses')}
                    actionHref="/courses"
                  />
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {activeCourses.map((ec) => (
                      <CourseCard key={ec.id} ec={ec} t={t} />
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
                    title={t('dash.empty.no_completed_title')}
                    description={t('dash.empty.no_completed_desc')}
                    actionLabel={t('dash.qa.browse_courses')}
                    actionHref="/courses"
                  />
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {completedCourses.map((ec) => (
                      <CourseCard key={ec.id} ec={ec} t={t} />
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
                  <CardTitle>{t('dash.recent_activity')}</CardTitle>
                  <LearningTip categories={['study', 'motivation']} side="right" />
                </div>
                <CardDescription>{t('dash.recent_activity_desc')}</CardDescription>
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
                    <p className="text-sm">{t('dash.no_activity')}</p>
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
                                  {mod?.title ?? t('dash.unknown_module')}
                                </p>
                                <p className="truncate text-xs text-muted-foreground">
                                  {course?.title ?? t('dash.unknown_course')}
                                  {activity.completed_at && (
                                    <span className="ml-1.5 opacity-70">
                                      · {formatRelativeDate(activity.completed_at, t)}
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
                    {certificates.length > 0 ? t('dash.your_certificates') : t('dash.achievements')}
                  </CardTitle>
                  <LearningTip categories={['grade', 'motivation']} side="right" />
                </div>
                <CardDescription>
                  {certificates.length > 0
                    ? `${certificates.length} ${certificates.length === 1 ? t('dash.cert_singular') : t('dash.cert_plural')} ${t('dash.stat.earned')}`
                    : t('dash.complete_to_earn')}
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
                    <p className="text-sm">{t('dash.complete_first_cert')}</p>
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
                                  {course?.title ?? t('dash.unknown_course')}
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
                                  {t('dash.view_certificate')} <ArrowRight className="h-3 w-3" />
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
  const t = useT()
  const variantMap: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    free: 'secondary',
    pro: 'default',
    cancelled: 'destructive',
    past_due: 'destructive',
    unpaid: 'destructive',
    incomplete: 'outline',
    paused: 'secondary',
  }

  const labelKeys: Record<string, string> = {
    free: 'sub.free',
    pro: 'sub.premium',
    cancelled: 'sub.cancelled',
    past_due: 'sub.past_due',
    unpaid: 'sub.unpaid',
    incomplete: 'sub.incomplete',
    paused: 'sub.paused',
  }

  return (
    <Badge
      variant={variantMap[status] ?? 'secondary'}
      className={cn(status === 'pro' && 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30')}
    >
      {status === 'pro' && <Crown className="mr-1 h-3.5 w-3.5" />}
      {t(labelKeys[status] ?? 'sub.free')}
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
  t,
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
  t: Translator
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
          {ec.completedModules} {t('dash.out_of')} {ec.totalModules} {t('dash.stat.modules')}
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
            {t('action.continue')}
          </Button>
        ) : (
          <Badge variant="secondary">
            <CheckCircle className="h-3.5 w-3.5 mr-1" />
            {t('dash.completed')}
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
