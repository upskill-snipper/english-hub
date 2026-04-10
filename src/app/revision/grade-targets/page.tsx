'use client'

import { useState } from 'react'
import {
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Target,
  BarChart3,
  Star,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/* ── Quiz data ────────────────────────────────────────────────────────── */

interface QuizQuestion {
  question: string
  options: string[]
  /** index of each option maps to grade range: 0 = Grade 3-4, 1 = Grade 5-6, 2 = Grade 7-8, 3 = Grade 9 */
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'When I write about a text, I usually...',
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
    question: 'My vocabulary in essays is...',
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

function getGradeResult(scores: number[]): {
  grade: string
  description: string
  colour: string
  recommended: string
  href: string
} {
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length
  if (avg >= 2.7)
    return {
      grade: 'Grade 8-9',
      description:
        'You are working at the top end. Your responses show sophisticated analysis and critical thinking. Focus on consistency and exploring alternative readings.',
      colour: 'text-amber-400',
      recommended: 'How to Get a Grade 9',
      href: '/revision/grade-targets/grade-9',
    }
  if (avg >= 1.8)
    return {
      grade: 'Grade 6-7',
      description:
        'You have strong skills and are analysing well. To push higher, focus on embedding quotes, using precise terminology, and developing conceptualised responses.',
      colour: 'text-emerald-400',
      recommended: 'How to Get a Grade 7',
      href: '/revision/grade-targets/grade-7',
    }
  if (avg >= 0.8)
    return {
      grade: 'Grade 4-5',
      description:
        'You understand texts and can explain ideas. To move up, practise embedding quotes, using subject terminology, and explaining the effect on the reader.',
      colour: 'text-cyan-400',
      recommended: 'How to Get a Grade 5',
      href: '/revision/grade-targets/grade-5',
    }
  return {
    grade: 'Grade 3-4',
    description:
      'You are building your skills. Focus on moving from retelling to explaining — use quotes and say what the writer is trying to do.',
    colour: 'text-cyan-400',
    recommended: 'How to Get a Grade 5',
    href: '/revision/grade-targets/grade-5',
  }
}

/* ── Grade card data ──────────────────────────────────────────────────── */

const GRADE_CARDS = [
  {
    grade: '5',
    title: 'How to Get a Grade 5',
    subtitle: 'The "strong pass" — what you need to secure it',
    href: '/revision/grade-targets/grade-5',
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-500/30',
    skills: ['Clear explanations with evidence', 'Relevant use of subject terminology', 'Understanding of writer\'s methods'],
  },
  {
    grade: '7',
    title: 'How to Get a Grade 7',
    subtitle: 'Moving into the top band — what separates good from great',
    href: '/revision/grade-targets/grade-7',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    skills: ['Thoughtful, developed analysis', 'Judicious use of quotes', 'Understanding of how meanings are shaped'],
  },
  {
    grade: '9',
    title: 'How to Get a Grade 9',
    subtitle: 'The very top — what examiners look for in exceptional work',
    href: '/revision/grade-targets/grade-9',
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-500/30',
    skills: ['Conceptualised, critical responses', 'Alternative interpretations', 'Sophisticated, assured expression'],
  },
]

/* ── Component ────────────────────────────────────────────────────────── */

export default function GradeTargetsPage() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)
    if (currentQ + 1 < QUIZ_QUESTIONS.length) {
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

  const result = showResult ? getGradeResult(answers) : null

  return (
    <div className="space-y-10 pb-16">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Revision Hub
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <TrendingUp className="size-5 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Grade Targets</h1>
            <p className="text-body-sm text-muted-foreground">
              Understand your grade, set your target, and know exactly how to get there
            </p>
          </div>
        </div>
      </div>

      {/* ── Understanding Grades ──────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <BarChart3 className="size-4.5 text-violet-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Understanding Your Grades</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-6 max-w-3xl">
          In GCSE English, you will see three different grades on your reports. Understanding what each one means helps you set realistic targets and focus your revision.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="size-4 text-blue-400" />
              <h3 className="text-sm font-semibold text-foreground">Working At Grade</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is the grade your current work is at right now. It is based on your classwork, homework, and assessments so far. Think of it as a snapshot of where you are today. This grade can change with effort and targeted practice.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Target className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">Predicted Grade</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is the grade your teacher thinks you will get in the actual exam, based on your trajectory. It factors in your current level plus how much progress is expected. If your predicted grade is lower than your target, it means you need to change something.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Star className="size-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-foreground">Target Grade</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is the grade your school expects you to achieve, usually based on your KS2 SATs results or baseline tests. It is the minimum you should be aiming for. Many students exceed their target grade with consistent revision and exam practice.
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
          <Lightbulb className="size-4 shrink-0 text-primary mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Key insight: </span>
            Your working at grade is not fixed. Students regularly jump one or two grades between mocks and the real exam. The difference is almost always revision quality and exam technique, not natural ability.
          </p>
        </div>
      </section>

      {/* ── Grade Specific Pages ──────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Grade-Specific Guides</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Each guide tells you exactly what examiners want at that grade, what skills to practise, and how to level up from where you are now.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {GRADE_CARDS.map((card) => (
            <Link
              key={card.grade}
              href={card.href}
              className={`group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover ${card.borderHover}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`flex size-10 items-center justify-center rounded-xl ${card.bgColour}`}>
                  <span className={`text-lg font-bold ${card.colour}`}>{card.grade}</span>
                </div>
                <div>
                  <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-caption text-muted-foreground">{card.subtitle}</p>
                </div>
              </div>

              <ul className="flex-1 space-y-2 mb-4">
                {card.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className={`size-3.5 shrink-0 mt-0.5 ${card.colour}`} />
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read the guide
                <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Self-Assessment Quiz ──────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="size-4.5 text-primary" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What Grade Am I Working At?</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-6 max-w-2xl">
          Answer five quick questions about how you currently write and analyse texts. This is not a test — it helps you identify which guide to start with.
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
                Question {currentQ + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-muted/60">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentQ + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-heading-md font-heading text-foreground mb-4">
              {QUIZ_QUESTIONS[currentQ].question}
            </h3>

            <div className="space-y-2.5">
              {QUIZ_QUESTIONS[currentQ].options.map((option, i) => (
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
    </div>
  )
}
