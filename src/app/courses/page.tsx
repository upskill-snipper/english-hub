'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Clock, GraduationCap } from 'lucide-react'
import { allCourses as courses } from '@/data/courses'
import { useBoardStore } from '@/store/board-store'
import { useAuthStore } from '@/store/auth-store'
import { matchesBoard } from '@/lib/board-filter'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const TIERS = ['All', 'KS3', 'GCSE', 'IGCSE'] as const
type Tier = (typeof TIERS)[number]


export default function CourseCataloguePage() {
  const [activeTier, setActiveTier] = useState<Tier>('All')
  const { selectedBoard } = useBoardStore()
  const { user } = useAuthStore()

  const filtered = courses.filter((c) => {
    if (!matchesBoard(c.board, selectedBoard)) return false
    if (activeTier !== 'All' && c.tier?.toUpperCase() !== activeTier) return false
    return true
  })

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
                    <span className="font-bold text-primary">First month FREE!</span>
                    {' '}Then just {PRICING_DISPLAY.monthly} on a rolling monthly contract.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Annual subscription also available &mdash; save {PRICING.ANNUAL_SAVE_PERCENT}%.
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

        {/* Tabs */}
        <Tabs value={activeTier} onValueChange={(value) => setActiveTier(value as Tier)} className="mb-8">
          <TabsList>
            {TIERS.map((tier) => (
              <TabsTrigger key={tier} value={tier}>
                {tier}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* We render a single TabsContent for each tier, all sharing the same grid */}
          {TIERS.map((tier) => (
            <TabsContent key={tier} value={tier} className="mt-6">
              {filtered.length === 0 ? (
                <p className="py-20 text-center text-muted-foreground">
                  No courses found for this level.
                </p>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  )
}

/* ------------------------------------------------------------------ */

interface CourseCardProps {
  course: (typeof courses)[number]
}

function CourseCard({ course }: CourseCardProps) {
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

        <CardFooter className="flex items-center justify-between pt-5">
          <span className="text-xs text-muted-foreground">
            Included with subscription
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="bg-primary/10 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
            tabIndex={-1}
          >
            View Course
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
