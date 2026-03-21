'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Clock, GraduationCap } from 'lucide-react'
import { allCourses as courses } from '@/data/courses'

const TIERS = ['All', 'KS3', 'GCSE', 'IGCSE'] as const
type Tier = (typeof TIERS)[number]

const BOARDS = ['All', 'AQA', 'Edexcel'] as const
type Board = (typeof BOARDS)[number]

export default function CourseCataloguePage() {
  const [activeTier, setActiveTier] = useState<Tier>('All')
  const [board, setBoard] = useState<Board>('All')

  const filtered = courses.filter((c) => {
    if (activeTier !== 'All' && c.tier?.toUpperCase() !== activeTier) return false
    if (board !== 'All' && c.board !== board) return false
    return true
  })

  return (
    <main id="main-content" className="min-h-screen bg-brand-bg">
      {/* Hero */}
      <section className="border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
            Course Catalogue
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-muted">
            Structured courses designed to take you from fundamentals to exam
            confidence. Pick your level, choose a course, and start learning
            today.
          </p>
        </div>
      </section>

      {/* Filter tabs + grid */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div role="group" aria-label="Filter by level" className="mb-8 flex gap-2">
          {TIERS.map((tier) => (
            <button
              key={tier}
              type="button"
              aria-pressed={activeTier === tier}
              onClick={() => setActiveTier(tier)}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                activeTier === tier
                  ? 'bg-brand-accent text-white'
                  : 'bg-brand-card text-brand-muted hover:text-brand-text border border-brand-border'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* Board filter */}
        <div role="group" aria-label="Filter by exam board" className="mb-8 flex gap-2">
          {BOARDS.map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={board === b}
              onClick={() => setBoard(b)}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                board === b
                  ? 'bg-brand-accent text-white'
                  : 'bg-brand-card text-brand-muted hover:text-brand-text border border-brand-border'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-brand-muted">
            No courses found for this level.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
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
      className="card group flex flex-col overflow-hidden transition-all duration-200 hover:border-brand-accent/40 hover:shadow-lg hover:shadow-brand-accent/5"
    >
      {/* Colour accent bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: course.color }} />

      <div className="flex flex-1 flex-col p-6">
        {/* Badge row */}
        <div className="mb-3 flex items-center gap-2">
          <span
            className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold"
            style={{
              backgroundColor: `${course.color}20`,
              color: course.color,
            }}
          >
            {course.tier}
          </span>
          <span className="inline-flex items-center rounded-md bg-brand-bg px-2.5 py-0.5 text-xs font-medium text-brand-muted">
            {course.level}
          </span>
          {course.board && (
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
              {course.board}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-accent transition-colors duration-200">
          {course.title}
        </h3>
        <p className="mt-1 text-sm text-brand-muted">{course.subtitle}</p>

        {/* Description excerpt */}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-brand-muted/80">
          {course.description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-brand-muted">
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

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-5">
          <span className="text-xl font-bold text-brand-text">
            £{course.price}
          </span>
          <span className="inline-flex items-center rounded-lg bg-brand-accent/10 px-4 py-2 text-sm font-semibold text-brand-accent transition-colors duration-200 group-hover:bg-brand-accent group-hover:text-white">
            View Course
          </span>
        </div>
      </div>
    </Link>
  )
}
