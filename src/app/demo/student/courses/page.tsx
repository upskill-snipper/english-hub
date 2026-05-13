'use client'

import Link from 'next/link'
import { BookOpen, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

const STUDENT = {
  name: 'Aisha Rahman',
  year: 'Year 11',
}

const COURSES = [
  {
    id: 'aqa-lang-p1',
    title: 'AQA English Language Paper 1',
    modules: 15,
    progress: 67,
    description: 'Explorations in creative reading and writing for Paper 1.',
  },
  {
    id: 'aqa-lang-p2',
    title: 'AQA English Language Paper 2',
    modules: 12,
    progress: 45,
    description: "Writers' viewpoints and perspectives, non-fiction reading and writing.",
  },
  {
    id: 'aqa-lit-inspector',
    title: 'AQA Literature -- Inspector Calls',
    modules: 10,
    progress: 80,
    description: 'Character analysis, themes, and essay writing for An Inspector Calls.',
  },
  {
    id: 'aqa-lit-poetry',
    title: 'AQA Literature -- Poetry',
    modules: 8,
    progress: 30,
    description: 'Poetry analysis, comparison essays, and unseen poetry techniques.',
  },
  {
    id: 'creative-writing',
    title: 'Creative Writing Skills',
    modules: 6,
    progress: 100,
    description: 'Narrative structure, descriptive techniques, and creative voice development.',
  },
  {
    id: 'exam-technique',
    title: 'Exam Technique Masterclass',
    modules: 5,
    progress: 20,
    description: 'Time management, question decoding, and high-mark answer structures.',
  },
]

function progressBarColor(pct: number) {
  if (pct === 100) return 'bg-teal-700'
  if (pct >= 60) return 'bg-blue-500'
  if (pct >= 40) return 'bg-amber-500'
  return 'bg-red-500'
}

export default function StudentCoursesPage() {
  const t = useT()
  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back link */}
        <Link
          href="/demo/student"
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('demo_student.courses.back_dashboard')}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-tight text-ink-900">
            {t('demo_student.courses.title')}
          </h1>
          <p className="text-ink-500 text-sm mt-1">
            {STUDENT.name} -- {STUDENT.year}
          </p>
        </div>

        {/* Course cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURSES.map((course) => (
            <Link
              key={course.id}
              href={`/demo/student/courses/${course.id}`}
              className="group rounded-xl border border-ink-200 bg-white p-5 transition-all hover:border-ink-200 hover:bg-white"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-ink-500 flex-shrink-0 mt-0.5" />
                  <h3 className="text-base font-medium text-ink-900 leading-tight">
                    {course.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-ink-500 mb-4 leading-relaxed">{course.description}</p>

              <div className="flex items-center justify-between text-xs text-ink-500 mb-2">
                <span>
                  {course.modules} {t('demo_student.courses.modules_suffix')}
                </span>
                <span className="text-ink-600">{course.progress}%</span>
              </div>

              <div className="h-1.5 rounded-full bg-cream-100 mb-4">
                <div
                  className={`h-1.5 rounded-full ${progressBarColor(course.progress)} transition-all`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                {course.progress === 100 ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-800/10 border border-teal-800/20 px-2.5 py-1 text-[11px] font-medium text-teal-700">
                    <CheckCircle2 className="h-3 w-3" />
                    {t('demo_student.courses.completed_badge')}
                  </span>
                ) : (
                  <span />
                )}
                <span className="inline-flex items-center gap-1 text-sm text-ink-500 group-hover:text-teal-700 transition-colors">
                  {course.progress === 100
                    ? t('demo_student.courses.review_btn')
                    : t('demo_student.courses.continue_btn')}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
