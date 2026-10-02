import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, gouge, n } from '@/components/comics/linocut/carve'

import { Person } from './people'

/**
 * The Senate's hall in the Capitol, where Caesar is killed in Act 3, Scene 1
 * ("Rome. Before the Capitol; the Senate sitting"), cut once for the two
 * panels set there, "The assassination" and "Antony alone with the body", so
 * the room is the same room before the deed and after it.
 *
 * WHAT THE PLAY SAYS OF IT (the held edition, Project Gutenberg #1522,
 * src/data/full-texts/julius-caesar.ts), and so what is drawn:
 * - "Caesar enters the Capitol, the rest following. All the Senators rise";
 *   "Caesar and the Senators take their seats". So the Senators sit on
 *   benches (`benches`), and Caesar has a seat of his own: "Metellus Cimber
 *   throws before thy seat An humble heart". The play does not describe the
 *   seat, so it is the plain folding seat of a Roman magistrate, with crossed
 *   legs and no back (`CaesarsSeat`): a ruler's seat, not a king's throne,
 *   for the man who "would not take the crown".
 * - Pompey's statue stands there. Antony: "Even at the base of Pompey's
 *   statue ... great Caesar fell"; Brutus: "That now on Pompey's basis lies
 *   along". So the statue stands on a high base (`PompeyStatue`), white
 *   stone in a dark niche. The play does not describe it, so it is the kit's
 *   plain senator (./people.tsx) cut in stone, as the kit cuts "Caesar's
 *   images" (CaesarImage in ./rome.tsx): blank eyes, arms held down, a scroll
 *   in the hand. Never a raised arm, which reads as a salute at panel size,
 *   and no wreath, so it is never taken for Caesar's own image.
 * - The building is not described beyond its name, so its columns
 *   (`column`) are plain Roman ones, and nothing is taken from a film or
 *   stage production.
 *
 * Every shape is drawn in its own frame and placed by the panel, so each can
 * compose the room for its own moment. Coordinates are rounded with n().
 */

export type P = [number, number]

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

// ── Pompey's statue on its base, in a frame whose origin is the centre of the
//    base's foot on the floor; up is negative. About 220 units tall. ─────────

/** The base: plinth, die and cornice, cut in paper. */
const BASE = 'M-56 0L-56 -9L-48 -12L-48 -78L-56 -82L-56 -90L56 -90L56 -82L48 -78L48 -12L56 -9L56 0Z'
/** The mouldings and the sunk panel on the face of the base, in ink. */
const BASE_CUTS =
  gouge(-54, -84.5, 54, -84.5, 1.3) +
  gouge(-46, -14.5, 46, -14.5, 1.3) +
  'M-36 -70H36V-24H-36ZM-32.6 -66.6V-27.4H32.6V-66.6Z' +
  gouge(-52, -5, 52, -5, 0.9)

/**
 * The statue on its base. `flip` turns the figure to face left; the base is
 * the same either way.
 */
export function PompeyStatue({
  at,
  scale = 1,
  flip = false,
}: {
  at: P
  scale?: number
  flip?: boolean
}) {
  const t = `translate(${n(at[0])} ${n(at[1])}) scale(${n(scale)})`
  return (
    <g transform={t}>
      <path d={BASE} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={BASE_CUTS} fill={INK} fillRule="evenodd" />
      <Person
        at={[0, -90]}
        scale={0.74}
        flip={flip}
        stone
        pose={{
          look: 'senator',
          feet: [-6, 7],
          hem: { front: 20, back: 24 },
          near: {
            pts: [
              [5, -128],
              [12, -106],
              [16, -86],
            ],
            hand: 'grip',
            deg: 80,
          },
        }}
      >
        {/* the scroll in his hand, as Caesar's images hold theirs */}
        <path
          d="M10.6 -88.6L22.6 -86.6L21.6 -80.6L9.6 -82.6Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
          strokeLinejoin="round"
        />
        <path d="M10.6 -88.6L9.6 -82.6M22.6 -86.6L21.6 -80.6" stroke={INK} strokeWidth={1.1} />
      </Person>
    </g>
  )
}

/** The outline of the niche behind the statue, in the frame of `PompeyStatue`. */
export function nichePath(half = 84, top = -250): string {
  const spring = top + half
  return `M${-half} 0L${-half} ${spring}${arc(0, spring, half, Math.PI, Math.PI * 2).replace(/^M[^A]+/, '')}L${half} 0Z`
}

// ── Caesar's seat: a folding seat with crossed legs, from the side. Its
//    origin is on the floor under the middle of the seat. ────────────────────

const SEAT_LEGS = ['M-26 0C-22 -12 -6 -30 22 -44', 'M26 0C22 -12 6 -30 -22 -44']
const SEAT_TOP = 'M-31 -49L31 -49L29 -43L-29 -43Z'
const SEAT_CUSHION = 'M-28 -49C-28 -55 -22 -56 0 -56C22 -56 28 -55 28 -49Z'
const SEAT_FEET = 'M-32 0L-20 0L-21 -3L-31 -3ZM20 0L32 0L31 -3L21 -3Z'

/**
 * Caesar's seat. `empty` draws its cushion with a paper fold, for the panel
 * after he is gone; otherwise the panel seats him on it.
 */
export function CaesarsSeat({ at, scale = 1 }: { at: P; scale?: number }) {
  const t = `translate(${n(at[0])} ${n(at[1])}) scale(${n(scale)})`
  return (
    <g transform={t} strokeLinecap="round" strokeLinejoin="round">
      <g fill="none" stroke={PAPER} strokeWidth={9.2}>
        {SEAT_LEGS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={SEAT_TOP + SEAT_CUSHION + SEAT_FEET} fill={PAPER} stroke={PAPER} strokeWidth={3.2} />
      <g fill="none" stroke={INK} strokeWidth={5.6}>
        {SEAT_LEGS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={SEAT_TOP + SEAT_CUSHION + SEAT_FEET} fill={INK} />
      <path d={gouge(-24, -52.6, 24, -52.6, 0.9) + gouge(-27, -46, 27, -46, 0.7)} fill={PAPER} />
      <circle cx={0} cy={-26.4} r={3} fill={PAPER} />
    </g>
  )
}

// ── Columns ───────────────────────────────────────────────────────────────────

/**
 * A plain Roman column in white stone from `top` to `bottom` at `x`, `w`
 * wide: the shaft, a square capital over a rounded one, and a base. Returns
 * the white shapes and the ink of its flutes and joints separately, so a
 * panel can draw many columns as one path each.
 */
export function column(x: number, top: number, bottom: number, w = 24) {
  const h = w / 2
  const cap = 13
  const foot = 11
  const shaft = `M${n(x - h)} ${n(top + cap)}L${n(x - h * 0.9)} ${n(bottom - foot)}L${n(x + h * 0.9)} ${n(bottom - foot)}L${n(x + h)} ${n(top + cap)}Z`
  const capital = `M${n(x - h - 6)} ${n(top)}L${n(x + h + 6)} ${n(top)}L${n(x + h + 6)} ${n(top + 5)}L${n(x + h + 2)} ${n(top + 5)}Q${n(x + h + 1)} ${n(top + cap)} ${n(x + h)} ${n(top + cap)}L${n(x - h)} ${n(top + cap)}Q${n(x - h - 1)} ${n(top + cap)} ${n(x - h - 2)} ${n(top + 5)}L${n(x - h - 6)} ${n(top + 5)}Z`
  const base = `M${n(x - h * 0.9)} ${n(bottom - foot)}L${n(x + h * 0.9)} ${n(bottom - foot)}Q${n(x + h + 3)} ${n(bottom - foot + 2)} ${n(x + h + 3)} ${n(bottom - 5)}L${n(x + h + 6)} ${n(bottom - 5)}L${n(x + h + 6)} ${n(bottom)}L${n(x - h - 6)} ${n(bottom)}L${n(x - h - 6)} ${n(bottom - 5)}L${n(x - h - 3)} ${n(bottom - 5)}Q${n(x - h - 3)} ${n(bottom - foot + 2)} ${n(x - h * 0.9)} ${n(bottom - foot)}Z`
  let flutes = ''
  for (const k of [-0.56, -0.18, 0.18, 0.56])
    flutes += gouge(
      x + k * w * 0.98,
      top + cap + 4,
      x + k * w * 0.9,
      bottom - foot - 3,
      0.9 + (1 - Math.abs(k)) * 0.4,
    )
  // the shaded side of the shaft, away from the light
  flutes += gouge(x + h * 0.86, top + cap + 2, x + h * 0.78, bottom - foot - 1, 1.8)
  const joints = `M${n(x - h - 6)} ${n(top + 5)}H${n(x + h + 6)}M${n(x - h - 6)} ${n(bottom - 5)}H${n(x + h + 6)}`
  return { white: shaft + capital + base, flutes, joints }
}

// ── The Senators' benches ─────────────────────────────────────────────────────

/**
 * Stepped stone benches from x0 to x1, their front edge on the floor at `y`,
 * `tiers` high, each tier `rise` tall and `depth` deep. White seats with ink
 * risers; returns paths for each, and the y of each tier's seat so a panel
 * can sit Senators on them.
 */
export function benches(x0: number, x1: number, y: number, tiers = 3, rise = 20, depth = 12) {
  let seats = ''
  let risers = ''
  const seatY: number[] = []
  for (let i = 0; i < tiers; i++) {
    const top = y - rise * (i + 1)
    const inset = i * depth * 0.6
    seats += `M${n(x0 + inset)} ${n(top)}L${n(x1 - inset)} ${n(top)}L${n(x1 - inset)} ${n(top + 5)}L${n(x0 + inset)} ${n(top + 5)}Z`
    risers += `M${n(x0 + inset)} ${n(top + 5)}L${n(x1 - inset)} ${n(top + 5)}L${n(x1 - inset)} ${n(top + rise)}L${n(x0 + inset)} ${n(top + rise)}Z`
    seatY.push(top)
  }
  return { seats, risers, seatY }
}

export { pt }
