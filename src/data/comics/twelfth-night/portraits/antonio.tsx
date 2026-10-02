import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  n,
  ribbon,
  rng,
  wave,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  Hand,
  handPoint,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  PortraitRule,
  PW,
  spline,
  turn,
  type Digit,
} from './common'

/**
 * Antonio, the sea captain who pulled Sebastian from the sea and follows him
 * into a town full of his enemies, from what Orsino and he say:
 *
 *   ORSINO: "That face of his I do remember well. Yet when I saw it last it
 *   was besmear'd As black as Vulcan, in the smoke of war. A baubling vessel
 *   was he captain of" (Act 5, Scene 1)
 *   ANTONIO: "Hold, sir, here's my purse. In the south suburbs, at the
 *   Elephant, Is best to lodge." (Act 3, Scene 3)
 *
 * So: a seaman's face Orsino knows again after years, the small ship he
 * captained, and the purse he presses on Sebastian so the young man can buy
 * what he likes while he sees the town. His officer knows him by his face too:
 * "I know your favour well, Though now you have no sea-cap on your head" (Act
 * 3, Scene 4), so at sea he wore one.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a seaman
 * past his youth, with the lines of weather at his eye (WEATHER_LINES) and a
 * short full beard (ANTONIO_BEARD, here with the moustache a full beard has at
 * this size, its strands cut in paper), the knitted sea-cap with its thick
 * turned-up band and the ribs of its knit cut in paper (SEA_CAP and
 * SEA_CAP_CUT, carried to this size point for point), short dark hair at the
 * nape, and a plain seaman's jacket with a plain linen collar and no ruff.
 * His head is every man's head (MAN_HEAD). Behind him is the sea, and on it,
 * far off, a small ship with her sails cut in paper: the "baubling vessel".
 *
 * His devotion to Sebastian is drawn with the same care as every other bond
 * in the play: a grown man of the sea, steady, holding out what he has. The
 * purse is plain leather, gathered at the neck, lying in his open palm, every
 * finger cut apart from the next. There is no red in this plate.
 *
 * Seeds: 8501 (the figure), 8502 to 8505 (its marks), 8510 to 8513 (the sky,
 * the sea and the ship).
 */

/** His head held level: he is offering, not asking. */
const ROT = 0

/** The knitted sea-cap: the kit's SEA_CAP at this size. In the head's frame. */
const SEA_CAP =
  'M39.5 88C31 49.6 57.1 11.2 99.5 5.8C136.9 2 159.5 24.3 161.6 57.3L164.5 76.5C132.7 70.4 78.3 75 39.5 88Z'
/** Its thick turned-up band, and two ribs of the knit, cut in paper (the kit's SEA_CAP_CUT). */
const SEA_CAP_CUT =
  gouge(41.6, 72.7, 162.3, 63.4, 4, -1.4) +
  gouge(78.3, 22.7, 71.3, 59.6, 1.8) +
  gouge(117.2, 18.9, 113.6, 56.5, 1.8) +
  gouge(146, 30, 150, 58, 1.4)

/** Short dark hair at the nape, below the cap. */
const HAIR = spline([
  [56, 84, 1],
  [96, 78],
  [112, 92, 1],
  [100, 100],
  [93, 112],
  [89, 132],
  [80, 150],
  [62, 156],
  [48, 142],
  [42, 116],
  [44, 90, 1],
])

/** A short full beard, from under the ear along the jaw and round the chin. */
const BEARD = spline([
  [106, 134, 1],
  [116, 150],
  [134, 159],
  [152, 159],
  [163, 155, 1],
  [172, 157],
  [175.5, 167],
  [174, 181],
  [165, 193],
  [150, 199],
  [134, 197],
  [118, 184],
  [106, 162],
])
/** The moustache, falling at both ends into the beard, clear of the lips' line. */
const MOUSTACHE = spline([
  [168, 136.6, 1],
  [173, 139.6],
  [174.2, 145],
  [171, 148.6, 1],
  [164, 147],
  [157, 150.4, 1],
  [157.4, 143.4],
  [162, 139],
])

/** The lines of weather at his eye and on his cheek (the kit's WEATHER_LINES at this size). */
const WEATHER =
  'M145 98.6L136.4 94.4M145.4 102.4L137 104.2M146 105.8L139.6 111.2' +
  'M140.6 114C136 120 134.6 128 136 136M131 64.6Q143 61 156 64'

/** His shoulders in a seaman's jacket. */
const BODY = spline([
  [-12, 336, 1],
  [-6, 292],
  [12, 256],
  [44, 230],
  [80, 216],
  [112, 222],
  [148, 216],
  [182, 228],
  [210, 256],
  [228, 294],
  [236, 336, 1],
])
/** A plain linen collar at the neck, no ruff: he is a seaman. */
const COLLAR = spline([
  [72, 214, 1],
  [112, 226],
  [152, 212, 1],
  [156, 225],
  [112, 239],
  [68, 226, 1],
])
const BUTTONS: Pt[] = [
  [184, 250],
  [188.5, 266],
  [193, 282],
]

/** His near forearm, raised from below the block to hold his hand out. */
const SLEEVE = spline([
  [150, 336, 1],
  [164, 300],
  [182, 270],
  [200, 248, 1],
  [224, 262, 1],
  [208, 288],
  [196, 312],
  [188, 336, 1],
])
const SLEEVE_CUTS = gouge(164, 326, 192, 272, 1.2, 1) + gouge(176, 334, 206, 280, 1, 1)
/** The cuff at his wrist. */
const CUFF = spline([
  [197, 244, 1],
  [225, 258, 1],
  [221, 266, 1],
  [193, 251, 1],
])

/**
 * "Hold, sir, here's my purse": his hand held out palm up, the purse lying
 * in it. In the hand's own frame, the wrist at the origin, the fingers along
 * +x; the thumb lifted at the near side.
 */
const HAND_AT: Pt = [212, 250]
const HAND_ROT = -8
const HAND_S = 1.55
const PALM = spline([
  [-2, -7],
  [16, -9],
  [33, -6],
  [37, 1],
  [33, 8],
  [14, 9],
  [-2, 6],
])
const DIGITS: Digit[] = [
  { from: [30, -5], to: [49, -11], w: 6.6 },
  { from: [33, -2], to: [55, -5], w: 7 },
  { from: [34, 2], to: [57.5, 2], w: 7.2 },
  { from: [32, 6], to: [54, 9], w: 7 },
  { from: [6, -3], to: [20, -17], w: 8 },
]
const HAND_LINES =
  'M27 -4Q29 1 28 6M48 -12.4L49.4 -9.4M54.2 -6.6L55.2 -3.4M56.8 0.6L57.2 3.8M53.2 7.4L53.6 10.6'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/**
 * The purse lying in his palm: a leather pouch gathered at the neck by a
 * drawstring, its two ends hanging. In the figure's frame, its foot in the
 * hollow of the palm.
 */
const PURSE_AT = inHand(33, -10)
const PURSE = (() => {
  const [x, y] = PURSE_AT
  return (
    `M${n(x - 18)} ${n(y)}C${n(x - 22)} ${n(y - 14)} ${n(x - 14)} ${n(y - 26)} ${n(x - 5)} ${n(y - 30)}` +
    `L${n(x - 7)} ${n(y - 36)}C${n(x - 3)} ${n(y - 38)} ${n(x + 3)} ${n(y - 38)} ${n(x + 7)} ${n(y - 36)}` +
    `L${n(x + 5)} ${n(y - 30)}C${n(x + 14)} ${n(y - 26)} ${n(x + 22)} ${n(y - 14)} ${n(x + 18)} ${n(y)}Z`
  )
})()
/** The drawstring round the purse's neck, its ends, and the folds of the leather, cut in paper. */
const PURSE_CUTS = (() => {
  const [x, y] = PURSE_AT
  return (
    gouge(x - 7, y - 30.5, x + 7, y - 30.5, 1.4) +
    gouge(x + 4, y - 30, x + 13, y - 22, 0.9, 1) +
    gouge(x + 3, y - 30, x + 9, y - 19, 0.8, 0.6) +
    gouge(x - 9, y - 22, x - 12, y - 6, 1, 0.8) +
    gouge(x - 2, y - 24, x - 3, y - 6, 0.9, 0.4) +
    gouge(x + 7, y - 20, x + 9, y - 6, 0.9, -0.6)
  )
})()

type Marks = { body: string; beard: string; hair: string; sleeve: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(96 - t * 50, 90 + t * 6, 88 - t * 30, 138 + t * 8, 0.9 + r() * 0.3, -2)
  }
  let beard = ''
  for (let i = 0; i < 11; i++) {
    const t = (i + 0.5) / 11
    const x = 114 + t * 56
    const y = 156 + Math.sin(t * Math.PI) * 5
    beard += gouge(x, y, x + 1 + t * 3, y + 18 + Math.sin(t * Math.PI) * 14 + r() * 4, 0.8, -0.6)
  }
  beard += gouge(161, 141.6, 168, 146.4, 0.6, 0.5) + gouge(165, 139.4, 171.4, 145.6, 0.55, 0.5)
  const body = folds(seed + 1, [30, 150], [256, 272], 6)
  const sleeve = SLEEVE_CUTS
  const m = { body, beard, hair, sleeve }
  marksBySeed.set(seed, m)
  return m
}

/** Antonio, head and shoulders, his hand held out, facing right in the 0..240 by 0..332 frame. */
export function AntonioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const beardClip = `${uid}-ant-beard-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={beardClip}>
          <path d={BEARD} />
          <path d={MOUSTACHE} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.8} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-ant-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        {/* the short full beard and the moustache, clear of the lips */}
        <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={1.1} strokeLinejoin="round" />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={PAPER} />
        </g>
        <ManNoseAndMouth />
        <ManBrow w={3} />
        <ManEye look="open" />
        {/* "That face of his": the lines of weather at his eye and cheek */}
        <path
          d={WEATHER}
          fill="none"
          stroke={INK}
          strokeWidth={1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* the knitted sea-cap */}
        <path
          d={SEA_CAP}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={SEA_CAP_CUT} fill={PAPER} />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {/* his forearm, his open hand and the purse in it */}
      <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
        <path d={SLEEVE} />
      </g>
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={PURSE} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
      <path d={PURSE_CUTS} fill={PAPER} />
    </g>
  )
}

/** A thick ink halo round head, cap and shoulders. */
export function AntonioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={SEA_CAP} />
        <path d={BEARD} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(26, 40, 0.86)

// The sea behind him, in the portrait's own coordinates: a pale sky over a
// low horizon, the dark sea below it cut with the paper crests of the swell,
// and far off to the right a small ship with her sails cut in paper.
const HORIZON = 206
/** "A baubling vessel": where the small ship rides, on the horizon at the right. */
const SHIP_AT: Pt = [282, HORIZON - 2]

type Scene = { sky: string; sea: string; hull: string; sails: string; masts: string }
let scene: Scene | undefined
function seaScene(): Scene {
  if (scene) return scene
  // The sky: rows of paper cuts, widest near the horizon, where the light is.
  const r = rng(8510)
  let sky = ''
  for (let y = 14; y < HORIZON - 4; y += 5.6) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 24, 96)
      const x2 = Math.min(x + len, PW - 10)
      const L = clamp(0.12 + (y / HORIZON) * 0.7)
      sky += gouge(
        x,
        y + between(r, -0.5, 0.5),
        x2,
        y + between(r, -0.5, 0.5),
        0.3 + L * 2.2 * between(r, 0.7, 1.1),
      )
      x += len + between(r, 4, 14)
    }
  }
  // The sea: dark, cut with the crests of the swell, small and close at the
  // horizon and longer and further apart as they come in.
  const q = rng(8511)
  let sea = ''
  for (let k = 0, y = HORIZON + 7; y < PH - 10; k++) {
    let x = 10 + between(q, -10, 20)
    const step = 4 + k * 1.6
    while (x < PW - 10) {
      const len = between(q, 18, 40) + k * 6
      const x2 = Math.min(x + len, PW - 10)
      sea += ribbon(
        wave(x, x2, y, 1.2 + k * 0.3, len * 0.9, between(q, 0, 6), 10),
        1 + k * 0.35,
        0.7,
      )
      x += len + between(q, 10, 30)
    }
    y += step
  }
  // The ship: a small dark hull, two masts, and her sails cut in paper.
  const [sx, sy] = SHIP_AT
  const hull = `M${sx - 22} ${sy - 6}L${sx + 24} ${sy - 7}L${sx + 18} ${sy + 2}L${sx - 16} ${sy + 2}Z`
  const masts = `M${sx - 6} ${sy - 6}L${sx - 6} ${sy - 40}M${sx + 10} ${sy - 7}L${sx + 10} ${sy - 32}`
  const sails =
    `M${sx - 18} ${sy - 36}Q${sx - 6} ${sy - 33} ${sx + 4} ${sy - 36}L${sx + 2} ${sy - 12}Q${sx - 6} ${sy - 9} ${sx - 16} ${sy - 12}Z` +
    `M${sx + 3} ${sy - 30}Q${sx + 10} ${sy - 27} ${sx + 18} ${sy - 30}L${sx + 17} ${sy - 13}Q${sx + 10} ${sy - 11} ${sx + 4} ${sy - 13}Z`
  scene = { sky, sea, hull, sails, masts }
  return scene
}

function AntonioPortrait({ uid }: ArtProps) {
  const s = seaScene()
  return (
    <>
      <path d={s.sky} fill={PAPER} />
      <path d={s.sea} fill={PAPER} />
      {/* "A baubling vessel was he captain of" */}
      <g>
        <path d={s.sails} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
        <path d={s.masts} stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
        <path d={s.hull} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={s.sails} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      </g>
      <g transform={P.transform}>
        <AntonioKnockout />
        <AntonioFigure uid={uid} seed={8501} />
      </g>
      <PortraitRule />
    </>
  )
}

export const antonioPortrait: LinocutArt = { width: PW, height: PH, Draw: AntonioPortrait }

/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. The line to his face comes from behind
 * and above, over the cap, and stops at the lines of weather by his eye.
 */
const FACE_AT = onTurnedHead(P, ROT, MAN_EYE[0] - 14, MAN_EYE[1] + 8)
const SHIP_MARK: Pt = [SHIP_AT[0] - 4, SHIP_AT[1] - 22]
const PURSE_MARK = P.to(PURSE_AT[0], PURSE_AT[1] - 40)

export const antonio: Portrait = {
  name: 'Antonio',
  art: antonioPortrait,
  alt: 'A linocut portrait of the sea captain Antonio in profile, facing right, against the sea: a man past his youth with a weathered face, lines at the corner of his eye, a short full dark beard and moustache, and a dark knitted sea-cap with a thick turned-up band. He wears a plain dark jacket with a plain white collar. He holds his hand out before him, palm up, and in it lies a leather purse gathered at the neck with a drawstring. Behind him the dark sea runs to a pale horizon, where a small ship with white sails rides far off. Three numbered red markers point to his face, the small ship and the purse.',
  describedBy: [
    {
      phrase: 'That face of his I do remember well',
      at: [FACE_AT[0] - 36, FACE_AT[1] - 104],
      to: FACE_AT,
    },
    {
      phrase: 'A baubling vessel was he captain of',
      at: [SHIP_MARK[0] - 6, SHIP_MARK[1] - 40],
      to: SHIP_MARK,
    },
    {
      phrase: 'Hold, sir, here’s my purse.',
      at: [PURSE_MARK[0] - 2, PURSE_MARK[1] - 30],
      to: PURSE_MARK,
    },
  ],
  where: 'Act 5, Scene 1; Act 3, Scene 3',
  note: 'Antonio saved Sebastian from the sea and loves him enough to follow him into a town where he has enemies, and to give him his purse. When he is arrested and the youth in front of him (Viola) does not know him, he believes his friend has betrayed him.',
  artNote:
    'The play does not describe his face beyond Orsino knowing it again. His beard and seaman’s jacket are how the panels draw him, and so is his sea-cap, which the officer who arrests him notices he is not wearing that day (“Though now you have no sea-cap on your head”).',
}
