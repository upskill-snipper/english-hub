'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, RotateCcw } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, type QuestionItem } from '@/data/games/banks/question-formation'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The questions are in src/data/games/banks/question-formation.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/question-formation.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Split a question into orderable tokens (words + final punctuation kept). */
function tokenise(question: string): string[] {
  // Separate trailing punctuation so the "?" stays attached to its word.
  return question.trim().split(/\s+/)
}

interface Token {
  id: number
  text: string
}

function buildTokens(question: string): Token[] {
  return tokenise(question).map((text, id) => ({ id, text }))
}

// ─── Component ─────────────────────────────────────────────────────────────────

const ROUND_SIZE = 12

export default function QuestionFormationPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<QuestionItem[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)

  // Token pools for the current question
  const [pool, setPool] = useState<Token[]>([])
  const [answer, setAnswer] = useState<Token[]>([])
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('question-formation')
  const deal = useDealer(BANK)

  const currentItem = items[qIdx] ?? null

  const correctTokens = useMemo(
    () => (currentItem ? tokenise(currentItem.correct) : []),
    [currentItem],
  )

  const loadQuestion = useCallback((item: QuestionItem) => {
    const tokens = buildTokens(item.correct)
    // Re-shuffle until the order differs (best effort for short questions).
    let scrambled = shuffle(tokens)
    let guard = 0
    while (
      guard < 8 &&
      scrambled.map((t) => t.text).join(' ') === tokens.map((t) => t.text).join(' ')
    ) {
      scrambled = shuffle(tokens)
      guard++
    }
    setPool(scrambled)
    setAnswer([])
    setFeedback(null)
  }, [])

  const handleStart = useCallback(() => {
    const picked = deal(ROUND_SIZE)
    setItems(picked)
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    if (picked[0]) loadQuestion(picked[0])
    setGameState('playing')
  }, [loadQuestion, deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const pickFromPool = useCallback(
    (token: Token) => {
      if (feedback) return
      setPool((p) => p.filter((t) => t.id !== token.id))
      setAnswer((a) => [...a, token])
    },
    [feedback],
  )

  const returnToPool = useCallback(
    (token: Token) => {
      if (feedback) return
      setAnswer((a) => a.filter((t) => t.id !== token.id))
      setPool((p) => [...p, token])
    },
    [feedback],
  )

  const resetCurrent = useCallback(() => {
    if (feedback || !currentItem) return
    loadQuestion(currentItem)
  }, [feedback, currentItem, loadQuestion])

  const advance = useCallback(() => {
    if (qIdx + 1 >= items.length) {
      setGameState('finished')
    } else {
      const next = qIdx + 1
      setQIdx(next)
      loadQuestion(items[next])
    }
  }, [qIdx, items, loadQuestion])

  /**
   * Marks the built question, records it for the student's account and leaves it
   * on screen, with its explanation, until they choose to go on (advance).
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next question
   * 2.4 seconds after the check, showing a one-line note. The founder found the
   * answers too shallow; each now comes with why the word order is right
   * (src/data/games/explanations/question-formation.ts), and a student cannot
   * read that in 2.4 seconds. Only whether the question was built right is
   * recorded; the words the student placed are never sent.
   */
  const handleCheck = useCallback(() => {
    if (!currentItem || feedback || answer.length === 0) return
    const attempt = answer.map((t) => t.text).join(' ')
    const target = correctTokens.join(' ')
    const correct = attempt === target
    setTotalAnswered((n) => n + 1)

    if (correct) {
      setScore((s) => s + 1)
      setFeedback('correct')
    } else {
      setFeedback('wrong')
    }

    round.record({ question: BANK.key(currentItem), correct, tag: BANK.tag?.(currentItem) })
  }, [currentItem, feedback, answer, correctTokens, round])

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
          gameId="question-formation"
          audience="eal"
          title="Build the Question"
          description="Tap the scrambled words in the correct order to form a grammatical English question. Watch your word order, auxiliaries and tags."
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
                  Question {qIdx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Answer area */}
              <div
                className={cn(
                  'min-h-[72px] rounded-xl border-2 border-dashed bg-card p-4 transition-colors',
                  feedback === 'correct' && 'border-emerald-500 bg-emerald-500/10',
                  feedback === 'wrong' && 'border-red-500 bg-red-500/10',
                  !feedback && 'border-border',
                )}
              >
                {answer.length === 0 ? (
                  <p className="py-3 text-center text-sm text-muted-foreground">
                    Tap the words below to build your question here.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {answer.map((token) => (
                      <button
                        key={token.id}
                        onClick={() => returnToPool(token)}
                        disabled={!!feedback}
                        className={cn(
                          'rounded-lg border px-3 py-2 text-sm font-medium transition-all',
                          'border-primary/40 bg-primary/10 text-foreground',
                          !feedback && 'hover:bg-primary/20 active:translate-y-px',
                          feedback && 'cursor-default',
                        )}
                      >
                        {token.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Word pool */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Available words
                </p>
                <div className="flex flex-wrap gap-2">
                  {pool.length === 0 && !feedback ? (
                    <p className="py-2 text-sm text-muted-foreground">
                      All words used: check your answer.
                    </p>
                  ) : (
                    pool.map((token) => (
                      <button
                        key={token.id}
                        onClick={() => pickFromPool(token)}
                        disabled={!!feedback}
                        className={cn(
                          'rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-all',
                          !feedback && 'hover:bg-accent active:translate-y-px',
                          feedback && 'cursor-default opacity-60',
                        )}
                      >
                        {token.text}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Feedback */}
              {feedback && (
                <div
                  className={cn(
                    'space-y-2 rounded-lg px-4 py-3 text-sm',
                    feedback === 'correct'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400',
                  )}
                >
                  <div className="flex items-center gap-2 font-medium">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Brilliant, that&apos;s spot on.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The correct question is:
                      </>
                    )}
                  </div>
                  {feedback === 'wrong' && (
                    <p className="font-bold text-foreground">{currentItem.correct}</p>
                  )}
                </div>
              )}

              {/* Why the order is right, and the way on */}
              {feedback && (
                <div>
                  <AnswerExplanation
                    game="question-formation"
                    question={BANK.key(currentItem)}
                    correct={feedback === 'correct'}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={advance} autoFocus>
                      {qIdx + 1 >= items.length ? 'See your results' : 'Next question'}
                      <ArrowRight className="size-4 ms-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Controls */}
              {!feedback && (
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button variant="ghost" onClick={resetCurrent} disabled={answer.length === 0}>
                    <RotateCcw className="size-4 me-1" />
                    Reset
                  </Button>
                  <Button onClick={handleCheck} disabled={pool.length > 0 || answer.length === 0}>
                    Check Question
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
