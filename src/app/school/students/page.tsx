'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
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
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { percentageToGCSEGrade, gcseGradeColor, isGCSEYearGroup } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'

// ── Types ──────────────────────────────────────────────────────────────────────

type StudentStatus = 'active' | 'inactive' | 'suspended'

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

const YEAR_GROUPS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13']

const MOCK_CLASSES = [
  '7A',
  '7B',
  '8A',
  '8B',
  '9A',
  '9B',
  '10A',
  '10B',
  '11A',
  '11B',
  '11C',
  '12A',
  '13A',
]

const PAGE_SIZE = 25

// ── Mock data ──────────────────────────────────────────────────────────────────

const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    firstName: 'Oliver',
    lastName: 'Bennett',
    email: 'o.bennett@school.edu',
    yearGroup: 'Year 10',
    className: '10B',
    lastActive: new Date(Date.now() - 2 * 864e5).toISOString(),
    progress: 72,
    status: 'active',
  },
  {
    id: '2',
    firstName: 'Amara',
    lastName: 'Osei',
    email: 'a.osei@school.edu',
    yearGroup: 'Year 9',
    className: '9A',
    lastActive: new Date(Date.now() - 0).toISOString(),
    progress: 88,
    status: 'active',
  },
  {
    id: '3',
    firstName: 'Lucas',
    lastName: 'Fernandez',
    email: 'l.fernandez@school.edu',
    yearGroup: 'Year 10',
    className: '10B',
    lastActive: null,
    progress: 12,
    status: 'inactive',
  },
  {
    id: '4',
    firstName: 'Chloe',
    lastName: 'Walsh',
    email: 'c.walsh@school.edu',
    yearGroup: 'Year 11',
    className: '11C',
    lastActive: new Date(Date.now() - 2 * 864e5).toISOString(),
    progress: 61,
    status: 'active',
  },
  {
    id: '5',
    firstName: 'Fatima',
    lastName: 'Al-Rashid',
    email: 'f.alrashid@school.edu',
    yearGroup: 'Year 9',
    className: '9A',
    lastActive: new Date(Date.now() - 0).toISOString(),
    progress: 95,
    status: 'active',
  },
  {
    id: '6',
    firstName: 'Thomas',
    lastName: 'Griffiths',
    email: 't.griffiths@school.edu',
    yearGroup: 'Year 11',
    className: '11C',
    lastActive: new Date(Date.now() - 5 * 864e5).toISOString(),
    progress: 34,
    status: 'suspended',
  },
  {
    id: '7',
    firstName: 'Ethan',
    lastName: 'Clarke',
    email: 'e.clarke@school.edu',
    yearGroup: 'Year 10',
    className: '10A',
    lastActive: new Date(Date.now() - 1 * 864e5).toISOString(),
    progress: 58,
    status: 'active',
  },
  {
    id: '8',
    firstName: 'Sophie',
    lastName: 'Turner',
    email: 's.turner@school.edu',
    yearGroup: 'Year 12',
    className: '12A',
    lastActive: new Date(Date.now() - 3 * 864e5).toISOString(),
    progress: 81,
    status: 'active',
  },
  {
    id: '9',
    firstName: 'Jayden',
    lastName: 'Okafor',
    email: 'j.okafor@school.edu',
    yearGroup: 'Year 8',
    className: '8B',
    lastActive: null,
    progress: 5,
    status: 'inactive',
  },
  {
    id: '10',
    firstName: 'Isla',
    lastName: 'MacLeod',
    email: 'i.macleod@school.edu',
    yearGroup: 'Year 7',
    className: '7A',
    lastActive: new Date(Date.now() - 0).toISOString(),
    progress: 43,
    status: 'active',
  },
  {
    id: '11',
    firstName: 'Reuben',
    lastName: 'Fletcher',
    email: 'r.fletcher@school.edu',
    yearGroup: 'Year 13',
    className: '13A',
    lastActive: new Date(Date.now() - 7 * 864e5).toISOString(),
    progress: 77,
    status: 'active',
  },
  {
    id: '12',
    firstName: 'Mei',
    lastName: 'Zhang',
    email: 'm.zhang@school.edu',
    yearGroup: 'Year 9',
    className: '9B',
    lastActive: new Date(Date.now() - 14 * 864e5).toISOString(),
    progress: 50,
    status: 'active',
  },
  {
    id: '13',
    firstName: 'Aaron',
    lastName: 'Patel',
    email: 'a.patel@school.edu',
    yearGroup: 'Year 11',
    className: '11A',
    lastActive: new Date(Date.now() - 1 * 864e5).toISOString(),
    progress: 67,
    status: 'active',
  },
  {
    id: '14',
    firstName: 'Niamh',
    lastName: "O'Brien",
    email: 'n.obrien@school.edu',
    yearGroup: 'Year 10',
    className: '10A',
    lastActive: new Date(Date.now() - 21 * 864e5).toISOString(),
    progress: 29,
    status: 'inactive',
  },
  {
    id: '15',
    firstName: 'Callum',
    lastName: 'Reid',
    email: 'c.reid@school.edu',
    yearGroup: 'Year 8',
    className: '8A',
    lastActive: new Date(Date.now() - 0).toISOString(),
    progress: 91,
    status: 'active',
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function getInitials(first: string, last: string): string {
  return `${first[0] ?? ''}${last[0] ?? ''}`.toUpperCase()
}

function formatRelativeTime(dateStr: string | null, t: (k: string) => string): string {
  if (!dateStr) return t('school.students.relative.never')
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 864e5)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  if (mins < 2) return t('school.students.relative.just_now')
  if (hours < 1) return `${mins} ${t('school.students.relative.minutes_suffix')}`
  if (days < 1) return t('school.students.relative.today')
  if (days === 1) return t('school.students.relative.yesterday')
  if (days < 7) return `${days} ${t('school.students.relative.days_suffix')}`
  if (weeks === 1) return t('school.students.relative.week_one')
  if (weeks < 5) return `${weeks} ${t('school.students.relative.weeks_suffix')}`
  if (months === 1) return t('school.students.relative.month_one')
  return `${months} ${t('school.students.relative.months_suffix')}`
}

function progressBarColor(pct: number): string {
  if (pct >= 70) return 'bg-emerald-500'
  if (pct >= 40) return 'bg-amber-500'
  return 'bg-red-500'
}

// ── Sub-components ────────────────────────────────────────────────────────────

function YearBadge({ year }: { year: string }) {
  const colors: Record<string, string> = {
    'Year 7': 'bg-sky-500/15 text-sky-400 border-sky-500/25',
    'Year 8': 'bg-violet-500/15 text-violet-400 border-violet-500/25',
    'Year 9': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/25',
    'Year 10': 'bg-blue-500/15 text-blue-400 border-blue-500/25',
    'Year 11': 'bg-amber-500/15 text-clay-600 border-amber-500/25',
    'Year 12': 'bg-orange-500/15 text-clay-600 border-orange-500/25',
    'Year 13': 'bg-rose-500/15 text-rose-400 border-rose-500/25',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold',
        colors[year] ?? 'bg-muted text-muted-foreground border-border',
      )}
    >
      {year}
    </span>
  )
}

function StatusBadge({ status, t }: { status: StudentStatus; t: (k: string) => string }) {
  const config: Record<StudentStatus, { label: string; className: string }> = {
    active: {
      label: t('school.students.status.active'),
      className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
    },
    inactive: {
      label: t('school.students.status.inactive'),
      className: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/25',
    },
    suspended: {
      label: t('school.students.status.suspended'),
      className: 'bg-red-500/15 text-red-400 border-red-500/25',
    },
  }
  const { label, className } = config[status]
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold',
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
        <div className={cn('rounded-lg p-2.5', bgClass)}>
          <Icon className={cn('size-5', iconClass)} />
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
      <td className="px-4 py-3">
        <Skeleton className="size-4 rounded" />
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-4 w-40" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-5 w-16 rounded-full" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-4 w-12" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-4 w-20" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-2 w-24 rounded-full" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-5 w-16 rounded-full" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-6 w-6 rounded" />
      </td>
    </tr>
  )
}

// ── Action menu ───────────────────────────────────────────────────────────────

interface ActionMenuProps {
  student: Student
  classes: string[]
  t: (k: string) => string
  onMoveToClass: (id: string, cls: string) => void
  onResetPassword: (id: string) => void
  onSuspend: (id: string) => void
  onRemove: (id: string) => void
}

function ActionMenu({
  student,
  classes,
  t,
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
        aria-label={t('school.students.aria.student_actions')}
      >
        <MoreHorizontal className="size-4" />
      </Button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => {
              setOpen(false)
              setMoveOpen(false)
            }}
          />
          <div className="absolute right-0 z-40 mt-1 w-48 rounded-lg border border-border bg-popover py-1 shadow-lg ring-1 ring-foreground/10">
            <Link
              href={`/school/students/${student.id}`}
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              <Eye className="size-3.5 text-muted-foreground" />
              {t('school.students.action.view_progress')}
            </Link>

            <div className="relative">
              <button
                className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
                onClick={() => setMoveOpen((v) => !v)}
              >
                <MoveRight className="size-3.5 text-muted-foreground" />
                {t('school.students.action.move_to_class')}
                <ChevronDown
                  className={cn(
                    'size-3 ml-auto text-muted-foreground transition-transform',
                    moveOpen && 'rotate-180',
                  )}
                />
              </button>
              {moveOpen && (
                <div className="absolute right-full top-0 mr-1 w-36 rounded-lg border border-border bg-popover py-1 shadow-lg ring-1 ring-foreground/10">
                  {classes.map((cls) => (
                    <button
                      key={cls}
                      className="flex w-full items-center px-3 py-1.5 text-sm text-foreground hover:bg-accent"
                      onClick={() => {
                        onMoveToClass(student.id, cls)
                        setOpen(false)
                        setMoveOpen(false)
                      }}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
              onClick={() => {
                onResetPassword(student.id)
                setOpen(false)
              }}
            >
              <Key className="size-3.5 text-muted-foreground" />
              {t('school.students.action.reset_password')}
            </button>

            <div className="my-1 border-t border-border" />

            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-clay-600 hover:bg-amber-500/10"
              onClick={() => {
                onSuspend(student.id)
                setOpen(false)
              }}
            >
              <Ban className="size-3.5" />
              {student.status === 'suspended'
                ? t('school.students.action.unsuspend')
                : t('school.students.action.suspend')}
            </button>

            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-destructive hover:bg-destructive/10"
              onClick={() => {
                onRemove(student.id)
                setOpen(false)
              }}
            >
              <Trash2 className="size-3.5" />
              {t('school.students.action.remove_school')}
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
  t: (k: string) => string
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmRemoveDialog({ student, t, onConfirm, onCancel }: ConfirmRemoveDialogProps) {
  return (
    <Dialog open={student !== null} onOpenChange={(v) => !v && onCancel()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="size-5" />
            {t('school.students.remove.title')}
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          {t('school.students.remove.body_prefix')}{' '}
          <span className="font-semibold text-foreground">
            {student?.firstName} {student?.lastName}
          </span>{' '}
          {t('school.students.remove.body_suffix')}
        </p>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onCancel}>
            {t('school.students.action.cancel')}
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            {t('school.students.remove.title')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ── Move to Class Bulk Dialog ──────────────────────────────────────────────────

interface MoveToClassDialogProps {
  open: boolean
  classes: string[]
  t: (k: string) => string
  onConfirm: (cls: string) => void
  onCancel: () => void
}

function MoveToClassDialog({ open, classes, t, onConfirm, onCancel }: MoveToClassDialogProps) {
  const [selected, setSelected] = useState('')
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onCancel()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{t('school.students.action.move_to_class')}</DialogTitle>
        </DialogHeader>
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t('school.students.action.select_class')} />
          </SelectTrigger>
          <SelectContent>
            {classes.map((cls) => (
              <SelectItem key={cls} value={cls}>
                {cls}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onCancel}>
            {t('school.students.action.cancel')}
          </Button>
          <Button
            disabled={!selected}
            onClick={() => {
              if (selected) onConfirm(selected)
              setSelected('')
            }}
          >
            {t('school.students.action.move_students')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function StudentsPage() {
  const t = useT()
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [yearFilter, setYearFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [classFilter, setClassFilter] = useState('all')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [page, setPage] = useState(1)
  const [removeTarget, setRemoveTarget] = useState<Student | null>(null)
  const [moveDialogOpen, setMoveDialogOpen] = useState(false)

  // ── Data fetching ─────────────────────────────────────────────────────────

  useEffect(() => {
    let cancelled = false
    async function fetchStudents() {
      try {
        const res = await fetch('/api/school/students')
        if (!res.ok) throw new Error('fetch failed')
        const data = await res.json()
        if (!cancelled) setStudents(data.students ?? data ?? [])
      } catch {
        // keep mock data
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    const t = setTimeout(() => fetchStudents(), 0)
    const lt = setTimeout(() => {
      if (!cancelled) setLoading(false)
    }, 900)
    return () => {
      cancelled = true
      clearTimeout(t)
      clearTimeout(lt)
    }
  }, [])

  // ── Derived data ──────────────────────────────────────────────────────────

  const availableClasses = useMemo(() => {
    const seen = new Set<string>()
    students.forEach((s) => {
      if (s.className) seen.add(s.className)
    })
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
    if (yearFilter !== 'all') list = list.filter((s) => s.yearGroup === yearFilter)
    if (statusFilter !== 'all') list = list.filter((s) => s.status === statusFilter)
    if (classFilter !== 'all') list = list.filter((s) => s.className === classFilter)
    return list
  }, [students, search, yearFilter, statusFilter, classFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => {
    setPage(1)
  }, [search, yearFilter, statusFilter, classFilter])

  // ── Statistics ────────────────────────────────────────────────────────────

  const stats = useMemo(() => {
    const total = students.length
    const oneWeekAgo = Date.now() - 7 * 864e5
    const activeThisWeek = students.filter(
      (s) => s.lastActive && new Date(s.lastActive).getTime() >= oneWeekAgo,
    ).length
    const notYetActive = students.filter((s) => !s.lastActive).length
    const suspended = students.filter((s) => s.status === 'suspended').length
    return { total, activeThisWeek, notYetActive, suspended }
  }, [students])

  // ── Selection helpers ─────────────────────────────────────────────────────

  const allPageSelected = paginated.length > 0 && paginated.every((s) => selected.has(s.id))

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
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, className: cls } : s)))
  }

  function handleResetPassword(_id: string) {
    // POST /api/school/students/:id/reset-password
  }

  function handleSuspend(id: string) {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === 'suspended' ? 'active' : 'suspended' } : s,
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
    setStudents((prev) => prev.map((s) => (selected.has(s.id) ? { ...s, className: cls } : s)))
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
      'Name,Email,Year Group,Class,Progress,Status',
      ...rows.map((s) =>
        [
          `${s.firstName} ${s.lastName}`,
          s.email,
          s.yearGroup,
          s.className ?? '',
          `${s.progress}%`,
          s.status,
        ].join(','),
      ),
    ].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'students-export.csv'
    a.click()
    URL.revokeObjectURL(url)
    setSelected(new Set())
  }

  function handleBulkSuspend() {
    setStudents((prev) =>
      prev.map((s) => (selected.has(s.id) ? { ...s, status: 'suspended' as StudentStatus } : s)),
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
      <div className="space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">{t('school.students.title')}</h1>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-sm font-semibold tabular-nums text-muted-foreground">
              {loading ? '...' : students.length}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Button variant="outline" size="sm" render={<Link href="/school/import" />}>
              <Upload className="size-4" />
              {t('school.students.import')}
            </Button>
            <Button size="sm" render={<Link href="/school/import?type=student" />}>
              <UserPlus className="size-4" />
              {t('school.students.add')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard
            label={t('school.students.stats.total')}
            value={loading ? '...' : stats.total}
            icon={GraduationCap}
            iconClass="text-emerald-400"
            bgClass="bg-emerald-500/10"
          />
          <StatCard
            label={t('school.students.stats.active_week')}
            value={loading ? '...' : stats.activeThisWeek}
            sub={
              loading
                ? undefined
                : stats.total > 0
                  ? `${Math.round((stats.activeThisWeek / stats.total) * 100)}% ${t('school.students.stats.of_total')}`
                  : undefined
            }
            icon={GraduationCap}
            iconClass="text-blue-400"
            bgClass="bg-blue-500/10"
          />
          <StatCard
            label={t('school.students.stats.not_active')}
            value={loading ? '...' : stats.notYetActive}
            icon={Hash}
            iconClass="text-clay-600"
            bgClass="bg-amber-500/10"
          />
          <StatCard
            label={t('school.students.stats.suspended')}
            value={loading ? '...' : stats.suspended}
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
              placeholder={t('school.students.search_placeholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-8 w-64 pl-8 text-sm"
            />
            {search && (
              <button
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setSearch('')}
                aria-label={t('school.students.aria.clear_search')}
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger size="sm" className="h-8 min-w-[130px]">
              <Filter className="size-3.5 text-muted-foreground" />
              <SelectValue placeholder={t('school.students.filter.year_group')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('school.students.filter.all_years')}</SelectItem>
              {YEAR_GROUPS.map((yg) => (
                <SelectItem key={yg} value={yg}>
                  {yg}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger size="sm" className="h-8 min-w-[120px]">
              <SelectValue placeholder={t('school.students.filter.status')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('school.students.filter.all_status')}</SelectItem>
              <SelectItem value="active">{t('school.students.status.active')}</SelectItem>
              <SelectItem value="inactive">{t('school.students.status.inactive')}</SelectItem>
              <SelectItem value="suspended">{t('school.students.status.suspended')}</SelectItem>
            </SelectContent>
          </Select>

          <Select value={classFilter} onValueChange={setClassFilter}>
            <SelectTrigger size="sm" className="h-8 min-w-[120px]">
              <SelectValue placeholder={t('school.students.filter.class')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('school.students.filter.all_classes')}</SelectItem>
              {(availableClasses.length > 0 ? availableClasses : MOCK_CLASSES).map((cls) => (
                <SelectItem key={cls} value={cls}>
                  {cls}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(search || yearFilter !== 'all' || statusFilter !== 'all' || classFilter !== 'all') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearch('')
                setYearFilter('all')
                setStatusFilter('all')
                setClassFilter('all')
              }}
            >
              <X className="size-3.5" />
              {t('school.students.filter.clear')}
            </Button>
          )}
        </div>

        {/* Bulk actions bar */}
        {selected.size > 0 && (
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5">
            <span className="text-sm font-medium">
              {selected.size} {t('school.students.selected_count')}
            </span>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <Button size="xs" variant="outline" onClick={() => setMoveDialogOpen(true)}>
                <MoveRight className="size-3" />
                {t('school.students.action.move_to_class')}
              </Button>
              <Button size="xs" variant="outline" onClick={handleBulkResetPasswords}>
                <Key className="size-3" />
                {t('school.students.action.reset_passwords')}
              </Button>
              <Button size="xs" variant="outline" onClick={handleBulkExport}>
                <Download className="size-3" />
                {t('school.students.action.export_selected')}
              </Button>
              <Button
                size="xs"
                variant="outline"
                className="border-amber-500/30 text-clay-600 hover:bg-amber-500/10"
                onClick={handleBulkSuspend}
              >
                <Ban className="size-3" />
                {t('school.students.action.suspend')}
              </Button>
              <Button size="xs" variant="destructive" onClick={handleBulkRemove}>
                <Trash2 className="size-3" />
                {t('school.students.action.remove_school')}
              </Button>
              <Button
                size="xs"
                variant="ghost"
                onClick={() => setSelected(new Set())}
                aria-label={t('school.students.aria.clear_selection')}
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
                      aria-label={t('school.students.aria.select_all')}
                      disabled={loading || paginated.length === 0}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.name')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.email')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.year')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.class')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.last_active')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.progress')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.working_at')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.status')}
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t('school.students.col.actions')}
                  </th>
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
                          <p className="text-base font-semibold">
                            {t('school.students.empty.title')}
                          </p>
                          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                            {t('school.students.empty.body')}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button size="sm" render={<Link href="/school/import" />}>
                            <Upload className="size-4" />
                            {t('school.students.import')}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            render={<Link href="/school/settings" />}
                          >
                            <Hash className="size-4" />
                            {t('school.students.empty.view_join_code')}
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
                      <p className="text-sm">{t('school.students.no_filter_results')}</p>
                    </td>
                  </tr>
                ) : (
                  paginated.map((student) => (
                    <tr
                      key={student.id}
                      className={cn(
                        'border-b border-white/5 transition-colors hover:bg-muted/20',
                        selected.has(student.id) && 'bg-primary/5',
                      )}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selected.has(student.id)}
                          onChange={() => toggleSelect(student.id)}
                          className="accent-primary size-4 cursor-pointer rounded"
                          aria-label={`${t('school.students.aria.select_one')} ${student.firstName} ${student.lastName}`}
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
                          <span className="italic text-muted-foreground/50">
                            {t('school.students.unassigned')}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 tabular-nums text-muted-foreground">
                        {formatRelativeTime(student.lastActive, t)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                            <div
                              className={cn(
                                'h-full rounded-full transition-all duration-500',
                                progressBarColor(student.progress),
                              )}
                              style={{ width: `${student.progress}%` }}
                            />
                          </div>
                          <span className="text-xs tabular-nums text-muted-foreground">
                            {student.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-sm font-medium ${gcseGradeColor(percentageToGCSEGrade(student.progress))}`}
                        >
                          {t('school.students.col.grade_prefix')}{' '}
                          {percentageToGCSEGrade(student.progress)}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={student.status} t={t} />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <ActionMenu
                          student={student}
                          classes={availableClasses.length > 0 ? availableClasses : MOCK_CLASSES}
                          t={t}
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
                {t('school.students.pagination.showing')} {(page - 1) * PAGE_SIZE + 1}&ndash;
                {Math.min(page * PAGE_SIZE, filtered.length)} {t('school.students.pagination.of')}{' '}
                {filtered.length} {t('school.students.pagination.students')}
              </p>
              <div className="flex items-center gap-1.5">
                <Button
                  variant="outline"
                  size="icon-sm"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                  aria-label={t('school.students.aria.prev_page')}
                >
                  <ChevronLeft className="size-4" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                  .reduce<(number | '...')[]>((acc, p, idx, arr) => {
                    if (idx > 0 && (arr[idx - 1] as number) + 1 < p) acc.push('...')
                    acc.push(p)
                    return acc
                  }, [])
                  .map((item, idx) =>
                    item === '...' ? (
                      <span key={`ellipsis-${idx}`} className="px-1 text-muted-foreground">
                        ...
                      </span>
                    ) : (
                      <Button
                        key={item}
                        variant={page === item ? 'default' : 'outline'}
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
                  aria-label={t('school.students.aria.next_page')}
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
        t={t}
        onConfirm={confirmRemove}
        onCancel={() => setRemoveTarget(null)}
      />

      <MoveToClassDialog
        open={moveDialogOpen}
        classes={availableClasses.length > 0 ? availableClasses : MOCK_CLASSES}
        t={t}
        onConfirm={handleBulkMoveToClass}
        onCancel={() => setMoveDialogOpen(false)}
      />
    </div>
  )
}
