import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFeatures,
  combedHair,
  hatch,
  nudge,
  once,
  placer,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Biddy as a young woman, as Dickens describes her, and nothing else.
 * Chapter 17, when she has been at the forge about a year:
 *
 *   "Imperceptibly I became conscious of a change in Biddy, however. Her
 *   shoes came up at the heel, her hair grew bright and neat, her hands were
 *   always clean. She was not beautiful—she was common, and could not be
 *   like Estella—but she was pleasant and wholesome and sweet-tempered. She
 *   had not been with us more than a year (I remember her being newly out of
 *   mourning at the time it struck me), when I observed to myself one evening
 *   that she had curiously thoughtful and attentive eyes; eyes that were
 *   very pretty and very good."
 *
 * So: a young woman in profile, facing right, her face cut in paper with a
 * full, wholesome cheek and the corner of her mouth turned up a little
 * ("pleasant and wholesome and sweet-tempered"); her eye open and steady,
 * looking ahead and a little down, as at someone she is listening to
 * ("curiously thoughtful and attentive eyes"); her hair dark, drawn smooth
 * over the head and down over the ear to a neat knot at the nape, with the
 * shine on it cut in paper ("her hair grew bright and neat"). It is the
 * figure kit's Biddy (../panels/people.tsx), whose hair is "in a knot"; the
 * colour of her hair and her eyes is not given, and the hair is printed dark.
 * Her dress is not described: a plain dark gown with a narrow white collar,
 * as a village girl of the 1820s wore. Nothing here comes from a film or
 * stage production.
 *
 * Her "hands were always clean" and her "shoes came up at the heel" are in
 * the passage and not in the picture, which is cut at the shoulders.
 *
 * Seeds: 7901 for the ground, 7902 for the cuts in the figure.
 */

/**
 * The one woman's head, unchanged in the face: Dickens gives Biddy no
 * particular feature. The neck is carried down under the collar.
 */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [0, 4, 16],
  [27, 0, 16],
])

/** The head a little bowed about the base of the neck: attentive. */
const F = placer([24, 12], 0.9, 4, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/**
 * Her hair in the head's frame: smooth from the brow over the crown, down over
 * the top of the ear and back to the nape, where it is gathered into a knot.
 */
const HAIR_K: Knot[] = [
  [218, 66],
  [206, 54],
  [180, 46],
  [150, 48],
  [124, 60],
  [106, 82],
  [98, 112],
  [100, 144],
  [110, 174],
  [124, 196, 1],
  [140, 184],
  [154, 160],
  [164, 140],
  [176, 124],
  [190, 104],
  [204, 86],
  [214, 74],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)
/** The neat knot at the nape. */
const KNOT_C = F.pt([108, 186])
const KNOT_R = 16

/** A plain dark gown over the shoulders, cut at the neck. */
const GOWN = smooth([
  [-6, 330, 1],
  [0, 298],
  [22, 270],
  [62, 254],
  [110, 248],
  [156, 254],
  [200, 254],
  [234, 266],
  [254, 296],
  [260, 330, 1],
])
/** A narrow white collar at the high neckline of the gown. */
const COLLAR = smooth([
  [100, 250, 1],
  [140, 252],
  [184, 258],
  [222, 256, 1],
  [224, 266, 1],
  [184, 268],
  [140, 262],
  [98, 260, 1],
])

type Marks = {
  ground: string
  hair: string
  shine: string
  knot: string
  neck: string
  gown: string
}

const marks = once<Marks>(() => {
  // "one evening": a soft light from in front of her, the room behind her dim.
  const ground = portraitGround(7901, (x, y) =>
    clamp(0.12 + ((x - 40) / 280) * 0.8 - Math.max(0, (y - 250) / 300)),
  )
  const r = rng(7902)
  // Smooth dark hair, combed back over the head: short paper strokes lying
  // along the curve of the skull, spread evenly through the hair. (Cut first
  // as long strands all running to the knot at the nape, they bunched into
  // one bright stripe across the head.)
  const hair = combedHair(r, HAIR_PLACED, F.pt([150, 128]), 150, [6, 11])
  // "bright": the shine on the smooth crown, a broken band of light cut
  // across the hair where it curves over the top of the head.
  const [cx, cy] = F.pt([150, 112])
  const shine =
    arcDashes(r, cx, cy, 56 * F.s, deg(200), deg(296), [14, 24], [3, 6]) +
    arcDashes(r, cx, cy, 49 * F.s, deg(208), deg(288), [12, 20], [4, 7]) +
    arcDashes(r, cx, cy, 42 * F.s, deg(218), deg(278), [10, 16], [5, 8])
  // The coil of the knot.
  let knot = ''
  for (let rad = 4; rad < KNOT_R; rad += 3.4)
    knot += arcDashes(r, KNOT_C[0], KNOT_C[1], rad, deg(-40), deg(290), [7, 14], [2, 4])
  // A little shadow at the back of the neck, under the knot.
  const neck = hatch(r, { x0: 128, x1: 160, y0: 222, y1: 252 }, 5.6, 0.1)
  // The gown: a fold or two, the light on the front of the shoulder.
  const gown = 'M40 270Q30 296 24 318M84 256Q76 290 72 318M228 272Q238 292 242 316'
  return { ground, hair, shine, knot, neck, gown }
})

function BiddyPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-bd-head`
  const hairClip = `${uid}-bd-hair`
  const [kx, ky] = KNOT_C
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
          <circle cx={n(kx)} cy={n(ky)} r={KNOT_R} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <circle cx={n(kx)} cy={n(ky)} r={KNOT_R} />
        <path d={GOWN} />
      </g>
      {/* the plain dark gown */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      {/* the narrow white collar at the neckline */}
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <ProfileEar at={F.pt(WOMAN_EAR)} h={40} />
      {/* "pleasant and wholesome and sweet-tempered": the mouth turned up a little */}
      <WomanFeatures F={F} brow={1.9} mouth="smile" />
      {/* "curiously thoughtful and attentive eyes": open, steady, looking ahead */}
      <ProfileEye at={F.pt([WOMAN_EYE[0] + 1, WOMAN_EYE[1]])} s={0.86} look={0.6} />
      {/* her hair, dark, smooth and neat, drawn down over the ear to a knot at the nape */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <circle cx={n(kx)} cy={n(ky)} r={KNOT_R} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
        <path d={m.shine} fill="none" stroke={PAPER} strokeWidth={2.8} strokeLinecap="round" />
        <path d={m.knot} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <InnerRule />
    </>
  )
}

export const biddyArt: LinocutArt = { width: PW, height: PH, Draw: BiddyPortrait }

export const biddy: Portrait = {
  name: 'Biddy',
  art: biddyArt,
  alt: "A linocut portrait of Biddy as a young woman, drawn from Pip's description of her in Chapter 17, in profile, facing right, against a dark ground lit softly from in front of her. She has a plain, full-cheeked face, its mouth turned up a little at the corner, and a steady, open eye that looks ahead. Her dark hair is smooth and neat, with a band of shine cut across the crown, drawn down over her ear to a knot at the nape. She wears a plain dark gown with a narrow white collar. Three numbered red markers point to her hair, her face and her eye.",
  describedBy: [
    { phrase: 'her hair grew bright and neat', at: [30, 130], to: F.pt([112, 120]) },
    { phrase: 'pleasant and wholesome and sweet-tempered', at: F.pt([186, 160]) },
    {
      phrase: 'curiously thoughtful and attentive eyes',
      at: [304, 138],
      to: F.pt([228, WOMAN_EYE[1]]),
    },
  ],
  where: 'Chapter 17',
  passage:
    'Imperceptibly I became conscious of a change in Biddy, however. Her shoes came up at the heel, her hair grew bright and neat, her hands were always clean. She was not beautiful—she was common, and could not be like Estella—but she was pleasant and wholesome and sweet-tempered. She had not been with us more than a year (I remember her being newly out of mourning at the time it struck me), when I observed to myself one evening that she had curiously thoughtful and attentive eyes; eyes that were very pretty and very good.',
  note: 'Pip measures Biddy against Estella and finds her “common”, and in the same breath lists everything that is good in her. The reader sees what Pip will not see for years: her worth is in her temper and her eyes, not in her looks.',
  artNote:
    'Dickens gives neither the colour of her hair nor of her eyes, so her hair is printed dark, with the shine of “bright” cut into it. Her dress is not described here, so it is plain.',
}
