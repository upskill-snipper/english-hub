'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, Check, X, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, THEME_DATA, ALL_TEXTS, type ThemeRound } from '@/data/games/banks/theme-matcher'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The themes, the texts they are drawn from and the texts each theme appears
// in are in src/data/games/banks/theme-matcher.ts (moved there on 16 October
// 2026), and the explanation for each in
// src/data/games/explanations/theme-matcher.ts.

// Map theme-matcher's display labels to canonical set-text slugs.
// Poetry titles (e.g. Ozymandias, London) are not individual set texts - they belong
// to anthologies - so we treat them as universally available.
const TEXT_TO_SLUG: Record<string, string | null> = {
  Macbeth: 'macbeth',
  'A Christmas Carol': 'a-christmas-carol',
  'An Inspector Calls': 'an-inspector-calls',
  'Jekyll and Hyde': 'jekyll-and-hyde',
  'Romeo and Juliet': 'romeo-and-juliet',
  'Lord of the Flies': 'lord-of-the-flies',
  'Animal Farm': 'animal-farm',
  'Great Expectations': 'great-expectations',
  'Jane Eyre': 'jane-eyre',
  Frankenstein: 'frankenstein',
  'The Tempest': 'the-tempest',
  'Much Ado About Nothing': 'much-ado-about-nothing',
  // Poetry - keep visible for all boards
  Ozymandias: null,
  'London (Blake)': null,
  'War Photographer': null,
  Tissue: null,
}

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
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  // Filter texts by board: keep texts the user studies, plus all poetry (slug === null).
  const allowedTexts = useMemo(() => {
    if (!board) return [...ALL_TEXTS] as string[]
    const boardSlugs = new Set(getSetTextsForBoard(board).map((t) => t.slug))
    const filtered = ALL_TEXTS.filter((label) => {
      const slug = TEXT_TO_SLUG[label]
      // null = poetry / universal - always include
      if (slug === null) return true
      return slug ? boardSlugs.has(slug) : false
    })
    // Need at least 6 texts for a meaningful game; otherwise fall back
    return filtered.length >= 6 ? filtered : ([...ALL_TEXTS] as string[])
  }, [board])

  // Filter THEME_DATA: only include themes with at least 2 correct texts present in allowedTexts
  const filteredThemeData = useMemo(() => {
    const allowedSet = new Set(allowedTexts)
    return THEME_DATA.map((round) => ({
      ...round,
      correctTexts: round.correctTexts.filter((t) => allowedSet.has(t)),
    })).filter((round) => round.correctTexts.length >= 2)
  }, [allowedTexts])

  const [gameState, setGameState] = useState<GameState>('idle')
  const [rounds, setRounds] = useState<ThemeRound[]>([])
  const [roundIdx, setRoundIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState(false)
  // Records each answered theme for the student's account (GameShell sends it).
  const round = useGameRound('theme-matcher')

  const currentRound = rounds[roundIdx] ?? null

  const textOptions = useMemo(() => shuffle(allowedTexts), [roundIdx, gameState, allowedTexts])

  const handleStart = useCallback(() => {
    const pool = filteredThemeData.length >= TOTAL_ROUNDS ? filteredThemeData : THEME_DATA
    const shuffled = shuffle(pool).slice(0, TOTAL_ROUNDS)
    setRounds(shuffled)
    setRoundIdx(0)
    setScore(0)
    setMaxScore(0)
    setSelected(new Set())
    setSubmitted(false)
    setGameState('playing')
  }, [filteredThemeData])

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
    for (const t of allowedTexts) {
      const isCorrect = correctSet.has(t)
      const wasSelected = selected.has(t)
      if (isCorrect === wasSelected) roundCorrect++
    }
    setScore((s) => s + roundCorrect)
    setMaxScore((m) => m + allowedTexts.length)
    // Recorded as right only when every text in the grid was placed right. The
    // student picks texts rather than one option, so no choice is recorded.
    round.record({
      question: BANK.key(currentRound),
      correct: roundCorrect === allowedTexts.length,
      tag: currentRound.theme,
    })
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
          gameId="theme-matcher"
          audience="gcse"
          title="Theme Matcher"
          description="Select ALL texts where the given theme appears. 15 rounds covering major GCSE themes."
          difficulty="Higher"
          score={score}
          maxScore={maxScore}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
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
                <h3 className="text-xl font-bold text-foreground">{currentRound.theme}</h3>
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
                      stateClass = 'border-amber-500 bg-amber-500/10 text-clay-600'
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
                        stateClass,
                      )}
                    >
                      {text}
                      {submitted && isCorrect && isSelected && (
                        <Check className="absolute top-1 end-1 size-3 text-emerald-400" />
                      )}
                      {submitted && !isCorrect && isSelected && (
                        <X className="absolute top-1 end-1 size-3 text-red-400" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* How the theme shows in each text that has it (16 October 2026). */}
              {submitted && (
                <AnswerExplanation
                  game="theme-matcher"
                  question={BANK.key(currentRound)}
                  correct={allowedTexts.every(
                    (t) => currentRound.correctTexts.includes(t) === selected.has(t),
                  )}
                />
              )}

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
