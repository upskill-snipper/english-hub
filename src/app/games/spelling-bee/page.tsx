'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, Volume2, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface SpellingWord {
  word: string
  definition: string
  difficulty: 1 | 2 | 3
}

const SPELLING_BANK: SpellingWord[] = [
  // Difficulty 1 - Foundation
  { word: 'definitely', definition: 'Without doubt; certainly', difficulty: 1 },
  { word: 'separate', definition: 'To divide or keep apart', difficulty: 1 },
  { word: 'necessary', definition: 'Required; essential', difficulty: 1 },
  {
    word: 'environment',
    definition: 'The surroundings or conditions in which something exists',
    difficulty: 1,
  },
  { word: 'beginning', definition: 'The start or first part of something', difficulty: 1 },
  { word: 'occurred', definition: 'Happened or took place', difficulty: 1 },
  { word: 'disappoint', definition: 'To fail to meet expectations', difficulty: 1 },
  {
    word: 'argument',
    definition: 'A reason or set of reasons given in support of an idea',
    difficulty: 1,
  },
  { word: 'receive', definition: 'To be given or presented with something', difficulty: 1 },
  { word: 'achieve', definition: 'To successfully reach a goal', difficulty: 1 },
  { word: 'conscience', definition: 'An inner feeling of right and wrong', difficulty: 1 },
  { word: 'privilege', definition: 'A special right or advantage', difficulty: 1 },
  { word: 'accommodate', definition: 'To provide space or lodging for', difficulty: 1 },
  { word: 'embarrass', definition: 'To cause someone to feel awkward or ashamed', difficulty: 1 },
  // Difficulty 2 - Crossover
  {
    word: 'metaphor',
    definition: 'A figure of speech comparing two unlike things directly',
    difficulty: 2,
  },
  { word: 'simile', definition: 'A comparison using "like" or "as"', difficulty: 2 },
  {
    word: 'allegory',
    definition: 'A story with a hidden moral or political meaning',
    difficulty: 2,
  },
  {
    word: 'soliloquy',
    definition: 'A speech where a character speaks thoughts aloud alone',
    difficulty: 2,
  },
  {
    word: 'juxtaposition',
    definition: 'Placing two things side by side for contrast',
    difficulty: 2,
  },
  { word: 'onomatopoeia', definition: 'Words that imitate the sound they describe', difficulty: 2 },
  { word: 'alliteration', definition: 'Repetition of initial consonant sounds', difficulty: 2 },
  {
    word: 'personification',
    definition: 'Giving human qualities to non-human things',
    difficulty: 2,
  },
  { word: 'denouement', definition: 'The final resolution of a story', difficulty: 2 },
  { word: 'protagonist', definition: 'The leading character in a story', difficulty: 2 },
  { word: 'antagonist', definition: 'The character who opposes the protagonist', difficulty: 2 },
  {
    word: 'foreshadowing',
    definition: 'Hints at what will happen later in the story',
    difficulty: 2,
  },
  { word: 'verisimilitude', definition: 'The appearance of being true or real', difficulty: 2 },
  {
    word: 'enjambment',
    definition: 'A sentence running over a line break in poetry',
    difficulty: 2,
  },
  // Difficulty 3 - Higher
  { word: 'sycophantic', definition: 'Behaving in a servile way to gain advantage', difficulty: 3 },
  {
    word: 'anachronism',
    definition: 'Something placed in the wrong historical period',
    difficulty: 3,
  },
  {
    word: 'didacticism',
    definition: 'The practice of conveying moral instruction in literature',
    difficulty: 3,
  },
  {
    word: 'catharsis',
    definition: 'The release of strong emotions through art or drama',
    difficulty: 3,
  },
  { word: 'polysyllabic', definition: 'Having many syllables', difficulty: 3 },
  { word: 'ephemeral', definition: 'Lasting for only a short time', difficulty: 3 },
  {
    word: 'magnanimous',
    definition: 'Generous or forgiving, especially towards a rival',
    difficulty: 3,
  },
  { word: 'melancholic', definition: 'Feeling or expressing pensive sadness', difficulty: 3 },
  {
    word: 'idiosyncratic',
    definition: 'Peculiar or individual in behaviour or style',
    difficulty: 3,
  },
  { word: 'perfunctory', definition: 'Carried out without real interest or care', difficulty: 3 },
  {
    word: 'acquiesce',
    definition: 'To accept something reluctantly without protest',
    difficulty: 3,
  },
  {
    word: 'bourgeoisie',
    definition: 'The middle class, especially regarded as materialistic',
    difficulty: 3,
  },
  { word: 'dichotomy', definition: 'A division into two contrasting things', difficulty: 3 },
  {
    word: 'quintessential',
    definition: 'Representing the most perfect example of something',
    difficulty: 3,
  },
]

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

    setTimeout(() => {
      if (wIdx + 1 >= words.length) {
        setGameState('finished')
      } else {
        setWIdx((i) => i + 1)
        setInput('')
        setFeedback(null)
        setCorrectAnswer('')
      }
    }, 2000)
  }, [currentWord, feedback, input, wIdx, words.length])

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
            <ArrowLeft className="size-4 mr-1" />
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
          title="Spelling Bee"
          description="Listen to the word and its definition, then type the correct spelling. Difficulty increases as you progress."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || words.length || 20}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
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
