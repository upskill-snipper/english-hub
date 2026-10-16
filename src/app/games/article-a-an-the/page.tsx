'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import {
  ARTICLE_BANK,
  BANK,
  OPTIONS,
  OPTION_LABELS,
  type Article,
  type ArticleItem,
} from '@/data/games/banks/article-a-an-the'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The sentences are in src/data/games/banks/article-a-an-the.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/article-a-an-the.ts.

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

function renderSentence(sentence: string, filled: string | null) {
  const parts = sentence.split('___')
  return (
    <>
      {parts[0]}
      <span
        className={cn(
          'inline-flex min-w-[3.5rem] items-center justify-center rounded-md border-2 border-dashed px-2 py-0.5 align-middle font-bold',
          filled
            ? 'border-primary/40 bg-primary/10 text-primary'
            : 'border-border text-muted-foreground',
        )}
      >
        {filled ?? '?'}
      </span>
      {parts[1]}
    </>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ArticleAAnThePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<ArticleItem[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<Article | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('article-a-an-the')

  const current = items[idx] ?? null

  const handleStart = useCallback(() => {
    setItems(shuffle(ARTICLE_BANK).slice(0, ROUND_SIZE))
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
   * left on screen with its explanation until they choose to go on. The label
   * on the button is what is recorded when the choice was wrong.
   */
  const handlePick = useCallback(
    (choice: Article) => {
      if (!current || feedback) return
      const isCorrect = choice === current.answer
      setSelected(choice)
      setFeedback(isCorrect ? 'correct' : 'wrong')
      setTotalAnswered((t) => t + 1)
      if (isCorrect) setScore((s) => s + 1)
      round.record({
        question: BANK.key(current),
        correct: isCorrect,
        tag: BANK.tag?.(current),
        chose: isCorrect ? undefined : OPTION_LABELS[choice],
      })
    },
    [current, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (idx + 1 >= items.length) {
      setGameState('finished')
    } else {
      setIdx((i) => i + 1)
      setSelected(null)
      setFeedback(null)
    }
  }, [idx, items.length])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const isLast = useMemo(() => idx + 1 >= items.length, [idx, items.length])

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
          gameId="article-a-an-the"
          audience="eal"
          title="A, An, The or Nothing?"
          description="Read each sentence and tap the article that fits the gap: a, an, the, or no article. Learn the rule after every answer."
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
                  Sentence {idx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                  {renderSentence(current.sentence, selected)}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {OPTIONS.map((opt) => {
                  const isAnswer = opt === current.answer
                  const isPicked = opt === selected
                  return (
                    <button
                      key={opt}
                      onClick={() => handlePick(opt)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-xl border-2 px-4 py-4 text-base font-bold transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary/50 hover:bg-accent active:translate-y-px',
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
                      {OPTION_LABELS[opt]}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation */}
              {feedback && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Well done, that&apos;s right.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer is{' '}
                        <span className="font-bold">{OPTION_LABELS[current.answer]}</span>.
                      </>
                    )}
                  </div>

                  <AnswerExplanation
                    game="article-a-an-the"
                    question={BANK.key(current)}
                    correct={feedback === 'correct'}
                    chosen={selected ? OPTION_LABELS[selected] : null}
                  />

                  <div className="flex justify-center">
                    <Button onClick={handleNext} autoFocus>
                      {isLast ? 'See Results' : 'Next Sentence'}
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
