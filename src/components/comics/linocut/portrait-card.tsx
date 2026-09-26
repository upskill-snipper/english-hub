import type { ReactNode } from 'react'

import type { Portrait } from '@/lib/comics/types'

import { PortraitFrame } from './frames'
import { LinocutStyles, timing } from './styles'
import { PaperGrain } from './textures'

export type PortraitCardLabels = {
  /** Heads the numbered list of phrases: "The words the numbers point to". */
  markers: string
}

/**
 * The passage with each marker's number set after its phrase, in the order
 * the phrases occur. A phrase the passage does not contain gets no number
 * here; src/__tests__/comics.test.ts fails on it rather than let a marker
 * point at nothing.
 */
function markPassage(passage: string, phrases: string[]): ReactNode[] {
  const cuts = phrases
    .map((p, i) => ({ i, at: passage.indexOf(p), end: passage.indexOf(p) + p.length }))
    .filter((c) => c.at >= 0)
    .sort((a, b) => a.end - b.end)
  const out: ReactNode[] = []
  let from = 0
  for (const c of cuts) {
    // The last word and its number travel together, so a narrow column never
    // starts a line with a bare number.
    const run = passage.slice(from, c.end)
    const cut = run.lastIndexOf(' ') + 1
    out.push(run.slice(0, cut))
    out.push(
      <span key={c.i} className="lc-nowrap">
        {run.slice(cut)}
        <span
          className="lc-num lc-pop"
          style={timing({ delay: 0.9 + c.i * 0.15 })}
          aria-hidden="true"
        >
          {c.i + 1}
        </span>
      </span>,
    )
    from = c.end
  }
  out.push(passage.slice(from))
  return out
}

/**
 * One character, as the text describes them: the portrait with its numbered
 * markers, and beside it the words the markers point to. For a public-domain
 * text the whole passage is printed with the numbers set into it; for a text
 * in copyright, the phrases alone.
 *
 * Pure and server-rendered. The one visible label comes in as a prop, already
 * translated, so the preview script can render this without a request. The
 * portrait's own words stay in English, marked `lang="en"`, as all guide
 * content is.
 */
export function PortraitCard({
  uid,
  portrait,
  labels,
  headingLevel = 'h3',
}: {
  uid: string
  portrait: Portrait
  labels: PortraitCardLabels
  headingLevel?: 'h2' | 'h3' | 'h4'
}) {
  const Heading = headingLevel
  const phrases = portrait.describedBy.map((m) => m.phrase)
  return (
    <article className="lc-sheet lc-card" dir="ltr" aria-labelledby={`${uid}-name`}>
      <LinocutStyles />
      <Heading id={`${uid}-name`} className="lc-card-name" lang="en">
        {portrait.name}
      </Heading>
      <div className="lc-card-body">
        <PortraitFrame
          uid={uid}
          art={portrait.art}
          alt={portrait.alt}
          markers={portrait.describedBy}
        />
        <div className="lc-card-text">
          {portrait.passage ? (
            <blockquote className="lc-passage" lang="en">
              <p style={{ margin: 0 }}>{markPassage(portrait.passage, phrases)}</p>
              <span className="lc-source">{portrait.where}</span>
            </blockquote>
          ) : (
            <>
              <p className="lc-label" dir="auto">
                {labels.markers}
              </p>
              <ol className="lc-phrases" lang="en">
                {phrases.map((p, i) => (
                  <li key={p}>
                    <span
                      className="lc-num lc-pop"
                      style={timing({ delay: 0.9 + i * 0.15 })}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>{' '}
                    <q>{p}</q>
                  </li>
                ))}
              </ol>
              <p className="lc-source" lang="en">
                {portrait.where}
              </p>
            </>
          )}
          {portrait.note && (
            <p className="lc-note" lang="en">
              {portrait.note}
            </p>
          )}
          {portrait.artNote && (
            <p className="lc-small" lang="en">
              {portrait.artNote}
            </p>
          )}
        </div>
      </div>
      <PaperGrain uid={`${uid}-sheet`} />
    </article>
  )
}
