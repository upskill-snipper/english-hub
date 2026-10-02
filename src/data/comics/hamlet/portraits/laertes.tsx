import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, type Pt } from '@/components/comics/linocut/carve'

import { GRATIANO_CAP, GRATIANO_FEATHER } from '../../the-merchant-of-venice/panels/people'
import {
  bandAlong,
  Buttons,
  Hand,
  carry,
  EarCut,
  folds,
  locks,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
  type Digit,
} from './common'

/**
 * Laertes, Polonius's son, as three people speak of him:
 *
 *   HAMLET, seeing him at Ophelia's grave: "That is Laertes, a very noble
 *   youth. Mark." (Act 5, Scene 1)
 *   CLAUDIUS, of the Norman Lamord's praise: "He made confession of you, And
 *   gave you such a masterly report For art and exercise in your defence,
 *   And for your rapier most especially" (Act 4, Scene 7)
 *   OSRIC: "Laertes; believe me, an absolute gentleman, full of most
 *   excellent differences" (Act 5, Scene 2)
 *
 * So: a young gentleman, finely dressed, with his rapier, sheathed. His
 * father's advice as he left for France was "Costly thy habit as thy purse can
 * buy, But not express'd in fancy; rich, not gaudy" (Act 1, Scene 3), and he
 * dresses so.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the youth's
 * head, with a short pointed beard along the jaw (the kit's LAERTES_BEARD,
 * carried to this size), invented only to tell him from Hamlet; his dark hair
 * to the collar under a small cap with a feather curling back from it (the
 * Merchant kit's GRATIANO_CAP and GRATIANO_FEATHER, which the kit gives him,
 * carried to this size); the small ruff, a doublet buttoned down the front
 * and a short cloak over the far shoulder; and the rapier, in its scabbard,
 * held across his body by the scabbard below the hilt, so that the hilt
 * stands up in front of his chest and is in the picture. The sword is never
 * drawn: the hand is closed round the scabbard, every finger cut apart, and
 * nothing points at anyone. There is no red in this plate.
 *
 * Seeds: 7702 to 7706 (the figure's marks), 7710 (the ground).
 */

/** The small cap and its feather: the Merchant kit's at this size. */
const CAP = carry(GRATIANO_CAP)
const FEATHER = carry(GRATIANO_FEATHER)
/**
 * The short pointed beard along the jaw to a point under the chin. The kit's
 * LAERTES_BEARD, carried to this size point for point, fell on the youth's
 * shorter jaw as a beard down the whole throat; it is cut here as the kit
 * means it, short and close along the jaw, coming to a point.
 */
const BEARD = spline([
  [112, 150, 1],
  [122, 166],
  [136, 178],
  [152, 184],
  [164, 182],
  [171, 176],
  [168, 192],
  [160, 206, 1],
  [150, 196],
  [134, 190],
  [118, 180],
  [108, 166],
])
/** A thin moustache over the lip, the same dark as the beard. */
const MOUSTACHE = spline([
  [171, 133.6, 1],
  [174, 137],
  [170.4, 139.8],
  [163, 141.4, 1],
  [166, 136.6],
])

/** Dark hair under the cap, to the collar, the ear clear of it. In the head's frame. */
const HAIR = spline([
  [150, 66, 1],
  [136, 72],
  [124, 86],
  [121, 104],
  [121, 118, 1],
  [114, 104],
  [101, 98],
  [90, 104],
  [86, 122],
  [84, 146],
  [80, 170, 1],
  [70, 160],
  [62, 176, 1],
  [52, 158],
  [44, 132],
  [40, 104],
  [44, 76],
  [60, 62],
  [100, 60],
  [140, 60],
])

/** His shoulders in the doublet. */
const BODY = spline([
  [-10, 336, 1],
  [-4, 296],
  [14, 262],
  [44, 234],
  [76, 220],
  [112, 226],
  [146, 220],
  [176, 232],
  [202, 258],
  [220, 294],
  [230, 336, 1],
])
const FRONT = 'M164 244Q182 286 196 336'
const BUTTONS: Pt[] = [
  [172, 262],
  [178.6, 277],
  [184.6, 292],
  [190, 307],
  [195, 322],
]
/** The short cloak over the far shoulder, falling down his back. */
const CLOAK = spline([
  [-10, 336, 1],
  [-6, 300],
  [8, 266],
  [36, 238],
  [70, 222],
  [96, 226],
  [86, 252],
  [80, 290],
  [80, 336, 1],
])
const RUFF = ruffBand(74, 152, 204, 226, 6, 0.06)

// ── The rapier, sheathed at his hip ──────────────────────────────────────────

/** The axis of the sword: from the pommel, up and forward, down and back along the scabbard. */
const POMMEL: Pt = [232, 226]
const TIP: Pt = [36, 430]
const A = Math.atan2(TIP[1] - POMMEL[1], TIP[0] - POMMEL[0])
const along = (d: number, s = 0): Pt => [
  POMMEL[0] + Math.cos(A) * d - Math.sin(A) * s,
  POMMEL[1] + Math.sin(A) * d + Math.cos(A) * s,
]
const pt = (d: number, s = 0) => {
  const [x, y] = along(d, s)
  return `${n(x)} ${n(y)}`
}
/** The grip, bound with wire; the quillons across it; the scabbard below the guard. */
const GRIP = `M${pt(7, -4)}L${pt(30, -4.6)}L${pt(30, 4.6)}L${pt(7, 4)}Z`
const QUILLONS = bandAlong([along(34, -22), along(32, 0), along(34, 22)], 5)
const SCABBARD = `M${pt(37, -5.6)}L${pt(300, -4)}L${pt(306)}L${pt(300, 4)}L${pt(37, 5.6)}Z`
const LOCKET = `M${pt(37, -6.6)}L${pt(54, -6.4)}L${pt(54, 6.4)}L${pt(37, 6.6)}Z`
/** The swept guard: bars curving from the quillons round the hand's place to the pommel. */
const SWEEP = (() => {
  const a = along(33, 20)
  const b = along(18, 24)
  const c = along(4, 8)
  const d = along(33, 12)
  const e = along(20, 16)
  return (
    `M${n(a[0])} ${n(a[1])}Q${n(b[0])} ${n(b[1])} ${n(c[0])} ${n(c[1])}` +
    `M${n(d[0])} ${n(d[1])}Q${n(e[0])} ${n(e[1])} ${n(c[0])} ${n(c[1])}`
  )
})()
/**
 * The hand closed round the scabbard below the locket: the back of the hand
 * towards us, the fingers across the scabbard, every finger cut apart. In
 * the hand's own frame, the wrist at the origin, turned to the scabbard.
 */
const HAND_AT = along(74, -14)
const HAND_ROT = (A * 180) / Math.PI - 90
const PALM = spline([
  [-2, -11],
  [7, -13],
  [14, -10],
  [15, 0],
  [14, 11],
  [6, 13],
  [-2, 10],
])
const DIGITS: Digit[] = [
  { from: [10, 10], to: [24, 10.4], w: 6 },
  { from: [10, 4], to: [25.6, 4.2], w: 6.2 },
  { from: [10, -2], to: [25.6, -2], w: 6.2 },
  { from: [10, -8], to: [24, -8.2], w: 6 },
  { from: [2, -10], to: [17, -15.4], w: 6.6 },
]
const KNUCKLES = 'M11.6 -10.4L11.6 12.6'
/** His forearm in the doublet's sleeve, from below the block up to the hand. */
const SLEEVE = spline([
  [104, 346, 1],
  [118, 322],
  [146, 300],
  [170, 286, 1],
  [182, 308, 1],
  [158, 320],
  [136, 346, 1],
])
const WIRE = [12, 16, 20, 24, 28].map((d) => `M${pt(d, -4.4)}L${pt(d + 2.6, 4.4)}`).join('')

type Marks = { hair: string; nape: string; beard: string; body: string; cloak: string }

const marks = once((): Marks => {
  const hair = locks(
    7702,
    16,
    (t) => [144 - t * 90, 66 - t * 2],
    (t) => [86 - t * 34, 120 + t * 50],
    [0.8, 1.3],
    -8,
  )
  const nape = napeShade(7703, 150, 118, 86, 112)
  const beard = locks(
    7704,
    5,
    (t) => [108 + t * 40, 150 + t * 8],
    (t) => [128 + t * 20, 200 + t * 14],
    [0.5, 0.8],
    1,
  )
  const body = folds(7705, [110, 200], [262, 290], 4)
  const cloak = folds(7706, [4, 80], [260, 286], 6)
  return { hair, nape, beard, body, cloak }
})

/** The feather's quill and its barbs, cut in paper. */
const featherCuts = once(() => {
  let d = gouge(84, 32, 4, -6, 1.1, 2.6)
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    const x = 80 - t * 72
    const y = 28 - t * 32 + t * t * 14
    d += gouge(x, y, x - 6, y + 9, 0.8, 0) + gouge(x, y, x + 2, y - 8, 0.7, 0)
  }
  return d
})

/** Laertes, head and shoulders, with his rapier, facing right in the 0..240 by 0..332 frame. */
export function LaertesFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-lae`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-beard`}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      {/* "an absolute gentleman": the doublet, buttoned, the belt and the short cloak */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={FRONT} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      <Buttons pts={BUTTONS} r={2.7} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />

      <path d={YOUTH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={YOUTH_JAW} strokeWidth={1.3} />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut {...YOUTH_EAR} />
      <YouthNoseAndMouth />
      <YouthEye look="open" />
      {/* the short pointed beard and the moustache */}
      <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-beard)`}>
        <path d={m.beard} fill={PAPER} />
      </g>
      <path d={MOUSTACHE} fill={INK} />

      {/* the small cap and the feather curling back from it */}
      <path d={FEATHER} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={featherCuts()} fill={PAPER} />
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={gouge(50, 74, 156, 64, 2, -1)} fill={PAPER} />

      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />

      {/* "for your rapier most especially": sheathed, held across him by the scabbard */}
      <path
        d={SCABBARD}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round" strokeLinecap="round">
        <path d={GRIP} />
        <path d={QUILLONS} />
        <path d={LOCKET} />
        <path d={SWEEP} fill="none" />
        <circle cx={along(2)[0]} cy={along(2)[1]} r={6} />
      </g>
      <path d={LOCKET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={QUILLONS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={GRIP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={WIRE} fill="none" stroke={INK} strokeWidth={1} />
      <path d={SWEEP} fill="none" stroke={PAPER} strokeWidth={2.6} strokeLinecap="round" />
      <circle
        cx={along(2)[0]}
        cy={along(2)[1]}
        r={5.4}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <Hand
        transform={`translate(${n(HAND_AT[0])} ${n(HAND_AT[1])}) rotate(${n(HAND_ROT)})`}
        palm={PALM}
        digits={DIGITS}
        lines={KNUCKLES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round head, cap, feather, shoulders and hilt. */
function LaertesKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={YOUTH_HEAD} />
      <path d={HAIR} />
      <path d={CAP} />
      <path d={FEATHER} />
      <path d={BODY} />
      <path d={GRIP} />
      <path d={QUILLONS} />
    </g>
  )
}

const P = placing(40, 22, 0.86)

/** The hall where the match is played, the light ahead of him. */
const ground = once(() =>
  portraitGround('hamlet-laertes', 7710, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  ),
)

function LaertesPortrait({ uid }: ArtProps) {
  return (
    <>
      <defs>
        <clipPath id={`${uid}-lae-block`}>
          <rect x={8} y={8} width={PW - 16} height={PH - 16} />
        </clipPath>
      </defs>
      <path d={ground()} fill={PAPER} />
      <g clipPath={`url(#${uid}-lae-block)`}>
        <g transform={P.transform}>
          <LaertesKnockout />
          <LaertesFigure uid={uid} />
        </g>
      </g>
      <PortraitRule />
    </>
  )
}

export const laertesPortrait: LinocutArt = { width: PW, height: PH, Draw: LaertesPortrait }

const FACE_AT = P.to(142, 122)
const HILT_AT = P.to(...along(18))
const CAP_AT = P.to(156, 50)

export const laertes: Portrait = {
  name: 'Laertes',
  art: laertesPortrait,
  alt: 'A linocut portrait of Laertes in profile, facing right: a young man with a short pointed dark beard and a thin moustache, his eye open and level, his dark hair to the collar under a small dark cap with a feather curling back from it. He wears a small white ruff, a dark doublet buttoned down the front and a short cloak over his far shoulder. In one hand he holds his rapier across his body by its scabbard, the sword sheathed, its hilt standing up in front of his chest with a ball pommel, a bound grip, a crossbar and the curved bars of the guard cut in white. Three numbered red markers point to his face, his feathered cap and the hilt of his rapier.',
  describedBy: [
    { phrase: 'a very noble youth', at: FACE_AT },
    { phrase: 'an absolute gentleman', at: [CAP_AT[0] + 56, CAP_AT[1]], to: CAP_AT },
    {
      phrase: 'for your rapier most especially',
      at: [HILT_AT[0] + 52, HILT_AT[1] + 8],
      to: HILT_AT,
    },
  ],
  where: 'Act 5, Scene 1; Act 5, Scene 2; Act 4, Scene 7',
  note: 'Everyone praises Laertes: the noble youth, the swordsman whose skill Hamlet envied, the perfect gentleman. Claudius uses that skill and that pride to turn a fencing match into a murder, and the praise is what makes the trap work.',
  artNote:
    'The play praises him without describing his face. His short pointed beard, feathered cap and dress are how the panels draw him, so he can be told from Hamlet. The rapier stays in its scabbard.',
}
