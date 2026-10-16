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
import {
  BANK,
  VERB_BANK,
  optionSet,
  type Tense,
  type VerbItem,
} from '@/data/games/banks/to-be-conjugation'

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

const TENSE_STYLES: Record<Tense, string> = {
  present: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  past: 'text-clay-600 border-amber-500/30 bg-amber-500/10',
  future: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  'short form': 'text-purple-400 border-purple-500/30 bg-purple-500/10',
}

// Build the on-screen options for an item: the bank's set, which for a short
// form is the standard list plus the answer (so contractions are always
// selectable), dealt in a new order each time.
function optionsFor(item: VerbItem): string[] {
  const set = optionSet(item)
  return item.tense === 'short form' ? shuffle(set) : set
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

  const current = items[idx] ?? null

  const handleStart = useCallback(() => {
    const dealt = shuffle(VERB_BANK).slice(0, ROUND_SIZE)
    setItems(dealt)
    setOptions(dealt.length > 0 ? optionsFor(dealt[0]) : [])
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
          description="Read each sentence and choose the correct form of the verb 'to be': am, is, are, was, were, will be, been or being."
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
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border capitalize',
                      TENSE_STYLES[current.tense],
                    )}
                  >
                    {current.tense}
                  </span>
                </div>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
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
