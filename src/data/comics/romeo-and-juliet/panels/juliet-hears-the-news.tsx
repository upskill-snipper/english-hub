import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow, prayingHands } from './acts-3-4-kit'
import { boards, houseWall } from './house-acts-3-4'
import {
  arm,
  COIF,
  COIF_EDGE,
  CutFigure,
  EYE,
  gown,
  HEAD_GIRL,
  HEAD_NURSE,
  headAt,
  JULIET_FACE,
  JULIET_HAIR,
  JULIET_STRANDS,
  limb,
  shoe,
  type P,
  type Piece,
} from './verona-kit'

/**
 * Act 3, Scene 2: "Juliet hears the news", the tenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1513, src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "A Room in Capulet's House." It is the house of "Thursday" and "Dawn, and
 *   a father's rage" (./house-acts-3-4.tsx): plaster above a wainscot of
 *   framed panels, and a boarded floor.
 * - "Gallop apace, you fiery-footed steeds, Towards Phoebus' lodging". "So
 *   tedious is this day". Juliet longs for the night, but the sun is still up,
 *   low in the west: so it hangs in the window, the spot colour, the day she
 *   wants gone and the heat of the day the fight was fought in.
 * - "Enter Nurse, with cords." "The cords that Romeo bid thee fetch?" "Ay,
 *   ay, the cords. [Throws them down.]" The cords are the ladder Romeo sent
 *   for, "cords made like a tackled stair" (2.4), so they lie thrown on the
 *   floor between the two women: a rope ladder, spilled from a coil.
 * - "Why dost thou wring thy hands?" "Ah, well-a-day, he's dead, he's dead".
 *   So the Nurse, just in at the door and black against the window, lifts
 *   her face and wrings her hands together. She is drawn as the other panels
 *   draw her: broad, in a gown and a white apron, with her linen coif.
 * - "What devil art thou, that dost torment me thus?" So Juliet, cut in paper
 *   as in the other panels, starts back from her, one hand held up, open.
 *
 * SAFEGUARDING. The Nurse's description of the body ("I saw the wound") is
 * words only: nothing of Tybalt, of the fight or of any wound is drawn, and
 * the red is the sun. Nothing is taken from a film or stage production.
 * Seeds: 1001 (walls), 1002 (floor), 1003 (the sky in the window).
 */

const W = 860
const H = 340
const RAIL = 200
const FLOOR = 272
/** The window's opening: an arch on (306, 96), radius 44, down to the sill. */
const WIN = { x0: 262, x1: 350, cx: 306, cy: 96, r: 44, sill: 190 }
const WIN_PATH = `M${WIN.x0} ${WIN.sill}V${WIN.cy}A${WIN.r} ${WIN.r} 0 0 1 ${WIN.x1} ${WIN.cy}V${WIN.sill}Z`
/** The sun, low in the west, in the window. */
const SUN: P = [282, 150]
/** The door the Nurse came in by, standing open. */
const DOOR = { x0: 44, x1: 132, top: 70 }

type Marks = { plaster: string; wains: string; floor: string; sky: string; roofs: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot(x - WIN.cx, (y - 130) * 1.1) / 300) ** 0.9 * 0.85, 0.05)
  const { plaster, wains } = houseWall(rng(1001), W, RAIL, FLOOR, light, (x) => x < DOOR.x1 + 10)
  const floor = boards(rng(1002), W, H, FLOOR, [430, 40])
  // The afternoon sky in the window: pale, a few ink streaks.
  const v = rng(1003)
  let sky = ''
  for (let y = 60; y < 176; y += 8) {
    let x = WIN.x0 + between(v, -10, 6)
    while (x < WIN.x1) {
      const len = between(v, 12, 34)
      if (v() < 0.4) sky += gouge(x, y, x + len, y + between(v, -0.4, 0.4), 0.9)
      x += len + between(v, 8, 20)
    }
  }
  let roofs = `M${WIN.x0} ${WIN.sill}V174`
  for (let x = WIN.x0; x <= WIN.x1; x += 11)
    roofs += `L${x} ${n(170 + (x % 22 ? 7 : 0) + between(v, -2, 2))}`
  roofs += `L${WIN.x1} ${WIN.sill}Z`
  cached = { plaster, wains, floor, sky, roofs }
  return cached
}

// ── The Nurse, facing right, wringing her hands ─────────────────────────────

const N_HEAD = headAt(1, [334, 146], -10, 1.04)
const N_HANDS = prayingHands([346, 188], -58, 1.15)
const NURSE: Piece[] = [
  // a broad gown ("A sail, a sail!")
  {
    d: 'M312 164C296 170 290 188 290 210C288 240 284 272 280 306L386 306C380 272 372 240 368 212C366 186 358 170 342 164C334 160 320 160 312 164Z',
  },
  shoe([370, 307], 1),
  { d: HEAD_NURSE, t: N_HEAD },
  { d: COIF, t: N_HEAD },
  // her arms bent up, her hands clasped and wrung together at her breast
  [
    {
      d: limb([
        [340, 174],
        [356, 204],
        [344, 194],
      ]),
      w: 10,
      sep: 1.6,
    },
    { ...N_HANDS.part, sep: 1.3 },
  ],
]
const NURSE_CUTS =
  gouge(306, 232, 296, 300, 1.8, 0.6) +
  gouge(314, 214, 360, 214, 1.8) +
  gouge(318, 236, 314, 300, 1.6)
/** Her apron, over the front of her gown. */
const APRON = 'M332 216C334 244 340 272 344 302L380 302C374 272 366 244 360 216Z'

// ── Juliet, starting back from her, facing left ─────────────────────────────

const J_HEAD = headAt(-1, [630, 158], 10, 0.98)
const JULIET: Piece[] = [
  { d: JULIET_HAIR, t: J_HEAD },
  { d: gown([626, 180], [620, 230], 306, -1, { shoulder: 24, waistW: 17, front: 30, back: 30 }) },
  shoe([592, 307], -1),
  { d: HEAD_GIRL, t: J_HEAD },
  // the far hand pressed to her breast
  arm(
    [
      [628, 190],
      [630, 214],
      [614, 206],
    ],
    -118,
    { w: 7, sep: 1.3, size: 12, spread: 12, thumb: -1 },
  ),
  // the near hand held up, open, against what she hears
  arm(
    [
      [618, 190],
      [598, 206],
      [582, 194],
    ],
    -112,
    { w: 7, sep: 1.3, size: 14, spread: 15, thumb: -1 },
  ),
]
const JULIET_CUTS =
  gouge(612, 236, 598, 300, 1.8, 0.8) +
  gouge(624, 238, 630, 302, 1.8) +
  gouge(608, 229, 632, 231, 1.6)

// ── The cords ───────────────────────────────────────────────────────────────

/**
 * The ladder lies spilled across the boards from the Nurse's feet: two side
 * ropes and the rope rungs between them, printed as pale rope with an ink
 * edge so it stands clear of the joints of the floor, and a loose coil where
 * it landed first.
 */
const LADDER = (() => {
  const spine: P[] = []
  for (let i = 0; i <= 24; i++) {
    const t = i / 24
    const x = 392 + t * 150
    spine.push([x, 306 + Math.sin(t * Math.PI * 1.4) * -8 + t * 10])
  }
  const rail = (dy: number) => 'M' + spine.map(([x, y]) => `${n(x)} ${n(y + dy)}`).join('L')
  let rungs = ''
  for (let i = 2; i < spine.length; i += 3) {
    const [x, y] = spine[i]
    rungs += `M${n(x - 1)} ${n(y - 6)}L${n(x + 1)} ${n(y + 6)}`
  }
  const coil = 'M394 300C376 296 362 306 366 318C370 328 390 330 398 320C404 312 398 302 388 304'
  return rail(-6) + rail(6) + rungs + coil
})()

function JulietHearsTheNews({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={WIN_PATH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [460, 200], push: 1.03 })}>
        {/* the room: plaster, the dado rail, the wainscot */}
        <path d={m.plaster} fill={PAPER} />
        <rect x={0} y={RAIL - 6} width={W} height={6} fill={PAPER} />
        <rect x={0} y={RAIL} width={W} height={1.6} fill={INK} />
        <path d={m.wains} fill={PAPER} />

        {/* the window, and the sun low in it: "Gallop apace, you fiery-footed steeds" */}
        <path
          d={`M${WIN.x0 - 12} ${WIN.sill + 6}V${WIN.cy}A${WIN.r + 12} ${WIN.r + 12} 0 0 1 ${WIN.x1 + 12} ${WIN.cy}V${WIN.sill + 6}Z`}
          fill={PAPER}
        />
        <path
          d={`M${WIN.x0 - 6} ${WIN.sill + 2}V${WIN.cy}A${WIN.r + 6} ${WIN.r + 6} 0 0 1 ${WIN.x1 + 6} ${WIN.cy}V${WIN.sill + 2}Z`}
          fill={INK}
        />
        <g clipPath={`url(#${clip})`}>
          <path d={WIN_PATH} fill={PAPER} />
          <path d={m.sky} fill={INK} />
          <circle
            className="lc-glow"
            style={timing({ delay: 0.5 })}
            cx={SUN[0]}
            cy={SUN[1]}
            r={14}
            fill={RED}
            stroke={INK}
            strokeWidth={1.2}
          />
          <path
            d={m.roofs}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
        </g>
        <path
          d={`M${WIN.cx} ${WIN.cy - WIN.r}V${WIN.sill}M${WIN.x0} 128H${WIN.x1}`}
          stroke={INK}
          strokeWidth={2.6}
        />
        <rect x={WIN.x0 - 16} y={WIN.sill} width={WIN.x1 - WIN.x0 + 32} height={7} fill={PAPER} />

        {/* the door she came in by, standing open on the dark passage */}
        <path
          d={`M${DOOR.x0 - 10} ${FLOOR}V${DOOR.top + 44}A${(DOOR.x1 - DOOR.x0) / 2 + 10} ${(DOOR.x1 - DOOR.x0) / 2 + 10} 0 0 1 ${DOOR.x1 + 10} ${DOOR.top + 44}V${FLOOR}Z`}
          fill={PAPER}
        />
        <path
          d={`M${DOOR.x0} ${FLOOR}V${DOOR.top + 44}A${(DOOR.x1 - DOOR.x0) / 2} ${(DOOR.x1 - DOOR.x0) / 2} 0 0 1 ${DOOR.x1} ${DOOR.top + 44}V${FLOOR}Z`}
          fill={INK}
        />
        <path
          d={`M${DOOR.x1} 110L${DOOR.x1 + 34} 124V${FLOOR + 22}L${DOOR.x1} ${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={
            gouge(DOOR.x1 + 11, 122, DOOR.x1 + 11, FLOOR + 4, 1.4) +
            gouge(DOOR.x1 + 22, 126, DOOR.x1 + 22, FLOOR + 12, 1.4)
          }
          fill={PAPER}
        />

        {/* the chest against the far wall */}
        <path d="M704 272V226H836V272Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M698 226L842 226L838 216L702 216Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(716, 236, 716, 264, 1.4) +
            gouge(824, 236, 824, 264, 1.4) +
            gouge(730, 249, 810, 249, 1.4)
          }
          fill={PAPER}
        />

        {/* the boarded floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={footShadow(334, 309, 52) + footShadow(612, 309, 40)} fill={INK} />

        {/* the cords, thrown down between them */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d={LADDER} stroke={INK} strokeWidth={6.6} />
          <path d={LADDER} stroke={PAPER} strokeWidth={3.2} />
        </g>

        {/* the Nurse, wringing her hands */}
        <CutFigure parts={NURSE} cuts={NURSE_CUTS} halo={2}>
          <g transform={N_HEAD}>
            <path d={COIF} fill={PAPER} />
            <path d={COIF_EDGE} fill="none" stroke={INK} strokeWidth={1.2} />
            <path d={EYE} fill={PAPER} />
          </g>
          <path d={APRON} fill={PAPER} stroke={INK} strokeWidth={1.2} />
          <path d={gouge(344, 226, 352, 296, 1.4) + gouge(356, 226, 368, 296, 1.4)} fill={INK} />
          <path d={N_HANDS.cut} transform={N_HANDS.t} fill={PAPER} />
        </CutFigure>

        {/* Juliet, starting back */}
        <CutFigure parts={JULIET} cuts={JULIET_CUTS} tone="paper" halo={2.2}>
          <path d={JULIET_HAIR} transform={J_HEAD} fill={INK} />
          <path d={JULIET_STRANDS} transform={J_HEAD} fill={PAPER} />
          <path d={EYE} transform={J_HEAD} fill={INK} />
          <path d={JULIET_FACE} transform={J_HEAD} fill={INK} />
        </CutFigure>
      </g>
    </>
  )
}

export const julietHearsTheNews: LinocutArt = { width: W, height: H, Draw: JulietHearsTheNews }
