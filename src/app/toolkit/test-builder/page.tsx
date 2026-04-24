'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  PenTool,
  Loader2,
  CheckCircle,
  XCircle,
  Download,
  Save,
  RotateCcw,
  Sparkles,
} from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel } from '@/lib/grades'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  LS_KEYS,
  lsGet,
  lsSet,
  gradeColour,
  gradeBgColour,
  type GeneratedQuestion,
  type GeneratedTest,
  type SavedMaterial,
  type QuizHistoryEntry,
} from '@/components/toolkit/toolkit-types'

// ─── AI Test Builder ──────────────────────────────────────────────────────
// Student selects topic and question count, then generates a test
// via the API. They take it inline and see their results with GCSE grade.
//
// Note: there is no Foundation/Higher selector — the question bank is the
// same and the student's answers determine the grade band via
// percentageToGCSEGrade.
// ──────────────────────────────────────────────────────────────────────────

type Step = 'configure' | 'loading' | 'test' | 'results'

export default function TestBuilderPage() {
  const { board } = useBoard()
  const texts = getSetTextsForBoard(board)

  // Config state
  const [topic, setTopic] = useState('')
  const [questionCount, setQuestionCount] = useState(10)

  // Test state
  const [step, setStep] = useState<Step>('configure')
  const [test, setTest] = useState<GeneratedTest | null>(null)
  const [answers, setAnswers] = useState<Record<string, string | number>>({})
  const [currentQ, setCurrentQ] = useState(0)
  const [error, setError] = useState('')
  const [score, setScore] = useState<{ correct: number; total: number; percentage: number } | null>(null)

  // Generate test
  const generateTest = useCallback(async () => {
    if (!topic) {
      setError('Please select a topic.')
      return
    }
    setError('')
    setStep('loading')

    try {
      const res = await fetch('/api/toolkit/generate-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          board: board || 'aqa',
          topic,
          questionCount,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to generate test')
      }

      const data: GeneratedTest = await res.json()
      setTest(data)
      setAnswers({})
      setCurrentQ(0)
      setStep('test')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setStep('configure')
    }
  }, [board, topic, questionCount])

  // Submit answers and score
  const submitTest = useCallback(() => {
    if (!test) return
    let correct = 0
    test.questions.forEach((q) => {
      const userAnswer = answers[q.id]
      if (q.type === 'multiple-choice') {
        if (userAnswer === q.correctAnswer) correct++
      } else {
        // Short answer: mark as correct if they wrote anything (self-assessed)
        if (typeof userAnswer === 'string' && userAnswer.trim().length > 0) correct++
      }
    })
    const total = test.questions.length
    const percentage = Math.round((correct / total) * 100)
    setScore({ correct, total, percentage })
    setStep('results')

    // Save to quiz history
    const history = lsGet<QuizHistoryEntry[]>(LS_KEYS.quizHistory, [])
    history.push({
      id: `test-${Date.now()}`,
      topic,
      score: percentage,
      total,
      correct,
      date: new Date().toISOString(),
      board: board || 'aqa',
    })
    lsSet(LS_KEYS.quizHistory, history)

    // Record streak
    const streakDates = lsGet<string[]>(LS_KEYS.streakDates, [])
    streakDates.push(new Date().toISOString())
    lsSet(LS_KEYS.streakDates, streakDates)
  }, [test, answers, topic, board])

  // Save to My Materials
  const saveToMaterials = useCallback(() => {
    if (!test) return
    const materials = lsGet<SavedMaterial[]>(LS_KEYS.myMaterials, [])
    materials.push({
      id: `test-${Date.now()}`,
      title: `${topic} Test`,
      type: 'test',
      topic,
      board: board || 'aqa',
      dateCreated: new Date().toISOString(),
      data: { test, answers, score },
    })
    lsSet(LS_KEYS.myMaterials, materials)
    alert('Test saved to My Materials!')
  }, [test, answers, score, topic, board])

  // Download as PDF (simple print-based)
  const downloadPDF = useCallback(() => {
    window.print()
  }, [])

  // Reset
  const resetTest = () => {
    setStep('configure')
    setTest(null)
    setAnswers({})
    setCurrentQ(0)
    setScore(null)
    setError('')
  }

  const currentQuestion: GeneratedQuestion | undefined = test?.questions[currentQ]

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Toolkit
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
              <PenTool className="h-6 w-6 text-violet-500" />
            </div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                AI Test Builder
              </h1>
              <p className="text-sm text-muted-foreground">
                Generate custom tests and score them with GCSE grade equivalents
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* ── Step: Configure ──────────────────────────────────────── */}
        {step === 'configure' && (
          <div className="space-y-6">
            {error && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Topic selection */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Topic / Text
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="input-field"
              >
                <option value="">Select a topic...</option>
                <optgroup label="Set Texts">
                  {texts.map((t) => (
                    <option key={t.slug} value={t.title}>
                      {t.title} -- {t.author}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="General Topics">
                  <option value="Language Analysis">Language Analysis</option>
                  <option value="Creative Writing">Creative Writing</option>
                  <option value="Literary Techniques">Literary Techniques</option>
                  <option value="Exam Technique">Exam Technique</option>
                </optgroup>
              </select>
            </div>

            {/* Question count */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Number of Questions
              </label>
              <div className="flex gap-3">
                {[10, 20, 30].map((n) => (
                  <button
                    key={n}
                    onClick={() => setQuestionCount(n)}
                    className={`chip ${questionCount === n ? 'chip-active' : 'chip-inactive'}`}
                  >
                    {n} questions
                  </button>
                ))}
              </div>
            </div>

            {/* Generate */}
            <Button
              onClick={generateTest}
              className="w-full sm:w-auto"
              size="lg"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Generate Test
            </Button>
          </div>
        )}

        {/* ── Step: Loading ────────────────────────────────────────── */}
        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Generating your custom test...</p>
          </div>
        )}

        {/* ── Step: Taking the test ───────────────────────────────── */}
        {step === 'test' && test && currentQuestion && (
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${((currentQ + 1) / test.questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-mono text-muted-foreground">
                {currentQ + 1} / {test.questions.length}
              </span>
            </div>

            {/* Question card */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="font-mono text-xs">
                  {currentQuestion.type === 'multiple-choice' ? 'MCQ' : 'Short Answer'}
                </Badge>
                <Badge variant="outline" className="font-mono text-xs">
                  {currentQuestion.topic}
                </Badge>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-medium mb-6">
                {currentQuestion.question}
              </h3>

              {currentQuestion.type === 'multiple-choice' && currentQuestion.options ? (
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setAnswers({ ...answers, [currentQuestion.id]: i })}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 ${
                        answers[currentQuestion.id] === i
                          ? 'border-primary bg-primary/5 text-foreground'
                          : 'border-border hover:border-muted-foreground/40 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span className="font-mono text-xs mr-2 opacity-60">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <textarea
                  value={(answers[currentQuestion.id] as string) || ''}
                  onChange={(e) =>
                    setAnswers({ ...answers, [currentQuestion.id]: e.target.value })
                  }
                  placeholder="Type your answer here..."
                  className="input-field min-h-[120px] resize-y"
                  rows={4}
                />
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-3">
              <Button
                variant="outline"
                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
              >
                Previous
              </Button>
              <div className="flex gap-3">
                {currentQ < test.questions.length - 1 ? (
                  <Button onClick={() => setCurrentQ(currentQ + 1)}>
                    Next
                  </Button>
                ) : (
                  <Button onClick={submitTest}>
                    Submit Test
                  </Button>
                )}
              </div>
            </div>

            {/* Question dots */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {test.questions.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQ(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === currentQ
                      ? 'bg-primary scale-125'
                      : answers[q.id] !== undefined
                        ? 'bg-primary/40'
                        : 'bg-border'
                  }`}
                  aria-label={`Go to question ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Step: Results ────────────────────────────────────────── */}
        {step === 'results' && test && score && (
          <div className="space-y-8 print:space-y-4">
            {/* Score card */}
            <div className={`rounded-xl border p-8 text-center ${gradeBgColour(percentageToGCSEGrade(score.percentage))}`}>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-wide mb-2">
                Your Result
              </p>
              <p className={`font-serif text-5xl sm:text-6xl font-medium mb-2 ${gradeColour(percentageToGCSEGrade(score.percentage))}`}>
                {percentageToGCSEGradeLabel(score.percentage)}
              </p>
              <p className="text-lg text-muted-foreground">
                {score.correct} / {score.total} correct ({score.percentage}%)
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 justify-center print:hidden">
              <Button variant="outline" onClick={downloadPDF}>
                <Download className="h-4 w-4 mr-2" />
                Download as PDF
              </Button>
              <Button variant="outline" onClick={saveToMaterials}>
                <Save className="h-4 w-4 mr-2" />
                Save to My Materials
              </Button>
              <Button onClick={resetTest}>
                <RotateCcw className="h-4 w-4 mr-2" />
                New Test
              </Button>
            </div>

            {/* Review answers */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium">Review Answers</h3>
              {test.questions.map((q, i) => {
                const userAnswer = answers[q.id]
                const isCorrect =
                  q.type === 'multiple-choice'
                    ? userAnswer === q.correctAnswer
                    : typeof userAnswer === 'string' && userAnswer.trim().length > 0

                return (
                  <div
                    key={q.id}
                    className={`rounded-xl border p-5 ${
                      isCorrect
                        ? 'border-emerald-500/20 bg-emerald-500/5'
                        : 'border-red-500/20 bg-red-500/5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-2">
                          <span className="font-mono text-xs text-muted-foreground mr-2">
                            Q{i + 1}.
                          </span>
                          {q.question}
                        </p>
                        {q.type === 'multiple-choice' && q.options && (
                          <p className="text-sm text-muted-foreground mb-1">
                            Your answer:{' '}
                            <span className={isCorrect ? 'text-emerald-600' : 'text-red-600'}>
                              {typeof userAnswer === 'number' ? q.options[userAnswer] : 'Not answered'}
                            </span>
                          </p>
                        )}
                        {!isCorrect && q.type === 'multiple-choice' && q.options && (
                          <p className="text-sm text-emerald-600">
                            Correct answer: {q.options[q.correctAnswer as number]}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground mt-2 italic">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
