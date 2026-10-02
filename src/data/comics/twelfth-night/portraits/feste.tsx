import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, type Pt } from '@/components/comics/linocut/carve'

import {
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
} from './common'

/**
 * Feste, Olivia's fool, from what he says of himself and what Viola says to
 * him:
 *
 *   FESTE: "I wear not motley in my brain." (Act 1, Scene 5)
 *   VIOLA: "Save thee, friend, and thy music. Dost thou live by thy tabor?"
 *   (Act 3, Scene 1, after "Enter Viola and Clown with a tabor")
 *   FESTE, putting on the curate's gown: "I am not tall enough to become the
 *   function well, nor lean enough to be thought a good student" (Act 4,
 *   Scene 2)
 *
 * So: the fool's motley, which he wears on his back and not in his head; the
 * tabor, the small drum he plays; and a man neither tall nor lean. In the same
 * speech of Act 1, Scene 5 he names the hood ("cucullus non facit monachum",
 * the hood does not make the monk); the Latin is printed in italics in the
 * held edition, so it is not a marker. Curio says he is "a fool that the Lady
 * Olivia's father took much delight in" (Act 2, Scene 4), so he is no
 * youth. Nothing else of his looks is given.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): sturdy, in
 * a fool's hood close round his face, its long point hanging down behind his
 * head like a tail and a short cape over his shoulders cut into dags along
 * its edge (FESTE_HOOD, carried to this size point for point, with the paper
 * edge round his face and the seam of the point, FESTE_HOOD_CUT); a coat
 * chequered in paper and ink, squares and not the Tempest jester's lozenges;
 * no bells and no ass's ears; and his tabor (the kit's Tabor), here hung on a
 * cord over his shoulder and riding at his chest, its head cut in paper, its
 * cords in ink and its shell printed in the spot colour: the one red in the
 * plate, for the music he lives by. His head is every man's head (MAN_HEAD),
 * clean-shaven (the beard he wears as Sir Topas is a false one, "put on this
 * gown and this beard", Act 4, Scene 2), with a knowing half-smile.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 9001 (the figure), 9010 (the ground).
 */

/** His head held level, a little cocked: he is about to answer back. */
const ROT = 3

/**
 * The fool's hood: close round the face, its long point hanging from the
 * crown down behind his head, and the dagged cape over his shoulders. The
 * kit's FESTE_HOOD at this size, in the head's frame.
 */
const HOOD =
  'M152.5 71.1C143.3 34.3 104.4 15.1 67.7 26.6C43 22.7 18.3 34.3 4.2 61.1C-9.9 91.9 -17 130.3 -14.9 168.7L1.4 172.5C4.2 137.9 11.3 107.2 26.8 84.2C34.5 114.9 32.4 153.3 24 184L14.8 214.7L33.8 205.5L44.4 228.6L62.1 210.9L76.9 232.4L93.9 213.2L108 228.6L118.6 205.5C108 180.2 100.9 145.6 105.9 114.9C110.8 91.9 128.4 75 152.5 71.1Z'
/** The paper edge round his face, and the seam of the point (the kit's FESTE_HOOD_CUT). */
const HOOD_EDGE = 'M151 72.4C128 76.4 111 92.4 107 116C102.4 146 109.4 180 119.6 204'
const HOOD_SEAM = 'M57 25C40 27 24 40 14 62C6 82 0 110 -4 140'
const HOOD_FOLDS =
  gouge(110, 34, 66, 60, 1.4, 2) +
  gouge(80, 80, 60, 170, 1.6, 2.4) +
  gouge(64, 92, 44, 196, 1.4, 1.6)

/** The cape's front, carried round the front of his throat under the jaw, over the shoulders. */
const CAPE = spline([
  [20, 200, 1],
  [56, 214],
  [100, 220],
  [140, 212],
  [172, 222, 1],
  [178, 240],
  [168, 246, 1],
  [160, 262],
  [148, 248, 1],
  [136, 264],
  [124, 250, 1],
  [110, 266],
  [98, 252, 1],
  [84, 266],
  [72, 250, 1],
  [58, 264],
  [48, 246, 1],
  [34, 258],
  [26, 238, 1],
  [12, 246],
])

/** His sturdy shoulders and chest in the motley coat. */
const BODY = spline([
  [-18, 336, 1],
  [-12, 290],
  [6, 252],
  [38, 226],
  [78, 214],
  [116, 220],
  [156, 214],
  [192, 228],
  [222, 256],
  [242, 296],
  [250, 336, 1],
])

/**
 * "I wear not motley in my brain": the coat chequered, every other square
 * cut in paper, as the kit cuts it.
 */
let chequerCache: string | undefined
function chequer(): string {
  if (chequerCache) return chequerCache
  const s = 17
  let d = ''
  for (let row = 0; row < 8; row++)
    for (let col = 0; col < 18; col++) {
      if ((row + col) % 2) continue
      const x = -24 + col * s
      const y = 214 + row * s
      d += `M${n(x)} ${n(y)}H${n(x + s)}V${n(y + s)}H${n(x)}Z`
    }
  chequerCache = d
  return d
}

/**
 * "Dost thou live by thy tabor?": the small drum, hung on a cord over his
 * shoulder and riding at his chest, its head turned towards us. In the
 * figure's frame.
 */
const TABOR_AT: Pt = [196, 300]
const TABOR_CORD = 'M150 214Q176 240 186 274'

/** His features: the nostril, a knowing half-smile, and the fold of the cheek. */
function FesteFace() {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
      <path d="M170 148.4Q166 149 162 146" strokeWidth={1.7} />
      <path d="M165 124Q158 134 159.4 146" strokeWidth={1.1} />
      <path d="M146 112Q140 124 142 136" strokeWidth={0.9} />
    </g>
  )
}

/** Feste, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function FesteFigure({ uid, seed }: { uid: string; seed: number }) {
  const coatClip = `${uid}-fes-coat-${seed}`
  const [tx, ty] = TABOR_AT
  return (
    <g>
      <defs>
        <clipPath id={coatClip}>
          <path d={BODY} />
        </clipPath>
      </defs>
      {/* the motley coat, chequered */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${coatClip})`}>
        <path d={chequer()} fill={PAPER} />
        <path d={chequer()} fill="none" stroke={INK} strokeWidth={1} />
      </g>
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-fes-${seed}`} />
        <FesteFace />
        <ManBrow w={2.8} raise={2.4} />
        <ManEye look="laugh" />
        {/* the fool's hood, its point hanging behind his head */}
        <path d={HOOD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={HOOD_FOLDS} fill={PAPER} />
        <path d={HOOD_EDGE} fill="none" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
        <path d={HOOD_SEAM} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      </g>
      {/* the hood's dagged cape over his shoulders */}
      <path d={CAPE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      {/* the tabor on its cord */}
      <path d={TABOR_CORD} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
      <g transform={`translate(${tx} ${ty}) rotate(-14)`}>
        <path
          d="M-30 -14L30 -14L30 22L-30 22Z"
          fill={RED}
          stroke={INK}
          strokeWidth={6}
          strokeLinejoin="round"
          paintOrder="stroke"
        />
        <path d="M-30 -14L30 -14L30 22L-30 22Z" fill={RED} stroke={PAPER} strokeWidth={1.4} />
        <path
          d="M-26 -8L-16 18M-16 -8L-6 18M-6 -8L4 18M4 -8L14 18M14 -8L24 18"
          fill="none"
          stroke={INK}
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <path d="M-30 18L30 18M-30 -8L30 -8" fill="none" stroke={INK} strokeWidth={1.4} />
        <ellipse cx={0} cy={-14} rx={30} ry={9} fill={PAPER} stroke={INK} strokeWidth={1.6} />
        <ellipse cx={0} cy={-14} rx={24} ry={6.4} fill="none" stroke={INK} strokeWidth={0.8} />
      </g>
    </g>
  )
}

/** A thick ink halo round head, hood and shoulders. */
export function FesteKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HOOD} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(28, 34, 0.84, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Olivia's house: the light ahead of him, to the left.
  ground = portraitGround('twelfth-night-feste', 9010, (x, y) =>
    clamp(0.1 + ((PW - x - 50) / 280) * 0.82 - (y / PH) * 0.1),
  )
  return ground
}

function FestePortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <FesteKnockout />
        <FesteFigure uid={uid} seed={9001} />
      </g>
      <PortraitRule />
    </>
  )
}

export const festePortrait: LinocutArt = { width: PW, height: PH, Draw: FestePortrait }

const COAT_AT = P.to(60, 300)
const TABOR_MARK = P.to(TABOR_AT[0] - 6, TABOR_AT[1] - 26)
const SHOULDER_AT = P.to(30, 236)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. No marker here goes to his face.
 */

export const feste: Portrait = {
  name: 'Feste',
  art: festePortrait,
  alt: 'A linocut portrait of Feste, Olivia’s fool, in profile, facing left: a sturdy, clean-shaven man past his youth, his eye creased and his brow raised in a knowing half-smile. He wears a black fool’s hood close round his face, edged in white, its long point hanging down behind his head like a tail, with a short cape over his shoulders cut into points along its edge, and below it a coat chequered in black and white squares. A small drum, a tabor, hangs on a cord over his shoulder and rides at his chest, its round head white and its shell printed in red with its cords zigzagging across it. Three numbered red markers point to his chequered coat, the tabor and his broad shoulders.',
  describedBy: [
    { phrase: 'I wear not motley in my brain', at: [COAT_AT[0] + 30, COAT_AT[1] + 2], to: COAT_AT },
    {
      phrase: 'Dost thou live by thy tabor?',
      at: [TABOR_MARK[0] - 8, TABOR_MARK[1] - 44],
      to: TABOR_MARK,
    },
    {
      phrase: 'nor lean enough to be thought a good student',
      at: [SHOULDER_AT[0] + 10, SHOULDER_AT[1] - 70],
      to: SHOULDER_AT,
    },
  ],
  where: 'Act 1, Scene 5; Act 3, Scene 1; Act 4, Scene 2',
  note: 'Feste is a professional fool, paid to joke and sing, and often the wisest voice in the play: his motley is on his back, he says, not in his brain. Viola admires the wit it takes to play the fool well, and the play ends with Feste alone, singing.',
  artNote:
    'The play does not describe his face. His hood, cape and chequered coat are how the panels draw a fool of the time, with no bells. The red is the shell of his tabor.',
}
