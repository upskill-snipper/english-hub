'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Clock,
  FileText,
  Play,
  ChevronLeft,
  Send,
  CheckCircle2,
  Star,
  TrendingUp,
  AlertCircle,
  Timer,
  Award,
} from 'lucide-react'
import DemoBanner from '@/components/demo/DemoBanner'

// ── Types ──────────────────────────────────────────────────────────────────

interface ExamPaper {
  id: string
  name: string
  duration: string
  subject: string
  questions: number
}

// ── Data ───────────────────────────────────────────────────────────────────

const EXAM_PAPERS: ExamPaper[] = [
  {
    id: 'aqa-lang-1',
    name: 'AQA English Language Paper 1',
    duration: '1h 45min',
    subject: 'Explorations in Creative Reading & Writing',
    questions: 5,
  },
  {
    id: 'aqa-lang-2',
    name: 'AQA English Language Paper 2',
    duration: '1h 45min',
    subject: "Writers' Viewpoints & Perspectives",
    questions: 5,
  },
  {
    id: 'aqa-lit-poetry',
    name: 'AQA Literature Poetry',
    duration: '45min',
    subject: 'Poetry Analysis',
    questions: 3,
  },
  {
    id: 'alevel-unit-1',
    name: 'A-Level Unit 1',
    duration: '2h 30min',
    subject: 'Drama & Poetry',
    questions: 5,
  },
  {
    id: 'ks3-year9',
    name: 'KS3 Year 9 Assessment',
    duration: '1h',
    subject: 'Reading Comprehension',
    questions: 6,
  },
  {
    id: 'creative-writing',
    name: 'Creative Writing Practice',
    duration: '45min',
    subject: 'Narrative & Descriptive Writing',
    questions: 2,
  },
]

const SAMPLE_QUESTION = {
  text: "How does Priestley use the character of Mr Birling to criticise capitalism in \"An Inspector Calls\"?\n\nYou should consider:\n- Birling's speeches and attitudes in Act 1\n- How Priestley uses dramatic irony to undermine Birling's views\n- The significance of Birling's reaction to the Inspector's questioning\n- How the audience in 1945 would have responded to Birling's predictions",
  marks: 8,
  topic: 'An Inspector Calls',
}

const MODEL_ANSWER = {
  grade: '6/8',
  band: 'Band 4 (Good)',
  strengths: [
    "Clear understanding of Priestley's use of dramatic irony",
    'Effective use of quotations to support analysis',
    'Good awareness of the 1945 audience perspective',
  ],
  improvements: [
    "Could explore the symbolism of Birling's name more deeply",
    'Consider linking Birling to wider Edwardian attitudes, not just capitalism',
    "Use more subject terminology (e.g., 'mouthpiece', 'didactic', 'allegory')",
  ],
  modelResponse:
    'Priestley presents Mr Birling as a symbol of capitalist self-interest to criticise the failures of individualism. In Act 1, Birling declares that a man should look after "himself and his own" -- a philosophy Priestley systematically dismantles through the Inspector\'s investigation. The dramatic irony of Birling\'s confident prediction that the Titanic is "unsinkable" would have been painfully obvious to a 1945 audience who had witnessed two world wars, exposing Birling\'s judgement as dangerously flawed. Priestley uses Birling as a dramatic device -- almost a caricature of capitalism -- to show the audience the consequences of ignoring collective responsibility.',
  markScheme: [
    'AO1: Perceptive, detailed response with well-integrated textual references (up to 4 marks)',
    "AO2: Analyses effects of writer's methods using subject terminology (up to 2 marks)",
    'AO3: Shows detailed understanding of context and how it shapes meaning (up to 2 marks)',
  ],
}

// ── Component ──────────────────────────────────────────────────────────────

export default function StudentPracticeDemoPage() {
  const [activePaper, setActivePaper] = useState<string | null>(null)
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)

  // Simple timer effect
  useEffect(() => {
    if (!timerRunning) return
    const interval = setInterval(() => {
      setTimerSeconds((s) => s + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timerRunning])

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  function handleStartPractice(paperId: string) {
    setActivePaper(paperId)
    setAnswer('')
    setSubmitted(false)
    setTimerSeconds(0)
    setTimerRunning(true)
  }

  function handleSubmit() {
    setSubmitted(true)
    setTimerRunning(false)
  }

  function handleBackToGrid() {
    setActivePaper(null)
    setAnswer('')
    setSubmitted(false)
    setTimerSeconds(0)
    setTimerRunning(false)
  }

  // ── Practice question view ────────────────────────────────────────────────

  if (activePaper) {
    const paper = EXAM_PAPERS.find((p) => p.id === activePaper)

    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <DemoBanner message="Practice mode demo -- answers are not saved." />

          {/* Back button & timer */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handleBackToGrid}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to papers
            </button>
            <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted px-4 py-2">
              <Timer className="h-4 w-4 text-clay-600 dark:text-clay-300" />
              <span className="font-mono text-sm text-foreground">{formatTime(timerSeconds)}</span>
            </div>
          </div>

          {/* Paper title */}
          <div className="mt-6 mb-8">
            <h1 className="text-2xl font-light tracking-tight text-foreground">{paper?.name}</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Sample Question -- {SAMPLE_QUESTION.topic}
            </p>
          </div>

          {/* Question */}
          <div className="rounded-xl border border-border/60 bg-card p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-foreground">Question 1</span>
              <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs text-primary">
                {SAMPLE_QUESTION.marks} marks
              </span>
            </div>
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {SAMPLE_QUESTION.text}
            </p>
          </div>

          {/* Answer area */}
          {!submitted ? (
            <div>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Write your answer here..."
                className="w-full h-48 rounded-xl border border-border/60 bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring resize-none text-sm leading-relaxed"
              />
              <div className="flex items-center justify-between mt-4">
                <div className="space-y-1">
                  <p
                    className={`text-xs font-medium ${
                      answer.split(/\s+/).filter(Boolean).length >= 100
                        ? 'text-green-700 dark:text-green-300'
                        : 'text-red-700 dark:text-red-300'
                    }`}
                  >
                    {answer.split(/\s+/).filter(Boolean).length} / 100 words
                  </p>
                  {answer.split(/\s+/).filter(Boolean).length < 100 && (
                    <p className="text-xs text-muted-foreground">
                      Write at least 100 words to submit your response
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={answer.split(/\s+/).filter(Boolean).length < 100}
                  className="flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-amber-500"
                >
                  <Send className="h-4 w-4" />
                  Submit Answer
                </button>
              </div>
            </div>
          ) : (
            /* Feedback view */
            <div className="space-y-6">
              {/* Grade */}
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                    <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                      {MODEL_ANSWER.grade}
                    </h3>
                    <p className="text-sm text-green-700/70 dark:text-green-300/70">
                      {MODEL_ANSWER.band}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Completed in {formatTime(timerSeconds)}</span>
                </div>
              </div>

              {/* AI Feedback */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  AI Feedback
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div>
                    <h4 className="text-xs font-medium text-green-700 dark:text-green-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Strengths
                    </h4>
                    <ul className="space-y-2">
                      {MODEL_ANSWER.strengths.map((s, i) => (
                        <li key={i} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400 mt-0.5">+</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Improvements */}
                  <div>
                    <h4 className="text-xs font-medium text-amber-700 dark:text-amber-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <TrendingUp className="h-3.5 w-3.5" />
                      Areas for Improvement
                    </h4>
                    <ul className="space-y-2">
                      {MODEL_ANSWER.improvements.map((imp, i) => (
                        <li key={i} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-amber-600 dark:text-amber-400 mt-0.5">-</span>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Model Answer */}
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">Model Answer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {MODEL_ANSWER.modelResponse}
                </p>
              </div>

              {/* Mark Scheme */}
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">Mark Scheme Criteria</h3>
                <ul className="space-y-2">
                  {MODEL_ANSWER.markScheme.map((criterion, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 text-center">
                <p className="text-sm text-amber-700/80 dark:text-amber-300/80 mb-3">
                  Get AI-powered feedback on every answer with a full account.
                </p>
                <Link
                  href="/for-schools/register"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-400 transition-colors"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Grid view ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <DemoBanner message="Practice mode demo -- answers are not saved." />

        {/* Header */}
        <div className="mt-6 mb-8">
          <h1 className="text-3xl font-light tracking-tight text-foreground">
            Practice & Revision
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Mock exam papers with AI-powered marking and feedback
          </p>
        </div>

        {/* Exam Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXAM_PAPERS.map((paper) => (
            <div
              key={paper.id}
              className="rounded-xl border border-border/60 bg-card p-5 hover:border-border hover:bg-secondary transition-all group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-foreground mb-1 leading-snug">
                {paper.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">{paper.subject}</p>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {paper.duration}
                </span>
                <span className="flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                  <FileText className="h-3 w-3" />
                  {paper.questions} questions
                </span>
              </div>

              {/* Start button */}
              <button
                onClick={() => handleStartPractice(paper.id)}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-muted px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all group-hover:border-amber-500/20 group-hover:text-amber-700 dark:group-hover:text-amber-300"
              >
                <Play className="h-3.5 w-3.5" />
                Start Practice
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
