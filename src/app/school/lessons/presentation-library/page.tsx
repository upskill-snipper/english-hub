'use client'

import { useState, useMemo, useCallback } from 'react'
import {
  BookOpen,
  Download,
  Eye,
  EyeOff,
  Search,
  Filter,
  Layers,
  Clock,
  GraduationCap,
  Loader2,
  ChevronDown,
  ChevronRight,
  Presentation,
  ArrowLeft,
} from 'lucide-react'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { y7Presentations } from '@/data/curriculum/y7-presentation-content'
import { y8Presentations } from '@/data/curriculum/y8-presentation-content'
import { y9Presentations } from '@/data/curriculum/y9-presentation-content'
import { igcsePresentations } from '@/data/curriculum/igcse-presentation-content'
import { ialPresentations } from '@/data/curriculum/ial-presentation-content'
import { allTeacherPowerpointsComplete as teacherPowerpoints } from '@/data/teacher-powerpoints'

import {
  toCatalogueEntry,
  teacherToCatalogueEntry,
  presentationToLessonPlan,
  teacherPresentationToLessonPlan,
  type PresentationCatalogueEntry,
} from '@/lib/pptx/content-adapter'

import type { LessonPresentation } from '@/data/curriculum/y7-presentation-content'
import type { TeacherPresentation } from '@/lib/pptx/content-adapter'

// ─── Build the full catalogue ───────────────────────────────────────────────

const allCurriculumPresentations: LessonPresentation[] = [
  ...y7Presentations,
  ...y8Presentations,
  ...y9Presentations,
  ...igcsePresentations,
  ...ialPresentations,
]

const catalogue: PresentationCatalogueEntry[] = [
  ...allCurriculumPresentations.map(toCatalogueEntry),
  ...teacherPowerpoints.map((tp) =>
    teacherToCatalogueEntry(tp as unknown as TeacherPresentation),
  ),
]

// Lookup maps keyed by id for quick access during download
const curriculumById = new Map(
  allCurriculumPresentations.map((p) => [p.id, p]),
)
const teacherById = new Map(
  teacherPowerpoints.map((tp) => [tp.id, tp as unknown as TeacherPresentation]),
)

// ─── Derive filter options ──────────────────────────────────────────────────

const YEAR_GROUPS = Array.from(
  new Set(catalogue.map((e) => e.yearGroup)),
).sort()

const BOARDS = Array.from(
  new Set(catalogue.map((e) => e.examBoard)),
).sort()

// ─── Helpers ────────────────────────────────────────────────────────────────

function yearGroupColour(yg: string): string {
  const lower = yg.toLowerCase()
  if (lower.includes('7')) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  if (lower.includes('8')) return 'bg-sky-500/10 text-sky-400 border-sky-500/20'
  if (lower.includes('9')) return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
  if (lower.includes('10')) return 'bg-violet-500/10 text-violet-400 border-violet-500/20'
  if (lower.includes('11')) return 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  if (lower.includes('12')) return 'bg-teal-500/10 text-teal-400 border-teal-500/20'
  if (lower.includes('13')) return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  if (lower.includes('gcse')) return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
  return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
}

function sourceColour(source: string): string {
  if (source === 'curriculum') return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
}

// ─── Grouped structure ──────────────────────────────────────────────────────

interface YearGroupSection {
  label: string
  entries: PresentationCatalogueEntry[]
}

function groupByYearGroup(entries: PresentationCatalogueEntry[]): YearGroupSection[] {
  const groups = new Map<string, PresentationCatalogueEntry[]>()
  for (const entry of entries) {
    const list = groups.get(entry.yearGroup) ?? []
    list.push(entry)
    groups.set(entry.yearGroup, list)
  }

  // Sort by a sensible order
  const order = ['Year 7', 'Year 8', 'Year 9', 'Y10', 'Y11', 'GCSE', 'Y12', 'Y13']
  return Array.from(groups.entries())
    .sort(([a], [b]) => {
      const ia = order.findIndex((o) => a.includes(o))
      const ib = order.findIndex((o) => b.includes(o))
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
    })
    .map(([label, entries]) => ({ label, entries }))
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function PresentationLibraryPage() {
  // Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [yearFilter, setYearFilter] = useState('all')
  const [boardFilter, setBoardFilter] = useState('all')

  // Preview state
  const [previewId, setPreviewId] = useState<string | null>(null)

  // Download state
  const [downloadingId, setDownloadingId] = useState<string | null>(null)

  // Collapsed groups
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set())

  // ── Filtering ─────────────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    return catalogue.filter((entry) => {
      if (yearFilter !== 'all' && entry.yearGroup !== yearFilter) return false
      if (
        boardFilter !== 'all' &&
        entry.examBoard !== boardFilter &&
        entry.examBoard !== 'All'
      )
        return false
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const haystack = [entry.title, entry.termUnit, entry.yearGroup]
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [searchQuery, yearFilter, boardFilter])

  const grouped = useMemo(() => groupByYearGroup(filtered), [filtered])

  const hasActiveFilters =
    searchQuery.trim() !== '' || yearFilter !== 'all' || boardFilter !== 'all'

  // ── Actions ───────────────────────────────────────────────────────────────

  const toggleGroup = useCallback((label: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }, [])

  const togglePreview = useCallback((id: string) => {
    setPreviewId((prev) => (prev === id ? null : id))
  }, [])

  const handleDownload = useCallback(async (entry: PresentationCatalogueEntry) => {
    setDownloadingId(entry.id)
    try {
      // Build LessonPlanData via the adapter
      let lessonPlanData
      if (entry.source === 'curriculum') {
        const presentation = curriculumById.get(entry.id)
        if (!presentation) throw new Error('Presentation not found')
        lessonPlanData = presentationToLessonPlan(presentation)
      } else {
        const tp = teacherById.get(entry.id)
        if (!tp) throw new Error('Teacher presentation not found')
        lessonPlanData = teacherPresentationToLessonPlan(tp)
      }

      const response = await fetch('/api/generate-pptx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          variant: 'lesson-plan',
          topic: entry.title,
          data: lessonPlanData,
        }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(
          (err as { error?: string }).error ?? 'Failed to generate PowerPoint',
        )
      }

      // Trigger download
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${entry.title.replace(/[^a-zA-Z0-9]+/g, '-')}.pptx`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Download failed:', err)
      alert(
        err instanceof Error
          ? err.message
          : 'An error occurred while generating the PowerPoint.',
      )
    } finally {
      setDownloadingId(null)
    }
  }, [])

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-1">
            <Link
              href="/school/lessons"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Presentation className="h-6 w-6 text-blue-500" />
            <h1 className="text-2xl font-bold tracking-tight">
              Presentation Library
            </h1>
          </div>
          <p className="text-muted-foreground mt-1 ml-8">
            Pre-built lesson presentations ready to download as PowerPoint. Browse
            by year group, search by topic, and download in one click.
          </p>

          {/* Stats */}
          <div className="mt-4 ml-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Layers className="h-4 w-4" />
              {catalogue.length} presentations
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" />
              {YEAR_GROUPS.length} year groups
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {catalogue.reduce((sum, e) => sum + e.slideCount, 0)} total slides
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search presentations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-background"
              />
            </div>

            {/* Year Group */}
            <Select
              value={yearFilter}
              onValueChange={(v) => setYearFilter(v ?? 'all')}
            >
              <SelectTrigger className="w-[140px] bg-background">
                <GraduationCap className="h-4 w-4 mr-1.5 text-muted-foreground" />
                <SelectValue placeholder="Year group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {YEAR_GROUPS.map((yg) => (
                  <SelectItem key={yg} value={yg}>
                    {yg}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Board */}
            <Select
              value={boardFilter}
              onValueChange={(v) => setBoardFilter(v ?? 'all')}
            >
              <SelectTrigger className="w-[140px] bg-background">
                <Filter className="h-4 w-4 mr-1.5 text-muted-foreground" />
                <SelectValue placeholder="Board" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Boards</SelectItem>
                {BOARDS.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('')
                  setYearFilter('all')
                  setBoardFilter('all')
                }}
                className="text-muted-foreground"
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Presentation className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg font-medium">No presentations found</p>
            <p className="text-sm mt-1">
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {grouped.map((group) => {
              const isCollapsed = collapsedGroups.has(group.label)
              return (
                <section key={group.label}>
                  {/* Group header */}
                  <button
                    onClick={() => toggleGroup(group.label)}
                    className="flex items-center gap-2 mb-4 group w-full text-left"
                  >
                    {isCollapsed ? (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                    <h2 className="text-lg font-semibold">{group.label}</h2>
                    <Badge
                      variant="outline"
                      className="text-xs text-muted-foreground"
                    >
                      {group.entries.length} presentation{group.entries.length !== 1 ? 's' : ''}
                    </Badge>
                  </button>

                  {!isCollapsed && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {group.entries.map((entry) => {
                        const isPreviewing = previewId === entry.id
                        const isDownloading = downloadingId === entry.id

                        return (
                          <Card
                            key={entry.id}
                            className="bg-card border-border hover:border-blue-500/30 transition-colors"
                          >
                            <CardContent className="p-4">
                              {/* Title */}
                              <h3 className="font-semibold text-sm leading-tight mb-2">
                                {entry.title}
                              </h3>

                              {/* Metadata badges */}
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                <Badge
                                  variant="outline"
                                  className={yearGroupColour(entry.yearGroup)}
                                >
                                  {entry.yearGroup}
                                </Badge>
                                {entry.examBoard !== 'All' && (
                                  <Badge
                                    variant="outline"
                                    className="bg-gray-500/10 text-gray-400 border-gray-500/20"
                                  >
                                    {entry.examBoard}
                                  </Badge>
                                )}
                                <Badge
                                  variant="outline"
                                  className={sourceColour(entry.source)}
                                >
                                  {entry.source === 'curriculum'
                                    ? 'Curriculum'
                                    : 'Teacher Pack'}
                                </Badge>
                              </div>

                              {/* Topic / Term unit */}
                              <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
                                {entry.termUnit}
                              </p>

                              {/* Stats row */}
                              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                <span className="flex items-center gap-1">
                                  <Layers className="h-3.5 w-3.5" />
                                  {entry.slideCount} slides
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5" />
                                  {entry.estimatedDuration}
                                </span>
                              </div>

                              {/* Preview toggle */}
                              {isPreviewing && (
                                <div className="mb-3 rounded-md bg-background border border-border p-3 max-h-48 overflow-y-auto">
                                  <p className="text-xs font-medium text-muted-foreground mb-2">
                                    Slide outline:
                                  </p>
                                  <ol className="space-y-1 text-xs text-muted-foreground list-decimal list-inside">
                                    {entry.slideTitles.map((t, i) => (
                                      <li key={i} className="leading-snug">
                                        {t}
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                              )}

                              {/* Actions */}
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  className="flex-1"
                                  disabled={isDownloading}
                                  onClick={() => handleDownload(entry)}
                                >
                                  {isDownloading ? (
                                    <>
                                      <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
                                      Generating...
                                    </>
                                  ) : (
                                    <>
                                      <Download className="h-4 w-4 mr-1.5" />
                                      Download PPTX
                                    </>
                                  )}
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => togglePreview(entry.id)}
                                  title={
                                    isPreviewing
                                      ? 'Hide slide preview'
                                      : 'Preview slide titles'
                                  }
                                >
                                  {isPreviewing ? (
                                    <EyeOff className="h-4 w-4" />
                                  ) : (
                                    <Eye className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  )}
                </section>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
