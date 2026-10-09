import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, rng } from '@/components/comics/linocut/carve'

import {
  EarCut,
  folds,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManEye,
  ManNoseAndMouth,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
} from './common'

/**
 * Lord Scroop of Masham, as Henry describes him at Southampton, holding the
 * proof that his friend has taken French money to betray him:
 *
 *   "Show men dutiful? Why, so didst thou. Seem they grave and learned? Why,
 *   so didst thou. Come they of noble family? Why, so didst thou. Seem they
 *   religious? Why, so didst thou. Or are they spare in diet, Free from gross
 *   passion or of mirth or anger, Constant in spirit, not swerving with the
 *   blood, Garnish'd and deck'd in modest complement, Not working with the eye
 *   without the ear, And but in purged judgement trusting neither? Such and
 *   so finely bolted didst thou seem." (Act 2, Scene 2)
 *
 * So: the man Scroop seemed. A grave face, its brow lined with thought; lean,
 * the cheek hollowed under the bone ("spare in diet"); steady, the eye level
 * and the mouth closed ("Constant in spirit"); and plainly dressed ("modest
 * complement"): a dark gown with a plain collar and no ornament. It is one of
 * the fullest descriptions of anyone's looks in the play, with Fluellen's of
 * Bardolph, and every word of it is how he seemed.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every
 * man's head (MAN_HEAD), clean-shaven and bareheaded, his dark hair to the
 * jaw and combed back from the brow (the kit's SCROOP_HAIR at this size), the
 * ear below it. There is no red in this plate.
 *
 * He faces left, towards the King, so the figure is drawn facing right and
 * flipped.
 *
 * MARKERS, in the order of the passage. "grave and learned" comes to his
 * lined brow from in front, at its own height; "spare in diet" sits on his
 * hollow cheek with no line; "Garnish'd and deck'd in modest complement"
 * comes to the plain collar of his gown from in front. No line crosses his
 * face.
 *
 * Seeds: 9501 to 9505 (the figure's marks), 9510 (the ground).
 */

/** Dark hair to the jaw, combed back from the brow over the crown, the ear below it. */
const HAIR = spline([
  [160, 60, 1],
  [150, 62],
  [136, 66],
  [122, 74],
  [112, 86],
  [108, 100, 1],
  [100, 98],
  [92, 104],
  [88, 118],
  [88, 140],
  [92, 166],
  [96, 190, 1],
  [84, 194],
  [74, 206, 1],
  [64, 198],
  [54, 210, 1],
  [47, 170],
  [42, 128],
  [42, 96],
  [48, 68],
  [66, 44],
  [96, 30],
  [128, 28],
  [150, 36],
  [161, 50],
])

/** His shoulders in a plain dark gown. */
const GOWN = spline([
  [-12, 340, 1],
  [-6, 300],
  [8, 266],
  [36, 244],
  [70, 232],
  [106, 234],
  [144, 228],
  [178, 238],
  [204, 262],
  [220, 298],
  [228, 340, 1],
])
/** The plain collar of the gown, standing close round the neck, higher at the back. */
const COLLAR = spline([
  [52, 202, 1],
  [90, 208],
  [124, 216],
  [144, 216, 1],
  [148, 234, 1],
  [110, 242],
  [58, 238, 1],
])

type Marks = { hair: string; nape: string; cheek: string; brow: string; gown: string }

const marks = once((): Marks => {
  const r = rng(9501)
  // The hair combed straight back from the brow: strands cut in paper.
  const hair =
    locks(
      9502,
      18,
      (t) => [156 - t * 36, 58 + t * 12],
      (t) => [104 - t * 56, 96 + t * 86],
      [0.8, 1.3],
      -10,
    ) +
    locks(
      9503,
      8,
      (t) => [128 - t * 70, 34 + t * 20],
      (t) => [92 - t * 40, 120 + t * 60],
      [0.8, 1.2],
      -8,
    )
  const nape = napeShade(9504, 150, 118, 86, 112)
  // "spare in diet": the cheek hollowed under the bone, as Scrooge's is.
  let cheek = ''
  for (let rad = 12; rad < 30; rad += 3.2)
    cheek += arcDashes(r, 142 + (rad - 12) * 0.1, 112, rad, deg(62), deg(146), [9, 24], [1.5, 4])
  // "grave and learned": three furrows across the brow, and two at its root.
  const brow =
    'M141 62Q151 59 161 63.4M139 70Q150 66.4 162 71M141 78Q150 75.4 160 79' +
    'M162.4 84Q160.6 88.4 161.6 92.6M165 84.6Q163.6 88.6 164.4 92'
  const gown = folds(9505, [14, 214], [262, 280], 8)
  return { hair, nape, cheek, brow, gown }
})

/** Scroop, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function ScroopFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-scr`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={id} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={m.cheek} strokeWidth={1} />
        <path d={m.brow} strokeWidth={1.1} />
      </g>
      {/* the plain collar of the gown, with no ornament */}
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      {/* the brow level and heavy over a steady eye */}
      <path
        d="M143.5 88.8Q153 86 165.5 88.4"
        fill="none"
        stroke={INK}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <ManEye look="open" />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
function ScroopKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={GOWN} />
      <path d={COLLAR} />
    </g>
  )
}

const P = placing(40, -14, 1.08, true)

const ground = once(() =>
  // The council chamber at Southampton, the light ahead of him, to the left.
  portraitGround('hv-scroop', 9510, (x, y) =>
    clamp(0.14 + ((PW - x - 50) / 270) * 0.8 - (y / PH) * 0.12),
  ),
)

function ScroopPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <ScroopKnockout />
        <ScroopFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const scroopPortrait: LinocutArt = { width: PW, height: PH, Draw: ScroopPortrait }

const BROW_AT = P.to(163, 70)
const CHEEK_AT = P.to(128, 134)
const NECK_AT = P.to(149, 226)

export const scroop: Portrait = {
  name: 'Scroop',
  art: scroopPortrait,
  alt: 'A linocut portrait of Lord Scroop in profile, facing left: a lean, clean-shaven man, bareheaded, his dark hair combed straight back from his brow and falling to his jaw. His face is grave: the brow lined with furrows, the cheek hollow under the bone, the eye level and steady under a heavy brow, the mouth closed. He wears a plain dark gown with a plain collar close round the neck and no ornament. Three numbered red markers point to his lined brow, his hollow cheek and the plain collar of his gown.',
  describedBy: [
    { phrase: 'grave and learned', at: [BROW_AT[0] - 50, BROW_AT[1] - 6], to: BROW_AT },
    { phrase: 'spare in diet', at: CHEEK_AT },
    {
      phrase: 'Garnish’d and deck’d in modest complement',
      at: [NECK_AT[0] - 46, NECK_AT[1] + 10],
      to: NECK_AT,
    },
  ],
  where: 'Act 2, Scene 2',
  passage:
    'Show men dutiful? Why, so didst thou. Seem they grave and learned? Why, so didst thou. Come they of noble family? Why, so didst thou. Seem they religious? Why, so didst thou. Or are they spare in diet, Free from gross passion or of mirth or anger, Constant in spirit, not swerving with the blood, Garnish’d and deck’d in modest complement, Not working with the eye without the ear, And but in purged judgement trusting neither? Such and so finely bolted didst thou seem.',
  note: 'Scroop was the King’s close friend, the man who “didst bear the key of all my counsels”, and he took French money to betray him. Unmasking him, Henry lists everything Scroop seemed to be, and calls his treason “Another fall of man”.',
  artNote:
    'Every word of the passage is how Scroop seemed, not what he was. His dark hair and bare head are how the panels draw him; his plain gown is the modest dress the passage gives him.',
}
