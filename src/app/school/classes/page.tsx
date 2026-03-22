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
  DialogTrigger,
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
  teacher_name?: string
  avg_score?: number
  completion_rate?: number
}

// ── Constants ────────────────────────────────────────────────────────────────

const YEAR_GROUPS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13']
const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE', 'Eduqas']
const ACADEMIC_YEARS = ['2025/26', '2026/27', '2027/28']

// ── Helpers ──────────────────────────────────────────────────────────────────

function scoreBarColor(score: number): string {
  if (score >= 70) return 'bg-green-500'
  if (score >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function boardBadgeColor(board: string | null): string {
  switch (board) {
    case 'AQA':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    case 'Edexcel':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    case 'OCR':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    case 'WJEC':
    case 'Eduqas':
      return 'bg-red-500/10 text-red-400 border-red-500/20'
    case 'CIE':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

// ── Skeleton ─────────────────────────────────────────────────────────────────

function ClassCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-4 w-20" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-3 w-full mb-2" />
        <Skeleton className="h-3 w-2/3 mb-2" />
        <Skeleton className="h-2 w-full rounded-full" />
      </CardContent>
    </Card>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function ClassListPage() {
  const [classes, setClasses] = useState<ClassListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filters
  const [yearFilter, setYearFilter] = useState<string>('all')
  const [boardFilter, setBoardFilter] = useState<string>('all')

  // Create class form
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    year_group: '',
    exam_board: '',
    academic_year: ACADEMIC_YEARS[0],
  })
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState<string | null>(null)

  // ── Fetch classes ────────────────────────────────────────────────────────

  useEffect(() => {
    async function fetchClasses() {
      try {
        setError(null)
        const res = await fetch('/api/school/classes')
        if (!res.ok) throw new Error('Failed to fetch classes')
        const data = await res.json()
        setClasses(data.classes ?? data ?? [])
      } catch (err) {
        console.error('Failed to fetch classes:', err)
        setError('Could not load classes. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchClasses()
  }, [])

  // ── Filtered classes ─────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    return classes.filter((c) => {
      if (yearFilter !== 'all' && c.year_group !== yearFilter) return false
      if (boardFilter !== 'all' && c.exam_board !== boardFilter) return false
      return true
    })
  }, [classes, yearFilter, boardFilter])

  // ── Create class ─────────────────────────────────────────────────────────

  async function handleCreateClass(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.name.trim()) return

    setCreating(true)
    setCreateError(null)

    try {
      const res = await fetch('/api/school/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          year_group: formData.year_group || null,
          exam_board: formData.exam_board || null,
          academic_year: formData.academic_year,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Failed to create class')
      }

      const newClass = await res.json()
      setClasses((prev) => [...prev, newClass])
      setFormData({ name: '', year_group: '', exam_board: '', academic_year: ACADEMIC_YEARS[0] })
      setDialogOpen(false)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      setCreateError(message)
    } finally {
      setCreating(false)
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────

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

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger
              render={
                <Button>
                  <Plus className="h-4 w-4" />
                  Create Class
                </Button>
              }
            />
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Class</DialogTitle>
                <DialogDescription>
                  Set up a new class for your students.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleCreateClass} className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="class-name">Class Name</Label>
                  <Input
                    id="class-name"
                    placeholder="e.g. 10A English Literature"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                {/* Year Group */}
                <div className="space-y-2">
                  <Label>Year Group</Label>
                  <Select
                    value={formData.year_group}
                    onValueChange={(val) => setFormData((prev) => ({ ...prev, year_group: val as string }))}
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
                    onValueChange={(val) => setFormData((prev) => ({ ...prev, exam_board: val as string }))}
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

                {/* Academic Year */}
                <div className="space-y-2">
                  <Label>Academic Year</Label>
                  <Select
                    value={formData.academic_year}
                    onValueChange={(val) => setFormData((prev) => ({ ...prev, academic_year: val as string }))}
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

                {createError && (
                  <p className="text-sm text-destructive">{createError}</p>
                )}

                <DialogFooter>
                  <Button type="submit" disabled={creating || !formData.name.trim()}>
                    {creating && <Loader2 className="h-4 w-4 animate-spin" />}
                    {creating ? 'Creating...' : 'Create Class'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Select value={yearFilter} onValueChange={(v) => setYearFilter(v ?? '')}>
            <SelectTrigger>
              <SelectValue placeholder="Year Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Year Groups</SelectItem>
              {YEAR_GROUPS.map((yg) => (
                <SelectItem key={yg} value={yg}>{yg}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={boardFilter} onValueChange={(v) => setBoardFilter(v ?? '')}>
            <SelectTrigger>
              <SelectValue placeholder="Exam Board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Boards</SelectItem>
              {EXAM_BOARDS.map((eb) => (
                <SelectItem key={eb} value={eb}>{eb}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(yearFilter !== 'all' || boardFilter !== 'all') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setYearFilter('all')
                setBoardFilter('all')
              }}
            >
              <X className="h-3.5 w-3.5" />
              Clear filters
            </Button>
          )}
        </div>

        <Separator className="mb-6" />

        {/* Loading state */}
        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ClassCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="rounded-xl border border-dashed border-destructive/30 bg-destructive/5 py-12 text-center">
            <p className="text-sm text-destructive">{error}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setLoading(true)
                setError(null)
                window.location.reload()
              }}
            >
              Try again
            </Button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && classes.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">No classes yet</h3>
              <p className="mb-6 max-w-md text-sm text-muted-foreground">
                Create your first class to start tracking student progress and performance.
              </p>
              <Button onClick={() => setDialogOpen(true)}>
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
            <p className="text-sm text-muted-foreground">No classes match your filters.</p>
          </div>
        )}

        {/* Class grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cls) => (
              <Link key={cls.id} href={`/school/classes/${cls.id}`}>
                <Card className="h-full transition-all duration-200 hover:border-primary/30 hover:shadow-md cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base leading-snug">{cls.name}</CardTitle>
                      {cls.exam_board && (
                        <Badge
                          variant="outline"
                          className={cn('shrink-0 text-[10px] uppercase', boardBadgeColor(cls.exam_board))}
                        >
                          {cls.exam_board}
                        </Badge>
                      )}
                    </div>
                    {cls.year_group && (
                      <p className="text-xs text-muted-foreground">{cls.year_group}</p>
                    )}
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {/* Stats row */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        <span className="font-medium text-foreground">{cls.student_count}</span>
                        <span className="text-xs">students</span>
                      </div>
                      {cls.teacher_name && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground truncate">
                          <BookOpen className="h-3 w-3 shrink-0" />
                          <span className="truncate">{cls.teacher_name}</span>
                        </div>
                      )}
                    </div>

                    {/* Avg Score bar */}
                    {cls.avg_score !== undefined && (
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Avg Score</span>
                          <span className={cn(
                            'font-semibold tabular-nums',
                            cls.avg_score >= 70 ? 'text-green-400' :
                            cls.avg_score >= 50 ? 'text-amber-400' : 'text-red-400'
                          )}>
                            {Math.round(cls.avg_score)}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={cn('h-full rounded-full transition-all duration-500', scoreBarColor(cls.avg_score))}
                            style={{ width: `${Math.min(cls.avg_score, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Completion */}
                    {cls.completion_rate !== undefined && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Completion</span>
                        <span className="font-medium tabular-nums text-foreground">
                          {Math.round(cls.completion_rate)}%
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
