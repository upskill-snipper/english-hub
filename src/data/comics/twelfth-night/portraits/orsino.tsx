import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  turn,
} from './common'

/**
 * Orsino, Duke of Illyria, as Olivia describes him to Cesario in Act 1,
 * Scene 5, even as she refuses him:
 *
 *   "Yet I suppose him virtuous, know him noble, Of great estate, of fresh
 *   and stainless youth; In voices well divulg'd, free, learn'd, and valiant,
 *   And in dimension and the shape of nature, A gracious person."
 *
 * So: a young man ("fresh and stainless youth"), well made in the shoulders
 * ("in dimension and the shape of nature"), and the ruler of Illyria, "of
 * great estate". The Captain calls him "A noble duke, in nature as in name"
 * (Act 1, Scene 2). Nothing else of his looks is given.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): young, his
 * dark hair swept back from the brow over the crown and falling to the
 * collar behind (the kit's ORSINO_HAIR, cut on out to the ear at this size,
 * so no band of bare skin is left between hair and ear); a short pointed
 * beard (the kit's ORSINO_BEARD, invented there so the master is told from
 * his beardless page at a glance), along the jaw from below the ear to a
 * point under the chin, its strands cut in paper, leaving the lips clear; the
 * small ruff; a cloak over the far shoulder (the kit's falls to the knee);
 * and the plain paper circlet of the ruler of Illyria (the Much Ado kit's
 * CIRCLET, which its Prince wears; carried to this size point for point its
 * points stood half as tall as the head and it read as a crown, so they are
 * cut lower here).
 * His head is every man's head (MAN_HEAD), lifted a little, the eye level:
 * he is a duke at ease in his own house, listening to his music ("If music
 * be the food of love, play on", Act 1, Scene 1). There is no red in this
 * plate.
 *
 * Seeds: 8301 (the figure), 8302 to 8306 (its marks), 8310 (the ground).
 */

/** His head lifted a little: the music. */
const ROT = -4

/**
 * Dark hair swept back from the brow over the crown and falling to the
 * collar behind, the ear clear. In the head's frame.
 */
const HAIR = spline([
  [160, 60, 1],
  [154, 41],
  [132, 27],
  [102, 22],
  [72, 28],
  [49, 43],
  [35, 66],
  [29, 96],
  [31, 128],
  [37, 160],
  [46, 186],
  [56, 204],
  [64, 194],
  [72, 208],
  [80, 196],
  [86, 176],
  [91, 152, 1],
  [92, 130],
  [96, 110],
  [107, 100],
  [119, 103],
  [125, 114],
  [127, 126, 1],
  [133, 112],
  [137, 93],
  [146, 75],
])

/**
 * The short pointed beard: along the jaw from below the ear, round under the
 * lips without touching them, to a point under the chin. In the head's frame.
 */
const BEARD = spline([
  [116, 140, 1],
  [124, 154],
  [140, 162],
  [155, 162],
  [164, 158, 1],
  [171.5, 160],
  [174.5, 170],
  [173.5, 182],
  [168, 195, 1],
  [156, 192],
  [140, 190],
  [126, 180],
  [116, 160],
])

/**
 * "Of great estate": the plain circlet of the ruler of Illyria, cut in
 * paper, round the head above the brow, with low points along its top edge:
 * the Much Ado kit's CIRCLET, as the Twelfth Night kit gives it to Orsino.
 */
const CIRCLET =
  'M45 80L44 66L58 72L72 58L87 68L103 55L118 66L133 54L146 66L156 62L155 84C126 74 76 72 45 80Z'
/** The circlet's band, its upper edge cut in ink so it reads as a band on the head. */
const CIRCLET_LINE = 'M46 75C78 69 122 70 155 78'

/** His shoulders in the doublet. */
const BODY = spline([
  [-12, 336, 1],
  [-6, 294],
  [12, 258],
  [44, 230],
  [78, 216],
  [112, 222],
  [148, 216],
  [180, 228],
  [208, 256],
  [226, 294],
  [236, 336, 1],
])
/** The cloak hung from the far shoulder, its front edge falling back from the neck. */
const CLOAK = spline([
  [-12, 336, 1],
  [-8, 298],
  [6, 262],
  [32, 236],
  [64, 222],
  [96, 221, 1],
  [84, 248],
  [66, 286],
  [50, 336, 1],
])
const RUFF = ruffBand(72, 154, 202, 226, 6, 0.06)
/** The doublet's front edge, and its buttons. */
const FRONT = 'M176 236Q192 280 204 336'
const BUTTONS: Pt[] = [
  [181, 252],
  [186.5, 268],
  [191.5, 284],
  [196, 300],
  [200, 316],
]

type Marks = { hair: string; beard: string; body: string; cloak: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  // Strands cut in paper, swept back from the brow over the crown and down
  // to the collar.
  const hair =
    locks(
      seed + 1,
      22,
      (t) => [156 - t * 112, 46 - t * 14 + t * t * 40],
      (t) => [92 - t * 40, 128 + t * 66],
      [0.9, 1.5],
      -10,
      1.4,
    ) +
    locks(
      seed + 2,
      4,
      (t) => [136 - t * 8, 90 + t * 8],
      (t) => [126 - t * 2, 120 + t * 4],
      [0.8, 1.1],
      -1,
    )
  // The beard's strands, combed down and forward to its point.
  const r = rng(seed + 3)
  let beard = ''
  for (let i = 0; i < 9; i++) {
    const t = (i + 0.5) / 9
    const x = 118 + t * 50
    const y = 156 + Math.sin(t * Math.PI) * 4
    beard += gouge(x, y, x + 2 + t * 4, y + 20 + t * 18 + r() * 4, 0.75 + r() * 0.3, -0.8)
  }
  const body = folds(seed + 4, [110, 190], [262, 280], 3)
  const cloak = folds(seed + 5, [0, 70], [262, 286], 5)
  const m = { hair, beard, body, cloak }
  marksBySeed.set(seed, m)
  return m
}

/** Orsino, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function OrsinoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-ors-hair-${seed}`
  const beardClip = `${uid}-ors-beard-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={FRONT} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <Buttons pts={BUTTONS} r={2.6} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-ors-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        {/* the short pointed beard, below the lips */}
        <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={PAPER} />
        </g>
        {/* "of fresh and stainless youth": a young face, unlined */}
        <ManNoseAndMouth />
        <ManBrow w={2.6} />
        <ManEye look="open" />
        {/* "Of great estate": the circlet of the ruler of Illyria */}
        <path
          d={CIRCLET}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <path d={CIRCLET_LINE} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, hair, circlet and shoulders. */
export function OrsinoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
        <path d={BEARD} />
        <path d={CIRCLET} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(44, 42, 0.86)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A room in his palace: the light ahead of him, as he listens.
  ground = portraitGround('twelfth-night-orsino', 8310, (x, y) =>
    clamp(0.12 + ((x - 40) / 280) * 0.8 - (y / PH) * 0.1),
  )
  return ground
}

function OrsinoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <OrsinoKnockout />
        <OrsinoFigure uid={uid} seed={8301} />
      </g>
      <PortraitRule />
    </>
  )
}

export const orsinoPortrait: LinocutArt = { width: PW, height: PH, Draw: OrsinoPortrait }

const CIRCLET_AT = onTurnedHead(P, ROT, 133, 62)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. The line to his cheek comes from behind
 * his head, over the hair and the ear, and stops on the cheek above the
 * beard.
 */
const FACE_AT = onTurnedHead(P, ROT, MAN_EYE[0] - 14, MAN_EYE[1] + 24)
const CLOAK_AT = P.to(40, 268)

export const orsino: Portrait = {
  name: 'Orsino',
  art: orsinoPortrait,
  alt: 'A linocut portrait of Orsino, Duke of Illyria, in profile, facing right: a young man with a smooth, unlined face, his head lifted a little and his eye open and level. His dark hair is swept back from his brow over his head and falls to his collar behind, its strands cut in white, and a short dark pointed beard runs along his jaw to a point under his chin, below his lips. Round his head above the brow is a plain white circlet with low points. He wears a small white ruff, a dark doublet buttoned down the front, and a dark cloak hung from his far shoulder. Three numbered red markers point to his circlet, his cheek and his cloaked shoulder.',
  describedBy: [
    { phrase: 'Of great estate', at: [CIRCLET_AT[0] + 54, CIRCLET_AT[1] - 12], to: CIRCLET_AT },
    {
      phrase: 'of fresh and stainless youth',
      at: [FACE_AT[0] - 124, FACE_AT[1] - 24],
      to: FACE_AT,
    },
    { phrase: 'A gracious person', at: [CLOAK_AT[0] - 42, CLOAK_AT[1] + 20], to: CLOAK_AT },
  ],
  where: 'Act 1, Scene 5',
  passage:
    'Yet I suppose him virtuous, know him noble, Of great estate, of fresh and stainless youth; In voices well divulg’d, free, learn’d, and valiant, And in dimension and the shape of nature, A gracious person.',
  note: 'Olivia grants that Orsino has every gift a suitor could want (rank, wealth, youth, learning, courage and good looks) and still cannot love him. Love in this play does not follow merit.',
  artNote:
    'The play does not describe his face or dress. His circlet, beard, ruff and cloak are how the panels draw him: the circlet marks the ruler of Illyria, and the beard tells him from his beardless page.',
}
