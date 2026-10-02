import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  napeShade,
  once,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  strands,
  turn,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
} from './common'

/**
 * Lear's Fool, from what he and Lear say of him in Act 1, Scene 4:
 *
 *   FOOL: "Let me hire him too; here's my coxcomb." (offering Kent his cap)
 *   LEAR: "How now, my pretty knave, how dost thou?"
 *   FOOL: "The sweet and bitter fool Will presently appear; The one in motley
 *   here, The other found out there."
 *
 * So: a slight young man, beardless, in the fool's cap and the fool's coat.
 * He is drawn as the figure kit draws him (../panels/people.tsx): the
 * coxcomb, a close cap over the crown and the back of the head to the nape,
 * in ink, with the cap's edge cut in paper, and a crest along its top cut in
 * rounded lobes like a cock's comb, printed in paper with an ink edge, its
 * lobes parted by ink strokes (CREST_LOBES); and a coat of motley in diagonal
 * stripes, every other one cut in paper, falling from the far shoulder
 * towards the near side, so the site's three fools (this one, Twelfth Night's
 * Feste and The Tempest's Trinculo) are not one coat. The crest is never red:
 * red on a head reads as a wound. No bells and no ass's ears.
 * WHY THE CREST IS PAPER (2 October 2026, the review). The portrait first cut
 * the crest in ink, as the kit first did; the kit changed it to paper because
 * an ink crest read at panel size as a bun of dark curls, and the portrait
 * now matches the panels, so the student meets one cap. Lear calls him "my boy" and "lad", and
 * the kit makes him a young man and not a child: his head is the youth's head
 * (YOUTH_HEAD), with a little dark hair below the cap at the temple, invented
 * only to frame the face. He has the look of the one who tells the King the
 * truth: the eye bright and level, the corner of the mouth turned up.
 *
 * MARKERS. "my pretty knave" sits on his cheek with no line. The coxcomb's
 * marker comes to the front of the crest from in front of him at its own
 * height, and the motley's to his chest, in front of him: no line crosses
 * his face.
 *
 * He faces left, so the figure is drawn facing right and flipped. Seeds:
 * 7401 to 7406 (the figure's marks), 7410 (the ground).
 */

/** His head is cocked a little, as a man's is when he has said something sharp. */
const ROT = -4

/** The close cap of the coxcomb, over the crown and down the back of the head to the nape. */
const CAP = spline([
  [160, 75, 1],
  [157, 52],
  [141, 31],
  [112, 23],
  [83, 29],
  [59, 45],
  [43, 71],
  [37, 104],
  [38, 134],
  [44, 158],
  [55, 177, 1],
  [66, 172],
  [72, 158, 1],
  [68, 136],
  [69, 112],
  [76, 92],
  [92, 77],
  [118, 69],
  [142, 70],
])
/** The crest along its top, in rounded lobes like a cock's comb. */
const CREST = spline([
  [146, 37, 1],
  [154, 25],
  [151, 12],
  [141, 9, 1],
  [137, -1],
  [125, -7],
  [115, -1, 1],
  [107, -11],
  [93, -13],
  [85, -3, 1],
  [73, -9],
  [61, -3],
  [58, 9, 1],
  [48, 11],
  [43, 23],
  [49, 35],
  [59, 44, 1],
  [84, 30],
  [112, 24],
  [134, 29],
])
/** The notches between the crest's lobes, cut down into it in ink as the kit's COXCOMB_LOBES are. */
const CREST_LOBES = 'M141 9L136 31M115 -1L113 25M85 -3L86 28M58 9L63 38'
/** The seam between crest and cap, the cap's edge round the face, and a seam behind the ear. */
const CAP_CUTS =
  gouge(56, 44, 147, 36, 2.2, -7.4) +
  gouge(76, 90, 159, 73, 1.8, -5.6) +
  gouge(70, 112, 62, 168, 1.2, -1.2)

/** A little dark hair below the cap, at the temple and in front of the ear. */
const HAIR = spline([
  [140, 70, 1],
  [134, 82],
  [128, 94],
  [123, 106],
  [119, 120, 1],
  [113, 111],
  [104, 104],
  [92, 101],
  [80, 104],
  [72, 108, 1],
  [70, 92],
  [80, 80],
  [98, 72],
  [118, 69],
])

/** His slight shoulders in the motley coat. */
const COAT_PTS: Pt[] = [
  [-2, 340],
  [4, 298],
  [20, 266],
  [48, 244],
  [80, 234],
  [112, 238],
  [144, 234],
  [170, 244],
  [192, 266],
  [204, 298],
  [208, 340],
]
const COAT = spline(
  COAT_PTS.map(([x, y], i) => (i === 0 || i === COAT_PTS.length - 1 ? [x, y, 1] : [x, y])),
)

/** The plain band of the coat's collar round the foot of his neck. */
const COLLAR = spline([
  [66, 238, 1],
  [92, 229],
  [120, 230],
  [146, 236, 1],
  [140, 248],
  [118, 243],
  [92, 243],
  [70, 250, 1],
])

/**
 * The motley: bands across the coat at the kit's angle, falling from the far
 * shoulder towards the near side, every other one cut in paper. Each is a
 * long strip, and the coat's own outline clips it.
 */
const STRIPES = (() => {
  const a = deg(58)
  const u: Pt = [Math.cos(a), Math.sin(a)]
  const v: Pt = [-u[1], u[0]]
  const c: Pt = [104, 290]
  let d = ''
  for (let k = -6; k <= 6; k += 2) {
    const o: Pt = [c[0] + v[0] * k * 16, c[1] + v[1] * k * 16]
    const p0: Pt = [o[0] - u[0] * 160, o[1] - u[1] * 160]
    const p1: Pt = [o[0] + u[0] * 160, o[1] + u[1] * 160]
    const w = 7.4
    d +=
      `M${n(p0[0] + v[0] * w)} ${n(p0[1] + v[1] * w)}L${n(p1[0] + v[0] * w)} ${n(p1[1] + v[1] * w)}` +
      `L${n(p1[0] - v[0] * w)} ${n(p1[1] - v[1] * w)}L${n(p0[0] - v[0] * w)} ${n(p0[1] - v[1] * w)}Z`
  }
  return d
})()

type Marks = { hair: string; crest: string; nape: string; folds: string }

const marks = once((): Marks => {
  const r = rng(7401)
  const hair = strands(
    r,
    7,
    (t) => [136 - t * 60, 74 + t * 26],
    (t) => [122 - t * 44, 100 + t * 6],
    [0.6, 1],
    1.2,
  )
  // The ridges of the comb, fine ink lines along each lobe of the paper crest.
  const crest =
    gouge(150, 22, 138, 34, 0.9, 1.2) +
    gouge(128, -1, 120, 26, 1, 1.4) +
    gouge(98, -6, 96, 24, 1, 1.2) +
    gouge(70, -2, 74, 28, 0.9, -1) +
    gouge(52, 20, 62, 36, 0.8, -1)
  const nape = napeShade(7402, 150, 118, 72, 126)
  // Folds in the coat, cut as a few thin lines across the stripes.
  const folds = gouge(60, 262, 40, 336, 0.9, 1.6) + gouge(150, 262, 172, 336, 0.9, -1.4)
  return { hair, crest, nape, folds }
})

/** The Fool, head and shoulders, facing right in the 0..240 by 0..340 frame. */
export function FoolFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-fool-head`
  const coatClip = `${uid}-fool-coat`
  const hairClip = `${uid}-fool-hair`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={coatClip}>
          <path d={COAT} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* "The one in motley here": the coat in diagonal stripes */}
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${coatClip})`}>
        <path d={STRIPES} fill={PAPER} />
        <path d={m.folds} fill={INK} />
      </g>
      <path d={COAT} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g transform={turn(ROT)}>
        <path d={YOUTH_HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.nape} strokeWidth={1.4} />
          <path d={YOUTH_JAW} strokeWidth={1.6} />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={YOUTH_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={YOUTH_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        {/* "here's my coxcomb": the close cap and its crest, the crest in paper as the kit prints it */}
        <path d={CREST} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.crest} fill={INK} />
        <path d={CREST_LOBES} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={CAP_CUTS} fill={PAPER} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the nostril, the fold of the cheek, and the mouth turned up at its corner */}
          <path d="M174.5 126C170.5 123.5 170.6 118.5 175.6 117.5" strokeWidth={1.4} />
          <path d="M163 122Q157.6 130 158.6 139" strokeWidth={0.9} />
          <path d="M167.6 142.6Q163.4 145.4 158.6 141.4" strokeWidth={1.7} />
          <path d="M168.5 152.5C166 154 163.5 154 161.5 153" strokeWidth={0.9} />
          {/* the crease of a smile at the eye */}
          <path d="M145 101.6L139 104.6M145.4 104.6L140.6 109" strokeWidth={0.9} />
        </g>
        <YouthEye look="open" brow={2.4} />
      </g>
    </g>
  )
}

/** A thick ink halo round cap, crest, face and shoulders. */
function FoolKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={COAT} />
      <g transform={turn(ROT)}>
        <path d={YOUTH_HEAD} />
        <path d={CAP} />
        <path d={CREST} />
      </g>
    </g>
  )
}

const P = placing(44, 30, 0.88, true)

const ground = once(() =>
  // A hall in Albany's palace, the light ahead of him, to the left.
  portraitGround('lear-the-fool', 7410, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 270) * 0.84 - (y / PH) * 0.1),
  ),
)

function FoolPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <FoolKnockout />
        <FoolFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const theFoolPortrait: LinocutArt = { width: PW, height: PH, Draw: FoolPortrait }

const CREST_AT = onTurnedHead(P, ROT, 152, 18)
const CHEEK_AT = onTurnedHead(P, ROT, 138, 128)
const MOTLEY_AT = P.to(176, 284)

export const theFool: Portrait = {
  name: 'The Fool',
  art: theFoolPortrait,
  alt: "A linocut portrait of Lear's Fool in profile, facing left: a slight, beardless young man with a bright, level eye, the corner of his mouth turned up and a little dark hair at his temple. He wears the coxcomb, a close dark cap over his head and down to the back of his neck, with a pale crest of rounded lobes like a cock's comb along its top, and a coat of motley in broad diagonal stripes, dark and white. Three numbered red markers point to the crest of his cap, his cheek and the stripes of his coat.",
  describedBy: [
    { phrase: 'here’s my coxcomb', at: [CREST_AT[0] - 42, CREST_AT[1]], to: CREST_AT },
    { phrase: 'my pretty knave', at: CHEEK_AT },
    { phrase: 'The one in motley here', at: [MOTLEY_AT[0] - 40, MOTLEY_AT[1] - 6], to: MOTLEY_AT },
  ],
  where: 'Act 1, Scene 4',
  note: 'The Fool is licensed to tell the King what no courtier dares: that he gave his kingdom away and made his daughters his mothers. He follows Lear into the storm, and after Act 3 he is never seen again.',
  artNote:
    'The play names his cap and his coat but not their colours: as in the panels, the cap is printed in ink with its comb left pale, and the motley in stripes. His face is not described.',
}
