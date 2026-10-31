'use client'

import { useEffect, useState } from 'react'
import {
  Award,
  CalendarCheck,
  CheckCheck,
  Layers,
  Medal,
  RotateCcw,
  Star,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react'

import { fillText } from '@/components/games/fill'
import {
  LEVEL_PASSES,
  TOP_LEVEL,
  XP_PERFECT,
  gameRecord,
  type GameAchievementId,
  type GameRecord,
  type RoundOutcome,
} from '@/lib/games/progression'
import { playerLevel, readPlayer } from '@/lib/games/quest/progress'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'

/**
 * What a round of a skills game earned, under its score, and where a student
 * stands in the game, on its start screen (24 October 2026). What is rewarded,
 * and why, is in src/lib/games/progression.ts.
 *
 * Whether the run of days practised may be shown is decided by the caller
 * (mayShowStreak) and passed in: this component never works it out, so there
 * is one place to read who sees it.
 */

export const GAME_ACHIEVEMENT_WORDS: Record<
  GameAchievementId,
  { titleKey: string; descKey: string; icon: LucideIcon }
> = {
  'games-first-round': {
    titleKey: 'games.ach.first_round.name',
    descKey: 'games.ach.first_round.what',
    icon: Star,
  },
  'games-perfect': {
    titleKey: 'games.ach.perfect.name',
    descKey: 'games.ach.perfect.what',
    icon: CheckCheck,
  },
  'games-run-10': {
    titleKey: 'games.ach.run_10.name',
    descKey: 'games.ach.run_10.what',
    icon: Zap,
  },
  'games-level-2': {
    titleKey: 'games.ach.level_2.name',
    descKey: 'games.ach.level_2.what',
    icon: TrendingUp,
  },
  'games-level-3': {
    titleKey: 'games.ach.level_3.name',
    descKey: 'games.ach.level_3.what',
    icon: Medal,
  },
  'games-five-games': {
    titleKey: 'games.ach.five_games.name',
    descKey: 'games.ach.five_games.what',
    icon: Layers,
  },
  'games-hundred': {
    titleKey: 'games.ach.hundred.name',
    descKey: 'games.ach.hundred.what',
    icon: Award,
  },
  'games-comeback': {
    titleKey: 'games.ach.comeback.name',
    descKey: 'games.ach.comeback.what',
    icon: RotateCcw,
  },
}

/** The round's XP, rank, level, run and achievements, on the results screen. */
export function GameProgressPanel({
  outcome,
  showStreak,
}: {
  outcome: RoundOutcome
  showStreak: boolean
}) {
  const t = useT()
  const { rank } = outcome
  const toNext = Math.max(0, rank.needed - rank.into)
  const share = rank.needed > 0 ? Math.min(1, rank.into / rank.needed) : 0
  // The level as it now stands: the one just unlocked, else the one played.
  const level = outcome.levelUp ?? outcome.level

  return (
    <section
      aria-label={t('games.progress.title')}
      className="w-full max-w-md rounded-2xl border border-border bg-background/60 p-4 text-sm"
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-2xl font-bold tabular-nums text-foreground">
          {fillText(t('quest.xp_gain'), { n: outcome.xp })}
        </p>
        <p className="font-semibold text-foreground">
          {fillText(t('quest.player.level'), { n: rank.level })}
        </p>
      </div>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={rank.needed}
        aria-valuenow={rank.into}
        aria-label={fillText(t('quest.player.to_next'), { n: toNext })}
      >
        <div className="h-full rounded-full bg-primary" style={{ width: `${share * 100}%` }} />
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {fillText(t('quest.player.to_next'), { n: toNext })}
      </p>

      <ul className="mt-3 space-y-1.5 text-muted-foreground">
        {outcome.perfect && <li>{fillText(t('games.progress.perfect'), { n: XP_PERFECT })}</li>}
        {level !== null && (
          <li className={cn(outcome.levelUp !== null && 'font-semibold text-foreground')}>
            {outcome.levelUp !== null
              ? fillText(t('games.progress.level_up'), { n: outcome.levelUp })
              : fillText(t('games.progress.level'), { n: level, top: TOP_LEVEL })}
          </li>
        )}
        {level !== null && outcome.levelUp === null && level < TOP_LEVEL && (
          <li>
            {fillText(t('games.progress.passes'), {
              n: outcome.passes,
              total: LEVEL_PASSES,
              next: level + 1,
            })}
            <span className="block text-xs">{t('games.progress.strong')}</span>
          </li>
        )}
        {level !== null && outcome.levelUp === null && level >= TOP_LEVEL && (
          <li>{t('games.progress.top')}</li>
        )}
        {outcome.bestRun >= 2 && (
          <li>{fillText(t('games.progress.best_run'), { n: outcome.bestRun })}</li>
        )}
        {showStreak && outcome.streak > 0 && (
          <li className="flex items-center gap-1.5">
            <CalendarCheck className="size-4 shrink-0" aria-hidden="true" />
            {fillText(t('games.progress.streak'), { n: outcome.streak })}
          </li>
        )}
      </ul>

      {outcome.earned.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t('quest.achievements.new')}
          </p>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {outcome.earned.map((id) => {
              const words = GAME_ACHIEVEMENT_WORDS[id]
              const Icon = words.icon
              return (
                <li
                  key={id}
                  className="flex items-start gap-2 rounded-xl border border-amber-400/70 bg-amber-50 p-2.5 dark:bg-amber-950/30"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-white">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold leading-tight text-foreground">
                      {t(words.titleKey)}
                    </span>
                    <span className="block text-xs leading-snug text-muted-foreground">
                      {t(words.descKey)}
                    </span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <p className="mt-3 text-xs text-muted-foreground">{t('games.progress.kept')}</p>
    </section>
  )
}

/**
 * The student's rank, and their level in this game where it is dealt by
 * level, on its start screen. Read from this browser once the page has
 * loaded, so the server's page and the first render agree; nothing shows
 * before a first round anywhere.
 */
export function GameProgressLine({ gameId }: { gameId: string }) {
  const t = useT()
  const [state, setState] = useState<{ record: GameRecord; rank: number; xp: number } | null>(null)
  useEffect(() => {
    const record = gameRecord(gameId)
    const xp = readPlayer().xp
    setState({ record, rank: playerLevel(xp).level, xp })
  }, [gameId])
  if (!state || (state.xp === 0 && state.record.rounds === 0)) return null
  return (
    <p className="text-center text-sm text-muted-foreground">
      <span className="font-semibold text-foreground">
        {fillText(t('quest.player.level'), { n: state.rank })}
      </span>
      {state.record.levelled && (
        <>
          {' · '}
          {fillText(t('games.progress.level'), { n: state.record.level, top: TOP_LEVEL })}
        </>
      )}
    </p>
  )
}
