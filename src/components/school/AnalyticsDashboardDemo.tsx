"use client"

import { BarChart3, TrendingUp, Users, AlertTriangle, CheckCircle, BookOpen, Brain, Star } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Static mock data ─────────────────────────────────────────────────────────

const STATS = [
  { label: "Students", value: "342", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Teachers", value: "18", icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/10" },
  { label: "Classes", value: "12", icon: Brain, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Active This Week", value: "89%", icon: TrendingUp, color: "text-clay-600", bg: "bg-amber-500/10" },
]

const YEAR_GROUPS = [
  { year: "Year 7", students: 58, avg: 71, progress: 71, trend: "+4%" },
  { year: "Year 8", students: 54, avg: 68, progress: 68, trend: "+2%" },
  { year: "Year 9", students: 49, avg: 74, progress: 74, trend: "+6%" },
  { year: "Year 10", students: 62, avg: 66, progress: 66, trend: "-1%" },
  { year: "Year 11", students: 57, avg: 78, progress: 78, trend: "+8%" },
  { year: "Year 12", students: 34, avg: 82, progress: 82, trend: "+3%" },
  { year: "Year 13", students: 28, avg: 85, progress: 85, trend: "+5%" },
]

const AT_RISK_STUDENTS = [
  {
    name: "Marcus T.",
    year: "Y10",
    issue: "No activity in 14 days",
    severity: "high",
    class: "10B English",
  },
  {
    name: "Priya S.",
    year: "Y11",
    issue: "3 missed assignments",
    severity: "high",
    class: "11A Literature",
  },
  {
    name: "Callum W.",
    year: "Y9",
    issue: "Grade drop: 7 to 5",
    severity: "medium",
    class: "9C English",
  },
]

const TOP_CLASSES = [
  { name: "11A Literature", teacher: "Ms. Okafor", avg: 84, bar: 84 },
  { name: "13B English Lang.", teacher: "Mr. Patel", avg: 81, bar: 81 },
  { name: "12A English Lit.", teacher: "Ms. Rahman", avg: 79, bar: 79 },
  { name: "9C English", teacher: "Mr. Davies", avg: 76, bar: 76 },
]

const COMPLETION_RINGS = [
  { label: "Essays", pct: 91, color: "#3b82f6" },
  { label: "Worksheets", pct: 87, color: "#8b5cf6" },
  { label: "Quizzes", pct: 94, color: "#10b981" },
  { label: "Reading", pct: 78, color: "#f59e0b" },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function progressColor(pct: number): string {
  if (pct >= 78) return "bg-emerald-500"
  if (pct >= 65) return "bg-amber-500"
  return "bg-red-500"
}

function trendColor(trend: string): string {
  return trend.startsWith("+") ? "text-emerald-400" : "text-red-400"
}

// CSS-only donut ring using conic-gradient
function DonutRing({ pct, color, label }: { pct: number; color: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-16 w-16 items-center justify-center">
        {/* Background track */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        {/* Filled arc via conic-gradient */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${color} 0% ${pct}%, transparent ${pct}% 100%)`,
          }}
        />
        {/* Inner mask */}
        <div
          className="absolute inset-[6px] rounded-full bg-[#0d1117]"
        />
        {/* Label */}
        <span className="relative text-xs font-bold text-white">{pct}%</span>
      </div>
      <p className="text-[11px] text-white/50 text-center">{label}</p>
    </div>
  )
}

// ─── Section: Stats Row ───────────────────────────────────────────────────────

function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {STATS.map((s) => {
        const Icon = s.icon
        return (
          <div
            key={s.label}
            className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 flex items-center gap-3"
          >
            <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", s.bg)}>
              <Icon className={cn("h-4 w-4", s.color)} />
            </div>
            <div className="min-w-0">
              <p className="text-lg font-bold text-white leading-none tabular-nums">{s.value}</p>
              <p className="text-[11px] text-white/40 mt-0.5 truncate">{s.label}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Section: Year Group Table ────────────────────────────────────────────────

function YearGroupTable() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-blue-400" />
          <p className="text-sm font-semibold text-white">Year Group Overview</p>
        </div>
        <span className="text-[11px] text-white/30">Avg. score this term</span>
      </div>
      <div className="divide-y divide-white/[0.05]">
        {YEAR_GROUPS.map((row) => (
          <div key={row.year} className="flex items-center gap-3 px-4 py-2.5">
            <p className="w-16 shrink-0 text-xs font-semibold text-white/70">{row.year}</p>
            <p className="w-12 shrink-0 text-[11px] text-white/30">{row.students} pupils</p>
            {/* Progress bar */}
            <div className="flex-1 h-1.5 rounded-full bg-white/[0.06]">
              <div
                className={cn("h-full rounded-full transition-all", progressColor(row.progress))}
                style={{ width: `${row.progress}%` }}
              />
            </div>
            <p className="w-6 shrink-0 text-xs font-bold text-white/70 tabular-nums">{row.avg}</p>
            <p className={cn("w-10 shrink-0 text-[11px] font-medium text-right tabular-nums", trendColor(row.trend))}>
              {row.trend}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Section: At-Risk Students ────────────────────────────────────────────────

function AtRiskPanel() {
  return (
    <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] overflow-hidden">
      <div className="flex items-center justify-between border-b border-red-500/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-red-400" />
          <p className="text-sm font-semibold text-white">At-Risk Students</p>
        </div>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
          {AT_RISK_STUDENTS.length}
        </span>
      </div>
      <div className="divide-y divide-white/[0.05]">
        {AT_RISK_STUDENTS.map((s) => (
          <div key={s.name} className="flex items-start gap-3 px-4 py-3">
            {/* Avatar placeholder */}
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white/50">
              {s.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-white/80">{s.name}</p>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                    s.severity === "high"
                      ? "bg-red-500/20 text-red-300"
                      : "bg-amber-500/20 text-amber-700"
                  )}
                >
                  {s.severity === "high" ? "High" : "Medium"}
                </span>
              </div>
              <p className="text-[11px] text-white/40 mt-0.5">{s.class} &bull; {s.year}</p>
              <p className="text-[11px] text-red-400/80 mt-0.5">{s.issue}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2.5 border-t border-red-500/10">
        <button
          type="button"
          className="text-[11px] text-red-400 hover:text-red-300 font-medium transition-colors"
        >
          View all interventions &rarr;
        </button>
      </div>
    </div>
  )
}

// ─── Section: Top Classes ─────────────────────────────────────────────────────

function TopClassesPanel() {
  const max = Math.max(...TOP_CLASSES.map((c) => c.bar))
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
        <Star className="h-4 w-4 text-clay-600" />
        <p className="text-sm font-semibold text-white">Top Classes</p>
      </div>
      <div className="space-y-3 px-4 py-3">
        {TOP_CLASSES.map((cls, i) => (
          <div key={cls.name} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.06] text-[10px] font-bold text-white/50">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white/80 truncate">{cls.name}</p>
                  <p className="text-[11px] text-white/30">{cls.teacher}</p>
                </div>
              </div>
              <span className="shrink-0 text-sm font-bold text-white tabular-nums ml-3">{cls.avg}</span>
            </div>
            {/* CSS bar */}
            <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all"
                style={{ width: `${(cls.bar / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Section: Assignment Completion ──────────────────────────────────────────

function CompletionPanel() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
        <CheckCircle className="h-4 w-4 text-emerald-400" />
        <p className="text-sm font-semibold text-white">Assignment Completion</p>
      </div>
      <div className="flex items-center justify-around px-4 py-5">
        {COMPLETION_RINGS.map((r) => (
          <DonutRing key={r.label} pct={r.pct} color={r.color} label={r.label} />
        ))}
      </div>
      <div className="border-t border-white/[0.07] px-4 py-2.5 flex items-center justify-between">
        <span className="text-[11px] text-white/30">Overall rate this term</span>
        <span className="text-sm font-bold text-emerald-400">88%</span>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function AnalyticsDashboardDemo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <div className="ml-4 flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1">
          <BarChart3 className="h-3 w-3 text-white/30" />
          <span className="text-[11px] text-white/30 font-mono">englishhub.ai / admin / analytics</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-white/30 font-mono">Live</span>
        </div>
      </div>

      {/* Dashboard header */}
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#0d1117] px-5 py-3">
        <div>
          <h2 className="text-sm font-bold text-white">School Dashboard</h2>
          <p className="text-[11px] text-white/30 mt-0.5">Ashworth Academy &bull; Spring Term 2025</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-500/15 border border-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-400">
            All systems healthy
          </span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="space-y-4 p-4">
        {/* Stats row */}
        <StatsRow />

        {/* Year group table — full width */}
        <YearGroupTable />

        {/* Two-column row: at-risk + top classes */}
        <div className="grid gap-4 lg:grid-cols-2">
          <AtRiskPanel />
          <TopClassesPanel />
        </div>

        {/* Completion rings — full width */}
        <CompletionPanel />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/[0.07] bg-[#161b22] px-5 py-2.5">
        <span className="text-[11px] text-white/20 font-mono">Last updated: just now</span>
        <span className="text-[11px] text-white/20 font-mono">
          Data refreshes every 15 min &bull; GDPR compliant
        </span>
      </div>
    </div>
  )
}
