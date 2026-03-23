'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Search,
  Clock,
  X,
  Sparkles,
  Target,
  Loader2,
  ArrowRight,
  Plus,
  Filter,
  GraduationCap,
  Feather,
  FileText,
  Pen,
  BookMarked,
  Lightbulb,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import type { LessonPlan } from '@/data/lesson-plans'
import {
  allLessonPlans,
  getLessonCategory,
  getTextLabel,
  getDifficulty,
  recommendLessons,
} from '@/data/lesson-plans'

// ── Constants ────────────────────────────────────────────────────────────────

const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'All']
const YEAR_GROUPS = ['KS3', 'Year 9', 'Year 10', '10-11', 'Year 11']
const DIFFICULTIES = ['Foundation', 'Intermediate', 'Higher'] as const
const CATEGORIES = ['Literature', 'Language', 'Poetry', 'Exam Technique', 'KS3 Skills']

// Derive unique skill values from all lessons
const ALL_SKILLS = Array.from(
  new Set(allLessonPlans.flatMap((lp) => lp.targetedSkills))
).sort()

// Derive unique text labels for the topic/text filter
const ALL_TEXT_LABELS = Array.from(
  new Set(allLessonPlans.map((lp) => getTextLabel(lp)))
).sort()

// ── Helpers ──────────────────────────────────────────────────────────────────

function difficultyColor(d: string): string {
  switch (d) {
    case 'Foundation':
      return 'bg-green-500/10 text-green-400 border-green-500/20'
    case 'Higher':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    default:
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  }
}

function categoryColor(cat: string): string {
  switch (cat) {
    case 'Poetry':
      return 'bg-pink-500/10 text-pink-400 border-pink-500/20'
    case 'Literature':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    case 'Language':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    case 'Exam Technique':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    case 'KS3 Skills':
      return 'bg-sky-500/10 text-sky-400 border-sky-500/20'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

function categoryIcon(cat: string) {
  switch (cat) {
    case 'Poetry':
      return <Feather className="h-5 w-5 text-pink-400" />
    case 'Literature':
      return <BookMarked className="h-5 w-5 text-purple-400" />
    case 'Language':
      return <Pen className="h-5 w-5 text-emerald-400" />
    case 'Exam Technique':
      return <Target className="h-5 w-5 text-amber-400" />
    case 'KS3 Skills':
      return <Lightbulb className="h-5 w-5 text-sky-400" />
    default:
      return <BookOpen className="h-5 w-5 text-muted-foreground" />
  }
}

function parseDurationMinutes(dur: string): number {
  const match = dur.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 60
}

// ── Skeletons ────────────────────────────────────────────────────────────────

function LessonCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-5">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2 mb-4" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}

// ── Recommended Section ──────────────────────────────────────────────────────

function RecommendedSection({
  lessons,
  reasons,
}: {
  lessons: LessonPlan[]
  reasons: Map<string, string>
}) {
  if (lessons.length === 0) return null

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-amber-400" />
        <h2 className="text-lg font-bold text-foreground">
          Recommended for Your Classes
        </h2>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        Based on analytics from your class performance data, these lessons target identified weak areas.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => {
          const category = getLessonCategory(lesson)
          const textLabel = getTextLabel(lesson)
          const difficulty = getDifficulty(lesson)
          const reason = reasons.get(lesson.id)

          return (
            <Link key={lesson.id} href={`/school/lessons/${lesson.id}`}>
              <Card className="h-full transition-all duration-200 hover:border-amber-500/30 hover:shadow-md cursor-pointer border-amber-500/10 bg-amber-500/[0.02]">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-foreground leading-snug">
                      {lesson.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="shrink-0 text-[10px] bg-amber-500/10 text-amber-400 border-amber-500/20"
                    >
                      <Sparkles className="h-2.5 w-2.5 mr-0.5" />
                      Recommended
                    </Badge>
                  </div>

                  {reason && (
                    <p className="text-xs text-muted-foreground mb-3 flex items-start gap-1">
                      <Target className="h-3 w-3 mt-0.5 shrink-0 text-amber-400" />
                      {reason}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="outline" className={cn('text-[10px]', categoryColor(category))}>
                      {category}
                    </Badge>
                    <Badge variant="outline" className={cn('text-[10px]', difficultyColor(difficulty))}>
                      {difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-[10px]">
                      {textLabel}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {lesson.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="h-3 w-3" />
                      {lesson.yearGroup}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

// ── Lesson Card ──────────────────────────────────────────────────────────────

function LessonCard({
  lesson,
  isRecommended,
}: {
  lesson: LessonPlan
  isRecommended: boolean
}) {
  const category = getLessonCategory(lesson)
  const textLabel = getTextLabel(lesson)
  const difficulty = getDifficulty(lesson)

  return (
    <Link href={`/school/lessons/${lesson.id}`}>
      <Card className="h-full transition-all duration-200 hover:border-primary/30 hover:shadow-md cursor-pointer">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-sm font-semibold text-foreground leading-snug">
              {lesson.title}
            </h3>
            {isRecommended && (
              <Badge
                variant="outline"
                className="shrink-0 text-[10px] bg-amber-500/10 text-amber-400 border-amber-500/20"
              >
                <Sparkles className="h-2.5 w-2.5 mr-0.5" />
                Recommended
              </Badge>
            )}
          </div>

          <p className="text-xs text-muted-foreground mb-3">{textLabel}</p>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="outline" className={cn('text-[10px]', categoryColor(category))}>
              {category}
            </Badge>
            <Badge variant="outline" className={cn('text-[10px]', difficultyColor(difficulty))}>
              {difficulty}
            </Badge>
            {lesson.board !== 'All' && (
              <Badge variant="outline" className="text-[10px]">
                {lesson.board}
              </Badge>
            )}
          </div>

          {lesson.targetedSkills.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {lesson.targetedSkills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="inline-block rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
              {lesson.targetedSkills.length > 3 && (
                <span className="inline-block rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                  +{lesson.targetedSkills.length - 3} more
                </span>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {lesson.duration}
            </span>
            <span className="flex items-center gap-1">
              <GraduationCap className="h-3 w-3" />
              {lesson.yearGroup}
            </span>
            <ArrowRight className="h-3 w-3 ml-auto text-primary" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

// ── Category Section ─────────────────────────────────────────────────────────

function CategorySection({
  category,
  lessons,
  recommendedIds,
}: {
  category: string
  lessons: LessonPlan[]
  recommendedIds: Set<string>
}) {
  if (lessons.length === 0) return null

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-2">
        {categoryIcon(category)}
        <h2 className="text-lg font-bold text-foreground">
          {category === 'KS3 Skills' ? 'KS3 Skills Lessons' : `${category} Lessons`}
        </h2>
        <span className="ml-2 text-sm text-muted-foreground">
          ({lessons.length})
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            isRecommended={recommendedIds.has(lesson.id)}
          />
        ))}
      </div>
    </section>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function LessonPlansPage() {
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [textFilter, setTextFilter] = useState('all')
  const [skillFilter, setSkillFilter] = useState('all')
  const [boardFilter, setBoardFilter] = useState('all')
  const [yearFilter, setYearFilter] = useState('all')
  const [difficultyFilter, setDifficultyFilter] = useState('all')
  const [recommendedLessons, setRecommendedLessons] = useState<LessonPlan[]>([])
  const [recommendReasons, setRecommendReasons] = useState<Map<string, string>>(new Map())

  // Fetch analytics recommendations
  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const res = await fetch('/api/school/overview')
        if (res.ok) {
          const data = await res.json()
          const classes = data.overview?.classes ?? []

          // Collect all weak areas across classes
          const weakAreaLabels: string[] = []
          const reasonMap = new Map<string, string>()

          for (const cls of classes) {
            const weakAreas = cls.weak_areas ?? []
            for (const area of weakAreas) {
              if (area.severity === 'critical' || area.severity === 'warning') {
                const label = area.module_name ?? area.course_name
                if (label) weakAreaLabels.push(label)
              }
            }
          }

          // Use the recommendLessons engine
          const uniqueAreas = Array.from(new Set(weakAreaLabels))
          const recommended = recommendLessons(uniqueAreas, 'AQA', 6)

          // Build reason strings
          for (const cls of classes) {
            const weakAreas = cls.weak_areas ?? []
            for (const area of weakAreas) {
              if (area.severity === 'critical' || area.severity === 'warning') {
                const areaText = `${area.module_name ?? area.course_name}`.toLowerCase()
                for (const lp of recommended) {
                  if (reasonMap.has(lp.id)) continue
                  const skillMatch = lp.targetedSkills.some(
                    (s) => s.toLowerCase().includes(areaText) || areaText.includes(s.toLowerCase())
                  )
                  const keywordMatch = lp.keywords.some(
                    (k) => areaText.includes(k.toLowerCase())
                  )
                  if (skillMatch || keywordMatch) {
                    reasonMap.set(
                      lp.id,
                      `${area.students_below_threshold} students below target in ${area.module_name ?? area.course_name} (avg ${Math.round(area.avg_score)}%)`
                    )
                  }
                }
              }
            }
          }

          // Give generic reason if none matched
          for (const lp of recommended) {
            if (!reasonMap.has(lp.id)) {
              reasonMap.set(lp.id, 'Matches identified weak areas across your classes')
            }
          }

          setRecommendedLessons(recommended)
          setRecommendReasons(reasonMap)
        }
      } catch {
        // Analytics unavailable, no recommendations
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [])

  // Set of recommended lesson IDs for badge display
  const recommendedIds = useMemo(
    () => new Set(recommendedLessons.map((lp) => lp.id)),
    [recommendedLessons]
  )

  // ── Filtered lessons ───────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    return allLessonPlans.filter((lesson) => {
      // Text/topic filter
      if (textFilter !== 'all' && getTextLabel(lesson) !== textFilter) return false

      // Skill filter
      if (skillFilter !== 'all' && !lesson.targetedSkills.includes(skillFilter)) return false

      // Board filter
      if (boardFilter !== 'all' && lesson.board !== boardFilter && lesson.board !== 'All')
        return false

      // Year group filter
      if (yearFilter !== 'all') {
        const yg = lesson.yearGroup.toLowerCase()
        const filter = yearFilter.toLowerCase()
        if (!yg.includes(filter) && !filter.includes(yg)) return false
      }

      // Difficulty filter
      if (difficultyFilter !== 'all' && getDifficulty(lesson) !== difficultyFilter) return false

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const haystack = [
          lesson.title,
          lesson.text,
          lesson.board,
          ...lesson.targetedSkills,
          ...lesson.keywords,
        ]
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(q)) return false
      }

      return true
    })
  }, [textFilter, skillFilter, boardFilter, yearFilter, difficultyFilter, searchQuery])

  const hasActiveFilters =
    textFilter !== 'all' ||
    skillFilter !== 'all' ||
    boardFilter !== 'all' ||
    yearFilter !== 'all' ||
    difficultyFilter !== 'all' ||
    searchQuery.trim() !== ''

  // Group filtered lessons by category
  const categorised = useMemo(() => {
    const groups: Record<string, LessonPlan[]> = {}
    for (const cat of CATEGORIES) groups[cat] = []

    for (const lesson of filtered) {
      const cat = getLessonCategory(lesson)
      if (groups[cat]) {
        groups[cat].push(lesson)
      } else {
        // Fallback
        groups['Literature'].push(lesson)
      }
    }

    return groups
  }, [filtered])

  function clearAllFilters() {
    setTextFilter('all')
    setSkillFilter('all')
    setBoardFilter('all')
    setYearFilter('all')
    setDifficultyFilter('all')
    setSearchQuery('')
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Lesson Plans
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse and discover ready-to-teach lesson plans for GCSE English
              </p>
            </div>
          </div>

          <Link href="/school/lessons/create">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Custom Lesson
            </Button>
          </Link>
        </div>

        {/* Search */}
        <div className="mb-4 relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search lessons by title, topic, skill, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Filter bar */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mr-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filters:</span>
          </div>

          <Select value={textFilter} onValueChange={(v) => setTextFilter(v ?? 'all')}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Text / Topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Texts</SelectItem>
              {ALL_TEXT_LABELS.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={yearFilter} onValueChange={(v) => setYearFilter(v ?? 'all')}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Year Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Year Groups</SelectItem>
              {YEAR_GROUPS.map((yg) => (
                <SelectItem key={yg} value={yg}>{yg}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={boardFilter} onValueChange={(v) => setBoardFilter(v ?? 'all')}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Exam Board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Boards</SelectItem>
              {EXAM_BOARDS.map((eb) => (
                <SelectItem key={eb} value={eb}>{eb}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={difficultyFilter} onValueChange={(v) => setDifficultyFilter(v ?? 'all')}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {DIFFICULTIES.map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={skillFilter} onValueChange={(v) => setSkillFilter(v ?? 'all')}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Skill Focus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Skills</SelectItem>
              {ALL_SKILLS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              <X className="h-3.5 w-3.5 mr-1" />
              Clear filters
            </Button>
          )}
        </div>

        <Separator className="mb-6" />

        {/* Recommended Section */}
        {loading ? (
          <div className="mb-8">
            <Skeleton className="h-6 w-64 mb-4" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <LessonCardSkeleton />
              <LessonCardSkeleton />
              <LessonCardSkeleton />
            </div>
          </div>
        ) : (
          !hasActiveFilters && (
            <RecommendedSection lessons={recommendedLessons} reasons={recommendReasons} />
          )
        )}

        {/* Results summary */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">
            {hasActiveFilters
              ? `${filtered.length} lesson${filtered.length !== 1 ? 's' : ''} found`
              : `All Lesson Plans`}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filtered.length} of {allLessonPlans.length}
          </span>
        </div>

        {/* No results */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-12 text-center">
            <Search className="mx-auto mb-2 h-8 w-8 text-muted-foreground opacity-50" />
            <p className="text-sm text-muted-foreground">
              No lesson plans match your filters.
            </p>
            <Button variant="ghost" size="sm" className="mt-3" onClick={clearAllFilters}>
              Clear all filters
            </Button>
          </div>
        ) : hasActiveFilters ? (
          /* Flat grid when filters are active */
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isRecommended={recommendedIds.has(lesson.id)}
              />
            ))}
          </div>
        ) : (
          /* Category sections when no filters */
          <div className="space-y-2">
            {CATEGORIES.map((cat) => (
              <CategorySection
                key={cat}
                category={cat}
                lessons={categorised[cat]}
                recommendedIds={recommendedIds}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
