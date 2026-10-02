import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  capsule,
  combedFromCrown,
  ear,
  EarCut,
  fringe,
  Hand,
  handPoint,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  turn,
  type Digit,
  type SP,
} from './common'

/**
 * Lucius, Brutus's servant, a boy, in the tent at Sardis on the night of the
 * quarrel (Act 4, Scene 3), from Brutus's words to him:
 *
 *   "Bear with me, good boy, I am much forgetful. Canst thou hold up thy
 *   heavy eyes awhile, And touch thy instrument a strain or two?"
 *
 * and, as the boy plays and falls asleep: "If thou dost nod, thou break'st
 * thy instrument; I'll take it from thee; and, good boy, good night." So: a
 * boy nodding over his instrument, his eyes shut, his head bowed towards the
 * strings, one hand fallen slack across them with the fingers apart. He is
 * asleep and safe: nothing in the plate threatens him, and the Ghost, which
 * comes into the tent after he sleeps, is not drawn.
 *
 * The play calls it only his "instrument" with "strings" ("The strings, my
 * lord, are false"), so it is the plain stringed instrument of the time, a
 * lyre: a sounding box, two curved arms and a crossbar, cut pale, its strings
 * drawn in ink. The light is Brutus's taper ("How ill this taper burns!"), a
 * small flame on its stand ahead of him, printed in the spot colour and well
 * clear of him.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a boy, the
 * youth's head made younger (a shorter nose, a softer chin, a slighter
 * neck), his hair cropped and combed forward (ROMAN_HAIR), in a plain tunic.
 *
 * Seeds: 1301 to 1304 (the figure's marks), 1310 and 1311 (the ground and the
 * light).
 */

/** His head bowed in sleep, towards the strings: a turn about the neck. */
const NOD = 14
const NOD_T = `rotate(${NOD} 110 214)`
const onHead = turn(110, 214, NOD)

/** A boy's head: the youth's, the nose shorter, the chin softer, the neck slighter. */
const HEAD_PTS: SP[] = [
  [74, 228],
  [66, 200],
  [54, 174],
  [46, 146],
  [45, 108],
  [57, 72],
  [81, 47],
  [112, 35],
  [141, 37],
  [158, 51],
  [165, 70],
  [168, 88],
  [165, 98, 1],
  [171, 111],
  [177, 122],
  [176, 127.5],
  [169.5, 130.5, 1],
  [171, 137],
  [166.5, 141.5, 1],
  [169.5, 145.5],
  [165.5, 151.5, 1],
  [167.5, 160],
  [164.5, 170],
  [152, 177],
  [138, 180],
  [131, 190],
  [128, 210],
  [129, 228],
]
const HEAD = spline(HEAD_PTS)
const EAR = ear(104, 124, 0.95)

/** Cropped hair, combed forward to a fringe at the brow. */
const HAIR_PTS: SP[] = [
  [160, 56, 1],
  [150, 60],
  [140, 62],
  [131, 67],
  [125, 80],
  [120, 96],
  [116, 106, 1],
  [105, 102],
  [96, 110],
  [90, 130],
  [84, 148],
  [76, 162],
  [64, 170, 1],
  [52, 166],
  [45, 142],
  [44, 108],
  [56, 71],
  [80, 46],
  [112, 34],
  [141, 36],
]
const HAIR = spline(HAIR_PTS)

/** His plain tunic, over a boy's narrower shoulders. */
const TUNIC = shoulders(0.9, 12)
const NECKLINE = 'M88 216C106 228 130 228 148 216'

// ── The lyre, held against his chest, tilted towards him ───────────────────

/** The lyre's own frame: its base on the origin, standing up (y negative). */
const LYRE_BOX = 'M-26 0C-28 -10 -26 -20 -18 -24L18 -24C26 -20 28 -10 26 0C14 6 -14 6 -26 0Z'
const LYRE_ARMS =
  'M-18 -22C-26 -40 -30 -58 -22 -74C-18 -80 -20 -86 -26 -88L-21 -92C-12 -86 -12 -78 -16 -70C-22 -56 -18 -40 -11 -24Z' +
  'M18 -22C26 -40 30 -58 22 -74C18 -80 20 -86 26 -88L21 -92C12 -86 12 -78 16 -70C22 -56 18 -40 11 -24Z'
const LYRE_YOKE = 'M-24 -78L24 -78L24 -71L-24 -71Z'
const LYRE_STRINGS = 'M-9 -71L-8 -10M-3 -71L-2.6 -10M3 -71L2.6 -10M9 -71L8 -10'
const LYRE_AT: Pt = [174, 318]
const LYRE_ROT = -16
const LYRE_T = `translate(${LYRE_AT[0]} ${LYRE_AT[1]}) rotate(${LYRE_ROT})`
const inLyre = handPoint(LYRE_AT, LYRE_ROT, 1)

// The near hand, fallen slack across the strings, the fingers apart: in the
// hand's own frame, the wrist at the origin and the fingers pointing up.
const HAND_AT: Pt = [150, 290]
const HAND_ROT = 64
const HAND_S = 0.72
const PALM = spline([
  [-13, 2],
  [-15, -14],
  [-15, -30],
  [-11, -42],
  [1, -46],
  [14, -44],
  [20, -36],
  [20, -16],
  [15, 0],
])
const DIGITS: Digit[] = [
  { from: [15.5, -36], to: [22, -56], w: 7.4 },
  { from: [8.5, -40], to: [12, -66], w: 8 },
  { from: [0.5, -42], to: [0, -69], w: 8.2 },
  { from: [-7.5, -40], to: [-12, -62], w: 8 },
]
const HAND_LINES = 'M-12.6 -58L-10.2 -59M-1.2 -65L1.6 -65M10.6 -62L13.4 -62.5M19.8 -53L22.2 -53.5'
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** The short sleeve of his tunic over the upper arm, and the bare forearm from the elbow to the wrist. */
const SLEEVE = spline([
  [52, 252],
  [84, 248],
  [102, 270],
  [100, 304],
  [84, 318],
  [58, 312],
  [46, 284],
])
const FOREARM_FROM: Pt = [92, 306]
const FOREARM_TO: Pt = [148, 290]

type Marks = { hair: string; fringe: string; nape: string; tunic: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(1301, HAIR_PTS, [100, 72], 110, [5, 9], [0.5, 0.85], (x) =>
    clamp(0.3 + (x - 50) / 110),
  )
  const edge = fringe([157, 58], [134, 65], 6, 9, 1302)
  const nape = napeShade(1303, 150, 118, 62, 112)
  const r = rng(1304)
  let tunic = ''
  for (let i = 0; i < 5; i++) {
    const x = between(r, 20, 120)
    tunic += gouge(x, between(r, 296, 306), x + between(r, -6, 6), 340, between(r, 0.9, 1.4), 1)
  }
  return { hair, fringe: edge, nape, tunic }
})

/** Lucius asleep over his lyre, facing right in the 0..240 by 0..332 frame. */
export function LuciusFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-lu-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <g transform={NOD_T}>
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.nape} strokeWidth={1.4} />
          <path d="M162 168C148 176 130 174 118 162C113 154 110 146 108 138" strokeWidth={1.2} />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={m.fringe} fill={INK} />
        <EarCut {...EAR} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the brow, and "thy heavy eyes": shut, the lashes down */}
          <path d="M144 86.5Q153.5 83.5 164 87" strokeWidth={2.3} />
          <path d="M146 99Q154 103 162 99.5" strokeWidth={2.3} />
          <path
            d="M148.4 100.6L147.4 104M152.2 101.8L151.8 105.4M156.2 101.8L156.6 105.4M160 100.6L161.2 103.8"
            strokeWidth={0.9}
          />
          {/* a short nose, the mouth closed in sleep, a soft chin */}
          <path d="M172 125C168.4 123 168.6 118.6 173 117.6" strokeWidth={1.3} />
          <path d="M166.4 141.6L159.6 142.2" strokeWidth={1.5} />
          <path d="M165.4 151.5C163.4 152.8 161.4 152.8 159.6 152" strokeWidth={0.9} />
        </g>
      </g>
      <path d={TUNIC} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.tunic} fill={PAPER} />
      <path d={NECKLINE} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
      {/* the lyre against his chest: the box and arms in ink, the strings cut in paper */}
      <g transform={LYRE_T}>
        <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
          <path d={LYRE_BOX} />
          <path d={LYRE_ARMS} />
          <path d={LYRE_YOKE} />
        </g>
        <g fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round">
          <path d={LYRE_BOX} />
          <path d={LYRE_ARMS} />
          <path d={LYRE_YOKE} />
        </g>
        <path d={LYRE_STRINGS} fill="none" stroke={PAPER} strokeWidth={3.4} strokeLinecap="round" />
        <path d={LYRE_STRINGS} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
        <path
          d="M-18 -10Q0 -4 18 -10M-20 -16Q0 -11 20 -16"
          fill="none"
          stroke={INK}
          strokeWidth={1}
        />
      </g>
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path
        d={capsule(FOREARM_FROM[0], FOREARM_FROM[1], FOREARM_TO[0], FOREARM_TO[1], 17)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function LuciusKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={NOD_T}>
        <path d={HEAD} />
        <path d={HAIR} />
      </g>
      <path d={TUNIC} />
    </g>
  )
}

const P = placing(14, 6, 0.98)

/** The taper's flame, ahead of him on its stand, in the portrait's own coordinates. */
const FLAME: Pt = [292, 132]

const light = once(() => {
  const ground = portraitGround('jc-lucius', 1310, (x, y) => {
    const d = Math.hypot(x - FLAME[0], (y - FLAME[1]) * 1.2)
    return clamp(0.86 * Math.max(0, 1 - d / 210) ** 1.3)
  })
  const glow = rays(rng(1311), FLAME[0], FLAME[1] - 4, { from: 16, to: 46, every: 20, width: 1.8 })
  return { ground, glow }
})

function LuciusPortrait({ uid }: ArtProps) {
  const l = light()
  return (
    <>
      <path d={l.ground} fill={PAPER} />
      <path d={l.glow} fill={PAPER} />
      {/* the taper on its stand, its flame in the spot colour */}
      <path
        d={`M${FLAME[0] - 3} ${FLAME[1] + 6}h6v34h-6ZM${FLAME[0] - 11} ${FLAME[1] + 40}h22v6h-22Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d={`M${FLAME[0]} ${FLAME[1] - 14}C${FLAME[0] + 6} ${FLAME[1] - 6} ${FLAME[0] + 5} ${FLAME[1] + 4} ${FLAME[0]} ${FLAME[1] + 5}C${FLAME[0] - 5} ${FLAME[1] + 4} ${FLAME[0] - 6} ${FLAME[1] - 6} ${FLAME[0]} ${FLAME[1] - 14}Z`}
        fill={RED}
        stroke={INK}
        strokeWidth={1}
      />
      <g transform={P.transform}>
        <LuciusKnockout />
        <LuciusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const luciusPortrait: LinocutArt = { width: PW, height: PH, Draw: LuciusPortrait }

const FACE_AT = P.to(...onHead(140, 128))
const EYES_AT = P.to(...onHead(154, 101))
const LYRE_MARK = P.to(...inLyre(14, -76))

export const lucius: Portrait = {
  name: 'Lucius',
  art: luciusPortrait,
  alt: 'A linocut portrait of Lucius, a boy, in profile, facing right, asleep at night: his dark hair cropped short and combed forward, his head bowed, his eyes shut, his mouth closed. He holds a small pale lyre against his chest, its strings drawn in black, and one bare hand has fallen slack across the strings, its fingers apart. Ahead of him, well away, a taper burns on its stand, its small flame printed red. Three numbered red markers point to his face, his shut eyes and the lyre.',
  describedBy: [
    { phrase: 'good boy', at: [FACE_AT[0] - 70, FACE_AT[1] + 30], to: FACE_AT },
    // From in front of his face, as Scrooge's eye marker comes, so the red
    // line crosses only the brow of the nose. (Reviewed 2 October 2026: it
    // first came down from above his head, across the whole of the boy's
    // forehead to the eye.)
    { phrase: 'thy heavy eyes', at: [EYES_AT[0] + 56, EYES_AT[1] - 19], to: EYES_AT },
    { phrase: 'thy instrument', at: [LYRE_MARK[0] + 70, LYRE_MARK[1] - 10], to: LYRE_MARK },
  ],
  where: 'Act 4, Scene 3',
  passage:
    'Bear with me, good boy, I am much forgetful. Canst thou hold up thy heavy eyes awhile, And touch thy instrument a strain or two?',
  note: 'On the night he quarrels with Cassius and learns of Portia’s death, Brutus is gentle with a tired servant boy, and lets him sleep. The tenderness of the private man sits beside the violence of the public one.',
  artNote:
    'The play calls it only his “instrument”, with strings, so it is a plain lyre of the time. He is a boy in a plain tunic with his hair cropped, as in the panels.',
}
