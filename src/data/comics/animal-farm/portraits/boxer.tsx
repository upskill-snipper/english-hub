import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  coat,
  once,
  portraitGround,
  quad2,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Boxer, as Orwell brings him into the barn in Chapter 1, and nothing else:
 *
 *   "Boxer was an enormous beast, nearly eighteen hands high, and as strong
 *   as any two ordinary horses put together. A white stripe down his nose gave
 *   him a somewhat stupid appearance, and in fact he was not of first-rate
 *   intelligence, but he was universally respected for his steadiness of
 *   character and tremendous powers of work."
 *
 * So: the head and great neck of a cart-horse in profile, facing right, so
 * big that the block cannot hold him: his ears run off its top and his neck
 * off its foot. He is cut in INK against a pale ground, as the figure kit cuts
 * him (../panels/people.tsx), because a white stripe shows only on a darker
 * coat, and the stripe runs in PAPER from his brow to his nose. His neck is
 * cut with the curves of the muscle in it; his eye is calm and steady under a
 * level lid, not rolled or startled. No harness: in Chapter 1 he walks into
 * the meeting free. Nothing here comes from a film or stage production.
 *
 * The head is drawn level in its own frame, the poll at the origin and the
 * muzzle to the right, then carried into the plate by `at`, lowered, as a
 * big horse carries it.
 *
 * Seeds: 5601 for the ground, 5602 for the cuts in the figure.
 */

/** The head's frame to the plate's: the poll at (170, 46), the muzzle 56 degrees down. */
const POLL: Pt = [170, 46]
const TILT = deg(56)
function at(x: number, y: number): Pt {
  const c = Math.cos(TILT)
  const s = Math.sin(TILT)
  return [
    Math.round((POLL[0] + x * c - y * s) * 10) / 10,
    Math.round((POLL[1] + x * s + y * c) * 10) / 10,
  ]
}
const place = (pts: Knot[]): Knot[] =>
  pts.map((p) => {
    const [x, y] = at(p[0], p[1])
    return p[2] ? [x, y, 1] : [x, y]
  })

/** The head, level: a heavy cart-horse's, with a big jowl and a long, slightly arched face. */
const HEAD: Knot[] = place([
  [-10, -8],
  [16, -16],
  [46, -16],
  [78, -10],
  [118, -2],
  [156, 8],
  [184, 16],
  [202, 26],
  [211, 40],
  [209, 56],
  [201, 64],
  [191, 66, 1],
  [197, 72],
  [193, 82],
  [180, 88],
  [165, 82],
  [142, 82],
  [114, 90],
  [88, 102],
  [62, 110],
  [38, 104],
  [20, 86],
  [8, 60],
  [0, 34],
])
/** The neck: the crest arched high, the whole of it running out of the block. */
const NECK: Knot[] = [
  at(-10, -8),
  at(4, 40),
  at(20, 86),
  [176, 196],
  [170, 250],
  [166, 330, 1],
  [-10, 330, 1],
  [-10, 150, 1],
  [30, 104],
  [76, 66],
  [120, 42],
]
/** "A white stripe down his nose": from his brow to his nostrils, along the front of the face. */
const STRIPE = smooth(
  place([
    [26, -8],
    [48, -11],
    [80, -4],
    [120, 4],
    [158, 13],
    [184, 21],
    [198, 31],
    [199, 40],
    [192, 38],
    [182, 30],
    [156, 22],
    [118, 14],
    [80, 8],
    [50, 5],
    [32, 3],
  ]),
)
/** His ears, running off the top of the block. */
const EAR_NEAR = smooth([
  [176, 52],
  [178, 30],
  [190, 12, 1],
  [198, 30],
  [196, 52],
])
const EAR_FAR = smooth([
  [156, 54],
  [156, 32],
  [164, 14, 1],
  [174, 32],
  [174, 52],
])
const EYE_C = at(58, 16)
/** Where the crest runs, poll to withers, for the mane. */
const crest = quad2([172, 50], [70, 60], [4, 150])

type Marks = {
  ground: string
  mane: string
  forelock: string
  rim: string
  muscle: string
  jowl: string
  face: string
}

const marks = once<Marks>(() => {
  // A pale ground, so the black horse stands out: cut away almost everywhere,
  // the ink left in thin lines, heavier low down.
  const ground = portraitGround(5601, (x, y) =>
    clamp(0.1 + Math.max(0, (y - 150) / 320) + (1 - x / PW) * 0.18),
  )
  const r = rng(5602)
  // His mane, lying along the crest, cut as strands of light.
  const mane = strands(
    r,
    46,
    (t) => {
      const [x, y] = crest(t)
      return [x + 2, y + 4]
    },
    (t) => {
      const [x, y] = crest(t)
      return [x + 20 - t * 6, y + 34 - t * 6]
    },
    [0.6, 1.4],
    2,
  )
  // A thick forelock falling over his brow.
  const forelock = strands(
    r,
    12,
    (t) => [170 + t * 22, 46 + t * 6],
    (t) => {
      const [x, y] = at(26 + t * 16, 4)
      return [x, y + 4]
    },
    [0.7, 1.3],
    1.5,
  )
  // Light along the ridge of his neck, from the right.
  let rim = ''
  for (let i = 0; i < 26; i++) {
    const t = i / 26
    const [x1, y1] = crest(t)
    const [x2, y2] = crest(t + 1 / 26)
    if (r() < 0.2) continue
    rim += gouge(x1 + 2, y1 + 44, x2 + 2, y2 + 44, 1.3, -0.4)
  }
  // "as strong as any two ordinary horses put together": the great muscles of
  // his neck and shoulder, cut as long curves.
  let muscle = ''
  for (let k = 0; k < 6; k++) {
    const x0 = 44 + k * 18
    muscle += gouge(x0, 150 + k * 6, x0 + 60, 230 + k * 4, 1.4, -6)
  }
  for (let k = 0; k < 4; k++) muscle += gouge(20 + k * 12, 240, 60 + k * 14, 318, 1.2, 5)
  muscle += coat(
    r,
    NECK,
    160,
    () => deg(70),
    (x, y) => clamp(0.4 - Math.abs(x - 110) / 200 + (y - 200) / 400),
    { len: [6, 12], width: 1 },
  )
  // The round of the jowl, and the lines of his long face.
  let jowl = ''
  for (let k = 0; k < 4; k++) {
    const [cx, cy] = at(50, 58)
    const rad = 22 + k * 7
    jowl += `M${n(cx - rad * 0.9)} ${n(cy - rad * 0.3)}A${rad} ${rad} 0 0 0 ${n(cx + rad * 0.5)} ${n(cy + rad * 0.85)}`
  }
  let face = ''
  for (let i = 0; i < 8; i++) {
    const [x1, y1] = at(84 + i * 12, 56 + (i % 2) * 2)
    const [x2, y2] = at(92 + i * 12, 74 + (i % 3))
    face += gouge(x1, y1, x2, y2, 0.8)
  }
  return { ground, mane, forelock, rim, muscle, jowl, face }
})

function BoxerPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-bx-body`
  const HEAD_D = smooth(HEAD)
  const NECK_D = smooth(NECK)
  const [ex, ey] = EYE_C
  const [nx, ny] = at(190, 34)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={HEAD_D} />
          <path d={NECK_D} />
        </clipPath>
      </defs>
      <rect x={0} y={0} width={PW} height={PH} fill={PAPER} />
      <path d={m.ground} fill={INK} />
      {/* the paper halo that cuts him out of the ground */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={5} strokeLinejoin="round">
        <path d={HEAD_D} />
        <path d={NECK_D} />
        <path d={EAR_FAR} />
        <path d={EAR_NEAR} />
      </g>
      <path d={EAR_FAR} fill={INK} />
      <path d={NECK_D} fill={INK} />
      <path d={HEAD_D} fill={INK} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.muscle} fill={PAPER} />
        <path d={m.rim} fill={PAPER} />
        <path d={m.mane} fill={PAPER} />
        <path d={m.face} fill={PAPER} />
        <path
          d={m.jowl}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.4}
          strokeDasharray="16 5"
          strokeLinecap="round"
        />
        {/* where the head meets the neck */}
        <path
          d={smooth([at(2, 36), at(12, 66), at(24, 94)], false)}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
      </g>
      <path
        d={EAR_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d="M184 48Q186 32 189 18" fill="none" stroke={PAPER} strokeWidth={1.1} />
      {/* the white stripe down his nose */}
      <path d={STRIPE} fill={PAPER} />
      <path d={m.forelock} fill={INK} />
      {/* a calm, steady eye under a level lid */}
      <g transform={`translate(${ex} ${ey}) rotate(56)`}>
        <path d="M-14 0Q0 -10 15 -1Q1 9 -14 0Z" fill={PAPER} />
        <circle cx={1} cy={-0.2} r={5.4} fill={INK} />
        <circle cx={2.8} cy={-2} r={1.5} fill={PAPER} />
        <path
          d="M-16 -6Q0 -16 17 -6"
          fill="none"
          stroke={PAPER}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      {/* the nostril and the line of the lips */}
      <path
        d={`M${nx} ${ny}m-4 -8c-6 2 -6 12 0 14`}
        fill="none"
        stroke={INK}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <path
        d={smooth([at(168, 66), at(180, 68), at(191, 66)], false)}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <InnerRule />
    </>
  )
}

export const boxerArt: LinocutArt = { width: PW, height: PH, Draw: BoxerPortrait }

export const boxer: Portrait = {
  name: 'Boxer',
  art: boxerArt,
  alt: 'A linocut portrait of Boxer as he comes into the barn in Chapter 1: the head and great neck of a black cart-horse in profile, facing right, so big that his ears run off the top of the picture and his neck off the bottom. He is cut out of a pale ground by a thin white outline. A white stripe runs down the front of his face from his brow to his nose. A thick forelock falls over his brow, his mane lies along his arched crest, the muscles of his neck are cut as long curves, and his eye is calm and steady. Four numbered red markers point to his head, his neck, the white stripe and his eye.',
  describedBy: [
    { phrase: 'an enormous beast, nearly eighteen hands high', at: [232, 34], to: [200, 44] },
    { phrase: 'as strong as any two ordinary horses put together', at: [60, 200], to: [96, 196] },
    { phrase: 'A white stripe down his nose', at: [304, 150], to: at(128, -2) },
    { phrase: 'steadiness of character and tremendous powers of work', at: [128, 118], to: EYE_C },
  ],
  where: 'Chapter 1',
  passage:
    'Boxer was an enormous beast, nearly eighteen hands high, and as strong as any two ordinary horses put together. A white stripe down his nose gave him a somewhat stupid appearance, and in fact he was not of first-rate intelligence, but he was universally respected for his steadiness of character and tremendous powers of work.',
  note: 'Boxer’s strength builds the farm, and his trust lets the pigs use it. His answer to every problem is “I will work harder”, and in Chapter 9, when his strength is gone, he is taken away in a van marked “Horse Slaughterer”.',
}
