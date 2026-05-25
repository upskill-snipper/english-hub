'use client'

// ─── MatchingControl ────────────────────────────────────────────────────────
// Renders an IELTS "matching" question (headings / features / information /
// sentence endings): a shared list of lettered/roman options, then one numbered
// row per item with a dropdown to choose its option. Used by both the standalone
// Reading page and the Mock so the experience is identical.
//
// Answers are written into the shared flat AnswerMap under a composite key
// (matchKey(q.id, item.id)) via `onAnswer`, so the parent needs no special state.
// ────────────────────────────────────────────────────────────────────────────

import type { MatchingQuestion } from '@/lib/ielts/types'
import { matchKey, type AnswerMap } from '@/lib/ielts/objective'

export function MatchingControl({
  question,
  startNumber,
  answers,
  onAnswer,
  selectLabel,
}: {
  question: MatchingQuestion
  /** 1-based number of this question's first item; items number up from here. */
  startNumber: number
  answers: AnswerMap
  onAnswer: (key: string, value: string) => void
  /** Translated "choose an option" placeholder for the empty <select> row. */
  selectLabel: string
}) {
  return (
    <div className="space-y-3">
      {/* Shared option list */}
      <ul className="rounded-xl border border-border/50 bg-muted/30 p-3 text-sm">
        {question.options.map((o) => (
          <li key={o.key} className="flex gap-2 py-0.5 leading-snug">
            <span className="min-w-5 shrink-0 font-semibold text-foreground">{o.key}</span>
            <span className="text-muted-foreground">{o.label}</span>
          </li>
        ))}
      </ul>

      {/* One numbered row per item */}
      <div className="space-y-2">
        {question.items.map((item, i) => {
          const key = matchKey(question.id, item.id)
          const value = answers[key] ?? ''
          const selectId = `match-${key}`
          return (
            <div
              key={item.id}
              className="flex flex-wrap items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-2"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold tabular-nums text-primary">
                {startNumber + i}
              </span>
              <label htmlFor={selectId} className="min-w-0 flex-1 text-sm text-foreground">
                {item.text}
              </label>
              <select
                id={selectId}
                value={value}
                onChange={(e) => onAnswer(key, e.target.value)}
                className="shrink-0 rounded-lg border border-border/60 bg-background px-2.5 py-1.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              >
                <option value="">{selectLabel}</option>
                {question.options.map((o) => (
                  <option key={o.key} value={o.key}>
                    {o.key}
                  </option>
                ))}
              </select>
            </div>
          )
        })}
      </div>
    </div>
  )
}
