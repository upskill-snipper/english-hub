import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  ribbon,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, headAt, posed, type Part } from './cut-figure'
import { EYE, HEAD_BEARD, HEAD_MAN } from './inverness-people'

/**
 * Act 3, Scene 3: "The ambush", the fourteenth moment in the guide's
 * timeline. A road in the park near the palace, at dusk. Every detail is from
 * the scene (Folger text):
 *
 * - FIRST MURDERER: "The west yet glimmers with some streaks of day." So the
 *   sky is dark but for long streaks of light low on the left, and the
 *   murderers come out of that side.
 * - "Enter Banquo and Fleance, with a torch." BANQUO: "It will be rain
 *   tonight." FIRST MURDERER: "Let it come down." So the first rain is
 *   falling, cut as fine slanting lines.
 * - They set on him, and the THIRD MURDERER asks "Who did strike out the
 *   light?" So the torch has been struck away and tumbles through the air,
 *   its flame, the spot colour, the last light on the scene.
 * - BANQUO: "O, treachery! Fly, good Fleance, fly, fly, fly!" So Banquo turns
 *   to face the three, one hand up against them and the other flung back
 *   towards his son, and Fleance, a boy, runs away along the road to the
 *   right. "There's but one down. The son is fled."
 * - Banquo's walk ends "at th' palace gate", so the palace is far off at the
 *   end of the road, its gate still lit.
 *
 * SAFEGUARDING. The killing is not drawn. The picture stops at the moment
 * before: one murderer's blade is raised, another's cudgel, and no one has
 * been struck. Nothing describes the murderers, so they are plain men in the
 * rough dress of the period, a cap and a belted coat.
 * Seed 514 for the sky, the rain and the ground.
 */

const W = 860
const H = 340
const HORIZON = 252
const TORCH: [number, number] = [398, 58]

type Pt2 = [number, number]

type Marks = {
  sky: string
  rain: string
  ground: string
  flare: string
  sparks: string
  bark: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(514)
  // Dusk: dark overhead, streaks of day low in the west (the left).
  const light = (x: number, y: number) => {
    const west = clamp((y - 110) / (HORIZON - 110)) * clamp(1 - x / 620) ** 0.6
    return Math.max(west, 0.04)
  }
  const sky = gougeField(r, { x0: 0, x1: W, y0: 6, y1: HORIZON - 2 }, light, {
    spacing: 6.6,
    len: [30, 110],
    gap: [6, 26],
  })

  // "Let it come down": the first of the rain, slanting from the right.
  let rain = ''
  for (let i = 0; i < 70; i++) {
    const x = between(r, 460, 860)
    const y = between(r, 10, 230)
    const len = between(r, 12, 24)
    rain += gouge(x, y, x - len * 0.28, y + len, 0.45)
  }

  // The road and its verges.
  const dark = (_x: number, y: number) => {
    const t = clamp((y - HORIZON) / (H - HORIZON))
    const road = y > 270 && y < 330 ? 0.05 : 0.35
    return road + t * 0.3
  }
  const ground = gougeField(r, { x0: 0, x1: W, y0: HORIZON + 3, y1: H }, dark, {
    spacing: 5.4,
    len: [12, 50],
    max: 2.4,
  })

  const flare = rays(rng(515), TORCH[0] + 20, TORCH[1] - 10, {
    from: 26,
    to: 124,
    every: 5.4,
    width: 3,
  })
  let sparks = ''
  for (const [x, y] of [
    [452, 30],
    [462, 52],
    [440, 18],
    [470, 40],
    [424, 24],
    [446, 70],
  ])
    sparks += gouge(x, y, x + between(r, 2, 5), y - between(r, 2, 5), 1.3)

  // Bark on the two trees.
  let bark = ''
  for (let y = 8; y < 318; y += between(r, 8, 16)) {
    bark += gouge(52 + between(r, 0, 6), y, 56 + between(r, 0, 6), y + between(r, 10, 22), 0.8)
    bark += gouge(812 + between(r, 0, 6), y, 814 + between(r, 0, 6), y + between(r, 10, 22), 0.6)
  }

  cached = { sky, rain, ground, flare, sparks, bark }
  return cached
}

/** A plain cap on a HEAD, for the murderers. */
const CAP =
  'M-16.5 -3C-18.5 -14 -10 -23.5 1 -23.5C10 -23.5 17 -18.5 19.5 -11L15 -8C8 -11.5 -4 -10 -16.5 -3Z'

/** The first murderer, lunging in, blade up, the hand that struck the torch thrown out. */
const M1_HEAD = { d: HEAD_MAN, at: [301, 146] as Pt2, rot: 14 }
const M1: Part[] = [
  ...posed({
    facing: 1,
    neck: [292, 166],
    hip: [264, 236],
    head: M1_HEAD,
    body: { width: 30, hem: 36, flare: 10, swing: 12 },
    near: {
      arm: [
        [292, 174],
        [304, 136],
        [318, 112],
      ],
      leg: [
        [266, 236],
        [296, 272],
        [308, 314],
      ],
    },
    far: {
      arm: [
        [288, 172],
        [314, 178],
        [336, 166],
      ],
      leg: [
        [260, 236],
        [236, 274],
        [212, 312],
      ],
    },
  }),
  { d: CAP, t: headAt(1, M1_HEAD.at, M1_HEAD.rot) },
]

/** The second, behind him, a cudgel swung back over his head. */
const M2_HEAD = { d: HEAD_MAN, at: [205, 152] as Pt2, rot: 4, scale: 0.94 }
const M2: Part[] = [
  { d: 'M206 114L232 86', w: 7 },
  ...posed({
    facing: 1,
    neck: [199, 171],
    hip: [188, 240],
    head: M2_HEAD,
    body: { width: 28, hem: 34, flare: 9, swing: 8 },
    near: {
      arm: [
        [202, 178],
        [194, 144],
        [206, 116],
      ],
      leg: [
        [190, 240],
        [208, 272],
        [214, 306],
      ],
    },
    far: {
      arm: [
        [196, 178],
        [216, 192],
        [232, 198],
      ],
      leg: [
        [186, 240],
        [172, 272],
        [156, 304],
      ],
    },
  }),
  { d: CAP, t: headAt(1, M2_HEAD.at, M2_HEAD.rot, M2_HEAD.scale) },
]

/** The third, coming out from the trees, pointing at Banquo. */
const M3_HEAD = { d: HEAD_MAN, at: [117, 158] as Pt2, rot: 2, scale: 0.9 }
const M3: Part[] = [
  ...posed({
    facing: 1,
    neck: [111, 176],
    hip: [106, 242],
    head: M3_HEAD,
    body: { width: 27, hem: 32, flare: 8, swing: 4 },
    near: {
      arm: [
        [114, 184],
        [136, 190],
        [158, 184],
      ],
      leg: [
        [108, 242],
        [122, 274],
        [128, 306],
      ],
    },
    far: {
      arm: [
        [108, 184],
        [100, 208],
        [98, 228],
      ],
      leg: [
        [104, 242],
        [94, 276],
        [84, 306],
      ],
    },
  }),
  { d: CAP, t: headAt(1, M3_HEAD.at, M3_HEAD.rot, M3_HEAD.scale) },
]

/** Banquo, facing them, one hand up against them, the other flung back towards his son. */
const BANQUO_HEAD = { d: HEAD_BEARD, at: [432, 142] as Pt2, rot: 10, scale: 1.04 }
const BANQUO_POSE = posed({
  facing: -1,
  neck: [428, 163],
  hip: [420, 236],
  head: BANQUO_HEAD,
  body: { width: 32, hem: 42, flare: 12, swing: 10 },
  near: {
    arm: [
      [424, 172],
      [400, 168],
      [388, 146],
    ],
    leg: [
      [418, 236],
      [402, 274],
      [390, 314],
    ],
  },
  far: {
    arm: [
      [434, 172],
      [462, 166],
      [490, 152],
    ],
    leg: [
      [424, 236],
      [444, 274],
      [460, 314],
    ],
  },
})
const BANQUO: Part[] = [
  {
    d: 'M426 156C444 160 464 178 480 204C492 224 500 248 502 270L458 264C450 242 440 222 428 208Z',
  },
  // His far arm lifted off the cloak by its own paper edge; the fist posed()
  // gives his raised hand is replaced by an open palm held up against them.
  ...BANQUO_POSE.slice(0, -1).map((p, i) => (i === 0 ? { ...p, sep: 1.5 } : p)),
  {
    d: 'M391 152C386 150 383 145 383 140L380 131L383 130L386 137L385 127L388.5 126.5L389.5 136L391 126L394.5 126.5L393.5 137L396.5 129L399.5 130.5L396 141L399 139L401 141C399 147 396 152 391 152Z',
  },
]
const BANQUO_CUTS =
  gouge(440, 176, 472, 254, 1.2, -1.4) +
  gouge(432, 190, 454, 258, 1, -1) +
  gouge(404, 234, 438, 236, 0.9) +
  gouge(414, 196, 410, 270, 1, 0.8)

/** Fleance, a boy, running for his life along the road. */
const FLEANCE_HEAD = { d: HEAD_MAN, at: [612, 172] as Pt2, rot: 8, scale: 0.8 }
const FLEANCE: Part[] = posed({
  facing: 1,
  neck: [606, 188],
  hip: [594, 240],
  head: FLEANCE_HEAD,
  body: { width: 24, hem: 22, flare: 8, swing: 10 },
  arm: 6.4,
  leg: 8,
  near: {
    arm: [
      [605, 194],
      [620, 214],
      [636, 202],
    ],
    leg: [
      [596, 240],
      [622, 260],
      [618, 298],
    ],
  },
  far: {
    arm: [
      [600, 194],
      [586, 214],
      [572, 226],
    ],
    leg: [
      [592, 240],
      [574, 266],
      [552, 274],
    ],
  },
})

/** The trunks of two trees in the park, framing the road, and their lowest boughs. */
const TREES =
  'M36 340C40 250 44 150 46 60C46 36 40 16 30 0H80C74 18 70 38 70 62C70 150 72 250 76 340Z' +
  'M800 340C804 250 806 160 806 70C806 44 800 20 792 0H842C836 22 832 46 832 72C832 160 834 250 838 340Z'
const BOUGHS = [
  ribbon(
    [
      [52, 74],
      [38, 64],
      [22, 58],
      [6, 56],
    ],
    11,
    0.6,
    false,
  ),
  ribbon(
    [
      [64, 44],
      [82, 32],
      [102, 24],
      [128, 20],
    ],
    11,
    0.6,
    false,
  ),
  ribbon(
    [
      [90, 30],
      [100, 14],
      [104, 4],
    ],
    5,
    0.6,
    false,
  ),
  ribbon(
    [
      [810, 96],
      [794, 84],
      [776, 78],
      [754, 78],
    ],
    11,
    0.6,
    false,
  ),
  ribbon(
    [
      [828, 60],
      [838, 50],
      [848, 44],
      [858, 42],
    ],
    9,
    0.6,
    false,
  ),
]

/** The palace, far off at the end of the road. */
const PALACE =
  'M676 254V214H682V206H688V214H694V200H700V192H706V200H712V222H730V204H736V196H742V204H748V196H754V204H760V222H772V210H778V204H784V254Z'

function TheAmbush({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 150], push: 1.035 })}>
        <path d={m.sky} fill={PAPER} />
        <g className="lc-drift-r" style={timing({ delay: 0.1 })}>
          <path d={m.rain} fill={PAPER} />
        </g>
        <g clipPath={`url(#${skyClip})`}>
          <path d={m.flare} fill={PAPER} />
        </g>

        {/* the palace, far off, and the road */}
        <path d={PALACE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d="M740 254V240C740 236 743 233 746 233C749 233 752 236 752 240V254Z" fill={PAPER} />
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={m.ground} fill={INK} />
        <path d={`M0 ${HORIZON + 1}H${W}`} stroke={INK} strokeWidth={LINE.bold} />

        {/* the trees */}
        <path
          d={BOUGHS.join('')}
          fill={PAPER}
          stroke={PAPER}
          strokeWidth={3.2}
          strokeLinejoin="round"
        />
        <path d={BOUGHS.join('')} fill={INK} />
        <path d={TREES} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.bark} fill={PAPER} />

        {/* the murderers */}
        <CutFigure parts={M3}>
          <path
            d={EYE}
            transform={headAt(1, M3_HEAD.at, M3_HEAD.rot, M3_HEAD.scale)}
            fill={PAPER}
          />
        </CutFigure>
        <CutFigure parts={M2}>
          <path
            d={EYE}
            transform={headAt(1, M2_HEAD.at, M2_HEAD.rot, M2_HEAD.scale)}
            fill={PAPER}
          />
        </CutFigure>
        <CutFigure parts={M1}>
          <path d={EYE} transform={headAt(1, M1_HEAD.at, M1_HEAD.rot)} fill={PAPER} />
          {/* the blade, raised, touching no one */}
          <path d="M315 108L324 76L327 78L320 110Z" fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <path d="M310 108L326 112" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        </CutFigure>

        {/* the torch, struck away, still burning as it falls */}
        <g transform={`translate(${TORCH[0]} ${TORCH[1]}) rotate(60)`}>
          <path d="M-3.5 8L3.5 8L5 62L-5 62Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d="M-6.5 2H6.5V11H-6.5Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
          <path d={gouge(-5, 5, 5, 5, 0.8) + gouge(-4, 20, -3, 50, 0.7)} fill={PAPER} />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.7, delay: 0.1 })}
            d="M0 5C-10 2 -14 -10 -9 -22C-8 -28 -7 -31 -6 -36C-2 -29 -2 -25 -1 -22C-1 -34 0 -46 3 -58C8 -47 10 -36 8 -26C10 -30 11 -35 11 -41C15 -32 16 -20 12 -10C10 -3 6 2 0 5Z"
            fill={RED}
          />
          <path d="M1 0C-3 -3 -3.5 -10 0 -19C3.5 -10 4 -4 1 0Z" fill={PAPER} />
        </g>
        <path d={m.sparks} fill={RED} />

        {/* Banquo */}
        <CutFigure parts={BANQUO} cuts={BANQUO_CUTS}>
          <path
            d={EYE}
            transform={headAt(-1, BANQUO_HEAD.at, BANQUO_HEAD.rot, BANQUO_HEAD.scale)}
            fill={PAPER}
          />
        </CutFigure>

        {/* Fleance, fleeing */}
        <g className="lc-drift" style={timing({ delay: 0 })}>
          <CutFigure parts={FLEANCE}>
            <path
              d={EYE}
              transform={headAt(1, FLEANCE_HEAD.at, FLEANCE_HEAD.rot, FLEANCE_HEAD.scale)}
              fill={PAPER}
            />
          </CutFigure>
        </g>
        <path
          d={
            gouge(384, 320, 470, 320, 1.8) +
            gouge(200, 320, 320, 320, 1.8) +
            gouge(70, 309, 140, 309, 1.4) +
            gouge(546, 306, 630, 306, 1.4)
          }
          fill={INK}
        />
      </g>
    </>
  )
}

export const theAmbush: LinocutArt = { width: W, height: H, Draw: TheAmbush }
