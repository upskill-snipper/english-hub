'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, FlaskConical } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer, type RoundOptions } from '@/lib/games/start-round'
import { BANK, type LabSeed } from '@/data/games/banks/prefix-suffix-lab'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/prefix-suffix-lab.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/prefix-suffix-lab.ts. A question stores only what
// is fixed; its options are generated below, so the answer position is always
// randomised.

/** A question as it is dealt: the fixed seed, plus the four affixes offered. */
interface LabItem extends LabSeed {
  /** Four affix choices */
  options: string[]
}

const PREFIX_OPTIONS = ['un-', 'dis-', 'mis-', 're-', 'pre-', 'anti-', 'sub-', 'inter-']
const SUFFIX_OPTIONS = ['-ful', '-less', '-ness', '-tion', '-able', '-ly', '-ment', '-ous']

// Pick 3 distractors + the answer, shuffled, from the relevant affix pool.
function buildOptions(pool: string[], answer: string): string[] {
  const distractors = shuffle(pool.filter((o) => o !== answer)).slice(0, 3)
  return shuffle([answer, ...distractors])
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

/**
 * Roughly half prefix, half suffix, as the page has always dealt, now by
 * useDealer (src/lib/games/start-round.ts): what this browser has not met
 * first, and never one root twice in a round (the bank's facts: "happy" was
 * asked as unhappy, happiness and happily in one round). 24 October 2026.
 */
function buildRound(deal: (size: number, o?: RoundOptions<LabSeed>) => LabSeed[]): LabItem[] {
  const half = Math.ceil(ROUND_SIZE / 2)
  return deal(ROUND_SIZE, {
    quota: { of: (s) => s.mode, counts: { prefix: half, suffix: ROUND_SIZE - half } },
  }).map((s) => ({
    mode: s.mode,
    root: s.root,
    target: s.target,
    options: buildOptions(s.mode === 'prefix' ? PREFIX_OPTIONS : SUFFIX_OPTIONS, s.answer),
    answer: s.answer,
    resultingWord: s.resultingWord,
    meaningNote: s.meaningNote,
  }))
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PrefixSuffixLabPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<LabItem[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('prefix-suffix-lab')
  const deal = useDealer(BANK)

  const current = items[idx] ?? null

  const handleStart = useCallback(() => {
    setItems(buildRound(deal))
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
   * A click. The question is marked, recorded for the student's account, and
   * then left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next word 2.1
   * seconds after an answer, showing a one-line note. The founder found the
   * answers too shallow; each now comes with the affix's meaning, how it
   * changes this word and another word that uses it
   * (src/data/games/explanations/prefix-suffix-lab.ts), and a student cannot
   * read that in 2.1 seconds. The four affixes are dealt at random from a pool
   * of eight, so the wrong pick is not recorded: there is no fixed option list.
   */
  const handleChoose = useCallback(
    (option: string) => {
      if (!current || feedback) return
      const isCorrect = option === current.answer
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      setFeedback(isCorrect ? 'correct' : 'wrong')
      if (isCorrect) setScore((s) => s + 1)
      round.record({ question: BANK.key(current), correct: isCorrect, tag: BANK.tag?.(current) })
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

  // Reset transient state if the round restarts mid-play.
  useEffect(() => {
    if (gameState === 'idle') {
      setSelected(null)
      setFeedback(null)
    }
  }, [gameState])

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
          gameId="prefix-suffix-lab"
          audience="ks3"
          title="Prefix & Suffix Lab"
          description="Build new words by adding the right prefix or suffix. Read the root and the goal, then pick the affix that makes the word."
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
                  Word {idx + 1} of {items.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      current.mode === 'prefix'
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : 'text-clay-600 border-amber-500/30 bg-amber-500/10',
                    )}
                  >
                    {current.mode === 'prefix' ? 'Prefix' : 'Suffix'}
                  </span>
                </div>
              </div>

              {/* Prompt card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <FlaskConical className="size-4" />
                  {current.mode === 'prefix' ? 'Add a prefix' : 'Add a suffix'}
                </div>

                <div className="text-3xl font-bold text-foreground">
                  {current.mode === 'prefix' ? (
                    <>
                      <span className="text-muted-foreground">_ _ +</span>{' '}
                      <span>{current.root}</span>
                    </>
                  ) : (
                    <>
                      <span>{current.root}</span>{' '}
                      <span className="text-muted-foreground">+ _ _</span>
                    </>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">
                  Goal: <span className="font-medium text-foreground">{current.target}</span>
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {current.options.map((option) => {
                  const isAnswer = option === current.answer
                  const isPicked = selected === option
                  return (
                    <button
                      key={option}
                      onClick={() => handleChoose(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-4 text-lg font-semibold transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
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
                      'space-y-1 rounded-lg px-4 py-3 text-center text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <div className="flex items-center justify-center gap-2 font-semibold">
                      {feedback === 'correct' ? (
                        <>
                          <CheckCircle className="size-4" /> Brilliant. You built{' '}
                          <span className="font-bold">{current.resultingWord}</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> Not quite. The word is{' '}
                          <span className="font-bold">{current.resultingWord}</span> (
                          {current.answer} {current.mode === 'prefix' ? '+' : 'on'} {current.root})
                        </>
                      )}
                    </div>
                  </div>
                  <AnswerExplanation
                    game="prefix-suffix-lab"
                    question={BANK.key(current)}
                    correct={feedback === 'correct'}
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
