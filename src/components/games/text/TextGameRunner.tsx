'use client'

import { useEffect, useRef, useState, type ComponentType, type RefObject } from 'react'
import { ArrowRight, Check, Lock, Play, RotateCcw, Star, Trophy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { dealReview, dealRound, ROUND_SIZE, type Dealt } from '@/lib/games/text-games/arrange'
import {
  finishRound,
  finishRun,
  readProgress,
  roundsDone,
  startRound,
  type TextProgress,
} from '@/lib/games/text-games/progress'
import type { GameItem, RoundKind, TextGame } from '@/lib/games/text-games/types'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'

import { fillText, ROUND_META, RoundBadge } from './parts'
import { FinishQuestion } from './rounds/FinishQuestion'
import { MethodQuestion } from './rounds/MethodQuestion'
import { OrderQuestion } from './rounds/OrderQuestion'
import type { Answer, QuestionProps } from './rounds/shared'
import { ThemeQuestion } from './rounds/ThemeQuestion'
import { WhereQuestion } from './rounds/WhereQuestion'
import { WhoQuestion } from './rounds/WhoQuestion'

/**
 * One text's guided path: the rounds in order, each answer marked at once with
 * the guide's reason, a score at the end of each round, a summary at the end
 * of the path, and a practice round of the questions the student got wrong.
 *
 * Given the path as plain data by the page (src/lib/games/text-games/load.ts
 * builds it on the server), and nothing else: no guide, no drawings.
 *
 * WHAT IT DELIBERATELY DOES NOT DO, for a site most of whose users are
 * children (src/lib/privacy/child-defaults.ts): no timer, so nobody is marked
 * down for reading slowly; no streak and no "come back tomorrow"; no
 * leaderboard; nothing sent anywhere. Scores stay in this browser
 * (src/lib/games/text-games/progress.ts).
 *
 * The first render is the path, the same on the server and in the browser;
 * the student's scores are read after hydration, so the two never disagree.
 */

const QUESTIONS: Record<RoundKind, ComponentType<QuestionProps>> = {
  who: WhoQuestion,
  order: OrderQuestion,
  where: WhereQuestion,
  finish: FinishQuestion,
  method: MethodQuestion,
  theme: ThemeQuestion,
}

interface RoundResult {
  kind: RoundKind
  score: number
  max: number
}

/** One go through the path, from the round the student started at. */
interface Run {
  from: number
  results: RoundResult[]
  /** Questions answered wrongly, for the practice round. */
  missed: GameItem[]
}

type View =
  | { name: 'path' }
  | {
      name: 'play'
      /** -1 for the practice round of missed questions. */
      roundIndex: number
      dealt: Dealt[]
      at: number
      answers: (Answer | null)[]
      run: Run
      /** Changes with every deal, so a question's own state starts afresh. */
      deal: number
    }
  | {
      name: 'roundEnd'
      roundIndex: number
      score: number
      max: number
      newBest: boolean
      best: { score: number; max: number }
      run: Run
    }
  | { name: 'summary'; run: Run; newBest: boolean; best: { score: number; max: number } | null }
  | { name: 'reviewEnd'; score: number; max: number; run: Run }

const newRun = (from: number): Run => ({ from, results: [], missed: [] })

function cheerKey(score: number, max: number): string {
  const share = max > 0 ? score / max : 0
  if (share >= 0.8) return 'text_games.cheer.top'
  if (share >= 0.5) return 'text_games.cheer.mid'
  return 'text_games.cheer.low'
}

/**
 * Focus `el`, and bring the section it heads to the top of the screen when it
 * is not already near there: on a phone the page's own header would otherwise
 * leave a new question's options below the fold. No smooth scroll for a
 * reader who asked for less motion. The sections carry scroll-mt-24, so the
 * site's sticky header does not cover them.
 */
function focusAndReveal(el: HTMLElement | null) {
  if (!el) return
  el.focus({ preventScroll: true })
  const target = el.closest('section') ?? el
  const top = target.getBoundingClientRect().top
  if (top < 0 || top > window.innerHeight * 0.3) {
    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ block: 'start', behavior: still ? 'auto' : 'smooth' })
  }
}

export function TextGameRunner({ game }: { game: TextGame }) {
  const t = useT()
  const [progress, setProgress] = useState<TextProgress | null>(null)
  const [view, setView] = useState<View>({ name: 'path' })
  const [live, setLive] = useState('')
  const deals = useRef(0)
  const reviews = useRef(0)
  /** False until the student does something, so the page never steals focus on load. */
  const acted = useRef(false)
  const viewHeading = useRef<HTMLHeadingElement>(null)
  const questionHeading = useRef<HTMLHeadingElement>(null)
  const nextButton = useRef<HTMLButtonElement>(null)

  const kinds = game.rounds.map((r) => r.kind)

  useEffect(() => {
    setProgress(readProgress(game.slug))
  }, [game.slug])

  const playing = view.name === 'play' ? view : null
  const current = playing ? playing.answers[playing.at] : null
  /** Changes exactly when a new question or a new screen appears. */
  const screen = playing ? `play-${playing.deal}-${playing.at}` : view.name

  // A new question, or a new screen: move focus to its heading.
  useEffect(() => {
    if (!acted.current) return
    focusAndReveal(screen.startsWith('play') ? questionHeading.current : viewHeading.current)
  }, [screen])

  // An answer: move focus to the button that goes on, below the feedback.
  useEffect(() => {
    if (current) nextButton.current?.focus()
  }, [current])

  function begin(roundIndex: number, run: Run) {
    acted.current = true
    const round = game.rounds[roundIndex]
    const play = startRound(game.slug, round.kind, game.rounds.length)
    const dealt = dealRound(game.slug, round, play)
    setLive('')
    setView({
      name: 'play',
      roundIndex,
      dealt,
      at: 0,
      answers: dealt.map(() => null),
      run,
      deal: ++deals.current,
    })
  }

  function practise(run: Run) {
    acted.current = true
    const dealt = dealReview(game.slug, run.missed, reviews.current++)
    setLive('')
    setView({
      name: 'play',
      roundIndex: -1,
      dealt,
      at: 0,
      answers: dealt.map(() => null),
      run: { ...run, missed: [] },
      deal: ++deals.current,
    })
  }

  function answer(a: Answer) {
    if (!playing || playing.answers[playing.at]) return
    const item = playing.dealt[playing.at].item
    const answers = playing.answers.slice()
    answers[playing.at] = a
    const missed = a.correct ? playing.run.missed : [...playing.run.missed, item]
    setView({ ...playing, answers, run: { ...playing.run, missed } })
    if (a.correct) setLive(t('text_games.fb.correct'))
    else if (item.kind === 'order')
      setLive(
        `${t('text_games.fb.wrong')}. ${fillText(t('text_games.fb.order_placed'), {
          n: (a.placed ?? []).filter((m, pos) => m === pos).length,
          total: item.moments.length,
        })}`,
      )
    else
      setLive(
        `${t('text_games.fb.wrong')}. ${fillText(t('text_games.fb.answer'), { answer: item.answer })}`,
      )
  }

  function next() {
    if (!playing) return
    if (playing.at < playing.dealt.length - 1) {
      setLive('')
      setView({ ...playing, at: playing.at + 1 })
      return
    }
    const score = playing.answers.filter((a) => a?.correct).length
    const max = playing.dealt.length
    if (playing.roundIndex < 0) {
      setView({ name: 'reviewEnd', score, max, run: playing.run })
      return
    }
    const kind = game.rounds[playing.roundIndex].kind
    const { progress: p, newBest } = finishRound(game.slug, kind, score, max)
    setProgress(p)
    const rec = p.rounds[kind]
    setView({
      name: 'roundEnd',
      roundIndex: playing.roundIndex,
      score,
      max,
      newBest,
      best: { score: rec?.best ?? score, max: rec?.max ?? max },
      run: { ...playing.run, results: [...playing.run.results, { kind, score, max }] },
    })
  }

  function onwards(roundIndex: number, run: Run) {
    if (roundIndex + 1 < game.rounds.length) {
      begin(roundIndex + 1, run)
      return
    }
    const score = run.results.reduce((s, r) => s + r.score, 0)
    const max = run.results.reduce((s, r) => s + r.max, 0)
    let best = progress?.bestRun ?? null
    let newBest = false
    // A best for the whole text counts only a whole path, played from round one.
    if (run.from === 0 && run.results.length === game.rounds.length) {
      const res = finishRun(game.slug, score, max)
      setProgress(res.progress)
      best = res.progress.bestRun
      newBest = res.newBest
    }
    setView({ name: 'summary', run, newBest, best })
  }

  function backToPath() {
    acted.current = true
    setProgress(readProgress(game.slug))
    setLive('')
    setView({ name: 'path' })
  }

  const done = progress ? roundsDone(progress, kinds) : 0

  return (
    <div className="space-y-6">
      {/* Spoken verdicts. Present from the start, so a screen reader is listening before the first answer. */}
      <p className="sr-only" aria-live="polite">
        {live}
      </p>

      {view.name === 'path' && (
        <section aria-labelledby="text-game-path" className="scroll-mt-24 space-y-6">
          <div className="space-y-2">
            <h2
              id="text-game-path"
              ref={viewHeading}
              tabIndex={-1}
              className="scroll-mt-24 font-heading text-heading-lg text-foreground outline-none"
            >
              {t('text_games.path.heading')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {fillText(t('text_games.path.intro'), { n: game.rounds.length })}
            </p>
            {progress && (done > 0 || progress.bestRun) && (
              <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-foreground">
                <span>
                  {fillText(t('text_games.progress.rounds_done'), {
                    done,
                    total: game.rounds.length,
                  })}
                </span>
                {progress.bestRun && (
                  <span>
                    {fillText(t('text_games.progress.best'), {
                      score: progress.bestRun.score,
                      max: progress.bestRun.max,
                    })}
                  </span>
                )}
              </p>
            )}
          </div>

          <Button
            size="lg"
            className="h-auto min-h-12 w-full whitespace-normal py-2.5 text-base sm:w-auto"
            onClick={() => begin(0, newRun(0))}
          >
            <Play aria-hidden="true" />
            {t('text_games.path.start')}
          </Button>

          <ol className="space-y-3">
            {game.rounds.map((round, i) => {
              const meta = ROUND_META[round.kind]
              const Icon = meta.icon
              const rec = progress?.rounds[round.kind]
              const size = Math.min(ROUND_SIZE[round.kind], round.items.length)
              const name = t(meta.titleKey)
              return (
                <li
                  key={round.kind}
                  className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-4 sm:flex-row sm:items-center"
                >
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <span
                      className={cn(
                        'flex size-11 shrink-0 items-center justify-center rounded-xl',
                        rec?.done
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200'
                          : 'bg-primary/10 text-primary dark:text-foreground',
                      )}
                    >
                      {rec?.done ? (
                        <Check className="size-5" aria-hidden="true" />
                      ) : (
                        <Icon className="size-5" aria-hidden="true" />
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {fillText(t('text_games.path.round_n'), { n: i + 1 })} ·{' '}
                        {fillText(
                          t(
                            round.kind === 'order'
                              ? 'text_games.path.puzzles'
                              : 'text_games.path.questions',
                          ),
                          { n: size },
                        )}
                      </p>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
                      <p className="text-sm text-muted-foreground">{t(meta.descKey)}</p>
                      {rec?.done && (
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-emerald-800 dark:text-emerald-300">
                          <span>{t('text_games.path.done')}</span>
                          <span>
                            {fillText(t('text_games.progress.best'), {
                              score: rec.best,
                              max: rec.max,
                            })}
                          </span>
                          {rec.best === rec.max && rec.max > 0 && (
                            <span className="inline-flex items-center gap-1">
                              <Star className="size-3.5" aria-hidden="true" />
                              {t('text_games.path.full_marks')}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-auto min-h-11 whitespace-normal py-2"
                    aria-label={fillText(t('text_games.path.play_label'), { n: i + 1, name })}
                    onClick={() => begin(i, newRun(i))}
                  >
                    {t('text_games.path.play')}
                    <ArrowRight className="rtl:rotate-180" aria-hidden="true" />
                  </Button>
                </li>
              )
            })}
          </ol>

          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <Lock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {t('text_games.privacy')}
          </p>
        </section>
      )}

      {playing && (
        <PlayView
          game={game}
          view={playing}
          t={t}
          questionHeading={questionHeading}
          nextButton={nextButton}
          onAnswer={answer}
          onNext={next}
          onLeave={backToPath}
        />
      )}

      {view.name === 'roundEnd' && (
        <section
          aria-labelledby="text-game-round-end"
          className="scroll-mt-24 space-y-5 rounded-2xl border border-border/60 bg-card p-6 text-center sm:p-8"
        >
          <div className="flex justify-center">
            <RoundBadge kind={game.rounds[view.roundIndex].kind} t={t} />
          </div>
          <h2
            id="text-game-round-end"
            ref={viewHeading}
            tabIndex={-1}
            className="scroll-mt-24 font-heading text-heading-lg text-foreground outline-none"
          >
            {t('text_games.end.heading')}
          </h2>
          <p className="font-heading text-display-sm tabular-nums text-foreground">
            {fillText(t('text_games.end.score'), { score: view.score, max: view.max })}
          </p>
          <p className="text-lg font-semibold text-foreground">
            {t(cheerKey(view.score, view.max))}
          </p>
          {view.newBest ? (
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-900 dark:bg-amber-900/40 dark:text-amber-100">
              <Trophy className="size-4" aria-hidden="true" />
              {t('text_games.end.new_best')}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              {fillText(t('text_games.end.best'), view.best)}
            </p>
          )}
          <div className="flex flex-col justify-center gap-2 sm:flex-row sm:flex-wrap">
            <Button
              size="lg"
              className="h-auto min-h-11 whitespace-normal py-2"
              onClick={() => onwards(view.roundIndex, view.run)}
            >
              {view.roundIndex + 1 < game.rounds.length
                ? t('text_games.btn.next_round')
                : t('text_games.btn.see_summary')}
              <ArrowRight className="rtl:rotate-180" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto min-h-11 whitespace-normal py-2"
              onClick={() => begin(view.roundIndex, newRun(view.roundIndex))}
            >
              <RotateCcw aria-hidden="true" />
              {t('text_games.btn.retry_round')}
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-auto min-h-11 whitespace-normal py-2"
              onClick={backToPath}
            >
              {t('text_games.btn.back_to_path')}
            </Button>
          </div>
        </section>
      )}

      {view.name === 'summary' && (
        <SummaryView
          view={view}
          t={t}
          heading={viewHeading}
          onPractise={() => practise(view.run)}
          onAgain={() => begin(0, newRun(0))}
          onPath={backToPath}
        />
      )}

      {view.name === 'reviewEnd' && (
        <section
          aria-labelledby="text-game-review-end"
          className="scroll-mt-24 space-y-5 rounded-2xl border border-border/60 bg-card p-6 text-center sm:p-8"
        >
          <h2
            id="text-game-review-end"
            ref={viewHeading}
            tabIndex={-1}
            className="scroll-mt-24 font-heading text-heading-lg text-foreground outline-none"
          >
            {t('text_games.review.heading')}
          </h2>
          <p className="font-heading text-display-sm tabular-nums text-foreground">
            {fillText(t('text_games.end.score'), { score: view.score, max: view.max })}
          </p>
          <p className="text-lg font-semibold text-foreground">
            {t(cheerKey(view.score, view.max))}
          </p>
          <div className="flex flex-col justify-center gap-2 sm:flex-row sm:flex-wrap">
            {view.run.missed.length > 0 && (
              <Button
                size="lg"
                className="h-auto min-h-11 whitespace-normal py-2"
                onClick={() => practise(view.run)}
              >
                <RotateCcw aria-hidden="true" />
                {t('text_games.btn.practise')}
              </Button>
            )}
            <Button
              size="lg"
              variant="outline"
              className="h-auto min-h-11 whitespace-normal py-2"
              onClick={backToPath}
            >
              {t('text_games.btn.back_to_path')}
            </Button>
          </div>
        </section>
      )}
    </div>
  )
}

/** A round being played: where the student is, the question, and the way on. */
function PlayView({
  game,
  view,
  t,
  questionHeading,
  nextButton,
  onAnswer,
  onNext,
  onLeave,
}: {
  game: TextGame
  view: Extract<View, { name: 'play' }>
  t: (key: string) => string
  questionHeading: RefObject<HTMLHeadingElement | null>
  nextButton: RefObject<HTMLButtonElement | null>
  onAnswer: (a: Answer) => void
  onNext: () => void
  onLeave: () => void
}) {
  const dealt = view.dealt[view.at]
  const item = dealt.item
  const Question = QUESTIONS[item.kind]
  const answered = view.answers[view.at]
  const score = view.answers.filter((a) => a?.correct).length
  const last = view.at === view.dealt.length - 1
  const kind = view.roundIndex < 0 ? 'review' : game.rounds[view.roundIndex].kind
  const counterKey =
    item.kind === 'order' && kind !== 'review'
      ? 'text_games.status.puzzle'
      : 'text_games.status.question'

  return (
    <section aria-label={t(ROUND_META[kind].titleKey)} className="scroll-mt-24 space-y-6">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <RoundBadge kind={kind} t={t} />
          <p className="text-sm font-semibold tabular-nums text-foreground">
            {fillText(t('text_games.status.score'), { n: score })}
          </p>
        </div>
        <div className="flex gap-1" aria-hidden="true">
          {view.dealt.map((d, i) => {
            const a = view.answers[i]
            return (
              <span
                key={`${d.item.id}-${i}`}
                className={cn(
                  'h-1.5 flex-1 rounded-full',
                  a
                    ? a.correct
                      ? 'bg-emerald-600'
                      : 'bg-amber-500'
                    : i === view.at
                      ? 'bg-primary/60'
                      : 'bg-muted',
                )}
              />
            )
          })}
        </div>
        <p className="text-sm text-muted-foreground">
          {fillText(t(counterKey), { n: view.at + 1, total: view.dealt.length })}
        </p>
      </div>

      <Question
        key={`${view.deal}-${view.at}`}
        dealt={dealt}
        art={game.art}
        answered={answered}
        onAnswer={onAnswer}
        headingRef={questionHeading}
        t={t}
      />

      {answered && (
        <Button
          ref={nextButton}
          size="lg"
          className="h-auto min-h-12 w-full whitespace-normal py-2.5 text-base sm:w-auto"
          onClick={onNext}
        >
          {last ? t('text_games.btn.see_score') : t('text_games.btn.next')}
          <ArrowRight className="rtl:rotate-180" aria-hidden="true" />
        </Button>
      )}

      <div className="border-t border-border/60 pt-4">
        <Button
          variant="ghost"
          className="h-auto min-h-11 whitespace-normal py-2"
          onClick={onLeave}
        >
          {t('text_games.btn.leave_round')}
        </Button>
      </div>
    </section>
  )
}

/** The end of the path: points, rounds, the best for this text, and the way to practise what was missed. */
function SummaryView({
  view,
  t,
  heading,
  onPractise,
  onAgain,
  onPath,
}: {
  view: Extract<View, { name: 'summary' }>
  t: (key: string) => string
  heading: RefObject<HTMLHeadingElement | null>
  onPractise: () => void
  onAgain: () => void
  onPath: () => void
}) {
  const { run } = view
  const score = run.results.reduce((s, r) => s + r.score, 0)
  const max = run.results.reduce((s, r) => s + r.max, 0)
  return (
    <section aria-labelledby="text-game-summary" className="scroll-mt-24 space-y-6">
      <div className="space-y-4 rounded-2xl border border-border/60 bg-card p-6 text-center sm:p-8">
        <Trophy className="mx-auto size-10 text-amber-600 dark:text-amber-400" aria-hidden="true" />
        <h2
          id="text-game-summary"
          ref={heading}
          tabIndex={-1}
          className="scroll-mt-24 font-heading text-heading-lg text-foreground outline-none"
        >
          {t('text_games.summary.heading')}
        </h2>
        <p className="font-heading text-display-sm tabular-nums text-foreground">
          {fillText(t('text_games.summary.points'), { score, max })}
        </p>
        <p className="text-base text-foreground">
          {fillText(t('text_games.summary.rounds'), { n: run.results.length })}
        </p>
        <p className="text-lg font-semibold text-foreground">{t(cheerKey(score, max))}</p>
        {view.newBest ? (
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-900 dark:bg-amber-900/40 dark:text-amber-100">
            <Trophy className="size-4" aria-hidden="true" />
            {t('text_games.end.new_best')}
          </p>
        ) : (
          view.best && (
            <p className="text-sm text-muted-foreground">
              {fillText(t('text_games.summary.best'), view.best)}
            </p>
          )
        )}
      </div>

      <ul className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card">
        {run.results.map((r) => (
          <li key={r.kind} className="flex items-center justify-between gap-3 px-4 py-3">
            <RoundBadge kind={r.kind} t={t} />
            <span className="text-sm font-semibold tabular-nums text-foreground">
              {fillText(t('text_games.end.score'), { score: r.score, max: r.max })}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {run.missed.length > 0 ? (
          <Button size="lg" className="h-auto min-h-11 whitespace-normal py-2" onClick={onPractise}>
            <RotateCcw aria-hidden="true" />
            {t('text_games.btn.practise')} ({run.missed.length})
          </Button>
        ) : (
          <p className="self-center text-base font-medium text-emerald-800 dark:text-emerald-300">
            {t('text_games.summary.all_right')}
          </p>
        )}
        <Button
          size="lg"
          variant="outline"
          className="h-auto min-h-11 whitespace-normal py-2"
          onClick={onAgain}
        >
          {t('text_games.btn.play_again')}
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="h-auto min-h-11 whitespace-normal py-2"
          onClick={onPath}
        >
          {t('text_games.btn.back_to_path')}
        </Button>
      </div>
    </section>
  )
}
