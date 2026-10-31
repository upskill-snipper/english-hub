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
import { useDealer } from '@/lib/games/start-round'
import { BANK, type Question } from '@/data/games/banks/word-class-sorter'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The sentences are in src/data/games/banks/word-class-sorter.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/word-class-sorter.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ROUND_LENGTH = 15

/** A question as it is shown: its options in a random order, and the right one. */
interface View {
  options: string[]
  answer: string
}

/**
 * The right option and the question's own wrong ones, shuffled. Until 24
 * October 2026 the page offered the right class and three to five others drawn
 * at random from all eight, so a question was often shown with no near
 * neighbour at all ("Conjunction" beside "fox"); each question now carries the
 * classes, or for a phrase or clause the labels, that a student is likely to
 * confuse with its answer (`wrong` in the bank).
 */
function buildOptions(question: Question): string[] {
  const correct = BANK.answer(question)
  const distractors = [...question.wrong]
  return shuffle([correct, ...distractors])
}

const viewOf = (question: Question | undefined): View =>
  question
    ? { options: buildOptions(question), answer: BANK.answer(question) }
    : { options: [], answer: '' }

/** The question asked: a word's class, a group of words, or the bank's own question. */
function promptOf(question: Question): string {
  if (question.prompt) return question.prompt
  return question.wordClass
    ? 'What word class is the highlighted word?'
    : 'What is the highlighted group of words?'
}

// Highlight the target inside the sentence: its first match as whole words, so
// that "as" is never found inside "was" (24 October 2026; until then the first
// match anywhere, which no question then needed).
function renderSentence(sentence: string, target: string) {
  const escaped = target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const found = new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'iu').exec(sentence)
  if (!found) return <span>{sentence}</span>
  const idx = found.index
  const before = sentence.slice(0, idx)
  const match = sentence.slice(idx, idx + target.length)
  const after = sentence.slice(idx + target.length)
  return (
    <span>
      {before}
      <span className="rounded-md bg-primary/15 px-1.5 py-0.5 font-bold text-primary underline decoration-primary/40 decoration-2 underline-offset-4">
        {match}
      </span>
      {after}
    </span>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function WordClassSorterPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [view, setView] = useState<View>(viewOf(undefined))
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('word-class-sorter')
  const deal = useDealer(BANK)

  const currentQuestion = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = deal(ROUND_LENGTH)
    setQuestions(picked)
    setView(viewOf(picked[0]))
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
   * A click. The question is marked, recorded for the student's account, and
   * then left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next sentence
   * 2.2 seconds after an answer, showing one line of explanation. The founder
   * found the answers too shallow; each now comes with why it is right and why
   * the class chosen is not (src/data/games/explanations/word-class-sorter.ts),
   * which cannot be read in 2.2 seconds.
   */
  const handleAnswer = useCallback(
    (choice: string) => {
      if (!currentQuestion || feedback) return
      const isCorrect = choice === view.answer
      setSelected(choice)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQuestion),
        correct: isCorrect,
        tag: BANK.tag?.(currentQuestion),
        chose: isCorrect ? undefined : choice,
      })
    },
    [currentQuestion, feedback, round, view.answer],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    const nextIdx = qIdx + 1
    setQIdx(nextIdx)
    setView(viewOf(questions[nextIdx]))
    setSelected(null)
    setFeedback(null)
  }, [qIdx, questions])

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
          gameId="word-class-sorter"
          audience="ks3"
          title="Word Class Sorter"
          description="Read the sentence and decide the word class of the highlighted word, or what the highlighted group of words is and what it does. Remember: context changes the answer."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_LENGTH}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentQuestion && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {promptOf(currentQuestion)}
                </p>
                <p className="text-xl leading-relaxed text-foreground whitespace-pre-line">
                  {renderSentence(currentQuestion.sentence, currentQuestion.targetWord)}
                </p>
                {currentQuestion.source && (
                  <p className="text-xs text-muted-foreground">{currentQuestion.source}</p>
                )}
              </div>

              {/* Options */}
              <div
                className={cn(
                  'grid gap-3',
                  // Four options: two by two, or one column for a clause's job.
                  view.options.some((o) => o.length > 22) ? 'grid-cols-1' : 'grid-cols-2',
                )}
              >
                {view.options.map((opt) => {
                  const isAnswer = opt === view.answer
                  const isPicked = opt === selected
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-semibold transition-all outline-none',
                        opt.length > 22 && 'text-start',
                        'focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent active:translate-y-px',
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
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'space-y-2 rounded-lg px-4 py-3 text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      {feedback === 'correct' ? (
                        <>
                          <CheckCircle className="size-4" /> Spot on. Nicely done.
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" />{' '}
                          {currentQuestion.prompt ? (
                            <>Not quite. The best answer is in green.</>
                          ) : (
                            <>
                              Not quite. It is {/^[aeiou]/i.test(view.answer) ? 'an' : 'a'}{' '}
                              <span className="font-bold">{view.answer.toLowerCase()}</span>.
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <AnswerExplanation
                    game="word-class-sorter"
                    question={BANK.key(currentQuestion)}
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
