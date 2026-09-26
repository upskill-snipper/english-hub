import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { capsule, PH, placing, portraitGround, PortraitRule, PW, spline, type SP } from './common'

/**
 * The Nurse, as the play lets us see her:
 *
 * - She is old. Mercutio sends her off with "Farewell, ancient lady" (2.4).
 * - She says so herself, swearing on "fourteen of my teeth, And yet, to my
 *   teen be it spoken, I have but four" (1.3). So she laughs with her mouth
 *   open, and the few teeth she has show.
 * - She comes to find Romeo in 2.4 with her man Peter, and her first order to
 *   him is "My fan, Peter." Mercutio: "Good Peter, to hide her face; for her
 *   fan's the fairer face." So she holds up a fan, a folding fan spread open
 *   in her fist, below her face so that both can be seen.
 *
 * She is large: Romeo greets her with "A sail, a sail!" So she is broad in
 * the face and the shoulders. Her dress is the panels' (../panels/verona-kit
 * .tsx): a white linen coif over her hair, framing her face and tied under
 * her chin, a dark gown and a white kerchief. There is no red in this plate.
 *
 * She faces left, so the figure is drawn facing right and flipped.
 */

/** The head, old and broad, laughing, facing right in a 0..250 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [70, 236],
  [62, 210],
  [52, 180],
  [44, 146],
  [44, 108],
  [56, 72],
  [80, 48],
  [110, 36],
  [140, 38],
  [157, 52],
  [163, 72],
  [166, 90],
  [163.5, 98, 1],
  [171, 111],
  [180, 123],
  [182, 130],
  [177, 135],
  [169, 136.5, 1],
  [171.5, 142],
  [166, 145, 1],
  [158, 147, 1],
  [165, 152, 1],
  [169, 156],
  [164, 160, 1],
  [171, 169],
  [172, 182],
  [163, 192],
  [148, 198],
  [136, 204],
  [132, 216],
  [134, 236],
]
export const NURSE_HEAD = spline(HEAD_PTS)

/**
 * The coif: white linen over the whole head, its edge framing the face in
 * front of the ear, and falling behind to the shoulders.
 */
const COIF = spline([
  [166, 60, 1],
  [167, 44],
  [150, 28],
  [116, 22],
  [80, 28],
  [52, 46],
  [38, 78],
  [34, 118],
  [36, 160],
  [34, 200],
  [30, 234],
  [24, 262, 1],
  [66, 262],
  [80, 238],
  [94, 214],
  [108, 196, 1],
  [110, 160],
  [110, 128],
  [114, 100],
  [126, 78],
  [144, 64],
])
/** Its turned-back border, round the face. */
const COIF_EDGE = 'M166 60C146 64 128 76 119 96C112 116 110 150 111 190'
/** The band tied under her chin. */
const CHIN_BAND = spline([
  [110, 182, 1],
  [134, 194],
  [156, 199],
  [173, 190, 1],
  [174, 199],
  [156, 207],
  [132, 203],
  [110, 193, 1],
])

/** A broad gown over broad shoulders. */
export const NURSE_BODY = spline([
  [-16, 336, 1],
  [-12, 286],
  [6, 250],
  [40, 228],
  [80, 218],
  [120, 224],
  [150, 220],
  [184, 232],
  [214, 258],
  [232, 296],
  [240, 336, 1],
])
/** A white kerchief over the shoulders, crossed at the breast. */
const KERCHIEF = spline([
  [70, 226, 1],
  [110, 234],
  [150, 226, 1],
  [178, 240],
  [196, 262],
  [170, 300, 1],
  [150, 270],
  [118, 252],
  [84, 248],
  [50, 252, 1],
])

// ── The fan ───────────────────────────────────────────────────────────────
const STICK_X = 226
/** Where the fan's sticks meet, in her fist. */
const PIVOT: [number, number] = [STICK_X, 256]
/**
 * A folding fan, spread above her fist and clear of her face: pleats of
 * paper between the sticks, their outer edge pointed where each fold turns.
 */
function foldingFan(): { fan: string; folds: string } {
  const [cx, cy] = PIVOT
  const pleats = 14
  const a0 = deg(206)
  const a1 = deg(334)
  let fan = `M${n(cx + Math.cos(a0) * 14)} ${n(cy + Math.sin(a0) * 14)}`
  let folds = ''
  for (let i = 0; i <= pleats * 2; i++) {
    const a = a0 + ((a1 - a0) * i) / (pleats * 2)
    const rad = i % 2 ? 60 : 64
    fan += `L${n(cx + Math.cos(a) * rad)} ${n(cy + Math.sin(a) * rad)}`
    if (i % 2 === 0 && i > 0 && i < pleats * 2)
      folds += `M${n(cx + Math.cos(a) * 16)} ${n(cy + Math.sin(a) * 16)}L${n(cx + Math.cos(a) * 62)} ${n(cy + Math.sin(a) * 62)}`
  }
  fan += `L${n(cx + Math.cos(a1) * 14)} ${n(cy + Math.sin(a1) * 14)}Z`
  return { fan, folds }
}
const FAN = foldingFan()
const FLAG = FAN.fan
/** Her fist round the handle: the back of the hand and four fingers, cut apart. */
const X = STICK_X
const FIST = spline([
  [X - 14, 250, 1],
  [X + 4, 248],
  [X + 12, 251],
  [X + 15, 256],
  [X + 11, 261.5, 1],
  [X + 15, 266],
  [X + 11, 271, 1],
  [X + 15, 275.5],
  [X + 11, 280, 1],
  [X + 14, 284],
  [X + 8, 289],
  [X - 10, 289],
  [X - 17, 280],
  [X - 18, 264],
])
const THUMB = capsule(X - 16, 260, X + 6, 253, 7.5)
const FIST_LINES = `M${X + 11} 261.5L${X - 1} 263M${X + 11} 271L${X - 2} 272M${X + 11} 280L${X - 1} 281`
/** Her sleeve, from the foot of the plate up to the wrist. */
const SLEEVE = spline([
  [150, 340, 1],
  [170, 316],
  [190, 296],
  [202, 284, 1],
  [214, 296, 1],
  [208, 316],
  [200, 340, 1],
])

type Marks = {
  coif: string
  wrinkles: string
  back: string
  body: string
  weave: string
  fringe: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // The linen of the coif: a seam over the crown, a few soft folds where it
  // is gathered at the back of the head, and the folds of the fall.
  let coif = 'M160 38C130 24 84 26 56 50C44 62 38 80 38 96'
  for (let i = 0; i < 3; i++) {
    const x = 42 + i * 12 + between(r, -2, 2)
    coif += `M${n(x + 6)} 150Q${n(x)} 200 ${n(x - 6 + i * 2)} 258`
  }

  // An old face: lines across the forehead are hidden by the coif, so the
  // age is round the eye, down from the nose past the laughing mouth, and in
  // the heavy cheek and jowl.
  let wrinkles = ''
  for (let i = 0; i < 5; i++)
    wrinkles += `M${n(145)} ${n(98 + i * 2.8)}L${n(135 - between(r, 0, 3))} ${n(92 + i * 5.5)}`
  wrinkles += 'M168 130C158 138 152 150 156 164M150 132C144 142 142 154 146 166'
  wrinkles += 'M160 176C152 184 144 188 136 190'
  for (let rad = 12; rad < 28; rad += 3.2)
    wrinkles += arcDashes(r, 150, 118, rad, deg(70), deg(150), [8, 16], [2, 5])

  let back = ''
  for (let rad = 60; rad < 110; rad += 3.6)
    back += arcDashes(r, 154, 130, rad, deg(116), deg(166), [8, 20], [2, 6])

  let body = ''
  body += gouge(24, 272, 2, 330, 2.2, 3)
  for (let i = 0; i < 6; i++) {
    const x = between(r, 40, 140)
    body += gouge(x, between(r, 262, 280), x + between(r, -8, 8), 336, between(r, 0.8, 1.3), 1.5)
  }

  // A band of painted work round the fan's outer edge: short ink ticks
  // between two arcs, and the fan's shadowed folds.
  let weave = ''
  for (let k = 0; k < 28; k++) {
    const a = deg(210 + k * 4.4 + between(r, -0.6, 0.6))
    weave += `M${n(PIVOT[0] + Math.cos(a) * 46)} ${n(PIVOT[1] + Math.sin(a) * 46)}L${n(PIVOT[0] + Math.cos(a) * 54)} ${n(PIVOT[1] + Math.sin(a) * 54)}`
  }
  const fringe = FAN.folds

  const m = { coif, wrinkles, back, body, weave, fringe }
  marksBySeed.set(seed, m)
  return m
}

/** The Nurse with her fan, in the 0..280 by 0..332 frame. */
export function NurseFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-nu-head-${seed}`
  const coifClip = `${uid}-nu-coif-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={NURSE_HEAD} />
        </clipPath>
        <clipPath id={coifClip}>
          <path d={COIF} />
        </clipPath>
      </defs>
      <path d={NURSE_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M110 236Q136 250 164 286M96 240Q118 252 140 262"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={NURSE_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d={m.wrinkles} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      {/* the white coif, its folds, its border and the band under her chin */}
      <path d={COIF} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <g clipPath={`url(#${coifClip})`}>
        <path d={m.coif} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      </g>
      <path d={COIF_EDGE} fill="none" stroke={INK} strokeWidth={LINE.bold} />
      <path d={CHIN_BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a broad nostril; the eye creased almost shut with laughing */}
        <path d="M175 127C170 124 170 119 176 118" strokeWidth={1.4} />
        <path d="M145 86Q153 83 162 87" strokeWidth={2.4} />
        <path d="M146 98Q153 92.5 161 97" strokeWidth={2.2} />
        <path d="M147.5 103Q154 100 160.5 101.5" strokeWidth={1.4} />
        <path d="M148 107Q154 110 160 106.5" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={154} cy={98.8} r={2.2} fill={INK} />
      {/* "I have but four": the laughing mouth, dark within, and two teeth left in it */}
      <path d="M171.5 142L158 147L169 156Z" fill={INK} />
      <path d="M166 144.4L166.4 148.4L163 149L162.6 145.7Z" fill={PAPER} />
      <path d="M167.6 153.4L167 150.6L164 151L164.6 153.8Z" fill={PAPER} />
      {/* the fan, and her fist round its handle */}
      <path d={FLAG} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <path d={m.fringe} fill="none" stroke={INK} strokeWidth={1.1} />
      <path d={m.weave} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={FIST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={FIST_LINES} stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <path d={THUMB} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
    </g>
  )
}

/** A thick ink halo round her and the fan. */
export function NurseKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={NURSE_HEAD} />
      <path d={COIF} />
      <path d={NURSE_BODY} />
      <path d={FLAG} />
    </g>
  )
}

const P = placing(12, -2, 0.96, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Midday in the street, light ahead of her on the left.
  ground = portraitGround('the-nurse', 2801, (x, y) =>
    clamp(0.12 + ((PW - x - 30) / 290) * 0.85 - (y / PH) * 0.1),
  )
  return ground
}

function NursePortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <NurseKnockout />
        <NurseFigure uid={uid} seed={2801} />
      </g>
      <PortraitRule />
    </>
  )
}

export const nursePortrait: LinocutArt = { width: PW, height: PH, Draw: NursePortrait }

const FACE_AT = P.to(146, 118)
const MOUTH_AT = P.to(166, 149)
const FAN_AT = P.to(PIVOT[0] + 10, PIVOT[1] - 44)

export const theNurse: Portrait = {
  name: 'The Nurse',
  art: nursePortrait,
  alt: 'A linocut portrait of the Nurse in profile, facing left: a broad old woman with a heavy, lined face, laughing, her eye creased almost shut and her mouth open to show only two teeth. A white linen coif covers her head, frames her face and is tied under her chin, and she wears a dark gown with a white kerchief crossed over it. In front of her, below her chin, she holds up a folding fan, spread open in her fist. Three numbered red markers point to her lined face, her mouth and her fan.',
  describedBy: [
    { phrase: 'ancient lady', at: [FACE_AT[0] + 40, FACE_AT[1] - 90], to: FACE_AT },
    { phrase: 'I have but four', at: [MOUTH_AT[0] + 36, MOUTH_AT[1] + 66], to: MOUTH_AT },
    { phrase: 'My fan, Peter', at: [FAN_AT[0] - 20, FAN_AT[1] - 96], to: FAN_AT },
  ],
  where: 'Act 2, Scene 4; Act 1, Scene 3',
  note: 'The Nurse has cared for Juliet since she was a baby and talks as freely as Mercutio does. He mocks her fan as the fairer of her two faces, and she swears on the teeth she no longer has.',
  artNote:
    'The play says she is old and large, with four teeth; her coif, gown and kerchief are the plain dress of the time, as the panels draw her.',
}
