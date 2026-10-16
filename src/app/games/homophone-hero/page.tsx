'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, HOMOPHONE_BANK, type HomophoneItem } from '@/data/games/banks/homophone-hero'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/homophone-hero.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/homophone-hero.ts.

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

function renderSentence(sentence: string, filled: string | null): React.ReactNode {
  const parts = sentence.split('___')
  return (
    <>
      {parts[0]}
      <span
        className={cn(
          'mx-1 inline-block min-w-[3.5rem] rounded-md border-b-2 px-2 text-center font-bold',
          filled
            ? 'border-primary text-primary'
            : 'border-dashed border-muted-foreground text-muted-foreground',
        )}
      >
        {filled ?? '?'}
      </span>
      {parts[1]}
    </>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function HomophoneHeroPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<HomophoneItem[]>([])
  const [optionOrder, setOptionOrder] = useState<string[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('homophone-hero')

  const current = items[idx] ?? null

  // Reshuffle option order each time the item changes
  useEffect(() => {
    if (current) setOptionOrder(shuffle(current.options))
  }, [idx, items])

  const handleStart = useCallback(() => {
    const dealt = shuffle(HOMOPHONE_BANK).slice(0, ROUND_SIZE)
    setItems(dealt)
    setIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A click. The question is marked, recorded for the student's account, and
   * then left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next sentence
   * 2.2 seconds after an answer, showing a one-line tip. The founder found the
   * answers too shallow; each now comes with why the right word fits and what
   * the wrong word means
   * (src/data/games/explanations/homophone-hero.ts), and a student cannot read
   * that in 2.2 seconds.
   */
  const handleSelect = useCallback(
    (option: string) => {
      if (!current || feedback) return
      const isCorrect = option === current.answer
      setSelected(option)
      setFeedback(isCorrect ? 'correct' : 'wrong')
      setTotalAnswered((t) => t + 1)
      if (isCorrect) setScore((s) => s + 1)
      round.record({
        question: BANK.key(current),
        correct: isCorrect,
        tag: BANK.tag?.(current),
        chose: isCorrect ? undefined : option,
      })
    },
    [current, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (idx + 1 >= items.length) {
      setGameState('finished')
      return
    }
    setIdx((i) => i + 1)
    setSelected(null)
    setFeedback(null)
  }, [idx, items.length])

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
          gameId="homophone-hero"
          audience="ks3"
          title="Homophone Hero"
          description="Read each sentence and choose the homophone that fits the gap. Watch the tips to become a homophone hero."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || items.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {idx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-lg leading-relaxed text-foreground">
                  {renderSentence(current.sentence, feedback ? selected : null)}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {optionOrder.map((option) => {
                  const isAnswer = option === current.answer
                  const isPicked = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-base font-semibold transition-all outline-none',
                        'focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback &&
                          !isAnswer &&
                          !isPicked &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback, then the explanation, then on when the student is ready */}
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
                        <CheckCircle className="size-4" /> Brilliant. That&apos;s the one.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer was{' '}
                        <span className="font-bold">{current.answer}</span>
                      </>
                    )}
                  </div>
                  <AnswerExplanation
                    game="homophone-hero"
                    question={BANK.key(current)}
                    correct={feedback === 'correct'}
                    chosen={selected}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {idx + 1 >= items.length ? 'See your results' : 'Next question'}
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
