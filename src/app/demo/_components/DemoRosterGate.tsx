'use client'

import { AlertTriangle } from 'lucide-react'
import { RouteLoading } from '@/components/system/RouteLoading'
import { useT } from '@/lib/i18n/use-t'

/**
 * Placeholder shown while a demo detail screen waits for the student roster.
 *
 * The defect this exists for: the full roster is ~320 KB of static data and used
 * to be imported at module scope by every demo page, so it shipped in the First
 * Load JS of ~19 routes that never rendered a single detail record. Only screens
 * that genuinely show a student's essays, mocks, quizzes, modules or activity now
 * pull it in, and they pull it in lazily - which means they need something honest
 * to render for the moment before the chunk arrives.
 *
 * On failure this renders a plain message. It must never fall back to invented
 * records: an empty or broken state is correct, fabricated pupil data is not.
 */
export function DemoRosterGate({ failed }: { failed: boolean }) {
  const t = useT()

  if (!failed) return <RouteLoading />

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <div
        role="alert"
        className="rounded-2xl border border-border/60 bg-card p-6 text-center sm:p-8"
      >
        <AlertTriangle className="mx-auto mb-3 h-8 w-8 text-amber-600" aria-hidden="true" />
        <h2 className="text-lg font-semibold text-foreground">{t('error.title')}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t('error.route_body')}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-5 inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          {t('error.try_again')}
        </button>
      </div>
    </div>
  )
}

export default DemoRosterGate
