'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'
import { saveGameScore, getHighScore } from '@/lib/game-scores'
import { useT } from '@/lib/i18n/use-t'
import { RecordAnswerProvider, sendRound, useGameRound, type GameRound } from './game-round'

// ─── Types ──────────────────────────────────────────────────────────────────

export type GameState = 'idle' | 'playing' | 'paused' | 'finished'

/**
 * Who a game is written for.
 *
 * NO GAME SHOWS A GCSE GRADE (23 October 2026). Until 10 October 2026 the shell
 * turned every score into a GCSE grade from 1 to 9: during play, on the results
 * screen, and in the best-score line before a game starts. That included the
 * eighteen games for learners new to English and the twelve KS3 literacy games,
 * so a beginner who got 7 of 20 articles right in "A, An, The or Nothing?" was
 * told they were at grade 3, with advice about embedding quotations in essays
 * underneath. From 10 October only 'gcse' games showed one. On 23 October the
 * founder decided that none does: the grade was only ever a conversion of the
 * percentage, a share of questions right in a revision game is not an exam
 * result, and random play on Theme Matcher averaged "grade 7". Every game now
 * shows its score and percentage, and nothing else.
 * no-game-gives-a-gcse-grade.test.tsx renders the shell and holds it to that.
 *
 * The audience stays on every page because the same test holds it to two
 * things the page does not control, its own metadata title and the section of
 * the /games hub it is listed in, and because the learning-profile taxonomy
 * (src/lib/learning-profile/taxonomy.ts) files each game under it.
 */
export type GameAudience = 'gcse' | 'ks3' | 'eal'

export interface GameShellProps {
  /** Unique identifier used for score persistence */
  gameId: string
  /** Who the game is for. Shows nothing by itself; see GameAudience. */
  audience?: GameAudience
  /** Display title */
  title: string
  /** Short description shown beneath the title */
  description?: string
  /** Difficulty label */
  difficulty?: 'Foundation' | 'Crossover' | 'Higher'
  /** Current score - controlled by the game */
  score: number
  /** Maximum possible score - controlled by the game */
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
  /** External game state override - lets the game itself trigger finish */
  gameState: GameState
  /** The game content rendered inside the shell */
  children: React.ReactNode
  /** Optional extra className on the outer wrapper */
  className?: string
  /**
   * The page's round recorder (useGameRound in ./game-round). The page calls
   * round.record() for each answered question; the shell empties it when a
   * round starts and sends it when the round ends. Without it the shell keeps
   * its own, which only components inside the shell can reach.
   */
  round?: GameRound
  /**
   * Holds the round's countdown (timeLimitSeconds) while true, without the
   * paused overlay: for a game showing the explanation of an answer, so the
   * time a student spends reading it is not taken from the round. Time on
   * task (elapsed) still counts, because reading the explanation is study.
   */
  holdClock?: boolean
  /**
   * One line for the results screen, in the game's own terms: Grade Climber
   * names the rung of its ladder the student reached. It is the game's to
   * write, and it is never a grade, mark or prediction for the student
   * (no-game-gives-a-gcse-grade.test.tsx).
   */
  resultsNote?: React.ReactNode
}

// ─── Difficulty Badge ───────────────────────────────────────────────────────

const DIFFICULTY_STYLES: Record<string, string> = {
  Foundation: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Crossover: 'bg-amber-500/10 text-clay-600 border-amber-500/20',
  Higher: 'bg-red-500/10 text-red-400 border-red-500/20',
}

const DIFFICULTY_KEY_MAP: Record<string, string> = {
  Foundation: 'games.difficulty.foundation',
  Crossover: 'games.difficulty.crossover',
  Higher: 'games.difficulty.higher',
}

function DifficultyBadge({ level, t }: { level: string; t: (key: string) => string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        DIFFICULTY_STYLES[level] ?? 'bg-cream-100 text-muted-foreground border-border',
      )}
    >
      {DIFFICULTY_KEY_MAP[level] ? t(DIFFICULTY_KEY_MAP[level]) : level}
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
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.49 9A9 9 0 0 0 5.64 5.64L4 7m16 10-1.64 1.36A9 9 0 0 1 3.51 15"
      />
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
  note?: React.ReactNode
  onPlayAgain: () => void
}

function ResultsScreen({
  score,
  maxScore,
  elapsedSeconds,
  timed,
  note,
  onPlayAgain,
}: ResultsProps) {
  const t = useT()
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {/* The plain score, with no grade and no verdict colour. A percentage is
          a fact about this round; red for a student who got half of them right
          would be a judgement it cannot support, and a GCSE grade a claim about
          an exam it knows nothing of (see GameAudience). */}
      <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-primary/30 bg-primary/10">
        <div className="text-center">
          {/* A timed sprint can pass 99 answers, and "104/110" at the
              larger size is wider than the circle. */}
          <div
            className={cn(
              'font-bold text-foreground tabular-nums',
              `${score}/${maxScore}`.length > 5 ? 'text-2xl' : 'text-3xl',
            )}
          >
            {score}/{maxScore}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {t('games.shell.score_label')}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-foreground">{percentage}%</div>
          <div className="text-xs text-muted-foreground">{t('games.shell.accuracy_label')}</div>
        </div>
        {timed && (
          <>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">{formatTime(elapsedSeconds)}</div>
              <div className="text-xs text-muted-foreground">{t('games.shell.time_label')}</div>
            </div>
          </>
        )}
      </div>

      {/* The game's own line about this round, if it has one. */}
      {note && (
        <p className="max-w-md text-center text-sm leading-relaxed text-muted-foreground">{note}</p>
      )}

      {/* Play Again */}
      <button
        onClick={onPlayAgain}
        className="mt-2 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/85 hover:shadow-md hover:shadow-primary/15 active:translate-y-px"
      >
        <RestartIcon className="h-4 w-4" />
        {t('games.shell.play_again')}
      </button>
    </div>
  )
}

// ─── GameShell Component ────────────────────────────────────────────────────

export default function GameShell({
  gameId,
  audience,
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
  round,
  holdClock = false,
  resultsNote,
}: GameShellProps) {
  const t = useT()
  // The audience shows nothing here (see GameAudience); it is read by the test
  // that holds it to the page's metadata, and kept so that every page states it.
  void audience
  const [timeLeft, setTimeLeft] = useState(timeLimitSeconds ?? 0)
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const hasFinishedRef = useRef(false)
  // Read inside the interval, so holding the clock does not restart it.
  const holdClockRef = useRef(holdClock)
  holdClockRef.current = holdClock

  // High score from localStorage
  const [highScore, setHighScore] = useState<ReturnType<typeof getHighScore>>(null)

  // Load high score on mount
  useEffect(() => {
    setHighScore(getHighScore(gameId))
  }, [gameId])

  // Timer logic
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setElapsed((e) => e + 1)
        if (timeLimitSeconds && !holdClockRef.current) {
          setTimeLeft((t) => {
            if (t <= 1) {
              // Time's up - trigger finish
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

  // The round's answers, one per question, as the page reports them: the
  // page's own recorder when it passes one, else the shell's (for components
  // inside it, through RecordAnswerProvider). Emptied whenever a round starts.
  const ownRound = useGameRound(gameId)
  const activeRound = round ?? ownRound
  const lastStateRef = useRef<GameState>(gameState)
  useEffect(() => {
    if (
      gameState === 'playing' &&
      lastStateRef.current !== 'paused' &&
      lastStateRef.current !== 'playing'
    ) {
      activeRound.reset()
    }
    lastStateRef.current = gameState
  }, [gameState, activeRound])

  // Save score when game finishes
  useEffect(() => {
    if (gameState === 'finished' && !hasFinishedRef.current) {
      hasFinishedRef.current = true
      // Persist score AND time-on-task so the learning-profile engine can
      // weight effort and detect rushing vs. careful play.
      saveGameScore(gameId, score, maxScore, elapsed)
      setHighScore(getHighScore(gameId))
      // The round, to a signed-in student's account (nothing for a guest).
      //
      // WHAT THIS REPLACED (13 October 2026). A POST of {slug, score, time} to
      // /api/progress/games, which wrote the Supabase uuid into a table that
      // only admits the Prisma cuid: every write since May was refused, and
      // this effect swallowed the refusal. It also sent guests' scores to the
      // server to be turned away. sendRound sends signed-in students' rounds
      // only, with each question the page recorded.
      sendRound({
        source: 'skills',
        activity: gameId,
        score: Math.max(0, Math.round(score)),
        maxScore: Math.max(0, Math.round(maxScore)),
        durationSeconds: Math.min(14_400, Math.max(0, Math.round(elapsed))),
        items: activeRound.items.current,
      })
    }
    if (gameState !== 'finished') {
      hasFinishedRef.current = false
    }
  }, [gameState, gameId, score, maxScore, elapsed, activeRound])

  const handleStart = useCallback(() => {
    setTimeLeft(timeLimitSeconds ?? 0)
    setElapsed(0)
    // Restart mid-round stays 'playing', so the state change alone would not
    // empty the answers.
    activeRound.reset()
    onStart()
  }, [timeLimitSeconds, onStart, activeRound])

  const handlePlayAgain = useCallback(() => {
    setTimeLeft(timeLimitSeconds ?? 0)
    setElapsed(0)
    activeRound.reset()
    onStart()
  }, [timeLimitSeconds, onStart, activeRound])

  const handlePauseResume = useCallback(() => {
    if (gameState === 'playing') {
      onPause?.()
    } else if (gameState === 'paused') {
      onResume?.()
    }
  }, [gameState, onPause, onResume])

  return (
    <div
      className={cn('mx-auto w-full max-w-4xl rounded-2xl border border-border bg-card', className)}
    >
      {/* ── Header ───────────────────────────────────────────── */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-6 py-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* h1, not h2. This is the game's name and the only heading on the
                page: all 37 game pages served no h1 at all, measured across the
                sitemap on 20 September 2026. /games has its own h1 and does not
                use this shell, so nothing gains a second one. The classes carry
                the styling, so nothing looks different. */}
            <h1 className="text-lg font-bold text-foreground">{title}</h1>
            {difficulty && <DifficultyBadge level={difficulty} t={t} />}
          </div>
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>

        {/* Score / High Score / Timer cluster */}
        {gameState !== 'idle' && (
          <div className="flex items-center gap-4 shrink-0">
            {/* Current score */}
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">
                {score}/{maxScore}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {t('games.shell.score_label')}
              </div>
            </div>

            {/* High score */}
            {highScore && (
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <TrophyIcon className="h-3.5 w-3.5 text-clay-600" />
                  <span className="text-sm font-semibold text-clay-600">
                    {highScore.percentage}%
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {t('games.shell.best_label')}
                </div>
              </div>
            )}

            {/* Timer */}
            {timeLimitSeconds != null && gameState !== 'finished' && (
              <div className="text-center">
                <div
                  className={cn(
                    'text-xl font-bold tabular-nums',
                    timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-foreground',
                  )}
                >
                  {formatTime(timeLeft)}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {t('games.shell.time_label')}
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
              {description ?? t('games.shell.press_start_prompt')}
            </p>

            {highScore && (
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
                <TrophyIcon className="h-4 w-4 text-clay-600" />
                <span className="text-sm text-muted-foreground">
                  {t('games.shell.best_prefix')}{' '}
                  <span className="font-semibold text-foreground">
                    {highScore.score}/{highScore.maxScore} ({highScore.percentage}%)
                  </span>
                </span>
              </div>
            )}

            <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/85 hover:shadow-md hover:shadow-primary/15 active:translate-y-px"
            >
              <PlayIcon className="h-5 w-5" />
              {t('games.shell.start_game')}
            </button>
          </div>
        )}

        {(gameState === 'playing' || gameState === 'paused') && (
          <>
            {/* Pause overlay */}
            {gameState === 'paused' && (
              <div className="mb-4 flex items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3">
                <span className="text-sm font-medium text-clay-600">
                  {t('games.shell.game_paused')}
                </span>
              </div>
            )}

            {/* Game content */}
            <div className={gameState === 'paused' ? 'pointer-events-none opacity-40' : ''}>
              <RecordAnswerProvider value={activeRound.record}>{children}</RecordAnswerProvider>
            </div>
          </>
        )}

        {gameState === 'finished' && (
          <ResultsScreen
            score={score}
            maxScore={maxScore}
            elapsedSeconds={elapsed}
            timed={timeLimitSeconds != null}
            note={resultsNote}
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
                  <PauseIcon className="h-3.5 w-3.5" /> {t('games.shell.pause')}
                </>
              ) : (
                <>
                  <PlayIcon className="h-3.5 w-3.5" /> {t('games.shell.resume')}
                </>
              )}
            </button>
          )}
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-cream-100 hover:text-foreground"
          >
            <RestartIcon className="h-3.5 w-3.5" /> {t('games.shell.restart')}
          </button>
          <button
            onClick={onFinish}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            {t('games.shell.finish')}
          </button>
        </div>
      )}
    </div>
  )
}

export { type GameState as GameShellState }
