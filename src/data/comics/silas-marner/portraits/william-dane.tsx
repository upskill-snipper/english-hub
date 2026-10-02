import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  flip,
  hatch,
  lerp2,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
} from './common'

/**
 * William Dane, as George Eliot describes him, and nothing else. Chapter 1,
 * in Lantern Yard, before the theft he will pin on his friend:
 *
 *   "The expression of trusting simplicity in Marner's face, heightened by
 *   that absence of special observation, that defenceless, deer-like gaze
 *   which belongs to large prominent eyes, was strongly contrasted by the
 *   self-complacent suppression of inward triumph that lurked in the narrow
 *   slanting eyes and compressed lips of William Dane."
 *
 * and, in the same paragraph, "one young man, a little older than himself",
 * "regarded as a shining instance of youthful piety, though somewhat given to
 * over-severity towards weaker brethren", and the two of them among "many a
 * pair of pale-faced weavers".
 *
 * So: a young, pale man in profile, facing left, towards Silas, whose
 * portrait comes before his; his chin a little raised; a heavy upper lid
 * drawn low over the eye and sloping down towards the ear, so the eye is a
 * narrow slit with the pupil half hidden ("narrow slanting eyes"); the lips
 * pressed into one straight line, turned up at the corner ("compressed lips",
 * "self-complacent"). The eye is the same eye every face in these prints is
 * cut with, its lid lowered: the sentence describes a look, and nothing else
 * is drawn into it. There is no red in this plate.
 *
 * His hair and dress are not described, so he wears what a young weaver of a
 * chapel congregation in a northern town would wear on a Sunday in the
 * 1790s: a plain dark coat with a standing collar and a plain white
 * neckcloth, his hair combed flat. Nothing here comes from a film or stage
 * production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 5201 for the ground, 5202 for the cuts in the
 * figure.
 */

const HEAD = smooth([
  [120, 256, 1],
  [115, 232],
  [102, 206],
  [92, 172],
  [90, 134],
  [98, 98],
  [118, 66],
  [148, 46],
  [182, 40],
  [208, 50],
  [224, 70],
  [232, 95],
  [234, 113],
  [230, 123],
  [234.5, 135],
  [243, 151],
  [251, 163, 1],
  [245.5, 168],
  [238, 169.5, 1],
  [239, 175],
  [237, 178.5, 1],
  [238, 182.5],
  [233, 188],
  [238.5, 198],
  [236, 208],
  [218, 214],
  [206, 224],
  [206, 240],
  [204, 256, 1],
])

/** Dark hair combed flat and forward from the crown, cut short above the ear and at the nape. */
const HAIR = smooth([
  [60, 20, 1],
  [214, 20, 1],
  [213, 50],
  [207, 58],
  [199, 60],
  [190, 70],
  [182, 90],
  [174, 104],
  [166, 110, 1],
  [150, 108],
  [138, 118],
  [130, 146],
  [124, 172],
  [114, 194, 1],
  [60, 194, 1],
])

const COAT = smooth([
  [-6, 330, 1],
  [0, 292],
  [22, 264],
  [62, 246],
  [106, 240],
  [150, 250],
  [200, 250],
  [232, 262],
  [252, 292],
  [258, 330, 1],
])
/** The standing collar of his coat, round the back of the neck. */
const COAT_COLLAR = smooth([
  [92, 250, 1],
  [104, 226],
  [124, 232],
  [150, 244],
  [166, 262],
  [140, 266],
  [110, 262, 1],
])
/** A plain white neckcloth, wound high round the throat. */
const NECKCLOTH = smooth([
  [132, 244, 1],
  [168, 240],
  [208, 234],
  [216, 246],
  [214, 262],
  [184, 268],
  [140, 264, 1],
])
/** Where the neckcloth's ends are tucked in, at the front. */
const TUCK = smooth([
  [204, 256, 1],
  [220, 256],
  [226, 286, 1],
  [214, 290],
])
const LAPEL = smooth([
  [210, 262, 1],
  [232, 270, 1],
  [246, 330, 1],
  [226, 330, 1],
])

type Marks = {
  ground: string
  hair: string
  back: string
  neck: string
  face: string
  coat: string
}

const marks = once<Marks>(() => {
  // Lit from in front of his face; the dark behind his head. (Drawn facing
  // right, so the light is at the right here and at the left in print.)
  const ground = portraitGround(5201, (x, y) =>
    clamp(0.04 + ((x - 40) / 280) * 0.95 - Math.max(0, (y - 240) / 260)),
  )
  const r = rng(5202)
  // Hair combed flat: paper strands from the crown down and forward.
  const hair =
    strands(r, 30, lerp2([110, 70], [124, 180]), lerp2([200, 54], [170, 108]), [0.4, 0.8], 2) +
    rimLight(r, { cx: 158, cy: 140, rx: 68, ry: 100 }, 160, 290, 48, 1)
  let back = ''
  for (let rad = 62; rad < 102; rad += 3.4)
    back += arcDashes(r, 172, 144, rad, deg(100), deg(152), [8, 22], [2, 5])
  const neck = hatch(r, { x0: 112, x1: 212, y0: 214, y1: 246 }, 5, 0.06)
  // Young and smooth: only the hollow of the temple, and a shadow under the cheekbone.
  let face = ''
  for (let i = 0; i < 4; i++)
    face += `M${n(188 + i * 3)} ${n(90 + i * 1.5)}Q${n(185 + i * 3)} 104 ${n(191 + i * 3)} ${n(116 - i)}`
  for (let rad = 12; rad < 22; rad += 3.4)
    face += arcDashes(r, 206, 150, rad, deg(60), deg(128), [8, 18], [2, 5])
  const coat =
    gouge(36, 272, 16, 318, 2.2, 2) +
    gouge(70, 258, 60, 318, 1.8, 2) +
    gouge(118, 270, 114, 318, 1.3, 1) +
    gouge(160, 276, 164, 318, 1, -1)
  return { ground, hair, back, neck, face, coat }
})

function WilliamDanePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-wd-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={COAT} />
        </g>
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.back} strokeWidth={1.6} />
            <path d={m.neck} strokeWidth={LINE.hairline} />
            <path d={m.face} strokeWidth={LINE.hairline} />
          </g>
          <path d={HAIR} fill={INK} />
          <path d={m.hair} fill={PAPER} />
        </g>
        <ProfileEar at={[156, 112]} h={48} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the jaw, drawn up by the lifted chin */}
          <path d="M236 208C214 218 190 212 176 196C170 188 168 178 168 168" strokeWidth={1.7} />
          {/* a level brow, drawn down a little */}
          <path d="M205 111Q218 106.5 233 110.5" strokeWidth={3.2} />
          {/* nostril and the fold from the nose */}
          <path d="M244.5 166C240.5 163.5 240 159.5 243 157" strokeWidth={1.4} />
          <path d="M235 154C229 161 227 169 228.5 176" strokeWidth={LINE.fine} />
          {/* "compressed lips": one straight line, turned up at the corner */}
          <path d="M237 178.5L226 179.5" strokeWidth={2.2} />
          <path d="M226 179.5Q222.5 179 221.5 175.5" strokeWidth={LINE.fine} />
          <path d="M232.5 189Q230.5 192 231.5 195" strokeWidth={LINE.hairline} />
          {/* "narrow slanting eyes": a heavy lid, low over the eye, sloping to the ear */}
          <path d="M209.5 129.5Q213 131.5 228.5 124.5" strokeWidth={LINE.fine} />
        </g>
        <circle cx={223.4} cy={125.6} r={2.7} fill={INK} />
        <path d="M206.5 126.5Q218 117.5 231 121.5L230 124Q218 121.5 207.5 128.5Z" fill={INK} />
        <path
          d="M207 122.5Q218 114 230 117.5"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinecap="round"
        />
        <path d={COAT_COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M146 252Q178 250 210 244M150 258Q180 258 212 253"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        <path d={TUCK} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      </g>
      <InnerRule />
    </>
  )
}

export const williamDaneArt: LinocutArt = { width: PW, height: PH, Draw: WilliamDanePortrait }

export const williamDane: Portrait = {
  name: 'William Dane',
  art: williamDaneArt,
  alt: "A linocut portrait of William Dane in profile, facing left, drawn from George Eliot's description in Chapter 1: a young, pale, clean-shaven man with dark hair combed flat, his chin a little raised. A heavy upper lid is drawn low over his eye, sloping down towards the ear, so that the eye is a narrow slit with the pupil half hidden, and his lips are pressed together in one straight line, turned up a little at the corner, as if hiding a private satisfaction. He wears a plain dark coat with a standing collar and a plain white neckcloth. Three numbered red markers point to his face, his eye and his lips.",
  describedBy: [
    { phrase: 'self-complacent suppression of inward triumph', at: flip([196, 158]) },
    { phrase: 'narrow slanting eyes', at: flip([290, 92]), to: flip([226, 117]) },
    { phrase: 'compressed lips', at: flip([292, 196]), to: flip([234, 179]) },
  ],
  where: 'Chapter 1',
  passage:
    'The expression of trusting simplicity in Marner’s face, heightened by that absence of special observation, that defenceless, deer-like gaze which belongs to large prominent eyes, was strongly contrasted by the self-complacent suppression of inward triumph that lurked in the narrow slanting eyes and compressed lips of William Dane.',
  note: 'Eliot describes William only against Silas: his friend’s eyes are wide and trusting, his own narrowed, and the triumph he hides is there before he betrays him.',
}
