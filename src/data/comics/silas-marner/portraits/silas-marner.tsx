import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
  flame,
  hatch,
  lerp2,
  once,
  rimLight,
  smooth,
  splitGround,
  strands,
} from './common'

/**
 * Silas Marner, as George Eliot describes him, and nothing else. Chapter 5,
 * on the night of the robbery, home from his errand and sitting down "to the
 * agreeable business of tending the meat and warming himself":
 *
 *   "Any one who had looked at him as the red light shone upon his pale
 *   face, strange straining eyes, and meagre form, would perhaps have
 *   understood the mixture of contemptuous pity, dread, and suspicion with
 *   which he was regarded by his neighbours in Raveloe."
 *
 * and, of the same eyes and face, Chapter 1: "those large brown protuberant
 * eyes in Silas Marner's pale face"; Chapter 2: "Strangely Marner's face and
 * figure shrank and bent themselves into a constant mechanical relation to
 * the objects of his life", "so withered and yellow, that, though he was not
 * yet forty, the children always called him 'Old Master Marner'".
 *
 * So: a thin man not yet forty, in profile, facing right towards his fire,
 * which burns red at the bottom right of the block. Its light is printed in
 * the spot colour on the ground between the flames and his face, and his
 * face is cut in paper ("pale"): the red is kept off the face altogether,
 * because a red mark near a mouth reads as blood. A large eye stands out at
 * the edge of his profile under a wide-open lid, its pupil forward, staring
 * ("protuberant", "straining"); the cheek is hollowed and the brow lined
 * ("withered"); a thin neck is thrust forward out of a hunched back
 * ("meagre", "shrank and bent"). The print cannot show brown or yellow, so
 * his eyes are black and his skin paper; the card says so.
 *
 * His hair and his clothes are not described, so his hair is plain, short
 * and dark, and he wears what a weaver would at his own hearth in the 1800s:
 * a worn dark coat, a shirt and a neckerchief. Nothing here comes from a
 * film or stage production.
 *
 * Seeds: 5101 for the ground, 5102 for the cuts in the figure.
 */

const HEAD = smooth([
  [136, 256, 1],
  [128, 226],
  [112, 198],
  [100, 162],
  [99, 124],
  [109, 88],
  [131, 60],
  [162, 44],
  [196, 45],
  [217, 60],
  [227, 83],
  [231, 104],
  [228, 115],
  [234.5, 126],
  [235, 140],
  [242, 155],
  [250, 168, 1],
  [244, 172],
  [236, 173, 1],
  [237, 178.5],
  [234.5, 183, 1],
  [235.5, 187.5],
  [230, 193],
  [232.5, 202],
  [227, 212],
  [213, 218],
  [204, 228],
  [205, 240],
  [200, 256, 1],
])

/** Short, thin, dark hair, lying flat: clipped to the head. */
const HAIR = smooth([
  [60, 20, 1],
  [216, 20, 1],
  [214, 54],
  [203, 63],
  [192, 78],
  [183, 97],
  [179, 116],
  [176, 132, 1],
  [165, 121],
  [150, 117],
  [140, 130],
  [134, 160],
  [126, 194],
  [116, 230, 1],
  [60, 230, 1],
])

/** A hunched back rising behind the neck, narrow shoulders: "meagre", "bent". */
const COAT = smooth([
  [-8, 330, 1],
  [-2, 296],
  [16, 262],
  [48, 236],
  [84, 220],
  [112, 222],
  [134, 240],
  [164, 250],
  [200, 248],
  [226, 256],
  [250, 276],
  [262, 302],
  [266, 330, 1],
])
/** The coat's collar, turned down round the back of the neck. */
const COLLAR = smooth([
  [86, 222, 1],
  [112, 222],
  [136, 240],
  [160, 252],
  [150, 266],
  [120, 256],
  [96, 244],
  [78, 236, 1],
])
/** The point of his shirt collar, at the front of the throat. */
const SHIRT = smooth([
  [196, 247, 1],
  [214, 246],
  [226, 252, 1],
  [226, 264, 1],
  [204, 262],
])
/** A dark neckerchief wound round the base of the neck. */
const KERCHIEF = smooth([
  [170, 254, 1],
  [200, 262],
  [228, 260, 1],
  [232, 270],
  [214, 277],
  [190, 274],
  [166, 266, 1],
])

/**
 * The eye, drawn large, for "large brown protuberant eyes" and "strange
 * straining eyes": a wide-open lid over an eyeball that stands out at the
 * edge of the profile, the crease of the lid above it, and the pupil forward.
 */
const EYE = {
  upper: 'M199.5 127Q211 114 228.5 122.5',
  crease: 'M200 120Q211 107.5 229 115.5',
  lower: 'M202.5 134Q214 142 228 131.5',
  bag: 'M205 141Q215 146.5 225 140.5',
  ball: 'M200 127Q212 114.5 228.5 122.5Q231 127.5 228 131.5Q214 141.5 202.5 134Z',
}

/** The flames at the bottom right: base, height, lean. */
const FLAMES: [number, number, number, number][] = [
  [282, 314, 50, 4],
  [300, 314, 36, -3],
  [266, 314, 28, 2],
  [316, 314, 24, -2],
]

type Marks = {
  ground: { paper: string; red: string }
  hair: string
  back: string
  neck: string
  cheek: string
  brow: string
  coat: string
  kerchief: string
}

const marks = once<Marks>(() => {
  // Lit from the fire at the bottom right; the dark gathers behind his back.
  // "the red light": the cuts nearest the fire print red, and only below
  // the level of his chin, so no red lies near his face.
  const fire = (x: number, y: number) => Math.hypot(x - 300, (y - 324) * 1.05)
  const ground = splitGround(
    5101,
    (x, y) => clamp(1.12 - fire(x, y) / 240),
    (x, y) => y > 226 && fire(x, y) < 118,
  )
  const r = rng(5102)
  // Thin, lank hair lying flat over the skull and down behind: paper strands.
  const hair =
    strands(r, 26, lerp2([208, 56], [180, 118]), lerp2([120, 70], [126, 196]), [0.4, 0.8], 3) +
    strands(r, 12, lerp2([196, 46], [130, 62]), lerp2([104, 110], [104, 170]), [0.35, 0.7], 2) +
    rimLight(r, { cx: 162, cy: 140, rx: 64, ry: 98 }, 150, 282, 50, 1)
  // The shadow round the back of the skull and down the neck.
  let back = ''
  for (let rad = 60; rad < 98; rad += 3.4)
    back += arcDashes(r, 176, 148, rad, deg(100), deg(150), [8, 22], [2, 5])
  const neck = hatch(r, { x0: 120, x1: 214, y0: 216, y1: 256 }, 5.2, 0.08)
  // "withered": the hollow under the cheekbone, cut as shallow bowls of line.
  let cheek = ''
  for (let rad = 12; rad < 34; rad += 3.2)
    cheek += arcDashes(r, 200, 152, rad, deg(48), deg(152), [9, 26], [1.5, 4])
  // The lined brow, the sunken temple, the creases at the eye.
  let brow = ''
  for (let i = 0; i < 3; i++)
    brow += `M${n(206 + i)} ${n(72 + i * 8)}Q${n(215 + i)} ${n(68 + i * 8)} ${n(224 + i * 0.6)} ${n(74 + i * 8.5)}`
  for (let i = 0; i < 5; i++)
    brow += `M${n(184 + i * 3)} ${n(94 + i * 1.5)}Q${n(181 + i * 3)} 108 ${n(187 + i * 3)} ${n(120 - i)}`
  brow += 'M197 128L189 126M197 132L189 134M198 137L192 142'
  const coat =
    gouge(24, 270, 8, 318, 2.2, 2) +
    gouge(52, 252, 40, 318, 1.8, 2) +
    gouge(94, 262, 90, 318, 1.4, 1) +
    gouge(236, 280, 252, 318, 1.8, -2) +
    gouge(160, 286, 150, 318, 1.1, 1)
  // The knot and one hanging end of the neckerchief.
  const kerchief = ribbon(
    [
      [214, 272],
      [216, 282],
      [219, 292],
      [221, 302],
    ],
    9,
    0.5,
    false,
  )
  return { ground, hair, back, neck, cheek, brow, coat, kerchief }
})

function SilasPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-sm-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground.paper} fill={PAPER} />
      <path d={m.ground.red} fill={RED} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={COAT} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* Paper, with a paper edge, so the dark hair keeps its outline on the dark ground. */}
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.6} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
          <path d={m.cheek} strokeWidth={0.95} />
          <path d={m.brow} strokeWidth={LINE.hairline} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <ProfileEar at={[160, 118]} h={48} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the jaw, back to below the ear */}
        <path d="M227 212C208 222 186 216 174 200C169 192 167 182 167 172" strokeWidth={1.6} />
        {/* a brow raised high over the staring eye */}
        <path d="M199 104Q213 95.5 230 101" strokeWidth={3.2} />
        {/* nostril, the fold from nose to mouth, thin lips, the chin */}
        <path d="M243.5 170C239.5 167 239 162.5 242 160" strokeWidth={1.4} />
        <path d="M233 157C226 165 224 174 226.5 183" strokeWidth={LINE.fine} />
        <path d="M234.5 183L226.5 184.8" strokeWidth={1.7} />
        <path d="M230 195Q227.5 198 228.5 201.5" strokeWidth={LINE.hairline} />
        {/* the throat */}
        <path d="M204 230Q209.5 235 205.5 241" strokeWidth={LINE.fine} />
      </g>
      {/* "large brown protuberant eyes", "strange straining eyes" */}
      <path d={EYE.ball} fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d={EYE.crease} strokeWidth={LINE.fine} />
        <path d={EYE.bag} strokeWidth={LINE.hairline} />
        <path d={EYE.lower} strokeWidth={LINE.fine} />
      </g>
      <ellipse cx={223} cy={127.4} rx={4.6} ry={6.3} fill={INK} />
      <circle cx={224.6} cy={125} r={1.6} fill={PAPER} />
      <path d={EYE.upper} fill="none" stroke={INK} strokeWidth={2.8} strokeLinecap="round" />
      <path d={SHIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={KERCHIEF} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.kerchief} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path
        d="M176 262Q196 268 214 267M186 269Q200 273 212 272"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.hairline}
      />
      {/* His fire. */}
      <g className="lc-flicker" style={timing({ delay: 0.3, dur: 1.6 })}>
        {FLAMES.map(([x, y, h, lean]) => (
          <path key={x} d={flame(x, y, h, lean)} fill={RED} />
        ))}
      </g>
      <path d={flame(283, 314, 22, 2) + flame(300, 314, 14, -1)} fill={PAPER} />
      <InnerRule />
    </>
  )
}

export const silasMarnerArt: LinocutArt = { width: PW, height: PH, Draw: SilasPortrait }

export const silasMarner: Portrait = {
  name: 'Silas Marner',
  art: silasMarnerArt,
  alt: "A linocut portrait of Silas Marner in profile, facing right, drawn from George Eliot's description in Chapter 5, as he sits warming himself at his fire on the night of the robbery. He is a thin man, not yet forty, with his head thrust forward out of a hunched back and narrow shoulders. His face is pale, lined and hollow-cheeked; a large eye stands out at the edge of his profile under a wide-open lid, staring ahead. His hair is short, dark and flat. The fire burns red at the bottom right, and its red light fills the dark between the flames and his face. He wears a worn dark coat, a shirt collar and a dark neckerchief. Four numbered red markers point to the red firelight, his pale face, his staring eye and his thin, bent frame.",
  describedBy: [
    { phrase: 'the red light', at: [302, 186], to: [276, 250] },
    { phrase: 'his pale face', at: [194, 194] },
    { phrase: 'strange straining eyes', at: [276, 78], to: [230, 120] },
    { phrase: 'meagre form', at: [42, 196], to: [82, 224] },
  ],
  where: 'Chapter 5',
  passage:
    'Any one who had looked at him as the red light shone upon his pale face, strange straining eyes, and meagre form, would perhaps have understood the mixture of contemptuous pity, dread, and suspicion with which he was regarded by his neighbours in Raveloe. Yet few men could be more harmless than poor Marner.',
  note: 'Eliot shows us Silas as Raveloe sees him, a strange and frightening figure in the firelight, and then corrects the village in one short sentence.',
  artNote:
    'Elsewhere Eliot gives his eyes as brown (Chapter 1) and his skin as "withered and yellow" (Chapter 2). This print has one colour besides black, so red is kept for the firelight, and those colours are left to the words.',
}
