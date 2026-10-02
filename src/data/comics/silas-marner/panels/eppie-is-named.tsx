import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  DollyHead,
  EppieHead,
  Figure,
  HEAD_DOLLY,
  HEAD_EPPIE_CHILD,
  HEAD_SILAS,
  HOLD_CUTS,
  HOLD_HAND,
  OPEN_HAND,
  SHIRT_COLLAR,
  SPREAD_HAND,
  SilasFace,
  handAt,
  headAt,
  line,
  man,
  seatedGown,
  type Hand,
  type P,
  type Part,
} from './people'

/**
 * Chapter 14: "Eppie is named", the eleventh moment in the guide's timeline.
 * Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "the same day Dolly brought her bundle, and displayed to Marner, one by
 *   one, the tiny garments in their due order of succession, most of them
 *   patched and darned, but clean and neat as fresh-sprung herbs"; "Marner
 *   took her on his lap, trembling with an emotion mysterious to himself";
 *   "He took the garments from Dolly, and put them on under her teaching". So
 *   Silas sits with the child on his lap and his arm round her, and Dolly
 *   holds up the next of the little garments, a patched frock, with the rest
 *   folded on her knee. The naming comes in the same visit ("My mother's name
 *   was Hephzibah ... We called her Eppie").
 * - Dolly has just put on "the little shirt", which "goes first, next the
 *   skin", after the washing "from which Baby came out in new beauty". So the
 *   child sits in a little white shirt that falls to her feet, reaching for
 *   the frock. She is "a two-year-old child", the Eppie of the kit (EppieHead:
 *   "soft yellow rings all over its head").
 * - "bringing his eyes very close, that they might be initiated in the
 *   mysteries": his head is bent close over her. He is the withered, pale
 *   Silas of Part One (SilasFace), his hair still dark.
 * - Dolly is the kit's Dolly, in her cap, with a kerchief and an apron. Her
 *   bloom is left off here: beside her eye, at panel size, the red read as a
 *   sore eye.
 * - The cottage: "his fireside chair" and "the two logs" of Chapter 12; "It's
 *   lucky as you've got that high hearth i'stead of a grate, for that keeps the
 *   fire more out of her reach"; "the kettle-hanger" (Chapter 4); the bricks of
 *   the floor "under the sprinkling of sand" (Chapter 4); "what shall you do
 *   when you're forced to sit in your loom?" So the fire burns on a raised
 *   brick hearth with a kettle on its hanger above it, and the loom stands idle
 *   behind Dolly. The room is laid out as "Fifteen years at the loom" draws it
 *   (window, then loom, then hearth, from left to right), seen from nearer the
 *   hearth, so the window is out of the picture to the left and its daylight
 *   falls on the loom.
 *
 * The spot colour is the fire. The quotation is the thought this moment gives
 * Silas: the gold, which the panels of Part One print in red, has turned into
 * this child.
 *
 * Built in a frame with the hearth on the left and printed mirrored (MIRROR),
 * so that the hearth stands on the right as it does in Chapter 2's panel. The
 * wall, the floor and the loom are drawn unmirrored.
 *
 * Seeds: 1401 (the wall), 1402 (the sand), 1403 (the firelight).
 */

const W = 860
const H = 340
const FLOOR = 288
/** Everything built in the hearth-on-the-left frame is printed through this. */
const MIRROR = `translate(${W} 0) scale(-1 1)`
/** The raised brick hearth the fire burns on, in the built frame. */
const HEARTH_TOP = 236
const FIRE: P = [92, HEARTH_TOP]

type Marks = {
  wall: string
  bricks: string
  floor: string
  sand: string
  glow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // As printed: daylight from the window beyond the loom, out of the picture
  // on the left, and the fire low on the right.
  const light = (x: number, y: number) => {
    const a = clamp(1 - Math.hypot((x + 40) * 0.62, (y - 110) * 1.1) / 400)
    const b = clamp(1 - Math.hypot((x - (W - FIRE[0])) * 0.9, (y - FIRE[1]) * 1.3) / 210) * 0.7
    return Math.max(a, b, 0.05)
  }
  const wall = gougeField(rng(1401), { x0: 0, x1: W - 170, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [12, 46],
  })

  // The brick chimney-breast (built frame): courses cut in paper, the joints staggered.
  let bricks = ''
  for (let y = 14, i = 0; y < 104; y += 13, i++) {
    bricks += `M2 ${y}H176`
    for (let x = 8 + (i % 2) * 17; x < 176; x += 34) bricks += `M${x} ${y}V${y + 13}`
  }
  for (let y = HEARTH_TOP + 12, i = 0; y < FLOOR; y += 12, i++) {
    bricks += `M10 ${y}H170`
    for (let x = 16 + (i % 2) * 16; x < 170; x += 32) bricks += `M${x} ${y}V${y + 12}`
  }

  // The brick floor in perspective, its courses widening towards the eye.
  let floor = ''
  const rows = [FLOOR, FLOOR + 6, FLOOR + 13, FLOOR + 22, FLOOR + 33, H]
  for (let i = 0; i < rows.length - 1; i++) {
    const y = rows[i]
    floor += gouge(0, y, W, y, 0.6 + i * 0.22)
    const step = 22 + i * 7
    for (let x = (i % 2) * (step / 2); x < W; x += step)
      floor += `M${n(x)} ${n(y)}L${n(x + (x - 430) * 0.06)} ${n(rows[i + 1])}`
  }
  const s = rng(1402)
  let sand = ''
  for (let k = 0; k < 110; k++) {
    const x = between(s, 220, 670)
    const y = between(s, FLOOR + 3, H - 6)
    sand += `M${n(x)} ${n(y)}h1.3`
  }
  const glow = rays(rng(1403), FIRE[0], FIRE[1] - 14, { from: 24, to: 74, every: 9, width: 2.2 })
  cached = { wall, bricks, floor, sand, glow }
  return cached
}

/** A limb as parts: a stroke `w` wide along `pts`, and the hand at its end. */
function arm(pts: P[], w: number, hand: Hand | null, facing: 1 | -1): Part[] {
  return [
    { d: line(pts), w },
    ...(hand ? hand.parts.map((q) => ({ ...q, t: handAt(pts, facing, hand) })) : []),
  ]
}

// ── SILAS, in his fireside chair, the child on his lap (built frame) ────────
const S_HEAD = { d: HEAD_SILAS, at: [262, 140] as P, rot: 16, scale: 1.42 }
const S_NECK: P = [246, 174]
const S_HIP: P = [222, 240]
/** His near arm round her, in front of her. */
const S_HOLD: P[] = [
  [254, 188],
  [264, 228],
  [298, 234],
]
const S_HOLD_HAND: Hand = { parts: OPEN_HAND, scale: 1, rot: -50 }
const SILAS: Part[] = man({
  facing: 1,
  neck: S_NECK,
  hip: S_HIP,
  head: S_HEAD,
  body: { width: 30, tails: 8, front: 2, flare: 3 },
  arm: 8.6,
  leg: 10,
  near: {
    arm: [],
    leg: [
      [226, 244],
      [334, 242],
      [340, 286],
    ],
  },
  far: {
    arm: [],
    leg: [
      [220, 248],
      [326, 248],
      [330, 286],
    ],
  },
})

// ── EPPIE, two years old, in her little shirt ──────────────────────────────
const E_HEAD = { at: [294, 180] as P, scale: 1.14 }
/** The little shirt: sitting on his thigh, it falls over her legs to her feet. */
const SHIFT =
  'M290 199C294 197 302 197 306 199L312 206C314 216 316 226 320 236L326 240C328 248 329 254 330 262C324 265 316 265 312 262L312 247C302 248 290 247 283 244C283 230 285 214 288 204Z'
const SHIFT_FOLDS = 'M296 206Q298 224 296 244M318 244Q320 252 320 262'
/** Her feet below the hem. */
const E_FEET =
  'M314 263C314 267 318 269 323 268C325 267 324 264 321 263ZM324 262C324 266 328 268 333 267C335 266 334 263 331 262Z'
/** Her near arm, reaching for the little frock. */
const E_ARM: P[] = [
  [304, 206],
  [316, 214],
  [332, 205],
]
const E_HAND: Hand = { parts: SPREAD_HAND, scale: 0.5, rot: -6 }

// ── DOLLY, on her chair, holding up the next of the tiny garments ──────────
const D_HEAD = { d: HEAD_DOLLY, at: [440, 150] as P, rot: -10, scale: 1.38 }
const D_NECK: P = [452, 178]
const D_HIP: P = [484, 242]
const D_KNEE: P = [432, 244]
const D_ARM: P[] = [
  [444, 192],
  [420, 220],
  [394, 202],
]
const D_HAND: Hand = { parts: HOLD_HAND, scale: 1.05, rot: -30 }
const DOLLY: Part[] = man({
  facing: -1,
  neck: D_NECK,
  hip: D_HIP,
  head: D_HEAD,
  robe: seatedGown(D_NECK, D_HIP, D_KNEE, FLOOR, -1, { width: 32, lap: 13 }),
  feet: false,
  near: { arm: [], leg: [] },
  far: { arm: [], leg: [] },
})
/** Her apron over her lap and knees, and her kerchief. Paper, outlined. */
const APRON = 'M470 222L432 230L426 244L425 280L440 282L446 248L474 236Z'
const KERCHIEF = 'M440 182C448 180 458 179 464 182L470 196C462 202 452 204 444 202Z'
/** The rest of the tiny garments, folded in a pile on her knee. */
const PILE = ['M444 220H474V228H444Z', 'M446 212H472V220H446Z', 'M449 205H469V212H449Z']
/** The little frock she holds up, patched and darned. */
const FROCK =
  'M372 196Q378 200 384 196L388 197Q397 197 396 206L389 207L389 210L397 237Q390 241 384 238Q378 242 372 238Q366 241 359 237L367 210L367 207L360 206Q359 197 368 197Z'
const FROCK_LINES = 'M367 210H389M372 213L368 236M384 213L388 236M375 219H382V226H375Z'

// ── THE ROOM'S FURNITURE (built frame) ─────────────────────────────────────
type ChairShape = { back: string; seat: string; legs: string }
/** His fireside chair: the back behind him, the seat, the legs. */
const S_CHAIR: ChairShape = {
  back: 'M196 288L192 156L202 154L208 288Z',
  seat: 'M196 244H262V252H196Z',
  legs: 'M258 252V288M214 252V288',
}
/** Dolly's chair, facing his. */
const D_CHAIR: ChairShape = {
  back: 'M506 288L512 160L522 162L516 288Z',
  seat: 'M448 248H516V256H448Z',
  legs: 'M452 256V288M494 256V288',
}

function Chair({ c }: { c: ChairShape }) {
  return (
    <>
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round">
        <path d={c.back} />
        <path d={c.seat} />
      </g>
      <path d={c.legs} stroke={PAPER} strokeWidth={8} />
      <path d={c.legs} stroke={INK} strokeWidth={4.6} />
      <path d={c.back} fill={INK} />
      <path d={c.seat} fill={INK} />
    </>
  )
}

// ── THE LOOM, standing idle on the left (as printed) ───────────────────────
// Its weaver's end faces the window, as in Chapter 2's panel: the bench and
// the breast beam on the left, the warp running back to the right.
const L = {
  front: 70,
  back: 252,
  top: 70,
  breast: [86, 194] as P,
  cloth: [90, 242] as P,
  fell: [128, 193] as P,
  heddle: 184,
  backBeam: [242, 186] as P,
}
const LOOM_FRAME = `M${L.front} ${L.top}V${FLOOR}M${L.back} ${L.top}V${FLOOR}M${L.front - 8} ${L.top}H${L.back + 8}M${L.front} ${FLOOR - 24}H${L.back}`
const WARP = [0, 1, 2]
  .map(
    (k) =>
      `M${L.backBeam[0]} ${L.backBeam[1] - 6 + k * 1.6}L${L.heddle} ${178 + k * 1.6}L${L.fell[0]} ${L.fell[1] - 1}` +
      `M${L.backBeam[0]} ${L.backBeam[1] - 5 + k * 1.6}L${L.heddle} ${200 + k * 1.6}L${L.fell[0]} ${L.fell[1] + 1}`,
  )
  .join('')
const CLOTH = `M${L.fell[0]} ${L.fell[1] - 3}L${L.breast[0]} ${L.breast[1] - 8}Q${L.breast[0] - 9} ${L.breast[1] - 6} ${L.breast[0] - 8} ${L.breast[1] + 4}L${L.cloth[0] - 13} ${L.cloth[1]}L${L.cloth[0] - 7} ${L.cloth[1] + 2}L${L.breast[0] + 2} ${L.breast[1] + 6}L${L.fell[0]} ${L.fell[1] + 3}Z`
const TREADLES = `M${L.back - 8} ${FLOOR - 6}L106 ${FLOOR - 14}M${L.back - 8} ${FLOOR - 3}L110 ${FLOOR - 3}`
const BATTEN = `M148 ${L.top + 8}L136 210`

function Loom() {
  return (
    <g>
      <path d={LOOM_FRAME} fill="none" stroke={PAPER} strokeWidth={12} />
      <path d={LOOM_FRAME} fill="none" stroke={INK} strokeWidth={8} />
      <path
        d={
          gouge(L.front - 1, L.top + 10, L.front - 1, FLOOR - 30, 0.7) +
          gouge(L.back - 1, L.top + 10, L.back - 1, FLOOR - 30, 0.7)
        }
        fill={PAPER}
      />
      {/* the heddles on their cords */}
      <path
        d={`M${L.heddle - 8} ${L.top + 5}V150M${L.heddle + 8} ${L.top + 5}V150M${L.heddle - 8} 228V${FLOOR - 18}M${L.heddle + 8} 228V${FLOOR - 14}`}
        stroke={PAPER}
        strokeWidth={1.3}
      />
      <path
        d={`M${L.heddle - 12} 150H${L.heddle + 12}V228H${L.heddle - 12}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <path
        d={[0, 1, 2, 3, 4, 5, 6].map((k) => `M${L.heddle - 9 + k * 3} 152V226`).join('')}
        stroke={PAPER}
        strokeWidth={LINE.hairline}
      />
      <path d={WARP} stroke={PAPER} strokeWidth={LINE.hairline} fill="none" />
      {[L.breast, L.backBeam].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r={7} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      ))}
      <path d={CLOTH} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path
        d={[0, 1, 2, 3].map((k) => `M${L.fell[0] - 8 - k * 9.6} ${L.fell[1] - 3}l0 6`).join('')}
        stroke={INK}
        strokeWidth={0.8}
      />
      <circle cx={L.cloth[0]} cy={L.cloth[1]} r={13} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path
        d={`M${L.cloth[0] - 9} ${L.cloth[1]}A9 9 0 0 1 ${L.cloth[0] + 9} ${L.cloth[1]}`}
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
      <circle cx={L.cloth[0]} cy={L.cloth[1]} r={3} fill={INK} />
      {/* the batten hanging still, and the treadles */}
      <path d={BATTEN} stroke={PAPER} strokeWidth={10} strokeLinecap="round" />
      <path d={BATTEN} stroke={INK} strokeWidth={6.4} strokeLinecap="round" />
      <path d="M131 170H141V212H131Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={TREADLES} stroke={PAPER} strokeWidth={8} />
      <path d={TREADLES} stroke={INK} strokeWidth={5} />
      {/* his bench, empty */}
      <path d="M0 214H56" stroke={PAPER} strokeWidth={11} />
      <path d="M0 214H56" stroke={INK} strokeWidth={7} />
      <path d="M6 216V288M50 216V288" stroke={PAPER} strokeWidth={8} />
      <path d="M6 216V288M50 216V288" stroke={INK} strokeWidth={5} />
    </g>
  )
}

function EppieIsNamed({ uid }: ArtProps) {
  const m = marks()
  const st = headAt(1, S_HEAD.at, S_HEAD.rot, S_HEAD.scale)
  const et = headAt(1, E_HEAD.at, 0, E_HEAD.scale)
  const dt = headAt(-1, D_HEAD.at, D_HEAD.rot, D_HEAD.scale)
  const child: Part[] = [{ d: E_FEET }, { d: SHIFT }, { d: HEAD_EPPIE_CHILD, t: et }]
  return (
    <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
      {/* the stone walls, lit from the window beyond the loom and by the fire */}
      <path d={m.wall} fill={PAPER} />
      <path
        d="M300 40H372M336 18V40M440 30H530M490 30V58M560 96H640M600 74V96M300 120H340"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />

      <g transform="translate(36 0)">
        <Loom />
      </g>

      {/* the brick floor, sprinkled with sand */}
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} stroke={INK} strokeWidth={1} fill={INK} />
      <path d={m.sand} stroke={INK} strokeWidth={0.9} />

      <g transform={MIRROR}>
        {/* the chimney-breast and the high brick hearth */}
        <rect x={0} y={0} width={178} height={FLOOR} fill={INK} />
        <path d={m.bricks} fill="none" stroke={PAPER} strokeWidth={1} />
        <rect x={0} y={104} width={184} height={7} fill={PAPER} />
        <rect x={0} y={111} width={184} height={2} fill={INK} />
        <path
          d={`M24 ${HEARTH_TOP}V150Q24 120 54 120H130Q160 120 160 150V${HEARTH_TOP}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.glow} fill={PAPER} />
        {/* the kettle on its hanger */}
        <path d="M92 122V160" stroke={PAPER} strokeWidth={1.4} />
        <path d="M84 160Q92 154 100 160" fill="none" stroke={PAPER} strokeWidth={1.4} />
        <path
          d="M76 168C76 163 82 160 92 160C102 160 108 163 108 168L110 184C110 191 102 195 92 195C82 195 74 191 74 184Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(80, 172, 80, 188, 0.9) + gouge(74, 170, 64, 164, 1.3)} fill={PAPER} />
        {/* the two logs, and the fire */}
        <path d="M58 236L118 226L122 234L62 240Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d="M68 228L128 236L124 240L64 236Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <g fill={RED}>
          <path d="M66 232C66 224 74 220 80 226C83 218 96 218 98 226C104 221 114 224 116 232Z" />
          <path className="lc-flicker" d="M78 226C75 216 80 206 84 198C88 208 94 216 89 226Z" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M96 226C95 220 98 214 100 208C103 214 106 220 103 226Z"
          />
        </g>
        {/* the raised hearth's stone top */}
        <rect x={10} y={HEARTH_TOP} width={160} height={6} fill={PAPER} />
        <rect x={10} y={HEARTH_TOP + 6} width={160} height={2} fill={INK} />

        <Chair c={S_CHAIR} />
        <Chair c={D_CHAIR} />

        {/* Dolly, the rest of the little garments folded on her knee */}
        <Figure parts={DOLLY}>
          <path d={APRON} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
          <path d="M434 254L438 278M442 252L444 270" stroke={INK} strokeWidth={0.8} />
          <g fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round">
            {PILE.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <path d="M452 224H466M454 216H464" stroke={INK} strokeWidth={0.8} />
          <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          <DollyHead t={dt} bloom={false} />
        </Figure>
        {/* the little frock, held up in her hand */}
        <path d={FROCK} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={FROCK_LINES} fill="none" stroke={INK} strokeWidth={0.8} />
        <Figure parts={arm(D_ARM, 8.4, D_HAND, -1)} halo={1.6}>
          <path d={HOLD_CUTS} transform={handAt(D_ARM, -1, D_HAND)} fill={PAPER} />
        </Figure>

        {/* Silas, bent close over the child */}
        <Figure parts={SILAS}>
          <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
          <SilasFace t={st} look={1} />
        </Figure>

        {/* the child on his lap, in her little shirt, reaching for the frock */}
        <Figure parts={child} halo={1.6}>
          <path d={SHIFT} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={SHIFT_FOLDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <EppieHead t={et} />
        </Figure>
        <Figure parts={arm(E_ARM, 4.6, E_HAND, 1)} halo={1.4} />

        {/* his near arm round her */}
        <Figure parts={arm(S_HOLD, 8.6, S_HOLD_HAND, 1)} halo={1.6} />
      </g>
    </g>
  )
}

export const eppieIsNamed: LinocutArt = { width: W, height: H, Draw: EppieIsNamed }
