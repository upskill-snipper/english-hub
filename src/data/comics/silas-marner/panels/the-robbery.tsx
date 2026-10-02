import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  DUNSTAN_CUTS,
  DUNSTAN_HAIR,
  Figure,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_DUNSTAN,
  NECKCLOTH,
  ROUND_HAT,
  bootTop,
  handAt,
  headAt,
  line,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 4: "The robbery", the fourth moment in the guide's timeline. Every
 * detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "the mist, helped by the evening darkness, was more of a screen than he
 *   desired"; "the mist was passing into rain"; "The rain and darkness had
 *   got thicker, and he was glad of it". So it is night, and rain is cut
 *   across the dark in fine slanting strokes; the mist has turned to rain.
 * - The cottage: "once a stone-cutter's shed"; "Marner's cottage had no
 *   thatch"; "he saw the light gleaming through the chinks of Marner's
 *   shutters". So it is laid stone with a roof of stone slates, its shutters
 *   closed, and light gleams through their chinks.
 * - "He closed the door behind him immediately, that he might shut in the
 *   stream of light: a few steps would be enough to carry him beyond betrayal
 *   by the gleams from the shutter-chinks and the latch-hole." So the door is
 *   shut behind him, and the only light is the gleam at the shutter-chinks,
 *   the latch-hole and the foot of the door.
 * - "he rose to his feet with the bags in his hand"; "it was awkward walking
 *   with both hands filled, so that it was as much as he could do to grasp
 *   his whip along with one of the bags"; "twisting the lash of his
 *   hunting-whip compactly round the handle". So a leather bag of gold hangs
 *   from each fist, printed in the spot colour, and the whip, its lash wound
 *   round it, is gripped with the bag in his far hand.
 * - "So he stepped forward into the darkness." He is a step or two from the
 *   door, walking away from the light into the dark on the right, where the
 *   ground falls away at the edge of the Stone-pit: "the red, muddy water high
 *   up in the deserted quarry" catches a little of the light (its red is left
 *   to the words: here the spot colour is the gold's). Nothing happens
 *   to him here: what the Stone-pit hides is told sixteen years later, and is
 *   never drawn.
 * - Dunstan is the figure kit's (./people.tsx): thick-set, his heavy profile,
 *   in the round hat, coat and top-boots he rode to the hunt in. At night
 *   there is no colour on his face.
 *
 * Seeds: 401 (the rain), 402 (the stones of the wall), 404 (the wet clay),
 * 405 (the latch-hole's gleam), 406 (the shutters' gleam), 407 (the water in
 * the pit).
 */

const W = 860
const H = 340
/** The foot of the cottage wall, and the lane in front of it. */
const GROUND = 284

type Marks = {
  rain: string
  front: string
  joints: string
  clay: string
  gleam: string
  chink: string
  slates: string
  water: string
}

/** Where the light leaks out: the shutters' middle chink and the latch-hole. */
const CHINK: P = [106, 190]
const LATCH: P = [220, 214]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Rain: fine strokes slanting down to the left, thicker nearer the eye.
  const r = rng(401)
  let rain = ''
  let front = ''
  for (let k = 0; k < 300; k++) {
    const x = between(r, -20, W + 40)
    const y = between(r, -10, H)
    const len = between(r, 12, 26)
    rain += gouge(x, y, x - len * 0.32, y + len, between(r, 0.35, 0.62))
  }
  for (let k = 0; k < 30; k++) {
    const x = between(r, 340, W + 20)
    const y = between(r, 20, H - 30)
    const len = between(r, 22, 38)
    front += gouge(x, y, x - len * 0.32, y + len, between(r, 0.5, 0.8))
  }
  // The laid stones of the wall: their joints cut in paper, heavier where the
  // light from the chinks reaches them, almost gone in the dark corners.
  const st = rng(402)
  let joints = ''
  const near = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot(x - CHINK[0], (y - CHINK[1]) * 1.2) / 170),
      clamp(1 - Math.hypot(x - LATCH[0], (y - LATCH[1]) * 1.2) / 120),
    )
  for (let y = 104, row = 0; y < GROUND - 8; row++) {
    const h = between(st, 13, 18)
    let x = between(st, -16, 4)
    while (x < 322) {
      const w = between(st, 22, 42)
      const L = near(x + w / 2, y + h / 2)
      if (L > 0.04) {
        joints += gouge(x + 1, y + h, x + w - 1, y + h + between(st, -0.8, 0.8), 0.3 + L * 1.1)
        joints += gouge(x + w, y + 1, x + w + between(st, -1, 1), y + h - 1, 0.25 + L * 0.9)
      }
      x += w
    }
    y += h
  }
  // The wet clay of the lane: gleams where the light from the chinks falls on
  // its puddles, fading into the dark towards the pit.
  const c = rng(404)
  let clay = ''
  for (let y = GROUND + 5; y < H - 4; y += between(c, 4, 6.5)) {
    let x = between(c, -10, 20)
    const edge = PIT_EDGE + (y - GROUND) * 0.9
    while (x < edge - 10) {
      const len = between(c, 10, 46)
      const L = clamp(1 - Math.hypot(x + len / 2 - 190, (y - GROUND) * 2.2) / 420)
      if (c() < 0.2 + L * 0.75)
        clay += gouge(x, y, Math.min(x + len, edge - 6), y + between(c, -0.6, 0.6), 0.3 + L * 1.5)
      x += len + between(c, 6, 26)
    }
  }
  const gleam = rays(rng(405), LATCH[0], LATCH[1], { from: 4, to: 26, every: 30, width: 1.2 })
  const chink = rays(rng(406), CHINK[0], CHINK[1], { from: 8, to: 46, every: 16, width: 1.4 })
  // Stone slates on the roof, in courses.
  let slates = ''
  for (let y = 26; y < 92; y += 9) {
    const off = ((y / 9) % 2) * 12
    for (let x = off - 12; x < 330; x += 24) slates += `M${n(x)} ${y}L${n(x + 3)} ${y + 8}`
    slates += `M0 ${y}H${n(330 - (92 - y) * 0.2)}`
  }
  // Far down in the pit, the high water catching a little light.
  const wr = rng(407)
  let water = ''
  for (let k = 0; k < 7; k++) {
    const x = between(wr, 700, 830)
    const y = 304 + k * 4.4
    water += gouge(x, y, x + between(wr, 16, 40), y + between(wr, -0.4, 0.4), between(wr, 0.5, 0.9))
  }
  cached = { rain, front, joints, clay, gleam, chink, slates, water }
  return cached
}

/** Where the lane ends at the lip of the Stone-pit. */
const PIT_EDGE = 640

// ── DUNSTAN, a step from the door, walking into the dark ────────────────────
const DUN_HEAD = { d: HEAD_DUNSTAN, at: [437, 88] as P, rot: 10, scale: 1.2 }
/** His near hand, a bag hanging from it. */
const NEAR_ARM: P[] = [
  [432, 124],
  [446, 164],
  [452, 198],
]
/** His far hand, swung back: a bag, and the whip gripped with it. */
const FAR_ARM: P[] = [
  [426, 124],
  [412, 162],
  [404, 194],
]
const NEAR_LEG: P[] = [
  [434, 198],
  [462, 244],
  [472, 292],
]
const FAR_LEG: P[] = [
  [428, 200],
  [412, 246],
  [390, 286],
]
const GRIP = { parts: GRIP_HAND, scale: 1.08, rot: 0 }
const DUNSTAN: Part[] = man({
  facing: 1,
  neck: [426, 118],
  hip: [432, 198],
  head: DUN_HEAD,
  hair: ROUND_HAT,
  body: { width: 52, tails: 50, front: 4, flare: 7, swing: 8 },
  arm: 12.5,
  leg: 14,
  near: { arm: NEAR_ARM, leg: NEAR_LEG, hand: GRIP },
  far: { arm: FAR_ARM, leg: FAR_LEG, hand: GRIP },
}).map((q) => (q.d === line(NEAR_LEG) ? { ...q, sep: 1.2 } : q))
const DUN_T = headAt(1, DUN_HEAD.at, DUN_HEAD.rot, DUN_HEAD.scale)
/** The coat buttoned up against the rain: its edge and folds. */
const DUN_CUTS =
  gouge(440, 130, 448, 194, 0.9, 0.8) +
  gouge(426, 136, 420, 186, 0.8, -0.6) +
  gouge(410, 210, 398, 246, 0.8, -0.6)

/**
 * A leather bag of gold, hanging from a fist by its gathered neck, drawn
 * about the knot: the neck, the cord, and the heavy body below.
 */
const BAG = {
  body: 'M-3.6 4C-8 8 -14 15 -16 23C-18 31 -15 38 -8 40C-3 41.4 3 41.4 8 40C15 38 18 31 16 23C14 15 8 8 3.6 4Z',
  neck: 'M-4.6 -0.6L4.6 -0.6L3.8 5L-3.8 5Z',
  frill: 'M-4.6 -0.6C-7.6 -3 -6.4 -7 -3 -6.4C-1.6 -8.6 1.8 -8.6 3 -6.4C6.4 -7 7.6 -3 4.6 -0.6Z',
  gathers: 'M-2.4 5.6Q-7 12 -9.6 22M0 5.6V17M2.4 5.6Q7 12 9.6 22M-1 -6L-1.6 -1.2M1.6 -6.2L1.6 -1.2',
}

/** Where each bag hangs: its knot just below the fist that grips its gathered neck. */
const BAG_AT = { near: [455, 218] as P, far: [405, 214] as P }

function TheRobbery({ uid }: ArtProps) {
  const m = marks()
  const nearBag = handAt(NEAR_ARM, 1, GRIP)
  const farBag = handAt(FAR_ARM, 1, GRIP)
  return (
    <>
      <defs>
        <clipPath id={`${uid}-sky`}>
          <rect x={0} y={0} width={W} height={GROUND + 6} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
        {/* the rain in the dark */}
        <g clipPath={`url(#${uid}-sky)`}>
          <path d={m.rain} fill={PAPER} />
        </g>

        {/* the cottage: a roof of stone slates, the chimney, the laid stone walls */}
        <path d="M0 18H330L346 96H0Z" fill={INK} />
        <path d={m.slates} stroke={PAPER} strokeWidth={0.8} fill="none" />
        <path d="M0 92H344V97H0Z" fill={PAPER} />
        <rect
          x={250}
          y={2}
          width={32}
          height={30}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(254, 12, 278, 12, 0.8) + gouge(254, 22, 278, 22, 0.8)} fill={PAPER} />
        <rect x={0} y={97} width={326} height={GROUND - 97} fill={INK} />
        <path d={m.joints} fill={PAPER} />
        <path d={`M326 97V${GROUND}`} stroke={PAPER} strokeWidth={LINE.carve} />

        {/* the window, its two shutters closed, the light gleaming through their chinks */}
        <rect
          x={56}
          y={148}
          width={100}
          height={84}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.chink} fill={PAPER} />
        <rect x={60} y={152} width={44} height={76} fill={INK} stroke={PAPER} strokeWidth={0.8} />
        <rect x={108} y={152} width={44} height={76} fill={INK} stroke={PAPER} strokeWidth={0.8} />
        <path d="M74 156V224M90 156V224M122 156V224M138 156V224" stroke={PAPER} strokeWidth={0.6} />
        <g className="lc-glow" style={timing({ dur: 2.4 })}>
          <path d="M106 151V229" stroke={PAPER} strokeWidth={3} />
          <path d="M60 150.6H152M60 229.4H152" stroke={PAPER} strokeWidth={1.6} />
        </g>
        <path d="M52 236H160" stroke={PAPER} strokeWidth={3} />

        {/* the door, shut on the stream of light: the gleam at the latch-hole and along its foot */}
        <rect
          x={190}
          y={140}
          width={64}
          height={GROUND - 140}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M206 146V${GROUND - 4}M222 146V${GROUND - 4}M238 146V${GROUND - 4}`}
          stroke={PAPER}
          strokeWidth={0.6}
        />
        <path d={m.gleam} fill={PAPER} />
        <circle cx={LATCH[0]} cy={LATCH[1]} r={3} fill={PAPER} />
        <path d={`M192 ${GROUND - 1}H252`} stroke={PAPER} strokeWidth={2.6} />

        {/* the lane: wet clay, ending at the lip of the Stone-pit on the right */}
        <path
          d={`M0 ${GROUND}H${PIT_EDGE}L${PIT_EDGE + 12} ${GROUND + 6}L${PIT_EDGE + 30} ${H}H0Z`}
          fill={INK}
        />
        <path d={`M0 ${GROUND}H${PIT_EDGE}`} stroke={PAPER} strokeWidth={1.2} />
        <path d={m.clay} fill={PAPER} />
        <path
          d={`M${PIT_EDGE - 30} ${GROUND + 0.6}L${PIT_EDGE} ${GROUND}L${PIT_EDGE + 6} ${GROUND + 5}L${PIT_EDGE + 10} ${GROUND + 4}L${PIT_EDGE + 18} ${GROUND + 22}L${PIT_EDGE + 24} ${GROUND + 26}L${PIT_EDGE + 32} ${H}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.8}
          strokeLinejoin="round"
        />
        {/* far down in the pit, the high water catching a little light */}
        <path d={m.water} fill={PAPER} />

        {/* Dunstan, a bag of gold in each fist, stepping forward into the darkness */}
        <Figure parts={DUNSTAN} cuts={DUN_CUTS} halo={2}>
          <path d={bootTop(NEAR_LEG, 14) + bootTop(FAR_LEG, 14)} fill={PAPER} />
          <path d={NECKCLOTH} transform={`${DUN_T} translate(3 -1)`} fill={PAPER} />
          <path d={DUNSTAN_CUTS + DUNSTAN_HAIR} transform={DUN_T} fill={PAPER} />
          <path d={gouge(-18, -12, 18, -12, 1.1)} transform={DUN_T} fill={PAPER} />
        </Figure>
        {/* the whip, its lash wound round the handle, gripped with the far bag */}
        <path d="M410 190L366 224" stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
        <path d="M410 190L366 224" stroke={INK} strokeWidth={4.2} strokeLinecap="round" />
        <path
          d="M384 210.4L378 215M380 213.4L374 218M376 216.4L370.4 220.8"
          stroke={PAPER}
          strokeWidth={1.1}
        />
        <circle cx={412} cy={188.6} r={4} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        {/* the two bags, hanging heavy from his fists */}
        {[BAG_AT.far, BAG_AT.near].map(([x, y]) => (
          <g key={x} transform={`translate(${x} ${y})`}>
            <g fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round">
              <path d={BAG.body} />
              <path d={BAG.neck} />
            </g>
            <path d={BAG.body} fill={RED} stroke={INK} strokeWidth={1.2} />
            <path d={BAG.neck} fill={INK} />
            <path d={BAG.frill} fill={RED} stroke={INK} strokeWidth={1} />
            <path
              d={BAG.gathers}
              fill="none"
              stroke={INK}
              strokeWidth={0.9}
              strokeLinecap="round"
            />
          </g>
        ))}
        {/* the fists, closed on the bags' necks, drawn over them */}
        {[farBag, nearBag].map((t) => (
          <Figure key={t} parts={GRIP_HAND.map((q) => ({ ...q, t }))} halo={1.6}>
            <path d={GRIP_CUTS} transform={t} fill={PAPER} />
          </Figure>
        ))}

        {/* rain falling in front of him too */}
        <path d={m.front} fill={PAPER} />
      </g>
    </>
  )
}

export const theRobbery: LinocutArt = { width: W, height: H, Draw: TheRobbery }
