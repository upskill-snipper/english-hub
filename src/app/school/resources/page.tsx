'use client'

import { useEffect, useState, useMemo, useCallback, useRef } from 'react'
import {
  Search,
  X,
  Printer,
  Bookmark,
  BookmarkCheck,
  FileText,
  ClipboardList,
  PenLine,
  BookOpen,
  Quote,
  CheckSquare,
  ListChecks,
  Zap,
  ChevronDown,
  ArrowLeft,
  Filter,
  SlidersHorizontal,
  Library,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
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
} from '@/components/ui/dialog'

import {
  TEACHER_RESOURCES,
  RESOURCE_CATEGORIES,
  type TeacherResource,
  type ResourceCategory,
} from '@/data/teacher-resources'

// ── Constants ─────────────────────────────────────────────────────────────────

const EXAM_BOARDS = ['All', 'AQA', 'Edexcel', 'OCR', 'WJEC'] as const
const YEAR_GROUPS = [
  'All',
  'Year 7',
  'Year 8',
  'Year 9',
  'Year 10',
  'Year 11',
] as const

const SAVED_KEY = 'english-hub-saved-resources'

// ── Category styling ──────────────────────────────────────────────────────────

function categoryIcon(category: string) {
  switch (category) {
    case 'Model Answers':
      return FileText
    case 'Mark Schemes':
      return ClipboardList
    case 'Writing Frames':
      return PenLine
    case 'Vocabulary Lists':
      return BookOpen
    case 'Key Quotes Banks':
      return Quote
    case 'Assessment Rubrics':
      return CheckSquare
    case 'Revision Checklists':
      return ListChecks
    case 'Starter Activities':
      return Zap
    default:
      return FileText
  }
}

function categoryColor(category: string): string {
  switch (category) {
    case 'Model Answers':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    case 'Mark Schemes':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    case 'Writing Frames':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    case 'Vocabulary Lists':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    case 'Key Quotes Banks':
      return 'bg-pink-500/10 text-pink-400 border-pink-500/20'
    case 'Assessment Rubrics':
      return 'bg-red-500/10 text-red-400 border-red-500/20'
    case 'Revision Checklists':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    case 'Starter Activities':
      return 'bg-orange-500/10 text-orange-400 border-orange-500/20'
    default:
      return 'bg-muted text-muted-foreground border-border'
  }
}

function categoryIconBg(category: string): string {
  switch (category) {
    case 'Model Answers':
      return 'bg-blue-500/10'
    case 'Mark Schemes':
      return 'bg-purple-500/10'
    case 'Writing Frames':
      return 'bg-emerald-500/10'
    case 'Vocabulary Lists':
      return 'bg-amber-500/10'
    case 'Key Quotes Banks':
      return 'bg-pink-500/10'
    case 'Assessment Rubrics':
      return 'bg-red-500/10'
    case 'Revision Checklists':
      return 'bg-cyan-500/10'
    case 'Starter Activities':
      return 'bg-orange-500/10'
    default:
      return 'bg-muted'
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getSavedIds(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(SAVED_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

function setSavedIds(ids: string[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(SAVED_KEY, JSON.stringify(ids))
}

// ── Resource Card ─────────────────────────────────────────────────────────────

function ResourceCard({
  resource,
  isSaved,
  onToggleSave,
  onPreview,
}: {
  resource: TeacherResource
  isSaved: boolean
  onToggleSave: (id: string) => void
  onPreview: (resource: TeacherResource) => void
}) {
  const Icon = categoryIcon(resource.category)
  const colorClass = categoryColor(resource.category)

  return (
    <Card
      className="h-full transition-all duration-200 hover:shadow-md hover:border-foreground/10 cursor-pointer group"
      onClick={() => onPreview(resource)}
    >
      <CardContent className="p-5 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div
            className={cn(
              'flex-shrink-0 p-2 rounded-lg',
              categoryIconBg(resource.category)
            )}
          >
            <Icon className={cn('h-4 w-4', colorClass.split(' ')[1])} />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleSave(resource.id)
            }}
            className="flex-shrink-0 p-1 rounded-md hover:bg-muted transition-colors"
            aria-label={isSaved ? 'Remove from saved' : 'Save resource'}
          >
            {isSaved ? (
              <BookmarkCheck className="h-4 w-4 text-amber-400" />
            ) : (
              <Bookmark className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        {/* Title & description */}
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1.5">
          {resource.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {resource.description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          <Badge variant="outline" className={cn('text-[10px]', colorClass)}>
            {resource.category}
          </Badge>
          {resource.examBoard.map((board) => (
            <Badge
              key={board}
              variant="outline"
              className="text-[10px] bg-muted/50 text-muted-foreground border-border"
            >
              {board}
            </Badge>
          ))}
          {resource.subcategory && (
            <Badge
              variant="outline"
              className="text-[10px] bg-muted/50 text-muted-foreground border-border"
            >
              {resource.subcategory}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ── Preview Dialog ────────────────────────────────────────────────────────────

function ResourcePreview({
  resource,
  open,
  onClose,
  isSaved,
  onToggleSave,
}: {
  resource: TeacherResource | null
  open: boolean
  onClose: () => void
  isSaved: boolean
  onToggleSave: (id: string) => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)

  const handlePrint = useCallback(() => {
    if (!resource) return
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${resource.title}</title>
        <style>
          body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 24px;
            color: #111;
            line-height: 1.6;
          }
          h1 { font-size: 20px; margin-bottom: 4px; }
          .meta { color: #666; font-size: 13px; margin-bottom: 24px; }
          .content {
            white-space: pre-wrap;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            font-size: 13px;
            line-height: 1.7;
          }
          @media print {
            body { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <h1>${resource.title}</h1>
        <div class="meta">${resource.category} &middot; ${resource.subcategory} &middot; ${resource.examBoard.join(', ')} &middot; ${resource.yearGroup.join(', ')}</div>
        <div class="content">${resource.content}</div>
      </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  }, [resource])

  if (!resource) return null

  const Icon = categoryIcon(resource.category)
  const colorClass = categoryColor(resource.category)

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <div
                className={cn(
                  'flex-shrink-0 p-2 rounded-lg mt-0.5',
                  categoryIconBg(resource.category)
                )}
              >
                <Icon className={cn('h-5 w-5', colorClass.split(' ')[1])} />
              </div>
              <div className="min-w-0">
                <DialogTitle className="text-base leading-snug">
                  {resource.title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {resource.description}
                </p>
              </div>
            </div>
          </div>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" className={cn('text-xs', colorClass)}>
              {resource.category}
            </Badge>
            <Badge
              variant="outline"
              className="text-xs bg-muted/50 text-muted-foreground"
            >
              {resource.subcategory}
            </Badge>
            {resource.examBoard.map((board) => (
              <Badge
                key={board}
                variant="outline"
                className="text-xs bg-muted/50 text-muted-foreground"
              >
                {board}
              </Badge>
            ))}
            {resource.yearGroup.map((yg) => (
              <Badge
                key={yg}
                variant="outline"
                className="text-xs bg-muted/50 text-muted-foreground"
              >
                {yg}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mt-3">
            {resource.printable && (
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
            )}
            <Button
              variant={isSaved ? 'default' : 'outline'}
              size="sm"
              onClick={() => onToggleSave(resource.id)}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="h-4 w-4 mr-2" />
                  Saved
                </>
              ) : (
                <>
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </>
              )}
            </Button>
          </div>
        </DialogHeader>

        <Separator className="my-2" />

        {/* Content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto min-h-0">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/90 p-1">
            {resource.content}
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ── Category Overview Card ────────────────────────────────────────────────────

function CategoryOverviewCard({
  category,
  count,
  isActive,
  onClick,
}: {
  category: string
  count: number
  isActive: boolean
  onClick: () => void
}) {
  const Icon = categoryIcon(category)
  const colorClass = categoryColor(category)

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 rounded-lg border p-3 text-left transition-all duration-200 hover:shadow-sm w-full',
        isActive
          ? 'border-foreground/20 bg-foreground/5 shadow-sm'
          : 'border-border hover:border-foreground/10'
      )}
    >
      <div className={cn('p-2 rounded-lg', categoryIconBg(category))}>
        <Icon className={cn('h-4 w-4', colorClass.split(' ')[1])} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground truncate">
          {category}
        </p>
        <p className="text-xs text-muted-foreground">
          {count} resource{count !== 1 ? 's' : ''}
        </p>
      </div>
    </button>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ResourceLibraryPage() {
  // ── State ─────────────────────────────────────────────────────────────────
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('All')
  const [boardFilter, setBoardFilter] = useState<string>('All')
  const [yearFilter, setYearFilter] = useState<string>('All')
  const [showSavedOnly, setShowSavedOnly] = useState(false)
  const [savedIds, setSavedIdsState] = useState<string[]>([])
  const [previewResource, setPreviewResource] =
    useState<TeacherResource | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Load saved IDs from localStorage on mount
  useEffect(() => {
    setSavedIdsState(getSavedIds())
  }, [])

  // ── Handlers ──────────────────────────────────────────────────────────────

  const toggleSave = useCallback(
    (id: string) => {
      const next = savedIds.includes(id)
        ? savedIds.filter((s) => s !== id)
        : [...savedIds, id]
      setSavedIdsState(next)
      setSavedIds(next)
    },
    [savedIds]
  )

  const clearFilters = useCallback(() => {
    setSearch('')
    setCategoryFilter('All')
    setBoardFilter('All')
    setYearFilter('All')
    setShowSavedOnly(false)
  }, [])

  // ── Derived data ──────────────────────────────────────────────────────────

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const cat of RESOURCE_CATEGORIES) {
      counts[cat] = TEACHER_RESOURCES.filter((r) => r.category === cat).length
    }
    return counts
  }, [])

  const filtered = useMemo(() => {
    const lowerSearch = search.toLowerCase().trim()
    return TEACHER_RESOURCES.filter((r) => {
      // Saved filter
      if (showSavedOnly && !savedIds.includes(r.id)) return false

      // Category filter
      if (categoryFilter !== 'All' && r.category !== categoryFilter)
        return false

      // Board filter
      if (boardFilter !== 'All' && !r.examBoard.includes(boardFilter))
        return false

      // Year filter
      if (yearFilter !== 'All' && !r.yearGroup.includes(yearFilter))
        return false

      // Search
      if (lowerSearch) {
        const searchable = [
          r.title,
          r.description,
          r.category,
          r.subcategory,
          ...r.tags,
          ...r.examBoard,
          ...r.yearGroup,
        ]
          .join(' ')
          .toLowerCase()
        return searchable.includes(lowerSearch)
      }

      return true
    })
  }, [search, categoryFilter, boardFilter, yearFilter, showSavedOnly, savedIds])

  const hasActiveFilters =
    search !== '' ||
    categoryFilter !== 'All' ||
    boardFilter !== 'All' ||
    yearFilter !== 'All' ||
    showSavedOnly

  const savedResources = useMemo(
    () => TEACHER_RESOURCES.filter((r) => savedIds.includes(r.id)),
    [savedIds]
  )

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <Library className="h-6 w-6 text-foreground/80" />
          <h1 className="text-2xl font-bold text-foreground">
            Teacher Resource Library
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Model answers, mark schemes, writing frames, quote banks and more
          &mdash; ready to preview, save and print.
        </p>
      </div>

      {/* Saved Resources Section */}
      {savedResources.length > 0 && !hasActiveFilters && (
        <section>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="h-4 w-4 text-amber-400" />
              <h2 className="text-sm font-semibold text-foreground">
                My Saved Resources
              </h2>
              <Badge variant="outline" className="text-xs">
                {savedResources.length}
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground"
              onClick={() => {
                setShowSavedOnly(true)
              }}
            >
              View all saved
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {savedResources.slice(0, 4).map((r) => (
              <ResourceCard
                key={r.id}
                resource={r}
                isSaved={true}
                onToggleSave={toggleSave}
                onPreview={setPreviewResource}
              />
            ))}
          </div>
          <Separator className="mt-6" />
        </section>
      )}

      {/* Category Overview Grid */}
      {!hasActiveFilters && (
        <section>
          <h2 className="text-sm font-semibold text-foreground mb-3">
            Browse by Category
          </h2>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
            {RESOURCE_CATEGORIES.map((cat) => (
              <CategoryOverviewCard
                key={cat}
                category={cat}
                count={categoryCounts[cat]}
                isActive={(categoryFilter as string) === cat}
                onClick={() => {
                  setCategoryFilter(
                    (categoryFilter as string) === cat ? 'All' : cat
                  )
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Search & Filters */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-9"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => setShowFilters((v) => !v)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
            {hasActiveFilters && (
              <span className="flex h-2 w-2 rounded-full bg-blue-500" />
            )}
          </Button>
        </div>

        {/* Expandable filter row */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 animate-in slide-in-from-top-2 duration-200">
            <Select
              value={categoryFilter}
              onValueChange={setCategoryFilter}
            >
              <SelectTrigger className="w-[180px] h-9 text-xs">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All categories</SelectItem>
                {RESOURCE_CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={boardFilter} onValueChange={setBoardFilter}>
              <SelectTrigger className="w-[140px] h-9 text-xs">
                <SelectValue placeholder="Exam Board" />
              </SelectTrigger>
              <SelectContent>
                {EXAM_BOARDS.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b === 'All' ? 'All boards' : b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-[140px] h-9 text-xs">
                <SelectValue placeholder="Year Group" />
              </SelectTrigger>
              <SelectContent>
                {YEAR_GROUPS.map((y) => (
                  <SelectItem key={y} value={y}>
                    {y === 'All' ? 'All years' : y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant={showSavedOnly ? 'default' : 'outline'}
              size="sm"
              className="h-9 text-xs gap-1.5"
              onClick={() => setShowSavedOnly((v) => !v)}
            >
              <BookmarkCheck className="h-3.5 w-3.5" />
              Saved only
            </Button>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                className="h-9 text-xs text-muted-foreground"
                onClick={clearFilters}
              >
                Clear all
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Active filter pills */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-3.5 w-3.5 text-muted-foreground" />
          {categoryFilter !== 'All' && (
            <Badge
              variant="secondary"
              className="text-xs gap-1 cursor-pointer"
              onClick={() => setCategoryFilter('All')}
            >
              {categoryFilter}
              <X className="h-3 w-3" />
            </Badge>
          )}
          {boardFilter !== 'All' && (
            <Badge
              variant="secondary"
              className="text-xs gap-1 cursor-pointer"
              onClick={() => setBoardFilter('All')}
            >
              {boardFilter}
              <X className="h-3 w-3" />
            </Badge>
          )}
          {yearFilter !== 'All' && (
            <Badge
              variant="secondary"
              className="text-xs gap-1 cursor-pointer"
              onClick={() => setYearFilter('All')}
            >
              {yearFilter}
              <X className="h-3 w-3" />
            </Badge>
          )}
          {showSavedOnly && (
            <Badge
              variant="secondary"
              className="text-xs gap-1 cursor-pointer"
              onClick={() => setShowSavedOnly(false)}
            >
              Saved only
              <X className="h-3 w-3" />
            </Badge>
          )}
          {search && (
            <Badge
              variant="secondary"
              className="text-xs gap-1 cursor-pointer"
              onClick={() => setSearch('')}
            >
              &quot;{search}&quot;
              <X className="h-3 w-3" />
            </Badge>
          )}
          <span className="text-xs text-muted-foreground ml-1">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Results grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((r) => (
            <ResourceCard
              key={r.id}
              resource={r}
              isSaved={savedIds.includes(r.id)}
              onToggleSave={toggleSave}
              onPreview={setPreviewResource}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Search className="h-10 w-10 text-muted-foreground/70 mb-3" />
          <p className="text-sm font-medium text-foreground">
            No resources found
          </p>
          <p className="text-xs text-muted-foreground mt-1 max-w-sm">
            Try adjusting your search or filters. We have{' '}
            {TEACHER_RESOURCES.length} resources across{' '}
            {RESOURCE_CATEGORIES.length} categories.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={clearFilters}
          >
            Clear all filters
          </Button>
        </div>
      )}

      {/* Preview Dialog */}
      <ResourcePreview
        resource={previewResource}
        open={previewResource !== null}
        onClose={() => setPreviewResource(null)}
        isSaved={
          previewResource ? savedIds.includes(previewResource.id) : false
        }
        onToggleSave={toggleSave}
      />
    </div>
  )
}
