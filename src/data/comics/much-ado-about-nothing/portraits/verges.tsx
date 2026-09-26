import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { ear, PH, placing, portraitGround, PortraitRule, PW, spline, type SP } from './common'

/**
 * Verges, the headborough, Dogberry's partner, as Dogberry introduces him to
 * Leonato on the morning of the wedding in Act 3, Scene 5:
 *
 *   "Goodman Verges, sir, speaks a little off the matter: an old man, sir,
 *   and his wits are not so blunt as, God help, I would desire they were;
 *   but, in faith, honest as the skin between his brows."
 *
 * So: an old man, his face lined at the eye, the cheek and the brow, with
 * the skin between his brows smooth and plain; his mouth open, because he
 * will keep talking ("A good old man, sir; he will be talking", Dogberry
 * again), and his head pushed forward, eager to get a word in.
 *
 * He is drawn as the panels draw him (../panels/people.tsx): smaller than
 * Dogberry and stooped, in a narrow gown and a close cap, with a short white
 * beard and white hair, so that he is not taken for Leonato, whose beard is
 * full and who goes bareheaded. There is no red in this plate.
 *
 * He faces left, towards Dogberry's portrait, so the figure is drawn facing
 * right and flipped.
 */

/** An old man's head, thin, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [70, 228],
  [62, 200],
  [52, 174],
  [45, 146],
  [45, 108],
  [57, 72],
  [81, 48],
  [112, 36],
  [141, 38],
  [158, 52],
  [164, 70],
  [168, 88],
  [165, 98, 1],
  [174, 112],
  [184, 132],
  [182, 138],
  [172, 139.5, 1],
  [174, 144],
  [171, 147, 1],
  [158, 152, 1],
  [170, 160, 1],
  [174, 166],
  [172, 178],
  [162, 186],
  [146, 190],
  [136, 198],
  [134, 212],
  [136, 228],
]
export const VERGES_HEAD = spline(HEAD_PTS)
/** He leans his head forward, eager to talk. */
const LEAN = 'rotate(7 110 210)'

/** The open mouth, in the middle of saying something off the matter. */
const MOUTH = 'M171 147L158 152L170 160Z'

/** The short white beard, round the jaw and chin, open at the mouth. */
const BEARD = spline([
  [118, 140, 1],
  [132, 152],
  [150, 154],
  [158, 152, 1],
  [170, 160, 1],
  [176, 170],
  [174, 184],
  [164, 196],
  [148, 200],
  [132, 196],
  [120, 182],
  [114, 160],
])
/** The close cap over the crown, its edge turned up. */
const CAP = spline([
  [42, 96, 1],
  [44, 64],
  [66, 40],
  [100, 26],
  [138, 26],
  [160, 42],
  [166, 64, 1],
  [110, 70],
  [70, 82],
])
const CAP_EDGE = spline([
  [40, 98, 1],
  [70, 82],
  [110, 70],
  [168, 62, 1],
  [168, 72, 1],
  [110, 80],
  [72, 92],
  [44, 108, 1],
])
/** White hair below the cap, over the ear to the nape. */
const HAIR = spline([
  [116, 78, 1],
  [112, 96, 1],
  [100, 98],
  [92, 110],
  [88, 136],
  [80, 162],
  [64, 172, 1],
  [50, 150],
  [44, 108, 1],
])
const EAR = ear(104, 124)

/** Narrow, stooped shoulders in a narrow gown, the back rounded. */
export const VERGES_BODY = spline([
  [-4, 336, 1],
  [0, 290],
  [10, 250],
  [30, 214],
  [62, 196],
  [100, 206],
  [140, 212],
  [168, 226],
  [190, 254],
  [202, 292],
  [206, 336, 1],
])
const BAND = spline([
  [96, 204, 1],
  [130, 214],
  [160, 212, 1],
  [172, 226, 1],
  [134, 232],
  [98, 226, 1],
])

type Marks = { beard: string; hair: string; wrinkles: string; gown: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // The short white beard: ink lines between paper locks.
  let beard = ''
  for (let i = 0; i < 10; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 10
    const pts: Pt[] = []
    const x0 = 122 + t * 46
    const y0 = 156 - t * 2
    const x1 = 128 + t * 38
    const y1 = 186 + Math.sin(Math.PI * t) * 10
    for (let k = 0; k <= 6; k++) {
      const u = k / 6
      pts.push([x0 + (x1 - x0) * u + Math.sin(u * 5 + i) * 1.5, y0 + (y1 - y0) * u])
    }
    beard += ribbon(pts, between(r, 0.7, 1.1), 0.8)
  }
  // White hair: fine ink strands on the paper, as Leonato's.
  let hair = ''
  for (let i = 0; i < 12; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 12
    hair += ribbon(
      [
        [108 - t * 58, 90 + t * 4],
        [98 - t * 50, 120 + t * 10],
        [88 - t * 34, 150 + t * 16],
      ],
      between(r, 0.6, 1),
      0.8,
    )
  }

  // "an old man, sir": lines at the eye, the brow and the hollow cheek.
  let wrinkles = 'M144 76Q152 74 160 77M143 83Q151 81 160 84'
  for (let i = 0; i < 4; i++)
    wrinkles += `M${n(145)} ${n(102 + i * 2.6)}L${n(135 - between(r, 0, 3))} ${n(98 + i * 4.5)}`
  for (let rad = 12; rad < 26; rad += 3.4)
    wrinkles += arcDashes(r, 144, 118, rad, deg(70), deg(150), [8, 18], [2, 5])

  let gown = ''
  for (let i = 0; i < 5; i++) {
    const x = 60 + i * 26 + between(r, -3, 3)
    gown += gouge(x, 236 + between(r, 0, 12), x + between(r, -6, 6), 336, between(r, 1, 1.4), 1)
  }

  const m = { beard, hair, wrinkles, gown }
  marksBySeed.set(seed, m)
  return m
}

/** Verges, stooped in his gown, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function VergesFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-vg-head-${seed}`
  const hairClip = `${uid}-vg-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={VERGES_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={VERGES_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <g transform={LEAN}>
        <path d={VERGES_HEAD} fill={PAPER} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.wrinkles} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        </g>
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={INK} />
        </g>
        <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
        <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path
          d={CAP_EDGE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={m.beard} fill={INK} />
        <path d={MOUTH} fill={INK} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M176.5 134C172.5 131 172.5 125 178 124" strokeWidth={1.4} />
          {/* a white moustache over the open mouth */}
          <path d="M172 142Q164 145 157 150" strokeWidth={1.2} />
          {/* "honest as the skin between his brows": the brows up, the skin between them plain */}
          <path d="M145 90Q152 86 158 88" strokeWidth={2} />
          <path d="M147.5 101Q154.5 96.5 162 100.5" strokeWidth={2.2} />
          <path d="M149 106.5Q155 108.5 161 105.5" strokeWidth={1.1} />
        </g>
        <circle cx={155.6} cy={102.6} r={2.6} fill={INK} />
      </g>
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
    </g>
  )
}

/** A thick ink halo round head, cap, beard and gown. */
export function VergesKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={LEAN}>
        <path d={VERGES_HEAD} />
        <path d={CAP} />
        <path d={BEARD} />
      </g>
      <path d={VERGES_BODY} />
    </g>
  )
}

/** A little smaller in the block than Dogberry: "one must ride behind". */
const P = placing(40, 24, 0.92, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A room in Leonato's house on the wedding morning, the light ahead of him.
  ground = portraitGround('verges', 4101, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function VergesPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <VergesKnockout />
        <VergesFigure uid={uid} seed={4101} />
      </g>
      <PortraitRule />
    </>
  )
}

export const vergesPortrait: LinocutArt = { width: PW, height: PH, Draw: VergesPortrait }

/** A point on the leaning head, carried into the portrait. */
function onHead(x: number, y: number): [number, number] {
  const a = deg(7)
  const dx = x - 110
  const dy = y - 210
  return P.to(110 + dx * Math.cos(a) - dy * Math.sin(a), 210 + dx * Math.sin(a) + dy * Math.cos(a))
}
const CHEEK_AT = onHead(139, 104)
const BROWS_AT = onHead(163, 92)
const MOUTH_AT = onHead(171, 153)

export const verges: Portrait = {
  name: 'Verges',
  art: vergesPortrait,
  alt: 'A linocut portrait of Verges in profile, facing left, a little smaller in the block than Dogberry: an old, thin man with his head pushed forward and his shoulders stooped, in a dark close cap with a turned-up edge, white hair at the nape and a short white beard. His face is lined at the eye, the brow and the hollow cheek, his brows are raised, and his mouth is open under a white moustache, as if he is in the middle of talking. He wears a narrow dark gown and a plain white falling band. Three numbered red markers point to his open mouth, the lines at the corner of his eye and the skin between his brows.',
  describedBy: [
    {
      phrase: 'speaks a little off the matter',
      at: [MOUTH_AT[0] - 62, MOUTH_AT[1] + 30],
      to: MOUTH_AT,
    },
    { phrase: 'an old man, sir', at: [CHEEK_AT[0] + 44, CHEEK_AT[1] - 76], to: CHEEK_AT },
    {
      phrase: 'honest as the skin between his brows',
      at: [BROWS_AT[0] - 52, BROWS_AT[1] - 60],
      to: BROWS_AT,
    },
  ],
  where: 'Act 3, Scene 5',
  passage:
    'Goodman Verges, sir, speaks a little off the matter: an old man, sir, and his wits are not so blunt as, God help, I would desire they were; but, in faith, honest as the skin between his brows.',
  note: 'Dogberry means to praise his partner and manages to insult him, and Leonato, in a hurry to get to the wedding, loses patience with both. The news they are trying to give him would have stopped the wedding.',
  artNote:
    'He is drawn as the panels draw him: old and stooped, in a close cap and a narrow gown, with a short white beard so that he is not taken for Leonato.',
}
