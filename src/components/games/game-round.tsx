'use client'

import { createContext, useContext } from 'react'
import { useAuthStore } from '@/store/auth-store'
import {
  CHOSEN_RE,
  ITEM_KIND_RE,
  MAX_ITEMS_PER_ROUND,
  itemId,
  type RoundItem,
  type RoundPayload,
} from '@/lib/game-results/types'

/**
 * How a game tells the site what happened in a round, and how the round
 * reaches a signed-in student's account (src/lib/game-results/types.ts).
 *
 * A skills game page calls useRecordAnswer() once per answered question.
 * GameShell collects the answers and, when the round ends, sends them with
 * sendRound(). A quest's LevelPlayer builds its own items and calls
 * sendRound() directly.
 *
 * THE GUEST RULE. sendRound() sends nothing at all unless a student is signed
 * in. A guest's scores stay in their browser, as every game page tells them;
 * the old GameShell save posted a guest's score to the server and took the
 * 401 as the answer. Checked here, in the one place every round passes.
 *
 * NEVER TYPED TEXT. `chose` is for a wrong choice from a fixed list of short
 * labels (a device name, "an", a word in a multiple-choice question). A game
 * where the student types the answer (Spelling Bee, Plural Builder) must not
 * pass what was typed; a label that does not look like one is dropped here.
 */

/** What a game page reports about one answered question. */
export interface AnswerReport {
  /** The question's own id, or its prompt if it has none. Hashed before it is sent. */
  question: string
  correct: boolean
  /** What the question tests within the game: the device, the rule, the error type. */
  tag?: string
  /** For a wrong choice from a fixed list of short labels: the label chosen. Never typed text. */
  chose?: string
}

const RecordAnswerContext = createContext<((a: AnswerReport) => void) | null>(null)

export const RecordAnswerProvider = RecordAnswerContext.Provider

const noop = () => {}

/** The recorder for the game this component sits in; outside a GameShell it does nothing. */
export function useRecordAnswer(): (a: AnswerReport) => void {
  return useContext(RecordAnswerContext) ?? noop
}

/** A tag as a stored kind: lower case, words joined by hyphens, or the fallback. */
export function toKind(tag: string | undefined, fallback: string): string {
  const k = (tag ?? '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
    .replace(/-+$/, '')
  return ITEM_KIND_RE.test(k) ? k : fallback
}

/** One report as a stored item. */
export function toItem(a: AnswerReport, fallbackKind: string): RoundItem {
  const item: RoundItem = {
    i: itemId(a.question),
    k: toKind(a.tag, fallbackKind),
    c: a.correct ? 1 : 0,
  }
  const chose = a.chose?.trim()
  if (!a.correct && chose && CHOSEN_RE.test(chose)) item.w = chose
  return item
}

function newRoundId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }
  } catch {
    // fall through
  }
  return `r-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`
}

export type RoundToSend = Omit<RoundPayload, 'clientRoundId'> & { clientRoundId?: string }

/**
 * Sends a finished round to the signed-in student's account. Returns at once,
 * never throws, and sends nothing for a guest. Returns the round's id when it
 * was sent, so a caller that may send twice (on finishing, and again on
 * leaving) can pass the same id and have it stored once.
 */
export function sendRound(round: RoundToSend): string | null {
  try {
    if (!useAuthStore.getState().user) return null
    const clientRoundId = round.clientRoundId ?? newRoundId()
    const payload: RoundPayload = {
      ...round,
      clientRoundId,
      items: round.items.slice(-MAX_ITEMS_PER_ROUND),
    }
    void fetch('/api/games/rounds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      keepalive: true,
      body: JSON.stringify(payload),
    }).catch(() => {})
    return clientRoundId
  } catch {
    return null
  }
}
