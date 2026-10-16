'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, Volume2, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, SPELLING_BANK, type SpellingWord } from '@/data/games/banks/spelling-bee'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The words are in src/data/games/banks/spelling-bee.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/spelling-bee.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-GB'
  utterance.rate = 0.85
  window.speechSynthesis.speak(utterance)
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SpellingBeePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [words, setWords] = useState<SpellingWord[]>([])
  const [wIdx, setWIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const round = useGameRound('spelling-bee')
  // When the last spelling was checked, for handleNext.
  const checkedAtRef = useRef(0)

  const currentWord = words[wIdx] ?? null

  // Auto-speak word when it changes
  useEffect(() => {
    if (gameState === 'playing' && currentWord && !feedback) {
      const timer = setTimeout(() => speak(currentWord.word), 300)
      return () => clearTimeout(timer)
    }
  }, [wIdx, gameState, feedback])

  // Focus input on new word
  useEffect(() => {
    if (gameState === 'playing' && !feedback) {
      inputRef.current?.focus()
    }
  }, [wIdx, gameState, feedback])

  const handleStart = useCallback(() => {
    // Progressive difficulty: start with easier words, get harder
    const easy = shuffle(SPELLING_BANK.filter((w) => w.difficulty === 1))
    const medium = shuffle(SPELLING_BANK.filter((w) => w.difficulty === 2))
    const hard = shuffle(SPELLING_BANK.filter((w) => w.difficulty === 3))
    const ordered = [...easy.slice(0, 5), ...medium.slice(0, 8), ...hard.slice(0, 7)]
    setWords(ordered)
    setWIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setInput('')
    setFeedback(null)
    setCorrectAnswer('')
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * Checks the spelling, records the answer for the student's account, and
   * leaves the word on screen with its explanation until they go on.
   *
   * WHAT CHANGED (16 October 2026). The page used to move to the next word two
   * seconds after a check. Each word now has an explanation of how to spell it
   * (src/data/games/explanations/spelling-bee.ts), so the student moves on with
   * a button. Only whether the spelling was right is recorded, never the
   * letters typed (src/components/games/game-round.tsx).
   */
  const handleSubmit = useCallback(() => {
    if (!currentWord || feedback) return
    const trimmed = input.trim().toLowerCase()
    const correct = currentWord.word.toLowerCase()
    setTotalAnswered((t) => t + 1)
    setCorrectAnswer(currentWord.word)

    if (trimmed === correct) {
      setScore((s) => s + 1)
      setFeedback('correct')
    } else {
      setFeedback('wrong')
    }
    round.record({ question: BANK.key(currentWord), correct: trimmed === correct })
    checkedAtRef.current = Date.now()
  }, [currentWord, feedback, input, round])

  const handleNext = useCallback(() => {
    // Enter checks the spelling, and the button below takes the focus at once,
    // so the same keystroke, or a second one pressed by habit, could skip the
    // explanation unread. A press in the first half-second is ignored.
    if (Date.now() - checkedAtRef.current < 500) return
    if (wIdx + 1 >= words.length) {
      setGameState('finished')
    } else {
      setWIdx((i) => i + 1)
      setInput('')
      setFeedback(null)
      setCorrectAnswer('')
    }
  }, [wIdx, words.length])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

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
          gameId="spelling-bee"
          audience="gcse"
          title="Spelling Bee"
          description="Listen to the word and its definition, then type the correct spelling. Difficulty increases as you progress."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || words.length || 20}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentWord && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Word {wIdx + 1} of {words.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      currentWord.difficulty === 1
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : currentWord.difficulty === 2
                          ? 'text-clay-600 border-amber-500/30 bg-amber-500/10'
                          : 'text-red-400 border-red-500/30 bg-red-500/10',
                    )}
                  >
                    {currentWord.difficulty === 1
                      ? 'Foundation'
                      : currentWord.difficulty === 2
                        ? 'Crossover'
                        : 'Higher'}
                  </span>
                </div>
              </div>

              {/* Definition card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
                <p className="text-sm text-muted-foreground">{currentWord.definition}</p>

                <button
                  onClick={() => speak(currentWord.word)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <Volume2 className="size-4 text-primary" />
                  Hear the word
                </button>
              </div>

              {/* Input area */}
              <div className="space-y-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={!!feedback}
                  placeholder="Type the spelling..."
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  className={cn(
                    'w-full rounded-lg border bg-card px-4 py-3 text-center text-lg font-medium text-foreground outline-none transition-all',
                    'focus:border-primary focus:ring-2 focus:ring-primary/20',
                    feedback === 'correct' &&
                      'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                    feedback === 'wrong' && 'border-red-500 bg-red-500/10 text-red-400',
                    !feedback && 'border-border',
                  )}
                />

                {/* Feedback */}
                {feedback && (
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
                        <CheckCircle className="size-4" /> Correct!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Incorrect. The answer was:{' '}
                        <span className="font-bold">{correctAnswer}</span>
                      </>
                    )}
                  </div>
                )}

                {feedback && (
                  <div>
                    {/* A typed answer: no option to explain, so no `chosen`. */}
                    <AnswerExplanation
                      game="spelling-bee"
                      question={BANK.key(currentWord)}
                      correct={feedback === 'correct'}
                    />
                    <div className="mt-4 flex justify-end">
                      <Button onClick={handleNext} autoFocus>
                        {wIdx + 1 >= words.length ? 'See your results' : 'Next word'}
                        <ArrowRight className="size-4 ms-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {!feedback && (
                  <div className="flex justify-center">
                    <Button onClick={handleSubmit} disabled={input.trim().length === 0}>
                      Check Spelling
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
