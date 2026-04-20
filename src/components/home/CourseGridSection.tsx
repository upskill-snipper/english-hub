'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PRICING } from '@/constants/pricing'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { BookOpen, Clock } from 'lucide-react'

type CourseBoard =
  | 'all'
  | 'KS3'
  | 'AQA'
  | 'Edexcel'
  | 'OCR'
  | 'WJEC'
  | 'Edexcel IGCSE'
  | 'Cambridge First Language'
  | 'Cambridge First Language (9-1)'

type Course = {
  title: string
  level: string
  levelColor: string
  duration: string
  desc: string
  boards: readonly CourseBoard[]
}

const courses: readonly Course[] = [
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
    desc: 'Creative and real-world writing foundations for Years 7-9.',
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
    desc: 'Writers\u2019 viewpoints and perspectives — non-fiction reading and writing for real purposes for AQA.',
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
    desc: 'Master 19th-century non-fiction analysis and writing for real purposes for Edexcel 1EN2.',
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
    title: 'Edexcel IGCSE Language A',
    level: 'IGCSE',
    levelColor: 'bg-emerald-500/20 text-emerald-400',
    duration: '10 weeks',
    desc: 'Edexcel IGCSE English Language Spec A (4EA1) — non-fiction and writing for real purposes.',
    boards: ['Edexcel IGCSE'],
  },
  {
    title: 'Edexcel IGCSE Literature',
    level: 'IGCSE',
    levelColor: 'bg-purple-500/20 text-purple-400',
    duration: '10 weeks',
    desc: 'Anthology, unseen poetry and prose for Edexcel IGCSE English Literature.',
    boards: ['Edexcel IGCSE'],
  },
  {
    title: 'Cambridge First Language English',
    level: 'IGCSE',
    levelColor: 'bg-sky-500/20 text-sky-400',
    duration: '10 weeks',
    desc: 'Reading, directed writing and composition for Cambridge IGCSE First Language English.',
    boards: ['Cambridge First Language'],
  },
  {
    title: 'Cambridge First Language English (9-1)',
    level: 'IGCSE',
    levelColor: 'bg-sky-500/20 text-sky-400',
    duration: '10 weeks',
    desc: 'Reading, directed writing and composition for Cambridge IGCSE First Language English (9-1 grading).',
    boards: ['Cambridge First Language (9-1)'],
  },
  {
    title: 'OCR Language Practice',
    level: 'GCSE',
    levelColor: 'bg-orange-500/20 text-clay-600',
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
    levelColor: 'bg-amber-500/20 text-clay-600',
    duration: '4 weeks',
    desc: 'Intensive exam prep: timed practice, model answers, and grade boosters.',
    boards: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
  },
]

const BOARD_TO_LABEL: Record<ExamBoard, CourseBoard> = {
  ks3: 'KS3',
  aqa: 'AQA',
  edexcel: 'Edexcel',
  ocr: 'OCR',
  eduqas: 'WJEC',
  'edexcel-igcse': 'Edexcel IGCSE',
  'edexcel-igcse-lang': 'Edexcel IGCSE',
  'cambridge-0500': 'Cambridge First Language',
  'cambridge-0990': 'Cambridge First Language (9-1)',
  'cambridge-0475': 'Cambridge First Language',
  'ial-edexcel': 'Edexcel',
  // A-Level scaffolds — no bespoke A-Level courses yet; fall back to board labels
  'aqa-a-level': 'AQA',
  'edexcel-a-level': 'Edexcel',
  'ocr-a-level': 'OCR',
  'eduqas-a-level': 'WJEC',
}

function filterCourses(all: readonly Course[], board: ExamBoard | null): readonly Course[] {
  if (!board) return all
  const label = BOARD_TO_LABEL[board]
  return all.filter((c) => c.boards.includes('all') || c.boards.includes(label))
}

export default function CourseGridSection({ board }: { board?: ExamBoard | null }) {
  const config = board ? getBoardConfig(board) : null
  const filtered = filterCourses(courses, board ?? null)

  const heading = config ? `${config.shortName} Courses` : 'Featured Courses'
  const sub = config
    ? `Every course below is mapped to ${config.fullName}. All courses included with your subscription. First ${PRICING.TRIAL_DAYS}-day month free!`
    : `All courses included with your subscription. First ${PRICING.TRIAL_DAYS}-day month free!`

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">{heading}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">{sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((course) => (
            <Link key={course.title} href="/courses" className="block group">
              <Card className="overflow-hidden border-border/40 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
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

        {config && filtered.length > 0 && (
          <div className="text-center mt-10">
            <Button
              variant="link"
              className="text-primary font-semibold"
              render={<Link href="/courses" />}
            >
              Browse all {config.shortName} courses &rarr;
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
