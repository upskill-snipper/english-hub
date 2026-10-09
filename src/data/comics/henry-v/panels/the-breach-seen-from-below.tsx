import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  Banner,
  Smoke,
  battlements,
  breachNotch,
  mineMouth,
  minersTools,
  rubble,
  siegeGround,
  siegeSky,
  townRoofs,
} from './harfleur'
import { Person } from './people'

/**
 * Act 3, Scene 2: "The breach seen from below", the ninth moment in the
 * guide's timeline. The scene is "The same" as the one before, before
 * Harfleur, and the guide sets it "Near the breach and the mines". Every
 * detail is from the held edition (src/data/full-texts/henry-v.ts, Project
 * Gutenberg #1521):
 *
 * - The panel draws the scene's second half, the quarrel the guide's
 *   quotation comes from: "Enter Macmorris and Captain Jamy" to Gower and
 *   Fluellen. So the four captains and no one else: Bardolph, Nym, Pistol and
 *   the Boy have gone before it begins.
 * - "How now, Captain Macmorris! have you quit the mines? Have the pioneers
 *   given o'er?" So Macmorris has just come up out of the mine: its mouth is
 *   dug into the bank of the siege works behind him, propped with timber, a
 *   pick and a spade left leaning by it, and the English banner of Saint
 *   George planted on the bank.
 * - "What ish my nation? ... Who talks of my nation?" Macmorris, his brow down
 *   and his mouth open, points at Fluellen; Fluellen, "being as good a man as
 *   yourself", lays his hand on his own breast; Gower, "Gentlemen both, you
 *   will mistake each other", reaches out to hold him back; Jamy, who "wad
 *   full fain heard some question 'tween you tway", looks on. They are drawn
 *   from the kit (./people.tsx): Macmorris's beard, which Fluellen will
 *   "verify as much in", Fluellen's old-fashioned hood, Gower's steel cap and
 *   Jamy's flat cap. Nothing in their dress is a national costume: the play
 *   makes their nations a matter of their speech, and so does the panel.
 * - Above them the town wall of the panel before, the same breach broken in
 *   it, its stones fallen below it, and the smoke of the guns still hanging
 *   over it.
 *
 * Macmorris's threat later in the quarrel is not drawn: every sword stays in
 * its scabbard and the pointing hand is the only weapon. The banner is the
 * one thing in the spot colour. Nothing is taken from a film or stage
 * production.
 *
 * Seeds: 9101 (sky), 9102 (ground), 9103 (breach), 9104 (wall), 9106 (heap),
 * 9107 (town), 9109 (the bank).
 */

const W = 860
const H = 340
/** The foot of the town wall. */
const FOOT = 214
const WALK = 62
const BREACH = { x0: 548, x1: 724, floor: 150, mid: 640, floorW: 50 }
/** The top of the earth bank of the siege works, on the left, and the mine dug into it. */
const BANK = (x: number) => 184 + Math.pow(Math.max(0, x - 70) / 124, 2) * 118
const BANK_FOOT = 304
const MINE: [number, number] = [88, BANK_FOOT]
const MINE_W = 58
const MINE_H = 84

type Marks = {
  sky: string
  ground: string
  wall: string
  notch: string
  town: { roofs: string; ridges: string }
  wallCuts: string
  wallJoints: string
  heap: { mound: string; stones: string; faces: string }
  bank: string
  bankCuts: string
  mine: ReturnType<typeof mineMouth>
  tools: ReturnType<typeof minersTools>
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = siegeSky(
    rng(9101),
    { x0: 0, x1: W, y0: 6, y1: FOOT },
    (x, y) =>
      0.12 + clamp(1 - Math.hypot((x - 650) * 0.7, y - 40) / 220) * 0.4 + (1 - y / FOOT) * 0.15,
    7.4,
  )
  const ground = siegeGround(rng(9102), { x0: 0, x1: W, y0: FOOT + 2, y1: H }, 0.9)
  const wall = battlements(-8, W + 8, WALK, FOOT, { merlon: 18, crenel: 11, mh: 15, phase: 4 })
  const notch = breachNotch(
    rng(9103),
    BREACH.x0,
    BREACH.x1,
    WALK - 16,
    BREACH.floor,
    BREACH.mid,
    BREACH.floorW,
  )
  const town = townRoofs(rng(9107), BREACH.x0, BREACH.x1, BREACH.floor - 2)
  // The sun is on the wall from the left: its stones are cut paler there, so
  // the captains' dark heads stand out against it.
  const light = (x: number, y: number) =>
    clamp(0.62 - Math.abs(x - 300) / 1100 - Math.abs(y - 130) / 520)
  const sw = stoneWall(rng(9104), { x0: -8, x1: W + 8, y0: WALK + 4, y1: FOOT }, light, 21)
  // The fallen stones of the breach, down the wall to its foot.
  const heap = rubble(
    rng(9106),
    [
      [500, FOOT + 14],
      [532, 192],
      [574, 164],
      [612, 150],
      [664, 148],
      [706, 162],
      [744, 190],
      [786, FOOT + 8],
      [812, FOOT + 20],
    ],
    60,
  )
  // The bank of the siege works: dug earth, cut with the marks of the spades
  // in rows, paler round the mouth of the mine where it is freshly thrown up,
  // so the mouth, uncut, reads as the black hole it is.
  let bank = `M-8 ${n(BANK(-8))}`
  for (let x = 0; x <= 196; x += 8) bank += `L${x} ${n(Math.min(BANK(x), BANK_FOOT))}`
  bank += `L200 ${BANK_FOOT}L-8 ${BANK_FOOT}Z`
  let bankCuts = ''
  const rb = rng(9109)
  for (let y = 0; y < 124; y += 4.2) {
    for (let x = between(rb, -12, 0); x < 200; x += between(rb, 8, 16)) {
      const top = Math.min(BANK(x), BANK(x + 12))
      const yy = top + 5 + y
      if (yy + 3 > BANK_FOOT) continue
      // leave the mouth and its timbers uncut
      if (Math.abs(x + 6 - MINE[0]) < MINE_W / 2 + 22 && yy > MINE[1] - MINE_H - 14) continue
      const near = clamp(1 - Math.hypot(x - MINE[0], (yy - (MINE[1] - MINE_H / 2)) * 1.3) / 90)
      if (rb() < 0.7 + near * 0.3)
        bankCuts += gouge(
          x,
          yy,
          x + between(rb, 7, 13),
          yy + between(rb, -1, 1),
          0.8 + rb() * 0.7 + near * 0.9,
        )
    }
  }
  const mine = mineMouth(MINE, MINE_W, MINE_H)
  const tools = minersTools([146, BANK_FOOT + 2])
  cached = {
    sky,
    ground,
    wall,
    notch,
    town,
    wallCuts: sw.cuts,
    wallJoints: sw.joints,
    heap,
    bank,
    bankCuts,
    mine,
    tools,
  }
  return cached
}

/** Smoke still hanging over the breach from the guns. */
const SMOKE: [number, number, number][] = [
  [700, 64, 13],
  [724, 50, 17],
  [752, 40, 14],
  [684, 44, 10],
]

function TheBreachSeenFromBelow({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-wall`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={`M-10 -10H${W + 10}V${H + 10}H-10Z` + m.notch} clipRule="evenodd" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 240], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.town.roofs} fill={INK} />
        <path d={m.town.ridges} fill={PAPER} />

        {/* the town wall over the siege works, the breach high in it */}
        <g clipPath={`url(#${clip})`}>
          <path d={m.wall} fill={INK} />
          <path d={m.wallCuts + m.wallJoints} fill={PAPER} />
        </g>
        <path d={m.notch} fill="none" stroke={PAPER} strokeWidth={1.4} />
        <Smoke rounds={SMOKE} className="lc-drift" edge={1.6} />

        {/* the ground below the walls and the stones fallen from the breach */}
        <rect x={0} y={FOOT} width={W} height={H - FOOT} fill={PAPER} />
        <path d={`M0 ${FOOT}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.heap.mound} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={m.heap.stones} fill={PAPER} />
        <path d={m.heap.faces} fill="none" stroke={PAPER} strokeWidth={1} />

        {/* the bank of the siege works, with the mine dug into it */}
        <Banner x={30} top={70} foot={BANK(30) + 2} w={84} h={52} amp={4} />
        <path d={m.bank} fill={INK} stroke={PAPER} strokeWidth={2} strokeLinejoin="round" />
        <path d={m.bankCuts} fill={PAPER} />
        <path d={m.mine.opening} fill={INK} />
        <path
          d={m.mine.inner}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
        <path
          d={m.mine.timbers}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <path d={m.mine.grain} fill={INK} />
        <path d={m.tools.hafts} fill="none" stroke={INK} strokeWidth={5.4} strokeLinecap="round" />
        <path
          d={m.tools.hafts}
          fill="none"
          stroke={PAPER}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <path d={m.tools.iron} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />

        {/* Macmorris, up from the mines, pointing at Fluellen: "What ish my nation?" */}
        <Person
          pose={{
            look: 'macmorris',
            brow: 'frown',
            mouth: 'open',
            body: { neck: [8, -136], hip: [0, -70] },
            near: {
              pts: [
                [8, -132],
                [28, -122],
                [48, -128],
              ],
              hand: 'point',
              deg: -4,
            },
            legs: {
              far: [
                [-3, -70],
                [-12, -36],
                [-20, -3],
              ],
              near: [
                [3, -70],
                [14, -38],
                [20, -3],
              ],
            },
          }}
          at={[226, 330]}
          scale={1.06}
        />

        {/* Fluellen, leaning back, his hand on his breast: "as good a man as yourself" */}
        <Person
          pose={{
            look: 'fluellen',
            mouth: 'open',
            body: { neck: [-4, -137], hip: [0, -70] },
            near: {
              pts: [
                [4, -132],
                [20, -108],
                [16, -120],
              ],
              hand: 'open',
              deg: -118,
              size: 14,
            },
          }}
          at={[356, 330]}
          scale={1}
          flip
        />

        {/* Gower, reaching out to hold him back: "Gentlemen both, you will mistake each other" */}
        <Person
          pose={{
            look: 'gower',
            body: { neck: [5, -137], hip: [0, -70] },
            far: {
              pts: [
                [0, -134],
                [16, -114],
                [32, -110],
              ],
              hand: 'open',
              deg: 2,
            },
            near: {
              pts: [
                [4, -132],
                [18, -110],
                [34, -104],
              ],
              hand: 'open',
              deg: 12,
            },
          }}
          at={[440, 326]}
          scale={0.95}
          flip
        />

        {/* Jamy, looking on */}
        <Person
          pose={{
            look: 'jamy',
            near: {
              pts: [
                [0, -132],
                [14, -108],
                [4, -90],
              ],
              hand: 'mitt',
            },
          }}
          at={[522, 324]}
          scale={0.97}
          flip
        />
      </g>
    </>
  )
}

export const theBreachSeenFromBelow: LinocutArt = {
  width: W,
  height: H,
  Draw: TheBreachSeenFromBelow,
}
