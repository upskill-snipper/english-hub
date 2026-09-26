import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  FUR_CAP,
  FUR_CAP_CUTS,
  FUR_COLLAR,
  FUR_COLLAR_CUTS,
  HEAD_CREATURE,
  HEAD_WALTON,
  HOLD_HAND,
  OPEN_HAND,
  WALTON_CUTS,
  handAt,
  headAt,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 24, the Creature's farewell: "The Creature over Victor's body", the
 * sixteenth and last moment in the guide's timeline. Every detail is from
 * Walton's last letter, as the held 1831 text prints it
 * (src/data/full-texts/frankenstein.ts):
 *
 * - "It is midnight; the breeze blows fairly"; "there is a sound as of a human
 *   voice, but hoarser; it comes from the cabin where the remains of
 *   Frankenstein still lie". So it is night in a ship's cabin: a low deck
 *   beam overhead, and a stern window full of stars.
 * - "I entered the cabin, where lay the remains of my ill-fated and admirable
 *   friend." So Walton has stopped just inside the open door on the left,
 *   his hands open at his sides. He is the kit's Walton (./people.tsx), in
 *   the fur cap and fur collar of Letter 1's "wrapped in furs".
 * - "Over him hung a form which I cannot find words to describe; gigantic in
 *   stature, yet uncouth and distorted in its proportions. As he hung over the
 *   coffin, his face was concealed by long locks of ragged hair; but one vast
 *   hand was extended, in colour and apparent texture like that of a mummy."
 *   So the Creature, at the kit's scale of 1.4 times a man, is bent so low
 *   over a coffin on trestles that his back almost touches the beam; the
 *   kit's head is turned face down, and long locks of his black hair fall from
 *   it over the face and hide it, ragged at the ends; one hand, more than
 *   twice the size of Walton's, is stretched out over the coffin. The kit
 *   gives his skin to the paper, so the hand is paper, with a few hairline
 *   cuts along its back for the dried texture; its yellow is left to the
 *   words. He wears the kit's plain dark cloak, cut here as it hangs from a
 *   bent back rather than from the kit's upright line.
 * - "sprung towards the window"; "He sprung from the cabin-window, as he said
 *   this, upon the ice-raft which lay close to the vessel. He was soon borne
 *   away by the waves, and lost in darkness and distance." So the window is
 *   behind him on the right, and through it the flat ice-raft already waits on
 *   the black sea by the ship, under a line of far ice.
 * - The text names no light, but Walton sees the Creature's face a moment
 *   later, so the cabin has one: a ship's lantern on a short chain from the
 *   beam. Its flame is the spot colour's one use, and its light is cut into
 *   the planked wall round it, so the Creature's black shape stands against
 *   the lit wall.
 *
 * SAFEGUARDING. Victor's body is not drawn. The coffin is seen a little from
 * above, so its six-sided rim says what it is, and its inside is left in
 * shadow with nothing in it to be made out; only the far inner side takes a
 * little light. Nor is the Creature's promised death: "I shall collect my
 * funeral pile" is left to the words, and the ice-raft outside is empty.
 *
 * The quotation, "Alas! he is cold, he cannot answer me.", is the Creature's,
 * over the coffin, and is copied from the held text. Nothing is taken from a
 * film, television or stage production. Seeds: 1601 (wall, deck beam,
 * floor), 1602 (the lantern's light), 1603 (the coffin's grain), 1604 (the
 * window), 1605 (the cloak's folds), 1606 (the hair).
 */

const W = 860
const H = 340

/** Where the back wall meets the floor. */
const WALL_BASE = 246
/** The underside of the deck beam across the cabin. */
const BEAM = 46
/** The lantern's flame: the one light in the cabin. */
const LAMP: Pt = [330, 76]

// ── The coffin, seen a little from above ───────────────────────────────────
// In its own plan: u runs from the head (0) to the foot (LEN), v across it.
// Its rim is drawn from the plan, so it has a coffin's six sides.
const C0: Pt = [272, 200]
const LEN = 246
const SQUASH = 17
const DEPTH = 42
const HALF = [
  [0, 0.62],
  [62, 1],
  [LEN, 0.52],
] as const
const rimAt = (u: number, v: number): Pt => [C0[0] + u + v * 3, C0[1] - v * SQUASH]
const RIM: Pt[] = [
  rimAt(HALF[0][0], -HALF[0][1]),
  rimAt(HALF[1][0], -HALF[1][1]),
  rimAt(HALF[2][0], -HALF[2][1]),
  rimAt(HALF[2][0], HALF[2][1]),
  rimAt(HALF[1][0], HALF[1][1]),
  rimAt(HALF[0][0], HALF[0][1]),
]
const poly = (pts: Pt[]) => 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
const down = ([x, y]: Pt, d = DEPTH): Pt => [x, y + d]
/** The near side, in its two boards: head to shoulder, shoulder to foot. */
const SIDE_HEAD = poly([RIM[0], RIM[1], down(RIM[1]), down(RIM[0])])
const SIDE_FOOT = poly([RIM[1], RIM[2], down(RIM[2]), down(RIM[1])])
const RIM_PATH = poly(RIM)
const TRESTLE_TOP = C0[1] + DEPTH + 12
const TRESTLES: [string, number][] = [
  [
    `M${C0[0] + 30} ${TRESTLE_TOP}L${C0[0] + 16} 304M${C0[0] + 44} ${TRESTLE_TOP}L${C0[0] + 58} 304`,
    6,
  ],
  [
    `M${C0[0] + LEN - 50} ${TRESTLE_TOP - 4}L${C0[0] + LEN - 64} 300M${C0[0] + LEN - 36} ${TRESTLE_TOP - 4}L${C0[0] + LEN - 22} 300`,
    6,
  ],
]

type Marks = {
  wall: string
  ceiling: string
  floor: string
  lampRays: string
  grain: string
  inner: string
  stars: string
  sea: string
  farIce: string
  door: string
  folds: string
  hairHalo: string
  hair: string
  gloss: string
}

// ── The Creature ────────────────────────────────────────────────────────────
// Facing left, bowed over the coffin, at 1.4 times Walton's scale (the kit's
// rule). The head is the kit's, turned face-down; the locks that hide the
// face are drawn here, falling from it.
const CR_HEAD = { d: HEAD_CREATURE, at: [446, 104] as P, rot: -75, scale: 1.75 }
const CR_HEAD_T = headAt(-1, CR_HEAD.at, CR_HEAD.rot, CR_HEAD.scale)
const CR_NECK: P = [500, 98]
const CR_HIP: P = [582, 164]
/** His cloak, over the bent back, hanging straight from it to below the knee. */
const CR_CLOAK =
  'M494 104C500 88 510 76 524 68C540 60 558 60 574 68C596 80 608 104 614 134L628 250C604 256 572 256 546 250L552 190C548 166 536 146 520 132C510 126 500 118 494 104Z'
const CR_ARM: P[] = [
  [516, 118],
  [494, 162],
  [446, 182],
]
const CREATURE = man({
  facing: -1,
  neck: CR_NECK,
  hip: CR_HIP,
  head: CR_HEAD,
  robe: CR_CLOAK,
  near: {
    arm: [],
    leg: [
      [568, 176],
      [562, 232],
      [556, 294],
    ],
  },
  far: {
    arm: [],
    leg: [
      [592, 176],
      [602, 232],
      [608, 292],
    ],
  },
  body: { width: 44 },
  leg: 14,
  // The head gets a paper edge of its own, or it runs into the hump of the
  // cloak behind it and the bowed head is lost.
}).map((p) => (p.d === HEAD_CREATURE ? { ...p, sep: 1.6 } : p))
/**
 * "one vast hand was extended, in colour and apparent texture like that of a
 * mummy". The kit's hand, drawn at twice a man's size, in paper for his skin,
 * its fingers held together but cut apart, with hairline cuts along its back
 * for the dried texture.
 */
const HAND = { parts: HOLD_HAND, scale: 2.7, rot: 8 }
const HAND_T = handAt(CR_ARM, -1, HAND)
const HAND_LINES =
  'M1.2 -2.6Q5 -3.2 9.2 -2.8M1 0Q5 -0.4 9.4 0M1.2 2.4Q5 2.6 9 2.8M10.6 -2.2L10.8 -0.8M10.8 1L11 2.4'

// ── Walton ──────────────────────────────────────────────────────────────────
const WA_HEAD = { d: HEAD_WALTON, at: [134, 126] as P, rot: -6, scale: 1.25 }
const WALTON = man({
  facing: 1,
  neck: [128, 160],
  hip: [126, 228],
  head: WA_HEAD,
  hair: FUR_CAP,
  near: {
    arm: [
      [134, 168],
      [146, 202],
      [164, 222],
    ],
    leg: [
      [130, 228],
      [136, 276],
      [140, 320],
    ],
    hand: { parts: OPEN_HAND, scale: 1.25 },
  },
  far: {
    arm: [
      [122, 168],
      [114, 202],
      [118, 232],
    ],
    hand: { parts: OPEN_HAND, scale: 1.2 },
    leg: [
      [124, 228],
      [116, 274],
      [108, 318],
    ],
  },
  body: { width: 36, tails: 64, long: true },
  arm: 9,
  leg: 10,
})

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1601)
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - LAMP[0]) * 0.7, (y - LAMP[1]) * 1.1) / 260), 0.05)
  const wall = gougeField(r, { x0: 0, x1: W, y0: BEAM + 6, y1: WALL_BASE - 2 }, light)
  // The deck overhead: long planks seen from below, a little lit near the lantern.
  let ceiling = ''
  for (let y = 5; y < BEAM - 18; y += 6.5) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 60, 170)
      const L = light(x + len / 2, 70)
      ceiling += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.35 + L * 1.4)
      x += len + between(r, 6, 20)
    }
  }
  // The cabin floor: paper boards, ink joints running to a vanishing point.
  let floor = ''
  const V = [440, 110]
  for (let xt = -760; xt < 1560; xt += 36) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (WALL_BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        WALL_BASE + (H - WALL_BASE) * t0,
        xt + (xb - xt) * t1,
        WALL_BASE + (H - WALL_BASE) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  for (let y = WALL_BASE + 2; y < WALL_BASE + 16; y += 3)
    floor += gouge(0, y, W, y, 2.2 - (y - WALL_BASE) * 0.13)
  const lampRays = rays(rng(1602), LAMP[0], LAMP[1], { from: 22, to: 128, every: 5, width: 3 })

  // The grain of the coffin's near side, and the lit top of its far inner side.
  const g = rng(1603)
  let grain = ''
  const sideY = (u: number, t: number) => {
    const [x0, y0] = u < HALF[1][0] ? RIM[0] : RIM[1]
    const [x1, y1] = u < HALF[1][0] ? RIM[1] : RIM[2]
    const s = (C0[0] + u - x0) / (x1 - x0)
    return y0 + (y1 - y0) * s + DEPTH * t
  }
  for (let k = 0; k < 7; k++) {
    const t = (k + 0.7) / 7.4
    let u = between(g, 0, 16)
    while (u < LEN) {
      const len = between(g, 26, 80)
      const u1 = Math.min(u + len, LEN)
      if (!(u < HALF[1][0] && u1 > HALF[1][0]))
        grain += gouge(C0[0] + u + 2, sideY(u, t), C0[0] + u1 - 2, sideY(u1, t), 0.55 + t * 0.45)
      u = u1 + between(g, 8, 22)
    }
  }
  let inner = ''
  for (let k = 0; k < 3; k++) {
    const dy = 3 + k * 3.2
    inner += gouge(
      RIM[5][0] + 8,
      RIM[5][1] + dy * 0.6,
      RIM[4][0] - 2,
      RIM[4][1] + dy,
      1.3 - k * 0.3,
    )
    inner += gouge(
      RIM[4][0] + 6,
      RIM[4][1] + dy,
      RIM[3][0] - 12,
      RIM[3][1] + dy * 0.6,
      1.3 - k * 0.3,
    )
  }

  // Outside the stern window: stars, the far ice, the black sea.
  const s = rng(1604)
  let stars = ''
  for (let k = 0; k < 18; k++) {
    const x = between(s, 660, 826)
    const y = between(s, 74, 132)
    const rad = between(s, 0.9, 1.8)
    stars += `M${n(x - rad)} ${n(y)}L${n(x)} ${n(y - rad)}L${n(x + rad)} ${n(y)}L${n(x)} ${n(y + rad)}Z`
  }
  let farIce = 'M654 150'
  for (let x = 654; x <= 834; x += 8)
    farIce += `L${x} ${n(144 - (s() < 0.35 ? between(s, 3, 8) : between(s, 0, 2)))}`
  farIce += 'L834 152L654 152Z'
  let sea = ''
  for (let y = 158; y < 198; y += 4.2) {
    let x = 654 + between(s, -12, 0)
    while (x < 834) {
      const len = between(s, 8, 26)
      sea += gouge(x, y, x + len, y + between(s, -0.4, 0.4), 0.45 + (y - 158) * 0.03)
      x += len + between(s, 6, 18)
    }
  }
  // The door's boards, lit by the lantern.
  let door = ''
  for (let x = 66; x < 164; x += 16) door += wedge(x, 76, x + 0.6, 244, 2, 2.4)

  // Folds in the Creature's cloak, hanging straight down from his back.
  const f = rng(1605)
  let folds = ''
  for (const [x0, y0, x1] of [
    [566, 76, 572],
    [584, 88, 594],
    [598, 112, 612],
    [556, 140, 566],
    [576, 150, 588],
  ])
    folds += gouge(x0, y0, x1, 246, between(f, 0.9, 1.4), between(f, -1, 1))
  // "his face was concealed by long locks of ragged hair": locks falling
  // from the bowed head, overlapping at the top and parting towards their
  // ragged ends, which hang to different lengths. Each lock starts inside
  // the skull, runs over it to the edge of the face it hides (from the crown
  // round to the chin), and falls from there.
  const hr = rng(1606)
  const hang: Pt[] = [
    [404, 100],
    [413, 112],
    [422, 124],
    [433, 134],
    [445, 141],
    [457, 141],
    [469, 138],
    [480, 134],
    [490, 128],
  ]
  const ends = [158, 184, 170, 196, 176, 190, 166, 158, 148]
  const lockSpines: Pt[][] = hang.map(([hx, hy], k) => {
    const lean = between(hr, -4, 4) - (k < 2 ? 3 : 0)
    const pts: Pt[] = [
      [446 + (hx - 446) * 0.3, 104 + (hy - 104) * 0.3],
      [446 + (hx - 446) * 0.75, 104 + (hy - 104) * 0.75],
      [hx, hy],
    ]
    for (let i = 1; i <= 5; i++) {
      const t = i / 5
      pts.push([hx + lean * t * t + Math.sin(t * 3 + k) * 1.6 * t, hy + (ends[k] - hy) * t])
    }
    return pts
  })
  const hairHalo = lockSpines.map((pts) => ribbon(pts, 21, 0.86, false)).join('')
  const hair = lockSpines.map((pts) => ribbon(pts, 18, 0.9, false)).join('')
  // Its lustre: over the skull the strands run from the nape to the crown;
  // then a paper strand down every lock, stopping short of its end, so the
  // hanging hair reads as strands and its ends need no outline.
  let gloss =
    gouge(494, 98, 440, 80, 1, -3) +
    gouge(486, 106, 424, 90, 0.9, -3.4) +
    gouge(470, 90, 412, 100, 0.7, -2)
  lockSpines.forEach((pts, k) => {
    const [x0, y0] = pts[2]
    const [x1, y1] = pts[pts.length - 1]
    const stop = between(hr, 0.72, 0.88)
    gloss += gouge(
      x0 + between(hr, -2, 2),
      y0 - between(hr, 6, 14),
      x0 + (x1 - x0) * stop,
      y0 + (y1 - y0) * stop,
      between(hr, 0.75, 1.05),
      between(hr, -0.8, 0.8),
    )
  })
  cached = {
    wall,
    ceiling,
    floor,
    lampRays,
    grain,
    inner,
    stars,
    sea,
    farIce,
    door,
    folds,
    hairHalo,
    hair,
    gloss,
  }
  return cached
}

/** The ice-raft by the ship's side: flat, pale, with a dark edge. */
const RAFT_TOP = 'M694 176L720 170L764 172L794 168L812 176L800 182L748 184L704 183Z'
const RAFT_EDGE = 'M704 183L748 184L800 182L812 176L810 182L800 188L748 190L706 189Z'

/** A hand drawn pale: an ink edge round every part, then the parts in paper. */
function PaleHand({ parts, t }: { parts: Part[]; t: string }) {
  return (
    <g transform={t}>
      {parts.map((p) =>
        p.w ? (
          <path
            key={p.d}
            d={p.d}
            fill="none"
            stroke={INK}
            strokeWidth={p.w + 1.1}
            strokeLinecap="round"
          />
        ) : (
          <path key={p.d} d={p.d} fill={INK} stroke={INK} strokeWidth={1.1} />
        ),
      )}
      {parts.map((p) =>
        p.w ? (
          <path
            key={p.d}
            d={p.d}
            fill="none"
            stroke={PAPER}
            strokeWidth={p.w}
            strokeLinecap="round"
          />
        ) : (
          <path key={p.d} d={p.d} fill={PAPER} />
        ),
      )}
    </g>
  )
}

function CreatureOverVictorsBody({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  const hairTop = `${uid}-hair-top`
  const wt = headAt(1, WA_HEAD.at, WA_HEAD.rot, WA_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={654} y={66} width={180} height={132} />
        </clipPath>
        {/* the hair's paper edge stops above the ends of the locks, or the
            gaps between the ends fill with paper and read as a row of teeth */}
        <clipPath id={hairTop}>
          <rect x={380} y={40} width={140} height={112} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 170], push: 1.03 })}>
        {/* the cabin wall, lit by the lantern */}
        <path d={m.wall} fill={PAPER} />
        <g className="lc-fade-in" style={timing({ delay: 0.2, dur: 1.4 })}>
          <path d={m.lampRays} fill={PAPER} />
        </g>
        {/* the deck overhead, and the beam under it, its lower edge lit */}
        <rect x={0} y={0} width={W} height={BEAM} fill={INK} />
        <path d={m.ceiling} fill={PAPER} />
        <path d={wedge(0, BEAM - 1, W, BEAM - 1, 1.2, 1.2)} fill={PAPER} />
        <path d={gouge(40, BEAM - 1, 660, BEAM - 1, 2.2)} fill={PAPER} />
        {/* the cabin floor */}
        <rect x={0} y={WALL_BASE} width={W} height={H - WALL_BASE} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the door Walton has come in by, open against the wall */}
        <rect x={58} y={70} width={110} height={176} fill={PAPER} />
        <path d={m.door} fill={INK} />
        <path d="M58 70H168V246" fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <rect
          x={20}
          y={62}
          width={38}
          height={184}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the stern window on the night: stars, the far ice, the ice-raft by the ship */}
        <rect x={644} y={56} width={200} height={152} fill={PAPER} />
        <rect x={654} y={66} width={180} height={132} fill={INK} />
        <g clipPath={`url(#${win})`}>
          <path d={m.stars} fill={PAPER} />
          <path d={m.farIce} fill={PAPER} />
          <path d={m.sea} fill={PAPER} />
          <path d={RAFT_TOP} fill={PAPER} />
          <path d={RAFT_EDGE} fill={INK} stroke={PAPER} strokeWidth={1} />
        </g>
        <g fill={PAPER}>
          <rect x={712} y={66} width={5} height={132} />
          <rect x={771} y={66} width={5} height={132} />
          <rect x={654} y={126} width={180} height={4} />
        </g>
        <rect x={638} y={204} width={212} height={7} fill={PAPER} />

        {/* the lantern on its chain */}
        <path d={`M${LAMP[0]} ${BEAM}V60`} stroke={INK} strokeWidth={2.4} />
        <path
          d={`M${LAMP[0] - 12} 60H${LAMP[0] + 12}L${LAMP[0] + 16} 92H${LAMP[0] - 16}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect x={LAMP[0] - 9} y={66} width={18} height={21} fill={PAPER} />
        <path
          className="lc-flicker"
          d={`M${LAMP[0]} 84C${LAMP[0] - 5} 80 ${LAMP[0] - 4} 74 ${LAMP[0]} 67C${LAMP[0] + 4} 74 ${LAMP[0] + 5} 80 ${LAMP[0]} 84Z`}
          fill={RED}
        />

        {/* the coffin on its trestles: the far inner side lit, the inside in shadow */}
        <g fill="none" strokeLinecap="round">
          {TRESTLES.map(([d, w]) => (
            <path key={d} d={d} stroke={PAPER} strokeWidth={w + 3.2} />
          ))}
          {TRESTLES.map(([d, w]) => (
            <path key={d} d={d} stroke={INK} strokeWidth={w} />
          ))}
        </g>
        <path
          d={`M${C0[0] + 10} ${TRESTLE_TOP - 6}H${C0[0] + LEN - 10}`}
          stroke={INK}
          strokeWidth={5}
        />
        <path d={RIM_PATH} fill={INK} stroke={PAPER} strokeWidth={3} strokeLinejoin="round" />
        <path d={m.inner} fill={PAPER} />
        <path
          d={SIDE_HEAD}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path
          d={SIDE_FOOT}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path d={m.grain} fill={INK} />

        {/* the Creature, bowed over the coffin */}
        <Figure parts={CREATURE} halo={2}>
          <path d={m.folds} fill={PAPER} />
        </Figure>
        {/* the long locks falling over his face: the mass is cut free of
            the cloak by its own paper edge, and the head inked again over
            that edge where it runs inside the skull */}
        <path d={m.hairHalo} fill={PAPER} clipPath={`url(#${hairTop})`} />
        <path d={HEAD_CREATURE} transform={CR_HEAD_T} fill={INK} />
        <path d={m.hair} fill={INK} />
        <path d={m.gloss} fill={PAPER} />
        {/* his arm, and the vast hand stretched out over the coffin */}
        <Figure
          parts={[{ d: 'M' + CR_ARM.map((p) => p.join(' ')).join('L'), w: 13, sep: 1.6 }]}
          halo={0}
        />
        <PaleHand parts={HAND.parts} t={HAND_T} />
        <path
          d={HAND_LINES}
          transform={HAND_T}
          fill="none"
          stroke={INK}
          strokeWidth={0.35}
          strokeLinecap="round"
        />

        {/* Walton, stopped inside the door */}
        <Figure parts={WALTON}>
          <path d={FUR_COLLAR} transform={wt} fill={INK} stroke={PAPER} strokeWidth={0.8} />
          <path d={FUR_COLLAR_CUTS + FUR_CAP_CUTS + WALTON_CUTS} transform={wt} fill={PAPER} />
          {/* the pupil set in his eye, which stares at what he has found */}
          <path d="M9.6 -3.6a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z" transform={wt} fill={INK} />
        </Figure>
      </g>
    </>
  )
}

export const creatureOverVictorsBody: LinocutArt = {
  width: W,
  height: H,
  Draw: CreatureOverVictorsBody,
}
