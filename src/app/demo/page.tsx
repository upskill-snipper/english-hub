'use client'

import Link from 'next/link'
import {
  School,
  GraduationCap,
  Users,
  ArrowRight,
  CheckCircle2,
  Download,
  Sparkles,
} from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

type Accent = 'blue' | 'green' | 'purple'

interface DemoTile {
  readonly id: 'school' | 'teacher' | 'student'
  readonly titleKey: string
  readonly descKey: string
  readonly featureKeys: readonly string[]
  readonly ctaKey: string
  readonly icon: typeof School
  readonly accent: Accent
  readonly href: string
}

const DEMOS: readonly DemoTile[] = [
  {
    id: 'school',
    titleKey: 'demo.tile.school.title',
    descKey: 'demo.tile.school.desc',
    featureKeys: [
      'demo.tile.school.feat.dept_analytics',
      'demo.tile.school.feat.drilldown',
      'demo.tile.school.feat.reports',
      'demo.tile.school.feat.bulk',
    ],
    ctaKey: 'demo.tile.school.cta',
    icon: School,
    accent: 'blue',
    href: '/demo/school',
  },
  {
    id: 'teacher',
    titleKey: 'demo.tile.teacher.title',
    descKey: 'demo.tile.teacher.desc',
    featureKeys: [
      'demo.tile.teacher.feat.lesson_builder',
      'demo.tile.teacher.feat.ai_marking',
      'demo.tile.teacher.feat.class_analytics',
      'demo.tile.teacher.feat.progress',
    ],
    ctaKey: 'demo.tile.teacher.cta',
    icon: GraduationCap,
    accent: 'green',
    href: '/demo/teacher',
  },
  {
    id: 'student',
    titleKey: 'demo.tile.student.title',
    descKey: 'demo.tile.student.desc',
    featureKeys: [
      'demo.tile.student.feat.mocks',
      'demo.tile.student.feat.flashcards',
      'demo.tile.student.feat.ai_feedback',
      'demo.tile.student.feat.progress',
    ],
    ctaKey: 'demo.tile.student.cta',
    icon: Users,
    accent: 'purple',
    href: '/demo/student',
  },
] as const

const accentStyles = {
  blue: {
    border: 'border-primary/30',
    bg: 'bg-primary/10',
    text: 'text-primary',
    hoverBg: 'hover:bg-primary/20',
    badge: 'bg-primary/15 text-primary border-primary/30',
    glow: 'group-hover:shadow-primary/10',
    iconBg: 'bg-primary/15',
  },
  green: {
    border: 'border-primary/30',
    bg: 'bg-primary/10',
    text: 'text-primary',
    hoverBg: 'hover:bg-primary/10',
    badge: 'bg-primary/10 text-primary border-primary/30',
    glow: 'group-hover:shadow-primary/10',
    iconBg: 'bg-primary/10',
  },
  purple: {
    border: 'border-accent/30',
    bg: 'bg-accent/10',
    text: 'text-accent',
    hoverBg: 'hover:bg-accent/10',
    badge: 'bg-accent/10 text-accent border-accent/30',
    glow: 'group-hover:shadow-accent/10',
    iconBg: 'bg-accent/10',
  },
} as const

export default function DemoHub() {
  const t = useT()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
        <Badge variant="outline" className="mb-6 border-border text-muted-foreground">
          {t('demo.hero.no_signup')}
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          {t('demo.hero.title_prefix')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
            {t('demo.hero.title_emphasis')}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('demo.hero.sub')}
        </p>
      </section>

      {/* Demo cards */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {DEMOS.map((demo) => {
            const styles = accentStyles[demo.accent]
            const Icon = demo.icon

            return (
              <Card
                key={demo.href}
                className={`group relative bg-card border-border hover:border-border transition-all duration-300 hover:shadow-xl ${styles.glow}`}
              >
                <CardHeader>
                  <div
                    className={`mb-2 inline-flex size-12 items-center justify-center rounded-xl ${styles.iconBg}`}
                  >
                    <Icon className={`size-6 ${styles.text}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{t(demo.titleKey)}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {t(demo.descKey)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {demo.featureKeys.map((key) => (
                      <li
                        key={key}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className={`size-4 shrink-0 ${styles.text}`} />
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Screenshot placeholder */}
                <div className="mx-5 mb-4 rounded-lg border border-border bg-muted p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="size-2 rounded-full bg-border" />
                    <div className="size-2 rounded-full bg-border" />
                    <div className="size-2 rounded-full bg-border" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 rounded bg-border w-3/4" />
                    <div className="h-2 rounded bg-border w-1/2" />
                    <div className="h-2 rounded bg-border w-2/3" />
                  </div>
                </div>

                <CardFooter className="px-5 pb-5">
                  <Button
                    render={<Link href={demo.href} />}
                    size="lg"
                    className={`w-full ${styles.bg} ${styles.text} border ${styles.border} ${styles.hoverBg} bg-clip-padding`}
                  >
                    {t(demo.ctaKey)}
                    <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Free resources */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl border border-border bg-card p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Sparkles className="size-5 text-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                {t('demo.free_resources.eyebrow')}
              </span>
            </div>
            <p className="text-foreground text-lg font-medium mb-1">
              {t('demo.free_resources.title')}
            </p>
            <p className="text-muted-foreground text-sm">{t('demo.free_resources.desc')}</p>
          </div>
          <Button
            render={<Link href="/for-teachers/free-resources" />}
            variant="outline"
            size="lg"
            className="border-accent/30 text-accent hover:bg-accent/10 shrink-0"
          >
            <Download className="size-4 mr-1.5" />
            {t('demo.free_resources.cta')}
          </Button>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t('demo.bottom.title')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{t('demo.bottom.sub')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              render={<Link href="/for-schools/register" />}
              size="lg"
              className="w-full sm:w-auto"
            >
              {t('demo.bottom.cta_school')}
              <Badge
                variant="secondary"
                className="ml-2 bg-primary/10 text-primary text-[10px] border-0"
              >
                {t('demo.bottom.school_badge')}
              </Badge>
            </Button>
            <Button
              render={<Link href="/auth/teacher-register" />}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary/10"
            >
              {t('demo.bottom.cta_teacher')}
            </Button>
            <Button
              render={<Link href="/auth/register" />}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-accent/30 text-accent hover:bg-accent/10"
            >
              {t('demo.bottom.cta_student')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
