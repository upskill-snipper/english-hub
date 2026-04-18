"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import {
  Users,
  UserPlus,
  Upload,
  Search,
  Filter,
  MoreHorizontal,
  Key,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  Edit,
  Mail,
  BookOpen,
  Ban,
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

type TeacherRole = "teacher" | "head_of_department" | "admin"
type TeacherStatus = "active" | "inactive" | "suspended"

interface Teacher {
  id: string
  firstName: string
  lastName: string
  email: string
  role: TeacherRole
  classesAssigned: string[]
  lastActive: string | null
  status: TeacherStatus
}

// ── Mock data ──────────────────────────────────────────────────────────────────

const MOCK_TEACHERS: Teacher[] = [
  {
    id: "1",
    firstName: "James",
    lastName: "Hargreaves",
    email: "j.hargreaves@school.edu",
    role: "teacher",
    classesAssigned: ["10B", "9A"],
    lastActive: new Date(Date.now() - 0).toISOString(),
    status: "active",
  },
  {
    id: "2",
    firstName: "Priya",
    lastName: "Nair",
    email: "p.nair@school.edu",
    role: "head_of_department",
    classesAssigned: ["9A", "9B", "8A"],
    lastActive: new Date(Date.now() - 1 * 864e5).toISOString(),
    status: "active",
  },
  {
    id: "3",
    firstName: "Daniel",
    lastName: "Kim",
    email: "d.kim@school.edu",
    role: "teacher",
    classesAssigned: ["11C"],
    lastActive: null,
    status: "inactive",
  },
  {
    id: "4",
    firstName: "Sarah",
    lastName: "Mitchell",
    email: "s.mitchell@school.edu",
    role: "admin",
    classesAssigned: [],
    lastActive: new Date(Date.now() - 0).toISOString(),
    status: "active",
  },
  {
    id: "5",
    firstName: "Elspeth",
    lastName: "Murray",
    email: "e.murray@school.edu",
    role: "teacher",
    classesAssigned: ["12A", "13A"],
    lastActive: new Date(Date.now() - 3 * 864e5).toISOString(),
    status: "active",
  },
  {
    id: "6",
    firstName: "Damian",
    lastName: "Osei",
    email: "d.osei@school.edu",
    role: "teacher",
    classesAssigned: ["7A", "7B"],
    lastActive: new Date(Date.now() - 14 * 864e5).toISOString(),
    status: "suspended",
  },
  {
    id: "7",
    firstName: "Claire",
    lastName: "Weston",
    email: "c.weston@school.edu",
    role: "teacher",
    classesAssigned: ["8B", "10A"],
    lastActive: new Date(Date.now() - 2 * 864e5).toISOString(),
    status: "active",
  },
]

const PAGE_SIZE = 25

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

// ── Sub-components ────────────────────────────────────────────────────────────

function RoleBadge({ role }: { role: TeacherRole }) {
  const config: Record<TeacherRole, { label: string; className: string }> = {
    teacher: {
      label: "Teacher",
      className: "bg-blue-500/15 text-blue-400 border-blue-500/25",
    },
    head_of_department: {
      label: "Head of Dept",
      className: "bg-violet-500/15 text-violet-400 border-violet-500/25",
    },
    admin: {
      label: "Admin",
      className: "bg-rose-500/15 text-rose-400 border-rose-500/25",
    },
  }
  const { label, className } = config[role]
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

function StatusBadge({ status }: { status: TeacherStatus }) {
  const config: Record<TeacherStatus, { label: string; className: string }> = {
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

function TeacherAvatar({ first, last }: { first: string; last: string }) {
  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400 ring-1 ring-blue-500/30">
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
      <td className="px-4 py-3"><Skeleton className="h-5 w-24 rounded-full" /></td>
      <td className="px-4 py-3"><Skeleton className="h-4 w-12" /></td>
      <td className="px-4 py-3"><Skeleton className="h-4 w-20" /></td>
      <td className="px-4 py-3"><Skeleton className="h-5 w-16 rounded-full" /></td>
      <td className="px-4 py-3"><Skeleton className="h-6 w-6 rounded" /></td>
    </tr>
  )
}

// ── Action Menu ───────────────────────────────────────────────────────────────

interface ActionMenuProps {
  teacher: Teacher
  onEdit: (t: Teacher) => void
  onResetPassword: (id: string) => void
  onSuspend: (id: string) => void
  onRemove: (id: string) => void
}

function ActionMenu({
  teacher,
  onEdit,
  onResetPassword,
  onSuspend,
  onRemove,
}: ActionMenuProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setOpen((v) => !v)}
        aria-label="Teacher actions"
      >
        <MoreHorizontal className="size-4" />
      </Button>
      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-40 mt-1 w-48 rounded-lg border border-border bg-popover py-1 shadow-lg ring-1 ring-foreground/10">
            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
              onClick={() => { onEdit(teacher); setOpen(false) }}
            >
              <Edit className="size-3.5 text-muted-foreground" />
              Edit Teacher
            </button>
            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
              onClick={() => { onResetPassword(teacher.id); setOpen(false) }}
            >
              <Key className="size-3.5 text-muted-foreground" />
              Reset Password
            </button>
            <div className="my-1 border-t border-border" />
            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-clay-600 hover:bg-amber-500/10"
              onClick={() => { onSuspend(teacher.id); setOpen(false) }}
            >
              <Ban className="size-3.5" />
              {teacher.status === "suspended" ? "Unsuspend" : "Suspend"}
            </button>
            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-destructive hover:bg-destructive/10"
              onClick={() => { onRemove(teacher.id); setOpen(false) }}
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
  teacher: Teacher | null
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmRemoveDialog({ teacher, onConfirm, onCancel }: ConfirmRemoveDialogProps) {
  return (
    <Dialog open={teacher !== null} onOpenChange={(v) => !v && onCancel()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="size-5" />
            Remove Teacher
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Are you sure you want to remove{" "}
          <span className="font-semibold text-foreground">
            {teacher?.firstName} {teacher?.lastName}
          </span>{" "}
          from your school? Their classes will become unassigned.
        </p>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button variant="destructive" onClick={onConfirm}>Remove Teacher</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ── Edit Teacher Dialog ───────────────────────────────────────────────────────

interface EditTeacherDialogProps {
  teacher: Teacher | null
  onSave: (updated: Teacher) => void
  onCancel: () => void
}

function EditTeacherDialog({ teacher, onSave, onCancel }: EditTeacherDialogProps) {
  const [role, setRole] = useState<TeacherRole>(teacher?.role ?? "teacher")
  const [status, setStatus] = useState<TeacherStatus>(teacher?.status ?? "active")

  useEffect(() => {
    if (teacher) {
      setRole(teacher.role)
      setStatus(teacher.status)
    }
  }, [teacher])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!teacher) return
    onSave({ ...teacher, role, status })
  }

  return (
    <Dialog open={teacher !== null} onOpenChange={(v) => !v && onCancel()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit Teacher</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-3 py-2.5">
            <TeacherAvatar first={teacher?.firstName ?? ""} last={teacher?.lastName ?? ""} />
            <div>
              <p className="text-sm font-medium">{teacher?.firstName} {teacher?.lastName}</p>
              <p className="text-xs text-muted-foreground">{teacher?.email}</p>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Role</label>
            <Select value={role} onValueChange={(v) => setRole(v as TeacherRole)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="head_of_department">Head of Department</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Status</label>
            <Select value={status} onValueChange={(v) => setStatus(v as TeacherStatus)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>(MOCK_TEACHERS)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [page, setPage] = useState(1)
  const [removeTarget, setRemoveTarget] = useState<Teacher | null>(null)
  const [editTarget, setEditTarget] = useState<Teacher | null>(null)

  // ── Data fetching ─────────────────────────────────────────────────────────

  useEffect(() => {
    let cancelled = false
    async function fetchTeachers() {
      try {
        const res = await fetch("/api/school/members")
        if (!res.ok) throw new Error("fetch failed")
        const data = await res.json()
        const members: Teacher[] = (data.members ?? data ?? []).filter(
          (m: Teacher) => ["teacher", "head_of_department", "admin"].includes(m.role),
        )
        if (!cancelled && members.length > 0) setTeachers(members)
      } catch {
        // keep mock data
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    const t = setTimeout(() => fetchTeachers(), 0)
    const lt = setTimeout(() => { if (!cancelled) setLoading(false) }, 900)
    return () => { cancelled = true; clearTimeout(t); clearTimeout(lt) }
  }, [])

  // ── Derived data ──────────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    let list = teachers
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(
        (t) =>
          `${t.firstName} ${t.lastName}`.toLowerCase().includes(q) ||
          t.email.toLowerCase().includes(q),
      )
    }
    if (roleFilter !== "all") list = list.filter((t) => t.role === roleFilter)
    if (statusFilter !== "all") list = list.filter((t) => t.status === statusFilter)
    return list
  }, [teachers, search, roleFilter, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => { setPage(1) }, [search, roleFilter, statusFilter])

  // ── Statistics ────────────────────────────────────────────────────────────

  const stats = useMemo(() => {
    const total = teachers.length
    const oneWeekAgo = Date.now() - 7 * 864e5
    const activeThisWeek = teachers.filter(
      (t) => t.lastActive && new Date(t.lastActive).getTime() >= oneWeekAgo,
    ).length
    const classCount = new Set(teachers.flatMap((t) => t.classesAssigned)).size
    const suspended = teachers.filter((t) => t.status === "suspended").length
    return { total, activeThisWeek, classCount, suspended }
  }, [teachers])

  // ── Selection helpers ─────────────────────────────────────────────────────

  const allPageSelected =
    paginated.length > 0 && paginated.every((t) => selected.has(t.id))

  function toggleSelectAll() {
    if (allPageSelected) {
      setSelected((prev) => {
        const next = new Set(prev)
        paginated.forEach((t) => next.delete(t.id))
        return next
      })
    } else {
      setSelected((prev) => {
        const next = new Set(prev)
        paginated.forEach((t) => next.add(t.id))
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

  function handleEditSave(updated: Teacher) {
    setTeachers((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    setEditTarget(null)
  }

  function handleResetPassword(_id: string) {
    // POST /api/school/members/:id/reset-password
  }

  function handleSuspend(id: string) {
    setTeachers((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "suspended" ? "active" : "suspended" }
          : t,
      ),
    )
  }

  function handleRemove(id: string) {
    const target = teachers.find((t) => t.id === id)
    if (target) setRemoveTarget(target)
  }

  function confirmRemove() {
    if (!removeTarget) return
    setTeachers((prev) => prev.filter((t) => t.id !== removeTarget.id))
    setSelected((prev) => {
      const next = new Set(prev)
      next.delete(removeTarget.id)
      return next
    })
    setRemoveTarget(null)
  }

  function handleBulkResetPasswords() {
    // POST /api/school/members/reset-passwords { ids: [...] }
    setSelected(new Set())
  }

  function handleBulkExport() {
    const rows = teachers.filter((t) => selected.has(t.id))
    const csv = [
      "Name,Email,Role,Classes Assigned,Status",
      ...rows.map((t) =>
        [
          `${t.firstName} ${t.lastName}`,
          t.email,
          t.role,
          t.classesAssigned.join("; "),
          t.status,
        ].join(","),
      ),
    ].join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "teachers-export.csv"
    a.click()
    URL.revokeObjectURL(url)
    setSelected(new Set())
  }

  function handleBulkSuspend() {
    setTeachers((prev) =>
      prev.map((t) =>
        selected.has(t.id) ? { ...t, status: "suspended" as TeacherStatus } : t,
      ),
    )
    setSelected(new Set())
  }

  function handleBulkRemove() {
    setTeachers((prev) => prev.filter((t) => !selected.has(t.id)))
    setSelected(new Set())
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">Teachers</h1>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-sm font-semibold tabular-nums text-muted-foreground">
              {loading ? "..." : teachers.length}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Button variant="outline" size="sm" render={<Link href="/school/import" />}>
                <Upload className="size-4" />
                Import Teachers
            </Button>
            <Button size="sm" render={<Link href="/school/invite" />}>
                <UserPlus className="size-4" />
                Invite Teachers
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard
            label="Total Teachers"
            value={loading ? "..." : stats.total}
            icon={Users}
            iconClass="text-blue-400"
            bgClass="bg-blue-500/10"
          />
          <StatCard
            label="Active This Week"
            value={loading ? "..." : stats.activeThisWeek}
            sub={
              loading
                ? undefined
                : stats.total > 0
                ? `${Math.round((stats.activeThisWeek / stats.total) * 100)}% of total`
                : undefined
            }
            icon={Users}
            iconClass="text-emerald-400"
            bgClass="bg-emerald-500/10"
          />
          <StatCard
            label="Classes Covered"
            value={loading ? "..." : stats.classCount}
            icon={BookOpen}
            iconClass="text-violet-400"
            bgClass="bg-violet-500/10"
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

          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger size="sm" className="h-8 min-w-[140px]">
              <Filter className="size-3.5 text-muted-foreground" />
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="head_of_department">Head of Dept</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
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

          {(search || roleFilter !== "all" || statusFilter !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearch("")
                setRoleFilter("all")
                setStatusFilter("all")
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
              <Button size="xs" variant="outline" onClick={handleBulkResetPasswords}>
                <Key className="size-3" />
                Reset Passwords
              </Button>
              <Button size="xs" variant="outline" onClick={handleBulkExport}>
                <Download className="size-3" />
                Export Selected
              </Button>
              <Button
                size="xs"
                variant="outline"
                className="border-amber-500/30 text-clay-600 hover:bg-amber-500/10"
                onClick={handleBulkSuspend}
              >
                <Ban className="size-3" />
                Suspend
              </Button>
              <Button size="xs" variant="destructive" onClick={handleBulkRemove}>
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
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Classes</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Last Active</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 6 }).map((_, i) => <TableSkeletonRow key={i} />)
                ) : teachers.length === 0 ? (
                  /* Empty state */
                  <tr>
                    <td colSpan={8} className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex size-16 items-center justify-center rounded-full bg-muted">
                          <Users className="size-8 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-base font-semibold">No teachers yet</p>
                          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                            Invite your teachers via email or import them from a spreadsheet.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button size="sm" render={<Link href="/school/invite" />}>
                              <Mail className="size-4" />
                              Invite Teachers
                          </Button>
                          <Button size="sm" variant="outline" render={<Link href="/school/import" />}>
                              <Upload className="size-4" />
                              Import Teachers
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : paginated.length === 0 ? (
                  /* No filter results */
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center text-muted-foreground">
                      <Search className="mx-auto mb-2 size-8 opacity-30" />
                      <p className="text-sm">No teachers match your filters.</p>
                    </td>
                  </tr>
                ) : (
                  paginated.map((teacher) => (
                    <tr
                      key={teacher.id}
                      className={cn(
                        "border-b border-white/5 transition-colors hover:bg-muted/20",
                        selected.has(teacher.id) && "bg-primary/5",
                      )}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selected.has(teacher.id)}
                          onChange={() => toggleSelect(teacher.id)}
                          className="accent-primary size-4 cursor-pointer rounded"
                          aria-label={`Select ${teacher.firstName} ${teacher.lastName}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <TeacherAvatar first={teacher.firstName} last={teacher.lastName} />
                          <span className="font-medium text-foreground">
                            {teacher.firstName} {teacher.lastName}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{teacher.email}</td>
                      <td className="px-4 py-3">
                        <RoleBadge role={teacher.role} />
                      </td>
                      <td className="px-4 py-3">
                        {teacher.classesAssigned.length > 0 ? (
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="size-3.5 text-muted-foreground" />
                            <span className="tabular-nums text-foreground">
                              {teacher.classesAssigned.length}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {teacher.classesAssigned.length === 1 ? "class" : "classes"}
                            </span>
                            <span className="hidden text-xs text-muted-foreground sm:inline">
                              ({teacher.classesAssigned.slice(0, 3).join(", ")}
                              {teacher.classesAssigned.length > 3 ? "..." : ""})
                            </span>
                          </div>
                        ) : (
                          <span className="italic text-xs text-muted-foreground/50">None</span>
                        )}
                      </td>
                      <td className="px-4 py-3 tabular-nums text-muted-foreground">
                        {formatRelativeTime(teacher.lastActive)}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={teacher.status} />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <ActionMenu
                          teacher={teacher}
                          onEdit={setEditTarget}
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
                {filtered.length} teachers
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
        teacher={removeTarget}
        onConfirm={confirmRemove}
        onCancel={() => setRemoveTarget(null)}
      />

      <EditTeacherDialog
        teacher={editTarget}
        onSave={handleEditSave}
        onCancel={() => setEditTarget(null)}
      />
    </div>
  )
}
