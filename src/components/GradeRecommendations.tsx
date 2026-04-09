"use client"

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  Lightbulb,
  PenTool,
  Target,
  Zap,
} from "lucide-react"
import {
  getNextGradeRecommendations,
  type GradeTransition,
  type SkillRecommendation,
} from "@/lib/grade-recommendations"
import { gcseGradeColor } from "@/lib/grades"

// ─── Types ───────────────────────────────────────────────────────────────────

interface GradeRecommendationsProps {
  currentGrade: number
  weakAreas?: string[]
  /** Maximum number of action items to show */
  maxActions?: number
  /** Whether to show the suggested resources section */
  showResources?: boolean
  /** Whether to show progress indicators for each skill */
  showProgress?: boolean
  /** Compact mode for sidebar/panel use */
  compact?: boolean
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const RESOURCE_ICONS: Record<string, typeof BookOpen> = {
  lesson: BookOpen,
  quiz: Zap,
  essay: PenTool,
  practice: Target,
}

function skillProgressPercent(skill: SkillRecommendation): number {
  // Approximate progress based on the level descriptors
  const levels = [
    "limited", "very limited", "simple", "basic", "rarely",
    "some", "attempts", "identifies", "retrieves",
    "explains", "comments", "uses", "accurate", "mentions",
    "analyses", "embedded", "well-chosen", "consistent", "varied", "deliberate",
    "integrates", "explores", "controls", "coherent", "wide range", "fluent",
    "sustained", "thoughtful", "confident", "evolving", "engaging",
    "evaluates", "precise", "nuanced", "distinctive", "original", "authoritative",
    "perceptive", "conceptualised", "sophisticated", "effortless", "commanding",
  ]
  const currentIdx = levels.findIndex((l) =>
    skill.currentLevel.toLowerCase().includes(l),
  )
  const targetIdx = levels.findIndex((l) =>
    skill.targetLevel.toLowerCase().includes(l),
  )
  if (currentIdx < 0 || targetIdx < 0 || targetIdx <= currentIdx) return 50
  return Math.round((currentIdx / targetIdx) * 100)
}

function progressBarColor(pct: number): string {
  if (pct >= 70) return "bg-emerald-500"
  if (pct >= 45) return "bg-amber-500"
  return "bg-red-500"
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function GradeRecommendations({
  currentGrade,
  weakAreas = [],
  maxActions = 5,
  showResources = true,
  showProgress = true,
  compact = false,
}: GradeRecommendationsProps) {
  const rec = getNextGradeRecommendations(currentGrade, weakAreas)

  if (!rec) {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <p className="text-sm text-emerald-300 font-medium">
            Working at Grade 9 -- the highest level. Focus on maintaining
            excellence and supporting others.
          </p>
        </div>
      </div>
    )
  }

  const visibleSkills = rec.skills.slice(0, maxActions)

  return (
    <div className={compact ? "space-y-4" : "space-y-6"}>
      {/* Header: Grade Transition Arrow */}
      <div className="flex items-center gap-3">
        <GradeChip grade={rec.from} />
        <ArrowRight className="h-4 w-4 text-neutral-500 shrink-0" />
        <GradeChip grade={rec.to} highlight />
        <span className="ml-2 text-xs text-neutral-500 uppercase tracking-wider font-medium">
          Next Grade Target
        </span>
      </div>

      {/* Summary */}
      <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-4 w-4 mt-0.5 text-amber-400 shrink-0" />
          <p className="text-sm text-neutral-300 leading-relaxed">{rec.summary}</p>
        </div>
      </div>

      {/* Key Focus Areas */}
      {!compact && (
        <div>
          <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-3">
            Key Focus Areas
          </h4>
          <ul className="space-y-2">
            {rec.keyFocus.map((focus, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-400">
                <ClipboardList className="h-3.5 w-3.5 mt-0.5 text-cyan-400/60 shrink-0" />
                <span>{focus}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Items by Skill */}
      <div>
        <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-3">
          {weakAreas.length > 0 ? "Priority Actions (by weak areas)" : "Action Items"}
        </h4>
        <div className="space-y-3">
          {visibleSkills.map((skill, i) => (
            <SkillActionCard
              key={skill.skill}
              skill={skill}
              index={i}
              showProgress={showProgress}
              compact={compact}
              isWeakArea={weakAreas.some(
                (w) =>
                  w.toLowerCase().includes(skill.skill) ||
                  skill.label.toLowerCase().includes(w.toLowerCase()),
              )}
            />
          ))}
        </div>
      </div>

      {/* Suggested Resources */}
      {showResources && rec.suggestedResources.length > 0 && (
        <div>
          <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-3">
            Suggested Resources
          </h4>
          <div className={compact ? "space-y-2" : "grid grid-cols-1 sm:grid-cols-2 gap-2"}>
            {rec.suggestedResources.map((res, i) => {
              const Icon = RESOURCE_ICONS[res.type] || BookOpen
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5 text-sm text-neutral-400 hover:bg-white/[0.04] transition-colors"
                >
                  <Icon className="h-3.5 w-3.5 text-cyan-400/60 shrink-0" />
                  <span className="flex-1 truncate">{res.title}</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-600">
                    {res.type}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function GradeChip({
  grade,
  highlight = false,
}: {
  grade: number
  highlight?: boolean
}) {
  const colorClass = gcseGradeColor(grade)
  return (
    <span
      className={`inline-flex items-center justify-center h-9 w-9 rounded-lg text-sm font-bold ${
        highlight
          ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300"
          : "bg-white/[0.04] border border-white/[0.08] " + colorClass
      }`}
    >
      {grade}
    </span>
  )
}

function SkillActionCard({
  skill,
  index,
  showProgress,
  compact,
  isWeakArea,
}: {
  skill: SkillRecommendation
  index: number
  showProgress: boolean
  compact: boolean
  isWeakArea: boolean
}) {
  const progress = skillProgressPercent(skill)

  return (
    <div
      className={`rounded-lg border p-3.5 transition-colors ${
        isWeakArea
          ? "border-amber-500/20 bg-amber-500/[0.04]"
          : "border-white/[0.06] bg-white/[0.02]"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold bg-white/[0.06] text-neutral-500">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-white/90">{skill.label}</span>
            {isWeakArea && (
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                Focus
              </span>
            )}
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">{skill.action}</p>

          {!compact && (
            <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
              <FileText className="h-3 w-3 shrink-0" />
              <span className="italic">{skill.exercise}</span>
            </div>
          )}

          {showProgress && (
            <div className="mt-2.5">
              <div className="flex items-center justify-between text-[10px] text-neutral-500 mb-1">
                <span>{skill.currentLevel}</span>
                <span className="text-cyan-400/60">{skill.targetLevel}</span>
              </div>
              <div className="h-1 w-full rounded-full bg-white/[0.04]">
                <div
                  className={`h-full rounded-full transition-all ${progressBarColor(progress)}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
