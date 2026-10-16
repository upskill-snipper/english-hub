'use client'

import { useCallback, useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { AlertTriangle, CalendarDays, CheckCircle2, ListChecks, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz'
import { EnglishText } from '@/components/i18n/EnglishText'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import { fill } from '@/components/games/fill'
import { BandChip, humanTag, statLabel } from '@/components/learning/GameAnalyticsView'
import { SKILL_GROUPS } from '@/lib/game-results/skills'
import type { ClassGamesResponse } from '@/app/api/school/classes/[classId]/games/route'
import type { ClassGamesSummary } from '@/lib/game-results/class-view'

/**
 * A class's game results, the Games tab of /school/classes/[classId]
 * (16 October 2026; GET /api/school/classes/[classId]/games).
 *
 * Four parts, all from the pupils' own analytics (src/lib/game-results/
 * class-view.ts): headline figures; each skill with how many pupils are
 * secure, developing or need work in it and the class's share right; the
 * wrong answers most pupils share; and each pupil with what they most need to
 * work on, linking to their page. Only rounds since each pupil joined the
 * class count, and nothing here is or predicts an exam mark.
 */
type T = (key: string) => string

export function ClassGamesTab({ classId }: { classId: string }) {
  const t = useT()
  const fmt = useFormatDate()
  const [state, setState] = useState<
    { kind: 'loading' } | { kind: 'error' } | { kind: 'ready'; data: ClassGamesResponse }
  >({ kind: 'loading' })

  const load = useCallback(async () => {
    setState({ kind: 'loading' })
    try {
      const res = await fetch(`/api/school/classes/${classId}/games`, { cache: 'no-store' })
      if (!res.ok) throw new Error(String(res.status))
      setState({ kind: 'ready', data: (await res.json()) as ClassGamesResponse })
    } catch {
      setState({ kind: 'error' })
    }
  }, [classId])

  useEffect(() => {
    if (classId) void load()
  }, [classId, load])

  if (state.kind === 'loading') {
    return (
      <div className="space-y-4" aria-busy="true">
        <Skeleton className="h-24 w-full rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>
    )
  }
  if (state.kind === 'error') {
    return (
      <div
        role="alert"
        className="flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-6"
      >
        <p className="flex items-center gap-2 text-sm text-foreground">
          <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
          {t('school.games.error')}
        </p>
        <Button variant="outline" size="sm" onClick={() => void load()}>
          {t('school.queue.retry')}
        </Button>
      </div>
    )
  }

  const { summary: s, names } = state.data
  return (
    <div className="space-y-6">
      <GlassPanel className="p-5 sm:p-6">
        <PanelEyebrow>{t('school.games.title')}</PanelEyebrow>
        <p className="text-xs text-muted-foreground">{t('school.games.lead')}</p>
        {s.pupilsWithData === 0 ? (
          <p className="mt-4 text-sm text-foreground">{t('school.games.empty')}</p>
        ) : (
          <Tiles s={s} t={t} />
        )}
      </GlassPanel>

      {s.groups.length > 0 && <Skills s={s} t={t} />}
      {s.pupilsWithData > 0 && <MixUps s={s} t={t} names={names} />}
      <Pupils s={s} t={t} fmt={fmt} names={names} />
    </div>
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
    <div className="rounded-xl border border-border/70 bg-card p-3">
      <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-1 text-xl font-semibold text-foreground">{value}</p>
      {sub ? <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p> : null}
    </div>
  )
}

function Tiles({ s, t }: { s: ClassGamesSummary; t: T }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
      <Tile
        icon={<Users className="size-3.5" aria-hidden="true" />}
        label={t('school.games.tile.pupils')}
        value={s.pupilsWithData}
        sub={fill(t('school.games.tile.pupils_sub'), { n: s.pupilsWithData, total: s.pupils })}
      />
      <Tile
        icon={<ListChecks className="size-3.5" aria-hidden="true" />}
        label={t('ga.tile.answered')}
        value={s.answered}
      />
      <Tile
        icon={<CheckCircle2 className="size-3.5" aria-hidden="true" />}
        label={t('ga.tile.right')}
        value={s.accuracy === null ? t('school.games.not_yet') : `${s.accuracy}%`}
      />
      <Tile
        icon={<CalendarDays className="size-3.5" aria-hidden="true" />}
        label={t('ga.tile.week')}
        value={s.thisWeek.answered}
        sub={fill(
          t(
            s.thisWeek.pupils === 1
              ? 'school.games.tile.week_sub_one'
              : 'school.games.tile.week_sub',
          ),
          {
            n: s.thisWeek.answered,
            pupils: s.thisWeek.pupils,
          },
        )}
      />
    </div>
  )
}

function Skills({ s, t }: { s: ClassGamesSummary; t: T }) {
  return (
    <GlassPanel className="p-5 sm:p-6">
      <PanelEyebrow>{t('school.games.skills.title')}</PanelEyebrow>
      <p className="mb-4 text-xs text-muted-foreground">{t('school.games.skills.lead')}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] text-sm">
          <thead>
            <tr className="border-b border-border text-start text-xs text-muted-foreground">
              <th scope="col" className="py-2 pe-3 text-start font-medium">
                {t('school.games.col.skill')}
              </th>
              <th scope="col" className="px-2 py-2 text-start font-medium">
                <BandChip band="secure" t={t} />
              </th>
              <th scope="col" className="px-2 py-2 text-start font-medium">
                <BandChip band="developing" t={t} />
              </th>
              <th scope="col" className="px-2 py-2 text-start font-medium">
                <BandChip band="needs-work" t={t} />
              </th>
              <th scope="col" className="px-2 py-2 text-start font-medium">
                <BandChip band="too-few" t={t} />
              </th>
              <th scope="col" className="ps-2 py-2 text-end font-medium">
                {t('school.games.col.right')}
              </th>
            </tr>
          </thead>
          <tbody>
            {s.groups.map((g) => (
              <tr key={g.group} className="border-b border-border/60 last:border-0">
                <th scope="row" className="py-2 pe-3 text-start font-medium text-foreground">
                  {t(SKILL_GROUPS[g.group].labelKey)}
                </th>
                <td className="px-2 py-2 tabular-nums">{g.pupils.secure}</td>
                <td className="px-2 py-2 tabular-nums">{g.pupils.developing}</td>
                <td className="px-2 py-2 tabular-nums">{g.pupils.needsWork}</td>
                <td className="px-2 py-2 tabular-nums text-muted-foreground">{g.pupils.tooFew}</td>
                <td className="ps-2 py-2 text-end tabular-nums">
                  {g.accuracy === null ? '' : `${g.accuracy}%`}
                  <span className="block text-xs text-muted-foreground">
                    {t('school.games.col.answers')}: {g.answered}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassPanel>
  )
}

function MixUps({ s, t, names }: { s: ClassGamesSummary; t: T; names: Record<string, string> }) {
  return (
    <GlassPanel className="p-5 sm:p-6">
      <PanelEyebrow>{t('school.games.mixups.title')}</PanelEyebrow>
      <p className="mb-3 text-xs text-muted-foreground">{t('school.games.mixups.lead')}</p>
      {s.confusions.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t('school.games.mixups.none')}</p>
      ) : (
        <ul className="space-y-2">
          {s.confusions.map((c) => (
            <li key={`${c.activity}|${c.kind}|${c.chose}`} className="text-sm text-foreground">
              {fill(
                t(c.pupils === 1 ? 'school.games.mixups.line_one' : 'school.games.mixups.line'),
                {
                  game: (
                    <EnglishText as="span">
                      {names[`skills:${c.activity}`] ?? c.activity}
                    </EnglishText>
                  ),
                  chose: <EnglishText as="span">{c.chose}</EnglishText>,
                  kind: <EnglishText as="span">{humanTag(c.kind)}</EnglishText>,
                  pupils: c.pupils,
                  n: c.times,
                },
              )}
            </li>
          ))}
        </ul>
      )}
    </GlassPanel>
  )
}

function Pupils({
  s,
  t,
  fmt,
  names,
}: {
  s: ClassGamesSummary
  t: T
  fmt: (d: string) => string
  names: Record<string, string>
}) {
  if (s.rows.length === 0) return null
  return (
    <GlassPanel className="p-5 sm:p-6">
      <PanelEyebrow>{t('school.games.pupils.title')}</PanelEyebrow>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full min-w-[40rem] text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted-foreground">
              <th scope="col" className="py-2 pe-3 text-start font-medium">
                {t('school.games.col.pupil')}
              </th>
              <th scope="col" className="px-2 py-2 text-start font-medium">
                {t('school.games.col.last')}
              </th>
              <th scope="col" className="px-2 py-2 text-end font-medium">
                {t('ga.tile.answered')}
              </th>
              <th scope="col" className="px-2 py-2 text-end font-medium">
                {t('ga.tile.right')}
              </th>
              <th scope="col" className="px-2 py-2 text-end font-medium">
                {t('ga.tile.week')}
              </th>
              <th scope="col" className="ps-3 py-2 text-start font-medium">
                {t('ga.work.title')}
              </th>
            </tr>
          </thead>
          <tbody>
            {s.rows.map((r) => (
              <tr key={r.id} className="border-b border-border/60 align-top last:border-0">
                <th scope="row" className="py-2 pe-3 text-start font-medium">
                  <Link
                    href={`/school/students/${r.id}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {r.name ?? t('school.queue.unnamed_pupil')}
                  </Link>
                </th>
                <td className="px-2 py-2 text-muted-foreground">
                  {r.joinedAt === null
                    ? t('school.games.no_date')
                    : r.lastPlayed
                      ? fmt(r.lastPlayed)
                      : t('school.games.not_yet')}
                </td>
                <td className="px-2 py-2 text-end tabular-nums">{r.answered}</td>
                <td className="px-2 py-2 text-end tabular-nums">
                  {r.accuracy === null ? '' : `${r.accuracy}%`}
                </td>
                <td className="px-2 py-2 text-end tabular-nums">{r.thisWeek}</td>
                <td className="ps-3 py-2">
                  {r.workOn.length > 0 ? (
                    <ul className="space-y-1">
                      {r.workOn.map((w) => (
                        <li key={w.key} className="flex flex-wrap items-center gap-2">
                          <span>{statLabel(w, t, names)}</span>
                          <BandChip band={w.band} t={t} />
                        </li>
                      ))}
                    </ul>
                  ) : r.answered > 0 ? (
                    <span className="text-muted-foreground">{t('school.games.nothing_weak')}</span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassPanel>
  )
}
