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
import { BANK, PICTURE_BANK, type PictureItem } from '@/data/games/banks/picture-word-match'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The questions are in src/data/games/banks/picture-word-match.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/picture-word-match.ts.

const QUESTIONS_PER_ROUND = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface Question {
  item: PictureItem
  options: string[]
}

function buildQuestion(item: PictureItem): Question {
  return { item, options: shuffle([item.word, ...item.distractors]) }
}

// House style: no exclamation marks in what students read (16 October 2026).
const PRAISE = ['Brilliant.', 'Well done.', 'Great job.', 'Super.', 'Excellent.']

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PictureWordMatchPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [praise, setPraise] = useState('')
  const round = useGameRound('picture-word-match')

  const currentQuestion = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = shuffle(PICTURE_BANK).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(picked.map(buildQuestion))
    setQIdx(0)
    setScore(0)
    setSelected(null)
    setFeedback(null)
    setPraise('')
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A tap on a word. The question is marked, recorded for the student's
   * account, and then left on screen with its explanation until they choose to
   * go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next picture
   * 1.6 seconds after an answer, showing only the right word. Each answer now
   * comes with why it is right and why the word chosen is not
   * (src/data/games/explanations/picture-word-match.ts), and a learner cannot
   * read that in 1.6 seconds.
   */
  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQuestion || feedback) return
      setSelected(option)
      const isCorrect = option === currentQuestion.item.word

      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
        setPraise(PRAISE[Math.floor(Math.random() * PRAISE.length)])
      } else {
        setFeedback('wrong')
      }

      round.record({
        question: BANK.key(currentQuestion.item),
        correct: isCorrect,
        tag: currentQuestion.item.topic,
        chose: isCorrect ? undefined : option,
      })
    },
    [currentQuestion, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setSelected(null)
    setFeedback(null)
    setPraise('')
  }, [qIdx, questions.length])

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
          gameId="picture-word-match"
          audience="eal"
          title="Picture Word Match"
          description="Look at the picture and tap the English word that matches it. A friendly way to build everyday vocabulary."
          difficulty="Foundation"
          score={score}
          maxScore={questions.length || QUESTIONS_PER_ROUND}
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
                <div className="flex items-center gap-3">
                  <span>Score: {score}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    {currentQuestion.item.topic}
                  </span>
                </div>
              </div>

              {/* Picture card */}
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div
                  className="text-7xl sm:text-8xl select-none"
                  role="img"
                  aria-label="Picture to match"
                >
                  {currentQuestion.item.emoji}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Which word matches this picture?
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((option) => {
                  const isAnswer = option === currentQuestion.item.word
                  const isPicked = option === selected
                  const showCorrect = !!feedback && isAnswer
                  const showWrong = feedback === 'wrong' && isPicked && !isAnswer
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!feedback}
                      className={cn(
                        'flex items-center justify-center rounded-lg border px-4 py-5 text-lg font-medium capitalize text-foreground transition-all',
                        'min-h-[64px] outline-none focus:ring-2 focus:ring-primary/20',
                        !feedback && 'border-border hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        !!feedback && !showCorrect && !showWrong && 'border-border opacity-60',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      feedback === 'correct'
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> {praise} That&apos;s right.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The word is:{' '}
                        <span className="font-bold capitalize">{currentQuestion.item.word}</span>
                      </>
                    )}
                  </div>
                  <AnswerExplanation
                    game="picture-word-match"
                    question={BANK.key(currentQuestion.item)}
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
