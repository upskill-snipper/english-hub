import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { headland } from '../../othello/panels/garden'
import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { sandal, sandalCuts } from '../../julius-caesar/panels/people'
import { Ship, type ShipSpec } from './fleet'
import { lightField, seaCuts, skyLines } from './light-cuts'
import { Column, beam, parapet } from './palace'
import {
  CutFigure,
  Person,
  UpperBody,
  limb,
  reach,
  sizeOf,
  toFigure,
  type P,
  type Pose,
} from './people'

/**
 * Act 3, Scene 11: "Shame, and a kiss", the thirteenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in the Palace." So the hall of ./palace.tsx, cut to
 *   the same measure as the hall of Act 1 ("Rome’s verdict, Egypt’s reply"),
 *   so a student knows the room: round columns under a beam, open to the
 *   daylight, the dark wall at the left.
 * - ANTONY: "I have a ship Laden with gold"; "My treasure’s in the harbour";
 *   "To the sea-side straightway." CLEOPATRA: "Forgive my fearful sails!" So
 *   through the openings is the harbour, and in it her ship home from Actium
 *   under the red sail that fled the fight (./fleet.tsx), and his, its sail
 *   furled. The red sail is the panel's one spot of colour, far from every
 *   hand and face.
 * - "[Sits down.]" EROS: "Sir, sir!" "Most noble sir, arise. The Queen
 *   approaches." So Antony is seated on a stone bench, still in the armour
 *   of the battle, the bench cut in paper so he reads as a man sitting; and
 *   Eros, the kit's servant in his belted tunic, stands at his back with
 *   his open hand held out to him, urging him up.
 * - "Enter Cleopatra led by Charmian, Iras and Eros." EROS: "Her head’s
 *   declined". CLEOPATRA: "Well then, sustain me." "Pardon, pardon!" So she
 *   comes to him with her head bowed, and Charmian holds her up with a hand
 *   at her back; Iras follows.
 * - ANTONY: "Fall not a tear, I say; one of them rates All that is won and
 *   lost. Give me a kiss. Even this repays me." So he looks up at her and
 *   holds out his open hand, and she reaches hers down to it: the moment of
 *   the pardon, before the kiss. She is the kit's Cleopatra (./people.tsx),
 *   uncrowned, as the scene leaves her. Their hands do not yet touch, and
 *   every hand is open with its fingers apart.
 *
 * Nothing is taken from a film or stage production. Seeds: 1301 (the wall),
 * 1302 (the sky), 1303 (the sea), 1304 (the floor), 1305 to 1307 (the
 * parapets).
 */

const W = 860
const H = 340
/** The hall's measure, as the hall of Act 1 is cut. */
const BEAM = { top: 14, bottom: 40 }
const WALL_FOOT = 262
const FEET = 322
const COLS = [150, 372, 594, 816]
const CAP_TOP = 40
const SILL = 224
/** The far edge of the sea, seen through the openings. */
const HORIZON = 132
/** The scale every figure in the hall is drawn at, as in the hall of Act 1. */
const S = 1.06

/** The harbour: her ship under the red sail, and his, its sail furled. */
const HARBOUR: ShipSpec[] = [
  { at: [304, 180], s: 0.32, facing: -1, sail: 'furled' },
  { at: [232, 206], s: 0.6, facing: 1, sail: 'set', colour: 'red' },
]

/** The stone bench Antony sits on, and where his hip rests on it. */
const BENCH = { x0: 380, x1: 468, top: 282 }
const HIP: P = [440, 278]
/** Eros stands at Antony's back, his open hand held out to him at the height of his shoulder. */
const EROS_AT: P = [344, 324]
const EROS_ARM = reach([5, -128], toFigure([382, 226], EROS_AT, S * sizeOf('eros')), 24, 1)

type Marks = {
  wall: string
  sky: string
  sea: string
  far: string
  floor: string
  parapets: { shape: string; cuts: string }[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = lightField(
    1301,
    { x0: 0, x1: COLS[0], y0: BEAM.bottom + 2, y1: WALL_FOOT },
    (x, y) => clamp(0.12 + (x / COLS[0]) * 0.45 - (y - 150) / 900),
    { spacing: 6, len: [12, 40], gap: [6, 18], max: 3 },
  )
  const sky = skyLines(
    1302,
    { x0: COLS[0], x1: W, y0: BEAM.bottom + 2, y1: HORIZON - 3 },
    (_x, y) => 0.4 - (y - BEAM.bottom) / 260,
  )
  const sea = seaCuts(1303, { x0: COLS[0], x1: W, y0: HORIZON + 1, y1: SILL }, () => true)
  const far = headland(140, 520, HORIZON, 9) + headland(700, 880, HORIZON, 6)
  const floor = flagFloor(rng(1304), W, H, WALL_FOOT, [470, 120], 64, 5)
  const parapets = [0, 1, 2].map((k) =>
    parapet(1305 + k, COLS[k] + 14, COLS[k + 1] - 14, SILL, WALL_FOOT),
  )
  cached = { wall, sky, sea, far, floor, parapets }
  return cached
}

/**
 * Antony seated: the kit's own figure above the hip (UpperBody), and below it
 * the thigh laid level along the bench to the knee, the skirt of strips over
 * it, the shin straight down to the floor and the far shin a little behind,
 * and his general's cloak fallen behind him on the seat. Drawn in the hip's
 * frame, facing right. The bench is cut in paper so the seated shape reads
 * against it as a man sitting, not as a block.
 */
function SeatedAntony({ uid, pose }: { uid: string; pose: Pose }) {
  const s = S * sizeOf('antony')
  // the floor, in the hip's frame
  const floor = (FEET - HIP[1]) / s
  let strips = ''
  for (let k = 0; k < 6; k++) strips += gouge(-12 + k * 6.4, -2, -11 + k * 6.6, 11, 0.75)
  const parts = [
    // the cloak, fallen behind him on the seat
    { d: 'M-8 -60C-18 -44 -26 -20 -30 2L-6 4C-8 -18 -6 -40 -1 -58Z' },
    // the far shin, a little behind the near one
    {
      d: limb([
        [30, 0],
        [27, floor - 3],
      ]),
      w: 8.6,
    },
    sandal([27, floor], 1),
    // the thigh, level along the seat, and the near shin to the floor
    {
      d: limb([
        [0, 2],
        [36, 3],
        [38, floor - 3],
      ]),
      w: 10.4,
    },
    sandal([38, floor], 1),
    // the skirt of strips over the thigh
    { d: 'M-17 -6C-18 2 -16 9 -12 12L26 12C28 8 28 2 26 -4C18 -7 0 -8 -17 -6Z' },
  ]
  return (
    <g transform={`translate(${n(HIP[0])} ${n(HIP[1])}) scale(${n(s)})`}>
      <CutFigure
        parts={parts}
        cuts={strips + sandalCuts([27, floor], 1) + sandalCuts([38, floor], 1)}
      />
      <UpperBody uid={uid} id="antony" pose={pose} />
    </g>
  )
}

function ShameAndAKiss({ uid }: ArtProps) {
  const m = marks()
  const b = beam(W, BEAM.top, BEAM.bottom)
  return (
    <g className="lc-push" style={timing({ origin: [330, 200], push: 1.03 })}>
      {/* the harbour through the openings, the dark wall at the left */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.far} fill={INK} />
      <path d={`M${COLS[0]} ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.3} />
      <path d={m.sea} fill={INK} />
      {HARBOUR.map((s, i) => (
        <Ship key={i} {...s} />
      ))}
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
      <path d={footShadow(640, FEET + 2, 110)} fill={INK} />

      {/* the beam and the columns */}
      <path d={b.shape} fill={INK} />
      <path d={b.cuts} fill={PAPER} />
      {COLS.map((cx) => (
        <Column key={cx} cx={cx} top={CAP_TOP} foot={WALL_FOOT + 2} />
      ))}

      {/* Eros, at his back, his hand held out to him: "Most noble sir, arise." */}
      <Person
        pose={{
          look: 'eros',
          head: { rot: 8 },
          near: { pts: EROS_ARM, hand: 'open', deg: -4 },
        }}
        at={EROS_AT}
        scale={S}
      />

      {/* the stone bench, cut in paper: its seat, its face and its shadow */}
      <path d={footShadow((BENCH.x0 + BENCH.x1) / 2, FEET + 2, 56)} fill={INK} />
      <path
        d={`M${BENCH.x0} ${FEET + 1}V${BENCH.top + 7}H${BENCH.x1}V${FEET + 1}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path
        d={`M${BENCH.x0 - 6} ${BENCH.top + 7}V${BENCH.top}H${BENCH.x1 + 6}V${BENCH.top + 7}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(BENCH.x0 + 4, BENCH.top + 12, BENCH.x1 - 4, BENCH.top + 12, 1.4) +
          gouge(BENCH.x0 + 10, BENCH.top + 22, BENCH.x0 + 12, FEET - 4, 0.9) +
          gouge(BENCH.x1 - 10, BENCH.top + 22, BENCH.x1 - 12, FEET - 4, 0.9)
        }
        fill={INK}
      />

      {/* Antony, seated, holding out his open hand: "Give me a kiss." */}
      <SeatedAntony
        uid={uid}
        pose={{
          look: 'antony',
          head: { rot: -16 },
          far: {
            pts: [
              [-4, -130],
              [0, -106],
              [14, -92],
            ],
          },
          // the elbow bent and the hand no higher than his shoulder, open,
          // so it reads as a hand held out to hers and never as a salute
          near: {
            pts: [
              [5, -128],
              [25, -114],
              [47, -124],
            ],
            hand: 'open',
            deg: -16,
          },
        }}
      />

      {/* Iras, following */}
      <Person
        pose={{ look: 'iras', head: { rot: 10 }, eye: 'down' }}
        at={[724, FEET + 2]}
        scale={S}
        flip
      />
      {/* Charmian, holding her up: "Well then, sustain me." */}
      <Person
        pose={{
          look: 'charmian',
          head: { rot: 8 },
          near: {
            pts: [
              [4, -126],
              [16, -110],
              [30, -114],
            ],
            hand: 'open',
            deg: -30,
          },
        }}
        at={[644, FEET + 2]}
        scale={S}
        flip
      />
      {/* Cleopatra, her head declined, her hand held down to his: "Pardon, pardon!" */}
      <Person
        pose={{
          look: 'cleopatra',
          head: { rot: 24 },
          eye: 'down',
          near: {
            pts: [
              [4, -126],
              [20, -112],
              [38, -114],
            ],
            hand: 'open',
            deg: 22,
          },
        }}
        at={[566, FEET]}
        scale={S}
        flip
      />
    </g>
  )
}

export const shameAndAKiss: LinocutArt = { width: W, height: H, Draw: ShameAndAKiss }
