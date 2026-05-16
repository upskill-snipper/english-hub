'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Users,
  BookOpen,
  BarChart3,
  Plus,
  Download,
  AlertTriangle,
  TrendingUp,
  UserMinus,
  Search,
  Loader2,
  X,
  GraduationCap,
  Activity,
  ChevronRight,
} from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from '@/lib/grades'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  GlassPanel,
  PanelEyebrow,
  KpiTile,
  AnimatedNumber,
  RankBars,
  RadialScore,
  pct,
} from '@/components/dataviz'

// ── Types ─────────────────────────────────────────────────────────────────────

interface ClassDetail {
  id: string
  name: string
  year_group: string | null
  exam_board: string | null
  teacher_id: string | null
  teacher_name?: string | null
  student_count: number
  academic_year?: string | null
}

interface ClassStudent {
  student_id: string
  full_name: string | null
  email: string
  year_group: string | null
  last_activity: string | null
  avg_quiz_score: number | null
  modules_completed: number
  completion_rate: number
}

interface SchoolStudent {
  student_id: string
  full_name: string | null
  email: string
  year_group: string | null
}

// ── Mock data (shown while API loads or on error) ─────────────────────────────

const MOCK_CLASS: ClassDetail = {
  id: 'mock-1',
  name: 'Year 10 English — Set 1',
  year_group: 'Year 10',
  exam_board: 'AQA',
  teacher_id: null,
  teacher_name: 'Ms. Johnson',
  student_count: 4,
}

const MOCK_STUDENTS: ClassStudent[] = [
  {
    student_id: 's1',
    full_name: 'Alice Hartley',
    email: 'alice@school.ac.uk',
    year_group: 'Year 10',
    last_activity: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    avg_quiz_score: 78,
    modules_completed: 12,
    completion_rate: 80,
  },
  {
    student_id: 's2',
    full_name: 'Ben Okafor',
    email: 'ben@school.ac.uk',
    year_group: 'Year 10',
    last_activity: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    avg_quiz_score: 54,
    modules_completed: 8,
    completion_rate: 53,
  },
  {
    student_id: 's3',
    full_name: 'Clara Ng',
    email: 'clara@school.ac.uk',
    year_group: 'Year 10',
    last_activity: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
    avg_quiz_score: 35,
    modules_completed: 3,
    completion_rate: 20,
  },
  {
    student_id: 's4',
    full_name: 'Daniel Reeves',
    email: 'daniel@school.ac.uk',
    year_group: 'Year 10',
    last_activity: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    avg_quiz_score: 91,
    modules_completed: 15,
    completion_rate: 100,
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function boardBadgeClass(board: string | null): string {
  switch (board) {
    case 'AQA':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    case 'Edexcel':
    case 'Edexcel IGCSE':
    case 'Edexcel IAL':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    case 'OCR':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    case 'WJEC':
      return 'bg-red-500/10 text-red-400 border-red-500/20'
    case 'CAIE IGCSE':
      return 'bg-amber-500/10 text-clay-600 border-amber-500/20'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

function progressBarColor(pct: number): string {
  if (pct >= 70) return 'bg-green-500'
  if (pct >= 40) return 'bg-amber-500'
  return 'bg-red-500'
}

function scoreColor(score: number | null): string {
  if (score === null) return 'text-muted-foreground'
  if (score >= 70) return 'text-green-400'
  if (score >= 40) return 'text-clay-600'
  return 'text-red-400'
}

function formatLastActive(dateStr: string | null, t: (k: string) => string): string {
  if (!dateStr) return t('school.classes.detail.relative.never')
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return t('school.classes.detail.relative.today')
  if (days === 1) return t('school.classes.detail.relative.yesterday')
  if (days < 7) return `${days} ${t('school.classes.detail.relative.days_suffix')}`
  if (days < 30) return `${Math.floor(days / 7)}${t('school.classes.detail.relative.weeks_suffix')}`
  return `${Math.floor(days / 30)}${t('school.classes.detail.relative.months_suffix')}`
}

function isAtRisk(student: ClassStudent): boolean {
  const noRecentActivity =
    !student.last_activity || Date.now() - new Date(student.last_activity).getTime() > 7 * 86400000
  return (student.avg_quiz_score !== null && student.avg_quiz_score < 40) || noRecentActivity
}

// ── CSV Export ────────────────────────────────────────────────────────────────

function exportCsv(students: ClassStudent[], className: string) {
  const header = 'Name,Email,Year Group,Last Active,Progress %,Modules Completed'
  const rows = students.map((s) =>
    [
      s.full_name ?? '',
      s.email,
      s.year_group ?? '',
      s.last_activity ? new Date(s.last_activity).toLocaleDateString('en-GB') : '',
      s.avg_quiz_score ?? '',
      s.modules_completed,
    ]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(','),
  )
  const csv = [header, ...rows].join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${className.replace(/\s+/g, '_')}_students.csv`
  a.click()
  URL.revokeObjectURL(url)
}

// ── Add Students Modal ────────────────────────────────────────────────────────

interface AddStudentsModalProps {
  classId: string
  currentStudentIds: Set<string>
  t: (k: string) => string
  onClose: () => void
  onAdded: (ids: string[]) => void
}

function AddStudentsModal({
  classId,
  currentStudentIds,
  t,
  onClose,
  onAdded,
}: AddStudentsModalProps) {
  const [search, setSearch] = useState('')
  const [allStudents, setAllStudents] = useState<SchoolStudent[]>([])
  const [loadingStudents, setLoadingStudents] = useState(true)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/school/students')
        if (res.ok) {
          const data = await res.json()
          setAllStudents(data.students ?? [])
        }
      } catch {
        // fallback: empty list
      } finally {
        setLoadingStudents(false)
      }
    }
    load()
  }, [])

  const available = allStudents.filter(
    (s) =>
      !currentStudentIds.has(s.student_id) &&
      (s.full_name?.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase())),
  )

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  async function handleAdd() {
    if (selected.size === 0) return
    setAdding(true)
    const ids = Array.from(selected)
    const succeeded: string[] = []
    for (const studentId of ids) {
      const student = allStudents.find((s) => s.student_id === studentId)
      if (!student) continue
      try {
        const res = await fetch(`/api/school/classes/${classId}/students`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: student.email }),
        })
        if (res.ok) succeeded.push(studentId)
      } catch {
        // skip failed
      }
    }
    setAdding(false)
    if (succeeded.length > 0) {
      toast.success(
        `${t('school.classes.detail.add_modal.toast_added_prefix')} ${succeeded.length} ${succeeded.length > 1 ? t('school.classes.detail.add_modal.toast_added_plural') : t('school.classes.detail.add_modal.toast_added_singular')}`,
      )
      onAdded(succeeded)
    }
    if (succeeded.length < ids.length) {
      toast.error(
        `${ids.length - succeeded.length} ${t('school.classes.detail.add_modal.toast_failed_suffix')}`,
      )
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <GlassPanel
        accent="primary"
        className="w-full max-w-lg flex flex-col max-h-[80vh] shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <h2 className="text-base font-semibold text-foreground">
            {t('school.classes.detail.add_modal.title')}
          </h2>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="px-5 py-3 border-b border-border/60">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('school.classes.detail.add_modal.search_placeholder')}
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Student list */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-1">
          {loadingStudents && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          )}
          {!loadingStudents && available.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              {search
                ? t('school.classes.detail.add_modal.empty_search')
                : t('school.classes.detail.add_modal.empty_all')}
            </p>
          )}
          {!loadingStudents &&
            available.map((s) => (
              <button
                key={s.student_id}
                onClick={() => toggle(s.student_id)}
                className={cn(
                  'w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors',
                  selected.has(s.student_id)
                    ? 'bg-primary/10 border border-primary/30'
                    : 'hover:bg-muted/50 border border-transparent',
                )}
              >
                <div
                  className={cn(
                    'h-4 w-4 shrink-0 rounded border transition-colors',
                    selected.has(s.student_id)
                      ? 'bg-primary border-primary'
                      : 'border-muted-foreground/40',
                  )}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {s.full_name ?? t('school.classes.detail.unknown')}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">{s.email}</p>
                </div>
                {s.year_group && (
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    {s.year_group}
                  </Badge>
                )}
              </button>
            ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border/60 px-5 py-3">
          <span className="text-xs text-muted-foreground">
            {selected.size > 0
              ? `${selected.size} ${t('school.classes.detail.add_modal.footer_selected')}`
              : t('school.classes.detail.add_modal.footer_select')}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onClose}>
              {t('school.classes.action.cancel')}
            </Button>
            <Button size="sm" disabled={selected.size === 0 || adding} onClick={handleAdd}>
              {adding && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
              {t('school.classes.detail.add_modal.add_selected')}
            </Button>
          </div>
        </div>
      </GlassPanel>
    </div>
  )
}

// ── Analytics Tab ─────────────────────────────────────────────────────────────

interface AnalyticsTabProps {
  students: ClassStudent[]
  t: (k: string) => string
}

function AnalyticsTab({ students, t }: AnalyticsTabProps) {
  const scored = students.filter((s) => s.avg_quiz_score !== null)
  const avgScore =
    scored.length > 0
      ? Math.round(scored.reduce((sum, s) => sum + (s.avg_quiz_score ?? 0), 0) / scored.length)
      : null

  const completionRate =
    students.length > 0
      ? Math.round(students.reduce((sum, s) => sum + s.completion_rate, 0) / students.length)
      : 0

  const atRisk = students.filter(isAtRisk)
  const topPerformers = [...students]
    .filter((s) => s.avg_quiz_score !== null)
    .sort((a, b) => (b.avg_quiz_score ?? 0) - (a.avg_quiz_score ?? 0))
    .slice(0, 5)

  // Fabricate 4-week activity bars from last_activity data
  const now = Date.now()
  const weekLabels = [
    t('school.classes.detail.analytics.week.three_ago'),
    t('school.classes.detail.analytics.week.two_ago'),
    t('school.classes.detail.analytics.week.last'),
    t('school.classes.detail.analytics.week.this'),
  ]
  const weekCounts = weekLabels.map((_, i) => {
    const weekStart = now - (4 - i) * 7 * 86400000
    const weekEnd = now - (3 - i) * 7 * 86400000
    return students.filter((s) => {
      if (!s.last_activity) return false
      const t = new Date(s.last_activity).getTime()
      return t >= weekStart && t < weekEnd
    }).length
  })
  const maxCount = Math.max(...weekCounts, 1)

  // Distribution of students across attainment bands. Band labels are
  // GCSE grade strings from @/lib/grades (NOT i18n keys) — the same raw
  // grade labels the rest of this page renders (e.g. "Grade 7").
  const bands = [
    { repPct: 90, test: (v: number) => v >= 80 },
    { repPct: 65, test: (v: number) => v >= 60 && v < 80 },
    { repPct: 45, test: (v: number) => v >= 40 && v < 60 },
    { repPct: 20, test: (v: number) => v < 40 },
  ]
  const totalScored = scored.length || 1
  const bandData = bands.map((b) => {
    const count = scored.filter((s) => b.test(s.avg_quiz_score ?? 0)).length
    return {
      band: percentageToGCSEGradeLabel(b.repPct),
      value: Math.round((count / totalScored) * 100),
      count,
    }
  })

  return (
    <div className="space-y-6">
      {/* Class average + distribution */}
      <div className="grid gap-6 lg:grid-cols-3">
        <GlassPanel accent="teal" className="p-6 lg:col-span-1" aria-labelledby="cls-avg-h">
          <PanelEyebrow>{t('school.classes.detail.analytics.avg_score_title')}</PanelEyebrow>
          <h3 id="cls-avg-h" className="sr-only">
            {t('school.classes.detail.analytics.avg_score_title')}
          </h3>
          <div className="mt-4 flex flex-col items-center">
            {avgScore !== null ? (
              <RadialScore
                value={avgScore}
                label={t('school.classes.detail.analytics.avg_score_title')}
              />
            ) : (
              <p className="py-12 text-4xl font-bold text-muted-foreground">--</p>
            )}
            <p className="mt-3 text-center text-sm text-muted-foreground">
              {avgScore !== null && (
                <span className={cn('font-semibold', scoreColor(avgScore))}>
                  {percentageToGCSEGradeLabel(avgScore)}
                </span>
              )}{' '}
              · {scored.length}{' '}
              {scored.length === 1
                ? t('school.classes.detail.analytics.avg_score_sub_one')
                : t('school.classes.detail.analytics.avg_score_sub_many')}
            </p>
          </div>
        </GlassPanel>

        <GlassPanel accent="primary" className="p-6 lg:col-span-2" aria-labelledby="cls-dist-h">
          <PanelEyebrow>{t('school.classes.detail.analytics.avg_score_sub_many')}</PanelEyebrow>
          <h3 id="cls-dist-h" className="mt-1 text-heading-sm font-heading text-foreground">
            {t('school.classes.detail.analytics.avg_score_sub_many')}
          </h3>
          {scored.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted-foreground">
              {t('school.classes.detail.analytics.no_quiz_data')}
            </p>
          ) : (
            <>
              <div className="mt-4">
                <RankBars data={bandData} labelKey="band" valueKey="value" height={220} />
              </div>
              {/* Accessible text equivalent of the distribution chart */}
              <ul className="sr-only">
                {bandData.map((b) => (
                  <li key={b.band}>
                    {b.band}: {b.count} ({pct(b.value)})
                  </li>
                ))}
              </ul>
            </>
          )}
        </GlassPanel>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top performers */}
        <GlassPanel accent="sage" className="p-6" aria-labelledby="cls-top-h">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-400" aria-hidden />
            <PanelEyebrow>{t('school.classes.detail.analytics.top_performers')}</PanelEyebrow>
          </div>
          <h3 id="cls-top-h" className="sr-only">
            {t('school.classes.detail.analytics.top_performers')}
          </h3>
          <div className="mt-4">
            {topPerformers.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {t('school.classes.detail.analytics.no_quiz_data')}
              </p>
            ) : (
              <ol className="space-y-3">
                {topPerformers.map((s, i) => (
                  <li key={s.student_id} className="flex items-center gap-3">
                    <span
                      className={cn(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                        i === 0
                          ? 'bg-amber-500/20 text-clay-600'
                          : i === 1
                            ? 'bg-slate-500/20 text-slate-400'
                            : i === 2
                              ? 'bg-orange-500/20 text-clay-600'
                              : 'bg-muted text-muted-foreground',
                      )}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/school/students/${s.student_id}`}
                        className="truncate block text-sm font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
                      >
                        {s.full_name ?? s.email}
                      </Link>
                    </div>
                    <span
                      className={cn(
                        'text-sm font-semibold tabular-nums',
                        gcseGradeColor(percentageToGCSEGrade(s.avg_quiz_score ?? 0)),
                      )}
                    >
                      {percentageToGCSEGradeLabel(s.avg_quiz_score ?? 0)}
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </GlassPanel>

        {/* Activity chart */}
        <GlassPanel accent="ochre" className="p-6" aria-labelledby="cls-act-h">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" aria-hidden />
            <PanelEyebrow>{t('school.classes.detail.analytics.weekly_activity')}</PanelEyebrow>
          </div>
          <h3 id="cls-act-h" className="sr-only">
            {t('school.classes.detail.analytics.weekly_activity')}
          </h3>
          <div className="mt-4 flex h-32 items-end gap-3">
            {weekLabels.map((label, i) => (
              <div key={label} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-xs font-medium text-foreground tabular-nums">
                  {weekCounts[i]}
                </span>
                <div
                  className="w-full rounded-t bg-primary/70 transition-all duration-500"
                  style={{
                    height: `${Math.max(4, Math.round((weekCounts[i] / maxCount) * 96))}px`,
                  }}
                />
                <span className="text-[10px] text-muted-foreground text-center">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {t('school.classes.detail.analytics.weekly_activity_sub')}
          </p>
        </GlassPanel>
      </div>

      {/* At-risk students detail */}
      {atRisk.length > 0 && (
        <GlassPanel accent="clay" className="p-6" aria-labelledby="cls-risk-h">
          <div className="flex items-center gap-2 text-red-400">
            <AlertTriangle className="h-4 w-4" aria-hidden />
            <PanelEyebrow className="text-red-400">
              {t('school.classes.detail.analytics.attention')}
            </PanelEyebrow>
          </div>
          <h3 id="cls-risk-h" className="sr-only">
            {t('school.classes.detail.analytics.attention')}
          </h3>
          <div className="mt-4 divide-y divide-border/60">
            {atRisk.map((s) => {
              const noActivity =
                !s.last_activity || Date.now() - new Date(s.last_activity).getTime() > 7 * 86400000
              const lowScore = s.avg_quiz_score !== null && s.avg_quiz_score < 40
              return (
                <div key={s.student_id} className="flex items-center gap-3 py-2.5">
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/school/students/${s.student_id}`}
                      className="truncate block text-sm font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
                    >
                      {s.full_name ?? s.email}
                    </Link>
                    <div className="flex gap-2 mt-0.5">
                      {lowScore && (
                        <span className="text-xs text-red-400">
                          {percentageToGCSEGradeLabel(s.avg_quiz_score ?? 0)}
                        </span>
                      )}
                      {noActivity && (
                        <span className="text-xs text-clay-600">
                          {t('school.classes.detail.analytics.last_active_prefix')}{' '}
                          {formatLastActive(s.last_activity, t)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    {lowScore && (
                      <Badge
                        variant="outline"
                        className="border-red-500/30 text-red-400 text-[10px]"
                      >
                        {t('school.classes.detail.analytics.badge.low_score')}
                      </Badge>
                    )}
                    {noActivity && (
                      <Badge
                        variant="outline"
                        className="border-amber-500/30 text-clay-600 text-[10px]"
                      >
                        {t('school.classes.detail.analytics.badge.inactive')}
                      </Badge>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </GlassPanel>
      )}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ClassDetailPage() {
  const t = useT()
  const params = useParams()
  const classId = params.classId as string

  const [classInfo, setClassInfo] = useState<ClassDetail | null>(null)
  const [students, setStudents] = useState<ClassStudent[]>([])
  const [loading, setLoading] = useState(true)

  // Students tab state
  const [search, setSearch] = useState('')
  const [removingId, setRemovingId] = useState<string | null>(null)
  const [addModalOpen, setAddModalOpen] = useState(false)

  // ── Fetch ──────────────────────────────────────────────────────────────────

  const fetchData = useCallback(async () => {
    try {
      const [classRes, studentsRes] = await Promise.all([
        fetch(`/api/school/classes/${classId}`),
        fetch(`/api/school/classes/${classId}/students`),
      ])

      if (classRes.ok) {
        const data = await classRes.json()
        // GET /api/school/classes/[classId] returns { class, students, student_count }
        const cls: ClassDetail = data.class ?? data
        // Attach teacher_name from students response if not already present
        setClassInfo(cls)
        // If this endpoint also returns students, use them
        if (data.students) {
          setStudents(data.students)
        }
      } else {
        setClassInfo(MOCK_CLASS)
        setStudents(MOCK_STUDENTS)
      }

      if (studentsRes.ok) {
        const data = await studentsRes.json()
        if (data.students) setStudents(data.students)
      }
    } catch {
      setClassInfo(MOCK_CLASS)
      setStudents(MOCK_STUDENTS)
    } finally {
      setLoading(false)
    }
  }, [classId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // ── Remove student ─────────────────────────────────────────────────────────

  async function handleRemove(studentId: string) {
    setRemovingId(studentId)
    try {
      const res = await fetch(`/api/school/classes/${classId}/students`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_id: studentId }),
      })
      if (res.ok) {
        setStudents((prev) => prev.filter((s) => s.student_id !== studentId))
        setClassInfo((prev) =>
          prev ? { ...prev, student_count: Math.max(0, prev.student_count - 1) } : prev,
        )
        toast.success(t('school.classes.detail.toast.removed'))
      } else {
        toast.error(t('school.classes.detail.toast.remove_failed'))
      }
    } catch {
      toast.error(t('school.classes.detail.toast.remove_failed'))
    } finally {
      setRemovingId(null)
    }
  }

  // ── After adding students ──────────────────────────────────────────────────

  function handleStudentsAdded(addedIds: string[]) {
    setClassInfo((prev) =>
      prev ? { ...prev, student_count: prev.student_count + addedIds.length } : prev,
    )
    // Refresh student list from API
    fetch(`/api/school/classes/${classId}/students`)
      .then((r) => r.json())
      .then((data) => {
        if (data.students) setStudents(data.students)
      })
      .catch(() => {})
  }

  // ── Filtered students ──────────────────────────────────────────────────────

  const filteredStudents = students.filter(
    (s) =>
      !search ||
      (s.full_name ?? '').toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()),
  )

  const currentStudentIds = new Set(students.map((s) => s.student_id))

  // ── Loading skeleton ───────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
          <div className="h-6 w-24 rounded-md bg-muted animate-pulse" />
          <div className="h-40 rounded-2xl bg-muted animate-pulse" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 rounded-2xl bg-muted animate-pulse" />
            ))}
          </div>
          <div className="h-64 rounded-2xl bg-muted animate-pulse" />
        </div>
      </div>
    )
  }

  const cls = classInfo ?? MOCK_CLASS
  const displayStudents = students.length > 0 ? students : MOCK_STUDENTS

  // ── Derived class KPIs (only render deltas/sparks the data supports) ────────

  const scoredAll = displayStudents.filter((s) => s.avg_quiz_score !== null)
  const avgAttainment =
    scoredAll.length > 0
      ? Math.round(
          scoredAll.reduce((sum, s) => sum + (s.avg_quiz_score ?? 0), 0) / scoredAll.length,
        )
      : 0
  const avgCompletion =
    displayStudents.length > 0
      ? Math.round(
          displayStudents.reduce((sum, s) => sum + s.completion_rate, 0) / displayStudents.length,
        )
      : 0
  const atRiskCount = displayStudents.filter(isAtRisk).length
  const modulesTotal = displayStudents.reduce((sum, s) => sum + s.modules_completed, 0)

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        {/* Back button */}
        <Link href="/school/classes">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground hover:text-foreground -ml-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('school.classes.detail.back')}
          </Button>
        </Link>

        {/* ── Cinematic class header ── */}
        <GlassPanel accent="primary" className="p-6 sm:p-8" aria-labelledby="class-hero-heading">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-500/5 blur-3xl"
          />
          <div className="relative">
            <PanelEyebrow>{t('school.classes.detail.tab.students')}</PanelEyebrow>
            <div className="mt-2 flex flex-wrap items-start gap-3">
              <h1
                id="class-hero-heading"
                className="text-display-sm font-heading text-foreground sm:text-display"
              >
                {cls.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {cls.year_group && (
                  <Badge variant="secondary" className="text-xs">
                    {cls.year_group}
                  </Badge>
                )}
                {cls.exam_board && (
                  <Badge
                    variant="outline"
                    className={cn('text-xs uppercase', boardBadgeClass(cls.exam_board))}
                  >
                    {cls.exam_board}
                  </Badge>
                )}
              </div>
            </div>

            {/* Meta row */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {cls.teacher_name && (
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 shrink-0" aria-hidden />
                  {cls.teacher_name}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 shrink-0" aria-hidden />
                <span className="font-medium text-foreground">{cls.student_count}</span>
                &nbsp;{t('school.classes.detail.students_suffix')}
              </span>
              {avgAttainment > 0 && (
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-medium text-foreground">
                    {percentageToGCSEGradeLabel(avgAttainment)}
                  </span>
                  &nbsp;{t('school.classes.detail.analytics.avg_score_title')}
                </span>
              )}
            </div>
          </div>
        </GlassPanel>

        {/* ── Class KPI row ── */}
        <section aria-labelledby="class-kpi-heading">
          <h2 id="class-kpi-heading" className="sr-only">
            {t('school.classes.detail.tab.analytics')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <KpiTile
              label={t('school.classes.detail.analytics.avg_score_title')}
              value={avgAttainment}
              suffix="%"
              icon={GraduationCap}
              accent="teal"
            />
            <KpiTile
              label={t('school.classes.detail.analytics.completion_title')}
              value={avgCompletion}
              suffix="%"
              icon={Activity}
              accent="sage"
            />
            <KpiTile
              label={t('school.classes.detail.analytics.at_risk_title')}
              value={atRiskCount}
              icon={AlertTriangle}
              accent="clay"
            />
            <KpiTile
              label={t('school.classes.detail.col.done')}
              value={modulesTotal}
              icon={BookOpen}
              accent="ochre"
            />
          </div>
        </section>

        {/* Assign Work section */}
        <GlassPanel accent="sage" className="p-6" aria-labelledby="assign-work-heading">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" aria-hidden />
            <PanelEyebrow>{t('school.classes.detail.assign_work')}</PanelEyebrow>
          </div>
          <h2 id="assign-work-heading" className="sr-only">
            {t('school.classes.detail.assign_work')}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.info(t('school.classes.detail.coming_soon_homework'))}
            >
              {t('school.classes.detail.set_homework')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.info(t('school.classes.detail.coming_soon_assignment'))}
            >
              {t('school.classes.detail.create_assignment')}
            </Button>
          </div>
        </GlassPanel>

        {/* Tabs */}
        <Tabs defaultValue="students">
          <TabsList>
            <TabsTrigger value="students" className="gap-1.5">
              <Users className="h-4 w-4" />
              {t('school.classes.detail.tab.students')}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-1.5">
              <BarChart3 className="h-4 w-4" />
              {t('school.classes.detail.tab.analytics')}
            </TabsTrigger>
          </TabsList>

          {/* ── Students Tab ── */}
          <TabsContent value="students" className="mt-6 space-y-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-48">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t('school.classes.detail.search_placeholder')}
                  className="pl-9"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5"
                onClick={() => setAddModalOpen(true)}
              >
                <Plus className="h-4 w-4" />
                {t('school.classes.detail.add_students')}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5"
                onClick={() => exportCsv(displayStudents, cls.name)}
              >
                <Download className="h-4 w-4" />
                {t('school.classes.detail.export_csv')}
              </Button>
            </div>

            {/* Roster — glass table; every row drills to the student */}
            <GlassPanel accent="primary" glow={false} className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <caption className="sr-only">
                    {t('school.classes.detail.tab.students')} — {cls.name}
                  </caption>
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="px-4 py-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {t('school.classes.detail.col.name')}
                      </th>
                      <th className="px-4 py-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {t('school.classes.detail.col.email')}
                      </th>
                      <th className="px-4 py-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {t('school.classes.detail.col.year')}
                      </th>
                      <th className="px-4 py-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {t('school.classes.detail.col.last_active')}
                      </th>
                      <th className="px-4 py-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground min-w-36">
                        {t('school.classes.detail.col.progress')}
                      </th>
                      <th className="px-4 py-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {t('school.classes.detail.col.done')}
                      </th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {filteredStudents.length === 0 && (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-4 py-10 text-center text-sm text-muted-foreground"
                        >
                          {search
                            ? t('school.classes.detail.no_search_match')
                            : t('school.classes.detail.no_in_class')}
                        </td>
                      </tr>
                    )}
                    {filteredStudents.map((s) => (
                      <tr
                        key={s.student_id}
                        className="group transition-colors hover:bg-foreground/[0.04]"
                      >
                        <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                          <Link
                            href={`/school/students/${s.student_id}`}
                            className="flex items-center gap-1.5 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
                          >
                            {s.full_name ?? t('school.classes.detail.unknown')}
                            {isAtRisk(s) && (
                              <AlertTriangle
                                className="h-3.5 w-3.5 text-red-400 shrink-0"
                                aria-hidden
                              />
                            )}
                            <ChevronRight
                              className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                              aria-hidden
                            />
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                          {s.email}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {s.year_group ? (
                            <Badge variant="secondary" className="text-xs">
                              {s.year_group}
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap text-xs">
                          {formatLastActive(s.last_activity, t)}
                        </td>
                        <td className="px-4 py-3 min-w-36">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 overflow-hidden rounded-full bg-muted">
                              <div
                                className={cn(
                                  'h-full rounded-full transition-all duration-500',
                                  progressBarColor(s.avg_quiz_score ?? 0),
                                )}
                                style={{ width: `${Math.min(s.avg_quiz_score ?? 0, 100)}%` }}
                              />
                            </div>
                            <span
                              className={cn(
                                'text-xs font-semibold tabular-nums w-8 shrink-0 text-right',
                                scoreColor(s.avg_quiz_score),
                              )}
                            >
                              {s.avg_quiz_score !== null
                                ? `G${percentageToGCSEGrade(s.avg_quiz_score)}`
                                : '—'}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground tabular-nums text-xs whitespace-nowrap">
                          {s.modules_completed} {t('school.classes.detail.modules_suffix')}
                        </td>
                        <td className="px-4 py-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 gap-1 text-muted-foreground hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            disabled={removingId === s.student_id}
                            onClick={() => handleRemove(s.student_id)}
                            title={t('school.classes.detail.remove_title')}
                          >
                            {removingId === s.student_id ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <UserMinus className="h-3.5 w-3.5" />
                            )}
                            <span className="text-xs hidden sm:inline">
                              {t('school.classes.detail.remove')}
                            </span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ── Analytics Tab ── */}
          <TabsContent value="analytics" className="mt-6">
            <AnalyticsTab students={displayStudents} t={t} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Add Students Modal */}
      {addModalOpen && (
        <AddStudentsModal
          classId={classId}
          currentStudentIds={currentStudentIds}
          t={t}
          onClose={() => setAddModalOpen(false)}
          onAdded={handleStudentsAdded}
        />
      )}
    </div>
  )
}
