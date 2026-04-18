'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import {
  Lightbulb,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Target,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { WeakArea } from '@/lib/types'
import { percentageToGCSEGradeLabel } from '@/lib/grades'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// ── Types ────────────────────────────────────────────────────────────────────

export interface ClassAnalyticsInput {
  weak_areas: WeakArea[]
  avg_score: number
  completion_rate: number
  class_name?: string
  year_group?: string
  exam_board?: string
}

export interface RecommendedLesson {
  id: string
  title: string
  topic: string
  skill: string
  duration: number
  difficulty: 'Foundation' | 'Intermediate' | 'Higher'
  reason: string
  matchScore: number
}

interface LessonRecommendationsProps {
  analytics: ClassAnalyticsInput
  className?: string
}

// ── Lesson catalogue (static for now) ────────────────────────────────────────

const LESSON_CATALOGUE: RecommendedLesson[] = [
  {
    id: 'poetry-comparison',
    title: 'Comparing Poems: Structure & Language',
    topic: 'Poetry',
    skill: 'Comparison',
    duration: 60,
    difficulty: 'Intermediate',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'unseen-poetry',
    title: 'Unseen Poetry: First Response Technique',
    topic: 'Poetry',
    skill: 'Analysis',
    duration: 50,
    difficulty: 'Intermediate',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'macbeth-ambition',
    title: 'Macbeth: The Theme of Ambition',
    topic: 'Shakespeare',
    skill: 'Thematic Analysis',
    duration: 60,
    difficulty: 'Intermediate',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'macbeth-extract',
    title: 'Macbeth: Extract Response Under Timed Conditions',
    topic: 'Shakespeare',
    skill: 'Exam Technique',
    duration: 55,
    difficulty: 'Higher',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'inspector-calls-responsibility',
    title: 'An Inspector Calls: Responsibility & Society',
    topic: 'Modern Text',
    skill: 'Thematic Analysis',
    duration: 60,
    difficulty: 'Intermediate',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'language-paper1-q2',
    title: 'Language Paper 1 Q2: Language Analysis',
    topic: 'Language',
    skill: 'Language Analysis',
    duration: 45,
    difficulty: 'Foundation',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'language-paper1-q5',
    title: 'Language Paper 1 Q5: Descriptive Writing',
    topic: 'Language',
    skill: 'Creative Writing',
    duration: 60,
    difficulty: 'Intermediate',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'language-paper2-q5',
    title: 'Language Paper 2 Q5: Persuasive Writing',
    topic: 'Language',
    skill: 'Argumentative Writing',
    duration: 60,
    difficulty: 'Intermediate',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'pee-paragraphs',
    title: 'Building PEE Paragraphs: Point, Evidence, Explain',
    topic: 'Skills',
    skill: 'Essay Structure',
    duration: 45,
    difficulty: 'Foundation',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'quotation-embedding',
    title: 'Embedding Quotations Fluently',
    topic: 'Skills',
    skill: 'Quotation Use',
    duration: 40,
    difficulty: 'Foundation',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'context-integration',
    title: 'Integrating Context Without "Bolting On"',
    topic: 'Skills',
    skill: 'Contextual Knowledge',
    duration: 50,
    difficulty: 'Higher',
    reason: '',
    matchScore: 0,
  },
  {
    id: 'power-conflict-anthology',
    title: 'Power & Conflict Poetry: Anthology Overview',
    topic: 'Poetry',
    skill: 'Anthology Knowledge',
    duration: 60,
    difficulty: 'Intermediate',
    reason: '',
    matchScore: 0,
  },
]

// ── Matching logic ───────────────────────────────────────────────────────────

const KEYWORD_MAP: Record<string, string[]> = {
  'poetry-comparison': ['poetry', 'comparison', 'compare', 'poem', 'anthology'],
  'unseen-poetry': ['poetry', 'unseen', 'poem', 'analysis'],
  'macbeth-ambition': ['macbeth', 'shakespeare', 'ambition', 'theme', 'drama'],
  'macbeth-extract': ['macbeth', 'shakespeare', 'extract', 'exam', 'timed'],
  'inspector-calls-responsibility': ['inspector', 'calls', 'priestley', 'responsibility', 'modern', 'text', 'drama'],
  'language-paper1-q2': ['language', 'paper 1', 'analysis', 'q2', 'technique'],
  'language-paper1-q5': ['language', 'paper 1', 'creative', 'descriptive', 'writing', 'q5'],
  'language-paper2-q5': ['language', 'paper 2', 'persuasive', 'argument', 'writing', 'q5'],
  'pee-paragraphs': ['paragraph', 'structure', 'pee', 'point', 'evidence', 'essay'],
  'quotation-embedding': ['quotation', 'quote', 'embed', 'evidence'],
  'context-integration': ['context', 'ao3', 'historical', 'social'],
  'power-conflict-anthology': ['poetry', 'power', 'conflict', 'anthology'],
}

function matchLessonsToWeakAreas(weakAreas: WeakArea[]): RecommendedLesson[] {
  if (weakAreas.length === 0) return []

  const scored: RecommendedLesson[] = LESSON_CATALOGUE.map((lesson) => {
    let score = 0
    let bestReason = ''
    const keywords = KEYWORD_MAP[lesson.id] ?? []

    for (const area of weakAreas) {
      const areaText = `${area.course_name} ${area.module_name ?? ''}`.toLowerCase()
      let areaScore = 0

      for (const kw of keywords) {
        if (areaText.includes(kw)) {
          areaScore += 10
        }
      }

      // Boost by severity
      if (areaScore > 0) {
        if (area.severity === 'critical') areaScore *= 2.0
        else if (area.severity === 'warning') areaScore *= 1.5

        // Boost by how many students are below threshold
        areaScore += Math.min(area.students_below_threshold * 2, 20)

        if (areaScore > score) {
          score = areaScore
          const pct = Math.round((area.students_below_threshold / Math.max(area.students_below_threshold + 5, 1)) * 100)
          bestReason = `${area.students_below_threshold} students scored below target on ${area.module_name ?? area.course_name} (avg ${percentageToGCSEGradeLabel(Math.round(area.avg_score))})`
        }
      }
    }

    return { ...lesson, matchScore: score, reason: bestReason }
  })

  return scored
    .filter((l) => l.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5)
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function difficultyColor(d: string): string {
  switch (d) {
    case 'Foundation':
      return 'bg-green-500/10 text-green-400 border-green-500/20'
    case 'Higher':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    default:
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  }
}

// ── Component ────────────────────────────────────────────────────────────────

export function LessonRecommendations({ analytics, className }: LessonRecommendationsProps) {
  const recommendations = useMemo(
    () => matchLessonsToWeakAreas(analytics.weak_areas),
    [analytics.weak_areas],
  )

  if (recommendations.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Sparkles className="h-4 w-4 text-clay-600" />
            Suggested Lesson Plans
          </CardTitle>
          <CardDescription>
            AI-driven lesson recommendations based on class analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
              <Lightbulb className="h-7 w-7 text-green-400" />
            </div>
            <h3 className="mb-1 font-semibold text-foreground">No specific gaps detected</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              The class analytics don&apos;t currently highlight any critical weak areas. Browse all
              lesson plans for general teaching resources.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              render={<Link href="/school/lessons" />}
            >
              Browse All Lessons
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="h-4 w-4 text-clay-600" />
              Suggested Lesson Plans
            </CardTitle>
            <CardDescription>
              Targeting identified gaps in class performance
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            render={<Link href="/school/lessons" />}
          >
            View All
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((lesson, i) => (
            <div key={lesson.id}>
              <Link href={`/school/lessons/${lesson.id}`}>
                <div className="group rounded-lg border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                      <BookOpen className="h-4 w-4 text-clay-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {lesson.title}
                        </h4>
                        <Badge
                          variant="outline"
                          className="shrink-0 text-[10px] bg-amber-500/10 text-clay-600 border-amber-500/20"
                        >
                          Suggested
                        </Badge>
                      </div>

                      <p className="mt-1 text-xs text-muted-foreground">
                        <Target className="inline h-3 w-3 mr-1 -mt-0.5" />
                        {lesson.reason}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="text-[10px]">
                          {lesson.topic}
                        </Badge>
                        <Badge variant="outline" className={cn('text-[10px]', difficultyColor(lesson.difficulty))}>
                          {lesson.difficulty}
                        </Badge>
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {lesson.duration} min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {i < recommendations.length - 1 && <div className="h-1" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
