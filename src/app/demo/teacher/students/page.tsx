'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'
import { percentageToGCSEGrade, gcseGradeColor, predictedGradeColor } from '@/lib/grades'
import { DEMO_STUDENTS } from '@/data/demo-data'
import DemoBanner from '@/components/demo/DemoBanner'
import { useScrollRestore } from '@/hooks/useScrollRestore'
import { useT } from '@/lib/i18n/use-t'

// Mrs Mitchell teaches these three classes in the demo
const MITCHELL_CLASSES = [
  { id: 'mc-001', name: '10A English', yearGroup: 10 },
  { id: 'mc-002', name: '11B English', yearGroup: 11 },
  { id: 'mc-003', name: '13 A-Level Lang', yearGroup: 13 },
] as const

type MitchellClassId = (typeof MITCHELL_CLASSES)[number]['id']

// Map DEMO_STUDENTS onto Mrs Mitchell's classes for the teacher view
const MITCHELL_STUDENTS = [
  { ...DEMO_STUDENTS[0], className: '10A English', classId: 'mc-001', score: 74 },
  { ...DEMO_STUDENTS[1], className: '10A English', classId: 'mc-001', score: 39 },
  { ...DEMO_STUDENTS[4], className: '10A English', classId: 'mc-001', score: 68 },
  { ...DEMO_STUDENTS[6], className: '10A English', classId: 'mc-001', score: 31 },
  { ...DEMO_STUDENTS[12], className: '10A English', classId: 'mc-001', score: 66 },
  { ...DEMO_STUDENTS[2], className: '11B English', classId: 'mc-002', score: 88 },
  { ...DEMO_STUDENTS[8], className: '11B English', classId: 'mc-002', score: 91 },
  { ...DEMO_STUDENTS[13], className: '11B English', classId: 'mc-002', score: 42 },
  { ...DEMO_STUDENTS[5], className: '11B English', classId: 'mc-002', score: 82 },
  { ...DEMO_STUDENTS[10], className: '11B English', classId: 'mc-002', score: 79 },
  { ...DEMO_STUDENTS[9], className: '13 A-Level Lang', classId: 'mc-003', score: 28 },
  { ...DEMO_STUDENTS[3], className: '13 A-Level Lang', classId: 'mc-003', score: 35 },
  { ...DEMO_STUDENTS[7], className: '13 A-Level Lang', classId: 'mc-003', score: 63 },
  { ...DEMO_STUDENTS[11], className: '13 A-Level Lang', classId: 'mc-003', score: 59 },
  { ...DEMO_STUDENTS[14], className: '13 A-Level Lang', classId: 'mc-003', score: 72 },
]

function StatusBadge({ atRisk }: { atRisk: boolean }) {
  const t = useT()
  if (atRisk) {
    return (
      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/20">
        {t('demo_teacher.students.status.at_risk')}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide bg-primary/10 text-primary border border-primary/20">
      {t('demo_teacher.students.status.on_track')}
    </span>
  )
}

export default function TeacherStudentsPage() {
  const t = useT()
  useScrollRestore()
  const [classFilter, setClassFilter] = useState<MitchellClassId | 'all'>('all')

  const filtered =
    classFilter === 'all'
      ? MITCHELL_STUDENTS
      : MITCHELL_STUDENTS.filter((s) => s.classId === classFilter)

  // At-risk students first
  const sorted = [...filtered].sort((a, b) => {
    if (a.atRisk && !b.atRisk) return -1
    if (!a.atRisk && b.atRisk) return 1
    return a.name.localeCompare(b.name)
  })

  const atRiskCount = filtered.filter((s) => s.atRisk).length

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DemoBanner message={t('demo_teacher.students.banner')} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/demo/teacher"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-muted-foreground transition-colors mb-6"
        >
          <span className="text-base leading-none">&larr;</span>{' '}
          {t('demo_teacher.students.back_dashboard')}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Mrs Mitchell
          </p>
          <div className="flex items-baseline gap-3">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-foreground">
              {t('demo_teacher.students.title')}
            </h1>
            <span className="text-lg text-muted-foreground tabular-nums">{filtered.length}</span>
          </div>
          <p className="text-muted-foreground text-sm mt-1 max-w-lg">
            {t('demo_teacher.students.subtitle')}
          </p>
          {atRiskCount > 0 && (
            <p className="text-red-600/80 dark:text-red-400/80 text-sm mt-2">
              {atRiskCount}{' '}
              {atRiskCount > 1
                ? t('demo_teacher.students.at_risk_flagged_plural')
                : t('demo_teacher.students.at_risk_flagged_single')}
            </p>
          )}
        </div>

        {/* Class Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setClassFilter('all')}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors border ${
              classFilter === 'all'
                ? 'bg-primary/10 text-primary border-primary/30'
                : 'bg-card text-muted-foreground border-border/60 hover:bg-muted hover:text-foreground'
            }`}
          >
            {t('demo_teacher.students.filter.all_classes')} ({MITCHELL_STUDENTS.length})
          </button>
          {MITCHELL_CLASSES.map((cls) => {
            const count = MITCHELL_STUDENTS.filter((s) => s.classId === cls.id).length
            return (
              <button
                key={cls.id}
                onClick={() => setClassFilter(cls.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors border ${
                  classFilter === cls.id
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'bg-card text-muted-foreground border-border/60 hover:bg-muted hover:text-foreground'
                }`}
              >
                {cls.name} ({count})
              </button>
            )
          })}
        </div>

        {/* Class Report Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {MITCHELL_CLASSES.map((cls) => (
            <button
              key={cls.id}
              onClick={() => {
                const toast = document.getElementById('demo-toast')
                if (toast) {
                  toast.textContent = t('demo_teacher.students.report_toast')
                  toast.classList.remove('opacity-0', 'translate-y-2')
                  toast.classList.add('opacity-100', 'translate-y-0')
                  setTimeout(() => {
                    toast.classList.remove('opacity-100', 'translate-y-0')
                    toast.classList.add('opacity-0', 'translate-y-2')
                  }, 2500)
                }
              }}
              className="rounded-lg px-4 py-2 text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {t('demo_teacher.students.report_btn_prefix')} {cls.name}
            </button>
          ))}
        </div>

        {/* Grade Summary */}
        {filtered.length > 0 &&
          (() => {
            const avgWorking = Math.round(
              filtered.reduce((sum, s) => sum + s.workingAtGrade, 0) / filtered.length,
            )
            const avgPredicted = Math.round(
              filtered.reduce((sum, s) => sum + s.predictedGrade, 0) / filtered.length,
            )
            const gradeDist = [9, 8, 7, 6, 5, 4, 3, 2, 1]
              .map((g) => ({
                grade: g,
                count: filtered.filter((s) => s.workingAtGrade === g).length,
              }))
              .filter((g) => g.count > 0)

            return (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl border border-border/60 bg-card p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {t('demo_teacher.students.grade.avg_working')}
                  </p>
                  <p className={`text-2xl font-light tabular-nums ${gcseGradeColor(avgWorking)}`}>
                    {t('demo_teacher.students.grade_word')} {avgWorking}
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {t('demo_teacher.students.grade.avg_predicted')}
                  </p>
                  <p
                    className={`text-2xl font-light tabular-nums ${predictedGradeColor(avgPredicted, avgWorking)}`}
                  >
                    {t('demo_teacher.students.grade_word')} {avgPredicted}
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {t('demo_teacher.students.grade.distribution')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {gradeDist.map((g) => (
                      <span
                        key={g.grade}
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium border ${gcseGradeColor(g.grade)} border-border/60 bg-card`}
                      >
                        G{g.grade}: {g.count}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}

        {/* Student Table */}
        <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_110px_80px_80px_80px_90px_100px] gap-4 px-5 py-3 border-b border-border/60 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>{t('demo_teacher.students.col.name')}</span>
            <span>{t('demo_teacher.students.col.class')}</span>
            <span className="text-center">{t('demo_teacher.students.col.working_at')}</span>
            <span className="text-center">{t('demo_teacher.students.col.predicted')}</span>
            <span className="text-center">{t('demo_teacher.students.col.target')}</span>
            <span className="text-center">{t('demo_teacher.students.col.status')}</span>
            <span className="text-right">{t('demo_teacher.students.col.last_active')}</span>
          </div>

          {/* Student rows */}
          {sorted.map((student) => (
            <Link
              key={student.id}
              href={`/demo/teacher/students/${student.id}`}
              className={`group grid grid-cols-1 sm:grid-cols-[1fr_110px_80px_80px_80px_90px_100px] gap-1 sm:gap-4 px-5 py-4 border-b border-white/[0.03] hover:bg-card transition-colors cursor-pointer ${
                student.atRisk ? 'bg-red-500/[0.03]' : ''
              }`}
            >
              {/* Name */}
              <div className="flex items-center gap-3">
                <div
                  className={`h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-[11px] font-medium ${
                    student.atRisk
                      ? 'bg-red-500/15 text-red-600 dark:text-red-400'
                      : 'bg-gradient-to-br from-white/10 to-white/5 text-muted-foreground'
                  }`}
                >
                  {student.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm text-foreground group-hover:text-foreground transition-colors">
                    {student.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground sm:hidden">
                    {student.className} &middot; {t('demo_teacher.students.row.year_prefix')}{' '}
                    {student.yearGroup}
                  </p>
                </div>
              </div>

              {/* Class */}
              <div className="hidden sm:flex items-center">
                <p className="text-sm text-muted-foreground">{student.className}</p>
              </div>

              {/* Working At Grade */}
              <div className="hidden sm:flex items-center justify-center">
                <span
                  className={`text-sm tabular-nums font-medium ${gcseGradeColor(student.workingAtGrade)}`}
                >
                  {student.workingAtGrade}
                </span>
              </div>

              {/* Predicted Grade */}
              <div className="hidden sm:flex items-center justify-center">
                <span
                  className={`text-sm tabular-nums font-medium ${predictedGradeColor(student.predictedGrade, student.workingAtGrade)}`}
                >
                  {student.predictedGrade}
                </span>
              </div>

              {/* Target Grade */}
              <div className="hidden sm:flex items-center justify-center">
                <span className="text-sm tabular-nums font-medium text-primary">
                  {student.targetGrade}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center sm:justify-center">
                <StatusBadge atRisk={student.atRisk} />
              </div>

              {/* Last Active */}
              <div className="hidden sm:flex items-center justify-end">
                <span
                  className={`text-sm tabular-nums ${
                    student.lastActive.includes('week') || student.lastActive.includes('days')
                      ? 'text-red-600/70 dark:text-red-400/70'
                      : 'text-muted-foreground'
                  }`}
                >
                  {student.lastActive}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {t('demo_teacher.students.footer.demo_data')} &middot; {filtered.length}{' '}
          {t('demo_teacher.students.footer.students_suffix')} &middot; {MITCHELL_CLASSES.length}{' '}
          {t('demo_teacher.students.footer.classes_suffix')}
        </p>
      </div>

      {/* Toast */}
      <div
        id="demo-toast"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-muted backdrop-blur-md border border-border/60 text-foreground text-sm px-5 py-3 rounded-xl opacity-0 translate-y-2 transition-all duration-300 pointer-events-none z-50"
      />
    </div>
  )
}
