'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Timer, Trophy, RotateCcw, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn, shuffleArray } from '@/lib/utils'
import type { FlashcardDeck, FlashCard } from '@/data/flashcard-data'

// ─── Types ──────────────────────────────────────────────────────────────────

interface MatchPair {
  id: string
  front: string
  back: string
}

type MatchStatus = 'idle' | 'selected' | 'correct' | 'wrong'

interface MatchItem {
  id: string
  text: string
  side: 'front' | 'back'
  pairId: string
  status: MatchStatus
}

// ─── localStorage helpers ───────────────────────────────────────────────────

const BEST_TIME_KEY = 'english-hub-match-best-time'

function loadBestTime(deckId: string): number | null {
  try {
    const raw = localStorage.getItem(BEST_TIME_KEY)
    if (!raw) return null
    const data: Record<string, number> = JSON.parse(raw)
    return data[deckId] ?? null
  } catch {
    return null
  }
}

function saveBestTime(deckId: string, time: number) {
  try {
    const raw = localStorage.getItem(BEST_TIME_KEY)
    const data: Record<string, number> = raw ? JSON.parse(raw) : {}
    const prev = data[deckId]
    if (prev === undefined || time < prev) {
      data[deckId] = time
      localStorage.setItem(BEST_TIME_KEY, JSON.stringify(data))
      return true // new best
    }
    return false
  } catch {
    return false
  }
}

// ─── Constants ──────────────────────────────────────────────────────────────

const PAIRS_PER_ROUND = 6

// ─── Component ──────────────────────────────────────────────────────────────

export default function MatchGame({ deck }: { deck: FlashcardDeck }) {
  const [pairs, setPairs] = useState<MatchPair[]>([])
  const [fronts, setFronts] = useState<MatchItem[]>([])
  const [backs, setBacks] = useState<MatchItem[]>([])
  const [selectedFront, setSelectedFront] = useState<string | null>(null)
  const [selectedBack, setSelectedBack] = useState<string | null>(null)
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set())
  const [wrongPair, setWrongPair] = useState<{ front: string; back: string } | null>(null)
  const [score, setScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [elapsedMs, setElapsedMs] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [bestTime, setBestTime] = useState<number | null>(null)
  const [isNewBest, setIsNewBest] = useState(false)
  const [roundIndex, setRoundIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const totalRounds = useMemo(() => Math.ceil(deck.cards.length / PAIRS_PER_ROUND), [deck.cards.length])

  // ── Initialize round ────────────────────────────────────────────────────

  const startRound = useCallback((roundIdx: number) => {
    const start = roundIdx * PAIRS_PER_ROUND
    const end = Math.min(start + PAIRS_PER_ROUND, deck.cards.length)
    const roundCards = deck.cards.slice(start, end)

    const roundPairs: MatchPair[] = roundCards.map((c) => ({
      id: c.id,
      front: c.front,
      // Truncate long backs for matching display
      back: c.back.length > 80 ? c.back.slice(0, 80) + '...' : c.back,
    }))

    const shuffledFronts: MatchItem[] = shuffleArray(
      roundPairs.map((p) => ({
        id: `front-${p.id}`,
        text: p.front,
        side: 'front' as const,
        pairId: p.id,
        status: 'idle' as MatchStatus,
      }))
    )

    const shuffledBacks: MatchItem[] = shuffleArray(
      roundPairs.map((p) => ({
        id: `back-${p.id}`,
        text: p.back,
        side: 'back' as const,
        pairId: p.id,
        status: 'idle' as MatchStatus,
      }))
    )

    setPairs(roundPairs)
    setFronts(shuffledFronts)
    setBacks(shuffledBacks)
    setSelectedFront(null)
    setSelectedBack(null)
    setMatchedIds(new Set())
    setWrongPair(null)
  }, [deck.cards])

  // ── Start game ──────────────────────────────────────────────────────────

  const startGame = useCallback(() => {
    setRoundIndex(0)
    setScore(0)
    setMistakes(0)
    setElapsedMs(0)
    setIsRunning(true)
    setIsComplete(false)
    setIsNewBest(false)
    setBestTime(loadBestTime(deck.id))
    startRound(0)
  }, [deck.id, startRound])

  // Start on mount
  useEffect(() => {
    startGame()
  }, [startGame])

  // ── Timer ───────────────────────────────────────────────────────────────

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setElapsedMs((prev) => prev + 100)
      }, 100)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRunning])

  // ── Check completion ────────────────────────────────────────────────────

  useEffect(() => {
    if (matchedIds.size === pairs.length && pairs.length > 0) {
      // Round complete
      if (roundIndex < totalRounds - 1) {
        // Next round after a brief pause
        const timeout = setTimeout(() => {
          const next = roundIndex + 1
          setRoundIndex(next)
          startRound(next)
        }, 600)
        return () => clearTimeout(timeout)
      } else {
        // Game complete
        setIsRunning(false)
        setIsComplete(true)
        const newBest = saveBestTime(deck.id, elapsedMs)
        setIsNewBest(newBest)
        setBestTime(loadBestTime(deck.id))
      }
    }
  }, [matchedIds, pairs.length, roundIndex, totalRounds, startRound, deck.id, elapsedMs])

  // ── Handle selection ────────────────────────────────────────────────────

  const handleFrontClick = useCallback((item: MatchItem) => {
    if (matchedIds.has(item.pairId) || wrongPair) return
    setSelectedFront(item.pairId)

    // If a back is already selected, check match
    if (selectedBack) {
      if (item.pairId === selectedBack) {
        // Correct match
        setMatchedIds((prev) => { const next = new Set(Array.from(prev)); next.add(item.pairId); return next })
        setScore((s) => s + 1)
        setSelectedFront(null)
        setSelectedBack(null)
      } else {
        // Wrong match
        setWrongPair({ front: item.pairId, back: selectedBack })
        setMistakes((m) => m + 1)
        setTimeout(() => {
          setWrongPair(null)
          setSelectedFront(null)
          setSelectedBack(null)
        }, 600)
      }
    }
  }, [matchedIds, selectedBack, wrongPair])

  const handleBackClick = useCallback((item: MatchItem) => {
    if (matchedIds.has(item.pairId) || wrongPair) return
    setSelectedBack(item.pairId)

    // If a front is already selected, check match
    if (selectedFront) {
      if (item.pairId === selectedFront) {
        // Correct match
        setMatchedIds((prev) => { const next = new Set(Array.from(prev)); next.add(item.pairId); return next })
        setScore((s) => s + 1)
        setSelectedFront(null)
        setSelectedBack(null)
      } else {
        // Wrong match
        setWrongPair({ front: selectedFront, back: item.pairId })
        setMistakes((m) => m + 1)
        setTimeout(() => {
          setWrongPair(null)
          setSelectedFront(null)
          setSelectedBack(null)
        }, 600)
      }
    }
  }, [matchedIds, selectedFront, wrongPair])

  // ── Helpers ─────────────────────────────────────────────────────────────

  function getItemStatus(item: MatchItem, selectedId: string | null): string {
    if (matchedIds.has(item.pairId)) return 'matched'
    if (wrongPair && (wrongPair.front === item.pairId || wrongPair.back === item.pairId)) return 'wrong'
    if (selectedId === item.pairId) return 'selected'
    return 'idle'
  }

  function formatTime(ms: number): string {
    const totalSecs = Math.floor(ms / 1000)
    const mins = Math.floor(totalSecs / 60)
    const secs = totalSecs % 60
    const tenths = Math.floor((ms % 1000) / 100)
    return mins > 0 ? `${mins}:${secs.toString().padStart(2, '0')}.${tenths}` : `${secs}.${tenths}s`
  }

  // ── Completion screen ───────────────────────────────────────────────────

  if (isComplete) {
    return (
      <Card className="mx-auto max-w-lg">
        <CardContent className="p-8 text-center">
          <Trophy className="mx-auto mb-4 h-12 w-12 text-amber-500" />
          <h2 className="text-2xl font-bold text-foreground">Match Complete!</h2>
          <p className="mt-2 text-muted-foreground">{deck.title}</p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <p className="text-2xl font-bold text-primary">{formatTime(elapsedMs)}</p>
              <p className="mt-1 text-xs text-muted-foreground">Time</p>
            </div>
            <div className="rounded-lg bg-primary/10 p-4">
              <p className="text-2xl font-bold text-primary">{score}</p>
              <p className="mt-1 text-xs text-muted-foreground">Matches</p>
            </div>
            <div className="rounded-lg bg-amber-500/10 p-4">
              <p className="text-2xl font-bold text-amber-500">{mistakes}</p>
              <p className="mt-1 text-xs text-muted-foreground">Mistakes</p>
            </div>
          </div>

          {isNewBest && (
            <div className="mt-4 flex items-center justify-center gap-2 text-primary">
              <Zap className="h-5 w-5" />
              <span className="font-bold">New best time!</span>
            </div>
          )}

          {bestTime !== null && !isNewBest && (
            <p className="mt-4 text-sm text-muted-foreground">
              Best time: {formatTime(bestTime)}
            </p>
          )}

          <div className="mt-8">
            <Button onClick={startGame}>
              <RotateCcw className="h-4 w-4" />
              Play Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // ── Game UI ─────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">
      {/* Stats bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Timer className="h-4 w-4" />
            <span className="font-mono tabular-nums">{formatTime(elapsedMs)}</span>
          </div>
          <Badge className="bg-primary/15 text-primary">
            {score} / {deck.cards.length} matched
          </Badge>
          {mistakes > 0 && (
            <Badge className="bg-amber-500/15 text-amber-600 dark:text-clay-600">
              {mistakes} mistake{mistakes !== 1 ? 's' : ''}
            </Badge>
          )}
        </div>
        {totalRounds > 1 && (
          <span className="text-sm text-muted-foreground">
            Round {roundIndex + 1} of {totalRounds}
          </span>
        )}
      </div>

      {bestTime !== null && (
        <p className="text-xs text-muted-foreground">
          Best time: {formatTime(bestTime)}
        </p>
      )}

      {/* Match grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Fronts column */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Terms</p>
          {fronts.map((item) => {
            const status = getItemStatus(item, selectedFront)
            return (
              <button
                key={item.id}
                onClick={() => handleFrontClick(item)}
                disabled={status === 'matched'}
                className={cn(
                  'w-full rounded-lg border p-3 text-left text-sm font-medium transition-all duration-200',
                  status === 'idle' && 'border-border bg-card hover:border-primary/50 hover:bg-primary/5 cursor-pointer',
                  status === 'selected' && 'border-primary bg-primary/10 ring-2 ring-primary/30',
                  status === 'matched' && 'border-primary/30 bg-primary/10 text-primary opacity-50 cursor-default',
                  status === 'wrong' && 'border-destructive bg-destructive/10 text-destructive animate-shake',
                )}
              >
                {item.text}
              </button>
            )
          })}
        </div>

        {/* Backs column */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Definitions</p>
          {backs.map((item) => {
            const status = getItemStatus(item, selectedBack)
            return (
              <button
                key={item.id}
                onClick={() => handleBackClick(item)}
                disabled={status === 'matched'}
                className={cn(
                  'w-full rounded-lg border p-3 text-left text-sm transition-all duration-200',
                  status === 'idle' && 'border-border bg-card hover:border-primary/50 hover:bg-primary/5 cursor-pointer',
                  status === 'selected' && 'border-primary bg-primary/10 ring-2 ring-primary/30',
                  status === 'matched' && 'border-primary/30 bg-primary/10 text-primary opacity-50 cursor-default',
                  status === 'wrong' && 'border-destructive bg-destructive/10 text-destructive animate-shake',
                )}
              >
                <span className="line-clamp-3">{item.text}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
