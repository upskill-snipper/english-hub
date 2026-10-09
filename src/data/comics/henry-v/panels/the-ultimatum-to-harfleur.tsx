import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  Banner,
  battlements,
  gateway,
  siegeGround,
  siegeSky,
  slit,
  soldierRank,
  tower,
  towerLight,
} from './harfleur'
import { Person } from './people'

/**
 * Act 3, Scene 3: "The ultimatum to Harfleur", the tenth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521), set "Before the
 * gates":
 *
 * - "The Governor and some citizens on the walls; the English forces below.
 *   Enter King Henry and his train." So the town wall of the two panels
 *   before, here at its gatehouse: the gate shut between its two towers, the
 *   Governor and three citizens over it, and below, on the ground before it,
 *   the English: the banner of Saint George, soldiers, Exeter, and Henry
 *   nearest the gate.
 * - Henry's demand, "How yet resolves the governor of the town?", and his
 *   warning that "The gates of mercy shall be all shut up": he stands before
 *   the gate, his brow drawn down and his mouth open, pointing at it. What
 *   he threatens is in his words only, and is never drawn: the town behind
 *   its wall is not seen, no one in it is in danger in the picture, and
 *   there is no child anywhere in it. The citizens on the wall are grown men,
 *   their eyes wide.
 * - The Governor's answer, "We yield our town and lives to thy soft mercy",
 *   so he bows his head and holds out an open hand, low, towards the King.
 *   He is the captain of the town, drawn in harness with the lilies of France
 *   on his coat (./people.tsx).
 * - Henry's last words: "Come, uncle Exeter, Go you and enter Harfleur", and
 *   "The winter coming on, and sickness growing Upon our soldiers". So Exeter
 *   stands at his shoulder, the sky is low and grey, and one of the soldiers
 *   leans on his bill, his head down.
 *
 * The banner is the one thing in the spot colour, big enough to stay a flag
 * at phone width. No gun and no fire, and every sword is in its scabbard; the
 * bill the weary soldier leans on stands upright, its head clear of everyone.
 * The threat is the King's words, and the quotation carries them. Nothing is
 * taken from a film or stage production.
 *
 * Seeds: 1001 (sky), 1002 (ground), 1003 (wall), 1004 (towers), 1005 (rank).
 */

const W = 860
const H = 340
/** The foot of the town wall. */
const FOOT = 262
/** The top of the parapet between the merlons. */
const WALK = 132
const TL = { cx: 506, w: 78, top: 66 }
const TR = { cx: 752, w: 78, top: 62 }
const GATE = { cx: 629, w: 86, spring: 206 }
/** The top of the plain parapet over the gate. */
const PARAPET = 128

type Marks = {
  sky: string
  ground: string
  wall: string
  wallCuts: string
  wallJoints: string
  tl: { outline: string; corbels: string }
  tr: { outline: string; corbels: string }
  towerCuts: string
  slits: string
  gate: ReturnType<typeof gateway>
  rank: { rank: string; cuts: string; staves: string }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A grey, still day: "The winter coming on". The guns have stopped, so the
  // sky is level cloud, heavier overhead.
  const sky = siegeSky(
    rng(1001),
    { x0: 0, x1: W, y0: 6, y1: FOOT },
    (x, y) => 0.16 + (1 - y / FOOT) * 0.46,
    7.4,
  )
  const ground = siegeGround(rng(1002), { x0: 0, x1: W, y0: FOOT + 2, y1: H })
  // The curtain wall on either side of the gatehouse, with its battlements,
  // and over the gate a plain parapet, so the Governor and the citizens show
  // above it from the chest up.
  const wall =
    battlements(392, TL.cx, WALK, FOOT, { merlon: 18, crenel: 12, mh: 15, phase: 6 }) +
    battlements(TR.cx, W + 8, WALK, FOOT, { merlon: 18, crenel: 12, mh: 15, phase: 2 }) +
    `M${TL.cx} ${PARAPET}H${TR.cx}V${FOOT}H${TL.cx}Z`
  const light = (x: number, y: number) => clamp(0.48 - (x - 392) / 1100 - Math.abs(y - 190) / 600)
  const sw = stoneWall(rng(1003), { x0: 392, x1: W, y0: WALK + 4, y1: FOOT }, light, 22)
  const tl = tower(TL.cx, TL.w, TL.top, FOOT)
  const tr = tower(TR.cx, TR.w, TR.top, FOOT)
  let towerCuts = ''
  const rt = rng(1004)
  for (const t of [TL, TR]) {
    const tlit = towerLight(t.cx, t.w)
    for (let y = t.top + 26; y < FOOT - 4; y += 7.4) {
      for (let x = t.cx - t.w / 2 + 3; x < t.cx + t.w / 2 - 6; x += between(rt, 9, 15)) {
        const L = tlit(x)
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
    slit(TL.cx - 10, 120) + slit(TL.cx + 8, 196) + slit(TR.cx - 12, 116) + slit(TR.cx + 6, 194)
  const gate = gateway(GATE.cx, GATE.w, GATE.spring, FOOT)
  const rank = soldierRank(rng(1005), 14, 250, 280, 0.86)
  cached = {
    sky,
    ground,
    wall,
    wallCuts: sw.cuts,
    wallJoints: sw.joints,
    tl,
    tr,
    towerCuts,
    slits,
    gate,
    rank,
  }
  return cached
}

function TheUltimatumToHarfleur({ uid }: ArtProps) {
  const m = marks()
  const g = m.gate
  return (
    <>
      <g data-uid={uid} className="lc-push" style={timing({ origin: [430, 230], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the Governor and citizens of Harfleur on the walls */}
        <Person
          pose={{ look: 'citizen', variant: 1, eye: 'wide' }}
          at={[576, 194]}
          scale={0.7}
          flip
        />
        <Person
          pose={{ look: 'citizen', variant: 0, eye: 'wide' }}
          at={[604, 192]}
          scale={0.7}
          flip
        />
        <Person
          pose={{ look: 'citizen', variant: 2, eye: 'down' }}
          at={[692, 194]}
          scale={0.7}
          flip
        />
        {/* the Governor, his head bowed, an open hand held out low: "We yield our town" */}
        <Person
          pose={{
            look: 'governor',
            dress: 'armour',
            eye: 'down',
            head: { at: [9, -155], rot: 20 },
            body: { neck: [7, -137], hip: [0, -70] },
            near: {
              pts: [
                [6, -132],
                [16, -112],
                [32, -112],
              ],
              hand: 'open',
              deg: 14,
              thumb: -1,
            },
          }}
          at={[648, 198]}
          scale={0.82}
          flip
        />

        {/* the wall, the gate towers and the shut gate */}
        <path d={m.wall} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path d={m.wallCuts + m.wallJoints} fill={PAPER} />
        <path d={m.tl.outline + m.tr.outline} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path d={m.tl.corbels + m.tr.corbels + m.towerCuts + m.slits} fill={PAPER} />
        <path d={g.band} fill={PAPER} />
        <path d={g.joints} fill={INK} />
        <path d={g.opening} fill={INK} />
        <path d={g.planks + g.hinges} fill={PAPER} />
        <path d={g.studs} fill={PAPER} />
        <path d={g.meet} stroke={PAPER} strokeWidth={1.4} />

        {/* the ground before the gates */}
        <rect x={0} y={FOOT} width={W} height={H - FOOT} fill={PAPER} />
        <path d={`M0 ${FOOT}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />

        {/* the English below: a rank of soldiers, the banner of Saint George */}
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
        <Banner x={146} top={70} foot={316} w={92} h={58} amp={4} />

        {/* a soldier leaning on his bill, his head down: "sickness growing Upon our soldiers" */}
        <Person
          pose={{
            look: 'soldier',
            variant: 1,
            eye: 'down',
            head: { at: [9, -158], rot: 16 },
            body: { neck: [7, -134], hip: [0, -70] },
            far: {
              pts: [
                [2, -130],
                [14, -112],
                [24, -116],
              ],
              hand: 'grip',
              deg: -90,
            },
            near: {
              pts: [
                [6, -130],
                [18, -108],
                [24, -108],
              ],
              hand: 'grip',
              deg: -90,
            },
          }}
          at={[66, 320]}
          scale={0.94}
        >
          {/* the bill he leans on, its blade up, clear of everyone */}
          <path d="M28 -2L26 -176" stroke={PAPER} strokeWidth={6} strokeLinecap="round" />
          <path d="M28 -2L26 -176" stroke={INK} strokeWidth={3} strokeLinecap="round" />
          <path
            d="M24.6 -172L32 -178L28.4 -198L24.4 -194Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
        </Person>
        <Person
          pose={{
            look: 'soldier',
            variant: 2,
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
          at={[128, 322]}
          scale={0.95}
        />
        <Person pose={{ look: 'exeter', dress: 'armour' }} at={[214, 326]} scale={1} />

        {/* Henry before the gates, pointing at them */}
        <Person
          pose={{
            look: 'henry',
            dress: 'armour',
            mouth: 'open',
            brow: 'frown',
            near: {
              pts: [
                [4, -132],
                [26, -124],
                [48, -134],
              ],
              hand: 'point',
              deg: -12,
            },
          }}
          at={[300, 330]}
          scale={1.06}
        />
      </g>
    </>
  )
}

export const theUltimatumToHarfleur: LinocutArt = {
  width: W,
  height: H,
  Draw: TheUltimatumToHarfleur,
}
