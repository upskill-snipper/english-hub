import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, rng } from '@/components/comics/linocut/carve'

import {
  ageLines,
  EarCut,
  Jupon,
  mailRings,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  plateLight,
  Plates,
  portraitGround,
  PortraitRule,
  PW,
  quilting,
  spline,
  STANDARD,
  HARNESS,
  Tear,
  waves,
  whiteBrow,
} from './common'

/**
 * The Duke of Exeter, the King's uncle, as the play shows him in the field:
 *
 *   FLUELLEN: "The Duke of Exeter is as magnanimous as Agamemnon; and a man
 *   that I love and honour with my soul" (Act 3, Scene 6), of the Duke who
 *   "keeps the bridge most valiantly, with excellent discipline"
 *   EXETER, telling the King how the Duke of York fell beside the Earl of
 *   Suffolk: "But I had not so much of man in me, And all my mother came into
 *   mine eyes And gave me up to tears." (Act 4, Scene 6)
 *
 * So: an old soldier in his armour, the King's most trusted man, with a tear
 * on his cheek he could not stop. The play gives his kinship ("good uncle",
 * 1.2) and his deeds, not his face.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every
 * man's head (MAN_HEAD), with grey hair and a full grey beard trimmed round
 * (the Lear kit's KENT_HAIR and KENT_BEARD, which the kit gives him, at this
 * size: paper cut through with so many ink strands that it prints grey),
 * invented only so that the King's uncle is known at a glance among the
 * younger lords; and the kit's harness of 1415, as Henry wears it, for the
 * bridge and for Agincourt. The brow is lifted at its inner end, and one tear
 * is cut on his cheek as the Tempest portraits cut them, in paper with an ink
 * rim. Nothing in the picture is of the deaths he describes. There is no red
 * in this plate.
 *
 * MARKERS. "And all my mother came into mine eyes" comes to his eye from in
 * front, at its own height; "as magnanimous as Agamemnon" to the plates on
 * his shoulder, from behind. No line crosses his face.
 *
 * Seeds: 9401 to 9415 (the figure's marks), 9410 (the ground).
 */

/** Grey hair, short, combed back from the brow to the nape, round the ear. */
const HAIR = spline([
  [159, 60, 1],
  [148, 64],
  [134, 70],
  [121, 80],
  [114, 96, 1],
  [102, 99],
  [93, 108],
  [87, 124],
  [84, 148],
  [80, 168, 1],
  [70, 162],
  [60, 176, 1],
  [50, 152],
  [43, 124],
  [42, 96],
  [47, 70],
  [64, 44],
  [96, 30],
  [128, 29],
  [151, 39],
  [161, 51],
])
/** The hairline at the brow and in front of the ear, which tells grey hair from the face. */
const HAIRLINE = 'M159 60C150 63 138 68 127 76C119 83 115 90 114 96'

/** The full grey beard, trimmed round: the kit's KENT_BEARD at this size. */
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

/** The tear on his cheek, below the eye: [x, y, size]. */
const TEAR: [number, number, number] = [151, 124, 0.95]

type Marks = {
  hair: string
  beard: string
  brow: string
  age: string
  cheek: string
  quilts: string
  rings: string
  light: string
  nape: string
}

const marks = once((): Marks => {
  const r = rng(9401)
  // Grey hair: paper cut through with ink strands, combed back.
  const hair =
    waves(
      9402,
      34,
      (t) => [156 - t * 108, 58 - t * 2 + Math.sin(t * Math.PI) * -14],
      (t) => [112 - t * 56, 96 + t * 74],
      [0.7, 1.2],
      1.4,
    ) +
    waves(
      9403,
      16,
      (t) => [140 - t * 90, 44 + Math.sin(t * Math.PI) * -6],
      (t) => [100 - t * 46, 104 + t * 64],
      [0.6, 1.1],
      1.8,
    ) +
    // the back of the hair, away from the light: wide ink between the locks
    waves(
      9414,
      7,
      (t) => [88 - t * 40, 70 + t * 30],
      (t) => [80 - t * 26, 160 + t * 12],
      [1.8, 2.8],
      1.4,
    )
  // The grey beard, in three layers of ink strands that cross a little.
  const beard =
    waves(
      9404,
      22,
      (t) => [116 + t * 54, 128 + Math.sin(t * Math.PI) * 12],
      (t) => [124 + t * 46, 192 + Math.sin(t * Math.PI) * 16],
      [0.8, 1.4],
      1.4,
    ) +
    waves(
      9405,
      12,
      (t) => [120 + t * 46, 140 + Math.sin(t * Math.PI) * 6],
      (t) => [128 + t * 36, 200 + Math.sin(t * Math.PI) * 6],
      [0.7, 1.2],
      1.8,
    ) +
    waves(
      9406,
      5,
      (t) => [112 + t * 6, 140 + t * 10],
      (t) => [124 + t * 10, 186 + t * 14],
      [1.6, 2.3],
      1,
    )
  // A grey brow lifted at its inner end: sorrow.
  const brow = whiteBrow(9407, 3.2) + whiteBrow(9408, 2.6)
  const age = ageLines(9409, 3)
  let cheek = ''
  for (let rad = 14; rad < 24; rad += 3.6)
    cheek += arcDashes(r, 141, 110, rad, deg(78), deg(126), [7, 14], [2, 5])
  const quilts = quilting(
    9411,
    [118, 136, 154, 172, 190, 206],
    (x) => 236 + Math.abs(x - 150) * 0.24,
  )
  const rings = mailRings(rng(9412), { x0: 46, x1: 164, y0: 204, y1: 256 }, 5.6)
  const light = plateLight(9413, 80, 300, 40, 66)
  // The back of the neck, below the hair, in shadow.
  const nape = napeShade(9415, 150, 118, 70, 112)
  return { hair, beard, brow, age, cheek, quilts, rings, light, nape }
})

/** Exeter, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function ExeterFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-exe`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-beard`}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <Jupon quilts={m.quilts} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={id} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.age} strokeWidth={LINE.hairline} />
        <path d={m.cheek} strokeWidth={0.95} />
        <path d={m.nape} strokeWidth={1.4} />
      </g>
      <Plates id={id} rings={m.rings} light={m.light} />
      {/* grey hair, paper with ink strands, its line at the brow */}
      <path d={HAIR} fill={PAPER} />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={INK} />
      </g>
      <path d={HAIRLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <EarCut {...MAN_EAR} />
      {/* the full grey beard, trimmed round */}
      <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-beard)`}>
        <path d={m.beard} fill={INK} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={MOUSTACHE} strokeWidth={1.3} />
        <path d={MOUTH} strokeWidth={1.6} />
        {/* the nostril */}
        <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
        <path d={m.brow} strokeWidth={1.2} />
        {/* "all my mother came into mine eyes": the eye wet, the lower lid full */}
        <path d="M146 98.6Q154 95 162.5 98.4" strokeWidth={2.3} />
        <path d="M147.4 103.6Q154.4 106.6 161 102.8" strokeWidth={1.3} />
        <path d="M149 106Q154.6 108.4 159.6 105.6" strokeWidth={0.8} />
      </g>
      <circle cx={155.2} cy={100.6} r={2.7} fill={INK} />
      <circle cx={156.2} cy={99.8} r={0.8} fill={PAPER} />
      <Tear x={TEAR[0]} y={TEAR[1]} s={TEAR[2]} track={10} />
    </g>
  )
}

/** A thick ink halo round head, hair, beard and shoulders. */
function ExeterKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={BEARD} />
      <path d={HARNESS} />
      <path d={STANDARD} />
    </g>
  )
}

const P = placing(40, 0, 1)

const ground = once(() =>
  // The field in the grey of the afternoon, the light ahead of him.
  portraitGround('hv-exeter', 9410, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.84 - (y / PH) * 0.12),
  ),
)

function ExeterPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <ExeterKnockout />
        <ExeterFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const exeterPortrait: LinocutArt = { width: PW, height: PH, Draw: ExeterPortrait }

const EYE_AT = P.to(MAN_EYE[0] + 3, MAN_EYE[1])
const PLATE_AT = P.to(40, 262)

export const exeter: Portrait = {
  name: 'Exeter',
  art: exeterPortrait,
  alt: 'A linocut portrait of the Duke of Exeter in profile, facing right: an older man with short grey hair combed back, a full grey beard trimmed round and a grey brow lifted at its inner end in sorrow. His eye is wet and one tear runs down his cheek. He wears armour: a dark padded coat over his chest, a collar of mail round his neck and plates of steel over his shoulder. Two numbered red markers point to his eye and to the armour on his shoulder.',
  describedBy: [
    {
      phrase: 'And all my mother came into mine eyes',
      at: [EYE_AT[0] + 62, EYE_AT[1] - 8],
      to: EYE_AT,
    },
    {
      phrase: 'as magnanimous as Agamemnon',
      at: [PLATE_AT[0] - 26, PLATE_AT[1] - 30],
      to: PLATE_AT,
    },
  ],
  where: 'Act 3, Scene 6; Act 4, Scene 6',
  note: 'Exeter is the King’s uncle and his most trusted man: he carries the claim to the French court, arrests the traitors and holds the bridge in Picardy. At Agincourt he weeps as he tells the King how the Duke of York fell beside the Earl of Suffolk.',
  artNote:
    'The play does not describe his face. His grey hair and beard are how the panels tell the King’s uncle from the younger lords; his armour is the plain harness of 1415.',
}
