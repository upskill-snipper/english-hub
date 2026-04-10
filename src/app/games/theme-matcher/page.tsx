'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, Check, X } from 'lucide-react'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface ThemeRound {
  theme: string
  /** Every text where this theme is present */
  correctTexts: string[]
}

const ALL_TEXTS = [
  'Macbeth',
  'A Christmas Carol',
  'An Inspector Calls',
  'Jekyll and Hyde',
  'Romeo and Juliet',
  'Lord of the Flies',
  'Animal Farm',
  'Great Expectations',
  'Jane Eyre',
  'Frankenstein',
  'The Tempest',
  'Much Ado About Nothing',
  'Ozymandias',
  'London (Blake)',
  'War Photographer',
  'Tissue',
] as const

const THEME_DATA: ThemeRound[] = [
  {
    theme: 'Social inequality',
    correctTexts: ['A Christmas Carol', 'An Inspector Calls', 'Great Expectations', 'London (Blake)'],
  },
  {
    theme: 'Ambition',
    correctTexts: ['Macbeth', 'Ozymandias', 'Great Expectations', 'Frankenstein'],
  },
  {
    theme: 'Redemption',
    correctTexts: ['A Christmas Carol', 'Great Expectations', 'The Tempest'],
  },
  {
    theme: 'Good vs Evil',
    correctTexts: ['Jekyll and Hyde', 'Macbeth', 'Lord of the Flies', 'Frankenstein'],
  },
  {
    theme: 'Love and relationships',
    correctTexts: ['Romeo and Juliet', 'Much Ado About Nothing', 'Jane Eyre', 'Great Expectations'],
  },
  {
    theme: 'Power and control',
    correctTexts: ['Macbeth', 'Animal Farm', 'An Inspector Calls', 'Ozymandias', 'The Tempest'],
  },
  {
    theme: 'Guilt and conscience',
    correctTexts: ['Macbeth', 'An Inspector Calls', 'A Christmas Carol', 'War Photographer'],
  },
  {
    theme: 'The supernatural',
    correctTexts: ['Macbeth', 'Jekyll and Hyde', 'A Christmas Carol', 'Frankenstein', 'The Tempest'],
  },
  {
    theme: 'Isolation and loneliness',
    correctTexts: ['Frankenstein', 'Jane Eyre', 'Jekyll and Hyde', 'War Photographer'],
  },
  {
    theme: 'Conflict and violence',
    correctTexts: ['Romeo and Juliet', 'Macbeth', 'Lord of the Flies', 'Animal Farm', 'War Photographer'],
  },
  {
    theme: 'Appearance vs Reality',
    correctTexts: ['Macbeth', 'Jekyll and Hyde', 'Much Ado About Nothing', 'An Inspector Calls', 'Great Expectations'],
  },
  {
    theme: 'Family and duty',
    correctTexts: ['Romeo and Juliet', 'An Inspector Calls', 'A Christmas Carol', 'Great Expectations'],
  },
  {
    theme: 'Justice and morality',
    correctTexts: ['An Inspector Calls', 'Animal Farm', 'A Christmas Carol', 'The Tempest'],
  },
  {
    theme: 'Identity and self-discovery',
    correctTexts: ['Jekyll and Hyde', 'Jane Eyre', 'Great Expectations', 'Frankenstein', 'Tissue'],
  },
  {
    theme: 'Nature and the environment',
    correctTexts: ['Frankenstein', 'Lord of the Flies', 'The Tempest', 'London (Blake)', 'Ozymandias'],
  },
  {
    theme: 'Corruption of innocence',
    correctTexts: ['Lord of the Flies', 'Macbeth', 'A Christmas Carol', 'Great Expectations'],
  },
  {
    theme: 'Fate vs Free will',
    correctTexts: ['Romeo and Juliet', 'Macbeth', 'An Inspector Calls'],
  },
  {
    theme: 'Revolution and rebellion',
    correctTexts: ['Animal Farm', 'An Inspector Calls', 'London (Blake)', 'The Tempest'],
  },
  {
    theme: 'Memory and the past',
    correctTexts: ['A Christmas Carol', 'War Photographer', 'Ozymandias', 'Great Expectations', 'Tissue'],
  },
  {
    theme: 'Science and responsibility',
    correctTexts: ['Frankenstein', 'Jekyll and Hyde'],
  },
]

const TOTAL_ROUNDS = 15

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

export default function ThemeMatcherPage() {
  const [gameState, setGameState] = useState<GameState>('idle')
  const [rounds, setRounds] = useState<ThemeRound[]>([])
  const [roundIdx, setRoundIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState(false)

  const currentRound = rounds[roundIdx] ?? null

  const textOptions = useMemo(() => shuffle([...ALL_TEXTS]), [roundIdx, gameState])

  const handleStart = useCallback(() => {
    const shuffled = shuffle(THEME_DATA).slice(0, TOTAL_ROUNDS)
    setRounds(shuffled)
    setRoundIdx(0)
    setScore(0)
    setMaxScore(0)
    setSelected(new Set())
    setSubmitted(false)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const toggleText = (text: string) => {
    if (submitted) return
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(text)) next.delete(text)
      else next.add(text)
      return next
    })
  }

  const handleSubmitRound = () => {
    if (!currentRound || submitted) return
    setSubmitted(true)

    const correctSet = new Set(currentRound.correctTexts)
    // Score: +1 for each correct selection, +1 for each correct non-selection
    // Simplified: just count how many texts were correctly categorised
    let roundCorrect = 0
    for (const t of ALL_TEXTS) {
      const isCorrect = correctSet.has(t)
      const wasSelected = selected.has(t)
      if (isCorrect === wasSelected) roundCorrect++
    }
    setScore((s) => s + roundCorrect)
    setMaxScore((m) => m + ALL_TEXTS.length)
  }

  const handleNext = () => {
    if (roundIdx + 1 >= rounds.length) {
      setGameState('finished')
      return
    }
    setRoundIdx((i) => i + 1)
    setSelected(new Set())
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          render={<Link href="/games" />}
        >
          <ArrowLeft className="size-4 mr-1" />
          Back to Games
        </Button>

        <GameShell
          gameId="theme-matcher"
          title="Theme Matcher"
          description="Select ALL texts where the given theme appears. 15 rounds covering major GCSE themes."
          difficulty="Higher"
          score={score}
          maxScore={maxScore}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {currentRound && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Round {roundIdx + 1} of {rounds.length}
                </span>
                <span>{selected.size} selected</span>
              </div>

              {/* Theme prompt */}
              <div className="rounded-xl border border-border bg-card p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Which texts feature this theme?
                </p>
                <h3 className="text-xl font-bold text-foreground">
                  {currentRound.theme}
                </h3>
              </div>

              {/* Text grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {textOptions.map((text) => {
                  const isSelected = selected.has(text)
                  const isCorrect = currentRound.correctTexts.includes(text)
                  let stateClass = ''
                  if (submitted) {
                    if (isCorrect && isSelected)
                      stateClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                    else if (isCorrect && !isSelected)
                      stateClass = 'border-amber-500 bg-amber-500/10 text-amber-400'
                    else if (!isCorrect && isSelected)
                      stateClass = 'border-red-500 bg-red-500/10 text-red-400'
                    else stateClass = 'opacity-40'
                  } else if (isSelected) {
                    stateClass = 'border-primary bg-primary/10 text-primary'
                  }

                  return (
                    <button
                      key={text}
                      onClick={() => toggleText(text)}
                      disabled={submitted}
                      className={cn(
                        'relative rounded-lg border border-border px-3 py-2.5 text-xs font-medium transition-all duration-150 text-center',
                        !submitted && !isSelected && 'hover:border-primary/50 hover:bg-primary/5',
                        stateClass
                      )}
                    >
                      {text}
                      {submitted && isCorrect && isSelected && (
                        <Check className="absolute top-1 right-1 size-3 text-emerald-400" />
                      )}
                      {submitted && !isCorrect && isSelected && (
                        <X className="absolute top-1 right-1 size-3 text-red-400" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Submit / Next */}
              <div className="flex justify-center">
                {!submitted ? (
                  <Button onClick={handleSubmitRound} disabled={selected.size === 0}>
                    Submit Answer
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    {roundIdx + 1 >= rounds.length ? 'See Results' : 'Next Round'}
                  </Button>
                )}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
