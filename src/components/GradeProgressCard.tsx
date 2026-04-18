"use client"

import { ArrowUp, ArrowDown, Minus, Target } from "lucide-react"
import { gcseGradeColor, gcseGradeBg } from "@/lib/grades"
import { gradeGapAnalysis } from "@/lib/grade-recommendations"

// ─── Types ───────────────────────────────────────────────────────────────────

interface GradeProgressCardProps {
  /** The student's current working-at grade (1-9) */
  currentGrade: number
  /** Predicted grade based on trends (1-9) */
  predictedGrade: number
  /** Target grade set by teacher or student (1-9) */
  targetGrade: number
  /** Trend direction for the predicted grade */
  trend?: "up" | "down" | "stable"
  /** Whether to use compact sizing */
  compact?: boolean
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function trendIcon(trend: "up" | "down" | "stable") {
  if (trend === "up") return <ArrowUp className="h-3.5 w-3.5 text-emerald-400" />
  if (trend === "down") return <ArrowDown className="h-3.5 w-3.5 text-red-400" />
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" />
}

function trendLabel(trend: "up" | "down" | "stable") {
  if (trend === "up") return "Improving"
  if (trend === "down") return "Declining"
  return "Stable"
}

function trendColor(trend: "up" | "down" | "stable") {
  if (trend === "up") return "text-emerald-400"
  if (trend === "down") return "text-red-400"
  return "text-muted-foreground"
}

function gapStatusColor(status: string) {
  if (status === "on-target") return "text-emerald-400"
  if (status === "close") return "text-amber-400"
  if (status === "behind") return "text-orange-400"
  return "text-red-400"
}

function gapStatusBg(status: string) {
  if (status === "on-target") return "bg-emerald-500/10 border-emerald-500/20"
  if (status === "close") return "bg-amber-500/10 border-amber-500/20"
  if (status === "behind") return "bg-orange-500/10 border-orange-500/20"
  return "bg-red-500/10 border-red-500/20"
}

// ─── Mini Progress Ring ──────────────────────────────────────────────────────

function MiniProgressRing({
  current,
  target,
  size = 64,
  stroke = 5,
}: {
  current: number
  target: number
  size?: number
  stroke?: number
}) {
  const maxGrade = 9
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(current / target, 1)
  const offset = circumference - progress * circumference

  // Gradient colours based on how close to target
  const ratio = current / target
  let strokeColor = "#ef4444" // red
  if (ratio >= 1) strokeColor = "#22c55e" // green
  else if (ratio >= 0.85) strokeColor = "#f59e0b" // amber
  else if (ratio >= 0.7) strokeColor = "#f97316" // orange

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--border) / 0.3)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[10px] text-muted-foreground leading-none">
          {current}/{target}
        </span>
      </div>
    </div>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function GradeProgressCard({
  currentGrade,
  predictedGrade,
  targetGrade,
  trend = "stable",
  compact = false,
}: GradeProgressCardProps) {
  const gap = gradeGapAnalysis(currentGrade, targetGrade)

  if (compact) {
    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-4">
          {/* Current Grade - prominent */}
          <div className="text-center">
            <div
              className={`text-3xl font-bold ${gcseGradeColor(currentGrade)}`}
            >
              {currentGrade}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
              Current
            </div>
          </div>

          {/* Mini ring */}
          <MiniProgressRing current={currentGrade} target={targetGrade} size={48} stroke={4} />

          {/* Target */}
          <div className="text-center">
            <div className="text-xl font-semibold text-teal-700">{targetGrade}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
              Target
            </div>
          </div>

          {/* Gap */}
          <div className={`ml-auto text-xs font-medium ${gapStatusColor(gap.status)}`}>
            {gap.label}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-start gap-5">
        {/* Working At Grade - large and prominent */}
        <div className="text-center shrink-0">
          <div
            className={`h-20 w-20 rounded-2xl flex items-center justify-center text-4xl font-bold ${gcseGradeBg(currentGrade)} ${gcseGradeColor(currentGrade)} border border-border`}
          >
            {currentGrade}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-2 font-medium">
            Working At
          </div>
        </div>

        {/* Grade Details */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Predicted Grade */}
            <div className="rounded-lg border border-border bg-cream-100 px-3 py-2.5">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                Predicted
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-bold ${gcseGradeColor(predictedGrade)}`}>
                  {predictedGrade}
                </span>
                <div className="flex items-center gap-1">
                  {trendIcon(trend)}
                  <span className={`text-[10px] ${trendColor(trend)}`}>
                    {trendLabel(trend)}
                  </span>
                </div>
              </div>
            </div>

            {/* Target Grade */}
            <div className="rounded-lg border border-border bg-cream-100 px-3 py-2.5">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                Target
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-teal-700">{targetGrade}</span>
                <Target className="h-3.5 w-3.5 text-teal-700/50" />
              </div>
            </div>
          </div>

          {/* Gap Analysis */}
          <div
            className={`flex items-center justify-between rounded-lg border px-3 py-2 ${gapStatusBg(gap.status)}`}
          >
            <span className={`text-xs font-medium ${gapStatusColor(gap.status)}`}>
              {gap.label}
            </span>
            <MiniProgressRing
              current={currentGrade}
              target={targetGrade}
              size={36}
              stroke={3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
