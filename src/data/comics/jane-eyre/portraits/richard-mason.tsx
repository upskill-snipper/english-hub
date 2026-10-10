import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  MAN_HEAD,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  rimLight,
  ribbonLocks,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Richard Mason, as Jane describes him, and nothing else. Chapter 18, the
 * evening of his arrival at Thornfield, after dinner:
 *
 *   "But I liked his physiognomy even less than before: it struck me as
 *   being at the same time unsettled and inanimate. His eye wandered, and
 *   had no meaning in its wandering: this gave him an odd look, such as I
 *   never remembered to have seen. For a handsome and not an unamiable-
 *   looking man, he repelled me exceedingly: there was no power in that
 *   smooth-skinned face of a full oval shape: no firmness in that aquiline
 *   nose and small cherry mouth; there was no thought on the low, even
 *   forehead; no command in that blank, brown eye."
 *
 * and, the paragraph before, "his complexion was singularly sallow:
 * otherwise he was a fine-looking man", "His features were regular, but too
 * relaxed: his eye was large and well cut"; he had arrived as "a tall,
 * fashionable-looking man, a stranger".
 *
 * So: a tall, well-dressed man in profile, facing right, cut from the one
 * man's head (MAN_HEAD) with only what Jane names changed: the face a full,
 * smooth oval, with no line cut in it; the nose aquiline, its bridge curved;
 * the mouth small and full; the forehead low and flat under the hair; the
 * eye large and well shaped, but its pupil drifting and with no glint in it
 * ("blank", "no meaning in its wandering"). His face is pale, as the figure
 * kit cuts it (HEAD_MASON in ../panels/people.tsx), and his dark hair is
 * brushed forward at the temple in the fashion of the time. He wears a dark
 * coat with a high collar, a white neckcloth tied high and a waistcoat:
 * evening dress, which the text does not describe. His sallow skin and
 * brown eye are colours the print cannot show; the card says so. He is
 * drawn as Jane first sees him, unhurt. There is no red in this plate.
 * Nothing here comes from a film or stage production.
 *
 * Seeds: 8201 for the ground, 8202 for the cuts in the figure.
 */

/**
 * The one man's head: the bridge of the nose curved, the mouth small and
 * full, the jaw rounded to a full oval, the forehead flat.
 */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [10, -1, 0],
  [11, -1, 0],
  [14, 3, -1.5],
  [15, 2.5, -1],
  [16, 0, 1.5],
  [17, -1, 1.5],
  [19, 1, 0.5],
  [20, -1, 0.5],
  [21, 1, 0.5],
  [22, -0.5, 1],
  [23, -1.5, 1],
  [24, -2, 2],
  [25, -3, 4],
  [26, -2, 3],
])

/** Tall: the head set high in the block. */
const F = placer([10, -6], 0.92)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * Dark hair, fashionably brushed forward over the temple and low on the
 * brow ("the low, even forehead").
 */
const HAIR_K: Knot[] = [
  [231, 84, 1],
  [218, 84],
  [206, 90],
  [196, 102],
  [190, 118],
  [186, 136, 1],
  [176, 134, 1],
  [168, 118],
  [158, 108],
  [144, 108],
  [134, 120],
  [126, 146],
  [118, 172],
  [106, 192, 1],
  [92, 170],
  [88, 130],
  [96, 92],
  [116, 60],
  [148, 38],
  [184, 32],
  [212, 40],
  [228, 58],
]
const HAIR = smooth(F.knots(HAIR_K))

const COAT = smooth([
  [-8, 330, 1],
  [-4, 290],
  [14, 260],
  [56, 240],
  [104, 232],
  [142, 238],
  [184, 248],
  [222, 248],
  [252, 256],
  [276, 280],
  [288, 310],
  [290, 330, 1],
])
const COLLAR = smooth([
  [102, 240, 1],
  [112, 212],
  [132, 218],
  [156, 232],
  [174, 252],
  [148, 256],
  [118, 252, 1],
])
const NECKCLOTH = smooth([
  [132, 224, 1],
  [168, 226],
  [204, 218],
  [218, 216],
  [224, 230],
  [222, 248],
  [194, 254],
  [150, 252, 1],
])
const WAISTCOAT = smooth([
  [204, 250, 1],
  [230, 252, 1],
  [242, 330, 1],
  [212, 330, 1],
])
const LAPEL = smooth([
  [226, 252, 1],
  [250, 258, 1],
  [262, 330, 1],
  [240, 330, 1],
])

type Marks = {
  ground: string
  hair: string
  sweep: string
  rim: string
  back: string
  neck: string
  coat: string
  cloth: string
}

const marks = once<Marks>(() => {
  // Candlelight in the drawing-room, from in front of him.
  const ground = portraitGround(8201, (x, y) =>
    clamp(0.06 + ((x - 60) / 270) * 0.85 - Math.max(0, (y - 250) / 260)),
  )
  const r = rng(8202)
  const hair = strands(
    r,
    22,
    lerp2(F.pt([120, 60]), F.pt([108, 168])),
    lerp2(F.pt([214, 54]), F.pt([186, 120])),
    [0.35, 0.65],
    2,
  )
  // Brushed forward over the temple: locks laid towards the face.
  const sweep = ribbonLocks(
    r,
    [
      [F.pt([180, 70]), F.pt([206, 72]), F.pt([224, 86])],
      [F.pt([176, 84]), F.pt([200, 86]), F.pt([214, 92])],
      [F.pt([172, 100]), F.pt([190, 100]), F.pt([200, 106])],
    ],
    [1.2, 1.7],
  )
  const rim = rimLight(
    r,
    { cx: F.pt([158, 112])[0], cy: F.pt([158, 112])[1], rx: 66 * F.s, ry: 80 * F.s },
    -90,
    -10,
    12,
    1,
  )
  let back = ''
  const [bx, by] = F.pt([176, 152])
  for (let rad = 54; rad < 90; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(100), deg(150), [8, 22], [2, 5])
  const neck = hatch(r, { x0: 122, x1: 214, y0: 196, y1: 220 }, 4.6, 0.06)
  const coat =
    gouge(254, 270, 270, 318, 1.6, -2) +
    gouge(34, 270, 16, 318, 1.6, 2) +
    gouge(74, 256, 64, 318, 1.3, 2) +
    gouge(122, 268, 118, 318, 1, 1)
  const cloth = 'M142 232Q180 232 216 224M148 240Q186 242 220 234'
  return { ground, hair, sweep, rim, back, neck, coat, cloth }
})

function MasonPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-rm-head`
  const hairClip = `${uid}-rm-hair`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([222, 127])
  const [ax, ay] = F.pt([156, 114])
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
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={COAT} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.5} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.rim} fill={PAPER} />
        <path d={m.sweep} fill={PAPER} />
      </g>
      <ProfileEar at={[ax, ay]} h={42} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* "a full oval shape": a soft, rounded jaw */}
        <path d={P('M233 212C214 222 192 216 178 200C172 192 169 182 169 172')} strokeWidth={1.4} />
        {/* a level brow, low under the hair */}
        <path d={P('M206 112Q218 108.5 232 112')} strokeWidth={2.2} />
        <path d={P('M247 168C243 165.5 242.5 161.5 245.5 159')} strokeWidth={1.3} />
        {/* "small cherry mouth": small and full */}
        <path d={P('M238 179.5L231.5 180')} strokeWidth={1.7} />
        <path d={P('M239.5 183.5Q236.5 186.5 232.5 184')} strokeWidth={LINE.fine} />
        <path d={P('M232 193Q230 196 231 199')} strokeWidth={LINE.hairline} />
      </g>
      {/* "his eye was large and well cut", but "blank": no glint, the pupil drifting */}
      <ProfileEye at={[ex, ey]} s={1.02} look={-1.6} glint={false} />
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.cloth} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={WAISTCOAT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M214 270L230 268M216 290L232 288M218 310L234 308"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <InnerRule />
    </>
  )
}

export const richardMasonArt: LinocutArt = { width: PW, height: PH, Draw: MasonPortrait }

export const richardMason: Portrait = {
  name: 'Richard Mason',
  art: richardMasonArt,
  alt: "A linocut portrait of Richard Mason in profile, facing right, drawn from Jane's description in Chapter 18: a tall, well-dressed man with a smooth, pale face of a full oval shape, without a line in it. His nose is aquiline, with a curved bridge, his mouth is small and full, and his forehead is low and flat under dark hair brushed forward over the temple. His eye is large and well shaped, but there is no glint in it and its pupil drifts back, as if it looks at nothing. He wears a dark coat with a high collar, a white neckcloth tied high and a pale waistcoat. Four numbered red markers point to his face, his nose and mouth, his forehead and his blank eye.",
  describedBy: [
    { phrase: 'that smooth-skinned face of a full oval shape', at: [190, 150] },
    { phrase: 'that aquiline nose and small cherry mouth', at: [302, 152], to: [248, 152] },
    { phrase: 'the low, even forehead', at: [298, 72], to: [228, 82] },
    { phrase: 'that blank, brown eye', at: [302, 112], to: [226, 112] },
  ],
  where: 'Chapter 18',
  passage:
    'But I liked his physiognomy even less than before: it struck me as being at the same time unsettled and inanimate. His eye wandered, and had no meaning in its wandering: this gave him an odd look, such as I never remembered to have seen. For a handsome and not an unamiable-looking man, he repelled me exceedingly: there was no power in that smooth-skinned face of a full oval shape: no firmness in that aquiline nose and small cherry mouth; there was no thought on the low, even forehead; no command in that blank, brown eye.',
  note: 'Jane reads Mason’s face as a list of things that are missing: power, firmness, thought, command. Brontë sets him beside Rochester’s “grim” face so that the reader sees the difference at once.',
  artNote:
    'Jane calls his complexion “singularly sallow” and his eye brown. The print has one colour besides black, so his face is cut in paper and those colours are left to the words.',
}
