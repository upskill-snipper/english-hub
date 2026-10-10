import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

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
  lerp2,
  nudge,
  once,
  placer,
  portraitGround,
  rimLight,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Bentley Drummle, as Dickens describes him, and nothing else. Chapter 25,
 * when Pip is reading with Mr Pocket at Hammersmith:
 *
 *   "Bentley Drummle, who was so sulky a fellow that he even took up a book
 *   as if its writer had done him an injury, did not take up an acquaintance
 *   in a more agreeable spirit. Heavy in figure, movement, and
 *   comprehension—in the sluggish complexion of his face, and in the large
 *   awkward tongue that seemed to loll about in his mouth as he himself
 *   lolled about in a room—he was idle, proud, niggardly, reserved, and
 *   suspicious."
 *
 * and in Chapter 23, "Drummle, an old-looking young man of a heavy order of
 * architecture"; Jaggers calls him "the blotchy, sprawly, sulky fellow"
 * (Chapter 26).
 *
 * So: a big, heavy young man in profile, facing left, older-looking than his
 * years, slumped down in his collar (the "heavy order of architecture"): a
 * thick neck, a heavy jaw and jowl, a fleshy nose, a lower lip pushed out
 * and the mouth turned down ("sulky"); his eyelid dropped half over the eye,
 * which looks sidelong, slow and suspicious ("sluggish", "reserved, and
 * suspicious"); his chin sunk on a broad chest ("Heavy in figure"). He is
 * dressed as the rich young gentleman he is, in a dark coat and a white
 * neckcloth, and his short dark hair is not described.
 *
 * His "sluggish complexion" and the blotches Jaggers sees are colours the
 * print cannot show: a red blotch on a face reads as a wound (./common.tsx),
 * so his face is cut in paper and the complexion left to the words. His
 * tongue is not drawn: a tongue lolling out of a mouth reads as something
 * else at panel size. Nothing of his cruelty to Estella or of the horse
 * is drawn. Nothing here comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are placed
 * with flip(). Seeds: 8301 for the ground, 8302 for the cuts in the figure.
 */

/**
 * The one man's head made heavy: the jaw and jowl full and dropped, the chin
 * sunk back into the neck, the back of the neck thick, the nose fleshier.
 */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [0, -16, 0],
  [1, -16, 0],
  [2, -10, 0],
  [3, -4, 0],
  [15, 2, 0],
  [16, 1, 2],
  [17, 1, 2],
  [20, 1, 1],
  [21, 3, 2],
  [22, 0, 4],
  [23, 0, 8],
  [24, -4, 12],
  [25, -6, 14],
  [26, -2, 12],
  [27, -2, 8],
])

const F = placer([20, 8], 0.86, 4, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/** Short dark hair, plain, over the crown and down to the ear and the thick nape. */
const HAIR_K: Knot[] = [
  [222, 76],
  [214, 58],
  [196, 44],
  [170, 36],
  [140, 36],
  [112, 48],
  [92, 70],
  [80, 104],
  [76, 142],
  [80, 178],
  [90, 206, 1],
  [106, 200],
  [120, 178],
  [134, 154],
  [150, 134],
  [168, 118],
  [182, 112, 1],
  [194, 98],
  [208, 88],
  [218, 84],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** A heavy, broad body in a dark coat, the shoulders sloping, the chest deep. */
const COAT = smooth([
  [-8, 330, 1],
  [-8, 284],
  [4, 252],
  [38, 232],
  [86, 222],
  [130, 228],
  [170, 246],
  [214, 252],
  [252, 264],
  [282, 290],
  [296, 330, 1],
])
/** The standing collar, high behind the thick neck. */
const COLLAR = smooth([
  [82, 246, 1],
  [88, 214],
  [112, 206],
  [142, 220],
  [160, 248],
  [138, 260, 1],
])
/** The white neckcloth, tight under the heavy chin. */
const NECKCLOTH = smooth([
  [132, 244, 1],
  [170, 246],
  [210, 246],
  [228, 254],
  [222, 272],
  [186, 276],
  [140, 266, 1],
])
const LAPEL = smooth([
  [222, 270, 1],
  [248, 280],
  [262, 306],
  [266, 330, 1],
  [250, 330, 1],
  [242, 300],
])

type Marks = {
  ground: string
  hair: string
  jowl: string
  coat: string
}

const marks = once<Marks>(() => {
  // A room by day, lit from in front of him; dull behind.
  const ground = portraitGround(8301, (x, y) =>
    clamp(0.1 + ((x - 50) / 280) * 0.7 - Math.max(0, (y - 240) / 260)),
  )
  const r = rng(8302)
  const [cx, cy] = F.pt([148, 124])
  const hair =
    strands(
      r,
      22,
      lerp2(F.pt([206, 62]), F.pt([112, 50])),
      lerp2(F.pt([204, 90]), F.pt([90, 176])),
      [0.4, 0.8],
      1.5,
    ) + rimLight(r, { cx, cy, rx: 54, ry: 60 }, 196, 330, 24, 0.9)
  // The heavy jowl and the fold of the neck under it: shading in ink lines.
  const jowl =
    hatch(r, { x0: 150, x1: 196, y0: 204, y1: 236 }, 4.2, 0.12) +
    hatch(r, { x0: 106, x1: 146, y0: 196, y1: 244 }, 5, 0.1)
  // The coat: heavy folds over the broad back and the deep chest.
  let coat = gouge(26, 252, 12, 322, 1.6, 1.6) + gouge(66, 236, 56, 322, 1.4, 1.4)
  for (let i = 0; i < 3; i++)
    coat += gouge(232 + i * 5, 290 + i * 4, 236 + i * 5, 324, 0.7, between(r, -0.6, 0.6))
  return { ground, hair, jowl, coat }
})

function BentleyDrummlePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-bd2-head`
  const hairClip = `${uid}-bd2-hair`
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
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={HAIR} />
        </g>
        {/* "Heavy in figure": a broad, heavy body in a dark coat */}
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.jowl} strokeWidth={LINE.hairline} />
        </g>
        <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <ProfileEar at={F.pt(MAN_EAR)} h={44} />
        {/* "so sulky a fellow": the brow drawn down, the mouth turned down */}
        <ManFeatures F={F} brow={3.4} raise={-2} knit={1.5} mouth="down" jaw={false} />
        {/* the lower lip pushed out, and the heavy jaw */}
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={`M${p(238, 181)}Q${p(233, 186)} ${p(226, 184)}`} strokeWidth={LINE.fine} />
          <path
            d={`M${p(232, 216)}C${p(210, 230)} ${p(184, 224)} ${p(170, 206)}C${p(166, 198)} ${p(166, 186)} ${p(168, 176)}`}
            strokeWidth={1.6}
          />
        </g>
        {/* "suspicious", "sluggish": the lid dropped half over a sidelong eye */}
        <ProfileEye at={F.pt([MAN_EYE[0], MAN_EYE[1] + 1])} s={0.86} heavy look={-1.4} />
        {/* short dark hair */}
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
      </g>
      <InnerRule />
    </>
  )
}

export const bentleyDrummleArt: LinocutArt = { width: PW, height: PH, Draw: BentleyDrummlePortrait }

/** Where the markers point, in the drawing's own frame (facing right), before flip(). */
const BODY: Pt = [60, 262]

export const bentleyDrummle: Portrait = {
  name: 'Bentley Drummle',
  art: bentleyDrummleArt,
  alt: "A linocut portrait of Bentley Drummle as a young man, drawn from Dickens's description in Chapter 25, in profile, facing left, against a dull ground. He is big and heavy and looks older than his years, sunk down into a high collar, with a thick neck, a heavy jaw and jowl, a fleshy nose, a brow drawn down, and a mouth turned down with the lower lip pushed out. His eyelid hangs half over his eye, which looks sidelong. His short dark hair is plain. He wears a dark coat over broad shoulders and a deep chest, and a white neckcloth tight under his chin. Three numbered red markers point to his lowering brow, his heavy body and his face.",
  // In the order the phrases come in the passage, so that the numbers set
  // into it run 1, 2, 3. (They were first in the order 3, 1, 2; changed on
  // review, 10 October 2026.)
  describedBy: [
    { phrase: 'so sulky a fellow', at: [26, 104], to: flip(F.pt([232, 108])) },
    { phrase: 'Heavy in figure', at: [306, 290], to: flip(BODY) },
    { phrase: 'the sluggish complexion of his face', at: flip(F.pt([188, 150])) },
  ],
  where: 'Chapter 25',
  passage:
    'Bentley Drummle, who was so sulky a fellow that he even took up a book as if its writer had done him an injury, did not take up an acquaintance in a more agreeable spirit. Heavy in figure, movement, and comprehension—in the sluggish complexion of his face, and in the large awkward tongue that seemed to loll about in his mouth as he himself lolled about in a room—he was idle, proud, niggardly, reserved, and suspicious.',
  note: 'Dickens builds Drummle out of weight: heavy body, heavy wits, heavy temper. He is rich and well born and has nothing else to recommend him, which is exactly why it wounds Pip that Estella chooses him.',
  artNote:
    'His “sluggish complexion”, and the blotches Jaggers sees in him, are colours the print cannot show, so his face is cut in paper and the complexion is left to the words. His tongue is left to the words too.',
}
