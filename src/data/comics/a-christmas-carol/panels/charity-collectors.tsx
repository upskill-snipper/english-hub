import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wedge,
  wisps,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { SCROOGE_HEAD, ScroogeSilhouette } from '../scrooge'

/**
 * Stave One: "The charity collectors", the second moment in the guide's
 * timeline. Every detail is from the text:
 *
 * - The clerk, "in letting Scrooge's nephew out, had let two other people in.
 *   They were portly gentlemen, pleasant to behold, and now stood, with their
 *   hats off, in Scrooge's office. They had books and papers in their hands,
 *   and bowed to him." So two round men bow towards Scrooge, hats off and
 *   faces lit: one has his hat under his arm and his book open, "referring to
 *   his list" and "taking up a pen"; the other holds his hat to his chest and
 *   a roll of papers.
 * - "At the ominous word 'liberality,' Scrooge frowned, and shook his head, and
 *   handed the credentials back." So Scrooge sits stiff on his stool, a dark
 *   shape, and holds the gentleman's paper out at arm's length across his
 *   desk.
 * - "Meanwhile the fog and darkness thickened so ... In the main street, at the
 *   corner of the court, some labourers were repairing the gas-pipes, and had
 *   lighted a great fire in a brazier, round which a party of ragged men and
 *   boys were gathered: warming their hands and winking their eyes before the
 *   blaze in rapture." The panel sets that fire in the fogged window, in the
 *   gap between the gentlemen's open book and Scrooge's refusal, because it
 *   is what they are asking for: "meat and drink, and means of warmth". It
 *   takes the spot colour, as Scrooge's own "very small fire" does at the
 *   left. Where the window stands is the panel's choice; the text says only
 *   that the brazier was at the corner of the court.
 *
 * The room, the stool, the desk and Scrooge's seated figure are the counting-
 * house panel's (counting-house.tsx), moved left, so it is the same man in the
 * same room later that afternoon. The gentlemen's dress is not described
 * beyond their hats, so they wear plain tail-coats, waistcoats and trousers
 * of 1843.
 *
 * Seed 202 for the room, 56 and 57 for the fog, 607 for the Tank's candle.
 */

const W = 860
const H = 340
/** Scrooge, his stool and his desk, moved from where the counting-house panel drew them. */
const SCROOGE_SHIFT = -168

type Marks = {
  wall: string
  wains: string
  floor: string
  floorShade: string
  pool: string
  houses: string
  fogWin: string
  fogLow: string
  tankRays: string
  frame: [number, number, number, number][]
  darkness: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(202)
  // The light is the fog at the window, the Tank's candle behind the
  // gentlemen and Scrooge's small fire; the cuts in the wall follow all three.
  const light = (x: number, y: number) => {
    const l1 = clamp(1 - Math.hypot((x - 404) * 0.75, y - 92) / 230)
    const l2 = clamp(1 - Math.hypot(x - 790, y - 130) / 170) * 0.55
    const l3 = clamp(1 - Math.hypot(x - 52, y - 200) / 120) * 0.5
    return Math.max(l1, l2, l3, 0.05)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 158 }, light)

  let wains = ''
  for (let x = 2; x < W; x += 9) {
    if (x < 124) continue
    const L = light(x, 200)
    wains += wedge(
      x + between(r, -0.6, 0.6),
      175,
      x + between(r, -0.6, 0.6),
      231,
      0.4,
      0.8 + L * 3.2,
    )
  }

  // Floor: paper boards, ink joints running to a vanishing point.
  let floor = ''
  const V = [420, 30]
  for (let xt = -560; xt < 1440; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (241 - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        241 + (H - 241) * t0,
        xt + (xb - xt) * t1,
        241 + (H - 241) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  let floorShade = ''
  for (let y = 242; y < 262; y += 3) floorShade += gouge(0, y, W, y, 2.6 - (y - 242) * 0.12)
  // Shadow pools under the stool and desk, and under each gentleman.
  let pool = ''
  for (let y = 300; y < 334; y += 3.4) {
    const w = 1 - Math.abs(y - 316) / 20
    pool += gouge(132 - w * 10, y, 380 + w * 20, y + 1, 1 + w * 2.2)
  }
  for (const [cx, half] of [
    [528, 44],
    [660, 44],
  ]) {
    for (let y = 306; y < 324; y += 3.2) {
      const w = 1 - Math.abs(y - 315) / 10
      pool += gouge(cx - half * w - 8, y, cx + half * w + 8, y + 0.6, 0.6 + w * 1.8)
    }
  }

  // The window: phantom houses across the court, and the dark coming down.
  let houses = ''
  for (let x = 280; x < 500; x += 4.4) houses += `M${n(x)} 20L${n(x + 70)} 160`
  let darkness = ''
  for (let y = 28; y < 66; y += 3.2) {
    const w = 1.6 - (y - 28) / 28
    if (w > 0.25) darkness += gouge(326, y, 482, y + between(r, -0.6, 0.6), w)
  }
  const fogWin = wisps(rng(56), 6, { x0: 300, x1: 480, y0: 36, y1: 90 }, [5, 11])
  const fogLow = wisps(rng(57), 3, { x0: 300, x1: 500, y0: 104, y1: 138 }, [1.6, 3])
  const tankRays = rays(rng(607), 800, 150, { to: 120 })
  const frame: Marks['frame'] = [0, 1, 2].map((k) => [
    721 + k * 4,
    19 + k * 4,
    200 - k * 8,
    223 - k * 4,
  ])

  cached = {
    wall,
    wains,
    floor,
    floorShade,
    pool,
    houses,
    fogWin,
    fogLow,
    tankRays,
    frame,
    darkness,
  }
  return cached
}

/**
 * A figure cut as one black shape with a single paper outline, as Fred is in
 * the counting-house panel: a paper halo under every part, then the parts in
 * ink, so overlapping parts merge. `limbs` are strokes of the given width.
 */
function Carved({
  fills,
  limbs = [],
  halo = 3.4,
}: {
  fills: string[]
  limbs?: [string, number][]
  halo?: number
}) {
  return (
    <>
      <g fill={PAPER} stroke={PAPER} strokeWidth={halo} strokeLinejoin="round">
        {fills.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {limbs.map(([d, w]) => (
        <path
          key={`h${d}`}
          d={d}
          fill="none"
          stroke={PAPER}
          strokeWidth={w + halo}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      <g fill={INK}>
        {fills.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {limbs.map(([d, w]) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={INK}
          strokeWidth={w}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </>
  )
}

/**
 * A portly gentleman facing left, drawn upright in his own frame with his
 * feet at (0, 0), about 214 tall, then bowed from the hips by `bow` degrees:
 * the legs stay put and everything above them turns about (0, -104).
 */
const GENT = {
  head: 'M-4 -214C-14 -214 -20 -209 -21 -202L-21.5 -199C-23.5 -198 -25 -196.5 -25 -195C-25 -193.5 -23.5 -193 -22 -193L-21.5 -190C-22 -188.5 -21.5 -187 -20 -186.5C-20.5 -184.5 -19.5 -182.5 -17 -181.5C-15 -179 -11 -178.5 -7 -179L0 -179C6 -181 9 -187 10 -195C11 -206 5 -214 -4 -214Z',
  /** The lit face, from the hairline round the profile to the jaw. */
  face: 'M-14 -211C-18 -209 -20.5 -206 -21 -202L-21.5 -199C-23.5 -198 -25 -196.5 -25 -195C-25 -193.5 -23.5 -193 -22 -193L-21.5 -190C-22 -188.5 -21.5 -187 -20 -186.5C-20.5 -184.5 -19.5 -182.5 -17 -181.5C-15 -179.5 -11 -179 -7 -179.5C-5 -183 -4 -188 -5 -192C-6 -198 -8 -204 -9 -210Z',
  /** A bald crown, lit as the face is. */
  crown: 'M-14 -211C-9 -214 -1 -214.5 5 -211C8 -208 9 -205 9 -203L-8 -205Z',
  /** Coat and waistcoat as one mass: a deep chest and a great round belly to the front. */
  body: 'M-10 -179C-20 -177 -27 -170 -31 -160C-38 -150 -45 -138 -46 -125C-47 -113 -41 -105 -30 -102C-22 -100 -12 -100 -6 -101L13 -103C19 -110 21 -122 21 -134C21 -150 18 -164 13 -172C8 -178 2 -181 -4 -181Z',
  /** Coat-tails hanging behind, to the back of the knee. */
  tails:
    'M6 -130C13 -131 19 -131 22 -128C25 -108 27 -88 26 -72C21 -69 14 -69 9 -71C9 -92 7 -112 6 -130Z',
  shoeFront: 'M-7 -9L-7 0L-31 0C-32 -4 -28 -7 -21 -8Z',
  shoeBack: 'M13 -8L13 0L-8 0C-9 -4 -5 -7 2 -8Z',
}
const GENT_LEGS: [string, number][] = [
  ['M-12 -104C-13 -72 -14 -40 -15 -8', 17],
  ['M7 -104C7 -72 7 -40 6 -8', 17],
]

/** A top hat standing on its brim, 30 wide and 28 tall, the brim's middle at (0, 0). */
const HAT = {
  crown: 'M-10 -27C-10 -29 10 -29 10 -27L8.4 -1L-8.4 -1Z',
  brim: 'M-15 -1.5C-15 -4.5 -8 -3.5 0 -3.5C8 -3.5 15 -4.5 15 -1.5C15 1.5 8 2.5 0 2.5C-8 2.5 -15 1.5 -15 -1.5Z',
}
function TopHat({ at, rot, size = 1.2 }: { at: [number, number]; rot: number; size?: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${size})`}>
      <Carved fills={[HAT.crown, HAT.brim]} halo={2.8} />
      <path d="M-8.6 -5.5H8.6" stroke={PAPER} strokeWidth={1.8} />
      {/* the sheen on the silk */}
      <path d={gouge(-5.4, -25, -4.6, -9, 0.9) + gouge(4.6, -24, 4.2, -12, 0.6)} fill={PAPER} />
    </g>
  )
}

type Hands = { fills: string[]; limbs: [string, number][] }

function Gentleman({
  at,
  scale,
  bow,
  bald,
  behind,
  held,
  hands,
  cuts,
}: {
  at: [number, number]
  scale: number
  bow: number
  bald: boolean
  behind?: Hands
  /** What he holds, drawn over his body and under his near arm. */
  held?: ReactNode
  hands: Hands
  cuts?: ReactNode
}) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${scale})`}>
      <Carved fills={[GENT.shoeFront, GENT.shoeBack]} limbs={GENT_LEGS} />
      <g transform={`rotate(${-bow} 0 -104)`}>
        {behind && <Carved fills={behind.fills} limbs={behind.limbs} />}
        <Carved fills={[GENT.tails, GENT.body, GENT.head]} />
        {/* the cutaway of the tail-coat, the lapel, the waistcoat and its buttons */}
        <path
          d="M-20 -173C-27 -162 -33 -150 -36 -138C-26 -122 -10 -113 7 -109M-12 -177L-23 -155M-38 -107L-33 -102.5L-28 -105.5"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <g fill={PAPER}>
          {[
            [-39, -140],
            [-41.5, -131],
            [-42, -122],
            [-40, -113],
          ].map(([x, y]) => (
            <circle key={y} cx={x} cy={y} r={1.4} />
          ))}
        </g>
        {/* the shirt collar's points, under the chin */}
        <path d="M-15 -180.5L-19.5 -174L-10 -177Z" fill={PAPER} />
        {/* the lit face: a smiling eye, a round cheek, a pleasant mouth */}
        <path d={GENT.face} fill={PAPER} />
        {bald && <path d={GENT.crown} fill={PAPER} />}
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d="M-19.5 -203.5Q-16 -206 -11.5 -204" strokeWidth={1.8} />
          <path d="M-18.5 -199Q-16.2 -201.2 -13.5 -199.2" strokeWidth={1.3} />
          <path d="M-14.5 -194Q-10 -192 -10.5 -187" strokeWidth={0.9} />
          <path d="M-21.3 -189.2Q-18.5 -187 -15.5 -189" strokeWidth={1.2} />
          <path d="M-16.5 -182.3Q-12 -180.6 -8 -181.8" strokeWidth={0.9} />
          <path d="M-9 -210C-7 -204 -5.5 -198 -5 -192" strokeWidth={1} />
        </g>
        {/* the ear, cut out of the dark side of the head */}
        <path d="M0 -199C-4 -199 -5 -193 -2 -189" fill="none" stroke={PAPER} strokeWidth={1.5} />
        <path
          d={
            bald ? 'M4 -203L7 -193M1 -202L3 -192' : 'M-6 -212C0 -214 6 -211 8 -205M-2 -186L-5 -181'
          }
          fill="none"
          stroke={PAPER}
          strokeWidth={0.9}
        />
        {held}
        <Carved fills={hands.fills} limbs={hands.limbs} />
        {cuts}
      </g>
    </g>
  )
}

/** The first gentleman: hat under his arm, the open list held out, the pen raised. */
const GENT_A_BEHIND: Hands = {
  // the far hand, under the book
  fills: ['M-60 -146C-64 -145 -66 -141 -63 -139C-59 -138 -55 -140 -54 -144Z'],
  limbs: [['M-16 -166C-26 -153 -40 -145 -56 -144', 8]],
}
const GENT_A_HELD = (
  <>
    <TopHat at={[8, -150]} rot={112} />
    {/* the open book: a dark cover, two paper pages ruled with the list */}
    <path d="M-92 -150L-66 -159L-44 -152L-45 -137L-66 -144L-88 -136Z" fill={INK} />
    <path d="M-89 -152L-66 -160L-64 -146L-86 -139Z" fill={PAPER} stroke={INK} strokeWidth={0.9} />
    <path d="M-66 -160L-46 -154L-47 -141L-64 -146Z" fill={PAPER} stroke={INK} strokeWidth={0.9} />
    <path
      d="M-85 -149L-69 -155M-84 -145L-68 -151M-83 -141L-72 -145M-61 -154L-50 -151M-61 -150L-50 -147M-61 -146L-54 -144"
      stroke={INK}
      strokeWidth={0.9}
    />
  </>
)
const GENT_A_HANDS: Hands = {
  // the near hand, over the book with the pen
  fills: ['M-49 -165C-52 -168 -51 -172 -47 -172C-43 -172 -42 -168 -44 -165Z'],
  limbs: [['M2 -166C0 -150 -6 -142 -16 -146C-26 -152 -36 -160 -45 -166', 10]],
}
/** The pen: its nib on the page, its quill standing up past his hand. */
const GENT_A_CUTS = (
  <>
    <path d="M-47 -167L-55 -151" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    <path
      d={ribbon(
        [
          [-46, -171],
          [-43, -179],
          [-39, -186],
          [-34, -193],
        ],
        5.5,
        0.6,
      )}
      fill={PAPER}
    />
  </>
)

/** The second gentleman: his hat hanging from one hand, a roll of papers held to his chest. */
const GENT_B_BEHIND: Hands = {
  fills: [],
  limbs: [['M-14 -166C-22 -158 -30 -152 -36 -150', 8]],
}
const GENT_B_HELD = (
  <>
    <g transform="translate(-34 -152) rotate(28)">
      <rect
        x={-17}
        y={-5}
        width={34}
        height={10}
        rx={1.5}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path d="M-11 -5V5M-4 -5V5M6 -5V5" stroke={INK} strokeWidth={0.8} />
      <ellipse cx={-17} cy={0} rx={2.6} ry={5} fill={PAPER} stroke={INK} strokeWidth={1} />
      <path
        d="M-17.6 -2.2C-15.6 -2.4 -15.4 1.8 -17.4 2"
        fill="none"
        stroke={INK}
        strokeWidth={0.8}
      />
    </g>
    <path
      d="M-39 -147C-42 -150 -41 -154 -37 -154C-33 -154 -32 -150 -34 -147Z"
      fill={INK}
      stroke={PAPER}
      strokeWidth={1.2}
    />
  </>
)
const GENT_B_HANDS: Hands = {
  // the near hand, hanging in front of him, holding the hat by its brim
  fills: ['M-14 -108C-17 -111 -16 -115 -12 -115C-8 -115 -7 -111 -9 -108Z'],
  limbs: [['M2 -166C0 -150 -4 -132 -10 -114', 10]],
}
/** The hat hangs crown down from his hand; turned back against his bow, so it hangs straight. */
const GENT_B_CUTS = <TopHat at={[-11.5, -106]} rot={192} />

function CharityCollectors({ uid }: ArtProps) {
  const m = marks()
  const id = {
    win: `${uid}-win`,
    tank: `${uid}-tank`,
    houses: `${uid}-houses`,
  }
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={326} y={24} width={156} height={126} />
        </clipPath>
        <clipPath id={id.tank}>
          <rect x={736} y={34} width={130} height={206} />
        </clipPath>
        <clipPath id={id.houses}>
          <path d="M326 150V92L344 80L362 92V150ZM440 150V104H452V96H458V104H482V150Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 150], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={159} width={W} height={6} fill={PAPER} />
        <rect x={0} y={169} width={W} height={1.8} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={233} width={W} height={8} fill={PAPER} />
        <rect x={0} y={236} width={W} height={1.4} fill={INK} />
        <rect x={0} y={241} width={W} height={H - 241} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.floorShade} fill={INK} />
        <path d={m.pool} fill={INK} />

        {/* Scrooge's very small fire, at the edge of the room */}
        <rect x={0} y={144} width={120} height={97} fill={PAPER} />
        <rect x={0} y={140} width={124} height={6} fill={INK} />
        <rect x={0} y={136} width={126} height={4} fill={PAPER} />
        <path
          d={
            gouge(104, 152, 104, 236, 1.6) +
            gouge(110, 156, 110, 232, 1) +
            gouge(24, 152, 80, 152, 1.2)
          }
          fill={INK}
        />
        <path d="M14 241V184Q14 168 30 168H74Q90 168 90 184V241Z" fill={INK} />
        <path
          d="M30 216H74M31 222H73M32 228H72M34 216V236M70 216V236"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.5}
        />
        <g fill={RED}>
          <path d="M36 216C36 211 42 209 46 212C49 208 56 209 58 212C62 210 68 212 68 216Z" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.9, delay: 0.3 })}
            d="M47 212C45 206 48 201 50 197C53 202 55 206 53 212Z"
          />
        </g>
        <rect x={0} y={241} width={128} height={8} fill={PAPER} />
        <rect x={0} y={249} width={128} height={2} fill={INK} />

        {/* the coal-box, kept in his own room */}
        <path d="M44 282L80 282L76 312L48 312Z" fill={INK} />
        <path d="M40 283L84 276L84 280L40 287Z" fill={INK} />
        <path
          d={
            gouge(53, 290, 52, 308, 1.1) +
            gouge(62, 290, 62, 309, 1.1) +
            gouge(71, 290, 72, 308, 1.1)
          }
          fill={PAPER}
        />
        <g fill={INK}>
          <circle cx={52} cy={278} r={4.4} />
          <circle cx={61} cy={275.5} r={5} />
          <circle cx={70} cy={276} r={4} />
        </g>

        {/* the window on the court: fog, the dark coming down, and the brazier */}
        <rect x={316} y={14} width={176} height={146} fill={INK} />
        <rect x={326} y={24} width={156} height={126} fill={PAPER} />
        <g clipPath={`url(#${id.win})`}>
          <g clipPath={`url(#${id.houses})`}>
            <path d={m.houses} stroke={INK} strokeWidth={LINE.fine} />
          </g>
          <path
            d="M326 92L344 80L362 92M440 104H452V96H458V104H482"
            fill="none"
            stroke={INK}
            strokeWidth={1.3}
          />
          <path d={m.darkness} fill={INK} />
          <g className="lc-drift">
            <path d={m.fogWin} fill={PAPER} />
          </g>
          <g transform="translate(-38 0)">
            <Brazier />
          </g>
          <g className="lc-drift" style={timing({ delay: 0.3 })}>
            <path d={m.fogLow} fill={PAPER} />
          </g>
        </g>
        <g fill={INK}>
          <rect x={326} y={24} width={156} height={4} />
          <rect x={326} y={146} width={156} height={4} />
          <rect x={326} y={24} width={4} height={126} />
          <rect x={478} y={24} width={4} height={126} />
          <rect x={377} y={24} width={3} height={60} />
          <rect x={428} y={24} width={3} height={60} />
          <rect x={326} y={84} width={156} height={5} />
          <rect x={326} y={54} width={156} height={2.6} />
        </g>
        <rect x={310} y={150} width={188} height={7} fill={PAPER} />
        <rect x={310} y={157} width={188} height={2} fill={INK} />

        {/* the doorway into the Tank, by which the clerk let them in */}
        <rect x={712} y={12} width={160} height={229} fill={PAPER} />
        <g fill="none" stroke={INK} strokeWidth={LINE.fine}>
          {m.frame.map(([x, y, w, h]) => (
            <rect key={x} x={x} y={y} width={w} height={h} />
          ))}
        </g>
        <rect x={734} y={32} width={140} height={209} fill={INK} />
        <g clipPath={`url(#${id.tank})`}>
          <path d={m.tankRays} fill={PAPER} />
          <circle cx={800} cy={150} r={10} fill={INK} />
          <rect x={796} y={157} width={8} height={18} fill={INK} />
          <rect x={798} y={158.5} width={4} height={16} fill={PAPER} />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8 })}
            d="M800 157C796.5 153 797.5 148 800 141C802.5 148 803.5 153 800 157Z"
            fill={RED}
          />
          <path d="M760 176L846 170L846 176L760 182Z" fill={INK} />
          <path d={gouge(760, 176, 846, 170, 1)} fill={PAPER} />
          <path d="M766 180V228M840 176V226" stroke={INK} strokeWidth={3.4} />
        </g>

        {/* Scrooge, his stool and his desk, as in the counting-house panel */}
        <g transform={`translate(${SCROOGE_SHIFT} 0)`}>
          <path
            d="M322 214L316 318M354 214L360 318M318 286H358"
            stroke={INK}
            strokeWidth={4.5}
            fill="none"
            strokeLinecap="round"
          />
          <rect x={312} y={206} width={50} height={8} fill={INK} />
          <path
            d="M346 118C336 126 326 136 323 152C319 172 319 192 322 208C316 222 312 238 313 254L327 254C329 238 333 224 338 214L380 216C390 218 394 222 398 226C400 250 401 272 402 292L401 303L432 304C433 298 428 295 416 293C414 272 415 244 418 216C420 206 414 200 404 199L378 197C381 180 381 162 378 146C375 136 368 128 360 122Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          <path
            d={
              gouge(331, 152, 326, 198, 1.7, 2) +
              gouge(339, 144, 336, 174, 1.1, 1.5) +
              gouge(320, 230, 318, 250, 1.1)
            }
            fill={PAPER}
          />
          {/* his head carved free of the dark wall */}
          <g transform="translate(328 64) scale(0.3)">
            <path d={SCROOGE_HEAD} fill={PAPER} stroke={PAPER} strokeWidth={10} />
            <ScroogeSilhouette outline={0} />
          </g>
          <path d="M358 121L368 119.5L365 128Z" fill={PAPER} />
          {/* the sloping desk, with his ledger shut on it */}
          <path d="M400 184L528 160L528 214L400 226Z" fill={INK} />
          <path
            d={
              gouge(470, 176, 472, 214, 1.2) +
              gouge(430, 186, 432, 220, 1.2) +
              gouge(506, 172, 508, 210, 1.2)
            }
            fill={PAPER}
          />
          <path
            d="M404 226V318M524 214V312M404 292L524 288"
            stroke={INK}
            strokeWidth={5}
            fill="none"
          />
          <path d="M394 178L532 152L534 160L396 186Z" fill={INK} />
          <path d={gouge(396, 178, 532, 152, 1.3)} fill={PAPER} />
          <path d="M430 170L490 159L493 153L433 164Z" fill={PAPER} />
          <path d="M432 168L491 157" stroke={INK} strokeWidth={1.4} />
          {/* the arm held out stiff, handing the credentials back */}
          <path
            d="M354 138C376 138 404 134 440 128"
            stroke={PAPER}
            strokeWidth={12}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M354 138C376 138 404 134 440 128"
            stroke={INK}
            strokeWidth={9}
            fill="none"
            strokeLinecap="round"
          />
          <path d={gouge(376, 136, 408, 132, 1)} fill={PAPER} />
          <path d="M438 123C444 121 449 124 448 129C447 133 442 134 438 133Z" fill={INK} />
          {/* the credentials, a folded paper, held by one corner */}
          <path d="M444 118L468 112L474 136L450 142Z" fill={PAPER} stroke={INK} strokeWidth={1.2} />
          <path
            d="M451 124L466 120M453 130L468 126M455 136L464 134"
            stroke={INK}
            strokeWidth={0.9}
          />
        </g>

        <Gentleman
          at={[528, 312]}
          scale={1.08}
          bow={20}
          bald
          behind={GENT_A_BEHIND}
          held={GENT_A_HELD}
          hands={GENT_A_HANDS}
          cuts={GENT_A_CUTS}
        />
        <Gentleman
          at={[668, 312]}
          scale={1.08}
          bow={12}
          bald={false}
          behind={GENT_B_BEHIND}
          held={GENT_B_HELD}
          hands={GENT_B_HANDS}
          cuts={GENT_B_CUTS}
        />
      </g>
    </>
  )
}

/**
 * The great fire in the brazier, seen through the fog, with the ragged men
 * and a boy round it holding out their hands. Ink figures on the paper fog;
 * the fire is the spot colour.
 */
function Brazier() {
  return (
    <g>
      {/* the street line */}
      <path d="M346 146H542" stroke={INK} strokeWidth={1.4} />
      {/* legs and basket */}
      <path d="M432 146L436 128M454 146L450 128M443 146V130" stroke={INK} strokeWidth={2.2} />
      <path d="M426 110L460 110L454 130L432 130Z" fill={INK} />
      <path d="M432 114H454M433 120H453M434 126H452" stroke={PAPER} strokeWidth={1} />
      <g fill={RED}>
        <path d="M424 112C424 104 432 101 437 105C440 99 448 99 450 105C455 101 463 104 462 112Z" />
        <path className="lc-flicker" d="M431 105C428 98 432 92 434 86C438 93 441 99 437 105Z" />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.7, delay: 0.4 })}
          d="M442 104C440 95 444 88 446 80C450 89 453 97 449 104Z"
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.85, delay: 0.25 })}
          d="M452 106C451 100 454 96 456 91C458 96 460 100 457 106Z"
        />
      </g>
      {/* a man stooping to the blaze, hands out */}
      <path
        d="M404 146L406 128C400 126 398 118 400 110C402 102 406 98 410 96C408 92 409 87 413 86C417 85 420 88 419 93L417 97C421 100 422 106 422 112L418 128L420 146L414 146L412 132L410 146Z"
        fill={INK}
      />
      <path
        d="M416 104L426 110M414 108L425 115"
        stroke={INK}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path d="M409 86L419 85L418 82L411 82Z" fill={INK} />
      {/* a taller man on the far side, and a boy */}
      <path
        d="M478 146L476 124C474 116 474 108 476 102C478 98 481 96 484 95C482 91 483 86 487 85C491 85 493 89 492 93L490 96C494 98 496 104 496 112L494 124L492 146L486 146L485 130L484 146Z"
        fill={INK}
      />
      <path
        d="M477 104L466 110M477 109L465 116"
        stroke={INK}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path d="M484 85L494 84L492 80L486 80Z" fill={INK} />
      <path
        d="M464 146L463 132C461 127 461 122 463 118C464 116 466 115 468 115C466 112 467 108 470 108C473 108 474 111 473 114L472 116C475 118 476 122 476 127L474 132L473 146L469 146L468 136L467 146Z"
        fill={INK}
      />
      <path d="M464 122L459 124" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      {/* ragged hems */}
      <path
        d="M402 128L404 132L407 128L409 133L412 129M476 124L479 129L481 124L484 130L487 125"
        stroke={INK}
        strokeWidth={1.6}
        fill="none"
      />
    </g>
  )
}

export const charityCollectors: LinocutArt = { width: W, height: H, Draw: CharityCollectors }
