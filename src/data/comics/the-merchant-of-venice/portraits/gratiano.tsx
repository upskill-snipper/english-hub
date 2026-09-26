import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD_OPEN,
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
 * Gratiano, from what he says of himself and what Bassanio says of him:
 *
 *   GRATIANO: "Let me play the fool, With mirth and laughter let old
 *   wrinkles come" (Act 1, Scene 1)
 *   BASSANIO: "Thou art too wild, too rude, and bold of voice" (Act 2,
 *   Scene 2)
 *   GRATIANO, promising to behave at Belmont: "Nay more, while grace is
 *   saying, hood mine eyes Thus with my hat, and sigh, and say 'amen'"
 *   (Act 2, Scene 2)
 *
 * So: a man laughing, his head thrown back a little, his mouth open, the
 * lines of laughter cut deep round his eye; and his hat, the one he promises
 * to pull over his eyes when grace is said, sitting tilted back on his head.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a doublet,
 * the small ruff every man in the kit wears, and a small cap tilted back with
 * a feather curling back from it, which no one else wears; clean-shaven,
 * his dark hair swept back from the brow under the cap. His head is every man's head, talking
 * (MAN_HEAD_OPEN). There is no red in this plate, and none on his mouth.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 4601 (the figure), 4602 to 4604 (its marks), 4610 (the ground).
 */

/** His head is thrown back a little: he is laughing. */
const TILT = 'rotate(-6 112 214)'
/** The cap sits tilted back on his head, its front higher than its back. */
const CAP_TILT = 'rotate(-16 100 58)'

/** The small cap: a soft crown over a narrow band, set on the back of the head. */
const CAP = spline([
  [58, 72, 1],
  [50, 54],
  [62, 34],
  [92, 23],
  [122, 24],
  [140, 36],
  [143, 55, 1],
  [116, 60],
  [84, 64],
])
const CAP_BAND = spline([
  [54, 78, 1],
  [56, 66],
  [100, 58],
  [146, 52],
  [148, 62, 1],
  [100, 68],
])
/** The feather, curling back from the band at the back of the cap and down. */
const FEATHER_SPINE: Pt[] = [
  [62, 62],
  [50, 44],
  [36, 30],
  [20, 24],
  [8, 30],
  [4, 44],
  [10, 58],
  [20, 64],
]
const FEATHER = ribbon(FEATHER_SPINE, 26, 0.5)
/** Dark hair, swept back from the brow under the cap to the nape. */
const HAIR = spline([
  [161, 64, 1],
  [150, 66],
  [133, 70],
  [119, 80],
  [112, 96, 1],
  [100, 100],
  [92, 110],
  [86, 126],
  [80, 146, 1],
  [68, 136],
  [56, 146, 1],
  [46, 126],
  [40, 100],
  [44, 70],
  [64, 42],
  [96, 28],
  [130, 27],
  [153, 38],
  [163, 52],
])

export const GRATIANO_BODY = spline([
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

type Marks = { hair: string; cap: string; feather: string; laugh: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  const hair = locks(
    seed + 1,
    16,
    (t) => [158 - t * 44, 50 + t * 32],
    (t) => [70 - t * 20, 44 + t * 88],
    [0.9, 1.5],
    -9,
  )
  // The soft crown: the light along its top, cut as two curving gouges
  // that follow the dome, as cloth catches it.
  const cap = gouge(66, 44, 118, 29, 1.3, -3) + gouge(78, 53, 128, 38, 0.9, -2.5)
  // The feather's barbs, cut in paper on both sides of its spine, slanting
  // back towards the tip as a plume's do.
  let feather = ''
  for (let i = 1; i < FEATHER_SPINE.length; i++) {
    const [x0, y0] = FEATHER_SPINE[i - 1]
    const [x1, y1] = FEATHER_SPINE[i]
    const L = Math.hypot(x1 - x0, y1 - y0) || 1
    const tx = (x1 - x0) / L
    const ty = (y1 - y0) / L
    const w = 9 * Math.sin((i / FEATHER_SPINE.length) * Math.PI) + 2
    for (let k = 0; k < 4; k++) {
      const u = (k + 0.5) / 4
      const x = x0 + (x1 - x0) * u
      const y = y0 + (y1 - y0) * u
      for (const side of [1, -1]) {
        const ex = x + (-ty * side * w + tx * 3) * (0.8 + r() * 0.2)
        const ey = y + (tx * side * w + ty * 3) * (0.8 + r() * 0.2)
        feather += `M${n(x)} ${n(y)}L${n(ex)} ${n(ey)}`
      }
    }
  }

  // "With mirth and laughter let old wrinkles come": laughter lines round
  // the eye and down the cheek.
  const laugh =
    'M145 106Q141 112 136 114M143 110Q140 117 134 121' +
    'M140 60Q151 58 162 62M141 68Q150 66.5 161 69'

  const body = folds(seed + 2, [100, 176], [256, 272], 4)

  const m = { hair, cap, feather, laugh, body }
  marksBySeed.set(seed, m)
  return m
}

/** Gratiano, laughing, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function GratianoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-gra-head-${seed}`
  const featherClip = `${uid}-gra-feather-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={featherClip}>
          <path d={FEATHER} />
        </clipPath>
        <clipPath id={clip}>
          <path d={MAN_HEAD_OPEN} />
        </clipPath>
      </defs>
      <path d={GRATIANO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.8} />
      <g transform={TILT}>
        <path d={MAN_HEAD_OPEN} fill={PAPER} />
        <NeckShadow id={`${uid}-gra-${seed}`} />
        <g clipPath={`url(#${clip})`}>
          <path
            d={m.laugh}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.fine}
            strokeLinecap="round"
          />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <g transform={CAP_TILT}>
          {/* the feather cut in paper, its barbs and spine in ink */}
          <path
            d={FEATHER}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
            strokeLinejoin="round"
          />
          <g clipPath={`url(#${featherClip})`}>
            <path d={m.feather} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
          </g>
          <path
            d={`M${FEATHER_SPINE.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')}`}
            fill="none"
            stroke={INK}
            strokeWidth={1.3}
            strokeLinecap="round"
          />
          <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
          <path d={m.cap} fill={PAPER} />
          <path
            d={CAP_BAND}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
        </g>
        {/* "bold of voice": the mouth open, laughing */}
        <ManNoseAndMouth open />
        <ManBrow w={2.8} raise={3} />
        <ManEye look="laugh" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, cap, feather and shoulders. */
export function GratianoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={TILT}>
        <path d={MAN_HEAD_OPEN} />
        <g transform={CAP_TILT}>
          <path d={CAP} />
          <path d={FEATHER} />
        </g>
      </g>
      <path d={GRATIANO_BODY} />
    </g>
  )
}

const P = placing(22, 22, 0.94, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A street in Venice by day, the light ahead of him, to the left.
  ground = portraitGround('gratiano', 4610, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function GratianoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <GratianoKnockout />
        <GratianoFigure uid={uid} seed={4601} />
      </g>
      <PortraitRule />
    </>
  )
}

export const gratianoPortrait: LinocutArt = { width: PW, height: PH, Draw: GratianoPortrait }

/** A point on the tilted head, carried into the portrait. */
function onHead(x: number, y: number, capToo = false): [number, number] {
  let px = x
  let py = y
  if (capToo) {
    const c = (-16 * Math.PI) / 180
    const dx = px - 100
    const dy = py - 58
    px = 100 + dx * Math.cos(c) - dy * Math.sin(c)
    py = 58 + dx * Math.sin(c) + dy * Math.cos(c)
  }
  const a = (-6 * Math.PI) / 180
  const dx = px - 112
  const dy = py - 214
  return P.to(112 + dx * Math.cos(a) - dy * Math.sin(a), 214 + dx * Math.sin(a) + dy * Math.cos(a))
}
const LINES_AT = onHead(139, 112)
const MOUTH_AT = onHead(166, 153)
const CAP_AT = onHead(100, 38, true)

export const gratiano: Portrait = {
  name: 'Gratiano',
  art: gratianoPortrait,
  alt: 'A linocut portrait of Gratiano in profile, facing left, laughing, his head thrown back a little and his mouth open. His brow is raised, his eye narrowed with laughter, and lines of laughter are cut round his eye and down his cheek. He is clean-shaven, his dark hair swept back from his brow, and wears a small dark cap tilted back on his head with a pale feather curling back from it, a small white ruff and a dark doublet with a row of pale buttons. Three numbered red markers point to the laughter lines by his eye, his open mouth and his cap.',
  describedBy: [
    {
      phrase: 'With mirth and laughter let old wrinkles come',
      at: [LINES_AT[0] + 46, LINES_AT[1] + 58],
      to: LINES_AT,
    },
    { phrase: 'bold of voice', at: [MOUTH_AT[0] - 50, MOUTH_AT[1] + 40], to: MOUTH_AT },
    { phrase: 'hood mine eyes Thus with my hat', at: [CAP_AT[0] - 70, CAP_AT[1] - 6], to: CAP_AT },
  ],
  where: 'Act 1, Scene 1; Act 2, Scene 2',
  note: 'Gratiano would rather laugh himself old than be sad, and Bassanio has to ask him to tone himself down before Belmont. The same loud voice is the one that jeers at Shylock most cruelly at the trial.',
  artNote:
    'The play does not describe his face. His cap, feather and doublet are how the panels draw him, in the plain dress of a young Venetian of the time.',
}
