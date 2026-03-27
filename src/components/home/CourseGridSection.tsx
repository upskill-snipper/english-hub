'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useBoardStore } from '@/store/board-store'
import { PRICING } from '@/constants/pricing'
import {
  BookOpen,
  Clock,
} from 'lucide-react'

const courses = [
  {
    title: 'KS3 Reading',
    level: 'KS3',
    levelColor: 'bg-blue-500/20 text-blue-400',
    duration: '6 weeks',
    desc: 'Core reading skills — inference, analysis, and comparison for Years 7-9.',
    boards: ['all'],
  },
  {
    title: 'KS3 Writing',
    level: 'KS3',
    levelColor: 'bg-blue-500/20 text-blue-400',
    duration: '6 weeks',
    desc: 'Creative and transactional writing foundations for Years 7-9.',
    boards: ['all'],
  },
  {
    title: 'KS3 Grammar',
    level: 'KS3',
    levelColor: 'bg-blue-500/20 text-blue-400',
    duration: '6 weeks',
    desc: 'Master sentence structure, punctuation, and grammar essentials.',
    boards: ['all'],
  },
  {
    title: 'AQA Language Paper 1',
    level: 'GCSE',
    levelColor: 'bg-primary/20 text-primary',
    duration: '8 weeks',
    desc: 'Explorations in creative reading and writing — fiction extracts and descriptive/narrative tasks.',
    boards: ['AQA'],
  },
  {
    title: 'AQA Language Paper 2',
    level: 'GCSE',
    levelColor: 'bg-primary/20 text-primary',
    duration: '8 weeks',
    desc: 'Writers\u2019 viewpoints and perspectives — non-fiction reading and transactional writing for AQA.',
    boards: ['AQA'],
  },
  {
    title: 'AQA Literature Poetry',
    level: 'GCSE',
    levelColor: 'bg-purple-500/20 text-purple-400',
    duration: '7 weeks',
    desc: 'Power & Conflict, Love & Relationships, and unseen poetry mastery for AQA.',
    boards: ['AQA'],
  },
  {
    title: 'Edexcel Language Paper 1',
    level: 'GCSE',
    levelColor: 'bg-primary/20 text-primary',
    duration: '8 weeks',
    desc: 'Master 19th-century non-fiction analysis and transactional writing for Edexcel 1EN2.',
    boards: ['Edexcel'],
  },
  {
    title: 'Edexcel Literature Paper 1',
    level: 'GCSE',
    levelColor: 'bg-purple-500/20 text-purple-400',
    duration: '8 weeks',
    desc: 'Shakespeare and Post-1914 Literature with extract-based response techniques.',
    boards: ['Edexcel'],
  },
  {
    title: 'IGCSE Language A',
    level: 'IGCSE',
    levelColor: 'bg-emerald-500/20 text-emerald-400',
    duration: '10 weeks',
    desc: 'Edexcel IGCSE English Language Spec A (4EA1) — non-fiction and transactional writing.',
    boards: ['Edexcel'],
  },
  {
    title: 'OCR Language Practice',
    level: 'GCSE',
    levelColor: 'bg-orange-500/20 text-orange-400',
    duration: '8 weeks',
    desc: 'Component 01 & 02 practice — non-fiction synthesis, evaluation, fiction analysis, and creative writing for OCR.',
    boards: ['OCR'],
  },
  {
    title: 'WJEC Eduqas Language',
    level: 'GCSE',
    levelColor: 'bg-red-500/20 text-red-400',
    duration: '8 weeks',
    desc: 'Component 1 & 2 practice — 20th-century fiction, non-fiction reading, and writing tasks for WJEC Eduqas.',
    boards: ['WJEC'],
  },
  {
    title: 'GCSE Revision Blitz',
    level: 'Revision',
    levelColor: 'bg-amber-500/20 text-amber-400',
    duration: '4 weeks',
    desc: 'Intensive exam prep: timed practice, model answers, and grade boosters.',
    boards: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
  },
] as const

export default function CourseGridSection() {
  const selectedBoard = useBoardStore((s) => s.selectedBoard)

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            Featured Courses
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            All courses included with your subscription. First {PRICING.TRIAL_DAYS}-day month free!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {courses.filter((course) => (course.boards as readonly string[]).includes('all') || (selectedBoard && (course.boards as readonly string[]).includes(selectedBoard))).map((course) => (
            <Link key={course.title} href="/courses" className="block group">
            <Card
              className="overflow-hidden border-border/40 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Card header with gradient */}
              <div className="h-28 bg-gradient-to-br from-primary/[0.06] via-card to-background flex items-center justify-center">
                <BookOpen className="w-9 h-9 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
              </div>

              <CardContent className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className={course.levelColor}>
                    {course.level}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {course.desc}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">
                    Included with subscription
                  </span>
                  <span className="text-sm text-primary font-semibold group-hover:underline">
                    View Course &rarr;
                  </span>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
