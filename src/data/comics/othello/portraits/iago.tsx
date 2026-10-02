import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  DOUBLET_W,
  EarCut,
  folds,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  manRuff,
  ManEye,
  ManNoseAndMouth,
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
 * Iago, from what the play says of him, and from nowhere else:
 *
 *   "I am not what I am." (Iago, to Roderigo, Act 1, Scene 1)
 *   "Yet, for necessity of present life, I must show out a flag and sign of
 *   love, Which is indeed but sign." (Iago, Act 1, Scene 1)
 *   "I have looked upon the world for four times seven years" (Iago, Act 1,
 *   Scene 3)
 *   "And didst contract and purse thy brow together, As if thou then hadst
 *   shut up in thy brain Some horrible conceit" (Othello, Act 3, Scene 3)
 *
 * So: a man of twenty-eight, his brow drawn down and together as Othello sees
 * it in the temptation scene, the corner of his mouth lifted, and behind him
 * the flag he carries as Othello's ancient, the ensign of his company: the
 * "flag and sign of love" he means to show the world. The flag is his office
 * (the guide's vocabulary: "the officer who carried the company's flag"), and
 * it is plain, with no device on it, because the play gives it none.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx), a plain
 * soldier who must look honest: every man's head (MAN_HEAD), lit and
 * clean-shaven; a close dark cap with its band cut in paper (IAGO_CAP),
 * which nobody else wears, his dark hair showing below it at the temple and
 * the nape; the small ruff; a soldier's jerkin with a baldric cut in paper
 * across his chest. Nothing in his face is drawn to look villainous beyond
 * the brow Othello describes and the smile the kit gives him alone. There is
 * no red in this plate but the markers.
 *
 * Seeds: 9301 (the figure's marks), 9310 (the ground).
 */

/** His close cap over the crown, from the brow to the back of the head: the kit's IAGO_CAP. */
const CAP = spline([
  [159, 70, 1],
  [158, 52],
  [146, 34],
  [124, 24],
  [98, 23],
  [74, 30],
  [56, 44],
  [45, 62],
  [41.5, 80],
  [43, 93, 1],
  [80, 81],
  [122, 72],
])
/** Its band, round the head along its lower edge, cut in paper. */
const CAP_BAND = ribbon(
  [
    [44, 88],
    [62, 83],
    [84, 78],
    [106, 74],
    [128, 70.5],
    [148, 67.5],
    [159, 66],
  ],
  7.2,
  0.25,
)
/** His dark hair below the cap: at the back of the head down to the nape, and at the temple. */
const NAPE = spline([
  [45, 90, 1],
  [41.5, 112],
  [43.5, 140],
  [51, 164],
  [61, 178, 1],
  [73, 174, 1],
  [81, 152],
  [89, 128],
  [93, 107],
  [96, 88, 1],
])
const TEMPLE = spline([
  [140, 70, 1],
  [131, 84],
  [126, 100],
  [124, 114, 1],
  [117, 106],
  [113, 92],
  [110, 79, 1],
])

/** His shoulders in a soldier's jerkin. */
const JERKIN = DOUBLET_W

/** The baldric across his chest, from behind the near shoulder to the front, cut in paper. */
const BALDRIC = ribbon(
  [
    [34, 244],
    [70, 258],
    [110, 278],
    [150, 302],
    [184, 330],
    [192, 340],
  ],
  12,
  0.08,
  false,
)

// The flag of his company, behind his back: a plain staff upright, and the
// cloth hanging from its head as a flag hangs when there is no wind, its top
// edge falling away from the staff, its folds running down from the hoist.
const STAFF_X = -34
const STAFF = `M${STAFF_X - 3.2} 340L${STAFF_X - 3.2} 28L${STAFF_X + 3.2} 28L${STAFF_X + 3.2} 340Z`
const FINIAL = `M${STAFF_X} 6L${STAFF_X + 6.4} 22L${STAFF_X} 31L${STAFF_X - 6.4} 22Z`
/** The cloth, from the staff's head out to the fly and back to the staff below. */
const FLAG = spline([
  [STAFF_X - 2, 34, 1],
  [-58, 46],
  [-80, 66],
  [-92, 84, 1],
  [-94, 126],
  [-92, 168, 1],
  [-78, 164],
  [-62, 152],
  [STAFF_X - 2, 126, 1],
])

type Marks = { cap: string; nape: string; flag: string; fringe: string; body: string }

const marks = once((): Marks => {
  const r = rng(9301)
  // The cap's cloth, gathered at the crown: a few seams cut in paper.
  const cap =
    gouge(150, 58, 100, 30, 0.9, -6) +
    gouge(138, 64, 70, 40, 0.8, -8) +
    gouge(120, 68, 54, 58, 0.75, -6)
  // Dark hair: short strokes cut in paper, combed down at the nape.
  let nape = ''
  for (let i = 0; i < 14; i++) {
    const x = between(r, 48, 86)
    const y = between(r, 96, 164)
    nape += gouge(x, y, x + between(r, -1, 3), y + between(r, 7, 12), between(r, 0.5, 0.8), 0.6)
  }
  for (let i = 0; i < 5; i++) {
    const x = 118 + i * 3.4
    nape += gouge(x, 82 + i * 2, x - 2, 98 + i * 2.6, 0.55, 0.4)
  }
  // The flag's folds, falling from the hoist at the staff out towards the fly,
  // cut in ink across the paper.
  let flag = ''
  for (let i = 0; i < 6; i++) {
    const y0 = 42 + i * 15 + between(r, -2, 2)
    const pts: Pt[] = []
    for (let k = 0; k <= 10; k++) {
      const t = k / 10
      pts.push([STAFF_X - 6 - t * 50, y0 + t * (30 - i * 2) + Math.sin(t * 4 + i) * 2])
    }
    flag += ribbon(pts, between(r, 1.8, 2.8), 0.7)
  }
  // Its fringe along the fly.
  let fringe = ''
  for (let y = 88; y < 166; y += 4)
    fringe += `M${n(-94 + Math.sin(y / 9) * 1.4)} ${n(y)}l${n(-between(r, 6, 9))} ${n(between(r, -0.6, 0.6))}`
  const body = folds(9302, [10, 120], [270, 290], 6)
  return { cap, nape, flag, fringe, body }
})

/** Iago, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function IagoFigure({ uid }: { uid: string }) {
  const m = marks()
  const capClip = `${uid}-iago-cap`
  const napeClip = `${uid}-iago-nape`
  const RUFF = manRuff()
  return (
    <g>
      <defs>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
        <clipPath id={napeClip}>
          <path d={NAPE} />
          <path d={TEMPLE} />
        </clipPath>
      </defs>
      <path d={JERKIN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={BALDRIC} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M40 252L188 334M38 238L196 326"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
        strokeDasharray="3 2.4"
      />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-iago`} />
      <path d={NAPE} fill={INK} />
      <path d={TEMPLE} fill={INK} />
      <g clipPath={`url(#${napeClip})`}>
        <path d={m.nape} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${capClip})`}>
        <path d={m.cap} fill={PAPER} />
      </g>
      <path d={CAP_BAND} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      {/* "I am not what I am": the knowing smile the kit gives him alone */}
      <ManNoseAndMouth smile />
      {/* "didst contract and purse thy brow together" */}
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d="M143.5 85.4Q154 84.2 165.6 90.6" strokeWidth={3} />
        <path d="M163.2 80.4L161.4 86.6M159.2 79.6L158.2 85" strokeWidth={1.1} />
      </g>
      <ManEye look="open" />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={1.2} />
    </g>
  )
}

/** The flag and its staff, behind him. */
function Flag() {
  const m = marks()
  return (
    <g>
      <path d={FLAG} fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round" />
      <path d={STAFF} fill={INK} stroke={INK} strokeWidth={6} />
      <path d={FLAG} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={m.flag} fill={INK} />
      <path d={m.fringe} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      <path d={STAFF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={FINIAL} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
    </g>
  )
}

/** A thick ink halo round head, cap and shoulders. */
function IagoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={CAP} />
      <path d={MAN_HEAD} />
      <path d={JERKIN} />
    </g>
  )
}

const P = placing(100, 8, 0.84)

const ground = once(() =>
  // The street at night in Venice, lit from ahead of him: the light falls
  // off behind his back, where the flag hangs.
  portraitGround('othello-iago', 9310, (x, y) =>
    clamp(0.1 + ((x - 90) / 230) * 0.9 - (y / PH) * 0.12),
  ),
)

function IagoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <Flag />
        <IagoKnockout />
        <IagoFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const iagoPortrait: LinocutArt = { width: PW, height: PH, Draw: IagoPortrait }

/** The smile's crease on the cheek: no red line touches or crosses a mouth. */
const SMILE_AT = P.to(151, 133)
const FLAG_AT = P.to(-66, 108)
const EYE_AT = P.to(MAN_EYE[0] + 1, MAN_EYE[1])
const BROW_AT = P.to(156, 85)

export const iago: Portrait = {
  name: 'Iago',
  art: iagoPortrait,
  alt: 'A linocut portrait of Iago in profile, facing right, head and shoulders: a clean-shaven man of about thirty in a close dark cap with a pale band round it, his brow drawn down and together over a level eye, and the corner of his mouth lifted in a small smile. He wears a small white ruff and a dark soldier’s jerkin with a pale baldric across his chest. Behind his back stands an upright staff, and from its head a plain pale flag hangs in folds, fringed along its free edge. Four numbered red markers point to the smile on his cheek, the flag, his eye and his brow.',
  describedBy: [
    { phrase: 'I am not what I am', at: [SMILE_AT[0] - 58, SMILE_AT[1] + 36], to: SMILE_AT },
    {
      phrase: 'I must show out a flag and sign of love',
      at: [FLAG_AT[0] + 8, FLAG_AT[1] + 92],
      to: FLAG_AT,
    },
    {
      phrase: 'I have looked upon the world for four times seven years',
      at: [EYE_AT[0] + 44, EYE_AT[1] - 30],
      to: EYE_AT,
    },
    {
      phrase: 'didst contract and purse thy brow together',
      at: [BROW_AT[0] + 22, BROW_AT[1] - 58],
      to: BROW_AT,
    },
  ],
  where: 'Act 1, Scenes 1 and 3; Act 3, Scene 3',
  note: 'Iago tells Roderigo the truth about himself in the first scene, and everyone else a lie. He is twenty-eight and Othello’s ancient, the officer who carries the flag, and the “sign of love” he shows the world is the loyalty of a soldier.',
  artNote:
    'The play gives his age and his rank, and everyone in it calls him honest. He is drawn as the panels draw him, clean-shaven, in a close dark cap and a baldric; the flag is his office, and it is plain because the play gives it no device.',
}
