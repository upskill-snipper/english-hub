import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  Banner,
  Smoke,
  battlements,
  breachNotch,
  ladder,
  rubble,
  siegeGround,
  siegeSky,
  slit,
  soldierRank,
  tower,
  towerLight,
  townRoofs,
} from './harfleur'
import { Person, Sword } from './people'

/**
 * Act 3, Scene 1: "Once more unto the breach", the eighth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521), set "Before
 * Harfleur", and from the Chorus that opens the act:
 *
 * - "Alarum. Enter King Henry, Exeter, Bedford, Gloucester and Soldiers, with
 *   scaling-ladders." So these and no others: Henry; his uncle Exeter, known
 *   by his grey beard; Bedford and Gloucester, two lords in harness; and
 *   soldiers, two of them in front with a scaling ladder and the banner, a
 *   rank of them behind, one ladder already set against the wall.
 * - "Once more unto the breach, dear friends, once more, Or close the wall up
 *   with our English dead." The guns have broken the town wall: "the ordnance
 *   on their carriages, With fatal mouths gaping on girded Harfleur" and
 *   "down goes all before them" (Act 3, Chorus). So the breach is a gap in the
 *   wall between two of its towers, the roofs and the church of the town seen
 *   through it, the stones of the wall tumbled in a heap below it, and the
 *   smoke of the guns still hanging over it ("Alarum, and chambers go off").
 *   The guns themselves, and their shot, are not drawn, and the dead the line
 *   speaks of are words only: the heap is stone, and no one lies on it.
 * - Henry leads them towards it, his sword held up over his head towards the
 *   gap, never at anyone, his mouth open on the cry, and his other hand thrown
 *   back, open, to the men behind him: "Follow your spirit". The arm is bent
 *   and the hand held low, so it beckons and is never read as a salute.
 * - "I see you stand like greyhounds in the slips, Straining upon the start."
 *   So the lords and the soldier with the ladder lean forward, a foot before
 *   them, as men about to run.
 * - "Cry, 'God for Harry! England and Saint George!'" The banner is Saint
 *   George's, the red cross on white, and it is the one thing in the spot
 *   colour, big enough to stay a flag at phone width.
 * - Everyone is in harness, the lords in the open bascinet of 1415 with their
 *   faces bare, and Henry is known by the crown on his helm (./people.tsx).
 *
 * War is drawn as the play stages it: the wall, the breach, the banner and
 * the faces. No blade, arrow or shot strikes anyone and no one is hurt.
 * Nothing is taken from a film or stage production.
 *
 * Seeds: 8101 (sky), 8102 (ground), 8103 (breach), 8104 (wall), 8105
 * (towers), 8106 (heap), 8107 (town), 8108 (rank).
 */

const W = 860
const H = 340
/** The foot of the town wall. */
const FOOT = 236
const WALK = 80
const WALL_X0 = 498
const T1 = { cx: 498, w: 60, top: 50 }
const T2 = { cx: 830, w: 64, top: 42 }
const BREACH = { x0: 592, x1: 754, floor: 174, mid: 670, floorW: 52 }

type Marks = {
  sky: string
  ground: string
  wall: string
  notch: string
  town: { roofs: string; ridges: string }
  wallCuts: string
  wallJoints: string
  t1: { outline: string; corbels: string }
  t2: { outline: string; corbels: string }
  towerCuts: string
  slits: string
  heap: { mound: string; stones: string; faces: string }
  ladderUp: { rails: string; rungs: string }
  ladderHeld: { rails: string; rungs: string }
  rank: { rank: string; cuts: string; staves: string }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(8101)
  const sky = siegeSky(
    r,
    { x0: 0, x1: W, y0: 6, y1: FOOT },
    (x, y) =>
      0.1 + clamp(1 - Math.hypot((x - 680) * 0.7, y - 70) / 240) * 0.45 + (1 - y / FOOT) * 0.18,
    7.2,
  )
  const ground = siegeGround(rng(8102), { x0: 0, x1: W, y0: FOOT + 2, y1: H })
  const wall = battlements(WALL_X0, W + 8, WALK, FOOT, { merlon: 16, crenel: 10, mh: 14 })
  const notch = breachNotch(
    rng(8103),
    BREACH.x0,
    BREACH.x1,
    WALK - 16,
    BREACH.floor,
    BREACH.mid,
    BREACH.floorW,
  )
  const town = townRoofs(rng(8107), BREACH.x0, BREACH.x1, BREACH.floor - 2, 706)
  // The wall is lit from the left, the light failing towards the breach.
  const light = (x: number, y: number) =>
    clamp(0.5 - (x - WALL_X0) / 1000 - Math.abs(y - 150) / 700)
  const sw = stoneWall(rng(8104), { x0: WALL_X0, x1: W, y0: WALK + 4, y1: FOOT }, light, 22)
  const t1 = tower(T1.cx, T1.w, T1.top, FOOT)
  const t2 = tower(T2.cx, T2.w, T2.top, FOOT)
  let towerCuts = ''
  const rt = rng(8105)
  for (const t of [T1, T2]) {
    const tl = towerLight(t.cx, t.w)
    for (let y = t.top + 26; y < FOOT - 4; y += 7.4) {
      for (let x = t.cx - t.w / 2 + 3; x < t.cx + t.w / 2 - 6; x += between(rt, 9, 15)) {
        const L = tl(x)
        if (rt() < L * 0.85)
          towerCuts += gouge(
            x,
            y,
            x + between(rt, 4, 12) * L + 2,
            y + between(rt, -0.5, 0.5),
            0.4 + L * 1.6,
          )
      }
    }
  }
  const slits =
    slit(T1.cx - 8, 112) + slit(T1.cx + 10, 170) + slit(T2.cx - 12, 104) + slit(T2.cx + 6, 168)
  const heap = rubble(
    rng(8106),
    [
      [548, FOOT + 16],
      [574, FOOT - 4],
      [608, 206],
      [636, 182],
      [670, 176],
      [708, 180],
      [740, 200],
      [770, 222],
      [806, FOOT + 18],
    ],
    60,
  )
  const ladderUp = ladder([548, FOOT + 2], [566, WALK - 10], 14, 13)
  const ladderHeld = ladder([52, 334], [122, -14], 14, 15)
  const rank = soldierRank(rng(8108), 150, 470, 252, 0.9)
  cached = {
    sky,
    ground,
    wall,
    notch,
    town,
    wallCuts: sw.cuts,
    wallJoints: sw.joints,
    t1,
    t2,
    towerCuts,
    slits,
    heap,
    ladderUp,
    ladderHeld,
    rank,
  }
  return cached
}

/** The gun smoke, rising out of the breach and blowing over the town. */
const SMOKE: [number, number, number][] = [
  [732, 104, 11],
  [752, 90, 16],
  [778, 76, 18],
  [806, 66, 15],
  [830, 56, 12],
  [758, 64, 11],
]

/** A drawn ladder: rails stroked in ink over a paper edge, then the rungs. */
function Ladder({ l }: { l: { rails: string; rungs: string } }) {
  return (
    <>
      <path d={l.rails} stroke={PAPER} strokeWidth={6.6} fill="none" strokeLinecap="round" />
      <path d={l.rungs} stroke={PAPER} strokeWidth={5} fill="none" />
      <path d={l.rails} stroke={INK} strokeWidth={3} fill="none" strokeLinecap="round" />
      <path d={l.rungs} stroke={INK} strokeWidth={2.2} fill="none" />
    </>
  )
}

/** Leaning forward on the start, one foot before the other: "like greyhounds in the slips". */
const STRAINING = {
  body: { neck: [9, -136] as [number, number], hip: [0, -70] as [number, number] },
  legs: {
    far: [
      [-3, -70],
      [-12, -36],
      [-22, -3],
    ] as [number, number][],
    near: [
      [3, -70],
      [14, -38],
      [20, -3],
    ] as [number, number][],
  },
}

function OnceMoreUntoTheBreach({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-wall`
  return (
    <>
      <defs>
        {/* the wall with the breach broken out of it */}
        <clipPath id={clip}>
          <path d={`M0 0H${W}V${H}H0Z` + m.notch} clipRule="evenodd" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the roofs of the town, seen through the breach */}
        <path d={m.town.roofs} fill={INK} />
        <path d={m.town.ridges} fill={PAPER} />

        {/* the town wall, its towers, and the breach */}
        <g clipPath={`url(#${clip})`}>
          <path d={m.wall} fill={INK} />
          <path d={m.wallCuts} fill={PAPER} />
          <path d={m.wallJoints} fill={PAPER} />
        </g>
        <path d={m.notch} fill="none" stroke={PAPER} strokeWidth={1.4} />
        <path d={m.t1.outline + m.t2.outline} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path d={m.t1.corbels + m.t2.corbels + m.towerCuts + m.slits} fill={PAPER} />
        <Ladder l={m.ladderUp} />
        <Smoke rounds={SMOKE} className="lc-drift" edge={1.6} />

        {/* the ground before the wall, and the fallen stones of the breach */}
        <rect x={0} y={FOOT} width={W} height={H - FOOT} fill={PAPER} />
        <path d={`M0 ${FOOT}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.heap.mound} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={m.heap.stones} fill={PAPER} />
        <path d={m.heap.faces} fill="none" stroke={PAPER} strokeWidth={1} />

        {/* the rank of soldiers behind the lords, bills and bows upright */}
        <path d={m.rank.staves} fill="none" stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
        <path
          d={m.rank.rank}
          fill={PAPER}
          stroke={PAPER}
          strokeWidth={3.2}
          strokeLinejoin="round"
        />
        <path d={m.rank.staves} fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
        <path d={m.rank.rank} fill={INK} />
        <path d={m.rank.cuts} fill={PAPER} />

        {/* a soldier with a scaling ladder, straining forward */}
        <Ladder l={m.ladderHeld} />
        <Person
          pose={{
            look: 'soldier',
            body: { neck: [10, -134], hip: [0, -70] },
            legs: {
              far: [
                [-3, -70],
                [-16, -36],
                [-28, -3],
              ],
              near: [
                [3, -70],
                [16, -38],
                [24, -3],
              ],
            },
            near: {
              pts: [
                [8, -130],
                [24, -116],
                [38, -128],
              ],
              hand: 'grip',
              deg: -70,
            },
          }}
          at={[38, 330]}
          scale={1}
        />

        {/* Saint George's banner, and its bearer */}
        <Banner x={128} top={34} foot={318} w={96} h={60} amp={5} />
        <Person
          pose={{
            look: 'soldier',
            variant: 2,
            body: { neck: [6, -136], hip: [0, -70] },
            near: {
              pts: [
                [4, -132],
                [14, -110],
                [20, -118],
              ],
              hand: 'grip',
              deg: -90,
            },
          }}
          at={[110, 322]}
          scale={0.95}
        />

        {/* Bedford, Gloucester and Exeter, straining on the start */}
        <Person
          pose={{
            look: 'lord',
            variant: 0,
            dress: 'armour',
            helm: true,
            ...STRAINING,
            near: {
              pts: [
                [6, -132],
                [12, -106],
                [10, -86],
              ],
              hand: 'mitt',
              deg: 80,
            },
          }}
          at={[186, 316]}
          scale={0.92}
        />
        <Person
          pose={{
            look: 'lord',
            variant: 2,
            dress: 'armour',
            helm: true,
            ...STRAINING,
            near: {
              pts: [
                [6, -132],
                [16, -108],
                [12, -88],
              ],
              hand: 'mitt',
            },
          }}
          at={[240, 320]}
          scale={0.94}
        />
        <Person
          pose={{
            look: 'exeter',
            dress: 'armour',
            helm: true,
            ...STRAINING,
            near: {
              pts: [
                [6, -132],
                [12, -106],
                [16, -86],
              ],
              hand: 'mitt',
            },
          }}
          at={[296, 327]}
          scale={1}
        />

        {/* Henry, leading them on: his sword up towards the breach, his other
            hand thrown back, low and open, to his men */}
        <Person
          pose={{
            look: 'henry',
            dress: 'armour',
            helm: true,
            mouth: 'open',
            body: { neck: [5, -137], hip: [0, -70] },
            far: {
              pts: [
                [2, -134],
                [-14, -112],
                [-32, -106],
              ],
              hand: 'open',
              deg: 166,
              thumb: 1,
            },
            near: {
              pts: [
                [4, -132],
                [26, -134],
                [40, -158],
              ],
              hand: 'grip',
              deg: -62,
            },
            legs: {
              far: [
                [-3, -70],
                [-14, -36],
                [-26, -3],
              ],
              near: [
                [3, -70],
                [16, -40],
                [22, -3],
              ],
            },
          }}
          at={[404, 326]}
          scale={1.06}
        >
          <Sword grip={[42, -162]} angle={-62} len={100} />
        </Person>
      </g>
    </>
  )
}

export const onceMoreUntoTheBreach: LinocutArt = {
  width: W,
  height: H,
  Draw: OnceMoreUntoTheBreach,
}
