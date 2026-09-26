import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { boards, dropInside, footShadow, lightPool } from './confession-kit'
import {
  Figure,
  gent,
  GRIP_HAND,
  HEAD_HYDE,
  handAt,
  headAt,
  HydeFace,
  type P,
  type Part,
} from './people'

/**
 * Chapter 10: "The experiment", the twelfth moment in the guide's timeline.
 * Jekyll's statement tells how he first drank the drug "late one accursed
 * night", and then went to see what it had made of him. Every detail is from
 * the statement:
 *
 * - "The night however, was far gone into the morning: the morning, black as
 *   it was, was nearly ripe for the conception of the day: the inmates of my
 *   house were locked in the most rigorous hours of slumber; and I
 *   determined, flushed as I was with hope and triumph, to venture in my new
 *   shape as far as to my bedroom. I crossed the yard, wherein the
 *   constellations looked down upon me". So the window is black, with the
 *   stars in it.
 * - "coming to my room, I saw for the first time the appearance of Edward
 *   Hyde"; "when I looked upon that ugly idol in the glass, I was conscious of
 *   no repugnance, rather of a leap of welcome. This, too, was myself." So he
 *   stands before a tall glass and faces his reflection, smiling, and the
 *   reflection looks back: one man drawn twice, the picture of "man is not
 *   truly one, but truly two".
 * - "Edward Hyde was so much smaller, slighter and younger than Henry
 *   Jekyll"; "I stretched out my hands ... and in the act, I was suddenly
 *   aware that I had lost in stature." He has changed in Jekyll's clothes, so
 *   they swamp him: the coat to his shins, the collar wide, the sleeve down
 *   over the back of his hand, the trousers heaped on the floor over his
 *   shoes.
 * - The room is his "room in the square", whose "decent furniture and tall
 *   proportions", "the pattern of the bed curtains and the design of the
 *   mahogany frame" he names in the same statement. So there is a curtained
 *   four-poster in a patterned stuff, a tall window and a wardrobe.
 *
 * Not in the text, and drawn plainly: the candle he carries to see by, and
 * the kind of glass (a tall cheval glass on its stand). His face is the pale
 * face of every panel (HydeFace in ./people.tsx), with the heavy brow and the
 * smile drawn too wide, and his head is bare, so it is drawn `bare`: plain
 * dark hair cut into it and the brow and eye set apart (a review on 26
 * September 2026 found the bare black head read as a hood and the shared eye
 * band as a mask at phone width). The flame and its reflection are
 * the only red. His flush ("flushed as I was with hope and triumph") is left
 * to the words: at this size a red cheek sat beside the mouth, where it could
 * be taken for blood. Nothing is taken from a film or stage production.
 * Seeds: 1201 (wall), 1202 (floor), 1203 (candlelight), 1204 (the halo's
 * edge).
 */

const W = 860
const H = 340
const SKIRT = 286
const FLOOR = 292

/** The candle flame in his hand, and where the light on the wall centres. */
const FLAME: P = [483, 195]
const HALO = { cx: 483, cy: 192, rx: 34, ry: 34 }

/**
 * The glass is drawn as a mirror in the picture's own plane: the reflection
 * is the man turned about the line x = MX, and set back a little (REFLECT_K)
 * so that it reads as seen in the glass, not standing beside him.
 */
const MX = 541
const REFLECT_K = 0.94
const REFLECT = `translate(${2 * MX} 0) scale(-1 1) translate(${MX} 326) scale(${REFLECT_K}) translate(${-MX} -326)`

/** The cheval glass: its frame, and the glass inside it. */
const FRAME = 'M556 312V104C556 80 584 62 614 62C644 62 672 80 672 104V312Z'
const GLASS = 'M566 304V108C566 88 588 74 614 74C640 74 662 88 662 108V304Z'

type Marks = {
  wall: string
  floor: string
  glow: string
  halo: string
  haloEdge: string
  sheen: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // One candle in a dark room: the wall is cut pale only near the flame.
  const light = (x: number, y: number) =>
    Math.max(clamp(1.2 - Math.hypot((x - FLAME[0]) * 0.8, (y - FLAME[1]) * 1.1) / 190), 0.06)
  const hidden = (x: number, y: number) =>
    (x > 548 && x < 690 && y > 56) ||
    (x > 694 && x < 846 && y > 64) ||
    x < 250 ||
    Math.hypot(x - HALO.cx, y - HALO.cy) < HALO.rx - 4
  const wall = dropInside(
    gougeField(rng(1201), { x0: 0, x1: W, y0: 4, y1: SKIRT - 4 }, light, { spacing: 6.5 }),
    hidden,
  )
  const floor = boards(rng(1202), W, H, FLOOR, [470, 60])
  const glow = rays(rng(1203), FLAME[0], FLAME[1], { from: 12, to: 34, every: 11, width: 1.1 })
  const { pool: halo, edge: haloEdge } = lightPool(rng(1204), HALO)
  // The sheen on the glass: long diagonal cuts in its upper corners.
  const sheen =
    gouge(572, 150, 600, 96, 1.6) +
    gouge(578, 170, 612, 104, 1) +
    gouge(632, 290, 656, 244, 1.4) +
    gouge(640, 296, 658, 262, 0.9)
  const shadows = footShadow(442, 327, 30) + footShadow(614, 327, 76) + footShadow(128, 302, 110)
  cached = { wall, floor, glow, halo, haloEdge, sheen, shadows }
  return cached
}

// ── Hyde, in Jekyll's clothes ──────────────────────────────────────────────
// Drawn in place, facing right towards the glass; the reflection is the same
// figure turned by REFLECT.

const HEAD = { d: HEAD_HYDE, at: [446, 163] as P, rot: 8, scale: 1.1 }
const HEAD_T = headAt(1, HEAD.at, HEAD.rot, HEAD.scale)
const CANDLE_ARM: P[] = [
  [447, 196],
  [452, 228],
  [473, 218],
]
const HYDE: Part[] = [
  ...gent({
    facing: 1,
    neck: [440, 186],
    hip: [442, 252],
    head: HEAD,
    // Jekyll's coat, to his shins
    body: { width: 38, hem: 48, flare: 6 },
    arm: 11,
    leg: 11,
    near: {
      arm: CANDLE_ARM,
      leg: [
        [446, 252],
        [452, 290],
        [456, 321],
      ],
    },
    far: {
      // the sleeve hanging past the hand, empty at the end
      arm: [
        [434, 196],
        [428, 226],
        [427, 262],
      ],
      leg: [
        [438, 252],
        [432, 290],
        [428, 321],
      ],
    },
  }),
  // "the collar sprawling wide upon his shoulders"
  { d: 'M418 190L432 178L446 176L462 184L464 194L450 188L436 188L424 196Z', sep: 1.6 },
  // the trousers, too long, heaped over his shoes on the floor
  {
    d: 'M412 323C411 316 415 310 420 309C421 305 425 303 429 304C434 305 437 309 437 313C441 315 443 319 442 323Z',
  },
  {
    d: 'M442 323C441 316 445 310 450 309C451 305 455 303 459 304C464 305 467 309 467 313C471 315 473 319 472 323Z',
  },
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(CANDLE_ARM, 1, { parts: GRIP_HAND, scale: 1 }) })),
  // the sleeve, too long, down over the back of his hand
  { d: 'M465 215.6L474.3 209.1L480.7 222.6L470 225.6Z', sep: 1.2 },
]
const HYDE_CUTS =
  // the empty end of the far sleeve, the folds of the coat, the low waist
  gouge(422, 262, 432, 263, 0.9) +
  gouge(430, 206, 426, 290, 0.9, 1) +
  gouge(448, 262, 458, 298, 0.9, -1) +
  gouge(420, 284, 462, 284, 0.8) +
  gouge(421, 309, 419, 321, 0.6, 0.6) +
  gouge(430, 309, 434, 321, 0.6, -0.6) +
  gouge(451, 309, 449, 321, 0.6, 0.6) +
  gouge(460, 309, 465, 321, 0.6, -0.6)

/** The chamber candlestick in his hand: saucer, handle and candle. */
function Candle({ reflected = false }: { reflected?: boolean }) {
  const [fx, fy] = FLAME
  return (
    <g>
      <path
        d={`M${fx - 11} ${fy + 22}C${fx - 11} ${fy + 26} ${fx + 11} ${fy + 26} ${fx + 11} ${fy + 22}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <rect
        x={fx - 3.6}
        y={fy + 6}
        width={7.2}
        height={16}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d={`M${fx} ${fy + 6}V${fy + 2}`} stroke={INK} strokeWidth={1.2} />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.8, delay: reflected ? 0.2 : 0 })}
        d={`M${fx} ${fy + 4}C${fx - 5} ${fy} ${fx - 4} ${fy - 7} ${fx} ${fy - 14}C${fx + 4} ${fy - 7} ${fx + 5} ${fy} ${fx} ${fy + 4}Z`}
        fill={RED}
      />
    </g>
  )
}

function Hyde() {
  return (
    <>
      <Figure parts={HYDE} cuts={HYDE_CUTS} />
      <HydeFace t={HEAD_T} bare />
      <Candle />
    </>
  )
}

// ── The room ───────────────────────────────────────────────────────────────

/** The four-poster: tester, posts, headboard, frame and legs, in mahogany. */
const BED = [
  'M12 26H246V40H12Z',
  'M18 40H26V300H18Z',
  'M232 40H240V300H232Z',
  'M26 150C26 136 36 128 48 128C56 128 62 134 64 142V262H26Z',
  'M22 262H240V280H22Z',
]
/** The curtains: gathered at the head, tied back at the foot. */
const CURTAINS = [
  'M26 40H92C88 90 86 150 84 214L60 218C52 160 40 96 26 60Z',
  'M232 40H178C182 70 190 104 198 128C188 150 182 180 180 214L212 212C214 170 220 140 232 120Z',
]
/** The valance under the tester, scalloped. */
const VALANCE =
  'M12 40H246V48Q240 56 234 48Q228 56 222 48Q216 56 210 48Q204 56 198 48Q192 56 186 48Q180 56 174 48Q168 56 162 48Q156 56 150 48Q144 56 138 48Q132 56 126 48Q120 56 114 48Q108 56 102 48Q96 56 90 48Q84 56 78 48Q72 56 66 48Q60 56 54 48Q48 56 42 48Q36 56 30 48Q24 56 18 48Q15 52 12 48Z'

/** The pattern of the bed curtains: small four-petalled flowers in rows. */
function curtainPattern() {
  let d = ''
  for (let y = 62; y < 214; y += 14)
    for (let x = 20; x < 240; x += 12) {
      const cx = x + ((y / 14) % 2) * 6
      const cy = y
      d += `M${n(cx)} ${n(cy - 2.6)}L${n(cx + 1)} ${n(cy - 0.8)}L${n(cx + 2.6)} ${n(cy)}L${n(cx + 1)} ${n(cy + 0.8)}L${n(cx)} ${n(cy + 2.6)}L${n(cx - 1)} ${n(cy + 0.8)}L${n(cx - 2.6)} ${n(cy)}L${n(cx - 1)} ${n(cy - 0.8)}Z`
    }
  return d
}
const PATTERN = curtainPattern()

/** Stars in the black window, large and small. */
const STARS: [number, number, number][] = [
  [284, 70, 2.4],
  [300, 76, 2],
  [314, 86, 2.2],
  [328, 98, 2.4],
  [332, 122, 2.2],
  [352, 124, 2.4],
  [350, 100, 2.2],
  [296, 150, 1.4],
  [338, 170, 1.2],
  [282, 196, 1.3],
  [346, 214, 1.1],
]
const star = ([x, y, r]: [number, number, number]) =>
  `M${x} ${n(y - r * 1.8)}L${n(x + r * 0.5)} ${n(y - r * 0.5)}L${n(x + r * 1.8)} ${y}L${n(x + r * 0.5)} ${n(y + r * 0.5)}L${x} ${n(y + r * 1.8)}L${n(x - r * 0.5)} ${n(y + r * 0.5)}L${n(x - r * 1.8)} ${y}L${n(x - r * 0.5)} ${n(y - r * 0.5)}Z`

function TheExperiment({ uid }: ArtProps) {
  const m = marks()
  const id = {
    glass: `${uid}-glass`,
    curtain: `${uid}-curtain`,
  }
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <path d={GLASS} />
        </clipPath>
        <clipPath id={id.curtain}>
          {CURTAINS.map((d) => (
            <path key={d} d={d} />
          ))}
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 190], push: 1.03 })}>
        {/* the bedroom wall in the dark, cut pale round the candle */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.haloEdge} fill={PAPER} />
        <path d={m.halo} fill={PAPER} />
        <path d={m.glow} fill={INK} />
        <rect x={0} y={SKIRT - 4} width={W} height={2} fill={PAPER} />
        <rect x={0} y={SKIRT} width={W} height={FLOOR - SKIRT} fill={PAPER} />
        <rect x={0} y={SKIRT + 2.4} width={W} height={1.3} fill={INK} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the tall window, black, with the constellations in it */}
        <rect x={266} y={30} width={104} height={222} fill={PAPER} />
        <rect x={274} y={38} width={88} height={206} fill={INK} />
        <g fill={PAPER}>
          {STARS.map((s) => (
            <path key={`${s[0]}-${s[1]}`} d={star(s)} />
          ))}
        </g>
        <path d="M318 38V244M274 140H362M274 142H362" stroke={PAPER} strokeWidth={3} />
        <rect x={260} y={250} width={116} height={7} fill={PAPER} />

        {/* the four-poster in its patterned curtains, the bed not slept in */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
          {BED.slice(0, 4).map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d="M64 214H232V262H64Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path
          d="M64 206C64 198 70 194 80 194H104C112 194 116 200 114 208L112 216H66Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          d={
            gouge(120, 222, 226, 222, 0.8) +
            gouge(90, 240, 228, 238, 0.9) +
            gouge(140, 252, 220, 252, 0.7)
          }
          fill={INK}
        />
        <path d={BED[4]} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M22 290H30V300H22ZM230 290H238V300H230Z" fill={INK} />
        <path d={gouge(30, 271, 232, 271, 1)} fill={PAPER} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
          {CURTAINS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g clipPath={`url(#${id.curtain})`}>
          <path d={PATTERN} fill={PAPER} />
          <path
            d={
              gouge(46, 56, 72, 210, 1.2) +
              gouge(66, 48, 80, 212, 1.2) +
              gouge(200, 50, 214, 116, 1.1)
            }
            fill={INK}
          />
        </g>
        <path d="M188 128Q198 134 208 126" stroke={PAPER} strokeWidth={3.4} fill="none" />
        <path d={VALANCE} fill={INK} stroke={PAPER} strokeWidth={1.4} />

        {/* the wardrobe */}
        <path d="M700 68H842V300H700Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M694 60H848V72H694Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M710 84H766V286H710ZM776 84H832V286H776Z"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <circle cx={762} cy={184} r={2.4} fill={PAPER} />
        <circle cx={780} cy={184} r={2.4} fill={PAPER} />

        {/* the cheval glass: uprights, feet, frame, and the dark glass */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
          <path d="M542 150H552V322H542Z" />
          <path d="M676 150H686V322H676Z" />
          <path d="M528 318C528 315 531 314 534 314H560C563 314 566 315 566 318V324H528Z" />
          <path d="M662 318C662 315 665 314 668 314H694C697 314 700 315 700 318V324H662Z" />
          <path d={FRAME} />
        </g>
        <path d={GLASS} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <circle cx={547} cy={176} r={3} fill={PAPER} />
        <circle cx={681} cy={176} r={3} fill={PAPER} />

        {/* "that ugly idol in the glass": the same man, looking back */}
        <g clipPath={`url(#${id.glass})`}>
          <path d={m.sheen} fill={PAPER} />
          <g transform={REFLECT} className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.4 })}>
            <path d={m.haloEdge} fill={PAPER} />
            <path d={m.halo} fill={PAPER} />
            <path d={m.glow} fill={INK} />
            <Hyde />
          </g>
        </g>

        <Hyde />
      </g>
    </>
  )
}

export const theExperiment: LinocutArt = { width: W, height: H, Draw: TheExperiment }
