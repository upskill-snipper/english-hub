'use client'

import { useState, useCallback, useMemo } from 'react'
import { Trophy, RotateCcw, ChevronRight, CheckCircle, XCircle, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn, shuffleArray } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import type { FlashcardDeck, FlashCard } from '@/data/flashcard-data'

// ─── Types ──────────────────────────────────────────────────────────────────

interface Question {
  card: FlashCard
  options: string[]
  correctIndex: number
}

interface AnswerRecord {
  question: Question
  chosenIndex: number | null
  isCorrect: boolean
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function generateQuestions(deck: FlashcardDeck): Question[] {
  const shuffledCards = shuffleArray(deck.cards)
  return shuffledCards.map((card) => {
    // Get 3 random wrong answers from the same deck
    const otherBacks = deck.cards.filter((c) => c.id !== card.id).map((c) => c.back)
    const wrongAnswers = shuffleArray(otherBacks).slice(0, 3)

    // If deck has fewer than 4 cards, pad with what we have
    while (wrongAnswers.length < 3 && otherBacks.length > wrongAnswers.length) {
      wrongAnswers.push(otherBacks[wrongAnswers.length])
    }

    // Create options with correct answer at random position
    const allOptions = [...wrongAnswers, card.back]
    const shuffledOptions = shuffleArray(allOptions)
    const correctIndex = shuffledOptions.indexOf(card.back)

    return {
      card,
      options: shuffledOptions,
      correctIndex,
    }
  })
}

function truncateOption(text: string, maxLen = 120): string {
  if (text.length <= maxLen) return text
  return text.slice(0, maxLen) + '...'
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function TestMode({ deck }: { deck: FlashcardDeck }) {
  const t = useT()
  const [questions, setQuestions] = useState<Question[]>(() => generateQuestions(deck))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [showingReview, setShowingReview] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)

  const currentQuestion = questions[currentIndex]

  // ── Answer a question ───────────────────────────────────────────────────

  const handleOptionClick = useCallback(
    (optionIndex: number) => {
      if (hasAnswered) return
      setSelectedOption(optionIndex)
      setHasAnswered(true)

      const isCorrect = optionIndex === currentQuestion.correctIndex
      setAnswers((prev) => [
        ...prev,
        { question: currentQuestion, chosenIndex: optionIndex, isCorrect },
      ])
    },
    [hasAnswered, currentQuestion],
  )

  // ── Next question ─────────────────────────────────────────────────────

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedOption(null)
      setHasAnswered(false)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, questions.length])

  // ── Restart ─────────────────────────────────────────────────────────────

  const restart = useCallback(() => {
    setQuestions(generateQuestions(deck))
    setCurrentIndex(0)
    setSelectedOption(null)
    setHasAnswered(false)
    setAnswers([])
    setIsComplete(false)
    setShowingReview(false)
    setReviewIndex(0)
  }, [deck])

  // ── Stats ─────────────────────────────────────────────────────────────

  const correctCount = answers.filter((a) => a.isCorrect).length
  const mistakes = useMemo(() => answers.filter((a) => !a.isCorrect), [answers])

  // ── Review mistakes view ──────────────────────────────────────────────

  if (showingReview && mistakes.length > 0) {
    const mistake = mistakes[reviewIndex]
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => setShowingReview(false)}>
            {t('test.back_to_results')}
          </Button>
          <span className="text-sm text-muted-foreground">
            {t('test.mistake_label')} {reviewIndex + 1} {t('test.of')} {mistakes.length}
          </span>
        </div>

        <Card className="mx-auto max-w-2xl">
          <CardContent className="p-6 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t('test.question_label')}
              </p>
              <h3 className="mt-1 text-xl font-bold text-foreground">
                {mistake.question.card.front}
              </h3>
            </div>

            <div className="space-y-2">
              {mistake.question.options.map((opt, i) => {
                const isCorrect = i === mistake.question.correctIndex
                const isChosen = i === mistake.chosenIndex
                return (
                  <div
                    key={i}
                    className={cn(
                      'rounded-lg border p-3 text-sm',
                      isCorrect && 'border-primary bg-primary/10 text-primary',
                      isChosen &&
                        !isCorrect &&
                        'border-destructive bg-destructive/10 text-destructive line-through',
                      !isCorrect && !isChosen && 'border-border text-muted-foreground opacity-50',
                    )}
                  >
                    <div className="flex items-start gap-2">
                      {isCorrect && <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />}
                      {isChosen && !isCorrect && <XCircle className="mt-0.5 h-4 w-4 shrink-0" />}
                      <span className="whitespace-pre-line">{truncateOption(opt)}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setReviewIndex((i) => Math.max(0, i - 1))}
            disabled={reviewIndex === 0}
          >
            {t('test.previous')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setReviewIndex((i) => Math.min(mistakes.length - 1, i + 1))}
            disabled={reviewIndex >= mistakes.length - 1}
          >
            {t('test.next')}
          </Button>
        </div>
      </div>
    )
  }

  // ── Completion screen ───────────────────────────────────────────────────

  if (isComplete) {
    const percentage = Math.round((correctCount / questions.length) * 100)
    return (
      <Card className="mx-auto max-w-lg">
        <CardContent className="p-8 text-center">
          <Trophy className="mx-auto mb-4 h-12 w-12 text-amber-500" />
          <h2 className="text-2xl font-bold text-foreground">{t('test.complete_title')}</h2>
          <p className="mt-2 text-muted-foreground">{deck.title}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <p className="text-2xl font-bold text-primary">{correctCount}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t('test.correct')}</p>
            </div>
            <div className="rounded-lg bg-amber-500/10 p-4">
              <p className="text-2xl font-bold text-amber-500">{mistakes.length}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t('test.incorrect')}</p>
            </div>
          </div>

          {/* Score bar */}
          <div className="mt-6">
            <div className="h-3 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {percentage}% {t('test.percent_correct')}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {mistakes.length > 0 && (
              <Button
                variant="secondary"
                onClick={() => {
                  setShowingReview(true)
                  setReviewIndex(0)
                }}
              >
                <Eye className="h-4 w-4" />
                {t('test.review_mistakes')}
              </Button>
            )}
            <Button onClick={restart}>
              <RotateCcw className="h-4 w-4" />
              {t('test.retake')}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // ── Question UI ─────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div>
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {t('test.question_label')} {currentIndex + 1} {t('test.of')} {questions.length}
          </span>
          <span>
            {correctCount} {t('test.correct_so_far')}
          </span>
        </div>
        <Progress value={((currentIndex + 1) / questions.length) * 100} />
      </div>

      {/* Question card */}
      <Card className="mx-auto max-w-2xl">
        <CardContent className="p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            {t('test.what_is')}
          </p>
          <h3 className="text-2xl font-bold text-foreground">{currentQuestion.card.front}</h3>
        </CardContent>
      </Card>

      {/* Options */}
      <div className="mx-auto max-w-2xl space-y-3">
        {currentQuestion.options.map((option, i) => {
          const isCorrect = i === currentQuestion.correctIndex
          const isSelected = i === selectedOption
          const letter = String.fromCharCode(65 + i) // A, B, C, D

          return (
            <button
              key={i}
              onClick={() => handleOptionClick(i)}
              disabled={hasAnswered}
              className={cn(
                'w-full rounded-lg border p-4 text-left text-sm transition-all duration-200',
                // Default state
                !hasAnswered &&
                  'border-border bg-card hover:border-primary/50 hover:bg-primary/5 cursor-pointer',
                // After answering
                hasAnswered && isCorrect && 'border-primary bg-primary/10',
                hasAnswered && isSelected && !isCorrect && 'border-destructive bg-destructive/10',
                hasAnswered && !isCorrect && !isSelected && 'border-border opacity-50',
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors',
                    !hasAnswered && 'border-border text-muted-foreground',
                    hasAnswered && isCorrect && 'border-primary bg-primary text-primary-foreground',
                    hasAnswered &&
                      isSelected &&
                      !isCorrect &&
                      'border-destructive bg-destructive text-destructive-foreground',
                    hasAnswered &&
                      !isCorrect &&
                      !isSelected &&
                      'border-border text-muted-foreground opacity-50',
                  )}
                >
                  {hasAnswered && isCorrect ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : hasAnswered && isSelected && !isCorrect ? (
                    <XCircle className="h-4 w-4" />
                  ) : (
                    letter
                  )}
                </span>
                <span className="whitespace-pre-line pt-0.5">{truncateOption(option)}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Next button (only after answering) */}
      {hasAnswered && (
        <div className="flex justify-center">
          <Button onClick={handleNext} size="lg">
            {currentIndex < questions.length - 1 ? (
              <>
                {t('test.next_question')}
                <ChevronRight className="h-4 w-4" />
              </>
            ) : (
              t('test.view_results')
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
