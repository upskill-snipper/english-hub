import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  WOMAN_HEAD,
  WOMAN_LINES,
  flip,
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
 * Diana and Mary Rivers, St John's sisters, as Jane first sees them, and
 * nothing else. Chapter 28, through the window of Moor House and then by its
 * kitchen fire:
 *
 *   "Two young, graceful women—ladies in every point—sat, one in a low
 *   rocking-chair, the other on a lower stool; both wore deep mourning of
 *   crape and bombazeen, which sombre garb singularly set off very fair necks
 *   and faces";
 *
 *   "Both were fair complexioned and slenderly made; both possessed faces full
 *   of distinction and intelligence. One, to be sure, had hair a shade darker
 *   than the other, and there was a difference in their style of wearing it;
 *   Mary's pale brown locks were parted and braided smooth: Diana's duskier
 *   tresses covered her neck with thick curls."
 *
 * So: the two sisters half length, facing each other, as they sit talking by
 * the fire: Mary at the left, facing right; Diana at the right, facing left.
 * Jane "thought them so similar I could not tell where the old servant saw
 * the difference", so both are cut from the one woman's head (WOMAN_HEAD)
 * with the same few lines, and are told apart only by their hair, which is
 * what the text tells them apart by. Mary's paler hair is cut mostly in paper
 * with fine ink lines, parted, drawn smooth over the temple and the top of
 * the ear, and braided into a coil at the back. Diana's darker hair is ink
 * with paper strands, and falls behind her ear over her neck in thick curls,
 * each turned in paper. Their mourning is black, and their necks and faces
 * paper, "very fair". The light between them is the fire's; there is no red
 * in this plate. Nothing here comes from a film or stage production.
 *
 * Diana is drawn facing right, in the left half, and turned over by
 * FACE_LEFT into the right half; her markers are placed with flip(). Seeds:
 * 8701 for the ground, 8702 and 8703 for the cuts in each figure.
 */

/**
 * Both heads: the one woman's head, its neck carried on down into the gown,
 * which is printed over it.
 */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [0, 0, 36],
  [27, 0, 36],
])
/** Each sister's head, in the left half of the block (Diana's is turned over into the right). */
const F = placer([-8, 44], 0.62)
const HEAD = smooth(F.knots(HEAD_K))

// ── MARY ────────────────────────────────────────────────────────────────────

/** "parted and braided smooth": a smooth band from the brow over the temple and the top of the ear. */
const MARY_HAIR = smooth(
  F.knots([
    [219, 62, 1],
    [216, 78],
    [208, 94],
    [196, 106],
    [180, 114],
    [160, 116],
    [140, 122],
    [118, 130],
    [102, 118],
    [100, 92],
    [114, 64],
    [146, 46],
    [186, 44],
  ]),
)
/** The braided coil at the back of her head. */
const MARY_COIL: Pt = [110, 112]
const MARY_COIL_R = 21

// ── DIANA ───────────────────────────────────────────────────────────────────

/** Her darker hair over the head, down behind the ear, and over the neck in curls. */
const DIANA_HAIR_K: Knot[] = [
  [219, 62, 1],
  [214, 80],
  [204, 96],
  [190, 108],
  [172, 112],
  [160, 114],
  [150, 132],
  [146, 166],
  [150, 204],
  [146, 240],
  [128, 258, 1],
  [104, 246],
  [96, 206],
  [94, 156],
  [96, 110],
  [108, 76],
  [134, 54],
  [168, 44],
  [200, 48],
]
const DIANA_HAIR = smooth(F.knots(DIANA_HAIR_K))
/** The curls over her neck: the centres of the rings, in the head's frame. */
const DIANA_CURLS: Pt[] = [
  [138, 150],
  [114, 160],
  [134, 178],
  [110, 186],
  [130, 206],
  [108, 214],
  [128, 232],
  [112, 240],
  [122, 124],
]

/** Each sister's mourning gown: slender shoulders, a round neck, black. */
const GOWN = smooth([
  [-6, 330, 1],
  [-2, 292],
  [12, 262],
  [34, 238],
  [60, 222],
  [76, 214],
  [96, 222],
  [116, 218],
  [130, 214],
  [148, 226],
  [162, 250],
  [170, 288],
  [172, 330, 1],
])
type Marks = {
  ground: string
  maryHair: string
  coil: string
  dianaHair: string
  curls: string
  gown: string
}

const marks = once<Marks>(() => {
  // The fire's light between them, falling away to the edges.
  const ground = portraitGround(8701, (x, y) =>
    clamp(0.55 - Math.abs(x - PW / 2) / 230 - Math.max(0, (y - 230) / 260)),
  )
  const r = rng(8702)
  // Mary's pale hair: paper, with fine ink lines running back from the parting.
  const maryHair =
    strands(
      r,
      24,
      lerp2(F.pt([216, 66]), F.pt([196, 104])),
      lerp2(F.pt([150, 54]), F.pt([120, 118])),
      [0.4, 0.65],
      1,
    ) +
    strands(
      r,
      8,
      lerp2(F.pt([186, 110]), F.pt([150, 118])),
      lerp2(F.pt([128, 112]), F.pt([116, 124])),
      [0.35, 0.55],
      0.6,
    )
  // The braid coiled at the back: rings of plaits.
  const [cx, cy] = F.pt(MARY_COIL)
  let coil = ''
  for (let rad = 3; rad < MARY_COIL_R * F.s - 1; rad += 2.6)
    for (let a = 0; a < 360; a += 40) {
      const a0 = deg(a + rad * 9)
      const a1 = a0 + deg(26)
      coil += `M${n(cx + Math.cos(a0) * rad)} ${n(cy + Math.sin(a0) * rad)}L${n(cx + Math.cos(a1) * (rad + 2))} ${n(cy + Math.sin(a1) * (rad + 2))}`
    }
  const rd = rng(8703)
  // Diana's darker hair: ink, with long paper strands over the crown.
  const dianaHair = strands(
    rd,
    16,
    lerp2(F.pt([214, 66]), F.pt([190, 106])),
    lerp2(F.pt([140, 58]), F.pt([112, 102])),
    [0.35, 0.55],
    1.2,
  )
  // "thick curls": each a ring of paper turned in on itself.
  let curls = ''
  for (const c of DIANA_CURLS) {
    const [x, y] = F.pt(c)
    const rr = 5.8 * F.s * 1.6
    curls +=
      `M${n(x + rr)} ${n(y)}A${n(rr)} ${n(rr)} 0 1 1 ${n(x)} ${n(y + rr)}` +
      `M${n(x + rr * 0.45)} ${n(y)}A${n(rr * 0.45)} ${n(rr * 0.45)} 0 1 1 ${n(x)} ${n(y + rr * 0.45)}`
  }
  // Crape and bombazeen: a dull black, cut with a few soft folds.
  const gown =
    gouge(24, 252, 12, 318, 1.3, 1.6) +
    gouge(50, 240, 44, 318, 1, 1.2) +
    gouge(156, 254, 162, 318, 1.1, -1.2) +
    gouge(110, 246, 112, 318, 0.8, 0)
  return { ground, maryHair, coil, dianaHair, curls, gown }
})

/** One sister: the fair neck and face, the features, the gown over the neck. Her hair is drawn by the caller. */
function Sister({ over }: { over: ReactNode }) {
  const m = marks()
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([217, 130])
  return (
    <>
      <path d={HEAD} fill={PAPER} />
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={P(WOMAN_LINES.jaw)} strokeWidth={1.1} />
        <path d={P(WOMAN_LINES.brow)} strokeWidth={1.8} />
        <path d={P(WOMAN_LINES.nostril)} strokeWidth={1} />
        <path d={P(WOMAN_LINES.mouth)} strokeWidth={1.3} />
        <path d={P(WOMAN_LINES.lowerLip)} strokeWidth={LINE.hairline} />
        <path d={P(WOMAN_LINES.chin)} strokeWidth={LINE.hairline} />
      </g>
      <ProfileEye at={[ex, ey]} s={0.62} look={0.4} />
      {over}
    </>
  )
}

function DianaAndMaryPortrait({ uid }: ArtProps) {
  const m = marks()
  const [ax, ay] = F.pt([160, 118])
  const [cx, cy] = F.pt(MARY_COIL)
  const cr = MARY_COIL_R * F.s
  const maryHairClip = `${uid}-dm-mhair`
  const dianaHairClip = `${uid}-dm-dhair`
  return (
    <>
      <defs>
        <clipPath id={maryHairClip}>
          <path d={MARY_HAIR} />
        </clipPath>
        <clipPath id={dianaHairClip}>
          <path d={DIANA_HAIR} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* Mary, at the left, facing her sister */}
      <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={MARY_HAIR} />
        <circle cx={n(cx)} cy={n(cy)} r={n(cr)} />
        <path d={GOWN} />
      </g>
      <Sister
        over={
          <>
            <ProfileEar at={[ax, ay]} h={22} />
            <circle
              cx={n(cx)}
              cy={n(cy)}
              r={n(cr)}
              fill={PAPER}
              stroke={INK}
              strokeWidth={LINE.fine}
            />
            <path d={m.coil} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
            <path d={MARY_HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
            <g clipPath={`url(#${maryHairClip})`}>
              <path d={m.maryHair} fill={INK} />
            </g>
          </>
        }
      />
      {/* Diana, at the right, facing her sister: drawn facing right, turned over */}
      <g transform={FACE_LEFT}>
        <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={DIANA_HAIR} />
          <path d={GOWN} />
        </g>
        <Sister
          over={
            <>
              <path d={DIANA_HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
              <g clipPath={`url(#${dianaHairClip})`}>
                <path d={m.dianaHair} fill={PAPER} />
              </g>
              <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
            </>
          }
        />
      </g>
      <InnerRule />
    </>
  )
}

export const dianaAndMaryRiversArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: DianaAndMaryPortrait,
}

export const dianaAndMaryRivers: Portrait = {
  name: 'Diana and Mary Rivers',
  art: dianaAndMaryRiversArt,
  alt: "A linocut portrait of the sisters Diana and Mary Rivers, half length, facing each other, drawn from Jane's description in Chapter 28. Both are slender young women in black mourning gowns, with pale necks and faces cut from the same features, so alike that they are told apart only by their hair. Mary, at the left, facing right, wears her paler hair parted and drawn smooth over her temple and ear, and braided into a coil at the back of her head. Diana, at the right, facing left, has darker hair that falls behind her ear over her neck in thick curls. The light between them is the firelight. Four numbered red markers point to Mary's face, Diana's face, Mary's braided hair and Diana's curls.",
  describedBy: [
    { phrase: 'fair complexioned and slenderly made', at: [112, 142] },
    { phrase: 'faces full of distinction and intelligence', at: flip([112, 142]) },
    {
      phrase: 'Mary’s pale brown locks were parted and braided smooth',
      at: [24, 82],
      to: [52, 104],
    },
    {
      phrase: 'Diana’s duskier tresses covered her neck with thick curls',
      at: flip([24, 218]),
      to: flip([58, 190]),
    },
  ],
  where: 'Chapter 28',
  passage:
    'Both were fair complexioned and slenderly made; both possessed faces full of distinction and intelligence. One, to be sure, had hair a shade darker than the other, and there was a difference in their style of wearing it; Mary’s pale brown locks were parted and braided smooth: Diana’s duskier tresses covered her neck with thick curls.',
  note: 'The first equals Jane has ever lived among. Brontë makes the sisters so alike that only their hair tells them apart, and gives them the learning, warmth and good sense that Jane has been looking for since Lowood.',
  artNote:
    'Jane first sees them in “deep mourning of crape and bombazeen”, which is printed black. The colours of their hair, pale brown and darker, are shown as paler and darker cuts; brown itself is left to the words.',
}
