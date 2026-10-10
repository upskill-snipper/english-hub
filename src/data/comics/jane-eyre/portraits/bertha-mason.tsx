import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEye,
  WOMAN_HEAD,
  WOMAN_LINES,
  flip,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Bertha Mason, Rochester's wife, drawn as a woman, with the same head, the
 * same eye and the same dignity as every other woman in these prints.
 *
 * WHAT THE PRINT DRAWS FROM, AND WHAT IT DOES NOT. The novel lets Bertha
 * speak for herself not once, and describes her almost always in words that
 * make her less than human. Those words are never quoted on this card, and
 * nothing in her face or her figure is drawn from them: this overrides the
 * usual rule of drawing from the text's description. What the text says of
 * her plainly is drawn, and the markers point only at that:
 *
 *   "It seemed, sir, a woman, tall and large, with thick and dark hair
 *   hanging long down her back. I know not what dress she had on: it was
 *   white and straight" (Chapter 25, Jane telling Rochester what she saw in
 *   her room by candlelight, not knowing who it was)
 *
 *   "My father said nothing about her money; but he told me Miss Mason was
 *   the boast of Spanish Town for her beauty: and this was no lie. I found
 *   her a fine woman, in the style of Blanche Ingram: tall, dark, and
 *   majestic." (Chapter 27, Rochester remembering the bride he was shown in
 *   Jamaica)
 *
 * So: a tall woman in profile, facing left, standing upright with her head
 * held high and her face calm and grave ("majestic"), cut from the one
 * woman's head (WOMAN_HEAD) with nothing changed but a firmer chin. Her
 * thick dark hair is loose and falls long down her back, over the ear, to
 * the foot of the block. She wears a plain white gown, straight from the
 * shoulder ("white and straight"), its folds cut as straight lines. She is
 * partly in shadow, as she is kept out of sight for most of the book: the
 * light falls from in front of her on her face and the front of her gown,
 * and behind her the hair, the back of the gown and the ground go into the
 * dark. The ground is the dark of the third storey, not a room or a fire.
 * Her colouring is not drawn: her face is cut in paper, as every face is.
 * There is no red in this plate.
 *
 * Nothing in the card names or describes what she does in the novel, or how
 * she dies. Nothing here comes from a film, television or stage production,
 * or from any retelling of her story.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 7401 for the ground, 7402 for the cuts.
 */

/** The one woman's head, its chin a little firmer. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [23, 1, 0.5],
  [24, 0.5, 0.5],
])

/** Tall and upright: the head set high in the block, the chin a little raised. */
const F = placer([26, -16], 0.84, -4, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/**
 * Thick dark hair, loose: over the crown from the brow, falling over the
 * ear and down behind the neck and the back to the foot of the block.
 */
const HAIR_K: Knot[] = [
  [217, 68, 1],
  [204, 50],
  [178, 40],
  [146, 42],
  [116, 55],
  [96, 82],
  [84, 116],
  [80, 156],
  [76, 210],
  [72, 270],
  [68, 340],
  [64, 410, 1],
  [122, 410, 1],
  [122, 340],
  [124, 290],
  [126, 262],
  [132, 236],
  [142, 206],
  [154, 178],
  [164, 150],
  [174, 124],
  [186, 100],
  [200, 80],
]
/** The neck, carried down under the neck of the gown. */
const NECK = smooth(
  F.knots([
    [126, 232, 1],
    [204, 232, 1],
    [208, 272, 1],
    [124, 272, 1],
  ]),
)
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** The white gown, straight from the shoulder, its neck plain and round. */
const GOWN = smooth(
  F.knots([
    [124, 246, 1],
    [104, 262],
    [80, 290],
    [66, 330],
    [60, 410, 1],
    [270, 410, 1],
    [268, 350],
    [258, 304],
    [240, 276],
    [218, 260],
    [206, 248, 1],
    [184, 258],
    [156, 256],
  ]),
)
/** The back of the gown, in the shadow, behind the line of the arm. */
const GOWN_SHADE = smooth(
  F.knots([
    [124, 246, 1],
    [104, 262],
    [80, 290],
    [66, 330],
    [60, 410, 1],
    [168, 410, 1],
    [164, 340],
    [158, 300],
    [148, 274],
    [138, 256],
  ]),
)

type Marks = {
  ground: string
  hair: string
  hairShade: string
  back: string
  neck: string
  folds: string
  shade: string
}

const marks = once<Marks>(() => {
  // A light from in front of her, at the height of her face; everything
  // behind her goes into the dark.
  const ground = portraitGround(7401, (x, y) =>
    clamp(0.02 + Math.max(0, (x - 150) / 190) * 0.85 - Math.abs(y - 120) / 520),
  )
  const r = rng(7402)
  // Thick hair: long paper cuts lying down its fall, more of them where the
  // light reaches the front of it.
  const hair =
    strands(
      r,
      30,
      lerp2(F.pt([208, 60]), F.pt([172, 128])),
      lerp2(F.pt([96, 90]), F.pt([130, 236])),
      [0.35, 0.7],
      2.5,
    ) +
    strands(
      r,
      26,
      lerp2(F.pt([88, 150]), F.pt([130, 240])),
      lerp2(F.pt([70, 400]), F.pt([120, 400])),
      [0.35, 0.75],
      4,
    )
  let hairShade = ''
  const [hx, hy] = F.pt([150, 140])
  for (let rad = 60; rad < 100; rad += 4)
    hairShade += arcDashes(r, hx, hy, rad, deg(120), deg(220), [10, 24], [3, 7])
  let back = ''
  const [bx, by] = F.pt([178, 152])
  for (let rad = 44; rad < 72; rad += 3.6)
    back += arcDashes(r, bx, by, rad, deg(96), deg(140), [8, 18], [2, 5])
  const neck = hatch(r, { x0: 120, x1: 220, y0: 150, y1: 168 }, 4.4, 0.1)
  // "white and straight": the gown's folds fall straight from the shoulder.
  const [f0x, f0y] = F.pt([200, 280])
  const folds =
    gouge(f0x, f0y, f0x + 6, 318, 0.9, 0) +
    gouge(f0x + 22, f0y + 8, f0x + 30, 318, 1, 0) +
    gouge(f0x - 22, f0y + 6, f0x - 18, 318, 0.8, 0) +
    gouge(f0x + 44, f0y + 22, f0x + 54, 318, 0.9, 0)
  const shade = hatch(r, { x0: 20, x1: 200, y0: 190, y1: 330 }, 3.8, -0.35)
  return { ground, hair, hairShade, back, neck, folds, shade }
})

function BerthaPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-bm-head`
  const hairClip = `${uid}-bm-hair`
  const shadeClip = `${uid}-bm-shade`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([217, 130])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={shadeClip}>
          <path d={GOWN_SHADE} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={HAIR} />
          <path d={GOWN} />
        </g>
        <path d={NECK} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.4} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        {/* "it was white and straight": the gown over the foot of the neck */}
        <path d={GOWN} fill={PAPER} />
        <path d={m.folds} fill={INK} />
        <g clipPath={`url(#${shadeClip})`}>
          <path d={m.shade} fill="none" stroke={INK} strokeWidth={1.2} />
        </g>
        <path
          d={P('M124 246Q160 262 206 248')}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinecap="round"
        />
        {/* "thick and dark hair hanging long down her back" */}
        <path d={HAIR} fill={INK} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
          <path d={m.hairShade} fill="none" stroke={INK} strokeWidth={1.6} />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={P(WOMAN_LINES.jaw)} strokeWidth={1.3} />
          <path d={P(WOMAN_LINES.brow)} strokeWidth={2.4} />
          <path d={P(WOMAN_LINES.nostril)} strokeWidth={1.2} />
          <path d={P(WOMAN_LINES.mouth)} strokeWidth={1.6} />
          <path d={P(WOMAN_LINES.lowerLip)} strokeWidth={LINE.hairline} />
          <path d={P('M227 189Q225 191.5 226 194.5')} strokeWidth={LINE.hairline} />
        </g>
        {/* a steady, level gaze */}
        <ProfileEye at={[ex, ey]} s={0.8} look={0.2} />
      </g>
      <InnerRule />
    </>
  )
}

export const berthaMasonArt: LinocutArt = { width: PW, height: PH, Draw: BerthaPortrait }

export const berthaMason: Portrait = {
  name: 'Bertha Mason',
  art: berthaMasonArt,
  alt: "A linocut portrait of Bertha Mason, drawn from Jane's words in Chapter 25 and Rochester's in Chapter 27: a tall woman standing upright in profile, facing left, her head held high and her face calm and grave, cut in pale paper like every other face in this gallery. Her thick dark hair is loose and falls long down her back to the foot of the picture. She wears a plain white gown, straight from the shoulder, its folds falling in straight lines. She is partly in shadow: light falls on her face and the front of her gown, and behind her the hair, the back of the gown and the ground go into the dark. Four numbered red markers point to her hair, her white gown, her face and her upright head.",
  describedBy: [
    {
      phrase: 'thick and dark hair hanging long down her back',
      at: flip([36, 200]),
      to: flip([80, 206]),
    },
    { phrase: 'it was white and straight', at: flip([236, 292]) },
    { phrase: 'the boast of Spanish Town for her beauty', at: flip([200, 124]) },
    { phrase: 'tall, dark, and majestic', at: flip([294, 52]), to: flip([216, 54]) },
  ],
  where: 'Chapters 25 and 27',
  note: 'The reader meets Bertha only through other people’s words: here Jane’s, describing a stranger she saw by candlelight, and Rochester’s, remembering the bride he was shown in Spanish Town. The novel never lets her tell her own story.',
  artNote:
    'Elsewhere the novel describes Bertha in words that make her less than human. This print does not draw them. She is drawn from these plainer words, a tall woman with long dark hair in a white gown, with the same care as everyone else in the book, and partly in shadow, as she is kept hidden for most of it.',
}
