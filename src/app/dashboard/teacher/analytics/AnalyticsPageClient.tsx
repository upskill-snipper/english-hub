'use client'

import Link from "next/link";
import { percentageToGCSEGradeLabel, percentageToGCSEGrade, gcseGradeColor } from "@/lib/grades";

/* ─── Mock data ─────────────────────────────────────────────────────────
   Uses mock data until these API routes are implemented:
   - GET /api/teacher/analytics/scores — average scores over time
   - GET /api/teacher/analytics/skills — topic/skill area breakdown
   - GET /api/teacher/analytics/students-at-risk — students needing support
   - GET /api/teacher/analytics/export — CSV/PDF report generation
   ───────────────────────────────────────────────────────────────────── */

// Average scores per week (for bar chart)
const MOCK_WEEKLY_SCORES = [
  { week: "W1 (Feb)", score: 64 },
  { week: "W2 (Feb)", score: 67 },
  { week: "W3 (Feb)", score: 66 },
  { week: "W4 (Mar)", score: 69 },
  { week: "W5 (Mar)", score: 71 },
  { week: "W6 (Mar)", score: 73 },
  { week: "W7 (Mar)", score: 71 },
  { week: "W8 (Mar)", score: 74 },
];

const MOCK_SKILL_BREAKDOWN = [
  { skill: "Structure & Organisation", score: 76, maxScore: 100 },
  { skill: "Language & Vocabulary", score: 68, maxScore: 100 },
  { skill: "Grammar & Punctuation", score: 72, maxScore: 100 },
  { skill: "Analysis & Evidence", score: 65, maxScore: 100 },
  { skill: "Creative Techniques", score: 70, maxScore: 100 },
  { skill: "Exam Technique", score: 61, maxScore: 100 },
];

interface StudentAtRisk {
  id: string;
  name: string;
  group: string;
  averageScore: number;
  recentTrend: "declining" | "stagnant";
  lastActive: string;
  concern: string;
}

const MOCK_STUDENTS_AT_RISK: StudentAtRisk[] = [
  {
    id: "4",
    name: "James Walker",
    group: "10B English Lang",
    averageScore: 58,
    recentTrend: "declining",
    lastActive: "2026-03-20",
    concern: "Score dropped 12% over last 3 essays",
  },
  {
    id: "8",
    name: "Daniel Kim",
    group: "10B English Lang",
    averageScore: 52,
    recentTrend: "stagnant",
    lastActive: "2026-03-15",
    concern: "Consistently below 60% — limited engagement",
  },
  {
    id: "6",
    name: "Liam Roberts",
    group: "10A English Lit",
    averageScore: 61,
    recentTrend: "declining",
    lastActive: "2026-03-18",
    concern: "Missed 2 assignments, score trending down",
  },
];

const maxScore = Math.max(...MOCK_WEEKLY_SCORES.map((w) => w.score), 100);

function scoreColor(score: number): string {
  if (score >= 80) return "text-green-500";
  if (score >= 60) return "text-amber-500";
  return "text-red-500";
}

function barColor(score: number): string {
  if (score >= 75) return "bg-green-500";
  if (score >= 65) return "bg-amber-500";
  return "bg-red-500";
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function AnalyticsPageClient() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Class Analytics</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track class performance, identify skill gaps, and support students
            who need help.
          </p>
        </div>
        {/* Stub: GET /api/teacher/analytics/export — export not yet implemented */}
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              alert("Export coming soon — this feature is under development.");
            }
          }}
          className="btn-outline gap-2 self-start"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export Report
        </button>
      </div>

      {/* ── Average Scores Over Time ────────────────────────────── */}
      <section aria-labelledby="scores-chart-heading">
        <h2 id="scores-chart-heading" className="text-lg font-semibold text-foreground mb-4">
          Average Scores Over Time
        </h2>
        <div className="card">
          {/* Simple CSS bar chart — consider replacing with Recharts for interactivity */}
          <div className="flex items-end gap-2 sm:gap-4 h-48">
            {MOCK_WEEKLY_SCORES.map((w) => (
              <div key={w.week} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-semibold text-foreground">G{percentageToGCSEGrade(w.score)}</span>
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
            Class average score by week. Trend is upward over 8 weeks.
          </p>
        </div>
      </section>

      {/* ── Skill/Topic Breakdown ───────────────────────────────── */}
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-lg font-semibold text-foreground mb-4">
          Skill Area Breakdown
        </h2>
        <div className="card space-y-4">
          {MOCK_SKILL_BREAKDOWN.map((skill) => (
            <div key={skill.skill}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-foreground">{skill.skill}</span>
                <span className={`text-sm font-bold ${gcseGradeColor(percentageToGCSEGrade(skill.score))}`}>
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
            Weakest area: Exam Technique (Grade 6). Consider targeted revision sessions.
          </p>
        </div>
      </section>

      {/* ── Students Who Need Support ───────────────────────────── */}
      <section aria-labelledby="at-risk-heading">
        <h2 id="at-risk-heading" className="text-lg font-semibold text-foreground mb-4">
          Students Who May Need Support
        </h2>
        {MOCK_STUDENTS_AT_RISK.length === 0 ? (
          <div className="card text-center py-8">
            <p className="text-muted-foreground">
              All students are performing within expected ranges.
            </p>
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
                        {student.recentTrend === "declining"
                          ? "Declining"
                          : "Stagnant"}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{student.group}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{student.concern}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-center">
                      <p className={`text-lg font-bold ${gcseGradeColor(percentageToGCSEGrade(student.averageScore))}`}>
                        Grade {percentageToGCSEGrade(student.averageScore)}
                      </p>
                      <p className="text-xs text-muted-foreground">Working At</p>
                    </div>
                    {/* Links to student list — per-student profile route not yet implemented */}
                    <Link
                      href="/dashboard/teacher/students"
                      className="btn-outline text-xs px-3 py-1.5"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Summary Stats Row ───────────────────────────────────── */}
      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="text-lg font-semibold text-foreground mb-4">
          Summary
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card text-center">
            <p className="text-3xl font-bold text-primary">32</p>
            <p className="text-sm text-muted-foreground mt-1">Total Students</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-green-500">+10%</p>
            <p className="text-sm text-muted-foreground mt-1">Score Improvement (8 weeks)</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-amber-500">3</p>
            <p className="text-sm text-muted-foreground mt-1">Students Need Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
