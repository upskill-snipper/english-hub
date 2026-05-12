'use client'

import Link from 'next/link'
import { percentageToGCSEGradeLabel, percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'

const MOCK_WEEKLY_SCORES = [
  { week: 'W1 (Feb)', score: 64 },
  { week: 'W2 (Feb)', score: 67 },
  { week: 'W3 (Feb)', score: 66 },
  { week: 'W4 (Mar)', score: 69 },
  { week: 'W5 (Mar)', score: 71 },
  { week: 'W6 (Mar)', score: 73 },
  { week: 'W7 (Mar)', score: 71 },
  { week: 'W8 (Mar)', score: 74 },
]

const MOCK_SKILL_BREAKDOWN = [
  { skillKey: 'teacher.analytics.skill.structure', score: 76, maxScore: 100 },
  { skillKey: 'teacher.analytics.skill.language', score: 68, maxScore: 100 },
  { skillKey: 'teacher.analytics.skill.grammar', score: 72, maxScore: 100 },
  { skillKey: 'teacher.analytics.skill.analysis', score: 65, maxScore: 100 },
  { skillKey: 'teacher.analytics.skill.creative', score: 70, maxScore: 100 },
  { skillKey: 'teacher.analytics.skill.exam', score: 61, maxScore: 100 },
]

interface StudentAtRisk {
  id: string
  name: string
  group: string
  averageScore: number
  recentTrend: 'declining' | 'stagnant'
  lastActive: string
  concernKey: string
}

const MOCK_STUDENTS_AT_RISK: StudentAtRisk[] = [
  {
    id: '4',
    name: 'James Walker',
    group: '10B English Lang',
    averageScore: 58,
    recentTrend: 'declining',
    lastActive: '2026-03-20',
    concernKey: 'teacher.analytics.concern.drop',
  },
  {
    id: '8',
    name: 'Daniel Kim',
    group: '10B English Lang',
    averageScore: 52,
    recentTrend: 'stagnant',
    lastActive: '2026-03-15',
    concernKey: 'teacher.analytics.concern.below',
  },
  {
    id: '6',
    name: 'Liam Roberts',
    group: '10A English Lit',
    averageScore: 61,
    recentTrend: 'declining',
    lastActive: '2026-03-18',
    concernKey: 'teacher.analytics.concern.missed',
  },
]

const maxScore = Math.max(...MOCK_WEEKLY_SCORES.map((w) => w.score), 100)

function barColor(score: number): string {
  if (score >= 75) return 'bg-green-500'
  if (score >= 65) return 'bg-amber-500'
  return 'bg-red-500'
}

export default function AnalyticsPageClient() {
  const t = useT()
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">{t('teacher.analytics.title')}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t('teacher.analytics.subtitle')}</p>
        </div>
        <button
          onClick={() => {
            if (typeof window !== 'undefined') alert(t('teacher.analytics.export_soon'))
          }}
          className="btn-outline gap-2 self-start"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {t('teacher.analytics.export')}
        </button>
      </div>
      <section aria-labelledby="scores-chart-heading">
        <h2 id="scores-chart-heading" className="text-lg font-semibold text-foreground mb-4">
          {t('teacher.analytics.scores_over_time')}
        </h2>
        <div className="card">
          <div className="flex items-end gap-2 sm:gap-4 h-48">
            {MOCK_WEEKLY_SCORES.map((w) => (
              <div key={w.week} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-semibold text-foreground">
                  G{percentageToGCSEGrade(w.score)}
                </span>
                <div
                  className={`w-full rounded-t-md ${barColor(w.score)} transition-all`}
                  style={{ height: `${(w.score / maxScore) * 100}%` }}
                />
                <span className="text-[10px] text-muted-foreground text-center leading-tight mt-1">
                  {w.week}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            {t('teacher.analytics.scores_caption')}
          </p>
        </div>
      </section>
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-lg font-semibold text-foreground mb-4">
          {t('teacher.analytics.skill_breakdown')}
        </h2>
        <div className="card space-y-4">
          {MOCK_SKILL_BREAKDOWN.map((skill) => (
            <div key={skill.skillKey}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-foreground">{t(skill.skillKey)}</span>
                <span
                  className={`text-sm font-bold ${gcseGradeColor(percentageToGCSEGrade(skill.score))}`}
                >
                  {percentageToGCSEGradeLabel(skill.score)}
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${barColor(skill.score)}`}
                  style={{ width: `${skill.score}%` }}
                />
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground pt-2">
            {t('teacher.analytics.skill_caption')}
          </p>
        </div>
      </section>
      <section aria-labelledby="at-risk-heading">
        <h2 id="at-risk-heading" className="text-lg font-semibold text-foreground mb-4">
          {t('teacher.analytics.at_risk_title')}
        </h2>
        {MOCK_STUDENTS_AT_RISK.length === 0 ? (
          <div className="card text-center py-8">
            <p className="text-muted-foreground">{t('teacher.analytics.all_ok')}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {MOCK_STUDENTS_AT_RISK.map((student) => (
              <div key={student.id} className="card border-l-4 border-l-warn">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground">{student.name}</p>
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-600">
                        {student.recentTrend === 'declining'
                          ? t('teacher.analytics.trend.declining')
                          : t('teacher.analytics.trend.stagnant')}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{student.group}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t(student.concernKey)}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-center">
                      <p
                        className={`text-lg font-bold ${gcseGradeColor(percentageToGCSEGrade(student.averageScore))}`}
                      >
                        {t('teacher.analytics.grade_prefix')}{' '}
                        {percentageToGCSEGrade(student.averageScore)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t('teacher.analytics.working_at')}
                      </p>
                    </div>
                    <Link
                      href="/dashboard/teacher/students"
                      className="btn-outline text-xs px-3 py-1.5"
                    >
                      {t('teacher.analytics.view_profile')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="text-lg font-semibold text-foreground mb-4">
          {t('teacher.analytics.summary')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card text-center">
            <p className="text-3xl font-bold text-primary">32</p>
            <p className="text-sm text-muted-foreground mt-1">
              {t('teacher.analytics.total_students')}
            </p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-green-500">+10%</p>
            <p className="text-sm text-muted-foreground mt-1">
              {t('teacher.analytics.score_improvement')}
            </p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-amber-500">3</p>
            <p className="text-sm text-muted-foreground mt-1">
              {t('teacher.analytics.need_support')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
