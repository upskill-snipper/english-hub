'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, ArrowUp, ArrowDown } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import {
  BANK,
  PARAGRAPH_BANK,
  type Genre,
  type Paragraph,
} from '@/data/games/banks/paragraph-jumble'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The paragraphs are in src/data/games/banks/paragraph-jumble.ts (moved there
// on 16 October 2026), and the explanation of each order in
// src/data/games/explanations/paragraph-jumble.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Shuffle an array of indices, guaranteeing the result is not already in order. */
function shuffleOrder(length: number): number[] {
  const original = Array.from({ length }, (_, i) => i)
  let order = shuffle(original)
  let guard = 0
  while (order.every((v, i) => v === i) && guard < 20) {
    order = shuffle(original)
    guard++
  }
  return order
}

const ROUND_LENGTH = 8

const GENRE_STYLES: Record<Genre, string> = {
  Recount: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  Explanation: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  Argument: 'text-clay-600 border-amber-500/30 bg-amber-500/10',
  Story: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ParagraphJumblePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [rounds, setRounds] = useState<Paragraph[]>([])
  const [rIdx, setRIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  // `order` holds indices into the current paragraph's sentences array.
  const [order, setOrder] = useState<number[]>([])
  const [checked, setChecked] = useState(false)
  const [wasCorrect, setWasCorrect] = useState(false)
  const round = useGameRound('paragraph-jumble')

  const current = rounds[rIdx] ?? null

  const loadParagraph = useCallback((para: Paragraph) => {
    setOrder(shuffleOrder(para.sentences.length))
    setChecked(false)
    setWasCorrect(false)
  }, [])

  const handleStart = useCallback(() => {
    const picked = shuffle(PARAGRAPH_BANK).slice(0, ROUND_LENGTH)
    setRounds(picked)
    setRIdx(0)
    setScore(0)
    setAnswered(0)
    if (picked[0]) {
      setOrder(shuffleOrder(picked[0].sentences.length))
    }
    setChecked(false)
    setWasCorrect(false)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const move = useCallback(
    (pos: number, dir: -1 | 1) => {
      if (checked) return
      setOrder((prev) => {
        const target = pos + dir
        if (target < 0 || target >= prev.length) return prev
        const next = [...prev]
        ;[next[pos], next[target]] = [next[target], next[pos]]
        return next
      })
    },
    [checked],
  )

  /**
   * Checking marks the order and records it for the student's account. The
   * student builds an order rather than choosing an option, so only right or
   * wrong is recorded. The explanation of the order then shows until they
   * press Next (16 October 2026).
   */
  const handleCheck = useCallback(() => {
    if (!current || checked) return
    const correct = order.every((v, i) => v === i)
    setChecked(true)
    setWasCorrect(correct)
    setAnswered((a) => a + 1)
    if (correct) setScore((s) => s + 1)
    round.record({ question: BANK.key(current), correct, tag: current.genre })
  }, [current, checked, order, round])

  const handleNext = useCallback(() => {
    if (rIdx + 1 >= rounds.length) {
      setGameState('finished')
      return
    }
    const nextIdx = rIdx + 1
    setRIdx(nextIdx)
    loadParagraph(rounds[nextIdx])
  }, [rIdx, rounds, loadParagraph])

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
          gameId="paragraph-jumble"
          audience="ks3"
          title="Paragraph Jumble"
          description="The sentences are mixed up! Reorder them into a paragraph that makes sense. Use the topic sentence, connectives and pronouns as your clues."
          difficulty="Crossover"
          score={score}
          maxScore={answered > 0 ? answered : rounds.length || ROUND_LENGTH}
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
                  Paragraph {rIdx + 1} of {rounds.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{score} correct so far</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      GENRE_STYLES[current.genre],
                    )}
                  >
                    {current.genre}
                  </span>
                </div>
              </div>

              {/* Topic prompt */}
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Topic</p>
                <p className="mt-1 text-base font-semibold text-foreground">{current.topic}</p>
              </div>

              {/* Sentence list */}
              <ol className="space-y-2">
                {order.map((sentenceIdx, pos) => {
                  const isInRightPlace = checked && sentenceIdx === pos
                  return (
                    <li
                      key={sentenceIdx}
                      className={cn(
                        'flex items-start gap-3 rounded-lg border px-3 py-3 transition-colors',
                        !checked && 'border-border bg-card',
                        checked && isInRightPlace && 'border-emerald-500 bg-emerald-500/10',
                        checked && !isInRightPlace && 'border-red-500 bg-red-500/10',
                      )}
                    >
                      <span
                        className={cn(
                          'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                          checked && isInRightPlace
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : checked
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-primary/10 text-primary',
                        )}
                      >
                        {pos + 1}
                      </span>
                      <p className="flex-1 text-sm leading-relaxed text-foreground">
                        {current.sentences[sentenceIdx]}
                      </p>
                      {!checked && (
                        <div className="flex shrink-0 flex-col gap-1">
                          <button
                            onClick={() => move(pos, -1)}
                            disabled={pos === 0}
                            aria-label="Move sentence up"
                            className="rounded-md border border-border p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
                          >
                            <ArrowUp className="size-4" />
                          </button>
                          <button
                            onClick={() => move(pos, 1)}
                            disabled={pos === order.length - 1}
                            aria-label="Move sentence down"
                            className="rounded-md border border-border p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
                          >
                            <ArrowDown className="size-4" />
                          </button>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ol>

              {/* Feedback + reveal */}
              {checked && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      wasCorrect
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {wasCorrect ? (
                      <>
                        <CheckCircle className="size-4" /> Brilliant! That paragraph flows
                        perfectly.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite - here is the order that works
                        best.
                      </>
                    )}
                  </div>

                  {!wasCorrect && (
                    <div className="rounded-lg border border-border bg-card p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Correct paragraph
                      </p>
                      <p className="text-sm leading-relaxed text-foreground">
                        {current.sentences.join(' ')}
                      </p>
                    </div>
                  )}

                  <AnswerExplanation
                    game="paragraph-jumble"
                    question={BANK.key(current)}
                    correct={wasCorrect}
                  />
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-center">
                {!checked ? (
                  <Button onClick={handleCheck}>Check Order</Button>
                ) : (
                  <Button onClick={handleNext}>
                    {rIdx + 1 >= rounds.length ? 'See Results' : 'Next Paragraph'}
                  </Button>
                )}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
