'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, Clock } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, answerOf, isForming, type TenseItem } from '@/data/games/banks/tense-timeline'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The sentences are in src/data/games/banks/tense-timeline.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/tense-timeline.ts.

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
 * The question's own four options, dealt in a new order.
 *
 * WHAT WAS WRONG (found 16 October 2026). The three wrong tenses were drawn
 * from every other tense, so "I was cooking dinner when the phone rang" could
 * offer Past Simple (rang) beside Past Continuous, and a student who read
 * closely was marked wrong. From 24 October 2026 each question carries its own
 * four (src/data/games/banks/tense-timeline.ts): near neighbours for a tense's
 * name, and learners' mistakes for a form, never a tense the sentence also uses.
 */
function buildOptions(item: TenseItem): string[] {
  return shuffle([...BANK.options(item)!])
}

// ─── Component ─────────────────────────────────────────────────────────────────

interface Question extends TenseItem {
  /** The options in the order dealt. */
  options: string[]
  /** The right option: the form for the gap, or the tense's name. */
  answer: string
  /**
   * Whether it asks for the form that fills a gap. Read from the bank's item
   * before `answer` is filled in: isForming() asks whether an item has an
   * answer, and every Question has one, so asking it of the Question showed
   * all 80 naming questions as "Which form fits the gap?", with a gap after
   * the whole sentence that then filled with the tense's name (found by the
   * second reader, 31 October 2026).
   */
  forming: boolean
}

export default function TenseTimelinePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('tense-timeline')
  const deal = useDealer(BANK)

  const currentQ = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = deal(ROUND_SIZE)
    const built: Question[] = picked.map((item) => ({
      ...item,
      options: buildOptions(item),
      answer: answerOf(item),
      forming: isForming(item),
    }))
    setQuestions(built)
    setQIdx(0)
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
   * A tap. The sentence is marked, recorded for the student's account, and then
   * left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next sentence
   * 2.6 seconds after a tap, showing one line of why. Each answer now comes with
   * the time clue that decides the tense and what each wrong tense would mean
   * (src/data/games/explanations/tense-timeline.ts), which cannot be read in
   * 2.6 seconds. There is no clock in this game, so nothing else changes.
   */
  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQ || feedback) return
      const isCorrect = option === currentQ.answer
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQ),
        correct: isCorrect,
        tag: currentQ.tense,
        chose: isCorrect ? undefined : option,
      })
    },
    [currentQ, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setSelected(null)
    setFeedback(null)
  }, [qIdx, questions.length])

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
          gameId="tense-timeline"
          audience="eal"
          title="Tense Timeline"
          description="Name the tense of each sentence, or choose the form of the verb that fits the gap. Build your grammar instinct one sentence at a time."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentQ && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Sentence {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card. Since 24 October 2026 a question may also ask
                  for the form that fills a gap, after lines of dialogue or
                  text, and a real line from a book names its source. */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Clock className="size-3.5" />{' '}
                  {currentQ.forming ? 'Which form fits the gap?' : 'Which tense is this?'}
                </div>
                {currentQ.context && (
                  <div className="space-y-1 text-base leading-relaxed text-muted-foreground">
                    {currentQ.context.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
                {currentQ.forming ? (
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {currentQ.sentence.split('___')[0]}
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
                      {feedback ? currentQ.answer : '?'}
                    </span>
                    {currentQ.sentence.split('___')[1]}
                  </p>
                ) : (
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    &ldquo;{currentQ.sentence}&rdquo;
                  </p>
                )}
                {currentQ.source && (
                  <p className="text-xs text-muted-foreground">{currentQ.source}</p>
                )}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((option) => {
                  const isCorrectOption = option === currentQ.answer
                  const isChosen = option === selected
                  const showState = feedback != null
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={showState}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-medium text-start transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !showState &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        showState &&
                          isCorrectOption &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showState &&
                          isChosen &&
                          !isCorrectOption &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        showState &&
                          !isCorrectOption &&
                          !isChosen &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        {showState && isCorrectOption && <CheckCircle className="size-4" />}
                        {showState && isChosen && !isCorrectOption && (
                          <XCircle className="size-4" />
                        )}
                        {option}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation, until the student goes on */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      {feedback === 'correct' ? (
                        <>
                          <CheckCircle className="size-4" /> Well done, that&rsquo;s right.
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> Not quite: it&rsquo;s{' '}
                          <span className="font-bold">{currentQ.answer}</span>.
                        </>
                      )}
                    </div>
                  </div>
                  <AnswerExplanation
                    game="tense-timeline"
                    question={BANK.key(currentQ)}
                    correct={feedback === 'correct'}
                    chosen={selected}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {qIdx + 1 >= questions.length ? 'See your results' : 'Next question'}
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
