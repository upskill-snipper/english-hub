import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_ST_JOHN,
  HOLD_CUTS,
  HOLD_HAND,
  JaneFace,
  StJohnFace,
  handAt,
  headAt,
  man,
  woman,
  type P,
} from './people'

/**
 * Chapter 35: "The voice", the twentieth moment in the guide's timeline.
 * Every detail is from the held edition (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The moment the voice comes: "All the house was still;
 * for I believe all, except St. John and myself, were now retired to rest.
 * The one candle was dying out: the room was full of moonlight. My heart
 * beat fast and thick: I heard its throb. Suddenly it stood still". So Jane
 * has started from St John into the moonlight, her face turned up to the
 * window, her hand pressed to her breast; St John stands behind her, his
 * head bowed as it was in prayer, one hand held loosely out towards her. The
 * voice itself is not drawn: nothing in the picture stands for it but her
 * face.
 *
 * - "the May moon shining in through the uncurtained window, and rendering
 *   almost unnecessary the light of the candle on the table"; "as he sat
 *   there, bending over the great old Bible". So the moon shines in at the
 *   window and lies across the floor, and the great old Bible lies open on
 *   the table by the dying candle, whose small flame is the spot colour, far
 *   from both faces.
 * - The parlour of Moor House, its old portraits on the walls and its
 *   cupboard with glass doors (Chapter 29).
 * - Jane and St John as the figure kit cuts them (./people.tsx).
 *
 * Seeds: 2001 to 2005.
 */

const W = 860
const H = 340
/** The foot of the wall. */
const FLOOR = 258
/** The uncurtained window, and the May moon in it. */
const WIN = { x0: 70, x1: 206, top: 86, bot: 224 }
const MOON: P = [118, 122]
/** The dying candle on the table, and the great old Bible beside it. */
const CANDLE: P = [690, 196]

/** The band of moonlight from the window across the floor, to where she stands. */
const BEAM = `M${WIN.x0 + 6} ${WIN.bot}L${WIN.x1 - 6} ${WIN.bot}L520 ${H + 4}L196 ${H + 4}Z`

type Marks = {
  wall: string
  floor: string
  moonRays: string
  beam: string
  panes: string
}

/** The light in the room: the moon through the window, and a little from the stub of candle. */
const light = (x: number, y: number) =>
  Math.max(
    clamp(1 - Math.hypot((x - 150) * 0.6, (y - 170) * 0.9) / 300) ** 1.4,
    clamp(1 - Math.hypot(x - CANDLE[0], y - CANDLE[1]) / 110) ** 1.6 * 0.5,
    0.03,
  )

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(2001), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [18, 64],
    max: 4.2,
  })
  // The floor in the dark: boards, their joints cut only where light falls.
  const rf = rng(2002)
  let floor = ''
  for (let y = FLOOR + 6; y < H; y += 6 + (y - FLOOR) * 0.12) {
    let x = between(rf, -10, 0)
    while (x < W) {
      const len = between(rf, 30, 90)
      const L = light(x, y)
      if (rf() < 0.25 + L) floor += gouge(x, y, x + len, y + between(rf, -0.4, 0.4), 0.4 + L * 1.4)
      x += len + between(rf, 6, 20)
    }
  }
  const moonRays = rays(rng(2003), MOON[0], MOON[1], { from: 18, to: 60, every: 10, width: 1.6 })
  // "the room was full of moonlight": the beam across the floor, cut as
  // long pale strokes running from the window.
  const rb = rng(2004)
  let beam = ''
  for (let i = 0; i < 40; i++) {
    const t = between(rb, 0, 1)
    const y0 = WIN.bot + 4
    const x0 = WIN.x0 + 10 + t * (WIN.x1 - WIN.x0 - 20)
    const x1 = 210 + t * 300
    const s = between(rb, 0.05, 0.9)
    const s2 = Math.min(1, s + between(rb, 0.08, 0.2))
    beam += gouge(
      x0 + (x1 - x0) * s,
      y0 + (H - y0) * s,
      x0 + (x1 - x0) * s2,
      y0 + (H - y0) * s2,
      0.8 + s * 1.6,
    )
  }
  // The panes of the window: the moonlit night beyond, cut in level lines.
  const rp = rng(2005)
  let panes = ''
  for (let y = WIN.top + 4; y < WIN.bot - 2; y += 5) {
    let x = WIN.x0 + between(rp, 0, 6)
    while (x < WIN.x1 - 4) {
      const len = between(rp, 10, 30)
      const L = clamp(1 - Math.hypot(x - MOON[0], y - MOON[1]) / 120)
      if (rp() < 0.4 + L) panes += gouge(x, y, Math.min(x + len, WIN.x1 - 3), y, 0.5 + L * 1.6)
      x += len + between(rp, 4, 12)
    }
  }
  cached = { wall, floor, moonRays, beam, panes }
  return cached
}

/** The antique portraits on the stained walls: plain dark frames. */
const PORTRAITS: [number, number, number, number][] = [
  [552, 40, 50, 64],
  [628, 52, 42, 54],
  [774, 40, 50, 66],
]
/** The cupboard with glass doors: books and the old china behind the glass. */
const CUPBOARD = { x0: 752, x1: 838, top: 128 }
/** The walnut-wood table, "like a looking-glass". */
const TABLE = 'M618 220H788V228H618Z'
const TABLE_LEGS = 'M628 228V300M778 228V300M640 228V286M766 228V286'
/** The great old Bible, open on the table. */
const BIBLE = 'M712 210L738 204L764 210L764 220L738 216L712 220Z'

// ── JANE, starting, her face turned to the window ───────────────────────────
const JANE_HEAD = { d: HEAD_JANE, at: [330, 126] as P, rot: 16, scale: 0.84 }
const JANE_HT = headAt(-1, JANE_HEAD.at, JANE_HEAD.rot, JANE_HEAD.scale)
const J_NECK: P = [338, 147]
const J_WAIST: P = [341, 187]
const JANE = woman({
  facing: -1,
  neck: J_NECK,
  waist: J_WAIST,
  hemY: 322,
  head: JANE_HEAD,
  arm: 8.6,
  near: {
    // her hand pressed flat to her breast as her heart "stood still"
    arm: [
      [340, 155],
      [348, 188],
      [338, 176],
    ],
    hand: { parts: HOLD_HAND, scale: 1, rot: 10 },
  },
  far: { arm: [] },
  gown: { shoulder: 30, waistW: 22, front: 30, back: 40 },
  toes: [[306, 322]],
  shoe: 1,
})

// ── ST JOHN, behind her, his head bowed ─────────────────────────────────────
/**
 * His head bowed. FIXED 10 October 2026: it was turned with a positive
 * rotation, which on a head facing left lifts the face, and he stood gazing
 * up at the ceiling instead of bowed in prayer.
 */
const SJ_HEAD = { d: HEAD_ST_JOHN, at: [464, 86] as P, rot: -16, scale: 0.98 }
const SJ_HT = headAt(-1, SJ_HEAD.at, SJ_HEAD.rot, SJ_HEAD.scale)
/** His near arm, down and forward to his clasped hands. */
const SJ_ARM: P[] = [
  [462, 120],
  [464, 164],
  [446, 184],
]
const SJ_HAND = { parts: HOLD_HAND, scale: 1.1, rot: -10 }
const SJ = man({
  facing: -1,
  neck: [470, 108],
  hip: [474, 212],
  head: SJ_HEAD,
  body: { width: 32, tails: 52, long: true, flare: 6 },
  arm: 9,
  leg: 10,
  near: {
    arm: SJ_ARM,
    leg: [
      [470, 212],
      [466, 268],
      [464, 324],
    ],
  },
  far: {
    arm: [],
    leg: [
      [478, 212],
      [488, 268],
      [494, 322],
    ],
  },
})
/** The far hand under the near one, the fingers showing below it: clasped. Paper. */
const SJ_FAR_FINGERS = 'M434 188C438 186 444 186 448 188L449 194C444 196 438 196 434 194Z'

function TheVoice({ uid }: ArtProps) {
  const m = marks()
  const id = { win: `${uid}-win` }
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={WIN.x0} y={WIN.top} width={WIN.x1 - WIN.x0} height={WIN.bot - WIN.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [330, 180], push: 1.03 })}>
        {/* the parlour by night, lit by the moon */}
        <path d={m.wall} fill={PAPER} />

        {/* the uncurtained window and the May moon shining in */}
        <rect
          x={WIN.x0 - 8}
          y={WIN.top - 8}
          width={WIN.x1 - WIN.x0 + 16}
          height={WIN.bot - WIN.top + 16}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={WIN.x0}
          y={WIN.top}
          width={WIN.x1 - WIN.x0}
          height={WIN.bot - WIN.top}
          fill={INK}
        />
        <g clipPath={`url(#${id.win})`}>
          <path d={m.panes} fill={PAPER} />
          <path d={m.moonRays} fill={PAPER} />
          <circle cx={MOON[0]} cy={MOON[1]} r={15} fill={PAPER} />
        </g>
        <g fill="none" stroke={INK} strokeWidth={4}>
          <path
            d={`M${(WIN.x0 + WIN.x1) / 2} ${WIN.top}V${WIN.bot}M${WIN.x0} ${(WIN.top + WIN.bot) / 2}H${WIN.x1}`}
          />
        </g>
        <g fill="none" stroke={INK} strokeWidth={1.6}>
          <path
            d={`M${WIN.x0} ${WIN.top + 34}H${WIN.x1}M${WIN.x0} ${WIN.bot - 34}H${WIN.x1}M${WIN.x0 + 34} ${WIN.top}V${WIN.bot}M${WIN.x1 - 34} ${WIN.top}V${WIN.bot}`}
          />
        </g>
        <rect
          x={WIN.x0 - 14}
          y={WIN.bot + 8}
          width={WIN.x1 - WIN.x0 + 28}
          height={6}
          fill={PAPER}
        />

        {/* the antique portraits, dark on the stained walls */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          {PORTRAITS.map(([x, y, w, h]) => (
            <rect key={x} x={x} y={y} width={w} height={h} />
          ))}
        </g>
        <g fill="none" stroke={PAPER} strokeWidth={LINE.hairline}>
          {PORTRAITS.map(([x, y, w, h]) => (
            <rect key={x} x={x + 5} y={y + 5} width={w - 10} height={h - 10} />
          ))}
        </g>

        {/* the cupboard with glass doors, its books and old china */}
        <rect
          x={CUPBOARD.x0}
          y={CUPBOARD.top}
          width={CUPBOARD.x1 - CUPBOARD.x0}
          height={FLOOR - CUPBOARD.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${CUPBOARD.x0 + 4} 168H${CUPBOARD.x1 - 4}M${CUPBOARD.x0 + 4} 206H${CUPBOARD.x1 - 4}M${(CUPBOARD.x0 + CUPBOARD.x1) / 2} ${CUPBOARD.top}V${FLOOR}`}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path
          d="M758 166V146M764 166V140M770 166V148M776 166V142M802 166V150M808 166V144M814 166V146M822 166V140"
          stroke={PAPER}
          strokeWidth={3}
        />

        {/* the floor, and the moonlight lying across it from the window */}
        <rect x={-4} y={FLOOR} width={W + 8} height={H - FLOOR + 4} fill={INK} />
        <path d={`M-4 ${FLOOR}H${W + 4}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.beam} fill={PAPER} />

        {/* the table, the great old Bible, and the one candle dying out */}
        <path d={TABLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={TABLE_LEGS} stroke={INK} strokeWidth={5} />
        <path d={TABLE_LEGS} stroke={PAPER} strokeWidth={1} transform="translate(3 0)" />
        <path d={BIBLE} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path
          d="M738 206V216M718 212H734M742 212H758M718 216H734M742 216H758"
          stroke={INK}
          strokeWidth={0.8}
        />
        <rect
          x={CANDLE[0] - 4}
          y={CANDLE[1] + 8}
          width={8}
          height={12}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <rect
          x={CANDLE[0] - 9}
          y={CANDLE[1] + 18}
          width={18}
          height={4}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 1.1 })}
          d={`M${CANDLE[0]} ${CANDLE[1] + 7}C${CANDLE[0] - 3} ${CANDLE[1] + 4} ${CANDLE[0] - 2} ${CANDLE[1]} ${CANDLE[0]} ${CANDLE[1] - 4}C${CANDLE[0] + 2} ${CANDLE[1]} ${CANDLE[0] + 3} ${CANDLE[1] + 4} ${CANDLE[0]} ${CANDLE[1] + 7}Z`}
          fill={RED}
        />

        {/* St John, a step behind her, his head bowed */}
        <Figure parts={SJ}>
          <path d={SJ_FAR_FINGERS} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          <Figure
            parts={SJ_HAND.parts.map((q) => ({
              ...q,
              t: handAt(SJ_ARM, -1, SJ_HAND),
              paper: true,
              edge: 0.9,
            }))}
            halo={0}
          >
            <path d={HOLD_CUTS} transform={handAt(SJ_ARM, -1, SJ_HAND)} fill={INK} />
          </Figure>
          <StJohnFace t={SJ_HT} down />
        </Figure>

        {/* Jane, started away from him into the moonlight, her face turned up
            to the window, her hand at her breast */}
        <Figure parts={JANE}>
          <JaneFace t={JANE_HT} />
        </Figure>
      </g>
    </>
  )
}

export const theVoice: LinocutArt = { width: W, height: H, Draw: TheVoice }
