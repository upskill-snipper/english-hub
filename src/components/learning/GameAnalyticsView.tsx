'use client'

/**
 * GameAnalyticsView: a signed-in student's game results, read from their
 * account (GET /api/games/analytics), on /dashboard/learning.
 *
 * WHAT IT REPLACED (13 October 2026). The page showed a profile built in the
 * browser from whole-round percentages, one skill per game, per device, with
 * a footer saying it synced to the account; nothing ever reached the account.
 * This view reads the rounds saved question by question
 * (src/lib/game-results), so it can say which kind of question a student gets
 * wrong, in which game or set text, and how that is changing.
 *
 * WHAT IT SHOWS, AND TO WHOM. The figures and the "going well" and "to work
 * on" lists describe what the student did, and every student sees them. The
 * next steps are personalised suggestions: they appear only when the account's
 * suggestions setting is on, which the Children's Code defaults switch off for
 * under-18s, and a plain explanation with the switch appears otherwise (the
 * founder's decision of 13 October 2026).
 *
 * NO GRADES. Nothing here turns a share of questions right into a GCSE grade;
 * see src/lib/game-results/analytics.ts.
 *
 * Every figure says how many answers it rests on. Status colours always come
 * with their label, never alone.
 */

import { useCallback, useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  Gamepad2,
  ListChecks,
  Minus,
  RefreshCw,
  Shuffle,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { fill } from '@/components/games/fill'
import { EnglishText } from '@/components/i18n/EnglishText'
import LearningProfileView from '@/components/learning/LearningProfileView'
import { listPlayedGameIds } from '@/lib/game-scores'
import { cn } from '@/lib/utils'
import { textGamesHref } from '@/lib/revision/text-games-href'
import type { Band, GameAnalytics, SkillStat, TextStat, Trend } from '@/lib/game-results/analytics'
import type { NextStep } from '@/lib/game-results/next-steps'
import { CoachCard, type CoachState } from '@/components/learning/CoachCard'
import { SKILL_GROUPS, isQuestKind } from '@/lib/game-results/skills'

export interface AnalyticsPayload {
  analytics: GameAnalytics
  names: Record<string, string>
  suggestions: { allowed: boolean }
  nextSteps: NextStep[] | null
  /** Present only with suggestions on: the AI coach card's state. */
  coach?: CoachState | null
}

type T = (key: string) => string

const BAND_STYLE: Record<Band, { bar: string; chip: string }> = {
  secure: {
    bar: 'bg-emerald-600',
    chip: 'border-emerald-600/30 bg-emerald-600/10 text-emerald-800',
  },
  developing: { bar: 'bg-amber-500', chip: 'border-amber-500/40 bg-amber-500/10 text-amber-900' },
  'needs-work': { bar: 'bg-red-600', chip: 'border-red-600/30 bg-red-600/10 text-red-800' },
  'too-few': {
    bar: 'bg-muted-foreground/40',
    chip: 'border-border bg-muted text-muted-foreground',
  },
}

const dateOf = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })

/** A stored kind ('needs-work-type') as words; exported for the class view. */
export function humanTag(tag: string): string {
  return tag.replace(/-/g, ' ')
}

function kindLabel(kind: string | undefined, t: T): ReactNode {
  if (!kind) return ''
  if (isQuestKind(kind)) return t(`ga.kind.${kind}`)
  return <EnglishText as="span">{humanTag(kind)}</EnglishText>
}

/** What a stat is about, in words: a skill group, a kind within a text or game, or a kind across texts. */
export function statLabel(
  s: Pick<SkillStat, 'group' | 'source' | 'activity' | 'kind'>,
  t: T,
  names: Record<string, string>,
): ReactNode {
  if (s.source === 'quest' && s.activity) {
    return (
      <>
        <EnglishText as="span">{names[`quest:${s.activity}`] ?? s.activity}</EnglishText>
        {': '}
        {kindLabel(s.kind, t)}
      </>
    )
  }
  if (s.source === 'quest') return fill(t('ga.kind.across_texts'), { kind: kindLabel(s.kind, t) })
  if (s.source === 'skills' && s.activity) {
    return (
      <>
        <EnglishText as="span">{names[`skills:${s.activity}`] ?? s.activity}</EnglishText>
        {': '}
        {kindLabel(s.kind, t)}
      </>
    )
  }
  return t(SKILL_GROUPS[s.group].labelKey)
}

function TrendMark({ trend, t }: { trend: Trend | null; t: T }) {
  if (!trend) return null
  const Icon = trend === 'improving' ? TrendingUp : trend === 'slipping' ? TrendingDown : Minus
  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
      <Icon className="size-3.5" aria-hidden="true" />
      {t(`ga.trend.${trend}`)}
    </span>
  )
}

/** A band as a small labelled chip; exported for the teacher's class view. */
export function BandChip({ band, t }: { band: Band; t: T }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold',
        BAND_STYLE[band].chip,
      )}
    >
      {t(`ga.band.${band}`)}
    </span>
  )
}

/** One skill as a row: name, band, a bar of the recent share right, and what it rests on. */
function SkillRow({
  s,
  t,
  names,
  badge,
}: {
  s: SkillStat
  t: T
  names: Record<string, string>
  badge?: ReactNode
}) {
  const right = Math.round((s.recentAccuracy * s.recentAnswered) / 100)
  return (
    <li className="space-y-1.5">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <span className="min-w-0 text-sm font-medium text-foreground">
          {statLabel(s, t, names)} {badge}
        </span>
        <span className="flex items-center gap-2">
          <TrendMark trend={s.trend} t={t} />
          <BandChip band={s.band} t={t} />
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-border" aria-hidden="true">
        <div
          className={cn('h-full rounded-full', BAND_STYLE[s.band].bar)}
          style={{ width: `${Math.min(100, Math.max(2, s.recentAccuracy))}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground">
        {fill(t('ga.stat.recent'), { right, n: s.recentAnswered })}
      </p>
    </li>
  )
}

function Tile({
  icon,
  label,
  value,
  sub,
}: {
  icon: ReactNode
  label: string
  value: ReactNode
  sub?: ReactNode
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-4">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold tabular-nums text-foreground">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>}
    </div>
  )
}

function Section({
  title,
  icon,
  lead,
  children,
}: {
  title: string
  icon: ReactNode
  lead?: string
  children: ReactNode
}) {
  return (
    <section className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
        {icon}
        {title}
      </h2>
      {lead && <p className="mt-1 text-sm text-muted-foreground">{lead}</p>}
      <div className="mt-4">{children}</div>
    </section>
  )
}

/** A link when there is somewhere to go, plain text when the game has gone. */
function MaybeLink({
  href,
  className,
  children,
}: {
  href: string | null
  className: string
  children: ReactNode
}) {
  if (!href) return <span className={className}>{children}</span>
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function weakestKind(x: TextStat): SkillStat | null {
  const judged = x.kinds.filter((k) => k.band !== 'too-few')
  if (judged.length === 0) return null
  return judged.reduce((a, b) => (b.recentAccuracy < a.recentAccuracy ? b : a))
}

function levelName(kind: string | undefined, t: T): string {
  if (kind === 'method' || kind === 'extract-note') return t('quest.level.craft')
  return t('quest.level.cast')
}

function NextStepItem({ step, t, names }: { step: NextStep; t: T; names: Record<string, string> }) {
  const p = step.params
  const values: Record<string, ReactNode> = {
    right: p.right,
    of: p.of,
    kind: kindLabel(typeof p.kind === 'string' ? p.kind : undefined, t),
    level: levelName(typeof p.kind === 'string' ? p.kind : undefined, t),
    text: <EnglishText as="span">{names[`quest:${p.text}`] ?? String(p.text ?? '')}</EnglishText>,
    game: <EnglishText as="span">{names[`skills:${p.game}`] ?? String(p.game ?? '')}</EnglishText>,
    group:
      typeof p.group === 'string' && p.group in SKILL_GROUPS
        ? t(SKILL_GROUPS[p.group as keyof typeof SKILL_GROUPS].labelKey)
        : '',
  }
  return (
    <li className="rounded-lg border border-border/60 p-4">
      <p className="text-sm text-foreground">{fill(t(step.messageKey), values)}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Link
          href={step.href}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {t(step.linkKey)} <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
        {step.learnHref && (
          <Link
            href={step.learnHref}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            <BookOpen className="size-3.5" aria-hidden="true" /> {t('ga.next.learn')}
          </Link>
        )}
      </div>
    </li>
  )
}

function SuggestionsSwitch({
  allowed,
  onChanged,
  t,
}: {
  allowed: boolean
  onChanged: () => void
  t: T
}) {
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)
  const change = async (on: boolean) => {
    setBusy(true)
    setFailed(false)
    try {
      const res = await fetch('/api/games/suggestions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ on }),
      })
      if (!res.ok) throw new Error(String(res.status))
      onChanged()
    } catch {
      setFailed(true)
    } finally {
      setBusy(false)
    }
  }
  if (allowed) {
    return (
      <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        {t('ga.suggest.on_note')}
        <button
          type="button"
          onClick={() => change(false)}
          disabled={busy}
          className="font-medium text-foreground underline underline-offset-2 disabled:opacity-50"
        >
          {t('ga.suggest.turn_off')}
        </button>
        {failed && <span role="alert">{t('ga.suggest.failed')}</span>}
      </p>
    )
  }
  return (
    <section className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
        <Sparkles className="size-4 text-primary" aria-hidden="true" />
        {t('ga.suggest.off_title')}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t('ga.suggest.off_body')}</p>
      <button
        type="button"
        onClick={() => change(true)}
        disabled={busy}
        className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        {t('ga.suggest.turn_on')}
      </button>
      {failed && (
        <p role="alert" className="mt-2 text-sm text-red-700">
          {t('ga.suggest.failed')}
        </p>
      )}
    </section>
  )
}

function WeekChart({ a, t }: { a: GameAnalytics; t: T }) {
  const max = Math.max(1, ...a.weeks.map((w) => w.answered))
  return (
    <>
      <div className="flex h-36 items-end gap-1.5" aria-hidden="true">
        {a.weeks.map((w) => (
          <div
            key={w.start}
            className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1"
          >
            <span className="text-[10px] tabular-nums text-muted-foreground">
              {w.answered > 0 ? w.answered : ''}
            </span>
            <div
              className="w-full rounded-t-[4px] bg-primary/80"
              style={{ height: `${w.answered > 0 ? Math.max(4, (w.answered / max) * 100) : 0}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1 flex gap-1.5" aria-hidden="true">
        {a.weeks.map((w) => (
          <div
            key={w.start}
            className="min-w-0 flex-1 text-center text-[10px] tabular-nums text-muted-foreground"
          >
            {w.answered > 0 ? `${Math.round((w.correct / w.answered) * 100)}%` : ''}
          </div>
        ))}
      </div>
      <table className="sr-only">
        <thead>
          <tr>
            <th>{t('ga.weeks.table_week')}</th>
            <th>{t('ga.weeks.table_answered')}</th>
            <th>{t('ga.weeks.table_right')}</th>
          </tr>
        </thead>
        <tbody>
          {a.weeks.map((w) => (
            <tr key={w.start}>
              <td>{fill(t('ga.weeks.week_of'), { date: dateOf(w.start) })}</td>
              <td>{w.answered}</td>
              <td>{w.answered > 0 ? `${Math.round((w.correct / w.answered) * 100)}%` : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

/** Keys whose wording speaks to the student, each with a ".teacher" twin. */
const TEACHER_VOICE: ReadonlySet<string> = new Set([
  'ga.tile.days',
  'ga.strengths.empty',
  'ga.work.empty',
  'ga.stat.recent',
  'ga.kind.across_texts',
  'ga.skills.title',
  'ga.skills.lead',
  'ga.mixups.lead',
  'ga.mixups.line',
  'ga.played.title',
])

/** The view for a payload already loaded: exported so the teacher's pupil page can reuse it. */
export function GameAnalyticsBody({
  data,
  t: tBase,
  onSuggestionsChanged,
  coach,
  audience = 'student',
}: {
  data: AnalyticsPayload
  t: T
  onSuggestionsChanged?: () => void
  /** The AI coach card, placed after the next steps. */
  coach?: ReactNode
  audience?: 'student' | 'teacher'
}) {
  // A teacher reads about a pupil, so copy that speaks to the student ("your
  // skills") is swapped for its third-person twin, the same key plus
  // ".teacher" (16 October 2026). Sub-components are given this `t` too.
  const t: T =
    audience === 'teacher'
      ? (key) => (TEACHER_VOICE.has(key) ? tBase(`${key}.teacher`) : tBase(key))
      : tBase
  const { analytics: a, names } = data
  const literature = a.groups.filter((g) => SKILL_GROUPS[g.group].family === 'literature')
  const language = a.groups.filter((g) => SKILL_GROUPS[g.group].family === 'language')
  const detail = a.subskills.filter((s) => s.answered >= 5).slice(0, 12)
  const showsAo = literature.some((g) => SKILL_GROUPS[g.group].examinersCallIt)

  return (
    <div className="space-y-6">
      {/* Headline figures */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <Tile
          icon={<ListChecks className="size-3.5" aria-hidden="true" />}
          label={t('ga.tile.answered')}
          value={a.totals.answered}
        />
        <Tile
          icon={<CheckCircle2 className="size-3.5" aria-hidden="true" />}
          label={t('ga.tile.right')}
          value={`${a.totals.accuracy}%`}
        />
        <Tile
          icon={<CalendarDays className="size-3.5" aria-hidden="true" />}
          label={t('ga.tile.week')}
          value={a.thisWeek.answered}
          sub={
            <>
              {a.thisWeek.answered > 0
                ? fill(t('ga.tile.week_sub'), {
                    n: a.thisWeek.answered,
                    pct: a.thisWeek.accuracy ?? 0,
                  })
                : t('ga.tile.week_none')}
              {a.lastWeek.accuracy !== null && (
                <span className="block">
                  {fill(t('ga.tile.last_week'), { pct: a.lastWeek.accuracy })}
                </span>
              )}
            </>
          }
        />
        <Tile
          icon={<Clock className="size-3.5" aria-hidden="true" />}
          label={t('ga.tile.time')}
          value={fill(t('ga.tile.minutes'), { n: a.totals.minutes })}
        />
        <Tile
          icon={<Gamepad2 className="size-3.5" aria-hidden="true" />}
          label={t('ga.tile.days')}
          value={a.totals.activeDays}
        />
      </div>

      {/* Going well, to work on */}
      <div className="grid gap-4 md:grid-cols-2">
        <Section
          title={t('ga.strengths.title')}
          icon={<TrendingUp className="size-4 text-emerald-700" aria-hidden="true" />}
        >
          {a.strengths.length > 0 ? (
            <ul className="space-y-4">
              {a.strengths.map((s) => (
                <SkillRow key={s.key} s={s} t={t} names={names} />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">{t('ga.strengths.empty')}</p>
          )}
        </Section>
        <Section
          title={t('ga.work.title')}
          icon={<Target className="size-4 text-red-700" aria-hidden="true" />}
        >
          {a.workOn.length > 0 ? (
            <ul className="space-y-4">
              {a.workOn.map((s) => (
                <SkillRow key={s.key} s={s} t={t} names={names} />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">{t('ga.work.empty')}</p>
          )}
        </Section>
      </div>

      {/* Next steps: only with suggestions switched on */}
      {audience === 'student' && (
        <>
          {data.suggestions.allowed && data.nextSteps && data.nextSteps.length > 0 && (
            <Section
              title={t('ga.next.title')}
              icon={<ArrowRight className="size-4 text-primary" aria-hidden="true" />}
              lead={t('ga.next.lead')}
            >
              <ul className="space-y-3">
                {data.nextSteps.map((step) => (
                  <NextStepItem key={step.key} step={step} t={t} names={names} />
                ))}
              </ul>
            </Section>
          )}
          {onSuggestionsChanged && (
            <SuggestionsSwitch
              allowed={data.suggestions.allowed}
              onChanged={onSuggestionsChanged}
              t={t}
            />
          )}
        </>
      )}

      {coach}

      {/* Skills */}
      {a.groups.length > 0 && (
        <Section
          title={t('ga.skills.title')}
          icon={<Target className="size-4 text-primary" aria-hidden="true" />}
          lead={t('ga.skills.lead')}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { key: 'literature', title: t('ga.skills.literature'), list: literature },
              { key: 'language', title: t('ga.skills.language'), list: language },
            ]
              .filter((col) => col.list.length > 0)
              .map((col) => (
                <div key={col.key}>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {col.title}
                  </h3>
                  <ul className="space-y-4">
                    {col.list.map((g) => {
                      const ao = SKILL_GROUPS[g.group].examinersCallIt
                      return (
                        <SkillRow
                          key={g.key}
                          s={g}
                          t={t}
                          names={names}
                          badge={
                            ao ? (
                              <span className="ms-1 rounded border border-border px-1 py-px text-[10px] font-normal text-muted-foreground">
                                {fill(t('ga.skills.ao'), { ao })}
                              </span>
                            ) : null
                          }
                        />
                      )
                    })}
                  </ul>
                </div>
              ))}
          </div>
          {showsAo && (
            <p className="mt-4 text-xs text-muted-foreground">{t('ga.skills.ao_note')}</p>
          )}
          {detail.length > 0 && (
            <details className="mt-5 rounded-lg border border-border/60 p-4">
              <summary className="cursor-pointer text-sm font-medium text-foreground">
                {t('ga.skills.detail')}
              </summary>
              <ul className="mt-4 space-y-4">
                {detail.map((s) => (
                  <SkillRow key={s.key} s={s} t={t} names={names} />
                ))}
              </ul>
            </details>
          )}
        </Section>
      )}

      {/* Set texts */}
      {a.texts.length > 0 && (
        <Section
          title={t('ga.texts.title')}
          icon={<BookOpen className="size-4 text-primary" aria-hidden="true" />}
        >
          <ul className="divide-y divide-border/60">
            {a.texts.map((x) => {
              const weak = weakestKind(x)
              return (
                <li
                  key={x.slug}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
                >
                  <MaybeLink
                    href={textGamesHref(x.slug)}
                    className="font-medium text-foreground hover:underline"
                  >
                    <EnglishText as="span">{names[`quest:${x.slug}`] ?? x.slug}</EnglishText>
                  </MaybeLink>
                  <span className="flex flex-wrap gap-x-3 text-xs text-muted-foreground">
                    <span>{fill(t('ga.texts.answered'), { n: x.answered })}</span>
                    <span>{fill(t('ga.texts.right'), { pct: x.accuracy })}</span>
                    <span>{fill(t('ga.texts.levels'), { n: x.levels.length })}</span>
                    {weak && weak.band !== 'secure' && (
                      <span>{fill(t('ga.texts.weakest'), { kind: kindLabel(weak.kind, t) })}</span>
                    )}
                  </span>
                </li>
              )
            })}
          </ul>
        </Section>
      )}

      {/* Mix-ups */}
      {a.confusions.length > 0 && (
        <Section
          title={t('ga.mixups.title')}
          icon={<Shuffle className="size-4 text-primary" aria-hidden="true" />}
          lead={t('ga.mixups.lead')}
        >
          <ul className="space-y-2">
            {a.confusions.map((c) => (
              <li key={`${c.activity}|${c.kind}|${c.chose}`} className="text-sm text-foreground">
                {fill(t('ga.mixups.line'), {
                  game: (
                    <EnglishText as="span">
                      {names[`skills:${c.activity}`] ?? c.activity}
                    </EnglishText>
                  ),
                  chose: <EnglishText as="span">{c.chose}</EnglishText>,
                  kind: <EnglishText as="span">{humanTag(c.kind)}</EnglishText>,
                  n: c.times,
                })}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Week by week */}
      <Section
        title={t('ga.weeks.title')}
        icon={<CalendarDays className="size-4 text-primary" aria-hidden="true" />}
        lead={t('ga.weeks.lead')}
      >
        <WeekChart a={a} t={t} />
      </Section>

      {/* Everything played */}
      <Section
        title={t('ga.played.title')}
        icon={<Gamepad2 className="size-4 text-primary" aria-hidden="true" />}
      >
        <ul className="divide-y divide-border/60">
          {a.activities.map((act) => (
            <li
              key={`${act.source}:${act.activity}`}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-2.5"
            >
              <MaybeLink
                href={
                  act.source === 'quest' ? textGamesHref(act.activity) : `/games/${act.activity}`
                }
                className="text-sm font-medium text-foreground hover:underline"
              >
                <EnglishText as="span">
                  {names[`${act.source}:${act.activity}`] ?? act.activity}
                </EnglishText>
              </MaybeLink>
              <span className="flex flex-wrap gap-x-3 text-xs text-muted-foreground">
                <span>{fill(t('ga.played.rounds'), { n: act.rounds })}</span>
                {act.accuracy !== null ? (
                  <span>{fill(t('ga.texts.right'), { pct: act.accuracy })}</span>
                ) : (
                  <span>{t('ga.played.no_detail')}</span>
                )}
                <span>{fill(t('ga.played.last'), { date: dateOf(act.lastPlayed) })}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Who else sees these results (16 October 2026): a pupil in a class is
          told their teachers can, and from when. */}
      {audience === 'student' && (
        <p className="text-xs text-muted-foreground">{t('ga.teachers_see')}</p>
      )}
    </div>
  )
}

export default function GameAnalyticsView() {
  const t = useT()
  const [data, setData] = useState<AnalyticsPayload | null>(null)
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')
  const [deviceHasData, setDeviceHasData] = useState(false)

  const load = useCallback(async () => {
    setState('loading')
    try {
      const res = await fetch('/api/games/analytics', {
        credentials: 'same-origin',
        cache: 'no-store',
      })
      if (!res.ok) throw new Error(String(res.status))
      setData((await res.json()) as AnalyticsPayload)
      setState('ready')
    } catch {
      setState('error')
    }
  }, [])

  useEffect(() => {
    void load()
    try {
      setDeviceHasData(listPlayedGameIds().length > 0)
    } catch {
      setDeviceHasData(false)
    }
  }, [load])

  if (state === 'loading') {
    return (
      <p
        className="rounded-xl border border-border/60 bg-card p-6 text-sm text-muted-foreground"
        role="status"
      >
        {t('ga.loading')}
      </p>
    )
  }
  if (state === 'error' || !data) {
    return (
      <div className="rounded-xl border border-border/60 bg-card p-6">
        <p className="text-sm text-foreground" role="alert">
          {t('ga.error')}
        </p>
        <button
          type="button"
          onClick={() => void load()}
          className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium hover:bg-muted"
        >
          <RefreshCw className="size-3.5" aria-hidden="true" /> {t('ga.retry')}
        </button>
      </div>
    )
  }

  if (!data.analytics.hasData) {
    return (
      <div className="space-y-6">
        <div className="rounded-xl border border-border/60 bg-card p-6 text-center">
          <Gamepad2 className="mx-auto size-7 text-muted-foreground" aria-hidden="true" />
          <h2 className="mt-3 text-base font-semibold text-foreground">{t('ga.empty.title')}</h2>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            {t('ga.empty.body')}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Link
              href="/games"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Gamepad2 className="size-4" aria-hidden="true" /> {t('ga.empty.games')}
            </Link>
            <Link
              href="/games/texts"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              <BookOpen className="size-4" aria-hidden="true" /> {t('ga.empty.quests')}
            </Link>
          </div>
        </div>
        {deviceHasData && (
          <section>
            <h2 className="mb-3 text-sm font-semibold text-muted-foreground">
              {t('ga.empty.device')}
            </h2>
            <LearningProfileView variant="full" />
          </section>
        )}
      </div>
    )
  }

  return (
    <GameAnalyticsBody
      data={data}
      t={t}
      onSuggestionsChanged={() => void load()}
      coach={
        data.suggestions.allowed && data.coach ? (
          <CoachCard
            state={data.coach}
            answered={data.analytics.totals.answered}
            t={t}
            onWritten={() => {}}
          />
        ) : undefined
      }
    />
  )
}
