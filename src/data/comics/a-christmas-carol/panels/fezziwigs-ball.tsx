import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { GHOST_PAST_CROWN, GhostOfChristmasPast } from './ghost-of-christmas-past'
import { ScroogeNightHead } from './scrooge-at-night'

/**
 * Stave Two: "Fezziwig's ball", the fifth moment in the guide's timeline.
 * Every detail is from the text:
 *
 * - "Every movable was packed off ... the floor was swept and watered, the
 *   lamps were trimmed, fuel was heaped upon the fire; and the warehouse was
 *   as snug, and warm, and dry, and bright a ball-room, as you would desire to
 *   see upon a winter's night." So this is the brightest of the Stave One and
 *   Two panels: a pale wall, two trimmed lamps and a heaped fire, which take
 *   the spot colour. "Let's have the shutters up": the window is shuttered
 *   and barred.
 * - "In came a fiddler with a music-book, and went up to the lofty desk, and
 *   made an orchestra of it". So the fiddler plays at Fezziwig's high desk.
 * - "Away they all went, twenty couple at once; hands half round and back
 *   again": a line of couples dancing hands-round along the back.
 * - "old Fezziwig stood out to dance with Mrs. Fezziwig. ... A positive light
 *   appeared to issue from Fezziwig's calves. They shone in every part of the
 *   dance like moons. ... Fezziwig 'cut'--cut so deftly, that he appeared to
 *   wink with his legs". So he is in the air with his legs crossed, and his
 *   calves are cut bright with a shine round them. He is "an old gentleman in
 *   a Welsh wig" with a "capacious waistcoat" who "laughed all over himself":
 *   a round, laughing old man in a close cap, with a great lit waistcoat. A
 *   Welsh wig was a knitted cap of worsted, not a wig of hair (the Victorian
 *   Web's vocabulary notes on the Carol gloss it so), so he wears a close
 *   ribbed cap that comes down over the back of his neck.
 * - "In came Mrs. Fezziwig, one vast substantial smile." So she is broad, and
 *   the smile is the widest mark on her face. Her dress is not described, so
 *   she wears a plain gown, kerchief and cap of Scrooge's youth.
 * - Old Scrooge "acted like a man out of his wits. His heart and soul were in
 *   the scene", and the Ghost "was looking full upon him, while the light upon
 *   its head burnt very clear". So they stand at the edge in the shadow, as
 *   onlookers who "have no consciousness" of them: Scrooge in dressing-gown
 *   and nightcap (scrooge-at-night.tsx), hands clasped, eyes wide; the Ghost
 *   (ghost-of-christmas-past.tsx) watching him, its light bright.
 *
 * Seeds: 505 for the room, 515 for the dancers' shine.
 */

const W = 860
const H = 340
/**
 * The Ghost's place: its own frame moved by this. At -40 (the first draft) its
 * hair touched the left border and the push-in cut it off; at -32 it keeps
 * the style guide's twelve units after the push, and its holly still clears
 * Scrooge's gown.
 */
const GHOST_MOVE: [number, number] = [-32, 4]

type Marks = {
  wall: string
  planks: string
  floor: string
  shutters: string
  shine: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(505)
  const crown = [GHOST_PAST_CROWN[0] + GHOST_MOVE[0], GHOST_PAST_CROWN[1] + GHOST_MOVE[1]]
  // A bright room: the lamps and the heaped fire light the whole wall, which
  // is printed as bare paper with only its plank joints left in ink. The
  // corner where the two onlookers stand is in shadow, lit only by the Ghost,
  // and cut in the usual gouges, rising to full light where the room begins.
  const light = (x: number, y: number) => {
    const room = clamp((x - 150) / 110)
    const ghost = clamp(1 - Math.hypot(x - crown[0], (y - crown[1]) * 1.2) / 230) * 0.9
    return Math.max(room, ghost, 0.05)
  }
  const wall = gougeField(r, { x0: 0, x1: 262, y0: 16, y1: 238 }, light, { spacing: 6.4 })
  let planks = ''
  for (let y = 30; y < 236; y += 15) {
    let x = 262 + between(r, -10, 0)
    while (x < W) {
      const len = between(r, 60, 180)
      planks += wedge(x, y + between(r, -0.5, 0.5), Math.min(x + len, W), y, 1.4, 0.8)
      x += len + between(r, 6, 30)
    }
  }
  for (let i = 0; i < 26; i++) {
    const x = between(r, 270, 850)
    const y = 16 + Math.floor(between(r, 0, 14)) * 15
    planks += wedge(x, y, x + between(r, -0.5, 0.5), y + 15, 1.2, 0.8)
  }
  // The shadow under the beam.
  for (let y = 17; y < 27; y += 2.6) planks += gouge(262, y, W, y, 1.6 - (y - 17) * 0.14)

  // Floor: paper boards, "swept and watered", joints running to a vanishing point.
  let floor = ''
  const V = [460, 60]
  for (let xt = -700; xt < 1600; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (246 - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        246 + (H - 246) * t0,
        xt + (xb - xt) * t1,
        246 + (H - 246) * t1,
        0.6 + t0 * 2.2,
        0.6 + t1 * 2.2,
      )
      t0 = t1 + between(r, 0.02, 0.08)
    }
  }
  for (let y = 247; y < 258; y += 3) floor += gouge(0, y, W, y, 1.8 - (y - 247) * 0.14)

  // The shutters, up and barred: plank joints cut in the dark boards.
  let shutters = ''
  for (let x = 298; x < 376; x += 9.5) shutters += gouge(x, 44, x + 0.5, 136, 0.8)

  // "They shone in every part of the dance like moons": short strokes round
  // each of Fezziwig's calves, in his own frame.
  const s = rng(515)
  let shine = ''
  for (const [cx, cy] of [
    [11, -46],
    [2, -42],
  ]) {
    for (let a = 0; a < 360; a += 30) {
      const ang = deg(a + between(s, -8, 8))
      const r0 = between(s, 13, 15)
      const r1 = r0 + between(s, 5, 9)
      shine += `M${n(cx + Math.cos(ang) * r0)} ${n(cy + Math.sin(ang) * r0 * 1.3)}L${n(cx + Math.cos(ang) * r1)} ${n(cy + Math.sin(ang) * r1 * 1.3)}`
    }
  }
  cached = { wall, planks, floor, shutters, shine }
  return cached
}

/**
 * A figure cut as one shape with a single paper outline: a paper halo under
 * every part, then the parts in ink, so overlapping parts merge.
 */
function Carved({
  fills,
  limbs = [],
  halo = 3.4,
}: {
  fills: string[]
  limbs?: [string, number][]
  halo?: number
}) {
  return (
    <>
      <g fill={PAPER} stroke={PAPER} strokeWidth={halo} strokeLinejoin="round">
        {fills.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {limbs.map(([d, w]) => (
        <path
          key={`h${d}`}
          d={d}
          fill="none"
          stroke={PAPER}
          strokeWidth={w + halo}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      <g fill={INK}>
        {fills.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {limbs.map(([d, w]) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={INK}
          strokeWidth={w}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </>
  )
}

// ── The couples along the back, dancing hands-round ─────────────────────────

/** A man, 84 tall, feet at (0, 0), facing right; `step` lifts a foot. */
function Man({ x, flip, step }: { x: number; flip: boolean; step: boolean }) {
  const legs = step ? 'M-3 -34L-6 0M3 -34L12 -14L16 -6' : 'M-3 -34L-5 0M3 -34L5 0'
  return (
    <g transform={`translate(${x} 246) scale(${flip ? -1 : 1} 1)`}>
      <Carved
        fills={[
          'M-7 -66C-9 -58 -9 -46 -7 -34L-14 -18L-6 -20L0 -32L6 -34C8 -46 8 -58 6 -66C2 -69 -3 -69 -7 -66Z',
        ]}
        limbs={[
          [legs, 5],
          ['M0 -64L-18 -50', 4],
          ['M2 -64L20 -52', 4],
        ]}
        halo={2.4}
      />
      <circle cx={0} cy={-75} r={7} fill={INK} stroke={PAPER} strokeWidth={1.6} />
    </g>
  )
}
/** A woman, 80 tall, in a full gown and cap, facing right. */
function Woman({ x, flip, swing }: { x: number; flip: boolean; swing: boolean }) {
  const skirt = swing
    ? 'M-6 -46C-14 -34 -22 -18 -24 -2C-10 2 12 2 26 -6C20 -20 12 -34 6 -46Z'
    : 'M-6 -46C-14 -32 -20 -16 -22 -1C-8 2 8 2 22 -1C20 -16 14 -32 6 -46Z'
  return (
    <g transform={`translate(${x} 246) scale(${flip ? -1 : 1} 1)`}>
      <Carved
        fills={['M-5 -62C-8 -56 -8 -50 -6 -44L6 -44C8 -50 8 -56 5 -62C1 -65 -2 -65 -5 -62Z', skirt]}
        limbs={[
          ['M0 -60L-18 -50', 3.6],
          ['M1 -60L19 -52', 3.6],
        ]}
        halo={2.4}
      />
      <circle cx={0} cy={-70} r={6.6} fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path d="M-7 -73C-7 -80 7 -80 7 -73" fill={PAPER} stroke={INK} strokeWidth={1} />
      <path d="M-4 -58L0 -52L4 -58" fill="none" stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
}
const DANCERS: [typeof Man | typeof Woman, number, boolean, boolean][] = [
  [Man, 214, false, true],
  [Woman, 250, true, true],
  [Man, 288, false, false],
  [Woman, 322, true, false],
  [Man, 568, false, true],
  [Woman, 604, true, true],
  [Man, 642, false, false],
  [Woman, 676, true, true],
]

// ── Old Fezziwig, in the air in his "cut", facing right ─────────────────────

const FEZ = {
  head: 'M2 -189C12 -189 18 -183 19 -177L20 -174C23 -173 25 -171 25 -169C25 -167 23 -166 21 -166L20.5 -164.5C21 -163 20.5 -161.5 19 -161C19.5 -159 18 -157 15 -156.5C12 -154 7 -153 3 -154L-4 -155C-10 -157 -13 -163 -13 -171C-13 -182 -7 -189 2 -189Z',
  face: 'M7 -184C13 -183 18 -181 19 -177L20 -174C23 -173 25 -171 25 -169C25 -167 23 -166 21 -166L20.5 -164.5C21 -163 20.5 -161.5 19 -161C19.5 -159 18 -157 15 -156.5C12 -154 7 -153 3 -154C4.5 -160 5 -168 4 -176C4.5 -179 5.5 -182 7 -184Z',
  /** The Welsh wig: a close cap of worsted over the crown and the back of the head. */
  wig: 'M10 -185C6 -193 -6 -195 -12 -188C-16 -182 -16 -170 -13 -161L-5 -159C-6 -167 -3 -177 3 -182C5 -184 8 -185 10 -185Z',
  coat: 'M-8 -153C-17 -150 -21 -140 -21 -126C-21 -112 -19 -100 -16 -90L-4 -86L14 -86C24 -90 30 -100 30 -114C30 -130 24 -144 14 -152C8 -155 -2 -155 -8 -153Z',
  /** The coat-skirts, flying out behind him. */
  skirts: 'M-14 -98C-26 -88 -40 -76 -50 -62L-38 -58C-28 -68 -16 -78 -4 -88Z',
  /** The capacious waistcoat, lit. */
  waistcoat: 'M5 -150C18 -146 28 -134 31 -118C33 -104 28 -93 18 -88L5 -88C9 -104 9 -124 2 -146Z',
  shoeFront: 'M-9 -26L-16 -14L-20 -12L-13 -10L-5 -20Z',
  shoeBack: 'M20 -26L28 -16L32 -14L25 -11L16 -20Z',
}
/** Breeches to the knee, the shins crossed in the "cut", the arms up in delight. */
const FEZ_THIGHS: [string, number][] = [
  ['M6 -90L16 -62', 16],
  ['M-6 -90L-10 -62', 16],
]
/** A stockinged shin from knee to ankle, its calf swelling behind. */
function shin(k: [number, number], a: [number, number], back: 1 | -1) {
  const dx = a[0] - k[0]
  const dy = a[1] - k[1]
  const L = Math.hypot(dx, dy)
  const nx = (-dy / L) * back
  const ny = (dx / L) * back
  const at = (t: number, w: number) => `${n(k[0] + dx * t + nx * w)} ${n(k[1] + dy * t + ny * w)}`
  return `M${at(0, 5)}C${at(0.25, 9.5)} ${at(0.5, 7)} ${at(1, 2.6)}L${at(1, -2.6)}C${at(0.6, -4.2)} ${at(0.2, -5)} ${at(0, -5)}Z`
}
const FEZ_SHINS = [shin([16, -62], [-6, -24], -1), shin([-10, -62], [18, -24], 1)]
const FEZ_ARMS: [string, number][] = [
  ['M12 -146C24 -146 34 -152 42 -162', 11],
  ['M-6 -146C-18 -148 -28 -156 -36 -166', 11],
]
const FEZ_HANDS = [
  'M40 -160C40 -166 44 -170 48 -168C51 -166 50 -161 46 -158Z',
  'M-34 -164C-34 -170 -38 -174 -42 -172C-45 -170 -44 -165 -40 -162Z',
]

function Fezziwig() {
  const m = marks()
  return (
    <g transform="translate(362 294)">
      <path d={m.shine} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <Carved
        fills={[FEZ.skirts, FEZ.coat, FEZ.head, FEZ.shoeFront, FEZ.shoeBack]}
        limbs={[...FEZ_THIGHS, ...FEZ_ARMS]}
      />
      {/* the calves, shining: paper stockings, cut round in ink */}
      {FEZ_SHINS.map((d) => (
        <g key={d}>
          <path d={d} fill={PAPER} stroke={PAPER} strokeWidth={5.2} strokeLinejoin="round" />
          <path d={d} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        </g>
      ))}
      <path d="M-11 -18h5M22 -19h5" stroke={PAPER} strokeWidth={2.4} />
      {/* garters at the knee */}
      <path d="M10 -62h12M-16 -62h12" stroke={INK} strokeWidth={3} />
      {/* the capacious waistcoat, its buttons, and its pattern of sprigs */}
      <path d={FEZ.waistcoat} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <g fill={INK}>
        {[
          [12, -140],
          [18, -128],
          [21, -116],
          [20, -104],
        ].map(([x, y]) => (
          <circle key={y} cx={x} cy={y} r={1.6} />
        ))}
      </g>
      <path
        d="M24 -130l2 2M26 -110l2 2M14 -118l2 2M10 -102l2 2M16 -96l2 2M28 -120l2 2"
        stroke={INK}
        strokeWidth={1}
      />
      <path d="M-4 -148L4 -138M-2 -122L2 -96" stroke={PAPER} strokeWidth={1.2} fill="none" />
      {/* his face, laughing all over */}
      <path d={FEZ.face} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <path d={FEZ.wig} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path
        d="M-9 -184L-9 -164M-5 -187L-3 -168M0 -188L1 -181M-12 -176L-12 -165"
        stroke={PAPER}
        strokeWidth={1}
      />
      <path d="M-14 -162C-8 -158 -2 -159 4 -162" stroke={PAPER} strokeWidth={1.6} fill="none" />
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d="M11 -177Q14.5 -180 18 -177.6" strokeWidth={1.4} />
        <path d="M10 -181.5Q14 -184 18.5 -182" strokeWidth={1.8} />
        <path d="M9 -176l-2 -1M9 -174l-2.4 0.6" strokeWidth={0.9} />
        <path d="M8 -170Q12 -166 14 -160" strokeWidth={0.9} />
        <path d="M5 -157Q9 -155 13 -156" strokeWidth={0.9} />
      </g>
      <path d="M16.5 -164.5Q20 -163 22 -165L20.4 -160.8Q18 -160.8 16.5 -164.5Z" fill={INK} />
      <path d={FEZ_HANDS[0]} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path d={FEZ_HANDS[1]} fill={PAPER} stroke={INK} strokeWidth={1.2} />
    </g>
  )
}

// ── Mrs Fezziwig, "one vast substantial smile", facing left ─────────────────

const MRS = {
  head: 'M0 -180C-9 -180 -15 -175 -16 -169L-17 -166C-19.5 -165 -21 -163.5 -20.5 -162C-20 -160.5 -18.5 -160 -17 -160L-16.5 -158C-17 -156.5 -16.5 -155 -15 -154.5C-15.5 -152.5 -14 -150.5 -11 -150C-8 -147.5 -3 -147 1 -148L8 -150C13 -153 16 -159 16 -166C16 -175 9 -180 0 -180Z',
  face: 'M-6 -178C-11 -177 -15 -173 -16 -169L-17 -166C-19.5 -165 -21 -163.5 -20.5 -162C-20 -160.5 -18.5 -160 -17 -160L-16.5 -158C-17 -156.5 -16.5 -155 -15 -154.5C-15.5 -152.5 -14 -150.5 -11 -150C-8 -147.5 -3 -147 1 -148C0 -156 -1 -166 -2 -172Z',
  cap: 'M-12 -176C-16 -188 -6 -196 6 -195C18 -194 24 -184 22 -172C21 -164 18 -157 14 -152C12 -160 8 -168 2 -174C-3 -177 -8 -177 -12 -176Z',
  bodice:
    'M-8 -148C-18 -144 -26 -134 -26 -122C-26 -114 -22 -108 -18 -104L16 -104C20 -114 20 -128 16 -140C12 -147 2 -150 -8 -148Z',
  skirt: 'M-22 -108C-34 -80 -46 -42 -54 -10C-30 -2 34 -2 62 -12C52 -42 38 -80 18 -108Z',
  shoe: 'M-34 -6L-22 -6L-22 0L-40 0C-40 -3 -38 -5 -34 -6Z',
}
const MRS_ARMS: [string, number][] = [
  ['M-10 -140C-22 -138 -34 -146 -44 -160', 10],
  ['M10 -140C18 -128 22 -114 26 -100', 10],
]

function MrsFezziwig() {
  return (
    <g transform="translate(502 314)">
      <Carved fills={[MRS.skirt, MRS.bodice, MRS.head, MRS.shoe]} limbs={MRS_ARMS} />
      {/* folds of the gown, swinging */}
      <path
        d={
          gouge(-14, -96, -34, -10, 1.4, 1.6) +
          gouge(2, -98, -2, -8, 1.2) +
          gouge(14, -98, 36, -10, 1.3, -1.4)
        }
        fill={PAPER}
      />
      <path d="M-54 -10C-30 -2 34 -2 62 -12" stroke={PAPER} strokeWidth={1.4} fill="none" />
      {/* the kerchief crossed over her bosom */}
      <path
        d="M-10 -148C-18 -140 -24 -130 -22 -120L-4 -124C-2 -132 2 -140 8 -148Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d="M-18 -128L-6 -132" stroke={INK} strokeWidth={0.9} />
      {/* her face, and the vast smile */}
      <path d={MRS.face} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <path d={MRS.cap} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path
        d="M-12 -176C-15 -172 -11 -170 -13 -166M-4 -178C-6 -175 -2 -173 -4 -170"
        stroke={INK}
        strokeWidth={1}
        fill="none"
      />
      <path d="M-10 -186C0 -190 12 -188 20 -180" stroke={INK} strokeWidth={2.4} fill="none" />
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d="M-14 -167Q-11 -170 -8 -167.6" strokeWidth={1.4} />
        <path d="M-15.5 -171.5Q-11 -174 -7 -172" strokeWidth={1.6} />
        <path d="M-19 -158.6C-16 -154.4 -10 -154 -6 -158" strokeWidth={1.8} />
        <path d="M-7 -160Q-5 -156 -8 -152" strokeWidth={0.9} />
        <path d="M-12 -150Q-6 -148 -1 -150" strokeWidth={0.9} />
      </g>
      <path
        d="M-46 -156C-50 -160 -48 -165 -44 -165C-40 -164 -39 -160 -41 -157Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d="M24 -98C22 -94 25 -91 29 -92C31 -94 30 -98 27 -100Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
    </g>
  )
}

// ── The fiddler at the lofty desk ────────────────────────────────────────────

function Fiddler() {
  return (
    <g>
      {/* the lofty desk */}
      <path d="M626 166L712 156L712 190L626 196Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d="M632 196V246M706 190V246M632 226L706 222" stroke={INK} strokeWidth={5} fill="none" />
      <path d="M632 196V246M706 190V246" stroke={PAPER} strokeWidth={1} strokeDasharray="3 7" />
      {/* the music-book open on it */}
      <path d="M640 160L664 154L668 164L644 170Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      <path d="M664 154L684 156L684 166L668 164Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      <path d="M644 162h6M646 166h8M670 158h10M670 162h10" stroke={INK} strokeWidth={0.8} />
      {/* the fiddler behind it, playing */}
      <Carved
        fills={[
          'M692 128C682 128 676 136 676 148L676 162L712 158L710 146C710 136 704 128 692 128Z',
          'M694 104C701 104 705 110 704 116C703 122 698 126 692 125C686 124 683 118 684 112C685 106 689 104 694 104Z',
        ]}
        limbs={[
          ['M680 138C672 132 668 126 670 120', 8],
          ['M706 138C716 132 722 122 726 110', 8],
        ]}
      />
      {/* the fiddle under his chin, the bow drawn across it */}
      <path
        d="M686 120L664 114C660 113 658 117 661 119L684 126Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path d="M668 116l3 1M674 118l3 1" stroke={PAPER} strokeWidth={1} />
      <path d="M726 108L662 128" stroke={PAPER} strokeWidth={3.4} />
      <path d="M726 108L662 128" stroke={INK} strokeWidth={1.4} />
    </g>
  )
}

// ── Old Scrooge, standing in the shadow, watching ───────────────────────────

function OldScrooge({ uid }: { uid: string }) {
  return (
    <g>
      <path
        d="M132 164C118 172 110 190 108 214C106 244 104 276 100 308L170 308C168 284 166 262 166 240C172 222 178 204 178 188C178 176 170 168 158 164Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(118, 196, 112, 300, 1.4, 1.6) +
          gouge(132, 230, 128, 302, 1) +
          gouge(158, 244, 162, 300, 1.1, -0.8)
        }
        fill={PAPER}
      />
      <path d="M110 226Q136 222 166 228" stroke={PAPER} strokeWidth={2} fill="none" />
      {/* hands clasped at his chest, his heart and soul in the scene */}
      <path
        d="M150 178C146 190 148 202 158 206L180 194"
        fill="none"
        stroke={PAPER}
        strokeWidth={14.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M150 178C146 190 148 202 158 206L180 194"
        fill="none"
        stroke={INK}
        strokeWidth={11}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M176 186C182 182 190 184 191 190C192 196 186 200 180 199C176 198 174 192 176 186Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d="M181 187L182 197M185.5 187L186 196" stroke={INK} strokeWidth={0.9} />
      <path
        d="M100 308H132V314H98ZM138 308H176C182 308 184 311 182 314H138Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <g transform="translate(112 88) scale(0.34)">
        <ScroogeNightHead uid={uid} seed={51} wide />
      </g>
    </g>
  )
}

function FezziwigsBall({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [430, 180], push: 1.03 })}>
        <rect x={262} y={0} width={W - 262} height={240} fill={PAPER} />
        <path d={m.planks} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        {/* the beam, and two trimmed lamps hanging from it */}
        <rect x={0} y={0} width={W} height={14} fill={INK} />
        <rect x={0} y={14} width={W} height={2} fill={PAPER} />
        {[410, 474].map((x, i) => (
          <g key={x}>
            <path d={`M${x} 16V40`} stroke={INK} strokeWidth={1.6} strokeDasharray="3 2" />
            <path d={`M${x - 12} 40H${x + 12}L${x + 8} 48H${x - 8}Z`} fill={INK} />
            <path
              d={`M${x - 6} 48C${x - 10} 56 ${x - 10} 66 ${x - 6} 72H${x + 6}C${x + 10} 66 ${x + 10} 56 ${x + 6} 48Z`}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.4}
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 0.8, delay: 0.2 + i * 0.3 })}
              d={`M${x} 68C${x - 4} 64 ${x - 3} 59 ${x} 52C${x + 3} 59 ${x + 4} 64 ${x} 68Z`}
              fill={RED}
            />
            <path d={`M${x - 10} 72H${x + 10}L${x + 6} 80H${x - 6}Z`} fill={INK} />
          </g>
        ))}

        {/* the shutters, up and barred */}
        <rect x={290} y={36} width={92} height={108} fill={INK} />
        <rect x={294} y={40} width={84} height={100} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d={m.shutters} fill={PAPER} />
        <path d="M336 40V140" stroke={PAPER} strokeWidth={2} />
        <path d="M286 86H386V94H286Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <circle cx={336} cy={90} r={3} fill={PAPER} />

        {/* a post of the warehouse: the onlookers stand in its shadow, out of the light */}
        <path d="M254 16H272V246H254Z" fill={INK} />
        <path d={gouge(259, 22, 259, 240, 1.2) + gouge(266, 30, 266, 236, 0.7)} fill={PAPER} />

        {/* the fire, with fuel heaped upon it */}
        <rect x={748} y={146} width={104} height={100} fill={PAPER} stroke={INK} strokeWidth={2} />
        <rect x={742} y={140} width={116} height={7} fill={INK} />
        <path d="M762 246V190Q762 172 780 172H822Q840 172 840 190V246Z" fill={INK} />
        <path
          d="M772 238H830M774 232H828M776 232V244M826 232V244"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <g fill={RED}>
          <path d="M772 232C772 222 782 216 790 220C794 212 808 212 812 220C820 216 830 222 830 232Z" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.9, delay: 0.3 })}
            d="M786 220C780 208 786 196 792 186C796 196 800 206 796 220Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.75, delay: 0.5 })}
            d="M800 218C796 204 802 192 810 180C814 194 816 206 810 218Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.85, delay: 0.1 })}
            d="M814 222C812 212 816 204 820 198C824 206 824 214 820 222Z"
          />
        </g>

        <rect x={0} y={238} width={W} height={8} fill={PAPER} />
        <rect x={0} y={241} width={W} height={1.4} fill={INK} />
        <rect x={0} y={246} width={W} height={H - 246} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* twenty couple at once, hands half round */}
        {DANCERS.map(([Figure, x, flip, lift]) =>
          Figure === Man ? (
            <Man key={x} x={x} flip={flip} step={lift} />
          ) : (
            <Woman key={x} x={x} flip={flip} swing={lift} />
          ),
        )}
        <Fiddler />

        <MrsFezziwig />
        <Fezziwig />

        {/* the onlookers, in the shadow at the edge */}
        <OldScrooge uid={uid} />
        <g transform={`translate(${GHOST_MOVE[0]} ${GHOST_MOVE[1]})`}>
          <GhostOfChristmasPast pose="watch" />
        </g>
      </g>
    </>
  )
}

export const fezziwigsBall: LinocutArt = { width: W, height: H, Draw: FezziwigsBall }
