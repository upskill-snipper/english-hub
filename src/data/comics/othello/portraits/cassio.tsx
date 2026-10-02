import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, between, clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  DOUBLET_W,
  EarCut,
  folds,
  GRIP_AT,
  GRIP_DIGITS,
  GRIP_LINES,
  GRIP_PALM,
  Hand,
  handPoint,
  inside,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  manRuff,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  once,
  PH,
  placing,
  poly,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  type SP,
} from './common'

/**
 * Cassio, from what the play says of him, and from nowhere else:
 *
 *   "Cassio's a proper man." (Iago, Act 1, Scene 3)
 *   "Sir, he is rash, and very sudden in choler, and haply with his
 *   truncheon may strike at you" (Iago, Act 2, Scene 1)
 *   "If I have any grace or power to move you, His present reconciliation
 *   take; For if he be not one that truly loves you, That errs in ignorance
 *   and not in cunning, I have no judgement in an honest face." (Desdemona,
 *   Act 3, Scene 3)
 *   "such a handkerchief ... did I today See Cassio wipe his beard with."
 *   (Iago, Act 3, Scene 3)
 *
 * So: a young officer, handsome ("a proper man"; "the knave is handsome,
 * young", 2.1), with an honest face, a short beard, and the truncheon he
 * carries as Othello's lieutenant, a short staff of office, held upright.
 * Iago's story of the handkerchief is a lie; the beard it names is not, and
 * the figure kit gives it him.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every
 * man's head (MAN_HEAD), lit; bareheaded, his dark hair curling, a scalloped
 * mass with its curls cut in paper (CASSIO_HAIR); a short neat dark beard and
 * moustache cut in ink on his lit face, which never covers his lips; the
 * small ruff and a doublet. His hand is closed round the truncheon with its
 * fingers cut apart, as the shared grip in ./common.tsx closes. There is no
 * red in this plate but the markers.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 9601 (the figure's marks), 9610 (the ground).
 */

/** The outer edge of his hair, from the nape up the back of the head and over the crown to the brow. */
const HAIR_OUTER: Pt[] = [
  [62, 184],
  [47, 160],
  [39.5, 128],
  [40, 96],
  [51, 66],
  [74, 43],
  [104, 32],
  [132, 33],
  [150, 42],
  [158, 52],
]
/** The inner edge: the hairline at the brow and temple, round the ear, and down to the nape. */
const HAIR_INNER: SP[] = [
  [158, 51, 1],
  [146, 60],
  [137, 76],
  [130, 94],
  [125, 110, 1],
  [118, 100],
  [106, 98],
  [96, 108],
  [91, 128],
  [84, 156],
  [74, 180, 1],
]

/**
 * The scalloped edge of curling hair: a small round bulge between each pair
 * of points along the outer edge, as the kit's CASSIO_HAIR is scalloped.
 */
function scalloped(pts: Pt[], out: number): string {
  let d = `M${n(pts[0][0])} ${n(pts[0][1])}`
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i]
    const [bx, by] = pts[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    const k = Math.max(1, Math.round(L / 13))
    for (let j = 0; j < k; j++) {
      const t0 = j / k
      const t1 = (j + 1) / k
      const x0 = ax + (bx - ax) * t0
      const y0 = ay + (by - ay) * t0
      const x1 = ax + (bx - ax) * t1
      const y1 = ay + (by - ay) * t1
      // outward is to the left of the direction of travel (round the back and over the top)
      const nx = (y1 - y0) / (L / k)
      const ny = -(x1 - x0) / (L / k)
      d += `Q${n((x0 + x1) / 2 + nx * out)} ${n((y0 + y1) / 2 + ny * out)} ${n(x1)} ${n(y1)}`
    }
  }
  const inner = spline(HAIR_INNER, false)
  return d + inner.replace(/^M[^C]*/, 'L' + `${HAIR_INNER[0][0]} ${HAIR_INNER[0][1]}`) + 'Z'
}
const HAIR = scalloped(HAIR_OUTER, 4.6)
const HAIR_POLY = poly([...HAIR_OUTER.map((p): SP => p), ...HAIR_INNER.slice(1).reverse()])

/** His short neat beard, along the jaw from below the ear round the chin; it never covers the lips. */
const BEARD = spline([
  [121, 146, 1],
  [130, 164],
  [144, 172],
  [156, 168],
  [162.4, 158, 1],
  [168.6, 157.8, 1],
  [173.6, 163.6],
  [174.6, 174],
  [170.4, 184.4],
  [160, 190.6],
  [146, 194],
  [134, 192.4],
  [125, 182],
  [119.6, 164],
])
const MOUSTACHE = spline([
  [166.8, 137, 1],
  [170.6, 137.8],
  [172.4, 140.4],
  [170.2, 142.4, 1],
  [164.4, 143],
  [160.2, 141.6],
  [161.4, 139],
])

// His hand closed round the truncheon, before his chest, the staff upright.
const HAND_AT: Pt = [170, 268]
const HAND_S = 1.25
const inHand = handPoint(HAND_AT, 0, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) scale(${HAND_S})`
const STAFF_X = inHand(...GRIP_AT)[0]
/** The truncheon: a short staff of office, banded at its head and foot. */
const TRUNCHEON = `M${n(STAFF_X - 6.5)} 196L${n(STAFF_X + 6.5)} 196L${n(STAFF_X + 6.5)} 336L${n(STAFF_X - 6.5)} 336Z`
const TRUNCHEON_HEAD = `M${n(STAFF_X - 8.5)} 186L${n(STAFF_X + 8.5)} 186L${n(STAFF_X + 8.5)} 202L${n(STAFF_X - 8.5)} 202Z`

const marks = once(() => {
  const r = rng(9601)
  // Curls cut in paper through the hair: little open rounds, turned every way.
  let curls = ''
  for (let i = 0, tries = 0; i < 40 && tries < 2000; tries++) {
    const x = between(r, 36, 158)
    const y = between(r, 26, 182)
    if (!inside(HAIR_POLY, x, y)) continue
    const rad = between(r, 2.6, 4.4)
    const a0 = between(r, 0, 360)
    curls += arc(x, y, rad, deg(a0), deg(a0 + between(r, 150, 220)))
    i++
  }
  // The beard's grain, short strokes cut in paper down the jaw.
  let beard = ''
  for (let i = 0; i < 7; i++) {
    const x = 130 + i * 6 + between(r, -1, 1)
    const y = 174 + Math.sin((i / 6) * Math.PI) * 4 + between(r, -1.5, 1.5)
    beard += gouge(x, y, x + between(r, 1, 2.4), y + between(r, 6, 9), 0.55, 0.4)
  }
  const body = folds(9602, [10, 140], [268, 286], 6)
  // The grain of the truncheon's wood.
  const wood = gouge(STAFF_X - 2, 208, STAFF_X - 1.5, 330, 0.9, 0.2)
  return { curls, beard, body, wood }
})

/** Cassio, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function CassioFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-cas-hair`
  const beardClip = `${uid}-cas-beard`
  const RUFF = manRuff()
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={DOUBLET_W} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-cas`} />
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      <ManBrow w={2.6} />
      <ManEye look="open" />
      {/* his short neat beard and moustache, in ink on his lit face */}
      <path d={BEARD} fill={INK} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={PAPER} />
      </g>
      <path d={MOUSTACHE} fill={INK} />
      {/* his dark curling hair */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={1.2} />
      {/* "his truncheon": the lieutenant's staff of office */}
      <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
        <path d={TRUNCHEON} />
        <path d={TRUNCHEON_HEAD} />
      </g>
      <path d={TRUNCHEON} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.wood} fill={PAPER} />
      <path d={TRUNCHEON_HEAD} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <Hand
        transform={HAND_T}
        palm={GRIP_PALM}
        digits={GRIP_DIGITS}
        lines={GRIP_LINES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round hair, head, beard and shoulders. */
function CassioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={HAIR} />
      <path d={MAN_HEAD} />
      <path d={BEARD} />
      <path d={DOUBLET_W} />
    </g>
  )
}

const P = placing(52, 4, 0.94, true)

const ground = once(() =>
  // The harbour at Cyprus by day, the light ahead of him, to the left.
  portraitGround('othello-cassio', 9610, (x, y) =>
    clamp(0.14 + ((PW - x - 50) / 260) * 0.88 - (y / PH) * 0.1),
  ),
)

function CassioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <CassioKnockout />
        <CassioFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const cassioPortrait: LinocutArt = { width: PW, height: PH, Draw: CassioPortrait }

const CHEEK_AT = P.to(146, 124)
const TRUNCHEON_AT = P.to(STAFF_X, 222)
const EYE_AT = P.to(MAN_EYE[0] + 1, MAN_EYE[1])
/** The beard at the jaw, reached from below and behind so the line never crosses the mouth. */
const BEARD_AT = P.to(140, 186)

export const cassio: Portrait = {
  name: 'Cassio',
  art: cassioPortrait,
  alt: 'A linocut portrait of Cassio in profile, facing left, head and shoulders: a handsome young man, his face lit and pale and his eye open and level, with thick dark curling hair and a short, neat dark beard and moustache along his jaw and round his chin. He wears a small white ruff and a dark doublet, and in his hand, closed round it before his chest, he holds upright a short dark staff with a pale band at its head, the truncheon of his office. Four numbered red markers point to his cheek, the truncheon, his eye and his beard.',
  describedBy: [
    { phrase: 'Cassio’s a proper man', at: [CHEEK_AT[0] + 34, CHEEK_AT[1] - 56], to: CHEEK_AT },
    { phrase: 'his truncheon', at: [TRUNCHEON_AT[0] - 34, TRUNCHEON_AT[1] - 30], to: TRUNCHEON_AT },
    {
      phrase: 'I have no judgement in an honest face',
      at: [EYE_AT[0] - 34, EYE_AT[1] - 44],
      to: EYE_AT,
    },
    {
      phrase: 'See Cassio wipe his beard with',
      at: [BEARD_AT[0] + 44, BEARD_AT[1] + 46],
      to: BEARD_AT,
    },
  ],
  where: 'Act 1, Scene 3; Act 2, Scene 1; Act 3, Scene 3',
  note: 'Iago resents Cassio, yet even his words make him a handsome young officer, and Desdemona trusts his honest face. The beard is real; Iago’s story of seeing him wipe it with the handkerchief is a lie.',
  artNote:
    'The play gives his looks only in other people’s words. He is drawn as the panels draw him, with curling dark hair and a short beard, and holds the officer’s truncheon Iago mentions.',
}
