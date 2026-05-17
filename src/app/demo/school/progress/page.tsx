'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BarChart3,
  Users,
  TrendingUp,
  AlertTriangle,
  Download,
  FileText,
  GraduationCap,
  ChevronRight,
  Printer,
  Target,
  PieChart,
  BookOpen,
  ShieldAlert,
  CheckCircle2,
  Clock,
  X,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { DEMO_STUDENTS, DEMO_CLASSES } from '@/data/demo-data'
import DemoBanner from '@/components/demo/DemoBanner'
import { percentageToGCSEGrade, gcseGradeColor, predictedGradeColor } from '@/lib/grades'
import { RankBars, RadialScore, ChartFrame, GlassTooltip, GRID, AXIS } from '@/components/dataviz'
import {
  BarChart as RBarChart,
  Bar as RBar,
  XAxis as RXAxis,
  YAxis as RYAxis,
  CartesianGrid as RCartesianGrid,
  Tooltip as RTooltip,
  Cell as RCell,
} from 'recharts'

// Solid hsl fills mirroring the grade-band Tailwind classes used in the
// predicted-grade distributions (kept on-theme, semantics unchanged).
const GRADE_BAND_FILL: Record<string, string> = {
  'bg-teal-700': 'hsl(173 80% 26%)',
  'bg-teal-600': 'hsl(175 70% 34%)',
  'bg-amber-400': 'hsl(43 96% 56%)',
  'bg-amber-500': 'hsl(38 92% 50%)',
  'bg-red-500': 'hsl(0 84% 60%)',
}

// ── Year group data ──────────────────────────────────────────────────────────

interface YearGroupData {
  year: string
  label: string
  totalStudents: number
  avgProgress: number
  avgScore: number
  avgWorkingAt: number
  avgPredicted: number
  avgTarget: number
  onTrack: number
  aboveTarget: number
  belowTarget: number
  atRisk: number
  predictedGrades: { grade: string; pct: number; color: string }[]
  classes: { name: string; avgScore: number; completionRate: number; teacher: string }[]
  modules: { name: string; completionRate: number }[]
  interventions: string[]
}

const YEAR_GROUPS: YearGroupData[] = [
  {
    year: 'Y7',
    label: 'Year 7',
    totalStudents: 180,
    avgProgress: 62,
    avgScore: 58,
    avgWorkingAt: percentageToGCSEGrade(58),
    avgPredicted: percentageToGCSEGrade(58),
    avgTarget: Math.min(9, percentageToGCSEGrade(58) + 2),
    onTrack: 101,
    aboveTarget: 32,
    belowTarget: 33,
    atRisk: 14,
    predictedGrades: [
      { grade: '8-9', pct: 8, color: 'bg-teal-700' },
      { grade: '7', pct: 22, color: 'bg-teal-600' },
      { grade: '6', pct: 38, color: 'bg-amber-400' },
      { grade: '5', pct: 22, color: 'bg-amber-500' },
      { grade: '1-4', pct: 10, color: 'bg-red-500' },
    ],
    classes: [
      { name: '7A English', avgScore: 64, completionRate: 68, teacher: 'Ms. Williams' },
      { name: '7B English', avgScore: 58, completionRate: 60, teacher: 'Mr. Roberts' },
      { name: '7C English', avgScore: 52, completionRate: 54, teacher: 'Mrs. Green' },
    ],
    modules: [
      { name: 'Introduction to Literature', completionRate: 82 },
      { name: 'Creative Writing Foundations', completionRate: 74 },
      { name: 'Reading Comprehension', completionRate: 68 },
      { name: 'Grammar & Punctuation', completionRate: 56 },
      { name: 'Speaking & Listening', completionRate: 45 },
    ],
    interventions: [
      '20 students flagged for literacy intervention -- schedule small group sessions',
      '7C English underperforming: review seating plan and differentiation strategy',
      'Grammar & Punctuation module behind target -- consider additional homework tasks',
    ],
  },
  {
    year: 'Y8',
    label: 'Year 8',
    totalStudents: 165,
    avgProgress: 66,
    avgScore: 62,
    avgWorkingAt: percentageToGCSEGrade(62),
    avgPredicted: percentageToGCSEGrade(64),
    avgTarget: Math.min(9, percentageToGCSEGrade(62) + 2),
    onTrack: 94,
    aboveTarget: 28,
    belowTarget: 30,
    atRisk: 13,
    predictedGrades: [
      { grade: '8-9', pct: 10, color: 'bg-teal-700' },
      { grade: '7', pct: 25, color: 'bg-teal-600' },
      { grade: '6', pct: 36, color: 'bg-amber-400' },
      { grade: '5', pct: 20, color: 'bg-amber-500' },
      { grade: '1-4', pct: 9, color: 'bg-red-500' },
    ],
    classes: [
      { name: '8A English', avgScore: 68, completionRate: 72, teacher: 'Mr. Harris' },
      { name: '8B English', avgScore: 62, completionRate: 65, teacher: 'Ms. Patel' },
      { name: '8C English', avgScore: 55, completionRate: 58, teacher: 'Mr. Roberts' },
    ],
    modules: [
      { name: 'Shakespeare Introduction', completionRate: 78 },
      { name: 'Poetry Analysis', completionRate: 72 },
      { name: 'Narrative Writing', completionRate: 66 },
      { name: 'Non-Fiction Reading', completionRate: 60 },
      { name: 'Debate & Rhetoric', completionRate: 48 },
    ],
    interventions: [
      '18 at-risk students need structured reading support programme',
      '8C English: consider teacher CPD on engagement strategies',
      'Debate & Rhetoric module lagging -- integrate into cross-curricular activities',
    ],
  },
  {
    year: 'Y9',
    label: 'Year 9',
    totalStudents: 158,
    avgProgress: 68,
    avgScore: 64,
    avgWorkingAt: percentageToGCSEGrade(64),
    avgPredicted: percentageToGCSEGrade(66),
    avgTarget: Math.min(9, percentageToGCSEGrade(64) + 2),
    onTrack: 89,
    aboveTarget: 27,
    belowTarget: 29,
    atRisk: 13,
    predictedGrades: [
      { grade: '8-9', pct: 12, color: 'bg-teal-700' },
      { grade: '7', pct: 28, color: 'bg-teal-600' },
      { grade: '6', pct: 34, color: 'bg-amber-400' },
      { grade: '5', pct: 18, color: 'bg-amber-500' },
      { grade: '1-4', pct: 8, color: 'bg-red-500' },
    ],
    classes: [
      { name: '9A English', avgScore: 70, completionRate: 74, teacher: 'Mrs. Okafor' },
      { name: '9B English', avgScore: 64, completionRate: 68, teacher: 'Mr. Singh' },
      { name: '9C English', avgScore: 58, completionRate: 60, teacher: 'Mrs. Clarke' },
    ],
    modules: [
      { name: 'GCSE Preparation', completionRate: 72 },
      { name: 'Macbeth Introduction', completionRate: 68 },
      { name: 'Language Paper Skills', completionRate: 62 },
      { name: 'Creative Writing Advanced', completionRate: 58 },
      { name: 'Poetry Anthology', completionRate: 44 },
    ],
    interventions: [
      '17 students at risk ahead of GCSE option choices -- arrange parents evening',
      '9C English below expected progress: review scheme of work alignment',
      'Poetry Anthology completion low -- deploy targeted revision resources',
    ],
  },
  {
    year: 'Y10',
    label: 'Year 10',
    totalStudents: 142,
    avgProgress: 72,
    avgScore: 68,
    avgWorkingAt: percentageToGCSEGrade(68),
    avgPredicted: percentageToGCSEGrade(70),
    avgTarget: Math.min(9, percentageToGCSEGrade(68) + 1),
    onTrack: 80,
    aboveTarget: 24,
    belowTarget: 27,
    atRisk: 11,
    predictedGrades: [
      { grade: '8-9', pct: 15, color: 'bg-teal-700' },
      { grade: '7', pct: 30, color: 'bg-teal-600' },
      { grade: '6', pct: 35, color: 'bg-amber-400' },
      { grade: '5', pct: 15, color: 'bg-amber-500' },
      { grade: '1-4', pct: 5, color: 'bg-red-500' },
    ],
    classes: [
      { name: '10A English', avgScore: 74, completionRate: 76, teacher: 'Ms. Thompson' },
      { name: '10B English Lit', avgScore: 69, completionRate: 70, teacher: 'Mr. Davies' },
      { name: '10C English Lang', avgScore: 62, completionRate: 64, teacher: 'Dr. Chen' },
    ],
    modules: [
      { name: 'Macbeth', completionRate: 82 },
      { name: 'An Inspector Calls', completionRate: 74 },
      { name: 'Language Paper 1', completionRate: 70 },
      { name: 'Language Paper 2', completionRate: 62 },
      { name: 'Creative Writing', completionRate: 58 },
      { name: 'Poetry Anthology', completionRate: 48 },
    ],
    interventions: [
      '16 at-risk students: deploy exam technique intervention programme',
      '10C English Lang: below target -- arrange departmental support observation',
      'Poetry Anthology completion critically low -- introduce weekly poetry sessions',
      'Schedule mock exam preparation workshops for borderline C/D students',
    ],
  },
  {
    year: 'Y11',
    label: 'Year 11',
    totalStudents: 138,
    avgProgress: 78,
    avgScore: 72,
    avgWorkingAt: percentageToGCSEGrade(72),
    avgPredicted: percentageToGCSEGrade(74),
    avgTarget: Math.min(9, percentageToGCSEGrade(72) + 1),
    onTrack: 78,
    aboveTarget: 25,
    belowTarget: 25,
    atRisk: 10,
    predictedGrades: [
      { grade: '8-9', pct: 18, color: 'bg-teal-700' },
      { grade: '7', pct: 32, color: 'bg-teal-600' },
      { grade: '6', pct: 32, color: 'bg-amber-400' },
      { grade: '5', pct: 13, color: 'bg-amber-500' },
      { grade: '1-4', pct: 5, color: 'bg-red-500' },
    ],
    classes: [
      { name: '11A English Lang', avgScore: 78, completionRate: 84, teacher: 'Ms. Khan' },
      { name: '11B English', avgScore: 74, completionRate: 80, teacher: 'Mr. Patel' },
      { name: '11C English Lit', avgScore: 64, completionRate: 68, teacher: 'Mrs. Clarke' },
    ],
    modules: [
      { name: 'Macbeth Revision', completionRate: 88 },
      { name: 'An Inspector Calls Revision', completionRate: 84 },
      { name: 'Language Paper 1 Practice', completionRate: 80 },
      { name: 'Language Paper 2 Practice', completionRate: 76 },
      { name: 'Poetry Comparison', completionRate: 68 },
      { name: 'Unseen Poetry', completionRate: 60 },
    ],
    interventions: [
      '12 at-risk students: intensive revision timetable with after-school sessions',
      '11C English Lit below expected: deploy targeted intervention for Lit texts',
      'Unseen Poetry confidence low -- arrange weekly practice sessions',
      'URGENT: 5 students with attendance below 85% -- involve pastoral team',
    ],
  },
  {
    year: 'Y12',
    label: 'Year 12',
    totalStudents: 64,
    avgProgress: 74,
    avgScore: 70,
    avgWorkingAt: percentageToGCSEGrade(70),
    avgPredicted: percentageToGCSEGrade(72),
    avgTarget: Math.min(9, percentageToGCSEGrade(70) + 1),
    onTrack: 36,
    aboveTarget: 11,
    belowTarget: 12,
    atRisk: 5,
    predictedGrades: [
      { grade: '8-9', pct: 20, color: 'bg-teal-700' },
      { grade: '7', pct: 35, color: 'bg-teal-600' },
      { grade: '6', pct: 28, color: 'bg-amber-400' },
      { grade: '5', pct: 12, color: 'bg-amber-500' },
      { grade: '1-4', pct: 5, color: 'bg-red-500' },
    ],
    classes: [
      { name: '12A English Lit A-Level', avgScore: 74, completionRate: 78, teacher: 'Dr. Chen' },
      { name: '12B English Lang A-Level', avgScore: 66, completionRate: 70, teacher: 'Ms. Khan' },
    ],
    modules: [
      { name: 'Othello', completionRate: 76 },
      { name: "The Handmaid's Tale", completionRate: 70 },
      { name: 'Poetry Pre-1900', completionRate: 62 },
      { name: 'Language Investigation', completionRate: 54 },
      { name: 'NEA Coursework', completionRate: 42 },
    ],
    interventions: [
      '6 at-risk students: arrange 1:1 mentoring with subject lead',
      'NEA coursework behind schedule -- set interim deadlines with progress checks',
      'Poetry Pre-1900 engagement low -- introduce seminar-style discussions',
    ],
  },
  {
    year: 'Y13',
    label: 'Year 13',
    totalStudents: 52,
    avgProgress: 80,
    avgScore: 74,
    avgWorkingAt: percentageToGCSEGrade(74),
    avgPredicted: percentageToGCSEGrade(76),
    avgTarget: Math.min(9, percentageToGCSEGrade(74) + 1),
    onTrack: 29,
    aboveTarget: 10,
    belowTarget: 9,
    atRisk: 4,
    predictedGrades: [
      { grade: '8-9', pct: 22, color: 'bg-teal-700' },
      { grade: '7', pct: 34, color: 'bg-teal-600' },
      { grade: '6', pct: 30, color: 'bg-amber-400' },
      { grade: '5', pct: 10, color: 'bg-amber-500' },
      { grade: '1-4', pct: 4, color: 'bg-red-500' },
    ],
    classes: [
      { name: '13A English Lit A-Level', avgScore: 78, completionRate: 84, teacher: 'Dr. Chen' },
      { name: '13 A-Level Language', avgScore: 70, completionRate: 76, teacher: 'Ms. Khan' },
    ],
    modules: [
      { name: 'Othello Revision', completionRate: 86 },
      { name: "The Handmaid's Tale Revision", completionRate: 82 },
      { name: 'Poetry Comparison', completionRate: 76 },
      { name: 'NEA Final Draft', completionRate: 68 },
      { name: 'Exam Technique', completionRate: 72 },
    ],
    interventions: [
      '4 at-risk students: urgent intervention -- mock results below C grade',
      'NEA Final Draft submissions overdue for 8 students -- chase with deadlines',
      'Arrange A-Level revision bootcamp during Easter break',
    ],
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function progressColor(pct: number): string {
  if (pct >= 75) return 'bg-teal-700'
  if (pct >= 60) return 'bg-amber-500'
  return 'bg-red-500'
}

function progressTextColor(pct: number): string {
  if (pct >= 75) return 'text-primary'
  if (pct >= 60) return 'text-amber-700 dark:text-amber-300'
  return 'text-red-700 dark:text-red-300'
}

function ragColor(status: string): string {
  if (status === 'onTrack') return 'bg-teal-700'
  if (status === 'aboveTarget') return 'bg-yellow-400'
  if (status === 'belowTarget') return 'bg-amber-500'
  return 'bg-red-500'
}

// ── Overview stats ───────────────────────────────────────────────────────────

const totalStudents = YEAR_GROUPS.reduce((s, y) => s + y.totalStudents, 0)
const avgSchoolProgress = Math.round(
  YEAR_GROUPS.reduce((s, y) => s + y.avgProgress * y.totalStudents, 0) / totalStudents,
)
const totalOnTrack = YEAR_GROUPS.reduce((s, y) => s + y.onTrack, 0)
const totalAboveTarget = YEAR_GROUPS.reduce((s, y) => s + y.aboveTarget, 0)
const totalBelowTarget = YEAR_GROUPS.reduce((s, y) => s + y.belowTarget, 0)
const totalAtRisk = YEAR_GROUPS.reduce((s, y) => s + y.atRisk, 0)

// ── Main Page ────────────────────────────────────────────────────────────────

export default function SchoolProgressPage() {
  const [activeYear, setActiveYear] = useState<string>('Y10')
  const [showReport, setShowReport] = useState(false)

  const activeYearData = YEAR_GROUPS.find((y) => y.year === activeYear)!

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DemoBanner message="You are viewing an interactive demo with sample data. No real student data is used." />

      <div className="px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/demo/school"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <span className="text-base leading-none">&larr;</span> School Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              <BarChart3 className="h-7 w-7 text-primary" />
              Progress Tracking
            </h1>
            <p className="text-muted-foreground mt-1">
              Whole-school progress overview and year group analysis
            </p>
          </div>
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground gap-2"
            onClick={() =>
              toast('Available with full account', {
                description: 'Register your school to download reports.',
              })
            }
          >
            <Download className="h-4 w-4" />
            Download Year Group Report
          </Button>
        </div>

        {/* ── Overview Cards ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Overall School Progress */}
          <Card className="bg-card border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Overall School Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <RadialScore value={avgSchoolProgress} label="avg" size={96} />
                <div>
                  <div
                    className={`text-3xl font-bold ${gcseGradeColor(percentageToGCSEGrade(avgSchoolProgress))}`}
                  >
                    Grade {percentageToGCSEGrade(avgSchoolProgress)}{' '}
                    <span className="text-lg font-normal text-muted-foreground">avg</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {totalStudents} students across {YEAR_GROUPS.length} year groups
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Year Group Breakdown */}
          <Card className="bg-card border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                Year Group Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RankBars
                data={YEAR_GROUPS.map((yg) => ({ year: yg.year, avgProgress: yg.avgProgress }))}
                labelKey="year"
                valueKey="avgProgress"
                height={Math.max(180, YEAR_GROUPS.length * 26)}
                suffix="%"
              />
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
                {YEAR_GROUPS.map((yg) => (
                  <div key={yg.year} className="flex items-center justify-between gap-2 text-xs">
                    <span className="text-muted-foreground font-mono">{yg.year}</span>
                    <span className={`text-right font-mono ${gcseGradeColor(yg.avgWorkingAt)}`}>
                      Grade {yg.avgWorkingAt}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Predicted Grades Distribution (school-wide) */}
          <Card className="bg-card border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Target className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                Predicted Grades Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const dist = [
                  { grade: '8-9', pct: 15, color: 'bg-teal-700' },
                  { grade: '7', pct: 30, color: 'bg-teal-600' },
                  { grade: '6', pct: 35, color: 'bg-amber-400' },
                  { grade: '5', pct: 15, color: 'bg-amber-500' },
                  { grade: '1-4', pct: 5, color: 'bg-red-500' },
                ]
                return (
                  <ChartFrame height={Math.max(160, dist.length * 30)}>
                    <RBarChart
                      data={dist}
                      layout="vertical"
                      margin={{ top: 4, right: 24, bottom: 4, left: 8 }}
                      barCategoryGap={8}
                    >
                      <RCartesianGrid {...GRID} horizontal={false} vertical />
                      <RXAxis type="number" domain={[0, 100]} {...AXIS} unit="%" />
                      <RYAxis
                        type="category"
                        dataKey="grade"
                        {...AXIS}
                        width={44}
                        tick={{ fontSize: 11, fill: 'hsl(var(--foreground))' }}
                      />
                      <RTooltip
                        content={<GlassTooltip suffix="%" />}
                        cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
                      />
                      <RBar
                        dataKey="pct"
                        name="Students"
                        radius={[0, 6, 6, 0]}
                        isAnimationActive
                        animationDuration={900}
                      >
                        {dist.map((g) => (
                          <RCell key={g.grade} fill={GRADE_BAND_FILL[g.color]} />
                        ))}
                      </RBar>
                    </RBarChart>
                  </ChartFrame>
                )
              })()}
            </CardContent>
          </Card>
        </div>

        {/* ── Student Distribution Summary ─────────────────────────── */}
        <Card className="bg-card border-border/60 mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Student Distribution (All Year Groups)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <CheckCircle2 className="h-5 w-5 text-primary mx-auto mb-1" />
                <div className="text-2xl font-bold text-primary">{totalOnTrack}</div>
                <div className="text-xs text-muted-foreground mt-1">On Track</div>
                <div className="text-xs text-muted-foreground">
                  {Math.round((totalOnTrack / totalStudents) * 100)}%
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                <TrendingUp className="h-5 w-5 text-amber-700 dark:text-amber-300 mx-auto mb-1" />
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                  {totalAboveTarget}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Above Target</div>
                <div className="text-xs text-muted-foreground">
                  {Math.round((totalAboveTarget / totalStudents) * 100)}%
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Clock className="h-5 w-5 text-amber-700 dark:text-amber-300 mx-auto mb-1" />
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                  {totalBelowTarget}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Below Target</div>
                <div className="text-xs text-muted-foreground">
                  {Math.round((totalBelowTarget / totalStudents) * 100)}%
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <AlertTriangle className="h-5 w-5 text-red-700 dark:text-red-300 mx-auto mb-1" />
                <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                  {totalAtRisk}
                </div>
                <div className="text-xs text-muted-foreground mt-1">At Risk</div>
                <div className="text-xs text-muted-foreground">
                  {Math.round((totalAtRisk / totalStudents) * 100)}%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Year Group Tabs ──────────────────────────────────────── */}
        <div className="mb-6">
          <div className="flex gap-1 flex-wrap rounded-lg bg-card border border-border/60 p-1">
            {YEAR_GROUPS.map((yg) => (
              <button
                key={yg.year}
                onClick={() => {
                  setActiveYear(yg.year)
                  setShowReport(false)
                }}
                className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeYear === yg.year
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {yg.year}
              </button>
            ))}
          </div>
        </div>

        {/* ── Active Year Details ──────────────────────────────────── */}
        <div className="space-y-6">
          {/* Year header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              {activeYearData.label} Progress
              <Badge variant="secondary" className="ml-2">
                {activeYearData.totalStudents} students
              </Badge>
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className={`text-lg font-bold ${gcseGradeColor(activeYearData.avgWorkingAt)}`}>
                  G{activeYearData.avgWorkingAt}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase">Working At</div>
              </div>
              <div className="text-center">
                <div
                  className={`text-lg font-bold ${predictedGradeColor(activeYearData.avgPredicted, activeYearData.avgWorkingAt)}`}
                >
                  G{activeYearData.avgPredicted}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase">Predicted</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">G{activeYearData.avgTarget}</div>
                <div className="text-[10px] text-muted-foreground uppercase">Target</div>
              </div>
            </div>
          </div>

          {/* Class Comparison Chart */}
          <Card className="bg-card border-border/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                Class Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RankBars
                data={activeYearData.classes.map((cls) => ({
                  name: cls.name,
                  avgScore: cls.avgScore,
                }))}
                labelKey="name"
                valueKey="avgScore"
                height={Math.max(180, activeYearData.classes.length * 44)}
                suffix="%"
              />
              <div className="mt-4 space-y-1.5">
                {activeYearData.classes.map((cls) => (
                  <div key={cls.name} className="flex items-center justify-between gap-3 text-xs">
                    <div className="min-w-0 truncate">
                      <span className="text-sm font-medium text-foreground">{cls.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">({cls.teacher})</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="text-muted-foreground">
                        Avg:{' '}
                        <span className={progressTextColor(cls.avgScore)}>
                          {cls.avgScore}% (G{percentageToGCSEGrade(cls.avgScore)})
                        </span>
                      </span>
                      <span className="text-muted-foreground">
                        Completion:{' '}
                        <span className={progressTextColor(cls.completionRate)}>
                          {cls.completionRate}%
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">
                Best performing class highlighted in violet
              </p>
            </CardContent>
          </Card>

          {/* Student Distribution (donut-style) + Predicted Grades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Student Distribution */}
            <Card className="bg-card border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <PieChart className="h-4 w-4 text-primary" />
                  Student Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <div className="flex flex-shrink-0 flex-col items-center">
                    <RadialScore
                      value={Math.round(
                        (activeYearData.onTrack / activeYearData.totalStudents) * 100,
                      )}
                      label="on track"
                      size={128}
                    />
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {activeYearData.totalStudents} students
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-teal-700" />
                      <span className="text-muted-foreground">On Track</span>
                      <span className="text-primary font-mono ml-auto">
                        {activeYearData.onTrack}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="text-muted-foreground">Above Target</span>
                      <span className="text-amber-700 dark:text-amber-300 font-mono ml-auto">
                        {activeYearData.aboveTarget}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="text-muted-foreground">Below Target</span>
                      <span className="text-amber-700 dark:text-amber-300 font-mono ml-auto">
                        {activeYearData.belowTarget}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="text-muted-foreground">At Risk</span>
                      <span className="text-red-700 dark:text-red-300 font-mono ml-auto">
                        {activeYearData.atRisk}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Predicted Grades */}
            <Card className="bg-card border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Target className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                  Predicted Grades -- {activeYearData.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartFrame height={Math.max(180, activeYearData.predictedGrades.length * 34)}>
                  <RBarChart
                    data={activeYearData.predictedGrades}
                    layout="vertical"
                    margin={{ top: 4, right: 24, bottom: 4, left: 8 }}
                    barCategoryGap={8}
                  >
                    <RCartesianGrid {...GRID} horizontal={false} vertical />
                    <RXAxis type="number" domain={[0, 100]} {...AXIS} unit="%" />
                    <RYAxis
                      type="category"
                      dataKey="grade"
                      {...AXIS}
                      width={48}
                      tick={{ fontSize: 12, fill: 'hsl(var(--foreground))' }}
                    />
                    <RTooltip
                      content={<GlassTooltip suffix="%" />}
                      cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
                    />
                    <RBar
                      dataKey="pct"
                      name="Predicted"
                      radius={[0, 6, 6, 0]}
                      isAnimationActive
                      animationDuration={900}
                    >
                      {activeYearData.predictedGrades.map((g) => (
                        <RCell key={g.grade} fill={GRADE_BAND_FILL[g.color]} />
                      ))}
                    </RBar>
                  </RBarChart>
                </ChartFrame>
                <div className="mt-3 space-y-1.5">
                  {activeYearData.predictedGrades.map((g) => (
                    <div key={g.grade} className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold text-muted-foreground">{g.grade}</span>
                      <span className="font-mono text-muted-foreground">
                        {g.pct}% &middot; ~
                        {Math.round((activeYearData.totalStudents * g.pct) / 100)} students
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Module Completion Rates */}
          <Card className="bg-card border-border/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                Module Completion Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RankBars
                data={activeYearData.modules.map((mod) => ({
                  name: mod.name,
                  completionRate: mod.completionRate,
                }))}
                labelKey="name"
                valueKey="completionRate"
                height={Math.max(180, activeYearData.modules.length * 34)}
                suffix="%"
              />
              <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
                {activeYearData.modules.map((mod) => (
                  <div key={mod.name} className="flex items-center justify-between gap-2 text-sm">
                    <span className="truncate text-foreground">{mod.name}</span>
                    <span className={`shrink-0 font-mono ${progressTextColor(mod.completionRate)}`}>
                      {mod.completionRate}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Intervention Recommendations */}
          <Card className="bg-card border-border/60 border-l-4 border-l-red-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-700 dark:text-red-300 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" />
                Intervention Recommendations -- {activeYearData.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {activeYearData.interventions.map((intervention, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {intervention}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Generate Progress Report Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              onClick={() => setShowReport(true)}
            >
              <Printer className="h-4 w-4" />
              Generate Progress Report
            </Button>
            <Button
              variant="outline"
              className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground gap-2"
              onClick={() =>
                toast('Available with full account', {
                  description: 'Register your school to download year group reports.',
                })
              }
            >
              <Download className="h-4 w-4" />
              Download Year Group Report
            </Button>
          </div>
        </div>

        {/* ── Printable Report Card Modal ──────────────────────────── */}
        {showReport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4">
            <div className="bg-card text-card-foreground rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Report header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h2 className="text-xl font-bold">Progress Report: {activeYearData.label}</h2>
                  <p className="text-sm text-muted-foreground">
                    Westfield Academy -- Generated {new Date().toLocaleDateString('en-GB')}
                  </p>
                </div>
                <button
                  onClick={() => setShowReport(false)}
                  className="p-2 rounded-md hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Report body */}
              <div className="p-6 space-y-6 text-sm">
                {/* Summary */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Summary</h3>
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-1 text-muted-foreground">Total Students</td>
                        <td className="py-1 font-medium text-right">
                          {activeYearData.totalStudents}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-muted-foreground">Average Progress</td>
                        <td className="py-1 font-medium text-right">
                          {activeYearData.avgProgress}%
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-muted-foreground">Average Score</td>
                        <td className="py-1 font-medium text-right">{activeYearData.avgScore}%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-muted-foreground">On Track</td>
                        <td className="py-1 font-medium text-right text-emerald-700 dark:text-emerald-300">
                          {activeYearData.onTrack} (
                          {Math.round(
                            (activeYearData.onTrack / activeYearData.totalStudents) * 100,
                          )}
                          %)
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-muted-foreground">Above Target</td>
                        <td className="py-1 font-medium text-right text-amber-700 dark:text-amber-300">
                          {activeYearData.aboveTarget} (
                          {Math.round(
                            (activeYearData.aboveTarget / activeYearData.totalStudents) * 100,
                          )}
                          %)
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-muted-foreground">Below Target</td>
                        <td className="py-1 font-medium text-right text-amber-700 dark:text-amber-300">
                          {activeYearData.belowTarget} (
                          {Math.round(
                            (activeYearData.belowTarget / activeYearData.totalStudents) * 100,
                          )}
                          %)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 text-muted-foreground">At Risk</td>
                        <td className="py-1 font-medium text-right text-red-700 dark:text-red-300">
                          {activeYearData.atRisk} (
                          {Math.round((activeYearData.atRisk / activeYearData.totalStudents) * 100)}
                          %)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Class Performance */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Class Performance</h3>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b text-muted-foreground">
                        <th className="py-1 font-medium">Class</th>
                        <th className="py-1 font-medium">Teacher</th>
                        <th className="py-1 font-medium text-right">Avg Score</th>
                        <th className="py-1 font-medium text-right">Completion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeYearData.classes.map((cls) => (
                        <tr key={cls.name} className="border-b">
                          <td className="py-1">{cls.name}</td>
                          <td className="py-1 text-muted-foreground">{cls.teacher}</td>
                          <td className="py-1 text-right font-medium">{cls.avgScore}%</td>
                          <td className="py-1 text-right font-medium">{cls.completionRate}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Predicted Grades */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Predicted Grade Distribution</h3>
                  <div className="flex gap-2">
                    {activeYearData.predictedGrades.map((g) => (
                      <div key={g.grade} className="flex-1 text-center p-2 rounded bg-muted">
                        <div className="text-lg font-bold">{g.pct}%</div>
                        <div className="text-xs text-muted-foreground">{g.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interventions */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Recommended Interventions</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {activeYearData.interventions.map((int, i) => (
                      <li key={i}>{int}</li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-muted-foreground pt-4 border-t">
                  This is a demo report. Register your school for real progress tracking.
                </div>
              </div>

              {/* Print button */}
              <div className="p-4 border-t flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowReport(false)}>
                  Close
                </Button>
                <Button
                  onClick={() => window.print()}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  <Printer className="h-4 w-4" />
                  Print Report
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
