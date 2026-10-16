'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, ERROR_BANK, type ErrorItem } from '@/data/games/banks/common-error-fixer'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The questions are in src/data/games/banks/common-error-fixer.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/common-error-fixer.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

const ROUND_SIZE = 15

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function CommonErrorFixerPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<ErrorItem[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [sessionSalt, setSessionSalt] = useState('')
  const round = useGameRound('common-error-fixer')

  const currentItem = items[qIdx] ?? null

  /**
   * The options as the student sees them, plus the correct option's VALUE.
   *
   * WHAT WAS WRONG (fixed 20 September 2026). The SENTENCE pool was shuffled,
   * the OPTIONS were not, and every comparison was `idx === answerIndex`. 23 of
   * the 53 items in this bank answer at index 1, so clicking the second option
   * every time scored 43.4% while reading nothing - the mildest of the three
   * games fixed that day, and still nearly twice chance. The options are now
   * shuffled per attempt and scored by value.
   *
   * The faulty sentence is the seed id: it is unique in the bank and stable, so
   * the same item keeps one order for the whole attempt.
   */
  const view = useMemo(
    () =>
      currentItem
        ? shuffledOptionsFor(
            currentItem.options,
            currentItem.answerIndex,
            currentItem.wrong,
            sessionSalt,
            currentItem.wrong,
          )
        : { options: [] as string[], correctValue: '' },
    [currentItem, sessionSalt],
  )

  const handleStart = useCallback(() => {
    // Minted here rather than during render: newSessionSalt calls Math.random,
    // which would not agree between the server and client paint.
    setSessionSalt(newSessionSalt())
    setItems(shuffle(ERROR_BANK).slice(0, ROUND_SIZE))
    setQIdx(0)
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
   * then left on screen with its explanation until they choose to go on
   * (handleNext).
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next sentence
   * 2.6 seconds after an answer, showing a one-line rule. The founder found the
   * answers too shallow; each now comes with what the mistake was, why the
   * correction is right and why the option chosen is not
   * (src/data/games/explanations/common-error-fixer.ts), and a student cannot
   * read that in 2.6 seconds. Only the error type and whether the answer was
   * right are recorded, not which sentence was chosen: the options are whole
   * sentences, not the short labels a saved result is meant to hold.
   */
  const handleSelect = useCallback(
    (idx: number) => {
      if (!currentItem || feedback) return
      const isCorrect = view.options[idx] === view.correctValue
      setSelected(idx)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentItem),
        correct: isCorrect,
        tag: currentItem.errorType,
      })
    },
    [currentItem, feedback, view, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= items.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setSelected(null)
    setFeedback(null)
  }, [qIdx, items.length])

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
          gameId="common-error-fixer"
          audience="eal"
          title="Fix the Common Mistake"
          description="Each sentence has one typical English mistake. Choose the corrected version. Everyone makes these. Spotting them is how we improve."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || items.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentItem && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Sentence {qIdx + 1} of {items.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border text-clay-600 border-amber-500/30 bg-amber-500/10">
                    {currentItem.errorType}
                  </span>
                </div>
              </div>

              {/* Sentence with the mistake */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  This sentence has one mistake
                </p>
                <p className="text-lg font-medium text-foreground">
                  &ldquo;{currentItem.wrong}&rdquo;
                </p>
                <p className="text-sm text-muted-foreground">Which version is correct?</p>
              </div>

              {/* Options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {view.options.map((option, idx) => {
                  const isAnswer = option === view.correctValue
                  const isPicked = idx === selected
                  const showCorrect = !!feedback && isAnswer
                  const showWrong = feedback === 'wrong' && isPicked && !isAnswer
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-start text-sm font-medium text-foreground transition-all outline-none',
                        'hover:bg-accent focus:ring-2 focus:ring-primary/20',
                        !feedback && 'border-border',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        !!feedback && !showCorrect && !showWrong && 'opacity-50',
                      )}
                    >
                      <span className="inline-flex items-start gap-2">
                        {showCorrect && <CheckCircle className="size-4 mt-0.5 shrink-0" />}
                        {showWrong && <XCircle className="size-4 mt-0.5 shrink-0" />}
                        <span>{option}</span>
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-amber-500/10 text-clay-600',
                    )}
                  >
                    <p className="font-semibold flex items-center gap-2">
                      {feedback === 'correct' ? (
                        <>
                          <CheckCircle className="size-4" /> Well done.
                        </>
                      ) : (
                        <>
                          <Lightbulb className="size-4" /> Good try. Here&rsquo;s the rule:
                        </>
                      )}
                    </p>
                  </div>
                  <AnswerExplanation
                    game="common-error-fixer"
                    question={BANK.key(currentItem)}
                    correct={feedback === 'correct'}
                    chosen={selected === null ? null : view.options[selected]}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {qIdx + 1 >= items.length ? 'See your results' : 'Next question'}
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
