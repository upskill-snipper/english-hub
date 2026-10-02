import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  EarCut,
  Hand,
  handPoint,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Toga,
  togaShapes,
  YOUTH_EAR,
  YOUTH_HEAD_OPEN,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
  type Digit,
} from './common'

/**
 * Mark Antony in the Forum, speaking at Caesar's funeral (Act 3, Scene 2),
 * from three lines of the scene:
 *
 *   SECOND CITIZEN: "Poor soul, his eyes are red as fire with weeping."
 *   ANTONY: "I am no orator, as Brutus is; But, as you know me all, a plain
 *   blunt man, That love my friend"
 *   ANTONY: "My heart is in the coffin there with Caesar, And I must pause
 *   till it come back to me."
 *
 * So: his mouth open, speaking; the rim of his eye red, the only red in the
 * plate, printed on the lower lid and nowhere near the mouth, with a tear cut
 * in paper on the cheek below it; and one hand laid on his heart, the
 * fingers apart. The coffin, the body and the crowd are not drawn: the
 * portrait is the speaker.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the
 * youth's head (HEAD_YOUTH), clean-shaven, with thick curling hair over the
 * crown from the brow to the nape (ANTONY_HAIR), because he is the younger
 * man and an athlete who runs the course at the Lupercal ("Antony, for the
 * course", 1.2) and "is given To sports, to wildness, and much company"
 * (Brutus, 2.1); and the toga, for the Forum. The play describes none of it.
 * The hand on the heart is the gesture of his own line, held low on the
 * chest: no hand in this play is raised.
 *
 * He faces left, towards the crowd he is speaking to, so the figure is drawn
 * facing right and flipped.
 *
 * Seeds: 4101 and 4102 (the figure's marks), 4105 (the toga), 4110 (the
 * ground).
 */

/**
 * Thick curling hair, close to the head: a scalloped mass a little proud of
 * the skull from the brow over the crown to the nape, its inner edge the
 * hairline round the ear and along the temple, with curls at the brow.
 */
const CURL_EDGE: Pt[] = [
  [154, 47],
  [140, 33],
  [112, 26],
  [80, 36],
  [56, 60],
  [42, 96],
  [38, 136],
  [44, 168],
  [56, 192],
]
const CURLS = (() => {
  const cx = 104
  const cy = 118
  let d = `M${n(CURL_EDGE[0][0])} ${n(CURL_EDGE[0][1])}`
  // between each pair of points on the edge, two bumps outward
  for (let i = 1; i < CURL_EDGE.length; i++) {
    const [x0, y0] = CURL_EDGE[i - 1]
    const [x1, y1] = CURL_EDGE[i]
    for (const [t0, t1] of [
      [0, 0.5],
      [0.5, 1],
    ]) {
      const ax = x0 + (x1 - x0) * t0
      const ay = y0 + (y1 - y0) * t0
      const bx = x0 + (x1 - x0) * t1
      const by = y0 + (y1 - y0) * t1
      const mx = (ax + bx) / 2
      const my = (ay + by) / 2
      const ox = mx - cx
      const oy = my - cy
      const L = Math.hypot(ox, oy) || 1
      d += `Q${n(mx + (ox / L) * 8)} ${n(my + (oy / L) * 8)} ${n(bx)} ${n(by)}`
    }
  }
  // the hairline: from the nape up behind the ear, over it, along the temple,
  // and forward to the brow in three small curls
  d +=
    'C70 196 82 180 86 160C90 140 88 120 94 108C100 100 112 100 120 104' +
    'C121 96 123 86 127 78C125 72 129 66 135 66C137 60 141 57 146 58' +
    'C148 53 152 50 157 52Z'
  return d
})()

/** His sleeve, from the foot of the frame to the wrist on his chest. */
const SLEEVE = spline([
  [36, 344, 1],
  [70, 322],
  [104, 302],
  [118, 294, 1],
  [138, 306],
  [134, 326],
  [108, 344, 1],
])

// The hand laid on his heart: the back of the near hand flat on the chest,
// the fingers towards the far shoulder and apart. Drawn with the wrist at
// the origin and the fingers pointing up, then turned onto the chest.
const HAND_AT: Pt = [126, 300]
const HAND_ROT = 34
const HAND_S = 0.92
const PALM = spline([
  [-13, 2],
  [-16, -14],
  [-16, -30],
  [-12, -42],
  [1, -46],
  [15, -44],
  [22, -36],
  [22, -16],
  [16, 0],
])
const DIGITS: Digit[] = [
  { from: [17, -36], to: [23, -57], w: 7.4 },
  { from: [9.5, -40], to: [13, -67], w: 8 },
  { from: [1, -42], to: [1.5, -71], w: 8.4 },
  { from: [-8, -40], to: [-12, -64], w: 8 },
  { from: [-13, -12], to: [-27, -33], w: 9.4 },
]
const HAND_LINES =
  'M-4 -8Q-6 -22 -8 -34M3 -8Q2 -24 1 -36M9 -8Q10 -22 10 -34' +
  'M-13 -60L-10.6 -61M0 -67L3 -67M11 -63L14 -63.5M20.6 -54L23 -54.5'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`

type Marks = { curls: string; nape: string; tears: string }

const marks = once((): Marks => {
  const r = rng(4101)
  // The curls: small crescents cut in paper, turning every way, brighter
  // towards the light at the front of the head.
  let curls = ''
  for (let i = 0, tries = 0; i < 150 && tries < 6000; tries++) {
    const x = between(r, 30, 168)
    const y = between(r, 20, 204)
    const ex = (x - 100) / 64
    const ey = (y - 112) / 88
    if (ex * ex + ey * ey >= 1) continue
    if (x > 90 && y > 102) continue
    if (x > 124 && y > 62) continue
    const a = between(r, 0, Math.PI * 2)
    const L = between(r, 6, 11)
    const light = clamp((x - 30) / 140)
    curls += gouge(
      x,
      y,
      x + Math.cos(a) * L,
      y + Math.sin(a) * L,
      between(r, 0.8, 1.2) * (0.7 + light * 0.7),
      between(r, 2.4, 3.6) * (r() < 0.5 ? -1 : 1),
    )
    i++
  }
  const nape = napeShade(4102, 150, 120, 66, 124)
  // "red as fire with weeping": a tear on the cheek below the eye, cut in paper.
  const tears = 'M150 112C148 116 148.4 120 151 121C153.6 120 154 116 150 112Z'
  return { curls, nape, tears }
})

/** Antony, head and shoulders, speaking, facing right in the 0..240 by 0..332 frame. */
export function AntonyFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-ma-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={YOUTH_HEAD_OPEN} />
        </clipPath>
      </defs>
      <path d={YOUTH_HEAD_OPEN} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
        <path d={YOUTH_JAW} strokeWidth={1.8} />
        <path d="M128 190C130 204 132 216 133 228" strokeWidth={LINE.hairline} />
      </g>
      <path d={CURLS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.curls} fill={PAPER} />
      <EarCut {...YOUTH_EAR} />
      <YouthNoseAndMouth open />
      <YouthEye look="open" brow={3.4} />
      {/* the knot of the throat: a grown man, not a boy */}
      <path
        d="M134 197Q138 202 135 208"
        fill="none"
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
      {/* "his eyes are red as fire with weeping": the rims of the eye, and only they */}
      <path
        d="M148 102.8Q155 105.6 161.6 101.6"
        fill="none"
        stroke={RED}
        strokeWidth={2.3}
        strokeLinecap="round"
      />
      <path d={m.tears} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      <Toga seed={4105} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d="M114 298C122 302 128 310 131 320" fill="none" stroke={PAPER} strokeWidth={1.2} />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function AntonyKnockout() {
  const t = togaShapes(4105)
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={YOUTH_HEAD_OPEN} />
      <path d={CURLS} />
      <path d={t.body} />
    </g>
  )
}

const P = placing(22, -2, 1.02, true)

const ground = once(() =>
  // Daylight in the Forum, ahead of him, to the left.
  portraitGround('jc-antony', 4110, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 270) * 0.85 - (y / PH) * 0.14),
  ),
)

function AntonyPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <AntonyKnockout />
        <AntonyFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const antonyPortrait: LinocutArt = { width: PW, height: PH, Draw: AntonyPortrait }

const EYE_AT = P.to(156, 103)
/** In the air just before the open lips: no red line touches or crosses a mouth. */
const MOUTH_AT = P.to(181, 146)
const HAND_MARK = P.to(...inHand(2, -40))

export const markAntony: Portrait = {
  name: 'Mark Antony',
  art: antonyPortrait,
  alt: 'A linocut portrait of Mark Antony in profile, facing left, speaking: a young, clean-shaven man with thick curling dark hair, his mouth open, the rims of his eye printed red and a tear on his cheek. He wears a dark toga drawn over one shoulder, and lays one hand flat on his heart, its fingers spread on the cloth. Three numbered red markers point to his red-rimmed eye, his open mouth and the hand on his heart.',
  describedBy: [
    {
      phrase: 'his eyes are red as fire with weeping',
      at: [EYE_AT[0] - 26, EYE_AT[1] - 64],
      to: EYE_AT,
    },
    {
      phrase: 'I am no orator, as Brutus is',
      at: [MOUTH_AT[0] - 64, MOUTH_AT[1] + 18],
      to: MOUTH_AT,
    },
    {
      phrase: 'My heart is in the coffin there with Caesar',
      at: [HAND_MARK[0] - 58, HAND_MARK[1] + 30],
      to: HAND_MARK,
    },
  ],
  where: 'Act 3, Scene 2',
  note: 'The crowd can see that Antony has been weeping, and he tells them he is no speaker in the middle of the speech that turns Rome against the conspirators. A strong answer can hold both: the grief is real, and he uses it.',
  artNote:
    'The play does not describe his face. His curls and his youth are the panels’, from the young athlete who runs the course at the Lupercal; the print’s one colour marks the rims of his eyes.',
}
