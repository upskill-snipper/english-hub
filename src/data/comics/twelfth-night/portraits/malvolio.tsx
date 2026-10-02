import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
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
  quadPts,
  spline,
  turn,
} from './common'

/**
 * Malvolio, Olivia's steward, from what is said of him and what he says of
 * himself:
 *
 *   OLIVIA: "He is sad and civil, And suits well for a servant with my
 *   fortunes" (Act 3, Scene 4)
 *   MALVOLIO, of himself: "quenching my familiar smile with an austere regard
 *   of control" (Act 2, Scene 5)
 *   MARIA: "by the colour of his beard, the shape of his leg, the manner of
 *   his gait, the expressure of his eye, forehead, and complexion, he shall
 *   find himself most feelingly personated" (Act 2, Scene 3)
 *
 * So: a grave man ("sad" is serious, "civil" sober and orderly), bearded,
 * holding his face in a stern look of authority. Maria calls him "a kind of
 * Puritan" (Act 2, Scene 3), and Olivia "sick of self-love" (Act 1, Scene
 * 5).
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): sober black,
 * a plain white falling band for a collar where the gentlemen wear ruffs, the
 * steward's chain of office across his chest cut in paper (STEWARD_CHAIN,
 * the chain Sir Toby mocks: "Go, sir, rub your chain with crumbs", Act 2,
 * Scene 3), a neat pointed beard (MALVOLIO_BEARD, here with a moustache, its
 * strands cut in paper), his brow raised and arched and his eye half lidded
 * (MALVOLIO_BROW), and bareheaded, his dark hair cut short. His head is every
 * man's head (MAN_HEAD), held up a little.
 *
 * DIGNITY. This is Malvolio as Olivia values him, the steward who runs her
 * house, and the play's own words for him are the markers. He is drawn as a
 * man, never a grotesque: not in the yellow stockings of the trick played on
 * him, and nothing in his face is made a joke of. No marker is a line of the
 * abuse the others heap on him. There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 8601 (the figure), 8602 to 8604 (its marks), 8610 (the ground).
 */

/** His head held up: the steward's dignity. */
const ROT = -5

/** Short dark hair, cut close to the head, the ear clear. In the head's frame. */
const HAIR = spline([
  [158, 56, 1],
  [150, 42],
  [130, 31],
  [104, 28],
  [76, 34],
  [55, 50],
  [43, 74],
  [38, 104],
  [41, 132],
  [50, 154],
  [62, 166, 1],
  [76, 156],
  [86, 140],
  [91, 122],
  [95, 106],
  [106, 98],
  [118, 101],
  [124, 112],
  [126, 122, 1],
  [131, 106],
  [136, 88],
  [145, 70],
])

/**
 * The neat pointed beard: along the jaw from below the ear, round under the
 * lips, and drawn down to a point below the chin (the kit's MALVOLIO_BEARD,
 * "long to its point"). In the head's frame.
 */
const BEARD = spline([
  [112, 136, 1],
  [121, 151],
  [138, 160],
  [154, 160],
  [164, 156, 1],
  [172, 158.5],
  [175, 168],
  [174.5, 182],
  [171, 200],
  [165, 222, 1],
  [154, 206],
  [138, 196],
  [122, 184],
  [111, 162],
])
/** The moustache, its ends turned down into the beard, clear of the lips' line. */
const MOUSTACHE = spline([
  [168, 136.6, 1],
  [173, 139.6],
  [174.2, 145],
  [171, 148.6, 1],
  [164, 147],
  [157, 151, 1],
  [157.6, 143.4],
  [162, 139],
])

/** His shoulders in a sober black doublet. */
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
/**
 * The plain falling band, a flat white collar lying on the shoulders and
 * open at the throat, where the gentlemen wear ruffs.
 */
const BAND = spline([
  [64, 216, 1],
  [100, 226],
  [134, 226],
  [150, 216, 1],
  [163, 231],
  [174, 256, 1],
  [150, 252],
  [114, 252],
  [80, 246],
  [54, 232, 1],
])
const BAND_FOLD = 'M66 221Q108 234 149 220M150 217L155 238'
const BUTTONS: Pt[] = [
  [184, 262],
  [188.5, 277],
  [193, 292],
  [197, 307],
  [200.5, 322],
]

/**
 * The steward's chain of office, hung over his shoulders and across his
 * chest: a row of links cut in paper, from the shoulder at the neck down the
 * front of the chest, as the kit's stewardChain hangs it.
 */
const CHAIN_PATH = quadPts([112, 238], [150, 300], [214, 312], 14)

type Marks = { hair: string; beard: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  // Short strands cut in paper, combed back from the brow.
  let hair = ''
  for (let i = 0; i < 16; i++) {
    const t = (i + 0.5) / 16
    const x = 146 - t * 100
    const y = 44 + t * 30 + r() * 4
    hair += gouge(x, y, x - 12 - r() * 6, y + 10 + t * 26 + r() * 6, 0.8 + r() * 0.3, -1)
  }
  // The beard's strands, combed down to its point.
  let beard = ''
  for (let i = 0; i < 10; i++) {
    const t = (i + 0.5) / 10
    const x = 118 + t * 50
    const y = 157 + Math.sin(t * Math.PI) * 4
    beard += gouge(x, y, x + 2 + t * 5, y + 18 + t * 28 + r() * 4, 0.75 + r() * 0.25, -0.8)
  }
  beard += gouge(161, 141.6, 168, 146.4, 0.6, 0.5) + gouge(165, 139.4, 171.4, 145.6, 0.55, 0.5)
  const body = folds(seed + 1, [30, 160], [258, 276], 5)
  const m = { hair, beard, body }
  marksBySeed.set(seed, m)
  return m
}

/** The chain's links, each an oval turned along the chain, cut in paper with an ink hole. */
function Chain() {
  const links = []
  for (let i = 0; i < CHAIN_PATH.length - 1; i++) {
    const [x0, y0] = CHAIN_PATH[i]
    const [x1, y1] = CHAIN_PATH[i + 1]
    const cx = (x0 + x1) / 2
    const cy = (y0 + y1) / 2
    const a = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI
    const rx = Math.hypot(x1 - x0, y1 - y0) / 2 + 1
    const ry = i % 2 ? 2.4 : 3.6
    links.push(
      <g key={i} transform={`translate(${n(cx)} ${n(cy)}) rotate(${n(a)})`}>
        <ellipse rx={rx} ry={ry} fill={PAPER} stroke={INK} strokeWidth={1} />
        <ellipse rx={rx * 0.5} ry={ry * 0.32} fill={INK} />
      </g>,
    )
  }
  return <g>{links}</g>
}

/** Malvolio, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function MalvolioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-mal-hair-${seed}`
  const beardClip = `${uid}-mal-beard-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
          <path d={MOUSTACHE} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.4} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-mal-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        {/* "the colour of his beard": the neat pointed beard and moustache */}
        <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={1.1} strokeLinejoin="round" />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={PAPER} />
        </g>
        <ManNoseAndMouth />
        {/* "an austere regard of control": the brow raised and arched, the eye half lidded */}
        <path
          d="M141 88.5Q150 79.5 166 86"
          fill="none"
          stroke={INK}
          strokeWidth={3}
          strokeLinecap="round"
        />
        <ManEye look="down" />
        {/* the lines a grave face keeps: across the brow, and from nose to mouth */}
        <path
          d="M140 70Q151 66.4 162 69.4M142 77.4Q152 74.4 163 77"
          fill="none"
          stroke={INK}
          strokeWidth={1}
          strokeLinecap="round"
        />
      </g>
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path
        d={BAND_FOLD}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      {/* the steward's chain of office */}
      <Chain />
    </g>
  )
}

/** A thick ink halo round head, beard and shoulders. */
export function MalvolioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
        <path d={BEARD} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(40, 40, 0.86, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Olivia's house: a sober ground, the light ahead of him to the left.
  ground = portraitGround('twelfth-night-malvolio', 8610, (x, y) =>
    clamp(0.06 + ((PW - x - 70) / 280) * 0.74 - (y / PH) * 0.1),
  )
  return ground
}

function MalvolioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <MalvolioKnockout />
        <MalvolioFigure uid={uid} seed={8601} />
      </g>
      <PortraitRule />
    </>
  )
}

export const malvolioPortrait: LinocutArt = { width: PW, height: PH, Draw: MalvolioPortrait }

const EYE_AT = onTurnedHead(P, ROT, MAN_EYE[0] + 1, MAN_EYE[1] - 2)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. The line to the beard comes from behind
 * his head and stops at the back of the beard, below the ear, far from his
 * lips and his chin; the line to his face comes over the hair to the cheek.
 */
const BEARD_AT = onTurnedHead(P, ROT, 114, 150)
const FACE_AT = onTurnedHead(P, ROT, 140, 118)

export const malvolio: Portrait = {
  name: 'Malvolio',
  art: malvolioPortrait,
  alt: 'A linocut portrait of Malvolio, Olivia’s steward, in profile, facing left: a grave, upright man with his head held up, his brow raised and arched over a half-lidded eye, lines across his forehead, his dark hair cut short and a neat dark beard and moustache, the beard drawn to a point below his chin. He wears a sober black doublet with small pale buttons, a plain white collar lying flat on his shoulders, and the chain of his office, a row of white links, hanging across his chest. Three numbered red markers point to his eye, the back of his beard and his cheek.',
  describedBy: [
    { phrase: 'an austere regard of control', at: [EYE_AT[0] - 56, EYE_AT[1] - 30], to: EYE_AT },
    { phrase: 'the colour of his beard', at: [BEARD_AT[0] + 84, BEARD_AT[1] + 40], to: BEARD_AT },
    { phrase: 'He is sad and civil', at: [FACE_AT[0] + 70, FACE_AT[1] - 76], to: FACE_AT },
  ],
  where: 'Act 2, Scene 5; Act 2, Scene 3; Act 3, Scene 4',
  note: 'Malvolio pictures himself married to Olivia and practising a stern look to keep Sir Toby in his place. Maria plans to forge a letter that will fit his very beard and eye, and Olivia, who knows nothing of it, still values him as grave and dependable.',
  artNote:
    'The play does not describe his face beyond his beard. His black dress, plain collar and steward’s chain are how the panels draw him; the chain is the one Sir Toby mocks (“rub your chain with crumbs”).',
}
