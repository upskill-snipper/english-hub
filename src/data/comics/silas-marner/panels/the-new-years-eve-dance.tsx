import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
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

import { Mistletoe, OvalMirror, Sconce, wainscot, WAINSCOT_LINE } from './white-parlour'
import {
  Figure,
  GODFREY_CURLS,
  GODFREY_CUTS,
  GODFREY_HAIR,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_GODFREY,
  HEAD_LADY,
  HEAD_NANCY,
  HEAD_OLD,
  HEAD_PLAIN,
  HEAD_SQUIRE,
  HOLD_CUTS,
  HOLD_HAND,
  LADY_CUTS,
  NECKCLOTH,
  NancyHead,
  OLD_CUTS,
  PLAIN_CUTS,
  PLAIN_HAIR,
  PaperHair,
  SOLOMON_HAIR,
  SOLOMON_HAIR_LINES,
  SPREAD_HAND,
  SQUIRE_CUTS,
  SQUIRE_HAIR,
  TurbanHead,
  coat,
  gown,
  handAt,
  headAt,
  line,
  man,
  seatedGown,
  type P,
  type Part,
} from './people'

/**
 * Chapter 11: "The New Year's Eve dance", the eighth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "In the close press of couples a slight accident had happened to Nancy's
 *   dress ... caught under the stately stamp of the Squire's foot"; Godfrey
 *   was "capable of leading her straight away, without leave asked, into the
 *   adjoining small parlour, where the card-tables were set"; "she seated
 *   herself on a chair against one of the card-tables, as the stiffest and
 *   most unapproachable position she could choose"; Godfrey is "standing by
 *   her without any sign of intended departure". So the panel is the small
 *   parlour, dark but for one candle on a card-table, with Nancy sitting bolt
 *   upright on a chair against it and Godfrey standing over her, one hand
 *   held out: "Would you never forgive me, then, Nancy". Her answer is the
 *   quotation, "sending out a flash in spite of herself": her cheek is
 *   flushed in the spot colour (NANCY_BLOOM, on the cheek, never the mouth).
 * - Nancy: "her light-brown hair was cropped behind like a boy's, and was
 *   dressed in front in a number of flat rings"; "her silvery twilled silk,
 *   her lace tucker"; she is small. So her head is the figure kit's
 *   (./people.tsx), her gown is printed pale and crossed with fine twill
 *   lines, and a scalloped tucker edges it. (Her coral necklace and ear-drops
 *   are left to the words: red at a throat or below an ear reads as a wound.)
 * - Godfrey is in his dancing clothes: Chapter 13 has him go out "in your
 *   dancing shoes and stockings". So pale stockings and low shoes, not the
 *   riding boots of the breakfast panel; his fair hair and big frame are the
 *   kit's.
 * - Through the doorway the dance goes on in "the White Parlour, where the
 *   mistletoe-bough was hung, and multitudinous tallow candles made rather a
 *   brilliant effect, gleaming from among the berried holly-boughs, and
 *   reflected in the old-fashioned oval mirrors fastened in the panels of the
 *   white wainscot" (the room is ./white-parlour.tsx). Solomon Macey,
 *   "holding his white head on one side, and playing vigorously", fiddles;
 *   the Squire, who "led off with Mrs. Crackenthorp", dances with her, one
 *   hand up in "that grand way o' waving his hand as the Squire has" (SQ_UP_ARM
 *   says why it is bent at the elbow), and
 *   "the summit of whose perpendicular feather was on a level with the
 *   Squire's shoulder"; another couple goes down the dance hand in hand.
 *
 * Seeds: 801 (the small parlour's wall), 802 (the floors), 803 (the candle), 804 (the twill).
 */

const W = 860
const H = 340
/** The doorway from the small parlour into the White Parlour. */
const DOOR = { x0: 26, x1: 392, y0: 22, y1: 252 }
/** The White Parlour's skirting, seen through the doorway; its dancers stand at FAR_FEET. */
const PARLOUR_FLOOR = 226
const FAR_FEET = 246
/** The small parlour's own skirting, and its floor. */
const FLOOR = 252
const CANDLE: P = [652, 174]

type Marks = {
  wall: string
  glow: string
  floor: string
  far: string
  shade: string
  spill: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The small parlour is lit by the brilliant doorway on the left and by one
  // candle on the card-table.
  const light = (x: number, y: number) => {
    const door = clamp(1 - (x - DOOR.x1) / 210) * clamp(1 - Math.abs(y - 150) / 260) * 0.8
    const cand = clamp(1 - Math.hypot(x - CANDLE[0], (y - CANDLE[1]) * 1.1) / 150) * 0.85
    return Math.max(door, cand, 0.04)
  }
  const wall = gougeField(rng(801), { x0: DOOR.x1, x1: W, y0: 6, y1: FLOOR - 4 }, light, {
    spacing: 6.8,
  })
  const glow = rays(rng(803), CANDLE[0], CANDLE[1], { from: 14, to: 66, every: 9.5, width: 2.2 })

  // The small parlour's floor: dark boards, the doorway's light laid across
  // them as paper joints.
  const f = rng(802)
  let floor = ''
  const V = [240, 60]
  // Only the boards that reach the sheet: a joint is cut if either end is on it.
  for (let xt = -40; xt < 900; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  // The White Parlour's floor, far off: fine joints.
  let far = ''
  const V2 = [240, 110]
  for (let xt = -10; xt < 430; xt += 18) {
    const xb = V2[0] + (xt - V2[0]) * ((FLOOR - V2[1]) / (PARLOUR_FLOOR - V2[1]))
    far += wedge(xt, PARLOUR_FLOOR + 2, xb, FLOOR, 0.6, 1.2)
  }
  // Shade on the small parlour's floor away from the door and the candle,
  // and under the card-table, the chair and the two of them.
  let shade = ''
  for (let y = FLOOR + 2; y < H - 4; y += 3.2) {
    const k = (y - FLOOR) / (H - FLOOR)
    shade += gouge(600 + k * 40, y, 870, y + 0.6, 1.4 + (1 - k) * 1.2)
  }
  for (let y = 308; y < 324; y += 3) {
    const w = 1 - Math.abs(y - 316) / 8
    shade += gouge(396 - w * 8, y, 560 + w * 8, y + 0.6, 0.6 + w * 1.6)
  }
  // The doorway's light spilling forward over the boards.
  let spill = ''
  for (let k = 0; k < 9; k++) {
    const x = DOOR.x0 + 30 + k * 40
    spill += wedge(x, FLOOR + 2, x + 30 + k * 6, H - 4, 5, 11)
  }
  cached = { wall, glow, floor, far, shade, spill }
  return cached
}

// ── THE DANCE, beyond the doorway: small, black on the white wainscot ───────

/** Solomon, fiddling, his white head on one side. */
const SOL_HEAD = { d: HEAD_OLD, at: [82, 128] as P, rot: 16, scale: 0.66 }
const SOL_BOW_ARM: P[] = [
  [80, 152],
  [90, 172],
  [104, 166],
]
const SOLOMON: Part[] = man({
  facing: 1,
  neck: [78, 146],
  hip: [74, 198],
  head: SOL_HEAD,
  body: { width: 22, tails: 24, front: 2, flare: 3 },
  arm: 5.6,
  leg: 6.4,
  near: {
    arm: SOL_BOW_ARM,
    leg: [
      [76, 200],
      [80, 224],
      [80, FAR_FEET],
    ],
    hand: { parts: GRIP_HAND, scale: 0.6 },
  },
  far: {
    arm: [
      [80, 150],
      [96, 152],
      [110, 144],
    ],
    leg: [
      [72, 200],
      [66, 224],
      [62, FAR_FEET - 2],
    ],
    hand: { parts: GRIP_HAND, scale: 0.6 },
  },
})
/** The fiddle under his chin, pointing forward, and the bow across it. */
const FIDDLE =
  'M86 142C88 138 94 138 96 141C99 140 103 141 104 144C104 148 100 150 97 149C94 152 88 151 86 148Z'
const FIDDLE_NECK = 'M103 144L118 141'
const BOW = 'M100 170L124 132'

/**
 * The Squire, leading off with Mrs Crackenthorp, one hand up in a wave: the
 * elbow out in front of him at chest height and the forearm upright, the
 * fingers splayed beside his face. (Cut first as a straight arm raised
 * forward with the hand open, which the review of 2 October 2026 found reads
 * at phone width as a salute.)
 */
const SQ_HEAD = { d: HEAD_SQUIRE, at: [174, 112] as P, rot: -4, scale: 0.72 }
const SQ_NECK: P = [168, 132]
const SQ_HIP: P = [162, 192]
const SQ_UP_ARM: P[] = [
  [172, 138],
  [194, 141],
  [200, 116],
]
const SQ_HAND_ARM: P[] = [
  [166, 140],
  [184, 158],
  [202, 156],
]
const SQ_BELLY =
  'M168 140C178 146 186 158 186 170C186 182 178 190 166 194L160 194C158 176 160 156 168 140Z'
const SQUIRE: Part[] = man({
  facing: 1,
  neck: SQ_NECK,
  hip: SQ_HIP,
  head: SQ_HEAD,
  robe: coat(SQ_NECK, SQ_HIP, 1, { width: 30, tails: 28, front: 2, flare: 4 }) + SQ_BELLY,
  body: { width: 30 },
  arm: 7,
  leg: 8.4,
  near: {
    arm: SQ_UP_ARM,
    leg: [
      [166, 194],
      [178, 220],
      [176, FAR_FEET],
    ],
    hand: { parts: SPREAD_HAND, scale: 0.7, rot: 0 },
  },
  far: {
    arm: SQ_HAND_ARM,
    leg: [
      [160, 194],
      [152, 220],
      [148, FAR_FEET - 2],
    ],
    hand: { parts: HOLD_HAND, scale: 0.7 },
  },
})

/** Mrs Crackenthorp: small, in her turban, the feather's top level with his shoulder. */
const MRS_C_HEAD = { d: HEAD_LADY, at: [228, 166] as P, rot: 2, scale: 0.58 }
const MRS_C_NECK: P = [230, 182]
const MRS_C: Part[] = man({
  facing: -1,
  neck: MRS_C_NECK,
  hip: [232, 214],
  head: MRS_C_HEAD,
  robe: gown(MRS_C_NECK, [232, FAR_FEET], { width: 20, waist: 12, foot: 34, bust: 3 }),
  arm: 5,
  feet: false,
  near: {
    arm: [
      [228, 188],
      [218, 196],
      [208, 160],
    ],
    leg: [],
    hand: { parts: HOLD_HAND, scale: 0.6 },
  },
  far: {
    arm: [
      [232, 188],
      [238, 202],
      [232, 212],
    ],
    leg: [],
  },
})

/** A young couple going down the dance, hand in hand, their joined hands raised. */
const MAN_HEAD = { d: HEAD_PLAIN, at: [304, 120] as P, rot: 0, scale: 0.68 }
const YOUNG_MAN: Part[] = man({
  facing: 1,
  neck: [300, 138],
  hip: [296, 194],
  head: MAN_HEAD,
  body: { width: 22, tails: 30, front: 2, flare: 4, swing: 3 },
  arm: 5.6,
  leg: 6.4,
  near: {
    arm: [
      [302, 144],
      [316, 128],
      [328, 110],
    ],
    leg: [
      [298, 196],
      [308, 222],
      [312, FAR_FEET],
    ],
    hand: { parts: HOLD_HAND, scale: 0.6 },
  },
  far: {
    arm: [
      [296, 144],
      [288, 168],
      [296, 186],
    ],
    leg: [
      [294, 196],
      [286, 222],
      [280, FAR_FEET - 2],
    ],
  },
})
const LADY_HEAD = { d: HEAD_LADY, at: [354, 128] as P, rot: 0, scale: 0.64 }
const LADY_NECK: P = [354, 146]
const YOUNG_LADY: Part[] = man({
  facing: -1,
  neck: LADY_NECK,
  hip: [356, 196],
  head: LADY_HEAD,
  robe: gown(LADY_NECK, [358, FAR_FEET], { width: 20, waist: 14, foot: 36, bust: 3 }),
  arm: 5,
  feet: false,
  near: {
    arm: [
      [352, 152],
      [342, 132],
      [334, 112],
    ],
    leg: [],
    hand: { parts: HOLD_HAND, scale: 0.6 },
  },
  far: {
    arm: [
      [356, 152],
      [362, 172],
      [356, 188],
    ],
    leg: [],
  },
})

// ── GODFREY, standing over her ──────────────────────────────────────────────
/**
 * His near hand is laid on his heart, the plea of "Would you never forgive
 * me", and both his hands stay well clear of her. (Held out towards her in the
 * first cuts, the open hand came level first with her face, where it could be
 * read as a blow, then with her breast.)
 */
const GOD_HEAD = { d: HEAD_GODFREY, at: [422, 84] as P, rot: 16, scale: 1.08 }
const GOD_NEAR_LEG: P[] = [
  [414, 200],
  [422, 258],
  [426, 314],
]
const GOD_FAR_LEG: P[] = [
  [406, 200],
  [398, 258],
  [392, 312],
]
const GOD_ARM: P[] = [
  [420, 124],
  [428, 174],
  [440, 158],
]
const GOD_HAND = { parts: HOLD_HAND, scale: 1.15, rot: -48 }
const GOD_FAR_ARM: P[] = [
  [412, 122],
  [402, 160],
  [414, 190],
]
const GODFREY: Part[] = man({
  facing: 1,
  neck: [416, 112],
  hip: [410, 198],
  head: GOD_HEAD,
  body: { width: 58, tails: 64, front: 2, flare: 6 },
  arm: 13,
  leg: 15,
  near: { arm: GOD_ARM, leg: GOD_NEAR_LEG, hand: GOD_HAND },
  far: { arm: GOD_FAR_ARM, leg: GOD_FAR_LEG, hand: { parts: GRIP_HAND, scale: 1.1 } },
})
const GOD_T = headAt(1, GOD_HEAD.at, GOD_HEAD.rot, GOD_HEAD.scale)
/** His pale stockings, from the knee to the shoe. PAPER, outlined in ink. */
const STOCKINGS = [GOD_NEAR_LEG, GOD_FAR_LEG]
  .map(([, k, a]) => {
    const kx = k[0] + (a[0] - k[0]) * 0.12
    const ky = k[1] + (a[1] - k[1]) * 0.12
    return `M${kx - 5.6} ${ky}L${kx + 5.6} ${ky}L${a[0] + 4.4} ${a[1] - 6}L${a[0] - 4.4} ${a[1] - 6}Z`
  })
  .join('')

// ── NANCY, bolt upright on a chair against the card-table ───────────────────
const NANCY_HEAD = { d: HEAD_NANCY, at: [508, 150] as P, rot: 8, scale: 1 }
const NANCY_NECK: P = [512, 176]
const NANCY_HIP: P = [526, 230]
const NANCY_KNEE: P = [486, 236]
/** Her silvery twilled silk, cut pale, falling to the floor. */
const NANCY_GOWN = seatedGown(NANCY_NECK, NANCY_HIP, NANCY_KNEE, 316, -1, { width: 28, lap: 11 })
/** Her arms, her hands folded in her lap: drawn over the pale gown, as the kit draws limbs. */
const NANCY_NEAR_ARM: P[] = [
  [510, 184],
  [506, 208],
  [490, 222],
]
const NANCY_FAR_ARM: P[] = [
  [516, 186],
  [520, 210],
  [496, 224],
]
const NANCY_HAND = { parts: HOLD_HAND, scale: 0.85 }
const NANCY_ARMS: Part[] = [
  { d: line(NANCY_FAR_ARM), w: 6.4 },
  ...NANCY_HAND.parts.map((q) => ({ ...q, t: handAt(NANCY_FAR_ARM, -1, NANCY_HAND) })),
  { d: line(NANCY_NEAR_ARM), w: 6.4, sep: 1.4 },
  ...NANCY_HAND.parts.map((q) => ({ ...q, t: handAt(NANCY_NEAR_ARM, -1, NANCY_HAND) })),
]
/**
 * The fine diagonal twill of the silk, clipped to the gown: short broken
 * cuts, so it reads as the weave of a pale cloth and not as stripes.
 */
const TWILL = (() => {
  const r = rng(804)
  let d = ''
  for (let x = 440; x < 552; x += 7) {
    let t = between(r, 0, 10)
    while (t < 150) {
      const len = between(r, 5, 11)
      d += `M${x + t * 0.2} ${170 + t}l${len * 0.2} ${len}`
      t += len + between(r, 5, 9)
    }
  }
  return d
})()
/** The lace tucker at the neck of the gown. */
const TUCKER = 'M502 180Q505 184 508 180Q511 184 514 180Q517 184 520 181'
const NT = headAt(-1, NANCY_HEAD.at, NANCY_HEAD.rot, NANCY_HEAD.scale)

/** Her chair, and the card-table behind it with its candle and a pack of cards. */
const CHAIR = 'M532 172H542L544 318H536L535 240H494L492 318H486L488 232H534Z'
const CARD_TABLE = 'M556 206H742L746 214H552Z'

function TheNewYearsEveDance({ uid }: ArtProps) {
  const m = marks()
  const id = { door: `${uid}-door`, gown: `${uid}-gown` }
  return (
    <>
      <defs>
        <clipPath id={id.door}>
          <rect x={DOOR.x0} y={DOOR.y0} width={DOOR.x1 - DOOR.x0} height={DOOR.y1 - DOOR.y0} />
        </clipPath>
        <clipPath id={id.gown}>
          <path d={NANCY_GOWN} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 170], push: 1.03 })}>
        {/* the small parlour: dark, lit from the doorway and one candle */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        <rect x={DOOR.x1} y={FLOOR - 8} width={W - DOOR.x1} height={8} fill={PAPER} />
        <rect x={DOOR.x1} y={FLOOR - 5} width={W - DOOR.x1} height={1.4} fill={INK} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.spill} fill={PAPER} />
        <path d={m.shade} fill={INK} />

        {/* the White Parlour, through the doorway */}
        <g clipPath={`url(#${id.door})`}>
          <rect
            x={DOOR.x0}
            y={DOOR.y0}
            width={DOOR.x1 - DOOR.x0}
            height={PARLOUR_FLOOR}
            fill={PAPER}
          />
          <path
            d={wainscot(DOOR.x0 - 40, DOOR.x1 + 40, 30, 150, PARLOUR_FLOOR, 104)}
            fill="none"
            stroke={INK}
            strokeWidth={WAINSCOT_LINE}
          />
          <rect x={DOOR.x0} y={DOOR.y0} width={DOOR.x1 - DOOR.x0} height={10} fill={INK} />
          <rect x={DOOR.x0} y={34} width={DOOR.x1 - DOOR.x0} height={3} fill={INK} />
          <rect x={DOOR.x0} y={148} width={DOOR.x1 - DOOR.x0} height={3.4} fill={INK} />
          <rect x={DOOR.x0} y={PARLOUR_FLOOR - 6} width={DOOR.x1 - DOOR.x0} height={6} fill={INK} />
          <rect
            x={DOOR.x0}
            y={PARLOUR_FLOOR}
            width={DOOR.x1 - DOOR.x0}
            height={FLOOR - PARLOUR_FLOOR}
            fill={PAPER}
          />
          <path d={m.far} fill={INK} />
          <OvalMirror cx={128} cy={74} rx={16} ry={22} />
          <OvalMirror cx={336} cy={74} rx={16} ry={22} />
          <Sconce x={234} y={50} />
          <Sconce x={30} y={50} delay={0.2} />
          <Sconce x={420} y={50} delay={0.4} />
          <Mistletoe x={252} y={DOOR.y0 + 8} drop={2} />

          {/* the dance: Solomon fiddling, the Squire and Mrs Crackenthorp, a young couple */}
          <Figure parts={SOLOMON} halo={1.4}>
            <path
              d={OLD_CUTS}
              transform={headAt(1, SOL_HEAD.at, SOL_HEAD.rot, SOL_HEAD.scale)}
              fill={PAPER}
            />
            <PaperHair
              t={headAt(1, SOL_HEAD.at, SOL_HEAD.rot, SOL_HEAD.scale)}
              d={SOLOMON_HAIR}
              lines={SOLOMON_HAIR_LINES}
            />
          </Figure>
          <path d={FIDDLE} fill={INK} stroke={PAPER} strokeWidth={1.2} />
          <path d={FIDDLE_NECK} stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
          <path d={BOW} stroke={INK} strokeWidth={1.4} />
          <Figure parts={SQUIRE} halo={1.4}>
            <path
              d={SQUIRE_CUTS + SQUIRE_HAIR}
              transform={headAt(1, SQ_HEAD.at, SQ_HEAD.rot, SQ_HEAD.scale)}
              fill={PAPER}
            />
            <path
              d={NECKCLOTH}
              transform={headAt(1, SQ_HEAD.at, SQ_HEAD.rot, SQ_HEAD.scale)}
              fill={PAPER}
            />
          </Figure>
          <Figure parts={MRS_C} halo={1.4}>
            <TurbanHead
              t={headAt(-1, MRS_C_HEAD.at, MRS_C_HEAD.rot, MRS_C_HEAD.scale)}
              d={HEAD_LADY}
              cuts={LADY_CUTS}
              feather
            />
          </Figure>
          <Figure parts={YOUNG_MAN} halo={1.4}>
            <path
              d={PLAIN_CUTS + PLAIN_HAIR}
              transform={headAt(1, MAN_HEAD.at, MAN_HEAD.rot, MAN_HEAD.scale)}
              fill={PAPER}
            />
            <path
              d={NECKCLOTH}
              transform={headAt(1, MAN_HEAD.at, MAN_HEAD.rot, MAN_HEAD.scale)}
              fill={PAPER}
            />
          </Figure>
          <Figure parts={YOUNG_LADY} halo={1.4}>
            <path
              d={LADY_CUTS}
              transform={headAt(-1, LADY_HEAD.at, LADY_HEAD.rot, LADY_HEAD.scale)}
              fill={PAPER}
            />
          </Figure>
        </g>
        {/* the door-case, cut round in paper */}
        <path
          d={`M${DOOR.x0 - 6} ${FLOOR}V${DOOR.y0 - 6}H${DOOR.x1 + 6}V${FLOOR}`}
          fill="none"
          stroke={INK}
          strokeWidth={12}
        />
        <path
          d={`M${DOOR.x0 - 12} ${FLOOR}V${DOOR.y0 - 12}H${DOOR.x1 + 12}V${FLOOR}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />

        {/* the card-table against which she sits, its candle and a pack of cards */}
        <path d="M562 214V316M736 214V316M580 214V306M720 214V306" stroke={INK} strokeWidth={5} />
        <path d="M562 214V316M736 214V316" stroke={PAPER} strokeWidth={1} />
        <path d={CARD_TABLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g fill={PAPER} stroke={INK} strokeWidth={0.8}>
          <path d="M688 204L704 202L706 206L690 208Z" />
          <path d="M694 203L710 200L712 204L696 207Z" />
        </g>
        <path d="M644 206H660L656 200H648Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <rect x={649} y={180} width={6} height={21} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d={`M${CANDLE[0]} 179C${CANDLE[0] - 3.4} 175 ${CANDLE[0] - 2.4} 170 ${CANDLE[0]} 163C${CANDLE[0] + 2.4} 170 ${CANDLE[0] + 3.4} 175 ${CANDLE[0]} 179Z`}
          fill={RED}
        />

        {/* Godfrey, standing over her, one hand held out */}
        <Figure parts={GODFREY} halo={2}>
          <path d={STOCKINGS} fill={PAPER} stroke={INK} strokeWidth={1.2} />
          <path d={NECKCLOTH} transform={GOD_T} fill={PAPER} />
          <path d={GODFREY_CUTS} transform={GOD_T} fill={PAPER} />
          <PaperHair t={GOD_T} d={GODFREY_HAIR} lines={GODFREY_CURLS} />
          <path d={HOLD_CUTS} transform={handAt(GOD_ARM, 1, GOD_HAND)} fill={PAPER} />
          <path
            d={GRIP_CUTS}
            transform={handAt(GOD_FAR_ARM, 1, { parts: GRIP_HAND, scale: 1.1 })}
            fill={PAPER}
          />
        </Figure>

        {/* Nancy, on her chair against the card-table */}
        <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={NANCY_GOWN} fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round" />
        <path
          d={NANCY_GOWN}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${id.gown})`}>
          <path d={TWILL} stroke={INK} strokeWidth={LINE.hairline} fill="none" />
        </g>
        <path d={TUCKER} fill="none" stroke={INK} strokeWidth={1} />
        <Figure parts={NANCY_ARMS} halo={1.6} />
        <path d={HEAD_NANCY} transform={NT} fill={PAPER} stroke={PAPER} strokeWidth={3.6} />
        <NancyHead t={NT} blush />
      </g>
    </>
  )
}

export const theNewYearsEveDance: LinocutArt = { width: W, height: H, Draw: TheNewYearsEveDance }
