/**
 * The comic art for a set text: linocut panels of its key moments and portraits
 * of its characters as the text describes them.
 *
 * WHY (26 September 2026). The founder's decision: every set text gets
 * custom comic-style art of its key scenes and characters, for visual learners,
 * in one linocut print style, hand-built in SVG. The style guide and the
 * safeguarding rules are in src/components/comics/linocut/index.ts; the
 * registries are in src/data/comics/<slug>/.
 *
 * A panel is keyed by the EXACT title of a moment in the text's guide timeline
 * (src/data/study-guides/<slug>.ts), because the key-moments player finds the
 * panel for the moment on screen by that title. A panel keyed to a title that
 * is later reworded would silently stop showing, so src/__tests__/comics.test.ts
 * fails the build instead.
 */

import type { ReactElement } from 'react'

/** What every drawing is given: an id prefix for its clip paths and gradients. */
export interface ArtProps {
  uid: string
}

/**
 * One drawing. `Draw` renders SVG content only, never the <svg> root: the
 * frame owns the root, so the role, the alt text, the textures and the rough
 * border are the same on every piece and cannot be forgotten.
 *
 * `Draw` must be pure and render on the server: no hooks, no state, no
 * 'use client', nothing fetched. Randomness comes from `rng(seed)` in
 * src/components/comics/linocut/carve.ts, never Math.random().
 */
export interface LinocutArt {
  /** The drawing's own coordinate space, as its viewBox. The frame scales it to fit. */
  width: number
  height: number
  Draw: (props: ArtProps) => ReactElement
}

/** Where a caption or quotation box is pasted onto a panel at desktop widths. */
export type BoxAt = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export interface ComicPanel {
  /** The exact `title` of the moment in the guide's timeline. */
  moment: string
  art: LinocutArt
  /**
   * What the picture shows, for a reader who cannot see it: the people, what
   * they are doing, where, and what the spot colour marks. Describe the
   * picture, not the plot, in British English.
   */
  alt: string
  /**
   * A short quotation pasted onto the panel: verbatim from the held edition
   * (src/data/full-texts/<slug>.ts) or, for a text with none held, from the
   * guide's own verified quotations. 15 words at most.
   */
  quote?: string
  quoteAt?: BoxAt
  /** A line of narration in the guide's own words, for a panel that needs one. */
  caption?: string
  captionAt?: BoxAt
}

/** One numbered marker on a portrait, and the words from the text it points to. */
export interface PortraitMarker {
  /** Verbatim from the text, 15 words at most. */
  phrase: string
  /** Where the numbered disc sits, in the drawing's coordinates. */
  at: [number, number]
  /** The feature it points to, if the disc is not on it. */
  to?: [number, number]
}

export interface Portrait {
  /** The character's name as the guide's timeline and character map give it. */
  name: string
  art: LinocutArt
  alt: string
  /**
   * The words the numbered markers point to, in marker order: marker 1 is
   * describedBy[0]. Each is the text's own description of the feature it
   * marks.
   */
  describedBy: PortraitMarker[]
  /** Where in the text the description comes from: "Stave One", "Act 1, Scene 3". */
  where: string
  /**
   * The passage the phrases come from, verbatim, printed with the markers set
   * after each phrase. Public-domain texts only: a text in copyright shows the
   * phrases alone, under the fair-dealing limits.
   */
  passage?: string
  /** One or two sentences in the guide's voice: what the description is doing. */
  note?: string
  /** What the print could not show and left to the words, and why. */
  artNote?: string
}

export interface ComicSet {
  /** The set-text slug, as in src/data/study-guides. */
  slug: string
  panels: ComicPanel[]
  portraits: Portrait[]
}
