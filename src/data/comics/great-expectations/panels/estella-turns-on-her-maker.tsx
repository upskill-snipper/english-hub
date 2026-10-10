import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedLegs, type P, type Pose } from './people'

/**
 * Chapter 38: "Estella turns on her maker", the tenth moment in the guide's
 * timeline. Every detail is from the held edition (src/data/full-texts/
 * great-expectations.ts):
 *
 * - "we found her in the room where I had first beheld her": the
 *   dressing-room of Chapter 8, with its "draped table with a gilded
 *   looking-glass" and the "arm-chair" she sits in. "The candles that lighted
 *   that room of hers were placed in sconces on the wall. They were high from
 *   the ground"; "the stopped clock"; "the withered articles of bridal dress
 *   upon the table and the ground"; "her own awful figure with its ghostly
 *   reflection thrown large by the fire upon the ceiling and the wall". So two
 *   sconces burn high on the wall, the clock on the chimney-piece stands at
 *   twenty minutes to nine (Chapter 8), a white shoe and other bridal things
 *   lie on the floor, and Miss Havisham's shadow is thrown huge across the
 *   firelit wall behind her and up on to the ceiling.
 * - "We were seated by the fire ... when Estella gradually began to detach
 *   herself"; "disengaging her arm, and moving to the great chimney-piece,
 *   where she stood looking down at the fire"; "she leaned against the great
 *   chimney-piece and only moving her eyes". So Estella stands with her arm
 *   on the chimney-piece, looking down at the fire, her back half turned on
 *   Miss Havisham. Her dress that night is not described: she wears a dark
 *   gown, so that the one figure in white is the bride.
 * - "'Speak the truth, you ingrate!' cried Miss Havisham, passionately
 *   striking her stick upon the floor". So Miss Havisham leans out of her
 *   arm-chair towards her, the stick struck down on the boards. "the little
 *   stool that is even now beside you there" stands at her side.
 * - Pip, who was "seated by the fire" with them, sits on its far side and
 *   watches.
 * - Bentley Drummle, named in the guide for this moment, is at the ball at
 *   Richmond later in the chapter, and is not drawn.
 *
 * The spot colour: the fire, and the flames in the sconces. The three people
 * are the figure kit's (./people.tsx): Estella grown up (`age: 'woman'`), Miss
 * Havisham, and Pip grown up. Seeds: 3801 (the wall), 3802 (the floor), 3803
 * (the fire's light), 3804 (the sconces' light).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const FLOOR = 262
/** The fire, low in the grate: where the light and the great shadow come from. */
const FIRE: P = [680, 282]
/** The great chimney-piece: its outer edges, the shelf, the opening. */
const CHIMNEY = { x0: 606, x1: 756, shelf: 150, ox0: 636, ox1: 726, otop: 206 }
/** The two sconces, high on the wall. */
const SCONCES: P[] = [
  [262, 62],
  [474, 58],
]

function light(x: number, y: number) {
  const fire = clamp(1 - Math.hypot((x - FIRE[0]) * 0.62, y - FIRE[1]) / 640) ** 0.85
  const sc = Math.max(
    ...SCONCES.map(([sx, sy]) => clamp(1 - Math.hypot(x - sx, y - sy) / 120) ** 2 * 0.5),
  )
  return Math.max(fire, sc, 0.04)
}

type Marks = { wall: string; floor: string; glow: string; sconceGlow: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(3801), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6,
  })
  const r = rng(3802)
  let floor = ''
  const V: [number, number] = [520, 40]
  for (let xt = -700; xt < 1500; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.14, 0.32))
      const x0 = xt + (xb - xt) * t0
      const y0 = FLOOR + (H - FLOOR) * t0
      const x1 = xt + (xb - xt) * t1
      const y1 = FLOOR + (H - FLOOR) * t1
      const L = light((x0 + x1) / 2, FIRE[1] - 10)
      if (L > 0.05 || r() < 0.3)
        floor += wedge(x0, y0, x1, y1, (0.3 + t0) * (0.4 + L * 2.8), (0.3 + t1) * (0.4 + L * 2.8))
      t0 = t1 + between(r, 0.03, 0.08)
    }
  }
  const glow = rays(rng(3803), FIRE[0], FIRE[1] - 20, { from: 30, to: 70, every: 9, width: 2 })
  const sconceGlow = SCONCES.map(([x, y]) =>
    rays(rng(3804 + x), x, y - 14, { from: 12, to: 46, every: 12, width: 1.6 }),
  ).join('')
  cached = { wall, floor, glow, sconceGlow }
  return cached
}

/**
 * "her own awful figure with its ghostly reflection thrown large by the fire
 * upon the ceiling and the wall": her outline in the chair (the veil down her
 * back, the head, the stick struck down, the lap, the high chair-back), each
 * point thrown from the fire on to the wall at SHADOW_K times its distance, so
 * the shadow is hers and lies where the fire would throw it, up and to the
 * left of her. Cut as solid ink over the firelit wall: where the shadow
 * falls, the light is not cut.
 */
const SHADOW_K = 1.75
const SHADOW = (() => {
  const s = 1.3 * 0.98
  const at: P = [318, 316]
  // Her outline, in her own frame, round from the chair-back to the stick.
  const outline: P[] = [
    [-24, -2],
    [-24, -134],
    [-12, -138],
    [-12, -146],
    [-2, -156],
    [16, -158],
    [30, -154],
    [38, -142],
    [45, -134],
    [39, -130],
    [40, -122],
    [34, -114],
    [28, -106],
    [46, -90],
    [50, -84],
    [66, -2],
    [58, -2],
    [46, -76],
    [46, -64],
    [46, -2],
  ]
  const pts = outline.map(([x, y]): P => {
    const px = at[0] + x * s
    const py = at[1] + y * s
    return [FIRE[0] + (px - FIRE[0]) * SHADOW_K, FIRE[1] + (py - FIRE[1]) * SHADOW_K]
  })
  return 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
})()

/** The great chimney-piece, its shelf, the grate and the fire, and the stopped clock on the shelf. */
function ChimneyPiece() {
  const { x0, x1, shelf, ox0, ox1, otop } = CHIMNEY
  return (
    <g>
      <path
        d={`M${x0} ${FLOOR + 6}V${shelf}H${x1}V${FLOOR + 6}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path
        d={`M${ox0} ${FLOOR + 6}V${otop + 14}Q${(ox0 + ox1) / 2} ${otop - 6} ${ox1} ${otop + 14}V${FLOOR + 6}Z`}
        fill={INK}
      />
      <path
        d={`M${x0 + 8} ${shelf + 10}V${FLOOR}M${x1 - 8} ${shelf + 10}V${FLOOR}M${x0 + 8} ${shelf + 22}H${x1 - 8}`}
        stroke={INK}
        strokeWidth={1}
      />
      <path
        d={`M${x0 - 12} ${shelf + 1}H${x1 + 12}V${shelf - 9}H${x0 - 12}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      {/* the fire in the grate */}
      <path
        d={`M${ox0 + 14} ${FLOOR - 4}H${ox1 - 14}M${ox0 + 14} ${FLOOR - 12}H${ox1 - 14}`}
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <g fill={RED}>
        <path d="M652 258C652 248 662 242 670 248C674 240 690 240 694 248C702 244 712 250 710 258Z" />
        <path
          className="lc-flicker"
          d="M664 250C660 238 666 226 670 216C676 228 682 238 676 250Z"
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8, delay: 0.35 })}
          d="M684 250C682 240 688 232 690 224C694 232 698 240 694 250Z"
        />
      </g>
      {/* "the stopped clock", at twenty minutes to nine */}
      <g>
        <path
          d="M712 141V118Q712 104 726 104Q740 104 740 118V141Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <circle cx={726} cy={120} r={9} fill={PAPER} />
        {/* the minute hand at forty minutes, the hour hand most of the way from eight to nine */}
        <path
          d="M726 120L720.7 120.9M726 120L719.6 123.7"
          stroke={INK}
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      </g>
    </g>
  )
}

/** A sconce high on the wall, its candle, and the dull flame. */
function Sconce({ at: [x, y], k }: { at: P; k: number }) {
  return (
    <g>
      <path
        d={`M${x - 6} ${y + 12}Q${x} ${y + 22} ${x + 6} ${y + 12}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path d={`M${x} ${y + 12}V${y + 2}`} stroke={PAPER} strokeWidth={4} />
      <rect
        x={x - 2.6}
        y={y - 12}
        width={5.2}
        height={14}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.8}
      />
      <path
        className="lc-flicker"
        style={timing({ delay: 0.3 + k * 0.3, dur: 0.9 })}
        d={`M${x} ${y - 12}C${x - 3.4} ${y - 15} ${x - 2.2} ${y - 20} ${x} ${y - 25}C${x + 2.2} ${y - 20} ${x + 3.4} ${y - 15} ${x} ${y - 12}Z`}
        fill={RED}
      />
    </g>
  )
}

/** The draped dressing-table and its gilded looking-glass, on the left, in her shadow. */
function DressingTable() {
  return (
    <g>
      <path d="M22 262V196H124V262Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path
        d="M30 200Q40 230 34 260M58 200Q64 232 60 260M88 200Q96 228 92 260M114 200Q118 230 116 260"
        fill="none"
        stroke={PAPER}
        strokeWidth={1}
      />
      <path
        d="M40 194V120Q40 96 73 96Q106 96 106 120V194Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={2.4}
      />
      <path
        d="M48 188V122Q48 104 73 104Q98 104 98 122V188Z"
        fill="none"
        stroke={PAPER}
        strokeWidth={0.9}
      />
      {/* the shoe on it that had never been worn */}
      <path
        d="M84 196L86 189Q94 186 102 189L106 196Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.8}
      />
    </g>
  )
}

/** Her arm-chair: a high back, a seat, an arm, its legs. Facing right. */
function ArmChair() {
  return (
    <g stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" fill={INK}>
      <path d="M296 314V156Q296 146 306 146H314Q322 146 322 156V244H372V256H322V314Z" />
      <path d="M318 222H364Q370 222 370 228V240H318Z" />
      <path d="M364 256V314H370V256Z" />
    </g>
  )
}

/**
 * "the withered articles of bridal dress upon the ... ground": a white satin
 * shoe on its side, a long glove, and a spray of faded flowers, between the
 * chair and the hearth.
 */
function BridalThings() {
  return (
    <g fill={PAPER} stroke={INK} strokeWidth={0.9} strokeLinejoin="round">
      <path d="M452 316L456 306Q468 300 480 304L486 314Z" />
      <path d="M500 304C512 300 526 300 538 304L540 309C528 307 514 307 502 310Z" />
      <path d="M506 309L500 316M512 309L509 317M518 309L518 317" fill="none" />
      <circle cx={552} cy={318} r={3.4} />
      <circle cx={560} cy={313} r={2.8} />
      <circle cx={546} cy={311} r={2.6} />
    </g>
  )
}

// ── THE PEOPLE, from the figure kit ─────────────────────────────────────────

/** Miss Havisham, leaning out of her arm-chair, her stick struck down. */
const HAVISHAM_AT: P = [318, 316]
const HAVISHAM: Pose = {
  look: 'havisham',
  seated: true,
  // Leaning towards Estella, but with her head drawn back over the chair and
  // her chin down: the kit's veil is cut for a woman standing, and with her
  // head out over her knees (as first drawn) it fell across her lap and its
  // folds crossed the crease of the lap in a plain cross. Bent this way it
  // hangs down her back. (10 October 2026.)
  body: { neck: [16, -110], hip: [0, -60] },
  head: { at: [26, -128], rot: 10 },
  legs: {
    far: [
      [-2, -60],
      [36, -66],
      [38, -2],
    ],
    near: [
      [2, -60],
      [42, -64],
      [44, -2],
    ],
  },
  far: {
    pts: [
      [10, -104],
      [28, -90],
      [44, -86],
    ],
    hand: 'grip',
  },
  near: {
    pts: [
      [16, -104],
      [36, -90],
      [50, -84],
    ],
    hand: 'grip',
  },
  shoe: 'near',
}
/** Her crutch-headed stick, from her hands down to the floor, in her frame. */
const STICK = 'M50 -86L66 -2M44 -88L56 -86'

/**
 * Estella, grown, leaning her side against the jamb of the chimney-piece, her
 * near hand laid on it at her side, her head bent to look down at the fire.
 * (Her arm along the high shelf was tried first: at panel size a straight arm
 * raised level with the shoulder reads as a salute.)
 */
const ESTELLA_AT: P = [586, 320]
const ESTELLA: Pose = {
  look: 'estella',
  age: 'woman',
  tone: 'ink',
  eye: 'proud',
  body: { neck: [8, -132], hip: [2, -78] },
  head: { at: [13, -152], rot: 26 },
  near: {
    pts: [
      [9, -126],
      [17, -102],
      [21, -80],
    ],
    hand: 'mitt',
  },
}

/** The plain chair Pip sits on, its back towards the right edge. */
function PipsChair() {
  return (
    <g stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" fill={INK}>
      <path d="M798 256H836V262H798ZM800 262V318H805V262ZM830 262V316H835V262Z" />
      <path d="M832 256V196H838V256Z" />
    </g>
  )
}

/** Pip, grown, seated on the far side of the fire, watching. */
const PIP_AT: P = [826, 318]
const PIP: Pose = {
  look: 'pip',
  age: 'man',
  body: { neck: [6, -116], hip: [0, -50] },
  head: { at: [10, -138], rot: 4 },
  legs: seatedLegs(50, 34),
  near: {
    pts: [
      [6, -110],
      [16, -84],
      [30, -58],
    ],
    hand: 'mitt',
  },
  far: {
    pts: [
      [2, -110],
      [10, -84],
      [24, -58],
    ],
    hand: 'mitt',
  },
}

function EstellaTurnsOnHerMaker({ uid }: ArtProps) {
  const m = marks()
  const id = { wall: `${uid}-wall` }
  return (
    <>
      <defs>
        <clipPath id={id.wall}>
          <rect x={0} y={0} width={W} height={FLOOR} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 180], push: 1.03 })}>
        {/* the firelit wall, and her shadow thrown large across it */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.sconceGlow} fill={PAPER} />
        <g
          clipPath={`url(#${id.wall})`}
          className="lc-fade-in"
          style={timing({ delay: 0.4, dur: 1.6 })}
        >
          <path d={SHADOW} fill={INK} />
        </g>
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />
        {SCONCES.map((at, k) => (
          <Sconce key={at[0]} at={at} k={k} />
        ))}
        <DressingTable />
        <ChimneyPiece />
        <path d={m.glow} fill={PAPER} />
        <BridalThings />
        {/* "the little stool that is even now beside you there" */}
        <path
          d="M384 290H420V296H384ZM388 296V316M416 296V316"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <ArmChair />
        <Person pose={HAVISHAM} at={HAVISHAM_AT} scale={1.3}>
          <path d={STICK} fill="none" stroke={PAPER} strokeWidth={5.6} strokeLinecap="round" />
          <path d={STICK} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        </Person>
        <Person pose={ESTELLA} at={ESTELLA_AT} scale={1.3} />
        <PipsChair />
        <Person pose={PIP} at={PIP_AT} scale={1.22} flip />
      </g>
    </>
  )
}

export const estellaTurnsOnHerMaker: LinocutArt = {
  width: W,
  height: H,
  Draw: EstellaTurnsOnHerMaker,
}
