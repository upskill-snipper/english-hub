'use client'

import { useState, useEffect, useRef, useMemo, useCallback, memo } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Clock,
  GraduationCap,
  Play,
  PenTool,
  Feather,
  Search,
  ChevronRight,
  Star,
  ArrowUpDown,
} from 'lucide-react'
import { loadAllCourses } from '@/data/course-loader'
import type { CourseData } from '@/data/courses'
import { useAuthStore } from '@/store/auth-store'
import { useBoard } from '@/hooks/useBoard'
import type { ExamBoard } from '@/hooks/useBoard'
import { getBoardType } from '@/lib/board/board-filter'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { LearningTip } from '@/components/ui/learning-tip'
import { useT } from '@/lib/i18n/use-t'

/* ================================================================
   Constants
   ================================================================ */

const TIERS = ['All', 'KS3', 'GCSE', 'IGCSE'] as const
type Tier = (typeof TIERS)[number]

/** Map board type to the matching course tier. */
function boardTypeToTier(boardType: 'ks3' | 'gcse' | 'igcse' | 'ial' | 'a-level' | null): Tier {
  if (boardType === 'ks3') return 'KS3'
  if (boardType === 'gcse') return 'GCSE'
  if (boardType === 'igcse') return 'IGCSE'
  // IAL and UK A-Level don't have their own course tiers yet — fall through to 'All'
  return 'All'
}

const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'language', label: 'Language' },
  { id: 'literature', label: 'Literature' },
  { id: 'poetry', label: 'Poetry' },
  { id: 'drama', label: 'Drama' },
  { id: 'exam-skills', label: 'Exam Skills' },
] as const
type CategoryId = (typeof CATEGORIES)[number]['id']

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'az', label: 'A\u2013Z' },
  { value: 'za', label: 'Z\u2013A' },
  { value: 'modules', label: 'Most Content' },
] as const
type SortKey = (typeof SORT_OPTIONS)[number]['value']

const COURSES_PER_PAGE = 9

/* ================================================================
   Helpers
   ================================================================ */

function deriveCategory(course: CourseData): CategoryId {
  const id = course.id.toLowerCase()
  const title = course.title.toLowerCase()

  if (
    id.includes('poetry') ||
    id.includes('poem') ||
    title.includes('poetry') ||
    title.includes('anthology')
  )
    return 'poetry'

  if (
    id.includes('drama') ||
    title.includes('drama') ||
    id.includes('romeo-juliet') ||
    id.includes('inspector-calls') ||
    id.includes('macbeth') ||
    id.includes('view-from-the-bridge') ||
    id.includes('kindertransport') ||
    id.includes('curious-incident') ||
    id.includes('horseman') ||
    title.includes('shakespeare')
  )
    return 'drama'

  if (
    id.includes('revision') ||
    id.includes('exam') ||
    title.includes('revision') ||
    title.includes('exam skill') ||
    title.includes('exam technique')
  )
    return 'exam-skills'

  if (
    id.includes('lit') ||
    title.includes('literature') ||
    id.includes('christmas-carol') ||
    id.includes('jekyll') ||
    id.includes('lord-of-flies') ||
    id.includes('animal-farm') ||
    id.includes('prose') ||
    id.includes('classics') ||
    title.includes('novel') ||
    title.includes('prose')
  )
    return 'literature'

  return 'language'
}

function extractBoards(courses: CourseData[]): string[] {
  const boards = new Set<string>()
  for (const c of courses) if (c.board) boards.add(c.board)
  return Array.from(boards).sort()
}

/**
 * Map the user's selected ExamBoard slug to the display-name values used
 * in course data.  A single ExamBoard may match multiple display names
 * (e.g. Edexcel IGCSE courses are tagged either "Edexcel" or "Edexcel IGCSE").
 */
function boardSlugToDisplayNames(board: ExamBoard): string[] {
  switch (board) {
    case 'aqa':
      return ['AQA']
    case 'edexcel':
      return ['Edexcel']
    case 'ocr':
      return ['OCR']
    case 'eduqas':
      return ['WJEC']
    case 'edexcel-igcse':
      return ['Edexcel', 'Edexcel IGCSE', 'Edexcel IAL']
    case 'cambridge-0500':
    case 'cambridge-0990':
      return ['CAIE', 'Cambridge']
    default:
      return []
  }
}

/* ================================================================
   Page Component
   ================================================================ */

export default function CourseCatalogueClient({
  initialCourses = [],
}: {
  initialCourses?: CourseData[]
} = {}) {
  const t = useT()
  const { user } = useAuthStore()
  const { board: userBoard, isHydrated: boardHydrated } = useBoard()

  const categoryLabel = useCallback(
    (id: CategoryId): string => {
      switch (id) {
        case 'all':
          return t('course.cat_all')
        case 'language':
          return t('course.cat_language')
        case 'literature':
          return t('course.cat_literature')
        case 'poetry':
          return t('course.cat_poetry')
        case 'drama':
          return t('course.cat_drama')
        case 'exam-skills':
          return t('course.cat_exam_skills')
      }
    },
    [t],
  )

  const sortLabel = useCallback(
    (value: SortKey): string => {
      switch (value) {
        case 'recommended':
          return t('course.sort_recommended')
        case 'az':
          return t('course.sort_az')
        case 'za':
          return t('course.sort_za')
        case 'modules':
          return t('course.sort_modules')
      }
    },
    [t],
  )

  // Seeded from the server render so the first paint shows real content
  // (SEO item #23 — no more "Loading..." flash for crawlers or humans).
  const [courses, setCourses] = useState<CourseData[]>(initialCourses)
  const [isLoading, setIsLoading] = useState(initialCourses.length === 0)

  const boardType = getBoardType(userBoard)
  const activeTier = boardTypeToTier(boardType)

  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [boardFilter, setBoardFilter] = useState<string>('all')
  const [sortKey, setSortKey] = useState<SortKey>('recommended')
  const [expandedCategories, setExpandedCategories] = useState<Set<CategoryId>>(new Set())

  const hasManuallySelectedBoard = useRef(false)

  useEffect(() => {
    // If the server already seeded us with courses, we still call
    // loadAllCourses() — it's memoised, so this is effectively a no-op at
    // runtime but ensures parity with any late-registering course modules
    // on the client.
    if (initialCourses.length > 0) {
      setIsLoading(false)
      return
    }
    loadAllCourses().then((data) => {
      setCourses(data)
      setIsLoading(false)
    })
  }, [initialCourses.length])

  // Sync board filter from the global board store when it hydrates,
  // unless the user has already manually changed the board dropdown.
  useEffect(() => {
    if (!boardHydrated || hasManuallySelectedBoard.current) return
    if (!userBoard) return
    const displayNames = boardSlugToDisplayNames(userBoard)
    if (displayNames.length > 0) {
      // Use the first display name as the filter value; the filtering
      // logic below will match against all display names for the board.
      setBoardFilter(displayNames[0])
    }
  }, [boardHydrated, userBoard])

  const availableBoards = useMemo(() => extractBoards(courses), [courses])

  // The set of board display names that match the active boardFilter.
  // When the filter comes from the user's global board selection,
  // a single ExamBoard may correspond to several display names.
  const activeBoardNames = useMemo<Set<string> | null>(() => {
    if (boardFilter === 'all') return null
    // Check if the boardFilter was set from an ExamBoard slug
    if (userBoard) {
      const names = boardSlugToDisplayNames(userBoard)
      if (names.includes(boardFilter)) return new Set(names)
    }
    // Manual dropdown pick — match exactly
    return new Set([boardFilter])
  }, [boardFilter, userBoard])

  /* ── filtered + sorted ─────────────────────────────────────── */

  const filtered = useMemo(() => {
    let result = courses.filter((c) => {
      if (activeTier !== 'All' && c.tier?.toUpperCase() !== activeTier) return false
      if (activeBoardNames && !(c.board && activeBoardNames.has(c.board))) return false
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        if (
          !c.title.toLowerCase().includes(q) &&
          !c.subtitle.toLowerCase().includes(q) &&
          !(c.board || '').toLowerCase().includes(q)
        )
          return false
      }
      if (activeCategory !== 'all' && deriveCategory(c) !== activeCategory) return false
      return true
    })

    if (result.length === 0 && courses.length > 0 && !searchQuery.trim()) {
      result = courses.filter((c) => {
        if (activeTier !== 'All' && c.tier?.toUpperCase() !== activeTier) return false
        if (activeBoardNames && !(c.board && activeBoardNames.has(c.board))) return false
        if (activeCategory !== 'all' && deriveCategory(c) !== activeCategory) return false
        return true
      })
    }

    const sorted = [...result]
    switch (sortKey) {
      case 'az':
        sorted.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'za':
        sorted.sort((a, b) => b.title.localeCompare(a.title))
        break
      case 'modules':
        sorted.sort((a, b) => b.moduleList.length - a.moduleList.length)
        break
    }
    return sorted
  }, [courses, activeTier, activeBoardNames, searchQuery, activeCategory, sortKey])

  /* ── recommended ───────────────────────────────────────────── */

  const recommended = useMemo(() => {
    if (activeTier === 'All') return filtered.slice(0, 4)
    const m = filtered.filter((c) => c.tier?.toUpperCase() === activeTier)
    return m.length > 0 ? m.slice(0, 4) : filtered.slice(0, 4)
  }, [filtered, activeTier])

  /* ── grouped by category ───────────────────────────────────── */

  const groupedByCategory = useMemo(() => {
    const g: Record<CategoryId, CourseData[]> = {
      all: [],
      language: [],
      literature: [],
      poetry: [],
      drama: [],
      'exam-skills': [],
    }
    for (const c of filtered) g[deriveCategory(c)].push(c)
    return g
  }, [filtered])

  const toggleExpanded = useCallback((cat: CategoryId) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }, [])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const cat of CATEGORIES)
      counts[cat.id] = cat.id === 'all' ? filtered.length : groupedByCategory[cat.id].length
    return counts
  }, [filtered.length, groupedByCategory])

  /* ── render ────────────────────────────────────────────────── */

  return (
    <main className="min-h-screen bg-background">
      {/* ── Breadcrumb ──────────────────────────────────────────── */}
      <nav className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              {t('nav.home')}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5" />
          </li>
          {activeCategory === 'all' ? (
            <li className="font-medium text-foreground">{t('course.breadcrumb')}</li>
          ) : (
            <>
              <li>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="transition-colors hover:text-foreground"
                >
                  {t('course.breadcrumb')}
                </button>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">{categoryLabel(activeCategory)}</li>
            </>
          )}
        </ol>
      </nav>

      {/* ── Hero (compact) ──────────────────────────────────────── */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <h1 className="text-foreground">{t('course.catalogue_title')}</h1>
            <LearningTip categories={['course', 'study']} side="right" size="md" />
          </div>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {t('course.catalogue_subtitle')}
          </p>
        </div>
      </section>

      {/* ── Subscription CTA ────────────────────────────────────── */}
      {!user && (
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-primary/[0.04]">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    {t('course.subscribe_unlock')}
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-bold text-primary">{PRICING.TRIAL_TEXT}!</span>{' '}
                    {t('course.then_just')} {PRICING_DISPLAY.monthly}{' '}
                    {t('course.rolling_monthly_cancel')}
                  </p>
                </div>
                <Button
                  variant="default"
                  size="lg"
                  className="shadow-lg shadow-primary/20"
                  render={<Link href="/auth/register" />}
                >
                  {t('marking.start_free_trial')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* ── Main content ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Category navigation bar */}
        <div className="mb-6 flex flex-wrap gap-2 rounded-xl border border-border/60 bg-muted/40 p-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-background hover:text-foreground hover:shadow-sm',
              )}
            >
              {categoryLabel(cat.id)}
              <span
                className={cn(
                  'ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums leading-none',
                  activeCategory === cat.id
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                {categoryCounts[cat.id] ?? 0}
              </span>
            </button>
          ))}
        </div>

        {/* Search / filter bar */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('course.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              className="pl-9"
            />
          </div>

          {/* Tier and board filters are auto-set from the user's selected board */}
          {activeTier !== 'All' && (
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
              {activeTier}
            </Badge>
          )}

          <Select value={sortKey} onValueChange={(v) => setSortKey(v as SortKey)}>
            <SelectTrigger className="w-[150px]">
              <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
              <SelectValue placeholder={t('course.sort_by')} />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {sortLabel(opt.value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Course content */}
        {isLoading ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-border/40 bg-card p-5 animate-pulse">
                <div className="h-1 w-full bg-muted rounded mb-3" />
                <div className="flex gap-2 mb-2">
                  <div className="h-5 w-12 bg-muted rounded-full" />
                  <div className="h-5 w-16 bg-muted rounded-full" />
                </div>
                <div className="h-5 w-3/4 bg-muted rounded mb-2" />
                <div className="h-3 w-full bg-muted rounded mb-1" />
                <div className="h-3 w-2/3 bg-muted rounded mb-4" />
                <div className="h-8 w-24 bg-muted rounded" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-card px-6 py-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <GraduationCap className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {t('course.none_found')}
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t('course.none_found_hint')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
                hasManuallySelectedBoard.current = true
                setBoardFilter('all')
              }}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
            >
              {t('course.clear_filters')}
            </button>
          </div>
        ) : (
          <>
            {/* Featured / Recommended section */}
            {activeCategory === 'all' && !searchQuery.trim() && recommended.length > 0 && (
              <div className="mb-12 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15">
                    <Star className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-foreground">
                      {t('course.recommended_title')}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {t('course.recommended_subtitle')}
                    </p>
                  </div>
                  <LearningTip categories={['course', 'motivation']} />
                </div>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {recommended.map((course) => (
                    <CourseCard key={`rec-${course.id}`} course={course} />
                  ))}
                </div>
              </div>
            )}

            {/* Course grid */}
            {activeCategory !== 'all' ? (
              <CategorySection
                category={CATEGORIES.find((c) => c.id === activeCategory)!}
                categoryLabel={categoryLabel(activeCategory)}
                courses={filtered}
                expanded={expandedCategories.has(activeCategory)}
                onToggle={() => toggleExpanded(activeCategory)}
                showAll
              />
            ) : (
              CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                const catCourses = groupedByCategory[cat.id]
                if (catCourses.length === 0) return null
                return (
                  <CategorySection
                    key={cat.id}
                    category={cat}
                    categoryLabel={categoryLabel(cat.id)}
                    courses={catCourses}
                    expanded={expandedCategories.has(cat.id)}
                    onToggle={() => toggleExpanded(cat.id)}
                  />
                )
              })
            )}
          </>
        )}
      </section>

      {/* ── Supplement Your Learning ────────────────────────────── */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <h2 className="text-foreground">{t('course.supplement_title')}</h2>
            <LearningTip categories={['resource', 'study']} size="md" />
          </div>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t('course.supplement_desc')}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: '/resources/revision-notes',
                icon: BookOpen,
                title: t('course.res_study_guides_title'),
                description: t('course.res_study_guides_desc'),
              },
              {
                href: '/resources/writing-skills',
                icon: PenTool,
                title: t('course.res_writing_title'),
                description: t('course.res_writing_desc'),
              },
              {
                href: '/resources/poetry',
                icon: Feather,
                title: t('course.res_poetry_title'),
                description: t('course.res_poetry_desc'),
              },
              {
                href: '/resources/english-literature',
                icon: GraduationCap,
                title: t('course.res_literature_title'),
                description: t('course.res_literature_desc'),
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-card rounded-xl border border-border p-5 hover:border-primary/40 transition-all group"
              >
                <item.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

/* ================================================================
   Category Section
   ================================================================ */

interface CategorySectionProps {
  category: (typeof CATEGORIES)[number]
  categoryLabel: string
  courses: CourseData[]
  expanded: boolean
  onToggle: () => void
  showAll?: boolean
}

function CategorySection({
  category: _category,
  categoryLabel,
  courses,
  expanded,
  onToggle,
  showAll,
}: CategorySectionProps) {
  const t = useT()
  const limit = showAll || expanded ? courses.length : COURSES_PER_PAGE
  const visible = courses.slice(0, limit)
  const hasMore = courses.length > COURSES_PER_PAGE

  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight text-foreground">{categoryLabel}</h2>
        <span className="text-sm text-muted-foreground tabular-nums">
          {courses.length}{' '}
          {courses.length === 1 ? t('course.course_singular') : t('course.course_plural')}
        </span>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {hasMore && !showAll && (
        <div className="mt-5 text-center">
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-all duration-200 hover:shadow-sm"
          >
            {expanded
              ? t('course.show_less')
              : `${t('course.view_all_prefix')} ${courses.length} ${t('course.course_plural')}`}
            <ChevronRight
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                expanded ? 'rotate-90' : '',
              )}
            />
          </button>
        </div>
      )}
    </div>
  )
}

/* ================================================================
   Course Card (compact)
   ================================================================ */

interface CourseCardProps {
  course: CourseData
}

const CourseCard = memo(function CourseCard({ course }: CourseCardProps) {
  const t = useT()
  const totalLessons = course.moduleList.reduce((sum, mod) => sum + (mod.quiz?.length ?? 0), 0)
  const categoryId = deriveCategory(course)
  const categoryLabel =
    categoryId === 'language'
      ? t('course.cat_language')
      : categoryId === 'literature'
        ? t('course.cat_literature')
        : categoryId === 'poetry'
          ? t('course.cat_poetry')
          : categoryId === 'drama'
            ? t('course.cat_drama')
            : t('course.cat_exam_skills')

  return (
    <div className="group relative">
      <Link href={`/courses/${course.id}`}>
        <Card className="flex h-full flex-col overflow-hidden border-border/40 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
          {/* Colour accent bar */}
          <div className="h-1.5 w-full" style={{ backgroundColor: course.color }} />

          <CardHeader className="pb-1">
            {/* Badges row */}
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              <Badge
                variant="outline"
                className="border-0 text-xs font-semibold"
                style={{
                  backgroundColor: `${course.color}15`,
                  color: course.color,
                }}
              >
                {course.tier}
              </Badge>
              {course.board && (
                <Badge
                  variant="secondary"
                  className="rounded-full bg-blue-500/20 text-blue-600 text-xs"
                >
                  {course.board}
                </Badge>
              )}
              <Badge
                variant="outline"
                className="rounded-full border-border/60 text-[10px] text-muted-foreground capitalize"
              >
                {categoryLabel}
              </Badge>
            </div>

            <CardTitle className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {course.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 pt-1">
            <p className="text-sm text-muted-foreground line-clamp-2">{course.subtitle}</p>

            {/* Stats grid */}
            <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <BookOpen className="h-3 w-3 shrink-0" />
                {course.moduleList.length} {t('course.modules')}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3 shrink-0" />
                {course.duration}
              </span>
              {totalLessons > 0 && (
                <span className="inline-flex items-center gap-1">
                  <PenTool className="h-3 w-3 shrink-0" />
                  {totalLessons} {t('course.quizzes')}
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <GraduationCap className="h-3 w-3 shrink-0" />
                {course.level}
              </span>
            </div>
          </CardContent>

          <CardFooter className="pt-2">
            <div className="flex w-full items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500 ring-1 ring-emerald-500/20">
                <Play className="h-3 w-3" />
                {t('course.free_preview')}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="bg-primary/10 text-primary text-xs font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                tabIndex={-1}
              >
                {t('course.start')}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  )
})
