import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, Shadow, type Pose } from './people'

/**
 * Act 1, Scene 4: "Goneril's house", the fourth moment in the guide's
 * timeline. Every detail is from the scene (the held edition,
 * src/data/full-texts/king-lear.ts):
 *
 * - "A Hall in Albany's Palace". Lear is in from hunting ("Horns within"),
 *   calling for his dinner, with his new servant, Kent in disguise, whom he
 *   has just taken on, and his Fool.
 * - Goneril comes in frowning ("What makes that frontlet on? Methinks you are
 *   too much of late i' the frown") and tells her father to cut his train.
 *   Lear: "Doth any here know me? This is not Lear; Doth Lear walk thus? speak
 *   thus? ... Who is it that can tell me who I am?" The Fool: "Lear's
 *   shadow." So the moment is that question and that answer: Lear stands
 *   before his daughter with his hand on his own breast and his other hand
 *   held out to her, open; the fire of the hall throws his shadow, huge, on the
 *   wall behind him; and the Fool, at his side, points up at it. The fire's
 *   flames are the spot colour, the one light in the hall.
 * - Goneril stands across the fire from him, frowning, her hands folded:
 *   "this our court ... Shows like a riotous inn". Kent, as Caius, stands
 *   behind his master.
 * - WHO IS NOT HERE. Albany comes in only after Lear has called for his
 *   horses ("Enter Albany"), and Oswald has been pushed out by Kent before
 *   Goneril comes in, so neither is in the hall at this line.
 *
 * Every person is the kit's (./people.tsx): Lear bareheaded now, without his
 * court mantle; Kent in his disguise, hooded, with his grey beard; the Fool in
 * his coxcomb and motley; Goneril veiled, the band of her frontlet across her
 * brow. The shadow is the kit's `Shadow` of the same pose. The hall is not
 * described: a stone hall, its fire in an iron brazier. Nothing is taken from
 * a film or stage production. Seeds: 1401 (wall), 1402 (floor).
 */

const W = 860
const H = 340
const FLOOR = 246

/** The brazier's flames: the light the whole hall is lit by. */
const FIRE: [number, number] = [578, 246]

/**
 * How strongly the firelight falls on the wall: full round the fire and over
 * the wall behind Lear, where his shadow falls, darkening to the corners.
 */
const light = (x: number, y: number) =>
  clamp(1.35 - Math.hypot((x - 380) / 520, (y - 170) / 300) * 1.3, 0, 1)

type Marks = {
  dark: string
  courses: string
  floor: string
  shadows: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The lit wall is cut almost all away: a paper ground with ink left where
  // the firelight thins, so the shadow, which is uncut ink, has a clean edge.
  const r = rng(1401)
  const dark = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, (x, y) => 1 - light(x, y), {
    spacing: 6.4,
    len: [14, 60],
    gap: [6, 18],
    max: 3.6,
  })
  // the courses and joints of the stone, in ink, finer where the light is full
  let courses = ''
  let row = 0
  for (let y = 34; y < FLOOR - 4; y += 32, row++) {
    courses += wedge(0, y, W, y + between(r, -1, 1), 1.2, 1.2)
    for (let x = (row % 2 ? 18 : 52) + between(r, -6, 6); x < W; x += between(r, 58, 80)) {
      const w = 0.8 + (1 - light(x, y - 16)) * 1.6
      courses += wedge(x, y - 31, x + between(r, -1, 1), y, w, w)
    }
  }
  const floor = flagFloor(rng(1402), W, H, FLOOR, [470, 110], 64, 6)
  const shadows =
    footShadow(262, 327, 22) +
    footShadow(440, 323, 34) +
    footShadow(716, 321, 30) +
    footShadow(808, 297, 22)
  cached = { dark, courses, floor, shadows }
  return cached
}

/** Lear: his hand on his own breast, the other held out open to his daughter. */
const LEAR: Pose = {
  look: 'lear',
  mantle: false,
  head: { rot: -3 },
  far: {
    pts: [
      [-3, -128],
      [10, -108],
      [30, -101],
    ],
    hand: 'open',
    deg: -8,
  },
  near: {
    pts: [
      [6, -128],
      [17, -110],
      [7, -118],
    ],
    deg: 200,
  },
}

/** The brazier: an iron bowl on three legs, its flames in the spot colour. */
function Brazier() {
  const [x, y] = FIRE
  return (
    <g>
      <path
        d={`M${x - 22} ${y + 74}L${x - 10} ${y + 40}M${x + 22} ${y + 74}L${x + 10} ${y + 40}M${x} ${y + 76}V${y + 40}`}
        stroke={INK}
        strokeWidth={4.4}
        strokeLinecap="round"
      />
      <path
        d={`M${x - 26} ${y + 22}H${x + 26}C${x + 24} ${y + 36} ${x + 14} ${y + 42} ${x} ${y + 42}C${x - 14} ${y + 42} ${x - 24} ${y + 36} ${x - 26} ${y + 22}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(x - 20, y + 28, x + 20, y + 28, 1.2)} fill={PAPER} />
      <g fill={RED}>
        <path
          className="lc-flicker"
          d={`M${x - 20} ${y + 22}C${x - 22} ${y + 8} ${x - 12} ${y + 2} ${x - 10} ${y - 10}C${x - 4} ${y} ${x - 2} ${y + 8} ${x - 4} ${y + 22}Z`}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9, delay: 0.3 })}
          d={`M${x - 8} ${y + 22}C${x - 10} ${y + 2} ${x - 2} ${y - 8} ${x + 2} ${y - 26}C${x + 10} ${y - 8} ${x + 12} ${y + 6} ${x + 8} ${y + 22}Z`}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.7, delay: 0.15 })}
          d={`M${x + 6} ${y + 22}C${x + 6} ${y + 10} ${x + 14} ${y + 4} ${x + 16} ${y - 6}C${x + 22} ${y + 4} ${x + 22} ${y + 14} ${x + 20} ${y + 22}Z`}
        />
      </g>
    </g>
  )
}

function GonerilsHouse(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 170], push: 1.03 })}>
      {/* the hall's wall, lit by the fire */}
      <rect x={0} y={0} width={W} height={FLOOR} fill={PAPER} />
      <path d={m.dark} fill={INK} />
      <path d={m.courses} fill={INK} />

      {/* "Lear's shadow": thrown huge on the wall behind him */}
      <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.4 })}>
        <Shadow pose={LEAR} at={[210, 250]} scale={1.24} skew={6} />
      </g>

      {/* the floor */}
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* Kent, in his disguise, by the wall beyond, watching his master */}
      <Person
        pose={{
          look: 'caius',
          far: {
            pts: [
              [-3, -128],
              [-6, -104],
              [-4, -80],
            ],
          },
          near: {
            pts: [
              [4, -128],
              [8, -104],
              [10, -80],
            ],
          },
        }}
        at={[808, 296]}
        scale={1.08}
        flip
      />

      {/* the Fool at Lear's side, pointing up at the shadow: "Lear's shadow." */}
      <Person
        pose={{
          look: 'fool',
          mouth: 'open',
          far: {
            pts: [
              [-3, -124],
              [-16, -140],
              [-26, -162],
            ],
            hand: 'point',
            deg: -118,
          },
          near: {
            pts: [
              [4, -124],
              [8, -102],
              [10, -80],
            ],
          },
        }}
        at={[262, 326]}
        scale={1.14}
      />

      {/* Lear: "Who is it that can tell me who I am?" */}
      <Person pose={LEAR} at={[436, 322]} scale={1.3} />

      {/* the fire between them */}
      <Brazier />

      {/* Goneril, across the fire, frowning */}
      <Person
        pose={{
          look: 'goneril',
          far: {
            pts: [
              [-3, -124],
              [-5, -106],
              [8, -98],
            ],
            deg: -8,
          },
          near: {
            pts: [
              [4, -124],
              [11, -107],
              [4, -98],
            ],
            deg: 176,
          },
        }}
        at={[716, 320]}
        scale={1.16}
        flip
      />
    </g>
  )
}

export const gonerilsHouse: LinocutArt = { width: W, height: H, Draw: GonerilsHouse }
