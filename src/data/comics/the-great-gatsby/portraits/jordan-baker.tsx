import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  once,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  turn,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type SP,
} from './common'

/**
 * Jordan Baker, as Nick sees her for the last time, in Chapter IX:
 *
 *   "She was dressed to play golf, and I remember thinking she looked like a
 *   good illustration, her chin raised a little jauntily, her hair the color
 *   of an autumn leaf, her face the same brown tint as the fingerless glove
 *   on her knee."
 *
 * which keeps the look Nick gave her the first evening, in Chapter I: "with
 * her chin raised a little", "an erect carriage", "the autumn-leaf yellow of
 * her hair".
 *
 * So: a young woman in profile, facing right, her head held up and her chin
 * raised (the head tilted back at the neck, as the figure kit tilts hers,
 * ../panels/people.tsx), her back straight. Her hair is short, close to the
 * head and cut level over the ear a little above the jaw, shorter than
 * Daisy's, as the kit's JORDAN_HAIR is, and cut pale, ruled with fine ink
 * strands. She is dressed for golf in the plain way of 1922: a dark knitted
 * jumper with a V neck, its ribbing cut at the neck and the hem of the
 * sleeve, over a white shirt with its collar turned down and a narrow tie.
 * The novel says no more of her clothes than that she was dressed to play
 * golf, so they are plain. The print has no brown or russet, so the tan of
 * her face and the autumn colour of her hair are left to the words. Nothing
 * here comes from a film or stage production, and there is no red in this
 * plate.
 *
 * Seeds: 6501 (the ground), 6502 (the hair), 6503 (the jumper).
 */

const P = placing(26, 14, 1.06)
/** "her chin raised a little jauntily": the head tilted back at the neck. */
const LIFT = -6

/**
 * Short hair, close to the head, cut level a little above the jaw and over
 * the ear: shorter than Daisy's, as the kit's JORDAN_HAIR is.
 */
const HAIR_PTS: SP[] = [
  [162, 60, 1],
  [155, 62],
  [147, 67],
  [140, 76],
  [135, 88],
  [131, 100],
  [128, 114],
  [126, 128],
  [126, 140],
  [128, 147, 1],
  [104, 149],
  [80, 150],
  [56, 148],
  [44, 141, 1],
  [39, 120],
  [40, 96],
  [50, 70],
  [74, 45],
  [106, 29],
  [136, 28],
  [154, 38],
  [161, 50],
]
const HAIR = spline(HAIR_PTS)

/** A knitted jumper with a V neck, over the shoulders. */
const JUMPER = shoulders(0.92, 6)
/** The white shirt in the V of the jumper. */
const SHIRT = 'M96 222L152 220L126 290Z'
/** Its collar, turned down over the edges of the V, a point each side. */
const COLLAR =
  spline([
    [98, 219, 1],
    [128, 229, 1],
    [110, 252, 1],
  ]) +
  spline([
    [128, 229, 1],
    [154, 216, 1],
    [146, 250, 1],
  ])
/** A narrow dark tie down the shirt, under the collar. */
const TIE = 'M124 230L132 230L130 286L126 290L122 286Z'
/** The ribbing round the V of the jumper. */
const V_RIB = 'M94 224L126 292L154 222'

const marks = once(() => {
  const ground = portraitGround('gg-jordan', 6501, (x, y) =>
    clamp(0.14 + ((x - 50) / 260) * 0.85 - Math.max(0, (y - 250) / 250)),
  )
  // Pale hair, close to the head: fine ink strands falling from the crown and
  // the brow, back and down over the skull to the level edge, thicker at the
  // back of the head, away from the light.
  const rh = rng(6502)
  let hair = ''
  for (let i = 0; i < 64; i++) {
    const t = (i + between(rh, 0.1, 0.9)) / 64
    const a: Pt = [
      158 - t * 106 + between(rh, -2, 2),
      44 - Math.sin(t * Math.PI) * 14 + between(rh, -2, 2),
    ]
    const b: Pt = [128 - t * 86 + between(rh, -2, 2), 148 - Math.sin(t * Math.PI) * 2]
    const c: Pt = [(a[0] + b[0]) / 2 - 10 - t * 8, (a[1] + b[1]) / 2 - 6]
    const u0 = between(rh, 0, 0.3)
    const u1 = between(rh, 0.75, 1)
    const pts: Pt[] = []
    for (let k = 0; k <= 12; k++) {
      const u = u0 + ((u1 - u0) * k) / 12
      pts.push([
        (1 - u) * (1 - u) * a[0] + 2 * (1 - u) * u * c[0] + u * u * b[0],
        (1 - u) * (1 - u) * a[1] + 2 * (1 - u) * u * c[1] + u * u * b[1],
      ])
    }
    hair += ribbon(pts, between(rh, 0.6, 1.1) * (0.7 + 0.6 * clamp(1.2 - (a[0] - 40) / 120)), 0.75)
  }
  // The knit of the jumper: short paper ticks in columns down the front.
  const r = rng(6503)
  let knit = ''
  for (let col = 0; col < 26; col++) {
    const x = -4 + col * 9.4 + between(r, -1, 1)
    for (let y = 250 + between(r, 0, 6); y < 334; y += between(r, 6, 9)) {
      if (Math.abs(x - 124) < 32 && y < 296 - Math.abs(x - 124) * 2.2) continue
      if (r() < 0.75) knit += gouge(x, y, x + 0.6, y + 4.2, 0.55)
    }
  }
  // The ribbing round the V: short cuts across the band.
  let rib = ''
  for (let i = 0; i <= 12; i++) {
    const t = i / 12
    const a: [number, number] =
      t <= 0.5 ? [94 + t * 64, 224 + t * 136] : [126 + (t - 0.5) * 56, 292 - (t - 0.5) * 140]
    rib += `M${n(a[0] - 3)} ${n(a[1])}L${n(a[0] + 3)} ${n(a[1] - 1.2)}`
  }
  return { ground, hair, knit, rib }
})

function JordanFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-gg-jordan-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* The ink halo that lifts the figure off the lit ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={JUMPER} />
        <g transform={turn(LIFT)}>
          <path d={WOMAN_HEAD} />
          <path d={HAIR} />
        </g>
      </g>
      <path d={JUMPER} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.knit} fill={PAPER} />
      <path d={SHIRT} fill={PAPER} />
      <path d={V_RIB} fill="none" stroke={PAPER} strokeWidth={6} strokeLinejoin="round" />
      <path d={V_RIB} fill="none" stroke={INK} strokeWidth={3.6} strokeLinejoin="round" />
      <path d={m.rib} fill="none" stroke={PAPER} strokeWidth={0.9} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={0.9} strokeLinejoin="round" />
      <g transform={turn(LIFT)}>
        <path d={WOMAN_HEAD} fill={PAPER} />
        <WomanNeckShadow id={`${uid}-gg-jordan`} />
        <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={INK} />
        </g>
        <WomanFace eye="open" />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
    </g>
  )
}

function JordanPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <JordanFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const jordanBakerArt: LinocutArt = { width: PW, height: PH, Draw: JordanPortrait }

const on = (x: number, y: number) => onTurnedHead(P, LIFT, x, y)
const JUMPER_AT = P.to(186, 258)
const CHIN = on(167, 151)
const HAIR_BACK = on(42, 112)
const CHEEK = on(146, 118)

export const jordanBaker: Portrait = {
  name: 'Jordan Baker',
  art: jordanBakerArt,
  alt: "A linocut portrait of Jordan Baker in profile, facing right, drawn from Fitzgerald's description in Chapter IX: a young woman holding her head up, her chin raised and her back straight. Her short hair is cut pale, ruled with fine dark strands, close to her head and cut level over her ear, a little above the jaw. She is dressed for golf in a dark knitted jumper with a V neck over a white shirt, its collar turned down, and a narrow dark tie. Four numbered red markers point to her golfing clothes, her raised chin, her hair and her face.",
  describedBy: [
    { phrase: 'She was dressed to play golf', at: JUMPER_AT },
    {
      phrase: 'her chin raised a little jauntily',
      at: [CHIN[0] + 64, CHIN[1]],
      to: [CHIN[0] + 7, CHIN[1]],
    },
    {
      phrase: 'her hair the color of an autumn leaf',
      at: [HAIR_BACK[0] - 30, HAIR_BACK[1]],
      to: HAIR_BACK,
    },
    {
      phrase: 'her face the same brown tint as the fingerless glove on her knee',
      at: CHEEK,
    },
  ],
  where: 'Chapter IX',
  passage:
    'She was dressed to play golf, and I remember thinking she looked like a good illustration, her chin raised a little jauntily, her hair the color of an autumn leaf, her face the same brown tint as the fingerless glove on her knee.',
  note: 'Nick’s last sight of Jordan is a picture, “a good illustration”, and it matches the first: on the evening they meet she holds her chin up as if “balancing something on it”. She is a golf champion, and at this last meeting she calls Nick “another bad driver”.',
  artNote:
    'The print has no brown or russet, so the tan of her face and the autumn colour of her hair are left to the words; her hair is cut pale, as the panels cut it. The novel says only that she was dressed to play golf, so her jumper and shirt are the plain sporting dress of 1922.',
}
