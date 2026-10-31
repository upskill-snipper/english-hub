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
// src/data/games/explanations/prefix-suffix-lab.ts. A question stores its answer
// and its own wrong options; they are shuffled below, so the answer position is
// always randomised.

/** A question as it is dealt: the fixed seed, plus its options in a random order. */
interface LabItem extends LabSeed {
  options: string[]
}

/**
 * The answer and the question's own wrong options, shuffled. Until 24 October
 * 2026 three wrong affixes were dealt at random from a pool of eight, so a
 * question could be shown with no near neighbour at all ("make an ADVERB"
 * offered one adverb suffix); each question now carries its own (`wrong`).
 */
function buildOptions(q: LabSeed): string[] {
  const answer = q.answer
  const distractors = [...q.wrong]
  return shuffle([answer, ...distractors])
}

/**
 * A real line keeps the held edition's italics, which src/data/full-texts
 * marks with single underscores ("tempt _me_"), so the line is the text word
 * for word (a-game-real-line-is-the-held-text.test.ts). They are shown as
 * italics, as the book prints them.
 */
function italics(text: string) {
  return text
    .split(/(_[^_]+_)/)
    .map((part, i) => (/^_[^_]+_$/.test(part) ? <em key={i}>{part.slice(1, -1)}</em> : part))
}

/** A gap in a sentence to complete, drawn as a line. */
function renderSentence(sentence: string) {
  const [before, after] = sentence.split('___')
  if (after === undefined) return italics(sentence)
  return (
    <>
      {italics(before)}
      <span
        aria-label="gap"
        className="mx-1 inline-block w-16 border-b-2 border-primary/60 align-baseline"
      />
      {italics(after)}
    </>
  )
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
  }).map((s) => ({ ...s, options: buildOptions(s) }))
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
   * read that in 2.1 seconds. The wrong pick is not recorded, as it never was;
   * since 24 October 2026 each question has fixed options, so the explanation
   * panel can say why the one chosen does not fit.
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
          description="Build words with prefixes and suffixes, spell them where the parts join, and read what an affix does in real lines from the books you study."
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

              {/* Prompt card: a root and a goal, or (since 24 October 2026) a
                  sentence to complete or a line to read, with the question */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <FlaskConical className="size-4" />
                  {current.sentence
                    ? current.sentence.includes('___')
                      ? 'Complete the sentence'
                      : 'Read the line'
                    : current.mode === 'prefix'
                      ? 'Add a prefix'
                      : 'Add a suffix'}
                </div>

                {current.sentence ? (
                  <>
                    <p className="text-xl leading-relaxed text-foreground whitespace-pre-line">
                      {renderSentence(current.sentence)}
                    </p>
                    {current.source && (
                      <p className="text-xs text-muted-foreground">{current.source}</p>
                    )}
                    <p className="text-sm font-medium text-foreground">{current.target}</p>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>

              {/* Options: a reading is a sentence long, so it gets a row of its own.
                  A whole word ("constructively") does not fit a quarter, or on a
                  360px phone a half, of the card at this size and cannot wrap, so
                  words of nine letters or more stack on a phone and pair from sm
                  up (checked 31 October 2026); affixes keep four across. */}
              <div
                className={cn(
                  'grid gap-3',
                  current.options.some((o) => o.length > 18)
                    ? 'grid-cols-1'
                    : current.options.some((o) => o.length > 8)
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : 'grid-cols-2 sm:grid-cols-4',
                )}
              >
                {current.options.map((option) => {
                  const isAnswer = option === current.answer
                  const isPicked = selected === option
                  return (
                    <button
                      key={option}
                      onClick={() => handleChoose(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-4 font-semibold transition-all',
                        option.length > 18 ? 'text-start text-sm' : 'text-lg',
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
                      {current.sentence ? (
                        feedback === 'correct' ? (
                          <>
                            <CheckCircle className="size-4" /> Brilliant. That is right.
                          </>
                        ) : current.sentence.includes('___') ? (
                          <>
                            <XCircle className="size-4" /> Not quite. The word is{' '}
                            <span className="font-bold">{current.answer}</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="size-4" /> Not quite. The best answer is in green.
                          </>
                        )
                      ) : feedback === 'correct' ? (
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
                    chosen={selected}
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
