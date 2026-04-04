"use client"

import { Download, Mail, ExternalLink, Users, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────────────

type StatusType = "on-track" | "needs-support" | "at-risk"

interface MockStudent {
  name: string
  score: number
  status: StatusType
}

// ─── Static data ─────────────────────────────────────────────────────────────

const CLASS_NAME = "Year 10 Set 1"
const TOTAL_STUDENTS = 28
const WEEKLY_COMPLETION = 89

const MOCK_STUDENTS: MockStudent[] = [
  { name: "Aisha Rahman", score: 94, status: "on-track" },
  { name: "James O'Brien", score: 67, status: "on-track" },
  { name: "Sophie Chen", score: 45, status: "needs-support" },
  { name: "Liam Hassan", score: 23, status: "at-risk" },
  { name: "Maya Patel", score: 88, status: "on-track" },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<StatusType, { label: string; badgeClass: string; barClass: string }> = {
  "on-track": {
    label: "On Track",
    badgeClass: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
    barClass: "bg-emerald-500",
  },
  "needs-support": {
    label: "Needs Support",
    badgeClass: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
    barClass: "bg-amber-500",
  },
  "at-risk": {
    label: "At Risk",
    badgeClass: "bg-red-500/15 text-red-400 border border-red-500/25",
    barClass: "bg-red-500",
  },
}

function scoreTextColor(score: number): string {
  if (score >= 70) return "text-emerald-400"
  if (score >= 50) return "text-amber-400"
  return "text-red-400"
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function StudentProgressPreview() {
  const atRiskCount = MOCK_STUDENTS.filter((s) => s.status === "at-risk").length
  const needsSupportCount = MOCK_STUDENTS.filter((s) => s.status === "needs-support").length

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <div className="ml-4 flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1">
          <TrendingUp className="h-3 w-3 text-white/30" />
          <span className="text-[11px] text-white/30 font-mono">Student Progress</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Class header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{CLASS_NAME}</p>
              <p className="text-[11px] text-white/40">{TOTAL_STUDENTS} students</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-white/30 mb-0.5">Week of 31 Mar</p>
            <span className="rounded-full bg-white/[0.05] border border-white/10 px-2.5 py-0.5 text-[11px] text-white/50">
              This week
            </span>
          </div>
        </div>

        {/* Weekly completion overview */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Weekly Module Completion
            </p>
            <span className={cn("text-lg font-bold tabular-nums", scoreTextColor(WEEKLY_COMPLETION))}>
              {WEEKLY_COMPLETION}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-2.5 w-full rounded-full bg-white/[0.07] overflow-hidden">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${WEEKLY_COMPLETION}%` }}
            />
          </div>

          {/* Sub-stats */}
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-white/40">
              <span className="font-semibold text-white/70">
                {Math.round((WEEKLY_COMPLETION / 100) * TOTAL_STUDENTS)}
              </span>{" "}
              completed
            </span>
            <span className="text-white/20">|</span>
            <span className="text-amber-400">
              <span className="font-semibold">{needsSupportCount}</span> need support
            </span>
            <span className="text-white/20">|</span>
            <span className="text-red-400">
              <span className="font-semibold">{atRiskCount}</span> at risk
            </span>
          </div>
        </div>

        {/* Student rows */}
        <div className="space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 px-1">
            Student Overview
          </p>

          {MOCK_STUDENTS.map((student) => {
            const config = STATUS_CONFIG[student.status]
            return (
              <div
                key={student.name}
                className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 hover:bg-white/[0.05] transition-colors group"
              >
                {/* Avatar initial */}
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[11px] font-bold text-white/50">
                  {student.name.charAt(0)}
                </div>

                {/* Name */}
                <div className="min-w-0 w-28 shrink-0">
                  <p className="text-xs font-medium text-white/80 truncate">{student.name}</p>
                </div>

                {/* Progress bar */}
                <div className="flex-1 min-w-0 flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-white/[0.07] overflow-hidden">
                    <div
                      className={cn("h-full rounded-full transition-all", config.barClass)}
                      style={{ width: `${student.score}%` }}
                    />
                  </div>
                  <span
                    className={cn(
                      "shrink-0 w-8 text-right text-xs font-semibold tabular-nums",
                      scoreTextColor(student.score)
                    )}
                  >
                    {student.score}%
                  </span>
                </div>

                {/* Status badge */}
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap",
                    config.badgeClass
                  )}
                >
                  {config.label}
                </span>

                {/* View Details link */}
                <button
                  type="button"
                  className="shrink-0 flex items-center gap-1 text-[11px] text-white/20 group-hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span className="hidden sm:inline">View Details</span>
                </button>
              </div>
            )
          })}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-white/[0.06]">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/65 hover:bg-white/[0.08] hover:text-white/85 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Download Report
          </button>
          <button
            type="button"
            className={cn(
              "flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
              atRiskCount > 0
                ? "border-red-500/25 bg-red-500/8 text-red-400 hover:bg-red-500/15"
                : "border-white/10 bg-white/[0.04] text-white/65 hover:bg-white/[0.08]"
            )}
          >
            <Mail className="h-3.5 w-3.5" />
            Email at-risk students&apos; teachers
          </button>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-white/[0.07] bg-[#161b22] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-white/30 font-mono">Live data</span>
        </div>
        <span className="text-[11px] text-white/20 font-mono">
          Updated 2 mins ago
        </span>
      </div>
    </div>
  )
}
