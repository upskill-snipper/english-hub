'use client'

import Link from 'next/link'
import {
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TEACHER_DEMO_CLASSES, DEMO_TEACHER, DEMO_STUDENTS, type DemoClass } from '@/data/demo-data'
import { useT } from '@/lib/i18n/use-t'

function scoreColor(score: number) {
  if (score >= 70) return 'text-green-600 dark:text-green-400'
  if (score >= 50) return 'text-clay-600 dark:text-clay-400'
  return 'text-red-600 dark:text-red-400'
}

function progressBarColor(pct: number) {
  if (pct >= 70) return 'bg-green-500'
  if (pct >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function trendIcon(cls: (typeof TEACHER_DEMO_CLASSES)[number]) {
  // Derive trend from DEMO_STUDENTS matched by class name
  const students = DEMO_STUDENTS.filter((s) => s.className === cls.name)
  if (students.length === 0) return <Minus className="h-3.5 w-3.5 text-muted-foreground" />
  const avgScore = Math.round(
    students.reduce((sum, s) => sum + s.averageScore, 0) / students.length,
  )
  if (avgScore >= 70)
    return <TrendingUp className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
  if (avgScore < 50) return <TrendingDown className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" />
}

export default function TeacherClassesPage() {
  const t = useT()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-clay-600 dark:text-clay-400">
            <span className="font-semibold">{t('demo_teacher.classes.banner_eyebrow')}</span> --{' '}
            {t('demo_teacher.classes.banner_suffix')} {DEMO_TEACHER.name}
          </p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light tracking-tight text-foreground mb-1">
              {t('demo_teacher.classes.title')}
            </h1>
            <p className="text-sm text-muted-foreground">
              {TEACHER_DEMO_CLASSES.length} {t('demo_teacher.classes.subtitle_classes_suffix')} --{' '}
              {DEMO_TEACHER.department} {t('demo_teacher.classes.subtitle_dept_suffix')}
            </p>
          </div>
          <Button
            render={<Link href="/demo/teacher" />}
            variant="outline"
            size="sm"
            className="text-muted-foreground border-border/60 hover:border-border/60"
          >
            {t('demo_teacher.classes.back_btn')}
          </Button>
        </div>

        {/* Summary KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              {t('demo_teacher.classes.kpi.total_students')}
            </p>
            <p className="text-2xl font-light text-foreground">
              {TEACHER_DEMO_CLASSES.reduce((sum, c) => sum + c.studentCount, 0)}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              {t('demo_teacher.classes.kpi.avg_score')}
            </p>
            <p
              className={`text-2xl font-light ${scoreColor(Math.round(TEACHER_DEMO_CLASSES.reduce((sum, c) => sum + c.avgScore, 0) / TEACHER_DEMO_CLASSES.length))}`}
            >
              {Math.round(
                TEACHER_DEMO_CLASSES.reduce((sum, c) => sum + c.avgScore, 0) /
                  TEACHER_DEMO_CLASSES.length,
              )}
              %
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              {t('demo_teacher.classes.kpi.avg_completion')}
            </p>
            <p className="text-2xl font-light text-foreground">
              {Math.round(
                TEACHER_DEMO_CLASSES.reduce((sum, c) => sum + c.completionRate, 0) /
                  TEACHER_DEMO_CLASSES.length,
              )}
              %
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              {t('demo_teacher.classes.kpi.at_risk_students')}
            </p>
            <p
              className={`text-2xl font-light ${TEACHER_DEMO_CLASSES.reduce((sum, c) => sum + (c.atRiskCount ?? 0), 0) > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}
            >
              {TEACHER_DEMO_CLASSES.reduce((sum, c) => sum + (c.atRiskCount ?? 0), 0)}
            </p>
          </div>
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEACHER_DEMO_CLASSES.map((cls) => (
            <Link key={cls.id} href={`/demo/teacher/classes/${cls.id}`} className="block group">
              <Card className="bg-card border-border/60 hover:border-border/60 hover:bg-card transition-all duration-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium text-foreground group-hover:text-foreground transition-colors">
                      {cls.name}
                    </CardTitle>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-muted-foreground transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className="text-[10px] border-border/60 text-muted-foreground"
                    >
                      {t('demo_teacher.classes.year_prefix')} {cls.yearGroup}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[10px] border-border/60 text-muted-foreground"
                    >
                      {cls.examBoard}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                        {t('demo_teacher.classes.card.students')}
                      </p>
                      <p className="text-lg font-light text-muted-foreground flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-muted-foreground" />
                        {cls.studentCount}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                        {t('demo_teacher.classes.card.avg_score')}
                      </p>
                      <p className={`text-lg font-light ${scoreColor(cls.avgScore)}`}>
                        {cls.avgScore}%
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                        {t('demo_teacher.classes.card.trend')}
                      </p>
                      <div className="flex items-center gap-1 mt-1">{trendIcon(cls)}</div>
                    </div>
                  </div>

                  {/* Completion bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {t('demo_teacher.classes.card.completion')}
                      </p>
                      <span className="text-xs text-muted-foreground">{cls.completionRate}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-muted">
                      <div
                        className={`h-1.5 rounded-full ${progressBarColor(cls.completionRate)} transition-all`}
                        style={{ width: `${cls.completionRate}%` }}
                      />
                    </div>
                  </div>

                  {/* At-risk indicator */}
                  {(cls.atRiskCount ?? 0) > 0 && (
                    <div className="flex items-center gap-1.5 text-xs text-red-600/80 dark:text-red-400/80">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      {cls.atRiskCount}{' '}
                      {(cls.atRiskCount ?? 0) > 1
                        ? t('demo_teacher.classes.at_risk_plural')
                        : t('demo_teacher.classes.at_risk_single')}
                    </div>
                  )}
                  {(cls.atRiskCount ?? 0) === 0 && (
                    <div className="flex items-center gap-1.5 text-xs text-green-600/60 dark:text-green-400/60">
                      <BookOpen className="h-3.5 w-3.5" />
                      {t('demo_teacher.classes.all_on_track')}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {t('demo_teacher.classes.footer.demo_data')} -- {DEMO_TEACHER.name} --{' '}
          {TEACHER_DEMO_CLASSES.length} {t('demo_teacher.classes.footer.classes_suffix')}
        </p>
      </div>
    </div>
  )
}
