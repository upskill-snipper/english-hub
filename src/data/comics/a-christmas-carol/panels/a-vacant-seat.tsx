import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, ribbon } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { HEAD, headAt } from './cut-figure'
import { ScroogeNightHead } from './scrooge-at-night'
import {
  GhostOfPresent,
  HAIR_BACK,
  HAIR_SHORT,
  LitFace,
  TORCH,
} from './the-cratchits-keep-christmas'

/**
 * Stave III: "A vacant seat", the ninth moment in the guide's timeline. Every
 * detail is from the text:
 *
 * - "At last the dinner was all done, the cloth was cleared, the hearth
 *   swept, and the fire made up ... a shovel-full of chestnuts on the fire.
 *   Then all the Cratchit family drew round the hearth, in what Bob Cratchit
 *   called a circle, meaning half a one". So the family sit round the fire,
 *   the chestnuts in it, and the jug that Bob "put ... on the hob to simmer".
 * - "He sat very close to his father's side upon his little stool. Bob held
 *   his withered little hand in his, as if he loved the child, and wished to
 *   keep him by his side, and dreaded that he might be taken from him." Tim
 *   "bore a little crutch, and had his limbs supported by an iron frame". So
 *   Tim is on his stool at Bob's side, hand in hand, looking up at him, the
 *   crutch at his stool and the frame on his legs.
 * - "'I see a vacant seat,' replied the Ghost, 'in the poor chimney-corner,
 *   and a crutch without an owner, carefully preserved. If these shadows
 *   remain unaltered by the Future, the child will die.'" The Ghost speaks
 *   of shadows, so the vision is drawn as one: the Ghost's torch throws the
 *   family's shadows on the wall, and beside Bob's shadow, where Tim's should
 *   be, is the shadow of an empty stool with a crutch leaning on it. Tim
 *   himself is alive and by the fire. Dickens never shows the child dead,
 *   and neither does this (the style guide's rule for this text).
 * - "Scrooge hung his head to hear his own words quoted by the Spirit, and
 *   was overcome with penitence and grief." The Ghost is stern for the
 *   rebuke that follows ("forbear that wicked cant").
 * - "'The Founder of the Feast indeed!' cried Mrs. Cratchit, reddening." Then
 *   she drinks his health "for your sake and the Day's ... not for his". So
 *   her cheek is red and she holds up a tumbler, from "the family display of
 *   glass. Two tumblers, and a custard-cup without a handle".
 *
 * The Ghost is the same giant as in "The Cratchits keep Christmas"
 * (GhostOfPresent), and Scrooge wears the nightcap and dressing-gown of every
 * Spirit's company. Nothing is taken from a film or stage production.
 */

const W = 860
const H = 340

/** The pool of torchlight on the wall, where the family's shadows fall: [cx, cy, rx, ry]. */
const POOL: [number, number, number, number] = [598, 150, 160, 118]
/**
 * The shadows are the figures' own shapes, thrown larger and up the wall:
 * the family's floor (y 296) lands on the foot of the wall (y 246).
 */
const SHADOW_AT = 'translate(548 246) scale(1.3) translate(-470 -296)'
const FIRE: [number, number] = [779, 232]

type Marks = {
  wall: string
  pool: string
  beam: string
  boards: string
  stone: string
  gown: string
  sparks: [number, number, number][]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(909)
  const [px, py, rx, ry] = POOL
  const wallLight = (x: number, y: number) => {
    const torch = clamp(1.25 - Math.hypot((x - px) / (rx * 1.5), (y - py) / (ry * 1.5)))
    const near = clamp(1 - Math.hypot(x - TORCH[0], y - TORCH[1]) / 110) * 0.7
    return Math.max(torch * 0.8, near, 0.04)
  }
  const wall = gougeField(r, { x0: 214, x1: 712, y0: 32, y1: 246 }, wallLight, {
    spacing: 6.8,
    len: [18, 80],
  })
  // Inside the pool the wall is paper, and ink cuts close in towards its rim.
  const pool = gougeField(
    r,
    { x0: px - rx, x1: px + rx, y0: py - ry, y1: py + ry },
    (x, y) => clamp((Math.hypot((x - px) / rx, (y - py) / ry) - 0.62) / 0.38),
    { spacing: 5.8, len: [20, 70], gap: [4, 18], max: 3.2 },
  )
  let beam = ''
  for (let y = 12; y < 26; y += 4.4)
    beam += gouge(0, y, W, y + between(r, -1, 1), 0.5, between(r, -0.5, 0.5))
  // the hearth-stone and the floor, lit by the fire
  let boards = ''
  for (let y = 256; y < 338; y += 6.4) {
    let x = between(r, 200, 240)
    while (x < W) {
      const len = between(r, 30, 110)
      const L = clamp(1 - Math.hypot((x - FIRE[0]) / 320, (y - 256) / 120)) * 0.9 + 0.1
      if (r() < 0.3 + L * 0.7)
        boards += gouge(x, y, x + len, y + between(r, -0.6, 0.6), 0.4 + L * 2.2)
      x += len + between(r, 6, 20)
    }
  }
  let stone = ''
  for (let y = 40; y < 250; y += 7)
    stone += gouge(718, y, 734, y + 0.4, 0.8) + gouge(826, y + 3, 842, y + 3.4, 0.8)
  const gown = gouge(300, 214, 306, 318, 1.2, -0.5) + gouge(290, 236, 292, 318, 0.8)
  // "the chestnuts on the fire sputtered and cracked noisily"
  const sparks: [number, number, number][] = []
  for (let i = 0; i < 9; i++)
    sparks.push([between(r, 752, 808), between(r, 176, 200), between(r, 0.8, 1.6)])
  cached = { wall, pool, beam, boards, stone, gown, sparks }
  return cached
}

function Halo({ d, w = 3.2 }: { d: string; w?: number }) {
  return <path d={d} fill={PAPER} stroke={PAPER} strokeWidth={w} strokeLinejoin="round" />
}
function Knock({ d, w = 4 }: { d: string; w?: number }) {
  return <path d={d} fill={INK} stroke={INK} strokeWidth={w} strokeLinejoin="round" />
}
function Limb({
  d,
  w,
  halo = 0,
  color = INK,
}: {
  d: string
  w: number
  halo?: number
  color?: string
}) {
  return (
    <>
      {halo > 0 && (
        <path
          d={d}
          fill="none"
          stroke={PAPER}
          strokeWidth={w + halo}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={w}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

// ── The family round the hearth ────────────────────────────────────────────

const MRS_CHAIR = 'M378 176C378 170 384 166 390 168L394 258H440V266H382Z'
const MRS_SKIRT =
  'M404 226C414 224 426 224 434 228C444 234 450 244 454 256C458 268 460 282 462 296L402 296C400 276 400 250 404 226Z'
const MRS_BODICE =
  'M406 190C412 185 424 185 430 190C433 202 434 216 434 230L404 230C403 216 403 202 406 190Z'
const MRS_HEAD = headAt(420, 172, 28, true)
const MRS_ARM = 'M426 196C434 196 442 186 446 172'
/** One of the two tumblers, raised to the toast. */
const TUMBLER = 'M440 152H452L450 168H442Z'

const BOB_CHAIR = 'M456 172C456 166 462 162 468 164L472 258H514V266H460Z'
const BOB_BODY =
  'M470 190C478 184 494 184 500 190C504 204 506 220 506 238L472 240C469 222 468 206 470 190Z'
const BOB_THIGH = 'M500 236C512 237 522 238 530 240'
const BOB_SHINS = ['M530 240C531 256 531 272 532 290', 'M516 240C517 256 517 272 518 290']
const BOB_SHOES = [
  'M526 288C532 286 540 286 544 289L544 295H524Z',
  'M512 288C518 286 526 286 530 289L530 295H510Z',
]
const BOB_HEAD = headAt(488, 170, 28, true, 10)
const BOB_ARM = 'M494 200C504 214 514 224 526 230'
const BOB_HAND = 'M522 226C527 223 533 225 535 230C534 235 528 237 523 235Z'
const COMFORTER = 'M474 186C482 190 494 190 502 186L503 192C494 196 482 196 474 192Z'

/** Tim, on his little stool at his father's side, looking up at him. */
const TIM_STOOL = 'M538 262H574V268H570L574 296H570L564 268H548L542 296H538L542 268H538Z'
const TIM_BODY =
  'M548 222C554 218 564 218 570 222C572 234 572 248 572 262H546C545 248 546 234 548 222Z'
const TIM_HEAD = headAt(557, 207, 22, false, -10)
const TIM_LEGS = ['M550 262C546 272 543 282 541 292', 'M560 262C557 272 555 282 554 292']
const TIM_ARM = 'M552 232C546 234 540 234 534 232'
const TIM_CRUTCH = 'M582 294L588 214'
const TIM_CRUTCH_TOP = 'M581 213C585 208 593 209 595 214'

/** Two of the children at the hearth, on the floor by the fire. */
const PETER_BODY =
  'M612 250C620 244 634 244 642 250C646 262 648 276 648 296H606C605 278 607 262 612 250Z'
const PETER_HEAD = headAt(628, 232, 24, true)
const GIRL_BODY =
  'M660 262C666 257 678 257 684 262C688 272 689 284 689 296H656C655 284 656 272 660 262Z'
const GIRL_HEAD = headAt(674, 246, 21, true)

// ── The fire ───────────────────────────────────────────────────────────────

const CHIMNEY =
  'M712 32H848V252H822V206C822 196 814 190 804 190H754C744 190 736 196 736 206V252H712Z'
const FLAMES = [
  'M752 246C750 236 756 228 760 220C762 228 768 234 766 246Z',
  'M764 246C762 232 770 220 776 210C780 222 786 232 784 246Z',
  'M782 246C782 236 788 228 792 222C794 230 800 236 798 246Z',
]
const COALS = 'M748 246C750 241 758 240 764 243C770 239 780 239 786 243C792 240 800 242 804 246Z'
const JUG =
  'M810 236C808 230 810 224 816 222H826C830 224 832 230 830 236C830 242 826 248 818 248C812 248 810 242 810 236ZM830 228C836 228 838 234 832 238'

// ── Scrooge, his head hung ─────────────────────────────────────────────────

const SCROOGE_GOWN =
  'M276 198C288 194 300 196 308 204C312 222 312 242 310 264C310 284 312 302 314 320L266 322C268 300 270 280 268 262C266 242 268 218 276 198Z'
const SCROOGE_ARM = 'M284 212C286 226 290 238 298 246'
const SCROOGE_HANDS =
  'M294 240C300 236 308 238 310 244C310 250 304 254 298 252C294 250 292 244 294 240Z'
const SCROOGE_SLIPPER = 'M292 318C298 316 310 316 316 319L315 324H290Z'
const SCROOGE_HEAD_AT = 'translate(294 178) rotate(26) scale(0.26) translate(-110 -116)'

function AVacantSeat({ uid }: ArtProps) {
  const m = marks()
  const wallClip = `${uid}-wall`
  return (
    <g className="lc-push" style={timing({ origin: [600, 190], push: 1.03 })}>
      <defs>
        <clipPath id={wallClip}>
          <rect x={214} y={30} width={498} height={220} />
        </clipPath>
      </defs>
      {/* the low room, its wall lit by the Ghost's torch */}
      <path d={m.wall} fill={PAPER} />
      <rect x={0} y={8} width={W} height={22} fill={INK} />
      <path d={m.beam} fill={PAPER} />
      <rect x={0} y={30} width={W} height={2} fill={PAPER} />
      <rect x={0} y={246} width={W} height={6} fill={PAPER} />
      <rect x={0} y={252} width={W} height={1.6} fill={INK} />
      <path d={m.boards} fill={PAPER} />

      {/* the pool of torchlight, and the shadows the torch throws in it */}
      <g clipPath={`url(#${wallClip})`}>
        <ellipse cx={POOL[0]} cy={POOL[1]} rx={POOL[2]} ry={POOL[3]} fill={PAPER} />
        <path d={m.pool} fill={INK} />
        <g transform={SHADOW_AT} fill={INK}>
          {/* Bob's shadow, his hand held out to the stool */}
          <g className="lc-fade-in" style={timing({ delay: 0.4, dur: 1.2 })}>
            <path d={BOB_CHAIR} />
            <path d={BOB_BODY} />
            {[BOB_THIGH, BOB_ARM].map((d) => (
              <path key={d} d={d} fill="none" stroke={INK} strokeWidth={12} strokeLinecap="round" />
            ))}
            {BOB_SHINS.map((d) => (
              <path key={d} d={d} fill="none" stroke={INK} strokeWidth={8} strokeLinecap="round" />
            ))}
            {BOB_SHOES.map((d) => (
              <path key={d} d={d} />
            ))}
            <path d={BOB_HAND} />
            <g transform={BOB_HEAD.at}>
              <path d={HEAD} />
            </g>
          </g>
          {/* "a vacant seat ... and a crutch without an owner" */}
          <g className="lc-fade-in" style={timing({ delay: 1.5, dur: 1.6 })}>
            <path d={TIM_STOOL} />
            <path d={TIM_CRUTCH} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
            <path
              d={TIM_CRUTCH_TOP}
              fill="none"
              stroke={INK}
              strokeWidth={4.4}
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>

      {/* the fire in the chimney-corner, chestnuts in it, the jug on the hob */}
      <path d={CHIMNEY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.stone} fill={PAPER} />
      <rect x={704} y={180} width={152} height={9} fill={PAPER} />
      <rect x={704} y={189} width={152} height={1.6} fill={INK} />
      <g fill={RED}>
        <path d={COALS} />
        {FLAMES.map((d, i) => (
          <path
            key={d}
            className="lc-flicker"
            style={timing({ dur: 0.75 + i * 0.05, delay: 0.1 + i * 0.1 })}
            d={d}
          />
        ))}
      </g>
      <g className="lc-glow" style={timing({ delay: 0.3 })} fill={PAPER}>
        {m.sparks.map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
        ))}
      </g>
      <path d={JUG} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d="M700 252H848L856 262H692Z" fill={PAPER} />

      {/* two of the children, on the floor by the fire */}
      <Halo d={PETER_BODY} />
      <path d={PETER_BODY} fill={INK} />
      <LitFace at={PETER_HEAD.at} hair={HAIR_SHORT} />
      <Halo d={GIRL_BODY} />
      <path d={GIRL_BODY} fill={INK} />
      <LitFace at={GIRL_HEAD.at} hair={HAIR_BACK} smile />

      {/* Mrs Cratchit, reddening, her tumbler raised */}
      <Halo d={MRS_CHAIR} />
      <path d={MRS_CHAIR} fill={INK} />
      <Halo d={MRS_SKIRT} />
      <Halo d={MRS_BODICE} />
      <path d={MRS_SKIRT} fill={INK} />
      <path d={MRS_BODICE} fill={INK} />
      <path
        d={gouge(446, 244, 456, 292, 1.2, -0.4) + gouge(434, 240, 438, 292, 0.8)}
        fill={PAPER}
      />
      <Limb d={MRS_ARM} w={8} halo={3} />
      <path d={TUMBLER} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d="M441.5 158H450.5" stroke={INK} strokeWidth={0.8} />
      <LitFace at={MRS_HEAD.at} hair={HAIR_BACK} flush />

      {/* Bob, holding his withered little hand in his */}
      <Halo d={BOB_CHAIR} />
      <path d={BOB_CHAIR} fill={INK} />
      {BOB_SHINS.map((d) => (
        <Limb key={d} d={d} w={8} halo={3} />
      ))}
      <Limb d={BOB_THIGH} w={13} halo={3} />
      {BOB_SHOES.map((d) => (
        <Halo key={d} d={d} />
      ))}
      <Halo d={BOB_BODY} />
      {BOB_SHINS.map((d) => (
        <Limb key={d} d={d} w={8} />
      ))}
      {BOB_SHOES.map((d) => (
        <path key={d} d={d} fill={INK} />
      ))}
      <Limb d={BOB_THIGH} w={13} />
      <path d={BOB_BODY} fill={INK} />
      <path d={gouge(478, 198, 476, 236, 0.9, 0.5)} fill={PAPER} />
      <path d={COMFORTER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={ribbon(
          [
            [497, 191],
            [500, 204],
            [503, 216],
            [506, 228],
          ],
          6.5,
          0.3,
          false,
        )}
        fill={PAPER}
      />
      <LitFace at={BOB_HEAD.at} hair={HAIR_SHORT} sad />

      {/* Tim on his little stool, his crutch by him, the iron frame on his legs */}
      <path
        d={TIM_STOOL}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      {TIM_LEGS.map((d) => (
        <Limb key={d} d={d} w={6} halo={3} />
      ))}
      {TIM_LEGS.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.hairline}
          transform="translate(2.4 0)"
        />
      ))}
      <path d="M545 272H553M542 282H550M556 272H563M554 282H561" stroke={PAPER} strokeWidth={1} />
      <Halo d={TIM_BODY} />
      <path d={TIM_BODY} fill={INK} />
      <Limb d={TIM_ARM} w={6} halo={3} />
      <Limb d={TIM_CRUTCH} w={3} halo={2.6} />
      <Limb d={TIM_CRUTCH_TOP} w={3.2} halo={2.6} />
      <LitFace at={TIM_HEAD.at} hair={HAIR_SHORT} smile />
      <Limb d={BOB_ARM} w={8} halo={3} />
      <Knock d={BOB_HAND} w={2.4} />
      <path d={BOB_HAND} fill={PAPER} />
      <path d="M526 229L533 231" stroke={INK} strokeWidth={0.7} />

      {/* the Ghost, stern, and Scrooge, who hung his head */}
      <GhostOfPresent stern />
      <Halo d={SCROOGE_GOWN} />
      <Halo d={SCROOGE_SLIPPER} />
      <path d={SCROOGE_GOWN} fill={INK} />
      <path d={SCROOGE_SLIPPER} fill={INK} />
      <path d={m.gown} fill={PAPER} />
      <path
        d="M278 202C286 212 294 222 300 238M268 264C282 268 298 268 310 264"
        fill="none"
        stroke={PAPER}
        strokeWidth={1}
      />
      <Limb d={SCROOGE_ARM} w={11} halo={3} />
      <Knock d={SCROOGE_HANDS} w={2.4} />
      <path d={SCROOGE_HANDS} fill={PAPER} />
      <path d="M298 243L306 246M297 247L305 250" stroke={INK} strokeWidth={0.7} />
      <g transform={SCROOGE_HEAD_AT}>
        <ScroogeNightHead uid={uid} seed={91} />
      </g>
    </g>
  )
}

export const aVacantSeat: LinocutArt = { width: W, height: H, Draw: AVacantSeat }
