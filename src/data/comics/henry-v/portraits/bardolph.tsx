import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  EarCut,
  JACK,
  JackBody,
  jackQuilts,
  JackNeck,
  locks,
  MAN_EAR,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  type SP,
} from './common'

/**
 * Bardolph, as Fluellen describes him to the King in Picardy:
 *
 *   FLUELLEN: "His face is all bubukles, and whelks, and knobs, and flames o'
 *   fire; and his lips blows at his nose, and it is like a coal of fire,
 *   sometimes plue and sometimes red" (Act 3, Scene 6)
 *   THE BOY: "For Bardolph, he is white-liver'd and red-fac'd" (Act 3,
 *   Scene 2)
 *
 * So: the play's one great nose, round and swollen and hanging over his lip;
 * thick lips pushed up under it ("his lips blows at his nose"); and his face
 * and nose studded with "bubukles, and whelks, and knobs", pimples, swellings
 * and lumps, cut as small raised rounds with their shadows. It is the fullest
 * description of a face in the play, and every line of it is Fluellen's.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx, 'bardolph'):
 * every man's head with the kit's great nose (HEAD_BARDOLPH, cut again at this
 * size on MAN_HEAD, so his brow, eye, ear and jaw are every man's), the knobs
 * on it (BARDOLPH_KNOBS); bareheaded, his short dark hair cut in paper; and
 * the soldier's padded jack. The panels' sword stays out of the picture.
 *
 * THE COLOUR OF HIS FACE IS LEFT TO THE WORDS. Fluellen's "coal of fire,
 * sometimes plue and sometimes red" and the Boy's "red-fac'd" ask for red, and
 * the kit refuses it: a red nose shrinks at phone width to a red speck on a
 * face, just above the lips, and reads as a bloody one (the kit's rule, and
 * the reason Hyde's flush and Juliet's lips were cut). So there is no red in
 * this plate, and the card says why.
 *
 * Nothing in the picture or its words is of what happens to him: Fluellen's
 * next words, of his sentence, are not quoted, and the passage stops before
 * them.
 *
 * MARKERS, in the order of the passage. "His face is all bubukles, and whelks,
 * and knobs, and flames o' fire" sits on his cheek with no line; "his lips
 * blows at his nose" comes to his lips from in front at their own height and
 * stops in the air before them; "it is like a coal of fire, sometimes plue and
 * sometimes red" comes to his nose from in front at its own height. No line
 * crosses his face.
 *
 * Seeds: 9901 to 9905 (the figure's marks), 9910 (the ground).
 */

/**
 * The head in profile, facing right: every man's brow, eye, ear and jaw
 * (MAN_HEAD's), with the great nose swelling from the bridge to a round bulb
 * that hangs over the lip, and the thick lips pushed up under it.
 */
const HEAD_PTS: SP[] = [
  [64, 230],
  [57, 202],
  [49, 174],
  [43, 142],
  [44, 108],
  [55, 74],
  [78, 50],
  [110, 38],
  [140, 39],
  [158, 52],
  [165, 70],
  [168, 88],
  [164, 98, 1],
  [168, 104],
  [173.4, 108],
  [180, 110],
  [188, 110.4],
  [196, 115],
  [201.6, 123],
  [203, 132],
  [200.6, 141],
  [194, 147.6],
  [185, 150],
  [177.6, 148.4],
  [173, 145, 1],
  [178.6, 150],
  [182, 155],
  [179.4, 159.6],
  [171.6, 160.6, 1],
  [180, 163.6],
  [182, 169],
  [177.4, 173.4],
  [172.6, 174.4, 1],
  [175.4, 181],
  [173, 190],
  [162, 197],
  [147, 201],
  [137, 206],
  [132, 216],
  [132, 230],
]
const HEAD = spline(HEAD_PTS)
/** The nostril under the bulb, and the crease where the nose swells out of the cheek. */
const NOSE_LINES = 'M194 143C189 145.4 184.4 143.4 183.6 139.4' + 'M177.6 127Q172.4 135 175 144.6'
/** The mouth: the line between the thick lips, and the fold under the lower lip. */
const MOUTH = 'M180.6 161.6L171.6 160.8'
const LIP_FOLD = 'M178 175.4Q173.6 176.4 169.6 174.8'

/**
 * "knobs": lumps standing out of the line of the nose, as small rounds of
 * paper breaking its edge against the dark. [x, y, radius]
 */
const EDGE_KNOBS: [number, number, number][] = [
  [176.4, 108.4, 2.6],
  [190.4, 110.4, 2.8],
  [202.4, 127, 2.6],
  [201.6, 138.6, 2.2],
]
/**
 * "bubukles, and whelks": lumps on the nose and the cheek, each cut as a
 * small round lit from in front, with its shadow behind it in ink, so it
 * stands up from the face and does not read as a hole. [x, y, radius]
 */
const FACE_KNOBS: [number, number, number][] = [
  [187, 120, 3.8],
  [195, 131, 3.4],
  [183.6, 133, 3],
  [155, 127, 3.2],
  [158.6, 139.6, 2.8],
  [149.4, 147, 2.8],
  [139.6, 152, 2.6],
  [164, 151.6, 2.4],
]
/**
 * The shadow behind a lit lump: a crescent of ink round its back, the round of
 * the lump less the same round moved towards the light, which is in front.
 */
function knobShadow([x, y, rad]: [number, number, number]): string {
  const o = rad * 1.1
  const d = rad * 0.75
  const h = Math.sqrt(o * o - (d / 2) * (d / 2))
  const xi = x + d / 2
  return (
    `M${n(xi)} ${n(y - h)}A${n(o)} ${n(o)} 0 1 0 ${n(xi)} ${n(y + h)}` +
    `A${n(o)} ${n(o)} 0 0 1 ${n(xi)} ${n(y - h)}Z`
  )
}

/** Short dark hair, roughly cropped, over the crown to the nape, round the ear. */
const HAIR = spline([
  [158, 58, 1],
  [146, 64],
  [134, 72],
  [124, 84],
  [118, 98],
  [117, 110, 1],
  [110, 104],
  [100, 101],
  [91, 106],
  [87, 120],
  [85, 138],
  [80, 154, 1],
  [72, 150],
  [64, 160, 1],
  [56, 150],
  [50, 136],
  [44, 112],
  [45, 86],
  [56, 62],
  [78, 44],
  [110, 33],
  [138, 34],
  [154, 44],
])

type Marks = {
  quilts: string
  hair: string
  tufts: string
  nape: string
  cheek: string
  age: string
}

const marks = once((): Marks => {
  const r = rng(9901)
  const quilts = jackQuilts(9902)
  // The hair: locks combed forward and down from the crown, cut in paper.
  const hair = locks(
    9903,
    16,
    (t) => [150 - t * 100, 52 - t * 4],
    (t) => [124 - t * 70, 100 + t * 56],
    [0.8, 1.3],
    -6,
  )
  // Roughly cropped: short cut tufts standing off the edge of the hair.
  let tufts = ''
  for (let i = 0; i < 16; i++) {
    const a = deg(between(r, 150, 268))
    const x = 104 + Math.cos(a) * 62
    const y = 100 + Math.sin(a) * 66
    tufts += gouge(x, y, x + Math.cos(a) * between(r, 3, 6), y + Math.sin(a) * between(r, 3, 6), 1)
  }
  const nape = napeShade(9904, 150, 118, 80, 112)
  // A heavy, fleshy cheek: broken arcs under the cheekbone.
  let cheek = ''
  for (let rad = 16; rad < 30; rad += 3.4)
    cheek += arcDashes(r, 142, 112, rad, deg(60), deg(140), [8, 18], [2, 6])
  // Lines at the eye and across the brow.
  let age = ''
  for (let i = 0; i < 2; i++)
    age += `M${141 + i} ${70 + i * 7}Q151 ${67 + i * 7} 161 ${71.4 + i * 7}`
  age += 'M145 104L137.6 102M145.4 107.4L139 110.4'
  return { quilts, hair, tufts, nape, cheek, age }
})

/** Bardolph, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function BardolphFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-bar`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <JackBody quilts={m.quilts} />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={m.cheek} strokeWidth={0.95} />
        {/* the jaw, and a fold of flesh under it */}
        <path d="M110 146C120 170 142 186 168 188M120 176Q138 192 160 196" strokeWidth={1.2} />
      </g>
      <JackNeck />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={m.tufts} fill={INK} />
      <EarCut {...MAN_EAR} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={NOSE_LINES} strokeWidth={1.5} />
        <path d={MOUTH} strokeWidth={1.7} />
        <path d={LIP_FOLD} strokeWidth={1} />
        <path d={m.age} strokeWidth={LINE.hairline} />
        {/* the brow, and the eye under a heavy lid, a pouch below it */}
        <path d="M143.5 88.4Q153 85.4 165 88" strokeWidth={2.8} />
        <path d="M146 99Q154 96.4 162.4 99.4" strokeWidth={2.4} />
        <path d="M147.6 104Q154.6 106.6 161 103" strokeWidth={1.1} />
        <path d="M146.6 108.6Q154 112.4 161.6 107.6" strokeWidth={0.9} />
      </g>
      <circle cx={155.2} cy={101} r={2.6} fill={INK} />
      {/* the knobs: lumps breaking the line of the nose, and lumps on the nose and cheek */}
      <g fill={PAPER}>
        {EDGE_KNOBS.map(([x, y, rad]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={rad} />
        ))}
      </g>
      <path d={FACE_KNOBS.map(knobShadow).join('')} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
function BardolphKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={HEAD} />
      <path d={HAIR} />
      <path d={JACK} />
    </g>
  )
}

const P = placing(34, 10, 0.96)

const ground = once(() =>
  // The English camp in Picardy by day: the light ahead of him.
  portraitGround('hv-bardolph', 9910, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.84 - (y / PH) * 0.12),
  ),
)

function BardolphPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <BardolphKnockout />
        <BardolphFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const bardolphPortrait: LinocutArt = { width: PW, height: PH, Draw: BardolphPortrait }

const CHEEK_AT = P.to(138, 128)
/** In the air just before his lips. */
const LIPS_AT: Pt = P.to(188, 164)
/** The front of the bulb of his nose. */
const NOSE_AT: Pt = P.to(207, 128)

export const bardolph: Portrait = {
  name: 'Bardolph',
  art: bardolphPortrait,
  alt: 'A linocut portrait of Bardolph in profile, facing right: a heavy-faced man, bareheaded, his short dark hair roughly cropped. His nose is huge, round and swollen, hanging over his lip, with lumps standing out along its edge, and his thick lips are pushed up under it. His nose and his cheek are covered in small raised lumps, each shaded with a crescent of black. His eye is heavy-lidded, with a pouch below it. He wears a padded soldier’s jacket with a high neck. Three numbered red markers point to his cheek, his lips and his nose.',
  describedBy: [
    { phrase: 'His face is all bubukles, and whelks, and knobs, and flames o’ fire', at: CHEEK_AT },
    { phrase: 'his lips blows at his nose', at: [LIPS_AT[0] + 46, LIPS_AT[1] + 12], to: LIPS_AT },
    {
      phrase: 'it is like a coal of fire, sometimes plue and sometimes red',
      at: [NOSE_AT[0] + 44, NOSE_AT[1] - 14],
      to: NOSE_AT,
    },
  ],
  where: 'Act 3, Scene 6',
  passage:
    'His face is all bubukles, and whelks, and knobs, and flames o’ fire; and his lips blows at his nose, and it is like a coal of fire, sometimes plue and sometimes red',
  note: 'Bardolph was one of the King’s drinking companions in his wild youth. In France he is condemned for robbing a church, and Fluellen gives the King this picture of him; the King answers without a word about their past.',
  artNote:
    'The print has one colour besides black, and a red nose on a face reads at phone size as an injured one, so the colour of his nose, “sometimes plue and sometimes red”, is left to the words.',
}
