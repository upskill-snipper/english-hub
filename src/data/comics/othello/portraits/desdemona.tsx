import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { HandkerchiefHanging } from '../panels/handkerchief'
import {
  folds,
  Hand,
  handPoint,
  once,
  PH,
  PINCH_AT,
  PINCH_DIGITS,
  PINCH_LINES,
  PINCH_PALM,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Desdemona, from what the play says of her:
 *
 *   "A maiden never bold: Of spirit so still and quiet that her motion
 *   Blush'd at herself" (Brabantio, Act 1, Scene 3)
 *   "O my fair warrior!" (Othello, greeting her on Cyprus, Act 2, Scene 1)
 *   "Have you not sometimes seen a handkerchief Spotted with strawberries in
 *   your wife's hand?" (Iago, Act 3, Scene 3)
 *   "For 'twas that hand that gave away my heart." (Desdemona, Act 3,
 *   Scene 4)
 *
 * So: a young woman, her face lit, the spot colour on her cheek where she
 * blushes, holding up before her breast the handkerchief that was Othello's
 * first gift, by one corner, so that it hangs below her hand with its worked
 * strawberries showing. "She so loves the token ... That she reserves it
 * evermore about her To kiss and talk to" (Emilia, 3.3).
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): every
 * woman's head (WOMAN_HEAD), lit; her dark hair dressed up in a knot at the
 * back of her head, with a paper band over the crown and its strands cut in
 * paper, so it reads as hair and never as a hood; a dark gown with a band of
 * lace at the neck, as a senator's daughter. Her blush is on the cheek, as
 * the kit's FLUSH is, never on the mouth, and laid flat (see BLUSH). The
 * handkerchief is the kit's own (../panels/handkerchief.tsx), cut once for
 * every piece that shows it: its strawberries are drawn as fruit, each with
 * its cap of leaves, in a regular pattern, so the red reads as needlework and
 * never as anything else. Her hand holds it lightly by the corner, between
 * thumb and forefinger, the other three fingers loosely curled and cut apart.
 * She is drawn with the modesty of the time and nothing else; nothing in the
 * portrait is taken from a stage or film production, and none of the names
 * the play's men call her is a word on this card.
 *
 * She faces left, as she faces Othello across the panels, so the figure is
 * drawn facing right and flipped.
 *
 * Seeds: 9201 (the figure's marks), 9210 (the ground).
 */

/** Her dark hair dressed up, from the hairline over the crown and down the back of the head. */
const HAIR = spline([
  [153, 57, 1],
  [146, 46],
  [128, 37],
  [104, 34],
  [80, 40],
  [60, 55],
  [47, 77],
  [43, 104],
  [45, 132],
  [53, 155],
  [66, 170, 1],
  [77, 157],
  [88, 137],
  [94, 117],
  [102, 104],
  [116, 98],
  [126, 99, 1],
  [130, 89],
  [138, 74],
  [146, 63],
])
/** The knot it is gathered into, at the back of the head. */
const KNOT_C: Pt = [50, 88]
const KNOT_R = 24
const KNOT = `M${KNOT_C[0] - KNOT_R} ${KNOT_C[1]}a${KNOT_R} ${KNOT_R} 0 1 0 ${KNOT_R * 2} 0a${KNOT_R} ${KNOT_R} 0 1 0 ${-KNOT_R * 2} 0Z`
/** The band over her crown, from the brow back to the knot: a ribbon cut in paper. */
const BAND = ribbon(
  [
    [149, 62],
    [140, 53],
    [124, 46.5],
    [106, 45.5],
    [89, 50],
    [76, 58.5],
    [68, 68],
  ],
  6.4,
  0.3,
)

/**
 * "Blush'd at herself": the second block laid flat, high on the cheek and
 * well away from the mouth. A soft lozenge, not strokes: red strokes on a
 * cheek read as scratches at card size (the Frankenstein portraits found it
 * first, on William's), and a flat shape reads as a blush.
 */
const BLUSH =
  'M133.4 118.6C134.2 114.2 141.2 111.8 147.6 113C152.2 114 152.8 118.4 149 120.8C144.4 123.4 135.4 123.2 133.4 118.6Z'

/** Her shoulders in a dark gown. */
const GOWN = spline([
  [-4, 336, 1],
  [2, 298],
  [20, 266],
  [52, 242],
  [84, 231],
  [114, 236],
  [142, 230],
  [168, 242],
  [190, 266],
  [204, 298],
  [210, 336, 1],
])

/** The band of lace at the neck of her gown, its lower edge scalloped, and its holes. */
function laceBand(): { band: string; holes: string } {
  const topAt = (x: number) => 238 - Math.pow((x - 122) / 48, 2) * 4
  const footAt = (x: number) => 256 - Math.pow((x - 122) / 48, 2) * 6
  let band = `M74 ${n(topAt(74))}`
  for (let x = 78; x <= 170; x += 4) band += `L${x} ${n(topAt(x))}`
  band += `L170 ${n(footAt(170))}`
  let holes = ''
  for (let x = 170; x > 74; x -= 8) {
    band += `Q${n(x - 4)} ${n(footAt(x - 4) + 7)} ${n(x - 8)} ${n(footAt(x - 8))}`
    holes += `M${n(x - 5.6)} ${n(footAt(x - 4) - 5)}a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z`
  }
  return { band: band + 'Z', holes }
}
const LACE = laceBand()

/** Her near forearm, raised in its sleeve from below the block to the wrist before her breast. */
const SLEEVE = spline([
  [96, 340, 1],
  [108, 306],
  [124, 274],
  [138, 248],
  [146, 228, 1],
  [166, 240, 1],
  [158, 268],
  [146, 300],
  [136, 340, 1],
])
/** The linen frill at her wrist. */
const CUFF = spline([
  [143, 228, 1],
  [154, 220],
  [167, 226],
  [166, 246, 1],
  [158, 242],
  [149, 238],
])

// Her hand, raised before her breast and pointing forward, holding the
// handkerchief by its corner: the shared pinch (./common.tsx), so the cloth
// falls clear of the hand and the hand never reads as a fist.
const HAND_AT: Pt = [158, 233]
const HAND_ROT = 8
const HAND_S = 1.7
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** The corner of the cloth, where thumb and forefinger meet. */
const PINCH = inHand(...PINCH_AT)

type Marks = { hair: string; knot: string; gown: string; sleeve: string }

const marks = once((): Marks => {
  const r = rng(9201)
  // Strands cut in paper, swept back from the hairline over the head to the
  // knot, and up from the nape into it.
  let hair = ''
  for (let i = 0; i < 9; i++) {
    const t = (i + 0.5) / 9
    const x0 = 146 - t * 22 + between(r, -1.5, 1.5)
    const y0 = 62 + t * 34 + between(r, -1.5, 1.5)
    hair += gouge(
      x0,
      y0,
      KNOT_C[0] + 18 + t * 4,
      KNOT_C[1] + 4 + t * 12,
      between(r, 0.55, 0.85),
      -4 - t * 3,
    )
  }
  for (let i = 0; i < 5; i++) {
    const x = 54 + i * 6 + between(r, -1, 1)
    hair += gouge(x, 160 - i * 4, KNOT_C[0] + 2 + i * 4, KNOT_C[1] + 20, between(r, 0.5, 0.75), 2)
  }
  // The turns of the knot, cut in paper.
  let knot = ''
  for (const [rad, a0, a1] of [
    [16, 200, 330],
    [11, 10, 170],
    [6, 220, 340],
  ] as [number, number, number][])
    knot += arc(KNOT_C[0], KNOT_C[1], rad, deg(a0), deg(a1))
  const gown = folds(9202, [10, 120], [280, 292], 5)
  const sleeve = gouge(122, 296, 144, 252, 1, -1) + gouge(116, 334, 134, 292, 0.9, -0.8)
  return { hair, knot, gown, sleeve }
})

/** Desdemona, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function DesdemonaFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-des-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-des`} />
      <path
        d={LACE.band}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path d={LACE.holes} fill={INK} />
      {/* her dark hair dressed up in a knot, the band over her crown */}
      <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.knot} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.3} />
      {/* "Blush'd at herself": a flush high on her cheek, never on her mouth */}
      <path d={BLUSH} fill={RED} />
      <WomanFace eye="open" />
      {/* the handkerchief, hanging from her fingers before her breast */}
      <HandkerchiefHanging at={PINCH} len={76} swing={-5} s={1.75} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path
        d="M147 230Q155 225 164 231M149 236Q156 232 164 238"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
        strokeLinecap="round"
      />
      <Hand
        transform={HAND_T}
        palm={PINCH_PALM}
        digits={PINCH_DIGITS}
        lines={PINCH_LINES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
function DesdemonaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={KNOT} />
      <path d={HAIR} />
      <path d={WOMAN_HEAD} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(44, 2, 0.94, true)

const ground = once(() =>
  // A harbour at Cyprus by day, the light ahead of her, to the left.
  portraitGround('othello-desdemona', 9210, (x, y) =>
    clamp(0.16 + ((PW - x - 40) / 270) * 0.86 - (y / PH) * 0.1),
  ),
)

function DesdemonaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <DesdemonaKnockout />
        <DesdemonaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const desdemonaPortrait: LinocutArt = { width: PW, height: PH, Draw: DesdemonaPortrait }

const FLUSH_AT = P.to(142, 117.6)
const FACE_AT = P.to(156, 72)
const BERRY_AT = P.to(PINCH[0] + 76 * 0.62 * 0.24 - 5 * 0.8, PINCH[1] + 76 * 0.7)
const HAND_MARK = P.to(...inHand(10, 0))

export const desdemona: Portrait = {
  name: 'Desdemona',
  art: desdemonaPortrait,
  alt: 'A linocut portrait of Desdemona in profile, facing left: a young woman with her face lit and pale, her eye open and gentle, and a soft patch of red high on her cheek. Her dark hair is dressed up in a knot at the back of her head, with a pale band over her crown. She wears a dark gown with a pale band of lace at the neck. Her hand is raised before her breast, its fingers open and apart, holding by one corner a small white handkerchief that hangs below it, worked with strawberries printed in red, each with its cap of leaves. Four numbered red markers point to the red on her cheek, her brow, a strawberry on the handkerchief and her hand.',
  describedBy: [
    // On the cheek just behind the blush, with no line, so the blush stays in
    // view: from her neck the line crossed cheek and jaw. (Checked 2 October 2026.)
    { phrase: 'Blush’d at herself', at: [FLUSH_AT[0] + 22, FLUSH_AT[1] + 6] },
    { phrase: 'O my fair warrior', at: [FACE_AT[0] - 30, FACE_AT[1] - 42], to: FACE_AT },
    { phrase: 'Spotted with strawberries', at: [BERRY_AT[0] - 50, BERRY_AT[1] + 4], to: BERRY_AT },
    {
      phrase: '’twas that hand that gave away my heart',
      at: [HAND_MARK[0] + 40, HAND_MARK[1] + 40],
      to: HAND_MARK,
    },
  ],
  where: 'Act 1, Scene 3; Act 2, Scene 1; Act 3, Scenes 3 and 4',
  note: 'Her father remembers a girl so shy that she blushed at herself; the woman who speaks for herself before the senate is braver than he knew. The handkerchief was Othello’s first gift to her, and Iago makes it the false proof of her guilt.',
  artNote:
    'The play gives her no hair, face or dress. She is drawn as the panels draw her, her dark hair dressed up and a band of lace at the neck of her gown; her blush is the one colour on her, and the strawberries are worked on the handkerchief in the same red.',
}
