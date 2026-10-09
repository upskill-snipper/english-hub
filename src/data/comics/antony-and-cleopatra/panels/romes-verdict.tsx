import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { lightField, skyLines } from './light-cuts'
import { Column, beam, parapet } from './palace'
import { Person, type P } from './people'

/**
 * Act 1, Scene 1: "Rome’s verdict, Egypt’s reply", the first moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in Cleopatra’s palace." So the hall of the palace cut
 *   in ./palace.tsx: round columns carrying a beam, open to the daylight. It
 *   is day: Antony asks "What sport tonight?" and plans to wander the streets
 *   "Tonight".
 * - "Enter Demetrius and Philo." PHILO: "Look where they come: Take but good
 *   note, and you shall see in him The triple pillar of the world transform’d
 *   Into a strumpet’s fool. Behold and see." So on the left, in the shadow at
 *   the edge of the hall, the two Roman officers in armour watch: Philo,
 *   frowning, points at Antony; Demetrius stands behind him. Rome's verdict
 *   is theirs.
 * - "Enter a Messenger." "News, my good lord, from Rome." ANTONY: "Grates me,
 *   the sum." So between them and Antony, the messenger from Rome, in a short
 *   tunic and travelling cloak, holds out his letter, and Antony does not turn
 *   to it: his back is to Rome, and his far hand is flung back open, waving
 *   it off.
 * - ANTONY: "The nobleness of life Is to do thus [Embracing]". So Antony and
 *   Cleopatra stand together against the brightest opening, face to face,
 *   her hand on his breast and his arm round her waist: she is cut after
 *   him, so his forearm passes behind her and his hand is hidden at her back,
 *   and the arm reads as an embrace, not as a hand laid on her. Their heads
 *   are inclined to each other but kept apart. That is Egypt's reply.
 *   Antony is the kit's (./people.tsx): bearded, grizzled, the biggest man in
 *   the hall; at ease in Alexandria, so in his tunic, not his armour ("His
 *   captain’s heart, Which in the scuffles of great fights hath burst The
 *   buckles on his breast"). Cleopatra is the kit's: her hair long and loose
 *   and the queen's mantle behind her. She is not crowned: the kit gives her
 *   the crown only where the play does, in 5.2, so that putting it on there
 *   means what the play means by it.
 * - "Flourish. Enter Antony and Cleopatra, her Ladies, the Train, with
 *   Eunuchs fanning her." So two of her attendants stand behind her, each
 *   holding a tall fan on a staff over her head. The play gives the fans no
 *   colour; they are printed in the spot colour because they are Egypt's, the
 *   one thing in the hall that is the queen's alone, and each is cut large, a
 *   half round of ribs on its staff, so it stays a fan at phone width.
 *
 * The quotation is Antony's answer to Rome, verbatim. Nothing is taken from a
 * film or stage production. Seeds: 101 (the wall), 102 (the sky), 103 (the
 * floor), 104 to 106 (the parapets).
 */

const W = 860
const H = 340
/** The beam across the top, where the wall meets the floor, and where the feet stand. */
const BEAM = { top: 14, bottom: 40 }
const WALL_FOOT = 262
const FEET = 322
/** The column centres, and the capital tops. */
const COLS = [150, 372, 594, 816]
const CAP_TOP = 40
/** The parapet along the foot of the openings. */
const SILL = 224

/**
 * The fans: the top of each staff, where the fan is, its radius, and the
 * direction the staff runs down from it to the attendant's hands. Each staff
 * passes through both hands of the attendant who holds it.
 */
const FANS: { top: P; r: number; down: P; len: number }[] = [
  { top: [530, 70], r: 34, down: [78, 144], len: 190 },
  { top: [626, 86], r: 30, down: [62, 136], len: 174 },
]

type Marks = {
  wall: string
  sky: string
  floor: string
  parapets: { shape: string; cuts: string }[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall at the left, out of the light: dark, cut more as it nears the
  // first opening.
  const wall = lightField(
    101,
    { x0: 0, x1: COLS[0], y0: BEAM.bottom + 2, y1: WALL_FOOT },
    (x, y) => clamp(0.12 + (x / COLS[0]) * 0.45 - (y - 150) / 900),
    { spacing: 6, len: [12, 40], gap: [6, 18], max: 3 },
  )
  // The openings: daylight, the paper scored only lightly, a little darker
  // towards the top.
  const sky = skyLines(
    102,
    { x0: COLS[0], x1: W, y0: BEAM.bottom + 2, y1: SILL - 2 },
    (_x, y) => 0.4 - (y - BEAM.bottom) / 260,
  )
  const floor = flagFloor(rng(103), W, H, WALL_FOOT, [470, 120], 64, 5)
  const parapets = [0, 1, 2].map((k) =>
    parapet(104 + k, COLS[k] + 14, COLS[k + 1] - 14, SILL, WALL_FOOT),
  )
  cached = { wall, sky, floor, parapets }
  return cached
}

/**
 * A fan on its staff: a half round of ribs at the top of the staff, opening
 * away from it. In the spot colour, its ribs cut in ink and its rim edged in
 * ink so it reads against paper and ink alike.
 */
function Fan({ top, r, down, len }: { top: P; r: number; down: P; len: number }) {
  const L = Math.hypot(down[0], down[1])
  const u: P = [-down[0] / L, -down[1] / L]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number): P => [
    top[0] + u[0] * x + v[0] * y,
    top[1] + u[1] * x + v[1] * y,
  ]
  const foot: P = [top[0] - u[0] * len, top[1] - u[1] * len]
  let d = ''
  for (let k = 0; k <= 12; k++) {
    const t = -Math.PI / 2 + (k / 12) * Math.PI
    const p = at(Math.cos(t) * r, Math.sin(t) * r)
    d += `${k ? 'L' : 'M'}${n(p[0])} ${n(p[1])}`
  }
  d += 'Z'
  let ribs = ''
  for (let k = 1; k < 8; k++) {
    const t = -Math.PI / 2 + (k / 8) * Math.PI
    const p = at(Math.cos(t) * (r - 3), Math.sin(t) * (r - 3))
    const q = at(Math.cos(t) * 5, Math.sin(t) * 5)
    ribs += `M${n(q[0])} ${n(q[1])}L${n(p[0])} ${n(p[1])}`
  }
  const staff = `M${n(foot[0])} ${n(foot[1])}L${n(top[0])} ${n(top[1])}`
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={staff} stroke={PAPER} strokeWidth={6.4} />
      <path d={staff} stroke={INK} strokeWidth={3.2} />
      <path d={d} fill={PAPER} stroke={PAPER} strokeWidth={4} />
      <path d={d} fill={RED} stroke={INK} strokeWidth={1.4} />
      <path d={ribs} stroke={INK} strokeWidth={1.3} />
      <circle cx={n(top[0])} cy={n(top[1])} r={4} fill={INK} />
    </g>
  )
}

/** The scale every figure in the hall is drawn at. */
const S = 1.06
/** Antony, his back to Rome, and Cleopatra facing him. */
const ANTONY_AT: P = [474, FEET]
const CLEO_AT: P = [526, FEET]

/**
 * The two attendants who hold the fans: where each stands (facing left), the
 * fan whose staff he holds, and the heights of his two hands on it.
 */
const BEARERS: { at: P; fan: number; hands: [number, number]; rot: number }[] = [
  { at: [632, FEET + 4], fan: 0, hands: [168, 210], rot: 0 },
  { at: [714, FEET + 4], fan: 1, hands: [178, 216], rot: 6 },
]

/** The point on a fan's staff at height `y`. */
function onStaff(f: (typeof FANS)[number], y: number): P {
  const t = (y - f.top[1]) / f.down[1]
  return [f.top[0] + f.down[0] * t, f.top[1] + f.down[1] * t]
}

/**
 * The arms of an attendant holding his staff, in his own frame (he faces
 * left, so x is measured back from `at`): both hands closed round the staff,
 * the upper one the near hand, so the staff passes through both.
 */
function bearerArms(b: (typeof BEARERS)[number]) {
  const s = S * 0.98
  const frame = ([x, y]: P): P => [(b.at[0] - x) / s, (y - b.at[1]) / s]
  const hi = frame(onStaff(FANS[b.fan], b.hands[0]))
  const lo = frame(onStaff(FANS[b.fan], b.hands[1]))
  return {
    far: {
      pts: [[-4, -128], [(lo[0] - 4) / 2 + 2, -104], lo] as P[],
      hand: 'grip' as const,
    },
    near: {
      pts: [[5, -128], [(hi[0] + 5) / 2 + 6, -126], hi] as P[],
      hand: 'grip' as const,
    },
  }
}

/** The letter from Rome in the messenger's hand: a folded sheet, in his figure's frame. */
const LETTER = 'M37 -116L53 -119L55 -106L39 -103Z'

function RomesVerdict(_props: ArtProps) {
  const m = marks()
  const b = beam(W, BEAM.top, BEAM.bottom)
  return (
    <g className="lc-push" style={timing({ origin: [480, 200], push: 1.03 })}>
      {/* daylight in the openings, the dark wall at the left */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <rect x={0} y={BEAM.bottom} width={COLS[0]} height={WALL_FOOT - BEAM.bottom} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      {m.parapets.map((p, k) => (
        <g key={k}>
          <path d={p.shape} fill={INK} />
          <path d={p.cuts} fill={PAPER} />
        </g>
      ))}
      {/* the floor */}
      <path d={m.floor} fill={INK} />
      <path d={footShadow(118, FEET + 2, 64) + footShadow(498, FEET + 2, 68)} fill={INK} />

      {/* the beam and the columns */}
      <path d={b.shape} fill={INK} />
      <path d={b.cuts} fill={PAPER} />
      {COLS.map((cx) => (
        <Column key={cx} cx={cx} top={CAP_TOP} foot={WALL_FOOT + 2} />
      ))}

      {/* Rome: Demetrius, and Philo in front of him pointing */}
      <Person pose={{ look: 'demetrius', head: { rot: 4 } }} at={[78, FEET + 2]} scale={S} />
      <Person
        pose={{
          look: 'philo',
          frown: true,
          near: {
            pts: [
              [5, -130],
              [22, -112],
              [44, -116],
            ],
            hand: 'point',
            deg: -6,
          },
        }}
        at={[152, FEET]}
        scale={S}
      />

      {/* the messenger from Rome, his letter held out */}
      <Person
        pose={{
          look: 'messenger',
          head: { rot: 8 },
          near: {
            pts: [
              [5, -128],
              [20, -110],
              [40, -110],
            ],
            hand: 'grip',
          },
        }}
        at={[298, FEET]}
        scale={S}
      >
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1} />
      </Person>

      {/* the fans held over the queen, and the attendants who hold them */}
      {FANS.map((f) => (
        <Fan key={f.top[0]} {...f} />
      ))}
      {BEARERS.map((b, k) => (
        <Person
          key={k}
          pose={{ look: 'attendant', head: { rot: b.rot }, ...bearerArms(b) }}
          at={b.at}
          scale={S}
          flip
        />
      ))}

      {/* Egypt's reply: Antony, his back to Rome, his arm round her waist */}
      <Person
        pose={{
          look: 'antony',
          dress: 'tunic',
          head: { rot: 8 },
          far: {
            pts: [
              [-4, -130],
              [-20, -110],
              [-40, -100],
            ],
            hand: 'open',
            deg: 165,
          },
          near: {
            pts: [
              [5, -130],
              [16, -106],
              [40, -92],
            ],
            hand: 'mitt',
            deg: 20,
          },
        }}
        at={ANTONY_AT}
        scale={S}
      />
      {/*
        and Cleopatra, facing him, her hand on his breast: cut after him, so
        his arm passes behind her and his hand is hidden at her back
      */}
      <Person
        pose={{
          look: 'cleopatra',
          head: { rot: -6 },
          near: {
            pts: [
              [5, -124],
              [20, -108],
              [36, -120],
            ],
            hand: 'mitt',
            deg: -40,
          },
        }}
        at={CLEO_AT}
        scale={S}
        flip
      />
    </g>
  )
}

export const romesVerdict: LinocutArt = { width: W, height: H, Draw: RomesVerdict }
