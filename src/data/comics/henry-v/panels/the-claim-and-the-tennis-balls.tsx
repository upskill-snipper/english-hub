import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person } from './people'
import {
  ClothOfState,
  Dais,
  FLOOR_Y,
  GothicWindow,
  H,
  Throne,
  W,
  floorMarks,
  wallMarks,
} from './palace'

/**
 * Act 1, Scene 2: "The claim and the tennis balls", the third moment in the
 * guide's timeline. The presence chamber of the palace. Every detail is from
 * the scene in the held edition (src/data/full-texts/henry-v.ts, Project
 * Gutenberg #1521):
 *
 * - Henry has heard Canterbury's case ("May I with right and conscience make
 *   this claim?") and "Now are we well resolv'd"; then "Enter Ambassadors of
 *   France." He hears them from his throne ("God and his angels guard your
 *   sacred throne", Canterbury, at the start of the scene), and Canterbury and
 *   Ely stay to hear them: they stand back by the wall, the same two prelates
 *   as in the moment before.
 * - The ambassador gives the Dauphin's answer: "He therefore sends you,
 *   meeter for your spirit, This tun of treasure". A tun is a cask. Henry asks
 *   "What treasure, uncle?" and Exeter, who has looked, answers "Tennis-balls,
 *   my liege." So the cask stands open on the floor between the English and
 *   the French, heaped with balls, a few rolled out across the flags; Exeter
 *   holds one up to the King; the King leans forward on his seat with an open
 *   hand held out, palm up, asking, his brow drawn down; the first ambassador
 *   presents the gift with an open hand, the second stands behind him.
 * - The French are lords in long gowns sprinkled with the lilies of France,
 *   drawn with the same care as the English (./people.tsx).
 * - The King sits under his cloth of state, the one thing in the spot colour:
 *   "I will keep my state, Be like a king". His crown is printed in paper.
 *
 * Henry's answer, that the Dauphin's mock "Hath turn'd his balls to
 * gun-stones", is the guide's quotation for the moment and is printed beside
 * the panel; it is not drawn: no gun, no cannon-ball. Nothing is taken from a
 * film or stage production. Seeds: 301 (wall), 302 (floor), 303 (cloth of
 * state), 304 (balls).
 */

/** The window on the right lights the cask and the French; the throne is in shadow under its cloth. */
const light = (x: number, y: number) => {
  const win = clamp(1 - Math.hypot((x - 560) * 0.7, (y - 130) * 1.1) / 330)
  return Math.max(win * 0.86, 0.06)
}

/** The tun: a cask standing on its end, the middle of its foot at TUN. */
const TUN: [number, number] = [482, 304]

type Ball = [number, number, number]
type Marks = {
  wall: { cuts: string; joints: string }
  floor: string
  shadows: string
  heap: Ball[]
  rolled: Ball[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const [tx, ty] = TUN
  const r = rng(304)
  // the balls heaped above the open head of the cask, the back rows first
  const heap: Ball[] = []
  const rows = [
    { y: ty - 76, xs: [-22, -11, 0, 11, 22] },
    { y: ty - 82, xs: [-16, -5, 6, 17] },
    { y: ty - 88, xs: [-10, 1, 12] },
    { y: ty - 93, xs: [-3, 7] },
  ]
  for (const row of rows)
    for (const dx of row.xs)
      heap.push([tx + dx + between(r, -1.2, 1.2), row.y + between(r, -1, 1), 5.6])
  // and the ones that have rolled out across the floor towards both parties
  const rolled: Ball[] = [
    [tx - 52, ty + 6, 5.8],
    [tx - 86, ty + 18, 6],
    [tx + 40, ty + 12, 5.8],
    [tx + 70, ty - 2, 5.4],
  ]
  const shadows =
    footShadow(302, 307, 30) +
    footShadow(612, 307, 30) +
    footShadow(696, 307, 28) +
    footShadow(tx, ty + 3, 36) +
    footShadow(378, 268, 18) +
    footShadow(412, 268, 18)
  cached = {
    wall: wallMarks(301, light),
    floor: floorMarks(302, [420, 110]),
    shadows,
    heap,
    rolled,
  }
  return cached
}

/** The cask, its staves and three hoops cut in paper, its head off and leaning against it. */
function Tun() {
  const [x, y] = TUN
  const p = (dx: number, dy: number) => `${n(x + dx)} ${n(y + dy)}`
  const body = `M${p(-28, -74)}C${p(-35, -54)} ${p(-35, -22)} ${p(-28, 0)}L${p(28, 0)}C${p(35, -22)} ${p(35, -54)} ${p(28, -74)}Z`
  let staves = ''
  for (const dx of [-18, -7, 4, 15])
    staves += gouge(x + dx, y - 72, x + dx * 1.1, y - 2, 0.9, dx * 0.05)
  const hoops = [-66, -37, -8]
    .map((dy) => {
      const w = dy === -37 ? 33 : 30
      return `M${p(-w, dy - 2.6)}Q${p(0, dy + 3.4)} ${p(w, dy - 2.6)}L${p(w, dy + 2.6)}Q${p(0, dy + 8.6)} ${p(-w, dy + 2.6)}Z`
    })
    .join('')
  const mouth = `M${p(-28, -74)}C${p(-28, -79)} ${p(28, -79)} ${p(28, -74)}C${p(28, -69)} ${p(-28, -69)} ${p(-28, -74)}Z`
  const lid = `M${p(30, -2)}C${p(30, -30)} ${p(40, -46)} ${p(46, -46)}C${p(52, -46)} ${p(52, -26)} ${p(44, -2)}Z`
  return (
    <g>
      {/* the head, its boards in ink on paper: cut in ink, it read as a dark stone */}
      <path d={lid} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path
        d={gouge(x + 36, y - 38, x + 35.6, y - 4, 0.8) + gouge(x + 43, y - 42, x + 41, y - 4, 0.8)}
        fill={INK}
      />
      <path d={body} fill={INK} stroke={PAPER} strokeWidth={1.8} strokeLinejoin="round" />
      <path d={staves} fill={PAPER} />
      <path d={hoops} fill={PAPER} />
      <path d={mouth} fill={INK} stroke={PAPER} strokeWidth={1.4} />
    </g>
  )
}

/**
 * The balls, each its own shape, drawn from the back of the heap to the
 * front, so a ball in front hides the edge of the one behind it. (Drawn as one
 * path, every outline printed over every ball and the heap read as a heap of
 * rings, or a coat of mail.)
 */
function Balls({ balls }: { balls: Ball[] }) {
  return (
    <g>
      {balls.map(([cx, cy, rad]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={n(cx)} cy={n(cy)} r={n(rad)} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          {/* its curved seam, a short ink cut */}
          <path
            d={gouge(cx - rad * 0.6, cy - rad * 0.2, cx + rad * 0.5, cy + rad * 0.45, 0.5, -0.8)}
            fill={INK}
          />
        </g>
      ))}
    </g>
  )
}

function ClaimAndTennisBalls({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [400, 180], push: 1.03 })}>
      {/* the stone of the presence chamber, lit from the window on the right */}
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill={PAPER} />
      <GothicWindow uid={uid} x={560} w={92} spring={96} sill={196} />

      {/* the floor */}
      <rect x={0} y={FLOOR_Y} width={W} height={H - FLOOR_Y} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* the King's cloth of state, the dais and his seat */}
      <ClothOfState x0={34} x1={246} y0={20} y1={234} seed={303} />
      <Dais x0={40} x1={252} y={280} />
      <Throne x={150} seatY={226} top={60} floor={280} />

      {/* Canterbury and Ely, standing back by the wall to hear the French */}
      <Person
        pose={{
          look: 'canterbury',
          far: {
            pts: [
              [-3, -128],
              [4, -108],
              [14, -104],
            ],
          },
          near: {
            pts: [
              [4, -128],
              [10, -106],
              [18, -102],
            ],
          },
        }}
        at={[378, 268]}
        scale={0.98}
      />
      <Person
        pose={{
          look: 'ely',
          far: {
            pts: [
              [-3, -128],
              [4, -108],
              [14, -104],
            ],
          },
          near: {
            pts: [
              [4, -128],
              [10, -106],
              [18, -102],
            ],
          },
        }}
        at={[412, 268]}
        scale={0.98}
      />

      {/* the King on his seat, leaning forward, an open hand held out: "What treasure, uncle?" */}
      <Person
        pose={{
          look: 'henry',
          seated: { seat: 52, knee: [36, -56] },
          mantle: 0,
          brow: 'frown',
          head: { at: [6, -128], rot: 5 },
          body: { neck: [3, -106], hip: [0, -60] },
          far: {
            pts: [
              [-2, -102],
              [4, -80],
              [16, -70],
            ],
          },
          near: {
            pts: [
              [6, -102],
              [20, -82],
              [38, -86],
            ],
            hand: 'open',
            deg: -12,
            thumb: -1,
          },
        }}
        at={[150, 280]}
        scale={1.3}
      />

      {/* the open cask and the tennis balls */}
      <Tun />
      {/* the top of the heap first: it lies behind the balls below it */}
      <Balls balls={[...m.heap].reverse()} />
      <Balls balls={m.rolled} />

      {/* Exeter, holding up one of the balls to the King */}
      <Person
        pose={{
          look: 'exeter',
          head: { rot: -4 },
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
              [20, -110],
              [38, -118],
            ],
            hand: 'grip',
            deg: -24,
          },
        }}
        at={[302, 306]}
        scale={1.26}
        flip
      >
        {/* the ball, held up between his fingers for the King to see */}
        <circle cx={50} cy={-125} r={5.6} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={gouge(46.6, -126.4, 52.6, -122.6, 0.45, -0.7)} fill={INK} />
      </Person>

      {/* the French ambassadors: the first presents the gift with an open hand */}
      <Person
        pose={{
          look: 'french-lord',
          variant: 0,
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
        at={[696, 306]}
        scale={1.24}
        flip
      />
      <Person
        pose={{
          look: 'ambassador',
          head: { rot: 3 },
          mouth: 'open',
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
              [14, -102],
              [32, -98],
            ],
            hand: 'open',
            deg: 6,
            thumb: -1,
          },
        }}
        at={[612, 306]}
        scale={1.26}
        flip
      />
    </g>
  )
}

export const claimAndTennisBalls: LinocutArt = { width: W, height: H, Draw: ClaimAndTennisBalls }
