import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import { PINCH_AT, PINCH_DIGITS, PINCH_LINES, PINCH_PALM } from '../../othello/portraits/common'
import {
  Brooch,
  folds,
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
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  type SP,
} from './common'

/**
 * Edmund, Gloucester's younger son, in Act 1, Scene 2, alone with the letter
 * he has forged in his brother's name:
 *
 *   "Why bastard? Wherefore base? When my dimensions are as well compact, My
 *   mind as generous, and my shape as true As honest madam's issue?"
 *
 * and Kent's word for him in the first lines of the play, "the issue of it
 * being so proper" (1.1): handsome. So: a handsome young man, well made,
 * upright, with the look of a man who knows how clever he is, holding up the
 * letter that will ruin his brother. The print marks only what he claims for
 * himself.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): clean-shaven,
 * with a head of short dark curls (EDMUND_HAIR), invented only to tell him from
 * his brother, whose hair falls straight to his shoulders; the knowing smile
 * the kit gives him (SMILE), the corner of the mouth hooked up; a tunic and a
 * short cloak pinned at the shoulder. His head is the youth's head
 * (YOUTH_HEAD). The letter is a folded sheet with lines of writing on it, held
 * up by its corner between finger and thumb, the other fingers curled and cut
 * apart, as the Othello portraits hold a handkerchief. There is no red in this
 * plate.
 *
 * MARKERS. "My mind as generous" sits on his temple with no line. The other two
 * come to his shoulder from behind and to his chest from in front, each at its
 * own height: no line crosses his face.
 *
 * Seeds: 7901 to 7905 (the figure's marks), 7910 (the ground).
 */

/** His short dark curls, from the brow over the crown to the nape: a scalloped mass. */
const HAIR = (() => {
  const r = rng(7903)
  const pts: SP[] = [[156, 60, 1]]
  for (let i = 0; i <= 16; i++) {
    const t = i / 16
    const a = deg(-66 - t * 136)
    const rx = 64 + (i % 2 === 0 ? between(r, 4, 6) : 0)
    const ry = 80 + (i % 2 === 0 ? between(r, 4, 6) : 0)
    pts.push([104 + Math.cos(a) * rx, 114 + Math.sin(a) * ry])
  }
  pts.push(
    [54, 176],
    [60, 186, 1],
    [70, 180],
    [78, 168],
    [86, 150],
    [92, 128],
    [100, 110],
    [112, 100],
    [126, 94],
    [138, 84],
    [148, 72],
  )
  return spline(pts)
})()

/** His shoulders in a tunic. */
const BODY = spline([
  [-12, 344, 1],
  [-6, 300],
  [12, 264],
  [44, 240],
  [80, 230],
  [114, 234],
  [148, 230],
  [178, 242],
  [202, 266],
  [214, 300],
  [218, 344, 1],
])
/** The short cloak over his far shoulder and down his back, pinned at the near shoulder. */
const CLOAK = spline([
  [-14, 344, 1],
  [-8, 298],
  [8, 262],
  [36, 240],
  [66, 230],
  [96, 232],
  [118, 244, 1],
  [100, 262],
  [80, 290],
  [62, 344, 1],
])
const BROOCH_AT: Pt = [110, 246]

/** His near forearm, raised in its sleeve from below the block to the wrist before his chest. */
const SLEEVE = spline([
  [112, 348, 1],
  [124, 318],
  [138, 292],
  [150, 272, 1],
  [170, 280, 1],
  [162, 302],
  [150, 326],
  [146, 348, 1],
])

// His hand, raised before his chest, holding the letter up by its corner.
const HAND_AT: Pt = [160, 274]
const HAND_ROT = -18
const HAND_S = 1.5
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
const PINCH = inHand(...PINCH_AT)

/** The folded letter, held up by its near corner, standing out from the hand. */
const LETTER = (() => {
  const [x, y] = PINCH
  const a = deg(-62)
  const u: Pt = [Math.cos(a), Math.sin(a)]
  const v: Pt = [-u[1], u[0]]
  const W = 48
  const H = 34
  const c0: Pt = [x - u[0] * 2, y - u[1] * 2]
  const c1: Pt = [c0[0] + u[0] * W, c0[1] + u[1] * W]
  const c2: Pt = [c1[0] + v[0] * H, c1[1] + v[1] * H]
  const c3: Pt = [c0[0] + v[0] * H, c0[1] + v[1] * H]
  const sheet = `M${n(c0[0])} ${n(c0[1])}L${n(c1[0])} ${n(c1[1])}L${n(c2[0])} ${n(c2[1])}L${n(c3[0])} ${n(c3[1])}Z`
  let lines = ''
  for (let k = 1; k <= 4; k++) {
    const t = (k * H) / 5.4
    const s0: Pt = [c0[0] + v[0] * t + u[0] * 6, c0[1] + v[1] * t + u[1] * 6]
    const len = W - 12 - (k === 4 ? 14 : 0)
    lines += `M${n(s0[0])} ${n(s0[1])}l${n(u[0] * len)} ${n(u[1] * len)}`
  }
  // the fold across its middle
  const f0: Pt = [c0[0] + u[0] * (W / 2), c0[1] + u[1] * (W / 2)]
  const fold = `M${n(f0[0])} ${n(f0[1])}l${n(v[0] * H)} ${n(v[1] * H)}`
  return { sheet, lines, fold }
})()

type Marks = { curls: string; nape: string; tunic: string; cloak: string }

const marks = once((): Marks => {
  const r = rng(7901)
  // The curls: small crescents cut in paper, turning every way, brighter
  // towards the front of the head, where the light is.
  let curls = ''
  for (let i = 0, tries = 0; i < 70 && tries < 4000; tries++) {
    const x = between(r, 40, 162)
    const y = between(r, 34, 184)
    const ex = (x - 104) / 66
    const ey = (y - 114) / 84
    if (ex * ex + ey * ey >= 0.9) continue
    if (x > 92 && y > 100) continue
    if (x > 136 && y > 70) continue
    const a = between(r, 0, Math.PI * 2)
    const L = between(r, 6, 10)
    const light = clamp((x - 40) / 130)
    curls += gouge(
      x,
      y,
      x + Math.cos(a) * L,
      y + Math.sin(a) * L,
      between(r, 0.7, 1.1) * (0.7 + light * 0.6),
      between(r, 2.2, 3.4) * (r() < 0.5 ? -1 : 1),
    )
    i++
  }
  const nape = napeShade(7902, 150, 120, 66, 124)
  const tunic = folds(7904, [130, 210], [280, 290], 3, 344)
  const cloak = folds(7905, [-4, 70], [262, 276], 4, 344)
  return { curls, nape, tunic, cloak }
})

/** Edmund, head and shoulders, facing right in the 0..240 by 0..344 frame. */
export function EdmundFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-edm-head`
  const hairClip = `${uid}-edm-hair`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* "my dimensions are as well compact": the tunic, and the short cloak */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.tunic} fill={PAPER} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <Brooch x={BROOCH_AT[0]} y={BROOCH_AT[1]} rad={6.4} />
      <path d={YOUTH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={YOUTH_JAW} strokeWidth={1.6} />
      </g>
      {/* the short dark curls */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.curls} fill={PAPER} />
      </g>
      <path d={YOUTH_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={YOUTH_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the nostril, the fold of the cheek, and the knowing smile */}
        <path d="M174.5 126C170.5 123.5 170.6 118.5 175.6 117.5" strokeWidth={1.4} />
        <path d="M163 122Q157.6 130 158.6 139" strokeWidth={0.9} />
        <path d="M167.6 142.6L161.6 143.4Q158.6 143 157.4 139.8" strokeWidth={1.7} />
        <path d="M168.5 152.5C166 154 163.5 154 161.5 153" strokeWidth={0.9} />
      </g>
      <YouthEye look="open" brow={2.4} />
      {/* the letter, held up by its corner */}
      <path
        d={LETTER.sheet}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d={LETTER.lines + LETTER.fold}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
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

/** A thick ink halo round head, hair, shoulders, arm and letter. */
function EdmundKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={HAIR} />
      <path d={YOUTH_HEAD} />
      <path d={BODY} />
      <path d={SLEEVE} />
      <path d={LETTER.sheet} />
    </g>
  )
}

const P = placing(40, 4, 0.98)

const ground = once(() =>
  // A hall in his father's castle, the light ahead of him.
  portraitGround('lear-edmund', 7910, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.84 - (y / PH) * 0.12),
  ),
)

function EdmundPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <EdmundKnockout />
        <EdmundFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const edmundPortrait: LinocutArt = { width: PW, height: PH, Draw: EdmundPortrait }

const SHOULDER_AT = P.to(40, 248)
const MIND_AT = P.to(130, 104)
const SHAPE_AT = P.to(206, 292)

export const edmund: Portrait = {
  name: 'Edmund',
  art: edmundPortrait,
  alt: 'A linocut portrait of Edmund in profile, facing right: a handsome, clean-shaven young man with short dark curls, a bright eye and the corner of his mouth hooked up in a knowing smile. He wears a dark tunic and a short cloak over his far shoulder, pinned with a ring brooch at the near one. His hand is raised before his chest, holding up by its corner a folded letter with lines of writing on it. Three numbered red markers point to his shoulder, his temple and his chest.',
  describedBy: [
    {
      phrase: 'my dimensions are as well compact',
      at: [SHOULDER_AT[0] - 16, SHOULDER_AT[1] - 30],
      to: SHOULDER_AT,
    },
    { phrase: 'My mind as generous', at: MIND_AT },
    { phrase: 'my shape as true', at: [SHAPE_AT[0] + 36, SHAPE_AT[1] - 8], to: SHAPE_AT },
  ],
  where: 'Act 1, Scene 2',
  passage:
    'When my dimensions are as well compact, My mind as generous, and my shape as true As honest madam’s issue?',
  note: 'Edmund asks why the law calls him base when he is as well made and as able as his brother. The question is fair; what he does with it, beginning with this forged letter, is not.',
  artNote:
    'Only Kent’s “so proper” says how he looks. His curls are the panels’ way of telling him from Edgar; the letter is the one he forges in his brother’s name.',
}
