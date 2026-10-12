'use client'

/**
 * usePaidAccess - what the signed-in person may use, asked of the server.
 *
 * Client components used to decide paid access with
 * `profile.subscription_status === 'pro'`. Since 12 October 2026 a school
 * pupil's access comes from their school's live pilot and nothing is written
 * to that field, so the browser can no longer work it out; GET
 * /api/user/access answers from the server's one paid-access choke point.
 *
 * Returns null while signed out or still loading, which callers treat as
 * "not yet", never as "yes". A failed request answers
 * `{ premium: false, schoolPupil: false }`: fail closed, so a paid control
 * stays locked, and the server gates still decide every AI request. The
 * failure is not cached, so the next component to ask tries again.
 *
 * One request per signed-in user per page load: the promise is shared by
 * every component that asks, and dropped when the user changes.
 */

import { useEffect, useState } from 'react'
import { useAuthUser } from '@/store/auth-store'

export interface PaidAccessState {
  /** May use paid (non-IELTS) features: their own plan, or a live school. */
  premium: boolean
  /** A pupil of a school whose access is live. */
  schoolPupil: boolean
}

/** What a failed request answers: nothing is unlocked. */
const CLOSED: PaidAccessState = { premium: false, schoolPupil: false }

let cached: { userId: string; promise: Promise<PaidAccessState | null> } | null = null

/** The server's answer, or null when the request failed. */
async function fetchAccess(): Promise<PaidAccessState | null> {
  try {
    const res = await fetch('/api/user/access', { headers: { Accept: 'application/json' } })
    if (!res.ok) return null
    const body = (await res.json()) as Partial<PaidAccessState>
    return { premium: body.premium === true, schoolPupil: body.schoolPupil === true }
  } catch {
    return null
  }
}

function accessFor(userId: string): Promise<PaidAccessState | null> {
  if (!cached || cached.userId !== userId) {
    const promise = fetchAccess()
    cached = { userId, promise }
    // A failed answer is not kept, so the next component to ask tries again.
    void promise.then((value) => {
      if (value === null && cached?.promise === promise) cached = null
    })
  }
  return cached.promise
}

export function usePaidAccess(): PaidAccessState | null {
  const user = useAuthUser()
  const userId = user?.id ?? null
  const [state, setState] = useState<{ userId: string; access: PaidAccessState } | null>(null)

  useEffect(() => {
    if (!userId) return
    let cancelled = false
    void accessFor(userId).then((access) => {
      if (!cancelled) setState({ userId, access: access ?? CLOSED })
    })
    return () => {
      cancelled = true
    }
  }, [userId])

  // An answer for a different (earlier) user is not an answer for this one.
  if (!userId || !state || state.userId !== userId) return null
  return state.access
}
