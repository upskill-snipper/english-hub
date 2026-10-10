import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManFeatures,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  flip,
  hatch,
  nudge,
  once,
  placer,
  portraitGround,
  smooth,
  lerp2,
  rimLight,
  strands,
  type Knot,
} from './common'

/**
 * Orlick, Joe's journeyman, as Dickens describes him, and nothing else.
 * Chapter 15, when Pip is apprenticed at the forge:
 *
 *   "He was a broad-shouldered loose-limbed swarthy fellow of great
 *   strength, never in a hurry, and always slouching."
 *
 * and, a few lines on in the same paragraph: "He always slouched,
 * locomotively, with his eyes on the ground; and, when accosted or otherwise
 * required to raise them, he looked up in a half resentful, half puzzled
 * way".
 *
 * So: a man of about five-and-twenty ("about five-and-twenty", Chapter 15)
 * in profile, facing left, his head carried low and pushed forward out of
 * high, broad shoulders, his back rounded ("broad-shouldered", "always
 * slouching"); his eye lowered under a heavy brow, on the ground before him;
 * a heavy jaw and a sulky mouth; his dark hair rough and low on the brow, as
 * the figure kit cuts it (../panels/people.tsx). He is drawn as he comes to
 * work, "He never even seemed to come to his work on purpose, but would
 * slouch in as if by mere accident" (the same paragraph): in a rough dark
 * jacket over his shirt, with a neckerchief knotted at his throat. His hands,
 * and nothing in them, are out of the picture.
 *
 * "swarthy" is a colour the print cannot show. A face printed in ink reads at
 * a glance as a different complexion (common.tsx), so his face is cut in
 * paper like every other face here, and the colour is left to the words.
 * Nothing of the attack on Mrs Joe and nothing of the lime-kiln is drawn,
 * and there is no red in the plate. Nothing here comes from a film or stage
 * production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are placed
 * with flip(). Seeds: 8001 for the ground, 8002 for the cuts in the figure.
 */

/**
 * The one man's head, made heavy: the jaw and chin pushed forward and down,
 * the brow ridge low and heavy, the neck thick at the back.
 */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [0, -10, 0],
  [1, -10, 0],
  [2, -6, 0],
  [10, 2, 6],
  [11, 2, 4],
  [21, 2, 1],
  [22, 4, 3],
  [23, 6, 5],
  [24, 6, 6],
  [25, 4, 5],
])

/** The head carried low and pushed forward: bowed fourteen degrees, set low in the block. */
const F = placer([18, 46], 0.82, 14, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/** Rough dark hair, short, low on the brow and close over the crown to the nape. */
const HAIR_K: Knot[] = [
  [226, 84],
  [222, 62],
  [207, 45],
  [180, 34],
  [150, 32],
  [120, 42],
  [97, 66],
  [87, 102],
  [92, 140],
  [100, 170],
  [112, 192, 1],
  [124, 184],
  [136, 166],
  [150, 150],
  [166, 134],
  [180, 124, 1],
  [192, 106],
  [206, 94],
  [218, 90],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)
/**
 * High, broad shoulders, the back rounded up behind the neck: the slouch.
 * A rough dark jacket, in the plate's own frame (facing right).
 */
const JACKET = smooth([
  [-8, 330, 1],
  [-6, 280],
  [10, 236],
  [44, 212],
  [88, 204],
  [126, 214],
  [166, 236],
  [206, 246],
  [244, 256],
  [276, 280],
  [300, 330, 1],
])
/** The open front of the jacket, and the shirt showing at the collar. */
const SHIRT_FRONT = 'M168 246C190 250 212 252 230 258L222 330H196L190 282C182 266 174 256 168 246Z'
/** The neckerchief knotted at his throat. */
const KERCHIEF = smooth([
  [150, 238, 1],
  [176, 240],
  [204, 238],
  [220, 246],
  [214, 258],
  [190, 258],
  [164, 252],
])
/** Its two ends, hanging from the knot at the front. */
const KNOT_ENDS = 'M212 252L222 276L214 278L206 256ZM206 254L208 280L200 280L200 256Z'
/** The jacket's lapel, turned back from the open front. */
const LAPEL = 'M230 258C246 268 258 290 262 330H244C240 300 232 278 222 262Z'

type Marks = {
  ground: string
  hair: string
  jacket: string
  neck: string
}

const marks = once<Marks>(() => {
  // The forge, dim: light from the open door in front of him, the back of
  // the shop dark.
  const ground = portraitGround(8001, (x, y) =>
    clamp(0.06 + ((x - 40) / 300) * 0.6 - Math.max(0, (y - 200) / 260)),
  )
  const r = rng(8002)
  // Rough dark hair, as Pip's portrait cuts dark hair: paper strands down
  // from the crown, bent and uneven (combed by nobody), and the light along
  // its top. (Cut first with ragged tufts at the back, it read as a row of
  // spikes; and with short strokes every way, as a knitted cap.)
  const [cx, cy] = F.pt([150, 122])
  const hair =
    strands(
      r,
      30,
      lerp2(F.pt([212, 66]), F.pt([112, 54])),
      lerp2(F.pt([212, 92]), F.pt([100, 176])),
      [0.4, 1],
      4,
    ) + rimLight(r, { cx, cy, rx: 50, ry: 58 }, 196, 330, 30, 1)
  // The jacket's coarse cloth: folds over the hunched shoulders and the back,
  // and short flecks of light on the front shoulder, where the light falls.
  let jacket =
    gouge(30, 246, 14, 322, 1.6, 2) +
    gouge(62, 226, 50, 322, 1.4, 1.6) +
    gouge(102, 218, 104, 318, 1.1, -1) +
    gouge(140, 236, 150, 322, 1, -1)
  for (let i = 0; i < 26; i++) {
    const x = between(r, 236, 296)
    const y = between(r, 266, 326)
    jacket += gouge(x, y, x + between(r, 3, 7), y + between(r, -1, 1), 0.6)
  }
  const neck = hatch(r, { x0: 120, x1: 168, y0: 196, y1: 240 }, 4.6, 0.2)
  return { ground, hair, jacket, neck }
})

function OrlickPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-or-head`
  const hairClip = `${uid}-or-hair`
  const p = F.p
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The paper halo that lifts the dark jacket and hair off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
        </g>
        {/* his rough dark jacket, over high, broad, rounded shoulders */}
        <path d={JACKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.jacket} fill={PAPER} />
        <path d={SHIRT_FRONT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        <ProfileEar at={F.pt(MAN_EAR)} h={44} />
        {/* a heavy, low brow; the mouth turned down, sulky */}
        <ManFeatures F={F} brow={4} raise={-3} knit={2} mouth="down" />
        {/* "with his eyes on the ground": the lid lowered, the eye cast down */}
        <ProfileEye at={F.pt([MAN_EYE[0], MAN_EYE[1] + 1])} s={0.82} heavy look={1.2} />
        <path
          d={`M${p(212, 140)}Q${p(220, 146)} ${p(230, 143)}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        {/* his neckerchief, knotted at the throat */}
        <path d={KERCHIEF} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d={KNOT_ENDS}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        {/* rough dark hair, low on the brow, ragged at the back */}
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
      </g>
      <InnerRule />
    </>
  )
}

export const orlickArt: LinocutArt = { width: PW, height: PH, Draw: OrlickPortrait }

/**
 * The marker points, in the drawing's own frame (facing right), before flip():
 * the front of the near shoulder, below the chin, and the top of the rounded
 * back behind the neck.
 */
const SHOULDER: Pt = [262, 272]
const BACK: Pt = [88, 208]

export const orlick: Portrait = {
  name: 'Orlick',
  art: orlickArt,
  alt: "A linocut portrait of Orlick, Joe's journeyman at the forge, drawn from Dickens's description in Chapter 15, in profile, facing left, against a dim ground. He is a heavily built young man whose head is carried low and pushed forward out of high, broad, rounded shoulders. He has rough dark hair low on his brow, a heavy brow drawn down, an eye lowered towards the ground, a heavy jaw and a mouth turned down at the corner. He wears a rough dark jacket open over a shirt, with a dark neckerchief knotted at the throat. Three numbered red markers point to his broad shoulders, his face and his slouching back.",
  describedBy: [
    { phrase: 'broad-shouldered', at: [26, 252], to: flip(SHOULDER) },
    { phrase: 'swarthy', at: flip(F.pt([186, 150])) },
    { phrase: 'always slouching', at: [304, 176], to: flip(BACK) },
  ],
  where: 'Chapter 15',
  passage:
    'He was a broad-shouldered loose-limbed swarthy fellow of great strength, never in a hurry, and always slouching.',
  note: 'Dickens gives Orlick a body that never stands straight and eyes that never meet anyone’s. The journeyman resents the boy who is favoured over him, and the grudge runs underneath the whole novel.',
  artNote:
    'Dickens calls him “swarthy”, a colour the print cannot show, so his face is cut in paper and the colour is left to the words. His eyes on the ground are from a few lines later in the same paragraph.',
}
