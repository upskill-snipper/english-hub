"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { BookOpen, Users, Plus, Search, X, GraduationCap } from "lucide-react"
import { toast } from "sonner"
import { DEMO_CLASSES, DEMO_STUDENTS } from "@/data/demo-data"
import { ReadingAgeInline } from "@/components/ReadingProfileCard"
import { useScrollRestore } from "@/hooks/useScrollRestore"
import { percentageToGCSEGrade } from "@/lib/grades"

function boardBadgeClass(board: string): string {
  switch (board) {
    case "AQA":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20"
    case "Edexcel":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20"
    case "OCR":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    case "WJEC":
      return "bg-red-500/10 text-red-400 border-red-500/20"
    case "CAIE IGCSE":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20"
    case "KS3":
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    default:
      return "bg-neutral-500/10 text-neutral-400 border-neutral-500/20"
  }
}

function progressBarColor(pct: number): string {
  if (pct >= 70) return "bg-green-500"
  if (pct >= 40) return "bg-amber-500"
  return "bg-red-500"
}

export default function DemoClassesPage() {
  useScrollRestore()
  const [search, setSearch] = useState("")

  const classesWithStats = useMemo(() => {
    return DEMO_CLASSES.map((cls) => {
      const students = DEMO_STUDENTS.filter((s) => s.classId === cls.id)
      const actualStudentCount = students.length > 0 ? students.length : cls.studentCount
      const avgScore =
        students.length > 0
          ? Math.round(students.reduce((sum, s) => sum + s.averageScore, 0) / students.length)
          : cls.avgScore
      const studentsWithRA = students.filter((s) => s.readingAge != null)
      const avgReadingAge = studentsWithRA.length > 0
        ? Math.round(studentsWithRA.reduce((sum, s) => sum + (s.readingAge ?? 0), 0) / studentsWithRA.length)
        : null
      return { ...cls, actualStudentCount, computedAvgScore: avgScore, avgReadingAge }
    })
  }, [])

  const filtered = useMemo(() => {
    if (!search.trim()) return classesWithStats
    const q = search.toLowerCase()
    return classesWithStats.filter(
      (cls) =>
        cls.name.toLowerCase().includes(q) ||
        cls.teacher.toLowerCase().includes(q) ||
        cls.examBoard.toLowerCase().includes(q) ||
        cls.yearGroup.toLowerCase().includes(q)
    )
  }, [search, classesWithStats])

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Classes</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {DEMO_CLASSES.length} classes across all year groups
          </p>
        </div>
        <button
          onClick={() =>
            toast.info("Available with full account", {
              description: "Register your school to create and manage classes.",
            })
          }
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          Create Class
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search classes by name, teacher, exam board..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border bg-card pl-10 pr-10 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-16 text-center">
          <BookOpen className="h-10 w-10 text-muted-foreground/50 mb-3" />
          <p className="text-sm text-muted-foreground">No classes match your search.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cls) => (
            <Link
              key={cls.id}
              href={`/demo/school/classes/${cls.id}`}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              {/* Class name */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {cls.name}
                </h3>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="inline-flex items-center rounded-md border px-1.5 py-0.5 text-[10px] font-medium bg-secondary/50 text-secondary-foreground border-border">
                    {cls.yearGroup}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-md border px-1.5 py-0.5 text-[10px] font-medium ${boardBadgeClass(cls.examBoard)}`}
                  >
                    {cls.examBoard}
                  </span>
                </div>
              </div>

              {/* Teacher */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                <GraduationCap className="h-3.5 w-3.5" />
                {cls.teacher}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                    Students
                  </p>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-semibold">{cls.actualStudentCount}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                    Avg Score
                  </p>
                  <span className="text-sm font-semibold">{cls.computedAvgScore}% <span className="text-xs font-normal text-muted-foreground">(G{percentageToGCSEGrade(cls.computedAvgScore)})</span></span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                    Reading Age
                  </p>
                  <span className="text-sm font-semibold">
                    <ReadingAgeInline readingAge={cls.avgReadingAge} yearGroup={cls.yearGroup} />
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                    Completion
                  </p>
                  <span className="text-sm font-semibold">{cls.completionRate}%</span>
                </div>
              </div>

              {/* Completion bar */}
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${progressBarColor(cls.completionRate)}`}
                  style={{ width: `${cls.completionRate}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
