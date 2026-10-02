import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Mistletoe, OvalMirror, Sconce, wainscot, WAINSCOT_LINE } from './white-parlour'
import {
  EppieHead,
  Figure,
  GODFREY_CURLS,
  GODFREY_CUTS,
  GODFREY_HAIR,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_EPPIE_CHILD,
  HEAD_GODFREY,
  HEAD_KIMBLE,
  HEAD_NANCY,
  HEAD_PLAIN,
  HEAD_SILAS,
  HOLD_CUTS,
  HOLD_HAND,
  KIMBLE_CUTS,
  MOB_CAP,
  MOB_CAP_FRILL,
  NECKCLOTH,
  NancyHead,
  OPEN_HAND,
  PLAIN_CUTS,
  PLAIN_HAIR,
  PRAY_CUTS,
  PRAY_HANDS,
  PaperHair,
  SHIRT_COLLAR,
  SilasFace,
  TurbanHead,
  gown,
  handAt,
  headAt,
  line,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 13: "Silas at the Red House", the tenth moment in the guide's
 * timeline, at the instant of its quotation. Every detail is from the text
 * (the held edition, src/data/full-texts/silas-marner.ts):
 *
 * - "There were two doors by which the White Parlour was entered from the
 *   hall, and they were both standing open for the sake of air; but the lower
 *   one was crowded with the servants and villagers, and only the upper
 *   doorway was left free"; "the back regions of the house were left in
 *   solitude". So Silas has come in at the upper doorway, on the left, out of
 *   the empty dark hall, and the lower doorway, on the right, is packed with
 *   servants in caps and villagers looking on. The room is the White Parlour
 *   of the dance (./white-parlour.tsx): white wainscot, oval mirrors, tallow
 *   candles among berried holly, the mistletoe.
 * - "It was his own child, carried in Silas Marner's arms"; "the pretty
 *   child, who, half alarmed and half attracted by the brightness and the
 *   numerous company, now frowned and hid her face, now lifted up her head
 *   again and looked round". So the child sits on his arm, held close, at
 *   the moment she hides her face against him (Mrs Kimble is reaching for
 *   her): the Eppie of the snow panel, her curls in paper, wrapped in the
 *   same dark shawl, the little bonnet at her back.
 * - "'Why, you'd better leave the child here, then, Master Marner,' said
 *   good-natured Mrs. Kimble, hesitating, however, to take those dingy
 *   clothes into contact with her own ornamented satin bodice"; "'No—no—I
 *   can't part with it, I can't let it go,' said Silas, abruptly. 'It's come
 *   to me—I've a right to keep it.'" So Mrs Kimble, stout, in her turban,
 *   holds out a hand towards the child and stops short of her, her pale
 *   ornamented bodice drawn back; Silas holds the child to him and faces her.
 * - "'What child is it?' said several ladies at once, and, among the rest,
 *   Nancy Lammeter, addressing Godfrey"; Godfrey, "trying to control himself,
 *   but conscious that if any one noticed him, they must see that he was
 *   white-lipped and trembling". So Nancy turns up to him, and he stands
 *   stiff, staring at the child, his fists shut at his sides. He is in the
 *   dancing clothes of the dance panel: pale stockings, low shoes.
 *
 * No spot colour falls on anyone: it is in the candles and the holly, the
 * brightness the child is "half attracted by".
 *
 * Seeds: 1001 (the hall), 1002 (the floor), 1003 (the second hall, behind
 * the crowd), 1004 (the twill of Nancy's silk).
 */

const W = 860
const H = 340
/** The White Parlour's skirting. */
const FLOOR = 238
/** The upper doorway, from the empty hall; the lower doorway, crowded. */
const DOOR = { x0: 30, x1: 122, y0: 36 }
const LOWER = { x0: 700, x1: 800, y0: 36 }

type Marks = { hall: string; lowerHall: string; floor: string; shade: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The hall beyond each door is unlit: nearly solid ink, a few cuts where
  // the parlour's light reaches in.
  const hall = gougeField(
    rng(1001),
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.y0 + 4, y1: FLOOR },
    (x) => clamp((x - DOOR.x0) / 200) * 0.5,
    { spacing: 6.4, len: [8, 30] },
  )
  const lowerHall = gougeField(
    rng(1003),
    { x0: LOWER.x0, x1: LOWER.x1, y0: LOWER.y0 + 4, y1: FLOOR },
    (x) => clamp((LOWER.x1 - x) / 200) * 0.5,
    { spacing: 6.4, len: [8, 30] },
  )
  const f = rng(1002)
  let floor = ''
  const V = [430, 30]
  // Only the boards that reach the sheet.
  for (let xt = -30; xt < 900; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.6 + t0 * 2.4,
        0.6 + t1 * 2.4,
      )
      t0 = t1 + between(f, 0.02, 0.08)
    }
  }
  // The skirting's shadow, and pools under the figures.
  let shade = ''
  for (let y = FLOOR + 1; y < FLOOR + 12; y += 3)
    shade += gouge(0, y, W, y, 1.8 - (y - FLOOR) * 0.14)
  const pool = (x0: number, x1: number, yc: number) => {
    for (let y = yc - 6; y < yc + 6; y += 3) {
      const w = 1 - Math.abs(y - yc) / 6
      shade += gouge(x0 - w * 6, y, x1 + w * 6, y + 0.5, 0.5 + w * 1.4)
    }
  }
  pool(150, 200, 308)
  pool(272, 352, 310)
  pool(424, 476, 310)
  pool(516, 566, 312)
  cached = { hall, lowerHall, floor, shade }
  return cached
}

// ── SILAS, in from the snow, the child held to him ──────────────────────────
/**
 * He leans a little back from Mrs Kimble, both arms closed round the child.
 * (In the first cut the child sat on his arm facing out towards her, and he
 * looked to be handing the child over: the opposite of the text.)
 */
const SILAS_HEAD = { d: HEAD_SILAS, at: [182, 96] as P, rot: 6, scale: 1.22 }
/** His near arm under the child, drawn after her; his far arm round her back, behind her. */
const CARRY_ARM: P[] = [
  [178, 132],
  [186, 172],
  [218, 170],
]
const CARRY_HAND = { parts: HOLD_HAND, scale: 1, rot: -50 }
const SILAS: Part[] = man({
  facing: 1,
  neck: [176, 124],
  hip: [182, 206],
  head: SILAS_HEAD,
  body: { width: 28, tails: 16, front: 2, flare: 3 },
  arm: 8.5,
  leg: 9.5,
  near: {
    arm: [],
    leg: [
      [184, 208],
      [188, 258],
      [190, 306],
    ],
  },
  far: {
    arm: [
      [174, 130],
      [198, 134],
      [226, 130],
    ],
    leg: [
      [178, 208],
      [170, 258],
      [164, 304],
    ],
    hand: { parts: HOLD_HAND, scale: 1, rot: 60 },
  },
})
const SILAS_ARM: Part[] = [
  { d: line(CARRY_ARM), w: 8.5, sep: 1.4 },
  ...CARRY_HAND.parts.map((q) => ({ ...q, t: handAt(CARRY_ARM, 1, CARRY_HAND) })),
]

// ── THE CHILD, clinging to him, her face hidden against his neck ────────────
/**
 * Facing him, her head under his chin and tipped down into his chest, the
 * eyes shut: "now frowned and hid her face". Her curls are turned to the room
 * and to Mrs Kimble. (The head was first placed facing out, towards Mrs
 * Kimble, with the bonnet over her face; the review of 2 October 2026 found
 * that it read as a child held out with something pressed to her mouth, the
 * opposite of the text. She now faces him, and the bonnet hangs at her back.)
 */
const CHILD_HEAD = { d: HEAD_EPPIE_CHILD, at: [210, 124] as P, rot: -12, scale: 1 }
/** Her body in the shawl against his chest, her knees drawn up to him. */
const CHILD_BODY =
  'M196 138C202 130 218 128 226 136C232 144 234 158 230 170L200 174C194 164 192 148 196 138Z'
const CHILD_FEET = 'M194 172L202 171Q204 176 200 178L193 178Z'
/** Her small hand, clinging to his coat. */
const CHILD_HAND = 'M192 140C195 136 200 136 202 139C200 143 195 144 192 143Z'
/** The little bonnet dangling at her back, below her curls, turned to Mrs Kimble. */
const BONNET = 'M223 147C225 141 233 139 237 143C239 149 236 154 231 154C226 154 223 152 223 147Z'
const BONNET_BRIM = 'M227 143Q231 137 237 141'

// ── MRS KIMBLE, holding out a hand to the child, and holding it back ────────
const KIMBLE_HEAD = { d: HEAD_KIMBLE, at: [326, 104] as P, rot: -8, scale: 1.12 }
const KIMBLE_NECK: P = [330, 132]
/**
 * Her near hand held out towards the child and stopped a clear gap short of
 * the dingy shawl: she offers, and hesitates.
 */
const KIMBLE_ARM: P[] = [
  [324, 146],
  [306, 168],
  [288, 158],
]
const KIMBLE_HAND = { parts: OPEN_HAND, scale: 1, rot: -16 }
const KIMBLE: Part[] = man({
  facing: -1,
  neck: KIMBLE_NECK,
  hip: [332, 196],
  head: KIMBLE_HEAD,
  robe: gown(KIMBLE_NECK, [334, 308], { width: 48, waist: 22, foot: 72, bust: 9 }),
  arm: 9.5,
  feet: false,
  near: { arm: KIMBLE_ARM, leg: [], hand: KIMBLE_HAND },
  far: {
    arm: [
      [336, 146],
      [348, 170],
      [336, 168],
    ],
    leg: [],
  },
})
/** Her ornamented satin bodice, cut pale, with a band of ornament. */
const BODICE = 'M314 140Q328 134 344 138L348 154Q331 158 312 156Z'
const ORNAMENT: P[] = [
  [318, 146],
  [324, 147],
  [330, 147],
  [336, 146],
  [342, 145],
]

// ── NANCY, turned up to Godfrey ─────────────────────────────────────────────
const NANCY_HEAD = { d: HEAD_NANCY, at: [452, 126] as P, rot: -10, scale: 1 }
const NANCY_NECK: P = [452, 150]
const NANCY_GOWN = gown(NANCY_NECK, [456, 306], { width: 24, waist: 14, foot: 40, bust: 3 })
/**
 * Her hands folded at her high waist: she turns up to him and asks, and does
 * not reach for him. The forearms come forward to the front of the gown and
 * the hands are clasped there, palm to palm, the fingers pointing down and
 * cut apart, all inside the pale gown. (Held forward at first, her open hand
 * pointed at him. Then each arm was given an open hand turned up at the
 * front of the gown, and the review of 2 October 2026 found that one hand,
 * fingers spread past the edge of the gown, still read as a hand held out to
 * him.)
 */
const NANCY_NEAR_ARM: P[] = [
  [454, 158],
  [451, 180],
  [459, 182],
]
const NANCY_FAR_ARM: P[] = [
  [450, 158],
  [447, 180],
  [457, 183],
]
const NANCY_HANDS = { parts: PRAY_HANDS, scale: 0.62, rot: 62 }
const NANCY_HANDS_AT = handAt(NANCY_NEAR_ARM, 1, NANCY_HANDS)
const NANCY_ARMS: Part[] = [
  { d: line(NANCY_FAR_ARM), w: 6.2 },
  { d: line(NANCY_NEAR_ARM), w: 6.2, sep: 1.4 },
  ...NANCY_HANDS.parts.map((q) => ({ ...q, t: NANCY_HANDS_AT })),
]
/** The fine twill of her silvery silk: short broken cuts, clipped to the gown. */
const TWILL = (() => {
  const r = rng(1004)
  let d = ''
  for (let x = 420; x < 492; x += 7) {
    let t = between(r, 0, 10)
    while (t < 160) {
      const len = between(r, 5, 11)
      d += `M${x + t * 0.2} ${150 + t}l${len * 0.2} ${len}`
      t += len + between(r, 5, 9)
    }
  }
  return d
})()

// ── GODFREY, white-lipped, staring at the child ─────────────────────────────
const GOD_HEAD = { d: HEAD_GODFREY, at: [530, 82] as P, rot: -6, scale: 1.08 }
const GOD_NEAR_LEG: P[] = [
  [538, 198],
  [534, 254],
  [530, 312],
]
const GOD_FAR_LEG: P[] = [
  [546, 198],
  [552, 254],
  [556, 310],
]
const GOD_NEAR_ARM: P[] = [
  [532, 120],
  [526, 158],
  [528, 190],
]
const GOD_FAR_ARM: P[] = [
  [542, 120],
  [550, 158],
  [548, 188],
]
const FIST = { parts: GRIP_HAND, scale: 1.1, rot: 80 }
const GODFREY: Part[] = man({
  facing: -1,
  neck: [536, 110],
  hip: [542, 196],
  head: GOD_HEAD,
  body: { width: 58, tails: 62, front: 2, flare: 5 },
  arm: 13,
  leg: 15,
  near: { arm: GOD_NEAR_ARM, leg: GOD_NEAR_LEG, hand: FIST },
  far: { arm: GOD_FAR_ARM, leg: GOD_FAR_LEG, hand: FIST },
})
const GOD_T = headAt(-1, GOD_HEAD.at, GOD_HEAD.rot, GOD_HEAD.scale)
const STOCKINGS = [GOD_NEAR_LEG, GOD_FAR_LEG]
  .map(([, k, a]) => {
    const kx = k[0] + (a[0] - k[0]) * 0.12
    const ky = k[1] + (a[1] - k[1]) * 0.12
    return `M${kx - 5.6} ${ky}L${kx + 5.6} ${ky}L${a[0] + 4.4} ${a[1] - 6}L${a[0] - 4.4} ${a[1] - 6}Z`
  })
  .join('')
/** "white-lipped": the line of his mouth cut wide and pale. */
const WHITE_LIPS = gouge(10.6, 11.4, 17, 11, 0.9)

// ── THE LOWER DOORWAY, crowded with servants and villagers ──────────────────
/**
 * Standing in the doorway, facing into the room, packed close: a maid in her
 * cap, villagers, another maid, those behind a little higher. Their bodies run
 * down into the dark of the hall to the floor. (Closed off at the chest in
 * the first cut, they read as a row of marble busts.)
 */
const CROWD: { at: P; scale: number; cap: boolean }[] = [
  { at: [790, 98], scale: 0.9, cap: false },
  { at: [766, 110], scale: 0.86, cap: true },
  { at: [742, 100], scale: 0.9, cap: false },
  { at: [716, 116], scale: 0.84, cap: true },
]
const BODY = (at: P, s: number) =>
  `M${at[0] - 18 * s} ${FLOOR}C${at[0] - 20 * s} ${at[1] + 60 * s} ${at[0] - 12 * s} ${at[1] + 26 * s} ${at[0] + 2 * s} ${at[1] + 22 * s}C${at[0] + 16 * s} ${at[1] + 24 * s} ${at[0] + 22 * s} ${at[1] + 60 * s} ${at[0] + 20 * s} ${FLOOR}Z`

function SilasAtTheRedHouse({ uid }: ArtProps) {
  const m = marks()
  const st = headAt(1, SILAS_HEAD.at, SILAS_HEAD.rot, SILAS_HEAD.scale)
  const ct = headAt(-1, CHILD_HEAD.at, CHILD_HEAD.rot, CHILD_HEAD.scale)
  const kt = headAt(-1, KIMBLE_HEAD.at, KIMBLE_HEAD.rot, KIMBLE_HEAD.scale)
  const nt = headAt(1, NANCY_HEAD.at, NANCY_HEAD.rot, NANCY_HEAD.scale)
  const gownClip = `${uid}-gown`
  return (
    <>
      <defs>
        <clipPath id={gownClip}>
          <path d={NANCY_GOWN} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [200, 150], push: 1.03 })}>
        {/* the white wainscot, brilliantly lit */}
        <rect x={0} y={0} width={W} height={FLOOR} fill={PAPER} />
        <path
          d={wainscot(-10, W + 20, 18, 146, FLOOR, 108)}
          fill="none"
          stroke={INK}
          strokeWidth={WAINSCOT_LINE}
        />
        <rect x={0} y={0} width={W} height={12} fill={INK} />
        <rect x={0} y={20} width={W} height={3} fill={INK} />
        <rect x={0} y={144} width={W} height={3.4} fill={INK} />
        <rect x={0} y={FLOOR - 6} width={W} height={6} fill={INK} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shade} fill={INK} />
        <OvalMirror cx={466} cy={70} rx={18} ry={24} />
        <OvalMirror cx={640} cy={70} rx={18} ry={24} />
        <Sconce x={246} y={44} />
        <Sconce x={384} y={44} delay={0.3} />
        <Sconce x={650} y={110} delay={0.6} />
        <Mistletoe x={360} y={12} drop={6} />

        {/* the upper doorway, open on the empty dark hall */}
        <rect
          x={DOOR.x0 - 10}
          y={DOOR.y0 - 10}
          width={DOOR.x1 - DOOR.x0 + 20}
          height={FLOOR - DOOR.y0 + 10}
          fill={PAPER}
        />
        <rect
          x={DOOR.x0}
          y={DOOR.y0}
          width={DOOR.x1 - DOOR.x0}
          height={FLOOR - DOOR.y0}
          fill={INK}
        />
        <path d={m.hall} fill={PAPER} />
        <path
          d={`M${DOOR.x0 - 4} ${FLOOR}V${DOOR.y0 - 4}H${DOOR.x1 + 4}V${FLOOR}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path
          d={`M${DOOR.x0 - 10} ${FLOOR}V${DOOR.y0 - 10}H${DOOR.x1 + 10}V${FLOOR}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
        />

        {/* the lower doorway, crowded with servants and villagers looking on */}
        <rect
          x={LOWER.x0 - 10}
          y={LOWER.y0 - 10}
          width={LOWER.x1 - LOWER.x0 + 20}
          height={FLOOR - LOWER.y0 + 10}
          fill={PAPER}
        />
        <rect
          x={LOWER.x0}
          y={LOWER.y0}
          width={LOWER.x1 - LOWER.x0}
          height={FLOOR - LOWER.y0}
          fill={INK}
        />
        <path d={m.lowerHall} fill={PAPER} />
        {CROWD.map(({ at, scale, cap }) => {
          const t = headAt(-1, at, 0, scale)
          return (
            <Figure key={at[0]} parts={[{ d: BODY(at, scale) }, { d: HEAD_PLAIN, t }]} halo={1.4}>
              <path d={cap ? PLAIN_CUTS : PLAIN_CUTS + PLAIN_HAIR} transform={t} fill={PAPER} />
              {cap && (
                <g transform={t}>
                  <path
                    d={MOB_CAP}
                    fill={PAPER}
                    stroke={INK}
                    strokeWidth={1}
                    strokeLinejoin="round"
                  />
                  <path d={MOB_CAP_FRILL} fill="none" stroke={INK} strokeWidth={0.8} />
                </g>
              )}
            </Figure>
          )
        })}
        <path
          d={`M${LOWER.x0 - 4} ${FLOOR}V${LOWER.y0 - 4}H${LOWER.x1 + 4}V${FLOOR}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />

        {/* Godfrey, stiff, his fists shut, staring at the child */}
        <Figure parts={GODFREY} halo={2}>
          <path d={STOCKINGS} fill={PAPER} stroke={INK} strokeWidth={1.2} />
          <path d={NECKCLOTH} transform={GOD_T} fill={PAPER} />
          <path d={GODFREY_CUTS + WHITE_LIPS} transform={GOD_T} fill={PAPER} />
          <PaperHair t={GOD_T} d={GODFREY_HAIR} lines={GODFREY_CURLS} />
          {[GOD_NEAR_ARM, GOD_FAR_ARM].map((arm) => (
            <path key={arm[2][0]} d={GRIP_CUTS} transform={handAt(arm, -1, FIST)} fill={PAPER} />
          ))}
        </Figure>

        {/* Nancy, turned up to him: "What child is it?" */}
        <path d={NANCY_GOWN} fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round" />
        <path
          d={NANCY_GOWN}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${gownClip})`}>
          <path d={TWILL} stroke={INK} strokeWidth={LINE.hairline} fill="none" />
        </g>
        <Figure parts={NANCY_ARMS} halo={1.6}>
          {/* stroked as well as filled: at this scale the cuts alone close up (see PRAY_HANDS) */}
          <path
            d={PRAY_CUTS}
            transform={NANCY_HANDS_AT}
            fill={PAPER}
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        </Figure>
        <path d={HEAD_NANCY} transform={nt} fill={PAPER} stroke={PAPER} strokeWidth={3.6} />
        <NancyHead t={nt} />

        {/* Mrs Kimble, her hand out to the child and stopped short */}
        <Figure parts={KIMBLE} halo={2}>
          <path d={BODICE} fill={PAPER} stroke={INK} strokeWidth={1} />
          <g fill={INK}>
            {ORNAMENT.map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r={1.3} />
            ))}
          </g>
          <TurbanHead t={kt} d={HEAD_KIMBLE} cuts={KIMBLE_CUTS} />
        </Figure>

        {/* Silas, the child held to him */}
        <Figure parts={SILAS} halo={2}>
          <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
          <SilasFace t={st} look={1} />
        </Figure>
        <Figure
          parts={[
            { d: BONNET },
            { d: CHILD_BODY },
            { d: CHILD_FEET },
            { d: HEAD_EPPIE_CHILD, t: ct },
            { d: CHILD_HAND },
          ]}
          halo={2}
        >
          <path d={BONNET} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d={BONNET_BRIM} fill="none" stroke={INK} strokeWidth={0.8} />
          <path
            d="M202 146Q214 152 226 148M202 160Q214 164 228 160"
            fill="none"
            stroke={PAPER}
            strokeWidth={1}
          />
          <EppieHead t={ct} asleep />
          <path d={CHILD_HAND} fill={INK} stroke={PAPER} strokeWidth={1} />
        </Figure>
        <Figure parts={SILAS_ARM} halo={1.6}>
          <path d={HOLD_CUTS} transform={handAt(CARRY_ARM, 1, CARRY_HAND)} fill={PAPER} />
        </Figure>
      </g>
    </>
  )
}

export const silasAtTheRedHouse: LinocutArt = { width: W, height: H, Draw: SilasAtTheRedHouse }
