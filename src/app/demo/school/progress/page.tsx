"use client"

import { useState } from "react"
import Link from "next/link"
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
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { DEMO_STUDENTS, DEMO_CLASSES } from "@/data/demo-data"
import DemoBanner from "@/components/demo/DemoBanner"
import { percentageToGCSEGrade } from "@/lib/grades"

// ── Year group data ──────────────────────────────────────────────────────────

interface YearGroupData {
  year: string
  label: string
  totalStudents: number
  avgProgress: number
  avgScore: number
  onTrack: number
  needsSupport: number
  atRisk: number
  predictedGrades: { grade: string; pct: number; color: string }[]
  classes: { name: string; avgScore: number; completionRate: number; teacher: string }[]
  modules: { name: string; completionRate: number }[]
  interventions: string[]
}

const YEAR_GROUPS: YearGroupData[] = [
  {
    year: "Y7",
    label: "Year 7",
    totalStudents: 180,
    avgProgress: 62,
    avgScore: 58,
    onTrack: 112,
    needsSupport: 48,
    atRisk: 20,
    predictedGrades: [
      { grade: "8-9", pct: 8, color: "bg-emerald-500" },
      { grade: "7", pct: 22, color: "bg-emerald-400" },
      { grade: "6", pct: 38, color: "bg-amber-400" },
      { grade: "5", pct: 22, color: "bg-orange-400" },
      { grade: "1-4", pct: 10, color: "bg-red-500" },
    ],
    classes: [
      { name: "7A English", avgScore: 64, completionRate: 68, teacher: "Ms. Williams" },
      { name: "7B English", avgScore: 58, completionRate: 60, teacher: "Mr. Roberts" },
      { name: "7C English", avgScore: 52, completionRate: 54, teacher: "Mrs. Green" },
    ],
    modules: [
      { name: "Introduction to Literature", completionRate: 82 },
      { name: "Creative Writing Foundations", completionRate: 74 },
      { name: "Reading Comprehension", completionRate: 68 },
      { name: "Grammar & Punctuation", completionRate: 56 },
      { name: "Speaking & Listening", completionRate: 45 },
    ],
    interventions: [
      "20 students flagged for literacy intervention -- schedule small group sessions",
      "7C English underperforming: review seating plan and differentiation strategy",
      "Grammar & Punctuation module behind target -- consider additional homework tasks",
    ],
  },
  {
    year: "Y8",
    label: "Year 8",
    totalStudents: 165,
    avgProgress: 66,
    avgScore: 62,
    onTrack: 108,
    needsSupport: 39,
    atRisk: 18,
    predictedGrades: [
      { grade: "8-9", pct: 10, color: "bg-emerald-500" },
      { grade: "7", pct: 25, color: "bg-emerald-400" },
      { grade: "6", pct: 36, color: "bg-amber-400" },
      { grade: "5", pct: 20, color: "bg-orange-400" },
      { grade: "1-4", pct: 9, color: "bg-red-500" },
    ],
    classes: [
      { name: "8A English", avgScore: 68, completionRate: 72, teacher: "Mr. Harris" },
      { name: "8B English", avgScore: 62, completionRate: 65, teacher: "Ms. Patel" },
      { name: "8C English", avgScore: 55, completionRate: 58, teacher: "Mr. Roberts" },
    ],
    modules: [
      { name: "Shakespeare Introduction", completionRate: 78 },
      { name: "Poetry Analysis", completionRate: 72 },
      { name: "Narrative Writing", completionRate: 66 },
      { name: "Non-Fiction Reading", completionRate: 60 },
      { name: "Debate & Rhetoric", completionRate: 48 },
    ],
    interventions: [
      "18 at-risk students need structured reading support programme",
      "8C English: consider teacher CPD on engagement strategies",
      "Debate & Rhetoric module lagging -- integrate into cross-curricular activities",
    ],
  },
  {
    year: "Y9",
    label: "Year 9",
    totalStudents: 158,
    avgProgress: 68,
    avgScore: 64,
    onTrack: 106,
    needsSupport: 35,
    atRisk: 17,
    predictedGrades: [
      { grade: "8-9", pct: 12, color: "bg-emerald-500" },
      { grade: "7", pct: 28, color: "bg-emerald-400" },
      { grade: "6", pct: 34, color: "bg-amber-400" },
      { grade: "5", pct: 18, color: "bg-orange-400" },
      { grade: "1-4", pct: 8, color: "bg-red-500" },
    ],
    classes: [
      { name: "9A English", avgScore: 70, completionRate: 74, teacher: "Mrs. Okafor" },
      { name: "9B English", avgScore: 64, completionRate: 68, teacher: "Mr. Singh" },
      { name: "9C English", avgScore: 58, completionRate: 60, teacher: "Mrs. Clarke" },
    ],
    modules: [
      { name: "GCSE Preparation", completionRate: 72 },
      { name: "Macbeth Introduction", completionRate: 68 },
      { name: "Language Paper Skills", completionRate: 62 },
      { name: "Creative Writing Advanced", completionRate: 58 },
      { name: "Poetry Anthology", completionRate: 44 },
    ],
    interventions: [
      "17 students at risk ahead of GCSE option choices -- arrange parents evening",
      "9C English below expected progress: review scheme of work alignment",
      "Poetry Anthology completion low -- deploy targeted revision resources",
    ],
  },
  {
    year: "Y10",
    label: "Year 10",
    totalStudents: 142,
    avgProgress: 72,
    avgScore: 68,
    onTrack: 92,
    needsSupport: 34,
    atRisk: 16,
    predictedGrades: [
      { grade: "8-9", pct: 15, color: "bg-emerald-500" },
      { grade: "7", pct: 30, color: "bg-emerald-400" },
      { grade: "6", pct: 35, color: "bg-amber-400" },
      { grade: "5", pct: 15, color: "bg-orange-400" },
      { grade: "1-4", pct: 5, color: "bg-red-500" },
    ],
    classes: [
      { name: "10A English", avgScore: 74, completionRate: 76, teacher: "Ms. Thompson" },
      { name: "10B English Lit", avgScore: 69, completionRate: 70, teacher: "Mr. Davies" },
      { name: "10C English Lang", avgScore: 62, completionRate: 64, teacher: "Dr. Chen" },
    ],
    modules: [
      { name: "Macbeth", completionRate: 82 },
      { name: "An Inspector Calls", completionRate: 74 },
      { name: "Language Paper 1", completionRate: 70 },
      { name: "Language Paper 2", completionRate: 62 },
      { name: "Creative Writing", completionRate: 58 },
      { name: "Poetry Anthology", completionRate: 48 },
    ],
    interventions: [
      "16 at-risk students: deploy exam technique intervention programme",
      "10C English Lang: below target -- arrange departmental support observation",
      "Poetry Anthology completion critically low -- introduce weekly poetry sessions",
      "Schedule mock exam preparation workshops for borderline C/D students",
    ],
  },
  {
    year: "Y11",
    label: "Year 11",
    totalStudents: 138,
    avgProgress: 78,
    avgScore: 72,
    onTrack: 98,
    needsSupport: 28,
    atRisk: 12,
    predictedGrades: [
      { grade: "8-9", pct: 18, color: "bg-emerald-500" },
      { grade: "7", pct: 32, color: "bg-emerald-400" },
      { grade: "6", pct: 32, color: "bg-amber-400" },
      { grade: "5", pct: 13, color: "bg-orange-400" },
      { grade: "1-4", pct: 5, color: "bg-red-500" },
    ],
    classes: [
      { name: "11A English Lang", avgScore: 78, completionRate: 84, teacher: "Ms. Khan" },
      { name: "11B English", avgScore: 74, completionRate: 80, teacher: "Mr. Patel" },
      { name: "11C English Lit", avgScore: 64, completionRate: 68, teacher: "Mrs. Clarke" },
    ],
    modules: [
      { name: "Macbeth Revision", completionRate: 88 },
      { name: "An Inspector Calls Revision", completionRate: 84 },
      { name: "Language Paper 1 Practice", completionRate: 80 },
      { name: "Language Paper 2 Practice", completionRate: 76 },
      { name: "Poetry Comparison", completionRate: 68 },
      { name: "Unseen Poetry", completionRate: 60 },
    ],
    interventions: [
      "12 at-risk students: intensive revision timetable with after-school sessions",
      "11C English Lit below expected: deploy targeted intervention for Lit texts",
      "Unseen Poetry confidence low -- arrange weekly practice sessions",
      "URGENT: 5 students with attendance below 85% -- involve pastoral team",
    ],
  },
  {
    year: "Y12",
    label: "Year 12",
    totalStudents: 64,
    avgProgress: 74,
    avgScore: 70,
    onTrack: 44,
    needsSupport: 14,
    atRisk: 6,
    predictedGrades: [
      { grade: "8-9", pct: 20, color: "bg-emerald-500" },
      { grade: "7", pct: 35, color: "bg-emerald-400" },
      { grade: "6", pct: 28, color: "bg-amber-400" },
      { grade: "5", pct: 12, color: "bg-orange-400" },
      { grade: "1-4", pct: 5, color: "bg-red-500" },
    ],
    classes: [
      { name: "12A English Lit A-Level", avgScore: 74, completionRate: 78, teacher: "Dr. Chen" },
      { name: "12B English Lang A-Level", avgScore: 66, completionRate: 70, teacher: "Ms. Khan" },
    ],
    modules: [
      { name: "Othello", completionRate: 76 },
      { name: "The Handmaid's Tale", completionRate: 70 },
      { name: "Poetry Pre-1900", completionRate: 62 },
      { name: "Language Investigation", completionRate: 54 },
      { name: "NEA Coursework", completionRate: 42 },
    ],
    interventions: [
      "6 at-risk students: arrange 1:1 mentoring with subject lead",
      "NEA coursework behind schedule -- set interim deadlines with progress checks",
      "Poetry Pre-1900 engagement low -- introduce seminar-style discussions",
    ],
  },
  {
    year: "Y13",
    label: "Year 13",
    totalStudents: 52,
    avgProgress: 80,
    avgScore: 74,
    onTrack: 38,
    needsSupport: 10,
    atRisk: 4,
    predictedGrades: [
      { grade: "8-9", pct: 22, color: "bg-emerald-500" },
      { grade: "7", pct: 34, color: "bg-emerald-400" },
      { grade: "6", pct: 30, color: "bg-amber-400" },
      { grade: "5", pct: 10, color: "bg-orange-400" },
      { grade: "1-4", pct: 4, color: "bg-red-500" },
    ],
    classes: [
      { name: "13A English Lit A-Level", avgScore: 78, completionRate: 84, teacher: "Dr. Chen" },
      { name: "13 A-Level Language", avgScore: 70, completionRate: 76, teacher: "Ms. Khan" },
    ],
    modules: [
      { name: "Othello Revision", completionRate: 86 },
      { name: "The Handmaid's Tale Revision", completionRate: 82 },
      { name: "Poetry Comparison", completionRate: 76 },
      { name: "NEA Final Draft", completionRate: 68 },
      { name: "Exam Technique", completionRate: 72 },
    ],
    interventions: [
      "4 at-risk students: urgent intervention -- mock results below C grade",
      "NEA Final Draft submissions overdue for 8 students -- chase with deadlines",
      "Arrange A-Level revision bootcamp during Easter break",
    ],
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function progressColor(pct: number): string {
  if (pct >= 75) return "bg-emerald-500"
  if (pct >= 60) return "bg-amber-500"
  return "bg-red-500"
}

function progressTextColor(pct: number): string {
  if (pct >= 75) return "text-emerald-400"
  if (pct >= 60) return "text-amber-400"
  return "text-red-400"
}

function ragColor(status: string): string {
  if (status === "onTrack") return "bg-emerald-500"
  if (status === "needsSupport") return "bg-amber-500"
  return "bg-red-500"
}

// ── Overview stats ───────────────────────────────────────────────────────────

const totalStudents = YEAR_GROUPS.reduce((s, y) => s + y.totalStudents, 0)
const avgSchoolProgress = Math.round(YEAR_GROUPS.reduce((s, y) => s + y.avgProgress * y.totalStudents, 0) / totalStudents)
const totalOnTrack = YEAR_GROUPS.reduce((s, y) => s + y.onTrack, 0)
const totalNeedsSupport = YEAR_GROUPS.reduce((s, y) => s + y.needsSupport, 0)
const totalAtRisk = YEAR_GROUPS.reduce((s, y) => s + y.atRisk, 0)

// ── Main Page ────────────────────────────────────────────────────────────────

export default function SchoolProgressPage() {
  const [activeYear, setActiveYear] = useState<string>("Y10")
  const [showReport, setShowReport] = useState(false)

  const activeYearData = YEAR_GROUPS.find((y) => y.year === activeYear)!

  const maxClassScore = Math.max(...activeYearData.classes.map((c) => c.avgScore))

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DemoBanner message="You are viewing an interactive demo with sample data. No real student data is used." />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/demo/school"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white/70 transition-colors mb-6"
        >
          <span className="text-base leading-none">&larr;</span> School Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              <BarChart3 className="h-7 w-7 text-violet-400" />
              Progress Tracking
            </h1>
            <p className="text-neutral-400 mt-1">Whole-school progress overview and year group analysis</p>
          </div>
          <Button
            variant="outline"
            className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 gap-2"
            onClick={() => toast("Available with full account", { description: "Register your school to download reports." })}
          >
            <Download className="h-4 w-4" />
            Download Year Group Report
          </Button>
        </div>

        {/* ── Overview Cards ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Overall School Progress */}
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-violet-400" />
                Overall School Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{avgSchoolProgress}% <span className="text-lg font-normal text-neutral-400">(Grade {percentageToGCSEGrade(avgSchoolProgress)})</span></div>
              <div className="mt-2 h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
                <div className={`h-full rounded-full ${progressColor(avgSchoolProgress)} transition-all`} style={{ width: `${avgSchoolProgress}%` }} />
              </div>
              <p className="text-xs text-neutral-500 mt-2">{totalStudents} students across {YEAR_GROUPS.length} year groups</p>
            </CardContent>
          </Card>

          {/* Year Group Breakdown */}
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-blue-400" />
                Year Group Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1.5">
                {YEAR_GROUPS.map((yg) => (
                  <div key={yg.year} className="flex items-center gap-2 text-xs">
                    <span className="w-8 text-neutral-500 font-mono">{yg.year}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                      <div className={`h-full rounded-full ${progressColor(yg.avgProgress)}`} style={{ width: `${yg.avgProgress}%` }} />
                    </div>
                    <span className={`w-8 text-right font-mono ${progressTextColor(yg.avgProgress)}`}>{yg.avgProgress}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Predicted Grades Distribution (school-wide) */}
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                <Target className="h-4 w-4 text-amber-400" />
                Predicted Grades Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1.5">
                {[
                  { grade: "8-9", pct: 15, color: "bg-emerald-500" },
                  { grade: "7", pct: 30, color: "bg-emerald-400" },
                  { grade: "6", pct: 35, color: "bg-amber-400" },
                  { grade: "5", pct: 15, color: "bg-orange-400" },
                  { grade: "1-4", pct: 5, color: "bg-red-500" },
                ].map((g) => (
                  <div key={g.grade} className="flex items-center gap-2 text-xs">
                    <span className="w-10 text-neutral-400 font-medium">{g.grade}</span>
                    <div className="flex-1 h-3 rounded bg-neutral-800 overflow-hidden">
                      <div className={`h-full rounded ${g.color}`} style={{ width: `${g.pct}%` }} />
                    </div>
                    <span className="w-8 text-right text-neutral-400 font-mono">{g.pct}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Student Distribution Summary ─────────────────────────── */}
        <Card className="bg-neutral-900/60 border-neutral-800 mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <Users className="h-4 w-4 text-cyan-400" />
              Student Distribution (All Year Groups)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mx-auto mb-1" />
                <div className="text-2xl font-bold text-emerald-400">{totalOnTrack}</div>
                <div className="text-xs text-neutral-400 mt-1">On Track</div>
                <div className="text-xs text-neutral-500">{Math.round((totalOnTrack / totalStudents) * 100)}%</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Clock className="h-5 w-5 text-amber-400 mx-auto mb-1" />
                <div className="text-2xl font-bold text-amber-400">{totalNeedsSupport}</div>
                <div className="text-xs text-neutral-400 mt-1">Needs Support</div>
                <div className="text-xs text-neutral-500">{Math.round((totalNeedsSupport / totalStudents) * 100)}%</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <AlertTriangle className="h-5 w-5 text-red-400 mx-auto mb-1" />
                <div className="text-2xl font-bold text-red-400">{totalAtRisk}</div>
                <div className="text-xs text-neutral-400 mt-1">At Risk</div>
                <div className="text-xs text-neutral-500">{Math.round((totalAtRisk / totalStudents) * 100)}%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Year Group Tabs ──────────────────────────────────────── */}
        <div className="mb-6">
          <div className="flex gap-1 flex-wrap rounded-lg bg-neutral-900/60 border border-neutral-800 p-1">
            {YEAR_GROUPS.map((yg) => (
              <button
                key={yg.year}
                onClick={() => { setActiveYear(yg.year); setShowReport(false) }}
                className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeYear === yg.year
                    ? "bg-violet-600 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
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
              <GraduationCap className="h-5 w-5 text-violet-400" />
              {activeYearData.label} Progress
              <Badge variant="secondary" className="ml-2 bg-neutral-800 text-neutral-300">
                {activeYearData.totalStudents} students
              </Badge>
            </h2>
            <div className="flex items-center gap-2">
              <span className={`text-lg font-bold ${progressTextColor(activeYearData.avgProgress)}`}>
                {activeYearData.avgProgress}% avg <span className="text-sm font-normal text-neutral-500">(Grade {percentageToGCSEGrade(activeYearData.avgProgress)})</span>
              </span>
            </div>
          </div>

          {/* Class Comparison Chart */}
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-blue-400" />
                Class Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeYearData.classes.map((cls) => (
                  <div key={cls.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="text-sm font-medium text-white">{cls.name}</span>
                        <span className="text-xs text-neutral-500 ml-2">({cls.teacher})</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-neutral-400">Avg: <span className={progressTextColor(cls.avgScore)}>{cls.avgScore}% (G{percentageToGCSEGrade(cls.avgScore)})</span></span>
                        <span className="text-neutral-400">Completion: <span className={progressTextColor(cls.completionRate)}>{cls.completionRate}%</span></span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="flex-1 h-6 rounded bg-neutral-800 overflow-hidden relative">
                        <div
                          className={`h-full rounded ${cls.avgScore === maxClassScore ? "bg-violet-500" : progressColor(cls.avgScore)} transition-all`}
                          style={{ width: `${cls.avgScore}%` }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-white/80">
                          {cls.avgScore}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-neutral-600 mt-3">Best performing class highlighted in violet</p>
            </CardContent>
          </Card>

          {/* Student Distribution (donut-style) + Predicted Grades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Student Distribution */}
            <Card className="bg-neutral-900/60 border-neutral-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                  <PieChart className="h-4 w-4 text-cyan-400" />
                  Student Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* CSS donut chart */}
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-32 h-32 -rotate-90">
                      {(() => {
                        const onTrackPct = (activeYearData.onTrack / activeYearData.totalStudents) * 100
                        const supportPct = (activeYearData.needsSupport / activeYearData.totalStudents) * 100
                        const atRiskPct = (activeYearData.atRisk / activeYearData.totalStudents) * 100
                        const gap = 1
                        return (
                          <>
                            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#171717" strokeWidth="3.5" />
                            <circle
                              cx="18" cy="18" r="15.915" fill="none"
                              stroke="#10b981" strokeWidth="3.5"
                              strokeDasharray={`${onTrackPct - gap} ${100 - onTrackPct + gap}`}
                              strokeDashoffset="0"
                            />
                            <circle
                              cx="18" cy="18" r="15.915" fill="none"
                              stroke="#f59e0b" strokeWidth="3.5"
                              strokeDasharray={`${supportPct - gap} ${100 - supportPct + gap}`}
                              strokeDashoffset={`${-(onTrackPct)}`}
                            />
                            <circle
                              cx="18" cy="18" r="15.915" fill="none"
                              stroke="#ef4444" strokeWidth="3.5"
                              strokeDasharray={`${atRiskPct - gap} ${100 - atRiskPct + gap}`}
                              strokeDashoffset={`${-(onTrackPct + supportPct)}`}
                            />
                          </>
                        )
                      })()}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg font-bold text-white">{activeYearData.totalStudents}</span>
                      <span className="text-[10px] text-neutral-500">students</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-emerald-500" />
                      <span className="text-neutral-300">On Track</span>
                      <span className="text-emerald-400 font-mono ml-auto">{activeYearData.onTrack}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="text-neutral-300">Needs Support</span>
                      <span className="text-amber-400 font-mono ml-auto">{activeYearData.needsSupport}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="text-neutral-300">At Risk</span>
                      <span className="text-red-400 font-mono ml-auto">{activeYearData.atRisk}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Predicted Grades */}
            <Card className="bg-neutral-900/60 border-neutral-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                  <Target className="h-4 w-4 text-amber-400" />
                  Predicted Grades -- {activeYearData.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activeYearData.predictedGrades.map((g) => (
                    <div key={g.grade} className="flex items-center gap-3">
                      <span className="w-12 text-sm font-medium text-neutral-300">{g.grade}</span>
                      <div className="flex-1 h-5 rounded bg-neutral-800 overflow-hidden relative">
                        <div className={`h-full rounded ${g.color} transition-all`} style={{ width: `${g.pct * 2.5}%` }} />
                      </div>
                      <span className="w-10 text-right text-sm font-mono text-neutral-400">{g.pct}%</span>
                      <span className="w-10 text-right text-xs text-neutral-500">
                        ~{Math.round(activeYearData.totalStudents * g.pct / 100)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Module Completion Rates */}
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-violet-400" />
                Module Completion Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeYearData.modules.map((mod) => (
                  <div key={mod.name} className="p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white truncate">{mod.name}</span>
                      <span className={`text-sm font-mono ${progressTextColor(mod.completionRate)}`}>{mod.completionRate}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-neutral-700 overflow-hidden">
                      <div className={`h-full rounded-full ${progressColor(mod.completionRate)} transition-all`} style={{ width: `${mod.completionRate}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Intervention Recommendations */}
          <Card className="bg-neutral-900/60 border-neutral-800 border-l-4 border-l-red-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-400 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" />
                Intervention Recommendations -- {activeYearData.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {activeYearData.interventions.map((intervention, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
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
              className="bg-violet-600 hover:bg-violet-500 text-white gap-2"
              onClick={() => setShowReport(true)}
            >
              <Printer className="h-4 w-4" />
              Generate Progress Report
            </Button>
            <Button
              variant="outline"
              className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 gap-2"
              onClick={() => toast("Available with full account", { description: "Register your school to download year group reports." })}
            >
              <Download className="h-4 w-4" />
              Download Year Group Report
            </Button>
          </div>
        </div>

        {/* ── Printable Report Card Modal ──────────────────────────── */}
        {showReport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="bg-white text-black rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Report header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h2 className="text-xl font-bold">Progress Report: {activeYearData.label}</h2>
                  <p className="text-sm text-gray-500">Westfield Academy -- Generated {new Date().toLocaleDateString("en-GB")}</p>
                </div>
                <button onClick={() => setShowReport(false)} className="p-2 rounded-md hover:bg-gray-100">
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
                        <td className="py-1 text-gray-500">Total Students</td>
                        <td className="py-1 font-medium text-right">{activeYearData.totalStudents}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Average Progress</td>
                        <td className="py-1 font-medium text-right">{activeYearData.avgProgress}%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Average Score</td>
                        <td className="py-1 font-medium text-right">{activeYearData.avgScore}%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">On Track</td>
                        <td className="py-1 font-medium text-right text-green-700">{activeYearData.onTrack} ({Math.round((activeYearData.onTrack / activeYearData.totalStudents) * 100)}%)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Needs Support</td>
                        <td className="py-1 font-medium text-right text-amber-600">{activeYearData.needsSupport} ({Math.round((activeYearData.needsSupport / activeYearData.totalStudents) * 100)}%)</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-500">At Risk</td>
                        <td className="py-1 font-medium text-right text-red-600">{activeYearData.atRisk} ({Math.round((activeYearData.atRisk / activeYearData.totalStudents) * 100)}%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Class Performance */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Class Performance</h3>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b text-gray-500">
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
                          <td className="py-1 text-gray-500">{cls.teacher}</td>
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
                      <div key={g.grade} className="flex-1 text-center p-2 rounded bg-gray-100">
                        <div className="text-lg font-bold">{g.pct}%</div>
                        <div className="text-xs text-gray-500">{g.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interventions */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Recommended Interventions</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {activeYearData.interventions.map((int, i) => (
                      <li key={i}>{int}</li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-400 pt-4 border-t">
                  This is a demo report. Register your school for real progress tracking.
                </div>
              </div>

              {/* Print button */}
              <div className="p-4 border-t flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowReport(false)}>
                  Close
                </Button>
                <Button onClick={() => window.print()} className="bg-black text-white hover:bg-gray-800 gap-2">
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
