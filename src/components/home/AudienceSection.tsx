'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Sparkles,
  Target,
  FileQuestion,
  Timer,
  BarChart3,
  Layout,
  ClipboardCheck,
  TrendingUp,
  Users,
  Printer,
  GraduationCap,
} from 'lucide-react'

const studentBenefits = [
  {
    icon: Sparkles,
    color: 'text-cyan-400 bg-cyan-500/10',
    title: 'AI-Powered Essay Feedback',
    desc: 'Submit your essay and get instant, detailed feedback with grade estimates, strengths, and paragraph-by-paragraph annotation.',
  },
  {
    icon: Target,
    color: 'text-primary bg-primary/10',
    title: 'Board-Specific Revision Materials',
    desc: 'Tailored content for AQA, Edexcel, OCR, and WJEC — study only what your specification demands.',
  },
  {
    icon: FileQuestion,
    color: 'text-blue-400 bg-blue-500/10',
    title: 'Practice Questions with Model Answers',
    desc: 'Exam-style questions modelled on real papers, complete with mark schemes and model answers at every grade band.',
  },
  {
    icon: Timer,
    color: 'text-orange-400 bg-orange-500/10',
    title: 'Mock Exams with Timing',
    desc: '120+ full-length timed mock exams in real exam format. Practise under pressure and build exam stamina.',
  },
  {
    icon: BarChart3,
    color: 'text-emerald-400 bg-emerald-500/10',
    title: 'Progress Tracking',
    desc: 'Track your progress through every course with visual dashboards, completion badges, and revision streaks.',
  },
]

const teacherBenefits = [
  {
    icon: Layout,
    color: 'text-primary bg-primary/10',
    title: 'Lesson Builder with 300+ Templates',
    desc: 'Create polished lessons in minutes with ready-made templates covering every GCSE English topic.',
  },
  {
    icon: BarChart3,
    color: 'text-cyan-400 bg-cyan-500/10',
    title: 'Student Analytics Dashboard',
    desc: 'See how every student is progressing at a glance — completion rates, grades, strengths, and gaps.',
  },
  {
    icon: ClipboardCheck,
    color: 'text-emerald-400 bg-emerald-500/10',
    title: 'AI Essay Marking for Whole Classes',
    desc: 'Mark an entire class set of essays in seconds. AI-powered feedback aligned to GCSE mark schemes.',
  },
  {
    icon: TrendingUp,
    color: 'text-amber-400 bg-amber-500/10',
    title: 'Predicted Grades & Targeted Recommendations',
    desc: 'Data-driven grade predictions and personalised recommendations to help every student reach their target.',
  },
  {
    icon: Users,
    color: 'text-blue-400 bg-blue-500/10',
    title: 'Class Management & Homework Setting',
    desc: 'Create classes, set assignments, track submissions, and manage homework — all in one place.',
  },
  {
    icon: Printer,
    color: 'text-orange-400 bg-orange-500/10',
    title: 'Printable Worksheets & Resources',
    desc: 'Download and print worksheets, model answers, and revision materials for use in lessons.',
  },
]

export default function AudienceSection() {
  const [audienceTab, setAudienceTab] = useState<'students' | 'teachers'>('students')

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-foreground">
            Built for Everyone
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            Whether you&rsquo;re revising for exams or running a classroom, we&rsquo;ve got you covered.
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setAudienceTab('students')}
            className={cn(
              'px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300',
              audienceTab === 'students'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/70'
            )}
          >
            <GraduationCap className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            For Students
          </button>
          <button
            onClick={() => setAudienceTab('teachers')}
            className={cn(
              'px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300',
              audienceTab === 'teachers'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/70'
            )}
          >
            <Users className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            For Teachers
          </button>
        </div>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(audienceTab === 'students' ? studentBenefits : teacherBenefits).map((benefit) => (
            <Card key={benefit.title} className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300">
              <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', benefit.color)}>
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          {audienceTab === 'students' ? (
            <Button variant="default" size="lg" className="text-base px-10 h-12 shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
              Start Free Trial
            </Button>
          ) : (
            <Button variant="default" size="lg" className="text-base px-10 h-12 shadow-lg shadow-primary/20" render={<Link href="/for-teachers" />}>
              Start Teaching
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
