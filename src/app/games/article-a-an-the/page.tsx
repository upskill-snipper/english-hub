'use client'

import { Fragment, useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { newSessionSalt, shuffleOptionsDeterministic } from '@/lib/quiz/shuffle'
import { BANK, fillsFor, labelsFor, type ArticleItem } from '@/data/games/banks/article-a-an-the'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The sentences are in src/data/games/banks/article-a-an-the.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/article-a-an-the.ts. Since 24 October 2026 the top
// tier also holds short texts with two or three gaps, answered with a set of
// articles; their four sets are shuffled for each round, as every option list
// on the site is (src/lib/quiz/shuffle.ts).

const ROUND_SIZE = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

/**
 * A dialogue's turns ("A: ...", then "B: ..."), each on its own line. Read on
 * 31 October 2026 by the second reader: the four dialogue texts ran on as one
 * line, so B's reply began mid-line after A's question.
 */
function withTurns(text: string, dialogue: boolean) {
  if (!dialogue) return text
  return text.split(/\s+(?=[AB]: )/).map((turn, j) => (
    <Fragment key={j}>
      {j > 0 && <br />}
      {turn}
    </Fragment>
  ))
}

/**
 * The sentence with its gap, or a short text with its numbered gaps, and once a
 * button is chosen, the article it puts in each gap. A gap that starts a
 * sentence shows its article with a capital letter.
 */
function renderSentence(sentence: string, fills: readonly string[] | null) {
  const parts = sentence.split('___')
  const numbered = parts.length > 2
  const dialogue = sentence.startsWith('A: ')
  return parts.map((part, i) => {
    if (i === 0) return <Fragment key={i}>{withTurns(part, dialogue)}</Fragment>
    const fill = fills?.[i - 1] ?? null
    const before = parts[i - 1]
    const startsSentence = (i === 1 && before.trim() === '') || /[.?:]\s+$/.test(before)
    const shown =
      fill && startsSentence && fill !== '-' ? fill[0].toUpperCase() + fill.slice(1) : fill
    return (
      <Fragment key={i}>
        <span
          className={cn(
            'inline-flex min-w-[3.5rem] items-center justify-center rounded-md border-2 border-dashed px-2 py-0.5 align-middle font-bold',
            fill
              ? 'border-primary/40 bg-primary/10 text-primary'
              : 'border-border text-muted-foreground',
          )}
        >
          {shown ?? (numbered ? i : '?')}
        </span>
        {withTurns(part, dialogue)}
      </Fragment>
    )
  })
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
  /** The label of the button chosen, as it is shown and recorded. */
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  // One per round, so a short text's sets keep their order while it is read.
  const [salt, setSalt] = useState('')
  const round = useGameRound('article-a-an-the')
  const deal = useDealer(BANK)

  const current = items[idx] ?? null
  const answer = current ? BANK.answer(current) : ''
  const isText = current?.kind === 'text'

  /** The buttons: a, an, the and no article, or a short text's four sets, shuffled. */
  const choices = useMemo(() => {
    if (!current) return []
    const labels = labelsFor(current)
    return current.kind === 'text'
      ? shuffleOptionsDeterministic(labels, `${BANK.key(current)}|${salt}`)
      : labels
  }, [current, salt])

  const handleStart = useCallback(() => {
    // Minted here rather than during render: newSessionSalt calls Math.random.
    setSalt(newSessionSalt())
    setItems(deal(ROUND_SIZE))
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
   * left on screen with its explanation until they choose to go on. The label
   * on the button is what is recorded when the choice was wrong.
   */
  const handlePick = useCallback(
    (label: string) => {
      if (!current || feedback) return
      const isCorrect = label === BANK.answer(current)
      setSelected(label)
      setFeedback(isCorrect ? 'correct' : 'wrong')
      setTotalAnswered((t) => t + 1)
      if (isCorrect) setScore((s) => s + 1)
      round.record({
        question: BANK.key(current),
        correct: isCorrect,
        tag: BANK.tag?.(current),
        chose: isCorrect ? undefined : label,
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
          description="Read each sentence and tap the article that fits the gap: a, an, the, or no article. At the top level, a short text has two or three gaps. Learn the rule after every answer."
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
                <p
                  className={cn(
                    'leading-relaxed text-foreground',
                    // A short text reads as a paragraph, from the start of the line.
                    isText ? 'text-start text-base sm:text-lg' : 'text-lg sm:text-xl',
                  )}
                >
                  {renderSentence(current.sentence, selected ? fillsFor(current, selected) : null)}
                </p>
                {current.source && (
                  <p className="mt-3 text-start text-xs text-muted-foreground">
                    From {current.source}
                  </p>
                )}
              </div>

              {isText && !feedback && (
                <p className="text-center text-sm text-muted-foreground">
                  Choose the set of articles for the gaps, in order (- means no article).
                </p>
              )}

              {/* Options */}
              <div
                className={cn(
                  'grid gap-3',
                  isText ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-4',
                )}
              >
                {choices.map((label) => {
                  const isAnswer = label === answer
                  const isPicked = label === selected
                  return (
                    <button
                      key={label}
                      onClick={() => handlePick(label)}
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
                      {label}
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
                        <span className="font-bold">{answer}</span>.
                      </>
                    )}
                  </div>

                  <AnswerExplanation
                    game="article-a-an-the"
                    question={BANK.key(current)}
                    correct={feedback === 'correct'}
                    chosen={selected}
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
