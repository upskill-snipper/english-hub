import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_ST_JOHN,
  HOLD_CUTS,
  HOLD_HAND,
  JaneFace,
  LOOSE_HAND,
  StJohnFace,
  handAt,
  headAt,
  man,
  woman,
  type P,
} from './people'

/**
 * Chapter 33: "Twenty thousand pounds", the eighteenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. In Jane's cottage at Morton on a snowy night, as St John
 * shows her the slip of paper with her real name on it, torn from the
 * margin of the portrait-cover, where she had written "JANE EYRE" in Indian
 * ink; and then tells her "that he has left you all his property, and that
 * you are now rich".
 *
 * - "a little room with whitewashed walls and a sanded floor, containing
 *   four painted chairs and a table, a clock, a cupboard, with two or three
 *   plates and dishes, and a set of tea-things in delf" (Chapter 31). So the
 *   room is whitewashed, the floor sanded, and the clock, the cupboard with
 *   its plates and tea-things, the table and a painted chair are all in it.
 * - "the cloak that covered his tall figure all white as a glacier": the
 *   snow had fallen all day. So his cloak hangs on the door, white with
 *   snow, and snow lies by the mat.
 * - A candle and "Marmion" on the table; the fire on the hearth. The fire
 *   and the candle are the spot colour, well away from both faces.
 * - ST JOHN as the figure kit cuts him (./people.tsx): "tall, slender", his
 *   face "like a Greek face, very pure in outline", fair-haired (Chapter
 *   29), standing and holding the slip out close to her. JANE as the kit
 *   cuts her grown, on her chair by the fire, turned to the slip.
 *
 * Seeds: 1801 to 1806.
 */

const W = 860
const H = 340
/** The foot of the wall: the sanded floor runs from here to us. */
const FLOOR = 262
/** The hearth at the right: its fire, and the chimney breast above it. */
const FIRE: P = [770, 248]
const BREAST = { x0: 690, x1: 852 }
/** The candle on the table. */
const CANDLE: P = [332, 168]
/** The door at the left, where he came in out of the snow. */
const DOOR = { x0: 30, x1: 132, top: 52 }

type Marks = {
  wall: string
  floor: string
  glow: string
  breast: string
  door: string
  snow: string
  candleRays: string
}

/** The light in the room: the fire, and the one candle on the table. */
const light = (x: number, y: number) =>
  Math.max(
    clamp(1 - Math.hypot((x - FIRE[0]) * 0.7, (y - FIRE[1]) * 1.05) / 380) ** 1.1,
    clamp(1 - Math.hypot(x - CANDLE[0], (y - CANDLE[1]) * 1.2) / 190) ** 1.3 * 0.8,
    0.06,
  )

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "a little room with whitewashed walls": cut pale where the fire and the
  // candle reach it.
  const wall = gougeField(rng(1801), { x0: 0, x1: BREAST.x0, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6,
    len: [16, 60],
    max: 4.6,
  })
  // "a sanded floor": the sand cut as fine short marks in the firelight.
  const rf = rng(1802)
  let floor = ''
  for (let i = 0; i < 380; i++) {
    const y = between(rf, FLOOR + 3, H)
    const x = between(rf, 0, W)
    const L = light(x, y)
    if (rf() > 0.2 + L) continue
    const k = (y - FLOOR) / (H - FLOOR)
    floor += gouge(
      x,
      y,
      x + between(rf, 3, 8) * (0.6 + k),
      y + between(rf, -0.4, 0.4),
      0.5 + L * 0.9,
    )
  }
  // The fire's glow on the chimney breast and the floor before it.
  const glow = rays(rng(1803), FIRE[0], FIRE[1] - 6, { from: 34, to: 120, every: 7, width: 2.6 })
  // The chimney breast: whitewashed stone, lit from below.
  const rb = rng(1804)
  let breast = ''
  for (let y = 10; y < 200; y += 7) {
    let x = BREAST.x0 + between(rb, 2, 10)
    while (x < BREAST.x1 - 4) {
      const len = between(rb, 12, 30)
      const L = clamp(0.3 + (y / 200) * 0.6)
      breast += gouge(
        x,
        y,
        Math.min(x + len, BREAST.x1 - 3),
        y + between(rb, -0.4, 0.4),
        0.5 + L * 1.6,
      )
      x += len + between(rb, 4, 10)
    }
  }
  // The door's boards, faint.
  let door = ''
  for (let x = DOOR.x0 + 14; x < DOOR.x1 - 4; x += 16)
    door += gouge(x, DOOR.top + 6, x, FLOOR - 4, 0.8)
  // "the cloak that covered his tall figure all white as a glacier": the
  // snow on it, cut as a few ink folds and flecks on the white.
  const rs = rng(1805)
  let snow = ''
  for (let i = 0; i < 26; i++) {
    const y = between(rs, 106, 238)
    const x = between(rs, 58 - (y - 106) * 0.06, 110 + (y - 106) * 0.08)
    snow += gouge(x, y, x + between(rs, -2, 2), y + between(rs, 2, 5), 0.55)
  }
  const candleRays = rays(rng(1806), CANDLE[0], CANDLE[1] - 12, {
    from: 12,
    to: 46,
    every: 18,
    width: 1.2,
  })
  cached = { wall, floor, glow, breast, door, snow, candleRays }
  return cached
}

/** St John's cloak, hung up against the door: long, white with snow, in folds. */
const CLOAK =
  'M62 88H104C108 104 112 130 116 160C120 190 122 216 122 240C108 248 62 250 46 242C46 214 50 186 54 158C58 130 60 106 62 88Z'
/** Its collar, turned down, the loop of it over the peg. */
const COLLAR = 'M60 84H106L110 98C96 104 72 104 56 98Z'
const CLOAK_FOLDS =
  'M70 104C66 150 62 200 58 242M84 104C84 152 84 200 86 246M98 104C102 150 108 196 112 242M76 104C74 140 72 170 70 200'
/** The peg it hangs from. */
const PEG = 'M79 72H87V82H79Z'
/** The snow off his boots, on the mat and the floor by the door. */
const SNOWFALL =
  'M54 266l2 -2l2 2l-2 2zM70 270l2 -2l2 2l-2 2zM92 264l2 -2l2 2l-2 2zM118 268l2 -2l2 2l-2 2zM136 280l2 -2l2 2l-2 2zM160 288l2 -2l2 2l-2 2zM184 296l2 -2l2 2l-2 2zM104 276l2 -2l2 2l-2 2z'
/** The mat laid to the door, pushed back against it. */
const MAT = 'M20 268H150L158 276H12Z'
/** The shuttered window, closed against the snow. */
const WIN = { x0: 300, x1: 364, top: 54, bot: 136 }
/** The clock on the wall. */
const CLOCK: P = [196, 70]
/** The cupboard with its few plates and the tea-things. */
const CUPBOARD = { x0: 156, x1: 238, top: 98, bot: FLOOR }
/** The table, its candle and "Marmion" laid down on it. */
const TABLE = 'M266 196H398V204H266Z'
const TABLE_LEGS = 'M274 204V262M390 204V262M282 204V250M382 204V250'
const BOOK = 'M352 186L380 184L382 194L354 196Z'

// ── ST JOHN, standing, holding the slip close to her eyes ──────────────────
const SJ_HEAD = { d: HEAD_ST_JOHN, at: [432, 104] as P, rot: 14, scale: 0.98 }
const SJ_HT = headAt(1, SJ_HEAD.at, SJ_HEAD.rot, SJ_HEAD.scale)
const SJ_NEAR_ARM: P[] = [
  [432, 136],
  [462, 168],
  [500, 164],
]
const SLIP_HAND = { parts: HOLD_HAND, scale: 1.1, rot: -8 }
const SJ = man({
  facing: 1,
  neck: [424, 128],
  hip: [420, 222],
  head: SJ_HEAD,
  body: { width: 32, tails: 50, long: true, flare: 6, swing: 2 },
  arm: 9,
  leg: 10,
  near: {
    arm: SJ_NEAR_ARM,
    hand: SLIP_HAND,
    leg: [
      [424, 222],
      [436, 276],
      [440, 326],
    ],
  },
  far: {
    arm: [
      [418, 136],
      [410, 180],
      [412, 214],
    ],
    hand: { parts: LOOSE_HAND, scale: 1.1 },
    leg: [
      [414, 222],
      [404, 276],
      [396, 324],
    ],
  },
})
/** The slip torn from the margin of the portrait-cover, with her name on it. */
const SLIP =
  'M512 152L560 150L561 162L556 163L551 161L545 164L538 162L531 165L524 162L517 164L513 162Z'
/** "JANE EYRE", in her own hand, in Indian ink: capitals cut as strokes. */
const NAME =
  // J
  'M517 153.6H522M520 153.6V158.6Q520 160.4 518 160.2' +
  // A
  'M523.4 160.4L525.6 153.4L527.8 160.4M524.3 158H527' +
  // N
  'M529.4 160.4V153.4L533 160.4V153.4' +
  // E
  'M537.6 153.4H534.8V160.4H537.6M534.8 156.8H537' +
  // E
  'M543.6 153.2H540.8V160.2H543.6M540.8 156.6H543' +
  // Y
  'M544.8 153.2L546.6 156.6L548.4 153.2M546.6 156.6V160.2' +
  // R
  'M550 160.2V153.2H552.2Q553.8 153.4 553.6 155.2Q553.4 156.8 551.8 156.8H550M551.8 156.8L553.8 160.2' +
  // E
  'M558.4 153H555.6V160H558.4M555.6 156.4H557.8'

// ── JANE, on her chair by the fire, reading her own name ───────────────────
const JANE_HEAD = { d: HEAD_JANE, at: [604, 162] as P, rot: 4, scale: 0.78 }
const JANE_HT = headAt(-1, JANE_HEAD.at, JANE_HEAD.rot, JANE_HEAD.scale)
const J_NECK: P = [610, 182]
const J_WAIST: P = [612, 214]
/** Her skirt, seated: the lap forward to the knee, falling to the floor. */
const J_SKIRT =
  'M620 177L601 178C596 190 594 202 596 214C584 218 572 222 566 230C560 238 558 250 558 262L554 316L638 316C640 300 640 284 638 270C636 254 632 240 630 226C628 210 626 192 620 177Z'
const JANE = woman({
  facing: -1,
  neck: J_NECK,
  waist: J_WAIST,
  hemY: 316,
  head: JANE_HEAD,
  arm: 7.6,
  skirt: J_SKIRT,
  near: {
    arm: [
      [612, 188],
      [616, 216],
      [592, 234],
    ],
    hand: { parts: LOOSE_HAND, scale: 1, rot: 10 },
  },
  far: { arm: [] },
  toes: [[560, 318]],
  shoe: 0.9,
})
/** Her chair, one of the four painted chairs: its back behind her. */
const CHAIR = 'M640 150H648L652 318H644L642 252H624L626 318H618L620 244H646Z'

function TwentyThousandPounds({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [520, 190], push: 1.03 })}>
        {/* the whitewashed walls by firelight and candlelight */}
        <path d={m.wall} fill={PAPER} />

        {/* the door, the snow-white cloak hung against it, the mat at its foot */}
        <rect
          x={DOOR.x0}
          y={DOOR.top}
          width={DOOR.x1 - DOOR.x0}
          height={FLOOR - DOOR.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.door} fill={PAPER} />
        <circle cx={DOOR.x1 - 12} cy={160} r={3} fill={PAPER} />
        <path d={PEG} fill={PAPER} />
        <path d={CLOAK} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
        <path d={CLOAK_FOLDS} fill="none" stroke={INK} strokeWidth={1.2} />
        <path d={m.snow} fill={INK} />
        <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
        <path d="M80 84Q83 74 86 84" fill="none" stroke={INK} strokeWidth={1.6} />

        {/* the window, its shutter closed against the storm */}
        <rect
          x={WIN.x0 - 5}
          y={WIN.top - 5}
          width={WIN.x1 - WIN.x0 + 10}
          height={WIN.bot - WIN.top + 10}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.carve}>
          <rect x={WIN.x0} y={WIN.top} width={(WIN.x1 - WIN.x0) / 2} height={WIN.bot - WIN.top} />
          <rect
            x={(WIN.x0 + WIN.x1) / 2}
            y={WIN.top}
            width={(WIN.x1 - WIN.x0) / 2}
            height={WIN.bot - WIN.top}
          />
        </g>
        <path d={`M${WIN.x0 + 12} 98H${WIN.x1 - 12}`} stroke={PAPER} strokeWidth={2.4} />

        {/* the clock, which has just struck eight */}
        <circle
          cx={CLOCK[0]}
          cy={CLOCK[1]}
          r={17}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <circle cx={CLOCK[0]} cy={CLOCK[1]} r={12} fill={PAPER} />
        <path
          d={`M${CLOCK[0]} ${CLOCK[1]}V${CLOCK[1] - 9}M${CLOCK[0]} ${CLOCK[1]}L${CLOCK[0] - 6} ${CLOCK[1] + 3}`}
          stroke={INK}
          strokeWidth={1.6}
          strokeLinecap="round"
        />

        {/* the cupboard, two or three plates and the tea-things in delf */}
        <rect
          x={CUPBOARD.x0}
          y={CUPBOARD.top}
          width={CUPBOARD.x1 - CUPBOARD.x0}
          height={CUPBOARD.bot - CUPBOARD.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${CUPBOARD.x0} 150H${CUPBOARD.x1}M${CUPBOARD.x0} 198H${CUPBOARD.x1}M${(CUPBOARD.x0 + CUPBOARD.x1) / 2} 204V${FLOOR - 4}`}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        {/* plates stood on edge on the shelf, and the tea-cups */}
        <g fill={PAPER} stroke={INK} strokeWidth={1}>
          <circle cx={174} cy={132} r={12} />
          <circle cx={200} cy={134} r={10} />
          <path d="M218 148C218 141 228 141 228 148Z" />
          <path d="M170 196C170 188 184 188 184 196ZM192 196C192 189 204 189 204 196Z" />
        </g>
        <g fill="none" stroke={INK} strokeWidth={0.9}>
          <circle cx={174} cy={132} r={7} />
          <circle cx={200} cy={134} r={5.6} />
          <path d="M228 144Q232 144 231 147M184 192Q188 192 187 195M204 192Q208 192 207 195" />
        </g>
        <path d="M160 176H234" stroke={PAPER} strokeWidth={1.4} />

        {/* the chimney breast and the fire on the hearth */}
        <rect x={BREAST.x0} y={0} width={BREAST.x1 - BREAST.x0} height={FLOOR} fill={INK} />
        <path d={m.breast} fill={PAPER} />
        <path
          d={`M712 ${FLOOR}V196H830V${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={700}
          y={188}
          width={142}
          height={9}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={m.glow} fill={PAPER} />
        <path d={`M736 ${FLOOR - 4}H806`} stroke={PAPER} strokeWidth={2} />
        <g fill={RED}>
          <path
            d={`M738 ${FLOOR - 6}C738 ${FLOOR - 16} 748 ${FLOOR - 20} 756 ${FLOOR - 14}C760 ${FLOOR - 24} 774 ${FLOOR - 24} 778 ${FLOOR - 14}C786 ${FLOOR - 20} 800 ${FLOOR - 16} 802 ${FLOOR - 6}Z`}
          />
          <path
            className="lc-flicker"
            d={`M752 ${FLOOR - 14}C748 ${FLOOR - 28} 756 ${FLOOR - 40} 762 ${FLOOR - 50}C768 ${FLOOR - 38} 774 ${FLOOR - 28} 768 ${FLOOR - 14}Z`}
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d={`M774 ${FLOOR - 14}C772 ${FLOOR - 24} 778 ${FLOOR - 32} 782 ${FLOOR - 38}C786 ${FLOOR - 30} 790 ${FLOOR - 22} 786 ${FLOOR - 14}Z`}
          />
        </g>

        {/* the sanded floor */}
        <rect x={-4} y={FLOOR} width={W + 8} height={H - FLOOR + 4} fill={INK} />
        <path d={`M-4 ${FLOOR}H${W + 4}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.floor} fill={PAPER} />
        <path d={MAT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={SNOWFALL} fill={PAPER} />

        {/* the table, the candle she lit, and "Marmion" laid down */}
        <path d={m.candleRays} fill={PAPER} />
        <path d={TABLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={TABLE_LEGS} stroke={INK} strokeWidth={5} />
        <path d={TABLE_LEGS} stroke={PAPER} strokeWidth={1} transform="translate(3 0)" />
        <path d={BOOK} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <rect
          x={CANDLE[0] - 5}
          y={CANDLE[1] - 4}
          width={10}
          height={32}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <rect
          x={CANDLE[0] - 10}
          y={CANDLE[1] + 26}
          width={20}
          height={4}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d={`M${CANDLE[0]} ${CANDLE[1] - 6}C${CANDLE[0] - 4} ${CANDLE[1] - 10} ${CANDLE[0] - 3} ${CANDLE[1] - 16} ${CANDLE[0]} ${CANDLE[1] - 22}C${CANDLE[0] + 3} ${CANDLE[1] - 16} ${CANDLE[0] + 4} ${CANDLE[1] - 10} ${CANDLE[0]} ${CANDLE[1] - 6}Z`}
          fill={RED}
        />

        {/* St John, up from his chair, holding the slip close to her eyes */}
        <Figure parts={SJ}>
          <StJohnFace t={SJ_HT} down />
          <path d={SLIP} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          <path
            d={NAME}
            fill="none"
            stroke={INK}
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d={HOLD_CUTS} transform={handAt(SJ_NEAR_ARM, 1, SLIP_HAND)} fill={INK} />
        </Figure>

        {/* Jane on her chair, turned to the slip, reading her own name */}
        <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <Figure parts={JANE}>
          <JaneFace t={JANE_HT} />
        </Figure>
      </g>
    </>
  )
}

export const twentyThousandPounds: LinocutArt = { width: W, height: H, Draw: TwentyThousandPounds }
