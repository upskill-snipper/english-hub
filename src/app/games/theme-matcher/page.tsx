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
import { useDealer } from '@/lib/games/start-round'
import { themeRoundScore } from '@/lib/games/scoring'
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

/** A round with its own grid needs at least this many wrong texts left in it for a board. */
const MIN_WRONG_IN_GRID = 2

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

  // Filter THEME_DATA: only include themes with at least 2 correct texts present in allowedTexts.
  // A round with its own grid (24 October 2026, src/data/games/banks/theme-matcher.ts) keeps
  // only the board's texts in it too, and is dealt only while at least MIN_WRONG_IN_GRID of
  // them are wrong: a grid left holding nothing but right texts would give the answer away.
  const filteredThemeData = useMemo(() => {
    const allowedSet = new Set(allowedTexts)
    return THEME_DATA.map((round) => ({
      ...round,
      correctTexts: round.correctTexts.filter((t) => allowedSet.has(t)),
      texts: round.texts?.filter((t) => allowedSet.has(t)),
    })).filter(
      (round) =>
        round.correctTexts.length >= 2 &&
        (!round.texts || round.texts.length - round.correctTexts.length >= MIN_WRONG_IN_GRID),
    )
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
  const deal = useDealer(BANK)

  const currentRound = rounds[roundIdx] ?? null

  /**
   * A board whose texts carry too few themes for a full game plays every theme
   * against every text. Until 24 October 2026 only the themes fell back: the
   * grid kept the board's texts, so on the International A level board (six
   * texts) a theme's right texts were mostly not in the grid, 64 per cent of
   * the points could not be scored, and "Fate vs Free will" had no right text
   * to pick at all, while Submit needs one. The grid now falls back with them.
   *
   * Since the rebuild of 24 October 2026 a theme has many rounds, and no two
   * rounds of one theme are dealt in one game (the bank's `facts`), so it is
   * themes that are counted, as this rule always meant: the IAL board's own
   * texts carry 20 rounds but only ten themes, too few for fifteen rounds.
   */
  const usingAll = new Set(filteredThemeData.map((r) => r.theme)).size < TOTAL_ROUNDS
  const gridTexts = useMemo(
    () => (usingAll ? ([...ALL_TEXTS] as string[]) : allowedTexts),
    [usingAll, allowedTexts],
  )

  // The texts this round is played on: its own grid (right texts and texts plainly
  // without the theme or claim, any text that could be argued either way left out),
  // which every round has since 24 October 2026, else the board's. Marked, recorded and
  // explained against these texts only.
  const roundTexts = useMemo(() => currentRound?.texts ?? gridTexts, [currentRound, gridTexts])

  const textOptions = useMemo(() => shuffle(roundTexts), [roundIdx, gameState, roundTexts])

  const handleStart = useCallback(() => {
    // Themes this browser has not met first (src/lib/games/start-round.ts).
    const shuffled = deal(TOTAL_ROUNDS, { items: usingAll ? THEME_DATA : filteredThemeData })
    setRounds(shuffled)
    setRoundIdx(0)
    setScore(0)
    setMaxScore(0)
    setSelected(new Set())
    setSubmitted(false)
    setGameState('playing')
  }, [filteredThemeData, usingAll, deal])

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

    // SCORING (changed 23 October 2026, the founder's decision). A round is
    // worth one point for each text in the grid that has the theme: a point for
    // each of those selected, and a point taken away for each text selected that
    // does not have it, never below nought (src/lib/games/scoring.ts). Until
    // then a point was also given for every text correctly left alone, so in a
    // grid of twelve one lone right guess scored 10 of 12: leaving texts
    // unselected was rewarded, and random play averaged what the shell then
    // called "grade 7".
    const { points, outOf } = themeRoundScore(selected, currentRound.correctTexts)
    setScore((s) => s + points)
    setMaxScore((m) => m + outOf)
    // Recorded as right only when every text in the grid was placed right. The
    // student picks texts rather than one option, so no choice is recorded.
    const correctSet = new Set(currentRound.correctTexts)
    round.record({
      question: BANK.key(currentRound),
      correct: roundTexts.every((t) => correctSet.has(t) === selected.has(t)),
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
          description="Select ALL the texts where the theme appears, or where the claim about it is true. 15 rounds, from the main GCSE themes to how each text presents them. A point for each right text; a wrong one costs a point."
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
                  {currentRound.claim
                    ? `${currentRound.theme}: select every text where this is true`
                    : 'Which texts feature this theme?'}
                </p>
                <h3
                  className={cn(
                    'font-bold text-foreground',
                    currentRound.claim ? 'text-lg' : 'text-xl',
                  )}
                >
                  {currentRound.claim ?? currentRound.theme}
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
                  correct={roundTexts.every(
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
