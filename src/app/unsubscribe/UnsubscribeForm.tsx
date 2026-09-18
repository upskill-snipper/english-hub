'use client'

import { useState } from 'react'

/**
 * The confirm step. See the page's header for why this is a button rather than
 * an unsubscribe-on-load: mail-security scanners fetch every URL in a delivered
 * message, so a write on GET would opt people out who never clicked.
 *
 * Deliberately has no re-subscribe control, no survey and no "are you sure?"
 * persuasion. Somebody who arrived here has already decided.
 */
export function UnsubscribeForm({ token }: { token: string }) {
  const [state, setState] = useState<'idle' | 'working' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState<string | null>(null)

  async function confirm() {
    setState('working')
    setMessage(null)
    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (res.ok && body.ok) {
        setState('done')
        return
      }
      setState('error')
      setMessage(body.error ?? 'We could not update your preferences.')
    } catch {
      setState('error')
      setMessage('We could not reach the server. Please try again.')
    }
  }

  if (state === 'done') {
    return (
      <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
        <p className="font-semibold text-emerald-700 dark:text-emerald-400">
          Done. You will not receive marketing or progress-report email from us again.
        </p>
        <p className="text-sm">
          Changed your mind? You can turn it back on in your privacy settings whenever you like.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-300">
      <p>Confirm that you want to stop receiving marketing and progress-report email from us.</p>

      <button
        type="button"
        onClick={confirm}
        disabled={state === 'working'}
        className="rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-slate-800 disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
      >
        {state === 'working' ? 'Unsubscribing…' : 'Unsubscribe'}
      </button>

      {state === 'error' && message ? (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {message}
        </p>
      ) : null}
    </div>
  )
}
