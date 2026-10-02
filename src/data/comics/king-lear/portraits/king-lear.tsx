import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  ageLines,
  along,
  bandAlong,
  EarCut,
  folds,
  furStrokes,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  napeShade,
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
 * King Lear, as Cordelia sees him in Act 4, Scene 7, asleep in her tent in
 * the fresh garments her people have put on him:
 *
 *   "Had you not been their father, these white flakes Did challenge pity of
 *   them. Was this a face To be oppos'd against the warring winds? ... to
 *   watch, poor perdu! With this thin helm?"
 *
 * So: an old man with white hair, thin on the crown ("this thin helm", his
 * only helmet against the storm), the rest of it white at the sides and back
 * of his head ("these white flakes"), and a face lined by age and weather
 * ("Was this a face To be oppos'd against the warring winds?"). The rest is
 * from his own words: he has a beard, and it is white ("Art not asham'd to
 * look upon this beard?", 2.4; "told me I had white hairs in my beard ere
 * the black ones were there", 4.6), and he is "Fourscore and upward" (4.7).
 * The Fool's "thy bald crown" (1.4) agrees with Cordelia's thin helm.
 *
 * He is drawn bareheaded, as Cordelia sees him, with no crown: the play
 * never describes the crown he gives away. His head is every man's head
 * (MAN_HEAD), bowed a little, the lid heavy over an eye that looks down: "I
 * am a very foolish fond old man" (4.7), not a madman. The brow is white,
 * its inner end lifted a little. His gown is the plain dark gown of a king
 * of the time, with a collar of fur ("Robes and furr'd gowns", his own words
 * in 4.6), invented only so that the king is known in it. There is no red in
 * this plate.
 *
 * MARKERS. "Was this a face" sits on his cheek with no line. The other two
 * come to his head from behind, at the height of what they mark: no line
 * crosses his face, and none comes down from above his head.
 *
 * Seeds: 7101 to 7113 (the figure's marks), 7120 (the ground).
 */

/** His head is bowed a little. */
const ROT = 4

/**
 * His white hair: the crown left bare, the hair beginning at the temple and
 * round the back of the head at the level of the ear's top, lying close to
 * the skull and falling behind the ear to the nape and the collar. It is
 * paper, like the scalp it grows from, with no line between them: the hair
 * is told by its strands, and its outer edge is broken into the ends of
 * locks, so it never reads as a hood.
 */
const HAIR = spline([
  [136, 94, 1],
  [118, 86],
  [96, 82],
  [74, 85],
  [56, 94],
  [45, 107, 1],
  [38, 117],
  [41, 125, 1],
  [35, 140],
  [38, 150, 1],
  [34, 166],
  [38, 176, 1],
  [35, 194],
  [41, 202, 1],
  [40, 220],
  [47, 226, 1],
  [49, 243],
  [57, 238, 1],
  [63, 252],
  [69, 240, 1],
  [79, 250],
  [83, 236, 1],
  [92, 234],
  [96, 218, 1],
  [100, 200],
  [102, 178],
  [105, 160],
  [110, 147],
  [116, 133],
  [121, 119],
  [128, 106],
])
/** The line the hair grows from, at the edge of the bare crown, from the temple back. */
const FRINGE: Pt[] = [
  [134, 92],
  [118, 84],
  [96, 80],
  [74, 83],
  [56, 92],
  [45, 108],
  [40, 124],
]
/** Where the locks end, from the sideburn in front of the ear back to the nape. */
const ENDS: Pt[] = [
  [116, 140],
  [104, 168],
  [94, 206],
  [84, 236],
  [68, 246],
  [54, 242],
  [46, 230],
]

/**
 * The long white beard, from the sideburn in front of the ear round the jaw,
 * covering the corners of the mouth and the chin, and falling in waves to a
 * blunt point on his chest.
 */
const BEARD = spline([
  [122, 118, 1],
  [130, 134],
  [143, 142],
  [155, 141.6],
  [165, 136.6, 1],
  [172, 140],
  [178, 150],
  [181.5, 168],
  [183, 192],
  [181, 216],
  [175, 238],
  [167, 258, 1],
  [157, 246],
  [145, 232],
  [133, 216],
  [123, 196],
  [114, 172],
  [109, 152],
  [113, 134],
])

/** The neck under the jaw and behind the beard, from below the ear to the collar: in shadow. */
const NECK_SHADOW = 'M96 150L116 140L124 190L136 236L80 246Z'

/** The moustache: strands falling from under the nose over the corner of the mouth into the beard. */
const MOUSTACHE =
  'M169 138.6Q177 141.6 179.6 153M166.6 140.6Q173.4 146 174.4 157M163.6 141.8Q168 149 167.6 159M160.4 143.4Q162.6 150 161.6 158'

/** His shoulders in the gown. */
const BODY = spline([
  [-14, 336, 1],
  [-8, 296],
  [10, 262],
  [42, 238],
  [80, 228],
  [116, 232],
  [152, 228],
  [184, 240],
  [210, 266],
  [228, 302],
  [236, 336, 1],
])

/** The spine of the fur collar, from behind the neck round over the shoulder to the front. */
const COLLAR_SPINE: Pt[] = [
  [14, 274],
  [36, 254],
  [62, 241],
  [94, 238],
  [126, 242],
  [158, 240],
  [186, 250],
  [208, 272],
]
const COLLAR_W = 20
const COLLAR = bandAlong(COLLAR_SPINE, COLLAR_W)

type Marks = {
  wisps: string
  hair: string
  beard: string
  brow: string
  age: string
  cheek: string
  neck: string
  fur: string
  gown: string
}

const marks = once((): Marks => {
  const r = rng(7101)

  // "this thin helm": a few thin strands of white hair lying over the bare
  // crown, combed back to the fringe, cut as fine ink lines on the scalp.
  let wisps = ''
  for (let i = 0; i < 6; i++) {
    const t = i / 5
    const x0 = 128 - t * 14 + between(r, -2, 2)
    const y0 = 50 + t * 9 + between(r, -2, 2)
    const x1 = 66 + t * 10 + between(r, -3, 3)
    const y1 = 86 + t * 2
    const mx = (x0 + x1) / 2 + between(r, -3, 3)
    const my = 46 + t * 10 + between(r, -2, 2)
    wisps += `M${n(x0)} ${n(y0)}Q${n(mx)} ${n(my)} ${n(x1)} ${n(y1)}`
  }

  // "these white flakes": the white hair in loose waves, cut as ink lines
  // between the locks, from the line it grows from down round the skull to
  // the ends; heavier behind the ear, where it is in shadow.
  const hair =
    waves(
      7102,
      18,
      (t) => along(FRINGE, t),
      (t) => along(ENDS, t),
      [0.7, 1.3],
      2.4,
    ) +
    waves(
      7103,
      7,
      (t) => along(FRINGE, 0.1 + t * 0.5),
      (t) => along(ENDS, 0.15 + t * 0.45),
      [1.5, 2.4],
      2,
    ) +
    // the back of the hair, furthest from the light: wide ink between the locks
    waves(
      7112,
      6,
      (t) => along(FRINGE, 0.55 + t * 0.45),
      (t) => along(ENDS, 0.55 + t * 0.45),
      [2.6, 3.8],
      2.6,
    ) +
    // and its outer edge, behind the line the strands above grow from. Left
    // uncut, this margin printed as a smooth pale band whose locks made a
    // brow, a nose and a chin: at phone size it read as a second face in
    // profile, looking back (the review, 2 October 2026).
    waves(
      7113,
      4,
      (t) => [37 + t * 9, 120 - t * 14],
      (t) => [38 + t * 10, 222 + t * 18],
      [0.7, 1.2],
      2.2,
    )

  // The beard in long waves: ink lines between paper locks, and heavier on
  // the far side of the beard, towards the neck, which is in shadow.
  const beard =
    waves(
      7104,
      17,
      (t) => [120 + t * 52, 134 + Math.sin(t * Math.PI) * 8],
      (t) => [128 + t * 40, 220 + Math.sin(t * Math.PI) * 34],
      [0.8, 1.4],
      2,
    ) +
    waves(
      7105,
      6,
      (t) => [113 + t * 10, 150 + t * 8],
      (t) => [124 + t * 14, 196 + t * 24],
      [1.6, 2.4],
      1.4,
    )

  const brow = whiteBrow(7106, 2.6)

  // The lines of age and weather: across the forehead and higher on the
  // bare brow, the crow's feet, and the fold from the nose into the beard.
  const age =
    ageLines(7107, 3) +
    'M142 52Q150 49.6 157 53.4M139 59Q150 56.4 161 61' +
    'M165 125Q160 132 160.6 139'

  // The hollow under the cheekbone, above the beard: "Was this a face".
  let cheek = ''
  for (let rad = 12; rad < 25; rad += 3.4)
    cheek += arcDashes(r, 141, 110, rad, deg(72), deg(140), [7, 16], [2, 5])

  // The neck, between the hair and the beard, is in deep shadow: left in
  // ink, with a few fine arcs of light cut round its column.
  const neck = napeShade(7108, 150, 112, 60, 118)

  const fur = furStrokes(7109, COLLAR_SPINE, COLLAR_W, 3)
  const gown = folds(7111, [14, 210], [284, 298], 6)
  return { wisps, hair, beard, brow, age, cheek, neck, fur, gown }
})

/** Lear, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function LearFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-lear-head`
  const hairClip = `${uid}-lear-hair`
  const beardClip = `${uid}-lear-beard`
  const collarClip = `${uid}-lear-collar`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
        <clipPath id={collarClip}>
          <path d={COLLAR} />
        </clipPath>
      </defs>
      {/* the dark gown */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`}>
          <path d={NECK_SHADOW} fill={INK} />
          <path d={m.neck} fill="none" stroke={PAPER} strokeWidth={0.8} strokeLinecap="round" />
        </g>
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.age} strokeWidth={LINE.hairline} />
          <path d={m.cheek} strokeWidth={0.95} />
          {/* "this thin helm": thin strands over the bare crown */}
          <path d={m.wisps} strokeWidth={0.9} />
        </g>
        {/* "these white flakes": the white hair, paper like the scalp, told by its strands */}
        <path d={HAIR} fill={PAPER} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={INK} />
        </g>
        <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
      </g>
      {/* the collar of fur, over the hair's ends */}
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${collarClip})`}>
        <path d={m.fur} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      </g>
      <g transform={turn(ROT)}>
        {/* the white beard and moustache, over the collar */}
        <path d={BEARD} fill={PAPER} />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={INK} />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={MOUSTACHE} strokeWidth={1.2} />
          {/* the nostril */}
          <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
          <path d={m.brow} strokeWidth={1.1} />
        </g>
        <ManEye look="down" />
      </g>
    </g>
  )
}

/** A thick ink halo round head, hair, beard and shoulders. */
function LearKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={BODY} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
        <path d={BEARD} />
      </g>
    </g>
  )
}

const P = placing(42, -16, 1.12)

const ground = once(() =>
  // The tent in the French camp by day, the light ahead of him.
  portraitGround('lear-king-lear', 7120, (x, y) =>
    clamp(0.08 + ((x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  ),
)

function LearPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <LearKnockout />
        <LearFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const kingLearPortrait: LinocutArt = { width: PW, height: PH, Draw: LearPortrait }

/** Where the markers land, on the turned head, in the portrait. */
const FLAKES_AT = onTurnedHead(P, ROT, 42, 176)
const FACE_AT = onTurnedHead(P, ROT, 136, 121)
const HELM_AT = onTurnedHead(P, ROT, 66, 66)

export const kingLear: Portrait = {
  name: 'King Lear',
  art: kingLearPortrait,
  alt: 'A linocut portrait of King Lear in profile, facing right: a very old man, bareheaded, his head bowed a little and his heavy-lidded eye looking down under a white brow. His crown is bald, with a few thin strands of white hair lying across it, and white hair grows thick round the sides and back of his head and falls to his collar. His face is lined across the brow, at the eye and in the hollow of the cheek, and a long white beard and moustache fall in waves to a point on his chest. He wears a dark gown with a broad collar of fur. Three numbered red markers point to his white hair, his face and the thin hair on his crown.',
  describedBy: [
    { phrase: 'these white flakes', at: [FLAKES_AT[0] - 40, FLAKES_AT[1]], to: FLAKES_AT },
    { phrase: 'Was this a face', at: FACE_AT },
    { phrase: 'this thin helm', at: [HELM_AT[0] - 50, HELM_AT[1]], to: HELM_AT },
  ],
  where: 'Act 4, Scene 7',
  passage:
    'Had you not been their father, these white flakes Did challenge pity of them. Was this a face To be oppos’d against the warring winds? To stand against the deep dread-bolted thunder? In the most terrible and nimble stroke Of quick cross lightning? to watch, poor perdu! With this thin helm?',
  note: 'Cordelia watches her father sleep and sees what the storm was set against: an old man’s face, and white hair for his only helmet. When he wakes he calls himself “a very foolish fond old man, Fourscore and upward”.',
  artNote:
    'His white beard is in his own words (“Art not asham’d to look upon this beard?”). The play never describes his crown or his robes, so he is bareheaded, as Cordelia sees him, in a plain gown with a collar of fur.',
}
