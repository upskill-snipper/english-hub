"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import {
  GraduationCap,
  UserPlus,
  Upload,
  Search,
  Filter,
  MoreHorizontal,
  Key,
  Trash2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  RefreshCw,
  Eye,
  MoveRight,
  Ban,
  Hash,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

// ── Types ──────────────────────────────────────────────────────────────────────

type StudentStatus = "active" | "inactive" | "suspended"

interface Student {
  id: string
  firstName: string
  lastName: string
  email: string
  yearGroup: string
  className: string | null
  lastActive: string | null
  progress: number
  status: StudentStatus
}

// ── Constants ─────────────────────────────────────────────────────────────────

const YEAR_GROUPS = [
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12",
  "Year 13",
]

const MOCK_CLASSES = ["7A", "7B", "8A", "8B", "9A", "9B", "10A", "10B", "11A", "11B", "11C", "12A", "13A"]

const PAGE_SIZE = 25

// ── Mock data ──────────────────────────────────────────────────────────────────

const MOCK_STUDENTS: Student[] = [
  { id: "1",  firstName: "Oliver",   lastName: "Bennett",    email: "o.bennett@school.edu",    yearGroup: "Year 10", className: "10B",  lastActive: new Date(Date.now() - 2 * 864e5).toISOString(),  progress: 72, status: "active" },
  { id: "2",  firstName: "Amara",    lastName: "Osei",       email: "a.osei@school.edu",       yearGroup: "Year 9",  className: "9A",   lastActive: new Date(Date.now() - 0).toISOString(),           progress: 88, status: "active" },
  { id: "3",  firstName: "Lucas",    lastName: "Fernandez",  email: "l.fernandez@school.edu",  yearGroup: "Year 10", className: "10B",  lastActive: null,                                             progress: 12, status: "inactive" },
  { id: "4",  firstName: "Chloe",    lastName: "Walsh",      email: "c.walsh@school.edu",      yearGroup: "Year 11", className: "11C",  lastActive: new Date(Date.now() - 2 * 864e5).toISOString(),  progress: 61, status: "active" },
  { id: "5",  firstName: "Fatima",   lastName: "Al-Rashid",  email: "f.alrashid@school.edu",   yearGroup: "Year 9",  className: "9A",   lastActive: new Date(Date.now() - 0).toISOString(),           progress: 95, status: "active" },
  { id: "6",  firstName: "Thomas",   lastName: "Griffiths",  email: "t.griffiths@school.edu",  yearGroup: "Year 11", className: "11C",  lastActive: new Date(Date.now() - 5 * 864e5).toISOString(),  progress: 34, status: "suspended" },
  { id: "7",  firstName: "Ethan",    lastName: "Clarke",     email: "e.clarke@school.edu",     yearGroup: "Year 10", className: "10A",  lastActive: new Date(Date.now() - 1 * 864e5).toISOString(),  progress: 58, status: "active" },
  { id: "8",  firstName: "Sophie",   lastName: "Turner",     email: "s.turner@school.edu",     yearGroup: "Year 12", className: "12A",  lastActive: new Date(Date.now() - 3 * 864e5).toISOString(),  progress: 81, status: "active" },
  { id: "9",  firstName: "Jayden",   lastName: "Okafor",     email: "j.okafor@school.edu",     yearGroup: "Year 8",  className: "8B",   lastActive: null,                                             progress: 5,  status: "inactive" },
  { id: "10", firstName: "Isla",     lastName: "MacLeod",    email: "i.macleod@school.edu",    yearGroup: "Year 7",  className: "7A",   lastActive: new Date(Date.now() - 0).toISOString(),           progress: 43, status: "active" },
  { id: "11", firstName: "Reuben",   lastName: "Fletcher",   email: "r.fletcher@school.edu",   yearGroup: "Year 13", className: "13A",  lastActive: new Date(Date.now() - 7 * 864e5).toISOString(),  progress: 77, status: "active" },
  { id: "12", firstName: "Mei",      lastName: "Zhang",      email: "m.zhang@school.edu",      yearGroup: "Year 9",  className: "9B",   lastActive: new Date(Date.now() - 14 * 864e5).toISOString(), progress: 50, status: "active" },
  { id: "13", firstName: "Aaron",    lastName: "Patel",      email: "a.patel@school.edu",      yearGroup: "Year 11", className: "11A",  lastActive: new Date(Date.now() - 1 * 864e5).toISOString(),  progress: 67, status: "active" },
  { id: "14", firstName: "Niamh",    lastName: "O'Brien",    email: "n.obrien@school.edu",     yearGroup: "Year 10", className: "10A",  lastActive: new Date(Date.now() - 21 * 864e5).toISOString(), progress: 29, status: "inactive" },
  { id: "15", firstName: "Callum",   lastName: "Reid",       email: "c.reid@school.edu",       yearGroup: "Year 8",  className: "8A",   lastActive: new Date(Date.now() - 0).toISOString(),           progress: 91, status: "active" },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function getInitials(first: string, last: string): string {
  return `${first[0] ?? ""}${last[0] ?? ""}`.toUpperCase()
}

function formatRelativeTime(dateStr: string | null): string {
  if (!dateStr) return "Never"
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 864e5)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  if (mins < 2) return "Just now"
  if (hours < 1) return `${mins} minutes ago`
  if (days < 1) return "Today"
  if (days === 1) return "Yesterday"
  if (days < 7) return `${days} days ago`
  if (weeks === 1) return "1 week ago"
  if (weeks < 5) return `${weeks} weeks ago`
  if (months === 1) return "1 month ago"
  return `${months} months ago`
}

function progressBarColor(pct: number): string {
  if (pct >= 70) return "bg-emerald-500"
  if (pct >= 40) return "bg-amber-500"
  return "bg-red-500"
}

// ── Sub-components ────────────────────────────────────────────────────────────

function YearBadge({ year }: { year: string }) {
  const colors: Record<string, string> = {
    "Year 7":  "bg-sky-500/15 text-sky-400 border-sky-500/25",
    "Year 8":  "bg-violet-500/15 text-violet-400 border-violet-500/25",
    "Year 9":  "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
    "Year 10": "bg-blue-500/15 text-blue-400 border-blue-500/25",
    "Year 11": "bg-amber-500/15 text-amber-400 border-amber-500/25",
    "Year 12": "bg-orange-500/15 text-orange-400 border-orange-500/25",
    "Year 13": "bg-rose-500/15 text-rose-400 border-rose-500/25",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold",
        colors[year] ?? "bg-muted text-muted-foreground border-border",
      )}
    >
      {year}
    </span>
  )
}

function StatusBadge({ status }: { status: StudentStatus }) {
  const config: Record<StudentStatus, { label: string; className: string }> = {
    active:    { label: "Active",    className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25" },
    inactive:  { label: "Inactive",  className: "bg-zinc-500/15 text-zinc-400 border-zinc-500/25" },
    suspended: { label: "Suspended", className: "bg-red-500/15 text-red-400 border-red-500/25" },
  }
  const { label, className } = config[status]
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold",
        className,
      )}
    >
      {label}
    </span>
  )
}

function StudentAvatar({ first, last }: { first: string; last: string }) {
  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400 ring-1 ring-emerald-500/30">
      {getInitials(first, last)}
    </span>
  )
}

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  iconClass,
  bgClass,
}: {
  label: string
  value: number | string
  sub?: string
  icon: React.ElementType
  iconClass: string
  bgClass: string
}) {
  return (
    <Card className="bg-card/50">
      <CardContent className="flex items-center gap-3 px-5 py-4">
        <div className={cn("rounded-lg p-2.5", bgClass)}>
          <Icon className={cn("size-5", iconClass)} />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold tabular-nums leading-tight">{value}</p>
          {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

function TableSkeletonRow() {
  return (
    <tr className="border-b border-white/5">
      <td className="px-4 py-3"><Skeleton className="size-4 rounded" /></td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
      </td>
      <td className="px-4 py-3"><Skeleton className="h-4 w-40" /></td>
      <td className="px-4 py-3"><Skeleton className="h-5 w-16 rounded-full" /></td>
      <td className="px-4 py-3"><Skeleton className="h-4 w-12" /></td>
      <td className="px-4 py-3"><Skeleton className="h-4 w-20" /></td>
      <td className="px-4 py-3"><Skeleton className="h-2 w-24 rounded-full" /></td>
      <td className="px-4 py-3"><Skeleton className="h-5 w-16 rounded-full" /></td>
      <td className="px-4 py-3"><Skeleton className="h-6 w-6 rounded" /></td>
    </tr>
  )
}

// ── Action menu ───────────────────────────────────────────────────────────────

interface ActionMenuProps {
  student: Student
  classes: string[]
  onMoveToClass: (id: string, cls: string) => void
  onResetPassword: (id: string) => void
  onSuspend: (id: string) => void
  onRemove: (id: string) => void
}

function ActionMenu({
  student,
  classes,
  onMoveToClass,
  onResetPassword,
  onSuspend,
  onRemove,
}: ActionMenuProps) {
  const [open, setOpen] = useState(false)
  const [moveOpen, setMoveOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setOpen((v) => !v)}
        aria-label="Student actions"
      >
        <MoreHorizontal className="size-4" />
      </Button>

      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => { setOpen(false); setMoveOpen(false) }} />
          <div className="absolute right-0 z-40 mt-1 w-48 rounded-lg border border-border bg-popover py-1 shadow-lg ring-1 ring-foreground/10">
            <Link
              href={`/school/students/${student.id}`}
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              <Eye className="size-3.5 text-muted-foreground" />
              View Progress
            </Link>

            <div className="relative">
              <button
                className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
                onClick={() => setMoveOpen((v) => !v)}
              >
                <MoveRight className="size-3.5 text-muted-foreground" />
                Move to Class
                <ChevronDown className={cn("size-3 ml-auto text-muted-foreground transition-transform", moveOpen && "rotate-180")} />
              </button>
              {moveOpen && (
                <div className="absolute right-full top-0 mr-1 w-36 rounded-lg border border-border bg-popover py-1 shadow-lg ring-1 ring-foreground/10">
                  {classes.map((cls) => (
                    <button
                      key={cls}
                      className="flex w-full items-center px-3 py-1.5 text-sm text-foreground hover:bg-accent"
                      onClick={() => { onMoveToClass(student.id, cls); setOpen(false); setMoveOpen(false) }}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
              onClick={() => { onResetPassword(student.id); setOpen(false) }}
            >
              <Key className="size-3.5 text-muted-foreground" />
              Reset Password
            </button>

            <div className="my-1 border-t border-border" />

            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-amber-400 hover:bg-amber-500/10"
              onClick={() => { onSuspend(student.id); setOpen(false) }}
            >
              <Ban className="size-3.5" />
              {student.status === "suspended" ? "Unsuspend" : "Suspend"}
            </button>

            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-destructive hover:bg-destructive/10"
              onClick={() => { onRemove(student.id); setOpen(false) }}
            >
              <Trash2 className="size-3.5" />
              Remove from School
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Confirm Remove Dialog ─────────────────────────────────────────────────────

interface ConfirmRemoveDialogProps {
  student: Student | null
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmRemoveDialog({ student, onConfirm, onCancel }: ConfirmRemoveDialogProps) {
  return (
    <Dialog open={student !== null} onOpenChange={(v) => !v && onCancel()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="size-5" />
            Remove Student
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Are you sure you want to remove{" "}
          <span className="font-semibold text-foreground">
            {student?.firstName} {student?.lastName}
          </span>{" "}
          from your school? This action cannot be undone.
        </p>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button variant="destructive" onClick={onConfirm}>Remove Student</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ── Move to Class Bulk Dialog ──────────────────────────────────────────────────

interface MoveToClassDialogProps {
  open: boolean
  classes: string[]
  onConfirm: (cls: string) => void
  onCancel: () => void
}

function MoveToClassDialog({ open, classes, onConfirm, onCancel }: MoveToClassDialogProps) {
  const [selected, setSelected] = useState("")
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onCancel()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Move to Class</DialogTitle>
        </DialogHeader>
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a class" />
          </SelectTrigger>
          <SelectContent>
            {classes.map((cls) => (
              <SelectItem key={cls} value={cls}>{cls}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button disabled={!selected} onClick={() => { if (selected) onConfirm(selected); setSelected("") }}>
            Move Students
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [yearFilter, setYearFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [classFilter, setClassFilter] = useState("all")
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [page, setPage] = useState(1)
  const [removeTarget, setRemoveTarget] = useState<Student | null>(null)
  const [moveDialogOpen, setMoveDialogOpen] = useState(false)

  // ── Data fetching ─────────────────────────────────────────────────────────

  useEffect(() => {
    let cancelled = false
    async function fetchStudents() {
      try {
        const res = await fetch("/api/school/students")
        if (!res.ok) throw new Error("fetch failed")
        const data = await res.json()
        if (!cancelled) setStudents(data.students ?? data ?? [])
      } catch {
        // keep mock data
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    const t = setTimeout(() => fetchStudents(), 0)
    const lt = setTimeout(() => { if (!cancelled) setLoading(false) }, 900)
    return () => { cancelled = true; clearTimeout(t); clearTimeout(lt) }
  }, [])

  // ── Derived data ──────────────────────────────────────────────────────────

  const availableClasses = useMemo(() => {
    const seen = new Set<string>()
    students.forEach((s) => { if (s.className) seen.add(s.className) })
    return Array.from(seen).sort()
  }, [students])

  const filtered = useMemo(() => {
    let list = students
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(
        (s) =>
          `${s.firstName} ${s.lastName}`.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q),
      )
    }
    if (yearFilter !== "all") list = list.filter((s) => s.yearGroup === yearFilter)
    if (statusFilter !== "all") list = list.filter((s) => s.status === statusFilter)
    if (classFilter !== "all") list = list.filter((s) => s.className === classFilter)
    return list
  }, [students, search, yearFilter, statusFilter, classFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => { setPage(1) }, [search, yearFilter, statusFilter, classFilter])

  // ── Statistics ────────────────────────────────────────────────────────────

  const stats = useMemo(() => {
    const total = students.length
    const oneWeekAgo = Date.now() - 7 * 864e5
    const activeThisWeek = students.filter(
      (s) => s.lastActive && new Date(s.lastActive).getTime() >= oneWeekAgo,
    ).length
    const notYetActive = students.filter((s) => !s.lastActive).length
    const suspended = students.filter((s) => s.status === "suspended").length
    return { total, activeThisWeek, notYetActive, suspended }
  }, [students])

  // ── Selection helpers ─────────────────────────────────────────────────────

  const allPageSelected =
    paginated.length > 0 && paginated.every((s) => selected.has(s.id))

  function toggleSelectAll() {
    if (allPageSelected) {
      setSelected((prev) => {
        const next = new Set(prev)
        paginated.forEach((s) => next.delete(s.id))
        return next
      })
    } else {
      setSelected((prev) => {
        const next = new Set(prev)
        paginated.forEach((s) => next.add(s.id))
        return next
      })
    }
  }

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  // ── Handlers ─────────────────────────────────────────────────────────────

  function handleMoveToClass(id: string, cls: string) {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, className: cls } : s)),
    )
  }

  function handleResetPassword(_id: string) {
    // POST /api/school/students/:id/reset-password
  }

  function handleSuspend(id: string) {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "suspended" ? "active" : "suspended" }
          : s,
      ),
    )
  }

  function handleRemove(id: string) {
    const target = students.find((s) => s.id === id)
    if (target) setRemoveTarget(target)
  }

  function confirmRemove() {
    if (!removeTarget) return
    setStudents((prev) => prev.filter((s) => s.id !== removeTarget.id))
    setSelected((prev) => {
      const next = new Set(prev)
      next.delete(removeTarget.id)
      return next
    })
    setRemoveTarget(null)
  }

  function handleBulkMoveToClass(cls: string) {
    setStudents((prev) =>
      prev.map((s) => (selected.has(s.id) ? { ...s, className: cls } : s)),
    )
    setSelected(new Set())
    setMoveDialogOpen(false)
  }

  function handleBulkResetPasswords() {
    // POST /api/school/students/reset-passwords { ids: [...] }
    setSelected(new Set())
  }

  function handleBulkExport() {
    const rows = students.filter((s) => selected.has(s.id))
    const csv = [
      "Name,Email,Year Group,Class,Progress,Status",
      ...rows.map((s) =>
        [
          `${s.firstName} ${s.lastName}`,
          s.email,
          s.yearGroup,
          s.className ?? "",
          `${s.progress}%`,
          s.status,
        ].join(","),
      ),
    ].join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "students-export.csv"
    a.click()
    URL.revokeObjectURL(url)
    setSelected(new Set())
  }

  function handleBulkSuspend() {
    setStudents((prev) =>
      prev.map((s) =>
        selected.has(s.id) ? { ...s, status: "suspended" as StudentStatus } : s,
      ),
    )
    setSelected(new Set())
  }

  function handleBulkRemove() {
    setStudents((prev) => prev.filter((s) => !selected.has(s.id)))
    setSelected(new Set())
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">Students</h1>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-sm font-semibold tabular-nums text-muted-foreground">
              {loading ? "..." : students.length}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Button variant="outline" size="sm" render={<Link href="/school/import" />}>
                <Upload className="size-4" />
                Import Students
            </Button>
            <Button size="sm" render={<Link href="/school/import?type=student" />}>
                <UserPlus className="size-4" />
                Add Student
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard
            label="Total Students"
            value={loading ? "..." : stats.total}
            icon={GraduationCap}
            iconClass="text-emerald-400"
            bgClass="bg-emerald-500/10"
          />
          <StatCard
            label="Active This Week"
            value={loading ? "..." : stats.activeThisWeek}
            sub={loading ? undefined : stats.total > 0 ? `${Math.round((stats.activeThisWeek / stats.total) * 100)}% of total` : undefined}
            icon={GraduationCap}
            iconClass="text-blue-400"
            bgClass="bg-blue-500/10"
          />
          <StatCard
            label="Not Yet Active"
            value={loading ? "..." : stats.notYetActive}
            icon={Hash}
            iconClass="text-amber-400"
            bgClass="bg-amber-500/10"
          />
          <StatCard
            label="Suspended"
            value={loading ? "..." : stats.suspended}
            icon={Ban}
            iconClass="text-red-400"
            bgClass="bg-red-500/10"
          />
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-8 w-64 pl-8 text-sm"
            />
            {search && (
              <button
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger size="sm" className="h-8 min-w-[130px]">
              <Filter className="size-3.5 text-muted-foreground" />
              <SelectValue placeholder="Year Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {YEAR_GROUPS.map((yg) => (
                <SelectItem key={yg} value={yg}>{yg}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger size="sm" className="h-8 min-w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>

          <Select value={classFilter} onValueChange={setClassFilter}>
            <SelectTrigger size="sm" className="h-8 min-w-[120px]">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              {(availableClasses.length > 0 ? availableClasses : MOCK_CLASSES).map((cls) => (
                <SelectItem key={cls} value={cls}>{cls}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(search || yearFilter !== "all" || statusFilter !== "all" || classFilter !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearch("")
                setYearFilter("all")
                setStatusFilter("all")
                setClassFilter("all")
              }}
            >
              <X className="size-3.5" />
              Clear filters
            </Button>
          )}
        </div>

        {/* Bulk actions bar */}
        {selected.size > 0 && (
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5">
            <span className="text-sm font-medium">
              {selected.size} selected
            </span>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <Button
                size="xs"
                variant="outline"
                onClick={() => setMoveDialogOpen(true)}
              >
                <MoveRight className="size-3" />
                Move to Class
              </Button>
              <Button
                size="xs"
                variant="outline"
                onClick={handleBulkResetPasswords}
              >
                <Key className="size-3" />
                Reset Passwords
              </Button>
              <Button
                size="xs"
                variant="outline"
                onClick={handleBulkExport}
              >
                <Download className="size-3" />
                Export Selected
              </Button>
              <Button
                size="xs"
                variant="outline"
                className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                onClick={handleBulkSuspend}
              >
                <Ban className="size-3" />
                Suspend
              </Button>
              <Button
                size="xs"
                variant="destructive"
                onClick={handleBulkRemove}
              >
                <Trash2 className="size-3" />
                Remove from School
              </Button>
              <Button
                size="xs"
                variant="ghost"
                onClick={() => setSelected(new Set())}
                aria-label="Clear selection"
              >
                <X className="size-3" />
              </Button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-muted/30">
                  <th className="w-10 px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={allPageSelected}
                      onChange={toggleSelectAll}
                      className="accent-primary size-4 cursor-pointer rounded"
                      aria-label="Select all on page"
                      disabled={loading || paginated.length === 0}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Year</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Class</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Last Active</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Progress</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 8 }).map((_, i) => <TableSkeletonRow key={i} />)
                ) : students.length === 0 ? (
                  /* Empty state */
                  <tr>
                    <td colSpan={9} className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex size-16 items-center justify-center rounded-full bg-muted">
                          <GraduationCap className="size-8 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-base font-semibold">No students yet</p>
                          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                            Import your students via Excel or share your school join code.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button size="sm" render={<Link href="/school/import" />}>
                              <Upload className="size-4" />
                              Import Students
                          </Button>
                          <Button size="sm" variant="outline" render={<Link href="/school/settings" />}>
                              <Hash className="size-4" />
                              View Join Code
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : paginated.length === 0 ? (
                  /* No filter results */
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-muted-foreground">
                      <Search className="mx-auto mb-2 size-8 opacity-30" />
                      <p className="text-sm">No students match your filters.</p>
                    </td>
                  </tr>
                ) : (
                  paginated.map((student) => (
                    <tr
                      key={student.id}
                      className={cn(
                        "border-b border-white/5 transition-colors hover:bg-muted/20",
                        selected.has(student.id) && "bg-primary/5",
                      )}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selected.has(student.id)}
                          onChange={() => toggleSelect(student.id)}
                          className="accent-primary size-4 cursor-pointer rounded"
                          aria-label={`Select ${student.firstName} ${student.lastName}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <StudentAvatar first={student.firstName} last={student.lastName} />
                          <Link
                            href={`/school/students/${student.id}`}
                            className="font-medium text-foreground hover:text-primary hover:underline"
                          >
                            {student.firstName} {student.lastName}
                          </Link>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{student.email}</td>
                      <td className="px-4 py-3">
                        <YearBadge year={student.yearGroup} />
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {student.className ?? (
                          <span className="italic text-muted-foreground/50">Unassigned</span>
                        )}
                      </td>
                      <td className="px-4 py-3 tabular-nums text-muted-foreground">
                        {formatRelativeTime(student.lastActive)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                            <div
                              className={cn("h-full rounded-full transition-all duration-500", progressBarColor(student.progress))}
                              style={{ width: `${student.progress}%` }}
                            />
                          </div>
                          <span className="text-xs tabular-nums text-muted-foreground">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={student.status} />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <ActionMenu
                          student={student}
                          classes={availableClasses.length > 0 ? availableClasses : MOCK_CLASSES}
                          onMoveToClass={handleMoveToClass}
                          onResetPassword={handleResetPassword}
                          onSuspend={handleSuspend}
                          onRemove={handleRemove}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && filtered.length > PAGE_SIZE && (
            <div className="flex items-center justify-between border-t border-border px-4 py-3">
              <p className="text-xs text-muted-foreground">
                Showing {(page - 1) * PAGE_SIZE + 1}&ndash;{Math.min(page * PAGE_SIZE, filtered.length)} of{" "}
                {filtered.length} students
              </p>
              <div className="flex items-center gap-1.5">
                <Button
                  variant="outline"
                  size="icon-sm"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                  .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                    if (idx > 0 && (arr[idx - 1] as number) + 1 < p) acc.push("...")
                    acc.push(p)
                    return acc
                  }, [])
                  .map((item, idx) =>
                    item === "..." ? (
                      <span key={`ellipsis-${idx}`} className="px-1 text-muted-foreground">...</span>
                    ) : (
                      <Button
                        key={item}
                        variant={page === item ? "default" : "outline"}
                        size="icon-sm"
                        onClick={() => setPage(item as number)}
                      >
                        {item}
                      </Button>
                    ),
                  )}
                <Button
                  variant="outline"
                  size="icon-sm"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  aria-label="Next page"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dialogs */}
      <ConfirmRemoveDialog
        student={removeTarget}
        onConfirm={confirmRemove}
        onCancel={() => setRemoveTarget(null)}
      />

      <MoveToClassDialog
        open={moveDialogOpen}
        classes={availableClasses.length > 0 ? availableClasses : MOCK_CLASSES}
        onConfirm={handleBulkMoveToClass}
        onCancel={() => setMoveDialogOpen(false)}
      />
    </div>
  )
}
