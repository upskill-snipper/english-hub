'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, Eye, RotateCcw } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { isAcceptedOrder } from '@/lib/games/scoring'
import {
  BANK,
  joinTiles,
  type SentenceItem,
  type SentenceType,
} from '@/data/games/banks/sentence-builder'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The sentences are in src/data/games/banks/sentence-builder.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/sentence-builder.ts.

const TYPE_META: Record<SentenceType, { label: string; cls: string }> = {
  simple: { label: 'Simple', cls: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  compound: { label: 'Compound', cls: 'text-clay-600 border-amber-500/30 bg-amber-500/10' },
  complex: { label: 'Complex', cls: 'text-red-400 border-red-500/30 bg-red-500/10' },
}

const ROUND_SIZE = 12

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Ensure the scrambled order differs from the correct order.
function scrambleTiles(tiles: string[]): string[] {
  if (tiles.length < 2) return [...tiles]
  const target = tiles.join('')
  let scrambled = shuffle(tiles)
  let guard = 0
  while (scrambled.join('') === target && guard < 20) {
    scrambled = shuffle(tiles)
    guard++
  }
  return scrambled
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SentenceBuilderPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<SentenceItem[]>([])
  const [pool, setPool] = useState<string[]>([]) // scrambled tiles still available
  const [built, setBuilt] = useState<string[]>([]) // tiles placed by the learner
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [revealed, setRevealed] = useState(false)
  const round = useGameRound('sentence-builder')
  const deal = useDealer(BANK)

  const current = items[idx] ?? null

  const loadItem = useCallback((item: SentenceItem) => {
    setPool(scrambleTiles(item.tiles))
    setBuilt([])
    setFeedback(null)
    setRevealed(false)
  }, [])

  const handleStart = useCallback(() => {
    // Four of each, simple then compound then complex, as before; dealt by
    // useDealer (src/lib/games/start-round.ts), so a round brings sentences
    // this browser has not built, and the bank's tiers keep the ramp.
    const ordered = deal(ROUND_SIZE, {
      quota: { of: (s) => s.type, counts: { simple: 4, compound: 4, complex: 4 } },
    })
    setItems(ordered)
    setIdx(0)
    setScore(0)
    setTotalAnswered(0)
    loadItem(ordered[0])
    setGameState('playing')
  }, [loadItem, deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /** Goes on to the next sentence once the student has read the explanation. */
  const handleNext = useCallback(() => {
    if (idx + 1 >= items.length) {
      setGameState('finished')
      return
    }
    setIdx(idx + 1)
    loadItem(items[idx + 1])
  }, [idx, items, loadItem])

  // Tap a pool tile → append to the built sentence. Both lists are read from
  // this render and each is set once. Until 31 October 2026 each handler set
  // the other list inside its own state updater; an updater must be pure, and
  // React runs every updater twice in development, so each tap placed (or
  // returned) the tile twice there.
  const placeTile = (poolPos: number) => {
    if (feedback || revealed) return
    const word = pool[poolPos]
    if (word === undefined) return
    setPool(pool.filter((_, i) => i !== poolPos))
    setBuilt([...built, word])
  }

  // Tap a built tile → return it to the pool.
  const removeTile = (builtPos: number) => {
    if (feedback || revealed) return
    const word = built[builtPos]
    if (word === undefined) return
    setBuilt(built.filter((_, i) => i !== builtPos))
    setPool([...pool, word])
  }

  const resetCurrent = () => {
    if (feedback || revealed || !current) return
    loadItem(current)
  }

  /**
   * Check, or Reveal. The sentence is marked and recorded for the student's
   * account, and then left on screen with its explanation
   * (src/data/games/explanations/sentence-builder.ts) until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move on by itself 2.2
   * seconds after a check (2.6 after a reveal), which is too quick to read an
   * explanation. Nothing the student built is recorded, only whether it was
   * right.
   *
   * OTHER CORRECT ORDERS ARE RIGHT (23 October 2026, the founder's decision).
   * The bank lists in `alsoCorrect` the other orders of the same tiles that are
   * also correct English, 51 orders across 30 sentences, and a build that
   * matches one is marked right (src/lib/games/scoring.ts). Until then only
   * `correct` was, so a student who built "The cat on the sofa is sleeping" was
   * told they were wrong. Accepting them changed what counts as right, which is
   * why it waited for him.
   *
   * PUNCTUATION TILES (24 October 2026). A sentence may now carry comma and
   * semicolon tiles, which the student places like any word, so the build is
   * read with joinTiles: a punctuation tile joins the word before it. For a
   * sentence with no punctuation tiles that is exactly the words joined by
   * spaces, as before.
   */
  const checkAnswer = () => {
    if (!current || feedback || revealed) return
    const attempt = joinTiles(built)
    const isCorrect = isAcceptedOrder(attempt, current)
    setTotalAnswered((t) => t + 1)
    if (isCorrect) {
      setScore((s) => s + 1)
      setFeedback('correct')
    } else {
      setFeedback('wrong')
    }
    round.record({ question: BANK.key(current), correct: isCorrect, tag: current.type })
  }

  const reveal = () => {
    if (!current || feedback || revealed) return
    setRevealed(true)
    setTotalAnswered((t) => t + 1)
    setBuilt([...current.tiles])
    setPool([])
    round.record({ question: BANK.key(current), correct: false, tag: current.type })
  }

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const locked = !!feedback || revealed

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
          gameId="sentence-builder"
          audience="ks3"
          title="Sentence Builder"
          description="Tap the tiles in the right order to build a correct sentence, commas included. Sentences get trickier as you go: simple, then compound, then complex."
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
                  Sentence {idx + 1} of {items.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      TYPE_META[current.type].cls,
                    )}
                  >
                    {TYPE_META[current.type].label}
                  </span>
                </div>
              </div>

              {/* A real sentence says where it comes from */}
              {current.source && (
                <p className="text-center text-xs text-muted-foreground">{current.source}</p>
              )}

              {/* Build area */}
              <div
                className={cn(
                  'min-h-[88px] rounded-xl border-2 border-dashed p-4 transition-colors',
                  feedback === 'correct' && 'border-emerald-500 bg-emerald-500/10',
                  feedback === 'wrong' && 'border-red-500 bg-red-500/10',
                  revealed && 'border-primary bg-primary/5',
                  !locked && 'border-border bg-card',
                )}
              >
                {built.length === 0 ? (
                  <p className="py-4 text-center text-sm text-muted-foreground">
                    Tap the words below to build your sentence here.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {built.map((word, i) => (
                      <button
                        key={`${word}-${i}`}
                        onClick={() => removeTile(i)}
                        disabled={locked}
                        className={cn(
                          'rounded-lg border px-3 py-2 text-sm font-medium transition-all',
                          'border-primary/40 bg-primary/10 text-foreground',
                          !locked &&
                            'hover:border-red-500/50 hover:bg-red-500/10 active:translate-y-px',
                          locked && 'cursor-default',
                        )}
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tile pool */}
              {pool.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {pool.map((word, i) => (
                    <button
                      key={`${word}-${i}`}
                      onClick={() => placeTile(i)}
                      disabled={locked}
                      className={cn(
                        'rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-all',
                        !locked && 'hover:border-primary hover:bg-accent active:translate-y-px',
                        locked && 'opacity-50 cursor-default',
                      )}
                    >
                      {word}
                    </button>
                  ))}
                </div>
              )}

              {/* Feedback */}
              {feedback && (
                <div
                  className={cn(
                    'flex flex-col items-center gap-1 rounded-lg px-4 py-3 text-sm font-medium text-center',
                    feedback === 'correct'
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-red-400 bg-red-500/10',
                  )}
                >
                  {feedback === 'correct' ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="size-4" /> Brilliant. That&apos;s exactly right.
                    </span>
                  ) : (
                    <>
                      <span className="flex items-center gap-2">
                        <XCircle className="size-4" /> Not quite. The correct sentence is:
                      </span>
                      <span className="font-bold text-foreground">{current.correct}.</span>
                    </>
                  )}
                </div>
              )}

              {revealed && (
                <div className="flex flex-col items-center gap-1 rounded-lg bg-primary/10 px-4 py-3 text-center text-sm">
                  <span className="font-semibold text-primary">Here&apos;s the answer:</span>
                  <span className="font-bold text-foreground">{current.correct}.</span>
                </div>
              )}

              {locked && (
                <div>
                  <AnswerExplanation
                    game="sentence-builder"
                    question={BANK.key(current)}
                    correct={feedback === 'correct'}
                  />
                  <div className="mt-4 flex justify-center">
                    <Button onClick={handleNext} autoFocus>
                      {idx + 1 >= items.length ? 'See your results' : 'Next question'}
                      <ArrowRight className="size-4 ms-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Controls */}
              {!locked && (
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button onClick={checkAnswer} disabled={built.length === 0}>
                    Check Sentence
                  </Button>
                  <Button variant="outline" onClick={resetCurrent} disabled={built.length === 0}>
                    <RotateCcw className="size-4 me-1" />
                    Reset
                  </Button>
                  <Button variant="ghost" onClick={reveal}>
                    <Eye className="size-4 me-1" />
                    Reveal
                  </Button>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
