import { Fragment, type ReactNode } from 'react'

/**
 * Placeholders in a translated sentence, filled in. The dictionary holds whole
 * sentences, so each language puts a name or a number where its own grammar
 * needs it. A placeholder given no value is left as written, so a missing one
 * shows on the page rather than vanishing.
 *
 * Used by the text quests (src/components/games/quest) and the text games
 * index. Moved here on 12 October 2026 from src/components/games/text/
 * parts.tsx, which was retired with the guided path's rounds.
 */

/**
 * A translated sentence with its {placeholders} filled by nodes: the English
 * names in "What is {from} to {to}?" stay marked as English inside an Arabic
 * or Spanish sentence.
 */
export function fill(template: string, values: Record<string, ReactNode>): ReactNode {
  const parts = template.split(/\{(\w+)\}/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <Fragment key={i}>{values[part] ?? `{${part}}`}</Fragment>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

/** The same, for a plain string: an aria-label, an announcement. */
export function fillText(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? String(values[k]) : m))
}
