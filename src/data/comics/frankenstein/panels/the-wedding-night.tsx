import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wave,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CreatureHead,
  Figure,
  HEAD_CREATURE,
  HEAD_VICTOR,
  NECKCLOTH,
  OPEN_HAND,
  VICTOR_AGHAST,
  VICTOR_CUTS,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  VICTOR_PUPIL,
  handAt,
  headAt,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 23: "The wedding night", the fourteenth moment in the guide's
 * timeline. Elizabeth's murder is never drawn, nor is she: the panel is the
 * room, the open window and the figure at it, and Victor's horror. Every
 * detail is from the held 1831 text:
 *
 * - "It was eight o'clock when we landed ... and then retired to the inn";
 *   "The moon had reached her summit in the heavens, and was beginning to
 *   descend; the clouds swept across it swifter than the flight of the
 *   vulture, and dimmed her rays, while the lake reflected the scene of the
 *   busy heavens, rendered still busier by the restless waves that were
 *   beginning to rise." So outside the window the moon rides above the lake
 *   with cloud torn across it, the water is broken into waves, and the
 *   mountains beyond are "black outlines".
 * - "The windows of the room had before been darkened, and I felt a kind of
 *   panic on seeing the pale yellow light of the moon illuminate the chamber.
 *   The shutters had been thrown back; and, with a sensation of horror not to
 *   be described, I saw at the open window a figure the most hideous and
 *   abhorred. A grin was on the face of the monster; he seemed to jeer, as
 *   with his fiendish finger he pointed". So the shutters stand open against
 *   the wall, the moonlight falls in across the floor (its yellow is left to
 *   the words), and the Creature's head and shoulders fill the open window,
 *   grinning, one long finger pointing down into the room. What he points at
 *   is outside the picture and is not drawn.
 * - "I rushed towards the window, and drawing a pistol from my bosom". Earlier
 *   that night "my right hand grasped a pistol which was hidden in my bosom".
 *   So Victor, turned to the window and starting towards it, has his hand in
 *   the breast of his coat; the pistol is not drawn and nothing is fired.
 * - "When I recovered, I found myself surrounded by the people of the inn";
 *   "I escaped from them to the room". So the door behind him stands open on
 *   the passage, where a lamp burns: the spot colour, the one warm light.
 *
 * The Creature is the kit's (./people.tsx), with the grin of "The second
 * creation destroyed" cut over the kit's straight black lips: teeth, never
 * red. Victor is the kit's Victor, with the kit's open mouth. Seeds: 1401
 * (the walls), 1402 (the moonlight), 1403 (the sky), 1404 (the lake), 1405
 * (the floor), 1406 (the passage).
 */

const W = 860
const H = 340
/** Where the floor meets the wall. */
const FLOOR = 290
/** The open window. */
const WIN = { x0: 540, x1: 706, y0: 48, y1: 222 }
/** The lake's far shore in the window. */
const SHORE = 150
const MOON: Pt = [668, 82]
/** The open door to the passage, behind Victor. */
const DOOR = { x0: 40, x1: 128, y0: 70, y1: FLOOR }
const LAMP: Pt = [96, 128]

type Marks = {
  wall: string
  wains: string
  shaft: string
  sky: string
  clouds: string
  moonRays: string
  lake: string
  floor: string
  passage: string
  lampRays: string
}

/** The moonlight through the window, falling down to the left across the floor. */
function inMoon(x: number, y: number) {
  if (y < WIN.y0 + 30) return 0
  const t = (y - WIN.y0) / 1
  const shift = t * 0.9
  const x0 = WIN.x0 - shift
  const x1 = WIN.x1 - shift
  if (x < x0 || x > x1) return 0
  const u = (x - x0) / (x1 - x0)
  return clamp(Math.min(u, 1 - u) * 5) * clamp(1 - (y - WIN.y0) / 760)
}

const light = (x: number, y: number) =>
  Math.max(
    0.04,
    0.9 * inMoon(x, y),
    0.3 * clamp(1 - Math.hypot(x - (WIN.x0 + WIN.x1) / 2, y - 140) / 260),
    0.45 * clamp(1 - Math.hypot(x - LAMP[0], (y - LAMP[1]) * 1.1) / 130),
  )

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1401)
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 206 }, light, {
    spacing: 6.2,
    len: [18, 60],
    gap: [6, 18],
  })
  // The wainscot below the dado rail: upright boards, lit where the moon falls.
  let wains = ''
  for (let x = 2; x < W; x += 9) {
    const L = light(x, 250)
    wains += wedge(
      x + between(r, -0.6, 0.6),
      216,
      x + between(r, -0.6, 0.6),
      FLOOR - 4,
      0.4,
      0.6 + L * 3,
    )
  }
  // Long cuts along the moonbeam itself.
  const s = rng(1402)
  let shaft = ''
  for (let k = 0; k < 18; k++) {
    const x0 = WIN.x0 + 8 + ((WIN.x1 - WIN.x0 - 16) * k) / 17
    let t = 40 + between(s, 0, 20)
    while (t < H - WIN.y0) {
      const len = between(s, 20, 60)
      if (s() < 0.55)
        shaft += gouge(
          x0 - t * 0.9,
          WIN.y0 + t,
          x0 - (t + len) * 0.9,
          WIN.y0 + t + len,
          0.7 + (1 - t / 300) * 1,
        )
      t += len + between(s, 10, 36)
    }
  }
  // The night outside: a dark sky paling round the moon, cloud torn across it.
  const c = rng(1403)
  const sky = gougeField(
    c,
    { x0: WIN.x0, x1: WIN.x1, y0: WIN.y0 + 2, y1: SHORE },
    (x, y) => 0.12 + 0.75 * clamp(1 - Math.hypot(x - MOON[0], y - MOON[1]) / 90),
    { spacing: 5, len: [12, 40], gap: [4, 12] },
  )
  let clouds = ''
  for (let i = 0; i < 4; i++) {
    const y = 70 + i * 16 + between(c, -3, 3)
    clouds += ribbon(
      wave(WIN.x0 + between(c, 0, 60), WIN.x1 + 20, y, 3, 70, between(c, 0, 6), 24),
      between(c, 5, 9),
      0.7,
    )
  }
  const moonRays = rays(c, MOON[0], MOON[1], { from: 20, to: 60, every: 9, width: 1.8 })
  // The lake: restless waves, cut white, and the moon's broken path on them.
  const v = rng(1404)
  let lake = ''
  for (let y = SHORE + 8; y < WIN.y1; y += 5) {
    let x = WIN.x0 + between(v, -10, 0)
    while (x < WIN.x1) {
      const len = between(v, 8, 22)
      const near = clamp(1 - Math.abs(x - MOON[0]) / 40)
      if (v() < 0.35 + near * 0.6)
        lake += `M${n(x)} ${n(y + 2)}Q${n(x + len / 2)} ${n(y - 2.6)} ${n(x + len)} ${n(y + 2)}`
      x += len + between(v, 4, 14) * (1 - near * 0.6)
    }
  }
  const floor = gougeField(
    rng(1405),
    { x0: 0, x1: W, y0: FLOOR + 5, y1: H },
    (x, y) => 0.08 + 0.9 * clamp(inMoon(x, y) * 1.5),
    { spacing: 6, len: [18, 60], gap: [6, 20], max: 3.8 },
  )
  const passage = gougeField(
    rng(1406),
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.y0, y1: DOOR.y1 },
    (x, y) => 0.2 + 0.7 * clamp(1 - Math.hypot(x - LAMP[0], (y - LAMP[1]) * 0.9) / 110),
    { spacing: 5, len: [12, 36], gap: [4, 12] },
  )
  const lampRays = rays(rng(1407), LAMP[0], LAMP[1] - 6, {
    from: 12,
    to: 46,
    every: 12,
    width: 1.6,
  })
  cached = { wall, wains, shaft, sky, clouds, moonRays, lake, floor, passage, lampRays }
  return cached
}

/** The black outlines of the mountains beyond the lake. */
const MOUNTAINS = `M${WIN.x0} ${SHORE + 4}L${WIN.x0} 128L560 116L578 124L596 104L614 118L630 110L650 128L672 120L690 132L${WIN.x1} 124L${WIN.x1} ${SHORE + 4}Z`

// ── VICTOR, turned to the window, starting towards it ──────────────────────

const V_HEAD = { d: HEAD_VICTOR, at: [322, 132] as P, rot: 4, scale: 1.34 }
const VICTOR = man({
  facing: 1,
  neck: [310, 166],
  hip: [284, 230],
  head: V_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 31, tails: 46, front: 4, swing: 14 },
  near: {
    // his hand inside the breast of his coat, where the pistol is hidden:
    // the forearm ends at the coat's edge, and no hand is drawn
    arm: [
      [312, 174],
      [314, 206],
      [320, 192],
    ],
    leg: [
      [288, 230],
      [326, 250],
      [340, 288],
    ],
  },
  far: {
    // flung back as he starts forward
    arm: [
      [300, 172],
      [276, 192],
      [250, 190],
    ],
    leg: [
      [280, 232],
      [254, 258],
      [224, 284],
    ],
    hand: { parts: OPEN_HAND, scale: 1 },
  },
})
const VICTOR_COAT_CUTS =
  gouge(318, 178, 300, 224, 0.9, 0.6) +
  gouge(314, 186, 326, 194, 1, 0.8) +
  [206, 216].map((y) => `M${n(311 - (y - 206) * 0.4)} ${y}a1.3 1.3 0 1 0 0.1 0Z`).join('')

// ── THE CREATURE, at the open window ───────────────────────────────────────

const C_HEAD = { d: HEAD_CREATURE, at: [606, 120] as P, rot: -14, scale: 1.72 }
/** His shoulders in the cloak, and the arm he leans in over the sill. */
const C_SHOULDERS =
  'M556 226C556 198 568 178 592 170C610 166 632 168 648 178C664 190 672 206 674 226Z'
const C_ARM: P[] = [
  [578, 184],
  [556, 206],
  [533, 225],
]
/**
 * His pointing hand: a fist with the forefinger out long, down and into the
 * room. The knuckles are cut apart, and the finger is drawn long and clear of
 * them, so the hand reads as pointing and as nothing else. In the frame of
 * the kit's hands (the wrist at 0, 0, the hand along +x). The thumb lies
 * closed along the fist: it first stood up off it, and at panel size a
 * raised thumb over a straight forefinger read as a hand made into a gun,
 * in the scene where Victor draws his pistol.
 */
const POINT_HAND: Part[] = [
  { d: 'M-0.8 -4.6C4 -6.2 9 -6.4 11.6 -4.4C13 -2.6 13 2.6 11.4 4.6C8 6.2 3 5.8 -0.8 4.4Z' },
  { d: 'M10.4 -2.6L25 -2.8', w: 2.6 },
  { d: 'M3 -4.4L9.8 -5', w: 2.2 },
]
const POINT_CUTS = gouge(4.6, 0.6, 11.4, 0.4, 0.5) + gouge(4.6, 3.2, 10.6, 3, 0.45)
const GRIN_MASK = 'M9.2 8.6L18.4 8.4L18.4 14.2L9.2 14.4Z'
const GRIN_MOUTH = 'M9.4 10.4Q13.6 12.8 18.2 9.2L18 13.8Q13.4 16.6 9.6 12.4Z'
const GRIN_TEETH = 'M10.6 10.9Q13.8 12.9 17.2 10.3L17.1 12.6Q13.6 14.8 10.8 12Z'
const GRIN_LINES = 'M12.2 11.8L12.1 13.2M14.2 12.2L14.2 13.8M16 11.6L16 13.2M8.6 9L7.4 12.6'

function TheWeddingNight({ uid }: ArtProps) {
  const m = marks()
  const vt = headAt(1, V_HEAD.at, V_HEAD.rot, V_HEAD.scale)
  const ct = headAt(-1, C_HEAD.at, C_HEAD.rot, C_HEAD.scale)
  const ht = handAt(C_ARM, -1, { parts: POINT_HAND, scale: 1.25 })
  const win = `${uid}-win`
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
        <clipPath id={door}>
          <rect x={DOOR.x0} y={DOOR.y0} width={DOOR.x1 - DOOR.x0} height={DOOR.y1 - DOOR.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [460, 180], push: 1.03 })}>
        {/* the room: plastered wall above, wainscot below, lit by the moon */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={206} width={W} height={10} fill={INK} />
        <path d={`M0 207H${W}M0 215H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={m.wains} fill={PAPER} />
        <g className="lc-fade-in" style={timing({ delay: 0.4, dur: 1.4 })}>
          <path d={m.shaft} fill={PAPER} />
        </g>

        {/* the open door behind Victor, and the lamp in the passage */}
        <rect
          x={DOOR.x0}
          y={DOOR.y0}
          width={DOOR.x1 - DOOR.x0}
          height={DOOR.y1 - DOOR.y0}
          fill={INK}
        />
        <g clipPath={`url(#${door})`}>
          <path d={m.passage} fill={PAPER} />
          <path d={m.lampRays} fill={PAPER} />
        </g>
        <path
          d={`M${LAMP[0] - 12} ${LAMP[1] + 16}H${LAMP[0] + 12}L${LAMP[0] + 6} ${LAMP[1] + 4}H${LAMP[0] - 6}Z`}
          fill={INK}
        />
        <path d={`M${LAMP[0]} ${LAMP[1] + 16}V${LAMP[1] + 40}`} stroke={INK} strokeWidth={3} />
        <path
          className="lc-flicker"
          d={`M${LAMP[0]} ${LAMP[1] + 4}C${LAMP[0] - 5} ${LAMP[1] - 2} ${LAMP[0] - 3} ${LAMP[1] - 9} ${LAMP[0]} ${LAMP[1] - 16}C${LAMP[0] + 3} ${LAMP[1] - 9} ${LAMP[0] + 5} ${LAMP[1] - 2} ${LAMP[0]} ${LAMP[1] + 4}Z`}
          fill={RED}
        />
        <path
          d={`M${DOOR.x0 - 10} ${DOOR.y1}V${DOOR.y0 - 10}H${DOOR.x1 + 10}V${DOOR.y1}H${DOOR.x1}V${DOOR.y0}H${DOOR.x0}V${DOOR.y1}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the door leaf, swung back against the wall */}
        <path
          d={`M${DOOR.x1 + 12} ${DOOR.y0 - 6}L${DOOR.x1 + 44} ${DOOR.y0 + 6}L${DOOR.x1 + 44} ${DOOR.y1 - 4}L${DOOR.x1 + 12} ${DOOR.y1}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${DOOR.x1 + 18} ${DOOR.y0 + 12}L${DOOR.x1 + 38} ${DOOR.y0 + 18}V${DOOR.y0 + 100}L${DOOR.x1 + 18} ${DOOR.y0 + 96}ZM${DOOR.x1 + 18} ${DOOR.y0 + 116}L${DOOR.x1 + 38} ${DOOR.y0 + 120}V${DOOR.y1 - 16}L${DOOR.x1 + 18} ${DOOR.y1 - 14}Z`}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />

        {/* the open window on the lake, the shutters thrown back */}
        <rect
          x={WIN.x0 - 10}
          y={WIN.y0 - 10}
          width={WIN.x1 - WIN.x0 + 20}
          height={WIN.y1 - WIN.y0 + 20}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g clipPath={`url(#${win})`}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} fill={INK} />
          <path d={m.sky} fill={PAPER} />
          <path d={m.moonRays} fill={PAPER} />
          <circle cx={MOON[0]} cy={MOON[1]} r={18} fill={INK} />
          <circle cx={MOON[0]} cy={MOON[1]} r={14.5} fill={PAPER} />
          <path
            d={arcDashes(rng(1408), MOON[0] - 3, MOON[1] - 4, 5, deg(0), deg(360), [3, 5], [2, 4])}
            fill="none"
            stroke={INK}
            strokeWidth={0.9}
          />
          <g className="lc-drift-r">
            <path d={m.clouds} fill={INK} />
          </g>
          <path
            d={MOUNTAINS}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.fine}
            strokeLinejoin="round"
          />
          <path d={m.lake} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />

          {/* the Creature at the open window, grinning */}
          <path d={C_SHOULDERS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path
            d={gouge(604, 176, 616, 222, 1, -1.4) + gouge(636, 180, 650, 222, 0.9, -1)}
            fill={PAPER}
          />
          <CreatureHead t={ct} />
          <g transform={ct}>
            <path d={GRIN_MASK} fill={PAPER} />
            <path d={GRIN_MOUTH} fill={INK} />
            <path d={GRIN_TEETH} fill={PAPER} />
            <path d={GRIN_LINES} fill="none" stroke={INK} strokeWidth={0.6} strokeLinecap="round" />
          </g>
        </g>
        {/* the sill, and the shutters folded back against the wall */}
        <path
          d={`M${WIN.x0 - 16} ${WIN.y1 + 4}H${WIN.x1 + 16}V${WIN.y1 + 14}H${WIN.x0 - 16}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {[
          [WIN.x0 - 60, WIN.x0 - 14],
          [WIN.x1 + 14, WIN.x1 + 60],
        ].map(([a, b]) => (
          <g key={a}>
            <rect
              x={a}
              y={WIN.y0 - 8}
              width={b - a}
              height={WIN.y1 - WIN.y0 + 16}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
            />
            <path
              d={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                .map((i) => gouge(a + 6, WIN.y0 + 4 + i * 11.4, b - 6, WIN.y0 + 8 + i * 11.4, 0.8))
                .join('')}
              fill={PAPER}
            />
          </g>
        ))}
        {/* his arm in over the sill, and the pointing finger */}
        <Figure
          parts={[
            { d: `M${C_ARM.map((p) => p.join(' ')).join('L')}`, w: 12, sep: 1.4 },
            ...POINT_HAND.map((q) => ({ ...q, t: ht })),
          ]}
          halo={2}
        >
          <path d={POINT_CUTS} transform={ht} fill={PAPER} />
        </Figure>

        {/* the floor, and the moonlight on it */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={`M0 ${FLOOR + 1}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.floor} fill={PAPER} />

        {/* Victor */}
        <Figure parts={VICTOR} cuts={VICTOR_COAT_CUTS}>
          <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS} transform={vt} fill={PAPER} />
          <path d={VICTOR_PUPIL + VICTOR_AGHAST} transform={vt} fill={INK} />
          <path d={NECKCLOTH} transform={vt} fill={PAPER} />
        </Figure>
      </g>
    </>
  )
}

export const theWeddingNight: LinocutArt = { width: W, height: H, Draw: TheWeddingNight }
