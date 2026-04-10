'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Star,
  AlertCircle,
  Sparkles,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { GradeSystem } from '@/lib/board/grade-boundaries'

/* ── Quiz data ────────────────────────────────────────────────────────── */

interface QuizQuestion {
  question: string
  options: string[]
  /** index of each option maps to grade range: 0 = lowest, 3 = highest */
}

function buildQuizQuestions(paperLiterature: string, paperLanguage: string): QuizQuestion[] {
  return [
    {
      question: `When I write about a text in ${paperLiterature}, I usually...`,
      options: [
        'Retell what happens in the story or poem',
        'Explain what a writer does and why, using some quotes',
        'Analyse language and structure with embedded quotes and terminology',
        'Explore multiple interpretations and link to wider critical ideas',
      ],
    },
    {
      question: 'When I use quotes in essays, I...',
      options: [
        'Copy out long sections of the text',
        'Pick relevant quotes but sometimes forget to explain them',
        'Embed short quotes into my sentences and analyse individual words',
        'Weave single words and phrases into a conceptualised argument',
      ],
    },
    {
      question: `My vocabulary in ${paperLanguage} answers is...`,
      options: [
        'Basic and conversational — I write how I speak',
        'Clear and correct but not very ambitious',
        'Varied with subject terminology like "sibilance" and "pathetic fallacy"',
        'Sophisticated and precise — I choose words to shape my argument',
      ],
    },
    {
      question: 'When I plan an essay, I...',
      options: [
        'Jump straight in and write what comes to mind',
        'Make a rough plan with a few points',
        'Plan with clear paragraphs, each with a focus and quotes',
        'Plan a conceptual arc — my argument develops and shifts across paragraphs',
      ],
    },
    {
      question: 'My understanding of structure in texts is...',
      options: [
        'I am not sure what "structure" means in English',
        'I can spot beginnings, middles, and ends',
        'I analyse shifts in focus, tone, and pace across a text',
        'I explore how structural choices create meaning, tension, and reader positioning',
      ],
    },
  ]
}

function getGradeResult(
  scores: number[],
  gradeSystem: GradeSystem,
): {
  grade: string
  description: string
  colour: string
  recommended: string
  href: string
} {
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length
  const isLetter = gradeSystem === 'A*-G'

  if (avg >= 2.7)
    return {
      grade: isLetter ? 'Grade A / A*' : 'Grade 8-9',
      description:
        'You are working at the top end. Your responses show sophisticated analysis and critical thinking. Focus on consistency and exploring alternative readings.',
      colour: 'text-amber-400',
      recommended: isLetter ? 'How to Get an A*' : 'How to Get a Grade 9',
      href: '/revision/grade-targets/grade-9',
    }
  if (avg >= 1.8)
    return {
      grade: isLetter ? 'Grade B / A' : 'Grade 6-7',
      description:
        'You have strong skills and are analysing well. To push higher, focus on embedding quotes, using precise terminology, and developing conceptualised responses.',
      colour: 'text-emerald-400',
      recommended: isLetter ? 'How to Get an A' : 'How to Get a Grade 7',
      href: '/revision/grade-targets/grade-7',
    }
  if (avg >= 0.8)
    return {
      grade: isLetter ? 'Grade C / D' : 'Grade 4-5',
      description:
        'You understand texts and can explain ideas. To move up, practise embedding quotes, using subject terminology, and explaining the effect on the reader.',
      colour: 'text-cyan-400',
      recommended: isLetter ? 'How to Get a C' : 'How to Get a Grade 5',
      href: '/revision/grade-targets/grade-5',
    }
  return {
    grade: isLetter ? 'Grade D / E' : 'Grade 3-4',
    description:
      'You are building your skills. Focus on moving from retelling to explaining — use quotes and say what the writer is trying to do.',
    colour: 'text-cyan-400',
    recommended: isLetter ? 'How to Get a C' : 'How to Get a Grade 5',
    href: '/revision/grade-targets/grade-5',
  }
}

/* ── Component ────────────────────────────────────────────────────────── */

export function GradeTargetsQuiz({
  paperLiterature,
  paperLanguage,
  gradeSystem,
}: {
  paperLiterature: string
  paperLanguage: string
  gradeSystem: GradeSystem
}) {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const questions = buildQuizQuestions(paperLiterature, paperLanguage)

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setCurrentQ(0)
    setAnswers([])
    setShowResult(false)
  }

  const result = showResult ? getGradeResult(answers, gradeSystem) : null

  return (
    <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
          <Sparkles className="size-4.5 text-primary" />
        </div>
        <h2 className="text-heading-md font-heading text-foreground">What Grade Am I Working At?</h2>
      </div>
      <p className="text-body-sm text-muted-foreground mb-6 max-w-2xl">
        Answer five quick questions about how you currently write and analyse texts for {paperLiterature}. This is not a test — it helps you identify which guide to start with.
      </p>

      {!quizStarted && !showResult && (
        <Button variant="default" size="lg" onClick={() => setQuizStarted(true)}>
          Start Self-Assessment
          <ArrowRight className="size-4" />
        </Button>
      )}

      {quizStarted && !showResult && (
        <div className="max-w-2xl">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-medium text-muted-foreground">
              Question {currentQ + 1} of {questions.length}
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-muted/60">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-heading-md font-heading text-foreground mb-4">
            {questions[currentQ].question}
          </h3>

          <div className="space-y-2.5">
            {questions[currentQ].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full text-left rounded-xl border border-border/60 bg-background/50 p-4 text-sm text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.04] hover:text-foreground"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && result && (
        <div className="max-w-2xl">
          <div className="rounded-xl border border-border/40 bg-background/50 p-6 mb-5">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="secondary" className="text-sm">
                <Star className="size-3 mr-1" />
                Your result
              </Badge>
              <span className={`text-lg font-bold ${result.colour}`}>{result.grade}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {result.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" render={<Link href={result.href} />}>
                {result.recommended}
                <ChevronRight className="size-4" />
              </Button>
              <Button variant="outline" onClick={resetQuiz}>
                Retake quiz
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-2.5 rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-4">
            <AlertCircle className="size-4 shrink-0 text-amber-400 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is a rough self-assessment, not a prediction. Your actual grade depends on exam performance, timing, and how well you apply techniques on the day. Use this as a starting point to focus your revision.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
