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
  rng,
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
  headAt,
  man,
  type P,
} from './people'

/**
 * Chapter 20: "The second creation destroyed", the twelfth moment in the
 * guide's timeline. The panel draws the moment Victor looks up; what he does
 * next is left to the words. Every detail is from the held 1831 text:
 *
 * - "I sat one evening in my laboratory; the sun had set, and the moon was
 *   just rising from the sea; I had not sufficient light for my employment,
 *   and I remained idle". So no candle is lit: the room is dark but for the
 *   low moonlight falling in through the casement, the moon half out of the
 *   sea, and the last of the sunset a thin line of the spot colour on the
 *   horizon beside it. Victor sits idle at his bench.
 * - The hut is one of "three miserable huts" on "hardly more than a rock";
 *   "The thatch had fallen in, the walls were unplastered" before he had it
 *   repaired (Chapter 19). So the walls are bare stone and the roof is thatch
 *   on rafters. He had "to pack up my chemical instruments" afterwards, so
 *   the bench holds glass vessels and a retort, and a shelf holds jars.
 * - "I trembled, and my heart failed within me; when, on looking up, I saw,
 *   by the light of the moon, the dæmon at the casement. A ghastly grin
 *   wrinkled his lips as he gazed on me". So the Creature's head and
 *   shoulders fill the open casement, looking down into the room, his lips
 *   drawn back from his teeth ("his teeth of a pearly whiteness", Chapter 5),
 *   and Victor, on his stool, has turned his face up to him, his mouth open,
 *   one hand thrown up open before him, its fingers apart, and short cuts
 *   beside it for his trembling. (A second hand gripping the bench was tried,
 *   and at panel size the two hands met under his chin and read as prayer.)
 *
 * SAFEGUARDING, and the text. What lay on the bench is never drawn: the
 * bench is seen edge on, with only the vessels standing on it, and nothing
 * lies there. The tearing to pieces that follows, and the remains, are left
 * to the words, as are the basket and the sea.
 *
 * The Creature is the kit's (./people.tsx), with the kit's head and a grin
 * cut over its straight black lips; the grin is teeth, never red. Victor is
 * the kit's Victor, with the kit's open mouth for his horror. Seeds: 1201 (the
 * walls), 1202 (the moonlight), 1203 (the thatch), 1204 (the sea), 1205 (the
 * floor), 1206 (the night sky), 1207 (the moon's marks).
 */

const W = 860
const H = 340
/** Where the floor meets the wall. */
const FLOOR = 296
/** The underside of the thatch. */
const EAVES = 34
/** The open casement. */
const WIN = { x0: 536, x1: 712, y0: 52, y1: 196 }
/** The sea's horizon in the casement, and the moon rising from it. */
const SEA = 172
const MOON: Pt = [672, SEA]

type Marks = {
  wall: string
  thatch: string
  shaft: string
  sea: string
  glint: string
  moonRays: string
  night: string
  floor: string
  joints: string
}

/**
 * The low moonlight: a shaft falling in through the casement and spreading
 * down to the left across the wall, the bench and Victor.
 */
function inShaft(x: number, y: number) {
  if (x > WIN.x0 + 10) return 0
  const d = WIN.x0 - x
  const top = WIN.y0 + 20 + d * 0.22
  const bottom = WIN.y1 + d * 0.5
  if (y < top || y > bottom) return 0
  const edge = Math.min(y - top, bottom - y) / 26
  return clamp(edge) * clamp(1 - d / 520)
}

const light = (x: number, y: number) => Math.max(0.04, 0.9 * inShaft(x, y))

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1201)
  const wall = gougeField(r, { x0: 0, x1: W, y0: EAVES + 4, y1: FLOOR }, light, {
    spacing: 6.2,
    len: [16, 56],
    gap: [6, 18],
  })
  // The joints of the bare stone, cut in ink only where the light shows them.
  let joints = ''
  for (let y = EAVES + 30; y < FLOOR - 4; y += between(r, 22, 30)) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 30, 80)
      if (light(x + len / 2, y) > 0.2)
        joints += wedge(x, y + between(r, -1, 1), x + len, y + between(r, -1, 1), 2.4, 2.6)
      x += len + between(r, 0, 3)
    }
  }
  // Long parallel cuts along the shaft, for the moonbeam itself.
  const s = rng(1202)
  let shaft = ''
  for (let k = 0; k < 22; k++) {
    const t = k / 21
    const y0 = WIN.y0 + 24 + t * (WIN.y1 - WIN.y0 - 30)
    const slope = 0.22 + t * 0.28
    let d = between(s, 0, 20)
    while (d < 360) {
      const len = between(s, 24, 70)
      if (s() < 0.5) {
        const x1 = WIN.x0 - d
        const x2 = WIN.x0 - d - len
        shaft += gouge(x1, y0 + d * slope, x2, y0 + (d + len) * slope, 0.5 + (1 - d / 360) * 0.9)
      }
      d += len + between(s, 10, 40)
    }
  }
  // The thatch overhead, seen from below: short cuts hanging from the rafters.
  const f = rng(1203)
  let thatch = ''
  for (let x = 4; x < W; x += 4.6) {
    const len = between(f, 8, 22)
    const y = between(f, 2, 10)
    thatch += gouge(x, y, x + between(f, -2, 2), y + len, 0.7 + light(x, 60) * 1.4)
  }
  // The sea in the casement: dark water, a broken path of light under the moon.
  const v = rng(1204)
  let sea = ''
  for (let y = SEA + 4; y < WIN.y1; y += 3.8) {
    let x = WIN.x0 + between(v, -10, 0)
    while (x < WIN.x1) {
      const len = between(v, 8, 24)
      if (v() < 0.4) sea += gouge(x, y, x + len, y + between(v, -0.4, 0.4), 0.45)
      x += len + between(v, 6, 20)
    }
  }
  let glint = ''
  for (let i = 0; i < 6; i++) {
    const y = SEA + 5 + i * 3.6
    const w = 14 - i * 1.4
    glint += gouge(MOON[0] - w + between(v, -3, 3), y, MOON[0] + w + between(v, -3, 3), y, 1)
  }
  const moonRays = rays(v, MOON[0], MOON[1], { from: 22, to: 74, every: 8, width: 2 })
  // The night sky in the casement, paling towards the moon.
  const night = gougeField(
    rng(1206),
    { x0: WIN.x0, x1: WIN.x1, y0: WIN.y0 + 4, y1: SEA - 2 },
    (x, y) => 0.15 + 0.7 * clamp(1 - Math.hypot(x - MOON[0], (y - SEA) * 1.4) / 150),
  )
  // The beaten floor: dark, with a few cuts where the moonlight reaches.
  const floor = gougeField(
    rng(1205),
    { x0: 0, x1: W, y0: FLOOR + 5, y1: H },
    (x, y) => 0.08 + 0.7 * inShaft(x, y - 40),
    { spacing: 6.5, len: [18, 60], gap: [10, 30], max: 3 },
  )
  cached = { wall, thatch, shaft, sea, glint, moonRays, night, floor, joints }
  return cached
}

// ── VICTOR, on his stool at the bench, turning his face up to the casement ──

const V_HEAD = { d: HEAD_VICTOR, at: [296, 150] as P, rot: -28, scale: 1.3 }
/** The near arm thrown up before him, the hand open towards the casement. */
const V_NEAR_ARM: P[] = [
  [290, 196],
  [322, 208],
  [346, 184],
]
const VICTOR = man({
  facing: 1,
  neck: [282, 188],
  hip: [266, 250],
  head: V_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 28, tails: 28, front: 2 },
  arm: 8,
  leg: 9,
  near: {
    arm: V_NEAR_ARM,
    leg: [
      [268, 250],
      [316, 250],
      [320, 292],
    ],
    hand: { parts: OPEN_HAND, scale: 1.25, rot: -8 },
  },
  far: {
    arm: [],
    leg: [
      [264, 252],
      [304, 258],
      [304, 294],
    ],
  },
})
/**
 * His neckcloth, set at the throat in a frame of its own rather than the
 * head's. WHY (27 September 2026): turned up with his head, the kit's
 * neckcloth swung forward under his jaw, and at panel size the white patch
 * under a black profile read as a white beard. Victor is clean-shaven, so it
 * sits back and low, below the chin, as a stock does on a man looking up.
 */
const NECKCLOTH_T = 'translate(305 188) rotate(-6) scale(1.3) translate(-2 -28.5)'
/** Short cuts beside the raised hand: "I trembled". */
const TREMBLE =
  gouge(340, 158, 336, 165, 0.7) +
  gouge(333, 166, 329, 172, 0.6) +
  gouge(370, 164, 377, 169, 0.7) +
  gouge(373, 174, 380, 178, 0.6)
/** The edge of his coat and its buttons, cut in paper. */
const VICTOR_COAT_CUTS =
  gouge(292, 198, 276, 244, 0.9, 0.6) +
  gouge(272, 250, 314, 247, 0.8) +
  [208, 218, 228].map((y) => `M${n(289 - (y - 208) * 0.34)} ${y}a1.3 1.3 0 1 0 0.1 0Z`).join('')

/** The stool. */
const STOOL = 'M246 252H292V258H286L290 296H284L278 258H262L256 296H250L254 258H246Z'

/** The bench along the wall, seen edge on: its top, its rail and legs. */
const BENCH_TOP = 'M338 204H528V213H338Z'
const BENCH_LEGS = 'M346 213V296M520 213V296M346 264H520'

/**
 * The vessels on the bench, standing and nothing else: a retort, two flasks,
 * a tall jar with a stopper, a phial.
 */
const VESSELS =
  // retort: a round belly, its long neck reaching left and down
  'M440 204C426 204 420 194 422 184C424 174 434 170 444 172C448 166 452 160 452 152L460 152C458 164 456 172 456 178C462 186 460 204 440 204Z' +
  // a round flask
  'M392 204C380 204 376 194 380 186C383 180 388 178 390 176L390 160H398L398 176C402 178 407 182 408 188C410 196 404 204 392 204Z' +
  // a tall stoppered jar
  'M478 204V170C478 166 480 164 484 164H496C500 164 502 166 502 170V204Z' +
  'M484 164V158H496V164Z' +
  // a phial
  'M512 204V184H518V204Z'
/** Moonlight on the glass, cut in paper. */
const VESSEL_CUTS =
  gouge(428, 180, 430, 196, 1.2) +
  gouge(385, 188, 386, 198, 1.1) +
  gouge(483, 172, 483, 198, 1.1) +
  gouge(514.5, 188, 514.5, 200, 0.6)

/** A shelf of jars on the left wall. */
const SHELF = 'M40 118H200V124H40Z'
const JARS =
  'M52 118V96C52 93 54 92 57 92H69C72 92 74 93 74 96V118Z' +
  'M84 118V102H100V118Z' +
  'M112 118V90C112 88 114 86 116 86H124C126 86 128 88 128 90V118Z' +
  'M142 118V104C142 100 146 98 150 98C154 98 158 100 158 104V118Z' +
  'M170 118V94H186V118Z'

// ── THE CREATURE, at the casement ──────────────────────────────────────────

const C_HEAD = { d: HEAD_CREATURE, at: [594, 108] as P, rot: -10, scale: 1.72 }
/** His shoulders in the cloak, cut off by the sill. */
const C_SHOULDERS =
  'M548 200C548 172 560 156 584 150C600 146 622 148 638 158C652 168 660 184 662 200Z'
/**
 * The grin, over the kit's straight lips, in the frame of the kit's heads:
 * the black lips drawn back and apart, the teeth a row of paper between them,
 * and a crease at the corner, "wrinkled". Teeth, never red.
 */
const GRIN_MASK = 'M9.2 8.6L18.4 8.4L18.4 14.2L9.2 14.4Z'
const GRIN_MOUTH = 'M9.4 10.4Q13.6 12.8 18.2 9.2L18 13.8Q13.4 16.6 9.6 12.4Z'
const GRIN_TEETH = 'M10.6 10.9Q13.8 12.9 17.2 10.3L17.1 12.6Q13.6 14.8 10.8 12Z'
const GRIN_LINES = 'M12.2 11.8L12.1 13.2M14.2 12.2L14.2 13.8M16 11.6L16 13.2M8.6 9L7.4 12.6'

function TheSecondCreationDestroyed({ uid }: ArtProps) {
  const m = marks()
  const vt = headAt(1, V_HEAD.at, V_HEAD.rot, V_HEAD.scale)
  const ct = headAt(-1, C_HEAD.at, C_HEAD.rot, C_HEAD.scale)
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 170], push: 1.035 })}>
        {/* the bare stone walls, dark but for the moonlight */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.joints} fill={INK} />
        <g className="lc-drift-r" style={timing({ delay: 0.2 })}>
          <path d={m.shaft} fill={PAPER} />
        </g>

        {/* the thatch on its rafters */}
        <rect x={0} y={0} width={W} height={EAVES} fill={INK} />
        <path d={m.thatch} fill={PAPER} />
        <rect x={0} y={EAVES - 4} width={W} height={10} fill={INK} />
        <path d={`M0 ${EAVES + 6}H${W}`} stroke={PAPER} strokeWidth={LINE.carve} />

        {/* the shelf of jars */}
        <path d={SHELF + JARS} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={gouge(58, 98, 58, 114, 0.9) + gouge(116, 92, 116, 114, 0.9)} fill={PAPER} />

        {/* the casement, open on the moonlit sea */}
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
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={SEA - WIN.y0} fill={INK} />
          <path d={m.moonRays} fill={PAPER} />
          <path d={m.night} fill={PAPER} />
          {/* the moon just rising from the sea, and the last of the sunset */}
          <circle cx={MOON[0]} cy={MOON[1]} r={19} fill={INK} />
          <circle cx={MOON[0]} cy={MOON[1]} r={15.5} fill={PAPER} />
          <path
            d={arcDashes(
              rng(1207),
              MOON[0] - 4,
              MOON[1] - 6,
              5,
              deg(180),
              deg(360),
              [3, 5],
              [2, 4],
            )}
            fill="none"
            stroke={INK}
            strokeWidth={0.9}
          />
          <rect x={WIN.x0} y={SEA} width={WIN.x1 - WIN.x0} height={WIN.y1 - SEA} fill={INK} />
          <path d={`M636 ${SEA - 1.2}H${WIN.x1}`} stroke={RED} strokeWidth={3} />
          <path d={m.sea} fill={PAPER} />
          <path d={m.glint} fill={PAPER} />

          {/* the Creature at the casement, looking in */}
          <path d={C_SHOULDERS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path
            d={gouge(596, 156, 612, 198, 1, -1.4) + gouge(630, 160, 646, 198, 0.9, -1)}
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
        {/* the frame, the sill, and the casement's leaf swung open into the room */}
        <path
          d={`M${WIN.x0 - 14} ${WIN.y1 + 4}H${WIN.x1 + 14}V${WIN.y1 + 14}H${WIN.x0 - 14}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${WIN.x1 + 4} ${WIN.y0 - 4}L${WIN.x1 + 44} ${WIN.y0 + 14}L${WIN.x1 + 44} ${WIN.y1 - 8}L${WIN.x1 + 4} ${WIN.y1 + 2}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${WIN.x1 + 24} ${WIN.y0 + 5}V${WIN.y1 - 3}M${WIN.x1 + 4} ${(WIN.y0 + WIN.y1) / 2}L${WIN.x1 + 44} ${(WIN.y0 + WIN.y1) / 2 + 3}`}
          stroke={PAPER}
          strokeWidth={1.4}
        />

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={`M0 ${FLOOR + 1}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.floor} fill={PAPER} />

        {/* the bench, edge on, and the glass on it */}
        <path d={BENCH_TOP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={BENCH_LEGS} stroke={PAPER} strokeWidth={8} fill="none" />
        <path d={BENCH_LEGS} stroke={INK} strokeWidth={5} fill="none" />
        <path d={VESSELS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={VESSEL_CUTS} fill={PAPER} />

        {/* Victor on his stool, looking up */}
        <path d={STOOL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <Figure parts={VICTOR} cuts={VICTOR_COAT_CUTS}>
          <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS} transform={vt} fill={PAPER} />
          <path d={VICTOR_PUPIL + VICTOR_AGHAST} transform={vt} fill={INK} />
          <path d={NECKCLOTH} transform={NECKCLOTH_T} fill={PAPER} />
        </Figure>
        <path d={TREMBLE} fill={PAPER} />
      </g>
    </>
  )
}

export const theSecondCreationDestroyed: LinocutArt = {
  width: W,
  height: H,
  Draw: TheSecondCreationDestroyed,
}
