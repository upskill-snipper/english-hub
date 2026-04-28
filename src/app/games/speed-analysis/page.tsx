'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, Clock, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface AnalysisQuestion {
  extract: string
  source: string
  correctDevice: string
  options: string[]
}

const QUESTIONS: AnalysisQuestion[] = [
  {
    extract: '"The sea was a boiling cauldron of fury."',
    source: 'Example prose',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
  },
  {
    extract: '"Her smile was like the sun breaking through clouds."',
    source: 'Example prose',
    correctDevice: 'Simile',
    options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
  },
  {
    extract: '"The wind howled and the trees groaned under its weight."',
    source: 'Example prose',
    correctDevice: 'Personification',
    options: ['Personification', 'Pathetic fallacy', 'Onomatopoeia', 'Metaphor'],
  },
  {
    extract: '"Peter Piper picked a peck of pickled peppers."',
    source: 'Traditional tongue-twister',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Assonance', 'Sibilance', 'Consonance'],
  },
  {
    extract: '"The rain set early in to-night,\nThe sullen wind was soon awake."',
    source: "Porphyria's Lover — Browning",
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Personification', 'Imagery', 'Symbolism'],
  },
  {
    extract: '"My love is like a red, red rose\nThat\'s newly sprung in June."',
    source: 'A Red, Red Rose — Burns',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Symbolism', 'Alliteration'],
  },
  {
    extract: '"I have told you a million times to clean your room!"',
    source: 'Example dialogue',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Irony', 'Rhetorical question', 'Metaphor'],
  },
  {
    extract: '"The soft, silky sound of the stream slipped through the stones."',
    source: 'Example prose',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Alliteration', 'Onomatopoeia', 'Assonance'],
  },
  {
    extract: '"The buzz of bees and the hiss of the kettle filled the kitchen."',
    source: 'Example prose',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Alliteration', 'Sibilance', 'Personification'],
  },
  {
    extract: '"Is this a dagger which I see before me,\nThe handle toward my hand?"',
    source: 'Macbeth — Shakespeare',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Soliloquy', 'Metaphor', 'Allusion'],
  },
  {
    extract:
      '"Bent double, like old beggars under sacks,\nKnock-kneed, coughing like hags, we cursed through sludge."',
    source: 'Dulce et Decorum Est — Owen',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Hyperbole', 'Imagery'],
  },
  {
    extract: '"Look on my Works, ye Mighty, and despair!\nNothing beside remains."',
    source: 'Ozymandias — Shelley',
    correctDevice: 'Irony',
    options: ['Irony', 'Hyperbole', 'Imperative', 'Juxtaposition'],
  },
  {
    extract: '"I wandered lonely as a cloud\nThat floats on high o\'er vales and hills."',
    source: 'Daffodils — Wordsworth',
    correctDevice: 'Simile',
    options: ['Simile', 'Personification', 'Metaphor', 'Pathetic fallacy'],
  },
  {
    extract: '"Out, out, brief candle!"',
    source: 'Macbeth — Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Personification', 'Imperative', 'Apostrophe'],
  },
  {
    extract: '"It was the best of times,\nit was the worst of times."',
    source: 'A Tale of Two Cities — Dickens',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Irony', 'Parallelism'],
  },
  {
    extract: '"The child is father of the man."',
    source: 'My Heart Leaps Up — Wordsworth',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Irony', 'Metaphor'],
  },
  {
    extract: '"A deafening silence filled the room after the verdict."',
    source: 'Example prose',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Hyperbole', 'Juxtaposition'],
  },
  {
    extract: '"The stars danced playfully in the moonlit sky."',
    source: 'Example prose',
    correctDevice: 'Personification',
    options: ['Personification', 'Metaphor', 'Simile', 'Pathetic fallacy'],
  },
  {
    extract:
      '"Let us go then, you and I,\nWhen the evening is spread out against the sky\nLike a patient etherised upon a table."',
    source: 'Prufrock — Eliot',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Enjambment', 'Imagery'],
  },
  {
    extract: '"My mother bore me in the southern wild,\nAnd I am black, but O! my soul is white."',
    source: 'The Little Black Boy — Blake',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Irony', 'Metaphor', 'Oxymoron'],
  },
  {
    extract: '"I celebrate myself, and sing myself,\nAnd what I assume you shall assume."',
    source: 'Song of Myself — Whitman',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Repetition', 'Parallelism', 'Alliteration'],
  },
  {
    extract: '"The fog comes\non little cat feet."',
    source: 'Fog — Sandburg',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Imagery'],
  },
  {
    extract: '"Season of mists and mellow fruitfulness,\nClose bosom-friend of the maturing sun."',
    source: 'To Autumn — Keats',
    correctDevice: 'Personification',
    options: ['Personification', 'Alliteration', 'Pathetic fallacy', 'Apostrophe'],
  },
  {
    extract: '"Half a league, half a league,\nHalf a league onward,"',
    source: 'Charge of the Light Brigade — Tennyson',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Anaphora', 'Alliteration', 'Rhythm'],
  },
  {
    extract: '"Meanwhile the mind, from pleasure less,\nWithdraws into its happiness."',
    source: 'The Garden — Marvell',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Irony', 'Oxymoron', 'Enjambment'],
  },
  {
    extract: '"Tyger Tyger, burning bright,\nIn the forests of the night."',
    source: 'The Tyger — Blake',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Alliteration', 'Repetition', 'Symbolism'],
  },
  {
    // UK rights notice: Robert Frost died 1963; UK copyright (CDPA 1988 §12: life
    // + 70 years) expires 31 December 2033. Frost is public domain in the United
    // States, but not in the UK. The quotation below is a 14-word fair-dealing
    // extract for criticism/teaching; do not expand it without legal review.
    extract: '"And miles to go before I sleep,\nAnd miles to go before I sleep."',
    source:
      '"Stopping by Woods on a Snowy Evening" — Robert Frost (fair-dealing extract; UK copyright until 2034)',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Anaphora', 'Refrain', 'Enjambment'],
  },
  {
    extract: '"The yellow smoke that rubs its muzzle on the window-panes."',
    source: 'Prufrock — Eliot',
    correctDevice: 'Personification',
    options: ['Personification', 'Metaphor', 'Imagery', 'Simile'],
  },
  {
    extract:
      '"I should have been a pair of ragged claws\nScuttling across the floors of silent seas."',
    source: 'Prufrock — Eliot',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Synecdoche', 'Imagery'],
  },
  {
    extract: '"No man is an island,\nEntire of itself."',
    source: 'Devotions — Donne',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Allusion'],
  },
]

const SECONDS_PER_QUESTION = 30
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

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SpeedAnalysisPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<AnalysisQuestion[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<string | null>(null)
  const [timer, setTimer] = useState(SECONDS_PER_QUESTION)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentQ = questions[qIdx] ?? null

  // Timer countdown per question
  useEffect(() => {
    if (gameState !== 'playing' || answered) return
    timerRef.current = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          // Time up for this question - skip
          handleAnswer(null)
          return SECONDS_PER_QUESTION
        }
        return t - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [gameState, qIdx, answered])

  const handleStart = useCallback(() => {
    const shuffled = shuffle(QUESTIONS).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(shuffled)
    setQIdx(0)
    setScore(0)
    setAnswered(null)
    setTimer(SECONDS_PER_QUESTION)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    setGameState('finished')
  }, [])

  const handleAnswer = useCallback(
    (choice: string | null) => {
      if (answered) return
      if (timerRef.current) clearInterval(timerRef.current)
      setAnswered(choice)
      if (choice && currentQ && choice === currentQ.correctDevice) {
        setScore((s) => s + 1)
      }
      // Auto-advance after a short delay
      setTimeout(() => {
        if (qIdx + 1 >= questions.length) {
          setGameState('finished')
        } else {
          setQIdx((i) => i + 1)
          setAnswered(null)
          setTimer(SECONDS_PER_QUESTION)
        }
      }, 1200)
    },
    [answered, currentQ, qIdx, questions.length],
  )

  const timerColor =
    timer <= 5 ? 'text-red-400' : timer <= 15 ? 'text-clay-600' : 'text-muted-foreground'

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
          gameId="speed-analysis"
          title="Speed Analysis"
          description="Identify the literary device in each extract. 30 seconds per question, 20 questions per round."
          difficulty="Higher"
          score={score}
          maxScore={questions.length || QUESTIONS_PER_ROUND}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {currentQ && (
            <div className="space-y-6">
              {/* Progress + Timer */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Question {qIdx + 1} of {questions.length}
                </span>
                <span className={cn('flex items-center gap-1 font-mono font-bold', timerColor)}>
                  <Clock className="size-3.5" />
                  {timer}s
                </span>
              </div>

              {/* Timer bar */}
              <div className="h-1 rounded-full bg-border overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-1000 ease-linear',
                    timer <= 5 ? 'bg-red-500' : timer <= 15 ? 'bg-amber-500' : 'bg-primary',
                  )}
                  style={{ width: `${(timer / SECONDS_PER_QUESTION) * 100}%` }}
                />
              </div>

              {/* Extract */}
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-base italic text-foreground leading-relaxed whitespace-pre-line">
                  {currentQ.extract}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{currentQ.source}</p>
              </div>

              <p className="text-center text-sm font-semibold text-muted-foreground">
                What literary device is being used?
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => {
                  const isCorrect = opt === currentQ.correctDevice
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
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!answered}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-150 text-left',
                        optClass,
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
