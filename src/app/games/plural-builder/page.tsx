'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface PluralWord {
  singular: string
  plural: string
  rule: string
}

const PLURAL_BANK: PluralWord[] = [
  // Regular: add -s
  { singular: 'book', plural: 'books', rule: 'Most nouns just add -s.' },
  { singular: 'car', plural: 'cars', rule: 'Most nouns just add -s.' },
  { singular: 'dog', plural: 'dogs', rule: 'Most nouns just add -s.' },
  { singular: 'table', plural: 'tables', rule: 'Most nouns just add -s.' },
  { singular: 'apple', plural: 'apples', rule: 'Most nouns just add -s.' },
  { singular: 'window', plural: 'windows', rule: 'Most nouns just add -s.' },
  { singular: 'phone', plural: 'phones', rule: 'Most nouns just add -s.' },
  { singular: 'chair', plural: 'chairs', rule: 'Most nouns just add -s.' },
  // Add -es after s, x, z, ch, sh
  { singular: 'bus', plural: 'buses', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'box', plural: 'boxes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'watch', plural: 'watches', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'dish', plural: 'dishes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'glass', plural: 'glasses', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'brush', plural: 'brushes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'fox', plural: 'foxes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'beach', plural: 'beaches', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'class', plural: 'classes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  // Consonant + y → -ies
  { singular: 'baby', plural: 'babies', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'city', plural: 'cities', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'story', plural: 'stories', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'party', plural: 'parties', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'country', plural: 'countries', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'family', plural: 'families', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'lady', plural: 'ladies', rule: 'A consonant before -y: change -y to -ies.' },
  // Vowel + y → just add -s
  { singular: 'boy', plural: 'boys', rule: 'A vowel before -y: just add -s.' },
  { singular: 'key', plural: 'keys', rule: 'A vowel before -y: just add -s.' },
  { singular: 'day', plural: 'days', rule: 'A vowel before -y: just add -s.' },
  { singular: 'toy', plural: 'toys', rule: 'A vowel before -y: just add -s.' },
  { singular: 'monkey', plural: 'monkeys', rule: 'A vowel before -y: just add -s.' },
  // -f / -fe → -ves
  { singular: 'leaf', plural: 'leaves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'knife', plural: 'knives', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'wife', plural: 'wives', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'wolf', plural: 'wolves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'shelf', plural: 'shelves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'thief', plural: 'thieves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'half', plural: 'halves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'life', plural: 'lives', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  // -o → -es
  { singular: 'tomato', plural: 'tomatoes', rule: 'Some nouns ending in -o add -es.' },
  { singular: 'potato', plural: 'potatoes', rule: 'Some nouns ending in -o add -es.' },
  { singular: 'hero', plural: 'heroes', rule: 'Some nouns ending in -o add -es.' },
  // Irregular
  { singular: 'child', plural: 'children', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'foot', plural: 'feet', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'mouse', plural: 'mice', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'person', plural: 'people', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'tooth', plural: 'teeth', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'man', plural: 'men', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'woman', plural: 'women', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'goose', plural: 'geese', rule: 'Irregular plural - you must learn this one.' },
  // Unchanged
  {
    singular: 'sheep',
    plural: 'sheep',
    rule: 'No change - the plural is the same as the singular.',
  },
  { singular: 'fish', plural: 'fish', rule: 'No change - the plural is the same as the singular.' },
  { singular: 'deer', plural: 'deer', rule: 'No change - the plural is the same as the singular.' },
  {
    singular: 'aircraft',
    plural: 'aircraft',
    rule: 'No change - the plural is the same as the singular.',
  },
  {
    singular: 'series',
    plural: 'series',
    rule: 'No change - the plural is the same as the singular.',
  },
  // Latin / Greek
  { singular: 'cactus', plural: 'cacti', rule: 'Latin origin - change -us to -i.' },
  { singular: 'fungus', plural: 'fungi', rule: 'Latin origin - change -us to -i.' },
  { singular: 'analysis', plural: 'analyses', rule: 'Greek origin - change -is to -es.' },
  { singular: 'crisis', plural: 'crises', rule: 'Greek origin - change -is to -es.' },
  { singular: 'criterion', plural: 'criteria', rule: 'Greek origin - change -on to -a.' },
  { singular: 'phenomenon', plural: 'phenomena', rule: 'Greek origin - change -on to -a.' },
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

const ROUND_SIZE = 15

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PluralBuilderPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [words, setWords] = useState<PluralWord[]>([])
  const [wIdx, setWIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const currentWord = words[wIdx] ?? null

  // Focus input on new word
  useEffect(() => {
    if (gameState === 'playing' && !feedback) {
      inputRef.current?.focus()
    }
  }, [wIdx, gameState, feedback])

  const handleStart = useCallback(() => {
    setWords(shuffle(PLURAL_BANK).slice(0, ROUND_SIZE))
    setWIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setInput('')
    setFeedback(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSubmit = useCallback(() => {
    if (!currentWord || feedback) return
    const trimmed = input.trim().toLowerCase()
    const correct = currentWord.plural.toLowerCase()
    setTotalAnswered((t) => t + 1)

    const isCorrect = trimmed === correct
    if (isCorrect) {
      setScore((s) => s + 1)
      setFeedback('correct')
    } else {
      setFeedback('wrong')
    }

    setTimeout(
      () => {
        if (wIdx + 1 >= words.length) {
          setGameState('finished')
        } else {
          setWIdx((i) => i + 1)
          setInput('')
          setFeedback(null)
        }
      },
      isCorrect ? 1800 : 2600,
    )
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
          gameId="plural-builder"
          title="Plural Builder"
          description="Read the singular noun, then type its plural. Learn the spelling rule after each one."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || words.length || ROUND_SIZE}
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
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Singular card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  One singular
                </p>
                <p className="text-3xl font-bold text-foreground">{currentWord.singular}</p>
                <p className="text-sm text-muted-foreground">
                  Now write the plural - more than one.
                </p>
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
                  placeholder="Type the plural..."
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
                  <div className="space-y-2">
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
                          <CheckCircle className="size-4" /> Brilliant! Spot on.
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> Not quite. The plural is:{' '}
                          <span className="font-bold">{currentWord.plural}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-start justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                      <Lightbulb className="size-4 shrink-0 text-primary mt-0.5" />
                      <span>
                        <span className="font-semibold text-foreground">
                          {currentWord.singular} → {currentWord.plural}
                        </span>{' '}
                        - {currentWord.rule}
                      </span>
                    </div>
                  </div>
                )}

                {!feedback && (
                  <div className="flex justify-center">
                    <Button onClick={handleSubmit} disabled={input.trim().length === 0}>
                      Check Plural
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
