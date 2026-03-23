'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'
import {
  BookOpen,
  GraduationCap,
  Globe,
  Award,
  CheckCircle,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { loadCoursesByBoard } from '@/data/course-loader'
import type { CourseData } from '@/data/courses'
import { useBoardStore } from '@/store/board-store'
import { useAuthStore } from '@/store/auth-store'

/* ───────────────────── Spec A / Spec B skills ───────────────────── */

const specASkills = [
  'Non-fiction reading comprehension',
  'Transactional writing (letters, articles, speeches)',
  'Poetry & prose analysis (unseen texts)',
  'Imaginative & descriptive writing',
  'Inference, synthesis & evaluation',
  'Examiner-level response structuring',
]

const specBSkills = [
  'Non-fiction & literary reading',
  'Transactional writing (reports, reviews, essays)',
  'Creative & narrative writing',
  'Close language analysis techniques',
  'Comparing writers\u2019 perspectives',
  'Exam timing & mark-scheme strategies',
]

/* ───────────────────── Exam structure data ───────────────────── */

const examStructure = [
  {
    spec: 'Spec A (4EA1)',
    papers: [
      {
        name: 'Paper 1 — Non-Fiction Texts & Transactional Writing',
        time: '2 h 15 min',
        marks: '90',
        weight: '60%',
      },
      {
        name: 'Paper 2 — Poetry & Prose Texts & Imaginative Writing',
        time: '1 h 30 min',
        marks: '60',
        weight: '40%',
      },
    ],
  },
  {
    spec: 'Spec B (4EB1)',
    papers: [
      {
        name: 'Paper 1 — Non-Fiction Texts & Transactional Writing',
        time: '2 h 15 min',
        marks: '90',
        weight: '60%',
      },
      {
        name: 'Paper 2 — Literary & Non-Fiction Texts & Creative Writing',
        time: '1 h 30 min',
        marks: '60',
        weight: '40%',
      },
    ],
  },
]

/* ───────────────────── Page ───────────────────── */

export default function IGCSELandingPage() {
  const { selectedBoard } = useBoardStore();
  const { user } = useAuthStore();
  const [igcseCourses, setIgcseCourses] = useState<CourseData[]>([])

  useEffect(() => {
    loadCoursesByBoard('igcse').then(setIgcseCourses)
  }, [])

  // Block non-Edexcel users from IGCSE page
  if (selectedBoard && selectedBoard !== 'Edexcel') {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-background text-foreground">
        <h1 className="text-2xl font-bold">IGCSE courses are for Edexcel students.</h1>
        <p className="text-muted-foreground text-center max-w-md">
          You have <strong>{selectedBoard}</strong> selected. IGCSE courses are only available for Edexcel students.
        </p>
        <Link href="/courses" className="btn-primary text-sm">
          Browse your courses
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* ━━━ HERO ━━━ */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
            <GraduationCap className="w-4 h-4" />
            International GCSE English Language
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
            Edexcel IGCSE
            <br />
            <span className="text-primary">English Language</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Complete courses for Specification A (4EA1) and Specification B
            (4EB1). Expert-written lessons, examiner-style model answers, and
            proven exam strategies &mdash; everything you need to achieve a
            grade 9.
          </p>

          {!user && (
            <div className="mt-8 flex flex-col items-center gap-1">
              <p className="text-xl sm:text-2xl font-bold text-primary">
                {PRICING.TRIAL_TEXT}! Then {PRICING_DISPLAY.monthly}
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses" className="btn-primary text-lg px-8 py-4">
              Browse IGCSE Courses
            </Link>
            {!user && (
              <Link
                href="/auth/register"
                className="btn-secondary text-lg px-8 py-4"
              >
                Start Free Today
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Subscription CTA Banner */}
      {!user && (
        <section className="bg-card/30 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground sm:text-xl">
                    Get full access to all IGCSE courses, practice questions, and model answers.
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-semibold text-primary">{PRICING.TRIAL_TEXT}!</span>
                    {' '}Then {PRICING_DISPLAY.monthly} on a rolling monthly contract. Cancel anytime.
                  </p>
                </div>
                <Link
                  href="/auth/register"
                  className="inline-flex shrink-0 items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ━━━ WHY IGCSE ━━━ */}
      <section className="py-20 sm:py-28 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why Choose IGCSE?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              The International GCSE is trusted by schools, universities, and
              employers worldwide &mdash; and our courses are built to help you
              excel in every paper.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                color: 'text-cyan-400 bg-cyan-500/10',
                title: 'International Recognition',
                desc: 'Accepted by universities and institutions in over 100 countries, giving you a globally portable qualification.',
              },
              {
                icon: BookOpen,
                color: 'text-primary bg-primary/10',
                title: 'Broader Text Types',
                desc: 'IGCSE covers a wider range of reading and writing styles than domestic GCSE, building versatile English skills.',
              },
              {
                icon: Award,
                color: 'text-amber-400 bg-amber-500/10',
                title: 'Taken Worldwide',
                desc: 'Sat by hundreds of thousands of students across the globe each year — a proven standard of excellence.',
              },
              {
                icon: GraduationCap,
                color: 'text-emerald-400 bg-emerald-500/10',
                title: 'University Pathway',
                desc: 'Meets entry requirements for top UK and international universities, including Russell Group institutions.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4`}
                >
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ COURSE CARDS ━━━ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our IGCSE Courses
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Two dedicated courses &mdash; one for each specification. Pick
              yours or study both to maximise your preparation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {igcseCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="card group flex flex-col overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Colour accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: course.color }}
                />

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
                    <span className="inline-flex items-center rounded-md bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {course.level}
                    </span>
                    {course.board && (
                      <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                        {course.board}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {course.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground/80">
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

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-xs text-muted-foreground">
                      Included with subscription
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                      View Course
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ WHAT YOU'LL LEARN ━━━ */}
      <section className="py-20 sm:py-28 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What You&rsquo;ll Learn
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Each specification focuses on distinct skills. Here&rsquo;s what
              you&rsquo;ll master.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Spec A */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Specification A (4EA1)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Non-fiction, transactional &amp; imaginative writing
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {specASkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Spec B */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Specification B (4EB1)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Literary &amp; non-fiction reading, creative writing
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {specBSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ EXAM STRUCTURE TABLE ━━━ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Exam Structure
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Both specifications consist of two externally examined papers.
            </p>
          </div>

          <div className="space-y-8">
            {examStructure.map((spec) => (
              <div key={spec.spec} className="card overflow-hidden">
                <div className="bg-card/60 px-6 py-4 border-b border-border">
                  <h3 className="text-lg font-bold text-foreground">
                    {spec.spec}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="px-6 py-3 font-semibold text-foreground">
                          Paper
                        </th>
                        <th className="px-6 py-3 font-semibold text-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> Time
                          </span>
                        </th>
                        <th className="px-6 py-3 font-semibold text-foreground">
                          Marks
                        </th>
                        <th className="px-6 py-3 font-semibold text-foreground">
                          Weight
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {spec.papers.map((paper) => (
                        <tr
                          key={paper.name}
                          className="border-b border-border last:border-0"
                        >
                          <td className="px-6 py-4 text-muted-foreground">
                            {paper.name}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {paper.time}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {paper.marks}
                          </td>
                          <td className="px-6 py-4 font-semibold text-foreground">
                            {paper.weight}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CTA BANNER ━━━ */}
      <section className="py-20 sm:py-28 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative card p-12 sm:p-16 overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Achieve a Top Grade?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                Join thousands of international students who have transformed
                their English skills with expert-written courses, examiner-style
                model answers, and proven exam strategies.
              </p>

              {!user && (
                <div className="mb-8 flex flex-col items-center gap-1">
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    {PRICING.TRIAL_TEXT}! Then {PRICING_DISPLAY.monthly}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {!user ? (
                  <Link
                    href="/auth/register"
                    className="btn-primary text-lg px-10 py-4"
                  >
                    Start Free Today
                  </Link>
                ) : (
                  <Link
                    href="/courses"
                    className="btn-primary text-lg px-10 py-4"
                  >
                    Browse IGCSE Courses
                  </Link>
                )}
                <Link
                  href="/courses"
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2"
                >
                  View All Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
