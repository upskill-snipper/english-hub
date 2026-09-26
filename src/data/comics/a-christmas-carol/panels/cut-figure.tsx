import type { ReactNode } from 'react'

import { INK, PAPER } from '@/components/comics/linocut/palette'

import { SCROOGE_HEAD, SCROOGE_NECK } from '../scrooge'

/**
 * Shared parts for the A Christmas Carol panels. Drawn first for Fred's
 * party, Ignorance and Want, the dead man's belongings and the body on the
 * bed; other panels now import NIGHTCAP, HEAD and headAt from here too, so a
 * change to any shape below changes every panel that uses it. Check them all
 * in the preview before changing one.
 *
 * A figure in these prints is a black silhouette with one carved paper
 * outline round the whole of it, as Fred and Bob are in the counting-house
 * panel: the halo is drawn first under every part, then the parts in ink over
 * it, so arms and bodies merge into one shape with a single edge instead of
 * each part carrying its own outline.
 */

/** A limb or a staff: a thick stroked path, `w` wide. */
export type Limb = [d: string, w: number]

/**
 * One part of a silhouette: filled `shapes`, stroked `limbs`, and `front`
 * shapes inked after the limbs (a hand over a sleeve). `at` places the part
 * with a transform; `scale` is that transform's scale, so the halo round it
 * keeps the same width as the rest of the figure.
 */
export interface Part {
  shapes?: string[]
  limbs?: Limb[]
  front?: string[]
  at?: string
  scale?: number
}

/**
 * One silhouette built from parts, with a paper halo `halo` wide round the
 * whole of it. `children` are the cuts and touches of colour on top.
 */
export function Cut({
  parts,
  halo = 3.4,
  children,
}: {
  parts: Part[]
  halo?: number
  children?: ReactNode
}) {
  return (
    <g>
      {parts.map((p, i) => {
        const h = (halo * 2) / (p.scale ?? 1)
        return (
          <g key={`h${i}`} transform={p.at}>
            <g fill={PAPER} stroke={PAPER} strokeWidth={h} strokeLinejoin="round">
              {[...(p.shapes ?? []), ...(p.front ?? [])].map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
            <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
              {(p.limbs ?? []).map(([d, w]) => (
                <path key={d} d={d} strokeWidth={w + h} />
              ))}
            </g>
          </g>
        )
      })}
      {parts.map((p, i) => (
        <g key={`i${i}`} transform={p.at}>
          <g fill={INK}>
            {(p.shapes ?? []).map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
            {(p.limbs ?? []).map(([d, w]) => (
              <path key={d} d={d} strokeWidth={w} />
            ))}
          </g>
          <g fill={INK}>
            {(p.front ?? []).map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
        </g>
      ))}
      {children}
    </g>
  )
}

/**
 * Scrooge's nightcap, in the frame of SCROOGE_HEAD (facing right, 0..200 by
 * 0..320). Stave One: "put on his dressing-gown and slippers, and his
 * nightcap"; Stave Two: he goes with the Spirit "clad but lightly in his
 * slippers, dressing-gown, and nightcap", and the text never has him change.
 * So in every Spirit's company he wears them. A plain stocking cap, its end
 * falling behind his head.
 */
export const NIGHTCAP =
  'M170 84C170 52 152 26 120 16C96 8 66 8 44 20C22 32 4 56 -10 86C-20 108 -28 132 -30 156L-14 160C-10 138 -2 118 10 100C18 90 26 84 32 82L36 122C72 108 122 94 170 84Z'
/** The tassel on the end of the cap. */
export const NIGHTCAP_TASSEL = 'M-36 154C-42 166 -38 182 -26 184C-14 184 -10 170 -14 158Z'
/** Folds in the cap and the line of its turned-up brim, to be stroked in ink. */
export const NIGHTCAP_FOLDS =
  'M38 110C76 96 124 84 168 74M60 30C44 44 32 62 22 84M100 16C80 30 66 50 58 74'

/**
 * Scrooge's nightcap as a paper shape on his black silhouette: the one thing
 * that tells him from the living at a glance in the Spirits' company. The
 * text does not give its colour; white linen was the plain nightcap of 1843.
 * Place it with the same transform as his head, from scroogeHead().
 */
export function Nightcap({ part }: { part: Part }) {
  const s = part.scale ?? 1
  return (
    <g transform={part.at}>
      <g fill={PAPER} stroke={INK} strokeWidth={1.3 / s} strokeLinejoin="round">
        <path d={NIGHTCAP} />
        <path d={NIGHTCAP_TASSEL} />
      </g>
      <path d={NIGHTCAP_FOLDS} fill="none" stroke={INK} strokeWidth={1 / s} strokeLinecap="round" />
    </g>
  )
}

/**
 * A plain head in profile facing left, crown to chin about 31 units, centred
 * on the origin, with the neck below: for the people the text does not
 * describe closely. `open` has the mouth open, laughing or crying out.
 */
export const HEAD =
  'M2 -16C-6 -16 -10 -12 -10.5 -7L-11.5 -3L-15 1.5L-11.5 3.2L-11.5 6.5L-11 9L-10 12.5C-7 15 -2 15.5 1 14L0 20L9 20C10 15 12 10 13 4C14 -8 10 -16 2 -16Z'
export const HEAD_OPEN =
  'M2 -16C-6 -16 -10 -12 -10.5 -7L-11.5 -3L-15.5 1.5L-11.5 3L-12 5L-8 6.8L-11.5 8.6L-10 12.5C-7 15 -2 15.5 1 14L0 20L9 20C10 15 12 10 13 4C14 -8 10 -16 2 -16Z'

/** The transform for a HEAD `size` units tall at (x, y): facing left, or right with `right`. */
export function headAt(x: number, y: number, size: number, right = false, tilt = 0) {
  const s = size / 31
  return {
    at: `translate(${x} ${y}) rotate(${tilt}) scale(${right ? -s : s} ${s})`,
    scale: s,
  }
}

/** SCROOGE_HEAD's frame units per unit of head height (crown to chin). */
const HEAD_FRAME = 170

/**
 * Scrooge's head, `size` units from crown to chin, centred on (x, y), facing
 * right or (with `left`) facing left, tilted by `tilt` degrees, as a Part.
 */
export function scroogeHead(x: number, y: number, size: number, left = false, tilt = 0): Part {
  const s = size / HEAD_FRAME
  return {
    shapes: [SCROOGE_HEAD, SCROOGE_NECK, NIGHTCAP, NIGHTCAP_TASSEL],
    // the cap is inked over this silhouette by <Nightcap part={...} />
    at: `translate(${x} ${y}) rotate(${tilt}) scale(${left ? -s : s} ${s}) translate(-110 -116)`,
    scale: s,
  }
}

/**
 * One holly leaf of the Ghost of Christmas Present's wreath, about 16 units
 * long, centred on the origin and lying along the x axis: "on its head it
 * wore no other covering than a holly wreath, set here and there with
 * shining icicles".
 */
export const HOLLY_LEAF =
  'M-8 0Q-6 -5 -3.5 -2.5Q-1 -7 1.5 -2.5Q4 -6 6 -1.5Q8 1 6 2.5Q2 5 -2 4Q-7 4 -8 0Z'

/**
 * The Ghost of Christmas Present's head in profile, facing left, in a frame
 * with the base of its neck at the origin: the face (its neck included) and
 * the mass of its long hair behind it, "Its dark brown curls were long and
 * free". Fred's party fills the hair with ink; Ignorance and Want, where
 * "its hair was grey", cuts it pale.
 */
export const PRESENT_FACE =
  'M-7 -52C-14 -50 -18 -44 -19 -37L-20.5 -32L-26.5 -23.5C-26.5 -21.5 -24 -21 -21.5 -21L-22 -17L-18.5 -15L-21.5 -13C-21 -8.5 -19 -5.5 -16 -4C-11 -1.5 -6 -2 -3 -3.5L-2 3L10 3L8.5 -28C8.5 -42 3.5 -50 -7 -52Z'
export const PRESENT_HAIR =
  'M-14 -50C-6 -60 10 -60 18 -50C26 -48 28 -38 26 -32C32 -28 32 -18 28 -14C34 -10 34 0 30 4C36 8 36 18 30 22C34 28 30 36 24 36C20 40 12 38 12 32C8 28 10 20 12 14L10 2C6 -6 4 -16 4 -24C2 -30 -2 -36 -6 -40C-10 -44 -14 -46 -14 -50Z'
