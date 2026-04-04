"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Users, Search, Filter, ChevronLeft, ChevronRight, GraduationCap, AlertTriangle, TrendingUp, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DEMO_STUDENTS, DEMO_CLASSES } from "@/data/demo-data"

// ---------------------------------------------------------------------------
// Derive enriched student data from the base demo data
// ---------------------------------------------------------------------------

type StudentStatus = "On Track" | "Needs Support" | "At Risk" | "Excelling"

interface EnrichedStudent {
  id: string
  name: string
  email: string
  yearGroup: number
  className: string
  classId: string
  progress: number
  averageScore: number
  status: StudentStatus
  lastActive: string
  initials: string
}

function seededHash(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

function deriveStatus(progress: number, atRisk: boolean): StudentStatus {
  if (atRisk) return progress < 35 ? "At Risk" : "Needs Support"
  if (progress >= 85) return "Excelling"
  return "On Track"
}

function deriveEmail(name: string, id: string): string {
  const parts = name.toLowerCase().split(" ")
  const num = seededHash(id) % 99
  return `${parts[0]}.${parts[parts.length - 1]}${num}@riverside.edu`
}

function deriveAverageScore(progress: number, id: string): number {
  const offset = (seededHash(id) % 21) - 10
  return Math.max(20, Math.min(100, progress + offset))
}

function getInitials(name: string): string {
  const parts = name.split(" ")
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")
}

// Generate additional students to fill 342 total
function generateExtraStudents(): EnrichedStudent[] {
  const firstNames = [
    "Oliver", "Amelia", "Noah", "Isla", "Ethan", "Ava", "James", "Mia",
    "William", "Emily", "Benjamin", "Charlotte", "Lucas", "Ella", "Henry", "Grace",
    "Alexander", "Lily", "Daniel", "Freya", "Matthew", "Poppy", "Samuel", "Evie",
    "Harry", "Florence", "Oscar", "Willow", "Charlie", "Sienna", "George", "Phoebe",
    "Thomas", "Ivy", "Jacob", "Isabella", "Leo", "Daisy", "Archie", "Sophie",
    "Joshua", "Alice", "Max", "Ruby", "Arthur", "Elsie", "Joseph", "Maisie",
    "Edward", "Harper", "Sebastian", "Aria", "Adam", "Luna", "Ryan", "Chloe",
    "Nathan", "Matilda", "Dylan", "Eliza", "Zach", "Penelope", "Finn", "Violet",
    "Marcus", "Jasmine", "Owen", "Scarlett", "Connor", "Hannah",
  ]
  const lastNames = [
    "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Wilson", "Evans",
    "Thomas", "Johnson", "Roberts", "Walker", "Wright", "Robinson", "Thompson", "White",
    "Hughes", "Edwards", "Green", "Hall", "Lewis", "Harris", "Clarke", "Patel",
    "Jackson", "Wood", "Turner", "Martin", "Cooper", "Hill", "Ward", "Morris",
    "Moore", "Clark", "Lee", "King", "Baker", "Harrison", "Morgan", "Allen",
    "Scott", "Phillips", "Watson", "Davis", "Parker", "Price", "Bennett", "Young",
  ]
  const classIds = DEMO_CLASSES.map((c) => c.id)
  const classMap = Object.fromEntries(DEMO_CLASSES.map((c) => [c.id, c]))

  const lastActiveTimes = [
    "Just now", "5 minutes ago", "12 minutes ago", "30 minutes ago",
    "1 hour ago", "2 hours ago", "3 hours ago", "5 hours ago",
    "Yesterday", "2 days ago", "3 days ago", "5 days ago", "1 week ago", "2 weeks ago",
  ]

  const extras: EnrichedStudent[] = []
  const needed = 342 - DEMO_STUDENTS.length

  for (let i = 0; i < needed; i++) {
    const seed = i * 16807 + 12345
    const r1 = Math.abs((seed * 48271) % 2147483647)
    const r2 = Math.abs((seed * 16807) % 2147483647)
    const r3 = Math.abs((seed * 69621) % 2147483647)
    const r4 = Math.abs((seed * 39017) % 2147483647)
    const r5 = Math.abs((seed * 52891) % 2147483647)

    const firstName = firstNames[r1 % firstNames.length]
    const lastName = lastNames[r2 % lastNames.length]
    const name = `${firstName} ${lastName}`
    const cId = classIds[r3 % classIds.length]
    const cls = classMap[cId]
    const progress = r4 % 101
    const id = `s-${String(DEMO_STUDENTS.length + i + 1).padStart(3, "0")}`

    let status: StudentStatus
    const statusRoll = r5 % 100
    if (statusRoll < 3) {
      status = "At Risk"
    } else if (statusRoll < 7) {
      status = "Needs Support"
    } else if (statusRoll < 25) {
      status = "Excelling"
    } else {
      status = "On Track"
    }

    extras.push({
      id,
      name,
      email: deriveEmail(name, id),
      yearGroup: parseInt(cls.yearGroup.replace(/\D/g, ""), 10),
      className: cls.name,
      classId: cId,
      progress,
      averageScore: deriveAverageScore(progress, id),
      status,
      lastActive: lastActiveTimes[r3 % lastActiveTimes.length],
      initials: getInitials(name),
    })
  }
  return extras
}

const ALL_STUDENTS = [
  ...DEMO_STUDENTS.map((s) => ({
    id: s.id,
    name: s.name,
    email: deriveEmail(s.name, s.id),
    yearGroup: parseInt(s.yearGroup.replace(/\D/g, ""), 10),
    className: s.className,
    classId: s.classId,
    progress: s.overallProgress,
    averageScore: deriveAverageScore(s.overallProgress, s.id),
    status: deriveStatus(s.overallProgress, s.atRisk),
    lastActive: s.lastActive,
    initials: getInitials(s.name),
  })),
  ...generateExtraStudents(),
]

// ---------------------------------------------------------------------------
// Colour helpers
// ---------------------------------------------------------------------------

const STATUS_COLORS: Record<StudentStatus, string> = {
  "On Track": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Needs Support": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "At Risk": "bg-red-500/15 text-red-400 border-red-500/30",
  "Excelling": "bg-blue-500/15 text-blue-400 border-blue-500/30",
}

const YEAR_COLORS: Record<number, string> = {
  7: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  8: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  9: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  10: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  11: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  12: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  13: "bg-pink-500/15 text-pink-400 border-pink-500/30",
}

const INITIALS_COLORS = [
  "bg-violet-500/20 text-violet-300",
  "bg-blue-500/20 text-blue-300",
  "bg-cyan-500/20 text-cyan-300",
  "bg-emerald-500/20 text-emerald-300",
  "bg-amber-500/20 text-amber-300",
  "bg-rose-500/20 text-rose-300",
  "bg-pink-500/20 text-pink-300",
  "bg-indigo-500/20 text-indigo-300",
]

function progressBarColor(progress: number): string {
  if (progress >= 80) return "bg-emerald-500"
  if (progress >= 50) return "bg-amber-500"
  return "bg-red-500"
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

const ITEMS_PER_PAGE = 25

const YEAR_OPTIONS = [7, 8, 9, 10, 11, 12, 13]
const STATUS_OPTIONS: StudentStatus[] = ["On Track", "Needs Support", "At Risk", "Excelling"]

export default function StudentsPage() {
  const [search, setSearch] = useState("")
  const [yearFilter, setYearFilter] = useState<number | "all">("all")
  const [statusFilter, setStatusFilter] = useState<StudentStatus | "all">("all")
  const [classFilter, setClassFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Unique class names for filter dropdown
  const classNames = useMemo(() => {
    const set = new Set(ALL_STUDENTS.map((s) => s.className))
    return Array.from(set).sort()
  }, [])

  // Filtered students
  const filtered = useMemo(() => {
    return ALL_STUDENTS.filter((s) => {
      if (search) {
        const q = search.toLowerCase()
        if (!s.name.toLowerCase().includes(q) && !s.email.toLowerCase().includes(q)) {
          return false
        }
      }
      if (yearFilter !== "all" && s.yearGroup !== yearFilter) return false
      if (statusFilter !== "all" && s.status !== statusFilter) return false
      if (classFilter !== "all" && s.className !== classFilter) return false
      return true
    })
  }, [search, yearFilter, statusFilter, classFilter])

  // Stats (always from full dataset)
  const stats = useMemo(() => {
    const total = ALL_STUDENTS.length
    const activeThisWeek = ALL_STUDENTS.filter(
      (s) => !s.lastActive.includes("week") && !s.lastActive.includes("days")
    ).length
    const needsSupport = ALL_STUDENTS.filter((s) => s.status === "Needs Support").length
    const atRisk = ALL_STUDENTS.filter((s) => s.status === "At Risk").length
    return { total, activeThisWeek, needsSupport, atRisk }
  }, [])

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filtered.slice(start, start + ITEMS_PER_PAGE)
  }, [filtered, currentPage])

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [search, yearFilter, statusFilter, classFilter])

  // Bulk selection
  const allOnPageSelected = paginated.length > 0 && paginated.every((s) => selectedIds.has(s.id))

  function toggleAll() {
    if (allOnPageSelected) {
      const next = new Set(selectedIds)
      paginated.forEach((s) => next.delete(s.id))
      setSelectedIds(next)
    } else {
      const next = new Set(selectedIds)
      paginated.forEach((s) => next.add(s.id))
      setSelectedIds(next)
    }
  }

  function toggleOne(id: string) {
    const next = new Set(selectedIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelectedIds(next)
  }

  function showToast(msg: string) {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  // Page number array for pagination
  function getPageNumbers(): (number | "...")[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: (number | "...")[] = [1]
    if (currentPage > 3) pages.push("...")
    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)
    for (let i = start; i <= end; i++) pages.push(i)
    if (currentPage < totalPages - 2) pages.push("...")
    pages.push(totalPages)
    return pages
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Students</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and monitor all students across your school.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 pt-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Total Students</p>
              <p className="text-2xl font-bold text-foreground">{stats.total}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 pt-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Active This Week</p>
              <p className="text-2xl font-bold text-foreground">{stats.activeThisWeek}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 pt-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Needs Support</p>
              <p className="text-2xl font-bold text-foreground">{stats.needsSupport}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 pt-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/15">
              <TrendingUp className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">At Risk</p>
              <p className="text-2xl font-bold text-foreground">{stats.atRisk}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter bar */}
      <Card>
        <CardContent className="pt-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Year Group */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
              <select
                value={yearFilter === "all" ? "all" : String(yearFilter)}
                onChange={(e) => setYearFilter(e.target.value === "all" ? "all" : Number(e.target.value))}
                className="h-10 rounded-lg border border-input bg-transparent px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/25"
              >
                <option value="all">All Years</option>
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y}>Year {y}</option>
                ))}
              </select>
            </div>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StudentStatus | "all")}
              className="h-10 rounded-lg border border-input bg-transparent px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/25"
            >
              <option value="all">All Statuses</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {/* Class */}
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="h-10 rounded-lg border border-input bg-transparent px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/25"
            >
              <option value="all">All Classes</option>
              {classNames.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Bulk actions bar */}
      {selectedIds.size > 0 && (
        <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
          <span className="text-sm font-medium text-foreground">
            {selectedIds.size} student{selectedIds.size !== 1 ? "s" : ""} selected
          </span>
          <div className="flex-1" />
          <Button
            variant="outline"
            size="sm"
            onClick={() => showToast("Available with full account")}
          >
            Send Message
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => showToast("Available with full account")}
          >
            Export
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => showToast("Available with full account")}
          >
            Assign Class
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedIds(new Set())}
          >
            Clear
          </Button>
        </div>
      )}

      {/* Student table */}
      <Card>
        <CardHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              Student List
              <Badge variant="secondary" className="ml-2 text-xs">{filtered.length}</Badge>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="w-10 px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={allOnPageSelected}
                      onChange={toggleAll}
                      className="h-4 w-4 rounded border-input accent-primary"
                    />
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">Email</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Year</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">Class</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Progress</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden sm:table-cell">Avg Score</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden xl:table-cell">Last Active</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((student) => {
                  const avatarColor = INITIALS_COLORS[seededHash(student.id) % INITIALS_COLORS.length]
                  return (
                    <tr
                      key={student.id}
                      className="group border-b border-border/50 transition-colors hover:bg-muted/20 cursor-pointer"
                      onClick={() => {
                        window.location.href = `/demo/school/students/${student.id}`
                      }}
                    >
                      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={selectedIds.has(student.id)}
                          onChange={() => toggleOne(student.id)}
                          className="h-4 w-4 rounded border-input accent-primary"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/demo/school/students/${student.id}`}
                          className="flex items-center gap-3"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${avatarColor}`}>
                            {student.initials}
                          </div>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                            {student.name}
                          </span>
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                        {student.email}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${YEAR_COLORS[student.yearGroup] ?? "bg-gray-500/15 text-gray-400 border-gray-500/30"}`}>
                          Y{student.yearGroup}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell whitespace-nowrap">
                        {student.className}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-20 overflow-hidden rounded-full bg-muted">
                            <div
                              className={`h-full rounded-full transition-all ${progressBarColor(student.progress)}`}
                              style={{ width: `${student.progress}%` }}
                            />
                          </div>
                          <span className="text-xs tabular-nums text-muted-foreground">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className="tabular-nums text-foreground">{student.averageScore}%</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold whitespace-nowrap ${STATUS_COLORS[student.status]}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden xl:table-cell whitespace-nowrap">
                        {student.lastActive}
                      </td>
                    </tr>
                  )
                })}
                {paginated.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-muted-foreground">
                      No students match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}
            {" - "}
            {Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} students
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {getPageNumbers().map((page, idx) =>
              page === "..." ? (
                <span key={`dots-${idx}`} className="px-2 text-sm text-muted-foreground">
                  ...
                </span>
              ) : (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="icon-sm"
                  onClick={() => setCurrentPage(page)}
                  className="min-w-[2rem]"
                >
                  {page}
                </Button>
              )
            )}
            <Button
              variant="outline"
              size="icon-sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="flex items-center gap-3 rounded-xl border border-amber-500/30 bg-card px-5 py-3 shadow-lg">
            <GraduationCap className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-medium text-foreground">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  )
}
