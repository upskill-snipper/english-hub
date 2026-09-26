import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
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

import { capsule, PH, placing, portraitGround, PortraitRule, PW, spline, type SP } from './common'

/**
 * Prince Escalus, ruler of Verona, as he stops the brawl that opens the play
 * (1.1):
 *
 *   "Throw your mistemper'd weapons to the ground And hear the sentence of
 *   your moved prince."
 *
 * So he points to the ground with one hand, the first finger out and the
 * others folded, and speaks with his brow drawn down: "moved" means angered.
 * The pointing arm is bent and low, never raised flat.
 *
 * The play never describes him. He is drawn as the panels draw him
 * (../panels/late-scenes-people.tsx and ../panels/a-brawl-in-the-streets
 * .tsx): a short dark beard along the jaw, a circlet with three low points, a
 * long gown and a chain of office across it. The circlet is printed red, as
 * it is in the panel of this same moment, for the power that ends the fight.
 */

/** The head, a man in his prime, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [66, 226],
  [60, 200],
  [52, 176],
  [44, 146],
  [44, 108],
  [56, 72],
  [80, 47],
  [112, 34],
  [142, 36],
  [160, 50],
  [167, 70],
  [170, 88],
  [166.5, 97, 1],
  [175, 112],
  [185, 127],
  [183.5, 133],
  [174, 136, 1],
  [177, 148],
  [178, 166],
  [174, 180],
  [162, 190],
  [146, 194],
  [134, 200],
  [132, 212],
  [134, 226],
]
export const PRINCE_HEAD = spline(HEAD_PTS)

/** Short dark hair, clipped to the skull; its front edge is the hairline. */
const HAIR = spline([
  [156, 44],
  [148, 54],
  [138, 64],
  [130, 78],
  [125, 94],
  [122, 106, 1],
  [110, 102],
  [98, 100],
  [90, 108],
  [86, 132],
  [82, 160],
  [72, 186],
  [58, 204, 1],
  [20, 200, 1],
  [20, 10, 1],
  [180, 10, 1],
])
/** A short dark beard along the jaw and round the chin, and the moustache. */
const BEARD = spline([
  [116, 124, 1],
  [124, 146],
  [140, 158],
  [158, 158],
  [170, 152],
  [177, 150, 1],
  [179, 166],
  [175, 181],
  [163, 192],
  [146, 196],
  [130, 188],
  [118, 170],
  [112, 146],
])
const MOUSTACHE = spline([
  [174, 136, 1],
  [182, 141],
  [184, 148],
  [176, 147],
  [168, 149],
  [160, 152, 1],
  [164, 143],
])
/** "hear the sentence": the mouth open as he speaks. */
const MOUTH =
  'M180 148.5C175 149 169 150.5 165 153C169 157 176 158 181 156C182 153.5 181.5 151 180 148.5Z'
/** The circlet, level round his head above the brow, with three low points. */
const CIRCLET =
  'M54 62Q110 62 167 70L167 80Q110 72 56 73Z' +
  'M68 62.2L76 47L84 62.6ZM108 63.6L116 48L124 64.6ZM146 67.6L154 53L162 69.4Z'
const EAR = spline([
  [110, 108],
  [100, 106],
  [93, 114],
  [92, 126],
  [95, 139],
  [104, 146],
  [110, 142],
  [112, 132],
  [112, 118],
])

/** The long gown over his shoulders. */
export const PRINCE_BODY = spline([
  [-14, 336, 1],
  [-10, 290],
  [8, 254],
  [40, 230],
  [72, 218],
  [110, 224],
  [150, 220],
  [184, 234],
  [212, 260],
  [228, 296],
  [236, 336, 1],
])
const COLLAR = spline([
  [62, 200, 1],
  [100, 210],
  [140, 206, 1],
  [144, 222],
  [102, 230],
  [60, 222, 1],
])

// ── The pointing arm ──────────────────────────────────────────────────────
/** The sleeve, from the shoulder forward and down to the wrist. */
const SLEEVE = spline([
  [150, 232, 1],
  [178, 238],
  [204, 254],
  [222, 272, 1],
  [214, 288, 1],
  [194, 274],
  [168, 264],
  [140, 260, 1],
])
/** The back of the hand, the three folded fingers a row of knuckles below it. */
const HAND = spline([
  [212, 270, 1],
  [226, 266],
  [236, 274],
  [238, 286, 1],
  [233, 290],
  [229, 287, 1],
  [225, 292],
  [220, 289, 1],
  [215, 292],
  [210, 286],
])
/** The first finger, straight out and down to the ground. */
const FINGER = capsule(234, 283, 243.5, 305, 7.6)
const THUMB = capsule(214, 278, 222, 294, 7)
const HAND_LINES = 'M229 287L229 279M220 289L220 280M239.5 303.5L243.6 301.8M236 293.5L240 292'
/** The hand is drawn at a little over life size, so it reads at phone width. */
const HAND_T = 'translate(226 280) scale(1.25) translate(-226 -280)'
const inHand = (x: number, y: number): [number, number] => [
  226 + (x - 226) * 1.25,
  280 + (y - 280) * 1.25,
]

type Marks = { hair: string; beard: string; back: string; body: string; chain: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  let hair = ''
  for (let i = 0; i < 36; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 36
    const sx = 152 - t * 30 + between(r, -2, 2)
    const sy = 46 + t * 60 + between(r, -2, 2)
    const ex = 50 + t * 34 + between(r, -4, 4)
    const ey = 62 + t * 118 + between(r, -4, 4)
    hair += gouge(sx, sy, ex, ey, between(r, 0.6, 1.1) * (1.25 - t * 0.5), between(r, -9, -3))
  }
  // The beard: short paper strokes through the ink, raked down and forward.
  let beard = ''
  for (let i = 0; i < 60; i++) {
    const x = between(r, 118, 176)
    const y = between(r, 140, 192)
    beard += gouge(x, y, x + between(r, 0, 3), y + between(r, 5, 9), between(r, 0.4, 0.7), 0.4)
  }
  let back = ''
  for (let rad = 56; rad < 118; rad += 3.6)
    back += arcDashes(r, 152, 126, rad, deg(112), deg(172), [8, 22], [2, 6])
  let body = ''
  body += gouge(24, 276, 2, 330, 2.2, 3)
  for (let i = 0; i < 6; i++) {
    const x = between(r, 40, 140)
    body += gouge(x, between(r, 252, 272), x + between(r, -8, 8), 336, between(r, 0.8, 1.3), 1.5)
  }
  // The chain of office: links hung in a curve across the gown.
  let chain = ''
  const links: Pt[] = []
  for (let i = 0; i <= 16; i++) {
    const t = i / 16
    links.push([70 + t * 110, 232 + Math.sin(t * Math.PI) * 60 - t * 6])
  }
  for (let i = 0; i < links.length; i++) {
    const [x, y] = links[i]
    const w = i % 2 ? 3.4 : 5
    const h = i % 2 ? 5 : 3.4
    chain += `M${n(x - w)} ${n(y)}a${n(w)} ${n(h)} 0 1 0 ${n(w * 2)} 0a${n(w)} ${n(h)} 0 1 0 ${n(-w * 2)} 0Z`
  }

  const m = { hair, beard, back, body, chain }
  marksBySeed.set(seed, m)
  return m
}

/** Prince Escalus pointing to the ground, in the 0..250 by 0..332 frame. */
export function PrinceFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-pe-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={PRINCE_HEAD} />
        </clipPath>
      </defs>
      <path d={PRINCE_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={m.chain} fill="none" stroke={PAPER} strokeWidth={1.6} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={PRINCE_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.7} strokeLinecap="round" />
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path
        d="M106 114C99 116 97 124 99 132C100 136 103 138 106 135"
        fill="none"
        stroke={INK}
        strokeWidth={1.6}
      />
      <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <path d={m.beard} fill={PAPER} />
      <path d={MOUTH} fill={INK} />
      <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M178 131C173 128 173 122 179 121" strokeWidth={1.5} />
        {/* "your moved prince": the brow drawn down in anger, the eye hard */}
        <path d="M144 86Q153 86 162 91.5L167 94" strokeWidth={3.2} />
        <path d="M147 99Q155 96 163 99.5" strokeWidth={2.3} />
        <path d="M148.5 104Q155 105.5 162 102.5" strokeWidth={1.1} />
        <path d="M160 78L163 86M155 78L157 85" strokeWidth={1} />
      </g>
      <circle cx={156.6} cy={101} r={2.6} fill={INK} />
      {/* the circlet, printed red */}
      <path d={CIRCLET} fill={RED} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      {/* the arm, and the hand pointing to the ground */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g transform={HAND_T}>
        <g fill={INK} stroke={INK} strokeWidth={4} strokeLinejoin="round">
          <path d={HAND} />
          <path d={FINGER} />
          <path d={THUMB} />
        </g>
        <path d={THUMB} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={FINGER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={HAND_LINES} stroke={INK} strokeWidth={LINE.hairline} strokeLinecap="round" />
      </g>
    </g>
  )
}

/** A thick ink halo round head, circlet, gown and arm. */
export function PrinceKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={PRINCE_HEAD} />
      <path d={CIRCLET} />
      <path d={PRINCE_BODY} />
      <path d={SLEEVE} />
      <path d={HAND} transform={HAND_T} />
      <path d={FINGER} transform={HAND_T} />
    </g>
  )
}

const P = placing(16, -8, 0.98)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Morning in the square (1.1), light ahead of him.
  ground = portraitGround('prince-escalus', 3201, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.85 - (y / PH) * 0.1),
  )
  return ground
}

function PrincePortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <PrinceKnockout />
        <PrinceFigure uid={uid} seed={3201} />
      </g>
      <PortraitRule />
    </>
  )
}

export const princeEscalusPortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: PrincePortrait,
}

const FINGER_AT = P.to(...inHand(240, 298))
const MOUTH_AT = P.to(176, 153)
const BROW_AT = P.to(156, 90)

export const princeEscalus: Portrait = {
  name: 'Prince Escalus',
  art: princeEscalusPortrait,
  alt: 'A linocut portrait of Prince Escalus in profile, facing right: a man in his prime with short dark hair and a short dark beard along his jaw, wearing a circlet with three low points, printed in red. His brow is drawn down hard and his mouth is open as he speaks. He wears a dark gown with a chain of office hung across it, and with his arm bent low he points one finger down at the ground. Three numbered red markers point to his pointing finger, his mouth and his frowning brow.',
  describedBy: [
    {
      phrase: "Throw your mistemper'd weapons to the ground",
      at: [FINGER_AT[0] + 40, FINGER_AT[1] - 60],
      to: FINGER_AT,
    },
    { phrase: 'hear the sentence', at: [MOUTH_AT[0] + 70, MOUTH_AT[1] + 10], to: MOUTH_AT },
    { phrase: 'your moved prince', at: [BROW_AT[0] + 40, BROW_AT[1] - 60], to: BROW_AT },
  ],
  where: 'Act 1, Scene 1',
  passage:
    "Throw your mistemper'd weapons to the ground And hear the sentence of your moved prince.",
  note: 'The Prince stops the brawl and warns both houses that another fight in the streets will cost them their lives. By the end of the play the feud has cost him two kinsmen, Mercutio and Paris.',
  artNote:
    'The play never describes him. His circlet, beard, gown and chain are the plain signs of a ruler of the time, as the panels draw him; the circlet is red, as it is in the panel of the brawl.',
}
