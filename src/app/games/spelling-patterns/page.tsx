'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, PATTERN_BANK, type PatternItem } from '@/data/games/banks/spelling-patterns'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/spelling-patterns.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/spelling-patterns.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

const ROUND_SIZE = 15
const LETTERS = ['A', 'B', 'C', 'D']
const PROMPT = 'Which spelling is correct?'
const GAP_PROMPT = 'Which spelling fills the gap?'

/**
 * What a question asks. Since 24 October 2026 a question may be a word to
 * build from a root and an ending (`prompt`, "refer + -ed"), shown under the
 * question, or a sentence with a gap (`sentence`), shown with its source
 * (src/data/games/banks/spelling-patterns.ts).
 */
function askOf(q: PatternItem): string {
  return q.sentence ? GAP_PROMPT : PROMPT
}

/** A sentence with its gap: blank until answered, then the right spelling. */
function renderGap(sentence: string, filled: string | null): React.ReactNode {
  const [before, after] = sentence.split('___')
  return (
    <>
      {before}
      <span
        className={cn(
          'mx-1 inline-block min-w-[4rem] rounded-md border-b-2 px-2 text-center font-bold',
          filled
            ? 'border-emerald-500 text-emerald-400'
            : 'border-dashed border-muted-foreground text-muted-foreground',
        )}
      >
        {filled ?? '?'}
      </span>
      {after}
    </>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

/**
 * ANSWER POSITION WAS THE ANSWER (fixed 20 September 2026).
 *
 * The round shuffled the QUESTION pool and left each question's four options in
 * authored order, then scored with `choice === current.answerIndex`. 41 of the
 * 65 items in PATTERN_BANK carry answerIndex 1 and not one carries 3, so a
 * student who tapped B every time and read nothing scored 63%, and never had
 * any reason to consider D.
 *
 * The options are now shuffled per attempt from a salt created when the attempt
 * starts, and every comparison goes through the correct option's VALUE rather
 * than its position. Rebalancing the bank would have fixed today only: the next
 * person to author fifty items writes the answer at B again.
 */
export default function SpellingPatternsPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<PatternItem[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  /** Display position of the tapped option, never used to judge it. */
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  /** Minted in the start handler, not in render: newSessionSalt calls Math.random. */
  const [salt, setSalt] = useState('')
  const round = useGameRound('spelling-patterns')
  const deal = useDealer(BANK)

  const current = items[idx] ?? null

  const view = useMemo(
    () =>
      current
        ? shuffledOptionsFor(
            current.options,
            current.answerIndex,
            current.options.join('|'),
            salt,
            `${askOf(current)} ${current.prompt ?? current.sentence ?? ''}`,
          )
        : null,
    [current, salt],
  )

  const handleStart = useCallback(() => {
    setItems(deal(ROUND_SIZE))
    setSalt(newSessionSalt())
    setIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setRevealed(false)
    setGameState('playing')
  }, [deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A tap. The question is marked by the option's value, recorded for the
   * student's account, and then left on screen with its explanation until they
   * choose to go on (src/data/games/explanations/spelling-patterns.ts).
   */
  const handleSelect = useCallback(
    (choice: number, value: string) => {
      if (revealed || !view || !current) return
      const correct = value === view.correctValue
      setSelected(choice)
      setRevealed(true)
      setTotalAnswered((t) => t + 1)
      if (correct) {
        setScore((s) => s + 1)
      }
      round.record({
        question: BANK.key(current),
        correct,
        tag: BANK.tag?.(current),
        chose: correct ? undefined : value,
      })
    },
    [revealed, view, current, round],
  )

  const handleNext = useCallback(() => {
    if (idx + 1 >= items.length) {
      setGameState('finished')
    } else {
      setIdx((i) => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }, [idx, items.length])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const selectedValue = view && selected !== null ? view.options[selected] : null
  const answeredCorrectly = selectedValue !== null && selectedValue === view?.correctValue

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
          gameId="spelling-patterns"
          audience="ks3"
          title="Spelling Patterns"
          description="Pick the correct British spelling, then learn the rule behind it: i before e, doubling, dropping the e, y to i, endings that sound alike, and the words you use to write about a text."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || items.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {current && view && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {idx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Prompt: the question, then what to join or the sentence to fill */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">{askOf(current)}</p>
                {current.prompt && (
                  <p className="mt-2 text-lg font-semibold text-foreground">{current.prompt}</p>
                )}
                {current.sentence && (
                  <p className="mt-2 text-lg leading-relaxed text-foreground">
                    {renderGap(current.sentence, revealed ? view.correctValue : null)}
                  </p>
                )}
                {current.source && (
                  <p className="mt-2 text-xs text-muted-foreground">From {current.source}</p>
                )}
                <p className="mt-3 text-xs text-muted-foreground">British spelling throughout.</p>
              </div>

              {/* Options - shuffled per attempt, so the letter is a position and nothing more */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {view.options.map((opt, i) => {
                  const isCorrect = opt === view.correctValue
                  const isChosen = i === selected
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i, opt)}
                      disabled={revealed}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border px-4 py-3 text-start text-base font-medium transition-all',
                        !revealed &&
                          'border-border text-foreground hover:border-primary hover:bg-accent',
                        revealed &&
                          isCorrect &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        revealed &&
                          isChosen &&
                          !isCorrect &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        revealed &&
                          !isCorrect &&
                          !isChosen &&
                          'border-border text-muted-foreground opacity-60',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold',
                          revealed && isCorrect
                            ? 'border-emerald-500 text-emerald-400'
                            : revealed && isChosen && !isCorrect
                              ? 'border-red-500 text-red-400'
                              : 'border-border text-muted-foreground',
                        )}
                      >
                        {LETTERS[i]}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {revealed && isCorrect && <CheckCircle className="size-5 text-emerald-400" />}
                      {revealed && isChosen && !isCorrect && (
                        <XCircle className="size-5 text-red-400" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Feedback, then the explanation, then on when the student is ready */}
              {revealed && (
                <div className="space-y-4">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      answeredCorrectly
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {answeredCorrectly ? (
                      <>
                        <CheckCircle className="size-4" /> Spot on. Great pattern spotting
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The correct spelling is{' '}
                        <span className="font-bold">{view.correctValue}</span>
                      </>
                    )}
                  </div>

                  <AnswerExplanation
                    game="spelling-patterns"
                    question={BANK.key(current)}
                    correct={answeredCorrectly}
                    chosen={selectedValue}
                  />

                  <div className="flex justify-center">
                    <Button onClick={handleNext}>
                      {idx + 1 >= items.length ? 'See Results' : 'Next Question'}
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
