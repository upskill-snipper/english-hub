'use client'

import { useCallback, useEffect, useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import { fill } from '@/components/games/fill'
import { GameAnalyticsBody } from '@/components/learning/GameAnalyticsView'
import type { PupilGamesResponse } from '@/app/api/school/students/[studentId]/games/route'

/**
 * A pupil's game results on the school's pupil page (16 October 2026).
 *
 * The same figures and the same body as the pupil's own hub
 * (GameAnalyticsBody), in its teacher form: written about the pupil rather
 * than to them, and without the pupil's next steps, suggestions switch or AI
 * coach, which are theirs. Only rounds since the pupil joined are shown
 * (GET /api/school/students/[studentId]/games says from when), and a failed
 * load says so rather than showing an empty record.
 */
export function PupilGamesPanel({ studentId }: { studentId: string }) {
  const t = useT()
  const fmt = useFormatDate()
  const [state, setState] = useState<
    { kind: 'loading' } | { kind: 'error' } | { kind: 'ready'; data: PupilGamesResponse }
  >({ kind: 'loading' })

  const load = useCallback(async () => {
    setState({ kind: 'loading' })
    try {
      const res = await fetch(`/api/school/students/${studentId}/games`, { cache: 'no-store' })
      if (!res.ok) throw new Error(String(res.status))
      setState({ kind: 'ready', data: (await res.json()) as PupilGamesResponse })
    } catch {
      setState({ kind: 'error' })
    }
  }, [studentId])

  useEffect(() => {
    if (studentId) void load()
  }, [studentId, load])

  return (
    <GlassPanel className="p-5 sm:p-6">
      <PanelEyebrow>{t('school.games.tab')}</PanelEyebrow>
      {state.kind === 'loading' && (
        <div className="space-y-3" aria-busy="true">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>
      )}
      {state.kind === 'error' && (
        <div role="alert" className="flex flex-col items-start gap-3">
          <p className="flex items-center gap-2 text-sm text-foreground">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
            {t('school.games.error')}
          </p>
          <Button variant="outline" size="sm" onClick={() => void load()}>
            {t('school.queue.retry')}
          </Button>
        </div>
      )}
      {state.kind === 'ready' && <Ready data={state.data} t={t} fmt={fmt} />}
    </GlassPanel>
  )
}

function Ready({
  data,
  t,
  fmt,
}: {
  data: PupilGamesResponse
  t: (key: string) => string
  fmt: (d: string) => string
}) {
  if (!data.since) {
    return <p className="text-sm text-muted-foreground">{t('school.games.pupil.no_date')}</p>
  }
  const date = fmt(data.since)
  if (!data.analytics.hasData) {
    return (
      <p className="text-sm text-muted-foreground">
        {fill(t('school.games.pupil.empty'), { date })}
      </p>
    )
  }
  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        {fill(t('school.games.pupil.lead'), { date })}
      </p>
      <GameAnalyticsBody
        data={{
          analytics: data.analytics,
          names: data.names,
          suggestions: { allowed: false },
          nextSteps: null,
        }}
        t={t}
        audience="teacher"
      />
    </div>
  )
}
