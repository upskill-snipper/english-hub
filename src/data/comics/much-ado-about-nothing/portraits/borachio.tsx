import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  ear,
  folds,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  type SP,
} from './common'

/**
 * Borachio in the street at night in Act 3, Scene 3, as he draws Conrade out
 * of the rain to tell him what he has done:
 *
 *   "Stand thee close then under this penthouse, for it drizzles rain, and I
 *   will, like a true drunkard, utter all to thee."
 *
 * So: a man under the overhanging eave of a house (a penthouse), the rain
 * falling past it in the dark, turned to speak with his mouth open and his
 * brow up, pleased with himself: a man about to tell everything. The Watch
 * are hiding close by and hear it all, which is why nobody else is drawn.
 *
 * The play never describes him. He wears what the panels give him
 * (../panels/people.tsx), a plain round cap with a turned-up brim, and the
 * plain doublet and cloak of a man in service, the dress of the time. There
 * is no red in this plate: it is night, and the rain is cut in paper.
 */

/** A man's head, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [66, 228],
  [59, 200],
  [50, 174],
  [42, 146],
  [42, 108],
  [54, 72],
  [78, 47],
  [110, 34],
  [141, 36],
  [159, 50],
  [166, 70],
  [170, 89],
  [166.5, 99, 1],
  [175, 113],
  [185, 128],
  [183, 133.5],
  [173, 136.5, 1],
  [175, 142],
  [171.5, 146, 1],
  [158, 151, 1],
  [170, 160, 1],
  [172, 164],
  [168.5, 167.5, 1],
  [172, 175],
  [170.5, 184],
  [158, 191],
  [142, 194],
  [134, 201],
  [132, 214],
  [134, 228],
]
export const BORACHIO_HEAD = spline(HEAD_PTS)

/**
 * The open mouth: the outline of the head is cut back between the lips, so
 * the dark of the night shows in it; MOUTH fills it with ink, in case a pale
 * ground ever sits behind him. He is in the middle of telling.
 */
const MOUTH = 'M171.5 146L158 151L170 160Z'

/** Short dark hair at the nape, below the cap. */
const HAIR = spline([
  [118, 70, 1],
  [114, 96, 1],
  [102, 100],
  [93, 112],
  [89, 138],
  [80, 162],
  [62, 172, 1],
  [46, 150],
  [40, 110],
  [42, 72, 1],
])
/** The round cap, its brim turned up all round. */
const CAP = spline([
  [36, 76, 1],
  [34, 50],
  [48, 24],
  [80, 8],
  [120, 6],
  [152, 18],
  [168, 40],
  [174, 64, 1],
  [110, 66],
])
const CAP_BRIM = spline([
  [32, 80, 1],
  [36, 64],
  [110, 56],
  [176, 54],
  [178, 70, 1],
  [110, 74],
])
const EAR = ear(104, 124)

export const BORACHIO_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [12, 262],
  [40, 236],
  [70, 220],
  [110, 226],
  [142, 220],
  [170, 230],
  [198, 254],
  [218, 290],
  [230, 336, 1],
])
/** A cloak over the far shoulder, its edge turned up behind the neck. */
const CLOAK = spline([
  [-14, 336, 1],
  [-10, 290],
  [4, 250],
  [30, 220],
  [56, 196, 1],
  [76, 204],
  [86, 222, 1],
  [70, 262],
  [60, 300],
  [58, 336, 1],
])
const BAND = spline([
  [64, 204, 1],
  [102, 214],
  [146, 206, 1],
  [166, 222],
  [176, 238, 1],
  [146, 238],
  [104, 234],
  [70, 228, 1],
])

// ── The penthouse and the rain ─────────────────────────────────────────────

/** The eave of the penthouse, overhanging the top of the plate, its underside dark. */
const EAVE = `M0 0L${PW} 0L${PW} 26L0 48Z`
/** The eave's board edge, lit along its lower side. */
const EAVE_EDGE = `M0 48L${PW} 26`

type Night = { ground: string; rain: string; drips: string; eave: string }
let night: Night | undefined
function nightCuts(): Night {
  if (night) return night
  // Night in the street: a little light from somewhere ahead of him.
  const ground = portraitGround('borachio', 3801, (x, y) =>
    clamp(0.02 + ((x - 120) / 240) * 0.35 - (y / PH) * 0.08),
  )
  // "it drizzles rain": short slanting cuts falling past the eave, thicker
  // and closer where the light catches them, ahead of him.
  const r = rng(3802)
  let rain = ''
  for (let i = 0; i < 150; i++) {
    const x = between(r, 12, PW - 12)
    const y = between(r, 52 - x * 0.066, PH - 14)
    const len = between(r, 7, 15)
    const lit = clamp((x - 60) / 240)
    rain += gouge(x, y, x - len * 0.35, y + len, 0.5 + lit * 0.9)
  }
  // Drops gathering on the edge of the eave, about to fall.
  let drips = ''
  for (let x = 24; x < PW - 10; x += between(r, 22, 36)) {
    const y = 48 - x * 0.066 + 2
    drips += `M${n(x - 2)} ${n(y)}Q${n(x)} ${n(y + 9)} ${n(x + 2)} ${n(y)}Z`
  }
  // The boards of the eave's underside, cut in paper along its length.
  let eave = ''
  for (const y of [14, 30]) eave += gouge(8, y + 4, PW - 8, y - 12, 1.3, 0.3)
  night = { ground, rain, drips, eave }
  return night
}

type Marks = { hair: string; cap: string; body: string; cloak: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(106 - t * 56, 96 + t * 8, 90 - t * 30, 150 + t * 10, between(r, 0.8, 1.2), -2)
  }
  // The cap: a few folds in the crown, and the brim's edge lit.
  let cap = ''
  for (let i = 0; i < 5; i++) {
    const x = 60 + i * 22 + between(r, -3, 3)
    cap += gouge(
      x,
      52,
      x + 8 + between(r, -2, 2),
      16 + Math.abs(x - 104) * 0.2,
      between(r, 0.7, 1.1),
      1.2,
    )
  }
  cap += gouge(38, 72, 174, 64, 1.2, -1)

  const body = folds(seed + 1, [110, 214], [256, 272], 5)
  const cloak = gouge(64, 212, 54, 334, 1.8, 1.4) + gouge(34, 240, 16, 330, 1.4, 1.8)

  const m = { hair, cap, body, cloak }
  marksBySeed.set(seed, m)
  return m
}

/** Borachio, head and shoulders, talking, facing right in the 0..240 by 0..332 frame. */
export function BorachioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-bo-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={BORACHIO_HEAD} />
        </clipPath>
      </defs>
      <path d={BORACHIO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={BORACHIO_HEAD} fill={PAPER} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path
        d={CAP_BRIM}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.cap} fill={PAPER} />
      {/* "like a true drunkard, utter all to thee": the mouth open, talking */}
      <path d={MOUTH} fill={INK} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M177.5 131C173.5 128 173.5 123 179 122" strokeWidth={1.4} />
        <path d="M162 150Q160 145 161 140" strokeWidth={1.1} />
        <path d="M171 172C167 175 167 180 170 183" strokeWidth={LINE.hairline} />
        {/* the brow up, the eye bright and sidelong: pleased with himself */}
        <path d="M145 84Q155 78 166 84" strokeWidth={2.6} />
        <path d="M147 97Q154.5 92 163 96.5" strokeWidth={2.2} />
        <path d="M148.5 102.5Q155 105 161.5 101.5" strokeWidth={1.1} />
        <path d="M145 100L139 98.5M145 103.5L140 105.5" strokeWidth={0.9} />
      </g>
      <circle cx={158.4} cy={98.2} r={2.7} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, cap and shoulders. */
export function BorachioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={BORACHIO_HEAD} />
      <path d={CAP} />
      <path d={CAP_BRIM} />
      <path d={BORACHIO_BODY} />
      <path d={CLOAK} />
    </g>
  )
}

const P = placing(22, 40, 0.88)

function BorachioPortrait({ uid }: ArtProps) {
  const c = nightCuts()
  return (
    <>
      <path d={c.ground} fill={PAPER} />
      <path d={c.rain} fill={PAPER} />
      <g transform={P.transform}>
        <BorachioKnockout />
        <BorachioFigure uid={uid} seed={3801} />
      </g>
      {/* the penthouse: its eave over his head, and the drops on its edge */}
      <path d={EAVE} fill={INK} />
      <path d={c.eave} fill={PAPER} />
      <path d={EAVE_EDGE} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={c.drips} fill={PAPER} />
      <PortraitRule />
    </>
  )
}

export const borachioPortrait: LinocutArt = { width: PW, height: PH, Draw: BorachioPortrait }

const MOUTH_AT = P.to(174, 152)

export const borachio: Portrait = {
  name: 'Borachio',
  art: borachioPortrait,
  alt: 'A linocut portrait of Borachio at night, in profile, facing right, standing under the dark overhanging eave of a house, with drops of water along its edge. Rain is cut in short slanting white lines all round him in the dark. He is a man in a plain round cap with a turned-up brim, his short dark hair showing at the nape, and a dark cloak over his shoulder, a plain doublet and a white falling band. His brow is raised, his eye bright, and his mouth open as he talks. Three numbered red markers point to the eave above him, the falling rain and his open mouth.',
  describedBy: [
    { phrase: 'under this penthouse', at: [70, 26], to: [110, 22] },
    { phrase: 'it drizzles rain', at: [292, 120], to: [266, 150] },
    {
      phrase: 'like a true drunkard, utter all to thee',
      at: [MOUTH_AT[0] + 62, MOUTH_AT[1] + 12],
      to: MOUTH_AT,
    },
  ],
  where: 'Act 3, Scene 3',
  passage:
    'Stand thee close then under this penthouse, for it drizzles rain, and I will, like a true drunkard, utter all to thee.',
  note: 'Sheltering from the rain, Borachio boasts to Conrade of the trick he has played on Claudio, as loose-tongued as a drunk. The Watch are hiding close by and hear every word, so the truth comes out the way the lie went in: by being overheard.',
  artNote:
    'The play never describes him. He wears the round cap the panels give him, and the plain dress of a man in service at the time.',
}
