'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, Check, Loader2, X } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

// Renders a dismissable banner prompting the user to confirm their date of
// birth, but ONLY when the server-side check reports they have the
// 2000-01-01 placeholder DOB from the 2026-04-20 backfill. For every other
// user the component is a no-op (returns null) so it's safe to drop into
// any authenticated page without flash-of-irrelevant-UI.

const DISMISS_KEY = 'dob-nudge-dismissed-until'

export function DobNudge() {
  const t = useT()
  const [show, setShow] = useState(false)
  const [dob, setDob] = useState('')
  const [state, setState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const dismissedUntil = Number(localStorage.getItem(DISMISS_KEY) ?? '0')
    if (dismissedUntil > Date.now()) return

    fetch('/api/profile/dob')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j?.hasPlaceholderDob) setShow(true)
      })
      .catch(() => {
        // Silent — this is a nudge, not a critical flow.
      })
  }, [])

  if (!show) return null

  async function submit() {
    setState('saving')
    setError(null)
    try {
      const res = await fetch('/api/profile/dob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dateOfBirth: dob }),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j?.error || `Failed (${res.status})`)
      }
      setState('saved')
      setTimeout(() => setShow(false), 1500)
    } catch (e) {
      setState('error')
      setError(e instanceof Error ? e.message : t('profile.dob.error_generic'))
    }
  }

  function dismissFor24h() {
    localStorage.setItem(DISMISS_KEY, String(Date.now() + 24 * 60 * 60 * 1000))
    setShow(false)
  }

  return (
    <div
      role="status"
      className="mb-6 flex flex-col gap-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-amber-100 sm:flex-row sm:items-center"
    >
      <AlertCircle className="size-5 flex-shrink-0" />
      <div className="flex-1 text-sm">
        <p className="font-medium text-foreground">{t('profile.dob.title')}</p>
        <p className="text-muted-foreground">{t('profile.dob.body')}</p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="date"
          value={dob}
          max={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setDob(e.target.value)}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground"
          aria-label={t('profile.dob.input_label')}
        />
        <button
          onClick={submit}
          disabled={!dob || state === 'saving' || state === 'saved'}
          className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
        >
          {state === 'saving' ? (
            <Loader2 className="size-4 animate-spin" />
          ) : state === 'saved' ? (
            <Check className="size-4" />
          ) : null}
          {state === 'saved' ? t('profile.dob.saved') : t('profile.dob.save')}
        </button>
        <button
          onClick={dismissFor24h}
          aria-label={t('profile.dob.dismiss_label')}
          className="rounded-md p-1.5 text-muted-foreground hover:text-foreground"
        >
          <X className="size-4" />
        </button>
      </div>
      {error && <p className="w-full text-xs text-red-400">{error}</p>}
    </div>
  )
}
