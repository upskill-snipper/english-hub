import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  ageLines,
  folds,
  MAN_HEAD,
  ManEye,
  NeckShadow,
  once,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
  waves,
  whiteBrow,
} from './common'

/**
 * The Earl of Kent in disguise, as the servant Caius who comes back to serve
 * the master who banished him:
 *
 *   "If but as well I other accents borrow, That can my speech defuse, my good
 *   intent May carry through itself to that full issue For which I rais'd my
 *   likeness." (Kent, Act 1, Scene 4)
 *   "I have years on my back forty-eight." (Kent to Lear, Act 1, Scene 4)
 *   "Spare my grey beard, you wagtail?" (Kent to Oswald, Act 2, Scene 2,
 *   answering Oswald's "This ancient ruffian, sir, whose life I have spared
 *   at suit of his grey beard")
 *
 * So: a man of forty-eight with a grey beard, his likeness changed, in plain
 * clothes. He is drawn as the figure kit draws him as Caius
 * (../panels/people.tsx): the hood of a plain servant's cape drawn up over his
 * head and close round his face, its edge round the face cut in paper, and
 * his grey beard full and trimmed round in front of it, cut in paper with so
 * many ink strands that it prints grey, between Lear's white and the dark
 * beards of the younger men. The play does not say how he changed his
 * likeness; the hood is the kit's way of showing it. His eye is open and level
 * under a grey brow: "'tis my occupation to be plain" (2.2). His head is
 * every man's head (MAN_HEAD). There is no red in this plate.
 *
 * MARKERS. "years on my back forty-eight" sits on his cheek, among the lines
 * of age, with no line. The hood's marker comes to it from behind, at its own
 * height, and the beard's from in front, at its own height: no line crosses
 * his face.
 *
 * Seeds: 7301 to 7308 (the figure's marks), 7310 (the ground).
 */

/** His head is lifted a very little: he faces his master squarely. */
const ROT = -2

/**
 * The hood, drawn up over the head and close round the face, falling to a
 * short cape over the shoulders: the kit's CAIUS_HOOD at the size of a
 * portrait. In ink.
 */
const HOOD = spline([
  [156, 76, 1],
  [153, 54],
  [140, 34],
  [114, 21],
  [84, 21],
  [58, 31],
  [40, 52],
  [31, 84],
  [29, 122],
  [29, 160],
  [24, 198],
  [10, 234],
  [-8, 262, 1],
  [40, 258],
  [92, 254],
  [134, 250, 1],
  [124, 236],
  [114, 214],
  [108, 190],
  [107, 164],
  [108, 138],
  [112, 114],
  [124, 94],
  [140, 82],
])
/** The hood's edge round the face, cut in paper: the kit's CAIUS_HOOD_EDGE. */
const HOOD_EDGE =
  'M155 77.6C145 80.6 132 87.6 122 98C114 108 110 122 109.6 138C109.2 160 109.6 186 115 208C119 222 125 234 132 248'

/** His grey beard: full and trimmed round, from in front of the ear to below the chin. */
const BEARD = spline([
  [116, 118, 1],
  [125, 135],
  [139, 142.6],
  [155, 141.6],
  [165.5, 136.6, 1],
  [172, 140],
  [177, 151],
  [179, 166],
  [177, 182],
  [170, 196],
  [158, 206],
  [142, 208],
  [128, 200],
  [118, 186],
  [112, 166],
  [110, 146],
  [111, 128],
])
const MOUSTACHE =
  'M169 138.6Q176.6 141.6 178.6 151.6M166.4 140.4Q172.8 145.4 173.6 155M163.4 141.6Q167.4 148 167 156.6M160.6 143Q162.6 148.6 161.6 155'
const MOUTH = 'M175.6 157L167 158'

/** His shoulders in a plain tunic, under the hood's cape. */
const BODY = spline([
  [-14, 336, 1],
  [-8, 296],
  [8, 262],
  [40, 240],
  [78, 230],
  [116, 234],
  [150, 230],
  [180, 242],
  [206, 266],
  [222, 300],
  [230, 336, 1],
])

type Marks = {
  beard: string
  brow: string
  age: string
  cheek: string
  light: string
  lightBack: string
  hood: string
  tunic: string
}

const marks = once((): Marks => {
  const r = rng(7301)
  // "Spare my grey beard": paper, cut through with so many ink strands that
  // it prints grey, in three layers that cross a little, as a grey beard
  // mixes white hair with dark.
  const beard =
    waves(
      7302,
      22,
      (t) => [116 + t * 54, 128 + Math.sin(t * Math.PI) * 12],
      (t) => [124 + t * 46, 192 + Math.sin(t * Math.PI) * 16],
      [0.8, 1.4],
      1.4,
    ) +
    waves(
      7303,
      14,
      (t) => [120 + t * 46, 140 + Math.sin(t * Math.PI) * 6],
      (t) => [128 + t * 36, 200 + Math.sin(t * Math.PI) * 6],
      [0.7, 1.2],
      1.8,
    ) +
    waves(
      7304,
      5,
      (t) => [112 + t * 6, 140 + t * 10],
      (t) => [124 + t * 10, 186 + t * 14],
      [1.6, 2.3],
      1,
    )

  // A grey brow: the white brow's strokes, more of them and heavier.
  const brow = whiteBrow(7305, 0.6) + whiteBrow(7306, 0)

  // Forty-eight years: lines on the brow under the hood, at the eye's corner
  // and on the cheek, fewer than the old men's.
  const age = ageLines(7307, 1)
  let cheek = ''
  for (let rad = 15; rad < 24; rad += 3.6)
    cheek += arcDashes(r, 141, 110, rad, deg(78), deg(132), [7, 14], [2, 5])

  // The light on the hood, from ahead of him: broken arcs cut in paper
  // round the dome of the head, closer and heavier towards the front; and
  // the folds of the hood and the cape, cut in paper.
  let light = ''
  let lightBack = ''
  for (let rad = 36; rad < 98; rad += 5.2) {
    light += arcDashes(r, 106, 116, rad, deg(238), deg(300), [16, 36], [4, 9])
    lightBack += arcDashes(r, 106, 116, rad, deg(170), deg(238), [12, 28], [6, 14])
  }
  const hood =
    gouge(92, 28, 44, 100, 1.4, 5) +
    gouge(60, 40, 36, 150, 1.3, 4) +
    gouge(42, 160, 22, 236, 1.5, 2) +
    gouge(84, 200, 62, 252, 1.4, 1) +
    gouge(118, 224, 104, 250, 1.2, 0.6)
  const tunic = folds(7308, [20, 210], [272, 286], 6)
  return { beard, brow, age, cheek, light, lightBack, hood, tunic }
})

/** Kent as Caius, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function KentFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-kent-head`
  const beardClip = `${uid}-kent-beard`
  const hoodClip = `${uid}-kent-hood`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
        <clipPath id={hoodClip}>
          <path d={HOOD} />
        </clipPath>
      </defs>
      {/* the plain tunic */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.tunic} fill={PAPER} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-kent`} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.age} strokeWidth={LINE.hairline} />
          <path d={m.cheek} strokeWidth={0.95} />
        </g>
        {/* the grey beard */}
        <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={INK} />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={MOUSTACHE} strokeWidth={1.3} />
          <path d={MOUTH} strokeWidth={1.6} />
          {/* the nostril */}
          <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
          <path d={m.brow} strokeWidth={1.2} />
        </g>
        <ManEye look="open" />
        {/* "For which I rais'd my likeness": the hood drawn up close round his face */}
        <path d={HOOD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hoodClip})`}>
          <path d={m.light} fill="none" stroke={PAPER} strokeWidth={2.1} strokeLinecap="round" />
          <path
            d={m.lightBack}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.1}
            strokeLinecap="round"
          />
        </g>
        <path d={m.hood} fill={PAPER} />
        <path
          d={HOOD_EDGE}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
          strokeLinecap="round"
        />
      </g>
    </g>
  )
}

/** A thick ink halo round hood, face, beard and shoulders. */
function KentKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={BODY} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HOOD} />
        <path d={BEARD} />
      </g>
    </g>
  )
}

const P = placing(42, -2, 1.04)

const ground = once(() =>
  // Before Gloucester's castle in the grey of morning, the light ahead of him.
  portraitGround('lear-kent', 7310, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.84 - (y / PH) * 0.12),
  ),
)

function KentPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <KentKnockout />
        <KentFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const kentPortrait: LinocutArt = { width: PW, height: PH, Draw: KentPortrait }

const HOOD_AT = onTurnedHead(P, ROT, 22, 104)
const AGE_AT = onTurnedHead(P, ROT, 134, 120)
const BEARD_AT = onTurnedHead(P, ROT, 176, 182)

export const kent: Portrait = {
  name: 'Kent',
  art: kentPortrait,
  alt: 'A linocut portrait of the Earl of Kent disguised as the servant Caius, in profile, facing right: a man of middle years with a steady, open eye under a grey brow and a few lines of age at his eye and on his cheek. The dark hood of a plain cape is drawn up over his head and close round his face, its edge cut in white, and falls over his shoulders. A full grey beard and moustache, trimmed round, fill the opening of the hood below his face. Three numbered red markers point to the hood, his cheek and his grey beard.',
  describedBy: [
    { phrase: 'For which I rais’d my likeness', at: [HOOD_AT[0] - 34, HOOD_AT[1]], to: HOOD_AT },
    { phrase: 'years on my back forty-eight', at: AGE_AT },
    { phrase: 'Spare my grey beard', at: [BEARD_AT[0] + 46, BEARD_AT[1]], to: BEARD_AT },
  ],
  where: 'Act 1, Scene 4; Act 2, Scene 2',
  note: 'Banished for speaking plainly, Kent changes his looks and his voice to serve the master who condemned him. The plain speaker in disguise is the most honest man in the play.',
  artNote:
    'The play does not say how he changed his likeness: the hood is how the panels show his disguise. His age and his grey beard are his own words.',
}
