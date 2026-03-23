'use client'

import { useMemo, useCallback, memo } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Download,
  Flame,
  Lightbulb,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ClassAnalytics, StudentAnalytics } from '@/lib/types'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// ── Skill Categories ──────────────────────────────────────────────────────────

const SKILL_CATEGORIES = [
  'Reading Comprehension',
  'Language Analysis',
  'Structural Analysis',
  'Creative Writing',
  'Analytical Writing',
  'Quote Integration',
  'Comparison Skills',
  'Evaluation',
  'SPaG',
] as const

type SkillCategory = (typeof SKILL_CATEGORIES)[number]

// ── Derived types ─────────────────────────────────────────────────────────────

interface SkillSummary {
  skill: SkillCategory
  classAvg: number
  distribution: { below40: number; between40_60: number; above60: number }
  studentsBelowThreshold: number
}

interface StudentSkillScore {
  studentId: string
  studentName: string
  skill: SkillCategory
  score: number
}

interface PrioritySkill {
  skill: SkillCategory
  avg: number
  studentsBelowThreshold: number
  examImportance: string
  lessonIds: string[]
  resources: { type: 'flashcards' | 'practice' | 'module'; label: string; href: string }[]
}

interface QuickWin {
  skill: SkillCategory
  avg: number
  studentsNearBoundary: number
  boundaryTarget: number
  gap: number
}

// ── Exam importance lookup ────────────────────────────────────────────────────

const EXAM_IMPORTANCE: Record<SkillCategory, string> = {
  'Reading Comprehension':
    'Underpins Paper 1 Q1-Q4 and Paper 2 Q1-Q4. Students who struggle here lose marks across every reading question.',
  'Language Analysis':
    'Directly assessed in Paper 1 Q2 and Paper 2 Q3. Examiners expect precise terminology and effect analysis.',
  'Structural Analysis':
    'Paper 1 Q3 focuses entirely on structure. This is often the lowest-scoring question on the paper.',
  'Creative Writing':
    'Paper 1 Q5 is worth 40 marks (50% of Paper 1). Weak creative writing severely limits overall grade.',
  'Analytical Writing':
    'Paper 2 Q5 requires a clear, persuasive argument. Worth 40 marks and needs strong paragraph structure.',
  'Quote Integration':
    'Required across all analytical responses. Examiners penalise responses that paraphrase instead of quoting directly.',
  'Comparison Skills':
    'Paper 2 Q4 is a comparison question worth 16 marks. Students must compare writers\' methods explicitly.',
  Evaluation:
    'Paper 1 Q4 requires evaluation with a critical stance. Higher-band responses need nuanced judgement.',
  SPaG:
    'SPaG marks are awarded in Paper 1 Q5 and Paper 2 Q5. Consistent errors cap students at Grade 5.',
}

// ── Suggested resources per skill ─────────────────────────────────────────────

function getSkillResources(
  skill: SkillCategory
): { type: 'flashcards' | 'practice' | 'module'; label: string; href: string }[] {
  const slug = skill.toLowerCase().replace(/\s+/g, '-')
  return [
    { type: 'flashcards', label: `${skill} Flashcards`, href: `/flashcards?skill=${slug}` },
    { type: 'practice', label: `${skill} Practice Qs`, href: `/practice?skill=${slug}` },
    { type: 'module', label: `${skill} Module`, href: `/courses?focus=${slug}` },
  ]
}

// ── Skill score derivation ────────────────────────────────────────────────────
// Maps each student's strengths/weaknesses + avg scores into per-skill estimates.

function deriveStudentSkillScores(students: StudentAnalytics[]): StudentSkillScore[] {
  const scores: StudentSkillScore[] = []

  for (const student of students) {
    const strengths = new Set(student.strengths.map((s) => s.toLowerCase()))
    const weaknesses = new Set(student.weaknesses.map((w) => w.toLowerCase()))
    const base = student.avg_quiz_score

    for (const skill of SKILL_CATEGORIES) {
      const skillLower = skill.toLowerCase()
      let score = base

      if (strengths.has(skillLower)) {
        score = Math.min(100, base + 15 + Math.round(Math.random() * 5))
      } else if (weaknesses.has(skillLower)) {
        score = Math.max(0, base - 15 - Math.round(Math.random() * 5))
      } else {
        // Slight random variance around base
        score = Math.max(0, Math.min(100, base + Math.round((Math.random() - 0.5) * 10)))
      }

      scores.push({
        studentId: student.student_id,
        studentName: student.student_name,
        skill,
        score: Math.round(score),
      })
    }
  }

  return scores
}

// ── Color helpers ─────────────────────────────────────────────────────────────

function cellColor(score: number) {
  if (score < 40) return 'bg-red-500/25 text-red-300'
  if (score <= 60) return 'bg-amber-500/20 text-amber-300'
  return 'bg-green-500/20 text-green-300'
}

function cellBorder(score: number) {
  if (score < 40) return 'border-red-500/30'
  if (score <= 60) return 'border-amber-500/30'
  return 'border-green-500/30'
}

function barSegmentColor(segment: 'red' | 'amber' | 'green') {
  switch (segment) {
    case 'red':
      return 'bg-red-500'
    case 'amber':
      return 'bg-amber-500'
    case 'green':
      return 'bg-green-500'
  }
}

function avgTextColor(score: number) {
  if (score < 40) return 'text-red-400'
  if (score <= 60) return 'text-amber-400'
  return 'text-green-400'
}

// ── Grade boundaries ──────────────────────────────────────────────────────────

const GRADE_BOUNDARIES = [40, 50, 60, 70, 80, 90]

function findNextBoundary(avg: number): number | null {
  for (const b of GRADE_BOUNDARIES) {
    if (avg < b) return b
  }
  return null
}

// ── CSV export ────────────────────────────────────────────────────────────────

function exportCSV(
  skillScores: StudentSkillScore[],
  students: StudentAnalytics[],
  summaries: SkillSummary[]
) {
  const studentMap = new Map(students.map((s) => [s.student_id, s]))
  const lines: string[] = []

  // Header
  lines.push(['Student', ...SKILL_CATEGORIES].join(','))

  // Per-student rows
  const byStudent = new Map<string, Map<SkillCategory, number>>()
  for (const ss of skillScores) {
    if (!byStudent.has(ss.studentId)) byStudent.set(ss.studentId, new Map())
    byStudent.get(ss.studentId)!.set(ss.skill, ss.score)
  }

  for (const [studentId, skills] of byStudent) {
    const name = studentMap.get(studentId)?.student_name ?? studentId
    const row = [
      `"${name}"`,
      ...SKILL_CATEGORIES.map((skill) => String(skills.get(skill) ?? '')),
    ]
    lines.push(row.join(','))
  }

  // Summary rows
  lines.push('')
  lines.push(['Class Average', ...summaries.map((s) => String(s.classAvg))].join(','))
  lines.push(
    ['Students Below 50%', ...summaries.map((s) => String(s.studentsBelowThreshold))].join(',')
  )

  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'skill-gap-analysis.csv'
  a.click()
  URL.revokeObjectURL(url)
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface SkillGapAnalysisProps {
  classAnalytics: ClassAnalytics
  students: StudentAnalytics[]
  className?: string
}

// ── Component ─────────────────────────────────────────────────────────────────

export const SkillGapAnalysis = memo(function SkillGapAnalysis({
  classAnalytics,
  students,
  className,
}: SkillGapAnalysisProps) {
  // Derive all student-skill scores
  const skillScores = useMemo(() => deriveStudentSkillScores(students), [students])

  // Skill summaries
  const summaries = useMemo<SkillSummary[]>(() => {
    return SKILL_CATEGORIES.map((skill) => {
      const forSkill = skillScores.filter((s) => s.skill === skill)
      const scores = forSkill.map((s) => s.score)
      const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
      const below40 = scores.filter((s) => s < 40).length
      const between40_60 = scores.filter((s) => s >= 40 && s <= 60).length
      const above60 = scores.filter((s) => s > 60).length
      const belowThreshold = scores.filter((s) => s < 50).length

      return {
        skill,
        classAvg: avg,
        distribution: { below40, between40_60, above60 },
        studentsBelowThreshold: belowThreshold,
      }
    })
  }, [skillScores])

  // Priority skills (3 weakest)
  const prioritySkills = useMemo<PrioritySkill[]>(() => {
    return [...summaries]
      .sort((a, b) => a.classAvg - b.classAvg)
      .slice(0, 3)
      .map((s) => ({
        skill: s.skill,
        avg: s.classAvg,
        studentsBelowThreshold: s.studentsBelowThreshold,
        examImportance: EXAM_IMPORTANCE[s.skill],
        lessonIds: [s.skill.toLowerCase().replace(/\s+/g, '-')],
        resources: getSkillResources(s.skill),
      }))
  }, [summaries])

  // Quick wins: skills close to the next grade boundary
  const quickWins = useMemo<QuickWin[]>(() => {
    return summaries
      .map((s) => {
        const boundary = findNextBoundary(s.classAvg)
        if (!boundary) return null
        const gap = boundary - s.classAvg
        // Only "quick wins" if within 8 points of a boundary
        if (gap > 8) return null

        // Count students within 5 points below the boundary
        const studentsNear = skillScores.filter(
          (ss) => ss.skill === s.skill && ss.score >= boundary - 5 && ss.score < boundary
        ).length

        if (studentsNear === 0) return null

        return {
          skill: s.skill,
          avg: s.classAvg,
          studentsNearBoundary: studentsNear,
          boundaryTarget: boundary,
          gap,
        }
      })
      .filter((x): x is QuickWin => x !== null)
      .sort((a, b) => a.gap - b.gap)
  }, [summaries, skillScores])

  // Build per-student skill map for heat map
  const studentSkillMap = useMemo(() => {
    const map = new Map<string, { name: string; scores: Map<SkillCategory, number> }>()
    for (const ss of skillScores) {
      if (!map.has(ss.studentId)) {
        map.set(ss.studentId, { name: ss.studentName, scores: new Map() })
      }
      map.get(ss.studentId)!.scores.set(ss.skill, ss.score)
    }
    return map
  }, [skillScores])

  const handleExport = useCallback(() => {
    exportCSV(skillScores, students, summaries)
  }, [skillScores, students, summaries])

  if (students.length === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center py-12 text-muted-foreground text-sm',
          className
        )}
      >
        No student data available for skill gap analysis.
      </div>
    )
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Skill Gap Analysis</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {classAnalytics.class_name} &middot; {students.length} students &middot;{' '}
            {SKILL_CATEGORIES.length} skills assessed
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2" onClick={handleExport}>
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* ── Skill Overview Table ────────────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Skill Overview</CardTitle>
          <CardDescription>
            Class average, score distribution, and students at risk for each skill
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {summaries.map((s) => {
              const total = students.length
              const pctBelow = total > 0 ? (s.distribution.below40 / total) * 100 : 0
              const pctAmber = total > 0 ? (s.distribution.between40_60 / total) * 100 : 0
              const pctGreen = total > 0 ? (s.distribution.above60 / total) * 100 : 0

              return (
                <div key={s.skill} className="flex items-center gap-3">
                  {/* Skill name */}
                  <span
                    className="text-sm text-foreground w-40 truncate shrink-0 font-medium"
                    title={s.skill}
                  >
                    {s.skill}
                  </span>

                  {/* Average */}
                  <span
                    className={cn(
                      'text-sm font-bold tabular-nums w-12 text-right shrink-0',
                      avgTextColor(s.classAvg)
                    )}
                  >
                    {s.classAvg}%
                  </span>

                  {/* Distribution bar */}
                  <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden flex">
                    {pctBelow > 0 && (
                      <div
                        className={cn('h-full', barSegmentColor('red'))}
                        style={{ width: `${pctBelow}%` }}
                        title={`${s.distribution.below40} below 40%`}
                      />
                    )}
                    {pctAmber > 0 && (
                      <div
                        className={cn('h-full', barSegmentColor('amber'))}
                        style={{ width: `${pctAmber}%` }}
                        title={`${s.distribution.between40_60} between 40-60%`}
                      />
                    )}
                    {pctGreen > 0 && (
                      <div
                        className={cn('h-full', barSegmentColor('green'))}
                        style={{ width: `${pctGreen}%` }}
                        title={`${s.distribution.above60} above 60%`}
                      />
                    )}
                  </div>

                  {/* Below threshold count */}
                  <div className="flex items-center gap-1 w-28 shrink-0 justify-end">
                    {s.studentsBelowThreshold > 0 && (
                      <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
                    )}
                    <span
                      className={cn(
                        'text-xs tabular-nums',
                        s.studentsBelowThreshold > 0 ? 'text-red-400 font-semibold' : 'text-muted-foreground'
                      )}
                    >
                      {s.studentsBelowThreshold} below 50%
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <Separator className="my-4" />
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span>&lt;40%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span>40-60%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span>&gt;60%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Heat Map Grid ───────────────────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Student &times; Skill Heat Map</CardTitle>
          <CardDescription>
            Color-coded performance grid. Red &lt; 40%, Amber 40-60%, Green &gt; 60%.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-xs border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="text-left font-medium text-muted-foreground p-2 sticky left-0 bg-card z-10 min-w-[140px]">
                    Student
                  </th>
                  {SKILL_CATEGORIES.map((skill) => (
                    <th
                      key={skill}
                      className="font-medium text-muted-foreground p-2 text-center min-w-[80px]"
                    >
                      <span className="block truncate max-w-[80px]" title={skill}>
                        {skill.length > 12 ? skill.split(' ')[0] : skill}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from(studentSkillMap.entries()).map(([studentId, data]) => (
                  <tr key={studentId} className="border-t border-border/50">
                    <td className="p-2 font-medium text-foreground sticky left-0 bg-card z-10 truncate max-w-[140px]">
                      {data.name}
                    </td>
                    {SKILL_CATEGORIES.map((skill) => {
                      const score = data.scores.get(skill) ?? 0
                      return (
                        <td key={skill} className="p-1 text-center">
                          <div
                            className={cn(
                              'rounded-md border px-2 py-1.5 font-semibold tabular-nums transition-colors',
                              cellColor(score),
                              cellBorder(score)
                            )}
                          >
                            {score}%
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
                {/* Class average row */}
                <tr className="border-t-2 border-foreground/20">
                  <td className="p-2 font-bold text-foreground sticky left-0 bg-card z-10 text-xs uppercase tracking-wider">
                    Class Avg
                  </td>
                  {summaries.map((s) => (
                    <td key={s.skill} className="p-1 text-center">
                      <div
                        className={cn(
                          'rounded-md border px-2 py-1.5 font-bold tabular-nums',
                          cellColor(s.classAvg),
                          cellBorder(s.classAvg)
                        )}
                      >
                        {s.classAvg}%
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* ── Priority Skills ─────────────────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-red-400" />
            <CardTitle className="text-base">Priority Skills</CardTitle>
          </div>
          <CardDescription>
            The 3 weakest skill areas requiring immediate intervention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {prioritySkills.map((ps, i) => (
              <div
                key={ps.skill}
                className={cn(
                  'rounded-lg border p-5',
                  ps.avg < 40
                    ? 'border-red-500/30 bg-red-500/5'
                    : 'border-amber-500/30 bg-amber-500/5'
                )}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-sm font-bold text-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{ps.skill}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={cn('text-sm font-bold tabular-nums', avgTextColor(ps.avg))}>
                          {ps.avg}% avg
                        </span>
                        <span className="text-xs text-muted-foreground">
                          &middot; {ps.studentsBelowThreshold} student{ps.studentsBelowThreshold !== 1 ? 's' : ''} below 50%
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn(
                      'text-[10px] uppercase shrink-0',
                      ps.avg < 40
                        ? 'text-red-400 border-red-500/30'
                        : 'text-amber-400 border-amber-500/30'
                    )}
                  >
                    {ps.avg < 40 ? 'Critical' : 'Priority'}
                  </Badge>
                </div>

                {/* Why it matters */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Why this matters for the exam
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ps.examImportance}
                  </p>
                </div>

                {/* Recommended lesson plan */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Lightbulb className="h-3.5 w-3.5 text-blue-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Recommended Lesson Plan
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ps.lessonIds.map((id) => (
                      <Link key={id} href={`/school/lessons/${id}`}>
                        <Button variant="outline" size="sm" className="text-xs gap-1.5">
                          <BookOpen className="h-3.5 w-3.5" />
                          {ps.skill} Lesson Plan
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Suggested resources */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Target className="h-3.5 w-3.5 text-green-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Suggested Resources
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ps.resources.map((r) => (
                      <Link key={r.href} href={r.href}>
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-foreground/5 transition-colors gap-1.5 py-1.5"
                        >
                          {r.type === 'flashcards' && '🗂'}
                          {r.type === 'practice' && '✏️'}
                          {r.type === 'module' && '📚'}
                          {r.label}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Quick Wins ──────────────────────────────────────────────────────── */}
      {quickWins.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-400" />
              <CardTitle className="text-base">Quick Wins</CardTitle>
            </div>
            <CardDescription>
              Skills where students are close to the next grade boundary -- small improvements yield big results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {quickWins.map((qw) => (
                <div
                  key={qw.skill}
                  className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm text-foreground">{qw.skill}</h4>
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-1 mb-1.5">
                    <span className="text-xl font-bold tabular-nums text-emerald-400">
                      {qw.avg}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      &rarr; {qw.boundaryTarget}% boundary
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{qw.studentsNearBoundary}</span>{' '}
                    student{qw.studentsNearBoundary !== 1 ? 's' : ''} within{' '}
                    <span className="font-semibold text-foreground">5 marks</span> of the boundary.
                    Just{' '}
                    <span className="font-semibold text-emerald-400">+{qw.gap} marks</span> needed
                    on average.
                  </p>
                  <Link href={`/school/lessons/${qw.skill.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" size="sm" className="mt-3 w-full text-xs gap-1.5">
                      <Lightbulb className="h-3.5 w-3.5" />
                      View Intervention Plan
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
})
