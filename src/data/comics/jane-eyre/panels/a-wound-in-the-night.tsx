import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_MASON,
  HOLD_CUTS,
  HOLD_HAND,
  JaneFace,
  LOOSE_HAND,
  MasonFace,
  boot,
  handAt,
  headAt,
  line,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapter 20: "A wound in the night", the tenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The watch, after Rochester has gone for the surgeon and
 * locked Jane in with Mason: "if he feels faint, you will put the glass of
 * water on that stand to his lips ... You will not speak to him on any
 * pretext"; "I had, again and again, held the water to Mason's white lips"
 * (Chapter 20). The aftermath only: the attack is never drawn, and there is
 * no wound, no blood and no basin in the picture; Mason's shirt is clean and
 * whole. Nobody is drawn behind the inner door. THERE IS NO RED IN THIS
 * PLATE: in a picture of a man who has been hurt, any red at all would read
 * as blood, so even the candle is cut in paper.
 *
 * - "An easy-chair was near the bed-head: a man sat in it, dressed with the
 *   exception of his coat; he was still; his head leant back; his eyes were
 *   closed"; "his pale and seemingly lifeless face"; "these eyes now shut, now
 *   opening". So Mason sits in a high-backed easy-chair by the head of the
 *   bed, in his white shirt and dark waistcoat, his head leant back against
 *   the chair, his eye half shut: Mason as ./people.tsx cuts him, his face
 *   pale.
 * - "I must see the light of the unsnuffed candle wane on my employment; the
 *   shadows darken on the wrought, antique tapestry round me, and grow black
 *   under the hangings of the vast old bed, and quiver strangely over the
 *   doors of a great cabinet opposite—whose front, divided into twelve
 *   panels, bore, in grim design, the heads of the twelve apostles, each
 *   enclosed in its separate panel as in a frame". So one candle on a stand
 *   lights the room; the cabinet at the left has twelve framed heads, half
 *   lost in shadow; the walls are hung with tapestry; the bed's hangings are
 *   black at the right. The crucifix the text sets on top of the cabinet is
 *   left out.
 * - "the tapestry was now looped up in one part, and there was a door
 *   apparent, which had then been concealed"; "a murderess hardly separated
 *   from me by a single door". So at the far right the tapestry is looped up
 *   over a small shut door. Nothing is drawn behind it, and the alt text and
 *   the caption say nothing of who is there.
 * - JANE: "Are you up? ... And dressed?"; she sits by him and holds the glass
 *   to his lips, as ./people.tsx cuts her grown: her black frock and white
 *   tucker, her face pale.
 *
 * Seeds: 1001 (the tapestry), 1002 (the floor), 1003 (the candle), 1004 (the
 * bed-hangings).
 */

const W = 860
const H = 340
/** The foot of the wall. */
const FLOOR = 262
/** The candle on its stand, the one light in the room. */
const FLAME: P = [256, 160]
/** The great cabinet opposite, at the left. */
const CAB = { x0: 22, x1: 196, top: 40, base: FLOOR }
/** The vast old bed at the right, its hangings drawn. */
const BED = { x0: 566, x1: 770, top: 18 }
/** The small inner door, at the far right, under the looped-up tapestry. */
const DOOR = { x0: 790, x1: 846, top: 112 }

/** The candle lights the room dimly; its light falls away into the corners. */
const light = (x: number, y: number) =>
  Math.max(clamp(1 - Math.hypot((x - FLAME[0]) * 0.8, (y - FLAME[1]) * 1.05) / 330) ** 1.5, 0.04)

type Marks = {
  wall: string
  floor: string
  rays: string
  hangings: string
  border: string
  heads: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "the wrought, antique tapestry round me": the cuts of the field run in
  // short upright stitches as well as across, so the wall reads as woven.
  const wall =
    gougeField(rng(1001), { x0: CAB.x1 - 4, x1: BED.x0 + 10, y0: 30, y1: FLOOR - 4 }, light, {
      spacing: 7,
      len: [10, 34],
      gap: [6, 16],
      max: 2.8,
    }) +
    gougeField(rng(1005), { x0: BED.x1 - 6, x1: W, y0: 30, y1: DOOR.top - 6 }, () => 0.1, {
      spacing: 8,
      len: [10, 30],
      gap: [8, 20],
      max: 2,
    })
  // A woven border along the top of the hangings: a row of small lozenges.
  let border = ''
  for (let x = 4; x < W; x += 16) {
    const L = light(x, 24)
    if (L < 0.08) continue
    border += `M${x} 24L${x + 6} 18L${x + 12} 24L${x + 6} 30Z`
  }
  // The floor: dark boards, the candle's light along them near the stand.
  const rf = rng(1002)
  let floor = ''
  for (let y = FLOOR + 6; y < H; y += 6 + (y - FLOOR) * 0.1) {
    let x = between(rf, -20, 0)
    while (x < W) {
      const len = between(rf, 30, 90)
      const L = light(x + len / 2, y - 60)
      if (rf() < 0.25 + L) floor += gouge(x, y, x + len, y + between(rf, -0.4, 0.4), 0.4 + L * 2.2)
      x += len + between(rf, 6, 18)
    }
  }
  const candle = rays(rng(1003), FLAME[0], FLAME[1], { from: 14, to: 70, every: 9, width: 1.8 })
  // The hangings of the vast old bed: long folds, black under them.
  const rh = rng(1004)
  let hangings = ''
  for (let x = BED.x0 + 14; x < BED.x1 - 8; x += between(rh, 11, 16)) {
    const L = clamp(0.5 - (x - BED.x0) / 500)
    hangings += wedge(x, BED.top + 30, x + between(rh, -3, 3), FLOOR - 6, 0.5, 0.5 + L * 2.2)
  }
  // The twelve heads in their panels: each a small carved face in profile or
  // full, lit a little more the nearer it is to the candle.
  let heads = ''
  const cols = 4
  const rows = 3
  const pw = (CAB.x1 - CAB.x0 - 20) / cols
  const ph = (FLOOR - 40 - (CAB.top + 22)) / rows
  for (let rI = 0; rI < rows; rI++) {
    for (let c = 0; c < cols; c++) {
      const cx = CAB.x0 + 10 + pw * (c + 0.5)
      const cy = CAB.top + 22 + ph * (rI + 0.5)
      const L = light(cx, cy)
      if (L < 0.06) continue
      const rx = 8.5
      const ry = 11
      heads += `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${rx * 2} 0a${rx} ${ry} 0 1 0 ${-rx * 2} 0Z`
    }
  }
  cached = { wall, floor, rays: candle, hangings, border, heads }
  return cached
}

// ── THE CABINET ─────────────────────────────────────────────────────────────

const CAB_COLS = 4
const CAB_ROWS = 3
/** The panels' frames, and the features of each head cut in ink over its paper. */
function cabinetPanels() {
  const pw = (CAB.x1 - CAB.x0 - 20) / CAB_COLS
  const ph = (FLOOR - 40 - (CAB.top + 22)) / CAB_ROWS
  let frames = ''
  let faces = ''
  for (let rI = 0; rI < CAB_ROWS; rI++) {
    for (let c = 0; c < CAB_COLS; c++) {
      const x = CAB.x0 + 10 + pw * c
      const y = CAB.top + 22 + ph * rI
      frames += `M${x + 3} ${y + 3}H${x + pw - 3}V${y + ph - 3}H${x + 3}Z`
      const cx = x + pw / 2
      const cy = y + ph / 2
      if (light(cx, cy) < 0.06) continue
      // Carved and grave: a heavy brow, deep-set eyes, a long nose and a
      // level mouth; every other head bearded. (Cut first with the mouth
      // curved, and at panel size the twelve read as smiling faces.)
      faces +=
        `M${cx - 5.4} ${cy - 3.6}L${cx - 1.4} ${cy - 3}M${cx + 1.4} ${cy - 3}L${cx + 5.4} ${cy - 3.6}` +
        `M${cx - 3.6} ${cy - 1}h2M${cx + 1.6} ${cy - 1}h2` +
        `M${cx} ${cy - 2.6}V${cy + 3.4}` +
        `M${cx - 2.4} ${cy + 6}H${cx + 2.4}` +
        ((rI + c) % 2
          ? `M${cx - 6.4} ${cy + 3.4}L${cx - 4} ${cy + 10.4}M${cx + 6.4} ${cy + 3.4}L${cx + 4} ${cy + 10.4}`
          : '')
    }
  }
  return { frames, faces }
}
const PANELS = cabinetPanels()

// ── MASON, in the easy-chair ────────────────────────────────────────────────

/** The high-backed easy-chair: its back, its near arm, its seat and legs. */
const CHAIR_BACK = 'M494 108C508 96 540 96 554 108L560 252L490 254L486 156C486 136 488 118 494 108Z'
const CHAIR_ARM =
  'M444 220C444 212 454 208 468 210L508 214L508 232L450 234C446 232 444 226 444 220Z'
const CHAIR_FRONT = 'M450 234H514V262H450Z'
/** His head, leant back against the chair, facing Jane. */
const MASON_T = headAt(-1, [478, 146], 18, 1.04)
/**
 * His white shirt, the coat off, from the neck to the waist, his back against
 * the chair: PAPER, edged in ink; the dark waistcoat over it is MASON_VEST.
 * Its shoulder is set behind the head and neck, against the back of the
 * chair, so his short dark hair reads as hair and not as a fall of it.
 */
const MASON_SHIRT =
  'M484 166C494 162 506 166 512 174L516 208C518 224 516 238 512 248L478 250C474 234 472 210 474 192C474 180 478 170 484 166Z'
/** His dark waistcoat, open at the neck so the shirt shows. */
const MASON_VEST =
  'M484 184C492 180 502 184 508 190L512 220C513 232 511 242 508 248L480 250C477 236 476 218 477 202C478 194 480 188 484 184Z'
/** His near arm, in its shirt-sleeve, down along the arm of the chair. */
const MASON_ARM: P[] = [
  [482, 178],
  [474, 206],
  [458, 214],
]
const MASON: Part[] = [
  // his legs, in dark breeches and stockings: the thighs forward off the seat, the shins down
  { d: 'M500 248L462 250L460 298', w: 11 },
  { d: 'M494 244L470 246L472 296', w: 10 },
  boot([460, 300], -1, 1),
  boot([472, 298], -1, 0.95),
  { d: MASON_SHIRT, paper: true, edge: 1.2 },
  { d: HEAD_MASON, t: MASON_T },
]
/**
 * The back of his neck below his short hair, his ear, and the white
 * neck-handkerchief of a man "dressed with the exception of his coat": in the
 * frame of his head, PAPER edged in ink, laid over the kit's head.
 *
 * FIXED 10 October 2026: the kit cuts the back of a head and neck in ink
 * under the hair, which reads as hair wherever a dark collar or coat runs on
 * below it. Here, with his head leant back and only his white shirt below,
 * the ink ran from his crown down to his shoulder and at panel size he
 * seemed to have hair to his shoulders, as no other picture of him has. The
 * nape and the ear are now cut in paper, so the hair stops short where the
 * kit means it to.
 */
const MASON_NAPE =
  'M-13.6 13.6L-8.2 11.6C-9.8 7 -9.6 2.4 -7.6 -0.6C-5.6 -3.4 -2.4 -4.4 0.4 -2.4L0.2 10.4C-0.6 15.6 -1.4 21 -2.4 26.6L-8.6 25C-9.6 19 -11.6 16 -13.6 13.6Z'
const MASON_EAR = 'M-6 -1.4C-2.4 -3.2 0.4 -0.8 0 3.2C-0.4 6.6 -2.8 8 -5.2 6.8'
const MASON_NECKCLOTH =
  'M-9.4 23.6C-3 22.6 4 23 8.6 25C9.4 28 8.6 31 7 33C2 34 -4 33.6 -9.6 31.6C-10.4 29 -10.2 26 -9.4 23.6Z'
/** His near arm and hand, printed over the arm of the chair. */
const MASON_ARM_PARTS: Part[] = [
  { d: line(MASON_ARM), w: 9, paper: true, edge: 1 },
  ...LOOSE_HAND.map((q) => ({
    ...q,
    t: handAt(MASON_ARM, -1, { parts: LOOSE_HAND, scale: 1, rot: 6 }),
    paper: true,
    edge: 0.9,
  })),
]

// ── JANE, at his side ───────────────────────────────────────────────────────

const J_HEAD = { d: HEAD_JANE, at: [360, 148] as P, rot: 12, scale: 1.04 }
const J_T = headAt(1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale)
/** Her black frock, seated on a low chair, leaning forward: bodice, lap and skirt to the floor. */
const J_FROCK =
  'M350 170C358 166 366 168 372 174L380 202C394 206 408 212 416 222L420 296L326 298C326 270 330 236 336 210C340 194 344 180 350 170Z'
/** Her near arm, out to his lips with the glass. */
const J_REACH: P[] = [
  [364, 180],
  [400, 198],
  [436, 174],
]
const J_GLASS_HAND = { parts: HOLD_HAND, scale: 0.92, rot: 10 }
/** Her far arm, the hand on her knee. */
const J_REST: P[] = [
  [356, 182],
  [362, 206],
  [384, 214],
]
const JANE: Part[] = woman({
  facing: 1,
  neck: [358, 172],
  waist: [356, 202],
  hemY: 298,
  head: J_HEAD,
  skirt: J_FROCK,
  arm: 7.4,
  near: { arm: J_REACH, hand: J_GLASS_HAND },
  far: { arm: J_REST, hand: { parts: LOOSE_HAND, scale: 0.9, rot: 10 } },
})
/**
 * The glass of water, held to his lips: a plain tumbler in its own frame,
 * tipped towards him by GLASS_T so its rim meets his mouth; the water stays
 * level in it (WATER, on the plate).
 */
const GLASS = 'M-7 -10L7 -10L5.6 10L-5.6 10Z'
const GLASS_T = 'translate(450 160) rotate(24)'
const WATER = 'M443.3 160H457.1'
/** Her low chair, behind her. */
const J_CHAIR = 'M316 182L326 182L330 262L334 300H326L322 262H318Z'

function AWoundInTheNight({ uid }: ArtProps) {
  const m = marks()
  const id = { cab: `${uid}-cab`, bed: `${uid}-bed` }
  return (
    <>
      <defs>
        <clipPath id={id.bed}>
          <rect x={BED.x0} y={BED.top} width={BED.x1 - BED.x0} height={FLOOR - BED.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 180], push: 1.03 })}>
        {/* the tapestry round the room, in the light of one candle */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.border} fill="none" stroke={PAPER} strokeWidth={1} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={`M0 ${FLOOR}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={m.floor} fill={PAPER} />

        {/* the great cabinet opposite, the twelve heads in their panels */}
        <rect
          x={CAB.x0}
          y={CAB.top}
          width={CAB.x1 - CAB.x0}
          height={CAB.base - CAB.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${CAB.x0 - 6} ${CAB.top}H${CAB.x1 + 6}V${CAB.top + 10}H${CAB.x0 - 6}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={PANELS.frames} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={m.heads} fill={PAPER} />
        <path d={PANELS.faces} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
        <path
          d={`M${CAB.x0 + 8} ${FLOOR - 30}H${CAB.x1 - 8}`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the stand, and the unsnuffed candle on it */}
        <path d={m.rays} fill={PAPER} />
        <ellipse
          cx={256}
          cy={212}
          rx={24}
          ry={5}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d="M253 216L250 290H262L259 216Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M238 298L250 288H262L274 298Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M244 208L248 202H264L268 208Z" fill={PAPER} stroke={INK} strokeWidth={1} />
        <rect x={251} y={168} width={10} height={34} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d="M256 168V162" stroke={INK} strokeWidth={1.2} />
        <path
          className="lc-flicker"
          style={timing({ dur: 1.2 })}
          d={`M${FLAME[0]} 163C${FLAME[0] - 5} 158 ${FLAME[0] - 4} 151 ${FLAME[0]} 143C${FLAME[0] + 4} 151 ${FLAME[0] + 5} 158 ${FLAME[0]} 163Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.9}
        />

        {/* the vast old bed, its hangings drawn, black beneath */}
        <rect
          x={BED.x0}
          y={BED.top}
          width={BED.x1 - BED.x0}
          height={FLOOR - BED.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g clipPath={`url(#${id.bed})`}>
          <path d={m.hangings} fill={PAPER} />
        </g>
        <path
          d={`M${BED.x0 - 6} ${BED.top}H${BED.x1 + 6}V${BED.top + 16}H${BED.x0 - 6}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <rect
          x={BED.x0 - 8}
          y={BED.top}
          width={12}
          height={H - 30 - BED.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the inner door, the tapestry looped up over it, and shut */}
        <path
          d={`M${DOOR.x0 - 10} ${DOOR.top - 22}C${DOOR.x0 + 8} ${DOOR.top - 4} ${DOOR.x1 - 8} ${DOOR.top - 4} ${DOOR.x1 + 10} ${DOOR.top - 22}L${DOOR.x1 + 10} ${DOOR.top - 34}L${DOOR.x0 - 10} ${DOOR.top - 34}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${DOOR.x0} ${DOOR.top - 20}Q${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top - 6} ${DOOR.x1} ${DOOR.top - 20}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={0.9}
        />
        <rect
          x={DOOR.x0}
          y={DOOR.top}
          width={DOOR.x1 - DOOR.x0}
          height={FLOOR - DOOR.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${DOOR.x0 + 8} ${DOOR.top + 10}h${DOOR.x1 - DOOR.x0 - 16}v56h-${DOOR.x1 - DOOR.x0 - 16}ZM${DOOR.x0 + 8} ${DOOR.top + 78}h${DOOR.x1 - DOOR.x0 - 16}v62h-${DOOR.x1 - DOOR.x0 - 16}Z`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <circle cx={DOOR.x0 + 10} cy={DOOR.top + 74} r={2.2} fill={PAPER} />

        {/* the easy-chair by the bed-head, and Mason in it */}
        <path d={CHAIR_BACK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M502 116C514 108 536 108 548 116"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d="M454 262L452 300M510 262L512 300"
          stroke={INK}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <path d={CHAIR_FRONT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <Figure parts={MASON}>
          <path d={MASON_VEST} fill={INK} />
          <path d="M490 190L494 244M500 198L503 244" stroke={PAPER} strokeWidth={0.8} fill="none" />
          <MasonFace t={MASON_T} eye="half" />
          <g transform={MASON_T} stroke={INK} strokeLinejoin="round" strokeLinecap="round">
            <path d={MASON_NAPE} fill={PAPER} strokeWidth={1.1} />
            <path d={MASON_EAR} fill="none" strokeWidth={1.1} />
            <path d={MASON_NECKCLOTH} fill={PAPER} strokeWidth={1} />
          </g>
        </Figure>
        <path d={CHAIR_ARM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <Figure parts={MASON_ARM_PARTS} halo={1.4} />

        {/* the glass of water at his lips */}
        <path
          d={GLASS}
          transform={GLASS_T}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.1}
          strokeLinejoin="round"
        />
        <path d={WATER} fill="none" stroke={INK} strokeWidth={0.8} />

        {/* Jane, on her low chair at his side, holding the glass to his lips */}
        <path d={J_CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <Figure parts={JANE}>
          <path d={HOLD_CUTS} transform={handAt(J_REACH, 1, J_GLASS_HAND)} fill={INK} />
          <JaneFace t={J_T} />
        </Figure>
      </g>
    </>
  )
}

export const aWoundInTheNight: LinocutArt = { width: W, height: H, Draw: AWoundInTheNight }
