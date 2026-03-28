'use client'

import { useState, useEffect, useRef, useMemo, useCallback, memo } from 'react'
import Link from 'next/link'
import { BookOpen, Clock, GraduationCap, Play, PenTool, Feather } from 'lucide-react'
import { loadAllCourses } from '@/data/course-loader'
import type { CourseData } from '@/data/courses'
import { useBoardStore } from '@/store/board-store'
import { useAuthStore } from '@/store/auth-store'
import { matchesBoard } from '@/lib/board-filter'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const TIERS = ['All', 'KS3', 'GCSE', 'IGCSE'] as const
type Tier = (typeof TIERS)[number]

function getDefaultTierForYearGroup(yearGroup: string | null | undefined): Tier {
  if (!yearGroup) return 'All'
  const normalized = yearGroup.trim().toLowerCase()
  if (['7', '8', '9', 'year 7', 'year 8', 'year 9'].includes(normalized)) return 'KS3'
  if (['10', '11', 'year 10', 'year 11'].includes(normalized)) return 'GCSE'
  return 'All'
}

export default function CourseCataloguePage() {
  const { selectedBoard } = useBoardStore()
  const { user, profile } = useAuthStore()

  const [courses, setCourses] = useState<CourseData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTier, setActiveTier] = useState<Tier>('All')
  const hasManuallySelected = useRef(false)

  // Load course data dynamically
  useEffect(() => {
    loadAllCourses().then((data) => {
      setCourses(data)
      setIsLoading(false)
    })
  }, [])

  // Auto-select tier based on user's year group once profile loads
  useEffect(() => {
    if (hasManuallySelected.current) return
    const tier = getDefaultTierForYearGroup(profile?.year_group)
    setActiveTier(tier)
  }, [profile?.year_group])

  const handleTierChange = useCallback((value: string) => {
    hasManuallySelected.current = true
    setActiveTier(value as Tier)
  }, [])

  const filtered = useMemo(() => {
    const result = courses.filter((c) => {
      if (!matchesBoard(c.board, selectedBoard)) return false
      if (activeTier !== 'All' && c.tier?.toUpperCase() !== activeTier) return false
      return true
    })
    // If board+tier combination yields nothing, relax the board filter so
    // visitors always see courses rather than an empty page.
    if (result.length === 0 && courses.length > 0) {
      return courses.filter((c) => {
        if (activeTier !== 'All' && c.tier?.toUpperCase() !== activeTier) return false
        return true
      })
    }
    return result
  }, [courses, selectedBoard, activeTier])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <h1 className="text-foreground">
            Course Catalogue
          </h1>
          <p className="mt-5 max-w-2xl text-body-lg text-muted-foreground">
            Structured courses designed to take you from fundamentals to exam
            confidence. Pick your level, choose a course, and start learning
            today.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Need to understand your exam structure first?{' '}
            <Link href="/exam-guide" className="text-primary underline underline-offset-2 hover:text-primary/80 font-medium">
              Check out our comprehensive Exam Guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Subscription CTA */}
      {!user && (
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-primary/[0.04]">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    Subscribe to unlock all courses
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-bold text-primary">{PRICING.TRIAL_TEXT}!</span>
                    {' '}Then just {PRICING_DISPLAY.monthly} on a rolling monthly contract. Cancel anytime.
                  </p>
                </div>
                <Button variant="default" size="lg" className="shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
                  Start Free Trial
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Filter tabs + grid */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Board context badge */}
        {selectedBoard && (
          <div className="mb-5">
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20" render={<Link href={`/exam-guide/${selectedBoard.toLowerCase()}`} />}>
              Showing courses for {selectedBoard} — View exam guide →
            </Badge>
          </div>
        )}

        {/* Tier filter pills */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {TIERS.map((tier) => (
              <button
                key={tier}
                onClick={() => handleTierChange(tier)}
                className={cn(
                  'inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200',
                  activeTier === tier
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/40'
                )}
              >
                {tier}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-border/40 bg-card p-6 animate-pulse">
                  <div className="h-1 w-full bg-muted rounded mb-4" />
                  <div className="flex gap-2 mb-3">
                    <div className="h-5 w-12 bg-muted rounded-full" />
                    <div className="h-5 w-16 bg-muted rounded-full" />
                  </div>
                  <div className="h-6 w-3/4 bg-muted rounded mb-2" />
                  <div className="h-4 w-full bg-muted rounded mb-1" />
                  <div className="h-4 w-2/3 bg-muted rounded mb-4" />
                  <div className="h-4 w-1/2 bg-muted rounded" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground mb-4">
                No courses found for this level. Try selecting a different tier above.
              </p>
              <Button variant="outline" onClick={() => handleTierChange('All')}>
                Show All Courses
              </Button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Supplement Your Learning */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-foreground">Supplement Your Learning</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Explore these complementary resources to deepen your understanding and boost your exam preparation.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: '/resources/revision-notes',
                icon: BookOpen,
                title: 'Text Study Guides',
                description: 'Detailed revision notes for every set text',
              },
              {
                href: '/resources/writing-skills',
                icon: PenTool,
                title: 'Writing Masterclass',
                description: 'Creative, persuasive, and analytical writing guides',
              },
              {
                href: '/resources/poetry',
                icon: Feather,
                title: 'Poetry Hub',
                description: 'Anthology analysis and poetry techniques',
              },
              {
                href: '/resources/english-literature',
                icon: GraduationCap,
                title: 'Literature Guides',
                description: 'Board-specific literature exam preparation',
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
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

/* ------------------------------------------------------------------ */

interface CourseCardProps {
  course: CourseData
}

const CourseCard = memo(function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group"
    >
      <Card className="flex h-full flex-col overflow-hidden border-border/40 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
        {/* Colour accent bar */}
        <div className="h-1 w-full" style={{ backgroundColor: course.color }} />

        <CardHeader className="pb-0">
          {/* Badge row */}
          <div className="mb-3 flex items-center gap-2">
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
            <Badge variant="secondary" className="text-xs font-medium">
              {course.level}
            </Badge>
            {course.board && (
              <Badge variant="secondary" className="rounded-full bg-blue-500/20 text-blue-400">
                {course.board}
              </Badge>
            )}
          </div>

          <CardTitle className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
            {course.title}
          </CardTitle>
          <CardDescription>{course.subtitle}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          {/* Description excerpt */}
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground/80">
            {course.description}
          </p>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              {course.moduleList.length} modules
            </span>
            <span className="inline-flex items-center gap-1">
              <GraduationCap className="h-3.5 w-3.5" />
              {course.level}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex-col items-stretch gap-3 pt-5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
              <Play className="h-3 w-3" />
              Free preview available
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="bg-primary/10 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
              tabIndex={-1}
            >
              View Course
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
})
