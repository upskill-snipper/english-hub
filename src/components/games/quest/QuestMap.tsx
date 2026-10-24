'use client'

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import {
  BookImage,
  Brush,
  Crown,
  Feather,
  Lock,
  Play,
  Repeat,
  Star,
  Trophy,
  Users,
} from 'lucide-react'

import { dealLevel, PLAY_SIZE, type DealtChallenge } from '@/lib/games/quest/deal'
import {
  ACHIEVEMENTS,
  dueForReview,
  emptyPlayer,
  emptyQuest,
  finaleOpen,
  nextLevel,
  playerLevel,
  playsDealt,
  questStars,
  QUOTE_SMITH,
  readPlayer,
  readQuestProgress,
  recordDeal,
  seenFor,
  writeQuestProgress,
  type PlayerProgress,
  type QuestProgress,
} from '@/lib/games/quest/progress'
import type { Level, Quest } from '@/lib/games/quest/types'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'

import { ACHIEVEMENT_WORDS } from './achievements'
import { En, fill, fillText, type T } from './challenges/shared'
import { collectablePanels, ComicBook } from './ComicBook'
import { LevelPlayer, levelTitle, type QuestRun } from './LevelPlayer'
import { QuestStyles } from './quest-styles'
import { useSfx } from './sfx'

/**
 * One text's quest: the map of its levels, and the player over it.
 *
 * The map shows the student where they are (stars, XP, their level), what to
 * play next, every level with its best stars, the review waiting for them,
 * their copy of the comic and the achievements cabinet. Every level but the
 * finale is open from the start: a student revising one part of the story
 * goes straight to it. The finale opens once every chapter has a star.
 *
 * Given the quest as plain data by the page (src/lib/games/quest/load.ts
 * builds it on the server). The first render is the map with nothing played,
 * the same on the server and in the browser; the student's progress is read
 * after hydration, so the two never disagree.
 */
export function QuestMap({ quest }: { quest: Quest }) {
  const t = useT()
  const sfx = useSfx()
  const [qp, setQp] = useState<QuestProgress | null>(null)
  const [player, setPlayer] = useState<PlayerProgress | null>(null)
  const [due, setDue] = useState<string[]>([])
  const [playing, setPlaying] = useState<{
    run: QuestRun
    play: number
    n: number
    dealt?: DealtChallenge[]
  } | null>(null)
  const [comicOpen, setComicOpen] = useState(false)
  const opener = useRef<HTMLElement | null>(null)
  const plays = useRef(0)
  const known = useMemo(() => new Set(quest.challenges.map((c) => c.id)), [quest])

  const refresh = useCallback(() => {
    const p = readQuestProgress(quest.slug)
    setQp(p)
    setPlayer(readPlayer())
    setDue(dueForReview(p, Date.now(), known))
  }, [quest.slug, known])

  useEffect(() => refresh(), [refresh])

  const startLevel = useCallback(
    (level: Level, from?: HTMLElement | null) => {
      if (from) opener.current = from
      // The play is dealt and counted here, as it starts (24 October 2026):
      // with the challenges this browser was dealt in the level's recent
      // plays, so a replay brings new ones, and counted now, so a level left
      // part-way and started again does not deal the same play again
      // (src/lib/games/quest/deal.ts says why).
      const p = readQuestProgress(quest.slug)
      const play = playsDealt(p, level.id)
      const dealt = dealLevel(quest, level, play, seenFor(p, level))
      writeQuestProgress(
        quest.slug,
        recordDeal(
          p,
          level.id,
          dealt.map((d) => d.challenge.id),
        ),
      )
      plays.current += 1
      setPlaying({ run: { mode: 'level', level }, play, n: plays.current, dealt })
    },
    [quest],
  )

  const startReview = useCallback(
    (from: HTMLElement) => {
      opener.current = from
      const p = readQuestProgress(quest.slug)
      const ids = dueForReview(p, Date.now(), known).slice(0, PLAY_SIZE.review)
      if (ids.length === 0) return
      plays.current += 1
      setPlaying({ run: { mode: 'review', ids }, play: p.reviews, n: plays.current })
    },
    [quest.slug, known],
  )

  // Back to the map: what the play earned is on it, and focus returns to the
  // button that opened the level.
  const backToMap = useCallback(() => {
    setPlaying(null)
    setComicOpen(false)
    refresh()
    requestAnimationFrame(() => opener.current?.focus())
  }, [refresh])

  const progress = qp ?? emptyQuest()
  const me = player ?? emptyPlayer()
  const stars = questStars(quest, progress)
  const next = nextLevel(quest, progress)
  const started = Object.keys(progress.levels).length > 0
  const finale = finaleOpen(quest, progress)
  const lvl = playerLevel(me.xp)
  const panels = collectablePanels(quest)
  const inked = panels.filter((p) => progress.inked.includes(p.title)).length
  const earned = ACHIEVEMENTS.filter((a) => me.achievements[a] !== undefined).length

  return (
    <div className="space-y-8">
      <QuestStyles />

      {/* Where the student is, and the one button that takes them on. */}
      <section
        aria-label={t('quest.map.progress')}
        className="overflow-hidden rounded-3xl border-2 border-primary/15 bg-gradient-to-br from-primary/[0.07] via-card to-amber-50 p-5 dark:to-amber-950/20 sm:p-6"
      >
        <div className="flex items-center gap-4">
          <StarRing
            earned={stars.earned}
            max={stars.max}
            label={fillText(t('quest.map.stars'), { n: stars.earned, total: stars.max })}
          />
          <div className="min-w-0 flex-1 space-y-1.5">
            <p className="font-heading text-lg leading-tight">
              {fillText(t('quest.map.stars'), { n: stars.earned, total: stars.max })}
            </p>
            <p className="text-sm text-muted-foreground">
              {fillText(t('quest.player.level'), { n: lvl.level })}
              {' · '}
              <span className="tabular-nums">{fillText(t('quest.map.xp'), { n: me.xp })}</span>
            </p>
            <div className="h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-[width] duration-700"
                style={{ width: `${(lvl.into / lvl.needed) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {next ? (
          <button
            type="button"
            onClick={(e) => startLevel(next, e.currentTarget)}
            className="q-key q-key-primary mt-5 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary px-6 py-4 text-lg font-bold text-primary-foreground"
          >
            <Play className="size-5 fill-current" aria-hidden="true" />
            {fillText(started ? t('quest.map.continue') : t('quest.map.start'), {
              level: levelTitle(next, t),
            })}
          </button>
        ) : (
          <p className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-amber-100 px-4 py-3.5 text-center font-semibold text-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
            <Trophy className="size-5" aria-hidden="true" />
            {t('quest.map.all_done')}
          </p>
        )}

        {!started && (
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <HowItem icon={<Play className="size-4" aria-hidden="true" />}>
              {t('quest.map.how.levels')}
            </HowItem>
            {panels.length > 0 && (
              <HowItem icon={<Brush className="size-4" aria-hidden="true" />}>
                {t('quest.map.how.comic')}
              </HowItem>
            )}
            <HowItem icon={<Repeat className="size-4" aria-hidden="true" />}>
              {t('quest.map.how.review')}
            </HowItem>
            {quest.levels.some((l) => l.kind === 'chapter') && (
              <HowItem icon={<Crown className="size-4" aria-hidden="true" />}>
                {t('quest.map.how.finale')}
              </HowItem>
            )}
          </ul>
        )}
      </section>

      {/* Review, offered when something is due and never pressed on anyone. */}
      {started && (
        <section className="rounded-2xl border-2 border-sky-400/60 bg-sky-50 p-4 dark:bg-sky-950/30">
          <div className="flex items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white">
              <Repeat className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-heading text-lg leading-tight">{t('quest.review.title')}</h2>
              <p className="text-sm text-muted-foreground">
                {due.length === 0
                  ? t('quest.map.review_none')
                  : due.length === 1
                    ? t('quest.map.review_ready_one')
                    : fillText(t('quest.map.review_ready'), { n: due.length })}
              </p>
            </div>
          </div>
          {due.length > 0 && (
            <button
              type="button"
              onClick={(e) => startReview(e.currentTarget)}
              className="q-key mt-3 w-full rounded-2xl bg-sky-600 px-6 py-3 text-base font-bold text-white hover:bg-sky-700"
            >
              {t('quest.map.review_start')}
            </button>
          )}
        </section>
      )}

      {/* The levels, as a path. */}
      <section aria-labelledby="quest-levels">
        <h2 id="quest-levels" className="font-heading text-2xl">
          {t('quest.map.levels')}
        </h2>
        <ol className="mt-4">
          {quest.levels.map((level, i) => (
            <LevelRow
              key={level.id}
              level={level}
              last={i === quest.levels.length - 1}
              stars={progress.levels[level.id]?.stars ?? 0}
              best={progress.levels[level.id]?.best}
              isNext={next?.id === level.id}
              locked={level.kind === 'finale' && !finale}
              inked={level.panels.filter((p) => progress.inked.includes(p)).length}
              onPlay={startLevel}
              t={t}
            />
          ))}
        </ol>
      </section>

      {/* The student's copy of the comic. */}
      {panels.length > 0 && (
        <section className="rounded-2xl border-2 border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BookImage className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-heading text-lg leading-tight">{t('quest.comic.title')}</h2>
              <p className="text-sm text-muted-foreground">
                {fillText(t('quest.comic.count'), { n: inked, total: panels.length })}
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5" aria-hidden="true">
            {panels.map((p) => (
              <span
                key={p.title}
                className={cn(
                  'h-7 w-5 rounded-[3px] border-2',
                  progress.inked.includes(p.title)
                    ? 'border-orange-500 bg-gradient-to-br from-amber-300 to-orange-500'
                    : 'border-dashed border-border bg-muted/60',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={(e) => {
              opener.current = e.currentTarget
              setComicOpen(true)
            }}
            className="q-key mt-4 w-full rounded-2xl border-2 border-border bg-background px-6 py-3 text-base font-semibold"
          >
            {t('quest.comic.open')}
          </button>
        </section>
      )}

      {/* The achievements cabinet, across every text. */}
      <section aria-labelledby="quest-achievements">
        <div className="flex items-baseline justify-between gap-3">
          <h2 id="quest-achievements" className="font-heading text-2xl">
            {t('quest.achievements.title')}
          </h2>
          <p className="text-sm tabular-nums text-muted-foreground">
            {fillText(t('quest.achievements.count'), { n: earned, total: ACHIEVEMENTS.length })}
          </p>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{t('quest.achievements.note')}</p>
        <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {ACHIEVEMENTS.map((a) => {
            const words = ACHIEVEMENT_WORDS[a]
            const Icon = words.icon
            const has = me.achievements[a] !== undefined
            return (
              <li
                key={a}
                className={cn(
                  'flex flex-col items-center gap-1.5 rounded-2xl border-2 p-3 text-center',
                  has
                    ? 'border-amber-400/70 bg-amber-50 dark:bg-amber-950/30'
                    : 'border-border/70 bg-card',
                )}
              >
                <span
                  className={cn(
                    'flex size-12 items-center justify-center rounded-full',
                    has
                      ? 'bg-gradient-to-br from-amber-300 to-orange-500 text-white shadow'
                      : 'bg-muted text-muted-foreground',
                  )}
                >
                  {has ? (
                    <Icon className="size-6" aria-hidden="true" />
                  ) : (
                    <Lock className="size-5" aria-hidden="true" />
                  )}
                </span>
                <span className="text-sm font-semibold leading-tight">{t(words.titleKey)}</span>
                <span className="text-xs leading-snug text-muted-foreground">
                  {fillText(t(words.descKey), { n: QUOTE_SMITH })}
                </span>
                <span className="sr-only">
                  {has ? t('quest.achievements.earned') : t('quest.achievements.not_yet')}
                </span>
              </li>
            )
          })}
        </ul>
      </section>

      <p className="text-xs text-muted-foreground">{t('text_games.privacy')}</p>

      {/* Full screen, so rendered into <body>: inside the map they took its
          spacing (a 2rem top margin from space-y) and left a strip of the
          page showing above the player on a phone. Only ever opened by a tap,
          so never rendered on the server. */}
      {playing &&
        createPortal(
          <LevelPlayer
            key={playing.n}
            quest={quest}
            run={playing.run}
            play={playing.play}
            dealt={playing.dealt}
            sfx={sfx}
            t={t}
            onClose={backToMap}
            onPlayLevel={startLevel}
          />,
          document.body,
        )}
      {comicOpen &&
        createPortal(
          <ComicBook quest={quest} inked={progress.inked} t={t} onClose={backToMap} />,
          document.body,
        )}
    </div>
  )
}

function HowItem({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span>{children}</span>
    </li>
  )
}

/** The quest's stars as a ring filling up, with the count in the middle. */
function StarRing({ earned, max, label }: { earned: number; max: number; label: string }) {
  const r = 30
  const c = 2 * Math.PI * r
  const share = max > 0 ? earned / max : 0
  return (
    <div className="relative size-20 shrink-0" role="img" aria-label={label}>
      <svg viewBox="0 0 72 72" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="36" cy="36" r={r} fill="none" strokeWidth="7" className="stroke-muted" />
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          className="stroke-amber-500 transition-[stroke-dashoffset] duration-700"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - share)}
        />
      </svg>
      <span
        className="absolute inset-0 flex flex-col items-center justify-center"
        aria-hidden="true"
      >
        <Star className="size-5 fill-amber-400 text-amber-500" />
        <span className="text-xs font-bold tabular-nums">{earned}</span>
      </span>
    </div>
  )
}

const KIND_ICON = { cast: Users, craft: Feather, finale: Crown } as const

/**
 * One level on the path: its node, name, what it covers and its best stars.
 * The whole row is one button, named by everything on it, so a screen reader
 * hears the level, its stars and whether it is next in one go.
 */
function LevelRow({
  level,
  last,
  stars,
  best,
  isNext,
  locked,
  inked,
  onPlay,
  t,
}: {
  level: Level
  last: boolean
  stars: number
  best?: number
  isNext: boolean
  locked: boolean
  /** Of this level's panels, how many are inked. */
  inked: number
  onPlay: (level: Level, from: HTMLElement) => void
  t: T
}) {
  const Icon = level.kind === 'chapter' ? null : KIND_ICON[level.kind]
  const played = stars > 0
  const node = locked
    ? 'bg-muted text-muted-foreground'
    : stars === 3
      ? 'bg-gradient-to-br from-amber-300 to-orange-500 text-white'
      : played
        ? 'bg-emerald-600 text-white'
        : isNext
          ? 'q-pulse bg-primary text-primary-foreground'
          : 'border-2 border-border bg-card text-foreground'

  let about: ReactNode
  // Where in the text the part runs, not its first and last moments' titles,
  // which were the first and last cards of its own story order
  // (src/lib/games/quest/types.ts, Level.where).
  if (level.kind === 'chapter') {
    if (level.where)
      about =
        level.where.from === level.where.to ? (
          <En>{level.where.from}</En>
        ) : (
          fill(t('quest.map.span'), {
            from: <En>{level.where.from}</En>,
            to: <En>{level.where.to}</En>,
          })
        )
  } else if (level.kind === 'cast') about = t('quest.map.cast_about')
  else if (level.kind === 'craft') about = t('quest.map.craft_about')
  else if (level.kind === 'finale')
    about = locked ? t('quest.map.finale_locked') : t('quest.map.finale_about')

  return (
    <li className="relative pb-3">
      {/* The path from this node to the next. */}
      {!last && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute start-[2.125rem] top-14 -bottom-2 w-1 -translate-x-1/2 rounded-full rtl:translate-x-1/2',
            played ? 'bg-amber-400' : 'bg-border',
          )}
        />
      )}
      <button
        type="button"
        onClick={(e) => !locked && onPlay(level, e.currentTarget)}
        aria-disabled={locked}
        className={cn(
          'relative flex w-full items-start gap-3.5 rounded-2xl p-2 text-start transition-colors',
          locked ? 'cursor-not-allowed' : 'hover:bg-muted/60',
          isNext && 'bg-primary/[0.06] ring-2 ring-primary/30',
        )}
      >
        <span
          className={cn(
            'relative z-[1] flex size-[3.25rem] shrink-0 items-center justify-center rounded-full font-heading text-xl shadow-[0_4px_0_0_rgba(0,0,0,0.16)]',
            node,
          )}
          aria-hidden="true"
        >
          {locked ? (
            <Lock className="size-5" />
          ) : Icon ? (
            <Icon className="size-6" />
          ) : (
            level.chapter
          )}
        </span>
        <span className="min-w-0 flex-1 pt-0.5">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-heading text-lg leading-tight">{levelTitle(level, t)}</span>
            {isNext && (
              <span className="rounded-full bg-primary px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-primary-foreground">
                {t('quest.map.up_next')}
              </span>
            )}
          </span>
          <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">{about}</span>
          <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex gap-0.5" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <Star
                  key={i}
                  className={cn(
                    'size-4',
                    i < stars ? 'fill-amber-400 text-amber-500' : 'text-muted-foreground/30',
                  )}
                />
              ))}
            </span>
            <span className="sr-only">{fillText(t('quest.map.level_stars'), { n: stars })}</span>
            {best !== undefined && (
              <span className="tabular-nums">
                {fillText(t('quest.map.best'), { n: Math.round(best * 100) })}
              </span>
            )}
            {level.panels.length > 0 && (
              <span className="inline-flex items-center gap-1">
                <Brush className="size-3.5" aria-hidden="true" />
                {inked === level.panels.length
                  ? fillText(t('quest.map.panels_inked'), { n: level.panels.length })
                  : fillText(t('quest.map.panels_to_ink'), { n: level.panels.length })}
              </span>
            )}
          </span>
        </span>
      </button>
    </li>
  )
}
