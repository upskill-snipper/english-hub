import { createHash } from 'node:crypto'
import type { ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { RegisteredPanel, RegisteredPortrait } from '@/components/comics/linocut/pieces'
import { PanelPlate, PortraitPlate } from '@/components/comics/linocut/plate'
import type { PortraitCardLabels } from '@/components/comics/linocut/portrait-card'
import { PLATE_CSS } from '@/components/comics/linocut/styles'

import type { ComicPanel, ComicSet, Portrait } from './types'
import { pieceUid } from './uid'

/**
 * A linocut plate as a file of its own: what scripts/generate-comic-plates.mjs
 * writes to public/comics/, what the preview script inlines, and what the
 * comics tests check the served files against. One renderer for all three, so
 * the file a student's browser fetches is the file that was previewed and
 * tested.
 *
 * BUILD AND TOOLING ONLY. This imports react-dom/server, which Next refuses in
 * any server component or route handler ("You're importing a component that
 * imports react-dom/server"), so nothing under src/app or src/components may
 * import it; the comics test checks. It runs under Node, through Vite's SSR
 * loader in the scripts and through vitest in the tests.
 *
 * THE FILE. The plate exactly as React renders it for the page, with two
 * additions a standalone file needs: the SVG namespace, without which a
 * browser will not display it as an image, and PLATE_CSS, the two rules of the
 * finished print that are CSS rather than attributes, so that shown as an
 * <img> (scripts off, a crawler, the moment before it is inlined) it is the
 * finished print too. Line endings are normalised, so a checkout with CRLF
 * files renders the same bytes as Vercel's Linux build.
 *
 * THE NAME. /comics/<slug>/<key>.<hash>.svg, where <key> is the piece's uid
 * without its `lc-<slug>-` prefix and <hash> the first 12 hex digits of the
 * SHA-256 of the file. A redrawn plate gets a new name, so a file can be cached
 * for a year (see next.config.js) and is still never served stale.
 */

export const SVG_NS = 'http://www.w3.org/2000/svg'
/** Under public/, and so at the root of the site. */
export const PLATES_DIR = 'comics'

export interface PlateFile {
  kind: 'panel' | 'portrait'
  slug: string
  /** The moment title or the character's name. */
  key: string
  uid: string
  /** The file's full text. */
  svg: string
  hash: string
  /** Its path on the site, and under public/. */
  src: string
}

const OPEN = '<svg class="lc-plate" '

function toFile(
  kind: PlateFile['kind'],
  slug: string,
  key: string,
  plate: ReactElement,
): PlateFile {
  const uid = pieceUid(slug, key)
  const markup = renderToStaticMarkup(plate).replace(/\r\n?/g, '\n')
  // The Plate renders this exact opening tag. If it ever changes, stop here
  // rather than write files a browser cannot display.
  if (!markup.startsWith(OPEN))
    throw new Error(`${uid}: the plate does not start with ${OPEN}; plate-file.tsx needs updating`)
  // React escapes ">" inside attribute values, so the first one closes the tag.
  const close = markup.indexOf('>')
  const svg = `<svg xmlns="${SVG_NS}" class="lc-plate" ${markup.slice(OPEN.length, close)}><style>${PLATE_CSS}</style>${markup.slice(close + 1)}`
  const hash = createHash('sha256').update(svg).digest('hex').slice(0, 12)
  const prefix = `lc-${slug}-`
  const name = `${uid.startsWith(prefix) ? uid.slice(prefix.length) : uid}.${hash}.svg`
  return { kind, slug, key, uid, svg, hash, src: `/${PLATES_DIR}/${slug}/${name}` }
}

export function panelPlateFile(slug: string, panel: ComicPanel): PlateFile {
  const uid = pieceUid(slug, panel.moment)
  return toFile(
    'panel',
    slug,
    panel.moment,
    <PanelPlate uid={uid} art={panel.art} alt={panel.alt} />,
  )
}

export function portraitPlateFile(slug: string, portrait: Portrait): PlateFile {
  const uid = pieceUid(slug, portrait.name)
  return toFile(
    'portrait',
    slug,
    portrait.name,
    <PortraitPlate
      uid={uid}
      art={portrait.art}
      alt={portrait.alt}
      markers={portrait.describedBy}
    />,
  )
}

/** Every plate of a text: its panels, then its portraits, in registry order. */
export function plateFiles(set: ComicSet): PlateFile[] {
  return [
    ...set.panels.map((p) => panelPlateFile(set.slug, p)),
    ...set.portraits.map((p) => portraitPlateFile(set.slug, p)),
  ]
}

/**
 * A panel exactly as a student's browser ends up showing it, through the
 * same RegisteredPanel the tests use: the frame built from its descriptor,
 * with this plate file inlined where the LazyPlate was. For the preview script.
 */
export function panelAsSeen(slug: string, panel: ComicPanel, file = panelPlateFile(slug, panel)) {
  return <RegisteredPanel slug={slug} panel={panel} plate={file} />
}

/** A portrait card as a student's browser ends up showing it. */
export function portraitAsSeen(
  slug: string,
  portrait: Portrait,
  labels: PortraitCardLabels,
  file = portraitPlateFile(slug, portrait),
) {
  return <RegisteredPortrait slug={slug} portrait={portrait} labels={labels} plate={file} />
}
