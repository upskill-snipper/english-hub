import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { banner, clothBand, daySky, staff, trampledGround } from './agincourt-field'
import { CutFigure, Person, limb, type P } from './people'

/**
 * Act 3, Scene 6: "Bardolph is condemned", the twelfth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1521, src/data/full-texts/henry-v.ts), whose setting is "The
 * English camp in Picardy":
 *
 * - Pistol has begged Fluellen to speak for Bardolph and been refused ("for
 *   discipline ought to be used"), and gone. Then "Drum and colours. Enter
 *   King Henry, Gloucester and his poor soldiers." Fluellen, who has come
 *   "from the pridge", tells the King that the Duke of Exeter "hath lost never
 *   a man, but one that is like to be executed for robbing a church, one
 *   Bardolph, if your Majesty know the man." This is the moment drawn: the
 *   sentence as news, given to a king who knew Bardolph well and answers
 *   without a word of it. The quotation is Fluellen's, and names Bardolph and
 *   nothing of his death.
 * - So Fluellen stands before the King, leaning in, one open hand held out
 *   low from a bent arm as he reports, and Gower, who met him at the start of
 *   the scene and never leaves it, stands behind him. The King stands still
 *   and upright, his hands at his sides, his face giving nothing away: the
 *   guide leaves the reader to decide "whether that is justice or coldness",
 *   and so does the picture. He is in harness with his crown, as the kit
 *   dresses him in the field, bareheaded so that his face can be read.
 * - "Drum and colours": behind the King come Gloucester in his helm, a
 *   soldier bearing Saint George's banner ("Cry, 'God for Harry! England and
 *   Saint George!'", 3.1), its red cross the spot colour, flying high and
 *   clear of every face, and a drummer.
 * - "his poor soldiers", and Henry's own words to Montjoy later in the scene:
 *   "My people are with sickness much enfeebled, My numbers lessen'd". So the
 *   last men of the column go bowed over their staves.
 * - "come you from the bridge?"; "March to the bridge; it now draws toward
 *   night." So the bridge Exeter holds stands far off over the river behind
 *   Fluellen, under a low sun, and every figure throws a long shadow.
 *
 * No gallows, no rope, no Bardolph: he is not in the scene, and his sentence
 * is told, not shown. Pistol's parting gesture to Fluellen is not drawn. The
 * sky, the ground and the banner are cut as the field of Agincourt is cut
 * (./agincourt-field.tsx), so the march and the battle are one campaign.
 * Nothing is taken from a film or stage production.
 *
 * Seeds: 1201 (sky), 1202 (ground), 1203 (river), 1204 (sun), 1205 (banner).
 */

const W = 860
const H = 340
const HORIZON = 206
/** The low sun, over the bridge on the left. */
const SUN: P = [104, 122]
const SUN_R = 18

/** The bridge, far off on the left: its parapet, piers and three arches over the river. */
const BRIDGE = { x0: -14, x1: 214, top: 160, deck: 170, spring: 194, water: 196 }
const ARCHES: [number, number][] = [
  [10, 58],
  [78, 126],
  [146, 194],
]
const RIVER = { y0: 194, y1: 210, x1: 268 }

/** Where each figure stands. The King's column comes on from the right. */
const AT = {
  gower: [228, 322] as P,
  fluellen: [348, 326] as P,
  henry: [548, 331] as P,
  gloucester: [630, 312] as P,
  bearer: [708, 302] as P,
  drum: [774, 298] as P,
  poor: [
    [818, 293],
    [850, 290],
  ] as P[],
}
/** Saint George's banner: the head of its staff, and the staff's foot. */
const STAFF_TOP: P = [686, 40]
const STAFF_FOOT: P = [688, 302]

type Marks = {
  sky: string
  sunRays: string
  sunRing: string
  hills: string
  river: string
  bridge: string
  ground: string
  shadows: string
  cloth: string
  cross: string
  staffs: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sunGlow = (x: number, y: number) =>
    clamp(1 - Math.hypot((x - SUN[0]) * 0.55, (y - SUN[1]) * 1.1) / 190)
  // A late sky: cloud heavy overhead and away to the right, clearing low
  // down and round the sun.
  const sky = daySky(rng(1201), { x0: 0, x1: W, y0: 4, y1: HORIZON - 8 }, (x, y) =>
    clamp(0.1 + 0.62 * Math.pow(1 - y / HORIZON, 1.2) + 0.16 * (x / W) - 0.95 * sunGlow(x, y)),
  )
  // The sun's rays: short ink wedges round a clear disc.
  const rs = rng(1204)
  let sunRays = ''
  for (let a = 0; a < 360; a += 15) {
    const t = (a + between(rs, -3, 3)) * (Math.PI / 180)
    const r0 = SUN_R + 6 + between(rs, 0, 3)
    const r1 = r0 + between(rs, 7, 13) * (a % 30 ? 0.6 : 1)
    sunRays += wedge(
      SUN[0] + Math.cos(t) * r0,
      SUN[1] + Math.sin(t) * r0,
      SUN[0] + Math.cos(t) * r1,
      SUN[1] + Math.sin(t) * r1,
      1.8,
      0.3,
    )
  }
  const sunRing = arcDashes(rs, SUN[0], SUN[1], SUN_R, 0, Math.PI * 2, [10, 22], [2, 5])

  // Low hills along the far side, beyond the river and the march.
  let hills = `M${BRIDGE.x1 - 20} ${HORIZON + 1}`
  for (let x = BRIDGE.x1 - 20; x <= W + 10; x += 16)
    hills += `L${x} ${n(HORIZON - 8 - 5 * Math.sin(x / 41) - 3 * Math.sin(x / 13 + 1))}`
  hills += `L${W + 10} ${HORIZON + 1}Z`

  // The river under the bridge, the sun lying on it in a broken column.
  const rr = rng(1203)
  let river = ''
  for (let y = RIVER.y0 + 2; y < RIVER.y1; y += 2.6) {
    let x = between(rr, -20, 0)
    while (x < RIVER.x1 - 10) {
      const len = between(rr, 6, 22)
      const lit = clamp(1 - Math.abs(x + len / 2 - SUN[0]) / 60)
      if (rr() < 0.3 + lit)
        river += gouge(x, y, x + len, y + between(rr, -0.3, 0.3), 0.45 + lit * 1.3)
      x += len + between(rr, 5, 16) * (1 - lit * 0.6)
    }
  }

  // The bridge: one ink shape, its arches cut through it.
  let bridge =
    `M${BRIDGE.x0} ${BRIDGE.top}H${BRIDGE.x1}L${BRIDGE.x1 + 14} ${RIVER.y0 + 4}` +
    `L${BRIDGE.x1 + 30} ${RIVER.y1}H${BRIDGE.x0}Z`
  for (const [a, b] of ARCHES)
    bridge +=
      `M${a} ${RIVER.y1 + 1}V${BRIDGE.spring}Q${a} ${BRIDGE.spring - 16} ${n((a + b) / 2)} ${BRIDGE.spring - 20}` +
      `Q${b} ${BRIDGE.spring - 16} ${b} ${BRIDGE.spring}V${RIVER.y1 + 1}Z`

  // The ground of the march, trampled.
  const ground = trampledGround(rng(1202), { x0: 0, x1: W, y0: HORIZON + 2, y1: H }, 0.85)

  // The long shadows of the low sun, thrown to the right along the ground.
  const shadow = ([x, y]: P, len: number, w: number) =>
    `M${n(x - w / 2)} ${n(y - 1)}C${n(x + len * 0.3)} ${n(y - 3)} ${n(x + len * 0.7)} ${n(y - 1.5)} ${n(x + len)} ${n(y + 0.5)}` +
    `L${n(x + len)} ${n(y + 3)}C${n(x + len * 0.6)} ${n(y + 3.5)} ${n(x + len * 0.3)} ${n(y + 4.5)} ${n(x - w / 2)} ${n(y + 3)}Z`
  const shadows =
    shadow(AT.gower, 96, 30) +
    shadow(AT.fluellen, 110, 32) +
    shadow(AT.henry, 120, 34) +
    shadow(AT.gloucester, 84, 26) +
    shadow(AT.bearer, 70, 24) +
    shadow(AT.drum, 64, 24) +
    AT.poor.map((p) => shadow(p, 50, 20)).join('')

  // Saint George's banner, whole, flying out on the evening air.
  const flag = banner(rng(1205), [STAFF_TOP[0] + 1, STAFF_TOP[1] + 2], {
    len: 122,
    depth: 72,
    dir: 1,
  })
  const cross =
    clothBand(flag.at, true, 0, 1, 0.5, 0.2) +
    clothBand(flag.at, false, 0, 1, 0.5, (0.2 * 72) / 122)
  const staffs = staff(STAFF_FOOT, STAFF_TOP, 3.6)

  cached = {
    sky,
    sunRays,
    sunRing,
    hills,
    river,
    bridge,
    ground,
    shadows,
    cloth: flag.cloth,
    cross,
    staffs,
  }
  return cached
}

/**
 * A side drum slung at the drummer's hip, in his own frame: the shell in ink
 * with its cords cut in paper, the head a paper ellipse, and the two sticks.
 * Drawn as the drummer's children, after his arms.
 */
function Drum() {
  let cords = 'M-12 -78'
  for (let i = 0; i < 6; i++) cords += `L${n(-12 + i * 5.2 + 2.6)} ${i % 2 ? -78 : -60}`
  return (
    <g>
      <path d="M-14 -80V-58Q1 -52 16 -58V-80Z" fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path d={cords} fill="none" stroke={PAPER} strokeWidth={1.1} />
      <ellipse cx={1} cy={-80} rx={15} ry={4.2} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path
        d="M17 -97L5 -84M29 -99L13 -86"
        stroke={PAPER}
        strokeWidth={3.6}
        strokeLinecap="round"
      />
      <path d="M17 -97L5 -84M29 -99L13 -86" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
    </g>
  )
}

/** A weary soldier at the back of the column, bowed over his stave. */
function PoorSoldier({ at, s, variant }: { at: P; s: number; variant: number }) {
  const foot: P = [at[0] - 24 * s, at[1] - 1]
  const top: P = [at[0] - 27 * s, at[1] - 138 * s]
  return (
    <>
      <CutFigure parts={[{ d: limb([foot, top]), w: 3.2 }]} halo={1.4} />
      <Person
        at={at}
        scale={s}
        flip
        pose={{
          look: 'soldier',
          variant,
          head: { rot: 22 },
          body: { neck: [7, -134] },
          eye: 'down',
          far: {
            pts: [
              [0, -126],
              [-2, -104],
              [2, -82],
            ],
          },
          near: {
            pts: [
              [7, -126],
              [14, -104],
              [25, -100],
            ],
            hand: 'grip',
            deg: -94,
          },
        }}
      />
    </>
  )
}

function BardolphIsCondemned({ uid }: ArtProps) {
  const m = marks()
  const george = `${uid}-george`
  return (
    <>
      <defs>
        <clipPath id={george}>
          <path d={m.cloth} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [450, 210], push: 1.03 })}>
        {/* the late sky and the low sun */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.sunRays} fill={INK} />
        <path d={m.sunRing} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
        <path d={m.hills} fill={INK} />

        {/* the river, and the bridge Exeter holds */}
        <rect x={-10} y={RIVER.y0} width={RIVER.x1 + 10} height={RIVER.y1 - RIVER.y0} fill={INK} />
        <path d={m.river} fill={PAPER} />
        <path d={m.bridge} fill={INK} fillRule="evenodd" />
        <path
          d={`M${BRIDGE.x0} ${BRIDGE.deck}H${BRIDGE.x1 + 4}`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {ARCHES.map(([a, b]) => (
          <path
            key={a}
            d={`M${a - 3} ${BRIDGE.spring}Q${a - 3} ${BRIDGE.spring - 19} ${n((a + b) / 2)} ${BRIDGE.spring - 23}Q${b + 3} ${BRIDGE.spring - 19} ${b + 3} ${BRIDGE.spring}`}
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
        ))}

        {/* the trampled ground of the march, and the long shadows on it */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M${RIVER.x1 - 20} ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.ground} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the poor soldiers at the back of the column */}
        {AT.poor.map((at, i) => (
          <PoorSoldier key={at[0]} at={at} s={0.8 - i * 0.02} variant={i === 1 ? 2 : 0} />
        ))}

        {/* the drum */}
        <Person
          at={AT.drum}
          scale={0.86}
          flip
          pose={{
            look: 'soldier',
            far: {
              pts: [
                [-3, -128],
                [-4, -104],
                [10, -94],
              ],
              hand: 'grip',
            },
            near: {
              pts: [
                [4, -128],
                [12, -106],
                [24, -100],
              ],
              hand: 'grip',
            },
          }}
        >
          <Drum />
        </Person>

        {/* "Drum and colours": Saint George's banner */}
        <path d={m.staffs} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={m.cloth} fill={PAPER} stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
        <g clipPath={`url(#${george})`}>
          <path d={m.cross} fill={RED} />
        </g>
        <Person
          at={AT.bearer}
          scale={0.92}
          flip
          pose={{
            look: 'soldier',
            dress: 'armour',
            helm: true,
            far: {
              pts: [
                [-3, -128],
                [5, -110],
                [21, -120],
              ],
              hand: 'grip',
              deg: -90,
            },
            near: {
              pts: [
                [4, -128],
                [10, -104],
                [21, -94],
              ],
              hand: 'grip',
              deg: -90,
            },
          }}
        />

        {/* Gloucester, behind the King */}
        <Person
          at={AT.gloucester}
          scale={1.02}
          flip
          pose={{
            look: 'lord',
            dress: 'armour',
            helm: true,
            far: {
              pts: [
                [-3, -128],
                [-5, -104],
                [-2, -80],
              ],
            },
            near: {
              pts: [
                [4, -128],
                [6, -102],
                [4, -78],
              ],
            },
          }}
        />

        {/* the King, still, his face giving nothing away */}
        <Person
          at={AT.henry}
          scale={1.32}
          flip
          pose={{
            look: 'henry',
            dress: 'armour',
            far: {
              pts: [
                [-3, -128],
                [-6, -103],
                [-4, -79],
              ],
            },
            near: {
              pts: [
                [4, -128],
                [7, -103],
                [5, -79],
              ],
            },
          }}
        />

        {/* Gower, behind Fluellen */}
        <Person
          at={AT.gower}
          scale={1.1}
          pose={{
            look: 'gower',
            head: { rot: 2 },
            far: {
              pts: [
                [-3, -128],
                [-5, -104],
                [-2, -80],
              ],
            },
            near: {
              pts: [
                [4, -128],
                [7, -104],
                [5, -80],
              ],
            },
          }}
        />

        {/* Fluellen, from the bridge, telling the King */}
        <Person
          at={AT.fluellen}
          scale={1.2}
          pose={{
            look: 'fluellen',
            body: { neck: [6, -136] },
            head: { rot: 4 },
            mouth: 'open',
            legs: {
              far: [
                [-3, -70],
                [-7, -36],
                [-10, -3],
              ],
              near: [
                [3, -70],
                [9, -37],
                [13, -3],
              ],
            },
            far: {
              pts: [
                [-2, -128],
                [-6, -104],
                [-3, -80],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [18, -108],
                [36, -104],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
              spread: 15,
            },
          }}
        />
      </g>
    </>
  )
}

export const bardolphIsCondemned: LinocutArt = { width: W, height: H, Draw: BardolphIsCondemned }
