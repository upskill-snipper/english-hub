import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Cut,
  HEAD,
  HOLLY_LEAF,
  Nightcap,
  PRESENT_FACE,
  PRESENT_HAIR,
  headAt,
  scroogeHead,
} from './cut-figure'

/**
 * Stave Three: "Ignorance and Want", the eleventh moment in the guide's
 * timeline. Every detail is from the text:
 *
 * - "looking at the Spirit as they stood together in an open place, he
 *   noticed that its hair was grey"; "the Ghost grew older, clearly older".
 *   So the Spirit is the giant of Fred's party with its long hair cut pale
 *   and its face lined, and it no longer smiles ("the Spirit's sorrowful
 *   reply"). Its dress is as Stave Three gives it: a robe "bordered with white
 *   fur", "its capacious breast was bare", a holly wreath, an empty scabbard.
 * - "The chimes were ringing the three quarters past eleven at that moment",
 *   and the Spirit's life "ends to-night ... at midnight". So a church clock
 *   over the roofs stands at a quarter to twelve, its face in the spot colour,
 *   with the chimes cut round the belfry.
 * - "an open place": paved, since it is in the city, with the setts cut
 *   bright round the Spirit's feet and fading into the dark, as its own light
 *   would fall on them.
 * - "From the foldings of its robe, it brought two children ... They knelt
 *   down at its feet, and clung upon the outside of its garment." "They were a
 *   boy and girl. Yellow, meagre, ragged, scowling, wolfish; but prostrate,
 *   too, in their humility." So they kneel at the front of its hem, thin and
 *   in rags: the boy low, one hand on the ground, glaring up; the girl with
 *   her back to the robe and a hand on its fur. They are lit by the Spirit,
 *   so they can be seen: pale, with a thick ink edge. Their yellowness is left
 *   to the words, since the print has no yellow.
 * - "'They are Man's,' said the Spirit, looking down upon them"; "'Deny it!'
 *   cried the Spirit, stretching out its hand towards the city." So its head
 *   is bowed over them and its arm is out towards the roofs of the city,
 *   held just below the level of the shoulder, one finger pointing past
 *   Scrooge at them.
 *
 *   WHY THE ARM IS LOW AND THE FINGER POINTS (review, 26 September 2026). The
 *   first draft raised the arm straight and high at a slant with the hand
 *   flat, palm down, fingers together. On a dark ground, beside two children,
 *   that silhouette read as a political salute. The arm now reaches out a
 *   little below the shoulder and ends in a pointing hand, which is what
 *   "stretching out its hand towards the city" needs and cannot be mistaken
 *   for anything else. Do not raise it again.
 * - "Scrooge started back, appalled." He leans away with his hands up, in the
 *   dressing-gown and nightcap he has worn since Stave One.
 *
 * The Spirit says it sees "Doom" written on the boy's brow. That is not
 * drawn: the words are the Spirit's, and a mark on a child's forehead could
 * read as an injury. The children are drawn with the Spirit's sorrow, not as
 * monsters: the picture shows neglect, and the text's horror is left to its
 * words. Nothing is taken from a film or a stage production. Seed 1111.
 */

const W = 860
const H = 340

type Marks = {
  sky: string
  ground: string
  halo: string
  stars: [number, number][]
  robe: string
  chimes: string
  hair: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1111)
  // Night. The sky is dark overhead and lightens towards the roofs, where the
  // city's lamps are; the Spirit's own light falls on the ground at its feet.
  const skyLight = (x: number, y: number) =>
    clamp((y - 120) / 140) * 0.5 + clamp(1 - Math.hypot(x - 650, y - 70) / 170) * 0.3
  const sky = gougeField(r, { x0: 0, x1: W, y0: 6, y1: 236 }, skyLight, {
    spacing: 7,
    max: 3.4,
  })
  const groundLight = (x: number, y: number) =>
    clamp(1 - Math.hypot((x - 470) * 0.7, (y - 322) * 1.4) / 300) * 0.92 + 0.03
  // The open place is paved with setts, rows of them growing towards us. Each
  // is cut as a paper stone whose size follows the light, so they shrink to
  // specks in the dark and the ground cannot be mistaken for water.
  let ground = ''
  let y = 241
  let row = 0
  while (y < 336) {
    const h = 6 + (y - 241) * 0.12
    let x = row % 2 ? -h : 0
    while (x < W) {
      const w = h * between(r, 1.8, 3.2)
      const L = clamp(groundLight(x + w / 2, y + h / 2))
      const f = Math.pow(L, 0.6)
      const sw = (w - 1.4) * f
      const sh = (h - 1.4) * f * 0.85
      if (sw > 1.2 && sh > 0.8) {
        const cx = x + w / 2 + between(r, -0.5, 0.5)
        const cy = y + h / 2
        ground += `M${n(cx - sw / 2)} ${n(cy - sh / 2)}H${n(cx + sw / 2)}V${n(cy + sh / 2)}H${n(cx - sw / 2)}Z`
      }
      x += w
    }
    y += h
    row++
  }
  const halo = rays(rng(1112), 650, 70, { from: 44, to: 140, every: 6, width: 2 })
  const stars: [number, number][] = []
  for (let i = 0; i < 30; i++) {
    const x = between(r, 20, 840)
    const y = between(r, 56, 160)
    if (Math.hypot(x - 650, y - 70) > 150 && !(x < 340 && y < 70)) stars.push([x, y])
  }
  // The robe: heavy folds, fanning out to the flared front of the hem.
  let robe = ''
  for (let k = 0; k < 12; k++) {
    const t = k / 11
    robe += gouge(
      650 + (t - 0.5) * 70 + between(r, -3, 3),
      118 + between(r, 0, 40),
      530 + t * 200 + between(r, -4, 4),
      318,
      0.7 + between(r, 0, 1.2),
      between(r, -5, 5),
    )
  }
  // The chimes: short arcs of sound either side of the belfry.
  let chimes = ''
  for (let k = 0; k < 3; k++) {
    chimes += arc(252, 100, 24 + k * 10, deg(200), deg(245))
    chimes += arc(252, 100, 24 + k * 10, deg(295), deg(340))
  }
  // The strands of the Spirit's grey hair, in its head frame.
  let hair = ''
  for (let k = 0; k < 7; k++) {
    const x = -8 + k * 5
    hair += `M${n(x)} ${n(-50 + k * 1.5)}C${n(x + 8)} -30 ${n(x + 6)} 0 ${n(x + 10)} ${n(30 - k)}`
  }
  cached = { sky, ground, halo, stars, robe, chimes, hair }
  return cached
}

/** The city along the horizon, and the church whose clock has just chimed. */
const ROOFS =
  'M0 236V204L22 192L44 204V188H52V204L76 190L100 204H130V194L150 184L170 194V204H214V236ZM290 236V200L310 188L330 200V186H338V200L366 190L392 202V236ZM700 236V204L722 192L744 204V190H752V204L780 192L808 204H860V236Z'
const CHURCH = 'M236 236V120H242L252 60L262 120H268V236ZM222 236V180H236V236ZM268 236V184H282V236Z'

/** Scrooge, started back, appalled, his hands up. */
const SCROOGE_HEAD = scroogeHead(118, 144, 32, false, -12)
const SCROOGE_GOWN = [
  'M112 160C102 176 98 200 100 222C94 248 88 274 82 312L146 314C144 284 140 258 136 232C140 206 138 184 130 166C124 160 118 158 112 160Z',
  'M78 310L96 310L98 318L74 318ZM132 312L152 312L156 320L132 320Z',
]
const SCROOGE_LIMBS: [string, number][] = [
  ['M124 172L146 176L162 158', 10],
  ['M118 180L140 196L156 190', 10],
]
const SCROOGE_HANDS = [
  'M160 160C160 152 164 146 170 146C174 147 174 152 172 158L168 164Z',
  'M154 194C155 186 160 182 166 183C169 185 168 190 165 194L160 198Z',
]

/**
 * The Spirit, in its own frame (the base of the neck at the origin, facing
 * left), placed with GHOST_AT. The robe's front flares forward over the
 * ground where the children kneel.
 */
const GHOST_AT = 'translate(660 104)'
const GHOST = {
  robe: 'M-44 8C-66 50 -96 140 -136 222L82 222C74 142 60 52 42 6C24 -4 -24 -4 -44 8Z',
  chest: 'M-20 0L16 0C12 26 4 50 -4 66C-10 48 -16 24 -20 0Z',
  furL: 'M-23 -3L-15 -3C-12 22 -8 46 -3 66L-10 71C-15 48 -19 24 -23 -3Z',
  furR: 'M12 -3L20 -3C16 24 8 50 -2 71L-6 64C3 46 9 22 12 -3Z',
  furFront: 'M-8 78L1 78C-4 120 -14 170 -30 222L-42 222C-26 170 -14 120 -8 78Z',
  furHem: 'M-136 210C-60 220 20 220 82 210L82 224L-137 224Z',
  girdle: 'M-54 70C-20 77 20 77 55 66L56 74C20 85 -20 85 -55 78Z',
  scabbard: 'M34 76L44 74L74 156L66 160Z',
}
/** The arm, out towards the city a little below the shoulder (see the docblock). */
const GHOST_LIMBS: [string, number][] = [['M-34 14L-92 26L-146 37.6', 18]]
/**
 * The pointing hand, in its own frame: the wrist at the origin, the forefinger
 * out along -x, the other fingers curled under, the thumb laid along the top.
 * HAND_AT lays it along the forearm.
 */
const GHOST_HAND =
  'M0 -7C-5 -8.5 -10 -8 -14 -6.5L-32 -6.5C-35.5 -6.3 -35.5 -2.3 -32 -2.2L-17 -2C-18 0 -18 2.5 -17 4C-17.5 6.5 -16 8.5 -13 8.5C-8 9 -3 8.5 0 7Z'
const GHOST_THUMB = 'M-2 -6.8C-5 -11 -10.5 -12.5 -14 -11C-16 -10 -15 -7.5 -13 -7Z'
const GHOST_KNUCKLES = 'M-17 1.2H-11M-16.5 4.6H-10.5'
const HAND_AT = 'translate(-149 38) rotate(-12)'
/** The Spirit's head, bowed over the children. */
const GHOST_HEAD_TILT = 'rotate(-16)'
const WREATH: [number, number, number][] = [
  [-17, -46, -50],
  [-8, -54, -26],
  [4, -57, -4],
  [15, -53, 22],
  [22, -44, 52],
]

/**
 * The children: lit by the Spirit, pale with a thick ink edge (the style
 * guide's "ink halo round a lit one"), so their faces can carry a scowl.
 * Their rags are hatched, so cloth and thin bare limbs read apart. Drawn a
 * little small and set with CHILDREN_AT, which enlarges them from the ground
 * up and brings the girl's hand to the fur of the robe.
 */
const CHILDREN_AT = 'translate(26 0) translate(460 322) scale(1.35) translate(-460 -322)'
const BOY_HEAD = headAt(398, 248, 28, false, -8)
const GIRL_HEAD = headAt(480, 234, 28, false, 4)

interface ChildShape {
  /** The rags: hatched. */
  rags: string[]
  /** Bare skin: hands, shins, feet. */
  skin: string[]
  /** Thin bare arms, stroked. */
  arms: string[]
  /** The hair, in the head's own frame. */
  hair: string
  head: { at: string; scale: number }
}

const BOY: ChildShape = {
  rags: [
    // a ragged shirt over a thin, hunched back, torn into points at the hem
    'M407 262C402 266 399 276 400 288C401 296 404 302 409 304L412 310L416 304L420 310L424 303L428 308L430 300C433 290 432 278 428 269C423 262 413 259 407 262Z',
    // ragged breeches to the knee
    'M404 312C410 304 420 300 430 300L436 310L428 314L424 322L404 323C401 321 401 316 404 312Z',
  ],
  skin: [
    // the bare shin and foot tucked behind
    'M426 312L438 310L452 318L454 323L424 323Z',
    // the hand on the ground
    'M374 316C374 311 381 310 386 312L389 320L374 321Z',
  ],
  arms: ['M405 272L394 294L384 314'],
  hair: 'M-11 -6C-12 -16 -4 -21 4 -20L2 -25L8 -21L11 -26L13 -19L18 -20L16 -13C19 -7 19 1 16 8L13 4L12 12L9 6C8 -2 4 -8 -2 -9C-6 -9 -9 -8 -11 -6Z',
  head: BOY_HEAD,
}

const GIRL: ChildShape = {
  rags: [
    // a thin frock, her back to the robe, its skirt torn at the hem
    'M477 250C472 253 469 262 469 274C469 286 471 294 474 300L498 300C501 290 501 276 498 263C495 253 485 248 477 250Z',
    'M470 298C462 304 456 312 454 322L459 318L463 323L468 318L473 323L478 318L483 323L488 318L493 323L498 318L503 323L507 322C507 314 505 306 502 298Z',
  ],
  skin: [
    // the hand holding the fur of the robe
    'M522 234C528 232 532 236 530 242L524 246Z',
  ],
  arms: ['M494 258L511 248L524 240', 'M478 262L472 280L476 296'],
  hair: 'M-10 -8C-10 -16 -2 -19 6 -18C14 -17 16 -8 15 2C15 12 16 26 18 40L10 40C9 28 8 16 6 6C4 0 0 -6 -4 -8Z',
  head: GIRL_HEAD,
}

/** Diagonal hatching over the box a child's rags sit in. */
function hatch(x0: number, x1: number, y0: number, y1: number) {
  let d = ''
  for (let x = x0 - (y1 - y0); x < x1; x += 3.2) d += `M${n(x)} ${y1}L${n(x + (y1 - y0))} ${y0}`
  return d
}
const BOY_HATCH = hatch(396, 440, 256, 324)
const GIRL_HATCH = hatch(452, 510, 246, 324)

/** One lit child: pale inside a thick ink edge, the rags hatched, then the head. */
function Child({ c, hatching, clip }: { c: ChildShape; hatching: string; clip: string }) {
  const s = c.head.scale
  const fills = [...c.rags, ...c.skin]
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          {c.rags.map((d) => (
            <path key={d} d={d} />
          ))}
        </clipPath>
      </defs>
      {/* the ink edge round the whole child */}
      <g fill={INK} stroke={INK} strokeWidth={4.4} strokeLinejoin="round">
        {fills.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={INK} strokeWidth={8.6} strokeLinecap="round">
        {c.arms.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g transform={c.head.at}>
        <path d={HEAD} fill={INK} stroke={INK} strokeWidth={4.4 / s} strokeLinejoin="round" />
      </g>
      {/* the child, pale */}
      <g fill={PAPER}>
        {fills.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={PAPER} strokeWidth={4.2} strokeLinecap="round">
        {c.arms.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g clipPath={`url(#${clip})`}>
        <path d={hatching} fill="none" stroke={INK} strokeWidth={1} />
      </g>
      <g fill="none" stroke={INK} strokeWidth={1.2} strokeLinejoin="round">
        {c.rags.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g transform={c.head.at}>
        <path d={HEAD} fill={PAPER} />
        <path d={c.hair} fill={INK} />
        {/* a scowl: the brow cut down hard towards the nose, the eye glaring under it */}
        <path d="M-13.5 -6.5L-4.5 -2.5" stroke={INK} strokeWidth={2.4 / s} strokeLinecap="round" />
        <circle cx={-8.5} cy={-0.3} r={1.6} fill={INK} />
        {/* a hard mouth, a hollow cheek */}
        <path
          d="M-11.8 8.4L-7.5 8.8M-3.5 2Q-2 6 -4 10"
          fill="none"
          stroke={INK}
          strokeWidth={1.4 / s}
          strokeLinecap="round"
        />
      </g>
    </g>
  )
}

function IgnoranceAndWant({ uid }: ArtProps) {
  const m = marks()
  const hairClip = `${uid}-grey`
  return (
    <>
      <defs>
        <clipPath id={hairClip}>
          <path d={PRESENT_HAIR} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 200], push: 1.03 })}>
        {/* the night: sky, stars, the Spirit's light */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.halo} fill={PAPER} />
        <g fill={PAPER}>
          {m.stars.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={1.1} />
          ))}
        </g>

        {/* the roofs of the city, and the church clock at a quarter to twelve */}
        <path d={ROOFS} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={CHURCH} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d="M246 112L252 76L258 112M246 98H258M242 108H262"
          fill="none"
          stroke={PAPER}
          strokeWidth={1}
        />
        <circle cx={252} cy={140} r={11} fill={RED} stroke={PAPER} strokeWidth={1.4} />
        <path
          d="M252 140L251 132.5M252 140L243.5 140"
          stroke={INK}
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <path d={m.chimes} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
        <path
          d="M242 164H262V184H242ZM242 198H262V218H242Z"
          fill="none"
          stroke={PAPER}
          strokeWidth={1}
        />

        {/* the open place */}
        <rect x={0} y={236} width={W} height={H - 236} fill={INK} />
        <path d={m.ground} fill={PAPER} />
        <path d={gouge(0, 238, W, 238, 1.4)} fill={PAPER} />

        {/* Scrooge, started back */}
        <Cut
          parts={[
            SCROOGE_HEAD,
            { shapes: SCROOGE_GOWN, limbs: SCROOGE_LIMBS, front: SCROOGE_HANDS },
          ]}
        >
          <Nightcap part={SCROOGE_HEAD} />
          <path d="M114 162C112 180 110 200 110 222" fill="none" stroke={PAPER} strokeWidth={1.4} />
          <path d="M100 224Q118 229 136 224" fill="none" stroke={PAPER} strokeWidth={1.4} />
          <path d="M116 228L112 252M120 228L122 250" stroke={PAPER} strokeWidth={1.2} />
          <path
            d={gouge(128, 236, 138, 306, 1.1, -0.6) + gouge(104, 240, 94, 306, 1)}
            fill={PAPER}
          />
        </Cut>

        {/* the Spirit, grown old */}
        <g transform={GHOST_AT}>
          <Cut
            parts={[
              { shapes: [GHOST.robe], limbs: GHOST_LIMBS },
              { front: [GHOST_HAND, GHOST_THUMB], at: HAND_AT },
            ]}
          />
          <g transform="translate(-660 -104)">
            <path d={m.robe} fill={PAPER} />
          </g>
          <path d={GHOST.chest} fill={PAPER} />
          <path
            d="M-12 14Q-5 18 3 14M-10 28Q-4 31 1 28"
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
          />
          <g fill={PAPER}>
            <path d={GHOST.furL} />
            <path d={GHOST.furR} />
            <path d={GHOST.furFront} />
          </g>
          <path d={GHOST.furHem} fill={PAPER} stroke={INK} strokeWidth={1.3} />
          <path d={GHOST.girdle} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={GHOST.scabbard} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <ellipse cx={39} cy={75} rx={5.4} ry={2.2} fill={PAPER} />
          {/* the fur cuff, and the hand stretched out, pointing towards the city */}
          <path d={wedge(-137, 35, -148, 37.4, 16, 16)} fill={PAPER} />
          <g transform={HAND_AT}>
            <path d={GHOST_HAND} fill={PAPER} stroke={INK} strokeWidth={1.1} />
            <path d={GHOST_THUMB} fill={PAPER} stroke={INK} strokeWidth={1.1} />
            <path d={GHOST_KNUCKLES} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
          </g>
          <g transform={GHOST_HEAD_TILT}>
            {/* "its hair was grey": the long hair cut pale, with strands of ink */}
            <path d={PRESENT_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.4} />
            <g clipPath={`url(#${hairClip})`}>
              <path d={m.hair} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
            </g>
            <path
              d={PRESENT_FACE}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
            {/* a lowered eye, a grave mouth, the lines of age */}
            <g fill="none" stroke={INK} strokeLinecap="round">
              <path d="M-17 -35Q-13 -32 -8 -34" strokeWidth={1.8} />
              <path d="M-18 -39L-9 -40" strokeWidth={2} />
              <path d="M-20 -16L-12 -15" strokeWidth={1.4} />
              <path
                d="M-6 -33L-2 -30M-6 -29L-2 -27M-12 -24Q-10 -18 -13 -12M-14 -46H-8"
                strokeWidth={LINE.hairline}
              />
            </g>
            {WREATH.map(([x, y, a]) => (
              <g key={x} transform={`translate(${x} ${y}) rotate(${a})`}>
                <path d={HOLLY_LEAF} fill={INK} stroke={PAPER} strokeWidth={0.8} />
                <path d="M-6 0.5L6 0.5" stroke={PAPER} strokeWidth={0.7} />
              </g>
            ))}
            <g fill={RED}>
              <circle cx={-12} cy={-53} r={2.4} />
              <circle cx={-2} cy={-58} r={2.4} />
              <circle cx={10} cy={-58} r={2.2} />
              <circle cx={19} cy={-52} r={2.4} />
            </g>
          </g>
        </g>

        {/* the children, brought out from the folds of the robe */}
        <g className="lc-fade-in" style={timing({ delay: 0.8, dur: 1.4 })}>
          <g transform={CHILDREN_AT}>
            <Child c={GIRL} hatching={GIRL_HATCH} clip={`${uid}-want`} />
            <Child c={BOY} hatching={BOY_HATCH} clip={`${uid}-ignorance`} />
          </g>
        </g>
      </g>
    </>
  )
}

export const ignoranceAndWant: LinocutArt = { width: W, height: H, Draw: IgnoranceAndWant }
