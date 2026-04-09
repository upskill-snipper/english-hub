"use client"
export const dynamic = "force-dynamic"

import { useState } from "react"
import Link from "next/link"
import { percentageToGCSEGrade, gcseGradeColor, predictedGradeColor } from "@/lib/grades"
import { DEMO_STUDENTS } from "@/data/demo-data"
import DemoBanner from "@/components/demo/DemoBanner"
import { useScrollRestore } from "@/hooks/useScrollRestore"

// Mrs Mitchell teaches these three classes in the demo
const MITCHELL_CLASSES = [
  { id: "mc-001", name: "10A English", yearGroup: 10 },
  { id: "mc-002", name: "11B English", yearGroup: 11 },
  { id: "mc-003", name: "13 A-Level Lang", yearGroup: 13 },
] as const

type MitchellClassId = (typeof MITCHELL_CLASSES)[number]["id"]

// Map DEMO_STUDENTS onto Mrs Mitchell's classes for the teacher view
const MITCHELL_STUDENTS = [
  { ...DEMO_STUDENTS[0], className: "10A English", classId: "mc-001", score: 74 },
  { ...DEMO_STUDENTS[1], className: "10A English", classId: "mc-001", score: 39 },
  { ...DEMO_STUDENTS[4], className: "10A English", classId: "mc-001", score: 68 },
  { ...DEMO_STUDENTS[6], className: "10A English", classId: "mc-001", score: 31 },
  { ...DEMO_STUDENTS[12], className: "10A English", classId: "mc-001", score: 66 },
  { ...DEMO_STUDENTS[2], className: "11B English", classId: "mc-002", score: 88 },
  { ...DEMO_STUDENTS[8], className: "11B English", classId: "mc-002", score: 91 },
  { ...DEMO_STUDENTS[13], className: "11B English", classId: "mc-002", score: 42 },
  { ...DEMO_STUDENTS[5], className: "11B English", classId: "mc-002", score: 82 },
  { ...DEMO_STUDENTS[10], className: "11B English", classId: "mc-002", score: 79 },
  { ...DEMO_STUDENTS[9], className: "13 A-Level Lang", classId: "mc-003", score: 28 },
  { ...DEMO_STUDENTS[3], className: "13 A-Level Lang", classId: "mc-003", score: 35 },
  { ...DEMO_STUDENTS[7], className: "13 A-Level Lang", classId: "mc-003", score: 63 },
  { ...DEMO_STUDENTS[11], className: "13 A-Level Lang", classId: "mc-003", score: 59 },
  { ...DEMO_STUDENTS[14], className: "13 A-Level Lang", classId: "mc-003", score: 72 },
]

function statusBadge(atRisk: boolean) {
  if (atRisk) {
    return (
      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide bg-red-500/15 text-red-400 border border-red-500/20">
        At Risk
      </span>
    )
  }
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
      On Track
    </span>
  )
}

export default function TeacherStudentsPage() {
  useScrollRestore()
  const [classFilter, setClassFilter] = useState<MitchellClassId | "all">("all")

  const filtered =
    classFilter === "all"
      ? MITCHELL_STUDENTS
      : MITCHELL_STUDENTS.filter((s) => s.classId === classFilter)

  // At-risk students first
  const sorted = [...filtered].sort((a, b) => {
    if (a.atRisk && !b.atRisk) return -1
    if (!a.atRisk && b.atRisk) return 1
    return a.name.localeCompare(b.name)
  })

  const atRiskCount = filtered.filter((s) => s.atRisk).length

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DemoBanner message="You are viewing an interactive demo with sample data. No real student data is used." />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/demo/teacher"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white/70 transition-colors mb-6"
        >
          <span className="text-base leading-none">&larr;</span> Teacher Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">
            Mrs Mitchell
          </p>
          <div className="flex items-baseline gap-3">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white/90">
              My Students
            </h1>
            <span className="text-lg text-neutral-500 tabular-nums">{filtered.length}</span>
          </div>
          <p className="text-neutral-500 text-sm mt-1 max-w-lg">
            Track progress, scores, and engagement across your classes.
          </p>
          {atRiskCount > 0 && (
            <p className="text-red-400/80 text-sm mt-2">
              {atRiskCount} student{atRiskCount > 1 ? "s" : ""} flagged as at risk
            </p>
          )}
        </div>

        {/* Class Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setClassFilter("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors border ${
              classFilter === "all"
                ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                : "bg-white/[0.04] text-neutral-300 border-white/10 hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            All Classes ({MITCHELL_STUDENTS.length})
          </button>
          {MITCHELL_CLASSES.map((cls) => {
            const count = MITCHELL_STUDENTS.filter((s) => s.classId === cls.id).length
            return (
              <button
                key={cls.id}
                onClick={() => setClassFilter(cls.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors border ${
                  classFilter === cls.id
                    ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                    : "bg-white/[0.04] text-neutral-300 border-white/10 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {cls.name} ({count})
              </button>
            )
          })}
        </div>

        {/* Class Report Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {MITCHELL_CLASSES.map((cls) => (
            <button
              key={cls.id}
              onClick={() => {
                const toast = document.getElementById("demo-toast")
                if (toast) {
                  toast.textContent = "Class reports available with full account"
                  toast.classList.remove("opacity-0", "translate-y-2")
                  toast.classList.add("opacity-100", "translate-y-0")
                  setTimeout(() => {
                    toast.classList.remove("opacity-100", "translate-y-0")
                    toast.classList.add("opacity-0", "translate-y-2")
                  }, 2500)
                }
              }}
              className="rounded-lg px-4 py-2 text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
            >
              View Class Report: {cls.name}
            </button>
          ))}
        </div>

        {/* Grade Summary */}
        {filtered.length > 0 && (() => {
          const avgWorking = Math.round(filtered.reduce((sum, s) => sum + s.workingAtGrade, 0) / filtered.length)
          const avgPredicted = Math.round(filtered.reduce((sum, s) => sum + s.predictedGrade, 0) / filtered.length)
          const gradeDist = [9, 8, 7, 6, 5, 4, 3, 2, 1].map((g) => ({
            grade: g,
            count: filtered.filter((s) => s.workingAtGrade === g).length,
          })).filter((g) => g.count > 0)

          return (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Avg Working At Grade</p>
                <p className={`text-2xl font-light tabular-nums ${gcseGradeColor(avgWorking)}`}>Grade {avgWorking}</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Avg Predicted Grade</p>
                <p className={`text-2xl font-light tabular-nums ${predictedGradeColor(avgPredicted, avgWorking)}`}>Grade {avgPredicted}</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Grade Distribution</p>
                <div className="flex flex-wrap gap-2">
                  {gradeDist.map((g) => (
                    <span key={g.grade} className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium border ${gcseGradeColor(g.grade)} border-white/10 bg-white/[0.03]`}>
                      G{g.grade}: {g.count}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })()}

        {/* Student Table */}
        <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_110px_80px_80px_80px_90px_100px] gap-4 px-5 py-3 border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span>Name</span>
            <span>Class</span>
            <span className="text-center">Working At</span>
            <span className="text-center">Predicted</span>
            <span className="text-center">Target</span>
            <span className="text-center">Status</span>
            <span className="text-right">Last Active</span>
          </div>

          {/* Student rows */}
          {sorted.map((student) => (
            <Link
              key={student.id}
              href={`/demo/teacher/students/${student.id}`}
              className={`group grid grid-cols-1 sm:grid-cols-[1fr_110px_80px_80px_80px_90px_100px] gap-1 sm:gap-4 px-5 py-4 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors cursor-pointer ${
                student.atRisk ? "bg-red-500/[0.03]" : ""
              }`}
            >
              {/* Name */}
              <div className="flex items-center gap-3">
                <div
                  className={`h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-[11px] font-medium ${
                    student.atRisk
                      ? "bg-red-500/15 text-red-400"
                      : "bg-gradient-to-br from-white/10 to-white/5 text-white/60"
                  }`}
                >
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm text-white/90 group-hover:text-white transition-colors">
                    {student.name}
                  </p>
                  <p className="text-[11px] text-neutral-600 sm:hidden">
                    {student.className} &middot; Year {student.yearGroup}
                  </p>
                </div>
              </div>

              {/* Class */}
              <div className="hidden sm:flex items-center">
                <p className="text-sm text-neutral-400">{student.className}</p>
              </div>

              {/* Working At Grade */}
              <div className="hidden sm:flex items-center justify-center">
                <span
                  className={`text-sm tabular-nums font-medium ${gcseGradeColor(student.workingAtGrade)}`}
                >
                  {student.workingAtGrade}
                </span>
              </div>

              {/* Predicted Grade */}
              <div className="hidden sm:flex items-center justify-center">
                <span
                  className={`text-sm tabular-nums font-medium ${predictedGradeColor(student.predictedGrade, student.workingAtGrade)}`}
                >
                  {student.predictedGrade}
                </span>
              </div>

              {/* Target Grade */}
              <div className="hidden sm:flex items-center justify-center">
                <span className="text-sm tabular-nums font-medium text-violet-400">
                  {student.targetGrade}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center sm:justify-center">
                {statusBadge(student.atRisk)}
              </div>

              {/* Last Active */}
              <div className="hidden sm:flex items-center justify-end">
                <span
                  className={`text-sm tabular-nums ${
                    student.lastActive.includes("week") || student.lastActive.includes("days")
                      ? "text-red-400/70"
                      : "text-neutral-500"
                  }`}
                >
                  {student.lastActive}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Demo data &middot; {filtered.length} students &middot; {MITCHELL_CLASSES.length} classes
        </p>
      </div>

      {/* Toast */}
      <div
        id="demo-toast"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm px-5 py-3 rounded-xl opacity-0 translate-y-2 transition-all duration-300 pointer-events-none z-50"
      />
    </div>
  )
}
