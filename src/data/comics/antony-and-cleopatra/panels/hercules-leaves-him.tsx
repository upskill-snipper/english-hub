import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Spear } from './field-gear'
import { lightField } from './light-cuts'
import { Column, EDGE, beam } from './palace'
import { Person, type P } from './people'

/**
 * Act 4, Scene 3: "Hercules leaves him", the fifteenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. Before the Palace." "Brother, good night. Tomorrow is the
 *   day." So it is night, under the stars, and the watch stand in the open
 *   square before the palace front at the right: the round columns of
 *   ./palace.tsx, the same palace as the halls inside, on their steps, the
 *   doors shut. Antony is within, and is not seen.
 * - "Enter a Company of Soldiers." "Soldiers, have careful watch." "[They
 *   place themselves in every corner of the stage.]" So four soldiers of the
 *   watch, in the kit's armour and crested helmets (./people.tsx), stand
 *   apart across the square, two of them with the spears of ./field-gear.tsx.
 *   No sword is drawn.
 * - "[Music of the hautboys under the stage.]" "Peace, what noise?" "List,
 *   list!" "Music i’ th’ air." "Under the earth." So the music is drawn as
 *   the pilot draws the sound of bells, in rings
 *   (../../a-christmas-carol/panels/christmas-morning.tsx), and the rings rise
 *   out of the paving of the square and go up into the air and out of the
 *   picture. One soldier, nearest the palace, points down at the paving it
 *   comes from; one, with his spear, lifts his face to the air.
 * - "’Tis the god Hercules, whom Antony loved, Now leaves him." "Follow the
 *   noise so far as we have quarter." So the soldier who names the god points
 *   up after it, his arm bent at the elbow, never raised straight. Hercules
 *   is never seen: the play gives only the music, so the panel does too.
 * - "It signs well, does it not?" "No." So the fourth soldier, at the left
 *   with his spear, turns to the others with his open hand, asking.
 *
 * RED is the music, the one thing in the scene that is not of this world:
 * the rings are printed in the spot colour, cut broad so they stay rings at
 * phone width, and they rise up the middle of the square clear of every
 * face, hand and spear. Nothing is taken from a film or stage production.
 * Seeds: 1501 (the sky), 1502 (the stars), 1503 (the square), 1504 (the
 * palace wall).
 */

const W = 860
const H = 340
/** Where the paving of the square begins, and where the soldiers stand. */
const SQUARE = 286
const FEET = 324
/** The palace front: its steps, the columns standing on them, the beam over them. */
const STEP = { x0: 616, top: 262, mid: 274 }
const COLS = [672, 792]
const BEAM = { top: 46, bottom: 72 }
/** The shut doors between the columns. */
const DOORS = { x0: 712, x1: 752, top: 148 }
/** The soldiers' scale. */
const S = 1.1

/**
 * The music: rings of sound rising out of the paving and up into the air,
 * growing as they go, each the arc of a ring over its centre. Centre, radius,
 * and the arc's span in degrees (-90 is straight up). The smallest is 14
 * across its radius, so that even the lowest, on the stones, stays a ring at
 * phone width and never shrinks to a red speck on the ground.
 */
const RINGS: { c: P; r: number; a0: number; a1: number }[] = [
  { c: [494, 300], r: 14, a0: -158, a1: -22 },
  { c: [486, 262], r: 18, a0: -156, a1: -24 },
  { c: [478, 220], r: 22, a0: -155, a1: -25 },
  { c: [470, 174], r: 26, a0: -154, a1: -26 },
  { c: [462, 124], r: 30, a0: -152, a1: -28 },
  { c: [456, 70], r: 34, a0: -150, a1: -30 },
  { c: [452, 12], r: 38, a0: -148, a1: -32 },
]

/** One arc of a ring, as a filled band `w` thick: a flat shape the red block prints. */
function arcBand(c: P, r: number, a0: number, a1: number, w: number) {
  const steps = 14
  const pt = (a: number, rad: number) => {
    const t = (a * Math.PI) / 180
    return `${n(c[0] + Math.cos(t) * rad)} ${n(c[1] + Math.sin(t) * rad)}`
  }
  let d = ''
  for (let i = 0; i <= steps; i++)
    d += `${i ? 'L' : 'M'}${pt(a0 + ((a1 - a0) * i) / steps, r + w / 2)}`
  for (let i = steps; i >= 0; i--) d += `L${pt(a0 + ((a1 - a0) * i) / steps, r - w / 2)}`
  return d + 'Z'
}

type Marks = {
  sky: string
  stars: string
  square: string
  wall: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The night sky: ink, cut more towards the roofs of the city below it, so
  // the helmets stand dark against its lower half.
  const sky = lightField(
    1501,
    { x0: 0, x1: STEP.x0 + 30, y0: 0, y1: SQUARE },
    (_x, y) => clamp(0.05 + (y / SQUARE) ** 1.6 * 0.6),
    { spacing: 7, len: [30, 90], gap: [8, 24], max: 2.6 },
  )
  // A few stars, small crosses cut clean in the dark upper sky, kept off the
  // column the music rises up and above the helmets.
  const r = rng(1502)
  let stars = ''
  for (let k = 0; k < 26; k++) {
    const x = between(r, 12, 600)
    const y = between(r, 10, 96)
    if (Math.abs(x - 462) < 62) continue
    const s = between(r, 1.6, 2.8)
    stars += `M${n(x - s)} ${n(y)}H${n(x + s)}M${n(x)} ${n(y - s)}V${n(y + s)}`
  }
  // The square's paving, its joints catching the light in paper.
  const square = flagFloor(rng(1503), W, H, SQUARE, [380, 150], 62, 4)
  // The palace wall behind the columns: dark, its courses faintly cut.
  const wall = lightField(
    1504,
    { x0: STEP.x0 + 20, x1: W, y0: BEAM.bottom, y1: STEP.top },
    () => 0.18,
    { spacing: 12, len: [20, 60], gap: [10, 26], max: 2 },
  )
  cached = { sky, stars, square, wall }
  return cached
}

/**
 * A spear standing in a soldier's hand, drawn behind him in his own frame,
 * its head below the quotation's corner so it stays a spear on a wide screen.
 */
function SpearFor({ at, s, flip = false, grip }: { at: P; s: number; flip?: boolean; grip: P }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`}>
      <Spear grip={grip} top={-206} foot={-1} />
    </g>
  )
}

/** A soldier's hand on his spear, and where the spear stands, in his figure's frame. */
const SPEAR_GRIP: P = [21, -96]
const SPEAR_ARM: P[] = [
  [5, -128],
  [12, -106],
  [16, -96],
]

function HerculesLeavesHim(_props: ArtProps) {
  const m = marks()
  const b = beam(W - STEP.x0, BEAM.top, BEAM.bottom)
  const sSoldier = S
  return (
    <g className="lc-push" style={timing({ origin: [460, 180], push: 1.03 })}>
      {/* the night over the city */}
      <rect x={0} y={0} width={W} height={H} fill={INK} />
      <path d={m.sky} fill={PAPER} />
      <path d={m.stars} stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />

      {/* the palace front: its wall, the shut doors, the steps, the columns, the beam */}
      <rect x={STEP.x0 + 20} y={BEAM.bottom} width={W} height={STEP.top - BEAM.bottom} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <path
        d={`M${DOORS.x0} ${STEP.top}V${DOORS.top}H${DOORS.x1}V${STEP.top}Z`}
        fill={INK}
        {...EDGE}
      />
      <path
        d={`M${(DOORS.x0 + DOORS.x1) / 2} ${DOORS.top + 2}V${STEP.top - 2}`}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={`M${STEP.x0 + 14} ${STEP.top}H${W + 10}V${STEP.mid}H${STEP.x0 + 14}Z`}
        fill={INK}
        {...EDGE}
      />
      <path d={`M${STEP.x0} ${STEP.mid}H${W + 10}V${SQUARE}H${STEP.x0}Z`} fill={INK} {...EDGE} />
      {COLS.map((cx) => (
        <Column key={cx} cx={cx} top={BEAM.bottom} foot={STEP.top + 1} />
      ))}
      <g transform={`translate(${STEP.x0 + 20} 0)`}>
        <path d={b.shape} fill={INK} {...EDGE} />
        <path d={b.cuts} fill={PAPER} />
      </g>

      {/* the square */}
      <rect x={0} y={SQUARE} width={W} height={H - SQUARE} fill={INK} />
      <path d={m.square} fill={PAPER} />
      <path d={`M0 ${SQUARE}H${W}`} stroke={PAPER} strokeWidth={1.6} />

      {/* the fourth soldier, his spear in his far hand, turned to the others
          with his open hand: "It signs well, does it not?" */}
      <SpearFor at={[86, FEET]} s={sSoldier} grip={[-8, -94]} />
      <Person
        pose={{
          look: 'soldier',
          head: { rot: 4 },
          far: {
            pts: [
              [-4, -130],
              [-10, -107],
              [-12, -94],
            ],
            hand: 'grip',
            deg: 0,
          },
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [33, -96],
            ],
            hand: 'open',
            deg: -24,
            thumb: -1,
          },
        }}
        at={[86, FEET]}
        scale={S}
      />
      {/* the second soldier, pointing up after it, his arm bent:
          "’Tis the god Hercules, whom Antony loved, Now leaves him." */}
      <Person
        pose={{
          look: 'soldier',
          head: { rot: -14 },
          mouth: 'open',
          legs: {
            far: [
              [-3, -70],
              [-10, -36],
              [-15, -3],
            ],
            near: [
              [3, -70],
              [12, -37],
              [17, -3],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [28, -120],
              [45, -137],
            ],
            hand: 'point',
            deg: -50,
          },
        }}
        at={[216, FEET + 2]}
        scale={S}
      />
      {/* the first soldier, his face lifted to it: "Music i’ th’ air." */}
      <SpearFor at={[326, FEET + 1]} s={sSoldier} grip={SPEAR_GRIP} />
      <Person
        pose={{
          look: 'soldier',
          head: { rot: -24 },
          near: { pts: SPEAR_ARM, hand: 'grip', deg: 0 },
        }}
        at={[326, FEET + 1]}
        scale={S}
      />
      {/* the third soldier, nearest the palace, pointing down at the paving: "Under the earth." */}
      <g transform={`rotate(-6 604 ${FEET + 2})`}>
        <Person
          pose={{
            look: 'soldier',
            head: { rot: 14 },
            mouth: 'open',
            near: {
              pts: [
                [5, -128],
                [14, -105],
                [27, -86],
              ],
              hand: 'point',
              deg: 64,
            },
          }}
          at={[604, FEET + 2]}
          scale={S}
          flip
        />
      </g>

      {/* the music, rising out of the paving and away into the air */}
      <g fill={RED}>
        {RINGS.map((ring, k) => (
          <path
            key={k}
            className="lc-fade-in"
            style={timing({ delay: 0.4 + k * 0.3, dur: 0.8 })}
            d={
              arcBand(ring.c, ring.r, ring.a0, ring.a1, 4.6) +
              arcBand(ring.c, ring.r + 9, ring.a0 + 12, ring.a1 - 12, 3.6)
            }
          />
        ))}
      </g>
    </g>
  )
}

export const herculesLeavesHim: LinocutArt = { width: W, height: H, Draw: HerculesLeavesHim }
