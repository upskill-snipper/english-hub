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
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  combedFromCrown,
  EarCut,
  fringe,
  Hand,
  handPoint,
  MAN_EAR,
  MAN_HEAD,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  star,
  turn,
  type Digit,
  type SP,
} from './common'

/**
 * Marcus Brutus, as his wife describes him in his orchard before dawn (Act 2,
 * Scene 1):
 *
 *   PORTIA: "You suddenly arose, and walk'd about, Musing and sighing, with
 *   your arms across; And when I ask'd you what the matter was, You star'd
 *   upon me with ungentle looks."
 *
 * So: his arms folded across his chest, his head a little bowed, and an eye
 * that stares and does not soften. He has not slept ("Since Cassius first
 * did whet me against Caesar, I have not slept", 2.1), so there is shadow
 * under the eye. His own word for his face, in the same scene, is "All the
 * charactery of my sad brows".
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): his "sad
 * brows" drawn up towards the nose, not down as in anger, with creases across
 * the forehead above them (BRUTUS_BROW); clean-shaven; his thick dark hair
 * cropped and combed forward, the hairline a little higher than other men's
 * (BRUTUS_HAIR); his arms across, as `folded` gives him. Risen from his bed,
 * he is "unbraced" (Portia, in the same scene): the loose robe of a man at
 * home, ungirt, with a mantle hanging open from his shoulders (HOUSE_MANTLE).
 *
 * The ground is the night in the orchard: "The exhalations, whizzing in the
 * air Give so much light that I may read by them" (Brutus, 2.1). Two of them
 * cross the dark above him among a few stars, cut in paper. The orchard
 * panel prints its meteor red; here a red streak in the sky read as one more
 * marker's line (tried, 2 October 2026), so the plate keeps its red for the
 * markers alone. Nothing else in the scene is drawn.
 *
 * Seeds: 2101 to 2104 (the figure's marks), 2110 and 2111 (the ground and the
 * sky).
 */

/** The head bowed a little, "Musing": a turn about the neck. */
const BOW = 5
const BOW_T = `rotate(${BOW} 112 214)`
const onHead = turn(112, 214, BOW)

/**
 * Thick dark hair cropped and combed forward, the hairline set a little
 * higher than other men's, leaving the creased forehead (BRUTUS_HAIR).
 */
const HAIR_PTS: SP[] = [
  [154, 50, 1],
  [146, 55],
  [137, 58],
  [130, 66],
  [125, 80],
  [121, 96],
  [117, 108, 1],
  [106, 104],
  [96, 112],
  [90, 132],
  [84, 150],
  [76, 164],
  [62, 172, 1],
  [48, 170],
  [41, 142],
  [42, 108],
  [53, 73],
  [76, 48],
  [110, 36],
  [140, 37],
]
const HAIR = spline(HAIR_PTS)

// ── The body, turned a little towards us, and the arms across ──────────────
// The head is in profile; the shoulders are turned a quarter towards us, so
// the folded arms can be seen: the far forearm laid over the near one across
// the chest, its hand closed over the near upper arm with the fingers apart,
// and the near hand tucked out of sight under the far arm. All in the robe's
// dark sleeves, each lifted off the next by a paper edge. The shapes run past
// the foot of the frame, because the figure is placed high to show the arms.

/** The loose robe over the shoulders and chest: "unbraced". */
const ROBE = spline([
  [-20, 372, 1],
  [-16, 300],
  [-2, 266],
  [26, 246],
  [62, 234],
  [100, 232],
  [134, 230],
  [170, 236],
  [204, 250],
  [228, 276],
  [244, 320],
  [248, 372, 1],
])
/** The robe hanging open at the neck, "unbraced": the chest showing in a deep V. */
const ROBE_OPEN = 'M94 230C104 248 116 262 128 270C140 258 152 244 162 232C140 238 116 238 94 230Z'
/** The mantle hanging open from his shoulders behind him. */
const MANTLE = spline([
  [-24, 372, 1],
  [-22, 300],
  [-8, 262],
  [20, 240],
  [56, 228],
  [84, 230, 1],
  [56, 250],
  [30, 290],
  [18, 372, 1],
])
/** The near upper arm, hanging at his side to the elbow at the foot of the frame. */
const NEAR_UPPER = spline([
  [2, 268],
  [36, 262],
  [54, 300],
  [58, 344],
  [50, 372, 1],
  [-6, 372, 1],
  [-10, 320],
])
/** The far upper arm, at the other side of the chest. */
const FAR_UPPER = spline([
  [206, 256],
  [232, 270],
  [244, 314],
  [246, 372, 1],
  [196, 372, 1],
  [196, 320],
  [198, 284],
])
/** The near forearm, across the chest under the far one, its hand out of sight. */
const NEAR_FORE = spline([
  [24, 346, 1],
  [90, 334],
  [160, 322],
  [212, 314, 1],
  [214, 350, 1],
  [150, 360],
  [80, 368],
  [26, 374, 1],
])
/** The far forearm, laid over it, from the far elbow back to the near arm. */
const FAR_FORE = spline([
  [238, 320, 1],
  [180, 312],
  [120, 304],
  [64, 300, 1],
  [60, 334, 1],
  [120, 340],
  [184, 344],
  [240, 352, 1],
])

/** The far hand, closed over the near upper arm, fingers pointing back: in the hand's own frame. */
const HAND_AT: Pt = [70, 318]
const HAND_ROT = -100
const HAND_S = 0.9
const PALM = spline([
  [-14, 2],
  [-17, -14],
  [-17, -28],
  [-13, -38],
  [1, -42],
  [15, -40],
  [21, -32],
  [21, -14],
  [16, 0],
])
const DIGITS: Digit[] = [
  // the little finger, the ring finger, the middle finger, the index: short,
  // because they curl over the arm, and each its own, apart
  { from: [16, -33], to: [19, -50], w: 7 },
  { from: [8.5, -37], to: [10, -57], w: 7.6 },
  { from: [0, -39], to: [-0.5, -59], w: 8 },
  { from: [-8.5, -37], to: [-11, -55], w: 7.6 },
]
const HAND_LINES =
  'M-3 -8Q-5 -20 -7 -30M3 -8Q2 -22 1 -32M9 -8Q10 -20 10 -30' +
  'M-12 -52L-9.6 -53M-2 -56L1 -56M8.6 -54L11.4 -54.6M17.4 -47.6L20 -48'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`

type Marks = {
  hair: string
  fringe: string
  nape: string
  sleepless: string
  robe: string
  mantle: string
  sleeves: string
  chest: string
}

const marks = once((): Marks => {
  const hair = combedFromCrown(2101, HAIR_PTS, [98, 70], 170, [6, 11], [0.55, 0.95], (x) =>
    clamp(0.3 + (x - 50) / 100),
  )
  const edge = fringe([151, 52], [131, 62], 6, 9, 2102)
  const nape = napeShade(2103, 150, 118, 72, 128)
  // "I have not slept": shadow under the eye, in short arcs.
  const r = rng(2104)
  let sleepless = ''
  for (let rad = 6; rad < 12; rad += 2.4)
    sleepless += arcDashes(r, 154, 101, rad, deg(40), deg(150), [5, 12], [1.4, 3])
  // Folds of the robe over the chest, and of the mantle, cut in paper.
  let robe = ''
  for (let i = 0; i < 6; i++) {
    const x = between(r, 84, 190)
    robe += gouge(x, between(r, 250, 262), x + between(r, -6, 6), 302, between(r, 0.9, 1.4), 1)
  }
  let mantle = ''
  for (let i = 0; i < 3; i++) {
    const x = between(r, -10, 20)
    mantle += gouge(
      x + 18,
      between(r, 246, 260),
      x - between(r, 2, 8),
      300,
      between(r, 1.1, 1.6),
      1.4,
    )
  }
  // The sleeves: creases along the forearms, and the turn of each upper arm.
  const sleeves =
    gouge(96, 320, 226, 326, 1.3, 1.2) +
    gouge(120, 312, 200, 316, 0.8, 0.6) +
    gouge(110, 334, 210, 340, 0.9, 0.8) +
    gouge(40, 354, 190, 342, 1, -0.8) +
    gouge(60, 362, 140, 356, 0.8, -0.6) +
    gouge(16, 280, 30, 330, 1.1, -1.4) +
    gouge(28, 276, 44, 318, 0.8, -1.2) +
    gouge(212, 278, 228, 314, 1.1, 1.2) +
    gouge(222, 274, 238, 304, 0.8, 1) +
    wedge(236, 326, 240, 346, 1, 2.2)
  // The shadow on the open chest, under the robe's edges.
  let chest = ''
  for (let i = 0; i < 3; i++) {
    const y = 241 + i * 6
    chest += `M${n(108 + i * 5)} ${n(y)}L${n(116 + i * 5)} ${n(y + 4)}M${n(148 - i * 5)} ${n(y)}L${n(140 - i * 5)} ${n(y + 4)}`
  }
  return { hair, fringe: edge, nape, sleepless, robe, mantle, sleeves, chest }
})

/** Brutus, head and shoulders, arms across, facing right in the 0..240 by 0..332 frame. */
export function BrutusFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-br-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      <path d={MANTLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.mantle} fill={PAPER} />
      <path d={ROBE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.robe} fill={PAPER} />
      <g transform={BOW_T}>
        <path d={MAN_HEAD} fill={PAPER} />
        <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.nape} strokeWidth={1.5} />
          <path d={m.sleepless} strokeWidth={0.95} />
          <path d="M167 183C150 187 132 180 121 168" strokeWidth={1.4} />
          <path d="M126 194C128 208 130 220 131 234" strokeWidth={LINE.hairline} />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={m.fringe} fill={INK} />
        <EarCut {...MAN_EAR} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* "my sad brows": the brow drawn up towards the nose, and the creases above */}
          <path d="M142 91Q153 89.5 166 83" strokeWidth={3} />
          <path d="M152 77Q158 74.5 164 73M154 69.5Q159 67.6 163.6 67" strokeWidth={1.2} />
          {/* "You star'd upon me with ungentle looks": the eye open and hard */}
          <path d="M146 98.6Q154 95.6 162.6 97.6" strokeWidth={2.4} />
          <path d="M147.6 103.6Q154.6 105.6 161 102.6" strokeWidth={1.1} />
          {/* nostril, the closed mouth, the chin */}
          <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
          <path d="M170 148.2L162.6 148.8" strokeWidth={1.7} />
          <path d="M165 125Q160 134 161.5 145" strokeWidth={1} />
          <path d="M168 163Q163 165 164 170" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={155.6} cy={100.2} r={2.7} fill={INK} />
      </g>
      <path d={ROBE_OPEN} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={m.chest}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      {/* the arms across: the upper arms, the near forearm, the far forearm over it, the far hand */}
      <g stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
        <path d={FAR_UPPER} fill={INK} />
        <path d={NEAR_UPPER} fill={INK} />
        <path d={NEAR_FORE} fill={INK} />
        <path d={FAR_FORE} fill={INK} />
      </g>
      <path d={m.sleeves} fill={PAPER} />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} />
    </g>
  )
}

/** A thick ink halo round head, shoulders and arms. */
function BrutusKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={BOW_T}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
      </g>
      <path d={ROBE} />
      <path d={MANTLE} />
      <path d={NEAR_UPPER} />
      <path d={FAR_UPPER} />
      <path d={NEAR_FORE} />
      <path d={FAR_FORE} />
    </g>
  )
}

const P = placing(30, -14, 0.9)

const sky = once(() => {
  // Night in the orchard, a little light ahead of him from the sky.
  const ground = portraitGround('jc-brutus', 2110, (x, y) =>
    clamp(0.02 + ((x - 150) / 200) * 0.5 - (y / PH) * 0.3),
  )
  const r = rng(2111)
  // "The exhalations, whizzing in the air": two meteors crossing the dark,
  // each a long gouge with its trail breaking up behind it.
  const streak = (x: number, y: number, len: number, a: number, w: number) => {
    const ang = deg(a)
    let d = gouge(x, y, x + Math.cos(ang) * len, y + Math.sin(ang) * len, w, 0)
    for (let k = 1; k < 4; k++) {
      const t = 1 + k * 0.16
      d += gouge(
        x + Math.cos(ang) * len * t,
        y + Math.sin(ang) * len * t,
        x + Math.cos(ang) * len * (t + 0.1),
        y + Math.sin(ang) * len * (t + 0.1),
        w * 0.5 - k * 0.2,
      )
    }
    return d
  }
  const streaks = streak(292, 36, 64, 152, 2.4) + streak(314, 104, 44, 156, 2)
  let stars = ''
  const placed: Pt[] = []
  for (let tries = 0; placed.length < 9 && tries < 400; tries++) {
    const x = between(r, 200, PW - 20)
    const y = between(r, 20, 150)
    if (placed.some(([px, py]) => Math.hypot(px - x, py - y) < 26)) continue
    placed.push([x, y])
    stars += star(x, y, between(r, 2.6, 3.6))
  }
  return { ground, streaks, stars }
})

function BrutusPortrait({ uid }: ArtProps) {
  const s = sky()
  return (
    <>
      <path d={s.ground} fill={PAPER} />
      <path d={s.stars} fill={PAPER} />
      <path d={s.streaks} fill={PAPER} />
      <g transform={P.transform}>
        <BrutusKnockout />
        <BrutusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const brutusPortrait: LinocutArt = { width: PW, height: PH, Draw: BrutusPortrait }

const BROW_AT = P.to(...onHead(158, 72))
const EYE_AT = P.to(...onHead(156, 100))
const ARMS_AT = P.to(...inHand(2, -26))

export const marcusBrutus: Portrait = {
  name: 'Marcus Brutus',
  art: brutusPortrait,
  alt: 'A linocut portrait of Brutus in profile, facing right, at night: a clean-shaven man with thick dark hair cropped and combed forward, his head a little bowed, his brows drawn up towards his nose with creases across the forehead above them, his eye open and hard with shadow under it. He wears a loose dark robe open at the neck, with a mantle hanging from his shoulders, and his arms are folded across his chest, one hand closed over the other arm, its fingers apart. Behind him the night sky has a few stars, and two shooting lights streak across it. Three numbered red markers point to his creased brow, his folded arms and his eye.',
  describedBy: [
    { phrase: 'Musing and sighing', at: [BROW_AT[0] + 44, BROW_AT[1] - 38], to: BROW_AT },
    { phrase: 'with your arms across', at: [ARMS_AT[0] - 26, ARMS_AT[1] - 52], to: ARMS_AT },
    { phrase: 'ungentle looks', at: [EYE_AT[0] + 62, EYE_AT[1] + 12], to: EYE_AT },
  ],
  where: 'Act 2, Scene 1',
  passage:
    'You suddenly arose, and walk’d about, Musing and sighing, with your arms across; And when I ask’d you what the matter was, You star’d upon me with ungentle looks.',
  note: 'Portia describes a husband she no longer knows: a man who walks out of supper with his arms folded and will not answer her. She has seen the conspiracy working on him before she knows what it is.',
  artNote:
    'The play does not describe his face. His “sad brows” are his own words, drawn up towards the nose as in the panels, and he wears the loose robe of a man risen from his bed.',
}
