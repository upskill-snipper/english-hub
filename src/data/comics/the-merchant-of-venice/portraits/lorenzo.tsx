import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
} from './common'

/**
 * Lorenzo, at Belmont on the night of Act 5, Scene 1, from Jessica's words
 * and his own:
 *
 *   JESSICA: "In such a night Did young Lorenzo swear he loved her well"
 *   LORENZO: "How sweet the moonlight sleeps upon this bank! ... Sit,
 *   Jessica. Look how the floor of heaven Is thick inlaid with patens of
 *   bright gold."
 *
 * So: a young man out of doors at night, his face turned up to the sky, lit
 * by the moon, a small smile on his lips; above him the moon and the stars
 * he is showing Jessica. The play says nothing else of his looks.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a doublet,
 * the small ruff every man in the kit wears, and a flat bonnet worn tilted
 * forward, its band cut in paper; clean-shaven, with short dark hair at the
 * nape. His head is every man's head (MAN_HEAD), turned up. The moon and the
 * stars are cut in paper; there is no red in this plate.
 *
 * Seeds: 4701 (the figure), 4702 to 4703 (its marks), 4710 (the ground),
 * 4711 (the stars).
 */

/** His head is turned up to the sky. */
const LOOK_UP = 'rotate(-12 112 214)'

/** The flat bonnet, tilted forward over his brow: the kit's LORENZO_BONNET at this size. */
const BONNET =
  'M37.5 82.7C24 54.3 53.9 18.8 103.6 15.3C149.7 13.2 183.8 32.3 181.7 57.9' +
  'C153.3 67.8 87.9 74.9 37.5 82.7Z'
const BONNET_BAND = gouge(41, 73.5, 174.6, 55.6, 3.2, -2.8)
/** Short dark hair at the nape, below the bonnet. */
const HAIR = spline([
  [60, 82, 1],
  [96, 80],
  [112, 94, 1],
  [100, 100],
  [93, 112],
  [89, 132],
  [78, 146],
  [60, 150],
  [47, 138],
  [41, 110],
  [42, 86, 1],
])

export const LORENZO_BODY = spline([
  [-10, 336, 1],
  [-4, 296],
  [14, 262],
  [44, 234],
  [76, 220],
  [112, 226],
  [146, 220],
  [176, 232],
  [202, 258],
  [220, 294],
  [230, 336, 1],
])
const RUFF = ruffBand(74, 152, 204, 226, 6, 0.06)
const BUTTONS: Pt[] = [
  [184, 246],
  [189, 262],
  [194, 278],
  [198, 294],
  [202, 310],
  [205, 326],
]

/** The moon, high in the portrait, ahead of him; and one bright star the marker points to. */
const MOON: Pt = [270, 58]
const MOON_R = 20
const STAR: Pt = [196, 30]

type Marks = { hair: string; bonnet: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(106 - t * 56, 96 + t * 6, 90 - t * 30, 140 + t * 4, 0.9 + r() * 0.3, -2)
  }
  // The bonnet's soft crown catching the moonlight along its top.
  const bonnet = gouge(62, 40, 150, 26, 1.3, -3) + gouge(76, 52, 164, 40, 0.9, -2.5)
  const body = folds(seed + 1, [100, 176], [256, 272], 4)
  const m = { hair, bonnet, body }
  marksBySeed.set(seed, m)
  return m
}

/** Lorenzo, looking up, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function LorenzoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  return (
    <g>
      <path d={LORENZO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.8} />
      <g transform={LOOK_UP}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-lor-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <path
          d={BONNET}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.bonnet} fill={PAPER} />
        <path d={BONNET_BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
        {/* "young Lorenzo": a smooth face, a small smile */}
        <ManNoseAndMouth smile />
        <ManBrow w={2.6} raise={1} />
        <ManEye look="up" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, bonnet and shoulders. */
export function LorenzoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={LOOK_UP}>
        <path d={MAN_HEAD} />
        <path d={BONNET} />
      </g>
      <path d={LORENZO_BODY} />
    </g>
  )
}

const P = placing(18, 36, 0.9)

type Night = { ground: string; stars: string; moon: string; glow: string }
let night: Night | undefined
function nightCuts(): Night {
  if (night) return night
  // Night at Belmont: the ground dark, lighter towards the moon.
  const ground = portraitGround('lorenzo', 4710, (x, y) =>
    clamp(
      0.04 + 0.45 * Math.max(0, 1 - Math.hypot(x - MOON[0], y - MOON[1]) / 150) - (y / PH) * 0.04,
    ),
  )
  // "the floor of heaven Is thick inlaid with patens of bright gold": small
  // four-pointed stars cut across the upper sky, kept off the figure.
  const r = rng(4711)
  let stars = ''
  let placed = 0
  for (let tries = 0; placed < 26 && tries < 600; tries++) {
    const x = between(r, 18, PW - 18)
    const y = between(r, 16, 150)
    if (Math.hypot(x - MOON[0], y - MOON[1]) < MOON_R + 16) continue
    if (x > 30 && x < 214 && y > 30) continue
    if (Math.hypot(x - STAR[0], y - STAR[1]) < 14) continue
    const s = between(r, 2.2, 4.6)
    stars += gouge(x - s, y, x + s, y, s * 0.28) + gouge(x, y - s, x, y + s, s * 0.28)
    placed++
  }
  const [sx, sy] = STAR
  stars += gouge(sx - 8, sy, sx + 8, sy, 2) + gouge(sx, sy - 8, sx, sy + 8, 2)
  const [mx, my] = MOON
  const moon = `M${mx - MOON_R} ${my}a${MOON_R} ${MOON_R} 0 1 0 ${MOON_R * 2} 0a${MOON_R} ${MOON_R} 0 1 0 ${-MOON_R * 2} 0Z`
  const glow = rays(r, mx, my, { from: MOON_R + 7, to: MOON_R + 30, every: 18, width: 1.6 })
  night = { ground, stars, moon, glow }
  return night
}

function LorenzoPortrait({ uid }: ArtProps) {
  const c = nightCuts()
  return (
    <>
      <path d={c.ground} fill={PAPER} />
      <path d={c.glow} fill={PAPER} />
      <path d={c.moon} fill={PAPER} />
      <path d={c.stars} fill={PAPER} />
      <g transform={P.transform}>
        <LorenzoKnockout />
        <LorenzoFigure uid={uid} seed={4701} />
      </g>
      <PortraitRule />
    </>
  )
}

export const lorenzoPortrait: LinocutArt = { width: PW, height: PH, Draw: LorenzoPortrait }

/** A point on the upturned head, carried into the portrait. */
function onHead(x: number, y: number): [number, number] {
  const a = (-12 * Math.PI) / 180
  const dx = x - 112
  const dy = y - 214
  return P.to(112 + dx * Math.cos(a) - dy * Math.sin(a), 214 + dx * Math.sin(a) + dy * Math.cos(a))
}
const FACE_AT = onHead(MAN_EYE[0] - 6, 150)
const MOON_AT: [number, number] = [MOON[0] - 12, MOON[1] + 16]

export const lorenzo: Portrait = {
  name: 'Lorenzo',
  art: lorenzoPortrait,
  alt: 'A linocut portrait of Lorenzo out of doors at night, in profile, facing right, his face turned up to the sky with a small smile, his eye looking up. He is a young, clean-shaven man in a flat dark bonnet tilted forward over his brow, with a pale band round it and short dark hair at the nape, a small white ruff and a dark doublet with a row of pale buttons. Above him, ahead, a round white moon shines with short rays round it, and small white stars are scattered across the dark sky, one of them larger and brighter. Three numbered red markers point to his face, the moon and the bright star.',
  describedBy: [
    { phrase: 'young Lorenzo', at: [FACE_AT[0] + 56, FACE_AT[1] + 44], to: FACE_AT },
    {
      phrase: 'How sweet the moonlight sleeps upon this bank!',
      at: [MOON_AT[0] + 2, MOON_AT[1] + 44],
      to: MOON_AT,
    },
    { phrase: 'the floor of heaven', at: [STAR[0] - 40, STAR[1] + 2], to: [STAR[0] - 9, STAR[1]] },
  ],
  where: 'Act 5, Scene 1',
  note: 'After the trial, the play returns to Belmont by moonlight. Lorenzo and Jessica tease each other with stories of faithless lovers, then he turns her eyes to the stars and the music of the spheres: the calm before the ring quarrel.',
  artNote:
    'The play does not describe him beyond calling him young. His bonnet and doublet are how the panels draw him, in the plain dress of a young Venetian of the time; the stars are cut in paper, and their gold is left to the words.',
}
