import { PAPER, TEXTURE_SEEDS, unitRgb } from './palette'

/**
 * The print's textures, as SVG filters with fixed seeds (see TEXTURE_SEEDS), so
 * they render the same on every load.
 *
 * Every id is prefixed with the piece's `uid`. A page can hold a panel in the
 * key-moments player and several portraits in the gallery, and the player
 * swaps its panel as the reader moves: a filter defined once and shared would
 * vanish with whichever piece defined it. So each plate carries its own.
 */

/** Filter ids for one piece. */
export const textureIds = (uid: string) => ({
  rough: `${uid}-rough`,
  voids: `${uid}-voids`,
  grain: `${uid}-grain`,
})

/**
 * `rough`: displaces every edge by a couple of units, so a cut line wobbles as
 * a hand-cut one does. Applied to the whole drawing and to the block's border.
 *
 * `voids`: paper-coloured specks, used over the black, where the ink failed to
 * take. Without them the black reads as a screen fill, not a print.
 */
export function PlateFilters({ uid }: { uid: string }) {
  const id = textureIds(uid)
  const [r, g, b] = unitRgb(PAPER)
  return (
    <defs>
      <filter id={id.rough} x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.045"
          numOctaves={3}
          seed={TEXTURE_SEEDS.rough}
          result="n"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="n"
          scale={2.6}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <filter id={id.voids} x="0" y="0" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.5"
          numOctaves={2}
          seed={TEXTURE_SEEDS.voids}
          result="t"
        />
        <feColorMatrix
          in="t"
          type="matrix"
          values={`0 0 0 0 ${r}  0 0 0 0 ${g}  0 0 0 0 ${b}  34 0 0 0 -24.6`}
        />
      </filter>
    </defs>
  )
}

/**
 * Paper grain over the whole sheet: fine fibre and coarse mottling, multiplied
 * into whatever is under it. Measured in screen pixels rather than the
 * drawing's units, so a print shrunk to a phone keeps paper-sized grain
 * instead of dissolving into grey. Decorative, so hidden from assistive
 * technology.
 */
export function PaperGrain({ uid }: { uid: string }) {
  const id = textureIds(uid).grain
  return (
    <svg className="lc-grain" aria-hidden="true" focusable="false">
      <defs>
        <filter id={id} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={2}
            seed={TEXTURE_SEEDS.grainFine}
            result="f"
          />
          <feColorMatrix
            in="f"
            type="matrix"
            values="0 0 0 0 0.36  0 0 0 0 0.30  0 0 0 0 0.22  0 0 0 -1.1 0.62"
            result="fine"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.02"
            numOctaves={3}
            seed={TEXTURE_SEEDS.grainCoarse}
            result="c"
          />
          <feColorMatrix
            in="c"
            type="matrix"
            values="0 0 0 0 0.45  0 0 0 0 0.38  0 0 0 0 0.26  0 0 0 -0.55 0.3"
            result="coarse"
          />
          <feMerge>
            <feMergeNode in="coarse" />
            <feMergeNode in="fine" />
          </feMerge>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  )
}
