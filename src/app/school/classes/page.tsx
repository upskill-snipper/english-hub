'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Users,
  Plus,
  BookOpen,
  GraduationCap,
  Search,
  X,
  Loader2,
  Edit,
  Trash2,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Class } from '@/lib/types'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ── Types ────────────────────────────────────────────────────────────────────

interface ClassListItem extends Class {
  teacher_name?: string | null
  actual_student_count?: number
  avg_quiz_score?: number | null
  last_active_at?: string | null
}

interface SchoolMember {
  id: string
  full_name: string
  role: string
}

type FormData = {
  name: string
  year_group: string
  exam_board: string
  teacher_id: string
  academic_year: string
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

const EXAM_BOARDS = [
  "AQA",
  "Edexcel",
  "Edexcel IGCSE",
  "Edexcel IAL",
  "OCR",
  "WJEC",
  "CAIE IGCSE",
]

const ACADEMIC_YEARS = ["2024-2025", "2025-2026", "2026-2027"]

const EMPTY_FORM: FormData = {
  name: "",
  year_group: "",
  exam_board: "",
  teacher_id: "",
  academic_year: "2025-2026",
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function boardBadgeColor(board: string | null): string {
  switch (board) {
    case "AQA":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20"
    case "Edexcel":
    case "Edexcel IGCSE":
    case "Edexcel IAL":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20"
    case "OCR":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    case "WJEC":
      return "bg-red-500/10 text-red-400 border-red-500/20"
    case "CAIE IGCSE":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function formatLastActive(dateStr: string | null | undefined): string {
  if (!dateStr) return "No activity yet"
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return "Active today"
  if (diffDays === 1) return "Active yesterday"
  if (diffDays < 7) return `Active ${diffDays} days ago`
  if (diffDays < 30) return `Active ${Math.floor(diffDays / 7)} weeks ago`
  return `Active ${Math.floor(diffDays / 30)} months ago`
}

function scoreColor(score: number): string {
  if (score >= 70) return "text-green-400"
  if (score >= 50) return "text-amber-400"
  return "text-red-400"
}

function scoreBarColor(score: number): string {
  if (score >= 70) return "bg-green-500"
  if (score >= 50) return "bg-amber-500"
  return "bg-red-500"
}

// ── Skeleton ──────────────────────────────────────────────────────────────────

function ClassCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-5 w-40 mb-2" />
        <Skeleton className="h-4 w-24" />
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-2 w-full rounded-full" />
      </CardContent>
    </Card>
  )
}

// ── Class Form ────────────────────────────────────────────────────────────────

interface ClassFormProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  teachers: SchoolMember[]
  onSubmit: (e: React.FormEvent) => void
  submitting: boolean
  error: string | null
  submitLabel: string
  loadingTeachers: boolean
}

function ClassForm({
  formData,
  setFormData,
  teachers,
  onSubmit,
  submitting,
  error,
  submitLabel,
  loadingTeachers,
}: ClassFormProps) {
  function field<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Class Name */}
      <div className="space-y-2">
        <Label htmlFor="class-name">
          Class Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="class-name"
          placeholder="e.g. Year 10 English - Set 1"
          value={formData.name}
          onChange={(e) => field("name", e.target.value)}
          required
          maxLength={100}
        />
      </div>

      {/* Year Group */}
      <div className="space-y-2">
        <Label>Year Group</Label>
        <Select
          value={formData.year_group}
          onValueChange={(val) => field("year_group", val)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select year group" />
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

      {/* Exam Board */}
      <div className="space-y-2">
        <Label>Exam Board</Label>
        <Select
          value={formData.exam_board}
          onValueChange={(val) => field("exam_board", val)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select exam board" />
          </SelectTrigger>
          <SelectContent>
            {EXAM_BOARDS.map((eb) => (
              <SelectItem key={eb} value={eb}>
                {eb}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Assign Teacher */}
      <div className="space-y-2">
        <Label>Assign Teacher</Label>
        <Select
          value={formData.teacher_id}
          onValueChange={(val) => field("teacher_id", val)}
          disabled={loadingTeachers}
        >
          <SelectTrigger className="w-full">
            <SelectValue
              placeholder={
                loadingTeachers ? "Loading teachers..." : "Select teacher (optional)"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {teachers.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.full_name}
                {t.role === "admin" && (
                  <span className="ml-1 text-xs text-muted-foreground">(Admin)</span>
                )}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Academic Year */}
      <div className="space-y-2">
        <Label>Academic Year</Label>
        <Select
          value={formData.academic_year}
          onValueChange={(val) => field("academic_year", val)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select academic year" />
          </SelectTrigger>
          <SelectContent>
            {ACADEMIC_YEARS.map((ay) => (
              <SelectItem key={ay} value={ay}>
                {ay}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <DialogFooter>
        <Button
          type="submit"
          disabled={submitting || !formData.name.trim()}
          className="w-full sm:w-auto"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {submitting ? "Saving..." : submitLabel}
        </Button>
      </DialogFooter>
    </form>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ClassListPage() {
  const [classes, setClasses] = useState<ClassListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Teachers for the form dropdowns
  const [teachers, setTeachers] = useState<SchoolMember[]>([])
  const [loadingTeachers, setLoadingTeachers] = useState(false)

  // Filters
  const [yearFilter, setYearFilter] = useState("all")
  const [boardFilter, setBoardFilter] = useState("all")

  // Create modal
  const [createOpen, setCreateOpen] = useState(false)
  const [createForm, setCreateForm] = useState<FormData>(EMPTY_FORM)
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState<string | null>(null)

  // Edit modal
  const [editTarget, setEditTarget] = useState<ClassListItem | null>(null)
  const [editForm, setEditForm] = useState<FormData>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [editError, setEditError] = useState<string | null>(null)

  // Delete confirmation
  const [deleteTarget, setDeleteTarget] = useState<ClassListItem | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState<string | null>(null)

  // ── Data fetching ─────────────────────────────────────────────────────────

  useEffect(() => {
    async function fetchClasses() {
      try {
        setError(null)
        const res = await fetch("/api/school/classes")
        if (!res.ok) throw new Error("Failed to fetch classes")
        const data = await res.json()
        setClasses(data.classes ?? data ?? [])
      } catch (err) {
        console.error("Failed to fetch classes:", err)
        setError("Could not load classes. Please try again.")
      } finally {
        setLoading(false)
      }
    }
    fetchClasses()
  }, [])

  useEffect(() => {
    async function fetchTeachers() {
      setLoadingTeachers(true)
      try {
        const res = await fetch("/api/school/members")
        if (!res.ok) return
        const data = await res.json()
        const all: SchoolMember[] = data.members ?? []
        setTeachers(
          all.filter((m) =>
            ["admin", "head_of_department", "teacher"].includes(m.role)
          )
        )
      } catch {
        // Non-critical — teacher list optional
      } finally {
        setLoadingTeachers(false)
      }
    }
    fetchTeachers()
  }, [])

  // ── Filtered view ─────────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    return classes.filter((c) => {
      if (yearFilter !== "all" && c.year_group !== yearFilter) return false
      if (boardFilter !== "all" && c.exam_board !== boardFilter) return false
      return true
    })
  }, [classes, yearFilter, boardFilter])

  // ── Create class ──────────────────────────────────────────────────────────

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    if (!createForm.name.trim()) return
    setCreating(true)
    setCreateError(null)
    try {
      const res = await fetch("/api/school/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: createForm.name.trim(),
          year_group: createForm.year_group || null,
          exam_board: createForm.exam_board || null,
          teacher_id: createForm.teacher_id || null,
          academic_year: createForm.academic_year,
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? "Failed to create class")
      }
      const payload = await res.json()
      const newClass: ClassListItem = payload.class ?? payload
      const teacher = teachers.find((t) => t.id === createForm.teacher_id)
      setClasses((prev) => [
        { ...newClass, teacher_name: teacher?.full_name ?? null },
        ...prev,
      ])
      setCreateForm(EMPTY_FORM)
      setCreateOpen(false)
    } catch (err: unknown) {
      setCreateError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setCreating(false)
    }
  }

  // ── Edit class ────────────────────────────────────────────────────────────

  function openEdit(cls: ClassListItem) {
    setEditTarget(cls)
    setEditForm({
      name: cls.name,
      year_group: cls.year_group ?? "",
      exam_board: cls.exam_board ?? "",
      teacher_id: cls.teacher_id ?? "",
      academic_year: cls.academic_year ?? "2025-2026",
    })
    setEditError(null)
  }

  async function handleEdit(e: React.FormEvent) {
    e.preventDefault()
    if (!editTarget || !editForm.name.trim()) return
    setSaving(true)
    setEditError(null)
    try {
      const res = await fetch(`/api/school/classes/${editTarget.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editForm.name.trim(),
          year_group: editForm.year_group || null,
          exam_board: editForm.exam_board || null,
          teacher_id: editForm.teacher_id || null,
          academic_year: editForm.academic_year,
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? "Failed to update class")
      }
      const payload = await res.json()
      const updated: ClassListItem = payload.class ?? payload
      const teacher = teachers.find((t) => t.id === editForm.teacher_id)
      setClasses((prev) =>
        prev.map((c) =>
          c.id === updated.id
            ? { ...c, ...updated, teacher_name: teacher?.full_name ?? c.teacher_name }
            : c
        )
      )
      setEditTarget(null)
    } catch (err: unknown) {
      setEditError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setSaving(false)
    }
  }

  // ── Delete class ──────────────────────────────────────────────────────────

  async function handleDelete() {
    if (!deleteTarget) return
    setDeleting(true)
    setDeleteError(null)
    try {
      const res = await fetch(`/api/school/classes/${deleteTarget.id}`, {
        method: "DELETE",
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? "Failed to delete class")
      }
      setClasses((prev) => prev.filter((c) => c.id !== deleteTarget.id))
      setDeleteTarget(null)
    } catch (err: unknown) {
      setDeleteError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setDeleting(false)
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              Classes
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage and monitor your English classes
            </p>
          </div>

          <Button onClick={() => { setCreateForm(EMPTY_FORM); setCreateError(null); setCreateOpen(true) }}>
            <Plus className="h-4 w-4" />
            Create Class
          </Button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Select value={yearFilter} onValueChange={(v) => setYearFilter(v)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Year Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Year Groups</SelectItem>
              {YEAR_GROUPS.map((yg) => (
                <SelectItem key={yg} value={yg}>{yg}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={boardFilter} onValueChange={(v) => setBoardFilter(v)}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Exam Board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Boards</SelectItem>
              {EXAM_BOARDS.map((eb) => (
                <SelectItem key={eb} value={eb}>{eb}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(yearFilter !== "all" || boardFilter !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { setYearFilter("all"); setBoardFilter("all") }}
            >
              <X className="h-3.5 w-3.5" />
              Clear filters
            </Button>
          )}
        </div>

        <Separator className="mb-6" />

        {/* Loading */}
        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ClassCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl border border-dashed border-destructive/30 bg-destructive/5 py-12 text-center">
            <p className="text-sm text-destructive">{error}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => window.location.reload()}
            >
              Try again
            </Button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && classes.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                No classes created yet
              </h3>
              <p className="mb-6 max-w-md text-sm text-muted-foreground">
                Create your first class to get started.
              </p>
              <Button onClick={() => { setCreateForm(EMPTY_FORM); setCreateError(null); setCreateOpen(true) }}>
                <Plus className="h-4 w-4" />
                Create Your First Class
              </Button>
            </CardContent>
          </Card>
        )}

        {/* No filter results */}
        {!loading && !error && filtered.length === 0 && classes.length > 0 && (
          <div className="rounded-xl border border-dashed border-border py-12 text-center">
            <Search className="mx-auto mb-2 h-8 w-8 text-muted-foreground opacity-50" />
            <p className="text-sm text-muted-foreground">
              No classes match your filters.
            </p>
          </div>
        )}

        {/* Class grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cls) => {
              const studentCount =
                cls.actual_student_count ?? cls.student_count ?? 0
              return (
                <Card
                  key={cls.id}
                  className="flex flex-col h-full transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base leading-snug line-clamp-2">
                        {cls.name}
                      </CardTitle>
                      {cls.exam_board && (
                        <Badge
                          variant="outline"
                          className={cn(
                            "shrink-0 text-[10px] uppercase",
                            boardBadgeColor(cls.exam_board)
                          )}
                        >
                          {cls.exam_board}
                        </Badge>
                      )}
                    </div>
                    {cls.year_group && (
                      <Badge
                        variant="secondary"
                        className="w-fit text-xs mt-1"
                      >
                        {cls.year_group}
                      </Badge>
                    )}
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 space-y-3">
                    {/* Teacher */}
                    {cls.teacher_name && (
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <BookOpen className="h-3 w-3 shrink-0" />
                        <span className="truncate">{cls.teacher_name}</span>
                      </div>
                    )}

                    {/* Student count */}
                    <div className="flex items-center gap-1.5 text-sm">
                      <Users className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="font-medium text-foreground">
                        {studentCount}
                      </span>
                      <span className="text-xs text-muted-foreground">students</span>
                    </div>

                    {/* Avg score bar */}
                    {cls.avg_quiz_score !== null &&
                      cls.avg_quiz_score !== undefined && (
                        <div>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Avg Score</span>
                            <span
                              className={cn(
                                "font-semibold tabular-nums",
                                scoreColor(cls.avg_quiz_score)
                              )}
                            >
                              {Math.round(cls.avg_quiz_score)}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                            <div
                              className={cn(
                                "h-full rounded-full transition-all duration-500",
                                scoreBarColor(cls.avg_quiz_score)
                              )}
                              style={{
                                width: `${Math.min(cls.avg_quiz_score, 100)}%`,
                              }}
                            />
                          </div>
                        </div>
                      )}

                    {/* Last active */}
                    <p className="text-[11px] text-muted-foreground">
                      {formatLastActive(cls.last_active_at)}
                    </p>

                    {/* Actions */}
                    <div className="mt-auto pt-2 flex items-center gap-2 border-t border-border">
                      <Link href={`/school/classes/${cls.id}`} className="flex-1">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full justify-between"
                        >
                          View
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => openEdit(cls)}
                        title="Edit class"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => {
                          setDeleteTarget(cls)
                          setDeleteError(null)
                        }}
                        title="Delete class"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>

      {/* ── Create Class Modal ──────────────────────────────────────────────── */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Class</DialogTitle>
            <DialogDescription>
              Set up a new class for your students.
            </DialogDescription>
          </DialogHeader>
          <ClassForm
            formData={createForm}
            setFormData={setCreateForm}
            teachers={teachers}
            onSubmit={handleCreate}
            submitting={creating}
            error={createError}
            submitLabel="Create Class"
            loadingTeachers={loadingTeachers}
          />
        </DialogContent>
      </Dialog>

      {/* ── Edit Class Modal ────────────────────────────────────────────────── */}
      <Dialog
        open={editTarget !== null}
        onOpenChange={(open) => { if (!open) setEditTarget(null) }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Class</DialogTitle>
            <DialogDescription>
              Update the details for this class.
            </DialogDescription>
          </DialogHeader>
          <ClassForm
            formData={editForm}
            setFormData={setEditForm}
            teachers={teachers}
            onSubmit={handleEdit}
            submitting={saving}
            error={editError}
            submitLabel="Save Changes"
            loadingTeachers={loadingTeachers}
          />
        </DialogContent>
      </Dialog>

      {/* ── Delete Confirmation Modal ───────────────────────────────────────── */}
      <Dialog
        open={deleteTarget !== null}
        onOpenChange={(open) => { if (!open) setDeleteTarget(null) }}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Delete Class
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold text-foreground">
                {deleteTarget?.name}
              </span>
              ? This action cannot be undone and will remove all associated
              student enrollments.
            </DialogDescription>
          </DialogHeader>
          {deleteError && (
            <p className="text-sm text-destructive">{deleteError}</p>
          )}
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setDeleteTarget(null)}
              disabled={deleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting && <Loader2 className="h-4 w-4 animate-spin" />}
              {deleting ? "Deleting..." : "Delete Class"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
