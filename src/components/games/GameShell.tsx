'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'
import {
  percentageToGCSEGrade,
  gcseGradeColor,
  gcseGradeBg,
  getGradeRecommendation,
  type GCSEGrade,
} from '@/lib/grades'
import { saveGameScore, getHighScore, scoreToGrade } from '@/lib/game-scores'

// ─── Types ──────────────────────────────────────────────────────────────────

export type GameState = 'idle' | 'playing' | 'paused' | 'finished'

export interface GameShellProps {
  /** Unique identifier used for score persistence */
  gameId: string
  /** Display title */
  title: string
  /** Short description shown beneath the title */
  description?: string
  /** Difficulty label */
  difficulty?: 'Foundation' | 'Crossover' | 'Higher'
  /** Current score — controlled by the game */
  score: number
  /** Maximum possible score — controlled by the game */
  maxScore: number
  /** Enable countdown timer (seconds). Omit for untimed games. */
  timeLimitSeconds?: number
  /** Called when the game should start / restart */
  onStart: () => void
  /** Called when the game is paused */
  onPause?: () => void
  /** Called when the game is resumed */
  onResume?: () => void
  /** Called when the game ends (timeout or manual finish) */
  onFinish: () => void
  /** External game state override — lets the game itself trigger finish */
  gameState: GameState
  /** The game content rendered inside the shell */
  children: React.ReactNode
  /** Optional extra className on the outer wrapper */
  className?: string
}

// ─── Difficulty Badge ───────────────────────────────────────────────────────

const DIFFICULTY_STYLES: Record<string, string> = {
  Foundation: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Crossover: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Higher: 'bg-red-500/10 text-red-400 border-red-500/20',
}

function DifficultyBadge({ level }: { level: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        DIFFICULTY_STYLES[level] ?? 'bg-cream-100 text-muted-foreground border-border'
      )}
    >
      {level}
    </span>
  )
}

// ─── Timer Display ──────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

// ─── Icons (inline SVG to avoid extra deps) ─────────────────────────────────

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  )
}

function RestartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.49 9A9 9 0 0 0 5.64 5.64L4 7m16 10-1.64 1.36A9 9 0 0 1 3.51 15" />
    </svg>
  )
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

// ─── Results Screen ─────────────────────────────────────────────────────────

interface ResultsProps {
  score: number
  maxScore: number
  elapsedSeconds: number
  timed: boolean
  onPlayAgain: () => void
}

function ResultsScreen({ score, maxScore, elapsedSeconds, timed, onPlayAgain }: ResultsProps) {
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
  const grade = percentageToGCSEGrade(percentage)
  const recommendation = getGradeRecommendation(grade)

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {/* Grade circle */}
      <div
        className={cn(
          'flex h-28 w-28 items-center justify-center rounded-full border-4',
          gcseGradeBg(grade),
          grade >= 8
            ? 'border-emerald-500/40'
            : grade >= 6
              ? 'border-blue-500/40'
              : grade >= 4
                ? 'border-amber-500/40'
                : 'border-red-500/40'
        )}
      >
        <div className="text-center">
          <div className={cn('text-4xl font-bold', gcseGradeColor(grade))}>{grade}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Grade</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-foreground">
            {score}/{maxScore}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="h-8 w-px bg-border" />
        <div>
          <div className="text-2xl font-bold text-foreground">{percentage}%</div>
          <div className="text-xs text-muted-foreground">Accuracy</div>
        </div>
        {timed && (
          <>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">
                {formatTime(elapsedSeconds)}
              </div>
              <div className="text-xs text-muted-foreground">Time</div>
            </div>
          </>
        )}
      </div>

      {/* Recommendation */}
      {recommendation && (
        <p className="max-w-md text-center text-sm leading-relaxed text-muted-foreground">
          {recommendation}
        </p>
      )}

      {/* Play Again */}
      <button
        onClick={onPlayAgain}
        className="mt-2 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/85 hover:shadow-md hover:shadow-primary/15 active:translate-y-px"
      >
        <RestartIcon className="h-4 w-4" />
        Play Again
      </button>
    </div>
  )
}

// ─── GameShell Component ────────────────────────────────────────────────────

export default function GameShell({
  gameId,
  title,
  description,
  difficulty,
  score,
  maxScore,
  timeLimitSeconds,
  onStart,
  onPause,
  onResume,
  onFinish,
  gameState,
  children,
  className,
}: GameShellProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimitSeconds ?? 0)
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const hasFinishedRef = useRef(false)

  // High score from localStorage
  const [highScore, setHighScore] = useState<{
    score: number
    maxScore: number
    percentage: number
    grade: GCSEGrade
  } | null>(null)

  // Load high score on mount
  useEffect(() => {
    setHighScore(getHighScore(gameId))
  }, [gameId])

  // Timer logic
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setElapsed((e) => e + 1)
        if (timeLimitSeconds) {
          setTimeLeft((t) => {
            if (t <= 1) {
              // Time's up — trigger finish
              onFinish()
              return 0
            }
            return t - 1
          })
        }
      }, 1000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [gameState, timeLimitSeconds, onFinish])

  // Save score when game finishes
  useEffect(() => {
    if (gameState === 'finished' && !hasFinishedRef.current) {
      hasFinishedRef.current = true
      saveGameScore(gameId, score, maxScore)
      setHighScore(getHighScore(gameId))
    }
    if (gameState !== 'finished') {
      hasFinishedRef.current = false
    }
  }, [gameState, gameId, score, maxScore])

  const handleStart = useCallback(() => {
    setTimeLeft(timeLimitSeconds ?? 0)
    setElapsed(0)
    onStart()
  }, [timeLimitSeconds, onStart])

  const handlePlayAgain = useCallback(() => {
    setTimeLeft(timeLimitSeconds ?? 0)
    setElapsed(0)
    onStart()
  }, [timeLimitSeconds, onStart])

  const handlePauseResume = useCallback(() => {
    if (gameState === 'playing') {
      onPause?.()
    } else if (gameState === 'paused') {
      onResume?.()
    }
  }, [gameState, onPause, onResume])

  // Live grade indicator
  const liveGrade = maxScore > 0 ? scoreToGrade(score, maxScore) : null

  return (
    <div
      className={cn(
        'mx-auto w-full max-w-4xl rounded-2xl border border-border bg-card',
        className
      )}
    >
      {/* ── Header ───────────────────────────────────────────── */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-6 py-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-lg font-bold text-foreground">{title}</h2>
            {difficulty && <DifficultyBadge level={difficulty} />}
          </div>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {/* Score / High Score / Timer cluster */}
        {gameState !== 'idle' && (
          <div className="flex items-center gap-4 shrink-0">
            {/* Live grade */}
            {liveGrade && gameState === 'playing' && (
              <div className="text-center">
                <div
                  className={cn(
                    'text-xl font-bold transition-colors duration-300',
                    gcseGradeColor(liveGrade)
                  )}
                >
                  {liveGrade}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Grade
                </div>
              </div>
            )}

            {/* Current score */}
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">
                {score}/{maxScore}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Score
              </div>
            </div>

            {/* High score */}
            {highScore && (
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <TrophyIcon className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-sm font-semibold text-amber-400">
                    {highScore.percentage}%
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Best
                </div>
              </div>
            )}

            {/* Timer */}
            {timeLimitSeconds != null && gameState !== 'finished' && (
              <div className="text-center">
                <div
                  className={cn(
                    'text-xl font-bold tabular-nums',
                    timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-foreground'
                  )}
                >
                  {formatTime(timeLeft)}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Time
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="px-6 py-6">
        {gameState === 'idle' && (
          <div className="flex flex-col items-center gap-6 py-12">
            <p className="text-center text-sm text-muted-foreground">
              {description ?? 'Press Start to begin the game.'}
            </p>

            {highScore && (
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
                <TrophyIcon className="h-4 w-4 text-amber-400" />
                <span className="text-sm text-muted-foreground">
                  Best:{' '}
                  <span className={cn('font-semibold', gcseGradeColor(highScore.grade))}>
                    Grade {highScore.grade}
                  </span>{' '}
                  ({highScore.percentage}%)
                </span>
              </div>
            )}

            <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/85 hover:shadow-md hover:shadow-primary/15 active:translate-y-px"
            >
              <PlayIcon className="h-5 w-5" />
              Start Game
            </button>
          </div>
        )}

        {(gameState === 'playing' || gameState === 'paused') && (
          <>
            {/* Pause overlay */}
            {gameState === 'paused' && (
              <div className="mb-4 flex items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3">
                <span className="text-sm font-medium text-amber-400">
                  Game Paused
                </span>
              </div>
            )}

            {/* Game content */}
            <div className={gameState === 'paused' ? 'pointer-events-none opacity-40' : ''}>
              {children}
            </div>
          </>
        )}

        {gameState === 'finished' && (
          <ResultsScreen
            score={score}
            maxScore={maxScore}
            elapsedSeconds={elapsed}
            timed={timeLimitSeconds != null}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </div>

      {/* ── Footer Controls ──────────────────────────────────── */}
      {(gameState === 'playing' || gameState === 'paused') && (
        <div className="flex items-center justify-end gap-2 border-t border-border px-6 py-3">
          {onPause && (
            <button
              onClick={handlePauseResume}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-cream-100 hover:text-foreground"
            >
              {gameState === 'playing' ? (
                <>
                  <PauseIcon className="h-3.5 w-3.5" /> Pause
                </>
              ) : (
                <>
                  <PlayIcon className="h-3.5 w-3.5" /> Resume
                </>
              )}
            </button>
          )}
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-cream-100 hover:text-foreground"
          >
            <RestartIcon className="h-3.5 w-3.5" /> Restart
          </button>
          <button
            onClick={onFinish}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            Finish
          </button>
        </div>
      )}
    </div>
  )
}

export { type GameState as GameShellState }
