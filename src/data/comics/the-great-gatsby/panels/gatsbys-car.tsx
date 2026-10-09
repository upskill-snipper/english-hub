import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { deg, n } from '@/components/comics/linocut/carve'

/**
 * Gatsby's car, the one car in the novel that is described, drawn once so it
 * is the same car in every panel it stands in (first for "The Plaza Hotel"
 * and "The death car"; any panel may use it). From the 1925 first edition:
 * "It was a rich cream color, bright with nickel, swollen here and there in
 * its monstrous length with triumphant hat-boxes and supper-boxes and
 * tool-boxes, and terraced with a labyrinth of wind-shields that mirrored a
 * dozen suns. Sitting down behind many layers of glass in a sort of green
 * leather conservatory, we started to town." (Chapter IV.) Tom calls it
 * "this circus wagon" (Chapter VII); Chapter VIII calls it "the open car".
 *
 * So it is long and open, cut in PAPER with an ink edge: the print has no
 * cream or yellow, so its colour is left to the words. Its nickel is the
 * paper of the radiator and the lamp; three wind-shields stand one behind
 * another; its seats are dark (the green leather, left to the words); round
 * hat-boxes and a supper-box ride on a rack behind, a tool-box on the
 * running board, and a spare wheel in the front wing.
 *
 * In its own frame: facing right, its wheels on the ground at y 0, its back
 * at x -30 (the boxes) and the front of its radiator at x 296. Place it with
 * `at`, `scale` and `flip`. `children` are drawn in the car's frame after
 * the seats and the wind-shields and before the body, the wings and the
 * near-side wheels, so the body hides the people in it below the waist.
 */

/** The wheels' centres, and the tyre's radius. */
export const CAR_WHEELS: [number, number][] = [
  [62, -25],
  [236, -25],
]
const R = 25

const BODY = 'M8 -40C2 -42 0 -50 0 -60C0 -68 4 -74 12 -75L172 -76L280 -72L282 -42L176 -40Z'
/** The front wing, sweeping from the running board over the front wheel. */
const FRONT_WING =
  'M200 -22C204 -40 214 -58 236 -60C258 -62 274 -50 284 -30L278 -28C270 -46 256 -54 236 -53C218 -52 210 -40 207 -22Z'
const REAR_WING =
  'M28 -24C30 -44 44 -56 62 -57C80 -58 94 -46 98 -24L92 -24C88 -42 78 -50 62 -50C47 -50 37 -42 35 -24Z'
const BOARD = 'M96 -26H206V-21H96Z'
const RADIATOR = 'M280 -82H294V-40H280Z'
/** Three wind-shields, stepped back one behind another. */
const SHIELDS = [
  'M170 -76L163 -128L168 -128L175 -76Z',
  'M104 -75L98 -118L103 -118L109 -75Z',
  'M36 -75L31 -106L36 -106L41 -75Z',
]
/** The dark seat-backs above the sides: "a sort of green leather conservatory". */
const SEATS = [
  'M118 -75C118 -88 122 -94 132 -94H150C156 -94 158 -88 158 -75Z',
  'M46 -75C46 -90 52 -96 62 -96H84C90 -96 92 -90 92 -75Z',
]
/** The rack behind: two round hat-boxes and a supper-box. */
const BOXES = ['M-30 -40H8V-74H-30Z', 'M-26 -74H4V-96H-26Z']
const HATBOX_LIDS = 'M-30 -74H8M-26 -96H4'
const TOOLBOX = 'M128 -40H170V-26H128Z'
const LAMP: [number, number, number] = [300, -70, 7]

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  let spokes = ''
  for (let a = 0; a < 360; a += 24) {
    const t = deg(a)
    spokes += `M${n(cx + Math.cos(t) * 6)} ${n(cy + Math.sin(t) * 6)}L${n(cx + Math.cos(t) * (R - 7))} ${n(cy + Math.sin(t) * (R - 7))}`
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={R} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <circle cx={cx} cy={cy} r={R - 6} fill={PAPER} />
      <path d={spokes} stroke={INK} strokeWidth={1.3} />
      <circle cx={cx} cy={cy} r={5} fill={INK} />
    </g>
  )
}

export function GatsbysCar({
  at,
  scale = 1,
  flip = false,
  lamps,
  children,
}: {
  at: [number, number]
  scale?: number
  flip?: boolean
  /** Drawn at the headlamp, in the car's frame: its beam at dusk. */
  lamps?: ReactNode
  children?: ReactNode
}) {
  const t = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -scale : scale)} ${n(scale)})`
  return (
    <g transform={t} strokeLinejoin="round">
      {lamps}
      {/* the far wheels, just showing below the body */}
      {CAR_WHEELS.map(([cx, cy]) => (
        <circle key={`f${cx}`} cx={cx + 8} cy={cy} r={R} fill={INK} />
      ))}
      <g fill={PAPER} stroke={INK} strokeWidth={1.4}>
        {BOXES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={HATBOX_LIDS} stroke={INK} strokeWidth={2.4} />
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
        {SEATS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {/* the steering wheel */}
      <path d="M156 -92L166 -80" stroke={INK} strokeWidth={2.6} />
      <ellipse cx={156} cy={-93} rx={3} ry={8} fill="none" stroke={INK} strokeWidth={2} />
      {/* the wind-shields stand beside and behind the seats, so the people in
          the car are drawn in front of them */}
      <g fill={PAPER} stroke={INK} strokeWidth={1.2}>
        {SHIELDS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {children}
      <path d={BODY} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      {/* the moulding along the side, the doors, and the louvres of the hood */}
      <path
        d="M8 -58H278M110 -74V-42M176 -76V-41M192 -70V-48M200 -70V-48M208 -70V-48M216 -70V-48M224 -70V-48"
        stroke={INK}
        strokeWidth={1.1}
        fill="none"
      />
      <path d={TOOLBOX} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={RADIATOR} fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <path d="M284 -78V-44M287 -78V-44M290 -78V-44" stroke={INK} strokeWidth={0.8} />
      <path d="M287 -82V-88" stroke={INK} strokeWidth={3} />
      <circle cx={LAMP[0]} cy={LAMP[1]} r={LAMP[2]} fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <path d="M284 -68H296" stroke={INK} strokeWidth={2} />
      <path d={REAR_WING} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={FRONT_WING} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={BOARD} fill={INK} />
      {/* the spare wheel in the front wing */}
      <circle cx={204} cy={-50} r={16} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <circle cx={204} cy={-50} r={10} fill={PAPER} stroke={INK} strokeWidth={1} />
      {CAR_WHEELS.map(([cx, cy]) => (
        <Wheel key={cx} cx={cx} cy={cy} />
      ))}
    </g>
  )
}

/** The headlamp's centre in the car's frame, for a beam drawn at it. */
export const CAR_LAMP: [number, number] = [LAMP[0], LAMP[1]]
