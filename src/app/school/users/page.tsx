'use client'

import { useEffect, useState, useMemo } from 'react'
import { useT } from '@/lib/i18n/use-t'
import Link from 'next/link'
import {
  Users,
  UserPlus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Key,
  Shield,
  GraduationCap,
  BookOpen,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  RefreshCw,
  Mail,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ── Types ─────────────────────────────────────────────────────────────────────

type Role = 'admin' | 'teacher' | 'student'
type Status = 'active' | 'pending' | 'suspended'

interface SchoolUser {
  id: string
  firstName: string
  lastName: string
  email: string
  role: Role
  yearGroup?: string
  class?: string
  status: Status
  lastActive?: string
  avatarInitials: string
}

// ── Mock data ─────────────────────────────────────────────────────────────────

const MOCK_USERS: SchoolUser[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Mitchell',
    email: 's.mitchell@school.edu',
    role: 'admin',
    status: 'active',
    lastActive: 'Today, 09:14',
    avatarInitials: 'SM',
  },
  {
    id: '2',
    firstName: 'James',
    lastName: 'Hargreaves',
    email: 'j.hargreaves@school.edu',
    role: 'teacher',
    class: '10B',
    status: 'active',
    lastActive: 'Today, 08:52',
    avatarInitials: 'JH',
  },
  {
    id: '3',
    firstName: 'Priya',
    lastName: 'Nair',
    email: 'p.nair@school.edu',
    role: 'teacher',
    class: '9A',
    status: 'active',
    lastActive: 'Yesterday',
    avatarInitials: 'PN',
  },
  {
    id: '4',
    firstName: 'Oliver',
    lastName: 'Bennett',
    email: 'o.bennett@school.edu',
    role: 'student',
    yearGroup: 'Year 10',
    class: '10B',
    status: 'active',
    lastActive: 'Today, 11:30',
    avatarInitials: 'OB',
  },
  {
    id: '5',
    firstName: 'Amara',
    lastName: 'Osei',
    email: 'a.osei@school.edu',
    role: 'student',
    yearGroup: 'Year 9',
    class: '9A',
    status: 'active',
    lastActive: 'Today, 10:05',
    avatarInitials: 'AO',
  },
  {
    id: '6',
    firstName: 'Lucas',
    lastName: 'Fernandez',
    email: 'l.fernandez@school.edu',
    role: 'student',
    yearGroup: 'Year 10',
    class: '10B',
    status: 'pending',
    avatarInitials: 'LF',
  },
  {
    id: '7',
    firstName: 'Chloe',
    lastName: 'Walsh',
    email: 'c.walsh@school.edu',
    role: 'student',
    yearGroup: 'Year 11',
    class: '11C',
    status: 'active',
    lastActive: '2 days ago',
    avatarInitials: 'CW',
  },
  {
    id: '8',
    firstName: 'Daniel',
    lastName: 'Kim',
    email: 'd.kim@school.edu',
    role: 'teacher',
    class: '11C',
    status: 'pending',
    avatarInitials: 'DK',
  },
  {
    id: '9',
    firstName: 'Fatima',
    lastName: 'Al-Rashid',
    email: 'f.alrashid@school.edu',
    role: 'student',
    yearGroup: 'Year 9',
    class: '9A',
    status: 'active',
    lastActive: 'Today, 09:47',
    avatarInitials: 'FA',
  },
  {
    id: '10',
    firstName: 'Thomas',
    lastName: 'Griffiths',
    email: 't.griffiths@school.edu',
    role: 'student',
    yearGroup: 'Year 11',
    class: '11C',
    status: 'suspended',
    lastActive: '5 days ago',
    avatarInitials: 'TG',
  },
  {
    id: '11',
    firstName: 'Isabella',
    lastName: 'Russo',
    email: 'i.russo@school.edu',
    role: 'admin',
    status: 'active',
    lastActive: 'Today, 07:30',
    avatarInitials: 'IR',
  },
  {
    id: '12',
    firstName: 'Ethan',
    lastName: 'Clarke',
    email: 'e.clarke@school.edu',
    role: 'student',
    yearGroup: 'Year 10',
    class: '10A',
    status: 'active',
    lastActive: 'Yesterday',
    avatarInitials: 'EC',
  },
]

const YEAR_GROUPS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13']
const PAGE_SIZE = 8

// ── Permission summary cards ──────────────────────────────────────────────────

const PERMISSION_CARDS = [
  {
    role: 'admin' as Role,
    label: 'School Admin',
    description: 'Full access -- manage all users, view all analytics, edit school settings',
    icon: Shield,
    colorClass: 'text-rose-400',
    bgClass: 'bg-rose-500/10',
    borderClass: 'border-rose-500/20',
  },
  {
    role: 'teacher' as Role,
    label: 'Teacher',
    description: 'View their classes, mark work, see student progress, access all resources',
    icon: BookOpen,
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-500/10',
    borderClass: 'border-blue-500/20',
  },
  {
    role: 'student' as Role,
    label: 'Student',
    description: 'Access courses, submit work, view own progress, receive feedback',
    icon: GraduationCap,
    colorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500/10',
    borderClass: 'border-emerald-500/20',
  },
]

// ── Role badge ────────────────────────────────────────────────────────────────

function RoleBadge({ role }: { role: Role }) {
  const config: Record<Role, { label: string; className: string }> = {
    admin: {
      label: 'Admin',
      className: 'bg-rose-500/15 text-rose-400 border border-rose-500/25',
    },
    teacher: {
      label: 'Teacher',
      className: 'bg-blue-500/15 text-blue-400 border border-blue-500/25',
    },
    student: {
      label: 'Student',
      className: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
    },
  }
  const { label, className } = config[role]
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        className,
      )}
    >
      {label}
    </span>
  )
}

// ── Status badge ──────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Status }) {
  const config: Record<Status, { label: string; className: string }> = {
    active: {
      label: 'Active',
      className: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
    },
    pending: {
      label: 'Pending invite',
      className: 'bg-amber-500/15 text-clay-600 border border-amber-500/25',
    },
    suspended: {
      label: 'Suspended',
      className: 'bg-zinc-500/15 text-zinc-400 border border-zinc-500/25',
    },
  }
  const { label, className } = config[status]
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        className,
      )}
    >
      {label}
    </span>
  )
}

// ── Avatar circle ─────────────────────────────────────────────────────────────

function AvatarCircle({ initials, role }: { initials: string; role: Role }) {
  const colorClass: Record<Role, string> = {
    admin: 'bg-rose-500/20 text-rose-400 ring-rose-500/30',
    teacher: 'bg-blue-500/20 text-blue-400 ring-blue-500/30',
    student: 'bg-emerald-500/20 text-emerald-400 ring-emerald-500/30',
  }
  return (
    <span
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-full text-xs font-bold ring-1',
        colorClass[role],
      )}
    >
      {initials}
    </span>
  )
}

// ── Skeleton row ──────────────────────────────────────────────────────────────

function SkeletonRow() {
  return (
    <tr className="border-b border-white/5">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-4 w-28" />
        </div>
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-4 w-36" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-5 w-16 rounded-full" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-4 w-16" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-5 w-20 rounded-full" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-4 w-20" />
      </td>
      <td className="px-4 py-3">
        <Skeleton className="h-4 w-16" />
      </td>
    </tr>
  )
}

// ── Add User Modal ────────────────────────────────────────────────────────────

interface AddUserModalProps {
  open: boolean
  onClose: () => void
  onAdd: (user: Omit<SchoolUser, 'id' | 'avatarInitials' | 'lastActive'>) => void
}

function AddUserModal({ open, onClose, onAdd }: AddUserModalProps) {
  const tx = useT()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role>('student')
  const [yearGroup, setYearGroup] = useState('')
  const [classVal, setClassVal] = useState('')
  const [sendInvite, setSendInvite] = useState(true)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName.trim() || !lastName.trim() || !email.trim()) return
    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      role,
      yearGroup: role === 'student' ? yearGroup || undefined : undefined,
      class: classVal.trim() || undefined,
      status: sendInvite ? 'pending' : 'active',
    })
    setFirstName('')
    setLastName('')
    setEmail('')
    setRole('student')
    setYearGroup('')
    setClassVal('')
    setSendInvite(true)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{tx('school.b15.users.modal_add_title')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {tx('school.b15.users.label_first_name')}
              </label>
              <Input
                placeholder={tx('school.b15.users.placeholder_first')}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {tx('school.b15.users.label_last_name')}
              </label>
              <Input
                placeholder={tx('school.b15.users.placeholder_last')}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              {tx('school.b15.users.label_email')}
            </label>
            <Input
              type="email"
              placeholder={tx('school.b15.users.placeholder_email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              {tx('school.b15.users.label_role')}
            </label>
            <Select value={role} onValueChange={(v) => setRole(v as Role)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={tx('school.b15.users.select_role')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">{tx('school.b15.users.role_admin')}</SelectItem>
                <SelectItem value="teacher">{tx('school.b15.users.role_teacher')}</SelectItem>
                <SelectItem value="student">{tx('school.b15.users.role_student')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {role === 'student' && (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {tx('school.b15.users.label_year_group')}
              </label>
              <Select value={yearGroup} onValueChange={setYearGroup}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={tx('school.b15.users.select_year_group')} />
                </SelectTrigger>
                <SelectContent>
                  {YEAR_GROUPS.map((yg) => (
                    <SelectItem key={yg} value={yg}>
                      {yg}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              {tx('school.b15.users.label_class')}
            </label>
            <Input
              placeholder={tx('school.b15.users.placeholder_class')}
              value={classVal}
              onChange={(e) => setClassVal(e.target.value)}
            />
          </div>

          <label className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 px-3 py-2.5 text-sm transition-colors hover:bg-muted/50">
            <input
              type="checkbox"
              checked={sendInvite}
              onChange={(e) => setSendInvite(e.target.checked)}
              className="accent-primary size-4"
            />
            <Mail className="size-4 text-muted-foreground" />
            <span>{tx('school.b15.users.send_invite')}</span>
          </label>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              {tx('school.b15.users.btn_cancel')}
            </Button>
            <Button type="submit">
              <UserPlus className="size-4" />
              {tx('school.b15.users.btn_add_user')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// ── Action menu ───────────────────────────────────────────────────────────────

interface ActionMenuProps {
  user: SchoolUser
  onEdit: (user: SchoolUser) => void
  onRemove: (id: string) => void
  onResetPassword: (id: string) => void
}

function ActionMenu({ user, onEdit, onRemove, onResetPassword }: ActionMenuProps) {
  const tx = useT()
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setOpen((v) => !v)}
        aria-label="Actions"
      >
        <MoreHorizontal className="size-4" />
      </Button>
      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-40 mt-1 w-44 rounded-lg border border-border bg-popover py-1 shadow-lg ring-1 ring-foreground/10">
            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
              onClick={() => {
                onEdit(user)
                setOpen(false)
              }}
            >
              <Edit className="size-3.5 text-muted-foreground" />
              {tx('school.b15.users.action_edit')}
            </button>
            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-foreground hover:bg-accent"
              onClick={() => {
                onResetPassword(user.id)
                setOpen(false)
              }}
            >
              <Key className="size-3.5 text-muted-foreground" />
              {tx('school.b15.users.action_reset_pw')}
            </button>
            <div className="my-1 border-t border-border" />
            <button
              className="flex w-full items-center gap-2.5 px-3 py-1.5 text-sm text-destructive hover:bg-destructive/10"
              onClick={() => {
                onRemove(user.id)
                setOpen(false)
              }}
            >
              <Trash2 className="size-3.5" />
              {tx('school.b15.users.action_remove')}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function UserManagementPage() {
  const tx = useT()
  const [users, setUsers] = useState<SchoolUser[]>(MOCK_USERS)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [yearFilter, setYearFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [page, setPage] = useState(1)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<SchoolUser | null>(null)

  // Fetch data from API, fall back to mock data on error
  useEffect(() => {
    let cancelled = false
    async function fetchUsers() {
      try {
        const [membersRes, studentsRes] = await Promise.all([
          fetch('/api/school/members'),
          fetch('/api/school/students'),
        ])
        if (!membersRes.ok || !studentsRes.ok) throw new Error('fetch failed')
        const membersData: SchoolUser[] = await membersRes.json()
        const studentsData: SchoolUser[] = await studentsRes.json()
        const merged = [
          ...membersData,
          ...studentsData.filter((s) => !membersData.some((m) => m.id === s.id)),
        ]
        if (!cancelled) setUsers(merged)
      } catch {
        // keep mock data
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    const timer = setTimeout(() => {
      if (!cancelled) fetchUsers()
    }, 0)
    // Simulate loading for mock display
    const loadTimer = setTimeout(() => {
      if (!cancelled) setLoading(false)
    }, 800)
    return () => {
      cancelled = true
      clearTimeout(timer)
      clearTimeout(loadTimer)
    }
  }, [])

  // ── Filtered users ──────────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    let list = users

    // Tab filter
    if (activeTab !== 'all') {
      list = list.filter((u) => u.role === activeTab)
    }

    // Search
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(
        (u) =>
          `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q),
      )
    }

    // Role dropdown filter (independent of tabs so they stack)
    if (roleFilter !== 'all') {
      list = list.filter((u) => u.role === roleFilter)
    }

    // Year group filter
    if (yearFilter !== 'all') {
      list = list.filter((u) => u.yearGroup === yearFilter)
    }

    // Status filter
    if (statusFilter !== 'all') {
      list = list.filter((u) => u.status === statusFilter)
    }

    return list
  }, [users, activeTab, search, roleFilter, yearFilter, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  // Reset page when filters change
  useEffect(() => {
    setPage(1)
  }, [activeTab, search, roleFilter, yearFilter, statusFilter])

  // ── Counts for tab badges ───────────────────────────────────────────────────
  const counts = useMemo(
    () => ({
      all: users.length,
      teacher: users.filter((u) => u.role === 'teacher').length,
      student: users.filter((u) => u.role === 'student').length,
      admin: users.filter((u) => u.role === 'admin').length,
    }),
    [users],
  )

  // ── Selection helpers ───────────────────────────────────────────────────────
  const allPageSelected = paginated.length > 0 && paginated.every((u) => selected.has(u.id))

  function toggleSelectAll() {
    if (allPageSelected) {
      setSelected((prev) => {
        const next = new Set(prev)
        paginated.forEach((u) => next.delete(u.id))
        return next
      })
    } else {
      setSelected((prev) => {
        const next = new Set(prev)
        paginated.forEach((u) => next.add(u.id))
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

  // ── Bulk actions ────────────────────────────────────────────────────────────
  function handleRemoveSelected() {
    setUsers((prev) => prev.filter((u) => !selected.has(u.id)))
    setSelected(new Set())
  }

  function handleResetPasswords() {
    // In real app: POST /api/school/members/reset-passwords
    setSelected(new Set())
  }

  function handleExportSelected() {
    const rows = users.filter((u) => selected.has(u.id))
    const csv = [
      'Name,Email,Role,Year Group,Status',
      ...rows.map((u) =>
        [`${u.firstName} ${u.lastName}`, u.email, u.role, u.yearGroup ?? '', u.status].join(','),
      ),
    ].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'users-export.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  // ── CRUD handlers ───────────────────────────────────────────────────────────
  function handleAddUser(data: Omit<SchoolUser, 'id' | 'avatarInitials' | 'lastActive'>) {
    const initials = `${data.firstName[0]}${data.lastName[0]}`.toUpperCase()
    const newUser: SchoolUser = {
      ...data,
      id: String(Date.now()),
      avatarInitials: initials,
    }
    setUsers((prev) => [newUser, ...prev])
  }

  function handleRemoveUser(id: string) {
    setUsers((prev) => prev.filter((u) => u.id !== id))
    setSelected((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  function handleResetPassword(_id: string) {
    // In real app: POST /api/school/members/:id/reset-password
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        {/* ── Page header ── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{tx('school.b15.users.title')}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{tx('school.b15.users.subtitle')}</p>
          </div>
          <div className="flex items-center gap-2.5">
            <Button variant="outline" size="sm" render={<Link href="/school/import" />}>
              <Download className="size-4" />
              {tx('school.b15.users.btn_import')}
            </Button>
            <Button size="sm" onClick={() => setAddModalOpen(true)}>
              <UserPlus className="size-4" />
              {tx('school.b15.users.btn_add')}
            </Button>
          </div>
        </div>

        {/* ── Permissions summary cards ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PERMISSION_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <Card key={card.role} className={cn('border bg-card/50', card.borderClass)}>
                <CardContent className="flex items-start gap-3 pt-4 pb-4">
                  <div className={cn('mt-0.5 rounded-lg p-2', card.bgClass)}>
                    <Icon className={cn('size-4', card.colorClass)} />
                  </div>
                  <div className="min-w-0">
                    <p className={cn('text-sm font-semibold', card.colorClass)}>{card.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* ── Tabs ── */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <TabsList>
                {(
                  [
                    { value: 'all', label: tx('school.b15.users.tab_all'), count: counts.all },
                    {
                      value: 'teacher',
                      label: tx('school.b15.users.tab_teachers'),
                      count: counts.teacher,
                    },
                    {
                      value: 'student',
                      label: tx('school.b15.users.tab_students'),
                      count: counts.student,
                    },
                    {
                      value: 'admin',
                      label: tx('school.b15.users.tab_admins'),
                      count: counts.admin,
                    },
                  ] as const
                ).map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                    <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-px text-[10px] font-semibold tabular-nums text-muted-foreground">
                      {tab.count}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* ── Search + Filters ── */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder={tx('school.b15.users.search_placeholder')}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-8 w-56 pl-8 text-sm"
                  />
                  {search && (
                    <button
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setSearch('')}
                      aria-label="Clear search"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>

                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger size="sm" className="h-8 min-w-[110px]">
                    <Filter className="size-3.5 text-muted-foreground" />
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{tx('school.b15.users.filter_all_roles')}</SelectItem>
                    <SelectItem value="admin">{tx('school.b15.users.role_admin')}</SelectItem>
                    <SelectItem value="teacher">{tx('school.b15.users.role_teacher')}</SelectItem>
                    <SelectItem value="student">{tx('school.b15.users.role_student')}</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger size="sm" className="h-8 min-w-[130px]">
                    <SelectValue placeholder="Year Group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{tx('school.b15.users.filter_all_years')}</SelectItem>
                    {YEAR_GROUPS.map((yg) => (
                      <SelectItem key={yg} value={yg}>
                        {yg}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger size="sm" className="h-8 min-w-[110px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{tx('school.b15.users.filter_all_status')}</SelectItem>
                    <SelectItem value="active">{tx('school.b15.users.status_active')}</SelectItem>
                    <SelectItem value="pending">{tx('school.b15.users.status_pending')}</SelectItem>
                    <SelectItem value="suspended">
                      {tx('school.b15.users.status_suspended')}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* ── Bulk action bar ── */}
            {selected.size > 0 && (
              <div className="flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5">
                <span className="text-sm font-medium">
                  {selected.size} {tx('school.b15.users.bulk_selected')}
                </span>
                <div className="flex items-center gap-2 ml-auto">
                  <Button size="xs" variant="outline" onClick={handleExportSelected}>
                    <Download className="size-3" />
                    {tx('school.b15.users.bulk_export')}
                  </Button>
                  <Button size="xs" variant="outline" onClick={handleResetPasswords}>
                    <RefreshCw className="size-3" />
                    {tx('school.b15.users.bulk_reset_pw')}
                  </Button>
                  <Button size="xs" variant="destructive" onClick={handleRemoveSelected}>
                    <Trash2 className="size-3" />
                    {tx('school.b15.users.bulk_remove')}
                  </Button>
                  <Button size="xs" variant="ghost" onClick={() => setSelected(new Set())}>
                    <X className="size-3" />
                  </Button>
                </div>
              </div>
            )}

            {/* ── Tab panels -- all share the same table ── */}
            {(['all', 'teacher', 'student', 'admin'] as const).map((tab) => (
              <TabsContent key={tab} value={tab}>
                <Card className="overflow-hidden">
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
                            />
                          </th>
                          <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            {tx('school.b15.users.col_name')}
                          </th>
                          <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            {tx('school.b15.users.col_email')}
                          </th>
                          <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            {tx('school.b15.users.col_role')}
                          </th>
                          <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            {tx('school.b15.users.col_year')}
                          </th>
                          <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            {tx('school.b15.users.col_status')}
                          </th>
                          <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            {tx('school.b15.users.col_last_active')}
                          </th>
                          <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                            {tx('school.b15.users.col_actions')}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          Array.from({ length: PAGE_SIZE }).map((_, i) => <SkeletonRow key={i} />)
                        ) : paginated.length === 0 ? (
                          <tr>
                            <td
                              colSpan={8}
                              className="px-4 py-12 text-center text-muted-foreground"
                            >
                              <Users className="mx-auto mb-2 size-8 opacity-30" />
                              <p className="text-sm">{tx('school.b15.users.no_users')}</p>
                            </td>
                          </tr>
                        ) : (
                          paginated.map((user) => (
                            <tr
                              key={user.id}
                              className={cn(
                                'border-b border-white/5 transition-colors hover:bg-muted/20',
                                selected.has(user.id) && 'bg-primary/5',
                              )}
                            >
                              <td className="px-4 py-3">
                                <input
                                  type="checkbox"
                                  checked={selected.has(user.id)}
                                  onChange={() => toggleSelect(user.id)}
                                  className="accent-primary size-4 cursor-pointer rounded"
                                  aria-label={`Select ${user.firstName} ${user.lastName}`}
                                />
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <AvatarCircle initials={user.avatarInitials} role={user.role} />
                                  <span className="font-medium">
                                    {user.firstName} {user.lastName}
                                  </span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                              <td className="px-4 py-3">
                                <RoleBadge role={user.role} />
                              </td>
                              <td className="px-4 py-3 text-muted-foreground">
                                {user.yearGroup ?? (
                                  <span className="text-muted-foreground/40">--</span>
                                )}
                              </td>
                              <td className="px-4 py-3">
                                <StatusBadge status={user.status} />
                              </td>
                              <td className="px-4 py-3 text-muted-foreground">
                                {user.lastActive ?? (
                                  <span className="text-muted-foreground/40">
                                    {tx('school.b15.users.never')}
                                  </span>
                                )}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <ActionMenu
                                  user={user}
                                  onEdit={setEditingUser}
                                  onRemove={handleRemoveUser}
                                  onResetPassword={handleResetPassword}
                                />
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* ── Pagination ── */}
                  {!loading && filtered.length > 0 && (
                    <div className="flex items-center justify-between border-t border-white/5 px-4 py-3">
                      <p className="text-xs text-muted-foreground">
                        {tx('school.b15.users.showing')}{' '}
                        <span className="font-medium text-foreground">
                          {(page - 1) * PAGE_SIZE + 1}
                        </span>{' '}
                        -{' '}
                        <span className="font-medium text-foreground">
                          {Math.min(page * PAGE_SIZE, filtered.length)}
                        </span>{' '}
                        {tx('school.b15.users.of')}{' '}
                        <span className="font-medium text-foreground">{filtered.length}</span>{' '}
                        {tx('school.b15.users.users_suffix')}
                      </p>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="icon-xs"
                          disabled={page === 1}
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                          aria-label="Previous page"
                        >
                          <ChevronLeft className="size-3.5" />
                        </Button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                          .reduce<(number | '...')[]>((acc, p, i, arr) => {
                            if (i > 0 && p - (arr[i - 1] as number) > 1) {
                              acc.push('...')
                            }
                            acc.push(p)
                            return acc
                          }, [])
                          .map((p, i) =>
                            p === '...' ? (
                              <span
                                key={`ellipsis-${i}`}
                                className="px-1 text-xs text-muted-foreground"
                              >
                                ...
                              </span>
                            ) : (
                              <Button
                                key={p}
                                variant={page === p ? 'default' : 'outline'}
                                size="icon-xs"
                                onClick={() => setPage(p as number)}
                              >
                                {p}
                              </Button>
                            ),
                          )}
                        <Button
                          variant="outline"
                          size="icon-xs"
                          disabled={page === totalPages}
                          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                          aria-label="Next page"
                        >
                          <ChevronRight className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>

      {/* ── Add User modal ── */}
      <AddUserModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddUser}
      />

      {/* ── Edit User modal (reuses Add form pre-filled) ── */}
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={(updated) => {
            setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)))
            setEditingUser(null)
          }}
        />
      )}
    </div>
  )
}

// ── Edit User Modal ───────────────────────────────────────────────────────────

interface EditUserModalProps {
  user: SchoolUser
  onClose: () => void
  onSave: (user: SchoolUser) => void
}

function EditUserModal({ user, onClose, onSave }: EditUserModalProps) {
  const tx = useT()
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [role, setRole] = useState<Role>(user.role)
  const [yearGroup, setYearGroup] = useState(user.yearGroup ?? '')
  const [classVal, setClassVal] = useState(user.class ?? '')
  const [status, setStatus] = useState<Status>(user.status)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const initials = `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase()
    onSave({
      ...user,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      role,
      yearGroup: role === 'student' ? yearGroup || undefined : undefined,
      class: classVal.trim() || undefined,
      status,
      avatarInitials: initials || user.avatarInitials,
    })
  }

  return (
    <Dialog open onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{tx('school.b15.users.modal_edit_title')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {tx('school.b15.users.label_first_name')}
              </label>
              <Input
                placeholder={tx('school.b15.users.placeholder_first')}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {tx('school.b15.users.label_last_name')}
              </label>
              <Input
                placeholder={tx('school.b15.users.placeholder_last')}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              {tx('school.b15.users.label_email')}
            </label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {tx('school.b15.users.label_role')}
              </label>
              <Select value={role} onValueChange={(v) => setRole(v as Role)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">{tx('school.b15.users.role_admin')}</SelectItem>
                  <SelectItem value="teacher">{tx('school.b15.users.role_teacher')}</SelectItem>
                  <SelectItem value="student">{tx('school.b15.users.role_student')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {tx('school.b15.users.label_status')}
              </label>
              <Select value={status} onValueChange={(v) => setStatus(v as Status)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">{tx('school.b15.users.status_active')}</SelectItem>
                  <SelectItem value="pending">{tx('school.b15.users.status_pending')}</SelectItem>
                  <SelectItem value="suspended">
                    {tx('school.b15.users.status_suspended')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {role === 'student' && (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {tx('school.b15.users.label_year_group')}
              </label>
              <Select value={yearGroup} onValueChange={setYearGroup}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={tx('school.b15.users.select_year_group')} />
                </SelectTrigger>
                <SelectContent>
                  {YEAR_GROUPS.map((yg) => (
                    <SelectItem key={yg} value={yg}>
                      {yg}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              {tx('school.b15.users.label_class')}
            </label>
            <Input
              placeholder={tx('school.b15.users.placeholder_class')}
              value={classVal}
              onChange={(e) => setClassVal(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              {tx('school.b15.users.btn_cancel')}
            </Button>
            <Button type="submit">{tx('school.b15.users.btn_save')}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
