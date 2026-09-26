import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  Buttons,
  ear,
  folds,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  type SP,
} from './common'

/**
 * Claudio, from what three people say of him:
 *
 * - The Messenger, bringing news of the war (1.1): "He hath borne himself
 *   beyond the promise of his age, doing in the figure of a lamb the feats of
 *   a lion". So he is young, with a soft, open face: the lamb.
 * - Benedick, who has watched love change him (2.3): "now will he lie ten
 *   nights awake, carving the fashion of a new doublet." So his doublet is
 *   the newest thing about him, pinked all over in rows of small cuts, the
 *   fashion of the day, with a small ruff.
 * - Benedick again, when he has challenged him (5.1): "For my Lord
 *   Lack-beard there, he and I shall meet". So his chin is bare.
 *
 * His straight hair, cut level at the jaw, is the panels' (../panels/
 * people.tsx), so he is known at a glance from Benedick and the Prince. He
 * faces right, towards Hero, his eye open and lifted: "In mine eye she is the
 * sweetest lady that ever I looked on" (1.1). There is no red in this plate.
 */

/** A youth's head, the nose and chin soft, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [68, 228],
  [61, 200],
  [52, 174],
  [45, 146],
  [45, 108],
  [57, 72],
  [81, 47],
  [112, 35],
  [141, 37],
  [158, 51],
  [165, 70],
  [168.5, 88],
  [165.5, 98, 1],
  [172, 110],
  [180, 123],
  [178.5, 128.5],
  [170.5, 131.5, 1],
  [172, 138],
  [167.5, 142.5, 1],
  [170.5, 146.5],
  [166.5, 152.5, 1],
  [170, 162],
  [167.5, 173],
  [156, 181],
  [140, 184],
  [133, 192],
  [131, 210],
  [133, 228],
]
export const CLAUDIO_HEAD = spline(HEAD_PTS)

/** Straight hair over the crown, falling behind the ear and cut level at the jaw. */
const HAIR = spline([
  [162, 58, 1],
  [150, 50],
  [132, 50],
  [120, 58],
  [112, 74],
  [110, 96, 1],
  [100, 100],
  [92, 110],
  [90, 140],
  [92, 176, 1],
  [46, 176, 1],
  [38, 166],
  [35, 140],
  [36, 100],
  [46, 64],
  [72, 38],
  [108, 26],
  [140, 30],
  [156, 42],
])
const EAR = ear(103, 124)

/** His shoulders in the new doublet. */
export const CLAUDIO_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [12, 262],
  [40, 238],
  [70, 222],
  [110, 228],
  [140, 222],
  [168, 232],
  [196, 256],
  [216, 290],
  [228, 336, 1],
])
const RUFF = ruffBand(60, 150, 196, 222, 6.5, 0.06)

type Marks = { hair: string; back: string; body: string; pinking: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Straight hair, combed down from the crown: long paper strands.
  let hair = ''
  for (let i = 0; i < 22; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 22
    const x0 = 150 - t * 100 + between(r, -2, 2)
    const y0 = 44 - Math.sin(Math.PI * t) * 12 + between(r, 0, 4)
    const x1 = x0 - 26 + t * 18 + between(r, -2, 2)
    const y1 = 110 + t * 60 + between(r, -4, 4)
    const pts: Pt[] = []
    for (let k = 0; k <= 8; k++) {
      const u = k / 8
      pts.push([x0 + (x1 - x0) * u - Math.sin(Math.PI * u) * 6, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 0.8, 1.3), 0.8)
  }
  // The level cut at the jaw, lit along its edge.
  hair += gouge(46, 172, 90, 172, 1.4)

  let back = ''
  for (let rad = 60; rad < 100; rad += 4.2)
    back += arcDashes(r, 152, 126, rad, deg(116), deg(150), [6, 16], [3, 8])

  const body = folds(seed + 1, [8, 60], [258, 276], 4)

  // "carving the fashion of a new doublet": pinked in rows of small cuts.
  let pinking = ''
  for (let y = 244; y < 334; y += 10) {
    const off = ((y - 244) / 10) % 2 === 0 ? 0 : 6
    for (let x = 70 + off; x < 212; x += 12) {
      if (x > 164 && x < 178) continue
      pinking += gouge(x - 2.6, y, x + 2.6, y + 3, 1.3, between(r, -0.3, 0.3))
    }
  }

  const m = { hair, back, body, pinking }
  marksBySeed.set(seed, m)
  return m
}

/** Claudio, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function ClaudioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-cl-head-${seed}`
  const bodyClip = `${uid}-cl-body-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={CLAUDIO_HEAD} />
        </clipPath>
        <clipPath id={bodyClip}>
          <path d={CLAUDIO_BODY} />
        </clipPath>
      </defs>
      <path d={CLAUDIO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${bodyClip})`}>
        <path d={m.body} fill={PAPER} />
        <path d={m.pinking} fill={PAPER} />
      </g>
      <path
        d="M171 232C176 262 180 296 182 336"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <Buttons
        pts={[
          [176, 246],
          [178.5, 264],
          [180.5, 282],
          [182, 300],
        ]}
      />
      <path d={CLAUDIO_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path
          d={m.back}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril, closed lips, the soft bare chin */}
        <path d="M173.5 126C170 124 170 119.5 174.5 118.5" strokeWidth={1.3} />
        <path d="M167.5 142.5L159.5 143.5" strokeWidth={1.7} />
        <path d="M169.5 138.5C167 139.5 164.5 141 163.5 142.8" strokeWidth={0.9} />
        <path d="M168.5 150C166.5 151.3 164 151.6 162 151" strokeWidth={0.9} />
        <path d="M167.5 158C165 162 165.5 167 168 170" strokeWidth={LINE.hairline} />
        {/* a smooth young brow, and the eye open and lifted */}
        <path d="M145 85.5Q154 82 164 86" strokeWidth={2.5} />
        <path d="M146.5 97Q154 91 162.5 96" strokeWidth={2.2} />
        <path d="M148 103Q155 105.5 161.5 101.5" strokeWidth={1.1} />
      </g>
      <circle cx={155.8} cy={98} r={2.8} fill={INK} />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function ClaudioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={CLAUDIO_HEAD} />
      <path d={HAIR} />
      <path d={CLAUDIO_BODY} />
    </g>
  )
}

const P = placing(16, 2, 1.0)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Daylight before Leonato's house, ahead of him, where Hero stands.
  ground = portraitGround('claudio', 3301, (x, y) =>
    clamp(0.12 + ((x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function ClaudioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <ClaudioKnockout />
        <ClaudioFigure uid={uid} seed={3301} />
      </g>
      <PortraitRule />
    </>
  )
}

export const claudioPortrait: LinocutArt = { width: PW, height: PH, Draw: ClaudioPortrait }

const FACE_AT = P.to(146, 70)
const CHIN_AT = P.to(166, 166)
const DOUBLET_AT = P.to(120, 290)

export const claudio: Portrait = {
  name: 'Claudio',
  art: claudioPortrait,
  alt: 'A linocut portrait of Claudio in profile, facing right: a young man with a smooth, open face and a bare chin, his straight dark hair falling behind his ear and cut level at the jaw. His eye is open and lifted, looking ahead. He wears a small white ruff and a new dark doublet pinked all over in rows of small cuts, with a row of buttons down the front. Three numbered red markers point to his smooth young brow, his bare chin and his pinked doublet.',
  describedBy: [
    {
      phrase: 'in the figure of a lamb the feats of a lion',
      at: [FACE_AT[0] + 64, FACE_AT[1] - 36],
      to: FACE_AT,
    },
    { phrase: 'my Lord Lack-beard', at: [CHIN_AT[0] + 56, CHIN_AT[1] + 36], to: CHIN_AT },
    {
      phrase: 'carving the fashion of a new doublet',
      at: [DOUBLET_AT[0] - 70, DOUBLET_AT[1] - 30],
      to: DOUBLET_AT,
    },
  ],
  where: 'Act 1, Scene 1; Act 2, Scene 3; Act 5, Scene 1',
  note: 'Everyone describes Claudio by his youth: a lamb to look at, a lion in battle, a lord without a beard. Benedick mocks how love has turned a plain soldier into a follower of fashion.',
  artNote:
    'Beatrice calls him “civil as an orange, and something of that jealous complexion”: yellow, the colour of jealousy. The print has no yellow, so that is left to the words. His hair is cut as the panels cut it.',
}
