'use client'

import Link from 'next/link'
import {
  Users,
  Clock,
  FileText,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Hammer,
  CalendarDays,
  Rocket,
  FolderOpen,
  CheckCircle,
  BarChart3,
  GraduationCap,
  ClipboardCheck,
  Target,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { percentageToGCSEGrade } from '@/lib/grades'
import {
  DEMO_TEACHER,
  TEACHER_DEMO_CLASSES,
  TEACHER_DEMO_LESSONS,
  TEACHER_DEMO_SUBMISSIONS,
  DEMO_STUDENTS,
  type DemoClass,
} from '@/data/demo-data'
import { useT } from '@/lib/i18n/use-t'
import {
  GlassPanel,
  PanelEyebrow,
  AnimatedNumber,
  RadialScore,
  RankBars,
} from '@/components/dataviz'

// ── Helpers ──────────────────────────────────────────────────────────────────

function scoreColor(score: number) {
  if (score >= 70) return 'text-green-600 dark:text-green-400'
  if (score >= 50) return 'text-clay-600 dark:text-clay-400'
  return 'text-red-600 dark:text-red-400'
}

function scoreBg(score: number) {
  if (score >= 70) return 'bg-green-500'
  if (score >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function ragBarSegments(cls: DemoClass) {
  const students = DEMO_STUDENTS.filter((s) => s.className === cls.name)
  const total = students.length || 1
  const green = students.filter((s) => s.status === 'on-track' || s.status === 'excelling').length
  const amber = students.filter((s) => s.status === 'needs-support').length
  const red = students.filter((s) => s.status === 'at-risk').length
  return { green: (green / total) * 100, amber: (amber / total) * 100, red: (red / total) * 100 }
}

function InitialsAvatar({ name, color = 'bg-muted' }: { name: string; color?: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
  return (
    <div
      className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-xs font-semibold text-foreground shrink-0`}
    >
      {initials}
    </div>
  )
}

// ── Computed data ────────────────────────────────────────────────────────────

const totalStudents = TEACHER_DEMO_CLASSES.reduce((sum, cls) => sum + cls.studentCount, 0)
const avgClassScore = Math.round(
  TEACHER_DEMO_CLASSES.reduce((sum, cls) => sum + cls.avgScore, 0) / TEACHER_DEMO_CLASSES.length,
)

// At-risk students across teacher's classes
const atRiskStudents = TEACHER_DEMO_CLASSES.flatMap((cls: DemoClass) => {
  const students = DEMO_STUDENTS.filter((s) => s.className === cls.name)
  return students
    .filter((s) => s.atRisk)
    .map((s) => ({ ...s, className: cls.name, classId: cls.id }))
})

// Marking queue from TEACHER_DEMO_SUBMISSIONS
const pendingMarking = TEACHER_DEMO_SUBMISSIONS.filter(
  (s) => s.status === 'submitted' || s.status === 'pending',
)
const markedCount = TEACHER_DEMO_SUBMISSIONS.filter((s) => s.status === 'graded').length
const totalSubmissions = TEACHER_DEMO_SUBMISSIONS.length

// Assignments due this week
const assignmentsDueThisWeek = [
  {
    id: 'a1',
    title: 'Macbeth Act 3 Essay',
    className: '10A English Literature',
    dueDate: 'Fri 4 Apr',
    submittedCount: 18,
    totalCount: 28,
  },
  {
    id: 'a2',
    title: 'Language P1 Q5 Practice',
    className: '10B English Language',
    dueDate: 'Thu 3 Apr',
    submittedCount: 26,
    totalCount: 30,
  },
  {
    id: 'a3',
    title: 'Inspector Calls Revision Pack',
    className: '11A English Literature',
    dueDate: 'Mon 7 Apr',
    submittedCount: 8,
    totalCount: 26,
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TeacherDemoDashboard() {
  const t = useT()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-clay-600 dark:text-clay-400">
            <span className="font-semibold">{t('teacher_page.demo.banner_eyebrow')}</span> --{' '}
            {t('teacher_page.demo.banner_body')}
          </p>
        </div>

        {/* ── Hero Section ──────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="mb-6">
            <h1 className="text-3xl font-light tracking-tight text-foreground">
              {t('teacher_page.demo.welcome_prefix')} {DEMO_TEACHER.name.split(' ')[0]}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {DEMO_TEACHER.department} {t('teacher_page.demo.department_suffix')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Classes Taught */}
            <GlassPanel accent="primary" className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-4 w-4 text-primary/70" />
                <PanelEyebrow>{t('teacher_page.demo.stat.classes')}</PanelEyebrow>
              </div>
              <AnimatedNumber
                value={TEACHER_DEMO_CLASSES.length}
                className="font-heading text-3xl font-bold text-foreground"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {t('teacher_page.demo.stat.classes_sub')}
              </p>
            </GlassPanel>

            {/* Total Students */}
            <GlassPanel accent="primary" className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-primary/70" />
                <PanelEyebrow>{t('teacher_page.demo.stat.students')}</PanelEyebrow>
              </div>
              <AnimatedNumber
                value={totalStudents}
                className="font-heading text-3xl font-bold text-foreground"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {atRiskStudents.length} {t('teacher_page.demo.stat.students_sub')}
              </p>
            </GlassPanel>

            {/* Average Class Score */}
            <GlassPanel accent="clay" className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4 text-clay-600/70 dark:text-clay-400/70" />
                <PanelEyebrow>{t('teacher_page.demo.stat.avg_score')}</PanelEyebrow>
              </div>
              <p className="font-heading text-3xl font-bold text-foreground">
                <AnimatedNumber value={avgClassScore} suffix="%" />{' '}
                <span className="text-lg text-muted-foreground">
                  ({t('teacher_page.demo.stat.grade_prefix')} {percentageToGCSEGrade(avgClassScore)}
                  )
                </span>
              </p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />{' '}
                {t('teacher_page.demo.stat.term_change')}
              </p>
            </GlassPanel>

            {/* Assignments Due */}
            <GlassPanel accent="ochre" className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <ClipboardCheck className="h-4 w-4 text-clay-600/70 dark:text-clay-400/70" />
                <PanelEyebrow>{t('teacher_page.demo.stat.due_soon')}</PanelEyebrow>
              </div>
              <AnimatedNumber
                value={assignmentsDueThisWeek.length}
                className="font-heading text-3xl font-bold text-foreground"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {pendingMarking.length} {t('teacher_page.demo.stat.awaiting_marking')}
              </p>
            </GlassPanel>
          </div>
        </section>

        {/* ── At-Risk Students Banner ────────────────────────────────── */}
        {atRiskStudents.length > 0 && (
          <section className="mb-10">
            <div className="rounded-xl border border-red-500/15 bg-gradient-to-r from-red-500/[0.07] via-amber-500/[0.04] to-transparent p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h2 className="text-base font-medium text-foreground">
                  {atRiskStudents.length} {t('teacher_page.demo.at_risk_heading_suffix')}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {atRiskStudents.slice(0, 6).map((student) => (
                  <Link
                    key={`${student.classId}-${student.id}`}
                    href={`/demo/teacher/students/${student.id}`}
                    className="group flex items-center gap-3 rounded-lg border border-border/60 bg-card p-3 transition-all hover:border-red-500/20 hover:bg-red-500/[0.03]"
                  >
                    <InitialsAvatar name={student.name} color="bg-red-500/15" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground truncate">{student.name}</p>
                      <p className="text-[11px] text-muted-foreground truncate">
                        {student.className}
                      </p>
                      <p className="text-[11px] text-red-600/70 dark:text-red-400/70 truncate mt-0.5">
                        {student.riskReason}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`text-sm font-semibold ${scoreColor(student.averageScore)}`}>
                        {student.averageScore}% (Grade {percentageToGCSEGrade(student.averageScore)}
                        )
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── My Classes ─────────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4">
            {t('teacher_page.demo.classes_heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEACHER_DEMO_CLASSES.map((cls: DemoClass) => {
              const rag = ragBarSegments(cls)
              const atRiskCount = DEMO_STUDENTS.filter(
                (s) => s.className === cls.name && s.atRisk,
              ).length
              return (
                <Link
                  key={cls.id}
                  href={`/demo/teacher/classes/${cls.id}`}
                  className="group rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border/60 hover:bg-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-medium text-foreground">{cls.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-[11px]">
                          {t('teacher_page.demo.year_prefix')} {cls.yearGroup}
                        </Badge>
                        <span className="text-[11px] text-muted-foreground">{cls.examBoard}</span>
                      </div>
                    </div>
                    {/* Progress ring for completion */}
                    <RadialScore value={cls.completionRate} size={56} />
                  </div>

                  {/* Average score as large number */}
                  <div className="mb-3">
                    <span className={`text-2xl font-bold ${scoreColor(cls.avgScore)}`}>
                      {cls.avgScore}%
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {t('teacher_page.demo.avg_score_label')} (
                      {t('teacher_page.demo.stat.grade_prefix')}{' '}
                      {percentageToGCSEGrade(cls.avgScore)})
                    </span>
                  </div>

                  {/* RAG indicator bar */}
                  <div className="h-1.5 rounded-full overflow-hidden flex mb-3">
                    <div
                      className="bg-green-500 transition-all"
                      style={{ width: `${rag.green}%` }}
                    />
                    <div
                      className="bg-amber-500 transition-all"
                      style={{ width: `${rag.amber}%` }}
                    />
                    <div className="bg-red-500 transition-all" style={{ width: `${rag.red}%` }} />
                  </div>

                  {/* Bottom stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> {cls.studentCount}{' '}
                      {t('teacher_page.demo.students_label')}
                    </span>
                    {atRiskCount > 0 && (
                      <span className="text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> {atRiskCount}{' '}
                        {t('teacher_page.demo.at_risk_short')}
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Today's Overview + Assignments Due (side by side) ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Today's Lessons - timeline style */}
          <section>
            <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              {t('teacher_page.demo.todays_lessons')}
            </h2>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] top-3 bottom-3 w-px bg-muted" />
                <div className="space-y-4">
                  {TEACHER_DEMO_LESSONS.map((lesson, idx) => (
                    <div key={lesson.id} className="flex items-start gap-4 relative">
                      {/* Timeline dot */}
                      <div
                        className={`w-[9px] h-[9px] rounded-full mt-1.5 shrink-0 relative z-10 ${idx === 0 ? 'bg-primary ring-2 ring-primary/20' : 'bg-foreground/20'}`}
                      />
                      <div className="flex-1 rounded-lg border border-border/60 bg-card p-3">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-foreground">{lesson.className}</p>
                          <span className="text-[11px] text-primary/70 flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {lesson.time}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{lesson.topic}</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{lesson.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Assignments Due */}
          <section>
            <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {t('teacher_page.demo.assignments_due')}
            </h2>
            <div className="rounded-xl border border-border/60 bg-card p-4 space-y-3">
              {assignmentsDueThisWeek.map((assignment) => {
                const pct = Math.round((assignment.submittedCount / assignment.totalCount) * 100)
                return (
                  <div
                    key={assignment.id}
                    className="rounded-lg border border-border/60 bg-card p-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-foreground">{assignment.title}</p>
                      <Badge
                        variant="outline"
                        className="text-[10px] border-primary/20 text-primary/70"
                      >
                        {assignment.dueDate}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{assignment.className}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-1.5 rounded-full transition-all ${scoreBg(pct)}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-muted-foreground whitespace-nowrap">
                        {assignment.submittedCount}/{assignment.totalCount}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        {/* ── Marking Queue ──────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-clay-600 dark:text-clay-400" />
            {t('teacher_page.demo.marking_queue')}
          </h2>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            {/* Progress summary */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">
                    {markedCount} {t('teacher_page.demo.marked_prefix')} / {totalSubmissions}{' '}
                    {t('teacher_page.demo.total_prefix')}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {Math.round((markedCount / totalSubmissions) * 100)}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-clay-500 to-clay-600 transition-all"
                    style={{ width: `${(markedCount / totalSubmissions) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Pending items list */}
            {pendingMarking.length > 0 ? (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">
                  {t('teacher_page.demo.needs_marking')}
                </p>
                {pendingMarking.map((item) => {
                  const student = DEMO_STUDENTS.find((s) => s.name === item.studentName)
                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 rounded-lg border border-clay-500/15 bg-clay-500/5 p-3"
                    >
                      <InitialsAvatar name={item.studentName} color="bg-clay-500/10" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">{item.assignment}</p>
                        <p className="text-[11px] text-muted-foreground">
                          {item.studentName} -- {t('teacher_page.demo.submitted_label')} {item.date}
                        </p>
                      </div>
                      {student && (
                        <Button
                          render={<Link href={`/demo/teacher/students/${student.id}`} />}
                          variant="ghost"
                          size="sm"
                          className="text-clay-600 dark:text-clay-400 hover:text-clay-600 dark:hover:text-clay-400 text-xs shrink-0"
                        >
                          {t('teacher_page.demo.view_btn')}
                        </Button>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  {t('teacher_page.demo.all_caught_up')}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── Class Performance ───────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            {t('teacher_page.demo.class_performance')}
          </h2>
          <GlassPanel accent="primary" className="p-5">
            <RankBars
              data={TEACHER_DEMO_CLASSES.map((cls: DemoClass) => ({
                name: cls.name,
                avgScore: cls.avgScore,
              }))}
              labelKey="name"
              valueKey="avgScore"
              height={Math.max(220, TEACHER_DEMO_CLASSES.length * 44)}
            />
            {/* Accessible / detail list equivalent */}
            <ul className="mt-4 space-y-2">
              {TEACHER_DEMO_CLASSES.map((cls: DemoClass) => {
                const atRiskCount = DEMO_STUDENTS.filter(
                  (s) => s.className === cls.name && s.atRisk,
                ).length
                return (
                  <li key={cls.id} className="flex items-center gap-4 text-sm">
                    <Link
                      href={`/demo/teacher/classes/${cls.id}`}
                      className="w-44 shrink-0 text-muted-foreground hover:text-primary transition-colors truncate"
                    >
                      {cls.name}
                    </Link>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {cls.avgScore}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {cls.studentCount} {t('teacher_page.demo.students_label')}
                    </span>
                    {atRiskCount > 0 && (
                      <span className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 shrink-0">
                        <AlertTriangle className="h-3 w-3" /> {atRiskCount}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </GlassPanel>
        </section>

        {/* ── Quick Actions ───────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4">
            {t('teacher_page.demo.quick_actions')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Hammer,
                label: t('teacher_page.demo.qa.lesson_builder_label'),
                desc: t('teacher_page.demo.qa.lesson_builder_desc'),
                href: '/demo/teacher/lessons',
                gradient: 'from-clay-500/10 to-clay-400/5',
                border: 'border-clay-500/15 hover:border-clay-500/20',
                iconColor: 'text-clay-600 dark:text-clay-400',
              },
              {
                icon: Users,
                label: t('teacher_page.demo.qa.my_students_label'),
                desc: t('teacher_page.demo.qa.my_students_desc'),
                href: '/demo/teacher/students',
                gradient: 'from-primary/10 to-primary/5',
                border: 'border-primary/15 hover:border-primary/20',
                iconColor: 'text-primary',
              },
              {
                icon: FolderOpen,
                label: t('teacher_page.demo.qa.resources_label'),
                desc: t('teacher_page.demo.qa.resources_desc'),
                href: '/demo/teacher/resources',
                gradient: 'from-amber-500/10 to-amber-500/5',
                border: 'border-amber-500/10 hover:border-amber-500/20',
                iconColor: 'text-clay-600 dark:text-clay-400',
              },
              {
                icon: BookOpen,
                label: t('teacher_page.demo.qa.markbook_label'),
                desc: t('teacher_page.demo.qa.markbook_desc'),
                href: '/demo/teacher/classes',
                gradient: 'from-primary/10 to-primary/5',
                border: 'border-blue-500/10 hover:border-primary/20',
                iconColor: 'text-primary',
              },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`flex flex-col items-center gap-2 rounded-xl border bg-gradient-to-b ${action.gradient} ${action.border} p-5 transition-all hover:scale-[1.02]`}
              >
                <action.icon className={`h-7 w-7 ${action.iconColor}`} />
                <span className="text-sm font-medium text-foreground">{action.label}</span>
                <span className="text-[11px] text-muted-foreground">{action.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center">
            <Rocket className="h-8 w-8 text-primary mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {t('teacher_page.demo.cta_title')}
            </h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
              {t('teacher_page.demo.cta_body')}
            </p>
            <Button
              render={<Link href="/auth/teacher-register" />}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t('teacher_page.demo.cta_btn')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
