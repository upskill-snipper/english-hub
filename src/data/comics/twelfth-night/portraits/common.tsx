import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  ruffBand,
  spline,
  turn,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from '../../the-tempest/portraits/common'

/**
 * What the Twelfth Night portraits share.
 *
 * The block, the cut ground behind a head, the paper rule, the outline and
 * placing helpers, the hand with its fingers kept apart, the garment folds,
 * the ruff, the ear, the man's head and the woman's head are the Shakespeare
 * portraits' own (Romeo and Juliet, Much Ado About Nothing, The Merchant of
 * Venice, The Tempest), re-exported here through
 * ../../the-tempest/portraits/common.tsx rather than copied: a second copy of
 * a helper is a copy that drifts, and one hand cutting all the plays keeps the
 * site one artist. Only what this play needs beyond them is defined below.
 *
 * THE LOOK OF EACH PERSON is the figure kit's (../panels/people.tsx), whose
 * docblock gives the lines of the play for it, so a student meets the same
 * person in the gallery as in the story: Viola as Cesario and Sebastian with
 * one face, one flat cap with a feather curling back from its band (the
 * "ornament" Viola copies), one small ruff, doublet and short cloak, and the
 * same dark hair curling at the nape, on Cesario the end of Viola's long hair
 * gathered up under the cap; Orsino young, his dark hair swept back to the
 * collar, with a short pointed beard, a ruff, a long cloak and a plain paper
 * circlet; Olivia in mourning, a black veil over her head and down her back,
 * her face framed by it and a flush on her cheek, never on her lips; Maria
 * small, in a linen coif; Sir Toby older and broad, his crown going bald,
 * with a full rounded beard and his collar worn loose; Sir Andrew long in
 * the face, his straight hair hanging pale to his shoulders; Feste sturdy, in
 * a fool's hood with its point hanging down his back and a dagged cape, and a
 * coat chequered in paper and ink; Malvolio in sober black with a plain
 * falling band, the steward's chain across his chest and a neat pointed
 * beard, his brow raised; Antonio a seaman past his youth, with a short full
 * beard and a knitted sea cap. The kit's hats, hair and beards are carried to
 * this size point for point (x' = 99.5 + 3.53x, y' = 114.9 + 3.84y, the
 * head's own frame), as the Tempest portraits carry theirs, and adjusted only
 * where a shape made for an ink head at panel size would not sit on a paper
 * face at this one; each portrait's docblock says where.
 *
 * ONE HEAD FOR EVERY MAN, ONE FOR EVERY WOMAN, AND ONE FOR THE TWINS. Every
 * man is cut from MAN_HEAD, the same brow, nose and ear, and is told from the
 * others by what the kit gives him: a beard, a bald crown, a hood, a cap, his
 * age, what he holds. The kit gives two men heads of their own, and so do
 * these portraits, as little changed as they can be: Sir Andrew's is
 * MAN_HEAD with the nose drawn longer and the chin set back (the kit's
 * HEAD_ANDREW), and Sir Toby's fuller jaw (the kit's HEAD_TOBY) is his
 * rounded beard over MAN_HEAD. Olivia and Maria are cut from WOMAN_HEAD. Viola and
 * Sebastian are cut from one head, TWIN_HEAD, the portraits' smooth young
 * face, which is the kit's HEAD_TWIN at this size ("softer in the nose and
 * chin than the men's"), because the play insists they are one face: "One
 * face, one voice, one habit, and two persons!" (Act 5, Scene 1).
 *
 * THE DISGUISE IS NEVER MOCKED. Viola chose it to survive alone in a strange
 * country ("Conceal me what I am", Act 1, Scene 2). Nothing in her portrait
 * makes a joke of her body or her dress.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Shakespeare describes the looks of very few
 * people in this play, so nobody wears anything the text or the kit does not
 * give them beyond the ordinary dress of Illyria about 1600. None of it comes
 * from a film, television or stage production. The markers on each portrait
 * point only at what the play does say, and where it says nothing of
 * someone's looks the card's small print says so.
 *
 * RED IS NEVER ON A MOUTH, A CHIN OR A HAND, and no marker line crosses one:
 * a red mark near a mouth reads at a glance as blood (it was caught twice in
 * earlier texts: Hyde's anger flush, and Juliet's lips beside the vial). The
 * spot colour marks three things only: Olivia's flush, on her cheek, where
 * Viola sees it ("whose red and white Nature's own sweet and cunning hand
 * laid on"); the wax of her seal on the letter Maria forges; and the shell of
 * Feste's tabor. Sir Toby's drinking is left to the words: no red nose, no
 * flush, no cup.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module that
 * every text's portraits share, and The Tempest has a Sebastian and an
 * Antonio and The Merchant of Venice an Antonio: every key here starts
 * "twelfth-night-", or a portrait would be printed on another play's ground.
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame and
 * placed with `placing`; one that faces left is flipped.
 */

export {
  bandAlong,
  Buttons,
  capsule,
  ear,
  folds,
  Hand,
  handPoint,
  hatch,
  lerp2,
  locks,
  MAN_CHEEK,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  MAN_HEAD_OPEN,
  MAN_MOUTH,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NECK_PIVOT,
  NeckShadow,
  neckShade,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quad2,
  quadPts,
  ruffBand,
  spline,
  strands,
  turn,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type Digit,
  type SP,
} from '../../the-tempest/portraits/common'

/**
 * The barbs of a feather: cuts either side of its quill, sloping back from it
 * towards the tip and reaching almost to the feather's edge, along the spine
 * `pts` of a ribbon `width` wide (as `ribbon` swells it, pow 0.5). Fill with
 * PAPER over the ink feather; the quill itself is one long cut. Dense and
 * bold enough to read as a feather at phone size: with a few fine barbs the
 * feather read as a dark curved blade.
 */
function featherCuts(seed: number, pts: Pt[], width: number, perSegment = 3): string {
  const r = rng(seed)
  let d = ''
  const k = pts.length - 1
  for (let i = 1; i <= k; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const L = Math.hypot(x1 - x0, y1 - y0) || 1
    const ux = (x1 - x0) / L
    const uy = (y1 - y0) / L
    for (let j = 0; j < perSegment; j++) {
      const f = (j + between(r, 0.2, 0.8)) / perSegment
      const t = (i - 1 + f) / k
      const half = (width / 2) * Math.pow(Math.max(Math.sin(Math.PI * t), 0.001), 0.5)
      if (half < 3) continue
      const cx = x0 + (x1 - x0) * f
      const cy = y0 + (y1 - y0) * f
      for (const side of [-1, 1]) {
        const nx = -uy * side
        const ny = ux * side
        const reach = half * between(r, 0.72, 0.9)
        d += gouge(
          cx + nx * 1.8,
          cy + ny * 1.8,
          cx + nx * reach + ux * reach * 0.55,
          cy + ny * reach + uy * reach * 0.55,
          between(r, 0.8, 1.1),
          between(r, -0.6, 0.6),
        )
      }
    }
  }
  return d
}

// ── The twins ───────────────────────────────────────────────────────────────

/** Viola's and Sebastian's one face: see the docblock above. */
export const TWIN_HEAD = WOMAN_HEAD
export const TWIN_EAR = WOMAN_EAR

/**
 * The twins' flat page's bonnet, tilted back on the head: the kit's TWIN_CAP
 * at this size. In the head's frame, so it turns with the head.
 */
export const TWIN_CAP =
  'M36 85.7C22.5 54.2 52.2 15.1 102.3 11.2C148.9 8.9 183.5 30.4 181.4 58.8C153.2 69.6 86.8 77.3 36 85.7Z'
/** The bonnet's band, cut in paper (the kit's TWIN_CAP_CUT), and the light on its crown. */
export const TWIN_CAP_BAND = gouge(39.5, 75.7, 174.3, 54.2, 3.2, -2.8)
export const TWIN_CAP_LIGHT = gouge(62, 40, 150, 26, 1.3, -3) + gouge(76, 52, 164, 40, 0.9, -2.5)

/**
 * "ornament": the feather curling back from the bonnet's band over the crown
 * and down behind the head, the kit's TWIN_FEATHER at this size (a little
 * narrower, so it does not outweigh the face). Nobody else in the play wears
 * one.
 */
export const TWIN_FEATHER_SPINE: Pt[] = [
  [124.2, 16.6],
  [104, 6],
  [88.9, 0.5],
  [66, -1.6],
  [46.6, -1.1],
  [26, 4],
  [7.7, 12.8],
  [-6, 24],
  [-18.4, 39.6],
  [-26, 56],
  [-29, 71.1],
  [-28, 86],
  [-24, 98],
]
export const TWIN_FEATHER = ribbon(TWIN_FEATHER_SPINE, 24, 0.5, true)
export const TWIN_FEATHER_QUILL = ribbon(TWIN_FEATHER_SPINE.slice(0, 12), 3.4, 0.8, true)
export const TWIN_FEATHER_BARBS = featherCuts(8001, TWIN_FEATHER_SPINE, 24, 4)
/** The middle of the feather, where it curls over the back of the head: for a marker. */
export const TWIN_FEATHER_AT: Pt = TWIN_FEATHER_SPINE[6]

/**
 * The twins' dark hair under the bonnet: at the temple, over the ear, and
 * down the back of the neck, curling to the collar a little longer than a
 * man's, as the kit's TWIN_NAPE does. On Cesario it is the end of Viola's
 * long hair gathered up under the cap. (The kit's shape, made for an ink
 * head at panel size, is cut on out to the ear here, so no band of bare
 * skin is left between hair and ear.)
 */
export const TWIN_HAIR = spline([
  [146, 64, 1],
  [135, 83],
  [129, 100],
  [126, 117, 1],
  [118, 104],
  [104, 98],
  [91, 104],
  [86, 122],
  [84, 144],
  [80, 166],
  [75, 186],
  [72, 200],
  [70, 214, 1],
  [60, 206],
  [50, 188],
  [41, 164],
  [35, 136],
  [33, 108],
  [36, 86, 1],
  [88, 76],
  [128, 66],
])
/** Where the hair curls at the nape, in the head's frame: for a marker. */
export const TWIN_NAPE_AT: Pt = [60, 190]

/** The twins' shoulders, slighter than the men's, in the doublet. */
export const TWIN_BODY = spline([
  [-4, 336, 1],
  [2, 298],
  [18, 266],
  [46, 240],
  [78, 226],
  [112, 232],
  [146, 226],
  [174, 238],
  [198, 262],
  [214, 296],
  [222, 336, 1],
])
/** The short cloak over the far shoulder, as the kit gives them both. */
export const TWIN_CLOAK = spline([
  [-4, 336, 1],
  [0, 302],
  [14, 270],
  [40, 244],
  [72, 228],
  [98, 230],
  [90, 256],
  [86, 294],
  [86, 336, 1],
])
/** The small ruff every gentleman in the kit wears, the twins' too. */
export const TWIN_RUFF = ruffBand(74, 152, 206, 228, 6, 0.06)
/** The doublet's front edge, and its buttons. */
const TWIN_FRONT = 'M160 246Q178 284 192 336'
export const TWIN_BUTTONS: Pt[] = [
  [170, 266],
  [176.5, 281],
  [182.5, 296],
  [188, 311],
  [193, 326],
]

/**
 * The twins' features: WomanFace's nostril, lips, chin and brow, with an eye
 * that is `open`, level and steady, or `lowered`, the lid heavy and the eye
 * still open under it, looking down at something held before them.
 * (WomanFace's own `down` eye is shut, with its lashes on the cheek, and at
 * portrait size it read as asleep.)
 */
export function TwinFace({ eye = 'open' }: { eye?: 'open' | 'lowered' }) {
  if (eye === 'open') return <WomanFace eye="open" />
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
      <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
      <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
      <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
      <path d="M143 84.5Q152 81.5 161 84.5" strokeWidth={2} />
      {/* the lid heavy and level, the eye open under it and looking down */}
      <path d="M145 96.4Q152.5 94.6 160.5 96.4" strokeWidth={2.4} />
      <path d="M150.4 97.4A3.1 2.8 0 0 0 156.6 97.4Z" fill={INK} stroke="none" />
      <path d="M146.5 101.2Q153 103.6 159.5 100.6" strokeWidth={1} />
      <path d="M145.5 91.6Q152.5 89.4 159.5 91.2" strokeWidth={LINE.hairline} />
    </g>
  )
}

type TwinMarks = { hair: string; body: string; cloak: string; curl: string }

const twinMarksBySeed = new Map<number, TwinMarks>()
function twinMarks(seed: number): TwinMarks {
  const hit = twinMarksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  // Strands cut in paper, lying back from the temple and down the nape.
  let hair = ''
  for (let i = 0; i < 18; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 18
    const x0 = 138 - t * 96
    const y0 = 78 + t * 8 + between(r, -2, 2)
    hair += gouge(
      x0,
      y0,
      x0 - between(r, 6, 14) + t * 10,
      y0 + between(r, 34, 70) * (0.5 + t * 0.9),
      between(r, 0.7, 1.1),
      between(r, -2, -0.5),
    )
  }
  // the turn of the curl at the nape, cut in paper
  const curl = 'M66 206C60 204 56 196 60 190C63 186 68 188 67 193'
  const body = folds(seed + 1, [104, 180], [262, 282], 4)
  const cloak = folds(seed + 2, [6, 80], [266, 290], 5)
  const m = { hair, body, cloak, curl }
  twinMarksBySeed.set(seed, m)
  return m
}

/**
 * Viola as Cesario, or Sebastian: one figure, head and shoulders, facing
 * right in the 0..240 by 0..332 frame. The head is turned by `rot` degrees
 * about the neck; `children` are drawn over the finished figure, in its
 * frame (a hand, what it holds).
 */
export function TwinFigure({
  uid,
  seed,
  rot,
  eye = 'open',
  children,
}: {
  uid: string
  seed: number
  rot: number
  eye?: 'open' | 'lowered'
  children?: ReactNode
}) {
  const m = twinMarks(seed)
  const id = `${uid}-twin-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-hair`}>
          <path d={TWIN_HAIR} />
        </clipPath>
      </defs>
      {/* the doublet, and the short cloak over the far shoulder */}
      <path d={TWIN_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={TWIN_FRONT} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <Buttons pts={TWIN_BUTTONS} r={2.6} />
      <path
        d={TWIN_CLOAK}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.cloak} fill={PAPER} />
      <g transform={turn(rot)}>
        <path d={TWIN_HEAD} fill={PAPER} />
        <WomanNeckShadow id={id} />
        <path
          d={TWIN_HAIR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${id}-hair)`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={m.curl} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
        <path d={TWIN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
        <path d={TWIN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} />
        <TwinFace eye={eye} />
        {/* the bonnet, its band, and the feather curling back from it */}
        <path
          d={TWIN_CAP}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={TWIN_CAP_LIGHT} fill={PAPER} />
        <path d={TWIN_CAP_BAND} fill={PAPER} />
        <path
          d={TWIN_FEATHER}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={TWIN_FEATHER_BARBS} fill={PAPER} />
        <path d={TWIN_FEATHER_QUILL} fill={PAPER} />
      </g>
      <path d={TWIN_RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TWIN_RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      {children}
    </g>
  )
}

/** A thick ink halo round a twin's head, bonnet, feather and shoulders. */
export function TwinKnockout({ rot }: { rot: number }) {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(rot)}>
        <path d={TWIN_HEAD} />
        <path d={TWIN_HAIR} />
        <path d={TWIN_CAP} />
        <path d={TWIN_FEATHER} />
      </g>
      <path d={TWIN_BODY} />
    </g>
  )
}

/** Where the twins' cheek is, in the head's frame, for markers. */
export const TWIN_CHEEK: Pt = [140, 120]
