"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react"

const STUDENT = {
  name: "Aisha Rahman",
  year: "Year 10",
}

const COURSES = [
  {
    id: "igcse-lang-p1",
    title: "IGCSE English Language Paper 1",
    modules: 15,
    progress: 67,
    description: "Reading comprehension, summary writing, and directed writing skills for Paper 1.",
  },
  {
    id: "igcse-lang-p2",
    title: "IGCSE English Language Paper 2",
    modules: 12,
    progress: 45,
    description: "Extended writing, descriptive and narrative composition techniques.",
  },
  {
    id: "igcse-lit-inspector",
    title: "IGCSE Literature -- Inspector Calls",
    modules: 10,
    progress: 80,
    description: "Character analysis, themes, and essay writing for An Inspector Calls.",
  },
  {
    id: "igcse-lit-poetry",
    title: "IGCSE Literature -- Poetry",
    modules: 8,
    progress: 30,
    description: "Poetry analysis, comparison essays, and unseen poetry techniques.",
  },
  {
    id: "creative-writing",
    title: "Creative Writing Skills",
    modules: 6,
    progress: 100,
    description: "Narrative structure, descriptive techniques, and creative voice development.",
  },
  {
    id: "exam-technique",
    title: "Exam Technique Masterclass",
    modules: 5,
    progress: 20,
    description: "Time management, question decoding, and high-mark answer structures.",
  },
]

function progressBarColor(pct: number) {
  if (pct === 100) return "bg-emerald-500"
  if (pct >= 60) return "bg-blue-500"
  if (pct >= 40) return "bg-amber-500"
  return "bg-red-500"
}

export default function StudentCoursesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
          <p className="text-sm text-emerald-400">
            <span className="font-semibold">Student Demo</span> -- See what
            students experience when they log in
          </p>
        </div>

        {/* Back link */}
        <Link
          href="/demo"
          className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to demos
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-tight text-white/90">
            My Courses
          </h1>
          <p className="text-white/40 text-sm mt-1">
            {STUDENT.name} -- {STUDENT.year}
          </p>
        </div>

        {/* Course cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURSES.map((course) => (
            <Link
              key={course.id}
              href={`/demo/student/courses/${course.id}`}
              className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-white/30 flex-shrink-0 mt-0.5" />
                  <h3 className="text-base font-medium text-white/90 leading-tight">
                    {course.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-white/40 mb-4 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                <span>{course.modules} modules</span>
                <span className="text-white/60">{course.progress}%</span>
              </div>

              <div className="h-1.5 rounded-full bg-white/5 mb-4">
                <div
                  className={`h-1.5 rounded-full ${progressBarColor(course.progress)} transition-all`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                {course.progress === 100 ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed!
                  </span>
                ) : (
                  <span />
                )}
                <span className="inline-flex items-center gap-1 text-sm text-white/50 group-hover:text-emerald-400 transition-colors">
                  {course.progress === 100 ? "Review" : "Continue"}
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
