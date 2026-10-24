'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, CalendarDays } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, type Question, type Subtype } from '@/data/games/banks/days-months-seasons'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The questions are in src/data/games/banks/days-months-seasons.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/days-months-seasons.ts.

const SUBTYPE_LABEL: Record<Subtype, string> = {
  order: 'Order',
  'next-before': 'Next / Before',
  'month-season': 'Months & Seasons',
  'spelling-choice': 'Spelling',
}

const ROUND_SIZE = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// A round's options in a new order each time. The round itself is dealt by
// useDealer (src/lib/games/start-round.ts), which keeps it balanced across the
// four subtypes (each question's tag) as the round-robin here used to, and
// also deals what this browser has not met and keeps out of one round the
// questions that give each other away (24 October 2026).
function withShuffledOptions(picked: Question[]): Question[] {
  return picked.map((q) => ({ ...q, options: shuffle(q.options) }))
}

// House style: no exclamation marks in what students read (16 October 2026).
const PRAISE = ['Brilliant.', 'Well done.', 'Great work.', 'Spot on.', 'Excellent.']

// ─── Component ─────────────────────────────────────────────────────────────────

export default function DaysMonthsSeasonsPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [praise, setPraise] = useState('')
  const round = useGameRound('days-months-seasons')
  const deal = useDealer(BANK)

  const currentQ = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    setQuestions(withShuffledOptions(deal(ROUND_SIZE)))
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setPraise('')
    setGameState('playing')
  }, [deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A tap on an answer. The question is marked, recorded for the student's
   * account, and then left on screen with its explanation until they choose to
   * go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next question
   * 1.6 seconds after an answer, showing only the right answer. Each answer now
   * comes with why it is right and why the one chosen is not
   * (src/data/games/explanations/days-months-seasons.ts), and a learner cannot
   * read that in 1.6 seconds.
   */
  const handleAnswer = useCallback(
    (choice: string) => {
      if (!currentQ || feedback) return
      const isCorrect = choice === currentQ.answer
      setSelected(choice)
      setTotalAnswered((t) => t + 1)

      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
        setPraise(PRAISE[Math.floor(Math.random() * PRAISE.length)])
      } else {
        setFeedback('wrong')
      }

      round.record({
        question: BANK.key(currentQ),
        correct: isCorrect,
        tag: currentQ.subtype,
        chose: isCorrect ? undefined : choice,
      })
    },
    [currentQ, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setSelected(null)
    setFeedback(null)
    setPraise('')
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
          gameId="days-months-seasons"
          audience="eal"
          title="Days, Months & Seasons"
          description="Learn the days of the week, the months of the year and the four seasons. Choose the correct answer for each question."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentQ && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {questions.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    <CalendarDays className="size-3" />
                    {SUBTYPE_LABEL[currentQ.subtype]}
                  </span>
                </div>
              </div>

              {/* Question card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-lg font-semibold text-foreground">{currentQ.prompt}</p>
                {currentQ.note && <p className="text-xs text-muted-foreground">{currentQ.note}</p>}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {currentQ.options.map((opt) => {
                  const isAnswer = opt === currentQ.answer
                  const isPicked = opt === selected
                  const showState = feedback != null
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={showState}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-base font-medium text-foreground outline-none transition-all',
                        'hover:bg-accent focus:ring-2 focus:ring-primary/20 disabled:cursor-default',
                        !showState && 'border-border',
                        showState &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showState &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        showState && !isAnswer && !isPicked && 'border-border opacity-60',
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      feedback === 'correct'
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> {praise}
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer is:{' '}
                        <span className="font-bold">{currentQ.answer}</span>
                      </>
                    )}
                  </div>
                  <AnswerExplanation
                    game="days-months-seasons"
                    question={BANK.key(currentQ)}
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
