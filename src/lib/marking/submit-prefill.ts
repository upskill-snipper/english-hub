/**
 * Resolving a deep link into the marking form.
 *
 * THE DEFECT THIS EXISTS FOR. Nothing on /marking/submit read its own URL. A
 * link carrying the board, paper, question and text arrived, nothing consumed
 * it, and the student landed on an empty form with no sign that anything had
 * been lost. Three such links already exist elsewhere in the product and all of
 * them are inert. That is the shape this repository keeps finding: it does not
 * fail, it quietly does nothing.
 *
 * WHY THE RESOLUTION IS A PURE FUNCTION AND NOT AN EFFECT. Two reasons. It can
 * be tested without standing up a browser, and this project caps how many test
 * files may request a jsdom environment. And resolving in ONE pass against the
 * registry avoids the board -> paper -> question state chain, which needs three
 * renders to settle and can half-apply if any link in it fails to match.
 *
 * NOTHING IS TRUSTED. A scheme id that has been renamed, or a question id that
 * no longer exists on that scheme, resolves to nothing rather than putting the
 * form into a state its own dropdowns cannot represent. A question is only
 * accepted if it belongs to the resolved scheme, so `?paper=aqa-lit-paper1`
 * with `?question=Q5` from a different paper fills the paper and drops the
 * question.
 */

import type { MarkScheme } from './mark-schemes'

/** The shape the form needs; a subset of the page's own BoardOption. */
export interface PrefillBoard {
  value: string
  schemes: readonly Pick<MarkScheme, 'id' | 'questions'>[]
}

export interface Prefill {
  board?: string
  paper?: string
  question?: string
  title?: string
  studiedText?: string
}

/** Longest values accepted, matching the server's own limits. */
const MAX_TITLE = 200
const MAX_STUDIED_TEXT = 500

/**
 * Resolve URL parameters into form values, dropping anything that does not
 * match the live registry.
 *
 * `paper` is the mark-scheme id; `scheme` is accepted as an alias because that
 * is the word the rest of the product uses for the same thing.
 */
export function resolvePrefill(
  params: URLSearchParams,
  boardOptions: readonly PrefillBoard[],
  schemes: readonly Pick<MarkScheme, 'id' | 'questions'>[],
): Prefill {
  const out: Prefill = {}

  const wantedScheme = params.get('paper') ?? params.get('scheme')
  if (wantedScheme) {
    const scheme = schemes.find((s) => s.id === wantedScheme)
    if (scheme) {
      const owner = boardOptions.find((b) => b.schemes.some((s) => s.id === scheme.id))
      if (owner) {
        // The board is only set when it genuinely owns the scheme. Setting a
        // paper whose board is not selected would leave the paper dropdown
        // empty and the form unsubmittable.
        out.board = owner.value
        out.paper = scheme.id

        const wantedQuestion = params.get('question')
        if (wantedQuestion && scheme.questions.some((q) => q.id === wantedQuestion)) {
          out.question = wantedQuestion
        }
      }
    }
  }

  const title = params.get('title')?.trim()
  if (title) out.title = title.slice(0, MAX_TITLE)

  // The set text or extract the answer is about. The marking API has accepted
  // `studiedText` all along, persists it, and the marker injects it into the
  // prompt as context - and the form never sent it.
  const text = params.get('text')?.trim()
  if (text) out.studiedText = text.slice(0, MAX_STUDIED_TEXT)

  return out
}

/**
 * Build a link into the marking form for a given scheme and question.
 *
 * Callers should use this rather than assembling the query by hand, so a
 * parameter rename cannot leave a live link silently inert again.
 */
export function markingLink(args: {
  /**
   * The mark-scheme id, when the caller knows which paper the answer is for.
   *
   * OPTIONAL SINCE 19 September 2026. The text-scoped rail links every set-text
   * guide to the marker, and it knows the text but not the paper - mapping a
   * text to a scheme would mean inventing a board-to-paper table, and the form
   * already resolves the board from the stored cookie. So a link may carry the
   * text alone; `resolvePrefill` fills what it can and leaves the rest to the
   * student.
   */
  schemeId?: string
  questionId?: string
  /** The set text the answer is about, sent to the marker as context. */
  text?: string
  /** Prefills the student's own title field. */
  title?: string
}): string {
  const q = new URLSearchParams()
  if (args.schemeId) q.set('paper', args.schemeId)
  if (args.questionId) q.set('question', args.questionId)
  if (args.text) q.set('text', args.text)
  if (args.title) q.set('title', args.title)
  return `/marking/submit?${q.toString()}`
}
