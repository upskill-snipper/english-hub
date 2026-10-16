'use client'

import { useState, useCallback, useMemo, useRef } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, VOCAB_BANK, type VocabWord } from '@/data/games/banks/vocabulary-builder'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The words are in src/data/games/banks/vocabulary-builder.ts (moved there on
// 16 October 2026), and the explanation for each answer in
// src/data/games/explanations/vocabulary-builder.ts.

const QUESTIONS_PER_ROUND = 20

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
 * Dev-only guard: ensure the four answer options for a word are within
 * ±25% of the correct definition's character count, so players can't
 * "cheat" by picking the longest answer.
 */
function assertBalancedOptions(word: VocabWord): void {
  if (process.env.NODE_ENV === 'production') return
  const correctLen = word.definition.length
  const min = correctLen * 0.75
  const max = correctLen * 1.25
  for (const d of word.distractors) {
    if (d.length < min || d.length > max) {
      // eslint-disable-next-line no-console
      console.warn(
        `[vocab-builder] Distractor for "${word.word}" is ${d.length} chars; ` +
          `correct definition is ${correctLen} chars (allowed ${Math.round(min)}-${Math.round(max)}). ` +
          `Distractor: "${d}"`,
      )
    }
  }
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function VocabularyBuilderPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [queue, setQueue] = useState<VocabWord[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [answered, setAnswered] = useState<string | null>(null)
  const round = useGameRound('vocabulary-builder')

  // Spaced repetition: track wrong words to re-queue
  const wrongWordsRef = useRef<VocabWord[]>([])
  const masteredCountRef = useRef(0)
  const learningCountRef = useRef(0)

  const currentWord = queue[qIdx] ?? null

  // Build options for current word
  const options = useMemo(() => {
    if (!currentWord) return []
    const opts = [currentWord.definition, ...currentWord.distractors]
    return shuffle(opts)
  }, [currentWord])

  const handleStart = useCallback(() => {
    if (process.env.NODE_ENV !== 'production') {
      VOCAB_BANK.forEach(assertBalancedOptions)
    }
    const shuffled = shuffle(VOCAB_BANK).slice(0, QUESTIONS_PER_ROUND)
    setQueue(shuffled)
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setAnswered(null)
    wrongWordsRef.current = []
    masteredCountRef.current = 0
    learningCountRef.current = 0
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A click on a definition. The answer is marked, recorded for the student's
   * account, and then left on screen with its explanation until they go on.
   *
   * WHAT CHANGED (16 October 2026). The page used to move on 1.2 seconds after
   * a click, showing only green or red. Each answer now has an explanation
   * (src/data/games/explanations/vocabulary-builder.ts), which nobody can read
   * in 1.2 seconds, so the student moves on with a button. The definition
   * chosen is not recorded: definitions are sentences, not the short labels a
   * stored answer may carry (src/lib/game-results/types.ts). A word that comes
   * back for another try is recorded again, because it is answered again.
   */
  const handleAnswer = useCallback(
    (choice: string) => {
      if (answered || !currentWord) return
      setAnswered(choice)
      setTotalAnswered((t) => t + 1)

      const isCorrect = choice === currentWord.definition
      if (isCorrect) {
        setScore((s) => s + 1)
        masteredCountRef.current++
      } else {
        learningCountRef.current++
        // Spaced repetition: add wrong word back into the queue later
        wrongWordsRef.current.push(currentWord)
      }
      round.record({ question: BANK.key(currentWord), correct: isCorrect })
    },
    [answered, currentWord, round],
  )

  const handleNext = useCallback(() => {
    // Check if we need to re-inject wrong words
    let nextQueue = [...queue]
    if (qIdx + 1 >= nextQueue.length && wrongWordsRef.current.length > 0) {
      // Append wrong words for another pass
      nextQueue = [...nextQueue, ...shuffle(wrongWordsRef.current)]
      wrongWordsRef.current = []
      setQueue(nextQueue)
    }

    if (qIdx + 1 >= nextQueue.length) {
      setGameState('finished')
    } else {
      setQIdx((i) => i + 1)
      setAnswered(null)
    }
  }, [qIdx, queue])

  // The round ends after this word only if no wrong word is waiting to come back.
  const isLastQuestion = qIdx + 1 >= queue.length && wrongWordsRef.current.length === 0

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
          gameId="vocabulary-builder"
          audience="gcse"
          title="Vocabulary Builder"
          description="Select the correct definition for each word. Wrong answers reappear for spaced repetition."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || QUESTIONS_PER_ROUND}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentWord && (
            <div className="space-y-6">
              {/* Progress + Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {queue.length}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="size-3.5" /> {masteredCountRef.current} mastered
                  </span>
                  <span className="flex items-center gap-1 text-clay-600">
                    <XCircle className="size-3.5" /> {learningCountRef.current} learning
                  </span>
                </div>
              </div>

              {/* Word prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  What does this word mean?
                </p>
                <h3 className="text-2xl font-bold text-foreground">{currentWord.word}</h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {options.map((opt, i) => {
                  const isCorrect = opt === currentWord.definition
                  const isChosen = opt === answered
                  let optClass = 'border-border hover:border-primary/50 hover:bg-primary/5'
                  if (answered) {
                    if (isCorrect)
                      optClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                    else if (isChosen) optClass = 'border-red-500 bg-red-500/10 text-red-400'
                    else optClass = 'opacity-40 border-border'
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!answered}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-150 text-start',
                        optClass,
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {answered && (
                <div>
                  <AnswerExplanation
                    game="vocabulary-builder"
                    question={BANK.key(currentWord)}
                    correct={answered === currentWord.definition}
                    chosen={answered}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {isLastQuestion ? 'See your results' : 'Next question'}
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
