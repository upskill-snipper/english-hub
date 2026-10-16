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
import {
  BANK,
  CLASS_LABEL,
  QUESTION_BANK,
  distractorsFor,
  type Question,
  type WordClass,
} from '@/data/games/banks/word-class-sorter'

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

// Build 4-6 options: always include the correct class plus distractors drawn at
// random from the bank's pool for this question (every other class, less any the
// question withholds: see distractorsFor in the bank).
function buildOptions(question: Question): WordClass[] {
  const correct = question.wordClass
  const optionCount = 4 + Math.floor(Math.random() * 3) // 4, 5 or 6
  const distractors = shuffle(distractorsFor(question)).slice(0, optionCount - 1)
  return shuffle([correct, ...distractors])
}

// Highlight the target word inside the sentence (first whole-word match)
function renderSentence(sentence: string, target: string) {
  const lower = sentence.toLowerCase()
  const idx = lower.indexOf(target.toLowerCase())
  if (idx === -1) return <span>{sentence}</span>
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
  const [options, setOptions] = useState<WordClass[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<WordClass | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('word-class-sorter')

  const currentQuestion = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = shuffle(QUESTION_BANK).slice(0, ROUND_LENGTH)
    setQuestions(picked)
    setOptions(picked.length > 0 ? buildOptions(picked[0]) : [])
    setQIdx(0)
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
    (choice: WordClass) => {
      if (!currentQuestion || feedback) return
      const isCorrect = choice === currentQuestion.wordClass
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
        tag: currentQuestion.wordClass,
        chose: isCorrect ? undefined : CLASS_LABEL[choice],
      })
    },
    [currentQuestion, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    const nextIdx = qIdx + 1
    setQIdx(nextIdx)
    setOptions(buildOptions(questions[nextIdx]))
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
          description="Read the sentence and decide the word class of the highlighted word. Remember: context changes the answer."
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
                  What word class is the highlighted word?
                </p>
                <p className="text-xl leading-relaxed text-foreground">
                  {renderSentence(currentQuestion.sentence, currentQuestion.targetWord)}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {options.map((opt) => {
                  const isAnswer = opt === currentQuestion.wordClass
                  const isPicked = opt === selected
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-semibold transition-all outline-none',
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
                      {CLASS_LABEL[opt]}
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
                          <XCircle className="size-4" /> Not quite. It is{' '}
                          {/^[aeiou]/i.test(CLASS_LABEL[currentQuestion.wordClass]) ? 'an' : 'a'}{' '}
                          <span className="font-bold">
                            {CLASS_LABEL[currentQuestion.wordClass].toLowerCase()}
                          </span>
                          .
                        </>
                      )}
                    </div>
                  </div>
                  <AnswerExplanation
                    game="word-class-sorter"
                    question={BANK.key(currentQuestion)}
                    correct={feedback === 'correct'}
                    chosen={selected ? CLASS_LABEL[selected] : null}
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
