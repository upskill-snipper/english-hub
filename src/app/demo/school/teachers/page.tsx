"use client"

import Link from "next/link"
import { DEMO_TEACHERS, DEMO_CLASSES } from "@/data/demo-data"
import DemoBanner from "@/components/demo/DemoBanner"

const ROLE_MAP: Record<string, "HOD" | "Teacher"> = {
  "t-001": "HOD",
  "t-003": "HOD",
}

const LAST_ACTIVE_MAP: Record<string, string> = {
  "t-001": "Today",
  "t-002": "Today",
  "t-003": "Yesterday",
  "t-004": "Today",
  "t-005": "Today",
  "t-006": "Yesterday",
  "t-007": "Today",
  "t-008": "2 days ago",
  "t-009": "Today",
  "t-010": "Today",
  "t-011": "3 days ago",
  "t-012": "Today",
  "t-013": "Yesterday",
  "t-014": "Today",
  "t-015": "Today",
  "t-016": "1 week ago",
  "t-017": "Today",
  "t-018": "1 week ago",
}

function getRole(id: string): "HOD" | "Teacher" {
  return ROLE_MAP[id] || "Teacher"
}

function getLastActive(id: string): string {
  return LAST_ACTIVE_MAP[id] || "Today"
}

function getClassesForTeacher(teacherId: string) {
  return DEMO_CLASSES.filter((c) => c.teacherId === teacherId)
}

export default function TeachersListPage() {
  const totalTeachers = DEMO_TEACHERS.length
  const activeThisWeek = DEMO_TEACHERS.filter(
    (t) => !["1 week ago"].includes(getLastActive(t.id))
  ).length
  const totalClasses = DEMO_CLASSES.length

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DemoBanner message="You are viewing an interactive demo with sample data. No real teacher data is used." />

      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">
            Riverside Academy
          </p>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white/90 mb-2">
            Teachers
          </h1>
          <p className="text-neutral-500 text-sm max-w-lg">
            Manage your English department staff, view workload, and track teaching activity.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
              Total Teachers
            </p>
            <p className="text-3xl font-light text-white/90 tabular-nums">{totalTeachers}</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
              Active This Week
            </p>
            <p className="text-3xl font-light text-emerald-400 tabular-nums">{activeThisWeek}</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
              Classes Covered
            </p>
            <p className="text-3xl font-light text-cyan-400 tabular-nums">{totalClasses}</p>
          </div>
        </div>

        {/* Teacher Table */}
        <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_1fr_100px_100px_120px] gap-4 px-5 py-3 border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
            <span className="text-center">Classes</span>
            <span className="text-right">Last Active</span>
          </div>

          {/* Teacher rows */}
          {DEMO_TEACHERS.map((teacher) => {
            const role = getRole(teacher.id)
            const lastActive = getLastActive(teacher.id)
            const classes = getClassesForTeacher(teacher.id)
            const isInactive = lastActive === "1 week ago"

            return (
              <Link
                key={teacher.id}
                href={`/demo/school/teachers/${teacher.id}`}
                className="group grid grid-cols-1 sm:grid-cols-[1fr_1fr_100px_100px_120px] gap-1 sm:gap-4 px-5 py-4 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors cursor-pointer"
              >
                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-[11px] font-medium text-white/60">
                    {teacher.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm text-white/90 group-hover:text-white transition-colors">
                      {teacher.name}
                    </p>
                    <p className="text-[11px] text-neutral-600 sm:hidden">{teacher.email}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="hidden sm:flex items-center">
                  <p className="text-sm text-neutral-500 truncate">{teacher.email}</p>
                </div>

                {/* Role badge */}
                <div className="flex items-center sm:justify-start">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide ${
                      role === "HOD"
                        ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                        : "bg-white/5 text-neutral-400 border border-white/5"
                    }`}
                  >
                    {role}
                  </span>
                </div>

                {/* Classes count */}
                <div className="flex items-center sm:justify-center">
                  <span className="text-sm text-white/70 tabular-nums sm:text-center">
                    <span className="sm:hidden text-neutral-600 text-[11px] mr-1">Classes:</span>
                    {classes.length}
                  </span>
                </div>

                {/* Last Active */}
                <div className="flex items-center sm:justify-end">
                  <span
                    className={`text-sm tabular-nums ${
                      isInactive ? "text-red-400/70" : "text-neutral-500"
                    }`}
                  >
                    <span className="sm:hidden text-neutral-600 text-[11px] mr-1">Active:</span>
                    {lastActive}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Demo data &middot; {totalTeachers} teachers &middot; {totalClasses} classes
        </p>
      </div>
    </div>
  )
}
