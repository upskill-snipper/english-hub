'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, MapPin } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, type Question } from '@/data/games/banks/prepositions-of-place'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/prepositions-of-place.ts (moved there
// on 16 October 2026), and the explanation for each in
// src/data/games/explanations/prepositions-of-place.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ROUND_SIZE = 15

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PrepositionsOfPlacePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('prepositions-of-place')
  const deal = useDealer(BANK)

  const currentQuestion = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = deal(ROUND_SIZE).map((q) => ({
      ...q,
      options: shuffle(q.options) as [string, string, string, string],
    }))
    setQuestions(picked)
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setGameState('playing')
  }, [deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A tap. The question is marked, recorded for the student's account, and then
   * left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next scene 2.2
   * seconds after a tap, showing one line of why. Each answer now comes with
   * where the thing is in this scene and why each other word does not fit
   * (src/data/games/explanations/prepositions-of-place.ts), which cannot be read
   * in 2.2 seconds. There is no clock in this game, so nothing else changes.
   */
  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQuestion || feedback) return
      const isCorrect = option === currentQuestion.answer
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQuestion),
        correct: isCorrect,
        tag: currentQuestion.topic,
        chose: isCorrect ? undefined : option,
      })
    },
    [currentQuestion, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setSelected(null)
    setFeedback(null)
  }, [qIdx, questions.length])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Button variant="ghost" size="sm" render={<Link href="/games" />}>
            <ArrowLeft className="size-4 me-1" />
            Back to Games
          </Button>
          {boardConfig && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <Sparkles className="size-3" /> For {boardConfig.shortName}
            </span>
          )}
        </div>

        <GameShell
          gameId="prepositions-of-place"
          audience="eal"
          title="Where Is It?"
          description="Read each short scene and choose the correct preposition of place or time. There are 15 questions per round."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentQuestion && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Scene card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <MapPin className="size-3.5" /> Choose the best word
                </div>
                <p className="text-xl font-medium leading-relaxed text-foreground">
                  {currentQuestion.scene}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {currentQuestion.options.map((option) => {
                  const isAnswer = option === currentQuestion.answer
                  const isSelected = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!feedback}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-center text-base font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isSelected &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !isAnswer && !isSelected && 'border-border opacity-50',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation, until the student goes on */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      {feedback === 'correct' ? (
                        <>
                          <CheckCircle className="size-4" /> Well done, that&apos;s right.
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> Not quite. The answer is &ldquo;
                          {currentQuestion.answer}&rdquo;.
                        </>
                      )}
                    </div>
                  </div>
                  <AnswerExplanation
                    game="prepositions-of-place"
                    question={BANK.key(currentQuestion)}
                    correct={feedback === 'correct'}
                    chosen={selected}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {qIdx + 1 >= questions.length ? 'See your results' : 'Next question'}
                      <ArrowRight className="size-4 ms-1" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
