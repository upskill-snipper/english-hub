import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BOWLER,
  BOWLER_BAND,
  COLLAR,
  Figure,
  GRIP_HAND,
  HEAD_HOLMES,
  HEAD_JONES,
  HEAD_SMALL,
  HEAD_TONGA,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_PUPIL,
  HolmesHands,
  JONES_CUTS,
  JONES_FLUSH,
  LONG_HAND,
  SMALL_CUTS,
  SMALL_CURLS,
  TONGA_CUTS,
  TONGA_HAIR,
  TOP_HAT,
  TOP_HAT_BAND,
  WATSON_CUTS,
  WATSON_PUPIL,
  gent,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 10, "The End of the Islander": "The chase down the Thames", the
 * twelfth moment in the guide's timeline. The panel is the chase itself, at
 * the moment of the quotation, before any shot is fired: a police launch
 * running down the steam launch Aurora in the beam of its lantern. Every
 * detail is from the text:
 *
 * - "Jones, Holmes, and I sat in the stern. There was one man at the rudder,
 *   one to tend the engines, and two burly police-inspectors forward." The
 *   panel shows the forward half of the police launch, so the man at the
 *   rudder is out of the picture to the left and the man at the engines is
 *   below: on deck are Watson and Holmes, the two inspectors sitting low in
 *   front of them, and Jones at the lantern ("Jones turned our search-light
 *   upon her"). Holmes and Watson stand, as they are standing when the chase
 *   ends ("just behind where we had been standing"). Holmes wears his top hat
 *   and Watson his bowler, as the kit has them out of doors; Jones is "very
 *   stout, portly ... red-faced" (the kit's flush on his cheekbone), in a
 *   plain bowler. No pistol is drawn.
 * - "The furnaces roared, and the powerful engines whizzed and clanked ...
 *   Her sharp, steep prow cut through the river-water and sent two rolling
 *   waves to right and to left of us. With every throb of the engines we
 *   sprang and quivered like a living thing. One great yellow lantern in our
 *   bows threw a long, flickering funnel of light in front of us." So the
 *   stem is near upright, a wave of foam rolls back from it, smoke streams
 *   from the funnel, and the lantern's light is a cone of paper rays running
 *   ahead over the water. The print has no yellow; the light is the paper.
 * - "the murky uncertain twilight was setting into a clear starlit night";
 *   "Right ahead ... the swirl of white foam behind her spoke of the pace at
 *   which she was going"; "It was a clear reach of the river, with Barking
 *   Level upon one side and the melancholy Plumstead Marshes upon the other."
 *   So there are stars, a low flat bank, and white foam behind the Aurora.
 * - The Aurora: "a steam launch called the Aurora, owner Mordecai Smith,
 *   black with two red streaks, funnel black with a white band" (Chapter 8).
 *   Her two streaks are the spot
 *   colour, and so is the glare of her furnace: "One man sat by the stern,
 *   with something black between his knees over which he stooped ... The boy
 *   held the tiller, while against the red glare of the furnace I could see
 *   old Smith, stripped to the waist, and shovelling coals for dear life";
 *   "every now and then he would look up and measure with a glance the
 *   distance which still separated us". So Small sits low by the stern,
 *   looking back over his shoulder; the boy stands at the tiller; Smith,
 *   bare-armed, bends with his shovel against the red glare.
 * - TONGA (see the rules in ./people.tsx). At this moment the narrator does
 *   not describe him as a man, and the panel does not follow the narrator: he
 *   is drawn as a small man sitting huddled beside Small, wrapped in his dark
 *   blanket ("He was wrapped in some sort of dark ulster or blanket"), his
 *   head and his shock of hair showing, cut with the same plain features as
 *   everyone. Nothing of what follows (the blowpipe, the shots, his fall) is
 *   in the panel.
 *
 * Seeds: 1201 (the stars), 1202 (the sky), 1203 (the water), 1204 (the beam),
 * 1205 (the smoke), 1206 (the foam).
 */

const W = 860
const H = 340
/** The far bank. */
const HORIZON = 178
/** The great lantern in the police launch's bows. */
const LAMP: P = [398, 206]
/** The cone of its light: from LAMP between these angles. */
const BEAM: [number, number] = [-13, 14]

type Marks = {
  stars: string
  sky: string
  water: string
  beamRays: string
  beamWater: string
  smoke: Puff[]
  smokeCurls: string
  auroraSmoke: Puff[]
  auroraCurls: string
  foam: string
  bowWave: string
  foamLines: string
  reeds: string
}

/** One puff of smoke: circles [cx, cy, r] whose union is the cloud. */
type Puff = [number, number, number][]

/**
 * A plume of smoke from a funnel top, streaming back: puffs along a path that
 * grow as they go, each a small cloud of overlapping rounds, as the breath is
 * cut in the reference counting-house panel.
 */
function plume(r: () => number, from: P, to: P, r0: number, r1: number, count: number, rise = 0) {
  const puffs: Puff[] = []
  let curls = ''
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1)
    const cx = from[0] + (to[0] - from[0]) * t
    const cy = from[1] + (to[1] - from[1]) * t + Math.sin(t * 7 + 1) * rise * t
    const rad = r0 + (r1 - r0) * t
    puffs.push([
      [cx, cy, rad],
      [cx - rad * 0.7, cy + rad * 0.35 + between(r, -0.5, 0.5), rad * 0.72],
      [cx + rad * 0.6, cy + rad * 0.4 + between(r, -0.5, 0.5), rad * 0.6],
    ])
    curls += `M${n(cx - rad * 0.8)} ${n(cy + rad * 0.15)}q${n(rad * 0.5)} ${n(-rad * 0.6)} ${n(rad * 1.1)} ${n(-rad * 0.15)}`
  }
  return { puffs, curls }
}

/** Is (x, y) inside the lantern's cone? */
function inBeam(x: number, y: number) {
  const a = Math.atan2(y - LAMP[1], x - LAMP[0]) * (180 / Math.PI)
  return x > LAMP[0] && a > BEAM[0] && a < BEAM[1]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Stars over the river: none in the beam, none behind the quotation (top right).
  const r = rng(1201)
  let stars = ''
  for (let i = 0; i < 90; i++) {
    const x = between(r, 14, W - 14)
    const y = between(r, 10, HORIZON - 14)
    if (x > 500 && y < 84) continue
    if (inBeam(x, y)) continue
    const s = between(r, 0.6, 1.5)
    stars += `M${n(x - s)} ${n(y)}a${n(s)} ${n(s)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s)} 0 1 0 ${n(-2 * s)} 0Z`
    if (s > 1.3) stars += gouge(x - 4.6, y, x + 4.6, y, 0.35) + gouge(x, y - 4.6, x, y + 4.6, 0.35)
  }
  // The night sky: a faint glow low along the horizon, dark overhead.
  const sky = gougeField(
    rng(1202),
    { x0: 0, x1: W, y0: 132, y1: HORIZON - 4 },
    (x, y) => clamp(((y - 132) / (HORIZON - 132)) ** 2 * 0.42),
    { spacing: 7.6, len: [24, 70], gap: [14, 34] },
  )
  // The river: dark, lit in the funnel of the lantern's light, and paler far
  // off towards the bank.
  const light = (x: number, y: number) => {
    const far = clamp(1 - (y - HORIZON) / 60) * 0.32
    const beam = inBeam(x, y) ? clamp(1 - Math.hypot(x - LAMP[0], y - LAMP[1]) / 520) * 0.9 : 0
    return clamp(0.06 + Math.max(far, beam))
  }
  const water = gougeField(rng(1203), { x0: 0, x1: W, y0: HORIZON + 4, y1: H }, light, {
    spacing: 6.4,
    len: [20, 64],
    gap: [10, 26],
  })
  // The lantern's light: broken rays fanning out from it inside the cone,
  // thinning with distance, over the sky and the water alike.
  const b = rng(1204)
  let beamRays = ''
  for (let a = BEAM[0] + 0.4; a < BEAM[1]; a += 0.8) {
    const t = deg(a + between(b, -0.2, 0.2))
    let rad = between(b, 14, 26)
    while (rad < 480) {
      const len = between(b, 18, 46)
      const w = clamp(3 - rad / 190, 0.4, 3)
      beamRays += gouge(
        LAMP[0] + Math.cos(t) * rad,
        LAMP[1] + Math.sin(t) * rad,
        LAMP[0] + Math.cos(t) * (rad + len),
        LAMP[1] + Math.sin(t) * (rad + len),
        w,
      )
      rad += len + between(b, 4, 14) + rad * 0.05
    }
  }
  // the cone's two edges, cut as long fine lines
  const edge = (a: number) =>
    `M${n(LAMP[0] + Math.cos(deg(a)) * 16)} ${n(LAMP[1] + Math.sin(deg(a)) * 16)}L${n(LAMP[0] + Math.cos(deg(a)) * 480)} ${n(LAMP[1] + Math.sin(deg(a)) * 480)}`
  const beamWater = edge(BEAM[0]) + edge(BEAM[1])
  // Smoke from the police launch's funnel, streaming back to the left and
  // up, and from the Aurora's, streaming back towards us.
  const s = rng(1205)
  const ours = plume(s, [70, 112], [-26, 58], 7, 17, 9, 5)
  const theirs = plume(s, [761, 142], [640, 112], 3.4, 8.6, 8, 3)
  // The swirl of white foam behind the Aurora, and the water thrown up at her stern.
  const f = rng(1206)
  let foam = ''
  for (let i = 0; i < 8; i++) {
    const y = 234 + i * 3.8 + between(f, -0.8, 0.8)
    const x1 = 548 - i * 2
    foam += ribbon(wave(x1 - 130 + i * 10, x1, y, 2, 36, between(f, 0, 6), 16), 5.4 - i * 0.5, 0.6)
  }
  for (let i = 0; i < 16; i++) {
    const x = between(f, 506, 548)
    const y = between(f, 226, 246)
    foam += `M${n(x - 1.1)} ${n(y)}a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z`
  }
  // The rolling wave thrown back from the police launch's steep prow.
  // the white water heaped against the stem, running back along the waterline
  let bowWave =
    'M409 280C414 283 418 291 418 299C418 306 414 312 406 315L262 316C290 312 324 307 352 302C374 298 392 292 400 286C403 283 406 280 409 280Z'
  // the wake running on along the hull to the left
  bowWave += ribbon(wave(-20, 290, 312, 1.4, 44, 2, 40), 4.4, 0.4)
  for (let i = 0; i < 5; i++) {
    const y = 320 + i * 4.6
    bowWave += ribbon(
      wave(120 - i * 30, 440 + i * 8, y, 1.6, 30, between(f, 0, 6), 24),
      3.6 - i * 0.5,
      0.6,
    )
  }
  for (let i = 0; i < 18; i++) {
    const x = between(f, 404, 436)
    const y = between(f, 262, 288)
    bowWave += `M${n(x - 1.1)} ${n(y)}a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z`
  }
  /** the scallops of the foam, cut back into it in ink */
  const foamLines =
    'M404 288Q398 294 390 296M412 296Q404 302 392 304M370 302Q360 306 348 307M330 308Q318 310 304 311'
  // The flat marsh on the far bank: short reeds cut along its top.
  let reeds = ''
  for (let x = 470; x < W; x += between(f, 6, 14))
    reeds += gouge(x, HORIZON - 1, x + between(f, -1, 1), HORIZON - between(f, 4, 9), 0.6)
  cached = {
    stars,
    sky,
    water,
    beamRays,
    beamWater,
    smoke: ours.puffs,
    smokeCurls: ours.curls,
    auroraSmoke: theirs.puffs,
    auroraCurls: theirs.curls,
    foam,
    bowWave,
    foamLines,
    reeds,
  }
  return cached
}

// ── The police launch, its forward half ─────────────────────────────────────
/** The hull, from off the left edge to the sharp, steep prow. */
const HULL = 'M-12 250L408 236C406 258 402 280 396 302L-12 308Z'
/** The rubbing strake and the planking, cut in paper. */
const HULL_CUTS =
  gouge(-12, 259, 404, 245, 1.4, -0.6) +
  gouge(-12, 279, 396, 268, 0.7) +
  gouge(-12, 296, 330, 290, 0.6) +
  [40, 100, 160, 220, 280, 340]
    .map((x) => {
      const y = 266 - x * 0.034
      return `M${x - 3.6} ${n(y)}a3.6 3.6 0 1 0 7.2 0a3.6 3.6 0 1 0 -7.2 0Z`
    })
    .join('')
const FUNNEL = 'M56 252V124H84V252Z'
const FUNNEL_RIM = 'M52 120H88V128H52Z'
const CASING = 'M28 252V232Q28 226 34 226H112Q118 226 118 232V252Z'

/** A plain man's head, for the inspectors: in the frame of the shared heads. */
const HEAD_MAN =
  'M-9 26C-11 20 -16 15 -17 6C-18 -9 -9 -20.5 2.5 -20.5C11 -20.5 16 -15.5 16 -9.5L16.2 -5.6L21.4 4L16.4 5.8L16.8 8.6L15.4 10L16.8 12.6C17 18 14.6 22 9.4 23L7.6 26Z'
const MAN_CUTS =
  gouge(5.6, -8, 14.2, -7.4, 1) +
  'M7 -3.6Q10 -5.6 12.8 -3.8Q10 -2 7 -3.6Z' +
  gouge(9.6, 11.4, 15.4, 11, 0.55) +
  gouge(-6, -1, -5, 7, 0.7, -1.4)

// Watson, behind Holmes, both hands on the gunwale.
const WAT_HEAD = { d: HEAD_WATSON, at: [140, 140] as P, rot: 6, scale: 1.12 }
const WATSON: Part[] = gent({
  facing: 1,
  neck: [140, 170],
  hip: [130, 236],
  head: WAT_HEAD,
  hat: BOWLER,
  body: { width: 32, hem: 30, flare: 6, swing: 4 },
  arm: 8.6,
  leg: 9.6,
  near: {
    arm: [
      [144, 178],
      [158, 210],
      [176, 240],
    ],
    leg: [
      [132, 236],
      [140, 262],
      [142, 284],
    ],
    hand: { parts: GRIP_HAND, scale: 0.95, rot: 30 },
  },
  far: {
    arm: [
      [136, 178],
      [146, 210],
      [160, 238],
    ],
    leg: [
      [128, 236],
      [122, 262],
      [118, 284],
    ],
    hand: { parts: GRIP_HAND, scale: 0.95, rot: 30 },
  },
})

// Holmes, ahead of him, leaning forward over the gunwale, eager.
const HOL_HEAD = { d: HEAD_HOLMES, at: [222, 128] as P, rot: 4, scale: 1.12 }
const HOL_NEAR: P[] = [
  [216, 166],
  [234, 200],
  [252, 236],
]
const HOL_FAR: P[] = [
  [208, 166],
  [222, 202],
  [240, 234],
]
const HOL_HAND = { parts: LONG_HAND, scale: 1, rot: 52 }
const HOLMES: Part[] = gent({
  facing: 1,
  neck: [212, 158],
  hip: [194, 232],
  head: HOL_HEAD,
  hat: TOP_HAT,
  body: { width: 26, hem: 34, flare: 6, swing: 6 },
  arm: 8,
  leg: 9,
  near: {
    arm: HOL_NEAR,
    leg: [
      [196, 232],
      [206, 260],
      [210, 284],
    ],
  },
  far: {
    arm: HOL_FAR,
    leg: [
      [192, 232],
      [184, 260],
      [180, 284],
    ],
  },
})

// The two burly inspectors, crouched forward: heads and shoulders over the gunwale.
const INSP1_HEAD = { d: HEAD_MAN, at: [282, 190] as P, rot: 6, scale: 0.98 }
const INSP2_HEAD = { d: HEAD_MAN, at: [318, 196] as P, rot: 2, scale: 0.98 }
/** Each a broad back and shoulders, seated. */
const INSPECTORS: Part[] = [
  { d: 'M258 254C256 232 264 216 282 212C298 210 308 222 310 254Z' },
  { d: HEAD_MAN, t: headAt(1, INSP1_HEAD.at, INSP1_HEAD.rot, INSP1_HEAD.scale) },
  { d: BOWLER, t: headAt(1, INSP1_HEAD.at, INSP1_HEAD.rot, INSP1_HEAD.scale) },
  { d: 'M296 254C294 236 302 222 318 218C334 216 344 228 346 254Z' },
  { d: HEAD_MAN, t: headAt(1, INSP2_HEAD.at, INSP2_HEAD.rot, INSP2_HEAD.scale) },
  { d: BOWLER, t: headAt(1, INSP2_HEAD.at, INSP2_HEAD.rot, INSP2_HEAD.scale) },
]

// Jones, at the lantern in the bows, his hand on it.
const JON_HEAD = { d: HEAD_JONES, at: [362, 148] as P, rot: 2, scale: 1.1 }
const JON_ARM: P[] = [
  [368, 188],
  [382, 214],
  [394, 222],
]
const JONES: Part[] = gent({
  facing: 1,
  neck: [362, 180],
  hip: [356, 244],
  head: JON_HEAD,
  hat: BOWLER,
  body: { width: 40, hem: 24, flare: 5 },
  arm: 9.4,
  leg: 10,
  near: {
    arm: JON_ARM,
    leg: [
      [358, 244],
      [362, 266],
      [364, 286],
    ],
    hand: { parts: GRIP_HAND, scale: 0.95, rot: -40 },
  },
  far: {
    arm: [
      [356, 188],
      [362, 216],
      [378, 232],
    ],
    leg: [
      [354, 244],
      [350, 266],
      [348, 286],
    ],
  },
})

// ── The Aurora, ahead, in the beam ──────────────────────────────────────────
const A_HULL =
  'M536 222C544 228 556 230 572 230L816 222C828 221 838 218 846 213C844 226 838 238 826 244L556 248C546 244 538 234 536 222Z'
/** "black with two red streaks": two bands along her side. */
const A_STRIPES =
  'M540 229.4L842 218.6L840.6 223L544 233.8ZM546 237L836 226.6L833.4 230.8L550 241.2Z'
const A_FUNNEL = 'M752 224V152H770V224Z'
/** "funnel black with a white band". */
const A_BAND = 'M752 162H770V169.6H752Z'
const A_CAP = 'M748 148H774V153H748Z'
/** The boiler, and its furnace door open on the fire: "the red glare of the furnace". */
const A_BOILER = 'M708 228V200Q708 192 718 192H738Q746 192 746 200V228Z'
const A_GLARE = 'M714 226V210Q714 205 719 205H729Q734 205 734 210V226Z'
const A_GLOW =
  gouge(712, 200, 704, 188, 1.1) + gouge(724, 198, 724, 184, 1.1) + gouge(736, 200, 744, 188, 1.1)

/** A small plain head for the boy and for old Smith, in the frame of the heads. */
const HEAD_SMALLMAN =
  'M-8 24C-9.6 18.6 -14.4 14.6 -15.4 6C-16.4 -8 -8.4 -18.6 2 -18.6C10.2 -18.6 14.8 -14 15 -8.4L15.6 -5L20.4 3.6L15.8 5.4L16.4 7.8L15.2 9.2L16.2 11.4C16 16 13 18.8 8.4 19.2L6.4 24Z'
const SMALLMAN_CUTS =
  'M6.6 -3.4Q9.8 -5.8 12.8 -3.6Q9.8 -1.4 6.6 -3.4Z' + gouge(5.4, -7.6, 13.4, -6.8, 0.95)

// The boy at the tiller, facing ahead, the tiller under his hand behind him.
const BOY_HEAD = { d: HEAD_SMALLMAN, at: [568, 178] as P, rot: 0, scale: 0.7 }
const BOY: Part[] = gent({
  facing: 1,
  neck: [566, 197],
  hip: [562, 230],
  head: BOY_HEAD,
  body: { width: 17, hem: 8, flare: 2 },
  arm: 5.2,
  leg: 5.6,
  near: {
    arm: [
      [564, 202],
      [558, 214],
      [552, 222],
    ],
    leg: [
      [562, 230],
      [564, 240],
      [564, 248],
    ],
  },
  far: {
    arm: [
      [568, 202],
      [574, 214],
      [580, 220],
    ],
    leg: [
      [560, 230],
      [558, 240],
      [556, 248],
    ],
  },
})
const TILLER = 'M538 218L556 223'

// Small, sitting low by the stern, looking back at us over his shoulder.
const SMALL_HEAD = { d: HEAD_SMALL, at: [598, 196] as P, rot: -14, scale: 0.6 }
const SMALL: Part[] = [
  { d: 'M592 234C588 222 594 212 606 210C618 210 626 220 626 234Z' },
  { d: HEAD_SMALL, t: headAt(-1, SMALL_HEAD.at, SMALL_HEAD.rot, SMALL_HEAD.scale) },
  { d: 'M600 216L592 226L598 234', w: 5.2 },
]
// Tonga, beside him, huddled in his dark blanket, his head showing: the smallest figure.
const TONGA_HEAD = { d: HEAD_TONGA, at: [642, 210] as P, rot: 0, scale: 0.54 }
const TONGA: Part[] = [
  { d: 'M628 232C627 222 633 216 642 216C651 216 656 222 655 232Z' },
  { d: TONGA_HAIR, t: headAt(-1, TONGA_HEAD.at, TONGA_HEAD.rot, TONGA_HEAD.scale) },
  { d: HEAD_TONGA, t: headAt(-1, TONGA_HEAD.at, TONGA_HEAD.rot, TONGA_HEAD.scale) },
]

// Old Smith, stripped to the waist, bending to shovel coal into the furnace.
const SMITH_HEAD = { d: HEAD_SMALLMAN, at: [698, 190] as P, rot: 28, scale: 0.68 }
const SMITH: Part[] = gent({
  facing: 1,
  neck: [692, 202],
  hip: [680, 228],
  head: SMITH_HEAD,
  body: { width: 15, hem: 0, flare: 0 },
  arm: 5,
  leg: 5.6,
  near: {
    arm: [
      [694, 206],
      [702, 218],
      [712, 216],
    ],
    leg: [
      [682, 228],
      [688, 240],
      [688, 248],
    ],
  },
  far: {
    arm: [
      [690, 206],
      [696, 220],
      [706, 222],
    ],
    leg: [
      [678, 228],
      [672, 240],
      [670, 248],
    ],
  },
})
const SHOVEL = 'M698 226L718 216'

/** A plume of puffs: an ink edge round the whole cloud, the paper over it, the curls cut in. */
function Smoke({ puffs, curls, edge }: { puffs: Puff[]; curls: string; edge: number }) {
  return (
    <g>
      <g fill={INK} stroke={INK} strokeWidth={edge}>
        {puffs.flat().map(([cx, cy, rad], i) => (
          <circle key={i} cx={n(cx)} cy={n(cy)} r={n(rad)} />
        ))}
      </g>
      <g fill={PAPER}>
        {puffs.flat().map(([cx, cy, rad], i) => (
          <circle key={i} cx={n(cx)} cy={n(cy)} r={n(rad)} />
        ))}
      </g>
      <path d={curls} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
    </g>
  )
}

function TheChaseDownTheThames({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const ht = headAt(1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const jt = headAt(1, JON_HEAD.at, JON_HEAD.rot, JON_HEAD.scale)
  const i1 = headAt(1, INSP1_HEAD.at, INSP1_HEAD.rot, INSP1_HEAD.scale)
  const i2 = headAt(1, INSP2_HEAD.at, INSP2_HEAD.rot, INSP2_HEAD.scale)
  const st = headAt(-1, SMALL_HEAD.at, SMALL_HEAD.rot, SMALL_HEAD.scale)
  const tt = headAt(-1, TONGA_HEAD.at, TONGA_HEAD.rot, TONGA_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 220], push: 1.03 })}>
        {/* "a clear starlit night" */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />

        {/* the far bank, flat, the marshes beyond the reach */}
        <path d={`M0 ${HORIZON + 6}V${HORIZON - 3}H${W}V${HORIZON + 6}Z`} fill={INK} />
        <path
          d={`M0 ${HORIZON - 3}H${W}M0 ${HORIZON + 6}H${W}`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={m.reeds} fill={PAPER} />

        {/* the river, lit in the funnel of the lantern's light */}
        <path d={m.water} fill={PAPER} />

        {/* the lantern's light, a long funnel ahead of us */}
        <path d={m.beamRays} fill={PAPER} />
        <path d={m.beamWater} stroke={PAPER} strokeWidth={LINE.hairline} />

        {/* the Aurora: her smoke, her foam, her hull with its two red stripes */}
        <g className="lc-drift-r">
          <Smoke puffs={m.auroraSmoke} curls={m.auroraCurls} edge={2.2} />
        </g>
        <path d={m.foam} fill={PAPER} />
        <path d={A_BOILER} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={A_GLOW} fill={RED} />
        <path
          d={A_GLARE}
          fill={RED}
          className="lc-flicker"
          style={timing({ dur: 0.6, delay: 0.3 })}
        />
        <path d="M718 222H730M719 217H729" stroke={INK} strokeWidth={0.9} />
        <path d={A_FUNNEL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={A_BAND} fill={PAPER} />
        <path d={A_CAP} fill={INK} stroke={PAPER} strokeWidth={0.9} />
        <Figure parts={SMITH} halo={1.3}>
          <path
            d={SMALLMAN_CUTS}
            transform={headAt(1, SMITH_HEAD.at, SMITH_HEAD.rot, SMITH_HEAD.scale)}
            fill={PAPER}
          />
        </Figure>
        <path d={SHOVEL} stroke={PAPER} strokeWidth={4.4} strokeLinecap="round" />
        <path d={SHOVEL} stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
        <path d="M716 213L724 209L726 215L719 219Z" fill={INK} stroke={PAPER} strokeWidth={0.8} />
        <Figure parts={TONGA} halo={1.3}>
          <path d={TONGA_CUTS} transform={tt} fill={PAPER} />
          <path d={gouge(633, 223, 650, 223, 0.6, 1)} fill={PAPER} />
        </Figure>
        <Figure parts={SMALL} halo={1.3}>
          <g transform={st}>
            <path d={SMALL_CUTS} fill={PAPER} />
            <path
              d={SMALL_CURLS}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
          </g>
        </Figure>
        <path d={TILLER} stroke={PAPER} strokeWidth={4.6} strokeLinecap="round" />
        <path d={TILLER} stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
        <Figure parts={BOY} halo={1.3}>
          <path
            d={SMALLMAN_CUTS}
            transform={headAt(1, BOY_HEAD.at, BOY_HEAD.rot, BOY_HEAD.scale)}
            fill={PAPER}
          />
        </Figure>
        <path
          d={A_HULL}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={A_STRIPES} fill={RED} />

        {/* the police launch: smoke from her funnel, the casing, the funnel */}
        <g className="lc-drift">
          <Smoke puffs={m.smoke} curls={m.smokeCurls} edge={3} />
        </g>
        <path d={CASING} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={FUNNEL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={FUNNEL_RIM} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={gouge(62, 140, 62, 244, 1.1)} fill={PAPER} />

        {/* Watson and Holmes, standing, leaning to the chase */}
        <Figure parts={WATSON}>
          <g transform={wt}>
            <path d={WATSON_CUTS + COLLAR + BOWLER_BAND} fill={PAPER} />
            <path d={WATSON_PUPIL} fill={INK} />
          </g>
        </Figure>
        <Figure parts={HOLMES}>
          <g transform={ht}>
            <path d={HOLMES_CUTS + COLLAR + TOP_HAT_BAND} fill={PAPER} />
            <path d={HOLMES_PUPIL} fill={INK} />
          </g>
        </Figure>

        {/* the two inspectors forward, crouched */}
        <Figure parts={INSPECTORS}>
          <path d={MAN_CUTS + COLLAR + BOWLER_BAND} transform={i1} fill={PAPER} />
          <path d={MAN_CUTS + COLLAR + BOWLER_BAND} transform={i2} fill={PAPER} />
        </Figure>

        {/* Jones at the lantern */}
        <Figure parts={JONES}>
          <g transform={jt}>
            <path d={JONES_CUTS + COLLAR + BOWLER_BAND} fill={PAPER} />
            <path
              d={JONES_FLUSH}
              fill="none"
              stroke={RED}
              strokeWidth={1.8}
              strokeLinecap="round"
            />
          </g>
        </Figure>

        {/* the hull over their legs, the steep prow, the wave rolling back from it */}
        <path d={HULL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={HULL_CUTS} fill={PAPER} />
        <path d={m.bowWave} fill={PAPER} />
        <path d={m.foamLines} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
        <HolmesHands
          facing={1}
          arms={[
            { arm: HOL_FAR, hand: HOL_HAND },
            { arm: HOL_NEAR, hand: HOL_HAND },
          ]}
        />

        {/* "One great yellow lantern in our bows" */}
        <path d={`M${LAMP[0]} 238V${LAMP[1] + 10}`} stroke={INK} strokeWidth={4} />
        <path
          d={`M${LAMP[0] - 9} ${LAMP[1] - 10}H${LAMP[0] + 9}V${LAMP[1] + 10}H${LAMP[0] - 9}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={2.4}
        />
        <path
          d={`M${LAMP[0] - 11} ${LAMP[1] - 12}H${LAMP[0] + 11}L${LAMP[0] + 6} ${LAMP[1] - 18}H${LAMP[0] - 6}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={0.9}
        />
      </g>
    </>
  )
}

export const theChaseDownTheThames: LinocutArt = {
  width: W,
  height: H,
  Draw: TheChaseDownTheThames,
}
