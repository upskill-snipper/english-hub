'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  ChevronsUp,
  Flame,
  Map as MapIcon,
  RotateCcw,
  Star,
  Target,
} from 'lucide-react'

import {
  nextLevel,
  playerLevel,
  QUOTE_SMITH,
  readQuestProgress,
  type AchievementId,
} from '@/lib/games/quest/progress'
import type { Level, Quest } from '@/lib/games/quest/types'
import { cn } from '@/lib/utils'

import { ACHIEVEMENT_WORDS } from './achievements'
import { En, fillText, FullPanel, type T } from './challenges/shared'
import { levelTitle } from './LevelPlayer'
import type { useSfx } from './sfx'

export interface LevelSummary {
  kind: 'level' | 'review'
  level?: Level
  right: number
  total: number
  /** XP this play earned, the perfect-level bonus included. */
  xp: number
  stars: number
  newlyInked: string[]
  earned: AchievementId[]
  bestStreak: number
  /** The player's XP after this play. */
  playerXp: number
}

/** The XP counter running up to its total, once; instant for a reader who asked for less motion. */
function useCountUp(to: number, ms = 900): number {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setN(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ms)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, ms])
  return n
}

/** Stars landing one after another, each with a chime when sound is on. */
function Stars({ stars, sfx }: { stars: number; sfx: ReturnType<typeof useSfx> }) {
  // On the stable play(), not the sfx object, which is new on every render of
  // the map and would chime the stars again each time.
  const play = sfx.play
  useEffect(() => {
    const timers = Array.from({ length: stars }, (_, i) =>
      setTimeout(() => play('star'), 450 + i * 280),
    )
    return () => timers.forEach(clearTimeout)
  }, [stars, play])
  return (
    <div className="relative flex items-end justify-center gap-3" aria-hidden="true">
      {stars === 3 && <Burst />}
      {[0, 1, 2].map((i) => (
        <Star
          key={i}
          className={cn(
            i === 1 ? 'size-20 -translate-y-3' : 'size-16',
            i < stars
              ? 'q-star fill-amber-400 text-amber-500'
              : 'fill-muted text-muted-foreground/30',
          )}
          style={
            i < stars ? ({ '--q-delay': `${0.35 + i * 0.28}s` } as React.CSSProperties) : undefined
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

const BURST_COLOURS = [
  'bg-amber-400',
  'bg-orange-500',
  'bg-emerald-500',
  'bg-sky-500',
  'bg-rose-400',
]

/**
 * Specks thrown out from behind three stars as the last one lands. Placed by
 * angle rather than at random, so the server and the browser draw the same
 * thing; a reader who asked for less motion sees none of it (quest-styles).
 */
function Burst() {
  const n = 18
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {Array.from({ length: n }, (_, i) => {
        const angle = (i / n) * Math.PI * 2
        const reach = i % 2 === 0 ? 120 : 84
        return (
          <span
            key={i}
            className={cn(
              'q-burst absolute size-2.5 rounded-full opacity-0',
              i % 3 === 0 && 'size-2',
              BURST_COLOURS[i % BURST_COLOURS.length],
            )}
            style={
              {
                '--q-dx': `${Math.round(Math.cos(angle) * reach)}px`,
                '--q-dy': `${Math.round(Math.sin(angle) * reach * 0.7)}px`,
                '--q-delay': '1.05s',
              } as React.CSSProperties
            }
          />
        )
      })}
    </span>
  )
}

/**
 * The end of a level: the stars, what was earned, the panels this finish
 * inked into the student's comic, any achievement, and where to go next.
 */
export function LevelComplete({
  quest,
  summary,
  t,
  sfx,
  onMap,
  onPlayLevel,
}: {
  quest: Quest
  summary: LevelSummary
  t: T
  sfx: ReturnType<typeof useSfx>
  onMap: () => void
  onPlayLevel: (level: Level) => void
}) {
  const xp = useCountUp(summary.xp)
  const lvl = playerLevel(summary.playerXp)
  const levelledUp = lvl.level > playerLevel(summary.playerXp - summary.xp).level
  const share = summary.total > 0 ? Math.round((summary.right / summary.total) * 100) : 0
  const next = useMemo(() => nextLevel(quest, readQuestProgress(quest.slug)), [quest])
  const nextIsThis = next && summary.level && next.id === summary.level.id

  const heading = summary.kind === 'review' ? t('quest.done.review') : t('quest.done.heading')

  return (
    <div className="q-in mx-auto max-w-xl space-y-7 px-4 pb-16 pt-8 text-center sm:px-6">
      {summary.kind === 'level' && <Stars stars={summary.stars} sfx={sfx} />}
      <div className="space-y-1">
        {summary.level && (
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {levelTitle(summary.level, t)}
          </p>
        )}
        <h2 className="font-heading text-3xl text-foreground">{heading}</h2>
        <p className="text-muted-foreground">
          {fillText(t('quest.done.score'), { right: summary.right, total: summary.total })}
        </p>
      </div>

      <dl className="grid grid-cols-3 gap-2">
        <div className="rounded-2xl border-2 border-amber-400/70 bg-amber-50 p-3 dark:bg-amber-950/30 flex flex-col justify-between gap-1">
          <dt className="text-[0.7rem] leading-tight font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300">
            {t('quest.done.xp')}
          </dt>
          <dd className="font-heading text-2xl tabular-nums">+{xp}</dd>
        </div>
        <div className="rounded-2xl border-2 border-emerald-500/60 bg-emerald-50 p-3 dark:bg-emerald-950/30 flex flex-col justify-between gap-1">
          <dt className="text-[0.7rem] leading-tight font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            {t('quest.done.accuracy')}
          </dt>
          <dd className="flex items-center justify-center gap-1 font-heading text-2xl tabular-nums">
            <Target className="size-4 text-emerald-600" aria-hidden="true" />
            {share}%
          </dd>
        </div>
        <div className="rounded-2xl border-2 border-orange-500/60 bg-orange-50 p-3 dark:bg-orange-950/30 flex flex-col justify-between gap-1">
          <dt className="text-[0.7rem] leading-tight font-bold uppercase tracking-wide text-orange-700 dark:text-orange-300">
            {t('quest.done.best_run')}
          </dt>
          <dd className="flex items-center justify-center gap-1 font-heading text-2xl tabular-nums">
            <Flame className="size-4 text-orange-500" aria-hidden="true" />
            {summary.bestStreak}
          </dd>
        </div>
      </dl>

      {/* The player's level, and how far into it. */}
      <div className="space-y-1.5 text-start">
        {levelledUp && (
          <p className="q-pop mb-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2.5 text-center font-heading text-lg text-white">
            <ChevronsUp className="size-5" aria-hidden="true" />
            {fillText(t('quest.player.level_up'), { n: lvl.level })}
          </p>
        )}
        <div className="flex items-baseline justify-between text-sm">
          <span className="font-semibold">
            {fillText(t('quest.player.level'), { n: lvl.level })}
          </span>
          <span className="tabular-nums text-muted-foreground">
            {fillText(t('quest.player.to_next'), { n: lvl.needed - lvl.into })}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-[width] duration-700"
            style={{ width: `${(lvl.into / lvl.needed) * 100}%` }}
          />
        </div>
      </div>

      {summary.earned.length > 0 && (
        <section className="space-y-2.5" aria-label={t('quest.achievements.new')}>
          <h3 className="flex items-center justify-center gap-2 font-heading text-xl">
            <Award className="size-5 text-amber-500" aria-hidden="true" />
            {t('quest.achievements.new')}
          </h3>
          <ul className="space-y-2">
            {summary.earned.map((a) => {
              const words = ACHIEVEMENT_WORDS[a]
              const Icon = words.icon
              return (
                <li
                  key={a}
                  className="q-pop flex items-center gap-3 rounded-2xl border-2 border-amber-400/70 bg-amber-50 p-3 text-start dark:bg-amber-950/30"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-white shadow">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold">{t(words.titleKey)}</span>
                    <span className="block text-sm text-muted-foreground">
                      {fillText(t(words.descKey), { n: QUOTE_SMITH })}
                    </span>
                  </span>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {summary.newlyInked.length > 0 && (
        <section className="space-y-3" aria-label={t('quest.done.inked')}>
          <h3 className="flex items-center justify-center gap-2 font-heading text-xl">
            <BookOpenCheck className="size-5 text-primary" aria-hidden="true" />
            {t('quest.done.inked')}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {summary.newlyInked.map((title, i) => {
              const panel = quest.art.panels[title]
              if (!panel) return null
              return (
                <div
                  key={title}
                  className="q-ink space-y-1.5"
                  style={{ '--q-delay': `${0.6 + i * 0.25}s` } as React.CSSProperties}
                >
                  <FullPanel panel={panel} />
                  <En as="p" className="text-sm font-medium">
                    {title}
                  </En>
                </div>
              )
            })}
          </div>
        </section>
      )}

      <div className="flex flex-col gap-2.5 pt-2">
        {next && !nextIsThis && (
          <button
            type="button"
            onClick={() => onPlayLevel(next)}
            className="q-key q-key-primary flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground"
          >
            {fillText(t('quest.done.next'), { level: levelTitle(next, t) })}
            <ArrowRight className="size-5 rtl:rotate-180" aria-hidden="true" />
          </button>
        )}
        {summary.level && (
          <button
            type="button"
            onClick={() => onPlayLevel(summary.level!)}
            className="q-key flex items-center justify-center gap-2 rounded-2xl border-2 border-border bg-card px-6 py-3.5 text-base font-semibold"
          >
            <RotateCcw className="size-5" aria-hidden="true" />
            {t('quest.done.again')}
          </button>
        )}
        <button
          type="button"
          onClick={onMap}
          className="flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-muted-foreground hover:text-foreground"
        >
          <MapIcon className="size-5" aria-hidden="true" />
          {t('quest.done.map')}
        </button>
      </div>
    </div>
  )
}
