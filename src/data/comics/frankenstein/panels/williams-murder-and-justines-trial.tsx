import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GOLD_HAIR,
  GOLD_HAIR_STRANDS,
  HEAD_VICTOR,
  HEAD_WOMAN,
  JUSTINE_HAIR,
  JUSTINE_HAIR_CUTS,
  NECKCLOTH,
  OPEN_HAND,
  TEAR,
  VICTOR_CUTS,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  WOMAN_CUTS,
  WOMAN_WEEPING_CUTS,
  gown,
  handAt,
  headAt,
  line,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapters 7 and 8: "William's murder and Justine's trial", the sixth moment
 * in the guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/frankenstein.ts).
 *
 * THE MOMENT DRAWN. The moment runs from William's death to Justine's. William
 * is a child and is never drawn; nor is the scaffold. The panel takes the
 * scene the guide's quotation comes from, Justine in her cell on the eve of
 * her death, where an innocent woman is condemned and the one man who could
 * speak for her says nothing.
 *
 * - "We entered the gloomy prison-chamber, and beheld Justine sitting on some
 *   straw at the farther end; her hands were manacled, and her head rested on
 *   her knees. She rose on seeing us enter; and when we were left alone with
 *   her, she threw herself at the feet of Elizabeth, weeping bitterly. My
 *   cousin wept also." "Rise, my poor girl," said Elizabeth. So the cell is
 *   stone, its door is shut behind them, the straw lies at the far end, and
 *   Justine kneels at Elizabeth's feet with her manacled hands held out, a
 *   short chain between the irons, while Elizabeth, weeping too, bends to
 *   raise her by the hands (low, at her waist: see LIZ_NEAR_ARM).
 * - "She was dressed in mourning" (at her trial, Chapter 8). So Justine's
 *   gown is black. Elizabeth's "hair was the brightest living gold" (Chapter
 *   1): GOLD_HAIR, from ./people.tsx, as every panel draws her.
 * - "During this conversation I had retired to a corner of the prison-room,
 *   where I could conceal the horrid anguish that possessed me ... I gnashed
 *   my teeth". So Victor stands apart in the far corner, turned to the wall,
 *   his hand over his eyes.
 * - "who on the morrow was to pass the awful boundary between life and
 *   death": her last evening, so the sky in the one high window is printed in
 *   the spot colour, and its light falls on the two women. The window and the
 *   beam of light are the picture's own; the text does not describe the cell
 *   beyond "gloomy".
 *
 * The people are cut from ./people.tsx. Seeds: 601 (the wall), 602 (its
 * joints), 603 and 604 (the side walls), 605 (the floor), 606 (the straw),
 * 607 (the light from the window).
 */

const W = 860
const H = 340
/** The foot of the back wall, and the two corners of the cell. */
const FLOOR = 252
const LC = 92
const RC = 752
/** The one high window, barred. */
const WIN = { x: 452, y: 34, w: 46, h: 58 }

/** The shaft of light from the window, falling to the floor where the women are. */
function shaft(x: number, y: number) {
  if (y < WIN.y + WIN.h) return 0
  const t = clamp((y - (WIN.y + WIN.h)) / (330 - WIN.y - WIN.h))
  const cx = 470 - 60 * t
  const hw = 36 + 130 * t
  return clamp((1 - Math.abs(x - cx) / hw) * 1.8) ** 0.6 * (1 - 0.2 * t)
}
const glow = (x: number, y: number) =>
  clamp(1 - Math.hypot((x - 440) * 0.85, (y - 170) * 1.25) / 250)

type Marks = {
  wall: string
  joints: string
  jointsLit: string
  left: string
  right: string
  floor: string
  straw: string
  beam: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wallLight = (x: number, y: number) => 0.06 + 1.1 * glow(x, y) ** 1.2 + 0.5 * shaft(x, y)
  const wall = gougeField(rng(601), { x0: LC, x1: RC, y0: 2, y1: FLOOR }, wallLight, {
    spacing: 7,
    len: [18, 48],
    gap: [5, 14],
    max: 3.6,
  })
  // Courses of dressed stone, a joint every 21 units and the upright joints
  // staggered: cut white where the wall is dark, left in ink where it is lit.
  const r = rng(602)
  let joints = ''
  let jointsLit = ''
  const seg = (x1: number, y1: number, x2: number, y2: number, w: number) => {
    const lit = wallLight((x1 + x2) / 2, (y1 + y2) / 2) > 0.5
    if (lit) jointsLit += wedge(x1, y1, x2, y2, w + 0.4, w + 0.4)
    else if (r() < 0.42) joints += gouge(x1, y1, x2, y2, w * 0.5)
  }
  for (let y = 21; y < FLOOR; y += 21) {
    let x = LC
    while (x < RC) {
      const len = between(r, 24, 60)
      seg(x, y + between(r, -0.8, 0.8), Math.min(RC, x + len), y + between(r, -0.8, 0.8), 1.4)
      x += len + between(r, 3, 9)
    }
    x = LC + between(r, 4, 40)
    while (x < RC - 6) {
      seg(x, y - 19, x + between(r, -1, 1), y - 2, 1.3)
      x += between(r, 38, 62)
    }
  }
  const left = gougeField(
    rng(603),
    { x0: 0, x1: LC, y0: 2, y1: 300 },
    (x) => 0.03 + 0.12 * (x / LC),
    { spacing: 7.4, len: [8, 24], gap: [8, 20], max: 1.6 },
  )
  const right = gougeField(
    rng(604),
    { x0: RC, x1: W, y0: 2, y1: 300 },
    (x, y) => 0.04 + 0.8 * clamp(1 - Math.hypot((x - 800) * 1.1, y - 150) / 130),
    { spacing: 6.4, len: [10, 30], gap: [6, 16], max: 2.4 },
  )
  const floor = gougeField(
    rng(605),
    { x0: 0, x1: W, y0: FLOOR + 3, y1: H },
    (x, y) => 0.04 + 0.95 * shaft(x, y) + 0.2 * glow(x, y - 180),
    { spacing: 6, len: [24, 80], gap: [4, 16], max: 3.8 },
  )
  // "sitting on some straw at the farther end": a heap along the back wall,
  // and loose strands where she has thrown herself down.
  const s = rng(606)
  let straw = ''
  for (let i = 0; i < 150; i++) {
    const heap = i < 110
    const x = heap ? between(s, 480, 690) : between(s, 380, 560)
    const y = heap
      ? FLOOR - 16 + between(s, 0, 30) - 10 * Math.sin(((x - 480) / 210) * Math.PI)
      : between(s, 292, 318)
    const a = between(s, -0.5, 0.5) + (s() < 0.3 ? between(s, -1.2, 1.2) : 0)
    const len = between(s, 8, 20)
    straw += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, between(s, 0.6, 1.1))
  }
  // The light falling from the window: long cuts radiating down and to the
  // left, wider as they spread, so the women stand dark against it.
  const b = rng(607)
  let beam = ''
  for (let a = 99; a < 128; a += 1.5) {
    const ang = (a + between(b, -0.5, 0.5)) * (Math.PI / 180)
    let rad = between(b, 44, 64)
    while (rad < 250) {
      const len = between(b, 14, 34)
      const w = 0.5 + (rad / 250) * 2.6 * between(b, 0.7, 1.1)
      beam += gouge(
        475 + Math.cos(ang) * rad,
        66 + Math.sin(ang) * rad,
        475 + Math.cos(ang) * (rad + len),
        66 + Math.sin(ang) * (rad + len),
        w,
      )
      rad += len + between(b, 2, 7)
    }
  }
  cached = { wall, joints, jointsLit, left, right, floor, straw, beam }
  return cached
}

/** The splayed opening in the thick wall, larger than the window it holds. */
const EO = { x0: WIN.x - 20, x1: WIN.x + WIN.w + 20, y0: WIN.y - 14, y1: WIN.y + WIN.h + 18 }
const EMBRASURE = `M${EO.x0} ${EO.y0}H${EO.x1}V${EO.y1}H${EO.x0}Z`
/** Hatching on the two shaded sides of the splay. */
const SPLAY_SHADE = (() => {
  let d = ''
  for (let k = 0; k < 5; k++) {
    const t = k / 5
    const xl = EO.x0 + 3 + t * 16
    const xr = EO.x1 - 3 - t * 16
    const top = EO.y0 + 3 + t * 13
    const bot = EO.y1 - 3 - t * 16
    d += wedge(xl, top, xl, bot, 2.2 - t * 0.5, 2.2 - t * 0.5)
    d += wedge(xr, top, xr, bot, 2.4 - t * 0.5, 2.4 - t * 0.5)
  }
  return d
})()

// ── The door they came in by, in the left wall ──────────────────────────────
const DOOR = 'M26 98L74 112L74 262L26 283Z'
const DOOR_FRAME = 'M20 90L80 107L80 265L20 290Z'
const DOOR_STRAPS = 'M26 142L74 151M26 236L74 238'
const DOOR_GRILLE = 'M40 130L60 136L60 162L40 158Z'

// ── Elizabeth, bending to raise her ─────────────────────────────────────────
const LIZ_HEAD = { d: HEAD_WOMAN, at: [394, 146] as P, rot: 24, scale: 1.12 }
const LIZ_T = headAt(1, LIZ_HEAD.at, LIZ_HEAD.rot, LIZ_HEAD.scale)
const LIZ_NECK: P = [385, 171]
const LIZ_WAIST: P = [374, 204]
/**
 * Her arms reach down to Justine's clasped hands, one hand under them and one
 * over. WHY (27 September 2026): her hands first met Justine's at the height
 * of Justine's chin, and at panel size two open hands at a kneeling woman's
 * throat read as a hand on the neck, in a novel whose murders are by the
 * throat. So the hands meet low, at Justine's waist, well clear of her face.
 */
const LIZ_NEAR_ARM: P[] = [
  [388, 180],
  [398, 214],
  [414, 240],
]
const LIZ_FAR_ARM: P[] = [
  [380, 178],
  [396, 206],
  [416, 228],
]
const LIZ_HAND = { parts: OPEN_HAND, scale: 0.8 }
const ELIZABETH: Part[] = [
  { d: line(LIZ_FAR_ARM), w: 6.5 },
  ...OPEN_HAND.map((q) => ({ ...q, t: handAt(LIZ_FAR_ARM, 1, LIZ_HAND) })),
  { d: gown(LIZ_NECK, LIZ_WAIST, 306, 1, { front: 20, back: 38 }) },
  { d: HEAD_WOMAN, t: LIZ_T },
  { d: line(LIZ_NEAR_ARM), w: 6.5, sep: 1.4 },
  ...OPEN_HAND.map((q) => ({ ...q, t: handAt(LIZ_NEAR_ARM, 1, LIZ_HAND) })),
]

// ── Justine, on her knees in the straw, her hands manacled ─────────────────
const JUS_HEAD = { d: HEAD_WOMAN, at: [458, 192] as P, rot: 16, scale: 1.08 }
const JUS_T = headAt(-1, JUS_HEAD.at, JUS_HEAD.rot, JUS_HEAD.scale)
const JUS_NECK: P = [467, 215]
const JUS_WAIST: P = [474, 244]
const JUS_NEAR_ARM: P[] = [
  [463, 224],
  [454, 252],
  [439, 246],
]
const JUS_FAR_ARM: P[] = [
  [470, 222],
  [462, 250],
  [445, 244],
]
/** Her bodice, and her skirt spread over her knees and heels on the floor. */
const JUS_BODICE = 'M459 219Q461 212 468 212Q476 213 479 219L484 246L464 246Z'
const JUS_KNEEL =
  'M464 244C454 258 444 278 440 296L438 307L516 308C515 296 508 282 498 272C492 262 488 254 485 244Z'
const JUSTINE: Part[] = [
  { d: line(JUS_FAR_ARM), w: 6.5 },
  { d: line([JUS_NECK, JUS_WAIST]), w: 12 },
  { d: JUS_BODICE },
  { d: JUS_KNEEL },
  { d: HEAD_WOMAN, t: JUS_T },
  { d: JUSTINE_HAIR, t: JUS_T },
  { d: line(JUS_NEAR_ARM), w: 6.5, sep: 1.4 },
]
/** Her two hands pressed together, held out to Elizabeth at her waist. */
const CLASPED =
  'M440 238.6C433 235.4 425 232 419.4 231.4C416.6 232.4 417.2 236 420.4 238.4C426.4 242.6 433 246.4 440 249.4Z'
const CLASPED_CUTS = 'M438.4 243.8L420.6 234.6'
/**
 * "her hands were manacled": an iron band on each wrist, cut in paper and
 * edged in ink, and the short chain between them hanging in a loop.
 */
const CUFFS =
  'M436.4 237.6L441.6 237.2L442.2 250.6L437 251.2ZM442.6 236.8L447.8 236.2L448.6 249.4L443.4 250Z'
const CHAIN: [number, number, number][] = [
  [439.4, 256, 0.5],
  [444.2, 259.4, 0],
  [448.6, 255.6, -0.5],
]

// ── Victor, turned into the corner ──────────────────────────────────────────
const VIC_HEAD = { d: HEAD_VICTOR, at: [792, 132] as P, rot: 20, scale: 1.3 }
const VIC_T = headAt(1, VIC_HEAD.at, VIC_HEAD.rot, VIC_HEAD.scale)
const VIC_FACE_ARM: P[] = [
  [792, 172],
  [820, 194],
  [819, 152],
]
const VIC_HANG_ARM: P[] = [
  [780, 170],
  [772, 204],
  [770, 236],
]
const VICTOR: Part[] = man({
  facing: 1,
  neck: [786, 162],
  hip: [781, 240],
  head: VIC_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 34, tails: 58, swing: 2 },
  arm: 9.5,
  leg: 10.5,
  near: {
    arm: VIC_FACE_ARM,
    leg: [
      [784, 240],
      [792, 286],
      [794, 330],
    ],
    hand: { parts: OPEN_HAND, rot: -24, scale: 1.12 },
  },
  far: {
    arm: VIC_HANG_ARM,
    leg: [
      [778, 240],
      [768, 286],
      [760, 328],
    ],
    hand: { parts: OPEN_HAND, scale: 0.9 },
  },
})

function PrisonChamber({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-back`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={LC} y={0} width={RC - LC} height={FLOOR} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
        {/* the back wall of dressed stone, lit only round the window */}
        <path d={m.wall} fill={PAPER} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.joints} fill={PAPER} />
          <path d={m.jointsLit} fill={INK} />
        </g>
        {/* the side walls, darker, running towards us */}
        <path d={`M0 0H${LC}V${FLOOR}L0 300Z`} fill={INK} />
        <path d={m.left} fill={PAPER} />
        <path d={`M${RC} 0H${W}V300L${RC} ${FLOOR}Z`} fill={INK} />
        <path d={m.right} fill={PAPER} />
        <path
          d={`M${LC} 0V${FLOOR}M${RC} 0V${FLOOR}`}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          fill="none"
        />

        {/* the floor of flags, and the pool of light on it */}
        <path d={`M0 300L${LC} ${FLOOR}H${RC}L${W} 300V${H}H0Z`} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path
          d={`M0 300L${LC} ${FLOOR}H${RC}L${W} 300`}
          stroke={PAPER}
          strokeWidth={LINE.bold}
          fill="none"
        />

        {/* the heavy door, shut behind them */}
        <path d={DOOR_FRAME} fill={PAPER} />
        <path d={DOOR} fill={INK} />
        <path d={DOOR_STRAPS} stroke={PAPER} strokeWidth={3} fill="none" />
        <path d={DOOR_GRILLE} fill="none" stroke={PAPER} strokeWidth={1.6} />
        <path d="M46 132V160M53 134V161M40 146L60 150" stroke={PAPER} strokeWidth={1.2} />
        <g fill={PAPER}>
          {[
            [32, 144],
            [44, 147.5],
            [56, 150.5],
            [68, 153],
            [32, 238],
            [44, 238.5],
            [56, 239],
            [68, 239.5],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={1.5} />
          ))}
        </g>
        <path d="M66 196C70 194 72 198 70 202" stroke={PAPER} strokeWidth={2} fill="none" />

        {/* the window, high and barred, with the evening in it */}
        {/* the deep splay of the wall round it: sill and head lit, the sides in shade */}
        <path d={EMBRASURE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={SPLAY_SHADE} fill={INK} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={RED} />
        <path
          d={`M${WIN.x + 11.5} ${WIN.y}V${WIN.y + WIN.h}M${WIN.x + 23} ${WIN.y}V${WIN.y + WIN.h}M${WIN.x + 34.5} ${WIN.y}V${WIN.y + WIN.h}M${WIN.x} ${WIN.y + 28}H${WIN.x + WIN.w}`}
          stroke={INK}
          strokeWidth={4}
        />
        <rect
          x={WIN.x}
          y={WIN.y}
          width={WIN.w}
          height={WIN.h}
          fill="none"
          stroke={INK}
          strokeWidth={3}
        />

        {/* the light from the window, falling across the cell */}
        <path d={m.beam} fill={PAPER} />

        {/* the straw */}
        <path d={m.straw} fill={PAPER} />

        {/* Justine, in mourning, her hands manacled, looking up to Elizabeth */}
        <Figure parts={JUSTINE}>
          <path d={JUSTINE_HAIR_CUTS + WOMAN_CUTS + TEAR} transform={JUS_T} fill={PAPER} />
          <path
            d={gouge(488, 262, 500, 300, 1, -1.4) + gouge(476, 270, 482, 302, 0.9, -0.6)}
            fill={PAPER}
          />
        </Figure>
        <Figure parts={[{ d: CLASPED }]}>
          <path d={CLASPED_CUTS} stroke={PAPER} strokeWidth={1.1} />
        </Figure>
        <path d={CUFFS} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <g fill="none" stroke={INK} strokeWidth={3.4}>
          {CHAIN.map(([x, y, a]) => (
            <ellipse
              key={x}
              cx={x}
              cy={y}
              rx={3.2}
              ry={2.2}
              transform={`rotate(${a * 60} ${x} ${y})`}
            />
          ))}
        </g>
        <g fill="none" stroke={PAPER} strokeWidth={1.3}>
          {CHAIN.map(([x, y, a]) => (
            <ellipse
              key={x}
              cx={x}
              cy={y}
              rx={3.2}
              ry={2.2}
              transform={`rotate(${a * 60} ${x} ${y})`}
            />
          ))}
        </g>

        {/* Elizabeth, her golden hair loose, bending to raise her */}
        <Figure parts={ELIZABETH}>
          <path
            d={gouge(372, 214, 356, 300, 1, 1.6) + gouge(384, 216, 380, 302, 0.9, 0.6)}
            fill={PAPER}
          />
        </Figure>
        <g transform={LIZ_T}>
          <path
            d={GOLD_HAIR}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
            strokeLinejoin="round"
          />
          <path d={GOLD_HAIR_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={WOMAN_WEEPING_CUTS + TEAR} fill={PAPER} />
        </g>

        {/* Victor in the corner, his hand over his eyes, the other against the wall */}
        <Figure parts={VICTOR}>
          <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS} transform={VIC_T} fill={PAPER} />
          <path d={NECKCLOTH} transform={VIC_T} fill={PAPER} />
          <path
            d={gouge(778, 178, 774, 236, 1, 1) + gouge(774, 250, 762, 296, 1, 0.8)}
            fill={PAPER}
          />
        </Figure>
        <Figure
          parts={OPEN_HAND.map((q) => ({
            ...q,
            t: handAt(VIC_FACE_ARM, 1, { parts: OPEN_HAND, rot: -24, scale: 1.12 }),
          }))}
        />
      </g>
    </>
  )
}

export const williamsMurderAndJustinesTrial: LinocutArt = {
  width: W,
  height: H,
  Draw: PrisonChamber,
}
