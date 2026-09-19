'use client'

import { useEffect } from 'react'

/**
 * Prefill a builder's topic from the `?text=` the link carried.
 *
 * WHAT WAS HAPPENING. Every set-text page offers "generate revision notes" and
 * "build a test", and both links carry the text:
 *
 *   /toolkit/revision-builder?text=Macbeth&type=play&board=AQA
 *   /toolkit/test-builder?text=Macbeth&type=play
 *
 * Neither page read a search parameter. Not one. A student who clicked
 * "generate notes" from the Macbeth guide arrived at an empty builder with
 * "Select a text or topic..." showing, and had to find Macbeth again in a list
 * of more than a hundred. The link looked personalised and was not, which is
 * the same shape as the `?text=` the games hub ignored and the `questionText`
 * the marker was never given: a promise made in a URL and dropped on arrival.
 *
 * WHY IT VALIDATES RATHER THAN TRUSTS. The topic select's values are set-text
 * TITLES, and the list is the reader's own board. A `?text=` naming a text that
 * board does not set - or anything else entirely, since a URL is user input -
 * must leave the field alone rather than select something that is not there.
 * `allowed` is the list actually rendered, so a match is always selectable.
 *
 * Runs once, on mount, and only when the field is still empty, so it cannot
 * overwrite a choice the student has already made.
 */
export function useTopicFromUrl(
  allowed: readonly string[],
  current: string,
  setTopic: (value: string) => void,
): void {
  useEffect(() => {
    if (current !== '') return
    let wanted: string | null = null
    try {
      wanted = new URLSearchParams(window.location.search).get('text')
    } catch {
      return
    }
    if (!wanted) return
    const match = allowed.find((t) => t.toLowerCase() === wanted.trim().toLowerCase())
    if (match) setTopic(match)
    // Mount only: a later render must not re-apply the URL over the student.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
