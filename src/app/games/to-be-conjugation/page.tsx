'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, optionSet, type VerbItem } from '@/data/games/banks/to-be-conjugation'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The sentences are in src/data/games/banks/to-be-conjugation.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/to-be-conjugation.ts.

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

// The on-screen options for an item: the question's own, dealt in a new order
// each time. Until 24 October 2026 every sentence offered the same eight forms
// in the same order, and a label above it named the tense the sentence
// needed (present, past, future, short form), which gave the answer away. The
// label is gone; the sentence, or the dialogue above it, decides.
function optionsFor(item: VerbItem): string[] {
  return shuffle([...optionSet(item)])
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ToBeConjugationPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<VerbItem[]>([])
  const [options, setOptions] = useState<string[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('to-be-conjugation')
  const deal = useDealer(BANK)

  const current = items[idx] ?? null

  const handleStart = useCallback(() => {
    const dealt = deal(ROUND_SIZE)
    setItems(dealt)
    setOptions(dealt.length > 0 ? optionsFor(dealt[0]) : [])
    setIdx(0)
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
   * A click. The sentence is marked, recorded for the student's account, and
   * left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next sentence
   * 2.2 seconds after an answer, showing one line of rule. Each answer now
   * comes with an explanation (src/data/games/explanations/to-be-conjugation.ts),
   * and a student cannot read that in 2.2 seconds, so the sentence stays on
   * screen until they choose to go on.
   */
  const handleSelect = useCallback(
    (option: string) => {
      if (!current || feedback) return
      const isCorrect = option.toLowerCase() === current.answer.toLowerCase()
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
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
    const next = idx + 1
    setIdx(next)
    setOptions(optionsFor(items[next]))
    setSelected(null)
    setFeedback(null)
  }, [idx, items])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  const sentenceParts = current ? current.sentence.split('___') : []

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
          gameId="to-be-conjugation"
          audience="eal"
          title="The Verb To Be"
          description="Read each sentence or short dialogue and choose the form of the verb 'to be' that fits the gap."
          difficulty="Foundation"
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

              {/* Sentence card: the lines of dialogue or text before the gap, if
                  any (since 24 October 2026), then the sentence to complete. */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                {current.context && (
                  <div className="mb-3 space-y-1 text-base leading-relaxed text-muted-foreground">
                    {current.context.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
                <p className="text-xl font-medium leading-relaxed text-foreground">
                  {sentenceParts[0]}
                  <span
                    className={cn(
                      'mx-1 inline-block min-w-[3.5rem] rounded-md border-b-2 px-2 py-0.5 font-bold',
                      feedback === 'correct'
                        ? 'border-emerald-500 text-emerald-400'
                        : feedback === 'wrong'
                          ? 'border-red-500 text-red-400'
                          : 'border-primary/60 text-primary',
                    )}
                  >
                    {feedback ? current.answer : '?'}
                  </span>
                  {sentenceParts[1]}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {options.map((option) => {
                  const isAnswer = option.toLowerCase() === current.answer.toLowerCase()
                  const isPicked = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-base font-semibold transition-all',
                        'hover:bg-accent active:translate-y-px disabled:cursor-not-allowed',
                        !feedback && 'border-border text-foreground',
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
                          'border-border text-muted-foreground opacity-50',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation */}
              {feedback && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <div className="flex items-center justify-center gap-2 font-medium">
                      {feedback === 'correct' ? (
                        <>
                          <CheckCircle className="size-4" /> Well done, that&apos;s correct.
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> Not quite. The answer is{' '}
                          <span className="font-bold">{current.answer}</span>.
                        </>
                      )}
                    </div>
                  </div>

                  <AnswerExplanation
                    game="to-be-conjugation"
                    question={BANK.key(current)}
                    correct={feedback === 'correct'}
                    chosen={selected}
                  />

                  <div className="flex justify-center">
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
