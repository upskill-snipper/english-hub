'use client'

import React from 'react'
import { useT } from '@/lib/i18n/use-t'

const courses = [
  {
    name: 'GCSE English Language',
    papers: 'Paper 1 & 2',
    progress: 72,
    lessons: 24,
    completed: 17,
  },
  { name: 'IGCSE Literature', papers: 'Poetry & Prose', progress: 45, lessons: 18, completed: 8 },
  {
    name: 'Creative Writing',
    papers: 'Descriptive & Narrative',
    progress: 88,
    lessons: 12,
    completed: 11,
  },
  {
    name: 'Shakespeare Studies',
    papers: 'Macbeth & Romeo',
    progress: 31,
    lessons: 16,
    completed: 5,
  },
]

const activity = [
  { text: 'Completed Paper 1 Q5 practice essay', time: '2 hours ago', color: 'bg-primary' },
  { text: 'Reviewed feedback on Macbeth analysis', time: '5 hours ago', color: 'bg-accent' },
  { text: 'Achieved 8/8 on inference questions', time: 'Yesterday', color: 'bg-primary' },
  { text: 'Started Poetry Anthology module', time: 'Yesterday', color: 'bg-chart-4' },
  { text: 'Watched Language Paper 2 walkthrough', time: '2 days ago', color: 'bg-chart-3' },
  { text: 'Submitted narrative writing draft', time: '3 days ago', color: 'bg-primary/70' },
]

const deadlines = [
  { title: 'Paper 1 Mock Exam', subject: 'GCSE English Language', date: 'Mar 25', daysLeft: 4 },
  { title: 'Macbeth Essay Draft', subject: 'Shakespeare Studies', date: 'Mar 28', daysLeft: 7 },
  { title: 'Poetry Comparison', subject: 'IGCSE Literature', date: 'Apr 2', daysLeft: 12 },
  { title: 'Creative Portfolio', subject: 'Creative Writing', date: 'Apr 8', daysLeft: 18 },
]

const stats = [
  { value: '87', label: 'Avg. Score', suffix: '%' },
  { value: '142', label: 'Hours Studied', suffix: 'h' },
  { value: '36', label: 'Essays Written', suffix: '' },
  { value: '4.8', label: 'Tutor Rating', suffix: '/5' },
]

export default function SoftAuroraPage() {
  const t = useT()
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Aurora gradient blobs */}
      <div
        className="pointer-events-none absolute -left-32 top-16 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/20 to-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-[400px] h-[600px] w-[600px] rounded-full bg-gradient-to-r from-chart-4/20 to-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[500px] rounded-full bg-gradient-to-r from-chart-3/15 to-chart-1/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-sm font-medium tracking-wide text-muted-foreground">
              {t('demo.b15.design3.eyebrow')}
            </p>
            <h1 className="text-4xl font-light text-foreground">
              {t('demo.b15.design3.greeting')} Olivia
            </h1>
            <p className="mt-2 text-muted-foreground">{t('demo.b15.design3.progress_sub')}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
              OW
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mb-8 grid grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-card p-8 shadow-soft">
              <p className="text-5xl font-light text-foreground">
                {stat.value}
                <span className="ml-1 text-lg font-normal text-muted-foreground">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Courses */}
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <h2 className="mb-6 text-lg font-medium text-foreground">
                {t('demo.b15.design3.my_courses')}
              </h2>
              <div className="flex flex-col gap-5">
                {courses.map((course) => (
                  <div key={course.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">{course.name}</p>
                        <p className="text-xs text-muted-foreground">{course.papers}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {course.completed}/{course.lessons} {t('demo.b15.design3.lessons_done')}
                      </p>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Focus - frosted glass */}
            <div className="rounded-2xl bg-card/60 p-8 backdrop-blur-xl shadow-soft">
              <h2 className="mb-4 text-lg font-medium text-foreground">Weekly Focus</h2>
              <p className="mb-5 text-sm text-muted-foreground">
                This week&apos;s recommended focus based on your performance.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    area: 'Language Analysis',
                    tip: "Practice identifying writer's methods in Paper 1 Q2",
                    priority: 'High',
                  },
                  {
                    area: 'Essay Structure',
                    tip: 'Work on paragraph cohesion for 20+ mark responses',
                    priority: 'Medium',
                  },
                  {
                    area: 'Quotation Embedding',
                    tip: 'Integrate shorter quotes more naturally into analysis',
                    priority: 'Medium',
                  },
                ].map((focus) => (
                  <div key={focus.area} className="flex items-start gap-3">
                    <div
                      className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${
                        focus.priority === 'High' ? 'bg-primary' : 'bg-primary/50'
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">{focus.area}</p>
                      <p className="text-xs text-muted-foreground">{focus.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Activity Timeline */}
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <h2 className="mb-6 text-lg font-medium text-foreground">
                {t('demo.b15.design3.recent_activity')}
              </h2>
              <div className="flex flex-col gap-4">
                {activity.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ${item.color}`}
                      />
                      {i < activity.length - 1 && <div className="mt-1 h-8 w-px bg-border" />}
                    </div>
                    <div className="pb-1">
                      <p className="text-sm text-foreground">{item.text}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <h2 className="mb-6 text-lg font-medium text-foreground">
                {t('demo.b15.design3.upcoming_deadlines')}
              </h2>
              <div className="flex flex-col gap-4">
                {deadlines.map((deadline) => (
                  <div
                    key={deadline.title}
                    className="flex items-center justify-between rounded-xl bg-muted/80 px-5 py-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{deadline.title}</p>
                      <p className="text-xs text-muted-foreground">{deadline.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-muted-foreground">{deadline.date}</p>
                      <p
                        className={`text-xs ${
                          deadline.daysLeft <= 5
                            ? 'font-medium text-primary'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {deadline.daysLeft} {t('demo.b15.design3.days_left')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <h2 className="mb-4 text-lg font-medium text-foreground">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {['Practice Essay', 'Book Tutor', 'Past Papers', 'Revision Notes'].map((action) => (
                  <button
                    key={action}
                    className="rounded-xl bg-muted px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground">Soft Aurora - Design 3 Concept</p>
        </div>
      </div>
    </div>
  )
}
