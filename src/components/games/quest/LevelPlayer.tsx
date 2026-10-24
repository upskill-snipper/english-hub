'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Flame, Volume2, VolumeX, X } from 'lucide-react'

import { dealLevel, dealReview, type DealtChallenge } from '@/lib/games/quest/deal'
import {
  finishLevel,
  finishReview,
  readPlayer,
  readQuestProgress,
  recordAnswer,
  writePlayer,
  writeQuestProgress,
  xpForAnswer,
  XP_PERFECT,
} from '@/lib/games/quest/progress'
import type { Level, Quest } from '@/lib/games/quest/types'
import { questKind } from '@/lib/game-results/quest-kind'
import { itemId, type RoundItem } from '@/lib/game-results/types'
import { cn } from '@/lib/utils'

import { sendRound } from '../game-round'

import { ItemView } from './challenges/ItemView'
import {
  LinePanelView,
  MarkerView,
  PanelLineView,
  RebuildView,
  ThemeCheckView,
  WhoseView,
} from './challenges/ComicViews'
import { fillText, type ChallengeProps, type QuestAnswer, type T } from './challenges/shared'
import { FeedbackSheet } from './FeedbackSheet'
import { LevelComplete, type LevelSummary } from './LevelComplete'
import type { useSfx } from './sfx'
import { useFocusTrap } from './use-focus-trap'
import { lockPageScroll } from '@/lib/ui/scroll-lock'

export type QuestRun = { mode: 'level'; level: Level } | { mode: 'review'; ids: string[] }

const VIEWS: Record<string, (p: ChallengeProps) => React.ReactNode> = {
  item: ItemView,
  'panel-line': PanelLineView,
  'line-panel': LinePanelView,
  rebuild: RebuildView,
  whose: WhoseView,
  marker: MarkerView,
  'theme-check': ThemeCheckView,
}

/**
 * One play of a level, or a review, full screen: a challenge at a time, the
 * sheet after each answer, and the stars at the end.
 *
 * Each answer is written to the spaced-review schedule as it is given, so
 * leaving part-way loses the level's stars but not what the student showed
 * they know or missed. Stars, XP and inked panels are written when the level
 * is finished (src/lib/games/quest/progress.ts).
 *
 * Keys: 1 to 5 choose an option, Enter checks or continues, Escape leaves.
 */
export function LevelPlayer({
  quest,
  run,
  play,
  sfx,
  t,
  onClose,
  onPlayLevel,
}: {
  quest: Quest
  run: QuestRun
  /** Earlier plays of this level or review, so a replay deals afresh. */
  play: number
  sfx: ReturnType<typeof useSfx>
  t: T
  onClose: () => void
  /** Play another level from the complete screen (next, or this one again). */
  onPlayLevel: (level: Level) => void
}) {
  const dealt: DealtChallenge[] = useMemo(
    () =>
      run.mode === 'level' ? dealLevel(quest, run.level, play) : dealReview(quest, run.ids, play),
    [quest, run, play],
  )
  const [at, setAt] = useState(0)
  const [answers, setAnswers] = useState<(QuestAnswer | null)[]>(() => dealt.map(() => null))
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [xp, setXp] = useState(0)
  const [gain, setGain] = useState(0)
  const [rebuilt, setRebuilt] = useState(0)
  const [summary, setSummary] = useState<LevelSummary | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const root = useRef<HTMLDivElement>(null)
  // For the round saved to a signed-in student's account (../game-round).
  const startedAt = useRef(Date.now())
  const roundId = useRef<string | null>(null)
  const sentAll = useRef(false)
  const dialog = useRef<HTMLDivElement>(null)
  useFocusTrap(dialog)

  const current = dealt[at]
  const answered = answers[at] ?? null

  // A new challenge: its question takes focus, and the screen goes back to the top.
  useEffect(() => {
    root.current?.scrollTo?.({ top: 0 })
    headingRef.current?.focus({ preventScroll: true })
  }, [at])

  // The page behind does not scroll while the level is open. The shared lock
  // (src/lib/ui/scroll-lock.ts): overlays restoring their own saved values
  // out of order could leave the page frozen.
  useEffect(() => lockPageScroll(), [])

  const onAnswer = useCallback(
    (a: QuestAnswer) => {
      if (answers[at]) return
      const got = xpForAnswer(a.correct, streak)
      const nextStreak = a.correct ? streak + 1 : 0
      setAnswers((prev) => prev.map((x, i) => (i === at ? a : x)))
      setStreak(nextStreak)
      setBestStreak((b) => Math.max(b, nextStreak))
      setXp((x) => x + got)
      setGain(got)
      if (a.correct && current.challenge.type === 'rebuild') setRebuilt((n) => n + 1)
      writeQuestProgress(
        quest.slug,
        recordAnswer(readQuestProgress(quest.slug), current.challenge.id, a.correct, Date.now()),
      )
      sfx.play(a.correct ? 'right' : 'wrong')
    },
    [answers, at, streak, current, quest.slug, sfx],
  )

  /**
   * The answers given so far, as a round for the student's account: sent when
   * the level or review is finished, and, if they leave part-way, with what
   * they had answered, since a missed question is evidence whether or not the
   * level was finished. One round id, so the server stores it once. Nothing is
   * sent for a guest (sendRound checks).
   */
  const sendAnswers = useCallback(
    (given: (QuestAnswer | null)[], complete: boolean) => {
      if (sentAll.current) return
      const items: RoundItem[] = []
      dealt.forEach((d, i) => {
        const a = given[i]
        if (a)
          items.push({ i: itemId(d.challenge.id), k: questKind(d.challenge), c: a.correct ? 1 : 0 })
      })
      if (items.length === 0) return
      roundId.current =
        sendRound({
          clientRoundId: roundId.current ?? undefined,
          source: 'quest',
          activity: quest.slug,
          level: run.mode === 'level' ? run.level.id : 'review',
          durationSeconds: Math.min(14_400, Math.round((Date.now() - startedAt.current) / 1000)),
          items,
        }) ?? roundId.current
      if (complete) sentAll.current = true
    },
    [dealt, quest.slug, run],
  )

  const close = useCallback(() => {
    sendAnswers(answers, false)
    onClose()
  }, [sendAnswers, answers, onClose])

  const finish = useCallback(() => {
    const right = answers.filter((a) => a?.correct).length
    const total = dealt.length
    const now = Date.now()
    sendAnswers(answers, true)
    if (run.mode === 'level') {
      const f = finishLevel(
        quest,
        readQuestProgress(quest.slug),
        readPlayer(),
        { level: run.level, right, total, xp },
        now,
        { rebuilt },
      )
      writeQuestProgress(quest.slug, f.quest)
      writePlayer(f.player)
      setSummary({
        kind: 'level',
        level: run.level,
        right,
        total,
        xp: xp + (total > 0 && right === total ? XP_PERFECT : 0),
        stars: f.stars,
        newlyInked: f.newlyInked,
        earned: f.earned,
        bestStreak,
        playerXp: f.player.xp,
      })
    } else {
      const qp = readQuestProgress(quest.slug)
      writeQuestProgress(quest.slug, { ...qp, reviews: qp.reviews + 1 })
      const r = finishReview(readPlayer(), xp, now)
      writePlayer(r.player)
      setSummary({
        kind: 'review',
        right,
        total,
        xp,
        stars: 0,
        newlyInked: [],
        earned: r.earned,
        bestStreak,
        playerXp: r.player.xp,
      })
    }
    sfx.play('complete')
  }, [answers, dealt.length, run, quest, xp, rebuilt, bestStreak, sfx, sendAnswers])

  const onContinue = useCallback(() => {
    if (at < dealt.length - 1) setAt((i) => i + 1)
    else finish()
  }, [at, dealt.length, finish])

  // Keys: 1-5 choose, Enter checks or continues, Escape leaves.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      if (e.key === 'Escape') {
        close()
        return
      }
      if (summary) return
      const scope = root.current
      if (!scope) return
      if (e.key === 'Enter') {
        const target = e.target as HTMLElement | null
        if (target && target.tagName === 'BUTTON') return // the focused button handles Enter itself
        const go = scope.ownerDocument.querySelector<HTMLButtonElement>('[data-quest-continue]')
        const check = scope.querySelector<HTMLButtonElement>('[data-quest-check]:not(:disabled)')
        ;(go ?? check)?.click()
        return
      }
      const n = Number(e.key)
      if (!answered && n >= 1 && n <= 5) {
        const options = scope.querySelectorAll<HTMLButtonElement>('[data-quest-options] > button')
        options[n - 1]?.click()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [answered, close, summary])

  if (dealt.length === 0) return null

  const View = VIEWS[current.challenge.type]
  const done = answers.filter(Boolean).length
  const levelName = run.mode === 'level' ? levelTitle(run.level, t) : t('quest.review.title')

  return (
    <div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label={levelName}
      className="fixed inset-0 z-[60] flex flex-col bg-background"
    >
      {/* Top bar: leave, progress, the run, sound. */}
      <div className="border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={close}
            aria-label={t('quest.leave')}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <div
            className="h-3.5 flex-1 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-label={t('quest.progress')}
            aria-valuemin={0}
            aria-valuemax={dealt.length}
            aria-valuenow={summary ? dealt.length : done}
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
              style={{ width: `${((summary ? dealt.length : done) / dealt.length) * 100}%` }}
            />
          </div>
          <span
            className={cn(
              'inline-flex min-w-[3.25rem] items-center justify-center gap-1 rounded-full px-2 py-1 text-sm font-bold tabular-nums',
              streak >= 3 ? 'q-pop bg-orange-500 text-white' : 'bg-muted text-muted-foreground',
            )}
            aria-label={fillText(t('quest.run_label'), { n: streak })}
          >
            <Flame className="size-4" aria-hidden="true" />
            {streak}
          </span>
          <button
            type="button"
            onClick={sfx.toggle}
            aria-pressed={sfx.on}
            aria-label={sfx.on ? t('quest.sound_off') : t('quest.sound_on')}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {sfx.on ? (
              <Volume2 className="size-5" aria-hidden="true" />
            ) : (
              <VolumeX className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div ref={root} className="flex-1 overflow-y-auto">
        {summary ? (
          <LevelComplete
            quest={quest}
            summary={summary}
            t={t}
            sfx={sfx}
            onMap={onClose}
            onPlayLevel={onPlayLevel}
          />
        ) : (
          <div key={at} className="q-in mx-auto max-w-xl px-4 pb-72 pt-5 sm:px-6">
            <p className="mb-3 text-xs font-semibold text-muted-foreground">
              {levelName} · {fillText(t('quest.count'), { n: at + 1, total: dealt.length })}
            </p>
            {View && (
              <View
                dealt={current}
                quest={quest}
                answered={answered}
                onAnswer={onAnswer}
                onTap={() => sfx.play('tap')}
                headingRef={headingRef}
                t={t}
              />
            )}
          </div>
        )}
      </div>

      {answered && !summary && (
        <FeedbackSheet
          key={at}
          dealt={current}
          answered={answered}
          quest={quest}
          gained={gain}
          run={streak}
          onContinue={onContinue}
          continueLabel={at < dealt.length - 1 ? t('quest.continue') : t('quest.see_results')}
          t={t}
        />
      )}
    </div>
  )
}

export function levelTitle(level: Level, t: T): string {
  if (level.kind === 'chapter') return fillText(t('quest.level.chapter'), { n: level.chapter ?? 1 })
  if (level.kind === 'cast') return t('quest.level.cast')
  if (level.kind === 'craft') return t('quest.level.craft')
  return t('quest.level.finale')
}
