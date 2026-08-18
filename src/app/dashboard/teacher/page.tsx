'use client'

/**
 * /dashboard/teacher - the individual teacher hub.
 *
 * 2026-08-18 REBUILD. The previous page was a fabricated demo dashboard:
 * MOCK_TEACHER, MOCK_CLASS_STATS, MOCK_RECENT_SUBMISSIONS and
 * MOCK_PROGRESS_GRID rendered invented pupils ("Emma Thompson · Grade 7"),
 * and every control - Create assignment, Add student, Bulk feedback,
 * Export - was a no-op. Since /auth/login routes every teacher-role user
 * here, teachers spent their whole session inside a demo with dead
 * buttons and no path to anything real.
 *
 * This page is now an honest bridge with only working destinations:
 *   - School members are pointed at the real school workspace (/school),
 *     which carries the marking queue, classes and analytics.
 *   - Teachers without a school get the two genuine next steps: join by
 *     school code, or talk to us about setting a school up.
 *   - The individually-usable tools (AI lesson planning, worksheet and
 *     test builders, essay marking, the teaching resource library) are
 *     linked directly - each one is wired to a real API or real content.
 */

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/auth-store'
import { useT } from '@/lib/i18n/use-t'
import {
  School,
  KeyRound,
  PenTool,
  Layers,
  ClipboardList,
  Library,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

type SchoolMembership = { role: string } | null | 'loading'

const TOOLS = [
  {
    href: '/toolkit/revision-builder',
    icon: Sparkles,
    titleKey: 'teacher.hub.tool.lesson_notes.title',
    descKey: 'teacher.hub.tool.lesson_notes.desc',
  },
  {
    href: '/toolkit/test-builder',
    icon: ClipboardList,
    titleKey: 'teacher.hub.tool.test_builder.title',
    descKey: 'teacher.hub.tool.test_builder.desc',
  },
  {
    href: '/marking/submit',
    icon: PenTool,
    titleKey: 'teacher.hub.tool.marking.title',
    descKey: 'teacher.hub.tool.marking.desc',
  },
  {
    href: '/dashboard/teacher/resources',
    icon: Library,
    titleKey: 'teacher.hub.tool.resources.title',
    descKey: 'teacher.hub.tool.resources.desc',
  },
  {
    href: '/revision/flashcards',
    icon: Layers,
    titleKey: 'teacher.hub.tool.flashcards.title',
    descKey: 'teacher.hub.tool.flashcards.desc',
  },
] as const

export default function TeacherHubPage() {
  const t = useT()
  const { user } = useAuthStore()
  const [membership, setMembership] = useState<SchoolMembership>('loading')

  useEffect(() => {
    let cancelled = false
    if (!user) {
      setMembership(null)
      return
    }
    async function check() {
      try {
        const { createClient } = await import('@/lib/supabase/client')
        const supabase = createClient()
        const { data } = await supabase
          .from('school_members')
          .select('role')
          .eq('user_id', user!.id)
          .eq('invite_status', 'accepted')
          .single()
        if (!cancelled) setMembership(data ?? null)
      } catch {
        if (!cancelled) setMembership(null)
      }
    }
    void check()
    return () => {
      cancelled = true
    }
  }, [user])

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {t('teacher.hub.title')}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{t('teacher.hub.subtitle')}</p>
      </div>

      {/* School connection state - the honest headline card. */}
      {membership === 'loading' ? (
        <Skeleton className="h-36 w-full rounded-xl" />
      ) : membership ? (
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <School className="h-5 w-5 text-primary" aria-hidden="true" />
              <CardTitle>{t('teacher.hub.school.connected_title')}</CardTitle>
            </div>
            <CardDescription>{t('teacher.hub.school.connected_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button render={<Link href="/school" />}>
              {t('teacher.hub.school.open_workspace')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" aria-hidden="true" />
              <CardTitle>{t('teacher.hub.school.none_title')}</CardTitle>
            </div>
            <CardDescription>{t('teacher.hub.school.none_desc')}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button render={<Link href="/join-school" />}>
              {t('teacher.hub.school.join_code')}
            </Button>
            <Button variant="outline" render={<Link href="/schools" />}>
              {t('teacher.hub.school.set_up')}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Working tools - every destination is a real, wired feature. */}
      <div>
        <h2 className="text-lg font-semibold text-foreground">{t('teacher.hub.tools_heading')}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40"
            >
              <tool.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="mt-3 font-medium text-foreground transition-colors group-hover:text-primary">
                {t(tool.titleKey)}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {t(tool.descKey)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
