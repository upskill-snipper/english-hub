import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wave,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, gripHand, type ArmPose, type P } from './people'

/**
 * Act 1, Scene 1: "The storm at sea", the first moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "On a ship at sea; a tempestuous noise of thunder and lightning heard."
 *   So the sky is black, cut with rain and one fork of lightning, and the
 *   ship heels hard in a heavy sea: the deck slopes, the mast leans, and on
 *   the right a wave rears over the rail and spills on to the deck.
 * - "Take in the topsail"; "Bring her to try wi' th' maincourse". The
 *   topsail is furled on its yard, and the main course, the great square
 *   sail, is set and full of wind: it is the pale ground the Boatswain is
 *   seen against.
 * - Ariel did this, and says how: "now on the beak, Now in the waist, the
 *   deck ... I flam'd amazement ... on the topmast, The yards, and bowsprit,
 *   would I flame distinctly". So the spot colour is his fire, burning in
 *   tongues at the ends of the main yard (the topmast is above the block's
 *   edge). He himself is not seen.
 * - "Enter Alonso, Sebastian, Antonio, Ferdinand, Gonzalo and others." "I
 *   pray now, keep below." "Hence! What cares these roarers for the name of
 *   king? To cabin! silence! Trouble us not." The Boatswain, legs braced on
 *   the sloping deck, one hand closed on a rope, points down at the deck:
 *   below, to their cabins, by the open hatch on the left. Gonzalo,
 *   white-bearded, nearest him, holds up an open hand before his breast
 *   ("Nay, good, be patient"); behind, the King in his crown asks for the
 *   master ("Where's the master?"), Antonio in the Duke of Milan's hat grips
 *   his sword's hilt, Sebastian braces himself, and the young Ferdinand, by
 *   the hatch, throws an arm back to keep his feet. Two mariners haul on a
 *   rope: "Heigh, my hearts! cheerly, cheerly".
 *
 * By the kit's rule (./people.tsx) nobody is in the water and nothing is
 * drowning: the cries of "We split, we split!" come later in the scene, and
 * Ariel tells Prospero "Not a hair perish'd". The people are cut from the
 * kit. Seeds: 3101 (sky and rain), 3102 (sea), 3103 (the sail), 3104 (deck),
 * 3105 (the wave).
 *
 * REVIEWED 2 October 2026. The fire was first cut as single drops of red at
 * the yards' ends, and at panel size they read as drops of blood; it is now
 * cut as tongues of flame blown by the wind, their light cut round them;
 * three upright tongues on a bed were tried next, and beside the King's
 * crown they read as little red crowns.
 *
 * REVIEWED AGAIN, the same day. The two mariners' hands closed on the air a
 * finger's breadth above their rope, so they read as men walking with their
 * arms out; and the Boatswain's rope ran into the crown of his head, his
 * raised arm hidden behind it. Every hand on a rope is now placed on it:
 * the rope is drawn in the panel, and `onRope` brings each point of it into
 * the figure's own frame, so the fist closes round the line itself. The
 * Boatswain stands clear of the mast, his fist at the height of his ear on a
 * rope that runs from the yard through it to the deck (with the rope ending
 * in a fist held over his head, he seemed to raise a fist). His pointing
 * finger had come to touch Gonzalo's hand; it points down at the deck now,
 * and Gonzalo's hand is held nearer his breast. The wave's face was cut in
 * upright streaks and read as a ribbed shell; its cuts now follow the curve
 * of the water up into the lip.
 */

const W = 860
const H = 340
/** The ship heels: its lines rise this much from left to right. */
const HEEL = -0.1
/** The top of the far rail, and the deck at its foot, at x. */
const rail = (x: number) => 216 + x * HEEL
const deckFar = (x: number) => 248 + x * HEEL
/** Where a figure's feet stand at x, on the near part of the deck. */
const foot = (x: number, dy = 0): P => [x, 332 + x * HEEL + dy]
/** The mast leans with the ship towards the low side: a point at height y on it. */
const MAST = (y: number): P => [500 - (y - 230) * HEEL, y]

type Marks = {
  sky: string
  seaLit: string
  litRidges: string
  rain: string
  bolt: string
  sea: string
  crests: string
  wave: string
  waveCuts: string
  spill: string
  spillRipples: string
  sail: string
  sailCuts: string
  furl: string
  deck: string
  bulwark: string
}

const YARD_Y = 64
const yardAt = (x: number): P => [x, YARD_Y + (x - 500) * HEEL]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(3101)
  // The black sky, lit round the lightning on the left: paper cuts that
  // thicken towards the flash.
  const flash: P = [168, 70]
  const sky = gougeField(
    r,
    { x0: 0, x1: W, y0: 4, y1: 230 },
    (x, y) => clamp(0.84 - Math.hypot((x - flash[0]) * 0.8, y - flash[1]) / 300),
    { spacing: 6, len: [20, 80], gap: [6, 18], max: 3.4 },
  )
  // Rain, slanting from the right, cut in paper.
  let rain = ''
  for (let i = 0; i < 100; i++) {
    const x = between(r, -20, W + 60)
    const y = between(r, 0, 220)
    const len = between(r, 16, 34)
    rain += gouge(x, y, x - len * 0.42, y + len, 0.55)
  }
  const bolt =
    'M196 2L178 40L190 42L160 92L174 94L142 150L182 86L168 84L198 38L186 36L208 2Z' +
    'M174 94L156 116L166 108L160 132L176 100Z'

  // The sea beyond the rail, level while the ship heels: black ridges, their
  // crests cut in paper.
  const q = rng(3102)
  let sea = ''
  let crests = ''
  for (let k = 0; k < 6; k++) {
    const y0 = 150 + k * 16
    const pts = wave(-20, W + 20, y0, 7 + k, 70 + k * 10, between(q, 0, 6), 50)
    sea += 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + `L${W + 20} 260L-20 260Z`
    for (let i = 0; i < pts.length - 1; i += 1)
      if (q() < 0.55 && pts[i][0] > 420)
        crests += gouge(
          pts[i][0],
          pts[i][1] + 1.8,
          pts[i + 1][0],
          pts[i + 1][1] + 1.8,
          0.9 + k * 0.25,
          -1,
        )
  }

  // The water behind the courtiers, lit by the flash: a pale stretch of sea
  // with the ridges cut across it in ink, so their dark heads read against
  // it, as the style guide asks of a focal figure. (Against the black ridges
  // their faces were lost.) It fades into the dark under the sail.
  let seaLit = 'M-10 138'
  for (let x = -10; x <= 420; x += 10) seaLit += `L${n(x)} ${n(138 + 3 * Math.sin(x / 19))}`
  seaLit += 'C470 150 500 190 520 236L-10 236Z'
  const lit = rng(3107)
  let litRidges = ''
  for (let k = 0; k < 7; k++) {
    const y0 = 148 + k * 12
    const pts = wave(-20, 470 - k * 8, y0, 3 + k * 0.6, 54 + k * 8, between(lit, 0, 6), 28)
    litRidges += ribbon(pts, 1.4 + k * 0.5, 0.7, true)
  }

  // The wave rearing beyond the rail on the right: a black wall of water
  // rising to a crest that curls over to the left, its lip cut white and
  // breaking into fingers of foam, streaks running down its face, spray
  // flung above it.
  const wave2 = 'M598 170C626 140 660 100 704 70C736 48 776 34 816 34C840 34 858 40 870 48L870 170Z'
  const k = rng(3105)
  // the curling lip, and the hook of water under it
  let waveCuts =
    'M820 40C784 36 746 46 718 66C698 80 684 98 680 114C692 104 700 98 712 96C708 86 716 76 728 70C752 58 786 52 820 50Z'
  // fingers of foam hanging from the lip, curling down and back, of
  // different lengths (all alike and evenly spaced, they read as a comb)
  const claws: [number, number][] = [
    [0, 1.1],
    [15, 0.7],
    [27, 1],
    [44, 0.8],
    [58, 1.15],
    [76, 0.75],
    [90, 0.95],
  ]
  for (const [dx, sz] of claws) {
    const x0 = 696 + dx
    const y0 = 86 - dx * 0.34
    waveCuts += ribbon(
      [
        [x0, y0],
        [x0 - 7 * sz, y0 + 7 * sz],
        [x0 - 10 * sz, y0 + 15 * sz],
        [x0 - 7 * sz, y0 + 20 * sz],
        [x0 - 2 * sz, y0 + 19 * sz],
      ],
      4.4 * sz,
      0.7,
      true,
    )
  }
  // the water of the wave's face, cut in lines that follow its leading edge
  // up into the lip, each set further in under the crest: they show the
  // water rising and turning over. (Cut upright, they read as the ribs of a
  // shell.)
  const edge = (t: number): Pt => {
    const seg = (a: Pt, b: Pt, c: Pt, d: Pt, u: number): Pt => [
      (1 - u) ** 3 * a[0] +
        3 * (1 - u) ** 2 * u * b[0] +
        3 * (1 - u) * u * u * c[0] +
        u ** 3 * d[0],
      (1 - u) ** 3 * a[1] +
        3 * (1 - u) ** 2 * u * b[1] +
        3 * (1 - u) * u * u * c[1] +
        u ** 3 * d[1],
    ]
    return t < 0.5
      ? seg([598, 170], [626, 140], [660, 100], [704, 70], t * 2)
      : seg([704, 70], [736, 48], [776, 34], [816, 34], t * 2 - 1)
  }
  for (let j = 1; j <= 9; j++) {
    const off = 6 + j * 11
    const pts: Pt[] = []
    for (let i = 0; i <= 15; i++) {
      const t = 0.04 + (i / 15) * 0.92
      const a = edge(t - 0.01)
      const b = edge(t + 0.01)
      const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
      const p = edge(t)
      const wob = 1.6 * Math.sin(t * 19 + j)
      pts.push([p[0] - ((b[1] - a[1]) / L) * (off + wob), p[1] + ((b[0] - a[0]) / L) * (off + wob)])
    }
    waveCuts += ribbon(pts, 2.6 - j * 0.12, 0.8, true)
  }
  // spray flung up off the crest
  for (let i = 0; i < 40; i++) {
    const x = between(k, 690, 860)
    const y = between(k, 8, 44) + (x - 690) * -0.06
    const rr = between(k, 0.9, 2.2)
    waveCuts += `M${n(x - rr)} ${n(y)}a${n(rr)} ${n(rr)} 0 1 0 ${n(rr * 2)} 0a${n(rr)} ${n(rr)} 0 1 0 ${n(-rr * 2)} 0Z`
  }
  // the white water spilling over the rail and across the deck, its ripples
  // and the curls of its edge cut in ink, so it reads as water
  const spill =
    'M640 192C670 182 700 176 730 172C770 166 820 160 870 150L870 226C830 236 790 244 760 252C740 258 728 250 742 242C728 240 710 248 698 244C688 240 702 232 688 228C672 224 652 222 640 212Z'
  let spillRipples = ''
  for (let i = 0; i < 16; i++) {
    const x = between(k, 668, 852)
    const y = between(k, 184, 236) - (x - 668) * 0.12
    const w = between(k, 8, 16)
    spillRipples += `M${n(x)} ${n(y)}q${n(w / 2)} ${n(-w / 3)} ${n(w)} 0`
  }

  // The main course, set and full of wind: paper, its seams and reef points
  // cut in ink, its foot bellying.
  const L0 = yardAt(356)
  const R0 = yardAt(644)
  const sail = `M${n(L0[0])} ${n(L0[1] + 4)}L${n(R0[0])} ${n(R0[1] + 4)}C${n(R0[0] + 10)} ${n(R0[1] + 50)} ${n(R0[0] - 6)} ${n(R0[1] + 96)} ${n(R0[0] - 26)} ${n(R0[1] + 128)}C${n(R0[0] - 90)} ${n(R0[1] + 150)} ${n(L0[0] + 70)} ${n(L0[1] + 156)} ${n(L0[0] - 6)} ${n(L0[1] + 130)}C${n(L0[0] - 22)} ${n(L0[1] + 90)} ${n(L0[0] - 14)} ${n(L0[1] + 44)} ${n(L0[0])} ${n(L0[1] + 4)}Z`
  const sr = rng(3103)
  let sailCuts = ''
  for (let i = 1; i < 9; i++) {
    const top = yardAt(L0[0] + ((R0[0] - L0[0]) * i) / 9)
    const bx = top[0] - 20 + (i - 4.5) * 3
    sailCuts += `M${n(top[0])} ${n(top[1] + 5)}C${n(top[0] + 4)} ${n(top[1] + 50)} ${n(bx + 6)} ${n(top[1] + 100)} ${n(bx)} ${n(top[1] + 136 - Math.abs(i - 4.5) * 4)}`
  }
  for (let i = 0; i < 12; i++) {
    const p = yardAt(L0[0] + 14 + i * 23)
    sailCuts += `M${n(p[0])} ${n(p[1] + 20)}l${n(between(sr, -1, 1))} 6`
  }
  // The topsail, taken in: furled on its yard high up the mast.
  const t0 = yardAt(410)
  const t1 = yardAt(590)
  const lift = -52
  const furl = ribbon(
    [
      [t0[0] - 4, t0[1] + lift],
      [t0[0] + 40, t0[1] + lift + 5],
      [(t0[0] + t1[0]) / 2 - 6, (t0[1] + t1[1]) / 2 + lift + 7],
      [t1[0] - 40, t1[1] + lift + 5],
      [t1[0] - 8, t1[1] + lift],
    ],
    12,
    0.6,
    true,
  )

  // The deck: wet planks running along the ship, the far ones closer.
  const d = rng(3104)
  let deck = ''
  for (let i = 0; i < 9; i++) {
    const y0 = deckFar(0) + 6 + i * i * 1.6 + i * 4
    deck += gouge(-10, y0 + 10 * -HEEL * -1, W + 10, y0 + (W + 10) * HEEL, 0.7 + i * 0.18)
    for (let x = between(d, 0, 120); x < W; x += between(d, 90, 200))
      deck += gouge(x, y0 + x * HEEL - 2, x + 1, y0 + x * HEEL + 4 + i, 0.5)
  }
  // The bulwark along the far side: its planks, and the rail on top.
  let bulwark = ''
  for (let y = 0; y < 30; y += 7)
    bulwark += gouge(-10, rail(-10) + y + 2, W + 10, rail(W + 10) + y + 2, 0.9)

  cached = {
    sky,
    seaLit,
    litRidges,
    rain,
    bolt,
    sea,
    crests,
    wave: wave2,
    waveCuts,
    spill,
    spillRipples,
    sail,
    sailCuts,
    furl,
    deck,
    bulwark,
  }
  return cached
}

/**
 * A flame of Ariel's fire at (x, y), about 44 high: two tongues blown to the
 * left by the wind, rising from a bed of fire, as the pilot cuts every fire
 * (src/data/comics/a-christmas-carol/counting-house.tsx), with its light cut
 * round it in paper on the black sky (fireLight).
 */
function fire(x: number, y: number, s = 1) {
  const q = (a: number, b: number) => `${n(x + a * s)} ${n(y + b * s)}`
  return (
    `M${q(-10, 0)}C${q(-14, -10)} ${q(-6, -16)} ${q(-10, -26)}C${q(-12, -32)} ${q(-10, -38)} ${q(-14, -44)}` +
    `C${q(-2, -38)} ${q(4, -28)} ${q(2, -18)}C${q(6, -22)} ${q(8, -28)} ${q(6, -34)}` +
    `C${q(14, -24)} ${q(16, -10)} ${q(10, 0)}Q${q(0, 5)} ${q(-10, 0)}Z`
  )
}
/** The light of a flame, cut in paper on the black round it. */
const fireLight = (x: number, y: number, s = 1) =>
  rays(rng(3106 + Math.round(x)), x - 2 * s, y - 20 * s, {
    from: 28 * s,
    to: 58 * s,
    every: 16,
    width: 1.8,
  })

/** The hatch to the cabins, on the near deck at the left: a dark opening, a ladder going down, its cover raised. */
const HATCH = 'M20 312L120 302L130 336L8 344Z'
const LADDER = 'M42 314L38 344M94 309L98 342M40 322L95 317M39 330L96 325M38 338L97 333'
const HATCH_COVER = 'M18 312L120 302L114 268L24 280Z'

/**
 * Where a figure stands: its feet at `at`, `s` its whole scale (the scale
 * given to Person times the kit's size for that person: 1.02 for the
 * Boatswain, 0.98 for a mariner, in ./people.tsx), facing left as every
 * seaman here does, and leaning back `lean` degrees about its feet.
 */
type Stand = { at: P; s: number; lean: number }
/** A point in the figure's own frame, in the panel. */
function place(f: Stand, [x, y]: P): P {
  const a = deg(f.lean)
  const dx = -x * f.s
  const dy = y * f.s
  return [
    f.at[0] + dx * Math.cos(a) - dy * Math.sin(a),
    f.at[1] + dx * Math.sin(a) + dy * Math.cos(a),
  ]
}
/** A point of the panel, in the figure's own frame. */
function unplace(f: Stand, [x, y]: P): P {
  const a = deg(-f.lean)
  const dx = x - f.at[0]
  const dy = y - f.at[1]
  return [-(dx * Math.cos(a) - dy * Math.sin(a)) / f.s, (dx * Math.sin(a) + dy * Math.cos(a)) / f.s]
}
/**
 * An arm from `shoulder` (in the figure's frame) whose fist closes on the
 * rope at `on` (in the panel), the rope running towards `along`: the fist is
 * laid along the rope with its middle on it, so the hand is seen to hold the
 * line and not the air beside it. `bend` drops the elbow.
 */
function onRope(f: Stand, shoulder: P, on: P, along: P, bend: number): ArmPose {
  const a = deg(-f.lean)
  const rx = along[0] * Math.cos(a) - along[1] * Math.sin(a)
  const ry = along[0] * Math.sin(a) + along[1] * Math.cos(a)
  const ang = (Math.atan2(ry, -rx) * 180) / Math.PI
  const c = unplace(f, on)
  const wrist: P = [c[0] - Math.cos(deg(ang)) * 5, c[1] - Math.sin(deg(ang)) * 5]
  const elbow: P = [
    (shoulder[0] + wrist[0]) / 2 - bend * 0.3,
    Math.max(shoulder[1], wrist[1]) + bend,
  ]
  return { pts: [shoulder, elbow, wrist], hand: 'grip', deg: ang }
}
/** The fist again, printed over the rope that runs through it. */
function Fist({ f, arm }: { f: Stand; arm: ArmPose }) {
  const g = gripHand(arm.pts[arm.pts.length - 1], arm.deg ?? 0)
  return (
    <g
      transform={`rotate(${f.lean} ${n(f.at[0])} ${n(f.at[1])}) translate(${n(f.at[0])} ${n(f.at[1])}) scale(${n(-f.s)} ${n(f.s)})`}
    >
      <path d={g.d} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
    </g>
  )
}

// The Boatswain, clear of the mast, his hand closed on a rope that runs from
// the yard down through his fist to the deck behind him. (Held above his
// head with the rope ending in it, it read as a raised fist.)
const BOSUN: Stand = { at: foot(446), s: 0.86 * 1.02, lean: 0 }
/** The middle of his fist, in his frame: at the height of his ear, behind his head. */
const BOSUN_FIST: P = [-30, -170]
const BOSUN_ARM: ArmPose = {
  pts: [
    [-4, -130],
    [-26, -140],
    [BOSUN_FIST[0], BOSUN_FIST[1] + 5],
  ],
  hand: 'grip',
  deg: -90,
}
const bosunHold = place(BOSUN, BOSUN_FIST)

// The mariners hauling: a rope from high on the mast to the first man's
// leading fist, taut and level through the four fists, and its tail falling
// behind the second man to the deck.
const MARINER_1: Stand = { at: foot(640), s: 0.8 * 0.98, lean: 10 }
const MARINER_2: Stand = { at: foot(722), s: 0.78 * 0.98, lean: 12 }
const ropeY = (x: number) => 177 + (x - 620) * 0.005
const LEVEL: P = [-1, -0.005]
const M1_FAR = onRope(MARINER_1, [-4, -128], [620, ropeY(620)], [-1, -0.25], 4)
const M1_NEAR = onRope(MARINER_1, [5, -126], [636, ropeY(636)], LEVEL, 14)
const M2_FAR = onRope(MARINER_2, [-4, -128], [708, ropeY(708)], LEVEL, 4)
const M2_NEAR = onRope(MARINER_2, [5, -126], [724, ropeY(724)], LEVEL, 14)
const HAUL: Pt[] = [
  MAST(100),
  [620, ropeY(620)],
  [724, ropeY(724)],
  [744, 186],
  [766, 214],
  [784, 246],
  [800, 254],
]

function TheStormAtSea({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  const mastTop = MAST(-30)
  const mastFoot = MAST(260)
  const yardL = yardAt(346)
  const yardR = yardAt(654)
  const topL = yardAt(400)
  const topR = yardAt(600)
  const stays = [
    [mastTop, [60, rail(60)]],
    [mastTop, [150, rail(150)]],
    [mastTop, [820, rail(820)]],
    [MAST(40), [250, rail(250)]],
    [MAST(40), [760, rail(760)]],
  ] as [P, P][]
  const stayPath = stays.map(([a, b]) => `M${n(a[0])} ${n(a[1])}L${n(b[0])} ${n(b[1])}`).join('')
  // the Boatswain's rope, from the yard through his fist to the deck
  const bosunRope = `M${n(bosunHold[0])} ${n(yardAt(bosunHold[0])[1] + 3)}L${n(bosunHold[0])} ${n(foot(bosunHold[0])[1] - 2)}`
  const haul = 'M' + HAUL.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <path d={`M-10 140H${W + 10}V${rail(W + 10)}L-10 ${rail(-10)}Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the black sky, rain, and the lightning lighting it */}
        <rect x={0} y={0} width={W} height={H} fill={INK} />
        <path d={m.sky} fill={PAPER} />
        <path className="lc-drift-r" style={timing({ dur: 2.4 })} d={m.rain} fill={PAPER} />
        <path
          className="lc-fade-in"
          style={timing({ delay: 0.5, dur: 0.6 })}
          d={m.bolt}
          fill={PAPER}
        />

        {/* the sea beyond the rail, level as the ship heels */}
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} stroke={PAPER} strokeWidth={1.2} />
          <path d={m.crests} fill={PAPER} />
          <path d={m.seaLit} fill={PAPER} />
          <path d={m.litRidges} fill={INK} />
        </g>

        {/* the rigging, the mast, the yards, the sails */}
        <path d={stayPath} stroke={INK} strokeWidth={4.4} fill="none" />
        <path d={stayPath} stroke={PAPER} strokeWidth={1.3} fill="none" />
        <path d={m.sail} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.sailCuts} fill="none" stroke={INK} strokeWidth={1.2} />
        <path
          d={`M${n(mastTop[0] - 7)} ${n(mastTop[1])}L${n(mastFoot[0] - 8)} ${n(mastFoot[1])}L${n(mastFoot[0] + 8)} ${n(mastFoot[1])}L${n(mastTop[0] + 7)} ${n(mastTop[1])}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={wedge(yardL[0], yardL[1], yardR[0], yardR[1], 6, 6)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={wedge(topL[0], topL[1] - 52, topR[0], topR[1] - 52, 4.4, 4.4)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d={m.furl} fill={PAPER} stroke={INK} strokeWidth={1.4} />

        {/* Ariel's fire, burning in tongues at the ends of the yards */}
        <path
          d={fireLight(yardL[0] - 2, yardL[1] - 3) + fireLight(yardR[0] + 2, yardR[1] - 3)}
          fill={PAPER}
        />
        <g className="lc-flicker" style={timing({ dur: 0.9 })}>
          <path
            d={fire(yardL[0] - 2, yardL[1] - 3) + fire(yardR[0] + 2, yardR[1] - 3)}
            fill={RED}
            stroke={INK}
            strokeWidth={1.1}
          />
        </g>

        {/* the wave rearing beyond the rail on the right */}
        <path d={m.wave} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.waveCuts} fill={PAPER} />

        {/* the far rail and bulwark */}
        <path
          d={`M-10 ${rail(-10)}L${W + 10} ${rail(W + 10)}L${W + 10} ${deckFar(W + 10)}L-10 ${deckFar(-10)}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.bulwark} fill={PAPER} />
        <path
          d={`M-10 ${rail(-10) - 3}L${W + 10} ${rail(W + 10) - 3}`}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />

        {/* the wet deck, sloping as she heels, the sea spilling across it */}
        <path
          d={`M-10 ${deckFar(-10)}L${W + 10} ${deckFar(W + 10)}L${W + 10} ${H + 10}L-10 ${H + 10}Z`}
          fill={PAPER}
        />
        <path d={m.deck} fill={INK} />
        <path
          d={`M-10 ${deckFar(-10)}L${W + 10} ${deckFar(W + 10)}`}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.spill} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={m.spillRipples} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />

        {/* the hatch to the cabins, its cover raised */}
        <path d={HATCH} fill={INK} />
        <path d={LADDER} stroke={PAPER} strokeWidth={2} fill="none" />
        <path d={HATCH_COVER} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(28, 296, 112, 288, 1.2) + gouge(30, 286, 110, 278, 1)} fill={PAPER} />

        {/* the court, braced against the wind */}
        <Person
          at={foot(140, -30)}
          scale={0.7}
          pose={{
            look: 'ferdinand',
            head: { rot: 8 },
            sword: true,
            cloak: 16,
            legs: {
              far: [
                [-3, -70],
                [-12, -36],
                [-20, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [12, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [-22, -112],
                [-36, -104],
              ],
              hand: 'open',
              deg: 150,
              thumb: 1,
            },
            near: {
              pts: [
                [5, -128],
                [14, -106],
                [22, -90],
              ],
            },
          }}
        />
        <Person
          at={foot(198, -20)}
          scale={0.74}
          pose={{
            look: 'alonso',
            head: { rot: -4 },
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [12, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [-12, -104],
                [-10, -80],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [22, -114],
                [38, -112],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
            },
          }}
        />
        <Person
          at={foot(248, -6)}
          scale={0.8}
          pose={{
            look: 'antonio',
            head: { rot: 4 },
            sword: true,
            cloak: 18,
            far: {
              pts: [
                [-4, -128],
                [-10, -104],
                [-6, -80],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [16, -104],
                [10, -82],
              ],
              hand: 'grip',
              deg: 110,
            },
          }}
        />
        <Person
          at={foot(292, 6)}
          scale={0.84}
          pose={{
            look: 'sebastian',
            head: { rot: 10 },
            sword: true,
            cloak: 18,
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-16, -3],
              ],
              near: [
                [3, -70],
                [10, -36],
                [14, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [-14, -104],
                [-12, -82],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [12, -104],
                [6, -84],
              ],
            },
          }}
        />
        <Person
          at={foot(352, 8)}
          scale={0.86}
          pose={{
            look: 'gonzalo',
            head: { rot: 2 },
            hem: { front: 14, back: 44 },
            far: {
              pts: [
                [-4, -128],
                [-8, -104],
                [-4, -80],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [14, -108],
                [20, -114],
              ],
              hand: 'open',
              deg: -64,
              thumb: -1,
            },
          }}
        />

        {/* the Boatswain, legs braced, a fist on a rope, pointing them below */}
        <path d={bosunRope} stroke={PAPER} strokeWidth={5.4} />
        <path d={bosunRope} stroke={INK} strokeWidth={2.6} />
        <Person
          at={BOSUN.at}
          scale={0.86}
          flip
          pose={{
            look: 'boatswain',
            head: { rot: 10 },
            legs: {
              far: [
                [-6, -40],
                [-22, -3],
              ],
              near: [
                [6, -40],
                [24, -3],
              ],
            },
            far: BOSUN_ARM,
            near: {
              pts: [
                [5, -128],
                [22, -112],
                [36, -100],
              ],
              hand: 'point',
              deg: 44,
            },
          }}
        />

        {/* two mariners hauling on a rope, their fists closed round it */}
        <g transform={`rotate(${MARINER_1.lean} ${n(MARINER_1.at[0])} ${n(MARINER_1.at[1])})`}>
          <Person
            at={MARINER_1.at}
            scale={0.8}
            flip
            pose={{
              look: 'mariner',
              head: { rot: -6 },
              legs: {
                far: [
                  [-6, -40],
                  [-18, -3],
                ],
                near: [
                  [6, -40],
                  [22, -3],
                ],
              },
              far: M1_FAR,
              near: M1_NEAR,
            }}
          />
        </g>
        <g transform={`rotate(${MARINER_2.lean} ${n(MARINER_2.at[0])} ${n(MARINER_2.at[1])})`}>
          <Person
            at={MARINER_2.at}
            scale={0.78}
            flip
            pose={{
              look: 'mariner',
              head: { rot: -4 },
              legs: {
                far: [
                  [-6, -40],
                  [-16, -3],
                ],
                near: [
                  [6, -40],
                  [20, -3],
                ],
              },
              far: M2_FAR,
              near: M2_NEAR,
            }}
          />
        </g>
        <path d={haul} stroke={PAPER} strokeWidth={5.6} fill="none" strokeLinejoin="round" />
        <path d={haul} stroke={INK} strokeWidth={2.8} fill="none" strokeLinejoin="round" />
        <Fist f={MARINER_1} arm={M1_FAR} />
        <Fist f={MARINER_1} arm={M1_NEAR} />
        <Fist f={MARINER_2} arm={M2_FAR} />
        <Fist f={MARINER_2} arm={M2_NEAR} />
      </g>
    </>
  )
}

export const theStormAtSea: LinocutArt = { width: W, height: H, Draw: TheStormAtSea }
